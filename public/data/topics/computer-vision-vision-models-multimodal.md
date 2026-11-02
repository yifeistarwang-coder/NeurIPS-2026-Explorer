# Computer Vision / Vision Models &amp; Multimodal

计算机视觉 / 视觉模型与多模态

544 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Learning Dynamic Evidence Routes for Vision Transformer Probing

**Authors:** Zice Wang; Zhenyu Zhang

**ID:** 156006 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1CCRjuvAbv>) | [PDF](<https://openreview.net/pdf?id=1CCRjuvAbv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156006>)

_Abstract unavailable from the accessible public sources._

## ManiTaskGen: A Comprehensive Task Generator for Benchmarking and Improving Vision\-Language Agents on Embodied Decision\-Making

**Authors:** Liu Dai; Haina Wang; Weikang Wan; Hao Su

**ID:** 139268 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=anDaczglpj>) | [PDF](<https://openreview.net/pdf?id=anDaczglpj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139268>)

_Abstract unavailable from the accessible public sources._

## SAMAT: A Stereotype\-Aware Multimodal Transformer for Interpretable Misogynistic Meme Detection

**Authors:** Gopendra Singh

**ID:** 156793 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1DJBFS7rLW>) | [PDF](<https://openreview.net/pdf?id=1DJBFS7rLW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156793>)

_Abstract unavailable from the accessible public sources._

## FinMTM: A Multi\-Turn Multimodal Benchmark for Financial Reasoning and Agent Evaluation

**Authors:** Chenxi Zhang; Ziliang Gan; Liyun Zhu; Youwei Pang; Qing Zhang; Rongjunchen Zhang

**ID:** 139640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DtHVW0wUAr>) | [PDF](<https://openreview.net/pdf?id=DtHVW0wUAr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139640>)

The financial domain poses substantial challenges for Vision\-Language Models \(VLMs\) due to specialized chart formats and knowledge\-intensive reasoning requirements\. However, existing financial benchmarks are largely single\-turn and rely on limited question formats, which hinders comprehensive evaluation in realistic application scenarios\. To address this gap, we propose FinMTM, a multi\-turn multimodal benchmark that expands diversity along both data and task dimensions\. On the data side, we curate and annotate 11,133 bilingual \(Chinese and English\) financial QA pairs grounded in commonly used financial visuals, including candlestick charts, statistical plots, and report figures\. On the task side, FinMTM covers single and multiple choice questions, multi\-turn open\-ended dialogues, and agent\-based tasks\. We further design task\-specific evaluation protocols, including a set\-overlap scoring rule for multiple choice questions, a weighted combination of turn\-level and session\-level scores for multi\-turn dialogues, and a composite metric that integrates planning quality with final outcomes for agent tasks\. Extensive experimental evaluation of 22 VLMs reveal their limitations in fine\-grained visual perception, long\-context reasoning, and complex agent workflows\.

## MSP: Modality Self\-Play for Training Multimodal LLMs Without Paired Cross\-Modal Data

**Authors:** Robert Moseley; Md Kaykobad Reza; Ameya Patil; Edward Ayrapetian; Salman Asif

**ID:** 150756 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fdPGkK2acw>) | [PDF](<https://openreview.net/pdf?id=fdPGkK2acw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150756>)

Large multimodal models have achieved remarkable progress by scaling model capacity and training on massive paired multimodal data\. However, this paradigm introduces a fundamental bottleneck: aligned multimodal datasets are expensive to curate, difficult to scale across diverse modality combinations, and increasingly constrain further progress\. We introduce Modality Self\-Play \(MSP\), a training framework for multimodal foundation models based on proxy\-mediated modality composition\. Instead of relying on paired cross\-modal data, MSP uses anchor\-supporting proxy textual descriptions of unseen modalities as semantic bridges during training\. Given an observed modality \(e\.g\., image or audio\), the model generates proxy descriptions for complementary unseen modalities, which are then encoded and aligned with the observed modality through learned bridges, enabling cross\-modal interaction without explicit paired supervision\. Our central hypothesis is that proxy text, combined with contrastively trained pretrained encoders, provides sufficient semantic structure for multimodal composition to emerge\. We show that MSP enables zero\-shot modality composition: models trained only with a real anchor modality and accompanying proxy descriptions can integrate and reason over multiple modalities at inference time despite never observing real paired multimodal data during training\. Empirically, MSP achieves state\-of\-the\-art or competitive performance on multiple multimodal benchmarks\. Ablation studies further demonstrate that learned bridges improve alignment, while anchor\-supporting proxy descriptions enable effective cross\-modal composition\. Together, our results suggest that explicit paired multimodal data may not be necessary for multimodal reasoning, and that scalable proxy\-based alignment provides a promising alternative for training multimodal foundation models\.

## Visual Enhanced Depth Scaling for Multimodal Latent Reasoning

**Authors:** Yudong Han; Yong Wang; Zaiquan Yang; Zhen Qu; Liyuan Pan; Xiangxiang Chu

**ID:** 152883 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PgPuQzvKVS>) | [PDF](<https://openreview.net/pdf?id=PgPuQzvKVS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152883>)

Multimodal latent reasoning has emerged as a promising paradigm that replaces explicit Chain\-of\-Thought \(CoT\) decoding with implicit feature propagation, simultaneously enhancing representation informativeness and reducing inference latency\. By analyzing token\-level gradient dynamics during latent training, we reveal two critical observations: \(1\) visual tokens exhibit significantly smaller gradient norms than their textual counterparts due to inherent language bias, resulting in systematic visual under\-optimization; and \(2\) semantically simple tokens converge rapidly, whereas complex tokens exhibit persistent gradient instability constrained by fixed architectural depths\. To address these limitations, we propose a visual replay module and routing depth scaling to collaboratively enhance visual perception and refine complicated latents for deeper contextual reasoning\. The former module leverages causal self\-attention to estimate token saliency, reinforcing fine\-grained grounding through spatially\-coherent constraints\. Complementarily, the latter mechanism adaptively allocates additional reasoning steps to complex tokens, enabling deeper contextual refinement\. Guided by a curriculum strategy that progressively internalizes explicit CoT into compact latent representations, our framework achieves state\-of\-the\-art performance across diverse benchmarks while delivering substantial inference speedups over explicit CoT baselines\.

## RotVLA: Rotational Latent Action for Vision\-Language\-Action Model

**Authors:** Qiwei Li; Xicheng Gong; Xinghang Li; Peiyan Li; Quanyun Zhou; Hangjun Ye; Jiahuan Zhou; Yadong Mu

**ID:** 152079 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VcnKuCNmo3>) | [PDF](<https://openreview.net/pdf?id=VcnKuCNmo3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152079>)

_Abstract unavailable from the accessible public sources._

## ARK: A Dual\-Axis Multimodal Retrieval Benchmark along Reasoning and Knowledge

**Authors:** Yijie Lin; Guofeng Ding; Haochen Zhou; Haobin Li; Mouxing Yang; Xi Peng

**ID:** 155756 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3BQmlx6S58>) | [PDF](<https://openreview.net/pdf?id=3BQmlx6S58>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155756>)

_Abstract unavailable from the accessible public sources._

## Failing Forward: Adaptive Failure\-Informed Learning for Vision\-Language\-Action Models

**Authors:** Meng Zheng; Samhita Marri; Anwesa Choudhuri; Benjamin Planche; Zhongpai Gao; Van N Nguyen; Terrence Chen; Girish Chowdhary; Ziyan Wu

**ID:** 155737 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Kqyrxf0U4>) | [PDF](<https://openreview.net/pdf?id=3Kqyrxf0U4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155737>)

_Abstract unavailable from the accessible public sources._

## I Have a Stream: Making Self\-Supervised Learning Work on Continuous Video

**Authors:** Ivan Martinović; Lukas Knobel; Yuki Asano

**ID:** 151662 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YycCzzfac3>) | [PDF](<https://openreview.net/pdf?id=YycCzzfac3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151662>)

_Abstract unavailable from the accessible public sources._

## Robust Reversible Recovery for Adversarially Protected JPEG Images

**Authors:** Dahao Fu; Jiangqun Ni

**ID:** 156070 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0fU0T11R2P>) | [PDF](<https://openreview.net/pdf?id=0fU0T11R2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156070>)

Reversible adversarial examples \(RAEs\) can disrupt access by malicious AI models while ensuring recoverability for authorized users\. However, practical image circulation is dominated by JPEG files, whereas most existing RAE methods perturb spatial\-domain images and are therefore poorly matched to compression, re\-saving, and coefficient quantization\. Beyond JPEG compatibility, circulation imposes a stricter and underexplored requirement that protected images should be perturbed in the JPEG domain, remain adversarial after spatial reconstruction, preserve visual fidelity, incur modest file\-size growth, and remain recoverable under channel attacks such as recompression, noise, cropping, resizing, and platform re\-saving\. This paper presents the first systematic study of robust reversible adversarial protection for post\-processed JPEG images and proposes SRAP\-JPEG, a Synchronized Reversible Adversarial Protection framework on quantized DCT coefficients\. SRAP\-JPEG decouples adversarial perturbation from reversible recording by injecting perturbations into luminance coefficients, hiding recovery records in paired chrominance coefficients through a secret\-key mapping, and adopting coefficient\-adaptive allocation to trade off reversible capacity, attack strength, visual quality, and file\-size growth\. It crafts protective perturbations directly in the JPEG coefficient domain by propagating gradients from classification or vision\-language objectives through the chain rule\. For authorized recovery, SRAP\-JPEG integrates block\-phase synchronization, embedding\-state identification, and coefficient restoration, enabling exact recovery of intact protected JPEGs and high\-fidelity recovery after practical distortions\. Experiments on ImageNet and MS\-COCO show that SRAP\-JPEG achieves an 81\.82\\% average attack success rate on ten mainstream classifiers, degrades CLIP\-based image\-text retrieval, and recovers distorted protected images with high visual fidelity, including 41\.60 dB PSNR after JPEG recompression at QF 70 and 59\.51 dB on the aligned uncropped region after edge cropping at ratio 0\.25\.

## Motion\-o: Trajectory\-Grounded Video Reasoning

**Authors:** Bishoy Galoaa; Shayda Moezzi; Xiangyu Bai; Sarah Ostadabbas

**ID:** 148766 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vE3fdoUg2h>) | [PDF](<https://openreview.net/pdf?id=vE3fdoUg2h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148766>)

Recent video reasoning models increasingly produce spatio\-temporal evidence chains that localize objects at specific timestamps\. While these traces improve interpretability by grounding $\\textit\{where\}$ and $\\textit\{when\}$ evidence appears, they often leave the motion connecting observations, the $\\textit\{how\}$, implicit\. This makes dynamic and trajectory\-dependent claims difficult to supervise, verify, or penalize when unsupported by the video\. We formalize this missing component as Spatial\-Temporal\-Trajectory \(STT\) reasoning and introduce $\\textbf\{Motion\-o\}$, a motion\-centric extension to vision\-language models \(VLMs\) that makes trajectories explicit and verifiable\. Motion\-o augments evidence chains with Motion Chain of Thought \(MCoT\), a structured pathway that represents object motion through a discrete $\\texttt\{\\\}$ tag summarizing direction, speed, and scale change\. To supervise MCoT, we densify sparse spatio\-temporal annotations into object tracks and derive motion descriptors from centroid displacement and box\-area change\. We then train with complementary rewards for trajectory consistency and visual grounding, including a perturbation\-based signal that penalizes motion descriptions that remain unchanged when temporal evidence is removed\. Across multiple video understanding benchmarks, Motion\-o consistently improves trajectory\-faithful reasoning without architectural modifications\. These results suggest that an explicit motion interface can complement existing VLM pipelines by converting implicit dynamics into verifiable evidence\.

## CoPE\-VideoLM: Leveraging Codec Primitives For Efficient Video Language Modelling

**Authors:** Sayan Deb Sarkar; Rémi Pautrat; Ondrej Miksik; Marc Pollefeys; Iro Armeni; Mahdi Rad; Mihai Dusmanu

**ID:** 152600 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RvGMXiyXQI>) | [PDF](<https://openreview.net/pdf?id=RvGMXiyXQI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152600>)

Video Language Models enable AI systems to understand temporal dynamics in videos\. To fit within the maximum context window constraint, current methods use keyframe sampling which often misses both macro\-level events and micro\-level details due to the sparse temporal coverage\. Furthermore, processing full images and their tokens for each frame incurs substantial computational overhead\. We address these limitations by leveraging video codec primitives \(specifically motion vectors and residuals\) which natively encode video redundancy and sparsity without requiring expensive full\-image encoding for most frames\. To this end, we introduce lightweight transformer\-based encoders that aggregate codec primitives and align their representations with image encoder embeddings through a pre\-training strategy  that accelerates convergence during end\-to\-end fine\-tuning\. Our approach, \*CoPE\-VideoLM\*, reduces the time\-to\-first\-token by up to 86% and token usage by up to 93% compared to standard VideoLMs\. Moreover, by varying the keyframe and codec primitive densities, we maintain or exceed performance compared on 14 diverse video understanding benchmarks, spanning general question answering, temporal and motion reasoning, long\-form understanding, and spatial scene understanding\.

## AmbiguousWorld: Benchmarking and Resolving Ambiguous Instructions in Video World Models

**Authors:** Bo Wang; Sen Cui; Jin Li; Ming Hei Huang; Zhikang Chen; Min Zhang; Guocai Yao; Changshui Zhang

**ID:** 155466 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5ORWSQZFqy>) | [PDF](<https://openreview.net/pdf?id=5ORWSQZFqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155466>)

Translating high\-level, under\-specified human commands into coherent video is fundamentally challenging\. Current video generation models lack explicit reasoning capabilities and typically fail to understand ambiguous instructions, frequently resulting in physically inconsistent and causally disjointed generation\. To address this, we introduce AmbiguousWorld, a novel inference\-time reasoning framework that transforms video generation into a multi\-modal Tree of Thoughts\. We employ a Vision\-Language Model as both a semantic planner to dynamically decompose fuzzy instructions into actionable subgoals, and as a closed\-loop critic to prune invalid trajectories by evaluating speculative paths across multiple physical and functional dimensions\. To systematically assess this, we annotate the first embodied video generation benchmark targeting ambiguous instructions based on the DROID dataset, and design a multi\-dimensional VLM evaluation framework\. Empirical results on state\-of\-the\-art baselines  demonstrate that our framework yields substantial improvements, boosting absolute Task Success by up to 29\.0\\% and the overall generative consistency weighted score by 24\.2 points\. Furthermore, we validate the effectiveness of our VLM evaluation framework through rigorous comparison with human assessment\.

## UniPath: Adaptive Coordination of Understanding and Generation for Unified Multimodal Reasoning

**Authors:** Haoyue Bai; Yinyi Luo; Wenwen Wang; Qingsong Wen; Jindong Wang

**ID:** 153352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M1C4LYZjQz>) | [PDF](<https://openreview.net/pdf?id=M1C4LYZjQz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153352>)

Unified multimodal models \(UMMs\) aim to integrate understanding and generation within a single architecture\.  However, it remains underexplored how to effectively coordinate these two capabilities for more effective and efficient reasoning\.  Existing coordination approaches either perform coupling during training, without explicit inference\-time coordination, or impose a fixed coordination pattern for all inputs\. In this work, we show that multimodal tasks exhibit substantial coordination\-path diversity: different inputs favor different coordination paths\.  This suggests that exploiting such diversity is key to improving performance\. We propose UniPath, a framework for adaptively modeling and exploiting coordination\-path diversity\.  Instead of enforcing a single coordination pattern, we represent task solving as the selection and execution of a path, ranging from direct answering to textual inference, visual\-thought construction, and hypothesis\-based exploration\.  We construct role\-aligned trajectories to train a path\-conditioned executor and introduce a lightweight planner mechanism to enable input\-dependent path selection\. Experiments show that leveraging coordination\-path diversity improves performance over fixed coordination strategies while providing interpretable intermediate behaviors\. The code is available at: https://anonymous\.4open\.science/r/UniPath\.

## BoxTuning: Object\-Aware Visual Prompting for  Multimodal Model Fine\-Tuning

**Authors:** Zekun Qian; Ruize Han; Wei Feng

**ID:** 149433 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q6gwQDgllS>) | [PDF](<https://openreview.net/pdf?id=q6gwQDgllS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149433>)

Object\-level spatial\-temporal understanding is essential for video question answering, yet existing multimodal large language models \(MLLMs\) encode frames holistically and lack explicit mechanisms for fine\-grained object grounding\. Recent work addresses this by serializing bounding box coordinates as text tokens, but this text\-coordinate paradigm suffers from a fundamental \*modality mismatch\*: object information is inherently visual, yet encoding it as text incurs a high token cost that forces aggressive temporal downsampling\. We propose \*BoxTuning\*, an object\-aware visual prompting framework for multimodal model fine\-tuning that moves spatial\-temporal object states from text\-coordinate serialization into the visual stream while retaining only object identity in a compact text legend\. Colored bounding boxes and trajectory trails encode geometry and motion on video frames, while the color\-to\-object legend provides the minimal textual identity bridge\. This reduces the token cost significantly, achieving 87\-93\\% text token reduction in practice\. It also preserves full temporal resolution, where the trajectory trails further encode inter\-frame motion direction and speed within each keyframe, recovering fine\-grained dynamics that text\-coordinate methods are forced to discard\. Experimental results on five video QA benchmarks \(CLEVRER, Perception Test, STAR, NExT\-QA, IntentQA\) show that BoxTuning surpasses text\-coordinate baselines on spatially oriented tasks and avoids their degradation on reasoning\-centric tasks, establishing object\-aware visual prompting as a natural and efficient way to convey object information to MLLMs\.

## Do Composed Image Retrieval Benchmarks Require Multimodal Composition?

**Authors:** Matteo Attimonelli; Alessandro De Bellis; Aryo Gema; Rohit Saxena; Monica Sekoyan; Wai\-Chung Kwan; Claudio Pomo; Alessandro Suglia; Dietmar Jannach; Tommaso Di Noia; Pasquale Minervini

**ID:** 139137 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ihmgZB5OWQ>) | [PDF](<https://openreview.net/pdf?id=ihmgZB5OWQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139137>)

Composed Image Retrieval \(CIR\) is a multimodal retrieval task where a query consists of a reference image and a textual modification, and the goal is to retrieve a target image satisfying both\. In principle, strong performance on CIR benchmarks is assumed to require multimodal composition, i\.e\., combining complementary information from reference image and textual modification\. In this work, we show that this assumption does not always hold\. Across four widely used CIR benchmarks and eleven Generalist Multimodal Embedding models, a large fraction of queries can be solved using a single modality \(from 32\.2% to 83\.6%\), revealing pervasive unimodal shortcuts\. Thus, high CIR performance can arise from unimodal signals rather than true multimodal composition\. To better understand this issue, we perform a two\-stage audit\. First, we identify shortcut\-solvable queries through cross\-model analysis\. Second, we conduct human validation on 4,741 shortcut\-free queries, of which only 1,689 are well\-formed, with common issues including ambiguous edits and mismatched targets\. Re\-evaluating models on this validated subset reveals qualitatively different behaviour: queries can no longer be solved with a single modality, and successful retrieval requires combining both inputs\. While accuracy decreases, reliance on multimodal information increases\. Overall, current CIR benchmarks conflate shortcut\-solvable, noisy, and genuinely compositional queries, leading to an overestimation of model capability in multimodal composition\. Datasets and annotations are available here\.

## Driving Video Retrieval for Complex Queries with Structured Grounding

**Authors:** Manyi Yao; Sparsh Garg; Christian Shelton; Amit Roy\-Chowdhury; Abhishek Aich

**ID:** 152910 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PUUBmJIlvZ>) | [PDF](<https://openreview.net/pdf?id=PUUBmJIlvZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152910>)

Video retrieval at scale is central to data curation and safety validation in autonomous driving, where users want to find not only scenes but also dynamic events such as cut\-ins and hard braking\. Existing vision\-language and keyword\-based retrieval methods often miss these events because the relevant motion may not be explicitly described in text or captured by lexical overlap\. Rule\-based retrieval can encode such events more directly, but it is brittle: generated or hand\-written rules often fail when their assumptions do not match real driving data\. We propose STRIVE\-D, a data\-calibrated retrieval framework for driving videos\. STRIVE\-D uses weakly labeled in\-domain videos to estimate when a query rule is reliable, adapt rules that mismatch observed data, and fuse calibrated rule scores with vision\-language and keyword\-based retrieval signals\. Across three driving benchmarks, including newly released human annotations for event retrieval on DrivingDojo, STRIVE\-D achieves up to a 30\.4% relative improvement over state\-of\-the\-art retrieval models\.

## Learning Agentic World Vision\-Language\-Action Models for Autonomous Driving

**Authors:** Guoqing Wang; Pin Tang; Xiangxuan Ren; Chao Ma

**ID:** 150102 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kgHUnDxpyw>) | [PDF](<https://openreview.net/pdf?id=kgHUnDxpyw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150102>)

Recent progress in integrating vision\-language\-action \(VLA\) models with world modeling has significantly advanced end\-to\-end autonomous driving by allowing systems to reason about imagined futures instead of merely reacting to current observations\. However, most world VLA models generate future frames at the pixel level with plenty of dense visual tokens\. Although such generated futures can be visually plausible, they preserve many driving\-irrelevant appearance details, i\.e\., only a small portion of the tokens directly encode planning\-relevant factors, such as agent geometry, motion dynamics, and interactions\. This introduces a significant performance bottleneck\. An important question thus arises: what world state should a world VLA model reason over to support planning beyond pixel\-level prediction? We argue that planning\-oriented world modeling should focus on an agentic latent state that captures the interactions between objects in the driving scene over time\. As such, we introduce AgentWorld, an agentic world VLA model that uses discrete agent tokens jointly for reasoning and trajectory planning\. Each token is dynamically grounded to a surrounding agent associated with its object's state, such as semantic identity, 3D geometry, motion, and interaction context\. AgentWorld learns these tokens through three key processes: explicit geometric grounding, reasoning\-oriented supervised fine\-tuning, and agent\-oriented reinforcement learning\. Extensive open\-loop and closed\-loop experiments under diverse driving scenarios show that AgentWorld enhances planning capabilities, fully exploits visual evidence and agent dynamics, and yields interpretable agentic world states\. The code will be made publicly available\.

## Disentangled Multimodal Learning for Scalable Dynamic IR\-Drop Analysis

**Authors:** Yihan Wen; Su Zheng; Tianshu Hou; Shiping Wu; Yuzhou Feng; Bei Yu

**ID:** 153847 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IImqhmEtiG>) | [PDF](<https://openreview.net/pdf?id=IImqhmEtiG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153847>)

The robust delivery of power is a non\-negotiable prerequisite for the operational reliability of modern chips\. Even a single unanticipated IR\-drop violation can cause system\-level crashes, making IR\-drop a strict criterion in chip signoff\. However, current methodologies ranging from physics\-based simulators to recent learning\-based surrogates remain bottlenecked by an inherent coupling between spatial topology and temporal evolution\.  This paradigm is intrinsically unscalable when billion\-gate spatial complexity converges with the extensive workloads of full\-testbench verification\. In this work, we reformulate dynamic IR\-drop assessment as a disentangled multimodal learning problem and introduce Layout Waveform Fusor \(LWFusor\), which decouples invariant spatially static chip layouts from transient switching waveforms and fuses them through physics\-aligned end\-to\-end learning\. By projecting activity sequences directly into the spatial potential domain, the proposed approach departs from traditional time\-stepping bottlenecks and makes long\-horizon power integrity analysis computationally efficient\. Experiments on industrial\-scale designs demonstrate orders\-of\-magnitude acceleration while maintaining high fidelity in hotspot capture, highlighting a new trajectory for power integrity sign\-off in large\-scale EDA workflows\.

## BusterX: MLLM\-Powered AI\-Generated Video Forgery Detection and Explanation

**Authors:** Haiquan Wen; Yiwei He; Zhenglin Huang; Tianxiao Li; Zihan Yu; Xingru Huang; Lu Qi; Baoyuan Wu; Xiangtai Li; Guangliang Cheng

**ID:** 151123 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=coouK1prvK>) | [PDF](<https://openreview.net/pdf?id=coouK1prvK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151123>)

As generative video models become increasingly realistic, detecting AI\-generated videos requires systems that offer both accuracy and interpretability\. However, applying Multimodal Large Language Models \(MLLMs\) to video forensics is currently limited by outdated datasets, simplistic evaluation protocols, and a reliance on black\-box classification\. To address these issues, we introduce a comprehensive dataset, benchmark, and baseline model for video forgery detection\. First, we present \\textbf\{GenBuster\-200K\}, a fair dataset of over 200,000 high\-quality videos sourced from state\-of\-the\-art generators, featuring diverse real\-world scenarios\. Second, we propose \\textbf\{GenBuster\-Bench\}, a diagnostic benchmark spanning three progressive tracks \(In\-Domain, Out\-of\-Domain, and In\-the\-Wild\) to evaluate models across \\textit\{domain shifts\} and \\textit\{generational shifts\}\. It also introduces an MLLM\-as\-a\-Judge protocol to assess the quality of the generated forensic explanations\. Finally, we develop \\textbf\{BusterX\}, an MLLM baseline with RL training\. Instead of direct binary classification, BusterX formulates detection as a visual reasoning task, where the generated reasoning chain serves as detector itself\. Experimental results demonstrate that BusterX outperforms several leading MLLMs \(e\.g\., Qwen3\.5, Claude\-Sonnet\-4\.6\) in both detection accuracy and rationale quality\.

## ReSMap: Recasting Satellite Priors for Robust and Accurate Online HD Map Construction

**Authors:** Kyungmin Kim; Sumin Lee; Sungoh Jeong; DoHyun Lim; Seonghyun Park; Soonmin Hwang

**ID:** 149564 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pBNwXqI5Q2>) | [PDF](<https://openreview.net/pdf?id=pBNwXqI5Q2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149564>)

Despite recent advances in camera\-based online HD map construction, these systems remain susceptible to sensor failures due to their reliance on onboard cameras\. In contrast, satellite images remain available independently of real\-time sensing conditions as they are cached offline\. Existing methods utilizing satellite images, however, primarily leverage them under nominal conditions, without explicitly addressing as redundancy when sensor degrades\. To address this gap, we propose ReSMap, a redundancy\-aware camera\-satellite fusion framework for robust online HD map construction\. Our framework explicitly leverages satellite images as a complementary source to improve robustness against camera failures\. A Predict\-then\-Fuse \(PTF\) module fuses camera and satellite BEV features by using each branch's own prediction confidence as a per\-pixel reliability weight, with no learned router\. An Object\-centric cooperative Multi\-modal Query \(OCMQ\) decoder then propagates this isolation to the query level: each modality cross\-attends only to its own BEV, and per\-modality updates are merged through a learned per\-token gate\. Our model achieves state\-of\-the\-art performance on nuScenes across all splits and range settings\. More importantly, it also sets the new state\-of\-the\-art under camera\-failure scenarios, demonstrating that satellite images serve not only as a strong prior but as practical redundancy for robust online HD mapping\.

## Robust Task\-Aware State Estimation from Pre\-trained Perception

**Authors:** Guy Azran; Sarah Keren

**ID:** 151606 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZJGqecJnb8>) | [PDF](<https://openreview.net/pdf?id=ZJGqecJnb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151606>)

Agents that perform state estimation using pretrained perception models, e\.g\., Vision\-Language Models \(VLMs\), face the fundamental challenge that predictions are uncertain\. Still, most approaches determinize these predictions into a single best\-guess state and make decisions as if it were ground truth\. This is brittle because when the guess is wrong, the agent's decisions may be unsafe or infeasible\. At the other extreme, maintaining a full distribution over symbolic states is often intractable\. We propose a middle path, drawing on the underlying probabilities the perception model already produces \(e\.g\., a VLM's output\-layer token distributions\) to construct a θ\-confidence Minimal Belief Set \(MBSθ\), a minimal subset of states whose cumulative probability meets a user\-defined threshold\. The minimality of an MBSθ ensures that the agent considers only the most likely states, enhancing robustness in downstream decision\-making while maintaining computational tractability\. Using a novel three\-layered belief system, we efficiently approximate individual state probabilities from per\-feature predictions and task\-level constraints, on which we base our MBSθ construction, while maintaining only a lean factored representation of the belief\. Our algorithm, PRaVaSS, takes advantage of the unique structure of this belief system to construct an MBSθ with correctness guarantees and polynomial complexity\. Using a VLM as the backbone of our state estimator, we validate our method's theoretical properties, scalability with problem size, and improvement of downstream decision\-making when used in a task planning pipeline\.

## PRISM\-Bench: A Benchmark of Puzzle\-Based Visual Tasks with CoT Error Detection

**Authors:** Cheng Wan; Yusu Qian; Qingyu Zhao

**ID:** 139756 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZHbONMpgQ>) | [PDF](<https://openreview.net/pdf?id=6ZHbONMpgQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139756>)

Multimodal large language models \(MLLMs\) have achieved remarkable progress on vision–language tasks, yet their reasoning processes remain sometimes unreliable\. We introduce PRISM\-Bench, short for Puzzle Reasoning with In\-Sequence Mistakes, a benchmark of puzzle\-based visual challenges designed to evaluate not only whether models can solve problems, but how their reasoning unfolds\. Unlike prior evaluations that measure only final\-answer accuracy, PRISM\-Bench introduces a diagnostic task: given a visual puzzle and a step\-by\-step chain\-of\-thought \(CoT\) containing exactly one error, models must identify the first incorrect step\. This setting enables fine\-grained assessment of logical consistency, error detection, and visual reasoning\. The puzzles in PRISM\-Bench require multi\-step symbolic, geometric, and analogical reasoning, resisting shortcuts based on superficial pattern matching\. Evaluations across state\-of\-the\-art MLLMs reveal a persistent gap between fluent generation and faithful reasoning: models that produce plausible CoTs often fail to locate simple logical faults\. By disentangling answer generation from reasoning verification, PRISM\-Bench offers a sharper lens on multimodal reasoning competence and underscores the need for diagnostic evaluation protocols in the development of trustworthy MLLMs\.

## Stability\-Aware Self\-Training for CLIP under Cross\-Modal Anchoring Mismatch

**Authors:** Siyuan LIU; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 149173 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sKdtoMZXRC>) | [PDF](<https://openreview.net/pdf?id=sKdtoMZXRC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149173>)

Self\-training is a practical way to adapt CLIP with limited supervision, but its performance is highly sensitive to pseudo\-label reliability\. We identify an important failure mode in CLIP adaptation: temporal prediction instability, where a target sample repeatedly flips its prediction across epochs\. We provide a perspective based on cross\-modal anchoring mismatch: the decision geometry induced by pretrained text anchors can deviate from the local visual cluster structure of the target domain\. This mismatch can make ambiguous target samples susceptible to prediction flips during adaptation, whereas target\-aligned anchoring produces more stable pseudo\-labels\. Motivated by this observation, we propose Stability\-Aware Self\-Training \(SAST\), centered on Stability\-Weighted Image Prototypes \(SWIP\)\. SWIP builds class\-wise visual anchors from temporally stable target samples to provide more reliable adaptation references\. We further add a lightweight text\-side refinement to reduce confusion\-induced instability, and combine the two streams with an adaptive fusion rule\. Across six standard benchmarks and three adaptation settings, SAST consistently outperforms strong baselines\. The results suggest that explicitly modeling temporal stability is an effective route to more robust CLIP adaptation under self\-training\.

## Mitigating Asymmetric Boundary Encroachment in Continual Learning of Vision\-Language Models

**Authors:** Mingfeng Li; Xinyang Chen; Xiucheng Li; Weili Guan; Liqiang Nie

**ID:** 149958 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=luUDOdK0bX>) | [PDF](<https://openreview.net/pdf?id=luUDOdK0bX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149958>)

When learning new concepts sequentially, Vision\-Language Models \(VLMs\) face forgetting that degrades both previously acquired tasks and inherent zero\-shot capabilities\. This challenge is particularly pronounced in the Cross\-domain Task\-Agnostic Incremental Learning \(X\-TAIL\) setting, where the absence of explicit task identifiers forces diverse concepts to coexist within a unified and crowded multi\-modal space\. In this context, we identify an underexplored vulnerability termed Asymmetric Boundary Encroachment \(ABE\)\. Even when historical feature spaces remain stable, unconstrained new text features actively encroach upon these established sub\-spaces during training\. To systematically counteract ABE, we propose a unified framework\. First, we introduce Analytic Decision Boundary \(ADB\), which constructs a geometric defense by enforcing an analytic margin derived from cumulative statistics to secure historical multi\-modal boundaries\. Furthermore, we integrate Orthogonal Visual Adaptation \(OVA\) and Analytic Ridge Classifier \(ARC\) to safely evolve the visual backbone and enhance joint inference\. Experiments under X\-TAIL setting demonstrate that our framework effectively mitigates ABE and consistently achieves new state\-of\-the\-art performance\. Our code is available at https://anonymous\.4open\.science/r/abe\-cl\-vlm\.

## CURE: Visual Reprogramming of Vision\-Language Models under Limited Supervision

**Authors:** Lingzhi Wang; Wei Wang; Xinyang Chen

**ID:** 155870 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2H603JxvpD>) | [PDF](<https://openreview.net/pdf?id=2H603JxvpD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155870>)

Visual reprogramming \(VR\) efficiently repurposes pre\-trained vision\-language models for new image classification tasks by adding trainable patterns to inputs without modifying the backbone\. Nevertheless, existing VR methods heavily depend on labeled data and thus suffer substantial performance degradation under limited supervision \(i\.e\., scarce labeled images\)\. We introduce semi\-supervised learning \(SSL\) into VR to exploit abundant unlabeled images and enhance data efficiency\. However, directly applying generic SSL techniques often amplifies biases in unlabeled posteriors and destabilizes VR training\. To address these challenges, we propose \*\*CURE\*\* \(\*\*C\*\*onsistency and \*\*U\*\*nlabeled \*\*R\*\*ecalibration with Confidence\-Margin \*\*E\*\*nhancement\), a semi\-supervised VR framework comprising two key components: \*\(i\)\* Recalibreted Gaussian Confidence\-Margin Soft Weighting to dynamically adjust sample importance; \*\(ii\)\* Dual\-attribute Consistency Regularization to ensure consistency across attribute prompts\. Extensive experiments show that CURE consistently outperforms both existing VR methods and direct SSL extensions, improving average classification accuracy by \*\*5\.06\*\* and \*\*6\.67\*\* percentage points across twelve widely\-used benchmarks for limited supervision tasks\. Our code is available at https://anonymous\.4open\.science/r/CURE\-93E2/\.

## VLRS\-Bench: A Vision\-Language Reasoning Benchmark for Remote Sensing

**Authors:** Zhiming Luo; Hebaixu Wang; Haonan Guo; Jing Zhang; Bo Du

**ID:** 139821 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2gu0vq1mXX>) | [PDF](<https://openreview.net/pdf?id=2gu0vq1mXX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139821>)

Recent advancements in Multimodal Large Language Models \(MLLMs\) have enabled complex reasoning\. However, existing remote sensing \(RS\) benchmarks remain heavily biased toward perception tasks, such as object recognition and scene classification\. This limitation hinders the development of MLLMs for cognitively demanding RS applications\. To address this, we propose a Vision Language ReaSoning Benchmark \(VLRS\-Bench\), which is the first benchmark exclusively dedicated to complex RS reasoning\. Structured across the three core dimensions of Cognition, Decision, and Prediction, VLRS\-Bench comprises 2,000 question\-answer pairs with an average question length of 130\.19 words, spanning 14 tasks and up to eight temporal phases\. VLRS\-Bench is constructed via a specialized pipeline that integrates RS\-specific priors and expert knowledge to ensure geospatial realism and reasoning complexity\. Experimental results reveal significant bottlenecks in existing state\-of\-the\-art MLLMs, providing critical insights for advancing multimodal reasoning within the remote sensing community\.

## Evidence\-RL: Towards Evidence\-intensive Visual Reasoning

**Authors:** Haojie Huang; Xinlei Yu; Chengming Xu; Zhangquan Chen; Cheng Yang; Qingdong He; Yu Yang; Jiangning Zhang; Xiaobin Hu

**ID:** 150393 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iOZY3TyfNU>) | [PDF](<https://openreview.net/pdf?id=iOZY3TyfNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150393>)

Vision\-Language Models \(VLMs\) should answer from concrete image evidence rather than language priors, dataset shortcuts, or irrelevant visual context\. Existing perception\-aware post\-training methods encourage image use through global perturbations or attention proxies, but they do not test whether a sampled answer causally depends on the local evidence that supports it\. We propose Counterfactual Evidence Disentanglement \(CED\), a training\-time evidence audit for VLM grounding\. For each response, CED neutralizes an object\-centric Evidence Region and compares the resulting support drop against matched non\-evidence Regions\. We combine this signal with answer correctness inside GRPO, rewarding correct answers that rely on the evidence path rather than shortcut or nuisance paths\. CED uses weak object\-level proposals, requires no question\-specific evidence annotations, and adds no inference\-time overhead\. Across nine public benchmarks and four backbones, CED outperforms prior RL\-based post\-training methods, with targeted analyses verifying its object\-centric signal\.

## Scaling Laws for Multimodal Data Mixtures

**Authors:** Aditi Khandelwal; Ayush Kumar Tarun; Yixuan Xu; Imanol Schlag; Golnoosh Farnadi; Siva Reddy; Luke Zettlemoyer; Antoine Bosselut

**ID:** 148475 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xX1gcyTLbF>) | [PDF](<https://openreview.net/pdf?id=xX1gcyTLbF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148475>)

Frontier AI systems are increasingly natively multimodal, jointly pretrained on multiple modalities, such as text, vision, and audio\. However, the scientific understanding of the multimodal data mixtures used to pretrain these systems \-\-\- how much of each modality to mix, and at what potential interference cost to the others \-\-\- is largely absent or gatekept\. In this work, we derive data mixing scaling laws for three modalities: text, vision, and audio\. Multimodal Large Language Models \(MLLMs\) increasingly adopt Mixture\-of\-Experts \(MoE\) architectures, as MoEs scale efficiently and partially limit cross\-modal interference\. We therefore use MoEs to conduct 268 experiments ranging from 457M to 8\.3B parameters, on up to 150 billion tokens\. Our work leads to multiple actionable insights into multimodal data mixing for training MLLMs\. First, compute optima are modality\-specific: audio modality is model\-heavy, favouring scaling parameters over tokens, while text and vision require balanced scaling of model size and data\. Second, repeating vision or audio data beyond 2x yields negligible benefits\. Finally, cross\-modal interactions are highly asymmetric: vision strongly interferes with audio, while audio provides mild positive transfer to text and vision despite competing for shared capacity\. Overall, we provide a principled foundation for understanding the multimodal data mixtures needed to train frontier MLLMs\.

## RankAlign: Unsupervised Vision\-Language Representation Alignment via Rank Transformation

**Authors:** Enzhe Zhao; Marco Fiorucci; Lamberto Ballan

**ID:** 149742 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ngwv68jt7S>) | [PDF](<https://openreview.net/pdf?id=ngwv68jt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149742>)

The Platonic Representation Hypothesis suggests that vision and language models converge toward a shared latent structure, yet the unsupervised alignment of unpaired modalities remains a fundamental challenge\. Current methods rely on direct comparisons of intra\-modality similarity kernels, which are often incommensurate due to disparate scales and representation densities\. This mismatch yields ill\-conditioned optimization landscapes, hindering stable alignment\. To address this, we propose RankAlign, a framework that independently transforms each within\-modality kernel into a rank\-based representation of relative neighbor relationships\. By shifting from absolute similarity values to ordinal relational geometry, RankAlign ensures structural consistency while remaining robust to modality\-specific distortions\. We  show that rank\-based transformation reshapes similarity distributions, mitigating representation collapse and providing a more discriminative alignment signal\. Experiments demonstrate that RankAlign is noise\-resilient and overcome existing kernel\-based alignment method across diverse datasets, including a medical imaging dataset where subtle class differences typically limit existing approaches alignment approaches\.

## Efficient Test\-time Adaptation through Candidate Verification and Divergence Shifts

**Authors:** Seungmin Oh; Seunghun Kang; Jongbin Ryu

**ID:** 149626 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ofqsXmAtDS>) | [PDF](<https://openreview.net/pdf?id=ofqsXmAtDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149626>)

Vision\-language models \(VLMs\) achieve strong zero\-shot transferability but remain vulnerable to target\-domain shifts at inference time\. Test\-time adaptation \(TTA\) offers a practical remedy, yet most existing VLM\-TTA methods follow a prediction\-side adaptation paradigm\. They use test samples to adjust logits, prototypes, caches, priors, or feature statistics, often incurring additional computational overhead\. In this paper, we take a different perspective and reframe VLM\-TTA as candidate verification rather than prediction adjustment\. We propose \*\*Test\-Time Correction \(TTC\)\*\*, a hypothesis\-based correction framework guided by a simple principle: \*hypothesize, reconstruct, correct\*\. Given a test feature and its top\-$k$ candidate labels, TTC treats each candidate label as a hypothesis, reconstructs the feature within the corresponding latent subspace stored in a memory bank, and measures the resulting \*\*divergence shift\*\*\. This shift quantifies how much the candidate subspace and its relations to other candidates change after the hypothetical insertion of the test feature\. A correct candidate hypothesis induces only a small shift, whereas an incorrect one perturbs the subspace more strongly\. TTC therefore corrects the prediction by selecting the candidate with the minimum aggregated divergence shift\. This parameter\-free candidate verification mechanism avoids iterative optimization and provides a favorable accuracy\-efficiency trade\-off\. Across five TTA settings and 15 benchmark datasets, including zero\-shot classification, domain generalization, few\-shot classification, base\-to\-novel generalization, and cross\-dataset evaluation, TTC consistently improves accuracy over state\-of\-the\-art VLM\-TTA methods while achieving up to $2\\times$ speedup and over $3\\times$ lower memory usage\.

## SIEVES: Selective Prediction Generalizes through Visual Evidence Scoring

**Authors:** Hector G\. Rodriguez; Marcus Rohrbach

**ID:** 150306 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j7Y9kxJJPM>) | [PDF](<https://openreview.net/pdf?id=j7Y9kxJJPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150306>)

Multimodal large language models \(MLLMs\) achieve ever\-stronger performance on visual\-language tasks\. Even as traditional visual question answering benchmarks approach saturation, reliable deployment requires satisfying low error tolerances in real\-world out\-of\-distribution \(OOD\) scenarios\. Precisely, selective prediction aims to improve coverage, i\.e\.\\ the share of inputs the system answers, while adhering to a user\-defined risk level\. This is typically achieved by assigning a confidence score to each answer and abstaining on those that fall below a certain threshold\. To enable reliable generalization, we require reasoner models to produce localized visual evidence while answering, and design a selector that explicitly learns to estimate the quality of the localization provided by the reasoner\. We show that SIEVES \(Selective Prediction through Visual Evidence Scoring\) improves coverage by up to three times on challenging OOD benchmarks \(V\* Bench, HR\-Bench\-8k, MME\-RealWorld\-Lite, VizWiz, and AdVQA\), compared to non\-grounding baselines\. Beyond better generalization to OOD tasks, the design of the SIEVES selector enables transfer to proprietary reasoners without access to their weights or logits, such as o3 and Gemini\-3\-Pro, providing coverage boosts beyond those attributable to accuracy alone\. We highlight that SIEVES generalizes across all five tested OOD datasets and reasoner models \(Pixel\-Reasoner, o3, and Gemini\-3\-Pro\), without benchmark\- or reasoner\-specific training or adaptation\.

## PixFoundation 2\.0: Do Video Multi\-Modal LLMs Use Motion in Visual Grounding?

**Authors:** Mennatullah Siam

**ID:** 139117 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9wJGm2f4P>) | [PDF](<https://openreview.net/pdf?id=k9wJGm2f4P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139117>)

_Abstract unavailable from the accessible public sources._

## Diffusion Meta\-Prompting and Steering for Generalizable Foundation Model Adaptation

**Authors:** Deepak Sridhar; Yi Li; Kartikeya Bhardwaj; Shuangjun Liu; TAOTAO JING; Yuan Li; Shuai Zhang; Jiancheng Lyu; Dashan Gao; Nuno Vasconcelos

**ID:** 154312 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EbyKAh8h40>) | [PDF](<https://openreview.net/pdf?id=EbyKAh8h40>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154312>)

_Abstract unavailable from the accessible public sources._

## Seeing Through the Chain: Understanding and Mitigating Hallucinations in Multimodal Large Reasoning Models

**Authors:** Hao Fang; Jinyu Li; Jiawei Kong; Tianqu Zhuang; Kuofeng Gao; Bin Chen; Shu\-Tao Xia

**ID:** 151395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=az4LP3Ccr8>) | [PDF](<https://openreview.net/pdf?id=az4LP3Ccr8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151395>)

While multimodal large reasoning models \(MLRMs\) have exhibited impressive capabilities, they remain prone to hallucinations, and effective solutions remain underexplored\. In this paper, we investigate the underlying causes of hallucinations in MLRMs and accordingly propose a reasoning\-centric training framework for mitigation\. Specifically, we find that introducing reasoning mechanisms exacerbates models' reliance on language priors and overlooks visual inputs, leading to CoTs with reduced visual cues but redundant text tokens\. Guided by the Information Bottleneck \(IB\) principle, we propose selectively filtering redundant thinking tokens to obtain a more compact, signal\-efficient CoT that preserves task\-relevant information while suppressing noise\.  We also observe that the quality of the reasoning trace largely determines whether hallucination emerges in final answers\. To leverage this, we introduce a reasoning\-enhanced preference optimization scheme that constructs training pairs using high\-quality AI feedback\. We further propose generating high\-quality negative samples for contrastive optimization via a multimodal hallucination\-inducing mechanism that exposes model hallucination behaviors through carefully crafted visual and textual inducers\. By modeling CoT chains as intermediate representations between inputs and final answers, we establish an IB\-based theoretical justification for our method\. Extensive experiments reveal consistent hallucination reduction across diverse MLRMs and benchmarks\.

## Evidence\-RL: Towards Evidence\-intensive Visual Reasoning

**Authors:** Haojie Huang; Xinlei Yu; Chengming Xu; Zhangquan Chen; Cheng Yang; Qingdong He; Yu Yang; Jiangning Zhang; Xiaobin Hu

**ID:** 150393\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150393

[Paper](<https://openreview.net/forum?id=iOZY3TyfNU>) | [PDF](<https://openreview.net/pdf?id=iOZY3TyfNU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150393>)

Vision\-Language Models \(VLMs\) should answer from concrete image evidence rather than language priors, dataset shortcuts, or irrelevant visual context\. Existing perception\-aware post\-training methods encourage image use through global perturbations or attention proxies, but they do not test whether a sampled answer causally depends on the local evidence that supports it\. We propose Counterfactual Evidence Disentanglement \(CED\), a training\-time evidence audit for VLM grounding\. For each response, CED neutralizes an object\-centric Evidence Region and compares the resulting support drop against matched non\-evidence Regions\. We combine this signal with answer correctness inside GRPO, rewarding correct answers that rely on the evidence path rather than shortcut or nuisance paths\. CED uses weak object\-level proposals, requires no question\-specific evidence annotations, and adds no inference\-time overhead\. Across nine public benchmarks and four backbones, CED outperforms prior RL\-based post\-training methods, with targeted analyses verifying its object\-centric signal\.

## Scaling Laws for Multimodal Data Mixtures

**Authors:** Aditi Khandelwal; Ayush Kumar Tarun; Yixuan Xu; Imanol Schlag; Golnoosh Farnadi; Siva Reddy; Luke Zettlemoyer; Antoine Bosselut

**ID:** 148475\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148475

[Paper](<https://openreview.net/forum?id=xX1gcyTLbF>) | [PDF](<https://openreview.net/pdf?id=xX1gcyTLbF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148475>)

Frontier AI systems are increasingly natively multimodal, jointly pretrained on multiple modalities, such as text, vision, and audio\. However, the scientific understanding of the multimodal data mixtures used to pretrain these systems \-\-\- how much of each modality to mix, and at what potential interference cost to the others \-\-\- is largely absent or gatekept\. In this work, we derive data mixing scaling laws for three modalities: text, vision, and audio\. Multimodal Large Language Models \(MLLMs\) increasingly adopt Mixture\-of\-Experts \(MoE\) architectures, as MoEs scale efficiently and partially limit cross\-modal interference\. We therefore use MoEs to conduct 268 experiments ranging from 457M to 8\.3B parameters, on up to 150 billion tokens\. Our work leads to multiple actionable insights into multimodal data mixing for training MLLMs\. First, compute optima are modality\-specific: audio modality is model\-heavy, favouring scaling parameters over tokens, while text and vision require balanced scaling of model size and data\. Second, repeating vision or audio data beyond 2x yields negligible benefits\. Finally, cross\-modal interactions are highly asymmetric: vision strongly interferes with audio, while audio provides mild positive transfer to text and vision despite competing for shared capacity\. Overall, we provide a principled foundation for understanding the multimodal data mixtures needed to train frontier MLLMs\.

## RankAlign: Unsupervised Vision\-Language Representation Alignment via Rank Transformation

**Authors:** Enzhe Zhao; Marco Fiorucci; Lamberto Ballan

**ID:** 149742\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149742

[Paper](<https://openreview.net/forum?id=ngwv68jt7S>) | [PDF](<https://openreview.net/pdf?id=ngwv68jt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149742>)

The Platonic Representation Hypothesis suggests that vision and language models converge toward a shared latent structure, yet the unsupervised alignment of unpaired modalities remains a fundamental challenge\. Current methods rely on direct comparisons of intra\-modality similarity kernels, which are often incommensurate due to disparate scales and representation densities\. This mismatch yields ill\-conditioned optimization landscapes, hindering stable alignment\. To address this, we propose RankAlign, a framework that independently transforms each within\-modality kernel into a rank\-based representation of relative neighbor relationships\. By shifting from absolute similarity values to ordinal relational geometry, RankAlign ensures structural consistency while remaining robust to modality\-specific distortions\. We  show that rank\-based transformation reshapes similarity distributions, mitigating representation collapse and providing a more discriminative alignment signal\. Experiments demonstrate that RankAlign is noise\-resilient and overcome existing kernel\-based alignment method across diverse datasets, including a medical imaging dataset where subtle class differences typically limit existing approaches alignment approaches\.

## Efficient Test\-time Adaptation through Candidate Verification and Divergence Shifts

**Authors:** Seungmin Oh; Seunghun Kang; Jongbin Ryu

**ID:** 149626\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149626

[Paper](<https://openreview.net/forum?id=ofqsXmAtDS>) | [PDF](<https://openreview.net/pdf?id=ofqsXmAtDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149626>)

Vision\-language models \(VLMs\) achieve strong zero\-shot transferability but remain vulnerable to target\-domain shifts at inference time\. Test\-time adaptation \(TTA\) offers a practical remedy, yet most existing VLM\-TTA methods follow a prediction\-side adaptation paradigm\. They use test samples to adjust logits, prototypes, caches, priors, or feature statistics, often incurring additional computational overhead\. In this paper, we take a different perspective and reframe VLM\-TTA as candidate verification rather than prediction adjustment\. We propose \*\*Test\-Time Correction \(TTC\)\*\*, a hypothesis\-based correction framework guided by a simple principle: \*hypothesize, reconstruct, correct\*\. Given a test feature and its top\-$k$ candidate labels, TTC treats each candidate label as a hypothesis, reconstructs the feature within the corresponding latent subspace stored in a memory bank, and measures the resulting \*\*divergence shift\*\*\. This shift quantifies how much the candidate subspace and its relations to other candidates change after the hypothetical insertion of the test feature\. A correct candidate hypothesis induces only a small shift, whereas an incorrect one perturbs the subspace more strongly\. TTC therefore corrects the prediction by selecting the candidate with the minimum aggregated divergence shift\. This parameter\-free candidate verification mechanism avoids iterative optimization and provides a favorable accuracy\-efficiency trade\-off\. Across five TTA settings and 15 benchmark datasets, including zero\-shot classification, domain generalization, few\-shot classification, base\-to\-novel generalization, and cross\-dataset evaluation, TTC consistently improves accuracy over state\-of\-the\-art VLM\-TTA methods while achieving up to $2\\times$ speedup and over $3\\times$ lower memory usage\.

## ChainFlow\-VLA: Causal Flow Planning with Vision\-Language Models

**Authors:** Xiyang Wang; Xinlin Wang; Tingguang Zhou; Gong Chen; Xingtai Gui; Zhi Xu; Hangning Zhou; Xiaolei Wu; Feiyang Tan; Mu Yang

**ID:** 149929 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m7AO7a7zPZ>) | [PDF](<https://openreview.net/pdf?id=m7AO7a7zPZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149929>)

Current end\-to\-end autonomous driving systems are fundamentally limited by a mismatch between temporal causal reasoning and global trajectory consistency\. Autoregressive \(AR\) models capture interaction\-aware temporal dependencies via causal factorization, but their step\-wise decoding leads to error accumulation and suboptimal global structure\. In contrast, diffusion models optimize trajectories globally but lack explicit causal constraints, making them unreliable in interactive and safety\-critical scenarios\. This dichotomy reveals a deeper issue: existing methods treat causal modeling and global optimization as separate paradigms, without a principled way to unify them within a single trajectory distribution\. To address this, we propose ChainFlow\-VLA, which unifies causal generation and global refinement within a unified probabilistic framework\. We formulate planning as a mixture over AR\-induced modes and learn VLM\-conditioned residual distributions over these modes\. An autoregressive generator \(\\textbf\{Chain\}\) produces a discrete set of causal trajectory modes, followed by a diffusion\-based refiner \(\\textbf\{Flow\}\) that operates in residual space to perform mode\-conditioned correction while preserving causal structure\. A key insight is that vision\-language models are more effective as semantic controllers for refinement rather than direct trajectory generators\. By conditioning the diffusion process on VLM hidden states, scene\-level reasoning guides fine\-grained trajectory adjustments within each mode\. This formulation enables robust planning in ambiguous and long\-tail scenarios\. ChainFlow\-VLA achieves a state\-of\-the\-art score of 94\.8 on the NAVSIM v1 leaderboard, matching human\-level performance \(94\.8\)\.

## RobustPruner: Decoupled Relevance and Uncertainty for Efficient Visual Token Pruning in MLLMs

**Authors:** Hanwei Zhu; Junhan Fu; Xi Zhang; Jiamang Wang; Weisi Lin

**ID:** 153328 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M8tBI5LjWD>) | [PDF](<https://openreview.net/pdf?id=M8tBI5LjWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153328>)

_Abstract unavailable from the accessible public sources._

## VideoSTF: Stress\-Testing Output Repetition in Video Large Language Models

**Authors:** Yuxin Cao; Yuxin Cao; Shangzhi Xu; Jingling Xue; Jin Song Dong

**ID:** 152442 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T7JCqZCbkm>) | [PDF](<https://openreview.net/pdf?id=T7JCqZCbkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152442>)

_Abstract unavailable from the accessible public sources._

## Urbex: Agentic Spatial Grounding for City\-Scale 3D Scenes

**Authors:** Yu Wang; Rui Dai; Wei Chen; Yi Wang; Bo Dang; Kaikui Liu; Xiangxiang Chu; Yansheng Li

**ID:** 149965 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ls2ORqqsqZ>) | [PDF](<https://openreview.net/pdf?id=ls2ORqqsqZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149965>)

_Abstract unavailable from the accessible public sources._

## BRACE: Bipolar Reference\-Aware Calibration and Estimation for Incomplete Multimodal Learning

**Authors:** Ruiting Dai; Zesen Cai; XiaoYu Zhao; Yiting Huang; Lisi Mo; Ming Li; Tao He

**ID:** 150021 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lLcmkgW4CK>) | [PDF](<https://openreview.net/pdf?id=lLcmkgW4CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150021>)

_Abstract unavailable from the accessible public sources._

## Toward Multimodal Sheet Music Recognition and Understanding

**Authors:** Guang Yang; Brian Zheng; Victoria Ebert; Noah Smith

**ID:** 156033 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=10iF3BXLdK>) | [PDF](<https://openreview.net/pdf?id=10iF3BXLdK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156033>)

We propose a novel pipeline for extracting symbolic notation and semantic knowledge from images of sheet music\. Our pipeline features the first large\-scale neural model for optical music recognition \(OMR\) to operate sequentially on a system\-by\-system basis, following the horizontal lines of notation as they are read on the page, rather than treating the page as an undifferentiated image, enabling better scaling to arbitrarily long inputs\. It is also the first OMR model capable of generating symbolic transcriptions that include embedded textual content, such as titles and annotations\. The pipeline combines system\-level segmentation with an autoregressive vision\-LM to capture both local notation details and score structure\.  Across multiple datasets, our approach consistently outperforms prior state of the art\.  We also show that symbolic transcriptions complement visual inputs for frontier language models, improving their interpretation of dense musical documents\. The result is new state\-of\-the\-art performance in both OMR and downstream sheet music understanding\. We will release data and code upon publication\.

## Beyond Sparse Captions: Aligning Slide\-Level Text and Patch\-Level Vision in Pathology

**Authors:** Daniel Shao; Dongmin Bang; Luca Weishaupt; Nic G Reitsam; Sophia J\. Wagner; Ming Yang Lu; Long P Le; Richard Chen; Faisal Mahmood

**ID:** 149751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nd95WRs4xs>) | [PDF](<https://openreview.net/pdf?id=nd95WRs4xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149751>)

Contrastive vision\-language \(VL\) pretraining in computational pathology has generally relied on curated image\-caption datasets sourced from social media, educational videos, and research publications\. These corpora are sparse relative to the diversity of tissue morphology and difficult to scale further, as pathologists do not routinely produce descriptive captions in clinical practice\. We propose to instead leverage slide\-level pathology reports which can be generated during routine diagnostic workflows in a scalable manner\. A key challenge in this weakly\-supervised setting is that pathology reports describe macroscopic, diagnostic findings while patch\-level visual features describe microscopic findings\. We introduce Locked Image Multiple Instance PreTraining \(LIMIT\), which addresses this gap by freezing a pretrained vision encoder and fine\-tuning only the text encoder: report embeddings serve as cross\-attention queries over bags of patch features, producing report\-conditioned slide representations optimized via cross\-entropy\. Using LIMIT, we establish CONCH\-Z, which aligns the text encoder of CONCH v1\.5 to 335,645 clinical reports\. Evaluated across 20 tasks spanning patch\-level classification, tumor detection, and slide\-level subtyping, CONCH\-Z establishes state\-of\-the\-art zero\-shot performance over VL encoders trained on curated caption datasets, while simultaneously closing the gap with slide\-level foundation models trained with substantially more parameters and compute\. We will release CONCH\-Z weights and evaluation code to support reproducibility and broader community use\.

## SF\-DST: Adapting Vision\-Language Models for Anomaly Detection via Asymmetric Modulation and A\-LoRA

**Authors:** Zhipeng Wang; Xiaofei Li; Dong Zhao; Yonghong Song

**ID:** 151642 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z55huSQY5L>) | [PDF](<https://openreview.net/pdf?id=Z55huSQY5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151642>)

Vision\-Language Models \(VLMs\) show great potential for Industrial Anomaly Detection \(IAD\) but often overlook subtle high\-frequency defects due to their semantic bias\. Additionally, one\-class adaptation risks rank collapse and catastrophic forgetting\. To address these issues, we propose a unified framework termed SF\-DST\. First, we design Spatial\-Frequency Dual\-Stream Transformer, which explicitly captures lost details via a parallel discrete cosine transform branch\. Crucially, it incorporates Asymmetric Cross\-Modal Modulation \(ACMM\), a mechanism that leverages spatial semantics as a context gate to selectively retrieve and inject spectral features, effectively compensating for the texture blindness of VLMs\. Second, Anomaly\-Aware LoRA \(A\-LoRA\) enforces Orthogonal Regularization on the adaptation subspace\. This geometric constraint ensures subspace diversity to prevent mode collapse, while optimizing a hypersphere\-based metric for precise anomaly discrimination\. Extensive experiments on MVTec\-AD, VisA and MMAD benchmarks demonstrate that our method significantly outperforms state\-of\-the\-art approaches, successfully bridging the gap between large\-model generalization and industrial\-grade precision\.

## SelfGuard: Self\-Supervised Deviation Modeling for Multi\-Modal Jailbreak Detection

**Authors:** Chenchen Jing; Hongli Guo; Huarong Jia; TianweiBai; Che Sun; Yang Liu; Chunhua Shen

**ID:** 150784 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fQrMmdCmbG>) | [PDF](<https://openreview.net/pdf?id=fQrMmdCmbG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150784>)

Multi\-modal large language models \(MLLMs\) achieve strong vision–language reasoning ability but remain vulnerable to jailbreak attacks that exploit subtle cross\-modal cues to bypass safety mechanisms\. Detecting such attacks is difficult because harmful data are scarce and rapidly evolving, while detectors trained on known patterns often fail to generalize\. In this paper, we cast multi\-modal jailbreak detection as self\-supervised deviation modeling and learn attack\-agnostic signals from benign data only\. We propose SelfGuard, a self\-supervised framework, which models benign multi\-modal regularities and learns to score structured violations via controlled pseudo\-harmful deviations\. SelfGuard synthesizes pseudo\-harmful samples via controlled transformations that target three signature cues, cross\-modal semantic inconsistency, format manipulation, and semantic toxicity\. It then learns complementary deviation statistics through multi\-task self\-supervised learning, including misalignment discrimination, reconstruction\-based toxicity modeling, and contrastive format modeling\. At inference, SelfGuard performs multi\-view deviation estimation by aggregating task\-specific deviation scores to identify departures from benign multi\-modal regularities\. Extensive experiments on various benchmarks show the effectiveness of our method\.

## Linguistic Trajectory Encoding for Efficient Long\-Horizon Spatial Memory in Embodied Agents

**Authors:** Xie Tianyidan; Shenyi Wang; Qiang Tang; Mingjie Wang; Zhicheng Qiu; Xuanfu Li; Zhan Xu; Jian Yang; Lanjun Wang; Zili Yi

**ID:** 152183 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UwaYppr2E8>) | [PDF](<https://openreview.net/pdf?id=UwaYppr2E8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152183>)

_Abstract unavailable from the accessible public sources._

## LatentOmni: Rethinking Omni\-Modal Understanding via Unified Audio\-Visual Latent Reasoning

**Authors:** Yifan Dai; zhenhua wu; Bohan Zeng; Daili Hua; Jialing Liu; Bozhou Li; Yuran Wang; Chengzhuo Tong; Hao Liang; Xiaochen Ma; Junbo Niu; Tianyu Guo; Yang Shi; Yue Ding; Yiyan Ji; Bingyin Mei; Yushuo Guan; Yuanxing Zhang; Pengfei Wan; Fangcheng Fu; Wentao Zhang

**ID:** 150562 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEYx8OEE6v>) | [PDF](<https://openreview.net/pdf?id=hEYx8OEE6v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150562>)

_Abstract unavailable from the accessible public sources._

## Stage\-wise Attention\-Guided Region Sequencing for Adversarial Attacks on Large Vision\-Language Models

**Authors:** Jaehyun Kwak; Nam Cao; Boryeong Cho; Segyu Lee; Sumyeong Ahn; Se\-Young Yun

**ID:** 149114 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smKuw27bpk>) | [PDF](<https://openreview.net/pdf?id=smKuw27bpk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149114>)

_Abstract unavailable from the accessible public sources._

## ROCKET: Residual\-Oriented Multi\-Layer Alignment for Spatially\-Aware Vision\-Language\-Action Models

**Authors:** Guoheng Sun; Tingting Du; Kaixi Feng; Chenxiang Luo; Xingguo Ding; Zheyu Shen; Ziyao Wang; Yexiao He; Ang Li

**ID:** 151797 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XvSZyjKLY8>) | [PDF](<https://openreview.net/pdf?id=XvSZyjKLY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151797>)

_Abstract unavailable from the accessible public sources._

## G$^2$TR: Generation\-Guided Visual Token Reduction for Separate\-Encoder Unified Multimodal Models

**Authors:** Junxian Li; Kai Liu; Zizhong Ding; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 155624 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4BxXFxlAW1>) | [PDF](<https://openreview.net/pdf?id=4BxXFxlAW1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155624>)

_Abstract unavailable from the accessible public sources._

## Harnessing Textual Refusal Directions for Multimodal Safety

**Authors:** Moreno D&amp;amp;\#x27;Incà; Nicu Sebe; Massimiliano Mancini

**ID:** 155291 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6fF1hshpKK>) | [PDF](<https://openreview.net/pdf?id=6fF1hshpKK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155291>)

_Abstract unavailable from the accessible public sources._

## Visual Grounding First, Multimodal In\-context Learning Follows

**Authors:** Minhyuk Seo; Minjae Lee; Chaeeun Lee; Wei Lin; Muhammad Jehanzeb Mirza; Tinne Tuytelaars; Jonghyun Choi

**ID:** 150125 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kV8SXhn8yT>) | [PDF](<https://openreview.net/pdf?id=kV8SXhn8yT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150125>)

_Abstract unavailable from the accessible public sources._

## Reading the Unreadable: Text\-Aware Image Super\-Resolution Needs Reasoning

**Authors:** Jaeseong Lee; Jinwoo Kim; Jinho Jeong; Seon Joo Kim

**ID:** 150742 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fjnUBgj9eG>) | [PDF](<https://openreview.net/pdf?id=fjnUBgj9eG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150742>)

_Abstract unavailable from the accessible public sources._

## Few Contrastive Attention Heads Enable Visual Grounding in Large Vision\-Language Models

**Authors:** Neha Sengar; Andres Saurez; Dongsoo Har; Sangkeum Lee

**ID:** 156779 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CnrAiXbw8a&noteId=vwCXB3afMy&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DTMLR%2FAuthors%23your-submissions)>) | [PDF](<https://openreview.net/pdf?id=CnrAiXbw8a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156779>)

Visual grounding aims to localize image regions corresponding to natural language expressions\. While recent Large Vision\-Language Models \(LVLMs\) have shown impressive multi\-modal understanding capabilities, their application to visual grounding typically requires fine\-tuning and architectural modifications\. This requirement, however, can be ignored, considering that text and images tend to have similar feature representations that appear to be approximately linearly disentangled, enabling cleaner extraction of spatial information from LVLMs without any task\-specific training\. From this viewpoint, we propose an attention\-head discovery framework that requires zero labeled grounding samples and no architectural modifications, and identifies discriminative localization heads without manual inspection\. Through dual prompting with target and contrastive descriptions, we compute differential residual representations and project them through attention head output matrices to measure per\-head spatial contributions via four complementary scores\. By aggregating signals using importance\-weighted query difference scores from only the top\-10 attention heads, we outperform training\-free non\-LVLM baseline by up to 27\.95% on RefCOCO, 21\.93% on RefCOCO\+, and 8\.40% on RefCOCOg\. Our method outperforms LVLM baseline by up to 8\.04% on RefCOCO without requiring ground\-truth category labels\.

## Adaptive Internal Readout for Native Multimodal Models

**Authors:** Yunpeng Zhou

**ID:** 152986 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OqX7hyaqf9>) | [PDF](<https://openreview.net/pdf?id=OqX7hyaqf9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152986>)

Native multimodal models build rich internal representations across visual, multimodal, and language streams, yet their answers are usually read only from the final layer\. We study this mismatch between where task information is available and where the model is allowed to read from\. We formalize it with the availability\-\-accessibility gap \(AAG\), whose primary form compares a small\-budget internal readout reference with a learned final\-only parity head under the same supervised answer space and loss\. Across document, chart, diagram, counting, compositional, and broad multimodal reasoning tasks, we find that task\-relevant information often appears at internal sites before it becomes accessible to the final output\. We then introduce adaptive internal readout \(AIR\), a small policy that selects a few internal sites from the full model stack\. Under matched budgets, AIR closes much of the gap and outperforms static fusion, dense fusion, visual\-only readout, and random site controls\. Ablations show that the selected sites are functionally important for the learned readout pathway\.

## MemLeak: Diagnosing Information Leaks in Multimodal Agent Memory

**Authors:** Kuan Wang; Chao Zhang

**ID:** 139088 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ltUE09h18x>) | [PDF](<https://openreview.net/pdf?id=ltUE09h18x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139088>)

When a multimodal AI agent is asked to forget a fact, current memory systems usually delete the text entry and report success\. We find that the fact can remain recoverable from retained user images, including images tagged to entirely different facts, because VLMs use implicit visual cues at inference time\. We introduce the Information   Provenance Graph \(IPG\), a taxonomy that classifies memory representations by deletion affordance\. The IPG reveals that deletion fails through multiple channels\. Our benchmark, MemLeak, measures this across a deletion cascade: direct probing of deletion\-capable systems yields &lt;1%, but retained correlated text enables 18\.3% recovery, and   retained images enable 12\.0% recovery \(0\.0% blind baseline, 0\.3% FPR\)\-\-\-with 47% of image leaks not text\-recoverable\. Content\-aware semantic deletion reduces the image residual to 2\.0%\. The residual appears across multiple VLMs, a production memory system, and real Unsplash\-licensed photographs\. Dual\-annotator human validation \($\\kappa$   = 0\.88\) confirms judge reliability\.

## StreamPI: Streaming Multimodal Temporal Modeling for Vision\-Language\-Action Models

**Authors:** Zhe Liu; Jinghua Hou; Yuxiang Lu; Zhenya YANG; Xianzhe Fan; Junwei Luo; Junyi Li; Ruihua Han; Zhi Hou; Hengshuang Zhao

**ID:** 154290 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EsxSwziuTY>) | [PDF](<https://openreview.net/pdf?id=EsxSwziuTY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154290>)

_Abstract unavailable from the accessible public sources._

## FlowR2A: Learning Reward\-to\-Action Distribution for Multimodal Driving Planning

**Authors:** Xirui Li; Zhe Liu; Xiaoqing Ye; Wenhua Han; Yifeng Pan; Junyu han; Hengshuang Zhao

**ID:** 148780 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v7t2EKHHHj>) | [PDF](<https://openreview.net/pdf?id=v7t2EKHHHj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148780>)

_Abstract unavailable from the accessible public sources._

## They Can See It but not Say It: Iterative Self Knowledge Re\-expression in Visual Reasoning Relative Pose Identification

**Authors:** MENGYU WANG; Ken Deng; Yftah Ziser; Shay Cohen; Tiejun Ma

**ID:** 151372 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b4HCV0e0V8>) | [PDF](<https://openreview.net/pdf?id=b4HCV0e0V8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151372>)

_Abstract unavailable from the accessible public sources._

## Explicit Geometric Chain\-of\-Thought for Vision\-Language\-Action in Autonomous Driving

**Authors:** Xingtai Gui; Yucheng Zhou; Dongqian Guo; jiahao gong; Feiyang Tan; Jianbing Shen

**ID:** 155833 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Y9nM4dnX8>) | [PDF](<https://openreview.net/pdf?id=2Y9nM4dnX8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155833>)

_Abstract unavailable from the accessible public sources._

## RECAP: Looking Once Is Not Enough for Vision\-Language Reasoning

**Authors:** Zhaolu Kang; Tailong Luo; Chenxin Li; Zhenyu Yu; Fengyu Zhou; Jiachen Qian; Lei Wei; Shuang Chen; Jiachen Li; Yingjie He; Eric Hanchen Jiang; Rongchao Zhang; Zhengtao Yao; Hoi Leong Lee; Guansu Wang; Kaiyue Zhou

**ID:** 152270 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UKko2Zrtpd>) | [PDF](<https://openreview.net/pdf?id=UKko2Zrtpd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152270>)

_Abstract unavailable from the accessible public sources._

## OpenSearch\-VL: An Open Recipe for Frontier Multimodal Search Agents

**Authors:** Shuang Chen; Kaituo Feng; Hangting Chen; Wenxuan Huang; Dasen Dai; Quanxin Shou; Yunlong lin; Xiangyu Yue; Shenghua Gao; Tianyu Pang

**ID:** 152165 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V30OG7luk1>) | [PDF](<https://openreview.net/pdf?id=V30OG7luk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152165>)

_Abstract unavailable from the accessible public sources._

## Unify\-Agent: A Unified Multimodal Agent for World\-Grounded Image Synthesis

**Authors:** Shuang Chen; Quanxin Shou; Hangting Chen; Yucheng Zhou; Kaituo Feng; Wenbo Hu; yifan zhang; Yunlong lin; Wenxuan Huang; Mingyang Song; Dasen Dai; Bolin Jiang; Manyuan Zhang; Yu Cheng; Nanyun Peng

**ID:** 154814 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AjnoqXXkQr>) | [PDF](<https://openreview.net/pdf?id=AjnoqXXkQr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154814>)

Unified multimodal models provide a natural and promising architecture for understanding diverse and complex real\-world knowledge while generating high\-quality images\. However, they still rely primarily on frozen parametric knowledge, which makes them struggle with real\-world image generation involving long\-tail and knowledge\-intensive concepts\. Inspired by the broad success of agents on real\-world tasks, we explore agentic modeling to address this limitation\. Specifically, we present Unify\-Agent, a unified multimodal agent for world\-grounded image synthesis, which reframes image generation as an agentic pipeline consisting of prompt understanding, multimodal evidence searching, grounded recaptioning, and final synthesis\. To train our model, we construct a tailored multimodal data pipeline and curate 143K high\-quality agent trajectories for world\-grounded image synthesis, enabling effective supervision over the full agentic generation process\. We further introduce FactIP, a benchmark covering 12 categories of culturally significant and long\-tail factual concepts that explicitly requires external knowledge grounding\. Extensive experiments show that our proposed Unify\-Agent substantially improves over its base unified model across diverse benchmarks and real world generation tasks, while approaching the world knowledge capabilities of the strongest closed\-source models\. As an early exploration of agent\-based modeling for world\-grounded image synthesis, our work highlights the value of tightly coupling reasoning, searching, and generation for reliable open\-world agentic image synthesis\.

## AVOC: Enhancing Hour\-Level Audio\-Video Understanding in Omni\-Modal LLMs via Retrieval\-Inspired Token Compression

**Authors:** Yijing Chen; Wenhui Tan; Xiaoyi Yu; Yuyue Wang; Xin Cheng; Kaisi Guan; Hao Jiang; Xiangyang Li; Guojie Zhu; Ruihua Song

**ID:** 154191 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FW6UJyDapH>) | [PDF](<https://openreview.net/pdf?id=FW6UJyDapH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154191>)

Multimodal Large Language Models have achieved remarkable progress in short\-form audio\-video understanding, yet long\-form audio\-video comprehension remains challenged by limited context windows and severe information redundancy\. To address these bottlenecks, we propose AVOC, a framework for long\-form audio\-video understanding in Omni\-modal Large Language Models\. AVOC introduces a learnable token compression module between the modality encoders and the LLM backbone\.  We reframe multimodal token compression as a top\-$K$ retrieval problem: given a fixed context budget, the module must retrieve a compact subset of tokens that best supports answering the user query\.  We draw inspiration from three classical Information Retrieval criteria for selecting informative units from a large candidate pool: relevance, importance, and diversity\. AVOC instantiates each criterion as a tailored mechanism for audio\-video understanding, and integrates them into a unified retrieval\-style compression pipeline\. Experiments show that AVOC achieves state\-of\-the\-art performance on long\-form audio\-video benchmarks, surpassing the second\-best model by 4\.9 and 5\.5 points in average accuracy on OmniVideoBench and LVOmniBench, respectively\. Moreover, AVOC maintains robust performance on Audio\-Video Needle\-in\-a\-Haystack task at durations up to one hour\.

## HiLoc: A Hierarchical Representation Method for Spatial Localization in Multimodal Large Language Models

**Authors:** Evelyn Zhang; Fufu Yu; Hanjun Li; Aoqi Wu; Ke Yan; Shouhong Ding; Tianhe Ren; Xinting Hu; Xiaojuan Qi; Li Jiang; Jiaya Jia

**ID:** 152158 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V5T2vPmvxO>) | [PDF](<https://openreview.net/pdf?id=V5T2vPmvxO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152158>)

Existing multimodal large language models \(MLLMs\) typically formulate object detection as a conditional sequence generation task\. Under this paradigm, spatial locations are commonly represented by either textual coordinates or special quantized learnable tokens\. However, textual coordinates are tokenized as unrelated symbols, spatially adjacent points \(e\.g\., $x=199$ vs\. $y=200$\) yield entirely different tokens, so the cross\-entropy loss is misaligned with true spatial distance\. Special quantized location tokens, on the other hand, inevitably introduce quantization error\. Reducing this error requires linearly more tokens, but a larger vocabulary is harder to train and converges slower\. We argue that both limitations stem from the formulation of spatial representation\. To address this issue, we propose a simple yet novel localization representation method, HiLoc, which predicts locations in a coarse\-to\-fine manner with special tokens: first a grid index for coarse localization, then a cell index to refine the position within the grid\. Under this paradigm, accuracy can be scaled up by simply adding the hierarchy level\. We also build HiRef\-500K, a dataset consisting negative and complex referring samples to strengthen rejection and complex referring ability\. Experiments show that our method achieves strong performance on both detection and grounding benchmarks, especially on small objects, under high IOU thresholds and complex referring tasks\.

## VLA\-REPLICA: A Low\-Cost, Reproducible Benchmark for Real\-World Evaluation of Vision\-Language\-Action Models

**Authors:** Alex S Huang; Jiahui Zhang; Shiqing Tang; Yu Xiang

**ID:** 139765 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=61KKW28Kgg>) | [PDF](<https://openreview.net/pdf?id=61KKW28Kgg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139765>)

_Abstract unavailable from the accessible public sources._

## Segment and Select: Vision\-Language Segmentation in 3D Scenarios

**Authors:** Yulin Chen; Zhihang Zhong; Yuenan Hou

**ID:** 155060 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8l7FxFjWNV>) | [PDF](<https://openreview.net/pdf?id=8l7FxFjWNV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155060>)

_Abstract unavailable from the accessible public sources._

## Multimodal LLMs Outperform Pathology Foundation Models in Cross\-Domain Histological Similarity

**Authors:** Yishu Zhang; Yun Li; Daiwei Zhang

**ID:** 152201 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UoTlhoFibt>) | [PDF](<https://openreview.net/pdf?id=UoTlhoFibt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152201>)

_Abstract unavailable from the accessible public sources._

## TED: Text\-Axis Evidence Decomposition for Prompted Anomaly Localization

**Authors:** JINYOUNG KIM; Geonho Kim; GiJeong Park; Geonu Lee; YoungJoon Yoo

**ID:** 155802 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2lzL7Y6lmU>) | [PDF](<https://openreview.net/pdf?id=2lzL7Y6lmU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155802>)

_Abstract unavailable from the accessible public sources._

## Masked Diffusion Vision\-Language Models for Temporal Action Localization

**Authors:** Fengshun Wang; Zhengbo Zhang; Zhigang Tu

**ID:** 149422 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qAQchYkMe4>) | [PDF](<https://openreview.net/pdf?id=qAQchYkMe4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149422>)

_Abstract unavailable from the accessible public sources._

## Mind the Heads: Topological Representation Alignment for Multimodal LLMs

**Authors:** Davide Caffagni; Alberto Compagnoni; Federico Melis; Sara Sarto; Pier Luigi Dovesi; Mark Granroth\-Wilding; Marcella Cornia; Lorenzo Baraldi

**ID:** 152687 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RBeMQGtXpJ>) | [PDF](<https://openreview.net/pdf?id=RBeMQGtXpJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152687>)

_Abstract unavailable from the accessible public sources._

## M3\-AD: Reflection\-aware Multi\-modal, Multi\-category, and Multi\-dimensional Benchmark and Framework for Industrial Anomaly Detection

**Authors:** Chao Huang; Yanhui Li; Hongxi Huang; Yunkang Cao; Wei Wang; Jie Wen; Zhihua Wang; Wenqi Ren; XIAOCHUN CAO

**ID:** 149620 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=okC13ckm24>) | [PDF](<https://openreview.net/pdf?id=okC13ckm24>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149620>)

_Abstract unavailable from the accessible public sources._

## MINEGRID: A Multi\-Modal Benchmark for LLMs Evaluation on Dynamic Modeling of Power Systems

**Authors:** Duange Guo; Yujian Yuan; Shanyu Li; Xinhua Wu; Yulong Liu

**ID:** 138967 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tW9hpnGHHA>) | [PDF](<https://openreview.net/pdf?id=tW9hpnGHHA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138967>)

_Abstract unavailable from the accessible public sources._

## PhaseLoRA: Control\-Regime\-Conditioned Low\-Rank Adaptation for Continuous\-Action Vision\-Language\-Action Policies

**Authors:** Yufei Guo; Yinan Wu; Haoran Duan; guiguang ding; Jungong Han

**ID:** 151017 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dZhUeQa53U>) | [PDF](<https://openreview.net/pdf?id=dZhUeQa53U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151017>)

_Abstract unavailable from the accessible public sources._

## Beyond Spatial\-Domain Supervision: A Relation Constrained Space for Multi\-Modal Image Fusion

**Authors:** Zeyu Wang; Mingyu Ge; Haiyu Song; Haoran Duan

**ID:** 150788 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fOruP1Bc1v>) | [PDF](<https://openreview.net/pdf?id=fOruP1Bc1v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150788>)

Multi\-modal image fusion \(MMIF\) aims to form a single image by integrating shared information, preserving complementary cues, and coordinating cross\-modal conflicts across modalities\. However, due to the absence of ground\-truth fused images, existing MMIF supervision commonly uses spatial\-domain sources or gradient variants as surrogate ground truth, making the supervision mechanism inherently misaligned with the goal of MMIF and causing pixel\-level compromise or modality bias\. To address this, we propose a relation\-constrained supervision paradigm that moves fusion supervision from the spatial domain to a learned relation space\. Instead of forcing the fused image to approximate the sources, we use frozen pretrained representation models as information providers and design a learnable feature adapter to align heterogeneous DINO and CLIP features into a unified supervision space\. The adapter infers three relation parameters, namely sharedness, dominance, and coordination radius, which define three losses corresponding to the MMIF's goal\. To make this space reliable, we devise a self\-supervised contrastive ranking objective tailored to the adapter and couple it with the fusion network through alternating optimization\. Extensive experiments show that the proposed supervision space yields significant gains regardless of which mainstream backbone the fusion network adopts, offering a supervision paradigm better aligned with the goal of MMIF\. Our code will be publicly available\.

## Uni\-Cheb: A Basis\-Agnostic Learnable Chebyshev Filter for Multimodal Spectral Modulation

**Authors:** Shuoqiu Duan; Jiasen Gao; Xiaoliang Chen

**ID:** 148454 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xirTJtdHxQ>) | [PDF](<https://openreview.net/pdf?id=xirTJtdHxQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148454>)

While spatiotemporal modeling has emerged as an effective approach in multimodal learning, it struggles to resolve the \`\`spectral dilemma'' where distinct tasks demand contradictory frequency views\. For example, deception detection requires global macro\-patterns, while intent recognition depends on local micro\-transients\. To address this, we propose \\textbf\{Uni\-Cheb\}, a unified spectral operator centered on the Learnable Chebyshev Filter \(LCF\)\. Designed as a basis\-agnostic, plug\-and\-play component, LCF maintains a consistent mathematical form to adaptively modulate frequency components regardless of the underlying spectral transform\. By leveraging the minimax property of Chebyshev approximation, LCF performs elastic spectral resampling to focus on task\-relevant bands\. Guided by task\-specific physical priors, the LCF seamlessly integrates with the Discrete Fourier Transform \(DFT\) to amplify global physiological rhythms or the Discrete Wavelet Transform \(DWT\) to capture localized semantic shifts, all while maintaining a negligible computational footprint\. Furthermore, it serves as an effective spectral preconditioner to mitigate distribution shifts in cross\-domain transfer learning\. Extensive experiments across multiple benchmarks demonstrate that Uni\-Cheb acts as a universal enhancer, consistently improving state\-of\-the\-art baselines\. By rendering frequency modulation both task\-adaptive and highly efficient, Uni\-Cheb establishes a robust, operator\-level solution to the spectral dilemma\.

## SituRecBench: Evaluating Frontier Models as Situated Recommendation Assistants in 3D Environments

**Authors:** Jingtong Yang; Dongding LIN; Jian Wang; Wenjie Li

**ID:** 139713 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8wFmZ7Sxv7>) | [PDF](<https://openreview.net/pdf?id=8wFmZ7Sxv7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139713>)

Recommender systems are transitioning from static retrieval engines into interactive assistants grounded in physical environments\. However, current paradigms largely treat recommendation as a decoupled ranking task, neglecting the situated complexities of spatial navigation, visual grounding, and multi\-turn social interaction\. To bridge this gap, we introduce \*\*SituRecBench\*\*, a novel interactive benchmark designed to evaluate situated recommendation agents within high\-fidelity 3D environments\. SituRecBench reformulates the recommendation process as a closed\-loop interaction between a recommendation assistant and a user with evolving latent preferences and realistic behaviors\. Our benchmark features diverse real\-world shopping scenarios \(e\.g\., supermarkets and home furnishings stores\), requiring assistants to integrate preference elicitation, spatial reasoning, and long\-horizon conversation\. We introduce a simulator\-in\-the\-loop evaluation protocol along with a multi\-dimensional metric taxonomy that quantifies communication fluency, recommendation utility, and navigation effectiveness\. Through extensive evaluation of state\-of\-the\-art vision\-language models, we reveal critical challenges in situated recommendation, such as inefficient preference elicitation, coherent conversation transition, and poor spatial grounding\. SituRecBench provides a rigorous, reproducible foundation for advancing the frontier of situated recommendation in interactive, visually\-grounded environments\.

## Simple yet Effective Semi\-supervised Knowledge Distillation from Vision\-Language Models via Dual\-Head Optimization

**Authors:** Seongjae Kang; Dong Bok Lee; Hyungjoon Jang; Sung Ju Hwang

**ID:** 151357 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bA0Jhhnk8K>) | [PDF](<https://openreview.net/pdf?id=bA0Jhhnk8K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151357>)

Semi\-supervised learning \(SSL\) has emerged as a practical solution for addressing data scarcity challenges by leveraging unlabeled data\. Recently, vision\-language models \(VLMs\), pre\-trained on massive image\-text pairs, have demonstrated remarkable zero\-/few\-shot performance that often surpasses SSL approaches due to their exceptional generalization capabilities\. This gap motivates us to question: how can we effectively harness the powerful generalization capabilities of VLMs into task\-specific models? Knowledge distillation \(KD\) offers a natural framework for transferring VLM capabilities, but we identify that it suffers from gradient conflicts between supervised and distillation losses\. To address this challenge, we propose Dual\-Head Optimization \(DHO\), which introduces dual prediction heads for each distinct signal\. We observe that DHO resolves gradient conflicts, enabling improved feature learning compared to single\-head KD baselines, with practical benefits of minimal computational overhead and test\-time hyperparameter tuning without retraining\. Extensive experiments across 15 datasets show that DHO consistently outperforms KD baselines, often outperforming teacher models with smaller student models\. DHO also achieves new state\-of\-the\-art performance on both in\-distribution ImageNet semi\-supervised learning and out\-of\-distribution generalization across ImageNet variants\. We will publicly release our code and model checkpoints to facilitate future research\.

## SCG\-HF: Semantic Consistency Grouping for Hierarchical Fusion in Video Emotion Recognition

**Authors:** Muci Li; Yujing Rao; He Li; Mang Ye

**ID:** 154717 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BWzgCxJi8k>) | [PDF](<https://openreview.net/pdf?id=BWzgCxJi8k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154717>)

Video Emotion Recognition \(VER\) aims to identify and understand the emotional states of characters by analyzing visual and auditory information in videos\. However, conventional rigid frame sampling strategies for long videos tend to fragment continuous emotional expressions\. Moreover, existing fusion methods often fail to properly model temporal dependencies and may suffer from future information leakage\. To address these limitations, we propose SCG\-HF, a novel framework that preserves semantic consistency through adaptive grouping and hierarchical fusion\. Specifically, we introduce Semantic Consistency Grouping \(SCG\), which dynamically segments videos into semantically coherent units based on feature similarity, thereby maintaining the integrity of emotional patterns\. Furthermore, we design a three\-level Hierarchical Fusion \(HF\) architecture to capture emotional dynamics at different temporal granularities: \(i\) frame\-level refinement enhances subtle local emotional cues; \(ii\) segment\-level history\-guided fusion models temporal evolution across segments while strictly preventing future information leakage via attention; and \(iii\) sample\-level contrastive alignment synchronizes audio and visual representations in a shared latent space\. Extensive experiments on the VideoEmotion\-8 and Ekman\-6 benchmarks demonstrate that SCG\-HF achieves state\-of\-the\-art performance\.

## V\-GIFT: Boosting Visual Instruction Tuning with Self\-Supervised Guidance

**Authors:** Sophia Sirko\-Galouchenko; Monika Wysoczańska; Andrei Bursuc; Nicolas THOME; Spyridon Gidaris

**ID:** 149423 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qA87deiifn>) | [PDF](<https://openreview.net/pdf?id=qA87deiifn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149423>)

Multimodal large language models \(MLLMs\) perform well on many vision\-language tasks but often struggle with vision\-centric problems that require fine\-grained visual perception\. Recent evidence suggests that this limitation arises not from weak visual representations, but from under\-utilization of visual information during instruction tuning, where many tasks can be partially solved using language priors alone\.  We propose a simple and lightweight approach that augments visual instruction tuning with a small number of visually grounded self\-supervised tasks expressed as natural language instructions\. By reformulating classical self\-supervised pretext tasks, such as rotation prediction, color matching, and cross\-view correspondence, as image–instruction–response triplets, we introduce supervision that cannot be solved without relying on visual evidence\. Our approach requires no human annotations, no architectural modifications, and no additional training stages\. Across multiple models, training regimes, and benchmarks, injecting only a small fraction \(3–10%\) of such visually grounded instructions consistently improves performance on vision\-centric evaluations\. Our findings highlight instruction tuning with visually grounded SSL tasks as a powerful lever for improving visual perception in MLLMs through simple adjustments to the training data distribution\.

## MMLongCite: A Benchmark for Evaluating Faithfulness of Long\-Context Vision\-Language Models

**Authors:** Keyan Zhou; Zecheng Tang; Lingfeng Ming; Qiguang Chen; WangJie You; Guanghao Zhou; Dan Qiao; Zheming Yang; Libo Qin; Minghui Qiu; Juntao Li; Min zhang

**ID:** 139310 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y7RQfsqNOj>) | [PDF](<https://openreview.net/pdf?id=Y7RQfsqNOj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139310>)

The rapid advancement of long\-context vision language models \(LCVLMs\) has led to a significant expansion of their context windows\. However, an extended context window does not guarantee the effective utilization of the context, posing a critical challenge for real\-world applications\. Current evaluations of such long\-context faithfulness in multimodal settings remain limited to short contexts\. To bridge this gap, we introduce MMLongCite, the first benchmark evaluating the faithfulness of LCVLMs via multimodal citation generation\. MMLongCite features 2,280 examples across 8 tasks and diverse modalities \(image, video, interleaved\), with context lengths scaled from 16K to 128K tokens\. To test spatial localization capabilities of LCVLMs, we also introduce MMLongCite\-HR, evaluating fine\-grained visual grounding amidst dense pixel spaces\. Through extensive benchmarking of cutting\-edge LCVLMs, we provide a systematic analysis of current multimodal citation capabilities\. Our results reveal a significant discrepancy between answer correctness and citation faithfulness\. We also conduct attention pattern investigations and in\-depth error analyses to reveal the underlying phenomena of failures in LCVLMs\. MMLongCite establishes a rigorous foundation for diagnosing and advancing the faithfulness of LCVLMs\. We hope our findings provide meaningful insights to drive further improvements in the long\-context capabilities of LCVLMs\.

## Rosetta: Composable Native Multimodal Pretraining

**Authors:** Xiangyue Liu; Zijian Zhang; Jian Zhang; Zhao Zhong; Liefeng Bo; Ping Tan

**ID:** 151897 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X7davuwy7B>) | [PDF](<https://openreview.net/pdf?id=X7davuwy7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151897>)

Achieving true artificial general intelligence requires foundation models capable of integrating new modalities without forgetting prior knowledge\. However, accommodating continuous generative objectives alongside discrete understanding tasks causes severe gradient conflicts\. Existing architectures, including standard Mixture\-of\-Experts \(MoE\), are highly susceptible to representation overwriting\. Even structurally partitioned paradigms like Mixture\-of\-Transformers \(MoT\) remain vulnerable to catastrophic forgetting, severely impeding multimodal scalability\. In this work, we introduce Rosetta, a composable native multimodal pretraining framework designed for seamless and non\-destructive modality expansion\. Rosetta adopts a modular paradigm where core foundational knowledge is preserved within global shared experts, while modality\-specific capabilities are distributed across plug\-and\-play experts\. To guarantee non\-destructive composition, we propose Momentum\-Anchored Orthogonal Projection \(MAOP\)\. MAOP leverages the optimizer's momentum state as an implicit semantic anchor, selectively neutralizing conflicting gradient components from new modalities while preserving synergistic updates\. To strictly isolate the architectural impact, we evaluate Rosetta against standard MoE and MoT baselines under strict active parameter parity\. All models are trained from scratch within the Transfusion framework, using discrete next\-token prediction for language and continuous visual diffusion\. Extensive evaluations demonstrate that, while standard MoE and MoT architectures suffer catastrophic forgetting of previously acquired knowledge, Rosetta robustly preserves established language and visual understanding\. Furthermore, it delivers superior image generation and unlocks cross\-modal synergy, paving the way for truly composable and unified multimodal foundation models\.

## FlareReal: A Real\-Captured Paired Dataset for Nighttime Lens Flare Removal

**Authors:** Dafeng Zhang; Shizhuo Liu

**ID:** 139225 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ds9PCmGZWW>) | [PDF](<https://openreview.net/pdf?id=ds9PCmGZWW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139225>)

Nighttime lens flare removal is difficult to study with supervised learning because real flare\-corrupted and flare\-free image pairs are hard to acquire with accurate alignment\. Existing benchmarks therefore rely mainly on synthetic compositing or rendering, but these pipelines cannot fully reproduce the coupled effects of lens contamination, internal reflection, sensor saturation, automatic exposure, and diverse urban light sources\. We introduce FlareReal, a real\-captured benchmark for nighttime flare removal, containing 4,037 pixel\-aligned flare\-corrupted/flare\-free pairs and 500 real pure flare images\. FlareReal is collected through a controlled contamination\-cleaning protocol: each scene is first photographed with physically induced lens contamination and then immediately re\-captured after optical cleaning, followed by robust global alignment and manual curation\. The dataset covers 241 scenes, multiple smartphone lens systems, point/linear/area light sources, single\- and multi\-source layouts, and challenging exposure conditions\. Experiments across representative restoration architectures show that models trained with FlareReal consistently outperform models trained on Flare7K, Flare7K\+\+, and FlareX on Flare7K, FlareX, and FlareReal test sets, and further improve generalization under cross\-device and off\-screen settings\. These results suggest that real paired supervision captures transferable flare formation cues that are difficult to obtain from synthetic data alone\.

## HYDRA: Representation Harmonized Tokenization for Multimodal Generation and Understanding

**Authors:** Xuerui Qiu; Yutao Cui; Guozhen Zhang; Junzhe Li; Yaqi Zhao; Xiao Zhang; Yang Li; Songtao Liu; Jian Zhang; Yu Shi; Zhao Zhong; Liefeng Bo

**ID:** 149164 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sNTc0XTEDc>) | [PDF](<https://openreview.net/pdf?id=sNTc0XTEDc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149164>)

Unified Multimodal Models struggle to bridge the fundamental gap between the abstract representations needed for visual understanding and the detailed primitives required for generation\.  Existing approaches typically compromise by employing decoupled encoders, stacking representation encoder atop VAEs, or utilizing discrete quantization\. However, these methods often disrupt information coherence and lead to optimization conflicts\.  To this end, we introduce \\tokenizer, a representation\-harmonized pure ViT in the insight that visual modeling should evolve from generation to understanding\. \\tokenizer reformulates the standard backbone into a progressive learner that transitions from a Gen\-ViT, which captures structure\-preserving primitives, to a Sem\-ViT for semantic encoding\. Crucially, this transition is mediated by a Generation\-Semantic Bottleneck \(GSB\), which compresses features into a low\-dimensional space to filter noise for robust synthesis, then restores dimensionality to empower complex semantic comprehension\. Built upon this foundation, we present \\model, a native unified framework integrating perception and generation within a single parameter space\.  Extensive experiments establish \\model as a new state\-of\-the\-art\. It sets a benchmark in visual reconstruction \(rFID 0\.08\) and achieves top\-tier generation performance on GenEval \(0\.86\), DPG\-Bench \(86\.4\), and WISE \(0\.53\), while simultaneously outperforming previous native UMMs by an average of $\\sim$10\.0 points across eight challenging understanding benchmarks\.

## SIEVES: Selective Prediction Generalizes through Visual Evidence Scoring

**Authors:** Hector G\. Rodriguez; Marcus Rohrbach

**ID:** 150306\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150306

[Paper](<https://openreview.net/forum?id=j7Y9kxJJPM>) | [PDF](<https://openreview.net/pdf?id=j7Y9kxJJPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150306>)

Multimodal large language models \(MLLMs\) achieve ever\-stronger performance on visual\-language tasks\. Even as traditional visual question answering benchmarks approach saturation, reliable deployment requires satisfying low error tolerances in real\-world out\-of\-distribution \(OOD\) scenarios\. Precisely, selective prediction aims to improve coverage, i\.e\.\\ the share of inputs the system answers, while adhering to a user\-defined risk level\. This is typically achieved by assigning a confidence score to each answer and abstaining on those that fall below a certain threshold\. To enable reliable generalization, we require reasoner models to produce localized visual evidence while answering, and design a selector that explicitly learns to estimate the quality of the localization provided by the reasoner\. We show that SIEVES \(Selective Prediction through Visual Evidence Scoring\) improves coverage by up to three times on challenging OOD benchmarks \(V\* Bench, HR\-Bench\-8k, MME\-RealWorld\-Lite, VizWiz, and AdVQA\), compared to non\-grounding baselines\. Beyond better generalization to OOD tasks, the design of the SIEVES selector enables transfer to proprietary reasoners without access to their weights or logits, such as o3 and Gemini\-3\-Pro, providing coverage boosts beyond those attributable to accuracy alone\. We highlight that SIEVES generalizes across all five tested OOD datasets and reasoner models \(Pixel\-Reasoner, o3, and Gemini\-3\-Pro\), without benchmark\- or reasoner\-specific training or adaptation\.

## PixFoundation 2\.0: Do Video Multi\-Modal LLMs Use Motion in Visual Grounding?

**Authors:** Mennatullah Siam

**ID:** 139117\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139117

[Paper](<https://openreview.net/forum?id=k9wJGm2f4P>) | [PDF](<https://openreview.net/pdf?id=k9wJGm2f4P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139117>)

_Abstract unavailable from the accessible public sources._

## Diffusion Meta\-Prompting and Steering for Generalizable Foundation Model Adaptation

**Authors:** Deepak Sridhar; Yi Li; Kartikeya Bhardwaj; Shuangjun Liu; TAOTAO JING; Yuan Li; Shuai Zhang; Jiancheng Lyu; Dashan Gao; Nuno Vasconcelos

**ID:** 154312\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154312

[Paper](<https://openreview.net/forum?id=EbyKAh8h40>) | [PDF](<https://openreview.net/pdf?id=EbyKAh8h40>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154312>)

_Abstract unavailable from the accessible public sources._

## DriveSpatial: A Benchmark for Spatiotemporal Intelligence in VLMs for Autonomous Driving

**Authors:** Anh Hao Vo; Khoa Vo; Phu Loc Nguyen; Sieu Tran; Duc Nguyen; Cuong Ngo; Gladys Gawugah; Sreevenkata A Godavarthi; Chase Rainwater; Nghi Bui; Anh Nguyen; Duy M\. H\. Nguyen; Ngan Le

**ID:** 139711 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=92Titnm7WK>) | [PDF](<https://openreview.net/pdf?id=92Titnm7WK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139711>)

Spatiotemporal intelligence in autonomous driving \(AD\) requires an agent to integrate multi\-view observations into a coherent scene representation, maintain object continuity across viewpoints and time, and reason about spatial relations, interactions, and future dynamics\. However, existing AD vision\-language benchmarks largely focus on single\-view, static, ego\-centric, or single\-source question answering, leaving it unclear whether current Vision\-Language Models \(VLMs\) can truly construct and reason over dynamic driving scenes\. We introduce DriveSpatial a benchmark of 15\.6K human\-verified QA pairs across 20 tasks from five large\-scale AD datasets\. DriveSpatial evaluates four abilities: Cognitive Scene Construction, Multi\-view Relational Understanding, Temporal Reasoning, and Generalization\. Unlike prior benchmarks, DriveSpatial is generated from a dynamic multi\-relational scene graph that encodes object states, spatial relations, interactions, camera visibility, and temporal correspondences, enabling QA pairs that enforce genuine cross\-view and spatiotemporal reasoning\. Evaluating 15 representative VLMs reveals a substantial human–model gap: the strongest model trails humans by 28\.4 points, with Cognitive Scene Construction emerging as the key bottleneck\. Further diagnostics show that language\-only prompting is insufficient, while explicit BEV grounding consistently improves performance\. These results suggest that current VLMs lack the scene\-construction ability needed for reliable spatiotemporal driving intelligence\. DriveSpatial and its construction pipeline will be released to support future research\.

## MUST: Stage\-Adaptive Stability Control for Test\-Time Scaling in Multimodal Reasoning

**Authors:** YunFeng Deng

**ID:** 153464 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7uQSgKIXG>) | [PDF](<https://openreview.net/pdf?id=L7uQSgKIXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153464>)

Test\-time scaling \(TTS\) improves reasoning by allocating additional inference compute, but in multimodal large language models \(MLLMs\), more compute is not always reliable\. Longer reasoning may amplify visual misperception, induce answer drift, reinforce majority traps, or turn initially correct predictions into overthought failures\. We propose MUST, a training\-free framework that recasts multimodal TTS as stage\-conditioned stability control\. MUST separates inference into reasoning and verification stages and assigns each stage a different reliability criterion\. During reasoning, Contrastive Answer\-Manifold Stability \(CAMS\) selects answers whose supporting trajectories form compact and separable latent groups\. During verification, Attention\-Free Support\-Chain Stability \(AF\-SCS\) evaluates whether explicit visual evidence and subsequent reasoning form a stable latent support chain, without relying on token\-to\-patch attention maps\. Experiments on multimodal reasoning benchmarks show that MUST improves the accuracy\-compute trade\-off and reduces overthinking\-induced errors\. These results suggest that reliable MLLM test\-time scaling should adaptively control when and how extra compute is trusted, rather than simply increasing inference budget\.

## Beyond SFT\-to\-RL: Pre\-alignment via Black\-box On\-policy Distillation for Multimodal RL

**Authors:** Sudong Wang; Weiquan Huang; Xiaomin Yu; Zuhao Yang; Hehai Lin; Keming Wu; Chaojun Xiao; CHEN CHEN; Wenxuan Wang; Beier Zhu; Yunjian Zhang; Chengwei Qin

**ID:** 153111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NrU0jOBYTv>) | [PDF](<https://openreview.net/pdf?id=NrU0jOBYTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153111>)

The standard post\-training recipe for large multimodal models \(LMMs\) applies supervised fine\-tuning \(SFT\) on curated demonstrations followed by reinforcement learning with verifiable rewards \(RLVR\)\. However, SFT introduces distributional drift that neither preserves the model's original capabilities nor faithfully matches the supervision distribution\. This problem is further amplified in multimodal reasoning, where perception errors and reasoning failures follow distinct drift patterns that compound during subsequent RL\. We introduce \\textbf\{PRISM\}, a three\-stage pipeline that mitigates this drift by inserting an explicit distribution\-alignment stage between SFT and RLVR\. Building on the principle of on\-policy distillation \(OPD\), PRISM casts alignment as a black\-box, response\-level adversarial game between the policy and a Mixture\-of\-Experts \(MoE\) discriminator with dedicated perception and reasoning experts, providing disentangled corrective signals that steer the policy toward the supervision distribution without requiring access to teacher logits\. While 1\.26M public demonstrations suffice for broad SFT initialization, distribution alignment demands higher\-fidelity supervision; we therefore curate 113K additional demonstrations from Gemini\~3 Flash, featuring dense visual grounding and step\-by\-step reasoning on the hardest unsolved problems\. Experiments on Qwen3\-VL show that PRISM consistently improves downstream RLVR performance across multiple RL algorithms \(GRPO, DAPO, GSPO\) and diverse multimodal benchmarks, improving average accuracy by \+4\.4 and \+6\.0 points over the SFT$\\rightarrow$RLVR baseline on 4B and 8B, respectively\.

## LoMo: Local Modality Substitution for Deeper Vision\-Language Fusion

**Authors:** Feng Han; Zhixiong Zhang; Zheming Liang; Yibin Wang; Jiaqi Wang

**ID:** 154345 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EHe0liGkCc>) | [PDF](<https://openreview.net/pdf?id=EHe0liGkCc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154345>)

Vision\-Language Models \(VLMs\) have achieved substantial progress across a wide range of understanding and reasoning tasks, driven by large\-scale image\-text training aimed at multimodal fusion\. Ideally, replacing a textual question with its rendered\-image counterpart should leave model performance essentially unaffected\. In practice, however, such modality substitution induces dramatic performance degradation\. We attribute this carrier sensitivity issue to an inherent bias in current training corpora\. Across prevalent datasets such as image captioning, VQA, OCR, and web\-sourced interleaved data, text and images are typically organized into distinct and asymmetric roles, with text serving as linguistic queries and images as visual references\. Such data bias leads VLMs to exhibit distinct preferences for information acquisition across different modalities\. Consequently, VLMs fail to align representations of  semantically equivalent content across textual and visual carriers, making model reasoning fragile under modality substitution\. To address this, we propose Local Modality Substitution \(LoMo\), a lightweight, architecture\-agnostic data curation paradigm designed to provide supervision for cross\-modal representational invariance between semantically equivalent text and image carriers\. LoMo achieves this by reformulating single\-modality prompts into seamlessly interleaved multimodal sequences\. It dynamically selects target text spans and recasts them as rendered images, thereby preserving the same semantics across "text, visual, text" carriers\. Extensive experiments across 13 diverse multimodal benchmarks demonstrate that LoMo significantly improves overall multimodal reasoning and yields deeper cross\-modal fusion\. Specifically, it delivers consistent gains across foundational models, improving over standard SFT by 2\.67 points on LLaVA\-OneVision\-1\.5\-8B and 2\.82 points on Qwen3\.5\-9B\.

## Hierarchical Adaptive Frame Sampling For Video Understanding

**Authors:** Yuyao Sun; Daiqi Shi; Shuang Li; Liao Zhang; Yang Cai; deqing wang

**ID:** 151004 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dfK9DJR2XH>) | [PDF](<https://openreview.net/pdf?id=dfK9DJR2XH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151004>)

Due to context\-length constraints, most MLLMs cannot process full\-length videos and therefore rely on sampling a subset of frames as input\. However, existing sampling methods, ranging from uniform sampling to relevance\-based selection, are often driven by a single sampling principle and thus struggle to accommodate the heterogeneous evidential requirements of different queries: some demand a holistic understanding of how the video unfolds over time, while others hinge on fine\-grained events within a short temporal window\. To address this limitation, we propose Hierarchical Adaptive Frame Sampling \(HAS\), a two\-stage frame sampling framework\. In the first stage, Backbone Frame Construction, we apply a Determinantal Point Process \(DPP\) to sample frames that are both query\-relevant and non\-redundant\. These selected frames capture key moments across the video and form the backbone of the sampling set, providing a foundation for subsequent enrichment\. In the second stage, Adaptive Contextual Enrichment, we analyze the temporal distribution of the backbone frames to infer the query type and adaptively allocate the remaining frame budget between Local and Global Context\. The Local Context enriches the backbone with fine\-grained temporal dynamics and short\-range causal relations, whereas the Global Context connects temporally isolated evidence and provides a holistic view of the entire video to support global understanding\. Through such a hierarchical two\-stage process, HAS effectively addresses diverse query requirements\. Incorporated into three leading MLLMs, it demonstrates consistently superior performance across the Video\-MME, LongVideoBench, and MLVU benchmarks\. We have released our code\.

## GLINT: Sparsely Gated Vision\-Language Alignment for Fine\-Grained Radiology Representations

**Authors:** Jonggwon Park; Seongeun Lee; Junhyun Park; Hannah Yun; Hyunwoong Kim; Sohyun Jeong; Hyewon Kang; Byungmu Yoon; Kyoyun Choi

**ID:** 154081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLHgQkefOp>) | [PDF](<https://openreview.net/pdf?id=GLHgQkefOp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154081>)

Vision\-language models \(VLMs\) for radiology have emerged as a scalable paradigm by leveraging image\-report pairs naturally produced in clinical workflows\. However, this pairing reveals a mismatch in scale: each finding occupies only a small region of the image, yet supervision is provided only at the global image\-report level\. This poses a central challenge: prior approaches spread weight densely across all patches rather than concentrating on the sparse subset relevant to a given query\. To address this, we present GLINT \(Gated Language\-Image alignmeNT\), a framework that explicitly models this sparse correspondence\. On the alignment side, we introduce Sparsely Gated Alignment, a novel architecture in which a sigmoid gate over a separate gate embedding space activates only the patches relevant to each textual query, enforcing explicit sparsity\. On the representation side, we add Dense Feature Regularization, which anchors the trainable encoder's intermediate features to a frozen self\-supervised learning \(SSL\) teacher, preserving the fine\-grained patch features that the gate relies on\. The same recipe applies to both 2D chest X\-ray \(CXR\) and 3D chest computed tomography \(CT\), built with DINOv3 and V\-JEPA 2\.1, respectively\. GLINT enables zero\-shot classification, grounding, and segmentation from free\-text queries, and to our knowledge is the first to demonstrate zero\-shot segmentation on 3D CT volumes without mask supervision\. Notably, the most pronounced gains arise on zero\-shot grounding and segmentation, where sparse, query\-specific localization is required, consistent with our design intent\. In downstream evaluation, GLINT outperforms both SSL encoders and medical VLMs on classification, report generation, and segmentation\.

## TIGER: Bridging the Multimodal Reasoning\-Access Gap via Modality Counterfactuals

**Authors:** Gregory Kang Ruey Lau; Huynh Minh Nguyen; Bryan Kian Hsiang Low

**ID:** 152182 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ux4SAiuLgN>) | [PDF](<https://openreview.net/pdf?id=Ux4SAiuLgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152182>)

Multimodal Large Language Models \(MLLMs\) can exhibit strong text\-based reasoning yet fail to apply the same capabilities to semantically equivalent visual inputs\. We study this failure mode in a controlled setting by rendering text\-only reasoning problems as images, preserving semantic content while changing only the input modality\. Across multiple MLLM families, models solve the same problems substantially better from text than from images\. We characterize this discrepancy as a reasoning\-access gap, where models may correctly perceive visual content but still fail to route that content into the latent reasoning machinery used for text\-based tasks\. To bridge this gap, we propose TIGER \(Text\-to\-Image Gap\-targeted Training for Enhanced Reasoning\), a framework that repurposes text\-only reasoning corpora into effective multimodal training data\. By mining "modality counterfactuals", instances where a model succeeds on a text problem but fails on its semantically\-equivalent rendered image, TIGER provides targeted supervision for reasoning\-access failures without requiring manually curated multimodal datasets\. We implement TIGER using image\-conditioned Group Relative Policy Optimization \(GRPO\), along with SFT and DPO variants, and show how it consistently narrows the modality gap and yields generalized visual reasoning performance gains in multimodal reasoning benchmarks such as MathVerse and EMMA\. We show that Reinforcement Learning with Verifiable Reward\-based models still exhibit modality\-dependent reasoning gaps, and that our training recipe can further reduce these gaps\. Further analysis using reasoning\-subspace activation and activation patching shows that TIGER enables visual representations that better activate reasoning\-relevant latent subspaces of the language backbone\. Our results suggest that advancing multimodal intelligence requires moving beyond perceptual alignment toward explicit visual access to existing reasoning machinery\.

## Two Drifts, One Principle: Conflict\-Aware Spectral Consolidation for Multimodal Continual Learning

**Authors:** Haiyi Zhang; Qianyi Cai; Hanqing Wang; Zilin Wang; Xinyue Di; Yijie Xu; Yili Wang; Tianfu Wang; Yifan Han; Hui Xiong

**ID:** 151270 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bdROoNCzjt>) | [PDF](<https://openreview.net/pdf?id=bdROoNCzjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151270>)

Multimodal continual learning requires MLLMs to acquire new domains and abilities sequentially while retaining previous capabilities\. MoE\-based methods preserve task\-specific knowledge, but inference relies on reliable routing\. We instead study unified continual multimodal consolidation, which forms one shared model from sequential LoRA updates and projector shifts\. LoRA merging naturally supports language\-side consolidation, but extending it to MLLMs raises two challenges\. First, sequential LoRA updates may interfere and overwrite directions important to earlier tasks\. Second, projector mismatch may make the consolidated LoRA update incompatible with the final visual\-language alignment\. To address these challenges, we propose \*\*CASC\*\* \(\*\*C\*\*onflict\-\*\*A\*\*ware \*\*S\*\*pectral \*\*C\*\*onsolidation\), a method that jointly consolidates LoRA and projector updates\. CASC maintains fixed\-rank spectral banks and uses a shared protected subspace memory rule to preserve dominant historical directions while incorporating compatible new updates under fixed rank budgets, yielding a single model without replay data or inference time routing\. Both theoretical analysis and experimental results demonstrate the effectiveness of CASC in addressing multimodal continual learning\.

## Attention Alignment Between Humans and Vision\-Language Models

**Authors:** Isaac Christian; Udith Haputhanthri; Declan Campbell; Samuel Nastase; Taylor Webb; Michael S Graziano

**ID:** 155371 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6839tYClgV>) | [PDF](<https://openreview.net/pdf?id=6839tYClgV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155371>)

Visual perception depends on top\-down goals and bottom\-up sensory mechanisms\. Vision\-language models implement both, allowing us to treat each component as a separable hypothesis about what drives where we look\. We compared spatial attention maps from six vision\-language models against human fixation heatmaps recorded on 200 images during two tasks \(general description and social captioning\)\. The six models spanned a 2$\\times$2 factorial of CNN vs\.\\ ViT encoders crossed with LSTM vs\.\\ Transformer decoders, plus Molmo 7B\-D and Qwen3\.5 9B\. We found that both decoder and encoder architecture shaped alignment, but decoder choice dominated\. LSTM vs\.\\ Transformer decoders increased alignment by 40\-\-50 percentage points \(80\-\-87\\% vs\.\\ 40\-\-59\\% of the human noise ceiling\)\. In contrast, CNN vs\.\\ ViT encoders contributed a secondary 5\-\-20 point advantage depending on decoder family, with CNN\-LSTM the most aligned model overall \(85\-\-87\\%\)\. Despite their alignment advantage, LSTM\-decoder attention maps were spatially diffuse and minimally task\-differentiated; ViT\-Transformer, the weakest in alignment, showed the sharpest spatial concentration and strongest task differentiation\. A hemispatial\-neglect simulation confirmed that ablating attention impacted LSTM decoders more than Transformer decoders\. In an exploratory extension using TRIBE\-simulated synthetic neural responses, fixation alignment and neural relevance dissociate: CNN\-Transformer attention maps better predicted synthetic brain activity despite lower fixation alignment, with attention maps best predicting early visual cortex\. Together, top\-down and bottom\-up components trade off what they predict in behavioral and synthetic neural data\.

## OmniGF: A Dual\-Branch Vision\-Language Framework for Unified Gaze Following

**Authors:** Qiaomu Miao; Haoyu Wu; Jingyi Xu; Minh Hoai; Dimitris Samaras

**ID:** 155919 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1pPCCHeICG>) | [PDF](<https://openreview.net/pdf?id=1pPCCHeICG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155919>)

Understanding human gaze behavior is essential for complex scene comprehension and human\-computer interaction\. Traditional gaze following models are typically restricted to pure spatial localization, lacking the high\-level capacity to reason about semantic targets or complex social contexts\. Furthermore, these models often process individuals sequentially, requiring redundant computations over the same scene image for multi\-person inference\. While recent Vision\-Language Models \(VLMs\) offer the exceptional semantic reasoning needed to address gaze\-related semantic tasks, their reliance on discrete text generation inherently limits precision in continuous spatial tasks like gaze localization\. To bridge this gap, we propose OmniGF, a unified vision\-language framework that adapts foundational VLMs for highly scalable multi\-person gaze reasoning\. The model adopts a dual\-branch decoding strategy: a structured language branch generates discrete reasoning states, while a continuous spatial branch directly taps into the VLM's dense hidden states\. Supervising these extracted representations with high\-resolution gaze target heatmaps effectively overcomes the spatial bottleneck of text\-only coordinate generation\. Furthermore, to explicitly ground the model in multi\-person scenes, we augment the input with head embeddings encoded from cropped head images, providing fine\-grained appearance and orientation cues for all individuals simultaneously\. By modeling all individuals and leveraging the strong semantic capability of VLMs, OmniGF seamlessly integrates precise spatial gaze target estimation, semantic gaze prediction, and complex social gaze reasoning\. Extensive experiments demonstrate that our framework establishes new state\-of\-the\-art performance across multiple standard benchmarks\.

## SynIB: Informational Bottleneck for Maximizing Synergy in Multimodal Learning

**Authors:** Konstantinos Kontras; Teodora Popordanoska; Thomas Strypsteen; Christos Chatzichristos; Matthew Blaschko; Maarten De Vos; Paul Liang

**ID:** 150893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ed96r05m3R>) | [PDF](<https://openreview.net/pdf?id=ed96r05m3R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150893>)

A central objective in multimodal learning is to capture synergy: task\-relevant information that arises only from the joint use of multiple modalities, and is not available from any single modality alone\. While most approaches operate at the architectural level through larger or more complex fusion models, we propose a complementary axis: shaping the training objective itself\. Standard training often emphasizes unimodal or redundant information, falling short on examples that require cross\-modal reasoning\. We formalize multimodal synergy through information theory and introduce the Synergistic Information Bottleneck \(SynIB\), a scalable objective that targets synergy directly\. To prioritize learning synergy, SynIB motivates the model to predict accurately from all modalities while penalizing confidence when information from any modality is withheld\. Alongside the standard task loss, the model runs forward passes with one modality masked at a time and is penalized for remaining confident, which would indicate reliance on unimodal cues rather than cross\-modal interactions\. We validate SynIB in two regimes\. On synthetic XOR tasks where the ground\-truth synergy is known by construction, standard training fails to recover it while SynIB does\. On five real\-world benchmarks, including three MultiBench affective tasks, Hateful Memes with CLIP\-ViT and DeBERTa backbones, and a controllable irony extension of CREMA\-D we introduce, SynIB improves accuracy on synergy\-dependent examples by up to 7\.8\\% and overall accuracy by up to 3\.8\\%\.

## HyperSkill: Multi\-Modal Skill Learning on the Unit Hypersphere

**Authors:** Erdemt Bao; JunChen; Weijun Qin; Shaopeng Li; Ming Li; Mengchen Zhao; Ziqian Zeng; Cen Chen; HUIPING ZHUANG

**ID:** 150015 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lOmo51p8Ne>) | [PDF](<https://openreview.net/pdf?id=lOmo51p8Ne>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150015>)

Language\-conditioned manipulation requires skill representations that are both multi\-modal and predictable: the same instruction may admit diverse executions, while the high\-level planner must select a stable skill for low\-level control\. However, vector\-quantized skill codes compress continuous variations into isolated symbols, introduce biased straight\-through gradients, and lack geometry for relating semantically similar skills\. We propose $\\textbf\{HyperSkill\}$, a hierarchical skill\-learning framework that models skills as continuous embeddings on the unit hypersphere\. We use a learnable von Mises\-\-Fisher mixture prior to capture skill\-level multi\-modality, with geodesic repulsion encouraging diverse mode coverage on the hyperspherical manifold\. To connect training\-time skill inference with inference\-time planning, we introduce Geodesic Skill Alignment \(GSA\), which aligns posterior skills inferred from demonstration segments with prior skills predicted by a high\-level planner using squared geodesic distance\. Together, these components provide a geometrically structured skill interface that preserves execution diversity while enabling causal skill prediction at inference time\. For low\-level control, a Conditional Flow Matching generator produces smooth, multi\-modal action trajectories conditioned on skill embeddings\. Experiments on LOReL and Kitchen demonstrate that HyperSkill achieves state\-of\-the\-art success rates on the evaluated benchmarks\. Ablation studies further validate the importance of each proposed component\.

## Phase\-Adaptive Fusion: Spatio\-Temporal Modulation for VLA Models

**Authors:** Lueke Ni; Junhao Zhu; Xinyu Zhang

**ID:** 155415 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5qxJ8cZwVt>) | [PDF](<https://openreview.net/pdf?id=5qxJ8cZwVt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155415>)

Vision\-Language\-Action \(VLA\) foundation models have driven remarkable progress in general\-purpose robotic manipulation\. Yet, adapting these models to dynamic physical environments exposes a severe vulnerability: a modality imbalance during optimization\. Because low\-dimensional proprioceptive states provide a more direct path for loss minimization, policies instinctively form a "state\-dominant shortcut," systematically suppressing the learning of high\-dimensional visual features\. This visual neglect causes models to bypass precise spatial grounding, leading to catastrophic alignment failures during contact\-critical execution phases\. To rectify this without disrupting natural training dynamics or requiring heavy auxiliary decoders, we introduce Phase\-Adaptive Fusion \(PAF\), a lightweight, non\-intrusive neural modulation plug\-in\. Operating entirely in the forward pass, PAF features a decoupled dual\-branch architecture\. A spatial branch performs explicit semantic\-geometric alignment, while a temporal branch infers latent task execution phases from recent action history and state kinematics\. By synthesizing these signals into a residual gating mechanism prior to multimodal fusion, PAF dynamically amplifies visual tokens precisely during alignment\-heavy stages, all while preserving the host VLA's pre\-trained representational manifold\. Extensive evaluations across simulated benchmarks \(LIBERO, Meta\-World, Robomimic\) and real\-world long\-horizon tasks demonstrate that PAF successfully breaks the proprioceptive shortcut, drastically reducing terminal alignment drift and significantly enhancing overall manipulation robustness\.

## Can LLM Agents Respond to Disasters? Benchmarking Heterogeneous Geospatial Reasoning in Emergency Operations

**Authors:** Junjue Wang; Weihao Xuan; Heli Qi; Pengyu Dai; Kunyi Liu; Hongruixuan Chen; Zhuo Zheng; Junshi Xia; Stefano Ermon; Naoto YOKOYA

**ID:** 139774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5UIA41EzVg>) | [PDF](<https://openreview.net/pdf?id=5UIA41EzVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139774>)

Operational disaster response goes beyond damage assessment, requiring responders to integrate multi\-sensor signals, reason over road networks, populations and key facilities, plan evacuations, and produce actionable reports\. However, prior work largely isolates remote\-sensing perception or evaluates generic tool use, leaving the end\-to\-end workflows of emergency operations underexplored\. In this paper, we introduce \*\*D\*\*isaster \*\*O\*\*perational \*\*R\*\*esponse \*\*A\*\*gent benchmark \(\*\*DORA\*\*\), the first agentic benchmark for end\-to\-end disaster response: 515 expert\-authored tasks across 45 real\-world disaster events spanning 10 types, paired with expert\-verified, replayable gold trajectories totaling 3,500 tool\-call steps\. Tasks span five dimensions that cover the operational disaster\-response pipeline: disaster perception, spatial relational analysis, rescue and evacuation planning, temporal evolution reasoning, and multi\-modal report synthesis\. Agents compose calls from a 108\-tool MCP library over heterogeneous geospatial data: optical, SAR, and multi\-spectral imagery across single\-, bi\-, and multi\-temporal sequences \(0\.015\-10m GSD\), complemented by elevation and social vector layers\. We comprehensively evaluate 13 frontier LLMs on our benchmark, revealing three persistent challenges: 1\) disaster\-domain grounding exposes unique failure modes \(damage\-semantic grounding, sensor\-modality mismatch, and disaster\-pipeline composition\); 2\) agents are doubly bottlenecked by tool selection and argument grounding, where gold tool\-order hints improve accuracy by only 1\.08\-4\.40%, and alternative scaffolds yield at most a 3\.24% gain; 3\) compositional fragility scales with trajectory length, the agent\-to\-gold gap widening from 7% to 56% on long pipelines\. DORA establishes a rigorous testbed for operationally reliable disaster\-response agents\.

## One Language\-Free Foundation Model Is Enough for Universal Vision Anomaly Detection

**Authors:** Bin\-Bin Gao

**ID:** 149035 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLTO6bWhaB>) | [PDF](<https://openreview.net/pdf?id=tLTO6bWhaB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149035>)

Universal visual anomaly detection \(AD\) aims to identify anomalous images and segment anomalous regions towards open and dynamic scenarios, typically adhering to zero\- and few\-shot paradigms without dataset\-specific fine\-tuning\. Recently, the field has seen significant progress driven by the integration of vision\-language foundation models\. However, we observe that current methods often struggle with laborious prompt engineering, elaborate adaptation modules, and complex training strategies that ultimately constrain their flexibility and generalizability\. In this paper, we rethink the fundamental mechanism of vision\-language models for AD and present UniADet, an embarrassingly simple, effective and general framework for Universal vision Anomaly Detection\. Our approach is built on two key insights:  First, we reveal that the primary function of the language encoder is merely to derive decision weights and we demonstrate that it is unnecessary, as these weights can be learned more directly and efficiently\.  Second, to resolve learning conflicts arising from disparate feature manifolds, we introduce a systematic decoupling strategy that learns independent weights across both distinct tasks \(classification vs\. segmentation\) and hierarchical features\. UniADet is highly simple and efficient, learning only decoupled weights and requiring 0\.02M learnable parameters\. It is inherently versatile, adapting seamlessly to various foundation models \(\\eg, CLIP, DINOv2, and DINOv3\)\.  Extensive evaluations of 14 real\-world benchmarks in the industrial and medical domains demonstrate that UniADet not only exceeds state\-of\-the\-art zero/few\-shot methods by a substantial margin, but also outperforms full\-shot AD methods for the first time\. This empirical evidence reveals the profound potential of language\-free frameworks to redefine the boundaries of visual anomaly detection\. The code and models will be made publicly available\.

## Grounding Multimodal Reasoning with Evidence\-Ablated Negatives

**Authors:** chenxi liu; Tianyi Xiong; Yanshuo Chen; Heng Huang

**ID:** 154493 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DBleeCZ9TP>) | [PDF](<https://openreview.net/pdf?id=DBleeCZ9TP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154493>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a powerful tool for improving multimodal reasoning\.  However, standard outcome supervision suffers from credit assignment ambiguity, as a model may receive positive rewards by exploiting language priors or dataset shortcuts rather than grounding its reasoning in the requisite visual evidence\. This makes high\-quality negative responses critical, since effective negatives should remain plausible under the current policy while exposing the shortcut that should be suppressed\.  In this paper, we propose EAN, a multimodal reinforcement learning framework utilizing Evidence\-Ablated Negatives to train LMMs against their own language\-prior failures\.  EAN first identifies highly visually dependent examples using a scaled image information gain metric and preserves data diversity with a mixed\-ranking strategy\.  It then constructs evidence\-ablated images by masking the most discriminative image patches, eliciting plausible but visually ungrounded responses from the current policy\.  During policy optimization, these negative responses are incorporated as bounded auxiliary signals under the clean image, penalizing shortcut learning while maintaining RL stability\.  Experiments across challenging multimodal reasoning benchmarks demonstrate that EAN mitigates modality imbalance and improves over strong RLVR baselines\.

## TopoGraphRAG\-Bench: Evaluating Multimodal GraphRAG on Layout\-Grounded Evidence Reasoning

**Authors:** Ruochi Li; peter lin; Haoxuan Zhang; Haihua Chen; Junhua Ding; Edward Gehringer; Yang Zhang

**ID:** 139025 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pXhvOZB8Qw>) | [PDF](<https://openreview.net/pdf?id=pXhvOZB8Qw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139025>)

Real\-world documents distribute evidence across text, tables, figures, captions, and page layouts\. Answering complex questions over such documents therefore requires more than retrieving relevant passages: systems must recover the evidence topology that connects heterogeneous evidence units\. Existing GraphRAG evaluations focus primarily on text\-derived chunks, entities, and relations, while multimodal document RAG benchmarks evaluate cross\-modal retrieval and generation without directly testing whether systems recover the intended reasoning structure\. We introduce \\textsc\{TopoGraphRAG\-Bench\}, a layout\-grounded benchmark for multimodal evidence reasoning in GraphRAG\. The benchmark contains 2,024 questions over 201 long, visually rich documents, with evidence grounded in text, figures, and tables\. Each instance is constructed bottom\-up from layout\-grounded evidence units and assigned one of three controlled topologies: single\-hop retrieval, bridge\-chain reasoning, or multi\-source synthesis\. To ensure that questions preserve their intended structure, we apply counterfactual validation for shortcut resistance, modality necessity, and evidence necessity\. We evaluate text\-only GraphRAG, page\-level visual retrieval, and multimodal GraphRAG systems using retrieval, generation, and topology\-aware reasoning metrics\. Multimodal GraphRAG systems achieve the strongest overall performance, but still fail when visual\-textual evidence alignment or multi\-unit composition is incomplete\. Text\-only GraphRAG struggles when key dependencies are grounded in figures or tables, while page\-level visual retrieval lacks the fine\-grained structure needed for topology recovery\. These results suggest that future GraphRAG systems must model not only textual entities and relations, but also layout structure, modality alignment, and the reasoning roles of evidence units\. Code and data are available at \\url\{https://anonymous\.4open\.science/r/Benchmark\-B1DE\}\.

## BLEND: Balancing Personalization vs\. Generalization in Federated Vision–Language Models

**Authors:** Payam Abdisarabshali; Fardis Nadimi; Kasra Borazjani; Naji Khosravan; Richeng Jin; Seyyedali Hosseinalipour

**ID:** 154470 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DLc8g7y9QA>) | [PDF](<https://openreview.net/pdf?id=DLc8g7y9QA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154470>)

Federated vision–language models \(FedVLMs\) represent one of the emerging frontiers of machine learning, aiming to integrate federated learning within the fine\-tuning pipelines of vision–language models \(VLMs\)\. In this work, we introduce BLEND, a new framework designed to jointly enhance the personalization and generalization capabilities of FedVLMs\. BLEND proposes a selective VLM parameter fine\-tuning and aggregation strategy that consists of \(i\) global vision and text adapters shared across clients, and \(ii\) a personalized vision projection adapter tailored to each client\. BLEND further introduces a novel loss function that blends the outputs of the global and personalized adapters to achieve personalization, while simultaneously promoting generalization through a principled anchor design implemented via the projection heads of the zero\-shot VLM\. Extensive experiments demonstrate that \{BLEND\} consistently outperforms state\-of\-the\-art baselines, highlighting its ability to effectively balance personalization and generalization across diverse system settings\. \(Code is available at: https://github\.com/blendfedvlm/BLEND\.git\)

## Toward Cognitive Supersensing in Multimodal Large Language Models

**Authors:** Boyi Li; Yifan Shen; Yuanzhe Liu; Yifan Xu; Jiateng Liu; Xinzhuo Li; Zhengyuan Li; Jingyuan Zhu; Yunhan Zhong; Lan Fangzhou; Jianguo Cao; James Rehg; Heng Ji; Ismini Lourentzou; Xu Cao

**ID:** 149050 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tFbXG1BkAG>) | [PDF](<https://openreview.net/pdf?id=tFbXG1BkAG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149050>)

Multimodal Large Language Models \(MLLMs\) have achieved remarkable success in open\-vocabulary perceptual tasks, yet their ability to solve complex cognitive problems remains limited, especially when visual details are abstract and require visual memory\. Current approaches primarily scale Chain\-of\-Thought \(CoT\) reasoning in the text space, even when language alone is insufficient for clear and structured reasoning, and largely neglect visual reasoning mechanisms analogous to the human visuospatial sketchpad and visual imagery\. To mitigate this deficiency, we introduce Cognitive Supersensing, a novel training paradigm that endows MLLMs with human\-like visual imagery capabilities by integrating a Latent Visual Imagery Prediction \(LVIP\) head that jointly learns sequences of visual cognitive latent embeddings and aligns them with the answer, thereby forming vision\-based internal reasoning chains\. We further introduce a reinforcement learning stage that optimizes text reasoning paths based on this grounded visual latent\. To evaluate the cognitive capabilities of MLLMs, we present CogSense\-Bench, a comprehensive visual question answering \(VQA\) benchmark assessing five cognitive dimensions\. Extensive experiments demonstrate that MLLMs trained with Cognitive Supersensing significantly outperform state\-of\-the\-art baselines on CogSense\-Bench and exhibit superior generalization on out\-of\-domain mathematics and science VQA benchmarks, suggesting that internal visual imagery is potentially key to bridging the gap between perceptual recognition and cognitive understanding\. We will open\-source the CogSense\-Bench and our model weights\.

## Glance Before You Tell: Anomaly\-Guided 3D Radiology Report Generation with Heat\-Conduction Slice Encoders

**Authors:** Lingyu Zhou; Dingwen Pi; Zhang Yi; Jun Wu; Xiuyuan Xu

**ID:** 149584 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p124P8VSQH>) | [PDF](<https://openreview.net/pdf?id=p124P8VSQH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149584>)

Generating accurate radiology reports from 3D medical volumes remains prone to hallucination\.  Existing grounding strategies often depend on external visual foundation models or on fixed medical phrase queues\. The former passes segmenter\-derived evidence to generation, where segmentation errors are hard to suppress\. The latter has limited coverage of long\-tail and compositional abnormalities\. We therefore propose HeatRAD, a glance\-before\-tell framework that first routes suspicious slice evidence into an organ\-ordered visual prefix, then generates reports from this localized evidence without explicit grounding supervision\. HeatRAD uses a slice\-centric signed heat\-conduction encoder that performs efficient spectral mixing while separating smooth anatomy from lesion\-like residues\. \\method\{\} then scores suspicious slices, binds their evidence to coarse organ contexts, and assembles an organ\-ordered visual prefix, guiding the decoder toward localized abnormalities instead of redundant volumetric context\. Experiments on three 3D radiology benchmarks show consistent gains in clinical fidelity and hallucination\-related metrics, supporting anomaly\-first evidence selection as an annotation\-efficient paradigm for 3D report generation\.

## Incentivizing Medical Vision Capabilities from Large\-Scale Multimodal Pre\-training

**Authors:** Junying Chen; Zhenyang Cai; Yunjin Yang; Kunyuan Cai; Rongsheng Wang; Xidong Wang; Geyang Yu; Xiangyi Feng; Benyou Wang

**ID:** 156128 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0BXKsjKlFJ>) | [PDF](<https://openreview.net/pdf?id=0BXKsjKlFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156128>)

Building capable medical vision\-language models \(VLMs\) is challenging due to the scarcity of domain data and the difficulty of eliciting pre\-trained medical visual knowledge\. We present HuatuoGPT\-5, a medical VLM built on a simple yet effective recipe: large\-scale multimodal pre\-training followed by reinforcement learning \(RL\)\. We first construct PubMedVision\-Plus, the largest medical image\-text dataset with 60M pairs from public PubMed literature, along with a clean 12M high\-quality subset\. After pre\-training on this data, we find that traditional supervised fine\-tuning \(SFT\) struggles to elicit the pre\-trained knowledge\. In contrast, by applying RL with verifiable and rubric\-based instances synthesized directly from the pre\-training data, we successfully incentivize the model to use this pre\-trained medical visual knowledge\. On PubMed\-derived data, HuatuoGPT\-5 outperforms similarly sized VLMs on multiple medical benchmarks and expert evaluations, significantly narrowing the gap between medical VLMs and leading proprietary VLMs\. We hope these data, models, and findings can help accelerate open research on capable medical VLMs\.

## LaST\-VLA: Thinking in Latent Spatio\-Temporal Space for Vision\-Language\-Action in Autonomous Driving

**Authors:** Yuechen Luo; Fang Li; Zheng Liu; Yang Ji; Zehan Zhang; Bing Wang; Shen Yuannan; Jianwei Cui; Long Chen; Guang Chen; Hangjun Ye; Zhi\-Xin Yang; Fuxi Wen

**ID:** 148177 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ziJsDuu8Jd>) | [PDF](<https://openreview.net/pdf?id=ziJsDuu8Jd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148177>)

While Vision\-Language\-Action \(VLA\) models have revolutionized autonomous driving by unifying perception and planning, their reliance on explicit textual Chain\-of\-Thought \(CoT\) leads to semantic\-perceptual decoupling and perceptual\-symbolic conflicts\. Recent shifts toward latent reasoning attempt to bypass these bottlenecks by thinking in continuous hidden space\. However, without explicit intermediate constraints, standard latent CoT often operates as a physics\-agnostic representation\. To address this, we propose the \*\*La\*\*tent \*\*S\*\*patio\-\*\*T\*\*emporal \*\*VLA\*\* \(\*\*LaST\-VLA\*\*\), a framework shifting the reasoning paradigm from discrete symbolic processing into a physically grounded Latent Spatio\-Temporal CoT\. By implementing a dual\-feature alignment mechanism, we distill geometric constraints from 3D foundation models and dynamic foresight from world models directly into the latent space\. Coupled with a progressive SFT training strategy that transitions from feature alignment to trajectory generation, and further refined via Reinforcement Learning with Group Relative Policy Optimization \(GRPO\) for safety and rule compliance, LaST\-VLA achieves state\-of\-the\-art performance across multiple autonomous driving benchmarks, including \*\*NAVSIM v1\*\*, \*\*NAVSIM v2\*\*, \*\*Bench2Drive\*\*, \*\*SURDS\*\*, and \*\*NuDynamics\*\*\.

## Scaling Multi\-Teacher Distillation for Digital Pathology

**Authors:** Sofiène Boutaj; Pierre Marza; Varun Belagali; Dimitris Samaras; Maria Vakalopoulou; Stergios Christodoulidis

**ID:** 148948 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tz5T3eSFDA>) | [PDF](<https://openreview.net/pdf?id=tz5T3eSFDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148948>)

Multi\-teacher distillation allows transferring knowledge from multiple “teacher” networks to a single “student” network\. This method is promising in fields such as digital pathology, where many powerful foundation models were proposed recently\. However, as we show in this paper, the standard multi\-teacher distillation approach reacts poorly to an increase in the number of teachers used to train a student encoder\. We demonstrate that learning teacher\-specific representations is a key to scaling in MTD\. Importantly, different design choices, such as learnable teacher tokens, a tailored attention scheme, additional mixture\-of\-experts layers and a contrastive loss, are proposed to better learn such teacher\-specific representations\. We show that our method better scales with respect to the number of considered teachers, allowing us to train compact student encoders, up to 10X more efficient than larger teacher foundation models, while matching their performance and even outperforming them on a large set of tile\-level and slide\-level tasks\. We conduct a thorough empirical validation, evaluating more than 10 foundation models on 39 tasks spanning tile and slide levels\. As a result, we release a new collection of strong and efficient foundation models, named OMNI, trained from the knowledge of 10 state\-of\-the\-art foundation models\. We finally conduct an analysis of the learned teacher\-specific representations, highlighting their complementarity and explaining why they can be easily aggregated at downstream time\.

## Does Seeing More Mean Knowing More? Mono\-Anchored Advantage Normalization for Multi\-Source Visual Reasoning

**Authors:** Fanhu Zeng; Zhicong Luo; Zefan Wang; Li You; Chi Chen; Maosong Sun

**ID:** 153810 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IXNKGx1CUw>) | [PDF](<https://openreview.net/pdf?id=IXNKGx1CUw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153810>)

Visual reasoning through reinforcement learning with verifiable rewards \(RLVR\) has achieved remarkable progress\. However, when dealing with multi\-source inputs, existing approaches tend to treat them as a mere accumulation of information, lacking explicit mechanisms to distinguish whether integrating additional sources yields information gain or introduces interference\. Therefore, they struggle to effectively model dynamic interaction when integrating multiple sources, particularly when they differ significantly in physical properties and semantics, \\eg, infrared and depth, leading to inferior performance to mono\-source reasoning when a certain source holds the dominant signal\. To address this issue, we propose MARS, a novel mono\-anchored multi\-source reasoning framework that models each visual modality as an independent information source\. Specifically, by treating mono\-source rewards as dynamic anchors, our method explicitly incorporates the information gain introduced by multi\-source fusion into advantage normalization and adaptively emphasizes mutual promotion between sources while suppressing potential noise or conflicts during RLVR\. From theoretical analysis, our method effectively quantifies information gain introduced by multi\-source integration in gradient estimation, enabling consistent modality regulation\. Empirical results also show impressive 3\.2% and 4\.9% performance gains on GRPO and DAPO across diverse datasets, confirming the effectiveness of our method\.

## MolmoMotion: Forecasting Point Trajectories in 3D with Language Instruction

**Authors:** Jianing Zhang; Chenhao Zheng; Yajun Yang; Rustin Soraki; Winson Han; Chun\-Liang Li; Jason Ren; Max Argus; Jieyu Zhang; Ranjay Krishna

**ID:** 149894 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mRzgdbaTNp>) | [PDF](<https://openreview.net/pdf?id=mRzgdbaTNp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149894>)

Motion forecasting is central to visual intelligence: agents must anticipate how objects will move in order to plan actions, reason about physical interactions, and synthesize realistic futures\. We argue that 3D points in world coordinates provide a general representation that is class\-agnostic, view\-stable, compact, and directly useful for downstream tasks\. We formalize the task of goal\-conditioned 3D point motion forecasting: given a short visual history, a set of 3D query points on an object of interest, and a language description of the intended goal, the model predicts the future 3D trajectory of each point\. We introduce a full stack to study this task at scale: \(1\) MolmoMotion\-1M is a large corpus of action\-described, object\-grounded 3D point trajectory dataset annotated from 1\.16M unconstrained videos; \(2\) PointMotionBench is a human\-verified benchmark spanning 111 object categories and 61 motion types; and \(3\) MolmoMotion is a general motion forecasting model that supports both autoregressive coordinate prediction and flow\-matching\-based trajectory generation\.  MolmoMotion is able to accurately predicts diverse motion patterns with different language instructions, and significantly outperforms all existing motion prediction baselines on PointMotionBench\. Finally, we show that the learned 3D motion prior transfers well to downstream applications: it improves training efficiency and generalization for robot manipulation,  and its predicted trajectories provide effective motion guidance for generative models to synthesize videos with more realistic object motion\.

## FIVE\-VLA: Fast and EffectIVE Closed\-Loop Autonomous Driving with Recurrent Action Memory

**Authors:** Kemal Oksuz; Alexandru Buburuzan; Yuhan Yao; Puneet Dokania

**ID:** 153787 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=If7v5t7QMx>) | [PDF](<https://openreview.net/pdf?id=If7v5t7QMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153787>)

State\-of\-the\-art vision\-language\-action models \(VLA\) for autonomous driving face critical limitations: excessive parameter counts, inefficient high\-resolution image processing, and lack of temporal memory\. We introduce \*\*FIVE\-VLA\*\* \(Fast and EffectIVE VLA\) to address these through two key contributions\. First, we employ an efficient vision encoder that processes high\-resolution \($448 \\times 896$\) images while generating only 98 tokens, over $5\\times$ fewer than existing approaches, and bypass text generation entirely for single\-pass trajectory prediction\. Second, we propose \*\*Recurrent Action Memory \(RAM\)\*\*, a lightweight module that conditions action prediction on previous action tokens, providing temporal context critical for manoeuvres such as overtaking and emergency braking\. With only 641M parameters, FIVE\-VLA completes \*$\\sim$10\\% more routes without traffic rule infractions\* than the previous state\-of\-the\-art VLA on the challenging \\textit\{Bench2Drive\} closed\-loop driving benchmark\. Furthermore, FIVE\-VLA runs at $\\sim$30 fps on an A100 and $\\sim$4 fps on a T4 GPU \(proxy to an edge device\), representing an \*8\-\-30$\\times$ speedup\* over previous methods\. The code will be made public upon acceptance\.

## Split and Bridge: Multimodal Generation via Diffusion Bridging

**Authors:** Ahmad Arrabi; Xiaohan Zhang; Xingyu Li; Safwan Wshah

**ID:** 151356 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bABzi3Dcax>) | [PDF](<https://openreview.net/pdf?id=bABzi3Dcax>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151356>)

Visual data are naturally expressed through multiple complementary modalities \(e\.g\., images and segmentation masks\), each capturing distinct aspects of the same underlying structure\. Most existing multimodal methods adopt a top\-down paradigm, learning a shared latent variable through joint training from scratch, which limits scalability\. We propose Split and Bridge \(SnB\), a bottom\-up framework for multimodal generation that couples pretrained unimodal diffusion models at sampling time\. Rather than learning a unified latent space, SnB generates coherent multimodal samples by following a shared diffusion trajectory up to a split point, after which modality\-specific processes are guided via a bridge module\. This design enables plug\-and\-play reuse of powerful pretrained models without joint training, making it scalable and easily adaptable\. Across standard benchmarks \(PolyMNIST, CelebAMask\-HQ\) and more complex settings \(PIE\-Bench\+\+, ROCO\), SnB consistently achieves a strong balance between sample quality and coherence, as we report a 33% increase in the coherence score on CelebAMask\-HQ over prior top\-down approaches\. We show that SnB naturally extends to downstream zero\-shot tasks such as interleaved co\-generation, image editing, and style transfer\. Our results demonstrate that bottom\-up generation offers a practical and scalable alternative to top\-down multimodal models\.

## ProcObject\-10K: Benchmarking Object\-Centric Procedural Understanding in Instructional Videos

**Authors:** Wenliang Guo; Yu Kong

**ID:** 139834 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1x54DkGsK7>) | [PDF](<https://openreview.net/pdf?id=1x54DkGsK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139834>)

Procedural activities are fundamentally driven by object state transitions, yet existing instructional video benchmarks remain action\-centric and cannot evaluate whether models reason about how objects evolve toward task completion\. In this work, we introduce \\textsc\{ProcObject\-10K\}, the first benchmark that jointly evaluates object\-centric reasoning and temporal evidence grounding in instructional videos, across both egocentric and exocentric views\. It comprises 10,522 open\-ended VideoQA pairs grounded in 1,799 video clips, spanning 137 tasks across 9 domains and five reasoning types covering preconditions, state evolution, counterfactuals, mistakes, and readiness\. Benchmarking 13 leading MLLMs reveals a substantial answering\-grounding gap: models produce plausible answers while failing to localize the supporting evidence \(mIoU $&lt;$ 45\\%\), exposing their reliance on linguistic priors rather than fine\-grained object dynamics\. As a step toward closing this gap, we further provide an object\-centric supervised fine\-tuning baseline with pseudo object\-level supervision and spatial\-temporal constraints\. Models fine\-tuned on \\textsc\{ProcObject\-10K\} not only improve on the benchmark itself, but also transfer effectively to other grounded VideoQA and embodied planning tasks\. The dataset, annotations, and evaluation toolkit will be publicly released to support future research on object\-centric procedural understanding\.

## WebArena\-Pro: A Heterogeneous, Multimodal, Reproducible Benchmark for Web Agents

**Authors:** Imene Kerboua; Fatemeh Pesaran Zadeh; Xing Han Lu; Weijian Qi; Alexander Miller; Junyi Song; Yunjia Tian; Dongjin Kang; Seyeon Choi; Marzia Nouri; Ewen Gueguen; Matteo Boglioni; Fengyuan Liu; Zeyi Liao; Mengqi Yuan; Yue Li; Alexandre Lacoste; Alexandre Drouin; Spandana Gella; Huan Sun; Gunhee Kim; Siva Reddy

**ID:** 139782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=542YGFhHG8>) | [PDF](<https://openreview.net/pdf?id=542YGFhHG8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139782>)

Web agents powered by large language and vision\-language models are increasingly applied to realistic browser work that spans heterogeneous applications, multimodal content, and stateful workflows\. However, existing reproducible web\-agent benchmarks cover only a small number of web applications drawn from a few software categories, and restrict modality to text and vision\. Live benchmarks broaden site coverage but sacrifice reproducibility, since pages and data drift between runs\. Moreover, existing benchmarks do not meaningfully evaluate whether agents can understand and use audio and video content embedded within web tasks\. To address these gaps, we introduce WebArena\-Pro, a benchmark comprising 300 tasks across 20 self\-hosted web applications in six domain categories, spanning distinct interface conventions, workflows, and data models\. Across the evaluated agents, the best performance is achieved by Gemini 3\.1 Pro, which attains 37\.0 \\% success under a 50\-step budget, while open\-source models' performance does not exceed 27\.7\\% success\. Among reproducible, human\-curated web agent benchmarks, WebArena\-Pro provides the broadest application coverage and the most comprehensive multimodal support to date\. The benchmark treats audio and video as core observations alongside text and vision, with dedicated actions for extracting information from each\. WebArena\-Pro runs each task in isolation and supports reproducible, parallel evaluation\. Tasks are authored through a dedicated annotator interface, filtered by LLM\-assisted triage, and finally validated by humans before release\.

## Searching Videos as Trees: Self\-Correcting Agents for Grounded Long Video QA

**Authors:** Ce Zhang; Ziyang Wang; Yulu Pan; Oluwatumininu Oguntola; Pranav Wagh; Qiyu Wu; Hiromi Wakaki; Mohit Bansal; Gedas Bertasius

**ID:** 149784 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nK3rqD3vLo>) | [PDF](<https://openreview.net/pdf?id=nK3rqD3vLo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149784>)

Grounded long\-video question answering, or Grounded LVQA, is the task of answering a question about a long video while also locating the short time interval in the video that supports the answer\. Recent agentic methods approach this problem as a multi\-turn exploration process with a single crop\_video\(start, end\) action\. This action allows the model to progressively narrow its search from coarse to fine regions, but it does not provide a direct way to backtrack from a fine\-grained mistake to a broader context\. As a result, these agents often stop after only two turns and are unable to recover once they descend into the wrong part of the video\. We propose VideoTreeSearch \(VTS\), a framework that formulates grounded LVQA as an iterative, self\-correcting search over an adaptive temporal tree\. VTS builds a non\-uniform tree from scene boundaries so that each node corresponds to a semantically coherent video segment\. It then trains an agent to navigate this tree using four discrete actions: zoom\_in, zoom\_out, shift, and answer\. These actions make backtracking and recovery explicit and learnable, rather than leaving them as implicit behaviors\. To train the agent, we introduce a trajectory synthesis pipeline that generates multi\-step navigation paths through the tree, including intentional detours into incorrect branches followed by recovery\. These trajectories are first used for supervised fine\-tuning and then for reinforcement learning with rewards based on grounding quality and answer accuracy\. On three Grounded LVQA benchmarks—CG\-Bench, Haystack\-LVBench, and Haystack\-Ego4D—VTS outperforms the strongest previous agentic methods by 12\.5 mIoU on CG\-Bench and 7\.4 T\-F1 on Haystack\-Ego4D\. The learned policy also transfers to general long\-video question answering, surpassing all prior agentic baselines on Video\-MME, MLVU, and LVBench by up to 7\.1 accuracy points\. Ablation studies show that self\-correcting hierarchical search is the key factor behind these improvements: removing either adaptive descent or explicit backtracking leads to substantial performance drops\.

## Beyond Hard Negatives: Grounded Positive Supervision for Compositional CLIP

**Authors:** Harsh Udai; Konda Reddy Mopuri; Vineeth N Balasubramanian

**ID:** 150916 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eQSREPESTi>) | [PDF](<https://openreview.net/pdf?id=eQSREPESTi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150916>)

CLIP\-style vision\-language models transfer broadly but remain brittle for compositional reasoning, often collapsing object\-attribute binding and inter\-object relations\. We attribute this gap to limited compositional diversity in web\-scale data and contrastive objectives that prioritize global alignment over grounded structure\. Many fixes rely on caption\-edited hard negatives, which can bias learning toward specific perturbation templates and trade off against general alignment\. We propose GPS\-CLIP, which improves compositionality by adding multi\-granular positive constraints to standard contrastive learning: IoU\-weighted multi\-positive region\-span alignment and relation\-triplet alignment in the shared embedding space\. GPS\-CLIP uses existing grounded annotations during fine\-tuning, keeps the dual\-encoder architecture unchanged, and requires only images and text at inference\. Across SugarCrepe, What'sUp, COLA, and Winoground, GPS\-CLIP achieves state\-of\-the\-art compositional performance while improving cross\-modal retrieval and zero\-shot recognition\. Beyond compositionality, GPS\-CLIP \(i\) achieves the strongest MMVP\-VLM results for fine\-grained visual understanding and \(ii\) yields a more structured embedding space with improved object/attribute separability on UT\-Zappos geometric analysis compared to hard\-negative variants\. Overall, GPS\-CLIP offers a streamlined way to improve VLM compositional robustness\.

## Training\-free Focus\-Ambient Retention for Memory\-Efficient Video Large Language Models

**Authors:** Haozheng Zeng; Qi Bi; Gui\-Song Xia

**ID:** 154583 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CVfZbrvMBG>) | [PDF](<https://openreview.net/pdf?id=CVfZbrvMBG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154583>)

Video large language models are often dominated by visual tokens, which lengthen prefill, enlarge KV\-cache residency, and raise peak memory\.  In spirit of the philosophy $\\textit\{focus more and memorize less\}$, we introduce Focus\-\-Ambient Retention \(FAR\), a training\-free visual token retention method that routes visual evidence through two complementary streams\. The Focus stream preserves task\-critical objects, actions, text, and fine details, while the Ambient stream keeps scene context only when it differs from a temporal cache\. FAR combines visual attention, local frequency variation, and bounded query relevance to score tokens, then assembles a fixed\-budget context with diversity control before language\-model prefill\.  Across five video understanding benchmarks under a variety of model sizes, FAR significantly reduces peak VRAM by up to $50\.6\\%$ under matched retained\-token budgets while achieving comparable or even superior performance over the state\-of\-the\-art, improving the quality\-memory trade\-off\.  Overall, FAR offers a position\-aware alternative to frame\- or block\-level compression for efficient inference\. Code will be available\.

## Grounding Driving VLA via Inverse Kinematics

**Authors:** Junsung Park; Hyunjung Shim

**ID:** 152499 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SgCKaaYRfX>) | [PDF](<https://openreview.net/pdf?id=SgCKaaYRfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152499>)

Existing Driving VLAs predict trajectories while largely ignoring their visual tokens– a phenomenon we trace not to insufficient training but to a structurally ill\-posed task formulation\. We show that trajectory recovery, when viewed through the lens of inverse kinematics, requires both a current and a future visual state as boundary conditions; existing VLAs supply only the former, which encourages the model to shortcut through ego status and text commands alone\. To address this, we re\-design Driving VLA in the style of an inverse kinematics solver\. First, a next visual state prediction objective that requires the LLM to predict the future visual scene provides dense visual supervision and suppresses shortcut paths\. Second, a separate Inverse Kinematics Network \(a cross\-attention\-based conditional diffusion model\) that takes only the current and future visual states as input is designed to suppress reliance on ego status and textual shortcuts during trajectory decoding\. With this simple prescription alone, our 0\.5B\-scale model recovers visual grounding and reaches trajectory planning performance comparable to 7B–8B VLAs more than an order of magnitude larger, on both the closed\-loop NAVSIM\-v2 and the nuScenes benchmarks\. Extensive analysis further shows that this improvement stems from a recovered ability to exploit visual features, with the effect being most pronounced in dynamic driving situations such as turning\.

## MMCompass: Diagnosing Position Bias in Generative Multimodal Reward Models

**Authors:** Hongbo Zhao; Mingkun Yang; Yantao Liu; Yichang Zhang; Fei Huang; Zhibo Yang; Dayiheng Liu; Shuai Bai

**ID:** 150160 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kD0UhoI24Y>) | [PDF](<https://openreview.net/pdf?id=kD0UhoI24Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150160>)

Generative multimodal reward models are increasingly used to rank responses, guide alignment, and serve as automatic judges, making their reliability a central concern\.  However, existing multimodal reward benchmarks remain limited in annotation rigor, domain coverage, response model diversity, and robustness\-oriented evaluation, making it difficult to assess reward models under realistic and diagnostic settings\.  To address these gaps, we introduce MMCompass, a new benchmark for evaluating generative multimodal reward models\. MMCompass contains carefully verified preference pairs spanning 10 multimodal domains, with responses collected from 16 vision\-language models\. The benchmark is constructed through a multi\-stage pipeline including AI\-assisted difficulty filtering, blind multi\-annotator verification, and expert review\.  To enable more diagnostic evaluation, we adopt three complementary metrics: overall accuracy, symmetric accuracy, and verdict guess rate, which jointly measure judgment quality, order robustness, and position bias\. Evaluations on MMCompass show that position bias is widespread in our evaluated setting, even among strong multimodal judges and that standard accuracy alone often overestimates reliability\. Beyond this diagnosis, we further provide CompassRM as a mitigation baseline for improving cross\-order consistency\. Built with dual\-order supervised fine\-tuning and the proposed GXPO \(Group Cross Policy Optimization\), CompassRM improves robustness over its instruct\-model backbones on MMCompass, VLRewardBench, and MMRewardBench, while also improving overall judgment accuracy\.

## Emergent Visual Thinking in Text\-Only Reasoning through Multimodal Training

**Authors:** Qi Zhang; Bohan Wang; QIANRU SUN; Hanwang Zhang

**ID:** 153218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mvqk8cd5uy>) | [PDF](<https://openreview.net/pdf?id=Mvqk8cd5uy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153218>)

Does multimodal training make a language model think visually, even when the input is text only? We test this with targeted causal ablations across 10 multimodal configurations from 6 model families, with matched text\-only backbones and cross\-family transfer controls\. We contrast spatial\-imagery tasks that invite mental scene construction with symbol\-manipulation tasks solvable by symbolic rules alone\. We identify a vision\-language axis in hidden\-state space and ablate its projection at inference\. In Chameleon\-7B, this ablation drops accuracy on BIG\-Bench Hard \(BBH\) navigate by 27\.6 percentage points while improving boolean expressions by 5\.2 percentage points, a 32\.8 percentage\-point double dissociation\. The effect is direction\-specific and layer\-localized\. Together, these results reveal emergent visual thinking \(EVT\): text\-only reasoning that causally depends on visual\-spatial representations shaped by multimodal training\. In dual\-path unified models \(BAGEL, Janus\-Pro\), the causal handle localizes to the generation pathway as a compact one\-dimensional carrier\. The understanding pathway also encodes spatial information in a higher\-rank, probe\-decodable form, but is not the causal handle\. To separate decodability from causal use, we analyze concentration, alignment, and semantic location\. These diagnostics explain why behavior, probing, and intervention can diverge\. Multimodal training therefore reshapes the geometry of text\-only reasoning, beyond changing how visual input is processed\.

## QGround: Condition\-Wise Evidence Aggregation for 3D Grounding with 2D VLMs

**Authors:** Fengyun Wang; Jian Wang; Dingwei Zhang; Jinhui Tang; QIANRU SUN

**ID:** 154571 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CbyT2otOb4>) | [PDF](<https://openreview.net/pdf?id=CbyT2otOb4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154571>)

Using 2D vision\-language models \(VLMs\) for 3D grounding raises a decision\-formulation problem: how should image\-level evidence be turned into a 3D object decision? This problem matters as pretrained 2D VLMs provide strong visual\-semantic evidence, while 3D grounding requires disambiguating objects in cluttered scenes\. Current VLM\-based formulations make this conversion holistically: the model either selects one object from a rendered candidate set or assigns one overall match judgment to each candidate\. Such decisions obscure the evidence needed for disambiguation, since different candidates may satisfy different subsets of the category, attribute, and relational cues\. In this work, we reformulate 3D grounding with 2D VLMs as condition\-wise evidence aggregation\. The reformulation follows three principles: use natural object\-centric images rather than rendered candidate images; read the referring expression condition by condition rather than as one holistic query; and use model preference rather than a hard match output as grounding evidence\. We instantiate these principles in QGround, a training\-free implementation of this decision formulation\. Experiments on ScanRefer and Nr3D show improved grounding performance, with analyses demonstrating stronger candidate disambiguation and more interpretable decisions\.

## Endowing Your Vision\-Language\-Action Model with a Predictive Mind

**Authors:** Pengxiang Ding; Haoying Wang; Minghui Lin; Qishen Wang; Zhenyu Ding; Runze Suo; Xuanxuan An; Wenxuan Song; Fuhao Li; Han Zhao; Donglin Wang; Ning DING

**ID:** 155390 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=61rEbqQcpq>) | [PDF](<https://openreview.net/pdf?id=61rEbqQcpq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155390>)

Vision\-Language\-Action \(VLA\) models transfer semantic priors from large\-scale vision\-language models to robotic manipulation, but their backbones are typically optimized for static visual understanding rather than action\-conditioned dynamics\. Consequently, the features used by the policy may lack predictive information about how the scene evolves under the robot's actions\. Existing future\-prediction methods either reconstruct pixels, overemphasizing appearance details irrelevant to control, or use auxiliary latent predictors that remain weakly coupled with the policy\-consumed backbone features\. We propose PredMind, a plug\-and\-play predictive representation learning framework that treats future prediction as a training signal for the VLA backbone itself\. Instead of reconstructing future pixels, PredMind aligns intermediate backbone representations with their future counterparts conditioned on executed actions, shifting supervision from low\-level appearance to the model's semantic feature space\. This directly injects action\-conditioned temporal structure into the representation hierarchy used for control while preserving pretrained VLM priors\. All auxiliary prediction components are discarded after training, introducing no architectural changes, additional parameters, or inference latency at deployment\. Across simulation benchmarks, real\-world manipulation tasks, and multiple VLA backbones, PredMind consistently improves learning efficiency and final performance\. Especially on LIBERO, it matches or surpasses a fully trained base VLA using only 1/60 of the training iterations, demonstrating the benefit of embedding predictive dynamics directly into backbone features used for control\. Anonymous code is available at https://anonymous\.4open\.science/r/PredMind\.

## Swift Sampling: Selecting Temporal Surprises via Taylor Series

**Authors:** Dahye Kim; Bhuvan Sachdeva; Karan Uppal; Naman Gupta; Vineeth N Balasubramanian; Deepti Ghadiyaram

**ID:** 151623 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZACohTphcr>) | [PDF](<https://openreview.net/pdf?id=ZACohTphcr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151623>)

While most frames in long\-form video are redundant, the critical information resides in $\\textit\{temporal surprises\}$: moments where the actual visual features deviate from their predicted evolution\. Inspired by the human brain’s predictive coding, we introduce $\\textbf\{Swift Sampling\}$, an elegant, training\-free frame selection algorithm that automatically identifies high\-information moments in a video\. Specifically, we model a video as a differentiable trajectory in the visual latent space and compute the velocity and acceleration of its features\. Then, we apply Taylor expansion to project the expected path of subsequent frames\. Frames that diverge sharply from this predicted manifold are identified as temporally surprising frames and selected for sampling\. Unlike prior training\-free methods that rely on auxiliary networks or video\-specific hyperparameter tuning, Swift Sampling is incredibly lightweight, adding only $\\mathbf\{0\.02\\times\}$ additional computational cost over baseline making it $30\\times$ cheaper overhead than leading baselines\. Across three long\-video question answering benchmarks and $10$ different downstream tasks, Swift Sampling outperforms uniform sampling and prior query\-agnostic baselines\. It is especially powerful for long videos with limited frame budgets improving accuracy by up to $\\mathbf\{\+12\.5\}$ points\.

## Video\-FLAIR: Not Whether to Reason, But How

**Authors:** Yogesh Kulkarni; Pooyan Fazli

**ID:** 155230 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7IM0JvagQT>) | [PDF](<https://openreview.net/pdf?id=7IM0JvagQT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155230>)

Multimodal queries can require different types of reasoning\. Some can be answered via \*perceptual\* reasoning, extracting information directly from the visual signal, while others require \*compositional\* reasoning that combines observations or \*deliberative\* reasoning that evaluates competing hypotheses\. However, many existing methods apply a uniform reasoning strategy across queries, leading to unnecessary computation on simple tasks and insufficient reasoning on complex ones\. We introduce \*\*Video\-FLAIR\*\*, a training framework that learns to select the appropriate reasoning mode for each query using reinforcement learning\. During training, the model generates responses under all three modes for the same prompt, enabling direct comparison\. A composite reward compares these responses to favor the most effective one based on correctness, grounding, and cost, while discouraging unsupported or misaligned deliberation\. This yields a supervision signal for learning adaptive reasoning without per\-query annotations\. Video\-FLAIR improves accuracy over the Qwen2\.5\-VL base model by \*\*\+5\.4\*\* on MathVista, \*\*\+4\.8\*\* on Video\-Holmes, and \*\*\+4\.8\*\* on Video\-MMMU, while reducing average token usage to \*\*95\*\* compared to \*\*417\*\* for always\-thinking baselines\.

## QB\-Highlights: Quality\-Guided Budgeted Highlight Detection in Videos with Dense Query\-Relevant Moments

**Authors:** chao gao; Hui Li; Ying Chen; Zongyao He; Sibin Deng

**ID:** 154472 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DL5YOX0HxC>) | [PDF](<https://openreview.net/pdf?id=DL5YOX0HxC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154472>)

Highlight detection in content\-dense untrimmed videos, such as livestreams, is particularly challenging due to the prevalence of semantically similar moments and the application\-driven demand of fitting a target duration budget\. Existing methods typically rank segments independently based on semantic relevance, struggling to discriminate fine\-grained quality among similar moments and allocating the budget to redundant selections\. We therefore reformulate highlight detection as jointly selecting high\-quality and complementary segments under a duration budget\. To study this formulation, we introduce QB\-Highlights, a large\-scale benchmark of 50,000 e\-commerce livestream videos with densely occurring query\-relevant events and subtle quality variations\. QB\-Highlights is organized around two complementary dimensions: Segment Qualification, which assesses fine\-grained per\-segment quality; and Budgeted Composition, which evaluates set\-level complementarity under a duration budget\. It provides MLLM\-assisted pseudo labels for training, dense human annotations for testing, and an evaluation protocol jointly measuring quality and diversity\. We further propose a Qualification\-then\-Composition Reasoning \(QCR\) framework that performs structured deliberative reasoning to produce a highlight set matching the target duration\. Extensive experiments show that QCR outperforms strong MLLM, moment retrieval, and highlight detection baselines on both segment quality and compositional diversity\.

## From Failure Taxonomy to Intervention: A Diagnostic Methodology for Industry\-Scale AVLM in Video and Live\-Streaming Platform Moderation

**Authors:** Shuchang Ye; Jinqiang Yu; Zhujun Xiao; Yajing Kong; Yist Y Lin; Yang Ma; Jiaxi Liu; Xiaolei XU; Zheng Yu

**ID:** 150406 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iHDLD34qCf>) | [PDF](<https://openreview.net/pdf?id=iHDLD34qCf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150406>)

Industry\-scale video and live\-streaming moderation imposes requirements that are difficult to satisfy with generic pretrained public models or external APIs, including adaptation to platform\-specific data distributions, policy\-specific objectives, and product\-level safety constraints\. As a result, platforms must undertake internal model development, naturally turning to shared public research for guidance\. However, existing multimodal foundation\-model studies primarily report architectures, training recipes, data scaling strategies, and benchmark results, but provide less systematic guidance on how failures should be localized and translated into targeted model\-development interventions\. Interventions are essential because deployment failures are rarely self\-explanatory\. Similar failures can originate from different causes\. Without targeted interventions, improvement reduces to heuristic trial\-and\-error, where benchmark improvements are weakly attributable, and failures are difficult to trace to their underlying causes\. To address this gap, we present a diagnostic methodology for industry\-scale  Audio\-Visual\-Language Models\~\(AVLM\) development\. The methodology maps model failures into a taxonomy of observable failure signatures and links each class of failure to an intervention space\. We instantiate this methodology across the development and alignment lifecycle of an AVLM foundation model for a large\-scale video and live\-streaming platform\. The resulting system supports over 100 regions and is designed for noisy, ambiguous, and highly diverse content drawn from global platform traffic\.

## MM\-SCALE: Evaluating Evidence\-Grounded Moral Judgment in Vision\-Language Models

**Authors:** Eunkyu Park; Wesley Deng; Cheyon Jin; Matheus Kunzler Maldaner; Jordan Wheeler; Jason I Hong; Hong Shen; Adam Perer; Kenneth Holstein; Motahhare Eslami; Gunhee Kim

**ID:** 139031 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pEwPVraAsB>) | [PDF](<https://openreview.net/pdf?id=pEwPVraAsB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139031>)

Vision\-Language Models increasingly make socially consequential judgments from image\-text inputs, yet current evaluations often stop at verdict\-level accuracy: whether the final label is human\-aligned, not whether it follows from the correct evidence\. We introduce MM\-SCALE \(Multimodal Moral SCALE\), a benchmark for evidence\-grounded moral judgment built around a design choice: each image is paired with multiple action scenarios, so models must compare how different actions interact with the same visual context rather than score images in isolation\. MM\-SCALE contains 8,444 image contexts and 21,977 action scenarios, each annotated with a 5\-point moral acceptability rating and a modality\-grounding label indicating whether the human judgment relied on text, image, or both\. Three tasks evaluate whether models \(i\) assign calibrated scalar moral scores, \(ii\) preserve human orderings within a shared visual context, and \(iii\) ground rationales in the evidence source humans found critical to judgment\. Across models, aggregate metrics overstate alignment: NDCG@5 remains high across models, while within\-image pairwise accuracy remains only 0\.53\-\-0\.62 even on scenario pairs whose human mean ratings differ by at least one point\. CoT has inconsistent effects on calibration and does not reliably improve within\-image ordering\. Evidence\-grounding evaluations further show that models often describe visual context without making it critical for the verdict\. These results reveal an evidence\-grounding failure in current VLMs and position MM\-SCALE as an evaluation testbed for moral judgment under shared image contexts\. This dataset includes potentially harmful and sensitive visual content\. Images are intended solely for evaluation\.

## AIR: Rethinking Image\-Text Offset Alignment in Multimodal Contrastive  Representation Space

**Authors:** Guimeng Liu; Milad Abdollahzadeh; Ngai\-Man \(Man\) Cheung

**ID:** 151241 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqgwUpKHsr>) | [PDF](<https://openreview.net/pdf?id=bqgwUpKHsr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151241>)

Image\-text offset alignment, which refers to the consistency between visual transformation directions and their corresponding textual transformation directions, has become an important relational property in multimodal contrastive representation space \(e\.g\., CLIP or SigLIP\)\.  This property is widely utilized in text\-guided generative modeling tasks, such as generative model domain adaptation and text\-guided Image\-text offset alignment, which refers to the consistency between visual transformation directions and their corresponding textual transformation directions, has become  an important relational property in multimodal contrastive representation spaces such as CLIP and SigLIP\. This property plays a central role in text\-guided generative modeling tasks, including generative model domain adaptation and text\-guided image editing, where textual offsets are used to guide visual transformations\. These methods fundamentally rely on the assumption that image and text offsets are well aligned, such that textual transformation directions can provide reliable guidance for corresponding visual transformations\. However, the validity of this assumption has not been systematically examined\. \*\*In this work\*\*, we question this foundational assumption by conducting a comprehensive empirical analysis of image\-text offset alignment in multimodal contrastive representation space\. Our findings reveal not only noticeable offset misalignment but also a meaningful positive correlation between image\-text offset misalignment and semantic concept distance across six large datasets and eight contrastive vision\-language models\. Based on this discovery, we propose Adaptation with Iterative Refinement \(AIR\), a method that iteratively refines text offsets through anchor sampling and our proposed  concept description learning to reduce image\-text offset misalignment and improve guidance accuracy\. Comprehensive experiments on zero\-shot generative model domain adaptation and text\-guided image editing, including qualitative, quantitative, and user studies, consistently show that AIR enables state\-of\-the\-art performance in these tasks\. \*\*Code and additional experiments are available in the supplementary material\.\*\*

## Benchmarking Multimodal Mathematical Reasoning with Explicit Visual Dependency

**Authors:** Zhikai Wang; Jiashuo Sun; Wenqi Zhang; Zhiqiang Hu; Xin Li; Deli Zhao

**ID:** 139044 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oFfds87D30>) | [PDF](<https://openreview.net/pdf?id=oFfds87D30>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139044>)

Recent advancements in Large Vision\-Language Models \(LVLMs\) have significantly enhanced their ability to integrate visual and linguistic information, achieving near\-human proficiency in tasks like object recognition, captioning, and visual question answering\. However, current benchmarks typically focus on knowledge\-centric evaluations that assess domain\-specific expertise, often neglecting the core ability to reason about fundamental mathematical elements and visual concepts\. We identify a gap in evaluating elementary\-level math problems, which rely on explicit visual dependencies\-requiring models to discern, integrate, and reason across multiple images while incorporating commonsense knowledge, all o which are crucial for advancing toward broader AGI capabilities\. To address this gap, we introduce VCBench, a comprehensive benchmark for multimodal mathematical reasoning with explicit visual dependencies\. VCBench includes 1,720 problems across six cognitive domains, featuring 6,697 images \(averaging 3\.9 per question\) to ensure multi\-image reasoning\. We evaluate 26 state\-of\-the\-art LVLMs on VCBench, revealing substantial performance disparities, with even the top models unable to exceed 50% accuracy\. Our findings highlight the ongoing challenges in visual\-mathematical integration and suggest avenues for future LVLM advancements\.

## Plan4D: Generative Plannable 4D Worlds

**Authors:** Hangwei Zhang; Rujing Dang; Ruimin Lin; Jiahong Wu; Xiangxiang Chu; Chuanxia Zheng

**ID:** 150639 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gaam2u8q1T>) | [PDF](<https://openreview.net/pdf?id=gaam2u8q1T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150639>)

Most world models for future prediction prioritize aestetic quality of generated videos, but offer only weak physical grounding and limited geometric consistency over time, due to the lack of explicit 4D modeling\. In this paper, we introduce plan4d, a possible next milestone towards building a generative plannable 4D world model that predicts future RGB videos together with dense 4D geometry, including depth, cameras, point clouds, and scene flow from an observed scene context and text\-specified actions\. Since training data with paired actions and dense 4D annotations is inherently scarce, plan4d leverages the complementary priors of foundational video generators and 3D reconstructors\. Specifically, we propose a model\-stitching architecture that couples Depth Anything 3 with LongCat\-Video and augments it with an auxiliary DPT head for scene\-flow prediction\. The resulting model allows us to plan and generate complex, long\-horizon, and fine\-grained actions in a dynamic 3D scenes, while substantially improving both visual fidelity and geometric accuracy of the generated future videos\. Extensive experiments on both synthetic and real\-world datasets demonstrate that plan4d achieves state\-of\-the\-art performance in generative 4D modeling of environmental reactions\.

## Evaluating Spatiotemporal Reasoning of Vision\-Language Models in Atari Gameplay

**Authors:** Mingjia Huo; Yao Fu; Bo Chang; Yaqing Wang; Dawei Zhu; Dylan Zhang; Xinyang Yi; Lichan Hong; Ed Chi; Hao Zhang; Jiaxi Tang

**ID:** 139638 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DxBsMki9Zo>) | [PDF](<https://openreview.net/pdf?id=DxBsMki9Zo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139638>)

Vision\-Language Models \(VLMs\) have achieved strong performance on static visual understanding benchmarks, yet their ability to act in dynamic environments remains poorly understood\. We introduce AtariBench, a controlled benchmark that evaluates VLMs across 20 Atari 2600 games, requiring models to make sequential decisions from high\-temporal\-resolution gameplay streams\. By decoupling fast in\-game dynamics from wall\-clock inference speed, AtariBench focuses on whether models can perceive rapid visual state changes, reason over spatiotemporal dynamics, and ground actions in the current observation\. Our experiments reveal substantial limitations in state\-of\-the\-art VLMs: models often fail to infer object motion and direction, exhibit brittle sequential decision\-making, and increasingly over\-rely on textual interaction history rather than newly appended visual feedback\. We further introduce a separability analysis to identify which in\-game scores provide reliable signals of model competence, and use the benchmark to study how memory design and prompting strategies affect performance\. Overall, AtariBench exposes a persistent gap between passive visual perception and active decision\-making, providing a lightweight and rigorous testbed for developing VLMs that can reason and act in dynamic environments\.

## No Free Alignment: Observability\-Aware Alignment for Multimodal Heterogeneous Learning

**Authors:** Canran Xiao; Puning Zhao; Enneng Yang; XIAOCHUN CAO; Haobo Fu; Li Shen

**ID:** 153751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IyPJb0blHd>) | [PDF](<https://openreview.net/pdf?id=IyPJb0blHd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153751>)

Multimodal heterogeneous learning aims to train reliable multimodal models when data sources differ in modality availability, semantic coverage, domain distribution, and missingness patterns\. Although cross\-modal alignment is widely used to mitigate such heterogeneity, we argue that alignment is not free: enforcing relations that are weakly supported by the observed data can amplify noise, over\-transfer missing\-modality information, and induce negative transfer\. This paper studies when a modality\-\-modality\-\-semantic relation is sufficiently observable to be safely aligned and shared across heterogeneous sources\. We propose \*\*ObsAlign\*\*, an observability\-aware framework that summarizes visible modality\-\-semantic evidence through compact source\-level sketches and estimates relation\-level support from bridge evidence, side support, cross\-modal consistency, and prototype uncertainty\. The resulting observability score gates co\-observed alignment, calibrates weak missing\-modality transfer, and guides evidence\-aware source consolidation so that reliable relations are shared while unsupported variation remains local\. Across image\-\-text, audio\-\-visual\-\-text, action\-recognition, sensor, and healthcare benchmarks under source\-partitioned multimodal heterogeneity, ObsAlign achieves the best overall performance in both encoder\-based and VLM\-compatible regimes, while sharply reducing negative transfer on low\-observability relations\. These results suggest that relation\-level observability provides a practical principle for deciding when cross\-modal alignment should be strengthened, weakened, or avoided\.

## Structure Over Scale: Learning Visual Reasoning from Pedagogical Video

**Authors:** Bishoy Galoaa; Xiangyu Bai; Sarah Ostadabbas

**ID:** 153531 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ke7sRt4MQA>) | [PDF](<https://openreview.net/pdf?id=Ke7sRt4MQA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153531>)

State\-of\-the\-art vision\-language models \(VLMs\) score impressively on video benchmarks yet stumble on basic visual reasoning tasks involving spatial relations, navigation, and object selection that a preschooler solves without effort\. We hypothesize that the explicit pedagogical structure, specifically the context\-question\-pause\-answer cycles embedded in children's educational video, provides naturally co\-aligned reasoning traces: temporally synchronized visual cues, questions, and answers that emerge only from deliberate pedagogical authoring and cannot be practically reconstructed through manual annotation at scale\. To test this, we introduce SoSVQA \(Structure over Scale Visual Question Answering\), a unified benchmark of 10K question\-answer pairs automatically extracted from Dora the Explorer \(DoraVQA\) and Mickey Mouse Clubhouse \(ClubHVQA\) with precise timestamp alignment, and fine\-tune Qwen2\-VL and Qwen3\-VL using Group Relative Policy Optimization \(GRPO\) to leverage the clear correctness signals and structured reasoning traces inherent in educational content\. Despite training on just 10K QA pairs from 78 hours of children's television, orders of magnitude less data than GPT and Gemini, our approach delivers generalizable performance gains for Qwen\-based VLMs, yielding consistent improvements on NExT\-QA \(\+19\.7\), Video\-MME \(\+10\.6\), and MotionBench \(\+4\.9\), matching the performance of leading proprietary systems and demonstrating that content structure can compensate for content scale\.

## Concentrated Gradients Amplify Forgetting: Dominant\-direction Projection for Continual Multimodal Learning

**Authors:** Chengxiang Huang; Haopeng Zhang; Yuzhe Han; Rui Dai; Kaikui Liu; Xiangxiang Chu; Piotr Koniusz

**ID:** 154350 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EF8TL6jlfw>) | [PDF](<https://openreview.net/pdf?id=EF8TL6jlfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154350>)

Multimodal Large Language Models \(MLLMs\) trained on sequential tasks suffer from catastrophic forgetting\. We study this problem in LoRA\-based multimodal continual instruction tuning\. By analyzing the diagonal Fisher information of LoRA parameters, we find that forgetting is amplified not merely by shared high\-sensitivity parameters across tasks, but by the concentration of updates on those shared parameters, \\ie, some tasks distribute their change uniformly across parameters, while others pack most of it into a narrow subset, causing disproportionate interference on the parameters that prior tasks depend on\. We further observe that this concentration manifests in the dominant directions of recent gradients\. Based on this insight, we propose \\textbf\{D\}om\\textbf\{i\}nant\-direction \\textbf\{G\}radient \\textbf\{Pro\}jection \(\\textbf\{DiGPro\}\), which maintains a short buffer of recent gradient directions, extracts their dominant subspace with adaptive rank selection, and attenuates the parallel component for each optimizer step\.  Crucially, DiGPro requires no prior\-task data or stored subspaces, operating  on the current gradient history\. Experiments on cross\-modal and vision\-centric continual learning benchmarks show  DiGPro consistently reduces forgetting and attains competitive final results\. The code is available in the supplementary materials\.

## Subset\-Conditioned Boundary Compensation for Missing\-Modality Multimodal Classification

**Authors:** Zesen Cai; Lisi Mo; Yifan Fang; Yandong Yan; Keren Shi; Daming Shi; Ruiting Dai

**ID:** 151551 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZnNIhBOEoB>) | [PDF](<https://openreview.net/pdf?id=ZnNIhBOEoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151551>)

Missing modalities reduce observations to arbitrary subsets, challenging robust multimodal inference\. Existing methods recover missing views or align cross\-subset representations, implicitly equating feature completeness with decision accuracy—leaving subset\-specific decision boundary variation structurally unaddressed\. Empirical analysis reveals that misclassification patterns are highly subset\-specific, stable across initializations, and concentrated near decision boundaries—a persistent boundary misalignment distinct from information attenuation, which we define as Subset\-Conditioned Boundary Shift \(SCBS\)\. To address this, we propose Subset\-Conditioned Boundary Compensation \(SCBC\): a modality\-factorized violation memory accumulates historical records of subset\-specific margin violations, and a subset\-adaptive head converts them into targeted logit corrections at inference, with a direction\-consistency loss enforcing alignment during training\. We prove that these corrections, built entirely from forward\-pass statistics without backpropagating through the correction path, satisfy the descent condition of the surrogate loss, to our knowledge the first such guarantee in incomplete multimodal learning\. Across five benchmarks, SCBC achieves state\-of\-the\-art\-level performance, averaging a 3\.4 Macro\-F1 point gain under random missingness and peaking at 7\.4 points on the IEMOCAP\-4 \{v, a\} setting\. Source code is available at https://anonymous\.4open\.science/r/SCBC\_neurips\-50B5\.

## No Free Alignment: Observability\-Aware Alignment for Multimodal Heterogeneous Learning

**Authors:** Canran Xiao; Puning Zhao; Enneng Yang; XIAOCHUN CAO; Haobo Fu; Li Shen

**ID:** 153751\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153751

[Paper](<https://openreview.net/forum?id=IyPJb0blHd>) | [PDF](<https://openreview.net/pdf?id=IyPJb0blHd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153751>)

Multimodal heterogeneous learning aims to train reliable multimodal models when data sources differ in modality availability, semantic coverage, domain distribution, and missingness patterns\. Although cross\-modal alignment is widely used to mitigate such heterogeneity, we argue that alignment is not free: enforcing relations that are weakly supported by the observed data can amplify noise, over\-transfer missing\-modality information, and induce negative transfer\. This paper studies when a modality\-\-modality\-\-semantic relation is sufficiently observable to be safely aligned and shared across heterogeneous sources\. We propose \*\*ObsAlign\*\*, an observability\-aware framework that summarizes visible modality\-\-semantic evidence through compact source\-level sketches and estimates relation\-level support from bridge evidence, side support, cross\-modal consistency, and prototype uncertainty\. The resulting observability score gates co\-observed alignment, calibrates weak missing\-modality transfer, and guides evidence\-aware source consolidation so that reliable relations are shared while unsupported variation remains local\. Across image\-\-text, audio\-\-visual\-\-text, action\-recognition, sensor, and healthcare benchmarks under source\-partitioned multimodal heterogeneity, ObsAlign achieves the best overall performance in both encoder\-based and VLM\-compatible regimes, while sharply reducing negative transfer on low\-observability relations\. These results suggest that relation\-level observability provides a practical principle for deciding when cross\-modal alignment should be strengthened, weakened, or avoided\.

## Structure Over Scale: Learning Visual Reasoning from Pedagogical Video

**Authors:** Bishoy Galoaa; Xiangyu Bai; Sarah Ostadabbas

**ID:** 153531\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153531

[Paper](<https://openreview.net/forum?id=Ke7sRt4MQA>) | [PDF](<https://openreview.net/pdf?id=Ke7sRt4MQA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153531>)

State\-of\-the\-art vision\-language models \(VLMs\) score impressively on video benchmarks yet stumble on basic visual reasoning tasks involving spatial relations, navigation, and object selection that a preschooler solves without effort\. We hypothesize that the explicit pedagogical structure, specifically the context\-question\-pause\-answer cycles embedded in children's educational video, provides naturally co\-aligned reasoning traces: temporally synchronized visual cues, questions, and answers that emerge only from deliberate pedagogical authoring and cannot be practically reconstructed through manual annotation at scale\. To test this, we introduce SoSVQA \(Structure over Scale Visual Question Answering\), a unified benchmark of 10K question\-answer pairs automatically extracted from Dora the Explorer \(DoraVQA\) and Mickey Mouse Clubhouse \(ClubHVQA\) with precise timestamp alignment, and fine\-tune Qwen2\-VL and Qwen3\-VL using Group Relative Policy Optimization \(GRPO\) to leverage the clear correctness signals and structured reasoning traces inherent in educational content\. Despite training on just 10K QA pairs from 78 hours of children's television, orders of magnitude less data than GPT and Gemini, our approach delivers generalizable performance gains for Qwen\-based VLMs, yielding consistent improvements on NExT\-QA \(\+19\.7\), Video\-MME \(\+10\.6\), and MotionBench \(\+4\.9\), matching the performance of leading proprietary systems and demonstrating that content structure can compensate for content scale\.

## Concentrated Gradients Amplify Forgetting: Dominant\-direction Projection for Continual Multimodal Learning

**Authors:** Chengxiang Huang; Haopeng Zhang; Yuzhe Han; Rui Dai; Kaikui Liu; Xiangxiang Chu; Piotr Koniusz

**ID:** 154350\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154350

[Paper](<https://openreview.net/forum?id=EF8TL6jlfw>) | [PDF](<https://openreview.net/pdf?id=EF8TL6jlfw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154350>)

Multimodal Large Language Models \(MLLMs\) trained on sequential tasks suffer from catastrophic forgetting\. We study this problem in LoRA\-based multimodal continual instruction tuning\. By analyzing the diagonal Fisher information of LoRA parameters, we find that forgetting is amplified not merely by shared high\-sensitivity parameters across tasks, but by the concentration of updates on those shared parameters, \\ie, some tasks distribute their change uniformly across parameters, while others pack most of it into a narrow subset, causing disproportionate interference on the parameters that prior tasks depend on\. We further observe that this concentration manifests in the dominant directions of recent gradients\. Based on this insight, we propose \\textbf\{D\}om\\textbf\{i\}nant\-direction \\textbf\{G\}radient \\textbf\{Pro\}jection \(\\textbf\{DiGPro\}\), which maintains a short buffer of recent gradient directions, extracts their dominant subspace with adaptive rank selection, and attenuates the parallel component for each optimizer step\.  Crucially, DiGPro requires no prior\-task data or stored subspaces, operating  on the current gradient history\. Experiments on cross\-modal and vision\-centric continual learning benchmarks show  DiGPro consistently reduces forgetting and attains competitive final results\. The code is available in the supplementary materials\.

## Subset\-Conditioned Boundary Compensation for Missing\-Modality Multimodal Classification

**Authors:** Zesen Cai; Lisi Mo; Yifan Fang; Yandong Yan; Keren Shi; Daming Shi; Ruiting Dai

**ID:** 151551\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151551

[Paper](<https://openreview.net/forum?id=ZnNIhBOEoB>) | [PDF](<https://openreview.net/pdf?id=ZnNIhBOEoB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151551>)

Missing modalities reduce observations to arbitrary subsets, challenging robust multimodal inference\. Existing methods recover missing views or align cross\-subset representations, implicitly equating feature completeness with decision accuracy—leaving subset\-specific decision boundary variation structurally unaddressed\. Empirical analysis reveals that misclassification patterns are highly subset\-specific, stable across initializations, and concentrated near decision boundaries—a persistent boundary misalignment distinct from information attenuation, which we define as Subset\-Conditioned Boundary Shift \(SCBS\)\. To address this, we propose Subset\-Conditioned Boundary Compensation \(SCBC\): a modality\-factorized violation memory accumulates historical records of subset\-specific margin violations, and a subset\-adaptive head converts them into targeted logit corrections at inference, with a direction\-consistency loss enforcing alignment during training\. We prove that these corrections, built entirely from forward\-pass statistics without backpropagating through the correction path, satisfy the descent condition of the surrogate loss, to our knowledge the first such guarantee in incomplete multimodal learning\. Across five benchmarks, SCBC achieves state\-of\-the\-art\-level performance, averaging a 3\.4 Macro\-F1 point gain under random missingness and peaking at 7\.4 points on the IEMOCAP\-4 \{v, a\} setting\. Source code is available at https://anonymous\.4open\.science/r/SCBC\_neurips\-50B5\.

## Visual Enhanced Depth Scaling for Multimodal Latent Reasoning

**Authors:** Yudong Han; Yong Wang; Zaiquan Yang; Zhen Qu; Liyuan Pan; Xiangxiang Chu

**ID:** 152883\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152883

[Paper](<https://openreview.net/forum?id=PgPuQzvKVS>) | [PDF](<https://openreview.net/pdf?id=PgPuQzvKVS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152883>)

Multimodal latent reasoning has emerged as a promising paradigm that replaces explicit Chain\-of\-Thought \(CoT\) decoding with implicit feature propagation, simultaneously enhancing representation informativeness and reducing inference latency\. By analyzing token\-level gradient dynamics during latent training, we reveal two critical observations: \(1\) visual tokens exhibit significantly smaller gradient norms than their textual counterparts due to inherent language bias, resulting in systematic visual under\-optimization; and \(2\) semantically simple tokens converge rapidly, whereas complex tokens exhibit persistent gradient instability constrained by fixed architectural depths\. To address these limitations, we propose a visual replay module and routing depth scaling to collaboratively enhance visual perception and refine complicated latents for deeper contextual reasoning\. The former module leverages causal self\-attention to estimate token saliency, reinforcing fine\-grained grounding through spatially\-coherent constraints\. Complementarily, the latter mechanism adaptively allocates additional reasoning steps to complex tokens, enabling deeper contextual refinement\. Guided by a curriculum strategy that progressively internalizes explicit CoT into compact latent representations, our framework achieves state\-of\-the\-art performance across diverse benchmarks while delivering substantial inference speedups over explicit CoT baselines\.

## RotVLA: Rotational Latent Action for Vision\-Language\-Action Model

**Authors:** Qiwei Li; Xicheng Gong; Xinghang Li; Peiyan Li; Quanyun Zhou; Hangjun Ye; Jiahuan Zhou; Yadong Mu

**ID:** 152079\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152079

[Paper](<https://openreview.net/forum?id=VcnKuCNmo3>) | [PDF](<https://openreview.net/pdf?id=VcnKuCNmo3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152079>)

_Abstract unavailable from the accessible public sources._

## ARK: A Dual\-Axis Multimodal Retrieval Benchmark along Reasoning and Knowledge

**Authors:** Yijie Lin; Guofeng Ding; Haochen Zhou; Haobin Li; Mouxing Yang; Xi Peng

**ID:** 155756\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155756

[Paper](<https://openreview.net/forum?id=3BQmlx6S58>) | [PDF](<https://openreview.net/pdf?id=3BQmlx6S58>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155756>)

_Abstract unavailable from the accessible public sources._

## Failing Forward: Adaptive Failure\-Informed Learning for Vision\-Language\-Action Models

**Authors:** Meng Zheng; Samhita Marri; Anwesa Choudhuri; Benjamin Planche; Zhongpai Gao; Van N Nguyen; Terrence Chen; Girish Chowdhary; Ziyan Wu

**ID:** 155737\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155737

[Paper](<https://openreview.net/forum?id=3Kqyrxf0U4>) | [PDF](<https://openreview.net/pdf?id=3Kqyrxf0U4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155737>)

_Abstract unavailable from the accessible public sources._

## I Have a Stream: Making Self\-Supervised Learning Work on Continuous Video

**Authors:** Ivan Martinović; Lukas Knobel; Yuki Asano

**ID:** 151662\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151662

[Paper](<https://openreview.net/forum?id=YycCzzfac3>) | [PDF](<https://openreview.net/pdf?id=YycCzzfac3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151662>)

_Abstract unavailable from the accessible public sources._

## Robust Reversible Recovery for Adversarially Protected JPEG Images

**Authors:** Dahao Fu; Jiangqun Ni

**ID:** 156070\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156070

[Paper](<https://openreview.net/forum?id=0fU0T11R2P>) | [PDF](<https://openreview.net/pdf?id=0fU0T11R2P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156070>)

Reversible adversarial examples \(RAEs\) can disrupt access by malicious AI models while ensuring recoverability for authorized users\. However, practical image circulation is dominated by JPEG files, whereas most existing RAE methods perturb spatial\-domain images and are therefore poorly matched to compression, re\-saving, and coefficient quantization\. Beyond JPEG compatibility, circulation imposes a stricter and underexplored requirement that protected images should be perturbed in the JPEG domain, remain adversarial after spatial reconstruction, preserve visual fidelity, incur modest file\-size growth, and remain recoverable under channel attacks such as recompression, noise, cropping, resizing, and platform re\-saving\. This paper presents the first systematic study of robust reversible adversarial protection for post\-processed JPEG images and proposes SRAP\-JPEG, a Synchronized Reversible Adversarial Protection framework on quantized DCT coefficients\. SRAP\-JPEG decouples adversarial perturbation from reversible recording by injecting perturbations into luminance coefficients, hiding recovery records in paired chrominance coefficients through a secret\-key mapping, and adopting coefficient\-adaptive allocation to trade off reversible capacity, attack strength, visual quality, and file\-size growth\. It crafts protective perturbations directly in the JPEG coefficient domain by propagating gradients from classification or vision\-language objectives through the chain rule\. For authorized recovery, SRAP\-JPEG integrates block\-phase synchronization, embedding\-state identification, and coefficient restoration, enabling exact recovery of intact protected JPEGs and high\-fidelity recovery after practical distortions\. Experiments on ImageNet and MS\-COCO show that SRAP\-JPEG achieves an 81\.82\\% average attack success rate on ten mainstream classifiers, degrades CLIP\-based image\-text retrieval, and recovers distorted protected images with high visual fidelity, including 41\.60 dB PSNR after JPEG recompression at QF 70 and 59\.51 dB on the aligned uncropped region after edge cropping at ratio 0\.25\.

## Motion\-o: Trajectory\-Grounded Video Reasoning

**Authors:** Bishoy Galoaa; Shayda Moezzi; Xiangyu Bai; Sarah Ostadabbas

**ID:** 148766\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148766

[Paper](<https://openreview.net/forum?id=vE3fdoUg2h>) | [PDF](<https://openreview.net/pdf?id=vE3fdoUg2h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148766>)

Recent video reasoning models increasingly produce spatio\-temporal evidence chains that localize objects at specific timestamps\. While these traces improve interpretability by grounding $\\textit\{where\}$ and $\\textit\{when\}$ evidence appears, they often leave the motion connecting observations, the $\\textit\{how\}$, implicit\. This makes dynamic and trajectory\-dependent claims difficult to supervise, verify, or penalize when unsupported by the video\. We formalize this missing component as Spatial\-Temporal\-Trajectory \(STT\) reasoning and introduce $\\textbf\{Motion\-o\}$, a motion\-centric extension to vision\-language models \(VLMs\) that makes trajectories explicit and verifiable\. Motion\-o augments evidence chains with Motion Chain of Thought \(MCoT\), a structured pathway that represents object motion through a discrete $\\texttt\{\\\}$ tag summarizing direction, speed, and scale change\. To supervise MCoT, we densify sparse spatio\-temporal annotations into object tracks and derive motion descriptors from centroid displacement and box\-area change\. We then train with complementary rewards for trajectory consistency and visual grounding, including a perturbation\-based signal that penalizes motion descriptions that remain unchanged when temporal evidence is removed\. Across multiple video understanding benchmarks, Motion\-o consistently improves trajectory\-faithful reasoning without architectural modifications\. These results suggest that an explicit motion interface can complement existing VLM pipelines by converting implicit dynamics into verifiable evidence\.

## CoPE\-VideoLM: Leveraging Codec Primitives For Efficient Video Language Modelling

**Authors:** Sayan Deb Sarkar; Rémi Pautrat; Ondrej Miksik; Marc Pollefeys; Iro Armeni; Mahdi Rad; Mihai Dusmanu

**ID:** 152600\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152600

[Paper](<https://openreview.net/forum?id=RvGMXiyXQI>) | [PDF](<https://openreview.net/pdf?id=RvGMXiyXQI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152600>)

Video Language Models enable AI systems to understand temporal dynamics in videos\. To fit within the maximum context window constraint, current methods use keyframe sampling which often misses both macro\-level events and micro\-level details due to the sparse temporal coverage\. Furthermore, processing full images and their tokens for each frame incurs substantial computational overhead\. We address these limitations by leveraging video codec primitives \(specifically motion vectors and residuals\) which natively encode video redundancy and sparsity without requiring expensive full\-image encoding for most frames\. To this end, we introduce lightweight transformer\-based encoders that aggregate codec primitives and align their representations with image encoder embeddings through a pre\-training strategy  that accelerates convergence during end\-to\-end fine\-tuning\. Our approach, \*CoPE\-VideoLM\*, reduces the time\-to\-first\-token by up to 86% and token usage by up to 93% compared to standard VideoLMs\. Moreover, by varying the keyframe and codec primitive densities, we maintain or exceed performance compared on 14 diverse video understanding benchmarks, spanning general question answering, temporal and motion reasoning, long\-form understanding, and spatial scene understanding\.

## AmbiguousWorld: Benchmarking and Resolving Ambiguous Instructions in Video World Models

**Authors:** Bo Wang; Sen Cui; Jin Li; Ming Hei Huang; Zhikang Chen; Min Zhang; Guocai Yao; Changshui Zhang

**ID:** 155466\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155466

[Paper](<https://openreview.net/forum?id=5ORWSQZFqy>) | [PDF](<https://openreview.net/pdf?id=5ORWSQZFqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155466>)

Translating high\-level, under\-specified human commands into coherent video is fundamentally challenging\. Current video generation models lack explicit reasoning capabilities and typically fail to understand ambiguous instructions, frequently resulting in physically inconsistent and causally disjointed generation\. To address this, we introduce AmbiguousWorld, a novel inference\-time reasoning framework that transforms video generation into a multi\-modal Tree of Thoughts\. We employ a Vision\-Language Model as both a semantic planner to dynamically decompose fuzzy instructions into actionable subgoals, and as a closed\-loop critic to prune invalid trajectories by evaluating speculative paths across multiple physical and functional dimensions\. To systematically assess this, we annotate the first embodied video generation benchmark targeting ambiguous instructions based on the DROID dataset, and design a multi\-dimensional VLM evaluation framework\. Empirical results on state\-of\-the\-art baselines  demonstrate that our framework yields substantial improvements, boosting absolute Task Success by up to 29\.0\\% and the overall generative consistency weighted score by 24\.2 points\. Furthermore, we validate the effectiveness of our VLM evaluation framework through rigorous comparison with human assessment\.

## UniPath: Adaptive Coordination of Understanding and Generation for Unified Multimodal Reasoning

**Authors:** Haoyue Bai; Yinyi Luo; Wenwen Wang; Qingsong Wen; Jindong Wang

**ID:** 153352\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153352

[Paper](<https://openreview.net/forum?id=M1C4LYZjQz>) | [PDF](<https://openreview.net/pdf?id=M1C4LYZjQz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153352>)

Unified multimodal models \(UMMs\) aim to integrate understanding and generation within a single architecture\.  However, it remains underexplored how to effectively coordinate these two capabilities for more effective and efficient reasoning\.  Existing coordination approaches either perform coupling during training, without explicit inference\-time coordination, or impose a fixed coordination pattern for all inputs\. In this work, we show that multimodal tasks exhibit substantial coordination\-path diversity: different inputs favor different coordination paths\.  This suggests that exploiting such diversity is key to improving performance\. We propose UniPath, a framework for adaptively modeling and exploiting coordination\-path diversity\.  Instead of enforcing a single coordination pattern, we represent task solving as the selection and execution of a path, ranging from direct answering to textual inference, visual\-thought construction, and hypothesis\-based exploration\.  We construct role\-aligned trajectories to train a path\-conditioned executor and introduce a lightweight planner mechanism to enable input\-dependent path selection\. Experiments show that leveraging coordination\-path diversity improves performance over fixed coordination strategies while providing interpretable intermediate behaviors\. The code is available at: https://anonymous\.4open\.science/r/UniPath\.

## BoxTuning: Object\-Aware Visual Prompting for  Multimodal Model Fine\-Tuning

**Authors:** Zekun Qian; Ruize Han; Wei Feng

**ID:** 149433\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149433

[Paper](<https://openreview.net/forum?id=q6gwQDgllS>) | [PDF](<https://openreview.net/pdf?id=q6gwQDgllS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149433>)

Object\-level spatial\-temporal understanding is essential for video question answering, yet existing multimodal large language models \(MLLMs\) encode frames holistically and lack explicit mechanisms for fine\-grained object grounding\. Recent work addresses this by serializing bounding box coordinates as text tokens, but this text\-coordinate paradigm suffers from a fundamental \*modality mismatch\*: object information is inherently visual, yet encoding it as text incurs a high token cost that forces aggressive temporal downsampling\. We propose \*BoxTuning\*, an object\-aware visual prompting framework for multimodal model fine\-tuning that moves spatial\-temporal object states from text\-coordinate serialization into the visual stream while retaining only object identity in a compact text legend\. Colored bounding boxes and trajectory trails encode geometry and motion on video frames, while the color\-to\-object legend provides the minimal textual identity bridge\. This reduces the token cost significantly, achieving 87\-93\\% text token reduction in practice\. It also preserves full temporal resolution, where the trajectory trails further encode inter\-frame motion direction and speed within each keyframe, recovering fine\-grained dynamics that text\-coordinate methods are forced to discard\. Experimental results on five video QA benchmarks \(CLEVRER, Perception Test, STAR, NExT\-QA, IntentQA\) show that BoxTuning surpasses text\-coordinate baselines on spatially oriented tasks and avoids their degradation on reasoning\-centric tasks, establishing object\-aware visual prompting as a natural and efficient way to convey object information to MLLMs\.

## Ledger: A Path\-Validated, Database\-Grounded Benchmark for Enterprise Web Agents

**Authors:** Xiao Yang; Mo Sha; Yiran Li; Chengjin Tian; Sheng Wang; Fangyuan Zhou; Feifei Li

**ID:** 139511 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LUGEM2rYcv>) | [PDF](<https://openreview.net/pdf?id=LUGEM2rYcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139511>)

Web agents promise to automate consequential operations on enterprise web systems, yet the benchmarks used to evaluate them score correctness on surface\-level proxies: DOM/URL predicates, action\-trace matchers, or vision\-language verdicts on a closing screen\. These proxies are inadequate for enterprise resource planning \(ERP\) systems, where every action commits to a transactional ledger and the criterion of correctness is what the ledger now records, not what the page now renders\. We argue that ERP web operations should be evaluated against what a run actually wrote to the relational backend, with the server\-side operation trace recorded alongside the outcome to provide the audit provenance that enterprise governance requires\. We introduce Ledger, a path\-validated, database\-grounded benchmark for browser agents on a production\-grade open\-source ERP: 424 oracle\-certified task instances across 53 functional modules, scored by an Atomic Edit Set validator \(field\-level $F\_1$ against a PostgreSQL oracle, under a typed normalization function\) paired with a Canonical Operation Tracer \(server\-side instrumentation of the ERP’s JSON\-RPC dispatch\)\. Each episode runs under pg\_restore snapshot isolation; no language\-model judge is invoked; three formal guarantees \(score determinism, episode isolation, tracer completeness\) make scores auditable and exactly replayable\. A cross\-paradigm evaluation of seven contemporary browser agents shows Ledger discriminates architectures sharply, with task\-success rate spanning 81\.6% down to 13\.7% across the roster while long\-horizon enterprise workflows remain far from saturated\.

## SALART\-VQA: Diagnosing Whether VLMs Understand Salient Artifacts in Generated Images

**Authors:** Xiaoxiao Sun; Ruotian Zhang; Junzhe Huang; James Burgess; Serena Yeung\-Levy

**ID:** 139139 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iVvXeIwD1f>) | [PDF](<https://openreview.net/pdf?id=iVvXeIwD1f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139139>)

Vision\-language models \(VLMs\) are increasingly used to detect whether AI\-generated images contain visible artifacts, yet their ability to analyze such artifacts remains poorly understood\. A correct image\-level decision can still hide important failures: a model may correctly flag an artifact while relying on the wrong visual cue, selecting the wrong region, or describing a defect that the image does not support\. To evaluate these behaviors directly, we introduce SalArt\-VQA, a diagnostic benchmark for fine\-grained salient artifact understanding in AI\-generated images\. SalArt\-VQA contains 950 images and 3,681 human\-authored multiple\-choice questions spanning artifact images, matched real reference images, and paired generated reference images\. Four aligned question types evaluate presence detection, semantic localization, spatial grounding, and evidence\-grounded defect identification, while the reference splits test calibration and abstention when the annotated defect is absent\. Across 20 VLMs, SalArt\-VQA reveals failures that image\-level detection accuracy hides: the strongest model reaches 99\.37% detection recall on artifact images but answers all four artifact\-side questions correctly on only 53\.26% of images\. Comparing artifact images with defect\-absent references reveals a sensitivity–calibration tradeoff: sensitive models often make unsupported artifact claims, while conservative models avoid false alarms largely by missing real artifacts\. These results show that high artifact detection accuracy alone does not imply grounded artifact understanding\. SalArt\-VQA exposes these hidden failure modes and provides a fine\-grained evaluation of whether VLM artifact claims are supported by local visual evidence\.

## ViLo: LiDAR Localization with Vision\-Language Priors

**Authors:** Minghang Zhu; Jianshi Wu; Yuxin Guo; Wen Li; Penghui Shang; Sheng Ao; Cheng Wang

**ID:** 150312 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j4c2fgRf1E>) | [PDF](<https://openreview.net/pdf?id=j4c2fgRf1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150312>)

LiDAR localization is a fundamental task in robotics and computer vision, aiming to estimate the global pose of point clouds\. Although Scene Coordinate Regression \(SCR\) has demonstrated state\-of\-the\-art performance in this field, standard SCR methods employ a monolithic network for uniform optimization across diverse scenes, which inevitably suffers from capacity interference in highly degraded scenes\. Recent research on Vision\-Language Models \(VLMs\) indicates that they can acquire rich scene understanding priors, providing the adaptive learning capabilities currently missing in localization networks\. In this paper, we propose ViLo, the first framework to integrate VLM priors into SCR to fundamentally enhance localization robustness\. Specifically, we design a temporally consistent key\-frame querying mechanism to extract open\-vocabulary degeneracy priors\. We then construct a dynamic prior\-guided Mixture\-of\-Experts \(MoE\) model for adaptive feature learning tailored to varying scenes\. Finally, to avoid additional computational overhead during inference, ViLo internalizes the VLM's scene understanding into the 3D backbone via cross\-modal distillation, enabling a lightweight, LiDAR\-only deployment\. Extensive experiments on the Oxford RobotCar and NCLT datasets demonstrate that ViLo significantly outperforms existing state\-of\-the\-art methods, reducing positional errors by impressive margins of 20% and and 51%, respectively\.

## Predicting the Needle in a Petabyte Scale Haystack: Open\-Vocabulary Event Anticipation in Satellite Imagery

**Authors:** Lekha Revankar; Mikhail Klassen; creon levit; Ash Hoover; Kavita Bala; Bharath Hariharan

**ID:** 150526 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hTQYPXMU4D>) | [PDF](<https://openreview.net/pdf?id=hTQYPXMU4D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150526>)

Satellite constellations now image the Earth daily, capturing the lifecycle of events from deforestation to urban construction\. Anticipating these events before completion enables timely intervention, yet existing systems cannot jointly identify \*where\* a change occurs, \*what\* it will become, and \*when\* it will finish across an open vocabulary\. Building such a model requires diverse event data, but events are like needles in a haystack, making manual annotation at global scale infeasible\. We address this problem by representing change as the vector difference between vision\-language model embeddings at distinct time points\. This arithmetic approach allows us to search for semantic transformations directly in the latent space, enabling \(1\) an automated data engine for global event discovery without manual annotation and \(2\) the largest global satellite event dataset to our knowledge, comprising 21,000\+ locations across 64\+ event types with \~2M images from PlanetScope and Sentinel\-2 spanning six continents, to train \(3\) a novel global\-scale event anticipation model\. Our model detects change with a 93\.5% max F1 score, outperforms baselines 3\.6$\\times$ on predicted event retrieval, and forecasts completion dates with a 3\-day median error, even nine months before completion\.

## Breaking Modality Heterogeneity in Low\-Bit Quantization for Large Vision\-Language Models

**Authors:** YI ZHONG; Haotong Qin; Xindong Zhang; Lei Zhang; Guolei Sun

**ID:** 153382 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LmpNnlBWG5>) | [PDF](<https://openreview.net/pdf?id=LmpNnlBWG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153382>)

Low\-bit post\-training quantization \(PTQ\) is a pivotal technique for deploying Vision\-Language Models \(VLMs\) on resource\-constrained devices\. However, existing PTQ methods often degrade VLMs' accuracy due to the heterogeneous activation distributions of text and vision modalities during quantization\. We find that this cross\-modal heterogeneity is distributed unevenly across channels: a small subset of channels contains most modality\-specific outliers, and these outliers typically reside in different channels for each modality\. Motivated by this, we propose SplitQ, a channel\-Splitting\-driven post\-training Quantization framework\. At its core, SplitQ introduces a novel Modality\-specific Outlier Channel Decoupling \(MOCD\) module that effectively isolates salient modality\-specific outlier channels with minimal overhead\. To further address the remaining cross\-modal distribution discrepancies, we design an Adaptive Cross\-Modal Calibration \(ACC\) module that employs dual lightweight learnable branches to dynamically mitigate modality\-induced quantization errors\.Extensive experiments on popular VLMs demonstrate that SplitQ significantly outperforms existing approaches across 6 popular multi\-modal datasets under all evaluated quantization settings, including W4A8, W4A4, W3A3, and W3A2\. Notably, SplitQ preserves 95\.3% of FP16 performance under the challenging W3A3 setting \(69\.5 vs\. 74\.3\), pushing the efficiency frontier for deploying advanced VLMs\.

## Multimodal AI Detection In Two Words

**Authors:** Daniel Fein; Arpita Singhal; Maneesh Agrawala; Maty Bohacek

**ID:** 148150 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zucJIrUwMl>) | [PDF](<https://openreview.net/pdf?id=zucJIrUwMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148150>)

AI\-generated text, images, audio, and video are now ubiquitous and difficult for humans to reliably identify as such, making scalable, automated detection a practical necessity\. Existing detectors, however, are fragmented along modality lines\-\-\-each typically relying on its own classifier head, dataset, and training pipeline\-\-\-and the recent line of explainable detectors learns its rationales from human annotations whose faithfulness degrades as generators improve\. We propose a unified method that addresses both issues by extending neologism learning from text generation steering to multimodal classification\. We add two tokens, &lt; REAL&gt; and &lt; AIGEN &gt;, to the vocabulary of an otherwise\-frozen multimodal LLM \(MLLM\) and train only their embedding rows \(on the order of 2d parameters, fewer than 0\.001% of the backbone\) so that the model's next\-token distribution under a paired prompt encodes the real\-vs\-AI\-generated decision\. Because all modalities are projected into a shared input embedding space, the same token pair applies across text, image, audio, and video without per\-modality heads, and a pair trained on a strict subset of modalities transfers to held\-out ones at test time\. The trained tokens further admit free\-form natural\-language descriptions of what &lt; AIGEN &gt; has come to mean, decoded from the same frozen backbone and never supervised during training; we validate their causal faithfulness via plug\-in evaluation\. Across standard text, audio, image, and video benchmarks, our method matches or exceeds dedicated, modality\-specific detectors and outperforms MLLM\-based explainable detectors out of distribution, despite training orders of magnitude fewer parameters and using no human\-annotated explanations\.

## SimVLA: Attributing Gains in VLA Models Through Controlled Ablation

**Authors:** Yuankai Luo; Woping Chen; Tong Liang; Zhenguo Li

**ID:** 152120 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VMuUVQecnd>) | [PDF](<https://openreview.net/pdf?id=VMuUVQecnd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152120>)

Vision\-Language\-Action \(VLA\) models often bundle architectural changes with different pretraining data, backbone scales, and optimization recipes, obscuring what actually drives progress\. We introduce SimVLA, a deliberately minimal VLA—a standard vision\-language backbone with a lightweight continuous\-action head—as a controlled testbed for this attribution problem\. Across LIBERO, CALVIN, WidowX, and Google Robot, one\-knob\-at\-a\-time ablations show that training dynamics are the largest measured driver, producing performance swings of $\\Delta$$\\approx$54\-89\\%, while task configuration and architecture have smaller effects under matched settings\. Despite using a small backbone and no additional large\-scale robot\-data VLA pretraining before benchmark\-specific training, SimVLA reaches 98\.6\\% average success on LIBERO, remains competitive across the other benchmarks, and transfers to held\-out real\-robot scenes\. These results suggest that simple, carefully controlled VLA baselines remain underexplored and provide a calibration point for future architectural claims within the VLM\-encoder plus lightweight\-head family\.

## Hidden Forgetting in Continual Multimodal Learning: When Accuracy Survives but Grounding Fails

**Authors:** Qianyu Chen; Canran Xiao; Runxuan Tang

**ID:** 153314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MDf0kUD4oe>) | [PDF](<https://openreview.net/pdf?id=MDf0kUD4oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153314>)

Multimodal large language models must continually adapt to evolving tasks and domains, yet standard continual learning metrics mainly measure whether old answers remain correct, leaving the stability of multimodal grounding largely unexamined\. We study this overlooked failure mode and ask whether a continually adapted MLLM can preserve not only what it answers, but also how it uses visual, textual, OCR, chart, and document evidence\. We identify hidden evidence\-use forgetting, where answer accuracy is retained while the model silently shifts toward different or less grounded evidence channels, and propose RCL, a replay\-free reliance\-constrained continual learning framework\. RCL freezes the previous checkpoint as a behavioral reference, estimates teacher and student evidence\-reliance profiles through counterfactual channel interventions, and jointly optimizes task learning, prediction preservation, and reliance preservation without adding inference\-time cost\. Across CoIN, COAST, MCITlib, and an evidence\-sensitive multimodal stream, RCL consistently improves final performance and reduces forgetting over replay\-free, PEFT, routing, and memory\-assisted baselines, while substantially lowering modality reliance drift, dominant evidence flips, and hidden forgetting rates\. These results suggest that robust continual multimodal learning requires preserving the evidence path behind correct answers, not merely the answers themselves\.

## FedIBS: Federated Vision\-Language Adaptation via Intrinsic Bias Selection

**Authors:** Xiaoming Wu; Wei Wenyu; Xin Wang; Ming Yang

**ID:** 153075 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OBeuu8d4RS>) | [PDF](<https://openreview.net/pdf?id=OBeuu8d4RS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153075>)

Federated adaptation of large vision\-language models \(VLMs\) is appealing for privacy\-sensitive applications but must contend with client data heterogeneity, strict communication budgets, and on\-device inference constraints\. Recent methods predominantly introduce additive adaptation interfaces, such as learnable prompts or adapter modules, which attach extra trainable components to the frozen backbone, inflating both parameter counts and inference latency\. We challenge this additive paradigm and ask: can robust federated VLM adaptation be achieved through a compact intrinsic interface alone? We answer this question with \\textbf\{FedIBS\} \(Federated Intrinsic Bias Selection\), a module\-free framework that fine\-tunes only the biases in feed\-forward network projections\. FedIBS operates on existing backbone parameters and introduces zero additional inference cost\. To make such compact intrinsic adaptation viable under heterogeneous clients, we further propose a Fisher\-guided progressive masking mechanism that disentangles shareable and personalized bias coordinates\. Each client retains personalized coordinates locally and communicates only the shareable subset for aggregation, enabling sparse communication while preserving client\-specific adaptation\. Extensive experiments on diverse datasets and heterogeneity settings demonstrate that FedIBS consistently outperforms recent federated prompt\- and adapter\-based baselines in both personalization and generalization, all while achieving substantially lower communication cost\.

## A General Concept\-based Decomposition for Vision–Language Embeddings

**Authors:** Simone Alberto Peirone; Ortal Senouf; Francesca Pistilli; Giuseppe Averta; Pascal Frossard

**ID:** 151861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XKwu7MhFTF>) | [PDF](<https://openreview.net/pdf?id=XKwu7MhFTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151861>)

Vision\-language models are designed to capture the compositional structure of the world through multi\-modal alignment; however, it remains unclear whether their representations truly align with the way a human would naturally describe the same visual input\. Prior works attempt to decompose visual embeddings into their concept\-level contributions, but their instance\-level optimization is inherently local and does not capture the model’s global semantic structure, which is essential for compositional generalization across different inputs, tasks and domains\. We introduce GRACE, a method that learns this concept\-based structure at the feature space level, producing semantic and general concept decompositions\. To achieve this, we propose a novel training objective that preserves the geometric relations of different samples in the concept space, enabling a better understanding of how concepts compose and relate to each other\. We validate GRACE on several image and video benchmarks, showing that its concept decomposition is aligned with human perception and achieves faithful decompositions across different tasks and domains\. With minimal overhead, GRACE makes existing Vision\-Language Models more interpretable, while preserving most of their original performance\.

## ActionUNet: Improving Robustness of VLA Models with Efficient Multi\-scale Fine\-tuning

**Authors:** Di Zhu; Ziheng Yan; Fang Wan

**ID:** 149076 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t3p8yqEZl7>) | [PDF](<https://openreview.net/pdf?id=t3p8yqEZl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149076>)

Vision\-Language\-Action \(VLA\) models have shown great promise for robotic manipulation by mapping multi\-modal semantics to physical actions\. However, this mapping inherently struggles to align these coarse\-grained semantics with fine\-grained temporal execution\. It leaves VLA models with limited generalization and insufficient robustness in cluttered environments\. To overcome this issue, we propose ActionUNet, an efficient multi\-scale fine\-tuning framework that enhances pre\-trained VLA models with minimal computational cost\.  ActionUNet first constructs a lightweight  temporal U\-Net within the temporal\-aligned action feature space to fuse hierarchical structural priors, effectively bridging the scale gap between semantics and temporal executions\.  Recognizing that multi\-scale modeling can disrupt microscopic temporal continuity and cause mechanical oscillations, ActionUNet then employs a conditional SIREN as a continuous action decoder\. Equipped with explicit second\-order smoothness constraints, this decoder guarantees temporal continuity and reduces high\-frequency motion jitter\.  By smoothing temporal discontinuities from multi\-scale fusion, this continuous formulation  reduces mechanical execution failures while preserving the base VLA model's generalization and manipulation robustness\. Extensive experiments on RoboTwin 2\.0 and LIBERO\-Plus benchmarks, together with real\-world hard evaluations, demonstrate that ActionUNet significantly improves $\\pi\_\{0\.5\}$ success rates by absolute 9\.8\\%, 6\.1\\%, and 11\.4\\%, respectively, while also generalizing to the regression\-based OpenVLA\-OFT backbone, highlighting its effectiveness and efficiency as a fine\-tuning strategy\. Code will be made publicly available upon acceptance\.

## EVA\-Cap: Optimizing Audiovisual Video Captioning via Event\-Centric Alignment

**Authors:** Jiapeng Shi; Qiuxia Hou; Jiaqi Leng; Junke Wang; Yanhao Zhang; Haonan Lu; Ziyi Ye; Zuxuan Wu

**ID:** 155915 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1q1CvwCzHA>) | [PDF](<https://openreview.net/pdf?id=1q1CvwCzHA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155915>)

Recent advances in Omni Language Models \(OLMs\) provide a unified solution for audiovisual video captioning\. Nevertheless, existing approaches predominantly treat captioning as an unstructured text generation process, neglecting the inherent semantic structure of videos and leading to suboptimal fine\-grained audiovisual alignment\. To bridge this gap, we propose EVA\-Cap, a novel framework that decomposes captions into atomic audiovisual events and transforms unstructured text supervision into event\-centric alignment\. We train EVA\-Cap via Supervised Fine\-Tuning \(SFT\) and Group Relative Policy Optimization \(GRPO\) on a self\-curated dataset, EVA\-Data, which is built with event\-centric quality control\. During the GRPO phase, the model is explicitly optimized against three event\-centric alignment targets: global event completeness, intra\-event attribution, and inter\-event synchronization\. Extensive experiments demonstrate that EVA\-Cap significantly outperforms existing methods in event\-centric evaluation \(e\.g\., \+5\.3% average gain on ChronusAV\), while achieving competitive performance on general audiovisual captioning benchmarks \(e\.g\., \+3\.3% on WorldSense\)\.

## Text\-side fragility in contrastive vision\-language retrieval

**Authors:** Yanyu Lei

**ID:** 139343 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VZDduyq0Lw>) | [PDF](<https://openreview.net/pdf?id=VZDduyq0Lw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139343>)

Contrastive vision\-language models \(VLMs\) are deployed in a growing range of retrieval and grounding systems, making their robustness to input corruption a critical property\. In this paper, we apply controlled corruptions to textual and image inputs for five contrastive VLMs spanning three Vision Transformer architectures, four training corpora, and two contrastive loss functions\. We aim to measure how image and text representations and retrieval performance respond as input damage increases\. Previous cross\-modal robustness work often applied ordinal severity scales to corruptions independently, even though the same severity step on the image side may not represent equivalent damage on the text side or vice versa\. Our experiment addresses this measurement gap using within\-modality damage percentile binning, which ranks each side's corruptions on its own damage scale and compares only at matched ranks\. We evaluate all models on MS\-COCO retrieval with $n = 1\{,\}000$ pairs over three seeds, six corruption types, and five severity levels\. Our results indicate that image\-to\-text \(i2t\) Recall@1 at the highest damage quintile is 4\.6$\\times$ to 5\.8$\\times$ higher than text\-to\-image \(t2i\) Recall@1 at the matched quintile\. Two mechanistic probes are used to localize part of the asymmetry to the single\-token text\-pooling bottleneck and to text damage that destroys lexical content rather than word order\. These results suggest that downstream applications retrieving images from text are notably more fragile than the reverse, and that future improvements to cross\-modal robustness require architectural attention to text readout\.

## SceneBind: Binding What and Where Across Vision, Audio, and Language

**Authors:** Mingfei Chen; Zijun Cui; Ruoke Zhang; Hyeonggon Ryu; Eli Shlizerman

**ID:** 153396 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LfcBS0p58e>) | [PDF](<https://openreview.net/pdf?id=LfcBS0p58e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153396>)

We present SceneBind an omni\-modal representation of realistic scenes with joint semantic and 3D spatial understanding across vision, audio, and language\. Existing omni\-modal encoders excel at instance\-level semantics \(i\.e\., what is present\), but often lack explicit spatial structure \(i\.e\., where it is\)\. SceneBind addresses this gap by representing each scene as a semantic\-spatial entity, combining a global semantic embedding with object\-centric semantic\-spatial slots\. This representation explicitly captures object\-level semantics, spatial attributes, and uncertainty\. We further propose SceneBind Matching, a semantic–spatial matching scheme that integrates global scene similarity with object alignment, supporting cross\-modal scene retrieval and object grounding\. To train and evaluate SceneBind, we curate a novel real\-world binaural audio\-visual dataset with structured semantic and spatial annotations, and propose a training protocol for aligning semantic and spatial signals across modalities\. SceneBind is compatible with large\-scale pretrained semantic encoders, adds lightweight spatial modeling with only a few additional tokens\. It achieves state\-of\-the\-art scene and spatial retrieval while enabling strong zero\-shot transfer to downstream tasks such as audio\-visual localization\.

## Don't Pause\! Every prediction matters in a streaming video

**Authors:** Dibyadip Chatterjee; Zhanzhong Pang; Fadime Sener; Yale Song; Angela Yao

**ID:** 139366 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UYNq6gYxzq>) | [PDF](<https://openreview.net/pdf?id=UYNq6gYxzq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139366>)

Streaming video models should respond the moment an event unfolds, not after the moment has passed\. Yet existing online VideoQA benchmarks remain largely retrospective\. They pause the video at fixed timestamps, pose questions about current or past events, and score models only at those moments\. This protocol leaves streaming outputs untested\. To close this gap, we introduce SPOT\-Bench, featuring multi\-turn proactive queries that evaluate general streaming perception required by an always\-on, real\-time assistant\. SPOT\-Bench comes with Timeliness\-F1, a consolidated metric that measures streaming outputs by their temporal precision and balanced coverage across the entire video\. Our benchmark reveals that during streaming inference: \(i\) MLLMs detect events reliably in a stream but spam predictions unprompted; \(ii\) post\-training MLLMs for silence reduces spamming but induces unresponsiveness; \(iii\) half of the streaming video expects no response, which we term dead\-time \- compute spent here does not affect response latency\. These findings motivate Ctrl\-SPOT, a training\-free streaming controller for MLLMs, that retains their event perception while controlling their streaming outputs for balanced coverage\. This establishes a strong baseline on SPOT\-Bench\.

## Perturb, Repair, Verify: Self\-Play Vision\-Language Verifiers for Compositional Understanding

**Authors:** Zijun Huang; Yingjun Du; Cees Snoek

**ID:** 150547 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hK4oymHJs3>) | [PDF](<https://openreview.net/pdf?id=hK4oymHJs3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150547>)

Vision\-language verifiers judge whether an image faithfully matches a textual description, yet existing training pipelines typically rely on static supervision from stronger external judges or curated hard\-negative data\. Such supervision is costly, teacher\-bounded, and difficult to adapt as model failures evolve\. We introduce PROVE \(Perturb\-and\-Repair Optimization for Vision\-Language Evaluation\), a self\-play framework that trains verifiers through a closed perturb–verify–repairverify loop\. Starting from a known\-correct image\-caption pair, a Mutator introduces a typed perturbation over objects, attributes, counts, or relations\. The verifier then judges the perturbed caption and provides textual feedback, which a Repairer uses to recover a faithful caption for re\-verification\. These two verification rounds produce structured rewards for informative mismatches and visually grounded repairs\. Since perturbation, verification, and repair are role\-conditioned behaviors of the same evolving multimodal backbone, updating the shared parameters also improves the verifier itself\. Experiments show that PROVE improves fine\-grained compositional verification and visual\-detail robustness while preserving general multimodal capability\.

## ClothTransformer: Unified Latent\-Space Transformers for Scalable Cloth Simulation

**Authors:** Yu Zhang; YIDI SHAO; Wenqi Ouyang; Yushi LAN; Zhexin Liang; Chengrui Wu; Xudong XU; Xingang Pan

**ID:** 151474 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aLQA62sNo3>) | [PDF](<https://openreview.net/pdf?id=aLQA62sNo3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151474>)

Unified and scalable Transformers have recently achieved remarkable success in modeling diverse phenomena traditionally associated with computer graphics, such as 3D visual effects, rendering processes, and motion in videos\. In this work, we take a step further by investigating whether modern Transformer techniques can tackle the challenging task of cloth simulation\. To this end, we present ClothTransformer, a framework that reformulates cloth simulation as autoregressive sequence modeling in a learned latent space\. Existing neural cloth simulators are largely specialized to single scenarios, intrinsically coupled to the mesh discretization, and lack robust collision handling\. Our approach addresses these limitations through three contributions: \(1\) a unified Transformer architecture that handles diverse scenarios\-\-\-body\-driven garments, robotic manipulation, and free\-fall collisions\-\-\-under a single model and achieves approximately $4$\-\-$9\{\\times\}$ lower error than prior state\-of\-the\-art across all scenarios; \(2\) a scalable latent\-space formulation that compresses arbitrary\-resolution meshes into a fixed\-size set of latent tokens, making temporal dynamics computation independent of mesh resolution; and \(3\) a diverse\-scenario high\-fidelity penetration\-free dataset of $\{\\sim\}$493\.4k frames  spanning all three settings, which enables a differentiable Continuous Collision Detection \(CCD\) module to suppress penetration artifacts\.

## TPRL: Adaptive Visual Token Pruning in LVLMs via Language\-Guided Reinforcement Learning

**Authors:** Sihan Cao; Jianwei Zhang; Pengcheng Zheng; Jiaxin Yan; Caiyan Qin; Yalan Ye; Wei Dong; Peng Wang; Yang Yang; Chaoning Zhang

**ID:** 153958 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HGL8gQMjLg>) | [PDF](<https://openreview.net/pdf?id=HGL8gQMjLg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153958>)

_Abstract unavailable from the accessible public sources._

## Partition\-Aware Unlearning for Removing Spurious Correlations in Large Vision\-Language Models

**Authors:** Aditi Sarker; Nazreen Shah; Rafi Ibn Sultan; Rhongho Jang; Dongxiao Zhu; Prashant Khanduri

**ID:** 139381 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tt3sSoAeJd>) | [PDF](<https://openreview.net/pdf?id=Tt3sSoAeJd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139381>)

_Abstract unavailable from the accessible public sources._

## Leak\-CURBER: A Leakage\-Controlled Multimodal Evaluation Benchmark for Enzymatic Reaction Tasks

**Authors:** Adhil Ahmed P M Shums; Roshan Balaji; Nirav Bhatt

**ID:** 139384 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tn4JHggWJI>) | [PDF](<https://openreview.net/pdf?id=Tn4JHggWJI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139384>)

_Abstract unavailable from the accessible public sources._

## Beyond Visual Boundaries: Rethinking Scene Segmentation for Movie RAG

**Authors:** Dong\-Hee Kim; Seonwoo Choi; Changbeen Kim; Jungmyung Wi; Juyeon Ko; Youngju Choi; Il Hyeon Mun; Hyunwoo J\. Kim; Donghyun Kim

**ID:** 139396 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TDlUSc9Koz>) | [PDF](<https://openreview.net/pdf?id=TDlUSc9Koz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139396>)

_Abstract unavailable from the accessible public sources._

## In\-Context Learning Can Help Vision Language Models Overcome Training Prior

**Authors:** Kun Wang; Xindi Wu; Sanghyuk Chun; Olga Russakovsky; Esin Tureci

**ID:** 148820 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=utoGFkBj7z>) | [PDF](<https://openreview.net/pdf?id=utoGFkBj7z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148820>)

_Abstract unavailable from the accessible public sources._

## VL\-DocIR: A Benchmark for Vision\-Based Long Document Retrieval

**Authors:** Simon Ott; Yufan Chen; Ruiping Liu; Junwei Zheng; Jiale Wei; Di Wen; Kunyu Peng; Jiaming Zhang; Rainer Stiefelhagen

**ID:** 139402 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SxsberZw0W>) | [PDF](<https://openreview.net/pdf?id=SxsberZw0W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139402>)

_Abstract unavailable from the accessible public sources._

## From Squeezing to Grounding: Visual Guided DPO for Multimodal Hallucination Mitigation

**Authors:** Wenqi Liu; Hongxin He; Yunxiao Wang; Xuemeng Song; Yupeng Hu; Yinwei Wei

**ID:** 154431 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DdP4SoPK7L>) | [PDF](<https://openreview.net/pdf?id=DdP4SoPK7L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154431>)

_Abstract unavailable from the accessible public sources._

## AgroOmni: A Large\-Scale Multi\-view Agricultural Dataset for Cross\-Scale Multimodal Reasoning

**Authors:** Jiarui Zhang; Junqi Hu; Zurong Mai; Yang Liu; Yuhang Chen; Loushuohong; Henglian Huang; Hong Cheng; Lingyuan Zhao; Huang Jianxi; Yutong Lu; Haohuan Fu; Juepeng Zheng

**ID:** 139411 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SGObw0CXzN>) | [PDF](<https://openreview.net/pdf?id=SGObw0CXzN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139411>)

_Abstract unavailable from the accessible public sources._

## When Depth Lies: Benchmarking Vision\-Language Models on Mirror\-Induced RGB\-D Ambiguity

**Authors:** HAO YIN; Tianchen Guo; Heming Du; Yan Ke; Yanbin Liu; Xin Yu

**ID:** 139413 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SD4Gs6UDWS>) | [PDF](<https://openreview.net/pdf?id=SD4Gs6UDWS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139413>)

_Abstract unavailable from the accessible public sources._

## MoT3DVG: A Benchmark for Outdoor 3D Visual Grounding with Motion\-Aware Descriptions and Temporal Cues

**Authors:** Shijia Zhao; Xusheng Guo; Qiming Xia; Xun Huang; KeZheng Xiong; Zhihong Liu; Chenglu Wen

**ID:** 139417 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RvziiLJPcD>) | [PDF](<https://openreview.net/pdf?id=RvziiLJPcD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139417>)

_Abstract unavailable from the accessible public sources._

## TorchUMM: A Unified Multimodal Model Codebase for Evaluation, Analysis, and Post\-training

**Authors:** Yinyi Luo; Wenwen Wang; Haoyue Bai; Hongyu Zhu; Hao Chen; Pan He; Marios Savvides; Sharon Li; Jindong Wang

**ID:** 139446 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRiGDfD7bh>) | [PDF](<https://openreview.net/pdf?id=PRiGDfD7bh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139446>)

Recent advances in unified multimodal models \(UMMs\) have led to a proliferation of architectures capable of understanding, generating, and editing across visual and textual modalities\. However, developing a unified framework for UMMs remains challenging due to the diversity of model architectures and the heterogeneity of training paradigms and implementation details\. In this paper, we present TorchUMM, the first unified codebase for comprehensive evaluation, analysis, and post\-training across diverse UMM backbones, tasks, and datasets\. TorchUMM supports a broad spectrum of models covering a wide range of scales and design paradigms\. Our benchmark encompasses three core task dimensions: multimodal understanding, generation, and editing, and integrates both established and novel datasets to evaluate perception, reasoning, compositionality, and instruction\-following abilities\. By providing a unified interface and standardized evaluation protocols, TorchUMM enables fair and reproducible comparisons across heterogeneous models and fosters deeper insights into their strengths and limitations, facilitating the development of more capable unified multimodal systems\. Code is available at: https://anonymous\.4open\.science/r/TorchUmm\-1E7E\.

## Mirror, Mirror on the Wall: Can VLM Agents Tell Who They Are at All?

**Authors:** Filippo Ziliotto; Ciro Beneduce; Luciano Serafini; Bruno Lepri; Massimiliano Luca; Tommaso Campari

**ID:** 139456 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Oiw8YhUMXU>) | [PDF](<https://openreview.net/pdf?id=Oiw8YhUMXU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139456>)

In the animal kingdom, mirror self\-recognition is a canonical probe of higher\-order cognition, emerging only in some species\. We ask whether an analogous functional capability emerges in embodied vision\-language model \(VLM\) agents: can they recognize themselves in a mirror? We introduce a controlled 3D benchmark where a first\-person VLM agent must infer a hidden body attribute from its reflection and select the matching target, while avoiding self–other misattribution\. To separate mirror\-grounded self\-identification from shortcuts, we test mirror removal, misleading cues, and occluded reflections\. We also evaluate the decision process through mirror seeking, temporal ordering, self\-attribution, and reasoning–action consistency\.  Our experiments show that mirror\-based self\-identification emerges mainly in stronger VLMs\. These models can use reflected evidence for action, whereas weaker models often inspect the mirror but fail to extract self\-relevant information or misattribute their reflection\. Language–vision conflict further shows that self\-referential language alone is not evidence of grounded self\-identification\.  Overall, mirror\-based evaluation provides a diagnostic for whether embodied self\-grounding is causally rooted in perception and action rather than priors, prompt compliance, or confabulation\.

## Intend, Reflect, Refine: An Adaptive Multimodal Reflection Framework for Autonomous Driving

**Authors:** Zisheng Chen; Yuping Qiu; Jianhua Han; Tao Tang; Xiuwei Chen; Likui Zhang; Yingcong Chen; Hang Xu; Xiaodan Liang

**ID:** 151227 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bxNZXvr395>) | [PDF](<https://openreview.net/pdf?id=bxNZXvr395>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151227>)

Recent Vision\-Language\-Action \(VLA\) models have advanced end\-to\-end autonomous driving by incorporating reasoning for better interpretability and planning quality\.  However, most existing approaches directly generate the final trajectory without explicitly examining its future consequences, which limits their reliability in complex and dynamic environments\. To address this limitation, we propose \*\*IRR\-Drive\*\* \(\*\*Intend, Reflect, Refine\*\*\), an adaptive multimodal reflection framework for autonomous driving\.  Specifically, to tightly couple high\-level reasoning with physical constraints, IRR\-Drive first generates a preliminary textual intention and anticipates potential interactions by predicting future semantic bird's\-eye view \(BEV\) representations\.  This dual\-modality \(Text \+ BEV\) reflection space explicitly models anticipated scene evolution, enabling the model to rigorously self\-correct and refine its initial intent before generating the final trajectory\.  Furthermore, to balance planning performance and computational efficiency, we construct reflection\-oriented training data and design an adaptive reflection reward, enabling the model to adaptively select its reasoning mode according to scene complexity\. Instead of using reasoning primarily as an auxiliary interpretation, IRR\-Drive directly integrates an adaptive reflection mechanism into the planning framework, enabling grounded, decision\-aware trajectory correction that is driven by scene complexity\. Our method achieves state\-of\-the\-art performance on the NAVSIM benchmark in both PDMS and EPDMS\. Extensive experiments demonstrate the effectiveness of our multimodal reflection framework and validate the efficacy of the proposed adaptive reflection strategy\.

## WorldMemArena: Evaluating Multimodal Agent Memory Through Action–World Interaction

**Authors:** Chengzhi Liu; Yuzhe YANG; Sophia Xiao Pu; Yepeng Liu; Lin Long; Yichen Guo; Nuo Chen; Zhaotian Weng; Yiheng Zhong; Angxiao Zong; Elena Kochkina; Simerjot Kaur; Charese Smiley; Xiaomo Liu; James Zou; Sheng Liu; Yuheng Bu; Songyou Peng; Xin Wang

**ID:** 139051 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o06F424mDf>) | [PDF](<https://openreview.net/pdf?id=o06F424mDf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139051>)

_Abstract unavailable from the accessible public sources._

## Explaining Cross\-Modal Model Behavior with Gradient\-Estimation\-Based Feature Interaction

**Authors:** Yi Cai; Xinpeng Li; Gerhard Wunder

**ID:** 150190 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k3fR86JLGj>) | [PDF](<https://openreview.net/pdf?id=k3fR86JLGj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150190>)

Multi\-modal machine learning has become a dominant paradigm for building large\-scale models that integrate information across heterogeneous modalities and achieve unprecedented representational capabilities\. However, the multi\-modal nature of such models introduces unique challenges for explainability\. Specifically, the standard feature attribution task considers only individual feature contributions\. While solutions of this kind can be adapted to operate on each modality, such first\-order explanations are insufficient to characterize cross\-modal feature interactions, which are essential for understanding model behavior involving cross\-modal alignment\. To bridge the gap, this paper studies higher\-order feature interactions in multi\-modal settings and proposes Gradient\-Estimation\-Based Feature Interaction \(GEFI\)\. GEFI is derived from the proxy gradient estimation framework, and we establish its theoretical equivalence to the Shapley Interaction Index at arbitrary orders\. Beyond the general theory, we instantiate GEFI\-PM for CLIP\-like models by exploiting their dual\-encoder architecture\. The resulting formulation enables the efficient estimation of interactions between visual and textual features\. Compared to existing methods for revealing cross\-modal interactions, which generally operate on fixed image patches, GEFI offers fine\-grained pixel\-level interactions while maintaining computational efficiency, yielding more expressive results\.

## ControlSVG: Exploring Controllable SVG Generation with Autoregressive Models

**Authors:** Qirui Li; Teng Hu; Ran Yi; Paul L Rosin; Yu\-Kun Lai

**ID:** 151441 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=afzeP5GBOh>) | [PDF](<https://openreview.net/pdf?id=afzeP5GBOh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151441>)

Autoregressive \(AR\) models have reformulated Scalable Vector Graphics \(SVG\) generation as next\-token prediction, demonstrating remarkable potential in text\-to\-SVG tasks\. However, controllable SVG generation guided by spatial signals \(e\.g\., sketches or scribbles\) remains largely unexplored within AR models\. While a natural approach, inspired by controllable image generation, is to adapt methods like Condition Prefilling or Conditional Decoding, they fall short in SVG generation\. To address these challenges, we introduce ControlSVG, a versatile and effective framework tailored for integrating precise spatial controls into autoregressive SVG generation\. Firstly, we propose a Visual\-Feedback Conditioning mechanism that constructs a “See\-and\-Draw" loop\. This design mitigates cross\-modal drift and ensures long\-range consistency\. Secondly, we explore spatially aware learning objectives that explicitly bridge discretized SVG tokens with their absolute 2D spatial coordinates, enhancing robustness against coordinate deviations during sequential generation\. Extensive experiments on Canny\-Edge\-to\-SVG generation demonstrate that ControlSVG outperforms existing baselines, achieving superior spatial alignment and high\-quality SVG\. We further provide preliminary validations on real human\-drawn scribbles and extend the framework to scribble\-to\-SVG and image\-to\-SVG settings, suggesting its potential applicability beyond Canny\-based control\.

## FusionNeXt: Sequence\-First 3D Multi\-Modal Fusion in the Era of LLMs

**Authors:** Yu Hong; Xiaosong Jia; Songbur Wong; Yanhao Liu; Wenlong Liao; Tao He; Junchi Yan

**ID:** 150560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hEoPVPh3pb>) | [PDF](<https://openreview.net/pdf?id=hEoPVPh3pb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150560>)

Modern LLMs/VLMs have largely converged to a unified architecture: representing heterogeneous inputs as a single token sequence and processing it with a deep stack of generic operators such as attention and feed\-forward layers\. This sequence\-first interface simplifies system designs and thus enables extensive algorithmic and hardware optimization, making it a compelling blueprint for modern model development\. In contrast, 3D multi\-modal fusion models still rely on complex and specialized designs such as dense feature representations, sparse 3D convolutions, deformable attention, view transformations, etc\. In this paper, we ask: \\textbf\{Can 3D multi\-modal fusion embrace the same design path as modern LLMs/VLMs and benefit from their mature and rapidly evolving ecosystem?\} We answer this affirmatively and propose \\textbf\{FusionNeXt\}, a modern multi\-modal fusion paradigm that \(i\) unifies camera and LiDAR features into a shared token representation, \(ii\) serializes tokens into locality\-preserving 1D sequences, and \(iii\) performs feature fusion using a deep stack of vanilla LLM/VLM\-style blocks\-\-\-FlashAttention, pre\-norm residuals, SwiGLU FFNs, etc\. The proposed paradigm enables standard sequence modeling tools to be applied directly to 3D multi\-modal fusion, resulting in fast inference, strong performance, and generalization across tasks\. FusionNeXt achieves state\-of\-the\-art \(SOTA\) results on the nuScenes 3D detection and Occ3D occupancy benchmarks while delivering high inference throughput, suggesting a scalable direction for 3D perception\. We will open\-source our code\.

## Prompt\-Driven Exploration

**Authors:** Sunshine Jiang; John Marangola; David Zhang; Raghuram Kowdeed; Ruiyang Luo; Nitish Dashora; Richard Li; Pulkit Agrawal; Zhang\-Wei Hong

**ID:** 150317 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=izyPP7UWKU>) | [PDF](<https://openreview.net/pdf?id=izyPP7UWKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150317>)

Reinforcement learning is the standard way to post\-train foundation models, but progress is bottlenecked by exploration\. The usual approach perturbs sampled actions, which only moves the policy locally, yet hard tasks often require strategies very different from what the policy currently does\. This is especially problematic when fine\-tuning starts from a weak policy with low success rates and little useful behavior to refine\. Many foundation\-model policies, however, are conditioned on a natural\-language prompt, and varying the prompt produces qualitatively different behaviors from the same policy\. This suggests a different angle: perturb the prompt instead of the action\. Our key insight is that a distribution over prompts induces a distribution over policies, with structure already shaped by the pretrained language prior\. This turns exploration into a familiar problem: posterior sampling, where we maintain a belief over which prompts elicit success, sample from it to drive rollouts, and update it from what we observe\. A vision\-language model fits this role naturally, both proposing plausible prompts and reasoning about past rollouts to shift the distribution toward ones more likely to succeed\. We call this Prompt\-Driven Exploration \(PDE\)\. On hard tasks where action\-space exploration fails to make progress, PDE bootstraps from nearly zero success to high success rates with far fewer environment interactions\.

## MMSkills: Towards Multimodal Skills for General Visual Agents

**Authors:** Kangning Zhang; Shuai Shao; Wenxiang Jiao; Qingyao Li; Jianghao Lin; Lingyue Fu; Shijian Wang; Yuan Lu; Weiwen Liu; Weinan Zhang; Yong Yu

**ID:** 148831 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=up4CskJQ0w>) | [PDF](<https://openreview.net/pdf?id=up4CskJQ0w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148831>)

Reusable skills have become a core substrate for improving agent capabilities, yet most existing skill packages encode reusable behavior primarily as textual prompts, executable code, or learned routines\. For visual agents, however, procedural knowledge is inherently multimodal: reuse depends not only on what operation to perform, but also on recognizing the relevant state, interpreting visual evidence of progress or failure, and deciding what to do next\. We formalize this requirement as \\emph\{multimodal procedural knowledge\} and address three practical challenges: \(I\) \\textbf\{what\} a multimodal skill package should contain; \(II\) \\textbf\{where\} such packages can be derived from public interaction experience; and \(III\) \\textbf\{how\} agents can consult multimodal evidence at inference time without excessive image context or over\-anchoring to reference screenshots\. We introduce \\emph\{MMSkills\}, a framework for representing, generating, and using reusable multimodal procedures for runtime visual decision making\. Each MMSkill is a compact, state\-conditioned package that couples a textual procedure with runtime state cards and multi\-view keyframes\. To construct these packages, we develop an agentic trajectory\-to\-skill Generator that transforms public non\-evaluation trajectories into reusable multimodal skills through workflow grouping, procedure induction, visual grounding, and meta\-skill\-guided auditing\. To use them, we introduce a branch\-loaded multimodal skill agent: selected state cards and keyframes are inspected in a temporary branch, aligned with the live environment, and distilled into structured guidance for the main agent\. Experiments across GUI and game\-based visual\-agent benchmarks show that MMSkills consistently improve both frontier and smaller multimodal agents, suggesting that external multimodal procedural knowledge complements model\-internal priors\. The code is accessible in \\href\{https://anonymous\.4open\.science/r/MMSkills\}\{https://anonymous\.4open\.science/r/MMSkills\}\.

## SMMBench: A Benchmark for Source\-Distributed Multimodal Agent Memory

**Authors:** Huacan Chai; YUKAI WANG; Yingxuan Yang; Dan Peng; Yuanyi Song; Zhihui Fu; Jun Wang; Weiwen Liu; Jianghao Lin; Weinan Zhang

**ID:** 139761 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6FddqZ3fYX>) | [PDF](<https://openreview.net/pdf?id=6FddqZ3fYX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139761>)

Existing benchmarks for multimodal memory reasoning largely evaluate systems within pre\-assembled contexts, but under\-evaluate whether agents can use evidence distributed across independently originated sources\. We argue that source\-distributed memory composition is an important and under\-examined bottleneck in multimodal agent memory, especially when relevant evidence is fragmented across heterogeneous artifacts such as conversations, profiles, screenshots, tables, images, and documents\. To address this gap, we introduce Source\-distributed Multimodal Memory Benchmark, which measures whether agents can retrieve, align, and compose multimodal evidence scattered across multiple sources rather than reason within a single curated context\. SMMBench evaluates four core capabilities: \(1\) cross\-source multimodal reasoning; \(2\) conflict resolution; \(3\) preference reasoning; \(4\) memory\-grounded action prediction\. The benchmark contains $1,877$ samples grounded in $264$ sources\. Experiments on representative memory\-style and retrieval\-based baselines show that current systems still struggle on these capabilities, positioning source\-distributed multimodal memory as an important and still under\-evaluated challenge for multimodal agents\. Our data and code are available at https://anonymous\.4open\.science/r/NeurIPSBenchmarksW8kP6gV/\.

## NeuronEye: Query\-Guided Visual Concept Activation for Vision\-Language Reasoning

**Authors:** Ruiyu Yan; Bowen Chen; Shaowen Wan; Lin Zhao

**ID:** 155426 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5kvIkFj6Si>) | [PDF](<https://openreview.net/pdf?id=5kvIkFj6Si>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155426>)

Current vision\-language models \(VLMs\) encode visual information in dense hidden states where object identity, spatial layout, and local attributes are implicitly entangled rather than explicitly disentangled, limiting their ability to isolate and modulate the specific visual evidence required by a given language query\. Inspired by sparse population coding and top\-down modulation in biological vision, we introduce NeuronEye, a plug\-in framework that constructs a sparse, concept\-level neuron vocabulary from intermediate VLM representations and selectively activates query\-relevant visual concepts during inference\. NeuronEye decomposes vision\-token states into an overcomplete sparse basis organized by concept\-level clusters, uses the language query to activate relevant clusters and localize the patches where selected concepts are expressed, and injects the focused evidence back into vision tokens\. A complementary suppression mechanism attenuates dominant perceptual directions to preserve weaker but relevant cues\. All operations run in a single forward pass over a frozen VLM backbone\. On Qwen2\.5\-VL\-7B, NeuronEye raises CV\-Bench overall accuracy by \+3\.1 with gains of \+9\.5 on Distance, and improves BLINK Multi\-view by \+8\.3, with similar trends on LLaVA\-1\.6\-7B\. These results suggest that sparse neuron vocabularies can serve not only as post\-hoc interpretability tools but also as active interfaces for concept\-level visual reasoning\.

## Rethinking Projector Training in Multimodal LLMs

**Authors:** Fabian Gröger; Naël Ouerghemi; Shuo Wen; Maria Brbic

**ID:** 153944 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HObX41utGv>) | [PDF](<https://openreview.net/pdf?id=HObX41utGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153944>)

Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image\-caption datasets, followed by joint training of the full multimodal model\. Despite its widespread use, the role of the projector training stage remains poorly understood\.  Does it learn fine\-grained visual\-language correspondences, or mainly maps visual features into a compatible input space for the language model? We find that \(i\) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and \(ii\) projectors trained on different datasets can be linearly interpolated while largely preserving performance\. These results suggest that projector training acts primarily as a coarse alignment within a large solution space\. Motivated by these findings, we propose PORTAL, a training\-free projector initialization that requires neither paired image\-caption data nor gradient\-based optimization, but only per\-modality summary statistics\. PORTAL computes an optimal\-transport\-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, enabling completely skipping projector pretraining\. Despite using no paired data, while the standard approach relies on 0\.5M image–caption pairs, PORTAL matches the default trained pipeline across six LLM backbones, two vision encoders, and 16 benchmarks, outperforming it in $3$ of $7$ \(vision, LLM\) settings, and remaining within $1\.6$ average points across all other settings\.

## Witness Overlap: Directional Provenance Inside Open\-Weight Model Families

**Authors:** Siyuan Li; Haoxuan Zeng; Xin Luo; Fernando Jia; Florence Li; Zhengyang Geng; Zico Kolter; Tai Sing Lee; Tianqin Li

**ID:** 149996 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lc1XaBdx6q>) | [PDF](<https://openreview.net/pdf?id=lc1XaBdx6q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149996>)

Open\-weight models are often released, fine\-tuned, aligned, merged, and re\-released, making provenance audits ask not only whether checkpoints are related, but also which checkpoint came first\. Many existing model\-provenance methods are designed for a base\-known audit setting: given a victim or source model, they test whether a suspect model is related to it\. Although these audits are framed as source\-to\-suspect tests, their underlying evidence is often symmetric, relying on representation similarity, weight similarity, behavioral fingerprints, or correlation statistics\. Symmetric pairwise comparisons can detect relatedness, but they cannot by themselves orient A versus B\.  We therefore introduce a local geometric comparison: instead of comparing two checkpoints directly, we add a third same\-family checkpoint as a witness and compare the geometry around A with the geometry around B\. Direction is inferred by asking which candidate behaves more like a branching parent\. Motivated by this idea, and by the empirically observed asymmetry between parent\-anchored and child\-anchored witness\-overlap distributions, we propose Witness Overlap, a prompt\-free, training\-free white\-box test for directional provenance\. On 176 LLM checkpoints from 16 families, our one\-witness test orients 95\.3\\% of parent–child decisions using Frobenius cosine\. We further evaluate root identification, sibling discrimination, generalizations to VLM and diffusion families, and chain\-structured ordering\. The signal is robust to weight noise and sparse pruning, with a proposed SVD weight reduction variant showing greater robustness than Frobenius cosine\.

## Toward in Silico Strain Evaluation: A Multimodal Surrogate for Fermentation Dynamics with Metabolic Graph Pretraining

**Authors:** Yunxiao Li; Difeng Gao; Yubin Zheng; JIJIAO ZENG

**ID:** 150995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dij6bw1w7s>) | [PDF](<https://openreview.net/pdf?id=dij6bw1w7s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150995>)

Strain engineering for industrial fermentation faces a structural design\-test scale gap: combinatorial pathway perturbations of $2$–$3$ enzymes already span $10^4$–$10^6$ candidate strains, while bench\-scale fermentation throughput remains on the order of $10^2$ runs per laboratory per year\. One way to narrow this gap is in silico evaluation by perturbing a learned gene\-expression $\\to$ phenotype mapping \(conditioned on process state\); the precondition is that such a mapping can be learned from bench\-scale\-sized datasets\. As a proof\-of\-concept, we ask whether a genome\-scale metabolic model \(GEM\)\-graph mechanistic prior supports learning such a mapping from $\\sim44$ bioreactor runs of an engineered Yarrowia lipolytica astaxanthin\-producing strain\. We propose a spatio\-temporal GNN encoder structured as a Mass Flow Graph over the GEM, paired with a multimodal input head over gene\-expression snapshots, sensor streams, time\-series assays, and run\-level metadata\. The encoder is pretrained by masked\-flux prediction on Flux Balance Analysis \(FBA\) samples, distilling the GEM's stoichiometric and mass\-balance constraints into it before fermentation data are seen\. Under $5$\-fold cross\-validation across $5$ seeds, the surrogate attains the lowest mean composite test RMSE among the baselines we compare against\. Structural ablations show that the GEM\-graph prior is necessary—an order\-of\-magnitude RMSE divergence when removed—while pretraining together with the gene\-expression modality make a significant joint contribution, supporting the proof\-of\-concept claim\.

## Evo\-Depth: A Lightweight Depth\-Enhanced Vision\-Language\-Action Model

**Authors:** Tao Lin; Yuxin Du; Jiting Liu; Nuobei Zhu; YUNHE LI; Yuqian Fu; Yinxinyu Chen; Hongyi Cai; Ye Zewei; Bing Cheng; Kai Ye; Yiran Mao; Yilei Zhong; Mingkang Dong; Junchi Yan; Gen Li; Bo Zhao

**ID:** 154131 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G2jacreNCB>) | [PDF](<https://openreview.net/pdf?id=G2jacreNCB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154131>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for robotic manipulation by unifying perception, language grounding, and action generation\. However, they often struggle in scenarios requiring precise spatial understanding, as current VLA models primarily rely on 2D visual representations that lack depth information and detailed spatial relationships\.  While recent approaches incorporate explicit 3D inputs such as depth maps or point clouds to address this issue, they often increase system complexity, require additional sensors, and remain vulnerable to sensing noise and reconstruction errors\.  Another line of work explores implicit 3D\-aware spatial modeling directly from RGB observations without extra sensors, but it often relies on large geometry foundation models, resulting in higher training and deployment costs\. To address these challenges, we propose \\textbf\{Evo\-Depth\}, a lightweight depth\-enhanced VLA framework that enhances spatially grounded manipulation without relying on additional sensing hardware or compromising deployment efficiency\. Evo\-Depth employs a lightweight \\textit\{Implicit Depth Encoding Module\} \(IDEM\) to extract compact depth features from multi\-view RGB images\. These features are incorporated into vision\-language representations through a \\textit\{Spatial Enhancement Module\} \(SEM\) via depth\-aware modulation, enabling efficient spatial\-semantic enhancement\. A \\textit\{Progressive Alignment Training\} strategy is further introduced to align the resulting depth\-enhanced representations with downstream action learning\. Extensive experiments in simulation and real\-world settings demonstrate the effectiveness of Evo\-Depth\.  With only \\textbf\{0\.9B\} parameters, Evo\-Depth achieves state\-of\-the\-art\-level performance across four simulation benchmarks\. In real\-world experiments, Evo\-Depth attains the highest average success rate while also exhibiting the smallest model size, lowest GPU memory usage, and highest inference frequency among compared methods\. These results demonstrate that lightweight implicit depth enhancement is an effective and practical solution for spatially grounded robotic manipulation\. We release code and models to facilitate future research on lightweight depth\-enhanced VLA models\.

## An Efficient Cross\-modal Feature Reconstruction Model for Multimodal Multi\-class Anomaly Detection

**Authors:** Zhenghan Wang; Zhihui Luo; Haitao Hu; Wengang Cheng

**ID:** 153426 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LQQHB5gOGa>) | [PDF](<https://openreview.net/pdf?id=LQQHB5gOGa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153426>)

Industrial anomaly detection is evolving from category\-specific detectors toward unified models capable of handling multiple categories simultaneously\. However, in multi\-class setting, greater inter\-category diversity not only compels enhanced reconstruction capacity to model normal patterns but also exacerbates the “identical shortcut” problem, wherein anomalies are likewise well reconstructed\. Moreover, existing unified frameworks are typically confined to single\-modal \(RGB\) inputs and lack multimodal capability\. To address these, we propose an Efficient Cross\-modal Feature Reconstruction \(ECFR\) model for unified multi\-class anomaly detection, which harnesses the inherent difficulty of cross\-modal reconstruction to alleviate the shortcut issue and amplify anomaly discrimination\. The framework is built on two core modules: an Adaptive Feature Interaction and Recalibration \(AFIR\) module and a Hybrid Attention Convolution \(HAC\) module\. Through feature interaction, fusion, and reconstruction, our model achieves two key outcomes: learning normal patterns of multi\-class objects while forcing reconstruction failures for anomalous inputs\. Extensive experiments on the MVTec 3D\-AD and Eyecandies datasets validate our approach, which achieves state\-of\-the\-art performance in multimodal multi\-class anomaly detection while requiring significantly fewer model parameters \(44\.63 M\) and lower computational complexity \(15\.77 GFLOPs\) compared to previous multimodal anomaly detection methods\.

## Generative Scenario Rollouts for End\-to\-End Autonomous Driving

**Authors:** Rajeev Yasarla; Deepti Hegde; Shizhong Han; Hsin\-Pai Cheng; Yunxiao Shi; MeysamSadeghi; Shweta Mahajan; Apratim Bhattacharyya; Litian Liu; Risheek Garrepalli; Thomas Svantesson; Mohammad Ghavamzadeh; Fatih Porikli; Herbert Cai

**ID:** 155620 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4CvrLyVNLO>) | [PDF](<https://openreview.net/pdf?id=4CvrLyVNLO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155620>)

Vision\-Language\-Action \(VLA\) models are emerging as highly effective planning models for end\-to\-end autonomous driving systems\. However, current works mostly rely on imitation learning from sparse trajectory annotations and under\-utilize their potential as generative models\. We propose Generative Scenario Rollouts \(GeRo\), a plug\-and\-play framework for VLA models that jointly performs planning and generation of language\-grounded future traffic scenes through an autoregressive rollout strategy\. First, a VLA model is trained to encode ego vehicle and agent dynamics into latent tokens under supervision from planning, motion, and language tasks, facilitating text\-aligned generation\. Next, GeRo performs language\-conditioned autoregressive generation\. Given multi\-view images, a scenario description, and ego\-action questions, it generates future latent tokens and textual responses to guide long\-horizon rollouts\. A rollout\-consistency loss stabilizes predictions using ground truth or pseudo\-labels, mitigating drift and preserving text\-action alignment\. This design enables GeRo to perform temporally consistent, language\-grounded rollouts that support long\-horizon reasoning and multi\-agent planning\. On Bench2Drive, GeRo improves driving score and success rate by \+15\.7 and \+26\.2, respectively\. By integrating reinforcement learning with generative rollouts, GeRo achieves state\-of\-the\-art closed\-loop and open\-loop performance, demonstrating strong zero\-shot robustness\. These results highlight the promise of generative, language\-conditioned reasoning as a foundation for safer and more interpretable end\-to\-end autonomous driving\.

## What Drives Test\-Time Adaptation for CLIP? A Controlled Empirical Study from an Update Perspective

**Authors:** Jiazhen Huang; Xiao Chen; Zhiming Liu; Yaru Sun; Jingyan Jiang; Zhi Wang

**ID:** 139128 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jUrzOPgzZq>) | [PDF](<https://openreview.net/pdf?id=jUrzOPgzZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139128>)

Vision\-Language Models \(VLMs\) such as CLIP have become a standard backbone for open\-vocabulary recognition, yet their zero\-shot predictions remain vulnerable to distribution shifts encountered at deployment\. Test\-Time Adaptation \(TTA\) has recently been extended to CLIP as a lightweight solution, leading to a rapidly growing body of TTA4CLIP methods\. However, empirical progress in this area has largely outpaced our understanding of what truly drives adaptation, where their gains originate, and under which shifts they remain reliable\. In this paper, we take a step back from the pursuit of state\-of\-the\-art accuracy and conduct a systematic controlled study of TTA4CLIP\. We first organize existing methods into three unified paradigms according to what is updated at test time\. We then introduce TTABC, an open\-source TTA Benchmark for CLIP, which standardizes evaluation protocols and integrates more than 20 representative methods\. Our controlled empirical analysis focuses on three key areas\. First, we determine the driving factors in parameter\-based methods, revealing that adaptation gains are primarily driven by test\-time evidence and reliable proxies rather than heavy optimization\. Second, we explore evidence utilization beyond heavy parameter tuning, showing that competitive and efficient performance can be achieved through cross\- or current\-sample evidence and lightweight prototype updates\. Finally, we demonstrate that there is no silver bullet for TTA; no single adaptation paradigm is universally optimal, and the preferred paradigm depends on the nature of shift\. We hope our benchmark and study provide a clearer understanding of the current TTA4CLIP landscape and establish a foundation for further research\.

## Lost on Campus: Evaluating Embodied Spatial Reasoning of Vision\-Language Models in the Wild

**Authors:** Zehan Zheng; Yanyuan Chen; Deming Li; Yutao Tang; Jianwen Xie; Alan Yuille; Jieneng Chen; Cheng Peng

**ID:** 139093 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lU1kNLfVEL>) | [PDF](<https://openreview.net/pdf?id=lU1kNLfVEL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139093>)

Embodied Spatial Reasoning \(ESR\) is central to deploying Vision\-Language Models \(VLMs\) in real\-world embodied tasks, yet remains inadequately evaluated\. Existing benchmarks primarily assess spatial reasoning in static images or synthetic indoor environments, where semantic shortcuts often suffice, making it difficult to faithfully evaluate spatial reasoning capabilities in the wild\. In light of this, we present Lost on Campus, a benchmark for evaluating ESR in large\-scale real\-world outdoor 3D environments reconstructed by 3D Gaussian Splatting\. Our benchmark introduces a unified reasoning\-action evaluation framework that seamlessly integrates diagnostic QA for isolated reasoning with closed\-loop interactive navigation for active reasoning under multimodal instructions\. To enable fine\-grained diagnosis, we systematically decompose ESR into six fundamental capabilities: action grounding, spatial foresight, metric awareness, goal\-directed planning, global localization, and spatio\-temporal consistency\. Extensive experiments reveal that: \(i\) Compared to indoor settings, real\-world outdoor environments impose substantially higher demands on spatial reasoning, where existing models exhibit poor performance; \(ii\) VLMs still struggle with fine\-grained visual alignment, with failures in spatial foresight and self\-aware localization emerging as primary bottlenecks; \(iii\) Improving multimodal interaction capabilities and long\-term spatial reasoning is crucial for advancing embodied intelligence\. These findings highlight that faithful evaluation of ESR demands benchmarks tightly coupling perception, reasoning and action within realistic and continuous environments\.

## EDMA: Entropy\-Driven Multimodal Answering

**Authors:** Emanuele Mezzi; Gertjan Burghouts; Fabio Massacci; Mengyuan Zhang

**ID:** 150520 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hUf4I26zIr>) | [PDF](<https://openreview.net/pdf?id=hUf4I26zIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150520>)

Multimodal question answering \(MMQA\) is based on integrating heterogeneous data sources, selectively leveraging relevant modalities, and ignoring distractors\. Existing approaches based on Multimodal Large Language Models \(MLLMs\) improve performance by splitting the task into intermediate steps, but do not quantify how each modality contributes to reaching the final answer\. We argue that quantifying the effect that each modality has on the answering process improves process traceability and final performance\. Thus, we propose Entropy\-Driven Multimodal Answering \(EDMA\), which uses logical entropy to formalise multimodal QA as an iterative process of entropy reduction and to quantify the contribution of each modality in distinguishing correct from incorrect candidate answers\. This enables the construction of quantifiable answering trajectories, where each step is associated with a measurable entropy reduction\. EDMA introduces \(i\) modality\-conditioned partitioning to estimate unimodal entropy reduction, \(ii\) entropy\-driven multimodal fusion to capture complementary information across modalities, and \(iii\) entropy\-based selection of the answering trajectory that minimises the most logical entropy\. Experiments on multimodal QA benchmarks show that EDMA consistently outperforms prompting\-based baselines and state\-of\-the\-art methods\. Averaged across datasets, EDMA achieves gains of $12\.8$ and $19\.8$ F1 points over the strongest prompting baseline and state\-of\-the\-art system, respectively\. Moreover, we show that higher entropy correlates with more false positives and, through controlled interventions on the choice of the answering trajectory, provide evidence that lower\-entropy partitions causally reduce false positives, validating entropy level as a reliable proxy for performance\. We share our code at https://anonymous\.4open\.science/r/EDMA/README\.md\.

## BioXArena: Benchmarking LLM Agents on Multi\-Modal Biomedical Machine Learning Tasks

**Authors:** Loka Li; Duzhen Zhang; Xingbo Du; Leonard Song; Zixiao Wang; Assanali Aukenov; Noel Thomas; Shakhnazar Sailaukan; Yonghan Yang; Feilong Chen; Jiahua Dong; Kun Zhang; Bin Zhang; Le Song

**ID:** 138952 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uFVrUm3zfO>) | [PDF](<https://openreview.net/pdf?id=uFVrUm3zfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138952>)

Large language model \(LLM\) agents increasingly automate machine\-learning model building, yet biomedical benchmarks emphasize question answering, reasoning, and tool use or cover narrow slices of biomedical ML coding\. We introduce BioXArena, a biomedical machine learning \(BioML\) coding benchmark for task\-specific model building on heterogeneous, often multi\-modal datasets\. It contains 76 end\-to\-end tasks across 9 domains: sequence, single\-cell, structure, network biology, chemical biology, perturbation dynamics, phenotype\-\-disease, imaging, and text\-integrated tasks\. Each task packages primary\-source data with hidden labels, held\-out graders, and biology\-aware metrics on a unified 0\-to\-100 scale; agents write runnable code, train models, and predict private test samples\. BioXArena emphasizes realistic data interfaces: most tasks require agents to integrate multiple input sources, including 46 tasks that combine distinct modality families\. We compare 18 harness\-\-backbone configurations: general\-purpose coding, biomedical, and ML agents plus our Minimal runner, all under the same controlled resource configuration\. Codex with GPT\-6 Astra achieves the highest task\-level average score of 73\.91 among 18 configurations, closely followed by Claude Code with Opus 5\.5 \(73\.79\)\. Matched\-backbone comparisons show higher observed scores for mature coding systems than for Minimal; seven Minimal backends characterize model differences under a fixed runner\. Beyond the main leaderboard, ablations, robustness checks, and scaling, runtime, and failure\-mode analyses characterize how backbones, scaffolds, budgets, and domains affect BioML coding performance, exposing modeling and execution gaps across agent and LLM backbone families\.

## TKCAM: Text and Keyframe to Camera Trajectory Generation

**Authors:** Haozhe Yang; Zhiyang \(Frank\) Dou; Zekai Gu; Cheng Lin; Wenping Wang; Yuan Liu; Taku Komura

**ID:** 153921 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=He1Jh80Zy2>) | [PDF](<https://openreview.net/pdf?id=He1Jh80Zy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153921>)

_Abstract unavailable from the accessible public sources._

## AirIAD: Agentic Iterative Reasoning for Industrial Anomaly Detection

**Authors:** Huan Yu; TIECHENG ZHANG; Jin Wang; Jingru Yang; Kaixiang Huang; Zhongyang Sun; Guodong Lu; Shengfeng He

**ID:** 153593 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KGsOIl5BNC>) | [PDF](<https://openreview.net/pdf?id=KGsOIl5BNC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153593>)

_Abstract unavailable from the accessible public sources._

## RAO\-Nav: Probing Omni\-Language Models for Zero\-shot Semantic Audio\-Visual Navigation

**Authors:** Qilang Ye; Meng Liu; Yu Zhou

**ID:** 151487 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aGH4iWBX36>) | [PDF](<https://openreview.net/pdf?id=aGH4iWBX36>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151487>)

_Abstract unavailable from the accessible public sources._

## Q\-ViK: Question\-Guided Visual KV Cache Eviction for Large Vision\-Language Models

**Authors:** Solhee Hwang; Jangho Kim

**ID:** 148422 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xvyNCwtt1q>) | [PDF](<https://openreview.net/pdf?id=xvyNCwtt1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148422>)

_Abstract unavailable from the accessible public sources._

## Complementing DINO Features with Image Structure for Part Discovery

**Authors:** Samyak Rawlekar; Nikhil C Paleti; Amey Gupta; Narendra Ahuja

**ID:** 151156 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cbLnr5GrNf>) | [PDF](<https://openreview.net/pdf?id=cbLnr5GrNf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151156>)

_Abstract unavailable from the accessible public sources._

## GeoMamba: Geometry\-Aware State Space Modeling for Image Restoration

**Authors:** Dafeng Zhang; Shizhuo Liu

**ID:** 148154 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ztrNOMAstc>) | [PDF](<https://openreview.net/pdf?id=ztrNOMAstc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148154>)

_Abstract unavailable from the accessible public sources._

## Evaluating Multimodal Narrative Understanding of Popular Hollywood Films

**Authors:** David Bamman; Kent K Chang; Allison Cooper; Juishan Hsu; Reina Kushihashi; Madison Mar; Arnav Podichetty; Rachael G Samberg; Ipek N Sancak; Yuhan Shao

**ID:** 139677 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Awura1yDmq>) | [PDF](<https://openreview.net/pdf?id=Awura1yDmq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139677>)

_Abstract unavailable from the accessible public sources._

## MM\-OptBench: A Solver\-Grounded Benchmark for Multimodal Optimization Modeling

**Authors:** Zhong Li; Qi Huang; Yuxuan Zhu; Mohammad Mohammadi Amiri; Niki van Stein; Thomas Bäck; Matthijs van Leeuwen; Zaiwen Wen; Lincen Yang

**ID:** 139697 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A3g2i6LYgQ>) | [PDF](<https://openreview.net/pdf?id=A3g2i6LYgQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139697>)

_Abstract unavailable from the accessible public sources._

## A Multimodal Benchmark for Evaluating Cause\-of\-Death Inference Using Child Health and Mortality Data

**Authors:** Junhe Yang; Soumyakanti Pan; Hyun Seung Lim; YUE CHU; Yuting Guo; Nishtha Agarwal; Varun Babbar; Gaurav Rajesh Parikh; Yiqun Chen; Chris A Rees; Ziyaad Dangor; Sanjay G Lala; Zehang Li; Samuel J Clark; Zhenke Wu; Abhirup Datta; Li Liu; Cynthia Rudin; Samuel Scarpino; Benjamin M Gyori; Tyler H\. McCormick

**ID:** 139715 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8qRMs3zaOJ>) | [PDF](<https://openreview.net/pdf?id=8qRMs3zaOJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139715>)

_Abstract unavailable from the accessible public sources._

## Multimodal Context\-Aware Human Motion Generation with Language, Vision, and Object

**Authors:** Junyu Shi; Yong Sun; Zhiyuan Zhang; Lijiang LIU; Yuxin He; Zhengjie Zhang; Qiang Nie

**ID:** 151367 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b6H08StHtE>) | [PDF](<https://openreview.net/pdf?id=b6H08StHtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151367>)

_Abstract unavailable from the accessible public sources._

## Learn where to Click from Yourself: On\-Policy Self\-Distillation for GUI Grounding

**Authors:** Yan Zhang; Daiqing Wu; Huawen Shen; Can Ma; Yu Zhou

**ID:** 155839 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2VKnAsEMvi>) | [PDF](<https://openreview.net/pdf?id=2VKnAsEMvi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155839>)

_Abstract unavailable from the accessible public sources._

## SayNext\-Bench: Why Do LLMs Struggle with Next\-Utterance Anticipation?

**Authors:** Yueyi Yang; Haotian Liu; Fang Kang; Mengqi Zhang; Zheng Lian; Hao Tang; Haoyu Chen

**ID:** 139460 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OOXhN5Y5Xz>) | [PDF](<https://openreview.net/pdf?id=OOXhN5Y5Xz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139460>)

_Abstract unavailable from the accessible public sources._

## SearchV: Evolutionary Fine\-Grained Visual\-Token Skipping for Efficient Vision\-Language Models

**Authors:** Xinrui Chen; Zhen Huang; Shuwei Li; Fanyi Zeng; Dongxu Yue; Hao Yu; Huaisong Zhang; Xitong Ling; Yongxian Wei; Feng Lu; Chun Yuan

**ID:** 150488 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hiy8FQrDmX>) | [PDF](<https://openreview.net/pdf?id=hiy8FQrDmX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150488>)

_Abstract unavailable from the accessible public sources._

## PanoHK360: A Large\-Scale 8K Urban Panoramic Dataset and Benchmark for Depth Estimation

**Authors:** Yunxiao Chen; Honghuan Lin; Ruisheng Wang; Yujun Liu; Kun Zhou; Shangfeng Huang; Tsz Nam Chan

**ID:** 139447 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRhrTQBXhP>) | [PDF](<https://openreview.net/pdf?id=PRhrTQBXhP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139447>)

_Abstract unavailable from the accessible public sources._

## OmniSelect: Dynamic Modality\-Aware Token Compression for Efficient Omni\-modal Large Language Models

**Authors:** Morunliu Yang; Ruotao Xu; Le Li; Yue Wang; Jianxin Zhang; Siwei Feng; Peifeng Li; Yihang Lou; Juntao Li

**ID:** 153551 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KXeTOhQPAP>) | [PDF](<https://openreview.net/pdf?id=KXeTOhQPAP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153551>)

_Abstract unavailable from the accessible public sources._

## 3A\-VLA: Abstraction\-Aligned Action Learning for Vision\-Language Agents in 3D Game Worlds

**Authors:** Zheyuan Zhou; Liang Du; Zixun Sun; Xiaoyu Zhou; Ruimin Ye; Qihao Chen; Yinda Chen; Lemiao Qiu

**ID:** 153557 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KWdHsFgYuD>) | [PDF](<https://openreview.net/pdf?id=KWdHsFgYuD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153557>)

_Abstract unavailable from the accessible public sources._

## TKCAM: Text and Keyframe to Camera Trajectory Generation

**Authors:** Haozhe Yang; Zhiyang \(Frank\) Dou; Zekai Gu; Cheng Lin; Wenping Wang; Yuan Liu; Taku Komura

**ID:** 153921\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153921

[Paper](<https://openreview.net/forum?id=He1Jh80Zy2>) | [PDF](<https://openreview.net/pdf?id=He1Jh80Zy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153921>)

_Abstract unavailable from the accessible public sources._

## AirIAD: Agentic Iterative Reasoning for Industrial Anomaly Detection

**Authors:** Huan Yu; TIECHENG ZHANG; Jin Wang; Jingru Yang; Kaixiang Huang; Zhongyang Sun; Guodong Lu; Shengfeng He

**ID:** 153593\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153593

[Paper](<https://openreview.net/forum?id=KGsOIl5BNC>) | [PDF](<https://openreview.net/pdf?id=KGsOIl5BNC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153593>)

_Abstract unavailable from the accessible public sources._

## RAO\-Nav: Probing Omni\-Language Models for Zero\-shot Semantic Audio\-Visual Navigation

**Authors:** Qilang Ye; Meng Liu; Yu Zhou

**ID:** 151487\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151487

[Paper](<https://openreview.net/forum?id=aGH4iWBX36>) | [PDF](<https://openreview.net/pdf?id=aGH4iWBX36>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151487>)

_Abstract unavailable from the accessible public sources._

## Q\-ViK: Question\-Guided Visual KV Cache Eviction for Large Vision\-Language Models

**Authors:** Solhee Hwang; Jangho Kim

**ID:** 148422\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148422

[Paper](<https://openreview.net/forum?id=xvyNCwtt1q>) | [PDF](<https://openreview.net/pdf?id=xvyNCwtt1q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148422>)

_Abstract unavailable from the accessible public sources._

## Complementing DINO Features with Image Structure for Part Discovery

**Authors:** Samyak Rawlekar; Nikhil C Paleti; Amey Gupta; Narendra Ahuja

**ID:** 151156\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151156

[Paper](<https://openreview.net/forum?id=cbLnr5GrNf>) | [PDF](<https://openreview.net/pdf?id=cbLnr5GrNf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151156>)

_Abstract unavailable from the accessible public sources._

## GeoMamba: Geometry\-Aware State Space Modeling for Image Restoration

**Authors:** Dafeng Zhang; Shizhuo Liu

**ID:** 148154\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148154

[Paper](<https://openreview.net/forum?id=ztrNOMAstc>) | [PDF](<https://openreview.net/pdf?id=ztrNOMAstc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148154>)

_Abstract unavailable from the accessible public sources._

## Evaluating Multimodal Narrative Understanding of Popular Hollywood Films

**Authors:** David Bamman; Kent K Chang; Allison Cooper; Juishan Hsu; Reina Kushihashi; Madison Mar; Arnav Podichetty; Rachael G Samberg; Ipek N Sancak; Yuhan Shao

**ID:** 139677\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139677

[Paper](<https://openreview.net/forum?id=Awura1yDmq>) | [PDF](<https://openreview.net/pdf?id=Awura1yDmq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139677>)

_Abstract unavailable from the accessible public sources._

## MM\-OptBench: A Solver\-Grounded Benchmark for Multimodal Optimization Modeling

**Authors:** Zhong Li; Qi Huang; Yuxuan Zhu; Mohammad Mohammadi Amiri; Niki van Stein; Thomas Bäck; Matthijs van Leeuwen; Zaiwen Wen; Lincen Yang

**ID:** 139697\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139697

[Paper](<https://openreview.net/forum?id=A3g2i6LYgQ>) | [PDF](<https://openreview.net/pdf?id=A3g2i6LYgQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139697>)

_Abstract unavailable from the accessible public sources._

## Multi\-view Relational Distillation for Spatial Reasoning with Vision\-Language Models

**Authors:** Kiet Nguyen; Hanbo Shim; Jinwoo Kim; Seunghoon Hong

**ID:** 152091 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VZx7BlptSD>) | [PDF](<https://openreview.net/pdf?id=VZx7BlptSD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152091>)

Vision\-language models \(VLMs\) have achieved strong image and video understanding, yet their visual\-spatial representations remain geometrically fragile, leading to failures in spatial reasoning required for embodied AI, robotics, and autonomous driving\. Existing approaches to geometry grounding either fine\-tune VLMs on spatial question answering, which can perpetuate spurious visual representations, or fuse features from large geometry\-grounded vision models, which substantially increases model size during inference\. Knowledge distillation from geometry\-grounded vision models offers an alternative, but directly matching multi\-view teacher features can disrupt the pretrained alignment between visual and textual representations, degrading object\- and language\-semantic understanding\. We propose Multi\-view relational distillation \(MVRD\), which distills patch\-wise cosine similarities across views instead of the teacher features themselves\. These multi\-view relations encode geometric correspondences sufficient for spatial understanding while leaving the student representation underdetermined, allowing it to remain close to its pretrained vision\-language space\. Across representative VLMs, MVRD improves visual\-spatial reasoning, outperforming supervised fine\-tuning and direct feature distillation while approaching feature\-fusion methods with substantially fewer added parameters and lower latency\. Further analysis shows that MVRD makes visual representations more geometric without breaking vision\-language alignment, and generalizes to 3D scene understanding tasks, including object grounding, dense captioning, and question answering\.

## Event\-Centric Perception in Weak\-Signal Physical Streams with Multimodal LLMs

**Authors:** Chi Xu; Mengdi Jin; Jiaxing Li; William I Atlas; Thor Veen; Edith C Ngai; Jiangchuan Liu

**ID:** 153700 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JQhrfSnBxh>) | [PDF](<https://openreview.net/pdf?id=JQhrfSnBxh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153700>)

Robotic and sensing systems operating in challenging environments often receive weak, noisy, and incomplete data streams, such as imaging sonar in underwater settings or thermal sensing under low visibility\. In these scenarios, useful evidence is sparse over time, and the objective extends beyond frame\-level analysis to reconstructing physically meaningful events\. We study this problem through event\-centric perception, which maps physical sensor streams into structured events with temporal support, spatial context, direction, count, and magnitude\. Frontier multimodal LLMs, such as Qwen3\.5\-Plus and Gemini, have shown promising capability for event\-centric inference under weak and temporally distributed evidence\. However, with direct prompting, weak signals often remain below the models' effective decision boundary, leaving event\-level structure underused\. We address this problem with localized event reasoning, structured event records, and lightweight event\-aligned adaptation\. This moves weak signals from ignored observations into usable event evidence\. In our experiments on a sonar benchmark, the adapted approach improves positive event recall from 0\.041 to 0\.914 and reduces normalized event error from 0\.982 to 0\.334\. Thermal experiments further show that the approach extends to wildlife event reconstruction and temporally grounded occupancy reasoning\. These results support event\-centric perception as a principled framework for physical\-stream intelligence\.

## Vision\-Language Models Should Commit to a Cézannian Specification

**Authors:** Mohammad Hasan

**ID:** 140095 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLEL7ntAeg>) | [PDF](<https://openreview.net/pdf?id=GLEL7ntAeg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140095>)

Structural visual intelligence in vision\-language models cannot be learned through task\-level supervision under current architectures\. Supervision on tasks whose correct answers require structural competence installs shortcut pathways\. These pathways match the answers without building the competence, a pattern identified in the diagnostic literature\. The shortcut pathways suppress the relational processes structural reasoning would require, and scaling the supervision strengthens them instead of inducing the intended capability\. This paper argues for a complementary research program based on architectural principles under which structural properties emerge from the computation, guided by an explicit specification of those properties\. Cézanne's studio investigations provide such a specification of multi\-viewpoint relational synthesis, grounded in predictive processing theory\. The paper advances three prescriptions\. The field should stop treating structural visual capability as a target for task\-level supervision, should invest in architectural commitments that make shortcut pathways impossible by construction, and should develop evaluations that distinguish structural representation from shortcut matching\. The strongest alternative view is that structural competence will emerge from scaling under sufficiently rich objectives\. The mechanistic evidence requires this view to specify how scaling would overcome the shortcut pathway suppression that supervision causes\.

## Spatial\-temporal Attributes Enhanced Prompt Weighting and Fusion for Video Recognition

**Authors:** Weilin Qiu; Kaiyan Cao; Jinhua Ma

**ID:** 153697 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JSGGhTC9BN>) | [PDF](<https://openreview.net/pdf?id=JSGGhTC9BN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153697>)

Adapting large\-scale vision\-language models \(VLMs\) such as CLIP to video understanding has drawn increasing attention\. Prompt tuning offers an efficient and promising way to adapt VLMs to this task\. While existing methods propose to enrich textual information over simple textual templates via large language models \(LLMs\), the generated descriptions are often coarse and may lead to semantic misalignment with the specific  video\. To address this issue, we propose $\\textbf\{S\}$patial\-$\\textbf\{T\}$emporal $\\textbf\{A\}$ttributes enhanced prompt $\\textbf\{W\}$eighting and $\\textbf\{F\}$usion \(ST\-AWF\), a novel parameter\-efficient fine\-tuning framework for various video recognition tasks\. In our method, LLM is leveraged to generate spatial and temporal attributes for each action category, enriching text prompts with informative descriptions\.  To mitigate attribute irrelevance in LLM outputs, we design a vision\-guided prompt weighting mechanism that dynamically evaluates the relevance of each attribute embedding based on its similarity to video features, thereby emphasizing discriminative cues\. Furthermore, a dual\-attention cross\-modal fusion module is proposed to align weighted textual prompts of spatial–temporal attributes with video features for fine\-grained cross\-modal feature enhancement\. Extensive experiments demonstrate that ST\-AWF achieves state\-of\-the\-art performance on multiple video recognition benchmarks, consistently improving both discriminability and generalization ability to unseen classes, while maintaining high efficiency with a small number of trainable parameters\. Code is available at https://anonymous\.4open\.science/r/ST\-AWF\-code/

## EvoGround: Self\-Evolving Video Agents for Video Temporal Grounding

**Authors:** MIN JOON JUNG; Byoung\-Tak Zhang; Lorenzo Torresani

**ID:** 153727 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JDoWHmhvEd>) | [PDF](<https://openreview.net/pdf?id=JDoWHmhvEd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153727>)

Video temporal grounding \(VTG\) takes an untrimmed video and a natural\-language query as input and localizes the temporal moment that best matches the query\. Existing methods rely on large, task\-specific datasets requiring costly manual annotation\. We introduce EvoGround, a framework of two coupled self\-evolving agents, a proposer and a solver, that learn temporal grounding from raw videos without any human\-labeled data\. The proposer generates query\-\-moment pairs from raw videos, while the solver learns to ground them and feeds back signals that improve the proposer in return\. Through this self\-reinforcing reinforcement\-learning loop, the two agents are initialized from the same backbone and mutually improve across iterations\. Trained on 2\.5K unlabeled videos, EvoGround matches or surpasses fully supervised models across multiple VTG benchmarks, while emerging as a state\-of\-the\-art fine\-grained video captioner without manual labels\.

## LookThere\! Sparse Vision by Reinforced Selection

**Authors:** Sreehari Rammohan; Yousef Yassin; Anthony Fuller; Junfeng Wen; Evan Shelhamer; Carl Vondrick

**ID:** 151188 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cJeezfL5As>) | [PDF](<https://openreview.net/pdf?id=cJeezfL5As>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151188>)

_Abstract unavailable from the accessible public sources._

## Attending on Attention \($A^2$\): Smaller Self\-Supervised ViTs Localize Better Than Larger Ones

**Authors:** Sreehari Rammohan; Huy Ha; Carl Vondrick

**ID:** 154201 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FS61bwr6ZM>) | [PDF](<https://openreview.net/pdf?id=FS61bwr6ZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154201>)

_Abstract unavailable from the accessible public sources._

## Locating and Repairing Domain Shift in VLM Trajectory Planning

**Authors:** Zhihong Cui; Hengyu Liu; Michael A\. Riegler; Guandong Xu; Amir Taherkordi; Tor Skeie

**ID:** 156081 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0YmshH9KfL>) | [PDF](<https://openreview.net/pdf?id=0YmshH9KfL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156081>)

Vision\-Language Models \(VLMs\) are increasingly adopted as end\-to\-end driving planners, yet they suffer from cross\-city domain shift\. Existing methods treat this shift as a single quantity addressed by uniform alignment or single\-site editing\. We refute this view on two counts: \*\*\*\(i\) domain shift in VLM trajectory planners is inherently structured across modality and layer, and \(ii\) a locate\-then\-repair recipe matched to this structure outperforms every uniform\-objective baseline\*\*\*\. We analyze domain shift via activation patching and uncover two regularities\. \*\*\(F1\) Modality axis\.\*\* Image and text tokens exhibit distinct shift patterns in each VLM\. \*\*\(F2\) Layer axis\.\*\* The layer\-wise shift partition is architecture\-determined and dataset\-stable\. These findings recast domain shift as a \*\*two\-dimensional tensor\*\* indexed by \*modality\* \(image vs\. text tokens\) and \*layer\*, motivating a simple principle: \*\*\*locate where shift occurs, and repair only there\*\*\*\. We instantiate this principle in \*\*MoLaRx\*\* \(\*\*Mo\*\*dality–\*\*La\*\*yer \*\*R\*\*epair\), a locate\-then\-repair framework\. The Causal Importance Score \(CIS\) estimates the domain shift as a modality–layer tensor and partitions the layers into functional zones\. CIS\-Guided Selective Repair \(CISR\) then applies a matched operator \(Maximum Mean Discrepancy \(MMD\) / low\-rank adaptation \(LoRA\) / freezing\) to repair each zone, with the composition adapting automatically to each architecture\. We evaluate \*\*MoLaRx\*\* on three architecturally distinct VLMs \(LFM2\-VL\-1\.6B, Qwen2\-VL\-2B, and PaliGemma2\-3B\) across two cross\-city benchmarks \(nuScenes and Argoverse 2\)\. MoLaRx attains the lowest cross\-city trajectory\-error gap on every \(VLM, dataset\) cell, while using $50$–$60\\%$ fewer trainable parameters and $8\.4$–$10\.9$ ms lower inference latency\. In contrast, the strongest scalar baseline \(MMD\-only\) collapses on every cell—direct evidence that no scalar objective can repair structured shift\. Code: \[anonymous\.4open\.science/r/MoLaRx\-E3B4\]\(https://anonymous\.4open\.science/r/MoLaRx\-E3B4/\)\.

## DriveSpatial: A Benchmark for Spatiotemporal Intelligence in VLMs for Autonomous Driving

**Authors:** Anh Hao Vo; Khoa Vo; Phu Loc Nguyen; Sieu Tran; Duc Nguyen; Cuong Ngo; Gladys Gawugah; Sreevenkata A Godavarthi; Chase Rainwater; Nghi Bui; Anh Nguyen; Duy M\. H\. Nguyen; Ngan Le

**ID:** 139711\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139711

[Paper](<https://openreview.net/forum?id=92Titnm7WK>) | [PDF](<https://openreview.net/pdf?id=92Titnm7WK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139711>)

Spatiotemporal intelligence in autonomous driving \(AD\) requires an agent to integrate multi\-view observations into a coherent scene representation, maintain object continuity across viewpoints and time, and reason about spatial relations, interactions, and future dynamics\. However, existing AD vision\-language benchmarks largely focus on single\-view, static, ego\-centric, or single\-source question answering, leaving it unclear whether current Vision\-Language Models \(VLMs\) can truly construct and reason over dynamic driving scenes\. We introduce DriveSpatial a benchmark of 15\.6K human\-verified QA pairs across 20 tasks from five large\-scale AD datasets\. DriveSpatial evaluates four abilities: Cognitive Scene Construction, Multi\-view Relational Understanding, Temporal Reasoning, and Generalization\. Unlike prior benchmarks, DriveSpatial is generated from a dynamic multi\-relational scene graph that encodes object states, spatial relations, interactions, camera visibility, and temporal correspondences, enabling QA pairs that enforce genuine cross\-view and spatiotemporal reasoning\. Evaluating 15 representative VLMs reveals a substantial human–model gap: the strongest model trails humans by 28\.4 points, with Cognitive Scene Construction emerging as the key bottleneck\. Further diagnostics show that language\-only prompting is insufficient, while explicit BEV grounding consistently improves performance\. These results suggest that current VLMs lack the scene\-construction ability needed for reliable spatiotemporal driving intelligence\. DriveSpatial and its construction pipeline will be released to support future research\.

## DriveSpatial: A Benchmark for Spatiotemporal Intelligence in VLMs for Autonomous Driving

**Authors:** Anh Hao Vo; Khoa Vo; Phu Loc Nguyen; Sieu Tran; Duc Nguyen; Cuong Ngo; Gladys Gawugah; Sreevenkata A Godavarthi; Chase Rainwater; Nghi Bui; Anh Nguyen; Duy M\. H\. Nguyen; Ngan Le

**ID:** 139711\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139711

[Paper](<https://openreview.net/forum?id=92Titnm7WK>) | [PDF](<https://openreview.net/pdf?id=92Titnm7WK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139711>)

Spatiotemporal intelligence in autonomous driving \(AD\) requires an agent to integrate multi\-view observations into a coherent scene representation, maintain object continuity across viewpoints and time, and reason about spatial relations, interactions, and future dynamics\. However, existing AD vision\-language benchmarks largely focus on single\-view, static, ego\-centric, or single\-source question answering, leaving it unclear whether current Vision\-Language Models \(VLMs\) can truly construct and reason over dynamic driving scenes\. We introduce DriveSpatial a benchmark of 15\.6K human\-verified QA pairs across 20 tasks from five large\-scale AD datasets\. DriveSpatial evaluates four abilities: Cognitive Scene Construction, Multi\-view Relational Understanding, Temporal Reasoning, and Generalization\. Unlike prior benchmarks, DriveSpatial is generated from a dynamic multi\-relational scene graph that encodes object states, spatial relations, interactions, camera visibility, and temporal correspondences, enabling QA pairs that enforce genuine cross\-view and spatiotemporal reasoning\. Evaluating 15 representative VLMs reveals a substantial human–model gap: the strongest model trails humans by 28\.4 points, with Cognitive Scene Construction emerging as the key bottleneck\. Further diagnostics show that language\-only prompting is insufficient, while explicit BEV grounding consistently improves performance\. These results suggest that current VLMs lack the scene\-construction ability needed for reliable spatiotemporal driving intelligence\. DriveSpatial and its construction pipeline will be released to support future research\.

## MUST: Stage\-Adaptive Stability Control for Test\-Time Scaling in Multimodal Reasoning

**Authors:** YunFeng Deng

**ID:** 153464\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153464

[Paper](<https://openreview.net/forum?id=L7uQSgKIXG>) | [PDF](<https://openreview.net/pdf?id=L7uQSgKIXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153464>)

Test\-time scaling \(TTS\) improves reasoning by allocating additional inference compute, but in multimodal large language models \(MLLMs\), more compute is not always reliable\. Longer reasoning may amplify visual misperception, induce answer drift, reinforce majority traps, or turn initially correct predictions into overthought failures\. We propose MUST, a training\-free framework that recasts multimodal TTS as stage\-conditioned stability control\. MUST separates inference into reasoning and verification stages and assigns each stage a different reliability criterion\. During reasoning, Contrastive Answer\-Manifold Stability \(CAMS\) selects answers whose supporting trajectories form compact and separable latent groups\. During verification, Attention\-Free Support\-Chain Stability \(AF\-SCS\) evaluates whether explicit visual evidence and subsequent reasoning form a stable latent support chain, without relying on token\-to\-patch attention maps\. Experiments on multimodal reasoning benchmarks show that MUST improves the accuracy\-compute trade\-off and reduces overthinking\-induced errors\. These results suggest that reliable MLLM test\-time scaling should adaptively control when and how extra compute is trusted, rather than simply increasing inference budget\.

## Beyond SFT\-to\-RL: Pre\-alignment via Black\-box On\-policy Distillation for Multimodal RL

**Authors:** Sudong Wang; Weiquan Huang; Xiaomin Yu; Zuhao Yang; Hehai Lin; Keming Wu; Chaojun Xiao; CHEN CHEN; Wenxuan Wang; Beier Zhu; Yunjian Zhang; Chengwei Qin

**ID:** 153111\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153111

[Paper](<https://openreview.net/forum?id=NrU0jOBYTv>) | [PDF](<https://openreview.net/pdf?id=NrU0jOBYTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153111>)

The standard post\-training recipe for large multimodal models \(LMMs\) applies supervised fine\-tuning \(SFT\) on curated demonstrations followed by reinforcement learning with verifiable rewards \(RLVR\)\. However, SFT introduces distributional drift that neither preserves the model's original capabilities nor faithfully matches the supervision distribution\. This problem is further amplified in multimodal reasoning, where perception errors and reasoning failures follow distinct drift patterns that compound during subsequent RL\. We introduce \\textbf\{PRISM\}, a three\-stage pipeline that mitigates this drift by inserting an explicit distribution\-alignment stage between SFT and RLVR\. Building on the principle of on\-policy distillation \(OPD\), PRISM casts alignment as a black\-box, response\-level adversarial game between the policy and a Mixture\-of\-Experts \(MoE\) discriminator with dedicated perception and reasoning experts, providing disentangled corrective signals that steer the policy toward the supervision distribution without requiring access to teacher logits\. While 1\.26M public demonstrations suffice for broad SFT initialization, distribution alignment demands higher\-fidelity supervision; we therefore curate 113K additional demonstrations from Gemini\~3 Flash, featuring dense visual grounding and step\-by\-step reasoning on the hardest unsolved problems\. Experiments on Qwen3\-VL show that PRISM consistently improves downstream RLVR performance across multiple RL algorithms \(GRPO, DAPO, GSPO\) and diverse multimodal benchmarks, improving average accuracy by \+4\.4 and \+6\.0 points over the SFT$\\rightarrow$RLVR baseline on 4B and 8B, respectively\.

## LoMo: Local Modality Substitution for Deeper Vision\-Language Fusion

**Authors:** Feng Han; Zhixiong Zhang; Zheming Liang; Yibin Wang; Jiaqi Wang

**ID:** 154345\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154345

[Paper](<https://openreview.net/forum?id=EHe0liGkCc>) | [PDF](<https://openreview.net/pdf?id=EHe0liGkCc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154345>)

Vision\-Language Models \(VLMs\) have achieved substantial progress across a wide range of understanding and reasoning tasks, driven by large\-scale image\-text training aimed at multimodal fusion\. Ideally, replacing a textual question with its rendered\-image counterpart should leave model performance essentially unaffected\. In practice, however, such modality substitution induces dramatic performance degradation\. We attribute this carrier sensitivity issue to an inherent bias in current training corpora\. Across prevalent datasets such as image captioning, VQA, OCR, and web\-sourced interleaved data, text and images are typically organized into distinct and asymmetric roles, with text serving as linguistic queries and images as visual references\. Such data bias leads VLMs to exhibit distinct preferences for information acquisition across different modalities\. Consequently, VLMs fail to align representations of  semantically equivalent content across textual and visual carriers, making model reasoning fragile under modality substitution\. To address this, we propose Local Modality Substitution \(LoMo\), a lightweight, architecture\-agnostic data curation paradigm designed to provide supervision for cross\-modal representational invariance between semantically equivalent text and image carriers\. LoMo achieves this by reformulating single\-modality prompts into seamlessly interleaved multimodal sequences\. It dynamically selects target text spans and recasts them as rendered images, thereby preserving the same semantics across "text, visual, text" carriers\. Extensive experiments across 13 diverse multimodal benchmarks demonstrate that LoMo significantly improves overall multimodal reasoning and yields deeper cross\-modal fusion\. Specifically, it delivers consistent gains across foundational models, improving over standard SFT by 2\.67 points on LLaVA\-OneVision\-1\.5\-8B and 2\.82 points on Qwen3\.5\-9B\.

## Hierarchical Adaptive Frame Sampling For Video Understanding

**Authors:** Yuyao Sun; Daiqi Shi; Shuang Li; Liao Zhang; Yang Cai; deqing wang

**ID:** 151004\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151004

[Paper](<https://openreview.net/forum?id=dfK9DJR2XH>) | [PDF](<https://openreview.net/pdf?id=dfK9DJR2XH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151004>)

Due to context\-length constraints, most MLLMs cannot process full\-length videos and therefore rely on sampling a subset of frames as input\. However, existing sampling methods, ranging from uniform sampling to relevance\-based selection, are often driven by a single sampling principle and thus struggle to accommodate the heterogeneous evidential requirements of different queries: some demand a holistic understanding of how the video unfolds over time, while others hinge on fine\-grained events within a short temporal window\. To address this limitation, we propose Hierarchical Adaptive Frame Sampling \(HAS\), a two\-stage frame sampling framework\. In the first stage, Backbone Frame Construction, we apply a Determinantal Point Process \(DPP\) to sample frames that are both query\-relevant and non\-redundant\. These selected frames capture key moments across the video and form the backbone of the sampling set, providing a foundation for subsequent enrichment\. In the second stage, Adaptive Contextual Enrichment, we analyze the temporal distribution of the backbone frames to infer the query type and adaptively allocate the remaining frame budget between Local and Global Context\. The Local Context enriches the backbone with fine\-grained temporal dynamics and short\-range causal relations, whereas the Global Context connects temporally isolated evidence and provides a holistic view of the entire video to support global understanding\. Through such a hierarchical two\-stage process, HAS effectively addresses diverse query requirements\. Incorporated into three leading MLLMs, it demonstrates consistently superior performance across the Video\-MME, LongVideoBench, and MLVU benchmarks\. We have released our code\.

## GLINT: Sparsely Gated Vision\-Language Alignment for Fine\-Grained Radiology Representations

**Authors:** Jonggwon Park; Seongeun Lee; Junhyun Park; Hannah Yun; Hyunwoong Kim; Sohyun Jeong; Hyewon Kang; Byungmu Yoon; Kyoyun Choi

**ID:** 154081\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154081

[Paper](<https://openreview.net/forum?id=GLHgQkefOp>) | [PDF](<https://openreview.net/pdf?id=GLHgQkefOp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154081>)

Vision\-language models \(VLMs\) for radiology have emerged as a scalable paradigm by leveraging image\-report pairs naturally produced in clinical workflows\. However, this pairing reveals a mismatch in scale: each finding occupies only a small region of the image, yet supervision is provided only at the global image\-report level\. This poses a central challenge: prior approaches spread weight densely across all patches rather than concentrating on the sparse subset relevant to a given query\. To address this, we present GLINT \(Gated Language\-Image alignmeNT\), a framework that explicitly models this sparse correspondence\. On the alignment side, we introduce Sparsely Gated Alignment, a novel architecture in which a sigmoid gate over a separate gate embedding space activates only the patches relevant to each textual query, enforcing explicit sparsity\. On the representation side, we add Dense Feature Regularization, which anchors the trainable encoder's intermediate features to a frozen self\-supervised learning \(SSL\) teacher, preserving the fine\-grained patch features that the gate relies on\. The same recipe applies to both 2D chest X\-ray \(CXR\) and 3D chest computed tomography \(CT\), built with DINOv3 and V\-JEPA 2\.1, respectively\. GLINT enables zero\-shot classification, grounding, and segmentation from free\-text queries, and to our knowledge is the first to demonstrate zero\-shot segmentation on 3D CT volumes without mask supervision\. Notably, the most pronounced gains arise on zero\-shot grounding and segmentation, where sparse, query\-specific localization is required, consistent with our design intent\. In downstream evaluation, GLINT outperforms both SSL encoders and medical VLMs on classification, report generation, and segmentation\.

## TIGER: Bridging the Multimodal Reasoning\-Access Gap via Modality Counterfactuals

**Authors:** Gregory Kang Ruey Lau; Huynh Minh Nguyen; Bryan Kian Hsiang Low

**ID:** 152182\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152182

[Paper](<https://openreview.net/forum?id=Ux4SAiuLgN>) | [PDF](<https://openreview.net/pdf?id=Ux4SAiuLgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152182>)

Multimodal Large Language Models \(MLLMs\) can exhibit strong text\-based reasoning yet fail to apply the same capabilities to semantically equivalent visual inputs\. We study this failure mode in a controlled setting by rendering text\-only reasoning problems as images, preserving semantic content while changing only the input modality\. Across multiple MLLM families, models solve the same problems substantially better from text than from images\. We characterize this discrepancy as a reasoning\-access gap, where models may correctly perceive visual content but still fail to route that content into the latent reasoning machinery used for text\-based tasks\. To bridge this gap, we propose TIGER \(Text\-to\-Image Gap\-targeted Training for Enhanced Reasoning\), a framework that repurposes text\-only reasoning corpora into effective multimodal training data\. By mining "modality counterfactuals", instances where a model succeeds on a text problem but fails on its semantically\-equivalent rendered image, TIGER provides targeted supervision for reasoning\-access failures without requiring manually curated multimodal datasets\. We implement TIGER using image\-conditioned Group Relative Policy Optimization \(GRPO\), along with SFT and DPO variants, and show how it consistently narrows the modality gap and yields generalized visual reasoning performance gains in multimodal reasoning benchmarks such as MathVerse and EMMA\. We show that Reinforcement Learning with Verifiable Reward\-based models still exhibit modality\-dependent reasoning gaps, and that our training recipe can further reduce these gaps\. Further analysis using reasoning\-subspace activation and activation patching shows that TIGER enables visual representations that better activate reasoning\-relevant latent subspaces of the language backbone\. Our results suggest that advancing multimodal intelligence requires moving beyond perceptual alignment toward explicit visual access to existing reasoning machinery\.

## Two Drifts, One Principle: Conflict\-Aware Spectral Consolidation for Multimodal Continual Learning

**Authors:** Haiyi Zhang; Qianyi Cai; Hanqing Wang; Zilin Wang; Xinyue Di; Yijie Xu; Yili Wang; Tianfu Wang; Yifan Han; Hui Xiong

**ID:** 151270\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151270

[Paper](<https://openreview.net/forum?id=bdROoNCzjt>) | [PDF](<https://openreview.net/pdf?id=bdROoNCzjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151270>)

Multimodal continual learning requires MLLMs to acquire new domains and abilities sequentially while retaining previous capabilities\. MoE\-based methods preserve task\-specific knowledge, but inference relies on reliable routing\. We instead study unified continual multimodal consolidation, which forms one shared model from sequential LoRA updates and projector shifts\. LoRA merging naturally supports language\-side consolidation, but extending it to MLLMs raises two challenges\. First, sequential LoRA updates may interfere and overwrite directions important to earlier tasks\. Second, projector mismatch may make the consolidated LoRA update incompatible with the final visual\-language alignment\. To address these challenges, we propose \*\*CASC\*\* \(\*\*C\*\*onflict\-\*\*A\*\*ware \*\*S\*\*pectral \*\*C\*\*onsolidation\), a method that jointly consolidates LoRA and projector updates\. CASC maintains fixed\-rank spectral banks and uses a shared protected subspace memory rule to preserve dominant historical directions while incorporating compatible new updates under fixed rank budgets, yielding a single model without replay data or inference time routing\. Both theoretical analysis and experimental results demonstrate the effectiveness of CASC in addressing multimodal continual learning\.

## CofactVLA: Deconfounding Vision\-Language\-Action Models via Counterfactual Intervention

**Authors:** Yan Zhang; Yinan Wu; Haoran Duan; Jungong Han

**ID:** 153110 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ns2HaAwoQP>) | [PDF](<https://openreview.net/pdf?id=Ns2HaAwoQP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153110>)

Vision\-Language\-Action \(VLA\) models have driven significant progress in robotic manipulation, yet they fundamentally struggle with the \`\`vision\-override'' phenomenon\. Driven by the severe modality imbalance between dense visual streams and sparse linguistic instructions, VLAs frequently fall prey to causal confusion\. Instead of treating language as the primary causal driver, the policy entirely bypasses the original instruction by overfitting to spurious visual confounders, such as prominent objects or familiar layouts\. To systematically alleviate this bias, we formalize the process of action generation as a Dual\-path Deconfounding Graph \(DDG\) and propose CofactVLA, a novel causal intervention framework\. By dynamically constructing a language\-masked counterfactual branch within a single forward pass, CofactVLA isolates and neutralizes visual confounders through two synergistic mechanisms\. First, Action\-Level Orthogonal Projection Guidance \(OPG\) geometrically projects the factual velocity field away from the counterfactual visual bias during continuous flow matching, extracting the pure semantic intent\. Second, Feature\-Level Counterfactual Covariance Reduction \(CCR\) mathematically deconfounds latent representations by penalizing the positive eigenspace of the covariance difference, explicitly suppressing dominant visual shortcuts while preserving the causal language intent\. Extensive experiments demonstrate that CofactVLA establishes a new state\-of\-the\-art across diverse simulation benchmarks\. Beyond simulation, real\-world robot experiments demonstrate the causal efficacy of our method in bridging the generalization gap, yielding a 52\.3\\% absolute success rate gain under out\-of\-distribution scenarios\.

## ViewSAM: Learning View\-aware Semantics for Weakly Supervised Cross\-view Referring Multi\-Object Tracking

**Authors:** Jiawei Ge; Xintian Zhang; Jiuxin Cao; Bo Liu; Fabian Deuser; Chang Liu; Gong Wenkang; Siyou Li; Juexi Shao; Wenqing Wu; Chen Feng; Ioannis Patras

**ID:** 154079 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GMDecyfsDV>) | [PDF](<https://openreview.net/pdf?id=GMDecyfsDV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154079>)

Cross\-view Referring Multi\-Object Tracking \(CRMOT\) aims to track multiple objects specified by natural language across multiple camera views, with globally consistent identities\. Despite recent progress, existing methods rely heavily on costly frame\-level spatial annotations and cross\-view identity supervision\. To reduce such reliance, we explore CRMOT under weak supervision by leveraging the capabilities of foundation models\. Our empirical study shows that directly applying foundation models such as SAM2 and SAM3, even with task\-specific modifications, fails to accurately understand referring expressions and maintain consistent identities across views\. Yet, such models remain effective at producing reliable object tracklets that can serve as supervision signal\. We therefore repurpose foundation models as pseudo\-label generators and propose a two\-stage framework for weakly supervised CRMOT, using only object category labels as coarse\-grained supervision\. In the first stage, we design an Affinity\-guided Cross\-view Re\-prompting strategy to refine and associate SAM3\-generated tracklets across cameras, producing reliable cross\-view pseudo labels for subsequent training\. In the second stage, we introduce ViewSAM, a CRMOT model built upon SAM2 that explicitly models view\-aware cross\-modal semantics\. By formulating view\-induced variations as learnable conditions, ViewSAM bridges the gap between view\-variant visual observations and view\-invariant textual expressions, enabling robust cross\-view referring tracking with only approximately 10% additional parameters\. Extensive experiments demonstrate that ViewSAM achieves SOTA performance under weak supervision and remains competitive with fully supervised methods\.

## Words Before Pixels: Selective Modality Routing for Vision\-Language Model Unlearning

**Authors:** Laura Yao; Haochen Zhang; Jinhao Duan; Sijia Liu; Tianlong Chen

**ID:** 152527 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=STADZeCiVj>) | [PDF](<https://openreview.net/pdf?id=STADZeCiVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152527>)

Vision\-language model \(VLM\) unlearning is often treated as an objective\-design problem: given multimodal forget data, the goal is to optimize a loss that removes undesirable behavior while preserving retained capabilities\. We argue that this view overlooks an equally important data\-centric question: how should each forget example be represented before optimization? Existing methods typically keep image\-conditioned failures in their original image\-text form, implicitly assuming that pixels are the right route for unlearning whenever pixels appear in the input\. We challenge this assumption by constructing modality\-decomposed versions of VLM benchmarks, enabling controlled comparisons among image\-only, text\-only, and multimodal representations of the same examples\. Our modality\-mixing experiments show that, for many examples, textual renderings carry the actionable forget signal more directly than the image alone, while purely text\-only unlearning can still weaken visual grounding when the target behavior depends on visual evidence\. Motivated by this trade\-off, we introduce ModRoute, a gradient\-guided per\-sample modality routing strategy that selectively converts high visual\-pressure examples to text\-only form while keeping the remaining examples multimodal\. Notably, on VLGuard with LLaVA\-1\.5\-7B, ModRoute has the strongest composite unlearning\-\-utility score of $0\.847$ at $\\gamma=0\.5$, a $2\.5$% improvement over the best random\-switching score and $\\geq46$% better than pure multimodal or text unlearning\. Overall, our results show that effective VLM unlearning depends not only on the objective, but also on the composition and per\-sample modality routing of the unlearning data\.

## Thinking with Images as Continuous Policy: Numerical Visual Chain\-of\-Thought

**Authors:** Kesen Zhao; Beier Zhu; Junbao Zhou; Xingyu Zhu; Zhongqi Yue; Hanwang Zhang

**ID:** 150085 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kqCpiR360C>) | [PDF](<https://openreview.net/pdf?id=kqCpiR360C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150085>)

Recent multimodal large language models \(MLLMs\) increasingly rely on visual chain\-of\-thought to perform region\-grounded reasoning over images\. However, existing approaches ground regions via either textified coordinates—causing modality mismatch and semantic fragmentation—or fixed\-granularity patches that both limit precise region selection and often require non\-trivial architectural changes\. In this paper, we propose Numerical Visual Chain\-of\-Thought \(NV\-CoT\), a framework that enables MLLMs to reason over images using continuous numerical coordinates\. NV\-CoT expands the MLLM action space from discrete vocabulary tokens to a continuous Euclidean space, allowing models to directly generate bounding\-box coordinates as actions with only minimal architectural modification\. The framework supports both supervised fine\-tuning and reinforcement learning\. In particular, we replace categorical token policies with a Gaussian \(or Laplace\) policy over coordinates and introduce stochasticity via reparameterized sampling, making NV\-CoT fully compatible with GRPO\-style policy optimization\. Extensive experiments on three benchmarks against eight representative visual reasoning baselines demonstrate that NV\-CoT significantly improves localization precision and final answer accuracy, while also accelerating training convergence, validating the effectiveness of continuous\-action visual reasoning in MLLMs\. The code is provided in the Supplementary Materials\.

## BlendCast: Teaching Vision\-Language Model to Anticipate Member Skill in Weather Ensembles

**Authors:** Tao Han; Fenghua Ling; Dazhao Du; Haoxi Li; Zhibin Wen; Guangtao Zhang; Song Guo; LEI BAI

**ID:** 149073 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t52ZKfBzJk>) | [PDF](<https://openreview.net/pdf?id=t52ZKfBzJk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149073>)

AI weather models are fast and skillful, yet their errors are strongly conditional because the best member changes with lead time, variable, initialization state, and atmospheric regime\. Operational deterministic multi\-model forecasting therefore requires more than averaging strong forecasters\. It requires anticipating which member deserves trust before future analyses exist\. BlendCast turns this anticipation problem into a vision\-language forecasting task\. Given meteorological maps and structured ensemble diagnostics, the model reads the current weather situation, reasons about prospective member reliability, and converts that judgment into deterministic per\-variable ensemble weights\. To teach this behavior, BlendCast first gives the model demonstrations of what member\-skill reasoning and weight decisions should look like, then refines the resulting policy with multi\-variable reinforcement learning so that its own analyses are rewarded when they lead to better, physically consistent forecasts\. On held\-out 2025 forecasts, BlendCast reduces WRMSE by 2\.6\\% over equal weighting and by 2\.0% over conventional ensemble post\-processing, closing 63\.2% of the gap to oracle blending\. These results show that, with multimodal weather evidence and reward\-aligned training, VLMs can act as real\-time forecasters of forecasters for deterministic AI weather ensembles\. Project and demo:https://anonymous\.4open\.science/status/BlendCast\-2567

## From Views to Worlds: Active Exploration over 3D Worlds for Vision\-Language Models

**Authors:** Qijian Tian; Jiayu Ying; Ke Fan; Lizhuang Ma; Xin Tan

**ID:** 149559 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pCouEwaa1S>) | [PDF](<https://openreview.net/pdf?id=pCouEwaa1S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149559>)

Vision\-language models \(VLMs\) have achieved remarkable progress in 2D visual understanding tasks, yet the passive view\-centric perception paradigm limits their capacity for 3D spatial reasoning\. Such reasoning often requires actively acquiring spatial evidence beyond the currently visible views, such as camera poses and cross\-view spatial relationships, to infer 3D relationships that are not explicitly represented in 2D images\. However, existing methods either lack active exploration or merely provide additional views during inference, without explicitly acquiring such spatial evidence beyond 2D images\. In this paper, we propose View\-to\-World \(V2W\), an active exploration framework that enables VLMs to actively explore 3D worlds and lifts VLMs from passive view\-centric perception to active world\-centric spatial reasoning\. Given a spatial reasoning task with multi\-view images, V2W first reconstructs an explicit 3D world with geometry, camera poses, and language\-grounded semantics, and exposes it to VLMs through visual and linguistic interfaces\. Through multi\-turn interaction with these interfaces, VLMs iteratively acquire spatial evidence from the constructed 3D world, enabling active world\-centric spatial reasoning\. V2W can be integrated with existing VLMs in a training\-free manner and can be further enhanced by optimizing the exploration policy via reinforcement learning\. Experiments on spatial mental modeling benchmarks demonstrate that V2W substantially improves VLM baselines in the training\-free setting and achieves state\-of\-the\-art performance with the learned exploration policy, highlighting the importance of active exploration for spatial intelligence\. The code will be available upon acceptance\.

## MARS: Harmonizing Multimodal Convergence via Adaptive Rank Search

**Authors:** Minkyoung Cho; Insu Jang; Shuowei Jin; Zesen Zhao; Adityan Jothi; Ethem F Can; Min\-Hung Chen; Zhuoqing Morley Mao

**ID:** 148621 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wO9qWwm2K2>) | [PDF](<https://openreview.net/pdf?id=wO9qWwm2K2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148621>)

Fine\-tuning Vision Language Models \(VLMs\) with parameter\-efficient methods like Low\-Rank Adaptation \(LoRA\) is crucial for task adaptation\. However, imbalanced training dynamics across modalities often lead to suboptimal accuracy due to negative interference, a challenge typically addressed with inefficient heuristic methods such as manually tuning separate learning rates\.    To overcome this, we introduce \*\*MARS\*\* \(\*\*M\*\*ultimodal \*\*A\*\*daptive \*\*R\*\*ank \*\*S\*\*earch\), an approach to discover optimal rank pairs that balance training dynamics while maximizing performance\.   Our key innovation, a proposed framework of dual scaling laws, enables this search:\~one law models module\-specific convergence time to prune the search space to candidates with aligned dynamics, while the other predicts final task performance to select the optimal pair from the pruned set\. By re\-purposing the LoRA rank as a controller for modality\-specific convergence speed, MARS outperforms baseline methods and provides a robust, automated strategy for optimizing VLM fine\-tuning\.

## Pathways of Visual Information Flow in Vision\-Language Models

**Authors:** Israfel Salazar; Stella Christina Frank; Dan Oneata; Desmond Elliott; Constanza Fierro

**ID:** 153514 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KmqJXqbsh6>) | [PDF](<https://openreview.net/pdf?id=KmqJXqbsh6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153514>)

_Abstract unavailable from the accessible public sources._

## OneCanvas: 3D Scene Understanding via Panoramic Reprojection

**Authors:** Bartłomiej Baranowski; Dave Chen; Matthias Niessner

**ID:** 148266 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z9GVQGjnKg>) | [PDF](<https://openreview.net/pdf?id=z9GVQGjnKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148266>)

_Abstract unavailable from the accessible public sources._

## V\-LUMEN: Visual Lookup Memory for Embedding Scaling in Vision\-Language Models

**Authors:** Miso Choi; Daekeun Kim; Eunji Kim; Jungbeom Lee

**ID:** 154969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9ZQmXxQVG5>) | [PDF](<https://openreview.net/pdf?id=9ZQmXxQVG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154969>)

Embedding scaling has recently emerged as a promising direction for increasing the capacity of language models through embedding\-level representations, rather than solely expanding transformer depth or width\. However, existing embedding scaling methods are primarily designed for discrete text tokens, leaving it unclear whether similar mechanisms can be extended to vision\-language models, where visual representations are continuous, high\-dimensional, and spatially structured\. In this paper, we introduce V\-LUMEN, a visual lookup memory framework for embedding\-level scaling in vision\-language models\. V\-LUMEN augments visual\-language representations with reusable visual embeddings retrieved from an external memory indexed by discretized visual patterns, thereby expanding accessible representational capacity without directly increasing the dense computation of the backbone model\. To address the unique challenges of visual representations, V\-LUMEN introduces spatial aggregation for constructing structured visual memory keys and text\-conditioned hashing for retrieving task\-relevant visual memories based on the input query\. Together, these components enable memory retrieval that is both spatially aware and instruction\-conditioned\. Experiments across diverse reasoning\-intensive multimodal benchmarks show that V\-LUMEN effectively augments vision\-language models through external visual memory\. Without backbone adaptation, V\-LUMEN substantially improves the vanilla Qwen3\-VL\-2B\-Instruct model, and further achieves competitive or better performance against parameter\-matched MoE and LoRA baselines, demonstrating the potential of visual embedding scaling as an alternative scaling axis for vision\-language models\.

## WorldVLN: Autoregressive World Action Model for Aerial Vision\-Language Navigation

**Authors:** Baining Zhao; jiacheng xu; Weicheng Feng; Xin Zhang; Zhaolu Wang; Haoyang Wang; Shilong Ji; Ziyou Wang; Jianjie Fang; Zhiheng Zheng; Weichen Zhang; Yu Shang; Wei Wu; Chen Gao; Xinlei Chen; Yong Li

**ID:** 150851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=etFmM8ijdJ>) | [PDF](<https://openreview.net/pdf?id=etFmM8ijdJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150851>)

Aerial vision\-language navigation requires agents to follow natural\-language instructions through closed\-loop perception and action in 3D environments\. We argue that aerial VLN can be formulated as a prediction\-driven world\-action problem: the agent should anticipate latent world evolution and act according to the predicted consequences\. To this end, we propose WorldVLN, the first autoregressive world action model for aerial VLN\. Unlike full\-sequence video\-generation world models that generate an entire visual clip, WorldVLN adapts a latent autoregressive video backbone to predict short\-horizon world\-state transitions and directly decodes them into executable waypoint actions\. After each action segment is executed, newly received observations are encoded back into the autoregressive context, enabling closed\-loop world\-action prediction\. We further introduce a two\-stage training framework that first grounds the video prior in instruction\-conditioned navigation dynamics and then develops Action\-aware GRPO, the first reinforcement learning method tailored to autoregressive WAMs, to optimize waypoint decisions through their downstream rollout consequences\. On public outdoor and indoor benchmarks, WorldVLN consistently outperforms existing Vision\-Language\-Action baselines with $12\\%\+$ success\-rate gains and larger advantages on challenging cases\. It further transfers zero\-shot to real drone deployment, suggesting that the proposed WorldVLN offers a promising route for spatial action tasks\. Demos and code are available at \\url\{https://worldvln\.com\} \(anonymous\)\.

## Look Before You Reason: Implicit Visual Thinking for Efficient Multimodal Reasoning

**Authors:** Zerui Chen; Changrui Chen; Fei Ni; Jiankang Deng

**ID:** 149054 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tDZnYu9iz9>) | [PDF](<https://openreview.net/pdf?id=tDZnYu9iz9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149054>)

Vision\-language models \(VLMs\) have advanced rapidly in multimodal reasoning, yet they remain limited on tasks requiring fine\-grained understanding of small or easily overlooked image regions\. Recent \*thinking with images\* approaches mitigate this limitation by allowing models to inspect images through operations such as zooming, cropping, or code execution\. While effective, their multi\-turn interactions with VLMs introduce redundant token computation and slow inference, and separate region inspection from the reasoning step that depends on it\. To address these issues, we propose \*\*Lo\*\*ok Before You \*\*Re\*\*ason \(LoRe\), an implicit visual thinking framework for efficient visual reasoning within a single\-turn VLM interaction\. Given an image and a question, LoRe predicts the most relevant image region, aligns it with the corresponding image patch features, and strengthens the associated key\-value \(KV\) cache entries, enabling subsequent decoding to directly exploit the selected visual cues without additional visual inputs or explicit tool calls\. We further employ reinforcement learning to guide the VLM toward identifying informative image regions and leveraging them during reasoning\. To support fine\-grained evaluation of multimodal reasoning, we introduce COCO\-ObjQA, a large\-scale benchmark for object\-centric multimodal reasoning\. Experiments on three challenging multimodal benchmarks demonstrate that LoRe consistently improves VLM reasoning performance with low additional inference overhead\.

## NeuroNTP \- A Generalizable Multimodal Foundation Model for Epilepsy

**Authors:** József Kovács; Amadeus Hauser; Gudrun Gröppel; Wolfgang Narzt; Philipp Seidl

**ID:** 149129 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=seM8LkgKy6>) | [PDF](<https://openreview.net/pdf?id=seM8LkgKy6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149129>)

Epilepsy affects approximately $1$% of the global population, where seizure detection and reliable forecasting are critical for patient safety and quality of life\. While emerging foundation models increasingly recast EEG analysis as a language modeling task, most remain confined to single\-modality inputs and narrow domain generalization\. In this work, we present NeuroNTP, a modular multimodal foundation model built on an xLSTM backbone and pretrained on one of the largest retrospective epilepsy datasets ever collected, comprising $150,000$ hours of neural \(EEG\) and physiological \(ECG, SpO$\_2$\) signals paired with rich clinical text\. NeuroNTP employs a flexible, montage\-geometry grounded tokenizer and optimizes a composite objective, synergizing causal next\-token prediction with seizure\-specific auxiliary tasks to enable unified sequence modeling across heterogeneous modalities\. This approach allows the model to capture long\-range temporal dependencies and cross\-modal interactions that unimodal baselines ignore\. In extensive experiments, we show that NeuroNTP outperforms supervised baselines by a substantial margin on held\-out clinical cohorts\. Furthermore, the model generalizes to public EEG benchmarks such as CHB\-MIT and Siena Scalp EEG, achieving state\-of\-the\-art performance under standard evaluation settings\. We release code and model weights to facilitate further research\.

## CTM\-AI: A Blueprint for General AI Inspired by a Model of Consciousness

**Authors:** Haofei Yu; Yining Zhao; Lenore Blum; Manuel Blum; Paul Liang

**ID:** 148258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zC3DNpexKf>) | [PDF](<https://openreview.net/pdf?id=zC3DNpexKf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148258>)

Despite remarkable advances, today's AI systems remain narrow in scope, falling short of the flexible, adaptive, and multisensory intelligence that characterizes human capabilities\. This gap has fueled longstanding debates about whether AI might one day achieve human\-like generality or even consciousness, and whether theories of consciousness can inspire new architectures for AI\. This paper presents an early blueprint for implementing a general AI system, CTM\-AI, combining the Conscious Turing Machine \(CTM\), a formal machine model of consciousness, with today's foundation models\. CTM\-AI contains an enormous number of powerful processors ranging from specialized experts \(e\.g\., vision\-language models and APIs\) to unspecialized general\-purpose learners poised to develop their own expertise\.  Crucially, for whatever problem must be dealt with, information from many processors is selected, integrated, and exchanged appropriately to solve the task\.CTM\-AI achieves state\-of\-the\-art accuracy on MUStARD \(72\.28\) and UR\-FUNNY \(72\.13\), outperforming multimodal and multi\-agent frameworks\. On tool\-using and agentic tasks, CTM\-AI achieves 10\+ points of improvement on StableToolBench and WebArena\-Lite\. Overall, CTM\-AI offers a principled, testable blueprint for general AI inspired by a model of consciousness\.

## TwinFlux: One\-Step Discrete\-Continuous Flow for End\-to\-End Autonomous Driving

**Authors:** 子明 朱; Yu Zhu; Qin Guo; Yujia Zhang; Zheng Shen

**ID:** 155650 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=41ua72BZf8>) | [PDF](<https://openreview.net/pdf?id=41ua72BZf8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155650>)

End\-to\-end autonomous driving planning requires trajectories that are multimodal, scene\-compliant, and efficient to generate\. Deterministic regression is fast but often collapses to a single future, while trajectory\-vocabulary methods depend on predefined candidate coverage and iterative generative planners incur multi\-step inference cost\. We propose TwinFlux, a one\-step discrete\-continuous trajectory generation framework based on SplitMeanFlow\. TwinFlux starts from data\-driven trajectory prototypes and refines them through parallel heatmap and offset branches\. The heatmap branch provides topology\-aware coarse localization on a BEV grid, while the offset branch predicts grid\-relative geometric refinement\. A differentiable trajectory decoupling\-and\-reconstruction module connects this representation with physical trajectories\. During training, TwinFlux enforces piecewise displacement consistency in reconstructed trajectory space, aligning direct one\-step prediction with accumulated sub\-interval evolution without Jacobian\-vector\-product computation or inference overhead\. Experiments on NAVSIMv1 and NAVSIMv2 show that TwinFlux outperforms recent end\-to\-end planning baselines while maintaining real\-time inference\.

## M\*: A Modular, Extensible, Serving System for Multimodal Models

**Authors:** Atindra Jha; Naomi Sagan; Keisuke Kamahori; Irmak Sivgin; Rohan Sanda; Steven Gao; Mark Horowitz; Luke Zettlemoyer; Olivia Hsu; Jure Leskovec; Stephanie Wang; Baris Kasikci

**ID:** 148420 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xwpS322agK>) | [PDF](<https://openreview.net/pdf?id=xwpS322agK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148420>)

We are entering a new era of \*composite model architectures\* that integrate diverse components such as vision encoders, language backbones, diffusion and flow heads, audio codecs, action generators, and world\-model predictors\. Such architectures underpin a broad class of multimodal models, including unified multimodal models, omni models, speech\-language models, vision\-language\-action policies, and world models\. However, existing model serving frameworks were built on narrow assumptions about model structure, making them ill\-suited to accommodate this new architectural diversity\. Here we present M\*, a universal serving system for efficient serving of composite AI models\. M\* represents models as dataflow graphs, processing requests spanning diverse modalities and tasks as traversals over these graphs\. The core insight is a modular abstraction that supports arbitrary composition of model components, flexible placement onto a physical cluster, and model\-agnostic optimizations within a distributed runtime\. We call this abstraction the \*Walk Graph\* and show how it can concisely capture composite models from a broad range of families\. We instantiate M\* on representative models and find that it achieves, on average, 30\\% lower end\-to\-end latency than vLLM\-Omni for text\-to\-image workloads on BAGEL, while delivering a lower real\-time factor and higher throughput \- by up to 15\\% \- for text\-to\-speech workloads on Qwen3\-Omni\. M\* also outperforms the V\-JEPA 2\-AC rollout baseline for robotic planning by up to $12\.5\\times$\. Thus, our work paves the road towards more efficient serving of complex models with minimal developer effort\.

## HyperTransport: Amortized Conditioning of T2I Generative Models

**Authors:** Valentino Maiorca; Eleonora Gualdoni; Xavier Suau; Marco Cuturi; Luca Zappella; Pau Rodriguez

**ID:** 152624 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rhug0gm51O>) | [PDF](<https://openreview.net/pdf?id=Rhug0gm51O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152624>)

As foundation models grow in capability, the ability to efficiently and reliably control their behavior becomes critical\. Fine\-tuning these models can be costly, and while prompting can be practical for controllability, it remains fragile due to models' high sensitivity to exact prompt wording and structure\. This brittleness has driven interest in activation steering techniques that offer more stable and predictable control over model behavior\. However, existing activation steering methods require per\-concept optimization, which makes them ill\-suited to deployment scenarios where the concept set is large, evolving, or only specified at request time: each new concept incurs at least minutes of optimization on the target model\. We propose HyperTransport, a hypernetwork framework that amortizes this cost by mapping embeddings from a pretrained encoder \(CLIP in our instantiation\) directly to intervention parameters, trained end\-to\-end using an optimal transport loss\. Once trained, HyperTransport produces each new intervention in a single hypernetwork forward pass, 3600–7000x faster than per\-concept fitting\. On concepts unseen during training, it matches the strongest per\-concept baselines at inducing the target concept\. By decoupling concept representation from intervention prediction, HyperTransport combines three capabilities that no existing approach offers as a set: amortized steering for open\-ended concept sets, continuous interpretable strength control, and cross\-modal conditioning where reference images can directly steer text\-based generation\. We validate HyperTransport on DMD2 and Nitro\-1\-PixArt across 167 held\-out test concepts via CLIP\-based metrics, a VLM\-as\-a\-judge evaluation, and a user study\. In pairwise comparisons, both human and VLM judges prefer HyperTransport over prompting \~2x as often\.

## OT\-Robust3DVLA: A Wasserstein Barycenter is the Right Inductive Bias for Robust Multi\-View 3D Vision\-Language\-Action Policies

**Authors:** Pawan Kumar

**ID:** 150253 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jZB1x1CTzW>) | [PDF](<https://openreview.net/pdf?id=jZB1x1CTzW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150253>)

Multi\-view 3D vision\-language\-action \(VLA\) policies are brittle to small sensor perturbations: depth jitter, partial occlusion, calibration drift and per\-view dropout can move the predicted action chunk by far more than the perturbation itself\. We trace the brittleness to the \*fusion stage\*: concatenating per\-view tokens lets a small geometric shift flip arbitrary token indices, turning a continuous\-mass\-transport problem into a discrete indexing problem\. We propose \*\*a single substitution\*\*: replace concat\-then\-attention fusion with a \*differentiable Wasserstein barycentric tokenizer\* that fuses $K$ view measures into $M$ barycentric tokens by transport\. We prove a chain of Lipschitz\-style stability bounds that hold conditional on a declared OT perturbation set, calibrated Lipschitz constants, and bounded Sinkhorn\-solver residuals\. Empirically, the barycenter is the single dominant mechanism behind the gain: \(i\) the proposed model has the lowest mean clean $\\ell\_2$ on synthetic, LIBERO, RLBench and CALVIN ABC→D \(3\-of\-4 with non\-overlapping 95% CIs\); \(ii\) a controlled ablation on synthetic regresses by $46\\times$ on the corruption\-stability metric when the barycenter is removed and by $&lt;1\.5\\times$ when any other component is; \(iii\) the same mechanism transfers to LIBERO with a $\+37\\%$ clean $\\ell\_2$ regression and $\+62\\%$ action\-OT regression on real data; \(iv\) in synthetic closed\-loop the concat\-fusion baseline collapses from 85% clean to 0% under per\-view dropout while the barycenter keeps a 92% worst\-case across all five conditions \(3 seeds, narrowest CI of all four methods\)\.

## Reasoning\-based Spatial Prior \(RSP\): Learning Spatial Priors from Multimodal LLMs for Object Detection

**Authors:** Cagri Gungor; Qingshuang Chen; Hongda Mao; Chi Zhang; Yelin Kim

**ID:** 154145 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fv4YeGg2aV>) | [PDF](<https://openreview.net/pdf?id=Fv4YeGg2aV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154145>)

Grounding natural language queries to target objects in images requires both high\-level reasoning about intentions and precise spatial localization\. Multimodal large language models \(MLLMs\) excel at reasoning about which object is desired given an implicit intention query but turning this understanding into precise bounding box predictions remains challenging\. Conversely, specialized detectors such as GroundingDINO offer robust localization capabilities but lack the inherent capacity to understand implicit intentions\. Existing hybrid methods couple these components only at the semantic level, such as by passing object names or a single global token to the detector, thereby discarding the rich, dense spatial signals encoded in MLLM attention maps\. We propose Reasoning\-based Spatial Prior \(RSP\), a reasoning\-based detection framework that converts the MLLM’s internal attention into a learnable spatial prior and injects it directly into the detector\. Concretely, we learn input\-adaptive gating over attention heads, supervise the fused spatial prior with a SoftIoU localization loss, and integrate it into GroundingDINO via a prior\-guided deformable fusion module that biases sampling toward regions highlighted by the reasoning process\. Our method consistently outperforms strong MLLM\-only, detector\-only, and hybrid baselines on the EgoIntention and RIO benchmarks, achieving state\-of\-the\-art performance with substantial gains across both frequent and uncommon categories\.

## Safe in Its Own Words: Self\-Guided Safety Alignment for  Multimodal Reasoning Models

**Authors:** Adeel Yousaf; Souradip Chakraborty; Mubarak Shah; Amrit Singh Bedi

**ID:** 152939 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PFyto9A2fG>) | [PDF](<https://openreview.net/pdf?id=PFyto9A2fG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152939>)

Multimodal large reasoning models can reason over images and text, but they remain vulnerable to multimodal jailbreaks\. Recent safety\-alignment methods reduce attack success rate \(ASR\) by fine\-tuning on reasoning traces from stronger teacher models\. We show that this has a hidden cost of over\-refusal\. The aligned model learns to reject benign inputs that contain sensitive words or visual cues\. This is especially harmful for boundary\-safe inputs, where the prompt looks risky on the surface but is safe in context\. We identify external teacher supervision as a key factor in this behavior\. It introduces a distributional mismatch and shifts supervision away from the  base model's own reasoning distribution\. To address this, we propose  SAGE \(Safety\-Aware Guided Elicitation\), a self\-guided  data generation framework for multimodal safety alignment\. SAGE guides generation in two stages: a reasoning\-level guide first elicits a safety\-aware trace, and a decision\-level guide then elicits the final response conditioned on that trace\. This factorized guidance lets SAGE shape both the reasoning process and the final safety decision without relying on external teacher traces\. On LLaVA\-CoT, SAGE reduces FigStep ASR from 86\.2% to 2\.1% and achieves an average over\-refusal of 43\.1, compared with 66\.9\-\-71\.1 for prior reasoning\-based safety\-alignment methods, while preserving general utility\. We will release the SAGE training dataset\.

## TailAdapt: Heavy\-Tailed Sparse Variational Adaptation for Long\-Tailed Class Incremental Learning

**Authors:** Abhishek Kumar Sinha; Nitant Dube; Soma Biswas

**ID:** 155710 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3V8BlU6B4a>) | [PDF](<https://openreview.net/pdf?id=3V8BlU6B4a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155710>)

_Abstract unavailable from the accessible public sources._

## Look\-Before\-Move: Narrative\-Grounded World Visual Attention in Dynamic 3D Story Worlds

**Authors:** Jiaming Bian; Bingliang Li; Yuehao Wu; Pichao WANG; Zhi Wang; Hailan Ma; Huadong Mo; Zhenhong Sun

**ID:** 154223 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FIGk7el4fq>) | [PDF](<https://openreview.net/pdf?id=FIGk7el4fq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154223>)

_Abstract unavailable from the accessible public sources._

## Perceive\-then\-Plan: Layout\-as\-Policy for Monocular 3D Scene Layout Estimation

**Authors:** Junwei Zhou; Yu\-Wing Tai

**ID:** 150178 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k75EREQHoh>) | [PDF](<https://openreview.net/pdf?id=k75EREQHoh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150178>)

_Abstract unavailable from the accessible public sources._

## VLAN: Vision\-Language Accessible Navigation

**Authors:** Jie Hu; Yu Zheng; Wenzhi Wu; Weixing Feng; Cunlei Cheng; Jiaming Zhang

**ID:** 138986 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sOB6s3Yath>) | [PDF](<https://openreview.net/pdf?id=sOB6s3Yath>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138986>)

_Abstract unavailable from the accessible public sources._

## Intervene3D: Intervention\-Based Controlled Inference for Multimodal Perception under Partial Observability

**Authors:** Constantino Msigwa; Denis Bernard; Jaeseok Yun

**ID:** 154481 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DGYMQ4bD4b>) | [PDF](<https://openreview.net/pdf?id=DGYMQ4bD4b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154481>)

_Abstract unavailable from the accessible public sources._

## DualSteer: Dual\-Space Steering for Robust Jailbreak Mitigation of Large Vision Language Models

**Authors:** Haotian Zhu; Shuchao Pang; Zhigang Lu; Jiluan Fan; Fanzhen Liu; Xu Zheng; Xunzhu Tang; Minhui Xue

**ID:** 153216 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mz2OdwaQPw>) | [PDF](<https://openreview.net/pdf?id=Mz2OdwaQPw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153216>)

_Abstract unavailable from the accessible public sources._

## VideoSailor: Navigating Video Deep Research via Trajectory\-to\-Policy Flywheel

**Authors:** Meng Cao; Pengfei Hu; Yingyao Wang; Chen Wang; Pi Bu; Jun Song; Cheng Yu; Bo Zheng; Ian Reid; Xiaodan Liang

**ID:** 148818 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uuf9SslhuV>) | [PDF](<https://openreview.net/pdf?id=uuf9SslhuV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148818>)

_Abstract unavailable from the accessible public sources._

## Heads That Write, Not Just Point: Image Retrieval Heads in Vision\-Language Models

**Authors:** Junsung Park; Uiwon Hwang; Donghun Kang; Yeongtak Oh; Jaewon Jeong; Gyeongtae Yoo; Han Cheol Moon; Jungbeom Lee; Sungroh Yoon

**ID:** 148545 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x59KtHPgHO>) | [PDF](<https://openreview.net/pdf?id=x59KtHPgHO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148545>)

_Abstract unavailable from the accessible public sources._

## Dynin\-Robotics: Omnimodal Unified Diffusion Vision\-Language\-Action Model

**Authors:** Hoeun Lee; Hyeonggeun KIM; Jaeik Kim; Jusang Oh; Geon Choi; Jinhyeok Kim; Jaeyoung Do

**ID:** 148952 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tvmfTQg0WL>) | [PDF](<https://openreview.net/pdf?id=tvmfTQg0WL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148952>)

_Abstract unavailable from the accessible public sources._

## RepFusion: Leveraging Multimodal Priors for Denoising in Representation Space

**Authors:** Xichen Pan; Satya Narayan Shukla; Aashu Singh; Shlok K Mishra; Saining Xie

**ID:** 153090 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O3nA8awPs4>) | [PDF](<https://openreview.net/pdf?id=O3nA8awPs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153090>)

_Abstract unavailable from the accessible public sources._

## Unifying Contrastive and Generative Objectives for Visual Understanding and Text\-to\-Image Generation

**Authors:** Chao Li; Tianhong Li; Sai V Nuthalapati; Hong\-You Chen; Satya Narayan Shukla; Jianpeng Cheng; Yonghuan Yang; Jun Xiao; Xiangjun Fan; Aashu Singh; Dina Katabi; Shlok K Mishra

**ID:** 150380 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iUP2tlq1du>) | [PDF](<https://openreview.net/pdf?id=iUP2tlq1du>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150380>)

_Abstract unavailable from the accessible public sources._

## HALMES: Knowing When to Intervene in LVLM Hallucination Mitigation

**Authors:** Ruining Hu; Jiaqi Lu; Xiao Liu; Ying Shen; Yu Wang; Lin Zhang

**ID:** 153080 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O8ShETkdl7>) | [PDF](<https://openreview.net/pdf?id=O8ShETkdl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153080>)

_Abstract unavailable from the accessible public sources._

## AgenticOCR: Parsing Only What You Need for Efficient Retrieval\-Augmented Generation

**Authors:** Zhengren Wang; Dongsheng Ma; Huaping Zhong; Jiayu Li; Yijie Wang; Tianyao He; Wentao Zhang; Bin Wang; Conghui He

**ID:** 153107 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NtBkgEhEww>) | [PDF](<https://openreview.net/pdf?id=NtBkgEhEww>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153107>)

_Abstract unavailable from the accessible public sources._

## Beyond Prediction: Steering VLM Agents with Retrospective World Modeling

**Authors:** Yongjiang Liu; Jie ZHANG; Haoyue Zhang; Jingcai Guo; Deze Zeng; Song Guo

**ID:** 155042 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8sWyZTPe9o>) | [PDF](<https://openreview.net/pdf?id=8sWyZTPe9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155042>)

_Abstract unavailable from the accessible public sources._

## Object Hallucination Mitigation in Large Vision\-Language Models via Self\-Vision Dual Masking and Uncertainty\-Triggered Assembly

**Authors:** Ziji Sheng; Guiyao Tie; Weidong Wang; Jiawen Shi; Junhao Dong; Xiaoye Qu; Shanshan Ye; Daizong Liu; Dengpan Ye; Pan Zhou; Jing Zhang

**ID:** 150191 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k3bNFdhhNj>) | [PDF](<https://openreview.net/pdf?id=k3bNFdhhNj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150191>)

_Abstract unavailable from the accessible public sources._

## Focus Matters: Attention\-Value Dynamics for Hallucination Mitigation in Vision\-Language Models

**Authors:** Sohyeon Kim; Sang Yeon Yoon; Kyeongbo Kong

**ID:** 155092 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8VaNJuKNNk>) | [PDF](<https://openreview.net/pdf?id=8VaNJuKNNk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155092>)

_Abstract unavailable from the accessible public sources._

## UniVLR: Unifying Text and Vision in Visual Latent Reasoning for Multimodal LLMs

**Authors:** Houcheng Jiang; Jiajun Fu; Junfeng Fang; Chen Gao; Xiang Wang; Xiangnan He; Yong Li

**ID:** 156120 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0FxITvLaY1>) | [PDF](<https://openreview.net/pdf?id=0FxITvLaY1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156120>)

_Abstract unavailable from the accessible public sources._

## Towards Realistic Conversational Multimodal Instruction Following

**Authors:** Kaiwen Tuo; Congcong Wang; Shuai Dong; Hongrui Wu; Siyuan Wang; Xuefeng Yin; Yuhang Cao; Nan Duan; Jiaqi Wang

**ID:** 149344 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qndRcwc5T4>) | [PDF](<https://openreview.net/pdf?id=qndRcwc5T4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149344>)

_Abstract unavailable from the accessible public sources._

## ThinkJEPA: Empowering Latent World Models with Large Vision\-Language Reasoning Model

**Authors:** Haichao Zhang; Yijiang Li; Shwai He; Tushar Nagarajan; Mingfei Chen; Jianglin Lu; Ang Li; Yun Fu

**ID:** 150698 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gBPgg0KWK7>) | [PDF](<https://openreview.net/pdf?id=gBPgg0KWK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150698>)

_Abstract unavailable from the accessible public sources._

## Uncovering and Shaping the Latent Representation of 3D Scene Topology in Vision\-Language Models

**Authors:** Haoming Wang; Wei Gao

**ID:** 148612 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wSSsA6iviw>) | [PDF](<https://openreview.net/pdf?id=wSSsA6iviw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148612>)

_Abstract unavailable from the accessible public sources._

## Hide\-and\-Seek in Trajectories: Discovering Failure Signals for VLA Runtime Monitoring

**Authors:** Seongheon Park; Wendi Li; Changdae Oh; Samuel \(Min\-Hsuan\) Yeh; Zsolt Kira; Michael Hagenow; Sharon Li

**ID:** 150396 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iM3BORT60x>) | [PDF](<https://openreview.net/pdf?id=iM3BORT60x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150396>)

Vision\-Language\-Action \(VLA\) models enable robots to follow natural language instructions and generalize across diverse tasks, but they remain vulnerable to execution failures that compromise reliability in real\-world deployment\. Detecting such failures during execution is therefore critical for the robust deployment of embodied systems\. Existing failure detection methods either rely on expensive action resampling or external models, while alternatives propagate trajectory\-level labels uniformly across every timestep, obscuring localized failure signals\. In this paper, we propose \\textbf\{Hide\-and\-Seek\}, a framework that formulates VLA failure detection as a coarsely supervised learning problem\. By combining inter\-trajectory and intra\-trajectory contrastive objectives, Hide\-and\-Seek localizes failure\-indicative actions and induces temporally structured failure signals from trajectory\-level supervision alone, without any step\-level annotation\. We evaluate Hide\-and\-Seek on LIBERO, VLABench, and a real\-world robotic platform across three representative VLA policies: OpenVLA, $\\pi\_0$, and $\\pi\_\{0\.5\}$\. Our method achieves state\-of\-the\-art multi\-task failure detection performance with a practical accuracy\-\-timeliness trade\-off under conformal prediction, and generalizes well to both seen and unseen tasks\.

## Clustered Randomized Smoothing for Stochastic Prediction Functions

**Authors:** Eduardo Figueiredo; Frederik B Mathiesen; Julian F Schumann; Jens Kober; Arkady Zgonnikov; Luca Laurenti

**ID:** 153010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OeD82ZRKWm>) | [PDF](<https://openreview.net/pdf?id=OeD82ZRKWm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153010>)

Neural networks are expressive predictors capable of modeling rich, multi\-modal outcome distributions\. However, this expressive power comes with challenges in ensuring robust predictions—a critical requirement in safety\-critical domains\. Randomized smoothing is a leading technique for improving robustness, particularly against adversarial perturbations\. Yet, in stochastic multi\-modal regression settings, randomized smoothing often fails due to mode collapse, yielding averaged predictions that do not reflect the underlying distribution\. To address this limitation, we propose clustered $\\alpha$\-smoothing, a framework that \(1\) partitions noisy samples using an arbitrary clustering algorithm, \(2\) applies $\\alpha$\-smoothing locally within each cluster, and \(3\) combines the resulting predictions into a mixture distribution\. By interpreting the smoothing distribution as a mixture of $\\alpha$\-smoothers, we derive a lower bound on the probability that the smoothed prediction lies within a union of compact regions corresponding to distinct modes\. We empirically evaluate our framework on two benchmarks, demonstrating substantial improvements over state\-of\-the\-art methods\. In stochastic trajectory prediction on a driving simulator dataset, our approach achieves, on average, a 33\\% lower Wasserstein distance to the ground\-truth distribution compared to $\\alpha$\-smoothing\. In quadrotor control, where modes correspond to distinct feasible paths to a target, our method reduces the collision rate by 81\\% relative to the state\-of\-the\-art randomized smoothing\.

## CAVE: A Structured Credit Assignment Approach for Fragmented Visual Evidence Reasoning

**Authors:** Tengda Guo; Jie Leng; Hanlei Li; Yaoyuan Liang; Qingyue Zhang; Dian Yang; Mingyu Zhang; Yuhua Fu; Shao\-Lun Huang

**ID:** 153157 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NT1gZRQtc5>) | [PDF](<https://openreview.net/pdf?id=NT1gZRQtc5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153157>)

Vision\-Language Models \(VLMs\) have achieved strong performance on general multimodal reasoning, yet remain challenged in integrating nonlocal visual information to support semantically underdetermined visual reasoning\. We describe this challenge as Fragmented Visual Reasoning\. To this end, we propose Credit Assignment for Visual Evidence \(CAVE\), a structured process\-reward method based on GRPO for interleaved visual reasoning\. Specifically, CAVE evaluates the contribution of intermediate steps at the action level via three complementary reasoning process signals: belief update, evidence acquisition, and adaptive focus control, thereby guiding the model to optimize each reasoning action and learn more reliable visual reasoning strategies\. Meanwhile, we construct TRACER\-Bench, which covers four nonlocal and semantically confusable reasoning dimensions and provides key intermediate evidence to supervise reasoning paths\. Experiments demonstrate that CAVE substantially improves performance on tasks requiring fragmented visual evidence integration, covering both public benchmarks and our newly introduced TRACER\-Bench, while retaining competitive performance on general multimodal evaluations\. Further analyses reveal that CAVE effectively improves the visual reasoning capacity and exhibits stronger robustness under longer\-range and deeper cross\-region dependencies\. Our code and the proposed benchmark are available at: https://anonymous\.4open\.science/r/Anonymous\_code\-2D8B/\.

## APIVOT: Adaptive Planning with Interleaved Vision\-Language Thoughts

**Authors:** Emily Jin; Joy Hsu; Yiqing Xu; Weiyu Liu; Nick Haber; Jiajun Wu

**ID:** 152333 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TrMEmzHHdo>) | [PDF](<https://openreview.net/pdf?id=TrMEmzHHdo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152333>)

Long\-horizon robot planning requires jointly reasoning over semantic task structure and geometric feasibility\. To successfully execute a task, a robot must decompose goals, select task\-relevant objects, and sequence actions, while ensuring that plans satisfy spatial constraints such as limited free space and object collisions\. In this work, we propose APIVOT, a VLM\-based planner that adaptively interleaves language and visual thoughts for long\-horizon planning\. APIVOT learns to rely on language for semantic reasoning, while using visual thoughts as imagined future states for internal verification of geometric feasibility\. On long\-horizon kitchen tasks, APIVOT outperforms general\-purpose VLMs and prior planning frameworks, achieving the largest gains in spatially constrained settings\. We find that APIVOT learns meaningful modality selection behavior, demonstrating that adaptive interleaving of vision\-language thoughts improves both planning success and reasoning efficiency\.

## Beyond Pairwise Supervision: Spectral Characteristic Matching for Data\-Efficient Multimodal Alignment

**Authors:** Xinchao Wang; Shuang Li; Wei Chen; Jingxuan Kang; Fuzhen Zhuang; deqing wang

**ID:** 153322 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MAFbcmvKHt>) | [PDF](<https://openreview.net/pdf?id=MAFbcmvKHt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153322>)

Multimodal alignment under scarce paired supervision aims to align independently pretrained unimodal encoders using limited image\-\-text pairs, offering a practical alternative when large\-scale joint pretraining is infeasible\.  Such scenarios call for lightweight objectives that go beyond local correspondences and capture distributional mismatch between heterogeneous embeddings\. Existing methods often derive supervision from limited pairs through contrastive objectives or geometry\-preserving regularization, encouraging instance\-level correspondence or structural consistency but providing limited direct supervision on global cross\-modal mismatch\.  This motivates a distribution\-level objective that complements paired supervision by comparing image and text embedding distributions\. In this paper, we propose $\\textbf\{Spec\}$tral Characteristic Distribution $\\textbf\{Align\}$ment \($\\textbf\{SpecAlign\}$\), a lightweight spectral alignment framework that reduces cross\-modal mismatch by comparing image and text characteristic functions over learnable spectral queries\. Since characteristic functions uniquely determine probability distributions, SpecAlign provides a principled signal for capturing multi\-scale discrepancies beyond pointwise alignment\.  To obtain informative and stable queries, SpecAlign employs a Structured Direction\-\-Radius Sampler \(SDRS\) that decouples direction and radius modeling\.  Extensive evaluations on transfer, retrieval, robustness, and representation analyses demonstrate consistent gains, validating spectral distribution\-level supervision for data\-efficient multimodal alignment\.

## Not All Tokens Should Be Treated Equally: Context Credits Reassignment

**Authors:** Shujian Gao; Yuan Wang; Jiamei Yan; Penghao Zhou; Qinglei Wang; Jiangtao Yan; Zuxuan Wu; Yu\-Gang Jiang

**ID:** 152065 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VjXxG2aN7k>) | [PDF](<https://openreview.net/pdf?id=VjXxG2aN7k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152065>)

Multimodal Reinforcement learning with verifiable rewards \(RLVR\) algorithms assign the same advantage to every token in a generated sequence, providing no differential signal for tokens with varying degrees of dependence on visual evidence\.  A simple experiment confirms this issue: \\textbf\{scaling token advantages by uninformative random noise already outperforms uniform credit\}, suggesting that uniform credit is empirically suboptimal\. Beyond that, we observe RLVR tuning under uniform credit weakens visual grounding along three complementary axes: attention, gradient attribution, and functional dependence on image embeddings, \\textbf\{collectively indicating insufficient utilization of visual evidence\}\. To understand this degradation, we provide a theoretical analysis showing that, under language\-prior dominance and regularity conditions, uniform credit can amplify a pretrained text\-favored gradient imbalance, contributing to weaker visual attention\. In response, we propose Hierarchical Context Credit Reassignment \(\\textbf\{HiCCR\}\), which reassigns credit at two levels: a token\-level weight amplifies the advantage for visually grounded tokens, and a trajectory\-level weight upweights rollouts with stronger visual engagement\.  The entire mechanism \\textbf\{adds less than 3\\% wall\-clock overhead\} and applies to mainstream RLVR algorithms without auxiliary models or additional data\.  On ten benchmarks spanning mathematical and general multimodal reasoning, HiCCR consistently improves upon its corresponding base algorithm and achieves state\-of\-the\-art results among open\-source models of comparable scale, while alleviating the weakening of visual grounding observed under RLVR training\.

## Do multimodal models imagine electric sheep?

**Authors:** Santhosh Kumar Ramakrishnan; Carl Vondrick; Raja Giryes; Philipp Kraehenbuehl; Vladlen Koltun

**ID:** 154838 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AXj15qdFx1>) | [PDF](<https://openreview.net/pdf?id=AXj15qdFx1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154838>)

Yes\. We find that large multimodal models develop mental imagery when solving spatial puzzles, and they do imagine sheep when solving sheep puzzles\. We fine\- tune a Qwen3\.5 VLM to solve twelve diverse visual reasoning tasks—including tangram, jigsaw, sokoban, 3D mental rotation, and rush hour—that require under\- standing geometry, spatial constraints, and the consequences of actions\. By simply predicting the open\-loop sequence of actions to solve a puzzle from an initial state, we show that the model learns successfully, and that its hidden representations after each action encode meaningful visual information about the intermediate puzzle state\. This finding suggests that an imperfect visual world model begins to form as a byproduct of learning to select correct actions in an open\-loop fashion, in the absence of any explicit visual supervison\. Building on this observation, we propose two ways to sharpen the mental images learned by the model through explicit visual supervision or explicit visual tokens\. Across puzzles, we find that integrating as few as sixteen visual tokens into the chain of thought per board state improves the average solve rate from 83% to 89%, with gains exceeding 20 percentage points on reasoning\-heavy games such as jigsaw and 3D mental rotation\. Our results show that visual reasoning is a bottleneck, and that mental imagery may be a key mechanism for robust spatial cognition\.

## MIRA: Reinforcing Multimodal Reasoning via Deceptive Contextual Augmentation

**Authors:** Zhihan Yin; Jianxin Liang; Yifeng Yao; Nonghai Zhang; Bingyue Peng; Chunguang Qie; Huishuai Zhang; Dongyan Zhao

**ID:** 153690 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JWHtqzKFdU>) | [PDF](<https://openreview.net/pdf?id=JWHtqzKFdU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153690>)

While Reinforcement Learning with Verifiable Rewards \(RLVR\) has significantly advanced multimodal reasoning, existing frameworks suffer from a critical “perception–reasoning gap\.” Due to an over\-reliance on seemingly relevant visual tokens, even minor perceptual perturbations can propagate through the reasoning process, leading to compounding hallucinations\. To address this issue, we propose MIRA, a training framework that improves robustness to erroneous visual contexts while enhancing logical reasoning ability\. By injecting filtered, deceptive visual contexts during training, we construct challenging “hard traps” that stress\-test the model’s robustness to misleading information\. Furthermore, we introduce a group\-wise reflection\-triggering mechanism that enables the model to autonomously detect and rectify inconsistencies between visual cues and logical constraints, which is ultimately internalized as an intrinsic policy behavior\. Importantly, MIRA does not rely on human annotations\. Experimental results across multiple benchmarks show that MIRA improves the base model by 7% and demonstrates superior robustness against deceptive contexts\. These findings highlight that active error recovery is essential for reliable multimodal reasoning\. Comprehensive ablation studies and analyses further provide insights into why MIRA is effective\.

## Prompt\-Conditioned Semantic Bottleneck for Cross\-Domain Face Attack Detection

**Authors:** Weihang Wang; Rongjie Liu; Min Cao

**ID:** 152524 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=STzYbJFqBT>) | [PDF](<https://openreview.net/pdf?id=STzYbJFqBT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152524>)

Learning visual representations that generalize across domains remains challenging when source\-domain supervision is entangled with spurious dataset\-specific cues\. This issue is particularly pronounced in face attack detection \(FAD\), where attack artifacts vary substantially across capture devices, manipulation pipelines, and image quality\. In this paper, we propose Prompt\-Conditioned Semantic Bottleneck, an information\-bottleneck\-inspired representation learning framework for cross\-domain FAD\. Unlike prior methods that use prompts as image\-text matching anchors for multi\-modal feature learning, our method uses label\- and attack\-type\-conditioned prompts to elicit attack\-aware semantic targets from a frozen VLM\. These prompt\-conditioned semantics provide offline supervision for a lightweight visual detector, encouraging its representation to preserve attack\-relevant cues while reducing reliance on source\-domain nuisance factors\. Extensive experiments on face anti\-spoofing and face forgery detection benchmarks demonstrate consistent improvements under cross\-dataset evaluation\. Ablation studies further show that the gains are not simply due to stronger visual or multi\-modal models, but arise from attack\-aware prompt\-conditioned semantic supervision\. Importantly, the VLM and prompts are removed during inference, enabling efficient vision\-only deployment\. Overall, our results suggest that prompt\-conditioned VLM semantics provide an effective way to improve the trade\-off among detection accuracy, cross\-domain generalization, and inference efficiency in FAD\.

## See it to Place it: Evolving Macro Placements with Vision Language Models

**Authors:** Ikechukwu Uchendu; Swati Goel; Karly Hou; Ebrahim Songhori; Kuang\-Huei Lee; Wenjie \(Joe\) Jiang; Vijay Janapa Reddi; Vincent Zhuang

**ID:** 153841 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IKB3YFHXxH>) | [PDF](<https://openreview.net/pdf?id=IKB3YFHXxH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153841>)

We propose using Vision\-Language Models \(VLMs\) for macro placement in chip floorplanning, a complex optimization task that has recently shown promising advancements through machine learning methods\. Because human designers rely heavily on spatial reasoning to arrange components on the chip canvas, we hypothesize that VLMs with strong visual reasoning abilities can effectively complement existing placement algorithms\. We introduce VeoPlace \(Visual Evolutionary Optimization Placement\), a novel framework that uses a VLM—without any fine\-tuning—to guide the actions of a base placer by constraining them to subregions of the chip canvas\. The VLM proposals are iteratively optimized through an evolutionary search strategy with respect to resulting placement quality\. Using global half\-perimeter wirelength \(gHPWL\) after standard\-cell placement and legalization as the evaluation metric, VeoPlace boosts ChiPFormer performance on 9 of 10 benchmarks with peak reductions exceeding 32%\. We further demonstrate that VeoPlace generalizes to analytical placers, improving DREAMPlace on all 8 evaluated Superblue benchmarks with gains up to 4\.3%\. Our approach opens new possibilities for electronic design automation tools that leverage foundation models to solve complex physical design problems\.

## Witness Overlap: Directional Provenance Inside Open\-Weight Model Families

**Authors:** Siyuan Li; Haoxuan Zeng; Xin Luo; Fernando Jia; Florence Li; Zhengyang Geng; Zico Kolter; Tai Sing Lee; Tianqin Li

**ID:** 149996\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149996

[Paper](<https://openreview.net/forum?id=lc1XaBdx6q>) | [PDF](<https://openreview.net/pdf?id=lc1XaBdx6q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149996>)

Open\-weight models are often released, fine\-tuned, aligned, merged, and re\-released, making provenance audits ask not only whether checkpoints are related, but also which checkpoint came first\. Many existing model\-provenance methods are designed for a base\-known audit setting: given a victim or source model, they test whether a suspect model is related to it\. Although these audits are framed as source\-to\-suspect tests, their underlying evidence is often symmetric, relying on representation similarity, weight similarity, behavioral fingerprints, or correlation statistics\. Symmetric pairwise comparisons can detect relatedness, but they cannot by themselves orient A versus B\.  We therefore introduce a local geometric comparison: instead of comparing two checkpoints directly, we add a third same\-family checkpoint as a witness and compare the geometry around A with the geometry around B\. Direction is inferred by asking which candidate behaves more like a branching parent\. Motivated by this idea, and by the empirically observed asymmetry between parent\-anchored and child\-anchored witness\-overlap distributions, we propose Witness Overlap, a prompt\-free, training\-free white\-box test for directional provenance\. On 176 LLM checkpoints from 16 families, our one\-witness test orients 95\.3\\% of parent–child decisions using Frobenius cosine\. We further evaluate root identification, sibling discrimination, generalizations to VLM and diffusion families, and chain\-structured ordering\. The signal is robust to weight noise and sparse pruning, with a proposed SVD weight reduction variant showing greater robustness than Frobenius cosine\.

## Toward in Silico Strain Evaluation: A Multimodal Surrogate for Fermentation Dynamics with Metabolic Graph Pretraining

**Authors:** Yunxiao Li; Difeng Gao; Yubin Zheng; JIJIAO ZENG

**ID:** 150995\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150995

[Paper](<https://openreview.net/forum?id=dij6bw1w7s>) | [PDF](<https://openreview.net/pdf?id=dij6bw1w7s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150995>)

Strain engineering for industrial fermentation faces a structural design\-test scale gap: combinatorial pathway perturbations of $2$–$3$ enzymes already span $10^4$–$10^6$ candidate strains, while bench\-scale fermentation throughput remains on the order of $10^2$ runs per laboratory per year\. One way to narrow this gap is in silico evaluation by perturbing a learned gene\-expression $\\to$ phenotype mapping \(conditioned on process state\); the precondition is that such a mapping can be learned from bench\-scale\-sized datasets\. As a proof\-of\-concept, we ask whether a genome\-scale metabolic model \(GEM\)\-graph mechanistic prior supports learning such a mapping from $\\sim44$ bioreactor runs of an engineered Yarrowia lipolytica astaxanthin\-producing strain\. We propose a spatio\-temporal GNN encoder structured as a Mass Flow Graph over the GEM, paired with a multimodal input head over gene\-expression snapshots, sensor streams, time\-series assays, and run\-level metadata\. The encoder is pretrained by masked\-flux prediction on Flux Balance Analysis \(FBA\) samples, distilling the GEM's stoichiometric and mass\-balance constraints into it before fermentation data are seen\. Under $5$\-fold cross\-validation across $5$ seeds, the surrogate attains the lowest mean composite test RMSE among the baselines we compare against\. Structural ablations show that the GEM\-graph prior is necessary—an order\-of\-magnitude RMSE divergence when removed—while pretraining together with the gene\-expression modality make a significant joint contribution, supporting the proof\-of\-concept claim\.

## Evo\-Depth: A Lightweight Depth\-Enhanced Vision\-Language\-Action Model

**Authors:** Tao Lin; Yuxin Du; Jiting Liu; Nuobei Zhu; YUNHE LI; Yuqian Fu; Yinxinyu Chen; Hongyi Cai; Ye Zewei; Bing Cheng; Kai Ye; Yiran Mao; Yilei Zhong; Mingkang Dong; Junchi Yan; Gen Li; Bo Zhao

**ID:** 154131\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154131

[Paper](<https://openreview.net/forum?id=G2jacreNCB>) | [PDF](<https://openreview.net/pdf?id=G2jacreNCB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154131>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for robotic manipulation by unifying perception, language grounding, and action generation\. However, they often struggle in scenarios requiring precise spatial understanding, as current VLA models primarily rely on 2D visual representations that lack depth information and detailed spatial relationships\.  While recent approaches incorporate explicit 3D inputs such as depth maps or point clouds to address this issue, they often increase system complexity, require additional sensors, and remain vulnerable to sensing noise and reconstruction errors\.  Another line of work explores implicit 3D\-aware spatial modeling directly from RGB observations without extra sensors, but it often relies on large geometry foundation models, resulting in higher training and deployment costs\. To address these challenges, we propose \\textbf\{Evo\-Depth\}, a lightweight depth\-enhanced VLA framework that enhances spatially grounded manipulation without relying on additional sensing hardware or compromising deployment efficiency\. Evo\-Depth employs a lightweight \\textit\{Implicit Depth Encoding Module\} \(IDEM\) to extract compact depth features from multi\-view RGB images\. These features are incorporated into vision\-language representations through a \\textit\{Spatial Enhancement Module\} \(SEM\) via depth\-aware modulation, enabling efficient spatial\-semantic enhancement\. A \\textit\{Progressive Alignment Training\} strategy is further introduced to align the resulting depth\-enhanced representations with downstream action learning\. Extensive experiments in simulation and real\-world settings demonstrate the effectiveness of Evo\-Depth\.  With only \\textbf\{0\.9B\} parameters, Evo\-Depth achieves state\-of\-the\-art\-level performance across four simulation benchmarks\. In real\-world experiments, Evo\-Depth attains the highest average success rate while also exhibiting the smallest model size, lowest GPU memory usage, and highest inference frequency among compared methods\. These results demonstrate that lightweight implicit depth enhancement is an effective and practical solution for spatially grounded robotic manipulation\. We release code and models to facilitate future research on lightweight depth\-enhanced VLA models\.

## An Efficient Cross\-modal Feature Reconstruction Model for Multimodal Multi\-class Anomaly Detection

**Authors:** Zhenghan Wang; Zhihui Luo; Haitao Hu; Wengang Cheng

**ID:** 153426\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153426

[Paper](<https://openreview.net/forum?id=LQQHB5gOGa>) | [PDF](<https://openreview.net/pdf?id=LQQHB5gOGa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153426>)

Industrial anomaly detection is evolving from category\-specific detectors toward unified models capable of handling multiple categories simultaneously\. However, in multi\-class setting, greater inter\-category diversity not only compels enhanced reconstruction capacity to model normal patterns but also exacerbates the “identical shortcut” problem, wherein anomalies are likewise well reconstructed\. Moreover, existing unified frameworks are typically confined to single\-modal \(RGB\) inputs and lack multimodal capability\. To address these, we propose an Efficient Cross\-modal Feature Reconstruction \(ECFR\) model for unified multi\-class anomaly detection, which harnesses the inherent difficulty of cross\-modal reconstruction to alleviate the shortcut issue and amplify anomaly discrimination\. The framework is built on two core modules: an Adaptive Feature Interaction and Recalibration \(AFIR\) module and a Hybrid Attention Convolution \(HAC\) module\. Through feature interaction, fusion, and reconstruction, our model achieves two key outcomes: learning normal patterns of multi\-class objects while forcing reconstruction failures for anomalous inputs\. Extensive experiments on the MVTec 3D\-AD and Eyecandies datasets validate our approach, which achieves state\-of\-the\-art performance in multimodal multi\-class anomaly detection while requiring significantly fewer model parameters \(44\.63 M\) and lower computational complexity \(15\.77 GFLOPs\) compared to previous multimodal anomaly detection methods\.

## Generative Scenario Rollouts for End\-to\-End Autonomous Driving

**Authors:** Rajeev Yasarla; Deepti Hegde; Shizhong Han; Hsin\-Pai Cheng; Yunxiao Shi; MeysamSadeghi; Shweta Mahajan; Apratim Bhattacharyya; Litian Liu; Risheek Garrepalli; Thomas Svantesson; Mohammad Ghavamzadeh; Fatih Porikli; Herbert Cai

**ID:** 155620\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155620

[Paper](<https://openreview.net/forum?id=4CvrLyVNLO>) | [PDF](<https://openreview.net/pdf?id=4CvrLyVNLO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155620>)

Vision\-Language\-Action \(VLA\) models are emerging as highly effective planning models for end\-to\-end autonomous driving systems\. However, current works mostly rely on imitation learning from sparse trajectory annotations and under\-utilize their potential as generative models\. We propose Generative Scenario Rollouts \(GeRo\), a plug\-and\-play framework for VLA models that jointly performs planning and generation of language\-grounded future traffic scenes through an autoregressive rollout strategy\. First, a VLA model is trained to encode ego vehicle and agent dynamics into latent tokens under supervision from planning, motion, and language tasks, facilitating text\-aligned generation\. Next, GeRo performs language\-conditioned autoregressive generation\. Given multi\-view images, a scenario description, and ego\-action questions, it generates future latent tokens and textual responses to guide long\-horizon rollouts\. A rollout\-consistency loss stabilizes predictions using ground truth or pseudo\-labels, mitigating drift and preserving text\-action alignment\. This design enables GeRo to perform temporally consistent, language\-grounded rollouts that support long\-horizon reasoning and multi\-agent planning\. On Bench2Drive, GeRo improves driving score and success rate by \+15\.7 and \+26\.2, respectively\. By integrating reinforcement learning with generative rollouts, GeRo achieves state\-of\-the\-art closed\-loop and open\-loop performance, demonstrating strong zero\-shot robustness\. These results highlight the promise of generative, language\-conditioned reasoning as a foundation for safer and more interpretable end\-to\-end autonomous driving\.

## What Drives Test\-Time Adaptation for CLIP? A Controlled Empirical Study from an Update Perspective

**Authors:** Jiazhen Huang; Xiao Chen; Zhiming Liu; Yaru Sun; Jingyan Jiang; Zhi Wang

**ID:** 139128\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139128

[Paper](<https://openreview.net/forum?id=jUrzOPgzZq>) | [PDF](<https://openreview.net/pdf?id=jUrzOPgzZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139128>)

Vision\-Language Models \(VLMs\) such as CLIP have become a standard backbone for open\-vocabulary recognition, yet their zero\-shot predictions remain vulnerable to distribution shifts encountered at deployment\. Test\-Time Adaptation \(TTA\) has recently been extended to CLIP as a lightweight solution, leading to a rapidly growing body of TTA4CLIP methods\. However, empirical progress in this area has largely outpaced our understanding of what truly drives adaptation, where their gains originate, and under which shifts they remain reliable\. In this paper, we take a step back from the pursuit of state\-of\-the\-art accuracy and conduct a systematic controlled study of TTA4CLIP\. We first organize existing methods into three unified paradigms according to what is updated at test time\. We then introduce TTABC, an open\-source TTA Benchmark for CLIP, which standardizes evaluation protocols and integrates more than 20 representative methods\. Our controlled empirical analysis focuses on three key areas\. First, we determine the driving factors in parameter\-based methods, revealing that adaptation gains are primarily driven by test\-time evidence and reliable proxies rather than heavy optimization\. Second, we explore evidence utilization beyond heavy parameter tuning, showing that competitive and efficient performance can be achieved through cross\- or current\-sample evidence and lightweight prototype updates\. Finally, we demonstrate that there is no silver bullet for TTA; no single adaptation paradigm is universally optimal, and the preferred paradigm depends on the nature of shift\. We hope our benchmark and study provide a clearer understanding of the current TTA4CLIP landscape and establish a foundation for further research\.

## Lost on Campus: Evaluating Embodied Spatial Reasoning of Vision\-Language Models in the Wild

**Authors:** Zehan Zheng; Yanyuan Chen; Deming Li; Yutao Tang; Jianwen Xie; Alan Yuille; Jieneng Chen; Cheng Peng

**ID:** 139093\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139093

[Paper](<https://openreview.net/forum?id=lU1kNLfVEL>) | [PDF](<https://openreview.net/pdf?id=lU1kNLfVEL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139093>)

Embodied Spatial Reasoning \(ESR\) is central to deploying Vision\-Language Models \(VLMs\) in real\-world embodied tasks, yet remains inadequately evaluated\. Existing benchmarks primarily assess spatial reasoning in static images or synthetic indoor environments, where semantic shortcuts often suffice, making it difficult to faithfully evaluate spatial reasoning capabilities in the wild\. In light of this, we present Lost on Campus, a benchmark for evaluating ESR in large\-scale real\-world outdoor 3D environments reconstructed by 3D Gaussian Splatting\. Our benchmark introduces a unified reasoning\-action evaluation framework that seamlessly integrates diagnostic QA for isolated reasoning with closed\-loop interactive navigation for active reasoning under multimodal instructions\. To enable fine\-grained diagnosis, we systematically decompose ESR into six fundamental capabilities: action grounding, spatial foresight, metric awareness, goal\-directed planning, global localization, and spatio\-temporal consistency\. Extensive experiments reveal that: \(i\) Compared to indoor settings, real\-world outdoor environments impose substantially higher demands on spatial reasoning, where existing models exhibit poor performance; \(ii\) VLMs still struggle with fine\-grained visual alignment, with failures in spatial foresight and self\-aware localization emerging as primary bottlenecks; \(iii\) Improving multimodal interaction capabilities and long\-term spatial reasoning is crucial for advancing embodied intelligence\. These findings highlight that faithful evaluation of ESR demands benchmarks tightly coupling perception, reasoning and action within realistic and continuous environments\.

## EDMA: Entropy\-Driven Multimodal Answering

**Authors:** Emanuele Mezzi; Gertjan Burghouts; Fabio Massacci; Mengyuan Zhang

**ID:** 150520\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150520

[Paper](<https://openreview.net/forum?id=hUf4I26zIr>) | [PDF](<https://openreview.net/pdf?id=hUf4I26zIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150520>)

Multimodal question answering \(MMQA\) is based on integrating heterogeneous data sources, selectively leveraging relevant modalities, and ignoring distractors\. Existing approaches based on Multimodal Large Language Models \(MLLMs\) improve performance by splitting the task into intermediate steps, but do not quantify how each modality contributes to reaching the final answer\. We argue that quantifying the effect that each modality has on the answering process improves process traceability and final performance\. Thus, we propose Entropy\-Driven Multimodal Answering \(EDMA\), which uses logical entropy to formalise multimodal QA as an iterative process of entropy reduction and to quantify the contribution of each modality in distinguishing correct from incorrect candidate answers\. This enables the construction of quantifiable answering trajectories, where each step is associated with a measurable entropy reduction\. EDMA introduces \(i\) modality\-conditioned partitioning to estimate unimodal entropy reduction, \(ii\) entropy\-driven multimodal fusion to capture complementary information across modalities, and \(iii\) entropy\-based selection of the answering trajectory that minimises the most logical entropy\. Experiments on multimodal QA benchmarks show that EDMA consistently outperforms prompting\-based baselines and state\-of\-the\-art methods\. Averaged across datasets, EDMA achieves gains of $12\.8$ and $19\.8$ F1 points over the strongest prompting baseline and state\-of\-the\-art system, respectively\. Moreover, we show that higher entropy correlates with more false positives and, through controlled interventions on the choice of the answering trajectory, provide evidence that lower\-entropy partitions causally reduce false positives, validating entropy level as a reliable proxy for performance\. We share our code at https://anonymous\.4open\.science/r/EDMA/README\.md\.

## BioXArena: Benchmarking LLM Agents on Multi\-Modal Biomedical Machine Learning Tasks

**Authors:** Loka Li; Duzhen Zhang; Xingbo Du; Leonard Song; Zixiao Wang; Assanali Aukenov; Noel Thomas; Shakhnazar Sailaukan; Yonghan Yang; Feilong Chen; Jiahua Dong; Kun Zhang; Bin Zhang; Le Song

**ID:** 138952\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138952

[Paper](<https://openreview.net/forum?id=uFVrUm3zfO>) | [PDF](<https://openreview.net/pdf?id=uFVrUm3zfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138952>)

Large language model \(LLM\) agents increasingly automate machine\-learning model building, yet biomedical benchmarks emphasize question answering, reasoning, and tool use or cover narrow slices of biomedical ML coding\. We introduce BioXArena, a biomedical machine learning \(BioML\) coding benchmark for task\-specific model building on heterogeneous, often multi\-modal datasets\. It contains 76 end\-to\-end tasks across 9 domains: sequence, single\-cell, structure, network biology, chemical biology, perturbation dynamics, phenotype\-\-disease, imaging, and text\-integrated tasks\. Each task packages primary\-source data with hidden labels, held\-out graders, and biology\-aware metrics on a unified 0\-to\-100 scale; agents write runnable code, train models, and predict private test samples\. BioXArena emphasizes realistic data interfaces: most tasks require agents to integrate multiple input sources, including 46 tasks that combine distinct modality families\. We compare 18 harness\-\-backbone configurations: general\-purpose coding, biomedical, and ML agents plus our Minimal runner, all under the same controlled resource configuration\. Codex with GPT\-6 Astra achieves the highest task\-level average score of 73\.91 among 18 configurations, closely followed by Claude Code with Opus 5\.5 \(73\.79\)\. Matched\-backbone comparisons show higher observed scores for mature coding systems than for Minimal; seven Minimal backends characterize model differences under a fixed runner\. Beyond the main leaderboard, ablations, robustness checks, and scaling, runtime, and failure\-mode analyses characterize how backbones, scaffolds, budgets, and domains affect BioML coding performance, exposing modeling and execution gaps across agent and LLM backbone families\.

## ProQuant: Progressive Quantization\-aware Training for Edge MLLMs

**Authors:** Yufei Xue; Yushi Huang; Jiawei Shao; Pingcheng Dong; Yonghao Tan; Shiyao Li; Kwang\-Ting Cheng; Jun Zhang

**ID:** 148767 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vCwUxyqgph>) | [PDF](<https://openreview.net/pdf?id=vCwUxyqgph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148767>)

Multi\-modal large language models \(MLLMs\) with impressive perception and understanding capabilities will enable a range of downstream applications\. However, their substantial computational and memory requirements hinder the real\-world implementation, particularly for resources\-constrained edge devices\. Quantization has emerged as an effective solution for deploying large models\. While post\-training quantization \(PTQ\) successfully retrains the performance at moderate bit\-width \(\\textit\{e\.g\.\}, W8A8\), it suffers from severe performance degradation under low\-bit quantization \(\\textit\{e\.g\.\}, W4A8/W8A8\), especially for small\-scale models that are more suitable for edge deployment\. In this paper, we propose \\texttt\{ProQuant\}, a novel weight\-activation quantization\-aware training \(QAT\) framework tailored for low\-bit MLLMs\. First, to align the limited finetuning dataset distribution with the pretrained dataset distribution, we propose a self\-relabeling \(SRL\) scheme to resample the responses of the open\-source multimodal dataset\. Second, we are the \\textit\{first\} to take a decoupled view of multi\-modal \(MM\) understanding and language modeling abilities\. We propose a progressive block activation \(PBA\) mechanism to prioritize the MM understanding recovery\. We also introduce a vision\-sensitive factor $\\vec\{\\tau\}$ that effectively identifies the MM\-critical layers\. Extensive experiments across various benchmarks, covering models with 2B$\\sim$8B parameters, show that \\texttt\{ProQuant\} significantly outperforms existing methods\. For example, our W4A8 \\texttt\{Qwen3\-VL\-2B\-Instruct\} improves average accuracy by impressively 6\.6\\% and achieves performance comparable to full precision counterparts with only $\\sim$1\\% performance drop\.  Code will be released upon acceptance\.

## Rethinking Contrastive Loss in CLIP Post\-training: A Complementary Framework with Frozen Text Encoder

**Authors:** Zidan Wang; Yaqian Li; xiaokai zhang; Kun He; Kaiwen Long; Hanpeng Liu

**ID:** 148979 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tjKgJbAYn9>) | [PDF](<https://openreview.net/pdf?id=tjKgJbAYn9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148979>)

CLIP serves as a foundational vision\-language model and the de facto  vision encoder for downstream VLMs such as LLaVA\. Post\-training  offers a resource\-efficient route to refine CLIP, but recent work  argues that the standard contrastive loss is unsuitable for  post\-training due to catastrophic forgetting under small batches,  motivating designs that abandon the contrastive objective in favor  of distillation\. We revisit this premise and find that the reported  forgetting is not caused by insufficient negatives, but by an  inappropriate magnitude of the contrastive temperature $\\tau$: with  $\\tau$ set sufficiently small, contrastive loss becomes the  strongest single\-loss post\-training objective\. Building on this  finding, we propose \\textbf\{ComCLIP\}, a complementary post\-training  framework that freezes CLIP's text encoder\-\-\-preserving  compatibility with downstream VLMs\-\-\-and trains the vision encoder  under three complementary losses operating in the shared contrastive  space: a properly\-tempered contrastive loss for image\-text  alignment, an MSE anchoring loss against the original CLIP for  preserving the pretrained feature manifold, and a relational  distillation loss from DINOv2 for fine\-grained visual knowledge  injection\. With only one epoch on small data, ComCLIP consistently  outperforms prior post\-training methods on ViT\-B/16 and ViT\-L/14  across zero\-shot classification, retrieval, linear probing, and  MMVP, achieving up to $\\mathbf\{\+7\.41\}$ points on MMVP\. Furthermore,  ComCLIP serves as a drop\-in vision encoder for LLaVA\-7B, improving  average performance across $8$ standard VLM benchmarks without any  re\-alignment of the LLM or projector\.

## ITO: Multi\-View Alignment and Training\-Time Fusion for Image\-Text Pretraining

**Authors:** Hanpeng Liu; Yaqian Li; Zidan Wang; Shuoxi Zhang; Zonglin Zhao; Zi\-Hao Bo; rinyoichi takezoe; Kaiwen Long; Kun He

**ID:** 152157 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V6FtgDk4Nx>) | [PDF](<https://openreview.net/pdf?id=V6FtgDk4Nx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152157>)

Image\-\-text contrastive pretraining has become a dominant paradigm for visual representation learning, yet existing methods often yield representations that remain partially organized by modality rather than by semantics\. We propose \\textbf\{ITO\}, a framework addressing this limitation through two complementary mechanisms with distinct roles\. \\emph\{Multimodal multiple alignment\} enriches supervision by constructing diverse cross\-modal correspondences from multi\-view image augmentations, providing the primary source of discriminative gain\. A lightweight \\emph\{training\-time multimodal fusion\} module then acts as a geometric regularizer, encouraging the encoders to produce features that are compatible under fusion and thereby reducing modality\-induced separation\. Crucially, the fusion module is discarded at inference, preserving the efficiency of standard dual\-encoder architectures while incurring training\-time overhead only\. Extensive experiments across pretraining scales from millions to billions of image\-\-text pairs show that ITO consistently outperforms strong baselines on classification, retrieval, and multimodal benchmarks\. Our analysis further reveals that beyond accuracy gains, training\-time fusion plays a stabilizing role in optimization, mitigating the late\-stage overfitting commonly observed in aggressive contrastive learning\.

## Can Linguistic Reasoning Vectors Enhance Multimodal Reasoning Ability?

**Authors:** Ziyi Wang; Li Li; Aolin Zhou; Yankun Shen; Liu Chonghan; Shuxia Lin; Xu Yang

**ID:** 155152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7uYUPiCWug>) | [PDF](<https://openreview.net/pdf?id=7uYUPiCWug>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155152>)

Most Vision\-Language Models \(VLMs\) are built by extending pretrained Large Language Models \(LLMs\) with visual modules and multimodal alignment\. However, this multimodal scaling often degrades the language\-side reasoning ability originally encoded in the base LLM\. While the base LLM retains usable reasoning ability after scaling, the aligned VLM itself cannot reliably access this ability\. Therefore, recovering degraded reasoning capability in VLMs may be more effective when using the base LLM as the source rather than relying on the VLM alone\. Motivated by this, we propose \*\*LIFT\*\* \(\*\*L\*\*anguage\-side reason\*\*i\*\*ng \*\*F\*\*acilitation and \*\*T\*\*ransfer\), a lightweight vector\-intervention method that transfers reasoning capability from the base LLM to the VLM without retraining the backbone\. LIFT defines \*\*Reasoning Vectors\*\* as answer\-token hidden\-state differences between a Reasoner path with an explicit reasoning trace and a Solver path without it, and injects these vectors into language\-side activations of the target VLM\. LIFT further supports learnable vector adaptation while keeping the VLM backbone frozen\. We evaluate LIFT on two VLMs across six reasoning benchmarks, comparing Reasoning Vectors extracted from the base LLM and from the aligned VLM under matched protocols\. Results show that LLM\-derived vectors consistently outperform VLM\-derived vectors, confirming that the base LLM is a more effective source for recovering reasoning\. LIFT partially recovers degraded reasoning through lightweight language\-side interventions\. Further analyses show that Reasoning Vectors influence intermediate reasoning behavior rather than merely altering final answers\.

## Which Way Did It Move? Diagnosing and Overcoming Directional Motion Blindness in Video LLMs

**Authors:** Jongseo Lee; Hyuntak Lee; Sunghun Kim; Sooa Kim; Jihoon Chung; Jinwoo Choi

**ID:** 153430 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LOIQXC7mpg>) | [PDF](<https://openreview.net/pdf?id=LOIQXC7mpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153430>)

Video Large Language Models \(Video\-LLMs\) have made rapid progress on temporal video understanding, yet many fail at a basic perceptual primitive: signed image\-plane motion direction\. On simple videos of a single object moving left, right, up, or down, most Video\-LLMs perform near chance, with above\-chance cases largely attributable to prediction biases rather than genuine direction understanding\. We call this failure directional motion blindness\. We localize the failure by tracing motion direction information through the Video\-LLM pipeline\. Motion direction remains linearly accessible from the vision encoder, projector, and LLM hidden states, but the readout fails to bind this signal to the correct verbal answer option, revealing a direction binding gap\. Although synthetic motion direction instruction tuning reduces this gap on the source domain, motion direction concept vector analysis shows that visual complexity weakens the signal magnitude and limits out\-of\-domain generalization\. We introduce MODIRECT, a dataset family for motion direction instruction tuning and evaluation, and DeltaDirect, a diagnosis\-driven, projector\-level objective that predicts normalized 2\-D motion vectors from adjacent\-frame feature deltas\. On MODIRECT\-SYNBENCH, instruction tuning with DeltaDirect improves motion direction accuracy from 25\.9% to 85\.4%\. On MODIRECT\-REALBENCH, DeltaDirect improves real\-world motion direction accuracy by 21\.9 points over the vanilla baseline without real\-world tuning data, while preserving standard video\-understanding performance\.

## ProCLIP: Progressive Vision\-Language Alignment via LLM\-based Embedder

**Authors:** Xiaoxing Hu; Kaicheng Yang; Ziqi Ye; Ziyang Gong; Qi Ming; Zonghao Guo; Yu Tian; Xiang An; Ziyong Feng; Xue Yang

**ID:** 151998 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WH8ZDT099q>) | [PDF](<https://openreview.net/pdf?id=WH8ZDT099q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151998>)

Contrastive Language\-Image Pre\-training \(CLIP\) is fundamentally limited by its 77\-token restriction, lack of multilingual capabilities, and coarse\-grained semantic representations\. While replacing CLIP’s native text encoder with a Large Language Model \(LLM\)\-based embedder offers a promising solution, direct, from\-scratch alignment can disrupt the semantic structures learned during pre\-training\. This often leads to degradation of cross\-modal knowledge and particularly impairs recognition capabilities in zero\-shot scenarios\. In this paper, we propose ProCLIP, a curriculum\-learning\-inspired progressive alignment framework designed to systematically bridge the LLM embedder and CLIP's visual space, unlocking CLIP's potential for long\-text, multilingual, and fine\-grained understanding\. Our framework operates in two stages: \(1\) Representation Inheritance, which distills CLIP's original text\-space knowledge into an LLM adapter to establish a robust initial vision\-language prior, and \(2\) Contrastive Tuning, which refines the cross\-modal alignment with self\-distillation regularization on the image encoder to further prevent catastrophic forgetting\. To maintain semantic and geometric consistency, we introduce instance\-level semantic and global structural alignment constraints throughout both stages\. Extensive experiments demonstrate that ProCLIP improves zero\-shot classification accuracy by 6\.8%\-\-13\.5% over existing LLM\-augmented baselines and achieves state\-of\-the\-art performance in diverse long\-text, multilingual, and fine\-grained cross\-modal retrieval tasks under comparable settings\.

## EVA: Evidence\-seeking Visual Agent for Hallucination\-Resistant Multimodal Reasoning

**Authors:** Ting Lei; Yu Chen; Yang Liu

**ID:** 148728 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vUqsQ4aoDb>) | [PDF](<https://openreview.net/pdf?id=vUqsQ4aoDb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148728>)

Hallucination remains a fundamental challenge in multimodal large language models \(MLLMs\), often stemming from unverified visual assumptions and reasoning processes that are weakly grounded in observable evidence\. Existing approaches attempt to mitigate hallucination through self\-reflection, multi\-agent debate, or counterfactual verification\. However, these methods remain largely opinion\-driven: they lack explicit verification of the visual understanding process and may fail when multiple agents share the same incorrect perceptual assumptions, leading to consistent yet hallucinated conclusions\. A promising direction is to augment MLLMs with external visual tools \(e\.g\., OCR and grounding models\) to acquire verifiable evidence\. However, effective tool\-augmented reasoning remains challenging due to two key failure modes: unreliable tool invocation, where models select inappropriate tools or produce incorrect parameters, and evidence\-\-reasoning inconsistency, where models ignore or contradict the acquired evidence when forming final predictions\. In this work, we propose EVA, an Evidence\-seeking Visual Agent that reframes multimodal reasoning as an explicit process of evidence acquisition and verification\. At the core of EVA is a unified evidence\-grounded execution pipeline designed to address the above challenges through two tightly coupled mechanisms\. First, we introduce \\textit\{Iterative Tool Replanning\}, which dynamically refines tool selection and parameters based on intermediate observations, improving the reliability of tool usage\. Second, we develop \\textit\{Evidence Consistency Verification\}, an answer validation mechanism that improves alignment between the final prediction and the collected evidence, mitigating evidence\-\-reasoning inconsistencies\. In addition, to balance robustness and efficiency, EVA incorporates \\textit\{Selective Evidence Routing\}, an adaptive fast\-\-slow reasoning strategy that determines when external evidence is necessary\. Visually straightforward queries are handled via direct reasoning, while complex or high\-risk cases trigger tool\-based evidence acquisition\. By jointly addressing how to reliably acquire evidence and how to use it consistently, EVA transforms multimodal reasoning from passive answer validation into explicit evidence\-backed decision making\. Experimental results demonstrate that EVA achieves significantly improved reasoning reliability over direct VLM inference and multi\-agent methods, while maintaining efficiency through selective tool invocation\. These findings highlight structured and adaptive evidence utilization as a practical paradigm for hallucination\-resistant multimodal reasoning\.

## From Seeing to Foreseeing: Unleashing LVLM Thinking in Dynamic Latent Space

**Authors:** Yuxuan Liang; Xu Li; Xiaolei Chen; Rui Zhu; Zhe Liu; Haotian Chen; Yi Zheng; Wenjuan Meng; Zhuolin He; Fan Shi; Xiangyang Xue

**ID:** 150171 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9WRKd8CYo>) | [PDF](<https://openreview.net/pdf?id=k9WRKd8CYo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150171>)

Although Large Vision\-Language Models \(LVLMs\) have achieved remarkable progress, complex visual reasoning remains challenging\. Existing approaches suffer from fundamental limitations: \*Thinking about Image\* mainly performs reasoning in text space, \*Thinking with Image\* relies on external tools to introduce additional visual evidence, and \*Latent Visual Reasoning\*, despite moving reasoning into latent space, still focuses largely on static visual modeling and lacks explicit characterization of temporal dynamics\. We therefore propose \*\*Dynamic Latent Visual Reasoning \(DLVR\)\*\*, a training framework that enables LVLMs to reason about dynamics in continuous latent space from only a static image\. We introduce Mahalanobis Novelty Token Selection and Novelty\-Adaptive Temporal Quantization to construct dynamic latent supervision from open\-source datasets, building DLVR\-SFT\-100K and DLVR\-RL\-4K\. We further develop a two\-stage SFT pipeline that first builds temporal grounding over explicit dynamic processes and then teaches the model to encode dynamic semantics and temporal structure into latent tokens\. Finally, we propose Contrastive Dynamic Latent Policy Optimization, which encourages latent trajectories to align with real dynamics while moving away from counterfactual ones\. DLVR empirically improves both dynamic\-centric and general visual reasoning, achieving an average gain of 10\.82% on BabyVision and a 10\.50% improvement on HRBench4K, demonstrating the promise of dynamic latent reasoning for LVLMs\.

## P$^3$\-VLM: A Point\-based Alternative for Grounded 3D Vision\-Language Models

**Authors:** Anna\-Maria Halacheva; Jan\-Nico Zaech; Sombit Dey; Luc V Gool; Danda Pani Paudel

**ID:** 151816 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XlVqVpPeMI>) | [PDF](<https://openreview.net/pdf?id=XlVqVpPeMI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151816>)

Examining existing benchmarks for grounding in 3D VLMs reveals a pervasive "semantic leakage" in the evaluation and prompting protocols: a heavy reliance on bounding boxes as spatial prompts or representation primitives\.     Because bounding boxes are highly informative of object categories, they introduce a shortcut for the models to neglect visual information during 3D VLM training\.     We demonstrate this with a "blind" LLM that, prompted only with the box coordinates, can perform surprisingly well\.    To further analyze this shortcut, we propose point\-based grounding prompting \- querying models with a single 3D point instead of a box\. Under this protocol, the accuracy of the blind LLM drops from $\\textbf\{36\.4\}$% to $\\textbf\{18\.0\}$% on ScanNet's Nr3D, and similarly degrades for 3D VLMs \(e\.g\. LL3DA\)\.        Building on this insight, we introduce $P^3$\-VLM, a novel tri\-pathway 3D VLM that supports point\-based prompts and achieves $\\textbf\{52\.1\}$% state\-of\-the\-art accuracy on location\-grounded captioning under this setting\. To achieve this, we redesign the architecture while keeping it detector\-free, scene\-centric, and suitable for 3D GS inputs\. $P^3$\-VLM utilizes three complementary pathways \(location\-, task\-, and context\-aware\), enabling strong reasoning about scenes without any bounding box dependencies\. The key benefit of point\-based learning is a consistent improvement across settings: $P^3$\-VLM achieves state\-of\-the\-art performance under point\-based grounding while also improving robustness, OOD generalization, and performance on ungrounded scene\-centric 3D VQA benchmarks, reflecting its reduced reliance on bounding\-box shortcuts and resulting stronger visual\-spatial reasoning\. Our source code and models will be made publicly available\.

## What MLLMs Learn about When they Learn about Multimodal Reasoning

**Authors:** Jiwan Chung; Neel Joshi; Pratyusha Sharma; Youngjae Yu; Vibhav Vineet

**ID:** 154858 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AMC9hxPW4v>) | [PDF](<https://openreview.net/pdf?id=AMC9hxPW4v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154858>)

Evaluation of multimodal reasoning models is typically reduced to a single accuracy score, implicitly treating reasoning as a unitary capability\. We introduce MathLens, a benchmark of textbook\-style geometry problems that exposes this assumption by operationally decomposing performance into perception, reasoning, and multimodal\-specific components\. Each problem is derived from a symbolic specification and accompanied by visual diagrams, text\-only variants, multimodal questions, and targeted perceptual probes, enabling controlled measurement of each component\. Using this decomposition, we show that common training strategies induce systematically different capability profiles that are invisible under aggregate accuracy\. Reinforcement learning primarily improves perceptual grounding and robustness to diagram variation, while textual SFT yields gains through reflective reasoning\. In contrast, as perception and reasoning improve, a growing fraction of remaining errors fall outside these components and are categorized as multimodal\-specific\. These results suggest that apparent progress in multimodal reasoning reflects shifting balances among subskills rather than uniform advancement, motivating evaluation beyond scalar accuracy\.

## Ledger: A Path\-Validated, Database\-Grounded Benchmark for Enterprise Web Agents

**Authors:** Xiao Yang; Mo Sha; Yiran Li; Chengjin Tian; Sheng Wang; Fangyuan Zhou; Feifei Li

**ID:** 139511\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139511

[Paper](<https://openreview.net/forum?id=LUGEM2rYcv>) | [PDF](<https://openreview.net/pdf?id=LUGEM2rYcv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139511>)

Web agents promise to automate consequential operations on enterprise web systems, yet the benchmarks used to evaluate them score correctness on surface\-level proxies: DOM/URL predicates, action\-trace matchers, or vision\-language verdicts on a closing screen\. These proxies are inadequate for enterprise resource planning \(ERP\) systems, where every action commits to a transactional ledger and the criterion of correctness is what the ledger now records, not what the page now renders\. We argue that ERP web operations should be evaluated against what a run actually wrote to the relational backend, with the server\-side operation trace recorded alongside the outcome to provide the audit provenance that enterprise governance requires\. We introduce Ledger, a path\-validated, database\-grounded benchmark for browser agents on a production\-grade open\-source ERP: 424 oracle\-certified task instances across 53 functional modules, scored by an Atomic Edit Set validator \(field\-level $F\_1$ against a PostgreSQL oracle, under a typed normalization function\) paired with a Canonical Operation Tracer \(server\-side instrumentation of the ERP’s JSON\-RPC dispatch\)\. Each episode runs under pg\_restore snapshot isolation; no language\-model judge is invoked; three formal guarantees \(score determinism, episode isolation, tracer completeness\) make scores auditable and exactly replayable\. A cross\-paradigm evaluation of seven contemporary browser agents shows Ledger discriminates architectures sharply, with task\-success rate spanning 81\.6% down to 13\.7% across the roster while long\-horizon enterprise workflows remain far from saturated\.

## SALART\-VQA: Diagnosing Whether VLMs Understand Salient Artifacts in Generated Images

**Authors:** Xiaoxiao Sun; Ruotian Zhang; Junzhe Huang; James Burgess; Serena Yeung\-Levy

**ID:** 139139\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139139

[Paper](<https://openreview.net/forum?id=iVvXeIwD1f>) | [PDF](<https://openreview.net/pdf?id=iVvXeIwD1f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139139>)

Vision\-language models \(VLMs\) are increasingly used to detect whether AI\-generated images contain visible artifacts, yet their ability to analyze such artifacts remains poorly understood\. A correct image\-level decision can still hide important failures: a model may correctly flag an artifact while relying on the wrong visual cue, selecting the wrong region, or describing a defect that the image does not support\. To evaluate these behaviors directly, we introduce SalArt\-VQA, a diagnostic benchmark for fine\-grained salient artifact understanding in AI\-generated images\. SalArt\-VQA contains 950 images and 3,681 human\-authored multiple\-choice questions spanning artifact images, matched real reference images, and paired generated reference images\. Four aligned question types evaluate presence detection, semantic localization, spatial grounding, and evidence\-grounded defect identification, while the reference splits test calibration and abstention when the annotated defect is absent\. Across 20 VLMs, SalArt\-VQA reveals failures that image\-level detection accuracy hides: the strongest model reaches 99\.37% detection recall on artifact images but answers all four artifact\-side questions correctly on only 53\.26% of images\. Comparing artifact images with defect\-absent references reveals a sensitivity–calibration tradeoff: sensitive models often make unsupported artifact claims, while conservative models avoid false alarms largely by missing real artifacts\. These results show that high artifact detection accuracy alone does not imply grounded artifact understanding\. SalArt\-VQA exposes these hidden failure modes and provides a fine\-grained evaluation of whether VLM artifact claims are supported by local visual evidence\.

## ViLo: LiDAR Localization with Vision\-Language Priors

**Authors:** Minghang Zhu; Jianshi Wu; Yuxin Guo; Wen Li; Penghui Shang; Sheng Ao; Cheng Wang

**ID:** 150312\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150312

[Paper](<https://openreview.net/forum?id=j4c2fgRf1E>) | [PDF](<https://openreview.net/pdf?id=j4c2fgRf1E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150312>)

LiDAR localization is a fundamental task in robotics and computer vision, aiming to estimate the global pose of point clouds\. Although Scene Coordinate Regression \(SCR\) has demonstrated state\-of\-the\-art performance in this field, standard SCR methods employ a monolithic network for uniform optimization across diverse scenes, which inevitably suffers from capacity interference in highly degraded scenes\. Recent research on Vision\-Language Models \(VLMs\) indicates that they can acquire rich scene understanding priors, providing the adaptive learning capabilities currently missing in localization networks\. In this paper, we propose ViLo, the first framework to integrate VLM priors into SCR to fundamentally enhance localization robustness\. Specifically, we design a temporally consistent key\-frame querying mechanism to extract open\-vocabulary degeneracy priors\. We then construct a dynamic prior\-guided Mixture\-of\-Experts \(MoE\) model for adaptive feature learning tailored to varying scenes\. Finally, to avoid additional computational overhead during inference, ViLo internalizes the VLM's scene understanding into the 3D backbone via cross\-modal distillation, enabling a lightweight, LiDAR\-only deployment\. Extensive experiments on the Oxford RobotCar and NCLT datasets demonstrate that ViLo significantly outperforms existing state\-of\-the\-art methods, reducing positional errors by impressive margins of 20% and and 51%, respectively\.

## Predicting the Needle in a Petabyte Scale Haystack: Open\-Vocabulary Event Anticipation in Satellite Imagery

**Authors:** Lekha Revankar; Mikhail Klassen; creon levit; Ash Hoover; Kavita Bala; Bharath Hariharan

**ID:** 150526\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150526

[Paper](<https://openreview.net/forum?id=hTQYPXMU4D>) | [PDF](<https://openreview.net/pdf?id=hTQYPXMU4D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150526>)

Satellite constellations now image the Earth daily, capturing the lifecycle of events from deforestation to urban construction\. Anticipating these events before completion enables timely intervention, yet existing systems cannot jointly identify \*where\* a change occurs, \*what\* it will become, and \*when\* it will finish across an open vocabulary\. Building such a model requires diverse event data, but events are like needles in a haystack, making manual annotation at global scale infeasible\. We address this problem by representing change as the vector difference between vision\-language model embeddings at distinct time points\. This arithmetic approach allows us to search for semantic transformations directly in the latent space, enabling \(1\) an automated data engine for global event discovery without manual annotation and \(2\) the largest global satellite event dataset to our knowledge, comprising 21,000\+ locations across 64\+ event types with \~2M images from PlanetScope and Sentinel\-2 spanning six continents, to train \(3\) a novel global\-scale event anticipation model\. Our model detects change with a 93\.5% max F1 score, outperforms baselines 3\.6$\\times$ on predicted event retrieval, and forecasts completion dates with a 3\-day median error, even nine months before completion\.

## Breaking Modality Heterogeneity in Low\-Bit Quantization for Large Vision\-Language Models

**Authors:** YI ZHONG; Haotong Qin; Xindong Zhang; Lei Zhang; Guolei Sun

**ID:** 153382\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153382

[Paper](<https://openreview.net/forum?id=LmpNnlBWG5>) | [PDF](<https://openreview.net/pdf?id=LmpNnlBWG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153382>)

Low\-bit post\-training quantization \(PTQ\) is a pivotal technique for deploying Vision\-Language Models \(VLMs\) on resource\-constrained devices\. However, existing PTQ methods often degrade VLMs' accuracy due to the heterogeneous activation distributions of text and vision modalities during quantization\. We find that this cross\-modal heterogeneity is distributed unevenly across channels: a small subset of channels contains most modality\-specific outliers, and these outliers typically reside in different channels for each modality\. Motivated by this, we propose SplitQ, a channel\-Splitting\-driven post\-training Quantization framework\. At its core, SplitQ introduces a novel Modality\-specific Outlier Channel Decoupling \(MOCD\) module that effectively isolates salient modality\-specific outlier channels with minimal overhead\. To further address the remaining cross\-modal distribution discrepancies, we design an Adaptive Cross\-Modal Calibration \(ACC\) module that employs dual lightweight learnable branches to dynamically mitigate modality\-induced quantization errors\.Extensive experiments on popular VLMs demonstrate that SplitQ significantly outperforms existing approaches across 6 popular multi\-modal datasets under all evaluated quantization settings, including W4A8, W4A4, W3A3, and W3A2\. Notably, SplitQ preserves 95\.3% of FP16 performance under the challenging W3A3 setting \(69\.5 vs\. 74\.3\), pushing the efficiency frontier for deploying advanced VLMs\.

## Multimodal AI Detection In Two Words

**Authors:** Daniel Fein; Arpita Singhal; Maneesh Agrawala; Maty Bohacek

**ID:** 148150\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148150

[Paper](<https://openreview.net/forum?id=zucJIrUwMl>) | [PDF](<https://openreview.net/pdf?id=zucJIrUwMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148150>)

AI\-generated text, images, audio, and video are now ubiquitous and difficult for humans to reliably identify as such, making scalable, automated detection a practical necessity\. Existing detectors, however, are fragmented along modality lines\-\-\-each typically relying on its own classifier head, dataset, and training pipeline\-\-\-and the recent line of explainable detectors learns its rationales from human annotations whose faithfulness degrades as generators improve\. We propose a unified method that addresses both issues by extending neologism learning from text generation steering to multimodal classification\. We add two tokens, &lt; REAL&gt; and &lt; AIGEN &gt;, to the vocabulary of an otherwise\-frozen multimodal LLM \(MLLM\) and train only their embedding rows \(on the order of 2d parameters, fewer than 0\.001% of the backbone\) so that the model's next\-token distribution under a paired prompt encodes the real\-vs\-AI\-generated decision\. Because all modalities are projected into a shared input embedding space, the same token pair applies across text, image, audio, and video without per\-modality heads, and a pair trained on a strict subset of modalities transfers to held\-out ones at test time\. The trained tokens further admit free\-form natural\-language descriptions of what &lt; AIGEN &gt; has come to mean, decoded from the same frozen backbone and never supervised during training; we validate their causal faithfulness via plug\-in evaluation\. Across standard text, audio, image, and video benchmarks, our method matches or exceeds dedicated, modality\-specific detectors and outperforms MLLM\-based explainable detectors out of distribution, despite training orders of magnitude fewer parameters and using no human\-annotated explanations\.

## SimVLA: Attributing Gains in VLA Models Through Controlled Ablation

**Authors:** Yuankai Luo; Woping Chen; Tong Liang; Zhenguo Li

**ID:** 152120\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152120

[Paper](<https://openreview.net/forum?id=VMuUVQecnd>) | [PDF](<https://openreview.net/pdf?id=VMuUVQecnd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152120>)

Vision\-Language\-Action \(VLA\) models often bundle architectural changes with different pretraining data, backbone scales, and optimization recipes, obscuring what actually drives progress\. We introduce SimVLA, a deliberately minimal VLA—a standard vision\-language backbone with a lightweight continuous\-action head—as a controlled testbed for this attribution problem\. Across LIBERO, CALVIN, WidowX, and Google Robot, one\-knob\-at\-a\-time ablations show that training dynamics are the largest measured driver, producing performance swings of $\\Delta$$\\approx$54\-89\\%, while task configuration and architecture have smaller effects under matched settings\. Despite using a small backbone and no additional large\-scale robot\-data VLA pretraining before benchmark\-specific training, SimVLA reaches 98\.6\\% average success on LIBERO, remains competitive across the other benchmarks, and transfers to held\-out real\-robot scenes\. These results suggest that simple, carefully controlled VLA baselines remain underexplored and provide a calibration point for future architectural claims within the VLM\-encoder plus lightweight\-head family\.

## Hidden Forgetting in Continual Multimodal Learning: When Accuracy Survives but Grounding Fails

**Authors:** Qianyu Chen; Canran Xiao; Runxuan Tang

**ID:** 153314\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153314

[Paper](<https://openreview.net/forum?id=MDf0kUD4oe>) | [PDF](<https://openreview.net/pdf?id=MDf0kUD4oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153314>)

Multimodal large language models must continually adapt to evolving tasks and domains, yet standard continual learning metrics mainly measure whether old answers remain correct, leaving the stability of multimodal grounding largely unexamined\. We study this overlooked failure mode and ask whether a continually adapted MLLM can preserve not only what it answers, but also how it uses visual, textual, OCR, chart, and document evidence\. We identify hidden evidence\-use forgetting, where answer accuracy is retained while the model silently shifts toward different or less grounded evidence channels, and propose RCL, a replay\-free reliance\-constrained continual learning framework\. RCL freezes the previous checkpoint as a behavioral reference, estimates teacher and student evidence\-reliance profiles through counterfactual channel interventions, and jointly optimizes task learning, prediction preservation, and reliance preservation without adding inference\-time cost\. Across CoIN, COAST, MCITlib, and an evidence\-sensitive multimodal stream, RCL consistently improves final performance and reduces forgetting over replay\-free, PEFT, routing, and memory\-assisted baselines, while substantially lowering modality reliance drift, dominant evidence flips, and hidden forgetting rates\. These results suggest that robust continual multimodal learning requires preserving the evidence path behind correct answers, not merely the answers themselves\.

## FedIBS: Federated Vision\-Language Adaptation via Intrinsic Bias Selection

**Authors:** Xiaoming Wu; Wei Wenyu; Xin Wang; Ming Yang

**ID:** 153075\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153075

[Paper](<https://openreview.net/forum?id=OBeuu8d4RS>) | [PDF](<https://openreview.net/pdf?id=OBeuu8d4RS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153075>)

Federated adaptation of large vision\-language models \(VLMs\) is appealing for privacy\-sensitive applications but must contend with client data heterogeneity, strict communication budgets, and on\-device inference constraints\. Recent methods predominantly introduce additive adaptation interfaces, such as learnable prompts or adapter modules, which attach extra trainable components to the frozen backbone, inflating both parameter counts and inference latency\. We challenge this additive paradigm and ask: can robust federated VLM adaptation be achieved through a compact intrinsic interface alone? We answer this question with \\textbf\{FedIBS\} \(Federated Intrinsic Bias Selection\), a module\-free framework that fine\-tunes only the biases in feed\-forward network projections\. FedIBS operates on existing backbone parameters and introduces zero additional inference cost\. To make such compact intrinsic adaptation viable under heterogeneous clients, we further propose a Fisher\-guided progressive masking mechanism that disentangles shareable and personalized bias coordinates\. Each client retains personalized coordinates locally and communicates only the shareable subset for aggregation, enabling sparse communication while preserving client\-specific adaptation\. Extensive experiments on diverse datasets and heterogeneity settings demonstrate that FedIBS consistently outperforms recent federated prompt\- and adapter\-based baselines in both personalization and generalization, all while achieving substantially lower communication cost\.

## A General Concept\-based Decomposition for Vision–Language Embeddings

**Authors:** Simone Alberto Peirone; Ortal Senouf; Francesca Pistilli; Giuseppe Averta; Pascal Frossard

**ID:** 151861\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151861

[Paper](<https://openreview.net/forum?id=XKwu7MhFTF>) | [PDF](<https://openreview.net/pdf?id=XKwu7MhFTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151861>)

Vision\-language models are designed to capture the compositional structure of the world through multi\-modal alignment; however, it remains unclear whether their representations truly align with the way a human would naturally describe the same visual input\. Prior works attempt to decompose visual embeddings into their concept\-level contributions, but their instance\-level optimization is inherently local and does not capture the model’s global semantic structure, which is essential for compositional generalization across different inputs, tasks and domains\. We introduce GRACE, a method that learns this concept\-based structure at the feature space level, producing semantic and general concept decompositions\. To achieve this, we propose a novel training objective that preserves the geometric relations of different samples in the concept space, enabling a better understanding of how concepts compose and relate to each other\. We validate GRACE on several image and video benchmarks, showing that its concept decomposition is aligned with human perception and achieves faithful decompositions across different tasks and domains\. With minimal overhead, GRACE makes existing Vision\-Language Models more interpretable, while preserving most of their original performance\.

## ActionUNet: Improving Robustness of VLA Models with Efficient Multi\-scale Fine\-tuning

**Authors:** Di Zhu; Ziheng Yan; Fang Wan

**ID:** 149076\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149076

[Paper](<https://openreview.net/forum?id=t3p8yqEZl7>) | [PDF](<https://openreview.net/pdf?id=t3p8yqEZl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149076>)

Vision\-Language\-Action \(VLA\) models have shown great promise for robotic manipulation by mapping multi\-modal semantics to physical actions\. However, this mapping inherently struggles to align these coarse\-grained semantics with fine\-grained temporal execution\. It leaves VLA models with limited generalization and insufficient robustness in cluttered environments\. To overcome this issue, we propose ActionUNet, an efficient multi\-scale fine\-tuning framework that enhances pre\-trained VLA models with minimal computational cost\.  ActionUNet first constructs a lightweight  temporal U\-Net within the temporal\-aligned action feature space to fuse hierarchical structural priors, effectively bridging the scale gap between semantics and temporal executions\.  Recognizing that multi\-scale modeling can disrupt microscopic temporal continuity and cause mechanical oscillations, ActionUNet then employs a conditional SIREN as a continuous action decoder\. Equipped with explicit second\-order smoothness constraints, this decoder guarantees temporal continuity and reduces high\-frequency motion jitter\.  By smoothing temporal discontinuities from multi\-scale fusion, this continuous formulation  reduces mechanical execution failures while preserving the base VLA model's generalization and manipulation robustness\. Extensive experiments on RoboTwin 2\.0 and LIBERO\-Plus benchmarks, together with real\-world hard evaluations, demonstrate that ActionUNet significantly improves $\\pi\_\{0\.5\}$ success rates by absolute 9\.8\\%, 6\.1\\%, and 11\.4\\%, respectively, while also generalizing to the regression\-based OpenVLA\-OFT backbone, highlighting its effectiveness and efficiency as a fine\-tuning strategy\. Code will be made publicly available upon acceptance\.

## PRISM: Spectral Pruning and Reconstruction for Parameter\-Efficient Model Merging of MLLMs

**Authors:** Wuxuan Shi; Haotian Chen; He Li; Qiang Yang; Mang Ye

**ID:** 149785 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nK1JAuXjwX>) | [PDF](<https://openreview.net/pdf?id=nK1JAuXjwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149785>)

_Abstract unavailable from the accessible public sources._

## VidVec: Unlocking Video MLLM Embeddings for Video\-Text Retrieval

**Authors:** Issar Tzachor; Dvir Samuel; Rami Ben\-Ari

**ID:** 153091 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O2hhgaHNkq>) | [PDF](<https://openreview.net/pdf?id=O2hhgaHNkq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153091>)

_Abstract unavailable from the accessible public sources._

## Say the Same, Act Differently: Text\-Orthogonal Action Subspaces in Reasoning Vision\-Language\-Action Models

**Authors:** Zihao Feng; Qingzhao Zhang; Chunyu Xia; Bo Yu; Zhuoqing Morley Mao; Ramesh Govindan

**ID:** 154708 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BcZ4hfwBik>) | [PDF](<https://openreview.net/pdf?id=BcZ4hfwBik>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154708>)

_Abstract unavailable from the accessible public sources._

## WorldMemArena: Evaluating Multimodal Agent Memory Through Action–World Interaction

**Authors:** Chengzhi Liu; Yuzhe YANG; Sophia Xiao Pu; Yepeng Liu; Lin Long; Yichen Guo; Nuo Chen; Zhaotian Weng; Yiheng Zhong; Angxiao Zong; Elena Kochkina; Simerjot Kaur; Charese Smiley; Xiaomo Liu; James Zou; Sheng Liu; Yuheng Bu; Songyou Peng; Xin Wang

**ID:** 139051\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139051

[Paper](<https://openreview.net/forum?id=o06F424mDf>) | [PDF](<https://openreview.net/pdf?id=o06F424mDf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139051>)

_Abstract unavailable from the accessible public sources._

## Explaining Cross\-Modal Model Behavior with Gradient\-Estimation\-Based Feature Interaction

**Authors:** Yi Cai; Xinpeng Li; Gerhard Wunder

**ID:** 150190\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150190

[Paper](<https://openreview.net/forum?id=k3fR86JLGj>) | [PDF](<https://openreview.net/pdf?id=k3fR86JLGj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150190>)

Multi\-modal machine learning has become a dominant paradigm for building large\-scale models that integrate information across heterogeneous modalities and achieve unprecedented representational capabilities\. However, the multi\-modal nature of such models introduces unique challenges for explainability\. Specifically, the standard feature attribution task considers only individual feature contributions\. While solutions of this kind can be adapted to operate on each modality, such first\-order explanations are insufficient to characterize cross\-modal feature interactions, which are essential for understanding model behavior involving cross\-modal alignment\. To bridge the gap, this paper studies higher\-order feature interactions in multi\-modal settings and proposes Gradient\-Estimation\-Based Feature Interaction \(GEFI\)\. GEFI is derived from the proxy gradient estimation framework, and we establish its theoretical equivalence to the Shapley Interaction Index at arbitrary orders\. Beyond the general theory, we instantiate GEFI\-PM for CLIP\-like models by exploiting their dual\-encoder architecture\. The resulting formulation enables the efficient estimation of interactions between visual and textual features\. Compared to existing methods for revealing cross\-modal interactions, which generally operate on fixed image patches, GEFI offers fine\-grained pixel\-level interactions while maintaining computational efficiency, yielding more expressive results\.

## ControlSVG: Exploring Controllable SVG Generation with Autoregressive Models

**Authors:** Qirui Li; Teng Hu; Ran Yi; Paul L Rosin; Yu\-Kun Lai

**ID:** 151441\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151441

[Paper](<https://openreview.net/forum?id=afzeP5GBOh>) | [PDF](<https://openreview.net/pdf?id=afzeP5GBOh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151441>)

Autoregressive \(AR\) models have reformulated Scalable Vector Graphics \(SVG\) generation as next\-token prediction, demonstrating remarkable potential in text\-to\-SVG tasks\. However, controllable SVG generation guided by spatial signals \(e\.g\., sketches or scribbles\) remains largely unexplored within AR models\. While a natural approach, inspired by controllable image generation, is to adapt methods like Condition Prefilling or Conditional Decoding, they fall short in SVG generation\. To address these challenges, we introduce ControlSVG, a versatile and effective framework tailored for integrating precise spatial controls into autoregressive SVG generation\. Firstly, we propose a Visual\-Feedback Conditioning mechanism that constructs a “See\-and\-Draw" loop\. This design mitigates cross\-modal drift and ensures long\-range consistency\. Secondly, we explore spatially aware learning objectives that explicitly bridge discretized SVG tokens with their absolute 2D spatial coordinates, enhancing robustness against coordinate deviations during sequential generation\. Extensive experiments on Canny\-Edge\-to\-SVG generation demonstrate that ControlSVG outperforms existing baselines, achieving superior spatial alignment and high\-quality SVG\. We further provide preliminary validations on real human\-drawn scribbles and extend the framework to scribble\-to\-SVG and image\-to\-SVG settings, suggesting its potential applicability beyond Canny\-based control\.

## FusionNeXt: Sequence\-First 3D Multi\-Modal Fusion in the Era of LLMs

**Authors:** Yu Hong; Xiaosong Jia; Songbur Wong; Yanhao Liu; Wenlong Liao; Tao He; Junchi Yan

**ID:** 150560\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150560

[Paper](<https://openreview.net/forum?id=hEoPVPh3pb>) | [PDF](<https://openreview.net/pdf?id=hEoPVPh3pb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150560>)

Modern LLMs/VLMs have largely converged to a unified architecture: representing heterogeneous inputs as a single token sequence and processing it with a deep stack of generic operators such as attention and feed\-forward layers\. This sequence\-first interface simplifies system designs and thus enables extensive algorithmic and hardware optimization, making it a compelling blueprint for modern model development\. In contrast, 3D multi\-modal fusion models still rely on complex and specialized designs such as dense feature representations, sparse 3D convolutions, deformable attention, view transformations, etc\. In this paper, we ask: \\textbf\{Can 3D multi\-modal fusion embrace the same design path as modern LLMs/VLMs and benefit from their mature and rapidly evolving ecosystem?\} We answer this affirmatively and propose \\textbf\{FusionNeXt\}, a modern multi\-modal fusion paradigm that \(i\) unifies camera and LiDAR features into a shared token representation, \(ii\) serializes tokens into locality\-preserving 1D sequences, and \(iii\) performs feature fusion using a deep stack of vanilla LLM/VLM\-style blocks\-\-\-FlashAttention, pre\-norm residuals, SwiGLU FFNs, etc\. The proposed paradigm enables standard sequence modeling tools to be applied directly to 3D multi\-modal fusion, resulting in fast inference, strong performance, and generalization across tasks\. FusionNeXt achieves state\-of\-the\-art \(SOTA\) results on the nuScenes 3D detection and Occ3D occupancy benchmarks while delivering high inference throughput, suggesting a scalable direction for 3D perception\. We will open\-source our code\.

## Prompt\-Driven Exploration

**Authors:** Sunshine Jiang; John Marangola; David Zhang; Raghuram Kowdeed; Ruiyang Luo; Nitish Dashora; Richard Li; Pulkit Agrawal; Zhang\-Wei Hong

**ID:** 150317\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150317

[Paper](<https://openreview.net/forum?id=izyPP7UWKU>) | [PDF](<https://openreview.net/pdf?id=izyPP7UWKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150317>)

Reinforcement learning is the standard way to post\-train foundation models, but progress is bottlenecked by exploration\. The usual approach perturbs sampled actions, which only moves the policy locally, yet hard tasks often require strategies very different from what the policy currently does\. This is especially problematic when fine\-tuning starts from a weak policy with low success rates and little useful behavior to refine\. Many foundation\-model policies, however, are conditioned on a natural\-language prompt, and varying the prompt produces qualitatively different behaviors from the same policy\. This suggests a different angle: perturb the prompt instead of the action\. Our key insight is that a distribution over prompts induces a distribution over policies, with structure already shaped by the pretrained language prior\. This turns exploration into a familiar problem: posterior sampling, where we maintain a belief over which prompts elicit success, sample from it to drive rollouts, and update it from what we observe\. A vision\-language model fits this role naturally, both proposing plausible prompts and reasoning about past rollouts to shift the distribution toward ones more likely to succeed\. We call this Prompt\-Driven Exploration \(PDE\)\. On hard tasks where action\-space exploration fails to make progress, PDE bootstraps from nearly zero success to high success rates with far fewer environment interactions\.

## MMSkills: Towards Multimodal Skills for General Visual Agents

**Authors:** Kangning Zhang; Shuai Shao; Wenxiang Jiao; Qingyao Li; Jianghao Lin; Lingyue Fu; Shijian Wang; Yuan Lu; Weiwen Liu; Weinan Zhang; Yong Yu

**ID:** 148831\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148831

[Paper](<https://openreview.net/forum?id=up4CskJQ0w>) | [PDF](<https://openreview.net/pdf?id=up4CskJQ0w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148831>)

Reusable skills have become a core substrate for improving agent capabilities, yet most existing skill packages encode reusable behavior primarily as textual prompts, executable code, or learned routines\. For visual agents, however, procedural knowledge is inherently multimodal: reuse depends not only on what operation to perform, but also on recognizing the relevant state, interpreting visual evidence of progress or failure, and deciding what to do next\. We formalize this requirement as \\emph\{multimodal procedural knowledge\} and address three practical challenges: \(I\) \\textbf\{what\} a multimodal skill package should contain; \(II\) \\textbf\{where\} such packages can be derived from public interaction experience; and \(III\) \\textbf\{how\} agents can consult multimodal evidence at inference time without excessive image context or over\-anchoring to reference screenshots\. We introduce \\emph\{MMSkills\}, a framework for representing, generating, and using reusable multimodal procedures for runtime visual decision making\. Each MMSkill is a compact, state\-conditioned package that couples a textual procedure with runtime state cards and multi\-view keyframes\. To construct these packages, we develop an agentic trajectory\-to\-skill Generator that transforms public non\-evaluation trajectories into reusable multimodal skills through workflow grouping, procedure induction, visual grounding, and meta\-skill\-guided auditing\. To use them, we introduce a branch\-loaded multimodal skill agent: selected state cards and keyframes are inspected in a temporary branch, aligned with the live environment, and distilled into structured guidance for the main agent\. Experiments across GUI and game\-based visual\-agent benchmarks show that MMSkills consistently improve both frontier and smaller multimodal agents, suggesting that external multimodal procedural knowledge complements model\-internal priors\. The code is accessible in \\href\{https://anonymous\.4open\.science/r/MMSkills\}\{https://anonymous\.4open\.science/r/MMSkills\}\.

## SMMBench: A Benchmark for Source\-Distributed Multimodal Agent Memory

**Authors:** Huacan Chai; YUKAI WANG; Yingxuan Yang; Dan Peng; Yuanyi Song; Zhihui Fu; Jun Wang; Weiwen Liu; Jianghao Lin; Weinan Zhang

**ID:** 139761\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139761

[Paper](<https://openreview.net/forum?id=6FddqZ3fYX>) | [PDF](<https://openreview.net/pdf?id=6FddqZ3fYX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139761>)

Existing benchmarks for multimodal memory reasoning largely evaluate systems within pre\-assembled contexts, but under\-evaluate whether agents can use evidence distributed across independently originated sources\. We argue that source\-distributed memory composition is an important and under\-examined bottleneck in multimodal agent memory, especially when relevant evidence is fragmented across heterogeneous artifacts such as conversations, profiles, screenshots, tables, images, and documents\. To address this gap, we introduce Source\-distributed Multimodal Memory Benchmark, which measures whether agents can retrieve, align, and compose multimodal evidence scattered across multiple sources rather than reason within a single curated context\. SMMBench evaluates four core capabilities: \(1\) cross\-source multimodal reasoning; \(2\) conflict resolution; \(3\) preference reasoning; \(4\) memory\-grounded action prediction\. The benchmark contains $1,877$ samples grounded in $264$ sources\. Experiments on representative memory\-style and retrieval\-based baselines show that current systems still struggle on these capabilities, positioning source\-distributed multimodal memory as an important and still under\-evaluated challenge for multimodal agents\. Our data and code are available at https://anonymous\.4open\.science/r/NeurIPSBenchmarksW8kP6gV/\.

## NeuronEye: Query\-Guided Visual Concept Activation for Vision\-Language Reasoning

**Authors:** Ruiyu Yan; Bowen Chen; Shaowen Wan; Lin Zhao

**ID:** 155426\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155426

[Paper](<https://openreview.net/forum?id=5kvIkFj6Si>) | [PDF](<https://openreview.net/pdf?id=5kvIkFj6Si>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155426>)

Current vision\-language models \(VLMs\) encode visual information in dense hidden states where object identity, spatial layout, and local attributes are implicitly entangled rather than explicitly disentangled, limiting their ability to isolate and modulate the specific visual evidence required by a given language query\. Inspired by sparse population coding and top\-down modulation in biological vision, we introduce NeuronEye, a plug\-in framework that constructs a sparse, concept\-level neuron vocabulary from intermediate VLM representations and selectively activates query\-relevant visual concepts during inference\. NeuronEye decomposes vision\-token states into an overcomplete sparse basis organized by concept\-level clusters, uses the language query to activate relevant clusters and localize the patches where selected concepts are expressed, and injects the focused evidence back into vision tokens\. A complementary suppression mechanism attenuates dominant perceptual directions to preserve weaker but relevant cues\. All operations run in a single forward pass over a frozen VLM backbone\. On Qwen2\.5\-VL\-7B, NeuronEye raises CV\-Bench overall accuracy by \+3\.1 with gains of \+9\.5 on Distance, and improves BLINK Multi\-view by \+8\.3, with similar trends on LLaVA\-1\.6\-7B\. These results suggest that sparse neuron vocabularies can serve not only as post\-hoc interpretability tools but also as active interfaces for concept\-level visual reasoning\.

## Rethinking Projector Training in Multimodal LLMs

**Authors:** Fabian Gröger; Naël Ouerghemi; Shuo Wen; Maria Brbic

**ID:** 153944\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153944

[Paper](<https://openreview.net/forum?id=HObX41utGv>) | [PDF](<https://openreview.net/pdf?id=HObX41utGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153944>)

Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image\-caption datasets, followed by joint training of the full multimodal model\. Despite its widespread use, the role of the projector training stage remains poorly understood\.  Does it learn fine\-grained visual\-language correspondences, or mainly maps visual features into a compatible input space for the language model? We find that \(i\) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and \(ii\) projectors trained on different datasets can be linearly interpolated while largely preserving performance\. These results suggest that projector training acts primarily as a coarse alignment within a large solution space\. Motivated by these findings, we propose PORTAL, a training\-free projector initialization that requires neither paired image\-caption data nor gradient\-based optimization, but only per\-modality summary statistics\. PORTAL computes an optimal\-transport\-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, enabling completely skipping projector pretraining\. Despite using no paired data, while the standard approach relies on 0\.5M image–caption pairs, PORTAL matches the default trained pipeline across six LLM backbones, two vision encoders, and 16 benchmarks, outperforming it in $3$ of $7$ \(vision, LLM\) settings, and remaining within $1\.6$ average points across all other settings\.

## SenseBench: A Benchmark for Remote Sensing Low\-Level Visual Perception and Description in Large Vision\-Language Models

**Authors:** Chen Zhong; Xiao An; Jiaxing Sun; Zihan Gui; Guangyi Yang; Wei He

**ID:** 139610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FZRAoMbDvR>) | [PDF](<https://openreview.net/pdf?id=FZRAoMbDvR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139610>)

Low\-level visual perception underpins reliable remote sensing \(RS\) image analysis, yet current image quality assessment \(IQA\) methods output uninterpretable scalar scores rather than characterizing physics\-driven RS degradations, deviating markedly from the diagnostic needs of RS experts\. While Vision\-Language Models \(VLMs\) present a compelling alternative by delivering language\-grounded IQA, their visual priors are heavily biased toward ground\-level natural images\. Consequently, whether VLMs can overcome this domain gap to perceive and articulate RS artifacts remains entirely unverified\. To bridge this gap, we propose SenseBench, the first dedicated diagnostic benchmark for RS low\-level visual perception and Description\. Driven by a physics\-based hierarchical taxonomy that unifies both no\-reference and reference\-based paradigms, SenseBench features over 10K meticulously curated instances across 6 major and 22 fine\-grained RS degradation categories\. Specifically, two complementary protocols are designed for evaluation: objective low\-level visual perception and subjective diagnostic description\. Comprehensive evaluation of 23 state\-of\-the\-art VLMs reveals not only skewed domain priors and multi\-distortion collapse, but also fluency illusion and a perception\-description inversion effect\. We hope SenseBench provides a robust evaluation testbed and high\-quality diagnostic data to advance the development of RS VLMs in low\-level perception\. Code and datasets are available at \[here\]\(https://github\.com/Zhong\-Chenchen/SenseBench\)\.

## SeoulMMOD: A Large\-Scale Multimodal Origin\-Destination Flow Benchmark

**Authors:** Taeyoung Yu; Seonbin Jo; Jiwon Kim; Junyoung Byun

**ID:** 139708 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Odwt5ID8o>) | [PDF](<https://openreview.net/pdf?id=9Odwt5ID8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139708>)

Origin\-destination \(OD\) flow forecasting supports decisions about where and how many people move through a city\. Most existing public OD benchmarks provide only a partial view of citywide mobility, covering a single transport service or at most two modes\. With partial mode coverage, observed demand changes are difficult to separate into shifts across transport modes and changes in total travel\. We introduce SeoulMMOD, a large\-scale public benchmark for citywide multimodal mobility in Seoul\. SeoulMMOD provides three years of hourly OD flows estimating total mobility for 6 urban travel modes across 25 districts and 426 sub\-districts, together with travel\-time, travel\-distance, calendar, rainfall, and point\-of\-interest \(POI\) signals\. Using SeoulMMOD, we benchmark 14 forecasting baselines under a common protocol and study spatial scaling, joint training versus training one model per mode, and cross\-year generalization\. Results show that several spatio\-temporal models that work at district level do not scale to sub\-district OD forecasting, and that naive joint multi\-mode training does not consistently improve accuracy\. Together, the dataset and benchmark establish a reproducible testbed for city\-scale multi\-mode OD forecasting across multiple years\. Project page: https://anonymous\.4open\.science/r/SeoulMMOD

## TwinPrune: Density\-Aware Two\-Phase Token Pruning for Vision\-Language Models

**Authors:** Kai Liu; Anqi Li; Junxian Li; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 151130 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cmNvJykWg5>) | [PDF](<https://openreview.net/pdf?id=cmNvJykWg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151130>)

_Abstract unavailable from the accessible public sources._

## Elephant in the Fridge: Constant\-Memory Frame Packing for Long Video Understanding

**Authors:** Shuo Gao; Chenhao Zheng; Jason Ren

**ID:** 153957 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HHDoc7LvR2>) | [PDF](<https://openreview.net/pdf?id=HHDoc7LvR2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153957>)

_Abstract unavailable from the accessible public sources._

## Biomedical Acquisition\-induced Style Shifts as Mixture Shifts: Style\-aware Mixture\-of\-Experts Multimodal Prompt Learning

**Authors:** Pingyi Miao; Xianlai Chen; Ying An; Yunbo Wang; Linan Ren; Yuxin Peng

**ID:** 152391 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TRuGgl9w1X>) | [PDF](<https://openreview.net/pdf?id=TRuGgl9w1X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152391>)

_Abstract unavailable from the accessible public sources._

## What to Perturb, How to Propagate: A Graph\-Guided Transferable Attack on VLP Models

**Authors:** Yongjae Kim; Sungbin Park; Hoon Ji; Sukmin Yun; Yeonjoon Lee

**ID:** 150201 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jz1A8ZZE3W>) | [PDF](<https://openreview.net/pdf?id=jz1A8ZZE3W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150201>)

_Abstract unavailable from the accessible public sources._

## Anatomy\-Activated Mixture\-of\-Experts for 3D Medical Vision\-Language Pre\-training

**Authors:** Szymon Płotka; Gizem Mert; Pedro R\. A\. S\. Bassi; Wenxuan Li; Zongwei Zhou; Anna M Marcinkiewicz; Wiktoria Romańczyk; Jarosław B Ćwikła; Łukasz Struski; Ewa Szczurek; Jacek Tabor; Arkadiusz Sitek

**ID:** 151182 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cOJs7gDYiz>) | [PDF](<https://openreview.net/pdf?id=cOJs7gDYiz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151182>)

_Abstract unavailable from the accessible public sources._

## MM\-DyGraph: A Dataset, Benchmark, and Model for Multimodal Dynamic Graphs

**Authors:** Zongyuan Wu; Pengjie Wang; Lingshan Chen; Tianhang Wan; Yuan Meng; Xin Wang; Ling Feng; Wenwu Zhu

**ID:** 139855 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0G5dV4PwJv>) | [PDF](<https://openreview.net/pdf?id=0G5dV4PwJv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139855>)

_Abstract unavailable from the accessible public sources._

## InfiniteVL: A Systematic Approach to Highly\-Efficient, Ultra\-Long Multimodal Understanding

**Authors:** Hongyuan Tao; Bencheng Liao; Shaoyu Chen; haoran yin; Qian Zhang; Wenyu Liu; Xinggang Wang

**ID:** 149028 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tNrFDjV59O>) | [PDF](<https://openreview.net/pdf?id=tNrFDjV59O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149028>)

_Abstract unavailable from the accessible public sources._

## FACETS: Cross\-Granularity Vision\-\-Language Modeling for 3D Anomaly Detection

**Authors:** Yuchuan Li; Jae\-Mo Kang; Il\-Min Kim

**ID:** 154063 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GU2KPq4O7s>) | [PDF](<https://openreview.net/pdf?id=GU2KPq4O7s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154063>)

_Abstract unavailable from the accessible public sources._

## StreamOV: Streaming Omni\-Video Understanding via Evidence\-Guided Memory and Response Triggering

**Authors:** Ming Xie; Zizheng Huang; Xudong Tan; Chao Wang; Xiangyu Zeng; Wenxiao Wu; Tao Chen; Limin Wang; Yanwei Fu

**ID:** 150068 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kzU6tZ4CEa>) | [PDF](<https://openreview.net/pdf?id=kzU6tZ4CEa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150068>)

_Abstract unavailable from the accessible public sources._

## STEMFly: Enhancing UAV Vision\-Language Navigation via Sensor Grounding, Temporal Diversity and Episodic Memory

**Authors:** Guangdao Zhu; Xu Chen; Shuhong Hou; Weili Guan; Bin Chen; Yaowei Wang; Xiang Deng

**ID:** 154649 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C2NDxyE2b4>) | [PDF](<https://openreview.net/pdf?id=C2NDxyE2b4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154649>)

Despite rapid progress in indoor vision\-and\-language navigation \(VLN\), its aerial counterpart remains significantly more challenging and underexplored\. In this setting, unmanned aerial vehicles \(UAVs\) must interpret free\-form instructions and traverse kilometer\-scale outdoor environments\. Although recent UAV\-VLN methods have shown promising results, they often fail to fully exploit contextual signals across modality, time, and prior experience\. This limitation appears in three aspects: the predominant reliance on RGB\-only inputs, the use of discrete frame inputs that fail to capture temporal dynamics, and the absence of episodic memory, resulting in unreliable termination decisions\. To this end, we propose $\\textbf\{STEMFly\}$, a unified framework grounded in $\\textbf\{S\}$ensor signals, $\\textbf\{T\}$emporal diversity, and $\\textbf\{E\}$pisodic $\\textbf\{M\}$emory\. STEMFly comprises three components\. First, Sensor\-Augmented Prompt Injection \(SAPI\) incorporates multi\-modal sensor signals as semantically grounded language prompts that can be interpreted by the language model\. Second, Temporal\-Diversity Frame Selection \(TDFS\) constructs a temporally informative observation sequence via entropy\-guided frame sampling\. Third, Memory\-Augmented Success Verification \(MASV\) improves termination reliability by validating navigation outcomes through episodic memory retrieval\. In addition to methodological contributions, we identify and rectify systematic annotation inconsistencies in the OpenUAV benchmark, releasing a revised evaluation protocol\. On the original OpenUAV benchmark, STEMFly outperforms the prior state\-of\-the\-art TravelUAV, achieving absolute improvements of 8\.26\\% in Success Rate \(SR\) and 6\.70\\% in Success weighted by Path Length \(SPL\), while reducing Navigation Error \(NE\) by 9\.55 meters\. Similar consistent gains are also observed on our rectified benchmark\. These results demonstrate that holistic contextual grounding, which integrates multi\-modal sensing, temporal modeling, and episodic memory, is crucial for improving UAV\-VLN performance\.

## ScAn\-Bench: Evaluating Scaling Analysis Methodology

**Authors:** Artin Sermaxhaj; Nastaran Alipour; Donat Sinani; Johannes Hog; Neeratyoy Mallik; Steven Adriaensen; Jenia Jitsev; Danny Stoll

**ID:** 139629 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EQd9HNVF60>) | [PDF](<https://openreview.net/pdf?id=EQd9HNVF60>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139629>)

Recent progress in machine learning is driven by large\-scale foundation models, where scaling laws and finding optimal scaling prescriptions for architecture, data, and hyperparameters are key in advancing the state\-of\-the\-art\. Therefore, it is surprising that no systematic study evaluates the methodology to obtain scaling laws and prescriptions across different model types\. To shed light on this crucial blind spot and facilitate future research, we introduce the surrogate benchmarks ScAn\-Bench\-LLM and ScAn\-Bench\-VLM based on 2875 and 3853 checkpoints of language and vision\-language model pipelines\. On our benchmarks, we perform the first systematic evaluation of both data acquisition and extrapolation methodology for scaling analysis across different data modalities\.

## Reliability\-Budgeted Edge–Cloud Adaptation for Continual Multimodal Dehazing on UAV

**Authors:** Junwei Zhao; Qianchun Luo; Jie Wu

**ID:** 154996 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9K2Ya77HTs>) | [PDF](<https://openreview.net/pdf?id=9K2Ya77HTs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154996>)

UAV dehazers trained offline degrade during long\-duration flights as haze density and spatial structure evolve over time\. We formulate UAV dehazing as a closed\-loop edge\-cloud adaptation problem with an explicit reliability budget governing update frequency\. The onboard model couples a frozen anchor head with a cloud\-adaptive head, evaluated by a joint critic integrating a physics\-based rehaze constraint and a scale\-aligned infrared\-edge consistency term to suppress degenerate adaptations\. Our main contribution is a sequential upload criterion based on a non\-negative e\-process, yielding anytime\-valid false\-upload control for streams that satisfy conditional calibration, without requiring frame independence or exchangeability\. The cloud updates only the adaptive head from uploaded segments, while the UAV accepts or rejects returned parameters through a shadow\-window sign test with an acceptance budget\. Experiments on five UAV datasets show consistent improvements under diverse haze shifts\. Code will be publicly released\.

## CoLVR: Enhancing Exploratory Latent Visual Reasoning via Contrastive Optimization

**Authors:** Ziyang Ding; Linjian Meng; Yiming Wu; YuHan Li; Yuhao Liu; Zhen Zhao

**ID:** 154180 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FdggkQpSHq>) | [PDF](<https://openreview.net/pdf?id=FdggkQpSHq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154180>)

Due to the potential for exploratory reasoning of Latent Visual Reasoning, recent works tend to enable MLLMs \(Multimodal Large Language Models\) to perform visual reasoning by propagating continuous hidden states instead of decoding intermediate steps into discrete tokens\. However, existing works typically rely on hard alignment objectives to force latent representations to match predefined visual features, thereby severely limiting the exploratory of latent reasoning process\. To address this problem, we propose CoLVR \(Contrastive Optimization for Latent Visual Reasoning\)\. To obtain a more exploratory visual reasoning, CoLVR introduces a latent contrastive training framework\. Firstly, CoLVR learns diverse and exploratory representations with a latent contrastive objective guided by angle\-based perturbation, which expands the semantic latent space and avoids over\-constrained embedding\. Then, CoLVR employs a latent trajectory contrastive reward for RL \(Reinforcement Learning\) post\-training to enable fine\-grained optimization of latent visual reasoning process and thus fostering diverse reasoning behaviors\. Experiments demonstrate that CoLVR significantly enhances the exploratory capability of latent representations, achieving average improvements of 5\.83% on VSP and 8\.00% on Jigsaw, while also outperforming existing latent models on out of domain benchmarks, with a 3\.40% gain on MMStar\.

## Reflection Anchors for Propagation\-Aware Visual Retention in Long\-Chain Multimodal Reasoning

**Authors:** Xuan Gong; HanBo Huang; Hao Zheng; Yiran Zhang; Wenbin Dai; Weishu Zhao; Shiyu Liang

**ID:** 148600 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wXHjf6ebtj>) | [PDF](<https://openreview.net/pdf?id=wXHjf6ebtj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148600>)

Long chain\-of\-thought \(CoT\) reasoning improves large vision–language models, but visual information often fades during generation, limiting long\-horizon multimodal reasoning\. Existing methods either re\-inject vision at inference or train policies for stronger grounding, but where to intervene relies on perception heuristics rather than principled gain analysis, and how local visual influence propagates remains implicit\. We study this problem from an information\-theoretic standpoint and derive a lower bound on the downstream visual gain of a one\-step intervention, which suggests two factors: local branching room \(token entropy\) and downstream visual propagation potential \(suffix divergence from a vision\-marginalized reference\)\.  Guided by this analysis, we propose reflection\-anchor policy optimization \(RAPO\), a GRPO\-based policy optimization method that selects high\-entropy reflection anchors and optimizes a chain\-masked finite\-window KL surrogate for downstream visual dependence\. Experiments on reasoning\-intensive and general\-domain benchmarks show that RAPO delivers substantial gains over strong baselines across multiple LVLM backbones\. Mechanism analyses further indicate that reflection anchors are enriched for visually sensitive decision points and that RAPO increases contrastive visual\-dependence signals along generated trajectories\.

## UniverSat: Resolution\- and Modality\-Agnostic Transformers for Earth Observation

**Authors:** Yohann PERRON; Guillaume Astruc; Nicolas Gonthier; Clement Mallet; Loic Landrieu

**ID:** 152652 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ROs6fh2vEP>) | [PDF](<https://openreview.net/pdf?id=ROs6fh2vEP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152652>)

Vision Transformers \(ViT\) dominate computer vision\. However, their reliance on rigid patch projectors hinders transfer to Earth Observation \(EO\), where inputs vary widely in modality, scale, and resolution\. We introduce UniverSat, a ViT\-style backbone built around a Universal Patch Encoder that maps patches from arbitrary spatial, spectral, and temporal resolutions, and from both optical and non\-optical sensors, into a shared embedding space with a single set of weights\. This enables training one model on heterogeneous multimodal corpora in self\-supervision, yielding robust sensor\-agnostic spatial features\. We validate this approach with strong results across classification and segmentation on standard EO benchmarks from GeoBench, PANGEABench, and SpectralEarth\. The code and model will be released in open\-source\.

## Understanding and Defending VLM Jailbreaks via Jailbreak\-Related Representation Shift

**Authors:** Zhihua Wei; Qiang Li; Jian Ruan; Zhenxin Qin; 蕾蕾 温; Ruiyang Qin; Qingzhuo Wang; Dongrui Liu; Wen Shen

**ID:** 149596 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ovIB52cIlw>) | [PDF](<https://openreview.net/pdf?id=ovIB52cIlw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149596>)

Large vision\-language models \(VLMs\) often exhibit degraded safety alignment when visual inputs are integrated\. Even when a text prompt is explicitly harmful, adding an image can substantially increase the jailbreak success rate\. In this paper, we observe that VLMs can clearly distinguish benign, refusal, and jailbreak samples in their representation space, and that jailbreak responses often contain safety warnings\. These observations lead to the \\textit\{recognize\-but\-fail\-to\-refuse\} hypothesis: VLM jailbreaks do not arise from a failure to recognize harmful intent, but instead occur because adding an image induces a representation shift that steers the sample into a distinct jailbreak state where refusal is not triggered\. To quantify how this image\-induced representation shift contributes to jailbreak behavior, we define a jailbreak direction and characterize the jailbreak\-related representation shift as the projection of the total image\-induced shift onto this direction\. Our analysis shows that the jailbreak\-related shift reliably characterizes jailbreak behavior, providing a unified explanation for diverse jailbreak scenarios\. Finally, we propose JRS\-Rem, a defense method that enhances VLM safety by removing the jailbreak\-related shift at inference time\. Experiments show that JRS\-Rem significantly improves VLM safety across multiple scenarios while preserving utility on benign tasks\.

## EventLens: Event\-Structure Reinforcement Learning for Video Understanding

**Authors:** Guowen Zhang; Boshen Xu; Zihao Yue; Ziheng Wang; Xiaokun Liu; Xin Tao; Wenyu Qin; Pengfei Wan; Qin Jin

**ID:** 153545 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ka48Llurl6>) | [PDF](<https://openreview.net/pdf?id=Ka48Llurl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153545>)

Recent multimodal large language models \(MLLMs\) achieve strong results on video question answering, yet often fail to recover the temporal structure that makes a video coherent\. They may merge neighboring events, miss single\-event progression, or infer implausible relations across events\. We study structured temporal understanding as the ability to recover event structure from visual evidence, including event boundaries, single\-event progression, and multi\-event relations\. We argue that this gap arises from a mismatch between current post\-training objectives and temporal reasoning, where caption\-style supervision allows models to rely on language shortcuts rather than visual temporal grounding\. To address this, we propose $\\textbf\{EventLens\}$, a vision\-centric reinforcement learning framework that learns video understanding through event\-structure recovery\}\. Instead of reconstructing captions, EventLens trains models to recover temporal structure under controlled perturbations, such as altered temporal granularity, reversed progression, and shuffled event order\. We instantiate this framework with a three\-level temporal ontology and derive three verifiable task families: event segmentation, progression discrimination, and multi\-event relation reasoning\. These tasks admit deterministic rewards, enabling task\-specialized GRPO training without human preference labels or learned reward models\. We further introduce multi\-teacher on\-policy distillation \(MT\-OPD\) to consolidate specialized policies into a unified model\. Experiments on Qwen3\-VL backbones show consistent improvements on temporal grounding and event\-sensitive reasoning benchmarks, while preserving general video\-QA performance\. Learning curves further demonstrate that EventLens achieves comparable downstream transfer with significantly reduced training cost compared to direct mixed RL optimization\.

## CanViT: Toward Active\-Vision Foundation Models

**Authors:** Yohaï\-Eliel BERREBY; Sabrina Du; Audrey Durand; B\. S Krishna

**ID:** 151128 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cnV9GA4pKU>) | [PDF](<https://openreview.net/pdf?id=cnV9GA4pKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151128>)

Active computer vision promises efficient, biologically plausible perception through sequential, localized glimpses, but lacks scalable general\-purpose architectures and pretraining pipelines, leaving Active\-Vision Foundation Models \(AVFMs\) underexplored\. We introduce CanViT, the first task\- and policy\-agnostic AVFM\. CanViT uses scene\-relative RoPE to bind a retinotopic Vision Transformer backbone and a spatiotopic scene\-wide latent workspace, the canvas\. Efficient interaction with this high\-capacity working memory is supported by Canvas Attention, a novel asymmetric cross\-attention mechanism\. We decouple thinking \(backbone\-level\) and memory \(canvas\-level\), eliminating canvas\-side self\-attention and fully\-connected layers to achieve fast sequential inference and scalability to high output resolutions\. We propose a label\-free active vision pretraining scheme, policy\-agnostic passive\-to\-active dense latent distillation: reconstructing scene\-wide DINOv3 embeddings from sequences of low\-resolution glimpses with randomized locations, zoom levels, and lengths\. We pretrain CanViT\-B from a random initialization on 13\.2 million ImageNet\-21k scenes\-\-an order of magnitude more than previous active models\-\-and 1 billion random glimpses, in 166 hours on a single H100\. On ADE20K segmentation, a frozen CanViT\-B achieves 38\.5% mIoU in a single low\-resolution glimpse, outperforming the best active model's 27\.6% with 20x fewer inference FLOPs as well as its FLOP\- or input\-matched DINOv3 teacher\. Given additional glimpses, CanViT\-B reaches 45\.9% ADE20K mIoU\. On ImageNet\-1k classification, CanViT\-B also sets a new active\-vision state of the art, with 84\.5% top\-1 accuracy after fine\-tuning\. CanViT generalizes to longer rollouts, larger scenes, and new policies\. Our work narrows the wide gap between passive and active computer vision, demonstrating the potential of task\- and policy\-agnostic AVFM pretraining\.

## InfoNav: A Unified Value Framework Integrating Semantic Relevance and Information Gain for Zero\-Shot Object Goal Navigation

**Authors:** Zhi Yang; Chengpu Yu; Gonzalo Ferrer

**ID:** 149947 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lzhhlAlmjK>) | [PDF](<https://openreview.net/pdf?id=lzhhlAlmjK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149947>)

Zero\-shot object goal navigation \(ObjectNav\) requires an embodied agent to locate a target object in an unseen environment without any task\-specific training\. Recent methods leverage large vision\-language models \(VLMs\) to inject semantic priors, but still suffer from two structural issues: \(i\) semantic cues are treated uniformly across space, ignoring how the spatial extent and hierarchy of contextual entities modulate target likelihood; and \(ii\) semantic exploitation and geometric exploration are decoupled, producing brittle behavior whenever semantic cues are weak, conflicting, or absent\.  We address these issues by reformulating navigation as a unified value estimation problem over frontier candidates\. Specifically, we propose InfoNav, which jointly models \(1\) a hierarchical semantic value map that instantiates a spatially\-weighted total\-probability decomposition of target likelihood through a multi\-level spatial influence field; \(2\) a VLM\-based estimator that approximates the intractable long\-horizon information gain by grounding it in visual\-semantic connectivity; and \(3\) a memory\-augmented verification mechanism that replaces fixed confidence thresholds with a temporally adaptive schedule with deferred re\-examination of uncertain detections\.  InfoNav establishes the highest zero\-shot success rate on all three major ObjectNav benchmarks: 62\.0% on HM3Dv1 \(\+0\.6 over BeliefMapNav\), 81\.5% on HM3Dv2 \(the only method above 80%\), and 41\.8% on MP3D \(\+4\.5 over BeliefMapNav\), while requiring more than 96% fewer multimodal\-model calls than representative LLM\-driven baselines\. Extensive ablations confirm that the semantic and information\-theoretic value fields are complementary, and that the unified formulation is what enables the agent to remain decisive under strong cues and exploratory under weak ones\.

## VC\-OPD: Visual Counterfactual On\-Policy Distillation for Grounded Vision\-Language Reasoning

**Authors:** Jiahe Feng

**ID:** 152275 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UIRHh7xJPJ>) | [PDF](<https://openreview.net/pdf?id=UIRHh7xJPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152275>)

_Abstract unavailable from the accessible public sources._

## GeoDial: A Multimodal Dialog Tutoring Dataset for Geometry Problem\-Solving with Visual Tutor Turns

**Authors:** Sankalan Pal Chowdhury; Junling Wang; Donya Rooein; April Wang; Mrinmaya Sachan

**ID:** 139470 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NtIm78Ijq1>) | [PDF](<https://openreview.net/pdf?id=NtIm78Ijq1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139470>)

_Abstract unavailable from the accessible public sources._

## VLM$^3$: Vision Language Models Are Native 3D Learners

**Authors:** zhipeng cai; Zhuang Liu; Yunyang Xiong; Zechun Liu; Vikas Chandra; Yangyang Shi

**ID:** 152219 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UfbiOahvgq>) | [PDF](<https://openreview.net/pdf?id=UfbiOahvgq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152219>)

_Abstract unavailable from the accessible public sources._

## VidHalluDoctor: Learning Video Differences to Mitigate Hallucinations in Vision\-Language Models

**Authors:** Ziyun Dai; Yang Fu; Henghui Ding

**ID:** 153093 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O19BzWLPGz>) | [PDF](<https://openreview.net/pdf?id=O19BzWLPGz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153093>)

_Abstract unavailable from the accessible public sources._

## Long\-term Embodied Visual Tracking with Lightweight Vision\-Language\-Action Models

**Authors:** Haowei Sun; Kaining Chen; Xutao Wen; Xinze Xie; Jinwu Hu; Jiaxi Chen; Mingkui Tan; Shutao Li

**ID:** 154031 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GmEkGlTR7V>) | [PDF](<https://openreview.net/pdf?id=GmEkGlTR7V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154031>)

_Abstract unavailable from the accessible public sources._

## Diffusion Fine\-Tuning: Iterative Refinement for Advanced Grounding with Diffusion Large Language Models

**Authors:** Zhangyang Qi; Jinsong Li; Jiaqi Wang; Hengshuang Zhao

**ID:** 154060 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GUkwzvouGc>) | [PDF](<https://openreview.net/pdf?id=GUkwzvouGc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154060>)

_Abstract unavailable from the accessible public sources._

## OneVision\-Encoder: Codec\-Aligned Sparsity as a Foundational Principle for Multimodal Intelligence

**Authors:** feilong tang; Xiang An; Yunyao Yan; Yin Xie; Kaicheng Yang; Yifei Shen; Yuanhan Zhang; Shikun Feng; Chunyuan Li; Changrui Chen; Huajie Tan; Ming Hu; Manyuan Zhang; Bo Li; Ziyong Feng; Ziwei Liu; Zongyuan Ge; Jiankang Deng

**ID:** 152879 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PhUCpeOqyR>) | [PDF](<https://openreview.net/pdf?id=PhUCpeOqyR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152879>)

_Abstract unavailable from the accessible public sources._

## OmniJigsaw: Enhancing Omni\-Modal Reasoning via Modality\-Orchestrated Reordering

**Authors:** Yiduo Jia; Muzhi Zhu; Hao Zhong; Mingyu Liu; Yuling Xi; Hao Chen; Bin Qin; Yongjie Yang; Zhenbo Luo; Chunhua Shen

**ID:** 151826 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XftlRnCnyu>) | [PDF](<https://openreview.net/pdf?id=XftlRnCnyu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151826>)

_Abstract unavailable from the accessible public sources._

## Structural Self\-Teaching for Compositional Generation in Unified Multimodal Models

**Authors:** Jaeyoo Park; Bohyung Han

**ID:** 155187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7dwd2Ok9fy>) | [PDF](<https://openreview.net/pdf?id=7dwd2Ok9fy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155187>)

We propose Structural Self\-Teaching \(SST\), a novel framework that enhances compositional image generation in unified multimodal models \(UMMs\) by leveraging their internal understanding path as a source of structural supervision\.  The motivation of this work is the observation that the generation path of UMMs often struggles with dense compositional prompts, leading to missing objects, attribute binding failures, and spatial errors\. To bridge this gap, our key idea is to convert the phrase\-level grounding inherent in the understanding path into training\-time structural signals\. Specifically, we extract phrase\-conditioned support masks from internal attention maps derived from the understanding path and employ them through two complementary mechanisms:  1\) phrase\-local contrastive alignment to synchronize generated features with their corresponding phrase\-level grounding, and 2\) a lightweight structural scaffold for spatial modulation of intermediate generation states\.  By employing attenuated scaffold dropout during training and removing the scaffold branch at inference, our approach improves compositional fidelity across object, attribute, and spatial constraints\.  Crucially, the framework requires no external structural annotations for training or additional inputs at test\-time, preserving the original generation interface\. Extensive experiments across multiple UMMs demonstrate that our method consistently improves compositional fidelity while maintaining the efficiency of a lightweight tuning setup\.

## Can VLMs Reason When to Stop for Human Safety?

**Authors:** Ryo Hachiuma; Arun G Zachariah; Barnaby Simkin; Jibin Varghese; Fu\-En Yang; Chi\-Pin Huang; Frank Wang; Yusuke Hirota

**ID:** 139187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fkR4UeSeRN>) | [PDF](<https://openreview.net/pdf?id=fkR4UeSeRN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139187>)

Since Vision\-Language Models \(VLMs\) are the core of the perceptual and reasoning capability in Vision\-Language\-Action models, which are deployed in environments shared with humans, evaluating VLMs' safety reasoning from video is critical for preventing human harm\. Current video\-based benchmarks, however, evaluate only whether a model can recognize dangers that are already visible, and overlook two capabilities that VLMs require: reasoning under hierarchical principles in which human safety takes precedence over obedience to user instructions, and anticipating harm rather than identifying it after it has occurred\. We introduce VESPER, a video benchmark that targets both capabilities by scenarios in which a robot is executing a user\-assigned task when a person unexpectedly moves into harm's way, requiring the model to predict the potential harm and decide whether to continue or stop\. The benchmark comprises 458 videos covering matched safe and dangerous variants, built through a human\-in\-the\-loop pipeline from diverse taxonomies\. We evaluate 21 VLMs, and the results indicate that the current VLMs fail to properly decide the actions under such a scenario\.

## GEAR\-Align: Grounding\-Evidence\-Aware Gradient Routing for Multimodal Alignment

**Authors:** Yu Yongkang; Haobo Wang; Meng Chen; Han Fang; Xin Wei; Zhiyu Lin; Ye Yuan; Chiming Duan; Hao Sun; Haiyang Zhang

**ID:** 153068 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ODn1YAbOjd>) | [PDF](<https://openreview.net/pdf?id=ODn1YAbOjd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153068>)

Multimodal Large Language Models \(MLLMs\) are typically aligned with caption\-pair data, but not all answer\-token supervision is equally visual\. In LLaVA\-style alignment training, many tokens are predictable from language context alone, yet their losses can still update vision\-related parameters\. Such language\-dominant updates may add noisy supervision for tokens that require visual evidence\.  To diagnose this vulnerability, we probe the model against visual counterfactuals to reveal the intrinsic grounding requirements of each token, distilling them into two soft indicators: visual necessity and evidence specificity\. Guided by this diagnostic insight, we present $\\textbf\{GEAR\-Align\}$, a controlled post\-training framework that makes supervision destination explicit\. During training, it converts token\-level visual reliance into parameter\-level gradient allocation: all answer tokens update language\-side parameters, high\-necessity tokens update route\-flow parameters, and the high\-specificity subset additionally updates visual\-evidence parameters\. Across two controlled Qwen3\-backbone settings, GEAR\-Align improves hallucination\-sensitive and local\-evidence\-heavy benchmarks while remaining competitive on general multimodal benchmarks\. These results provide evidence for token\-specific visual gradients as a useful principle for controlled MLLM post\-training\.

## EditJudge\-Bench: Auditing VLM Image\-Edit Judges with Synthetic Ground Truth

**Authors:** Jens Parslov; Marco Schouten; Dim Papadopoulos

**ID:** 139200 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eynW4BxY28>) | [PDF](<https://openreview.net/pdf?id=eynW4BxY28>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139200>)

Vision–language models \(VLMs\) are increasingly used as automated judges for image\-editing benchmarks, yet their reliability is poorly understood\. Auditing these judges is difficult because real edited images lack controlled ground truth and entangle the requested change with model artifacts, unintended side effects, and ambiguous degrees of success\. In this paper, we introduce EditJudge\-Bench, a diagnostic benchmark of 1,500 synthetic before/after image pairs rendered in Blender, with edits parameterized across nine categories derived from real user requests and exact ground truth from known 3D scene parameters\. Because every edit is generated by a known intervention on a controlled scene, EditJudge\-Bench evaluates VLM judges as binary verifiers of whether an instruction was correctly executed, isolating judge perception from editor quality\. Across 18 judge configurations, we find substantial reliability gaps: \(a\) the widely adopted VIEScore template reaches only 67\.1\\% AUROC with GPT\-4o; \(b\) fine\-tuned judges score 50\.9–65\.0\\%; spatial edits such as rotation and shape remain near chance; \(c\) and prompt\-formatting choices like image–text ordering shift performance by up to 13\\%\.  Despite using only synthetic data, judge rankings on EditJudge\-Bench correlate strongly with two real\-image human\-preference benchmarks \($\\rho$=0\.93 and $\\rho$=0\.77\), indicating that controlled audits surface failure modes relevant to real evaluation\.

## NestedVLA: Learning to Consolidate and Generate Skills for Vision\-Language\-Action Model

**Authors:** Guodong DU; Wanyu Lin

**ID:** 152507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ScE0NGN9Xl>) | [PDF](<https://openreview.net/pdf?id=ScE0NGN9Xl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152507>)

Vision\-Language\-Action \(VLA\) models promise generalist robotic agents, yet consolidating skills learned across heterogeneous tasks, environments, and embodiments remains difficult: training data is fragmented across platforms, joint multi\-task training suffers from interference, and model merging tends to introduce parameter conflicts or require architectural changes\. We instead advocate a paradigm in which skills are first learned independently and then consolidated post hoc\. To this end, we propose \*\*NestedVLA\*\*, which replaces parameter aggregation with \*\*parameter generation\*\*: a nested hypernetwork, conditioned on the target task, synthesizes task\-adaptive parameters that compose with a frozen base VLA\. This formulation enables flexible task\-conditioned skill reuse while mitigating interference\. Across three RL benchmarks \(MetaWorld, ManiSkill, CALVIN\), NestedVLA outperforms the strongest model\-merging baseline by \*\*41 pp on average\*\*, matches per\-task fine\-tuning \*\*within 1 pp on ManiSkill\*\*, and substantially closes the gap on CALVIN, pointing toward a scalable route to skill consolidation\.

## Causal\-VLM: Dense Causal Captioning in Videos

**Authors:** Asmar Nadeem; Mahrukh Awan; Muhammad Awais; Robert Dawes; Adrian Hilton; Armin Mustafa

**ID:** 139209 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eaK7y6VXZW>) | [PDF](<https://openreview.net/pdf?id=eaK7y6VXZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139209>)

Dense video captioning describes multiple events in long videos\. However, each event is predicted independently, ignoring the causal relationships with the other events in the video\. These causal relationships are important for human\-like descriptions of long videos\.  Our experiments show that exisiting vision\-language models fail at predicting causal relationships in long\-form videos\. No prior work jointly generates captions and event timestamps and predicts causal relationships over multi\-event sequences in long\-form videos\. We address this through two contributions\. First, we create a benchmark dataset with 21\.6K videos and 85K events by using a large language model to generate annotations from dense captions in YouCook2 and ActivityNet\. We validate this benchmark dataset through multimodal alignment, vision\-language models, and human judgment\. Second, we propose a novel architecture for dense causal captioning that not only generates captions but also learns causal relationships\. This novel architecture not only predicts causality effectively \(0\.73 F1 ActivityNet, 0\.64 F1 YouCook2\) but also improves the vision\-language model's core capabilities: caption quality increases by \+6\.3 CIDEr on ActivityNet and \+7\.4 on YouCook2, while temporal grounding becomes accurate as causal predictions force precise event boundary localization\.

## SynDORBench: Evaluating LVLM Perceptual Robustness Under Physically Constrained Visibility Conditions

**Authors:** Jeremy S G Yee; Daniel Zhengkui Wang; Zhiyuan Zhang; Avinash Anand; Timothy Liu; Benedict Chan; Aik B Ng; Simon See

**ID:** 139213 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eJbJ4kjbfA>) | [PDF](<https://openreview.net/pdf?id=eJbJ4kjbfA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139213>)

Large vision\-language models \(LVLMs\) have demonstrated remarkable performance on multimodal reasoning benchmarks, yet their perceptual reliability under physically constrained imaging conditions remains poorly understood\. Existing evaluations predominantly assume ideal visual inputs and therefore fail to characterize how camera distance, illumination, viewpoint, and pixel density fundamentally affect semantic recoverability\. We introduce SynDORBench, the first physically grounded benchmark for evaluating LVLM perceptual robustness under DORI\-calibrated conditions aligned with human visual capability standards\. SynDORBench comprises over 54k question\-\-answer pairs generated through a controllable synthetic pipeline that systematically varies viewing distance, lighting, camera geometry, and action pose according to physically interpretable pixel\-density regimes\. To support scalable low\-visibility supervision, we further propose a discernibility annotation framework that propagates human perceptual labels using mask\-conditioned statistical features and ensemble learning\. We evaluate 16 open\-source LVLMs, a commercial LVLM baseline, and YOLO11x across human\-presence classification and action recognition tasks under progressively degraded visibility conditions\. Our results reveal that perceptual failure in LVLMs is strongly governed by pixel density and physical imaging constraints rather than model scale alone\. Surprisingly, several compact open\-source LVLMs outperform larger commercial baselines and substantially exceed YOLO11x robustness under long\-range and low\-light conditions\. SynDORBench establishes a new benchmark paradigm for physically grounded multimodal evaluation, enabling systematic analysis of LVLM reliability under real\-world perceptual constraints and direct comparison against human visibility thresholds\.

## Despa: Resolving Spatial Collapse in VLMs via Depth\-Grounded Geometry

**Authors:** Yujing Lou; Pingyi Chen; Shen Cao; Lubin Fan; Yue Wu; Lizhuang Ma; Jieping Ye

**ID:** 155220 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7OtFTKPxC5>) | [PDF](<https://openreview.net/pdf?id=7OtFTKPxC5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155220>)

Vision\-Language Models \(VLMs\) excel at open\-world 2D perception but struggle with precise metric spatial reasoning, a key requirement for applications like autonomous driving, navigation, and embodied intelligence\. We identify this as a structural limitation: images are 2D projections of the 3D world, inherently suffering from projective ambiguity, while VLM components favor semantic understanding and rely on 2D positional bias, leading to Spatial Collapse\. To address this, we propose Despa, a Depth\-grounded spatial VLMs that injects depth\-based geometric information via Geometric Positional Embedding \(GPE\) and Depth\-aware Rotational Positional Embedding \(DoPE\)\. To expose masked limitations in current benchmarks, we construct SpaDataset \(1\.7M QA pairs\) and SpaBench \(2,051 QAs\), to our knowledge the largest fine\-grained training corpus and benchmark suite for metric spatial reasoning\. They cover three difficulty levels and ten sub\-tasks across diverse settings\.  The fine\-tuned Despa\-4B model consistently outperforms general\-purpose, closed\-source, and specialized VLMs on SpaBench by 27\.9% over Qwen3\-VL\-235B\-A22B and 31\.1% over GPT\-5\.2, generalizes to MSMU \(66\.3%\), RefSpatial\-U \(42\.4%\), and the multi\-frame VSI\-Bench \(66\.0%\), and consistently lifts LLaVA\-1\.5, Qwen2\.5\-VL, and Qwen3\-VL backbones, achieving the performance with only a 4B model\. The code will be publicly released\.

## GT\-Free OCR Metrics: A Reference\-Free Evaluation Framework for Document OCR Systems

**Authors:** Kshitij Singh

**ID:** 139231 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dSWBIbUTbe>) | [PDF](<https://openreview.net/pdf?id=dSWBIbUTbe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139231>)

Evaluating document OCR systems traditionally requires ground\-truth \(GT\) text annotations aligned to each recognised element\. Producing such annotations demands expert human labour, scales poorly with corpus size, varies between annotators on ambiguous content, ages quickly as document distributions and OCR systems evolve, and is often infeasible for sensitive or proprietary material\. These constraints prevent continuous OCR quality monitoring at production scale and force practitioners to rely on small audited samples or proxy heuristics\. To overcome these inherent limitations of ground\-truth\-based evaluations, we present a new class of reference\-free OCR metrics based on render\-and\-compare that do not require any ground\-truth annotations: OCR output is rendered back into a page image and the result is compared visually against the masked original using no\-reference or learned metrics\. The underlying principle is straightforward: the original page image already serves as a pixel\-level ground truth for the content the OCR system tries to extract \(text, formulas, and tables\), so visual agreement between the original and a re\-rendering of the OCR output is itself a proxy for recognition fidelity\. To our knowledge, no prior work has systematically benchmarked reference\-free visual metrics as proxies for whole\-document OCR quality at scale\. We conduct the first such study, evaluating 147 method implementations spanning 15 broad categories of techniques on 1,355 OmniDocBench pages across 5 OCR\-output variants \(text\-only, formula\-only, table\-only, combined, combined without image masking\)\. We measure every method by Spearman rank correlation against ground\-truth\-based metrics \(edit distance for text and formulae, TEDS for tables\), quantifying whether a reference\-free metric correctly orders pages by OCR quality without any annotations\. A naïve CLIP\-cosine full\-page similarity baseline achieves Spearman correlation $\\rho = 0\.339$; our best composite method reaches $\\rho = 0\.494$ \(mean across the 5 variants; significance $p &lt; 0\.001$, computed over $N = 1\{,\}355$ pages\), with a per\-variant peak of $\\rho = 0\.605$ on the formula\-only variant\. Both numbers indicate that reference\-free OCR quality estimation is genuinely viable: a meaningful page\-level ranking signal can be recovered without any ground\-truth annotations, and the gap to the ground\-truth\-based ranking is consistent with the inherent noise of a multi\-domain document corpus where OCR errors are heterogeneous across text, formula, and table content\. We also discuss inherent limitations that bound what any reference\-free metric can achieve in this setting\. To support  reproducibility and for future research in this direction we are releasing three public HuggingFace datasets \(rendered page pairs, per\-element OCR log\-probabilities, document\-similarity triplets\), and a trained document\-similarity \(DocSim\) LoRA head \(a DreamSim\-style recipe adapted to document page reconstructions\) along with the associated code\.

## Saliency\-Aware Multi\-Route Thinking: Grounding and Reasoning on Vision\-Language Agents

**Authors:** Mingjia Shi; Yinhan He; Yaochen Zhu; Cassie Dong; Jundong Li

**ID:** 150336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=irnUqOfepp>) | [PDF](<https://openreview.net/pdf?id=irnUqOfepp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150336>)

A vision\-language \(VL\) agent wraps a frozen vision\-language model \(VLM\) into a test\-time system that may call external tools during execution before producing a response\. The central problem is how the VLM and its tools interact across multiple steps\. Two recipes are common, both rigid\. Thinking for longer \(borrowed from text\-only agents\) sharpens reasoning, but without in\-loop visual refresh, it lets visual evidence decay into hallucination\. Querying tools more often, as traditional agents do, treats outputs as ground truth, a rigid commitment that fails when calls are noisy\. We propose Saliency\-Aware Principle Selection \(SAP\), a training\-free inference\-time method that avoids both rigidities: it searches a broad space of high\-level principles, short textual directives \(e\.g\., \`\`re\-examine the image whenever an intermediate conclusion is formed''\) that each prescribe a different way for the VLM to weigh tool advice across steps, and selects the principle whose parallel reasoning routes best fit the actual visual evidence\. Tool outputs are treated as advisory \(consulted, never authoritative\), and a population\-based evolutionary loop drives the search\. Under the same token budget as long chain\-of\-thought, SAP substantially reduces object hallucination while remaining competitive on reasoning\-heavy benchmarks\. Being training\-free and composed of independent routes, SAP is plug\-and\-play on any VLM and parallel for modern agent deployment\.

## Exploring the Limits of Compositional Generalization in Vision\-Language\-Action Manipulation

**Authors:** Xupeng Zhang; Yantai Yang; Chang Guo; Zhaokai Yin; Zhipeng Zhang

**ID:** 139255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bqpIkP9Yfq>) | [PDF](<https://openreview.net/pdf?id=bqpIkP9Yfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139255>)

Vision Language Action \(VLA\) models can execute isolated atomic skills, but practical long horizon manipulation requires recombining these skills into new compositions without demonstrations for every skill combination\. The direct full instruction route treats skill chaining as long horizon imitation\. In our controlled study, full instruction training on limited skill combination sequences reaches 40\.0% ordered success on covered combinations but only 7\.7% on recombination, suggesting memorization of sequence templates rather than robust skill recombination\. We therefore introduce Hierarchical Subtask Execution \(HSE\), a diagnostic execution framework that exposes skill recombination through a shared modular interface over the planner, trigger, and policy, enabling long horizon failures to be decomposed into separable modes\. To make this diagnosis measurable, we introduce RoboCombine, a benchmark for skill recombination without combined skill training trajectories, with metrics for ordered success and transition conversion across subtask boundaries\. RoboCombine reveals that atomic competence alone does not ensure ordered execution\. Failures concentrate at transitions where downstream subtasks must launch from handoff states produced by preceding subtasks rather than canonical atomic starts\. We identify this mismatch as the start state gap\. To address it, we introduce Pose Robust Task Initialization \(PRTI\), a lightweight atomic task post training strategy that broadens start state coverage beyond canonical starts\. Under oracle timed HSE on RoboCombine, adding PRTI raises ordered success from 2\.11% to 26\.32% and transition conversion from 2\.63% to 60\.53%, without combined skill training trajectories\. Together, these results show that combinatorial generalization requires handoff robust atomic skills that convert first stage progress into reliable downstream execution, not merely decomposition into known subtasks\. We will release RoboCombine and HSE code to enable reproducible diagnosis of atomic skill recombination failures\.

## TasteBench: multimodal benchmark for sensory prediction, from molecules to sustainable foods

**Authors:** Anna Thomas; Sohum Patnaik; Caroline Cotto; Benjamin Sanchez\-Lengeling

**ID:** 139273 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aP6pc3wy1D>) | [PDF](<https://openreview.net/pdf?id=aP6pc3wy1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139273>)

Sustainable protein discovery lacks the fast computational proxies, analogous to molecular docking or density functional theory, that accelerate drug and materials discovery\. Evaluating whether a novel food tastes like its animal\-based target requires expensive human sensory panels, bottlenecking the design\-build\-test loop\. We introduce \\textsc\{TasteBench\}, a multimodal benchmark and privacy\-preserving competition for sensory prediction, spanning two tasks: a food\-level ranking task built on 21K\+ human evaluations across 215 plant\-based foods in 24 product categories, yielding 935 within\-category ranking pairs, and a supporting molecular\-level taste classification task over 15K flavor molecules\.  To enable rigorous interpretation of model performance, we characterize the ground truth: inter\-rater agreement among panelists is low \(Krippendorff's $\\alpha$ = \.077\), and the split\-half reliability ceiling of panel\-aggregated rankings is \.825, establishing the range within which ML systems on this benchmark should be assessed\. We evaluate baselines across four input modalities; on the same pairs panelists rated, the best model achieves \.661 pairwise accuracy, competitive with the median individual panelist \(\.650\)\. TasteBench provides the evaluation infrastructure and baselines for measuring progress on computational screening for sustainable protein discovery\.

## VLMGuard: Bootstrapping Malicious Prompt Detectors from Unlabeled Vision\-Language Prompts in the Wild

**Authors:** Junlin Fang; Wenyu Chen; Reshmi Ghosh; Robert Sim; Ahmed Salem; Vitor Carvalho; Emily Lawton; Sharon Li; Jack Stokes; Sean Du

**ID:** 156800 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z7gczmhmmo>) | [PDF](<https://openreview.net/pdf?id=z7gczmhmmo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156800>)

Vision\-language Models \(VLMs\) are essential for contextual understanding of both visual and textual information\. However, their vulnerability to adversarially manipulated inputs presents significant risks, leading to compromised outputs and raising concerns about the reliability in VLM\-integrated applications\. Detecting these malicious prompts is thus crucial for maintaining trust in VLM generations\. A major challenge in developing a safeguarding prompt classifier is the lack of a large amount of labeled benign and malicious data\. To address the issue, we introduce VLMGuard, a novel learning framework that leverages the unlabeled user prompts in the wild for malicious prompt detection\. These unlabeled prompts, which naturally arise when VLMs are deployed in the open world, consist of both benign and malicious information\. To harness the unlabeled data, we present an automated maliciousness estimation score for distinguishing between benign and malicious samples within this unlabeled mixture, thereby enabling the training of a binary prompt classifier on top\. Notably, our framework does not require extra human annotations and is robust to realistic prompt variations, offering strong flexibility and practicality for real\-world applications\. Extensive experiments show that VLMGuard achieves superior detection results, improving AUROC by 9\.46% on average over the state\-of\-the\-art method\. Disclaimer: This paper may contain offensive examples; reader discretion is advised\. Code is available at: https://github\.com/radiolab\-ntu/vlmguard\.

## Preventing Error Cascades in Long\-Horizon Multimodal Agents with Edge\-Reliability Graph Memory

**Authors:** Saman Forouzandeh; Wei Peng; Xinghuo Yu; Mahdi Jalili

**ID:** 149654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oSvwY9Jnn1>) | [PDF](<https://openreview.net/pdf?id=oSvwY9Jnn1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149654>)

Long\-horizon tool\-augmented agents suffer sharp degradation as trajectories grow: small tool errors are stored, repeatedly reused, and amplified into cascading failures\. Existing approaches rely on post\-hoc verification, item\-level memory scoring, or executive context management, but do not directly control how unreliable evidence propagates through reuse\. We propose \\textbf\{EPOCH\} \(Edge\-Pathway Outcome\-supervised Cascade\-Halting memory\), which mitigates cascades by learning an outcome\-correlated reliability proxy on reuse pathways connecting observations over time, instantiated as a sparse memory graph with quality\-weighted edges, a Temporal Graph Transformer over edge reliabilities, and a learned mid\-context correction\. \\textbf\{We prove that quality\-weighted and uniform retrieval are asymptotically separated in horizon length:\} the ratio of cumulative cascade error diverges unboundedly as $T \\to \\infty$ whenever the calibration parameter is positive, a result that does not require distributional regularity\. We validate this prediction empirically at trajectory lengths up to $T=500$ and additionally establish a quantitative edge\-vs\-node separation in terms of an empirically measurable cross\-context error variance\. Because outcome supervision is correlational by construction, we do not claim the learned scores recover causal pathway reliability; we validate them on two complementary axes \(counterfactual edge ablation: $\\rho=0\.71$, $n=21\{,\}743$; human annotation: ROC\-AUC\~$=0\.94$, ECE\~$=0\.041$, $n=6\{,\}000$\)\. Across 11 multi\-modal benchmarks spanning native long\-horizon search, wrapped knowledge\-seeking tasks, and clean perception controls, EPOCH consistently outperforms the strongest reliability\-aware and memory\-augmented baselines in noisy long\-horizon regimes while remaining on par on clean perception controls\-\-\-quality\-aware filtering does not collapse on clean data without claiming it helps there\.

## Benchmarking Multi\-Modal Graph\-based Social Media Popularity Prediction

**Authors:** Utkarsh Sahu; Zhisheng Qi; Li Zhu; Yizhao Yang; Jun Li; Ryan Rossi; Yu Wang

**ID:** 139108 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kYqjpEOuRi>) | [PDF](<https://openreview.net/pdf?id=kYqjpEOuRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139108>)

Social media popularity prediction aims to forecast the future reach or influence of online content from early\-stage observations\. Accurate prediction enables key downstream applications, such as advertising optimization and strategic content planning by users, creators, and platforms\. Despite substantial progress, existing popularity prediction works often fail to jointly consider multimodal content and temporal social interaction signals\. Moreover, the literature remains highly fragmented across datasets, modalities, observation windows, prediction targets, and evaluation protocols\. This fragmentation prevents fair comparison and obscures a systematic understanding of how textual, visual, temporal, and interaction\-based signals jointly shape popularity dynamics\. To address these challenges, we introduce MMG\-Pop, a Multi\-modal Graph\-based Popularity Prediction benchmark, which unifies datasets, modalities, temporal interaction signals, and representative baselines under a standardized evaluation protocol\. Furthermore, we propose MMG\-PopNet, a unified multi\-modal graph\-based network that jointly models the aforementioned multi\-modal signals and graph\-structured social interactions\. Extensive experiments on MMG\-Pop, comprising four datasets across Bluesky and Reddit platforms, demonstrate the superior performance of MMG\-PopNet and yield new insights into cross\-platform training generalization, multi\-task prediction benefits, multi\-modality contributions, and LLM prediction limitation\. These findings establish a unified foundation for future research on social dynamics modeling and intervention under heterogeneous modalities and socially\-aware agentic ecosystem paradigms\.

## Text\-side fragility in contrastive vision\-language retrieval

**Authors:** Yanyu Lei

**ID:** 139343\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139343

[Paper](<https://openreview.net/forum?id=VZDduyq0Lw>) | [PDF](<https://openreview.net/pdf?id=VZDduyq0Lw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139343>)

Contrastive vision\-language models \(VLMs\) are deployed in a growing range of retrieval and grounding systems, making their robustness to input corruption a critical property\. In this paper, we apply controlled corruptions to textual and image inputs for five contrastive VLMs spanning three Vision Transformer architectures, four training corpora, and two contrastive loss functions\. We aim to measure how image and text representations and retrieval performance respond as input damage increases\. Previous cross\-modal robustness work often applied ordinal severity scales to corruptions independently, even though the same severity step on the image side may not represent equivalent damage on the text side or vice versa\. Our experiment addresses this measurement gap using within\-modality damage percentile binning, which ranks each side's corruptions on its own damage scale and compares only at matched ranks\. We evaluate all models on MS\-COCO retrieval with $n = 1\{,\}000$ pairs over three seeds, six corruption types, and five severity levels\. Our results indicate that image\-to\-text \(i2t\) Recall@1 at the highest damage quintile is 4\.6$\\times$ to 5\.8$\\times$ higher than text\-to\-image \(t2i\) Recall@1 at the matched quintile\. Two mechanistic probes are used to localize part of the asymmetry to the single\-token text\-pooling bottleneck and to text damage that destroys lexical content rather than word order\. These results suggest that downstream applications retrieving images from text are notably more fragile than the reverse, and that future improvements to cross\-modal robustness require architectural attention to text readout\.

## SceneBind: Binding What and Where Across Vision, Audio, and Language

**Authors:** Mingfei Chen; Zijun Cui; Ruoke Zhang; Hyeonggon Ryu; Eli Shlizerman

**ID:** 153396\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153396

[Paper](<https://openreview.net/forum?id=LfcBS0p58e>) | [PDF](<https://openreview.net/pdf?id=LfcBS0p58e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153396>)

We present SceneBind an omni\-modal representation of realistic scenes with joint semantic and 3D spatial understanding across vision, audio, and language\. Existing omni\-modal encoders excel at instance\-level semantics \(i\.e\., what is present\), but often lack explicit spatial structure \(i\.e\., where it is\)\. SceneBind addresses this gap by representing each scene as a semantic\-spatial entity, combining a global semantic embedding with object\-centric semantic\-spatial slots\. This representation explicitly captures object\-level semantics, spatial attributes, and uncertainty\. We further propose SceneBind Matching, a semantic–spatial matching scheme that integrates global scene similarity with object alignment, supporting cross\-modal scene retrieval and object grounding\. To train and evaluate SceneBind, we curate a novel real\-world binaural audio\-visual dataset with structured semantic and spatial annotations, and propose a training protocol for aligning semantic and spatial signals across modalities\. SceneBind is compatible with large\-scale pretrained semantic encoders, adds lightweight spatial modeling with only a few additional tokens\. It achieves state\-of\-the\-art scene and spatial retrieval while enabling strong zero\-shot transfer to downstream tasks such as audio\-visual localization\.

## FusionNeXt: Sequence\-First 3D Multi\-Modal Fusion in the Era of LLMs

**Authors:** Yu Hong; Xiaosong Jia; Songbur Wong; Yanhao Liu; Wenlong Liao; Tao He; Junchi Yan

**ID:** 150560\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150560

[Paper](<https://openreview.net/forum?id=hEoPVPh3pb>) | [PDF](<https://openreview.net/pdf?id=hEoPVPh3pb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150560>)

Modern LLMs/VLMs have largely converged to a unified architecture: representing heterogeneous inputs as a single token sequence and processing it with a deep stack of generic operators such as attention and feed\-forward layers\. This sequence\-first interface simplifies system designs and thus enables extensive algorithmic and hardware optimization, making it a compelling blueprint for modern model development\. In contrast, 3D multi\-modal fusion models still rely on complex and specialized designs such as dense feature representations, sparse 3D convolutions, deformable attention, view transformations, etc\. In this paper, we ask: \\textbf\{Can 3D multi\-modal fusion embrace the same design path as modern LLMs/VLMs and benefit from their mature and rapidly evolving ecosystem?\} We answer this affirmatively and propose \\textbf\{FusionNeXt\}, a modern multi\-modal fusion paradigm that \(i\) unifies camera and LiDAR features into a shared token representation, \(ii\) serializes tokens into locality\-preserving 1D sequences, and \(iii\) performs feature fusion using a deep stack of vanilla LLM/VLM\-style blocks\-\-\-FlashAttention, pre\-norm residuals, SwiGLU FFNs, etc\. The proposed paradigm enables standard sequence modeling tools to be applied directly to 3D multi\-modal fusion, resulting in fast inference, strong performance, and generalization across tasks\. FusionNeXt achieves state\-of\-the\-art \(SOTA\) results on the nuScenes 3D detection and Occ3D occupancy benchmarks while delivering high inference throughput, suggesting a scalable direction for 3D perception\. We will open\-source our code\.

## Prompt\-Driven Exploration

**Authors:** Sunshine Jiang; John Marangola; David Zhang; Raghuram Kowdeed; Ruiyang Luo; Nitish Dashora; Richard Li; Pulkit Agrawal; Zhang\-Wei Hong

**ID:** 150317\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150317

[Paper](<https://openreview.net/forum?id=izyPP7UWKU>) | [PDF](<https://openreview.net/pdf?id=izyPP7UWKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150317>)

Reinforcement learning is the standard way to post\-train foundation models, but progress is bottlenecked by exploration\. The usual approach perturbs sampled actions, which only moves the policy locally, yet hard tasks often require strategies very different from what the policy currently does\. This is especially problematic when fine\-tuning starts from a weak policy with low success rates and little useful behavior to refine\. Many foundation\-model policies, however, are conditioned on a natural\-language prompt, and varying the prompt produces qualitatively different behaviors from the same policy\. This suggests a different angle: perturb the prompt instead of the action\. Our key insight is that a distribution over prompts induces a distribution over policies, with structure already shaped by the pretrained language prior\. This turns exploration into a familiar problem: posterior sampling, where we maintain a belief over which prompts elicit success, sample from it to drive rollouts, and update it from what we observe\. A vision\-language model fits this role naturally, both proposing plausible prompts and reasoning about past rollouts to shift the distribution toward ones more likely to succeed\. We call this Prompt\-Driven Exploration \(PDE\)\. On hard tasks where action\-space exploration fails to make progress, PDE bootstraps from nearly zero success to high success rates with far fewer environment interactions\.

## MMSkills: Towards Multimodal Skills for General Visual Agents

**Authors:** Kangning Zhang; Shuai Shao; Wenxiang Jiao; Qingyao Li; Jianghao Lin; Lingyue Fu; Shijian Wang; Yuan Lu; Weiwen Liu; Weinan Zhang; Yong Yu

**ID:** 148831\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148831

[Paper](<https://openreview.net/forum?id=up4CskJQ0w>) | [PDF](<https://openreview.net/pdf?id=up4CskJQ0w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148831>)

Reusable skills have become a core substrate for improving agent capabilities, yet most existing skill packages encode reusable behavior primarily as textual prompts, executable code, or learned routines\. For visual agents, however, procedural knowledge is inherently multimodal: reuse depends not only on what operation to perform, but also on recognizing the relevant state, interpreting visual evidence of progress or failure, and deciding what to do next\. We formalize this requirement as \\emph\{multimodal procedural knowledge\} and address three practical challenges: \(I\) \\textbf\{what\} a multimodal skill package should contain; \(II\) \\textbf\{where\} such packages can be derived from public interaction experience; and \(III\) \\textbf\{how\} agents can consult multimodal evidence at inference time without excessive image context or over\-anchoring to reference screenshots\. We introduce \\emph\{MMSkills\}, a framework for representing, generating, and using reusable multimodal procedures for runtime visual decision making\. Each MMSkill is a compact, state\-conditioned package that couples a textual procedure with runtime state cards and multi\-view keyframes\. To construct these packages, we develop an agentic trajectory\-to\-skill Generator that transforms public non\-evaluation trajectories into reusable multimodal skills through workflow grouping, procedure induction, visual grounding, and meta\-skill\-guided auditing\. To use them, we introduce a branch\-loaded multimodal skill agent: selected state cards and keyframes are inspected in a temporary branch, aligned with the live environment, and distilled into structured guidance for the main agent\. Experiments across GUI and game\-based visual\-agent benchmarks show that MMSkills consistently improve both frontier and smaller multimodal agents, suggesting that external multimodal procedural knowledge complements model\-internal priors\. The code is accessible in \\href\{https://anonymous\.4open\.science/r/MMSkills\}\{https://anonymous\.4open\.science/r/MMSkills\}\.

## SMMBench: A Benchmark for Source\-Distributed Multimodal Agent Memory

**Authors:** Huacan Chai; YUKAI WANG; Yingxuan Yang; Dan Peng; Yuanyi Song; Zhihui Fu; Jun Wang; Weiwen Liu; Jianghao Lin; Weinan Zhang

**ID:** 139761\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139761

[Paper](<https://openreview.net/forum?id=6FddqZ3fYX>) | [PDF](<https://openreview.net/pdf?id=6FddqZ3fYX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139761>)

Existing benchmarks for multimodal memory reasoning largely evaluate systems within pre\-assembled contexts, but under\-evaluate whether agents can use evidence distributed across independently originated sources\. We argue that source\-distributed memory composition is an important and under\-examined bottleneck in multimodal agent memory, especially when relevant evidence is fragmented across heterogeneous artifacts such as conversations, profiles, screenshots, tables, images, and documents\. To address this gap, we introduce Source\-distributed Multimodal Memory Benchmark, which measures whether agents can retrieve, align, and compose multimodal evidence scattered across multiple sources rather than reason within a single curated context\. SMMBench evaluates four core capabilities: \(1\) cross\-source multimodal reasoning; \(2\) conflict resolution; \(3\) preference reasoning; \(4\) memory\-grounded action prediction\. The benchmark contains $1,877$ samples grounded in $264$ sources\. Experiments on representative memory\-style and retrieval\-based baselines show that current systems still struggle on these capabilities, positioning source\-distributed multimodal memory as an important and still under\-evaluated challenge for multimodal agents\. Our data and code are available at https://anonymous\.4open\.science/r/NeurIPSBenchmarksW8kP6gV/\.

## NeuronEye: Query\-Guided Visual Concept Activation for Vision\-Language Reasoning

**Authors:** Ruiyu Yan; Bowen Chen; Shaowen Wan; Lin Zhao

**ID:** 155426\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155426

[Paper](<https://openreview.net/forum?id=5kvIkFj6Si>) | [PDF](<https://openreview.net/pdf?id=5kvIkFj6Si>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155426>)

Current vision\-language models \(VLMs\) encode visual information in dense hidden states where object identity, spatial layout, and local attributes are implicitly entangled rather than explicitly disentangled, limiting their ability to isolate and modulate the specific visual evidence required by a given language query\. Inspired by sparse population coding and top\-down modulation in biological vision, we introduce NeuronEye, a plug\-in framework that constructs a sparse, concept\-level neuron vocabulary from intermediate VLM representations and selectively activates query\-relevant visual concepts during inference\. NeuronEye decomposes vision\-token states into an overcomplete sparse basis organized by concept\-level clusters, uses the language query to activate relevant clusters and localize the patches where selected concepts are expressed, and injects the focused evidence back into vision tokens\. A complementary suppression mechanism attenuates dominant perceptual directions to preserve weaker but relevant cues\. All operations run in a single forward pass over a frozen VLM backbone\. On Qwen2\.5\-VL\-7B, NeuronEye raises CV\-Bench overall accuracy by \+3\.1 with gains of \+9\.5 on Distance, and improves BLINK Multi\-view by \+8\.3, with similar trends on LLaVA\-1\.6\-7B\. These results suggest that sparse neuron vocabularies can serve not only as post\-hoc interpretability tools but also as active interfaces for concept\-level visual reasoning\.

## Rethinking Projector Training in Multimodal LLMs

**Authors:** Fabian Gröger; Naël Ouerghemi; Shuo Wen; Maria Brbic

**ID:** 153944\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153944

[Paper](<https://openreview.net/forum?id=HObX41utGv>) | [PDF](<https://openreview.net/pdf?id=HObX41utGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153944>)

Multimodal LLMs are typically trained by first aligning a vision encoder with a language model via projector training on large image\-caption datasets, followed by joint training of the full multimodal model\. Despite its widespread use, the role of the projector training stage remains poorly understood\.  Does it learn fine\-grained visual\-language correspondences, or mainly maps visual features into a compatible input space for the language model? We find that \(i\) using only $10$ to $20\\%$ of the data for training the projector already recovers most downstream performance gains, and \(ii\) projectors trained on different datasets can be linearly interpolated while largely preserving performance\. These results suggest that projector training acts primarily as a coarse alignment within a large solution space\. Motivated by these findings, we propose PORTAL, a training\-free projector initialization that requires neither paired image\-caption data nor gradient\-based optimization, but only per\-modality summary statistics\. PORTAL computes an optimal\-transport\-based map between Gaussian approximations of the vision and language feature distributions on a shared principal subspace, enabling completely skipping projector pretraining\. Despite using no paired data, while the standard approach relies on 0\.5M image–caption pairs, PORTAL matches the default trained pipeline across six LLM backbones, two vision encoders, and 16 benchmarks, outperforming it in $3$ of $7$ \(vision, LLM\) settings, and remaining within $1\.6$ average points across all other settings\.

## Witness Overlap: Directional Provenance Inside Open\-Weight Model Families

**Authors:** Siyuan Li; Haoxuan Zeng; Xin Luo; Fernando Jia; Florence Li; Zhengyang Geng; Zico Kolter; Tai Sing Lee; Tianqin Li

**ID:** 149996\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149996

[Paper](<https://openreview.net/forum?id=lc1XaBdx6q>) | [PDF](<https://openreview.net/pdf?id=lc1XaBdx6q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149996>)

Open\-weight models are often released, fine\-tuned, aligned, merged, and re\-released, making provenance audits ask not only whether checkpoints are related, but also which checkpoint came first\. Many existing model\-provenance methods are designed for a base\-known audit setting: given a victim or source model, they test whether a suspect model is related to it\. Although these audits are framed as source\-to\-suspect tests, their underlying evidence is often symmetric, relying on representation similarity, weight similarity, behavioral fingerprints, or correlation statistics\. Symmetric pairwise comparisons can detect relatedness, but they cannot by themselves orient A versus B\.  We therefore introduce a local geometric comparison: instead of comparing two checkpoints directly, we add a third same\-family checkpoint as a witness and compare the geometry around A with the geometry around B\. Direction is inferred by asking which candidate behaves more like a branching parent\. Motivated by this idea, and by the empirically observed asymmetry between parent\-anchored and child\-anchored witness\-overlap distributions, we propose Witness Overlap, a prompt\-free, training\-free white\-box test for directional provenance\. On 176 LLM checkpoints from 16 families, our one\-witness test orients 95\.3\\% of parent–child decisions using Frobenius cosine\. We further evaluate root identification, sibling discrimination, generalizations to VLM and diffusion families, and chain\-structured ordering\. The signal is robust to weight noise and sparse pruning, with a proposed SVD weight reduction variant showing greater robustness than Frobenius cosine\.

## Toward in Silico Strain Evaluation: A Multimodal Surrogate for Fermentation Dynamics with Metabolic Graph Pretraining

**Authors:** Yunxiao Li; Difeng Gao; Yubin Zheng; JIJIAO ZENG

**ID:** 150995\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150995

[Paper](<https://openreview.net/forum?id=dij6bw1w7s>) | [PDF](<https://openreview.net/pdf?id=dij6bw1w7s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150995>)

Strain engineering for industrial fermentation faces a structural design\-test scale gap: combinatorial pathway perturbations of $2$–$3$ enzymes already span $10^4$–$10^6$ candidate strains, while bench\-scale fermentation throughput remains on the order of $10^2$ runs per laboratory per year\. One way to narrow this gap is in silico evaluation by perturbing a learned gene\-expression $\\to$ phenotype mapping \(conditioned on process state\); the precondition is that such a mapping can be learned from bench\-scale\-sized datasets\. As a proof\-of\-concept, we ask whether a genome\-scale metabolic model \(GEM\)\-graph mechanistic prior supports learning such a mapping from $\\sim44$ bioreactor runs of an engineered Yarrowia lipolytica astaxanthin\-producing strain\. We propose a spatio\-temporal GNN encoder structured as a Mass Flow Graph over the GEM, paired with a multimodal input head over gene\-expression snapshots, sensor streams, time\-series assays, and run\-level metadata\. The encoder is pretrained by masked\-flux prediction on Flux Balance Analysis \(FBA\) samples, distilling the GEM's stoichiometric and mass\-balance constraints into it before fermentation data are seen\. Under $5$\-fold cross\-validation across $5$ seeds, the surrogate attains the lowest mean composite test RMSE among the baselines we compare against\. Structural ablations show that the GEM\-graph prior is necessary—an order\-of\-magnitude RMSE divergence when removed—while pretraining together with the gene\-expression modality make a significant joint contribution, supporting the proof\-of\-concept claim\.

## Evo\-Depth: A Lightweight Depth\-Enhanced Vision\-Language\-Action Model

**Authors:** Tao Lin; Yuxin Du; Jiting Liu; Nuobei Zhu; YUNHE LI; Yuqian Fu; Yinxinyu Chen; Hongyi Cai; Ye Zewei; Bing Cheng; Kai Ye; Yiran Mao; Yilei Zhong; Mingkang Dong; Junchi Yan; Gen Li; Bo Zhao

**ID:** 154131\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154131

[Paper](<https://openreview.net/forum?id=G2jacreNCB>) | [PDF](<https://openreview.net/pdf?id=G2jacreNCB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154131>)

Vision\-Language\-Action \(VLA\) models have emerged as a promising paradigm for robotic manipulation by unifying perception, language grounding, and action generation\. However, they often struggle in scenarios requiring precise spatial understanding, as current VLA models primarily rely on 2D visual representations that lack depth information and detailed spatial relationships\.  While recent approaches incorporate explicit 3D inputs such as depth maps or point clouds to address this issue, they often increase system complexity, require additional sensors, and remain vulnerable to sensing noise and reconstruction errors\.  Another line of work explores implicit 3D\-aware spatial modeling directly from RGB observations without extra sensors, but it often relies on large geometry foundation models, resulting in higher training and deployment costs\. To address these challenges, we propose \\textbf\{Evo\-Depth\}, a lightweight depth\-enhanced VLA framework that enhances spatially grounded manipulation without relying on additional sensing hardware or compromising deployment efficiency\. Evo\-Depth employs a lightweight \\textit\{Implicit Depth Encoding Module\} \(IDEM\) to extract compact depth features from multi\-view RGB images\. These features are incorporated into vision\-language representations through a \\textit\{Spatial Enhancement Module\} \(SEM\) via depth\-aware modulation, enabling efficient spatial\-semantic enhancement\. A \\textit\{Progressive Alignment Training\} strategy is further introduced to align the resulting depth\-enhanced representations with downstream action learning\. Extensive experiments in simulation and real\-world settings demonstrate the effectiveness of Evo\-Depth\.  With only \\textbf\{0\.9B\} parameters, Evo\-Depth achieves state\-of\-the\-art\-level performance across four simulation benchmarks\. In real\-world experiments, Evo\-Depth attains the highest average success rate while also exhibiting the smallest model size, lowest GPU memory usage, and highest inference frequency among compared methods\. These results demonstrate that lightweight implicit depth enhancement is an effective and practical solution for spatially grounded robotic manipulation\. We release code and models to facilitate future research on lightweight depth\-enhanced VLA models\.

## An Efficient Cross\-modal Feature Reconstruction Model for Multimodal Multi\-class Anomaly Detection

**Authors:** Zhenghan Wang; Zhihui Luo; Haitao Hu; Wengang Cheng

**ID:** 153426\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153426

[Paper](<https://openreview.net/forum?id=LQQHB5gOGa>) | [PDF](<https://openreview.net/pdf?id=LQQHB5gOGa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153426>)

Industrial anomaly detection is evolving from category\-specific detectors toward unified models capable of handling multiple categories simultaneously\. However, in multi\-class setting, greater inter\-category diversity not only compels enhanced reconstruction capacity to model normal patterns but also exacerbates the “identical shortcut” problem, wherein anomalies are likewise well reconstructed\. Moreover, existing unified frameworks are typically confined to single\-modal \(RGB\) inputs and lack multimodal capability\. To address these, we propose an Efficient Cross\-modal Feature Reconstruction \(ECFR\) model for unified multi\-class anomaly detection, which harnesses the inherent difficulty of cross\-modal reconstruction to alleviate the shortcut issue and amplify anomaly discrimination\. The framework is built on two core modules: an Adaptive Feature Interaction and Recalibration \(AFIR\) module and a Hybrid Attention Convolution \(HAC\) module\. Through feature interaction, fusion, and reconstruction, our model achieves two key outcomes: learning normal patterns of multi\-class objects while forcing reconstruction failures for anomalous inputs\. Extensive experiments on the MVTec 3D\-AD and Eyecandies datasets validate our approach, which achieves state\-of\-the\-art performance in multimodal multi\-class anomaly detection while requiring significantly fewer model parameters \(44\.63 M\) and lower computational complexity \(15\.77 GFLOPs\) compared to previous multimodal anomaly detection methods\.

## Generative Scenario Rollouts for End\-to\-End Autonomous Driving

**Authors:** Rajeev Yasarla; Deepti Hegde; Shizhong Han; Hsin\-Pai Cheng; Yunxiao Shi; MeysamSadeghi; Shweta Mahajan; Apratim Bhattacharyya; Litian Liu; Risheek Garrepalli; Thomas Svantesson; Mohammad Ghavamzadeh; Fatih Porikli; Herbert Cai

**ID:** 155620\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155620

[Paper](<https://openreview.net/forum?id=4CvrLyVNLO>) | [PDF](<https://openreview.net/pdf?id=4CvrLyVNLO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155620>)

Vision\-Language\-Action \(VLA\) models are emerging as highly effective planning models for end\-to\-end autonomous driving systems\. However, current works mostly rely on imitation learning from sparse trajectory annotations and under\-utilize their potential as generative models\. We propose Generative Scenario Rollouts \(GeRo\), a plug\-and\-play framework for VLA models that jointly performs planning and generation of language\-grounded future traffic scenes through an autoregressive rollout strategy\. First, a VLA model is trained to encode ego vehicle and agent dynamics into latent tokens under supervision from planning, motion, and language tasks, facilitating text\-aligned generation\. Next, GeRo performs language\-conditioned autoregressive generation\. Given multi\-view images, a scenario description, and ego\-action questions, it generates future latent tokens and textual responses to guide long\-horizon rollouts\. A rollout\-consistency loss stabilizes predictions using ground truth or pseudo\-labels, mitigating drift and preserving text\-action alignment\. This design enables GeRo to perform temporally consistent, language\-grounded rollouts that support long\-horizon reasoning and multi\-agent planning\. On Bench2Drive, GeRo improves driving score and success rate by \+15\.7 and \+26\.2, respectively\. By integrating reinforcement learning with generative rollouts, GeRo achieves state\-of\-the\-art closed\-loop and open\-loop performance, demonstrating strong zero\-shot robustness\. These results highlight the promise of generative, language\-conditioned reasoning as a foundation for safer and more interpretable end\-to\-end autonomous driving\.

## What Drives Test\-Time Adaptation for CLIP? A Controlled Empirical Study from an Update Perspective

**Authors:** Jiazhen Huang; Xiao Chen; Zhiming Liu; Yaru Sun; Jingyan Jiang; Zhi Wang

**ID:** 139128\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139128

[Paper](<https://openreview.net/forum?id=jUrzOPgzZq>) | [PDF](<https://openreview.net/pdf?id=jUrzOPgzZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139128>)

Vision\-Language Models \(VLMs\) such as CLIP have become a standard backbone for open\-vocabulary recognition, yet their zero\-shot predictions remain vulnerable to distribution shifts encountered at deployment\. Test\-Time Adaptation \(TTA\) has recently been extended to CLIP as a lightweight solution, leading to a rapidly growing body of TTA4CLIP methods\. However, empirical progress in this area has largely outpaced our understanding of what truly drives adaptation, where their gains originate, and under which shifts they remain reliable\. In this paper, we take a step back from the pursuit of state\-of\-the\-art accuracy and conduct a systematic controlled study of TTA4CLIP\. We first organize existing methods into three unified paradigms according to what is updated at test time\. We then introduce TTABC, an open\-source TTA Benchmark for CLIP, which standardizes evaluation protocols and integrates more than 20 representative methods\. Our controlled empirical analysis focuses on three key areas\. First, we determine the driving factors in parameter\-based methods, revealing that adaptation gains are primarily driven by test\-time evidence and reliable proxies rather than heavy optimization\. Second, we explore evidence utilization beyond heavy parameter tuning, showing that competitive and efficient performance can be achieved through cross\- or current\-sample evidence and lightweight prototype updates\. Finally, we demonstrate that there is no silver bullet for TTA; no single adaptation paradigm is universally optimal, and the preferred paradigm depends on the nature of shift\. We hope our benchmark and study provide a clearer understanding of the current TTA4CLIP landscape and establish a foundation for further research\.

## Lost on Campus: Evaluating Embodied Spatial Reasoning of Vision\-Language Models in the Wild

**Authors:** Zehan Zheng; Yanyuan Chen; Deming Li; Yutao Tang; Jianwen Xie; Alan Yuille; Jieneng Chen; Cheng Peng

**ID:** 139093\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139093

[Paper](<https://openreview.net/forum?id=lU1kNLfVEL>) | [PDF](<https://openreview.net/pdf?id=lU1kNLfVEL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139093>)

Embodied Spatial Reasoning \(ESR\) is central to deploying Vision\-Language Models \(VLMs\) in real\-world embodied tasks, yet remains inadequately evaluated\. Existing benchmarks primarily assess spatial reasoning in static images or synthetic indoor environments, where semantic shortcuts often suffice, making it difficult to faithfully evaluate spatial reasoning capabilities in the wild\. In light of this, we present Lost on Campus, a benchmark for evaluating ESR in large\-scale real\-world outdoor 3D environments reconstructed by 3D Gaussian Splatting\. Our benchmark introduces a unified reasoning\-action evaluation framework that seamlessly integrates diagnostic QA for isolated reasoning with closed\-loop interactive navigation for active reasoning under multimodal instructions\. To enable fine\-grained diagnosis, we systematically decompose ESR into six fundamental capabilities: action grounding, spatial foresight, metric awareness, goal\-directed planning, global localization, and spatio\-temporal consistency\. Extensive experiments reveal that: \(i\) Compared to indoor settings, real\-world outdoor environments impose substantially higher demands on spatial reasoning, where existing models exhibit poor performance; \(ii\) VLMs still struggle with fine\-grained visual alignment, with failures in spatial foresight and self\-aware localization emerging as primary bottlenecks; \(iii\) Improving multimodal interaction capabilities and long\-term spatial reasoning is crucial for advancing embodied intelligence\. These findings highlight that faithful evaluation of ESR demands benchmarks tightly coupling perception, reasoning and action within realistic and continuous environments\.

## EDMA: Entropy\-Driven Multimodal Answering

**Authors:** Emanuele Mezzi; Gertjan Burghouts; Fabio Massacci; Mengyuan Zhang

**ID:** 150520\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150520

[Paper](<https://openreview.net/forum?id=hUf4I26zIr>) | [PDF](<https://openreview.net/pdf?id=hUf4I26zIr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150520>)

Multimodal question answering \(MMQA\) is based on integrating heterogeneous data sources, selectively leveraging relevant modalities, and ignoring distractors\. Existing approaches based on Multimodal Large Language Models \(MLLMs\) improve performance by splitting the task into intermediate steps, but do not quantify how each modality contributes to reaching the final answer\. We argue that quantifying the effect that each modality has on the answering process improves process traceability and final performance\. Thus, we propose Entropy\-Driven Multimodal Answering \(EDMA\), which uses logical entropy to formalise multimodal QA as an iterative process of entropy reduction and to quantify the contribution of each modality in distinguishing correct from incorrect candidate answers\. This enables the construction of quantifiable answering trajectories, where each step is associated with a measurable entropy reduction\. EDMA introduces \(i\) modality\-conditioned partitioning to estimate unimodal entropy reduction, \(ii\) entropy\-driven multimodal fusion to capture complementary information across modalities, and \(iii\) entropy\-based selection of the answering trajectory that minimises the most logical entropy\. Experiments on multimodal QA benchmarks show that EDMA consistently outperforms prompting\-based baselines and state\-of\-the\-art methods\. Averaged across datasets, EDMA achieves gains of $12\.8$ and $19\.8$ F1 points over the strongest prompting baseline and state\-of\-the\-art system, respectively\. Moreover, we show that higher entropy correlates with more false positives and, through controlled interventions on the choice of the answering trajectory, provide evidence that lower\-entropy partitions causally reduce false positives, validating entropy level as a reliable proxy for performance\. We share our code at https://anonymous\.4open\.science/r/EDMA/README\.md\.

## BioXArena: Benchmarking LLM Agents on Multi\-Modal Biomedical Machine Learning Tasks

**Authors:** Loka Li; Duzhen Zhang; Xingbo Du; Leonard Song; Zixiao Wang; Assanali Aukenov; Noel Thomas; Shakhnazar Sailaukan; Yonghan Yang; Feilong Chen; Jiahua Dong; Kun Zhang; Bin Zhang; Le Song

**ID:** 138952\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138952

[Paper](<https://openreview.net/forum?id=uFVrUm3zfO>) | [PDF](<https://openreview.net/pdf?id=uFVrUm3zfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138952>)

Large language model \(LLM\) agents increasingly automate machine\-learning model building, yet biomedical benchmarks emphasize question answering, reasoning, and tool use or cover narrow slices of biomedical ML coding\. We introduce BioXArena, a biomedical machine learning \(BioML\) coding benchmark for task\-specific model building on heterogeneous, often multi\-modal datasets\. It contains 76 end\-to\-end tasks across 9 domains: sequence, single\-cell, structure, network biology, chemical biology, perturbation dynamics, phenotype\-\-disease, imaging, and text\-integrated tasks\. Each task packages primary\-source data with hidden labels, held\-out graders, and biology\-aware metrics on a unified 0\-to\-100 scale; agents write runnable code, train models, and predict private test samples\. BioXArena emphasizes realistic data interfaces: most tasks require agents to integrate multiple input sources, including 46 tasks that combine distinct modality families\. We compare 18 harness\-\-backbone configurations: general\-purpose coding, biomedical, and ML agents plus our Minimal runner, all under the same controlled resource configuration\. Codex with GPT\-6 Astra achieves the highest task\-level average score of 73\.91 among 18 configurations, closely followed by Claude Code with Opus 5\.5 \(73\.79\)\. Matched\-backbone comparisons show higher observed scores for mature coding systems than for Minimal; seven Minimal backends characterize model differences under a fixed runner\. Beyond the main leaderboard, ablations, robustness checks, and scaling, runtime, and failure\-mode analyses characterize how backbones, scaffolds, budgets, and domains affect BioML coding performance, exposing modeling and execution gaps across agent and LLM backbone families\.

## ProQuant: Progressive Quantization\-aware Training for Edge MLLMs

**Authors:** Yufei Xue; Yushi Huang; Jiawei Shao; Pingcheng Dong; Yonghao Tan; Shiyao Li; Kwang\-Ting Cheng; Jun Zhang

**ID:** 148767\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148767

[Paper](<https://openreview.net/forum?id=vCwUxyqgph>) | [PDF](<https://openreview.net/pdf?id=vCwUxyqgph>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148767>)

Multi\-modal large language models \(MLLMs\) with impressive perception and understanding capabilities will enable a range of downstream applications\. However, their substantial computational and memory requirements hinder the real\-world implementation, particularly for resources\-constrained edge devices\. Quantization has emerged as an effective solution for deploying large models\. While post\-training quantization \(PTQ\) successfully retrains the performance at moderate bit\-width \(\\textit\{e\.g\.\}, W8A8\), it suffers from severe performance degradation under low\-bit quantization \(\\textit\{e\.g\.\}, W4A8/W8A8\), especially for small\-scale models that are more suitable for edge deployment\. In this paper, we propose \\texttt\{ProQuant\}, a novel weight\-activation quantization\-aware training \(QAT\) framework tailored for low\-bit MLLMs\. First, to align the limited finetuning dataset distribution with the pretrained dataset distribution, we propose a self\-relabeling \(SRL\) scheme to resample the responses of the open\-source multimodal dataset\. Second, we are the \\textit\{first\} to take a decoupled view of multi\-modal \(MM\) understanding and language modeling abilities\. We propose a progressive block activation \(PBA\) mechanism to prioritize the MM understanding recovery\. We also introduce a vision\-sensitive factor $\\vec\{\\tau\}$ that effectively identifies the MM\-critical layers\. Extensive experiments across various benchmarks, covering models with 2B$\\sim$8B parameters, show that \\texttt\{ProQuant\} significantly outperforms existing methods\. For example, our W4A8 \\texttt\{Qwen3\-VL\-2B\-Instruct\} improves average accuracy by impressively 6\.6\\% and achieves performance comparable to full precision counterparts with only $\\sim$1\\% performance drop\.  Code will be released upon acceptance\.

## Rethinking Contrastive Loss in CLIP Post\-training: A Complementary Framework with Frozen Text Encoder

**Authors:** Zidan Wang; Yaqian Li; xiaokai zhang; Kun He; Kaiwen Long; Hanpeng Liu

**ID:** 148979\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148979

[Paper](<https://openreview.net/forum?id=tjKgJbAYn9>) | [PDF](<https://openreview.net/pdf?id=tjKgJbAYn9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148979>)

CLIP serves as a foundational vision\-language model and the de facto  vision encoder for downstream VLMs such as LLaVA\. Post\-training  offers a resource\-efficient route to refine CLIP, but recent work  argues that the standard contrastive loss is unsuitable for  post\-training due to catastrophic forgetting under small batches,  motivating designs that abandon the contrastive objective in favor  of distillation\. We revisit this premise and find that the reported  forgetting is not caused by insufficient negatives, but by an  inappropriate magnitude of the contrastive temperature $\\tau$: with  $\\tau$ set sufficiently small, contrastive loss becomes the  strongest single\-loss post\-training objective\. Building on this  finding, we propose \\textbf\{ComCLIP\}, a complementary post\-training  framework that freezes CLIP's text encoder\-\-\-preserving  compatibility with downstream VLMs\-\-\-and trains the vision encoder  under three complementary losses operating in the shared contrastive  space: a properly\-tempered contrastive loss for image\-text  alignment, an MSE anchoring loss against the original CLIP for  preserving the pretrained feature manifold, and a relational  distillation loss from DINOv2 for fine\-grained visual knowledge  injection\. With only one epoch on small data, ComCLIP consistently  outperforms prior post\-training methods on ViT\-B/16 and ViT\-L/14  across zero\-shot classification, retrieval, linear probing, and  MMVP, achieving up to $\\mathbf\{\+7\.41\}$ points on MMVP\. Furthermore,  ComCLIP serves as a drop\-in vision encoder for LLaVA\-7B, improving  average performance across $8$ standard VLM benchmarks without any  re\-alignment of the LLM or projector\.

## ITO: Multi\-View Alignment and Training\-Time Fusion for Image\-Text Pretraining

**Authors:** Hanpeng Liu; Yaqian Li; Zidan Wang; Shuoxi Zhang; Zonglin Zhao; Zi\-Hao Bo; rinyoichi takezoe; Kaiwen Long; Kun He

**ID:** 152157\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152157

[Paper](<https://openreview.net/forum?id=V6FtgDk4Nx>) | [PDF](<https://openreview.net/pdf?id=V6FtgDk4Nx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152157>)

Image\-\-text contrastive pretraining has become a dominant paradigm for visual representation learning, yet existing methods often yield representations that remain partially organized by modality rather than by semantics\. We propose \\textbf\{ITO\}, a framework addressing this limitation through two complementary mechanisms with distinct roles\. \\emph\{Multimodal multiple alignment\} enriches supervision by constructing diverse cross\-modal correspondences from multi\-view image augmentations, providing the primary source of discriminative gain\. A lightweight \\emph\{training\-time multimodal fusion\} module then acts as a geometric regularizer, encouraging the encoders to produce features that are compatible under fusion and thereby reducing modality\-induced separation\. Crucially, the fusion module is discarded at inference, preserving the efficiency of standard dual\-encoder architectures while incurring training\-time overhead only\. Extensive experiments across pretraining scales from millions to billions of image\-\-text pairs show that ITO consistently outperforms strong baselines on classification, retrieval, and multimodal benchmarks\. Our analysis further reveals that beyond accuracy gains, training\-time fusion plays a stabilizing role in optimization, mitigating the late\-stage overfitting commonly observed in aggressive contrastive learning\.

## Can Linguistic Reasoning Vectors Enhance Multimodal Reasoning Ability?

**Authors:** Ziyi Wang; Li Li; Aolin Zhou; Yankun Shen; Liu Chonghan; Shuxia Lin; Xu Yang

**ID:** 155152\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155152

[Paper](<https://openreview.net/forum?id=7uYUPiCWug>) | [PDF](<https://openreview.net/pdf?id=7uYUPiCWug>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155152>)

Most Vision\-Language Models \(VLMs\) are built by extending pretrained Large Language Models \(LLMs\) with visual modules and multimodal alignment\. However, this multimodal scaling often degrades the language\-side reasoning ability originally encoded in the base LLM\. While the base LLM retains usable reasoning ability after scaling, the aligned VLM itself cannot reliably access this ability\. Therefore, recovering degraded reasoning capability in VLMs may be more effective when using the base LLM as the source rather than relying on the VLM alone\. Motivated by this, we propose \*\*LIFT\*\* \(\*\*L\*\*anguage\-side reason\*\*i\*\*ng \*\*F\*\*acilitation and \*\*T\*\*ransfer\), a lightweight vector\-intervention method that transfers reasoning capability from the base LLM to the VLM without retraining the backbone\. LIFT defines \*\*Reasoning Vectors\*\* as answer\-token hidden\-state differences between a Reasoner path with an explicit reasoning trace and a Solver path without it, and injects these vectors into language\-side activations of the target VLM\. LIFT further supports learnable vector adaptation while keeping the VLM backbone frozen\. We evaluate LIFT on two VLMs across six reasoning benchmarks, comparing Reasoning Vectors extracted from the base LLM and from the aligned VLM under matched protocols\. Results show that LLM\-derived vectors consistently outperform VLM\-derived vectors, confirming that the base LLM is a more effective source for recovering reasoning\. LIFT partially recovers degraded reasoning through lightweight language\-side interventions\. Further analyses show that Reasoning Vectors influence intermediate reasoning behavior rather than merely altering final answers\.

## Which Way Did It Move? Diagnosing and Overcoming Directional Motion Blindness in Video LLMs

**Authors:** Jongseo Lee; Hyuntak Lee; Sunghun Kim; Sooa Kim; Jihoon Chung; Jinwoo Choi

**ID:** 153430\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153430

[Paper](<https://openreview.net/forum?id=LOIQXC7mpg>) | [PDF](<https://openreview.net/pdf?id=LOIQXC7mpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153430>)

Video Large Language Models \(Video\-LLMs\) have made rapid progress on temporal video understanding, yet many fail at a basic perceptual primitive: signed image\-plane motion direction\. On simple videos of a single object moving left, right, up, or down, most Video\-LLMs perform near chance, with above\-chance cases largely attributable to prediction biases rather than genuine direction understanding\. We call this failure directional motion blindness\. We localize the failure by tracing motion direction information through the Video\-LLM pipeline\. Motion direction remains linearly accessible from the vision encoder, projector, and LLM hidden states, but the readout fails to bind this signal to the correct verbal answer option, revealing a direction binding gap\. Although synthetic motion direction instruction tuning reduces this gap on the source domain, motion direction concept vector analysis shows that visual complexity weakens the signal magnitude and limits out\-of\-domain generalization\. We introduce MODIRECT, a dataset family for motion direction instruction tuning and evaluation, and DeltaDirect, a diagnosis\-driven, projector\-level objective that predicts normalized 2\-D motion vectors from adjacent\-frame feature deltas\. On MODIRECT\-SYNBENCH, instruction tuning with DeltaDirect improves motion direction accuracy from 25\.9% to 85\.4%\. On MODIRECT\-REALBENCH, DeltaDirect improves real\-world motion direction accuracy by 21\.9 points over the vanilla baseline without real\-world tuning data, while preserving standard video\-understanding performance\.

## ProCLIP: Progressive Vision\-Language Alignment via LLM\-based Embedder

**Authors:** Xiaoxing Hu; Kaicheng Yang; Ziqi Ye; Ziyang Gong; Qi Ming; Zonghao Guo; Yu Tian; Xiang An; Ziyong Feng; Xue Yang

**ID:** 151998\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151998

[Paper](<https://openreview.net/forum?id=WH8ZDT099q>) | [PDF](<https://openreview.net/pdf?id=WH8ZDT099q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151998>)

Contrastive Language\-Image Pre\-training \(CLIP\) is fundamentally limited by its 77\-token restriction, lack of multilingual capabilities, and coarse\-grained semantic representations\. While replacing CLIP’s native text encoder with a Large Language Model \(LLM\)\-based embedder offers a promising solution, direct, from\-scratch alignment can disrupt the semantic structures learned during pre\-training\. This often leads to degradation of cross\-modal knowledge and particularly impairs recognition capabilities in zero\-shot scenarios\. In this paper, we propose ProCLIP, a curriculum\-learning\-inspired progressive alignment framework designed to systematically bridge the LLM embedder and CLIP's visual space, unlocking CLIP's potential for long\-text, multilingual, and fine\-grained understanding\. Our framework operates in two stages: \(1\) Representation Inheritance, which distills CLIP's original text\-space knowledge into an LLM adapter to establish a robust initial vision\-language prior, and \(2\) Contrastive Tuning, which refines the cross\-modal alignment with self\-distillation regularization on the image encoder to further prevent catastrophic forgetting\. To maintain semantic and geometric consistency, we introduce instance\-level semantic and global structural alignment constraints throughout both stages\. Extensive experiments demonstrate that ProCLIP improves zero\-shot classification accuracy by 6\.8%\-\-13\.5% over existing LLM\-augmented baselines and achieves state\-of\-the\-art performance in diverse long\-text, multilingual, and fine\-grained cross\-modal retrieval tasks under comparable settings\.

## DriveSpatial: A Benchmark for Spatiotemporal Intelligence in VLMs for Autonomous Driving

**Authors:** Anh Hao Vo; Khoa Vo; Phu Loc Nguyen; Sieu Tran; Duc Nguyen; Cuong Ngo; Gladys Gawugah; Sreevenkata A Godavarthi; Chase Rainwater; Nghi Bui; Anh Nguyen; Duy M\. H\. Nguyen; Ngan Le

**ID:** 139711\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139711

[Paper](<https://openreview.net/forum?id=92Titnm7WK>) | [PDF](<https://openreview.net/pdf?id=92Titnm7WK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139711>)

Spatiotemporal intelligence in autonomous driving \(AD\) requires an agent to integrate multi\-view observations into a coherent scene representation, maintain object continuity across viewpoints and time, and reason about spatial relations, interactions, and future dynamics\. However, existing AD vision\-language benchmarks largely focus on single\-view, static, ego\-centric, or single\-source question answering, leaving it unclear whether current Vision\-Language Models \(VLMs\) can truly construct and reason over dynamic driving scenes\. We introduce DriveSpatial a benchmark of 15\.6K human\-verified QA pairs across 20 tasks from five large\-scale AD datasets\. DriveSpatial evaluates four abilities: Cognitive Scene Construction, Multi\-view Relational Understanding, Temporal Reasoning, and Generalization\. Unlike prior benchmarks, DriveSpatial is generated from a dynamic multi\-relational scene graph that encodes object states, spatial relations, interactions, camera visibility, and temporal correspondences, enabling QA pairs that enforce genuine cross\-view and spatiotemporal reasoning\. Evaluating 15 representative VLMs reveals a substantial human–model gap: the strongest model trails humans by 28\.4 points, with Cognitive Scene Construction emerging as the key bottleneck\. Further diagnostics show that language\-only prompting is insufficient, while explicit BEV grounding consistently improves performance\. These results suggest that current VLMs lack the scene\-construction ability needed for reliable spatiotemporal driving intelligence\. DriveSpatial and its construction pipeline will be released to support future research\.

## MUST: Stage\-Adaptive Stability Control for Test\-Time Scaling in Multimodal Reasoning

**Authors:** YunFeng Deng

**ID:** 153464\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153464

[Paper](<https://openreview.net/forum?id=L7uQSgKIXG>) | [PDF](<https://openreview.net/pdf?id=L7uQSgKIXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153464>)

Test\-time scaling \(TTS\) improves reasoning by allocating additional inference compute, but in multimodal large language models \(MLLMs\), more compute is not always reliable\. Longer reasoning may amplify visual misperception, induce answer drift, reinforce majority traps, or turn initially correct predictions into overthought failures\. We propose MUST, a training\-free framework that recasts multimodal TTS as stage\-conditioned stability control\. MUST separates inference into reasoning and verification stages and assigns each stage a different reliability criterion\. During reasoning, Contrastive Answer\-Manifold Stability \(CAMS\) selects answers whose supporting trajectories form compact and separable latent groups\. During verification, Attention\-Free Support\-Chain Stability \(AF\-SCS\) evaluates whether explicit visual evidence and subsequent reasoning form a stable latent support chain, without relying on token\-to\-patch attention maps\. Experiments on multimodal reasoning benchmarks show that MUST improves the accuracy\-compute trade\-off and reduces overthinking\-induced errors\. These results suggest that reliable MLLM test\-time scaling should adaptively control when and how extra compute is trusted, rather than simply increasing inference budget\.

## Beyond SFT\-to\-RL: Pre\-alignment via Black\-box On\-policy Distillation for Multimodal RL

**Authors:** Sudong Wang; Weiquan Huang; Xiaomin Yu; Zuhao Yang; Hehai Lin; Keming Wu; Chaojun Xiao; CHEN CHEN; Wenxuan Wang; Beier Zhu; Yunjian Zhang; Chengwei Qin

**ID:** 153111\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153111

[Paper](<https://openreview.net/forum?id=NrU0jOBYTv>) | [PDF](<https://openreview.net/pdf?id=NrU0jOBYTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153111>)

The standard post\-training recipe for large multimodal models \(LMMs\) applies supervised fine\-tuning \(SFT\) on curated demonstrations followed by reinforcement learning with verifiable rewards \(RLVR\)\. However, SFT introduces distributional drift that neither preserves the model's original capabilities nor faithfully matches the supervision distribution\. This problem is further amplified in multimodal reasoning, where perception errors and reasoning failures follow distinct drift patterns that compound during subsequent RL\. We introduce \\textbf\{PRISM\}, a three\-stage pipeline that mitigates this drift by inserting an explicit distribution\-alignment stage between SFT and RLVR\. Building on the principle of on\-policy distillation \(OPD\), PRISM casts alignment as a black\-box, response\-level adversarial game between the policy and a Mixture\-of\-Experts \(MoE\) discriminator with dedicated perception and reasoning experts, providing disentangled corrective signals that steer the policy toward the supervision distribution without requiring access to teacher logits\. While 1\.26M public demonstrations suffice for broad SFT initialization, distribution alignment demands higher\-fidelity supervision; we therefore curate 113K additional demonstrations from Gemini\~3 Flash, featuring dense visual grounding and step\-by\-step reasoning on the hardest unsolved problems\. Experiments on Qwen3\-VL show that PRISM consistently improves downstream RLVR performance across multiple RL algorithms \(GRPO, DAPO, GSPO\) and diverse multimodal benchmarks, improving average accuracy by \+4\.4 and \+6\.0 points over the SFT$\\rightarrow$RLVR baseline on 4B and 8B, respectively\.

## LoMo: Local Modality Substitution for Deeper Vision\-Language Fusion

**Authors:** Feng Han; Zhixiong Zhang; Zheming Liang; Yibin Wang; Jiaqi Wang

**ID:** 154345\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154345

[Paper](<https://openreview.net/forum?id=EHe0liGkCc>) | [PDF](<https://openreview.net/pdf?id=EHe0liGkCc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154345>)

Vision\-Language Models \(VLMs\) have achieved substantial progress across a wide range of understanding and reasoning tasks, driven by large\-scale image\-text training aimed at multimodal fusion\. Ideally, replacing a textual question with its rendered\-image counterpart should leave model performance essentially unaffected\. In practice, however, such modality substitution induces dramatic performance degradation\. We attribute this carrier sensitivity issue to an inherent bias in current training corpora\. Across prevalent datasets such as image captioning, VQA, OCR, and web\-sourced interleaved data, text and images are typically organized into distinct and asymmetric roles, with text serving as linguistic queries and images as visual references\. Such data bias leads VLMs to exhibit distinct preferences for information acquisition across different modalities\. Consequently, VLMs fail to align representations of  semantically equivalent content across textual and visual carriers, making model reasoning fragile under modality substitution\. To address this, we propose Local Modality Substitution \(LoMo\), a lightweight, architecture\-agnostic data curation paradigm designed to provide supervision for cross\-modal representational invariance between semantically equivalent text and image carriers\. LoMo achieves this by reformulating single\-modality prompts into seamlessly interleaved multimodal sequences\. It dynamically selects target text spans and recasts them as rendered images, thereby preserving the same semantics across "text, visual, text" carriers\. Extensive experiments across 13 diverse multimodal benchmarks demonstrate that LoMo significantly improves overall multimodal reasoning and yields deeper cross\-modal fusion\. Specifically, it delivers consistent gains across foundational models, improving over standard SFT by 2\.67 points on LLaVA\-OneVision\-1\.5\-8B and 2\.82 points on Qwen3\.5\-9B\.

## Hierarchical Adaptive Frame Sampling For Video Understanding

**Authors:** Yuyao Sun; Daiqi Shi; Shuang Li; Liao Zhang; Yang Cai; deqing wang

**ID:** 151004\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151004

[Paper](<https://openreview.net/forum?id=dfK9DJR2XH>) | [PDF](<https://openreview.net/pdf?id=dfK9DJR2XH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151004>)

Due to context\-length constraints, most MLLMs cannot process full\-length videos and therefore rely on sampling a subset of frames as input\. However, existing sampling methods, ranging from uniform sampling to relevance\-based selection, are often driven by a single sampling principle and thus struggle to accommodate the heterogeneous evidential requirements of different queries: some demand a holistic understanding of how the video unfolds over time, while others hinge on fine\-grained events within a short temporal window\. To address this limitation, we propose Hierarchical Adaptive Frame Sampling \(HAS\), a two\-stage frame sampling framework\. In the first stage, Backbone Frame Construction, we apply a Determinantal Point Process \(DPP\) to sample frames that are both query\-relevant and non\-redundant\. These selected frames capture key moments across the video and form the backbone of the sampling set, providing a foundation for subsequent enrichment\. In the second stage, Adaptive Contextual Enrichment, we analyze the temporal distribution of the backbone frames to infer the query type and adaptively allocate the remaining frame budget between Local and Global Context\. The Local Context enriches the backbone with fine\-grained temporal dynamics and short\-range causal relations, whereas the Global Context connects temporally isolated evidence and provides a holistic view of the entire video to support global understanding\. Through such a hierarchical two\-stage process, HAS effectively addresses diverse query requirements\. Incorporated into three leading MLLMs, it demonstrates consistently superior performance across the Video\-MME, LongVideoBench, and MLVU benchmarks\. We have released our code\.

## GLINT: Sparsely Gated Vision\-Language Alignment for Fine\-Grained Radiology Representations

**Authors:** Jonggwon Park; Seongeun Lee; Junhyun Park; Hannah Yun; Hyunwoong Kim; Sohyun Jeong; Hyewon Kang; Byungmu Yoon; Kyoyun Choi

**ID:** 154081\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154081

[Paper](<https://openreview.net/forum?id=GLHgQkefOp>) | [PDF](<https://openreview.net/pdf?id=GLHgQkefOp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154081>)

Vision\-language models \(VLMs\) for radiology have emerged as a scalable paradigm by leveraging image\-report pairs naturally produced in clinical workflows\. However, this pairing reveals a mismatch in scale: each finding occupies only a small region of the image, yet supervision is provided only at the global image\-report level\. This poses a central challenge: prior approaches spread weight densely across all patches rather than concentrating on the sparse subset relevant to a given query\. To address this, we present GLINT \(Gated Language\-Image alignmeNT\), a framework that explicitly models this sparse correspondence\. On the alignment side, we introduce Sparsely Gated Alignment, a novel architecture in which a sigmoid gate over a separate gate embedding space activates only the patches relevant to each textual query, enforcing explicit sparsity\. On the representation side, we add Dense Feature Regularization, which anchors the trainable encoder's intermediate features to a frozen self\-supervised learning \(SSL\) teacher, preserving the fine\-grained patch features that the gate relies on\. The same recipe applies to both 2D chest X\-ray \(CXR\) and 3D chest computed tomography \(CT\), built with DINOv3 and V\-JEPA 2\.1, respectively\. GLINT enables zero\-shot classification, grounding, and segmentation from free\-text queries, and to our knowledge is the first to demonstrate zero\-shot segmentation on 3D CT volumes without mask supervision\. Notably, the most pronounced gains arise on zero\-shot grounding and segmentation, where sparse, query\-specific localization is required, consistent with our design intent\. In downstream evaluation, GLINT outperforms both SSL encoders and medical VLMs on classification, report generation, and segmentation\.

## TIGER: Bridging the Multimodal Reasoning\-Access Gap via Modality Counterfactuals

**Authors:** Gregory Kang Ruey Lau; Huynh Minh Nguyen; Bryan Kian Hsiang Low

**ID:** 152182\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152182

[Paper](<https://openreview.net/forum?id=Ux4SAiuLgN>) | [PDF](<https://openreview.net/pdf?id=Ux4SAiuLgN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152182>)

Multimodal Large Language Models \(MLLMs\) can exhibit strong text\-based reasoning yet fail to apply the same capabilities to semantically equivalent visual inputs\. We study this failure mode in a controlled setting by rendering text\-only reasoning problems as images, preserving semantic content while changing only the input modality\. Across multiple MLLM families, models solve the same problems substantially better from text than from images\. We characterize this discrepancy as a reasoning\-access gap, where models may correctly perceive visual content but still fail to route that content into the latent reasoning machinery used for text\-based tasks\. To bridge this gap, we propose TIGER \(Text\-to\-Image Gap\-targeted Training for Enhanced Reasoning\), a framework that repurposes text\-only reasoning corpora into effective multimodal training data\. By mining "modality counterfactuals", instances where a model succeeds on a text problem but fails on its semantically\-equivalent rendered image, TIGER provides targeted supervision for reasoning\-access failures without requiring manually curated multimodal datasets\. We implement TIGER using image\-conditioned Group Relative Policy Optimization \(GRPO\), along with SFT and DPO variants, and show how it consistently narrows the modality gap and yields generalized visual reasoning performance gains in multimodal reasoning benchmarks such as MathVerse and EMMA\. We show that Reinforcement Learning with Verifiable Reward\-based models still exhibit modality\-dependent reasoning gaps, and that our training recipe can further reduce these gaps\. Further analysis using reasoning\-subspace activation and activation patching shows that TIGER enables visual representations that better activate reasoning\-relevant latent subspaces of the language backbone\. Our results suggest that advancing multimodal intelligence requires moving beyond perceptual alignment toward explicit visual access to existing reasoning machinery\.

## Two Drifts, One Principle: Conflict\-Aware Spectral Consolidation for Multimodal Continual Learning

**Authors:** Haiyi Zhang; Qianyi Cai; Hanqing Wang; Zilin Wang; Xinyue Di; Yijie Xu; Yili Wang; Tianfu Wang; Yifan Han; Hui Xiong

**ID:** 151270\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151270

[Paper](<https://openreview.net/forum?id=bdROoNCzjt>) | [PDF](<https://openreview.net/pdf?id=bdROoNCzjt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151270>)

Multimodal continual learning requires MLLMs to acquire new domains and abilities sequentially while retaining previous capabilities\. MoE\-based methods preserve task\-specific knowledge, but inference relies on reliable routing\. We instead study unified continual multimodal consolidation, which forms one shared model from sequential LoRA updates and projector shifts\. LoRA merging naturally supports language\-side consolidation, but extending it to MLLMs raises two challenges\. First, sequential LoRA updates may interfere and overwrite directions important to earlier tasks\. Second, projector mismatch may make the consolidated LoRA update incompatible with the final visual\-language alignment\. To address these challenges, we propose \*\*CASC\*\* \(\*\*C\*\*onflict\-\*\*A\*\*ware \*\*S\*\*pectral \*\*C\*\*onsolidation\), a method that jointly consolidates LoRA and projector updates\. CASC maintains fixed\-rank spectral banks and uses a shared protected subspace memory rule to preserve dominant historical directions while incorporating compatible new updates under fixed rank budgets, yielding a single model without replay data or inference time routing\. Both theoretical analysis and experimental results demonstrate the effectiveness of CASC in addressing multimodal continual learning\.

## SimVLA: Attributing Gains in VLA Models Through Controlled Ablation

**Authors:** Yuankai Luo; Woping Chen; Tong Liang; Zhenguo Li

**ID:** 152120\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152120

[Paper](<https://openreview.net/forum?id=VMuUVQecnd>) | [PDF](<https://openreview.net/pdf?id=VMuUVQecnd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152120>)

Vision\-Language\-Action \(VLA\) models often bundle architectural changes with different pretraining data, backbone scales, and optimization recipes, obscuring what actually drives progress\. We introduce SimVLA, a deliberately minimal VLA—a standard vision\-language backbone with a lightweight continuous\-action head—as a controlled testbed for this attribution problem\. Across LIBERO, CALVIN, WidowX, and Google Robot, one\-knob\-at\-a\-time ablations show that training dynamics are the largest measured driver, producing performance swings of $\\Delta$$\\approx$54\-89\\%, while task configuration and architecture have smaller effects under matched settings\. Despite using a small backbone and no additional large\-scale robot\-data VLA pretraining before benchmark\-specific training, SimVLA reaches 98\.6\\% average success on LIBERO, remains competitive across the other benchmarks, and transfers to held\-out real\-robot scenes\. These results suggest that simple, carefully controlled VLA baselines remain underexplored and provide a calibration point for future architectural claims within the VLM\-encoder plus lightweight\-head family\.

## Hidden Forgetting in Continual Multimodal Learning: When Accuracy Survives but Grounding Fails

**Authors:** Qianyu Chen; Canran Xiao; Runxuan Tang

**ID:** 153314\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153314

[Paper](<https://openreview.net/forum?id=MDf0kUD4oe>) | [PDF](<https://openreview.net/pdf?id=MDf0kUD4oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153314>)

Multimodal large language models must continually adapt to evolving tasks and domains, yet standard continual learning metrics mainly measure whether old answers remain correct, leaving the stability of multimodal grounding largely unexamined\. We study this overlooked failure mode and ask whether a continually adapted MLLM can preserve not only what it answers, but also how it uses visual, textual, OCR, chart, and document evidence\. We identify hidden evidence\-use forgetting, where answer accuracy is retained while the model silently shifts toward different or less grounded evidence channels, and propose RCL, a replay\-free reliance\-constrained continual learning framework\. RCL freezes the previous checkpoint as a behavioral reference, estimates teacher and student evidence\-reliance profiles through counterfactual channel interventions, and jointly optimizes task learning, prediction preservation, and reliance preservation without adding inference\-time cost\. Across CoIN, COAST, MCITlib, and an evidence\-sensitive multimodal stream, RCL consistently improves final performance and reduces forgetting over replay\-free, PEFT, routing, and memory\-assisted baselines, while substantially lowering modality reliance drift, dominant evidence flips, and hidden forgetting rates\. These results suggest that robust continual multimodal learning requires preserving the evidence path behind correct answers, not merely the answers themselves\.

## FedIBS: Federated Vision\-Language Adaptation via Intrinsic Bias Selection

**Authors:** Xiaoming Wu; Wei Wenyu; Xin Wang; Ming Yang

**ID:** 153075\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153075

[Paper](<https://openreview.net/forum?id=OBeuu8d4RS>) | [PDF](<https://openreview.net/pdf?id=OBeuu8d4RS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153075>)

Federated adaptation of large vision\-language models \(VLMs\) is appealing for privacy\-sensitive applications but must contend with client data heterogeneity, strict communication budgets, and on\-device inference constraints\. Recent methods predominantly introduce additive adaptation interfaces, such as learnable prompts or adapter modules, which attach extra trainable components to the frozen backbone, inflating both parameter counts and inference latency\. We challenge this additive paradigm and ask: can robust federated VLM adaptation be achieved through a compact intrinsic interface alone? We answer this question with \\textbf\{FedIBS\} \(Federated Intrinsic Bias Selection\), a module\-free framework that fine\-tunes only the biases in feed\-forward network projections\. FedIBS operates on existing backbone parameters and introduces zero additional inference cost\. To make such compact intrinsic adaptation viable under heterogeneous clients, we further propose a Fisher\-guided progressive masking mechanism that disentangles shareable and personalized bias coordinates\. Each client retains personalized coordinates locally and communicates only the shareable subset for aggregation, enabling sparse communication while preserving client\-specific adaptation\. Extensive experiments on diverse datasets and heterogeneity settings demonstrate that FedIBS consistently outperforms recent federated prompt\- and adapter\-based baselines in both personalization and generalization, all while achieving substantially lower communication cost\.

## A General Concept\-based Decomposition for Vision–Language Embeddings

**Authors:** Simone Alberto Peirone; Ortal Senouf; Francesca Pistilli; Giuseppe Averta; Pascal Frossard

**ID:** 151861\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151861

[Paper](<https://openreview.net/forum?id=XKwu7MhFTF>) | [PDF](<https://openreview.net/pdf?id=XKwu7MhFTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151861>)

Vision\-language models are designed to capture the compositional structure of the world through multi\-modal alignment; however, it remains unclear whether their representations truly align with the way a human would naturally describe the same visual input\. Prior works attempt to decompose visual embeddings into their concept\-level contributions, but their instance\-level optimization is inherently local and does not capture the model’s global semantic structure, which is essential for compositional generalization across different inputs, tasks and domains\. We introduce GRACE, a method that learns this concept\-based structure at the feature space level, producing semantic and general concept decompositions\. To achieve this, we propose a novel training objective that preserves the geometric relations of different samples in the concept space, enabling a better understanding of how concepts compose and relate to each other\. We validate GRACE on several image and video benchmarks, showing that its concept decomposition is aligned with human perception and achieves faithful decompositions across different tasks and domains\. With minimal overhead, GRACE makes existing Vision\-Language Models more interpretable, while preserving most of their original performance\.

## ActionUNet: Improving Robustness of VLA Models with Efficient Multi\-scale Fine\-tuning

**Authors:** Di Zhu; Ziheng Yan; Fang Wan

**ID:** 149076\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149076

[Paper](<https://openreview.net/forum?id=t3p8yqEZl7>) | [PDF](<https://openreview.net/pdf?id=t3p8yqEZl7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149076>)

Vision\-Language\-Action \(VLA\) models have shown great promise for robotic manipulation by mapping multi\-modal semantics to physical actions\. However, this mapping inherently struggles to align these coarse\-grained semantics with fine\-grained temporal execution\. It leaves VLA models with limited generalization and insufficient robustness in cluttered environments\. To overcome this issue, we propose ActionUNet, an efficient multi\-scale fine\-tuning framework that enhances pre\-trained VLA models with minimal computational cost\.  ActionUNet first constructs a lightweight  temporal U\-Net within the temporal\-aligned action feature space to fuse hierarchical structural priors, effectively bridging the scale gap between semantics and temporal executions\.  Recognizing that multi\-scale modeling can disrupt microscopic temporal continuity and cause mechanical oscillations, ActionUNet then employs a conditional SIREN as a continuous action decoder\. Equipped with explicit second\-order smoothness constraints, this decoder guarantees temporal continuity and reduces high\-frequency motion jitter\.  By smoothing temporal discontinuities from multi\-scale fusion, this continuous formulation  reduces mechanical execution failures while preserving the base VLA model's generalization and manipulation robustness\. Extensive experiments on RoboTwin 2\.0 and LIBERO\-Plus benchmarks, together with real\-world hard evaluations, demonstrate that ActionUNet significantly improves $\\pi\_\{0\.5\}$ success rates by absolute 9\.8\\%, 6\.1\\%, and 11\.4\\%, respectively, while also generalizing to the regression\-based OpenVLA\-OFT backbone, highlighting its effectiveness and efficiency as a fine\-tuning strategy\. Code will be made publicly available upon acceptance\.

## EVA\-Cap: Optimizing Audiovisual Video Captioning via Event\-Centric Alignment

**Authors:** Jiapeng Shi; Qiuxia Hou; Jiaqi Leng; Junke Wang; Yanhao Zhang; Haonan Lu; Ziyi Ye; Zuxuan Wu

**ID:** 155915\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155915

[Paper](<https://openreview.net/forum?id=1q1CvwCzHA>) | [PDF](<https://openreview.net/pdf?id=1q1CvwCzHA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155915>)

Recent advances in Omni Language Models \(OLMs\) provide a unified solution for audiovisual video captioning\. Nevertheless, existing approaches predominantly treat captioning as an unstructured text generation process, neglecting the inherent semantic structure of videos and leading to suboptimal fine\-grained audiovisual alignment\. To bridge this gap, we propose EVA\-Cap, a novel framework that decomposes captions into atomic audiovisual events and transforms unstructured text supervision into event\-centric alignment\. We train EVA\-Cap via Supervised Fine\-Tuning \(SFT\) and Group Relative Policy Optimization \(GRPO\) on a self\-curated dataset, EVA\-Data, which is built with event\-centric quality control\. During the GRPO phase, the model is explicitly optimized against three event\-centric alignment targets: global event completeness, intra\-event attribution, and inter\-event synchronization\. Extensive experiments demonstrate that EVA\-Cap significantly outperforms existing methods in event\-centric evaluation \(e\.g\., \+5\.3% average gain on ChronusAV\), while achieving competitive performance on general audiovisual captioning benchmarks \(e\.g\., \+3\.3% on WorldSense\)\.

## Grounding 3D Affordance from Human\-Object\-Interaction Videos via Multimodal Large Language Model

**Authors:** Hanqing Wang; Mingyu Liu; Xiaoyu Chen; Chengwei MA; Yiming Zhong; Yuhao Liu; Wenti Yin; Xing Mu; Jiahao Yuan; Zhiqing Cui; Lu Dai; Zhiyuan Ma; Hui Xiong

**ID:** 150009 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lSZXrNId2d>) | [PDF](<https://openreview.net/pdf?id=lSZXrNId2d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150009>)

3D affordance grounding aims to highlight the actionable regions on 3D objects, which is crucial for embodied AI\. While previous research primarily leverages static cues from language or single images, which often lack the rich interaction context necessary to accurately locate functional zones\. To alleviate this predicament, we collect a comprehensive video\-based 3D affordance dataset, VIDA, which contains 38K human\-object\-interaction \(HOI\) videos covering 16 affordance types, 38 object categories, and 22K point clouds\. Based on VIDA, we propose a strong baseline: VideoAfford, a unified framework that extends Multimodal Large Language Models \(MLLMs\) with fine\-grained affordance segmentation capabilities\. VideoAfford incorporates a latent action encoder to distill dynamic interaction knowledge from demonstration videos and a spatial\-aware loss to encourage geometrically consistent affordance predictions\. Extensive experiments on VIDA show that VideoAfford significantly outperforms strong baselines in both seen and unseen settings, demonstrating its effectiveness in video\-driven 3D affordance reasoning and open\-world generalization\. The dataset and code will be released soon to facilitate future research in this area\.

## PRISM: Spectral Pruning and Reconstruction for Parameter\-Efficient Model Merging of MLLMs

**Authors:** Wuxuan Shi; Haotian Chen; He Li; Qiang Yang; Mang Ye

**ID:** 149785\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149785

[Paper](<https://openreview.net/forum?id=nK1JAuXjwX>) | [PDF](<https://openreview.net/pdf?id=nK1JAuXjwX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149785>)

_Abstract unavailable from the accessible public sources._

## VidVec: Unlocking Video MLLM Embeddings for Video\-Text Retrieval

**Authors:** Issar Tzachor; Dvir Samuel; Rami Ben\-Ari

**ID:** 153091\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153091

[Paper](<https://openreview.net/forum?id=O2hhgaHNkq>) | [PDF](<https://openreview.net/pdf?id=O2hhgaHNkq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153091>)

_Abstract unavailable from the accessible public sources._

## Say the Same, Act Differently: Text\-Orthogonal Action Subspaces in Reasoning Vision\-Language\-Action Models

**Authors:** Zihao Feng; Qingzhao Zhang; Chunyu Xia; Bo Yu; Zhuoqing Morley Mao; Ramesh Govindan

**ID:** 154708\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154708

[Paper](<https://openreview.net/forum?id=BcZ4hfwBik>) | [PDF](<https://openreview.net/pdf?id=BcZ4hfwBik>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154708>)

_Abstract unavailable from the accessible public sources._

## Compressible Representations: Functional Spines in Deep Neural Networks

**Authors:** Niranjan Rajesh; Meenakshi Khosla

**ID:** 154300 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=El13WPr9FG>) | [PDF](<https://openreview.net/pdf?id=El13WPr9FG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154300>)

Deep networks embed inputs in high\-dimensional representations, but how much of this capacity actually drives behavior? We introduce a framework for identifying, at each layer, the subspace of the representation that is functionally relevant for the task\. Using a matrix analogous to the Fisher information but defined over the hidden representation, we rank directions by their influence on downstream computation and project onto the most task\-relevant subspace\. We benchmark this behaviorally grounded compression against three geometric alternatives that preserve variance, local neighborhood structure, or global topology\. Across pretrained vision models, representations are remarkably compressible: a small fraction of the task\-relevant subspace preserves most performance, often requiring far fewer dimensions than geometric alternatives\. We show that this decomposition recovers functionally distinct subspaces within the same representation: on cue\-conflict stimuli, shape\-relevant and texture\-relevant directions are largely non\-overlapping, and ablating one selectively impairs the corresponding task while leaving the other intact\. Task\-relevant subspaces also provide a principled foundation for continual learning: constraining gradient updates to lie orthogonal to the task\-relevant subspaces of prior tasks outperforms standard variance\-based gradient projection methods\. Finally, restricting representational comparisons to task\-relevant subspaces reveals that inter\-model alignment is higher in task\-relevant directions than in task\-irrelevant directions at later layers, and that conditioning on different tasks over the same stimuli uncovers asymmetries that full\-space similarity measures cannot detect\. Together, these results establish that deep networks compute through a low\-dimensional functional core embedded within a much larger representational space, that these cores differ across tasks, and that they provide a unifying basis for compression, continual learning, and representational comparison\.

## Who Needs Labels? Adapting Vision Foundation Models With the Metadata You Already Have

**Authors:** Elouan Gardes; Seung\-Eun Yi; Huy V\. Vo; Théo Moutakanni; Kartik Ahuja; Piotr Bojanowski; Wolfgang Pernice; Loic Landrieu; Camille Couprie

**ID:** 150794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fLuDbpk8Ib>) | [PDF](<https://openreview.net/pdf?id=fLuDbpk8Ib>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150794>)

We propose a label\-free approach to adapt powerful but generic vision foundation models to specialized scientific domains\. Standard supervised fine\-tuning is often ill\-suited to these settings: labels are scarce, and task\-specific training can collapse the model's generality and hurt robustness\. We instead leverage metadata to adapt representations to new domains in a self\-supervised manner\. Our method, META\-DINO, combines a standard self\-supervised objective with flexible metadata guidance that handles both highly granular discrete metadata and continuous metadata\. It encourages the representation to preserve informative factors while suppressing spurious ones\. Across subcellular fluorescence microscopy, Earth observation, wildlife monitoring, and medical imaging, META\-DINO consistently outperforms standard unsupervised domain adaptation and fully supervised adaptation\. It also exceeds highly\-specialized domain\-specific state of the art, while using no task labels for backbone adaptation and only lightweight probes for supervision\.

## MotionHalluc: Diagnosing Kinematic Hallucinations in Fine\-Grained Motion Reasoning

**Authors:** Weile Guo; Shenghong He; Danying Mo; Chengdong Xu; Xuexun Liu; Chao Yu

**ID:** 139755 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6aIVKV32ea>) | [PDF](<https://openreview.net/pdf?id=6aIVKV32ea>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139755>)

Motion instruction generation in cross\-video comparison aims to produce corrective feedback that describes the differences between a query and a reference motion\. However, existing models often generate instructions that exhibit motion hallucinations, failing to reflect actual kinematic differences between paired videos\. To systematically investigate these hallucinations, we introduce MotionHalluc, a dedicated benchmark for evaluating motion hallucinations in paired\-video comparison\. MotionHalluc comprises 1540 fine\-grained questions over 553 video pairs, evaluating hallucinations along three core dimensions: \(1\) directional hallucination, \(2\) attributional hallucination, and \(3\) temporal hallucination\. Extensive evaluations of state\-of\-the\-art large multimodal models demonstrate high susceptibility to these hallucinations\. Furthermore, we provide Perceive\-Parse\-Verify \(PPV\) as a training\-free measurements extraction and verification baseline that converts candidate instructions into executable measurement queries and supplies kinematic measurements at inference time\. Our results show that this simple measurements injection yields an average 10\.6% performance gain across models, suggesting that motion reasoning with explicit quantitative measurements is a key factor in reducing hallucinations in cross\-video comparison\.

## Complementary Cache Guidance with Gradient Disentanglement for Continuous Test\-Time Adaptation

**Authors:** Fanchun Meng; Yuhang Pei; Jiazhen Huang; Tao Ren; Yifan Wang; Wei Ju; Xiao Luo

**ID:** 151298 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bU9thZFC6N>) | [PDF](<https://openreview.net/pdf?id=bU9thZFC6N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151298>)

Continuous test\-time adaptation \(CTTA\) is crucial for deploying vision\-language models \(VLMs\) in real\-world environments where data distributions shift over time\. Existing approaches typically utilize confidence\-driven pseudo\-labeling to enhance the performance on the target domain while retraining VLMs using historical information\. Despite the progress, their performance is far from satisfactory due to error accumulation from noisy pseudo\-labels and optimization interference between newly acquired and historical knowledge\. Towards this end, we propose a novel approach named Complementary Cache Guidance with Gradient Disentanglement \(CURE\) for CTTA of VLMs\. The core of our CURE is to balance instant knowledge acquisition and historical knowledge consolidation using both complementary cache systems and parameter space disentanglement\. In particular, our CURE first constructs affinity structures among diverse text prompts, which guide majority voting to improve the quality of pseudo\-labeling\. More importantly, our CURE introduces a complementary cache system consisting of a short\-term cache and a long\-term cache with sample quality monitoring\. The short\-term cache stores recent reliable samples with high entropy, while the long\-term cache preserves representative samples with high gradient consistency across iterations\. Then, we extract prototypes from both caches for cross\-modal alignment, enabling the model to acquire new knowledge while mitigating old knowledge forgetting\. To further reduce the interference when learning from two caches, we perform low\-rank decomposition of the gradient space, which facilitates historical knowledge consolidation in the null space of short\-term signals\. Extensive experiments on several benchmarks demonstrate the superiority of CURE over state\-of\-the\-art baselines\. Our source codes are available at https://anonymous\.4open\.science/r/CURE\-B486\.

## MUNI: Multimodal Unified Latent Diffusion for Coherent Any\-to\-Any Generation

**Authors:** Kyeongmin Yeo; Yunhong Min; Minhyuk Sung

**ID:** 154839 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AWvbbkHyEX>) | [PDF](<https://openreview.net/pdf?id=AWvbbkHyEX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154839>)

We introduce $\\texttt\{MUNI\}$, an end\-to\-end multimodal latent diffusion framework for any\-to\-any generation that unifies subset\-conditioned cross\-modal generation and unconditional joint sampling through a shared stochastic latent\. Existing multimodal generative models are largely LLM\-based, which limits leveraging modality\-specific generators and requires text\-paired data for training\. Recent diffusion\- and flow\-based any\-to\-any extensions take a different direction but still rely on text\-aligned embeddings, fully\-paired training, or matched\-dimensionality deterministic mappings\. $\\texttt\{MUNI\}$ rests on two complementary contributions, one architectural and one in the training objective\. First, we extend latent diffusion to multimodal any\-to\-any generation \*end\-to\-end\*: instead of the standard two\-stage recipe that precomputes a frozen latent space and then fits a prior over it, $\\texttt\{MUNI\}$ jointly trains modality\-specific encoders, expressive decoders, and a single shared flow\-based prior under one objective\. Second, we identify that the standard aggregation rules of multimodal variational inference are insufficient once coupled with a learned prior and expressive decoders\. A suitable shared latent must simultaneously satisfy \*coherence\* across generated modalities, \*predictive sufficiency\* of subset latents, and \*minimality\* of the latent content\. We propose a routed training objective whose structural choices align the latent with these criteria and admit a minimal\-sufficiency characterization in the realizable setting\. Experiments on PolyMNIST\-Quadrant\-Labels and a large\-scale image\-text\-audio benchmark show $\\texttt\{MUNI\}$ matching or exceeding the strongest baselines on conditional generation while opening its largest margins on unconditional coherence\.

## Unlocking Fine\-Grained Perception in CLIP via Structurally\-Aware Latent Masked Modeling

**Authors:** Juntong Li; Lingwei Dang; Haomin Wu; Ziyan Qiu; Qingxin Xiao; Qingyao Wu

**ID:** 151938 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WiG66zEVDd>) | [PDF](<https://openreview.net/pdf?id=WiG66zEVDd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151938>)

Vision\-Language Models \(VLMs\) such as CLIP excel in global semantic alignment but often lack fine\-grained perceptual capabilities\. This hinders dense prediction tasks and bottlenecks the visual potential of Multimodal Large Language Models \(MLLMs\)\. Existing research has attempted to enhance CLIP's visual representations by incorporating geometric priors from vision\-centric models\. However, these strategies often struggle to achieve deep alignment for both local spatial structures and global semantics, potentially even distorting the original image\-text space\. To address these limitations, we propose SALM, an unsupervised embedding alignment framework based on structurally\-aware latent mask modeling\. SALM effectively synergizes local and global alignment via a dual\-path design combining explicit and implicit mechanisms, without requiring any image\-text pairs\. First, we introduce a dual\-matrix alignment strategy that explicitly calibrates intra\-sample spatial correlations and activation intensities, thereby effectively injecting local geometric priors\. Based on this, we further design a latent mask modeling mechanism to guide CLIP to restore the missing semantic details of the target model, thereby implicitly aggregating fine\-grained structures into the global semantic space\. Furthermore, driven by the empirical observations that CLIP's shallow features inherently possess strong spatial observational capabilities, we naturally extend SALM to a highly efficient self\-distillation paradigm, SALM\-Self\. This unlocks CLIP's intrinsic fine\-grained potential without relying on any external models\. Extensive experiments demonstrate that SALM not only significantly improves performance in dense prediction tasks but also boosts CLIP's zero\-shot accuracy, effectively enhancing the fine\-grained understanding capabilities of MLLMs\.

## Eyes on VLM: Benchmarking Gaze Following and Social Gaze Prediction in Vision Language Models

**Authors:** Hengfei Wang; Anshul Gupta; Pierre Vuillecard; Jean\-marc Odobez

**ID:** 139675 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BAw8E27N8g>) | [PDF](<https://openreview.net/pdf?id=BAw8E27N8g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139675>)

Vision\-language models \(VLMs\) have rapidly evolved into general\-purpose multimodal reasoners with strong zero\-shot generalization\. In this context, VLMs could greatly benefit the analysis of human gaze and attention, a central task in human behavior understanding that requires reasoning about the physical scene as well as the activity, interactions, and social context\. However, the extent to which VLMs can reliably understand human gaze and related attentional behaviors remains largely unexplored\. In this work, we present EyeVLM, a systematic evaluation framework for gaze understanding in VLMs across two complementary dimensions: tasks and models\. To assess gaze understanding capabilities, we focus on two core tasks\. The first, gaze following, i\.e\., predicting the 2D location where a person is looking, has a geometric and visual processing focus, requiring a precise understanding of the human face, attention direction, 3D scene structure, and spatial grounding of attended targets\. The second, social gaze prediction, requires social and relational reasoning over multi\-person interactions \(e\.g\., mutual gaze and shared attention\), and may benefit more from the LLM semantic reasoning capabilities within VLMs\. Regarding models, EyeVLM evaluates these tasks in two ways: a zero\-shot setting with a diverse set of state\-of\-the\-art open\- and closed\-source VLMs, exploring different prompting strategies; and a fine\-tuning approach based on task\-specific QA pairs, studying the impact of model scale and data scale\. As benchmarks, we rely on existing gaze understanding datasets and perform a systematic comparison with state\-of\-the\-art purely visual models\. Overall, our results show that current VLMs lack precise gaze understanding capabilities\. While standard training helps reduce the gap with visual models, significant improvements are still needed\.

## Learning Dynamic Evidence Routes for Vision Transformer Probing

**Authors:** Zice Wang; Zhenyu Zhang

**ID:** 156006\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156006

[Paper](<https://openreview.net/forum?id=1CCRjuvAbv>) | [PDF](<https://openreview.net/pdf?id=1CCRjuvAbv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156006>)

_Abstract unavailable from the accessible public sources._

## ManiTaskGen: A Comprehensive Task Generator for Benchmarking and Improving Vision\-Language Agents on Embodied Decision\-Making

**Authors:** Liu Dai; Haina Wang; Weikang Wan; Hao Su

**ID:** 139268\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139268

[Paper](<https://openreview.net/forum?id=anDaczglpj>) | [PDF](<https://openreview.net/pdf?id=anDaczglpj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139268>)

_Abstract unavailable from the accessible public sources._

## SAMAT: A Stereotype\-Aware Multimodal Transformer for Interpretable Misogynistic Meme Detection

**Authors:** Gopendra Singh

**ID:** 156793\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156793

[Paper](<https://openreview.net/forum?id=1DJBFS7rLW>) | [PDF](<https://openreview.net/pdf?id=1DJBFS7rLW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156793>)

_Abstract unavailable from the accessible public sources._

## FinMTM: A Multi\-Turn Multimodal Benchmark for Financial Reasoning and Agent Evaluation

**Authors:** Chenxi Zhang; Ziliang Gan; Liyun Zhu; Youwei Pang; Qing Zhang; Rongjunchen Zhang

**ID:** 139640\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139640

[Paper](<https://openreview.net/forum?id=DtHVW0wUAr>) | [PDF](<https://openreview.net/pdf?id=DtHVW0wUAr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139640>)

The financial domain poses substantial challenges for Vision\-Language Models \(VLMs\) due to specialized chart formats and knowledge\-intensive reasoning requirements\. However, existing financial benchmarks are largely single\-turn and rely on limited question formats, which hinders comprehensive evaluation in realistic application scenarios\. To address this gap, we propose FinMTM, a multi\-turn multimodal benchmark that expands diversity along both data and task dimensions\. On the data side, we curate and annotate 11,133 bilingual \(Chinese and English\) financial QA pairs grounded in commonly used financial visuals, including candlestick charts, statistical plots, and report figures\. On the task side, FinMTM covers single and multiple choice questions, multi\-turn open\-ended dialogues, and agent\-based tasks\. We further design task\-specific evaluation protocols, including a set\-overlap scoring rule for multiple choice questions, a weighted combination of turn\-level and session\-level scores for multi\-turn dialogues, and a composite metric that integrates planning quality with final outcomes for agent tasks\. Extensive experimental evaluation of 22 VLMs reveal their limitations in fine\-grained visual perception, long\-context reasoning, and complex agent workflows\.

## ViewSAM: Learning View\-aware Semantics for Weakly Supervised Cross\-view Referring Multi\-Object Tracking

**Authors:** Jiawei Ge; Xintian Zhang; Jiuxin Cao; Bo Liu; Fabian Deuser; Chang Liu; Gong Wenkang; Siyou Li; Juexi Shao; Wenqing Wu; Chen Feng; Ioannis Patras

**ID:** 154079\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154079

[Paper](<https://openreview.net/forum?id=GMDecyfsDV>) | [PDF](<https://openreview.net/pdf?id=GMDecyfsDV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154079>)

Cross\-view Referring Multi\-Object Tracking \(CRMOT\) aims to track multiple objects specified by natural language across multiple camera views, with globally consistent identities\. Despite recent progress, existing methods rely heavily on costly frame\-level spatial annotations and cross\-view identity supervision\. To reduce such reliance, we explore CRMOT under weak supervision by leveraging the capabilities of foundation models\. Our empirical study shows that directly applying foundation models such as SAM2 and SAM3, even with task\-specific modifications, fails to accurately understand referring expressions and maintain consistent identities across views\. Yet, such models remain effective at producing reliable object tracklets that can serve as supervision signal\. We therefore repurpose foundation models as pseudo\-label generators and propose a two\-stage framework for weakly supervised CRMOT, using only object category labels as coarse\-grained supervision\. In the first stage, we design an Affinity\-guided Cross\-view Re\-prompting strategy to refine and associate SAM3\-generated tracklets across cameras, producing reliable cross\-view pseudo labels for subsequent training\. In the second stage, we introduce ViewSAM, a CRMOT model built upon SAM2 that explicitly models view\-aware cross\-modal semantics\. By formulating view\-induced variations as learnable conditions, ViewSAM bridges the gap between view\-variant visual observations and view\-invariant textual expressions, enabling robust cross\-view referring tracking with only approximately 10% additional parameters\. Extensive experiments demonstrate that ViewSAM achieves SOTA performance under weak supervision and remains competitive with fully supervised methods\.

## Words Before Pixels: Selective Modality Routing for Vision\-Language Model Unlearning

**Authors:** Laura Yao; Haochen Zhang; Jinhao Duan; Sijia Liu; Tianlong Chen

**ID:** 152527\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152527

[Paper](<https://openreview.net/forum?id=STADZeCiVj>) | [PDF](<https://openreview.net/pdf?id=STADZeCiVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152527>)

Vision\-language model \(VLM\) unlearning is often treated as an objective\-design problem: given multimodal forget data, the goal is to optimize a loss that removes undesirable behavior while preserving retained capabilities\. We argue that this view overlooks an equally important data\-centric question: how should each forget example be represented before optimization? Existing methods typically keep image\-conditioned failures in their original image\-text form, implicitly assuming that pixels are the right route for unlearning whenever pixels appear in the input\. We challenge this assumption by constructing modality\-decomposed versions of VLM benchmarks, enabling controlled comparisons among image\-only, text\-only, and multimodal representations of the same examples\. Our modality\-mixing experiments show that, for many examples, textual renderings carry the actionable forget signal more directly than the image alone, while purely text\-only unlearning can still weaken visual grounding when the target behavior depends on visual evidence\. Motivated by this trade\-off, we introduce ModRoute, a gradient\-guided per\-sample modality routing strategy that selectively converts high visual\-pressure examples to text\-only form while keeping the remaining examples multimodal\. Notably, on VLGuard with LLaVA\-1\.5\-7B, ModRoute has the strongest composite unlearning\-\-utility score of $0\.847$ at $\\gamma=0\.5$, a $2\.5$% improvement over the best random\-switching score and $\\geq46$% better than pure multimodal or text unlearning\. Overall, our results show that effective VLM unlearning depends not only on the objective, but also on the composition and per\-sample modality routing of the unlearning data\.

## Thinking with Images as Continuous Policy: Numerical Visual Chain\-of\-Thought

**Authors:** Kesen Zhao; Beier Zhu; Junbao Zhou; Xingyu Zhu; Zhongqi Yue; Hanwang Zhang

**ID:** 150085\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150085

[Paper](<https://openreview.net/forum?id=kqCpiR360C>) | [PDF](<https://openreview.net/pdf?id=kqCpiR360C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150085>)

Recent multimodal large language models \(MLLMs\) increasingly rely on visual chain\-of\-thought to perform region\-grounded reasoning over images\. However, existing approaches ground regions via either textified coordinates—causing modality mismatch and semantic fragmentation—or fixed\-granularity patches that both limit precise region selection and often require non\-trivial architectural changes\. In this paper, we propose Numerical Visual Chain\-of\-Thought \(NV\-CoT\), a framework that enables MLLMs to reason over images using continuous numerical coordinates\. NV\-CoT expands the MLLM action space from discrete vocabulary tokens to a continuous Euclidean space, allowing models to directly generate bounding\-box coordinates as actions with only minimal architectural modification\. The framework supports both supervised fine\-tuning and reinforcement learning\. In particular, we replace categorical token policies with a Gaussian \(or Laplace\) policy over coordinates and introduce stochasticity via reparameterized sampling, making NV\-CoT fully compatible with GRPO\-style policy optimization\. Extensive experiments on three benchmarks against eight representative visual reasoning baselines demonstrate that NV\-CoT significantly improves localization precision and final answer accuracy, while also accelerating training convergence, validating the effectiveness of continuous\-action visual reasoning in MLLMs\. The code is provided in the Supplementary Materials\.

## BlendCast: Teaching Vision\-Language Model to Anticipate Member Skill in Weather Ensembles

**Authors:** Tao Han; Fenghua Ling; Dazhao Du; Haoxi Li; Zhibin Wen; Guangtao Zhang; Song Guo; LEI BAI

**ID:** 149073\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149073

[Paper](<https://openreview.net/forum?id=t52ZKfBzJk>) | [PDF](<https://openreview.net/pdf?id=t52ZKfBzJk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149073>)

AI weather models are fast and skillful, yet their errors are strongly conditional because the best member changes with lead time, variable, initialization state, and atmospheric regime\. Operational deterministic multi\-model forecasting therefore requires more than averaging strong forecasters\. It requires anticipating which member deserves trust before future analyses exist\. BlendCast turns this anticipation problem into a vision\-language forecasting task\. Given meteorological maps and structured ensemble diagnostics, the model reads the current weather situation, reasons about prospective member reliability, and converts that judgment into deterministic per\-variable ensemble weights\. To teach this behavior, BlendCast first gives the model demonstrations of what member\-skill reasoning and weight decisions should look like, then refines the resulting policy with multi\-variable reinforcement learning so that its own analyses are rewarded when they lead to better, physically consistent forecasts\. On held\-out 2025 forecasts, BlendCast reduces WRMSE by 2\.6\\% over equal weighting and by 2\.0% over conventional ensemble post\-processing, closing 63\.2% of the gap to oracle blending\. These results show that, with multimodal weather evidence and reward\-aligned training, VLMs can act as real\-time forecasters of forecasters for deterministic AI weather ensembles\. Project and demo:https://anonymous\.4open\.science/status/BlendCast\-2567

## From Views to Worlds: Active Exploration over 3D Worlds for Vision\-Language Models

**Authors:** Qijian Tian; Jiayu Ying; Ke Fan; Lizhuang Ma; Xin Tan

**ID:** 149559\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149559

[Paper](<https://openreview.net/forum?id=pCouEwaa1S>) | [PDF](<https://openreview.net/pdf?id=pCouEwaa1S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149559>)

Vision\-language models \(VLMs\) have achieved remarkable progress in 2D visual understanding tasks, yet the passive view\-centric perception paradigm limits their capacity for 3D spatial reasoning\. Such reasoning often requires actively acquiring spatial evidence beyond the currently visible views, such as camera poses and cross\-view spatial relationships, to infer 3D relationships that are not explicitly represented in 2D images\. However, existing methods either lack active exploration or merely provide additional views during inference, without explicitly acquiring such spatial evidence beyond 2D images\. In this paper, we propose View\-to\-World \(V2W\), an active exploration framework that enables VLMs to actively explore 3D worlds and lifts VLMs from passive view\-centric perception to active world\-centric spatial reasoning\. Given a spatial reasoning task with multi\-view images, V2W first reconstructs an explicit 3D world with geometry, camera poses, and language\-grounded semantics, and exposes it to VLMs through visual and linguistic interfaces\. Through multi\-turn interaction with these interfaces, VLMs iteratively acquire spatial evidence from the constructed 3D world, enabling active world\-centric spatial reasoning\. V2W can be integrated with existing VLMs in a training\-free manner and can be further enhanced by optimizing the exploration policy via reinforcement learning\. Experiments on spatial mental modeling benchmarks demonstrate that V2W substantially improves VLM baselines in the training\-free setting and achieves state\-of\-the\-art performance with the learned exploration policy, highlighting the importance of active exploration for spatial intelligence\. The code will be available upon acceptance\.

## MARS: Harmonizing Multimodal Convergence via Adaptive Rank Search

**Authors:** Minkyoung Cho; Insu Jang; Shuowei Jin; Zesen Zhao; Adityan Jothi; Ethem F Can; Min\-Hung Chen; Zhuoqing Morley Mao

**ID:** 148621\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148621

[Paper](<https://openreview.net/forum?id=wO9qWwm2K2>) | [PDF](<https://openreview.net/pdf?id=wO9qWwm2K2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148621>)

Fine\-tuning Vision Language Models \(VLMs\) with parameter\-efficient methods like Low\-Rank Adaptation \(LoRA\) is crucial for task adaptation\. However, imbalanced training dynamics across modalities often lead to suboptimal accuracy due to negative interference, a challenge typically addressed with inefficient heuristic methods such as manually tuning separate learning rates\.    To overcome this, we introduce \*\*MARS\*\* \(\*\*M\*\*ultimodal \*\*A\*\*daptive \*\*R\*\*ank \*\*S\*\*earch\), an approach to discover optimal rank pairs that balance training dynamics while maximizing performance\.   Our key innovation, a proposed framework of dual scaling laws, enables this search:\~one law models module\-specific convergence time to prune the search space to candidates with aligned dynamics, while the other predicts final task performance to select the optimal pair from the pruned set\. By re\-purposing the LoRA rank as a controller for modality\-specific convergence speed, MARS outperforms baseline methods and provides a robust, automated strategy for optimizing VLM fine\-tuning\.

## Pathways of Visual Information Flow in Vision\-Language Models

**Authors:** Israfel Salazar; Stella Christina Frank; Dan Oneata; Desmond Elliott; Constanza Fierro

**ID:** 153514\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153514

[Paper](<https://openreview.net/forum?id=KmqJXqbsh6>) | [PDF](<https://openreview.net/pdf?id=KmqJXqbsh6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153514>)

_Abstract unavailable from the accessible public sources._

## OneCanvas: 3D Scene Understanding via Panoramic Reprojection

**Authors:** Bartłomiej Baranowski; Dave Chen; Matthias Niessner

**ID:** 148266\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148266

[Paper](<https://openreview.net/forum?id=z9GVQGjnKg>) | [PDF](<https://openreview.net/pdf?id=z9GVQGjnKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148266>)

_Abstract unavailable from the accessible public sources._

## Does Seeing More Mean Knowing More? Mono\-Anchored Advantage Normalization for Multi\-Source Visual Reasoning

**Authors:** Fanhu Zeng; Zhicong Luo; Zefan Wang; Li You; Chi Chen; Maosong Sun

**ID:** 153810\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153810

[Paper](<https://openreview.net/forum?id=IXNKGx1CUw>) | [PDF](<https://openreview.net/pdf?id=IXNKGx1CUw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153810>)

Visual reasoning through reinforcement learning with verifiable rewards \(RLVR\) has achieved remarkable progress\. However, when dealing with multi\-source inputs, existing approaches tend to treat them as a mere accumulation of information, lacking explicit mechanisms to distinguish whether integrating additional sources yields information gain or introduces interference\. Therefore, they struggle to effectively model dynamic interaction when integrating multiple sources, particularly when they differ significantly in physical properties and semantics, \\eg, infrared and depth, leading to inferior performance to mono\-source reasoning when a certain source holds the dominant signal\. To address this issue, we propose MARS, a novel mono\-anchored multi\-source reasoning framework that models each visual modality as an independent information source\. Specifically, by treating mono\-source rewards as dynamic anchors, our method explicitly incorporates the information gain introduced by multi\-source fusion into advantage normalization and adaptively emphasizes mutual promotion between sources while suppressing potential noise or conflicts during RLVR\. From theoretical analysis, our method effectively quantifies information gain introduced by multi\-source integration in gradient estimation, enabling consistent modality regulation\. Empirical results also show impressive 3\.2% and 4\.9% performance gains on GRPO and DAPO across diverse datasets, confirming the effectiveness of our method\.

## MolmoMotion: Forecasting Point Trajectories in 3D with Language Instruction

**Authors:** Jianing Zhang; Chenhao Zheng; Yajun Yang; Rustin Soraki; Winson Han; Chun\-Liang Li; Jason Ren; Max Argus; Jieyu Zhang; Ranjay Krishna

**ID:** 149894\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149894

[Paper](<https://openreview.net/forum?id=mRzgdbaTNp>) | [PDF](<https://openreview.net/pdf?id=mRzgdbaTNp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149894>)

Motion forecasting is central to visual intelligence: agents must anticipate how objects will move in order to plan actions, reason about physical interactions, and synthesize realistic futures\. We argue that 3D points in world coordinates provide a general representation that is class\-agnostic, view\-stable, compact, and directly useful for downstream tasks\. We formalize the task of goal\-conditioned 3D point motion forecasting: given a short visual history, a set of 3D query points on an object of interest, and a language description of the intended goal, the model predicts the future 3D trajectory of each point\. We introduce a full stack to study this task at scale: \(1\) MolmoMotion\-1M is a large corpus of action\-described, object\-grounded 3D point trajectory dataset annotated from 1\.16M unconstrained videos; \(2\) PointMotionBench is a human\-verified benchmark spanning 111 object categories and 61 motion types; and \(3\) MolmoMotion is a general motion forecasting model that supports both autoregressive coordinate prediction and flow\-matching\-based trajectory generation\.  MolmoMotion is able to accurately predicts diverse motion patterns with different language instructions, and significantly outperforms all existing motion prediction baselines on PointMotionBench\. Finally, we show that the learned 3D motion prior transfers well to downstream applications: it improves training efficiency and generalization for robot manipulation,  and its predicted trajectories provide effective motion guidance for generative models to synthesize videos with more realistic object motion\.

## FIVE\-VLA: Fast and EffectIVE Closed\-Loop Autonomous Driving with Recurrent Action Memory

**Authors:** Kemal Oksuz; Alexandru Buburuzan; Yuhan Yao; Puneet Dokania

**ID:** 153787\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153787

[Paper](<https://openreview.net/forum?id=If7v5t7QMx>) | [PDF](<https://openreview.net/pdf?id=If7v5t7QMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153787>)

State\-of\-the\-art vision\-language\-action models \(VLA\) for autonomous driving face critical limitations: excessive parameter counts, inefficient high\-resolution image processing, and lack of temporal memory\. We introduce \*\*FIVE\-VLA\*\* \(Fast and EffectIVE VLA\) to address these through two key contributions\. First, we employ an efficient vision encoder that processes high\-resolution \($448 \\times 896$\) images while generating only 98 tokens, over $5\\times$ fewer than existing approaches, and bypass text generation entirely for single\-pass trajectory prediction\. Second, we propose \*\*Recurrent Action Memory \(RAM\)\*\*, a lightweight module that conditions action prediction on previous action tokens, providing temporal context critical for manoeuvres such as overtaking and emergency braking\. With only 641M parameters, FIVE\-VLA completes \*$\\sim$10\\% more routes without traffic rule infractions\* than the previous state\-of\-the\-art VLA on the challenging \\textit\{Bench2Drive\} closed\-loop driving benchmark\. Furthermore, FIVE\-VLA runs at $\\sim$30 fps on an A100 and $\\sim$4 fps on a T4 GPU \(proxy to an edge device\), representing an \*8\-\-30$\\times$ speedup\* over previous methods\. The code will be made public upon acceptance\.

## Split and Bridge: Multimodal Generation via Diffusion Bridging

**Authors:** Ahmad Arrabi; Xiaohan Zhang; Xingyu Li; Safwan Wshah

**ID:** 151356\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151356

[Paper](<https://openreview.net/forum?id=bABzi3Dcax>) | [PDF](<https://openreview.net/pdf?id=bABzi3Dcax>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151356>)

Visual data are naturally expressed through multiple complementary modalities \(e\.g\., images and segmentation masks\), each capturing distinct aspects of the same underlying structure\. Most existing multimodal methods adopt a top\-down paradigm, learning a shared latent variable through joint training from scratch, which limits scalability\. We propose Split and Bridge \(SnB\), a bottom\-up framework for multimodal generation that couples pretrained unimodal diffusion models at sampling time\. Rather than learning a unified latent space, SnB generates coherent multimodal samples by following a shared diffusion trajectory up to a split point, after which modality\-specific processes are guided via a bridge module\. This design enables plug\-and\-play reuse of powerful pretrained models without joint training, making it scalable and easily adaptable\. Across standard benchmarks \(PolyMNIST, CelebAMask\-HQ\) and more complex settings \(PIE\-Bench\+\+, ROCO\), SnB consistently achieves a strong balance between sample quality and coherence, as we report a 33% increase in the coherence score on CelebAMask\-HQ over prior top\-down approaches\. We show that SnB naturally extends to downstream zero\-shot tasks such as interleaved co\-generation, image editing, and style transfer\. Our results demonstrate that bottom\-up generation offers a practical and scalable alternative to top\-down multimodal models\.

## ProcObject\-10K: Benchmarking Object\-Centric Procedural Understanding in Instructional Videos

**Authors:** Wenliang Guo; Yu Kong

**ID:** 139834\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139834

[Paper](<https://openreview.net/forum?id=1x54DkGsK7>) | [PDF](<https://openreview.net/pdf?id=1x54DkGsK7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139834>)

Procedural activities are fundamentally driven by object state transitions, yet existing instructional video benchmarks remain action\-centric and cannot evaluate whether models reason about how objects evolve toward task completion\. In this work, we introduce \\textsc\{ProcObject\-10K\}, the first benchmark that jointly evaluates object\-centric reasoning and temporal evidence grounding in instructional videos, across both egocentric and exocentric views\. It comprises 10,522 open\-ended VideoQA pairs grounded in 1,799 video clips, spanning 137 tasks across 9 domains and five reasoning types covering preconditions, state evolution, counterfactuals, mistakes, and readiness\. Benchmarking 13 leading MLLMs reveals a substantial answering\-grounding gap: models produce plausible answers while failing to localize the supporting evidence \(mIoU $&lt;$ 45\\%\), exposing their reliance on linguistic priors rather than fine\-grained object dynamics\. As a step toward closing this gap, we further provide an object\-centric supervised fine\-tuning baseline with pseudo object\-level supervision and spatial\-temporal constraints\. Models fine\-tuned on \\textsc\{ProcObject\-10K\} not only improve on the benchmark itself, but also transfer effectively to other grounded VideoQA and embodied planning tasks\. The dataset, annotations, and evaluation toolkit will be publicly released to support future research on object\-centric procedural understanding\.

## WebArena\-Pro: A Heterogeneous, Multimodal, Reproducible Benchmark for Web Agents

**Authors:** Imene Kerboua; Fatemeh Pesaran Zadeh; Xing Han Lu; Weijian Qi; Alexander Miller; Junyi Song; Yunjia Tian; Dongjin Kang; Seyeon Choi; Marzia Nouri; Ewen Gueguen; Matteo Boglioni; Fengyuan Liu; Zeyi Liao; Mengqi Yuan; Yue Li; Alexandre Lacoste; Alexandre Drouin; Spandana Gella; Huan Sun; Gunhee Kim; Siva Reddy

**ID:** 139782\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139782

[Paper](<https://openreview.net/forum?id=542YGFhHG8>) | [PDF](<https://openreview.net/pdf?id=542YGFhHG8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139782>)

Web agents powered by large language and vision\-language models are increasingly applied to realistic browser work that spans heterogeneous applications, multimodal content, and stateful workflows\. However, existing reproducible web\-agent benchmarks cover only a small number of web applications drawn from a few software categories, and restrict modality to text and vision\. Live benchmarks broaden site coverage but sacrifice reproducibility, since pages and data drift between runs\. Moreover, existing benchmarks do not meaningfully evaluate whether agents can understand and use audio and video content embedded within web tasks\. To address these gaps, we introduce WebArena\-Pro, a benchmark comprising 300 tasks across 20 self\-hosted web applications in six domain categories, spanning distinct interface conventions, workflows, and data models\. Across the evaluated agents, the best performance is achieved by Gemini 3\.1 Pro, which attains 37\.0 \\% success under a 50\-step budget, while open\-source models' performance does not exceed 27\.7\\% success\. Among reproducible, human\-curated web agent benchmarks, WebArena\-Pro provides the broadest application coverage and the most comprehensive multimodal support to date\. The benchmark treats audio and video as core observations alongside text and vision, with dedicated actions for extracting information from each\. WebArena\-Pro runs each task in isolation and supports reproducible, parallel evaluation\. Tasks are authored through a dedicated annotator interface, filtered by LLM\-assisted triage, and finally validated by humans before release\.

## Searching Videos as Trees: Self\-Correcting Agents for Grounded Long Video QA

**Authors:** Ce Zhang; Ziyang Wang; Yulu Pan; Oluwatumininu Oguntola; Pranav Wagh; Qiyu Wu; Hiromi Wakaki; Mohit Bansal; Gedas Bertasius

**ID:** 149784\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149784

[Paper](<https://openreview.net/forum?id=nK3rqD3vLo>) | [PDF](<https://openreview.net/pdf?id=nK3rqD3vLo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149784>)

Grounded long\-video question answering, or Grounded LVQA, is the task of answering a question about a long video while also locating the short time interval in the video that supports the answer\. Recent agentic methods approach this problem as a multi\-turn exploration process with a single crop\_video\(start, end\) action\. This action allows the model to progressively narrow its search from coarse to fine regions, but it does not provide a direct way to backtrack from a fine\-grained mistake to a broader context\. As a result, these agents often stop after only two turns and are unable to recover once they descend into the wrong part of the video\. We propose VideoTreeSearch \(VTS\), a framework that formulates grounded LVQA as an iterative, self\-correcting search over an adaptive temporal tree\. VTS builds a non\-uniform tree from scene boundaries so that each node corresponds to a semantically coherent video segment\. It then trains an agent to navigate this tree using four discrete actions: zoom\_in, zoom\_out, shift, and answer\. These actions make backtracking and recovery explicit and learnable, rather than leaving them as implicit behaviors\. To train the agent, we introduce a trajectory synthesis pipeline that generates multi\-step navigation paths through the tree, including intentional detours into incorrect branches followed by recovery\. These trajectories are first used for supervised fine\-tuning and then for reinforcement learning with rewards based on grounding quality and answer accuracy\. On three Grounded LVQA benchmarks—CG\-Bench, Haystack\-LVBench, and Haystack\-Ego4D—VTS outperforms the strongest previous agentic methods by 12\.5 mIoU on CG\-Bench and 7\.4 T\-F1 on Haystack\-Ego4D\. The learned policy also transfers to general long\-video question answering, surpassing all prior agentic baselines on Video\-MME, MLVU, and LVBench by up to 7\.1 accuracy points\. Ablation studies show that self\-correcting hierarchical search is the key factor behind these improvements: removing either adaptive descent or explicit backtracking leads to substantial performance drops\.

## Beyond Hard Negatives: Grounded Positive Supervision for Compositional CLIP

**Authors:** Harsh Udai; Konda Reddy Mopuri; Vineeth N Balasubramanian

**ID:** 150916\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150916

[Paper](<https://openreview.net/forum?id=eQSREPESTi>) | [PDF](<https://openreview.net/pdf?id=eQSREPESTi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150916>)

CLIP\-style vision\-language models transfer broadly but remain brittle for compositional reasoning, often collapsing object\-attribute binding and inter\-object relations\. We attribute this gap to limited compositional diversity in web\-scale data and contrastive objectives that prioritize global alignment over grounded structure\. Many fixes rely on caption\-edited hard negatives, which can bias learning toward specific perturbation templates and trade off against general alignment\. We propose GPS\-CLIP, which improves compositionality by adding multi\-granular positive constraints to standard contrastive learning: IoU\-weighted multi\-positive region\-span alignment and relation\-triplet alignment in the shared embedding space\. GPS\-CLIP uses existing grounded annotations during fine\-tuning, keeps the dual\-encoder architecture unchanged, and requires only images and text at inference\. Across SugarCrepe, What'sUp, COLA, and Winoground, GPS\-CLIP achieves state\-of\-the\-art compositional performance while improving cross\-modal retrieval and zero\-shot recognition\. Beyond compositionality, GPS\-CLIP \(i\) achieves the strongest MMVP\-VLM results for fine\-grained visual understanding and \(ii\) yields a more structured embedding space with improved object/attribute separability on UT\-Zappos geometric analysis compared to hard\-negative variants\. Overall, GPS\-CLIP offers a streamlined way to improve VLM compositional robustness\.

## Training\-free Focus\-Ambient Retention for Memory\-Efficient Video Large Language Models

**Authors:** Haozheng Zeng; Qi Bi; Gui\-Song Xia

**ID:** 154583\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154583

[Paper](<https://openreview.net/forum?id=CVfZbrvMBG>) | [PDF](<https://openreview.net/pdf?id=CVfZbrvMBG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154583>)

Video large language models are often dominated by visual tokens, which lengthen prefill, enlarge KV\-cache residency, and raise peak memory\.  In spirit of the philosophy $\\textit\{focus more and memorize less\}$, we introduce Focus\-\-Ambient Retention \(FAR\), a training\-free visual token retention method that routes visual evidence through two complementary streams\. The Focus stream preserves task\-critical objects, actions, text, and fine details, while the Ambient stream keeps scene context only when it differs from a temporal cache\. FAR combines visual attention, local frequency variation, and bounded query relevance to score tokens, then assembles a fixed\-budget context with diversity control before language\-model prefill\.  Across five video understanding benchmarks under a variety of model sizes, FAR significantly reduces peak VRAM by up to $50\.6\\%$ under matched retained\-token budgets while achieving comparable or even superior performance over the state\-of\-the\-art, improving the quality\-memory trade\-off\.  Overall, FAR offers a position\-aware alternative to frame\- or block\-level compression for efficient inference\. Code will be available\.

## Grounding Driving VLA via Inverse Kinematics

**Authors:** Junsung Park; Hyunjung Shim

**ID:** 152499\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152499

[Paper](<https://openreview.net/forum?id=SgCKaaYRfX>) | [PDF](<https://openreview.net/pdf?id=SgCKaaYRfX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152499>)

Existing Driving VLAs predict trajectories while largely ignoring their visual tokens– a phenomenon we trace not to insufficient training but to a structurally ill\-posed task formulation\. We show that trajectory recovery, when viewed through the lens of inverse kinematics, requires both a current and a future visual state as boundary conditions; existing VLAs supply only the former, which encourages the model to shortcut through ego status and text commands alone\. To address this, we re\-design Driving VLA in the style of an inverse kinematics solver\. First, a next visual state prediction objective that requires the LLM to predict the future visual scene provides dense visual supervision and suppresses shortcut paths\. Second, a separate Inverse Kinematics Network \(a cross\-attention\-based conditional diffusion model\) that takes only the current and future visual states as input is designed to suppress reliance on ego status and textual shortcuts during trajectory decoding\. With this simple prescription alone, our 0\.5B\-scale model recovers visual grounding and reaches trajectory planning performance comparable to 7B–8B VLAs more than an order of magnitude larger, on both the closed\-loop NAVSIM\-v2 and the nuScenes benchmarks\. Extensive analysis further shows that this improvement stems from a recovered ability to exploit visual features, with the effect being most pronounced in dynamic driving situations such as turning\.

## MMCompass: Diagnosing Position Bias in Generative Multimodal Reward Models

**Authors:** Hongbo Zhao; Mingkun Yang; Yantao Liu; Yichang Zhang; Fei Huang; Zhibo Yang; Dayiheng Liu; Shuai Bai

**ID:** 150160\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150160

[Paper](<https://openreview.net/forum?id=kD0UhoI24Y>) | [PDF](<https://openreview.net/pdf?id=kD0UhoI24Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150160>)

Generative multimodal reward models are increasingly used to rank responses, guide alignment, and serve as automatic judges, making their reliability a central concern\.  However, existing multimodal reward benchmarks remain limited in annotation rigor, domain coverage, response model diversity, and robustness\-oriented evaluation, making it difficult to assess reward models under realistic and diagnostic settings\.  To address these gaps, we introduce MMCompass, a new benchmark for evaluating generative multimodal reward models\. MMCompass contains carefully verified preference pairs spanning 10 multimodal domains, with responses collected from 16 vision\-language models\. The benchmark is constructed through a multi\-stage pipeline including AI\-assisted difficulty filtering, blind multi\-annotator verification, and expert review\.  To enable more diagnostic evaluation, we adopt three complementary metrics: overall accuracy, symmetric accuracy, and verdict guess rate, which jointly measure judgment quality, order robustness, and position bias\. Evaluations on MMCompass show that position bias is widespread in our evaluated setting, even among strong multimodal judges and that standard accuracy alone often overestimates reliability\. Beyond this diagnosis, we further provide CompassRM as a mitigation baseline for improving cross\-order consistency\. Built with dual\-order supervised fine\-tuning and the proposed GXPO \(Group Cross Policy Optimization\), CompassRM improves robustness over its instruct\-model backbones on MMCompass, VLRewardBench, and MMRewardBench, while also improving overall judgment accuracy\.

## Emergent Visual Thinking in Text\-Only Reasoning through Multimodal Training

**Authors:** Qi Zhang; Bohan Wang; QIANRU SUN; Hanwang Zhang

**ID:** 153218\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153218

[Paper](<https://openreview.net/forum?id=Mvqk8cd5uy>) | [PDF](<https://openreview.net/pdf?id=Mvqk8cd5uy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153218>)

Does multimodal training make a language model think visually, even when the input is text only? We test this with targeted causal ablations across 10 multimodal configurations from 6 model families, with matched text\-only backbones and cross\-family transfer controls\. We contrast spatial\-imagery tasks that invite mental scene construction with symbol\-manipulation tasks solvable by symbolic rules alone\. We identify a vision\-language axis in hidden\-state space and ablate its projection at inference\. In Chameleon\-7B, this ablation drops accuracy on BIG\-Bench Hard \(BBH\) navigate by 27\.6 percentage points while improving boolean expressions by 5\.2 percentage points, a 32\.8 percentage\-point double dissociation\. The effect is direction\-specific and layer\-localized\. Together, these results reveal emergent visual thinking \(EVT\): text\-only reasoning that causally depends on visual\-spatial representations shaped by multimodal training\. In dual\-path unified models \(BAGEL, Janus\-Pro\), the causal handle localizes to the generation pathway as a compact one\-dimensional carrier\. The understanding pathway also encodes spatial information in a higher\-rank, probe\-decodable form, but is not the causal handle\. To separate decodability from causal use, we analyze concentration, alignment, and semantic location\. These diagnostics explain why behavior, probing, and intervention can diverge\. Multimodal training therefore reshapes the geometry of text\-only reasoning, beyond changing how visual input is processed\.

## QGround: Condition\-Wise Evidence Aggregation for 3D Grounding with 2D VLMs

**Authors:** Fengyun Wang; Jian Wang; Dingwei Zhang; Jinhui Tang; QIANRU SUN

**ID:** 154571\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154571

[Paper](<https://openreview.net/forum?id=CbyT2otOb4>) | [PDF](<https://openreview.net/pdf?id=CbyT2otOb4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154571>)

Using 2D vision\-language models \(VLMs\) for 3D grounding raises a decision\-formulation problem: how should image\-level evidence be turned into a 3D object decision? This problem matters as pretrained 2D VLMs provide strong visual\-semantic evidence, while 3D grounding requires disambiguating objects in cluttered scenes\. Current VLM\-based formulations make this conversion holistically: the model either selects one object from a rendered candidate set or assigns one overall match judgment to each candidate\. Such decisions obscure the evidence needed for disambiguation, since different candidates may satisfy different subsets of the category, attribute, and relational cues\. In this work, we reformulate 3D grounding with 2D VLMs as condition\-wise evidence aggregation\. The reformulation follows three principles: use natural object\-centric images rather than rendered candidate images; read the referring expression condition by condition rather than as one holistic query; and use model preference rather than a hard match output as grounding evidence\. We instantiate these principles in QGround, a training\-free implementation of this decision formulation\. Experiments on ScanRefer and Nr3D show improved grounding performance, with analyses demonstrating stronger candidate disambiguation and more interpretable decisions\.

## Visual Reinforcement Fine\-Tuning via Bootstrapped Medical Reasoning

**Authors:** Yequan Bie; Peng Xie; Zhixuan CHEN; Yihui Wang; Andong Tan; Linshan Wu; Sunan He; Jianda Mao; Yangqiu Song; Kani Chen; Hao CHEN

**ID:** 150417 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iC1jjf8cHM>) | [PDF](<https://openreview.net/pdf?id=iC1jjf8cHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150417>)

Multimodal large language models \(MLLMs\) have made significant strides in natural vision\-language understanding, yet their potential in specific domains, such as healthcare, remains largely untapped\. Since existing medical models often lack the reasoning capabilities needed for complex decision\-making, adapting general MLLMs for medical reasoning has attracted increasing interest, with reinforcement fine\-tuning \(RFT\) emerging as a promising approach\. However, medical reasoning tasks require both precise thinking processes and generalization of well\-justified answers, presenting unique challenges due to the inherent scarcity of annotated data and nuanced visual complexity of medical images\. Current visual RFT methods prioritize answer correctness through verifiable rewards while neglecting the reasoning process, leading to limited reasoning capabilities and sub\-optimal performance, which are essential in high\-stakes scenarios like healthcare\. To address these issues, we propose MedR2FT, a Medical Reasoning Reinforcement Fine\-Tuning framework that enhances medical reasoning through rationale bootstrapping and reasoning rewarding\. Specifically, MedR2FT leverages distilled rationales from fundamental training phases to supervise subsequent reasoning processes with semantic rewards, alleviating the challenge of scarce reasoning data and enhancing model reasoning\. Extensive experiments demonstrate that our method consistently outperforms baselines on visual question answering and lesion detection with a significant margin\. MedR2FT explicitly attends to the reasoning process, significantly enhancing MLLM adaptability for medical reasoning\. The code will be available\.

## SPHQuant: Efficient extreme low bit weight quantization for Vision\-Language Models

**Authors:** Kewei Zhang; 郑 陈; Haotong Qin; Yulun Zhang

**ID:** 150740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fkP34GiYc2>) | [PDF](<https://openreview.net/pdf?id=fkP34GiYc2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150740>)

Recent foundation models are moving toward native multimodal Vision\-Language Models \(VLMs\), making VLMs a central form of next\-generation foundation models\. However, their large language backbones make edge deployment difficult due to high memory footprint and memory\-bound autoregressive decoding\. Weight\-only post\-training quantization is a practical solution, but pushing VLMs to extreme low bit\-widths remains challenging: existing rotation\-free methods suffer from outliers at 2\-\-3 bits, while rotation\-based methods improve accuracy at the cost of additional runtime overhead\. We propose SPHQuant, a rotation\-free spherical weight\-only quantization framework for VLMs\. Instead of quantizing weights directly in Cartesian coordinates, SPHQuant decomposes each 8D weight vector into coordinate signs, radius, and a positive unit direction\. This representation isolates outlier magnitude into the radius while keeping directions bounded and statistically regular\. Based on this insight, SPHQuant allocates extra precision to the radius to mitigate accuracy degradation induced by outliers\. It further uses a compact positive\-direction codebook and fine\-tunes codebook entries through angular parameterization to preserve the unit\-sphere constraint\. We also design a hardware\-friendly GEMV kernel that keeps the direction codebook small enough for shared\-memory lookup and packs radial bits efficiently\. Experiments show that SPHQuant matches the performance of state\-of\-the\-art extreme low\-bit quantization methods while improving decode throughput by \\textbf\{30\.3\\%\}, providing a new step toward efficient edge deployment of VLMs\.

## CMI\-Trans: Cross Modal Inconsistency\-aware Transport for HSI\-LiDAR Classification

**Authors:** Yanli Li; Xuan Tan; Ding Qi; XINYANG JIANG

**ID:** 155422 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5oHobTGS7m>) | [PDF](<https://openreview.net/pdf?id=5oHobTGS7m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155422>)

Joint classification of hyperspectral imagery \(HSI\) and Light Detection and Ranging \(LiDAR\) data benefits from complementary spectral\-\-geometric cues, but existing fusion methods largely assume locally consistent cross\-modal features and symmetric pixel\-wise trust, which is often violated in real urban scenes\. We term this pixel\-level phenomenon \\emph\{cross\-modal local inconsistency\} \(CMI\) and quantify it with a Strong\-Edge CMI Ratio: dual\-modal gradient analysis shows that over $16\\%$ of strong\-edge pixels exhibit single\-modality dominance across three benchmarks, while ROI\-level analysis reveals the class\-entanglement induced by symmetric fusion\. To address this issue, we propose \\textbf\{CMI\-Trans\} \(\\textbf\{C\}ross\-\\textbf\{M\}odal \\textbf\{I\}nconsistency\-aware \\textbf\{Trans\}port\), which promotes per\-pixel reliability modeling from a post\-hoc diagnostic to a structural signal for alignment and training\. CMI\-Trans combines Energy\-Calibrated Reliability \(ECR\), Uncertainty\-Shaped Transport Alignment \(USTA\) with Sinkhorn\-regularized optimal transport, and Triadic Co\-Optimization \(TCO\) that jointly optimizes classification, uncertainty consistency, and alignment stability on a Mamba\-based fusion backbone\. On Houston, Trento, and MUUFL, CMI\-Trans achieves competitive overall accuracy and substantial gains on CMI\-affected classes \(e\.g\., $\+17\.90\\%$ on Houston C10\)\. The ECR\-derived uncertainty score also separates reliable from erroneous predictions \($\\rho\(U,e\)&lt;0$; top\-$20\\%$ highest\-$U$ error rate $\\le 0\.18\\%$\), while improving feature separability in shadow\-induced CMI regions\. These results show that explicitly modeling CMI through uncertainty\-shaped adaptive alignment yields more accurate and interpretable multimodal remote sensing classification\.

## PACE: Pareto\-Adaptive Compression for Efficient Native MLLMs

**Authors:** Lei Tian; Chunzheng Zhu; Kai WU; yifan zhang; Haihua Yang

**ID:** 148537 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xAMYo8DX9G>) | [PDF](<https://openreview.net/pdf?id=xAMYo8DX9G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148537>)

Native multimodal large language models \(native MLLMs\) jointly encode visual and linguistic sequences within a unified autoregressive Transformer, emerging as a promising paradigm for multimodal understanding\. Unlike conventional ViT\-based MLLMs that rely on an external vision encoder, ViT\-free native MLLMs tokenize every pixel patch directly, which is intuitively expected to suffer from severe visual token redundancy\. To examine this hypothesis, we conduct a pilot study and find that, unlike ViT\-based models which degrade under compression, ViT\-free MLLMs tolerate aggressive compression with near\-lossless or even improved per9 formance\. Existing compression methods are built exclusively for the ViT\-based setting, whereas native MLLMs, which stand to gain the most from visual token compression, remain entirely unexplored\. To close this gap, we introduce an analysis pipeline for native backbones, centered on two metrics, i\.e\., token discriminability and cross\-dimensional heterogeneous redundancy, which together reveal the following two findings: \(i\) redundancy is distributed independently and heterogeneously along the height and width axes, and \(ii\) in early layers, visual tokens are indiscriminable and uniformly redundant\. Guided by these findings, we propose PACE \(Pareto Adaptive Compression for Efficient native MLLM\), the first visual token compression framework tailored for native MLLMs with Multimodal\-RoPE\. Leveraging the dimensional decoupling of position encoding, PACE decomposes attention into two orthogonal spatial saliency estimates along height and width, gated by a positional attention signal, yielding a direction\-aware importance measure with negligible overhead\. It further casts token budget allocation as a Pareto optimization over three objectives, i\.e\., performance preservation, inference efficiency, and spatial coverage, which jointly identify the optimal compression depths and retention ratios\. Experiments show that PACE maintains near\-lossless performance at only 25%–50% visual token retention, and even achieves performance gains on several benchmarks, while delivering over 2× FLOPs reduction\.

## Mental Imagery That Matters: Curing Latent Collapse in Multimodal Reasoning

**Authors:** Romy Luo; Rohan Dugad; Zihui \(Sherry\) Xue; Alex Dimakis; Kristen Grauman

**ID:** 154565 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Cf4YKBIond>) | [PDF](<https://openreview.net/pdf?id=Cf4YKBIond>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154565>)

Mental simulation, the ability to reason by constructing and updating internal visual states, is central to flexible human cognition, but remains elusive in current multimodal large language models\. Latent multimodal reasoning offers a promising route toward this capability by interleaving text with continuous visual latent blocks, allowing models to maintain internal visual workspaces without decoding them into pixels\. In this paper, we ask whether these latent visual states actually matter\. Through a direct perturbation analysis across representative latent\-reasoning MLLMs, we find that they often do not: dropping, replacing, or shuffling generated visual latents has only minor effects on the model's own final\-answer probability, while equivalent perturbations to the linguistic reasoning trace are substantially more damaging\. We call this failure mode Mental Simulation Collapse \(MSC\): the model appears to perform interleaved visual reasoning, but routes most answer\-relevant computation through text\. We further diagnose that MSC follows naturally from existing training objectives: visual alignment can make generated latents resemble helper\-image embeddings, but it does not require the decoder to rely on them; subsequent text\-only supervision further leaves the semantic role of the latent pathway unidentifiable\. To address this, we introduce AnchorSim \(Anchored Mental Simulation\), a contrastive distillation framework that trains models to make their generated visual latents consequential\. Across multiple visual reasoning benchmarks, AnchorSim improves performance, while diagnostic re\-evaluation shows that visual perturbations now meaningfully affect predictions\. Our results expose a fundamental failure mode of latent multimodal reasoning and demonstrate that mental simulation must be anchored to model behavior in order to matter\.

## Vision\-Language Grounding as Bidirectional Concept Correspondence

**Authors:** Jieyu Zhang; Ziqi Gao; Luke Zettlemoyer; Ranjay Krishna

**ID:** 155938 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1fodx1B629>) | [PDF](<https://openreview.net/pdf?id=1fodx1B629>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155938>)

Vision\-language grounding connects language to visual content, yet most existing formulations reduce grounding to a unidirectional localization problem: given a prespecified text phrase or category name, identify the corresponding image region\. This setup assumes that the relevant linguistic unit is already known, overlooking a more basic challenge in grounded communication: determining which parts of the text are visually referential and how they correspond to entities in the image\. We formulate grounding as bidirectional concept correspondence over an image\-text pair\. Given an image and its paired text, the goal is to recover all correspondences between visually referential text spans and instance\-level image segments, without assuming that the relevant text spans are provided\. This formulation unifies common grounding tasks, including phrase grounding, referring expression grounding, and open\-vocabulary detection, by treating text segmentation, image segmentation, and cross\-modal alignment as a single correspondence prediction problem\. To address this task, we introduce our model, a grounding model built on top of a pretrained vision\-language model\. It uses learnable bridge tokens to represent candidate image\-text correspondences and predicts, for each token, a text mask, an image mask, and a correspondence presence score\. To train and evaluate this task, we convert diverse grounding and segmentation datasets into a unified correspondence format\. Experiments show that our model consistently outperforms baselines, improving correspondence F1 by 59% on the long\-caption dataset and by 73% on zero\-shot LVIS, where the large category list serves as the text input\.

## SceneAligner: 3D\-Grounded Floorplan Localization in the Wild

**Authors:** Junhyeong Cho; Ruojin Cai; Hadar Averbuch\-Elor

**ID:** 154234 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FEWdZphkET>) | [PDF](<https://openreview.net/pdf?id=FEWdZphkET>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154234>)

Many public buildings provide floorplans with a “you are here” indicator to help visitors orient themselves\. Floorplan localization seeks to computationally replicate this capability by determining where visual observations were captured within a floorplan\. However, existing methods typically assume controlled small\-scale environments and precise vectorized floorplans, limiting their ability to operate in large\-scale buildings and rasterized floorplans\. In this work, we present an approach for performing floorplan localization in the wild by grounding the task in a reconstructed 3D representation of the scene\. Given an unconstrained image collection, our method reconstructs a gravity\-aligned 3D scene and projects it into a 2D density map that serves as a floorplan proxy\. Floorplan localization is then formulated as aligning this proxy with the input floorplan via a 2D similarity transform\. To bridge the appearance gap between density maps and architectural floorplans, we adapt a 2D foundation model to learn cross\-modal correspondences, introducing a fine\-tuning scheme that encourages semantically aligned matches while preserving structural consistency\. Extensive experiments demonstrate substantial improvements over prior methods, including in extremely sparse settings with as little as a single input image\. Our code and data will be publicly available\.

## Strong Helps Weak: Directional Cross\-Modal Alignment Transfer in Multi\-modal LLMs

**Authors:** Hoigi Seo; Byung Hyun Lee; Minjun Kim; Dohyun Mah; Jongho Lee; Se Young Chun

**ID:** 153529 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Keys8KrDQl>) | [PDF](<https://openreview.net/pdf?id=Keys8KrDQl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153529>)

Multi\-modal large language models \(MLLMs\) achieve strong modality understanding by pairing a large language model \(LLM\) with an encoder for a target modality such as vision, video, or audio\. However, improving an MLLM's capability for a given modality typically requires additional training on large modality\-specific datasets, incurring substantial data collection and compute costs\. Model merging offers an alternative, but it is often infeasible for data\-scarce, large per\-sample size, or domain\-specific modalities \(e\.g\., audio and video\), where same\-modality model variants are rarely available\. In this work, we characterize an intriguing asymmetric phenomenon: merging a well\-aligned, data\-rich source\-modality MLLM into a data\-scarce target\-modality MLLM substantially improves the target on its own benchmarks\. Our theoretical and empirical analyses show that this gain stems from enhanced alignment between modality\-specific and textual tokens, induced by the stronger donor modality\. Specifically, we derive a mutual\-information lower bound that is monotonic in alignment\-related quantities and strongly correlated with downstream MLLM performance\. Building on this principle, we propose Directional Cross\-Modal Alignment Transfer \(DCAT\), a novel framework that transfers textual alignment from a strong, well\-aligned source \(donor\) modality to a weak target \(recipient\) modality, boosting target\-modality performance without further fine\-tuning\. We further show that the alignment\-enhancing objective admits a closed\-form weight\-space solution computed from only a small calibration set\. DCAT outperforms existing model\-merging methods, offering an efficient path toward cross\-modal alignment transfer\.

## SeoulMMOD: A Large\-Scale Multimodal Origin\-Destination Flow Benchmark

**Authors:** Taeyoung Yu; Seonbin Jo; Jiwon Kim; Junyoung Byun

**ID:** 139708\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139708

[Paper](<https://openreview.net/forum?id=9Odwt5ID8o>) | [PDF](<https://openreview.net/pdf?id=9Odwt5ID8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139708>)

Origin\-destination \(OD\) flow forecasting supports decisions about where and how many people move through a city\. Most existing public OD benchmarks provide only a partial view of citywide mobility, covering a single transport service or at most two modes\. With partial mode coverage, observed demand changes are difficult to separate into shifts across transport modes and changes in total travel\. We introduce SeoulMMOD, a large\-scale public benchmark for citywide multimodal mobility in Seoul\. SeoulMMOD provides three years of hourly OD flows estimating total mobility for 6 urban travel modes across 25 districts and 426 sub\-districts, together with travel\-time, travel\-distance, calendar, rainfall, and point\-of\-interest \(POI\) signals\. Using SeoulMMOD, we benchmark 14 forecasting baselines under a common protocol and study spatial scaling, joint training versus training one model per mode, and cross\-year generalization\. Results show that several spatio\-temporal models that work at district level do not scale to sub\-district OD forecasting, and that naive joint multi\-mode training does not consistently improve accuracy\. Together, the dataset and benchmark establish a reproducible testbed for city\-scale multi\-mode OD forecasting across multiple years\. Project page: https://anonymous\.4open\.science/r/SeoulMMOD

## TwinPrune: Density\-Aware Two\-Phase Token Pruning for Vision\-Language Models

**Authors:** Kai Liu; Anqi Li; Junxian Li; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 151130\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151130

[Paper](<https://openreview.net/forum?id=cmNvJykWg5>) | [PDF](<https://openreview.net/pdf?id=cmNvJykWg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151130>)

_Abstract unavailable from the accessible public sources._

## Elephant in the Fridge: Constant\-Memory Frame Packing for Long Video Understanding

**Authors:** Shuo Gao; Chenhao Zheng; Jason Ren

**ID:** 153957\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153957

[Paper](<https://openreview.net/forum?id=HHDoc7LvR2>) | [PDF](<https://openreview.net/pdf?id=HHDoc7LvR2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153957>)

_Abstract unavailable from the accessible public sources._

## Biomedical Acquisition\-induced Style Shifts as Mixture Shifts: Style\-aware Mixture\-of\-Experts Multimodal Prompt Learning

**Authors:** Pingyi Miao; Xianlai Chen; Ying An; Yunbo Wang; Linan Ren; Yuxin Peng

**ID:** 152391\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152391

[Paper](<https://openreview.net/forum?id=TRuGgl9w1X>) | [PDF](<https://openreview.net/pdf?id=TRuGgl9w1X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152391>)

_Abstract unavailable from the accessible public sources._

## What to Perturb, How to Propagate: A Graph\-Guided Transferable Attack on VLP Models

**Authors:** Yongjae Kim; Sungbin Park; Hoon Ji; Sukmin Yun; Yeonjoon Lee

**ID:** 150201\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150201

[Paper](<https://openreview.net/forum?id=jz1A8ZZE3W>) | [PDF](<https://openreview.net/pdf?id=jz1A8ZZE3W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150201>)

_Abstract unavailable from the accessible public sources._

## Anatomy\-Activated Mixture\-of\-Experts for 3D Medical Vision\-Language Pre\-training

**Authors:** Szymon Płotka; Gizem Mert; Pedro R\. A\. S\. Bassi; Wenxuan Li; Zongwei Zhou; Anna M Marcinkiewicz; Wiktoria Romańczyk; Jarosław B Ćwikła; Łukasz Struski; Ewa Szczurek; Jacek Tabor; Arkadiusz Sitek

**ID:** 151182\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151182

[Paper](<https://openreview.net/forum?id=cOJs7gDYiz>) | [PDF](<https://openreview.net/pdf?id=cOJs7gDYiz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151182>)

_Abstract unavailable from the accessible public sources._

## MM\-DyGraph: A Dataset, Benchmark, and Model for Multimodal Dynamic Graphs

**Authors:** Zongyuan Wu; Pengjie Wang; Lingshan Chen; Tianhang Wan; Yuan Meng; Xin Wang; Ling Feng; Wenwu Zhu

**ID:** 139855\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139855

[Paper](<https://openreview.net/forum?id=0G5dV4PwJv>) | [PDF](<https://openreview.net/pdf?id=0G5dV4PwJv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139855>)

_Abstract unavailable from the accessible public sources._

## InfiniteVL: A Systematic Approach to Highly\-Efficient, Ultra\-Long Multimodal Understanding

**Authors:** Hongyuan Tao; Bencheng Liao; Shaoyu Chen; haoran yin; Qian Zhang; Wenyu Liu; Xinggang Wang

**ID:** 149028\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149028

[Paper](<https://openreview.net/forum?id=tNrFDjV59O>) | [PDF](<https://openreview.net/pdf?id=tNrFDjV59O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149028>)

_Abstract unavailable from the accessible public sources._

## FACETS: Cross\-Granularity Vision\-\-Language Modeling for 3D Anomaly Detection

**Authors:** Yuchuan Li; Jae\-Mo Kang; Il\-Min Kim

**ID:** 154063\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154063

[Paper](<https://openreview.net/forum?id=GU2KPq4O7s>) | [PDF](<https://openreview.net/pdf?id=GU2KPq4O7s>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154063>)

_Abstract unavailable from the accessible public sources._

## StreamOV: Streaming Omni\-Video Understanding via Evidence\-Guided Memory and Response Triggering

**Authors:** Ming Xie; Zizheng Huang; Xudong Tan; Chao Wang; Xiangyu Zeng; Wenxiao Wu; Tao Chen; Limin Wang; Yanwei Fu

**ID:** 150068\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150068

[Paper](<https://openreview.net/forum?id=kzU6tZ4CEa>) | [PDF](<https://openreview.net/pdf?id=kzU6tZ4CEa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150068>)

_Abstract unavailable from the accessible public sources._

## I\-Perceive: A Foundation Model for Vision\-Language Active Perception

**Authors:** Yongxi Huang; Wang; Wenjing Tang; Xinyu He; Cewu Lu; Panpan Cai

**ID:** 149023 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tQvz32bRpB>) | [PDF](<https://openreview.net/pdf?id=tQvz32bRpB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149023>)

Active perception—the ability of a robot to proactively select viewpoints to acquire task\-relevant information—is essential for robust operation in real\-world environments\. However, existing approaches are typically limited to fixed objectives or constrained settings, and struggle to generalize to open\-ended perception intents specified in natural language\. We propose I\-Perceive, a foundation model for language\-conditioned active perception in large\-scale indoor environments\. Given a query image, a set of context images, and a natural language instruction, I\-Perceive predicts a 6D camera pose that fulfills the specified perception intent\. The model integrates a vision\-language pathway for semantic grounding with a geometric reasoning pathway for multi\-view 3D understanding, connected via multi\-layer semantic fusion to enable language\-conditioned geometric reasoning\. To support scalable training, we construct a large\-scale dataset of language\-viewpoint pairs from both real\-world scene\-scanning data and simulated environments using an automated pipeline\.  Extensive experiments demonstrate that I\-Perceive significantly outperforms strong baselines on prediction accuracy, viewpoint feasibility, and instructions alignment\. The model exhibits strong zero\-shot generalization to unseen scenes and instructions, and enables closed\-loop active perception, progressively refining viewpoints over sequential interactions\.

## FusionAudit: Pathway\-Conditioned Robustness Auditing for Native Multimodal Models

**Authors:** Jiaming Zhang; Zherui Li; Siqi Guo; Junhao Dong; Kun Wang; Wei Yang Bryan Lim

**ID:** 155007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9HTfZ5ZYA9>) | [PDF](<https://openreview.net/pdf?id=9HTfZ5ZYA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155007>)

As vision\-language models \(VLMs\) transition from frozen\-encoder pipelines to native multimodal architectures, the visual channel increasingly serves as both a perceptual input and a carrier of rendered text that competes with user prompts\. Current single\-attack, pixel\-centric evaluations fail to capture this complexity: they collapse distinct visual attack surfaces into a single scalar and ignore how architectural shifts alter vulnerability\. We introduce \\textbf\{PaRMA\}, an evidence\-based auditing framework that defines pathway\-conditioned risk over two primary image\-level interventions: pixel perturbation and rendered\-text insertion\. Instead of arbitrary attack enumeration, PaRMA uses targeted diagnostics to expose architecture\-specific blind spots\. Notably, we uncover a \\textit\{see\-but\-not\-deceived\} signature where native VLMs attend heavily to typographic overlays but visually reject them, and we identify severe gradient dispersion in deep\-fusion models\. To exploit these findings, we instantiate \\textbf\{FusionAudit\}, introducing two targeted attacks: \\textbf\{MANTIS\} \(margin\-aware pixel perturbation\) and \\textbf\{Nat\-Evid\} \(host\-congruent semantic insertion\)\. Evaluating 18 open\-weight VLMs across a novel nativeness taxonomy, we demonstrate that legacy single\-attack rankings \(e\.g\., PGD\) are highly unstable for native models\. Our diagnostic\-driven attacks substantially raise the estimated residual risk, proving that PaRMA provides a falsifiable, evidence\-driven auditing methodology to uncover vulnerabilities systematically hidden by standard benchmarks\.

## SynDORBench: Evaluating LVLM Perceptual Robustness Under Physically Constrained Visibility Conditions

**Authors:** Jeremy S G Yee; Daniel Zhengkui Wang; Zhiyuan Zhang; Avinash Anand; Timothy Liu; Benedict Chan; Aik B Ng; Simon See

**ID:** 139213\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139213

[Paper](<https://openreview.net/forum?id=eJbJ4kjbfA>) | [PDF](<https://openreview.net/pdf?id=eJbJ4kjbfA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139213>)

Large vision\-language models \(LVLMs\) have demonstrated remarkable performance on multimodal reasoning benchmarks, yet their perceptual reliability under physically constrained imaging conditions remains poorly understood\. Existing evaluations predominantly assume ideal visual inputs and therefore fail to characterize how camera distance, illumination, viewpoint, and pixel density fundamentally affect semantic recoverability\. We introduce SynDORBench, the first physically grounded benchmark for evaluating LVLM perceptual robustness under DORI\-calibrated conditions aligned with human visual capability standards\. SynDORBench comprises over 54k question\-\-answer pairs generated through a controllable synthetic pipeline that systematically varies viewing distance, lighting, camera geometry, and action pose according to physically interpretable pixel\-density regimes\. To support scalable low\-visibility supervision, we further propose a discernibility annotation framework that propagates human perceptual labels using mask\-conditioned statistical features and ensemble learning\. We evaluate 16 open\-source LVLMs, a commercial LVLM baseline, and YOLO11x across human\-presence classification and action recognition tasks under progressively degraded visibility conditions\. Our results reveal that perceptual failure in LVLMs is strongly governed by pixel density and physical imaging constraints rather than model scale alone\. Surprisingly, several compact open\-source LVLMs outperform larger commercial baselines and substantially exceed YOLO11x robustness under long\-range and low\-light conditions\. SynDORBench establishes a new benchmark paradigm for physically grounded multimodal evaluation, enabling systematic analysis of LVLM reliability under real\-world perceptual constraints and direct comparison against human visibility thresholds\.

## Despa: Resolving Spatial Collapse in VLMs via Depth\-Grounded Geometry

**Authors:** Yujing Lou; Pingyi Chen; Shen Cao; Lubin Fan; Yue Wu; Lizhuang Ma; Jieping Ye

**ID:** 155220\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155220

[Paper](<https://openreview.net/forum?id=7OtFTKPxC5>) | [PDF](<https://openreview.net/pdf?id=7OtFTKPxC5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155220>)

Vision\-Language Models \(VLMs\) excel at open\-world 2D perception but struggle with precise metric spatial reasoning, a key requirement for applications like autonomous driving, navigation, and embodied intelligence\. We identify this as a structural limitation: images are 2D projections of the 3D world, inherently suffering from projective ambiguity, while VLM components favor semantic understanding and rely on 2D positional bias, leading to Spatial Collapse\. To address this, we propose Despa, a Depth\-grounded spatial VLMs that injects depth\-based geometric information via Geometric Positional Embedding \(GPE\) and Depth\-aware Rotational Positional Embedding \(DoPE\)\. To expose masked limitations in current benchmarks, we construct SpaDataset \(1\.7M QA pairs\) and SpaBench \(2,051 QAs\), to our knowledge the largest fine\-grained training corpus and benchmark suite for metric spatial reasoning\. They cover three difficulty levels and ten sub\-tasks across diverse settings\.  The fine\-tuned Despa\-4B model consistently outperforms general\-purpose, closed\-source, and specialized VLMs on SpaBench by 27\.9% over Qwen3\-VL\-235B\-A22B and 31\.1% over GPT\-5\.2, generalizes to MSMU \(66\.3%\), RefSpatial\-U \(42\.4%\), and the multi\-frame VSI\-Bench \(66\.0%\), and consistently lifts LLaVA\-1\.5, Qwen2\.5\-VL, and Qwen3\-VL backbones, achieving the performance with only a 4B model\. The code will be publicly released\.

## GT\-Free OCR Metrics: A Reference\-Free Evaluation Framework for Document OCR Systems

**Authors:** Kshitij Singh

**ID:** 139231\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139231

[Paper](<https://openreview.net/forum?id=dSWBIbUTbe>) | [PDF](<https://openreview.net/pdf?id=dSWBIbUTbe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139231>)

Evaluating document OCR systems traditionally requires ground\-truth \(GT\) text annotations aligned to each recognised element\. Producing such annotations demands expert human labour, scales poorly with corpus size, varies between annotators on ambiguous content, ages quickly as document distributions and OCR systems evolve, and is often infeasible for sensitive or proprietary material\. These constraints prevent continuous OCR quality monitoring at production scale and force practitioners to rely on small audited samples or proxy heuristics\. To overcome these inherent limitations of ground\-truth\-based evaluations, we present a new class of reference\-free OCR metrics based on render\-and\-compare that do not require any ground\-truth annotations: OCR output is rendered back into a page image and the result is compared visually against the masked original using no\-reference or learned metrics\. The underlying principle is straightforward: the original page image already serves as a pixel\-level ground truth for the content the OCR system tries to extract \(text, formulas, and tables\), so visual agreement between the original and a re\-rendering of the OCR output is itself a proxy for recognition fidelity\. To our knowledge, no prior work has systematically benchmarked reference\-free visual metrics as proxies for whole\-document OCR quality at scale\. We conduct the first such study, evaluating 147 method implementations spanning 15 broad categories of techniques on 1,355 OmniDocBench pages across 5 OCR\-output variants \(text\-only, formula\-only, table\-only, combined, combined without image masking\)\. We measure every method by Spearman rank correlation against ground\-truth\-based metrics \(edit distance for text and formulae, TEDS for tables\), quantifying whether a reference\-free metric correctly orders pages by OCR quality without any annotations\. A naïve CLIP\-cosine full\-page similarity baseline achieves Spearman correlation $\\rho = 0\.339$; our best composite method reaches $\\rho = 0\.494$ \(mean across the 5 variants; significance $p &lt; 0\.001$, computed over $N = 1\{,\}355$ pages\), with a per\-variant peak of $\\rho = 0\.605$ on the formula\-only variant\. Both numbers indicate that reference\-free OCR quality estimation is genuinely viable: a meaningful page\-level ranking signal can be recovered without any ground\-truth annotations, and the gap to the ground\-truth\-based ranking is consistent with the inherent noise of a multi\-domain document corpus where OCR errors are heterogeneous across text, formula, and table content\. We also discuss inherent limitations that bound what any reference\-free metric can achieve in this setting\. To support  reproducibility and for future research in this direction we are releasing three public HuggingFace datasets \(rendered page pairs, per\-element OCR log\-probabilities, document\-similarity triplets\), and a trained document\-similarity \(DocSim\) LoRA head \(a DreamSim\-style recipe adapted to document page reconstructions\) along with the associated code\.

## Saliency\-Aware Multi\-Route Thinking: Grounding and Reasoning on Vision\-Language Agents

**Authors:** Mingjia Shi; Yinhan He; Yaochen Zhu; Cassie Dong; Jundong Li

**ID:** 150336\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150336

[Paper](<https://openreview.net/forum?id=irnUqOfepp>) | [PDF](<https://openreview.net/pdf?id=irnUqOfepp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150336>)

A vision\-language \(VL\) agent wraps a frozen vision\-language model \(VLM\) into a test\-time system that may call external tools during execution before producing a response\. The central problem is how the VLM and its tools interact across multiple steps\. Two recipes are common, both rigid\. Thinking for longer \(borrowed from text\-only agents\) sharpens reasoning, but without in\-loop visual refresh, it lets visual evidence decay into hallucination\. Querying tools more often, as traditional agents do, treats outputs as ground truth, a rigid commitment that fails when calls are noisy\. We propose Saliency\-Aware Principle Selection \(SAP\), a training\-free inference\-time method that avoids both rigidities: it searches a broad space of high\-level principles, short textual directives \(e\.g\., \`\`re\-examine the image whenever an intermediate conclusion is formed''\) that each prescribe a different way for the VLM to weigh tool advice across steps, and selects the principle whose parallel reasoning routes best fit the actual visual evidence\. Tool outputs are treated as advisory \(consulted, never authoritative\), and a population\-based evolutionary loop drives the search\. Under the same token budget as long chain\-of\-thought, SAP substantially reduces object hallucination while remaining competitive on reasoning\-heavy benchmarks\. Being training\-free and composed of independent routes, SAP is plug\-and\-play on any VLM and parallel for modern agent deployment\.

## Exploring the Limits of Compositional Generalization in Vision\-Language\-Action Manipulation

**Authors:** Xupeng Zhang; Yantai Yang; Chang Guo; Zhaokai Yin; Zhipeng Zhang

**ID:** 139255\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139255

[Paper](<https://openreview.net/forum?id=bqpIkP9Yfq>) | [PDF](<https://openreview.net/pdf?id=bqpIkP9Yfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139255>)

Vision Language Action \(VLA\) models can execute isolated atomic skills, but practical long horizon manipulation requires recombining these skills into new compositions without demonstrations for every skill combination\. The direct full instruction route treats skill chaining as long horizon imitation\. In our controlled study, full instruction training on limited skill combination sequences reaches 40\.0% ordered success on covered combinations but only 7\.7% on recombination, suggesting memorization of sequence templates rather than robust skill recombination\. We therefore introduce Hierarchical Subtask Execution \(HSE\), a diagnostic execution framework that exposes skill recombination through a shared modular interface over the planner, trigger, and policy, enabling long horizon failures to be decomposed into separable modes\. To make this diagnosis measurable, we introduce RoboCombine, a benchmark for skill recombination without combined skill training trajectories, with metrics for ordered success and transition conversion across subtask boundaries\. RoboCombine reveals that atomic competence alone does not ensure ordered execution\. Failures concentrate at transitions where downstream subtasks must launch from handoff states produced by preceding subtasks rather than canonical atomic starts\. We identify this mismatch as the start state gap\. To address it, we introduce Pose Robust Task Initialization \(PRTI\), a lightweight atomic task post training strategy that broadens start state coverage beyond canonical starts\. Under oracle timed HSE on RoboCombine, adding PRTI raises ordered success from 2\.11% to 26\.32% and transition conversion from 2\.63% to 60\.53%, without combined skill training trajectories\. Together, these results show that combinatorial generalization requires handoff robust atomic skills that convert first stage progress into reliable downstream execution, not merely decomposition into known subtasks\. We will release RoboCombine and HSE code to enable reproducible diagnosis of atomic skill recombination failures\.

## TasteBench: multimodal benchmark for sensory prediction, from molecules to sustainable foods

**Authors:** Anna Thomas; Sohum Patnaik; Caroline Cotto; Benjamin Sanchez\-Lengeling

**ID:** 139273\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139273

[Paper](<https://openreview.net/forum?id=aP6pc3wy1D>) | [PDF](<https://openreview.net/pdf?id=aP6pc3wy1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139273>)

Sustainable protein discovery lacks the fast computational proxies, analogous to molecular docking or density functional theory, that accelerate drug and materials discovery\. Evaluating whether a novel food tastes like its animal\-based target requires expensive human sensory panels, bottlenecking the design\-build\-test loop\. We introduce \\textsc\{TasteBench\}, a multimodal benchmark and privacy\-preserving competition for sensory prediction, spanning two tasks: a food\-level ranking task built on 21K\+ human evaluations across 215 plant\-based foods in 24 product categories, yielding 935 within\-category ranking pairs, and a supporting molecular\-level taste classification task over 15K flavor molecules\.  To enable rigorous interpretation of model performance, we characterize the ground truth: inter\-rater agreement among panelists is low \(Krippendorff's $\\alpha$ = \.077\), and the split\-half reliability ceiling of panel\-aggregated rankings is \.825, establishing the range within which ML systems on this benchmark should be assessed\. We evaluate baselines across four input modalities; on the same pairs panelists rated, the best model achieves \.661 pairwise accuracy, competitive with the median individual panelist \(\.650\)\. TasteBench provides the evaluation infrastructure and baselines for measuring progress on computational screening for sustainable protein discovery\.

## VLMGuard: Bootstrapping Malicious Prompt Detectors from Unlabeled Vision\-Language Prompts in the Wild

**Authors:** Junlin Fang; Wenyu Chen; Reshmi Ghosh; Robert Sim; Ahmed Salem; Vitor Carvalho; Emily Lawton; Sharon Li; Jack Stokes; Sean Du

**ID:** 156800\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156800

[Paper](<https://openreview.net/forum?id=z7gczmhmmo>) | [PDF](<https://openreview.net/pdf?id=z7gczmhmmo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156800>)

Vision\-language Models \(VLMs\) are essential for contextual understanding of both visual and textual information\. However, their vulnerability to adversarially manipulated inputs presents significant risks, leading to compromised outputs and raising concerns about the reliability in VLM\-integrated applications\. Detecting these malicious prompts is thus crucial for maintaining trust in VLM generations\. A major challenge in developing a safeguarding prompt classifier is the lack of a large amount of labeled benign and malicious data\. To address the issue, we introduce VLMGuard, a novel learning framework that leverages the unlabeled user prompts in the wild for malicious prompt detection\. These unlabeled prompts, which naturally arise when VLMs are deployed in the open world, consist of both benign and malicious information\. To harness the unlabeled data, we present an automated maliciousness estimation score for distinguishing between benign and malicious samples within this unlabeled mixture, thereby enabling the training of a binary prompt classifier on top\. Notably, our framework does not require extra human annotations and is robust to realistic prompt variations, offering strong flexibility and practicality for real\-world applications\. Extensive experiments show that VLMGuard achieves superior detection results, improving AUROC by 9\.46% on average over the state\-of\-the\-art method\. Disclaimer: This paper may contain offensive examples; reader discretion is advised\. Code is available at: https://github\.com/radiolab\-ntu/vlmguard\.

## Preventing Error Cascades in Long\-Horizon Multimodal Agents with Edge\-Reliability Graph Memory

**Authors:** Saman Forouzandeh; Wei Peng; Xinghuo Yu; Mahdi Jalili

**ID:** 149654\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149654

[Paper](<https://openreview.net/forum?id=oSvwY9Jnn1>) | [PDF](<https://openreview.net/pdf?id=oSvwY9Jnn1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149654>)

Long\-horizon tool\-augmented agents suffer sharp degradation as trajectories grow: small tool errors are stored, repeatedly reused, and amplified into cascading failures\. Existing approaches rely on post\-hoc verification, item\-level memory scoring, or executive context management, but do not directly control how unreliable evidence propagates through reuse\. We propose \\textbf\{EPOCH\} \(Edge\-Pathway Outcome\-supervised Cascade\-Halting memory\), which mitigates cascades by learning an outcome\-correlated reliability proxy on reuse pathways connecting observations over time, instantiated as a sparse memory graph with quality\-weighted edges, a Temporal Graph Transformer over edge reliabilities, and a learned mid\-context correction\. \\textbf\{We prove that quality\-weighted and uniform retrieval are asymptotically separated in horizon length:\} the ratio of cumulative cascade error diverges unboundedly as $T \\to \\infty$ whenever the calibration parameter is positive, a result that does not require distributional regularity\. We validate this prediction empirically at trajectory lengths up to $T=500$ and additionally establish a quantitative edge\-vs\-node separation in terms of an empirically measurable cross\-context error variance\. Because outcome supervision is correlational by construction, we do not claim the learned scores recover causal pathway reliability; we validate them on two complementary axes \(counterfactual edge ablation: $\\rho=0\.71$, $n=21\{,\}743$; human annotation: ROC\-AUC\~$=0\.94$, ECE\~$=0\.041$, $n=6\{,\}000$\)\. Across 11 multi\-modal benchmarks spanning native long\-horizon search, wrapped knowledge\-seeking tasks, and clean perception controls, EPOCH consistently outperforms the strongest reliability\-aware and memory\-augmented baselines in noisy long\-horizon regimes while remaining on par on clean perception controls\-\-\-quality\-aware filtering does not collapse on clean data without claiming it helps there\.

## Benchmarking Multi\-Modal Graph\-based Social Media Popularity Prediction

**Authors:** Utkarsh Sahu; Zhisheng Qi; Li Zhu; Yizhao Yang; Jun Li; Ryan Rossi; Yu Wang

**ID:** 139108\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139108

[Paper](<https://openreview.net/forum?id=kYqjpEOuRi>) | [PDF](<https://openreview.net/pdf?id=kYqjpEOuRi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139108>)

Social media popularity prediction aims to forecast the future reach or influence of online content from early\-stage observations\. Accurate prediction enables key downstream applications, such as advertising optimization and strategic content planning by users, creators, and platforms\. Despite substantial progress, existing popularity prediction works often fail to jointly consider multimodal content and temporal social interaction signals\. Moreover, the literature remains highly fragmented across datasets, modalities, observation windows, prediction targets, and evaluation protocols\. This fragmentation prevents fair comparison and obscures a systematic understanding of how textual, visual, temporal, and interaction\-based signals jointly shape popularity dynamics\. To address these challenges, we introduce MMG\-Pop, a Multi\-modal Graph\-based Popularity Prediction benchmark, which unifies datasets, modalities, temporal interaction signals, and representative baselines under a standardized evaluation protocol\. Furthermore, we propose MMG\-PopNet, a unified multi\-modal graph\-based network that jointly models the aforementioned multi\-modal signals and graph\-structured social interactions\. Extensive experiments on MMG\-Pop, comprising four datasets across Bluesky and Reddit platforms, demonstrate the superior performance of MMG\-PopNet and yield new insights into cross\-platform training generalization, multi\-task prediction benefits, multi\-modality contributions, and LLM prediction limitation\. These findings establish a unified foundation for future research on social dynamics modeling and intervention under heterogeneous modalities and socially\-aware agentic ecosystem paradigms\.

## Text\-side fragility in contrastive vision\-language retrieval

**Authors:** Yanyu Lei

**ID:** 139343\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139343

[Paper](<https://openreview.net/forum?id=VZDduyq0Lw>) | [PDF](<https://openreview.net/pdf?id=VZDduyq0Lw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139343>)

Contrastive vision\-language models \(VLMs\) are deployed in a growing range of retrieval and grounding systems, making their robustness to input corruption a critical property\. In this paper, we apply controlled corruptions to textual and image inputs for five contrastive VLMs spanning three Vision Transformer architectures, four training corpora, and two contrastive loss functions\. We aim to measure how image and text representations and retrieval performance respond as input damage increases\. Previous cross\-modal robustness work often applied ordinal severity scales to corruptions independently, even though the same severity step on the image side may not represent equivalent damage on the text side or vice versa\. Our experiment addresses this measurement gap using within\-modality damage percentile binning, which ranks each side's corruptions on its own damage scale and compares only at matched ranks\. We evaluate all models on MS\-COCO retrieval with $n = 1\{,\}000$ pairs over three seeds, six corruption types, and five severity levels\. Our results indicate that image\-to\-text \(i2t\) Recall@1 at the highest damage quintile is 4\.6$\\times$ to 5\.8$\\times$ higher than text\-to\-image \(t2i\) Recall@1 at the matched quintile\. Two mechanistic probes are used to localize part of the asymmetry to the single\-token text\-pooling bottleneck and to text damage that destroys lexical content rather than word order\. These results suggest that downstream applications retrieving images from text are notably more fragile than the reverse, and that future improvements to cross\-modal robustness require architectural attention to text readout\.

## SceneBind: Binding What and Where Across Vision, Audio, and Language

**Authors:** Mingfei Chen; Zijun Cui; Ruoke Zhang; Hyeonggon Ryu; Eli Shlizerman

**ID:** 153396\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153396

[Paper](<https://openreview.net/forum?id=LfcBS0p58e>) | [PDF](<https://openreview.net/pdf?id=LfcBS0p58e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153396>)

We present SceneBind an omni\-modal representation of realistic scenes with joint semantic and 3D spatial understanding across vision, audio, and language\. Existing omni\-modal encoders excel at instance\-level semantics \(i\.e\., what is present\), but often lack explicit spatial structure \(i\.e\., where it is\)\. SceneBind addresses this gap by representing each scene as a semantic\-spatial entity, combining a global semantic embedding with object\-centric semantic\-spatial slots\. This representation explicitly captures object\-level semantics, spatial attributes, and uncertainty\. We further propose SceneBind Matching, a semantic–spatial matching scheme that integrates global scene similarity with object alignment, supporting cross\-modal scene retrieval and object grounding\. To train and evaluate SceneBind, we curate a novel real\-world binaural audio\-visual dataset with structured semantic and spatial annotations, and propose a training protocol for aligning semantic and spatial signals across modalities\. SceneBind is compatible with large\-scale pretrained semantic encoders, adds lightweight spatial modeling with only a few additional tokens\. It achieves state\-of\-the\-art scene and spatial retrieval while enabling strong zero\-shot transfer to downstream tasks such as audio\-visual localization\.

## Don't Pause\! Every prediction matters in a streaming video

**Authors:** Dibyadip Chatterjee; Zhanzhong Pang; Fadime Sener; Yale Song; Angela Yao

**ID:** 139366\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139366

[Paper](<https://openreview.net/forum?id=UYNq6gYxzq>) | [PDF](<https://openreview.net/pdf?id=UYNq6gYxzq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139366>)

Streaming video models should respond the moment an event unfolds, not after the moment has passed\. Yet existing online VideoQA benchmarks remain largely retrospective\. They pause the video at fixed timestamps, pose questions about current or past events, and score models only at those moments\. This protocol leaves streaming outputs untested\. To close this gap, we introduce SPOT\-Bench, featuring multi\-turn proactive queries that evaluate general streaming perception required by an always\-on, real\-time assistant\. SPOT\-Bench comes with Timeliness\-F1, a consolidated metric that measures streaming outputs by their temporal precision and balanced coverage across the entire video\. Our benchmark reveals that during streaming inference: \(i\) MLLMs detect events reliably in a stream but spam predictions unprompted; \(ii\) post\-training MLLMs for silence reduces spamming but induces unresponsiveness; \(iii\) half of the streaming video expects no response, which we term dead\-time \- compute spent here does not affect response latency\. These findings motivate Ctrl\-SPOT, a training\-free streaming controller for MLLMs, that retains their event perception while controlling their streaming outputs for balanced coverage\. This establishes a strong baseline on SPOT\-Bench\.

## Perturb, Repair, Verify: Self\-Play Vision\-Language Verifiers for Compositional Understanding

**Authors:** Zijun Huang; Yingjun Du; Cees Snoek

**ID:** 150547\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150547

[Paper](<https://openreview.net/forum?id=hK4oymHJs3>) | [PDF](<https://openreview.net/pdf?id=hK4oymHJs3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150547>)

Vision\-language verifiers judge whether an image faithfully matches a textual description, yet existing training pipelines typically rely on static supervision from stronger external judges or curated hard\-negative data\. Such supervision is costly, teacher\-bounded, and difficult to adapt as model failures evolve\. We introduce PROVE \(Perturb\-and\-Repair Optimization for Vision\-Language Evaluation\), a self\-play framework that trains verifiers through a closed perturb–verify–repairverify loop\. Starting from a known\-correct image\-caption pair, a Mutator introduces a typed perturbation over objects, attributes, counts, or relations\. The verifier then judges the perturbed caption and provides textual feedback, which a Repairer uses to recover a faithful caption for re\-verification\. These two verification rounds produce structured rewards for informative mismatches and visually grounded repairs\. Since perturbation, verification, and repair are role\-conditioned behaviors of the same evolving multimodal backbone, updating the shared parameters also improves the verifier itself\. Experiments show that PROVE improves fine\-grained compositional verification and visual\-detail robustness while preserving general multimodal capability\.

## ClothTransformer: Unified Latent\-Space Transformers for Scalable Cloth Simulation

**Authors:** Yu Zhang; YIDI SHAO; Wenqi Ouyang; Yushi LAN; Zhexin Liang; Chengrui Wu; Xudong XU; Xingang Pan

**ID:** 151474\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151474

[Paper](<https://openreview.net/forum?id=aLQA62sNo3>) | [PDF](<https://openreview.net/pdf?id=aLQA62sNo3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151474>)

Unified and scalable Transformers have recently achieved remarkable success in modeling diverse phenomena traditionally associated with computer graphics, such as 3D visual effects, rendering processes, and motion in videos\. In this work, we take a step further by investigating whether modern Transformer techniques can tackle the challenging task of cloth simulation\. To this end, we present ClothTransformer, a framework that reformulates cloth simulation as autoregressive sequence modeling in a learned latent space\. Existing neural cloth simulators are largely specialized to single scenarios, intrinsically coupled to the mesh discretization, and lack robust collision handling\. Our approach addresses these limitations through three contributions: \(1\) a unified Transformer architecture that handles diverse scenarios\-\-\-body\-driven garments, robotic manipulation, and free\-fall collisions\-\-\-under a single model and achieves approximately $4$\-\-$9\{\\times\}$ lower error than prior state\-of\-the\-art across all scenarios; \(2\) a scalable latent\-space formulation that compresses arbitrary\-resolution meshes into a fixed\-size set of latent tokens, making temporal dynamics computation independent of mesh resolution; and \(3\) a diverse\-scenario high\-fidelity penetration\-free dataset of $\{\\sim\}$493\.4k frames  spanning all three settings, which enables a differentiable Continuous Collision Detection \(CCD\) module to suppress penetration artifacts\.

## TPRL: Adaptive Visual Token Pruning in LVLMs via Language\-Guided Reinforcement Learning

**Authors:** Sihan Cao; Jianwei Zhang; Pengcheng Zheng; Jiaxin Yan; Caiyan Qin; Yalan Ye; Wei Dong; Peng Wang; Yang Yang; Chaoning Zhang

**ID:** 153958\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153958

[Paper](<https://openreview.net/forum?id=HGL8gQMjLg>) | [PDF](<https://openreview.net/pdf?id=HGL8gQMjLg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153958>)

_Abstract unavailable from the accessible public sources._

## Partition\-Aware Unlearning for Removing Spurious Correlations in Large Vision\-Language Models

**Authors:** Aditi Sarker; Nazreen Shah; Rafi Ibn Sultan; Rhongho Jang; Dongxiao Zhu; Prashant Khanduri

**ID:** 139381\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139381

[Paper](<https://openreview.net/forum?id=Tt3sSoAeJd>) | [PDF](<https://openreview.net/pdf?id=Tt3sSoAeJd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139381>)

_Abstract unavailable from the accessible public sources._

## Leak\-CURBER: A Leakage\-Controlled Multimodal Evaluation Benchmark for Enzymatic Reaction Tasks

**Authors:** Adhil Ahmed P M Shums; Roshan Balaji; Nirav Bhatt

**ID:** 139384\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139384

[Paper](<https://openreview.net/forum?id=Tn4JHggWJI>) | [PDF](<https://openreview.net/pdf?id=Tn4JHggWJI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139384>)

_Abstract unavailable from the accessible public sources._

## RobustPruner: Decoupled Relevance and Uncertainty for Efficient Visual Token Pruning in MLLMs

**Authors:** Hanwei Zhu; Junhan Fu; Xi Zhang; Jiamang Wang; Weisi Lin

**ID:** 153328\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153328

[Paper](<https://openreview.net/forum?id=M8tBI5LjWD>) | [PDF](<https://openreview.net/pdf?id=M8tBI5LjWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153328>)

_Abstract unavailable from the accessible public sources._

## VideoSTF: Stress\-Testing Output Repetition in Video Large Language Models

**Authors:** Yuxin Cao; Yuxin Cao; Shangzhi Xu; Jingling Xue; Jin Song Dong

**ID:** 152442\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152442

[Paper](<https://openreview.net/forum?id=T7JCqZCbkm>) | [PDF](<https://openreview.net/pdf?id=T7JCqZCbkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152442>)

_Abstract unavailable from the accessible public sources._

## Urbex: Agentic Spatial Grounding for City\-Scale 3D Scenes

**Authors:** Yu Wang; Rui Dai; Wei Chen; Yi Wang; Bo Dang; Kaikui Liu; Xiangxiang Chu; Yansheng Li

**ID:** 149965\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149965

[Paper](<https://openreview.net/forum?id=ls2ORqqsqZ>) | [PDF](<https://openreview.net/pdf?id=ls2ORqqsqZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149965>)

_Abstract unavailable from the accessible public sources._

## BRACE: Bipolar Reference\-Aware Calibration and Estimation for Incomplete Multimodal Learning

**Authors:** Ruiting Dai; Zesen Cai; XiaoYu Zhao; Yiting Huang; Lisi Mo; Ming Li; Tao He

**ID:** 150021\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150021

[Paper](<https://openreview.net/forum?id=lLcmkgW4CK>) | [PDF](<https://openreview.net/pdf?id=lLcmkgW4CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150021>)

_Abstract unavailable from the accessible public sources._

## Toward Multimodal Sheet Music Recognition and Understanding

**Authors:** Guang Yang; Brian Zheng; Victoria Ebert; Noah Smith

**ID:** 156033\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156033

[Paper](<https://openreview.net/forum?id=10iF3BXLdK>) | [PDF](<https://openreview.net/pdf?id=10iF3BXLdK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156033>)

We propose a novel pipeline for extracting symbolic notation and semantic knowledge from images of sheet music\. Our pipeline features the first large\-scale neural model for optical music recognition \(OMR\) to operate sequentially on a system\-by\-system basis, following the horizontal lines of notation as they are read on the page, rather than treating the page as an undifferentiated image, enabling better scaling to arbitrarily long inputs\. It is also the first OMR model capable of generating symbolic transcriptions that include embedded textual content, such as titles and annotations\. The pipeline combines system\-level segmentation with an autoregressive vision\-LM to capture both local notation details and score structure\.  Across multiple datasets, our approach consistently outperforms prior state of the art\.  We also show that symbolic transcriptions complement visual inputs for frontier language models, improving their interpretation of dense musical documents\. The result is new state\-of\-the\-art performance in both OMR and downstream sheet music understanding\. We will release data and code upon publication\.

## Beyond Sparse Captions: Aligning Slide\-Level Text and Patch\-Level Vision in Pathology

**Authors:** Daniel Shao; Dongmin Bang; Luca Weishaupt; Nic G Reitsam; Sophia J\. Wagner; Ming Yang Lu; Long P Le; Richard Chen; Faisal Mahmood

**ID:** 149751\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149751

[Paper](<https://openreview.net/forum?id=nd95WRs4xs>) | [PDF](<https://openreview.net/pdf?id=nd95WRs4xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149751>)

Contrastive vision\-language \(VL\) pretraining in computational pathology has generally relied on curated image\-caption datasets sourced from social media, educational videos, and research publications\. These corpora are sparse relative to the diversity of tissue morphology and difficult to scale further, as pathologists do not routinely produce descriptive captions in clinical practice\. We propose to instead leverage slide\-level pathology reports which can be generated during routine diagnostic workflows in a scalable manner\. A key challenge in this weakly\-supervised setting is that pathology reports describe macroscopic, diagnostic findings while patch\-level visual features describe microscopic findings\. We introduce Locked Image Multiple Instance PreTraining \(LIMIT\), which addresses this gap by freezing a pretrained vision encoder and fine\-tuning only the text encoder: report embeddings serve as cross\-attention queries over bags of patch features, producing report\-conditioned slide representations optimized via cross\-entropy\. Using LIMIT, we establish CONCH\-Z, which aligns the text encoder of CONCH v1\.5 to 335,645 clinical reports\. Evaluated across 20 tasks spanning patch\-level classification, tumor detection, and slide\-level subtyping, CONCH\-Z establishes state\-of\-the\-art zero\-shot performance over VL encoders trained on curated caption datasets, while simultaneously closing the gap with slide\-level foundation models trained with substantially more parameters and compute\. We will release CONCH\-Z weights and evaluation code to support reproducibility and broader community use\.

## SF\-DST: Adapting Vision\-Language Models for Anomaly Detection via Asymmetric Modulation and A\-LoRA

**Authors:** Zhipeng Wang; Xiaofei Li; Dong Zhao; Yonghong Song

**ID:** 151642\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151642

[Paper](<https://openreview.net/forum?id=Z55huSQY5L>) | [PDF](<https://openreview.net/pdf?id=Z55huSQY5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151642>)

Vision\-Language Models \(VLMs\) show great potential for Industrial Anomaly Detection \(IAD\) but often overlook subtle high\-frequency defects due to their semantic bias\. Additionally, one\-class adaptation risks rank collapse and catastrophic forgetting\. To address these issues, we propose a unified framework termed SF\-DST\. First, we design Spatial\-Frequency Dual\-Stream Transformer, which explicitly captures lost details via a parallel discrete cosine transform branch\. Crucially, it incorporates Asymmetric Cross\-Modal Modulation \(ACMM\), a mechanism that leverages spatial semantics as a context gate to selectively retrieve and inject spectral features, effectively compensating for the texture blindness of VLMs\. Second, Anomaly\-Aware LoRA \(A\-LoRA\) enforces Orthogonal Regularization on the adaptation subspace\. This geometric constraint ensures subspace diversity to prevent mode collapse, while optimizing a hypersphere\-based metric for precise anomaly discrimination\. Extensive experiments on MVTec\-AD, VisA and MMAD benchmarks demonstrate that our method significantly outperforms state\-of\-the\-art approaches, successfully bridging the gap between large\-model generalization and industrial\-grade precision\.

## SelfGuard: Self\-Supervised Deviation Modeling for Multi\-Modal Jailbreak Detection

**Authors:** Chenchen Jing; Hongli Guo; Huarong Jia; TianweiBai; Che Sun; Yang Liu; Chunhua Shen

**ID:** 150784\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150784

[Paper](<https://openreview.net/forum?id=fQrMmdCmbG>) | [PDF](<https://openreview.net/pdf?id=fQrMmdCmbG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150784>)

Multi\-modal large language models \(MLLMs\) achieve strong vision–language reasoning ability but remain vulnerable to jailbreak attacks that exploit subtle cross\-modal cues to bypass safety mechanisms\. Detecting such attacks is difficult because harmful data are scarce and rapidly evolving, while detectors trained on known patterns often fail to generalize\. In this paper, we cast multi\-modal jailbreak detection as self\-supervised deviation modeling and learn attack\-agnostic signals from benign data only\. We propose SelfGuard, a self\-supervised framework, which models benign multi\-modal regularities and learns to score structured violations via controlled pseudo\-harmful deviations\. SelfGuard synthesizes pseudo\-harmful samples via controlled transformations that target three signature cues, cross\-modal semantic inconsistency, format manipulation, and semantic toxicity\. It then learns complementary deviation statistics through multi\-task self\-supervised learning, including misalignment discrimination, reconstruction\-based toxicity modeling, and contrastive format modeling\. At inference, SelfGuard performs multi\-view deviation estimation by aggregating task\-specific deviation scores to identify departures from benign multi\-modal regularities\. Extensive experiments on various benchmarks show the effectiveness of our method\.

## Who Called? V33DA: A Physically Verified Multimodal Benchmark for Vocal Attribution in Zebra Finch Groups

**Authors:** Maris Basha; Yuhang Wang; Xiaoran Chen; Longbiao Cheng; Luca N Yapura; Anja T Zai; Mathieu Salzmann; Richard Hahnloser

**ID:** 138989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sBncLCoECK>) | [PDF](<https://openreview.net/pdf?id=sBncLCoECK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138989>)

Deciding which member of a group produced a vocalization and where that vocalization was produced are central to studying social communication but are rarely evaluated with physically verified ground truth\. Existing resources either localize sounds without identifying the caller, or recognize individuals from isolated vocalizations without reliance on the 3d candidate geometry\. We close this gap with V33DA, a multimodal benchmark for spatial vocal attribution in social zebra finches: it comprises 33,625 verified events coupling 5\-channel audio with three camera views, calibrated 3D pose for every visible candidate, and per\-bird radio telemetry across 10 individuals and three experiments\. Caller identity is verified from an on\-body accelerometer\-derived vibration signal; this channel is withheld from benchmark models and used only by an oracle ceiling\. We also provide V33DA\+\+ as an auxiliary extension with verified overlapping\-call events and $\\pm 2$s context windows, intended to support future source\-separation and vocal\-activity\-detection studies\.  V33DA separates familiar\-individual recognition from transferable spatial attribution\. We evaluate candidate\-conditioned caller attribution, with 3D source localization as a secondary diagnostic, under three regimes: session\-disjoint testing, held\-out\-experiment transfer, and leave\-one\-individual\-out evaluation\. A broad set of reference methods exposes a consistent gap between in\-domain accuracy and transfer under identity shift: methods that can exploit familiar vocal identity perform well on known callers but degrade sharply on unseen ones, whereas candidate\-aware methods preserving explicit spatial reasoning transfer substantially better\. The accelerometer oracle stays near\-perfect across regimes, confirming the internal consistency of the accelerometer\-verified labels and quantifying the ceiling available when the withheld verification channel is observed\. We release V33DA with fixed attribution/localization protocols and V33DA\+\+ with overlap and long\-context tasks, together with code for the evaluated methods\.

## Beyond Langevin: Sampling Multimodal Densities using the Witten Laplacian on 1\-forms

**Authors:** Sahani Pathiraja; Panos Parpas

**ID:** 155804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2lO3V0sYmV>) | [PDF](<https://openreview.net/pdf?id=2lO3V0sYmV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155804>)

We introduce a new algorithm to sample from a probability density $\\pi \\propto e^\{\-V\}$ with $V\(x\): \\mathbb\{R\}^d \\rightarrow \\mathbb\{R\}$ a strongly multi\-modal potential\.  Such distributions are challenging to sample from using standard gradient based methods, as exploration typically relies on inefficient diffusions\.  Inspired by connections between Schrodinger operators, Langevin diffusions  and Morse theory,  we develop a particle based method that exploits fast relaxation to transition pathways of the so\-called Witten PDE on 1\-forms \(vector fields\)\.  Once pathways joining modes are sufficiently well explored, the method relaxes to inexpensive Langevin dynamics for sampling within approximately convex basins\.  Numerical experiments demonstrate superior performance over cheap gradient based sampling methods and competitive performance at lower cost compared to a state of the art method, parallel tempering\.

## From Denoising to Refining: A Corrective Framework for Vision\-Language Diffusion Model

**Authors:** Yatai Ji; Teng Wang; Yuying Ge; Zhiheng Liu; Sidi Yang; Ying Shan; Ping Luo

**ID:** 150917 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eOkoZ4QWa0>) | [PDF](<https://openreview.net/pdf?id=eOkoZ4QWa0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150917>)

Discrete diffusion models have emerged as a promising direction for vision\-language tasks, offering bidirectional context modeling and theoretical parallelization\. However, their practical application is severely hindered by a train\-inference discrepancy, which leads to catastrophic error cascades: initial token errors during parallel decoding pollute the generation context, triggering a chain reaction of compounding errors and leading to syntactic errors and semantic hallucinations\. To address this fundamental challenge, we reframe the generation process from passive denoising to active refining\. We introduce ReDiff, a refining\-enhanced diffusion framework that teaches the model to identify and correct its own errors\. Our approach features a two\-stage training process: first, we instill a foundational revision capability by training the model to revise synthetic errors; second, we implement a novel online self\-correction loop where the model is explicitly trained to revise its own flawed drafts by learning from an expert's corrections\. This mistake\-driven learning endows the model with the crucial ability to revisit and refine its already generated output, effectively breaking the error cascade\. Extensive experiments demonstrate that ReDiff significantly improves the coherence and factual accuracy of generated content, enabling stable and efficient parallel generation far superior to traditional denoising methods\.

## Tuna\-2: Pixel Embeddings Beat Vision Encoders for Multimodal Understanding and Generation

**Authors:** Zhiheng Liu; Weiming Ren; Xiaoke Huang; Shoufa Chen; Tianhong Li; Mengzhao Chen; Yatai Ji; Sen He; Jonas Schult; Belinda Zeng; Tao Xiang; Wenhu Chen; Ping Luo; Luke Zettlemoyer; Yuren Cong

**ID:** 154633 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9czc9fdwn>) | [PDF](<https://openreview.net/pdf?id=C9czc9fdwn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154633>)

Unified multimodal models typically rely on pretrained vision encoders and use separate visual representations for understanding and generation, creating misalignment between the two tasks and preventing fully end\-to\-end optimization from raw pixels\. We introduce Tuna\-2, a native unified multimodal model that performs visual understanding and generation directly based on pixel embeddings\. Tuna\-2 drastically simplifies the model architecture by employing simple patch embedding layers to encode visual input, completely discarding the modular vision encoder designs such as the VAE or the representation encoder\. Experiments show that Tuna\-2 achieves state\-of\-the\-art performance in multimodal benchmarks, demonstrating that unified pixel\-space modelling can fully compete with latent\-space approaches for high\-quality image generation\. Moreover, while the encoder\-based variant converges faster in early pretraining, Tuna\-2's encoder\-free design achieves stronger multimodal understanding at scale, particularly on tasks requiring fine\-grained visual perception\. These results show that pretrained vision encoders are not necessary for multimodal modelling, and end\-to\-end pixel\-space learning offers a scalable path toward stronger visual representations for both generation and perception\.

## CRAFT: Causal Responsibility and Failure Tracing in Medical Vision Language Models

**Authors:** Chunzheng Zhu; Jiaqi Zeng; Hongbo Zhao; Yihang Chen; Yijun Wang; Jianxin Lin

**ID:** 149960 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ltg40TysQ2>) | [PDF](<https://openreview.net/pdf?id=ltg40TysQ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149960>)

As vision language models are increasingly deployed in clinical diagnosis, understanding how they internally resolve competing visual and textual signals becomes a safety imperative\. Existing mechanistic analyses remain confined to unimodal text and offer no explanation for why a single misleading sentence can override a correct image based diagnosis, or why a model commits to a confident answer despite insufficient visual evidence\. We find that these two safety risks, arbitration failure where textual context overrides visual grounding and brake failure where the model commits without adequate evidence, are mediated by spatially disjoint attention head populations: arbitration heads form a mid\-to\-deep wideband reflecting cross\-layer evidence  competition, while brake heads concentrate in a narrow middle\-to\-late layer band that regulates evidence sufficiency and abstention behavior\. To ground these observations in causal circuitry, we introduce CRAFT, which localizes each failure mode to a minimal causal head set via dual criteria and verifies necessity and sufficiency through temporal probes and Tuned Lens trajectory analysis\. Excising arbitration heads sharply reduces conflict following with negligible degradation on clean inputs, while excising brake heads restores appropriate abstention under degraded visual evidence\. The two interventions target spatially disjoint head sets and produce distinct corrective effects, underscoring the mechanistic separability of the failure modes\. Experiments across multiple medical VQA benchmarks and VLM architectures validate both the localization and interventions, demonstrating that the identified heads causally drive each failure mode and that targeted modulation generalises without retraining\. The code is available at \\url\{https://anonymous\.4open\.science/r/CRAFT\-B3CA\}\.

## StreamPI: Streaming Multimodal Temporal Modeling for Vision\-Language\-Action Models

**Authors:** Zhe Liu; Jinghua Hou; Yuxiang Lu; Zhenya YANG; Xianzhe Fan; Junwei Luo; Junyi Li; Ruihua Han; Zhi Hou; Hengshuang Zhao

**ID:** 154290\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154290

[Paper](<https://openreview.net/forum?id=EsxSwziuTY>) | [PDF](<https://openreview.net/pdf?id=EsxSwziuTY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154290>)

_Abstract unavailable from the accessible public sources._

## FlowR2A: Learning Reward\-to\-Action Distribution for Multimodal Driving Planning

**Authors:** Xirui Li; Zhe Liu; Xiaoqing Ye; Wenhua Han; Yifeng Pan; Junyu han; Hengshuang Zhao

**ID:** 148780\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148780

[Paper](<https://openreview.net/forum?id=v7t2EKHHHj>) | [PDF](<https://openreview.net/pdf?id=v7t2EKHHHj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148780>)

_Abstract unavailable from the accessible public sources._

## They Can See It but not Say It: Iterative Self Knowledge Re\-expression in Visual Reasoning Relative Pose Identification

**Authors:** MENGYU WANG; Ken Deng; Yftah Ziser; Shay Cohen; Tiejun Ma

**ID:** 151372\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151372

[Paper](<https://openreview.net/forum?id=b4HCV0e0V8>) | [PDF](<https://openreview.net/pdf?id=b4HCV0e0V8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151372>)

_Abstract unavailable from the accessible public sources._

## Explicit Geometric Chain\-of\-Thought for Vision\-Language\-Action in Autonomous Driving

**Authors:** Xingtai Gui; Yucheng Zhou; Dongqian Guo; jiahao gong; Feiyang Tan; Jianbing Shen

**ID:** 155833\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155833

[Paper](<https://openreview.net/forum?id=2Y9nM4dnX8>) | [PDF](<https://openreview.net/pdf?id=2Y9nM4dnX8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155833>)

_Abstract unavailable from the accessible public sources._

## RECAP: Looking Once Is Not Enough for Vision\-Language Reasoning

**Authors:** Zhaolu Kang; Tailong Luo; Chenxin Li; Zhenyu Yu; Fengyu Zhou; Jiachen Qian; Lei Wei; Shuang Chen; Jiachen Li; Yingjie He; Eric Hanchen Jiang; Rongchao Zhang; Zhengtao Yao; Hoi Leong Lee; Guansu Wang; Kaiyue Zhou

**ID:** 152270\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152270

[Paper](<https://openreview.net/forum?id=UKko2Zrtpd>) | [PDF](<https://openreview.net/pdf?id=UKko2Zrtpd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152270>)

_Abstract unavailable from the accessible public sources._

## OpenSearch\-VL: An Open Recipe for Frontier Multimodal Search Agents

**Authors:** Shuang Chen; Kaituo Feng; Hangting Chen; Wenxuan Huang; Dasen Dai; Quanxin Shou; Yunlong lin; Xiangyu Yue; Shenghua Gao; Tianyu Pang

**ID:** 152165\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152165

[Paper](<https://openreview.net/forum?id=V30OG7luk1>) | [PDF](<https://openreview.net/pdf?id=V30OG7luk1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152165>)

_Abstract unavailable from the accessible public sources._

## Unify\-Agent: A Unified Multimodal Agent for World\-Grounded Image Synthesis

**Authors:** Shuang Chen; Quanxin Shou; Hangting Chen; Yucheng Zhou; Kaituo Feng; Wenbo Hu; yifan zhang; Yunlong lin; Wenxuan Huang; Mingyang Song; Dasen Dai; Bolin Jiang; Manyuan Zhang; Yu Cheng; Nanyun Peng

**ID:** 154814\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154814

[Paper](<https://openreview.net/forum?id=AjnoqXXkQr>) | [PDF](<https://openreview.net/pdf?id=AjnoqXXkQr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154814>)

Unified multimodal models provide a natural and promising architecture for understanding diverse and complex real\-world knowledge while generating high\-quality images\. However, they still rely primarily on frozen parametric knowledge, which makes them struggle with real\-world image generation involving long\-tail and knowledge\-intensive concepts\. Inspired by the broad success of agents on real\-world tasks, we explore agentic modeling to address this limitation\. Specifically, we present Unify\-Agent, a unified multimodal agent for world\-grounded image synthesis, which reframes image generation as an agentic pipeline consisting of prompt understanding, multimodal evidence searching, grounded recaptioning, and final synthesis\. To train our model, we construct a tailored multimodal data pipeline and curate 143K high\-quality agent trajectories for world\-grounded image synthesis, enabling effective supervision over the full agentic generation process\. We further introduce FactIP, a benchmark covering 12 categories of culturally significant and long\-tail factual concepts that explicitly requires external knowledge grounding\. Extensive experiments show that our proposed Unify\-Agent substantially improves over its base unified model across diverse benchmarks and real world generation tasks, while approaching the world knowledge capabilities of the strongest closed\-source models\. As an early exploration of agent\-based modeling for world\-grounded image synthesis, our work highlights the value of tightly coupling reasoning, searching, and generation for reliable open\-world agentic image synthesis\.

## AVOC: Enhancing Hour\-Level Audio\-Video Understanding in Omni\-Modal LLMs via Retrieval\-Inspired Token Compression

**Authors:** Yijing Chen; Wenhui Tan; Xiaoyi Yu; Yuyue Wang; Xin Cheng; Kaisi Guan; Hao Jiang; Xiangyang Li; Guojie Zhu; Ruihua Song

**ID:** 154191\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154191

[Paper](<https://openreview.net/forum?id=FW6UJyDapH>) | [PDF](<https://openreview.net/pdf?id=FW6UJyDapH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154191>)

Multimodal Large Language Models have achieved remarkable progress in short\-form audio\-video understanding, yet long\-form audio\-video comprehension remains challenged by limited context windows and severe information redundancy\. To address these bottlenecks, we propose AVOC, a framework for long\-form audio\-video understanding in Omni\-modal Large Language Models\. AVOC introduces a learnable token compression module between the modality encoders and the LLM backbone\.  We reframe multimodal token compression as a top\-$K$ retrieval problem: given a fixed context budget, the module must retrieve a compact subset of tokens that best supports answering the user query\.  We draw inspiration from three classical Information Retrieval criteria for selecting informative units from a large candidate pool: relevance, importance, and diversity\. AVOC instantiates each criterion as a tailored mechanism for audio\-video understanding, and integrates them into a unified retrieval\-style compression pipeline\. Experiments show that AVOC achieves state\-of\-the\-art performance on long\-form audio\-video benchmarks, surpassing the second\-best model by 4\.9 and 5\.5 points in average accuracy on OmniVideoBench and LVOmniBench, respectively\. Moreover, AVOC maintains robust performance on Audio\-Video Needle\-in\-a\-Haystack task at durations up to one hour\.

## HiLoc: A Hierarchical Representation Method for Spatial Localization in Multimodal Large Language Models

**Authors:** Evelyn Zhang; Fufu Yu; Hanjun Li; Aoqi Wu; Ke Yan; Shouhong Ding; Tianhe Ren; Xinting Hu; Xiaojuan Qi; Li Jiang; Jiaya Jia

**ID:** 152158\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152158

[Paper](<https://openreview.net/forum?id=V5T2vPmvxO>) | [PDF](<https://openreview.net/pdf?id=V5T2vPmvxO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152158>)

Existing multimodal large language models \(MLLMs\) typically formulate object detection as a conditional sequence generation task\. Under this paradigm, spatial locations are commonly represented by either textual coordinates or special quantized learnable tokens\. However, textual coordinates are tokenized as unrelated symbols, spatially adjacent points \(e\.g\., $x=199$ vs\. $y=200$\) yield entirely different tokens, so the cross\-entropy loss is misaligned with true spatial distance\. Special quantized location tokens, on the other hand, inevitably introduce quantization error\. Reducing this error requires linearly more tokens, but a larger vocabulary is harder to train and converges slower\. We argue that both limitations stem from the formulation of spatial representation\. To address this issue, we propose a simple yet novel localization representation method, HiLoc, which predicts locations in a coarse\-to\-fine manner with special tokens: first a grid index for coarse localization, then a cell index to refine the position within the grid\. Under this paradigm, accuracy can be scaled up by simply adding the hierarchy level\. We also build HiRef\-500K, a dataset consisting negative and complex referring samples to strengthen rejection and complex referring ability\. Experiments show that our method achieves strong performance on both detection and grounding benchmarks, especially on small objects, under high IOU thresholds and complex referring tasks\.

## Scaling Laws for Multimodal Data Mixtures

**Authors:** Aditi Khandelwal; Ayush Kumar Tarun; Yixuan Xu; Imanol Schlag; Golnoosh Farnadi; Siva Reddy; Luke Zettlemoyer; Antoine Bosselut

**ID:** 148475\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148475

[Paper](<https://openreview.net/forum?id=xX1gcyTLbF>) | [PDF](<https://openreview.net/pdf?id=xX1gcyTLbF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148475>)

Frontier AI systems are increasingly natively multimodal, jointly pretrained on multiple modalities, such as text, vision, and audio\. However, the scientific understanding of the multimodal data mixtures used to pretrain these systems \-\-\- how much of each modality to mix, and at what potential interference cost to the others \-\-\- is largely absent or gatekept\. In this work, we derive data mixing scaling laws for three modalities: text, vision, and audio\. Multimodal Large Language Models \(MLLMs\) increasingly adopt Mixture\-of\-Experts \(MoE\) architectures, as MoEs scale efficiently and partially limit cross\-modal interference\. We therefore use MoEs to conduct 268 experiments ranging from 457M to 8\.3B parameters, on up to 150 billion tokens\. Our work leads to multiple actionable insights into multimodal data mixing for training MLLMs\. First, compute optima are modality\-specific: audio modality is model\-heavy, favouring scaling parameters over tokens, while text and vision require balanced scaling of model size and data\. Second, repeating vision or audio data beyond 2x yields negligible benefits\. Finally, cross\-modal interactions are highly asymmetric: vision strongly interferes with audio, while audio provides mild positive transfer to text and vision despite competing for shared capacity\. Overall, we provide a principled foundation for understanding the multimodal data mixtures needed to train frontier MLLMs\.

## RankAlign: Unsupervised Vision\-Language Representation Alignment via Rank Transformation

**Authors:** Enzhe Zhao; Marco Fiorucci; Lamberto Ballan

**ID:** 149742\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149742

[Paper](<https://openreview.net/forum?id=ngwv68jt7S>) | [PDF](<https://openreview.net/pdf?id=ngwv68jt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149742>)

The Platonic Representation Hypothesis suggests that vision and language models converge toward a shared latent structure, yet the unsupervised alignment of unpaired modalities remains a fundamental challenge\. Current methods rely on direct comparisons of intra\-modality similarity kernels, which are often incommensurate due to disparate scales and representation densities\. This mismatch yields ill\-conditioned optimization landscapes, hindering stable alignment\. To address this, we propose RankAlign, a framework that independently transforms each within\-modality kernel into a rank\-based representation of relative neighbor relationships\. By shifting from absolute similarity values to ordinal relational geometry, RankAlign ensures structural consistency while remaining robust to modality\-specific distortions\. We  show that rank\-based transformation reshapes similarity distributions, mitigating representation collapse and providing a more discriminative alignment signal\. Experiments demonstrate that RankAlign is noise\-resilient and overcome existing kernel\-based alignment method across diverse datasets, including a medical imaging dataset where subtle class differences typically limit existing approaches alignment approaches\.

## Efficient Test\-time Adaptation through Candidate Verification and Divergence Shifts

**Authors:** Seungmin Oh; Seunghun Kang; Jongbin Ryu

**ID:** 149626\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149626

[Paper](<https://openreview.net/forum?id=ofqsXmAtDS>) | [PDF](<https://openreview.net/pdf?id=ofqsXmAtDS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149626>)

Vision\-language models \(VLMs\) achieve strong zero\-shot transferability but remain vulnerable to target\-domain shifts at inference time\. Test\-time adaptation \(TTA\) offers a practical remedy, yet most existing VLM\-TTA methods follow a prediction\-side adaptation paradigm\. They use test samples to adjust logits, prototypes, caches, priors, or feature statistics, often incurring additional computational overhead\. In this paper, we take a different perspective and reframe VLM\-TTA as candidate verification rather than prediction adjustment\. We propose \*\*Test\-Time Correction \(TTC\)\*\*, a hypothesis\-based correction framework guided by a simple principle: \*hypothesize, reconstruct, correct\*\. Given a test feature and its top\-$k$ candidate labels, TTC treats each candidate label as a hypothesis, reconstructs the feature within the corresponding latent subspace stored in a memory bank, and measures the resulting \*\*divergence shift\*\*\. This shift quantifies how much the candidate subspace and its relations to other candidates change after the hypothetical insertion of the test feature\. A correct candidate hypothesis induces only a small shift, whereas an incorrect one perturbs the subspace more strongly\. TTC therefore corrects the prediction by selecting the candidate with the minimum aggregated divergence shift\. This parameter\-free candidate verification mechanism avoids iterative optimization and provides a favorable accuracy\-efficiency trade\-off\. Across five TTA settings and 15 benchmark datasets, including zero\-shot classification, domain generalization, few\-shot classification, base\-to\-novel generalization, and cross\-dataset evaluation, TTC consistently improves accuracy over state\-of\-the\-art VLM\-TTA methods while achieving up to $2\\times$ speedup and over $3\\times$ lower memory usage\.

## ChainFlow\-VLA: Causal Flow Planning with Vision\-Language Models

**Authors:** Xiyang Wang; Xinlin Wang; Tingguang Zhou; Gong Chen; Xingtai Gui; Zhi Xu; Hangning Zhou; Xiaolei Wu; Feiyang Tan; Mu Yang

**ID:** 149929\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149929

[Paper](<https://openreview.net/forum?id=m7AO7a7zPZ>) | [PDF](<https://openreview.net/pdf?id=m7AO7a7zPZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149929>)

Current end\-to\-end autonomous driving systems are fundamentally limited by a mismatch between temporal causal reasoning and global trajectory consistency\. Autoregressive \(AR\) models capture interaction\-aware temporal dependencies via causal factorization, but their step\-wise decoding leads to error accumulation and suboptimal global structure\. In contrast, diffusion models optimize trajectories globally but lack explicit causal constraints, making them unreliable in interactive and safety\-critical scenarios\. This dichotomy reveals a deeper issue: existing methods treat causal modeling and global optimization as separate paradigms, without a principled way to unify them within a single trajectory distribution\. To address this, we propose ChainFlow\-VLA, which unifies causal generation and global refinement within a unified probabilistic framework\. We formulate planning as a mixture over AR\-induced modes and learn VLM\-conditioned residual distributions over these modes\. An autoregressive generator \(\\textbf\{Chain\}\) produces a discrete set of causal trajectory modes, followed by a diffusion\-based refiner \(\\textbf\{Flow\}\) that operates in residual space to perform mode\-conditioned correction while preserving causal structure\. A key insight is that vision\-language models are more effective as semantic controllers for refinement rather than direct trajectory generators\. By conditioning the diffusion process on VLM hidden states, scene\-level reasoning guides fine\-grained trajectory adjustments within each mode\. This formulation enables robust planning in ambiguous and long\-tail scenarios\. ChainFlow\-VLA achieves a state\-of\-the\-art score of 94\.8 on the NAVSIM v1 leaderboard, matching human\-level performance \(94\.8\)\.

## RobustPruner: Decoupled Relevance and Uncertainty for Efficient Visual Token Pruning in MLLMs

**Authors:** Hanwei Zhu; Junhan Fu; Xi Zhang; Jiamang Wang; Weisi Lin

**ID:** 153328\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153328

[Paper](<https://openreview.net/forum?id=M8tBI5LjWD>) | [PDF](<https://openreview.net/pdf?id=M8tBI5LjWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153328>)

_Abstract unavailable from the accessible public sources._

## VideoSTF: Stress\-Testing Output Repetition in Video Large Language Models

**Authors:** Yuxin Cao; Yuxin Cao; Shangzhi Xu; Jingling Xue; Jin Song Dong

**ID:** 152442\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152442

[Paper](<https://openreview.net/forum?id=T7JCqZCbkm>) | [PDF](<https://openreview.net/pdf?id=T7JCqZCbkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152442>)

_Abstract unavailable from the accessible public sources._

## Urbex: Agentic Spatial Grounding for City\-Scale 3D Scenes

**Authors:** Yu Wang; Rui Dai; Wei Chen; Yi Wang; Bo Dang; Kaikui Liu; Xiangxiang Chu; Yansheng Li

**ID:** 149965\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149965

[Paper](<https://openreview.net/forum?id=ls2ORqqsqZ>) | [PDF](<https://openreview.net/pdf?id=ls2ORqqsqZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149965>)

_Abstract unavailable from the accessible public sources._

## BRACE: Bipolar Reference\-Aware Calibration and Estimation for Incomplete Multimodal Learning

**Authors:** Ruiting Dai; Zesen Cai; XiaoYu Zhao; Yiting Huang; Lisi Mo; Ming Li; Tao He

**ID:** 150021\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150021

[Paper](<https://openreview.net/forum?id=lLcmkgW4CK>) | [PDF](<https://openreview.net/pdf?id=lLcmkgW4CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150021>)

_Abstract unavailable from the accessible public sources._

## Toward Multimodal Sheet Music Recognition and Understanding

**Authors:** Guang Yang; Brian Zheng; Victoria Ebert; Noah Smith

**ID:** 156033\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156033

[Paper](<https://openreview.net/forum?id=10iF3BXLdK>) | [PDF](<https://openreview.net/pdf?id=10iF3BXLdK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156033>)

We propose a novel pipeline for extracting symbolic notation and semantic knowledge from images of sheet music\. Our pipeline features the first large\-scale neural model for optical music recognition \(OMR\) to operate sequentially on a system\-by\-system basis, following the horizontal lines of notation as they are read on the page, rather than treating the page as an undifferentiated image, enabling better scaling to arbitrarily long inputs\. It is also the first OMR model capable of generating symbolic transcriptions that include embedded textual content, such as titles and annotations\. The pipeline combines system\-level segmentation with an autoregressive vision\-LM to capture both local notation details and score structure\.  Across multiple datasets, our approach consistently outperforms prior state of the art\.  We also show that symbolic transcriptions complement visual inputs for frontier language models, improving their interpretation of dense musical documents\. The result is new state\-of\-the\-art performance in both OMR and downstream sheet music understanding\. We will release data and code upon publication\.

## Beyond Sparse Captions: Aligning Slide\-Level Text and Patch\-Level Vision in Pathology

**Authors:** Daniel Shao; Dongmin Bang; Luca Weishaupt; Nic G Reitsam; Sophia J\. Wagner; Ming Yang Lu; Long P Le; Richard Chen; Faisal Mahmood

**ID:** 149751\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149751

[Paper](<https://openreview.net/forum?id=nd95WRs4xs>) | [PDF](<https://openreview.net/pdf?id=nd95WRs4xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149751>)

Contrastive vision\-language \(VL\) pretraining in computational pathology has generally relied on curated image\-caption datasets sourced from social media, educational videos, and research publications\. These corpora are sparse relative to the diversity of tissue morphology and difficult to scale further, as pathologists do not routinely produce descriptive captions in clinical practice\. We propose to instead leverage slide\-level pathology reports which can be generated during routine diagnostic workflows in a scalable manner\. A key challenge in this weakly\-supervised setting is that pathology reports describe macroscopic, diagnostic findings while patch\-level visual features describe microscopic findings\. We introduce Locked Image Multiple Instance PreTraining \(LIMIT\), which addresses this gap by freezing a pretrained vision encoder and fine\-tuning only the text encoder: report embeddings serve as cross\-attention queries over bags of patch features, producing report\-conditioned slide representations optimized via cross\-entropy\. Using LIMIT, we establish CONCH\-Z, which aligns the text encoder of CONCH v1\.5 to 335,645 clinical reports\. Evaluated across 20 tasks spanning patch\-level classification, tumor detection, and slide\-level subtyping, CONCH\-Z establishes state\-of\-the\-art zero\-shot performance over VL encoders trained on curated caption datasets, while simultaneously closing the gap with slide\-level foundation models trained with substantially more parameters and compute\. We will release CONCH\-Z weights and evaluation code to support reproducibility and broader community use\.

## SF\-DST: Adapting Vision\-Language Models for Anomaly Detection via Asymmetric Modulation and A\-LoRA

**Authors:** Zhipeng Wang; Xiaofei Li; Dong Zhao; Yonghong Song

**ID:** 151642\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151642

[Paper](<https://openreview.net/forum?id=Z55huSQY5L>) | [PDF](<https://openreview.net/pdf?id=Z55huSQY5L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151642>)

Vision\-Language Models \(VLMs\) show great potential for Industrial Anomaly Detection \(IAD\) but often overlook subtle high\-frequency defects due to their semantic bias\. Additionally, one\-class adaptation risks rank collapse and catastrophic forgetting\. To address these issues, we propose a unified framework termed SF\-DST\. First, we design Spatial\-Frequency Dual\-Stream Transformer, which explicitly captures lost details via a parallel discrete cosine transform branch\. Crucially, it incorporates Asymmetric Cross\-Modal Modulation \(ACMM\), a mechanism that leverages spatial semantics as a context gate to selectively retrieve and inject spectral features, effectively compensating for the texture blindness of VLMs\. Second, Anomaly\-Aware LoRA \(A\-LoRA\) enforces Orthogonal Regularization on the adaptation subspace\. This geometric constraint ensures subspace diversity to prevent mode collapse, while optimizing a hypersphere\-based metric for precise anomaly discrimination\. Extensive experiments on MVTec\-AD, VisA and MMAD benchmarks demonstrate that our method significantly outperforms state\-of\-the\-art approaches, successfully bridging the gap between large\-model generalization and industrial\-grade precision\.

## SelfGuard: Self\-Supervised Deviation Modeling for Multi\-Modal Jailbreak Detection

**Authors:** Chenchen Jing; Hongli Guo; Huarong Jia; TianweiBai; Che Sun; Yang Liu; Chunhua Shen

**ID:** 150784\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150784

[Paper](<https://openreview.net/forum?id=fQrMmdCmbG>) | [PDF](<https://openreview.net/pdf?id=fQrMmdCmbG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150784>)

Multi\-modal large language models \(MLLMs\) achieve strong vision–language reasoning ability but remain vulnerable to jailbreak attacks that exploit subtle cross\-modal cues to bypass safety mechanisms\. Detecting such attacks is difficult because harmful data are scarce and rapidly evolving, while detectors trained on known patterns often fail to generalize\. In this paper, we cast multi\-modal jailbreak detection as self\-supervised deviation modeling and learn attack\-agnostic signals from benign data only\. We propose SelfGuard, a self\-supervised framework, which models benign multi\-modal regularities and learns to score structured violations via controlled pseudo\-harmful deviations\. SelfGuard synthesizes pseudo\-harmful samples via controlled transformations that target three signature cues, cross\-modal semantic inconsistency, format manipulation, and semantic toxicity\. It then learns complementary deviation statistics through multi\-task self\-supervised learning, including misalignment discrimination, reconstruction\-based toxicity modeling, and contrastive format modeling\. At inference, SelfGuard performs multi\-view deviation estimation by aggregating task\-specific deviation scores to identify departures from benign multi\-modal regularities\. Extensive experiments on various benchmarks show the effectiveness of our method\.

## Who Called? V33DA: A Physically Verified Multimodal Benchmark for Vocal Attribution in Zebra Finch Groups

**Authors:** Maris Basha; Yuhang Wang; Xiaoran Chen; Longbiao Cheng; Luca N Yapura; Anja T Zai; Mathieu Salzmann; Richard Hahnloser

**ID:** 138989\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138989

[Paper](<https://openreview.net/forum?id=sBncLCoECK>) | [PDF](<https://openreview.net/pdf?id=sBncLCoECK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138989>)

Deciding which member of a group produced a vocalization and where that vocalization was produced are central to studying social communication but are rarely evaluated with physically verified ground truth\. Existing resources either localize sounds without identifying the caller, or recognize individuals from isolated vocalizations without reliance on the 3d candidate geometry\. We close this gap with V33DA, a multimodal benchmark for spatial vocal attribution in social zebra finches: it comprises 33,625 verified events coupling 5\-channel audio with three camera views, calibrated 3D pose for every visible candidate, and per\-bird radio telemetry across 10 individuals and three experiments\. Caller identity is verified from an on\-body accelerometer\-derived vibration signal; this channel is withheld from benchmark models and used only by an oracle ceiling\. We also provide V33DA\+\+ as an auxiliary extension with verified overlapping\-call events and $\\pm 2$s context windows, intended to support future source\-separation and vocal\-activity\-detection studies\.  V33DA separates familiar\-individual recognition from transferable spatial attribution\. We evaluate candidate\-conditioned caller attribution, with 3D source localization as a secondary diagnostic, under three regimes: session\-disjoint testing, held\-out\-experiment transfer, and leave\-one\-individual\-out evaluation\. A broad set of reference methods exposes a consistent gap between in\-domain accuracy and transfer under identity shift: methods that can exploit familiar vocal identity perform well on known callers but degrade sharply on unseen ones, whereas candidate\-aware methods preserving explicit spatial reasoning transfer substantially better\. The accelerometer oracle stays near\-perfect across regimes, confirming the internal consistency of the accelerometer\-verified labels and quantifying the ceiling available when the withheld verification channel is observed\. We release V33DA with fixed attribution/localization protocols and V33DA\+\+ with overlap and long\-context tasks, together with code for the evaluated methods\.

## Beyond Langevin: Sampling Multimodal Densities using the Witten Laplacian on 1\-forms

**Authors:** Sahani Pathiraja; Panos Parpas

**ID:** 155804\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155804

[Paper](<https://openreview.net/forum?id=2lO3V0sYmV>) | [PDF](<https://openreview.net/pdf?id=2lO3V0sYmV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155804>)

We introduce a new algorithm to sample from a probability density $\\pi \\propto e^\{\-V\}$ with $V\(x\): \\mathbb\{R\}^d \\rightarrow \\mathbb\{R\}$ a strongly multi\-modal potential\.  Such distributions are challenging to sample from using standard gradient based methods, as exploration typically relies on inefficient diffusions\.  Inspired by connections between Schrodinger operators, Langevin diffusions  and Morse theory,  we develop a particle based method that exploits fast relaxation to transition pathways of the so\-called Witten PDE on 1\-forms \(vector fields\)\.  Once pathways joining modes are sufficiently well explored, the method relaxes to inexpensive Langevin dynamics for sampling within approximately convex basins\.  Numerical experiments demonstrate superior performance over cheap gradient based sampling methods and competitive performance at lower cost compared to a state of the art method, parallel tempering\.

## MM\-OptBench: A Solver\-Grounded Benchmark for Multimodal Optimization Modeling

**Authors:** Zhong Li; Qi Huang; Yuxuan Zhu; Mohammad Mohammadi Amiri; Niki van Stein; Thomas Bäck; Matthijs van Leeuwen; Zaiwen Wen; Lincen Yang

**ID:** 139697\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139697

[Paper](<https://openreview.net/forum?id=A3g2i6LYgQ>) | [PDF](<https://openreview.net/pdf?id=A3g2i6LYgQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139697>)

_Abstract unavailable from the accessible public sources._

## A Multimodal Benchmark for Evaluating Cause\-of\-Death Inference Using Child Health and Mortality Data

**Authors:** Junhe Yang; Soumyakanti Pan; Hyun Seung Lim; YUE CHU; Yuting Guo; Nishtha Agarwal; Varun Babbar; Gaurav Rajesh Parikh; Yiqun Chen; Chris A Rees; Ziyaad Dangor; Sanjay G Lala; Zehang Li; Samuel J Clark; Zhenke Wu; Abhirup Datta; Li Liu; Cynthia Rudin; Samuel Scarpino; Benjamin M Gyori; Tyler H\. McCormick

**ID:** 139715\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139715

[Paper](<https://openreview.net/forum?id=8qRMs3zaOJ>) | [PDF](<https://openreview.net/pdf?id=8qRMs3zaOJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139715>)

_Abstract unavailable from the accessible public sources._

## Multimodal Context\-Aware Human Motion Generation with Language, Vision, and Object

**Authors:** Junyu Shi; Yong Sun; Zhiyuan Zhang; Lijiang LIU; Yuxin He; Zhengjie Zhang; Qiang Nie

**ID:** 151367\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151367

[Paper](<https://openreview.net/forum?id=b6H08StHtE>) | [PDF](<https://openreview.net/pdf?id=b6H08StHtE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151367>)

_Abstract unavailable from the accessible public sources._

## VIPER: An Expert\-Curated Benchmark for Vision\-Language Models in Veterinary Pathology

**Authors:** Luca Weishaupt; Simone de Brot; Javier Asin; Llorenç Grau\-Roma; Nic G Reitsam; Andrew H Song; Dongmin Bang; Stefan T Kaluziak; Long P Le; Jakob N Kather; Faisal Mahmood; Guillaume Jaume

**ID:** 139742 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7986DZ9rPe>) | [PDF](<https://openreview.net/pdf?id=7986DZ9rPe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139742>)

_Abstract unavailable from the accessible public sources._

## Towards Reliable VLM Judges: State\-Conditional Invariance and Presentation\-Aware Diagnostics

**Authors:** Qinan Zhang; Xinyu Wang; Qihang Jin; Tianyuan Wang; Jian Di; Hongbing Luo; Pengfei Li; Wenjun Lv; Yu Kang

**ID:** 139432 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R0PFXXlrTV>) | [PDF](<https://openreview.net/pdf?id=R0PFXXlrTV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139432>)

_Abstract unavailable from the accessible public sources._

## LithoBench: Benchmarking Large Multimodal Models for Remote\-Sensing Lithology Interpretation

**Authors:** jun wang; Fengpeng Li; Hang Dong; Tianjin Huang; Wei Han

**ID:** 139771 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5g1HtNiNHn>) | [PDF](<https://openreview.net/pdf?id=5g1HtNiNHn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139771>)

_Abstract unavailable from the accessible public sources._

## When Are Multimodal Predictions Biologically Supported? A Diagnostic Evaluation Framework

**Authors:** Dylan Steiner; Gustavo Arango; Gerald J Sun; Etai Jacob

**ID:** 139798 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3siPQWjkBS>) | [PDF](<https://openreview.net/pdf?id=3siPQWjkBS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139798>)

_Abstract unavailable from the accessible public sources._

## GraphWrit3R: End\-to\-End Writing of Scene Graphs for Multi\-Modal 3D Scenes

**Authors:** Luka Milivojevic; Nikola Popovic; Sayan Deb Sarkar; Sebastian Koch; Iro Armeni; Luc V Gool; Danda Pani Paudel

**ID:** 155005 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9HngFyf11P>) | [PDF](<https://openreview.net/pdf?id=9HngFyf11P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155005>)

_Abstract unavailable from the accessible public sources._

## VisGym: Diverse, Customizable, Scalable Environments for Multimodal Agents

**Authors:** Zirui Wang; Junyi Zhang; Jiaxin Ge; Long Lian; Max Fu; Lisa Dunlap; Ken Goldberg; XuDong Wang; Ion Stoica; David Chan; Sewon Min; Joseph Gonzalez

**ID:** 139809 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3F3t3dn3iI>) | [PDF](<https://openreview.net/pdf?id=3F3t3dn3iI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139809>)

_Abstract unavailable from the accessible public sources._

## StemBind: When MLLMs Get Lost Between Rules and Instances in Abstract Visual Reasoning

**Authors:** Xixiang He; Baiqi Wu; Xingming Li; Ao Cheng; Qiyao Sun; Xuanyu Ji; Qingyong Hu

**ID:** 139814 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=36x2MXhzBB>) | [PDF](<https://openreview.net/pdf?id=36x2MXhzBB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139814>)

_Abstract unavailable from the accessible public sources._

## RedVLA: Physical Red Teaming for Vision\-Language\-Action Models

**Authors:** Yuhao Zhang; Borong Zhang; Jiaming Fan; Jiachen Shen; Yishuai Cai; Yaodong Yang; Jiaming Ji

**ID:** 139830 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2Hz2AoQMFP>) | [PDF](<https://openreview.net/pdf?id=2Hz2AoQMFP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139830>)

The real\-world deployment of Vision\-Language\-Action \(VLA\) models remains limited by the risk of unpredictable and irreversible physical harm\. However, we currently lack effective mechanisms to proactively detect these physical safety risks before deployment\.  To address this gap, we propose \\textbf\{RedVLA\}, the first red teaming framework for physical safety in VLA models\. We systematically uncover unsafe behaviors through a two\-stage process: \(I\) \\textbf\{Risk Scenario Synthesis\} constructs a valid and task\-feasible initial risk scene\. Specifically, it identifies critical interaction regions from benign trajectories and positions the risk factor within these regions, aiming to entangle it with the VLA's execution flow and elicit a target unsafe behavior\. \(II\) \\textbf\{Risk Amplification\} ensures stable elicitation across heterogeneous models\. It iteratively refines the risk factor state through gradient\-free optimization guided by trajectory features\. Experiments on six representative VLA models show that RedVLA uncovers diverse unsafe behaviors and achieves the ASR up to 95\.5\\% within 10 optimization iterations\. To mitigate these risks, we further propose SimpleVLA\-Guard, a lightweight safety guard built from RedVLA\-generated data\. Our assets and code are available at https://anonymous\.4open\.science/r/redvla\.

## Dual\-Pathway Circuits of Object Hallucination in Vision\-Language Models

**Authors:** Jiaxin Liu; Ding Zhong; Yue Wang; Zhidong Yang; Zhaolu Kang; Guangyuan Dong; Qishi Zhan; Pengcheng Fang; Aofan Liu

**ID:** 154151 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FrVqkZPNVv>) | [PDF](<https://openreview.net/pdf?id=FrVqkZPNVv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154151>)

Vision\-language models \(VLMs\) have demonstrated remarkable capabilities in bridging visual perception and natural language understanding, enabling a wide range of multimodal reasoning tasks\.  However, they often produce object hallucinations, describing content absent from the input image, which limits their reliability and interpretability\. To address this limitation, we propose Dual\-Pathway Circuit Analysis, a framework that identifies and characterizes hallucination\-related circuits in VLMs for mechanistic understanding and causal probing\. We first apply activation patching across five architecturally diverse VLMs to identify a visual grounding pathway that supports correct predictions and a hallucination pathway that drives erroneous outputs\.  We then introduce Conditional Pathway Analysis \(CPA\) to characterize pathway\-level interactions, revealing that grounding components remain strongly redundant in both correct and hallucinating samples but undergo a consistent polarity flip, shifting from supporting the ground truth on correct samples to aligning with the hallucinated answer on erroneous ones\.  We further perform targeted suppression of hallucination\-pathway components, showing that scaling these components reduces object hallucination by up to 76\\% with minimal accuracy cost, and validate that the same circuit selectively transfers to relational but not attribute hallucination\. Evaluations on POPE\-adversarial and AMBER show that the identified circuits are consistent across architectures, support causal intervention, and transfer selectively across hallucination types\.

## CogArena: Benchmarking Multimodal Agents on Interactive Behavioral Experiments

**Authors:** Kianté Fernandez; Caitlin Chen; Jialu Zhou; Bartek Sadowski; Anthony C Miceli; Ian Krajbich

**ID:** 139836 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1hg4by8JA2>) | [PDF](<https://openreview.net/pdf?id=1hg4by8JA2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139836>)

Claims about the cognitive capabilities of large language models are typically tested by translating behavioral paradigms into natural language prompts, bypassing the visual interfaces and time\-pressured interactions through which human participants actually engage with experiments\. In parallel, recent demonstrations that AI agents can produce human\-like response data on live behavioral tasks raise concerns that online datasets used across the social and behavioral sciences are increasingly susceptible to contamination\. We introduce CogArena, a benchmark of interactive experimental paradigms drawn from the social and behavioral sciences\. Agents interact with the experiments through a standard browser, processing visual stimuli and responding under configurable deadlines\. We designed a three\-level scoring pipeline that evaluates task completion, performance accuracy normalized against literature\-derived human baselines, and alignment with canonical task\-specific signatures\. Across frontier multimodal agents, we find that agents complete the tasks, but their behavior diverges from humans on the signatures these paradigms reliably elicit in people\. CogArena provides the tasks, API, scoring pipeline, and a public leaderboard for ongoing community submissions\.

## Revealing the Gap in Human and VLM Scene Perception through Counterfactual Semantic Saliency

**Authors:** Ziqi Wen; Parsa Madinei; Miguel Eckstein

**ID:** 154819 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AifzSQYpMJ>) | [PDF](<https://openreview.net/pdf?id=AifzSQYpMJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154819>)

Evaluating whether large vision\-language models \(VLMs\) align with human perception for high\-level semantic scene comprehension remains a challenge\. Traditional white\-box interpretability methods are inapplicable to closed\-source architectures and passive metrics fail to isolate causal features\. We introduce Counterfactual Semantic Saliency \(CSS\)\. This black\-box, model\-agnostic framework quantifies the importance of objects by measuring the semantic shift induced by their causal ablation from a scene\. To evaluate AI\-human semantic alignment, we tested prominent VLMs against a human psychophysics baseline comprising 16,289 valid responses across 307 complex natural scenes and 1,306 high\-fidelity counterfactual variants\. Our analysis reveals a pervasive scene comprehension gap: models exhibit an overreliance \(relative to humans\) on large objects \(size bias\), objects at the center of the image \(center bias\), and high saliency objects\.  In contrast, models rely less on people in the scenes than our human participants to describe the images\.  A model’s size bias is a primary driver explaining variations in model\-human semantic divergence\.

## LAMP: Language\-Modulated Geometric Preservation for Multi\-Modal Object Re\-Identification

**Authors:** Shuying Li; Chao Su; Yongxiang Li; Peng Hu; Dezhong Peng; Yuan Sun

**ID:** 151836 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XYqPOytEb5>) | [PDF](<https://openreview.net/pdf?id=XYqPOytEb5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151836>)

Multi\-modal object Re\-Identification \(ReID\) aims to achieve robust all\-weather perception by leveraging complementary information across heterogeneous modalities\. However, existing methods still suffer from limitations in both feature fusion and feature alignment\. In terms of feature fusion, most approaches assume equal importance across modalities and do not explicitly account for the quality differences among modalities in dynamic environments\. As a result, the fused representations tend to be suboptimal and less discriminative in complex scenarios\. In terms of feature alignment, existing methods typically rely on point\-wise feature matching while ignoring relational structures among samples, which suppresses discriminative information and introduces cross\-modal inconsistencies\. To address these limitations, we propose LAMP, a unified framework that rethinks multi\-modal interaction through language\-modulated control and geometry\-consistent alignment\. We first adopt a Semantic\-Assisted Feature Encoder \(SAFE\), which incorporates textual semantics into visual features to enhance local discriminative cues and provide more informative representations for subsequent processing\. Building upon this, the Language\-Modulated Dynamic Routing \(LMDR\) module generates modality\-aware gating signals prior to feature fusion, enabling the adaptive adjustment of modality weights under challenging conditions\. Furthermore, to address cross\-modal inconsistencies, we introduce a Fused Geometric Prototype Alignment \(FGPA\) objective based on Fused Gromov\-Wasserstein \(FGW\) optimal transport\. Instead of enforcing strict point\-wise alignment, FGPA establishes cross\-modal consensus at the identity\-level relational geometry, thereby preserving discriminative structures while mitigating inconsistencies across modalities\. LMDR improves the stability of multi\-modal fusion, while FGPA enhances structural consistency in cross\-modal alignment\. Together, they improve the discriminative capability of the model\. Extensive experiments on three multi\-modal object ReID benchmarks demonstrate the effectiveness of our method\.

## Correction Space Steering for Hallucination Mitigation in Large Vision\-Language Models

**Authors:** Songbo Yang; Shuliang Liu; Sihang Jia; Xuming Hu

**ID:** 150994 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=diwoFVUWNi>) | [PDF](<https://openreview.net/pdf?id=diwoFVUWNi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150994>)

Large Vision\-Language Models \(LVLMs\) are prone to hallucinations, producing responses that are inconsistent with visual inputs\. While inference\-time activation steering provides a lightweight solution without retraining, existing methods are either limited by coarse global steering vectors or rely on unconstrained full\-dimensional vector prediction, which can produce unreliable vector for unseen hallucination patterns\. In this paper, we propose \\textbf\{Correction Space Steering\} \(CSS\), an robust activation steering framework that predicts correction coordinates in a learned low\-dimensional correction space\. We first conduct an empirical analysis of hallucination\-related activation differences and find that they are predictive of hallucination types, form type\-aware geometric structures, and exhibit low effective ranks in most layers\. We further provide a theoretical analysis showing that these activation differences can be approximated by a low\-dimensional subspace\. Based on this insight, CSS learns a low\-dimensional correction space from activation differences and trains an online predictor to infer input\-specific correction coordinates from inference\-time hidden states\. The resulting correction vectors are then reconstructed within the correction space and applied to steering activations for hallucination mitigation\. Experiments on standard hallucination benchmarks show that CSS effectively reduces hallucinations without retraining LVLMs and outperforms existing inference\-time mitigation methods\.

## Denoising\-Time Heterogeneity in VLA Action Generation: A Controlled Study via Step\-Wise Expert

**Authors:** Baolong Gao; Yuhan Dong; Xudong Zhang; Yikai Wang

**ID:** 151512 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a64w6jVtnu>) | [PDF](<https://openreview.net/pdf?id=a64w6jVtnu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151512>)

Denoising\-based Vision\-Language\-Action \(VLA\) policies are often parameterized by a single denoiser shared across denoising time\. This paper shows that expert usefulness in VLA action generation can vary systematically across denoising phases, and that this variation can be exposed through controlled step\-wise expert aggregation\. We mix two full action experts at the velocity\-field level with a fixed smooth schedule, enabling schedule\-only interventions that keep expert capacity and total mixing mass matched while changing when each expert is emphasized\. The empirical evidence is organized as a matched chain: semantically distinct expert pairs test denoising\-phase assignment through forward versus reversed schedules, while an anchor\-free isomorphic\-expert control tests schedule sensitivity without manually designed expert semantics\. Experiments on both LIBERO and CALVIN show the same directionality phenomenon: aligned schedules outperform their time\-reversed counterparts under matched strength, indicating that when each expert is emphasized matters for action denoising\. We complement these findings with a squared\-error risk analysis showing that denoising\-time variation in expert advantage implies a time\-dependent optimal mixture, together with a schedule\-weighted objective note explaining why copied experts can still functionally differentiate under non\-constant schedules\.

