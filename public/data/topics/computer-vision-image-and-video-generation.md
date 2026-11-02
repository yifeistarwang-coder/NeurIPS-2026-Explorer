# Computer Vision / Image and Video Generation

计算机视觉 / 图像与视频生成

307 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## CuBic: Curvature\-Driven Dynamic Inference Caching for Fast, High\-Fidelity Flow Matching

**Authors:** Yuyang Chen; Linqian Zeng; Yijin Zhou; Hengjie Li; Jidong Zhai

**ID:** 149614 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ome95BvF3y>) | [PDF](<https://openreview.net/pdf?id=ome95BvF3y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149614>)

Flow Matching \(FM\) has emerged as the dominant paradigm for state\-of\-the\-art image and video generation, yet its reliance on full attention over lengthy sequences incurs significant latency\. While existing caching methods reduce redundant computations, they yield suboptimal performance, fundamentally constrained by inflexible spatial granularity and empirical, model\-specific heuristics\.  To bridge this gap, we ground the caching mechanism in the geometric properties of the FM velocity field\. We theoretically establish that the \\textbf\{curvature\} inherently dictates the coupling between trajectory fluctuation and computational requirements, thereby providing a rigorous metric to quantify caching staleness loss and automatically derive adaptive granularity and optimal update intervals\.  Translating this theoretical insight into practical acceleration, we present CuBic, a train\-free caching framework\. It bypasses expensive curvature computations via a zero\-overhead proxy signal that dynamically guides spatial partitioning and budget\-constrained update scheduling\. At the system level, a sparse forward engine translates these optimal policies into efficient runtime, ensuring that theoretical guarantees directly translate into actual FLOP savings and linear speedup\. Being model\-agnostic and virtually hyperparameter\-free, CuBic consistently outperforms state\-of\-the\-art caching baselines in quality at customizable acceleration ratios \(averaging 2\.5$\\times$\) across Wan2\.1, Flux\.1, and FireRed\-Image\-Edit\.

## Identifying and Mitigating Diversity Collapse in Zero\-Shot Personalization with I2I Editing Models

**Authors:** Uichan Lee; Jongeon Baek; Sangheum Hwang

**ID:** 149053 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tDe4M34lN8>) | [PDF](<https://openreview.net/pdf?id=tDe4M34lN8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149053>)

Reference\-conditioned image\-to\-image \(I2I\) editing models provide a promising zero\-shot approach to personalized image generation by jointly conditioning on a reference image and a text prompt\. We show that recent I2I editing models, including FLUX\.1 Kontext and FLUX\.2, achieve strong subject identity preservation and prompt alignment, but exhibit seed\-wise diversity collapse: under the same reference image and prompt, different random seeds often produce highly similar outputs\. We further find that this collapse is associated with over\-alignment of latent\-token trajectories during denoising\. Based on this observation, we introduce Selective Hidden Perturbation \(SHiP\), a training\-free inference\-time intervention that perturbs only the attention\-output representations of latent tokens during early denoising while keeping reference\-image and text tokens unchanged\. Across diverse subjects and prompts, SHiP improves seed\-wise diversity on both FLUX\.1 Kontext and FLUX\.2 while largely preserving identity and prompt fidelity\. On FLUX\.1 Kontext, SHiP increases Vendi Score from 1\.546 to 2\.066 and LPIPS from 0\.475 to 0\.621, with only minor decreases in GPT\-ID and GPT\-Text\. Code is available at https://anonymous\.4open\.science/r/i2i\-personalization\-diversity\-0260/\.

## EntityBench: Towards Entity\-Consistent Long\-Range Multi\-Shot Video Generation

**Authors:** Ruozhen He; Meng Wei; Ziyan Yang; Vicente Ordonez

**ID:** 153267 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MXMtuuTopS>) | [PDF](<https://openreview.net/pdf?id=MXMtuuTopS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153267>)

_Abstract unavailable from the accessible public sources._

## CollabVR: Collaborative Video Reasoning with Vision\-Language and Video Generation Models

**Authors:** Joowon Kim; Seungho Shin; Joonhyung Park; Eunho Yang

**ID:** 149957 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lv4U2Eez13>) | [PDF](<https://openreview.net/pdf?id=lv4U2Eez13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149957>)

_Abstract unavailable from the accessible public sources._

## Importance\-Aware OBS Pruning for Diffusion Models

**Authors:** Ba\-Thinh Lam; Srijan Das; Hieu Minh Le

**ID:** 152437 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T8T0WvMWpg>) | [PDF](<https://openreview.net/pdf?id=T8T0WvMWpg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152437>)

We propose importance\-aware pruning for diffusion models, a training\-free framework that prioritizes preserving parameters critical to semantically salient image regions\. To do so, we incorporate spatial importance maps\- derived from conditioning signals or model attention\- into the pruning objective\. This produces parameter rankings aligned with perceptual relevance rather than uniform reconstruction error\. On MS\-COCO dataset, our proposed approach consistently retains subject fidelity and structural correctness at high compression ratios where conventional pruning causes visible degradation\. These results demonstrate that content\-aware objectives are key to perceptually faithful compression of generative models\.

## Where, What, Why, and Importance: Structured Defect Grounding for Text\-to\-Image Feedback

**Authors:** Huaisong Zhang; Hao Yu; Yuxuan Zhang; Jiahe Wang; Xinrui Chen; Haoxiang Cao; Feng Lu; Wendong Zhang; Changqian Yu; Chun Yuan

**ID:** 153460 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L8plGNGlQq>) | [PDF](<https://openreview.net/pdf?id=L8plGNGlQq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153460>)

Despite generating increasingly photorealistic images, text\-to\-image \(T2I\) models still exhibit localized, subtle, and structurally complex failures\. Diagnosing these failures requires instance\-level feedback that answers \*where\* a defect occurs, \*what\* type it is, \*why\* it is defective, and its \*importance\* to overall image quality\. While recent dense\-feedback methods move beyond scalar supervision, their heatmap\-centric representations still formulate diagnosis as pixel\-field regression, making it difficult to localize variable\-cardinality defects and bind semantic reasons to individual failures\. To address this representation bottleneck, we propose \*\*Structured Defect Grounding \(SDG\)\*\*, which casts T2I diagnosis as structured set prediction by modeling each defect as a \*\(location, type, reason, importance\)\* tuple\. To make this formulation trainable and measurable, we introduce \*\*SDG\-30K\*\*, a 30K\-image dataset with box\-grounded annotations across four modern T2I generators, together with a dedicated evaluation protocol, \*\*SDG\-Eval\*\*\. Building on this structured representation, we further present a diagnosis\-to\-alignment framework in which a Vision\-Language Model \(VLM\) serves as the SDG detector, and \*\*BoxFlow\-GRPO\*\* converts predicted defect sets into box\-derived, importance\-weighted spatial rewards for diffusion model alignment\. Extensive experiments show that our SDG detector outperforms leading proprietary VLMs on structured defect grounding, while SDG\-guided rewards consistently improve T2I alignment and support localized image refinement\. These results establish SDG as a unified, instance\-level interface for diagnosing, evaluating, and enhancing modern generative models\.

## GMO\-E²DIT: Grounded Multi\-Operation Editing for E\-Commerce Images

**Authors:** Zipeng Guo; Xiaoan Liu; Lichen Ma; Cheng Wang; Yu He; Xiaolong Fu; Jingling Fu; Xinyuan Shan; Shaojie Guo; Luohang Liu; Junshi Huang; Yan Li

**ID:** 152097 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VXvQ42upd6>) | [PDF](<https://openreview.net/pdf?id=VXvQ42upd6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152097>)

_Abstract unavailable from the accessible public sources._

## T3\-S2S: Training\-free Triplet Tuning for Sketch to Scene Generation

**Authors:** Zhenhong Sun; Yifu Wang; Yonhon Ng; Yongzhi Xu; Daoyi Dong; Hongdong Li; Pan Ji

**ID:** 156794 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lyn2BgKQ8F>) | [PDF](<https://openreview.net/pdf?id=lyn2BgKQ8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156794>)

Scene generation is crucial to many computer graphics applications\. Recent advances in generative AI have streamlined sketch\-to\-image workflows, easing the workload for artists and designers in creating scene concept art\. However, these methods often struggle with complex scenes with multiple detailed objects, sometimes missing small or uncommon instances\. In this paper, we propose a Training\-free Triplet Tuning for Sketch\-to\-Scene \(T
\-S2S\) generation after reviewing the entire cross\-attention mechanism\. This scheme revitalizes the existing ControlNet model, enabling effective handling of multi\-instance generations, involving prompt balance, characteristics prominence, and dense tuning\. Specifically, this approach enhances keyword representation via the prompt balance module, reducing the risk of missing critical instances\. It also includes a characteristics prominence module that highlights TopK indices in each channel, ensuring essential features are better represented based on token sketches\. Additionally, it employs dense tuning to refine contour details in the attention map, compensating for instance\-related regions\. Experiments validate that our triplet tuning approach substantially improves the performance of existing sketch\-to\-image models\. It consistently generates detailed, multi\-instance 2D images, closely adhering to the input prompts and enhancing visual quality in complex multi\-instance scenes\.

## RefineTok: Scale\-Wise Tokenization for Progressive Visual Refinement

**Authors:** Yitian Zhang; Long Mai; Yizhou Wang; Yun Fu

**ID:** 153374 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Lqj3ggQn8V>) | [PDF](<https://openreview.net/pdf?id=Lqj3ggQn8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153374>)

Image tokenization aims to compress visual signals into latent codes that remain effective for reconstruction and generation\.  Driven by the multi\-scale nature of images, organizing latent along a coarse\-to\-fine refinement process emerges as a promising direction for visual tokenization\.  Existing scale\-wise tokenizers often introduce this structure through token ordering or latent prefixes, but each target scale is typically decoded directly from its prefix, making different prefixes behave like separate reconstruction codes\.  This can lead to redundant encoding of global structure across scales and limits the effectiveness of compact token budgets\. We propose RefineTok, a scale\-wise continuous tokenizer that makes decoding itself progressive\.  RefineTok carries a visual state across scales and uses each latent prefix to refine the previous state into the next scale, turning scale\-wise latents into incremental refinement signals rather than independent reconstruction codes\.  This design yields a compact and structured latent interface for both reconstruction and downstream generation\.  Together with prefix\-level training, a coarse\-centric scale trajectory, and a semantic anchor, RefineTok achieves strong reconstruction fidelity among scale\-wise tokenizers and competitive class\-conditional generation on ImageNet\-1K under compact latent budgets\. Meanwhile, it preserves a progressive scale\-wise interface that single\-scale tokenizers do not provide\.

## RoPEMover: Depth\-Aware Object Relocation via Positional Embeddings

**Authors:** Ipek Oztas; Duygu Ceylan; Aybars B Aksoy; Aysegul Dundar

**ID:** 154176 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FhXYTQAvpV>) | [PDF](<https://openreview.net/pdf?id=FhXYTQAvpV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154176>)

Moving an object in a single image requires geometry\-consistent spatial rearrangement, including handling occlusions, revealing previously unseen regions, and maintaining coherent shadows and reflections\. Existing approaches are not well suited to this setting and often fail to preserve such scene\-level consistency\. We address this problem by introducing a geometry\-aware object motion method that operates directly on the internal representations of diffusion transformers\. Our key insight is that rotary positional embeddings \(RoPE\) define a structured spatial field that can be explicitly manipulated to induce controlled motion\. We extend 2D RoPE into a depth\-aware formulation that encodes 3D spatial structure, enabling consistent object displacement and scene\-aware updates\. Our model is trained using synthetic data combined with a small set of real images via parameter\-efficient fine\-tuning\. Despite minimal real supervision, it preserves object identity under large spatial displacements, generates plausible content in newly revealed regions, and consistently updates scene\-dependent effects such as shadows and illumination\. Experimental results demonstrate the superiority of our method\.

## FiRe: Fine\-grained Multimodal Reasoning for Enhanced Image Generation

**Authors:** Yongjin Kim; Yoonjin Oh; Ye Rin Kim; Hyomin Kim; Jeeyoung Yun; Yu\-Jung Heo; Min\-Jun Kim; Sungwoong Kim

**ID:** 152686 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RBlcBaykle>) | [PDF](<https://openreview.net/pdf?id=RBlcBaykle>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152686>)

With the rapid progress of Multimodal Large Language Models \(MLLMs\), unified MLLMs that jointly perform image understanding and generation have advanced significantly\. However, despite the inherent reasoning capabilities of unified MLLMs for self\-reflection and self\-refinement, their use in text\-to\-image generation remains largely underexplored\. Meanwhile, existing multimodal reasoning–based image generation methods mostly rely on prompt augmentation or holistic image–text alignment judgments, without fine\-grained reflection and refinement of detailed prompt attributes, leading to limited fine\-grained control\. To address this limitation, we propose FiRe, a Fine\-grained Multimodal Reasoning method for enhanced image generation by MLLM\. In specific, FiRe performs a fine\-grained multi\-step reasoning by first decomposing the prompt into key visual requirements and then self\-judging their satisfaction in the generated image, followed by localized refinement according to self\-generated precise feedback\. In addition, to further strengthen the MLLM's multimodal reasoning ability, we introduce FiRe\-GRPO, a reinforcement learning method tailored to FiRe\. Since standard Group Relative Policy Optimization \(GRPO\) suffers from sparse, outcome\-based rewards in multi\-step reasoning, we formulate our reasoning process as a step\-level decision\-making problem, design step\-specific rewards, and compute step\-level advantages for granular credit assignment within GRPO\. Extensive experiments demonstrate that FiRe consistently outperforms competitive text\-to\-image baselines, including existing reasoning\-based methods, with particularly substantial gains on compositional text\-to\-image benchmarks\.

## TaxaAdapter: Scaling Fine\-grained Species Image Generation To the Tree of Life

**Authors:** Mridul Khurana; Amin Karimi Monsefi; Justin Lee; Medha Sawhney; David Carlyn; Julia Chae; Jianyang Gu; Rajiv Ramnath; Sara Beery; Wei\-Lun \(Harry\) Chao; Anuj Karpatne; Cheng Zhang

**ID:** 151638 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z6V0C7ASfq>) | [PDF](<https://openreview.net/pdf?id=Z6V0C7ASfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151638>)

Accurately generating images across the Tree of Life is difficult: there are over 10M distinct species on Earth, many of which differ only by subtle visual traits\. Despite the remarkable progress in text\-to\-image synthesis, existing models often fail to capture the fine\-grained visual cues that define species identity, even when their outputs appear photo\-realistic\. To this end, we propose TaxaAdapter, a simple and lightweight adapter that incorporates the taxonomic embeddings of Vision Taxonomy Models \(VTMs\) such as BioCLIP to perform scalable fine\-grained species generation over the entire Tree of Life\. TaxaAdapter injects VTM embeddings using taxonomy\-text dual conditioning into a frozen text\-to\-image diffusion model, improving species\-level fidelity while preserving flexible text control over attributes such as pose, style, and background\. Extensive experiments demonstrate that TaxaAdapter consistently improves morphology fidelity and species\-identity accuracy over strong baselines\. To better evaluate these improvements, we also introduce a multimodal Large Language Model\-based metric that summarizes trait\-level descriptions from generated and real images, providing a more interpretable measure of morphological consistency\. Beyond showing improvements over standard benchmarking experiments, we observe that TaxaAdapter exhibits strong generalization capabilities in open\-world settings, enabling species synthesis in challenging regimes such as few\-shot species with only a handful of training images and even species unseen during training\. Overall, our results highlight that VTMs are a key ingredient for scalable, fine\-grained species generation\.

## AdaState: Self\-Evolving Anchors for Streaming Video Generation

**Authors:** Yusuf Dalva; Pinar Yanardag

**ID:** 150868 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=elLf1P8oAQ>) | [PDF](<https://openreview.net/pdf?id=elLf1P8oAQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150868>)

Autoregressive video diffusion models generate streaming video by producing frames sequentially, conditioning each chunk on previously generated content\. These models are structurally anchored to the first frame: its key\-value representation occupies a privileged position in the attention cache and serves as the primary scene reference throughout generation\. As the cleanest and most error\-free position in the cache, this anchor draws disproportionate attention, suppressing video dynamics, and locking scene composition to the initial viewpoint even as the scene naturally evolves\. The result is a temporally shallow video in which motion, camera movement, and scene progression are dampened in favor of static consistency\. To address this, we replace the static anchor with an adaptive state, a hidden latent that the model denoises alongside content at every chunk but never generates\. Rather than referencing a frozen first frame, the model generates its own scene anchor at each step by attending to both the previous state and the current content, producing a reference that evolves with the generated content\. Unlike standard video generation, which encodes an absolute notion of time, our formulation treats time as relative: every generation step sees the same positional structure regardless of how far generation has progressed, and the state transition is identical at every chunk\. Together, these properties introduce a recurrence into the generation process, where denoising serves as the transition function, and the KV cache serves as the carrier, requiring no external module\. Experiments demonstrate that the adaptive state substantially improves video dynamics, enabling richer motion and natural scene progression within generated videos\.

## RAVEL: Rare Concept Generation and Editing via Graph\-driven Relational Guidance

**Authors:** Kavana Venkatesh; Yusuf Dalva; Ismini Lourentzou; Pinar Yanardag

**ID:** 150127 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kU5GAMEqa5>) | [PDF](<https://openreview.net/pdf?id=kU5GAMEqa5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150127>)

Despite rapid advances in text\-to\-image \(T2I\) generation, current models often struggle with rare, compositional, and culturally grounded concepts where training data is sparse and visual priors are weak or absent\. Increasing model capacity or prompt detail alone does not consistently resolve these challenges, particularly in long\-tail settings where attribute grounding remains unstable due to attention skew, semantic collapse, and needle\-in\-a\-haystack retrieval dynamics\. We introduce RAVEL, a training\-free framework that improves rare concept generation, context\-driven image editing, and self\-correction by integrating graph\-based retrieval\-augmented generation \(RAG\) into T2I pipelines\. Unlike prior RAG and LLM\-enhanced approaches that rely on visual exemplars, static captions, or implicit model knowledge, RAVEL leverages structured knowledge graphs to retrieve targeted compositional, symbolic, and relational context, enabling more precise grounding even in the absence of visual priors\. To further refine generation quality, we propose SRD, a self\-correction module that iteratively updates prompts using multi\-aspect alignment feedback, improving attribute accuracy, narrative coherence, and semantic fidelity\. Our framework is model\-agnostic and is compatible with leading diffusion and autoregressive models, including Stable Diffusion XL, Flux, DALL\-E 3, GLM\-Image, and Janus\-Pro\. We conduct extensive evaluations across three newly proposed benchmarks: MythoBench, Rare\-Concept\-1K, and NovelBench, and show consistent improvements over SOTA baselines across perceptual, alignment, and LLM\-as\-a\-Judge metrics, while also demonstrating stable and interpretable refinement trajectories for rare concepts across diverse model families\. These results position RAVEL as a simple and robust approach for controllable and interpretable T2I generation in long\-tail domains\. Our code is available at: https://anonymous\.4open\.science/r/ravel\-54E5/

## Accelerating Rectified Flow Models  via Trajectory\-Aware Caching

**Authors:** Xiao Liu; Kai Liu; Naiyang Guan; Hongliang Lu; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 151611 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZFDg4T5AAg>) | [PDF](<https://openreview.net/pdf?id=ZFDg4T5AAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151611>)

Diffusion and rectified flow \(RF\) models generate high\-fidelity images and videos, but their iterative velocity\-field evaluations are computationally expensive\. Existing caching methods accelerate sampling by skipping timesteps, yet their coarse approximations introduce accumulated errors over long skip intervals and degrade quality under aggressive acceleration\. We propose \\textbf\{TACache \(Trajectory\-Aware Cache\)\}, a training\-free acceleration framework following a \\textbf\{skip\-then\-compensate\} paradigm\. TACache performs an orthogonal decomposition of discrete velocity acceleration along the RF trajectory into parallel and orthogonal components, isolating the magnitude and directional sources of per\-step approximation error\. The framework operates in two stages: \\emph\{offline\}, cumulative variation thresholds on the magnitude and direction indicators yield the skipping schedule and bound how far each skipped interval may extend; \\emph\{online\}, at each skipped step the offline statistics are combined with the sample's historical orthogonal direction to reconstruct the skipped velocity without additional forward passes\. Experiments on BAGEL, FLUX\.1\-dev, and Wan2\.1\-1\.3B show that TACache achieves up to $4\.14\\times$ speedup on text\-to\-image generation and $2\.11\\times$ speedup on text\-to\-video generation, with consistent improvements over prior cache\-based methods on all reference\-based fidelity metrics\. Code will be released soon\.

## Mission Impossible: Diagnosing and Fixing Non\-Operative Instruction Following in Image Editing

**Authors:** Guoyizhe Wei; Feng Wang; Alan Yuille; Rama Chellappa

**ID:** 139144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iOwBRaRA9N>) | [PDF](<https://openreview.net/pdf?id=iOwBRaRA9N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139144>)

Instruction\-guided image editing models are mostly trained and evaluated on executable requests, yet many real user instructions are non\-operative for the given image\. Reliable editing therefore requires reasoning not only about how to edit, but also whether to edit and what to ignore\. We introduce \\bench\{\}, a large\-scale benchmark for non\-operative image editing, with 1\.1M instructions over 31K images across seven categories spanning symbolic, grounded, physical, and logical non\-executability, plus a 35K\-sample partial\-edit test set evaluating selective execution when one clause is feasible and another is not\. A 700\-sample internal audit confirms a 94\.9\\% true no\-op rate with $\\kappa=0\.87$\. Evaluating 13 systems reveals a clear action\-\-abstention dissociation: frontier editors achieve strong standard editing quality but still over\-edit more than 40\\% of no\-op samples\. Three complementary perceptual, feature\-level, and vision\-language metrics further surface distinct failure modes across architectures\. As a reference baseline, JUDGE\-THEN\-EDIT BAGEL—a feasibility\-aware BAGEL variant trained on a 150K mixture of full\-edit, partial\-edit, and no\-op data—reduces over\-edit rate from 41\.7\\% to 12\.6\\%\. Our results show that abstention is a distinct capability that current benchmarks fail to measure\.

## ORCA: Hunting Compositional Failures in Text\-to\-Image Diffusion

**Authors:** Arshia Hemmat; Amirhossein Vahidi; Amitis Shidani; Mohammad V Sanian; Hesam Asadollahzadeh; Aryan Y Parast; Mohammad Lotfollahi

**ID:** 154803 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ar6frZW38L>) | [PDF](<https://openreview.net/pdf?id=Ar6frZW38L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154803>)

Text\-to\-image diffusion models fail predictably on compositional prompts: attributes bind to the wrong objects, spatial relations invert, and multi\-object scenes lose count\. Recent architectures already augment CLIP with a T5 encoder precisely because CLIP's contrastive embedding loses compositional structure, yet these failures persist\. We argue the binding problem is therefore not one of missing information but of misaligned information: a text encoder preserves compositional structure, but in a representation space shaped by language modelling rather than vision, and the denoising objective does not directly reward aligning the two\. We show this correspondence can be supplied as an explicit training signal, that the relevant cross\-modal information is concentrated in a low\-rank subspace of self\-supervised visual features, and that supplying it can be folded into diffusion training as a single auxiliary loss\. Our method, ORCA, Orthogonal Residual Compositional Alignment, aligns the latent of a diffusion transformer with a low\-rank target derived from a frozen visual encoder, through a predictor whose orthogonal basis is parameterised by a learned residual between T5 and CLIP embeddings, which provides a prompt\-dependent signal for selecting the visual readout subspace\. We prove that the cross\-modal information recoverable at a given rank is bounded by the spectral mass of the visual encoder's covariance in the top components\. Across three diffusion\-transformer backbones, DiT\-B/2, DiT\-L/2, and U\-ViT\-L, ORCA improves FID and GenEval over both vanilla and REPA baselines at zero inference\-time cost; on DiT\-L/2 it reaches FID 16\.65 and GenEval 0\.291 at 200K steps, exceeding the strongest 400K baseline at half the training cost, with the largest gains concentrated on attribute binding, spatial relations, and multi\-object prompts\.

## HyperVAttention: Efficient Sparse Attention with Spatio\-Temporal Clustering for Video Diffusion

**Authors:** Dongyeun Lee; Amir Zandieh; Vahab Mirrokni; Junmo Kim; Insu Han

**ID:** 153122 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NlRG5IrLFS>) | [PDF](<https://openreview.net/pdf?id=NlRG5IrLFS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153122>)

Video Diffusion Transformers \(VDiTs\) have demonstrated significant capabilities in high\-fidelity video generation\. However, their ability to produce long\-duration videos is fundamentally constrained by the quadratic complexity of the self\-attention mechanism\. Recent clustering\-based sparse attention methods improve the quality\-speed trade\-off by grouping semantically similar tokens, but their practical efficiency remains limited by two bottlenecks: substantial clustering overhead and low CTA utilization caused by irregular cluster\-induced blocks\. We propose HyperVAttention \(HVA\), a training\-free sparse attention framework that addresses both bottlenecks jointly\. To reduce clustering overhead, we introduce 3D local\-window clustering, which exploits the spatio\-temporal locality of video tokens to restrict centroid search to fixed local neighborhoods, and implement it with a custom Triton kernel for efficient execution\. We further propose a hybrid clustering strategy that performs full clustering only at anchor steps and updates only subset tokens at intermediate steps, leveraging the temporal stability of cluster assignments across denoising steps\. To improve CTA utilization, we present hardware\-aware cluster merging that minimizes CTA\-aligned execution cost through parallel agglomerative merging, improving block density and approximation fidelity by utilizing idle tile capacity\. Together, these components reduce clustering overhead, avoid redundant updates, and better align sparse attention with the fixed tile structure of modern GPU kernels\. Experiments on Text\-to\-Video generation show that HVA establishes a new Pareto frontier for training\-free sparse attention in video diffusion, reducing end\-to\-end latency by up to $2\.13\\times$ while improving fidelity over existing training\-free sparse attention baselines\.

## TriTD: Tri\-Partite Trajectory–Distribution Distillation for Real\-Time Autoregressive Video Generation

**Authors:** Jia Li; Xurui Peng; Haowei Zhu; Tianyu Zhao; Jiexi Wang; Youwei Zheng; Yuxi Ren; Xinglong Wu; XING WANG; Hayden So

**ID:** 154734 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BQaVJhPUAg>) | [PDF](<https://openreview.net/pdf?id=BQaVJhPUAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154734>)

Autoregressive \(AR\) video diffusion has emerged as a leading paradigm for efficient video generation, yet its practical deployment remains bottlenecked by the trade\-off between generation quality and inference efficiency\. We attribute this bottleneck to three error sources in AR rollouts: the base model error, the train–inference distribution mismatch, and the upstream error propagation\. Building on this decomposition, we derive closed\-form upper bounds on the per\-step and cumulative errors, providing a principled mechanism for jointly optimizing generation quality and inference efficiency\. Guided by this analysis, we propose \*\*TriTD\*\*, a \*\*Tri\*\*\-Partite \*\*T\*\*rajectory–\*\*D\*\*istribution co\-optimized distillation framework with three complementary modules that each target a distinct error term in the bound\. First, for ODE initialization, we adopt a Next\-Node Trajectory Distillation \(NTD\) objective and prove a strictly tighter error bound than conventional consistency distillation, reducing the base model error at its source\. Second, we introduce Chunk\-Graded Noising \(CGN\), a monotonically non\-decreasing per\-chunk noising schedule that provably narrows the train–inference noise mismatch and removes redundant KV Cache updates, yielding substantial speedups at no quality cost\. Third, we propose Orthogonal\-Parallel DMD \(OP\-DMD\), a distribution\-matching loss that preserves the original DMD gradient direction while explicitly suppressing unsupervised off\-axis drift in the orthogonal subspace, improving both training stability and final generation quality\. Extensive experiments show that TriTD consistently surpasses state\-of\-the\-art baselines in visual quality while reaching a real\-time throughput of \*\*26\.8 FPS\*\* on a single H100 GPU, delivering a balanced quality\-efficiency solution for interactive streaming video generation\.

## Learning\-to\-Memorize: Dynamic Context Management for Long\-Horizon Autoregressive Video Generation

**Authors:** Haowei Zhu; Qijie Wang; Jia Li; XING WANG; Tianyu Zhao; Jiexi Wang; Xurui Peng; Xinglong Wu; Jun\-Hai Yong; Bin Wang

**ID:** 154562 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CfeDlcqmdj>) | [PDF](<https://openreview.net/pdf?id=CfeDlcqmdj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154562>)

Autoregressive video generation has achieved impressive results on short clips, yet generating long videos remains challenging due to error accumulation over extended horizons, where each predicted frame depends on potentially imperfect previous frames\. Existing approaches typically rely on static context management strategies, such as sliding\-window caches that discard early frames or fixed sink frames that permanently preserve initial content\. These designs either lose critical long\-range context or anchor generation to outdated information, which can lead to degraded fidelity, motion stagnation, and reduced diversity\. In this paper, we propose \\textbf\{Learning to Memorize \(L2M\)\}, a learned context memory management framework that dynamically retains, evicts, and evolves historical frames according to predicted importance\. The framework consists of an \\emph\{importance prediction router\} that estimates the relevance of each historical frame, \\emph\{degradation\-aware training\} that improves robustness to noisy or corrupted context, and a \\emph\{dynamic memory initialization and evolution\} mechanism that updates long\-term memory using exponential moving average \(EMA\) importance scores\. This allows high\-quality frames to replace stale anchors and enables memory to adapt naturally to scene evolution\. Trained with a teacher\-student distillation objective and sparsity regularization, L2M makes efficient use of a fixed KV\-cache budget while preserving the most informative contextual information\. Extensive experiments show that L2M achieves superior long\-term video generation performance over existing baselines, improving stability and visual fidelity, and establishing a new paradigm for learned memory management in long autoregressive video generation\.

## PCDFusion: Proposal\-Context\-Detail Bayesian Rendering for Infrared\-Visible Image Fusion

**Authors:** Rui Liu; Lin Gu; Hesong Li; Ying Fu

**ID:** 152664 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RJBEmXTRsP>) | [PDF](<https://openreview.net/pdf?id=RJBEmXTRsP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152664>)

Infrared\-visible image fusion \(IVIF\) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks\.  Visible and thermal infrared observations are physically complementary but unreliable in different ways\. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute\.  To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by reliability posteriors rather than direct modality mixing\.  In this paper, we propose Proposal\-Context\-Detail Fusion \(PCDFusion\), a visible\-anchored framework that implements this formulation through three rendering stages\.  PCDFusion preserves potentially useful thermal responses, updates exposure\-degraded visible regions, and renders reliable band\-limited infrared structures into the final luminance\.  Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination\.  To support reproducibility, the code will be publicly released upon acceptance\.

## Barycentric Guidance: Turning Foundation Image Editors into Continuous Affective Controllers

**Authors:** Harvey Mannering; Zhiwu Huang; Adam Prugel\-Bennett

**ID:** 153096 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Nx9IIc3xpv>) | [PDF](<https://openreview.net/pdf?id=Nx9IIc3xpv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153096>)

Emotions are expressed on a continuum and are naturally described in the valence\-arousal \(VA\) space\. Existing VA\-based image editors are typically training\-based and domain\-specific, limiting them to VA regions seen during training and making them brittle across datasets and domains\. Meanwhile, despite producing high\-quality edits, state\-of\-the\-art foundation image editors are not continuous affective controllers: non\-linear emotion representations in text encoders makes prompt interpolation poorly calibrated, so accurate and continuous VA control remains unreliable\. To fill this gap, we introduce Barycentric Guidance, a training\-free framework that turns pretrained foundation image editors into continuous affective controllers over VA, requiring no finetuning, extra data, or model changes\. Our method maps any target VA point to simplex\-based guidance weights, enabling VA controllability in three aspects: \(i\) accurate targeting of VA states, \(ii\) broad coverage across the VA plane, and \(iii\) continuous control\. Across three face datasets, we improve VA target accuracy by 25–29\\%, expand VA\-plane coverage by 28–50\\%, increase expression diversity by 29–49\\%, over the strongest baseline\. Unlike prior domain\-specific methods, our training\-free approach exploits the foundation model’s inherent versatility, enabling generalization beyond human faces to animals, artworks, and complex scenes within a single framework\. Code will be made publicly available\.

## Advancing Narrative Long Video Generation via Training\-Free Identity\-Aware Memory

**Authors:** Jinzhuo Liu; Jiangning Zhang; Wencan Jiang; Yabiao Wang; Dingkang Liang; Xue zhucun; Ran Yi; Yong Liu

**ID:** 152023 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W66Ni14uAk>) | [PDF](<https://openreview.net/pdf?id=W66Ni14uAk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152023>)

Autoregressive video generation has improved rapidly in visual fidelity and interactivity, but it still suffers from long\-term inconsistency and memory degradation\. Most existing solutions either compress historical frames using predefined strategies or retrieve keyframes based on coarse implicit attention signals, both of which fail to handle evolving prompts with shifting entity references, leading to identity drift, character duplication, and attribute loss\. To address this, we propose IAMFlow, a training\-free identity\-aware memory framework that explicitly models and tracks persistent entity identities, enabling consistent generation across prompt transitions\. Specifically, an LLM extracts entities with visual attributes from each prompt and assigns unique global IDs for identity\-aware memory, while a VLM asynchronously verifies and refines attributes from rendered frames, enabling explicit entity tracking in place of implicit similarity\-based matching\. To keep the proposed framework computationally practical, we design a systematic inference acceleration pipeline, including asynchronous visual verification, adaptive prompt transition, and model quantization, which achieves faster generation than existing baselines\. Furthermore, we introduce NarraStream\-Bench, a benchmark for narrative streaming video generation that features 324 multi\-prompt scripts spanning six dimensions and a three\-dimensional evaluation protocol that integrates both traditional metrics and multimodal large language model\-based assessments\. Extensive experiments show that IAMFlow, despite being training\-free, achieves the best overall performance on NarraStream\-Bench, outperforming the strongest baseline by 2\.56 points, while achieving a 1\.39$\\times$ speedup over the most efficient baseline in the 60\-second multi\-prompt setting\.

## Which Tokens to Merge? Diffusion Dynamics for Efficient Image Generation

**Authors:** SeungJu Cha; Ye\-Chan Kim; HyunGee Kim; Sungho Koh; Dong\-Jin Kim

**ID:** 151199 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cDWOMIJrbJ>) | [PDF](<https://openreview.net/pdf?id=cDWOMIJrbJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151199>)

Token merging has emerged as an effective training\-free strategy for accelerating diffusion models by reducing redundant token  computation while minimizing generation degradation\. A key challenge is determining which tokens can be safely merged and  which should be preserved for subsequent computation\. Existing method addresses this by preserving prompt\-aligned foreground regions, thereby protecting semantically relevant structures\. However, this text\-relevance criterion overlooks background objects, local details that are not explicitly mentioned in the prompt, leading to degraded structural coherence\. In this work, we propose Dynamics\-aware Token Merging \(DaTMe\), a training\-free framework that grounds token merging in the underlying diffusion dynamics\. Our key insight is that token importance should reflect whether a token remains unresolved during denoising and whether it carries structural information\. To this end, DaTMe constructs a dynamics\-aware importance map from the Tweedie denoised estimate\. The map combines a temporal signal, measuring inter\-step changes in the predicted clean image, with a structural signal, capturing local high\-frequency content such as boundaries and fine details\. Using this map, DaTMe adaptively assigns tokens into merging roles under a given compression ratio: important tokens are preserved as anchors, while tokens that are both temporally stabilized and structurally homogeneous are selected as safe merge candidates\. Experiments on PixArt\-$\\alpha$ and FLUX demonstrate that DaTMe maintains visual fidelity across the entire image, highlighting diffusion dynamics as an effective token\-level merging decision in efficient generation\.

## How Diffusion Models Memorize

**Authors:** Juyeop Kim; Songkuk Kim; Jong\-Seok Lee

**ID:** 155824 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2b5I5iwFrW>) | [PDF](<https://openreview.net/pdf?id=2b5I5iwFrW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155824>)

Despite their success in image generation, diffusion models can memorize training data, raising serious privacy and copyright concerns\. Although prior work has identified empirical factors associated with memorization, such as text guidance, prompt specificity, and duplicated training examples, the mechanism by which memorization is triggered and propagated during denoising remains unclear\. In this paper, we provide a theoretical explanation of how memorization occurs in text\-to\-image diffusion models\. We show that conditional overfitting causes the conditional posterior mean to collapse to the memorized training latent, while the unconditional posterior remains close to the zero\-centered data mean at the first denoising step\. As a result, classifier\-free guidance overestimates the clean prediction and injects an amplified memorized signal into the reverse trajectory\. We further show that this signal propagates across timesteps because each guided latent is fed back into the denoising network, allowing the conditional branch to indirectly shift the unconditional branch\. To characterize this process, we introduce the posterior lag, the discrepancy between conditional and unconditional posterior means\. For normal prompts, this lag decreases as the two posteriors synchronize during denoising\. For memorized prompts, the conditional posterior commits early to a specific training latent, while the unconditional posterior catches up only later, producing a distinctive rise\-and\-fall lag pattern\. Our analysis provides a mechanism\-level explanation of memorization and clarifies why text guidance and early denoising steps play a central role in memorized generation\.

## Diff\-Instruct with Diffused Reward: Towards Principled One\-step Generator RL

**Authors:** Junyi Wu; Weijian Luo; Haoyang Zheng; Ruizhe Zhang; Guang Lin

**ID:** 153078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OAfN5ujM04>) | [PDF](<https://openreview.net/pdf?id=OAfN5ujM04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153078>)

Recent advances in one\-step text\-to\-image generation have enabled real\-time synthesis with remarkable efficiency and quality\. Previous reinforcement learning methods for one\-step generators combines the image space reward optimization and the diffusion noisy space distribution matching\. This paradigm brings challenges due to a mismatch between terminal reward optimization and the underlying generative dynamics\. As a result, optimization tends to exploit stochastic degrees of freedom, often improving reward at the expense of image fidelity\. To address this issue, we propose \\textbf\{Diff\-Instruct with Diffused Reward\} \(\\textsc\{Didr\}\), a data\-free trajectory\-level alignment framework derived from Integral KL minimization\. \\textsc\{Didr\} propagates the RLHF\-optimal reward\-tilted clean\-image distribution across all noise levels along the diffusion trajectory\. We show that this objective admits the same minimizer as clean\-image RLHF, while naturally inducing \\textbf\{the Diffused Reward Score\} \(DRS\), which acts as a reward\-driven correction to the reference score function\. To make this practical, we further introduce \\textbf\{the Diffused Reward Proxy\} \(DRP\), an efficient estimator of DRS based on differentiable short\-step denoising\. Extensive experiments demonstrate that \\textsc\{Didr\} consistently Pareto\-dominates existing one\-step SDXL baselines\. Moreover, when transferred to a 6B DiT backbone \(\\textsc\{Z\-Image\}\), \\textsc\{Didr\} surpasses its 50\-step teacher in preference alignment while requiring only a single generation step\.

## Few\-Shot Visual Concept Extraction for Steering Diffusion Transformers

**Authors:** Nabyl Quignon; Antitza Dantcheva

**ID:** 150793 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fMSQSo0vsU>) | [PDF](<https://openreview.net/pdf?id=fMSQSo0vsU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150793>)

Image steering aims to provide fine\-grained control over concepts in generated images, enabling targeted and continuous manipulation without broadly altering the generation process\. Recent steering methods for diffusion models primarily focus on the text\-conditioning space or rely on costly auxiliary training\. Deviating from that, we here propose a novel steering approach that extracts visual concept directions directly from the image\-side activations of Diffusion Transformers\. Specifically, we showcase few\-shot concept extraction in the activation space using a simple difference\-of\-means estimator over intermediate residuals\. We observe \(a\) scene\-level concepts such as lighting, weather, and style are distributed across image tokens, as well as \(b\) local concepts such as object colors, textures, materials, and facial attributes are concentrated in specific regions\. Towards controlling both concepts, we introduce a new unified training\-free framework that uses global difference\-of\-means for \(a\) distributed concepts and masked difference\-of\-means for \(b\) local concepts, preventing local signals from being diluted by global averaging\. Notably, using only a handful of positive and negative prompt pairs, our method identifies and extracts reusable concept directions that can be injected at inference for continuous steering\. Quantitatively, our method outperforms text\-encoder steering and training\-free activation\-editing baselines, as well as is competitive with specialized editing models\. Our results suggest that as concept directions can be applied at patch level, our method enables precise targeted and compositional steering, manipulating multiple concepts in the same image\.

## SPIRAL: Self\-Evolving Action\-Conditioned Video Generation via Reflective Planning Agents

**Authors:** Yu Yang; Yue Liao; Jianbiao Mei; Baisen Wang; Jiangning Zhang; Xiangtai Li; Liang Lv; Hanlin Chen; Yong Liu; Shuicheng Yan; Gim Hee Lee

**ID:** 154309 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eez8xYYlu3>) | [PDF](<https://openreview.net/pdf?id=Eez8xYYlu3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154309>)

Long\-horizon action\-conditioned video generation aims to synthesize temporally coherent videos that follow complex action instructions over extended horizons\. Existing single\-shot video generation models typically operate in an open\-loop manner, leading to incomplete action execution, hallucinated motions, and temporal drift\. To address this, we propose \*\*SPIRAL\*\*, a closed\-loop framework that performs sequential planning and iterative reflection for action\-conditioned long\-horizon video generation\. Specifically, a PlanAgent decomposes a high\-level goal into sub\-actions that condition video generation, while a CriticAgent evaluates intermediate video segments and provides corrective feedback for iterative refinement\. This closed\-loop design further supports self\-evolving, utilizing planning and verification signals for GRPO\-based post\-training to enhance the video generator's consistency and action quality over extended horizons\. Moreover, we introduce \*\*ActVideoGen\-Dataset\*\* and \*\*ActVideoGen\-Bench\*\* for training and evaluation\. Experiments across multiple TI2V backbones with self\-evolving show consistent gains on ActVideoGen\-Bench and VBench, demonstrating the effectiveness of SPIRAL\.

## UniDG: Universal Defect Generation via Defect\-Context Editing

**Authors:** Yuanting Fan; Jun Liu; Bin\-Bin Gao; Xiaochen Chen; Yuhuan Lin; Zhewei Dai; Jiawei Zhan; Chengjie Wang

**ID:** 154905 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A3soBL3Ciu>) | [PDF](<https://openreview.net/pdf?id=A3soBL3Ciu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154905>)

Generating realistic visual defects is crucial for alleviating the scarcity of abnormal samples in anomaly detection, yet existing methods often rely on category\-specific few\-shot adaptation and struggle to generalize across objects, defect types, and domains\. This limitation stems in part from the lack of paired defect editing data and the fine\-grained nature of defect appearance, where subtle variations in scale, texture, and morphology must be preserved while maintaining consistency with the target scene\. To address this challenge, we introduce UDG, a dataset of 300K normal\-abnormal\-mask\-caption quadruplets curated from diverse defect\-related scenarios, and present UniDG, a unified model for universal defect generation\. UniDG formulates defect synthesis as Defect\-Context Editing: it extracts reference defect context with adaptive cropping, organizes reference and target inputs in a structured diptych format, and fuses multimodal conditions through MM\-DiT attention\. We further develop a two\-stage training strategy: Diversity\-SFT learns diverse transferable defect priors from paired editing data, while Consistency\-RFT improves reference adherence, local realism, and defect\-category consistency\. Without per\-category fine\-tuning or using MVTec\-AD/VisA for training, UniDG outperforms prior few\-shot anomaly generation and image insertion/editing baselines in both synthesis quality and downstream single\- and multi\-class anomaly detection/localization\.

## Improving Flexible Image Tokenizers for Autoregressive Image Generation

**Authors:** Zixuan Fu; Lanqing Guo; Chong Wang; Binbin SONG; Ding Liu; Bihan Wen

**ID:** 149748 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=neJJASNqpr>) | [PDF](<https://openreview.net/pdf?id=neJJASNqpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149748>)

Flexible image tokenizers aim to represent an image using an ordered 1D variable\-length token sequence\.  This flexible tokenization is typically achieved through nested dropout, where a portion of trailing tokens is randomly truncated during training, and the image is reconstructed using the remaining preceding sequence\. However, this tail\-truncation strategy inherently concentrates the image information in the early tokens, limiting the effectiveness of downstream AutoRegressive \(AR\) image generation as the token length increases\. To overcome these limitations, we propose \\textbf\{ReTok\}, a flexible tokenizer with \\underline\{Re\}dundant \\underline\{Tok\}en Padding and Hierarchical Semantic Regularization, designed to fully exploit all tokens for enhanced latent modeling\. Specifically, we introduce \\textbf\{Redundant Token Padding\} to activate tail tokens more frequently, thereby alleviating information over\-concentration in early tokens\.  In addition, we apply \\textbf\{Hierarchical Semantic Regularization\} to align the decoding features of earlier tokens with those from a pre\-trained vision foundation model, while progressively reducing the regularization strength toward the tail to allow finer low\-level detail reconstruction\.  Extensive experiments demonstrate the effectiveness of ReTok: on ImageNet 256$\\times$256, our method achieves superior generation performance compared with both flexible and fixed\-length tokenizers\.

## Opening the Black Box of Classifier\-Free Guidance via Information Bottleneck

**Authors:** Jiayang Gao; Tianyi Zheng; Jiayang Zou; Fengxiang Yang; Luyao Fan; Lv Tang; Bo Li; Jia Wang

**ID:** 148587 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wfY4Srt4qX>) | [PDF](<https://openreview.net/pdf?id=wfY4Srt4qX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148587>)

Classifier\-free guidance \(CFG\) is a standard technique for improving conditional generation in diffusion models, yet its activation schedule is usually selected heuristically\. In practice, most existing CFG\-based methods rely on a pre\-defined activation policy throughout inference, while recent dynamic variants often depend on hand\-designed schedules without a principled theoretical explanation of when conditional information is most useful\.  In order to understand how the informational relevance between conditioning inputs and the score function evolves over the course of generation, we explore when guidance should be activated from an information\-theoretic perspective\. In this work, we formulate the diffusion trajectory as a time\-dependent information bottleneck and show that the effectiveness of conditional information is not uniform throughout sampling, but becomes significantly stronger after a critical stage characterized by a Fisher\-information balance condition\. Motivated by this insight, we propose a training\-free dynamic CFG strategy for inference\. Rather than prescribing a fixed schedule in advance, our method constructs a stochastic process from conditional and unconditional score statistics and activates guidance when the estimated guidance gain crosses a prescribed threshold\. This yields an adaptive activation rule that aligns condition injection with the underlying generation dynamics, while also recovering interval\-based guidance as a limiting special case\. Extensive experiments across diverse architectures and tasks, demonstrate that our method is effective, robust, and broadly applicable\. Beyond empirical improvements, our framework provides an interpretation of dynamic guidance methods and a principled foundation for inference\-time control in conditional diffusion models\.

## Stitched Value Model for Diffusion Alignment

**Authors:** Hyojun Go; Hyungjin Chung; Prune Truong; Goutam Bhat; Li Mi; Zhaochong An; Zixiang Zhao; Dominik Narnhofer; Serge Belongie; Federico Tombari; Konrad Schindler

**ID:** 149632 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=odBEybhkHQ>) | [PDF](<https://openreview.net/pdf?id=odBEybhkHQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149632>)

_Abstract unavailable from the accessible public sources._

## DriveWAM: Video Generative Priors Enable Scalable World\-Action Modeling for Autonomous Driving

**Authors:** Chen Shi; Jinrui Xu; Shaoshuai Shi; Kehua Sheng; Bo Zhang; Li Jiang

**ID:** 150338 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=irKRjaeIAV>) | [PDF](<https://openreview.net/pdf?id=irKRjaeIAV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150338>)

_Abstract unavailable from the accessible public sources._

## SEGA: Spectral\-Energy Guided Attention for Resolution Extrapolation in Diffusion Transformers

**Authors:** Javad Rajabi; Kimia Shaban; Koorosh Roohi; David Lindell; Babak Taati

**ID:** 153817 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IUujREirW0>) | [PDF](<https://openreview.net/pdf?id=IUujREirW0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153817>)

_Abstract unavailable from the accessible public sources._

## Diff\-Instruct with Diffused Reward: Towards Principled One\-step Generator RL

**Authors:** Junyi Wu; Weijian Luo; Haoyang Zheng; Ruizhe Zhang; Guang Lin

**ID:** 153078\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153078

[Paper](<https://openreview.net/forum?id=OAfN5ujM04>) | [PDF](<https://openreview.net/pdf?id=OAfN5ujM04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153078>)

Recent advances in one\-step text\-to\-image generation have enabled real\-time synthesis with remarkable efficiency and quality\. Previous reinforcement learning methods for one\-step generators combines the image space reward optimization and the diffusion noisy space distribution matching\. This paradigm brings challenges due to a mismatch between terminal reward optimization and the underlying generative dynamics\. As a result, optimization tends to exploit stochastic degrees of freedom, often improving reward at the expense of image fidelity\. To address this issue, we propose \\textbf\{Diff\-Instruct with Diffused Reward\} \(\\textsc\{Didr\}\), a data\-free trajectory\-level alignment framework derived from Integral KL minimization\. \\textsc\{Didr\} propagates the RLHF\-optimal reward\-tilted clean\-image distribution across all noise levels along the diffusion trajectory\. We show that this objective admits the same minimizer as clean\-image RLHF, while naturally inducing \\textbf\{the Diffused Reward Score\} \(DRS\), which acts as a reward\-driven correction to the reference score function\. To make this practical, we further introduce \\textbf\{the Diffused Reward Proxy\} \(DRP\), an efficient estimator of DRS based on differentiable short\-step denoising\. Extensive experiments demonstrate that \\textsc\{Didr\} consistently Pareto\-dominates existing one\-step SDXL baselines\. Moreover, when transferred to a 6B DiT backbone \(\\textsc\{Z\-Image\}\), \\textsc\{Didr\} surpasses its 50\-step teacher in preference alignment while requiring only a single generation step\.

## Few\-Shot Visual Concept Extraction for Steering Diffusion Transformers

**Authors:** Nabyl Quignon; Antitza Dantcheva

**ID:** 150793\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150793

[Paper](<https://openreview.net/forum?id=fMSQSo0vsU>) | [PDF](<https://openreview.net/pdf?id=fMSQSo0vsU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150793>)

Image steering aims to provide fine\-grained control over concepts in generated images, enabling targeted and continuous manipulation without broadly altering the generation process\. Recent steering methods for diffusion models primarily focus on the text\-conditioning space or rely on costly auxiliary training\. Deviating from that, we here propose a novel steering approach that extracts visual concept directions directly from the image\-side activations of Diffusion Transformers\. Specifically, we showcase few\-shot concept extraction in the activation space using a simple difference\-of\-means estimator over intermediate residuals\. We observe \(a\) scene\-level concepts such as lighting, weather, and style are distributed across image tokens, as well as \(b\) local concepts such as object colors, textures, materials, and facial attributes are concentrated in specific regions\. Towards controlling both concepts, we introduce a new unified training\-free framework that uses global difference\-of\-means for \(a\) distributed concepts and masked difference\-of\-means for \(b\) local concepts, preventing local signals from being diluted by global averaging\. Notably, using only a handful of positive and negative prompt pairs, our method identifies and extracts reusable concept directions that can be injected at inference for continuous steering\. Quantitatively, our method outperforms text\-encoder steering and training\-free activation\-editing baselines, as well as is competitive with specialized editing models\. Our results suggest that as concept directions can be applied at patch level, our method enables precise targeted and compositional steering, manipulating multiple concepts in the same image\.

## SPIRAL: Self\-Evolving Action\-Conditioned Video Generation via Reflective Planning Agents

**Authors:** Yu Yang; Yue Liao; Jianbiao Mei; Baisen Wang; Jiangning Zhang; Xiangtai Li; Liang Lv; Hanlin Chen; Yong Liu; Shuicheng Yan; Gim Hee Lee

**ID:** 154309\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154309

[Paper](<https://openreview.net/forum?id=Eez8xYYlu3>) | [PDF](<https://openreview.net/pdf?id=Eez8xYYlu3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154309>)

Long\-horizon action\-conditioned video generation aims to synthesize temporally coherent videos that follow complex action instructions over extended horizons\. Existing single\-shot video generation models typically operate in an open\-loop manner, leading to incomplete action execution, hallucinated motions, and temporal drift\. To address this, we propose \*\*SPIRAL\*\*, a closed\-loop framework that performs sequential planning and iterative reflection for action\-conditioned long\-horizon video generation\. Specifically, a PlanAgent decomposes a high\-level goal into sub\-actions that condition video generation, while a CriticAgent evaluates intermediate video segments and provides corrective feedback for iterative refinement\. This closed\-loop design further supports self\-evolving, utilizing planning and verification signals for GRPO\-based post\-training to enhance the video generator's consistency and action quality over extended horizons\. Moreover, we introduce \*\*ActVideoGen\-Dataset\*\* and \*\*ActVideoGen\-Bench\*\* for training and evaluation\. Experiments across multiple TI2V backbones with self\-evolving show consistent gains on ActVideoGen\-Bench and VBench, demonstrating the effectiveness of SPIRAL\.

## UniDG: Universal Defect Generation via Defect\-Context Editing

**Authors:** Yuanting Fan; Jun Liu; Bin\-Bin Gao; Xiaochen Chen; Yuhuan Lin; Zhewei Dai; Jiawei Zhan; Chengjie Wang

**ID:** 154905\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154905

[Paper](<https://openreview.net/forum?id=A3soBL3Ciu>) | [PDF](<https://openreview.net/pdf?id=A3soBL3Ciu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154905>)

Generating realistic visual defects is crucial for alleviating the scarcity of abnormal samples in anomaly detection, yet existing methods often rely on category\-specific few\-shot adaptation and struggle to generalize across objects, defect types, and domains\. This limitation stems in part from the lack of paired defect editing data and the fine\-grained nature of defect appearance, where subtle variations in scale, texture, and morphology must be preserved while maintaining consistency with the target scene\. To address this challenge, we introduce UDG, a dataset of 300K normal\-abnormal\-mask\-caption quadruplets curated from diverse defect\-related scenarios, and present UniDG, a unified model for universal defect generation\. UniDG formulates defect synthesis as Defect\-Context Editing: it extracts reference defect context with adaptive cropping, organizes reference and target inputs in a structured diptych format, and fuses multimodal conditions through MM\-DiT attention\. We further develop a two\-stage training strategy: Diversity\-SFT learns diverse transferable defect priors from paired editing data, while Consistency\-RFT improves reference adherence, local realism, and defect\-category consistency\. Without per\-category fine\-tuning or using MVTec\-AD/VisA for training, UniDG outperforms prior few\-shot anomaly generation and image insertion/editing baselines in both synthesis quality and downstream single\- and multi\-class anomaly detection/localization\.

## Improving Flexible Image Tokenizers for Autoregressive Image Generation

**Authors:** Zixuan Fu; Lanqing Guo; Chong Wang; Binbin SONG; Ding Liu; Bihan Wen

**ID:** 149748\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149748

[Paper](<https://openreview.net/forum?id=neJJASNqpr>) | [PDF](<https://openreview.net/pdf?id=neJJASNqpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149748>)

Flexible image tokenizers aim to represent an image using an ordered 1D variable\-length token sequence\.  This flexible tokenization is typically achieved through nested dropout, where a portion of trailing tokens is randomly truncated during training, and the image is reconstructed using the remaining preceding sequence\. However, this tail\-truncation strategy inherently concentrates the image information in the early tokens, limiting the effectiveness of downstream AutoRegressive \(AR\) image generation as the token length increases\. To overcome these limitations, we propose \\textbf\{ReTok\}, a flexible tokenizer with \\underline\{Re\}dundant \\underline\{Tok\}en Padding and Hierarchical Semantic Regularization, designed to fully exploit all tokens for enhanced latent modeling\. Specifically, we introduce \\textbf\{Redundant Token Padding\} to activate tail tokens more frequently, thereby alleviating information over\-concentration in early tokens\.  In addition, we apply \\textbf\{Hierarchical Semantic Regularization\} to align the decoding features of earlier tokens with those from a pre\-trained vision foundation model, while progressively reducing the regularization strength toward the tail to allow finer low\-level detail reconstruction\.  Extensive experiments demonstrate the effectiveness of ReTok: on ImageNet 256$\\times$256, our method achieves superior generation performance compared with both flexible and fixed\-length tokenizers\.

## PiD: Fast and High\-Resolution Latent Decoding with Pixel Diffusion

**Authors:** Yifan Lu; Qi Wu; Jay Zhangjie Wu; Zian Wang; Huan Ling; Sanja Fidler; Xuanchi Ren

**ID:** 148976 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tkGw4mDy71>) | [PDF](<https://openreview.net/pdf?id=tkGw4mDy71>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148976>)

_Abstract unavailable from the accessible public sources._

## Diffusion Models without Classifier\-free Guidance

**Authors:** Zhicong Tang; Dong Chen; Jianmin Bao; Baining Guo

**ID:** 150145 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kLqGIEnVoC>) | [PDF](<https://openreview.net/pdf?id=kLqGIEnVoC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150145>)

_Abstract unavailable from the accessible public sources._

## Continuous\-Time Distribution Matching for Few\-Step Diffusion Distillation

**Authors:** Tao Liu; Hao Yan; Mengting Chen; Taihang Hu; Zhengrong Yue; Zihao Pan; Jinsong Lan; Xiaoyong Zhu; Ming\-Ming Cheng; Bo Zheng; Yaxing Wang

**ID:** 150079 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ktYhgVjpqh>) | [PDF](<https://openreview.net/pdf?id=ktYhgVjpqh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150079>)

_Abstract unavailable from the accessible public sources._

## TrioPose: Native Triple\-Stream Diffusion Transformers for Pose\-Guided Text\-to\-Image Generation

**Authors:** dian gu; Zhengyi Yang

**ID:** 149989 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lfuXuQqXhm>) | [PDF](<https://openreview.net/pdf?id=lfuXuQqXhm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149989>)

_Abstract unavailable from the accessible public sources._

## Inline Critic Steers Image Editing

**Authors:** Weitai Kang; Xiaohang Zhan; Yizhou Wang; Mang Tik Chiu; Jason Kuen; Kangning Liu; Yan Yan

**ID:** 152644 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RT1DXXQkZm>) | [PDF](<https://openreview.net/pdf?id=RT1DXXQkZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152644>)

_Abstract unavailable from the accessible public sources._

## FaithfulFaces: Pose\-Faithful Facial Identity Preservation for Text\-to\-Video Generation

**Authors:** Yuanzhi Wang; Xuhua Ren; Jiaxiang Cheng; bing ma; Kai Yu; Sen Liang; Wenyue Li; Tianxiang Zheng; Qinglin Lu; Zhen Cui

**ID:** 154238 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FD6ARt6oA9>) | [PDF](<https://openreview.net/pdf?id=FD6ARt6oA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154238>)

Identity\-preserving text\-to\-video generation \(IPT2V\) empowers users to produce diverse and imaginative videos with consistent human facial identity\. Despite recent progress, existing methods often suffer from significant identity distortion under large facial pose variations or facial occlusions\. In this paper, we propose FaithfulFaces, a pose\-faithful facial identity preservation learning framework to improve IPT2V in complex dynamic scenes\. The key of FaithfulFaces is a pose\-shared identity aligner that refines and aligns facial poses across distinct views via a pose\-shared dictionary and a pose variation–identity invariance constraint\. By mapping single\-view inputs into a global facial pose representation with explicit Euler angle embeddings, FaithfulFaces provides a pose\-faithful facial prior that guides generative foundations toward robust identity\-preserving generation\. In particular, we develop a specialized pipeline to curate a high\-quality video dataset featuring substantial facial pose diversity\. Extensive experiments demonstrate that FaithfulFaces achieves state\-of\-the\-art performance, maintaining superior identity consistency and structural clarity even as pose changes and occlusions occur\. The code and dataset pipeline will be released\.

## Tokenizer\-Generator Coupling in Medical Image Generation

**Authors:** Liam Chalcroft

**ID:** 148519 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xImy5OosQz>) | [PDF](<https://openreview.net/pdf?id=xImy5OosQz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148519>)

Latent medical image generators usually treat the tokenizer as fixed preprocessing\. We test whether this separation is valid in a controlled ChestMNIST study at 64×64, crossing discrete tokenizers, generator families, and sampler settings under a shared latent grid, with continuous\-latent reference cells\. The results show that tokenizer, generator, and sampler cannot be ranked independently\. LFQ is the strongest default discrete tokenizer in the matched VQ/LFQ/FSQ grid, but generator rankings change with quantizer family and categorical rate\. On LFQ\-1024, retuning D3PM and SEDD moves them from default FID\-192 0\.44/0\.41 to 0\.09/0\.11 at lower NFE, approaching the strongest continuous references\. Reconstruction quality is not a reliable selection criterion: the highest\-PSNR tokenizers are not the best generation substrates, even when each tokenizer is paired with its best observed generator\. We interpret these results as a rate\-distortion\-modelability tradeoff, where modelability is conditional on the generator, sampler, and inference budget\. The study covers 54 discrete tokenizer\-generator cells and 16 continuous reference cells, and its scope is deliberately limited: low resolution, one training seed, unconditional generation, and non\-clinical FID\-based evaluation\.

## CineOrchestra: Unified Entity\-Centric Conditioning for Cinematic Video Generation

**Authors:** Sharath Girish; Tsai\-Shien Chen; Zhikang Dong; Mukesh Singhal; Hao Chen; Sergey Tulyakov; Aliaksandr Siarohin

**ID:** 149533 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pQRtpMb2e7>) | [PDF](<https://openreview.net/pdf?id=pQRtpMb2e7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149533>)

Cinematic video depicts multiple subjects acting or interacting at specific moments, captured with deliberate camera movement, and stitched together by shot transitions\. Together, these elements demand a level of fine\-grained control beyond current text\-to\-video models\. Existing work addresses each axis in isolation: multi\-subject personalization, temporal control, multi\-shot synthesis, or camera control; no prior framework jointly integrates all four\. We present $\\textit\{CineOrchestra\}$, a unified video diffusion model that controls subjects, events, cameras, and shot transitions simultaneously\. Our key insight is that these heterogeneous cinematic elements share a fundamental structure: each is an entity acting over a specific temporal interval, which can therefore all be expressed through one shared structure of  entity\-centric conditioning primitives, augmented with reference images for visual entities\. This formulation reduces the architectural challenge to a single positional encoding problem, which we solve with two parameter\-free coordinated rotary embeddings: \(i\) an interval\-sampled temporal RoPE that yields consistent attention behavior across events of dramatically varying duration,  and \(ii\) a 2D entity\-temporal cross\-attention RoPE that disambiguates per\-entity conditions and routes each to its corresponding spatiotemporal region\. On two new benchmarks, $\\textit\{CineOrchestra\}$ outperforms six per\-axis specialists on dense caption following and shot\-transition timing, with consistent gains in a pairwise user study and component ablations\.

## RaPD: Resolution\-Agnostic Pixel Diffusion via Semantics\-Enriched Implicit Representations

**Authors:** Yanhao Ge; Shanyan Guan; Weihao Wang; Ying Tai; Mingyu You

**ID:** 154733 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BRLhAs1iAm>) | [PDF](<https://openreview.net/pdf?id=BRLhAs1iAm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154733>)

Natural images are continuous, yet most generative models synthesize them on discrete grids, limiting resolution\-flexible generation\. Continuous neural fields enable resolution\-free rendering, but prior methods introduce continuity only at the decoding stage as an interpolation module, leaving the generative latent space discretized and reconstruction\-oriented\. We propose RaPD \(Resolution\-agnostic Pixel Diffusion\), which performs diffusion in a continuous Neural Image Field \(NIF\) latent space\. RaPD bridges this reconstruction\-generation gap with Semantic Representation Guidance for generation\-aware latent learning and a Coordinate\-Queried Attention Renderer for coordinate\-conditioned, scale\-aware rendering\. A single denoised latent can be rendered at arbitrary resolutions by changing only the query coordinates, keeping diffusion cost fixed\. Experiments demonstrate superior generation quality and resolution scalability\.

## Read It Back: Pretrained MLLMs Are Zero\-shot Reward Models for Text\-to\-Image Generation

**Authors:** Runhui Huang; Qihui Zhang; Zhe Liu; Yu Gao; Jie Wu; Hengshuang Zhao

**ID:** 155394 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=60UfWy2Mx4>) | [PDF](<https://openreview.net/pdf?id=60UfWy2Mx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155394>)

_Abstract unavailable from the accessible public sources._

## Enabling Preference\-driven Unlearning in Few\-step Distilled Text\-to\-Image Diffusion Models

**Authors:** Gaurav Patel; Jun Fang; Greg Ver Steeg; Qiang Qiu; Sravan Sripada

**ID:** 154856 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AMoAi3Al48>) | [PDF](<https://openreview.net/pdf?id=AMoAi3Al48>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154856>)

_Abstract unavailable from the accessible public sources._

## Gen\-Searcher: Reinforcing Agentic Search for Image Generation

**Authors:** Kaituo Feng; Manyuan Zhang; Shuang Chen; Yunlong lin; Kaixuan Fan; Yilei Jiang; Hongyu Li; Dian Zheng; Chenyang Wang; Xiangyu Yue

**ID:** 153355 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M0ZcmOLHIp>) | [PDF](<https://openreview.net/pdf?id=M0ZcmOLHIp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153355>)

_Abstract unavailable from the accessible public sources._

## Single Shot HDR Recovery via a Video Diffusion Prior

**Authors:** Chinmay Talegaonkar; Jinshi He; Nicholas Antipa

**ID:** 153806 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IZP0ggyeR6>) | [PDF](<https://openreview.net/pdf?id=IZP0ggyeR6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153806>)

_Abstract unavailable from the accessible public sources._

## Hierarchical Variational Policies for Reward\-Guided Diffusion

**Authors:** Kushagra Pandey; Farrin Marouf Sofian; Jan Niklas Groeneveld; Felix Draxler; Stephan Mandt

**ID:** 154863 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJenxpWZXp>) | [PDF](<https://openreview.net/pdf?id=AJenxpWZXp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154863>)

_Abstract unavailable from the accessible public sources._

## SceneShifter: Training\-free Multi\-Scene Temporal Control for Audio\-driven Human Animation

**Authors:** Jianzhi Long; Rong\-Cheng Tu; Hao Guan; Siyuan Liang; Shunyu Liu; Xiao Luo; Dacheng Tao

**ID:** 152896 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pbhd46aeMX>) | [PDF](<https://openreview.net/pdf?id=Pbhd46aeMX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152896>)

_Abstract unavailable from the accessible public sources._

## City\-RAG: Stepping Into a City via Spatially\-Grounded Video Generation

**Authors:** Gene Chou; Charles Herrmann; Kyle Genova; Boyang Deng; Songyou Peng; Bharath Hariharan; Jason Y\. Zhang; Noah Snavely; Philipp Henzler

**ID:** 154638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C7T2iGG1Zy>) | [PDF](<https://openreview.net/pdf?id=C7T2iGG1Zy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154638>)

We address the problem of generating a 3D\-consistent, navigable environment that is spatially grounded: a simulation of a real location\. Existing video generative models can produce a plausible sequence that is consistent with a text \(T2V\) or image \(I2V\) prompt\. However, the capability to reconstruct the real world under arbitrary weather conditions and dynamic object configurations is essential for downstream applications including autonomous driving and robotics simulation\. To this end, we present CityRAG, a video generative model that leverages large corpora of geo\-registered data as context to ground generation to the physical scene, while maintaining learned priors for complex motion and appearance changes\. CityRAG relies on temporally unaligned training data, which teaches the model to semantically disentangle the underlying scene from its transient attributes\. Our experiments demonstrate that CityRAG can generate coherent minutes\-long, physically grounded video sequences, maintain weather and lighting conditions over thousands of frames, achieve loop closure, and navigate complex trajectories to reconstruct real\-world geography\.

## EditDistill: Is It Possible to Guide Video Editing with Image Editing

**Authors:** guojun lei; Hong Li; Hongbing Yang; Lixue Gong; Chi Wang; Zheng Dong

**ID:** 154635 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C8Uf36RhCB>) | [PDF](<https://openreview.net/pdf?id=C8Uf36RhCB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154635>)

Recent advances in image editing have enabled fine\-grained and highly controllable visual modifications\.However, achieving similar levels of controllability in video editing remains an open challenge, particularly for precise local edits, dynamic temporal effects, and consistent lighting across frames\.In this paper, we propose EditDistill, a framework that distills image\-level visual transformations from edits into a compact descriptor to guide video editing\.Specifically, given a source video and an edit prompt, we first generate an edited version of the initial video frame using an off\-the\-shelf image editing model\. We then distill the visual transformation of this original\-edited image pair into a compact representation termed an edit descriptor\.This descriptor is injected into a video diffusion model through our lightweight fusion module, which steers the denoising process toward the desired edit\. To align the video trajectory with the demonstrated image edit while preserving motion and layout, we train with edit\-descriptor alignment and DINO structural consistency losses, and derive an equivalent inference\-time guidance formulation under flow matching\.Extensive experiments demonstrate that our method achieves strong performance on standard benchmarks and produces high\-quality video editing results across diverse scenarios\.

## MaSC: A Masked Similarity Metric for Evaluating Concept\-Driven Generation

**Authors:** Patryk Bartkowiak; Lennart Petersen; Bartosz Kotrys; Dominik L Michels; Soeren Pirk; Wojtek Palubicki

**ID:** 138992 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s74oBrTreh>) | [PDF](<https://openreview.net/pdf?id=s74oBrTreh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138992>)

Evaluating single\-concept personalization in text\-to\-image diffusion has seen two categories of quantitative metrics: Concept Preservation \(CP\) measures identity fidelity to a reference while Prompt Following \(PF\) measures whether the generated scene matches the prompt\. Personalization papers have commonly computed these signals using three separate backbones: CLIP\-I and DINO for CP, CLIP\-T for PF\. In this work, we show that existing metrics fall short of correlating with human perception because they attend to the image as a whole, instead of distinguishing the concept subject from the background\. This distinction is important from a human perception point of view as the concept subject in the output image should be very similar to the input concept, whereas the output background should adhere closely to the text prompt\. To improve personalization evaluation in this way, we introduce MaSC, a unified metric that attends to CP and PF by differentiating concept subject regions\. Specifically, given an externally provided foreground concept mask, MaSC computes the CP and PF scores from a single forward pass of a frozen SigLIP2 encoder per image\.  On DreamBench\+\+ human ratings, MaSC reaches Krippendorff $\\alpha = \+0\.471$ and Spearman $\\rho = \+0\.611$ on CP, the highest point estimate among the evaluated non\-LLM metrics, exceeding GPT\-4V and falling $\\Delta\\alpha = 0\.028$ below GPT\-4o\. An exploratory reference\-mask sensitivity analysis reaches $\\alpha = \+0\.506$ with $32\\%$ dilation\. To distinguish human perception bias we also evaluate our method, as well as common SOTA baselines, on ORIDa, a real\-photo benchmark of identity preservation across physical environments\. In this experiment MaSC reaches AUC $= 0\.992$ almost perfectly identifying concept subjects\. The PF score, obtained without a second vision\-encoder forward pass, achieves higher rank correlation with human ratings than the CLIP\-T baseline shipped with DreamBench\+\+\. Together, these results support foreground\-local aggregation for concept preservation and show how a shared encoder can provide complementary concept\-preservation and prompt\-following scores\. We release MaSC as a pip\-installable Python package, alongside independent reproductions of every comparator's published numbers\.

## iCATS: Fast Video Generation via Interaction\-Aware Sparse Attention and Timestep\-Adaptive Sparsity

**Authors:** Chengfeng Han; Baole Ai; Xianlu Bian; Jie Yao; Zilong Huang; Ang Wang; Dandan Ding

**ID:** 152851 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PtTQa5xo9Q>) | [PDF](<https://openreview.net/pdf?id=PtTQa5xo9Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152851>)

Training\-free sparse attention offers a practical acceleration solution to Diffusion Transformers \(DiTs\) via reducing computations without fine\-tuning\. It typically involves estimating the importance of query\-key regions and deriving sparse masks to compute only the important candidates, which inevitably introduces approximation errors that may degrade generation quality\. To better balance the efficiency\-quality trade\-off, we propose iCATS, integrating improved importance estimation and sparse mask construction with an efficient hardware execution strategy\. Specifically, for importance estimation, unlike previous works that perform independent clustering over query and key tokens based on feature similarity to estimate attention scores, iCATS demonstrates that clustering based on query\-key dot\-product interactions is more accurate and further reformulates this objective as a simple quadratic form for low\-cost computation\. For sparse mask construction, instead of using a fixed top\-$p$ rule, we observe that tolerance to sparse approximation errors varies across denoising timesteps and therefore introduce an SNR\-guided sparsity schedule to adjust sparsity dynamically, leading to higher accuracy\. Finally, for hardware execution, we devise a tail\-merging strategy to reduce padding overhead caused by irregular cluster sizes, improving GPU kernel utilization\. Extensive experiments show that iCATS achieves 2\.03$\\times$  acceleration with 31\.017 dB PSNR on HunyuanVideo\-T2V\-13B and 1\.55$\\times$  acceleration with 29\.301 dB PSNR on Wan2\.1\-T2V\-14B, delivering a state\-of\-the\-art efficiency\-quality trade\-off\.

## MaskSense: Confronting the Visual Exploration Trap in Masked Image Generation

**Authors:** Yawen Shao; Jie Xiao; Kai Zhu; Yu Liu; Hongchen Luo; Xueyang Fu; Yang Cao; Wei Zhai; Zheng\-Jun Zha

**ID:** 155231 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7HT2OEIoEN>) | [PDF](<https://openreview.net/pdf?id=7HT2OEIoEN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155231>)

Reinforcement learning \(RL\) has shown strong potential for aligning generative models with human intent, but adapting RL to masked generative models \(MGMs\) remains largely underexplored\. Existing approaches that directly adapt Group Relative Policy Optimization \(GRPO\) to MGMs leave a foundational conflict unaddressed: MGMs' exploitative decoding nature is inherently at odds with the exploratory diversity that GRPO presupposes\. In this work, we reveal a structural decoding bias termed the visual exploration trap: confidence\-based sampling trades the exploration of diverse subject realizations for the greedy resolution of low\-uncertainty background regions, causing premature collapse of the generative exploration space and starving GRPO of the rollout diversity it depends on\. To this end, we propose MaskSense, a novel RL framework for MGMs that confronts the visual exploration trap at both the sampling and optimization stages\. Specifically, we introduce a semantic anchored routing sampling mechanism that leverages semantic priors to preserve high\-entropy subject token exploration while amplifying intra\-group reward variance through exploratory\-exploitative routing to yield more discriminative advantage estimates\. Furthermore, we design a global entropy transition anchoring strategy to identify the most consequential decoding steps and concentrate gradient updates on them\. Extensive experiments on multiple text\-to\-image benchmarks demonstrate that MaskSense substantially improves upon the base model, with GenEval accuracy improving from 54% to 86% and HPS from 28\.89 to 36\.39, achieving state\-of\-the\-art performance\.

## Efficient Adjoint Matching for Fine\-tuning Diffusion Models

**Authors:** Jeongwoo Shin; Dongsoo Shin; Yuchen Zhu; Wei Guo; Yongxin Chen; Joonseok Lee; Jaewoong Choi; Jaemoo Choi

**ID:** 148733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vSHTrySbQc>) | [PDF](<https://openreview.net/pdf?id=vSHTrySbQc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148733>)

Reward fine\-tuning has become a common approach for aligning pretrained diffusion and flow models with human preferences in text\-to\-image generation\. Among reward\-gradient\-based methods, Adjoint Matching \(AM\) provides a principled formulation by casting reward fine\-tuning as a stochastic optimal control \(SOC\) problem\. However, AM inevitably requires a substantial computational cost: it requires \(i\) stochastic simulation of full generative trajectories under memoryless dynamics, resulting in a large number of function evaluations, and \(ii\) backward ODE simulation of the adjoint state along each sampled trajectory\. In this work, we observe that both bottlenecks are closely tied to the non\-trivial base drift inherited from the pretrained model\. Motivated by this observation, we propose Efficient Adjoint Matching \(EAM\), which substantially improves training efficiency by reformulating the SOC problem with a linear base drift and a correspondingly modified terminal cost\. This reformulation removes both sources of inefficiency; it enables training\-time sampling with a few\-step deterministic ODE solver and yields a closed\-form adjoint solution that eliminates backward adjoint simulation\. On standard text\-to\-image reward fine\-tuning benchmarks, EAM converges up to 4× faster than AM and matches or surpasses it across various metrics including PickScore, ImageReward, HPSv2\.1, CLIPScore and Aesthetics\.

## Asymmetric Flow Models

**Authors:** Hansheng Chen; Jan Ackermann; Minseo Kim; Gordon Wetzstein; Leonidas Guibas

**ID:** 156075 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0ddDpfXvoV>) | [PDF](<https://openreview.net/pdf?id=0ddDpfXvoV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156075>)

Flow\-based generation in high\-dimensional spaces is difficult because velocity prediction requires modeling high\-dimensional noise, even when data has strong low\-rank structure\. We present Asymmetric Flow Modeling \(AsymFlow\), a rank\-asymmetric velocity parameterization that restricts noise prediction to a low\-rank subspace while keeping data prediction full\-dimensional\. From this asymmetric prediction, AsymFlow analytically recovers the full\-dimensional velocity without changing the network architecture or training/sampling procedures\. On ImageNet 256$\\times$256, AsymFlow achieves a leading 1\.57 FID, outperforming prior DiT/JiT\-like pixel diffusion models by a large margin\. AsymFlow also provides the first\-ever route for finetuning pretrained latent flow models into pixel\-space models: a patch\-level linear lift initializes a low\-rank pixel model whose denoising trajectory preserves the latent model's high\-level semantics and structure, so finetuning mainly improves low\-level residuals rather than relearning pixel generation\. We show that the pixel AsymFlow model finetuned from FLUX\.2 klein 9B establishes a new state of the art for pixel\-space text\-to\-image generation, beating its latent base on HPSv3, DPG\-Bench, and GenEval while qualitatively showing substantially improved visual realism\. Code and models will be released publicly\.

## Think, Plan, Paint: Layout\-Aware Reasoning for Controllable Image Generation in Unified Models

**Authors:** Junhao Liu; Jian\-Wei Zhang; Tao Huang; Jian Zhang; Zhao Zhong; Liefeng Bo

**ID:** 149971 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lpI5QYN2jv>) | [PDF](<https://openreview.net/pdf?id=lpI5QYN2jv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149971>)

Unified Multimodal Large Language Models \(MLLMs\) offer a promising paradigm for unifying visual understanding and generation, yet they still struggle to follow complex spatial instructions and logical constraints in controllable image generation\.  To address this gap, we present ATLAS, a unified framework that equips MLLMs with a human\-like \`\`Think, Plan, and Paint'' paradigm\.   We adopt layout as the shared representation that connects the three stages, enabling the model to reason about spatial requirements, plan explicit object arrangements, and render the final image\. We further improve plan\-to\-image fidelity with reinforcement\-learning\-based layout alignment\. We instantiate ATLAS at 7B and 80B scales, achieving state\-of\-the\-art performance among  MLLMs on image generation benchmarks and an average 65\.31\\% improvement over existing layout\-aware MLLMs\. On spatially related tasks, ATLAS obtains a 23\.06\\% gain over the base models\. Through the same layout interface, ATLAS also supports instruction\-guided editing and multimodal grounding\. We further introduce ATLAS\-Reasoning, a benchmark for evaluating generation under complex spatial instructions\.

## Improved Baselines with Representation Autoencoders

**Authors:** Jaskirat Singh; Boyang Zheng; Zongze Wu; Richard Zhang; Eli Shechtman; Saining Xie

**ID:** 149740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nikMBZQUOk>) | [PDF](<https://openreview.net/pdf?id=nikMBZQUOk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149740>)

Representation Autoencoders \(RAE\) replace traditional VAE with pretrained vision encoders\. In this paper, we systematically investigate several design choices and find three insights which simplify and improve RAE\. First, we study a generalized formulation where the representation is defined as sum of the last k encoder layers rather than solely the final layer\. This simple change greatly improves reconstruction without encoder finetuning or specialized data \(e\.g\., text, faces\)\. Second, we study the prevalent assumption that RAE \(using pretrained representation as encoder\) replaces representation alignment \(REPA\), which distills same representation to intermediate layers instead\. Through large\-scale empirical analysis, we uncover a surprising finding: RAE and REPA exhibit complementary working mechanisms, allowing same representation to be used as both encoder and target for intermediate diffusion layers\. Finally, the original RAE struggles with classifier\-free guidance \(CFG\) and requires training a second, weaker diffusion model for AutoGuidance \(AG\)\. We show that REPA itself can be viewed as x\-prediction in RAE latent space\. By simply re\-parameterizing the output of DiT model, it can provide guidance for "free"\. Overall, RAEv2 leads to more than 10x faster convergence over original RAE, achieving a state\-of\-the\-art gFID of 1\.06 in just 80 epochs on ImageNet\-256\. On FDr^k RAEv2 achieves state\-of\-art 2\.17 at just 80 epochs compared to previous best 3\.26 \(800 epochs\) without any post\-training\. This motivates eFID\-k \(epochs to reach unguided gFID &lt;= k\) as a measure of training efficiency\. RAEv2 attains an eFID\-2 of 35 epochs, versus 177 for the original RAE\. We also validate our approach across diverse settings for text\-to\-image generation and navigation world models, showing consistent improvements\. We hope that this work provides insights for practical adoption of representation autoencoders\.

## Do Image Editing Models Understand Lighting?

**Authors:** Tim Küchler; Johann\-Friedrich Feiden; Matthias Niessner; Carsten Rother

**ID:** 139308 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YDISH8weQa>) | [PDF](<https://openreview.net/pdf?id=YDISH8weQa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139308>)

While recent advancements in generative image editing models have achieved stunning visual fidelity, it remains an open question whether these systems possess an intrinsic knowledge of real\-world lighting\. Existing benchmarks typically evaluate high\-level plausibility of perceptual light transport on curated internet imagery, using VLMs or human judgement, or they rely on synthetically generated datasets\. In this work, we introduce the 3D\-anchored Light Probe \(3DLP\) benchmark, for which we have captured a new high\-fidelity HDR dataset of real\-world lighting changes\. The dataset consists of 1K image pairs of diverse indoor scenery in which light probes are physically turned on and off\. To allow for a granular performance analysis, we annotated specific image regions such as cast shadows or metallic surfaces\. With this data, we evaluate a range of state\-of\-the\-art image editing models by measuring how well their light probe edits align with reality\. The evaluation uses two new scores to compensate for AI\-generated photographic effects, such as adjusted white balance\. Our results show that the overall performance of models differs considerably, with differences slightly less pronounced for specular highlights\. The best image editing models are remarkably consistent with real\-world physics, however, they still leave room for improvement\. We observe that image regions that receive less light from the light probe are more prone to errors for all models\. Furthermore, building on their success in evaluating macroscopic lighting plausibility, we test VLMs on our task but find that they are unsuitable for pixel\-level light transport analysis\. We will make the benchmark, together with the real\-world dataset, publicly available to encourage future research on this topic\.

## Opening the Black Box of Classifier\-Free Guidance via Information Bottleneck

**Authors:** Jiayang Gao; Tianyi Zheng; Jiayang Zou; Fengxiang Yang; Luyao Fan; Lv Tang; Bo Li; Jia Wang

**ID:** 148587\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148587

[Paper](<https://openreview.net/forum?id=wfY4Srt4qX>) | [PDF](<https://openreview.net/pdf?id=wfY4Srt4qX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148587>)

Classifier\-free guidance \(CFG\) is a standard technique for improving conditional generation in diffusion models, yet its activation schedule is usually selected heuristically\. In practice, most existing CFG\-based methods rely on a pre\-defined activation policy throughout inference, while recent dynamic variants often depend on hand\-designed schedules without a principled theoretical explanation of when conditional information is most useful\.  In order to understand how the informational relevance between conditioning inputs and the score function evolves over the course of generation, we explore when guidance should be activated from an information\-theoretic perspective\. In this work, we formulate the diffusion trajectory as a time\-dependent information bottleneck and show that the effectiveness of conditional information is not uniform throughout sampling, but becomes significantly stronger after a critical stage characterized by a Fisher\-information balance condition\. Motivated by this insight, we propose a training\-free dynamic CFG strategy for inference\. Rather than prescribing a fixed schedule in advance, our method constructs a stochastic process from conditional and unconditional score statistics and activates guidance when the estimated guidance gain crosses a prescribed threshold\. This yields an adaptive activation rule that aligns condition injection with the underlying generation dynamics, while also recovering interval\-based guidance as a limiting special case\. Extensive experiments across diverse architectures and tasks, demonstrate that our method is effective, robust, and broadly applicable\. Beyond empirical improvements, our framework provides an interpretation of dynamic guidance methods and a principled foundation for inference\-time control in conditional diffusion models\.

## Stitched Value Model for Diffusion Alignment

**Authors:** Hyojun Go; Hyungjin Chung; Prune Truong; Goutam Bhat; Li Mi; Zhaochong An; Zixiang Zhao; Dominik Narnhofer; Serge Belongie; Federico Tombari; Konrad Schindler

**ID:** 149632\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149632

[Paper](<https://openreview.net/forum?id=odBEybhkHQ>) | [PDF](<https://openreview.net/pdf?id=odBEybhkHQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149632>)

_Abstract unavailable from the accessible public sources._

## DriveWAM: Video Generative Priors Enable Scalable World\-Action Modeling for Autonomous Driving

**Authors:** Chen Shi; Jinrui Xu; Shaoshuai Shi; Kehua Sheng; Bo Zhang; Li Jiang

**ID:** 150338\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150338

[Paper](<https://openreview.net/forum?id=irKRjaeIAV>) | [PDF](<https://openreview.net/pdf?id=irKRjaeIAV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150338>)

_Abstract unavailable from the accessible public sources._

## CyCLeGen: Cycle\-Consistent Layout Prediction and Image Generation

**Authors:** Xiaojun Shan; Haoyu Shen; Yucheng Mao; Haiyang Xu; Xiang Zhang; Abhay Anand; Bingnan Li; Zhuowen Tu

**ID:** 153270 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MUrqtx2pBo>) | [PDF](<https://openreview.net/pdf?id=MUrqtx2pBo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153270>)

We present CyCLeGen, an autoregressive framework that integrates layout understanding and layout\-to\-image generation through cycle consistency: predicted layouts must produce faithful images, and generated images must yield consistent layouts\. We enforce this constraint via CycleGRPO, a bidirectional reinforcement learning strategy with complementary geometric and perceptual rewards, enabling self\-introspective learning from only 8k RL samples\. This creates a natural loop, generation helps understanding by rewarding only those layouts that lead to high\-quality images, and understanding helps generation by rewarding only those images whose spatial structure can be faithfully recovered\. Extensive experiments show that CyCLeGen achieves significant gains across diverse image understanding and generation benchmarks, with emergent gains on image captioning\.

## MotionCFG: Boosting Motion Dynamics via Semantic Motion Sharpening

**Authors:** Byungjun Kim; Soobin Um; Jong Chul Ye

**ID:** 150155 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kFcyrsn0he>) | [PDF](<https://openreview.net/pdf?id=kFcyrsn0he>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150155>)

Despite recent advancements in Text\-to\-Video \(T2V\) synthesis, generating high\-fidelity and dynamic motion remains a significant challenge\. Existing methods primarily rely on Classifier\-Free Guidance \(CFG\), but standard CFG treats all semantic dimensions uniformly and provides no mechanism to selectively resolve ambiguity along the motion axis\. To address this, we propose MotionCFG, a training\-free approach that introduces selective guidance along the motion subspace of the condition embedding\. Specifically, we construct a motion\-perturbed negative condition by injecting Gaussian noise into motion\-related embeddings, and steer generation away from it to selectively amplify motion intent\. We show theoretically that this procedure implicitly approximates \*Semantic Laplacian Sharpening\*, a second\-order correction that suppresses motion\-ambiguous regions of the score landscape and amplifies well\-resolved dynamic peaks\. Combined with a piecewise guidance schedule that confines intervention to the early denoising steps, MotionCFG consistently improves motion dynamics across state\-of\-the\-art T2V frameworks with negligible overhead\. We further demonstrate that this Laplacian sharpening principle generalizes beyond motion, effectively steering complex, non\-linear concepts such as precise object numerosity that are typically difficult to modulate via standard text\-based guidance\.

## LLM Is a Good Conditioner: End\-to\-End Sign Language Video Generation with VQ\-Diffusion

**Authors:** Xiao Liu; Shiwei Gan

**ID:** 148951 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=twBWaZ8FT0>) | [PDF](<https://openreview.net/pdf?id=twBWaZ8FT0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148951>)

Sign Language Video Generation \(SLVG\) aims to generate realistic and motion\-accurate sign language videos from spoken text\. Most existing studies heavily rely on intermediate representations \(\\eg poses or 3D meshes\), and adopt a two\-stage generation paradigm, where the text is first converted into poses or other visual modalities, which are then used as conditions to synthesize sign language video frames via diffusion models \(\\eg pose\-to\-image models\)\.  However, the end\-to\-end SLVG task remains largely unexplored\.  In this paper, we demonstrate that end\-to\-end SLVG is feasible without relying on intermediate representations\(\\eg poses\), and we argue that a key challenge lies in how to generate effective and temporally consistent conditions\. With well\-designed condition modules, it becomes feasible to build an end\-to\-end SLVG model without relying on any intermediate modalities\. To this end, we propose LLMCond, a first end\-to\-end text\-to\-video SLVG framework that requires no auxiliary visual cues during either training or inference\. LLMCond consists of four key components: \(1\) a video VQVAE that compresses sign language videos into a sequence of discrete latent tokens; \(2\) \\textbf\{an LLM\-based conditioner\} that generates temporally and semantically aligned conditions corresponding to the sign sequences; \(3\) \\textbf\{a Gaussian Condition Refiner\} designed to enforce temporal smoothness across conditions, enabling the generation of coherent and natural sign language motions; and \(4\) a discrete diffusion model that synthesizes motion\-accurate sign language videos conditioned on the refined condition sequences\. Extensive experiments on public SL datasets demonstrate that LLMCond achieves highly competitive performance, producing temporally coherent and accurate sign language motions without relying on auxiliary visual modalities such as pose, depth, or optical flow\.

## Why Do DiT Editors Drift? Plug\-and\-Play Low Frequency Alignment in VAE Latent Space

**Authors:** Xiaoce Wang; Sifan Zhou; Kaifei Wang; Leli Xu; Xuerui Qiu; Tao He; Ming Li

**ID:** 151149 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceVqStm5S2>) | [PDF](<https://openreview.net/pdf?id=ceVqStm5S2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151149>)

Recent advances in diffusion transformers \(DiTs\) have enabled promising single\-turn image editing capabilities\. However, multi\-turn editing often leads to progressive semantic drift and quality degradation\.  In this work, we study this problem from a latent\-space frequency perspective by decomposing the editing process into two functional components: VAE and DiT\. Through systematic analysis in the VAE latent space, we uncover that the DiT introduces dominant low\-frequency drift that accumulates as semantic misalignment across editing rounds, while the VAE contributes comparatively stable reconstruction bias\.  Based on this insight, we propose \*\*VAE\-LFA\*\* \(Low Frequency Alignment\), a training\-free, plug\-and\-play method that performs alignment in VAE latent space\. VAE\-LFA decomposes latent discrepancies across editing rounds via low\-pass filtering, and aligns low\-frequency statistics to an exponential moving average of previous rounds, effectively suppressing accumulated semantic drift while preserving high\-frequency details\.  Our method requires \*no retraining, ground\-truth priors, or access to diffusion parameters\*, making it applicable to both white\-box and black\-box DiT editors\. For white\-box models, VAE\-LFA is seamlessly integrated into the editing pipeline by eliminating redundant VAE round trips; for black\-box models, it operates via an off\-the\-shelf VAE to perform inter\-round latent alignment\.  Extensive experiments demonstrate that VAE\-LFA improves semantic consistency and visual fidelity across diverse multi\-turn editing scenarios, including both controlled and in\-the\-wild images\.

## A Hierarchical World Model for Driving

**Authors:** Sudhanshu Mittal; Arian Mousakhan; Silvio Galesso; Karim Farid; Johannes Dienert; Rajat Sahay; Thomas Brox

**ID:** 151694 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yj5ujHJ5XD>) | [PDF](<https://openreview.net/pdf?id=Yj5ujHJ5XD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151694>)

Current world models operate at a single level of abstraction, with most prioritizing perceptual fidelity while lacking the spatial reasoning and semantic understanding required for real\-world downstream tasks\. We present a hierarchical driving world model that factorizes future prediction across two levels operating at distinct temporal and abstraction scales: a high\-level predictor that forecasts coarse scene structure over extended temporal horizons, and a low\-level generator that produces detailed predictions conditioned on the high\-level output\. This decomposition yields high perceptual fidelity while also capturing strong spatial and semantic representations\. We further show that pretraining with a diffusion forcing objective yields substantially richer internal representations than the standard teacher forcing objective, while teacher forcing — predicting only the next frame from clean context — produces more stable autoregressive rollouts\. We therefore introduce a generic two\-stage training paradigm that pretrains the model with diffusion forcing and fine\-tunes with teacher forcing, combining the representational benefits of the former with the rollout stability of the latter\. Our approach achieves state\-of\-the\-art results across the standard suite of driving world model evaluations on established benchmarks, including long\-horizon generation fidelity, steering responsiveness evaluated on counterfactual scenarios, and internal representation quality\.

## When to Inject the Target: Stage\-Decoupled Guidance for Diffusion\-Based Targeted Adversarial Attacks

**Authors:** JUNFENG YU; Junkai Bao; Hao Zeng; XIAOWEN MO; Xin Liu; Xuejian Huang

**ID:** 150069 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kzTPiteYkW>) | [PDF](<https://openreview.net/pdf?id=kzTPiteYkW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150069>)

Diffusion\-based generative attacks have emerged as a promising paradigm for targeted adversarial example generation, leveraging generative priors to improve transferability and visual fidelity\. However, existing methods typically entangle image reconstruction and target manipulation within the same reverse denoising trajectory, where target guidance can disrupt early structural recovery\. This coupling creates a persistent trade\-off among attack effectiveness, transformation robustness, and perceptual fidelity\. In this paper, we propose SDTI \(Stage Decoupled Target Injection\), a stage\-decoupled reverse diffusion framework that separates source\-structure preservation from adversarial target injection along the denoising timeline\. SDTI first maps the input image to an intermediate latent through null\-text DDIM inversion, then recovers and anchors the source structure with a frozen null\-text denoising prefix, and finally activates target\-conditioned LoRA guidance only in the late denoising suffix to inject adversarial target semantics\. To confine adversarial optimization to this suffix phase, we further introduce suffix\-wise supervision with inter\-step gradient truncation\. Extensive experiments on ImageNet\-NeurIPS, robust victim models, common input transformations, and MS\-COCO cross\-domain transfer show that SDTI achieves a favorable attack\-\-fidelity\-\-robustness trade\-off, improving transformation robustness and perceptual quality while maintaining competitive targeted transferability\. The code is available at: https://anonymous\.4open\.science/r/AY\_code\-1431\.

## FlashControl: One\-Step Controllable Generator via Distillation\-Friendly Single\-Stream Teachers\.

**Authors:** Ngan Nguyen; Dung Nguyen; Quan Dao; Dimitris Metaxas; Minh Hoai; Cuong Pham; Anh Tran

**ID:** 154256 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F8EdTnY4HY>) | [PDF](<https://openreview.net/pdf?id=F8EdTnY4HY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154256>)

Diffusion models have become a leading approach in visual generative modeling, particularly effective in text\-to\-image and controllable generation\. Their main drawback is slow inference as it requires many sampling steps\. While recent distillation methods enable one\-step text\-to\-image generation, extending these techniques to controllable generation is still challenging\. Existing controllable models, such as ControlNet, rely on dual\-branch design that make distillation difficult\. In this work, we adopt a simpler strategy\. Instead of adding extra conditional branches, we finetune a selected subset of layers in the original text\-to\-image diffusion model to directly enable controllable generation\. This results in DeltaControl, a single\-flow, multi\-step diffusion model capable of supporting spatial\-condition generation while matching the performance of dual\-branch approaches\. Building on this teacher model, we further apply step\-distillation to obtain FlashControl, a one\-step model capable of spatial controllable generation with a single forward pass\.

## PermuQuant: Lowering Per\-Group Quantization Error by Reordering Channels for Diffusion Models

**Authors:** Yongsen Cheng; Kai Liu; Kaiwen Tao; Junxian Li; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 151313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bQr7RtVC2C>) | [PDF](<https://openreview.net/pdf?id=bQr7RtVC2C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151313>)

Large\-scale visual generative models have achieved remarkable performance\. However, their high computational and memory costs make deployment challenging in resource\-constrained scenarios, such as interactive applications and personal single\-GPU usage\. Post\-training quantization \(PTQ\) offers a practical solution by compressing pretrained models without expensive retraining\. However, existing PTQ methods still suffer from severe quality degradation under extremely low\-bit settings\. In this paper, we identify channel ordering as an important but underexplored factor in per\-group quantization\. In this setting, each contiguous group shares one quantization scale\. When channels with very different statistics are placed in the same group, the scale can be dominated by outliers and cause large quantization errors\. Based on this observation, we propose PermuQuant, a simple and effective PTQ framework for low\-bit diffusion models\. PermuQuant sorts channels by a joint second\-moment criterion before per\-group quantization, placing channels with similar activation and weight statistics into the same group\. It further uses a calibration\-based acceptance rule to apply reordering only when the selected permutation reduces quantization error on calibration data\. The selected permutations are absorbed into adjacent modules or applied to weights offline, avoiding explicit runtime permutation operations\. Extensive experiments on multiple large diffusion models show that PermuQuant consistently reduces quantization error and outperforms existing PTQ baselines\. On FLUX\.1\-dev with an NVIDIA RTX 5090, PermuQuant achieves up to a 1\.8$\\times$ single step speedup and reduces the DiT memory footprint by 3\.5$\\times$ under W4A4 NVFP4 quantization\.

## Generation Navigator: A State\-Aware Agentic Framework for Image Generation

**Authors:** Jinming Liu; Ruoyu Feng; Yuqi Wang; Wenjun Zeng; Xin Jin

**ID:** 153938 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HS7Cbd4eu1>) | [PDF](<https://openreview.net/pdf?id=HS7Cbd4eu1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153938>)

Despite rapid advances in text\-to\-image generation, faithfully realizing user intent remains challenging, often requiring manual multi\-turn trial and error\. To automate this process, existing systems rely on either simple prompt rewriting or closed\-loop agents driven by hand\-crafted rules, rather than learning to adapt actions to the evolving generation process\. In this paper, we reformulate image generation as a state\-conditioned action\-making problem and propose Generation Navigator, a multi\-turn T2I agent that learns to dynamically steer the generation trajectory and output the next action\. However, training this agent via reinforcement learning introduces a critical credit assignment challenge: naively rewarding a trajectory based solely on a single state assigns equal credit to all actions in the rollout, ignores the quality dynamics across turns, and fails to distinguish actions that improve the trajectory from those that degrade it or waste turns without progress\. We resolve this with PRE\-GRPO \(Peak\-Retention\-Efficiency Group Relative Policy Optimization\), a trajectory\-level reinforcement learning objective that explicitly rewards discovering a high\-quality image \(Peak\), avoiding subsequent quality degradation across turns \(Retention\), and minimizing unnecessary turns \(Efficiency\)\. Experiments show substantial improvements across benchmarks, reaching a WISE score of 0\.90 and 79\.06% reasoning accuracy on T2I\-ReasonBench\.

## From Articulated Kinematics to Routed Visual Control for Action\-Conditioned Surgical Video Generation

**Authors:** Bohan Li; Shuojue Yang; Baorui Peng; Xianda Guo; Erli Zhang; Youqi Tao; Junfeng Duan; Daguang Xu; DOU QI; Xin Jin; Wenjun Zeng; Hao Zhao; Yueming Jin

**ID:** 150152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kGzdWYQSDu>) | [PDF](<https://openreview.net/pdf?id=kGzdWYQSDu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150152>)

Action\-conditioned surgical video generation is a critical yet highly challenging problem for robotic surgery\. The core difficulty is that low\-dimensional control vectors must precisely govern complex image\-space evolution\. In this work, we propose a kinematic\-to\-visual lifting paradigm that converts articulated kinematics into a unified set of five image\-aligned control modalities\. Building on this representation, we introduce a hierarchically routed visual control framework that selectively activates the most relevant control modalities and motion scales\. Instead of uniformly applying all control signals, our model performs hierarchical routing to dynamically allocate conditioning capacity\. We further design kinematic\-prior\-guided routing loss functions to ensure physically meaningful, temporally stable, and efficient expert utilization\. To improve efficiency, we propose a budgeted training and inference scheme that leverages routing\-induced sparsity\. By selectively discarding low\-significance control pathways during training and execution, our approach enables adaptive computation that is complementary to standard distillation\. We additionally construct a new benchmark with curated articulated annotations, obtained through human\-in\-the\-loop semantic labeling and differentiable pose tracking, providing realistic supervision for action\-conditioned surgical video generation\. Extensive experiments demonstrate that our method consistently improves action faithfulness, visual fidelity, and cross\-domain generalization over diverse baselines\. Moreover, our efficient variant achieves substantial reductions in latency while maintaining strong control accuracy\.

## ImageNet FID is a Pass Check, Not a Finish Line

**Authors:** Qinyu Zhao; Guangting Zheng; Caixia Zhou

**ID:** 140042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cRKDUddr0V>) | [PDF](<https://openreview.net/pdf?id=cRKDUddr0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140042>)

ImageNet class\-conditional generation is a standard first test for new image generation methods\. Progress on ImageNet is usually measured with one number: Fréchet Inception Distance \(FID\), computed by comparing 50K class\-balanced generated samples with the ImageNet training set in the Inception\-v3 feature space\. The FID number was useful when the generation quality was low and the gap between methods was large\. However, many recent methods already reach remarkable and close FID numbers, and we argue that the field should stop treating FID as decisive evidence of generation quality\. To support this view, we re\-evaluate 47 recent ImageNet class\-conditional generators while keeping the generated samples fixed and changing only the evaluation protocol\. We test multiple variants of FID, including different real reference sets, sample sizes, and feature extractors such as Inception\-v3, CLIP, DINOv2, and VGG16\. The same generated samples can receive different scores, resulting in varying rankings\. Our observation means that a single FID protocol has a risk of being over\-optimized and over\-interpreted\. We do not argue that FID should be removed\. Instead, we recomend: keep the conventional ImageNet FID for continuity, but also report the results of some FID varaints to avoid overfitting to one evaluation recipe\. If a method reaches comparable and stable ImageNet FID, authors should not be expected to keep chasing the best FID, and the paper should be evaluated based on their technical contributions\. After passing the FID test, future work such as text\-to\-image training and human preference study, is important for the futher development of a generation method\.

## Thinking in Pictures: A Systematic Benchmark for Reasoning\-driven Image Generation

**Authors:** Yutong Liu; Nan Huang; Xu Cao; James Rehg

**ID:** 139488 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N0bv4quGJQ>) | [PDF](<https://openreview.net/pdf?id=N0bv4quGJQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139488>)

Recent advancements in world models and unified generative models \(UGMs\) have achieved unprecedented results in visual perception and synthesis\. However, these models primarily rely on surface\-level alignment, leaving the capacity for high\-level visual reasoning underexplored\. True visual generative intelligence demands "Reasoning\-to\-Generation", an ability to infer latent rules from visual inputs and manifest solutions through precise, logically constrained visual outcomes\. We introduce RIG\-Bench, a novel comprehensive benchmark that systematically evaluates Reasoning\-driven Image Generation \(RIG\) across four cognitively demanding domains: Concept\-based, Transformation\-based, Pattern &amp; Structure, and Scenario\-based\. Featuring 2000 curated samples, RIG\-Bench serves as a rigorous stress test for RIG\. Our extensive evaluations of state\-of\-the\-art UGMs and image/video generation models reveal a significant reasoning\-generation gap, wherein models frequently produce locally plausible but globally illogical outputs\. RIG\-Bench provides a vital diagnostic framework to guide the development of next\-generation, logically grounded world models\.

## SocialDirector: Training\-Free Social Interaction Control for Multi\-Person Video Generation

**Authors:** LIANGYANG OUYANG; Ruicong Liu; Caixin Kang; Yifei Huang; Yoichi Sato

**ID:** 155006 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9HlJW88mEe>) | [PDF](<https://openreview.net/pdf?id=9HlJW88mEe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155006>)

Video generation has advanced rapidly, producing photorealistic videos from text or image prompts\. Meanwhile, film production and social robotics increasingly demand multi\-person videos with rich social interactions, including conversations, gestures, and coordinated actions\. However, existing models offer no explicit control over interactions, such as who performs which action, when it occurs, and toward whom it is directed\. This often results in wrong person performing unintended actions \(actor\-action mismatch\), disordered social dynamics, and wrong action targets\. To address these challenges, we present SocialDirector, a training\-free interaction controller that enhances the generation model by modulating cross\-attention maps\. SocialDirector contains two modules: Social Actor Masking and Directional Reweighting\. Social Actor Masking constrains each person's visual tokens to attend only to their own textual descriptions via a spatiotemporal mask, avoiding actor\-action mismatch and disordered social dynamics\. Directional Reweighting amplifies attention to directional words \(e\.g\., "leftward", "right"\), leading each action towards its intended target\. To evaluate generated social interactions, we annotate existing datasets with interaction descriptions and build a fully automated evaluation pipeline powered by open\-source VLMs\. Experiments on different video generation models show that SocialDirector significantly improves interaction fidelity and approaches the upper bound set by real videos\.

## LDM\-is\-AE: Latent Diffusion is an Intrinsic Auto\-Encoder for End\-to\-End Image Generation

**Authors:** Zhengqiang ZHANG; Lingchen Sun; Rongyuan Wu; Qiaosi Yi; Xiangtao Kong; Chaodong Xiao; Lei Zhang

**ID:** 155308 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZJ78XqDXZ>) | [PDF](<https://openreview.net/pdf?id=6ZJ78XqDXZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155308>)

Latent Diffusion Models \(LDMs\) typically adopt a two\-stage pipeline: an auto\-encoder \(AE\) is first pre\-trained to define a latent space, then a diffusion model is trained to perform denoising within it\. Such a two\-stage design introduces a representation mismatch, as the latent space is optimized for reconstruction rather than adapting the denoising dynamics\. We reveal that the \*\*LDM\*\* itself \*\*is\*\* intrinsically an \*\*AE\*\*, and consequently present \*\*LDM\-is\-AE\*\*, an end\-to\-end one\-stage LDM training framework that eliminates the need for a separately trained tokenizer\. Our key observation is that the LDM backbone actually performs a \*latent\-to\-feature\-to\-latent\* transformation at each denoising step, which can be interpreted as an internal decoding\-\-encoding process\. Leveraging this structure, we split the DiT backbone into two reciprocal components, \*\*DiT\-E\*\* \(i\.e\., DiT Encoding\) and \*\*DiT\-D\*\* \(i\.e\., DiT Decoding\), and impose image\-space supervision on the intermediate features across all timesteps\. Our model encourages the internal representation to align with the image domain throughout denoising, thereby establishing an explicit \*latent\-to\-image\-to\-latent\* path\. At the zero\-noise timestep, our model further performs an \*image\-to\-latent\-to\-image\* mapping, corresponding to an auto\-encoding process\. As a result, LDM\-is\-AE jointly learns latent representations and denoising dynamics in an end\-to\-end manner, yielding a diffusion\-native latent space tailored to the generation process\. Experiments demonstrate that LDM\-is\-AE exhibits highly competitive generation performance, achieving an FID of 1\.84 on class\-conditional image generation\. Code and models will be released\.

## D2D: Detector\-to\-Differentiable Critic for Improved Numeracy in Text\-to\-Image Generation

**Authors:** Nobline Yoo; Olga Russakovsky; Ye Zhu

**ID:** 153310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MFUdIySxW3>) | [PDF](<https://openreview.net/pdf?id=MFUdIySxW3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153310>)

Text\-to\-image \(T2I\) diffusion models have achieved strong performance in semantic alignment, yet they still struggle with generating the correct number of objects specified in prompts\. Existing approaches typically incorporate auxiliary counting networks as external critics to enhance numeracy\. However, since these critics must provide gradient guidance during generation, they are restricted to regression\-based models that are inherently \\emph\{differentiable\}, thus excluding detector\-based models with superior counting ability, whose count\-via\-enumeration nature is \\emph\{non\-differentiable\}\. To overcome this, we propose \\textbf\{Detector\-to\-Differentiable\} \(\\emph\{D2D\}\), a novel framework that transforms non\-differentiable detection models into differentiable critics, leveraging their superior counting ability to guide numeracy generation\. Specifically, we design custom activation functions to convert detector logits into soft binary indicators, which are then used to optimize the noise prior at inference time with pre\-trained T2I models\.  Our extensive experiments on SDXL\-Turbo, SD\-Turbo, and Pixart\-DMD across four benchmarks of varying complexity \(low\-density, high\-density, and multi\-object scenarios\) demonstrate consistent and substantial improvements in object counting accuracy \(e\.g\., boosting up to 13\.7\\% on D2D\-Small, a 400\-prompt, low\-density benchmark\), with minimal degradation in overall image quality and computational overhead\.

## EntiRE: Invariant Learning for Robust Concept Erasure in Text\-to\-Image Generative Models

**Authors:** Fengyuan Yu; Yuyuan Li; Xiaohua Feng; Li Zhang; Jiaming Zhang; Xiang Liu; Jun Wang; Chaochao Chen

**ID:** 151144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ch8Vn8e6ZM>) | [PDF](<https://openreview.net/pdf?id=ch8Vn8e6ZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151144>)

Large\-scale text\-to\-image diffusion models can inadvertently generate harmful or sensitive content learned from uncurated training data, motivating the development of concept erasure methods that remove undesired concepts from pre\-trained models\. However, recent studies reveal that erased models remain vulnerable to adversarial prompt attacks that recover the supposedly removed concepts, highlighting the need for robust erasure techniques\. In this work, we visualize the text embedding distributions of adversarial prompts and find that the difficulty of erasure is non\-uniform\. Existing methods effectively erase concepts in easier regions but leave localized residual holes in harder regions, which adversarial prompts consistently exploit\. Motivated by this finding, we propose Entire\-space Robust Erasure \(EntiRE\), an end\-to\-end framework that casts robust concept erasure as an out\-of\-distribution generalization problem\. By adopting an invariant learning formulation regularized by total variation, EntiRE enforces more uniform erasure across the continuous prompt space, suppressing the localized residual regions\. Extensive experiments on erasing nudity, artistic style, and object concepts demonstrate that EntiRE consistently outperforms state\-of\-the\-art baselines in both robustness against adversarial prompt attacks and utility preservation\.

## EPIC: Efficient Predicate\-Guided Inference\-Time Control for Compositional Text\-to\-Image Generation

**Authors:** Sunung Mun; Sunghyun Cho; Jungseul Ok

**ID:** 152068 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ViGYqNSZKu>) | [PDF](<https://openreview.net/pdf?id=ViGYqNSZKu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152068>)

Recent text\-to\-image \(T2I\) generators can synthesize realistic images, but still struggle with compositional prompts involving multiple objects, counts, attributes, and relations\. We introduce EPIC \(Efficient Predicate\-Guided Inference\-Time Control\),  a training\-free inference\-time refinement framework for compositional T2I generation\. EPIC casts refinement as predicate\-guided search: it parses the original prompt once into a fixed visual program of object variables and typed predicates, covering checkable conditions such as object presence, counts, attributes, and relations\. Each generated or edited image is verified against this program using visual evidence extracted from that image\. An image is judged to satisfy the prompt only when all predicates are satisfied; otherwise, failed predicates decide the next step, routing local failures to targeted editing and global failures to resampling while the fixed visual program remains unchanged\. On GenEval2, EPIC improves prompt\-level accuracy from 34\.16% for single\-pass generation with the base generator to 71\.46%\. Under the same generator/editor setting and maximum image\-model execution budget, EPIC outperforms the strongest prior refinement baseline by 19\.23 points while reducing realized cost by 31% in image\-model executions, 72% in MLLM calls, and 81% in MLLM tokens per prompt\.

## SpecLoR: Spectral Lookahead Rectification for Motion\-Coherent Text\-to\-Video Generation

**Authors:** Xu Zhang; Yu Lu; Ruijie Quan; Zhaozheng CHEN; Bohan Wang; Yi Yang

**ID:** 152867 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PoLjtyYc3T>) | [PDF](<https://openreview.net/pdf?id=PoLjtyYc3T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152867>)

Flow Matching has enabled robust text\-to\-video generation via latent ODE sampling\. However, velocity approximation and numerical discretization errors inevitably accumulate, causing sampling trajectories to drift\. Consequently, generated videos often suffer from severe spatiotemporal inconsistencies, such as physically implausible motions\. Yet, directly correcting these drifted noisy latents is challenging: timestep\-dependent noise obscures reliable structural cues, and spatial interventions risk disrupting fragile local geometry while incurring heavy computational costs\. To address this, we propose Spectral Lookahead Rectification \(SpecLoR\), a plug\-and\-play inference method that bypasses noise via lookahead prediction\. It also circumvents spatiotemporal entanglement by shifting corrections to the frequency domain, where universal statistical natural\-video priors are readily available\. First, during early sampling stages, SpecLoR looks ahead to estimate the clean latent $z\_\{t,0\}$ and computes its 3D spatiotemporal spectrum\. Next, SpecLoR rectifies only the amplitude to match the statistical prior, leaving the phase intact\. Finally, the corrected state is re\-noised to resume ODE integration\. Experiments on Wan2\.2 demonstrate that SpecLoR significantly reduces physical artifacts and enhances motion coherence across multiple benchmarks with minimal computational overhead \(4 additional NFEs in a 40\-step schedule\)\. Code will be released\.

## Seeing the World through Any Eyes

**Authors:** Yang Fu; Jianqin Wang; Xiangtai Li; Henghui Ding

**ID:** 154102 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GEPHFHPezV>) | [PDF](<https://openreview.net/pdf?id=GEPHFHPezV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154102>)

Egocentric video generation aims to synthesize first\-person visual experiences, enabling applications in filmmaking, virtual reality, and embodied AI\. Generating egocentric videos from exocentric observations is particularly challenging, as it requires reasoning across large viewpoint changes, limited visual overlap, and substantially different camera motions\. To address these modeling challenges, we propose \*\*EgoEye\*\*, a framework that generates egocentric videos from a single exocentric input video\. EgoEye integrates reward\-guided egocentric context reasoning for inferring unseen first\-person content, multi\-stage motion alignment for enforcing cross\-view temporal consistency, and egocentric pretraining for improving first\-person realism\. To support training and evaluation under diverse and distortion\-free exo\-ego settings, we further introduce \*\*EgoScape\*\*, a large\-scale dataset comprising  19\.5K time\-aligned exo\-ego video pairs and 24\.2K in\-the\-wild egocentric videos\. EgoScape provides paired cross\-view supervision while enriching the first\-person visual priors needed for realistic egocentric synthesis\. Extensive experiments demonstrate that the proposed EgoEye generates realistic and temporally consistent egocentric videos across diverse scenarios\.

## 2D Spatial Reasoning with Adaptive Neural Cellular Automata

**Authors:** Martin Spitznagel; Janis Keuper

**ID:** 154751 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BE5GW03vMR>) | [PDF](<https://openreview.net/pdf?id=BE5GW03vMR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154751>)

Many modern learning approaches are still struggling with spatial reasoning tasks, i\.e\. they lack the ability to utilize geometric information of perceived entities and their spatial relation to each other to solve problems\. We introduce a novel Adaptive Neural Cellular Automata \(aNCA\) architecture which uses deformable convolutions to dynamically adapt the perceptive field and iteratively reason over 2D spatial relations on grid\-like data structures \(e\.g\. images\)\. Empirical results on public benchmarks show state of the art comprehensible results with high generalization abilities for solving image based puzzles like Sudoku or finding the shortest path in a maze\.

## AR\-Edit: Training\-Free Streaming Video Editing without Inversion

**Authors:** Hovhannes Margaryan; Vicky Kalogeiton; Quentin Bammey; Christian Sandor

**ID:** 152336 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tq0zQSyHNl>) | [PDF](<https://openreview.net/pdf?id=Tq0zQSyHNl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152336>)

Editing a video stream in real time, without access to future frames, is essential for interactive applications\. Existing training\-free video editing methods, however, assume full offline access to the entire sequence, while streaming approaches either rely on additional training or are limited to specific editing techniques\. We show that this limitation can be removed by analyzing the self\-attention dynamics of DMD\-distilled autoregressive video diffusion models\. We uncover a key asymmetry: queries and keys remain stable and aligned with their source counterparts across denoising timesteps, while values diverge and encode the evolving content\. This observation leads to a simple mechanism: a single forward pass suffices to capture source identity in the value features, which can be reused throughout generation\. Starting from pure Gaussian noise and injecting only these source values reconstructs the input with fidelity matching inversion\-based methods, effectively eliminating inversion\. Based on this insight, we introduce AR\-Edit, a training\-free, inversion\-free method that caches source values once and selectively injects them during autoregressive denoising, enabling real\-time, structure\-preserving streaming video editing with minimal overhead\. Code will be released\.

## Proprio: Latent Self\-Scoring and Inference\-Time Refinement for Physically Plausible Video Generation

**Authors:** Mariam Hassan; Kaouther Messaoud; WUYANG LI; Alexandre Alahi

**ID:** 154132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G2dezZZe2J>) | [PDF](<https://openreview.net/pdf?id=G2dezZZe2J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154132>)

Modern video generative models produce visually impressive results, yet frequently violate basic physical principles\. We propose \\textbf\{Proprio\}, a training\-free framework that enables a frozen video generator to assess and improve the physical plausibility of its own outputs\. Inspired by \\textit\{proprioception\}, the biological sense of one’s own movement, Proprio treats the model's flow residual under controlled latent perturbations as a self\-scoring signal\. Samples that are better explained by the generator's learned dynamics induce smaller and more stable residuals\. We aggregate this signal across timesteps and perturbations, focus it on motion\-relevant regions with a dynamic spatiotemporal mask, and use it for best\-of\-N search, gradient\-based self\-refinement, or both\. Across text\-to\-video and image\-to\-video benchmarks, Proprio consistently improves physical plausibility, outperforming VLM\-based scoring, and external world\-model baselines in several settings\. On TurboWan2\.2, Proprio improves Physics\-IQ from 32\.2 to 37\.5 \(\+16\.5%\) and VideoPhy2\-hard physical commonsense from 45\.6 to 55\.0 \(\+20\.6%\)\. Human evaluation further shows that raters prefer Proprio\-selected or refined videos for physical plausibility in roughly two\-thirds of comparisons\. These results suggest that frozen video generators contain actionable internal signals for evaluating and improving the physical plausibility of their own outputs\.

## Focus, Align, and Diffuse: Time\-Series\-Aware Keyframe Diffusion for Cardiac Dynamic Synthesis from Sparse Observations

**Authors:** Junkai Liu; Haofan Wu; Nay Aung; Joao A Lima; Steffen E Petersen; Le Zhang

**ID:** 149269 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=raQ4FzC3ZA>) | [PDF](<https://openreview.net/pdf?id=raQ4FzC3ZA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149269>)

Dense cardiac dynamics are essential for assessing cardiac function, yet in practice clinicians often observe only extremely sparse measurements\. However, recovering full dynamics from such sparsity is a highly ill\-posed problem due to the lack of temporal cues\. While auxiliary time\-series signals like ECG provide physiological guidance, effectively exploiting them is challenging due to the cross\-modal representation gap and phase misalignment\. In this work, we present CardioFAD, a Focus\-\-Align\-\-Diffuse paradigm that reformulates sparse cardiac dynamic synthesis as a recoverability\-\-alignability anchor discovery problem\. Our core insight is that resolving extreme temporal ambiguity requires a compact set of anchor states that are both sufficient to recover the visual trajectory and reliable for ECG\-\-visual alignment\. We therefore learn motion\-salient keyframes under two complementary principles: trajectory sufficiency, which preserves trajectory\-critical intra\-modal motion content, and anchor alignment, which promotes consistent inter\-modal correspondence at these anchors\. We implement the Focus and Align modules optimized by the two aspects\.Diffuse then performs two\-stage generation by first synthesizing keyframes and subsequently interpolating the remaining frames\. Extensive experiments on cardiac MRI and echocardiography videos demonstrate superior visual quality, temporal coherence, and clinical fidelity under the extreme one\-shot regime\.

## Test\-time Scaling of Diffusions with Flow Maps

**Authors:** Amirmojtaba Sabour; Michael Albergo; Carles Domingo i Enrich; Nicholas Boffi; Sanja Fidler; Karsten Kreis; Eric Vanden\-Eijnden

**ID:** 154289 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EtFrLaqiA4>) | [PDF](<https://openreview.net/pdf?id=EtFrLaqiA4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154289>)

A common recipe to improve diffusion models at test\-time so that samples score highly against a user\-specified reward is to introduce the gradient of the reward into the dynamics of the diffusion itself\. This procedure is often ill posed, as user\-specified rewards are usually only well defined on the data distribution at the end of generation\. While common workarounds to this problem are to use an approximate denoiser to estimate what a sample would have been at the end of generation, we propose a simple solution to this problem by working directly with a flow map\. By exploiting a relationship between the flow map and velocity field governing the instantaneous transport, we construct an algorithm, Flow Map Trajectory Tilting \(FMTT\), which leverages a fast yet precise flow map look\-ahead and provably performs better ascent on the reward than standard test\-time methods involving the gradient of the reward\. The approach can be used to either perform exact sampling via importance weighting or principled search that identifies local maximizers of the reward\-tilted distribution\. We demonstrate the efficacy of our approach against other look\-ahead techniques, and show how the flow map enables engagement with complicated reward functions that make possible new forms of image editing, e\.g\. by interfacing with vision language models\.

## DiRotQ: Rotation\-Aware Quantization for 4\-bit Diffusion Transformers

**Authors:** Sayeh Sharify; Mahsa Salmani; Hesham Mostafa

**ID:** 155781 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2vvKmRgMuy>) | [PDF](<https://openreview.net/pdf?id=2vvKmRgMuy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155781>)

Diffusion Transformers \(DiTs\) achieve state\-of\-the\-art image generation quality but incur substantial memory and computational costs at inference\. While aggressive Post\-Training Quantization \(PTQ\) to 4\-bit precision offers significant efficiency gains, it typically results in severe quality degradation\. Existing approaches, including smoothing\-based methods, mixed\-precision schemes, rotation techniques, and low\-rank residual methods, partially mitigate this issue but still leave a noticeable gap to FP16/BF16 performance\. In this work, we introduce \*DiRotQ\*, a W4A4 PTQ framework that mitigates this degradation through rotation\-aware activation quantization\. DiRotQ identifies a low\-rank subspace capturing dominant activation variance via Principal Component Analysis \(PCA\), preserving coefficients in this subspace at higher precision while quantizing the remaining components to 4\-bit\. Activations are rotated into the PCA basis at inference time using calibration\-derived orthogonal transformations, while the inverse rotation is fused into the layer weights offline\. Combined with GPTQ\-based weight quantization, DiRotQ achieves an FID $\(\\downarrow\)$ of $15\.9$ and PSNR $\(\\uparrow\)$ of $19\.1$ dB on PixArt\-$\\Sigma$ over the MJHQ\-30K dataset, outperforming the prior state\-of\-the\-art SVDQuant \(FID $18\.9$, PSNR $17\.6$\) under the same INT W4A4 setting\. Beyond standard metrics, we introduce a \*VLM\-as\-a\-Judge\* evaluation protocol for diffusion model quantization, the first such evaluation in this setting, providing a more holistic assessment of perceptual quality and prompt alignment under aggressive compression\. On the systems side, we implement a \*Triton\-based custom kernel\* to enable efficient end\-to\-end inference, reducing memory usage of the 12B FLUX\.1\-dev model by $2\.1\\times$ and delivering $2\.3\\times$ speedup over the BF16 baseline, on a 24GB RTX 4090 GPU\. Our anonymous codebase is available \[here\]\(https://anonymous\.4open\.science/r/DiRotQ\-5BF6/\)\.

## SteerVTE: Seamless Video Text Editing with Style and Glyph Control

**Authors:** Kai Zeng; Moran Li; Zhengwei Wang; Yingchen Yu; Yiheng Lin; Ruichuan An; Ming Lu; Qi She; Wentao Zhang

**ID:** 148744 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vMuUnsiZxf>) | [PDF](<https://openreview.net/pdf?id=vMuUnsiZxf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148744>)

Visual text editing aims to precisely modify text in images and videos while preserving stylistic consistency and visual realism\.  Despite significant advances in the image domain, video text editing remains largely unexplored: it is a localized task demanding stroke\-level precision within small text regions, which compounds the challenges of cross\-frame accuracy, temporal coherence, and stylistic fidelity\.  We introduce SteerVTE, a unified framework that \\underline\{\\textbf\{steer\}\}s a frozen video diffusion model to perform precise \\underline\{\\textbf\{V\}\}ideo \\underline\{\\textbf\{T\}\}ext \\underline\{\\textbf\{E\}\}diting through style and glyph control\.  Built on a frozen diffusion transformer, SteerVTE attaches a lightweight text context adapter with two complementary modules: a style encoder capturing the original text's visual attributes, and dual\-granularity glyph encoders encoding the target text at both the line and character levels\. To overcome the inherently weak text rendering priors of video foundation models, we further propose a glyph\-aware spatial\-focal loss and a three\-stage progressive training curriculum that scales from image to video data\. To support large\-scale training, we also develop an automatic synthesis pipeline and construct SteerVTE\-1M, a dataset of one million triplets spanning diverse scenes, fonts, and stylistic effects\. Extensive experiments demonstrate that SteerVTE substantially outperforms existing video editing baselines across text accuracy, style consistency, and temporal coherence\. Our anonymous project website is available at \\url\{https://steervte\-paper\.github\.io\}\.

## Apple\-$\\pi$: Benchmarking Thinking with Video Towards Law\-Grounded Physical Intelligence

**Authors:** Runmao Yao; Kairui Hu; Yukang Cao; Ruisi Wang; Shulin Tian; Ziang Cao; Weichen Fan; Ziqi Huang; Yuhao Dong; Hao Li; Zhaoxi Chen; Zhongang Cai; Lei Yang; Ziwei Liu

**ID:** 139053 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nwMoRojkLQ>) | [PDF](<https://openreview.net/pdf?id=nwMoRojkLQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139053>)

Modern video generation models are increasingly hailed as emerging world models with an internalized grasp of physical law\. Yet existing benchmarks largely evaluate physical plausibility only at the output level, without verifying whether the model arrives there through a faithful, law\-grounded reasoning process\. We introduce \*\*Apple\-$\\pi$\*\*, the first benchmark that anchors video\-model evaluation explicitly in physical laws\. Apple\-$\\pi$ comprises three components\. \*\*1\) Orchard\*\*: a dataset of 400 videos covering ten canonical tasks in classical mechanics\. It separates single\-law tasks for confounder\-free diagnosis from multi\-law tasks for probing generalization\. \*\*2\) Benchmark Protocol\*\*: a three\-stage protocol based on scientific reasoning, including Perception, Formulation, and Deduction\. It uses \*chain\-of\-frames\* prompting on infographic\-annotated first frames, treating the generated video as the model's visible reasoning trace\. \*\*3\) Evaluation Suite\*\*: a hybrid evaluation suite that combines MLLM\-based subjective scoring with physics\-law\-grounded objective measures\. This enables stage\-resolved diagnosis of not only whether a model fails, but where it fails\. Benchmarking 11 models shows that current video models remain far from reliable law\-grounded world simulators, with the best video model scoring only 0\.473\. Our stage\-, pillar\-, and source\-resolved analyses further expose a Perception\-to\-Formulation\-to\-Deduction bottleneck, weak multi\-law state transfer, and a persistent Sim\-to\-Real gap\. These findings position Apple\-$\\pi$ as a diagnostic foundation for guiding future video models toward world models with law\-grounded physical intelligence\.

## SteerVTE: Seamless Video Text Editing with Style and Glyph Control

**Authors:** Kai Zeng; Moran Li; Zhengwei Wang; Yingchen Yu; Yiheng Lin; Ruichuan An; Ming Lu; Qi She; Wentao Zhang

**ID:** 148744\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148744

[Paper](<https://openreview.net/forum?id=vMuUnsiZxf>) | [PDF](<https://openreview.net/pdf?id=vMuUnsiZxf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148744>)

Visual text editing aims to precisely modify text in images and videos while preserving stylistic consistency and visual realism\.  Despite significant advances in the image domain, video text editing remains largely unexplored: it is a localized task demanding stroke\-level precision within small text regions, which compounds the challenges of cross\-frame accuracy, temporal coherence, and stylistic fidelity\.  We introduce SteerVTE, a unified framework that \\underline\{\\textbf\{steer\}\}s a frozen video diffusion model to perform precise \\underline\{\\textbf\{V\}\}ideo \\underline\{\\textbf\{T\}\}ext \\underline\{\\textbf\{E\}\}diting through style and glyph control\.  Built on a frozen diffusion transformer, SteerVTE attaches a lightweight text context adapter with two complementary modules: a style encoder capturing the original text's visual attributes, and dual\-granularity glyph encoders encoding the target text at both the line and character levels\. To overcome the inherently weak text rendering priors of video foundation models, we further propose a glyph\-aware spatial\-focal loss and a three\-stage progressive training curriculum that scales from image to video data\. To support large\-scale training, we also develop an automatic synthesis pipeline and construct SteerVTE\-1M, a dataset of one million triplets spanning diverse scenes, fonts, and stylistic effects\. Extensive experiments demonstrate that SteerVTE substantially outperforms existing video editing baselines across text accuracy, style consistency, and temporal coherence\. Our anonymous project website is available at \\url\{https://steervte\-paper\.github\.io\}\.

## Apple\-$\\pi$: Benchmarking Thinking with Video Towards Law\-Grounded Physical Intelligence

**Authors:** Runmao Yao; Kairui Hu; Yukang Cao; Ruisi Wang; Shulin Tian; Ziang Cao; Weichen Fan; Ziqi Huang; Yuhao Dong; Hao Li; Zhaoxi Chen; Zhongang Cai; Lei Yang; Ziwei Liu

**ID:** 139053\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139053

[Paper](<https://openreview.net/forum?id=nwMoRojkLQ>) | [PDF](<https://openreview.net/pdf?id=nwMoRojkLQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139053>)

Modern video generation models are increasingly hailed as emerging world models with an internalized grasp of physical law\. Yet existing benchmarks largely evaluate physical plausibility only at the output level, without verifying whether the model arrives there through a faithful, law\-grounded reasoning process\. We introduce \*\*Apple\-$\\pi$\*\*, the first benchmark that anchors video\-model evaluation explicitly in physical laws\. Apple\-$\\pi$ comprises three components\. \*\*1\) Orchard\*\*: a dataset of 400 videos covering ten canonical tasks in classical mechanics\. It separates single\-law tasks for confounder\-free diagnosis from multi\-law tasks for probing generalization\. \*\*2\) Benchmark Protocol\*\*: a three\-stage protocol based on scientific reasoning, including Perception, Formulation, and Deduction\. It uses \*chain\-of\-frames\* prompting on infographic\-annotated first frames, treating the generated video as the model's visible reasoning trace\. \*\*3\) Evaluation Suite\*\*: a hybrid evaluation suite that combines MLLM\-based subjective scoring with physics\-law\-grounded objective measures\. This enables stage\-resolved diagnosis of not only whether a model fails, but where it fails\. Benchmarking 11 models shows that current video models remain far from reliable law\-grounded world simulators, with the best video model scoring only 0\.473\. Our stage\-, pillar\-, and source\-resolved analyses further expose a Perception\-to\-Formulation\-to\-Deduction bottleneck, weak multi\-law state transfer, and a persistent Sim\-to\-Real gap\. These findings position Apple\-$\\pi$ as a diagnostic foundation for guiding future video models toward world models with law\-grounded physical intelligence\.

## GMO\-E²DIT: Grounded Multi\-Operation Editing for E\-Commerce Images

**Authors:** Zipeng Guo; Xiaoan Liu; Lichen Ma; Cheng Wang; Yu He; Xiaolong Fu; Jingling Fu; Xinyuan Shan; Shaojie Guo; Luohang Liu; Junshi Huang; Yan Li

**ID:** 152097\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152097

[Paper](<https://openreview.net/forum?id=VXvQ42upd6>) | [PDF](<https://openreview.net/pdf?id=VXvQ42upd6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152097>)

_Abstract unavailable from the accessible public sources._

## T3\-S2S: Training\-free Triplet Tuning for Sketch to Scene Generation

**Authors:** Zhenhong Sun; Yifu Wang; Yonhon Ng; Yongzhi Xu; Daoyi Dong; Hongdong Li; Pan Ji

**ID:** 156794\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156794

[Paper](<https://openreview.net/forum?id=lyn2BgKQ8F>) | [PDF](<https://openreview.net/pdf?id=lyn2BgKQ8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156794>)

Scene generation is crucial to many computer graphics applications\. Recent advances in generative AI have streamlined sketch\-to\-image workflows, easing the workload for artists and designers in creating scene concept art\. However, these methods often struggle with complex scenes with multiple detailed objects, sometimes missing small or uncommon instances\. In this paper, we propose a Training\-free Triplet Tuning for Sketch\-to\-Scene \(T
\-S2S\) generation after reviewing the entire cross\-attention mechanism\. This scheme revitalizes the existing ControlNet model, enabling effective handling of multi\-instance generations, involving prompt balance, characteristics prominence, and dense tuning\. Specifically, this approach enhances keyword representation via the prompt balance module, reducing the risk of missing critical instances\. It also includes a characteristics prominence module that highlights TopK indices in each channel, ensuring essential features are better represented based on token sketches\. Additionally, it employs dense tuning to refine contour details in the attention map, compensating for instance\-related regions\. Experiments validate that our triplet tuning approach substantially improves the performance of existing sketch\-to\-image models\. It consistently generates detailed, multi\-instance 2D images, closely adhering to the input prompts and enhancing visual quality in complex multi\-instance scenes\.

## RefineTok: Scale\-Wise Tokenization for Progressive Visual Refinement

**Authors:** Yitian Zhang; Long Mai; Yizhou Wang; Yun Fu

**ID:** 153374\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153374

[Paper](<https://openreview.net/forum?id=Lqj3ggQn8V>) | [PDF](<https://openreview.net/pdf?id=Lqj3ggQn8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153374>)

Image tokenization aims to compress visual signals into latent codes that remain effective for reconstruction and generation\.  Driven by the multi\-scale nature of images, organizing latent along a coarse\-to\-fine refinement process emerges as a promising direction for visual tokenization\.  Existing scale\-wise tokenizers often introduce this structure through token ordering or latent prefixes, but each target scale is typically decoded directly from its prefix, making different prefixes behave like separate reconstruction codes\.  This can lead to redundant encoding of global structure across scales and limits the effectiveness of compact token budgets\. We propose RefineTok, a scale\-wise continuous tokenizer that makes decoding itself progressive\.  RefineTok carries a visual state across scales and uses each latent prefix to refine the previous state into the next scale, turning scale\-wise latents into incremental refinement signals rather than independent reconstruction codes\.  This design yields a compact and structured latent interface for both reconstruction and downstream generation\.  Together with prefix\-level training, a coarse\-centric scale trajectory, and a semantic anchor, RefineTok achieves strong reconstruction fidelity among scale\-wise tokenizers and competitive class\-conditional generation on ImageNet\-1K under compact latent budgets\. Meanwhile, it preserves a progressive scale\-wise interface that single\-scale tokenizers do not provide\.

## RoPEMover: Depth\-Aware Object Relocation via Positional Embeddings

**Authors:** Ipek Oztas; Duygu Ceylan; Aybars B Aksoy; Aysegul Dundar

**ID:** 154176\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154176

[Paper](<https://openreview.net/forum?id=FhXYTQAvpV>) | [PDF](<https://openreview.net/pdf?id=FhXYTQAvpV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154176>)

Moving an object in a single image requires geometry\-consistent spatial rearrangement, including handling occlusions, revealing previously unseen regions, and maintaining coherent shadows and reflections\. Existing approaches are not well suited to this setting and often fail to preserve such scene\-level consistency\. We address this problem by introducing a geometry\-aware object motion method that operates directly on the internal representations of diffusion transformers\. Our key insight is that rotary positional embeddings \(RoPE\) define a structured spatial field that can be explicitly manipulated to induce controlled motion\. We extend 2D RoPE into a depth\-aware formulation that encodes 3D spatial structure, enabling consistent object displacement and scene\-aware updates\. Our model is trained using synthetic data combined with a small set of real images via parameter\-efficient fine\-tuning\. Despite minimal real supervision, it preserves object identity under large spatial displacements, generates plausible content in newly revealed regions, and consistently updates scene\-dependent effects such as shadows and illumination\. Experimental results demonstrate the superiority of our method\.

## FiRe: Fine\-grained Multimodal Reasoning for Enhanced Image Generation

**Authors:** Yongjin Kim; Yoonjin Oh; Ye Rin Kim; Hyomin Kim; Jeeyoung Yun; Yu\-Jung Heo; Min\-Jun Kim; Sungwoong Kim

**ID:** 152686\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152686

[Paper](<https://openreview.net/forum?id=RBlcBaykle>) | [PDF](<https://openreview.net/pdf?id=RBlcBaykle>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152686>)

With the rapid progress of Multimodal Large Language Models \(MLLMs\), unified MLLMs that jointly perform image understanding and generation have advanced significantly\. However, despite the inherent reasoning capabilities of unified MLLMs for self\-reflection and self\-refinement, their use in text\-to\-image generation remains largely underexplored\. Meanwhile, existing multimodal reasoning–based image generation methods mostly rely on prompt augmentation or holistic image–text alignment judgments, without fine\-grained reflection and refinement of detailed prompt attributes, leading to limited fine\-grained control\. To address this limitation, we propose FiRe, a Fine\-grained Multimodal Reasoning method for enhanced image generation by MLLM\. In specific, FiRe performs a fine\-grained multi\-step reasoning by first decomposing the prompt into key visual requirements and then self\-judging their satisfaction in the generated image, followed by localized refinement according to self\-generated precise feedback\. In addition, to further strengthen the MLLM's multimodal reasoning ability, we introduce FiRe\-GRPO, a reinforcement learning method tailored to FiRe\. Since standard Group Relative Policy Optimization \(GRPO\) suffers from sparse, outcome\-based rewards in multi\-step reasoning, we formulate our reasoning process as a step\-level decision\-making problem, design step\-specific rewards, and compute step\-level advantages for granular credit assignment within GRPO\. Extensive experiments demonstrate that FiRe consistently outperforms competitive text\-to\-image baselines, including existing reasoning\-based methods, with particularly substantial gains on compositional text\-to\-image benchmarks\.

## TaxaAdapter: Scaling Fine\-grained Species Image Generation To the Tree of Life

**Authors:** Mridul Khurana; Amin Karimi Monsefi; Justin Lee; Medha Sawhney; David Carlyn; Julia Chae; Jianyang Gu; Rajiv Ramnath; Sara Beery; Wei\-Lun \(Harry\) Chao; Anuj Karpatne; Cheng Zhang

**ID:** 151638\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151638

[Paper](<https://openreview.net/forum?id=Z6V0C7ASfq>) | [PDF](<https://openreview.net/pdf?id=Z6V0C7ASfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151638>)

Accurately generating images across the Tree of Life is difficult: there are over 10M distinct species on Earth, many of which differ only by subtle visual traits\. Despite the remarkable progress in text\-to\-image synthesis, existing models often fail to capture the fine\-grained visual cues that define species identity, even when their outputs appear photo\-realistic\. To this end, we propose TaxaAdapter, a simple and lightweight adapter that incorporates the taxonomic embeddings of Vision Taxonomy Models \(VTMs\) such as BioCLIP to perform scalable fine\-grained species generation over the entire Tree of Life\. TaxaAdapter injects VTM embeddings using taxonomy\-text dual conditioning into a frozen text\-to\-image diffusion model, improving species\-level fidelity while preserving flexible text control over attributes such as pose, style, and background\. Extensive experiments demonstrate that TaxaAdapter consistently improves morphology fidelity and species\-identity accuracy over strong baselines\. To better evaluate these improvements, we also introduce a multimodal Large Language Model\-based metric that summarizes trait\-level descriptions from generated and real images, providing a more interpretable measure of morphological consistency\. Beyond showing improvements over standard benchmarking experiments, we observe that TaxaAdapter exhibits strong generalization capabilities in open\-world settings, enabling species synthesis in challenging regimes such as few\-shot species with only a handful of training images and even species unseen during training\. Overall, our results highlight that VTMs are a key ingredient for scalable, fine\-grained species generation\.

## AdaState: Self\-Evolving Anchors for Streaming Video Generation

**Authors:** Yusuf Dalva; Pinar Yanardag

**ID:** 150868\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150868

[Paper](<https://openreview.net/forum?id=elLf1P8oAQ>) | [PDF](<https://openreview.net/pdf?id=elLf1P8oAQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150868>)

Autoregressive video diffusion models generate streaming video by producing frames sequentially, conditioning each chunk on previously generated content\. These models are structurally anchored to the first frame: its key\-value representation occupies a privileged position in the attention cache and serves as the primary scene reference throughout generation\. As the cleanest and most error\-free position in the cache, this anchor draws disproportionate attention, suppressing video dynamics, and locking scene composition to the initial viewpoint even as the scene naturally evolves\. The result is a temporally shallow video in which motion, camera movement, and scene progression are dampened in favor of static consistency\. To address this, we replace the static anchor with an adaptive state, a hidden latent that the model denoises alongside content at every chunk but never generates\. Rather than referencing a frozen first frame, the model generates its own scene anchor at each step by attending to both the previous state and the current content, producing a reference that evolves with the generated content\. Unlike standard video generation, which encodes an absolute notion of time, our formulation treats time as relative: every generation step sees the same positional structure regardless of how far generation has progressed, and the state transition is identical at every chunk\. Together, these properties introduce a recurrence into the generation process, where denoising serves as the transition function, and the KV cache serves as the carrier, requiring no external module\. Experiments demonstrate that the adaptive state substantially improves video dynamics, enabling richer motion and natural scene progression within generated videos\.

## RAVEL: Rare Concept Generation and Editing via Graph\-driven Relational Guidance

**Authors:** Kavana Venkatesh; Yusuf Dalva; Ismini Lourentzou; Pinar Yanardag

**ID:** 150127\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150127

[Paper](<https://openreview.net/forum?id=kU5GAMEqa5>) | [PDF](<https://openreview.net/pdf?id=kU5GAMEqa5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150127>)

Despite rapid advances in text\-to\-image \(T2I\) generation, current models often struggle with rare, compositional, and culturally grounded concepts where training data is sparse and visual priors are weak or absent\. Increasing model capacity or prompt detail alone does not consistently resolve these challenges, particularly in long\-tail settings where attribute grounding remains unstable due to attention skew, semantic collapse, and needle\-in\-a\-haystack retrieval dynamics\. We introduce RAVEL, a training\-free framework that improves rare concept generation, context\-driven image editing, and self\-correction by integrating graph\-based retrieval\-augmented generation \(RAG\) into T2I pipelines\. Unlike prior RAG and LLM\-enhanced approaches that rely on visual exemplars, static captions, or implicit model knowledge, RAVEL leverages structured knowledge graphs to retrieve targeted compositional, symbolic, and relational context, enabling more precise grounding even in the absence of visual priors\. To further refine generation quality, we propose SRD, a self\-correction module that iteratively updates prompts using multi\-aspect alignment feedback, improving attribute accuracy, narrative coherence, and semantic fidelity\. Our framework is model\-agnostic and is compatible with leading diffusion and autoregressive models, including Stable Diffusion XL, Flux, DALL\-E 3, GLM\-Image, and Janus\-Pro\. We conduct extensive evaluations across three newly proposed benchmarks: MythoBench, Rare\-Concept\-1K, and NovelBench, and show consistent improvements over SOTA baselines across perceptual, alignment, and LLM\-as\-a\-Judge metrics, while also demonstrating stable and interpretable refinement trajectories for rare concepts across diverse model families\. These results position RAVEL as a simple and robust approach for controllable and interpretable T2I generation in long\-tail domains\. Our code is available at: https://anonymous\.4open\.science/r/ravel\-54E5/

## Accelerating Rectified Flow Models  via Trajectory\-Aware Caching

**Authors:** Xiao Liu; Kai Liu; Naiyang Guan; Hongliang Lu; Zhixin Wang; Zhikai Chen; Renjing Pei; Yulun Zhang

**ID:** 151611\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151611

[Paper](<https://openreview.net/forum?id=ZFDg4T5AAg>) | [PDF](<https://openreview.net/pdf?id=ZFDg4T5AAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151611>)

Diffusion and rectified flow \(RF\) models generate high\-fidelity images and videos, but their iterative velocity\-field evaluations are computationally expensive\. Existing caching methods accelerate sampling by skipping timesteps, yet their coarse approximations introduce accumulated errors over long skip intervals and degrade quality under aggressive acceleration\. We propose \\textbf\{TACache \(Trajectory\-Aware Cache\)\}, a training\-free acceleration framework following a \\textbf\{skip\-then\-compensate\} paradigm\. TACache performs an orthogonal decomposition of discrete velocity acceleration along the RF trajectory into parallel and orthogonal components, isolating the magnitude and directional sources of per\-step approximation error\. The framework operates in two stages: \\emph\{offline\}, cumulative variation thresholds on the magnitude and direction indicators yield the skipping schedule and bound how far each skipped interval may extend; \\emph\{online\}, at each skipped step the offline statistics are combined with the sample's historical orthogonal direction to reconstruct the skipped velocity without additional forward passes\. Experiments on BAGEL, FLUX\.1\-dev, and Wan2\.1\-1\.3B show that TACache achieves up to $4\.14\\times$ speedup on text\-to\-image generation and $2\.11\\times$ speedup on text\-to\-video generation, with consistent improvements over prior cache\-based methods on all reference\-based fidelity metrics\. Code will be released soon\.

## Probing Visual Planning in Image Editing Models

**Authors:** Zhimu Zhou; Yanpeng Zhao; Qiuyu Liao; Bo Zhao; Xiaojian \(Shawn\) Ma

**ID:** 154346 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EHLQuJxU7e>) | [PDF](<https://openreview.net/pdf?id=EHLQuJxU7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154346>)

Visual planning represents a crucial facet of human intelligence, especially in tasks that require complex spatial reasoning and navigation\. Yet, in machine learning, this inherently visual problem is often tackled through a verbal\-centric lens\. While recent research demonstrates the promise of fully visual approaches, they suffer from significant computational inefficiency due to the step\-by\-step planning\-by\-generation paradigm\. In this work, we present EAR, an editing\-as\-reasoning paradigm that reformulates visual planning as a single\-step image transformation\. To isolate intrinsic reasoning from visual recognition, we employ abstract puzzles as probing tasks and introduce AMAZE, a procedurally generated dataset that features the classical Maze and Queen problems, covering distinct, complementary forms of visual planning\. The abstract nature of AMAZE also facilitates automatic evaluation of autoregressive and diffusion\-based models in terms of both pixel\-wise fidelity and logical validity\. We assess leading proprietary and open\-source editing models\. The results show that they all struggle in the zero\-shot setting, finetuning on basic scales enables remarkable generalization to larger in\-domain scales and out\-of\-domain scales and geometries\. However, our best model that runs on high\-end hardware fails to match the zero\-shot efficiency of human solvers, highlighting a persistent gap in neural visual reasoning\.

## CoDMD: Copula\-aware Distribution Matching Distillation for Fast Video Generation

**Authors:** Wenhu Zhang; Kun Cheng; Changyuan Wang; Shiyao Li; Yuechen Zhang; Wenbo Li; Jiajun Zha; Jingyi Zhang; Kang Zhao; Jiaya Jia

**ID:** 154796 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AtixmYM4CB>) | [PDF](<https://openreview.net/pdf?id=AtixmYM4CB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154796>)

Few\-step distillation for video diffusion models has attracted significant attention, driven by the urgent demand for efficient deployment in real\-world scenarios\. However, Distribution Matching Distillation \(DMD\), a leading paradigm, tends to degrade under limited NFE budgets, manifesting in video generation as layout instability, oversaturation, and broken motion dynamics\. We trace this failure to a structural limitation: standard DMD is an intra\-sample distribution\-matching objective with coordinate\-wise gradients, and thus imposes no explicit constraint on the relational geometry across batch elements or temporal frames, leaving the underlying copula largely unregulated\. Combined with the mode\-seeking tendency of its reverse\-KL objective, this absence of relational guidance makes DMD prone to collapsing into local optima in the few\-step regime\. Motivated by this insight, we propose Copula\-aware DMD \(CoDMD\), a lightweight relational regularizer that reuses score estimates already produced by the frozen teacher and the online fake model to construct pairwise relation matrices across samples and frames\.These are matched through a supplementary distributional objective that requires no additional networks, datasets, or sampling trajectories\. On the Wan\-2\.1\-T2V model series at 1\.3B \\&amp; 14B scales, CoDMD distills 50\-step teachers into 4\-step students, achieving an approximate 25$\\times$ speed\-up while attaining VBench scores of 84\.46 \\&amp; 84\.87, outperforming prior trajectory\-based \(rCM 82\.81 \\&amp; 84\.05\) and distribution\-based \(DMD 83\.38 \\&amp; 83\.81\) methods\.

## Characterizing the Aesthetic Defaults of Generative Image Models

**Authors:** Maty Bohacek; Raina Panda; Daniel Fein; Arpita Singhal; Mark Fiore; Bill Freeman; Maneesh Agrawala

**ID:** 139666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C0BaTNbw0c>) | [PDF](<https://openreview.net/pdf?id=C0BaTNbw0c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139666>)

Contemporary text\-to\-image \(T2I\) models are widely observed to exhibit a recognizable, model\-specific look even when prompted without any stylistic instruction \(e\.g\., the so\-called \`\`Midjourney look''\)\. What such a default aesthetic actually is, however, has not been characterized: dominant T2I evaluation paradigms score realism, prompt alignment, or pairwise preference, but cannot say which concepts drive separation, how they shift across releases, or how they relate to real\-image distributions\. We address this with a concept\-level decomposition of generator outputs along an interpretable, style\-trained sparse vocabulary\. We introduce LouvreSAE, a sparse autoencoder over CLIP image embeddings whose dictionary is shaped to fall on stylistic rather than object features, and LatentAesthetic, an evaluation methodology that uses it to estimate, ground, and compare generators' default aesthetics under content\-controlled, style\-neutral prompts\. Applied to 26 generators spanning four years, our methodology surfaces stable per\-generator profiles, a uniform pull toward lifestyle and editorial photography over art\-historical imagery, and a steady cross\-family contraction of the aesthetic envelope, supporting hypotheses of an algorithmic monoculture in image generation\. Code, weights, and data are available at https://hf\.co/datasets/neurips\-subm/anonymous for the evaluation of future models\.

## Steering Away from Memorization: Reachability\-Constrained Reinforcement Learning for Text\-to\-Image Diffusion

**Authors:** Sathwik Karnik; Juyeop Kim; Sanmi Koyejo; Jong\-Seok Lee; Somil Bansal

**ID:** 149209 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s8BKAZHA8D>) | [PDF](<https://openreview.net/pdf?id=s8BKAZHA8D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149209>)

Text\-to\-image diffusion models are susceptible to memorization, revealing a fundamental failure to generalize beyond the training set\. Current mitigation approaches typically sacrifice image quality or prompt alignment to reduce memorization\. To address this, we propose \*\*R\*\*eachability\-\*\*A\*\*ware \*\*D\*\*iffusion \*\*S\*\*teering \(RADS\), an offline\-trained, inference\-time framework that mitigates memorization while maintaining generation fidelity\. RADS models the diffusion denoising process as a dynamical system and uses reachability analysis to learn a safety value function that characterizes intermediate latent states along trajectories leading to memorized samples\. This motivates a constrained reinforcement learning \(RL\) formulation, where a policy learns to steer the trajectory away from memorization via minimal perturbations in the caption embedding space\. Empirical evaluations show that RADS achieves a stronger empirical Pareto frontier between generation diversity \(SSCD\), quality \(FID\), and alignment \(CLIP\) compared to state\-of\-the\-art inference\-time baselines\. Crucially, RADS provides robust mitigation without modifying the diffusion backbone, offering a plug\-and\-play solution for diverse image generation\.

## Distance Marching for Generative Modeling

**Authors:** Zimo Wang; Ishit Mehta; Haolin Lu; Xunpeng Huang; Chung\-En Sun; Ge Yan; Lily Weng; Tzu\-Mao Li

**ID:** 152924 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PPRUA4hujO>) | [PDF](<https://openreview.net/pdf?id=PPRUA4hujO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152924>)

Modern generative models based on diffusion or flow matching transport noise toward the data manifold, without representing the data manifold explicitly\. We propose \\dm that explores an alternative design of generative modeling by explicitly modeling a distance field of the data manifold\.  Designing loss functions to learn distance fields in high\-dimensional space from point data can be challenging\. This is because the data do not provide reliable signals for closest point projection onto the manifold\. To mitigate this problem, we design new loss functions that weight training data by their proximity to each sampling position\. This distance\-field perspective naturally motivates two principled deterministic samplers, showing fast convergence in inference\. Our model is related to the recent time\-unconditional generative models since it also does not require time input, and our analysis reveals that our method helps time\-unconditional generative modeling to disambiguate the denoising problem and to avoid biasing towards the data mean\. As a result, our model is the only time\-unconditional model that remains competitive to time\-conditional ones across datasets and architectures\. Moreover, our distance prediction is also helpful for early stopping during sampling and for OOD detection\. We hope distance\-field modeling can open a promising direction for exploring generative modeling from a geometric perspective\.

## Boosting Text\-to\-Image Diffusion Models via Core Token Attention\-Based Seed Selection

**Authors:** Yunzhe Zhang; Hongfu Liu; Pengyu Hong

**ID:** 152409 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TK7VVYFzeK>) | [PDF](<https://openreview.net/pdf?id=TK7VVYFzeK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152409>)

Text\-to\-image diffusion models can synthesize high\-quality images, yet the outcome is notoriously sensitive to the random seed: different initial seeds often yield large variations in image quality and prompt–image alignment\. We revisit this “seed effect” and show that attention dynamics over prompt core tokens, the content\-bearing words, measured during the first few denoising steps, strongly predict final generation quality\. Building on this observation, we introduce Attention\-Based Seed Selection \(ABSS\), a training\-free, plug\-and\-play method that ranks seeds for a given prompt by leveraging cross\-attention to core tokens during the denoising process\. ABSS requires no finetuning and does not alter the initial noise; it scores and ranks all candidate seeds, keeps only the top\-k for full generation, and discards the rest, without relying on a fixed accept/reject threshold\. Operating purely at inference time, ABSS can serve as a lightweight pre\-selection add\-on for existing seed\-optimization pipelines, enabling additional gains\. Across three benchmarks, extensive experiments show that ABSS enables consistent improvements in text–image alignment and visual quality for Stable Diffusion variants, as corroborated by human preference and alignment metrics\.

## Slide P2V\-Bench: A Cross\-Domain Benchmark for Slide\-Centric Scientific Paper\-to\-Presentation Video Generation

**Authors:** Ligang Huang; Zhou Liu; Wentao Zhang

**ID:** 139394 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TG4XUYItHE>) | [PDF](<https://openreview.net/pdf?id=TG4XUYItHE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139394>)

_Abstract unavailable from the accessible public sources._

## Addressable Memory for Video World Models

**Authors:** Xindi Wu; Sven Elflein; James Lucas; Olga Russakovsky; Laura Leal\-Taixé; Despoina Paschalidou; Jonathan Lorraine; Aljosa Osep

**ID:** 152426 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TCL6m7hsBg>) | [PDF](<https://openreview.net/pdf?id=TCL6m7hsBg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152426>)

_Abstract unavailable from the accessible public sources._

## From Structural Feedback to Prompt Policies: Learning Faithful Text\-to\-Image Prompt Editors

**Authors:** Wentao Ye; Yali Ye; Zhiqing Xiao; Ru Peng; Xinpeng Ti; Liyao Li; Zhanming Shen; Peng Lu; Jie Zhang; Haobo Wang

**ID:** 154418 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DikML74WUt>) | [PDF](<https://openreview.net/pdf?id=DikML74WUt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154418>)

_Abstract unavailable from the accessible public sources._

## Principia: Relational Physics Tests for Video Models

**Authors:** Varun V Thozhiyoor; Shivam Tripathi; Venkatesh Babu Radhakrishnan; Anand Bhattad

**ID:** 139457 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OeH6Ijqffz>) | [PDF](<https://openreview.net/pdf?id=OeH6Ijqffz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139457>)

Evaluating physical reasoning in video models is difficult because absolute motion measurements depend on frame rate, object scale, and camera calibration, all of which are often ambiguous or unavailable in generated video\. We propose a different approach\. When two objects in the same scene obey the same physical law, their motions must satisfy predictable relationships, and these relationships hold independent of calibration\. We introduce Principia, a benchmark that evaluates Newtonian physics through relational consistency between paired objects\. Principia spans eight phenomena—gravity, restitution, friction, rotational inertia, projectile motion, momentum, pendulum, and mass\-spring oscillation—across translational, rotational, collisional, and oscillatory dynamics, using real\-world scenes recorded under controlled protocols\. We also introduce a calibration\-independent consistency score that quantifies physical violation directly in image space\. Across thousands of generations from five state\-of\-the\-art video generators, no model exceeds 0\.42 on Principia despite all scoring above 0\.7 on VBench\. Vision\-language models show inverse failure profiles, succeeding where generators fail and vice versa\.

## Sparse Video Generation Propels Real\-World Beyond\-the\-View Vision\-Language Navigation

**Authors:** Hai Zhang; Siqi Liang; Li Chen; Yuxian LI; Yukuan XU; Yichao Zhong; Fu Zhang; Hongyang Li

**ID:** 155269 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6xFifx1LaW>) | [PDF](<https://openreview.net/pdf?id=6xFifx1LaW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155269>)

Why must vision\-language navigation be bound to detailed and verbose language instructions? While such details ease decision\-making, they fundamentally contradict the goal for navigation in the real\-world\. Ideally, agents should possess the autonomy to navigate in unknown environments guided solely by simple and high\-level intents\.  Realizing this ambition introduces a formidable challenge: Beyond\-the\-View Navigation \(BVN\), where agents must locate unseen targets without step\-by\-step guidance\. Existing large language model \(LLM\)\-based methods, though adept at following dense instructions, often suffer from short\-sighted behaviors due to their reliance on short\-horizon supervision\. Simply extending the supervision horizon, however, destabilizes LLM training\. In this work, we identify that video generation models \(VGM\) inherently benefit from long\-horizon supervision to align with language instructions, rendering them uniquely suitable for BVN tasks\. Capitalizing on this insight, we propose applying VGM as the main backbone to generate actions for the first time in this field\. Yet, the prohibitive latency for generating videos spanning tens of seconds makes real\-world deployment impractical\. To bridge this gap, we propose SparseVideoNav, achieving sub\-second trajectory inference guided by a generated sparse future spanning a 20\-second horizon\. This yields a remarkable 27$\\times$ speed\-up compared to the unoptimized counterpart\. Extensive real\-world zero\-shot experiments demonstrate that SparseVideoNav achieves 2\.5$\\times$ the success rate of state\-of\-the\-art LLM baselines on BVN tasks and marks the first realization of such capability in challenging night scenes\.

## Activation Steering of Video Generation Models via Reduced\-Order Linear Optimal Control

**Authors:** Jihoon Hong; Alice Chan; Qiyue Dai; Julian Skifstad; Glen Chou

**ID:** 150198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jzkIT7ApwP>) | [PDF](<https://openreview.net/pdf?id=jzkIT7ApwP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150198>)

Text\-to\-video \(T2V\) models trained on large\-scale web data can generate undesired content, motivating interventions that reduce harmful outputs without sacrificing visual quality\. Activation steering offers an attractive mechanistic alternative to finetuning and prompt filtering, but existing T2V steering methods remain limited, typically applying coarse non\-anticipative interventions that can lead to oversteering and content degradation\. To close this gap, we propose Latent Activation Linear\-Quadratic Regulator \(LA\-LQR\), a reduced\-order optimal control framework for minimally invasive T2V steering\. LA\-LQR formulates T2V inference as a dynamical system and computes closed\-loop feedback interventions that steer activations toward desired feature setpoints while penalizing unnecessary perturbations\. To make optimal control feasible for high\-dimensional video activations, we project activations onto a low\-dimensional, task\-relevant subspace derived from contrastive prompt pairs, estimate local linear dynamics in this latent space, and solve a latent LQR problem to obtain timestep\- and layer\-specific steering signals\. We provide theoretical bounds relating latent setpoint tracking to raw activation\-space feature control, and empirically validate the fidelity of the reduced latent dynamics\. On concept steering and video safety benchmarks, LA\-LQR reduces unsafe generations relative to baselines, while preserving prompt fidelity and visual quality\.

## Rethinking Cross\-Layer Information Routing in Diffusion Transformer

**Authors:** Chao Xu; Maohua Li; Qirui Li; Yixuan Xu; Yanke Zhou; Yunhe LI; Cuifeng Shen; Hanlin Tang; Kan Liu; Tao Lan; Lin Qu; Shao\-Qun Zhang

**ID:** 154194 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FV5fsUXnll>) | [PDF](<https://openreview.net/pdf?id=FV5fsUXnll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154194>)

Diffusion Transformers \(DiTs\) have become the de facto backbone of modern visual generation, and nearly every major axis of their design \-\-\- tokenization, attention, conditioning, objectives, and latent autoencoders \-\-\- has been thoroughly revisited\. The residual stream that governs how information accumulates across layers, however, has been directly inherited from the original Transformer\. In this paper, we present a systematic analysis of cross\-layer information flow in DiT jointly along depth and denoising timestep, and identify three concrete symptoms of traditional residual addition, i\.e\., monotonic forward magnitude inflation, sharp backward gradient decay, and pronounced block\-wise redundancy\. Motivated by this diagnosis, we propose Diffusion\-Adaptive Routing \(\\textsc\{DAR\}\), a drop\-in residual replacement that performs \\emph\{learnable, timestep\-adaptive, and non\-incremental\} aggregation over the history of sublayer outputs\. Moreover, the proposed DAR is compatible with many modern Transformer enhancement methods, such as REPA\. On ImageNet $256\\times256$, \\textsc\{DAR\} improves SiT\-XL/2 by $2\.11$ FID \($7\.56$ vs\.\\ $9\.67$\) and matches the baseline's converged quality in $8\.75\\times$ fewer training iterations\. Stacked on top of REPA, it yields a $2\\times$ training acceleration in the early stage, revealing cross\-layer information routing as a hitherto\-overlooked axis of progress in diffusion modeling, one that operates orthogonally to existing representation\-alignment objectives\. Beyond the pretrain tasks, \\textsc\{DAR\} can be further applied in large\-scale T2I models fine\-tuning stage and preserves high\-frequency details during Distribution Matching Distillation\.

## Action Images: End\-to\-End Policy Learning via Multiview Video Generation

**Authors:** Haoyu Zhen; Zixian Gao; Qiao Sun; yilin zhao; Yuncong Yang; Yilun Du; Pengsheng Guo; Tsun\-Hsuan Johnson Wang; Yi\-Ling Qiao; Chuang Gan

**ID:** 150968 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dvcWzyuusE>) | [PDF](<https://openreview.net/pdf?id=dvcWzyuusE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150968>)

World action models \(WAMs\) have emerged as a promising direction for robot policy learning, as they can leverage powerful video backbones to model the future states\. However, existing approaches often rely on separate action modules, or use action representations that are not pixel\-grounded, making it difficult to fully exploit the pretrained knowledge of video models and limiting transfer across viewpoints and environments\. In this work, we present Action Images, a unified world action model that formulates policy learning as multiview video generation\. Instead of encoding control as low\-dimensional tokens, we translate 7\-DoF robot actions into interpretable action images: multi\-view action videos that are grounded in 2D pixels and explicitly track robot\-arm motion\. This pixel\-grounded action representation allows the video backbone itself to act as a zero\-shot policy, without a separate policy head or action module\. Beyond control, the same unified model supports video\-action joint generation, action\-conditioned video generation, and action labeling under a shared representation\. On RLBench and real\-world evaluations, our model achieves the strongest zero\-shot success rates and improves video–action joint generation quality over prior video\-space world models, suggesting that interpretable action images are a promising route to policy learning\.

## Text\-Vision Co\-Instructed Image Editing

**Authors:** Chenxi Xie; Yuhui Wu; Qiaosi Yi; Lei Zhang

**ID:** 148391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yC4H5QD0ot>) | [PDF](<https://openreview.net/pdf?id=yC4H5QD0ot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148391>)

Existing image editing methods can be generally categorized into textual instruction\-based and visual prompt\-based ones\.  Textual instructions are semantically expressive, but are limited by the coarse granularity of spatial control of the editing results\. In contrast, visual prompts such as drag and point can  provide precise spatial guidance, but are limited by the inherent ambiguity in semantic intent\.  To unify the strength of textual and visual prompts, we present Text\-Vision Co\-Instructed Image Editing, which jointly models textual instructions as semantic intent and sparse visual instructions as spatial guidance, aiming to achieve precise and intent\-faithful image manipulation\. To this end, we first construct a textual\-visual instruction paired dataset with more than 23K samples derived from dynamic videos, enabling aligned supervision for cross\-modal instruction\. We then propose TV\-Edit, a Textual\-Visual instruction unified Editing framework to contextualize drag or point\-based visual instructions with image\-text semantics and lift them into semantic\-aware control representations for pretrained editing backbones\.  By integrating semantic intent and spatial constraints, TV\-Edit leads to more precise spatial control, less instruction ambiguity, and stronger structural consistency than text\-only or drag\-based alternatives\.  Finally, we establish TV\-Edit\-Bench, a deliberately designed benchmark to evaluate semantic faithfulness, spatial alignment, and visual consistency with ground\-truth references and controlled textual–visual variations for reliable assessment\. Our experiments across multiple editing backbones demonstrate that TV\-Edit consistently yields more precise and intent\-faithful edits, significantly outperforming state\-of\-the\-art instruction\-based and drag\-based baselines\. Data, model, and codes will be released\.

## MegaStyle: Constructing Diverse and Scalable Style Dataset via Consistent Text\-to\-Image Style Mapping

**Authors:** Junyao Gao; Sibo Liu; Jiaxing Li; Yanan SUN; Yuanpeng Tu; Fei Shen; Weidong Zhang; Cairong Zhao; Jun Zhang

**ID:** 139382 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tsy4EJwae5>) | [PDF](<https://openreview.net/pdf?id=Tsy4EJwae5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139382>)

In this paper, we introduce MegaStyle, a novel and scalable data curation pipeline that constructs an intra\-style consistent, inter\-style diverse and high\-quality style dataset\. We achieve this by leveraging the consistent text\-to\-image style mapping capability of current large generative models, which can generate images in the same style from a given style description\. Building on this foundation, we curate a diverse and balanced prompt gallery with 170K style prompts and 400K content prompts, and generate a large\-scale style dataset MegaStyle\-1\.4M via content–style prompt combinations\. With MegaStyle\-1\.4M, we propose style\-supervised contrastive learning to fine\-tune a style encoder MegaStyle\-Encoder for extracting expressive, style\-specific representations, and we also train a FLUX\-based style transfer model MegaStyle\-FLUX\. Extensive experiments demonstrate the importance of maintaining intra\-style consistency, inter\-style diversity and high\-quality for style dataset, as well as the effectiveness of the proposed MegaStyle\-1\.4M\. Moreover, when trained on MegaStyle\-1\.4M, MegaStyle\-Encoder and MegaStyle\-FLUX provide reliable style similarity measurement and generalizable style transfer, making a significant contribution to the style transfer community\.

## X2HDR: HDR Image Generation in a Perceptually Uniform Space

**Authors:** Ronghuan Wu; Wanchao Su; Kede Ma; Jing Liao; Rafal Mantiuk

**ID:** 148447 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xjyKFJeXLL>) | [PDF](<https://openreview.net/pdf?id=xjyKFJeXLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148447>)

High\-dynamic\-range \(HDR\) formats and displays are becoming increasingly prevalent, yet state\-of\-the\-art image generators \(e\.g\., Stable Diffusion and FLUX\) typically remain limited to low\-dynamic\-range \(LDR\) output due to the lack of large\-scale HDR training data\. In this work, we show that existing pretrained diffusion models can be easily adapted to HDR generation without retraining from scratch\. A key challenge is that HDR images are natively represented in linear RGB, whose intensity and color statistics differ substantially from those of sRGB\-encoded LDR images\. This gap, however, can be effectively bridged by converting HDR inputs into perceptually uniform encodings \(e\.g\., using PU21 or PQ\)\. Empirically, we find that LDR\-pretrained variational autoencoders \(VAEs\) reconstruct PU21\-encoded HDR inputs with fidelity comparable to LDR data, whereas linear RGB inputs cause severe degradations\. Motivated by this finding, we describe an efficient adaptation strategy that freezes the VAE and finetunes only the denoiser via low\-rank adaptation in a perceptually uniform space\. This results in a unified computational method that supports both text\-to\-HDR synthesis and single\-image RAW\-to\-HDR reconstruction\. Experiments demonstrate that our perceptually encoded adaptation consistently improves perceptual fidelity, text\-image alignment, and effective dynamic range, relative to previous techniques\.

## GRASP: Guided Residual Adapters with Sample\-wise Partitioning

**Authors:** Felix Nützel; Mischa Dombrowski; Bernhard Kainz

**ID:** 152072 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VfoRDHdZvl>) | [PDF](<https://openreview.net/pdf?id=VfoRDHdZvl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152072>)

Text\-to\-image flow matching transformers degrade sharply in long\-tail settings: tail\-class outputs collapse in fidelity and diversity, limiting their value as synthetic augmentation for rare conditions\. We trace this to low head\-versus\-tail gradient alignment during fine\-tuning, an optimization\-level pathology that conditioning\- and sampling\-side interventions do not address\. We propose GRASP \(Guided Residual Adapters with Sample\-wise Partitioning\): a deterministic partition of the conditioning space, paired with group\-specific residual adapters in the transformer feedforward layers, that leaves the flow\-matching objective and the sampler untouched\. In conditional flow matching, condition values index distinct sets of probability paths, so partitioning along the conditioning is the structurally correct factorization suitable as gradient alignment proxy\. Because the partition is static, every tail sample is guaranteed to update its assigned expert, which bypasses extreme longtail failure modes\. Crucially, GRASP is non\-invasive and composable: on MIMIC\-CXR\-LT, combining GRASP with self\-guided minority sampling at inference time yields the best all\-labels IRS we observe, beyond either intervention alone\. GRASP itself reduces overall FID by up to 80\\% and lifts tail\-class coverage by up to 44\\% over full fine\-tuning, learned\-routing MoE, and minority guidance\. Used as training data for a downstream DenseNet classifier on NIH\-CXR\-LT, GRASP synthetics significantly outperform every non\-GRASP alternative on macro F1, match the macro F1 obtained from real training data, and yield nonzero F1 on $9$ of $13$ classes versus $3$ of $13$ from full fine\-tuning\. Results on ImageNet\-LT confirm the mechanism is not tied to medical inductive bias\.

## RISE: Red\-teaming via Iterative Strategy Evolution for Modern Text\-to\-Image Models

**Authors:** Dmitrii Kharlapenko; Sergei Bratchikov; Konstantin Korolev; Aleksandr Nikolich

**ID:** 150661 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gOoC1Kh4q4>) | [PDF](<https://openreview.net/pdf?id=gOoC1Kh4q4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150661>)

_Abstract unavailable from the accessible public sources._

## Self\-Cleaning Diffusion Models

**Authors:** Adrian Rodriguez\-Munoz; Adam Klivans; Antonio Torralba; Constantinos Daskalakis; Giannis Daras

**ID:** 155247 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=79S41XUgZr>) | [PDF](<https://openreview.net/pdf?id=79S41XUgZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155247>)

_Abstract unavailable from the accessible public sources._

## OverLay\+\+: Dense\-Overlap Layout\-to\-Image Generation Dataset

**Authors:** Shivansh Aggarwal; Shresth Grover; Divyansh Srivastava; Haiyang Xu; Bingnan Li; Xiang Zhang; Ethan Armand; Chuan Li; Jianwen Xie; Zhuowen Tu

**ID:** 139248 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cMt3UbRtDO>) | [PDF](<https://openreview.net/pdf?id=cMt3UbRtDO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139248>)

_Abstract unavailable from the accessible public sources._

## Instantiation of Human Values in Image Generation

**Authors:** Maria Teresa De Rosa Palmini; Piera Riccio; Noa Garcia; Eva Cetinic

**ID:** 139657 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CaD34X3ptc>) | [PDF](<https://openreview.net/pdf?id=CaD34X3ptc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139657>)

_Abstract unavailable from the accessible public sources._

## DynaTokens: Teaching Dynamics to Camera\-Controlled Video Models at Test Time

**Authors:** Ziqi Ma; Hongqiao Chen; Georgia Gkioxari

**ID:** 149930 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m6mxu2krgE>) | [PDF](<https://openreview.net/pdf?id=m6mxu2krgE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149930>)

_Abstract unavailable from the accessible public sources._

## Gender Artifacts from Art History to Text\-to\-Image Generation

**Authors:** Piera Riccio; Miriam Doh; Benedikt Höltgen; Noa Garcia; Nanne van Noord

**ID:** 139694 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AHgbQxbPgb>) | [PDF](<https://openreview.net/pdf?id=AHgbQxbPgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139694>)

_Abstract unavailable from the accessible public sources._

## Noise\-Started One\-Step Image Super\-Resolution via LR\-Conditioned SplitMeanFlow and GAN Refinement

**Authors:** Wei Zhu; Kai Zhang; Yu Zheng; Lei Luo; Yong Guo; Jian Yang

**ID:** 150670 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gMYBb0YVMl>) | [PDF](<https://openreview.net/pdf?id=gMYBb0YVMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150670>)

_Abstract unavailable from the accessible public sources._

## TIDE: Trajectory\-Aware Watermark Propagation for Text\-to\-Image Diffusion Models

**Authors:** Yihan Meng; Suping Xu; Yanfeng Wu; Chongjun Wang; Lin Shang

**ID:** 155911 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1tohGAfGuc>) | [PDF](<https://openreview.net/pdf?id=1tohGAfGuc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155911>)

_Abstract unavailable from the accessible public sources._

## Flow\-DPPO: Divergence Proximal Policy Optimization for Flow Matching Models

**Authors:** Bowen Ping; Xiangxin Zhou; Penghui Qi; Minnan Luo; Liefeng Bo; Tianyu Pang

**ID:** 150977 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=drpFiVnG8v>) | [PDF](<https://openreview.net/pdf?id=drpFiVnG8v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150977>)

_Abstract unavailable from the accessible public sources._

## Parallel Rollout Approximation for Pixel\-Space Autoregressive Image Generation

**Authors:** Jiayi Xu; Di He; Guolin Ke

**ID:** 154505 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D55NaBnwtO>) | [PDF](<https://openreview.net/pdf?id=D55NaBnwtO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154505>)

_Abstract unavailable from the accessible public sources._

## RISE: Red\-teaming via Iterative Strategy Evolution for Modern Text\-to\-Image Models

**Authors:** Dmitrii Kharlapenko; Sergei Bratchikov; Konstantin Korolev; Aleksandr Nikolich

**ID:** 150661\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150661

[Paper](<https://openreview.net/forum?id=gOoC1Kh4q4>) | [PDF](<https://openreview.net/pdf?id=gOoC1Kh4q4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150661>)

_Abstract unavailable from the accessible public sources._

## Self\-Cleaning Diffusion Models

**Authors:** Adrian Rodriguez\-Munoz; Adam Klivans; Antonio Torralba; Constantinos Daskalakis; Giannis Daras

**ID:** 155247\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155247

[Paper](<https://openreview.net/forum?id=79S41XUgZr>) | [PDF](<https://openreview.net/pdf?id=79S41XUgZr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155247>)

_Abstract unavailable from the accessible public sources._

## OverLay\+\+: Dense\-Overlap Layout\-to\-Image Generation Dataset

**Authors:** Shivansh Aggarwal; Shresth Grover; Divyansh Srivastava; Haiyang Xu; Bingnan Li; Xiang Zhang; Ethan Armand; Chuan Li; Jianwen Xie; Zhuowen Tu

**ID:** 139248\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139248

[Paper](<https://openreview.net/forum?id=cMt3UbRtDO>) | [PDF](<https://openreview.net/pdf?id=cMt3UbRtDO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139248>)

_Abstract unavailable from the accessible public sources._

## Instantiation of Human Values in Image Generation

**Authors:** Maria Teresa De Rosa Palmini; Piera Riccio; Noa Garcia; Eva Cetinic

**ID:** 139657\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139657

[Paper](<https://openreview.net/forum?id=CaD34X3ptc>) | [PDF](<https://openreview.net/pdf?id=CaD34X3ptc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139657>)

_Abstract unavailable from the accessible public sources._

## DynaTokens: Teaching Dynamics to Camera\-Controlled Video Models at Test Time

**Authors:** Ziqi Ma; Hongqiao Chen; Georgia Gkioxari

**ID:** 149930\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149930

[Paper](<https://openreview.net/forum?id=m6mxu2krgE>) | [PDF](<https://openreview.net/pdf?id=m6mxu2krgE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149930>)

_Abstract unavailable from the accessible public sources._

## Gender Artifacts from Art History to Text\-to\-Image Generation

**Authors:** Piera Riccio; Miriam Doh; Benedikt Höltgen; Noa Garcia; Nanne van Noord

**ID:** 139694\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139694

[Paper](<https://openreview.net/forum?id=AHgbQxbPgb>) | [PDF](<https://openreview.net/pdf?id=AHgbQxbPgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139694>)

_Abstract unavailable from the accessible public sources._

## BRAVO: Bridge Matching for Autoregressive Video Generation

**Authors:** Shihua Zhang; Zhenxiong Tan; Xinchao Wang

**ID:** 148431 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xsOb1nnuLg>) | [PDF](<https://openreview.net/pdf?id=xsOb1nnuLg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148431>)

Image\-to\-video generation aims to animate an image while preserving appearance details and producing visually coherent future frames\. Autoregressive generation models this process as a sequence of next\-frame predictions conditioned on the input image and text prompt\. However, advanced autoregressive generators built on diffusion or flow models formulate each step as a noise\-to\-data process, despite the fact that the previous frame already provides an informative visual prior\. This mismatch makes next\-frame synthesis harder than necessary and can degrade prediction quality, since the model must recover scene layout and visual context from uninformative Gaussian noise at every step\. To this end, we introduce BRAVO, a Brownian bridge matching framework for autoregressive video generation\. BRAVO replaces the conventional noise\-to\-data path with a data\-to\-data bridge from the previous frame to the current one, turning next\-frame synthesis into local frame\-to\-frame transport\. The bridge state is formed by interpolating between adjacent real frames with a Brownian perturbation, so the learned velocity models the local transition from the previous frame to the next under the text prompt and causal visual history\. BRAVO is trained with teacher\-forcing and sampled autoregressively, where each bridge starts from the last generated frame and reuses historical messages through a causal KV\-cache\. Experiments on different datasets show that BRAVO surpasses the conventional noise\-to\-data baseline and achieves even competitive performance with substantially larger models\.

## WaveletLoRA: Frequency\-Aware Content\-Style Decomposition for Personalized Image Generation

**Authors:** Peiyao Wang; Jiahui Sun; Weining Wang; Jing Liu

**ID:** 152557 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SEc7mCUDGI>) | [PDF](<https://openreview.net/pdf?id=SEc7mCUDGI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152557>)

Content\-style decomposition from a single image is a fundamental challenge in personalized image generation, aiming to separate subject identity from visual style for flexible recomposition\. Existing approaches primarily operate in the spatial domain, without explicitly exploiting the distinct frequency characteristics naturally associated with content and style\. In this paper, we propose WaveletLoRA, a novel frequency\-aware framework for explicit content\-style decomposition through wavelet\-domain supervision\. Specifically, we first apply a multi\-level discrete wavelet transform \(DWT\) to decompose the reference image into low\-frequency and high\-frequency subbands\. We then assign a dedicated LoRA branch to each subband, where the low\-frequency branch models global appearance for style acquisition, while the high\-frequency branches capture structural details for content preservation\. To further improve disentanglement quality, we introduce a dense Mixture\-of\-Experts aggregation module together with a frequency\-domain regularization objective, which reduces style leakage and enhance content fidelity\. In addition, we establish WaveBench and develop a VLM\-based evaluation protocol that explicitly measures both attribute similarity and attribute separation for disentanglement assessment\. Extensive experiments demonstrate that WaveletLoRA consistently outperforms existing methods and produces results that better align with human preference\. Code and the proposed dataset will be released in https://anonymous\.4open\.science/r/WaveletLoRA\-8D7F\.

## BitDance: Scaling Autoregressive Generative Models with Binary Tokens

**Authors:** Yuang Ai; Jiaming Han; Shaobin Zhuang; Weijia Mao; Xuefeng Hu; Ziyan Yang; Zhenheng Yang; Yali Wang; Xiangyu Yue; Hao Chen; Huaibo Huang

**ID:** 153956 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HI2nlULbg7>) | [PDF](<https://openreview.net/pdf?id=HI2nlULbg7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153956>)

We present BitDance, a scalable autoregressive \(AR\) image generator that predicts binary visual tokens instead of codebook indices\. With high\-entropy binary latents, BitDance lets each token represent up to $\\mathbf\{2^\{256\}\}$ states, yielding a compact yet highly expressive discrete representation\. Sampling from such a huge token space is difficult with standard classification\. To resolve this, BitDance uses a binary diffusion head: instead of predicting an index with softmax, it employs continuous\-space diffusion to generate the binary tokens\. Furthermore, we propose next\-patch diffusion, a new decoding method that predicts multiple tokens in parallel with high accuracy, greatly speeding up inference\. On ImageNet 256$\\times$256, BitDance achieves an FID of \*\*1\.24\*\*, the best among AR models\. With next\-patch diffusion, BitDance beats state\-of\-the\-art parallel AR models that use 1\.4B parameters, while using \*\*5\.4$\\times$\*\* fewer parameters \(260M\) and achieving \*\*8\.7$\\times$\*\* speedup\. For text\-to\-image generation and image editing, BitDance trains on large\-scale multimodal tokens and generates high\-resolution, photorealistic images efficiently, showing strong performance and favorable scaling\. When generating 1024$\\times$1024 images, BitDance achieves a speedup of over \*\*30$\\times$\*\* compared to prior AR models\. We release code and models to facilitate further research on AR foundation models\.

## Do Joint Audio\-Video Generation Models Understand Physics?

**Authors:** Zijun Cui; Xiulong Liu; Hao Fang; Mingwei Xu; Jiageng Liu; Zexin Xu; Weiguo Pian; Shijian Deng; Feiyu Du; Chenming Ge; Yapeng Tian

**ID:** 139141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iUbannicWz>) | [PDF](<https://openreview.net/pdf?id=iUbannicWz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139141>)

Joint audio\-video generation models are rapidly approaching professional production quality, raising a fundamental question: do these models truly understand audio\-visual physics, or do they merely generate plausible sounds and frames that violate real\-world physical consistency? To answer this question, we introduce AV\-Phys Bench, the first comprehensive benchmark for evaluating physical commonsense in joint audio\-video generation\. AV\-Phys Bench systematically tests joint audio\-video generation models across three scene categories that probe how physical commonsense holds as the scene evolves: \(a\) Steady State, \(b\) Event Transition, and \(c\) Environment Transition\. Each scene category investigates three physics\-grounded subcategories that reflect real\-world scenes, along with an additional Anti\-AV\-Physics subcategory, where prompts deliberately violate audio\-visual physics to probe whether models possess generative physics knowledge or merely encode physically consistent priors\. Each generation is scored along five dimensions: semantic adherence and physical commonsense within each modality, and cross\-modal physical commonsense, which tests whether the visual and audio streams agree on the same physical event\. Across three proprietary and four open\-source models, Seedance 2\.0 leads on physical commonsense, with an overall pass rate of 0\.660\. The gap to open\-source models remains pronounced; every model degrades by up to 67% on event\-driven and environment\-driven transitions, and proprietary leaders collapse by 45–69% on Anti\-AV\-Physics prompts\. Beyond human evaluation, we introduce AV\-Phys Agent, a ReAct\-style agentic evaluator that pairs a multimodal language model with deterministic acoustic measurement tools and ranks generators in close alignment with human ratings, enabling scalable physical\-commonsense evaluation without further human annotation\. AV\-Phys Bench identifies cross\-modal physical consistency and transition\-driven scene dynamics as the open frontier for joint audio\-video generation\. We release AV\-Phys Bench and AV\-Phys Agent to facilitate future research on joint audio\-video generation and evaluation\.

## CyCLeGen: Cycle\-Consistent Layout Prediction and Image Generation

**Authors:** Xiaojun Shan; Haoyu Shen; Yucheng Mao; Haiyang Xu; Xiang Zhang; Abhay Anand; Bingnan Li; Zhuowen Tu

**ID:** 153270\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153270

[Paper](<https://openreview.net/forum?id=MUrqtx2pBo>) | [PDF](<https://openreview.net/pdf?id=MUrqtx2pBo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153270>)

We present CyCLeGen, an autoregressive framework that integrates layout understanding and layout\-to\-image generation through cycle consistency: predicted layouts must produce faithful images, and generated images must yield consistent layouts\. We enforce this constraint via CycleGRPO, a bidirectional reinforcement learning strategy with complementary geometric and perceptual rewards, enabling self\-introspective learning from only 8k RL samples\. This creates a natural loop, generation helps understanding by rewarding only those layouts that lead to high\-quality images, and understanding helps generation by rewarding only those images whose spatial structure can be faithfully recovered\. Extensive experiments show that CyCLeGen achieves significant gains across diverse image understanding and generation benchmarks, with emergent gains on image captioning\.

## MotionCFG: Boosting Motion Dynamics via Semantic Motion Sharpening

**Authors:** Byungjun Kim; Soobin Um; Jong Chul Ye

**ID:** 150155\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150155

[Paper](<https://openreview.net/forum?id=kFcyrsn0he>) | [PDF](<https://openreview.net/pdf?id=kFcyrsn0he>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150155>)

Despite recent advancements in Text\-to\-Video \(T2V\) synthesis, generating high\-fidelity and dynamic motion remains a significant challenge\. Existing methods primarily rely on Classifier\-Free Guidance \(CFG\), but standard CFG treats all semantic dimensions uniformly and provides no mechanism to selectively resolve ambiguity along the motion axis\. To address this, we propose MotionCFG, a training\-free approach that introduces selective guidance along the motion subspace of the condition embedding\. Specifically, we construct a motion\-perturbed negative condition by injecting Gaussian noise into motion\-related embeddings, and steer generation away from it to selectively amplify motion intent\. We show theoretically that this procedure implicitly approximates \*Semantic Laplacian Sharpening\*, a second\-order correction that suppresses motion\-ambiguous regions of the score landscape and amplifies well\-resolved dynamic peaks\. Combined with a piecewise guidance schedule that confines intervention to the early denoising steps, MotionCFG consistently improves motion dynamics across state\-of\-the\-art T2V frameworks with negligible overhead\. We further demonstrate that this Laplacian sharpening principle generalizes beyond motion, effectively steering complex, non\-linear concepts such as precise object numerosity that are typically difficult to modulate via standard text\-based guidance\.

## LLM Is a Good Conditioner: End\-to\-End Sign Language Video Generation with VQ\-Diffusion

**Authors:** Xiao Liu; Shiwei Gan

**ID:** 148951\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148951

[Paper](<https://openreview.net/forum?id=twBWaZ8FT0>) | [PDF](<https://openreview.net/pdf?id=twBWaZ8FT0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148951>)

Sign Language Video Generation \(SLVG\) aims to generate realistic and motion\-accurate sign language videos from spoken text\. Most existing studies heavily rely on intermediate representations \(\\eg poses or 3D meshes\), and adopt a two\-stage generation paradigm, where the text is first converted into poses or other visual modalities, which are then used as conditions to synthesize sign language video frames via diffusion models \(\\eg pose\-to\-image models\)\.  However, the end\-to\-end SLVG task remains largely unexplored\.  In this paper, we demonstrate that end\-to\-end SLVG is feasible without relying on intermediate representations\(\\eg poses\), and we argue that a key challenge lies in how to generate effective and temporally consistent conditions\. With well\-designed condition modules, it becomes feasible to build an end\-to\-end SLVG model without relying on any intermediate modalities\. To this end, we propose LLMCond, a first end\-to\-end text\-to\-video SLVG framework that requires no auxiliary visual cues during either training or inference\. LLMCond consists of four key components: \(1\) a video VQVAE that compresses sign language videos into a sequence of discrete latent tokens; \(2\) \\textbf\{an LLM\-based conditioner\} that generates temporally and semantically aligned conditions corresponding to the sign sequences; \(3\) \\textbf\{a Gaussian Condition Refiner\} designed to enforce temporal smoothness across conditions, enabling the generation of coherent and natural sign language motions; and \(4\) a discrete diffusion model that synthesizes motion\-accurate sign language videos conditioned on the refined condition sequences\. Extensive experiments on public SL datasets demonstrate that LLMCond achieves highly competitive performance, producing temporally coherent and accurate sign language motions without relying on auxiliary visual modalities such as pose, depth, or optical flow\.

## Why Do DiT Editors Drift? Plug\-and\-Play Low Frequency Alignment in VAE Latent Space

**Authors:** Xiaoce Wang; Sifan Zhou; Kaifei Wang; Leli Xu; Xuerui Qiu; Tao He; Ming Li

**ID:** 151149\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151149

[Paper](<https://openreview.net/forum?id=ceVqStm5S2>) | [PDF](<https://openreview.net/pdf?id=ceVqStm5S2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151149>)

Recent advances in diffusion transformers \(DiTs\) have enabled promising single\-turn image editing capabilities\. However, multi\-turn editing often leads to progressive semantic drift and quality degradation\.  In this work, we study this problem from a latent\-space frequency perspective by decomposing the editing process into two functional components: VAE and DiT\. Through systematic analysis in the VAE latent space, we uncover that the DiT introduces dominant low\-frequency drift that accumulates as semantic misalignment across editing rounds, while the VAE contributes comparatively stable reconstruction bias\.  Based on this insight, we propose \*\*VAE\-LFA\*\* \(Low Frequency Alignment\), a training\-free, plug\-and\-play method that performs alignment in VAE latent space\. VAE\-LFA decomposes latent discrepancies across editing rounds via low\-pass filtering, and aligns low\-frequency statistics to an exponential moving average of previous rounds, effectively suppressing accumulated semantic drift while preserving high\-frequency details\.  Our method requires \*no retraining, ground\-truth priors, or access to diffusion parameters\*, making it applicable to both white\-box and black\-box DiT editors\. For white\-box models, VAE\-LFA is seamlessly integrated into the editing pipeline by eliminating redundant VAE round trips; for black\-box models, it operates via an off\-the\-shelf VAE to perform inter\-round latent alignment\.  Extensive experiments demonstrate that VAE\-LFA improves semantic consistency and visual fidelity across diverse multi\-turn editing scenarios, including both controlled and in\-the\-wild images\.

## A Hierarchical World Model for Driving

**Authors:** Sudhanshu Mittal; Arian Mousakhan; Silvio Galesso; Karim Farid; Johannes Dienert; Rajat Sahay; Thomas Brox

**ID:** 151694\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151694

[Paper](<https://openreview.net/forum?id=Yj5ujHJ5XD>) | [PDF](<https://openreview.net/pdf?id=Yj5ujHJ5XD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151694>)

Current world models operate at a single level of abstraction, with most prioritizing perceptual fidelity while lacking the spatial reasoning and semantic understanding required for real\-world downstream tasks\. We present a hierarchical driving world model that factorizes future prediction across two levels operating at distinct temporal and abstraction scales: a high\-level predictor that forecasts coarse scene structure over extended temporal horizons, and a low\-level generator that produces detailed predictions conditioned on the high\-level output\. This decomposition yields high perceptual fidelity while also capturing strong spatial and semantic representations\. We further show that pretraining with a diffusion forcing objective yields substantially richer internal representations than the standard teacher forcing objective, while teacher forcing — predicting only the next frame from clean context — produces more stable autoregressive rollouts\. We therefore introduce a generic two\-stage training paradigm that pretrains the model with diffusion forcing and fine\-tunes with teacher forcing, combining the representational benefits of the former with the rollout stability of the latter\. Our approach achieves state\-of\-the\-art results across the standard suite of driving world model evaluations on established benchmarks, including long\-horizon generation fidelity, steering responsiveness evaluated on counterfactual scenarios, and internal representation quality\.

## RankE: End\-to\-End Post\-Training for Discrete Text\-to\-Image Generation with Decoder Co\-Evolution

**Authors:** Siyonng Jian; Siyuan Li; Luyuan Zhang; Zedong Wang; Xin Jin; Ying Li; Cheng Tan; Huan Wang

**ID:** 153714 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JKAhKqd78L>) | [PDF](<https://openreview.net/pdf?id=JKAhKqd78L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153714>)

Discrete autoregressive \(AR\) text\-to\-image \(T2I\) models adopt a two\-stage paradigm in which a VQ tokenizer maps images to discrete codes and an AR policy models their distribution\. Current post\-training methods optimize only the AR policy while keeping the VQ decoder frozen\. We show that this practice introduces Latent Covariate Shift: as the policy evolves, its token distribution progressively diverges from the ground\-truth distribution on which the decoder was trained, such that reward scores improve while decoded image quality degrades\. To address this mismatch, we propose \*\*RankE\*\*, the first end\-to\-end post\-training framework for discrete T2I generation\. Rather than optimizing the policy against a fixed decoder, RankE co\-evolves the policy and decoder through alternating optimization: the policy is refined via group\-relative preference optimization, while the decoder is jointly adapted via reward\-aware adversarial training\. This co\-evolution ends the fidelity\-\-alignment trade\-off that plagues frozen\-decoder approaches: on LlamaGen\-XL \(775M\), standard RL improves CLIP but degrades FID, whereas RankE simultaneously improves both \(FID 15\.21, CLIP 33\.76 on MS\-COCO 30K\)\. Consistent joint gains on Janus\-Pro \(1B\) confirm that decoder co\-evolution reliably converts reward optimization into pixel\-space quality improvements\.

## Character Mixing for Video Generation

**Authors:** Tingting Liao; Chongjian GE; Guangyi Liu; Hao Li; Yi Zhou

**ID:** 148244 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zKLIZIhkEs>) | [PDF](<https://openreview.net/pdf?id=zKLIZIhkEs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148244>)

Imagine Mr\. Bean stepping into Tom and Jerry\-\-can a video model generate interactions that stay faithful to each character's identity, behavior, and style across worlds? We present MiMix, a unified framework for multi\-character text\-to\-video generation that goes beyond visual appearance to capture character\-specific personas generalizing to unseen scenes and partners\. To evaluate this, we introduce the Cross\-Character Generalization Benchmark, a social stress test placing each character in novel scenes with previously uncoexistent partners\. MiMix combines Cross\-Character Embedding \(CCE\), which disentangles identity and behavior via text\-aligned annotations, with Cross\-Character Augmentation \(CCA\), which synthesizes cross\-style training data while preserving native appearance\. Experiments show consistent gains in identity fidelity, interaction quality, and style consistency over prior personalized and general video models\.Additional results and videos are available on our project page: https://mi\-mi\-x\.github\.io\.

## Learning Preference Representations for Preference\-Conditioned Image Generation

**Authors:** Wenyi Mo; Tianyu Zhang; Yalong Bai; Ligong Han; Ying Ba; Dimitris Metaxas

**ID:** 154511 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D2Ld3EwMVg>) | [PDF](<https://openreview.net/pdf?id=D2Ld3EwMVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154511>)

Modern image generative models produce high\-quality, prompt\-faithful images, yet the same prompt can correspond to different desired outputs for different users\. We study \\emph\{preference\-conditioned image generation\}: generating images that follow a target prompt while reflecting a user's latent visual preferences inferred from liked and disliked histories\. This problem is challenging because real preference histories are sparse and costly to collect, user tastes mix semantic and stylistic factors that are difficult to verbalize, and diffusion generators are not naturally designed to condition on multi\-image preference histories\. We propose \\textsc\{PrefGen\}, a framework for learning structured preference representations and injecting them into diffusion\-based generators\. To address the supervision bottleneck, we construct a large\-scale synthetic\-agent preference dataset with dense, coherent liked/disliked histories, using it as scalable supervision for preference representation learning\. We train a multimodal large language model with preference\-oriented visual question answering and analyze its hidden states to separate two complementary signals: an intra\-user embedding for liked\-versus\-disliked distinctions and a cross\-history consistency embedding for stable user\-level tendencies\. To bridge MLLM representations and diffusion conditioning, we introduce a distributional alignment objective based on maximum mean discrepancy and inject the aligned preference signal through a lightweight cross\-attention branch\. We evaluate \\textsc\{PrefGen\} with a tiered protocol: \\textsc\{PrefBench\} as a synthetic in\-distribution diagnostic, leakage\-free Pick\-a\-Pic transfer as a controlled real\-user benchmark, and user\-in\-the\-loop studies with participant\-curated histories as human\-facing evidence\. Across these settings, \\textsc\{PrefGen\} improves preference alignment over strong personalization baselines while preserving prompt fidelity and competitive image quality\.

## LogicDirector: Enforcing Temporal Composition in Text\-to\-Video Generation

**Authors:** Yujiang Pu; Zixu Cheng; Shaogang Gong; Handong Zhao; Yu Kong

**ID:** 153496 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KxBQdkTg2q>) | [PDF](<https://openreview.net/pdf?id=KxBQdkTg2q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153496>)

_Abstract unavailable from the accessible public sources._

## UNICOM: Unified Multimodal Modeling via Compressed Continuous Semantic Representations

**Authors:** Yaqi Zhao; Wang Lin; Zijian Zhang; Jian Zhang; Zhao Zhong; Liefeng Bo; Jingyuan Chen; Wentao Zhang

**ID:** 156067 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0iUmETfbJj>) | [PDF](<https://openreview.net/pdf?id=0iUmETfbJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156067>)

_Abstract unavailable from the accessible public sources._

## Directional Noise Conditioning for Diffusion Models

**Authors:** Mahdi Shafiei; Azade Farshad; Nassir Navab; Yousef Yeganeh

**ID:** 150199 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jzTnuYTSXT>) | [PDF](<https://openreview.net/pdf?id=jzTnuYTSXT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150199>)

_Abstract unavailable from the accessible public sources._

## SCULPT: Advancing Masked Discrete Diffusion for High\-Resolution Image Synthesis\.

**Authors:** Shufan Li; Greg Heinrich; Hanrong Ye; Yonggan Fu; Aditya Grover; Jan Kautz; Pavlo Molchanov

**ID:** 154985 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Qv7b21CM4>) | [PDF](<https://openreview.net/pdf?id=9Qv7b21CM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154985>)

We propose SCULPT, a state\-of\-the Art masked discrete diffusion model \(MDMs\) for high resolution text\-to\-image synthesis\. Compared with prior works on masked image generation, SCULPT addresses two key challenges\. First, unlike continuously diffusion models which progressively refines image latent across the entire image, vanilla MDMs do not have self\-correcting capability because discrete tokens cannot be changed once it's unmasked\. Second, while scaling the vocabulary size of discrete image tokenizers can improve reconstruction quality, it also introduces optimization challenges for training generative models as per\-token training signal becomes more spares\. To address the first challenge, SCULPT incroprates a token\-editing mechanism where the model can dynamically correct already\-unmasked output tokens during inference\. To address the second challenge\. we proposed a Goruped Corss Entrophy \(GCE\) objective that assigns positive learning signal to adjacent tokens of the ground truth in the embedding space\. To improve the training efficiency, we further implemented a custom fused operator that greatly reduce the VRAM requirements during training in large\-vocabulary setting\. Experiment results show that these innovations significant improves the training efficiency and image fidelity of masked discrete image generators\.

## AHPA: Adaptive Hierarchical Prior Alignment for Diffusion Transformers

**Authors:** Ruibin Min; Yexin Liu; Aimin PAN; Changsheng Lu; Jiafei Wu; kelu Yao; Xiaogang Xu; Harry Yang

**ID:** 149646 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oVv65Pv6Fq>) | [PDF](<https://openreview.net/pdf?id=oVv65Pv6Fq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149646>)

Representation alignment has recently emerged as an effective paradigm for accelerating Diffusion Transformer training\. Despite their success, existing alignment methods typically impose a fixed supervision target or a fixed alignment granularity throughout the entire denoising trajectory, whether the guidance is provided by external vision encoders, internal self\-representations, or VAE\-derived features\. We argue that such timestep\-agnostic alignment is suboptimal because the useful granularity of representation supervision changes systematically with the signal\-to\-noise ratio\. In high\-noise regimes, diffusion models benefit more from coarse semantic and layout\-level anchoring, whereas in low\-noise regimes, the training signal should emphasize spatially detailed and structurally faithful refinement\.  This non\-stationary alignment behavior creates a representational mismatch for static single\-level supervisors\. To address this issue, we propose Adaptive Hierarchical Prior Alignment \(AHPA\), a lightweight alignment framework that exploits the hierarchical representations naturally embedded in the frozen VAE encoder\.  Instead of using only a single compressed latent as the alignment target, AHPA extracts multi\-level VAE features that provide complementary priors ranging from local geometry and spatial topology to coarse semantic layout\.  A timestep\-conditioned Dynamic Router adaptively selects and weights these hierarchical priors along the denoising trajectory, thereby synchronizing the alignment granularity with the model's evolving training needs\.  Extensive experiments show that AHPA improves convergence and generation quality over baselines and incurs no additional inference cost while avoiding external encoder supervision during training\.

## Toward Embodied World Agents via Embodied\-Planning Dataset and Interactive World Models

**Authors:** Xiaokun Feng; Junshu Tang; zeyi lin; Ling\-Hao Chen; Shuai Shao; Qinglin Lu; Kaiqi Huang

**ID:** 138949 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uOO0f4pq0o>) | [PDF](<https://openreview.net/pdf?id=uOO0f4pq0o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138949>)

Building embodied agents that can perceive, reason, and act across diverse 3D worlds is a central research direction toward artificial general intelligence\. Yet most existing work on embodied agents remains confined to specific tasks in a single scene and transfers poorly to new environments, leaving general embodied agents for open\-world settings an important but under\-explored direction\. We refer to such agents as Embodied World Agents \(EWAs\), whose defining property is the ability to understand diverse visual environments and execute general actions in open\-world conditions\. To advance research on EWAs, we first release EmbodiedWorld\-200K, a large\-scale dataset of about over 200K samples for open\-world embodied planning that spans diverse scenes\. Each example is equipped with multi\-level annotations, ranging from low\-level camera\-motion trajectories to high\-level semantic instructions, and is accompanied by unified evaluation splits and task\-specific metrics, providing a shared substrate for offline pretraining and fair evaluation of EWAs\. Beyond offline supervision, a defining characteristic of an EWA is its interaction with the environment; training solely on offline data is therefore insufficient, especially for generalizing to scenes not covered in the training distribution\. Building dedicated real interactive environments, however, is often prohibitively expensive\. To address this, we propose a novel training scheme that employs a video world model as a low\-cost environment proxy and performs interactive reinforcement\-learning \(RL\) post\-training of the EWA within it\. Empirically, pretraining on EmbodiedWorld\-200K substantially improves the open\-world embodied planning ability of the EWA, and further RL post\-training inside a world model yields clear gains on out\-of\-distribution scenes\. The full dataset, baseline checkpoints, and the accompanying training and evaluation code for supporting future research on EWAs are publicly available at https://xiaokunfeng\.github\.io/EmbodiedWorld\-200K/\.

## What Matters for Diffusion\-Friendly Latent Manifold? Prior\-Aligned Autoencoders for Latent Diffusion

**Authors:** Zhengrong Yue; Taihang Hu; Mengting Chen; Haiyu Zhang; Zihao Pan; Tao Liu; Zikang Wang; Jinsong Lan; Xiaoyong Zhu; Bo Zheng; Yali Wang

**ID:** 155642 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=44Ctpt6ZWD>) | [PDF](<https://openreview.net/pdf?id=44Ctpt6ZWD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155642>)

Tokenizers are a crucial component of latent diffusion models, as they define the latent space in which diffusion models operate\. However, existing tokenizers are primarily designed to improve reconstruction fidelity or inherit pretrained representations, leaving unclear what kind of latent space is truly friendly for generative modeling\. In this paper, we study this question from the perspective of latent manifold organization\. By constructing controlled tokenizer variants, we identify three key properties of a diffusion\-friendly latent manifold: coherent spatial structure, local manifold continuity, and global manifold semantics\. We find that these properties are more consistent with downstream generation quality than reconstruction fidelity\. Motivated by this finding, we propose the $\\textit\{\\textbf\{P\}rior\-\\textbf\{A\}ligned Auto\\textbf\{E\}ncoder\} \(\\textbf\{PAE\}\)$, which explicitly shapes the latent manifold instead of leaving diffusion\-friendly manifold to emerge indirectly from reconstruction or inheritance\. Specifically, PAE leverages refined VFM\-derived priors and perturbation\-based regularization to turn spatial structure, local continuity, and global semantic organization into explicit training objectives\. On ImageNet $256\{\\times\}256$, PAE improves both training efficiency and generation quality over existing tokenizers, reaching comparable performance up to $13\\times$ faster than RAE under the same LightningDiT setup and achieving a new state\-of\-the\-art gFID of $\\textbf\{1\.03\}$\. These results highlight the importance of organizing the latent manifold for latent diffusion models\.

## Physics\-Informed Video Generation via Mixture\-of\-Experts Latent Alignment

**Authors:** Cong Wang; Hanxin Zhu; Jiayi Luo; Yonglin Tian; Xiaoqian Cheng; Peiyan Tu; Xin Jin; Long Chen; Zhibo Chen

**ID:** 155222 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7LkTMagsSg>) | [PDF](<https://openreview.net/pdf?id=7LkTMagsSg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155222>)

Large\-scale video generation models have made remarkable progress in semantic consistency and visual quality, producing videos that are increasingly coherent and visually convincing\. Nevertheless, the dynamics induced by pixel\-level fitting do not naturally accommodate the regularities that govern real\-world motion and interaction, resulting in persistent shortcomings in physical plausibility\. To address this limitation, we propose \*\*PILA\*\* \(Physics\-Informed Latent Alignment\), a framework that injects physics\-structured latent guidance into the frozen flow\-matching dynamics of pretrained video models\. Specifically, PILA first employs anchored field estimation to map frozen\-generator latents into an operational physical attribute bank organized by field\-proxy slots, using observable motion as a kinematic anchor for constructing less directly observed proxies\. To handle the heterogeneity of real\-world dynamics, PILA adopts a mixture\-of\-experts design over physical categories\. Label\-prior masked expert routing selects category\-specific operator experts, whose refinements are regularized by operational residuals abstracted from physical relations\. Finally, the refined proxies are fused into the physical attribute bank and decoded into a correction to the flow\-matching vector field, injecting physics\-aware guidance while preserving the visual prior of the pretrained backbone\. With staged adapter training on Wan 2\.1\-1\.3B and direct transfer of the learned adapter to Wan 2\.2\-14B, PILA achieves state\-of\-the\-art results on VBench\-2\.0, VideoPhy\-2, and PhyGenBench in both visual quality and benchmark\-measured physical plausibility\.

## Exploring Advertising Manipulation in Diffusion Image Generation

**Authors:** Tianshi Che; Yang Zhou; Yushan Mu; Zeru Zhang; Zijie Zhang; Panqiu Xia; Wei Zhang; Longwei Wang; yelong shen; Ruoming Jin; Jianfeng Gao

**ID:** 149323 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qzXTcdJ3oV>) | [PDF](<https://openreview.net/pdf?id=qzXTcdJ3oV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149323>)

As text\-to\-image diffusion models \(T2I DMs\) become widely deployed, adversarial advertising has emerged as a realistic threat: an attacker may compromise a T2I DM so that it implants target product brands into images generated from users' non\-advertising prompts\. Two key challenges remain largely unresolved in this setting: achieving natural and semantically coherent adversarial advertisement and ensuring robust adversarial advertisement\. To address these challenges, we develop a new estimation algorithm for the multivariate continuously scaled phase\-type with Lévy \(MCPHL\) distribution to capture the intrinsic distribution of natural advertisement prompts in the prompt\-embedding space\. With the estimated MCPHL, we construct an attack that pushes non\-advertising prompts toward high\-density regions of this distribution, making the resulting perturbed prompts better aligned with natural advertising prompts\. We then propose a masked parameter smoothing approach grounded in mollification theory, yielding a smoothed T2I DM equipped with a dimension\-invariant certified guarantee against advertisement degradation under model fine\-tuning\. The masking mechanism preserves utility by avoiding unnecessary smoothing on sensitive parameters, and our theoretical analysis shows that the smoothed model better preserves adversarial advertisements under fine\-tuning, while maintaining better generation quality\.

## EverAnimate: Minute\-Scale Human Animation via Latent Flow Restoration

**Authors:** WUYANG LI; Yang Gao; Mariam Hassan; Lan Feng; Wentao Pan; Po\-Chien Luan; Alexandre Alahi

**ID:** 153487 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L0ik0L4kA9>) | [PDF](<https://openreview.net/pdf?id=L0ik0L4kA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153487>)

We propose \*\*EverAnimate\*\*, an efficient post\-training method for long\-horizon animated video generation that preserves visual quality and character identity\. Long\-form animation remains challenging because highly dynamic human motion must be synthesized against relatively static environments, making chunk\-based generation prone to accumulated drift: \(i\) low\-level quality drift, such as progressive degradation of static backgrounds, and \(ii\) high\-level semantic drift, such as inconsistent character identity and view\-dependent attributes\. To address this issue, \*\*EverAnimate\*\* restores drifted flow trajectories by anchoring generation to a persistent latent context memory, consisting of two complementary mechanisms\. \*\(i\) Persistent Latent Propagation\* maintains a context memory across chunks to propagate identity and motion in latent space while mitigating temporal forgetting\. \*\(ii\) Restorative Flow Matching\* introduces an implicit restoration objective during sampling through velocity adjustment, improving within\-chunk fidelity\. With only lightweight LoRA tuning, \*\*EverAnimate\*\* outperforms state\-of\-the\-art long\-animation methods in both short\- and long\-horizon settings: at 10 seconds, it improves PSNR/SSIM by 8%/7% and reduces LPIPS/FID by 22%/11%; at 90 seconds, the gains increase to 15%/15% and 32%/27%, respectively\. Anonymous project page: \[https://anonymous\-xxx\-lab\.github\.io/\]\(https://anonymous\-xxx\-lab\.github\.io/\)\.

## Are we really tilting? The mechanics of reward guidance in flow and diffusion models

**Authors:** Sanjit Dandapanthula; Nicholas Boffi

**ID:** 148402 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y7pWRezznh>) | [PDF](<https://openreview.net/pdf?id=y7pWRezznh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148402>)

Reward guidance algorithms steer a learned generative process toward the reward\-tilted measure at inference time\. While empirically powerful, these methods are prone to reward hacking: the guided model over\-optimizes the reward at the cost of fidelity to the learned distribution\. Prior work has attributed this to the complexity of neural reward functions or implicit biases in diffusion training, but its fundamental origins remain poorly understood\. We show that reward hacking arises from an approximation made in most practical implementations of reward\-guided diffusion\-\-\-finite\-particle plug\-in estimation of the Doob $h$\-function\-\-\-even in the simplest non\-trivial settings of Gaussian and Gaussian mixture targets with quadratic rewards\. In closed form, we isolate two distinct failure modes of the plug\-in estimator: it leads to reward hacking within each mode and it cannot select high\-reward modes\. We propose a closed\-form reward damping schedule that corrects the within\-mode bias with no additional compute, and clarify the role of best\-of\-$n$ sampling in compensating for the mode selection failure\. Experiments on Gaussian mixture targets, a 2D checkerboard, and FLUX\.1 text\-to\-image generation confirm that our theoretical insights carry over to practical settings\.

## AdDirector: Anchored Guidance for Generating Camera\-Controllable Advertisement Videos

**Authors:** Shiyue Zhang; Zheng Chong; Xiangkun Shi; Xiaojian Lin; Junwen Pan; Nan Chen; Cheng CHEN; Chang Liu; Hanhui Li; Xiaodan Liang

**ID:** 150602 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=guwdwpOuYH>) | [PDF](<https://openreview.net/pdf?id=guwdwpOuYH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150602>)

Reference\-to\-video \(R2V\) generation has advanced significantly and is now a promising paradigm for controllable video synthesis\. Nevertheless, in advertisement video generation, where accurate camera control and precise product presentation are essential, existing approaches still face two fundamental challenges\. First, current models adhere weakly to high\-level semantic camera instructions, yielding stochastic or inconsistent camera motion\. Second, they struggle to preserve strict cross\-frame appearance consistency, often leading to identity ambiguity artifacts such as logo drifting, texture distortion, and geometric distortion\. Although certain image animation methods incorporate explicit motion conditions \(e\.g\., trajectories or motion fields\) to improve controllability, these conditions are costly to annotate, thereby constraining their practical applicability\. To address these limitations, we propose a camera\-aware R2V framework named AdDirector, which adaptively exploits anchored guidance from the reference image and propagates it across spatial, temporal, and scale dimensions\. Specifically, AdDirector introduces Spatio\-Temporal\-Scale \(STS\) modulation, a camera\-conditioned modulation mechanism that first selects multi\-scale reference features, and then regulates feature injection throughout the R2V generative process spatio\-temporally conditioned on camera types\. This design allows our model to adaptively balance global structural coherence and fine\-grained detail preservation\. Furthermore, AdDirector proposes Temporal Anchoring Regularization \(TAR\), a boundary\-conditioned feature\-level regularization scheme\. TAR leverages latent trajectories extracted from a base R2V model as temporal anchors, thereby reducing feature drift and improving cross\-frame appearance consistency\. These two modules together transform static reference conditioning into structured anchored guidance, and experiments show that our method substantially improves camera controllability, appearance consistency, and spatio\-temporal coherence for advertisement video generation\.

## Diff\-Aid: Inference\-time Adaptive Interaction Denoising for Rectified Text\-to\-Image Generation

**Authors:** Binglei Li; Mengping Yang; Zhiyu Tan; Qiang Xiang; Junping Zhang; Hao Li

**ID:** 149887 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mUAzPnYiWX>) | [PDF](<https://openreview.net/pdf?id=mUAzPnYiWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149887>)

Recent text\-to\-image \(T2I\) diffusion models have achieved remarkable advancement, yet faithfully following complex textual descriptions remains challenging due to insufficient interactions between textual and visual features\. Prior approaches enhance such interactions via architectural design or handcrafted textual condition weighting, but lack flexibility and overlook the dynamic interactions across different blocks and denoising stages\. To provide a more flexible and efficient solution to this problem, we propose Diff\-Aid, a lightweight method that adaptively adjusts per\-token text and image interactions across transformer blocks and denoising timesteps\. Beyond improving generation quality, Diff\-Aid yields interpretable modulation patterns that reveal how different blocks, timesteps, and textual tokens contribute to semantic alignment during denoising\. As a plug\-and\-play module, Diff\-Aid can be seamlessly integrated into downstream applications for further improvement, including style LoRAs, controllable generation, and zero\-shot editing\. Experiments on strong baselines \(SD\~3\.5 and FLUX\) demonstrate consistent improvements in prompt adherence, visual quality, and human preference across various metrics\. Our code and models will be released\.

## AtlasVid: Efficient Ultra\-High\-Resolution Long Video Generation via Decoupled Global\-Local Modeling

**Authors:** Ziyang Mai; Yuyao Zhang; Yu\-Wing Tai

**ID:** 150426 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i7HwynFyoG>) | [PDF](<https://openreview.net/pdf?id=i7HwynFyoG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150426>)

Recent diffusion\-based video generators have achieved remarkable visual fidelity and prompt controllability, yet scaling them to ultra\-high\-resolution \(UHR\) long videos remains prohibitively expensive\. The difficulty is especially pronounced for long single\-shot generation where a continuous scene must preserve global temporal coherence, and fine\-grained spatial details without relying on clip transitions or autoregressive shot stitching\. In this work, we revisit this challenge from the perspective of decoupled modeling\. We argue that existing video diffusion models already encode strong local visual priors, while the main bottleneck lies in efficiently extending global spatiotemporal modeling as resolution and duration increase\. Based on this insight, we propose AtlasVid, a decoupled global\-local framework for efficient UHR long video generation\. AtlasVid first generates a low\-resolution and low\-FPS global semantic proxy via temporally scaled RoPE, thereby extending the temporal horizon without increasing the training token count\.  Guided by this proxy, a high\-resolution detail branch performs joint denoising with hierarchical locality\-preserving attention\. Reordered spatiotemporal windows preserve geometric locality and asymmetric global\-local attention injects aligned semantic guidance and preserves the model's pretrained ability\. This design enables resolution\-agnostic training: the model is trained only at 720P with lightweight LoRA adaptation, yet generalizes directly to 4K and beyond for longer \(&gt;10s\) video synthesis\.  Experiments show that AtlasVid substantially improves the efficiency of ultra\-high\-resolution long video generation, achieving high\-quality UHR long video generation with $60\.9\\times$ speed up and significantly less training cost and even better performance than native 4K video generators\.

## Mix\-Opt: Mixed Optimization for Memory\-Efficient Personalization of Text\-to\-Image Diffusion Models

**Authors:** Seokeon Choi; Sunghyun Park; Hyoungwoo Park; Jeongho Kim; Sungrack Yun

**ID:** 152257 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UPmtFh7dKd>) | [PDF](<https://openreview.net/pdf?id=UPmtFh7dKd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152257>)

Memory\-efficient personalization is essential for adapting text\-to\-image diffusion models while preserving user privacy and operating within the limited computational resources of edge devices\. To this end, we propose Mix\-Opt, a novel mixed optimization framework that adaptively chooses between backpropagation on low\-resolution images \(BP\-low\) and zeroth\-order optimization on high\-resolution images \(ZO\-high\), guided by the characteristics of the diffusion process\. As observed in our experiments, BP\-low efficiently adapts the model to target\-specific features, but suffers from structural distortions due to resolution mismatch\. Conversely, ZO\-high refines high\-resolution details with minimal memory overhead but faces slow convergence when applied without prior adaptation\. By complementing both methods, our framework leverages BP\-low for effective personalization while using ZO\-high for structural consistency, achieving memory\-efficient and high\-quality fine\-tuning\. To maximize the efficacy of both BP\-low and ZO\-high, we introduce a timestep\-aware probabilistic function that dynamically selects the appropriate optimization strategy during training\. This function mitigates the overfitting from BP\-low at high timesteps, where structural information is critical, while ensuring ZO\-high is applied more effectively as training progresses\. Experimental results demonstrate that our method achieves competitive performance while significantly reducing memory consumption, enabling scalable, high\-quality personalization without increasing inference latency\.

## Distribution Matching Distillation without Fake Score Network

**Authors:** YoungJoong Kim; Deokyeong Lee; Jaesik Park

**ID:** 151363 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b7mPyu8rgW>) | [PDF](<https://openreview.net/pdf?id=b7mPyu8rgW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151363>)

_Abstract unavailable from the accessible public sources._

## Demystifying Classifier\-Free Guidance for Auto\-Regressive Image Generation

**Authors:** Zhiling Zhou; Jiachun Pan; Fengzhuo Zhang; Dirk Bergemann; Zhuoran Yang

**ID:** 152530 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SSyBnCPk9V>) | [PDF](<https://openreview.net/pdf?id=SSyBnCPk9V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152530>)

_Abstract unavailable from the accessible public sources._

## PhysFlow: Physics\-Intrinsic Velocity Regularization for Motion\-Intensive Video Generation

**Authors:** Xianglong Guo; Chang Yu; Haobo Xu; Junhao Ma; Zhen Lei

**ID:** 151340 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bI9RUy8ZnA>) | [PDF](<https://openreview.net/pdf?id=bI9RUy8ZnA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151340>)

_Abstract unavailable from the accessible public sources._

## PlasticMem: Adding Temporal Reasoning to Diffusions for Consistent Long Video Generation

**Authors:** Yufei Huang; Chao Liang; Zerong Zheng; Tianshu Hu; Jianwen Jiang; Yuan Zhang; Mingyuan Gao; Chang Yu; Stan Z\. Li

**ID:** 148486 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xTHR2rP4s6>) | [PDF](<https://openreview.net/pdf?id=xTHR2rP4s6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148486>)

_Abstract unavailable from the accessible public sources._

## StatLUT: Statistical Feature\-Driven Multimodal 3D LUT Generation for Photorealistic Style Transfer

**Authors:** Yifan Wang; Zhixiang Hao; Yu Wang; Congchao Zhu

**ID:** 153359 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ly4kWIst8U>) | [PDF](<https://openreview.net/pdf?id=Ly4kWIst8U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153359>)

_Abstract unavailable from the accessible public sources._

## Frequency\-Synchronized Boundary Coupling for Training\-Free Multi\-Prompt Long Video Generation

**Authors:** Yipan Xu; Shuyong Gao; Jiyuan Fu; Keliang Yin; Jiayu Chen; Qianyu Guo; Yang Liu; Wenqiang Zhang

**ID:** 148279 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z35Hr04fUJ>) | [PDF](<https://openreview.net/pdf?id=z35Hr04fUJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148279>)

_Abstract unavailable from the accessible public sources._

## Improving Generative Adversarial Networks with Self\-Distillation

**Authors:** Antoni Nowinowski; Krzysztof Krawiec

**ID:** 151051 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dM03KyhkmA>) | [PDF](<https://openreview.net/pdf?id=dM03KyhkmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151051>)

_Abstract unavailable from the accessible public sources._

## Video\-Mirai: Autoregressive Video Diffusion Models Need Foresight

**Authors:** Yonghao Yu; Lang Huang; Runyi Li; Zerun Wang; Toshihiko Yamasaki

**ID:** 156098 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Oqbkn7POo>) | [PDF](<https://openreview.net/pdf?id=0Oqbkn7POo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156098>)

_Abstract unavailable from the accessible public sources._

## PAI\-Actor: Cinematic Multi\-Actor Character Replacement in Dynamic Scenes

**Authors:** Heyuan Gao; Bangxun Tang; Yiren Song; Guian Fang; Zijian He; Jie Yang; Mike Zheng Shou

**ID:** 152007 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WBZC4Dhzzy>) | [PDF](<https://openreview.net/pdf?id=WBZC4Dhzzy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152007>)

_Abstract unavailable from the accessible public sources._

## UniCustom: Unified Visual Conditioning for Multi\-reference Image Generation

**Authors:** Yiyan Xu; Qiulin Wang; Wenjie Wang; Yunyao Mao; Xintao Wang; Pengfei Wan; Kun Gai; Fuli Feng

**ID:** 155407 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5sCkEfsOSE>) | [PDF](<https://openreview.net/pdf?id=5sCkEfsOSE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155407>)

Multi\-reference image generation aims to synthesize images from textual instructions while faithfully preserving subject identities from multiple reference images\. Existing VLM\-enhanced diffusion models commonly rely on decoupled visual conditioning: semantic ViT features are processed by the VLM for instruction understanding, whereas appearance\-rich VAE features are injected later into the diffusion backbone\. Despite its intuitive design, this separation makes it difficult for the model to associate each semantically grounded subject with visual details from the correct reference image\. As a result, the model may recognize which subject is being referred to, but fail to preserve its identity and fine\-grained appearance, leading to attribute leakage and cross\-reference confusion in complex multi\-reference settings\. To address this issue, we propose UniCustom, a unified visual conditioning framework that fuses ViT and VAE features before VLM encoding\. This early fusion exposes the VLM to both semantic cues and appearance\-rich details, enabling its hidden states to jointly encode the referred subject and corresponding visual appearance with only a lightweight linear fusion layer\. To learn such unified representations, we adopt a two\-stage training strategy: reconstruction\-oriented pretraining that preserves reference\-specific appearance details in the fused hidden states, followed by supervised finetuning on single\- and multi\-reference generation tasks\. We further introduce a slot\-wise binding regularization that encourages each image slot to preserve low\-level details of its corresponding reference, thereby reducing cross\-reference entanglement\. Experiments on two multi\-reference generation benchmarks demonstrate that UniCustom consistently improves subject consistency, instruction following, and compositional fidelity over strong baselines\. Our code, checkpoints, and the training dataset will be released soon\.

## Tri\-Prompting: Controllable Video Generation with Scene, Subject, and Motion Prompts

**Authors:** Zhenghong Zhou; Xiaohang Zhan; Zhiqin Chen; Soo Ye Kim; Nanxuan Zhao; Haitian Zheng; Qing Liu; HE Zhang; Zhe Lin; Yuqian Zhou; Jiebo Luo

**ID:** 153501 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Kutg1nC7K3>) | [PDF](<https://openreview.net/pdf?id=Kutg1nC7K3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153501>)

Recent video diffusion models achieve strong visual quality and temporal coherence, but still lack coordinated control over scene layout, customized subject identity, and camera/subject motion\.  We study controllable video generation from three prompts: a first\-frame scene image, 3D\-aware multi\-view subject references, and a motion\-driving signal\.  This setting is challenging because background regions are often trackable under camera motion, while foreground subjects can rotate, self\-occlude, and reveal new regions that require identity\-consistent appearance\.  We introduce Tri\-Prompting, a video diffusion framework that combines multi\-view subject conditioning with dual\-conditioned motion control\.  Tri\-Prompting uses XYZ tracking points for visible background motion and low\-resolution RGB proxies for foreground subject pose, allowing the model to recover fine appearance from multi\-view references while retaining flexibility for plausible subject\-scene interactions\.  An inference\-time ControlNet scale schedule further balances motion controllability and visual realism\.  We evaluate Tri\-Prompting against specialized baselines: DaS for motion reconstruction and Phantom for subject\-driven generation\.  Tri\-Prompting achieves competitive or improved reconstruction quality, stronger multi\-view identity preservation, and better 3D consistency, while enabling 3D\-aware subject insertion and in\-scene manipulation\.

## Guiding Visual Autoregressive Models through Spectrum Weakening

**Authors:** Chaoyang Wang; Tianmeng Yang; Yunhai Tong

**ID:** 152866 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PoNh97Mzdl>) | [PDF](<https://openreview.net/pdf?id=PoNh97Mzdl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152866>)

Classifier\-free guidance \(CFG\) has become a widely adopted and practical approach for enhancing generation quality and improving condition alignment\. Recent studies have explored guidance mechanisms for unconditional generation, yet these approaches remain fundamentally tied to assumptions specific to diffusion models\. In this work, we propose a spectrum weakening framework for visual autoregressive \(AR\) models\. The method is training\-free and condition\-free by constructing a controllable weak model in the spectral domain without architectural modifications\. We theoretically show that invertible spectral transformations preserve information, while selectively retaining only a subset of the spectrum introduces controlled information reduction\. Based on this insight, we perform spectrum selection along the channel dimension of internal representations, which avoids the structural constraints imposed by diffusion models\. We further introduce a spectrum\-renormalization technique that maintains numerical stability during the weakening process\. Comprehensive empirical and ablation studies confirm the effectiveness of our approach, including raster\-scan, random\-order, and scale\-wise AR, spanning discrete and continuous modeling and covering class and text\-condition scenarios, demonstrating high\-quality unconditional generation and strong prompt alignment maintenance for conditional generation\. Code will be made available\.

## Rethinking Vector Field Learning for Generative Segmentation

**Authors:** Chaoyang Wang; Yaobo Liang; Boci Peng; Fan Duan; Yunhai Tong

**ID:** 152704 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R12MIytQsT>) | [PDF](<https://openreview.net/pdf?id=R12MIytQsT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152704>)

Taming diffusion models for generative segmentation has attracted increasing attention\. While existing approaches primarily focus on architectural tweaks or training heuristics, there remains a limited understanding of the intrinsic mismatch between continuous flow matching objectives and discrete perception tasks\. In this work, we revisit diffusion segmentation from the perspective of vector field learning\. We identify two key limitations of the commonly used flow matching objective: gradient vanishing and trajectory traversing, which result in slow convergence and poor class separation\. To tackle these issues, we propose a principled vector field reshaping strategy that augments the learned velocity field with a detached distance\-aware correction term\. This correction introduces both attractive and repulsive interactions, enhancing gradient magnitudes near centroids while preserving the original diffusion training framework\. Furthermore, we design a computationally efficient, quasi\-random centroid encoding scheme inspired by Kronecker sequences, which integrates seamlessly with an end\-to\-end pixel neural field framework for pixel\-level semantic alignment\. Extensive experiments consistently demonstrate significant improvements over vanilla flow matching approaches, substantially narrowing the performance gap between generative segmentation and strong discriminative specialists\.

## OpenVTON\-Bench: A Large\-Scale High\-Resolution Benchmark for Controllable Virtual Try\-On Evaluation

**Authors:** Jin Li; Tao Chen; Kai Wen; Siqi Yin; Shuai Jiang; Weijie Wang; Jingwen Luo; Chenhui Wu

**ID:** 139156 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hkbyKxmccF>) | [PDF](<https://openreview.net/pdf?id=hkbyKxmccF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139156>)

Recent advances in diffusion models have significantly elevated the visual fidelity of Virtual Try\-On \(VTON\) systems, yet reliable evaluation remains a persistent bottleneck\. Traditional metrics struggle to quantify fine\-grained texture details and semantic consistency, while existing datasets fail to meet commercial standards in scale and diversity\. We present OpenVTON\-Bench, a large\-scale benchmark comprising approximately 100K high\-resolution image pairs \(up to $1536\\times1536$\)\. The dataset combines Gemini\-powered dense captioning with stratified sampling across 20 visual clusters obtained by DINOv3 K\-Means\. To support reliable evaluation, we propose a multi\-modal protocol that measures VTON quality along five interpretable dimensions: background consistency, identity fidelity, texture fidelity, shape plausibility, and overall realism\. The protocol integrates VLM\-based semantic reasoning with a novel Multi\-Scale Representation Metric based on SAM3 segmentation and morphological erosion, enabling the separation of boundary alignment errors from internal texture artifacts\. Under the specified evaluation rubric, our representation metric shows strong agreement with human model rankings \(Kendall's $\\tau$ of 0\.833 vs\. 0\.611 for SSIM\)\. Code and dataset are available at https://github\.com/RenxingIntelligence/OpenVTON\-Bench\.

## Accelerated Image Editing via Consistency\-Aware Source Token Pruning

**Authors:** Jeongsol Kim; Jong Chul Ye; Yufei Wang; Jian Wang

**ID:** 149846 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mrTRzrrt4V>) | [PDF](<https://openreview.net/pdf?id=mrTRzrrt4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149846>)

Text\-based image editing has recently been reinterpreted in large multimodal transformers as conditional generation, where source image tokens are concatenated with text and noise tokens\. While effective, this design incurs substantial computational overhead in attention layers\. To mitigate this inefficiency, we propose \{\\em TokenDrop\}, an efficient editing framework that shift the computational burden from dense source\-token conditioning to a lightweight regularized sampling update\. By transferring the influence of source tokens into a closed\-form sampling update, the method preserves source consistency with negligible cost\. To support this regularized dynamics, we introduce a deviation\-guided adaptive masking strategy that selectively drops redundant tokens while maintaining editing fidelity\. Across FluxKontext and Qwen\-Image\-Edit, our training\-free method achieves an average 22\.4\\% improvement in inference speed on PIEBench, while better preserving non\-edited regions\. The method delivers up to 1\.8$\\times$ speedup at 1024$^2$ resolution and 2$\\times$ speedup at 2048$^2$ resolution\. The code will also be released publicly\.

## Efficient Image Synthesis with Sphere Latent Encoder

**Authors:** Tung Do; Thuan H Nguyen; Hao Li

**ID:** 150206 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jw8stobZgI>) | [PDF](<https://openreview.net/pdf?id=jw8stobZgI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150206>)

Few\-step image generation has seen rapid progress, with consistency and meanflow\-based methods significantly reducing the number of sampling steps\. Despite their low inference cost, these approaches often suffer from training instability and limited scalability\. Sphere Encoder is a recent alternative that produces high\-quality images in only a few steps; however, it requires repeated transitions between the pixel space and latent space during inference while jointly optimizing reconstruction and generation within a single architecture\. This design leads to computational inefficiency and objective conflict between reconstruction and generation\. To address these limitations, we decouple the framework into a fixed pretrained image encoder and a separate latent denoising model trained entirely in a spherical latent space\. Our approach eliminates repeated pixel\-space operations during training and inference, improving efficiency and allowing reconstruction and generation to specialize independently\. On Animal\-Faces, Oxford\-Flowers and ImageNet\-1K datasets, our method significantly outperforms Sphere Encoder in both generation quality and inference speed, while achieving competitive results against strong few\-step and multi\-step baselines\.

## Text\-Vision Co\-Instructed Image Editing

**Authors:** Chenxi Xie; Yuhui Wu; Qiaosi Yi; Lei Zhang

**ID:** 148391\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148391

[Paper](<https://openreview.net/forum?id=yC4H5QD0ot>) | [PDF](<https://openreview.net/pdf?id=yC4H5QD0ot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148391>)

Existing image editing methods can be generally categorized into textual instruction\-based and visual prompt\-based ones\.  Textual instructions are semantically expressive, but are limited by the coarse granularity of spatial control of the editing results\. In contrast, visual prompts such as drag and point can  provide precise spatial guidance, but are limited by the inherent ambiguity in semantic intent\.  To unify the strength of textual and visual prompts, we present Text\-Vision Co\-Instructed Image Editing, which jointly models textual instructions as semantic intent and sparse visual instructions as spatial guidance, aiming to achieve precise and intent\-faithful image manipulation\. To this end, we first construct a textual\-visual instruction paired dataset with more than 23K samples derived from dynamic videos, enabling aligned supervision for cross\-modal instruction\. We then propose TV\-Edit, a Textual\-Visual instruction unified Editing framework to contextualize drag or point\-based visual instructions with image\-text semantics and lift them into semantic\-aware control representations for pretrained editing backbones\.  By integrating semantic intent and spatial constraints, TV\-Edit leads to more precise spatial control, less instruction ambiguity, and stronger structural consistency than text\-only or drag\-based alternatives\.  Finally, we establish TV\-Edit\-Bench, a deliberately designed benchmark to evaluate semantic faithfulness, spatial alignment, and visual consistency with ground\-truth references and controlled textual–visual variations for reliable assessment\. Our experiments across multiple editing backbones demonstrate that TV\-Edit consistently yields more precise and intent\-faithful edits, significantly outperforming state\-of\-the\-art instruction\-based and drag\-based baselines\. Data, model, and codes will be released\.

## MegaStyle: Constructing Diverse and Scalable Style Dataset via Consistent Text\-to\-Image Style Mapping

**Authors:** Junyao Gao; Sibo Liu; Jiaxing Li; Yanan SUN; Yuanpeng Tu; Fei Shen; Weidong Zhang; Cairong Zhao; Jun Zhang

**ID:** 139382\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139382

[Paper](<https://openreview.net/forum?id=Tsy4EJwae5>) | [PDF](<https://openreview.net/pdf?id=Tsy4EJwae5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139382>)

In this paper, we introduce MegaStyle, a novel and scalable data curation pipeline that constructs an intra\-style consistent, inter\-style diverse and high\-quality style dataset\. We achieve this by leveraging the consistent text\-to\-image style mapping capability of current large generative models, which can generate images in the same style from a given style description\. Building on this foundation, we curate a diverse and balanced prompt gallery with 170K style prompts and 400K content prompts, and generate a large\-scale style dataset MegaStyle\-1\.4M via content–style prompt combinations\. With MegaStyle\-1\.4M, we propose style\-supervised contrastive learning to fine\-tune a style encoder MegaStyle\-Encoder for extracting expressive, style\-specific representations, and we also train a FLUX\-based style transfer model MegaStyle\-FLUX\. Extensive experiments demonstrate the importance of maintaining intra\-style consistency, inter\-style diversity and high\-quality for style dataset, as well as the effectiveness of the proposed MegaStyle\-1\.4M\. Moreover, when trained on MegaStyle\-1\.4M, MegaStyle\-Encoder and MegaStyle\-FLUX provide reliable style similarity measurement and generalizable style transfer, making a significant contribution to the style transfer community\.

## X2HDR: HDR Image Generation in a Perceptually Uniform Space

**Authors:** Ronghuan Wu; Wanchao Su; Kede Ma; Jing Liao; Rafal Mantiuk

**ID:** 148447\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148447

[Paper](<https://openreview.net/forum?id=xjyKFJeXLL>) | [PDF](<https://openreview.net/pdf?id=xjyKFJeXLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148447>)

High\-dynamic\-range \(HDR\) formats and displays are becoming increasingly prevalent, yet state\-of\-the\-art image generators \(e\.g\., Stable Diffusion and FLUX\) typically remain limited to low\-dynamic\-range \(LDR\) output due to the lack of large\-scale HDR training data\. In this work, we show that existing pretrained diffusion models can be easily adapted to HDR generation without retraining from scratch\. A key challenge is that HDR images are natively represented in linear RGB, whose intensity and color statistics differ substantially from those of sRGB\-encoded LDR images\. This gap, however, can be effectively bridged by converting HDR inputs into perceptually uniform encodings \(e\.g\., using PU21 or PQ\)\. Empirically, we find that LDR\-pretrained variational autoencoders \(VAEs\) reconstruct PU21\-encoded HDR inputs with fidelity comparable to LDR data, whereas linear RGB inputs cause severe degradations\. Motivated by this finding, we describe an efficient adaptation strategy that freezes the VAE and finetunes only the denoiser via low\-rank adaptation in a perceptually uniform space\. This results in a unified computational method that supports both text\-to\-HDR synthesis and single\-image RAW\-to\-HDR reconstruction\. Experiments demonstrate that our perceptually encoded adaptation consistently improves perceptual fidelity, text\-image alignment, and effective dynamic range, relative to previous techniques\.

## GRASP: Guided Residual Adapters with Sample\-wise Partitioning

**Authors:** Felix Nützel; Mischa Dombrowski; Bernhard Kainz

**ID:** 152072\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152072

[Paper](<https://openreview.net/forum?id=VfoRDHdZvl>) | [PDF](<https://openreview.net/pdf?id=VfoRDHdZvl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152072>)

Text\-to\-image flow matching transformers degrade sharply in long\-tail settings: tail\-class outputs collapse in fidelity and diversity, limiting their value as synthetic augmentation for rare conditions\. We trace this to low head\-versus\-tail gradient alignment during fine\-tuning, an optimization\-level pathology that conditioning\- and sampling\-side interventions do not address\. We propose GRASP \(Guided Residual Adapters with Sample\-wise Partitioning\): a deterministic partition of the conditioning space, paired with group\-specific residual adapters in the transformer feedforward layers, that leaves the flow\-matching objective and the sampler untouched\. In conditional flow matching, condition values index distinct sets of probability paths, so partitioning along the conditioning is the structurally correct factorization suitable as gradient alignment proxy\. Because the partition is static, every tail sample is guaranteed to update its assigned expert, which bypasses extreme longtail failure modes\. Crucially, GRASP is non\-invasive and composable: on MIMIC\-CXR\-LT, combining GRASP with self\-guided minority sampling at inference time yields the best all\-labels IRS we observe, beyond either intervention alone\. GRASP itself reduces overall FID by up to 80\\% and lifts tail\-class coverage by up to 44\\% over full fine\-tuning, learned\-routing MoE, and minority guidance\. Used as training data for a downstream DenseNet classifier on NIH\-CXR\-LT, GRASP synthetics significantly outperform every non\-GRASP alternative on macro F1, match the macro F1 obtained from real training data, and yield nonzero F1 on $9$ of $13$ classes versus $3$ of $13$ from full fine\-tuning\. Results on ImageNet\-LT confirm the mechanism is not tied to medical inductive bias\.

## Rebalancing Reference Frame Dominance to Improve Motion in Image\-to\-Video Models

**Authors:** Wooseok Jeon; Seungho Park; Seunghyun Shin; Sangeyl Lee; Hyeonho Jeong; Hae\-Gon Jeon

**ID:** 154264 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F5Ye7KS0H2>) | [PDF](<https://openreview.net/pdf?id=F5Ye7KS0H2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154264>)

Image\-to\-video models often generate videos that remain overly static, compared to text\-to\-video models\. While prior approaches mitigate this issue by weakening or modifying the image\-conditioning signal, they often require additional training or sacrifice fidelity to the reference image\. In this work, we identify reference\-frame dominance as a key mechanism behind motion suppression\. We observe that non\-reference frames in I2V models allocate excessive self\-attention to reference\-frame key tokens, causing reference information to be over\-propagated across time and suppressing inter\-frame dynamics\. Based on this finding, we propose DyMoS \(Dynamic Motion Slider\), a training\-free and model\-agnostic method that rebalances the attention pathway from generated frames to the reference frame during initial denoising steps\. DyMoS leaves both the input image and model weights unchanged and introduces a single scalar parameter for continuous control over motion strength\. Experiments across multiple state\-of\-the\-art I2V backbones demonstrate that DyMoS consistently improves motion dynamics while maintaining visual quality and fidelity to the reference image\.

## Cache the Future: Training\-Free Self\-Revision for Diffusion Transformer Acceleration

**Authors:** Yiyang Li; Weixuan Huang; Wei Zhang

**ID:** 149314 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r6WJ2zUzRI>) | [PDF](<https://openreview.net/pdf?id=r6WJ2zUzRI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149314>)

Although recent training\-free acceleration methods have achieved promising speedups for Diffusion Transformers, most rely on historical features, either by directly reusing cached features or by forecasting future features from them\. Such a history\-to\-future design can accumulate errors when the prediction horizon becomes long\. To address this issue, we propose FuCa, a Cache\-the\-Future training\-free acceleration framework\. Instead of extrapolating future information solely from the past, FuCa caches sparsely computed future features and uses them as online revision signals\. FuCa revises the latent\-state update and the corresponding velocity, and then recovers skipped timesteps through lightweight interpolation\. It requires no extra training or model\-specific auxiliary modules, while keeping the number of DiT forward evaluations low\. Experiments on FLUX\.1\-dev, Qwen\-Image, Wan2\.1\-1\.3B, and Hunyuan Video show that FuCa achieves up to about 5$\\times$ speedup for image generation and more than 4\.3$\\times$ speedup for video generation, with higher reconstruction quality than existing training\-free baselines\.

## SpaG\-DiT: Enhancing Spatial Grounding for Diffusion Transformers

**Authors:** Zongliang Wu; Benlei Cui; Longtao Huang; Xiaoqian Xia; Yupeng Cao; Hui Xue&amp;amp;\#x27;; Tuo Chen; Haiwen Hong; Xin Yuan

**ID:** 153058 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OKeNQCptbZ>) | [PDF](<https://openreview.net/pdf?id=OKeNQCptbZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153058>)

Despite remarkable progress in text\-to\-image generation, current Diffusion Transformers \(DiTs\) inherently struggle with learning intricate visual content, such as accurate multilingual scene text rendering and novel visual concepts\. This limitation stems from the inherent contradiction between vague semantic guidance provided by text and the objects of accurate reconstruction during diffusion training\. To address this bottleneck, we propose SpaG\-DiT, a novel spatial grounding training framework\. SpaG\-DiT directly injects explicit spatial priors into the DiTs before the attention module via Contextual Diagonal Position Encoding \(CDPE\), which dynamically modulates spatial coordinates without destroying the inherent sequential structure of the linguistic input\. Furthermore, we introduce VLM Grounding Guidance \(VLM\-GG\) as an automated pipeline to extract implicit spatial priors from pre\-trained Vision\-Language Models, eliminating human annotation costs\. To evaluate the grounding ability, we establish two new datasets: SpaG\-DiT\-MultiLingual for non\-Latin/Chinese text rendering and SpaG\-DiT\-Creature for new concept learning\. Extensive experiments demonstrate that SpaG\-DiT achieves superior training efficiency and significantly outperforms vanilla self\-finetuning on the above two tasks and the widely adopted GenEval benchmark\. These results validate the plug\-and\-play nature of SpaG\-DiT and its potential to enhance DiT training processes\. Code, model, and data will be released\.

## PhysTacGen: Physics\-Aware Visual\-Tactile Sensor Image Generation

**Authors:** Guo Tang; Yongtao Wang

**ID:** 151400 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=axCCAlTFE7>) | [PDF](<https://openreview.net/pdf?id=axCCAlTFE7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151400>)

Realistic physical interaction is a cornerstone of embodied intelligence, yet obtaining high\-fidelity tactile data remains significantly more expensive than visual data\. This scarcity necessitates Visual\-to\-Tactile synthesis to bridge the Sim\-to\-Real gap\. However, existing data\-driven approaches often treat this as a naive image\-to\-image translation task, neglecting fundamental contact mechanics\. Moreover, the inherent spatial misalignment in real\-world visual\-tactile datasets frequently forces generative models to average out spatial uncertainties, resulting in blurry and textureless outputs\. To address these limitations, we introduce PhysTacGen, a physics\-aware generation framework that enforces consistency between visual appearance and tactile mechanics\. Our system makes three technical contributions\. Firstly, we propose Group Tactile Policy Optimization \(GTPO\), a reinforcement learning alignment strategy that refines Large Multimodal Models to infer latent physical properties by rewarding physics\-consistent reasoning chains\. Secondly, we introduce a Semantic\-Driven Data Curation and Visual Prior pipeline, leveraging DINOv2 to filter spatially misaligned data and extracting pure depth maps to decouple macro\-geometry from surface texture\. Finally, we present a physics\-driven generative architecture based on Stable Diffusion XL \(SDXL\)\. It synthesizes tactile images via a ControlNet conditioned on GTPO\-generated physical descriptions and depth\-augmented visual priors\. Extensive experiments demonstrate that PhysTacGen achieves state\-of\-the\-art perceptual quality and significantly enhances grasp force prediction for zero\-shot Sim\-to\-Real transfer\.

## OTEdit: Entropic Transport Corrected Trajectory for Inversion\-Free Flow\-Based Image Editing

**Authors:** Rameshwar Mishra; Akshay Modi; A\. Subramanyam

**ID:** 152476 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SnQJpsC6YB>) | [PDF](<https://openreview.net/pdf?id=SnQJpsC6YB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152476>)

Inversion\-free methods for text\-driven image editing construct direct ODE paths between source and target distributions using pre\-trained flow models, but operate on single trajectories vulnerable to noise\-induced drift with no mechanism to exploit the geometry of plausible edits\. We propose Transport\-Guided Flow Editing, which recasts the editing problem in distributional terms: we construct source and target particle clouds in latent space, solve entropic optimal transport between them with an edit\-direction\-aware cost, and use the resulting barycentric map to define a time\-varying correction field for the editing ODE\. The transport plan adapts online at each integration step, and the correction strength is governed by a variational co\-state derived from the OT anchor, responding to accumulated trajectory deviation rather than following a fixed schedule\. The output is a single edited image, but one whose trajectory has been steered by distributional information inaccessible to single\-trajectory methods\. Extensive experiments demonstrate state\-of\-the\-art structure preservation with superior semantic alignment and consistent human preference over existing baselines\.

## Probing Visual Planning in Image Editing Models

**Authors:** Zhimu Zhou; Yanpeng Zhao; Qiuyu Liao; Bo Zhao; Xiaojian \(Shawn\) Ma

**ID:** 154346\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154346

[Paper](<https://openreview.net/forum?id=EHLQuJxU7e>) | [PDF](<https://openreview.net/pdf?id=EHLQuJxU7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154346>)

Visual planning represents a crucial facet of human intelligence, especially in tasks that require complex spatial reasoning and navigation\. Yet, in machine learning, this inherently visual problem is often tackled through a verbal\-centric lens\. While recent research demonstrates the promise of fully visual approaches, they suffer from significant computational inefficiency due to the step\-by\-step planning\-by\-generation paradigm\. In this work, we present EAR, an editing\-as\-reasoning paradigm that reformulates visual planning as a single\-step image transformation\. To isolate intrinsic reasoning from visual recognition, we employ abstract puzzles as probing tasks and introduce AMAZE, a procedurally generated dataset that features the classical Maze and Queen problems, covering distinct, complementary forms of visual planning\. The abstract nature of AMAZE also facilitates automatic evaluation of autoregressive and diffusion\-based models in terms of both pixel\-wise fidelity and logical validity\. We assess leading proprietary and open\-source editing models\. The results show that they all struggle in the zero\-shot setting, finetuning on basic scales enables remarkable generalization to larger in\-domain scales and out\-of\-domain scales and geometries\. However, our best model that runs on high\-end hardware fails to match the zero\-shot efficiency of human solvers, highlighting a persistent gap in neural visual reasoning\.

## CoDMD: Copula\-aware Distribution Matching Distillation for Fast Video Generation

**Authors:** Wenhu Zhang; Kun Cheng; Changyuan Wang; Shiyao Li; Yuechen Zhang; Wenbo Li; Jiajun Zha; Jingyi Zhang; Kang Zhao; Jiaya Jia

**ID:** 154796\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154796

[Paper](<https://openreview.net/forum?id=AtixmYM4CB>) | [PDF](<https://openreview.net/pdf?id=AtixmYM4CB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154796>)

Few\-step distillation for video diffusion models has attracted significant attention, driven by the urgent demand for efficient deployment in real\-world scenarios\. However, Distribution Matching Distillation \(DMD\), a leading paradigm, tends to degrade under limited NFE budgets, manifesting in video generation as layout instability, oversaturation, and broken motion dynamics\. We trace this failure to a structural limitation: standard DMD is an intra\-sample distribution\-matching objective with coordinate\-wise gradients, and thus imposes no explicit constraint on the relational geometry across batch elements or temporal frames, leaving the underlying copula largely unregulated\. Combined with the mode\-seeking tendency of its reverse\-KL objective, this absence of relational guidance makes DMD prone to collapsing into local optima in the few\-step regime\. Motivated by this insight, we propose Copula\-aware DMD \(CoDMD\), a lightweight relational regularizer that reuses score estimates already produced by the frozen teacher and the online fake model to construct pairwise relation matrices across samples and frames\.These are matched through a supplementary distributional objective that requires no additional networks, datasets, or sampling trajectories\. On the Wan\-2\.1\-T2V model series at 1\.3B \\&amp; 14B scales, CoDMD distills 50\-step teachers into 4\-step students, achieving an approximate 25$\\times$ speed\-up while attaining VBench scores of 84\.46 \\&amp; 84\.87, outperforming prior trajectory\-based \(rCM 82\.81 \\&amp; 84\.05\) and distribution\-based \(DMD 83\.38 \\&amp; 83\.81\) methods\.

## Characterizing the Aesthetic Defaults of Generative Image Models

**Authors:** Maty Bohacek; Raina Panda; Daniel Fein; Arpita Singhal; Mark Fiore; Bill Freeman; Maneesh Agrawala

**ID:** 139666\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139666

[Paper](<https://openreview.net/forum?id=C0BaTNbw0c>) | [PDF](<https://openreview.net/pdf?id=C0BaTNbw0c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139666>)

Contemporary text\-to\-image \(T2I\) models are widely observed to exhibit a recognizable, model\-specific look even when prompted without any stylistic instruction \(e\.g\., the so\-called \`\`Midjourney look''\)\. What such a default aesthetic actually is, however, has not been characterized: dominant T2I evaluation paradigms score realism, prompt alignment, or pairwise preference, but cannot say which concepts drive separation, how they shift across releases, or how they relate to real\-image distributions\. We address this with a concept\-level decomposition of generator outputs along an interpretable, style\-trained sparse vocabulary\. We introduce LouvreSAE, a sparse autoencoder over CLIP image embeddings whose dictionary is shaped to fall on stylistic rather than object features, and LatentAesthetic, an evaluation methodology that uses it to estimate, ground, and compare generators' default aesthetics under content\-controlled, style\-neutral prompts\. Applied to 26 generators spanning four years, our methodology surfaces stable per\-generator profiles, a uniform pull toward lifestyle and editorial photography over art\-historical imagery, and a steady cross\-family contraction of the aesthetic envelope, supporting hypotheses of an algorithmic monoculture in image generation\. Code, weights, and data are available at https://hf\.co/datasets/neurips\-subm/anonymous for the evaluation of future models\.

## Steering Away from Memorization: Reachability\-Constrained Reinforcement Learning for Text\-to\-Image Diffusion

**Authors:** Sathwik Karnik; Juyeop Kim; Sanmi Koyejo; Jong\-Seok Lee; Somil Bansal

**ID:** 149209\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149209

[Paper](<https://openreview.net/forum?id=s8BKAZHA8D>) | [PDF](<https://openreview.net/pdf?id=s8BKAZHA8D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149209>)

Text\-to\-image diffusion models are susceptible to memorization, revealing a fundamental failure to generalize beyond the training set\. Current mitigation approaches typically sacrifice image quality or prompt alignment to reduce memorization\. To address this, we propose \*\*R\*\*eachability\-\*\*A\*\*ware \*\*D\*\*iffusion \*\*S\*\*teering \(RADS\), an offline\-trained, inference\-time framework that mitigates memorization while maintaining generation fidelity\. RADS models the diffusion denoising process as a dynamical system and uses reachability analysis to learn a safety value function that characterizes intermediate latent states along trajectories leading to memorized samples\. This motivates a constrained reinforcement learning \(RL\) formulation, where a policy learns to steer the trajectory away from memorization via minimal perturbations in the caption embedding space\. Empirical evaluations show that RADS achieves a stronger empirical Pareto frontier between generation diversity \(SSCD\), quality \(FID\), and alignment \(CLIP\) compared to state\-of\-the\-art inference\-time baselines\. Crucially, RADS provides robust mitigation without modifying the diffusion backbone, offering a plug\-and\-play solution for diverse image generation\.

## LENS: Low\-Frequency Eigen Noise Shaping for Efficient Diffusion Sampling

**Authors:** Haewon Jeon; Si\-Hyeon Lee

**ID:** 152345 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tl88REPTcW>) | [PDF](<https://openreview.net/pdf?id=Tl88REPTcW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152345>)

_Abstract unavailable from the accessible public sources._

## MilliVid: Adaptive Latents for Long\-Range Consistency in Video Generation

**Authors:** Ishaan Chandratreya; David Charatan; Basile Van Hoorick; Sergey Zakharov; Vitor Guizilini; Phillip Isola; Vincent Sitzmann

**ID:** 155135 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=86Z2vQcbuD>) | [PDF](<https://openreview.net/pdf?id=86Z2vQcbuD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155135>)

_Abstract unavailable from the accessible public sources._

## Context\-Aware Autoregressive Image Generation for Emerging Reasoning Properties

**Authors:** Jixuan Ying; Haoyu Liu; Timing Yang; Tingyu Zhu; Predrag Neskovic; Anand Bhattad; Cihang Xie; Zeyu Zheng; Alan Yuille; Feng Wang

**ID:** 151846 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XS3R795hKo>) | [PDF](<https://openreview.net/pdf?id=XS3R795hKo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151846>)

_Abstract unavailable from the accessible public sources._

## PARE: Pruning and Adaptive Routing for Efficient Video Generation

**Authors:** Yutong Wang; Yunke Wang; Tianfan Xue; Yu Qiao; Yaohui WANG; Xinyuan Chen; Chang Xu

**ID:** 151968 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WSWLqEZjZV>) | [PDF](<https://openreview.net/pdf?id=WSWLqEZjZV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151968>)

_Abstract unavailable from the accessible public sources._

## Activation Steering of Video Generation Models via Reduced\-Order Linear Optimal Control

**Authors:** Jihoon Hong; Alice Chan; Qiyue Dai; Julian Skifstad; Glen Chou

**ID:** 150198\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150198

[Paper](<https://openreview.net/forum?id=jzkIT7ApwP>) | [PDF](<https://openreview.net/pdf?id=jzkIT7ApwP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150198>)

Text\-to\-video \(T2V\) models trained on large\-scale web data can generate undesired content, motivating interventions that reduce harmful outputs without sacrificing visual quality\. Activation steering offers an attractive mechanistic alternative to finetuning and prompt filtering, but existing T2V steering methods remain limited, typically applying coarse non\-anticipative interventions that can lead to oversteering and content degradation\. To close this gap, we propose Latent Activation Linear\-Quadratic Regulator \(LA\-LQR\), a reduced\-order optimal control framework for minimally invasive T2V steering\. LA\-LQR formulates T2V inference as a dynamical system and computes closed\-loop feedback interventions that steer activations toward desired feature setpoints while penalizing unnecessary perturbations\. To make optimal control feasible for high\-dimensional video activations, we project activations onto a low\-dimensional, task\-relevant subspace derived from contrastive prompt pairs, estimate local linear dynamics in this latent space, and solve a latent LQR problem to obtain timestep\- and layer\-specific steering signals\. We provide theoretical bounds relating latent setpoint tracking to raw activation\-space feature control, and empirically validate the fidelity of the reduced latent dynamics\. On concept steering and video safety benchmarks, LA\-LQR reduces unsafe generations relative to baselines, while preserving prompt fidelity and visual quality\.

## Rethinking Cross\-Layer Information Routing in Diffusion Transformer

**Authors:** Chao Xu; Maohua Li; Qirui Li; Yixuan Xu; Yanke Zhou; Yunhe LI; Cuifeng Shen; Hanlin Tang; Kan Liu; Tao Lan; Lin Qu; Shao\-Qun Zhang

**ID:** 154194\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154194

[Paper](<https://openreview.net/forum?id=FV5fsUXnll>) | [PDF](<https://openreview.net/pdf?id=FV5fsUXnll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154194>)

Diffusion Transformers \(DiTs\) have become the de facto backbone of modern visual generation, and nearly every major axis of their design \-\-\- tokenization, attention, conditioning, objectives, and latent autoencoders \-\-\- has been thoroughly revisited\. The residual stream that governs how information accumulates across layers, however, has been directly inherited from the original Transformer\. In this paper, we present a systematic analysis of cross\-layer information flow in DiT jointly along depth and denoising timestep, and identify three concrete symptoms of traditional residual addition, i\.e\., monotonic forward magnitude inflation, sharp backward gradient decay, and pronounced block\-wise redundancy\. Motivated by this diagnosis, we propose Diffusion\-Adaptive Routing \(\\textsc\{DAR\}\), a drop\-in residual replacement that performs \\emph\{learnable, timestep\-adaptive, and non\-incremental\} aggregation over the history of sublayer outputs\. Moreover, the proposed DAR is compatible with many modern Transformer enhancement methods, such as REPA\. On ImageNet $256\\times256$, \\textsc\{DAR\} improves SiT\-XL/2 by $2\.11$ FID \($7\.56$ vs\.\\ $9\.67$\) and matches the baseline's converged quality in $8\.75\\times$ fewer training iterations\. Stacked on top of REPA, it yields a $2\\times$ training acceleration in the early stage, revealing cross\-layer information routing as a hitherto\-overlooked axis of progress in diffusion modeling, one that operates orthogonally to existing representation\-alignment objectives\. Beyond the pretrain tasks, \\textsc\{DAR\} can be further applied in large\-scale T2I models fine\-tuning stage and preserves high\-frequency details during Distribution Matching Distillation\.

## Action Images: End\-to\-End Policy Learning via Multiview Video Generation

**Authors:** Haoyu Zhen; Zixian Gao; Qiao Sun; yilin zhao; Yuncong Yang; Yilun Du; Pengsheng Guo; Tsun\-Hsuan Johnson Wang; Yi\-Ling Qiao; Chuang Gan

**ID:** 150968\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150968

[Paper](<https://openreview.net/forum?id=dvcWzyuusE>) | [PDF](<https://openreview.net/pdf?id=dvcWzyuusE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150968>)

World action models \(WAMs\) have emerged as a promising direction for robot policy learning, as they can leverage powerful video backbones to model the future states\. However, existing approaches often rely on separate action modules, or use action representations that are not pixel\-grounded, making it difficult to fully exploit the pretrained knowledge of video models and limiting transfer across viewpoints and environments\. In this work, we present Action Images, a unified world action model that formulates policy learning as multiview video generation\. Instead of encoding control as low\-dimensional tokens, we translate 7\-DoF robot actions into interpretable action images: multi\-view action videos that are grounded in 2D pixels and explicitly track robot\-arm motion\. This pixel\-grounded action representation allows the video backbone itself to act as a zero\-shot policy, without a separate policy head or action module\. Beyond control, the same unified model supports video\-action joint generation, action\-conditioned video generation, and action labeling under a shared representation\. On RLBench and real\-world evaluations, our model achieves the strongest zero\-shot success rates and improves video–action joint generation quality over prior video\-space world models, suggesting that interpretable action images are a promising route to policy learning\.

## Text\-Vision Co\-Instructed Image Editing

**Authors:** Chenxi Xie; Yuhui Wu; Qiaosi Yi; Lei Zhang

**ID:** 148391\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148391

[Paper](<https://openreview.net/forum?id=yC4H5QD0ot>) | [PDF](<https://openreview.net/pdf?id=yC4H5QD0ot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148391>)

Existing image editing methods can be generally categorized into textual instruction\-based and visual prompt\-based ones\.  Textual instructions are semantically expressive, but are limited by the coarse granularity of spatial control of the editing results\. In contrast, visual prompts such as drag and point can  provide precise spatial guidance, but are limited by the inherent ambiguity in semantic intent\.  To unify the strength of textual and visual prompts, we present Text\-Vision Co\-Instructed Image Editing, which jointly models textual instructions as semantic intent and sparse visual instructions as spatial guidance, aiming to achieve precise and intent\-faithful image manipulation\. To this end, we first construct a textual\-visual instruction paired dataset with more than 23K samples derived from dynamic videos, enabling aligned supervision for cross\-modal instruction\. We then propose TV\-Edit, a Textual\-Visual instruction unified Editing framework to contextualize drag or point\-based visual instructions with image\-text semantics and lift them into semantic\-aware control representations for pretrained editing backbones\.  By integrating semantic intent and spatial constraints, TV\-Edit leads to more precise spatial control, less instruction ambiguity, and stronger structural consistency than text\-only or drag\-based alternatives\.  Finally, we establish TV\-Edit\-Bench, a deliberately designed benchmark to evaluate semantic faithfulness, spatial alignment, and visual consistency with ground\-truth references and controlled textual–visual variations for reliable assessment\. Our experiments across multiple editing backbones demonstrate that TV\-Edit consistently yields more precise and intent\-faithful edits, significantly outperforming state\-of\-the\-art instruction\-based and drag\-based baselines\. Data, model, and codes will be released\.

## TrackTok: Object\-Centric Video Tokenization with Semantically Persistent Tokens

**Authors:** Nhi Pham; Christopher Wewer; Bernt Schiele; Jonas Fischer; Jan Eric Lenssen

**ID:** 150674 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gLXvwn6vSP>) | [PDF](<https://openreview.net/pdf?id=gLXvwn6vSP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150674>)

We introduce TrackTok, an efficiency\-focused video tokenization framework that produces object\-centric tokens, i\.e\., tokens that consistently encode the same semantic objects across time, even as it moves, deforms, or undergoes partial occlusion\. Conventional patch\-based or existing holistic tokenizers produce token identities often tied to fixed image locations\. In contrast, our approach learns temporally persistent object\-centric representations that bind visual features across frames into stable semantic units\. This enables substantially more compact, continuous latent video representations, reducing the number of tokens required for downstream generative modeling with state\-of\-the\-art flow models, while preserving the semantic structure needed for high\-quality synthesis\. On the UCF\-101 video generation benchmark, we provide a proof of principle that our tokenizer uses \~4x fewer latent tokens to achieve the same generative FVD compared to existing holistic tokenizers\. This results in an up to 10x increase in sample throughput, offering a favorable quality\-efficiency trade\-off\. These results suggest that object\-aligned and temporally persistent tokenization is a promising direction for scalable video generation, where reducing latent token counts is critical for efficient modeling\.

## CRePE: Curved Ray Expectation Positional Encoding for Unified\-Camera\-Controlled Video Generation

**Authors:** Seonghyun Jin; youngmin Kim; Sunwoo Park; Jong Chul Ye

**ID:** 149844 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=msKXlv69Pt>) | [PDF](<https://openreview.net/pdf?id=msKXlv69Pt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149844>)

Camera\-conditioned video generation requires positional encoding that remains reliable under changes in camera motion, lens configuration, and scene structure\.  However, existing attention\-level camera encodings either provide ray\-only camera signals or rely on pinhole camera geometry, limiting their applicability to general camera control under the Unified Camera Model, including wide\-angle and fisheye lenses\. To address this limitation, we propose Curved Ray Expectation Positional Encoding \(CRePE\)\.  CRePE represents each image token as a depth\-aware positional distribution along its source ray, providing a Unified Camera Model\-compatible positional encoding that naturally captures the curved\-ray geometry of wide\-angle and fisheye cameras\. CRePE is implemented through a Geometric Attention Adapter added to frozen video DiTs, injecting token\-wise scene\-distance information into proper attention layers and stabilizing it with pseudo supervision from a monocular geometry foundation model\. This design leads to more stable camera control and improved video quality in camera\-conditioned video generation under the Unified Camera Model\.  Controlled positional\-encoding ablations show consistent improvements over existing multi\-view positional encoding, demonstrating the effectiveness of curved\-ray\-aware positional encoding across diverse camera models\. Furthermore, by extending the same positional\-encoding pathway to external geometry control through Radial MixForcing, CRePE supports external radial\-map control for scene\-geometry\-conditioned generation and source\-video motion transfer beyond camera control\.

## Trajectory Forcing: Exploiting Diffusion Trajectories for Autoregressive Long Video Generation

**Authors:** Bohan Wang; Shuo Chen; Yunzhi Li; Zhaozheng CHEN; Junzhe Zhang; Hanwang Zhang

**ID:** 150864 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=em6QThoqTy>) | [PDF](<https://openreview.net/pdf?id=em6QThoqTy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150864>)

Autoregressive \(AR\) modeling is arguably the only way to extend a fixed\-length video diffusion model to longer or even streaming videos\. However, existing AR diffusion methods use only the previously predicted chunk as context for the next, discarding the intermediate predictions that constitute the chunk's generation history\. In contrast, conventional AR models such as LLMs condition on the entire history of preceding tokens\. To this end, we propose Trajectory Forcing \(TraF\), an AR diffusion method that exploits the denoising trajectories of previous video chunks as context\. TraF operates under two training regimes: \(1\) with ground\-truth videos, where pseudo\-trajectories are constructed from Gaussian interpolations and re\-predicted by the model, and \(2\) with a teacher model, where real trajectories are obtained from the student's own denoising rollout\. The first regime naturally provides a strong initialization for the second\. On the 5\-second VBench benchmark, TraF achieves a Total score of 85\.15, outperforming Self Forcing \(\+0\.84\) and Causal Forcing \(\+1\.11\) under the same training configuration, with Quality and Semantic improving simultaneously\. On 30\-second generation — $6\\times$ the training horizon — TraF achieves the highest overall quality among all compared methods\.

## OmniMem: Scalable and Adaptive Memory Retrieval for Long Video Generation

**Authors:** Lin Zhao; Yushu Wu; Yifan Gong; Yanzhi Wang; Pu Zhao

**ID:** 150029 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lJpXhbi9az>) | [PDF](<https://openreview.net/pdf?id=lJpXhbi9az>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150029>)

Autoregressive \(AR\) video generation extends videos by producing latent chunks sequentially, but scaling to long videos requires repeated access to a growing historical KV cache\. Existing methods reduce this cost by truncating the KV cache or compressing it into implicit memory, but both lose explicit access to query\-relevant historical details\. We propose OmniMem, an explicit full\-range memory retrieval framework that performs sparse KV retrieval over the historical cache\. To make this practical for chunk\-based AR video generation, OmniMem addresses two issues: \(i\) local bias in sparse KV selection and \(ii\) Union Explosion in memory access\. Adaptive Window Exclusion removes local\-window blocks from the selection candidates when sufficient long\-range history is available, preserving the sparse budget for informative long\-range retrieval\. Query\-shared KV Selection reduces cross\-query diversity, while Per\-Head Scattered KV Access avoids expanding head\-specific selections into a large selected KV buffer\. This allows each attention head to retrieve non\-contiguous KV blocks according to its own selection pattern\. Experiments on long\-video generation show that OmniMem improves Dynamic Degree by 52\.3\\% and preserves strong consistency over strong baselines, while maintaining comparable memory usage\.

## $h$\-control: Training\-Free Camera Control via Block\-Conditional Gibbs Refinement

**Authors:** Yuzhu Wang; Xi Ye; Duo Su; Yangyang Xu; Jun Zhu

**ID:** 155968 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1URtIBjIQ0>) | [PDF](<https://openreview.net/pdf?id=1URtIBjIQ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155968>)

Training\-free camera control for pretrained flow\-matching video generators is a partial\-observation inverse problem: a depth\-warped guidance video supplies noisy evidence on a subset of latent sites, which the sampler must reconcile with the pretrained prior\. Existing methods struggle to balance the trade\-off between trajectory adherence and visual quality and the heuristic guidance\-strength tuning lacks robustness\. We propose $h$\-control, which resolves this dilemma through a structural change to the sampler: each outer hard\-replacement guidance step is augmented with an inner\-loop block\-conditional pseudo\-Gibbs refinement on the unobserved complement at the same noise level, with provable convergence to the partial\-observation conditional data law\. To accelerate convergence on high\-dimensional video latents, we exploit their conditional locality, partitioning the unobserved complement into 3D patches, each tracked by a custom mixing indicator that adaptively freezes converged patches\. On RealEstate10K and DAVIS, $h$\-control attains the best FVD against all seven training\-free and training\-based competitors, outperforming every training\-free baseline on every reported metric\.

## Disentangling Dual Image References in Frequency Aware Diffusion Models for Personalized Generation

**Authors:** Haipeng Liu; Yang Wang; Meng Wang

**ID:** 150058 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l5xRQDiYkv>) | [PDF](<https://openreview.net/pdf?id=l5xRQDiYkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150058>)

_Abstract unavailable from the accessible public sources._

## SpaG\-DiT: Enhancing Spatial Grounding for Diffusion Transformers

**Authors:** Zongliang Wu; Benlei Cui; Longtao Huang; Xiaoqian Xia; Yupeng Cao; Hui Xue&amp;amp;\#x27;; Tuo Chen; Haiwen Hong; Xin Yuan

**ID:** 153058\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153058

[Paper](<https://openreview.net/forum?id=OKeNQCptbZ>) | [PDF](<https://openreview.net/pdf?id=OKeNQCptbZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153058>)

Despite remarkable progress in text\-to\-image generation, current Diffusion Transformers \(DiTs\) inherently struggle with learning intricate visual content, such as accurate multilingual scene text rendering and novel visual concepts\. This limitation stems from the inherent contradiction between vague semantic guidance provided by text and the objects of accurate reconstruction during diffusion training\. To address this bottleneck, we propose SpaG\-DiT, a novel spatial grounding training framework\. SpaG\-DiT directly injects explicit spatial priors into the DiTs before the attention module via Contextual Diagonal Position Encoding \(CDPE\), which dynamically modulates spatial coordinates without destroying the inherent sequential structure of the linguistic input\. Furthermore, we introduce VLM Grounding Guidance \(VLM\-GG\) as an automated pipeline to extract implicit spatial priors from pre\-trained Vision\-Language Models, eliminating human annotation costs\. To evaluate the grounding ability, we establish two new datasets: SpaG\-DiT\-MultiLingual for non\-Latin/Chinese text rendering and SpaG\-DiT\-Creature for new concept learning\. Extensive experiments demonstrate that SpaG\-DiT achieves superior training efficiency and significantly outperforms vanilla self\-finetuning on the above two tasks and the widely adopted GenEval benchmark\. These results validate the plug\-and\-play nature of SpaG\-DiT and its potential to enhance DiT training processes\. Code, model, and data will be released\.

## PhysTacGen: Physics\-Aware Visual\-Tactile Sensor Image Generation

**Authors:** Guo Tang; Yongtao Wang

**ID:** 151400\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151400

[Paper](<https://openreview.net/forum?id=axCCAlTFE7>) | [PDF](<https://openreview.net/pdf?id=axCCAlTFE7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151400>)

Realistic physical interaction is a cornerstone of embodied intelligence, yet obtaining high\-fidelity tactile data remains significantly more expensive than visual data\. This scarcity necessitates Visual\-to\-Tactile synthesis to bridge the Sim\-to\-Real gap\. However, existing data\-driven approaches often treat this as a naive image\-to\-image translation task, neglecting fundamental contact mechanics\. Moreover, the inherent spatial misalignment in real\-world visual\-tactile datasets frequently forces generative models to average out spatial uncertainties, resulting in blurry and textureless outputs\. To address these limitations, we introduce PhysTacGen, a physics\-aware generation framework that enforces consistency between visual appearance and tactile mechanics\. Our system makes three technical contributions\. Firstly, we propose Group Tactile Policy Optimization \(GTPO\), a reinforcement learning alignment strategy that refines Large Multimodal Models to infer latent physical properties by rewarding physics\-consistent reasoning chains\. Secondly, we introduce a Semantic\-Driven Data Curation and Visual Prior pipeline, leveraging DINOv2 to filter spatially misaligned data and extracting pure depth maps to decouple macro\-geometry from surface texture\. Finally, we present a physics\-driven generative architecture based on Stable Diffusion XL \(SDXL\)\. It synthesizes tactile images via a ControlNet conditioned on GTPO\-generated physical descriptions and depth\-augmented visual priors\. Extensive experiments demonstrate that PhysTacGen achieves state\-of\-the\-art perceptual quality and significantly enhances grasp force prediction for zero\-shot Sim\-to\-Real transfer\.

## ApertureAttn: Native 4K Video Generation with Image\-Only Supervision

**Authors:** Ruonan Yu; Zigeng Chen; Zhenxiong Tan; Songhua Liu; Xinchao Wang

**ID:** 154936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9pq44O4Vzq>) | [PDF](<https://openreview.net/pdf?id=9pq44O4Vzq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154936>)

Recent progress in video generation has been remarkable, yet state\-of\-the\-art models remain largely confined to 720p, well short of the 4K resolution of modern displays\. Scaling video generation to higher resolutions is constrained by the scarcity of high\-resolution video data and the prohibitive cost of large\-scale training\. Beyond data and compute, higher resolutions place substantially greater demands on spatial modeling, particularly for fine\-grained details, complex compositions, and local structures\. Such high\-resolution spatial supervision, however, is abundantly available in high\-resolution images, which are easier to collect and train on at scale\. This naturally raises a question: can image\-only supervision unlock native 4K video generation? To answer this, we propose ApertureAttn, an inverted attention pyramid that concentrates adaptation on high\-resolution fine\-grained spatial modeling using only single\-frame high\-resolution images, without any video training data\. We further introduce window\-scaled extrapolation and proximity\-guided temporal attention to enhance spatiotemporal consistency\. Extensive experiments show that our method enables native 4K video generation with strong visual fidelity and temporal coherence, while requiring only image supervision and minimal training cost\. Despite this lightweight training setup, it remains competitive with state\-of\-the\-art high\-resolution video generation methods trained directly on high\-resolution video data at substantially higher training cost\.

## EditBridge: Towards Faithful and Efficient Ultra\-High\-Resolution Image Editing

**Authors:** Jiayi Song; Shijie Huang; Fangtai Wu; Yubo Huang; Zhenxiong Tan; Songhua Liu; Jiaming Liu; Ruihua Huang

**ID:** 154973 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9WPA6eQqZg>) | [PDF](<https://openreview.net/pdf?id=9WPA6eQqZg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154973>)

High\-resolution image editing is increasingly demanded in professional  workflows, yet existing diffusion\-based models remain constrained to  resolutions below 1K due to quadratic attention complexity and prohibitive  memory requirements\. A prevalent workaround employs a two\-stage pipeline: editing at low resolution followed by independent super\-resolution\. However,   this approach suffers from two critical issues: information divergence,  where hallucinated details contradict the original high\-resolution \(HR\) source,  and texture degradation, manifesting as over\-smoothed or over\-sharpened  artifacts\. We propose EditBridge, a diffusion bridge framework for  efficient ultra high\-resolution editing\. Unlike conventional diffusion that  regenerates from noise, we formulate refinement as structured data\-to\-data  translation from the low\-resolution \(LR\) edited result to its HR counterpart,  explicitly conditioned on the original HR source to preserve authentic details\.  To efficiently incorporate HR source guidance, we introduce a prior\-guided  block\-wise sparse attention mechanism that exploits semantic correspondence  from first\-stage editing to constrain cross\-image interactions to spatially  aligned regions, significantly reducing computational overhead\. Extensive  experiments demonstrate that EditBridge achieves high\-fidelity editing with  superior perceptual quality at resolutions up to 4K, delivering 3\.6\-\-8\.4$\\times$ speedup at 2K and enabling practical 4K editing in 61 seconds\.

## DecQ: Detail\-Condensing Queries for Enhanced Reconstruction and Generation in Representation Autoencoders

**Authors:** Tianhang Wang; Yitong Chen; Wei Song; Zuxuan Wu; Min Li; Jiaqi Wang

**ID:** 152326 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TujfWq01JT>) | [PDF](<https://openreview.net/pdf?id=TujfWq01JT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152326>)

Representation Autoencoders \(RAEs\) leverage frozen vision foundation models \(VFMs\) as tokenizer encoders, providing robust high\-level representations that facilitate fast convergence and high\-quality generation in latent diffusion models\. However, freezing the VFM inherently constrains its spatial reconstruction capacity, limiting fine\-grained generation and image editing; in contrast, incorporating reconstruction\-oriented signals via fine\-tuning disrupts the pretrained semantic space and degrades generative fidelity\. To address this trade\-off, we propose \\textbf\{DecQ\}, a simple yet effective framework for RAEs\. Specifically, DecQ introduces lightweight detail\-condensing queries that extract fine\-grained information from intermediate VFM features through condenser modules\. These queries are incorporated into the decoder to support reconstruction and are jointly generated with patch tokens during generative modeling\. By aggregating information from both shallow and deep layers, DecQ effectively mitigates the reconstruction\-\-generation trade\-off, improving both reconstruction quality and generative performance\. Our experiments demonstrate that: \(1\) with only 8 additional queries and 3\.9\\% extra computation, DecQ improves reconstruction over the frozen DINOv2\-based RAE, increasing PSNR from 19\.13 dB to 22\.76 dB; and \(2\) for generative modeling, DecQ achieves 3\.3$\\times$ faster convergence than RAE, attaining an FID of 1\.41 without guidance and 1\.05 with guidance\.

## Channel\-wise Vector Quantization

**Authors:** Wei Song; Tianhang Wang; Yitong Chen; Zuxuan Wu; Tong Zhang; Min Li; Jiaqi Wang; Kaicheng Yu

**ID:** 152137 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VFeBuEITNa>) | [PDF](<https://openreview.net/pdf?id=VFeBuEITNa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152137>)

We present Channel\-wise Vector Quantization \(CVQ\), a novel image tokenization paradigm that replaces patch\-wise tokens with channel\-wise tokens\. Unlike conventional vector quantization, which assigns a discrete token to each patch feature vector, CVQ quantizes each channel of the feature map\. This formulation represents an image as discrete levels of visual details, rather than as a grid of spatial patches\. Based on CVQ, we introduce a new visual autoregressive framework with "next\-channel prediction"\. Instead of rendering images patch by patch in raster order, our Channel\-wise Autoregressive \(CAR\) model predicts image channels sequentially, producing progressively enriched visual details\. Specifically, it first sketches global structure and then refines fine\-grained attributes, akin to a human artist's workflow\. Empirically, we show that: \(1\) CVQ achieves 100% codebook utilization with a 16K\+ codebook size without any bells and whistles, while reducing reconstruction FID by 50% over conventional VQ; and \(2\) CAR outperforms the AR baseline by improving the GenEval score from 0\.69 to 0\.74 and the DPG score from 79\.86 to 82\.14, demonstrating strong effectiveness for text\-to\-image generation\. We hope our research offers a new perspective on the fundamental unit of visual tokenization by moving from spatial patches to channels\.

## CompJudge: Fine\-Grained Comparative Evaluation using Multimodal LLM for Subject\-Driven Generation

**Authors:** Nam Hyeon\-Woo; Wenbin Ouyang; Ciprian A Corneanu

**ID:** 148734 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vRf7unujMa>) | [PDF](<https://openreview.net/pdf?id=vRf7unujMa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148734>)

Subject\-driven generation \(SDG\) evaluation using multi\-modal LLMs \(MLLMs\) provides better interpretability and stronger alignment with human judgment than traditional embedding\-based methods\. However, MLLM\-as\-a\-Judge scores are limited in differentiating between error and error\-free SDG images\. In this paper, we propose CompJudge, which overcomes these limitations by introducing comparative capabilities to MLLM\-as\-a\-Judge and recalibrating scores based on comparison results\. To rigorously evaluate the correctness of SDG evaluators, we introduce CompILIAS, a diagnostic benchmark of triplets \(reference, identity\-preserving image, identity\-degraded image\) with verified binary ground\-truth labels indicating whether the SDG image preserves the reference identity\. We demonstrate improvements of SDG evaluation over existing approaches: 8\.9pp on CompILIAS and 10\.62\-\-15\.98pp on the DreamBench\+\+ dataset\. These improvements consistently generalize across diverse MLLM backbones and across subject categories\.

## Improving Guidance\-Free Visual Generation via Self\-Contrastive Alignment for Likelihood Estimation

**Authors:** Jiwan Hur; DongJae Lee; Dongyeun Lee; Gyojin Han; Junmo Kim

**ID:** 152467 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SsWOUYStqy>) | [PDF](<https://openreview.net/pdf?id=SsWOUYStqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152467>)

Classifier\-free guidance \(CFG\) is essential for improving sample quality in visual generation, but it incurs substantial sampling overhead\. Existing guidance\-free approaches halve this cost by approximating the CFG with a single model inference, but their performance is bounded by the CFG and inherits its limitations\. In this paper, we propose self\-contrastive guidance \(SCG\), which contrasts the model's prediction on real and self\-generated samples to obtain a direct, model\-based signal that pushes generation toward the true data manifold\. Integrating SCG into the standard likelihood objective via reparameterization yields Self\-Contrastive Alignment for Likelihood Estimation \(SCALE\), a guidance\-free training framework that produces SCG\-enhanced predictions in a single forward pass\. Across class\-conditional and text\-to\-image generation on diffusion and autoregressive models, SCALE consistently outperforms CFG\-mimicking guidance\-free baselines and improves further when combined with DPO, demonstrating that the self\-contrastive signal yields gains complementary to both CFG and preference\-based fine\-tuning\.

## Keep It CALM: Analyzing the Limits of Global Unsafety in Text\-to\-Image Generation

**Authors:** NaHyeon Park; Minhyun Lee; Hyunjung Shim

**ID:** 152066 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VjTAXEfv0N>) | [PDF](<https://openreview.net/pdf?id=VjTAXEfv0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152066>)

Training\-free safeguards for text\-to\-image diffusion models often rely on a reusable safety signal, such as an unsafe direction or global toxic subspace, applied broadly across prompts\. We provide a controlled geometric analysis of this global\-unsafety assumption and reveal a consistent coverage\-selectivity trade\-off: compact unsafe subspaces fail to cover heterogeneous unsafe semantics, whereas broader aggregation increasingly distorts safety\-adjacent benign prompts\. Motivated by this finding, we propose CALM \(Counterfactual Adaptive Local Modulation\), a training\-free safeguard that replaces uniform global removal with prompt\-local counterfactual correction\. Using matched unsafe\-benign anchors, CALM routes each prompt to active unsafe categories, minimally edits only violating token representations toward the safe side, and suppresses positively aligned unsafe residual components\. Across broad evaluation, CALM improves unsafe\-content suppression while preserving benign utility, demonstrating that local counterfactual correction provides a more selective alternative to global unsafe\-signal removal\.

## A Favorable Regime Between ODE and SDE for Few\-Step Diffusion Sampling

**Authors:** YIhao Bu; Dan Lian; Zhenguo Gao

**ID:** 152991 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OnzgdNdKzx>) | [PDF](<https://openreview.net/pdf?id=OnzgdNdKzx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152991>)

Few\-step diffusion sampling sharpens the tension between ODE and SDE dynamics\. ODE samplers are stable but can lose diversity, while the standard SDE endpoint can become unreliable at low numbers of function evaluations \(NFE\)\. The challenge is therefore not simply whether stochasticity should be added, but which driver properties allow stochastic correction to contribute diffusion without losing finite\-step control\. We show that this tradeoff is governed by two driver\-level quantities, the asymptotic covariance $Q$, which sets the effective diffusion level on the ODE\-to\-SDE spectrum, and the Poisson solution norm $C\_\\chi$, which controls the finite\-step remainder\. Gaussian drivers have $C\_\\chi = \\infty$, so this finite\-step remainder is not uniformly controlled by the same bound\. Balancing the diffusion level set by $Q$ with the finite\-step control set by $C\_\\chi$ formalizes a favorable regime for bounded structured drivers with intermediate diffusion strength\. This regime directly gives a structured correction method, instantiated as Fast\-Driver Sampler \(FDS\) with the shuffled\-Lorenz driver\. Across DiT\-XL/2 and EDM2, FDS establishes a stronger low\-NFE frontier among evaluated training\-free samplers, improving ODE baselines while avoiding the degradation of the SDE endpoint\.

## On the Robustness of Watermarking for Autoregressive Image Generation

**Authors:** Andreas Müller; Denis Lukovnikov; Shingo Kodama; Minh Pham; Anubhav Jain; Jonathan Petit; Niv Cohen; Asja Fischer

**ID:** 149358 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qefjBQ3xUo>) | [PDF](<https://openreview.net/pdf?id=qefjBQ3xUo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149358>)

_Abstract unavailable from the accessible public sources._

## SynthForensics: Benchmarking and Evaluating People\-Centric Synthetic Video Deepfakes

**Authors:** Roberto Leotta; Salvatore A Sambataro; Claudio V Ragaglia; Mirko Casu; Yuri Petralia; Francesco Guarnera; Luca Guarnera; Sebastiano Battiato

**ID:** 139072 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mzDFqKFToa>) | [PDF](<https://openreview.net/pdf?id=mzDFqKFToa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139072>)

_Abstract unavailable from the accessible public sources._

## PixelPonder: Dynamic Patch Adaptation for Enhanced Multi\-Conditional Text\-to\-Image Generation

**Authors:** Yanjie Pan; Qingdong He; Zhengkai Jiang; Pengcheng Xu; Chaoyi Wang; Jinlong Peng; Haoxuan Wang; Yun Cao; Zhenye Gan; Mingmin Chi; Bo Peng; Yabiao Wang

**ID:** 153024 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZZyhPmeOO>) | [PDF](<https://openreview.net/pdf?id=OZZyhPmeOO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153024>)

_Abstract unavailable from the accessible public sources._

## ARGUS: Stacked Multi\-View Identity Mosaic Injection for Subject\-Preserving Video Generation

**Authors:** Zijie Meng; Jiwen Liu; Yufei Liu; Chengzhuo Tong; Xiaoqiang Liu; Yuanxing Zhang; Yulong Xu; Pengfei Wan

**ID:** 152732 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qlic1VUQ6h>) | [PDF](<https://openreview.net/pdf?id=Qlic1VUQ6h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152732>)

_Abstract unavailable from the accessible public sources._

## FrequencyBooster: Advancing Pixel Diffusion for High\-Fidelity Image Generation

**Authors:** Lichen Ma; Zipeng Guo; Yu He; Xiaolong Fu; Luohang Liu; Jingling Fu; Junshi Huang; Yan Li

**ID:** 150802 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fHTKWgRoZq>) | [PDF](<https://openreview.net/pdf?id=fHTKWgRoZq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150802>)

_Abstract unavailable from the accessible public sources._

## Signed Rectified Flow: Negativity Controlled Generation

**Authors:** Runlong Liao; Baiyu Su; Lizhang Chen; Qiang Liu

**ID:** 150261 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jUXmcQ9uAr>) | [PDF](<https://openreview.net/pdf?id=jUXmcQ9uAr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150261>)

_Abstract unavailable from the accessible public sources._

## Steering Fields: Adaptive Vector Fields for Safe Image Generation and Beyond

**Authors:** Simone Facchiano; Jan Eric Lenssen; Bernt Schiele; Wolfgang Stammer; Fabio Galasso; Jonas Fischer

**ID:** 148355 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yUc9CsiZvu>) | [PDF](<https://openreview.net/pdf?id=yUc9CsiZvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148355>)

As state\-of\-the\-art text\-to\-image flow models have matured to deliver near\-photorealistic quality, controlling what they generate \-\- e\.g\., inhibiting harmful content while promoting benign alternatives \-\- has become a central challenge\. The current steering paradigm consists of adding a global steering vector to selected model activations\. While functional, a fixed vector applied example\-agnostic and uniformly along the entire trajectory cannot adapt to the changing state of the generation, and causes uncontrolled global changes beyond the targeted concepts\. We introduce Steering Fields, a generalization of steering vectors that adaptively re\-estimates the steering direction at each step of the generative process\. Steering Fields operate on latent representations, expose a continuous trade\-off between steering strength and content preservation, and are compositional, enabling the simultaneous induction and inhibition of concepts, setting a new state of the art on safety steering benchmarks\. Although our formulation prescribes no explicit spatial mask or object\-level prior, the trajectory\-adaptive estimation naturally preserves local structure, in a manner reminiscent of image editing\. In fact, when applied in the VAE latent space, Steering Fields can serve as a structure\-preserving image\-editing technique that achieves state\-of\-the\-art semantic fidelity \(CLIP, VQAScore\), while remaining model\-agnostic and inversion\-free

## MEV: A Multi\-Event Video Dataset for Long\-Take Generation

**Authors:** Peiyuan Zhu; Shaoan Xie; Yifan Shen; Wen Tian; Zijian Li; Guangyi Chen; Kun Zhang

**ID:** 139259 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=blH6L8WmTv>) | [PDF](<https://openreview.net/pdf?id=blH6L8WmTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139259>)

Current datasets for text\-to\-video generation are largely limited to short clips depicting a single event or coarse\-grained captions\. As a result, they provide limited supervision for modeling long\-take temporal dependencies, often leading to temporally inconsistent generations when describing multiple events\. In this paper, we introduce MEV, a multi\-event video dataset designed for long\-take video generation\. MEV provides high\-quality real\-world videos where subjects can perform a sequence of distinct, non\-overlapping events, featuring precise temporal boundaries and fine\-grained procedural annotations\. This event\-centric discretization reduces confounding factors and enables models to support temporally localized conditioning and build long\-take videos from atomic event units\. Furthermore, we introduce a comprehensive annotation pipeline that segments videos into temporally grounded events, and generates structured captions at both the global level and the event level\. In addition, under an event\-centric evaluation protocol, we conduct multi\-event generation experiments by fine\-tuning on MEV with temporally grounded event conditioning, leading to improved long\-take event transitions and more coherent content\. We believe this work removes a key barrier to training video foundation models for multi\-event scenarios and provides practical insights into learning from temporally\-structured video\-text data\.

## Beyond a Single Score: An Audit of Aesthetic Evaluation in Text\-to\-Image Pipelines Across Subcultural Visual Languages

**Authors:** Dan Li; Ling Fan; Lei Xia; Mudasir Ahmed; Yuying Pei

**ID:** 139303 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ya4OT7JyaR>) | [PDF](<https://openreview.net/pdf?id=Ya4OT7JyaR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139303>)

Text\-to\-image \(T2I\) models are increasingly used by online creative communities to generate imagery in the shared visual languages those communities have built, from Cottagecore's pastoral warmth to Cyberpunk's neon dystopias\. The aesthetic predictors embedded in T2I pipelines filter training data and score generated outputs, yet whether different predictors agree on which visual languages are "high\-quality" is largely untested\. We present SubCulture\-2\.6K, a dataset of 2,610 Stable\-Diffusion\-generated image–prompt pairs spanning six subcultures \(Cottagecore, Cyberpunk, Dark Academia, Goblincore, Synthwave, Y2K\), released with dominant\-color palettes, CLIP ViT\-L/14 embeddings, and per\-image scores from four deployed predictors \(LAION\-Aesthetics V2, PickScore, ImageReward, HPS\-v2\)\. Using this dataset we report four findings\. First, subcultures are visually separable in the representations these predictors read from, so any cross\-subcultural score difference reflects a value judgment, not a perceptual failure\. Second, LAION\-Aesthetics V2 imposes a large ordered preference across subcultures, with Y2K rendering retained at the standard quality cutoff at a small fraction of the rate of the most\-favored subculture\. Third, peer predictors share LAION\-Aesthetics V2's dispreference for Y2K but disagree sharply on which subculture they reward most, and they cluster much more closely with each other than with LAION\-Aesthetics V2\. Fourth, an interpretable\-feature regression accounts for roughly half of the LAION\-Aesthetics V2 effect, leaving a sizeable residual subcultural taste\. Because LAION\-Aesthetics V2 sits both upstream and downstream of recent Stable Diffusion variants, this audit shows that aesthetic predictors are not interchangeable: the choice of which one to use is itself a choice about whose visual language is rewarded\.

## DynamicRad: Content\-Adaptive Sparse Attention for Long Video Diffusion

**Authors:** Yongji Long; Shijun Liang; Jintao Li; Yun Li

**ID:** 150232 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=joj70kq2fc>) | [PDF](<https://openreview.net/pdf?id=joj70kq2fc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150232>)

Leveraging the natural spatiotemporal energy decay in video diffusion offers a path to efficiency, yet relying solely on rigid static masks risks losing critical long\-range information in complex dynamics\. To address this issue, we propose DynamicRad, a sparse\-attention framework that constrains adaptive selection using a radial locality prior\. DynamicRad introduces a dual\-mode strategy: static\-ratio for speed\-optimized execution and dynamic\-threshold for quality\-first filtering\. To avoid online search over sparse indices, we integrate an offline Bayesian Optimization \(BO\) pipeline with a semantic motion router\. The router maps prompt embeddings to BO\-selected sparsity regimes with a single projection module\. Unlike online profiling methods, our offline BO optimizes attention reconstruction error \(MSE\) on a proxy task and reuses the selected configurations during inference\. Experiments on HunyuanVideo and Wan2\.1\-14B demonstrate that DynamicRad achieves a strong efficiency\-quality trade\-off among FlashAttention\-compatible sparse\-attention baselines, obtaining 1\.7x\-2\.5x inference speedups with over 80% effective sparsity\. In some long\-sequence settings, the dynamic mode matches or improves over the dense baseline on automatic quality metrics, while optional Mask\-Aware LoRA further improves long\-horizon coherence\. Code is available at https://anonymous\.4open\.science/r/DynamicRad\-5D55/\.

## HumanScore: Benchmarking Human Motions in Generated Videos

**Authors:** Tiange Xiang; Yusu Fang; Tian Tan; Narayan Schuetz; Scott Delp; Fei\-Fei Li; Ehsan Adeli

**ID:** 139307 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YGSNuUj5dh>) | [PDF](<https://openreview.net/pdf?id=YGSNuUj5dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139307>)

Recent advances in model architectures, compute, and data scale have driven rapid progress in video generation, producing increasingly realistic content\. Yet, there is no method to systematically assess the fidelity of human figures generated in these videos\. In this paper, we present HumanScore, a systematic framework to evaluate the \\textbf\{quality of human figures and motions\} in AI\-generated videos\. We introduce seven metrics spanning kinematic plausibility and biomechanical consistency\. Through carefully designed prompts, we elicit a broad set of movements at varying intensities\. We evaluated a total of 840 videos generated by 6 state\-of\-the\-art models\. Our framework reveals consistent gaps between visual plausibility and motion fidelity, highlights common failure modes, and ranks models from multiple quantitative and physically meaningful metrics\. The proposed metrics are correlated with human evaluations and are simple to compute using standard pose estimators\.

## KnowVis: A Dual\-View Benchmark for Diagnosing World\-Knowledge Grounding in Text\-to\-Image Models

**Authors:** Yonghang Yu; Ruoyu Wang; Haoyu Zhang; Lin Qi; Yawei Zhou; Changqian Yu

**ID:** 139323 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XEkhbF0f6x>) | [PDF](<https://openreview.net/pdf?id=XEkhbF0f6x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139323>)

Text\-to\-image \(T2I\) models have made substantial progress in visual realism, aesthetic quality, and instruction following\. However, real\-world prompts often go beyond explicit visual descriptions and require implicit facts, structured knowledge, and domain\-specific commonsense\. Existing evaluations mainly focus on explicit prompt\-to\-image semantic alignment or specific knowledge subdomains, lacking a unified and diagnostic framework for evaluating world\-knowledge grounding in T2I models\.  We introduce KnowVis, a dual\-view diagnostic benchmark for world\-knowledge grounding in T2I generation\.  KnowVis is built on a hierarchical knowledge taxonomy with case\-level annotations, and contains two complementary views: a Skill\-Tree Benchmark for fine\-grained atomic knowledge evaluation and a Generalized Benchmark for open\-ended knowledge composition and expression\.  We further design a structured MLLM\-based VQA judge protocol and validate its reliability on the Skill\-Tree validation split, enabling scalable evaluation and diagnostic error attribution\. The protocol uses Required VQAs to assess atomic knowledge correctness in the Skill\-Tree Benchmark, and combines Required, Optional, and dynamically discovered knowledge expressions with human\-judge collaborative evaluation in the Generalized Benchmark\. Experiments show that KnowVis reveals notable gaps in world\-knowledge grounding across existing T2I models and provides structured diagnostic signals for knowledge\-intensive image generation\.

## Distance Marching for Generative Modeling

**Authors:** Zimo Wang; Ishit Mehta; Haolin Lu; Xunpeng Huang; Chung\-En Sun; Ge Yan; Lily Weng; Tzu\-Mao Li

**ID:** 152924\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152924

[Paper](<https://openreview.net/forum?id=PPRUA4hujO>) | [PDF](<https://openreview.net/pdf?id=PPRUA4hujO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152924>)

Modern generative models based on diffusion or flow matching transport noise toward the data manifold, without representing the data manifold explicitly\. We propose \\dm that explores an alternative design of generative modeling by explicitly modeling a distance field of the data manifold\.  Designing loss functions to learn distance fields in high\-dimensional space from point data can be challenging\. This is because the data do not provide reliable signals for closest point projection onto the manifold\. To mitigate this problem, we design new loss functions that weight training data by their proximity to each sampling position\. This distance\-field perspective naturally motivates two principled deterministic samplers, showing fast convergence in inference\. Our model is related to the recent time\-unconditional generative models since it also does not require time input, and our analysis reveals that our method helps time\-unconditional generative modeling to disambiguate the denoising problem and to avoid biasing towards the data mean\. As a result, our model is the only time\-unconditional model that remains competitive to time\-conditional ones across datasets and architectures\. Moreover, our distance prediction is also helpful for early stopping during sampling and for OOD detection\. We hope distance\-field modeling can open a promising direction for exploring generative modeling from a geometric perspective\.

## Action Images: End\-to\-End Policy Learning via Multiview Video Generation

**Authors:** Haoyu Zhen; Zixian Gao; Qiao Sun; yilin zhao; Yuncong Yang; Yilun Du; Pengsheng Guo; Tsun\-Hsuan Johnson Wang; Yi\-Ling Qiao; Chuang Gan

**ID:** 150968\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150968

[Paper](<https://openreview.net/forum?id=dvcWzyuusE>) | [PDF](<https://openreview.net/pdf?id=dvcWzyuusE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150968>)

World action models \(WAMs\) have emerged as a promising direction for robot policy learning, as they can leverage powerful video backbones to model the future states\. However, existing approaches often rely on separate action modules, or use action representations that are not pixel\-grounded, making it difficult to fully exploit the pretrained knowledge of video models and limiting transfer across viewpoints and environments\. In this work, we present Action Images, a unified world action model that formulates policy learning as multiview video generation\. Instead of encoding control as low\-dimensional tokens, we translate 7\-DoF robot actions into interpretable action images: multi\-view action videos that are grounded in 2D pixels and explicitly track robot\-arm motion\. This pixel\-grounded action representation allows the video backbone itself to act as a zero\-shot policy, without a separate policy head or action module\. Beyond control, the same unified model supports video\-action joint generation, action\-conditioned video generation, and action labeling under a shared representation\. On RLBench and real\-world evaluations, our model achieves the strongest zero\-shot success rates and improves video–action joint generation quality over prior video\-space world models, suggesting that interpretable action images are a promising route to policy learning\.

## Text\-Vision Co\-Instructed Image Editing

**Authors:** Chenxi Xie; Yuhui Wu; Qiaosi Yi; Lei Zhang

**ID:** 148391\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148391

[Paper](<https://openreview.net/forum?id=yC4H5QD0ot>) | [PDF](<https://openreview.net/pdf?id=yC4H5QD0ot>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148391>)

Existing image editing methods can be generally categorized into textual instruction\-based and visual prompt\-based ones\.  Textual instructions are semantically expressive, but are limited by the coarse granularity of spatial control of the editing results\. In contrast, visual prompts such as drag and point can  provide precise spatial guidance, but are limited by the inherent ambiguity in semantic intent\.  To unify the strength of textual and visual prompts, we present Text\-Vision Co\-Instructed Image Editing, which jointly models textual instructions as semantic intent and sparse visual instructions as spatial guidance, aiming to achieve precise and intent\-faithful image manipulation\. To this end, we first construct a textual\-visual instruction paired dataset with more than 23K samples derived from dynamic videos, enabling aligned supervision for cross\-modal instruction\. We then propose TV\-Edit, a Textual\-Visual instruction unified Editing framework to contextualize drag or point\-based visual instructions with image\-text semantics and lift them into semantic\-aware control representations for pretrained editing backbones\.  By integrating semantic intent and spatial constraints, TV\-Edit leads to more precise spatial control, less instruction ambiguity, and stronger structural consistency than text\-only or drag\-based alternatives\.  Finally, we establish TV\-Edit\-Bench, a deliberately designed benchmark to evaluate semantic faithfulness, spatial alignment, and visual consistency with ground\-truth references and controlled textual–visual variations for reliable assessment\. Our experiments across multiple editing backbones demonstrate that TV\-Edit consistently yields more precise and intent\-faithful edits, significantly outperforming state\-of\-the\-art instruction\-based and drag\-based baselines\. Data, model, and codes will be released\.

## MegaStyle: Constructing Diverse and Scalable Style Dataset via Consistent Text\-to\-Image Style Mapping

**Authors:** Junyao Gao; Sibo Liu; Jiaxing Li; Yanan SUN; Yuanpeng Tu; Fei Shen; Weidong Zhang; Cairong Zhao; Jun Zhang

**ID:** 139382\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139382

[Paper](<https://openreview.net/forum?id=Tsy4EJwae5>) | [PDF](<https://openreview.net/pdf?id=Tsy4EJwae5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139382>)

In this paper, we introduce MegaStyle, a novel and scalable data curation pipeline that constructs an intra\-style consistent, inter\-style diverse and high\-quality style dataset\. We achieve this by leveraging the consistent text\-to\-image style mapping capability of current large generative models, which can generate images in the same style from a given style description\. Building on this foundation, we curate a diverse and balanced prompt gallery with 170K style prompts and 400K content prompts, and generate a large\-scale style dataset MegaStyle\-1\.4M via content–style prompt combinations\. With MegaStyle\-1\.4M, we propose style\-supervised contrastive learning to fine\-tune a style encoder MegaStyle\-Encoder for extracting expressive, style\-specific representations, and we also train a FLUX\-based style transfer model MegaStyle\-FLUX\. Extensive experiments demonstrate the importance of maintaining intra\-style consistency, inter\-style diversity and high\-quality for style dataset, as well as the effectiveness of the proposed MegaStyle\-1\.4M\. Moreover, when trained on MegaStyle\-1\.4M, MegaStyle\-Encoder and MegaStyle\-FLUX provide reliable style similarity measurement and generalizable style transfer, making a significant contribution to the style transfer community\.

## X2HDR: HDR Image Generation in a Perceptually Uniform Space

**Authors:** Ronghuan Wu; Wanchao Su; Kede Ma; Jing Liao; Rafal Mantiuk

**ID:** 148447\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148447

[Paper](<https://openreview.net/forum?id=xjyKFJeXLL>) | [PDF](<https://openreview.net/pdf?id=xjyKFJeXLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148447>)

High\-dynamic\-range \(HDR\) formats and displays are becoming increasingly prevalent, yet state\-of\-the\-art image generators \(e\.g\., Stable Diffusion and FLUX\) typically remain limited to low\-dynamic\-range \(LDR\) output due to the lack of large\-scale HDR training data\. In this work, we show that existing pretrained diffusion models can be easily adapted to HDR generation without retraining from scratch\. A key challenge is that HDR images are natively represented in linear RGB, whose intensity and color statistics differ substantially from those of sRGB\-encoded LDR images\. This gap, however, can be effectively bridged by converting HDR inputs into perceptually uniform encodings \(e\.g\., using PU21 or PQ\)\. Empirically, we find that LDR\-pretrained variational autoencoders \(VAEs\) reconstruct PU21\-encoded HDR inputs with fidelity comparable to LDR data, whereas linear RGB inputs cause severe degradations\. Motivated by this finding, we describe an efficient adaptation strategy that freezes the VAE and finetunes only the denoiser via low\-rank adaptation in a perceptually uniform space\. This results in a unified computational method that supports both text\-to\-HDR synthesis and single\-image RAW\-to\-HDR reconstruction\. Experiments demonstrate that our perceptually encoded adaptation consistently improves perceptual fidelity, text\-image alignment, and effective dynamic range, relative to previous techniques\.

## GRASP: Guided Residual Adapters with Sample\-wise Partitioning

**Authors:** Felix Nützel; Mischa Dombrowski; Bernhard Kainz

**ID:** 152072\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152072

[Paper](<https://openreview.net/forum?id=VfoRDHdZvl>) | [PDF](<https://openreview.net/pdf?id=VfoRDHdZvl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152072>)

Text\-to\-image flow matching transformers degrade sharply in long\-tail settings: tail\-class outputs collapse in fidelity and diversity, limiting their value as synthetic augmentation for rare conditions\. We trace this to low head\-versus\-tail gradient alignment during fine\-tuning, an optimization\-level pathology that conditioning\- and sampling\-side interventions do not address\. We propose GRASP \(Guided Residual Adapters with Sample\-wise Partitioning\): a deterministic partition of the conditioning space, paired with group\-specific residual adapters in the transformer feedforward layers, that leaves the flow\-matching objective and the sampler untouched\. In conditional flow matching, condition values index distinct sets of probability paths, so partitioning along the conditioning is the structurally correct factorization suitable as gradient alignment proxy\. Because the partition is static, every tail sample is guaranteed to update its assigned expert, which bypasses extreme longtail failure modes\. Crucially, GRASP is non\-invasive and composable: on MIMIC\-CXR\-LT, combining GRASP with self\-guided minority sampling at inference time yields the best all\-labels IRS we observe, beyond either intervention alone\. GRASP itself reduces overall FID by up to 80\\% and lifts tail\-class coverage by up to 44\\% over full fine\-tuning, learned\-routing MoE, and minority guidance\. Used as training data for a downstream DenseNet classifier on NIH\-CXR\-LT, GRASP synthetics significantly outperform every non\-GRASP alternative on macro F1, match the macro F1 obtained from real training data, and yield nonzero F1 on $9$ of $13$ classes versus $3$ of $13$ from full fine\-tuning\. Results on ImageNet\-LT confirm the mechanism is not tied to medical inductive bias\.

## Rebalancing Reference Frame Dominance to Improve Motion in Image\-to\-Video Models

**Authors:** Wooseok Jeon; Seungho Park; Seunghyun Shin; Sangeyl Lee; Hyeonho Jeong; Hae\-Gon Jeon

**ID:** 154264\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154264

[Paper](<https://openreview.net/forum?id=F5Ye7KS0H2>) | [PDF](<https://openreview.net/pdf?id=F5Ye7KS0H2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154264>)

Image\-to\-video models often generate videos that remain overly static, compared to text\-to\-video models\. While prior approaches mitigate this issue by weakening or modifying the image\-conditioning signal, they often require additional training or sacrifice fidelity to the reference image\. In this work, we identify reference\-frame dominance as a key mechanism behind motion suppression\. We observe that non\-reference frames in I2V models allocate excessive self\-attention to reference\-frame key tokens, causing reference information to be over\-propagated across time and suppressing inter\-frame dynamics\. Based on this finding, we propose DyMoS \(Dynamic Motion Slider\), a training\-free and model\-agnostic method that rebalances the attention pathway from generated frames to the reference frame during initial denoising steps\. DyMoS leaves both the input image and model weights unchanged and introduces a single scalar parameter for continuous control over motion strength\. Experiments across multiple state\-of\-the\-art I2V backbones demonstrate that DyMoS consistently improves motion dynamics while maintaining visual quality and fidelity to the reference image\.

## Cache the Future: Training\-Free Self\-Revision for Diffusion Transformer Acceleration

**Authors:** Yiyang Li; Weixuan Huang; Wei Zhang

**ID:** 149314\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149314

[Paper](<https://openreview.net/forum?id=r6WJ2zUzRI>) | [PDF](<https://openreview.net/pdf?id=r6WJ2zUzRI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149314>)

Although recent training\-free acceleration methods have achieved promising speedups for Diffusion Transformers, most rely on historical features, either by directly reusing cached features or by forecasting future features from them\. Such a history\-to\-future design can accumulate errors when the prediction horizon becomes long\. To address this issue, we propose FuCa, a Cache\-the\-Future training\-free acceleration framework\. Instead of extrapolating future information solely from the past, FuCa caches sparsely computed future features and uses them as online revision signals\. FuCa revises the latent\-state update and the corresponding velocity, and then recovers skipped timesteps through lightweight interpolation\. It requires no extra training or model\-specific auxiliary modules, while keeping the number of DiT forward evaluations low\. Experiments on FLUX\.1\-dev, Qwen\-Image, Wan2\.1\-1\.3B, and Hunyuan Video show that FuCa achieves up to about 5$\\times$ speedup for image generation and more than 4\.3$\\times$ speedup for video generation, with higher reconstruction quality than existing training\-free baselines\.

## Do Joint Audio\-Video Generation Models Understand Physics?

**Authors:** Zijun Cui; Xiulong Liu; Hao Fang; Mingwei Xu; Jiageng Liu; Zexin Xu; Weiguo Pian; Shijian Deng; Feiyu Du; Chenming Ge; Yapeng Tian

**ID:** 139141\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139141

[Paper](<https://openreview.net/forum?id=iUbannicWz>) | [PDF](<https://openreview.net/pdf?id=iUbannicWz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139141>)

Joint audio\-video generation models are rapidly approaching professional production quality, raising a fundamental question: do these models truly understand audio\-visual physics, or do they merely generate plausible sounds and frames that violate real\-world physical consistency? To answer this question, we introduce AV\-Phys Bench, the first comprehensive benchmark for evaluating physical commonsense in joint audio\-video generation\. AV\-Phys Bench systematically tests joint audio\-video generation models across three scene categories that probe how physical commonsense holds as the scene evolves: \(a\) Steady State, \(b\) Event Transition, and \(c\) Environment Transition\. Each scene category investigates three physics\-grounded subcategories that reflect real\-world scenes, along with an additional Anti\-AV\-Physics subcategory, where prompts deliberately violate audio\-visual physics to probe whether models possess generative physics knowledge or merely encode physically consistent priors\. Each generation is scored along five dimensions: semantic adherence and physical commonsense within each modality, and cross\-modal physical commonsense, which tests whether the visual and audio streams agree on the same physical event\. Across three proprietary and four open\-source models, Seedance 2\.0 leads on physical commonsense, with an overall pass rate of 0\.660\. The gap to open\-source models remains pronounced; every model degrades by up to 67% on event\-driven and environment\-driven transitions, and proprietary leaders collapse by 45–69% on Anti\-AV\-Physics prompts\. Beyond human evaluation, we introduce AV\-Phys Agent, a ReAct\-style agentic evaluator that pairs a multimodal language model with deterministic acoustic measurement tools and ranks generators in close alignment with human ratings, enabling scalable physical\-commonsense evaluation without further human annotation\. AV\-Phys Bench identifies cross\-modal physical consistency and transition\-driven scene dynamics as the open frontier for joint audio\-video generation\. We release AV\-Phys Bench and AV\-Phys Agent to facilitate future research on joint audio\-video generation and evaluation\.

## CyCLeGen: Cycle\-Consistent Layout Prediction and Image Generation

**Authors:** Xiaojun Shan; Haoyu Shen; Yucheng Mao; Haiyang Xu; Xiang Zhang; Abhay Anand; Bingnan Li; Zhuowen Tu

**ID:** 153270\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153270

[Paper](<https://openreview.net/forum?id=MUrqtx2pBo>) | [PDF](<https://openreview.net/pdf?id=MUrqtx2pBo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153270>)

We present CyCLeGen, an autoregressive framework that integrates layout understanding and layout\-to\-image generation through cycle consistency: predicted layouts must produce faithful images, and generated images must yield consistent layouts\. We enforce this constraint via CycleGRPO, a bidirectional reinforcement learning strategy with complementary geometric and perceptual rewards, enabling self\-introspective learning from only 8k RL samples\. This creates a natural loop, generation helps understanding by rewarding only those layouts that lead to high\-quality images, and understanding helps generation by rewarding only those images whose spatial structure can be faithfully recovered\. Extensive experiments show that CyCLeGen achieves significant gains across diverse image understanding and generation benchmarks, with emergent gains on image captioning\.

## MotionCFG: Boosting Motion Dynamics via Semantic Motion Sharpening

**Authors:** Byungjun Kim; Soobin Um; Jong Chul Ye

**ID:** 150155\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150155

[Paper](<https://openreview.net/forum?id=kFcyrsn0he>) | [PDF](<https://openreview.net/pdf?id=kFcyrsn0he>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150155>)

Despite recent advancements in Text\-to\-Video \(T2V\) synthesis, generating high\-fidelity and dynamic motion remains a significant challenge\. Existing methods primarily rely on Classifier\-Free Guidance \(CFG\), but standard CFG treats all semantic dimensions uniformly and provides no mechanism to selectively resolve ambiguity along the motion axis\. To address this, we propose MotionCFG, a training\-free approach that introduces selective guidance along the motion subspace of the condition embedding\. Specifically, we construct a motion\-perturbed negative condition by injecting Gaussian noise into motion\-related embeddings, and steer generation away from it to selectively amplify motion intent\. We show theoretically that this procedure implicitly approximates \*Semantic Laplacian Sharpening\*, a second\-order correction that suppresses motion\-ambiguous regions of the score landscape and amplifies well\-resolved dynamic peaks\. Combined with a piecewise guidance schedule that confines intervention to the early denoising steps, MotionCFG consistently improves motion dynamics across state\-of\-the\-art T2V frameworks with negligible overhead\. We further demonstrate that this Laplacian sharpening principle generalizes beyond motion, effectively steering complex, non\-linear concepts such as precise object numerosity that are typically difficult to modulate via standard text\-based guidance\.

## LLM Is a Good Conditioner: End\-to\-End Sign Language Video Generation with VQ\-Diffusion

**Authors:** Xiao Liu; Shiwei Gan

**ID:** 148951\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148951

[Paper](<https://openreview.net/forum?id=twBWaZ8FT0>) | [PDF](<https://openreview.net/pdf?id=twBWaZ8FT0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148951>)

Sign Language Video Generation \(SLVG\) aims to generate realistic and motion\-accurate sign language videos from spoken text\. Most existing studies heavily rely on intermediate representations \(\\eg poses or 3D meshes\), and adopt a two\-stage generation paradigm, where the text is first converted into poses or other visual modalities, which are then used as conditions to synthesize sign language video frames via diffusion models \(\\eg pose\-to\-image models\)\.  However, the end\-to\-end SLVG task remains largely unexplored\.  In this paper, we demonstrate that end\-to\-end SLVG is feasible without relying on intermediate representations\(\\eg poses\), and we argue that a key challenge lies in how to generate effective and temporally consistent conditions\. With well\-designed condition modules, it becomes feasible to build an end\-to\-end SLVG model without relying on any intermediate modalities\. To this end, we propose LLMCond, a first end\-to\-end text\-to\-video SLVG framework that requires no auxiliary visual cues during either training or inference\. LLMCond consists of four key components: \(1\) a video VQVAE that compresses sign language videos into a sequence of discrete latent tokens; \(2\) \\textbf\{an LLM\-based conditioner\} that generates temporally and semantically aligned conditions corresponding to the sign sequences; \(3\) \\textbf\{a Gaussian Condition Refiner\} designed to enforce temporal smoothness across conditions, enabling the generation of coherent and natural sign language motions; and \(4\) a discrete diffusion model that synthesizes motion\-accurate sign language videos conditioned on the refined condition sequences\. Extensive experiments on public SL datasets demonstrate that LLMCond achieves highly competitive performance, producing temporally coherent and accurate sign language motions without relying on auxiliary visual modalities such as pose, depth, or optical flow\.

## Why Do DiT Editors Drift? Plug\-and\-Play Low Frequency Alignment in VAE Latent Space

**Authors:** Xiaoce Wang; Sifan Zhou; Kaifei Wang; Leli Xu; Xuerui Qiu; Tao He; Ming Li

**ID:** 151149\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151149

[Paper](<https://openreview.net/forum?id=ceVqStm5S2>) | [PDF](<https://openreview.net/pdf?id=ceVqStm5S2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151149>)

Recent advances in diffusion transformers \(DiTs\) have enabled promising single\-turn image editing capabilities\. However, multi\-turn editing often leads to progressive semantic drift and quality degradation\.  In this work, we study this problem from a latent\-space frequency perspective by decomposing the editing process into two functional components: VAE and DiT\. Through systematic analysis in the VAE latent space, we uncover that the DiT introduces dominant low\-frequency drift that accumulates as semantic misalignment across editing rounds, while the VAE contributes comparatively stable reconstruction bias\.  Based on this insight, we propose \*\*VAE\-LFA\*\* \(Low Frequency Alignment\), a training\-free, plug\-and\-play method that performs alignment in VAE latent space\. VAE\-LFA decomposes latent discrepancies across editing rounds via low\-pass filtering, and aligns low\-frequency statistics to an exponential moving average of previous rounds, effectively suppressing accumulated semantic drift while preserving high\-frequency details\.  Our method requires \*no retraining, ground\-truth priors, or access to diffusion parameters\*, making it applicable to both white\-box and black\-box DiT editors\. For white\-box models, VAE\-LFA is seamlessly integrated into the editing pipeline by eliminating redundant VAE round trips; for black\-box models, it operates via an off\-the\-shelf VAE to perform inter\-round latent alignment\.  Extensive experiments demonstrate that VAE\-LFA improves semantic consistency and visual fidelity across diverse multi\-turn editing scenarios, including both controlled and in\-the\-wild images\.

## Steering Away from Memorization: Reachability\-Constrained Reinforcement Learning for Text\-to\-Image Diffusion

**Authors:** Sathwik Karnik; Juyeop Kim; Sanmi Koyejo; Jong\-Seok Lee; Somil Bansal

**ID:** 149209\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149209

[Paper](<https://openreview.net/forum?id=s8BKAZHA8D>) | [PDF](<https://openreview.net/pdf?id=s8BKAZHA8D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149209>)

Text\-to\-image diffusion models are susceptible to memorization, revealing a fundamental failure to generalize beyond the training set\. Current mitigation approaches typically sacrifice image quality or prompt alignment to reduce memorization\. To address this, we propose \*\*R\*\*eachability\-\*\*A\*\*ware \*\*D\*\*iffusion \*\*S\*\*teering \(RADS\), an offline\-trained, inference\-time framework that mitigates memorization while maintaining generation fidelity\. RADS models the diffusion denoising process as a dynamical system and uses reachability analysis to learn a safety value function that characterizes intermediate latent states along trajectories leading to memorized samples\. This motivates a constrained reinforcement learning \(RL\) formulation, where a policy learns to steer the trajectory away from memorization via minimal perturbations in the caption embedding space\. Empirical evaluations show that RADS achieves a stronger empirical Pareto frontier between generation diversity \(SSCD\), quality \(FID\), and alignment \(CLIP\) compared to state\-of\-the\-art inference\-time baselines\. Crucially, RADS provides robust mitigation without modifying the diffusion backbone, offering a plug\-and\-play solution for diverse image generation\.

## SemanticDialect: Semantic\-Aware Mixed\-Format Quantization for Video Diffusion Transformers

**Authors:** Wonsuk Jang; Thierry Tambe

**ID:** 153036 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OUu9rCOcuz>) | [PDF](<https://openreview.net/pdf?id=OUu9rCOcuz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153036>)

Diffusion Transformers \(DiTs\) achieve state\-of\-the\-art video generation quality, but their substantial memory and computational footprints hinder edge deployment\. Quantization can reduce these costs, yet existing methods often degrade video quality due to high activation variation and the difficulty of preserving semantic and temporal coherence\. We propose SemanticDialect, which advances block\-wise mixed\-format quantization\. In this framework, each block selects an optimal format \(dialect\) from a candidate set \(formatbook\), which is augmented with lookup tables that store quantization errors and quantized indices, enabling efficient per\-block format selection and quantization with minimal online overhead\. We further introduce attention\-guided activation decomposition, which reduces quantization error via residual quantization, and semantic\-aware dialect assignment \(SeDA\), which reduces cross\-token quantization inconsistency by enforcing format uniformity among semantically correlated tokens\. Experiments demonstrate that SemanticDialect outperforms prior quantization methods and block\-wise formats \(MXFP4, NVFP4\) while approaching FP16 quality on Open\-Sora 2\.0\. We also validate hardware deployability through RTL design and GPU kernel implementation\.

## Learning Cultural Vectors for Cross\-Cultural Generation

**Authors:** Sina Malakouti; Deepti Ghadiyaram; Boqing Gong; Adriana Kovashka

**ID:** 155934 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1hYYl1CCHx>) | [PDF](<https://openreview.net/pdf?id=1hYYl1CCHx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155934>)

Current text\-to\-image diffusion models remain unreliable for culturally grounded generation, often producing incorrect or stereotyped depictions, particularly for underrepresented cultures\. While prior work has largely focused on evaluation and benchmarking, improving cultural generation remains underexplored\. In this work, we study cross\-cultural image generation through cultural vectors, defined as the difference between fine\-tuned and pretrained model parameters\. We show that cultural vectors enable fine\-grained control over cultural alignment and failure modes through simple scaling at inference time\. We further find that deeper U\-Net layers encode stronger cultural information, while cultural vectors across countries occupy largely independent directions in parameter space\. However, unlike prior work on task arithmetic, naively combining cultural vectors fails to produce meaningful multi\-cultural behavior due to strong interference across cultures\. Motivated by this limitation, we propose Descriptor\-Guided Merging \(DGM\), a culturally\-aware merging approach that estimates cultural vectors for unseen countries using descriptor\-based similarities across cultures\. Experiments on two benchmarks across 16/10 countries show that cultural vectors improve generation over pretrained models by 18\.9%, while DGM improves cross\-cultural generalization by 4\.2% over naive merging\.

## DifFRACT: Diffusion Feature Reconstruction and Attribution for Circuit Tracing

**Authors:** Artyom Mazur; Nina Konovalova; Aibek Alanov

**ID:** 150450 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hwwQnLpJt5>) | [PDF](<https://openreview.net/pdf?id=hwwQnLpJt5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150450>)

_Abstract unavailable from the accessible public sources._

## LENS: Low\-Frequency Eigen Noise Shaping for Efficient Diffusion Sampling

**Authors:** Haewon Jeon; Si\-Hyeon Lee

**ID:** 152345\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152345

[Paper](<https://openreview.net/forum?id=Tl88REPTcW>) | [PDF](<https://openreview.net/pdf?id=Tl88REPTcW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152345>)

_Abstract unavailable from the accessible public sources._

## MilliVid: Adaptive Latents for Long\-Range Consistency in Video Generation

**Authors:** Ishaan Chandratreya; David Charatan; Basile Van Hoorick; Sergey Zakharov; Vitor Guizilini; Phillip Isola; Vincent Sitzmann

**ID:** 155135\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155135

[Paper](<https://openreview.net/forum?id=86Z2vQcbuD>) | [PDF](<https://openreview.net/pdf?id=86Z2vQcbuD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155135>)

_Abstract unavailable from the accessible public sources._

## Context\-Aware Autoregressive Image Generation for Emerging Reasoning Properties

**Authors:** Jixuan Ying; Haoyu Liu; Timing Yang; Tingyu Zhu; Predrag Neskovic; Anand Bhattad; Cihang Xie; Zeyu Zheng; Alan Yuille; Feng Wang

**ID:** 151846\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151846

[Paper](<https://openreview.net/forum?id=XS3R795hKo>) | [PDF](<https://openreview.net/pdf?id=XS3R795hKo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151846>)

_Abstract unavailable from the accessible public sources._

## StableAvatar: Ultra\-Long Audio\-Driven Avatar Video Generation

**Authors:** Shuyuan Tu; Yueming Pan; Yinming Huang; Xintong Han; Zhen Xing; Qi Dai; Chong Luo; Zuxuan Wu; Yu\-Gang Jiang

**ID:** 154759 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BAov2t06Vm>) | [PDF](<https://openreview.net/pdf?id=BAov2t06Vm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154759>)

Current diffusion models for audio\-driven avatar video generation struggle to synthesize long videos with natural audio synchronization and identity consistency\. This paper presents StableAvatar, the first end\-to\-end video diffusion transformer that synthesizes ultra\-long videos\.  We observe that the primary reason preventing existing models from generating long videos is their audio modeling, which typically relies on third\-party off\-the\-shelf audio embeddings that are introduced into the diffusion model via cross\-attention\.  Since current diffusion backbones lack any audio\-related priors, they cannot correctly couple audio cues with latent dynamics, causing systematic latent distribution deviations at each segment\. These deviations accumulate across segments, gradually shifting the latent trajectory and producing noticeable quality drift\. To address this, StableAvatar introduces a novel Timestep\-aware Audio Adapter that prevents error accumulation via timestep\-aware modulation\. During inference, we propose a novel Audio Native Guidance Mechanism to further enhance the audio synchronization by leveraging the diffusion’s joint audio\-latent prediction as a dynamic guidance signal\. To enhance the smoothness of the ultra\-long videos, we introduce a Dynamic Weighted Sliding\-window Strategy that fuses latent over time\. Experiments on benchmarks show the effectiveness of StableAvatar both qualitatively and quantitatively\.

## Baton: Explicit Semantic Blueprints for Joint Video\-Audio Generation

**Authors:** Shuyuan Tu; Qi Tian; Zihan Yang; Yue Wu; Xintong Han; Weijie Kong; Jiangfeng Xiong; Jian\-Wei Zhang; Zhao Zhong; Liefeng Bo; Zuxuan Wu; Yu\-Gang Jiang

**ID:** 153708 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JMIXvPCjrz>) | [PDF](<https://openreview.net/pdf?id=JMIXvPCjrz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153708>)

Current open\-source diffusion models struggle to generate stable and synchronized audio\-visual content, particularly in scenarios demanding complex semantic reasoning\. The root cause is that existing methods rely on coarse text embeddings from off\-the\-shelf encoders to guide audio\-video denoising, which discards fine\-grained semantics and, critically, lacks a shared long\-horizon plan, leading to uncoordinated denoising trajectories and fragile cross\-modal alignment\. We propose Baton, the first framework that introduces explicit semantic planning into joint video\-audio generation\. Our key insight is that complementing coarse text guidance with semantically rich, modality\-aware planned tokens, jointly reasoned and mutually aligned before denoising, can simultaneously restore fine\-grained semantic detail and establish a shared blueprint that coordinates both audio and video denoising trajectories\.  Concretely, Baton first introduces the VA\-Planner, a multimodal language model equipped with dual semantic alignment towers, where learnable queries cross\-attend to both video and audio features to produce a pair of semantically aligned video and audio planning tokens as keyframe\-level blueprints\.  These planning tokens are injected into the diffusion backbone via cross\-attention layers, providing temporally grounded guidance complementary to coarse text embeddings\. Since planning tokens do not share one\-to\-one spatial\-temporal correspondence with diffusion latents, we further propose Relative Semantic RoPE, a relative positional encoding that maps planning tokens and latents into a shared spatial\-temporal coordinate frame, enabling each latent to accurately attend to its positionally corresponding semantic cues\. Experiments on benchmarks show the effectiveness of Baton both qualitatively and quantitatively\.

## AsymPipe: Accelerating Large\-scale DiTs Image Editing via Asymmetry\-Aware Pipeline Parallelism

**Authors:** Huage Deng; LYU WENKAI; WU YONGJIN; Tianyang Zheng; heng Guo; Fangyun Zhou; Yu Shi; Wenxi Zhu; Minwen Deng

**ID:** 148143 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvdQTz8byr>) | [PDF](<https://openreview.net/pdf?id=zvdQTz8byr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148143>)

Instruction\-driven mask\-free image editing with large\-scale Diffusion Transformers \(DiTs\) has enabled high\-fidelity local edits while maintaining global consistency\. However, these models incur a prohibitive inference cost due to a pronounced semantic\-–computation mismatch, where dense computation is performed over all high\-resolution tokens regardless of localized editing instructions\. Our analysis reveals that non\-edit regions converge early with highly stable block\-level outputs, exhibiting a distinct spatio\-temporal asymmetry\. Furthermore, we identify a critical system\-level challenge that introducing such asymmetric computation into pipeline\-parallel environments for ultra\-large models triggers severe workload imbalance and pipeline bubbles, preventing algorithmic savings from translating into actual latency gains\. To address these issues, we propose AsymPipe, a training\-\-free algorithm–\-system co\-design framework that accelerates large\-scale DiTs editing\. The framework identifies edit versus non\-edit regions on the fly using a zero\-overhead velocity\-based probe that reuses the predicted velocity field from the existing denoising process\. For non\-edit regions, AsymPipe caches and reuses block\-level outputs, while for edit regions, it introduces a source\-aware sparse attention module to precisely eliminate redundant contributions from static text and image sources\. Finally, to bridge the gap between algorithmic optimization and hardware speedup, the framework incorporates a load\-balanced token rearrangement scheme\. This scheme deconstructs the original spatial topology to distribute tokens evenly across devices, physically restoring compute balance in pipeline\-parallel systems\. On HunyuanImage\-3\.0\-Instruct and Qwen\-Image\-Edit\-2511, AsymPipe achieves end\-to\-end speedups of 2\.862x \(PSNR 33\.69\) and 2\.707x \(PSNR 29\.74\), respectively, delivering substantial acceleration with virtually no loss in editing quality\. Our anonymized source code is available at https://anonymous\.4open\.science/r/AsymPipe\-6553\.

## CuBic: Curvature\-Driven Dynamic Inference Caching for Fast, High\-Fidelity Flow Matching

**Authors:** Yuyang Chen; Linqian Zeng; Yijin Zhou; Hengjie Li; Jidong Zhai

**ID:** 149614\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149614

[Paper](<https://openreview.net/forum?id=ome95BvF3y>) | [PDF](<https://openreview.net/pdf?id=ome95BvF3y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149614>)

Flow Matching \(FM\) has emerged as the dominant paradigm for state\-of\-the\-art image and video generation, yet its reliance on full attention over lengthy sequences incurs significant latency\. While existing caching methods reduce redundant computations, they yield suboptimal performance, fundamentally constrained by inflexible spatial granularity and empirical, model\-specific heuristics\.  To bridge this gap, we ground the caching mechanism in the geometric properties of the FM velocity field\. We theoretically establish that the \\textbf\{curvature\} inherently dictates the coupling between trajectory fluctuation and computational requirements, thereby providing a rigorous metric to quantify caching staleness loss and automatically derive adaptive granularity and optimal update intervals\.  Translating this theoretical insight into practical acceleration, we present CuBic, a train\-free caching framework\. It bypasses expensive curvature computations via a zero\-overhead proxy signal that dynamically guides spatial partitioning and budget\-constrained update scheduling\. At the system level, a sparse forward engine translates these optimal policies into efficient runtime, ensuring that theoretical guarantees directly translate into actual FLOP savings and linear speedup\. Being model\-agnostic and virtually hyperparameter\-free, CuBic consistently outperforms state\-of\-the\-art caching baselines in quality at customizable acceleration ratios \(averaging 2\.5$\\times$\) across Wan2\.1, Flux\.1, and FireRed\-Image\-Edit\.

## Identifying and Mitigating Diversity Collapse in Zero\-Shot Personalization with I2I Editing Models

**Authors:** Uichan Lee; Jongeon Baek; Sangheum Hwang

**ID:** 149053\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149053

[Paper](<https://openreview.net/forum?id=tDe4M34lN8>) | [PDF](<https://openreview.net/pdf?id=tDe4M34lN8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149053>)

Reference\-conditioned image\-to\-image \(I2I\) editing models provide a promising zero\-shot approach to personalized image generation by jointly conditioning on a reference image and a text prompt\. We show that recent I2I editing models, including FLUX\.1 Kontext and FLUX\.2, achieve strong subject identity preservation and prompt alignment, but exhibit seed\-wise diversity collapse: under the same reference image and prompt, different random seeds often produce highly similar outputs\. We further find that this collapse is associated with over\-alignment of latent\-token trajectories during denoising\. Based on this observation, we introduce Selective Hidden Perturbation \(SHiP\), a training\-free inference\-time intervention that perturbs only the attention\-output representations of latent tokens during early denoising while keeping reference\-image and text tokens unchanged\. Across diverse subjects and prompts, SHiP improves seed\-wise diversity on both FLUX\.1 Kontext and FLUX\.2 while largely preserving identity and prompt fidelity\. On FLUX\.1 Kontext, SHiP increases Vendi Score from 1\.546 to 2\.066 and LPIPS from 0\.475 to 0\.621, with only minor decreases in GPT\-ID and GPT\-Text\. Code is available at https://anonymous\.4open\.science/r/i2i\-personalization\-diversity\-0260/\.

## EntityBench: Towards Entity\-Consistent Long\-Range Multi\-Shot Video Generation

**Authors:** Ruozhen He; Meng Wei; Ziyan Yang; Vicente Ordonez

**ID:** 153267\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153267

[Paper](<https://openreview.net/forum?id=MXMtuuTopS>) | [PDF](<https://openreview.net/pdf?id=MXMtuuTopS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153267>)

_Abstract unavailable from the accessible public sources._

## CollabVR: Collaborative Video Reasoning with Vision\-Language and Video Generation Models

**Authors:** Joowon Kim; Seungho Shin; Joonhyung Park; Eunho Yang

**ID:** 149957\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149957

[Paper](<https://openreview.net/forum?id=lv4U2Eez13>) | [PDF](<https://openreview.net/pdf?id=lv4U2Eez13>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149957>)

_Abstract unavailable from the accessible public sources._

## Character Mixing for Video Generation

**Authors:** Tingting Liao; Chongjian GE; Guangyi Liu; Hao Li; Yi Zhou

**ID:** 148244\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148244

[Paper](<https://openreview.net/forum?id=zKLIZIhkEs>) | [PDF](<https://openreview.net/pdf?id=zKLIZIhkEs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148244>)

Imagine Mr\. Bean stepping into Tom and Jerry\-\-can a video model generate interactions that stay faithful to each character's identity, behavior, and style across worlds? We present MiMix, a unified framework for multi\-character text\-to\-video generation that goes beyond visual appearance to capture character\-specific personas generalizing to unseen scenes and partners\. To evaluate this, we introduce the Cross\-Character Generalization Benchmark, a social stress test placing each character in novel scenes with previously uncoexistent partners\. MiMix combines Cross\-Character Embedding \(CCE\), which disentangles identity and behavior via text\-aligned annotations, with Cross\-Character Augmentation \(CCA\), which synthesizes cross\-style training data while preserving native appearance\. Experiments show consistent gains in identity fidelity, interaction quality, and style consistency over prior personalized and general video models\.Additional results and videos are available on our project page: https://mi\-mi\-x\.github\.io\.

## Learning Preference Representations for Preference\-Conditioned Image Generation

**Authors:** Wenyi Mo; Tianyu Zhang; Yalong Bai; Ligong Han; Ying Ba; Dimitris Metaxas

**ID:** 154511\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154511

[Paper](<https://openreview.net/forum?id=D2Ld3EwMVg>) | [PDF](<https://openreview.net/pdf?id=D2Ld3EwMVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154511>)

Modern image generative models produce high\-quality, prompt\-faithful images, yet the same prompt can correspond to different desired outputs for different users\. We study \\emph\{preference\-conditioned image generation\}: generating images that follow a target prompt while reflecting a user's latent visual preferences inferred from liked and disliked histories\. This problem is challenging because real preference histories are sparse and costly to collect, user tastes mix semantic and stylistic factors that are difficult to verbalize, and diffusion generators are not naturally designed to condition on multi\-image preference histories\. We propose \\textsc\{PrefGen\}, a framework for learning structured preference representations and injecting them into diffusion\-based generators\. To address the supervision bottleneck, we construct a large\-scale synthetic\-agent preference dataset with dense, coherent liked/disliked histories, using it as scalable supervision for preference representation learning\. We train a multimodal large language model with preference\-oriented visual question answering and analyze its hidden states to separate two complementary signals: an intra\-user embedding for liked\-versus\-disliked distinctions and a cross\-history consistency embedding for stable user\-level tendencies\. To bridge MLLM representations and diffusion conditioning, we introduce a distributional alignment objective based on maximum mean discrepancy and inject the aligned preference signal through a lightweight cross\-attention branch\. We evaluate \\textsc\{PrefGen\} with a tiered protocol: \\textsc\{PrefBench\} as a synthetic in\-distribution diagnostic, leakage\-free Pick\-a\-Pic transfer as a controlled real\-user benchmark, and user\-in\-the\-loop studies with participant\-curated histories as human\-facing evidence\. Across these settings, \\textsc\{PrefGen\} improves preference alignment over strong personalization baselines while preserving prompt fidelity and competitive image quality\.

## LogicDirector: Enforcing Temporal Composition in Text\-to\-Video Generation

**Authors:** Yujiang Pu; Zixu Cheng; Shaogang Gong; Handong Zhao; Yu Kong

**ID:** 153496\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153496

[Paper](<https://openreview.net/forum?id=KxBQdkTg2q>) | [PDF](<https://openreview.net/pdf?id=KxBQdkTg2q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153496>)

_Abstract unavailable from the accessible public sources._

## UNICOM: Unified Multimodal Modeling via Compressed Continuous Semantic Representations

**Authors:** Yaqi Zhao; Wang Lin; Zijian Zhang; Jian Zhang; Zhao Zhong; Liefeng Bo; Jingyuan Chen; Wentao Zhang

**ID:** 156067\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156067

[Paper](<https://openreview.net/forum?id=0iUmETfbJj>) | [PDF](<https://openreview.net/pdf?id=0iUmETfbJj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156067>)

_Abstract unavailable from the accessible public sources._

## Directional Noise Conditioning for Diffusion Models

**Authors:** Mahdi Shafiei; Azade Farshad; Nassir Navab; Yousef Yeganeh

**ID:** 150199\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150199

[Paper](<https://openreview.net/forum?id=jzTnuYTSXT>) | [PDF](<https://openreview.net/pdf?id=jzTnuYTSXT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150199>)

_Abstract unavailable from the accessible public sources._

## SCULPT: Advancing Masked Discrete Diffusion for High\-Resolution Image Synthesis\.

**Authors:** Shufan Li; Greg Heinrich; Hanrong Ye; Yonggan Fu; Aditya Grover; Jan Kautz; Pavlo Molchanov

**ID:** 154985\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154985

[Paper](<https://openreview.net/forum?id=9Qv7b21CM4>) | [PDF](<https://openreview.net/pdf?id=9Qv7b21CM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154985>)

We propose SCULPT, a state\-of\-the Art masked discrete diffusion model \(MDMs\) for high resolution text\-to\-image synthesis\. Compared with prior works on masked image generation, SCULPT addresses two key challenges\. First, unlike continuously diffusion models which progressively refines image latent across the entire image, vanilla MDMs do not have self\-correcting capability because discrete tokens cannot be changed once it's unmasked\. Second, while scaling the vocabulary size of discrete image tokenizers can improve reconstruction quality, it also introduces optimization challenges for training generative models as per\-token training signal becomes more spares\. To address the first challenge, SCULPT incroprates a token\-editing mechanism where the model can dynamically correct already\-unmasked output tokens during inference\. To address the second challenge\. we proposed a Goruped Corss Entrophy \(GCE\) objective that assigns positive learning signal to adjacent tokens of the ground truth in the embedding space\. To improve the training efficiency, we further implemented a custom fused operator that greatly reduce the VRAM requirements during training in large\-vocabulary setting\. Experiment results show that these innovations significant improves the training efficiency and image fidelity of masked discrete image generators\.

## AHPA: Adaptive Hierarchical Prior Alignment for Diffusion Transformers

**Authors:** Ruibin Min; Yexin Liu; Aimin PAN; Changsheng Lu; Jiafei Wu; kelu Yao; Xiaogang Xu; Harry Yang

**ID:** 149646\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149646

[Paper](<https://openreview.net/forum?id=oVv65Pv6Fq>) | [PDF](<https://openreview.net/pdf?id=oVv65Pv6Fq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149646>)

Representation alignment has recently emerged as an effective paradigm for accelerating Diffusion Transformer training\. Despite their success, existing alignment methods typically impose a fixed supervision target or a fixed alignment granularity throughout the entire denoising trajectory, whether the guidance is provided by external vision encoders, internal self\-representations, or VAE\-derived features\. We argue that such timestep\-agnostic alignment is suboptimal because the useful granularity of representation supervision changes systematically with the signal\-to\-noise ratio\. In high\-noise regimes, diffusion models benefit more from coarse semantic and layout\-level anchoring, whereas in low\-noise regimes, the training signal should emphasize spatially detailed and structurally faithful refinement\.  This non\-stationary alignment behavior creates a representational mismatch for static single\-level supervisors\. To address this issue, we propose Adaptive Hierarchical Prior Alignment \(AHPA\), a lightweight alignment framework that exploits the hierarchical representations naturally embedded in the frozen VAE encoder\.  Instead of using only a single compressed latent as the alignment target, AHPA extracts multi\-level VAE features that provide complementary priors ranging from local geometry and spatial topology to coarse semantic layout\.  A timestep\-conditioned Dynamic Router adaptively selects and weights these hierarchical priors along the denoising trajectory, thereby synchronizing the alignment granularity with the model's evolving training needs\.  Extensive experiments show that AHPA improves convergence and generation quality over baselines and incurs no additional inference cost while avoiding external encoder supervision during training\.

## LDM\-is\-AE: Latent Diffusion is an Intrinsic Auto\-Encoder for End\-to\-End Image Generation

**Authors:** Zhengqiang ZHANG; Lingchen Sun; Rongyuan Wu; Qiaosi Yi; Xiangtao Kong; Chaodong Xiao; Lei Zhang

**ID:** 155308\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155308

[Paper](<https://openreview.net/forum?id=6ZJ78XqDXZ>) | [PDF](<https://openreview.net/pdf?id=6ZJ78XqDXZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155308>)

Latent Diffusion Models \(LDMs\) typically adopt a two\-stage pipeline: an auto\-encoder \(AE\) is first pre\-trained to define a latent space, then a diffusion model is trained to perform denoising within it\. Such a two\-stage design introduces a representation mismatch, as the latent space is optimized for reconstruction rather than adapting the denoising dynamics\. We reveal that the \*\*LDM\*\* itself \*\*is\*\* intrinsically an \*\*AE\*\*, and consequently present \*\*LDM\-is\-AE\*\*, an end\-to\-end one\-stage LDM training framework that eliminates the need for a separately trained tokenizer\. Our key observation is that the LDM backbone actually performs a \*latent\-to\-feature\-to\-latent\* transformation at each denoising step, which can be interpreted as an internal decoding\-\-encoding process\. Leveraging this structure, we split the DiT backbone into two reciprocal components, \*\*DiT\-E\*\* \(i\.e\., DiT Encoding\) and \*\*DiT\-D\*\* \(i\.e\., DiT Decoding\), and impose image\-space supervision on the intermediate features across all timesteps\. Our model encourages the internal representation to align with the image domain throughout denoising, thereby establishing an explicit \*latent\-to\-image\-to\-latent\* path\. At the zero\-noise timestep, our model further performs an \*image\-to\-latent\-to\-image\* mapping, corresponding to an auto\-encoding process\. As a result, LDM\-is\-AE jointly learns latent representations and denoising dynamics in an end\-to\-end manner, yielding a diffusion\-native latent space tailored to the generation process\. Experiments demonstrate that LDM\-is\-AE exhibits highly competitive generation performance, achieving an FID of 1\.84 on class\-conditional image generation\. Code and models will be released\.

## D2D: Detector\-to\-Differentiable Critic for Improved Numeracy in Text\-to\-Image Generation

**Authors:** Nobline Yoo; Olga Russakovsky; Ye Zhu

**ID:** 153310\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153310

[Paper](<https://openreview.net/forum?id=MFUdIySxW3>) | [PDF](<https://openreview.net/pdf?id=MFUdIySxW3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153310>)

Text\-to\-image \(T2I\) diffusion models have achieved strong performance in semantic alignment, yet they still struggle with generating the correct number of objects specified in prompts\. Existing approaches typically incorporate auxiliary counting networks as external critics to enhance numeracy\. However, since these critics must provide gradient guidance during generation, they are restricted to regression\-based models that are inherently \\emph\{differentiable\}, thus excluding detector\-based models with superior counting ability, whose count\-via\-enumeration nature is \\emph\{non\-differentiable\}\. To overcome this, we propose \\textbf\{Detector\-to\-Differentiable\} \(\\emph\{D2D\}\), a novel framework that transforms non\-differentiable detection models into differentiable critics, leveraging their superior counting ability to guide numeracy generation\. Specifically, we design custom activation functions to convert detector logits into soft binary indicators, which are then used to optimize the noise prior at inference time with pre\-trained T2I models\.  Our extensive experiments on SDXL\-Turbo, SD\-Turbo, and Pixart\-DMD across four benchmarks of varying complexity \(low\-density, high\-density, and multi\-object scenarios\) demonstrate consistent and substantial improvements in object counting accuracy \(e\.g\., boosting up to 13\.7\\% on D2D\-Small, a 400\-prompt, low\-density benchmark\), with minimal degradation in overall image quality and computational overhead\.

## EntiRE: Invariant Learning for Robust Concept Erasure in Text\-to\-Image Generative Models

**Authors:** Fengyuan Yu; Yuyuan Li; Xiaohua Feng; Li Zhang; Jiaming Zhang; Xiang Liu; Jun Wang; Chaochao Chen

**ID:** 151144\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151144

[Paper](<https://openreview.net/forum?id=ch8Vn8e6ZM>) | [PDF](<https://openreview.net/pdf?id=ch8Vn8e6ZM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151144>)

Large\-scale text\-to\-image diffusion models can inadvertently generate harmful or sensitive content learned from uncurated training data, motivating the development of concept erasure methods that remove undesired concepts from pre\-trained models\. However, recent studies reveal that erased models remain vulnerable to adversarial prompt attacks that recover the supposedly removed concepts, highlighting the need for robust erasure techniques\. In this work, we visualize the text embedding distributions of adversarial prompts and find that the difficulty of erasure is non\-uniform\. Existing methods effectively erase concepts in easier regions but leave localized residual holes in harder regions, which adversarial prompts consistently exploit\. Motivated by this finding, we propose Entire\-space Robust Erasure \(EntiRE\), an end\-to\-end framework that casts robust concept erasure as an out\-of\-distribution generalization problem\. By adopting an invariant learning formulation regularized by total variation, EntiRE enforces more uniform erasure across the continuous prompt space, suppressing the localized residual regions\. Extensive experiments on erasing nudity, artistic style, and object concepts demonstrate that EntiRE consistently outperforms state\-of\-the\-art baselines in both robustness against adversarial prompt attacks and utility preservation\.

## EPIC: Efficient Predicate\-Guided Inference\-Time Control for Compositional Text\-to\-Image Generation

**Authors:** Sunung Mun; Sunghyun Cho; Jungseul Ok

**ID:** 152068\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152068

[Paper](<https://openreview.net/forum?id=ViGYqNSZKu>) | [PDF](<https://openreview.net/pdf?id=ViGYqNSZKu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152068>)

Recent text\-to\-image \(T2I\) generators can synthesize realistic images, but still struggle with compositional prompts involving multiple objects, counts, attributes, and relations\. We introduce EPIC \(Efficient Predicate\-Guided Inference\-Time Control\),  a training\-free inference\-time refinement framework for compositional T2I generation\. EPIC casts refinement as predicate\-guided search: it parses the original prompt once into a fixed visual program of object variables and typed predicates, covering checkable conditions such as object presence, counts, attributes, and relations\. Each generated or edited image is verified against this program using visual evidence extracted from that image\. An image is judged to satisfy the prompt only when all predicates are satisfied; otherwise, failed predicates decide the next step, routing local failures to targeted editing and global failures to resampling while the fixed visual program remains unchanged\. On GenEval2, EPIC improves prompt\-level accuracy from 34\.16% for single\-pass generation with the base generator to 71\.46%\. Under the same generator/editor setting and maximum image\-model execution budget, EPIC outperforms the strongest prior refinement baseline by 19\.23 points while reducing realized cost by 31% in image\-model executions, 72% in MLLM calls, and 81% in MLLM tokens per prompt\.

## SpecLoR: Spectral Lookahead Rectification for Motion\-Coherent Text\-to\-Video Generation

**Authors:** Xu Zhang; Yu Lu; Ruijie Quan; Zhaozheng CHEN; Bohan Wang; Yi Yang

**ID:** 152867\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152867

[Paper](<https://openreview.net/forum?id=PoLjtyYc3T>) | [PDF](<https://openreview.net/pdf?id=PoLjtyYc3T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152867>)

Flow Matching has enabled robust text\-to\-video generation via latent ODE sampling\. However, velocity approximation and numerical discretization errors inevitably accumulate, causing sampling trajectories to drift\. Consequently, generated videos often suffer from severe spatiotemporal inconsistencies, such as physically implausible motions\. Yet, directly correcting these drifted noisy latents is challenging: timestep\-dependent noise obscures reliable structural cues, and spatial interventions risk disrupting fragile local geometry while incurring heavy computational costs\. To address this, we propose Spectral Lookahead Rectification \(SpecLoR\), a plug\-and\-play inference method that bypasses noise via lookahead prediction\. It also circumvents spatiotemporal entanglement by shifting corrections to the frequency domain, where universal statistical natural\-video priors are readily available\. First, during early sampling stages, SpecLoR looks ahead to estimate the clean latent $z\_\{t,0\}$ and computes its 3D spatiotemporal spectrum\. Next, SpecLoR rectifies only the amplitude to match the statistical prior, leaving the phase intact\. Finally, the corrected state is re\-noised to resume ODE integration\. Experiments on Wan2\.2 demonstrate that SpecLoR significantly reduces physical artifacts and enhances motion coherence across multiple benchmarks with minimal computational overhead \(4 additional NFEs in a 40\-step schedule\)\. Code will be released\.

## Auteur: Language\-Driven Cinematographic Framing for Human\-Centric Video Generation

**Authors:** Muhammed Burak Kızıl; Enes Sanli; Niloy Mitra; Xuelin Chen; Erkut Erdem; Aykut Erdem; Duygu Ceylan

**ID:** 155137 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=86BxEBOd7Q>) | [PDF](<https://openreview.net/pdf?id=86BxEBOd7Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155137>)

Generative video models have achieved remarkable visual fidelity and temporal coherence, yet intentional camera control remains elusive\. Existing frameworks treat camera motion as a byproduct of pixel synthesis, producing trajectories that are stochastic, spatially inconsistent, and indifferent to the human subject driving the scene\. In this work, we present Auteur, a method for language\-driven, human\-centric camera framing in generative video\. Our core insight is that professional filmmakers conceive shots not as world\-space trajectories but as framings defined relative to the actor, encoding shot size, angle, and composition as functions of human pose and motion\. We formalize this intuition as a human\-centric camera parameterization and introduce a Domain\-Specific Language \(DSL\) that is convertible to standard 6\-DoF camera parameters\. A fine\-tuned multimodal large language model then acts as a virtual director, mapping natural language descriptions and coarse human motion to sparse DSL keyframes that are deterministically inter\-polated into continuous camera trajectories, which are then provided as input to video generators\. We train and evaluate Auteur on a new dataset of 30K aligned text, human motion, and DSL\-annotated camera trajectories drawn from procedural synthesis and real\-world movie footage from the CondensedMovies dataset\. Auteur enables cinematographic framing of human\-centered scenes, a capability largely absent in prior generative models\. To assess this behavior, we propose new framing\-focused metrics, and our experiments show that Auteur consistently outperforms existing methods\.

## BigCell: Generating Gigapixel Whole\-Slide Images

**Authors:** Srikar Yellapragada; Alexandros Graikos; Zilinghan Li; Kostas Triaridis; Tarak N Nandi; Ji Dong K\. Bai; Beatrice Knudsen; Tahsin Kurc; Prateek Prasanna; Rajarsi R Gupta; Ravi K Madduri; Joel Saltz; Dimitris Samaras

**ID:** 152972 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OyI7kjl92B>) | [PDF](<https://openreview.net/pdf?id=OyI7kjl92B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152972>)

Whole\-slide images \(WSIs\) are gigapixel\-scale digital scans of histopathology tissue and serve as the primary basis for cancer diagnosis\. Existing histopathology generative models operate at the patch scale, producing fixed\-size tiles of at most 1024$\\times$1024 pixels which encompass only a small fraction of the WSI\. In contrast, text reports for clinical diagnoses and slide\-level diagnostic labels \-\- the supervision that exists at scale \-\- operate at the whole\-slide level\. We present BigCell, the first approach to generate coherent whole\-slide histopathology images at gigapixel resolution\. BigCell trains a flow\-matching transformer at 2048$\\times$2048 pixels on over 120,000 publicly available WSIs spanning multiple organ types\. Conditioning on embeddings from pathology foundation models and using an inference\-time sliding\-window pipeline, BigCell generates coherent images of up to 32,768$\\times$32,768 pixels, outperforming prior tile generators on both tile\-level and slide\-level fidelity metrics\. To make gigapixel synthesis practical, we introduce an adaptive scheduling strategy that prioritizes important slide regions, speeding up image generation by over 3\\ttimes with minimal quality degradation\. Furthermore, we propose the first text\-to\-image synthesis at 8k resolution by training a separate model that produces dense conditioning grids directly from pathology text reports\. We demonstrate that augmenting with synthetic samples improves slide\-level few\-shot classification performance by up to $18 \\\\%$ over baselines trained on real data alone\.

## Beyond Spatial and Temporal Priors: A Generalizable Approach for Dense Correspondence Matching

**Authors:** Luping Liu; Bingyi Kang; Yifan Wang; Dong Xu

**ID:** 149352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qhc3sU3mz5>) | [PDF](<https://openreview.net/pdf?id=qhc3sU3mz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149352>)

Dense correspondence matching has historically been bounded by simplifying spatio\-temporal priors, such as smooth motion and rigid geometry\. While effective for classical tasks, these foundations collapse at the frontier of Vision\-Language\-guided Image Editing and Generation \(VL\-IEG\), where transformations yield correspondences that are perceptually obvious yet physically discontinuous\. To transcend spatio\-temporal priors, we draw inspiration from human cognition: learning a generalized model of identity\-preserving visual consistency rather than relying on physical constraints\. To achieve this, we introduce FreeMatching, a unified framework that extracts identity\-preserving knowledge from foundation models and diverse datasets\. The model's capability is forged through a two\-stage training paradigm: supervised pre\-training on diverse annotated datasets, followed by weakly\-supervised refinement on data without dense annotations\. Experimentally, FreeMatching not only achieves performance competitive with SOTA methods on classical benchmarks but also establishes the first strong baseline for the challenging VL\-IEG task\. Furthermore, we demonstrate its utility as a quantitative metric for evaluating identity\-preserving consistency in generative editing, aligning closely with human judgment\.

## Transforming Image Editors into Video Editors

**Authors:** Feng Wang; Zijie Li; Ceyuan Yang; Alan Yuille; Peng Wang

**ID:** 149320 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r1K6p0Djsg>) | [PDF](<https://openreview.net/pdf?id=r1K6p0Djsg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149320>)

Recent image editing systems have achieved impressive semantic understanding, visual fidelity, and instruction\-following ability, while video editing remains substantially more difficult and costly\. In this paper, we present a simple alternative to end\-to\-end video editing: instead of training a monolithic video editor, we transform a strong image editor into a video editor through anchor\-based generation\. Our key insight is that video editing can be decomposed into two subproblems: editing a sparse set of keyframes and propagating those edits across time\. Based on this observation, we propose Anchor\-based Video Editing \(AVE\), a two\-stage framework in which a powerful image editor first performs composed editing on selected keyframes, and a motion\-guided image\-to\-video diffusion model then generates the final video by treating the edited keyframes as fixed anchors\. This design directly inherits the strengths of modern image editors while avoiding expensive end\-to\-end video editing training\. Experiments on IVEBench and VIE\-Bench show that AVE achieves strong performance in instruction following, temporal consistency, and content fidelity\. Further ablations reveal that final video editing quality is strongly correlated with the quality of the image editor, suggesting that future progress in video editing may come from stronger image editing foundations and lightweight transfer to video\.

## Learning to Solve Generative ODEs Beyond the Linear Span

**Authors:** Sihyeon Kim; Seunghun Lee; Vikas Singh; Hyunwoo J\. Kim

**ID:** 155573 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4bJGY8qAu3>) | [PDF](<https://openreview.net/pdf?id=4bJGY8qAu3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155573>)

Diffusion and flow generative models sample by integrating a learned ODE, but high quality still requires many sequential model evaluations\.  Solver learning reduces this cost by adapting scalar coefficients, timesteps, or both, while keeping the backbone model fixed\.  In this work, we identify a structural bottleneck in this update family: each step remains span\-limited\. Each update remains a scalar\-weighted combination of buffered velocity evaluations, so learning can reduce the in\-span teacher mismatch but cannot represent the out\-of\-span residual exposed by large steps\.  We propose SpanLift, a lightweight operator\-augmented neural solver that enlarges the update family beyond scalar\-coefficient solvers\.  SpanLift keeps a fixed base solver as an in\-span prior and learns a spatial residual operator over the state and velocity buffer\.  The operator is trained by endpoint teacher matching, preserves the pretrained backbone, and adds no model NFEs\.  Empirically, the learned correction transfers across base solvers and is predominantly out\-of\-span\.  Across pixel\-space diffusion, latent flow matching, and precipitation nowcasting, SpanLift achieves state\-of\-the\-art few\-step sampling\.  With only 3 NFE, it improves CIFAR\-10 FID from 8\.16 to 5\.69 and ImageNet FID from 17\.37 to 11\.83\.

## DSAQuant: Denoising\-Stage\-Aligned Quantization\-Aware Training for Video Generation

**Authors:** Shuaiting Li; Zelin Gao; Haibin Shen; Yujun Shen; Haotong Qin; Yinghao Xu

**ID:** 150894 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ed33sAgUBp>) | [PDF](<https://openreview.net/pdf?id=ed33sAgUBp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150894>)

Video diffusion models \(VDMs\) have achieved impressive progress in text\-to\-video generation, but their high memory and computational costs hinder practical deployment\. Quantization\-aware training \(QAT\) is an effective solution for compressing and accelerating advanced generative models without runtime overhead at inference\. % However, existing QAT methods suffer from a distinctive challenge in VDMs: while they often preserve prompt semantics, global layout, and coarse motion, the quantized model severely degrades visual details, texture fidelity, and sharpness\. In this paper, we trace this degradation to the timestep\-agnostic design of conventional quantization pipelines, which overlooks the stage\-wise functionality of video denoising\. In VDMs, early denoising steps mainly establish global structure and motion, whereas middle and late steps refine local appearance and high\-frequency details\. Based on this insight, we propose \\textbf\{DSAQuant\}, a \\textbf\{D\}enoising\-\\textbf\{S\}tage\-\\textbf\{A\}ligned \\textbf\{Quant\}ization\-aware training framework for VDMs\. During training, \\textit\{Denoising\-Stage Oriented Supervision\} preserves teacher distillation in early steps for stable structure planning, while shifting later steps toward target\-driven optimization to enhance detail reconstruction\. During inference, \\textit\{Denoising\-Stage Gated Guidance\} disables CFG in the final denoising steps to prevent it from amplifying quantization\-induced errors into high\-frequency artifacts\. Extensive experiments on the Wan and CogVideoX families under W4A4 and W3A3 settings show that DSAQuant consistently outperforms the SOTA QAT baseline, improving the VBench average score by up to 6\.60 under aggressive W3A3 quantization while preserving strong text\-video alignment\. These results demonstrate that effective VDM quantization requires not only reducing quantization error, but also aligning quantization training and inference with the stage\-wise nature of video diffusion\.

## Mixture\-of\-Hierarchical Experts: Optimized Mamba Architecture for Vision Diffusion

**Authors:** Yejun Jung; Dongyun Kim; Jinsun Park

**ID:** 149639 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oaYSEpYT1C>) | [PDF](<https://openreview.net/pdf?id=oaYSEpYT1C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149639>)

Existing Mamba\-based diffusion backbones struggle to achieve competitive performance in vision tasks, as purely sequential propagation lacks an explicit spatial inductive bias and relies on a fixed computation pattern across timesteps\. We address this limitation by proposing \\textbf\{Mixture\-of\-Hierarchical Experts \(MoH\)\}, a Mamba\-based diffusion backbone that performs timestep\-conditioned routing over architectural components\. MoH dynamically selects representation levels by its hierarchical expert space, adapts feature transformations, and adjusts Mamba scan depth according to the denoising state, enabling flexible modeling of spatial structure and multi\-scale dependencies\. This design leads to substantial performance gains\. On unconditional CelebA\-HQ $256 \\times 256$, MoH reduces FID from 14\.27 to 7\.99, and on MS\-COCO, it improves FID from 41\.80 to 20\.00, significantly outperforming prior Mamba\-based models while improving training efficiency\. These results suggest that routing over architectural components can provide an effective mechanism for improving Mamba\-based diffusion backbones\.

## Spectral Progressive Diffusion for Efficient Image and Video Generation

**Authors:** Howard Xiao; Brian Chao; Lior Yariv; Gordon Wetzstein

**ID:** 151007 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ddRju4BSEw>) | [PDF](<https://openreview.net/pdf?id=ddRju4BSEw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151007>)

Diffusion models have been shown to implicitly generate visual content autoregressively in the frequency domain, where low\-frequency components are generated earlier in the denoising process while high\-frequency details emerge only in later timesteps\. This structure offers a natural opportunity for efficient generation, as high\-resolution computation on noise\-dominated frequencies is largely redundant\. We propose Spectral Progressive Diffusion, a general framework that progressively grows resolution along the denoising trajectory of pretrained diffusion models\. To this end, we develop a spectral noise expansion mechanism and derive an optimal resolution schedule from the model's power spectrum\. Our framework supports training\-free acceleration and a novel fine\-tuning recipe that further improves efficiency and quality\. We demonstrate significant speedups on state\-of\-the\-art pretrained image and video generation models while preserving visual quality\.

## Decoupled Safety Control: A Safety\-Control Algorithm for Training\-Free Safety Guidance

**Authors:** Huilin Zhou; Ruoxi Cheng; Yuhang Wang; Yuming Liu; Minghao Sun; Ruolong Ma; Lan Zhang

**ID:** 151316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bOS8epZNuS>) | [PDF](<https://openreview.net/pdf?id=bOS8epZNuS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151316>)

Diffusion models achieve strong performance in text\-to\-image generation, but they can still produce unsafe content\. Training\-free safety guidance offers a practical inference\-time alternative that intervenes during sampling without modifying model weights\. However, many existing safeguards still rely on a coupled safety\-control chain\. In this chain, the same unsafe condition simultaneously specifies what should be avoided, indicates the current unsafe signal, constructs the intervention, and determines when that intervention remains active\. This coupling can work when unsafe factors are explicit, but becomes less reliable once harmful and benign semantics are entangled in the current generation state, often leaving residual unsafe content or unnecessarily degrading benign\-generation quality or prompt fidelity\. We address this problem with Decoupled Safety Control \(DSC\), a plug\-in safety\-control algorithm for training\-free safety guidance\. DSC reformulates training\-free safety guidance as an explicit state\-dependent control process, so the executed intervention is determined from the current generation state rather than inherited directly from a single unsafe condition\. Experiments on standard safety benchmarks show that DSC improves representative latent\- and text\-space safeguards, achieving stronger unsafe\-content suppression while preserving benign\-generation quality and maintaining efficient inference\.

## Rate\-Constrained Edge Metadata for Sender–Receiver Generative Video Super\-Resolution

**Authors:** Jiaqi Guo; Mingzhen Li; Haohong Wang; Aggelos Katsaggelos

**ID:** 150084 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kqtZlt4mPS>) | [PDF](<https://openreview.net/pdf?id=kqtZlt4mPS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150084>)

Real\-world television and streaming pipelines often deliver compressed HD video to increasingly capable displays, making video super\-resolution \(VSR\) both practically important and fundamentally ambiguous\. Existing generative VSR methods are largely receiver\-only, requiring the model to infer missing high\-frequency structures from degraded pixels alone\. We propose MetaVSR, a sender\-\-receiver collaborative framework that transmits compact structural edge metadata as bitrate\-constrained side information for generative VSR\. MetaVSR builds on a one\-step video diffusion transformer and encodes both the low\-quality video and transmitted metadata through the native 3D VAE, enabling token\-level fusion within the original DiT attention blocks without additional control branches\. We further introduce a rate\-aware Canny edge metadata selection strategy that allocates metadata bits to structurally challenging regions, and evaluate reconstruction quality under matched total transmission budgets that include both compressed video and metadata\. Across five public VSR benchmarks, MetaVSR shows that budgeted sender\-side structural metadata can improve reconstruction over the receiver\-only DOVE\-5B baseline, increasing PSNR by 1\.03 dB and SSIM by 0\.055 on average while using a smaller 2B backbone\. On MetaSPS, our rate\-\-distortion evaluation shows approximately 20\\% rate saving under light\-noise degradation and more than 50\\% under heavy\-noise degradation compared with a no\-metadata generative baseline\. These results demonstrate that compact sender\-side edge metadata can reduce reconstruction ambiguity and improve bitrate\-efficient VSR when its transmission cost is explicitly accounted for\.

## Consistency Regularised Gradient Flows for Inverse Problems

**Authors:** Alessio Spagnoletti; Tim Wang; O\. Deniz Akyildiz; Marcelo Pereyra

**ID:** 154153 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FrNVq0ydC9>) | [PDF](<https://openreview.net/pdf?id=FrNVq0ydC9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154153>)

Vision\-Language Latent Diffusion Models \(LDMs\) provide powerful generative priors for inverse problems\. However, existing LDM\-based inverse solvers typically require a large number of neural function evaluations \(NFEs\) and backpropagation through large pretrained components, leading to substantial computational cost and, in some cases, degraded reconstruction quality\. We propose a unified Euclidean\-Wasserstein\-2 gradient\-flow framework that jointly performs posterior sampling and prompt optimization in the latent space through a single flow that aligns the prior and posterior with the observed data\. Combined with few\-step latent text\-to\-image models, this formulation enables low\-NFE inference without backpropagation through autoencoders\. Experiments across several canonical imaging inverse problems show that our method achieves state\-of\-the\-art performance with significantly reduced computational cost\.

## OmniMem: Scalable and Adaptive Memory Retrieval for Long Video Generation

**Authors:** Lin Zhao; Yushu Wu; Yifan Gong; Yanzhi Wang; Pu Zhao

**ID:** 150029\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150029

[Paper](<https://openreview.net/forum?id=lJpXhbi9az>) | [PDF](<https://openreview.net/pdf?id=lJpXhbi9az>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150029>)

Autoregressive \(AR\) video generation extends videos by producing latent chunks sequentially, but scaling to long videos requires repeated access to a growing historical KV cache\. Existing methods reduce this cost by truncating the KV cache or compressing it into implicit memory, but both lose explicit access to query\-relevant historical details\. We propose OmniMem, an explicit full\-range memory retrieval framework that performs sparse KV retrieval over the historical cache\. To make this practical for chunk\-based AR video generation, OmniMem addresses two issues: \(i\) local bias in sparse KV selection and \(ii\) Union Explosion in memory access\. Adaptive Window Exclusion removes local\-window blocks from the selection candidates when sufficient long\-range history is available, preserving the sparse budget for informative long\-range retrieval\. Query\-shared KV Selection reduces cross\-query diversity, while Per\-Head Scattered KV Access avoids expanding head\-specific selections into a large selected KV buffer\. This allows each attention head to retrieve non\-contiguous KV blocks according to its own selection pattern\. Experiments on long\-video generation show that OmniMem improves Dynamic Degree by 52\.3\\% and preserves strong consistency over strong baselines, while maintaining comparable memory usage\.

## $h$\-control: Training\-Free Camera Control via Block\-Conditional Gibbs Refinement

**Authors:** Yuzhu Wang; Xi Ye; Duo Su; Yangyang Xu; Jun Zhu

**ID:** 155968\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155968

[Paper](<https://openreview.net/forum?id=1URtIBjIQ0>) | [PDF](<https://openreview.net/pdf?id=1URtIBjIQ0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155968>)

Training\-free camera control for pretrained flow\-matching video generators is a partial\-observation inverse problem: a depth\-warped guidance video supplies noisy evidence on a subset of latent sites, which the sampler must reconcile with the pretrained prior\. Existing methods struggle to balance the trade\-off between trajectory adherence and visual quality and the heuristic guidance\-strength tuning lacks robustness\. We propose $h$\-control, which resolves this dilemma through a structural change to the sampler: each outer hard\-replacement guidance step is augmented with an inner\-loop block\-conditional pseudo\-Gibbs refinement on the unobserved complement at the same noise level, with provable convergence to the partial\-observation conditional data law\. To accelerate convergence on high\-dimensional video latents, we exploit their conditional locality, partitioning the unobserved complement into 3D patches, each tracked by a custom mixing indicator that adaptively freezes converged patches\. On RealEstate10K and DAVIS, $h$\-control attains the best FVD against all seven training\-free and training\-based competitors, outperforming every training\-free baseline on every reported metric\.

## Disentangling Dual Image References in Frequency Aware Diffusion Models for Personalized Generation

**Authors:** Haipeng Liu; Yang Wang; Meng Wang

**ID:** 150058\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150058

[Paper](<https://openreview.net/forum?id=l5xRQDiYkv>) | [PDF](<https://openreview.net/pdf?id=l5xRQDiYkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150058>)

_Abstract unavailable from the accessible public sources._

## The Fault in Our Metrics: Revisiting Generative Model Evaluation with Chamfer Distance

**Authors:** Chirag Vashist; Vaibhav Santhosh; Tristan Engst; Yanshu Zhang; Ke Li

**ID:** 139594 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GST0loGJ8O>) | [PDF](<https://openreview.net/pdf?id=GST0loGJ8O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139594>)

Reliable evaluation is essential for progress in image generation, yet widely used metrics rely on assumptions that are misaligned with the geometry of real data\. We revisit two dominant families of metrics: Fréchet\-based metrics such as FID, and precision/recall\-style metrics based on KNN balls\. We show that FID reduces complex feature distributions to a Gaussian moment summary, making it blind to differences beyond mean and covariance\. We further show that KNN\-ball metrics construct inflated isotropic support estimates in high\-dimensional feature spaces, causing binary membership queries to accept off\-manifold samples and making recall unstable under standard finite\-sample evaluations\. We propose Chamfer distance as a simple alternative: instead of constructing inflated support estimates, it directly measures cross\-set nearest\-neighbor distances between real and generated samples\. The resulting one\-sided distances provide interpretable signals for fidelity and coverage, while reducing sensitivity to the neighborhood hyperparameter and remaining computationally efficient\.

## Steering Fields: Adaptive Vector Fields for Safe Image Generation and Beyond

**Authors:** Simone Facchiano; Jan Eric Lenssen; Bernt Schiele; Wolfgang Stammer; Fabio Galasso; Jonas Fischer

**ID:** 148355\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148355

[Paper](<https://openreview.net/forum?id=yUc9CsiZvu>) | [PDF](<https://openreview.net/pdf?id=yUc9CsiZvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148355>)

As state\-of\-the\-art text\-to\-image flow models have matured to deliver near\-photorealistic quality, controlling what they generate \-\- e\.g\., inhibiting harmful content while promoting benign alternatives \-\- has become a central challenge\. The current steering paradigm consists of adding a global steering vector to selected model activations\. While functional, a fixed vector applied example\-agnostic and uniformly along the entire trajectory cannot adapt to the changing state of the generation, and causes uncontrolled global changes beyond the targeted concepts\. We introduce Steering Fields, a generalization of steering vectors that adaptively re\-estimates the steering direction at each step of the generative process\. Steering Fields operate on latent representations, expose a continuous trade\-off between steering strength and content preservation, and are compositional, enabling the simultaneous induction and inhibition of concepts, setting a new state of the art on safety steering benchmarks\. Although our formulation prescribes no explicit spatial mask or object\-level prior, the trajectory\-adaptive estimation naturally preserves local structure, in a manner reminiscent of image editing\. In fact, when applied in the VAE latent space, Steering Fields can serve as a structure\-preserving image\-editing technique that achieves state\-of\-the\-art semantic fidelity \(CLIP, VQAScore\), while remaining model\-agnostic and inversion\-free

## MEV: A Multi\-Event Video Dataset for Long\-Take Generation

**Authors:** Peiyuan Zhu; Shaoan Xie; Yifan Shen; Wen Tian; Zijian Li; Guangyi Chen; Kun Zhang

**ID:** 139259\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139259

[Paper](<https://openreview.net/forum?id=blH6L8WmTv>) | [PDF](<https://openreview.net/pdf?id=blH6L8WmTv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139259>)

Current datasets for text\-to\-video generation are largely limited to short clips depicting a single event or coarse\-grained captions\. As a result, they provide limited supervision for modeling long\-take temporal dependencies, often leading to temporally inconsistent generations when describing multiple events\. In this paper, we introduce MEV, a multi\-event video dataset designed for long\-take video generation\. MEV provides high\-quality real\-world videos where subjects can perform a sequence of distinct, non\-overlapping events, featuring precise temporal boundaries and fine\-grained procedural annotations\. This event\-centric discretization reduces confounding factors and enables models to support temporally localized conditioning and build long\-take videos from atomic event units\. Furthermore, we introduce a comprehensive annotation pipeline that segments videos into temporally grounded events, and generates structured captions at both the global level and the event level\. In addition, under an event\-centric evaluation protocol, we conduct multi\-event generation experiments by fine\-tuning on MEV with temporally grounded event conditioning, leading to improved long\-take event transitions and more coherent content\. We believe this work removes a key barrier to training video foundation models for multi\-event scenarios and provides practical insights into learning from temporally\-structured video\-text data\.

## Beyond a Single Score: An Audit of Aesthetic Evaluation in Text\-to\-Image Pipelines Across Subcultural Visual Languages

**Authors:** Dan Li; Ling Fan; Lei Xia; Mudasir Ahmed; Yuying Pei

**ID:** 139303\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139303

[Paper](<https://openreview.net/forum?id=Ya4OT7JyaR>) | [PDF](<https://openreview.net/pdf?id=Ya4OT7JyaR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139303>)

Text\-to\-image \(T2I\) models are increasingly used by online creative communities to generate imagery in the shared visual languages those communities have built, from Cottagecore's pastoral warmth to Cyberpunk's neon dystopias\. The aesthetic predictors embedded in T2I pipelines filter training data and score generated outputs, yet whether different predictors agree on which visual languages are "high\-quality" is largely untested\. We present SubCulture\-2\.6K, a dataset of 2,610 Stable\-Diffusion\-generated image–prompt pairs spanning six subcultures \(Cottagecore, Cyberpunk, Dark Academia, Goblincore, Synthwave, Y2K\), released with dominant\-color palettes, CLIP ViT\-L/14 embeddings, and per\-image scores from four deployed predictors \(LAION\-Aesthetics V2, PickScore, ImageReward, HPS\-v2\)\. Using this dataset we report four findings\. First, subcultures are visually separable in the representations these predictors read from, so any cross\-subcultural score difference reflects a value judgment, not a perceptual failure\. Second, LAION\-Aesthetics V2 imposes a large ordered preference across subcultures, with Y2K rendering retained at the standard quality cutoff at a small fraction of the rate of the most\-favored subculture\. Third, peer predictors share LAION\-Aesthetics V2's dispreference for Y2K but disagree sharply on which subculture they reward most, and they cluster much more closely with each other than with LAION\-Aesthetics V2\. Fourth, an interpretable\-feature regression accounts for roughly half of the LAION\-Aesthetics V2 effect, leaving a sizeable residual subcultural taste\. Because LAION\-Aesthetics V2 sits both upstream and downstream of recent Stable Diffusion variants, this audit shows that aesthetic predictors are not interchangeable: the choice of which one to use is itself a choice about whose visual language is rewarded\.

## DynamicRad: Content\-Adaptive Sparse Attention for Long Video Diffusion

**Authors:** Yongji Long; Shijun Liang; Jintao Li; Yun Li

**ID:** 150232\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150232

[Paper](<https://openreview.net/forum?id=joj70kq2fc>) | [PDF](<https://openreview.net/pdf?id=joj70kq2fc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150232>)

Leveraging the natural spatiotemporal energy decay in video diffusion offers a path to efficiency, yet relying solely on rigid static masks risks losing critical long\-range information in complex dynamics\. To address this issue, we propose DynamicRad, a sparse\-attention framework that constrains adaptive selection using a radial locality prior\. DynamicRad introduces a dual\-mode strategy: static\-ratio for speed\-optimized execution and dynamic\-threshold for quality\-first filtering\. To avoid online search over sparse indices, we integrate an offline Bayesian Optimization \(BO\) pipeline with a semantic motion router\. The router maps prompt embeddings to BO\-selected sparsity regimes with a single projection module\. Unlike online profiling methods, our offline BO optimizes attention reconstruction error \(MSE\) on a proxy task and reuses the selected configurations during inference\. Experiments on HunyuanVideo and Wan2\.1\-14B demonstrate that DynamicRad achieves a strong efficiency\-quality trade\-off among FlashAttention\-compatible sparse\-attention baselines, obtaining 1\.7x\-2\.5x inference speedups with over 80% effective sparsity\. In some long\-sequence settings, the dynamic mode matches or improves over the dense baseline on automatic quality metrics, while optional Mask\-Aware LoRA further improves long\-horizon coherence\. Code is available at https://anonymous\.4open\.science/r/DynamicRad\-5D55/\.

## HumanScore: Benchmarking Human Motions in Generated Videos

**Authors:** Tiange Xiang; Yusu Fang; Tian Tan; Narayan Schuetz; Scott Delp; Fei\-Fei Li; Ehsan Adeli

**ID:** 139307\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139307

[Paper](<https://openreview.net/forum?id=YGSNuUj5dh>) | [PDF](<https://openreview.net/pdf?id=YGSNuUj5dh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139307>)

Recent advances in model architectures, compute, and data scale have driven rapid progress in video generation, producing increasingly realistic content\. Yet, there is no method to systematically assess the fidelity of human figures generated in these videos\. In this paper, we present HumanScore, a systematic framework to evaluate the \\textbf\{quality of human figures and motions\} in AI\-generated videos\. We introduce seven metrics spanning kinematic plausibility and biomechanical consistency\. Through carefully designed prompts, we elicit a broad set of movements at varying intensities\. We evaluated a total of 840 videos generated by 6 state\-of\-the\-art models\. Our framework reveals consistent gaps between visual plausibility and motion fidelity, highlights common failure modes, and ranks models from multiple quantitative and physically meaningful metrics\. The proposed metrics are correlated with human evaluations and are simple to compute using standard pose estimators\.

## KnowVis: A Dual\-View Benchmark for Diagnosing World\-Knowledge Grounding in Text\-to\-Image Models

**Authors:** Yonghang Yu; Ruoyu Wang; Haoyu Zhang; Lin Qi; Yawei Zhou; Changqian Yu

**ID:** 139323\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139323

[Paper](<https://openreview.net/forum?id=XEkhbF0f6x>) | [PDF](<https://openreview.net/pdf?id=XEkhbF0f6x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139323>)

Text\-to\-image \(T2I\) models have made substantial progress in visual realism, aesthetic quality, and instruction following\. However, real\-world prompts often go beyond explicit visual descriptions and require implicit facts, structured knowledge, and domain\-specific commonsense\. Existing evaluations mainly focus on explicit prompt\-to\-image semantic alignment or specific knowledge subdomains, lacking a unified and diagnostic framework for evaluating world\-knowledge grounding in T2I models\.  We introduce KnowVis, a dual\-view diagnostic benchmark for world\-knowledge grounding in T2I generation\.  KnowVis is built on a hierarchical knowledge taxonomy with case\-level annotations, and contains two complementary views: a Skill\-Tree Benchmark for fine\-grained atomic knowledge evaluation and a Generalized Benchmark for open\-ended knowledge composition and expression\.  We further design a structured MLLM\-based VQA judge protocol and validate its reliability on the Skill\-Tree validation split, enabling scalable evaluation and diagnostic error attribution\. The protocol uses Required VQAs to assess atomic knowledge correctness in the Skill\-Tree Benchmark, and combines Required, Optional, and dynamically discovered knowledge expressions with human\-judge collaborative evaluation in the Generalized Benchmark\. Experiments show that KnowVis reveals notable gaps in world\-knowledge grounding across existing T2I models and provides structured diagnostic signals for knowledge\-intensive image generation\.

## Distance Marching for Generative Modeling

**Authors:** Zimo Wang; Ishit Mehta; Haolin Lu; Xunpeng Huang; Chung\-En Sun; Ge Yan; Lily Weng; Tzu\-Mao Li

**ID:** 152924\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152924

[Paper](<https://openreview.net/forum?id=PPRUA4hujO>) | [PDF](<https://openreview.net/pdf?id=PPRUA4hujO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152924>)

Modern generative models based on diffusion or flow matching transport noise toward the data manifold, without representing the data manifold explicitly\. We propose \\dm that explores an alternative design of generative modeling by explicitly modeling a distance field of the data manifold\.  Designing loss functions to learn distance fields in high\-dimensional space from point data can be challenging\. This is because the data do not provide reliable signals for closest point projection onto the manifold\. To mitigate this problem, we design new loss functions that weight training data by their proximity to each sampling position\. This distance\-field perspective naturally motivates two principled deterministic samplers, showing fast convergence in inference\. Our model is related to the recent time\-unconditional generative models since it also does not require time input, and our analysis reveals that our method helps time\-unconditional generative modeling to disambiguate the denoising problem and to avoid biasing towards the data mean\. As a result, our model is the only time\-unconditional model that remains competitive to time\-conditional ones across datasets and architectures\. Moreover, our distance prediction is also helpful for early stopping during sampling and for OOD detection\. We hope distance\-field modeling can open a promising direction for exploring generative modeling from a geometric perspective\.

## Boosting Text\-to\-Image Diffusion Models via Core Token Attention\-Based Seed Selection

**Authors:** Yunzhe Zhang; Hongfu Liu; Pengyu Hong

**ID:** 152409\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152409

[Paper](<https://openreview.net/forum?id=TK7VVYFzeK>) | [PDF](<https://openreview.net/pdf?id=TK7VVYFzeK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152409>)

Text\-to\-image diffusion models can synthesize high\-quality images, yet the outcome is notoriously sensitive to the random seed: different initial seeds often yield large variations in image quality and prompt–image alignment\. We revisit this “seed effect” and show that attention dynamics over prompt core tokens, the content\-bearing words, measured during the first few denoising steps, strongly predict final generation quality\. Building on this observation, we introduce Attention\-Based Seed Selection \(ABSS\), a training\-free, plug\-and\-play method that ranks seeds for a given prompt by leveraging cross\-attention to core tokens during the denoising process\. ABSS requires no finetuning and does not alter the initial noise; it scores and ranks all candidate seeds, keeps only the top\-k for full generation, and discards the rest, without relying on a fixed accept/reject threshold\. Operating purely at inference time, ABSS can serve as a lightweight pre\-selection add\-on for existing seed\-optimization pipelines, enabling additional gains\. Across three benchmarks, extensive experiments show that ABSS enables consistent improvements in text–image alignment and visual quality for Stable Diffusion variants, as corroborated by human preference and alignment metrics\.

## GlyphAnchor: Enhancing Visual Text Rendering via Position\-Anchored Glyph Priors

**Authors:** Qiang Xiang; Shuang Sun; Binglei Li; Yibo Chen; Xu Tang; Yao Hu; Junping Zhang

**ID:** 151218 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c3aMyawBN4>) | [PDF](<https://openreview.net/pdf?id=c3aMyawBN4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151218>)

Rendering accurate text remains difficult for image generation and editing models, especially when the target contains long, complex, and densely arranged text or rare characters\. Existing approaches either improve native text rendering through stronger backbones and data\-centric training without explicit glyph priors, or incorporate glyph priors through specialized designs that remain insufficiently accurate and robust under challenging scenarios\. We introduce GlyphAnchor, a novel text\-rendering enhancement method for both text\-to\-image and image\-editing diffusion transformer models\. GlyphAnchor enhances the backbone with lightweight glyph patch conditions whose positions are anchored to the target image through the model's native positional encoding\. We train this capability with staged supervised finetuning and further refine it with text\-aware post\-training to improve robustness\. We also introduce InfoTextBench, a benchmark for evaluating text\-rich visual text rendering in both generation and editing settings\. Experiments across multiple backbones and benchmarks, including long, complex, and densely arranged text and rare character scenarios, show that GlyphAnchor consistently improves text fidelity while preserving overall image quality\.

## Imagine Before You Draw: Visual Prompt Engineering for Image Generation

**Authors:** Liyu Jia; Fengda Zhang; Jiachun Pan; Kesen Zhao; Saining Zhang; Wang Lin; Weijia Wu; Yue Liao; Aojun Zhou; Hanwang Zhang

**ID:** 156043 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0qIxwwc2xH>) | [PDF](<https://openreview.net/pdf?id=0qIxwwc2xH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156043>)

Incorporating visual semantic representations as an intermediate step before image generation can reduce the modeling difficulty between text and images, thereby improving generation quality\. Recent works such as X\-Omni and BLIP3o\-Next have explored this direction, but they typically use a two\-stage external pipeline: a separate autoregressive model first generates semantic tokens, which are then fed as conditioning to an independent diffusion decoder\. Since the decoder cannot jointly access the original input and the semantic plan, this design introduces an information bottleneck that limits detail preservation in downstream tasks such as editing\. Internal architectures such as Transfusion, BAGEL, and Show\-o2 avoid this bottleneck by enabling cross\-modal interaction within a single model, but they still face the difficult text\-to\-pixel modeling gap without intermediate semantic guidance\. We propose Visual Prompt Engineering \(VPE\), which can be seamlessly integrated into such internal frameworks\. Specifically, the model first autoregressively generates visual semantic tokens \($e\.g\.$, SigLIP 2\) as "visual prompts" that capture the semantic layout, then generates the full image tokens conditioned on this plan\. We validate VPE across class\-conditional generation, text\-to\-image generation, and image editing, covering various token types and model architectures\. Results show that VPE can accelerate convergence, raise quality ceilings, and through internal integration, achieve substantially better editing preservation \(PSNR: $26\.76$ vs\. $19\.92$\) than external alternatives of the same parameter scale, while maintaining competitive editing responsiveness\. The code is available in supplementary material\.

## Read It Back: Pretrained MLLMs Are Zero\-shot Reward Models for Text\-to\-Image Generation

**Authors:** Runhui Huang; Qihui Zhang; Zhe Liu; Yu Gao; Jie Wu; Hengshuang Zhao

**ID:** 155394\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155394

[Paper](<https://openreview.net/forum?id=60UfWy2Mx4>) | [PDF](<https://openreview.net/pdf?id=60UfWy2Mx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155394>)

_Abstract unavailable from the accessible public sources._

## Enabling Preference\-driven Unlearning in Few\-step Distilled Text\-to\-Image Diffusion Models

**Authors:** Gaurav Patel; Jun Fang; Greg Ver Steeg; Qiang Qiu; Sravan Sripada

**ID:** 154856\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154856

[Paper](<https://openreview.net/forum?id=AMoAi3Al48>) | [PDF](<https://openreview.net/pdf?id=AMoAi3Al48>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154856>)

_Abstract unavailable from the accessible public sources._

## Gen\-Searcher: Reinforcing Agentic Search for Image Generation

**Authors:** Kaituo Feng; Manyuan Zhang; Shuang Chen; Yunlong lin; Kaixuan Fan; Yilei Jiang; Hongyu Li; Dian Zheng; Chenyang Wang; Xiangyu Yue

**ID:** 153355\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153355

[Paper](<https://openreview.net/forum?id=M0ZcmOLHIp>) | [PDF](<https://openreview.net/pdf?id=M0ZcmOLHIp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153355>)

_Abstract unavailable from the accessible public sources._

## Single Shot HDR Recovery via a Video Diffusion Prior

**Authors:** Chinmay Talegaonkar; Jinshi He; Nicholas Antipa

**ID:** 153806\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153806

[Paper](<https://openreview.net/forum?id=IZP0ggyeR6>) | [PDF](<https://openreview.net/pdf?id=IZP0ggyeR6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153806>)

_Abstract unavailable from the accessible public sources._

## UniDG: Universal Defect Generation via Defect\-Context Editing

**Authors:** Yuanting Fan; Jun Liu; Bin\-Bin Gao; Xiaochen Chen; Yuhuan Lin; Zhewei Dai; Jiawei Zhan; Chengjie Wang

**ID:** 154905\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154905

[Paper](<https://openreview.net/forum?id=A3soBL3Ciu>) | [PDF](<https://openreview.net/pdf?id=A3soBL3Ciu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154905>)

Generating realistic visual defects is crucial for alleviating the scarcity of abnormal samples in anomaly detection, yet existing methods often rely on category\-specific few\-shot adaptation and struggle to generalize across objects, defect types, and domains\. This limitation stems in part from the lack of paired defect editing data and the fine\-grained nature of defect appearance, where subtle variations in scale, texture, and morphology must be preserved while maintaining consistency with the target scene\. To address this challenge, we introduce UDG, a dataset of 300K normal\-abnormal\-mask\-caption quadruplets curated from diverse defect\-related scenarios, and present UniDG, a unified model for universal defect generation\. UniDG formulates defect synthesis as Defect\-Context Editing: it extracts reference defect context with adaptive cropping, organizes reference and target inputs in a structured diptych format, and fuses multimodal conditions through MM\-DiT attention\. We further develop a two\-stage training strategy: Diversity\-SFT learns diverse transferable defect priors from paired editing data, while Consistency\-RFT improves reference adherence, local realism, and defect\-category consistency\. Without per\-category fine\-tuning or using MVTec\-AD/VisA for training, UniDG outperforms prior few\-shot anomaly generation and image insertion/editing baselines in both synthesis quality and downstream single\- and multi\-class anomaly detection/localization\.

## Improving Flexible Image Tokenizers for Autoregressive Image Generation

**Authors:** Zixuan Fu; Lanqing Guo; Chong Wang; Binbin SONG; Ding Liu; Bihan Wen

**ID:** 149748\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149748

[Paper](<https://openreview.net/forum?id=neJJASNqpr>) | [PDF](<https://openreview.net/pdf?id=neJJASNqpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149748>)

Flexible image tokenizers aim to represent an image using an ordered 1D variable\-length token sequence\.  This flexible tokenization is typically achieved through nested dropout, where a portion of trailing tokens is randomly truncated during training, and the image is reconstructed using the remaining preceding sequence\. However, this tail\-truncation strategy inherently concentrates the image information in the early tokens, limiting the effectiveness of downstream AutoRegressive \(AR\) image generation as the token length increases\. To overcome these limitations, we propose \\textbf\{ReTok\}, a flexible tokenizer with \\underline\{Re\}dundant \\underline\{Tok\}en Padding and Hierarchical Semantic Regularization, designed to fully exploit all tokens for enhanced latent modeling\. Specifically, we introduce \\textbf\{Redundant Token Padding\} to activate tail tokens more frequently, thereby alleviating information over\-concentration in early tokens\.  In addition, we apply \\textbf\{Hierarchical Semantic Regularization\} to align the decoding features of earlier tokens with those from a pre\-trained vision foundation model, while progressively reducing the regularization strength toward the tail to allow finer low\-level detail reconstruction\.  Extensive experiments demonstrate the effectiveness of ReTok: on ImageNet 256$\\times$256, our method achieves superior generation performance compared with both flexible and fixed\-length tokenizers\.

## GlyphAnchor: Enhancing Visual Text Rendering via Position\-Anchored Glyph Priors

**Authors:** Qiang Xiang; Shuang Sun; Binglei Li; Yibo Chen; Xu Tang; Yao Hu; Junping Zhang

**ID:** 151218\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151218

[Paper](<https://openreview.net/forum?id=c3aMyawBN4>) | [PDF](<https://openreview.net/pdf?id=c3aMyawBN4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151218>)

Rendering accurate text remains difficult for image generation and editing models, especially when the target contains long, complex, and densely arranged text or rare characters\. Existing approaches either improve native text rendering through stronger backbones and data\-centric training without explicit glyph priors, or incorporate glyph priors through specialized designs that remain insufficiently accurate and robust under challenging scenarios\. We introduce GlyphAnchor, a novel text\-rendering enhancement method for both text\-to\-image and image\-editing diffusion transformer models\. GlyphAnchor enhances the backbone with lightweight glyph patch conditions whose positions are anchored to the target image through the model's native positional encoding\. We train this capability with staged supervised finetuning and further refine it with text\-aware post\-training to improve robustness\. We also introduce InfoTextBench, a benchmark for evaluating text\-rich visual text rendering in both generation and editing settings\. Experiments across multiple backbones and benchmarks, including long, complex, and densely arranged text and rare character scenarios, show that GlyphAnchor consistently improves text fidelity while preserving overall image quality\.

## Gender Artifacts from Art History to Text\-to\-Image Generation

**Authors:** Piera Riccio; Miriam Doh; Benedikt Höltgen; Noa Garcia; Nanne van Noord

**ID:** 139694\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139694

[Paper](<https://openreview.net/forum?id=AHgbQxbPgb>) | [PDF](<https://openreview.net/pdf?id=AHgbQxbPgb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139694>)

_Abstract unavailable from the accessible public sources._

## Noise\-Started One\-Step Image Super\-Resolution via LR\-Conditioned SplitMeanFlow and GAN Refinement

**Authors:** Wei Zhu; Kai Zhang; Yu Zheng; Lei Luo; Yong Guo; Jian Yang

**ID:** 150670\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150670

[Paper](<https://openreview.net/forum?id=gMYBb0YVMl>) | [PDF](<https://openreview.net/pdf?id=gMYBb0YVMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150670>)

_Abstract unavailable from the accessible public sources._

## TIDE: Trajectory\-Aware Watermark Propagation for Text\-to\-Image Diffusion Models

**Authors:** Yihan Meng; Suping Xu; Yanfeng Wu; Chongjun Wang; Lin Shang

**ID:** 155911\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155911

[Paper](<https://openreview.net/forum?id=1tohGAfGuc>) | [PDF](<https://openreview.net/pdf?id=1tohGAfGuc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155911>)

_Abstract unavailable from the accessible public sources._

## MorphSIG: Subject\-Driven Image Generation via Decoupled Anchoring and Feature Transport

**Authors:** Hailong Yan; Yongrui Zhang; Xiangtao Zhang; Le Zhang

**ID:** 156050 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0oGyeFWXOQ>) | [PDF](<https://openreview.net/pdf?id=0oGyeFWXOQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156050>)

_Abstract unavailable from the accessible public sources._

## Phase\-wise Velocity Distillation: Towards Effective Image Generation with A Single NFE

**Authors:** Zhen Guo; Rongyuan Wu; Qiaosi Yi; Chenxi Xie; Xinyu Wei; Lei Zhang

**ID:** 150700 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=g9V4RTYjMF>) | [PDF](<https://openreview.net/pdf?id=g9V4RTYjMF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150700>)

_Abstract unavailable from the accessible public sources._

