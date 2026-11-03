# Computer Vision / Everything Else

计算机视觉 / 其他视觉研究

424 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## SAX: Advancing Video Diffusion Models for Sequential Action Execution

**Authors:** Haoyu Wang; Baorui Ma; Donglin Di; Shiliang Zhang

**ID:** 149472 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=prR73XRZtV>) | [PDF](<https://openreview.net/pdf?id=prR73XRZtV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149472>)

Video diffusion models have recently achieved remarkable visual fidelity\. However, when handling complex instructions with multi\-action sequential prompts, existing models frequently suffer from severe action omission or state freezing\. We attribute this bottleneck to two fundamental flaws: i\) semantic entanglement, where appearance and motion concepts are heavily intertwined within the text embedding space; and ii\) temporal attention leakage, wherein the global nature of cross\-attention along the temporal dimension biases the model towards the most visually salient action tokens throughout the entire video\. To break this bottleneck, we propose SAX, a novel diffusion transformer framework designed for the synergistic generation of appearance and dynamic actions\. First, we introduce a dual\-stream attention mechanism that explicitly decouples dynamic action interactions from the static appearance generation process\. Besides, to establish a precise temporal\-action mapping, we design the Layer\-adaptive Action Choreographer\. By integrating a shared Global Temporal Table and an Action Ordinal Table, this module dynamically generates a temporal\-action alignment map for each layer\. Furthermore, to overcome the implicit convergence difficulties inherent in temporal\-action alignment optimization, we innovatively employ a Vision\-Language Model as a temporal\-semantic supervisor\. Through distribution distillation, we directly inject the VLM's powerful temporal\-action grounding priors into the learning of the alignment maps\. Extensive experiments on action generation and prediction demonstrate that SAX substantially outperforms existing models across core metrics\.

## Long Video Instructional Editing in the Wild

**Authors:** Yiqi Lin; Guoqiang Liang; Ziyun Zeng; Zechen Bai; Yanzhe Chen; Mike Zheng Shou

**ID:** 151911 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WxwO1ainQv>) | [PDF](<https://openreview.net/pdf?id=WxwO1ainQv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151911>)

Instructional video editing has matured rapidly on short, single\-shot clips, yet long videos, the dominant form of video in practice, remain largely unaddressed\. Long videos exhibit failure modes that short\-video editing does not stress\-test: edit targets recur across temporally distant shots under varying viewpoint, scene, and scale, demanding cross\-shot semantic consistency, while non\-target intervals must be left unchanged, demanding accurate temporal grounding of the instruction\. We present a hierarchical framework that addresses these two axes with dedicated components: a planning agent that grounds the instruction and partitions the timeline into shot\-aligned segments, a long\-term anchor bank that maintains a sparse set of high\-quality cross\-shot anchors through critic\-driven iterative refinement on top of a strong image editing prior, and an anchor\-conditioned video editor obtained by lightly adapting a pretrained short\-video editor through LoRA, with no architectural changes\. The editor is trained exclusively on short\-video pairs and lifted to long videos at inference through its conditioning interface, requiring no long\-video supervision\. To evaluate this regime, we introduce LVEdit\-Bench, the first benchmark designed for long\-video instructional editing in the wild, together with a three\-tier evaluation protocol that isolates per\-shot fidelity, cross\-shot identity preservation, and robustness to target\-absent content under a structured VLM\-judge protocol\. Across all three settings, our method matches strong short\-video editors on per\-segment quality and substantially improves cross\-shot consistency and grounding, with the margin widening as temporal complexity grows\.

## My Video Stays Mine: Temporally Consistent Universal Adversarial Perturbations against Video Customization

**Authors:** Yuxin Huang; Mingming Gong; Wanyu Wang; Jing Zhang; Tongliang Liu

**ID:** 153298 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MIAM3vbVhL>) | [PDF](<https://openreview.net/pdf?id=MIAM3vbVhL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153298>)

Recent diffusion\-based video generation models have enabled high\-quality video customization through both tuning\-based pipelines, which fine\-tune a video diffusion model, and reference\-based pipelines such as image\-to\-video generation\. However, these capabilities raise serious concerns about facial privacy and security\. Existing anti\-diffusion protections focus on the image domain or on reference\-based I2V pipelines, leaving the tuning\-based video customization unexplored\. Protecting videos in this setting raises three challenges: image\-level perturbations are erased by temporal operations, a perturbation tied to one clip fails to generalize across videos and lengths, and inconsistent temporal noise is easily removed by temporal attack\. To address these challenges, we propose Temporally Consistent Universal Adversarial Perturbations \(TC\-UAP\), the first protection method against both reference\- and tuning\-based video customization\. TC\-UAP learns a multi\-frame universal adversarial perturbation over a set of videos of the same identity, so that a single perturbation can transfer to unseen videos and arbitrary clip lengths of that identity\. Besides, we further enforce consistency through intrinsic temporal modeling and an extrinsic surrogate temporal\-attack loss, ensuring robustness against temporal attacks\. Extensive quantitative and qualitative experiments show that TC\-UAP degrades identity preservation more than existing baselines under both tuning\-based and reference\-based video customization, and remains robust under three unseen temporal attacks\.

## Holo4D: Holistic 4D Reconstruction as Geometric Control for Video Diffusion

**Authors:** Yushi LAN; Zeren Jiang; Koichi Namekata; Xingang Pan; Chuanxia Zheng; Andrea Vedaldi

**ID:** 154530 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cu9FVR16z6>) | [PDF](<https://openreview.net/pdf?id=Cu9FVR16z6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154530>)

Reconstructing a dynamic 4D scene along a novel camera trajectory requires both metric geometry from the source video and generative completion of disoccluded target\-view regions\. Feed\-forward 4D reconstruction models recover increasingly comprehensive input\-view geometry, including depth, point maps, and dense 3D tracks, but remain tied to the observed camera stream\. Camera\-controlled video diffusion models \(VDMs\) provide strong generative priors for novel\-view synthesis, yet their camera control is typically not precise enough for metric novel\-view reconstruction\. We argue that comprehensive input\-view 4D reconstruction is an effective geometric interface between these two capabilities: properly exposed to a VDM, it turns reconstruction outputs into camera\-accurate novel\-view RGB videos that remain geometrically consistent under downstream 4D reconstruction\. We introduce HOLO4D, a geometry\-aware video\-to\-video framework that controls a pretrained VDM with a hybrid 4D geometric cache built from the source video\. A small set of source views covering the camera motion forms the static cache, while dynamic regions are rendered from the matching source frame\. The resulting hybrid RGB\-D representation is combined with explicit valid masks, target\-camera ray embeddings, and dense 3D tracking tokens\. Conditioned on this 4D scaffold, the diffusion backbone synthesizes the target\-view RGB video\. Under a common downstream 4D reconstructor, our generated videos yield target\-view depth more consistent with the held\-out reconstruction than that of the baselines, and an additional feature\-level readout shows that intermediate VAE features already encode target\-view depth\. Experiments and ablations further show that progressively richer 3D/4D reconstruction signals improve camera adherence\.

## Fourier Contour Learning for Efficient and Traceable Cardiac MRI Quantification

**Authors:** Yi Yu; Zhenyu Bu; Ziyu Zhang; Yixuan Liu; Aotian Chen; James Mihalich; Parker Martin; Xia Ning; Yuchi Han; Yuan Xue

**ID:** 153442 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LI2SkSGEGQ>) | [PDF](<https://openreview.net/pdf?id=LI2SkSGEGQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153442>)

Automated cardiac MRI quantification is commonly framed either as dense segmentation followed by voxel counting or as direct regression of global measurements\. The two paradigms are difficult to unify: segmentation is visually interpretable but label\-intensive and output\-heavy, while regression is compact but less verifiable\. We propose Fourier Contour Learning, which represents cardiac boundaries with compact anatomical Fourier contours\. The predicted coefficients define smooth, interpretable contours and enable differentiable volume computation, connecting mask supervision, measurement supervision, and unlabeled\-image regularization within one framework\. We instantiate this representation with an anatomy\-query decoder and cross\-slice attention which creates a traceable path from image to contour to clinical measurement\. Across three public datasets and an in\-house all\-phase cohort, our method achieves segmentation accuracy comparable to strong dense\-prediction baselines, improves boundary agreement, and reduces clinically relevant volume error while using only a small number of output parameters per structure\. We further show that the learned model provides an efficient interface for vision\-language question answering and surface reconstruction\. These results demonstrate the potential of Fourier contours as a unified intermediate representation for scalable, traceable, and clinically grounded cardiac analysis\. Code will be publicly available upon acceptance\.

## ViMU: Benchmarking Video Metaphorical Understanding

**Authors:** Qi Li; Xinchao Wang

**ID:** 138897 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y9AFeAdA6a>) | [PDF](<https://openreview.net/pdf?id=y9AFeAdA6a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138897>)

Any new medium, once it emerges, is used for more than the transmission of overt content alone\. The information it carries typically operates on two levels: one is the content directly presented, while the other is the subtext beneath it—the implicit ideas and intentions the creator seeks to convey through the medium\. Likewise, since video technologies became widely adopted, video has served not only as a powerful tool for recording and communicating visual information, but also as a vehicle for emotions, attitudes, and social meanings that are often difficult to articulate explicitly\. Thus, the true meaning of many videos does not reside solely in what is shown on screen; it is often embedded in context, style of expression, and the viewer’s social experience\. Some forms of such video subtext are humorous, while others carry irony, mockery, or criticism\. These implicit meanings can also be interpreted very differently across cultural backgrounds and social groups\. However, most existing video understanding models still focus primarily on literal visual comprehension, such as recognizing objects, actions, or temporal relations, and lack a systematic ability to understand the metaphorical, ironic, and social meanings embedded in videos\. To bridge this gap, we introduce ViMU \(Video Metaphorical Understanding\), the first benchmark designed to systematically evaluate the subtext understanding capabilities of frontier models in videos\. ViMU assesses whether video understanding models can go beyond literal perception to infer implicit meaning, rhetorical devices, social signals, target subjects, and culturally grounded subtext, while grounding their interpretations in multimodal evidence and answering both open\-ended and multiple\-choice questions\. Importantly, all questions are designed to be hint\-free, ensuring that no key evidence is disclosed to models before answering\. Extensive experiments show that most frontier models, including closed\-source ones, achieve below 50\\% overall performance\. We further conduct fine\-grained analyses to uncover distinctive model behaviors\. Disclaimer: This paper contains potentially offensive and harmful content\.

## SUPERVISE: A Unified Framework for Standardized and Reproducible Superpixel Evaluation

**Authors:** Julien Walther; Rémi Giraud; Michaël Clément

**ID:** 139383 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TpOx3zA846>) | [PDF](<https://openreview.net/pdf?id=TpOx3zA846>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139383>)

Image segmentation into superpixels is a widely used technique in computer vision, with a large body of work developed over the years\. Yet, its evaluation remains poorly standardized, as methods are compared under heterogeneous protocols, across inconsistent scale ranges, and with redundant or misaligned metric subsets\. In this work, we introduce $\\textbf\{SUPERVISE\}$ \(SUperpixel PERformance VISualization and Evaluation\), a unified and reproducible benchmark that addresses these longstanding inconsistencies\. Built on a scale\-normalized protocol based on interpolation over the actual number of generated superpixels, SUPERVISE enables fair and consistent cross\-method comparisons\. We leverage this standardized framework to conduct the first large\-scale statistical analysis of 20 evaluation metrics across 7 datasets and 31 methods — revealing strong inter\-metric correlations and significant redundancy that challenge common evaluation practices\. These findings provide empirical grounding for a compact, representative metric subset\. SUPERVISE is released as a lightweight, modular framework built on precomputed shared label maps, making large\-scale reproducible evaluation accessible to the community\. All code, label maps, and evaluation results are publicly available at: https://anonymous\.4open\.science/r/evaluation\_superpixel\-08B1/

## Anchoring Physiological Invariance, Expanding Domain Plasticity: Prior\-Stabilized Dynamic Adaptation for Continual rPPG Measurement

**Authors:** Zhongtian He; Shuyang chu; Jingang Shi

**ID:** 149063 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t9PpANJFJe>) | [PDF](<https://openreview.net/pdf?id=t9PpANJFJe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149063>)

Remote photoplethysmography \(rPPG\) enables non\-contact physiological measurement from facial videos, but performance often degrades under unseen environments due to severe domain shifts\. Continual learning offers a practical paradigm for updating rPPG models over sequential domains\. However, it is challenged by two coupled issues: First, adapting to new domains may overwrite previously acquired physiological representations, resulting in the degradation of physiological consistency across domains\. Second, drastic environmental variations induce heterogeneous facial video distributions, making the adaptation process unstable and prone to suboptimal convergence\. To address these challenges, we propose ApexPhys, a continual rPPG framework that simultaneously anchors physiological invariance and expands domain plasticity\. Specifically, we introduce a Backbone Consistency Representation Preservation \(BCRP\) mechanism, which leverages the Fisher Information Matrix to identify and preserve parameters critical to physiological consistency\. To enhance adaptation flexibility under diverse environmental shifts, we further propose a Hierarchical Expansion Strategy \(HES\) that autonomously perceives layer\-wise distribution discrepancies and dynamically expands hierarchical adaptation branches\. Additionally, we develop a Prior\-Guided Pathfinding \(PGP\) strategy, which leverages parameter inheritance to guide the adaptation along a stable trajectory\.  Experiments on five public datasets demonstrate that ApexPhys achieves strong anti\-forgetting performance and robust adaptation under continual learning\.

## SphereVAD: Training\-Free Video Anomaly Detection via Geodesic Inference on the Unit Hypersphere

**Authors:** Chao Huang; Pengfei Wei; Wei Wang; Jie Wen; Zhihua Wang; Li Shen; Wenqi Ren; XIAOCHUN CAO

**ID:** 152043 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vx5NOUBXIF>) | [PDF](<https://openreview.net/pdf?id=Vx5NOUBXIF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152043>)

Video anomaly detection \(VAD\) aims to automatically identify events that deviate from normal patterns in untrimmed surveillance videos\. Existing methods universally depend on large\-scale annotations or task\-specific training procedures, severely limiting their rapid deployment to novel scenes\. We observe that intermediate\-layer features of pre\-trained multimodal large language models \(MLLMs\) already encode rich anomaly semantics, yet existing approaches rely on the language output pathway and fail to exploit the geometric discriminability latent in these representations\. Based on this finding, we propose SphereVAD, a fully training\-free, zero\-shot VAD framework that recasts anomaly discrimination as von Mises–Fisher \(vMF\) likelihood\-ratio geodesic inference on the unit hypersphere, unleashing latent discriminability through principled geometric reasoning rather than learning new representations\. Specifically, SphereVAD first applies Fréchet mean centering to unfold feature distributions and eliminate domain biases, then employs Holistic Scene Attention \(HSA\) to reinforce feature consistency using cross\-video priors, and finally performs vMF\-guided Spherical Geodesic Pulling \(SGP\) to align ambiguous segments with directional prototypes on the spherical manifold\. This training\-free pipeline requires only minimal synthetic images for calibration\. SphereVAD establishes new state\-of\-the\-art results among training\-free approaches on three major benchmarks and remains competitive with fully supervised baselines\. Code will be available upon acceptance\.

## Unified Forensic Preference Learning for Generalizable Synthetic Image Detection

**Authors:** Laixin Zhang; Shuaibo Li; Wei Ma; Jianyu Lai; Lei Zhu; Hongbin Zha

**ID:** 150807 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGUaeL5g1k>) | [PDF](<https://openreview.net/pdf?id=fGUaeL5g1k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150807>)

Despite rapid progress in synthetic image detection, detectors that perform well on known generators often become brittle when the source model, post\-processing pipeline, or scene composition changes\. A key reason is that standard binary supervision teaches models to separate training distributions rather than to identify authenticity\-relevant evidence: low\-level artifacts become shortcuts, while higher\-level semantic implausibilities remain weakly grounded\. To address this limitation, we propose UniFPL , a unified forensics preference learning framework that converts multimodal large language model \(MLLM\) forensic knowledge into image\-specific preference supervision\. UniFPL constructs forensic preference data from both controlled artifact synthesis and observed artifact harvesting, then learns from list\-level evidence rankings that encode which visual\-textual cues are more diagnostic of synthetic manipulation\. On top of a CLIP\-based discriminative detector, UniFPL jointly optimizes authenticity classification, artifacts\-aware preference alignment, and semantic structure regularization, allowing the model to inherit contextual forensic reasoning while retaining the stable and efficient inference of a discriminative encoder\. Across eleven curated and in\-the\-wild benchmarks, UniFPL achieves an average balanced accuracy of 93\.4\\% and improves the worst\-case accuracy from 81\.4\\% to 86\.1\\% over the strongest baseline, demonstrating stronger cross\-generator generalization and robustness to real\-world image degradations\.

## Behavioral Geometric Supervision Aligns Video Foundation Models with Human Social Perception

**Authors:** Kathy Garcia; Leyla Isik

**ID:** 149277 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rVX7LF9vry>) | [PDF](<https://openreview.net/pdf?id=rVX7LF9vry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149277>)

Current video foundation models, including the strongest self\-supervised models such as V\-JEPA2, fail to capture how humans organize social information in dynamic scenes\. For example, across a range of diverse vision models tested, none were able to predict human similarity judgments to social video clips as well as a sentence embedding model of the caption text \(MPNet\)\. We show this gap in vision model performance can be closed by a compact behavioral supervisory signal\. We introduce behavioral geometric supervision \(BGS\): a hybrid objective that constrains local and global pairwise embedding geometry to match the relational similarity structure across videos\. We apply this method using a new human similarity dataset, containing 49,484 odd\-one\-out judgments from 250 naturalistic social video clips, and low\-rank adaptation across four ViT backbones \(V\-JEPA 2/2\.1, TimeSformer, VideoMAE, and CLIP\)\. We find that one of the best fine\-tuned models, V\-JEPA 2\.1, nearly triples in performance compared to the pre\-trained baseline and reaches close to the noise ceiling, exceeding the strongest sentence\-embedding baseline\. In addition, finetuned models \(i\) capture unique variance in human judgments that caption\-based language embeddings do not, \(ii\) develop interpretable social\-affective attributes \(valence, arousal, and dominance\) despite never being trained on any of these attributes, \(iii\) zero\-shot transfer to a separate dataset of out\-of\-distribution abstract social interactions, and \(iv\) shift spatial attention from scene context to socially informative regions \(faces, gaze, and interacting bodies\)\. A matched language\-distillation control fails to reproduce these gains, ruling out caption transfer as the mechanism\. Our results show how a modest amount of human behavioral data can steer video models toward human\-like social visual understanding\.

## FrameScout: Scouting Query\-Relevant Frames for Long Video Understanding

**Authors:** Haonan Hu; Shuhao Chen; Weisen Jiang; Lizhao Gao; James Kwok; Yu Zhang

**ID:** 148460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xesmedbJGk>) | [PDF](<https://openreview.net/pdf?id=xesmedbJGk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148460>)

Long video understanding requires VideoLLMs to answer queries about videos spanning tens of minutes to hours, but such long videos produce far more visual tokens than current VideoLLMs can process\. To address this issue, keyframe selectors are proposed to select the most query\-relevant frames by computing the similarity between frame and query embeddings\. Existing selectors either encode frames independently without temporal context or process chunks in isolation with ranking objectives that are difficult to optimize\. To alleviate those limitations, we propose FrameScout with two core designs: \(i\) a streaming selector architecture that leverages a sliding\-window KV cache and successor aggregation to produce temporally\-contextualized frame embeddings; \(ii\) a frame\-query contrastive objective that aligns frame and query embeddings in a shared space, directly training the selector to distinguish relevant frames from irrelevant ones\. Extensive experiments on three long\-video benchmarks and six base VideoLLMs demonstrate that FrameScout consistently achieves state\-of\-the\-art performance\.

## Matching2Matching: Zero\-Shot Light Field Image Denoising with Matching View Construction

**Authors:** Shuo Zhang; Qian Tian; Chen Gao; LongzhaoGuo; Youfang Lin

**ID:** 148528 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xDEl8HwZKU>) | [PDF](<https://openreview.net/pdf?id=xDEl8HwZKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148528>)

Recently, Noise2Noise provides a powerful principle for learning image denoising without clean data\. However, zero\-shot methods for 2D images often rely on local similarity or non\-local self\-similarity to construct image pair for training, which is unreliable in complex scenes with highly textures\. Different from 2D image, 4D Light Field \(LF\) captures multiple views for one specific scene\. The multiple views with independent noises provides make it possible to find image pair across views\.  In this paper, we exploit the inter\-view correspondence in LF and propose a novel way to implement the Noise2Noise in 4D LF\. Specifically, we design a Matching2Matching \(M2M\) framework to construct matching views for each view in LF\. This framework generates geometrically consistent training samples by searching for corresponding patches along the epipolar line, crucially enforcing both visible and disparity consistency constraints\. The constructed views enable the network to train the denoised network in a zero\-shot way without any other data\. Experimental results show that our method effectively suppresses noise while outstandingly preserving the consistency and fine details\. Our M2M framework significantly outperforms existing zero\-shot methods in both quantitative and qualitative evaluations on synthetic and real\-world noise, demonstrating superior generalization ability without relying on external training datasets\.

## Structure\-Semantic Co\-optimized Latent Diffusion Model for Fast Visual Anagram Synthesis

**Authors:** Xiang Gao; Yunpeng Jia

**ID:** 148726 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vWSKzHnaou>) | [PDF](<https://openreview.net/pdf?id=vWSKzHnaou>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148726>)

Visual anagram is an intriguing form of art creation wherein a single image presents different conceptual interpretations under transformations such as flipping or rotation\. Recent work has achieved visual anagram synthesis by leveraging pretrained text\-to\-image \(T2I\) diffusion models, yet still suffers from several key limitations including computational inefficiency, suboptimal aesthetic quality, and weak semantic fidelity and expressiveness\. This work focuses on generating visual anagrams with substantially improved visual quality at minimal computational cost, thereby advancing intelligent creation of illusionary digital art\. To increase image resolution while reducing time overhead, we adapt the cutting\-edge parallel denoising algorithm from pixel\-based T2I model to the adversarially distilled latent\-based one, and accordingly propose a structure\-semantic co\-optimization \(S2CO\) framework to counteract the consequent visual degradation\. As the core of our approach, S2CO framework comprises three key innovations: \(\\romannumeral1\) null\-text structure alignment optimization; \(\\romannumeral2\) semantic enhancement optimization; \(\\romannumeral3\) attention\-guided noise fusion\. Building upon these components, our method dubbed \\textbf\{S2CO\-Anagram\} is able to generate higher\-resolution anagram images with noticeably superior visual harmony and semantic faithfulness than related SOTA approaches, all while achieving substantially faster inference speed\. Code will be publicly available\.

## ReGenHuman: Re\-Generating Human Appearances for Realistic Full\-Body Video Anonymization

**Authors:** Adam Sun; Eshaan Barkataki; Arnold Milstein; Gordon Wetzstein; Ehsan Adeli

**ID:** 148181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zgk8N9WGSM>) | [PDF](<https://openreview.net/pdf?id=zgk8N9WGSM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148181>)

Anonymizing human\-centric video data is an understudied problem\. Prior anonymization techniques either blur or redact pixels at the cost of realism and downstream utility, or generate frame\-by\-frame at the cost of temporal coherence\. We introduce ReGenHuman, the first full\-body video anonymization pipeline that is simultaneously realistic, temporally consistent, and anonymous by construction\. Contrary to past approaches which redact or edit the inputs directly, we propose a regenerate, don't edit paradigm\. Our approach composites 2D pose, segmentation, and monocular depth into two complementary conditioning streams\-\-\-StructAll and StructHuman, which are used to fine\-tune a video\-to\-video diffusion backbone on in\-the\-wild human videos, synthesizing the human regions entirely from identity\-free structural cues\. We evaluate our model on privacy, quality, and utility, and show that our ReGenHuman achieves the best tradeoff across all three axes against current baselines\. We further show that our anonymized videos remain effective for downstream tasks, including video question answering\.

## NORA: Evaluating Grounded Reasonableness in Visual First\-person Normative Action Reasoning

**Authors:** Sichao Li; Sai Ma; Daniel Kilov; Secil Yanik Guyot; Zhuang Li; Seth Lazar

**ID:** 139532 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOCSWLuBCV>) | [PDF](<https://openreview.net/pdf?id=KOCSWLuBCV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139532>)

LLMs and agentic systems are increasingly deployed in social environments, making normative competence critical for safe and appropriate behavior\. However, existing approaches either assess normative judgment in text alone or reduce it to choosing among a fixed set of candidate actions\. We argue both are insufficient\. In practice, agents are never handed a menu of options; they must identify a reasonable action from scratch, grounded in visible facts and supported by inspectable reasons\. We introduce NoRA, a visual first\-person video benchmark that requires models to generate candidate next actions and justify each through an explicit fact–reason–action support graph\. The benchmark comprises 1420 annotated video clips, including HhumanGold\-190 and LLMSilver\-1230 splits\. Each instance is evaluated through action alignment, factual grounding, and support binding, aggregated into a single grounded reasonableness score\.  We benchmark 12 multimodal systems under direct, deliberative, and structured prompting regimes, finding that current VLMs frequently recover plausible actions and relevant scene facts, but consistently struggle to construct the full reasonable action space and bind selected actions to the correct local support\. NoRA makes this gap measurable, shifting the evaluation question from whether a model can pick an action to whether it can justify an appropriate action for the right visible reasons\.

## World from Motion: Generative Dynamic Gaussian Reconstruction from Monocular Video

**Authors:** Liyuan Zhu; Shengyu Huang; Amrita Mazumdar; Tianye Li; Zan Gojcic; Gordon Wetzstein; Iro Armeni; Shalini De Mello; Alex Trevithick

**ID:** 151279 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bZYP6V0M6p>) | [PDF](<https://openreview.net/pdf?id=bZYP6V0M6p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151279>)

We present World from Motion, a method for generating freely renderable dynamic 3D Gaussian representations from monocular videos\. Our approach conditions a video model on dense, pixel\-aligned renderings that encode appearance, geometry, and 3D scene motion along both source and target camera trajectories to correct rendering artifacts and fill in missing regions from an initial reconstruction\. To train this model, we construct a dataset of aligned multiview video pairs and dynamic 3DGS representations, with simulated artifacts characteristic of monocular reconstruction\. At test time, we distill the model’s generations, including newly\-observed regions and motions, back into a single consistent, high\-quality dynamic 3DGS, improving both novel\-view synthesis and the underlying 3D motion\. Our method sets a new state of the art in 4D reconstruction and seamlessly generalizes to in\-the\-wild videos with large viewpoint changes and dynamic motions\.

## RA\-CFGCache: From Branch\-Level Criteria to Guided\-Risk Control under Classifier\-Free Guidance

**Authors:** Yiming Liu; Ben Wan; Hui Chen; Ao Wang; Yuqi Xiong; Fan Zhang; Tongxuan Liu; guiguang ding

**ID:** 150708 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g6toliY0op>) | [PDF](<https://openreview.net/pdf?id=g6toliY0op>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150708>)

Diffusion models dominate visual generation, but iterative denoising remains computationally demanding, especially under Classifier\-Free Guidance \(CFG\), which is crucial for high\-fidelity generation yet nearly doubles per\-step computation\. To reduce this burden, recent training\-free caching methods reuse intermediate predictions during sampling, yet their single\-prediction criteria are misaligned with CFG sampling, where the denoising update is governed by the guided prediction rather than either branch alone\. Consequently, such reuse may misestimate the error that actually perturbs sampling, leading to a branch\-guided mismatch \. Moreover, due to error propagation across timesteps, a local guided error may not faithfully reflect the final deviation, inducing a local\-final mismatch \. To address these two mismatches, we propose RA\-CFGCache , a R isk\- A ligned Caching framework for CFG\. RA\-CFGCache introduces CFG\-aware Guided\-Risk Composition to align caching decisions directly with the guided prediction, and Propagation\-Aware Rescaling to calibrate local guided risks against the final generative deviation\. Extensive experiments on FLUX\.1\-dev, Wan2\.1\-T2V\-1\.3B, and CogVideoX\-2B show that RA\-CFGCache delivers superior efficiency\-fidelity trade\-offs over existing training\-free caching methods\. Moreover, RA\-CFGCache is compatible with diverse caching strategies and can further enhance their fidelity, e\.g\., improving PSNR over MagCache from 21\.46 to 24\.02 under CFG\. The code is available at https://anonymous\.4open\.science/r/RA\-CFGCache/\.

## One Unified Representation: Resolving the Appearance\-Semantics Dilemma via Structural Regularization

**Authors:** RUIQI YANG; Fei Zhou; Yi Zhang; Liang Li; Xiangyu Yue

**ID:** 150578 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h8OZt7oFDM>) | [PDF](<https://openreview.net/pdf?id=h8OZt7oFDM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150578>)

The Representation Autoencoder \(RAE\) shows that a frozen high\-dimensional semantic ViT representation enables both image reconstruction and DiT\-based generation\. However, RAE's semantic\-only representation lacks appearance details, yielding suboptimal reconstruction\. Full fine\-tuning the encoder with reconstruction loss induces catastrophic semantic collapse: the encoder overfits to appearance, loses semantic discriminability, and cripples generation\. This failure arises because the reconstruction loss imposes an appearance prior that erodes semantic structure\. To resolve this conflict, we propose Semantic Structure Regularization \(SSR\)\. SSR builds on self\-distillation, using a learnable student and a frozen teacher that retains the original semantics\. In addition to standard latent alignment, which forces the student's representation to match the teacher's, we introduce two complementary regularizers that prevent appearance overfitting from corrupting semantic structure\. First, spatial self\-similarity distillation forces the student to reproduce the teacher's patch\-wise relational patterns\. Invariant to appearance changes, this relational signature anchors high\-order semantics and prevents the sacrifice of structure for pixel fidelity\. Second, structure\-anchored alignment decouples structure from appearance\. Using a frequency\-domain transform, we extract a high\-frequency structural map \(edges, boundaries\) from each image while discarding low\-frequency appearance\. The teacher's representation of this structural map then regularizes the student's representation of the original image\. Consequently, the student learns appearance details from the reconstruction loss without penalty, where the regularization enforces only structural consistency and enables pixel\-level encoding without semantic drift\. The result is a unified representation that excels at high\-fidelity reconstruction, discriminative perception, and efficient DiT\-based generation\. Our work provides a principled path toward a single semantic space bridging perception and generation, challenging the classic dichotomy\. Code and models will be released\.

## Learning Hierarchical Patch Splitting Policies for Faster Vision Transformers

**Authors:** Aditya Gupta; Jean S Dandurand; Kai Qiu; Rohan Choudhury; László Jeni

**ID:** 155277 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6sIQyaLLcq>) | [PDF](<https://openreview.net/pdf?id=6sIQyaLLcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155277>)

Vision Transformers \(ViTs\) are bottlenecked by the length of their input token sequence\. Standard patchification fixes this length with a single patch size applied across the image, regardless of regional content\. Prior work on adaptive patch sizing reduces token count by assigning coarser patches to visually simple regions, but relies on noisy pixel\-level heuristics such as local entropy to make patchification decisions\. We argue that this compute allocation should be grounded in the model’s own semantic representations, not in raw pixel statistics\. We introduce Split Policy Learned Image Tokenization which learns to allocate token resolution based on what the model finds meaningful, producing shorter token sequences that are better matched to task\-relevant content\. SPLIT matches the accuracy of full\-resolution ViT classification baselines while using 30% fewer tokens\. The same gains hold dense prediction: SPLIT achieves competitive accuracy on COCO and ADE20K, demonstrating that semantically grounded patchification generalises well beyond classification\.

## AURA: An Autonomous Retouching Agent with Photographic Visual Thinking

**Authors:** Shuaizheng Liu; Fangzhou Han; Jiarong Liao; Yujing Sun; Lingchen Sun; Ruibin Li; Xinyu Wei; Jie Liang; Hui Zeng; Xindong Zhang; Lei Zhang

**ID:** 148451 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjji3AG4Rb>) | [PDF](<https://openreview.net/pdf?id=xjji3AG4Rb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148451>)

Professional image retouching is a sequential and reasoning\-driven process\. Photographers first analyze scene semantics, lighting structure, and depth cues to design a retouching plan, and then progressively apply global tone grading and mask\-guided local corrections based on the evolving visual outcome\. Recent MLLM\-empowered retouching agents either predict global parameters or respond to user\-provided retouching instructions\. Although showing impressive results, they lack the capacity for autonomous sequential reasoning and fall short of fine\-grained local control\. We propose AURA , an AU tonomous R etouching A gent that emulates the workflow of expert photographers\. Given an input photograph, AURA autonomously assesses the scene and proceeds progressively\. At each step, it reasons about what to retouch, executes the adjustment, and feeds the result back as visual context for next\-step reasoning, forming a fine\-grained visual chain\-of\-thought that evolves with the image\. To support AURA, we contribute the first expert\-annotated long\-horizon retouching trajectory dataset, where expert photographers edit the input image from scratch with deliberate artistic intent\. Based on this dataset, we train AURA in two stages: supervised fine\-tuning to learn the retouching trajectory, followed by GRPO\-retouching, an agentic reinforcement learning stage that optimizes for perceptual quality and tool accuracy\. Our experiments demonstrate that AURA consistently outperforms existing methods in both quantitative metrics and user studies, enabling one\-click professional retouching and democratizing masterpiece previously accessible only to skilled experts\.

## Perception, Not Reasoning, Limits Visual Theory of Mind

**Authors:** Mohamed Rayan Barhdadi; Syed Talal Wasim; Jürgen Gall; Erchin Serpedin; HASAN KURBAN

**ID:** 138922 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wcIvtqkhgL>) | [PDF](<https://openreview.net/pdf?id=wcIvtqkhgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138922>)

Vision\-language models pass text\-based false\-belief probes at near\-human levels but drop by twenty or more percentage points the moment the same problem is conveyed visually\. The consensus diagnosis is conceptual, prescribing new belief\-reasoning modules\. We argue the bottleneck is perceptual: not what the model cannot reason about, but what it cannot see\. We propose a five\-condition dissociation protocol that holds the reasoning task constant while varying perceptual fidelity from visual only to text only, and quantify the result with the Perceptual Contribution Ratio, a dose\-response metric measuring how much of the visual\-to\-text gap a scaffold of given fidelity closes\. Instantiated on abstract 2D panels in the Heider\-Simmel tradition and naturalistic 3D game scenes from MuMA\-ToM and MindPower across seven VLMs and roughly $147\{,\}000$ API calls, ground\-truth scaffolds close the gap on every regime, matching or exceeding the text\-only ceiling on abstract panels and MuMA\-ToM\. Automatic parsers, including frontier VLMs as zero\-shot scene describers, fail\. The dominant visual\-only error mode is \\emph\{reality bias\} \($60\\%$ of false\-belief failures\): models report where an object currently is rather than where an absent agent believes it to be, the signature of a front\-end that fails to encode who was present when\. The route to better visual social reasoning runs through perception, not new reasoning modules\.

## RAVEN: Real\-time Autoregressive Video Extrapolation with Consistency\-model GRPO

**Authors:** Yanzuo Lu; Ronglai Zuo; Jiankang Deng

**ID:** 155844 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2TF93oa5z0>) | [PDF](<https://openreview.net/pdf?id=2TF93oa5z0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155844>)

Causal autoregressive video diffusion models support real\-time streaming generation by extrapolating future chunks from previously generated content\. Distilling such generators from high\-fidelity bidirectional teachers yields competitive few\-step models, yet a persistent gap between the history distributions encountered during training and those arising at inference constrains generation quality over long horizons\. We introduce the Real\-time Autoregressive Video Extrapolation Network \(RAVEN\), a training\-time test framework that repacks each self rollout into an interleaved sequence of clean historical endpoints and noisy denoising states\. This formulation aligns training attention with inference\-time extrapolation and allows downstream chunk losses to supervise the history representations on which future predictions depend\. We further propose Consistency\-model Group Relative Policy Optimization \(CM\-GRPO\), which reformulates a consistency sampling step as a conditional Gaussian transition and applies online Reinforcement Learning \(RL\) directly to this kernel, avoiding the Euler\-Maruyama auxiliary process adopted in prior flow\-model RL formulations\. Experiments demonstrate that RAVEN surpasses recent causal video distillation baselines across quality, semantic, and dynamic degree evaluations, and that CM\-GRPO provides further gains when combined with RAVEN\.

## Modeling the Vividness of Imagined Natural Scenes Reveals a Model\-Common Image\-Level Component in Vision Models

**Authors:** Morteza Mahdiani; Catherine Landry; Jasper JF van den Bosch; Frédéric Gosselin; Ian Charest

**ID:** 151888 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XB3iY2q9Vb>) | [PDF](<https://openreview.net/pdf?id=XB3iY2q9Vb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151888>)

The visual features that support vivid mental images remain poorly understood\. Here, we collected more than 229,000 vividness judgments for the 73,000 images in the Natural Scenes Dataset in a large online experiment \(n = 1,991 participants\)\. On each trial, participants viewed two images, were cued to mentally recreate one of them for 4 seconds and then rated the vividness of their mental image on a continuous scale from 0 to 100, followed by a memory task to encourage compliance\. Using these data, we trained lightweight MLP readout heads on frozen vision\-model representations to predict imagery vividness directly from image content\. Several models predicted human vividness judgments above a low\-level features baseline, with the best individual model reaching r = 0\.376 \[0\.355, 0\.396\]\. A single principal component of model predictions captured most of the cross\-model variance and matched or exceeded individual models in predicting human judgments \(r = 0\.378\)\. Even after removing human\-aligned variance, residual predictions remained highly correlated across architectures, indicating a strong shared structure in model predictions\. Attempts to extract additional human\-aligned signal through residual probes, fresh layer\-cached probes, and fine\-tuning failed; fine\-tuning instead further amplified the shared component\. This shared axis also correlated more strongly with image memorability than with vividness itself, while observer\-aware models generalized poorly to held\-out raters, suggesting that models rely on a generic image\-affordance signal rather than a vividness\-specific representation\. Together, these results show that subjective imagery vividness is partially predictable from visual content alone, while revealing a systematic gap between predictive performance and construct\-specific representation in current vision models\.

## Teaching Video Generators to Remember: Eliciting Dynamic Memory for Out\-of\-Sight State Evolution

**Authors:** Tianshuo Xu; Yichen Xie; Depu Meng; Chensheng Peng; Quentin HERAU; Bo Jiang; yihan hu; Wei Zhan

**ID:** 150012 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lRGzNHEyVe>) | [PDF](<https://openreview.net/pdf?id=lRGzNHEyVe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150012>)

Video world models should maintain evolving states when evidence is unobserved, yet current generators often freeze hidden states upon interruption\. This is not simply a capacity problem: pretrained video diffusion transformers already possess KV\-cache mechanisms capable of non\-local retrieval, but they are rarely trained to use them as dynamic memory\. We introduce ReMind, a framework eliciting dynamic memory behavior via memory\-oriented data, event\-aware training, and cache adaptation\. Organized around a taxonomy of 100\+ dynamic events, we build a camera\-annotated training mixture combining VLM\-filtered real videos, generated hard dynamics, synthetic camera loops, and memory\-interruption augmentations\. Each clip is converted into a frame graph with protected anchors, degraded intervals, and explicit temporal gaps\. A node\-structured curriculum—including node\-drop, noisy memory, frontier continuation, and reference\-cache training—forces the model to retrieve relevant past states across interruptions rather than relying solely on local continuity\. PM\-RoPE, an elegant camera\-phase RoPE extension, unlocks spatiotemporal retrieval at a single\-attention cost while preserving pretrained pathways\. ReMind achieves the best overall scores on STEVO\-Bench and recovery tasks\. Furthermore, general image\-to\-video evaluations confirm this curriculum avoids catastrophic forgetting\. We will open\-source our code, data, and models\.

## Model Guides You How to Draw: Adaptive Visual Gating for Unified Multimodal Reasoning

**Authors:** Wenxi Gao; Guanxi Lu; Didi Zhu; Hao Chen; Quan Deng; Zhican Wang; Jiankang Deng; Hongxiang Fan

**ID:** 153582 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLe1rBFnmT>) | [PDF](<https://openreview.net/pdf?id=KLe1rBFnmT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153582>)

Unified multimodal models \(UMMs\) with interleaved reasoning, which generate both textual and visual steps into intermediate reasoning traces, have demonstrated great potential for visual mathematical reasoning tasks\. However, we identify a key insight in this paradigm: generating intermediate visual reasoning steps is not always beneficial and can even be harmful, as self\-generated visual steps may introduce erroneous visual evidence that misleads subsequent reasoning\. Moreover, frequently triggering visual steps during reasoning incurs substantial computational and memory overhead, degrading inference efficiency\. To address these accuracy and efficiency challenges, we observe that the model's internal signals can indicate whether a visual step will benefit reasoning before the entire visual generation is completed\. Specifically, this work identifies two internal signals: i\) Generation Intent, which reflects whether the model has a concrete textual plan for what to draw, and ii\) Visual Fidelity, which measures whether the visual generation remains grounded in the original input image\. Leveraging these internal signals, we propose AdaViG, a training\-free adaptive visual gating method for unified multimodal reasoning\. AdaViG dynamically evaluates each triggered visual step at an early visual generation stage and aborts it when both signals are weak, thereby preventing misleading visual evidence from entering the reasoning trace while avoiding unnecessary computation\. Comprehensive experiments demonstrate that AdaViG improves accuracy by up to 5\.7\\% while reducing visual generation FLOPs by 25\.0\\%\-91\.0\\% and wall\-clock latency by 15\.4\\%\-45\.6\\%\.

## OmniCapBench: A Deep\-Structured Evaluation Framework for Fine\-Grained Audio\-Visual Captioning

**Authors:** Zhongyu Yang; Jiale Tao; Ruitao Chen; Zuhao Yang; Yingfang Yuan; Xueliang Zhao; Auden; Kai Wang; Shuai Shao; Biao Wang; Steve Yves; Qinglin Lu

**ID:** 139331 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WgEmdr50mC>) | [PDF](<https://openreview.net/pdf?id=WgEmdr50mC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139331>)

Multimodal large language models \(MLLMs\) are rapidly evolving toward continuous audio\-\-visual reasoning, creating an urgent need for evaluations that expose their capability limits\. Audio\-\-visual captioning is an ideal diagnostic task, yet current benchmarks face a coupled trade\-off: whole\-caption scores provide coverage without localization, local probes provide localization without coverage, and unconstrained LLM judges introduce instability\. We introduce OmniCapBench \(Omni\-Video Caption Benchmark\), a benchmark that reframes audio\-\-visual caption evaluation as a deep\-structured diagnostic framework\. OmniCapBench shifts the prediction target from free\-form text to sets of atomic, verifiable evaluation units across three tracks: entity references, visual shots, and audio events, enabling reliable scoring with deterministic constraint checks and localized LLM\-based semantic comparisons\. With 786 densely annotated videos, OmniCapBench effectively distinguishes MLLM perception errors, including temporal grounding failures, identity drift, cross\-modal misalignment, and hallucinated descriptions\. Evaluating frontier MLLMs reveals strong local perception but weak long\-horizon audio–visual reasoning, particularly in identity drift and cross\-modal misalignment, providing a fine\-grained roadmap for omnimodal development\.

## Reflection with Action\-Induced Visual Differences for Desktop GUI Agents

**Authors:** Yijie Ma; Chaoyue Niu; Fan Wu; Guihai Chen

**ID:** 154491 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DCT0OXlKnj>) | [PDF](<https://openreview.net/pdf?id=DCT0OXlKnj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154491>)

The Planner\-Operator\-Reflector \(POR\) framework is widely used in GUI agents to maintain objective alignment in complex tasks through modular collaboration\. However, desktop GUIs introduce a key challenge: large, dense interfaces often exhibit subtle or scattered state changes, placing most of the burden on the reflector, which must compare pre\- and post\-action screens, while the planner and operator reason over a single state\. Existing reflectors collapse change detection and outcome verification into one step, leaving evidence implicit and yielding weakly grounded decisions\. To address this limitation, we propose Evidence\-First Reflection \(EFR\), a two\-stage reflector that explicitly decouples action\-induced visual differences extraction from outcome verification\. EFR identifies the action location and candidate changed regions with Set\-of\-Marks annotations, describes and filters action\-relevant changes, and makes the final judgment from the cleaned evidence\. This evidence\-reasoning decoupled design makes reflection better grounded in screen transitions, while reducing both visual search complexity and reasoning burden\. Experiments on OSWorld\-Verified and WindowsAgentArena demonstrate that EFR improves reflector accuracy by 7\.01\\%, yielding end\-to\-end task success gains of 5\.86\\% and 5\.05\\% on the two benchmarks, respectively\.

## Towards Characterizing Scientific Image Utility and Upgradability

**Authors:** Wenzhe Li; Qihang Yan; Liang Chen; Junying Wang; Farong Wen; Yijin Guo; Chunyi Li; Zicheng Zhang; Guangtao Zhai

**ID:** 139379 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TudxFw3oZz>) | [PDF](<https://openreview.net/pdf?id=TudxFw3oZz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139379>)

Scientific images function as critical evidence in research communication, yet their integrity faces unprecedented threats from AI\-generated content that introduces subtle but consequential errors\. Existing evaluation paradigms prove inadequate: image quality assessment poorly correlate with scientific validity, while language models lack domain\-specific verification capabilities\. To address this gap, we propose the $\\textbf\{S\}$cientific $\\textbf\{I\}$mage $\\textbf\{U\}$tility and $\\textbf\{U\}$pgradability $\\textbf\{A\}$ssessment \($\\textbf\{SIU$^2$A\}$\) framework, which introduces two complementary dimensions for scientific image evaluation\. $\\textbf\{Utility\}$ encompasses $\\textit\{error detection\}$ \(identifying scientific inaccuracies\) and $\\textit\{correction feasibility\}$ \(assessing whether errors can be reliably repaired\)\. $\\textbf\{Upgradability\}$ measures the quality of correction We categorize scientific image corruption into four fundamental types: Detail Distortion, Incompleteness, False Content, and Entity Confusion\. Based on this taxonomy, we construct SIU$^2$A\-Benchmark, a comprehensive dataset featuring expert annotations for both error identification and repair\. The framework implements a unified two\-stage evaluation protocol: the first stage evaluates error detection and correction instruction generation \(Utility\), while the second stage assesses the effectiveness of actual corrections \(Upgradability\)\. Experiments reveal that current multimodal systems exhibit significant limitations in both scientific error assessment and faithful correction, exposing a fundamental gap between visual perception and scientific usability\. Our findings establish that diagnostic quality fundamentally constrains restoration performance, highlighting the critical need for robust error perception mechanisms in scientific multimodal AI\.

## UltraFlash: Accelerating Megapixel Visual Synthesis

**Authors:** Phuc Lai; Anh Nguyen; Phong H Nguyen; Anh Tran

**ID:** 154462 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DPPXv0wQVk>) | [PDF](<https://openreview.net/pdf?id=DPPXv0wQVk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154462>)

Megapixel visual synthesis with latent diffusion models requires operating far beyond the resolutions at which these models are typically trained\. Cascade refinement is a leading strategy for this setting: it starts from a base image at a native resolution and progressively upsamples it to the target resolution through multiple refinement stages\. Each stage typically performs a pixel\-space resolution transition followed by latent\-space denoising\. While prior acceleration efforts mainly focus on reducing denoising cost, we identify a complementary and underexplored bottleneck: the repeated movement of representations through the VAE\. We call these operations pixel\-space transitions \. In cascade pipelines, intermediate latents are often decoded to RGB, resized, and re\-encoded before refinement, while final latents are decoded patch by patch with dense overlap to suppress boundary artifacts\. We propose UltraFlash , a transition\-efficient approach that accelerates these VAE\-heavy operations\. UltraFlash has two components\. Latent Hyperloop replaces intermediate RGB round trips with a learned latent\-space shortcut that approximates the decode\-resize\-encode transformation without repeated VAE decoding and encoding\. Sparse Patch\-based Decoding accelerates final reconstruction by addressing patch seams caused by inconsistent GroupNorm statistics and reusing cached statistics across patches, enabling sparse VAE decoding with much smaller overlap\. Integrated into a state\-of\-the\-art cascade baseline, UltraFlash reduces 4K generation latency by approximately 2x while improving image quality\. These results show that optimizing pixel\-space transitions can improve both efficiency and fidelity, offering an effective route toward fast, high\-quality megapixel visual synthesis\.

## DEDCA: Test\-Time Adaptation for Generalized AI\-Generated Image Detection

**Authors:** Hao Tan; Qimin Zhang; Lihuang Fang; Kebing Jin; Jinghui Qin

**ID:** 151979 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WP9ROPHHjk>) | [PDF](<https://openreview.net/pdf?id=WP9ROPHHjk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151979>)

AI\-generated image detectors face significant challenges when deployed in real\-world environments, particularly when test samples are produced by unseen generators that deviate from the source training distribution\. Existing detectors often rely on a single type of evidence, such as semantic representations or low\-level generation traces, making them vulnerable when the corresponding cue becomes unreliable\. Moreover, adapting detectors to newly emerging generators usually requires target labels or retraining, which is costly and impractical\. To address these challenges, we propose Dual\-Evidence Disagreement\-Constrained Adaptation \(DEDCA\), a test\-time adaptation framework for generalized AI\-generated image detection\. DEDCA constructs a dual\-evidence detector by combining CLIP\-based semantic evidence with trace evidence extracted from shuffled entropy and residual statistics, and introduces a reliability\-aware gate to perform sample\-specific adaptive fusion\. Our key idea is to exploit the disagreement between the two evidence streams as an unlabeled adaptation signal, enabling the detector to adjust to target\-domain shifts without relying on target labels or blindly trusting a single prediction stream\. Experiments show that DEDCA achieves superior performance on the GenImage benchmark by outperforming state\-of\-the\-art AI\-generated image detectors and test\-time adaptation methods with 92\.0\\% average accuracy\.

## FARE: Forensic Acceptance Region Estimation for Catching Bait\-and\-Switch Image Generators

**Authors:** Kai Yao; Marc Juarez

**ID:** 151260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=biz1Z9lOtc>) | [PDF](<https://openreview.net/pdf?id=biz1Z9lOtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151260>)

Modern AI image generators are increasingly deployed as opaque APIs, where customers can query the deployed service, but cannot inspect model weights or architecture\. This creates a practical challenge: a provider may pass governance certification with one generator and later silently switch to a cheaper and lower\-quality one for deployment, compromising public trust or even safety in high\-stakes domains\. We study integrity auditing at deployment time and propose FARE \(Forensic Acceptance Region Estimation\)\. A certified generator is enrolled by training FARE on images sampled from that generator\. After deployment, FARE can determine whether a generated image is consistent with the enrolled generator\-using only that image\. FARE's features are based on image generator\-specific artifacts that have been proposed for forensic applications\. FARE amplifies these features during training by finding hard samples that tighten the acceptance region and increase sensitivity to subtle changes in the certified generator\. Across generator swaps, including substitutions with similar model versions and model variants, FARE is effective at detecting swaps, consistently outperforming existing baselines at strict operating points, and remains effective under adaptive attacks that actively manipulate images to evade swap detection\.

## Can Pixels Alone Reveal Image Origin? Minimax Limits and Learnable Interfaces for Passive Provenance

**Authors:** Kai Yao

**ID:** 154460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DQ0b1sTnB8>) | [PDF](<https://openreview.net/pdf?id=DQ0b1sTnB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154460>)

Passive image provenance asks whether pixels alone can reveal where an image came from: a human, an aggregate AI class, or a particular generator\. This becomes a robustness problem once a source image can be edited before the verifier sees it\. We study the problem as source\-\-target verification under adversarial distribution shift\. Our first result gives the exact best\-case limit for any image\-only verifier: the largest robust target\-acceptance gap equals the minimum total\-variation distance between the target distribution and the set of attacked source distributions\. This quantity depends on the source, target, and edit class, not on the verifier architecture\. Our second result explains why deployed public verifiers can fail before this statistical limit is reached\. If the verifier can be emulated on the attack region to error $\\varepsilon$, then a surrogate black\-box attack reaches target acceptance within $2\\varepsilon$ plus optimization error of the white\-box optimum; score\-revealing logistic and softmax heads over public features are identifiable, and approximate score access gives stable recovery bounds\. Experiments on same\-prompt real/diffusion benchmarks support this separation\. Public CLIP\-based interfaces collapse under targeted attacks, and stronger clean or adversarial retraining does not restore positive operational separation\. In our evaluated settings, positive empirical upper bounds on the robust gap appear only under private low\-bandwidth binary interfaces with abstention\. The main lesson is simple: robust passive provenance requires both a source\-\-target statistical analysis and an interface\-aware evaluation of what the verifier reveals\.

## Hider–Seeker Self\-Play: Geometry\-Verifiable Process Rewards for Long\-Horizon Visual Search

**Authors:** Yu Mao; Shengchao Chen

**ID:** 149113 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smof5snaBr>) | [PDF](<https://openreview.net/pdf?id=smof5snaBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149113>)

Long\-horizon visual search requires a vision\-language policy to execute multi\-step spatial actions over high\-resolution images, where performance depends on the entire trajectory rather than any single decision\. Existing supervision breaks at this horizon: outcome\-only RLVR collapses many geometric decisions into a single delayed signal and discards the per\-step geometry the environment already computes, while LLM\-judged step rewards recover density at the cost of verifiability, scale linearly with trajectory length, and conflate distinct failure modes\. We propose HSSP, a self\-play framework in which a Hider adaptively weights challenging skeletons from a fixed trajectory pool and a Seeker learns to solve them through grounded spatial actions\. Instead of relying on external judges, HSSP supervises every step with a geometry\-verifiable process reward built from target\-directed progress and exploration coverage, with trajectory length and spatial redundancy enforced as separate Constrained Markov Decision Process \(CMDP\) constraints\. We pair HSSP with V\-Trace, a trajectory\-level companion dataset that augments skeleton seeds from established benchmarks with target\-region annotations and explicit search\-regime labels, ready for any trajectory\-level training framework\. The reward design admits closed\-form guarantees on backtracking, find\-versus\-explore separation, and policy invariance, providing theoretical backing for the observed gains\. Extensive empirical results on eleven challenging multimodal benchmarks, supported by controlled ablations and qualitative case studies, show that HSSP consistently outperforms advanced baselines and transfers zero\-shot to OOD tasks\.

## TopoRefine: Topology\-Aware Correspondence and Residual Refinement for Training\-Free Subject\-Consistent Generation

**Authors:** Zhanxin Gao; Zexin Ti; Chen Zhao; Beier Zhu; Xiantao Hu; Yanhao Ge; Jian Yang; Ying Tai

**ID:** 152981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ot6yn58Ort>) | [PDF](<https://openreview.net/pdf?id=Ot6yn58Ort>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152981>)

Subject\-consistent generation \(SCG\) aims to preserve subject identity across diverse text\-driven contexts\. Recent training\-free methods move beyond global sharing via correspondence\-aware identity transfer\. However, semantic\-driven correspondence may transfer identity features to appearance\-similar but structurally incompatible regions\. Meanwhile, extended attention, commonly used in existing methods, enhances identity consistency but may perturb the emerging target structure, from global pose and layout to local structural details\. Together, these issues can cause reference\-pose over\-copying, local structural artifacts, and degraded structural fidelity\. We view training\-free SCG as controlled identity injection, where the pretrained model determines the target structure, while the reference image provides subject identity\. We propose TopoRefine, a training\-free framework with Topology\-aware Subject Correspondence \(TSC\) and Residual Identity Refinement \(RIR\)\. TSC regularizes semantic matching with subject\-internal geodesic relations for structurally compatible identity transfer, while RIR injects reference identity as a foreground\-gated, magnitude\-aligned residual to preserve the emerging target structure\. Both qualitative and quantitative results show that TopoRefine improves subject consistency while better preserving target\-driven structure\.

## GVCC: Zero\-Shot Video Compression via Codebook\-Driven Stochastic Rectified Flow

**Authors:** Ziyue Zeng; Xun Su; Haoyuan Liu; Bingyu Lu; Yui Tatsumi; Hiroshi Watanabe

**ID:** 148930 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uATPoYzBvE>) | [PDF](<https://openreview.net/pdf?id=uATPoYzBvE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148930>)

At ultra\-low bitrates, high\-fidelity reconstruction requires sampling plausible videos from the posterior rather than regressing to oversmoothed conditional means\. We propose Generative Video Codebook Codec \(GVCC\), a zero\-shot framework in which a pretrained video generative model serves directly as the decoder, and the transmitted bitstream specifies its generation trajectory\. Modern rectified\-flow video models are typically sampled with deterministic ODE solvers, which leave no per\-step stochastic channel for transmitting compressed information\. GVCC addresses this by converting the deterministic flow sampler into an equivalent marginal\-preserving stochastic process, so that information can be transmitted by encoding the per\-step stochastic innovations\. Unlike images, videos introduce longer temporal dependencies and more diverse conditioning modes\. We instantiate GVCC in three practical modes: Text\-to\-Video \(T2V\) without a reference frame, autoregressive Image\-to\-Video \(I2V\) with tail latent correction, and First\-Last\-Frame\-to\-Video \(FLF2V\) with boundary\-sharing Group of Pictures \(GOP\) chaining\. On UVG, GVCC achieves the lowest LPIPS among evaluated baselines across three representative bitrate regimes \(down to $\{\\sim\}$0\.003\\,bpp\), with 65\\% LPIPS reduction over DCVC\-RT at matched bitrate\.

## LoCo: Selective Local Competition for Discriminative Open\-Vocabulary Multi\-Label Recognition

**Authors:** Zhuoming Li; Bo Han; Xiaoyu Wang; Yuheng Jia

**ID:** 155077 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8eYxZ7Wn0X>) | [PDF](<https://openreview.net/pdf?id=8eYxZ7Wn0X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155077>)

Open\-vocabulary multi\-label recognition \(OV\-MLR\) aims to identify all queried semantic concepts present in an image\. Existing methods mainly improve global image\-text matching or text\-side representations, leaving local prediction largely under\-explored\. In this paper, we revisit local prediction and reveal that it can serve as a strong discriminative branch once two properties are properly handled: spatial consistency of local visual features and compatibility\-aware local competition\. This perspective is motivated by local semantic sparsity: each image region is related to only a small subset of queried concepts, while compatible concepts of different granularities or types may still coexist locally\. We instantiate this perspective with LoCo, a selective Local Competition framework for OV\-MLR\. LoCo adopts a spatially consistent visual encoder to reduce local feature entanglement, and introduces Selective Softmax to impose competition only among locally incompatible categories while preserving compatible responses\. It further combines multi\-scale local aggregation with global prediction to handle objects at different scales and scene\-level semantics\.  Experiments on four multi\-label benchmarks show that LoCo achieves state\-of\-the\-art performance, with average gains of \+11\.3\\% F1\-score and \+5\.2\\% mAP\.  Our results suggest that local semantic sparsity offers a useful basis for developing more discriminative open\-vocabulary multi\-label recognition methods\. Code is available in the supplementary material\.

## Rectifying Categorical Flows on Statistical Manifolds for One\-Step Generation

**Authors:** Xiaohuan Jia; Renzhe Xu; Xiao Wang; Jiayun Wu; Shaohua Fan

**ID:** 151975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WQqyE4RiCg>) | [PDF](<https://openreview.net/pdf?id=WQqyE4RiCg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151975>)

Generative modeling for discrete data has been significantly advanced by learning continuous vector fields on the statistical manifolds to transport simple priors to target discrete distributions\. However, because these continuous\-time flows are not constrained to follow geodesics on the statistical manifold, thereby requiring multi\-step numerical integration for simulation and leading to substantial computational costs during inference\. In this work, drawing inspiration from the ''straight and fast'' properties of Rectified Flow in continuous Euclidean space, we propose the Rectified Statistical Flow \(ReSFlow\) model, which enables one\-step categorical generation on statistical manifolds by explicitly learning geodesic trajectories that adhere to the intrinsic Riemannian geometry\. By rectifying the flow on the statistical manifold, we theoretically guarantee that trajectories between prior and target distributions approximate geodesics\. This rectification significantly reduces the transport cost by aligning the learned trajectories directly along geodesics on the statistical manifold, allowing the model to map pure noise to target discrete data in a single step\. Through extensive experiments on diverse real\-world generative tasks, ranging from image and text to biological domains, we demonstrate ReSFlow's superior one\-step generation quality, which truly embodies geodesically optimal and rapid categorical generation\.

## Visual Expert Skipping for MoE\-MLLMs via K\-Armed Bandit based Expert Estimation

**Authors:** hongbo Zhou; Jiapeng Zhang; Yuqi Liu; Qiong Wu; Jun Peng; Xiao Chen; Yiyi Zhou; Rongrong Ji

**ID:** 151613 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZEWEsIPIyE>) | [PDF](<https://openreview.net/pdf?id=ZEWEsIPIyE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151613>)

Despite great success, existing MoE\-MLLMs still suffer from substantial visual expert redundancy, making visual expert skipping a critical solution\. However, deriving an effective and fixed skipping policy is still an open problem, mainly due to the exponentially large layer\-wise policy space and the dependency between expert allocations across layers\. In this paper, we propose a novel and training\-free approach for MoE\-MLLMs, termed \\emph\{K\-armed bandit based expert redundancy estimation\} \(\\textbf\{KAB\-MoE\}\)\. KAB\-MoE defines the retained visual expert number at each MoE layer as a discrete action, and then conducts efficient one\-shot RL estimations to obtain the layer\-action reward matrix\. Based on this reward matrix, KAB\-MoE can quickly derive the optimal skipping policy that satisfies the predefined computation budgets, \\emph\{e\.g\.\}, expert skipping ratio\. The obtained skipping policy can be directly applied to MoE\-MLLMs for all examples, which not only facilitates high\-throughput deployment but also contributes to practical acceleration\. Extensive experiments on Kimi\-VL\-A3B and Qwen3\-VL\-MoE show that KAB\-MoE effectively accelerates MoE\-MLLMs while keeping strong multimodal performance, \\emph\{e\.g\.\}, retaining 97\.09\\% average performance on Kimi\-VL\-A3B under the skipping ratio of 83\\%\.  Moreover, KAB\-MoE also achieves competitive or superior performance over dynamic expert skipping SOTAs with practical inference speed\-up\. \\textbf\{Our code\} is provided in the supplementary materials\.

## Voxel as Token: A New Perspective for Zero\-shot Cross\-subject Vision Decoding

**Authors:** Yulong Liu; Ziqiu Huang; Hua Xu; Guibo Zhu; Sirui Han; Yike Guo

**ID:** 148747 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vM4PorBFxC>) | [PDF](<https://openreview.net/pdf?id=vM4PorBFxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148747>)

Recent advances in brain decoding have achieved impressive visual reconstruction under subject\-specific settings, yet they fail to generalize to unseen subjects without retraining\-\-\-hindering practical zero\-shot cross\-subject applications\. The core challenges stem from inter\-subject variability in voxel dimensionality and misaligned spatial response patterns\. While existing methods rely on surface\-based alignment or complex feature disentanglement, they often operate as black boxes and overlook the potential of volume\-based fMRI data\. To address this, we propose \\textbf\{Voxel as Token \(VoxTok\)\}, a conceptual framework that treats each fMRI voxel as an independent token endowed with a learnable functional embedding\. This formulation naturally handles variable\-length inputs and subsumes existing adapter\-based models as special cases where linear projections approximate voxel functionality\. Guided by the hypothesis that large\-scale spatial distributions of neural activity are consistent across subjects despite fine\-grained variability, we introduce a KNN\-based estimator to predict functional embeddings for unseen subjects\. This approach achieves state\-of\-the\-art zero\-shot retrieval performance and comparable reconstruction quality, while enabling plug\-and\-play adaptation for existing models \(e\.g\., MindEye2\)\. Integrating multi\-scale ROIs further boosts performance, with our best model achieving $40\.4\\%$ zero\-shot image retrieval accuracy, rivaling early supervised methods\. Crucially, we find that decoding success correlates strongly with ROI size, indicating that global co\-activation patterns drive cross\-subject generalization\.

## PolyVision: Conditional Visual Scaling Via Dynamic Expert Routing For Vision\-Centric MLLMs

**Authors:** Tiehan Fan; Chen Zhao; Nikai Du; Zili Yi; Jian Yang; Ying Tai

**ID:** 151361 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b8tcacoAkU>) | [PDF](<https://openreview.net/pdf?id=b8tcacoAkU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151361>)

Multimodal large language models have achieved remarkable progress, yet their language\-dominant designs constrain visual perception and reasoning\. Vision\-centric multimodal large language models aim to restore visual understanding as the structural foundation, but existing systems rely on static visual expert fusion, leading to redundant computation, weak adaptivity, and limited multimodal transferability\. Prior VC\-MLLMs scale visual capacity by adding experts, whereas $\\mathtt\{PolyVision\}$ scales visual capacity by allocating experts\. We introduce $\\mathtt\{PolyVision\}$, a vision\-centric framework for conditional visual scaling in which dynamic visual expert routing assigns image patches to heterogeneous visual encoders\. An \\textbf\{Attentive Router\} selectively activates relevant experts for each patch, while a compact \\textbf\{VisPack\} module executes routed representations efficiently and preserves example independence\. Together with additional visual pre\-alignment, this design turns heterogeneous visual scaling into a practical conditional\-computation process\. Built on the \\texttt\{Qwen3\} backbone, $\\mathtt\{PolyVision\}$ achieves superior efficiency and scalability on multimodal benchmarks\. Experiments show that adaptive expert routing strengthens visual specialization, clarifies practical properties of visual scaling, and improves visual understanding at a favorable trade\-off between efficiency and performance\.

## IDEA: Unwrapping Visual Black\-box Models by Interaction Decomposition

**Authors:** Chaojie Ji; Jian Xu; He Zhang; Hongyan Wu; Yankai Cao; Ruxin Wang

**ID:** 151393 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=azDcnhfVNx>) | [PDF](<https://openreview.net/pdf?id=azDcnhfVNx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151393>)

Concept\-based explanation methods have emerged as a prominent framework for interpreting deep neural networks using human\-understandable concepts\. However, existing approaches are limited to assigning a scalar importance score to a concept, failing to capture the interaction between the concept and its visual context\. We argue that overlooking this interaction leaves a predictor's reasoning only partially understood\. To address this gap, we introduce IDEA, a novel global post\-hoc explanation framework that explicitly models the interaction between a concept and its visual context\. Through this modeling, IDEA decomposes concept\-level predictive information into three atomic components: uniqueness \(independent concept contribution\), redundancy \(information shared with the context\), and synergy \(information arising strictly from concept\-context interaction\)\. Consequently, IDEA extends interpretability beyond merely identifying influential concepts to diagnosing how a predictor reasons \-\- for instance, flagging potential context dependencies that scalar scores cannot reveal\. IDEA requires no task\-specific concept annotations and no access to classifier internals\. Evaluations on controlled and real\-world settings demonstrate that IDEA can surface reasoning patterns invisible to traditional scalar concept scores\.

## Do Diffusion Models Learn to Generalize Basic Visual Skills?

**Authors:** Amish Sethi; Boya Zeng; Wenhao Chai; Zhuang Liu

**ID:** 151086 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d54SJBv41M>) | [PDF](<https://openreview.net/pdf?id=d54SJBv41M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151086>)

Diffusion\-based visual generative models are powerful, but understanding their generalization behavior remains challenging\. Current evaluations rely on human preference scores for text\-to\-image models and distribution\-level metrics such as Frechet Inception Distance \(FID\) and Inception Score \(IS\) for class\-conditional models, but these do not test whether models learn basic visual skills or largely match training patterns\. To overcome this gap, we introduce the Visual Generative Lab \(VGL\), a controlled experimental framework for understanding how diffusion models learn and generalize basic visual skills, including size, position, rotation, count, color, shape, and their composition\. By generating synthetic training data for each skill from explicit rules, VGL enables precise measurement of generalization using task\-specific, rule\-based metrics\. Training models from scratch on these data reveals three consistent patterns\. \(1\) Models extrapolate rotation better than size, skill, or count on far\-out\-of\-range queries; healthy rotation seeds match most extrapolation angles within a few degrees, although a non\-trivial fraction of seeds collapse near the wraparound, while skill and position saturate at small distances outside training regardless of seed\. \(2\) For compositional generalization, coverage of basic visual skill combinations matters more than dataset size\. \(3\) Basic visual skills are learned jointly, so an out\-of\-distribution request in one skill can degrade the others even when they remain in range\.

## One Adapter For All: Towards Generalizable Many\-To\-One Domain Adaptation In Heterogeneous Collaborative Perception

**Authors:** Lu Bin; Zhewei Fu; Shaohong Wang; Zhiyu Xiang; Hangguan Shan; Eryun Liu

**ID:** 149544 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pM1uwdYGp1>) | [PDF](<https://openreview.net/pdf?id=pM1uwdYGp1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149544>)

In autonomous driving, multi\-agent collaboration enhances individual perception capabilities through information sharing\. However, in real\-world applications, differences in models and training data among heterogeneous agents inevitably lead to domain gaps between shared features, bringing challenges to collaboration\. To address this, existing methods typically rely on a one\-to\-one adaptation paradigm, necessitating specific training or fine\-tuning for every new agent\. This results in a large accumulation of adapters on the vehicle, which is unsustainable for resource\-constrained edge devices\. To overcome these limitations, we propose UniMTO, a Unified adaptation framework that enables Many\-To\-One adaptation across heterogeneous agents using a single, fixed adapter\. Specifically, it treats domain adaptation as a pattern transformation task, disentangling domain\-invariant content and domain\-specific pattern from features, and achieving source\-to\-target pattern transformation through recombination based on a Mixture\-of\-Experts \(MoE\) mechanism\. Extensive experiments on V2V4Real and V2X\-Real demonstrate that UniMTO achieves superior generalization, and exhibits strong zero\-shot adaptation capabilities, outperforming all state\-of\-the\-art methods, enabling many\-to\-one domain adaptation with a single, fixed adapter\.

## DELTAVID: Enhancing Fine\-Grained Spatiotemporal Perception with Cross\-Video Differences

**Authors:** Yankai Yang; Yancheng Long; Bin Wen; Fan Yang; Tingting Gao; Han Li; Shuo Yang

**ID:** 152418 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TGch9ifZ6l>) | [PDF](<https://openreview.net/pdf?id=TGch9ifZ6l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152418>)

Video multimodal large language models have made strong progress on open\-ended video understanding, but they still lack precise local spatiotemporal perception\. When two videos share almost the same global semantics and differ only in a short time span or a small region, current models often fail to find the change and provide reliable evidence\. We propose DeltaVid , a verifiable proxy\-task framework that enhances fine\-grained spatiotemporal perception with cross\-video differences\. The key idea is to turn cross\-video spot\-the\-difference into a trainable perception signal, where a model identifies local changes, judges temporal boundaries, and organizes spatial evidence by comparing similar videos\. To make this signal scalable to train and reliable to evaluate, we further introduce DeltaVid\-10K and DeltaVid\-Bench, which convert controllable local differences in real videos into evidence\-labeled training and test samples\. Experiments show that DeltaVid substantially improves performance on cross\-video difference understanding and transfers the learned local evidence ability to general video understanding benchmarks, including MMVU, MLVU, Video\-MME, VideoHolmes, VideoMMMU, LVBench, TempCompass, and LongVideoBench\. These results show that cross\-video differences are not only an effective way to diagnose fine\-grained perception failures, but also a scalable proxy supervision that moves Video MLLMs from coarse semantic understanding toward fine\-grained spatiotemporal evidence reasoning\.

## Permute\-then\-Adapt: Weak\-to\-Strong Contrastive Image\-\-Text Adaptation

**Authors:** Jinhao Li; Sarah Erfani; Lei Feng; Guangrui Li; James Bailey; Feng Liu

**ID:** 150368 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ibeDXGKMar>) | [PDF](<https://openreview.net/pdf?id=ibeDXGKMar>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150368>)

Image\-\-text alignment models such as CLIP are typically trained with contrastive learning, where unpaired examples are treated as strict negatives\.   While this assumption introduces noise by penalising semantically related pairs, existing solutions often rely on heuristic similarity thresholds that lack statistical grounding and sensitivity to dataset\-specific noise distributions\.   In this paper, we propose \*\*Permute\-then\-Adapt \(PTA\)\*\*, a framework that leverages efficient \*weak models\* to identify missed positives, while enforcing \*statistical control\* to reject random associations\.   Unlike standard distillation or arbitrary thresholding, PTA estimates the null distribution of the weak teacher's similarities via permutation testing, ensuring selected pairs are \*statistically distinguishable from the distribution of random pairings\* at level $\\alpha$\.   The calibrated positive set is then trained against by a single multi\-positive contrastive objective: each anchor maximises the total probability mass it assigns to its positive set\.   We further demonstrate that the calibration can be pre\-computed offline using the weak model, so training overhead is negligible compared to standard baselines\.   Extensive experiments show that PTA consistently outperforms heuristic soft\-label approaches on object recognition and cross\-modal retrieval, while exhibiting superior data efficiency\.

## Amortized Guidance for Image Inpainting with Pretrained Diffusion Models

**Authors:** Yilie Huang; XUNYU ZHOU

**ID:** 152907 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PVo9A82GnZ>) | [PDF](<https://openreview.net/pdf?id=PVo9A82GnZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152907>)

We study image inpainting with generative diffusion models\. Existing methods typically either train dedicated task\-specific models, or adapt a pretrained diffusion model separately for each masked image at deployment\. We introduce a middle\-ground model, termed Amortized Inpainting with Diffusion \(AID\), which keeps a pretrained diffusion backbone fixed, trains a small reusable guidance module offline, and then reuses it across masked images without per\-instance optimization\. We formulate it as a deterministic guidance problem with a supervised terminal objective\. To make this problem learnable in high dimensions, we derive an auxiliary Gaussian formulation and prove that solving this randomized problem recovers the optimal deterministic guidance field\. This bridge yields a principled continuous\-time actor\-\-critic algorithm for learning the guidance module in a fully data\-driven manner\. Empirically, on AFHQv2 and FFHQ under the pixel EDM pipeline and on ImageNet under the latent EDM2 pipeline, AID consistently improves the quality\-\-speed trade\-off over strong fixed\-backbone and amortized inpainting baselines across multiple mask types, while adding less than one percent trainable overhead\.

## Latent Video Prediction for World Modeling: An Evaluation Uncovering Intriguing Favorable Evidence

**Authors:** Ali J Alrasheed; Aryan Y Parast; Basim Azam; James Bailey; NAVEED AKHTAR

**ID:** 139786 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4wUOPsV59s>) | [PDF](<https://openreview.net/pdf?id=4wUOPsV59s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139786>)

Self\-supervised video models are increasingly framed as world models, yet their evaluation remains largely confined to a single top\-1 accuracy score on clean benchmarks\. This leaves a major gap in comprehending their potential as world models\. We present the first systematic study addressing this gap, analyzing four matched\-capacity frontier video foundation models, V\-JEPA 2\.1, V\-JEPA 2, VideoPrism, and VideoMAEv2, across five robustness axes relevant to their deployment as video world models: feature discriminability, corruption robustness, fine\-grained discrimination, occlusion robustness, and sensitivity to temporal direction\. Our evaluations establish that across all five axes, latent\-prediction models form a distinct and consistent profile\. They degrade more gracefully under pixel corruption, preserve usable class structure rather than mere geometric stability under occlusion, capture fine\-grained physical contact cues without reconstructing pixels, and uniquely encode the arrow of time\. These advantages can even survive task adaptation: a frozen V\-JEPA 2 backbone with a lightweight attentive probe outperforms a fully fine\-tuned VideoMAE and a supervised TimeSformer on corruption and occlusion robustness\. Our extensive results offer concrete new evidence in favor of latent prediction for robust world modeling\.

## Language\-Assisted Image Clustering Guided by Discriminative Relational Signals and Adaptive Semantic Centers

**Authors:** Jun Ma; Xu Zhang; Zhengxing Jiao; Yaxin Hou; Hui LIU; Junhui Hou; Yuheng Jia

**ID:** 150976 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=drrwsg8yuo>) | [PDF](<https://openreview.net/pdf?id=drrwsg8yuo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150976>)

Language\-Assisted Image Clustering \(LAIC\) augments the input images with additional textual information with the help of vision\-language models \(VLMs\) to improve clustering performance\. Despite recent progress, existing LAIC methods mainly construct image\-text pairs for text\-modality utilization, which overlook two issues: \(i\) textual features constructed for images are highly similar, leading to weak inter\-class discriminability; \(ii\) the training is restricted to pre\-built image\-text alignments, limiting the potential for better utilization of the text modality\. To address these issues, we propose a new LAIC framework with two complementary components\. First, we exploit cross\-modal relations to generate more discriminative self\-supervision signals for clustering, which is compatible with the pre\-training mechanisms of VLMs such as CLIP\. Second, we learn category\-wise continuous semantic centers via prompt learning to produce the final clustering assignments\. Extensive experiments on eight benchmark datasets demonstrate that our method achieves an average improvement of \*\*2\.7\\%\*\* over state\-of\-the\-art methods, and the learned semantic centers exhibit strong interpretability\. \*\*Code is available in the supplementary material\.\*\*

## VecUQ\-OT: Aggregating Uncertainty Measures via Multivariate Ranks

**Authors:** Nikita Kotelevskii; Vladimir Kondratyev; Maiya Goloburda; Alexander Fishkov; Mohsen Guizani; Eric Moulines; Maxim Panov

**ID:** 156076 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ca8UlAbiR>) | [PDF](<https://openreview.net/pdf?id=0ca8UlAbiR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156076>)

Decision\-making under uncertainty typically requires a single scalar score, forcing practitioners to commit to one uncertainty measure\. However, different measures often capture complementary failure modes, and relying on a single measure may be insufficient for downstream tasks\. We propose \\emph\{VecUQ\-OT\}, a label\-free procedure that aggregates multiple scalar uncertainty measures into a single ranking score via entropy\-regularized optimal transport\. Rather than selecting a single measure, our approach combines signals of \(possibly\) different natures through non\-additive fusion based on \\emph\{multivariate ranks\}\. The construction is motivated by the theory of multivariate ranks via exact optimal transport and realized through a tractable entropic approximation that generalizes to unseen inputs without retraining\. Experiments across synthetic, image, and text domains demonstrate that \\emph\{VecUQ\-OT\} provides stable performance across tasks, remains reliable when individual measures fail, and outperforms the natural additive fusion alternative\.

## ProEdit: Inversion\-based Editing From Prompts Done Right

**Authors:** Zhi Ouyang; Dian Zheng; Xiao\-Ming Wu; Jian\-Jian Jiang; Kun\-Yu Lin; Jingke Meng; Wei\-Shi Zheng

**ID:** 148302 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yr9AcyQrnt>) | [PDF](<https://openreview.net/pdf?id=yr9AcyQrnt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148302>)

Inversion\-based visual editing provides an effective and training\-free way to edit an image or a video based on user instructions\. Existing methods typically inject source image information during the sampling process to maintain editing consistency\. However, this sampling strategy overly relies on source information, which negatively affects the edits in the target image \(e\.g\., failing to change the subject's atributes like pose, number, or color as instructed\)\. In this work, we propose ProEdit to address this issue both in the attention and latent aspects\. In the attention aspect, we introduce KV\-mix, which mixes KV features of the source and the target in the edited region, mitigating the influence of the source image on the editing region while maintaining background consistency\.  In the latent aspect, we propose Latents\-Shift, which shifts the distribution of the edited region in the inverted noise, eliminating the negative influence of the inverted noise on the sampling process\. Extensive experiments on several image and video editing benchmarks demonstrate that our method achieves SOTA performance\. In addition, our design is plug\-and\-play, which can be seamlessly integrated into existing inversion and editing methods, such as RF\-Solver, FireFlow and UniEdit\.

## Hydra\-X: Native Unified Multimodal Models with Holistic Visual Tokenizers

**Authors:** Guozhen Zhang; Xuerui Qiu; Yutao Cui; Tianhui Song; Changlin Li; Junzhe Li; Tao Huang; Xiao Zhang; Yang Li; Jianbing Wu; Jian Zhang; Zhao Zhong; Liefeng Bo; Limin Wang

**ID:** 155676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3mwm6O3FZt>) | [PDF](<https://openreview.net/pdf?id=3mwm6O3FZt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155676>)

Holistic visual tokenizers are fundamental to unified multimodal models \(UMMs\) as they map diverse visual inputs into a unified representation space\. In this paper, we present HYDRA\-X, the first UMM framework that unifies image and video tokenization within a single Vision Transformer \(ViT\)\. Our design is driven by two core challenges: efficiently injecting spatiotemporal reconstruction capability into a native ViT, and embedding image\- and video\-level semantic awareness into the latent space\. To address the first, comprehensive ablations reveal two key findings: \(1\) frame\-level causal temporal attention suffices for visual reconstruction, whereas full spatiotemporal attention degrades it; and \(2\) hierarchical temporal compression substantially outperforms single\-step alternatives\. To tackle the second, we propose a lightweight decompressor that upsamples temporally compressed features under joint image\-video teacher supervision, thereby enforcing complementary semantic structures within the compact latent space\. Building on this holistic tokenizer, we further propose a principled improvement of the editing pipeline: source\-target interaction should occur at the latent level inside the tokenizer rather than at the semantic level inside the LLM, substantially improving editing consistency and accelerating convergence\. Instantiated at the 7B dense model, HYDRA\-X achieves strong performance across image and video understanding and generation tasks, laying a solid foundation for future unified\-tokenizer UMM exploration\.

## Pixel\-space Autoregressive Image Synthesis via Spectrum Serialization and Flow\-based Refinement

**Authors:** Guiwei Zhang; Tianyu Zhang; Yalong Bai; Ying Ba; Zichang Tan; Yang Yang

**ID:** 149181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sHRb3N6tLL>) | [PDF](<https://openreview.net/pdf?id=sHRb3N6tLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149181>)

Autoregressive \(AR\) image generators commonly rely on  vector\-quantized \(VQ\) autoencoders to compress images into discrete token sequences\. However, quantization inevitably discards visual information, and the resulting reconstruction errors may propagate through  AR decoding, limiting generation fidelity\. We revisit the representation choice for AR image generation and ask whether a simpler and more faithful representation can alleviate this bottleneck while remaining compatible with autoregressive modeling\. To this end, we estimate the intrinsic dimension of the natural image manifold under several widely used representations and find that raw  patchified pixels exhibit the simplest underlying geometry among those  evaluated\. Motivated by this insight, we propose PixeLLM, an AR generative framework that operates directly on sequences of discrete pixel blocks, eliminating the need for a separately trained VQ autoencoder\. PixeLLM decomposes generation into two stages: \(1\) an AR model generates a text\-aligned draft image  capturing  global scene structure, and \(2\) a conditional flow\-based pixel refinement Transformer enhances the draft with fine\-grained details and mitigates artifacts\. The resulting pipeline is straightforward, requiring no external semantic alignment\. Despite its simplicity, PixeLLM achieves competitive performance on challenging text\-conditioned and class\-conditioned image generation benchmarks\.

## Tool\-IQA: Augmenting Image Quality Assessment with Simple Tools

**Authors:** Guanyi Qin; Junjie Zhang; Chunming He; Yibing Fu; Jie Liang; Tianhe Wu; Lei Zhang

**ID:** 154321 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EXsWjLfKTF>) | [PDF](<https://openreview.net/pdf?id=EXsWjLfKTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154321>)

Vision\-Language Models \(VLMs\) have been increasingly adopted for Image Quality Assessment \(IQA\)\. However, current methods typically employ a static one\-shot scoring paradigm, despite the fact that humans assess image quality through dynamic visual inspection, e\.g\., selectively adjusting views to verify details and subtle artifacts\.  Specifically, relying solely on a single\-pass observation introduces two primary limitations: first, perceiving the image only at a global scale restricts the assessment of finer local details; second, the original intensity distribution of the image may overwhelm the visibility, leading to insufficient inspection of image quality\. To address these issues, we propose Tool\-IQA, shifting the assessment mechanism from passive scoring to a tool\-augmented workflow\. In particular, we equip VLMs with simple yet effective view tools: a Magnifier to inspect local details, and a Gamma Corrector to uncover visibility and hidden artifacts\. The assessment follows a structured pipeline that consists of an initial observation with rubric notes, a tool\-augmented in\-depth inspection, and a final quantification for calibrated quality score\. Furthermore, to ensure efficient and purposeful tool callings, we introduce a batch\-aware training strategy to reward tool interactions that can yield positive contributions rather than simply encouraging usage\. Experiments on a variety of IQA benchmarks demonstrate that, with effective tool calling and calibrated assessment, our proposed Tool\-IQA significantly outperforms existing state\-of\-the\-art models, e\.g\., it achieves a PLCC of 0\.854 on the challenging CLIVE dataset\. The code and models will be released\.

## FrameRouter: Frame Budget Routing for Long\-Video Understanding on Video\-MME\-v2 and Beyond

**Authors:** Bingjun Luo; Jialin Guo; Siqi Li

**ID:** 155391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=61Yi6KS7Ek>) | [PDF](<https://openreview.net/pdf?id=61Yi6KS7Ek>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155391>)

Long\-video question answering benchmarks like Video\-MME\-v2 typically evaluate systems under a uniform frame budget for every question, despite stark variation in the evidence each query actually demands\. We analyze this mismatch on Video\-MME\-v2 and find that different question subsets prefer different frozen frame\-budget policies, while uniformly increasing the frame count does not reliably improve all metrics\. These findings motivate fixed\-mean frame\-budget routing, a controlled inference setting in which each question may receive a different frame budget while the average budget matches a uniform reference\. We introduce FrameRouter, a training\-free test\-time framework that combines an evidence\-demand router, a budget\-constrained allocation rule, and a frozen bank of frame\-sampling policies\. By controlling how much visual evidence each question receives while leaving the underlying samplers unchanged, FrameRouter is orthogonal to query\-aware frame selection\. Across Video\-MME\-v2 and several long\-video understanding benchmarks, FrameRouter improves long\-video question answering by using the same average visual budget more selectively across questions\.

## L2P: Unlocking Latent Potential for Pixel Generation

**Authors:** Zhennan Chen; Junwei Zhu; Xu Chen; Jiangning Zhang; Jiawei Chen; Zhuoqi Zeng; Wei Zhang; Chengjie Wang; Jian Yang; Ying Tai

**ID:** 153588 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KJ3CT9VwVV>) | [PDF](<https://openreview.net/pdf?id=KJ3CT9VwVV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153588>)

Pixel diffusion models have recently regained attention for visual generation\. However, training advanced pixel\-space models from scratch demands prohibitive computational and data resources\. To address this, we propose the \\textbf\{Latent\-to\-Pixel \(L2P\)\} transfer paradigm, an efficient framework that directly harnesses the rich knowledge of pre\-trained LDMs to build powerful pixel\-space models\. Specifically, L2P discards the VAE in favor of large\-patch tokenization and freezes the source LDM's intermediate layers, exclusively training shallow layers to learn the latent\-to\-pixel transformation\. By utilizing LDM\-generated synthetic images as the sole training corpus, L2P fits an already smooth data manifold, enabling rapid convergence with zero real\-data collection\. This strategy allows L2P to seamlessly migrate massive latent priors to the pixel space using only 8 GPUs\. Furthermore, eliminating the VAE memory bottleneck unlocks native 4K ultra\-high resolution generation\. Extensive experiments across mainstream LDM architectures show that L2P incurs negligible training overhead, yet performs on par with the source LDM on DPG\-Bench and reaches 93\\% performance on GenEval\.

## Vision Correlators: Correlation\-Driven Visual Understanding with Hypergraphs

**Authors:** Mengqi Lei; Guohuan Xie; Siqi Li; Shihui Ying; Shaoyi Du; Jun\-Hai Yong; Nanning Zheng; Yue Gao

**ID:** 152069 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vi8z1QsK4V>) | [PDF](<https://openreview.net/pdf?id=Vi8z1QsK4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152069>)

Modern visual backbones, despite their architectural diversity, largely reduce relational reasoning to pairwise message passing on graphs and therefore primarily capture 2\-order interactions\. However, visual understanding often depends on latent yet crucial higher\-order semantic correlations among multiple regions, which cannot be adequately expressed by pairwise modeling alone\. We first formalize this limitation by proving an irreducibility result: on a fixed vertex set, there exist nonlinear hypergraph message passing layers that cannot be represented exactly by any graph message passing layer unless the hypergraph satisfies highly restrictive structural conditions\. This shows that higher\-order correlation modeling offers a fundamental expressive advantage rather than a simple approximation to graph\-based backbones\. Therefore, we propose Vision Correlator \(ViC\), a general\-purpose visual backbone built on multi\-order hypergraphs\. ViC consists of correlation induction and correlation propagation\. In the correlation induction stage, we propose an Anchor\-based Hypergraph Generation strategy that uses anchors as semantic centers and incorporates topological information to generate scalable hypergraph structures\. In the correlation propagation stage, we further design Differential Mixed Aggregation to achieve efficient hyperedge representation and vertex feature updating, and introduce hyperedge dropout to improve the stability of structure learning\. Extensive experiments with isotropic and pyramid variants show that our ViC achieves a better accuracy\-efficiency trade\-off than strong Transformer and graph\-based baselines\. Specifically, compared to the Vision Transformer baseline, ViC achieves up to 76\\% parameter reduction, 93\\% FLOPs reduction, and delivers up to a 5\.1\\% increase in accuracy on ImageNet\.

## VisionCreator\-S1: Evolving Visual\-Generation Agents via Skill\-GRPO Optimization

**Authors:** Jinxiang Lai; Wenzhe Zhao; HUALEI Zhang; Zexin Lu; Jian Liu; Jie ZHANG; Qinglin Lu; Song Guo

**ID:** 148183 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zg1C7iDhaV>) | [PDF](<https://openreview.net/pdf?id=zg1C7iDhaV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148183>)

Native visual\-generation agents now handle long\-horizon, multi\-image workflows, but face two practical bottlenecks during reinforcement learning \(RL\) training\. First, the inability to accumulate experience across rollouts prevents the agent from leveraging past successes and failures, slowing the evolution of its agent behaviors\. Second, the reliance on black\-box visual\-generation tools introduces tool\-induced reward noise, as the policy is unfairly penalized for failures rooted in a tool's inherent capability boundary, leading to unstable and inefficient training\. To address these challenges, we propose VisionCreator\-S1, an agent that casts skill\-augmented RL as a nested optimization problem through two coupled innovations\. First, Dual\-Skills co\-evolves an agent\-skill set to reuse self\-reflection patterns from historical rollouts, and a tool\-skill set that dynamically maps each tool's capability boundary through world\-reflection\. Second, Skill\-GRPO treats discrete text skills as learnable variables\. To overcome the non\-differentiability of text skill, it gracefully alternates between numerical gradient descent for the policy weights and textual gradient descent for the discrete skill sets\. By contrasting high\- and low\-advantage trajectories, it approximates a direction\-consistent textual gradient in the agent's behavior feature space\. Extensive experiments on VCR\-Bench, GEdit\-Bench, and MultiBanana demonstrate that VisionCreator\-S1 consistently outperforms the strongest skill\-free baseline, VisionCreator\-R1\. Ablation studies further confirm that this aligned co\-evolution significantly improves both training stability and the agent's long\-term decision\-making capabilities\.

## VisionCreator\-R1: A Reflection\-Enhanced Native Visual\-Generation Agentic Model

**Authors:** Jinxiang Lai; Wenzhe Zhao; Zexin Lu; HUALEI Zhang; Qinyu Yang; Rongwei Quan; li zhimin; Shuai Shao; Song Guo; Qinglin Lu

**ID:** 148251 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGiLxdshrQ>) | [PDF](<https://openreview.net/pdf?id=zGiLxdshrQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148251>)

Visual content generation has moved from single\-image to multi\-image workflows, yet existing agents are largely plan\-driven and lack a systematic reflection mechanism for correcting mid\-trajectory visual errors\. To address this gap, we propose VisionCreator\-R1, a native visual generation agent with explicit reflection, paired with a Reflection\-Plan Co\-Optimization \(RPCO\) training methodology\. Through extensive experiments and trajectory\-level analysis, we uncover a reflection\-plan optimization asymmetry in reinforcement learning \(RL\): planning can be reliably optimized via plan rewards, while reflection learning is held back by noisy credit assignment\. Motivated by this finding, we further abstract a general Decouple\-then\-Fuse paradigm for co\-optimizing capabilities with asymmetric reward variance, of which RPCO is the visual\-generation instantiation\. Our RPCO first trains on the self\-constructed VCR\-SFT dataset, which covers reflection\-strong single\-image trajectories and planning\-strong multi\-image trajectories, and then co\-optimizes on the VCR\-RL dataset via RL\. This yields our unified VisionCreator\-R1 agent, which beats Gemini2\.5Pro on existing benchmarks and on our VCR\-Bench covering single\-image and multi\-image tasks\.

## PISCO: Precise Video Instance Insertion with Sparse Control

**Authors:** Xiangbo Gao; Renjie Li; Xinghao Chen; Yuheng Wu; Suofei Feng; Jie Yang; Qing Yin; Zhengzhong Tu

**ID:** 155342 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6JxPJz9oJ3>) | [PDF](<https://openreview.net/pdf?id=6JxPJz9oJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155342>)

AI video generation is moving beyond general generation, which relies on exhaustive prompt\-engineering and "cherry\-picking", towards fine\-grained, controllable generation and high\-fidelity post\-processing\. In professional AI\-assisted filmmaking, the core requirement is the ability to perform precise, targeted modifications\. A key task is video instance insertion, which requires precise spatial\-temporal placement, physically consistent scene interaction \(e\.g\., shadows and reflections\), and the faithful preservation of original dynamics \- all achieved under minimal user effort\. In this paper, we propose PISCO, a video diffusion model for precise video instance insertion with arbitrary sparse keyframe control\. PISCO allows users to specify a single keyframe, start\-and\-end keyframes, or sparse keyframes at arbitrary timestamps, and automatically propagates object appearance, motion, and interaction\. To stabilize generation under sparse conditioning, we introduce Variable\-Information Guidance and Distribution\-Preserving Temporal Masking, complemented by geometry\-aware conditioning\. We further construct PISCO\-Bench, a benchmark with verified instance annotations and paired clean background videos, and evaluate performance using both reference\-based and reference\-free perceptual metrics\. Experiments demonstrate that PISCO consistently outperforms existing baselines and scales effectively as additional control signals are provided\.

## Foveal\-Mamba: Inside\-Out Ring Scanning with Recurrent Offset Prediction for Visual State Space Models

**Authors:** Yi\-Kuan Hsieh; Jun\-Wei Hsieh; Kuan\-Chuan Peng; Xin Li; Chi\-Chia Sun; Yu\-Chee Tseng; Ming\-Ching Chang

**ID:** 148775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v9TJRTPJEp>) | [PDF](<https://openreview.net/pdf?id=v9TJRTPJEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148775>)

Visual state space models \(SSMs\) have emerged as efficient alternatives to attention\-based backbones, yet their performance remains sensitive to how visual evidence is sampled and propagated\. Deformable visual Mamba methods address fixed scanning by predicting adaptive sampling locations, but offset prediction is still driven primarily by local responses, producing locally plausible samples that are weakly coupled to the SSM's recurrent state evolution, particularly in off\-center or multi\-object scenes\. We present  \*\*Foveal\-Mamba\*\*, a scan\-path\-aware deformable visual Mamba framework that reformulates offset prediction as recurrent scan\-path prediction\. Two components drive this design\. First, an \*\*Inside\-Out Ring Scan\*\* organizes visual tokens along a center\-to\-periphery path, providing a stable propagation prior that does not assume object centering\. Second, a lightweight Mamba module embedded within the offset prediction network forms the \*\*Recurrent Scan\-Path Offset Prediction Network \(RS\-OPN\)\*\*, which predicts offsets from hidden states accumulated along the ring path\. RS\-OPN tightly couples deformable sampling with recurrent state evolution and produces coherent, object\-aware sampling trajectories\. Foveal\-Mamba consistently outperforms strong baselines across multiple benchmarks\. On ImageNet\-1K, Foveal\-Mamba\-Tiny achieves 84\.3\\% Top\-1 accuracy, surpassing DAMamba\-Tiny by 0\.5\\% with fewer parameters and FLOPs\. On ADE20K semantic segmentation, Tiny/Small variants reach 50\.8/51\.8 mIoU\. On COCO, it achieves 48\.9/50\.2 box AP and 43\.7/44\.9 mask AP for object detection and instance segmentation, respectively\. Qualitative results further demonstrate earlier object focus and more stable activations in multi\-object scenes\.

## Counting without Scale: Scale\-Consistent Error Correction for Crowd Counting

**Authors:** Yi\-Kuan Hsieh; Xin Li; Chi\-Chia Sun; Yu\-Chee Tseng; Ming\-Ching Chang; Kuan\-Chuan Peng; Jun\-Wei Hsieh

**ID:** 150435 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i4EGsPX5qd>) | [PDF](<https://openreview.net/pdf?id=i4EGsPX5qd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150435>)

Crowd counting is a vital computer vision task with wide\-ranging applications, from public surveillance to urban planning\. A persistent challenge is achieving scale invariance despite noisy labels, as humans often make counting errors with similar objects\. Most existing methods struggle to maintain consistency and robustness when testing images differ in scale from the training data\. We propose ScaLe\-aware Invariance and Correcting Errors \(SLICE\) for robust crowd counting, a novel scale\-aware loss function that improves scale invariance, enabling consistent and robust predictions under varying scales and annotation noise\. The loss function combines two components: a scale\-invariance term that applies multiscale supervision to enforce consistency across density maps of the same scene, and an error correction term that addresses inevitable annotation noise by modeling label uncertainty with probabilistic methods such as a mixture of Gaussians\. SLICE is model\-agnostic and integrates easily into existing crowd counting architectures without extra computational overhead during inference\. Extensive experiments on five benchmark datasets show that SLICE greatly improves scale invariance and cross\-dataset generalization, achieving the state\-of\-the\-art results in challenging scenarios\. Using CrowdDiff, Steerer, and CrowdFormer as baselines, SLICE lowers mean absolute error \(MAE\) by 5–7\\% by addressing annotation noise and scale variation\. Applying the scale\-invariance term across multiple scales further cuts MAE by up to 15\\%\.

## Beyond Unidirectional: Unsupervised Trajectory Learning for Omnidirectional Controllable Underwater Image Enhancement

**Authors:** Xiaofeng Cong; Xuhao Guo; Kang Zheng; Yu\-Xin Zhang; Jie Gui

**ID:** 151882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XCLzu5Mpns>) | [PDF](<https://openreview.net/pdf?id=XCLzu5Mpns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151882>)

Existing underwater image enhancement \(UIE\) methods predominantly rely on unidirectional mapping, which lacks often results in over\-enhancement or under\-enhancement, without user\-friendly controllability\. To address this, we propose a paradigm of unsupervised trajectory learning for Omnidirectional Controllable UIE that treats restoration as a omnidirectional dynamical system, namely OC\-UIE\. The main purpose of our work is the realization of a consistent omnidirectional mapping across the representation space, which allows the model to master complex underwater dynamics beyond traditional unidirectional constraints\. To implement this, we propose an Omnidirectional Training that optimizes over arbitrary source\-target positions sampled from the data distribution\. We decompose this purpose into two synergistic stages: first, Representation Trajectory Flattening is employed to organize intricate degradations into a unified adaptation axis; second, Trajectory Omnidirectional Integration is introduced to model the enhancement as a path integral over the resulting manifold\. By optimizing only the relative shifts, OC\-UIE isolates structural preservation from fluid degradation dynamics\. This approach provides a controllable space for intensity\-parameterized enhancement with state\-of\-the\-art performance\.

## HIFC\-IQA: Train\-Free Cross\-Domain Image Quality Assessment via Dual\-Process Cognition

**Authors:** Yu Li; Zhengran Shen; Puchao Zhou; Yachun Mi; Yukang Ding; Boyuan yang; Xi Zhai; Shaohui Liu

**ID:** 149761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nWRbNynKZi>) | [PDF](<https://openreview.net/pdf?id=nWRbNynKZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149761>)

The discrepancy between controlled synthetic distortions and complex real\-world degradations poses a significant domain shift challenge for No\-Reference Image Quality Assessment \(NR\-IQA\)\. While Unsupervised Domain Adaptation \(UDA\) methods aim to bridge this gap, they heavily suffer from retraining overhead and error propagation during iterative pseudo\-labeling\. Inspired by the dual\-process theory of human cognition, we propose Hierarchical Intuitive and Fuzzy Consensus \(HIFC\), a completely train\-free cross\-domain IQA framework\. HIFC employs an asymmetric perceptual decomposition to disentangle semantic and distortion features\. It derives the final quality score through a synergy of two branches: a memory consensus branch that retrieves a stable Fuzzy Quality Centroid from a synthetic reference gallery, and an intuitive branch that captures aesthetic polarization via zero\-shot vision\-language alignment\. Extensive experiments demonstrate that, without any parameter updates or target\-domain adaptation, HIFC achieves highly competitive results against state\-of\-the\-art UDA methods\. Most notably, it exhibits exceptional robustness and generalization in the challenging synthetic\-to\-authentic cross\-domain setting\. The code will be available upon acceptance\.

## From Label Priors to Task Evidence: Long\-Video Frame Selection via Bayesian GRPO

**Authors:** Shuochen Chang; Bingjie Gao; Qingyang Liu; Qianli Ma; Yibo Miao; Haonan Zhao; Zhaohe Liao; Xiaofeng Zhang; Jiangtong Li; Li Niu

**ID:** 152846 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pw7tnoVlx1>) | [PDF](<https://openreview.net/pdf?id=Pw7tnoVlx1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152846>)

Multimodal Large Language Models \(MLLMs\) face significant scalability challenges in long\-video understanding due to quadratic attention complexity and context window constraints\. Existing retrieval\-based approaches typically using supervised learning on static keyframe annotations\. However, these label priors often fail to align with the actual information required by the downstream MLLM for complex reasoning, creating a fundamental misalignment between the training target and inference needs\. To bridge this gap, we propose a probabilistic framework that reformulates frame selection as a Bayesian inference process\. We first initialize a policy using supervised learning to capture general saliency\. Then, we treat the frozen MLLM as a task environment and employ its negative log\-likelihood \(NLL\) as dense reward evidence to update the policy via Bayesian Group Relative Policy Optimization \(GRPO\)\. This process explicitly transits the selection principle from label priors to task evidence\. Extensive experiments on Video\-MME, MLVU, and LongVideoBench demonstrate that our approach matches the accuracy of heavy MLLM scorers while maintaining the efficiency of lightweight models\.

## RADIUM: RadioActive Decay of Image\-Underlaid Marks

**Authors:** Michel Meintz; Louis Kerner; Maitri V Shah; Simon Hector; Franziska Boenisch; Adam Dziedzic

**ID:** 149086 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=szWfyMMMSi>) | [PDF](<https://openreview.net/pdf?id=szWfyMMMSi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149086>)

Modern image generative models are able to produce photorealistic images\. As those images become increasingly indistinguishable from real data and are published online, they are often scraped for subsequent training runs of new generative models\. This practice of training on generated data has been shown to degrade model performance and cause model collapse\. A possible mitigation lies in embedding radioactive watermarks into generated content\. Radioactive watermarks are robust marks that are detectable in outputs of new models trained on watermarked data, enabling provenance tracing of generated content\. In this work, we analyze the persistence of image watermarks across multiple training\-generation runs\. To do so, we introduce a novel statistical testing method RADIUM \(RadioActive Decay of Image\-Underlaid Marks\) for reliable radioactivity detection across various watermarking methods\. Using our RADIUM method, we observe disparate radioactivity across watermarking methods for image generative models\. Only few watermarks remain detectable in subsequently trained models, while most decay severely, especially when the architecture of models differs\. Our analysis highlights the critical need for more radioactive watermarking methods in the vision domain\.

## Safe, or Simply Incapable? Rethinking Safety Evaluation for Phone\-Use Agents

**Authors:** Zhengyang Tang; Yi Zhang; Chenxin Li; Xin Lai; Pengyuan Lyu; Yiduo Guo; Weinong Wang; Junyi Li; Yang Ding; Huawen Shen; Zhengyao Fang; Xingran Zhou; Liang Wu; Fei Tang; Sunqi Fan; Shangpin Peng; Zheng Ruan; anran zhang; Benyou Wang; Chengquan Zhang; Han Hu

**ID:** 139084 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5QXsXgA5p>) | [PDF](<https://openreview.net/pdf?id=m5QXsXgA5p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139084>)

When a phone\-use agent avoids harm, does that show safety, or simply inability to act? Existing evaluations often cannot tell\. A harmful outcome may be avoided because the agent recognized the risk and chose the safe action, or because it failed to understand the screen or execute any relevant action at all\. These cases have different causes and call for different fixes, yet current benchmarks often merge them under task success, refusal, or final harmful outcome\. We address this problem with \*PhoneSafety\*, a benchmark of 700 safety\-critical moments drawn from real phone interactions across more than 130 apps\. Each instance isolates the next decision at a risky moment and asks a simple question: does the model take the safe action, take the unsafe action, or fail to do anything useful? We evaluate eight representative phone\-use agents under this framework\. Our results reveal two main patterns\. First, stronger general phone\-use ability does not reliably imply safer choices at risky moments\. Models that perform better on ordinary app tasks are not always the ones that behave more safely when the next action matters\. Second, failures to do anything useful behave like a capability signal rather than a safety signal: they track broader phone\-use performance and increase when visual input is removed\. Across models, failures split into two recurring patterns: unsafe choices in settings where the model can act but chooses wrongly, and inability to act in more visually and operationally demanding screens\. Overall, a harmless outcome is not enough to count as evidence of safety\. Evaluating phone\-use agents requires separating unsafe judgment from inability to act\. Code and public data: \\url\{https://github\.com/tangzhy/PhoneSafety\}\.

## EgoBabyVLM: Benchmarking cross\-modal learning from naturalistic egocentric video data

**Authors:** Dongyan Lin; Phillip Rust; Angel Villar\-Corrales; Alvin Tan; Mahi Luthra; Charles\-Éric Saint\-James; Robin Algayres; Rashel Moritz; Vanessa Stark; Surya Parimi; Jiayi Shen; Youssef Benchekroun; Yosuke Higuchi; Angelo Ortiz Tandazo; Martin Gleize; Nicolas Hamilakis; manel khentout; Sho Tsuji; Balázs Kégl; Juan Pino; Michael C Frank; Emmanuel Dupoux

**ID:** 139408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SWuTTE5dX2>) | [PDF](<https://openreview.net/pdf?id=SWuTTE5dX2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139408>)

Children acquire language with remarkable speed and robustness from limited linguistic input in ways that surpass today's best large language models\. Recent research suggests this efficiency stems from learning through multimodal sensory experiences where semantic alignment between what children see and hear grounds language in the external world\. However, vision\-language models \(VLMs\) trained on curated web data fail to generalize to the sparse, weakly\-aligned egocentric streams produced by wearable devices, embodied agents, and infant head\-cams—and no fixed evaluation pipeline exists for measuring progress on this regime\. We train VLMs on datasets with varying degrees of semantic alignment between visual and linguistic inputs, including naturalistic infant egocentric videos, and evaluate them with a comprehensive suite spanning multimodal language grounding and unimodal vision and language tasks\. At the core of this suite is \_Machine\-DevBench\_, a corpus\-grounded benchmark of lexical and grammatical competence, automatically generated from the model's training vocabulary across logarithmic frequency bins to eliminate the train/eval mismatch and low statistical power of prior developmental benchmarks\. Our results show that current VLM paradigms hinge on the tight semantic alignment of curated data and fail to exploit the weakly\-aligned signal that dominates naturalistic egocentric input—the very regime in which humans thrive\. To motivate progress, we introduce the EgoBabyVLM Challenge to drive the development of models capable of grounded language learning from the kind of naturalistic data that human infants experience\.

## OmniSE: Support\-Faithful Optimization for Evidence\-Centric Audio\-Video Reasoning

**Authors:** Xilin He; Yifan Shen; Ankan Deria; Xiangyu Yue; Muhammad Haris Khan

**ID:** 149329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=quMnHuIS85>) | [PDF](<https://openreview.net/pdf?id=quMnHuIS85>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149329>)

Omni\-modal models are expected to reason over synchronized visual events and audio cues, yet answer accuracy alone can conceal failures in where an answer is grounded and which modality supports it\. In audio\-video question answering \(AVQA\), models may produce correct answers while relying on incorrect temporal spans, dominant\-modality shortcuts, or unsupported cross\-modal relations\.  We argue that this failure arises from treating reasoning as a completion\-level prediction problem, where supervision and reward signals do not distinguish between support selection and reasoning over the support\.  To address this, we introduce OmniSE, a support\-faithful optimization framework that makes question\-conditioned audio\-video support the central training object\. Each QA instance is rewritten into an Audio\-Visual Evidence Trace, a compact optimization unit that records temporal evidence, modality\-specific cues, cross\-modal relations, and cited reasoning steps\. Given this support object, OmniSE first uses Support\-Tree Rollout \(STR\) to explore alternative support hypotheses before sampling support\-conditioned reasoning and answers\. It then applies factorized reward assignment to score temporal localization, modality evidence, cross\-modal binding, reasoning faithfulness, and answer correctness at their corresponding comparison levels\. Finally, reward\-gated self\-consistency regularizes sibling continuations under reliable support, encouraging fixed trustworthy evidence to induce stable reasoning and answers\. Experiments on multiple AVQA benchmarks show that OmniSE consistently outperforms strong open\-source baselines at the same scale, demonstrating the importance of support\-centric optimization for evidence\-centric audio\-video reasoning\. Code and data would be publicly available after peer review\.

## MARBLE: an Agent Benchmark for Spatial Reasoning and Visual Abstraction

**Authors:** Yulun Jiang; Naël Ouerghemi; Yekun Chai; Maria Brbic; Michael Moor

**ID:** 139520 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ke4tOr2Cva>) | [PDF](<https://openreview.net/pdf?id=Ke4tOr2Cva>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139520>)

A central challenge for multimodal language models \(MLLMs\) in real\-world tasks is to abstract visual observations into structured spatial states and reason over how those states change under actions over long\-horizons\.  Existing multimodal benchmarks often focus on static question answering, where answers can be directly extracted from images, or assume symbolic states are available and bypass the visual\-to\-spatial abstraction process\. We present MARBLE, a diagnostic benchmark for spatially grounded multimodal reasoning and planning across three agent environments: Cube, Maze and Blox\. MARBLE spans 2D and 3D spatial puzzles under geometric constraints, dynamic layouts, and spatial transformations, with difficulty systematically controlled along two axes: observation format and planning horizon\. Extensive evaluations show that frontier MLLMs struggle on MARBLE, with the strongest model GPT\-5\.4 achieving only a 7\.3\\% average success rate across the three environments in the hardest setting\. Pairwise ablations on the open\-weight models identify visual\-to\-spatial abstraction as the major bottleneck: when models must infer spatial states from images instead of receiving human\-annotated states, success drops from 50\.7\\% to 3\.7\\% for Gemma\-4\-31B and from 87\.9\\% to 6\.5\\% for Kimi\-K2\.6\. The results indicate that models often fail to construct precise spatial states from visual observations before planning, a task that is straightfoward for human\. Overall, MARBLE reveals the gap of reliable visual\-to\-spatial for frontier MLLMs and provides a controlled testbed for measuring progress in spatially grounded multimodal reasoning and planning\.

## StaDy: Factorizing the World into Static and Dynamic via Likelihood Matching

**Authors:** Thomas Ressler\-Antal; Frank Fundel; Malek Ben Alaya; Stefan Andreas Baumann; Björn Ommer

**ID:** 149420 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qBH3DcGnNL>) | [PDF](<https://openreview.net/pdf?id=qBH3DcGnNL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149420>)

Latent action models \(LAMs\) aim to learn compact representations of state transitions directly from visual observations, but they suffer from a fundamental ambiguity: the latent code can encode target\-state information rather than true dynamics\. Existing approaches address this issue through restrictive bottlenecks, which reduce leakage at the cost of limiting expressivity\. We propose StaDy, a regularization framework that instead enforces conditional informativeness: the latent code should aid prediction only when paired with the source state, while remaining uninformative about the target on its own\. Concretely, we introduce a likelihood\-matching objective that aligns the decoder’s predictions conditioned solely on the latent variable with its unconditional predictions\. This discourages target memorization without constraining latent capacity\. Experiments in video modeling show that, unlike bottleneck\-based methods, StaDy scales effectively with increased latent dimensionality, reducing static content leakage while improving the representation of more complex dynamics\.

## Asymmetric Hierarchical Anchoring for Robust Audio–Visual Cross\-Modal Generalization

**Authors:** Bixing Wu; Yuhong Zhao; Zongli Ye; Jiachen Lian; Xiangyu Yue; Gopala Anumanchipalli

**ID:** 148414 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y12FDZrZbA>) | [PDF](<https://openreview.net/pdf?id=y12FDZrZbA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148414>)

Audio\-\-visual joint representation learning under Cross\-Modal Generalization \(CMG\) aims to transfer knowledge from a labeled source modality to an unlabeled target modality through a unified discrete representation space\. Existing symmetric frameworks often suffer from information allocation ambiguity, where the absence of structural inductive bias leads to semantic\-\-specific leakage across modalities\. We propose Asymmetric Hierarchical Anchoring \(AHA\), which enforces directional information allocation by designating a structured semantic anchor within a shared hierarchy\. In our instantiation, we exploit the hierarchical discrete representations induced by audio Residual Vector Quantization \(RVQ\) to guide video feature distillation into a shared semantic space\. To ensure representational purity, we replace fragile mutual information estimators with a GRL\-based adversarial decoupler that explicitly suppresses semantic leakage in modality\-specific branches, and introduce Local Sliding Alignment \(LSA\) to encourage fine\-grained temporal alignment across modalities\. Extensive experiments on AVE and AVVP benchmarks demonstrate that AHA consistently outperforms symmetric baselines in cross\-modal transfer\. Additional analyses on talking\-face disentanglement experiment further validate that the learned representations exhibit improved semantic consistency and disentanglement, indicating the broader applicability of the proposed framework\.

## From Finding to Linking: Benchmarking and Advancing Cross\-Long\-Video Reasoning for Multimodal LLMs

**Authors:** Meng Luo; Zikang Zhou; Shanqing Xu; Shize Zhang; Bobo Li; Hao Fei; Mong\-Li Lee; Wynne Hsu

**ID:** 148946 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u03DysVjOF>) | [PDF](<https://openreview.net/pdf?id=u03DysVjOF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148946>)

Reasoning across multiple long\-form videos requires models to find sparse evidence within each video and link related entities, events, and narratives across streams\. Existing long\-video benchmarks mainly evaluate single\-video understanding, while multi\-video benchmarks typically use short clips\. We introduce CLoVR\-Bench, a comprehensive benchmark for Cross\-Long\-Video Reasoning with 2,000 expert\-annotated QA pairs over 400 long\-form videos\. Its three\-level taxonomy covers Comparative Analysis, Tracking and Retrieval, and Integrated Reasoning, spanning 14 tasks and 36 subtasks that diagnose both intra\-video localization and inter\-video alignment\. Our evaluation of 13 representative MLLMs shows substantial gaps across this hierarchy, with performance degrading from localized comparison to long\-range retrieval and integrated cross\-video reasoning\. We further propose HOLMES, a training\-free framework that formulates cross\-long\-video reasoning as evidence\-slot filling over a typed binding graph\. HOLMES plans option\-discriminating evidence slots, localizes evidence with risk\-conditioned policies, records coverage certificates for failed searches, verifies cross\-video bindings visually, audits constraints, and returns answers through hard graph\-readout gates\. Experiments show that HOLMES improves both open\-source and closed\-source backbones, outperforms adapted long\-video baselines, and yields the largest gains on tasks requiring long\-range evidence search and cross\-video binding\. Together, CLoVR\-Bench and HOLMES provide a diagnostic testbed and an interpretable baseline for future cross\-long\-video reasoning\.

## HOPE: Hand\-Object Pressure Estimation from Monocular Videos

**Authors:** Subin Jeon; Byungjun Kim; Hanbyul Joo

**ID:** 148354 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yVwONiM3oG>) | [PDF](<https://openreview.net/pdf?id=yVwONiM3oG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148354>)

Estimating physical pressure from vision is essential for understanding contact\-rich hand\-object interaction\. However, prior vision\-based pressure estimation methods are largely limited to planar surfaces and single image input, making them difficult to apply to dynamic hand\-object interaction with diverse objects\. We instead formulate pressure estimation as a hand\-centric video prediction problem with monocular video as input\. This formulation predicts temporally evolving per\-vertex normal pressure and contact directly on the hand mesh, yielding a unified output space independent of object shape and sensor layout\. Building on this formulation, we propose HOPE, a framework with two key components\. First, we lift tactile\-glove pressure, planar\-sensor pressure, and distance\-based hand\-object contact annotations into a shared hand vertex space, allowing bare\-hand contact data to regularize pressure learning where metric labels are unavailable\. Second, we introduce a vertex\-anchored video transformer that treats each vertex as a persistent token, aggregates visual features and hand pose over time, and uses a contact\-gated pressure head to enforce that pressure vanishes without contact\. Experiments on OpenTouch, PressureVisionDB, and hand\-object contact benchmarks demonstrate that HOPE supports a common hand\-centric representation across object\-pressure, surface\-pressure, and contact\-supervised HOI settings\. Despite using metric pressure supervision primarily from gloved\-hand videos, HOPE generalizes to bare\-hand egocentric and in\-the\-wild videos, producing joint contact and pressure predictions beyond the scope of contact\-only or planar\-pressure baselines\.

## SierpinskiCam: Camera\-Controlled Video Retaking with Sierpinski Triangle Pattern Cues

**Authors:** Suttisak Wizadwongsa; Hyelin Nam; Supasorn Suwajanakorn; Jeong Joon Park

**ID:** 148899 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uLAOZJkWvq>) | [PDF](<https://openreview.net/pdf?id=uLAOZJkWvq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148899>)

Generating novel renderings of a scene along user\-defined camera trajectories from a single monocular video, dubbed video retaking, is a compelling but difficult problem in content creation and visual effects\. Existing geometry\-guided approaches reconstruct a 4D representation from the source video and render it along the target trajectory to condition video diffusion models\. However, this guidance degrades as the target camera departs from the source trajectory, leaving newly revealed regions sparse or entirely missing\. We propose SierpinskiCam, which addresses this limitation by augmenting geometry\-based guidance with Sierpinski dome texture cues that contains rich trackable features even under large viewpoint changes\.  We further introduce a reference video conditioning mechanism that appends source\-video tokens to the target\-token sequence and separates the two streams with negative RoPE indices, enabling appearance grounding without architectural modification or per\-video adaptation\. Extensive experiments show that SierpinskiCam achieves significant gains in camera controllability, geometric consistency, and video quality across diverse and challenging retaking scenarios\.

## MM\-IssueLoc: A Controlled Benchmark for Evaluating Visual Evidence in Multimodal Repository\-Level Issue Localization

**Authors:** Shaoxiong Zhan; Shi Hu; Hai Lin; BoyuFeng; Andrew Gong; Zhengda Zhou; Jiaying Zhou; Yunyun Hou; Hao Su; Hai\-Tao Zheng

**ID:** 139107 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kcFk0SWO6q>) | [PDF](<https://openreview.net/pdf?id=kcFk0SWO6q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139107>)

Real repository issues routinely include visual evidence such as screenshots, error dialogs, rendered UI states, and logs, yet repository\-level issue localization is still evaluated mostly as a text\-only task\. Existing multimodal SE benchmarks evaluate end\-to\-end repair, entangling localization with patch synthesis and obscuring whether visual input helped, hurt, or was ignored entirely\. To isolate this effect, we introduce \\textbf\{MM\-IssueLoc\}, a controlled benchmark and evaluation protocol for repository\-level localization with visual evidence\. MM\-IssueLoc contains 652 issue\-PR instances across 23 programming languages, with annotations for 7 image categories and 4 relevance levels\. It provides file\-level and function\-level gold labels, paired text\-only and with\-image evaluation, and VCE\-based diagnostics that convert images into structured textual evidence\. We evaluate representative llm\-based and retrieval\-based systems, including MM\-IssueLoc\-VL\-Embedding as a controlled multimodal retriever\. Results show a substantial gap between current systems and reliable multimodal repository localization: the strongest agent reaches 38\.96 file Acc@5 and 22\.45 function Acc@10, while the strongest retriever reaches 33\.86 function Acc@10\. Cross\-benchmark comparisons further show that high localization scores on text\-dominant SWE benchmarks do not transfer cleanly to multimodal issue localization\. MM\-IssueLoc turns visual evidence into an explicit evaluation variable, enabling future work to test whether systems improve by using visual evidence for localization, rather than by relying on text\-only cues or downstream patch\-generation effects\.

## Harnessing Streaming Video in the Wild

**Authors:** Dingyu Yao; Shuhuan Gu; Qingyi Si; Junhao Zhou; Chenxu Yang; Chuanyu Qin; Naibin Gu; Zheng Lin; Weiping Wang; Nan Duan; Jiaqi Wang

**ID:** 152564 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SCGXHtv16L>) | [PDF](<https://openreview.net/pdf?id=SCGXHtv16L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152564>)

Vision\-Language Models \(VLMs\) are increasingly required to process unbounded video streams in applications such as video\-call assistants, live commentary, and embodied robots\. An ideal streaming system should support proactive interaction, long\-horizon memory, and real\-time processing, while resting on a VLM backbone capable of handling diverse in\-the\-wild streaming tasks\. However, existing VLMs excel at offline video understanding but fall short in streaming capabilities and lack dedicated infrastructure for streaming deployment\. We address this gap on three fronts\. \(i\) For backbone capability, we construct \\textbf\{Streaming\-Train\-248K\}, a streaming dataset paired with a novel training objective for adapting VLMs to streaming interaction and understanding\. \(ii\) For real\-world deployment, we introduce \\textbf\{Streaming Harness\}, a plug\-and\-play system that endows any VLM with three core abilities: proactive interaction \(per\-second response decisions\), long\-term memory \(12\-hour context retention\), and real\-time processing \(sub\-second latency\)\. \(iii\) To drive continued community progress on streaming capabilities, we design \\textbf\{Streaming\-Eval\}, a benchmark that reflects models' capabilities across diverse in\-the\-wild scenarios\. Extensive experiments demonstrate consistent gains from our approach across all core capabilities required for streaming video understanding\. We will open\-source our data, code, and benchmark to advance the community's shift from offline video understanding to deployable streaming intelligence\.

## Prior\-Anchored Local Statistical Representation Rectification for Low\-Light Image Enhancement

**Authors:** chang liu; Wenjian Wang; Yuhua Qian; Keqi Wang

**ID:** 150834 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=exQVJdz22G>) | [PDF](<https://openreview.net/pdf?id=exQVJdz22G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150834>)

Existing low\-light image enhancement methods are increasingly built on deep representation learning\.  However, most of them still encode features as deterministic points in the embedding space, making it difficult to capture the statistical uncertainty\. Under complex low\-light scenes, latent neighborhood relations tend to reflect degradation patterns rather than semantic content or local structures, which leads to statistical shifts and reduced discriminability of representations\.  Therefore, we propose Prior\-Anchored Local Statistical Representation Rectification \(PaLSR\), which models low\-light enhancement as a representation learning process driven by local statistical rectification\. PaLSR first learns a normal\-light statistical prior with K Gaussian anchors, which provides a shared coordinate system for local representation\. Instead of enhancing degraded features in the Euclidean embedding space, PaLSR represents each feature as mean\-variance offsets relative to these anchors, describing its content displacement and uncertainty\. With these offsets rectified, local representations are reorganized under complex low\-light degradations\.  Extensive experiments on multiple low\-light benchmarks and different network architectures show that PaLSR achieves consistent improvements in restoration quality\. These results validate the effectiveness of prior\-anchored local statistical representation rectification under complex degradation conditions\.

## VISD: Enhancing Video Reasoning via Structured Self\-Distillation

**Authors:** Hao Lin; Kunyang Lv; Xu Jiang; Jingqi Tian; Zhongjing Du; Jiayu Ding; Qiaoman Zhang; Hongbo Jin

**ID:** 154414 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DjpDYAkt81>) | [PDF](<https://openreview.net/pdf?id=DjpDYAkt81>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154414>)

Training VideoLLMs for complex reasoning remains challenging due to sparse sequence\-level rewards and the lack of fine\-grained credit assignment over long, temporally grounded reasoning trajectories\. While reinforcement learning with verifiable rewards \(RLVR\) provides reliable supervision, it fails to capture token\-level contributions, leading to inefficient learning\. Conversely, existing self\-distillation methods offer dense supervision but lack structure and diagnostic specificity, and often interact unstably with reinforcement learning\. In this work, we propose VISD, a structured self\-distillation framework that introduces diagnostically meaningful privileged information for video reasoning\. VISD employs a video\-aware judge model to decompose reasoning quality into multiple dimensions, including answer correctness, logical consistency, and spatio\-temporal grounding, and uses this structured feedback to guide a teacher policy for token\-level supervision\. To stably integrate dense supervision with RL, we introduce a direction–magnitude decoupling mechanism, where environment rewards determine update direction, while structured privileged signals modulate token\-level update magnitudes\. This design  enables semantically aligned and fine\-grained credit assignment, improving both reasoning faithfulness and training efficiency\. Additionally, VISD incorporates independent advantage estimation, curriculum scheduling, and EMA\-based teacher stabilization to support robust optimization over long video sequences\. Experiments on various benchmarks demonstrate that VISD consistently outperforms strong baselines across diverse video reasoning tasks, achieving gains in accuracy, grounding quality, and interpretability\. Notably, VISD significantly accelerates convergence, highlighting the effectiveness of structured self supervision in improving both performance and sample efficiency for VideoLLMs\.

## CausalCine: Real\-Time Autoregressive Generation for Multi\-Shot Video Narratives

**Authors:** Yihao Meng; Zichen Liu; Hao Ouyang; Qiuyu Wang; Ka Leong Cheng; Yue Yu; Hanlin Wang; Xing Zhu; Yujun Shen; Qifeng Chen; Huamin Qu

**ID:** 154338 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ELwIR2S82B>) | [PDF](<https://openreview.net/pdf?id=ELwIR2S82B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154338>)

Autoregressive video generation aims at real\-time, open\-ended synthesis\. Yet, cinematic storytelling is not merely the endless extension of a single scene; it requires progressing through evolving events, viewpoint shifts, and discrete shot boundaries\. Existing autoregressive models often struggle in this setting\. Trained primarily for short\-horizon continuation, they treat long sequences as extended single shots, inevitably suffering from motion stagnation and semantic drift during long rollouts\. To bridge this gap, we introduce \\textbf\{CausalCine\}, an interactive autoregressive framework that transforms multi\-shot video generation into an online directing process\. CausalCine generates causally across shot changes, accepts dynamic prompts on the fly, and reuses context without regenerating previous shots\. To achieve this, we first train a causal base model on native multi\-shot sequences to learn complex shot transitions prior to acceleration\. We then propose Content\-Aware Memory Routing \(CAMR\), which dynamically retrieves historical KV entries according to attention\-based relevance scores rather than temporal proximity, preserving cross\-shot coherence under bounded active memory\. Finally, we distill the causal base model into a few\-step generator for real\-time interactive generation\. Extensive experiments demonstrate that CausalCine significantly outperforms autoregressive baselines and approaches the capability of bidirectional models while unlocking the streaming interactivity of causal generation\.

## TopoCurve: Geometry\-Aware Topology Reasoning via Bézier Curves in Autonomous Driving

**Authors:** Mihai Bogdan Deaconu; Laura Diosan

**ID:** 149504 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=peNZjVneDd>) | [PDF](<https://openreview.net/pdf?id=peNZjVneDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149504>)

Topology reasoning jointly detects 3D lanes and traffic elements from multi\-view images and infers their structural connectivity\. Current methods model lanes as discrete polylines, lacking smoothness, analytical tangent directions, and global spatial support for attention, while providing sparse topology supervision\. We propose TopoCurve, a geometry\-driven architecture for 3D topology reasoning grounded in a structured parametric lane representation\. Lanes are modeled as endpoint\-fixed cubic Bézier curves, enabling continuous geometry with exact endpoints and analytically defined directionality\. We exploit this shared curve geometry across the entire pipeline\. Endpoint distance and tangent alignment are encoded with multi\-scale Fourier features and injected into the topology head\. Sampled curve points serve as geometry\-aligned references for deformable cross\-attention spanning the full lane\. Parallel curve\-anchored attention branches provide diverse predictions for one\-to\-many topology supervision\. These components form a tightly coupled cascade where representation enables geometric reasoning, guides feature aggregation, and supports denser supervision\. TopoCurve achieves 50\.6 OLS on the OpenLane\-V2 benchmark without any post\-processing, establishing a new state\-of\-the\-art among end\-to\-end camera\-only methods, and outperforms all existing approaches on endpoint detection \(56\.8 vs\. 52\.6 on DET$\_p$\)\.

## V2M\-Zero: Zero\-Pair Time\-Aligned Video\-to\-Music Generation

**Authors:** Yan\-Bo Lin; Jonah Casebeer; Long Mai; Aniruddha Mahapatra; Gedas Bertasius; Nicholas J\. Bryan

**ID:** 152475 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SnU3xpuCox>) | [PDF](<https://openreview.net/pdf?id=SnU3xpuCox>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152475>)

Generating music that temporally aligns with video events is challenging for existing text\-to\-music models, which lack fine\-grained temporal control\. We introduce V2M\-ZERO, a video\-to\-music generation approach that generates time\-aligned3 music with disentangled time synchronization and semantic control \(e\.g\. genre, mood\) from video while requiring zero video\-music pairs at training time\. Our method is motivated by a key observation: temporal synchronization requires matching when and how much change occurs, not what changes\. While musical and visual events differ semantically, they exhibit shared temporal structure that can be captured independently within each modality\. We capture this structure through event curves computed from intra\-modal similarity using pretrained music and video encoders\. By measuring temporal change within each modality independently, these curves provide comparable representations across modalities\. This enables a simple training strategy: fine\-tune a text\-to\-music model on music\-event curves, then substitute video\-event curves at inference without cross\-modal training or paired data\. Across OES\-Pub, MovieGenBench\-Music, and AIST\+\+, V2M\-ZERO achieves state\-of\-the\-art performance without any paired music\-video data, surpassing the strongest prior baselines per metric with 5–9% higher audio quality, 13–15% better semantic alignment, 21–52% improved temporal synchronization, and 28% higher beat alignment on dance videos\. We find similar results via a large crowd\-source subjective listening test\. Our results vali\-20 date that temporal alignment through within\-modality features is not only effective for video\-to\-music generation but leads to better performance over paired cross\-modal supervision\. Furthermore, our approach enables independent controls for timing and music style \(e\.g\. genre, mood\) for more controllable generation\.

## Edit the Bits, Diff the Codes: Bitwise Residual Editing for Visual Autoregressive Models

**Authors:** Shengqiang Zhang; Ruotong Liao; Volker Tresp; Barbara Plank; Hinrich Schuetze

**ID:** 151219 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c371hRPzMl>) | [PDF](<https://openreview.net/pdf?id=c371hRPzMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151219>)

Text\-guided image editing with visual autoregressive \(VAR\) generators requires controlling both what the model samples and where the sampled change is written back into the image\. Existing VAR editors mainly operate on token streams, features, or flat next\-token logits, leaving two native structures of bitwise\-residual VAR models underused: the per\-bit Bernoulli prediction head and the additive multi\-scale residual code field\. We propose BitResEdit, a training\-free editor for bitwise\-residual VAR generators such as \\textsc\{Infinity\}\. BitEdit performs source\-negative guidance by tilting the post\-CFG per\-bit log\-odds along a source\-\-target contrast computed on a shared edited prefix, then projects each update into a closed\-form Bernoulli\-KL trust region around the clean CFG sampler\. ResEdit converts the resulting sampled bits into per\-scale continuous\-code residuals, gates them with a localization mask, and re\-injects them through the generator's native sum\-of\-scales\. The two components couple decision\-time bit guidance with combination\-time code composition, preserving masked\-out latent features exactly while applying localized, scale\-aware edits inside the target region\. On PIE\-Bench with Infinity\-2B, BitResEdit achieves the strongest text alignment among same\-backbone VAR editors and competitive background preservation, setting a new state of the art among training\-free VAR editing methods\. Ablations show that BitEdit and ResEdit play complementary roles in target alignment and background preservation\. Detailed ablations show that both code\-space residual editing and bitwise phrase\-contrast guidance are necessary for robust autoregressive image editing\.

## Sparkle: Realizing Lively Instruction\-Guided Video Background Replacement via Decoupled Guidance

**Authors:** Ziyun Zeng; Yiqi Lin; Guoqiang Liang; Mike Zheng Shou

**ID:** 139087 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lxENzLpNAa>) | [PDF](<https://openreview.net/pdf?id=lxENzLpNAa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139087>)

In recent years, open\-source efforts like Senorita\-2M have propelled video editing toward natural language instruction\. However, current publicly available datasets predominantly focus on local editing or style transfer, which largely preserve the original scene structure and are easier to scale\. In contrast, \*Background Replacement\*, a task central to creative applications such as film production and advertising, requires synthesizing entirely new, temporally consistent scenes while maintaining accurate foreground\-background interactions, making large\-scale data generation significantly more challenging\. Consequently, this complex task remains largely underexplored due to a scarcity of high\-quality training data\. This gap is evident in poorly performing state\-of\-the\-art models, \*e\.g\.,\* Kiwi\-Edit, because the primary open\-source dataset that contains this task, \*i\.e\.,\* OpenVE\-3M, frequently produces static, unnatural backgrounds\. In this paper, we trace this quality degradation to \*a lack of precise background guidance\* during data synthesis\. Accordingly, we design a scalable pipeline that generates foreground and background guidance in a decoupled manner with strict quality filtering\. Building on this pipeline, we introduce \*Sparkle\*, a dataset of \~140K video pairs spanning five common background\-change themes, alongside \*Sparkle\-Bench\*, the largest evaluation benchmark tailored for background replacement to date\. Experiments demonstrate that our dataset and the model trained on it achieve substantially better performance than all existing baselines on both OpenVE\-Bench and Sparkle\-Bench\. Our proposed dataset, benchmark, and model are fully open\-sourced at https://showlab\.github\.io/Sparkle/\.

## Binding Visual Features Point by Point

**Authors:** Udith Haputhanthri; Declan Campbell; Rim Assouel; Jonathan D Cohen; Taylor Webb

**ID:** 148298 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yu8ajcYUw2>) | [PDF](<https://openreview.net/pdf?id=yu8ajcYUw2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148298>)

Despite success on standard benchmarks, vision language models display persistent failures on tasks involving processing of multi\-object scenes, including many tasks that are relatively easy for humans\. Recent work has found that these failures may stem from a basic inability to accurately bind object features in\-context, a challenge that is referred to as the ‘binding problem' in cognitive science and neuroscience\. The human visual system is thought to solve this binding problem via serial processing, attending to individual objects one at a time so as to avoid interference from other objects\. Recent work has proposed \`pointing' \-\- the use of explicit spatial coordinates to refer to objects \-\- as an analogous solution for vision language models, and found that it improves performance on challenging multi\-object tasks\. However, it is unclear \\textit\{why\} \(i\.e\., on a mechanistic or representational level\) this approach improves performance, and how directly this relates to serial processing in human vision\. Here, we investigate this question\. We find that learning to point\-via\-text induces an internal visual search routine, and we characterize the mechanisms that support this procedure\. We also find that pointing behavior can be generalized to new tasks via fine\-tuning, and that doing so eliminates binding errors and enables compositional generalization\. These results provide a proof\-of\-principle that serial processing can solve the binding problem for vision language models just as it does for biological vision\.

## ADMIT: Support\-Gated Memory\-Write Admission for Document QA Agents

**Authors:** Joongmin Shin; Gyuho Shim; Hyeonseok Moon; Jaehyung Seo

**ID:** 155533 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sP52RCwde>) | [PDF](<https://openreview.net/pdf?id=4sP52RCwde>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155533>)

Document QA agents do not fail only at the final answer\. They can also write unsupported claims into public working memory, and those writes can affect later retrieval and synthesis\. We introduce ADMIT \(Auditable Decoupled Memory\-write admission for Intermediate Traces\), a low\-budget admission controller for public OCR/text evidence packs\. ADMIT applies a deterministic substring\-support check $S\_\{\\text\{str\}\}\(\\hat\{y\}, B\) &gt; 0$ to each public commit and allows one bounded RepairRead\. If repair still fails, ADMIT uses a memory\-fail\-closed / output\-fail\-open rule: it writes a $\\bot$ \(NO\_COMMIT\) sentinel to memory while the final\-answer surface may still fall back to the baseline answer\. On held\-out M3DocVQA, a retrained final\-row router closes the answer\-surface gap; ADMIT's distinguishing evidence is therefore memory\-surface contamination, not final\-answer accuracy\. The lexical invariant guarantees zero\-substring accepted intermediate contamination by construction; the contribution is therefore the public memory\-write boundary as a low\-cost control surface with decoupled fail actions, not the invariant itself\. In a 7\-arm dynamic stress diagnostic on three agents, ADMIT enforces the invariant and preserves raw EM at this operating point \(zero contaminated trajectories on every agent and no detectable raw\-EM loss relative to the fail\-open ablation\), whereas final\-only baselines still leave $12$\-\-$32%$ contamination\. ADMIT enforces lexical auditability, not semantic truth: relation\-level entailment, citation\-aware faithfulness, and visual\-region grounding are not claimed, and lower\-density VisDoMSlide and text\-only FRAMES are reported as boundary cases\.

## The BAMBI Dataset: Multimodal Nadir UAV\-Recordings of Forest Wildlife

**Authors:** Christoph Praschl; Hugo Markoff; Anna Maschek; Wolfram Jantsch; Stephanie Wohlfahrt; Anton H Jørgensen; Christian E Mogensen; Mathias B Skadhauge; Sara Beery; Michael Ørsted; David C Schedl

**ID:** 139191 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=faFMXW9ROx>) | [PDF](<https://openreview.net/pdf?id=faFMXW9ROx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139191>)

Large\-scale wildlife monitoring in forested environments using drones remains challenging due to occlusion, limited visibility, and scarce annotated data\. We present a comprehensive airborne wildlife dataset comprising 386 paired RGB and thermal aerial video sequences recorded across diverse temperate forests and forest\-adjacent habitats in Austria\. Each frame is geo\-referenced with precise global coordinates \(longitude, latitude and altitude\), enabling learning and evaluation in both image space and geographic space\. The dataset includes 10 animal species captured under varying seasonal, environmental, and illumination conditions, with annotations supporting tasks such as object detection, multi\-object tracking and fine\-grained classification\. The multispectral data and spatial metadata enable research on world\-coordinate trajectory analysis, spatial population modeling, geo\-aware perception, and advanced methods such as Airborne Light Field Sampling\. Thermal subsets of this dataset have been used to develop and validate methods for wildlife monitoring, while the RGB data has mainly stayed untouched\. To address this, we present a cross\-modal pipeline to transfer thermal annotations to RGB frames next to the dataset\. With this dataset we aim to provide a blueprint to promote research on multimodal, geo\-referenced perception in ecology\.

## Evaluation of Visual Processing Should Be Human\-Centered, Not Metric\-Centered

**Authors:** Fanghua Yu; Jinfan Hu; Zhiyuan You; Xiang Yin; Hongyu An; Xinqi Lin; Hongyang Li; Chao Dong; Jinjin Gu

**ID:** 140005 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uTpdwVSSKl>) | [PDF](<https://openreview.net/pdf?id=uTpdwVSSKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140005>)

This position paper argues that the evaluation of modern visual processing systems should no longer be driven primarily by single\-metric image quality assessment benchmarks, particularly in the era of generative and perception\-oriented methods\. Image restoration exemplifies this divergence: while objective IQA metrics enable reproducible, scalable evaluation, they have increasingly drifted apart from human perception and user preferences\. We contend that this mismatch risks constraining innovation and misguiding research progress across visual processing tasks\. Rather than rejecting metrics altogether, this paper calls for a rebalancing of evaluation paradigms, advocating a more human\-centered, context\-aware, and fine\-grained approach to assessing the visual models' outcomes\.

## FUTON: Fourier Tensor Network for Implicit Neural Representations

**Authors:** Pooya Ashtari; Pourya Behmandpoor; Nikos Deligiannis; Aleksandra Pizurica

**ID:** 154014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gru6lQkUxo>) | [PDF](<https://openreview.net/pdf?id=Gru6lQkUxo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154014>)

Implicit neural representations \(INRs\) have emerged as powerful tools for encoding signals, yet dominant MLP\-based designs often suffer from slow convergence, overfitting to noise, and poor extrapolation\. We introduce FUTON \(Fourier Tensor Network\), which models signals as generalized Fourier series whose coefficients are parameterized by a low\-rank tensor decomposition\. FUTON implicitly expresses signals as weighted combinations of orthonormal, separable basis functions, combining complementary inductive biases: Fourier bases capture smoothness and periodicity, while the low\-rank parameterization enforces low\-dimensional spectral structure\. We provide theoretical guarantees through a universal approximation theorem and derive an inference algorithm with empirically linear complexity in both the spectral resolution and the input dimension\. On image and volume representation, FUTON consistently outperforms state\-of\-the\-art MLP\-based INRs while training 2–5× faster\.

## FrameSelect: A Unified Library for Video Frame Selection and Evaluation

**Authors:** Arihant Jain; Chaosheng Dong

**ID:** 139258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=blSpUkSwiB>) | [PDF](<https://openreview.net/pdf?id=blSpUkSwiB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139258>)

Frame selection\-\-\-picking a small set of informative frames from a video to feed a vision\-language model \(VLM\)\-\-\-sits at the front of every video\-VLM system, yet the literature is fragmented: most works do not share a candidate pool, encoder, frame budget, or answering VLM, making published gains hard to compare across works\. We introduce FrameSelect, to the best of our knowledge the first Python library that treats the selector as a standalone, interchangeable component, cleanly separated from the encoder that computes representations and the VLM that answers\. Any registered selector composes with any registered evaluator through a single call, and adding a new selector, dataset, encoder, or VLM backend is an isolated extension; a replay mode further rebuilds any table under a different answering VLM without re\-running selection\. We release reference implementations of 20 selectors, 15 evaluators spanning answer\-level and selection\-level metrics, and the first unified benchmark comparing frame selectors under a shared protocol across seven evaluators spanning both evaluation modes\. This comparison surfaces findings that existing studies cannot: rankings invert across benchmarks\. Our library is available at https://anonymous\.4open\.science/r/FrameSelect\-D2A4\.

## DDMS: Discriminative Distillation of Multi\-view Foundational Features into Single\-view Models

**Authors:** Jeonggi Kwak; Sho Kagami; Yuki Ono; Kwang Moo Yi

**ID:** 148341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yZ8biwPKlA>) | [PDF](<https://openreview.net/pdf?id=yZ8biwPKlA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148341>)

Foundational visual features such as DINO have played a critical role across modern computer vision, and have recently become key components in multi\-view feed\-forward geometry estimators\. In this work, we demonstrate that by re\-distilling these multi\-view models\-their internal knowledge of 3D geometry\-into a single\-view estimator, we can obtain enhanced 3D consistent foundational features\. Our key idea is to construct a multi\-view teacher by fusing pretrained 2D foundation features with multi\-view geometric features, and refining the fused representation with a discriminative ranking objective\. Through our discriminative distillation framework, we enforce the learned features to be both 3D consistent and locally distinctive, while keeping them aligned with the feature space of the original foundation model to preserve the semantic structure of the pretrained representation\. Consistency and local discriminability are critical for 3D computer vision problems such as forming semantic and geometric correspondences across images\. To demonstrate the effectiveness of our method, we perform comprehensive experiments spanning multiple angles: direct feature analysis, dense prediction transfer, and explicit 3D lifting and rendering\. Across these evaluations, our method consistently produces stronger 3D\-aware foundation features that improve multi\-view consistency and local discriminability while preserving the semantic transferability of the original representation\.

## MorphoHELM: A Comprehensive Benchmark for Evaluating Representations for Microscopy\-Based Morphology Assays

**Authors:** Emre Hayir; Lorin Crawford; Alex X Lu

**ID:** 139503 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lw6zDn55qc>) | [PDF](<https://openreview.net/pdf?id=Lw6zDn55qc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139503>)

Microscopy images contain rich information about how cells respond to perturbations, making them essential to applications like drug screening\. To quantify images, researchers often use representation extraction methods, and recent years have seen a proliferation of deep learning methods\. While measuring the quality of these representations is essential, evaluation remains fragmented, with each proposed model evaluated on different tasks and datasets, using custom pipelines and metrics, making it difficult to fairly compare models\. Here, we introduce MorphoHELM, a comprehensive open benchmark for evaluating feature extraction methods for cell painting, the most widely\-used morphological profiling assay\. MorphoHELM consolidates evaluation standards in the field, extends and corrects them to be more robust, and evaluates on the widest range of methods to date\. A defining feature of the benchmark is that each task is evaluated at different degrees of batch effects \(or technical noise\), directly quantifying how the ability of methods to detect biological signal degrades as noise increases\. Together, these properties enable MorphoHELM to detect trade\-offs between methods, and we demonstrate that models that excel at certain kinds of biological signal are weaker at others\. We show that no existing model outperforms classic computer vision analytic strategies across all settings, which remain the strongest general use\-case representations\. All datasets, code, and evaluation tools are publicly available\.

## No Detail Left Behind: Revisiting Self\-Retrieval for Fine\-Grained Image Captioning

**Authors:** Manu Gaur; Darshan Singh; Makarand Tapaswi

**ID:** 156783 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156783>)

Image captioning systems are unable to generate fine\-grained captions as they are trained on data that is either noisy \(alt\-text\) or generic \(human annotations\)\. This is further exacerbated by maximum likelihood training that encourages generation of frequently occurring phrases\. Previous works have tried to address this limitation by fine\-tuning captioners with a self\-retrieval \(SR\) reward\. However, we find that SR fine\-tuning has a tendency to reduce caption faithfulness and even hallucinate\. In this work, we circumvent this bottleneck by improving the MLE initialization of the captioning system and designing a curriculum for the SR fine\-tuning process\. To this extent, we present \(1\) Visual Caption Boosting, a novel framework to instill fine\-grainedness in generic image captioning datasets while remaining anchored in human annotations; and \(2\) BagCurri, a carefully designed training curriculum that more optimally leverages the contrastive nature of the self\-retrieval reward\. Jointly, they enable the captioner to describe fine\-grained aspects in the image while preserving faithfulness to ground\-truth captions\. Our approach outperforms previous work by \+8\.9% on SR against 99 random distractors \(RD100\) \(Dessi et al\., 2023\); and \+7\.6% on ImageCoDe\. 

Additionally, existing metrics to evaluate captioning systems fail to reward diversity or evaluate a model's fine\-grained understanding ability\. Our third contribution addresses this by proposing self\-retrieval from the lens of evaluation\. We introduce TrueMatch, a benchmark comprising bags of highly similar images that uses SR to assess the captioner's ability to capture subtle visual distinctions\. We evaluate and compare several state\-of\-the\-art open\-source MLLMs on TrueMatch, and find that our SR approach outperforms them all by a significant margin \(e\.g\. \+4\.8% \- 7\.1% over Cambrian\) while having 1\-2 orders of magnitude fewer parameters\. We also outperform vanilla SR by \+14\.4% to \+19\.5%\.

## Steering Visual Generation in Unified Multimodal Models with Understanding Supervision

**Authors:** Zeyu Liu; Zanlin Ni; Yang Yue; Cheng Da; Huan Yang; Di ZHANG; Kun Gai; Gao Huang

**ID:** 155743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3K0MBUbZGh>) | [PDF](<https://openreview.net/pdf?id=3K0MBUbZGh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155743>)

Unified multimodal models are envisioned to bridge the gap between understanding and generation\.  Yet, to achieve competitive performance, state\-of\-the\-art models adopt largely decoupled understanding and generation components\. This design, while effective for individual tasks, weakens the connection required for mutual enhancement, leaving the potential synergy empirically uncertain\. We propose to explicitly restore this synergy by introducing \*\*\*Un\*\*derstanding\-\*\*O\*\*\}riented Post\-Training\* \(\*\*UNO\*\*\), a lightweight framework that treats understanding not only as a distinct task, but also a direct supervisory signal to steer generative representations\. By incorporating objectives that encode semantic abstraction \(captioning\) and structural details \(visual regression\), we enable effective gradient flow from understanding to generation\. Extensive experiments on image generation and editing demonstrate that understanding can serve as an effective catalyst for generation\.

## A Matched\-Budget Audit Framework for Recaptioned Image\-Text Supervision Distributions

**Authors:** Giyeong Oh; Junghun Park; Yuhan Bae; Youngjae Yu

**ID:** 139543 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JobgYHJvPo>) | [PDF](<https://openreview.net/pdf?id=JobgYHJvPo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139543>)

Recaptioned image\-text corpora are now standard for text\-to\-image \(T2I\) training, with VLM captioners replacing sparse alt\-text by dense descriptions\. Yet a recaptioned corpus is not only a collection of captions: it is a supervision distribution induced by a documented captioning policy \($ \\pi $\), captioner \($ V\_c $ \), and source corpus \($ C $\)\. Length\-correlated proxies miss caption\-register artifacts and downstream T2I benchmarks entangle the corpus with training choices, so this distribution is hard to audit at corpus scale\. We introduce a reusable matched\-budget audit framework for recaptioned supervision distributions $ D\_\{\\pi,V\_c,C\} $: at a fixed $ B = 64 $ lexical\-unit window it reports a five\-axis profile spanning prompt\-side coverage, image\-conditioned faithfulness, and caption\-surface health, with claimed controllable basic units \(CBU\) as the shared denominator\. We instantiate the framework on seven paired comparisons over five public source corpora\. Across the four cross\-corpus pairs, the released surface raises supported CBU per caption by \+3\.40 to \+6\.35 under both Qwen and Gemma Judges, and on CC12M the same framework exposes a long\-vs\-dense frontier that is consistent across both judges and four budgets\. We release the audited multi\-source recap corpus together with the audit\-artifact bundle\.

## Can 4D Foundation Models Remember?

**Authors:** Guangzhao He; Hadar Averbuch\-Elor; Wei\-Chiu Ma

**ID:** 139573 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hg58xidgpB>) | [PDF](<https://openreview.net/pdf?id=Hg58xidgpB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139573>)

Perceiving and remembering the visual world is fundamental to navigating and interacting with our environment\. Current 4D foundation models, such as camera\-controllable video models or 4D reconstruction models, can perceive and reconstruct dynamic environments, but how well they remember what they have perceived remains an open question\. Existing benchmarks largely rely on pixel\-level metrics and lack ground truth for objects once they leave the field of view, making them unable to evaluate visual memory in an object\-centric manner against references\. To fill this gap, we introduce PersistBench, a dataset and metric suite that leverages 360° videos as omniscient ground truth and proposes three evaluation aspects: object permanence, motion continuity, and appearance preservation\. Evaluating various models across diverse categories reveals that current models can only maintain short\-term consistency that degrades significantly once objects leave the field of view\. Our findings highlight the gap between current model capabilities and robust visual memory, providing guidance for future development of 4D foundation models\.

## PolyTopoBench: A Benchmark for Complex Vector Polygon Generation from Remote Sensing Imagery

**Authors:** Zeping Liu; Ni Lao; Weiwei Sun; Gil Wolff; Yiqun Xie; Liang Zhao; Junfeng Jiao; Gengchen Mai

**ID:** 139617 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F216P9bLhz>) | [PDF](<https://openreview.net/pdf?id=F216P9bLhz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139617>)

Vector polygon generation converts visual inputs, e\.g\., remote sensing \(RS\) images, into vectorized polygonal geometries, supporting applications such as autonomous driving, vector map construction, and remote sensing\. Early pipelines predict raster masks and post\-process them into polygons, which prevents end\-to\-end optimization and may miss small objects or introduce inaccurate vertices\. Recent methods directly generate vector polygons, but most focus on simple exterior contours, while they either cannot represent complex polygons with holes or fail to preserve their topology\. In this paper, we propose PolyTopoBench, a unified evaluation framework for vector polygon generation from RS images with explicit emphasis on complex polygons\. PolyTopoBench evaluates both exterior and interior rings, and benchmarks representative methods, including segmentation\-based polygonization pipelines, vision foundation model baselines, and specialized vector polygon generators, on two RS\-image datasets covering buildings, roads, vegetation, and unvegetated regions\. Experiments show that existing methods often recover simple exterior boundaries but degrade substantially on polygons with holes or multiple rings\. These results reveal complex polygon generation as an unresolved challenge and motivate topology\-aware benchmarks and model designs\.

## ECLIPSE: A Spacecraft Rendezvous Trajectories Dataset with Controlled In\-Orbit Lighting Conditions

**Authors:** Nidhal Eddine Chenni; Arunkumar Rathinam; Abid Ali; Djamila Aouada

**ID:** 139639 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dwc7cwaADG>) | [PDF](<https://openreview.net/pdf?id=Dwc7cwaADG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139639>)

Deep learning has become the dominant paradigm for vision\-based spacecraft pose estimation, where models are predominantly trained on synthetic data due to the prohibitive cost of acquiring real in\-orbit imagery\. When deployed, these models suffer significant performance degradation due to the sim\-to\-real domain gap, which existing benchmarks address by pairing synthetic training data with Hardware\-in\-the\-Loop \(HIL\) real imagery\. Yet a critical factor remains consistently overlooked: in real orbital scenarios, illumination varies with the spacecraft's position along its orbit, inducing severe appearance shifts that existing benchmarks neither control nor study\. We introduce ECLIPSE, the first benchmark designed to isolate illumination as an independent experimental variable\. ECLIPSE pairs a large\-scale photorealistic synthetic training set with a fully labeled HIL evaluation set of 14 approach trajectories, each replayed identically under 4 controlled lighting conditions, enabling rigorous evaluation of illumination\-robust and domain\-adaptation methods\. Through this controlled design, our experiments confirm that lighting is the dominant driver of the sim\-to\-real performance gap in spacecraft pose estimation\.

## VTBench: Disentangled and Human\-Aligned Evaluation for Image\-Based Virtual Try\-on

**Authors:** Donghao Luo; Yujie Liang; Caoshuo Li; Xiaobin Hu; Zuxuan Wu; Yanwei Fu

**ID:** 139643 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Don9L8oTcT>) | [PDF](<https://openreview.net/pdf?id=Don9L8oTcT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139643>)

While virtual try\-on has achieved significant progress, evaluating these models towards real\-world scenarios remains a challenge: unpaired metrics \(FID/KID\) miss task\-specific dimensions such as texture and consistency, and most test sets are limited to indoor scenarios\. To address these needs, we introduce the Virtual Try\-on Benchmark \(VTBench\), the first\-ever hierarchical try\-on benchmark suite that systematically decomposes virtual image try\-on into hierarchical, disentangled dimensions, each equipped with tailored test sets and evaluation criteria\. VTBench exhibits three key advantages: 1\) Multi\-Dimensional Evaluation Framework: The benchmark defines three top\-level dimensions \(General Image Quality, Garment Preservation, Auxiliary Consistency\) and six fine\-grained dimensions \(Distributional Fidelity, Aesthetics, Texture Fidelity, Cross\-Category Plausibility, Background Consistency, and Hand Consistency\)\. Granular evaluation metrics and targeted test sets pinpoint model capabilities and limitations across diverse, challenging scenarios\. 2\) Human Alignment: Human preference annotations are provided for the five image\-level dimensions, ensuring the benchmark's alignment with perceptual quality\. 3\) Valuable Insights: Beyond standard indoor settings, we analyze model performance variations across dimensions and investigate the disparity between indoor and real\-world try\-on scenarios\. To foster the field of virtual try\-on towards challenging real\-world scenarios, VTBench will be open\-sourced, including all datasets and evaluation algorithms\.

## LoopNav: Benchmarking Spatial Consistency in World Models

**Authors:** Kewei Lian; Shaofei Cai; Yitao Liang; Anji Liu

**ID:** 139665 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9a7hXTA3X>) | [PDF](<https://openreview.net/pdf?id=C9a7hXTA3X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139665>)

The ability to simulate the world in a spatially consistent manner is a crucial requirement for effective world models\. Such a model enables high\-quality visual generation, and also ensures the reliability of world models for downstream tasks such as simulation and planning\. It must not only retain long\-horizon observational information, but also enables the construction of explicit or implicit internal spatial representations\. However, existing datasets do not explicitly enforce spatial consistency constraints, limiting both the ability to systematically evaluate this capability and to learn it through data\-driven approaches\. Furthermore, most existing benchmarks primarily emphasize visual coherence or generation quality, neglecting the requirement of long\-range spatial consistency\. To bridge this gap, we propose loopnav, a dataset and corresponding benchmark centered on loop\-based navigation for evaluating spatial consistency\. The dataset comprises 250 hours \(20 million frames\) of loop\-based navigation videos with actions, collected from diverse locations in the open\-world environment of Minecraft\. We further introduce a Scene Graph Consistency Score to quantify spatial consistency while remaining invariant to pixel\-level variations\. Dataset, benchmark, and code are open\-sourced to support future research\.

## AgenticVBench: Can AI Agents Complete Real\-World Video Production Tasks?

**Authors:** Zongheng Cao; Yi Zheng; Xinyu Hu

**ID:** 139672 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BZpjhtRxCt>) | [PDF](<https://openreview.net/pdf?id=BZpjhtRxCt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139672>)

Video production workflows offer a rich and demanding testbed for evaluating multimodal AI agents: they require composite capabilities across text, image, audio, and video understanding, along with long\-horizon planning, and tool use\. To this end, we introduce AgenticVBench, a benchmark of 100 tasks across 4 task families spanning the real world post\-production workflow, constructed from the representative work of 20 industry experts averaging 6 years of experience across video production contexts\. Tasks are paired with evaluation specifications that combine programmatic verifiers and expert rubrics, both authored under expert protocol\. We evaluate frontier vision\-language models \(VLMs\) with vendor\-native and open\-source harnesses\. The best evaluated model achieves a score below 30\\%, substantially lower than frontier performance on existing multimodal benchmarks\. We further find that the choice of harness substantially affects model behavior, including but not limited to scores and failure modes\. AgenticVBench provides a foundation for understanding and improving both models and harnesses for agentic video production\.

## Bridging Image Restoration and Recognition via Causal Mediated Unrolling

**Authors:** Haowei Li; Qing Zhao; Yanze Li; ZhiChen Chen; Pengxu Wei; Dongyu Zhang; Liang Lin

**ID:** 153651 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JkqJjv4paC>) | [PDF](<https://openreview.net/pdf?id=JkqJjv4paC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153651>)

Robust visual recognition under degraded imaging conditions is critical for real\-world vision systems\.Task\-oriented image restoration addresses this problem by enhancing degraded inputs before recognition, but it must preserve natural visual appearance without disrupting the evidence used by downstream recognizers\.Existing optimization strategies struggle to satisfy these requirements simultaneously\.Restoration driven mainly by visual quality may weaken task\-critical cues or introduce texture shifts that are visually plausible but poorly matched to the recognizer\.Directly tuning restoration networks with recognition loss is also insufficient, as the restoration model may exploit recognizer\-specific shortcut cues and produce visually unnatural artifacts while improving task scores\.We propose Causal Mediated Unrolling \(CaMeU\), an optimization\-based framework for task\-oriented image restoration with frozen recognition models\.Starting from a joint optimization objective, the proposed framework derives a Half\-Quadratic Splitting formulation that separates restoration into alternating task\-driven and prior\-guided updates\.The task\-driven update introduces an explicit mediator for front\-door guided optimization, reducing shortcut bias induced by the recognizer\.The prior\-guided update performs manifold projection, pulling the intermediate result back toward the natural\-image manifold to preserve visual quality\.Through this mediated alternating process, the restored image is progressively optimized for both recognition performance and visual quality\.Experiments on VOC Haze, VOC Dark, and degraded CUB\-200\-2011 show that CaMeU consistently improves downstream recognition while reducing visual artifacts\.

## DegBins: Degradation\-Driven Binning for Depth Super\-Resolution

**Authors:** Zhiqiang Yan; Zhengxue Wang; Jian Yang; Gim Hee Lee

**ID:** 150704 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g8MvEzqyXx>) | [PDF](<https://openreview.net/pdf?id=g8MvEzqyXx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150704>)

Depth super\-resolution \(DSR\) aims to recover a high\-resolution \(HR\) depth map from its low\-resolution \(LR\) counterpart\. With color image guidance, this task is typically formulated as learning the residual between HR and LR in a low\-dimensional feature space\. However, this additive formulation is insufficient to accurately capture the complex relationship between HR and LR, especially under spatially varying degradations\. In this paper, we introduce \\textbf\{DegBins\}, a novel DSR framework that leverages degradation\-driven binning to adaptively enhance residual modeling\. Specifically, DegBins reformulates the regression\-based DSR as a hybrid classification\-regression problem, where the residual depth is represented as a linear combination of discrete depth bins weighted by their learned probability distribution, yielding more flexible and expressive representations\. Furthermore, DegBins models the degradation relationship between HR and LR in a high\-dimensional feature space, enabling adaptive bin range adjustment and probability optimization conditioned on local degradation characteristics\. To progressively improve reconstruction quality, DegBins adopts a multi\-stage refinement scheme, where each stage performs finer\-grained bin partitioning and probability updating based on the former estimation\. This coarse\-to\-fine design facilitates more accurate depth recovery, particularly in regions with severe degradations or complex structural variations\. Extensive experiments across five benchmarks demonstrate that DegBins consistently outperforms existing state\-of\-the\-art methods in terms of accuracy, robustness, and generalization\.

## Graph\-Enhanced Attribute\-Aware Modeling for Cloth\-Changing Person Re\-Identification

**Authors:** Yongkang Ding; Zi Ye; Tiantian Gong; Liyan Zhang

**ID:** 153351 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M1KLuYhtBQ>) | [PDF](<https://openreview.net/pdf?id=M1KLuYhtBQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153351>)

Cloth\-changing person re\-identification aims to retrieve images of the same person across cameras when clothing may vary over time\. Unlike conventional Re\-ID, appearance cues such as clothing color and texture become highly unreliable in cloth\-changing scenarios\. Existing methods either rely on auxiliary clothing\-invariant biometric cues that may introduce estimation noise, or model attribute semantics as isolated labels, making it difficult to simultaneously achieve robustness to attribute noise and fine\-grained visual\-\-semantic interaction\. To address these issues, we propose a Graph\-Enhanced Attribute\-Aware Modeling framework, termed GEAM\. Specifically, we first preprocess the attribute representation to explicitly suppress clothing\-related semantics\. We then introduce an adaptive attribute graph to model the latent dependencies among identity\-related attributes, thereby alleviating the interference caused by attribute prediction errors\. Based on the refined attribute representation, we further map the enhanced attribute semantics into compact semantic tokens and inject them into the visual backbone in a hierarchical manner, enabling local visual features to adaptively absorb identity\-relevant yet clothing\-irrelevant discriminative cues\. This design effectively improves robustness to cloth\-changing scenarios while preserving the stability of pretrained visual representations as much as possible\. Extensive experiments on multiple mainstream CC\-ReID benchmarks demonstrate that GEAM consistently outperforms a variety of state\-of\-the\-art methods under the challenging clothes\-changing setting\. The source code and pretrained weights will be publicly released on GitHub\.

## Neural Refraction Fields for Image Verification

**Authors:** Sage Simhon; Jingwei Ma; Prafull Sharma; Lucy Chai; Yen\-Chen Lin; Phillip Isola

**ID:** 150170 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9nUHL1sDu>) | [PDF](<https://openreview.net/pdf?id=k9nUHL1sDu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150170>)

Image verification is an increasingly critical need as the capabilities for visual media tampering improve\. We present an approach to image verification that embeds a private authenticity signature into an image based on physical refractive objects, which transform the image\. To verify a protected image, we compare the image and a pixel\-aligned reconstruction from the embedding to identify inconsistencies\. Our approach is inspired by prior work, which physically places refractive objects in a scene before taking a photo\. However, prior work is limited to simple refractions with analytical formulas and requires a slow per\-scene neural radiance field optimization to get a reconstruction\. Instead, our method trains a compact, scene\-agnostic neural refraction field capable of modeling complex and more secure refractive geometries\. Once trained, it enables instant, high\-fidelity reconstruction for manipulation detection and localization\.

## Dynamic Causal Structure Discovery for Autoregressive Visual Generation

**Authors:** Songliang Guo; Qi Yan; Jianzhou Wang; Xinfu Liu; Cheng Zhen; Yirui Wu; Lixin Yuan; Wenxiao Zhang; Jun Liu

**ID:** 154443 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DWFojJ4tLc>) | [PDF](<https://openreview.net/pdf?id=DWFojJ4tLc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154443>)

Autoregressive \(AR\) models achieve strong performance in visual generation, yet their prefix\-based factorization imposes a rigid one\-dimensional dependency structure\. We show that this structure is fundamentally suboptimal: any predefined ordering necessarily induces a trade\-off between contextual sufficiency and necessity, resulting in both missing and redundant dependencies\. To address this limitation, we propose Dynamic Causal Structure Discovery, an inference\-time framework that replaces static conditioning with dynamic, content\-dependent causal parent sets\. By interpreting the Transformer as a causal graph, we reformulate generation as the problem of constructing a minimal parent set for each token\.  To make this objective tractable, we approximate $\\mathrm\{do\}$\-interventions as vector\-space ablations and derive a Fisher\-based criterion that characterizes and corrects structural deviations during decoding\. Our framework transforms AR factorization into an order\-agnostic dependency structure, yielding improved generation quality and global coherence without retraining\.

## Predicting Species Splits: A Challenging Fine\-Grained Benchmark for Category Discovery

**Authors:** Christian Lange; Joakim Bruslund Haurum; Bingchen Zhao; Oisin Mac Aodha

**ID:** 139811 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=38h1p7GCKa>) | [PDF](<https://openreview.net/pdf?id=38h1p7GCKa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139811>)

Widely used category discovery benchmarks have become increasingly saturated and often fail to reflect real\-world discovery settings, making long\-term evaluation of new methods difficult\. We introduce \\textbf\{PS\-SPLIT\}, a large\-scale fine\-grained benchmark for category discovery, motivated by taxonomic splitting: the real\-world process by which what was once considered a single species is found to comprise multiple distinct ones\. PS\-SPLIT contains 79K globally distributed, high\-quality, community\-collected bird images spanning 771 species, derived from 257 recent real taxonomic splits, with associated geographic metadata and full taxonomic hierarchy\. With categories arising from real taxonomic splits, visual differences can be very subtle, often requiring significant human expertise to tell apart, making PS\-SPLIT a challenging benchmark which we hope will assist long term in fine\-grained category discovery research\. Based on taxonomic splitting, we introduce the task of \\textbf\{discovery by category splitting\}, where the goal is to determine which known categories should be subdivided into finer\-grained subcategories\. We adapt four generalized category discovery methods to this setting and show that there is substantial room for future progress\.

## Exploring Multi\-Order Self\-Similarity for Motion Understanding

**Authors:** Manjin Kim; Heeseung Kwon; Karteek Alahari; Minsu Cho

**ID:** 153018 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ObEzynFfiu>) | [PDF](<https://openreview.net/pdf?id=ObEzynFfiu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153018>)

Space\-time self\-similarity \(STSS\), which captures visual correspondences across frames, provides an effective way to represent temporal dynamics for video understanding\.In this work, we explore higher\-order STSS and demonstrate how STSSs at different orders reveal distinct aspects of these dynamics\. We then introduce the Multi\-Order Self\-Similarity \(MOSS\) module, a lightweight neural module designed to learn and integrate multi\-order STSS features\. It can be applied to a wide range of motion\-centric tasks with only marginal computational cost and memory overhead\. Extensive experiments on video action recognition, motion\-centric video VQA, and robotic tasks consistently demonstrate substantial improvements, validating the broad applicability of MOSS as a general motion modeling module\. The source code and checkpoints will be publicly available\.

## Position: Next\-Generation Game Engines Should Be Built on Interactive Generative Video

**Authors:** Jiwen Yu; Yiran Qin; Haoxuan Che; Quande Liu; Xintao Wang; Pengfei Wan; Di ZHANG; Xihui Liu

**ID:** 140058 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VxQbci6P05>) | [PDF](<https://openreview.net/pdf?id=VxQbci6P05>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140058>)

Modern game development faces significant challenges in creativity and cost due to predetermined content in traditional game engines\. Recent breakthroughs in video generation models, capable of synthesizing realistic and interactive virtual environments, present an opportunity to revolutionize game creation\. This position paper argues that next\-generation game engines should be built on Interactive Generative Video \(IGV\)\. We term such engines Generative Game Engines \(GGE\), with IGV as the core technology enabling unlimited novel content generation\. We argue why IGV is uniquely suited for this role, identify what is missing, and examine progress across six functional modules to show how each supports our position, culminating in a five\-level maturity roadmap \(L0\-\-L4\)\. Drawing on discussions with researchers, game developers, and community participants, we present eight alternative views and ethical considerations to stimulate debate\.

## DIBench: Benchmarking Decision Integrity of GUI\-based Mobile Agents Under Deceptive Injections

**Authors:** Li Hu; KANGHUA MO; Yingbin Jin; Qingqing Ye; Haibo Hu

**ID:** 139390 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TLLDufyhSM>) | [PDF](<https://openreview.net/pdf?id=TLLDufyhSM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139390>)

As GUI\-based mobile agents rapidly progress, rigorous safety evaluation of their autonomous decision\-making in realistic app interfaces becomes increasingly critical\. Existing benchmarks mainly focus on execution\-level anomalies using task success or hijack rates, but fail to capture the \*in\-task goal deviation\* risk in multi\-candidate selection tasks, where the decision may be steered toward an attacker\-specified target, even in violation of instruction\-implied constraints \(e\.g\., cheapest/highest\-rated\), without any overt execution anomalies\. We present \*\*DIBench\*\*, a \*decision integrity\* benchmark for measuring this risk in mobile agents\. DIBench covers 7 commercial and 3 simulated apps with 5 task types\. Under a threat model restricted to non\-privileged UI content, we construct 8 deceptive injection probe instantiations that can steer critical selections without overt anomalies\. The benchmark includes 1,000 clean and 36,672 injected instances, with a unified protocol and integrity metrics for comparison\. Experiments spanning 4 agent frameworks and 7 base models show that completion\-based evaluation can overestimate agent trustworthiness and miss decision\-integrity risks: deceptive injections steer selections and shift early action policies, inflating completion rates and creating a misleading illusion of safety\. Common defenses, including detection, image preprocessing, and prompt reminders, yield inconsistent integrity gains\. Overall, DIBench provides a unified, reproducible benchmark to quantify the risk of in\-task goal deviation in mobile agents and enable comparable evaluations of safety defenses\. Code is available at: \[https://anonymous\.4open\.science/r/DIBench\-5432\]\(https://anonymous\.4open\.science/r/DIBench\-5432\)\.

## Test\-Time Prompt\-Agnostic Decomposition

**Authors:** Junze Wang; Lei Fan; Dezheng Zhang; Donglin Di; Yang Song; Sidong Liu; Cong Cong

**ID:** 151200 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cDRO2AY7N6>) | [PDF](<https://openreview.net/pdf?id=cDRO2AY7N6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151200>)

Test\-Time Prompt Tuning \(TPT\) adapts large pretrained models to unseen target distribution shifts by updating only lightweight prompt tokens\. Existing TPT methods are effective, but they mainly optimize each prompt update locally\. Across test\-time steps, prompts updated at the current step are reused for later predictions and further updates, so noisy or biased unlabeled objectives can accumulate and destabilize the prompt\-update trajectory\. We identify two failure modes: magnitude expansion, where updates move the prompt too far, and directional drift, where consecutive updates point in inconsistent directions\. To analyze and control these failures, we propose Test\-Time Prompt\-Agnostic Decomposition \($\\mathtt\{TPD\}$\), which characterizes observed prompt\-update trajectories from a dynamical\-systems view and decomposes base prompt updates into magnitude and direction\. $\\mathtt\{TPD\}$ computes a spectral radius to measure update expansion and decomposes update directions into persistent, oscillatory, and residual components\. Building on this decomposition, Adaptive Koopman Control \($\\mathtt\{AKC\}$\) regulates update magnitude by shrinking updates under expansive recent dynamics, while Hankel Update Router \($\\mathtt\{HUR\}$\) refines update direction by preserving persistent components and suppressing oscillatory and residual components\. Together, $\\mathtt\{AKC\}$ and $\\mathtt\{HUR\}$ produce a stabilized prompt update\. As a prompt\-agnostic framework, $\\mathtt\{TPD\}$ can be plugged into visual and text TPT methods without modifying the backbone, prompt architecture, or adaptation loss\. Experiments on 15 datasets show that $\\mathtt\{TPD\}$ consistently improves 10 baselines, with accuracy gains of 3\-8\\% for visual prompts and over 2\\% for text prompts\.

## VLMs Trace Without Tracking: Diagnosing Failures in Visual Path Following

**Authors:** Hyesoo Hong; Min S Kim; Wonje Jeung; Yoon Sangyeon; Dongjae Jeon; Albert No

**ID:** 150642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gYPnYOVpLT>) | [PDF](<https://openreview.net/pdf?id=gYPnYOVpLT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150642>)

Vision\-language models \(VLMs\) achieve strong performance on multimodal benchmarks, but may still lack robust control over basic visual operations\. We study \\textit\{line tracing\}, where a model must follow a selected visual path through successive local continuations\. To isolate this ability, we design controlled tracing tasks that introduce nearby competitors while reducing semantic and topological ambiguity such as crossings and overlaps\. Across these tasks, even state\-of\-the\-art VLMs frequently lose the target path and switch to nearby alternatives, especially when those alternatives look locally similar to the target\. Behavioral interventions and internal analyses indicate that these failures arise from local competition: nearby similar distractors pull the model away from the true continuation\. Standard remedies do not remove this bottleneck: model\-size scaling provides only limited gains, reasoning partially compensates through costly substitute strategies, and explicit tracing instructions fail to recover stable path following\. Finally, tests on tangled\-cable scenes and metro maps with richer visual complexity show that the same path\-switching failure persists beyond our controlled settings\.

## SAGE: Semantic\-Agnostic Image Embedding for Generalized AI\-Generated Image Detection

**Authors:** Seongho Kim; Jaehyun Choi; Dahye Kim; Sungwon Yi; Jang Ho Choi

**ID:** 149194 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sCLdMcBvzN>) | [PDF](<https://openreview.net/pdf?id=sCLdMcBvzN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149194>)

AI\-generated image detection has become an important problem in media forensics as modern generative models produce increasingly realistic images\. Recent CLIP\-based detectors show strong generalization ability, but CLIP image features entangle semantic content with forensic cues\. Since semantic content is not an intrinsic generation trace, relying on it can introduce semantic shortcuts and unstable performance under unseen generator shifts\. In this paper, we propose SAGE, a Semantic\-Agnostic Image Embedding framework for generalized AI\-generated image detection\. SAGE constructs paired triplets of COCO images, SDXL\-reconstructed images, and COCO captions so that real and fake images share the same caption\-level semantics\. It then suppresses semantic information by suppressing the semantic direction provided by CLIP text embeddings from CLIP image embeddings\. To enable caption\-free inference, SAGE learns a semantic anchor that approximates the role of paired text embeddings at test time\. In addition, SAGE adopts a SoftTriple\-style sub\-center classifier to model intra\-class variation in real and fake images, yielding a more stable authentication geometry across diverse generators\. Experiments on CommunityForensics demonstrate that SAGE achieves competitive detection performance while substantially reducing generator\-wise performance variation\. Further analyses show that SAGE effectively reduces semantic dependence and forms a clearer real/fake feature geometry than strong baselines\.

## Stability\-Weighted Direction Regularization Disentangles Generator Shortcuts from Detection Signal

**Authors:** Jang Ho Choi; Seongho Kim; Jaehyun Choi; Dahye Kim; Sungwon Yi; Eunho Yang

**ID:** 155837 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2VpqRkpXM9>) | [PDF](<https://openreview.net/pdf?id=2VpqRkpXM9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155837>)

AI\-generated image detectors often generalize poorly to unseen generators because the classifier latches onto generator\-specific feature directions that are predictive only on the training set\. We show that simply projecting away generator\-discriminative LDA directions fails: these directions also carry genuine real\-vs\-fake signal, so post\-hoc erasure removes evidence along with shortcuts\. We introduce StaR, a training\-time regularizer that scores each LDA direction by leave\-one\-generator\-out stability and penalizes the classifier only on unstable directions; stable directions are left available for classification\. On ResNet\-50, StaR reduces the across\-seed standard deviation of the four\-OOD average AUC by 24x relative to ERM \(F\-significant on every OOD\) while preserving in\-distribution\-like performance; on CLIP ViT\-L/14, StaR improves the four\-OOD average AUC by 1\.7 points over matched CLIP\-ERM and 4\.5 over EFFORT, with the largest gains on platform\-shift benchmarks\. Mechanistic analyses show that StaR rotates the classifier away from unstable generator directions while amplifying generator\-discriminative structure in the features\-\-\-a rotational, not erasive, effect that post\-hoc projection cannot reproduce\. We additionally find that the conventional \`\`argmax in\-domain validation'' epoch\-selection rule is sub\-optimal: a deployable \`\`stop at first in\-domain 0\.99'' rule beats it by sim0\.7 AUC points on average\.

## RIFLE: Removal of Image Flicker\-Banding via Latent Diffusion Enhancement

**Authors:** Libo Zhu; Zihan Zhou; Xiaoyang Liu; Zhiyi Zhou; Weihang Zhang; Keyu Shi; Yifan Fu; Yulun Zhang

**ID:** 154640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C6YQkpxLpr>) | [PDF](<https://openreview.net/pdf?id=C6YQkpxLpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154640>)

Capturing screens is common, but photos of emissive displays are often influenced by \\emph\{flicker\-banding\} \(FB\), some alternating bright\-\-dark stripes due to temporal aliasing between a camera's rolling\-shutter readout and display's brightness modulation\. Unlike moir\\'e degradation, FB remains underexplored despite its frequent and severe impact on readability and perceived quality\. We formulate FB removal as a dedicated restoration task and introduce Removal of Image Flicker\-B\}anding via Latent Diffusion Enhancement, RIFLE, a diffusion\-based framework designed to remove FB with fine details\. We propose Banding\-Suppressed High\-Frequency Prior \(BSHP\), which combines gradient\-based high\-frequency localization with a smooth structural support map to build a compact restoration prior, and injects it into the restoration backbone via multi\-stage FiLM modulation\. Moreover, Masked Loss \(ML\) is proposed to concentrate supervision on banded regions without sacrificing global fidelity\. To overcome data scarcity, we provide a simulation pipeline synthesizing FB in the luminance domain with stochastic jitter in banding angle, spacing, and width\. Feathered boundaries and sensor noise are also applied for a more realistic simulation\. For evaluation, we collect a paired real\-world FB dataset with pixel\-aligned banding\-free references captured via long exposure\. Across quantitative metrics and visual comparisons on our real\-world dataset, RIFLE consistently outperforms recent image reconstruction baselines\. To the best of our knowledge, it is the first work to research the simulation and removal of FB\. Our dataset and code will be released soon\.

## CA\-Judge: Teach Large Models to Judge Anomalies via Comparison for Video Anomaly Detection

**Authors:** He Huang; Zixuan Hu; Dongxiao Li; Zhaoyi Li; LINGYU DUAN

**ID:** 153516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Km1kogguK0>) | [PDF](<https://openreview.net/pdf?id=Km1kogguK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153516>)

Video anomaly detection \(VAD\) is critical for identifying safety risks in surveillance and autonomous systems\. Recent large\-model\-based VAD methods generate textual rationales and directly output anomaly scores\. However, mapping rich semantic descriptions and analysis directly to absolute scalar scores can be poorly grounded and inconsistent, leading to scores that are not well aligned with anomaly severity\. With the observation that for humans, it is usually easier to compare things than to rate things directly, we explore whether it also holds for large models in VAD by proposing \\textbf\{CA\-Judge\} \(\\textbf\{C\}omparative \\textbf\{A\}nomaly \\textbf\{Judge\}\), a training\-free framework that replaces direct scoring with comparative order inference\. CA\-Judge treats model\-perceived anomaly severity as a latent coordinate, constructs this coordinate from self\-comparisons among generated normal/anomalous reference events, and models how anomaly likelihood varies along this coordinate using the generated normal/anomalous reference identities\. At test time, CA\-Judge avoids exhaustive comparison by maintaining a posterior belief over query severity and selecting a few query\-\-reference comparisons by their expected information about the anomaly status\. The resulting comparison trace is aggregated under a Bradley\-\-Terry likelihood and read out through the learned severity\-\-anomaly association to produce the anomaly probability\. Without fine\-tuning or training data, CA\-Judge substantially improves over direct\-scoring baselines and surpasses prior training\-free state\-of\-the\-art methods on UCF\-Crime and XD\-Violence\.

## SEEK\-VAU: Towards Evidence\-Faithful Video Anomaly Understanding via Agentic Search

**Authors:** MINGHE WANG; Weijun Zeng; Dapeng Luo; Xinyue Wang; Nong Sang

**ID:** 152176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UzdlnV0B2v>) | [PDF](<https://openreview.net/pdf?id=UzdlnV0B2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152176>)

Most video anomaly understanding \(VAU\) systems still infer anomaly judgments from evidence collected in a feed\-forward way under predefined rules, typically sampled frames, or events clustered from such frames\. This protocol fails when the collected evidence is incomplete under imperfect predefined rules, because once reasoning begins the model can no longer search for the missing evidence\. We address this limitation with SEEK\-VAU, which reframes VAU as an agentic search\-and\-verify interaction protocol under a bounded search budget: instead of passively reasoning over pre\-collected evidence, the policy actively gathers evidence across the three stages of an anomaly event chain \(precursor, trigger, and aftermath\) and verifies its sufficiency before finalization, turning event\-chain completeness into an explicit design rather than an outcome of predefined rules\. Although search\-and\-verify spans multiple interaction turns, the bounded search budget caps both the per\-turn input tokens and the cumulative visual context, keeping inference efficient\. To make this behavior learnable, we introduce evidence\-faithful counterfactual verification \(EFCV\), which rewards selected evidence that remains supportive, compact, and necessary under counterfactual verification\. We further introduce SEEK\-Bench, featuring video\-level episodes with temporal interval annotations, semantic QA and event\-chain stage labels\. Together, SEEK\-VAU and SEEK\-Bench establish a strong foundation for evidence\-faithful and actively verifiable VAU\. The code and data will be released\.

## Q\-ARVD: Quantizing Autoregressive Video Diffusion Models

**Authors:** Siao Tang; Xinyin Ma; Gongfan Fang; Xingyi Yang; Xinchao Wang

**ID:** 152660 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RMJiMyWid7>) | [PDF](<https://openreview.net/pdf?id=RMJiMyWid7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152660>)

Autoregressive video diffusion models \(ARVDs\) have emerged as a promising architecture for streaming video generation, paving the way for real\-time interactive video generation and world modeling\. Despite their potential, the substantial inference cost of ARVDs remains a major obstacle to practical deployment, making model quantization a natural direction for improving efficiency\. However, quantization for ARVDs remains largely unexplored\. Our empirical analysis shows that directly applying existing quantization schemes developed for standard diffusion transformers to ARVDs leads to suboptimal performance, revealing quantization behaviors that differ from those observed in bidirectional diffusion models\. In this paper, we identify two critical challenges in quantizing ARVDs: \(C1\) Highly unbalanced frame\-wise quantization sensitivity\. Error accumulation during autoregressive generation can induce severely skewed quantization sensitivity across frames, following an exponential\-like decay pattern\. \(C2\) Prominent and heterogeneous outlier patterns in weights\. Weight distributions exhibit pronounced outlier channels, whose patterns vary substantially across layer types and block depths\. To address these issues, we propose Q\-ARVD, a novel framework for accurate ARVD quantization\. \(S1\) To tackle the highly unbalanced frame\-wise sensitivity, Q\-ARVD incorporates a final\-quality aware frame\-weighting mechanism into the quantization objective\. \(S2\) To prevent heterogeneous outliers from degrading performance, Q\-ARVD introduces an outlier\-aware adaptive dual\-scale quantization, which automatically detects the presence and quantity of outlier channels for an arbitrary layer, and isolates them to protect normal channels\. Extensive experiments on state\-of\-the\-art open\-source ARVDs \(i\.e\., self\-forcing and causal\-forcing\) demonstrate the superiority of Q\-ARVD\. Practical deployment of INT8 model shows 1\.30x speedup and 1\.97x model size reduction\.

## SIGMA: Semantic\-Difference Instruction\-Grounding Mask Annotator for Text\-Driven Image Manipulation Localization

**Authors:** Peiyu Zhuang; Jianquan Yang; Haodong Li; Zhuoying Cai; Ruitao Xie; Jishen Zeng; Baoying Chen; Jiwu Huang; XIAOCHUN CAO

**ID:** 151764 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YE3wLDLd1p>) | [PDF](<https://openreview.net/pdf?id=YE3wLDLd1p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151764>)

Text\-driven image editing has advanced rapidly, but reliably localizing these manipulations requires image manipulation localization \(IML\) models trained on large pixel\-annotated datasets, and there is still no low\-cost way to obtain such training data at scale\. We observe that these data already exist in disguise: public editing datasets contain millions of structurally identical $\\textit\{\(original, edited\)\}$ pairs to IML training samples, lacking only pixel\-level masks\. Recovering these masks automatically is non\-trivial: pixel differencing is overwhelmed by diffusion\-induced perturbations across all pixels, and instruction\-only grounding localizes only what the prompt describes, missing unintended editor side\-effects\. We propose $\\textbf\{SIGMA\}$ \($\\textbf\{S\}$emantic\-difference $\\textbf\{I\}$nstruction\-$\\textbf\{G\}$rounding $\\textbf\{M\}$ask $\\textbf\{A\}$nnotator\), which performs semantic\-feature differencing in a vision foundation backbone and injects an instruction\-derived spatial prior into this visual stream via bidirectional cross\-modal refinement, amplifying the difference signal at intended\-edit regions when the editor faithfully realizes user intent\. SIGMA is trained in two complementary stages: Stage I supervises on inpainting masks; Stage II closes the diffusion\-domain shift via VAE\-roundtrip noise calibration, EMA self\-training, and an edit\-noise disentanglement loss\. SIGMA outperforms existing automatic mask generators on five benchmarks \($\\textbf\{\+12\.20\\%\}$ F1, $\\textbf\{\+11\.16\\%\}$ IoU\)\. When applied to public editing corpora, it produces a $\\sim$1\.1M IML training set that improves six diverse detectors by $\\textbf\{\+18\.34\\%\}$ F1 across five datasets, turning previously unused editing data into a model\-agnostic supervisory resource for IML\. For reproducibility, our anonymized code is available at https://anonymous\.4open\.science/r/SIGMA\-14FE\.

## SOAR: Regression\-based LiDAR Relocalization for UAVs

**Authors:** Hengyu Mu; Jianshi Wu; Yuxin Guo; XianLian Lin; Qingyong Hu; Sheng Ao; Chenglu Wen; Cheng Wang

**ID:** 151153 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cdxdVJjpkZ>) | [PDF](<https://openreview.net/pdf?id=cdxdVJjpkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151153>)

Regression\-based LiDAR relocalization has recently emerged as a promising solution for high\-precision positioning in GNSS\-denied environments\. However, these methods are primarily tailored to autonomous driving, exhibiting significantly degraded accuracy in unmanned aerial vehicle \(UAV\) scenarios due to arbitrary pose variations and irregular flight paths\. In this paper, we propose SOAR, a regression\-based LiDAR relocalization framework for UAVs\. Specifically, we introduce a locality\-preserving sliding window attention module with locally invariant positional encoding to capture discriminative geometric structures robust to viewpoint changes\. A coordinate\-independent feature initialization module is further designed to eliminate sensitivity to global transformations\. Furthermore, most existing UAV datasets are limited to evaluate LiDAR relocalization in real\-world, due to the lack of synchronized LiDAR scans, accurate 6\-DoF poses, or multiple traversals\. Thus, we construct a large\-scale UAV LiDAR localization dataset with 4 scenes and 13 irregular paths exhibiting rotation and altitude variations, providing a more realistic benchmark for UAVs\. Extensive experiments demonstrate that our method achieves state\-of\-the\-art performance, improving the localization success rate by 40\\% and reducing mean error over 10m on UAVLoc\. Our code and dataset will be released soon, and the dataset demo is available via the anonymous link\.

## Repurposing Video Diffusion Transformers for Cross\-View Temporal Object Correspondence

**Authors:** Siyoon Jin; Dahyun Chung; Honggyu An; Sangbeom Lim; Wonjin Nam; Jaewoo Jung; WonJun Moon; Seungryong Kim

**ID:** 155763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=362kWB8SSp>) | [PDF](<https://openreview.net/pdf?id=362kWB8SSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155763>)

Cross\-view object correspondence identifies the same object across views\.      However, existing methods treat this as a frame\-level matching problem, necessitating a query mask at every frame\.      Furthermore, without modeling temporal context, they suffer from severe ambiguity under appearance changes or occlusions\.     Therefore, we introduce cross\-view temporal object correspondence, which requires preserving object identity across both views and time from a query mask\.      To address this, we propose Track, a streamlined framework which repurposes a pretrained video DiT with semantic and spatiotemporal priors for RGB\-to\-mask latent transport, jointly modeling cross\-view matching and temporal tracking\.     However, naive video DiTs do not guarantee accurate cross\-view grounding and often attend to semantically similar yet incorrect objects across views\.      Thus, we introduce focal cross\-view attention alignment, hard negative conditioning, and local context crop strategies to ensure reliable grounding\.      Finally, beyond these architectural enhancements, we also tackle the lack of dense annotation by introducing a pseudo\-label curation pipeline that converts sparse Ego\-Exo4D annotations into dense supervision to enable effective video\-level training\.     Our highly competitive performances validate the effectiveness of Track as a streamlined framework, ensuring robust temporal consistency and identity preservation\.     Code and weights will be released\.

## CaC: Advancing Video Reward Models via Hierarchical Spatiotemporal Concentrating

**Authors:** Jiyuan Wang; Huan Ouyang; Chunyu Lin; Dewen Fan; Boheng Zhang; Tingting Gao; Fan Yang; Jia Sun; Zijun Li; Yongrui Heng; Huaiqing Wang; Zhenlong Yuan; Yiyang Fan; Honglie Wang; Fei Zuo; Haonan fan; Jiuzhou Lin; Guosheng Lin

**ID:** 153622 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K18iJJE8cU>) | [PDF](<https://openreview.net/pdf?id=K18iJJE8cU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153622>)

Recently, video generation models have achieved remarkable progress in global visual fidelity\. However, when synthesizing complex dynamic content, they frequently produce \*\*sparse subtle anomalies\*\*\. Existing video reward models primarily emphasize overall visual quality and text alignment; yet as generation quality improves, these coarse\-grained defects become less frequent, while the sparse structural, temporal, and physical anomalies become an increasingly important bottleneck\. Therefore, in this paper, we propose Concentrate and Concentrate \(CaC\), a coarse\-to\-fine anomaly reward model based on Vision\-Language Models\. During inference, it first conducts a global temporal scan to anchor anomalous time windows, then performs fine\-grained spatial grounding within the localized interval, and finally derives robust judgments via structured spatiotemporal Chain\-of\-Thought reasoning\.  To equip the model with these capabilities, we construct the first large\-scale generated video anomaly dataset with per\-frame bounding\-box annotations, temporal anomaly windows, and fine\-grained attribution labels\. Building on this dataset, we design a three\-stage progressive training paradigm\. The model initially learns spatial and temporal anchoring through single\- and multi\-frame supervised fine\-tuning, and then is optimized by a reinforcement learning strategy based on two\-turn Group Relative Policy Optimization \(GRPO\)\.  Beyond conventional accuracy rewards, we introduce Temporal and Spatial IoU rewards to supervise the intermediate localization process, effectively guiding the model toward more grounded and interpretable spatiotemporal reasoning\.  Extensive experiments demonstrate that CaC can stably \`\`concentrate'' on subtle anomalies, achieving a 25\.7\\% accuracy improvement on fine\-grained anomaly benchmarks and, when used as a reward signal, CaC reduces generated\-video anomalies by 11\.7\\% while improving overall video quality\.

## NSARM: Next\-Scale Autoregressive Modeling for Robust Real\-World Image Super\-Resolution

**Authors:** Xiangtao Kong; Rongyuan Wu; Shuaizheng Liu; Lingchen Sun; Lei Zhang

**ID:** 153669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Je4yvolgRa>) | [PDF](<https://openreview.net/pdf?id=Je4yvolgRa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153669>)

Most recent real\-world image super\-resolution \(Real\-ISR\) methods employ pre\-trained text\-to\-image \(T2I\) diffusion models to synthesize the high\-quality image either from random Gaussian noise or directly from the input low\-quality image\. These approaches train ControlNet or LoRA modules while keeping the pre\-trained model fixed, which often introduces over\-enhanced artifacts and hallucinations, suffering from limited robustness to inputs with varying degradations\. Recent visual autoregressive \(AR\) models, such as pre\-trained Infinity, can provide strong T2I generation capabilities while offering superior efficiency by using the bitwise next\-scale prediction strategy\. Building upon next\-scale prediction, we introduce a robust Real\-ISR framework with a generation pathway control mechanism, namely Next\-Scale Autoregressive Modeling \(NSARM\)\. Specifically, we train NSARM in two stages: a transformation network is first trained to map the input low\-quality image to preliminary scales, followed by an end\-to\-end full\-model fine\-tuning\. Such a comprehensive fine\-tuning enhances the robustness of NSARM in Real\-ISR tasks without compromising its generative capability\. Extensive quantitative and qualitative evaluations demonstrate that as a pure AR model, NSARM achieves superior visual results over existing Real\-ISR methods, with fast inference speed and comparable fidelity\. Most importantly, it demonstrates much higher robustness to varying input quality, showing stronger generalization performance\.

## Complex Schrödinger Bridges

**Authors:** Dong\-Sig Han; Tolga Birdal

**ID:** 153202 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N4hE0Zplt1>) | [PDF](<https://openreview.net/pdf?id=N4hE0Zplt1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153202>)

Diffusion bridges have emerged as versatile diffusion\-based frameworks for facilitating transformations between arbitrary data distributions\. However, these approaches are hindered by the immensity of the optimization space without consideration of underlying high\-order structures\. This paper explores a complex\-valued variant of diffusion bridges for solving physical problems using conformal field theory and mean field games\. To this end, we propose a new class of dynamical diffusion bridges, called complex Schr\\"odinger Bridges \(CSB\), whose derived algorithms are able to handle diffusion\-based tasks using Hamiltonian\-based geometric prior\. Additionally, we propose image\-to\-image CSB \(I$^2$CSB\), tractable diffusion bridge techniques with a spiral analytic posterior\. We verify our theoretical claims and practicality of our Hamiltonian based approach with a wide range of experiments\.

## VideoOdyssey: A Benchmark for Ultra\-Long\-Context and Omni\-Modal Video Understanding

**Authors:** He Haichen; Jiayi Zhou; Sifeng SHANG; Yihan Hu; Yuanhan Zhang; Kaiyang Zhou

**ID:** 139576 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HIUX5RHWKs>) | [PDF](<https://openreview.net/pdf?id=HIUX5RHWKs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139576>)

Real\-world long video understanding requires models to perform continuous tracking, information integration and memory retention over massive temporal spans within extreme video durations\.  Mastering this intense cognitive load constitutes the fundamental bottleneck in long video understanding\. While existing benchmarks have driven progress by scaling up video duration, their evaluation tasks often require comprehending only short and isolated video segments, falling short of capturing the challenge of ultra\-long\-context reasoning\. To measure this cognitive load, we emphasize continuous certificate length, defined as the video length a human must continuously watch to definitively answer a given question\. Driven by this metric, we introduce VideoOdyssey, a benchmark specifically designed for ultra\-long\-context and omni\-modal video understanding\. VideoOdyssey is characterized by three key features: 1\) Extreme video duration and diversity: spanning 11 domains and 54 subcategories with an average video duration of 109 minutes; 2\) Comprehensive evaluation scenarios: offering two subsets to address different research focuses, i\.e\., VideoOdyssey\-V for probing the limits of visual understanding in MLLMs, and VideoOdyssey\-AV for evaluating synchronized audio\-visual understanding for omni\-modal models; 3\) Ultra\-long and multi\-level continuous certificates: extending the average continuous certificate to 16 minutes for VideoOdyssey\-V and 12\.8 minutes for VideoOdyssey\-AV\. Crucially, we design 5 granular levels from seconds to hours, providing a comprehensive diagnostic tool to evaluate models across varying context lengths and cognitive loads\. Extensive evaluations show that bottlenecks of current MLLMs extend beyond simple retrieval to include struggles with continuous reasoning across varying context lengths, fine\-grained perception, and non\-verbal omni\-modal understanding\. We hope VideoOdyssey will spur the development of next\-generation MLLMs toward genuine real\-world video understanding\.

## The Unreasonable Effectiveness of Text Embedding Interpolation for Continuous Image Steering

**Authors:** Yiğit Ekin; Yossi Gandelsman

**ID:** 155378 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=654S7hINSk>) | [PDF](<https://openreview.net/pdf?id=654S7hINSk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155378>)

Continuous image editing requires fine\-grained control over semantic attributes in text\-conditioned generative models\. Recent methods obtain such control through trainable adapters, test\-time optimization, or architecture\-specific design choices\. In this work, we revisit steering the text\-encoder space as a simpler alternative for open\-vocabulary slider construction\. We show that, as text\-conditioned generative models become increasingly capable, linear directions in their frozen text\-encoder spaces can provide a competitive interface for continuous control when carefully constructed\. To make this interface practical, we introduce an automated pipeline that constructs continuous sliders from just a prompt and a concept, eliminating manual data curation and coefficient tuning\. First, a language model generates balanced contrastive prompt pairs\. Then, difference\-of\-means over the frozen text encoder estimates a concept direction, and an LLM\-assisted process selects the prompt tokens to steer\. Finally, an elastic range search adaptively calibrates the slider coefficient interval\. As the process includes only changing the text encoder hidden states, the same pipeline can be applied across different text\-conditioned generative backbones without denoiser\-specific modifications\. Across diverse set of edit types, our method outperforms prior training\-free baselines and approaches the edit compliance of trained controllers while avoiding per\-concept and per\-backbone training\. Our results suggest that a carefully designed text\-space steering is a surprisingly strong practical baseline for open\-vocabulary continuous editing\. Especially in a rapidly evolving generative model ecosystem, where repeatedly adapting specialized controllers to new backbones can be a substantial burden

## Scalable Fair Learning via Cramér\-von Mises Regularization

**Authors:** Albert Gimó Contreras; Mariia Vladimirova; Olga Petrova; Reda CHHAIBI; Patrick Loiseau

**ID:** 155653 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=41DVZ3vBAY>) | [PDF](<https://openreview.net/pdf?id=41DVZ3vBAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155653>)

A standard way to enforce group fairness in machine learning models is to add a fairness regularizer to the training loss\. Existing dependence\-based regularizers, however, are often computationally expensive, with per\-batch costs that are typically quadratic or higher in the batch size $B$\.  We propose a novel group\-fairness regularizer based on the Cramér\-von\-Mises \(CvM\) sensitivity index, which penalizes statistical dependence between model predictions and a sensitive attribute during training\.  Our method combines a rank\-based CvM estimator with differentiable soft ranking, yielding a bounded training penalty with $\\Oc\(B \\log B\)$ per\-batch complexity\. This is the first sub\-quadratic in\-processing fairness method that targets genuine joint\-distribution dependence\. We further establish theoretical connections between the CvM regularizer and standard fairness metrics such as demographic parity and equality of opportunity\. Experiments on tabular and image datasets show competitive fairness\-utility trade\-offs while substantially lowering training overhead compared to existing dependence\-based regularizers\.

## Less Supervision, Better Generalization: Weakly Supervised Fake Region Localization in Diffusion\-Edited Images

**Authors:** Junhee Lee; JeonDongHyeon; Taeoh Kim; beomYoung Kim; MyeongAh Cho

**ID:** 153981 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H5AFWh3aMx>) | [PDF](<https://openreview.net/pdf?id=H5AFWh3aMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153981>)

Localizing AI\-edited regions is essential for interpretable forensic analysis, but remains challenging due to subtle and spatially distributed artifacts that are misaligned with semantic or object boundaries\. Existing approaches rely on pixel\-level supervision from controlled editing pipelines, which is difficult to scale and can introduce misleading signals: artifacts frequently extend beyond annotated regions, while out\-of\-mask pixels are treated as authentic\.  This limits models' ability to capture transferable evidence and generalize across generators and datasets\. To address these issues, we propose \\textbf\{ReGFLoW\}, a \\textbf\{Re\}construction\-\\textbf\{G\}uided \\textbf\{F\}ake \\textbf\{Lo\}calization framework under \\textbf\{W\}eak supervision, which is the first weakly supervised approach for diffusion\-edited fake region localization\. ReGFLoW requires only real/fake labels at the image\-level and uses diffusion reconstruction errors as dense  spatial guidance to inject them into both feature and score spaces\. Furthermore, by artifact\-centric multiple instance learning, ReGFLoW utilizes localized diffusion evidence without relying on semantic\-affinity or boundary\-based pseudo\-mask priors\. Extensive experiments demonstrate that ReGFLoW achieves stronger out\-of\-domain generalization than fully supervised learning baselines\.

## Multi\-Part Object Representations via Graph Structures and Co\-Part Discovery

**Authors:** Alex Foo; Wynne Hsu; Mong\-Li Lee

**ID:** 150151 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kHuYgeVO8V>) | [PDF](<https://openreview.net/pdf?id=kHuYgeVO8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150151>)

Discovering object\-centric representations from images can significantly enhance the robustness, sample efficiency and generalizability of vision models\. Works on images with multi\-part objects typically follow an implicit object representation approach, which fail to recognize these learned objects in occluded or out\-of\-distribution contexts\. This is due to the assumption that object part\-whole relations are implicitly encoded into the representations through indirect training objectives\. We address this limitation by proposing a novel method that uses explicit graph representations for parts and introduce a new co\-part algorithm for multi\-part object discovery\. The part representations are refined with a part\-centric regularization objective\. We then introduce three benchmarks to evaluate the robustness of object\-centric methods in recognizing multi\-part objects within occluded and out\-of\-distribution settings\. Experimental results on simulated, realistic, and real\-world images show marked improvements in the quality of discovered objects compared to state\-of\-the\-art methods, as well as the accurate recognition of multi\-part objects in occluded and out\-of\-distribution contexts\. We also show that the discovered object\-centric representations can more accurately predict key multi\-part object properties in a downstream task, highlighting the potential of our method to advance the field of object\-centric representations\.

## WorldPrism: 3D Consistency for Video World Models via Bidirectional Cross\-Space Verification

**Authors:** Hengyu Liu; Jiahao Lu; Ruijie Zhu; Sixiao Zheng; Yuan Liu; Wenbo HU; Ying Shan

**ID:** 153356 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M04rf81e1H>) | [PDF](<https://openreview.net/pdf?id=M04rf81e1H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153356>)

Video world models aim to generate temporally coherent visual observations conditioned on actions, but often suffer from 3D geometric inconsistencies such as spatial drift, object deformation, and perspective violations, which limit their reliability in downstream tasks\. We propose WorldPrism, a post\-training framework that improves 3D consistency via reinforcement learning without modifying the base model architecture\. The central challenge lies in designing a reliable reward signal\. To address this, we introduce Bidirectional Geometry\-Flow Verification, a bidirectional cross\-space mechanism that evaluates consistency through two complementary paths: \(i\) lifting 2D optical flow into 3D to measure position\-space agreement, and \(ii\) projecting reconstructed 3D geometry to match the point correspondence\. By leveraging these two independent and complementary signals, this design mitigates the blind spots of unilateral 2D evaluation\. We further incorporate hierarchical temporal evaluation to capture both local and long\-range geometric consistency\. Experiments on diverse datasets demonstrate that WorldPrism achieves state\-of\-the\-art 3D consistency while preserving visual quality and generative diversity\.

## Train the Agent, Not the Expert: Learning to Harness Heterogeneous Experts for Multi\-Turn Visual Reasoning

**Authors:** Yaowu Fan; Tao Han; Dazhao Du; Jinhua Ma; Jia Wan

**ID:** 148210 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zXok9tzCGw>) | [PDF](<https://openreview.net/pdf?id=zXok9tzCGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148210>)

Recent progress in computer vision has produced a wide range of powerful specialized models for detection, segmentation, counting, and other visual tasks\. However, these models are usually optimized for isolated task formulations, making it difficult to directly support general\-purpose visual intelligence, especially when a task requires complex language understanding and dense small\-object perception\. In this paper, we propose VisHarness, a trainable visual agent that decouples high\-level perception, reasoning, and decision\-making from low\-level task execution\. Instead of training a model to solve a specific visual task, VisHarness learns to harness a set of carefully designed heterogeneous visual experts\. This paradigm preserves the general intelligence of the agent while fully leveraging the precision advantages of specialized visual models in concrete visual tasks\. With only lightweight training, VisHarness learns a generalizable visual expert\-harnessing policy and can solve common fundamental vision tasks under various complex conditions through multi\-turn interactions with visual expert models\. To enable efficient on\-policy reinforcement learning training in a live environment, we introduce dynamic visual memory archiving, which mitigates the rapidly accumulating visual\-token overhead caused by multi\-turn interactions with visual expert models\. Experiments on four representative benchmarks covering reasoning segmentation, generalized referring segmentation, dense small\-object detection, and referring counting demonstrate that VisHarness substantially outperforms existing general\-purpose models and achieves competitive or superior performance compared with task\-specific models\.

## VESTA: Visual Exploration with Statistical Tool Agents

**Authors:** William Rudman; Abhishek Rajan Divekar; Kanishk Jain; Sebastian Joseph; Stella Offner; Matt Lease; Kyle Mahowald; Greg Durrett; Junyi Jessy Li

**ID:** 151435 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=akBqLVEMrj>) | [PDF](<https://openreview.net/pdf?id=akBqLVEMrj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151435>)

Fitting quantitative models to data is a central step in scientific workflows, yet it remains one of the least automated\. Recent agent\-based systems leverage language and vision\-language models \(VLMs\) to iteratively propose and refine statistical models, but these systems struggle on more challenging modeling tasks\. To address these limitations, we introduce VESTA \(Visual Exploration with Statistical Tool Agents\), a framework that equips VLMs with a dynamically growing exploration toolkit to guide model refinement through data transformations, hypothesis\-driven visualizations, and robust statistical tests\. Unlike prior systems that rely on iterative critique alone, VESTA actively explores data before and during refinement by selecting or creating diagnostic tools, which accumulate in a reusable registry across iterations\. We evaluate VESTA against established baselines in three toolkit configurations: no tools, static expert\-written tools, and dynamic model\-written tools\. To support this evaluation, we introduce DAWN \(Dataset for Automated Workflows and Numerical Modeling\), a benchmark targeting distribution fitting and time series modeling with varying difficulty tiers, and culminating in real\-world astronomy tasks including modeling initial mass functions and gravitational\-wave chirp signals\. We find that VESTA's dynamic tool creation outperforms prior agentic pipelines, with the largest gains on complex and domain\-specific tasks\. We further show that dynamically generated tools are substantially more sophisticated than those produced by existing visual tool\-creation systems, covering more diagnostic categories per function and strongly preferring visual outputs that the VLM critic can reason over directly\.

## At FullTilt: Real\-Time Open\-Set 3D Macromolecule Detection Directly from Tilted 2D Projections

**Authors:** Ming\-Yang Ho; Alberto Bartesaghi

**ID:** 154302 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eirt5wZqH3>) | [PDF](<https://openreview.net/pdf?id=Eirt5wZqH3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154302>)

Open\-set 3D macromolecule detection in cryogenic electron tomography eliminates the need for target\-specific model retraining\. However, strict VRAM constraints prohibit processing an entire 3D tomogram, forcing current methods to rely on slow sliding\-window inference over extracted subvolumes\. To overcome this, we propose FullTilt, an end\-to\-end framework that redefines 3D detection by operating directly on aligned 2D tilt\-series\. Because a tilt\-series contains significantly fewer images than slices in a reconstructed tomogram, FullTilt eliminates redundant volumetric computation, accelerating inference by orders of magnitude\. To process the entire tilt\-series simultaneously, we introduce a tilt\-series encoder to efficiently fuse cross\-view information\. We further propose a multiclass visual prompt encoder for flexible prompting, a tilt\-aware query initializer to effectively anchor 3D queries, and an auxiliary geometric primitives module to enhance the model's understanding of multi\-view geometry while improving robustness to adverse imaging artifacts\. Extensive evaluations on three real\-world datasets demonstrate that FullTilt achieves state\-of\-the\-art zero\-shot performance while drastically reducing runtime and VRAM requirements, paving the way for rapid, large\-scale visual proteomics analysis\. All code and data will be publicly available upon publication\.

## Not All Layers Are Equal in Image\-to\-Video Transfer

**Authors:** Thinesh Thiyakesan Ponbagavathi; Constantin Seibold; Alina Roitberg

**ID:** 153476 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L509wfhr0h>) | [PDF](<https://openreview.net/pdf?id=L509wfhr0h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153476>)

Parameter\-efficient image\-to\-video transfer adapts frozen image foundation models to video via lightweight trainable adapters\. Existing methods insert the same adapter at every transformer layer, implicitly assuming all layers require equal temporal modeling\. A layer\-wise sensitivity analysis across four video\-native model families and two pretraining paradigms reveals that this assumption is wrong: temporal sensitivity increases with depth, and the pretraining paradigm determines its growth profile\. Vision\-only models exhibit a gradual rise, while vision\-language models show early suppression followed by late recovery\.  This finding motivates STRAP, a training\-free adapter placement rule that derives a spatial\-to\-temporal transition boundary from a paradigm\-matched video model\. Spatial adapters are assigned before this boundary and temporal adapters after it, without modifying the adapter architecture itself\. On four fine\-grained action recognition benchmarks, STRAP improves accuracy by up to 11\.8\\% over uniform placement, reduces trainable parameters by 29 to 48\\%, and lowers inference time by up to 10\\%\. On standard benchmarks, it matches accuracy with fewer parameters\.

## TokenCLIP: Token\-wise Prompt Learning for Zero\-shot Anomaly Detection

**Authors:** Qihang Zhou; Bin\-Bin Gao; Guansong Pang; Xin Wang; Jiming Chen; Shibo He

**ID:** 151659 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z0PkjOVabt>) | [PDF](<https://openreview.net/pdf?id=Z0PkjOVabt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151659>)

Adapting CLIP for anomaly detection on unseen objects has shown strong potential in a zero\-shot manner\. Existing methods typically rely on a single textual space to align with visual semantics across diverse objects and domains\. The indiscriminate alignment hinders the model from accurately capturing anomaly semantics\. We propose TokenCLIP, a token\-wise dynamic framework that aligns each visual token with learnt textual subspaces corresponding to its visual characteristics\. However,   explicitly assigning a unique learnable textual space to each token is computationally intractable and prone to insufficient optimization\. We instead expand the token\-agnostic textual space into a set of orthogonal subspaces, and then dynamically assign each token to a subspace combination guided by semantic affinity, which jointly supports customized and efficient token\-wise adaptation\. To this end, we formulate dynamic alignment as an optimal transport problem, where all visual tokens in an image are transported to textual subspaces under the cross\-modal cost matrix\. \\textbf\{The marginal constraint and minimal cost objective of OT ensure sufficient optimization across subspaces and encourage them to focus on different semantics\.\} Solving the problem yields a transport plan that adaptively assigns each token to semantically relevant subspaces\. Extensive experiments show that the textual subspaces naturally specialize in different semantics, such as foreground and background, to promote fine\-grained anomaly learning\. The comparison between baselines shows the superiority of TokenCLIP\.

## Beyond Single\-Shot Conditioning: Test\-Time Condition Refinement for Diffusion\-Based Image Restoration

**Authors:** Aiping Zhang; Jiangang Wang; Shangquan Sun; Yuning Cui; Fan Li; Renjing Pei; Wenqi Ren; XIAOCHUN CAO

**ID:** 153799 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IcHUb8TD0J>) | [PDF](<https://openreview.net/pdf?id=IcHUb8TD0J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153799>)

Conditional diffusion models have emerged as a powerful paradigm for image restoration, leveraging pre\-trained generative priors to recover high\-fidelity details from degraded inputs\. However, existing methods typically follow a static inference protocol, treating the degraded observation as a fixed control signal throughout sampling\. This overlooks the potential of inference\-time scaling, where guidance can be refined on the fly to improve output quality\. Recent test\-time optimization approaches that manipulate noise variables or denoising trajectories often compromise structural fidelity, while those targeting text embeddings lack the spatial precision needed for restoration\. To address this, we propose Condition\-Aware Test\-Time Optimization \(CATTO\), a training\-free method that iteratively refines the visual conditioning signal at inference time\. CATTO performs reward\-aligned condition refinement under the pre\-trained prior to enhance perceptual quality\. To avoid complex backpropagation, we design a gradient\-free optimization strategy guided by a joint objective: maximizing a perceptual reward while enforcing trajectory\- and condition\-level consistency to explicitly preserve structural fidelity\. This process is accelerated by optimizing within a low\-dimensional frequency subspace and reusing reliable updates across nearby denoising steps\. Experiments on image restoration benchmarks show that CATTO improves perceptual quality over strong diffusion\-based baselines without updating model parameters\.

## ProMo3D: Probing Motion Cues in Frozen 3D Foundation Models

**Authors:** Xiaoang Zhang; Mert Kiray; Yordanka Velikova; Manoj Biswanath; Benjamin Busam

**ID:** 151302 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bSpkdwCVuy>) | [PDF](<https://openreview.net/pdf?id=bSpkdwCVuy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151302>)

Feed\-forward 3D foundation models have recently reshaped multi\-view reconstruction, yet dynamic 4D understanding still often relies on large\-scale motion supervision or hand\-crafted, architecture\-specific heuristics\. We ask whether frozen 3D foundation model tokens already encode motion\-relevant information that can be exposed by lightweight readout functions, rather than re\-learning motion\-specific features with high\-capacity decoders\. Through probing on three representative backbones, we find that static\-\-dynamic separation is decodable from frozen token representations\. Our rank\-restricted and spectral analyses on $\\pi^3$X reveal that the recovered motion cues are concentrated in a low\-dimensional subspace\. Building on this, we propose Probing\-based Motion Distillation \(PMD\), which converts pairwise motion\-state compatibility scores against a fixed anchor token into dense motion masks\. Trained on only 160 YouTube\-VOS videos using a single 16 GB GPU, PMD transfers zero\-shot to DAVIS, SegTrackv2, and FBMS\-59 without target\-benchmark fine\-tuning\. With multi\-view pretrained geometric backbones, PMD outperforms training\-free heuristics and approaches substantially heavier supervised and self\-supervised methods, suggesting that motion decoding from frozen 3D foundation models can be lightweight and data\-efficient\.

## StitchEdit: Stitching Depth Priors into Image Editors via Per\-Layer Gradient Probing

**Authors:** Qin Guo; Dan Xu

**ID:** 152828 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q7G74v5nSs>) | [PDF](<https://openreview.net/pdf?id=Q7G74v5nSs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152828>)

Text\-guided image editing with diffusion models struggles with spatial edits \(e\.g\. manipulating objects, changing viewpoints, manipulating occlusions\) that depend on the 3D structure understanding of a scene\. Marigold and follow\-up work demonstrate that a pretrained diffusion backbone already harbors strong geometric priors that can be activated for depth estimation, yet how to redirect these priors toward editing remains unresolved\. Through per\-layer gradient probing, we discover that the editing and depth objectives are compatible in early transformer layers but actively conflict in late layers, explaining why naive depth\-conditioned editing either ignores geometry or degrades visual quality\. We present StitchEdit, which first activates the backbone's geometric capability via a lightweight depth\-denoising adapter, then selectively fine\-tunes this adapter for editing using a probe\-guided per\-layer learning rate schedule that preserves depth knowledge where it helps and prunes it where it conflicts\. On the proposed StitchEditBench, a benchmark of 150 geometry\-dependent edits spanning spatial transformation, occlusion manipulation, and viewpoint change, StitchEdit consistently surpasses both instruction\-based and depth\-conditioned baselines on perceptual quality and geometric fidelity\.

## Breaking the Uniformity Trap: Scaling Video Diffusion Model via SplitMoE

**Authors:** Yu Xu; Yuxin Zhang; Xiao Yang; Haotian Yang; Yizhi Wang; Xinwei Huang; Minxuan Lin; Angtian Wang; Chongyang Ma; Fan Tang

**ID:** 152515 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SYResv1L06>) | [PDF](<https://openreview.net/pdf?id=SYResv1L06>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152515>)

Mixture\-of\-Experts \(MoE\), popularized by large language models, is a promising paradigm for scaling visual generative models\. However, conventional token\-wise MoE routes tokens independently within a homogeneous expert pool and regularizes expert usage toward uniformity, making it poorly matched to video data that is spatiotemporally redundant and semantically long\-tailed\. We show that existing visual MoEs fall into a uniformity trap: semantically under\-organized routing, compounded by uniform expert\-usage regularization, scatters coherent patches across disparate experts, causing routing fragmentation and structural distortion\. To address this, we propose SplitMoE, a split\-role sparse architecture that breaks the shackles of uniformity\. To accommodate the inherent semantic imbalance, we explicitly bifurcate the expert pool into semantic experts and generic experts, with semantic experts capturing high\-level semantic abstraction and generic experts preserving residual visual information and flexible generative capacity\. Leveraging prototype\-guided routing and push\-pull regularization, SplitMoE enables tokens to cluster naturally by semantic attributes rather than arbitrary balancing constraints\. Extensive results show that under an equivalent activated\-parameter budget, SplitMoE outperforms traditional load\-balanced MoEs in convergence speed, routing coherence, and video generation quality across standard benchmarks\. By revealing an emergent coarse\-to\-fine denoising logic, SplitMoE provides the community with a modality\-aware scaling path, serving as a critical reference for building large\-scale video world models\.

## Beyond Bit Matching: Orthogonal Watermarks for Collusion\-Resistant Image Fingerprinting

**Authors:** Zhakshylyk Nurlanov; Tobias Weißberg; Florian Bernard

**ID:** 148565 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wwfGrsZBIz>) | [PDF](<https://openreview.net/pdf?id=wwfGrsZBIz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148565>)

Image fingerprinting assigns each distributed copy a user\-specific watermark for source tracing\. Averaging collusion is a central threat: several recipients can average their differently marked copies to suppress each individual mark\. Discrete bit\-string watermarks are especially vulnerable because averaging drives bit evidence toward ambiguous decisions\. We introduce \*\*OrthoMark\*\*, which maps user keys to near\-orthogonal high\-dimensional unit vectors and identifies colluders by cosine similarity to the extracted watermark direction\. Under ideal averaging of $K$ vector keys, the normalized average preserves a cosine signal of order $1/\\sqrt\{K\}$ for each colluder, while unrelated keys remain concentrated near zero\. The spherical geometry of random directions gives a shifted\-Beta null distribution for cosine similarities, enabling analytic per\-key false\-positive\-rate control after validation on unwatermarked images\. OrthoMark uses a neural watermark encoder and centered extractor trained with JND masking and a progressive curriculum for photometric, geometric, and collusion robustness\. Experiments on MS\-COCO, OpenImages, and AI\-generated images show that OrthoMark maintains robust single\-key detection under photometric and geometric distortions, and achieves the best strict all\-colluder detection among evaluated methods, while preserving high visual quality\.

## LookWhen? Fast Video Recognition by Learning When, Where, and What to Compute

**Authors:** Ali Salamatian; Anthony Fuller; Pritam Sarkar; James Green; Leonid Sigal; Evan Shelhamer

**ID:** 149223 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzaezKzgbP>) | [PDF](<https://openreview.net/pdf?id=rzaezKzgbP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149223>)

Transformers dominate video recognition\. They split videos into tokens, and processing them has expensive superlinear computational cost\. Yet videos are filled with redundancy, so we can question the need for this expense\. We introduce LookWhen, a selector–extractor framework that factorizes video recognition into learning when, where, and what to compute\. Our shallow selector gets a scaled\-down video and quickly scores all tokens across space\-time, while our deep extractor gets the top\-K selected tokens to approximate full\-video representations without actually processing all the tokens\. A key challenge is defining effective supervision for selection and extraction\. For selection pre\-training, we introduce a score on representations that ranks tokens by uniqueness using a simple nearest\-neighbor distance\. For extraction pre\-training, we distill both a video teacher and an image teacher, for which we normalize its frame\-wise representations to learn what changes within videos\. Through these strategies, our selector\-extractor learns general and efficient representations for feature extraction or fine\-tuning to a task\. Through experiments on Kinetics\-400, SSv2, Epic\-Kitchens, Diving48, Jester, and Charades, we show that LookWhen achieves a better accuracy\-computation trade\-off than efficient models and upgraded baselines of similar size\. LookWhen Pareto\-dominates in accuracy\-FLOPs on 9 of 12 cases \(6 tasks X 2 settings\) and roughly matches on 3\. In accuracy\-throughput, measuring time in practice, LookWhen is more efficient still at 6\.7$\\times$ faster than InternVideo2\-B at equal accuracy\.

## LensVLM: Selective Context Expansion for Compressed Visual Representation of Text

**Authors:** Roy Xie; Dan Friedman; Donghan Yu; Bowen Pan; Christopher Fifty; Jang\-Hyun Kim; Xianzhi Du; Zhe Gan; Vivek Rathod; Bhuwan Dhingra

**ID:** 151754 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YIzy3CMHAw>) | [PDF](<https://openreview.net/pdf?id=YIzy3CMHAw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151754>)

Vision Language Models \(VLMs\) offer the exciting possibility of processing text as rendered images, bypassing the need for tokenizing the text into long token sequences\. Since VLM image encoders map fixed\-size images to a fixed number of visual tokens, varying rendering resolution provides a fine\-grained compression knob\. However, accuracy deteriorates quickly as compression increases: characters shrink below the vision encoder's effective resolution, making them indistinguishable\. To address this, we propose LensVLM, an inference framework and post\-training recipe  that enables VLMs to scan compressed images, then selectively expand only the relevant images to their uncompressed form via learned tools\. Building on Qwen3\.5\-9B\-Base, LensVLM maintains accuracy comparable to the full\-text upper bound at 4\.3$\\times$ effective compression and outperforms retrieval\-based, text\- and visual\-compression baselines up to 10\.1$\\times$ effective compression across seven text QA benchmarks\. LensVLM also generalizes to multimodal document and code understanding tasks, with the accuracy gain over baselines growing as compression increases\.  Our analysis validates this approach: training makes visual compression robust to rendering choices, and as compression grows the model increasingly relies on expanded content rather than unreliable visual reading\.  The analysis also yields practical tool\-choice guidance: text expansion is preferable for rendered text, while high\-resolution image expansion suits native documents whose layout cues carry task\-relevant information\.

## Learning to Align Generative Appearance Priors for Fine\-grained Image Retrieval

**Authors:** Shijie Wang; Yadan Luo; Zijian Wang; Xin Yu; Zi Huang

**ID:** 150225 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqoXeuVAtu>) | [PDF](<https://openreview.net/pdf?id=jqoXeuVAtu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150225>)

Fine\-grained image retrieval \(FGIR\) typically relies on supervision from seen categories to learn discriminative embeddings for retrieving unseen categories\. However, such supervision often biases retrieval models toward the semantics of seen categories rather than the underlying appearance characteristics that generalize across categories, thereby limiting retrieval performance on unseen categories\. To tackle this, we propose GAPan, a Generative Appearance Prior alignment network that reformulates the learning objective from category prediction toward appearance modeling\. Technically, GAPan treats retrieval features with an invertible density model based on normalizing flows\. In the forward direction, the flow maps all instance features into a latent density space, where each seen category is modeled by a class\-conditional Gaussian prior and optimized via exact likelihood estimation\. This formulation preserves richer appearance details by leveraging the invertible property of the flows\. In the reverse direction, samples from the high\-density regions of these learned priors are mapped back to the feature space to produce appearance\-aware anchors that reflect intra\-category variation\. These anchors supervise a prior\-driven alignment objective that aligns retrieval embeddings with category\-specific appearance distributions, thereby improving generalization to unseen categories\. Evaluations demonstrate that our GAPan achieves state\-of\-the\-art performance on both widely\-used fine\- and coarse\-grained benchmarks\.

## Fast\-Slow Evolutionary Occupancy Prediction via Controlled Dynamics

**Authors:** Runhe Yang; Zhiyuan Zhou; Yuxiang Yan; Xuetong Yang; Yikai Pan; Jiacheng Tang; Zhuolin He; Jianhua Han; Hang Xu; Jian Pu

**ID:** 156095 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PrltFkr6P>) | [PDF](<https://openreview.net/pdf?id=0PrltFkr6P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156095>)

3D semantic occupancy prediction provides dense geometric and semantic scene representations for autonomous driving, where both high accuracy and low response latency are crucial for safe downstream forecasting and planning\. Existing methods usually exhibit different accuracy\-latency characteristics\. Performance\-oriented models provide stronger geometric and semantic predictions, while deployment\-friendly models provide faster responses\. This motivates EvoOcc, a fast\-slow evolutionary occupancy prediction framework that jointly exploits their complementary strengths to improve the accuracy\-latency balance without changing the upstream architectures\. EvoOcc models evolutionary occupancy prediction as a continuous time controlled dynamical system, enabling flexible adaptation to irregular prediction arrival of both fast and slow system\. The framework further decomposes the evolution process into dual state evolution where ego state evolution for the deterministic coordinate shifts and scene state evolution for the genuine geometric and semantic scene changes\. Extensive experiments on three different fast\-slow system pairs and irregular prediction arrivals show that EvoOcc consistently improves over fast system baselines while maintaining much lower latency than the slow system, indicating a favorable accuracy\-latency balance and stable behavior under practical inference situations\.

## Image Matting without Matting\-Specific Annotations via Eikonal Fields

**Authors:** Tao Huang; Yi Wang; Xiaohong Zhang; Wei Zhang; Tao Yin; Zhibin Zhang; Qiuli Wang

**ID:** 151905 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X2jELwz645>) | [PDF](<https://openreview.net/pdf?id=X2jELwz645>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151905>)

Image matting aims to estimate a continuous alpha matte that separates foreground objects from the background\. However, existing deep matting methods still rely heavily on task\-specific supervision for matting, including alpha mattes and trimaps, which are costly to annotate and limit their applicability in annotation\-scarce scenarios\. To address this limitation, we propose FreeMatte, a novel annotation\-free framework that learns to predict high\-quality alpha mattes without requiring any matting\-specific annotations\. The proposed framework formulates the construction of matting supervision as a foreground\-driven wavefront propagation process\. Starting from a coarse localization prior generated by an off\-the\-shelf segmentation foundation model, it solves an Eikonal equation constructed from the prior and the input image itself to obtain an arrival\-time field that encodes how readily each pixel can be reached from the coarse foreground source\. The arrival\-time field is then translated into confidence\-aware sparse supervision, which constrains the matting model to learn alpha prediction from the propagation structure encoded by the field\. Extensive experiments across diverse benchmarks show that FreeMatte achieves performance competitive with task\-supervised matting baselines under this challenging setting, ranking within the top two on 13 out of 20 evaluated dataset\-metric pairs\.

## COLLAR: Cascaded Object\-Level Latent Refinement for High\-Fidelity Conditional Generation

**Authors:** Xinlong Zhang; Jia Wei; Xiaoyu Zhang; Teng Zhou; Chengyu Lin; Yongchuan Tang

**ID:** 149747 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=neqB6nEQ0D>) | [PDF](<https://openreview.net/pdf?id=neqB6nEQ0D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149747>)

Achieving high\-fidelity object\-level control in diffusion transformers remains a significant challenge despite the introduction of structural priors like depth and Canny maps\. Current object\-level conditional generation methods frequently suffer from visual artifacts and struggle to maintain precise control over objects within small localized regions\. To address these limitations, we propose Cascaded Object\-Level Latent Refinement \(COLLAR\), a training\-free framework that progressively optimizes object\-level features via the Field\-of\-View \(FoV\) expansion\. First, we propose the Cross\-Scale Semantic Alignment \(CSSA\) module to address spatial\-semantic gaps by injecting object\-level features into extended\-FoV branches via attention mechanisms\. To further optimize these features, the Cyclic Feature Injection \(CFI\) module introduces a reciprocal background feedback mechanism\. It leverages a frequency\-based adaptive strategy to selectively update the global backbone with context\-aligned local information\. Finally, the extended\-FoV branch serves as a hub for feature optimization, ensuring that object\-level features are integrated into the global generation process without compromising final image quality\. Extensive experiments on the COCO\-MIG and COCO\-POS benchmarks demonstrate that our approach consistently outperforms state\-of\-the\-art methods across semantic alignment, image quality, and spatial fidelity\.

## EIHMR: Collaborative Human\-Camera Estimation for Global Human Mesh Recovery

**Authors:** Junchen Ge; Zhengqi Zhang; Hanglei Jin; Shuzhao Xie; Yuzhihuang; Jingwei Xu; Jingyan Jiang; Zhi Wang

**ID:** 153762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IrOkEc6m95>) | [PDF](<https://openreview.net/pdf?id=IrOkEc6m95>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153762>)

Recovering global 3D human motion from monocular video captured by a moving camera is a fundamental yet challenging problem, as camera ego\-motion and human body motion are tightly entangled in the image observations\. The prevailing two\-stage paradigm treats camera estimation and motion reconstruction as isolated processes, causing errors on both sides to be further amplified when combined in the world coordinate system\. To address this, we draw inspiration from the human inner visual simulation mechanism and propose EIHMR, a collaborative human\-camera co\-estimation framework\. EIHMR comprises two complementary modules that bridge scene\-aware human motion refinement and motion\-aware camera estimation: Scene\-Aware Local Human Motion Reconstruction reprojects motion sequences into frozen keyframe viewpoints and leverages metric depth and kinematic constraints to produce geometrically consistent local motion, while Motion\-aware SLAM re\-renders the refined motion as static meshes in the original frames, converting dynamic human regions into structured matching cues for robust camera estimation\. EIHMR consistently improves global trajectory reconstruction over strong baselines, demonstrating the effectiveness of collaborative human\-camera estimation for long\-range human motion recovery\.

## Cross\-order Consensus Graph Matching

**Authors:** Yu Xie; Yiming Zhang; Xinyan Liang; Junqi Liu; Ming Li

**ID:** 153663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JfYnVbWGRN>) | [PDF](<https://openreview.net/pdf?id=JfYnVbWGRN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153663>)

Graph matching aims to establish node correspondences while preserving both unary appearance compatibility and pairwise structural consistency\. Recent deep graph matching methods have achieved strong empirical performance, but many of them either compress edge information into node embeddings before matching or rely on surrogate optimization signals for quadratic objectives\. These design choices can weaken structural discrimination and may lead to optimization directions that are not aligned with the relaxed quadratic assignment problem \(QAP\)\. We propose Cross\-order Consensus Graph Matching \(CCGM\), a framework that explicitly couples first\-order node assignment and second\-order edge assignment\. CCGM constructs line graphs to convert edge matching into a node matching problem, learns node and edge affinities in parallel, and refines them through a Cross\-order Consensus Solver motivated by the exact gradient of the factorized relaxed QAP\. We further introduce Cross\-order Alignment Regularization to encourage agreement between node\-induced edge assignments and edge\-induced node support during training\. Experiments on standard visual graph matching benchmarks show that CCGM consistently improves matching accuracy over competitive baselines\.

## ViTeX\-Bench: Benchmarking High\-Fidelity Video Scene Text Editing

**Authors:** Xinghao Chen; Xiangbo Gao; Jiongze Yu; Yuheng Wu; Zhengzhong Tu

**ID:** 139184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fyPHDFABOs>) | [PDF](<https://openreview.net/pdf?id=fyPHDFABOs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139184>)

Video scene text editing aims to replace text appearing on scene surfaces in a video, such as storefront signs, whiteboards, and product labels, while preserving the surrounding content, motion, and camera dynamics\. Although scene text editing has been extensively studied for still images, its video counterpart remains underdeveloped\. Existing resources do not provide paired edits over real\-world videos, current protocols rarely measure whether the edited region reads as the target string over time, and there is no large\-scale open\-source benchmark for systematic comparison\. To close these gaps, we introduce ViTeX\-Bench, a comprehensive benchmark suite for high\-fidelity and temporally consistent video scene text editing\. Specifically, we first built ViTeX\-Dataset, containing 387 real\-world 720p videos with precise text\-region masks and editing instructions; the 230\-training split provides the first such resource with paired editing results built through a semi\-automatic pipeline, with the rest forming the evaluation set for standardized benchmarking\. In ViTeX\-Bench, we propose a three\-axis evaluation protocol: text correctness, visual quality, and edit locality, which contains a total of 13 metrics that combine character\-level OCR signals with motion and preservation metrics\. Our benchmarking experiments indicate that all eight leading video editing models, including both public and commercial models, fail in distinct ways: they either flicker or drift over time, or simply fail to produce the requested editing effects\.  To further validate the efficacy of our proposed dataset, we trained ViTeX\-Edit\-14B on the paired training split with a motion\-aligned glyph\-video conditioning stream\. We show that, trained on only 230 high\-quality paired videos, ViTeX\-Edit\-14B achieves the strongest CharAcc among video\-native editors \(0\.688, \+11\.1\\% over VideoPainter\) and leads three ranked temporal metrics, reducing the previous best by 2\.1\\% \(Flicker$\_f$\), 6\.6\\% \(Flicker$\_c$\), and 1\.9\\% \(Warp$\_c$\), respectively\.

## Disen\-Forcing: Disentangling Semantic Anchoring from Motion for Autoregressive Video Diffusion

**Authors:** Zhengyang Yu; Akio Hayakawa; Masato Ishii; Qingtao Yu; Xuesong Li; Takashi Shibuya; Yuki Mitsufuji; Jing Zhang

**ID:** 148543 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x6iaZeSlAJ>) | [PDF](<https://openreview.net/pdf?id=x6iaZeSlAJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148543>)

Autoregressive video diffusion models \(AR\-VDMs\) enable real\-time, long\-horizon video generation but degrade rapidly once the inference horizon outruns the training horizon, due to compounding exposure bias\. To stabilize long rollouts, recent methods heuristically adopt frame sink, which keeping initial frames as a persistent KV cache context, inspired by attention sinks in streaming LLMs\. We revisit this design and find that the mechanism by which initial frames stabilize long\-range consistency in AR\-VDMs is not an LLM\-style attention sink; instead, consistency is anchored through a sparse subset of attention heads, while the majority of heads predominantly capture local temporal dynamics\. This observation reveals an over\-conditioning pathology in existing frame\-sink strategies: by universally exposing every head to the pinned initial\-frame context, the model becomes prone to collapsing motion toward the low\-dynamic modes of the teacher during model distillation\. We propose Disen\-Forcing, a distillation\-time plugin for AR\-VDMs that disentangles and reinforces this head specialization through disentangled context routing and motion\-disentangling regularization\. On long\-horizon video generation benchmarks, Disen\-Forcing simultaneously improves semantic consistency and motion dynamics of base AR\-VDMs: a trade\-off that sink\-based methods fail to balance\.

## ActO: Extracting Action Representations from MLLM Embeddings for Video World Models

**Authors:** Runjia Li; Minghao Chen; Junyu Xie; Philip Torr; Andrea Vedaldi; Tomas Jakab

**ID:** 149590 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=owi7oyTNah>) | [PDF](<https://openreview.net/pdf?id=owi7oyTNah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149590>)

Video world models promise general\-purpose interactive simulators, but their training is limited by action supervision: action labels are scarce, fragmented across incompatible specifications, and do not scale with the unlabeled video pretraining corpus\. A common workaround jointly trains an action encoder to compress consecutive frames into a latent action and a decoder to reconstruct the next frame from the previous frame and that latent, forcing the latent to capture only new information\. This has two limitations: learning the action space from scratch can limit generalization to unseen domains, and the bottleneck trades expressiveness for separation, with tighter settings losing nuance and looser ones risking scene leakage under domain shifts\. We argue for a different starting point: rather than learning an action representation from scratch, we adapt a pretrained Multimodal Large Language Model \(MLLM\), which was trained on large\-scale, diverse video\-language data and whose embeddings already carry partial action information\. This provides a more generalizable foundation for action representation\. The remaining challenge is to disentangle action from scene\. To this end, we propose a contrastive adaptation framework that reshapes the geometry of the pretrained space without imposing a low\-dimensional bottleneck, preserving the expressiveness of the original embeddings\. We introduce a unified evaluation protocol that probes action representations along three axes \- action expressiveness, scene invariance, and action\-conditioned video generation quality \- across several robot and game benchmarks in both in\-domain and out\-of\-domain settings\. Our representations outperform prior annotation\-free latent\-action methods on all three axes\.

## Retrieval Heads Meet Vision: Uncovering How VLMs Locate and Extract Visual Information

**Authors:** Chanho Park; Daehyeon Choi; Jihyun Lee; Minhyuk Sung

**ID:** 155146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7yVqyPZh09>) | [PDF](<https://openreview.net/pdf?id=7yVqyPZh09>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155146>)

Vision\-language models \(VLMs\) can locate an image region referred to by a text prompt and route the corresponding visual evidence to the output, yet the internal mechanism behind this behavior is not understood\. Inspired by retrieval heads in large language models, we ask whether VLMs contain an analogous mechanism for visual retrieval\. We answer affirmatively by introducing Visual Retrieval Heads\(VRHs\), a small subset of attention heads \(about 1\.7–2\.6%\) that are causally responsible for grounding text descriptions to image regions\. To find them, we recast existing head\-scoring methods under a unified design space over query tokens, key aggregation, and cross\-sample aggregation\. We then show that scoring attention from output prediction tokens with a sum over the ground\-truth referent region most reliably identifies causal heads\. Across four VLMs and five referring\-expression benchmarks, masking only the top 20 VRHs reduces grounding accuracy by up to 80 percentage points, while masking the same number of random heads has little effect\. Beyond replicating the causal\-sparse\-universal triad established for text retrieval heads, VRHs exhibit several properties not previously reported: they generalize across visual reference tasks, remaining causal on attribute, spatial, counting, and visual\-math benchmarks despite being discovered through bounding\-box prediction; they are functionally specific, preserving output format while corrupting localization; and they are architecturally shared, transferring causally across VLMs that share an LLM backbone but differ in vision encoder, projector, and instruction tuning

## SemISP: Semantic\-Consistent Diffusion for Cross\-Camera RAW\-to\-sRGB Generation

**Authors:** ZHE PANG; Haina Qin; Ziyu Feng; Zewen Chen; Juan Wang; Bing Li; Weiming Hu

**ID:** 150067 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kzbguNhHJG>) | [PDF](<https://openreview.net/pdf?id=kzbguNhHJG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150067>)

Cross\-camera RAW\-to\-sRGB mapping seeks to convert smartphone RAW captures into DSLR\-quality sRGB images, yet the large domain gap between linear RAW and nonlinear sRGB spaces makes this task highly challenging\. Existing methods mainly condition on pixel\-level supervision and local RAW cues, where content preservation and domain translation remain entangled in low\-level measurements\. We propose SemISP, a semantic\-guided diffusion framework that uses scene semantics as a domain\-invariant anchor for cross\-domain generation\. Specifically, we adopt a frozen DINOv3 as the sRGB semantic backbone and develop a Domain Alignment Adapter to extract sRGB\-consistent semantic representations from RAW inputs through parameter\-efficient adaptation\. Because semantic priors and RAW signals operate at fundamentally different information levels, and the diffusion denoising process follows a coarse\-to\-fine trajectory, we further design a Time\-aware Dual\-stream Adaptive Modulation \(TDAM\) module that separately encodes both condition streams and uses the diffusion timestep to dynamically balance their contributions\-\-\-emphasizing semantic anchoring at early stages and fine\-grained RAW details at later ones\. Experiments on two established cross\-camera benchmarks show consistent improvements over prior methods in both fidelity and perceptual quality\.

## High\-Dimensional Conditional Independence Testing via Random Projection Aggregation

**Authors:** Dian Jin; zirui chen; Ting Li; Jiaye Teng

**ID:** 148200 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zboZEFa5xo>) | [PDF](<https://openreview.net/pdf?id=zboZEFa5xo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148200>)

Conditional independence \(CI\) testing is a fundamental problem in statistics\. However, classical nonparametric CI tests suffer from the curse of dimensionality, as nonparametric estimation degrades rapidly in high dimensions\. This paper proposes RP\-CIT, a random\-projection\-aggregated CI test that remains effective in the high\-dimensional regime\.  The central idea is to project $X$ and $Y$ onto random one\-dimensional subspaces before applying a univariate base CI test\. This projection \(i\) preserves conditional independence under the null hypothesis and \(ii\) reduces the original high\-dimensional problem to a collection of univariate CI subproblems, thereby avoiding high\-dimensional nonparametric estimation\. Since a single projection may miss the dependence signal, we aggregate the $p$\-values from $k$ independent projections via a Bonferroni\-max rule, which asymptotically controls the Type\~I error at the nominal level and yields a limiting Type\~II error bound that decreases exponentially in $k$ under a detectable\-projection condition\. The paper also develops a top\-$r$ aggregation extension for alternatives whose signal is spread across multiple projection directions\. More broadly, the random\-projection aggregation framework can be combined with other scalar base tests; as one example, we use a projected GCM base test to accommodate higher\-dimensional conditioning variables\. Experiments on synthetic benchmarks, image\-valued CI tasks, and Norman Perturb\-seq module skeleton learning illustrate the calibration, power, and practical utility of the framework\.

## Temporal Backtracking Search for Test\-time Generative Video Reasoning

**Authors:** SeJoon Jun; Zheng Ding; Huangyuan Su; Weirui Ye; Yilun Du

**ID:** 152083 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VbbMjAFFHD>) | [PDF](<https://openreview.net/pdf?id=VbbMjAFFHD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152083>)

While test\-time scaling has revolutionized reasoning in large language models, generative video reasoning remains bottlenecked by a single\-shot paradigm\. We demonstrate that searching over denoising steps cannot rescue logically flawed rollouts because spatial trajectories commit early in the diffusion process\. Root\-level Best\-of\-$N$ \(BoN\) sampling is similarly inefficient: reasoning errors cluster early in the temporal axis, and resampling blindly discards verified upstream progress\. To unlock effective test\-time scaling for video models, we introduce \\textbf\{Temporal Backtracking Search \(TBS\)\}, which shifts the search space to the temporal axis\. TBS transforms video generation into an iterative generate\-\-verify\-\-restart loop via three core mechanisms: \(1\) \\textit\{variable\-$K$ conditioning\} to resume generation from arbitrary clean prefixes; \(2\) \\textit\{temporal process verification\} to localize failures and extract valid restart anchors; and \(3\) \\textit\{prefix\-based search\} to reallocate compute toward extending correct trajectories rather than root resampling\. Across algorithmic, navigation, and robotics domains, TBS Pareto\-dominates matched\-budget BoN\. In a strict out\-of\-distribution setting where one\-shot generation collapses \($0\.7\\%$ for BoN\), TBS achieves $22\.7\\%$, with every solved episode stemming from a restarted branch\. Ultimately, TBS reveals that the local reasoning competence of video models far exceeds what single\-shot rollouts indicate, providing a scalable test\-time framework to unlock it\.

## Masked Visual Actions for Unified World Modeling

**Authors:** Hadi Alzayer; Wenlong Huang; Haonan Chen; Christopher Luey; Lvmin Zhang; Maneesh Agrawala; Gordon Wetzstein; Fei\-Fei Li; Yilun Du; Jiajun Wu; Jia\-Bin Huang

**ID:** 152131 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VHMcZoypoo>) | [PDF](<https://openreview.net/pdf?id=VHMcZoypoo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152131>)

Video models absorb rich priors over how the visual world moves, interacts, and responds to contact, making them promising substrates for robotic world modeling\. The central challenge is how to communicate action to such models in a form aligned with the visual space in which they learned these interaction priors, yet still grounded in physical manipulation\. We introduce Masked Visual Actions, a pixel\-space control interface that expresses action as a partially revealed trajectory of an arbitrary entity in a video\. Revealing robot motion makes the model act as a forward dynamics model that predicts the scene's response to low\-level robot actions, while revealing desired object motion makes the same model recover robot behavior consistent with that outcome\. Finetuned with only 15 hours of masked examples from real videos and simulation, a single checkpoint achieves strong visual fidelity and controllability across diverse scenes and multiple embodiments\. In downstream manipulation settings, the model produces imagined rollouts whose outcomes correlate with real\-world execution for policy evaluation, improves decision making by ranking candidate futures in model\-based planning, and supports inverse modeling by synthesizing robot motion from desired object motion\.

## MemoryFusion: Cross\-Temporal Memory Learning for Multimodal Video Fusion

**Authors:** Gong Meiqi; Hao Zhang; Jiayi Ma

**ID:** 150888 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eeXh6LdYjE>) | [PDF](<https://openreview.net/pdf?id=eeXh6LdYjE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150888>)

Multimodal video fusion methods still suffer from limited performance due to the inadequate exploitation of historical frames and the simplified temporal consistency modeling\. To address this, we propose MemoryFusion, a two\-stage framework built upon cross\-temporal memory learning, which leverages historical information across multiple temporal scales to enhance robustness and progressively refine temporal consistency\. In the first stage, we introduce a Short\-Term Memory Bank \(STMB\) to aggregate recent temporal features for enhancing the current frame, and a Long\-Term Memory Bank \(LTMB\) to preserve representative features from extended temporal sequences through adaptive update rules\. Meanwhile, we incorporate a Temporal Smoothing Module \(TSM\) to perform coarse temporal consistency modeling, suppressing abrupt background variations and establishing a stable temporal foundation\. In the second stage, we design a Temporal Refinement Module \(TRM\) implemented as a lightweight 3D residual network, which conducts prior\-guided fine\-grained temporal refinement to recover subtle temporal dynamics and spatial details overlooked in the first stage\.   Extensive experiments demonstrate that MemoryFusion significantly improves both visual fidelity and temporal consistency by performing cross\-temporal learning, outperforming the state\-of\-the\-art in both frame\-based and video\-based fusion methods\. The source code and pretrained models will be publicly released\.

## The SuperActivator Mechanism: Transformers Concentrate Reliable Concept Signals in the Tail

**Authors:** Cassandra Goldberg; Chaehyeon Kim; Adam Stein; Eric Wong

**ID:** 152150 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VAaP43gSBg>) | [PDF](<https://openreview.net/pdf?id=VAaP43gSBg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152150>)

Concept vectors aim to enhance model interpretability by linking internal representations with human\-understandable semantics, but their practical utility is often limited by noisy and inconsistent activations\. In this work, we uncover the SuperActivator Mechanism: a transformer dynamic that amplifies concept activation gaps, concentrating the most reliable concept evidence into a small set of high\-activation tokens\. To develop a theoretical understanding of this mechanism, we prove that concept\-aligned attention heads multiplicatively amplify pairwise activation gaps, with already\-extreme activations growing fastest\. We find that this amplification is not just theoretical, but also occurs empirically on large\-scale models: while in\- and out\-of\-concept activation distributions overlap considerably, the in\-concept distribution develops a positive tail clearly separated from the noise\. These high\-tail tokens, which we call SuperActivators, appear consistently across concept\-positive samples, making them reliable indicators of concept presence\. Accordingly, SuperActivator\-based detection improves F1 by up to 14% over standard concept activation aggregators and prompting baselines across image and text modalities, models, layers, and concept extraction techniques, demonstrating the generality and practicality of our insights\. Further empirical analysis demonstrates that the most reliable SuperActivators are sparse, with detection typically peaking when using only 5\-10% of in\-concept token activations, and capture more faithful localized semantics than global concept vectors\.

## Bound\-Conditioned Latent Inference for Progressive Image Compression

**Authors:** Jaeseok Jang; Seungmin Jeon; Kwang Pyo Choi; Chang\-Su Kim

**ID:** 149342 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qoLGM98t8z>) | [PDF](<https://openreview.net/pdf?id=qoLGM98t8z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149342>)

Progressive image compression reconstructs images from prefixes of a single bitstream and therefore involves sequential latent inference under partial observations\. Existing trit\-plane codecs mainly treat decoded trits as discrete symbols for probability prediction, without fully exploiting their role as interval constraints on the underlying continuous latents\. We propose bound\-conditioned latent inference \(BLI\), a framework that reformulates progressive trit\-plane coding as sequential latent inference under shrinking interval constraints\. At each coding step, the trits decoded so far define lower and upper bounds for each latent element\. BLI uses the center and width of these bounds, together with hyperprior information shared by the encoder and decoder, to jointly refine the Gaussian parameters $\(\\mu,\\sigma\)$ for entropy modeling and the latent estimate $\\hat\{y\}$ for reconstruction\. As additional trits are decoded, the feasible intervals shrink monotonically, yielding tighter constraints for the next inference step and enabling flexible in\-plane refinement schedules\. Experiments on Kodak, CLIC, and JPEG\-AI show that BLI achieves state\-of\-the\-art rate\-distortion performance among progressive image codecs, reducing BD\-rate by $17\.80\\%$ over DPICT and by $7\.98\\%$ over CTC on Kodak, while replacing CTC's plane\-specific predictors with a shared model that uses about $5\.3\\times$ fewer parameters and achieves lower latency than CTC\.

## Pygmalion Effect in Vision: Image\-to\-Clay Translation for Reflective Geometry Reconstruction

**Authors:** Gayoung Lee; Junho Kim; Jin\-Hwa Kim; Junmo Kim

**ID:** 150623 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gjpj9pDLxF>) | [PDF](<https://openreview.net/pdf?id=gjpj9pDLxF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150623>)

Understanding reflection remains a long\-standing challenge in 3D reconstruction due to the entanglement of appearance and geometry under view\-dependent reflections\. In this work, we present the Pygmalion Effect in Vision, a novel framework that metaphorically “sculpts” reflective objects into clay\-like forms through image\-to\-clay translation\. We then introduce a dual\-branch design in which a BRDF\-based reflective branch and a clay\-guided branch share the same Gaussian geometry but operate through independent rendering paths\. The clay\-guided branch, supervised by the synthesized clay images, provides reflection\-free geometric guidance that complements the photometric supervision of the BRDF branch\. Experiments on both synthetic and real datasets show consistent improvements in both geometry and photometric metrics\. Beyond technical gains, our framework reveals that seeing by unshining, translating radiance into neutrality, can serve as a powerful inductive bias for reflective object geometry learning\.

## RelaVPR: Relation\-Based Knowledge Distillation for Efficient Visual Place Recognition

**Authors:** Zheyuan Zhang; Jiwei Zhang; Rongjing Cai; Nihua Shrestha; Zilong Wang; Boyu Zhou; Hong Chen

**ID:** 151495 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aEpYxZpdUT>) | [PDF](<https://openreview.net/pdf?id=aEpYxZpdUT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151495>)

Visual Place Recognition \(VPR\) aims to identify and retrieve geographic locations from visual observations\. With the advent of Visual Foundation Models \(VFMs\), recent VPR methods have primarily adopted them as backbones to exploit their strong generalization capabilities, effectively mitigating challenges such as perceptual aliasing and long\-term appearance variations\. However, their large parameter sizes and high inference latency impose substantial hardware demands, significantly hindering practical deployment\. To retain the generalization strength of VFMs while enabling efficient VPR, we revisit this problem from the perspective of Knowledge Distillation \(KD\)\. Specifically, we conduct a systematic investigation of various KD losses for VPR from both theoretical and empirical standpoints\. Our analysis reveals that relation\-based KD methods consistently achieve superior performance and efficiency, which we attribute to their larger feasible solution space and better alignment with the VPR objective\. Building upon this insight, we propose a relation\-based KD framework, termed RelaVPR, which is further enhanced along three key dimensions: 1\) dynamically filtering noisy knowledge, 2\) improving hard\-sample learning, and 3\) mitigating gradient interference in multi\-teacher distillation\. Compared with state\-of\-the\-art \(SOTA\) KD\-based VPR methods, RelaVPR requires no additional fine\-tuning while delivering higher performance, faster inference, and a more compact model\. Moreover, RelaVPR establishes a stronger performance\-\-efficiency frontier than existing SOTA VPR approaches across multiple popular benchmarks\. Codes and weights will be released\.

## PRISM: Rethinking Atmospheric Scattering Reconstruction as a Unified Understanding and Restoration Model for Real\-world Dehazing

**Authors:** Chengyu Fang; Chunming He; Yuelin Zhang; Chubin Chen; zhu; Hongqiu Wang; Longxiang Tang; Xiu Li; Sina Farsiu

**ID:** 151959 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WY2sSyJM2Y>) | [PDF](<https://openreview.net/pdf?id=WY2sSyJM2Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151959>)

Real\-world image dehazing \(RID\) aims to remove haze\-induced degradation from real scenes\. This task remains challenging due to non\-uniform haze distribution, spatially varying color shifts, and the scarcity of paired real hazy\-clean data\. In PRISM, we propose Proximal Scattering Atmosphere Reconstruction \(PSAR\), a physically structured framework that jointly reconstructs the clear scene and scattering variables under the atmospheric scattering model, making the restoration process more interpretable in complex real\-world conditions\. To bridge the synthetic\-to\-real gap, we design an online non\-uniform haze synthesis pipeline and a Selective Self\-Distillation Adaptation \(SSDA\) scheme for unpaired real\-world scenarios, which enables the model to selectively learn from high\-quality perceptual targets while leveraging its intrinsic scattering understanding to audit residual haze and guide self\-refinement\. Experiments on real\-world benchmarks demonstrate that PRISM achieves competitive performance on RID tasks\.

## Trainable Sparse Attention via Hybrid Top\-k\+Top\-p Masking and Distillation Fine\-Tuning

**Authors:** Jintao Zhang; Kai Jiang; Chendong Xiang; Weiqi Feng; Yuezhou Hu; Haocheng Xi; Shuo Yang; Mengfei Xia; Jianfei Chen; Jun Zhu

**ID:** 154615 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CHKbRr1YwB>) | [PDF](<https://openreview.net/pdf?id=CHKbRr1YwB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154615>)

Many training\-free sparse attention methods are effective for accelerating diffusion models\. Recently, several works suggest that making sparse attention trainable can further increase sparsity while preserving generation quality\. We study three key questions: \(1\) when do the two common masking rules, i\.e\., Top\-k and Top\-p, fail, and how can we avoid these failures? \(2\) why can trainable sparse attention reach higher sparsity than training\-free methods? \(3\) what are the limitations of fine\-tuning sparse attention using the diffusion loss, and how can we address them? Based on this analysis, we propose SpargeAttention2, a trainable sparse attention method that achieves high sparsity without degrading generation quality\. SpargeAttention2 includes \(i\) a hybrid masking rule that combines Top\-k and Top\-p for more robust masking at high sparsity, \(ii\) an efficient trainable sparse attention implementation, and \(iii\) a distillation\-inspired fine\-tuning objective to better preserve generation quality during fine\-tuning using sparse attention\. Experiments on video diffusion models show that SpargeAttention2 reaches 95% attention sparsity and a $16\.2\\times$ attention speedup while maintaining generation quality, consistently outperforming prior sparse attention methods\.

## GridProbe: Posterior\-Probing for Adaptive Test\-Time Compute in Long\-Video VLMs

**Authors:** Mohamed Eltahir; Lama Ayash; Ali Habibullah; Tanveer Hussain; Naeemullah Khan

**ID:** 149994 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lcdVMrJksq>) | [PDF](<https://openreview.net/pdf?id=lcdVMrJksq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149994>)

Long\-video understanding in VLMs is bottlenecked by a single monolithic forward pass over thousands of frames at quadratic attention cost\. A common mitigation is to first $select$ a small subset of informative frames before the forward pass; common for training\-free selectors via auxiliary encoder\-space similarities\. Such signals are capped by contrastive pretraining, which usually fails on reasoning\-heavy queries \(negation, cross\-frame counting, holistic summarization\)\. We propose $\\textbf\{GridProbe\}$, an efficient training\-free posterior\-probing inference paradigm that scores evidence in $\\textbf\{answer space\}$ using a frozen VLM's own reasoning and then selects question\-relevant frames $\\textbf\{adaptively\}$, resulting in sub\-quadratic attention cost with little to no accuracy loss\. We arrange frames on a $K\{\\times\}K$ grid and run lightweight row $R$ and column $C$ probes, where each probe reads its peak posterior as a query\-conditioned confidence\. The outer product of $R$ and $C$ yields an interpretable $\\textbf\{importance map\}$ whose skewness and kurtosis drive $\\textbf\{Shape\-Adaptive Selection\}$, a closed\-form rule that reliably replaces the fixed frame budget $M$ with a per\-question $M\_\{\\mathrm\{eff\}\}$\. We show empirically that $M\_\{\\mathrm\{eff\}\}$, surprisingly, tracks intrinsic question difficulty without ever seeing the answer, a sign of test\-time adaptive compute\. On Video\-MME\-v2, $\\textbf\{GridProbe\}$ matches the monolithic baseline within $1\.6$ pp Avg Acc at $3\.36\\times$ TFLOPs reduction, while on LongVideoBench it Pareto\-dominates the baseline \($\+0\.9$ pp at $0\.35\\times$ compute\)\. Because the selector and QA models can be decoupled, pairing a small 2B selector with a stronger 4B or 8B QA is strictly Pareto\-dominant over the 2B monolithic baseline \(up to $\+4\.0$ pp at $0\.52\\times$ compute, on average\), with no retraining\. Finally, the interpretability of the importance maps opens future avenues for behavioral diagnostics, grounding, and frame\-selection distillation\.

## ProxyPose: 6\-DoF Pose Tracking via Video\-to\-Video Translation

**Authors:** Ruihang Zhang; Felix Taubner; Pooja Ravi; Kyros Kutulakos; David Lindell

**ID:** 148929 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uAUn3zAFt6>) | [PDF](<https://openreview.net/pdf?id=uAUn3zAFt6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148929>)

Tracking the six\-degree\-of\-freedom \(6\-DoF\) pose of objects and surfaces from monocular video is a long\-standing problem in computer vision\. To tackle this problem, existing methods require inputs beyond the video itself—such as 3D models, depth maps, object masks, or task\-specific learned features—and they struggle with textureless, transparent, reflective, or deformable surfaces\. Here, we introduce ProxyPose, which recasts 6\-DoF pose tracking as video\-to\-video translation\. Given only a video and a single marked pixel in the first frame, a fine\-tuned video diffusion model translates the input into a "proxy video"—a synthetic video depicting a colored polyhedron undergoing the same local rigid\-body motion as the surface region at the marked pixel\. Because the proxy's geometry and appearance are known by construction, recovering its full 6\-DoF trajectory reduces to classical pose estimation with off\-the\-shelf solvers\. This formulation leverages large\-scale video pre\-training to absorb the hardest aspects of pose tracking—handling challenging materials, occlusions, and deformations—into the translation step, while operating at the pixel level with no assumptions about object identity, boundaries, or global rigidity\. ProxyPose achieves state\-of\-the\-art 6\-DoF pose tracking accuracy without the additional inputs required by competing methods and after fine\-tuning the video model only on synthetic data\. We further demonstrate that ProxyPose extends to face tracking, camera pose estimation, and challenging in\-the\-wild scenes that are beyond the reach of existing approaches\. Video results are available on the Supplemental Webpage \.

## Improving Continual Video Instance Segmentation via Spatial\-Temporal Balanced Mixture\-of\-Experts Adapters

**Authors:** Hao Fu; Sihao Liu; Hanbin Zhao; Jiahua Dong; zhang chao; Hui Qian

**ID:** 148162 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zpJp5PjRLP>) | [PDF](<https://openreview.net/pdf?id=zpJp5PjRLP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148162>)

Effective Continual Video Instance Segmentation \(CVIS\) requires balancing catastrophic forgetting with the plasticity to learn new tasks\. Existing methods typically adapt pre\-trained VIS models using trainable visual prompts, but suffer from two key limitations: they overlook the distinct degradation of frame\-level spatial knowledge \(e\.g\., misclassification\) and video\-level temporal knowledge \(e\.g\., trajectory disruption\), and rely on rigid prompt retrieval that struggles under task ambiguity and distribution shifts\. To address these issues, we propose STEAM, a CVIS framework with Spatial\-Temporal Balanced Mixture\-of\-Experts Adapters\. Instead of explicit retrieval, we introduce a Distribution\-Aware spatial\-temporal Scaling and sHifting \(DASH\) mechanism to align the pre\-trained feature space with sequential tasks and reduce the domain gap\. Furthermore, our method adaptively learns Task\-Adaptive Spatial\-Temporal mixture\-of\-Experts \(TASTE\) at both the frame and video levels, while updating them with Subspace\-Constrained Orthogonal Adaptation \(SCOA\) to mitigate interference\. Extensive experiments across diverse CVIS settings show that STEAM preserves temporal\-spatial coherence and achieves state\-of\-the\-art performance\.

## Auditing Capsule Vision 2024: Within\-Split Train\-to\-Validation Re\-Exposure and a Kvasir\-Channel Sensitivity Diagnostic

**Authors:** Eunseob Choi; Kyeonghun Kim; Hyuk\-Jae Lee; Nam\-Joon Kim

**ID:** 139763 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=69GCzBgr1S>) | [PDF](<https://openreview.net/pdf?id=69GCzBgr1S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139763>)

Public validation sets in machine\-learning challenges frequently become de facto test sets in downstream work, making train–validation source overlap a first\-order concern for claim validity\. We audit the released public split of the \*Capsule Vision 2024 Challenge\* \(CV2024\) using perceptual hashing \(pHash\+dHash, PDQ at 99\.4%\), pixel NCC, and DINOv2/ResNet feature checks\. The released CV2024 public split contains 1,381 / 11,581 KVASIR validation rows \(11\.9%; 540 pixel\-confirmed at NCC ≥ 0\.99, i\.e\. 4\.66%\) with pHash\-exact training matches — directly violating the organizers' "NOT have duplicates" preprocessing description\. All 1,381 trace to shared Kvasir\-Capsule video prefixes, consistent with frame\-level \(not video\-level\) random splitting\. The full CV2024\-KVASIR slice falls in the disclosed Kvasir\-Capsule near\-duplicate set \(60\.7% bit\-identical; non\-KVASIR controls ≤ 0\.31%\)\. Training on the Kvasir\-origin\-removed le6 split drops public\-validation balanced accuracy by Δ = −0\.213 \(95% CI \[−0\.220, −0\.206\], n=10 paired seeds\), quantifying the public score's dependence on the KVASIR channel; the magnitude is mechanically expected given the 71\.8% KVASIR validation composition rather than a leakage\-specific causal effect\. le6 is not a hidden\-test proxy \(team\-level Spearman against AIIMS: ρ=0\.355 vs\. 0\.566 for the original score\)\. We release le6, le6\_plus\_internal, hash/NCC annotations, audit code, and a Croissant 1\.1 descriptor as a within\-public\-pool sensitivity probe; no image bytes are redistributed\. Detector portability: ISIC 2019 cross\-source rate is 0\.008% \(2/25,331, both re\-attributed as within\-source metadata\-gap pairs ⇒ genuine cross\-source 0/25,331; Cassidy et al\. 2022's recall\-tuned multi\-hash pipeline flags 14,310\); HyperKvasir and Kvasir\-SEG cross\-benches against CV2024 return 0 pairs \(procedure\-disjoint negative controls\)\. At the matched NCC ≥ 0\.99 endpoint, the CV2024 rate of 4\.66% \(540/11,581\) is ≈ 148–583× above the ISIC cross\-source rate \(Wilson\-lower / Wilson\-upper to point/point\)\.

## Kernelized Activation Steering

**Authors:** Laziz Abdullaev; Minh\-Hieu Pham; Bach Do; Khoat Than; Tan Nguyen

**ID:** 154267 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F4iCxDrUbU>) | [PDF](<https://openreview.net/pdf?id=F4iCxDrUbU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154267>)

Activation steering provides a simple, training\-free mechanism for controlling attributes of generative models \(e\.g\., sentiment, style, helpfulness\)\. However, standard approaches such as Difference\-in\-Means \(DiM\) apply a single input\-independent steering vector across all activations, limiting expressivity and ignoring the local structure of the activation space\. We propose Kernelized Activation Steering \(KAS\), a unifying framework that lifts activation steering into a reproducing kernel Hilbert space \(RKHS\)\. KAS formulates steering as an optimization problem expressed purely via kernel evaluations, yielding an implicit, activation\-dependent steering score without constructing explicit feature maps\. Unlike DiM, KAS induces locally adaptive steering: each activation is modified according to its relative position with respect to source and target reference sets, producing a nonlinear steering field over the representation space\. Importantly, DiM is recovered as a special case under a linear kernel, offering a principled interpretation of steering, while richer kernels \(e\.g\., RBF\) enable geometry\-aware interventions\. Across standard activation steering tasks, including jailbreaking LLMs and image style control, KAS consistently outperforms existing methods\.

## FlowTrack: Controlling Edit\-Signal Execution in Inversion\-Free Flow Video Editing

**Authors:** Jielun Zhong; Di Wang; Jisheng Dang; Leigang Qu; Bimei Wang; Jingwen Zhao; Wencan Zhang; Hong Peng; Bin Hu

**ID:** 152250 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=USNrqsbBWX>) | [PDF](<https://openreview.net/pdf?id=USNrqsbBWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152250>)

Text\-guided video editing requires applying a semantic change while keeping source motion, layout, and unchanged content stable\. Recent inversion\-free flow editors derive effective edit signals from target\-source velocity differences, yet typically inject these signals directly at each solver step\. In neural video sampling, however, this direct execution rule overlooks an important distinction: the velocity difference is an online, state\-dependent observation rather than a fixed endpoint\-displacement command\. As the target branch evolves under previous injections, direct injection may accumulate temporal fluctuations and off\-target perturbations, producing motion drift, identity flicker, or unintended changes in weak\-response regions\. We propose FlowTrack, a causal execution controller for inversion\-free flow video editing\. FlowTrack leaves the pretrained generator and raw edit signal unchanged, but executes the signal through a carried displacement\-like direction and response\-aware attenuation\. We derive this update as the closed\-form solution of a local execution objective that balances current signal tracking, temporal carrying, and weak\-response suppression\. On the full FiVE\-Bench protocol, FlowTrack improves motion fidelity, unedited\-region fidelity, and structure consistency over strong training\-free diffusion\- and flow\-based editors while maintaining competitive target\-prompt alignment\. Code is available at https://anonymous\.4open\.science/r/FlowTrack\.

## From Matching to Reasoning: Query\-Aware Long Video Summarization

**Authors:** Mingu Kang; Sumin Kim; Hyunjin Lee; Sungmin Yang; Yoori Oh; Joonseok Lee

**ID:** 155180 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7iNfz7RRVW>) | [PDF](<https://openreview.net/pdf?id=7iNfz7RRVW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155180>)

Query\-aware video summarization \(QVS\) aims to select a concise set of moments relevant to a textual query in the context of the entire video\. Existing QVS methods are often driven by local query\-segment relevance scoring, which is effective for retrieving query\-matching moments but insufficient for composing coherent summaries over long videos\. Long\-form QVS is especially challenging because query\-relevant evidence tends to be sparsely distributed across extended timelines, and satisfying a query may require combining complementary segments while avoiding redundancy under a strict summary budget\. We propose \*\*QLVSumm\*\*, a framework that autoregressively generates a query\-conditioned video summary, capturing inter\-segment dependencies as well as the saliency of the segment and relevance to the query\. We also introduce a large\-scale benchmark for long\-form QVS \(\*\*LQVS\*\*\) with open\-vocabulary queries and budget\-constrained extractive summaries, together with a complementary metric for evaluating query\-aware summary disentanglement\. Experiments show that QLVSumm achieves state\-of\-the\-art performance and demonstrates stronger query\-aware summary disentanglement\.

## CanvasMAR: Improving Masked Autoregressive Video Prediction With Canvas

**Authors:** Zian Li; Muhan Zhang

**ID:** 148170 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=znXlOaeZCI>) | [PDF](<https://openreview.net/pdf?id=znXlOaeZCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148170>)

Masked autoregressive models \(MAR\) have emerged as a powerful paradigm for image and video generation, combining the flexibility of masked modeling with the expressiveness of continuous tokenizers\. However, when sampling individual frames, video MAR models often produce highly distorted outputs due to the lack of a structured global prior, especially when using only a few sampling steps\. To address this, we propose CanvasMAR, a novel autoregressive video prediction model that predicts high\-fidelity frames with few sampling steps by introducing canvas—one\-step prediction of the future\-frame expectation that serves as a non\-uniform mask during masked generation\. The canvas supplies global structure early in sampling, enabling faster and more coherent frame synthesis\. To further stabilize autoregressive sampling, we propose an easy\-to\-hard curriculum via a motion\-aware sampling order that synthesizes stationary regions before attending to highly dynamic ones\. We also integrate compositional classifier\-free guidance that jointly strengthens the canvas and temporal conditioning to improve generation fidelity\. Experiments on the BAIR, UCF\-101, and Kinetics\-600 benchmarks demonstrate that CanvasMAR produces higher\-quality videos with fewer autoregressive steps\. On the challenging Kinetics\-600 dataset, CanvasMAR achieves remarkable performance among autoregressive models and rivals advanced diffusion models\.

## GeoWorld: A Geometry\-First World Model for Reconstruction and Imagination

**Authors:** Baicheng Li; Jialin Liu; Dong Wu; Weijian Xie; Zhichao Ye; Donghui Shen; Nan Wang; Guofeng Zhang; Haomin Liu; Hongbin Zha

**ID:** 148633 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wI49OV3byB>) | [PDF](<https://openreview.net/pdf?id=wI49OV3byB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148633>)

Large visual world models have become increasingly capable at synthesizing plausible views and camera trajectories, largely because they inherit strong priors from image and video diffusion\. Yet in robotics, spatial computing, AR anchoring, and digital twins, a world is useful only if it can be measured and acted upon: appearance plausibility cannot substitute for geometrically coherent structure\. This motivates a geometry\-native alternative, where the generative state is the feature space of a geometry foundation model rather than RGB pixels or an appearance latent\. Existing geometry\-space world models validate this direction, but they still occupy a narrow operating range\. When target views lie within observed support, full multi\-view interaction limits trajectory length; when observations become sparse, geometry\-only training lacks the broad visual priors needed to infer structure beyond observed support\. We present GeoWorld, a geometry\-latent world model that expands this range without returning generation to RGB space\. GeoWorld builds a compact geometry latent, conditions it with camera ray geometry, and uses camera\-aware tiered attention with relative pose bias to make long\-view denoising practical\. For sparse\-observation extrapolation, a Bridge module translates hidden states from a frozen camera\-conditioned video diffusion model into geometry\-latent conditioning, borrowing video priors without making the video model the scene generator\. Experiments show that GeoWorld scales geometry\-space diffusion to long camera trajectories while improving geometric consistency in prior\-assisted extrapolation\.

## PickMoment: Continuous\-Time Single\-Image\-to\-Video via Learning Deblurring and Blur\-to\-Video

**Authors:** Junseong Shin; Hyeonsu Jo; Daehyun Kim; Tae Hyun Kim

**ID:** 153056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OLVcmhgg5O>) | [PDF](<https://openreview.net/pdf?id=OLVcmhgg5O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153056>)

Motion blur arises from the temporal integration of a continuous sharp signal over a finite exposure window, yet existing learning\-based methods sidestep this physical model and predict only the sharp signal itself: most single\-image deblurring methods recover a single frame at the exposure center, while blur\-to\-video methods predict a fixed set of frames\.  We introduce PickMoment, a continuous\-time reformulation that directly learns the interval\-mean blur over arbitrary sub\-intervals of the exposure with a single deterministic model\.  Drawing an analogy to MeanFlow's average\-velocity formulation, we train the model with three supervisions derived from the blur integral: an empirical reconstruction loss from available subframes, an additivity loss that enforces self\-consistency across overlapping sub\-intervals, and a sharp\-frame loss anchored at the zero\-interval limit\.  A single trained model unifies single\-image deblurring, blur\-to\-video generation, and continuous\-time pick\-a\-moment recovery as different queries to the same network, with no separate training for each task\.  Our PickMoment achieves state\-of\-the\-art performance among generative\-based deblurring methods on GoPro and HIDE while competitive against restoration\-based methods on RealBlur, and the highest per\-frame fidelity on GoPro\-7 blur\-to\-video, all in a single forward pass without iterative sampling\.

## ReFlex: Faithful Panorama Reconstruction from a Single Image with Reflections

**Authors:** Yikai Pan; Zhiyuan Zhou; Yuxiang Yan; Xuetong Yang; Runhe Yang; Jian Pu

**ID:** 151635 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z78l73Ay0q>) | [PDF](<https://openreview.net/pdf?id=Z78l73Ay0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151635>)

Reflections reveal scene content beyond the camera's direct field of view, but faithfully recovering this hidden information is challenging as reflective observations are heterogeneous, incomplete, and physically modulated\. Existing methods either rely on explicit reflection modeling with privileged geometric priors or defer to generative synthesis that may hallucinate plausible but unfaithful content\. To address these challenges, we propose \\textbf\{ReFlex\}, an observation\-constrained framework that casts faithful panorama reconstruction as a controlled inverse problem\. We first develop an \\emph\{Observation\-Consistent Estimator\} with hierarchical token prediction and signed routing to integrate heterogeneous reflection cues while stabilizing global structure\. Subsequently, we propose a \\emph\{Reliability\-Guided Refiner\}, which estimates spatial reliability from token predictions and guides a frozen diffusion model to refine uncertain regions without overwriting observation\-supported structures\. To validate the effectiveness of ReFlex, we further build ReFlex\-Bench, a paired benchmark with 110,760 reflective RGB inputs and aligned target panoramas across diverse scenes, reflective geometries, and observation regimes\. Experiments show that ReFlex delivers superior reconstruction fidelity without normals, field\-of\-view annotations, masks, or other privileged information, and obtains the best performance on eight of nine downstream full\-view perception protocols\.

## Learning Motion\-Appearance Coupling Priors for Solving Video Inverse Problems

**Authors:** Anselm Krainovic; Reinhard Heckel

**ID:** 149636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=obAMFSJZhW>) | [PDF](<https://openreview.net/pdf?id=obAMFSJZhW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149636>)

Solving inverse problems on video requires priors over both frame appearance and temporal dynamics\. Many recent approaches combine pretrained image diffusion priors with motion guidance, sidestepping the costs of training large video models\. Temporal consistency is often enforced via photometric losses or warping\-based constraints, which implicitly assume that motion explains frame\-to\-frame or latent\-to\-latent changes up to small deviations, an assumption that fails under occlusions, lighting changes, and non\-rigid deformation\. In this paper, we propose to learn the coupling between motion and frame appearance as a generative prior\. We learn the distribution of motion\-induced appearance residuals with a conditional diffusion model and use it to regularize reconstruction in video inverse problems\. Our motion\-appearance prior acts as a plug\-in regularizer for diffusion\-based video reconstruction, preserving the benefits of image diffusion models while remaining compatible with existing appearance regularization techniques\. Experiments on dynamic video inverse problems show that, depending on the task, reconstruction with a learned motion\-appearance coupling prior matches or outperforms feature\-consistency and noise\-warping baselines\.

## The Surprising Effectiveness of Video Diffusion Models for Hand Motion Reconstruction

**Authors:** Yuxi Wang; Chengkai Jin; Yufei Liu; Wenqi Ouyang; Tianyi Wei; Zhiwei Zeng; Siyuan Huang; Zhiqi Shen; Xingang Pan

**ID:** 149266 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rbIH0DXMsW>) | [PDF](<https://openreview.net/pdf?id=rbIH0DXMsW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149266>)

4D hand motion reconstruction from egocentric video is bottlenecked by clear limitations of existing methods: image\-based pipelines depend on a detector that fails under heavy occlusion, while video\-based methods rely on temporal modules learned only from hand\-pose annotations, a signal too narrow to capture motion, occlusion, and hand\-object interaction\. These capabilities, however, are exactly what video generative models must implicitly acquire when trained to synthesize coherent video at internet scale\. Motivated by this, we present ViDiHand, which leverages the representations of a pretrained video diffusion model to reconstruct 4D two\-hand pose\. We adapt it via a hand\-overlay rendering objective that specializes its features for hands while preserving its world priors, and a decoder recovers metric\-scale pose from the adapted features\. The whole pipeline runs in a single forward pass over full frames—no detector, no infiller, and no test\-time optimization\. On ARCTIC, HOT3D, and HOI4D, ViDiHand substantially outperforms prior methods, establishing video diffusion models as a powerful new foundation for hand motion reconstruction and a promising route to scalable in\-the\-wild data collection for embodied AI\.

## ResFusion: Medical Image Fusion Driven by Implicit\-Forward Diffusion and Time\-aware Joint Optimization

**Authors:** Jiahua Xu; Dawei Zhou; Zhengkun Yu; Lei Hu; Lecong Xiong; Zaiyi Liu; Nannan Wang; Xinbo Gao

**ID:** 152030 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W44dmCYl89>) | [PDF](<https://openreview.net/pdf?id=W44dmCYl89>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152030>)

Standard training of diffusion models typically relies on a forward diffusion process anchored by ground\-truth target images\. However, in image fusion tasks, the scarcity of real fused images makes it difficult to formulate a forward process, thereby precluding the standard training\. Fortunately, our visual analysis reveals that image fusion can be effectively modeled without standard training or reliance on the real images\. Nevertheless, the misalignment of input image pairs remains a significant bottleneck for fusion quality\. Recognizing that one\-off registration is ill\-suited to the progressive generation of diffusion models, we propose a unified registration\-fusion framework driven by a time\-aware joint optimization mechanism\. Specifically, we design a time\-aware registration network to progressively optimize registration to guide fusion, while the fusion results provide feedback constraints to the registration network at each time step\. This mechanism facilitates joint optimization of registration and fusion, significantly improving the quality of fused results\. Experimental results show that the proposed method performs excellently on multiple datasets, validating its effectiveness and superiority\.

## LiFi: LiDAR Generation from Multi\-View Images via Geometric and Semantic Collaborative Guidance

**Authors:** Sizhuo Zhou; Xiaosong Jia; Fanrui Zhang; Qifeng Li; Junjie Li; Zirui Wang; Yukang Feng; Yu Hong; Shaofeng Zhang; Wenlong Liao; Tao He; Juyong Zhang; Junchi Yan

**ID:** 154275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F2uVwqvVoZ>) | [PDF](<https://openreview.net/pdf?id=F2uVwqvVoZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154275>)

Generating LiDAR point clouds from multi\-view camera images is a valuable task with applications in controllable data synthesis, cross\-modal simulation and various perception tasks\. However, most existing methods are not specifically designed for this task, and the quality of their generated LiDAR remains limited\. Moreover, these methods typically focus only on semantic cues in images or generate LiDAR from a monocular camera image\. In this work, we introduce LiFi, a dedicated framework for generating visually and geometrically aligned LiDAR scenes from multi\-view camera images\. LiFi guides the latent diffusion process through two complementary branches: geometry and semantics\. The geometry branch constructs scene features from images through a reverse sampling algorithm and an uncertainty\-aware geometric encoder combined with DepthAnything3, whereas the semantic branch provides high\-level semantic representations via a cross\-view interaction module\. We further introduce a dual\-branch balanced classifier\-free guidance \(CFG\) strategy, which enhances the model’s conditional generation capability while preserving the independent learning and collaborative controllability of the two branches\. Extensive experiments demonstrate that LiFi outperforms state\-of\-the\-art methods in generating high\-fidelity LiDAR scenes\. We will make this project publicly available\.

## PaperLens: How Predictable Is Paper Acceptance?

**Authors:** Sachin Konan; Jonathan Liu; Zhuang Liu

**ID:** 154867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJ2gyvFOF9>) | [PDF](<https://openreview.net/pdf?id=AJ2gyvFOF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154867>)

Peer review is sometimes seen as noisy and difficult to predict\. How much of the final accept/reject decision is recoverable from the paper itself? We investigate this question with PaperLens, text and vision models trained to predict binary acceptance from anonymized paper artifacts\. For a clean evaluation, we construct balanced, shortcut\-controlled OpenReview and source\-derived arXiv datasets that remove deanonymization artifacts and majority\-class shortcuts\. Supervised binary decision training is surprisingly strong\. PaperLens outperforms frontier prompting and review\-trained baselines on decision accuracy and ranking, while its acceptance probability remains well calibrated after validation\-set scaling and correlates better to ratings than baselines\. Vision consistently improves over markdown text, showing that layout, figures, and visual presentation carry reviewer\-relevant signal\. Scaling from 3B to 14B parameters yields only modest gains, with clean supervision and faithful paper representations mattering more than model size\. Together, our results show that decision prediction provides a powerful signal for paper assessment and can even improve the alignment of AI reviewing agents\.

## Static\-to\-Dynamic: Animating Still Mattes via Generative Motion for Video Matting

**Authors:** Suqi Song; Jiaqi Xu; Jialuo He; Renjing Pei; Lei Chen; Lei Zhu

**ID:** 152803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QGTLErB1Eo>) | [PDF](<https://openreview.net/pdf?id=QGTLErB1Eo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152803>)

Video matting is essential for high\-precision foreground extraction, yet its development is constrained by the scarcity of diverse annotated training data\. To address this, we propose Static\-to\-Dynamic \(S2D\), a novel generative paradigm that scales video matting data by animating still labeled images into high\-fidelity video\-matte pairs\. Starting from a static image\-matte pair, S2D leverages an image\-to\-video generative model to synthesize realistic motion and scene dynamics, while simultaneously producing pseudo alpha labels from generative priors\. Specifically, we introduce Latent Matte Propagation \(LMP\), which propagates the first\-frame matte to subsequent generated frames via the attention mechanisms in the diffusion transformer\. We further design a Coarse\-to\-Fine Matte Decoder to recover pixel\-level alpha details from compressed latent representations using multi\-scale generative features\. Based on this paradigm, we build S2D\-VM, a large\-scale dataset containing 14K high\-fidelity paired video clips\. We also propose a Self\-Corrected Progressive Training strategy to mitigate pseudo\-label noise during optimization\. Experiments show that S2D effectively scales video matting data and consistently improves the performance of existing models across multiple benchmarks\.

## Velocity\-Space 3D Asset Editing

**Authors:** Hao Liu; yuxuan lin; jingfeng Guo; Ruihang Chu; junjie wang; Ruotong Li; Yujiu Yang

**ID:** 148308 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yoa8hWDC5H>) | [PDF](<https://openreview.net/pdf?id=yoa8hWDC5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148308>)

Editing a 3D asset locally, modifying a target region while preserving the rest, is a fundamental requirement of native 3D editing\. Existing methods enforce locality through mechanisms external to the generator, such as manual 3D masks, post\-hoc voxel merging, or 2D multi\-view lifting\. None of them intervene where the corruption actually originates: inside the ODE sampler\. For a rectified\-flow generator to achieve faithful local editing, its velocity field should be strong over the target editing region while vanishing on preserved content\. Yet a single velocity field can hardly satisfy both requirements simultaneously, leading to three problems: \(i\) identity leakage that keeps the edit signal non\-zero on preserved regions; \(ii\) no dedicated edit\-amplification channel, so strengthening the edit inevitably perturbs identity; and \(iii\) an identity drag at the geometry and material stages, where a global condition pulls every token toward the target\. We propose VS3D \(Velocity\-Space 3D Asset editing\), an inversion\-free, training\-free, and mask\-free framework that addresses each problem with a targeted intervention inside the sampler\. VS3D integrates three complementary modules, each corresponding to a specific stage of the editing pipeline\. Reconstruction\-Anchored Source Injection \(RASI\) absorbs identity leakage by turning the unconditional embedding into a per\-step, asset\-specific anchor calibrated through source reconstruction\. Partial\-Mean Guidance \(PMG\) amplifies the edit signal by contrasting high\- and low\-quality subsample estimates of the velocity difference, active only where a consistent edit exists\. Twin\-Agreement Residual injection \(TAR\) lets the sampler decide token by token what to preserve at the geometry and material stages\. Experiments on diverse 3D assets show that VS3D outperforms state\-of\-the\-art native\-3D and 2D\-lifted editors, demonstrating that a purely velocity\-space approach can serve as a general\-purpose editing paradigm for pretrained 3D generators\.

## Video\-Zero: Self\-Evolution Video Understanding

**Authors:** ruixu zhang; Deyi Ji; Lanyun Zhu; Xuanyi Liu; Yuxin Meng; Ruihang Chu; Yujiu Yang

**ID:** 151423 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aoXXt7fcDl>) | [PDF](<https://openreview.net/pdf?id=aoXXt7fcDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151423>)

Self\-evolution offers a promising path for improving reasoning models without relying on intensive human annotation\.  However, extending this paradigm to video understanding remains underexplored and challenging: videos are long, dynamic, and redundant, while the evidence needed for reasoning is often sparse and temporally localized\.  Naively generating difficult question\-answer pairs from full videos can therefore produce supervision that appears challenging but is weakly grounded, relying on static cues or language priors rather than temporal evidence\.  In this work, we argue that the key bottleneck of video self\-evolution is not difficulty alone, but grounding\.  We propose \\textbf\{Video\-Zero\}, an annotation\-free Questioner\-\-Solver co\-evolution framework that centers self\-evolution on temporally localized evidence\.  The Questioner discovers informative evidence segments and generates evidence\-grounded questions, while the Solver learns to answer and align its predictions with the supporting evidence\.  This closes an iterative loop of evidence discovery, grounded supervision, and evidence\-aligned learning\.  Across 13 benchmarks spanning temporal grounding, long\-video understanding, and video reasoning, Video\-Zero consistently improves multiple video VLM backbones, demonstrating the effectiveness and transferability of evidence\-centered self\-evolution\. Code and models will be made publicly available\.

## FlashRelight: Portrait Video Relighting with Dynamic Lighting

**Authors:** Jiahui Sheng; Le Li; Limin Lin; Jiahao Li; Wansen Feng; Hong Gu; Shuhan Chen; Xiaorun Li; Rui Hu

**ID:** 153615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K4Vqa2QXge>) | [PDF](<https://openreview.net/pdf?id=K4Vqa2QXge>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153615>)

Portrait video relighting aims to modify the illumination of a portrait video while preserving photorealism and temporal stability\. The task becomes particularly challenging under dynamic lighting, where illumination direction, intensity, and color vary over time\. To tackle this problem, we introduce FlashRelight, a novel two\-stage framework for dynamic portrait video relighting\.  FlashRelight first suppresses the source illumination through delighting, and then synthesizes the target dynamic lighting on an illumination\-neutral portrait video\.  FlashRelight supports three complementary control modalities: envmap sequences for explicit frame\-level lighting control, dynamic lighting text for semantic illumination editing, and lighting reference videos for visual lighting transfer\.  Training follows a low\-cost hybrid strategy that combines static one\-light\-at\-a\-time \(OLAT\) data with generated dynamic\-lighting portrait videos, covering both controlled illumination variation and realistic portrait motion\.  Extensive experiments show that FlashRelight achieves temporally coherent and photorealistic dynamic relighting while enabling flexible cross\-video lighting transfer\.

## Accelerating Video Inverse Problem Solvers with Autoregressive Diffusion Models

**Authors:** Taesung Kwon; Jonghyun Park; Hyungjin Chung; Jong Chul Ye

**ID:** 151472 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aLw0wVmMRl>) | [PDF](<https://openreview.net/pdf?id=aLw0wVmMRl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151472>)

Diffusion models provide powerful priors for zero\-shot video inverse problems, but their real\-time deployment is hindered by two inefficiencies: high initial latency caused by holistic video restoration, and low throughput resulting from multiple VAE passes to enforce measurement consistency in pixel space\. To overcome these limitations, we propose Autoregressive Video Inverse problem Solver \(AVIS\)\. The AVIS framework leverages autoregressive video diffusion models to restore videos in a streaming manner, naturally eliminating latency bottlenecks\. Specifically, AVIS initializes reverse diffusion with a measurement\-consistent estimate, reducing the required sampling steps\. Compared to leading non\-autoregressive solvers, AVIS drastically reduces initial latency from 114s to 4s and increases throughput from 0\.71 to 1\.18 FPS while achieving superior restoration quality\. We further introduce a highly accelerated variant, dubbed AVIS \*Flash\*, that enforces measurement consistency solely on the \*first\* chunk\. AVIS \*Flash\* substantially boosts throughput to 5\.91 FPS on a single RTX 4090 GPU while maintaining competitive performance and achieving a favorable efficiency–performance trade\-off, paving the way toward real\-time deployment\.

## Articulation in Prime: Primitive\-Based Articulated Object Understanding from a Single Casual Video

**Authors:** Arslan Artykov; Tom Ravaud; Nicolás Violante; Vincent Lepetit

**ID:** 154376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E1IZTqQCz0>) | [PDF](<https://openreview.net/pdf?id=E1IZTqQCz0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154376>)

Retrieving the 3D kinematics of articulated objects from monocular video is a fundamental challenge in computer vision\. Existing methods rely on complex video setups or cues such as long\-term point tracking or wide\-baseline matching, but are frequently brittle under severe occlusions, rapid camera ego\-motion, or weak local features\. Learning\-based methods, meanwhile, struggle to generalize beyond their training categories\. We propose a category\-agnostic optimization framework that treats articulated object understanding as a primitive\-fitting problem\. Geometric primitives serve as a proxy representation that avoids the pitfalls of unstable point tracks; a novel mechanism organizes them into coherent parts constrained by revolute and prismatic joints\. Our formulation jointly optimizes part segmentation and joint parameters, recovering complex kinematics from a single casually captured video\. A visibility\-aware procedure handles partial observations and occlusions inherent to real\-world data\. We also propose the AiP\-synth and AiP\-real benchmarks, featuring significant camera motion and heavy occlusions, and outperform existing methods\.

## Diagnosing and Correcting Bias in MLLM for Long Video Understanding

**Authors:** Xusheng Liang; Jianqiao Sun; Hao Zhang; Yulei Niu; Hengshuang Zhao; Jiawei Ma

**ID:** 154288 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EtgXlsMo0V>) | [PDF](<https://openreview.net/pdf?id=EtgXlsMo0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154288>)

Long\-video question answering is challenging since the answer often hinges on a few decisive moments scattered throughout the video, while memory constraints force Multimodal Large Language Models \(MLLMs\) to sample frames at extremely low rates, resulting in extreme sparsity that risks omitting key evidence\. Though aggressively enlarging the context size is intuitive, we argue that performance remains fundamentally constrained by the bias, $\\textit\{i\.e\.\}$, the misleading cues caused by spurious linguistic correlations and salient yet irrelevant visual observations\. In this paper, we first introduce S\-MME, a benchmark designed to systematically diagnose shortcut\-biased behavior in MLLMs\. To mitigate this failure, we further propose a training\-free framework, Counterfactual Long\-video Evidence\-Aware Reasoning \(CLEAR\)\. By treating the full video\-question pair as a complete view, CLEAR estimates bias effects via other views by only keeping the question or locally salient visual clips\. Then, we apply hidden\-state intervention to mitigate the discrepancy at inference such that the correct answer can be predicted confidently\. With experimental studies across multiple benchmarks, we show that our method is generalizable and can be integrated in different MLLMs, yielding consistent gains in prediction and robustness\. We hope CLEAR can offer a complementary direction in test\-time scaling for long\-video understanding and will publish code\.

## Early Failure Detection and Intervention in Video Diffusion Models

**Authors:** Byungki Kwon; Sohwi Lim; Nam Hyeon\-Woo; Moon Ye\-Bin; Tae\-Hyun Oh

**ID:** 151719 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbCJPGk7pI>) | [PDF](<https://openreview.net/pdf?id=YbCJPGk7pI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151719>)

Text\-to\-video \(T2V\) diffusion models have rapidly advanced, yet generations still occasionally fail in practice, such as low text\-\-video alignment or low perceptual quality\. Since diffusion sampling is non\-deterministic, it is difficult to know during inference whether a generation will succeed or fail, incurring high computational cost due to trial\-and\-error regeneration\. To address this, we propose an early failure detection and diagnostic intervention pipeline for latent T2V diffusion models\. For detection, we design a Real\-time Inspection \(RI\) module that converts latents into intermediate video previews, enabling the use of established text–video alignment scorers for inspection in the RGB space\. The RI module completes the conversion and inspection process in just 39\.2 ms\. This is significantly efficient considering that CogVideoX\-5B requires 4\.3s per denoising step when generating a 480p, 49\-frame video on an NVIDIA A100 GPU\. Subsequently, we trigger a hierarchical and early\-exit intervention pipeline only when failure is predicted\. Experiments on CogVideoX\-5B and Wan2\.1\-1\.3B demonstrate consistency gains on VBench with up to 2\.64x less time overhead compared to post\-hoc regeneration\. Furthermore, our pipeline is plug\-and\-play and orthogonal to existing techniques, showing seamless compatibility with prompt refinement and sampling guidance methods\. We also provide evidence that failure signals emerge early in denoising process and are detectable within intermediate video previews using standard vision\-language evaluators\.

## Noise\-Regularized Training for Learned Image Compression

**Authors:** Renjie Zou; Zhiwei Huang; Dong Jiang

**ID:** 152186 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UuyALisAVj>) | [PDF](<https://openreview.net/pdf?id=UuyALisAVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152186>)

Learned image compression \(LIC\) is trained almost exclusively on clean images: the only stochastic perturbation in the loop is an additive uniform proxy injected in the latent domain to keep the entropy model differentiable\. Outside compression, by contrast, a long line of work \- from Tikhonov regularization and contractive autoencoders through denoising score matching and modern diffusion models \- has established that Gaussian noise at the input of a network with a clean target acts as a structured probe of the data manifold rather than as data augmentation\. Building on this view, we introduce noise\-regularized training for LIC: at every training step we add Gaussian noise to the encoder input while keeping the distortion target, the latent uniform proxy, the hyperprior, and the entropy coding pipeline unchanged\. The recipe is architecture\-agnostic and adds essentially no training or inference overhead\. Across backbones and operating regimes it yields consistent BD\-Rate gains: \-2\.60% on a reproduced ELIC and \-0\.85% / \-1\.05% / \-2\.38% on the Base/Medium/Large scales of a variable\-rate DMCI codec, with DMCI\-Large reaching \-22\.02% against VTM\-22\.0\. A second\-order expansion of the noisy RD loss accounts for these gains: because the noise enters upstream of the analysis transform, it converts the clean RD objective into a structured $O\(\\sigma^\{2\}\)$ regularizer comprising an information\-weighted encoder\-Jacobian penalty \(rate side\) and a Frobenius contractive penalty on the end\-to\-end reconstruction map \(distortion side\)\. A finite\-difference Lipschitz analysis verifies both predictions: across QPs and an order\-of\-magnitude sweep of the probe scale, the encoder's local Lipschitz constant drops by \~12% on average and that of the end\-to\-end codec by \~8%\. Code and trained models will be released to facilitate reproducibility\.

## PercepCap: Video Captioner with Structured Spatio\-Temporal Perception

**Authors:** Yifan Xu; Wang Zihao; Zhixiao Wang; Jiaming Zhang; Yichun Yang; Desen Meng; Yuanxing Zhang; Pengfei Wan; Limin Wang

**ID:** 150126 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kU5dBalt2j>) | [PDF](<https://openreview.net/pdf?id=kU5dBalt2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150126>)

Video captioning requires fine\-grained spatio\-temporal understanding of videos, including spatial perception of where objects are located and temporal perception of when events occur\. Existing Multi\-modal Large Language Models \(MLLMs\) usually generate captions directly from video inputs without exposing the perceptual evidence behind their descriptions\. As a result, object, event, or temporal mistakes are only observed in the final text, making it difficult to identify the underlying perceptual errors or optimize them directly\. To address these issues, we present PercepCap, a perception\-aware video captioning framework that makes perceptual evidence explicit before producing the final caption\. Specifically, PercepCap follows a perceive\-describe generation chain, where the model first produces a spatio\-temporal perception trace comprising object trajectories and temporal events according to the video, and then generates the final caption conditioned on the perceived evidence\. To support this new generation paradigm, we design a two\-stage training strategy for PercepCap\. Perceive\-then\-Describe Supervised Fine\-tuning \(PD\-SFT\) adapts the model from caption\-only generation to the proposed perceive\-describe chain, while Perception\-Grounded Reinforcement Learning \(PG\-RL\) further optimizes perception trace and caption quality with joint rewards over object tracking, temporal event, and object/action description coverage\. Caption\-Anchored Perception Data Construction builds this supervision by first generating a caption\-only description, extracting the objects and events it mentions, and grounding them back in the video with boxes and timestamps\. This yields caption\-aligned perception data that provides both SFT supervision and RL references, ensuring that the explicit perception trace and final caption describe the same objects and events\. Across direct caption evaluation such as DREAM\-1K, CaReBench and VidCapBench and caption\-to\-QA evaluation like ShortVidBench and MotionBench\. PercepCap consistently improves the Qwen3\-VL baseline and achieves leading open\-source caption quality\.

## AEGIS: Adaptive Efficient Generative Inference Scheduling for Structured Latent Models

**Authors:** Haoqi Ruan; Ruihan Hu; XinruiCheng; Ziyi Zhong; Zhaodong Zhang; Wenqi Wang; Xuheng Zhang

**ID:** 155172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7kUytwtf6g>) | [PDF](<https://openreview.net/pdf?id=7kUytwtf6g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155172>)

Diffusion and flow\-matching models have become the dominant paradigm for high\-fidelity generation across images, video, and 3D content\. However, acceleration methods that work well in image or video often fail to preserve 3D geometric consistency, while existing 3D inference approaches still rely on fixed reuse schedules and cannot adapt computation to instance difficulty or trajectory\-specific demands\. We propose AEGIS, a training\-free framework that reframes test\-time acceleration as quality\-constrained budget allocation solved by an online feedback rule\. AEGIS maintains a two\-dimensional runtime state that tracks sample difficulty and accumulated correction debt, and turns it into per\-step skip and refresh quotas that any cache\-style executor can realize\. It generalizes the corresponding open\-loop schedule and provides an explicit upper bound on cumulative reuse drift\. Extensive experiments show that AEGIS improves inference efficiency while better balancing throughput and quality\.

## Rethinking Infrared Small Target Detection: A Foundation Driven Efficient Paradigm

**Authors:** Chuang Yu; Jinmiao Zhao; Yunpeng Liu; Yaokun Li; Xiujun Shu; Yuanhao Feng; Bo Wang; Xiangyu Yue

**ID:** 152731 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qn0yKoTwqF>) | [PDF](<https://openreview.net/pdf?id=Qn0yKoTwqF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152731>)

While large\-scale visual foundation models \(VFMs\) exhibit strong generalization across diverse visual domains, their potential for infrared small target \(SIRST\) detection remains largely unexplored\. To fill this gap, we systematically introduce frozen VFM representations into the SIRST task and propose a Foundation\-Driven Efficient Paradigm \(FDEP\), a general framework compatible with diverse VFMs and SIRST networks, which improves detection accuracy without additional VFM\-related inference overhead\. Specifically, a Semantic Alignment and Modulated Fusion \(SAMF\) module is designed to achieve dynamic alignment and deep fusion of the global semantic priors from VFMs with task\-specific features\. Meanwhile, to avoid the inference\-time overhead introduced by VFMs, we propose a Collaborative Optimization\-based Implicit Self\-Distillation \(CO\-ISD\) strategy, which enables implicit semantic transfer between the main and lightweight branches through parameter sharing and synchronized backpropagation\. In addition, to unify the fragmented evaluation system, we construct a Holistic SIRST Evaluation \(HSE\) metric that performs multi\-threshold integral evaluation at both pixel\-level confidence and target\-level robustness, providing a stable and comprehensive basis for fair model comparison\. Extensive experiments demonstrate that the SIRST detection networks equipped with our FDEP framework achieve state\-of\-the\-art \(SOTA\) performance on multiple public datasets\. Our code will be open source\.

## Read, Parse, Describe: Unified Document Parsing with Visual Element Description Generation

**Authors:** Yuheng Chen; Yufan Chen; Zhuojun Cai; Ruiping Liu; Junwei Zheng; Jiale Wei; Di Wen; Weijia Fan; Kunyu Peng; Jiaming Zhang; Rainer Stiefelhagen

**ID:** 151079 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d7ESmF9Jud>) | [PDF](<https://openreview.net/pdf?id=d7ESmF9Jud>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151079>)

Document understanding systems are typically evaluated as separate components via layout analysis, optical text recognition, reading\-order prediction, and image captioning\. This separation leaves scientific figures, captions, and visual semantics weakly connected, and fails to measure whether a model can produce a single page\-level parse that is both structurally faithful and semantically accessible\. We introduce Read\-Parse\-Describe, a unified dataset for document parsing with visual element description generation\. Given a page image, models are required to output an ordered list of layout elements containing bounding boxes, semantic labels, reading\-order indices, recognized textual content, and alternative text descriptions for visual elements\. The benchmark is built from 2,402 documents, comprising 18,164 continuous pages, 125,218 layout elements, and 11,338 visual instances\. Besides, we further propose a plug\-and\-play space\-awareness enhancer that reuses multi\-layer visual features and injects grid\-aware spatial guidance into vision\-language tokens for layout\-aware generation\. Experiments across end\-to\-end VLMs and pipeline parsers show that existing systems still struggle to jointly recover reading order and visual semantics, while our enhanced model achieves strong joint performance\. These results highlight the need to move beyond isolated document parsing modules toward unified models that jointly read, parse, and describe complex documents\.

## Discovering dynamical parameters of synthetic multicellular systems from image sequences

**Authors:** Corey Herr; Cedric Allier; Stephan Saalfeld; Allyson E\. Sgro

**ID:** 151338 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bIXzVO77Lc>) | [PDF](<https://openreview.net/pdf?id=bIXzVO77Lc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151338>)

Cells in multicellular systems have complex shapes, yet most techniques for predicting biological dynamics from image sequences discard shape information by reducing cells to point particles\. Here, we present a framework that moves beyond point representations by learning dynamic, shape\-aware representations of synthetic cells in a multicellular collective directly from 2D time\-series images\. Specifically, our GraphDINO framework combines a frozen DINOv3 backbone for shape representation with a graph neural network trained through next\-frame prediction\. GraphDINO learns a per\-cell latent representation that captures underlying cellular properties such as growth rate, membrane tension, and cell\-cell adhesion without parameter supervision\. The quality of this recovery depends on the encoder, with DINOv3 features providing a better shape representation than classical shape encoders\. Together, these results demonstrate that combining foundation model features with graph\-based interaction rules allows the discovery of key dynamical parameters that govern cellular behavior, directly from image sequences\.

## Pinpoint: Grounded Worldwide Image Geolocation via Cross\-Source Retrieval and Reranking

**Authors:** Nika Chuzhoy; Brian Hu; Amit A Arora; Jae Ro; Sarthak Sahu

**ID:** 152393 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TQXy8E3sv0>) | [PDF](<https://openreview.net/pdf?id=TQXy8E3sv0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152393>)

Image geolocation aims to estimate where a photograph was taken from its visual content\. At worldwide scale, this remains challenging  because visual evidence is often ambiguous, diverse, and unevenly distributed\. Prior work has typically treated geolocation of ordinary internet photos and street\-view imagery as separate tasks, despite their complementary strengths: internet photos better match the appearance distribution of user\-captured queries, while street\-view imagery provides denser, geographically grounded coverage\. We present Pinpoint, a retrieve\-and\-rerank architecture that combines both sources in a coarse\-to\-fine pipeline\. A contrastive image\-GPS embedder is trained on both user\-uploaded Flickr photos and street\-view imagery, learning a shared image\-GPS embedding space that is used to retrieve candidate locations\. An attention\-based reranker then rescores retrieved candidates by combining candidate\-level visual and GPS features with cross\-source evidence from nearby locations to ground the prediction\. Unlike recent prior work, Pinpoint does not rely on multimodal large\-language models, making inference faster and more reproducible\. Pinpoint achieves state\-of\-the\-art results across all metrics on standard benchmarks for internet photos \(IM2GPS3k and YFCC4k\) and street\-view imagery \(OSV\-5M\)\.

## FashionChameleon: Towards Real\-Time and Interactive Human\-Garment Video Customization

**Authors:** Quanjian Song; Yefeng Shen; Mengting Chen; Hao Sun; Jinsong Lan; Xiaoyong Zhu; Bo Zheng

**ID:** 149237 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ru7qDMOTdU>) | [PDF](<https://openreview.net/pdf?id=ru7qDMOTdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149237>)

Human\-centric video customization, particularly at the garment level, has shown significant commercial value\. However, existing approaches cannot support low\-latency and interactive garment control, which is crucial for applications such as e\-commerce and content creation\. This paper studies how to achieve interactive multi\-garment video customization while preserving motion coherence using only single\-garment video data\. We present FashionChameleon, a real\-time and interactive framework for human\-garment customization in autoregressive video generation, where users can interactively switch garment during generation\. FashionChameleon consists of three key techniques: \(i\) Instead of training on multi\-garment video data, we train a Teacher Model with In\-Context Learning on a single reference–garment pair\. By retaining the image\-to\-video training paradigm while enforcing a mismatch between the reference and garment image, the model is encouraged to implicitly preserve coherence during single\-garment switching\. \(ii\) To achieve consistency and efficiency during generation, we introduce Streaming Distillation with In\-Context Learning, which fine\-tunes the model with in\-context teacher forcing and improves extrapolation consistency via gradient\-reweighted distribution matching distillation\. \(iii\) To extend the model for interactive multi\-garment video customization, we propose Training\-Free KV Cache Rescheduling, which includes garment KV refresh, historical KV withdraw, and reference KV disentangle to achieve garment switching while preserving motion coherence\. Our FashionChameleon uniquely supports interactive customization and long\-video extrapolation, while achieving real\-time generation at 23\.8 FPS on a single GPU, 30\-180$\\times$ faster than existing baselines\.

## Beyond Single Expert: Harmonizing Diverse Visual Priors in MLLMs for Spatial Understanding

**Authors:** XIAO LIN; Xiaohu Huang; Kai Han

**ID:** 150326 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iy3I2l9nX3>) | [PDF](<https://openreview.net/pdf?id=iy3I2l9nX3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150326>)

Multimodal Large Language Models \(MLLMs\) have demonstrated substantial promise in spatial understanding\. Existing works typically incorporate prior knowledge extracted from a pre\-trained foundation model to further enhance the spatial awareness of MLLMs\. In this paper, we first reveal that when integrating diverse foundation models into MLLMs, each model provides complementary spatial priors that benefit different tasks\. Motivated by this, we propose $\\textbf\{ViPS\}$, a novel multi\-model prior framework designed to fully unleash the potential of incorporating multiple $\\textbf\{Vi\}$sual $\\textbf\{P\}$riors from diverse models into MLLMs for $\\textbf\{S\}$patial understanding\. Specifically, ViPS introduces an Efficient Prior Proxy to generate multiple foundational priors with minimal inference overhead, and a Dynamic Prior Fusion mechanism to achieve harmonious and context\-aware prior fusion and injection from the prior proxies\. Extensive experiments demonstrate that ViPS successfully harmonizes diverse visual priors, establishing new state\-of\-the\-art performance across multiple complex spatial reasoning and 3D spatial understanding benchmarks\.

## LAION\-BVD: A 10\-Million\-Hour Open Video Dataset for Multimodal Pre\-training

**Authors:** Andreas Hochlehnert; Marianna Nezhurina; Mehdi Cherti; Andrej Radonjic; Thaddäus Wiedemer; Christoph Schuhmann; Romain Beaumont; Wieland Brendel; Bernhard Schölkopf; A\. Sophia Koepke; Jenia Jitsev; Matthias Bethge

**ID:** 139546 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Je8i8HBecl>) | [PDF](<https://openreview.net/pdf?id=Je8i8HBecl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139546>)

We present LAION\-BVD \(LAION \- Big Video Dataset\), a large\-scale open video dataset for multimodal learning, containing \_1\.3B platform\-specific video URLs\_ collected from CommonCrawl\. From these, we download 80M videos with a total duration of \_10 million hours\_\. The dataset is designed for multimodal pre\-training across video, audio, and image modalities\. Using content\-aware scene detection we extract clips for which we synthetically generate video and audio captions\. Models trained on these data achieve competitive performance on standard video\-text and audio\-text benchmarks, with consistent improvements as training or model scale increases\. Additionally, we explore video frames as a new source of image\-text data by extracting scene\-changing frames\. These frames exhibit a visual distribution distinct from standard web image corpora, and models trained on this dataset achieve strong image\-text retrieval performance\. Overall, LAION\-BVD significantly expands open access to multimodal videos at unprecedented scale and will be released to the research community for multimodal research

## Random features for Grassmannian kernel approximation with bounded rank\-one projections

**Authors:** Remi Delogne; Laurent Jacques

**ID:** 156786 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wq18dZJ2pA>) | [PDF](<https://openreview.net/pdf?id=wq18dZJ2pA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156786>)

We propose a family of random feature maps for scalable kernel machines defined over low\-dimensional subspaces in high dimensions, i\.e\. over the Grassmannian manifold\. This is typically useful in a machine learning context when data classes or clusters are well represented by the span of a few data points\. Classical Grassmannian kernels such as the projection or Binet–Cauchy kernels require constructing full Gram matrices for practical applications, leading to prohibitive computational and memory costs for large subspace datasets in high dimensions\. We address this limitation by computing specific random features of subspaces\. These combine random rank\-one projections of the subspace projection matrices with bounded non\-linear transforms—periodic or binary—to tame the resulting heavy\-tailed distribution\.

We show that, in the random feature space, inner products approximate well\-defined, rotation\-invariant Grassmannian kernels, i\.e\. depending only on the principal angles of the considered subspaces\. Provided the number of random features is large compared to the subspace intrinsic dimension, we show that this approximation holds uniformly over all subspaces of fixed dimensions with high probability\. 

When the non\-linear transform is periodic, the approximated kernel admits a closed\-form expression with a tunable behaviour bridging inverse Binet–Cauchy and Gaussian\-type regimes, while the binarised feature has no known closed\-form kernel but lends itself to even more compactly represented one\-bit subspace features\. 

Moreover, we show how structured rank\-one projections, leveraging randomised fast Fourier transforms, further reduce the random feature computational complexity without sacrificing accuracy in practical experiments\. We demonstrate the practicality of these techniques with synthetic experiments and classification tasks on the ETH\-80 dataset representing visual object images from different viewpoints\. The proposed random features recover Grassmannian geometry with high accuracy while reducing computation, memory, and storage requirements\. This demonstrates that rank\-one embeddings offer a practical and scalable alternative to classical Grassmannian kernels\.

## Seed\-Your\-Motion: Householder Orthogonal Noise for Motion\-Controllable Video Diffusion Models

**Authors:** Tao Jun Lin; Jinhong Ni; Ruyi Zha; Yifu Wang; Xibin Song; Pan Ji; Hongdong Li

**ID:** 150697 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gBQls8hssQ>) | [PDF](<https://openreview.net/pdf?id=gBQls8hssQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150697>)

Diffusion\-based video generation has achieved impressive visual fidelity, yet enforcing temporally consistent motion under explicit control signals remains challenging\. Recent noise\-warping approaches construct temporally correlated noise by transporting the initial latent noise via diffeomorphic deformation fields derived from optical flow, but this spatial resampling inherently destroys the i\.i\.d\. Gaussian structure of the noise, requiring post\-hoc correction steps at the cost of non\-trivial computational overhead\.  We propose \\textbf\{Seed\-Your\-Motion\}, by conditioning the a priori latent noise on optical flow via per\-location orthogonal transformations in latent channel space, parameterized as products of the Householder Transformation\.  This channel\-space formulation has an advantage of preserving the spatial Gaussianity exactly by construction, requiring neither Jacobian corrections nor post\-hoc distribution restoration, while at the same time inducing structured cross\-frame correlations that ensures geometric consistency across time\.  With no learnable parameters and a single forward pass, our method is agnostic to model architecture and can be plugged seamlessly into any video diffusion fine\-tuning pipeline\.  Extensive experiments on motion\-transfer and camera\-controlled video generation benchmarks demonstrate that our method matches or outperform the state\-of\-the\-art noise\-warping baseline, while achieving a 2\.7× speedup in processing time\. The results suggest that the channel\-space Householder transformations provide a principled and efficient alternative to noise\-warping based motion\-controllable video diffusions\.

## Sequence\-to\-Sequence Modeling with Camera\-Induced Priors for Multi\-View Stereo

**Authors:** Aoxiang Fan; Corentin Dumery; Nicolas Talabot; Pascal Fua

**ID:** 152093 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VYsvm6wbZr>) | [PDF](<https://openreview.net/pdf?id=VYsvm6wbZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152093>)

Computing accurate geometry from multi\-view images is a fundamental problem in computer vision\. In this work, we address the Multi\-View Stereo \(MVS\) setting, where camera parameters are assumed to be known\. Most existing learning\-based methods rely on per\-view cost volumes as a camera\-induced prior, effectively casting the problem as a sequence\-to\-one mapping that predicts depth only for a designated reference view\. We instead reformulate MVS as a sequence\-to\-sequence task, enabling the simultaneous prediction of depth maps and point maps for all input views\. To this end, we propose a global transformer\-based architecture with two key components that explicitly utilize camera\-induced priors\. First, we employ ray\-map embeddings to inject camera parameters into image patch tokens, making the transformer architecture camera\-aware for geometry prediction\. Second, we replace conventional per\-view cost volumes with a unified global cost\-volume representation that jointly captures 3D structure across all views\. Extensive experiments on multiple public benchmarks demonstrate that our approach achieves state\-of\-the\-art performance, surpassing both multi\-view stereo and feed\-forward reconstruction baselines\.

## VisEditBench: A Benchmark for Vector\-Format Diagram Editing with Visual Instructions

**Authors:** Akito Taneguchi; Itsumi Saito; Haruto Yoshida; Jun Suzuki

**ID:** 139221 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e4d9v8gOoV>) | [PDF](<https://openreview.net/pdf?id=e4d9v8gOoV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139221>)

We introduce a new task and benchmark dataset, VisEditBench, for understanding visual instructions in vector\-format diagram editing\.  While recent advances have made progress in generating vector graphics from text or images, editing such diagrams remains relatively underexplored\. Moreover, existing approaches predominantly rely on textual instructions, which are often unintuitive for specifying edits in structured visual content, particularly when users need to identify specific elements or indicate their spatial positions in a diagram\. We propose visual instructions as a more intuitive interface for diagram editing, and construct a dataset of 694 samples with human\-curated annotations overlaid on TikZ diagrams\. The dataset covers multiple edit types as well as instructions with multiple editing operations\. We evaluate 32 recent state\-of\-the\-art multimodal models and find consistent performance degradation, particularly for edits involving global layout or diagram structure, compared to local operations such as element addition or deletion\.  Furthermore, instructions that include multiple editing operations tend to result in lower performance than single\-edit cases\. Even recent models struggle to achieve consistently accurate edits, highlighting the inherent difficulty of the task\. VisEditBench provides a valuable benchmark for advancing research on visually grounded diagram editing and structured visual understanding\.

## OmniEgoCap: Camera\-Agnostic Sequence\-Level Egocentric Motion Reconstruction

**Authors:** Kyungwon Cho; Jeonghyeon Na; Hanbyul Joo

**ID:** 151885 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XBhKJqEr4E>) | [PDF](<https://openreview.net/pdf?id=XBhKJqEr4E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151885>)

Commercial egocentric devices capture human behavior in everyday settings, yet full\-body motion reconstruction must generalize across diverse cameras and mountings\. This is challenging because head trajectories under\-determine body motion, while hand observations are intermittent and camera\-dependent: a hand may disappear simply because it has left the camera's field of view\. Existing methods treat such absences as missing data, relying on fixed visibility regimes or post\-hoc optimization, and fail to generalize across devices\.We present \\modelname, a sequence\-level diffusion framework for device\-agnostic egocentric full\-body motion reconstruction\. Our key insight is that egocentric videos contain sequence\-level evidence about both the wearer and the camera\-induced visibility structure, enabling \\modelname to infer consistent body shape and coherent motion from sparse head and hand cues\. To prevent overfitting to a single camera setup, we further introduce geometry\-aware visibility augmentation, which synthesizes visibility patterns from realistic variations in camera geometry\. We also present OmniEgoDB, the first mocap benchmark with ground\-truth motion captured across multiple consumer egocentric devices\. Experiments on synthetic, real\-device, and in\-the\-wild settings demonstrate superior motion reconstruction, robust cross\-device generalization, and coherent in\-the\-wild results\.

## WovenAnchor Matcher: Specialized Intra\- and Inter\-Image Context Modeling for Feature Matching

**Authors:** Zhiyang Li; Ruijiang Jin; Thibaut Klenke; Yusuke Sekikawa; Nakamasa Inoue

**ID:** 155912 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1tYCWPWHHq>) | [PDF](<https://openreview.net/pdf?id=1tYCWPWHHq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155912>)

Semi\-dense local feature matching commonly aggregates contextual information before coarse\-to\-fine correspondence estimation\.  However, intra\-image and inter\-image aggregation serve different roles: the former should propagate spatial evidence within each image while retaining structured two\-dimensional dependencies, whereas the latter should gather information from plausible corresponding regions while limiting noise from unrelated locations\.  We propose WovenAnchor Matcher \(WAM\), a semi\-dense matching framework based on role\-specialized context aggregation\.  WAM introduces two complementary operators\.  WovenMamba performs intra\-image aggregation through horizontal\-then\-vertical state\-space propagation, allowing vertical updates to operate on horizontally contextualized features and thereby encouraging a structured two\-dimensional receptive\-field bias\.  AnchorCrossAttention performs inter\-image aggregation by using cross\-attention to gather context from plausible corresponding regions across the image pair\. To make this retrieval robust, it operates on local representative anchors rather than dense point\-wise tokens, reducing sensitivity to noisy affinities that can otherwise lead to incorrect correspondence propagation\. On MegaDepth, WAM achieves 66\.1 pose AUC@5$^\\circ$ with a runtime of 35\.4 ms on a single H100 GPU, improving over JamMa, which achieves 64\.1 pose AUC@5$^\\circ$ at 43\.8 ms under the same setup\.  Ablations show that removing or replacing either specialized component reduces accuracy, providing evidence that intra\-image propagation and inter\-image retrieval benefit from role\-specific aggregation designs\.

## Continuous Expert Assembly: Instance\-Conditioned Low\-Rank Residuals for All\-in\-One Image Restoration

**Authors:** Haisen He; XIANGYU ZOU; SongLin Dong; Heng Li; Yihong Gong; Zhiheng Ma

**ID:** 149532 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pQjphOzAGt>) | [PDF](<https://openreview.net/pdf?id=pQjphOzAGt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149532>)

Real\-world image degradation is often unknown, spatially non\-uniform, and compositional, requiring all\-in\-one restoration models to adapt a single set of weights to diverse local corruption patterns without test\-time degradation labels\. Existing methods typically modulate a shared backbone with global prompts or degradation descriptors, or route features through predefined expert pools\. However, compact global conditioning can bottleneck localized degradation evidence, while static expert routing may produce homogeneous updates or rely on unstable sparse assignments\. We propose \\textbf\{Continuous Expert Assembly\} \(CEA\), a token\-wise dynamic parameterization framework for all\-in\-one image restoration\. CEA employs a lightweight \\textbf\{Cross\-Attention Hyper\-Adapter\} to probe intermediate spatial features and synthesize instance\-conditioned low\-rank routing bases and residual directions\. Each spatial token then assembles its own residual update via dense signed dot\-product affinities over the generated rank\-wise components, avoiding external prompts, static expert banks, and discrete Top\-$K$ selection\. The resulting assembly rule also admits a linear\-attention perspective, making its dense token\-wise routing behavior transparent\. Experiments on AIO\-3, AIO\-5, and CDD\-11 show that CEA improves average restoration quality over strong prompt\-, descriptor\-, and expert\-based baselines, with the clearest gains on spatially varying and compositional degradations, while maintaining favorable parameter, FLOP, and runtime efficiency\.

## LiteNav: Lightweight Map\-free Outdoor Visual Navigation

**Authors:** Mingxu Zhu; Chang Liu; Xiao Zhao; Zheyuan Zhang; Linna Song; Qingliang Luo; liming zhang; Xiangyu Zhen; Chufan Guo; Kuifeng Su

**ID:** 149229 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ryUHuB7R1E>) | [PDF](<https://openreview.net/pdf?id=ryUHuB7R1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149229>)

Outdoor robot navigation in dynamic, unknown environments remains a formidable challenge, necessitating robust traversability assessment and collision\-free planning\. While traditional map\-based approaches struggle with adaptability to novel scenes, existing map\-free methods frequently incur high computational costs and depend heavily on LiDAR data\. In response, we propose LiteNav, a vision\-only for exteroceptive sensing and strictly map\-free outdoor navigation system\. Relying solely on a single off\-the\-shelf RGB camera and GPS for goal specification, LiteNav estimates traversability, encodes navigation goals, and generates candidate trajectories via a diffusion\-based joint encoding model\. These trajectories are then refined by a goal\-oriented planner to ensure correctness, efficiency, and safety\. Remarkably, LiteNav achieves performance comparable to LiDAR\-equipped methods without ever constructing or referencing explicit maps\. Deployed on a low\-power NVIDIA Jetson Xavier NX, it operates in real time, consuming only one\-fifth of the computational resources required by prior approaches\. Experiments demonstrate that LiteNav achieves state\-of\-the\-art results on the GND dataset and outperforms existing methods in real\-world scenarios\. In summary, LiteNav is a map\-free outdoor navigation system that operates using monocular RGB perception and GPS goal cues on an embedded platform, demonstrating strong potential for scalable deployment\.

## Internalize External Competence for Visual Instruction Editing

**Authors:** Wenjun Huang; Rui Zhao; Suyang Hou; Jiahao Tang; Wenjia Wang; Zhuobai Dong; Alex Jinpeng Wang; Hu J Guo

**ID:** 149907 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mKfQzVpQIM>) | [PDF](<https://openreview.net/pdf?id=mKfQzVpQIM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149907>)

What if you could edit an image simply by drawing on it\-\-\-circling an object, writing a short label, or sketching an arrow\-\-\-with minimal or even no typed prompt? We first reveal a surprising capability: when a text\-driven image editor is paired with a strong Vision\-Language Model \(VLM\) at inference time, the combined system can directly interpret visual instructions embedded in the image itself, such as on\-image text, bounding boxes, and directional arrows\. However, this pipeline incurs additional VLM\-planning latency, introduces brittle cross\-model error propagation, and depends on external APIs or auxiliary model weights\. To address these limitations, we introduce Siphon, a framework that internalizes this externally elicited visual\-instruction\-following competence into a single diffusion\-based editor\. Rather than relying on an external VLM at inference time, Siphon first uses a VLM planner to synthesize paired visual\-instruction supervision, and then transfers this competence into the editor through lightweight LoRA fine\-tuning\. The resulting model reads, grounds, and executes on\-image annotations directly from pixels, while keeping the diffusion sampling cost close to that of the base editor\. Across multiple diffusion architectures, Siphon substantially improves spatial controllability, instruction adherence, and marker removal over text\-driven baselines, while matching VLM\-assisted pipelines without their additional planning latency, API dependence, and cross\-model fragility\. We do not position rendered long text as a replacement for conventional text prompts; rather, on\-image text is mainly intended for short labels and spatially grounded edit intents, while long or complex instructions can still be provided through the standard text channel\.

## Simmer: A Scalable Pretraining Recipe for Video\-Text Encoders

**Authors:** Bingliang Zhang; Wenda Chu; Albert Li; Yuan Sui; Hongkai Zheng; Sophia Stiles; Kailen Hargenrader; Yisong Yue; Sabera Talukder

**ID:** 154316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EYFTk3vtZR>) | [PDF](<https://openreview.net/pdf?id=EYFTk3vtZR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154316>)

Most video\-text encoders are pretrained on carefully curated video\-text datasets where each video is paired with a single short caption\. Such supervision captures only one narrow view of a video, despite videos naturally supporting many complementary descriptions of their objects, actions, and relations\. We present Simmer, a scalable pretraining recipe for video\-text representation learning that increases textual coverage per video and matches the training objective to this richer supervision\. We first augment a video corpus with diverse synthetic captions written in many distinct textual registers, producing a large set of aspects per video\. Since this many\-to\-one supervision is difficult to capture in a single global embedding, we pair caption diversification with a multi\-vector contrastive loss that allows videos to align with multiple relevant captions\. Second, we show that introducing a distinct cooldown phase over a smaller corpus of human\-sourced dense captions with our stylistic augmentations further improves performance\. Our resulting encoders achieve state\-of\-the\-art performance on five video\-text encoding tasks across three model scales, outperforming prior works while using 2\-60x fewer videos\. Our results show that broader caption coverage and multi\-aspect alignment can pave the way towards new scaling laws in video\-text modeling\.

## Cross\-Model Circuit Discovery

**Authors:** Harrish Thasarathan; Matthew Kowal; Thomas Fel; Kosta Derpanis

**ID:** 148536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xAgPnoOF5V>) | [PDF](<https://openreview.net/pdf?id=xAgPnoOF5V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148536>)

Consider two large vision models\. They process the same image and both correctly predict the class \`\`rabbit\.'' How much of the circuit computation along the way was shared? Model diffing offers a natural lens on this question\. So far, however, it has largely operated on a single layer and at the level of representations rather than circuits\. In this work, we introduce Universal Circuits \(UCs\), enabling model diffing at the circuit level\. Specifically, we extend CLTs across both layers and models, with losses that encourage sparsity for interpretability and output fidelity for faithfulness\. We train UCs between pairs of standard large vision models\. We find that a compact cross\-model intersection of pruned class circuits, typically a few hundred universal \(shared\) features per pair, produces $89$\-$98\\%$ of full\-circuit classification accuracy in both models, while a complementary set of universal features \(hundreds per pair\) is kept by only one model's circuit, reflecting how each model weights shared concepts differently in its own representations\. To demonstrate a downstream use of UC, we perform model \\textit\{surgery\}: a class is successfully transferred from one model to another with no gradient steps taken in the new model\. More broadly, our work demonstrates that large vision models leverage shared multi\-layer algorithms for downstream performance, and that these algorithms can be discovered, compared, and reused across models\.

## Intervention\-Guided Image\-Free Classifier Expansion for Fine\-Grained Recognition

**Authors:** Xiangyu Wang; Changxin Rong; Yanze Gao; Lyuzhou Chen; Xiren Zhou; Huanhuan Chen

**ID:** 148473 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xXksVKeYKi>) | [PDF](<https://openreview.net/pdf?id=xXksVKeYKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148473>)

Image\-free zero\-shot classifier expansion aims to extend recognition to unseen classes by establishing an association mapping between class semantics and visual classifier weights, without accessing original images\. However, most existing methods rely on an association\-based optimization mechanism, which struggles to meet the demands for fine\-grained classification of visually and semantically similar classes\. Since co\-occurring attributes dominate class semantics, the model gravitates towards co\-occurring attributes rather than discriminative attributes\. This leads to geometrically entangled classifier weights, resulting in ambiguous decision boundaries\. To address this problem, this paper proposes a novel approach that reframes weight generation through the lens of causal intervention\. The method first employs comparative reasoning to disentangle discriminative and co\-occurring attributes\. Subsequently, it synthesizes intervened semantics to impose invariance and sensitivity constraints\. This mechanism compels the model to suppress co\-occurring attributes while enhancing sensitivity to discriminative attributes\. Extensive experiments demonstrate that our method outperforms state\-of\-the\-art approaches, yielding clearer decision boundaries in fine\-grained settings\.

## GeoRouter: Dynamic Paradigm Routing for Worldwide Image Geolocalization

**Authors:** Pengyue Jia; Derong Xu; Yingyi Zhang; Xiaopeng Li; Wenlin Zhang; Yi Wen; Liu lan; Yuanshao Zhu; Xuetao Wei; Wanyu Wang; Xiangyu Zhao

**ID:** 155697 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3cSHwt2dIW>) | [PDF](<https://openreview.net/pdf?id=3cSHwt2dIW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155697>)

Worldwide image geolocalization aims to predict precise GPS coordinates for images captured anywhere on Earth, which is challenging due to the large visual and geographic diversity\. Recent methods mainly follow two paradigms: retrieval\-based approaches that match queries against a reference database, and generation\-based approaches that directly predict coordinates using Large Vision\-Language Models \(LVLMs\)\. However, we observe distinct error profiles between them: retrieval excels at fine\-grained instance matching, while generation offers robust semantic reasoning\. This complementary heterogeneity suggests that no single paradigm is universally superior\. To harness this potential, we propose GeoRouter, a dynamic routing framework that adaptively assigns each query to the optimal paradigm\. GeoRouter leverages an LVLM backbone to analyze visual content and provide routing decisions\. To optimize GeoRouter, we introduce a distance\-aware preference objective that converts the distance gap between paradigms into a continuous supervision signal, explicitly reflecting relative performance differences\. Furthermore, we construct GeoRouting, the first large\-scale dataset tailored for training routing policies with independent paradigm predictions\. Extensive experiments on IM2GPS3K and YFCC4K demonstrate that GeoRouter significantly outperforms state\-of\-the\-art baselines\. Our dataset, code, and checkpoints are publicly available to facilitate future research\.

## UnfoldArt: Zero\-Shot Recovery of Full Articulated 3D Objects from Text or Image

**Authors:** Mohamed El Amine Boudjoghra; Ivan Laptev; Angela Dai

**ID:** 148284 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z1gCXDoGu2>) | [PDF](<https://openreview.net/pdf?id=z1gCXDoGu2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148284>)

Articulated 3D objects are essential for interactive environments in embodied AI, robotics, and virtual reality, but reconstructing their structure and motion from sparse observations remains challenging\. Existing approaches remain largely constrained by lack of supervised data or lack priors needed to reliably recover articulation, hidden geometry, and internal object structure\. We present the first hierarchical agentic approach for articulated 3D object reconstruction from text or image inputs, combining hierarchical, debate\-based reasoning with a video generative prior for articulation modeling\. High\-level agents reason about object semantics and motion using knowledge from vision\-language and video models, while low\-level agents estimate articulation parameters and interaction points; together, they engage in structured debate to resolve ambiguities in structure and motion\. To enable reliable generation, including interior object structures, from only text or image inputs, we introduce a video generative model prior that not only synthesizes plausible object motions, but also expose occluded interiors and geometry that cannot be inferred from a single static view\. By combining agentic reasoning with a video generative prior, our approach jointly infers articulation and reconstructs complete 3D articulated objects, producing high\-fidelity geometry, internal structure, and motion\-consistent states beyond directly observed surfaces\.

## Meta Inverse Prompting for Video Generative Models

**Authors:** Yerin Jung; Jongheon Jeong

**ID:** 150385 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iRDtcVU7O0>) | [PDF](<https://openreview.net/pdf?id=iRDtcVU7O0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150385>)

Recent advances in video generative models have enabled flexible conditional generation and editing pipelines, such as text\-to\-video, image\-to\-video, and reference\-guided synthesis\. However, these workflows are inherently one\-directional, mapping conditions to videos without providing a mechanism to invert this process\. In complex media production settings, the ability to recover controllable textual conditions from a given video is highly desirable, yet remains underexplored\. While inverse prompting has been studied for image generation, directly extending these approaches to video is challenging due to the need to capture temporal dynamics beyond static appearance, as well as the substantial computational cost of per\-video optimization\. In this work, we propose the first practical framework for efficient video inverse prompting\. Specifically, we formulate inverse prompting as a meta\-learning problem and introduce Meta Video Inverse Prompting \(MVIP\), which learns a meta\-prompt optimized over temporal dimensions to enable fast and effective prompt inference\. Our approach amortizes the inversion process, eliminating the need for costly iterative optimization at test time\. Experimental results demonstrate that MVIP recovers higher\-quality inverse prompts with significantly improved reconstruction fidelity compared to image\-based inversion and iterative captioning baselines, while achieving substantial gains in efficiency\.

## MobileWan: Closing the Quality Gap for Mobile Video Diffusion

**Authors:** Mohsen Ghafoorian; Denis Korzhenkov; Adil Karjauv; Ioannis Lelekas; Noor Fathima; Spyridon Stasis; Animesh Karnewar; Amirhossein Habibian

**ID:** 151986 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WL3m8Uy2Gb>) | [PDF](<https://openreview.net/pdf?id=WL3m8Uy2Gb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151986>)

Recent advances in video diffusion have been driven by scaling transformer\-based architectures to billions of parameters, substantially improving visual fidelity and motion coherence\. In contrast, existing mobile video diffusion models remain limited to relatively small parameter budgets, typically 0\.4–1\.8B, restricting generation quality\. In this work, we show that high\-quality mobile video generation does not require small models\. Instead, we demonstrate that a server\-scale 5B\-parameter video diffusion transformer can be deployed efficiently on memory\-constrained mobile hardware through recurrent reformulation and structured compression\. Starting from Wan2\.2\-5B, we rely on a recurrent distillation framework that converts video generation into a chunk\-wise autoregressive process with constant\-memory attention computation\. Combined with causal linear attention, the model operates as an RNN at inference time while preserving temporal coherence across chunks\. We further propose a learnable attention head pruning method based on binary per\-head gates optimized end\-to\-end using a noise\-biased sparsity objective and distillation\-based finetuning\. Together with sampling\-step distillation and memory\-optimized VAE decoding, MobileWan becomes the first 5B\-scale video diffusion model deployable on a commercial mobile device\. Our system generates 5\-second 480x832 videos at 16 FPS in 20 seconds end\-to\-end latency, achieving a VBench score of 83\.79 and establishing a new state of the art in mobile video generation\. The model checkpoint will be released\.

## REVERSE: Reinforcing Evidence Verification and Search for Agentic Image Geolocation

**Authors:** Yong Li; Furong Jia; Dacheng Yin; KANG RONG; Fengyun Rao; Jing LYU; Fan Zhang

**ID:** 154894 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A8SzlxVSB9>) | [PDF](<https://openreview.net/pdf?id=A8SzlxVSB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154894>)

Image geo\-localization aims to determine where a photograph was taken, a task that often requires more than recognizing visible landmarks\. Human experts typically solve it through an iterative workflow: they inspect informative regions, form location hypotheses, seek external evidence, and revise their judgments as new clues appear\. Existing methods only partially capture this process: direct prediction methods bypass evidence acquisition altogether, while retrieval\-augmented methods introduce external evidence but usually provide limited supervision on the intermediate decisions of where to search, how to query, and how to filter noisy results\. We present REVERSE, a framework that reinforces the interplay between evidence search and verification to enable multi\-turn agentic reasoning\. REVERSE teaches three intermediate decisions: where to look, what to query, and what evidence to trust\. To support this, we construct tool\-grounded trajectories with annotated region selections, search observations, and geo\-informative evidence labels, and introduce process rewards for visual grounding, query utility, and evidence discrimination\. An offline search cache makes retrieval observations stable and reusable during reinforcement learning, enabling dense supervision over noisy search results\. With a 4B model, REVERSE outperforms strong retrieval\-augmented baselines and rivals substantially larger models on Im2GPS3k and YFCC4k\.

## Disambiguating 2D\-3D Correspondences in Gaussian Splatting\-based Feature Fields for Visual Localization

**Authors:** Miso Lee; Sangeek Hyun; Yerim Jeon; Jae\-Pil Heo

**ID:** 152518 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SWuCpRLccL>) | [PDF](<https://openreview.net/pdf?id=SWuCpRLccL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152518>)

While Gaussian Splatting\-based Feature Fields \(GSFFs\) have shown promise for visual localization, this paper highlights that photometrically optimized GSFFs are inherently ill\-suited for 2D\-3D matching\. The volumetric extent of each Gaussian induces many\-to\-one pixel\-to\-point mappings that destabilize PnP\-based pose estimation, while photometric optimization gives rise to superfluous Gaussians devoid of multi\-view consistency\. To address these issues, we propose SplitGS\-Loc, a localization\-specialized GSFFs construction framework that disambiguates 2D\-3D correspondences by exploiting Gaussian attributes\. Our key design, Mixture\-of\-Gaussians\-based splitting, decomposes each Gaussian into smaller Gaussians, replacing ambiguous many\-to\-one with precise one\-to\-one correspondences\. In parallel, we exploit composition weights from GS rasterization to select Gaussians that significantly and consistently contribute across multiple views and aggregate discriminative features through strong pixel\-Gaussian associations, enforcing multi\-view consistency\. The resulting compact yet discriminative feature fields enable stable PnP convergence, achieving state\-of\-the\-art performance on localization benchmarks\. Extensive experiments validate that SplitGS\-Loc extends the utility of photometric GSFFs to accurate and efficient localization by exploiting Gaussian attributes, without per\-scene training or iterative pose refinement\.

## MLLM\-Edit: Benchmarking Image Forgery Detection and Localization under MLLM\-based Editing

**Authors:** Zeqin Yu; Ye Tian; Jian Zhang; Jiangqun Ni; Lanyun Zhu; Alex Kot; Xudong Jiang

**ID:** 139518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KwlZaWL5xN>) | [PDF](<https://openreview.net/pdf?id=KwlZaWL5xN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139518>)

Multimodal large language models \(MLLMs\) enable prompt\-driven image editing, introducing a new challenge for image forgery detection and localization \(IFDL\)\. Unlike traditional or mask\-guided editing, MLLM\-based editing may re\-synthesize both tampered and non\-tampered regions, weakening the correspondence between tampering regions and pixel\-level forensic discrepancies\. To study this emerging paradigm, we introduce MLLM\-Edit, a large\-scale benchmark containing approximately 250k tampered images with pixel\-level tampering annotations\. MLLM\-Edit is constructed through a structured pipeline that combines diverse real\-image collection, human\-like prompt design, multi\-source MLLM\-based editing, and semi\-automatic mask annotation\. Specifically, we collect natural and text images from 30 sources, formulate prompts with target content, tampering type, and consistency constraints, generate forgeries using 18 representative open\-source and closed\-source MLLM\-based editors, and obtain pixel\-level tampering masks through a semi\-automatic annotation pipeline\. We further establish four evaluation protocols covering traditional editing, mask\-guided editing, fully synthetic generation, and MLLM\-based editing\. Experiments show that existing IFDL methods degrade substantially on MLLM\-based forgeries, especially in pixel\-level localization, highlighting the need for dedicated benchmarks and methods\. A demo subset of MLLM\-Edit is available at the \\href\{https://kaggle\.com/datasets/8441a4e0594aa02aa7a59ee3eead454410d34716d14423d56a56c7bbbac80655\}\{project page\}\.

## OrbitLoRA: Learning Rotation\-Aware Low\-Data Adaptation of Vision Foundation Models

**Authors:** Yunlu Chen; Dominik Engel; Peter Wonka; Ivan Viola

**ID:** 149392 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qP2piMgcsC>) | [PDF](<https://openreview.net/pdf?id=qP2piMgcsC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149392>)

Pretrained vision transformers provide strong semantic representations, but their token embeddings are not designed to transform predictably under image rotations\.  This limits their direct adaptation to domains such as satellite imagery, histopathology, microscopy, and other scientific imaging settings, where in\-plane orientation is often arbitrary and no canonical pose exists\.  Existing equivariant adaptation methods for pretrained models typically rely on frame averaging or canonicalization, which can be effective on synthetically rotated natural images but do not teach the adapted model an internal rotation\-aware representation\.  We introduce OrbitLoRA, a lightweight orbit\-aware adapter for frozen visual foundation models\. OrbitLoRA combines standard LoRA with a typed residual branch that maintains scalar and vector fields over ViT patch tokens\.  The typed branch is initialized from local steerable image features and harmonic coordinate fields, updated at selected transformer depths, and injected into the frozen token stream through zero\-initialized residual gates\.  During finetuning, paired rotated views supervise the typed state through a transport\-and\-rotation consistency loss, while the semantic output is trained to remain invariant for the downstream task\.  This design preserves the rich features of pretrained ViTs while adding a learnable rotation\-symmetry prior\. Across classification and segmentation tasks, and across DINOv2\-, CLIP\-, SAM\-, and LLaVA\-style backbones, OrbitLoRA matches strong LoRA\-with\-augmentation baselines in high\-data regimes and substantially improves adaptation in low\-data regimes, where learning the symmetry prior is most valuable\.

## FoMo: Forking Moment in Generative Trajectory as a Perceptual Distance

**Authors:** Jaihyun Lew; Mingi Jung; Minjun Park; Wooseok Song; Sungroh Yoon

**ID:** 152890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PdoitgUpJ7>) | [PDF](<https://openreview.net/pdf?id=PdoitgUpJ7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152890>)

Reference\-based image quality assessment \(IQA\) metrics aim to reflect how humans perceive the perceptual distance between a pair of images\. To learn how the human visual system \(HVS\) operates, recent reference\-based IQA metrics heavily rely on human\-annotated data\. Mean opinion score \(MOS\)\-based pointwise scoring, which assigns a scalar quality value per image, is preferable for annotation but is prohibitively expensive to collect at scale and is known to be noisy due to inconsistent human judgments\. As an alternative, two\-alternative forced choice \(2AFC\) pairwise labels have gained popularity due to their reliability and efficiency, but they capture only relative comparisons between pairs\. In this paper, we propose a fully automated data generation pipeline that generates pointwise perceptual distance labels between image pairs without any human annotation\. Our approach exploits the generative dynamics of diffusion models as a perceptual distance proxy, where the coarse structure of an image is generated in the early timesteps and the fine details are generated in the later timesteps\. Images that fork early in the generation process share only coarse structure and are perceptually far apart; images that fork late differ only in fine detail\. We demonstrate that the diffusion trajectory aligns well with the human visual system, and use this forking moment, FoMo, as a reference\-grounded distance label to supervise the training of a reference\-based IQA metric\. The pointwise labels, which support universal comparison between arbitrary image pairs, enable an information\-rich training objective\. Extensive experiments across diverse backbone architectures confirm the effectiveness of our generation pipeline, outperforming human\-annotated datasets in multiple benchmarks\.

## TRACE: Trajectory\-Aware Conceps for Explainable Video Understanding

**Authors:** Wooil Lee; Junpyo Hong; Jongseo Lee; Tuomas Oikarinen; Lily Weng; Jinwoo Choi

**ID:** 155184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7fOVVa6o6F>) | [PDF](<https://openreview.net/pdf?id=7fOVVa6o6F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155184>)

Video understanding models often rely on motion, but faithful explanations must reveal not only whether motion matters, but also which source of motion supports a prediction\. We identify motion\-source under\-specification as a key limitation of existing video XAI: region\-centric explanations are source\-ambiguous, while concept\-based explanations are source\-incomplete when their motion vocabulary is restricted to single\-person pose sequences\. To bridge this gap, we propose TraCE\-Trajectory\-Aware Concepts for Explainable Video Understanding\-a concept\-based framework that elevates visual trajectories to first\-class explanatory concepts\. By clustering optical\-flow trajectories, TraCE discovers source\-flexible motion concepts that capture dynamic evidence from people, objects, and interactions, while object and scene concepts account for static context\. TraCE applies the same typed trajectory/object/scene concept interface to both action recognition and video question answering \(VQA\), enabling concept\-level explanations beyond a single task\. We evaluate TraCE across six benchmarks: NTU RGB\+D Mutual, Chiral SSv2, UCF\-101, KTH, TOMATO, and STAR\. Experiments show that TraCE provides trajectory\-aware explanations of dynamic evidence with minimal performance trade\-off, trailing non\-interpretable baselines by only 0\.9 points on action recognition and 0\.1 points on VQA on average\. User studies, faithfulness analyses, temporal sensitivity tests, and concept\-intervention results further show that TraCE produces interpretable, faithful, and practically useful explanations\.

## StreamMind: Dynamic Streaming Cognition for Online Video Understanding

**Authors:** Zhuojie Wu; Xin Shen; Chenxi Miao; Weikang Li; Liwei Qian; Xin Pei; Xin Yu

**ID:** 151287 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bXFMwP5xIt>) | [PDF](<https://openreview.net/pdf?id=bXFMwP5xIt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151287>)

Online video large language models \(VLLMs\) have demonstrated remarkable capabilities in real\-time streaming video understanding and proactive human\-AI interaction\. However, existing methods often follow a static perception paradigm, processing video streams with rigid temporal units while overlooking the inherent temporal non\-uniformity of streaming videos\. This oversight results in flickering responses and fragmented context\. In this paper, We propose \\textbf\{StreamMind\}, a dynamic streaming cognition framework that organizes both online reasoning and memory around temporally coherent Group\-of\-Pictures \(GoP\) segments\. Specifically, StreamMind introduces two key components\. First, StreamMind introduces a \\textbf\{Dynamic Thinking \(DynThink\)\} module, which accumulates evidence within each GoP and triggers reasoning only at GoP boundaries, thereby reducing premature decisions and improving response stability\. Second, to support long\-horizon streaming understanding, we propose a \\textbf\{Brain\-Eye Synergy Memory \(BESM\)\} module, which preserves key\-frame visual tokens as high\-fidelity anchors while compressing the remaining frames into compact thinking tokens\. This design maintains fine\-grained visual evidence together with reasoning continuity, while reducing redundant storage\. Extensive experiments on streaming and offline video benchmarks demonstrate that StreamMind achieves state\-of\-the\-art online video understanding performance, reaching 63\.4\\% on OVO\-Bench and 80\.2\\% on StreamingBench, while maintaining strong generalization to offline long\-form video reasoning\.

## LiBrA\-Net: Lie\-Algebraic Bilateral Affine Fields for Real\-Time 4K Video Dehazing

**Authors:** Yongcong Wang; Chengchao Shen; Guangwei Gao; Wei Wang; Pengwen Dai; Dianjie Lu; Guijuan Zhang; Zhuoran Zheng

**ID:** 154860 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AM2VYYJ4GA>) | [PDF](<https://openreview.net/pdf?id=AM2VYYJ4GA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154860>)

Currently, there is a gap in the field of ultra\-high\-definition \(UHD\) video dehazing due to the lack of a benchmark for evaluation\. Furthermore, existing video dehazing methods cannot run on consumer\-grade GPUs when processing continuous UHD sequences of 3\-\-5 frames at a time\. In this paper, we address both issues with a new benchmark and an efficient method\. Our key observation is that atmospheric dehazing reduces to a per\-pixel affine transform governed by the low\-frequency depth field, which can be compactly encoded in bilateral grids whose prediction cost is decoupled from the output resolution\. Building on this, we propose LiBrA\-Net, which factorizes the spatiotemporal affine field into a spatial\-\-color and a temporal bilateral sub\-grid predicted at a fixed low resolution, fuses their coefficients in the $\\mathfrak\{gl\}\(3\)$ Lie algebra under group\-theoretic regularization, maps the result to invertible $GL\(3\)$ transforms via a Cayley parameterization, and restores high\-frequency detail through a lightweight input\-guided branch\. We further release UHV\-4K, the first paired 4K video dehazing benchmark with depth, transmission, and optical\-flow annotations on every frame\. Across UHV\-4K, REVIDE, and HazeWorld, LiBrA\-Net sets a new state of the art among compared video dehazing methods while running native 4K at 25\\,FPS on a single GPU with only 6\.12\\,M parameters\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/LiBrA\-Net\-42B8\}\.

## Manifold Prior Guided Deep Unfolding for Hyperspectral Image Reconstruction

**Authors:** Shuqi Liu; Yingkai Zhang; Lin Gu; Tao Zhang; Ying Fu

**ID:** 154416 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DjKpFjPFoO>) | [PDF](<https://openreview.net/pdf?id=DjKpFjPFoO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154416>)

Hyperspectral Image \(HSI\) reconstruction has made substantial progress with the deep unfolding framework by decomposing the problem into a projection module and a denoiser module\. Nevertheless, existing methods still exhibit limitations of insufficient matching with HSI data\. The issues lie in two aspects: 1\) the data\-consistency projection module applies a fixed gradient descent step while ignoring the spectral content adaptivity of HSI; 2\)the denoiser module either suffers from high computational complexity or is limited to the local receptive field, failing to efficiently capture the global spatial\-spectral dependencies\. In this paper, we propose a deep unfolding framework centered on a two\-stage manifold learning strategy to obtain a degradation\-free structural prior, which is then strategically injected into both the projection and denoiser modules\. In the data\-consistency projection, a prior\-guided spectral weight mechanism is introduced to adaptively modulate the weight of spectral band\. In the denoiser module, a manifold\-guided Mamba is proposed to achieve the structure\-aware extraction of spatial\-spectral features through prior modulation\. Quantitative and visual comparisons on synthetic and real\-world datasets show that the proposed method significantly outperforms existing state\-of\-the\-art approaches, while maintaining the structural interpretability of the unfolding framework\. To support reproducibility, the code will be publicly released upon acceptance\.

## Cross Flow: One\-Step Generation Across Latent and Pixel Spaces

**Authors:** Xiyuan Wang; Xiao Zhang; Yang Li; Ruoxi Jiang; Zhao Zhong; Liefeng Bo; Muhan Zhang

**ID:** 151273 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bbx1xRuNl6>) | [PDF](<https://openreview.net/pdf?id=bbx1xRuNl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151273>)

Diffusion and flow\-matching models are typically constrained to a single manifold, where the noise prior, intermediate trajectory, and prediction target share the same dimensionality\. While Latent Diffusion Models \(LDMs\) mitigate computational costs by operating in compressed spaces, they still rely on a decoupled, fixed decoder to map latents back to pixels\. We introduce CrossFlow, a generative paradigm that unifies these stages by allowing the noise prior and final output to reside in different spaces\. By deriving a novel cross\-space objective, our framework enables a single model to map directly from a noisy latent to a high\-resolution image in a single function evaluation \(NFE\)\. CrossFlow serves a dual purpose: it acts as a high\-fidelity one\-step generator and functions as an enhanced decoder for existing LDM pipelines, capable of refining imperfect latent estimations during the reconstruction process\. On ImageNet\-1k \($256 \\times 256$\), CrossFlow achieves a state\-of\-the\-art 1\.62 FID with only one NFE\. Our results demonstrate that cross\-space flow objectives provide a scalable and theoretically grounded framework for unifying latent generation and pixel\-space decoding\.

## FLINT: Coupling Proximal Initialization and Bounded Stochasticity for Flow\-Matching Inverse Problems

**Authors:** Junseo Bang; daewon choi; Dong Ju Mun; Se Young Chun

**ID:** 149594 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ovYQsp14kD>) | [PDF](<https://openreview.net/pdf?id=ovYQsp14kD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149594>)

Flow matching models have emerged as a dominant paradigm for generative posterior sampling in imaging inverse problems\. Existing solvers follow two distinct lines of work: trajectory\-space methods, which refine sampling dynamics from random initial noise, and source\-space methods, which optimize the initial noise itself\. While prior work treats these as independent design choices, we show that they are fundamentally coupled\. We derive a unified reconstruction error bound that links initialization proximity and cumulative sampling stochasticity through a multiplicative envelope, yielding two key insights\. First, we identify a sufficiency regime in which a moderately optimized proximal source initialization is enough to attain the optimal error floor, rendering exhaustive source\-space optimization unnecessary\. Second, this initial advantage is fragile: it is eroded by excessive stochasticity accumulation during guided sampling, necessitating a mechanism that bounds the cumulative noise injection\. These findings motivate FLINT, a two\-stage framework that operationalizes this coupling\. FLINT establishes a high\-fidelity starting point via a manifold\-constrained proximal objective in only a few iterations, then performs guided sampling under a bounded stochasticity schedule that prevents erasure of the initialization advantage\. Across diverse inverse problems, FLINT delivers state of the art perceptual quality and competitive distortion metrics while maintaining superior computational efficiency\.

## Not All Noise Is Harmful: Towards Perception Aware and Controllable RAW Image Joint Denoising and Demosaicing

**Authors:** Qianjun Huang; Qingguo Liu; Hui Zeng; Kai Zhang; Jian Yang

**ID:** 155377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=65RYxUOsF9>) | [PDF](<https://openreview.net/pdf?id=65RYxUOsF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155377>)

RAW image denoising and demosaicing play a critical role in the early stages of the image signal processing \(ISP\) pipeline\. Previous methods handle them sequentially, which can introduce error propagation\. Unified restoration, such as joint denoising and demosaicing \(JDD\), has become a widely adopted paradigm and achieves impressive performance\. Nonetheless, under constraints of model capacity and low\-light conditions, these methods tend to apply overly aggressive denoising, causing notable smearing effects and the erosion of fine textures\. Researchers attempt to moderate the denoising strength to better preserve details, but this often results in noticeable artifacts\. These observations suggest a key insight: Not All Noise is Harmful—retaining an appropriate amount of noise can be preferable to over\-smoothing and is often aligned with user aesthetics\. Moreover, most existing methods are mainly trained on paired clean–degraded data, yielding fixed, hard\-to\-control denoising behavior that fails to meet evolving user demands\. In this paper, we propose $\\textbf\{JDD\-PRO\}$, a $\\textbf\{P\}$erception\-awa$\\textbf\{R\}$e and contr$\\textbf\{O\}$llable framework for RAW image JDD\. Built on a controllable JDD training scheme and a HVS\-inspired perceptual adapter, our method allows users to tune the denoising strength at inference to strike their desired balance between noise removal and detail preservation\. Comprehensive experiments on real\-world datasets validate the effectiveness and robustness of our proposed method\.

## On the Faithfulness of Visual Thinking: Measurement and Enhancement

**Authors:** Zujing Liu; Junwen Pan; Qi She; Yuan Gao; Gui\-Song Xia

**ID:** 152360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TfDaCyVusi>) | [PDF](<https://openreview.net/pdf?id=TfDaCyVusi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152360>)

Recent large vision–language models \(LVLMs\) can generate vision–text multimodal chain\-of\-thought \(MCoT\) traces after reinforcement fine\-tuning \(RFT\)\. However, we observe that the visual information in MCoT is often inaccurate even when answers are correct, and task accuracy remains nearly unchanged despite the visual information being corrupted\. This indicates a lack of faithfulness in the vision part of MCoT reasoning\. We attribute this to the RL reward design in RFT, which solely incentivizes the format of interleaved vision\-text cues, encouraging the model to incorporate visual information into its text reasoning steps without considering its correctness\. In this paper, we first probe MCoT faithfulness by measuring how much the prediction changes when its visual and textual thoughts are intervened\. Surprisingly, the model's predictions remain nearly unchanged under visual intervention but change significantly under textual intervention, indicating that the visual evidence is largely ignored\. To further analyze the visual information, we introduce an automated LVLM\-based evaluation metric that quantifies the faithfulness of visual cues from two perspectives: relevance and sufficiency\. Our evaluation reveals that the visual information in current MCoT traces is simultaneously irrelevant and insufficient\. To address this issue, we propose Sufficient\-Component Cause Model \(SCCM\) learning\. This approach encourages the MCoT to generate sufficient yet minimal visual components that are independently capable of leading to the correct answer\. The proposed SCCM is annotation\-free and plug\-and\-play, compatible with various RFT in MCoT\. Empirical results demonstrate that SCCM consistently improves the visual faithfulness across a suite of fine\-grained perception and reasoning benchmarks\.

## LongBanana: An Expert\-Verified Benchmark for Long\-Context Multi\-Reference Image Synthesis

**Authors:** Haoxiang Cao; Yuxuan Zhang; Penghui Du; Bo Li; Jiajiong Cao; Yingying Fan; Zimeng Wu; Yifu Luo; Mingzhe Zheng; Junwen Miao; Huaisong Zhang; YANG YAO; Yu Wang; Dongfu Jiang; Ping Nie; Wenhu Chen; Changqian Yu; Kelsey Allen; Chaoqun Wang

**ID:** 139714 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8ugadct1zZ>) | [PDF](<https://openreview.net/pdf?id=8ugadct1zZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139714>)

We introduce LongBanana, to our knowledge the \\textbf\{first expert\-designed and expert\-verified benchmark\} for \\emph\{long\-context multi\-reference image synthesis\} in the age of \\textbf\{agent\-controlled image generation\}\. The task requires retrieving dispersed visual evidence, rejecting distractors, binding entities and relations, and composing one coherent final image from multiple references\. LongBanana contains 90 carefully designed tasks organized by a 3\-by\-3 taxonomy; each task includes about 32 reference images, 20 constraints, and 50 evaluation items, yielding \\textbf\{4\{,\}670 expert\-specified atomic evaluation items\} in total\. Its graph\-grounded evaluation design instantiates each task with reference images and an entity\-relation graph, then converts node, edge, and whole\-scene obligations into checklist items for Content Fidelity, Relational Binding, and Global Constraint Satisfaction\. Reviewed expert labels include a 15\\% double\-labeled subset with \\textbf\{89\.4\\% exact agreement\} and \\textbf\{0\.83 quadratic weighted kappa\}\. We further introduce LongBanana\-Gen, an agentic controller framework for long\-horizon image generation; experiments show that minimal agent harnesses improve over direct generation, while ReAct/Plan\-Exec/Reflect yields controller\-dependent gains by strengthening evidence grounding and repair\. Together, LongBanana provides an auditable testbed for measuring dense visual evidence use and a shared target for developing stronger agent\-controlled image\-generation systems\.

## EA\-WM: Event\-Aware Generative World Model with Structured Kinematic\-to\-Visual Action Fields

**Authors:** Zhaoyang Yang; Yurun Jin; Lizhe Qi; Cong Huang; Kai Chen

**ID:** 154040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GfwsJK6MIo>) | [PDF](<https://openreview.net/pdf?id=GfwsJK6MIo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154040>)

Pretrained video diffusion models provide powerful spatiotemporal generative priors, making them a natural foundation for robotic world models\. While recent world\-action models  jointly optimize future videos and actions, they predominantly treat video generation as an auxiliary representation for policy learning\. Consequently, they insufficiently explore the inverse problem: leveraging action signals to guide video synthesis, thereby often failing to preserve precise robot spatial geometry and fine\-grained robot\-object interaction dynamics in the generated rollouts\. To bridge this gap, we present EA\-WM, an Event\-Aware Generative World Model that effectively closes the loop between kinematic control and visual perception\. Rather than injecting joint or end\-effector actions as abstract, low\-dimensional tokens, EA\-WM projects actions and kinematic states directly into the target camera view as Structured Kinematic\-to\-Visual Action Fields\. To fully exploit this geometrically grounded representation, we introduce event\-aware bidirectional fusion blocks that modulate cross\-branch attention, capturing  object state changes and interaction dynamics\. Evaluated on the comprehensive WorldArena benchmark, EA\-WM achieves state\-of\-the\-art performance, outperforming existing baselines by a significant margin\.

## Root\-Selecting Fixed\-Point Inversion for Rectified Flows via Trajectory Straightness

**Authors:** Semin Kim; Jihwan Yoon; Seunghoon Hong

**ID:** 151948 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WdrqbDVAXt>) | [PDF](<https://openreview.net/pdf?id=WdrqbDVAXt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151948>)

Fixed\-point inversion improves data\-to\-noise inversion by explicitly solving the local inverse equation at each timestep as a fixed\-point problem\. Empirically we observe that fixed\-point inversion can reach distinct approximate roots, and the resulting inverse trajectories can differ substantially in how reconstruction errors accumulate\. However, existing fixed\-point inversion methods lack a principled mechanism for selecting among these solutions\. Therefore, we propose SelFix, a root\-selecting fixed\-point inversion method for rectified flows that uses trajectory straightness as the selection criterion\. We derive an on\-the\-fly proxy for rectified flow straightness from previously recovered inverse velocities and use it to construct a local straightness anchor\. A vanishing anchored fixed\-point update, combined with decoupled momentum for finite\-iteration stability, then biases the iteration toward the fixed point that minimizes this selector while preserving the original inverse equation asymptotically\. Under a standard local nonexpansiveness assumption, SelFix converges to the straightness\-selected exact local inverse root\. Experiments on FLUX\.1\-dev and PIE\-Bench show that SelFix improves fixed\-point inversion for rectified flows, achieving stronger real\-image reconstruction and better source\-preserving prompt\-based editing than prior inversion baselines\.

## MESS: Multi\-Exposure Sequence Synthesis for Generalizable Image Enhancement

**Authors:** Ruodai Cui; Shuaizheng Liu; Rongyuan Wu; Lei Zhang

**ID:** 152809 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QEoJh2bExu>) | [PDF](<https://openreview.net/pdf?id=QEoJh2bExu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152809>)

Despite the significant progress in image enhancement under adverse illuminations, such as low\-light image enhancement, exposure correction, and backlit image enhancement, existing models show limited generalizability to different scenarios\. A major bottleneck lies in the lack of large\-scale and diverse training data, as these tasks typically rely on manually captured, precisely aligned image pairs that are expensive to scale up\. Although synthetic data have been explored as an alternative, existing synthesis methods are limited in modeling complex adverse illumination conditions and camera imaging pipelines\. To address this issue, we propose a novel framework to synthesize realistic training pairs for generalizable image enhancement in the wild\. Specifically, we first derive multi\-exposure sequences \(MES\) from high\-bit RAW images by rendering them under different exposure settings through an emulated ISP pipeline\. Using these RAW\-derived MES as supervision, we train a diffusion\-based RGB\-to\-MES generator to synthesize plausible exposure sequences from a single 8\-bit RGB image, extending the synthesis pipeline from limited RAW collections to large\-scale in\-the\-wild RGB data\. For each source image, we randomly sample one synthesized exposure variant as the degraded input and use the original high\-quality RGB image as the target\. With the proposed $\\textbf\{MES S\}ynthesis \(\\textbf\{MESS\}\)$ approach, we construct a dataset of 500K training pairs, and train a lightweight network, which however demonstrates significantly better generalization performance than existing models across various image enhancement tasks\. Code, dataset, and models will be released\.

## Persistent Planar Memory for Video World Models

**Authors:** Yuze He; Bin Tan; Zelin Gao; Yujun Shen; Yong\-jin Liu; Nan Xue; Yinghao Xu

**ID:** 150672 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLnVSxwQF6>) | [PDF](<https://openreview.net/pdf?id=gLnVSxwQF6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150672>)

Video world models that generate and explore environments at scale need a persistent 3D memory of what they have produced\. Plane primitives offer a natural candidate: a compact set of oriented planes captures the dominant structural elements \(\*e\.g\.,\* walls, floors, facades\) of indoor and outdoor scenes, while requiring only 7 parameters per primitive\. We present \*\*PPMem\*\*, a video world model that adopts plane primitives as its persistent 3D memory\. PPMem augments a video diffusion transformer with a planar prediction head and a Depth Token Fusion \(DTF\) module: each autoregressive chunk jointly produces RGB video and planar geometry, which merges into a persistent plane memory that conditions subsequent chunks via rendered depth\. The resulting memory is three orders of magnitude more compact than per\-pixel point clouds \($\{\\sim\}$100K primitives, $\{\\sim\}$5MB for a full scene\), geometrically explicit \(metric depth, normals, exportable surfaces\), cross\-view consistent \(jointly predicted by the shared backbone\), and adaptive \(refined by the merging procedure as generation proceeds\)\. On DL3DV and RealEstate10K, PPMem outperforms prior 3D\-grounded world models in video quality while jointly producing metric\-scale depth, surface normals, and exportable planar geometry, sustaining coherence across hundreds of frames under large viewpoint changes\.

## DiA: Directional Adapter

**Authors:** Ashish Kumar Singh; Prakash Chandra Chhipa

**ID:** 148763 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vF2lXB0cGj>) | [PDF](<https://openreview.net/pdf?id=vF2lXB0cGj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148763>)

Fine\-grained video action recognition often depends on how an action unfolds over time rather than on appearance alone\. Visually similar classes may differ in preparation, execution, or completion phases, making uniformly aggregated temporal context suboptimal\. We study this problem under a practical objective: i\) improving recognition performance with few tunable parameters, ii\) being compute efficient, and iii\) using only the readily available video modality\. Motivated by this missing temporal observation and the accuracy\-\-compute efficiency\-\-unimodality objective, we propose \*\*Directional Adapter \(DiA\)\*\*, a parameter\-efficient adapter on top of CLIP\. DiA formulates temporal specialization into causal and anti\-causal directions, allowing past\-to\-present and future\-to\-present cues to be modeled differently\. To keep this directional modeling parameter\- and compute\-efficient, both directions use depth\-wise temporal convolutions in a compact bottleneck space and are combined through a learnable fusion\. DiA achieves state\-of\-the\-art performance across 7 public benchmarks with only $\\sim$3\.5M tunable parameters, while also delivering higher throughput and lower latency than prior methods\. Code is available at https://anonymous\.4open\.science/r/diafullsupervised\-8CC3/README\.md\.

## Unlocking Any\-Order Generation in Pretrained Autoregressive Image Models

**Authors:** Rishav Pramanik; Marco Pedersoli; Zhaozheng Yin

**ID:** 152247 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UVG9WWadYE>) | [PDF](<https://openreview.net/pdf?id=UVG9WWadYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152247>)

Autoregressive \(AR\) image generators are powerful in principle but inflexible in practice: training with a fixed raster\-scan order hardcodes a single factorization of the image distribution into the model, leaving it unable to inpaint, outpaint, or edit at inference time\. Existing solutions—including the modern discrete\-diffusion family—train from scratch on a mixture of token orderings, paying roughly 3× the compute of standard raster\-scan training; discrete diffusion further sacrifices compatibility with the AR inference ecosystem \(KV caching, vLLM\) by construction\. We argue that this cost is unnecessary\. A pretrained raster\-scan AR model has already learned the joint distribution over image tokens; what it lacks is not knowledge but the ability to express that knowledge through non\-sequential conditional pathways\. We propose a recipe for adapting pretrained raster\-scan models into any\-order generators using two components: future\-aware positional embeddings that resolve a target\-position identifiability problem at negligible overhead, and an ordering curriculum that traces a stable optimization path from the pretrained solution to a good any\-order basin\. Applied to four base models across two architectures and two scales \(LlamaGen\-L/XL, RAR\-L/XL\), the recipe substantially outperforms MaskGIT on ImageNet inpainting \(FID 6\.21 vs\. 10\.44\) and outpainting \(FID 5\.84 vs\. 12\.17\), preserves generation quality close to the pretrained checkpoints, and costs only ≈25% additional compute beyond pretraining \(on LlamaGen\-XL\)—while leaving the standard AR inference stack untouched\. Inpainting, outpainting, and editing, our results suggest, need not be added to autoregressive image models\. They can be unlocked from the ones that exist\.

## Discovering Unseen Degradations to Adapt Open\-World Image Restoration

**Authors:** Boseong Kim; Tae Hyun Kim; Donghyeon Cho

**ID:** 148895 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uOrhK38Kpk>) | [PDF](<https://openreview.net/pdf?id=uOrhK38Kpk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148895>)

While all\-in\-one image restoration models excel in controlled, closed\-set environments, they face critical limitations when deployed in open\-world settings where paired supervision is unavailable and degradations are unknown and often intricately mixed\. To address this challenge, we propose a continual restoration framework that integrates degradation discovery with adaptive restoration\. Building on a model pre\-trained on known degradation categories, our method discovers unseen degradations in feature space and continually expands the degradation space\. We then introduce a discovery\- and instance\-conditioned descriptor that jointly captures discovered degradation priors and image\-specific characteristics, enabling robust restoration under ambiguous and intricately mixed degradations\. To further support adaptation under unpaired supervision, we adopt a mean\-teacher\-based semi\-supervised framework equipped with a reliable bank for pseudo\-target refinement\. Specifically, we propose a discovery\-adaptive score that assesses pseudo\-target reliability using feature\-space distances to degradation categories, enabling pseudo\-target selection to remain adaptive to newly discovered degradations rather than relying solely on conventional perceptual quality\-based scoring methods\. Experiments on both controlled open\-world protocols and real\-world adverse weather datasets demonstrate that our approach consistently outperforms existing methods across multiple image quality metrics while improving robustness to degradation composition shifts\.

## RISE\-Video: Can Video Generators Decode Implicit World Rules?

**Authors:** Mingxin Liu; Shuran Ma; Shibei Meng; Xiangyu Zhao; Zicheng Zhang; Shaofeng Zhang; Zhihang Zhong; Peixian Chen; Haoyu Cao; Xing Sun; Haodong Duan; Xue Yang

**ID:** 139505 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LriqPuIS7K>) | [PDF](<https://openreview.net/pdf?id=LriqPuIS7K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139505>)

While generative video models have achieved remarkable visual fidelity, their capacity to internalize and reason over implicit world rules remains a critical yet under\-explored frontier\. To bridge this gap, we present RISE\-Video, a pioneering reasoning\-oriented benchmark for Text\-Image\-to\-Video \(TI2V\) synthesis that shifts the evaluative focus from surface\-level aesthetics to deep cognitive reasoning\. RISE\-Video comprises 467 meticulously human\-annotated samples spanning eight rigorous categories, providing a structured testbed for probing model intelligence across diverse dimensions, ranging from commonsense and spatial dynamics to specialized subject domains\. Our framework introduces a multi\-dimensional evaluation protocol consisting of four metrics: \\textit\{Reasoning Alignment\}, \\textit\{Temporal Consistency\}, \\textit\{Physical Rationality\}, and \\textit\{Visual Quality\}\. To further support scalable evaluation, we propose an automated pipeline leveraging Large Multimodal Models \(LMMs\) to emulate human\-centric assessment\. Extensive experiments on 11 state\-of\-the\-art TI2V models reveal pervasive deficiencies in simulating complex scenarios under implicit constraints, offering critical insights for the advancement of future world\-simulating generative models\.

## ENACT: Single\-Image Human\-Scene Interaction Motion from Language via Foundation\-Model Orchestration

**Authors:** Sreehari Rajan; Kunal Kamalkishor Bhosikar; Charu Sharma; Nikos Athanasiou

**ID:** 150626 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ggS7kWFKgX>) | [PDF](<https://openreview.net/pdf?id=ggS7kWFKgX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150626>)

Given a single image of a room and a sentence such as \`\`a person walks to the black armchair and sits down,'' producing a 3D motion sequence of a virtual person performing the described action is out of reach for existing methods\. Scene\-conditioned methods need hours of paired \(scene, motion, language\) capture\. Zero\-shot methods need a pre\-scanned 3D scene\. Image\-based methods produce only static poses\. We propose a training\-free pipeline that synthesizes scene\-aware human\-scene interaction \(HSI\) motion from a single RGB image and a free\-form text prompt, with no HSI\-specific training and no pre\-scanned 3D scene\. The key observation is that every needed capability already exists as a frozen foundation model: the bottleneck is composition, not capability\. Our method, ENACT, uses a vision\-language model \(VLM\) for high\-level reasoning\. The VLM parses the input image and prompt into one structured keyframe per sentence, listing the action verb, the body part, the target object, a six\-bin contact yaw, an image\-edit prompt, and a foot\-grounding flag\. The keyframe then drives six frozen specialists: a monocular 3D model for the scene point cloud, an open\-vocabulary segmenter for object localization, a single\-view mesh reconstructor for object geometry, an instruction\-following image editor for a synthetic interaction image, an image\-conditioned human\-mesh recoverer for pose initialization, and a 2D\-grounded 3D contact predictor for object affordance\. Per\-keyframe contact poses are optimized under a whole\-body diffusion prior, and a constraint\-conditioned motion diffuser connects successive keyframes into one continuous motion\. ENACT achieves the lowest mean and maximum scene penetration and the lowest foot sliding among all baselines on a standard HSI benchmark, despite consuming the smallest input\. ENACT also generalizes to synthetic datasets and to in\-the\-wild phone images, including chained multi\-step interactions\.

## DriveStreamBench: Evaluating User\-Conditioned Watch\-and\-Notify in Streaming Driving Video

**Authors:** Yi Wang; Xin Zhao; Tian Meng; Rui Dai; Chi Zhang; Cui Tang; Bingzheng Liu; Fucheng Wang; Haopeng Zhang; Ruidong Ding; Yang Li; Kaikui Liu; Xiangxiang Chu

**ID:** 139662 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBbit0ejvP>) | [PDF](<https://openreview.net/pdf?id=CBbit0ejvP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139662>)

Vision\-language models \(VLMs\) have made steady progress as in\-vehicle driving assistants, yet existing evaluations largely remain offline, focusing on perception and short\-term reasoning over pre\-recorded driving scenes\. A complementary capability is still underexplored: whether a model can continuously monitor a causal driving video stream and issue a calibrated alert when a user\-specified condition is met\. Existing driving benchmarks mainly assess reactive understanding, while recent streaming video benchmarks are developed largely outside the driving domain\. To this end, we introduce DriveStreamBench, a driving and streaming video benchmark that organizes this capability spectrum into four cognitive levels constructed from a shared pool of driving events, to support level\-wise capability profiling and gated evaluation\. We evaluate various vision\-language models along with DriveStream\-SFT, a supervised reference baseline trained on the benchmark's training split, under a unified streaming protocol\.  DriveStreamBench tests a basic but necessary capability, and all evaluated models fall short of it; current vision\-language models are not yet ready for user\-conditioned alerting in driving\. Resources are available at https://anonymous\.4open\.science/r/DriveStreamBench/ and https://dataverse\.harvard\.edu/previewurl\.xhtml?token=01f6bc4c\-d809\-4e40\-b025\-b6d783c86571\.

## Learning a Task\-Adaptive Low\-Dimensional Semantic Space for Improved Visual Classification

**Authors:** Nikalal Helessage; Wanqing Li; Chris Bunn; Philip O Ogunbona

**ID:** 151661 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yzl6jqkOM4>) | [PDF](<https://openreview.net/pdf?id=Yzl6jqkOM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151661>)

Semantic visual classification commonly aligns visual embeddings with semantic spaces induced by pretrained text encoders\. However, such spaces are typically high\-dimensional, weakly aligned with visual feature geometry, and insufficiently discriminative for downstream classification tasks\. We propose TaSS, a framework for learning a task\-adaptive low\-dimensional semantic space that preserves semantic structure while explicitly optimizing class separability\. TaSS is constructed through a parameterized geometry transformation of pretrained text embeddings that enlarges inter\-class margins via distance reshaping and improves intra\-class compactness through prototype\-preserving semantic constraints\. The resulting semantic space maintains meaningful semantic relationships while producing a discriminative geometry tailored for classification\. Frozen visual encoder features are subsequently aligned to TaSS using a lightweight MLP, enabling improved discriminative learning without fine\-tuning pretrained backbones\. We further provide theoretical analysis showing that TaSS preserves semantic consistency while enforcing enhanced inter\-class separation and controlled intra\-class variance\. Extensive experiments on skeleton\-based human action recognition, video classification, and image classification benchmarks demonstrate consistent improvements over existing semantic alignment approaches, with gains exceeding 3 percentage points on average and up to 8\.5 points on challenging datasets\.

## The Value of Covariance Matching in Gaussian DDPMs and the Lanczos Sampler

**Authors:** Sahil Akhtar; Aymane El Gadarri; Vivek Farias; Adam Jozefiak

**ID:** 148184 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zfgaE5LyWU>) | [PDF](<https://openreview.net/pdf?id=zfgaE5LyWU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148184>)

A central error measure in Gaussian DDPMs is the path\-space KL divergence between the exact reverse chain and the learned Gaussian reverse process\. This quantity is especially relevant for procedures such as classifier guidance, which perturb the entire reverse trajectory rather than only the terminal sample\. Prior analyses show that standard isotropic reverse covariances suffer an unavoidable $\\Omega\(1/T\)$ path\-KL error as the number of denoising steps $T$ grows\. We show that matching the full posterior covariance breaks this barrier, yielding an order\-wise improvement that reduces the path KL to $O\(1/T^2\)$\. To make full covariance matching practical, we introduce the Lanczos Gaussian sampler, a training\-free, matrix\-free method for sampling from the optimal reverse covariance using only covariance\-vector products, which are available through Jacobian\-vector products of the posterior mean\. The sampler avoids dense covariance storage and auxiliary covariance models\. We prove that its approximation error decays exponentially in the number of Lanczos steps, where each Lanczos step requires a single Jacobian\-vector product\. Empirically, using only just three such steps improves sample quality over strong diagonal\-covariance baselines, including OCM\-DDPM, across standard image benchmarks\. This identifies full covariance matching as both theoretically valuable and practically accessible for fast DDPM sampling\.

## TACO: Towards Task\-Consistent Open\-Vocabulary Adaptation in Video Recognition

**Authors:** Minghao Zhu; Xiao Lin; Mengxian Hu; Xun Zhou; Liuyi Wang; Xiaoyan Qi; Chengju Liu; Qijun Chen

**ID:** 154934 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9qHLzDW8KJ>) | [PDF](<https://openreview.net/pdf?id=9qHLzDW8KJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154934>)

Adapting CLIP for open\-vocabulary video recognition necessitates a delicate balance between newly acquired video knowledge and the pretrained generalization\. While existing studies pursue this generalization\-specialization trade\-off with additional regularizations or constraints, we argue that they overlook the deviation of representations beyond the fine\-tuning data distribution, resulting in suboptimal adaptation effects\. We believe such deviation is inherited from the inconsistency between the fine\-tuning and evaluation objectives, where model optimization is restricted to the known training distribution but evaluated on unseen ones\. In this paper, we introduce \\emph\{TACO\}, a simple yet effective framework to mitigate the potential negative effects induced by this inconsistency\. Our key insight is that adaptation should preserve OOD\-relevant alignment beyond the training distribution\.  To this end, we propose \\emph\{Relative Structure Distillation\}, which regularizes the relative geometry of the representation space and suppresses harmful alignment shift during training\.  We further decouple the representation space from the optimization space with a lightweight specialization projection, allowing task\-specific adaptation without directly overspecializing the representations used at test time\. \\emph\{TACO\} establishes state\-of\-the\-art performance on diverse benchmarks under cross\-dataset and base\-to\-novel settings\. Code will be released\.

## Harnessing Image Diffusion Prior for Photo\-Realistic Video Restoration

**Authors:** Fanghua Yu; Hongyu An; Jinfan Hu; Xinqi Lin; Zhiyuan You; Jian Wang; Hongyang Li; Chao Dong; Jinjin Gu

**ID:** 151124 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=conEYoQsmd>) | [PDF](<https://openreview.net/pdf?id=conEYoQsmd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151124>)

Recent image generation models produce photo\-realistic results with rich details, but transferring their powerful priors to video restoration remains difficult due to temporal inconsistency from stochastic detail synthesis\. Existing video restoration methods improve temporal coherence but often sacrifice visual fidelity, leaving a gap between image\-level quality and video\-level stability\. We propose a generative video restoration method that bridges this gap by enabling temporally consistent detail synthesis from image generation priors\. Our method combines noise energy rebalancing to suppress structure\-disturbing low\-frequency stochasticity, motion\-aligned noise warping to propagate details along object motion, a self\-supervised denoising encoder to mitigate encoder\-induced temporal uncertainty, and decoupled temporal attention to model cross\-frame dependencies\. Together, these components preserve fidelity, enhance fine\-grained realism, and maintain temporal consistency\. Extensive experiments show that our method substantially outperforms existing video restoration approaches in visual quality, detail richness, and temporal stability\.

## Structured State\-Space Regularization for Generation\-Friendly Image Tokenization

**Authors:** Jinsung Lee; Jaemin Oh; Namhun Kim; Dongwon Kim; Byung\-Jun Yoon; Suha Kwak

**ID:** 151619 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZD298GwlMx>) | [PDF](<https://openreview.net/pdf?id=ZD298GwlMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151619>)

Image tokenizers play a central role in modern generative models, where the structure of the latent space critically determines the downstream generation performance\. A key but underexplored property of effective latent representations is spectral organization: the ability to encode information across frequency components\. In this work, we introduce structured state\-space regularization, a principled approach for inducing spectral structure in latent spaces\. We derive a regularization objective by revisiting state\-space models \(SSMs\) as dynamical systems over compressed representations\. This perspective reveals that hidden states of SSMs follow basis function dynamics under predefined input transformations, resulting in a novel regularizer form that enforces the latent space to capture spectral components of images\. Experiments demonstrate that our regularizer improves the generative performance of image tokenizers while incurring only minimal loss in their reconstruction fidelity\.

## FacEDiT: Talking Head Video Editing via Facial Motion Infilling

**Authors:** Sung\-Bin Kim; Joohyun Chang; David Harwath; Tae\-Hyun Oh

**ID:** 152285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UDOhx8aiSo>) | [PDF](<https://openreview.net/pdf?id=UDOhx8aiSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152285>)

Editing a local segment in a talking head video without reshooting the entire scene remains challenging and underexplored\. Given local edits, such as insertion, deletion, or substitution, talking head video editing must synthesize a replacement segment while leaving the rest unchanged\. This requires variable\-duration local rewriting while preserving identity, unedited regions, and boundary continuity, which standard speech\-driven generation and lip synchronization do not directly address\. Moreover, direct supervision is infeasible, as it requires paired videos of the same person and scene differing only in a local spoken segment, which does not exist in the real world\. We instead formulate talking head video editing as facial motion infilling, a self\-supervised pretext task that recovers masked facial motion from speech and surrounding motion context in ordinary video\-\-speech pairs\. The key insight is that local video editing can be simulated during training by masking a motion span and reconstructing it from speech and visible motion context\. Based on this formulation, we introduce FacEDiT, a mask\-controlled talking head model with local temporal attention bias and temporal smoothness regularization for improved lip\-\-speech alignment and transition continuity\. We also introduce FacEDiTBench, the first benchmark for talking head video editing, covering diverse edit types and lengths with dedicated evaluation metrics\. Extensive experiments show that FacEDiT produces accurate, speech\-aligned edits with strong identity preservation and seamless boundary transitions\. Beyond editing, the same facial motion infilling model extends to portrait animation and lip synchronization by simply changing the mask pattern, establishing FacEDiT as a unified framework for talking head video editing and generation\.    \\textit\{We will release the code and data upon acceptance\.

## Past as State, Present as Attention: Persistent\-State Blockwise Flow Matching for Long\-Horizon Co\-Speech Motion Generation

**Authors:** Yi Liu; Xiangyue Zhang; Jia Ma; Jianfang Li; Yisheng He; Jianqiang Ren

**ID:** 151064 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dGHAQR4OKs>) | [PDF](<https://openreview.net/pdf?id=dGHAQR4OKs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151064>)

Co\-speech motion generation remains challenging over long horizons due to the need for temporal coherence and consistent style\. Existing methods typically generate long motions segment by segment, either conditioning on a short seed of recent frames, which gradually drifts, or retaining ever\-longer explicit histories, which are costly to maintain and hard to learn from limited data\. We trace these limitations to a key asymmetry between past and present: past motion carries slowly varying style that should be compactly summarized, whereas the current segment exhibits fast\-changing local dynamics that require fine\-grained modeling\. This asymmetry motivates a simple $\\textbf\{P\}$ast\-$\\textbf\{A\}$s\-$\\textbf\{S\}$tate, $\\textbf\{P\}$resent\-as\-$\\textbf\{A\}$ttention principle for long\-horizon co\-speech motion generation\. Following this principle, we propose $\\textbf\{PASPA\}$, which summarizes past history with an inter\-block persistent state and models the current segment with intra\-block bidirectional self\-attention\. We instantiate PASPA within a blockwise flow matching framework, with multi\-block supervision for effective training over variable histories, prefill\-decode state caching for efficient rollout, and hybrid classifier\-free guidance for enhanced history and speech conditioning\. Extensive public\-benchmark experiments show that PASPA achieves state\-of\-the\-art FGD performance and preserves motion style across long\-sequence generation\.

## LSVD: Loss\-Aware Low\-Rank Approximation for Efficient Low\-Precision Vision\-Language Models

**Authors:** Haiyu Wang; Yutong Wang; Leshu Li; Yihui Ren; Sai Qian Zhang

**ID:** 153335 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4tqmEOVbT>) | [PDF](<https://openreview.net/pdf?id=M4tqmEOVbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153335>)

Vision\-language models \(VLMs\) deliver strong multimodal reasoning capabilities, but their large computational cost and high parameter counts make deployment challenging on resource\-constrained devices\. Low\-rank decomposition has emerged as a promising compression technique, yet existing methods often optimize local matrix reconstruction error, rely on uniform or heuristic rank allocation, and focus mainly on attention projections while leaving feed\-forward networks underexplored\. In this paper, we propose\~\\textit\{LSVD\}, a loss\-aware low\-rank approximation framework for efficient low\-precision VLMs\. LSVD derives a curvature\-weighted SVD objective from a second\-order approximation of the model loss and uses Kronecker\-factored Fisher information to guide decomposition toward downstream performance rather than reconstruction alone\. We further introduce a loss\-aware cross\-layer rank allocation strategy based on calibration gradients, enabling more effective parameter budgeting across layers\. Finally, we extend low\-rank compression to FFN layers through a hybrid scheme that combines SVD with quantization\. The evaluation results show that LSVD achieves over $2\.3\\times$ decoding speedup over previous work while preserving strong accuracy under low\-precision inference\.

## Visual\-to\-Executable Procedural Reconstruction of Buildings\.

**Authors:** Zichong Zhu; Zhihao Liu; Andrei Sharf; Zhanglin Cheng

**ID:** 155329 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6RJyjobUEW>) | [PDF](<https://openreview.net/pdf?id=6RJyjobUEW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155329>)

Procedural generation is well\-suited for modeling 3D buildings, as architectural structures are naturally composed of repetitive and parameterized components\. It provides a compact and editable representation by encoding geometry through executable rules\. However, constructing such procedural representations typically relies on manually designed grammars, making them difficult to obtain in practice\. We study image\-based procedural facade reconstruction, where the goal is to recover an editable building procedural representation from an in\-the\-wild building image\. We propose a hierarchical neuro\-symbolic framework that decomposes the reconstruction into two coupled levels: a global structure layout tree for split\-and\-repeat facade organization, and a component parameterization representation for local architectural\. A fine\-tuned layout model recovers and refines the global structure through rendered visual feedback, while a tile\-level predictor maps representative component crops to structured procedural attributes\. The two representations are then deterministically compiled into executable CGA programs\. Experiments show that our method achieves strong performance on both regular facades and challenging in\-the\-wild images, while maintaining high structural consistency and procedural executability\. In addition, the tile\-level predictor improves fine\-grained architectural detail, enabling accurate and controllable component synthesis\.

## VINCIE\-NExT: Unlocking Video Editing from Images via In\-Context Modeling

**Authors:** Leigang Qu; Feng Cheng; Ziyan Yang; Bangbang Yang; Zhaoyang Huang; Wei Chow; Yicong Li; Wenjie Wang; Tat\-Seng Chua; Yan Zeng

**ID:** 152863 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PosCNbmdH8>) | [PDF](<https://openreview.net/pdf?id=PosCNbmdH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152863>)

Building a capable video editor remains significantly harder than a video generator: editing requires \(source, instruction, edited\) triplets that are prohibitively expensive to annotate and difficult to synthesize at scale, whereas image editing has already reached maturity with millions of such pairs readily available\. In this work, we introduce Chain\-of\-Editing, a unified framework that transfers editing capability from images to videos through in\-context visual demonstrations, alleviating the need for large\-scale paired video editing data\. Chain\-of\-Editing decomposes video editing into a structured chain of composable sub\-tasks \(Video to Image to Image to Video\), routing editing intent through the image domain and enabling scalable joint training from heterogeneous image and video corpora under a unified diffusion objective\. An image editing pair, synthesized by the model or supplied by the user, is prepended as an in\-context visual demonstration that serves as a spatial appearance blueprint for every output frame\. To ground appearance edits across the interleaved context, we introduce a novel position encoding that links image demonstrations and video frames in a shared spatial coordinate system, enabling pixel\-faithful propagation of appearance changes to every output frame\. Chain\-of\-Editing further provides principled test\-time scaling: by executing the sub\-task chain as progressive diffusion stages, editing quality can be improved by investing additional compute without retraining\. Comprehensive experiments on OpenVE\-Bench demonstrate the state\-of\-the\-art performance across diverse editing categories, with ablations confirming the effectiveness of each component\.

## WorldReasonBench: Human\-Aligned Stress Testing of Video Generators as Future World\-State Predictors

**Authors:** Keming Wu; Yijing Cui; Wenhan Xue; Qijie Wang; Xuan Luo; ZhiYuan Feng; Zuhao Yang; Sudong Wang; Sicong Jiang; Haowei Zhu; Zihan Wang; Ping Nie; Wenhu Chen; Bin Wang

**ID:** 138917 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x1JYbqADOo>) | [PDF](<https://openreview.net/pdf?id=x1JYbqADOo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138917>)

Commercial video generation systems such as Seedance2\.0 and Veo3\.1 have rapidly improved, strengthening the view that video generators may be evolving into "world simulators\." Yet the community still lacks a benchmark that directly tests whether a model can reason about how an observed world should evolve over time\. We introduce WorldReasonBench, which reframes video generation evaluation as world\-state prediction: given an initial state and an action, can a model generate a future video whose state evolution remains physically, socially, logically, and informationally consistent? WorldReasonBench contains 436 curated test cases with structured ground\-truth QA annotations spanning four reasoning dimensions and 22 subcategories\. We evaluate generated videos with a human\-aligned two\-part methodology: Process\-aware Reasoning Verification uses structured QA and reasoning\-phase diagnostics to detect temporal and causal failures, while Multi\-dimensional Quality Assessment scores reasoning quality, temporal consistency, and visual aesthetics for ranking and reward modeling\. We further introduce WorldRewardBench, a preference benchmark with approximately 6K expert\-annotated pairs over 1\.4K videos, supporting pair\-wise and point\-wise reward\-model evaluation\. Across modern video generators, our results expose a persistent gap between visual plausibility and world reasoning: videos can look convincing while failing dynamics, causality, or information preservation\. We will release our benchmarks and evaluation toolkit to support community research on genuinely world\-aware video generation\.

## GenZ: Hybrid statistical–foundational models for knowledge discovery from real\-valued multidimensional targets

**Authors:** Marko Jojic; Nebojsa Jojic

**ID:** 151515 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4poCCC5UA>) | [PDF](<https://openreview.net/pdf?id=a4poCCC5UA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151515>)

We present GenZ, a hybrid model that turns a foundational model \(FM\) into a \{\\bf knowledge\-discovery engine\} explaining variation in real\-valued multidimensional targets\. The FM is treated as a noisy oracle that can answer yes/no questions about a semantic item $s$ \(text, image, or both\) and GenZ learns \{\\bf which questions to ask\} so that the answers $\\bz$ explain the statistical link to a possibly high\-dimensional target $\\by$\. Discovery is driven by \{\\bf group reasoning\}: at each step, the model partitions items by the posterior of the current latent features, and asks the FM to articulate the semantic commonality that explains the divide\. The resulting feature descriptors $\\theta\_f$ are the primary product\-\-\-human\-readable hypotheses about why $s$ predicts $\\by$\-\-\-while predictive accuracy is a secondary, but consistently strong, by\-product \(e\.g\.\~beating both the 0\-shot FM baseline and TabPFN on LLM embeddings of the same items in hedonic price regression\)\. Across four domains\-\-\-hedonic house pricing, Netflix cold\-start recommendations, Arizona species ecology, and human visual\-cortex fMRI\-\-\-GenZ recovers dataset\-specific structure that the FM does not surface from priors alone\. Holding the items $s$ fixed and varying only the target $\\by$ \(Arizona species under spatial/taxonomic/functional targets; the same natural images under FFA/EBA/PPA brain responses\) yields \{\\bf qualitatively different\} discovered feature sets, demonstrating that GenZ characterizes the $s\\\!\\to\\\!\\by$ link rather than the marginal distribution of $s$\.

## HOMIE: Human\-object Centric Video Personalization via Multimodal Intelligent Enhancement

**Authors:** Yiyang Cai; Nan Chen; Rongchang Xie; Junwen Pan; Chunyang Jiang; Cheng CHEN; Chang Liu; Zhenbang Sun; Wei Xue; Wenhan Luo; Yike Guo

**ID:** 150641 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gYlKsADA2i>) | [PDF](<https://openreview.net/pdf?id=gYlKsADA2i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150641>)

Human\-object\-centric video personalization \(HOCVP\) is a core task within subject\-driven video generation\. However, existing methods suffer from two key limitations\. First, most approaches focusing on $\\textit\{inter\-subject\}$ personalization still struggle to strike a balance between high subject fidelity and accurate interaction patterns between humans and diverse objects, especially when objects represent abstract concepts such as logos\. Second, while $\\textit\{intra\-subject\}$ references \($\\textit\{e\.g\.\}$, OCR maps, multi\-view inputs\) are expected to enhance subject fidelity, most existing works lack mechanisms to understand such latent correspondence\. To address both challenges, we propose HOMIE, an HOCVP framework that tackles both inter\- and intra\-subject input settings in a unified manner\. Compared to previous approaches, HOMIE proposes a better MLLM integration strategy to extract knowledge of reference\-level relationships without compromising the controllability of text encoders or incurring costly re\-alignment\. Specifically, we introduce global multimodal guidance within self\-attention to better align MLLM\-derived semantic features with VAE tokens\. Furthermore, we propose modality\-reference embedding to differentiate tokens from MLLM features and VAE tokens and associate intra\-subject reference image tokens\. Extensive experiments validate that our method achieves state\-of\-the\-art performance across various HOCVP tasks\. Anonymous project page with videos is available at https://homie\-demo\.github\.io/\.

## AgentVista: Evaluating Multimodal Agent in Ultra\-Challenging Realistic Visual Scenarios

**Authors:** Zhaochen Su; Jincheng Gao; Hangyu Guo; Zhenhua Liu; Lueyang Zhang; Xinyu Geng; Shijue Huang; Peng Xia; Guanyu Jiang; Cheng Wang; Yue Zhang; Yi R\. \(May\) Fung; Junxian He

**ID:** 153463 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7xyzwUody>) | [PDF](<https://openreview.net/pdf?id=L7xyzwUody>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153463>)

Real\-world multimodal agents solve multi\-step workflows grounded in visual evidence\. For example, an agent can troubleshoot a device by linking a wiring photo to a schematic and validating the fix with online documentation, or plan a trip by interpreting a transit map and checking schedules under routing constraints\. However, existing multimodal benchmarks mainly evaluate single\-turn visual reasoning or specific tool skills, and they do not fully capture the realism, visual subtlety, and long\-horizon tool use that practical agents require\. We introduce AgentVista, a benchmark for generalist multimodal agents that spans 25 sub\-domains across 7 categories, pairing realistic and detail\-rich visual scenarios with natural hybrid tool use\. Tasks require long\-horizon tool interactions across modalities, including web search, image search, page navigation, and code\-based operations for both image processing and general programming\. Comprehensive evaluation of state\-of\-the\-art models exposes significant gaps in their ability to carry out long\-horizon multimodal tool use\. Even the best model in our evaluation, GPT\-5\.4 with tools, achieves only 31\.58% overall accuracy, and hard instances can extend to 25 tool\-calling turns\. We expect AgentVista to accelerate the development of more capable and reliable multimodal agents for realistic and ultra\-challenging problem solving\.

## Towards On\-Policy Data Evolution for Visual\-Native Multimodal Deep Search Agents

**Authors:** Shijue Huang; Hangyu Guo; Guanting Dong; Chenxin Li; Junting Lu; Xinyu Geng; Zhaochen Su; Zhenyu Li; Shuang Chen; Hongru WANG; Yi R\. \(May\) Fung

**ID:** 148687 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vnIJBAvcbS>) | [PDF](<https://openreview.net/pdf?id=vnIJBAvcbS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148687>)

Multimodal deep search requires an agent to solve open\-world problems by chaining search, tool use, and visual reasoning over evolving textual and visual context\. Two bottlenecks limit current systems\. First, existing tool\-use harnesses treat images returned by search, browsing, or transformation as transient outputs, so intermediate visual evidence cannot be re\-consumed by later tools\. Second, training data is usually built by fixed curation recipes that cannot track the target agent's evolving capability\. To address these challenges, we first introduce a visual\-native agent harness centered on an image bank reference protocol, which registers every tool\-returned image as an addressable  reference and makes intermediate visual evidence reusable by later tools\. On top of this harness, On\-policy Data Evolution \(ODE\) runs a closed\-loop data generator that refines itself across rounds from rollouts of the policy being trained\. This per\-round refinement makes each round's data target what the current policy still needs to learn\. The same framework supports both diverse supervised fine\-tuning data and policy\-aware reinforcement learning data curation, covering the full training lifecycle of the target agent\.  Across 8 multimodal deep search benchmarks, ODE improves the Qwen3\-VL\-8B agent from 24\.9% to 39\.0% on average, surpassing Gemini\-2\.5 Pro in standard agent\-workflow setting \(37\.9%\)\. At 30B, ODE raises the average score from 30\.6% to 41\.5%\. Further analyses validate the effectiveness of image\-bank reuse, especially on complex tasks requiring iterative visual refinement, while rollout\-feedback evolution yields more grounded SFT traces and better policy\-matched RL tasks than static synthesis\.

## ExtraVAR: Stage\-Aware RoPE Remapping for Resolution Extrapolation in Visual Autoregressive Models

**Authors:** Feihong Yan; Shaoyu Liu; Haixuan Wang; Shuai Lu; Weijie Ma; Linfeng Zhang; Huiqi Li; Xiangyang Ji

**ID:** 149109 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=spQoCaKIYY>) | [PDF](<https://openreview.net/pdf?id=spQoCaKIYY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149109>)

Visual Autoregressive \(VAR\) models have emerged as a strong alternative to diffusion for image synthesis, yet their fixed training resolution prevents direct generation at higher resolutions\. Naively transferring training\-free extrapolation methods from LLMs or diffusion models to VAR yields three characteristic failure modes: global repetition, local repetition, and detail degradation\. We trace them to a unified band\-stage mismatch: VAR generates images in a coarse\-to\-fine, scale\-wise process where each stage is driven by a distinct dominant RoPE frequency band, and each failure mode emerges when the dominant band of a particular stage is disrupted\. Building on this insight, we propose Stage\-Aware RoPE Remapping, a training\-free strategy that assigns each frequency band a stage\-specific remapping rule, jointly suppressing all three failure modes\. We further observe that attention becomes systematically dispersed as the image resolution increases\. Existing methods typically depend on predefined attention scaling factors, which are neither adaptive to the target resolution nor capable of faithfully capturing the actual extent of attention dispersion\. We therefore propose Entropy\-Driven Adaptive Attention Calibration, which quantifies dispersion via a resolution\-invariant normalized entropy and yields a closed\-form per\-head scaling factor that realigns the extrapolated\-resolution attention entropy with its training\-resolution counterpart\. Extensive experiments show that our method consistently outperforms prior resolution\-extrapolation methods in both structural coherence and fine\-detail fidelity\. Our codes have been released in supplementary materials and will be released on Github\.

## Watching Itself Watch: Self\-Auditing Visual Reliance for Video Reasoning

**Authors:** Rohan Dugad; Romy Luo; Kristen Grauman

**ID:** 152190 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UstDw3BBZv>) | [PDF](<https://openreview.net/pdf?id=UstDw3BBZv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152190>)

Video reasoning has a distinctive structure: in a chain of thought over video, most tokens follow from prior text, but a small minority hinge on specific moments of the visual input\-\-\-and which tokens those are varies from one example to the next\. Current post\-training procedures like GRPO supply supervision that is coarse in exactly this dimension, applying a single scalar reward uniformly across the trajectory while requiring many rollouts and/or costly external judge models\. Our key observation is that a model can audit its own visual reliance: at any position, the shift in its next\-token distribution when the video is removed from context measures how much that prediction actually used what was seen\. Computing this quantity for both a student and a privileged teacher yields a per\-token \\emph\{reliance gap\} that localizes positions at which the teacher's predictions depend on the video and the student's do not\. We introduce Visually\-Aware On\-Policy Self\-Distillation \(VIOS\), which turns this self\-auditing signal into dense per\-token supervision recovered from a single rollout of a single model\-\-\-no external reward, judge, or larger teacher required\. VIOS combines three components: an exponential moving average \(EMA\) teacher that co\-evolves with the student to avoid the ceiling of a frozen rationalizer; a contrastive term that increases the student's sensitivity to the video input; and a reliance gap gate that concentrates supervision on the positions identified\. Across 12 benchmarks spanning general, temporal, spatial, knowledge, and long\-video understanding, VIOS consistently outperforms its base model and contemporary video\-reasoning systems while training in over $9\\times$ fewer steps\.

## Exposing and Mitigating Temporal Attack in Deepfake Video Detection

**Authors:** Zheyuan Gu; Minghao Shao; Zhen Wang; Keyu Mao; Ailiang Lin; Shijie Zhang; hao jiang; mingyou liang; Mingkun Xu; Yusong Wang

**ID:** 152775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QSc3qGboAK>) | [PDF](<https://openreview.net/pdf?id=QSc3qGboAK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152775>)

While spatiotemporal deepfake detectors have shown high AUC, our experiments reveal that they remain susceptible to evasion attacks\.  These models tend to overfit on fragile temporal spectrum cues, rather than learning robust semantic causality\.  To mitigate this vulnerability, we propose SpInShield, a temporal spectral\-invariant defense framework explicitly designed to decouple semantic motion from manipulatable spectral artifacts\. We propose a learnable spectral adversary that dynamically synthesizes severe spectral deformations, simulating extreme attack scenarios\.  By employing a shortcut suppression optimization strategy, SpInShield compels the encoder to extract reliable forensic cues while autonomously purging unstable spectral statistics from the latent space\.  Experiments show that SpInShield obtains competitive performance on widely used datasets and outperforms the strongest baseline by 21\.30\\% AUC under simulated amplitude spectral attacks\.

## Selective Disk Bispectrum: A Complete and Rotation Invariant Image Descriptor

**Authors:** Adele Lantow; Nina Miolane

**ID:** 151621 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZBFrV7kiwX>) | [PDF](<https://openreview.net/pdf?id=ZBFrV7kiwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151621>)

Rotation invariance is a fundamental requirement across many computer vision tasks\. Historically, this inductive bias has been encoded through hand\-crafted rotation\-invariant representations\. These are compact, interpretable, and fast to compute, but they come at the cost of descriptive power\. More recently, architectures achieve inductive bias through learned representations\. These are highly descriptive and achieve strong empirical performance, at the cost of efficiency and interpretability\. In this work, we propose an alternative at the intersection of both paradigms\. We introduce the selective disk bispectrum \(SDB\), a complex\-valued rotation\-invariant vector that preserves all information about the image except its orientation\. Our key theoretical contributions are the selective disk bispectrum, its inversion, its \(reduced\) spatial and computational complexities \(compared to the full disk bispectrum\), and its expectation and variance under noise\. Furthermore, we propose a numerical SDB approximation and provide theoretical guarantees for its accuracy and rotation invariance\. Empirically, we validate SDB's invariance and robustness to noise classification tasks\. We test our reconstruction algorithm on multi\-reference alignment of rotated images\.

## Balancing Image Compression and Generation with Bootstrapped Tokenization

**Authors:** Haozhe Chi; Jinghan Li; Hao Jiang; Wu Sheng; Yi Ma; Jing Wang; Yadong Mu

**ID:** 155939 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1fSMXPTPyJ>) | [PDF](<https://openreview.net/pdf?id=1fSMXPTPyJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155939>)

Despite progress in image tokenization, standard methods encode redundant information by mixing all granularities within each token, thus redundancy persists between tokens\. The mix of information of different granularity also complicates the training of generators\. This paper introduces SelfBootTok, a method that resolves this by cleanly decomposing information into global and local token groups\. Through self\-bootstrapped learning, the model predicts local details exclusively from global tokens, shifting the burden of visual details from the generator to the tokenizer\. Consequently, our generator is far more efficient, requiring only global tokens and reducing computation by approximately 40\\%, while delivering superior reconstruction and generation\. Moreover, this paradigm scales elegantly: by leveraging more data or parameters to self\-supervise local representation learning, SelfBootTok achieves a new state\-of\-the\-art gFID score of 1\.56 using only 64 tokens\.

## Beyond Token Representations: Explicit Visual Object Grounding for Video Reasoning Segmentation

**Authors:** Jun Huang; zhangjunyang; Zijie Yue; Bingkun Wang; Yong Luo; Miaojing Shi

**ID:** 155293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6eYrXF03nQ>) | [PDF](<https://openreview.net/pdf?id=6eYrXF03nQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155293>)

Video Reasoning Segmentation \(VRS\) aims to infer and segment target objects specified by reasoning queries in videos\. Existing methods typically first infer the target and generate a few segmentation tokens for it, which are then fed into a mask decoder for mask prediction\. However, such segmentation tokens tends to be both semantically monotonous and spatially ambiguous, making them largely insufficient to represent the target to guide mask prediction\. In this paper, we propose an explicit visual object grounding framework for VRS\. Specifically, we first propose a spatial\-aware prompt generation and refinement scheme, in which we query a multimodal large language model to generate explicit spatial prompts \(\\ie, bounding box and point set\) for the target and then refine them through multi\-step dialogue\. Furthermore, we introduce a query diversification and alignment module to generate auxiliary queries that describe the same target from different perspectives\. We then enforce cross\-query consistency between their predicted spatial prompts to alleviate the training bias caused by query limitation\. Finally, we selects several reliable frames using a prompt\-based keyframe selection strategy to support mask decoding and propagation\. Extensive experiments on eight datasets demonstrate that our method significantly outperforms state of the art methods\.

## DiT4DiT: Jointly Modeling Video Dynamics and Actions for Generalizable Robot Control

**Authors:** Teli Ma; Jia Zheng; Zifan Wang; Chunli Jiang; Andy Cui; Junwei Liang; Shuo Yang

**ID:** 153594 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KG3sjtKCP6>) | [PDF](<https://openreview.net/pdf?id=KG3sjtKCP6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153594>)

Vision\-Language\-Action \(VLA\) models inherit their visual backbone from static image\-text pretraining, leaving physical dynamics to be learned from scarce action data\. Generative video models, by contrast, already encode motion, contact, and implicit physics at internet scale\. We introduce DiT4DiT, a Video\-Action Model \(VAM\) that couples a Video Diffusion Transformer with an Action Diffusion Transformer and co\-trains them under a dual flow\-matching objective with a tri\-timestep scheme for video supervision, action supervision, and feature extraction\. The key insight is that the policy does not need to generate a future video: we intercept the Video DiT's hidden state at a single fixed flow timestep, turning a multi\-step video rollout into a one\-shot feature extraction consumed by the Action DiT\. Across benchmarks, DiT4DiT sets new SOTA averages on LIBERO \(98\.6%\) and the 24\-task RoboCasa\-GR1 suite \(56\.7%\), outperforming strong VLA and video\-based baselines\. On a real Unitree G1, DiT4DiT reaches 73\.8% on eight tabletop tasks and 72\.2% on three whole\-body loco\-manipulation tasks, running up to 12$\\times$ faster than prior VAM baselines while also exceeding them in accuracy\. To our knowledge, this is the first video\-generation\-based policy to run humanoid whole\-body control at real\-time rates\. It further generalizes zero\-shot to unseen object categories and scene variations\. Together, these results indicate that video\-dynamics priors, accessed through a single forward pass, are a practical and scalable foundation for generalist robot policies\.

## CoVisIT: Cross\-modal Prior Guided Diffusion Model for Visible\-to\-Infrared Image Translation

**Authors:** Linfeng Tang; Tong Hu; Zizhuo Li; Hao Zhang; Han Xu; Zhenfeng Shao; Jiayi Ma

**ID:** 152458 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Syljya6tdQ>) | [PDF](<https://openreview.net/pdf?id=Syljya6tdQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152458>)

Visible sensors provide rich scene details but are vulnerable to adverse conditions, whereas infrared sensors capture thermal radiation distributions and are more robust to environmental variations\. However, acquiring high\-resolution infrared images remains challenging due to sensor limits and hardware costs, and collecting pixel\-wise aligned visible\-infrared pairs is even more difficult\. Existing methods mainly rely on infrared super\-resolution or visible\-to\-infrared \(VIS\-to\-IR\) translation: the former preserves thermal distributions but lacks fine details and spatial alignment with visible images, while the latter benefits from fine\-grained structural cues but faces an ill\-posed thermal\-distribution inference problem\. To overcome these limitations, we propose CoVisIT, a cross\-modal prior guided diffusion model for VIS\-to\-IR image translation\. Our key insight is to constrain VIS\-to\-IR translation with complementary cross\-modal priors, using high\-resolution visible images to recover fine\-grained scene details and misaligned low\-resolution infrared inputs to anchor reliable thermal distributions\. To achieve this, we build upon a latent diffusion framework and develop a Cross\-Modal Adaptation module that modulates visible and infrared features in a shared feature space, thereby reducing the modality gap and exploiting complementary cross\-modal priors\. To further address local misalignment, we introduce a Dynamic Kernel Generation Module to predict input\-adaptive kernels and embed a Multi\-Scale Dynamic Convolution Module into the denoising U\-Net, enabling dynamic local feature aggregation for implicit alignment\. As a result, CoVisIT generates high\-resolution, visible\-aligned infrared images with reliable thermal distributions\. Extensive experiments demonstrate state\-of\-the\-art performance and consistent improvements in downstream tasks\.

## TimeTraveler: Temporal Strategy Planning with Time Dictionary for Streaming Video Understanding

**Authors:** Minkuk Kim; Junho Kim; Seong Tae Kim

**ID:** 155785 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2vEb4EhU3O>) | [PDF](<https://openreview.net/pdf?id=2vEb4EhU3O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155785>)

Streaming video understanding \(SVU\) requires models to answer user queries over continuously evolving video streams\. Unlike offline video QA, SVU must handle queries whose evidence may lie in the past, appear in the current scene, or emerge only after future observations\. Existing streaming video systems often rely on compact visual memories or fixed evidence\-access schemes, which can lose fine\-grained details and fail to adapt the answering process to the temporal intent of each query\. In this paper, we propose TimeTraveler, a streaming VQA framework that performs temporal strategy planning with a Time Dictionary\. Inspired by the need to search across different temporal regions of a stream, TimeTraveler stores each observed moment as a timestamp\-indexed structured caption and uses this dictionary as an explicit source of queryable evidence\. Given a query, TimeTraveler determines whether to recall past evidence, read the present context, or wait for future observations, and then applies a strategy\-specific evidence acquisition process\. Comparative experiments on streaming video QA benchmarks show that TimeTraveler improves streaming question answering by preserving fine\-grained temporal evidence and selecting the appropriate temporal strategy for each query\.

## Data Density Scaling Laws for Image Self\-Distillation

**Authors:** Alvard Barseghyan; Ani V Vanyan; Hakob Tamazyan; Hrant Khachatryan

**ID:** 150410 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iFfvOd4ve5>) | [PDF](<https://openreview.net/pdf?id=iFfvOd4ve5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150410>)

Current scaling law formulations suggest that increasing the number of unique samples in a dataset consistently improves model performance, while repeated exposure to the same samples provides diminishing value\. In this work, we challenge this assumption for image self\-distillation models\. Through systematic experiments across diverse datasets, namely Maxar, Waymo, and ImageNet, we demonstrate that the effects of sample repetition on downstream performance are non\-trivial and dataset\-dependent\. We discovered one scenario when repeatedly training on a subset of data can outperform training on a larger set of unique samples\. This finding highlights a critical limitation of existing scaling laws\. To address this gap, we propose a modified version of the Chinchilla scaling law that explicitly disentangles two factors: number of unique samples and repetition per sample\. This formulation provides a more precise framework for understanding data\-compute trade\-offs and better predicts performance in regimes where repetition play a central role\. Finally, we analyze how the inherent diversity of the smaller unique subset influences final downstream performance\.

## Controllable Multi\-label Video Safety Detection via Adaptive Tversky Policy Optimization

**Authors:** Guangyu Yang; Jingbiao Mei; Mingsheng Sun; Jinghong Chen; Yingtong Bu; Pengda Qin; Da Chen; Bill Byrne

**ID:** 155376 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=66AVx7heNO>) | [PDF](<https://openreview.net/pdf?id=66AVx7heNO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155376>)

The rapid growth of video\-based social media has increased users’ exposure to harmful content, creating a need for reliable automated video safety detection\. Although recent Vision\-Language Models \(VLMs\) show strong video understanding capabilities, existing harmful video detection systems face two key limitations: they typically reduce safety detection to binary classification, overlooking the inherently multi\-label nature of unsafe videos, and they rely on static training objectives that do not support controllable precision\-recall trade\-offs, though the desired operating point may vary across moderation pipelines and unsafe categories\. To address these gaps, we propose Adaptive Tversky Policy Optimization \(ATPO\), a reinforcement learning framework for Multi\-label Video Safety Detection \(Multi\-VSD\)\. ATPO introduces the Adaptive Tversky Reward \(ATR\), which dynamically adjusts false\-positive and false\-negative penalties during training to enable controllable precision–recall trade\-offs\. Experiments on SafeWatch\-Bench and XD\-Violence show that ATPO substantially improves multi\-label performance, increasing the Jaccard Index from 40\.66 to 75\.44 on SafeWatch\-Bench\-Real\. Moreover, ATR enables reliable steering of the precision–recall operating point, supporting deployment scenarios with heterogeneous policy requirements\.

## LongSCOP: Semantically Consistent Long Video Outpainting

**Authors:** Yu Tang; Zhiyuan You; Zhixiao Wang; Fanghua Yu; Qingyu Zhang; Xiang Yin; Chao Dong; Jinjin Gu

**ID:** 153735 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J99B4Y1GNG>) | [PDF](<https://openreview.net/pdf?id=J99B4Y1GNG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153735>)

Long video out\-painting is an important yet underexplored problem, while existing video out\-painting methods are mainly developed for relatively short clips\. However, extending video out\-painting to long videos is highly challenging\. A natural solution is iterative out\-painting, \\ie, generating videos chunk by chunk, but this introduces two major issues: unstable even crashed long\-horizon generation caused by inter\-chunk inconsistency and accumulated errors, and semantic drift over long temporal horizons\. In this paper, we propose LongSCOP, short for Semantically Consistent long Video Out\-Painting\. First, we provide a fundamental training recipe with three components for smooth and stable long\-horizon generation: self\-forcing training, latent calibration, and future references\. Built upon this stable generation foundation, a more advanced requirement is semantic consistency, for which we further develop a VLM\-based agent that automatically selects the most informative reference frames from the whole video, enabling coherent subjects, scenes, and backgrounds throughout long\-range generation\. To support training and evaluation, we construct a large\-scale, high\-quality training dataset and introduce LVO\-Bench, a dedicated benchmark curated by human experts for assessing long\-horizon stability and semantic consistency\. Extensive experiments demonstrate clear advantages of our method over existing approaches in both generation stability and semantic coherence, significantly improving the quality and reliability of long video out\-painting\.

## Unaligned Image Guided Denoising via Cross\-modal Conditional Flow Matching

**Authors:** Runmin Zhang; Linshan Li; Si\-Yuan Cao; Zhu Yu; Lingyu Zhu; Huaqi Zhang; Hui\-liang Shen

**ID:** 148480 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xUc5mPpRrP>) | [PDF](<https://openreview.net/pdf?id=xUc5mPpRrP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148480>)

This work presents UGD\-FM, a novel unaligned image guided denoising framework based on cross\-modal conditional flow matching\. Unlike previous approaches that assume spatially aligned inputs or only handle small\-baseline rectified pairs, we address a more challenging setting where severe target noise and large\-range two\-dimensional cross\-modal misalignment coexist\. Specifically, we formulate guided denoising as a progressive flow matching process, allowing image restoration and aligned guidance aggregation to mutually reinforce each other\. To support efficient few\-step inference, we introduce a stage\-focused and inference\-consistent training strategy that focuses on task\-critical denoising stages, and mitigates the training\-inference mismatch\. We further propose adaptive sparse guidance propagation for efficient and reliable large\-range matching, regularized by content and geometry level auxiliary losses\. Experiments demonstrate that UGD\-FM achieves state\-of\-the\-art denoising performance with only one or two inference steps, and is compatible with modern single\-image restoration backbones\.

## Detect Anything in Graphic Design: Element\-Level Rewards for Autoregressive Detection

**Authors:** Jiangning Zhu; Bowen Li; Shenyu Qiao; Yima Gu; Zhao Zhang; Yuhui Yuan; Shixia Liu

**ID:** 150451 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hwvqsWfZFI>) | [PDF](<https://openreview.net/pdf?id=hwvqsWfZFI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150451>)

Graphic designs, such as posters, advertisements, and infographics, are an important medium for communicating information and shaping understanding\. Unlike natural images, they consist of layered elements with explicit compositional order\. However, existing object detection models treat these elements as an unordered set, leaving compositional order unexploited\. To address this limitation, we present \*\*D\*\*etect \*\*A\*\*nything in Graphic \*\*D\*\*esign \(DAD\), a model that formulates graphic design detection as compositional deconstruction\.  It decodes elements in compositional order, using lower\-layer elements to better detect higher\-layer ones\. The key feature of DAD is amodal detection, which predicts the full bounding box of each element, including regions occluded by elements placed above it\. Building on this formulation, we propose \*\*Ele\*\*ment \*\*R\*\*elative \*\*P\*\*olicy \*\*O\*\*ptimization \(EleRPO\), which extends GRPO from sequence\-level supervision to element\-level optimization\.  EleRPO provides fine\-grained training signals that capture how each detected element contributes to overall detection quality, and works synergistically with compositional order to improve detection performance\. To support training and evaluation, we build a dataset of 10 million graphic designs\. Experiments show that DAD outperforms all baselines and achieves human\-level performance in amodal detection, supporting effective image\-to\-layer decomposition\.  EleRPO consistently improves over GRPO across nine detection benchmarks\.

## G2Fusion: Geometric\-to\-Generative Image Fusion via Registration\-Restoration Evolution

**Authors:** Hao Zhang; Douyu Wu; Han Xu; Linfeng Tang; Qiwen Jin; Jiayi Ma

**ID:** 149246 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=roBp7fgTLy>) | [PDF](<https://openreview.net/pdf?id=roBp7fgTLy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149246>)

Real\-world multi\-modal image fusion faces two fundamental challenges: spatial misalignment and complex degradations induced by heterogeneous imaging sensors\. These factors are intrinsically coupled, but most existing fusion methods typically address only one of them, inevitably leading to failure under the other challenge\. In this paper, we propose G2Fusion, the first fusion framework that simultaneously addresses image registration and information restoration\. By developing a novel geometric\-to\-generative paradigm, it can directly produce high\-quality fused images from unregistered and degraded inputs captured by heterogeneous imaging sensors\. This framework consists of two key modules: a flow\-based geometric deformation reduction module \(Flow\-GDR\) and a DiT\-based generative fusion module \(DiT\-GF\)\. The former reduces large non\-rigid discrepancies through dense flow estimation\. The latter performs generative fusion, progressively refining residual misalignments while restoring degraded content through iterative denoising\. To enable effective interaction among registration, restoration, and fusion, we design two complementary mechanisms\. On the one hand, a target distribution mining strategy is introduced to construct a joint objective distribution from registration, restoration, and fusion, effectively guiding the optimization of DiT\-GF\. On the other hand, we develop a mutual promotion mechanism that establishes a closed\-loop interaction between Flow\-GDR and DiT\-GF by re\-estimating the residual deformation between the fused output and the infrared reference\. Extensive experiments demonstrate that G2Fusion consistently outperforms state\-of\-the\-art methods in terms of registration, restoration, and fusion\.

## Towards Effective and Transferable Physical Camouflage against Multi\-View BEV\-based 3D Perception in Autonomous Driving

**Authors:** Linye Lyu; Jiawei Zhou; Daojing He; YU LI

**ID:** 155996 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Hlde2jF93>) | [PDF](<https://openreview.net/pdf?id=1Hlde2jF93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155996>)

Modern autonomous driving systems widely adopt multi\-view Bird’s\-Eye\-View \(BEV\) based 3D perception models due to their superior performance\. Despite their success, the robustness of these models against adversarial camouflage attacks remains largely unexplored\. Existing camouflage attacks primarily target single\-view 2D detectors, limiting their effectiveness in multi\-view 3D perception settings\. To address this gap, we propose BEVCA, a novel adversarial camouflage generation framework tailored for multi\-view BEV\-based 3D perception\. Our framework integrates a BEV\-feature\-based adversarial loss with a multi\-view neural rendering module, enabling effective and transferable camouflage attacks across different models and tasks\. Extensive experiments in both digital and physical settings demonstrate that BEVCA outperforms state\-of\-the\-art baselines and exhibits strong robustness under real\-world conditions\.

## RSRCC: A Remote Sensing Regional Change Comprehension Benchmark Constructed via Retrieval\-Augmented Best\-of\-𝑁 Ranking

**Authors:** Roie Kazoom; Yotam Gigi; George Leifman; Tomer Shekel; Genady Beryozkin

**ID:** 139454 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P57SUrWo65>) | [PDF](<https://openreview.net/pdf?id=P57SUrWo65>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139454>)

Traditional change detection identifies where changes occur, but does not explain what changed in natural language\. Existing remote sensing change captioning datasets typically describe overall image\-level differences, leaving fine\-grained localized semantic reasoning largely unexplored\. To close this gap, we present RSRCC, a new benchmark for remote sensing change question\-answering containing 126k questions, split into 87𝑘 training, 17\.1𝑘 validation, and 22𝑘 test instances\. Unlike prior datasets, RSRCC is built around localized, change\-specific questions that require reasoning about a particular semantic change\. To the best of our knowledge, this is the first remote sensing change question\-answering benchmark designed explicitly for such fine\-grained reasoning\-based supervision\. To construct RSRCC, we introduce a hierarchical semi\-supervised curation pipeline that uses Best\- of\-𝑁 ranking as a critical final ambiguity\-resolution stage\. First, candidate change regions are extracted from semantic segmentation masks, then initially screened using an image\-text embedding model, and finally validated through retrieval\-augmented vision\-language curation with Best\-of\-𝑁 ranking\. This process enables scalable filtering of noisy and ambiguous candidates while preserving semantically meaningful changes\. The dataset is available at https://huggingface\.co/datasets/google/RSRCC\.

## MindAlign: Bridging EEG, Vision, and Language for Zero\-Shot Visual Decoding

**Authors:** Zexuan Chen; Sichao Liu; Runhao Lu; Huichao Qi; Alexandra Woolgar; Xi V Wang; Lihui Wang

**ID:** 149255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=riv0NRuHeq>) | [PDF](<https://openreview.net/pdf?id=riv0NRuHeq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149255>)

Visual decoding from brain signals is a key challenge at the intersection of computer vision and neuroscience, requiring methods that bridge neural representations and computational models of vision\. A field\-wide goal is to achieve accurate, generalizable decoding from non\-invasive, temporally resolved signals, including electroencephalography \(EEG\)\. A major obstacle towards this goal is the low signal\-to\-noise ratio of EEG and the substantial inter\-subject variability, which render direct end\-to\-end EEG–image supervision weak and unstable\. To address this, we introduce a tri\-modal contrastive framework for EEG\-based visual decoding that aligns EEG, visual, and textual representations within a unified latent space\. Our approach follows a two\-stage design\. First, we pre\-train an EEG encoder via masked reconstruction on unlabeled trials, learning spatio\-temporal regularities that transfer robustly downstream\. Second, we jointly align EEG, image, and LLM\-generated textual descriptions through contrastive learning, where text supervision acts as a semantic regularizer that injects linguistic structure into the shared space without overwhelming the primary EEG–image signal\. The encoder integrates subject\-specific adaptation, graph\-attention over channels, and temporal\-spatial convolutional embeddings\. On the Things\-EEG2 200\-way zero\-shot benchmark, our framework achieves 54\.1\\% Top\-1 and 83\.4\\% Top\-5 accuracy, substantially exceeding the strongest prior baseline \(32\.4\\% / 64\.0\\%\), with paired Wilcoxon tests confirming significance \(p &lt; 0\.01\) over all in\-subject baselines\. We validate generalization on Things\-MEG\. Analysis reveals that compact embedding geometries \(CN\-CLIP\) outperform much larger backbones, and that decoding aligns with established neurophysiology of visual processing\. This work is a critical step towards robust, semantically\-grounded visual decoding from non\-invasive temporal neural signals\.

## AdaCodec: A Predictive Visual Code for Video MLLMs

**Authors:** Haowen Hou; Zhen Huang; Zheming Liang; Qingyi Si; Chenglin Li; Shuai Dong; Kele Shao; Ruilin Li; Dianyi Wang; Nan Duan; Jiaqi Wang

**ID:** 148821 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=utdVAXHnlv>) | [PDF](<https://openreview.net/pdf?id=utdVAXHnlv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148821>)

Video is temporally redundant: adjacent frames usually share most objects, background, and layout\. Yet existing video multimodal large language models \(video MLLMs\) usually encode each sampled frame as an independent RGB image, causing visual tokens to repeat content already present in earlier frames\. This suggests a more direct video interface: send a full reference frame only when the scene cannot be predicted well from prior context, and otherwise transmit a compact description of inter\-frame changes\. We call this interface a predictive visual code, and instantiate it for video MLLMs as AdaCodec\. AdaCodec spends full visual tokens on a reference frame only when its conditional predictive cost is high; otherwise, it encodes inter\-frame changes, including motion and prediction residuals, as compact P\-tokens\. Across all eleven benchmarks, AdaCodec improves over the Qwen3\-VL\-8B per\-frame RGB baseline at a matched visual\-token budget\. Even at $1/7$ the budget, AdaCodec with 32k tokens surpasses the 224k baseline on all long\-video benchmarks; on five general\-video benchmarks, it raises the average score while substantially cutting time\-to\-first\-token from 9\.26s to 1\.62s\.

## Active Learning as Nullspace Regulation: A Spectral Representation Perspective

**Authors:** Luhang Shen; Hu Jingwei; Na Ying; Chunsheng Guo

**ID:** 152553 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SGzlvUpAfD>) | [PDF](<https://openreview.net/pdf?id=SGzlvUpAfD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152553>)

Most active learning \(AL\) methods estimate sample value through empirical criteria such as prediction ambiguity, diversity, or distributional coverage\. We revisit AL from a spectral\-geometric perspective by regarding the feature span of the current labeled set as the modeled subspace and its orthogonal complement as an operational residual subspace\. The projected residual component of an unlabeled sample then reflects its relation to representation components weakly expressed by the labeled\-feature spectrum\. Based on this formulation, we propose a spectrally driven nullspace regulation framework that unifies spectrum\-induced subspace decomposition, cross\-cycle residual persistence estimation, and coverage\-aware acquisition in the residual\-coordinate space\. This yields an acquisition criterion that favors samples whose residual components are both persistent across cycles and complementary to already selected samples\. Experiments on visual benchmarks  show competitive or improved sample efficiency over strong baselines\. Further analyses support the proposed view by showing that residual components shrink anisotropically and that acquisition rankings vary substantially across backbones, indicating that sample value is conditioned on the current representation state rather than being purely data\-intrinsic\.

## Visual Text Compression as Measure Transport

**Authors:** Lv Tang; Tianyi Zheng; Yang Liu; Bo Li; Xingyu Li

**ID:** 155749 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3F9lWapX9y>) | [PDF](<https://openreview.net/pdf?id=3F9lWapX9y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155749>)

Visual text compression \(VTC\) promises efficient long\-context processing by rendering text into an image and re\-encoding it with a vision\-language model, often producing $3$\-\-$20\\times$ fewer decoder tokens than subword tokenization\. Yet token savings do not translate predictably into downstream utility: on some tasks the visual path matches or exceeds the text path, on others it collapses, and the compression ratio itself does not predict which regime will occur\. The missing quantity is therefore not another summary of efficiency, but a principled measure of task\-relevant information loss induced by visual encoding\. We address this problem by formulating VTC in the language of measure transport\. Treating text and visual tokens as empirical probability measures, we show that the ViT patch encoder induces a push\-forward map whose transport cost decomposes into a precision cost from within\-patch aggregation and a coverage cost from cross\-patch fragmentation\. Both terms are estimable from downstream\-label\-free probes\. This formulation yields two operational consequences: a downstream\-label\-free routing criterion that selects whether to use the visual path for a given input or benchmark instance, and a transport\-informed foveation mechanism that re\-encodes high\-cost regions at higher resolution\. Across $24$ NLP datasets at Qwen3\-4B, our label\-free rule matches the per\-dataset oracle on $17/24$ datasets \($70\.8\\%$\), and improves the average task score by $\+3\.3\\%$ with $\-10\.3\\%$ average tokens relative to a pure\-LLM\.

## The Many Senses of Visual Similarity: A Text\-Prompted Image Perceptual Metric

**Authors:** Sheng\-Yu Wang; Yotam Nitzan; Aaron Hertzmann; Jun\-Yan Zhu; Eli Shechtman; Alexei Efros; Richard Zhang

**ID:** 152788 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QKvTvdH8iS>) | [PDF](<https://openreview.net/pdf?id=QKvTvdH8iS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152788>)

Human visual similarity judgments are context\-dependent\. For example, two images may be similar in shape but distinct in color\. Existing perceptual similarity metrics, however, collapse these nuances into a single scalar value, offering no mechanism to condition on specific aspects\. To bridge this gap, we introduce a large\-scale dataset of human similarity judgments over image triplets, where each triplet is annotated across multiple, free\-form semantic aspects\. Benchmarking a broad range of frontier vision\-language models \(VLMs\) reveals a considerable performance gap compared to human\-human agreement\. Leveraging our data, we fine\-tune a VLM to produce our Text\-Prompted Image Perceptual Similarity \(TPIPS\) metric, capturing multiple senses of visual similarity depending on the specified text prompt\.  We demonstrate that TPIPS aligns more closely with human perception and generalizes reliably beyond the training distribution\. Finally, we show that TPIPS unlocks new capabilities in text\-guided retrieval, compositional search, and the fine\-grained evaluation of generative models\. Our code, data, and trained models will be released\.

## AnyMo: Scaling Any\-Modality Conditional Motion Generation with Masked Modeling

**Authors:** Yiheng Li; Zhuo Li; RuiBing Hou; Yingjie Chen; Hong Chang; Hao Liu; Shiguang Shan

**ID:** 153279 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MRJBlKpvg3>) | [PDF](<https://openreview.net/pdf?id=MRJBlKpvg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153279>)

Conditional human motion generation remains a fundamental challenge in computer vision and robotics\. Despite significant progress, current methods are often constrained by fixed modality configurations and task\-specific architectures, leaving cross\-modal interactions and the scaling laws of multimodal\-conditioned synthesis largely underexplored\. A key bottleneck is the scarcity of large\-scale modality\-aligned motion data, limiting generalization across diverse control signals\. In this work, we introduce \\textbf\{OmniHuMo\}, a large\-scale, high\-quality dataset comprising over 5,000 hours of motion and 3\.2 million sequences with precisely aligned multimodal annotations \(e\.g\., text, speech, music, and trajectory\)\. Leveraging OmniHuMo, we propose \\textbf\{AnyMo\}, a unified multimodal framework combining a Residual FSQ\-based motion tokenizer with a scalable masked modeling transformer, enabling  high\-quality motion synthesis under arbitrary modality combinations\.  Extensive experiments show that AnyMo achieves high\-fidelity synthesis while offering flexible control over both spatial and stylistic attributes\.

## Learning to Synergize Textual and Visual Prompts for Fine\-Grained Traffic Element Detection in HD Maps

**Authors:** Xiaoyang Bi; Haowen Guo; Caoshengzhe Xue; Siyuan Li; TAO XUE; Dong Liu; Mengshi Qi

**ID:** 139487 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N5RUffTq4w>) | [PDF](<https://openreview.net/pdf?id=N5RUffTq4w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139487>)

High\-definition \(HD\) map construction demands the exhaustive and precise parsing of diverse traffic elements\. However, practical traffic scene perception faces two fundamental hurdles: \(1\) generalizing to novel traffic elements that continuously emerge during periodic map updates, and \(2\) synergizing fine\-grained textual descriptions with visual exemplars to resolve severe visual ambiguities\. Consequently, even state\-of\-the\-art Vision\-Language Models \(VLMs\) exhibit severe vulnerabilities when confronting these challenges, hindering their direct deployment\. To bridge this gap, we formalize Multimodal Fine\-grained Traffic Element Detection \(MFTED\), a practical task dedicated to identifying traffic targets by synergizing nuanced textual and visual prompts\. We introduce MFT\-150K, a large\-scale benchmark featuring over 150K images and 337K instance annotations, explicitly designed to evaluate fine\-grained multimodal alignment and novel category generalization\. Furthermore, we provide a comprehensive benchmark of state\-of\-the\-art models and propose an initial baseline to explore multimodal fusion strategies\. Extensive experiments reveal a significant multimodal fusion gap in current VLMs when handling fine\-grained traffic semantics\. Even our proposed probabilistic latent\-space alignment yields only limited gains, underscoring the difficulty of this task and positioning MFT\-150K as a challenging benchmark for advancing intelligent transportation\. Our full\-scale dataset is publicly available at https://huggingface\.co/datasets/MFTED/MFTED, and code will be released upon publication\.

## SpatialVAM: Spatial\-Aware Multi\-View Video Diffusion as a Data\-Efficient Robot Policy

**Authors:** Peiyan Li; Yixiang Chen; Yuan Xu; Jiabing Yang; Xiangnan Wu; Jun Guo; Nan Sun; Long Qian; Xinghang Li; Xin Xiao; Minghui Zhang; Jing Liu; Nianfeng Liu; Tao Kong; Yan Huang; Liang Wang

**ID:** 151702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yg9wmxxbDb>) | [PDF](<https://openreview.net/pdf?id=Yg9wmxxbDb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151702>)

Robotic manipulation requires understanding both the 3D spatial structure of the environment and its temporal evolution, yet most existing policies neglect one or both aspects\. They often rely on 2D visual observations or backbones pretrained on static image\-\-text pairs, which leads to high data requirements and limited comprehension of environment dynamics\. To address this, we introduce SpatialVAM, \*\*the first 3D Video Action Model\*\* that simultaneously predict spatial\-aware multi\-view heatmap videos and RGB videos\. Our key insight is that this design naturally injects 3D information into video foundation models while aligning the representation format between video pretraining and action finetuning\. Extensive experiments demonstrate that SpatialVAM enables \*\*data\-efficient, robust, generalizable, and interpretable\*\* manipulation\. With only ten demonstration trajectories and no additional pretraining, SpatialVAM  handles challenging long\-horizon and contact\-rich tasks, generalizes to out\-of\-distribution settings, and predicts realistic future videos\. Evaluations on Meta\-World \(22\\%$\\uparrow$\), RoboCasa \(10\\%$\\uparrow$\) and real\-world robotic platforms \(16\\%$\\uparrow$\) show that SpatialVAM  consistently outperforms other video action models, vision language action models and 3D\-based policies, establishing a new state\-of\-the\-art in data\-efficient multi\-task manipulation\.

## Going Down Memory Lane: Scaling Tokens for Video Stream Understanding with Dynamic KV\-Cache Memory

**Authors:** Vatsal Agarwal; Saksham Suri; Matthew Gwilliam; Pulkit Kumar; Abhinav Shrivastava

**ID:** 148735 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vRUJgq7mDv>) | [PDF](<https://openreview.net/pdf?id=vRUJgq7mDv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148735>)

Online video understanding requires models to robustly encode, store, and retrieve information from a continuous stream to support accurate question answering\. Existing approaches rely on key\-\-value caching to accumulate frame\-level representations over time, but allocate only a limited token budget per frame, causing loss of fine\-grained visual detail\. We find that naively scaling this budget degrades retrieval quality and question\-answering performance, as denser token streams introduce redundancy that disrupts query\-\-frame similarity\. To address this, we first introduce an adaptive selection strategy that reduces token redundancy while preserving local spatiotemporal information\. Second, we propose a training\-free retrieval ensemble that leverages external models to better identify relevant frames\. Our method, \\textbf\{MemStream\}, achieves \+8\.0\\% on CG\-Bench, \+8\.5\\% on LVBench, and \+2\.4\\% on VideoMME \(Long\) over ReKV with Qwen2\.5\-VL\-7B\. Furthermore, we show that MemStream consistently improves performance across several Video\-LLMs for long\-video understanding\.

## Native Multi\-Dimensional Subquadratic Operators via Input Dependent Long Convolutions

**Authors:** David Wessels; FARHAD RAMEZANGHORBANI; David W Romero; Alireza Moradzadeh; Olivia Viessmann; Maksim Zhdanov; John St\. John; Ken Janik; David Knigge; Yucheng Tang; Erik Bekkers; Saee Paliwal

**ID:** 151760 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YF3dDMGYTt>) | [PDF](<https://openreview.net/pdf?id=YF3dDMGYTt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151760>)

Subquadratic alternatives to attention require compromises when applied to multi\-dimensional data: standard convolutions abandon the global, input\-dependent receptive field, while recurrent models require rasterizing images, volumes, and PDE grids into an ad\-hoc $1\\rm D$ scan order that violates their spatial structure\. We introduce HyenaND, an operator that acts directly on native $\\rm ND$ data in its intrinsic geometry and recovers a global, input\-dependent receptive field at subquadratic cost\. It uses an implicit, input\-dependent parameterization of the multi\-dimensional convolutional kernel\. We provide a CUDA implementation, \\texttt\{nSubQ\}, which fuses the FFT\-convolution path to turn HyenaND's $O\(N \\log N\)$ scaling into wall\-clock speedups\. Across long\-context genomics, computer vision, medical imaging, and PDE modeling, pure HyenaND stacks match the accuracy of strong attention\-based baselines, while hybrid configurations that interleave HyenaND and attention layers outperform both pure attention and strong recurrence\-based hybrids\.

## Does Inference\-Time Reasoning Really Improve Video Understanding?

**Authors:** Zhuohao Yu; Yu Zhou; Zhecan Wang; Rui Sun; Kai\-Wei Chang; Nanyun Peng

**ID:** 154086 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJtLZ5sLOQ>) | [PDF](<https://openreview.net/pdf?id=GJtLZ5sLOQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154086>)

Video understanding models achieve impressive 70%\+ accuracy on recent benchmarks, but do these truly measure genuine grounded understanding? We systematically investigate this by controlling frame sampling from text\-only to real\-time across major benchmarks \(VideoMME, Video\-MMMU, LVBench\)\. Our analysis reveals that 13–46% of questions exploit shortcuts through world knowledge, language priors, or single\-frame cues, allowing models to answer correctly without engaging visual evidence\. Furthermore, requiring temporal grounding, both correct answers and time localization, exposes a \~40% accuracy gap, showing models frequently answer correctly without locating relevant evidence in videos\. To address these limitations, we introduce TGVMME, a temporally grounded benchmark with 1\.5k questions requiring both answer correctness and temporal localization\. Our benchmark reduces shortcuts to 3\.5%, validating that temporal grounding effectively ensures genuine video understanding\. Using TGVMME to analyze state\-of\-the\-art reasoning models, we make a surprising discovery: inference\-time reasoning provides minimal gains \(\+2\.5% at best\), contrasting sharply with substantial gains on existing benchmarks\. Analysis on accuracy changes of shortcut questions confirms reasoning primarily exploits shortcuts rather than enhancing genuine understanding\. Further experiments reveal input scaling \(increasing frames\) provides more benefit than output scaling \(reasoning\) given sparse inputs, highlighting the importance of frame\-efficient architectures\. Our work demonstrates that grounded evaluation is essential for assessing video understanding capabilities and provides practical tools: validated shortcut taxonomy, filtered splits, and TGVMME for rigorous evaluation\.

## DiffCap\-RL: Differential QA Rewards for Dense Image and Video Captioning

**Authors:** Kaixun Jiang; Zhihang Liu; Jiyuan Fu; Yuzheng Wang; Pandeng Li; Junjie Zhou; Chen\-Wei Xie; Yun Zheng; Wenqiang Zhang

**ID:** 152243 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UWkuOadUR9>) | [PDF](<https://openreview.net/pdf?id=UWkuOadUR9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152243>)

Dense image and video captioning demands exhaustive visual details while strictly maintaining factuality, forcing a severe trade\-off between descriptive density and hallucination\. Supervised fine\-tuning \(SFT\) struggles here: for dense captions, its token\-level loss dilutes effective signals while failing to reinforce specific fine\-grained dimensions\. Reinforcement learning \(RL\) is a promising alternative but remains bottlenecked by reward design: coarse\-grained VLM judges suffer from reward drift, and static QA rewards quickly saturate as the policy improves\. To address this, we propose DiffCap\-RL, an RL framework combining a stable offline Pre\-Scorer with an adaptive online Diff Scorer\. We utilize the Pre\-Scorer as a stable anchor for broad visual grounding via automated QA pairs\. Once it loses discriminative power, Online Diff Scorer dynamically extracts semantic disagreements between policy rollouts\. By decomposing these disagreements into targeted conflict questions to suppress hallucinations and extra questions to reward valid new details, the Diff Scorer provides reliable, non\-saturating supervision at the policy frontier\. We validate our reward quality from three perspectives: human alignment, online RL signal quality, and BoN selection\. Across multiple image and video captioning benchmarks, our DiffCap\-RL delivers large gains and consistently outperforms state\-of\-the\-art baselines at similar or larger scales\.

## SkillCIR: Intent\-Guided Skill Composition for Training\-Free Composed Image Retrieval

**Authors:** Yuanmin Tang; Lin Li; Yang Du; Yuan Gao; Massimiliano Mancini; Jun Song; Gaopeng Gou; Gang Xiong; Meikang Qiu; Cheng Yu; Bo Zheng

**ID:** 149869 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mabFRBx8a2>) | [PDF](<https://openreview.net/pdf?id=mabFRBx8a2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149869>)

Composed Image Retrieval \(CIR\) retrieves a target image given a reference image and a textual edit\. Existing training\-free methods prompt a frozen multimodal large language model \(MLLM\) to infer the user's edit intent and rewrite the composed query into a single retrieval artifact, such as a target caption, an edited image, or a modality\-fused embedding\. These methods can reason about the edit, but they have limited means to execute that reasoning during retrieval\. A key remaining bottleneck for training\-free CIR appears to be not only intent understanding, but intent execution\. To address this challenge, we propose SkillCIR, a training\-free framework that tackles the intent execution gap by routing the inferred constraints to specialized retrieval skills\. Specifically, the same frozen MLLM that infers the intent also emits a structured plan of active constraints; each constraint activates a typed skill that scores gallery candidates along one evidence channel, and the per\-skill scores are composed in score space with explicit signs and re\-checked by a local verification step\. Across three benchmarks and three CLIP backbones, SkillCIR improves the primary recall/mAP metrics by 2\.8 to 7\.9 points at the latency of typical training\-free CIR pipelines and around 23x faster than the latest training\-free state of the art\. These gains hold with a fixed skill pool and no model\-parameter updates, suggesting that improving the means to execute the inferred edit is a useful complement to stronger reasoning about it\.

## Video Stitching from Multiple Moving Cameras

**Authors:** Shira Ifergane; Roy Amoyal; Shahar Benishay; Oren Freifeld

**ID:** 154835 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aaxi9KSqTI>) | [PDF](<https://openreview.net/pdf?id=Aaxi9KSqTI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154835>)

We address geometric video alignment for the same scene captured by multiple freely moving cameras\. Existing methods, which are based on image stitching or video stabilization,  are typically limited to two cameras or must assume the restrictive setting of a fixed linear ordering of the cameras\. We propose MViS, a lightweight test\-time optimization framework for joint multi\-view alignment with temporal consistency\.  MViS uses a spatial\-transformer\-inspired net to jointly process frames from all views within a short temporal window and predict per\-view, per\-time homographies\. Optimization proceeds in two stages: geometry\-guided alignment followed by appearance\-based refinement, with both stages enforcing multi\-view and temporal consistency across the sequence\. The method requires no scene\-specific hyperparameter tuning, handles arbitrary and time\-varying view\-intersection graphs, and remains robust under rapid camera motion\. On a standard two\-view video benchmark, MViS matches or surpasses the state of the art\. To facilitate evaluation in more complex scenarios, we introduce an annotated dataset with more than two freely moving cameras and establish the first benchmark for this setting\. Our code and dataset will be released upon acceptance\.

## Behavior Pack Optimization for Video MLLM Post\-Training

**Authors:** Zhaolu Kang; Shiyu Liu; Tailong Luo; Wei Zhang; Yingjie He; Guangyuan Dong; Siheng Wang; Liang He; Lei Wei; Jiaqi Su; Shuang Chen; Guansu Wang; Haoyu Ji; Qishi Zhan; Kaiyue Zhou

**ID:** 150981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dnqyvgz1LI>) | [PDF](<https://openreview.net/pdf?id=dnqyvgz1LI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150981>)

Video multimodal large language models \(MLLMs\) keep climbing video question answering benchmarks, yet shuffling the frames, masking the segment that supports the answer, or occluding the target object barely changes their predictions\. The accuracy rests on appearance and language priors, not on the temporal evidence the question asks for\. We trace this to the unit of post\-training: rewards are computed on a single response to the original clip, so the model is never asked to behave consistently across views\. We propose Behavior Pack Optimization \(BPO\), which replaces the single response with a behavior pack of outputs across counterfactual views chosen by question type, scored jointly\. The pack reward asks for stability when the intervention is irrelevant, sensitivity when key evidence is removed, and abstention when no evidence remains\. To keep this objective stable at small pack sizes, BPO uses an anchor\-relative advantage: the response on the original view serves as a per\-prompt reference instead of a group mean over mixed views\. On TempCompass, MVBench, and NExT\-QA, BPO improves the macro accuracy of Qwen2\.5\-VL\-7B\-Instruct by 4\.7 pp, the temporal\-hard subset by 7\.8 pp, and abstention F1 by 20\.0 pp over a budget\-matched vanilla GRPO baseline from the same SFT checkpoint\. The gains transfer to Video\-MME, LongVideoBench, and to LLaVA\-Video\-7B; ablations confirm they follow the view sets, not the rollout count\. We hope this pack\-level perspective offers a useful starting point for the video MLLM and multimodal post\-training community as the field moves toward evidence\-grounded video reasoning\.

## TokenRepel: Generating Diverse Image Sets Without Sacrificing Quality

**Authors:** Qingtao Yu; Zhen Wang; Ning Lai; Boyang Hu; Hongdong Li; Dylan Campbell

**ID:** 148516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJDcbc6iWs>) | [PDF](<https://openreview.net/pdf?id=xJDcbc6iWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148516>)

We present an inference\-time approach for enhancing the visual diversity of image sets generated by text\-to\-image \(T2I\) models, while preserving, or even improving, the average image quality\. Our method leverages the intrinsic geometry of hidden latent representations in pretrained models to diversify a batch of images generated under the same prompt\. First, we introduce a token repulsion mechanism to encourage diversity by increasing the angle between the tokens of hidden features across different samples\. This is achieved via a negative Riemannian gradient step defined over a distribution on the unit hypersphere\. Second, to preserve the quality and prompt adherence of the output images, we encourage the updates to remain within the high\-density region learned by the generative model\. Third, we extend this constraint to the output of each intermediate layer, enabling more fine\-grained iterative guidance\. We evaluate our method on three representative large\-scale pretrained T2I models: Flux1\.dev \(flow matching\), SDXL \(diffusion\), and Flux2\.Klein \(few\-step distilled flow matching\)\. Experimental results demonstrate substantial improvements in visual diversity under identical prompts, while maintaining averaged individual sample fidelity\. Our approach is simple, effective, and broadly applicable\. It requires no external models to guide the generation process and introduces only modest additional computation overhead during the early stages of sampling\.

## Iris: Empowering Video MLLMs with High\-Frequency Pose Priors via Spatiotemporal Binding

**Authors:** Jiahang Zhang; Yushuo Guan; Yuanxing Zhang; Pengfei Wan; Jiaying Liu

**ID:** 149127 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sfWwIjHvqo>) | [PDF](<https://openreview.net/pdf?id=sfWwIjHvqo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149127>)

Multimodal Large Language Models \(MLLMs\) have demonstrated remarkable effectiveness in general video understanding\. Human motion understanding, a dominant topic in video analytics, however, still remains as a bottleneck due to the lack of explicit structural cues in 2D visual patches and the significant motion information loss caused by sparse visual temporal sampling\. To address this, we propose Iris \(Integrating representations of in\-the\-wild skeletons\), a novel pose\-augmented video MLLM tailored for human\-centric motion understanding\. Iris adopts an asymmetric dual\-stream architecture, pairing the traditional sparse vision stream with a lightweight, high\-frequency human pose stream to provide spatially structured and temporally dense kinematic signals\. To enable pose\-vision modality correspondence awareness, we design a cross\-modal spatiotemporal binding mechanism, featuring a pose\-structured 3D RoPE for precise temporal alignment and a person\-grounded cross\-attention module for explicit spatial visual grounding\. Furthermore, to enable robust large\-scale training, we construct an automated pose curation pipeline that organizes pose data into a delicate heterogeneous representation\. Extensive experiments demonstrate that Iris achieves superior performance on multiple fine\-grained motion benchmarks, while also maintaining highly efficient token computation overhead\. Code will be available upon publication\.

## Latent Process Generator Matching

**Authors:** Lukas Billera; Hedwig Nora Nordlinder; Ben Murrell

**ID:** 155816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2ghWjnDjkj>) | [PDF](<https://openreview.net/pdf?id=2ghWjnDjkj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155816>)

Many recent flow\-matching and diffusion\-style generative models rely on auxiliary stochastic dynamics during training: a richer process is simulated to define conditional targets, but the auxiliary state is either intractable to sample at generation time or simply not part of the desired output\. Existing Generator Matching theory formalises conditioning on static latent random variables, and several recent papers prove special cases of projection results for particular augmented\-state constructions\. We introduce latent process generator matching, a general framework that treats the observed generative state as a deterministic image $X\_t=\\Phi\(Y\_t\)$ of a tractable Markov process $Y\_t$\. We show that in this setting one may learn the generator of a stochastic process on the image space which has the same one\-time marginal distributions as the projected process\. This generalizes and subsumes the discrete latent process results from the literature, and extends Generator Matching from static latent variables to a rich family of time\-dependent latent conditional processes\.

## MAMQ\-Net: A Robust Framework Leveraging Multi\-level Tamper\-aware Queries and Complementary Representations of Tampering Features for Progressive Image Forgery Localization

**Authors:** Minghao Jia; Zhuoyi Zhang; Jiwei Zhang; Siwei Wang; Feifei Kou; Lei Shi; ShaoZhang Niu; Jiaming Pei

**ID:** 152510 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Sad9HLajgI>) | [PDF](<https://openreview.net/pdf?id=Sad9HLajgI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152510>)

Image Forgery Localization \(IFL\) aims to identify and localize the tampered regions within edited images\. Many studies employ a dual\-branch backbone to extract tampering features from dual modalities, followed by feature fusion at the final stage\. In this process, the extraction and fusion of dual\-modality features is relatively independent, which fails to fully leverage the complementarity between different modalities and thus diminishes sensitivity to tampering artifacts\. Inspired by the way humans continuously integrate multi\-faceted knowledge to understand the world, we propose MAMQ\-Net, which contains a novel Multi\-stage Alternating Feature Extraction and Interaction architecture\. At each stage, we deeply explore the intrinsic relationships and mappings between different modality features\. Feature extraction and interaction are performed alternately, constructing complementary dual\-modality tampering feature representations and enhancing sensitivity to tampering artifacts\. Additionally, we introduce a lightweight, Query\-driven Multi\-level Feature Decoding\. This mechanism progressively aggregates key information from multi\-level dual\-modality tampering features through multiple sets of learnable tamper\-aware queries, effectively filtering out irrelevant features\. Finally, multi\-level queries are used to refine discriminative features, enabling precise localization of tampered regions\. Extensive experiments demonstrate that our framework outperforms current state\-of\-the\-art models in localization accuracy and robustness across multiple public datasets, achieving a favorable balance between performance and efficiency\.

## Good Token Hunting: A Hitchhiker's Guide to Token Selection for Visual Geometry Transformers

**Authors:** Shuhong Zheng; Michael Oechsle; Erik Sandström; Marie\-Julie Rakotosaona; Federico Tombari; Igor Gilitschenski

**ID:** 149416 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qCNsCfsxKh>) | [PDF](<https://openreview.net/pdf?id=qCNsCfsxKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149416>)

Visual geometry transformers have become powerful architectures for multi\-view 3D reconstruction, enabling joint prediction of multiple 3D attributes in a feed\-forward manner\. However, their computational cost grows quadratically with the input sequence length due to the global attention layers inside these models\. This limits both their scalability and efficiency\. In this work, we address this challenge with a simple yet general strategy: restricting the number of key/value tokens that each query interacts with during global attention\. To achieve effective token selection, we introduce a two\-stage framework\. First, an inter\-frame selection step operates at the frame level to identify frames that should be preserved\. Second, an intra\-frame selection step further discards more redundant tokens within the selected frames\. Our analysis highlights the advantage of a diversity\-based strategy for inter\-frame selection, which ensures broad coverage of the scene\. For intra\-frame selection, we show that layer\-aware sparsification is necessary, with the selection process guided by the entropy of the global attention pattern\. Our approach offers a superior speed\-accuracy trade\-off compared to existing solutions\. Extensive experiments show that it accelerates visual geometry transformers by over 85% for scenes with 500 images while maintaining, or even improving, baseline performance, which hints that how our token selection strategy can play a crucial role in future applications of visual geometry transformers\.

## Bidirectional Sparse Attention for Faster Video Diffusion Training

**Authors:** Chenlu Zhan; Wen Li; Jun Zhang; chuyu shen; Lele Cheng

**ID:** 154292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Es6mFi84XA>) | [PDF](<https://openreview.net/pdf?id=Es6mFi84XA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154292>)

Video diffusion Transformer \(DiT\) models excel in generative quality but hit major computational bottlenecks when producing high\-resolution, long\-duration videos\. Full attention requires computing dot products between all pairs of queries and keys, resulting in a quadratic computational complexity with respect to the sequence length \(\(O\(L^2\)\)\), leading to high training and inference costs\.To overcome this limitation, we propose a Bidirectional Sparse Attention \(BSA\) framework that sparsification from both the query and key–value directions to reduce the quadratic cost of full attention\.Specifically, the sparsification of queries is achieved by pruning tokens that are locally redundant or semantically similar within the 3D spatiotemporal domain of a video\. For the key–value pairs, only those that are highly correlated with the query at a global level are selected for attention computation\. Furthermore, we design a dynamic threshold adjustment mechanism to adaptively regulate the selected number of key–value pairs, thereby maintaining quality without degradation\. Extensive experiments demonstrate that BSA significantly accelerates DiT training across long sequences, reducing FLOPs by up to 20× and achieving 17\.79× faster attention training, while preserving or even surpassing the generative quality of full attention\.

## PGGT\-Loc: Primitive\-Grounded Geometry Transformer for Feed\-Forward Camera Localization

**Authors:** Hanqiao Ye; Yuzhou Liu; Mengqi Rong; Jian Liu; Yangdong Liu; Shuhan Shen

**ID:** 152738 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qj1kSEf9Rs>) | [PDF](<https://openreview.net/pdf?id=Qj1kSEf9Rs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152738>)

Camera localization methods are mostly multi\-stage pipelines relying on dedicated and complex maps that are costly to construct, store, and maintain over time\. Alternatively, well\-structured maps that organize scenes with compact yet expressive primitives are often readily available, providing rich structural and semantic cues that humans can interpret\. However, their potential for direct camera localization remains largely unexplored due to the significant modality gap with visual observations\. This motivates a new concept for localization, which estimates camera poses by grounding query observations to map primitives \. In this paper, we instantiate the concept in the context of planar primitives with PGGT , the P rimitive\- G rounded G eometry T ransformer network trained to predict multiple localization targets from a single query image and a set of planar map primitives, enabling feed\-forward 6\-DoF camera localization that generalizes to unseen environments\. Based on this flexible and scalable architecture, our method pushes the state\-of\-the\-art localization performance on both detailed planar surface maps and minimal architectural layouts\. The code and models will be made publicly available\.

## Face Deepfake\-aware Recovery via Semantic\-driven Facial Representation\-based Watermarking

**Authors:** Yuan\-Chih Chen; Chun\-Shien Lu

**ID:** 152471 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SqHbIQuLi6>) | [PDF](<https://openreview.net/pdf?id=SqHbIQuLi6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152471>)

Existing image watermarking methods typically entangle visual content with spatial structure, making them highly sensitive to geometric transformations and alignment discrepancies, especially in the presence of deepfake manipulations\. In this paper, we propose a semantic\-driven facial watermarking framework for robust identity recovery\. The key idea is to decouple identity\-related semantic information from spatial layout and encode it into a compact and spatially robust semantic representation\. Specifically, we decompose a face into semantic components and aggregate deep features into component\-wise latent representations, which are quantized via independent codebooks and converted into a compact bitstream for embedding\. After decoding, the embedded semantic information is recovered and used to reconstruct identity\-consistent facial content, even under slight geometric distortions and tampering\. Experiments on CelebA\-HQ and FFHQ demonstrate that our method significantly outperforms existing watermarking approaches in terms of reconstruction quality, identity preservation, and retrieval accuracy under both photometric and geometric attacks, validating the effectiveness of semantic component\-wise encoding for reliable face recovery\.

## Shaping Useful Noise: Energy Distributions Predict Visual Pretraining Quality

**Authors:** Ching Lam Choi; Antonio Torralba; Phillip Isola; Stefanie Jegelka

**ID:** 153569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQRZdjU6Q1>) | [PDF](<https://openreview.net/pdf?id=KQRZdjU6Q1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153569>)

Synthetic data can scale visual pretraining, but current selection criteria only partially explain which datasets train strong representations\. We propose using the energy profile of a dataset\-\-\-the distribution of log\-probability levels it occupies under a normalised real\-image density model\-\-\-as an audit and curation principle for synthetic data\. To operationalise this view, we introduce Energy\-Level Distribution Distance \(Eld\), which compares real and synthetic energy distributions\. Real images span sparse high\-likelihood scenes and dense low\-likelihood textures, so useful synthetic data should cover this energy range rather than collapse to likely but low\-variation samples\. Across diverse synthetic datasets, Eld exposes mismatches missed by FID and predicts pretraining performance beyond FID, LPIPS variation, and feature\-space recall, including across CNN and ViT self\-supervised settings\. We then use Eld to resample and mix synthetic sources, matching the real\-image energy histogram while preserving diversity and improving downstream transfer\.

## VicEdit: Learning to Edit Videos from Visual In\-Context Examples

**Authors:** Yuji Wang; Teng Hu; Yuheng Chen; Ran Yi; Han Feng; Weijian Cao; Chengjie Wang; Lizhuang Ma; Jiangning Zhang

**ID:** 155979 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1P8vkGpb52>) | [PDF](<https://openreview.net/pdf?id=1P8vkGpb52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155979>)

Despite progress in instruction\-based video editing, unimodal textual instructions inherently struggle to convey fine\-grained textures and complex dynamics\. To bridge this perceptual gap, we propose Visual In\-context Editing, a new paradigm elevating video editing from textual instructions to multi\-modal visual guidance encompassing single image, image pair, and video pair\. To facilitate this paradigm, we curate \*\*VicEdit\-400K\*\*, the first large\-scale dataset for visual in\-context video editing\. We develop an automated pipeline to generate 400K high\-quality samples across ten task types, ensuring superior visual fidelity and semantic consistency through multi\-dimensional filtering\. Leveraging this foundation, we introduce \*\*VicEdit\*\*, a unified framework to bridge visual and textual contexts\. To adaptively extract editing semantics from heterogeneous references, we design \*\*Modality\-Adaptive Semantic Distillation\*\*, which produces modality\-specific semantic tokens from visual references\. These tokens are then synergistically integrated with textual instructions through \*\*Dual\-Context Injection\*\*, enabling the generation process to benefit from both visual and textual signals\.  Extensive evaluations on VicEdit\-Bench demonstrate that VicEdit achieves state\-of\-the\-art performance across both basic instruction editing and visual in\-context editing tasks, establishing visual in\-context learning as a powerful and controllable paradigm for video editing\.

## V2VFusion: Text\-Controlled Video\-to\-Video Diffusion for Degradation\-Aware Video Fusion

**Authors:** Jiajun Chen; Han Xu; Yunfei Huang; Zhuoya Zhang; Guangcan Liu; Jiayi Ma

**ID:** 153740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J653w2Pft0>) | [PDF](<https://openreview.net/pdf?id=J653w2Pft0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153740>)

Video fusion integrates complementary information in multiple source video streams into a single sequence for complete scene perception\. Existing methods perform frame\-wise fusion and lack unified spatio\-temporal modeling across sequences, damaging temporal coherence across sequences\. When dealing with degradations, they also ignore temporal dynamics and overload a single network with diverse degradations, leading to limited and imbalanced degradation suppression\. To address these issues, we propose V2VFusion, the first unified video\-to\-video fusion framework that directly generates temporally coherent, high\-quality fused videos from degraded multi\-source inputs\. By reformulating video fusion as a video\-to\-video conditional generation problem in latent diffusion space, our approach holistically models spatio\-temporal dependencies across entire sequences and intrinsically ensures sequence\-level consistency\. On this basis, a text\-guided degradation\-conditioned ControlNet bridges high\-level textual degradation descriptions with low\-level visual priors, enabling interpretable and controllable guidance for structure\-preserving fusion beyond purely data\-driven conditioning\. To handle heterogeneous and compound degradations, a state\-modulated degradation\-aware hierarchical mixture\-of\-experts module decouples expert selection into diffusion\-state\-aware filtering and degradation\-aware routing\. It prevents unreliable routing and fosters expert specialization to mitigate representation conflicts among diverse degradations\. Experiments on infrared\-visible, multi\-exposure, and multi\-focus video fusion tasks and complex degradations validate that V2VFusion surpasses existing methods in fusion quality and temporal stability\.

## TrAction: Action Recognition with Sparse Trajectories

**Authors:** Jan Frederik Meier; Felix B Mueller; Alexander Ecker; Timo Lüddecke

**ID:** 154691 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BiWI5m66G8>) | [PDF](<https://openreview.net/pdf?id=BiWI5m66G8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154691>)

Modern action recognition models operate on memory\- and compute\-intensive dense RGB video volumes and frequently exploit appearance and background shortcuts, for example, predicting actions from objects or scenes instead of characteristic motion\. We investigate an alternative input modality that is largely free of such biases by construction: sparse point trajectories\. To this end, we develop a simple transformer architecture for 2\.5D trajectory\-based recognition together with a masked\-trajectory pretraining, which we show to substantially improve downstream accuracy\. Despite using only a fraction of the dense RGB input, our method reaches 45\\% top\-1 on Something\-Something V2 and 54\\% on EPIC\-Kitchens\-100, and surpasses V\-JEPA 2 on time\-reversal sensitivity\. More importantly, we find trajectory features to be complementary to state\-of\-the\-art appearance\-based features: fusing our pretrained model with DINOv2 and V\-JEPA 2 improves top\-1 accuracy on Something\-Something V2 by 8\.7 and 1\.6 points, respectively\.

## DC\-ViT: Modulating Spatial and Channel Interactions for Multi\-Channel Images

**Authors:** Umar Marikkar; Syed S Husain; Muhammad Awais; Sara Atito

**ID:** 150507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hZtke2JkSA>) | [PDF](<https://openreview.net/pdf?id=hZtke2JkSA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150507>)

Training and evaluation in multi\-channel imaging \(MCI\) remains challenging due to heterogeneous channel configurations arising from varying staining protocols, sensor types, and acquisition settings\. This heterogeneity limits the applicability of fixed\-channel encoders commonly used in general computer vision\. Recent Multi\-Channel Vision Transformers \(MC\-ViTs\) address this by enabling flexible channel inputs, typically by jointly encoding patch tokens from all channels within a unified attention space\. However, unrestricted token interactions across channels can lead to feature dilution, reducing the ability to preserve channel\-specific semantics that are critical in MCI data\. To address this, we propose Decoupled Vision Transformer \(DC\-ViT\), which explicitly regulates information sharing using Decoupled Self\-Attention \(DSA\), which decomposes token updates into two complementary pathways: spatial updates that model intra\-channel structure, and channel\-wise updates that adaptively integrate cross\-channel information\. This decoupling mitigates informational collapse while allowing selective inter\-channel interaction\. To further exploit these enhanced channel\-specific representations, we introduce Decoupled Aggregation \(DAG\), which allows the model to learn task\-specific channel importances\. Extensive experiments across three MCI benchmarks demonstrate consistent improvements over existing MC\-ViT approaches\.

## Towards Generalizable Partially Relevant Video Retrieval

**Authors:** Woojin Jun; Cheol\-Ho Cho; MinSeok Jung; SuBeen Lee; Jae\-Pil Heo

**ID:** 151222 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c1UGpalx0Y>) | [PDF](<https://openreview.net/pdf?id=c1UGpalx0Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151222>)

Partially Relevant Video Retrieval \(PRVR\) aims to retrieve an untrimmed video that contains at least one segment relevant to a text query\. Despite its practical motivation, existing PRVR methods are typically trained and evaluated on a single curated benchmark, limiting insight into whether they learn generalizable fine\-grained text\-video alignment\. To examine this issue, we introduce a multi\-source\-to\-unseen\-target protocol, in which multiple source benchmarks are merged into a single training corpus without source labels and the trained model is evaluated on a held\-out target benchmark\. Under this protocol, existing PRVR methods generalize poorly to unseen targets despite leveraging the general image\-text alignment of CLIP\. Surprisingly, they even underperform zero\-shot CLIP, suggesting that PRVR training can actively erode the transferable alignment inherited from CLIP\. To address this limitation, we propose Generalization\-Aware Learning \(GAL\) for PRVR, a two\-branch framework that preserves CLIP\-derived transferability while learning PRVR\-specific fine\-grained text\-segment matching\. GAL consists of an anchored branch that maintains CLIP's transferability and an adaptive branch that learns task\-oriented segment\-level alignment\. We train these branches through conservative residual updates, per\-sample branch specialization, and CLIP\-text relation distillation, enabling complementary learning without overwriting the alignment structure provided by CLIP\. Under the proposed protocol, GAL achieves state\-of\-the\-art unseen\-target retrieval with competitive source performance, showing that fine\-grained matching can be learned without collapsing transferable alignment\.

## RANSAC Scoring Done Right

**Authors:** James Pritts; Felix Seegräber; Kevin Köser

**ID:** 154742 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BK5yH67CQC>) | [PDF](<https://openreview.net/pdf?id=BK5yH67CQC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154742>)

The most widely used RANSAC variants score candidate models by   counting inliers or summing truncated likelihoods; every such   score requires a user\-supplied parameter that is a function of   the inlier scale, which must itself be estimated from   contaminated data\.  We remove this   dependence by reversing the usual order of inference: for a   fixed inlier partition we marginalize $\\sigma$ analytically in   closed form under a conjugate Inverse\-Gamma prior, then   optimize over partitions\.  A single closed\-form expression   spans the non\-informative Jeffreys limit \(which requires no   validation data to fit the prior\) and informative   empirical\-Bayes priors fit from a small validation set, so   the same score adapts across data\-rich and data\-scarce   regimes without any change to the algorithm\.  To our knowledge this is the first   RANSAC score in which the inlier scale is genuinely absent   from the score formula\.  The score admits $O\(N \\log N\)$   computation via sort\-and\-sweep\.   On a benchmark of nearly $70\\,000$ image pairs spanning   different two\-view estimation problems and both engineered   and learned feature pipelines, the proposed score matches or   exceeds the state of the art \(RANSAC, MSAC, GaU,   MAGSAC\+\+\), excelling in robustness to   hyperparameter miscalibration, sample efficiency at small   validation budgets, and adaptive regularization across   data\-rich and data\-scarce regimes\.

## Beyond \[SEG\] Tokens: Training\-Free Video Reasoning Segmentation via Counterfactual Inference and Contrastive Concept

**Authors:** Tianlu Zhang; guiguang ding; Jungong Han

**ID:** 154601 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=COCvlkVmrv>) | [PDF](<https://openreview.net/pdf?id=COCvlkVmrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154601>)

Video Reasoning Segmentation \(VRS\) demands both complex semantic reasoning and robust spatiotemporal mask propagation\. Existing paradigms typically compress reasoning into an isolated, opaque token \(e\.g\., \\texttt\{\[SEG\]\}\) via expensive fine\-tuning, or rely on training\-free prompt\-then\-track pipelines that inevitably suffer from semantic degradation and identity switches when encountering hard distractors\. To fundamentally address these vulnerabilities, we propose Counterfactual Logic and Explicit Anchoring Reasoning \(\\textbf\{CLEAR\}\) framework, a training\-free VRS framework inspired by human dual\-system cognition\. Specifically, we introduce a Causal\-Counterfactual Inference mechanism that transforms error\-prone coordinate regression into a tractable discrete instance selection task, establishing highly reliable initial anchors via rigorous bidirectional reasoning\. During mask propagation, we design an adaptive mode\-switching mechanism bridged by a Heterogeneous Event Monitor\. The fast\-thinking mode utilizes a purely visual engine for efficient temporal propagation, while the Monitor continuously evaluates its reliability across multiple dimensions\. Upon detecting propagation anomalies, the slow\-thinking mode intervenes and explicitly replaces \\texttt\{\[SEG\]\} tokens with a structured Contrastive Concept Dictionary for closed\-loop identity recovery\.\.Extensive experiments demonstrate that CLEAR significantly outperforms existing training\-free methods and achieves performance comparable to state\-of\-the\-art training\-based approaches on comprehensive referring and reasoning VOS benchmarks\. Code will be available after acceptance\.

## Visual Instruction Tuning Aligns Modalities through Abstraction

**Authors:** Luis Palacios; Lorenzo Basile; Diego Doimo; Alberto Cazzaniga

**ID:** 150518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hWOJLeN1yx>) | [PDF](<https://openreview.net/pdf?id=hWOJLeN1yx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150518>)

Visual instruction tuning effectively adapts a pre\-trained Large Language Model \(LLM\) to process image information alongside text, yet it remains unclear how visual features are embedded into the layer\-wise hierarchy of abstractions of the LLM backbone\. Across a diverse set of vision\-language architectures, we show that instruction tuning primarily serves as a bridge, embedding visual features directly into the intermediate semantic layers of the LLM, bypassing the early layers devoted to unimodal processing\. With probing analyses and causal interventions, we show that these intermediate layers are the semantic core of vision–language processing and play a critical role in the performance over a broad set of vision–language benchmarks\. In addition, by comparing the geometry of semantically equivalent visual and textual representations, we find that fine\-tuning extends and strengthens the existing abstraction phase, aligning visual features with pre\-existing textual ones\. Finally, we confirm the functional role of this localized alignment by restricting fine\-tuning to the intermediate layers alone: this strategy preserves the performance of full fine\-tuning on vision–centric benchmarks while reducing training time\. Our results suggest that multimodal integration is a localized phenomenon driven by the repurposing of the internal abstraction engine of the LLM\.

## InCLAD: A Continual Learning Benchmark for Industrial Visual Anomaly Detection

**Authors:** Łukasz Marcjan; Dorota Wilk\-Kołodziejczyk; Roberto Corizzo

**ID:** 139535 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KLoy8Knatm>) | [PDF](<https://openreview.net/pdf?id=KLoy8Knatm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139535>)

Industrial anomaly detection benchmarks have advanced rapidly, yet they remain largely static and therefore underrepresent deployment settings in which inspection systems must be extended from one industrial component to another over time\. In our setting, continual industrial anomaly detection is framed as a task\-incremental problem: each component defines a task, while the learning objective remains semi\-supervised\. The goal extends beyond conventional anomaly detection, since models should preserve their performance on all components as they are sequentially exposed to new components\. This framing is especially relevant because many existing industrial pipelines either assume fully supervised defect labels or study only isolated datasets, leaving open the question of how semi\-supervised anomaly detectors behave across a sequence of heterogeneous components\. We address this gap by organizing the benchmark as a sequence of related component\-level tasks and by defining multiple scenarios, including random, easy\-to\-hard, and hard\-to\-easy\. In addition to single\-dataset continual scenarios, we propose challenging scenarios spanning across multiple datasets\. We further evaluate continual performance from two complementary perspectives: image\-level anomaly detection and pixel\-level anomaly localization\. By recasting industrial anomaly detection as a continual benchmark rather than a static train/test problem, our work establishes a concrete path toward studying knowledge retention, adaptation, and generalization in evolving industrial environments\.

## Itô maps for any\-step SDEs

**Authors:** Zhengkai Pan; Peter Potaptchik; Claudia Yao; Michael Albergo; Jakiw Pidstrigach

**ID:** 152722 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QqN3QhHfCr>) | [PDF](<https://openreview.net/pdf?id=QqN3QhHfCr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152722>)

Recent one\-step generative models accelerate sampling by learning deterministic flow maps of the underlying dynamics\. These methods rely on learning from ordinary differential equations, leaving open how to define an exact distillation procedure for stochastic dynamics\. We introduce the Itô map, an any\-step stochastic flow map that takes an intermediate state and Brownian path and predicts future states in a single pass\. The Itô map formulation yields novel estimators for inference\-time control by providing cheap, differentiable access to posterior samples\. Empirically, Itô maps produce diverse, conditionally valid endpoint samples from fixed intermediate states and support strong steering performance on synthetic and image\-generation benchmarks\. These results establish any\-step SDE integration as a useful primitive for posterior sampling and stochastic control\.

## Attention\-Based Soft Answer Sets

**Authors:** Wael AbdAlmageed

**ID:** 151077 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d7gqN6IVHL>) | [PDF](<https://openreview.net/pdf?id=d7gqN6IVHL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151077>)

Neuro\-symbolic systems typically couple a neural perception module with a discrete symbolic solver, where exact constraint inference is intractable at training time and a discrete solver must be invoked at inference time, precluding end\-to\-end optimization of the model\. We introduce AS2 \(Attention\-Based Soft Answer Sets\), a fully differentiable neuro\-symbolic architecture that replaces the discrete solver with a continuous approximation of the Answer Set Programming \(ASP\)immediate\-consequence operator $T\_P$\. AS2 maintains per\-position probability distributions over a finite symbol domain throughout the forward pass and trains end\-to\-end by minimizing the fixed\-point residual of a probabilistic lift of $T\_P$, thereby differentiating through the constraint check without invoking an external solver during either training or inference\. On spatial constraint\-satisfaction tasks, AS2 replaces conventional positional embeddings entirely, and problem structure is encoded through constraint\-group membership embeddings derived directly from the declarative ASP specification, making the model agnostic to arbitrary position indexing\. On Visual Sudoku, AS2 achieves 99\.89\\% cell accuracy and 100\\%constraint satisfaction, without invoking any external solver\. On CLEVR\-Hans, AS2 achieves 99\.94% on CLEVR\-Hans3 and 87\.77% on CLEVR\-Hans7\. These results demonstrate that a soft differentiable fixpoint operator, combined with constraint\-aware attention and declarative constraint specification, can match or exceed pipeline and solver\-based neuro\-symbolic systems while maintaining full end\-to\-end differentiability\.

## Omni\-SpikeDet: A Spiking Open\-World Detector with Dynamic Text–Image Alignment

**Authors:** Ziqi Li; Tao Gao; Ting Chen; Xin Zhang; Yuanbo Wen; Yipo Huang; Robby Tan

**ID:** 152619 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rkd6BFx0pt>) | [PDF](<https://openreview.net/pdf?id=Rkd6BFx0pt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152619>)

Open\-vocabulary object detection requires recognizing both known and novel categories beyond a fixed label space\. Existing open\-vocabulary detectors have made strong progress by integrating visual features with language embeddings, but they are predominantly built on dense ANN\-based architectures\. In contrast, spiking neural networks \(SNNs\) have been studied for sparse visual computation, yet their use in open\-vocabulary detection remains largely unexplored\. This paper presents Omni\-SpikeDet, a spiking open\-vocabulary detector that investigates how text\-guided visual recognition can be realized in a spiking framework\. Omni\-SpikeDet combines spike\-based visual feature extraction with text\-guided multi\-scale alignment\. It uses a spiking convolutional module with integer\-spike training and spike\-based inference to reduce the mismatch between continuous vision\-language supervision and discrete spiking representations\. It further introduces a Cross\-Scale Text\-Image Interaction \(CTI\) module that modulates multi\-level spiking features with language embeddings for prompt\-guided detection\. Experiments on COCO and LVIS show that Omni\-SpikeDet achieves competitive open\-vocabulary detection performance with a compact model, obtaining 47\.2 AP on COCO and 27\.9 AP on LVIS with 4\.2M parameters\. Under a standard theoretical SNN energy model, Omni\-SpikeDet has an estimated energy cost of 19\.8 mJ, suggesting a favorable accuracy\-efficiency trade\-off\.

## UniVR: Thinking in Visual Space for Unified Visual Reasoning

**Authors:** Zhongwei Ren; Yunchao Wei; Yao Zhao; GONG WEIBO; Xiao Liu; Anran Wang; Xiangtai Li; Xiaojie Jin

**ID:** 153590 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KI2SgEOYkb>) | [PDF](<https://openreview.net/pdf?id=KI2SgEOYkb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153590>)

Learning broad world knowledge directly from raw visual data is a fundamental capability of intelligence\. We introduce UniVR, the first investigation into simultaneously learning complex reasoning, fine\-grained physical dynamics, and long\-term planning from pure visual demonstrations\. At its core, UniVR features VR\-GRPO, a reinforcement learning paradigm with complementary global and step\-level rewards\. This approach enforces logical coherence and physical consistency throughout the reasoning process without requiring task\-specific heuristics or image\-text pairs\. To train and evaluate UniVR, we construct VR\-X, a large\-scale benchmark curated from 12 diverse sources spanning long\-horizon manipulation, spatial puzzles, and physical reasoning\. It is the first comprehensive suite to assess these heterogeneous capabilities under a purely visual protocol\. Remarkably, UniVR achieves up to a 25\\% improvement on VR\-X, and its superior visual reasoning also boosts performance on standard multimodal understanding benchmarks\. These findings underscore the vast potential of reasoning within visual spaces, with all code, data, and models are open\-sourced for further research\.

## OPERA: An Agent for Image Restoration with End\-to\-End Joint Planning–Execution Optimization

**Authors:** Feng Zhu; Shuyang Xie; Zeng Yihan; Ming Liu; Wangmeng Zuo

**ID:** 149311 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r7MoK2h7x4>) | [PDF](<https://openreview.net/pdf?id=r7MoK2h7x4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149311>)

Real\-world image restoration is challenging due to complex and interacting mixed degradations\. Recent agent\-based approaches address this problem by composing multiple task\-specific restoration tools\. However, empirical analysis reveals that their performance is fundamentally limited by implicitly constrained planning spaces and the lack of coordination among independently pretrained tools\. To address these issues, we propose $\\textbf\{OPERA\}$ \(Optimized Planning\-Execution Restoration Agent\), a framework that jointly optimizes restoration planning and tool execution in an end\-to\-end manner\. On the planning side, OPERA uses reinforcement learning to directly optimize tool composition over a combinatorial plan space, with the final restoration quality as the reward\. On the execution side, OPERA introduces agent\-guided co\-training of restoration tools, enabling them to learn cooperative behaviors under sequential composition\. Extensive experiments on multi\-degradation benchmarks and real\-world datasets demonstrate that OPERA consistently outperforms both all\-in\-one restoration models and existing agent\-based methods across diverse and complex degradation scenarios\.

## Focused Forcing: Content\-Aware Per\-Frame KV Selection for Efficient Autoregressive Video Diffusion

**Authors:** Peiliang Cai; Evelyn Zhang; Jiacheng Liu; Hao Lin; Ruiqi Zhang; Weile Mo; Yue Ma; Shikang Zheng; Jiehang Huang; Dongrui Liu; Linfeng Zhang

**ID:** 148676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vvkRFRkj8O>) | [PDF](<https://openreview.net/pdf?id=vvkRFRkj8O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148676>)

Recent advances in autoregressive video diffusion have enabled sequential and streaming video generation\. However, long\-horizon generation requires increasingly large KV caches, making efficient compression without sacrificing quality challenging\. Existing methods mostly select historical frames based on attention scores, but their context decisions remain coarse\. When multiple frames are generated in the same chunk, these methods often apply a shared history selection to the whole chunk, score historical frames solely by attention, and assign head\-wise budgets either uniformly or by attention\-pattern heuristics rather than explicit head\-importance estimation\. We show that frames within the same generated chunk can depend on distinct historical frames, that the same historical frame can receive different attention scores as its relative temporal distance to the current frames changes, and that masking different heads induces unequal generation degradation\. Motivated by these findings, we propose \\textbf\{Focused Forcing\}, a training\-free KV selection method that focuses cached history along both generated\-frame and head dimensions\. For each generated frame, Focused Forcing preserves the most relevant and distinctive historical frames by combining attention scores with diversity scores of historical frames, while assigning larger budgets to heads with higher estimated importance\. Across multiple autoregressive generation paradigms, Focused Forcing achieves up to $\\textbf\{1\.48\}\\times$ end\-to\-end acceleration without training, while \\textbf\{improving visual quality and text alignment\}\. \\textit\{Our code will be released on GitHub\.\}

## DynaProto: Dynamic Prototypical Contrast for Temporally Consistent Object\-Centric Learning

**Authors:** Tianran Ouyang; Peiqin Xu; Xingping Dong; Kaihao Zhang; Bo Du

**ID:** 148247 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zJOsMj3Nby>) | [PDF](<https://openreview.net/pdf?id=zJOsMj3Nby>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148247>)

Unsupervised video object\-centric learning requires temporally consistent representations for downstream tasks\. Existing methods mainly build temporal consistency on the assumption that adjacent frames share the same object composition\. However, this local assumption is insufficient for real videos\. Some objects remain semantically consistent over much longer temporal spans, while object composition may also change as objects appear or disappear\. Fixed\-slot recurrent Slot Attention architectures struggle to accommodate such visibility changes, limiting their ability to learn stronger temporal consistency beyond adjacent frames\. We propose Dynamic Prototypical Contrast \(DynaProto\) to address these challenges\. DynaProto introduces a dynamic recurrent Slot Attention architecture that determines whether each slot should be activated at each frame, thereby adapting to changing object visibility over longer temporal scopes\. In addition, DynaProto introduces a prototypical contrastive objective that provides stronger clip\-level temporal consistency supervision\. Together, these two components enable DynaProto to learn more stable slot binding over extended temporal ranges\. Extensive experiments show that DynaProto learns more temporally consistent slot representations and substantially outperforms prior methods on object discovery and object property prediction on real\-world datasets, including an 11\.0\\% mBO improvement on YouTube\-VIS\.

## SP$^3$: Spherical Priors for Plug\-and\-Play Restoration

**Authors:** Sean Man; Ron Raphaeli; Matan Kleiner; Or Ronai

**ID:** 154253 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F9SLbhP7uz>) | [PDF](<https://openreview.net/pdf?id=F9SLbhP7uz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154253>)

In this paper, we introduce SP$^3$, a novel Plug\-and\-Play algorithm that accelerates Maximum \\emph\{a posteriori\} image restoration by replacing denoisers with Spherical Encoders \(SE\) as generative priors\. SP$^3$ approximates the intractable proximal prior step by utilizing the SE tightly structured latent space as a robust projection onto the natural image manifold\.  Alternating this projection with a closed\-form data\-consistency step, via Half\-Quadratic Splitting, guarantees stable convergence without requiring gradient computation during inference\.  This unique formulation unlocks \`\`anytime'' restoration capabilities, producing sharp, plausible images from the first iteration\. Evaluations across a variety of image restoration tasks demonstrate that SP$^3$ achieves perceptual quality comparable to state\-of\-the\-art zero\-shot diffusion and flow methods while being $3$\-$630\\times$ faster\.

## SyncLight: Single\-Edit Multi\-View Relighting

**Authors:** David Serrano\-Lozano; Anand Bhattad; Luis Herranz; Jean\-Francois Lalonde; Javier Vazquez\-Corral

**ID:** 148172 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zkf4gdBviG>) | [PDF](<https://openreview.net/pdf?id=zkf4gdBviG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148172>)

We present SyncLight, a method to enable consistent, parametric control over light sources across multiple uncalibrated views of a static scene conditioning in a single view\. While single\-view relighting has advanced significantly, existing generative approaches struggle to maintain the rigorous lighting consistency essential for multi\-camera broadcasts, stereoscopic cinema, and virtual production\. SyncLight addresses this by enabling precise control over light intensity and color across a multi\-view capture of a scene, conditioned on a single reference edit\. Our method leverages a multi\-view diffusion transformer trained using a latent bridge matching formulation, achieving high\-fidelity relighting of the entire image set in a single inference step\. To facilitate training, we introduce a large\-scale hybrid dataset comprising diverse synthetic environments\-curated from existing sources and newly designed scenes\-alongside high\-fidelity, real\-world multi\-view captures under calibrated illumination\. Surprisingly, though trained only on image pairs, SyncLight generalizes zero\-shot to an arbitrary number of viewpoints, effectively propagating lighting changes across all views, without requiring camera pose information\. SyncLight enables practical relighting workflows for multi\-view capture systems\. Dataset, code, and models will be released upon acceptance\.

## HalluciText: Mitigating Text Hallucinations in Diffusion\-Based Image Restoration

**Authors:** Zhiming Hu; Angela Ye; Ran Zhang; Tristan T Aumentado\-Armstrong; Samrudhdhi B Rangrej; Faraz Ali; Dong Huo; Kosta Derpanis; Alex Levinshtein; Iqbal Mohomed

**ID:** 155031 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8yEBjcRvqB>) | [PDF](<https://openreview.net/pdf?id=8yEBjcRvqB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155031>)

Diffusion\-based image restoration models produce visually compelling results but systematically hallucinate text\-\-\-generating characters that appear sharp and legible yet are factually incorrect\. As text fidelity emerges as a key requirement for real\-world image restoration, this failure mode poses a fundamental barrier to wide deployments of diffusion\-based models: a model that replaces degraded\-but\-faithful text with sharp\-but\-wrong text misleads users and erodes trust\. Recent text\-aware models mitigate this by feeding text extracted from intermediate outputs or low\-resolution \(LR\) images into the prompt, but they provide no mechanism to detect or correct the hallucinations that still commonly arise\. In this work, we present a systematic study on how to improve text restoration during denoising, demonstrating that standard global conditioning alone is inadequate and that optical character recognition \(OCR\) confidence scores reliably predict word\-level correctness\. Grounded in these findings, we propose HalluciText, a training\-free framework consisting of two complementary interventions: \(i\) Confidence\-Weighted Classifier\-Free Guidance \(CW\-CFG\), which concentrates guidance energy on text regions weighted by OCR confidence to improve text recall; and \(ii\) VLM\-Guided Test\-Time Guidance \(V\-TTG\), which leverages a vision\-language model \(VLM\) to identify hallucinated regions and corrects them towards a faithful reference, improving text precision\. Both operate solely on the noise prediction or latent representation, making them agnostic to the diffusion backbone and text spotting model\. We demonstrate the effectiveness of HalluciText on state\-of\-the\-art \(SOTA\) text\-aware models, achieving up to 5\.75 points of improvement in end\-to\-end text recognition F1 on several datasets without degrading image quality\.

## FiLM\-CAM: Keyed Feature Modulation for Conditional\-Access Watermarking

**Authors:** Yash Kulthe; Vishal Asnani; Shruti Agarwal; Andrew Gilbert; John Collomosse

**ID:** 155950 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1b70GKuMjn>) | [PDF](<https://openreview.net/pdf?id=1b70GKuMjn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155950>)

We propose FiLM\-CAM; a conditional\-access image watermarking approach that enforces authorized encoding, decoding, and removal through keyed feature modulation\. A secret key conditions a Feature\-wise Linear Modulation \(FiLM\) mechanism that transforms the internal representation of the watermark signal before embedding, thereby coupling the payload to the key at the feature, rather than pixel level\. The same key must be presented to condition the decoder to correctly recover the payload embedded in an image\. To enforce conditional access, we train the system to maximize the performance gap between authorized and unauthorized use, ensuring reliable extraction under the correct key while inducing failure under incorrect keys\. In addition, we design our encoder to estimate the watermark residual invariant to the presence of pre\-existing watermarks\. This design enables conditional watermark removal via simple re\-encoding and subtraction of the residual using iterative refinement, contingent on knowledge of the secret key\. We evaluate FiLM\-CAM across multiple watermarking encoder–decoder backbones, demonstrating that keyed feature modulation serves as an effective, architecture\-agnostic conditional access module \(CAM\) for image watermarking\.

## NAMVIS: Next\-Scale Autoregressive Multi\-View Image Synthesis

**Authors:** Ramil Khafizov; Ilya Statsenko; Ruslan Rakhimov; Artem Komarichev; Peter Wonka; Evgeny Burnaev

**ID:** 151031 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dTzafRJOTR>) | [PDF](<https://openreview.net/pdf?id=dTzafRJOTR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151031>)

Sparse\-view novel view synthesis is a central problem in 3D content creation, but diffusion\-based approaches remain limited by iterative denoising, making multi\-view generation expensive at inference time\. We introduce NAMVIS, a diffusion\-free framework that reformulates multi\-view image synthesis as geometry\-conditioned next\-scale autoregression\. Instead of generating target views through repeated denoising, NAMVIS predicts discrete visual tokens through a small number of coarse\-to\-fine scale steps, while sampling all tokens within each scale and across target views in parallel\. To anchor this generation process to explicit camera geometry, we propose Multi\-scale Projective Pose Encoding, which injects source and target camera transformations into both target\-view self\-attention and source\-to\-target cross\-attention at every resolution\. NAMVIS further combines global conditioning with dense geometry\-aware cross\-attention, enabling the model to preserve source\-view appearance while maintaining target\-view consistency\. Across Objaverse, GSO, and OmniObject3D, NAMVIS outperforms diffusion\-based baselines in PSNR, SSIM, and LPIPS, while running over 3× faster than the evaluated diffusion baselines under the same evaluation setting\. These results suggest that geometry\-conditioned next\-scale autoregression is a promising and efficient alternative to diffusion for sparse\-view multi\-view synthesis\.

## Inferotemporal Cortex Collaborates Before It Codes: Non\-Serial Inter\-Area Synergy in the Macaque Ventral Stream

**Authors:** Arun Ponnambalam; Krishnan V Pottore

**ID:** 152708 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QzsZg9sldw>) | [PDF](<https://openreview.net/pdf?id=QzsZg9sldw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152708>)

The ventral visual stream is widely modeled as a serial feedforward hierarchy in which V1, V4, and IT population codes develop sequentially during object recognition\. We ask whether a second, concurrent coding mode exists—one organized not by anatomical order but by joint population structure across areas\. Using Partial Information Decomposition applied to simultaneous multielectrode spiking recordings across all three areas at millisecond resolution—the first simultaneous three\-area spiking PID analysis of the primate ventral stream—in two macaque monkeys viewing 25,000\+ natural images, we decompose population coding into serial \(unique per area\) and synergistic \(joint across areas\) components at 5 ms resolution across five CNN target representations spanning low\-level spatial features to high\-level object identity\. Three findings replicate across both animals and all five representations\. First, synergistic inter\-area coupling emerges before IT carries any unique object\-related information—a dissociation of 15–65 ms that replicates in direction without exception across both animals—such that the joint population integrates before the apex encodes; moreover, V1–IT synergy persists for over 120 ms after V1’s unique information reaches zero\. Second, although V1↔IT and V1↔V4 coupling emerge simultaneously and rise in parallel, V1↔IT exhibits stronger peak synergy at mid\-to\-high\-level targets in both animals, suggesting a dominant role for non\-serial joint coding\. Third, when V1 and V4 are treated as an integrated feedforward block, their synergistic coupling with IT emerges last across all tested conditions—the feedforward foundation is the final component to join the synergistic mode, not the first\. Together, these results show that serial and synergistic population codes co\-occur in the same recordings, overlap in time, but follow different organizational principles, Providing a new level of nuance in our understanding of the primate ventral stream and introducing concrete constraints for biologically grounded models of vision\.

## Referring and Reasoning Camouflaged Object Segmentation in Audio\-Visual Scenes

**Authors:** Tianxin Han; Qing Dong; Xingwei Wang; Jie Jia

**ID:** 155657 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3zhU55LkCQ>) | [PDF](<https://openreview.net/pdf?id=3zhU55LkCQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155657>)

Camouflaged Object Segmentation \(COS\) aims to identify objects visually hidden in their surrounding environments\. Existing COS benchmarks mainly focus on image\-level or video\-level visual perception, while real\-world camouflaged scenes are often accompanied by audio signals and user intentions, where sound semantics and textual expressions provide critical information for localizing hidden targets\. To extend the boundary of COS, we introduce a new task, termed Referring and Reasoning Audio\-Visual Camouflaged Object Segmentation \(R2\-AVCOS\), which aims to segment camouflaged targets in audio\-visual scenes according to textual expressions with referring or reasoning intentions\. This task emphasizes understanding audio content and incorporates complex reasoning and world knowledge into expressions\. To support this task, we construct R2\-AVCOSBench, the first audio\-visual benchmark with pixel\-level annotations for camouflaged objects specified by referring expressions or inferred through reasoning\. It contains 2,654 audio\-visual camouflaged videos, 21,232 annotated frames, and 32,329 expressions, including 17,543 referring and 14,786 reasoning expressions\. Furthermore, we propose Camouflaged Instructed Segmentation Assistant \(CISA\), a baseline model built upon a Multimodal Large Language Model \(MLLM\)\. CISA understands complex textual and audio\-visual cues and performs referring\- and reasoning\-based camouflaged object segmentation\. Extensive experiments show that CISA achieves strong referring and reasoning segmentation ability in audio\-visual camouflaged scenes and obtains competitive results on related tasks\.

## FacePhys: State of the Heart Learning

**Authors:** Jack Tang; Kegang Wang; Yuntao Wang; Xin Liu; Yuxuan Fan; Jiatong Ji; Yuanchun Shi; Daniel McDuff

**ID:** 150724 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ftGKpah4gM>) | [PDF](<https://openreview.net/pdf?id=ftGKpah4gM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150724>)

Vital sign measurement using cameras presents opportunities for comfortable, ubiquitous health monitoring\. Remote photoplethysmography \(rPPG\), a foundational technology, enables cardiac measurement through minute changes in light reflected from the skin\. However, practical deployment is limited by the computational constraints of performing analysis on front\-end devices and the accuracy degradation of transmitting data through compressive channels that reduce signal quality\. We propose a memory efficient rPPG algorithm \- FacePhys \- built on temporal\-spatial state space duality, which resolves the trilemma of model scalability, cross\-dataset generalization, and real\-time operation\. Leveraging a transferable heart state, FacePhys captures subtle periodic variations across video frames while maintaining a minimal computational overhead, enabling training on extended video sequences and supporting low\-latency inference\. FacePhys establishes a new state\-of\-the\-art, with a substantial 49% reduction in error\. Our solution enables real\-time inference with a memory footprint of 3\.6 MB and per\-frame latency of 9\.46 ms \-\- surpassing existing methods by 83% to 99%\. The training code, a real\-time inference demo for mobile browsers, and the demonstration video can be found in the supplementary materials\.

## Hypernetworks for Dynamic Feature Selection

**Authors:** Javier Fumanal Idocin; Raquel Fernandez\-Peralta; Javier Andreu\-Perez

**ID:** 154296 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Emiobo4BDW>) | [PDF](<https://openreview.net/pdf?id=Emiobo4BDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154296>)

Dynamic feature selection \(DFS\) is a machine learning framework in which features are acquired sequentially for individual samples under budget constraints\. The exponential growth in the number of possible feature acquisition paths forces a DFS model to balance fitting specific scenarios against maintaining general performance, even when the feature space is moderate in size\. In this paper, we study the structural limitations of existing DFS approaches to achieve an optimal solution\. Then, we propose \\textsc\{Hyper\-DFS\}, a hypernetwork\-based DFS approach that generates feature subset\-specific classifier parameters on demand\. We show that the use of hypernetworks compared to mask\-embedding methods results in a smaller structural complexity bound\. We also use a Set Transformer encoding to create a smooth conditioning space for the hypernetwork, so that functionally similar tasks are also geometrically close\. In our benchmarks, \\textsc\{Hyper\-DFS\} outperforms all state\-of\-the\-art approaches on synthetic and real\-life tabular data\. It is also competitive or superior across all image datasets tested, and shows substantially stronger zero\-shot generalisation to feature subsets never seen during training than existing DFS approaches\.

## Polar Transformers: $SO\(2\)^K$\-Equivariant Angular Attention for Cryo\-EM Image\-Set Processing

**Authors:** Joakim Andén; Justus Sagemüller

**ID:** 156031 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=10lTNbAX7p>) | [PDF](<https://openreview.net/pdf?id=10lTNbAX7p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156031>)

Many projection\-based imaging modalities reconstruct unknown objects from collections of noisy projections related by unknown in\-plane rotations, making effective estimation dependent on rotationally consistent alignment and aggregation\. In cryogenic electron microscopy \(cryo\-EM\), the extremely low signal\-to\-noise ratio \(SNR\) makes such multi\-image integration essential\. We introduce the \*polar transformer\*, a permutation\-invariant architecture for \*sets\* of images built around an $\\mathrm\{SO\}\(2\)^K$\-equivariant \*angular attention\* mechanism that jointly aligns and aggregates information across images\. This architecture leverages a stable polar representation in which we define polar CNN feature extractors and evaluate attention weights over all relative angular shifts efficiently via FFT\-based correlations, guaranteeing equivariance to independent in\-plane rotations of each image in the set\. We evaluate the polar transformer on simulated cryo\-EM images using denoising as a quantitative proxy\. Across different regimes, polar transformers outperform strong single\-image and image\-set baselines, achieving a reduction of up to 40% in relative MSE at an SNR of 0\.02 and improving downstream ab initio reconstruction resolution by 20%\.

## Same Function, Different Mechanism: Implementation\-Local Geometry Beyond Accuracy

**Authors:** Miroslav Lžičař

**ID:** 156074 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0dm7UezntL>) | [PDF](<https://openreview.net/pdf?id=0dm7UezntL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156074>)

Two finite\-domain implementations, including neural\-network parameterizations restricted to an evaluation domain, can agree on every input while implementing the computation through different mechanisms, such as independent lookup storage or a shared reusable rule\. We formalize this distinction as a statement about the local Kullback\-Leibler geometry of an implementation chart: a mechanism\-specified local family of perturbations around a fixed predictive distribution\. For finite input\-output distributions with full support, we prove a logit\-Fisher pullback theorem: the Hessian rank of a chart equals the dimension of its tangent image in the quotient logit space, so the quadratic active contribution to the local learning coefficient is half this rank under the analytic/dead\-kernel conditions stated below\. We prove that this rank is invariant under local reparameterizations, dead parameters, and redundant duplications, but changes when the allowed perturbation class changes; hence it is a first\-order chart\-germ invariant, not a function\-only invariant\. For mechanisms specified by exact finite\-group sharing, we give a closed\-form orbit\-count formula for the active dimension\. Lookup and shared cyclic modular addition are then immediate corollaries: both implement the same softened conditional distribution, yet their active ranks are $p^2\(p\-1\)$ and $p\-1$, respectively\. The results clarify when Bayesian/Singular\-Learning\-Theory complexity can distinguish extensionally equivalent algorithms and when chart dependence is a real modeling choice rather than a defect\.

## Not Another Text Benchmark: Putting the “Visual" Back in Visual Question Answering for Large Video Models

**Authors:** Rwiddhi Chakraborty; Yinong  O Wang; Cheng Zhang; Fan Bai; Zhuoran Yu; Michael Kampffmeyer; Yong Jae Lee; Fernando D De la Torre; Robert Jenssen

**ID:** 139439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pm7KDlF851>) | [PDF](<https://openreview.net/pdf?id=Pm7KDlF851>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139439>)

Large video models have exhibited impressive performance on a wide range of visual question answering tasks, owing to the rise of powerful, pretrained text and vision encoders\. The usefulness of such models have also been demonstrated on a wide range of benchmarks, with an important caveat \- the dominant approach in these benchmarks evaluates multiple choice reasoning via text options\. This is a natural way to test text\-based reasoning in these models, and has led to significant insights regarding model behavior in the community\. In this work, we ask a different question \- what happens when the evaluation modality is visual, rather than text? We introduce three new vision\-centric evaluation benchmarks in temporal frame retrieval, video future prediction, and causal memory distortion, all designed around evaluating visual understanding capabilities in large video models\. Our approach complements the existing approaches to evaluate video understanding in frontier models\. We show that current frontier models exhibit significant weakness when attempting to reason through visual queries, rather than text\. We conclude with an extended analysis section that provides pointers for future improvements in visual understanding for large video models\.

## Depth2Pose: A Pose\-Based Benchmark for Monocular Depth Estimation without Ground\-Truth Depth

**Authors:** Viktor Kocur; Sithu Aung; Gabrielle Flood; Yaqing Ding; Lukas Bujnak; Torsten Sattler; Zuzana Kukelova

**ID:** 139479 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NVZSWCjNVK>) | [PDF](<https://openreview.net/pdf?id=NVZSWCjNVK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139479>)

Monocular depth estimation has improved significantly in recent years, driven by increasingly powerful models and large\-scale training data\. Predicted depth is increasingly used as an input signal for downstream tasks such as Structure\-from\-Motion \(SfM\), visual localization, and SLAM\. However, monocular depth estimators \(MDEs\) are still primarily evaluated in terms of depth accuracy\. Standard metrics aggregate errors globally and may not reflect the usefulness of depth for downstream geometric tasks\. We therefore propose Depth2Pose, a framework for evaluating MDEs in the context of downstream tasks\. By combining depth predictions with feature correspondences in depth\-aware geometric solvers, we use relative camera pose estimation accuracy as a task\-driven proxy for depth quality\. Traditional benchmarks require dense ground truth in the form of per\-pixel depth, which is expensive to obtain\. In contrast, our formulation requires only camera poses, which can be estimated efficiently, e\.g\., using Structure\-from\-Motion pipelines\. As a result, our framework can be applied to scenes where ground\-truth depth is difficult to obtain, for example due to large scene scale or heavy occlusions \(e\.g\., vegetated environments\)\. Leveraging this, we introduce the D2P dataset, which contains challenging scenes outside the distribution of commonly used training data\. We show that methods performing well under standard depth error metrics on existing benchmarks also perform well under our pose\-based metric when evaluated on the same datasets, but do not necessarily generalize to our more challenging dataset\. Finally, we provide a simple and extensible evaluation framework\. The dataset and code are available at kocurvik\.github\.io/depth2pose\.

## CHASM: Cross\-frequency Harmonized Axis\-Separable Mixing for Spectral Token Operators

**Authors:** Pengcheng Fang; Hongli Chen; Yuxia Chen; Tengjiao Sun; Jiaxin Liu; Xiaohao Cai

**ID:** 148306 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yp8Uvn0O2A>) | [PDF](<https://openreview.net/pdf?id=yp8Uvn0O2A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148306>)

Spectral token mixers based on Fourier transforms provide an efficient way to model global interactions in visual feature maps\. Existing designs often either apply filter\-wise spectral responses along fixed channel axes, or learn adaptive frequency\-indexed channel mixing without explicitly aligning the channel directions used across frequencies\. We propose CHASM, a Cross\-frequency Harmonized Axis\-Separable Mixer, as a structured middle ground\. CHASM separates what should be shared from what should remain frequency\-specific: all frequencies share a learned channel eigenbasis, while each frequency retains its own positive spectral gains\. The shared basis makes channel directions comparable across the spectrum, whereas the positive gains preserve local spectral adaptivity\. CHASM applies this structured operator separably along the height and width axes and is used as a drop\-in replacement mixer inside existing backbones\. We provide a structural characterization of the shared\-basis operator family and evaluate CHASM through controlled same\-backbone comparisons\. Across accelerated MRI reconstruction, undersampled MRI segmentation, and natural\-image reconstruction, CHASM consistently improves over same\-backbone spectral\-mixer baselines\. Ablations show that removing the shared\-basis constraint weakens performance, and randomizing coherent sampling geometry substantially reduces the gain, supporting cross\-frequency harmonization as a useful inductive bias for spectral token operators\.

## Learning Better Certified Models from Empirically\-Robust Teachers

**Authors:** Alessandro De Palma

**ID:** 155696 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3ccTPcDlNx>) | [PDF](<https://openreview.net/pdf?id=3ccTPcDlNx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155696>)

Adversarial training attains strong empirical robustness to specific adversarial attacks by training on concrete adversarial perturbations, but it produces neural networks that are not amenable to strong robustness certificates through neural network verification\. On the other hand, earlier certified training schemes directly train on bounds from network relaxations to obtain models that are certifiably robust, but display sub\-par standard performance\. Recent work has shown that state\-of\-the\-art trade\-offs between certified robustness and standard performance can be obtained through a family of losses combining adversarial outputs and neural network bounds\. Nevertheless, differently from empirical robustness, verifiability still comes at a significant cost in standard performance\. In this work, we propose to leverage empirically\-robust teachers to improve the performance of certifiably\-robust models through knowledge distillation\. Using versatile feature\-space distillation objectives, we show that distillation from adversarially\-trained teachers can significantly improve the performance of state\-of\-the\-art certified training algorithms for ReLU networks on robust computer vision benchmarks\.

## World Models as Group Actions

**Authors:** Zijie Wang; Wei Zhang; Weiming Zhang; Fanqi Zhang; Xiao Tan; Yipeng Qin; Guanbin Li

**ID:** 150683 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gHkKqoDxZm>) | [PDF](<https://openreview.net/pdf?id=gHkKqoDxZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150683>)

Video world models have achieved strong visual realism, but this does not ensure that their dynamics are truly governed by actions\.  In this work, we argue that action faithfulness should be understood through the compositional structure of actions, which in many embodied settings follows a group structure \(e\.g\., SE\(2\) for navigation\)\.  Based on this insight, we formalize action\-conditioned world modeling as realizing a \{\\it group action\} on the state space, providing a principled criterion for evaluating dynamics beyond visual quality\. To operationalize this framework, we propose a unified approach that enforces identity, inverse, and composition consistency via latent\-space regularization with synthesized supervision, avoiding additional data collection\. We further introduce two metrics: Group\-Action Consistency \(GAC\) and Group\-Action Robustness \(GAR\), to evaluate structural correctness and rollout stability\. Extensive experimental results show that our method consistently improves both GAC and GAR in state\-of\-the\-art video world models without degrading perceptual quality\.

## C\-LoRA: Continual Low\-Rank Adaptation for Pre\-trained Visual Models

**Authors:** Xin Zhang; Liang Bai; Xian Yang

**ID:** 149746 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nf0YHUKcRr>) | [PDF](<https://openreview.net/pdf?id=nf0YHUKcRr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149746>)

Pre\-trained visual models have become fundamental in computer vision, but they face challenges in continual learning scenarios where data and tasks evolve over time\. Low\-Rank Adaptation \(LoRA\) offers efficient fine\-tuning capabilities but remains limited for such dynamic environments\. Standard LoRA cannot distinguish important subspaces, causing critical knowledge to be overwritten in sequential training\. Existing approaches address this by dynamically expanding the set of LoRA adapters—either maintaining a growing pool of task\-specific modules or merging new adapters into prior ones—at the cost of unbounded parameter growth or increasing inference complexity\. We propose Continual Low\-Rank Adaptation \(C\-LoRA\), a method that enables a single, shared LoRA adapter to handle sequential tasks without catastrophic forgetting—without requiring any module selection or fusion at inference\. The core of C\-LoRA is a learnable routing matrix $\\boldsymbol\{\\mathcal\{R\}\}$ that explicitly controls how each rank\-one subspace contributes to the weight update\. This matrix is decomposed into a stability component \($\\boldsymbol\{\\mathcal\{R\}\} \_ \{\\text\{base\}\}$\), which preserves knowledge from prior tasks, and a plasticity component \($\\boldsymbol\{\\mathcal\{R\}\} \_ \{\\delta\}$\), which drives adaptation to the current task—providing direct control over the stability\-plasticity trade\-off\. We analyze how $\\boldsymbol\{\\mathcal\{R\}\}$ governs gradient flow during sequential training, and demonstrate competitive performance across multiple benchmarks\.

## FakeParts: a New Family of AI\-Generated Video Forgeries

**Authors:** Ziyi LIU; Firas Gabetni; Awais H SANI; Xi Wang; Soobash Daiboo; Gaëtan Brison; Gianni Franchi; Vicky Kalogeiton

**ID:** 138979 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=suBjj8xrz2>) | [PDF](<https://openreview.net/pdf?id=suBjj8xrz2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138979>)

We introduce FakeParts, a new class of AI forgery videos characterised by subtle, localised manipulations to specific spatial regions or temporal segments of otherwise authentic videos\. Unlike fully synthetic content, these partial manipulations blend seamlessly with real elements, making them particularly deceptive and difficult to detect\. To address this critical gap, we present FakePartsBench, the first large\-scale benchmark designed to capture the full spectrum of partial forgeries and to evaluate modern detection methods\. Our dataset comprises over 81K videos, including 44K FakeParts with pixel\- and frame\-level manipulation annotations, ranging from altered facial expressions to object substitutions and background modification\. Our user studies demonstrate that FakeParts reduces human detection accuracy by up to 26\\% compared to full\-video forgery contents, with similar performance degradation observed in over fifteen state\-of\-the\-art detection models\. This work identifies an urgent vulnerability in current detectors and provides the necessary resources to develop methods robust to partial manipulations\.

## Patching Up Circuit Learning on Images

**Authors:** Charles Bricout; Gennaro Gala; Viacheslav \(Slava\) Borovitskiy; Antonio Vergari

**ID:** 152498 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SgOj0VYeoD>) | [PDF](<https://openreview.net/pdf?id=SgOj0VYeoD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152498>)

Probabilistic circuits \(PCs\) have emerged as generative models guaranteeing tractable probabilistic inference\. However, tractability comes at the price of larger model sizes than in other neural generative models\. As such, to scale PCs to high\-dimensional data such as images, previous work has devised several parameter sharing techniques as well as fast evaluation protocols that consider learning PCs on independent image patches\.  In this work, we revisit this practice to highlight a surprising learnability issue: models that assume independence counterintuitively can yield better likelihoods than models that do not\. To break this apparent bottleneck and to scale PCs further, we introduce a recursive parameter sharing construction \(RePA\) that fosters efficiency without assuming independence\.  In a set of rigorous experiments, we show that RePA can greatly reduce time and memory consumption while yielding competitive likelihoods\.

## A Quantitative Visual Taxonomy of Worldwide Writing Systems

**Authors:** Philippe Meyer; Claire Roman

**ID:** 152125 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VLPMAYjWxj>) | [PDF](<https://openreview.net/pdf?id=VLPMAYjWxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152125>)

Quantitatively comparing writing systems at a worldwide scale is challenging because visual similarity must be inferred without relying on predefined linguistic or genealogical assumptions, and only limited ground\-truth taxonomy is available for validation\. We introduce a fully data\-driven framework for comparing scripts based on learned glyph representations\. Using a teacher\-\-student model, we obtain deformation\-invariant glyph embeddings and aggregate them into script\-level distances\. To enable principled model selection in the absence of labels, we construct synthetic script datasets that simulate key aspects of script evolution, including partial inheritance, visual distortion, and inventory variation\. These benchmarks are used to independently select both the script\-level distance metric and the clustering method, showing that nearest\-neighbour aggregation and Ward hierarchical clustering best recover controlled relatedness structure\. Applying the validated pipeline to 125 historically attested writing systems yields a global visual taxonomy that recovers coherent typological families while also revealing visually driven associations beyond strict genealogy\. The resulting structure is stable under controlled perturbations and shows a moderate correlation with independent geographic and temporal metadata, indicating that learned representations capture non\-trivial traces of historical transmission\. Beyond large\-scale comparison, this approach provides a quantitative tool for exploring relationships between writing systems and has potential applications in historical analysis and the decipherment of ancient scripts by identifying visually related alphabets\.

## Certifiably Optimal Robust Angular Synchronization

**Authors:** Daniel Barath; Keisuke Tateno; Marc Pollefeys; Federico Tombari

**ID:** 153331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M7UwJ21cjC>) | [PDF](<https://openreview.net/pdf?id=M7UwJ21cjC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153331>)

Rotation averaging on the circle, equivalently robust angular synchronization, underlies a wide range of geometric estimation problems, for example, gravity\-aligned Structure\-from\-Motion, multi\-way point\-cloud registration, and in\-plane alignment in single\-particle cryo\-electron microscopy\. We present the first algorithm that certifiably solves the robust maximum\-consensus formulation of this problem to global optimality\. Our approach discretises the circle into uniform bins, formulates a pairwise Markov random field and solves it via branch\-and\-bound with two key novelties: an ICM\-guided label\-pruning rule that collapses the branching factor to a handful of candidates, and a node\-constrained relaxation bound orders of magnitude tighter than the standard per\-edge bound\. Together, they reduce the search from millions of nodes to a few hundred on typical instances\. On all tested problems, the algorithm terminates with a proof of global optimality, typically in a few seconds\. Across synthetic graphs and three real\-world domains \-\- image\-based SfM on IMC 2023/2024, multi\-way LiDAR point\-cloud registration on KITTI and NSS, and cryo\-EM angular synchronization on EMPIAR\-10166 \-\- the certified solution achieves sub\-degree accuracy at outlier rates where other baselines fail\. Our code will be made publicly available\.

## Payoff\-Only Learning in Games via Best\-Response Differential Inclusions

**Authors:** Ismail Hassan; Pedro G Lind; Anis Yazidi

**ID:** 156012 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1BVKDnc5HH>) | [PDF](<https://openreview.net/pdf?id=1BVKDnc5HH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156012>)

Each player in a finite normal\-form game observes only its own realized reward; opponents, their actions, and their payoffs are unknown\. We analyze an epochal payoff\-only recursion in which the mixed strategy is held fixed across long epochs, own\-action means are estimated from bandit data, and the iterate steps toward an empirical near\-best vertex of a barrier simplex\. Our main result reduces this stochastic recursion to the deterministic best\-response differential inclusion \(BRDI\)\. Under a Hoeffding\-tied epoch schedule, the empirical near\-best correspondence is contained, on a tail event of probability at least $1\-\\sum\_\{k\\ge K\}\\delta\_k$, in a deterministic graph enlargement of the BRDI whose radius vanishes as $k\\to\\infty$\. Without conditioning, the affine interpolation of the iterates is almost surely a bounded perturbed solution of the BRDI in the Bena\\"im\-\-Hofbauer\-\-Sorin sense, and its $\\omega$\-limit set is internally chain transitive\. Composing this reduction with deterministic BRDI confinement results yields last\-iterate Nash convergence in three classes: $\\operatorname\{dist\}\(x\_k,\\NE\)\\to 0$ almost surely in finite zero\-sum games, in finite exact\-potential games \(under an empty\-interior condition on the potential's image\), and in every generic $2\\times 2$ game\. Fixed barriers give $O\(b\)$\-Nash equilibria of the original game; deterministic shrinking removes the bias\.

## IRPO: Boosting Image Restoration via Post\-training GRPO

**Authors:** Haoxuan Xu; Yi Liu; Tianfu Li; Ruolin Shen; Boyuan Jiang; Jinlong Peng; Donghao Luo; Xiaobin Hu; Shuicheng Yan; Haoang Li

**ID:** 154962 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9c4MQah9Y4>) | [PDF](<https://openreview.net/pdf?id=9c4MQah9Y4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154962>)

Post\-training has become effective for high\-level generation, but its role in low\-level vision remains underexplored\. Existing image restoration methods often rely on fixed pixel\-wise fitting to ground\-truth images, which can lead to over\-smoothing and weak generalization\. We propose IRPO, a GRPO\-based post\-training framework for deterministic restoration models\. IRPO is built around two axes: data formulation and reward modeling\. For data formulation, we select the 30\\% underperforming samples from the pre\-training stage, which improves both accuracy and training efficiency\. For reward modeling, we combine fidelity\-oriented and quality\-aware feedback with three components: a General Reward for structural fidelity, an Expert Reward that uses a Vision\-Language Model as a coarse visual\-quality judge, and a Restoration Reward for task\-specific low\-level cues\. Experiments on six in\-domain and five out\-of\-domain \(OOD\) benchmarks show that IRPO improves the AdaIR baseline by 0\.93 dB on in\-domain tasks and 3\.43 dB on OOD settings\. Our code will be released upon acceptance\.

## CoRDS: Coreset\-Based Representative and Diverse Selection for Streaming Video Understanding

**Authors:** Ailar Mahdizadeh; Puria Azadi Moghadam; Muchen Li; Xiangteng He; Leonid Sigal

**ID:** 153844 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IJR2muDUYS>) | [PDF](<https://openreview.net/pdf?id=IJR2muDUYS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153844>)

Streaming video understanding with large vision\-language models \(VLMs\) requires a compact memory that can support future reasoning over an ever\-growing visual history\. A common solution is to compress the key\-value \(KV\) cache, but existing streaming methods typically rely on local token\-wise heuristics, such as recency, temporal redundancy, or saliency, which do not explicitly optimize whether the retained cache is representative of the accumulated history\. We propose to view KV\-cache compression as a \*coreset selection\* problem: rather than scoring tokens independently for retention, we select a small subset that covers the geometry of the accumulated visual cache\. Our method operates in a joint KV representation and introduces a bicriteria objective that balances coverage in key and value spaces, preserving both retrieval structure and output\-relevant information\. To encourage a more diverse retained subset, we further introduce an orthogonality\-driven diversity criterion that favors candidates contributing new directions beyond the current selection, and connect this criterion to log\-determinant subset selection\. Across four open\-source VLMs and five long\-video and streaming\-video benchmarks, our method improves over heuristic streaming compression baselines under a fixed cache budget\. These results highlight that representative coreset selection offers a more effective principle than token\-wise pruning for memory\-constrained streaming video understanding\.

## Beyond Chamfer Distance: Granular Order\-aware Evaluation Metric For Online Mapping

**Authors:** Chouaib Bencheikh Lehocine; Adam Lilja; Junsheng Fu; Lars Hammarstrand

**ID:** 139462 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OFy3tWBIVi>) | [PDF](<https://openreview.net/pdf?id=OFy3tWBIVi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139462>)

Online map estimation is a crucial component of autonomous driving systems that reduces the reliance on costly high\-definition maps\. State\-of\-the\-art \(SOTA\) methods commonly predict map elements as ordered sequences of points that form polylines and polygons\. The evaluation of these methods relies predominantly on mean average precision \(mAP\) based on thresholded Chamfer distance \(CD\)\. This framework lacks sensitivity to point ordering and provides limited granularity in assessing geometric quality, making it difficult to distinguish which methods truly excel over others\. In this work, we address these limitations on two fronts\. For the single\-instance similarity measure, we introduce sequence optimal sub\-pattern assignment \(SOSPA\), an order\-aware metric that enables fine\-grained evaluation of individual geometries while satisfying all metric axioms\. For the multi\-instance evaluation framework, we propose polyline localisation and detection \(PLD\), a soft metric that jointly captures detection quality and geometric accuracy, replacing the hard thresholding of mAP with a principled soft assignment\. Through evaluations on nuScenes, we demonstrate that PLD effectively ranks SOTA online mapping methods \(MapTRv2, StreamMapNet, MapTracker\) while providing a decomposed error analysis\. This analysis identifies detection capability as the dominant bottleneck in current methods, revealing a performance trend that mAP fails to capture\. Code for evaluation using our metrics will be released\.

## Reinforced Evidence\-Aware Long Video Understanding

**Authors:** Yuan Xie; Tianshui Chen; Deyu Zhou; Lionel Ni

**ID:** 151586 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZUmUvF2Vx9>) | [PDF](<https://openreview.net/pdf?id=ZUmUvF2Vx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151586>)

Despite strong benchmark performance, multimodal large language models \(MLLMs\) remain prone to hallucinations, as they are optimized for linguistic plausibility rather than faithful answering based on observation\. This issue is particularly severe in long videos, where critical cues are temporally sparse and often missed by uniform frame sampling\.  Yet existing methods still either operate on fixed pre\-sampled inputs, implicitly assuming that all necessary evidence has already been captured, or augment reasoning with retrieval without requiring answers to be grounded in visual evidence\. We propose Reinforced Evidence\-Aware Learning , a framework that reformulates long\-video question answering as an iterative process of evidence gathering and verification, enabling faithful answering with explicit evidence support, thereby reducing hallucinations\. At each reasoning step, the model assesses whether the current observation is sufficient to answer the question, and either searches for missing visual evidence from the video or produces a final answer with explicitly cited evidence\. To internalize this reasoning policy, we design an evidence\-aware reward for reinforcement learning post\-training that jointly requires answer correctness and evidence faithfulness\. The latter is evaluated by a pretrained cross\-modal consistency verifier that matches the generated evidence descriptions against the visual content of the source frames, eliminating the need for manual annotations\. Built on Qwen2\.5\-VL\-7B, REAL achieves state\-of\-the\-art results on four long\-video benchmarks \(Video\-MME, MLVU, LongVideoBench, and EgoSchema\) and substantially suppresses hallucinations on the dedicated video\-hallucination benchmarks VideoHallucer and ELV\-Halluc, with only 96 input frames surpassing the 768\-frame base model in both accuracy and hallucination resistance\.

## Measuring Robustness and Efficiency in a Connectome\-Constrained Fly Visual System Model on a Collision\-Detection Task

**Authors:** Alexandre Garcia\-Duran; Alejandro Rodriguez\-Garcia; Manuel Molano\-Mazon; Alexandre HYAFIL; Srikanth Ramaswamy; Janne K Lappalainen

**ID:** 149010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tUtERl6Jq6>) | [PDF](<https://openreview.net/pdf?id=tUtERl6Jq6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149010>)

Biological visual systems compute reliably under tight metabolic and wiring constraints despite noisy inputs and stochastic circuit components\. Artificial vision systems tend to invert both properties: They consume vastly more energy and can be sensitive to adversarial perturbations\. Whether artificial networks with structural properties of real brain wiring are more robust at lower computational cost is unclear\. We address this with FlyNet \(Lappalainen et al\. 2024\), a task\-optimized, continuous\-time neural network model of the fly visual system constrained by its synaptic connectome\. We benchmark it against CNN, RAFT \(Teed and Deng, 2020\), and a sparse continuous\-time recurrent neural network without connectome constraints \(CTRNN\) on a looming\-based collision\-detection task within a differentiable 3D rendering pipeline\. We find that FlyNet is more robust than CNN controls to flicker, unstructured noise, and motion jitter\. Compared with RAFT controls, FlyNet is more robust to flicker and motion jitter but less robust to all gradient\-based attacks\. Yet, FlyNet uses up to five orders of magnitude fewer FLOPs than RAFT, achieving higher robustness on common video corruptions at far lower cost\. FlyNet is less robust than CTRNN across all tested perturbations, suggesting that FlyNet's connectome constraints contribute to cost, not robustness\. To probe FlyNet's failure modes, we use counterfactual restoration: textures equally far from training as adversarial textures that recover correct classification also recover position and velocity representations, ruling out unfamiliar textures as the cause of failure\. Classical reverse\-phi illusions degrade the same downstream position and velocity readouts, suggesting that both perturbations may exploit similar computational vulnerabilities\. Together, these results show that FlyNet is robust for its computational cost on an ecologically important task, and indicate that different architectures specialized on the same task have specific robustness profiles across perturbation types\. Our differentiable pipeline enables computational tests of this hypothesis and generates targeted adversarial stimuli for in vivo experiments\.

## MEMEVO: A Memory\-Evolved Video Agent for Long Video Understanding

**Authors:** Yuan Wang; Yake Wei; Tianrun Xu; Fengyun Rao; Jing LYU; Xuetao Feng; Yifan Sun

**ID:** 156021 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1666VmXNqJ>) | [PDF](<https://openreview.net/pdf?id=1666VmXNqJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156021>)

Agent\-based frameworks grounded in vision\-language models \(VLMs\) have emerged as a dominant paradigm for long video understanding\. Yet, prevailing agents lack the core capacity for \\textit\{dynamic memory evolution\}, failing to transform ephemeral perceptions into a continuously growing, adaptive knowledge system and thus inducing inefficient redundant exploration during reasoning\. To this end, we present MEMEVO, an online Memory\-Evolved Video Agent framework centered on \\textit\{dynamic memory evolution\} that leverages accumulating multi\-turn queries to actively drive progressive memory evolution, establishing a long\-lived memory system for knowledge accumulation\. Central to MEMEVO is a four\-level Hierarchical Self\-Evolved Memory, which constructs memory bottom\-up via progressive abstraction, distilling transient perceptions into reusable, query\-agnostic event nodes organized within a temporal\-semantic graph, while realizing active memory evolution through event insertion, duplicate merging, and redundant pruning\. To mitigate redundant retrieval in the evolved memory, we devise a State\-Conditioned Graph Memory Retrieval mechanism that guides efficient navigation of the memory space, integrating State\-Conditioned Graph Routing and Meta\-Cognitive Stopping criteria to ensure sufficient evidence acquisition without re\-exploration\. Extensive benchmarking confirms that MEMEVO achieves state\-of\-the\-art performance on reasoning\-intensive tasks \(\\textbf\{\\textcolor\[HTML\]\{00FF00\}\{\+6\.1\\%\}\} VideoMMMU, \\textbf\{\\textcolor\[HTML\]\{00FF00\}\{\+4\.8\\%\}\} LongVideoBench\), while facilitating \\textit\{cross\-query knowledge reuse\} and \\textit\{cross\-model generalization\}\.

## Thinking with Visual Primitives

**Authors:** Ruijie Lu; Yiyang Ma; Xiaokang Chen; Lingxiao Luo; Zhiyu Wu; Zizheng Pan; Ting Chen; Gang Zeng

**ID:** 154630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CA9dsXjWGT>) | [PDF](<https://openreview.net/pdf?id=CA9dsXjWGT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154630>)

Despite the remarkable progress in Multimodal Large Language Models \(MLLMs\), the prevailing Chain\-of\-Thought \(CoT\) paradigms remain predominantly confined to the linguistic space\. While recent advancements have focused on bridging the Perception Gap through high\-resolution cropping \(e\.g\., Thinking with Images\), they overlook a more fundamental bottleneck: the Reference Gap\. The inherent ambiguity of natural language often fails to provide precise, unambiguous pointers to complex spatial layouts, leading to logical collapse in tasks requiring rigorous grounding\. In this work, we introduce Thinking with Visual Primitives, a novel reasoning framework that elevates spatial markers \(e\.g\., points and bounding boxes\) to "minimal units of thought"\.  By interleaving these visual primitives directly into the thinking process, our model can "point" while it "reasons", effectively grounding its cognitive trajectory in the physical coordinates of the image\.  Notably, our framework is built on a highly optimized architecture with extreme visual token efficiency\. Despite its compact model scale and significantly lower image\-token budget, our model achieves frontier\-competitive performance on a focused suite of challenging visual QA tasks, matching or exceeding models such as GPT\-5\.4, Claude\-Sonnet\-4\.6, and Gemini\-3\-Flash\. This demonstrates a path toward more efficient and scalable System\-2\-like multimodal intelligence\.

## DC\-DiT: Adaptive Compute and Elastic Inference for Visual Generation via Dynamic Chunking

**Authors:** Akash Haridas; Utkarsh Saxena; Parsa Ashrafi Fashi; Mehdi Rezagholizadeh; Vikram Appia; Emad Barsoum

**ID:** 148857 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ue644x6zvR>) | [PDF](<https://openreview.net/pdf?id=ue644x6zvR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148857>)

Diffusion Transformers rely on static patchify tokenization, assigning the same token budget to smooth backgrounds, detailed object regions, noisy early timesteps, and late\-stage refinements\. We introduce the Dynamic Chunking Diffusion Transformer \(DC\-DiT\), which replaces fixed patchification with a learned encoder\-router\-decoder scaffold that adaptively compresses the 2D input into a shorter token sequence through a chunking mechanism learned end\-to\-end with diffusion training\. DC\-DiT allocates fewer tokens to predictable regions and noisy timesteps, and more tokens to detailed regions and later refinement stages, yielding meaningful spatial segmentations and timestep\-adaptive compression schedules without supervision\. Furthermore, the router provides an importance ordering over retained tokens, enabling elastic inference: a single checkpoint can be evaluated at flexible compute budgets with a smooth quality\-compute tradeoff\. Additionally, DC\-DiT can be upcycled from pretrained DiT checkpoints and is also compatible with orthogonal dynamic computation approaches\. On class\-conditional ImageNet generation, DC\-DiT reduces inference FLOPs by up to 36\.8% and improves FID by up to 37\.8% over DiT baselines, yielding a stronger quality\-\-compute Pareto frontier across model scales, resolutions, and guidance settings\. More broadly, these results suggest that adaptive tokenization is a general mechanism for making visual generation both more efficient and more flexible at inference time\.

## BalCapRL : A Balanced Framework for RL\-Based MLLM Image Captioning

**Authors:** Shaokai Ye; Vasileios Saveris; Yihao Qian; Jiaming Hu; Elmira Amirloo; Peter Grasch

**ID:** 149366 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qZ70ixJOjT>) | [PDF](<https://openreview.net/pdf?id=qZ70ixJOjT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149366>)

Image captioning is one of the most fundamental tasks in computer vision\. Owing to its open\-ended nature, it has received significant attention in the era of multimodal large language models \(MLLMs\)\. In pursuit of ever more detailed and accurate captions, recent work has increasingly turned to reinforcement learning \(RL\)\. However, existing captioning\-RL methods and evaluation metrics often emphasize a narrow notion of caption quality, inducing trade\-offs across core dimensions of captioning\. For example, utility\-oriented objectives can encourage noisy, hallucinated, or overlong captions that improve downstream question answering while harming fluency, whereas arena\-style objectives can favor fluent but generic descriptions with limited usefulness\. To address this, we propose a more balanced RL framework that jointly optimizes utility\-aware correctness, reference coverage, and linguistic quality\. In order to effectively optimize the resulting continuous multi\-objective reward formulation, we apply GDPO\-style reward\-decoupled normalization to continuous\-valued captioning rewards and show that it improves performance over vanilla GRPO\. Additionally, we introduce length\-conditional reward masking, yielding a more suitable length penalty for captioning\. Across LLaVA\-1\.5\-7B and Qwen2\.5\-VL 3B and 7B base models, our method consistently improves caption quality, with peak gains of \+13\.6 DCScore, \+9\.0 CaptionQA, and \+29\.0 CapArena across different models\.

## Scaling Full Conformal Image Classifiers

**Authors:** Julio Silva\-Rodríguez; Ender Konukoglu

**ID:** 149457 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwt7abXpU8>) | [PDF](<https://openreview.net/pdf?id=pwt7abXpU8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149457>)

Conformal prediction provides set\-valued predictions with distribution\-free coverage guarantees, making it attractive for high\-stakes image classification\. However, split conformal prediction is data\-inefficient, while full conformal prediction \(FCP\), despite its stronger statistical efficiency, is computationally prohibitive at scale because it requires candidate\-specific model refits at test time\. We address this limitation by leveraging zero\-shot vision\-language models \(VLMs\) to guide scalable FCP in large label spaces\. We introduce Targeted Full Conformal Prediction \(T\-FCP\), which uses a lightweight inductive conformal predictor to prune unlikely labels and applies FCP only to the remaining candidates, reducing computation while retaining the formal guarantee of the combined conformal procedure\. We further propose Stabilized Online LDA \(SO\-LDA\), an efficient VLM adaptation solver based on rank\-one inverse\-covariance updates\. Across multiple benchmarks, including ImageNet, T\-FCP enables practical full\-conformal image classification with modest test\-time overhead, yielding efficient prediction sets and more stable empirical coverage than split conformal alternatives\.

## GLUT: 3D Gaussian Lookup Table for Continuous Color Transformation

**Authors:** Danna Xue; David Serrano\-Lozano; Shaolin Su; Javier Vazquez\-Corral

**ID:** 153974 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H76r1dCvUV>) | [PDF](<https://openreview.net/pdf?id=H76r1dCvUV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153974>)

3D Lookup Tables \(3D LUTs\) are widely used for color mapping, but their grid\-based representation requires discretizing the RGB space, leading to a capacity\-memory trade\-off that becomes prohibitive when storing large numbers of LUTs\. Recent approaches adopt implicit neural representations to improve scalability, yet their black\-box nature limits interpretability and hinders intuitive, localized editing\. In this paper, we propose Gaussian LUT \(GLUT\), a continuous and explicit color representation that models color transformations using a set of learnable 3D Gaussian primitives\. By avoiding fixed\-resolution grids, GLUT achieves flexible representational capacity while maintaining a compact memory footprint\. Its explicit, spatially localized formulation further enables both accurate modeling and interpretability\. Building on this representation, we introduce a compact conditional generator \(CGLUT\) that predicts GLUT parameters for multiple LUT instances, encoding diverse color styles in a single framework to enable smooth and controllable LUT style blending\. Moreover, GLUT supports efficient, user\-friendly editing by allowing localized adjustments to specific color regions without global retraining\. Experimental results demonstrate that our approach outperforms prior neural LUT representations in both accuracy and efficiency, while offering improved interpretability and interactive control\. We are committed to releasing the code and models upon acceptance\.

## i\-DEQ: A stable inertial Deep Equilibrium model for image restoration

**Authors:** Antonin Clerc; Marien Renaud; Baudouin Denis de Senneville; Nicolas Papadakis

**ID:** 150886 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=efDZxWqk5d>) | [PDF](<https://openreview.net/pdf?id=efDZxWqk5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150886>)

Deep Equilibrium Models \(DEQs\) are an established framework for image restoration that learn a problem\-adapted regularization by solving a fixed\-point \(i\.e\. equilibrium\) problem\. While flexible and expressive, DEQs are often hindered by high computational cost and training instability\. We propose an inertial DEQ \(i\-DEQ\) that learn an explicit nonconvex regularization within the DEQ formulation\. By using momentum within the fixed\-point iterations, i\-DEQ has convergence guarantees and accelerated rates\. Moreover, we observe that i\-DEQ is significantly more stable during the training and robust to rough initialization than DEQs\. Numerical experiments on various linear and nonlinear inverse problems demonstrate that i\-DEQ achieves reconstruction quality comparable to state\-of\-the\-art methods, while reducing DEQ's inference time by a factor of two\.

## Mitigating Saliency Collapse: Robust Saliency\-Aware Long\-Text Image\-Text Alignment

**Authors:** Qiuyu Kong; Zanxi Ruan; Marco Cristani; Yiming Wang

**ID:** 155555 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4gJQIwux26>) | [PDF](<https://openreview.net/pdf?id=4gJQIwux26>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155555>)

Long\-text image–text alignment is essential for fine\-grained scene understanding, yet existing methods mainly focus on extending context length or improving local alignment\. We identify an overlooked failure mode, saliency collapse, where models over\-rely on text that features visual prominence while underutilizing non\-salient context\. Consequently, retrieval performance degrades sharply when salient content is reduced, despite that the non\-salient context remains informative\. To address this, we propose RoSA, a saliency\-aware finetuning framework that decomposes image\-text pairs into complementary salient and contextual views, enabling joint learning of prominent and contextual semantics\. We propose a modality\-independent decomposition strategy to combine object\-level visual saliency estimation with LLM\-based text decomposition to bridge vision and language\.  We employ auxiliary objectives to explicitly align these views, ensuring robust representation with both salient and contextual features\. RoSA greatly improves long\-text retrieval and demonstrate strong robustness to saliency collapse across benchmarks\. Moreover, our auxiliary objectives are plug\-and\-play, bringing consistent gains to existing tuning methods\. Code and checkpoints will be released upon acceptance\.

## Solaris: Building a Multiplayer Video World Model in Minecraft

**Authors:** Oscar Michel; Georgy Savva; Daohan Lu; Suppakit Waiwitlikhit; Timothy Meehan; Dhairya P Mishra; Egor Gikalo; Srivats Poddar; Jack Lu; Saining Xie

**ID:** 148491 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xP408u4Mho>) | [PDF](<https://openreview.net/pdf?id=xP408u4Mho>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148491>)

Existing action\-conditioned video generation models \(video world models\) are limited to single\-agent perspectives, failing to capture the multi\-agent interactions of real\-world environments\. We introduce Solaris, a multiplayer video world model that simulates consistent multi\-view observations\. We develop a multiplayer data system designed for robust, continuous, and automated data collection on video games such as Minecraft\. Unlike prior platforms built for single\-player settings, our system supports coordinated multi\-agent interaction and synchronized videos \+ actions capture\. Using this system, we collect 12\.64 million multiplayer frames and propose an evaluation framework for multiplayer movement, grounding, building, and view consistency\. We train Solaris using a staged pipeline that progressively transitions from single\-player to multiplayer modeling, combining bidirectional, causal, and Self Forcing training\. In the final stage, we introduce Checkpointed Self Forcing, a memory\-efficient Self Forcing variant that enables a longer\-horizon teacher\. Results show our architecture and training design outperform existing baselines\. We also demonstrate that scaling beyond two players is possible by training a 3\-player proof\-of\-concept model and simulating up to 16 players on our hardware with efficient attention\. Through open\-sourcing our system and models, we hope to lay the groundwork for a new generation of multi\-agent world models\.

## HumanStereo: A Benchmark for Metric Facial Depth Estimation and Its Evaluation

**Authors:** Alexandru\-Ion Marinescu; DIANA\-LAURA BORZA; DARABANT Sergiu Adrian

**ID:** 138969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tOPPmPEqR5>) | [PDF](<https://openreview.net/pdf?id=tOPPmPEqR5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138969>)

Stereo depth estimation of human faces is a prerequisite for various computer vision applications, yet existing stereo benchmarks target outdoor, driving, or large object reconstruction scenarios and lack the anatomical precision and evaluation framework these applications require\. We introduce HumanStereo, the first large\-scale synthetic stereo dataset dedicated to human faces, comprising 417k stereo pairs from 128 photorealistic avatars across 109 unique stereo configurations and four indoor environments, with dense ground\-truth annotations including depth maps, surface normals, segmentation masks, and facial landmarks\. We argue that standard evaluation metrics such as $\\delta\_1$ and RMSE are ill\-suited for facial depth estimation, and propose two complementary metrics: task\-grounded absolute inlier\-ratio \(IR\) and Landmark 3D Distance Error \(L3DE\) for metric anatomical accuracy\. We benchmark five representative stereo methods: geometrical matchers, RAFT\-Stereo, IGEV\+\+, MASt3R, and FoundationStereo\. A downstream evaluation on real optometric data for inter\-pupillary distance \(IPD\) measurement, a parameter required in all eyeglass prescription, shows that even the best\-performing model remains an order of magnitude above the sub\-millimeter accuracy required for clinical deployment\.

## Test\-Time Conditioning with Representation\-Aligned Visual Features

**Authors:** Nicolas Sereyjol\-Garros; Ellington Kirby; Victor Letzelter; Victor Besnier; Nermin Samet

**ID:** 148903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uJPI1xg4IN>) | [PDF](<https://openreview.net/pdf?id=uJPI1xg4IN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148903>)

While representation alignment with self\-supervised models has been shown to improve diffusion model training, its potential for enhancing inference\-time conditioning remains largely unexplored\.  We introduce Representation\-Aligned Guidance \(REPA\-G\), a framework that leverages these aligned representations, with rich semantic properties, to enable test\-time conditioning from features in generation\. By optimizing a similarity objective \(the \*potential\*\) at inference, we steer the denoising process toward a conditioned representation extracted from a pre\-trained feature extractor\. Our method provides versatile control at multiple levels of granularity, ranging from patch level matching via single patches to broad semantic guidance using global image feature tokens\. We further extend this to multi\-concept composition, allowing for the faithful combination of distinct concepts\.  REPA\-G operates entirely at inference time with no additional training required, offering a flexible and precise alternative to often ambiguous text prompts or coarse class labels\. Our approach achieves high\-quality, diverse generations on ImageNet and COCO\.

## What Drives Compositional Generalization? The Importance of Continuous Training Objectives in Visual Generative Models

**Authors:** Karim Farid; Rajat Sahay; Yumna Alnaggar; Simon Schrodi; Volker Fischer; Cordelia Schmid; Thomas Brox

**ID:** 149806 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nDJI3hkYsq>) | [PDF](<https://openreview.net/pdf?id=nDJI3hkYsq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149806>)

Compositional generalization, the ability to generate novel combinations of known concepts, is a key ingredient for visual generative models\. Yet, not all mechanisms that enable or inhibit it are fully understood\. In this work, we conduct a systematic study of which design choices critically determine compositional generalization in image and video generation\. By isolating independent design axes, we identify two key factors that determine compositional success: \(i\) whether the training objective operates on a discrete or continuous distribution, and \(ii\) the completeness of conditioning information about constituent factors during training\. We also show that relaxing the discrete loss with an auxiliary continuous latent objective can partially recover compositional performance in discrete models like MaskGIT\. Our findings, corroborated by diverse compositional tasks and preliminary evidence in world models and LLMs, motivate a shift toward continuous objectives for compositional generalization\.

## Latent Motion Alignment for Video Diffusion

**Authors:** Nick Stracke; Kolja Bauer; Björn Ommer

**ID:** 151292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bVwQzYJ7qZ>) | [PDF](<https://openreview.net/pdf?id=bVwQzYJ7qZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151292>)

Video diffusion models often fail in precisely the dimension that distinguishes videos from images: motion\. Standard reconstruction and flow\-matching objectives in pixel or VAE\-latent space are dominated by appearance, so visually similar clips can be treated as close even when their underlying dynamics differ\. We propose Latent Motion Alignment, a training\-time objective that compares predicted and ground\-truth videos in a learned motion space\. This space is learned by training a compact encoder to describe how one latent frame changes into the next, while a decoder ensures that the resulting token captures information needed to model the transition\. Once learned, the encoder is frozen and used as an auxiliary loss for fine\-tuning video diffusion models\. The motion module is used only during training and adds no inference\-time cost\. We validate that the learned space separates motion rather than appearance shortcuts, improves motion\-sensitive generation metrics, and enables fine\-grained Olympic\-diving generation where jump type and score depend on subtle temporal structure\.

## NIKA: Efficient Neural Video Representation via Structured Latent Diversity

**Authors:** Slater R Victoroff; Madison May

**ID:** 153730 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JDRlh5OZZs>) | [PDF](<https://openreview.net/pdf?id=JDRlh5OZZs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153730>)

Implicit neural video representations offer compact, continuous alternatives to conventional codecs, but higher reconstruction fidelity typically requires more computation per decoded frame\. We introduce NIKA, which shifts video\-specific capacity from the decoder into a structured latent state, allowing reconstruction quality to scale with latent expressivity while keeping active decoding lightweight\. NIKA constructs this state from complementary spatial, spectral, and temporal bases, then decodes it with lightweight ConvNeXt\-style convolutional upsampling\. On UVG, a 2\.91M\-parameter NIKA model achieves 33\.33 dB PSNR at 462 decoding FPS with 4\.5G MACs on an RTX A5000, outperforming comparable single\-resolution NeRV\-family baselines while using 39\-\-51$\\times$ fewer MACs\. Ablations show that diversifying latent components improves reconstruction more reliably than reallocating capacity within a single component, and qualitative analysis reveals specialization among components\. Together, these results identify structured latent diversity as a practical alternative to scaling decoder complexity for high\-fidelity, efficient neural video representation\.

## AsymHP: Load\-Balanced Sparse Attention for Video Diffusion Transformers

**Authors:** Xinwei Qiang; Yue Guan; Ruihan Zhu; Mihir Jagtap; Zaifeng Pan; Zhongkai Yu; Chang Chen; Zhengding Hu; Yufei Ding; Adnan Aziz

**ID:** 151792 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyeAckrYOC>) | [PDF](<https://openreview.net/pdf?id=XyeAckrYOC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151792>)

Video diffusion transformers rely on self\-attention over long spatio\-temporal token sequences, making inference expensive even when sparse attention reduces the number of computed blocks\. This paper studies a systems bottleneck that appears in dynamic sparse video attention: per\-head sparsity can vary widely across denoising steps, layers, and prompts, so equal\-head parallel execution leaves some GPUs waiting for dense heads assigned to other GPUs\. We propose AsymHP, a runtime system that uses the previous denoising step's per\-head sparse density to place a non\-uniform number of heads on each GPU\. AsymHP combines this lightweight online density estimate, a cost model for mask construction and sparse attention computation, and an asymmetric head redistribution primitive that avoids padding variable\-size head shards into symmetric collectives\. In our evaluation on H100 GPUs, AsymHP improves sparse attention latency by up to $1\.54\\times$ without changing the underlying sparse\-attention algorithm\.

## Recreating Video Arenas via Automated Preference Scoring

**Authors:** Yue Zhao; Aniket Gupta; Juze Zhang; Tiange Xiang; Ryan Rong; Xuan Su; Fei\-Fei Li; Ehsan Adeli

**ID:** 138962 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tlDSZnxUGr>) | [PDF](<https://openreview.net/pdf?id=tlDSZnxUGr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138962>)

Evaluating video generation models is notoriously challenging; existing metrics either fail to align with human judgment or rely on costly, unscalable human ratings\. In this work, we introduce \\textbf\{Video Preference Score\} \(VPS\), a fully automated video preference score designed to directly model human judgment and accurately recreate large\-scale, Elo\-based video arenas\. Trained on a newly collected dataset that augments generated videos with retrieved real\-world footage, VPS evaluates paired videos against complex text prompts to predict human preference\. Experiments demonstrate that VPS correlates highly with human consensus and generalizes zero\-shot across unseen models and benchmarks\. Furthermore, we showcase the utility beyond evaluation: as a plug\-in reward model, VPS seamlessly integrates with Flow\-GRPO to improve WAN\-2\.1's generative quality by 51 Elo points\. Overall, VPS provides a scalable and generalizable solution for both evaluating and aligning modern video generation models\.

## Beyond Scalar Distances: Semantic Attribute Gradients from Frozen MLLMs for Visual Embeddings

**Authors:** Shubhang Bhatnagar; Dheeraj Baiju; Narendra Ahuja

**ID:** 153671 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JddD3RHEz2>) | [PDF](<https://openreview.net/pdf?id=JddD3RHEz2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153671>)

Vision encoders for retrieval are typically trained with class\-label supervision: each training pair reduces to a scalar that uniformly pushes the embedding apart or pulls it together, as if every visual attribute either differed or matched\. A multimodal large language model \(MLLM\), shown the same pair, can articulate those attributes and use them to predict whether the images share a class\. We propose \\textbf\{SAGA\}, a framework that turns this language\-grounded, attribute\-aware perception into a training signal for the encoder itself\.  Specifically, we use Group Relative Policy Optimization \(GRPO\) to reward the MLLM for correct predictions on the vision encoder's tokens\. Since correct predictions require those tokens to expose the specific attributes that differ or match between the pair, the gradient pushes the encoder to encode them, replacing the uniform pair\-level scalar with attribute\-resolved supervision\. An auxiliary attention\-distillation loss anchors the encoder's embedding to tokens the MLLM attended to, and a standard metric\-learning loss shapes the embedding geometry for nearest\-neighbour retrieval\. The MLLM is frozen throughout and discarded at inference, matching the deployment cost of a metric\-learning baseline\. SAGA improves Recall@1 by 3 to 6 points over state\-of\-the\-art baselines on CUB\-200\-2011, Cars\-196, FGVC\-Aircraft, and iNaturalist Aves on zero\-shot image retrieval\.

## SpecDrop: Parameter\-Free Category\-Conditioned Routing for Modular Specialization

**Authors:** Boyao Wang; Zhihan Lei

**ID:** 148346 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yYWJotX1BO>) | [PDF](<https://openreview.net/pdf?id=yYWJotX1BO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148346>)

Modular networks pursue specialization through learned routers, gates, and load\-balancing losses\. However, at matched total\-parameter budgets, learned routers can underperform equal\-weight No\-Routing baselines\. Is the bottleneck the routing algorithm, or the alignment between training\-signal granularity and the target categories? We show that when each training and inference unit carries one coarse category tag, a fixed parameter\-free routing scheme \(SpecDrop\) induces branch\-category specialization and matches or exceeds the learned\-routing baselines we evaluate at matched parameter budget; when this alignment breaks, the scheme matches the multi\-branch No\-Routing baseline\. SpecDrop assigns each of $K$ branches weight $p\_\{\\mathrm\{a\}\}$ for its category and a small leakage $p\_\{\\mathrm\{i\}\}\{&gt;\}0$ otherwise, merged through a category\-independent fixed denominator that calibrates merged\-branch magnitude to single\-branch scale, with no learnable routing parameters or auxiliary losses\. Category labels are required at inference, drawn from dataset metadata\. On vision tasks where each image has one superclass label, SpecDrop reaches $\\mathbf\{79\.23\\%\}$ on CIFAR\-100 with ResNet\-110, outperforming dense by $\+4\.75$, and $\\mathbf\{79\.89\\%\}$ on ImageNet\-1K with Vision Transformer ViT\-S/16, outperforming the matched\-supervision No\-Routing baseline with a shared expert by $\+6\.53$\. SpecDrop reaches the highest top\-1 among the multi\-branch routing baselines we evaluate at this parameter budget \(Soft MoE and Mod\-Squad on ImageNet\)\. On NLP tasks where training units span multiple categories, SpecDrop matches the multi\-branch No\-Routing baseline on both SlimPajama\-6B language modeling with a 30M Transformer and SuperNI instruction tuning over Llama\-3\.2\-1B with LoRA\. Furthermore, SpecDrop matches or outperforms multi\-branch routing baselines including Demix and LoRAMoE, and is statistically tied with HydraLoRA\. Per\-branch pruning sensitivity reveals four specialization regimes ranked by category clarity: strongest on ImageNet\-1K, strong on CIFAR\-100, weakening on SlimPajama, and anti\-aligned on SuperNI LoRA\. Granularity alignment, not algorithm choice, localizes when routing helps\. Code: https://anonymous\.4open\.science/r/C30862\.

## Learning Task\-Centric World Models from Visual Foundations

**Authors:** Minghao Fu; Fan Feng; Nicklas Hansen; Biwei Huang

**ID:** 149351 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhsoAkQtjk>) | [PDF](<https://openreview.net/pdf?id=qhsoAkQtjk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149351>)

World models enable agents to predict future dynamics conditioned on actions, making the choice of latent state representation central to planning and control\. Existing latents are often either learned directly from pixels with limited semantic structure or inherited from frozen visual foundation models with excessive task\-irrelevant detail, yielding state spaces that are poorly matched to downstream planning and control\. This is especially challenging in reward\-free offline settings, where the model must learn from fixed trajectories without reward supervision or online interaction\. To address this, we propose TC\-WM, a framework for turning foundation\-model embeddings into compact, task\-sufficient world representations\. The key design is to treat the pretrained embedding space as a semantic scaffold rather than as the final state space: TC\-WM linearly projects high\-dimensional visual embeddings into a compact latent, aligns a designated subspace with the agent’s physical state via contrastive learning, and reconstructs embeddings to preserve useful visual structure\. This combines the generality of foundation features with the controllability of task\-centric dynamics\. Theoretically, we show that TC\-WM suffices to identify the task\-centric latent factors up to a simple transformation\. Empirically, TC\-WM enables test\-time planning across diverse environments, e\.g\., Robomimic and D4RL, achieving better world modeling quality and more precise control compared to state\-of\-the\-art world model approaches\. Webpage: https://tc\-wm\.github\.io/

## Video Models Can Reason with Verifiable Rewards

**Authors:** Tinghui Zhu; Sheng Zhang; James Yipeng Huang; Selena Song; Xiaofei Wen; Yuankai Li; Hoifung Poon; Muhao Chen

**ID:** 153418 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LTemJEibp6>) | [PDF](<https://openreview.net/pdf?id=LTemJEibp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153418>)

Video diffusion models have made rapid progress in perceptual realism and temporal coherence, but they remain primarily optimized for plausible generation rather than verifiable reasoning\. This limitation is especially pronounced in tasks where generated videos must satisfy explicit spatial, temporal, or logical constraints\. Inspired by the role of reinforcement learning with verifiable rewards \(RLVR\) in reasoning\-oriented language models, we introduce VideoRLVR , a practical recipe for optimizing video diffusion models with rule\-based feedback\. VideoRLVR formulates video reasoning as the generation of verifiable visual trajectories and consists of an SDE\-GRPO optimization backbone, dense decomposed rewards, and an Early\-Step Focus strategy for efficient training\. The Early\-Step Focus strategy restricts policy optimization to the early denoising phase, reducing training latency by about 40\\% while preserving performance\. We evaluate VideoRLVR on Maze, FlowFree, and Sokoban, three procedurally generated domains with objective success criteria\. Across these tasks, VideoRLVR consistently improves over supervised fine\-tuning baselines, with dense decomposed rewards proving especially important in low\-success\-rate settings\. Our RL\-optimized model also outperforms the evaluated proprietary and open\-source video generation models on these verifiable reasoning benchmarks and out\-of\-domain benchmarks\. These results suggest that verifiable RL can move video models beyond perceptual imitation toward more reliable rule\-consistent visual reasoning\.

## What Should a Streaming Video Model Remember?

**Authors:** Haonan Ge; Yiwei Wang; Hang Wu; Yujun Cai

**ID:** 149000 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tZME4ewq9U>) | [PDF](<https://openreview.net/pdf?id=tZME4ewq9U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149000>)

Streaming video understanding models must answer queries at any moment during an ongoing stream, using only what they have observed so far and under fixed memory and computation budgets\. Existing methods address this by adding memory banks, retrieval modules, or visual token compression to preserve long\-range history\. However, strong recent\-window baselines show that indiscriminate history injection can dilute current\-scene perception, suggesting that the key challenge is not whether to use memory, but how to allocate it selectively\. We formulate this as budgeted online latent evidence allocation and propose SelectStream , a selective latent\-memory framework that keeps the current observation directly visible to a frozen VLM while exposing historical information only through a compact, query\-conditioned evidence budget\. Three coordinated mechanisms govern when to write, what to preserve, and how to retrieve: surprise\-driven adaptive windowing, priority\-preserving consolidation, and query\-conditioned graph reasoning over a fixed\-capacity latent memory graph\. Retrieved evidence is calibrated and injected as latent tokens for answer generation, without replaying frames or growing the context with stream length\. Experimental results show that SelectStream achieves strong online streaming performance and preserves general video understanding, reaching 82\.67\\% on StreamingBench, 67\.03\\% on OVO\-Bench, and 74\.4\\% average accuracy on offline video benchmarks, while outperforming strong recent\-window baselines and prior streaming memory methods\.

## Personal Visual Memory from Explicit and Implicit Evidence

**Authors:** Viet Nguyen; Thao Nguyen; Vishal Patel; Yuheng Li

**ID:** 154605 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CN39BT0VJT>) | [PDF](<https://openreview.net/pdf?id=CN39BT0VJT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154605>)

Long\-term memory is increasingly important for personalized AI agents, yet existing benchmarks and methods remain largely text\-centric\. Even when images are included, the user\-specific information needed for later questions is typically recoverable from text alone, and most memory systems reduce image turns to generic captions\. Yet images often carry personal information that text rarely states\-\-\-both \\emph\{explicit\} evidence, such as recurring user\-associated entities, and \\emph\{implicit\} evidence, such as latent user facts inferred from visual or multimodal cues\. We introduce a benchmark for \\emph\{personal visual memory\} that targets both forms of evidence, and propose \\textsc\{VisualMem\}, a hybrid visual\-\-text architecture that augments a text\-memory backend with a structured personal visual memory module\. Rather than collapsing images into captions, \\textsc\{VisualMem\} uses conversational context to resolve identity, ownership, and durable user facts\. Experiments show that \\textsc\{VisualMem\} substantially outperforms prior memory systems on our benchmark while remaining competitive on standard text\-memory benchmarks, indicating that personal visual memory is a distinct and important component of long\-term memory for personalized AI agents\.

## Visual Robustness and Neural Alignment in a Shared Foraging Task: The Mouse vs\. AI Benchmark

**Authors:** Marius Schneider; Joe Canzano; Yuchen Hou; Jing Peng; Anjali Deepu; Utsab Karan; Phu\-Hoa Pham; Chi Nguyen Tran; Dao S Minh; Phu\-Quy Nguyen\-Lam; Trung\-Kiet Huynh; Simone Azeglio; Spencer Smith; Michael Beyeler

**ID:** 139189 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fhaa8MaD9I>) | [PDF](<https://openreview.net/pdf?id=fhaa8MaD9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139189>)

Visual robustness under real\-world conditions remains a critical bottleneck for modern reinforcement learning agents\. In contrast, biological systems such as mice show remarkable resilience to environmental changes, maintaining stable performance even under degraded visual input with minimal exposure\. Inspired by this gap, we established the Mouse vs\. AI: Robust Foraging Competition, a novel bioinspired visual robustness and neural alignment benchmark in which agents and mice perform the same naturalistic 3D foraging task\. The benchmark consists of two tracks: \(1\) a robustness track evaluating generalization to unseen visual perturbations, and \(2\) a neural alignment track measuring how well model representations predict large\-scale neural recordings from mouse visual cortex\. We provide a public benchmark suite comprising a Unity\-based environment for training and evaluating virtual agents, centralized evaluation protocols, and an extensive neural dataset with approximately 178 minutes of multimodal recordings of behavior, visual input, and neural activity from more than 50,000 neurons in mice performing the task\. As part of the NeurIPS competition, we received submissions from 22 teams proposing diverse architectures and training strategies\. By embedding evaluation in a shared sensorimotor task performed by both biological and artificial agents, the benchmark enables a class of evaluative claims not supported by existing robustness or neural alignment benchmarks in isolation: namely, whether robust, brain\-like visual representations emerge spontaneously from behavior\-driven learning, and whether robustness and neural alignment reinforce or trade off against one another\. Access to the dataset as well as the benchmarking infrastructure will remain online at https://robustforaging\.github\.io\.

## Dense Flow from Adaptive Correspondence

**Authors:** Cheng\-Lin Hsieh; Stella X\. Yu

**ID:** 153814 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IWagPCbpdp>) | [PDF](<https://openreview.net/pdf?id=IWagPCbpdp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153814>)

Dense optical flow estimates correspondence from every pixel to the next frame\. It must be precise and robust, which couples two choices: what units to match, and what evidence to match them\. Recent work has improved the evidence with stronger features, cost volumes, attention, refinement, and generative priors\. The unit, however, usually remains fixed: motion is still estimated at dense grid points\.  We propose Adaptive Correspondence Tokens \(ACT\), which adapts correspondence units through a differentiable pixel\-to\-token assignment\. ACT learns soft maps that group pixels into tokens, build descriptors, match and refine motion in token space, and project token motion back to pixels for dense flow\. Trained end to end with the flow loss, grouping and correspondence are discovered jointly: grouping makes matching easier, while matching shapes grouping\. Support can expand over coherent regions and contract near boundaries or fine detail\.  In zero\-shot cross\-dataset evaluation, ACT achieves the best KITTI EPE, second\-best KITTI Fl, and second\-best Sintel Final EPE among published methods, while remaining competitive under benchmark fine\-tuning\. These results show that adaptive units make dense flow easier: matching where the image gives reliable evidence improves transfer while preserving dense, boundary\-aware prediction\.

## Localizing Concepts in Visual Autoregressive Models

**Authors:** Nanxiang Jiang; Yang Liu; Yuanhao Wang; Min Xu

**ID:** 151958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WY3aXqKLtA>) | [PDF](<https://openreview.net/pdf?id=WY3aXqKLtA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151958>)

Understanding the internal routing of visual concepts is crucial for the safe and controllable adaptation of generative models\. While concept localization has been widely studied in diffusion models, the emerging paradigm of next\-scale visual autoregressive models remains largely unexplored\. In this paper, we introduce LoCo, the first model\-agnostic framework to localize where and when specific concepts emerge within autoregressive models\. Driven by the native coarse\-to\-fine nature of next\-scale generation, our method precisely maps conceptual knowledge across three distinct dimensions: Layer, Scale, and Position\. To systematically localize and evaluate concept routing without context bias, we propose LoCoBench, a comprehensive dataset spanning 10 diverse categories\. Extensive probing on image and video autoregressive models like Infinity, HunyuanImage\-3\.0, and InfinityStar shows that the localized positions are both interpretable and causally related to concept emergence\. Building on these insights, we apply our localization method to three key applications: concept erasure, model personalization, and adversarial concept injection\. Experiments demonstrate that our targeted intervention achieves state\-of\-the\-art performance, substantially reducing computational overhead while preserving benign utility\. Overall, our findings offer insights into how conceptual knowledge is routed during autoregressive generation, introducing a practical pathway for more interpretable, efficient, and secure adaptation\.

## MIRROR: Manifold Ideal Reference ReconstructOR for AI\-Generated Image Detection

**Authors:** Ruiqi Liu; Manni Cui; Ziheng Qin; Zhiyuan Yan; Ruoxin Chen; Yi Han; Zhiheng Li; Junkai Chen; ZhiJin Chen; Kaiqing Lin; Jialiang Shen; Lubin Weng; Yan Wang; Shu Wu

**ID:** 149292 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rNJxI4kA0N>) | [PDF](<https://openreview.net/pdf?id=rNJxI4kA0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149292>)

High\-fidelity generative models have narrowed the perceptual gap between synthetic and real images, putting media security under increasing pressure\. Most AI\-generated image \(AIGI\) detectors classify by artifact and fail to generalise to new generators\. We argue that anchoring detection on the stationary real\-image distribution gives a more generalisable signal than chasing the non\-stationary forgery distribution, and cast AIGI detection as a Reference\-Comparison problem that checks consistency against a learned real\-domain feature subspace rather than fitting specific forgery cues\. We propose \*\*MIRROR\*\* \(\*\*M\*\*anifold \*\*I\*\*deal \*\*R\*\*eference \*\*R\*\*econstruct\*\*OR\*\*\), which encodes real\-image priors in a learnable discrete memory bank, projects an input onto these prototypes via sparse linear combination to form a manifold\-consistent ideal reference, and uses the Comparison Residual and Reconstruction Perplexity as detection signals\. To mark the Superhuman Crossover where detectors surpass human experts, we build the Human\-AIGI benchmark with a psychophysically curated human\-imperceptible subset\. Across 14 benchmarks, MIRROR improves over prior methods by 2\.1% on six standard benchmarks and 8\.1% on seven in\-the\-wild benchmarks\. On Human\-AIGI it reaches 89\.6% fake accuracy over 27 generators, sitting between the computer\-vision\-expert and AIGI\-detection\-expert reference levels, and the gap to the AIGI\-detection\-expert level closes further as the pretrained backbone scales\.

## PIVOT: A Unified Agentic Framework for Streaming Long\-Video Understanding

**Authors:** Qiushi Lyu; Qianlan Yang; Ziqi Pang; Yu\-Xiong Wang; Liangyan Gui

**ID:** 152042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VxtrscFTfw>) | [PDF](<https://openreview.net/pdf?id=VxtrscFTfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152042>)

Streaming long\-video understanding is a realistic setting for always\-on video assistants, where visual input arrives continuously and users may ask questions at arbitrary times\. We study streaming long\-video question understanding \(QA\) under a unified temporal formulation in which multiple questions are revealed over time and may concern the past, present, or future relative to their query times\. The model receives no task\-type labels and must operate under strict sequential access and bounded shared memory, deciding whether each active question is already answerable or should remain open for future evidence\. This differs from prior streaming settings that often focus on short streams, prefix\-answerable queries, separated temporal categories, or response timing without long\-horizon shared memory\. To evaluate this formulation, we propose Ref2Stream \(Reference\-to\-Stream\), a general benchmark\-conversion protocol that turns temporally grounded offline video QA benchmarks into streaming QA benchmarks\. Instantiated on LVBench, Ref2Stream yields LVBench\-Ref2Stream, which mixes past, present, and future questions under strict sequential access and evaluates both answer accuracy and answer latency\. Existing streaming video methods typically improve efficiency or response timing through predefined compression, retrieval, or response policies, while offline video agents perform adaptive evidence gathering but assume access to the full video and target question\. We introduce PIVOT \(Planning over Incremental Video Observations for Timely Answering\), a unified agentic framework that incrementally updates bounded memory from the observed stream and uses a planner\-controlled action loop to retrieve relevant memory, analyze current evidence, reflect on candidate answers, and decide whether to answer or defer\. Our work suggests that agentic reasoning is a promising direction for building streaming long\-video systems that can adaptively gather evidence and answer only when sufficient information has been observed\.

## A Steerable Deep Network for Model\-Free Diffusion MRI Registration

**Authors:** Gianfranco Cortés; Xiaoda Qu; Baba C Vemuri

**ID:** 156020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=16OdjrftpZ>) | [PDF](<https://openreview.net/pdf?id=16OdjrftpZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156020>)

Nonrigid registration is vital to medical image analysis but remains challenging for diffusion MRI \(dMRI\) due to its high\-dimensional, spatio\-angular dependence\. We present a novel, geometric deep learning framework for \{\\it model\-free\}, nonrigid registration of raw dMRI data\. The dMRI registration problem is formulated in the native spatio\-angular acquisition space, which exhibits a natural symmetry to the group of 3D roto\-translations, denoted by $\\mathrm\{SE\}\(3\)$\. A by\-product of this design choice is freedom from having to augment the data with roto\-translated versions of itself\. Our second novelty is the loss function formulation, based on the maximum mean discrepancy \(MMD\) loss used to compare two probability density functions\. We apply this loss in the Fourier space, where it becomes the well\-known weighted sum\-of\-squared differences \(SSD\) loss with the weights being the Fourier transform of a reproducing kernel Hilbert space \(RKHS\) kernel\. Experimental results on HCP and OASIS\-3 clinical\-grade dMRI data demonstrate competitive performance compared to SOTA approaches, with the added advantage of bypassing the overhead for estimating derived representations\. This work establishes a foundation for data\-driven, geometry\-aware dMRI registration directly in the acquisition space\.

## CoScan: Multi\-Scale Content\-Adaptive Space\-Filling Scans for Causal State\-Space Image Restoration

**Authors:** Wei Dong; Terry Ji; Yan Min; Shahram Shirani; Jun Chen; Han Zhou

**ID:** 151869 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHd7CqQtoF>) | [PDF](<https://openreview.net/pdf?id=XHd7CqQtoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151869>)

Selective state\-space models \(SSMs\) have recently shown strong potential for efficient image restoration\. A central difficulty, however, is that a 2D feature map typically needs to be linearized into a 1D token sequence for causal state\-space updates, making restoration performance highly sensitive to the imposed scan order\. Existing deterministic scans follow space\-filling principles but remain fixed and content\-agnostic, and can yield fragmented or semantically inconsistent contexts under degradations\.  We propose \*\*CoScan\*\*, a \*\*co\*\*ntent\-adaptive \*\*scan\*\*\-order design for causal vision SSMs\. CoScan learns image\-dependent space\-filling traversals via differentiable proxy supervision driven by \*\*scan\-quality objectives\*\* that encourage \*short\-range coherence and causal predictability, while preserving spatial adjacency\*\. To support hierarchical restoration backbones, we introduce an \*\*efficient multi\-scale scan construction\*\* by \*coarsening a fine\-level minimum spanning tree\*, producing coherent scans across feature resolutions\. In addition, \*\*a  frequency\-guided start selection strategy\*\* is designed to \*place informative structures early in the sequence prefix to strengthen causal context formation\*\. Plugged into existing Mamba\-based backbones, CoScan yields consistent improvements across several restoration benchmarks with minimal overhead and shows promising results on high\-level vision tasks\. Code will be released upon acceptance\.

## Multidimensional Observer Model and Perceptual Dimensions of Human Image Quality Assessment

**Authors:** Sheng Zhao; Weikai Lin; Yuhao Zhu

**ID:** 153752 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IyJWTZzLb3>) | [PDF](<https://openreview.net/pdf?id=IyJWTZzLb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153752>)

Judging image quality is not only ecologically relevant to everyday humans tasks, but also underpins many machine vision tasks such as image generation\. This paper proposes a framework to understand the inherent perceptual space underlying image quality judgment in humans\. We propose a multi\-dimensional observer model that represents images as distributions in a latent perceptual space and that models human judgment as comparing noisy samples\. Being constrained by neural representations in the primate ventral stream and fit to large\-scale behavioral data, the model enables analysis of perceptual structure while matching the predictive power of existing metrics\. Using this model, we find that the perceptual spaces needed to account for image quality judgment in humans are extremely low\-dimensional compared to the image space even when considering its sparsity\. The exact structure of the space \(e\.g\., dimensionalities, information encoded\) varies between low\-level and high\-level quality judgments, suggesting that, despite a shared retinal encoding in the beginning, humans selectively construct task\-dependent perceptual spaces in visual decision making\.

## Active Learning for Conditional Generative Compressed Sensing

**Authors:** Alexander DeLise; Nick Dexter

**ID:** 149778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nNxxFgwPWW>) | [PDF](<https://openreview.net/pdf?id=nNxxFgwPWW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149778>)

Generative compressed sensing uses the range of a pretrained generator as a nonlinear model for recovering structured signals from limited measurements\. We study a conditional version of this problem for image recovery from subsampled Fourier measurements using prompt\-conditioned generative models\. Our framework separates two roles of conditioning: the prompt used to design the sampling distribution and the prompt used to define the recovery model\. For ReLU and Lipschitz conditional generators, we prove stable recovery bounds showing that prompt\-matched Christoffel sampling retains the same Christoffel complexity constant as existing near\-optimal generative compressed sensing theory, while prompt mismatch incurs an explicit compatibility penalty\. Experiments with Stable Diffusion show that prompts meaningfully reshape Christoffel sampling distributions and influence image recovery\. Overall, our results suggest that prompts should be treated as design variables with distinct effects on sensing, approximation, and recovery\.

## Diffusion\-DRF: Free, Rich, and Differentiable Reward for Video Diffusion Fine\-Tuning

**Authors:** Yifan Wang; Yanyu Li; Guocheng Qian; Sergey Tulyakov; Yun Fu; Anil Kag

**ID:** 150318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=izqmMvuObQ>) | [PDF](<https://openreview.net/pdf?id=izqmMvuObQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150318>)

Video diffusion alignment has been heavily reliant on scalar rewards\. These rewards are typically derived from learned reward models in human preference datasets, requiring additional training and extensive collection\. Moreover, scalar rewards provide coarse, global supervision, offering limited prompt\-generation mismatch credit assignment and making models prone to reward exploitation and unstable optimization\. We propose \\textbf\{Diffusion\-DRF\}, a free, rich, and differentiable reward framework for video diffusion fine\-tuning\. Diffusion\-DRF employs a frozen, off\-the\-shelf Vision\-Language Model \(VLM\) as the critic, eliminating the need for reward model training\. Instead of relying on a single scalar reward, it decomposes each user prompt into multi\-dimensional questions with freeform dense VQA explanation queries, yielding information\-rich feedback\. By direct differentiable optimization over this rich feedback, Diffusion\-DRF achieves stable reward\-based tuning without preference datasets collection\.  Diffusion\-DRF achieves significant gains both quantitatively and qualitatively, outperforming state\-of\-the\-art Flow\-GRPO by 4\.74 points in overall performance on unseen VBench\-2\.0\.

## Trimming the Long\-Tail of Visual World Modeling Evaluation

**Authors:** Bingxuan Li; Yining Hong; Cheng Qian; Hyeonjeong Ha; Jiateng Liu; Zhenhailong Wang; Yue Guo; Yunzhu Li; Heng Ji

**ID:** 139435 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QXhOfEEBll>) | [PDF](<https://openreview.net/pdf?id=QXhOfEEBll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139435>)

Physical interactions follow a long\-tailed distribution: a set of common and regular interactions dominates human experience and visual data, while a broad spectrum of rare and irregular interactions remains underrepresented\. Although recent world models achieve impressive realism on existing benchmarks, they primarily focus on simulating common physical interactions\. This raises a central question: Do world models internalize and generalize the physical principles? In this work, we introduce Tailor\-Bench, a benchmark to systemically evaluate this question through the lens of visual world modeling on tool\-using interactions\. Our benchmarks features three scenario modes \(regular, unconventional and impossible\), and two settings \(predictive and descriptive\) under a unified evaluation protocol\. Our experimental results reveal a clear long\-tail gap in visual world modeling: Performance consistently degrades from Regular to Unconventional and Impossible scenarios, indicating limited generalization beyond common interactions\. Failure analysis further shows that models rely on superficial visual patterns, where image models fail to realize correct state changes, and video models additionally suffer from temporal inconsistencies\. These limitations persist even with explicit outcome descriptions: Models often revert to familiar patterns in descriptive settings and fail to infer correct outcomes in predictive settings\. By exposing systematic failures under long\-tail scenarios, Tailor\-Bench highlights the need for world models that understand object attributes, causal dynamics, and constraint\-aware interactions\. We further introduce Tailor\-Evaluator\-8b, a specialized auto\-evaluator trained with structured reasoning supervision, which achieves 0\.88 human correlation for scalable evaluation of long\-tail visual world modeling\.

## Mixture of Layers: Dynamic Layer Routing for Visual Reasoning

**Authors:** Jeonghwan Kim; Sofia Stoica; Jiwan Chung; Ansel Blume; Hyeonjeong Ha; Zhenhailong Wang; Xin Dong; Heng Ji

**ID:** 153187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBGxbQl0VI>) | [PDF](<https://openreview.net/pdf?id=NBGxbQl0VI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153187>)

Pre\-trained vision encoders contain layer\-wise visual representations that differ in spatial granularity, semantic abstraction, and sensitivity to local details\. However, most Multimodal Large Language Models \(MLLMs\) rely only on the final or penultimate vision encoder representations or fixed aggregation rules, making visual abstraction largely query\-agnostic and limiting access to fine\-grained cues such as small objects, spatial details, text, and subtle visual attributes\. In this work, we propose \*\*Mixture of Layers \(MoL\)\*\*, an instruction\-conditioned layer routing approach that dynamically aggregates query\-relevant latent representations from intermediate vision encoder layers\. Given a text query, \*\*MoL\*\* predicts routing probabilities over vision encoder layers and aggregates selected hidden states at either the image level, patch level, or through a hybrid routing mechanism\. Our proposed \*\*MoL\*\* is a vision encoder\-agnostic framework for layer\-wise routing that selectively samples visual features useful for fine\-grained visual reasoning tasks\. Experiments across seven fine\-grained visual reasoning benchmarks demonstrate substantial performance improvements, including \+18\.9% on V\* overall accuracy, \+4\.5% on HRBench4K, and \+16\.3% on CharXiv compared to baseline MLLMs, \*without\* requiring multi\-resolution inputs, simple interleaving of multiple vision encoders, or additional patch tokens\. We further analyze receptive field scales and routing behaviors across vision encoder layers to explain why adaptive layer selection improves perception and reasoning\. Our results suggest that conditional intermediate\-layer representations are a key step toward stronger visual perception and reasoning in MLLMs\. Code will be open\-sourced\.

## On Computing Diverse Solutions in the Earth Movers Distance

**Authors:** Aritra Banik; Mayank Goswami; Abhishek Sahu

**ID:** 154421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Di32FbHcJU>) | [PDF](<https://openreview.net/pdf?id=Di32FbHcJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154421>)

Classically used for image retrieval tasks in computer vision, the Earth Movers Distance \(EMD\), also called the Wasserstein distance, has found numerous applications in natural language processing \(NLP\) and machine learning \(ML\)\. In NLP it is used as a measure of distance between sets of embeddings, and in ML it has been used to understand training dynamics, distributionally robust optimization, and many other tasks under active research\.  On the other hand, computing diverse solutions to optimization problems has also gained a lot of attention recently\. In this DiverseX paradigm, one wants to develop algorithms that return a set of $r$ solutions that are maximally diverse; a common measure of diversity is the average or the minimum distance between the $r\\choose\{2\}$ pairs of solutions\. This paradigm is useful in generating more choices for the user, in fairness, and in robustness and security applications\.  In this work, we address the complexity of finding a diverse set of solutions in the EMD metric\. Given an $n$ point metric space $\(X,d\)$ and integers $k \\geq 1$ and $r \\geq 2$, we consider the problem of computing $r$ many subsets of $X$, each of cardinality $k$, such that the minimum EMD between these sets is maximized\. Motivated by applications from NLP, we also consider the problem of computing the farthest $k$\-subset \(from a given $k$\-subset\) in the EMD metric\.   On the lower bound side, we first show that assuming the Maximum\-Span Hypothesis, it is W\[1\]\-hard \(with parameters $k$ and $r$\) to obtain $k/\(\\log k\)^\{O\(1\)\}$\-approximation for non\-metric cost functions, and W\[1\]\-hard to obtain a $2\-o\(1\)$ approximation for metric spaces\. We also show that the problem restricted to the Euclidean setting with $\\ell\_2$ norm is W\[1\]\-hard\.  Our first main algorithmic result is an $f\(k, d, \\varepsilon\)n^\{\(O\(1\)\}$ time $\(1\-\\varepsilon\)$ approximation algorithm for the $d$\-dimensional  Euclidean setting, which is tight in view of the above hardness results\. Using different techniques, we also present a similar result for the farthest point problem in arbitrary metric spaces\. Our second main algorithmic result is geared towards the search for polynomial time algorithms, where we present an $O\(d\)$ approximation for the Euclidean setting in $\\text\{poly\}\(n,k,d\)$ time when $r=2$\. Finally, we present $FPT\(k\)$ time, 2\-approximate algorithms for arbitrary metric spaces when $r=2$\. Since the class of problems we study requires to \*find\* diverse solutions in the EMD metric, our results use a combination of various geometric techniques that deviate from the techniques used to compute the EMD metric between a \*given pair\* of solutions, and may be of independent interest\.

## DSAD: Dynamic Soft Anisotropic Diagrams for Reduced\-Order Video Representation

**Authors:** Zhiyang \(Frank\) Dou; Laki Iinbor; Wojciech Matusik

**ID:** 152936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHAxpimjPy>) | [PDF](<https://openreview.net/pdf?id=PHAxpimjPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152936>)

Efficient video representations should do more than predict pixels: for a long video to be trainable, decodable, and budgeted, appearance and motion must be assigned to explicit units\. Group\-of\-Pictures \(GoP\) primitive representations provide such units by fitting short blocks with canonical local elements, but their deformation is often still predicted by a neural head\. Conversely, implicit neural representations achieve compact global fits without exposing local units that can be moved, ranked, or pruned\. We observe that a short GoP contains many primitives but only a few independent motion patterns, suggesting that the same local ownership system used for appearance should also define the motion basis\. We introduce Dynamic Soft Anisotropic Diagrams \(DSAD\), an explicit representation built from three layers over a shared soft\-distance geometry\. First, a Soft Anisotropic Diagram \(SAD\), defined as a top\-$K$\-masked softmax over anisotropic\-Apollonius sites, provides a canonical coordinate family in which dense sites encode local RGB ownership\. Second, a coarser anchor set reuses the SAD geometry so that anchor weights form a partition\-of\-unity motion basis without an additional neural module\. Third, a reduced\-order model \(ROM\) factorizes deformation into this spatial motion basis and knot\-based temporal coefficients\. This construction unifies appearance and motion within a single diagram while decoupling spatial ownership from temporal dynamics\. On Bunny, UVG, and DAVIS, DSAD attains the highest PSNR among primitive representations and competitive performance among all compared methods, while using a leaner per\-GoP deformation module and fewer fine\-stage training iterations than state\-of\-the\-art baselines\. Ablations show that the gain is a matched\-budget trade\-off: a compact anchor\-ROM motion head reallocates parameters to anchored appearance\. RAFT spectra further suggest that the largest gains occur when GoP motion is close to low\-rank\. Code and models will be released\.

## Conditional Multi\-Event Temporal Grounding in Long\-Form Video

**Authors:** Yuanhao Zou; Arthad Kulkarni; Lucas Toñanez; Lincoln Spencer; Guangyu Sun; Tianxingjian Ding; Andong Deng; Yi Li; Shuangjun Liu; Yuan Li; Dashan Gao; Ning Bi; TAOTAO JING; Shuai Zhang; Chen Chen

**ID:** 139151 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i6iM7B1Koa>) | [PDF](<https://openreview.net/pdf?id=i6iM7B1Koa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139151>)

Multimodal large language models have made rapid progress in video temporal grounding, yet real\-world applications routinely require localizing every event that satisfies compositional temporal and spatial conditions\. Existing benchmarks fall short: they localize only a single moment per query, count without temporal conditions, or treat grounding and counting as disjoint tasks\. We introduce CoMET\-Bench for Conditional Multi\-Event Temporal Grounding in long\-form video, comprising 2,789 queries over 600 videos averaging 33\.8 minutes across five real\-world domains, with each query composed from 4 temporal conditions, 3 spatial conditions, and a dedicated negative\-query subset\. We further propose a unified evaluation protocol jointly measuring counting, grounding, and negative\-query recognition, including a new Rejection\-F1 metric that prevents trivial gaming by lazy "always\-empty'' models\. Benchmarking a broad suite of MLLMs, agent\-based, and grounding\-specialized methods reveals that existing approaches remain far from solving this task\. Building on these findings, we propose CoMET\-Agent, a training\-free agentic framework that reformulates the task as structured search\-and\-aggregate, improving F1@0\.5 by 6\.1% over GPT\-5 purely through structural reasoning\. Failure analysis further surfaces three open directions: fine\-grained entity tracking, position\-uniform retrieval, and causal event pairing\.

## TimeWarp: Evaluating Web Agents by Revisiting the Past

**Authors:** Farhan Ishmam; Kenneth Marino

**ID:** 139159 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hfun6NLTvi>) | [PDF](<https://openreview.net/pdf?id=hfun6NLTvi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139159>)

As web agents close the gap with humans on benchmarks, it raises the question: \*Do today's agents perform just as well on tomorrow's web?\* We introduce TimeWarp, a benchmark that emulates the evolving web\.  TimeWarp consists of three web environments, each with six UI versions spanning UI design and frontend code from different eras of the internet\. We pair TimeWarp with a set of complex, realistic tasks covering different forms of web navigation\.  Our experiments reveal vulnerabilities of web agents, especially visual ones, to changes and the limitations of behavior cloning \(BC\) on complex trajectories from a single version\.  To address this, we propose TimeTraj, a simple yet effective algorithm that uses plan distillation to collect trajectories across multiple versions\. By training agents on teacher rollouts using our BC\-variant, we achieve substantial performance gains: $20\.4$ %$\\rightarrow37\.7$% for Qwen\-3 4B and $0$ % $\\rightarrow27\.0$% for Llama\-3\.1 8B models\. Our work helps study generalization across web designs and enables a new paradigm for collecting plans rather than trajectories to improve the robustness of web agents\.

## InstructVVT: Instruction\-Driven Video Virtual Try\-On without Auxiliary Spatial Priors

**Authors:** Dingbao Shao; Song Wu; Xinyu Chen; Qian Wang; Jiahang Li; Kuai Jiang; Jiang Lin; Yuhang Liu; Chen Ziyu; Duo Li; Hu Jiaxin; Shengrong Gu; Ziheng Tang; Liu Rongrong; Yanlun Peng; Liang Li; Junlan Feng; Lujia Jin; Ting Zhang; Jian Yang; Zili Yi

**ID:** 149716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nxlHQt3QrN>) | [PDF](<https://openreview.net/pdf?id=nxlHQt3QrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149716>)

Video virtual try\-on is a highly constrained editing task requiring the precise replacement of a target person's clothing while strictly preserving the original video's spatial structure and temporal dynamics\. Existing methods heavily rely on auxiliary handcrafted spatial priors \(e\.g\., masks, poses\) for editing control\. However, these priors are prone to failure in unconstrained real\-world videos and often compress rich visual context into incomplete structural signals\. Furthermore, standard reconstruction objectives fail to fully capture try\-on\-specific human preferences\. To address these challenges, we propose InstructVVT, an instruction\-driven and reference\-guided video virtual try\-on framework based on a Diffusion Transformer \(DiT\) that operates without inference\-time spatial priors\. Our core insight is to recover fine\-grained control directly from the input triplet \(source video, reference garment, and instruction\) via a dual\-level reference conditioning scheme\. Specifically, an MLLM infers semantic edit tokens for target disambiguation and structural preservation, while a lightweight conditioning pathway explicitly injects fine\-grained visual garment details\. Finally, we design a try\-on\-specific reward and utilize the DiffusionNFT algorithm to align the model with human preferences\.  Extensive experiments on ViViD\-S and TripVVT\-Bench demonstrate that InstructVVT outperforms state\-of\-the\-art open\-source methods in garment fidelity, structural preservation, and temporal consistency, despite requiring fewer inference\-time controls\.

## Evaluating Depth and Breadth in Test\-Time Scaling for Compositional Visual Generation

**Authors:** Shantanu Jaiswal; Mihir Prabhudesai; Nikash Bhardwaj; Zheyang Qin; Amir Zadeh; Chuan Li; Katerina Fragkiadaki; Deepak Pathak

**ID:** 139290 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZA59XMPrcN>) | [PDF](<https://openreview.net/pdf?id=ZA59XMPrcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139290>)

Test\-time scaling is increasingly used to improve visual generation, yet it remains unclear how different scaling strategies should be evaluated when they trade off accuracy, latency, throughput, compute cost, and visual quality in different ways\. We study this question through a systematic comparison of prominent test\-time strategies including sampler\-depth scaling, breadth\-oriented parallel sampling, step\-by\-step construction, iterative refinement, and hybrid breadth\-\-depth for compositional text\-to\-image generation\. Our results show that the preferred strategy depends on prompt complexity and cost assumptions: parallel sampling remains competitive for simpler prompts and high\-throughput settings, while iterative refinement becomes increasingly useful as prompts require more object, spatial, numeric, and relational bindings\. Surprisingly, step\-by\-step generation does not consistently inherit the benefits of step\-by\-step reasoning in language models, since early visual decisions about field of view, layout, scale, and resolution can constrain later edits\. Across fixed budgets, hybrid policies often provide the strongest accuracy\-\-cost tradeoff by combining parallel exploration with sequential correction\. Finally, we show that refinement\-based scaling is bottlenecked by verifier and editor reliability, and that adaptive routing can recover much of the benefit of fixed hybrid policies at lower average cost\. Overall, our findings show that effective test\-time scaling depends on matching the policy to the prompt and deployment bottleneck: breadth supports exploration and throughput, depth supports semantic repair, and hybrid/adaptive policies offer the strongest tradeoff when compositional correctness is the priority\.

## The Prestige: Benchmarking Cognitive Visual Reasoning using Magic Tricks

**Authors:** Shuo Wen; Beixi Du; Edwin Meriaux; Junming Shi; Chloe Si; David Meger; Doina Precup; Gregory Dudek

**ID:** 139469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NukyOvsfZy>) | [PDF](<https://openreview.net/pdf?id=NukyOvsfZy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139469>)

With the rapid development of Vision\-Language Models \(VLMs\), it is increasingly critical to evaluate their ability in accurate and robust reasoning based solely on visual information\. However, existing video understanding benchmarks often overlook the deep cognitive processes inherent in visual reasoning and frequently rely on multiple\-choice formats, implicitly encouraging reasoning shortcuts\. To address these limitations, we introduce \\emph\{The Prestige\}, a novel video understanding benchmark designed to isolate VLM reasoning under deliberate cognitive misdirection through professional magic performances\. The dataset consists of a curated collection of high\-quality magic videos paired with a diverse distribution of strictly open\-ended questions targeting causal state tracking, paradoxical reasoning, and resistance to adversarial questions\. These questions need the models to perform long\-horizon, multi\-step commonsense reasoning with cognition\. Through extensive evaluations of leading open\-weight and proprietary VLMs, using a combination of machine and human grading, we find a substantial gap between model and human performance\. \\emph\{The Prestige\} establishes a rigorous new frontier for evaluating temporal, causal, and cognitive\-flow reasoning in multimodal foundation models\.

## Learning Where and What to Restore for Composite Image Restoration

**Authors:** Jiachen Jiang; Tianyu Ding; Ke Zhang; Jinxin Zhou; Tianyi Chen; Ilya Zharkov; Zhihui Zhu; Luming Liang

**ID:** 148217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zUZcE6BopT>) | [PDF](<https://openreview.net/pdf?id=zUZcE6BopT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148217>)

Real\-world degraded images often contain multiple co\-occurring degradation types, making composite image restoration fundamentally different from the single\-degradation setting assumed by most existing all\-in\-one methods\. These methods typically apply uniform spatial computation and single\-label task conditioning, limiting both spatial adaptivity and explicit modeling of degradation mixtures\. We propose \*\*CART\*\* \(\*\*C\*\*omposite\-\*\*A\*\*daptive \*\*R\*\*outing and \*\*T\*\*ask Conditioning\), a unified framework that jointly decides \*where\* to spend computation and \*what\* degradation cues should guide restoration: a spatial mixer routes patches to graded\-capacity experts by local restoration difficulty, and a channel mixer routes each image through degradation\-specific experts, conditioned on a global task feature with multi\-hot classification supervision\. Empirically, CART achieves state\-of\-the\-art performance for composite degradation restoration on CDD\-11 and delivers the best results to date on the conventional 3\-task and 5\-task all\-in\-one benchmarks\.

## OmniShotCut: Holistic Relational Shot Boundary Detection with Shot\-Query Transformer

**Authors:** Boyang Wang; Guangyi Xu; Jiahui Zhang; Zhipeng Tang; Zezhou Cheng

**ID:** 150480 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkeJwI1pqj>) | [PDF](<https://openreview.net/pdf?id=hkeJwI1pqj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150480>)

Shot Boundary Detection \(SBD\) aims to automatically identify shot changes and divide a video into coherent shots\. While SBD was widely studied in the literature, existing methods often produce non\-interpretable boundaries on transitions, miss subtle yet harmful discontinuities, and rely on noisy, low\-diversity annotations and outdated benchmarks\. To alleviate these limitations, we propose OmniShotCut to formulate SBD as structured relational prediction, jointly estimating shot ranges with intra\-shot relations and inter\-shot relations, by a shot query\-based dense video Transformer\. To avoid imprecise manual labeling, we adopt a fully synthetic transition synthesis pipeline that automatically reproduces major transition families with precise boundaries and parameterized variants\. We also introduce OmniShotCutBench, a modern wide\-domain benchmark enabling holistic and diagnostic evaluation\. Experiments on the benchmarks demonstrate the effectiveness and generality of our method\.

## Towards Visual Query Segmentation in the Wild

**Authors:** Bing Fan; Minghao Li; Hanzhi Zhang; Shaohua Dong; NAGA PRUDHVI MAREEDU; Xiaoqiong Liu; Weishi Shi; Yunhe Feng; Yan Huang; Heng Fan

**ID:** 139583 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gx9LtAgUon>) | [PDF](<https://openreview.net/pdf?id=Gx9LtAgUon>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139583>)

In this paper, we introduce visual query segmentation \(VQS\), a new paradigm of visual query localization \(VQL\) that aims to segment all pixel\-level occurrences of an object of interest in an untrimmed video, given an external visual query\. Compared to existing VQL locating only the last appearance of a target using bounding boxes, VQS enables more comprehensive \(ie, all object occurrences\) and precise \(ie, pixel\-level masks\) localization, making it more practical for real\-world scenarios\. To foster research on this task, we present VQS\-4K, a large\-scale benchmark dedicated to VQS\. Specifically, VQS\-4K contains 4,111 videos with more than 1\.3 million frames, and covers a diverse set of 211 object categories\. Each video is paired with a visual query defined by a frame outside search video and its target mask, and annotated with spatial\-temporal masklets corresponding to the queried target\. To ensure high quality, all videos in VQS\-4K are manually labeled with meticulous inspection and iterative refinement\. To the best of our knowledge, VQS\-4K is the first benchmark specifically designed for VQS\. Furthermore, to stimulate future research, we present a simple yet effective method, named VQ\-SAM, which extends SAM 2 by leveraging target\-specific and background distractor cues from the video to progressively evolve the memory through a novel multi\-stage framework with an adaptive memory generation \(AMG\) module for VQS, significantly improving the performance\. In our extensive experiments on VQS\-4K, VQ\-SAM achieves promising results and surpasses all existing approaches, demonstrating its effectiveness\. With the proposed VQS\-4K and VQ\-SAM, we expect to go beyond current VQL paradigm and inspire more future research and practical applications on VQS\. Our benchmark, code, and results will be made publicly available\.

## Representation Fréchet Loss for Visual Generation

**Authors:** Jiawei Yang; Zhengyang Geng; Xuan Ju; Yonglong Tian; Yue Wang

**ID:** 154990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9OK87o8Wkf>) | [PDF](<https://openreview.net/pdf?id=9OK87o8Wkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154990>)

We show that Fréchet Distance \(FD\), long considered impractical as a training objective, can in fact be effectively optimized in the representation space\. Our idea is simple: decouple the population size for FD estimation \(e\.g\., 50k\) from the batch size for gradient computation \(e\.g\., 1024\)\. We term this approach FD\-Loss\. Optimizing FD\-Loss reveals several surprising findings\. First, post\-training a base generator with FD\-Loss in different representation spaces consistently improves visual quality\. Under the Inception feature space, a one\-step generator achieves 0\.72 FID on ImageNet $256\\times256$\. Second, the same FD\-Loss repurposes multi\-step generators into strong one\-step generators without teacher distillation, adversarial training or per\-sample targets\. Third, FID can misrank visual quality: modern representations can yield better samples despite worse Inception FID\. This motivates FDr$^\{k\}$, a multi\-representation metric\. We hope this work will encourage further exploration of distributional distances in diverse representation spaces as both training objectives and evaluation metrics for generative models\. Code and checkpoints will be open\-sourced\.

## LogT: Logically Think with Images for Visual Search

**Authors:** Yanjun Fu; Quanzeng You; Jiadong Guo; Yujie Lu; Sai Charitha Akula; Haiping Wu; Miao Liu; Sanghamitra Dutta; Lu Yuan

**ID:** 155728 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3NXQoAs55l>) | [PDF](<https://openreview.net/pdf?id=3NXQoAs55l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155728>)

Thinking with images empowers vision\-language models \(VLMs\) to use an external zoom\-in tool for fine\-grained visual search\. Recent works employ supervised fine\-tuning \(SFT\) and reinforcement learning \(RL\) with tool\-specific designs to enable such capabilities\. However, achieving logical reasoning alongside accurate and efficient tool use remains a significant challenge\. To address this, we shift the focus away from increasing RL complexity and instead identify SFT data quality as a key bottleneck\. We then propose LogT \(short for \*\*Log\*\*ically \*\*T\*\*hink with Images\), a fully automated SFT data engine that explicitly enforces logic\-chain\-guided reasoning\. LogT generates an SFT dataset featuring challenging, visually grounded questions and structured tool\-use traces with human\-like logic\. We validate our approach by fine\-tuning two base models, Qwen2\.5\-VL\-7B and InternVL3\.5\-8B, on the dataset and evaluating them across seven benchmark test sets\. We show that LogT\-SFT based on Qwen2\.5\-VL\-7B outperforms the state\-of\-the\-art trained with both SFT and RL, despite using 3\.1$\\times$ less data and $&gt;$120$\\times$ fewer GPU hours\. Furthermore, applying a simple RL recipe without tool\-specific design on LogT\-SFT yields a model that surpasses prior methods with complex RL setups by a substantial 9\.59\-point margin\. In addition to strong performance gains, our model exhibits higher tool\-use accuracy and efficiency, as well as more structured and logically consistent reasoning traces, directly validating the effectiveness of our approach\.

## Beyond Interpretability: When, Why, and How Sparse Autoencoders Enable Label\-Free Visual Steering

**Authors:** Gerasimos Chatzoudis; Zhuowei Li; Gemma Moran; Hao Wang; Dimitris Metaxas

**ID:** 148658 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w6uFnfYXcZ>) | [PDF](<https://openreview.net/pdf?id=w6uFnfYXcZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148658>)

Sparse Autoencoders \(SAEs\) are increasingly used to interpret foundation models, but their role as an actionable intervention space remains less understood, especially in vision\. We study whether sparse visual features can be used not only for post\-hoc analysis, but also to steer frozen vision\-language models\. We introduce \\textbf\{Visual Sparse Steering \(\\ours\)\}, a label\-free method that trains a top\-$k$ SAE on unlabeled activations from a frozen CLIP image encoder and, at test time, constructs an interpretable steering vector by amplifying the input's active sparse features and decoding the induced change\. We show that this procedure admits a closed\-form decomposition as \\emph\{centroid\-deviation steering\}: each input is moved along its deviation from the SAE\-learned centroid\. The residual term is controlled exactly by the SAE's per\-sample reconstruction error, measured by FVU, yielding an FVU\-based residual bound and motivating a reliability gate that falls back to zero\-shot CLIP when SAE reconstruction is unreliable\. With target\-domain SAEs trained on unlabeled CLIP image\-encoder activations, \\ours improves zero\-shot accuracy across nine image\-classification datasets, achieving gains up to $\+4\.12\\%$ with less than $0\.1\\%$ additional inference compute\. Finally, a controlled upper\-bound study, \\oursplus, shows that selective amplification of sparse features can yield gains up to $\+21\.44\\%$, exposing a \\emph\{reconstruction\-vs\-task saliency gap\}: features salient for reconstruction need not align with features useful for downstream prediction\.

## TextRegion: Text\-Aligned Region Tokens from Frozen Image\-Text Models

**Authors:** Yao Xiao; Qiqian Fu; Heyi Tao; Yuqun Wu; Zhen Zhu; Derek Hoiem

**ID:** 156751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156751>)

Image\-text models excel at image\-level tasks but struggle with detailed visual understanding\. While these models provide strong visual\-language alignment, segmentation models like SAM2 offer precise spatial boundaries for objects\. To this end, we propose TextRegion, a simple, effective, and training\-free framework that combines the strengths of image\-text models and SAM2 to generate powerful text\-aligned region tokens\. These tokens enable detailed visual understanding while preserving open\-vocabulary capabilities\. They can be directly applied to various downstream tasks, including open\-world semantic segmentation, referring expression comprehension, and grounding\. We conduct extensive evaluations and consistently achieve superior or competitive performance compared to state\-of\-the\-art training\-free methods\. Additionally, our framework is compatible with many image\-text models, making it highly practical and easily extensible as stronger models emerge\. Code is available at: https://github\.com/avaxiao/TextRegion\.

## A Principled Self\-Referenced Early Stopping Approach for Deep Image Prior

**Authors:** Chaoyan Huang; Cheng\-Han Huang; Ismail Alkhouri; Rongrong Wang

**ID:** 151448 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aagILQC10A>) | [PDF](<https://openreview.net/pdf?id=aagILQC10A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151448>)

Recently, Deep Image Prior \(DIP\) has demonstrated strong capabilities for solving inverse imaging problems \(IIPs\) by optimizing a randomly initialized convolutional neural network in a training\-data\-free regime\. However, DIP suffers from overfitting to noisy measurements due to network over\-parameterization, making early stopping \(ES\) essential\. The most successful ES method tracks fluctuations in the running variance of the network output to detect overfitting\. However, in many applications, these fluctuations may appear prematurely, leading to unstable reconstructions\. In this paper, we first show that nearly optimal DIP early stopping can be achieved when two independent noisy copies of the degraded image are available\. Motivated by this observation, and since obtaining two fully independent copies is infeasible, we propose an overfitting detection framework based on constructing pseudo self\-referenced images, resulting in three IIP\-specific algorithms\. Our approach is further supported by theoretical results on single\-reference validation, pseudo\-validation estimation, and the impact of shared noise\. Across different IIPs, ranging from natural image restoration to medical image reconstruction, and under varying noise levels and noise types, our methods consistently outperform existing DIP early stopping approaches, all without requiring knowledge of the measurement noise characteristics\.

## AdaAlloc: Adaptive Visual Token Allocation for Long\-Video Question Answering

**Authors:** Joungbin An; Kristen Grauman

**ID:** 155735 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3L6GFiwoG6>) | [PDF](<https://openreview.net/pdf?id=3L6GFiwoG6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155735>)

Long\-video question answering forces multimodal large language models to reason under strict visual\-token budgets, creating a tradeoff between broad temporal coverage and fine\-grained spatial detail\. Uniform sampling preserves coverage but often obscures decisive local cues, while caption\-based or frame\-similarity retrieval operates over lossy proxies that can miss motion, state changes, and before\-after relations\. We recast long\-video reasoning as a visual token allocation problem: given a fixed budget, decide how much to spend on global context versus high\-resolution local evidence, and where to draw that local evidence from\. We introduce AdaAlloc, a training\-free inference framework that adaptively allocates visual tokens between a global video overview and localized visual detail\. AdaAlloc first plans a global/local allocation policy, then uses temporal grounding to locate candidate evidence segments and refines them into a compact temporal memory\. The final answerer reasons over the allocated global context and refined local evidence\. Under matched backbones and visual\-token budgets, AdaAlloc consistently improves over strong baselines on challenging long\-video benchmarks, including LVBench, MLVU, VideoMME, and LongVideoBench\.

## Bounding Global and Local Compression Error of Signal Parameterizations

**Authors:** Quang Luong Nhat Nguyen; Sara Fridovich\-Keil

**ID:** 148822 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ut4H4goukL>) | [PDF](<https://openreview.net/pdf?id=ut4H4goukL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148822>)

Differentiable signal parameterizations such as implicit neural representations \(INRs\) and hybrid models are increasingly central to computational imaging, yet principled tools for evaluating reconstruction fidelity at finite model size remain limited when ground truth is unavailable\. We introduce a framework for predicting the reconstruction error of compressive signal parameterizations, yielding non\-asymptotic, signal\-specific bounds that are both theoretically sound and efficiently computable without access to the ground truth signal\. Specifically, we prove that when parameterization\-based compression satisfies certain natural properties, the compression error at any compression level is bounded by a simple scaled difference between model predictions at different compression levels\. We verify these properties for representative model families including interpolated grids, Fourier feature networks, multi\-resolution hash tables, and tensor factorizations, and show empirically that the resulting worst\-case guarantees can be efficiently adapted into signal\-specific error predictors that are tight and generalizable\. Across direct fitting of synthetic and natural signals, and inverse problems including radiance field and MRI reconstruction, our method closely tracks global error curves and yields informative local error heatmaps without ground\-truth access\.

## Rethinking Long\-Video Efficiency: A Joint Allocation Perspective on Frames, Pixels, and Front\-End Latency

**Authors:** Sixun Dong; Wei Li; Andong Deng; Qi Qian; Victor Zhu; Zhengping Ji; Chen Chen

**ID:** 151504 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a9xLyT4hG4>) | [PDF](<https://openreview.net/pdf?id=a9xLyT4hG4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151504>)

Efficient long\-video understanding with vision\-language models \(VLMs\) has largely been treated as informative token selection at fixed native resolution: which frames or which visual tokens to retain under a token budget\. We argue this framing leaves two axes unused \-\-\- per\-frame resolution itself can be traded for denser temporal coverage, and front\-end decoding latency scales with the candidate pool, not the token budget\. Through an empirical study across multiple VLMs and long\-video benchmarks, we distill three lessons: \(i\) dense low\-resolution sampling outperforms sparse native\-resolution sampling at matched token budgets; \(ii\) some tasks are resolution\-sensitive and benefit from high\-resolution frames; and \(iii\) front\-end decoding dominates wall time on hour\-scale clips\. These lessons motivate LoHi, a training\-free, single\-pass framework that pairs a dense low\-resolution video stream with a sparse set of high\-resolution image streams, processed through the VLM's native video and image pathways\. Two plug\-and\-play selectors choose Hi\-I frames at near\-zero or low overhead: LoHi\-Anchor uses codec\-level I\-frame metadata, and LoHi\-SemDiv uses a query\-relevance and visual\-diversity DPP over CLIP features\. On three long\-video benchmarks, LoHi improves over the vanilla native\-resolution baseline by \+10\.6% on average at matched token budget and over the strongest prior efficiency methods by \+5\.2%, while reducing front\-end decoding latency by up to 7x on hour\-scale clips\.

## Video Forensic Self\-Descriptions: Leveraging Temporally Distributed Forensic Microstructures for Zero\-Shot Detection of AI\-Generated Videos

**Authors:** Aref Azizpour; Tai Nguyen; Matthew Stamm

**ID:** 149484 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pnZvRHgjWk>) | [PDF](<https://openreview.net/pdf?id=pnZvRHgjWk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149484>)

AI\-generated videos are becoming increasingly realistic, yet most detection methods focus on spatial artifacts within individual frames and require synthetic training data from known generators, causing them to fail on unseen generators\. We identify two previously unexplored temporally distributed forensic microstructures that reveal whether a video was AI\-generated\. These traces arise from how a video's visual field and motion evolve over time, capturing subtle deviations that generators introduce when approximating real\-world temporal dynamics\. To expose them, we train two simple predictors on real video only, modeling visual evolution \(VE\-FSD\) and motion evolution \(ME\-FSD\), and analyze their prediction residuals\. We fit 3D spatio\-temporal autoregressive models to these residuals, producing compact descriptors we call Video Forensic Self\-Descriptions \(VFSD\)\. VFSDs of real videos naturally cluster together and separate from AI\-generated ones, enabling zero\-shot detection and source attribution without synthetic training data\. Experiments across multiple datasets and 35 generators show VFSD achieves state\-of\-the\-art performance on both tasks\.

## RoSeViT: Role\-Separated Vision Transformers for ARC Visual Reasoning

**Authors:** Zhiguang Liu; Yi Shang

**ID:** 153254 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=McXZ63160k>) | [PDF](<https://openreview.net/pdf?id=McXZ63160k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153254>)

ARC tasks can be formulated as visual transformation problems, where a model must infer a high\-level transformation rule from a small set of demonstrations and apply it consistently across a grid\. While dense Vision Transformers \(ViTs\) perform well in this setting, they entangle local visual state and global transformation logic within a shared token representation, which can hinder consistent reasoning\. In this paper, we introduce RoSeViT, a role\-separated Vision Transformer that explicitly decouples high\-level instruction inference from visual workspace computation\. RoSeViT uses controller tokens to aggregate transformation\-level information and workspace tokens to represent the visual grid, with a structured attention mechanism that routes nonlocal interactions through the controller\. This design is motivated by a formal analysis showing that enforcing a shared instruction representation can reduce the effective complexity of visual transformation modeling\. Under the standard VARC training and evaluation protocol for ARC, RoSeViT consistently outperforms dense ViT baselines\. In a controlled backbone replacement setting, it improves ARC\-1 accuracy from 54\.5 to 56\.6, and with recurrent refinement reaches 58\.8\. When integrated into the full system, RoSeViT\-Ensemble improves performance from 60\.4 to 62\.6 on ARC\-1\. These results demonstrate that explicitly separating instruction and workspace representations leads to more effective visual reasoning on ARC tasks\.

## MotorSense: A Video\-EMG Dataset of Motoric Representations for Action Understanding

**Authors:** Eadom T Dessalene; Michael Maynord; Amir Hossein Shahidzadeh; Botao He; Yasamin Tabatabaee; Ruoshi Liu; Ruohan Gao; Paul Liang; Yiannis Aloimonos

**ID:** 154831 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AcKmwyvIYm>) | [PDF](<https://openreview.net/pdf?id=AcKmwyvIYm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154831>)

Computer vision models learn hand action only from its visual consequences, without access to the underlying embodied motor signals\. We address this absence with MotorSense \- the first large\-scale paired egocentric video and surface electromyography \(EMG\) dataset\. MotorSense pairs bimanual EMG bands with Meta Aria glasses and yields synchronized video, bimanual EMG and IMU, and audio across $25$ hours of unscripted manipulation\. Beyond scale, EMG offers an alternative to manual annotation, and captures finger movement, hand configuration, and forces exerted between hand and environment \-\-\- this is in contrast to manual annotation which is costly, subjective, and unreliable under occlusion\. EMG provides a dense hand signal free of both occlusion and labeler bias\. To bridge the representational gap between low\-level EMG and high\-level semantic action representations, we learn a mid\-level representation over the EMG data that we call motor codes\. We utilize these motor codes in two settings: 1\) motor\-code pre\-training, in which image and video backbones are pre\-trained to predict motor codes from pixels, and subsequently evaluated over downstream tasks of 3D hand\-object reconstruction and action recognition; 2\) motor\-code conditioning, in which the codes are used as control inputs for a video diffusion model, yielding videos of fine\-grained hand manipulation\. On action recognition \(EPIC\-Kitchens, Ego\-Exo4D, and Meccano\), under a frozen\-evaluation protocol we observe a large $35\.8$\\% mean relative improvement in top\-1 accuracy over conventional pre\-trained backbones\. On ARCTIC 3D hand\-object reconstruction we observe a sizeable increase in object\-pose success rate from $72\.90$\\% to $77\.22$\\% compared to the pre\-training of the base ARCTIC model\. Code and data are made anonymously available at https://anonymous\.4open\.science/r/MotorSense\-7173/ \.

## Beyond Copy\-Paste: How Well Do Subject\-Driven Video Models Understand Their Subjects?

**Authors:** Zun Wang; Kenan Deng; Daniel Blackburn; Linlin Lu; Junbang Liang; Yu Lou; Mohit Bansal; Shan Yang

**ID:** 152728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QnZfz1xiAO>) | [PDF](<https://openreview.net/pdf?id=QnZfz1xiAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152728>)

Subject\-driven video generation aims to produce videos that faithfully incorporate user\-provided reference subjects\. Current evaluation relies on free generation followed by reference\-similarity scoring, which rewards a fundamental shortcut: models can obtain high scores by reproducing visible cues from the references while avoiding transformations that would test whether the subject is truly preserved beyond the conditioning input\. We design anchored evaluation: controlled settings in which generation is anchored to held\-out targets of the same subject rather than left unconstrained\. Each probe withholds target content from the model's conditioning, so success requires using the references to infer content not directly visible, rather than simply copy\-pasting what was given\. We instantiate two probes\. \(1\) Viewpoint control specifies target geometry via depth\-based warping, leaving occluded regions that the model must complete using subject appearance from the references\. \(2\) Degradation\-\-recovery corrupts held\-out videos showing the subject in real\-world contexts that differ from the reference images, then recovers them conditioned on those references; recovery requires cross\-context generalization of identity and inference of state dynamics\. Both probes require only lightweight modifications to the inference loop of flow\-matching models, need no retraining, and generalize across architectures\. Evaluation across seven diverse, strong models reveals that rankings shift substantially: VACE\-14B ranks first conventionally but Phantom\-14B, ranked last, leads under anchored evaluation\. Moreover, conventional scores strongly correlate with the improvement from providing ground\-truth references \(Pearson r = 0\.91\), suggesting they largely measure copying ability\. Fine\-grained analysis further reveals distinct failure modes: copy\-paste models drift at unseen viewpoints, and no model adaptively balances copying and generalization\.

## When and How Much to Imagine: Adaptive Test\-Time Scaling with World Models for Visual Spatial Reasoning

**Authors:** Shoubin Yu; Yue Zhang; Zun Wang; Jaehong Yoon; Huaxiu Yao; Mingyu Ding; Mohit Bansal

**ID:** 155803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2lkBbc7J7q>) | [PDF](<https://openreview.net/pdf?id=2lkBbc7J7q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155803>)

Despite rapid progress in Multimodal Large Language Models \(MLLMs\), visual spatial reasoning remains unreliable when correct answers depend on how a scene would appear under unseen or alternative viewpoints\. Recent work addresses this by augmenting reasoning with world models for visual imagination, but questions such as when imagination is actually necessary, how much of it is beneficial, and when it becomes harmful, remain poorly understood\. In practice, indiscriminate imagination can increase computation and even degrade performance by introducing misleading evidence\.  In this work, we present an in\-depth analysis of test\-time visual imagination as a controllable resource for spatial reasoning\.  We first study when static visual evidence is sufficient, when imagination improves reasoning, and how excessive or unnecessary imagination affects accuracy and efficiency\.  To support this analysis, we then introduce AVIC, an adaptive test\-time framework with world models that explicitly reasons about the sufficiency of current visual evidence before selectively invoking and scaling visual imagination\.  Finally, to further learn this gating and planning behavior without any annotation of when and how much to imagine, we introduce AVIC\-R, which trains the policy end\-to\-end via GRPO from QA\-correctness rewards and penalties by imagination cost\. Across spatial reasoning benchmarks \(SAT, MMSI\) and an embodied navigation benchmark \(R2R\), our results reveal clear scenarios where imagination is critical, marginal, or detrimental, and show that selective control can match or outperform fixed imagination strategies with substantially fewer world\-model calls and language tokens\. Our AVIC\-R surpasses strong proprietary baselines including GPT\-4o and GPT\-4\.1 while invoking the world model less often\. Overall, our findings highlight the importance of analyzing and controlling test\-time imagination for efficient and reliable spatial reasoning\.

## A Training\-Free Video Moment Retrieval Framework via Selection from Multiple Visual Prompts

**Authors:** Xun Mo; Shengtao Guo; Yongwei Nie; Fei Ma; Xuemiao Xu; Chengjiang Long

**ID:** 149512 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=paLWDpXw1a>) | [PDF](<https://openreview.net/pdf?id=paLWDpXw1a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149512>)

Video Moment Retrieval \(VMR\) aims to localize a temporal segment in a video based on a natural language query\. While Multi\-modal Large Language Models \(MLLMs\) are increasingly adopted for VMR due to their strong video understanding capability, they still face several limitations: \(1\) imprecise perception of event boundaries, \(2\) rigid dependency on precise object identification, and \(3\) inability to handle temporarily interrupted events\. To address these, we propose three visual prompts: Event Segmentation \(ES\) prompt, Object Detection \(OD\) prompt, and Keyframe Marking \(KM\) prompt\. Each prompt improves performance when applied individually, yet direct fusion degrades results because mixing prompts overcomplicates video content and inaccurate labels introduce noise\. Although certain visual prompts may mislead the model, at least one of the three is likely to yield a positive effect\. Even in the worst case where all three perform poorly, the prediction can fall back to the baseline\. Motivated by this, we introduce a selection mechanism based on Yes/No Probability\-Difference score to choose the most reliable prediction among the results produced by the three visual prompts and the baseline\. We evaluate our method in a training\-free setting across three datasets and four models, and obtain state\-of\-the\-art performance\.

## OptiWorld: Optimal Control for Video World Generation under Physical Constraints

**Authors:** Yu Yuan; Jianhao Yuan; Xijun Wang; Daiqing Li; Liu He; Lu Ling; Stanley Chan

**ID:** 154299 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ElToIAx2OM>) | [PDF](<https://openreview.net/pdf?id=ElToIAx2OM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154299>)

Video generation models are becoming a scalable form of world models, but they mainly generate plausible motion rather than proactively control or optimize the underlying dynamics\. As a result, an object in the generated video may follow trajectories that are unsafe, not smooth, inefficient, or physically inconsistent\. In this work, we propose OptiWorld, a framework that brings classical optimal control into video generation at inference time\. OptiWorld first extracts a compact, task\-relevant world state, then plans an optimal trajectory under physical constraints, and finally renders the video conditioned on this trajectory\. We formulate planning as a geometric problem on a continuous manifold, which converts 3D geometry and task\-dependent physical constraints into a unified planning geometry\. By adding this optimal\-control layer, OptiWorld generates videos with preferable dynamics, demonstrating strong potential in multiple tasks including goal\-conditioned image\-to\-video generation, video dynamics editing, and counterfactual generation\.

## SyncWorld: Visual Calibration Enables World Models as Zero\-Shot Simulators

**Authors:** Yuncong Yang; Zhengtao Han; Furkan Ozyurt; Zeyuan Yang; Han Yang; Junyi Cao; Haoyu Zhen; Yilun Du; Chuang Gan

**ID:** 149981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lj7OHtUYX1>) | [PDF](<https://openreview.net/pdf?id=lj7OHtUYX1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149981>)

World models are increasingly used as policy\-in\-the\-loop imagination environments, where reliable rollouts require fine\-grained controllability with respect to low\-level robot actions\. A key obstacle to scaling such models in robotics is that actions are not a universal language in pixel space: changes in visual environment, camera view, robot placement, or embodiment alter how the same numerical action manifests visually, leading to conflicting supervision under mixed training and brittle generalization at deployment\. We introduce SyncWorld, an action\-conditioned world model that serves as a zero\-shot simulator across unseen environments without any additional training\. SyncWorld leverages a visual calibration episode\-\-\-paired frames and actions that showcase all the controllable degrees of freedom\-\-\-to specify the setup\-specific Action\-\-Visual Mapping in context\. Training with visual calibration contexts teaches the model to interpret actions through visual evidence and to leverage interaction history when explicit calibration is unavailable\. Experiments show that SyncWorld can accurately simulate action outcomes in previously unseen settings, and that its capability of simulating rollouts enables test\-time policy improvement without training\.

## Bernini: Latent Semantic Planning for Video Diffusion

**Authors:** Chenchen Liu; Junyi Chen; Lei Li; Lu Chi; Mingzhen Sun; Zhuoying Li; Yi Fu; Ruoyu Guo; Yiheng Wu; Ge Bai; Zehuan Yuan

**ID:** 154106 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GDdIbzbPVF>) | [PDF](<https://openreview.net/pdf?id=GDdIbzbPVF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154106>)

Multimodal large language models \(MLLMs\) and diffusion models have each reached remarkable maturity: MLLMs excel at reasoning over heterogeneous multimodal inputs with strong semantic grounding, while diffusion models synthesize images and videos with photorealistic fidelity\. We argue that these two families can be unified through a simple division of labor: MLLMs perform semantic planning, while diffusion models render pixels from high\-level semantic guidance and low\-level visual features\. Building on this idea, we propose \\textbf\{Bernini\}, a unified framework for video generation and editing\. An MLLM\-based \\textbf\{planner\} predicts the target semantic representation directly in the ViT embedding space, and a DiT\-based \\textbf\{renderer\} synthesizes pixels conditioned on this plan, augmented by text features and, for editing, source VAE features for detail preservation\. Because semantics serve as the interface, the planner and renderer can be trained separately and only lightly co\-trained, preserving the pretrained strengths of both components while keeping training efficient\. To better handle multiple visual inputs, we introduce Segment\-Aware 3D Rotary Positional Embedding \(SA\-3D RoPE\), and further incorporate chain\-of\-thought reasoning in the planner to better transfer understanding into generation\. Bernini achieves state\-of\-the\-art performance across a wide range of video generation and editing benchmarks, with the MLLM's pretrained understanding translating into strong generalization on challenging editing tasks\.

## RegimeVGGT: Layer\-Wise Spatially Preserving Redundancy Removal for Visual Geometry Grounded Transformer

**Authors:** Shuo Lyu; Jinhao You; Zhuohang Lyu; Tanxuan Li; Zibo Zhao; Jiaxiang Hu; Kai Tang; Yichen Guo

**ID:** 155954 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1a4VUxz0sm>) | [PDF](<https://openreview.net/pdf?id=1a4VUxz0sm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155954>)

Visual Geometry Grounded Transformer \(VGGT\) recovers dense 3D scene structure from multi\-view images in one forward pass, but quadratic cross\-frame attention limits its scalability\. Existing training\-free accelerators reduce computation uniformly along one axis, missing layer heterogeneity\. Our spectral, probing, and causal analyses reveal three regimes: shallow layers lack cross\-view structure, middle layers drive cross\-view alignment, and deep layers are redundant for dense geometry yet their cross\-frame attention remains essential for pose\. RegimeVGGT applies layer\-wise U\-shaped compression along two axes: Saliency\-Guided Banded Merging protects geometry\- and edge\-salient tokens, while Selectively Protected K/V Downsampling preserves cross\-frame spatial coverage and the pose\-critical path through a phase\-shifted spatial grid, a reference\-frame anchor, and uncompressed camera/register tokens\. Training\-free, RegimeVGGT achieves a $6\.7\\times$ speedup over VGGT\* at matched reconstruction quality\. Code: \\url\{https://anonymous\.4open\.science/status/RegimeVGGT\-9477\}

## Do Pathology Foundation Models Encode Disease Progression? A Pseudotime Analysis of Visual Representations

**Authors:** Pritika Vig; Renchin Wu; William Lotter

**ID:** 151068 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dCbetXpnpa>) | [PDF](<https://openreview.net/pdf?id=dCbetXpnpa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151068>)

Vision foundation models trained on discretely sampled images achieve strong performance on classification benchmarks, yet whether their representations encode the continuous processes underlying their training data remains unclear\. This question is especially pertinent in computational pathology, where we posit that models whose latent representations implicitly capture continuous disease progression may better reflect underlying biology, support more robust generalization, and enable quantitative analyses of features associated with disease transitions\. Using diffusion pseudotime, a method developed to infer developmental trajectories from single\-cell transcriptomics, we probe whether foundation models organize disease states along coherent progression directions in representation space\. Across four cancer progressions and six models, we find that all pathology\-specific models recover trajectory orderings significantly exceeding null baselines, with vision\-only models achieving the highest fidelities \($\\tau &gt; 0\.78$ on CRC\-Serrated\)\. Model rankings by trajectory fidelity on reference diseases strongly predict few\-shot classification performance on held\-out diseases \($\\rho = 0\.92$\), and exploratory analysis shows cell\-type composition varies smoothly along inferred trajectories in patterns consistent with known stromal remodeling\. Together, these results demonstrate that vision foundation models can implicitly learn to represent continuous processes from independent static observations, and that trajectory fidelity provides a complementary measure of representation quality beyond downstream performance\. While demonstrated in pathology, this framework could be applied to other domains where continuous processes are observed through static snapshots\.

## Oracle Supervision Transfers for Hyperparameter Prediction in Model\-Based Image Denoising

**Authors:** Jianmin Liao; Lixin Shen; Yuesheng Xu

**ID:** 148723 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vXGWG7Z20k>) | [PDF](<https://openreview.net/pdf?id=vXGWG7Z20k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148723>)

Hyperparameter prediction is a critical practical bottleneck for model\-based image denoisers, ranging from classical TV/TGV variational solvers to modern diffusion\-based models such as DiffPIR\. While existing learned predictors can achieve near\-oracle performance, this approach scales poorly: each new configuration conventionally requires its own oracle\-labeled training set, and each label requires an exhaustive denoiser sweep evaluated against clean ground truth\. We therefore ask whether oracle supervision collected on source configurations can transfer to target configurations with few or no target oracle labels\. We propose HyperDn, a single configuration\-conditioned predictor that pools oracle supervision across source configurations and predicts heterogeneous hyperparameters for new denoiser\-\-noise configurations\. In a cross\-paradigm experiment, HyperDn transfers from relatively cheap TV/TGV variational sources to more expensive diffusion\-based DiffPIR\.  With only $2$ target oracle labels, it reaches $30\.23$\\,dB, within $0\.90$\\,dB of oracle, using $1/32$ the target labels that a per\-configuration predictor trained from scratch needs to match\. Without any target oracle labels, HyperDn also reaches near\-oracle PSNR on two unseen mixtures of seen noise types and on transfer from relatively cheap $96\\times 96$ source images to $512\\times 768$ targets\. Together, these results show that expensive oracle supervision for hyperparameter prediction can be transferred from source to new target configurations, reducing the need to rebuild oracle labels for each new denoising configuration\.

## DOME: Drift\-Adaptive On\-Policy Motion Erasure in Video Diffusion Transformers

**Authors:** Ping Liu; CHI ZHANG; Meng Tang

**ID:** 148171 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zlsIDv6ZvH>) | [PDF](<https://openreview.net/pdf?id=zlsIDv6ZvH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148171>)

Concept erasure works well for static visual attributes in text\-to\-image diffusion, but does not transfer to motion concept erasure in video diffusion transformers\. We trace this failure to an off\-policy trajectory mismatch: once weights are edited, the generation trajectory followed by the edited model deviates from the original trajectory used for supervision, so state\-local velocity matching fails to control the motion patterns realized at inference\. As a consequence of this mismatch, off\-policy weight modification can drive training loss to convergence while the target motion remains fully present in generated videos\. We formalize this gap through a Gronwall\-type bound showing how weight\-induced velocity perturbations propagate into trajectory divergence, and a residual\-error bound showing that off\-policy training, even at perfect convergence, leaves a nonzero erasure error on the edited trajectory\. To address this problem, we introduce \{DOME \(Drift\-Adaptive On\-Policy Motion Erasure\)\}, a trajectory\-aligned framework for motion concept erasure in video diffusion transformers\. DOME trains on states from the edited model's own trajectory and applies \\emph\{drift\-adaptive anticipation\}, which shifts supervision along the observed divergence between the edited and original trajectories, turning trajectory drift from a failure symptom into a training signal\. DOME edits the text\-conditioned pathway via cross\-attention LoRA, and the learned adapter can be merged into the base model so that inference incurs no additional overhead\. On Wan\~2\.1\-T2V across 20 motion concepts, DOME consistently suppresses localized contact actions while showing limited effect on whole\-body dynamics, validated through both motion\-consistency scoring and an independent action classifier\. Systematic ablations show that drift\-adaptive anticipation, not on\-policy rollout alone, is the critical component distinguishing DOME from off\-policy and standard on\-policy training\.

## Hierarchical Denoising For Multi\-Step Visual Reasoning

**Authors:** Zezhong Qian; Xiaowei Chi; Chak Wing Mak; Tianze Zhou; Ruibin Yuan; Yuhan Rui; Hengzhe Sun; Zhuoqun Wu; Yuming Li; Siyuan Qian; Sirui Han; Shanghang Zhang

**ID:** 151418 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=apazc2xK3R>) | [PDF](<https://openreview.net/pdf?id=apazc2xK3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151418>)

Video models are recently evolving into vision foundation models, but they still lack human\-like, multi\-step reasoning\. Existing streaming autoregressive diffusion models are efficient but lack the reasoning ability, whereas bidirectional diffusion allows for global revision but incurs high inference cost due to the dense frames in fixed\-sequence denoising\. Consequently, both paradigms struggle to maintain logical consistency with low\-latency streaming in complex reasoning tasks\. Bridging this gap, we propose HDR \(Hierarchical Denoising for Visual Reasoning\), a unified framework for multi\-step reasoning by integrating hierarchical latents into the causal video generation process\. HDR organizes video latents into a tree\-structured hierarchy to perform coarse\-to\-fine reasoning before streaming output\. Coarse denoising layers maintain uncertain hypotheses for global planning, while finer denoising layers progressively refine them into concrete visual states\. A sparse hierarchical attention pattern \(SHAP\) further reduces temporal attention cost\. We construct a level\-stratified multi\-step video reasoning benchmark with out\-of\-distribution cases, covering six tasks: maze navigation, Tower of Hanoi, one\-line drawing, sliding puzzle, Sokoban, and water pouring\. Compared with the streaming autoregressive diffusion baseline, HDR improves overall success from 34\.22 to 60\.29 \(76\.2% relative gain\) in multi\-step reasoning accuracy, and improves average progress from 76\.00 to 89\.56, indicating more consistent intermediate reasoning trajectories\. For deployment efficiency, HDR maintains low\-latency streaming at 0\.70s per latent, 54\.2x faster than bidirectional diffusion during streaming\. HDR also demonstrates strong data efficiency, retaining 82\.9% of its full\-data success score using only 2% of the training data, compared with 52\.0% for bidirectional diffusion\. Further experiments on real\-world robots showcase the potential of HDR in physical interaction, providing a new paradigm for physical world modeling\. Project demo page is available at https://hierarchical\-diffusion\-reasoning\.github\.io/\.

## Generalizing Action\-Conditioned Latent World Models with Video Model Rewards

**Authors:** Haichao Zhang; Yijiang Li; Shwai He; Van T Le; Nuno Vasconcelos; Yun Fu

**ID:** 154367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E6rncT8Glg>) | [PDF](<https://openreview.net/pdf?id=E6rncT8Glg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154367>)

JEPA\-style latent world models offer an efficient alternative to pixel\-space video generation by predicting future representations rather than synthesizing future frames\. However, current action\-conditioned predictors in such latent world models are typically trained on single or narrowly scoped embodied datasets with limited task, object, embodiment, and action\-space coverage, and often fail to generalize beyond the training distribution\. We argue that this lack of generalist action\-conditioned prediction is a key bottleneck for scaling latent world models\. In contrast, large controllable video world models have a clear scale\-up path through large\-scale video pretraining and encode broad visual\-dynamics priors, but they are too computationally expensive to serve as online simulators and lack a direct interface to latent action\-conditioned prediction\. We introduce GeneralistJEPA, a framework for transferring generalist motion priors from video world models to efficient action\-conditioned JEPA predictors, establishing a scalable training path for future latent world models\. Instead of directly distilling generated futures, whose latents entangle useful action dynamics with source\-mismatched content and generation artifacts, GeneralistJEPA factorizes future latent prediction into source\-conditioned content continuation and action\-induced dynamics\. Controllable video world models are used as same\-action environment randomizers to build an offline motion\-reward bank, providing diverse motion supervision without treating generated content as an absolute target\. Specifically, generated rollouts are encoded with a frozen JEPA encoder, and only their patch\-level temporal deltas are distilled as video\-world\-model motion rewards for predicted latent dynamics\. This design preserves the efficiency of latent rollout, since video generation and representation encoding are performed offline, while leveraging the broader visual\-dynamics priors of video world models\. We evaluate GeneralistJEPA on three complementary benchmarks: EgoDex for held\-out subtask generalization and action recoverability, BAIR robot pushing for future\-frame latent prediction and action sensitivity, and Physion for physical contact readout\. Our results show that video\-world\-model motion rewards improve latent prediction, action sensitivity, action recoverability, and physical contact readout beyond real\-only training and naive generated\-latent distillation, addressing a key generalization bottleneck on the path toward scaling up action\-conditioned latent world models\.

## PanoWorld: Geometry\-Consistent Panoramic Video World Modeling

**Authors:** Le Jiang; Xiangyu Bai; Bishoy Galoaa; Shayda Moezzi; Caleb J Lee; Tooba Imtiaz; Edmund Yeh; Jennifer Dy; Yanzhi Wang; Sarah Ostadabbas

**ID:** 148684 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vq6RcMt70J>) | [PDF](<https://openreview.net/pdf?id=vq6RcMt70J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148684>)

We present PanoWorld, a panoramic video world model that generates geometry\-consistent 360$\\degree$ video from a single image and a caption\. Existing panoramic video methods optimize primarily for visual realism and do not explicitly constrain the underlying 3D scene state, producing outputs that appear plausible yet exhibit inconsistent depth, broken correspondences, and implausible motion across the spherical surface\. We address this gap by framing panoramic video generation as a geometry\- and dynamics\-consistent latent state modeling problem rather than pure visual synthesis\. Building on a pre\-trained perspective video world model, we introduce two lightweight regularizers: a depth consistency loss against pseudo ground\-truth panoramic depth, and a trajectory consistency loss that supervises the 3D world\-frame positions of tracked points across time\. We further apply spherical\-geometry\-aware adaptation to the conditioning and positional encoding\. We additionally introduce PanoGeo, a unified geometry\-aware panoramic video dataset with consistent depth, trajectory, and prompt annotations across diverse real and synthetic sources, used for both training and stratified evaluation\. Experiments show that PanoWorld improves geometric consistency over prior panoramic generation methods while maintaining competitive visual realism, establishing that panoramic video generation must be treated as a geometric modeling problem to support the holistic spatial understanding requirements of embodied AI applications\.

## HorizonComposer: Spatiotemporally Consistent Driving Video Editing with Enriched Traffic Semantics

**Authors:** Mauricio Soroco; Yuqiu Liu; Zaid Tasneem; Francesco Pittaluga; Abhishek Aich; Wuyang Chen; Manmohan Chandraker; Ziyu Jiang

**ID:** 150588 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h4NSSZLqct>) | [PDF](<https://openreview.net/pdf?id=h4NSSZLqct>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150588>)

Instruction\-guided video generative models offer a scalable solution for stress\-testing autonomous driving systems by simulating diverse environmental conditions\.   However,     driving scenes operate within a dense Operational Design Domain \(ODD\) governed by strict traffic semantics\.    When applied to global driving\-condition edits,   general\-purpose instruction\-guided video editors   frequently corrupts these semantics, leading to structural hallucinations and \`\`temporal shock''\.   This work strictly distills and protects traffic semantics during video editing at three levels\.   First, we construct a hybrid dataset by combining temporally aligned real\-world videos with synthetic edits, balancing foundational scene structure with unambiguous appearance signals\.   Second, during training, we cast model alignment as offline reinforcement learning via advantage conditioning\.   We extract dense, pixel\-level rewards from the hybrid data to serve as a localized signal and   actively steer generation toward structurally reliable pixel states\.   Finally, our model mitigates temporal shock by introducing thinking frames, a transition mechanism that seamlessly reconciles static image conditioning with dynamic video context\.   Extensive experiments demonstrate that our method prevents the corruption of multi\-agent dynamics, establishing state\-of\-the\-art spatiotemporal consistency and yielding an overwhelming user preference \(88 % relative improvement in content preservation and 75 % in temporal consistency\) and yielding a significant 5 % gain in downstream road line segmentation\.   We provide more video results in the supplementary material\.

## Language\-Conditioned World Modeling for Visual Navigation

**Authors:** Yifei Dong; Fengyi Wu; Yilong Dai; Lingdong Kong; Guangyu Chen; Qiyu Hu; Yetong Sha; Feng Liu; Siyu Huang; Qi Dai; Zhi\-Qi Cheng

**ID:** 154464 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DOtvhTItcX>) | [PDF](<https://openreview.net/pdf?id=DOtvhTItcX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154464>)

Goal\-conditioned visual navigation has been a long\-standing testbed for embodied AI\. We study a natural language\-conditioned variant, language\-conditioned visual navigation \(LCVN\), in which an embodied agent must follow a natural language instruction given only an initial egocentric observation\. Without access to goal images, the agent must rely on language to shape its perception and continuous control\. We introduce the LCVN Dataset, a benchmark of 39,016 trajectories and 117,048 human\-verified instructions spanning diverse environments and instruction styles\. Building on this benchmark, we study two complementary paradigms: \(i\) latent\-imagination policy learning, in which a diffusion\-based world model \(LCVN\-WM\) imagines future observations and an actor\-critic agent \(LCVN\-AC\) learns its policy entirely within the imagined latent space; and \(ii\) unified autoregressive prediction, in which a single multimodal backbone \(LCVN\-Uni\) jointly predicts actions and observations in one forward pass over a shared token sequence\. Experiments show that two paradigms offer complementary strengths: latent imagination produces more temporally coherent rollouts, whereas unified prediction generalizes better to unseen environments\. Targeted ablations further isolate the contributions of language guidance, conditioning signals, and instruction style, clarifying when language grounding versus dynamics modeling is the performance bottleneck\. Together, these findings position LCVN as a concrete testbed for studying how language, imagination, and decision\-making interact in embodied agents\.

## Beyond Thinking: Imagining in 360$^\\circ$ for Humanoid Visual Search

**Authors:** Jingdong Zhang; Yizhou Wang; Zhengzhong Tu; Xin Li; Wenping Wang; Xiaohang Zhan

**ID:** 149744 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nf3SdflMnP>) | [PDF](<https://openreview.net/pdf?id=nf3SdflMnP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149744>)

Humanoid Visual Search \(HVS\) requires agents to actively explore immersive 360$^\\circ$ environments\. While prior methods treat this as a monolithic task relying on cumulative, multi\-turn Chain\-of\-Thought \(CoT\) reasoning, they impose heavy cognitive burdens and require expensive trajectory\-level annotations\. In this paper, we propose Imagining in 360$^\\circ$, a novel framework that decouples the exploration process into a specialized Imaginator and an Actor\. The Imaginator functions as a probabilistic predictor of spatial priors; instead of maintaining a cumulative reasoning chain, it infers the semantic layout of both observed and unobserved regions in a single step\. By sampling multiple hypotheses within this semantic space, we provide the Actor with a distribution of effective spatial information, offering robust guidance that hedges against uncertainty during active search\. This decoupled architecture significantly lowers data engineering costs by eliminating the need for full\-trajectory CoT annotations, enabling the generation of over 1\.96 million curated training samples\. Extensive experiments demonstrate that explicitly modeling semantic spatial priors drastically improves search efficiency and success rates in complex, in\-the\-wild environments\.

## RAVEN\-Bench: A Paired EO\-IR Video QA Benchmark for Aerial Multimodal Understanding

**Authors:** Yu Hu; Jianyang Gu; Yue Cao; Hao Liu; Kangnan Wang; Jozsef Hamari; Zheng Liu; Mohsen Zardadi

**ID:** 138877 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zLkvbhLO4d>) | [PDF](<https://openreview.net/pdf?id=zLkvbhLO4d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138877>)

Multimodal large language models \(MLLMs\) have advanced rapidly on image and video understanding, but their ability to reason over paired aerial electro\-optical and infrared \(EO\-IR\) videos remains underexplored\. Such videos contain small targets, sparse temporal evidence, changing viewpoints, and modality\-dependent cues that are poorly captured by RGB\-centric benchmarks\. We introduce RAVEN\-Bench \(Reasoning over Aerial Videos with EO\-IR aligNment\), a paired EO\-IR video QA benchmark for low\-altitude aerial multimodal understanding\. RAVEN\-Bench contains 48 temporally aligned EO\-IR video pairs and 576 human\-verified four\-way multiple\-choice questions\. It supports EO\-only, IR\-only, and paired EO\+IR evaluation, and uses hierarchical capability levels and structured question groups to diagnose cross\-modal gain, modality reliance, consistency, and reasoning coherence\. We evaluate representative frontier and open\-weight MLLMs, showing that aggregate performance can overestimate reliable EO\-IR reasoning\. RAVEN\-Bench provides a focused testbed for assessing whether progress on RGB video benchmarks transfers to aerial cross\-spectral understanding\.

## The Value of Being Wrong: Self\-Mined Visual In\-Context Learning from Errors

**Authors:** Shu Zhao; TAN YU

**ID:** 151028 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dVu1u4QgAp>) | [PDF](<https://openreview.net/pdf?id=dVu1u4QgAp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151028>)

Visual in\-context learning \(ICL\) enables vision\-language models \(VLMs\) to adapt at test time via demonstration examples, but its effectiveness depends critically on the examples selected\. Recent counterfactual selection methods improve ICL by constructing demonstrations that expose how individual attribute changes affect the answer\. However, they require multi\-stage pipelines involving attribute extraction, caption engineering, and composed image matching\. We propose a simpler alternative grounded in a key observation: a model's own prediction errors are natural counterfactual demonstrations that directly encode its failure modes\. Our method, SMILE \(Self\-Mined Visual In\-Context Learning from Errors\), builds a model\-specific pool of hard negatives offline by recording the target VLM's own mistakes\. At test time, the prediction serves as a direction signal that surfaces, in the semantic embedding space, the past mistakes most likely to recur for the current query\. This prediction\-conditioned identification provides a unified mechanism for both closed\-set classification and open\-ended visual question answering without task\-specific design\. Across four benchmarks and four VLMs, SMILE delivers an average task\-score gain of \+2\.72 points over the SOTA baseline at 5× lower latency\. Source code is provided in the supplementary material\.

## The Path Not Taken: RLVR Learns Off the Principals

**Authors:** Hanqing Zhu; Zhenyu Zhang; Hanxian Huang; DiJia Su; Zechun Liu; Jiawei Zhao; Igor Fedorov; Hamed Pirsiavash; Jinwon Lee; David Z\. Pan; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Yuandong Tian; Kai Sheng Tai

**ID:** 155162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ob9PpTAMB>) | [PDF](<https://openreview.net/pdf?id=7ob9PpTAMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155162>)

RLVR reliably improves reasoning, yet it appears to update only a tiny fraction of weights\. We resolve this paradox by revealing a persistent, model\-conditioned optimization bias: independent runs concentrate updates in similar parameter regions, invariant to dataset or RL recipe, while finite\-precision storage \(e\.g\., bf16\) obscures widespread micro\-updates as a visual sparsity artifact\. To characterize this unique bias, we show that RLVR preferentially learns along off\-principal directions via a cascaded Three\-Gate mechanism: updates are first bounded by a empirical KL constraint \(Gate I\), then steered by the model’s anisotropic geometry\(Gate II\) toward spectrum\-preserving off\-principal subspaces, and finally filtered by finite precision \(Gate III\), effectively masking minor updates\. Empirically, we validate the off\-principal dynamics: RLVR exhibits minimal spectral drift, reduced principal\-subspace rotation, and strong off\-principal alignment that set RLVR strikingly apart from SFT\.  Together, our results provide the first parameter\-space account of RLVR and uncover consistent regularities in weight evolution, advancing a more white\-box understanding of RLVR\. Moreover, we show that RLVR follows an optimization regime distinct from SFT, showing directly that transferring SFT\-era PEFT can be flawed and motivating geometry\-aware, RLVR\-native methods\.

## The Invisible Hand of Physics: When Video Diffusion Models Know More Than They Show

**Authors:** Parsa Esmati; Somjit Nath; Katja Hofmann; Derek Nowrouzezahrai; Samira Ebrahimi Kahou; Majid Mirmehdi

**ID:** 149891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTYG9xSbYv>) | [PDF](<https://openreview.net/pdf?id=mTYG9xSbYv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149891>)

Modern video diffusion models generate increasingly realistic and temporally coherent videos, motivating their use as candidate world simulators\. Yet it remains unclear whether these models internally encode physical structure, or merely reproduce motion patterns seen during training\. We study this question by probing video diffusion models along latent trajectories corresponding to real videos with known physical plausibility\. To obtain such trajectories, we approximately invert the deterministic sampling process by integrating the learned velocity field backward from a clean video latent to noise, giving access to the model’s intermediate states and attention maps\. Using these recovered trajectories, we show that physical plausibility is linearly decodable from diffusion transformer states across IntPhys and InfLevel, reaching around 81\\% average accuracy and outperforming dedicated representation\-learning baselines such as V\-JEPA and VideoMAE\. Surprisingly, this signal is absent from the VAE latent input and emerges inside the denoising transformer itself, despite the model not being trained with a self\-supervised predictive objective\. These findings suggest that physically meaningful representations can arise as a byproduct of generative denoising\.

## Beyond Unit\-Circle Eigenvalues: Invariant Bases for Stable State Space Dynamics

**Authors:** Jiaqian Zhu; Yang Zhang; Junhua Ding; Xiaowei Yu

**ID:** 149242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rsTdJke80K>) | [PDF](<https://openreview.net/pdf?id=rsTdJke80K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149242>)

Diagonal state space models process sequences efficiently but become unstable over long horizons: small spectral deviations compound into information decay or uncontrolled growth\. For conservation\-preserving or non\-dissipative dynamics, constraining eigenvalues to the unit circle is a natural starting point and yields large short\-horizon gains \($\+3\.31$ dB at step 10\)\. We show that this is not enough: spectral constraints govern only the amplitude of each mode, not what each mode represents\. The missing condition is alignment between the modal basis and the invariant structure of the underlying dynamics\. Without this alignment, unit\-circle constraints can preserve quantities unrelated to the task invariants and, on OOD scale\-shift transfer, even degrade performance below unconstrained baselines\. This establishes a broader principle: \*stability in diagonal SSMs is a problem of representation, not just parameterization; eigenvalues determine how modes evolve, but only the basis determines what is preserved\.\* We instantiate this principle for isotropic pairwise systems through the Kronecker\-Cayley Decomposition, which places dynamics in the graph Laplacian eigenbasis, yielding a diagonal SSM with exact layered conservation at $O\(N^3\+N^2m\)$ cost instead of $O\(N^3m^3\)$, dominated by $O\(N^2m\)$ when $m \\gg N$\. Empirically, under our visual N\-body protocol, a spectrally stabilized LRU baseline still accumulates $158\\pm8$% momentum drift; controlled unit\-modulus random and learned bases similarly fail \($120\\pm18$% and $148\\pm8$% drift\); even PCA\-derived bases, which empirically approximate the invariant direction, fall roughly three orders of magnitude short of the algebraic guarantee\. Only the Laplacian basis yields drift below $10^\{\-4\}$%, stable 1000\-step rollouts \(PSNR $21\.19\\pm1\.27$ dB at step 999\), and $\+2\.12$ dB OOD generalization on Charged particles\.

## FactorizedHMR: A Hybrid Framework for Video Human Mesh Recovery

**Authors:** Patrick Kwon; Chen Chen

**ID:** 155234 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ERjBgSwbw>) | [PDF](<https://openreview.net/pdf?id=7ERjBgSwbw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155234>)

Human Mesh Recovery \(HMR\) is fundamentally ambiguous: under occlusion or weak depth cues, multiple 3D bodies can explain the same image evidence\. This ambiguity is not uniform across the body, as torso pose and root structure are often relatively well constrained, whereas distal articulations such as the arms and legs are more uncertain\. Building on this observation, we propose \\textbf\{FactorizedHMR\}, a two\-stage framework that treats these two regimes differently\. A deterministic regression module first recovers a stable torso\-root anchor, and a probabilistic flow\-matching module then completes the remaining non\-torso articulation\. To make this completion reliable, we combine a composite target representation with geometry\-aware supervision and feature\-aware classifier\-free guidance, so that well\-observed body parts remain accurate while ambiguous articulations can be completed without collapsing to deterministic averages\. We also introduce a camera\-aware synthetic data pipeline that provides the paired image\-camera\-motion supervision under diverse viewpoints\. Across camera\-space and world\-space benchmarks, FactorizedHMR improves articulation recovery and reduces drift relative to strong baselines, especially in ambiguous scenes\.

## Motion Cues from Image\-based Point Tracking for LiDAR Scene Flow Estimation

**Authors:** Youngdong Jang; Gyeongrok Oh; Jong Wook Kim; Hyunju Ryu; Hyung\-gun Chi; SeungHyeon Kim; Seungryong Kim; Jonghyun Choi; Sangpil Kim

**ID:** 152171 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V0fMDmaY6H>) | [PDF](<https://openreview.net/pdf?id=V0fMDmaY6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152171>)

LiDAR scene flow estimation is essential for autonomous driving, as it provides 3D motion for each point\. Self\-supervised approaches use static\-dynamic classification to mitigate the imbalance between static and dynamic points, deriving targeted supervision\. However, existing methods rely on sparse geometric observations for this classification, making them vulnerable to data sparsity and occlusions\. The resulting noisy labels provide incorrect motion guidance and degrade scene flow learning\. To address this, we introduce TrackCue, a tracking\-guided framework for improving dynamic object representation in LiDAR scene flow estimation\. In particular, TrackCue repurposes point tracking to obtain dense image\-space trajectories anchored to LiDAR points, providing motion cues beyond sparse geometric observations\. Furthermore, we present a visually consistent motion compensation strategy that compares the tracked trajectories with ego\-induced rigid trajectories in the image plane, effectively isolating true object motion from ego\-induced apparent motion\. To transfer these isolated motion cues back to the LiDAR domain, we perform visual motion cue lifting, which associates ego\-compensated image trajectories with LiDAR points for static\-dynamic label refinement\. As a result, TrackCue produces more accurate static\-dynamic classification and provides more reliable supervision for scene flow learning\. Experimental results show that TrackCue significantly improves the precision and F1 score of dynamic labels, leading to performance gains in self\-supervised scene flow estimation\.

## Reinforcing Multimodal Reasoning Against Visual Degradation

**Authors:** Rui Liu; Dian Yu; Haolin Liu; Yucheng Shi; Tong Zheng; Runpeng\(Leo\) Dai; Haitao Mi; Pratap Tokekar

**ID:** 152003 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WECg95ixWE>) | [PDF](<https://openreview.net/pdf?id=WECg95ixWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152003>)

Reinforcement Learning has significantly advanced the reasoning capabilities of Multimodal Large Language Models \(MLLMs\), yet the resulting policies remain brittle against real\-world visual degradations such as blur, compression artifacts, and low\-resolution scans\. Prior robustness techniques from vision and deep RL rely on static data augmentation or value\-based regularization, neither of which transfers cleanly to critic\-free RL fine\-tuning of autoregressive MLLMs\. Reinforcing reasoning against such corruptions is non\-trivial: naively injecting degraded views during rollout induces reward poisoning, where perceptual occlusions trigger hallucinated trajectories and destabilize optimization\. We propose ROMA, an RL fine\-tuning framework that modifies the optimization dynamics to reinforce reasoning against visual degradation while preserving clean\-input performance\. A dual\-forward\-pass strategy uses teacher forcing to evaluate corrupted views against clean\-image trajectories, avoiding new rollouts on degraded inputs\. For distributional consistency, we apply a token\-level surrogate KL penalty against the worst\-case augmentation; to prevent policy collapse under regularization, an auxiliary policy gradient loss anchored to clean\-image advantages preserves a reliable reward signal; and to avoid systematically incorrect invariance, correctness\-conditioned regularization restricts enforcement to successful trajectories\. On Qwen3\-VL 4B/8B across seven multimodal reasoning benchmarks, our method improves robustness by \+2\.4% on seen and \+2\.3% on unseen corruptions over GRPO while matching clean accuracy\.

## Controllable and Content Based Recommendations

**Authors:** Firat Oncel; Jihoon Jeong; Emiliano Penaloza; Mirco Ravanelli; Laurent Charlin; Cem Subakan

**ID:** 152374 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TYSDot6Dmj>) | [PDF](<https://openreview.net/pdf?id=TYSDot6Dmj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152374>)

Traditional recommendation systems rely on latent \(dense\) representations, making them difficult to interpret and control\. We propose the Controllable and Content\-Based Recommendations \(CCBR\) framework, which builds its recommendations from textual user profile representations\. CCBR plugs into collaborative filtering models and introduces controllability via text bottlenecks\. We show that CCBR enables text\-based and multimodal interventions, allowing users to steer the model towards the directions they prefer\. Different from existing controllable recommendation systems, CCBR infers the text summaries directly from item contents \(images, audio or video\)\. Across image\-, audio\-, and video\-based datasets, we demonstrate that the proposed framework obtains competitive model performance with standard \(latent\-representation\) models while providing controllable model summaries via text\. The model also outperforms TEARS, a recent baseline for controllable recommendation systems\. Through systematic interventions, we demonstrate the efficacy of the user steering mechanism\.

## Lang\-SVG: Hierarchical Image Vectorization with Language Priors

**Authors:** Xi Liu; Chaoyi Zhou; Run Wang; Jiaang Li; Feng Luo; Junxiang Huang; Siyu Huang

**ID:** 155278 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6rigf2ETWn>) | [PDF](<https://openreview.net/pdf?id=6rigf2ETWn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155278>)

Image vectorization reconstructs raster images as compact scalable vector graphics \(SVG\) representations\. Most of existing vectorization methods optimize for pixel\-level rendering fidelity, where the reconstructed SVGs often lack alignment with human\-perceived object\-part hierarchies, making them difficult to manipulate\.  To address this, this work for the first time studies the problems of hierarchical image vectorization and SVG semantic labeling\.  We propose Lang\-SVG, a tree\-structured SVG representation that encodes SVG primitives with language tags and parent\-child hierarchy\. Lang\-SVG novelly incorporates granularity\-controllable segmentation priors and vision\-language priors into the optimization\-based vectorization pipeline\.  It introduces a Tree\-Guided Pruning and Merging module to reduce redundant multi\-granularity SVG primitives into coherent semantic structures, and an L1\-SAM Prompter to recover missing regions\. It also includes a new SVG semantic tagging method that integrates SVG tree context into multimodal large language models \(MLLMs\) to assign language tags to SVG primitives\. We also propose a new evaluation protocol for image vectorization, measuring structural quality and semantic part alignment beyond reconstruction fidelity\. Experiments demonstrate that Lang\-SVG achieves state\-of\-the\-art performance in both rendering and structural quality\.

## Learning to Correct Geometry in Generated Videos

**Authors:** Weijie Lyu; Tiancheng SHEN; Xiangtai Li; Yujing Wang; Xiaoyuan Wang; Haobo Yuan; Yizhou Zhao; Ming\-Hsuan Yang

**ID:** 154269 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F4Nu5j4xQU>) | [PDF](<https://openreview.net/pdf?id=F4Nu5j4xQU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154269>)

Generated videos often lose geometric consistency under camera motion: structures warp under viewpoint change, parallax becomes inconsistent, and smooth camera movement may collapse into shot\-like transitions\. We argue that this failure is largely a data problem\. In web\-scale video corpora, most visible motion comes from dynamic objects captured by static or weakly moving cameras, leaving only sparse supervision for viewpoint\-induced appearance changes\. To address this, we propose Video Geometry Corrector \(VGC\), a post\-hoc video\-to\-video model trained on synthetic paired supervision\. Starting from real videos with diverse camera motion and pose annotations, we construct VG\-Pairs with a synthetic paired\-supervision data generation pipeline\. Each video clip is treated as a geometry\-consistent target and paired with a distorted counterpart synthesized by a pretrained image\-to\-video inpainting model using trajectory\-adaptive keyframes\. VGC learns to map the distorted input to the geometry\-consistent target without modifying the source generator, and uses optical flow as an auxiliary cue to help disentangle camera motion from object motion\. Experiments on pose\-conditioned and prompt\-driven benchmarks show that VGC improves geometric consistency across multiple source generators, and scaling to a larger backbone further extends the framework toward more general video refinement\.

## Learning Visual Feature\-Based World Models via Residual Latent Action

**Authors:** Xinyu Zhang; Zhengtong Xu; Yutian Tao; Yeping Wang; Yu She; Abdeslam Boularias

**ID:** 148146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvJIeHOjvu>) | [PDF](<https://openreview.net/pdf?id=zvJIeHOjvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148146>)

World models predict future transitions from observations and actions\. Existing works predominantly focus on image generation only\. Visual feature\-based world models, on the other hand, predict future visual features instead of raw video pixels, offering a promising alternative that is more efficient and less prone to hallucination\.  However, current feature\-based approaches rely on direct regression, which leads to blurry or collapsed predictions in complex interactions, while generative modeling in high\-dimensional feature spaces still remains challenging\. In this work, we discover that a new type of latent action representation, which we refer to as \*Residual Latent Action\* \(RLA\), can be easily learned from DINO residuals\. We also show that RLA is predictive, generalizable, and encodes temporal progression\. Building on RLA, we propose \*RLA World Model\* \(RLA\-WM\), which predicts RLA values via flow matching\. RLA\-WM outperforms both state\-of\-the\-art feature\-based and video\-diffusion world models on simulation and real\-world datasets, while being orders of magnitude faster than video diffusion\. Furthermore, we develop two robot learning techniques that use RLA\-WM  to improve policy learning\. The first one is a minimalist world action model with RLA that learns from actionless demonstration videos\. The second one is the first visual RL framework trained entirely inside a world model learned from offline videos only, using a video\-aligned reward and no online interactions or handcrafted rewards\.

## Disentangling Where and When: Factored Spatio\-Temporal Explanations for Video Action Recognition

**Authors:** Bhavan Vasu; Giuseppe Raffa; Prasad Tadepalli

**ID:** 150252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jaIWjThmrT>) | [PDF](<https://openreview.net/pdf?id=jaIWjThmrT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150252>)

Post\-hoc explanation methods for video action recognition typically conflate spatial appearance and temporal dynamics into a single saliency or importance map\.  We propose a perturbation\-based framework that disentangles these contributions into a spatial appearance mask \($M\_a$\) and a temporal motion mask \($M\_m$\)\. The two masks are jointly optimized against a frozen action recognition model through factored perturbation architecture, with nearest frame replacement to identify important temporal dynamics\. A separation penalty discourages the appearance mask from spending budget on frames that the motion mask has already discarded, and a one\-sided ReLU area constraint allows the realized masks to fall below the optimization budget when the input does not require its full extent\. To evaluate these explanations, we introduce a separation protocol that sweeps spatial pixels and temporal frames independently, backed by proofs characterizing the inherent geometric bias of standard Insertion metrics\. Across EPIC\-Kitchens\-55, EGTEA Gaze\+, and Something\-Something V2, our method attains the lowest deletion AUC against leading baselines while producing masks roughly five times sparser\.

## Spectral\-Spatial Interpretation

**Authors:** Haotian Ma; Ruqi Yang; Philip Townsend

**ID:** 151939 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WhTcjrwB9q>) | [PDF](<https://openreview.net/pdf?id=WhTcjrwB9q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151939>)

Post\-hoc image explanations usually reveal \*where\* a model looks through spatial heatmaps, or \*which channels\* matter through global channel scores\. This separation is limiting for multi\-spectral data, where channel relevance is often spatially localized and physically meaningful\. We introduce \*\*Spectral\-Spatial Interpretation \(SSI\)\*\*, a full\-grid attribution method over position\-channel players \(g, c\)\. For each spatial position, SSI fixes the observed surrounding context, defines a conditional game over the channels at that position, and applies the Shapley value to this local game\. The result is a full spectral\-spatial attribution matrix rather than a single heatmap or a global channel ranking\. SSI has a clear local semantics: it satisfies Shapley fairness within each position, and its channel aggregation exactly recovers the position\-level contextual contrast obtained by replacing that entire position with the baseline\. We also distinguish SSI from context\-averaged Owen\-style hierarchical accounting, which respects the same position\-channel grouping but averages over external spatial coalitions\. On HLS Burn Scar, SSI outperforms an MC\-Owen estimator across retained attribution metrics while using only about 6% of its evaluation budget\. Across CUB\-200, EuroSAT, and HLS Burn Scar under both per\-channel mean and zero baselines, SSI achieves the best joint deletion and insertion AUC over dense, flat, and rank\-1 baselines, yields the strongest spectral hit rates and channel deletion, and leads spatial localization on both annotated datasets\.

## XFeat Revisited: Reproducibility and Evaluation of a Lightweight Image Matcher

**Authors:** Lazar Đoković; Aimee Lin

**ID:** 157013 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

We present a reproducibility study of XFeat, a lightweight local feature extractor and matcher designed to identify corresponding points across images efficiently on resource\-constrained hardware\. We re\-implement the architecture based on the paper and supplementary material, re\-evaluate the authors' released checkpoint alongside our re\-implementation, and conduct additional architectural ablations to examine design choices that were not fully justified in the original work\. This distinction between re\-evaluation and reproduction is important, as the paper, supplement, and public code differ in several implementation details, including the backbone layout, fusion block, and training losses\. Empirically, our reproduced models closely match and, in some cases, outperform the re\-evaluated original checkpoint on MegaDepth\-1500 and ScanNet\-1500, supporting the main claim that XFeat provides a strong accuracy–efficiency trade\-off for standard image\-matching benchmarks\. Our ablations provide a more nuanced view of two architectural arguments from the original paper\. In particular, the parallel keypoint branch is important for semi\-dense matching, but its benefit is less pronounced than originally claimed, while the evidence for the specific placement of the single skip\-connection remains inconclusive\. Finally, we reproduce the original downstream evaluations and find close agreement for homography estimation, while Aachen visual localization remains below the reported results, even for the released checkpoint, suggesting sensitivity to underspecified evaluation details\. We then extend the analysis to zero\-shot out\-of\-distribution and cross\-modal matching across retinal, thermal\-visible, and multimodal remote\-sensing imagery, where XFeat remains effective in some settings but degrades sharply under severe modality shifts\.

## Revisiting B2T: Discovering and Mitigating Visual Biases through Keyword Explanations

**Authors:** Faissal El Kayouhi; Aïda Asma; Joey Laarhoven; Fiona Nagelhout

**ID:** 157014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/session/137650>)

This work aims to reproduce and extend the findings of "Discovering and Mitigating Visual Biases through Keyword Explanation" by Kim et al\.\(2024\)\. The paper proposes the B2T framework, which detects and mitigates visual biases by extracting keywords from generated captions\. By identifying biases in datasets, B2T contributes to the prevention of discriminatory behavior in vision\-language models\. We aim to investigate the five key claims from the original paper, namely that B2T \(i\) is able to identify whether a word represents a bias, \(ii\) can extract these keywords from captions of mispredicted images, \(iii\) outperforms other bias discovery models, \(iv\) can improve CLIP zero\-shot prompting with the discovered keywords, and \(v\) identifies labeling errors in a dataset\. To reproduce their results, we use the publicly available codebase and our re\-implementations\. Our findings confirm the first three claims and partially validate the fourth\. We reject the fifth claim, due to the failure to identify pertinent labeling errors\. Finally, we enhance the original work by optimizing the efficiency of the implementation, and assessing the generalizability of B2T on a new dataset\.

## Revisiting "Edit Away and My Face Will not Stay: Personal Biometric Defense against Malicious Generative Editing"

**Authors:** Luis Vitor Zerkowski; Soham Chaudhuri; Finley Helms; Jelle Sombekke; Udit Thakur

**ID:** 157015 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Q1gr80AXU>) | [PDF](<https://openreview.net/pdf?id=5Q1gr80AXU>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

Recent advances in diffusion\-based image editing have enabled highly realistic and accessible manipulation of facial images, raising serious concerns about biometric privacy and malicious misuse\. FaceLock, introduced in Edit Away and My Face Will Not Stay: Personal Biometric Defense against Malicious Generative Editing, proposes an optimization\-based defense that embeds subtle perturbations into images at publication time to induce identity distortion in downstream generative edits\. The method claims prompt\-agnostic effectiveness and strong performance across multiple editing scenarios, supported by open\-source code\. In this paper, we present a systematic reproducibility study of FaceLock that evaluates its technical, quantitative, and qualitative reproducibility\. We assess whether the reported results can be obtained using the released codebase, analyze the correspondence between the paper's algorithmic description and its implementation, and document ambiguities that impact reproducibility\. We further examine quantitative reproducibility by attempting to recover the reported performance trends and relative ranking against baselines\. We, however, were not able to reproduce the originally reported performance trends, and our outputs were generally worse than those presented in the original paper\. Beyond that, we expand the qualitative analysis to a broader set of image–prompt pairs and an additional, harder facial dataset to better test generalization behavior\. While we obtained some successful outputs, only a small fraction of our qualitative results matched the consistently high quality reported by the authors\. Finally, we introduce an extension to the FaceLock method that helps with robustness, and we critically examine the evaluation criteria used to measure defense effectiveness, highlighting limitations of prompt fidelity as a primary metric and arguing for a more explicit consideration of the trade\-off between identity protection and preservation of the original image\. We provide a link to our GitHub repository: https://github\.com/Luizerko/revisiting\_facelock\.

