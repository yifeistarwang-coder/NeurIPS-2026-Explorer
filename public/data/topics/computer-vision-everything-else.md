# Computer Vision / Everything Else

计算机视觉 / 其他视觉研究

392 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Visual Latents Know More Than They Say: Unsilencing Latent Reasoning in MLLMs

**Authors:** xin zhang; Qiqi Tao; JIAWEI DU; Moyun Liu; Joey Tianyi Zhou

**ID:** 152643 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RT4EGzFy8o>) | [PDF](<https://openreview.net/pdf?id=RT4EGzFy8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152643>)

_Abstract unavailable from the accessible public sources._

## LiBrA\-Net: Lie\-Algebraic Bilateral Affine Fields for Real\-Time 4K Video Dehazing

**Authors:** Yongcong Wang; Chengchao Shen; Guangwei Gao; Wei Wang; Pengwen Dai; Dianjie Lu; Guijuan Zhang; Zhuoran Zheng

**ID:** 154860 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AM2VYYJ4GA>) | [PDF](<https://openreview.net/pdf?id=AM2VYYJ4GA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154860>)

_Abstract unavailable from the accessible public sources._

## FLINT: Coupling Proximal Initialization and Bounded Stochasticity for Flow\-Matching Inverse Problems

**Authors:** Junseo Bang; daewon choi; Dong Ju Mun; Se Young Chun

**ID:** 149594 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ovYQsp14kD>) | [PDF](<https://openreview.net/pdf?id=ovYQsp14kD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149594>)

_Abstract unavailable from the accessible public sources._

## Not All Noise Is Harmful: Towards Perception Aware and Controllable RAW Image Joint Denoising and Demosaicing

**Authors:** Qianjun Huang; Qingguo Liu; Hui Zeng; Kai Zhang; Jian Yang

**ID:** 155377 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=65RYxUOsF9>) | [PDF](<https://openreview.net/pdf?id=65RYxUOsF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155377>)

RAW image denoising and demosaicing play a critical role in the early stages of the image signal processing \(ISP\) pipeline\. Previous methods handle them sequentially, which can introduce error propagation\. Unified restoration, such as joint denoising and demosaicing \(JDD\), has become a widely adopted paradigm and achieves impressive performance\. Nonetheless, under constraints of model capacity and low\-light conditions, these methods tend to apply overly aggressive denoising, causing notable smearing effects and the erosion of fine textures\. Researchers attempt to moderate the denoising strength to better preserve details, but this often results in noticeable artifacts\. These observations suggest a key insight: Not All Noise is Harmful—retaining an appropriate amount of noise can be preferable to over\-smoothing and is often aligned with user aesthetics\. Moreover, most existing methods are mainly trained on paired clean–degraded data, yielding fixed, hard\-to\-control denoising behavior that fails to meet evolving user demands\. In this paper, we propose $\\textbf\{JDD\-PRO\}$, a $\\textbf\{P\}$erception\-awa$\\textbf\{R\}$e and contr$\\textbf\{O\}$llable framework for RAW image JDD\. Built on a controllable JDD training scheme and a HVS\-inspired perceptual adapter, our method allows users to tune the denoising strength at inference to strike their desired balance between noise removal and detail preservation\. Comprehensive experiments on real\-world datasets validate the effectiveness and robustness of our proposed method\.

## Beyond Thinking: Imagining in 360$^\\circ$ for Humanoid Visual Search

**Authors:** Jingdong Zhang; Yizhou Wang; Zhengzhong Tu; Xin Li; Wenping Wang; Xiaohang Zhan

**ID:** 149744 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nf3SdflMnP>) | [PDF](<https://openreview.net/pdf?id=nf3SdflMnP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149744>)

Humanoid Visual Search \(HVS\) requires agents to actively explore immersive 360$^\\circ$ environments\. While prior methods treat this as a monolithic task relying on cumulative, multi\-turn Chain\-of\-Thought \(CoT\) reasoning, they impose heavy cognitive burdens and require expensive trajectory\-level annotations\. In this paper, we propose Imagining in 360$^\\circ$, a novel framework that decouples the exploration process into a specialized Imaginator and an Actor\. The Imaginator functions as a probabilistic predictor of spatial priors; instead of maintaining a cumulative reasoning chain, it infers the semantic layout of both observed and unobserved regions in a single step\. By sampling multiple hypotheses within this semantic space, we provide the Actor with a distribution of effective spatial information, offering robust guidance that hedges against uncertainty during active search\. This decoupled architecture significantly lowers data engineering costs by eliminating the need for full\-trajectory CoT annotations, enabling the generation of over 1\.96 million curated training samples\. Extensive experiments demonstrate that explicitly modeling semantic spatial priors drastically improves search efficiency and success rates in complex, in\-the\-wild environments\.

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

## PRISM: Prior Rectification and Uncertainty\-Aware Structure Modeling for Diffusion\-Based Text Image Super\-Resolution

**Authors:** Zihang Xu; Xiaoyang Liu; 郑 陈; Yulun Zhang; Xiaokang Yang

**ID:** 151894 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X9LUYLbbp6>) | [PDF](<https://openreview.net/pdf?id=X9LUYLbbp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151894>)

_Abstract unavailable from the accessible public sources._

## GLUT: 3D Gaussian Lookup Table for Continuous Color Transformation

**Authors:** Danna Xue; David Serrano\-Lozano; Shaolin Su; Javier Vazquez\-Corral

**ID:** 153974 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H76r1dCvUV>) | [PDF](<https://openreview.net/pdf?id=H76r1dCvUV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153974>)

_Abstract unavailable from the accessible public sources._

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

## Structured State\-Space Regularization for Generation\-Friendly Image Tokenization

**Authors:** Jinsung Lee; Jaemin Oh; Namhun Kim; Dongwon Kim; Byung\-Jun Yoon; Suha Kwak

**ID:** 151619 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZD298GwlMx>) | [PDF](<https://openreview.net/pdf?id=ZD298GwlMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151619>)

Image tokenizers play a central role in modern generative models, where the structure of the latent space critically determines the downstream generation performance\. A key but underexplored property of effective latent representations is spectral organization: the ability to encode information across frequency components\. In this work, we introduce structured state\-space regularization, a principled approach for inducing spectral structure in latent spaces\. We derive a regularization objective by revisiting state\-space models \(SSMs\) as dynamical systems over compressed representations\. This perspective reveals that hidden states of SSMs follow basis function dynamics under predefined input transformations, resulting in a novel regularizer form that enforces the latent space to capture spectral components of images\. Experiments demonstrate that our regularizer improves the generative performance of image tokenizers while incurring only minimal loss in their reconstruction fidelity\.

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

## Pixel\-space Autoregressive Image Synthesis via Spectrum Serialization and Flow\-based Refinement

**Authors:** Guiwei Zhang; Tianyu Zhang; Yalong Bai; Ying Ba; Zichang Tan; Yang Yang

**ID:** 149181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sHRb3N6tLL>) | [PDF](<https://openreview.net/pdf?id=sHRb3N6tLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149181>)

Autoregressive \(AR\) image generators commonly rely on  vector\-quantized \(VQ\) autoencoders to compress images into discrete token sequences\. However, quantization inevitably discards visual information, and the resulting reconstruction errors may propagate through  AR decoding, limiting generation fidelity\. We revisit the representation choice for AR image generation and ask whether a simpler and more faithful representation can alleviate this bottleneck while remaining compatible with autoregressive modeling\. To this end, we estimate the intrinsic dimension of the natural image manifold under several widely used representations and find that raw  patchified pixels exhibit the simplest underlying geometry among those  evaluated\. Motivated by this insight, we propose PixeLLM, an AR generative framework that operates directly on sequences of discrete pixel blocks, eliminating the need for a separately trained VQ autoencoder\. PixeLLM decomposes generation into two stages: \(1\) an AR model generates a text\-aligned draft image  capturing  global scene structure, and \(2\) a conditional flow\-based pixel refinement Transformer enhances the draft with fine\-grained details and mitigates artifacts\. The resulting pipeline is straightforward, requiring no external semantic alignment\. Despite its simplicity, PixeLLM achieves competitive performance on challenging text\-conditioned and class\-conditioned image generation benchmarks\.

## Tool\-IQA: Augmenting Image Quality Assessment with Simple Tools

**Authors:** Guanyi Qin; Junjie Zhang; Chunming He; Yibing Fu; Jie Liang; Tianhe Wu; Lei Zhang

**ID:** 154321 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EXsWjLfKTF>) | [PDF](<https://openreview.net/pdf?id=EXsWjLfKTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154321>)

_Abstract unavailable from the accessible public sources._

## CoScan: Multi\-Scale Content\-Adaptive Space\-Filling Scans for Causal State\-Space Image Restoration

**Authors:** Wei Dong; Terry Ji; Yan Min; Shahram Shirani; Jun Chen; Han Zhou

**ID:** 151869 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHd7CqQtoF>) | [PDF](<https://openreview.net/pdf?id=XHd7CqQtoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151869>)

_Abstract unavailable from the accessible public sources._

## FrameRouter: Frame Budget Routing for Long\-Video Understanding on Video\-MME\-v2 and Beyond

**Authors:** Bingjun Luo; Jialin Guo; Siqi Li

**ID:** 155391 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=61Yi6KS7Ek>) | [PDF](<https://openreview.net/pdf?id=61Yi6KS7Ek>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155391>)

_Abstract unavailable from the accessible public sources._

## Multidimensional Observer Model and Perceptual Dimensions of Human Image Quality Assessment

**Authors:** Sheng Zhao; Weikai Lin; Yuhao Zhu

**ID:** 153752 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IyJWTZzLb3>) | [PDF](<https://openreview.net/pdf?id=IyJWTZzLb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153752>)

_Abstract unavailable from the accessible public sources._

## Vision Correlators: Correlation\-Driven Visual Understanding with Hypergraphs

**Authors:** Mengqi Lei; Guohuan Xie; Siqi Li; Shihui Ying; Shaoyi Du; Jun\-Hai Yong; Nanning Zheng; Yue Gao

**ID:** 152069 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vi8z1QsK4V>) | [PDF](<https://openreview.net/pdf?id=Vi8z1QsK4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152069>)

_Abstract unavailable from the accessible public sources._

## VisionCreator\-S1: Evolving Visual\-Generation Agents via Skill\-GRPO Optimization

**Authors:** Jinxiang Lai; Wenzhe Zhao; HUALEI Zhang; Zexin Lu; Jian Liu; Jie ZHANG; Qinglin Lu; Song Guo

**ID:** 148183 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zg1C7iDhaV>) | [PDF](<https://openreview.net/pdf?id=zg1C7iDhaV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148183>)

_Abstract unavailable from the accessible public sources._

## VisionCreator\-R1: A Reflection\-Enhanced Native Visual\-Generation Agentic Model

**Authors:** Jinxiang Lai; Wenzhe Zhao; Zexin Lu; HUALEI Zhang; Qinyu Yang; Rongwei Quan; li zhimin; Shuai Shao; Song Guo; Qinglin Lu

**ID:** 148251 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zGiLxdshrQ>) | [PDF](<https://openreview.net/pdf?id=zGiLxdshrQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148251>)

_Abstract unavailable from the accessible public sources._

## PISCO: Precise Video Instance Insertion with Sparse Control

**Authors:** Xiangbo Gao; Renjie Li; Xinghao Chen; Yuheng Wu; Suofei Feng; Jie Yang; Qing Yin; Zhengzhong Tu

**ID:** 155342 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6JxPJz9oJ3>) | [PDF](<https://openreview.net/pdf?id=6JxPJz9oJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155342>)

_Abstract unavailable from the accessible public sources._

## Foveal\-Mamba: Inside\-Out Ring Scanning with Recurrent Offset Prediction for Visual State Space Models

**Authors:** Yi\-Kuan Hsieh; Jun\-Wei Hsieh; Kuan\-Chuan Peng; Xin Li; Chi\-Chia Sun; Yu\-Chee Tseng; Ming\-Ching Chang

**ID:** 148775 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v9TJRTPJEp>) | [PDF](<https://openreview.net/pdf?id=v9TJRTPJEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148775>)

_Abstract unavailable from the accessible public sources._

## Beyond Unidirectional: Unsupervised Trajectory Learning for Omnidirectional Controllable Underwater Image Enhancement

**Authors:** Xiaofeng Cong; Xuhao Guo; Kang Zheng; Yu\-Xin Zhang; Jie Gui

**ID:** 151882 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XCLzu5Mpns>) | [PDF](<https://openreview.net/pdf?id=XCLzu5Mpns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151882>)

_Abstract unavailable from the accessible public sources._

## HIFC\-IQA: Train\-Free Cross\-Domain Image Quality Assessment via Dual\-Process Cognition

**Authors:** Yu Li; Zhengran Shen; Puchao Zhou; Yachun Mi; Yukang Ding; Boyuan yang; Xi Zhai; Shaohui Liu

**ID:** 149761 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nWRbNynKZi>) | [PDF](<https://openreview.net/pdf?id=nWRbNynKZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149761>)

_Abstract unavailable from the accessible public sources._

## From Label Priors to Task Evidence: Long\-Video Frame Selection via Bayesian GRPO

**Authors:** Shuochen Chang; Bingjie Gao; Qingyang Liu; Qianli Ma; Yibo Miao; Haonan Zhao; Zhaohe Liao; Xiaofeng Zhang; Jiangtong Li; Li Niu

**ID:** 152846 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pw7tnoVlx1>) | [PDF](<https://openreview.net/pdf?id=Pw7tnoVlx1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152846>)

_Abstract unavailable from the accessible public sources._

## HalluciText: Mitigating Text Hallucinations in Diffusion\-Based Image Restoration

**Authors:** Zhiming Hu; Angela Ye; Ran Zhang; Tristan T Aumentado\-Armstrong; Samrudhdhi B Rangrej; Faraz Ali; Dong Huo; Kosta Derpanis; Alex Levinshtein; Iqbal Mohomed

**ID:** 155031 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8yEBjcRvqB>) | [PDF](<https://openreview.net/pdf?id=8yEBjcRvqB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155031>)

Diffusion\-based image restoration models produce visually compelling results but systematically hallucinate text\-\-\-generating characters that appear sharp and legible yet are factually incorrect\. As text fidelity emerges as a key requirement for real\-world image restoration, this failure mode poses a fundamental barrier to wide deployments of diffusion\-based models: a model that replaces degraded\-but\-faithful text with sharp\-but\-wrong text misleads users and erodes trust\. Recent text\-aware models mitigate this by feeding text extracted from intermediate outputs or low\-resolution \(LR\) images into the prompt, but they provide no mechanism to detect or correct the hallucinations that still commonly arise\. In this work, we present a systematic study on how to improve text restoration during denoising, demonstrating that standard global conditioning alone is inadequate and that optical character recognition \(OCR\) confidence scores reliably predict word\-level correctness\. Grounded in these findings, we propose HalluciText, a training\-free framework consisting of two complementary interventions: \(i\) Confidence\-Weighted Classifier\-Free Guidance \(CW\-CFG\), which concentrates guidance energy on text regions weighted by OCR confidence to improve text recall; and \(ii\) VLM\-Guided Test\-Time Guidance \(V\-TTG\), which leverages a vision\-language model \(VLM\) to identify hallucinated regions and corrects them towards a faithful reference, improving text precision\. Both operate solely on the noise prediction or latent representation, making them agnostic to the diffusion backbone and text spotting model\. We demonstrate the effectiveness of HalluciText on state\-of\-the\-art \(SOTA\) text\-aware models, achieving up to 5\.75 points of improvement in end\-to\-end text recognition F1 on several datasets without degrading image quality\.

## The Many Senses of Visual Similarity: A Text\-Prompted Image Perceptual Metric

**Authors:** Sheng\-Yu Wang; Yotam Nitzan; Aaron Hertzmann; Jun\-Yan Zhu; Eli Shechtman; Alexei Efros; Richard Zhang

**ID:** 152788\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152788

[Paper](<https://openreview.net/forum?id=QKvTvdH8iS>) | [PDF](<https://openreview.net/pdf?id=QKvTvdH8iS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152788>)

Human visual similarity judgments are context\-dependent\. For example, two images may be similar in shape but distinct in color\. Existing perceptual similarity metrics, however, collapse these nuances into a single scalar value, offering no mechanism to condition on specific aspects\. To bridge this gap, we introduce a large\-scale dataset of human similarity judgments over image triplets, where each triplet is annotated across multiple, free\-form semantic aspects\. Benchmarking a broad range of frontier vision\-language models \(VLMs\) reveals a considerable performance gap compared to human\-human agreement\. Leveraging our data, we fine\-tune a VLM to produce our Text\-Prompted Image Perceptual Similarity \(TPIPS\) metric, capturing multiple senses of visual similarity depending on the specified text prompt\.  We demonstrate that TPIPS aligns more closely with human perception and generalizes reliably beyond the training distribution\. Finally, we show that TPIPS unlocks new capabilities in text\-guided retrieval, compositional search, and the fine\-grained evaluation of generative models\. Our code, data, and trained models will be released\.

## AnyMo: Scaling Any\-Modality Conditional Motion Generation with Masked Modeling

**Authors:** Yiheng Li; Zhuo Li; RuiBing Hou; Yingjie Chen; Hong Chang; Hao Liu; Shiguang Shan

**ID:** 153279\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153279

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

## Does Inference\-Time Reasoning Really Improve Video Understanding?

**Authors:** Zhuohao Yu; Yu Zhou; Zhecan Wang; Rui Sun; Kai\-Wei Chang; Nanyun Peng

**ID:** 154086 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJtLZ5sLOQ>) | [PDF](<https://openreview.net/pdf?id=GJtLZ5sLOQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154086>)

_Abstract unavailable from the accessible public sources._

## DiffCap\-RL: Differential QA Rewards for Dense Image and Video Captioning

**Authors:** Kaixun Jiang; Zhihang Liu; Jiyuan Fu; Yuzheng Wang; Pandeng Li; Junjie Zhou; Chen\-Wei Xie; Yun Zheng; Wenqiang Zhang

**ID:** 152243 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UWkuOadUR9>) | [PDF](<https://openreview.net/pdf?id=UWkuOadUR9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152243>)

_Abstract unavailable from the accessible public sources._

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

## FARE: Forensic Acceptance Region Estimation for Catching Bait\-and\-Switch Image Generators

**Authors:** Kai Yao; Marc Juarez

**ID:** 151260 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=biz1Z9lOtc>) | [PDF](<https://openreview.net/pdf?id=biz1Z9lOtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151260>)

_Abstract unavailable from the accessible public sources._

## Can Pixels Alone Reveal Image Origin? Minimax Limits and Learnable Interfaces for Passive Provenance

**Authors:** Kai Yao

**ID:** 154460 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DQ0b1sTnB8>) | [PDF](<https://openreview.net/pdf?id=DQ0b1sTnB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154460>)

_Abstract unavailable from the accessible public sources._

## Hider–Seeker Self\-Play: Geometry\-Verifiable Process Rewards for Long\-Horizon Visual Search

**Authors:** Yu Mao; Shengchao Chen

**ID:** 149113 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=smof5snaBr>) | [PDF](<https://openreview.net/pdf?id=smof5snaBr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149113>)

_Abstract unavailable from the accessible public sources._

## Visual Robustness and Neural Alignment in a Shared Foraging Task: The Mouse vs\. AI Benchmark

**Authors:** Marius Schneider; Joe Canzano; Yuchen Hou; Jing Peng; Anjali Deepu; Utsab Karan; Phu\-Hoa Pham; Chi Nguyen Tran; Dao S Minh; Phu\-Quy Nguyen\-Lam; Trung\-Kiet Huynh; Simone Azeglio; Spencer Smith; Michael Beyeler

**ID:** 139189 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fhaa8MaD9I>) | [PDF](<https://openreview.net/pdf?id=fhaa8MaD9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139189>)

_Abstract unavailable from the accessible public sources._

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

## Beyond Unit\-Circle Eigenvalues: Invariant Bases for Stable State Space Dynamics

**Authors:** Jiaqian Zhu; Yang Zhang; Junhua Ding; Xiaowei Yu

**ID:** 149242 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rsTdJke80K>) | [PDF](<https://openreview.net/pdf?id=rsTdJke80K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149242>)

Diagonal state space models process sequences efficiently but become unstable over long horizons: small spectral deviations compound into information decay or uncontrolled growth\. For conservation\-preserving or non\-dissipative dynamics, constraining eigenvalues to the unit circle is a natural starting point and yields large short\-horizon gains \($\+3\.31$ dB at step 10\)\. We show that this is not enough: spectral constraints govern only the amplitude of each mode, not what each mode represents\. The missing condition is alignment between the modal basis and the invariant structure of the underlying dynamics\. Without this alignment, unit\-circle constraints can preserve quantities unrelated to the task invariants and, on OOD scale\-shift transfer, even degrade performance below unconstrained baselines\. This establishes a broader principle: \*stability in diagonal SSMs is a problem of representation, not just parameterization; eigenvalues determine how modes evolve, but only the basis determines what is preserved\.\* We instantiate this principle for isotropic pairwise systems through the Kronecker\-Cayley Decomposition, which places dynamics in the graph Laplacian eigenbasis, yielding a diagonal SSM with exact layered conservation at $O\(N^3\+N^2m\)$ cost instead of $O\(N^3m^3\)$, dominated by $O\(N^2m\)$ when $m \\gg N$\. Empirically, under our visual N\-body protocol, a spectrally stabilized LRU baseline still accumulates $158\\pm8$% momentum drift; controlled unit\-modulus random and learned bases similarly fail \($120\\pm18$% and $148\\pm8$% drift\); even PCA\-derived bases, which empirically approximate the invariant direction, fall roughly three orders of magnitude short of the algebraic guarantee\. Only the Laplacian basis yields drift below $10^\{\-4\}$%, stable 1000\-step rollouts \(PSNR $21\.19\\pm1\.27$ dB at step 999\), and $\+2\.12$ dB OOD generalization on Charged particles\.

## HumanStereo: A Benchmark for Metric Facial Depth Estimation and Its Evaluation

**Authors:** Alexandru\-Ion Marinescu; DIANA\-LAURA BORZA; DARABANT Sergiu Adrian

**ID:** 138969 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tOPPmPEqR5>) | [PDF](<https://openreview.net/pdf?id=tOPPmPEqR5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138969>)

Stereo depth estimation of human faces is a prerequisite for various computer vision applications, yet existing stereo benchmarks target outdoor, driving, or large object reconstruction scenarios and lack the anatomical precision and evaluation framework these applications require\. We introduce HumanStereo, the first large\-scale synthetic stereo dataset dedicated to human faces, comprising 417k stereo pairs from 128 photorealistic avatars across 109 unique stereo configurations and four indoor environments, with dense ground\-truth annotations including depth maps, surface normals, segmentation masks, and facial landmarks\. We argue that standard evaluation metrics such as $\\delta\_1$ and RMSE are ill\-suited for facial depth estimation, and propose two complementary metrics: task\-grounded absolute inlier\-ratio \(IR\) and Landmark 3D Distance Error \(L3DE\) for metric anatomical accuracy\. We benchmark five representative stereo methods: geometrical matchers, RAFT\-Stereo, IGEV\+\+, MASt3R, and FoundationStereo\. A downstream evaluation on real optometric data for inter\-pupillary distance \(IPD\) measurement, a parameter required in all eyeglass prescription, shows that even the best\-performing model remains an order of magnitude above the sub\-millimeter accuracy required for clinical deployment\.

## Video Stitching from Multiple Moving Cameras

**Authors:** Shira Ifergane; Roy Amoyal; Shahar Benishay; Oren Freifeld

**ID:** 154835 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Aaxi9KSqTI>) | [PDF](<https://openreview.net/pdf?id=Aaxi9KSqTI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154835>)

_Abstract unavailable from the accessible public sources._

## Behavior Pack Optimization for Video MLLM Post\-Training

**Authors:** Zhaolu Kang; Shiyu Liu; Tailong Luo; Wei Zhang; Yingjie He; Guangyuan Dong; Siheng Wang; Liang He; Lei Wei; Jiaqi Su; Shuang Chen; Guansu Wang; Haoyu Ji; Qishi Zhan; Kaiyue Zhou

**ID:** 150981 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dnqyvgz1LI>) | [PDF](<https://openreview.net/pdf?id=dnqyvgz1LI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150981>)

_Abstract unavailable from the accessible public sources._

## TokenRepel: Generating Diverse Image Sets Without Sacrificing Quality

**Authors:** Qingtao Yu; Zhen Wang; Ning Lai; Boyang Hu; Hongdong Li; Dylan Campbell

**ID:** 148516 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xJDcbc6iWs>) | [PDF](<https://openreview.net/pdf?id=xJDcbc6iWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148516>)

_Abstract unavailable from the accessible public sources._

## Iris: Empowering Video MLLMs with High\-Frequency Pose Priors via Spatiotemporal Binding

**Authors:** Jiahang Zhang; Yushuo Guan; Yuanxing Zhang; Pengfei Wan; Jiaying Liu

**ID:** 149127 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sfWwIjHvqo>) | [PDF](<https://openreview.net/pdf?id=sfWwIjHvqo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149127>)

_Abstract unavailable from the accessible public sources._

## Latent Process Generator Matching

**Authors:** Lukas Billera; Hedwig Nora Nordlinder; Ben Murrell

**ID:** 155816 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2ghWjnDjkj>) | [PDF](<https://openreview.net/pdf?id=2ghWjnDjkj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155816>)

Many recent flow\-matching and diffusion\-style generative models rely on auxiliary stochastic dynamics during training: a richer process is simulated to define conditional targets, but the auxiliary state is either intractable to sample at generation time or simply not part of the desired output\. Existing Generator Matching theory formalises conditioning on static latent random variables, and several recent papers prove special cases of projection results for particular augmented\-state constructions\. We introduce latent process generator matching, a general framework that treats the observed generative state as a deterministic image $X\_t=\\Phi\(Y\_t\)$ of a tractable Markov process $Y\_t$\. We show that in this setting one may learn the generator of a stochastic process on the image space which has the same one\-time marginal distributions as the projected process\. This generalizes and subsumes the discrete latent process results from the literature, and extends Generator Matching from static latent variables to a rich family of time\-dependent latent conditional processes\.

## Learning Visual Feature\-Based World Models via Residual Latent Action

**Authors:** Xinyu Zhang; Zhengtong Xu; Yutian Tao; Yeping Wang; Yu She; Abdeslam Boularias

**ID:** 148146 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zvJIeHOjvu>) | [PDF](<https://openreview.net/pdf?id=zvJIeHOjvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148146>)

World models predict future transitions from observations and actions\. Existing works predominantly focus on image generation only\. Visual feature\-based world models, on the other hand, predict future visual features instead of raw video pixels, offering a promising alternative that is more efficient and less prone to hallucination\.  However, current feature\-based approaches rely on direct regression, which leads to blurry or collapsed predictions in complex interactions, while generative modeling in high\-dimensional feature spaces still remains challenging\. In this work, we discover that a new type of latent action representation, which we refer to as \*Residual Latent Action\* \(RLA\), can be easily learned from DINO residuals\. We also show that RLA is predictive, generalizable, and encodes temporal progression\. Building on RLA, we propose \*RLA World Model\* \(RLA\-WM\), which predicts RLA values via flow matching\. RLA\-WM outperforms both state\-of\-the\-art feature\-based and video\-diffusion world models on simulation and real\-world datasets, while being orders of magnitude faster than video diffusion\. Furthermore, we develop two robot learning techniques that use RLA\-WM  to improve policy learning\. The first one is a minimalist world action model with RLA that learns from actionless demonstration videos\. The second one is the first visual RL framework trained entirely inside a world model learned from offline videos only, using a video\-aligned reward and no online interactions or handcrafted rewards\.

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

## Shaping Useful Noise: Energy Distributions Predict Visual Pretraining Quality

**Authors:** Ching Lam Choi; Antonio Torralba; Phillip Isola; Stefanie Jegelka

**ID:** 153569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQRZdjU6Q1>) | [PDF](<https://openreview.net/pdf?id=KQRZdjU6Q1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153569>)

Synthetic data can scale visual pretraining, but current selection criteria only partially explain which datasets train strong representations\. We propose using the energy profile of a dataset\-\-\-the distribution of log\-probability levels it occupies under a normalised real\-image density model\-\-\-as an audit and curation principle for synthetic data\. To operationalise this view, we introduce Energy\-Level Distribution Distance \(Eld\), which compares real and synthetic energy distributions\. Real images span sparse high\-likelihood scenes and dense low\-likelihood textures, so useful synthetic data should cover this energy range rather than collapse to likely but low\-variation samples\. Across diverse synthetic datasets, Eld exposes mismatches missed by FID and predicts pretraining performance beyond FID, LPIPS variation, and feature\-space recall, including across CNN and ViT self\-supervised settings\. We then use Eld to resample and mix synthetic sources, matching the real\-image energy histogram while preserving diversity and improving downstream transfer\.

## Disentangling Where and When: Factored Spatio\-Temporal Explanations for Video Action Recognition

**Authors:** Bhavan Vasu; Giuseppe Raffa; Prasad Tadepalli

**ID:** 150252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jaIWjThmrT>) | [PDF](<https://openreview.net/pdf?id=jaIWjThmrT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150252>)

Post\-hoc explanation methods for video action recognition typically conflate spatial appearance and temporal dynamics into a single saliency or importance map\.  We propose a perturbation\-based framework that disentangles these contributions into a spatial appearance mask \($M\_a$\) and a temporal motion mask \($M\_m$\)\. The two masks are jointly optimized against a frozen action recognition model through factored perturbation architecture, with nearest frame replacement to identify important temporal dynamics\. A separation penalty discourages the appearance mask from spending budget on frames that the motion mask has already discarded, and a one\-sided ReLU area constraint allows the realized masks to fall below the optimization budget when the input does not require its full extent\. To evaluate these explanations, we introduce a separation protocol that sweeps spatial pixels and temporal frames independently, backed by proofs characterizing the inherent geometric bias of standard Insertion metrics\. Across EPIC\-Kitchens\-55, EGTEA Gaze\+, and Something\-Something V2, our method attains the lowest deletion AUC against leading baselines while producing masks roughly five times sparser\.

## Manifold Prior Guided Deep Unfolding for Hyperspectral Image Reconstruction

**Authors:** Shuqi Liu; Yingkai Zhang; Lin Gu; Tao Zhang; Ying Fu

**ID:** 154416 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DjKpFjPFoO>) | [PDF](<https://openreview.net/pdf?id=DjKpFjPFoO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154416>)

_Abstract unavailable from the accessible public sources._

## AsymHP: Load\-Balanced Sparse Attention for Video Diffusion Transformers

**Authors:** Xinwei Qiang; Yue Guan; Ruihan Zhu; Mihir Jagtap; Zaifeng Pan; Zhongkai Yu; Chang Chen; Zhengding Hu; Yufei Ding; Adnan Aziz

**ID:** 151792 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XyeAckrYOC>) | [PDF](<https://openreview.net/pdf?id=XyeAckrYOC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151792>)

_Abstract unavailable from the accessible public sources._

## Unified Forensic Preference Learning for Generalizable Synthetic Image Detection

**Authors:** Laixin Zhang; Shuaibo Li; Wei Ma; Jianyu Lai; Lei Zhu; Hongbin Zha

**ID:** 150807 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGUaeL5g1k>) | [PDF](<https://openreview.net/pdf?id=fGUaeL5g1k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150807>)

_Abstract unavailable from the accessible public sources._

## Behavioral Geometric Supervision Aligns Video Foundation Models with Human Social Perception

**Authors:** Kathy Garcia; Leyla Isik

**ID:** 149277 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rVX7LF9vry>) | [PDF](<https://openreview.net/pdf?id=rVX7LF9vry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149277>)

_Abstract unavailable from the accessible public sources._

## FrameScout: Scouting Query\-Relevant Frames for Long Video Understanding

**Authors:** Haonan Hu; Shuhao Chen; Weisen Jiang; Lizhao Gao; James Kwok; Yu Zhang

**ID:** 148460 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xesmedbJGk>) | [PDF](<https://openreview.net/pdf?id=xesmedbJGk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148460>)

_Abstract unavailable from the accessible public sources._

## Matching2Matching: Zero\-Shot Light Field Image Denoising with Matching View Construction

**Authors:** Shuo Zhang; Qian Tian; Chen Gao; LongzhaoGuo; Youfang Lin

**ID:** 148528 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xDEl8HwZKU>) | [PDF](<https://openreview.net/pdf?id=xDEl8HwZKU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148528>)

_Abstract unavailable from the accessible public sources._

## Recreating Video Arenas via Automated Preference Scoring

**Authors:** Yue Zhao; Aniket Gupta; Juze Zhang; Tiange Xiang; Ryan Rong; Xuan Su; Fei\-Fei Li; Ehsan Adeli

**ID:** 138962 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tlDSZnxUGr>) | [PDF](<https://openreview.net/pdf?id=tlDSZnxUGr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138962>)

_Abstract unavailable from the accessible public sources._

## Structure\-Semantic Co\-optimized Latent Diffusion Model for Fast Visual Anagram Synthesis

**Authors:** Xiang Gao; Yunpeng Jia

**ID:** 148726 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vWSKzHnaou>) | [PDF](<https://openreview.net/pdf?id=vWSKzHnaou>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148726>)

_Abstract unavailable from the accessible public sources._

## Beyond Scalar Distances: Semantic Attribute Gradients from Frozen MLLMs for Visual Embeddings

**Authors:** Shubhang Bhatnagar; Dheeraj Baiju; Narendra Ahuja

**ID:** 153671 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JddD3RHEz2>) | [PDF](<https://openreview.net/pdf?id=JddD3RHEz2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153671>)

_Abstract unavailable from the accessible public sources._

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

## A Steerable Deep Network for Model\-Free Diffusion MRI Registration

**Authors:** Gianfranco Cortés; Xiaoda Qu; Baba C Vemuri

**ID:** 156020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=16OdjrftpZ>) | [PDF](<https://openreview.net/pdf?id=16OdjrftpZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156020>)

Nonrigid registration is vital to medical image analysis but remains challenging for diffusion MRI \(dMRI\) due to its high\-dimensional, spatio\-angular dependence\. We present a novel, geometric deep learning framework for \{\\it model\-free\}, nonrigid registration of raw dMRI data\. The dMRI registration problem is formulated in the native spatio\-angular acquisition space, which exhibits a natural symmetry to the group of 3D roto\-translations, denoted by $\\mathrm\{SE\}\(3\)$\. A by\-product of this design choice is freedom from having to augment the data with roto\-translated versions of itself\. Our second novelty is the loss function formulation, based on the maximum mean discrepancy \(MMD\) loss used to compare two probability density functions\. We apply this loss in the Fourier space, where it becomes the well\-known weighted sum\-of\-squared differences \(SSD\) loss with the weights being the Fourier transform of a reproducing kernel Hilbert space \(RKHS\) kernel\. Experimental results on HCP and OASIS\-3 clinical\-grade dMRI data demonstrate competitive performance compared to SOTA approaches, with the added advantage of bypassing the overhead for estimating derived representations\. This work establishes a foundation for data\-driven, geometry\-aware dMRI registration directly in the acquisition space\.

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

**ID:** 149181\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149181

[Paper](<https://openreview.net/forum?id=sHRb3N6tLL>) | [PDF](<https://openreview.net/pdf?id=sHRb3N6tLL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149181>)

Autoregressive \(AR\) image generators commonly rely on  vector\-quantized \(VQ\) autoencoders to compress images into discrete token sequences\. However, quantization inevitably discards visual information, and the resulting reconstruction errors may propagate through  AR decoding, limiting generation fidelity\. We revisit the representation choice for AR image generation and ask whether a simpler and more faithful representation can alleviate this bottleneck while remaining compatible with autoregressive modeling\. To this end, we estimate the intrinsic dimension of the natural image manifold under several widely used representations and find that raw  patchified pixels exhibit the simplest underlying geometry among those  evaluated\. Motivated by this insight, we propose PixeLLM, an AR generative framework that operates directly on sequences of discrete pixel blocks, eliminating the need for a separately trained VQ autoencoder\. PixeLLM decomposes generation into two stages: \(1\) an AR model generates a text\-aligned draft image  capturing  global scene structure, and \(2\) a conditional flow\-based pixel refinement Transformer enhances the draft with fine\-grained details and mitigates artifacts\. The resulting pipeline is straightforward, requiring no external semantic alignment\. Despite its simplicity, PixeLLM achieves competitive performance on challenging text\-conditioned and class\-conditioned image generation benchmarks\.

## Tool\-IQA: Augmenting Image Quality Assessment with Simple Tools

**Authors:** Guanyi Qin; Junjie Zhang; Chunming He; Yibing Fu; Jie Liang; Tianhe Wu; Lei Zhang

**ID:** 154321\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154321

[Paper](<https://openreview.net/forum?id=EXsWjLfKTF>) | [PDF](<https://openreview.net/pdf?id=EXsWjLfKTF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154321>)

_Abstract unavailable from the accessible public sources._

## CoScan: Multi\-Scale Content\-Adaptive Space\-Filling Scans for Causal State\-Space Image Restoration

**Authors:** Wei Dong; Terry Ji; Yan Min; Shahram Shirani; Jun Chen; Han Zhou

**ID:** 151869\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151869

[Paper](<https://openreview.net/forum?id=XHd7CqQtoF>) | [PDF](<https://openreview.net/pdf?id=XHd7CqQtoF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151869>)

_Abstract unavailable from the accessible public sources._

## FrameRouter: Frame Budget Routing for Long\-Video Understanding on Video\-MME\-v2 and Beyond

**Authors:** Bingjun Luo; Jialin Guo; Siqi Li

**ID:** 155391\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155391

[Paper](<https://openreview.net/forum?id=61Yi6KS7Ek>) | [PDF](<https://openreview.net/pdf?id=61Yi6KS7Ek>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155391>)

_Abstract unavailable from the accessible public sources._

## Multidimensional Observer Model and Perceptual Dimensions of Human Image Quality Assessment

**Authors:** Sheng Zhao; Weikai Lin; Yuhao Zhu

**ID:** 153752\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153752

[Paper](<https://openreview.net/forum?id=IyJWTZzLb3>) | [PDF](<https://openreview.net/pdf?id=IyJWTZzLb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153752>)

_Abstract unavailable from the accessible public sources._

## Vision Correlators: Correlation\-Driven Visual Understanding with Hypergraphs

**Authors:** Mengqi Lei; Guohuan Xie; Siqi Li; Shihui Ying; Shaoyi Du; Jun\-Hai Yong; Nanning Zheng; Yue Gao

**ID:** 152069\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152069

[Paper](<https://openreview.net/forum?id=Vi8z1QsK4V>) | [PDF](<https://openreview.net/pdf?id=Vi8z1QsK4V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152069>)

_Abstract unavailable from the accessible public sources._

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

## Representation Fréchet Loss for Visual Generation

**Authors:** Jiawei Yang; Zhengyang Geng; Xuan Ju; Yonglong Tian; Yue Wang

**ID:** 154990 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9OK87o8Wkf>) | [PDF](<https://openreview.net/pdf?id=9OK87o8Wkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154990>)

We show that Fréchet Distance \(FD\), long considered impractical as a training objective, can in fact be effectively optimized in the representation space\. Our idea is simple: decouple the population size for FD estimation \(e\.g\., 50k\) from the batch size for gradient computation \(e\.g\., 1024\)\. We term this approach FD\-Loss\. Optimizing FD\-Loss reveals several surprising findings\. First, post\-training a base generator with FD\-Loss in different representation spaces consistently improves visual quality\. Under the Inception feature space, a one\-step generator achieves 0\.72 FID on ImageNet $256\\times256$\. Second, the same FD\-Loss repurposes multi\-step generators into strong one\-step generators without teacher distillation, adversarial training or per\-sample targets\. Third, FID can misrank visual quality: modern representations can yield better samples despite worse Inception FID\. This motivates FDr$^\{k\}$, a multi\-representation metric\. We hope this work will encourage further exploration of distributional distances in diverse representation spaces as both training objectives and evaluation metrics for generative models\. Code and checkpoints will be open\-sourced\.

## XFeat Revisited: Reproducibility and Evaluation of a Lightweight Image Matcher

**Authors:** Lazar Đoković; Aimee Lin

**ID:** 157013 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2WI889Ulin>) | [PDF](<https://openreview.net/pdf?id=2WI889Ulin>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

We present a reproducibility study of XFeat, a lightweight local feature extractor and matcher designed to identify corresponding points across images efficiently on resource\-constrained hardware\. We re\-implement the architecture based on the paper and supplementary material, re\-evaluate the authors' released checkpoint alongside our re\-implementation, and conduct additional architectural ablations to examine design choices that were not fully justified in the original work\. This distinction between re\-evaluation and reproduction is important, as the paper, supplement, and public code differ in several implementation details, including the backbone layout, fusion block, and training losses\. Empirically, our reproduced models closely match and, in some cases, outperform the re\-evaluated original checkpoint on MegaDepth\-1500 and ScanNet\-1500, supporting the main claim that XFeat provides a strong accuracy–efficiency trade\-off for standard image\-matching benchmarks\. Our ablations provide a more nuanced view of two architectural arguments from the original paper\. In particular, the parallel keypoint branch is important for semi\-dense matching, but its benefit is less pronounced than originally claimed, while the evidence for the specific placement of the single skip\-connection remains inconclusive\. Finally, we reproduce the original downstream evaluations and find close agreement for homography estimation, while Aachen visual localization remains below the reported results, even for the released checkpoint, suggesting sensitivity to underspecified evaluation details\. We then extend the analysis to zero\-shot out\-of\-distribution and cross\-modal matching across retinal, thermal\-visible, and multimodal remote\-sensing imagery, where XFeat remains effective in some settings but degrades sharply under severe modality shifts\.

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

## Discovering Unseen Degradations to Adapt Open\-World Image Restoration

**Authors:** Boseong Kim; Tae Hyun Kim; Donghyeon Cho

**ID:** 148895 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uOrhK38Kpk>) | [PDF](<https://openreview.net/pdf?id=uOrhK38Kpk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148895>)

While all\-in\-one image restoration models excel in controlled, closed\-set environments, they face critical limitations when deployed in open\-world settings where paired supervision is unavailable and degradations are unknown and often intricately mixed\. To address this challenge, we propose a continual restoration framework that integrates degradation discovery with adaptive restoration\. Building on a model pre\-trained on known degradation categories, our method discovers unseen degradations in feature space and continually expands the degradation space\. We then introduce a discovery\- and instance\-conditioned descriptor that jointly captures discovered degradation priors and image\-specific characteristics, enabling robust restoration under ambiguous and intricately mixed degradations\. To further support adaptation under unpaired supervision, we adopt a mean\-teacher\-based semi\-supervised framework equipped with a reliable bank for pseudo\-target refinement\. Specifically, we propose a discovery\-adaptive score that assesses pseudo\-target reliability using feature\-space distances to degradation categories, enabling pseudo\-target selection to remain adaptive to newly discovered degradations rather than relying solely on conventional perceptual quality\-based scoring methods\. Experiments on both controlled open\-world protocols and real\-world adverse weather datasets demonstrate that our approach consistently outperforms existing methods across multiple image quality metrics while improving robustness to degradation composition shifts\.

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

## Diffusion\-DRF: Free, Rich, and Differentiable Reward for Video Diffusion Fine\-Tuning

**Authors:** Yifan Wang; Yanyu Li; Guocheng Qian; Sergey Tulyakov; Yun Fu; Anil Kag

**ID:** 150318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=izqmMvuObQ>) | [PDF](<https://openreview.net/pdf?id=izqmMvuObQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150318>)

Video diffusion alignment has been heavily reliant on scalar rewards\. These rewards are typically derived from learned reward models in human preference datasets, requiring additional training and extensive collection\. Moreover, scalar rewards provide coarse, global supervision, offering limited prompt\-generation mismatch credit assignment and making models prone to reward exploitation and unstable optimization\. We propose \\textbf\{Diffusion\-DRF\}, a free, rich, and differentiable reward framework for video diffusion fine\-tuning\. Diffusion\-DRF employs a frozen, off\-the\-shelf Vision\-Language Model \(VLM\) as the critic, eliminating the need for reward model training\. Instead of relying on a single scalar reward, it decomposes each user prompt into multi\-dimensional questions with freeform dense VQA explanation queries, yielding information\-rich feedback\. By direct differentiable optimization over this rich feedback, Diffusion\-DRF achieves stable reward\-based tuning without preference datasets collection\.  Diffusion\-DRF achieves significant gains both quantitatively and qualitatively, outperforming state\-of\-the\-art Flow\-GRPO by 4\.74 points in overall performance on unseen VBench\-2\.0\.

## SierpinskiCam: Camera\-Controlled Video Retaking with Sierpinski Triangle Pattern Cues

**Authors:** Suttisak Wizadwongsa; Hyelin Nam; Supasorn Suwajanakorn; Jeong Joon Park

**ID:** 148899 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uLAOZJkWvq>) | [PDF](<https://openreview.net/pdf?id=uLAOZJkWvq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148899>)

Generating novel renderings of a scene along user\-defined camera trajectories from a single monocular video, dubbed video retaking, is a compelling but difficult problem in content creation and visual effects\. Existing geometry\-guided approaches reconstruct a 4D representation from the source video and render it along the target trajectory to condition video diffusion models\. However, this guidance degrades as the target camera departs from the source trajectory, leaving newly revealed regions sparse or entirely missing\. We propose SierpinskiCam, which addresses this limitation by augmenting geometry\-based guidance with Sierpinski dome texture cues that contains rich trackable features even under large viewpoint changes\.  We further introduce a reference video conditioning mechanism that appends source\-video tokens to the target\-token sequence and separates the two streams with negative RoPE indices, enabling appearance grounding without architectural modification or per\-video adaptation\. Extensive experiments show that SierpinskiCam achieves significant gains in camera controllability, geometric consistency, and video quality across diverse and challenging retaking scenarios\.

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

## FiLM\-CAM: Keyed Feature Modulation for Conditional\-Access Watermarking

**Authors:** Yash Kulthe; Vishal Asnani; Shruti Agarwal; Andrew Gilbert; John Collomosse

**ID:** 155950 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1b70GKuMjn>) | [PDF](<https://openreview.net/pdf?id=1b70GKuMjn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155950>)

We propose FiLM\-CAM; a conditional\-access image watermarking approach that enforces authorized encoding, decoding, and removal through keyed feature modulation\. A secret key conditions a Feature\-wise Linear Modulation \(FiLM\) mechanism that transforms the internal representation of the watermark signal before embedding, thereby coupling the payload to the key at the feature, rather than pixel level\. The same key must be presented to condition the decoder to correctly recover the payload embedded in an image\. To enforce conditional access, we train the system to maximize the performance gap between authorized and unauthorized use, ensuring reliable extraction under the correct key while inducing failure under incorrect keys\. In addition, we design our encoder to estimate the watermark residual invariant to the presence of pre\-existing watermarks\. This design enables conditional watermark removal via simple re\-encoding and subtraction of the residual using iterative refinement, contingent on knowledge of the secret key\. We evaluate FiLM\-CAM across multiple watermarking encoder–decoder backbones, demonstrating that keyed feature modulation serves as an effective, architecture\-agnostic conditional access module \(CAM\) for image watermarking\.

## VicEdit: Learning to Edit Videos from Visual In\-Context Examples

**Authors:** Yuji Wang; Teng Hu; Yuheng Chen; Ran Yi; Han Feng; Weijian Cao; Chengjie Wang; Lizhuang Ma; Jiangning Zhang

**ID:** 155979 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1P8vkGpb52>) | [PDF](<https://openreview.net/pdf?id=1P8vkGpb52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155979>)

Despite progress in instruction\-based video editing, unimodal textual instructions inherently struggle to convey fine\-grained textures and complex dynamics\. To bridge this perceptual gap, we propose Visual In\-context Editing, a new paradigm elevating video editing from textual instructions to multi\-modal visual guidance encompassing single image, image pair, and video pair\. To facilitate this paradigm, we curate \*\*VicEdit\-400K\*\*, the first large\-scale dataset for visual in\-context video editing\. We develop an automated pipeline to generate 400K high\-quality samples across ten task types, ensuring superior visual fidelity and semantic consistency through multi\-dimensional filtering\. Leveraging this foundation, we introduce \*\*VicEdit\*\*, a unified framework to bridge visual and textual contexts\. To adaptively extract editing semantics from heterogeneous references, we design \*\*Modality\-Adaptive Semantic Distillation\*\*, which produces modality\-specific semantic tokens from visual references\. These tokens are then synergistically integrated with textual instructions through \*\*Dual\-Context Injection\*\*, enabling the generation process to benefit from both visual and textual signals\.  Extensive evaluations on VicEdit\-Bench demonstrate that VicEdit achieves state\-of\-the\-art performance across both basic instruction editing and visual in\-context editing tasks, establishing visual in\-context learning as a powerful and controllable paradigm for video editing\.

## On Computing Diverse Solutions in the Earth Movers Distance

**Authors:** Aritra Banik; Mayank Goswami; Abhishek Sahu

**ID:** 154421 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Di32FbHcJU>) | [PDF](<https://openreview.net/pdf?id=Di32FbHcJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154421>)

Classically used for image retrieval tasks in computer vision, the Earth Movers Distance \(EMD\), also called the Wasserstein distance, has found numerous applications in natural language processing \(NLP\) and machine learning \(ML\)\. In NLP it is used as a measure of distance between sets of embeddings, and in ML it has been used to understand training dynamics, distributionally robust optimization, and many other tasks under active research\.  On the other hand, computing diverse solutions to optimization problems has also gained a lot of attention recently\. In this DiverseX paradigm, one wants to develop algorithms that return a set of $r$ solutions that are maximally diverse; a common measure of diversity is the average or the minimum distance between the $r\\choose\{2\}$ pairs of solutions\. This paradigm is useful in generating more choices for the user, in fairness, and in robustness and security applications\.  In this work, we address the complexity of finding a diverse set of solutions in the EMD metric\. Given an $n$ point metric space $\(X,d\)$ and integers $k \\geq 1$ and $r \\geq 2$, we consider the problem of computing $r$ many subsets of $X$, each of cardinality $k$, such that the minimum EMD between these sets is maximized\. Motivated by applications from NLP, we also consider the problem of computing the farthest $k$\-subset \(from a given $k$\-subset\) in the EMD metric\.   On the lower bound side, we first show that assuming the Maximum\-Span Hypothesis, it is W\[1\]\-hard \(with parameters $k$ and $r$\) to obtain $k/\(\\log k\)^\{O\(1\)\}$\-approximation for non\-metric cost functions, and W\[1\]\-hard to obtain a $2\-o\(1\)$ approximation for metric spaces\. We also show that the problem restricted to the Euclidean setting with $\\ell\_2$ norm is W\[1\]\-hard\.  Our first main algorithmic result is an $f\(k, d, \\varepsilon\)n^\{\(O\(1\)\}$ time $\(1\-\\varepsilon\)$ approximation algorithm for the $d$\-dimensional  Euclidean setting, which is tight in view of the above hardness results\. Using different techniques, we also present a similar result for the farthest point problem in arbitrary metric spaces\. Our second main algorithmic result is geared towards the search for polynomial time algorithms, where we present an $O\(d\)$ approximation for the Euclidean setting in $\\text\{poly\}\(n,k,d\)$ time when $r=2$\. Finally, we present $FPT\(k\)$ time, 2\-approximate algorithms for arbitrary metric spaces when $r=2$\. Since the class of problems we study requires to \*find\* diverse solutions in the EMD metric, our results use a combination of various geometric techniques that deviate from the techniques used to compute the EMD metric between a \*given pair\* of solutions, and may be of independent interest\.

## Prior\-Anchored Local Statistical Representation Rectification for Low\-Light Image Enhancement

**Authors:** chang liu; Wenjian Wang; Yuhua Qian; Keqi Wang

**ID:** 150834 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=exQVJdz22G>) | [PDF](<https://openreview.net/pdf?id=exQVJdz22G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150834>)

Existing low\-light image enhancement methods are increasingly built on deep representation learning\.  However, most of them still encode features as deterministic points in the embedding space, making it difficult to capture the statistical uncertainty\. Under complex low\-light scenes, latent neighborhood relations tend to reflect degradation patterns rather than semantic content or local structures, which leads to statistical shifts and reduced discriminability of representations\.  Therefore, we propose Prior\-Anchored Local Statistical Representation Rectification \(PaLSR\), which models low\-light enhancement as a representation learning process driven by local statistical rectification\. PaLSR first learns a normal\-light statistical prior with K Gaussian anchors, which provides a shared coordinate system for local representation\. Instead of enhancing degraded features in the Euclidean embedding space, PaLSR represents each feature as mean\-variance offsets relative to these anchors, describing its content displacement and uncertainty\. With these offsets rectified, local representations are reorganized under complex low\-light degradations\.  Extensive experiments on multiple low\-light benchmarks and different network architectures show that PaLSR achieves consistent improvements in restoration quality\. These results validate the effectiveness of prior\-anchored local statistical representation rectification under complex degradation conditions\.

## DSAD: Dynamic Soft Anisotropic Diagrams for Reduced\-Order Video Representation

**Authors:** Zhiyang \(Frank\) Dou; Laki Iinbor; Wojciech Matusik

**ID:** 152936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHAxpimjPy>) | [PDF](<https://openreview.net/pdf?id=PHAxpimjPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152936>)

Efficient video representations should do more than predict pixels: for a long video to be trainable, decodable, and budgeted, appearance and motion must be assigned to explicit units\. Group\-of\-Pictures \(GoP\) primitive representations provide such units by fitting short blocks with canonical local elements, but their deformation is often still predicted by a neural head\. Conversely, implicit neural representations achieve compact global fits without exposing local units that can be moved, ranked, or pruned\. We observe that a short GoP contains many primitives but only a few independent motion patterns, suggesting that the same local ownership system used for appearance should also define the motion basis\. We introduce Dynamic Soft Anisotropic Diagrams \(DSAD\), an explicit representation built from three layers over a shared soft\-distance geometry\. First, a Soft Anisotropic Diagram \(SAD\), defined as a top\-$K$\-masked softmax over anisotropic\-Apollonius sites, provides a canonical coordinate family in which dense sites encode local RGB ownership\. Second, a coarser anchor set reuses the SAD geometry so that anchor weights form a partition\-of\-unity motion basis without an additional neural module\. Third, a reduced\-order model \(ROM\) factorizes deformation into this spatial motion basis and knot\-based temporal coefficients\. This construction unifies appearance and motion within a single diagram while decoupling spatial ownership from temporal dynamics\. On Bunny, UVG, and DAVIS, DSAD attains the highest PSNR among primitive representations and competitive performance among all compared methods, while using a leaner per\-GoP deformation module and fewer fine\-stage training iterations than state\-of\-the\-art baselines\. Ablations show that the gain is a matched\-budget trade\-off: a compact anchor\-ROM motion head reallocates parameters to anchored appearance\. RAFT spectra further suggest that the largest gains occur when GoP motion is close to low\-rank\. Code and models will be released\.

## i\-DEQ: A stable inertial Deep Equilibrium model for image restoration

**Authors:** Antonin Clerc; Marien Renaud; Baudouin Denis de Senneville; Nicolas Papadakis

**ID:** 150886 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=efDZxWqk5d>) | [PDF](<https://openreview.net/pdf?id=efDZxWqk5d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150886>)

Deep Equilibrium Models \(DEQs\) are an established framework for image restoration that learn a problem\-adapted regularization by solving a fixed\-point \(i\.e\. equilibrium\) problem\. While flexible and expressive, DEQs are often hindered by high computational cost and training instability\. We propose an inertial DEQ \(i\-DEQ\) that learn an explicit nonconvex regularization within the DEQ formulation\. By using momentum within the fixed\-point iterations, i\-DEQ has convergence guarantees and accelerated rates\. Moreover, we observe that i\-DEQ is significantly more stable during the training and robust to rough initialization than DEQs\. Numerical experiments on various linear and nonlinear inverse problems demonstrate that i\-DEQ achieves reconstruction quality comparable to state\-of\-the\-art methods, while reducing DEQ's inference time by a factor of two\.

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

## PRISM: Prior Rectification and Uncertainty\-Aware Structure Modeling for Diffusion\-Based Text Image Super\-Resolution

**Authors:** Zihang Xu; Xiaoyang Liu; 郑 陈; Yulun Zhang; Xiaokang Yang

**ID:** 151894\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151894

[Paper](<https://openreview.net/forum?id=X9LUYLbbp6>) | [PDF](<https://openreview.net/pdf?id=X9LUYLbbp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151894>)

_Abstract unavailable from the accessible public sources._

## GLUT: 3D Gaussian Lookup Table for Continuous Color Transformation

**Authors:** Danna Xue; David Serrano\-Lozano; Shaolin Su; Javier Vazquez\-Corral

**ID:** 153974\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153974

[Paper](<https://openreview.net/forum?id=H76r1dCvUV>) | [PDF](<https://openreview.net/pdf?id=H76r1dCvUV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153974>)

_Abstract unavailable from the accessible public sources._

## Referring and Reasoning Camouflaged Object Segmentation in Audio\-Visual Scenes

**Authors:** Tianxin Han; Qing Dong; Xingwei Wang; Jie Jia

**ID:** 155657\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155657

[Paper](<https://openreview.net/forum?id=3zhU55LkCQ>) | [PDF](<https://openreview.net/pdf?id=3zhU55LkCQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155657>)

Camouflaged Object Segmentation \(COS\) aims to identify objects visually hidden in their surrounding environments\. Existing COS benchmarks mainly focus on image\-level or video\-level visual perception, while real\-world camouflaged scenes are often accompanied by audio signals and user intentions, where sound semantics and textual expressions provide critical information for localizing hidden targets\. To extend the boundary of COS, we introduce a new task, termed Referring and Reasoning Audio\-Visual Camouflaged Object Segmentation \(R2\-AVCOS\), which aims to segment camouflaged targets in audio\-visual scenes according to textual expressions with referring or reasoning intentions\. This task emphasizes understanding audio content and incorporates complex reasoning and world knowledge into expressions\. To support this task, we construct R2\-AVCOSBench, the first audio\-visual benchmark with pixel\-level annotations for camouflaged objects specified by referring expressions or inferred through reasoning\. It contains 2,654 audio\-visual camouflaged videos, 21,232 annotated frames, and 32,329 expressions, including 17,543 referring and 14,786 reasoning expressions\. Furthermore, we propose Camouflaged Instructed Segmentation Assistant \(CISA\), a baseline model built upon a Multimodal Large Language Model \(MLLM\)\. CISA understands complex textual and audio\-visual cues and performs referring\- and reasoning\-based camouflaged object segmentation\. Extensive experiments show that CISA achieves strong referring and reasoning segmentation ability in audio\-visual camouflaged scenes and obtains competitive results on related tasks\.

## FacePhys: State of the Heart Learning

**Authors:** Jack Tang; Kegang Wang; Yuntao Wang; Xin Liu; Yuxuan Fan; Jiatong Ji; Yuanchun Shi; Daniel McDuff

**ID:** 150724\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150724

[Paper](<https://openreview.net/forum?id=ftGKpah4gM>) | [PDF](<https://openreview.net/pdf?id=ftGKpah4gM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150724>)

Vital sign measurement using cameras presents opportunities for comfortable, ubiquitous health monitoring\. Remote photoplethysmography \(rPPG\), a foundational technology, enables cardiac measurement through minute changes in light reflected from the skin\. However, practical deployment is limited by the computational constraints of performing analysis on front\-end devices and the accuracy degradation of transmitting data through compressive channels that reduce signal quality\. We propose a memory efficient rPPG algorithm \- FacePhys \- built on temporal\-spatial state space duality, which resolves the trilemma of model scalability, cross\-dataset generalization, and real\-time operation\. Leveraging a transferable heart state, FacePhys captures subtle periodic variations across video frames while maintaining a minimal computational overhead, enabling training on extended video sequences and supporting low\-latency inference\. FacePhys establishes a new state\-of\-the\-art, with a substantial 49% reduction in error\. Our solution enables real\-time inference with a memory footprint of 3\.6 MB and per\-frame latency of 9\.46 ms \-\- surpassing existing methods by 83% to 99%\. The training code, a real\-time inference demo for mobile browsers, and the demonstration video can be found in the supplementary materials\.

## Edit the Bits, Diff the Codes: Bitwise Residual Editing for Visual Autoregressive Models

**Authors:** Shengqiang Zhang; Ruotong Liao; Volker Tresp; Barbara Plank; Hinrich Schuetze

**ID:** 151219\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151219

[Paper](<https://openreview.net/forum?id=c371hRPzMl>) | [PDF](<https://openreview.net/pdf?id=c371hRPzMl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151219>)

Text\-guided image editing with visual autoregressive \(VAR\) generators requires controlling both what the model samples and where the sampled change is written back into the image\. Existing VAR editors mainly operate on token streams, features, or flat next\-token logits, leaving two native structures of bitwise\-residual VAR models underused: the per\-bit Bernoulli prediction head and the additive multi\-scale residual code field\. We propose BitResEdit, a training\-free editor for bitwise\-residual VAR generators such as \\textsc\{Infinity\}\. BitEdit performs source\-negative guidance by tilting the post\-CFG per\-bit log\-odds along a source\-\-target contrast computed on a shared edited prefix, then projects each update into a closed\-form Bernoulli\-KL trust region around the clean CFG sampler\. ResEdit converts the resulting sampled bits into per\-scale continuous\-code residuals, gates them with a localization mask, and re\-injects them through the generator's native sum\-of\-scales\. The two components couple decision\-time bit guidance with combination\-time code composition, preserving masked\-out latent features exactly while applying localized, scale\-aware edits inside the target region\. On PIE\-Bench with Infinity\-2B, BitResEdit achieves the strongest text alignment among same\-backbone VAR editors and competitive background preservation, setting a new state of the art among training\-free VAR editing methods\. Ablations show that BitEdit and ResEdit play complementary roles in target alignment and background preservation\. Detailed ablations show that both code\-space residual editing and bitwise phrase\-contrast guidance are necessary for robust autoregressive image editing\.

## Sparkle: Realizing Lively Instruction\-Guided Video Background Replacement via Decoupled Guidance

**Authors:** Ziyun Zeng; Yiqi Lin; Guoqiang Liang; Mike Zheng Shou

**ID:** 139087\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139087

[Paper](<https://openreview.net/forum?id=lxENzLpNAa>) | [PDF](<https://openreview.net/pdf?id=lxENzLpNAa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139087>)

In recent years, open\-source efforts like Senorita\-2M have propelled video editing toward natural language instruction\. However, current publicly available datasets predominantly focus on local editing or style transfer, which largely preserve the original scene structure and are easier to scale\. In contrast, \*Background Replacement\*, a task central to creative applications such as film production and advertising, requires synthesizing entirely new, temporally consistent scenes while maintaining accurate foreground\-background interactions, making large\-scale data generation significantly more challenging\. Consequently, this complex task remains largely underexplored due to a scarcity of high\-quality training data\. This gap is evident in poorly performing state\-of\-the\-art models, \*e\.g\.,\* Kiwi\-Edit, because the primary open\-source dataset that contains this task, \*i\.e\.,\* OpenVE\-3M, frequently produces static, unnatural backgrounds\. In this paper, we trace this quality degradation to \*a lack of precise background guidance\* during data synthesis\. Accordingly, we design a scalable pipeline that generates foreground and background guidance in a decoupled manner with strict quality filtering\. Building on this pipeline, we introduce \*Sparkle\*, a dataset of \~140K video pairs spanning five common background\-change themes, alongside \*Sparkle\-Bench\*, the largest evaluation benchmark tailored for background replacement to date\. Experiments demonstrate that our dataset and the model trained on it achieve substantially better performance than all existing baselines on both OpenVE\-Bench and Sparkle\-Bench\. Our proposed dataset, benchmark, and model are fully open\-sourced at https://showlab\.github\.io/Sparkle/\.

## Binding Visual Features Point by Point

**Authors:** Udith Haputhanthri; Declan Campbell; Rim Assouel; Jonathan D Cohen; Taylor Webb

**ID:** 148298\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148298

[Paper](<https://openreview.net/forum?id=yu8ajcYUw2>) | [PDF](<https://openreview.net/pdf?id=yu8ajcYUw2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148298>)

Despite success on standard benchmarks, vision language models display persistent failures on tasks involving processing of multi\-object scenes, including many tasks that are relatively easy for humans\. Recent work has found that these failures may stem from a basic inability to accurately bind object features in\-context, a challenge that is referred to as the ‘binding problem' in cognitive science and neuroscience\. The human visual system is thought to solve this binding problem via serial processing, attending to individual objects one at a time so as to avoid interference from other objects\. Recent work has proposed \`pointing' \-\- the use of explicit spatial coordinates to refer to objects \-\- as an analogous solution for vision language models, and found that it improves performance on challenging multi\-object tasks\. However, it is unclear \\textit\{why\} \(i\.e\., on a mechanistic or representational level\) this approach improves performance, and how directly this relates to serial processing in human vision\. Here, we investigate this question\. We find that learning to point\-via\-text induces an internal visual search routine, and we characterize the mechanisms that support this procedure\. We also find that pointing behavior can be generalized to new tasks via fine\-tuning, and that doing so eliminates binding errors and enables compositional generalization\. These results provide a proof\-of\-principle that serial processing can solve the binding problem for vision language models just as it does for biological vision\.

## Structured State\-Space Regularization for Generation\-Friendly Image Tokenization

**Authors:** Jinsung Lee; Jaemin Oh; Namhun Kim; Dongwon Kim; Byung\-Jun Yoon; Suha Kwak

**ID:** 151619\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151619

[Paper](<https://openreview.net/forum?id=ZD298GwlMx>) | [PDF](<https://openreview.net/pdf?id=ZD298GwlMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151619>)

Image tokenizers play a central role in modern generative models, where the structure of the latent space critically determines the downstream generation performance\. A key but underexplored property of effective latent representations is spectral organization: the ability to encode information across frequency components\. In this work, we introduce structured state\-space regularization, a principled approach for inducing spectral structure in latent spaces\. We derive a regularization objective by revisiting state\-space models \(SSMs\) as dynamical systems over compressed representations\. This perspective reveals that hidden states of SSMs follow basis function dynamics under predefined input transformations, resulting in a novel regularizer form that enforces the latent space to capture spectral components of images\. Experiments demonstrate that our regularizer improves the generative performance of image tokenizers while incurring only minimal loss in their reconstruction fidelity\.

## Beyond Chamfer Distance: Granular Order\-aware Evaluation Metric For Online Mapping

**Authors:** Chouaib Bencheikh Lehocine; Adam Lilja; Junsheng Fu; Lars Hammarstrand

**ID:** 139462 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OFy3tWBIVi>) | [PDF](<https://openreview.net/pdf?id=OFy3tWBIVi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139462>)

Online map estimation is a crucial component of autonomous driving systems that reduces the reliance on costly high\-definition maps\. State\-of\-the\-art \(SOTA\) methods commonly predict map elements as ordered sequences of points that form polylines and polygons\. The evaluation of these methods relies predominantly on mean average precision \(mAP\) based on thresholded Chamfer distance \(CD\)\. This framework lacks sensitivity to point ordering and provides limited granularity in assessing geometric quality, making it difficult to distinguish which methods truly excel over others\. In this work, we address these limitations on two fronts\. For the single\-instance similarity measure, we introduce sequence optimal sub\-pattern assignment \(SOSPA\), an order\-aware metric that enables fine\-grained evaluation of individual geometries while satisfying all metric axioms\. For the multi\-instance evaluation framework, we propose polyline localisation and detection \(PLD\), a soft metric that jointly captures detection quality and geometric accuracy, replacing the hard thresholding of mAP with a principled soft assignment\. Through evaluations on nuScenes, we demonstrate that PLD effectively ranks SOTA online mapping methods \(MapTRv2, StreamMapNet, MapTracker\) while providing a decomposed error analysis\. This analysis identifies detection capability as the dominant bottleneck in current methods, revealing a performance trend that mAP fails to capture\. Code for evaluation using our metrics will be released\.

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

## MotorSense: A Video\-EMG Dataset of Motoric Representations for Action Understanding

**Authors:** Eadom T Dessalene; Michael Maynord; Amir Hossein Shahidzadeh; Botao He; Yasamin Tabatabaee; Ruoshi Liu; Ruohan Gao; Paul Liang; Yiannis Aloimonos

**ID:** 154831 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AcKmwyvIYm>) | [PDF](<https://openreview.net/pdf?id=AcKmwyvIYm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154831>)

Computer vision models learn hand action only from its visual consequences, without access to the underlying embodied motor signals\. We address this absence with MotorSense \- the first large\-scale paired egocentric video and surface electromyography \(EMG\) dataset\. MotorSense pairs bimanual EMG bands with Meta Aria glasses and yields synchronized video, bimanual EMG and IMU, and audio across $25$ hours of unscripted manipulation\. Beyond scale, EMG offers an alternative to manual annotation, and captures finger movement, hand configuration, and forces exerted between hand and environment \-\-\- this is in contrast to manual annotation which is costly, subjective, and unreliable under occlusion\. EMG provides a dense hand signal free of both occlusion and labeler bias\. To bridge the representational gap between low\-level EMG and high\-level semantic action representations, we learn a mid\-level representation over the EMG data that we call motor codes\. We utilize these motor codes in two settings: 1\) motor\-code pre\-training, in which image and video backbones are pre\-trained to predict motor codes from pixels, and subsequently evaluated over downstream tasks of 3D hand\-object reconstruction and action recognition; 2\) motor\-code conditioning, in which the codes are used as control inputs for a video diffusion model, yielding videos of fine\-grained hand manipulation\. On action recognition \(EPIC\-Kitchens, Ego\-Exo4D, and Meccano\), under a frozen\-evaluation protocol we observe a large $35\.8$\\% mean relative improvement in top\-1 accuracy over conventional pre\-trained backbones\. On ARCTIC 3D hand\-object reconstruction we observe a sizeable increase in object\-pose success rate from $72\.90$\\% to $77\.22$\\% compared to the pre\-training of the base ARCTIC model\. Code and data are made anonymously available at https://anonymous\.4open\.science/r/MotorSense\-7173/ \.

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

## Reinforced Evidence\-Aware Long Video Understanding

**Authors:** Yuan Xie; Tianshui Chen; Deyu Zhou; Lionel Ni

**ID:** 151586 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZUmUvF2Vx9>) | [PDF](<https://openreview.net/pdf?id=ZUmUvF2Vx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151586>)

Despite strong benchmark performance, multimodal large language models \(MLLMs\) remain prone to hallucinations, as they are optimized for linguistic plausibility rather than faithful answering based on observation\. This issue is particularly severe in long videos, where critical cues are temporally sparse and often missed by uniform frame sampling\.  Yet existing methods still either operate on fixed pre\-sampled inputs, implicitly assuming that all necessary evidence has already been captured, or augment reasoning with retrieval without requiring answers to be grounded in visual evidence\. We propose Reinforced Evidence\-Aware Learning , a framework that reformulates long\-video question answering as an iterative process of evidence gathering and verification, enabling faithful answering with explicit evidence support, thereby reducing hallucinations\. At each reasoning step, the model assesses whether the current observation is sufficient to answer the question, and either searches for missing visual evidence from the video or produces a final answer with explicitly cited evidence\. To internalize this reasoning policy, we design an evidence\-aware reward for reinforcement learning post\-training that jointly requires answer correctness and evidence faithfulness\. The latter is evaluated by a pretrained cross\-modal consistency verifier that matches the generated evidence descriptions against the visual content of the source frames, eliminating the need for manual annotations\. Built on Qwen2\.5\-VL\-7B, REAL achieves state\-of\-the\-art results on four long\-video benchmarks \(Video\-MME, MLVU, LongVideoBench, and EgoSchema\) and substantially suppresses hallucinations on the dedicated video\-hallucination benchmarks VideoHallucer and ELV\-Halluc, with only 96 input frames surpassing the 768\-frame base model in both accuracy and hallucination resistance\.

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

## Skipping Domain Shifts: Domain Memory Retention Enhanced Hyperspectral Single\-Source Domain Generalization

**Authors:** Taiqin Chen; Hao Sha; Xiaochen Feng; Chunyu Chen; XiangYu Chen; Ke Chen; yongbing zhang

**ID:** 148267 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z7Qi9Npr3f>) | [PDF](<https://openreview.net/pdf?id=z7Qi9Npr3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148267>)

Hyperspectral single\-source domain generalization aims to train a robust model capable of overcoming domain shifts using only one available source domain for cross\-scene hyperspectral image \(HSI\) analysis\. Existing methods typically adopt data augmentation to broaden decision boundaries or utilize style transfer techniques for test\-time alignment\. However, these studies either fail to completely bridge the domain gap or inadvertently disrupt the discriminative spectral information, leading to suboptimal generalization and degraded classification performance on the target domain\. To overcome these limitations, we propose a novel method, termed the domain memory retention framework, which optimizes domain memory during training to explicitly encode the semantic structure of the source domain\. During inference, the target features are projected to the source distribution by leveraging this memory, thereby skipping domain shifts and improving generalization performance across unseen scenes\. Specifically, the memory is formulated as a codebook, consisting of multiple semantic codewords\. We further develop a semantic richness constraint and a perturbation robustness constraint to enhance representation diversity while empowering domain invariance for the memory\. Extensive experiments conducted on three remote sensing datasets demonstrate that the proposed method outperforms state\-of\-the\-art methods\.

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

## Polar Transformers: $SO\(2\)^K$\-Equivariant Angular Attention for Cryo\-EM Image\-Set Processing

**Authors:** Joakim Andén; Justus Sagemüller

**ID:** 156031 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=10lTNbAX7p>) | [PDF](<https://openreview.net/pdf?id=10lTNbAX7p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156031>)

_Abstract unavailable from the accessible public sources._

## Not Another Text Benchmark: Putting the “Visual" Back in Visual Question Answering for Large Video Models

**Authors:** Rwiddhi Chakraborty; Yinong  O Wang; Cheng Zhang; Fan Bai; Zhuoran Yu; Michael Kampffmeyer; Yong Jae Lee; Fernando D De la Torre; Robert Jenssen

**ID:** 139439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pm7KDlF851>) | [PDF](<https://openreview.net/pdf?id=Pm7KDlF851>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139439>)

Large video models have exhibited impressive performance on a wide range of visual question answering tasks, owing to the rise of powerful, pretrained text and vision encoders\. The usefulness of such models have also been demonstrated on a wide range of benchmarks, with an important caveat \- the dominant approach in these benchmarks evaluates multiple choice reasoning via text options\. This is a natural way to test text\-based reasoning in these models, and has led to significant insights regarding model behavior in the community\. In this work, we ask a different question \- what happens when the evaluation modality is visual, rather than text? We introduce three new vision\-centric evaluation benchmarks in temporal frame retrieval, video future prediction, and causal memory distortion, all designed around evaluating visual understanding capabilities in large video models\. Our approach complements the existing approaches to evaluate video understanding in frontier models\. We show that current frontier models exhibit significant weakness when attempting to reason through visual queries, rather than text\. We conclude with an extended analysis section that provides pointers for future improvements in visual understanding for large video models\.

## The Prestige: Benchmarking Cognitive Visual Reasoning using Magic Tricks

**Authors:** Shuo Wen; Beixi Du; Edwin Meriaux; Junming Shi; Chloe Si; David Meger; Doina Precup; Gregory Dudek

**ID:** 139469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NukyOvsfZy>) | [PDF](<https://openreview.net/pdf?id=NukyOvsfZy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139469>)

With the rapid development of Vision\-Language Models \(VLMs\), it is increasingly critical to evaluate their ability in accurate and robust reasoning based solely on visual information\. However, existing video understanding benchmarks often overlook the deep cognitive processes inherent in visual reasoning and frequently rely on multiple\-choice formats, implicitly encouraging reasoning shortcuts\. To address these limitations, we introduce \\emph\{The Prestige\}, a novel video understanding benchmark designed to isolate VLM reasoning under deliberate cognitive misdirection through professional magic performances\. The dataset consists of a curated collection of high\-quality magic videos paired with a diverse distribution of strictly open\-ended questions targeting causal state tracking, paradoxical reasoning, and resistance to adversarial questions\. These questions need the models to perform long\-horizon, multi\-step commonsense reasoning with cognition\. Through extensive evaluations of leading open\-weight and proprietary VLMs, using a combination of machine and human grading, we find a substantial gap between model and human performance\. \\emph\{The Prestige\} establishes a rigorous new frontier for evaluating temporal, causal, and cognitive\-flow reasoning in multimodal foundation models\.

## Depth2Pose: A Pose\-Based Benchmark for Monocular Depth Estimation without Ground\-Truth Depth

**Authors:** Viktor Kocur; Sithu Aung; Gabrielle Flood; Yaqing Ding; Lukas Bujnak; Torsten Sattler; Zuzana Kukelova

**ID:** 139479 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NVZSWCjNVK>) | [PDF](<https://openreview.net/pdf?id=NVZSWCjNVK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139479>)

Monocular depth estimation has improved significantly in recent years, driven by increasingly powerful models and large\-scale training data\. Predicted depth is increasingly used as an input signal for downstream tasks such as Structure\-from\-Motion \(SfM\), visual localization, and SLAM\. However, monocular depth estimators \(MDEs\) are still primarily evaluated in terms of depth accuracy\. Standard metrics aggregate errors globally and may not reflect the usefulness of depth for downstream geometric tasks\. We therefore propose Depth2Pose, a framework for evaluating MDEs in the context of downstream tasks\. By combining depth predictions with feature correspondences in depth\-aware geometric solvers, we use relative camera pose estimation accuracy as a task\-driven proxy for depth quality\. Traditional benchmarks require dense ground truth in the form of per\-pixel depth, which is expensive to obtain\. In contrast, our formulation requires only camera poses, which can be estimated efficiently, e\.g\., using Structure\-from\-Motion pipelines\. As a result, our framework can be applied to scenes where ground\-truth depth is difficult to obtain, for example due to large scene scale or heavy occlusions \(e\.g\., vegetated environments\)\. Leveraging this, we introduce the D2P dataset, which contains challenging scenes outside the distribution of commonly used training data\. We show that methods performing well under standard depth error metrics on existing benchmarks also perform well under our pose\-based metric when evaluated on the same datasets, but do not necessarily generalize to our more challenging dataset\. Finally, we provide a simple and extensible evaluation framework\. The dataset and code are available at kocurvik\.github\.io/depth2pose\.

## OptiWorld: Optimal Control for Video World Generation under Physical Constraints

**Authors:** Yu Yuan; Jianhao Yuan; Xijun Wang; Daiqing Li; Liu He; Lu Ling; Stanley Chan

**ID:** 154299 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ElToIAx2OM>) | [PDF](<https://openreview.net/pdf?id=ElToIAx2OM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154299>)

_Abstract unavailable from the accessible public sources._

## SyncWorld: Visual Calibration Enables World Models as Zero\-Shot Simulators

**Authors:** Yuncong Yang; Zhengtao Han; Furkan Ozyurt; Zeyuan Yang; Han Yang; Junyi Cao; Haoyu Zhen; Yilun Du; Chuang Gan

**ID:** 149981 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lj7OHtUYX1>) | [PDF](<https://openreview.net/pdf?id=lj7OHtUYX1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149981>)

World models are increasingly used as policy\-in\-the\-loop imagination environments, where reliable rollouts require fine\-grained controllability with respect to low\-level robot actions\. A key obstacle to scaling such models in robotics is that actions are not a universal language in pixel space: changes in visual environment, camera view, robot placement, or embodiment alter how the same numerical action manifests visually, leading to conflicting supervision under mixed training and brittle generalization at deployment\. We introduce SyncWorld, an action\-conditioned world model that serves as a zero\-shot simulator across unseen environments without any additional training\. SyncWorld leverages a visual calibration episode\-\-\-paired frames and actions that showcase all the controllable degrees of freedom\-\-\-to specify the setup\-specific Action\-\-Visual Mapping in context\. Training with visual calibration contexts teaches the model to interpret actions through visual evidence and to leverage interaction history when explicit calibration is unavailable\. Experiments show that SyncWorld can accurately simulate action outcomes in previously unseen settings, and that its capability of simulating rollouts enables test\-time policy improvement without training\.

## LiFi: LiDAR Generation from Multi\-View Images via Geometric and Semantic Collaborative Guidance

**Authors:** Sizhuo Zhou; Xiaosong Jia; Fanrui Zhang; Qifeng Li; Junjie Li; Zirui Wang; Yukang Feng; Yu Hong; Shaofeng Zhang; Wenlong Liao; Tao He; Juyong Zhang; Junchi Yan

**ID:** 154275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F2uVwqvVoZ>) | [PDF](<https://openreview.net/pdf?id=F2uVwqvVoZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154275>)

Generating LiDAR point clouds from multi\-view camera images is a valuable task with applications in controllable data synthesis, cross\-modal simulation and various perception tasks\. However, most existing methods are not specifically designed for this task, and the quality of their generated LiDAR remains limited\. Moreover, these methods typically focus only on semantic cues in images or generate LiDAR from a monocular camera image\. In this work, we introduce LiFi, a dedicated framework for generating visually and geometrically aligned LiDAR scenes from multi\-view camera images\. LiFi guides the latent diffusion process through two complementary branches: geometry and semantics\. The geometry branch constructs scene features from images through a reverse sampling algorithm and an uncertainty\-aware geometric encoder combined with DepthAnything3, whereas the semantic branch provides high\-level semantic representations via a cross\-view interaction module\. We further introduce a dual\-branch balanced classifier\-free guidance \(CFG\) strategy, which enhances the model’s conditional generation capability while preserving the independent learning and collaborative controllability of the two branches\. Extensive experiments demonstrate that LiFi outperforms state\-of\-the\-art methods in generating high\-fidelity LiDAR scenes\. We will make this project publicly available\.

## Going Down Memory Lane: Scaling Tokens for Video Stream Understanding with Dynamic KV\-Cache Memory

**Authors:** Vatsal Agarwal; Saksham Suri; Matthew Gwilliam; Pulkit Kumar; Abhinav Shrivastava

**ID:** 148735 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vRUJgq7mDv>) | [PDF](<https://openreview.net/pdf?id=vRUJgq7mDv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148735>)

Online video understanding requires models to robustly encode, store, and retrieve information from a continuous stream to support accurate question answering\. Existing approaches rely on key\-\-value caching to accumulate frame\-level representations over time, but allocate only a limited token budget per frame, causing loss of fine\-grained visual detail\. We find that naively scaling this budget degrades retrieval quality and question\-answering performance, as denser token streams introduce redundancy that disrupts query\-\-frame similarity\. To address this, we first introduce an adaptive selection strategy that reduces token redundancy while preserving local spatiotemporal information\. Second, we propose a training\-free retrieval ensemble that leverages external models to better identify relevant frames\. Our method, \\textbf\{MemStream\}, achieves \+8\.0\\% on CG\-Bench, \+8\.5\\% on LVBench, and \+2\.4\\% on VideoMME \(Long\) over ReKV with Qwen2\.5\-VL\-7B\. Furthermore, we show that MemStream consistently improves performance across several Video\-LLMs for long\-video understanding\.

## PaperLens: How Predictable Is Paper Acceptance?

**Authors:** Sachin Konan; Jonathan Liu; Zhuang Liu

**ID:** 154867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AJ2gyvFOF9>) | [PDF](<https://openreview.net/pdf?id=AJ2gyvFOF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154867>)

Peer review is sometimes seen as noisy and difficult to predict\. How much of the final accept/reject decision is recoverable from the paper itself? We investigate this question with PaperLens, text and vision models trained to predict binary acceptance from anonymized paper artifacts\. For a clean evaluation, we construct balanced, shortcut\-controlled OpenReview and source\-derived arXiv datasets that remove deanonymization artifacts and majority\-class shortcuts\. Supervised binary decision training is surprisingly strong\. PaperLens outperforms frontier prompting and review\-trained baselines on decision accuracy and ranking, while its acceptance probability remains well calibrated after validation\-set scaling and correlates better to ratings than baselines\. Vision consistently improves over markdown text, showing that layout, figures, and visual presentation carry reviewer\-relevant signal\. Scaling from 3B to 14B parameters yields only modest gains, with clean supervision and faithful paper representations mattering more than model size\. Together, our results show that decision prediction provides a powerful signal for paper assessment and can even improve the alignment of AI reviewing agents\.

## Bernini: Latent Semantic Planning for Video Diffusion

**Authors:** Chenchen Liu; Junyi Chen; Lei Li; Lu Chi; Mingzhen Sun; Zhuoying Li; Yi Fu; Ruoyu Guo; Yiheng Wu; Ge Bai; Zehuan Yuan

**ID:** 154106 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GDdIbzbPVF>) | [PDF](<https://openreview.net/pdf?id=GDdIbzbPVF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154106>)

Multimodal large language models \(MLLMs\) and diffusion models have each reached remarkable maturity: MLLMs excel at reasoning over heterogeneous multimodal inputs with strong semantic grounding, while diffusion models synthesize images and videos with photorealistic fidelity\. We argue that these two families can be unified through a simple division of labor: MLLMs perform semantic planning, while diffusion models render pixels from high\-level semantic guidance and low\-level visual features\. Building on this idea, we propose \\textbf\{Bernini\}, a unified framework for video generation and editing\. An MLLM\-based \\textbf\{planner\} predicts the target semantic representation directly in the ViT embedding space, and a DiT\-based \\textbf\{renderer\} synthesizes pixels conditioned on this plan, augmented by text features and, for editing, source VAE features for detail preservation\. Because semantics serve as the interface, the planner and renderer can be trained separately and only lightly co\-trained, preserving the pretrained strengths of both components while keeping training efficient\. To better handle multiple visual inputs, we introduce Segment\-Aware 3D Rotary Positional Embedding \(SA\-3D RoPE\), and further incorporate chain\-of\-thought reasoning in the planner to better transfer understanding into generation\. Bernini achieves state\-of\-the\-art performance across a wide range of video generation and editing benchmarks, with the MLLM's pretrained understanding translating into strong generalization on challenging editing tasks\.

## Measuring Robustness and Efficiency in a Connectome\-Constrained Fly Visual System Model on a Collision\-Detection Task

**Authors:** Alexandre Garcia\-Duran; Alejandro Rodriguez\-Garcia; Manuel Molano\-Mazon; Alexandre HYAFIL; Srikanth Ramaswamy; Janne K Lappalainen

**ID:** 149010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tUtERl6Jq6>) | [PDF](<https://openreview.net/pdf?id=tUtERl6Jq6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149010>)

Biological visual systems compute reliably under tight metabolic and wiring constraints despite noisy inputs and stochastic circuit components\. Artificial vision systems tend to invert both properties: They consume vastly more energy and can be sensitive to adversarial perturbations\. Whether artificial networks with structural properties of real brain wiring are more robust at lower computational cost is unclear\. We address this with FlyNet \(Lappalainen et al\. 2024\), a task\-optimized, continuous\-time neural network model of the fly visual system constrained by its synaptic connectome\. We benchmark it against CNN, RAFT \(Teed and Deng, 2020\), and a sparse continuous\-time recurrent neural network without connectome constraints \(CTRNN\) on a looming\-based collision\-detection task within a differentiable 3D rendering pipeline\. We find that FlyNet is more robust than CNN controls to flicker, unstructured noise, and motion jitter\. Compared with RAFT controls, FlyNet is more robust to flicker and motion jitter but less robust to all gradient\-based attacks\. Yet, FlyNet uses up to five orders of magnitude fewer FLOPs than RAFT, achieving higher robustness on common video corruptions at far lower cost\. FlyNet is less robust than CTRNN across all tested perturbations, suggesting that FlyNet's connectome constraints contribute to cost, not robustness\. To probe FlyNet's failure modes, we use counterfactual restoration: textures equally far from training as adversarial textures that recover correct classification also recover position and velocity representations, ruling out unfamiliar textures as the cause of failure\. Classical reverse\-phi illusions degrade the same downstream position and velocity readouts, suggesting that both perturbations may exploit similar computational vulnerabilities\. Together, these results show that FlyNet is robust for its computational cost on an ecologically important task, and indicate that different architectures specialized on the same task have specific robustness profiles across perturbation types\. Our differentiable pipeline enables computational tests of this hypothesis and generates targeted adversarial stimuli for in vivo experiments\.

## ECLIPSE: A Spacecraft Rendezvous Trajectories Dataset with Controlled In\-Orbit Lighting Conditions

**Authors:** Nidhal Eddine Chenni; Arunkumar Rathinam; Abid Ali; Djamila Aouada

**ID:** 139639 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dwc7cwaADG>) | [PDF](<https://openreview.net/pdf?id=Dwc7cwaADG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139639>)

_Abstract unavailable from the accessible public sources._

## VTBench: Disentangled and Human\-Aligned Evaluation for Image\-Based Virtual Try\-on

**Authors:** Donghao Luo; Yujie Liang; Caoshuo Li; Xiaobin Hu; Zuxuan Wu; Yanwei Fu

**ID:** 139643 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Don9L8oTcT>) | [PDF](<https://openreview.net/pdf?id=Don9L8oTcT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139643>)

_Abstract unavailable from the accessible public sources._

## DriveStreamBench: Evaluating User\-Conditioned Watch\-and\-Notify in Streaming Driving Video

**Authors:** Yi Wang; Xin Zhao; Tian Meng; Rui Dai; Chi Zhang; Cui Tang; Bingzheng Liu; Fucheng Wang; Haopeng Zhang; Ruidong Ding; Yang Li; Kaikui Liu; Xiangxiang Chu

**ID:** 139662 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBbit0ejvP>) | [PDF](<https://openreview.net/pdf?id=CBbit0ejvP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139662>)

_Abstract unavailable from the accessible public sources._

## AgenticVBench: Can AI Agents Complete Real\-World Video Production Tasks?

**Authors:** Zongheng Cao; Yi Zheng; Xinyu Hu

**ID:** 139672 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BZpjhtRxCt>) | [PDF](<https://openreview.net/pdf?id=BZpjhtRxCt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139672>)

_Abstract unavailable from the accessible public sources._

## Bridging Image Restoration and Recognition via Causal Mediated Unrolling

**Authors:** Haowei Li; Qing Zhao; Yanze Li; ZhiChen Chen; Pengxu Wei; Dongyu Zhang; Liang Lin

**ID:** 153651 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JkqJjv4paC>) | [PDF](<https://openreview.net/pdf?id=JkqJjv4paC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153651>)

_Abstract unavailable from the accessible public sources._

## Improving Diffusion Posterior Samplers with Lagged Temporal Corrections for Image Restoration

**Authors:** Davide Evangelista; Elena Morotti; Francesco Pivi; Maurizio Gabbrielli

**ID:** 151348 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bCS5vqUUqK>) | [PDF](<https://openreview.net/pdf?id=bCS5vqUUqK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151348>)

_Abstract unavailable from the accessible public sources._

## ECLIPSE: A Spacecraft Rendezvous Trajectories Dataset with Controlled In\-Orbit Lighting Conditions

**Authors:** Nidhal Eddine Chenni; Arunkumar Rathinam; Abid Ali; Djamila Aouada

**ID:** 139639\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139639

[Paper](<https://openreview.net/forum?id=Dwc7cwaADG>) | [PDF](<https://openreview.net/pdf?id=Dwc7cwaADG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139639>)

_Abstract unavailable from the accessible public sources._

## VTBench: Disentangled and Human\-Aligned Evaluation for Image\-Based Virtual Try\-on

**Authors:** Donghao Luo; Yujie Liang; Caoshuo Li; Xiaobin Hu; Zuxuan Wu; Yanwei Fu

**ID:** 139643\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139643

[Paper](<https://openreview.net/forum?id=Don9L8oTcT>) | [PDF](<https://openreview.net/pdf?id=Don9L8oTcT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139643>)

_Abstract unavailable from the accessible public sources._

## DriveStreamBench: Evaluating User\-Conditioned Watch\-and\-Notify in Streaming Driving Video

**Authors:** Yi Wang; Xin Zhao; Tian Meng; Rui Dai; Chi Zhang; Cui Tang; Bingzheng Liu; Fucheng Wang; Haopeng Zhang; Ruidong Ding; Yang Li; Kaikui Liu; Xiangxiang Chu

**ID:** 139662\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139662

[Paper](<https://openreview.net/forum?id=CBbit0ejvP>) | [PDF](<https://openreview.net/pdf?id=CBbit0ejvP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139662>)

_Abstract unavailable from the accessible public sources._

## AgenticVBench: Can AI Agents Complete Real\-World Video Production Tasks?

**Authors:** Zongheng Cao; Yi Zheng; Xinyu Hu

**ID:** 139672\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139672

[Paper](<https://openreview.net/forum?id=BZpjhtRxCt>) | [PDF](<https://openreview.net/pdf?id=BZpjhtRxCt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139672>)

_Abstract unavailable from the accessible public sources._

## Bridging Image Restoration and Recognition via Causal Mediated Unrolling

**Authors:** Haowei Li; Qing Zhao; Yanze Li; ZhiChen Chen; Pengxu Wei; Dongyu Zhang; Liang Lin

**ID:** 153651\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153651

[Paper](<https://openreview.net/forum?id=JkqJjv4paC>) | [PDF](<https://openreview.net/pdf?id=JkqJjv4paC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153651>)

_Abstract unavailable from the accessible public sources._

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

## Revisiting B2T: Discovering and Mitigating Visual Biases through Keyword Explanations

**Authors:** Faissal El Kayouhi; Aïda Asma; Joey Laarhoven; Fiona Nagelhout

**ID:** 157014 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5GS1q65pv6>) | [PDF](<https://openreview.net/pdf?id=5GS1q65pv6>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

This work aims to reproduce and extend the findings of "Discovering and Mitigating Visual Biases through Keyword Explanation" by Kim et al\.\(2024\)\. The paper proposes the B2T framework, which detects and mitigates visual biases by extracting keywords from generated captions\. By identifying biases in datasets, B2T contributes to the prevention of discriminatory behavior in vision\-language models\. We aim to investigate the five key claims from the original paper, namely that B2T \(i\) is able to identify whether a word represents a bias, \(ii\) can extract these keywords from captions of mispredicted images, \(iii\) outperforms other bias discovery models, \(iv\) can improve CLIP zero\-shot prompting with the discovered keywords, and \(v\) identifies labeling errors in a dataset\. To reproduce their results, we use the publicly available codebase and our re\-implementations\. Our findings confirm the first three claims and partially validate the fourth\. We reject the fifth claim, due to the failure to identify pertinent labeling errors\. Finally, we enhance the original work by optimizing the efficiency of the implementation, and assessing the generalizability of B2T on a new dataset\.

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

## RIFLE: Removal of Image Flicker\-Banding via Latent Diffusion Enhancement

**Authors:** Libo Zhu; Zihan Zhou; Xiaoyang Liu; Zhiyi Zhou; Weihang Zhang; Keyu Shi; Yifan Fu; Yulun Zhang

**ID:** 154640 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C6YQkpxLpr>) | [PDF](<https://openreview.net/pdf?id=C6YQkpxLpr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154640>)

Capturing screens is common, but photos of emissive displays are often influenced by \\emph\{flicker\-banding\} \(FB\), some alternating bright\-\-dark stripes due to temporal aliasing between a camera's rolling\-shutter readout and display's brightness modulation\. Unlike moir\\'e degradation, FB remains underexplored despite its frequent and severe impact on readability and perceived quality\. We formulate FB removal as a dedicated restoration task and introduce Removal of Image Flicker\-B\}anding via Latent Diffusion Enhancement, RIFLE, a diffusion\-based framework designed to remove FB with fine details\. We propose Banding\-Suppressed High\-Frequency Prior \(BSHP\), which combines gradient\-based high\-frequency localization with a smooth structural support map to build a compact restoration prior, and injects it into the restoration backbone via multi\-stage FiLM modulation\. Moreover, Masked Loss \(ML\) is proposed to concentrate supervision on banded regions without sacrificing global fidelity\. To overcome data scarcity, we provide a simulation pipeline synthesizing FB in the luminance domain with stochastic jitter in banding angle, spacing, and width\. Feathered boundaries and sensor noise are also applied for a more realistic simulation\. For evaluation, we collect a paired real\-world FB dataset with pixel\-aligned banding\-free references captured via long exposure\. Across quantitative metrics and visual comparisons on our real\-world dataset, RIFLE consistently outperforms recent image reconstruction baselines\. To the best of our knowledge, it is the first work to research the simulation and removal of FB\. Our dataset and code will be released soon\.

## CA\-Judge: Teach Large Models to Judge Anomalies via Comparison for Video Anomaly Detection

**Authors:** He Huang; Zixuan Hu; Dongxiao Li; Zhaoyi Li; LINGYU DUAN

**ID:** 153516\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153516

[Paper](<https://openreview.net/forum?id=Km1kogguK0>) | [PDF](<https://openreview.net/pdf?id=Km1kogguK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153516>)

Video anomaly detection \(VAD\) is critical for identifying safety risks in surveillance and autonomous systems\. Recent large\-model\-based VAD methods generate textual rationales and directly output anomaly scores\. However, mapping rich semantic descriptions and analysis directly to absolute scalar scores can be poorly grounded and inconsistent, leading to scores that are not well aligned with anomaly severity\. With the observation that for humans, it is usually easier to compare things than to rate things directly, we explore whether it also holds for large models in VAD by proposing \\textbf\{CA\-Judge\} \(\\textbf\{C\}omparative \\textbf\{A\}nomaly \\textbf\{Judge\}\), a training\-free framework that replaces direct scoring with comparative order inference\. CA\-Judge treats model\-perceived anomaly severity as a latent coordinate, constructs this coordinate from self\-comparisons among generated normal/anomalous reference events, and models how anomaly likelihood varies along this coordinate using the generated normal/anomalous reference identities\. At test time, CA\-Judge avoids exhaustive comparison by maintaining a posterior belief over query severity and selecting a few query\-\-reference comparisons by their expected information about the anomaly status\. The resulting comparison trace is aggregated under a Bradley\-\-Terry likelihood and read out through the learned severity\-\-anomaly association to produce the anomaly probability\. Without fine\-tuning or training data, CA\-Judge substantially improves over direct\-scoring baselines and surpasses prior training\-free state\-of\-the\-art methods on UCF\-Crime and XD\-Violence\.

## CA\-Judge: Teach Large Models to Judge Anomalies via Comparison for Video Anomaly Detection

**Authors:** He Huang; Zixuan Hu; Dongxiao Li; Zhaoyi Li; LINGYU DUAN

**ID:** 153516\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153516

[Paper](<https://openreview.net/forum?id=Km1kogguK0>) | [PDF](<https://openreview.net/pdf?id=Km1kogguK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153516>)

Video anomaly detection \(VAD\) is critical for identifying safety risks in surveillance and autonomous systems\. Recent large\-model\-based VAD methods generate textual rationales and directly output anomaly scores\. However, mapping rich semantic descriptions and analysis directly to absolute scalar scores can be poorly grounded and inconsistent, leading to scores that are not well aligned with anomaly severity\. With the observation that for humans, it is usually easier to compare things than to rate things directly, we explore whether it also holds for large models in VAD by proposing \\textbf\{CA\-Judge\} \(\\textbf\{C\}omparative \\textbf\{A\}nomaly \\textbf\{Judge\}\), a training\-free framework that replaces direct scoring with comparative order inference\. CA\-Judge treats model\-perceived anomaly severity as a latent coordinate, constructs this coordinate from self\-comparisons among generated normal/anomalous reference events, and models how anomaly likelihood varies along this coordinate using the generated normal/anomalous reference identities\. At test time, CA\-Judge avoids exhaustive comparison by maintaining a posterior belief over query severity and selecting a few query\-\-reference comparisons by their expected information about the anomaly status\. The resulting comparison trace is aggregated under a Bradley\-\-Terry likelihood and read out through the learned severity\-\-anomaly association to produce the anomaly probability\. Without fine\-tuning or training data, CA\-Judge substantially improves over direct\-scoring baselines and surpasses prior training\-free state\-of\-the\-art methods on UCF\-Crime and XD\-Violence\.

## SEEK\-VAU: Towards Evidence\-Faithful Video Anomaly Understanding via Agentic Search

**Authors:** MINGHE WANG; Weijun Zeng; Dapeng Luo; Xinyue Wang; Nong Sang

**ID:** 152176\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152176

[Paper](<https://openreview.net/forum?id=UzdlnV0B2v>) | [PDF](<https://openreview.net/pdf?id=UzdlnV0B2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152176>)

Most video anomaly understanding \(VAU\) systems still infer anomaly judgments from evidence collected in a feed\-forward way under predefined rules, typically sampled frames, or events clustered from such frames\. This protocol fails when the collected evidence is incomplete under imperfect predefined rules, because once reasoning begins the model can no longer search for the missing evidence\. We address this limitation with SEEK\-VAU, which reframes VAU as an agentic search\-and\-verify interaction protocol under a bounded search budget: instead of passively reasoning over pre\-collected evidence, the policy actively gathers evidence across the three stages of an anomaly event chain \(precursor, trigger, and aftermath\) and verifies its sufficiency before finalization, turning event\-chain completeness into an explicit design rather than an outcome of predefined rules\. Although search\-and\-verify spans multiple interaction turns, the bounded search budget caps both the per\-turn input tokens and the cumulative visual context, keeping inference efficient\. To make this behavior learnable, we introduce evidence\-faithful counterfactual verification \(EFCV\), which rewards selected evidence that remains supportive, compact, and necessary under counterfactual verification\. We further introduce SEEK\-Bench, featuring video\-level episodes with temporal interval annotations, semantic QA and event\-chain stage labels\. Together, SEEK\-VAU and SEEK\-Bench establish a strong foundation for evidence\-faithful and actively verifiable VAU\. The code and data will be released\.

## Q\-ARVD: Quantizing Autoregressive Video Diffusion Models

**Authors:** Siao Tang; Xinyin Ma; Gongfan Fang; Xingyi Yang; Xinchao Wang

**ID:** 152660\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152660

[Paper](<https://openreview.net/forum?id=RMJiMyWid7>) | [PDF](<https://openreview.net/pdf?id=RMJiMyWid7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152660>)

Autoregressive video diffusion models \(ARVDs\) have emerged as a promising architecture for streaming video generation, paving the way for real\-time interactive video generation and world modeling\. Despite their potential, the substantial inference cost of ARVDs remains a major obstacle to practical deployment, making model quantization a natural direction for improving efficiency\. However, quantization for ARVDs remains largely unexplored\. Our empirical analysis shows that directly applying existing quantization schemes developed for standard diffusion transformers to ARVDs leads to suboptimal performance, revealing quantization behaviors that differ from those observed in bidirectional diffusion models\. In this paper, we identify two critical challenges in quantizing ARVDs: \(C1\) Highly unbalanced frame\-wise quantization sensitivity\. Error accumulation during autoregressive generation can induce severely skewed quantization sensitivity across frames, following an exponential\-like decay pattern\. \(C2\) Prominent and heterogeneous outlier patterns in weights\. Weight distributions exhibit pronounced outlier channels, whose patterns vary substantially across layer types and block depths\. To address these issues, we propose Q\-ARVD, a novel framework for accurate ARVD quantization\. \(S1\) To tackle the highly unbalanced frame\-wise sensitivity, Q\-ARVD incorporates a final\-quality aware frame\-weighting mechanism into the quantization objective\. \(S2\) To prevent heterogeneous outliers from degrading performance, Q\-ARVD introduces an outlier\-aware adaptive dual\-scale quantization, which automatically detects the presence and quantity of outlier channels for an arbitrary layer, and isolates them to protect normal channels\. Extensive experiments on state\-of\-the\-art open\-source ARVDs \(i\.e\., self\-forcing and causal\-forcing\) demonstrate the superiority of Q\-ARVD\. Practical deployment of INT8 model shows 1\.30x speedup and 1\.97x model size reduction\.

## SIGMA: Semantic\-Difference Instruction\-Grounding Mask Annotator for Text\-Driven Image Manipulation Localization

**Authors:** Peiyu Zhuang; Jianquan Yang; Haodong Li; Zhuoying Cai; Ruitao Xie; Jishen Zeng; Baoying Chen; Jiwu Huang; XIAOCHUN CAO

**ID:** 151764\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151764

[Paper](<https://openreview.net/forum?id=YE3wLDLd1p>) | [PDF](<https://openreview.net/pdf?id=YE3wLDLd1p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151764>)

Text\-driven image editing has advanced rapidly, but reliably localizing these manipulations requires image manipulation localization \(IML\) models trained on large pixel\-annotated datasets, and there is still no low\-cost way to obtain such training data at scale\. We observe that these data already exist in disguise: public editing datasets contain millions of structurally identical $\\textit\{\(original, edited\)\}$ pairs to IML training samples, lacking only pixel\-level masks\. Recovering these masks automatically is non\-trivial: pixel differencing is overwhelmed by diffusion\-induced perturbations across all pixels, and instruction\-only grounding localizes only what the prompt describes, missing unintended editor side\-effects\. We propose $\\textbf\{SIGMA\}$ \($\\textbf\{S\}$emantic\-difference $\\textbf\{I\}$nstruction\-$\\textbf\{G\}$rounding $\\textbf\{M\}$ask $\\textbf\{A\}$nnotator\), which performs semantic\-feature differencing in a vision foundation backbone and injects an instruction\-derived spatial prior into this visual stream via bidirectional cross\-modal refinement, amplifying the difference signal at intended\-edit regions when the editor faithfully realizes user intent\. SIGMA is trained in two complementary stages: Stage I supervises on inpainting masks; Stage II closes the diffusion\-domain shift via VAE\-roundtrip noise calibration, EMA self\-training, and an edit\-noise disentanglement loss\. SIGMA outperforms existing automatic mask generators on five benchmarks \($\\textbf\{\+12\.20\\%\}$ F1, $\\textbf\{\+11\.16\\%\}$ IoU\)\. When applied to public editing corpora, it produces a $\\sim$1\.1M IML training set that improves six diverse detectors by $\\textbf\{\+18\.34\\%\}$ F1 across five datasets, turning previously unused editing data into a model\-agnostic supervisory resource for IML\. For reproducibility, our anonymized code is available at https://anonymous\.4open\.science/r/SIGMA\-14FE\.

## SOAR: Regression\-based LiDAR Relocalization for UAVs

**Authors:** Hengyu Mu; Jianshi Wu; Yuxin Guo; XianLian Lin; Qingyong Hu; Sheng Ao; Chenglu Wen; Cheng Wang

**ID:** 151153\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151153

[Paper](<https://openreview.net/forum?id=cdxdVJjpkZ>) | [PDF](<https://openreview.net/pdf?id=cdxdVJjpkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151153>)

Regression\-based LiDAR relocalization has recently emerged as a promising solution for high\-precision positioning in GNSS\-denied environments\. However, these methods are primarily tailored to autonomous driving, exhibiting significantly degraded accuracy in unmanned aerial vehicle \(UAV\) scenarios due to arbitrary pose variations and irregular flight paths\. In this paper, we propose SOAR, a regression\-based LiDAR relocalization framework for UAVs\. Specifically, we introduce a locality\-preserving sliding window attention module with locally invariant positional encoding to capture discriminative geometric structures robust to viewpoint changes\. A coordinate\-independent feature initialization module is further designed to eliminate sensitivity to global transformations\. Furthermore, most existing UAV datasets are limited to evaluate LiDAR relocalization in real\-world, due to the lack of synchronized LiDAR scans, accurate 6\-DoF poses, or multiple traversals\. Thus, we construct a large\-scale UAV LiDAR localization dataset with 4 scenes and 13 irregular paths exhibiting rotation and altitude variations, providing a more realistic benchmark for UAVs\. Extensive experiments demonstrate that our method achieves state\-of\-the\-art performance, improving the localization success rate by 40\\% and reducing mean error over 10m on UAVLoc\. Our code and dataset will be released soon, and the dataset demo is available via the anonymous link\.

## Representation Fréchet Loss for Visual Generation

**Authors:** Jiawei Yang; Zhengyang Geng; Xuan Ju; Yonglong Tian; Yue Wang

**ID:** 154990\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154990

[Paper](<https://openreview.net/forum?id=9OK87o8Wkf>) | [PDF](<https://openreview.net/pdf?id=9OK87o8Wkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154990>)

We show that Fréchet Distance \(FD\), long considered impractical as a training objective, can in fact be effectively optimized in the representation space\. Our idea is simple: decouple the population size for FD estimation \(e\.g\., 50k\) from the batch size for gradient computation \(e\.g\., 1024\)\. We term this approach FD\-Loss\. Optimizing FD\-Loss reveals several surprising findings\. First, post\-training a base generator with FD\-Loss in different representation spaces consistently improves visual quality\. Under the Inception feature space, a one\-step generator achieves 0\.72 FID on ImageNet $256\\times256$\. Second, the same FD\-Loss repurposes multi\-step generators into strong one\-step generators without teacher distillation, adversarial training or per\-sample targets\. Third, FID can misrank visual quality: modern representations can yield better samples despite worse Inception FID\. This motivates FDr$^\{k\}$, a multi\-representation metric\. We hope this work will encourage further exploration of distributional distances in diverse representation spaces as both training objectives and evaluation metrics for generative models\. Code and checkpoints will be open\-sourced\.

## XFeat Revisited: Reproducibility and Evaluation of a Lightweight Image Matcher

**Authors:** Lazar Đoković; Aimee Lin

**ID:** 157013\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 157013

[Paper](<https://openreview.net/forum?id=2WI889Ulin>) | [PDF](<https://openreview.net/pdf?id=2WI889Ulin>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

We present a reproducibility study of XFeat, a lightweight local feature extractor and matcher designed to identify corresponding points across images efficiently on resource\-constrained hardware\. We re\-implement the architecture based on the paper and supplementary material, re\-evaluate the authors' released checkpoint alongside our re\-implementation, and conduct additional architectural ablations to examine design choices that were not fully justified in the original work\. This distinction between re\-evaluation and reproduction is important, as the paper, supplement, and public code differ in several implementation details, including the backbone layout, fusion block, and training losses\. Empirically, our reproduced models closely match and, in some cases, outperform the re\-evaluated original checkpoint on MegaDepth\-1500 and ScanNet\-1500, supporting the main claim that XFeat provides a strong accuracy–efficiency trade\-off for standard image\-matching benchmarks\. Our ablations provide a more nuanced view of two architectural arguments from the original paper\. In particular, the parallel keypoint branch is important for semi\-dense matching, but its benefit is less pronounced than originally claimed, while the evidence for the specific placement of the single skip\-connection remains inconclusive\. Finally, we reproduce the original downstream evaluations and find close agreement for homography estimation, while Aachen visual localization remains below the reported results, even for the released checkpoint, suggesting sensitivity to underspecified evaluation details\. We then extend the analysis to zero\-shot out\-of\-distribution and cross\-modal matching across retinal, thermal\-visible, and multimodal remote\-sensing imagery, where XFeat remains effective in some settings but degrades sharply under severe modality shifts\.

## Repurposing Video Diffusion Transformers for Cross\-View Temporal Object Correspondence

**Authors:** Siyoon Jin; Dahyun Chung; Honggyu An; Sangbeom Lim; Wonjin Nam; Jaewoo Jung; WonJun Moon; Seungryong Kim

**ID:** 155763\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155763

[Paper](<https://openreview.net/forum?id=362kWB8SSp>) | [PDF](<https://openreview.net/pdf?id=362kWB8SSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155763>)

Cross\-view object correspondence identifies the same object across views\.      However, existing methods treat this as a frame\-level matching problem, necessitating a query mask at every frame\.      Furthermore, without modeling temporal context, they suffer from severe ambiguity under appearance changes or occlusions\.     Therefore, we introduce cross\-view temporal object correspondence, which requires preserving object identity across both views and time from a query mask\.      To address this, we propose Track, a streamlined framework which repurposes a pretrained video DiT with semantic and spatiotemporal priors for RGB\-to\-mask latent transport, jointly modeling cross\-view matching and temporal tracking\.     However, naive video DiTs do not guarantee accurate cross\-view grounding and often attend to semantically similar yet incorrect objects across views\.      Thus, we introduce focal cross\-view attention alignment, hard negative conditioning, and local context crop strategies to ensure reliable grounding\.      Finally, beyond these architectural enhancements, we also tackle the lack of dense annotation by introducing a pseudo\-label curation pipeline that converts sparse Ego\-Exo4D annotations into dense supervision to enable effective video\-level training\.     Our highly competitive performances validate the effectiveness of Track as a streamlined framework, ensuring robust temporal consistency and identity preservation\.     Code and weights will be released\.

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

## Patching Up Circuit Learning on Images

**Authors:** Charles Bricout; Gennaro Gala; Viacheslav \(Slava\) Borovitskiy; Antonio Vergari

**ID:** 152498 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SgOj0VYeoD>) | [PDF](<https://openreview.net/pdf?id=SgOj0VYeoD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152498>)

Probabilistic circuits \(PCs\) have emerged as generative models guaranteeing tractable probabilistic inference\. However, tractability comes at the price of larger model sizes than in other neural generative models\. As such, to scale PCs to high\-dimensional data such as images, previous work has devised several parameter sharing techniques as well as fast evaluation protocols that consider learning PCs on independent image patches\.  In this work, we revisit this practice to highlight a surprising learnability issue: models that assume independence counterintuitively can yield better likelihoods than models that do not\. To break this apparent bottleneck and to scale PCs further, we introduce a recursive parameter sharing construction \(RePA\) that fosters efficiency without assuming independence\.  In a set of rigorous experiments, we show that RePA can greatly reduce time and memory consumption while yielding competitive likelihoods\.

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

## WovenAnchor Matcher: Specialized Intra\- and Inter\-Image Context Modeling for Feature Matching

**Authors:** Zhiyang Li; Ruijiang Jin; Thibaut Klenke; Yusuke Sekikawa; Nakamasa Inoue

**ID:** 155912 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1tYCWPWHHq>) | [PDF](<https://openreview.net/pdf?id=1tYCWPWHHq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155912>)

_Abstract unavailable from the accessible public sources._

## LogT: Logically Think with Images for Visual Search

**Authors:** Yanjun Fu; Quanzeng You; Jiadong Guo; Yujie Lu; Sai Charitha Akula; Haiping Wu; Miao Liu; Sanghamitra Dutta; Lu Yuan

**ID:** 155728 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3NXQoAs55l>) | [PDF](<https://openreview.net/pdf?id=3NXQoAs55l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155728>)

_Abstract unavailable from the accessible public sources._

## VESTA: Visual Exploration with Statistical Tool Agents

**Authors:** William Rudman; Abhishek Rajan Divekar; Kanishk Jain; Sebastian Joseph; Stella Offner; Matt Lease; Kyle Mahowald; Greg Durrett; Junyi Jessy Li

**ID:** 151435 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=akBqLVEMrj>) | [PDF](<https://openreview.net/pdf?id=akBqLVEMrj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151435>)

_Abstract unavailable from the accessible public sources._

## A Quantitative Visual Taxonomy of Worldwide Writing Systems

**Authors:** Philippe Meyer; Claire Roman

**ID:** 152125 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VLPMAYjWxj>) | [PDF](<https://openreview.net/pdf?id=VLPMAYjWxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152125>)

_Abstract unavailable from the accessible public sources._

## At FullTilt: Real\-Time Open\-Set 3D Macromolecule Detection Directly from Tilted 2D Projections

**Authors:** Ming\-Yang Ho; Alberto Bartesaghi

**ID:** 154302 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eirt5wZqH3>) | [PDF](<https://openreview.net/pdf?id=Eirt5wZqH3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154302>)

Open\-set 3D macromolecule detection in cryogenic electron tomography eliminates the need for target\-specific model retraining\. However, strict VRAM constraints prohibit processing an entire 3D tomogram, forcing current methods to rely on slow sliding\-window inference over extracted subvolumes\. To overcome this, we propose FullTilt, an end\-to\-end framework that redefines 3D detection by operating directly on aligned 2D tilt\-series\. Because a tilt\-series contains significantly fewer images than slices in a reconstructed tomogram, FullTilt eliminates redundant volumetric computation, accelerating inference by orders of magnitude\. To process the entire tilt\-series simultaneously, we introduce a tilt\-series encoder to efficiently fuse cross\-view information\. We further propose a multiclass visual prompt encoder for flexible prompting, a tilt\-aware query initializer to effectively anchor 3D queries, and an auxiliary geometric primitives module to enhance the model's understanding of multi\-view geometry while improving robustness to adverse imaging artifacts\. Extensive evaluations on three real\-world datasets demonstrate that FullTilt achieves state\-of\-the\-art zero\-shot performance while drastically reducing runtime and VRAM requirements, paving the way for rapid, large\-scale visual proteomics analysis\. All code and data will be publicly available upon publication\.

## Certifiably Optimal Robust Angular Synchronization

**Authors:** Daniel Barath; Keisuke Tateno; Marc Pollefeys; Federico Tombari

**ID:** 153331 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M7UwJ21cjC>) | [PDF](<https://openreview.net/pdf?id=M7UwJ21cjC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153331>)

Rotation averaging on the circle, equivalently robust angular synchronization, underlies a wide range of geometric estimation problems, for example, gravity\-aligned Structure\-from\-Motion, multi\-way point\-cloud registration, and in\-plane alignment in single\-particle cryo\-electron microscopy\. We present the first algorithm that certifiably solves the robust maximum\-consensus formulation of this problem to global optimality\. Our approach discretises the circle into uniform bins, formulates a pairwise Markov random field and solves it via branch\-and\-bound with two key novelties: an ICM\-guided label\-pruning rule that collapses the branching factor to a handful of candidates, and a node\-constrained relaxation bound orders of magnitude tighter than the standard per\-edge bound\. Together, they reduce the search from millions of nodes to a few hundred on typical instances\. On all tested problems, the algorithm terminates with a proof of global optimality, typically in a few seconds\. Across synthetic graphs and three real\-world domains \-\- image\-based SfM on IMC 2023/2024, multi\-way LiDAR point\-cloud registration on KITTI and NSS, and cryo\-EM angular synchronization on EMPIAR\-10166 \-\- the certified solution achieves sub\-degree accuracy at outlier rates where other baselines fail\. Our code will be made publicly available\.

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

## Beyond Interpretability: When, Why, and How Sparse Autoencoders Enable Label\-Free Visual Steering

**Authors:** Gerasimos Chatzoudis; Zhuowei Li; Gemma Moran; Hao Wang; Dimitris Metaxas

**ID:** 148658 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w6uFnfYXcZ>) | [PDF](<https://openreview.net/pdf?id=w6uFnfYXcZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148658>)

Sparse Autoencoders \(SAEs\) are increasingly used to interpret foundation models, but their role as an actionable intervention space remains less understood, especially in vision\. We study whether sparse visual features can be used not only for post\-hoc analysis, but also to steer frozen vision\-language models\. We introduce \\textbf\{Visual Sparse Steering \(\\ours\)\}, a label\-free method that trains a top\-$k$ SAE on unlabeled activations from a frozen CLIP image encoder and, at test time, constructs an interpretable steering vector by amplifying the input's active sparse features and decoding the induced change\. We show that this procedure admits a closed\-form decomposition as \\emph\{centroid\-deviation steering\}: each input is moved along its deviation from the SAE\-learned centroid\. The residual term is controlled exactly by the SAE's per\-sample reconstruction error, measured by FVU, yielding an FVU\-based residual bound and motivating a reliability gate that falls back to zero\-shot CLIP when SAE reconstruction is unreliable\. With target\-domain SAEs trained on unlabeled CLIP image\-encoder activations, \\ours improves zero\-shot accuracy across nine image\-classification datasets, achieving gains up to $\+4\.12\\%$ with less than $0\.1\\%$ additional inference compute\. Finally, a controlled upper\-bound study, \\oursplus, shows that selective amplification of sparse features can yield gains up to $\+21\.44\\%$, exposing a \\emph\{reconstruction\-vs\-task saliency gap\}: features salient for reconstruction need not align with features useful for downstream prediction\.

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

## TextRegion: Text\-Aligned Region Tokens from Frozen Image\-Text Models

**Authors:** Yao Xiao; Qiqian Fu; Heyi Tao; Yuqun Wu; Zhen Zhu; Derek Hoiem

**ID:** 156751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=KZLmkL62M4>) | [PDF](<https://openreview.net/pdf?id=KZLmkL62M4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156751>)

Image\-text models excel at image\-level tasks but struggle with detailed visual understanding\. While these models provide strong visual\-language alignment, segmentation models like SAM2 offer precise spatial boundaries for objects\. To this end, we propose TextRegion, a simple, effective, and training\-free framework that combines the strengths of image\-text models and SAM2 to generate powerful text\-aligned region tokens\. These tokens enable detailed visual understanding while preserving open\-vocabulary capabilities\. They can be directly applied to various downstream tasks, including open\-world semantic segmentation, referring expression comprehension, and grounding\. We conduct extensive evaluations and consistently achieve superior or competitive performance compared to state\-of\-the\-art training\-free methods\. Additionally, our framework is compatible with many image\-text models, making it highly practical and easily extensible as stronger models emerge\. Code is available at: https://github\.com/avaxiao/TextRegion\.

## Beyond Bit Matching: Orthogonal Watermarks for Collusion\-Resistant Image Fingerprinting

**Authors:** Zhakshylyk Nurlanov; Tobias Weißberg; Florian Bernard

**ID:** 148565 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wwfGrsZBIz>) | [PDF](<https://openreview.net/pdf?id=wwfGrsZBIz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148565>)

Image fingerprinting assigns each distributed copy a user\-specific watermark for source tracing\. Averaging collusion is a central threat: several recipients can average their differently marked copies to suppress each individual mark\. Discrete bit\-string watermarks are especially vulnerable because averaging drives bit evidence toward ambiguous decisions\. We introduce \*\*OrthoMark\*\*, which maps user keys to near\-orthogonal high\-dimensional unit vectors and identifies colluders by cosine similarity to the extracted watermark direction\. Under ideal averaging of $K$ vector keys, the normalized average preserves a cosine signal of order $1/\\sqrt\{K\}$ for each colluder, while unrelated keys remain concentrated near zero\. The spherical geometry of random directions gives a shifted\-Beta null distribution for cosine similarities, enabling analytic per\-key false\-positive\-rate control after validation on unwatermarked images\. OrthoMark uses a neural watermark encoder and centered extractor trained with JND masking and a progressive curriculum for photometric, geometric, and collusion robustness\. Experiments on MS\-COCO, OpenImages, and AI\-generated images show that OrthoMark maintains robust single\-key detection under photometric and geometric distortions, and achieves the best strict all\-colluder detection among evaluated methods, while preserving high visual quality\.

## FacEDiT: Talking Head Video Editing via Facial Motion Infilling

**Authors:** Sung\-Bin Kim; Joohyun Chang; David Harwath; Tae\-Hyun Oh

**ID:** 152285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UDOhx8aiSo>) | [PDF](<https://openreview.net/pdf?id=UDOhx8aiSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152285>)

Editing a local segment in a talking head video without reshooting the entire scene remains challenging and underexplored\. Given local edits, such as insertion, deletion, or substitution, talking head video editing must synthesize a replacement segment while leaving the rest unchanged\. This requires variable\-duration local rewriting while preserving identity, unedited regions, and boundary continuity, which standard speech\-driven generation and lip synchronization do not directly address\. Moreover, direct supervision is infeasible, as it requires paired videos of the same person and scene differing only in a local spoken segment, which does not exist in the real world\. We instead formulate talking head video editing as facial motion infilling, a self\-supervised pretext task that recovers masked facial motion from speech and surrounding motion context in ordinary video\-\-speech pairs\. The key insight is that local video editing can be simulated during training by masking a motion span and reconstructing it from speech and visible motion context\. Based on this formulation, we introduce FacEDiT, a mask\-controlled talking head model with local temporal attention bias and temporal smoothness regularization for improved lip\-\-speech alignment and transition continuity\. We also introduce FacEDiTBench, the first benchmark for talking head video editing, covering diverse edit types and lengths with dedicated evaluation metrics\. Extensive experiments show that FacEDiT produces accurate, speech\-aligned edits with strong identity preservation and seamless boundary transitions\. Beyond editing, the same facial motion infilling model extends to portrait animation and lip synchronization by simply changing the mask pattern, establishing FacEDiT as a unified framework for talking head video editing and generation\.    \\textit\{We will release the code and data upon acceptance\.

## LookWhen? Fast Video Recognition by Learning When, Where, and What to Compute

**Authors:** Ali Salamatian; Anthony Fuller; Pritam Sarkar; James Green; Leonid Sigal; Evan Shelhamer

**ID:** 149223 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rzaezKzgbP>) | [PDF](<https://openreview.net/pdf?id=rzaezKzgbP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149223>)

Transformers dominate video recognition\. They split videos into tokens, and processing them has expensive superlinear computational cost\. Yet videos are filled with redundancy, so we can question the need for this expense\. We introduce LookWhen, a selector–extractor framework that factorizes video recognition into learning when, where, and what to compute\. Our shallow selector gets a scaled\-down video and quickly scores all tokens across space\-time, while our deep extractor gets the top\-K selected tokens to approximate full\-video representations without actually processing all the tokens\. A key challenge is defining effective supervision for selection and extraction\. For selection pre\-training, we introduce a score on representations that ranks tokens by uniqueness using a simple nearest\-neighbor distance\. For extraction pre\-training, we distill both a video teacher and an image teacher, for which we normalize its frame\-wise representations to learn what changes within videos\. Through these strategies, our selector\-extractor learns general and efficient representations for feature extraction or fine\-tuning to a task\. Through experiments on Kinetics\-400, SSv2, Epic\-Kitchens, Diving48, Jester, and Charades, we show that LookWhen achieves a better accuracy\-computation trade\-off than efficient models and upgraded baselines of similar size\. LookWhen Pareto\-dominates in accuracy\-FLOPs on 9 of 12 cases \(6 tasks X 2 settings\) and roughly matches on 3\. In accuracy\-throughput, measuring time in practice, LookWhen is more efficient still at 6\.7$\\times$ faster than InternVideo2\-B at equal accuracy\.

## LensVLM: Selective Context Expansion for Compressed Visual Representation of Text

**Authors:** Roy Xie; Dan Friedman; Donghan Yu; Bowen Pan; Christopher Fifty; Jang\-Hyun Kim; Xianzhi Du; Zhe Gan; Vivek Rathod; Bhuwan Dhingra

**ID:** 151754 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YIzy3CMHAw>) | [PDF](<https://openreview.net/pdf?id=YIzy3CMHAw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151754>)

_Abstract unavailable from the accessible public sources._

## Learning to Align Generative Appearance Priors for Fine\-grained Image Retrieval

**Authors:** Shijie Wang; Yadan Luo; Zijian Wang; Xin Yu; Zi Huang

**ID:** 150225 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jqoXeuVAtu>) | [PDF](<https://openreview.net/pdf?id=jqoXeuVAtu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150225>)

_Abstract unavailable from the accessible public sources._

## A Principled Self\-Referenced Early Stopping Approach for Deep Image Prior

**Authors:** Chaoyan Huang; Cheng\-Han Huang; Ismail Alkhouri; Rongrong Wang

**ID:** 151448 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aagILQC10A>) | [PDF](<https://openreview.net/pdf?id=aagILQC10A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151448>)

_Abstract unavailable from the accessible public sources._

## Think, then Score: Decoupled Reasoning and Scoring for Video Reward Modeling

**Authors:** Yuan Wang; Ouxiang Li; Yulong Xu; Borui Liao; Jiajun Liang; Jinghan Li; Meng Wang; Xintao Wang; Pengfei Wan; Kuien Liu; Xiang Wang

**ID:** 149446 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q1K2PuBRd7>) | [PDF](<https://openreview.net/pdf?id=q1K2PuBRd7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149446>)

_Abstract unavailable from the accessible public sources._

## Fast\-Slow Evolutionary Occupancy Prediction via Controlled Dynamics

**Authors:** Runhe Yang; Zhiyuan Zhou; Yuxiang Yan; Xuetong Yang; Yikai Pan; Jiacheng Tang; Zhuolin He; Jianhua Han; Hang Xu; Jian Pu

**ID:** 156095 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PrltFkr6P>) | [PDF](<https://openreview.net/pdf?id=0PrltFkr6P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156095>)

_Abstract unavailable from the accessible public sources._

## Image Matting without Matting\-Specific Annotations via Eikonal Fields

**Authors:** Tao Huang; Yi Wang; Xiaohong Zhang; Wei Zhang; Tao Yin; Zhibin Zhang; Qiuli Wang

**ID:** 151905 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X2jELwz645>) | [PDF](<https://openreview.net/pdf?id=X2jELwz645>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151905>)

_Abstract unavailable from the accessible public sources._

## AdaAlloc: Adaptive Visual Token Allocation for Long\-Video Question Answering

**Authors:** Joungbin An; Kristen Grauman

**ID:** 155735 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3L6GFiwoG6>) | [PDF](<https://openreview.net/pdf?id=3L6GFiwoG6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155735>)

_Abstract unavailable from the accessible public sources._

## IRPO: Boosting Image Restoration via Post\-training GRPO

**Authors:** Haoxuan Xu; Yi Liu; Tianfu Li; Ruolin Shen; Boyuan Jiang; Jinlong Peng; Donghao Luo; Xiaobin Hu; Shuicheng Yan; Haoang Li

**ID:** 154962 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9c4MQah9Y4>) | [PDF](<https://openreview.net/pdf?id=9c4MQah9Y4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154962>)

_Abstract unavailable from the accessible public sources._

## CoRDS: Coreset\-Based Representative and Diverse Selection for Streaming Video Understanding

**Authors:** Ailar Mahdizadeh; Puria Azadi Moghadam; Muchen Li; Xiangteng He; Leonid Sigal

**ID:** 153844 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IJR2muDUYS>) | [PDF](<https://openreview.net/pdf?id=IJR2muDUYS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153844>)

_Abstract unavailable from the accessible public sources._

## Bounding Global and Local Compression Error of Signal Parameterizations

**Authors:** Quang Luong Nhat Nguyen; Sara Fridovich\-Keil

**ID:** 148822 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ut4H4goukL>) | [PDF](<https://openreview.net/pdf?id=ut4H4goukL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148822>)

_Abstract unavailable from the accessible public sources._

## ViTeX\-Bench: Benchmarking High\-Fidelity Video Scene Text Editing

**Authors:** Xinghao Chen; Xiangbo Gao; Jiongze Yu; Yuheng Wu; Zhengzhong Tu

**ID:** 139184 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fyPHDFABOs>) | [PDF](<https://openreview.net/pdf?id=fyPHDFABOs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139184>)

_Abstract unavailable from the accessible public sources._

## V1\-Inspired Dynamic Vision System: A Bio\-Plausible Video Embedding Framework with Decoupled Shape–Color Pathways and Long\-Range Spatiotemporal Perception

**Authors:** Beier Meng

**ID:** 155997 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1Ha4ZBx0cZ>) | [PDF](<https://openreview.net/pdf?id=1Ha4ZBx0cZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155997>)

_Abstract unavailable from the accessible public sources._

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

## Solaris: Building a Multiplayer Video World Model in Minecraft

**Authors:** Oscar Michel; Georgy Savva; Daohan Lu; Suppakit Waiwitlikhit; Timothy Meehan; Dhairya P Mishra; Egor Gikalo; Srivats Poddar; Jack Lu; Saining Xie

**ID:** 148491 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xP408u4Mho>) | [PDF](<https://openreview.net/pdf?id=xP408u4Mho>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148491>)

Existing action\-conditioned video generation models \(video world models\) are limited to single\-agent perspectives, failing to capture the multi\-agent interactions of real\-world environments\. We introduce Solaris, a multiplayer video world model that simulates consistent multi\-view observations\. We develop a multiplayer data system designed for robust, continuous, and automated data collection on video games such as Minecraft\. Unlike prior platforms built for single\-player settings, our system supports coordinated multi\-agent interaction and synchronized videos \+ actions capture\. Using this system, we collect 12\.64 million multiplayer frames and propose an evaluation framework for multiplayer movement, grounding, building, and view consistency\. We train Solaris using a staged pipeline that progressively transitions from single\-player to multiplayer modeling, combining bidirectional, causal, and Self Forcing training\. In the final stage, we introduce Checkpointed Self Forcing, a memory\-efficient Self Forcing variant that enables a longer\-horizon teacher\. Results show our architecture and training design outperform existing baselines\. We also demonstrate that scaling beyond two players is possible by training a 3\-player proof\-of\-concept model and simulating up to 16 players on our hardware with efficient attention\. Through open\-sourcing our system and models, we hope to lay the groundwork for a new generation of multi\-agent world models\.

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

## PaperLens: How Predictable Is Paper Acceptance?

**Authors:** Sachin Konan; Jonathan Liu; Zhuang Liu

**ID:** 154867\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154867

[Paper](<https://openreview.net/forum?id=AJ2gyvFOF9>) | [PDF](<https://openreview.net/pdf?id=AJ2gyvFOF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154867>)

Peer review is sometimes seen as noisy and difficult to predict\. How much of the final accept/reject decision is recoverable from the paper itself? We investigate this question with PaperLens, text and vision models trained to predict binary acceptance from anonymized paper artifacts\. For a clean evaluation, we construct balanced, shortcut\-controlled OpenReview and source\-derived arXiv datasets that remove deanonymization artifacts and majority\-class shortcuts\. Supervised binary decision training is surprisingly strong\. PaperLens outperforms frontier prompting and review\-trained baselines on decision accuracy and ranking, while its acceptance probability remains well calibrated after validation\-set scaling and correlates better to ratings than baselines\. Vision consistently improves over markdown text, showing that layout, figures, and visual presentation carry reviewer\-relevant signal\. Scaling from 3B to 14B parameters yields only modest gains, with clean supervision and faithful paper representations mattering more than model size\. Together, our results show that decision prediction provides a powerful signal for paper assessment and can even improve the alignment of AI reviewing agents\.

## Bernini: Latent Semantic Planning for Video Diffusion

**Authors:** Chenchen Liu; Junyi Chen; Lei Li; Lu Chi; Mingzhen Sun; Zhuoying Li; Yi Fu; Ruoyu Guo; Yiheng Wu; Ge Bai; Zehuan Yuan

**ID:** 154106\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154106

[Paper](<https://openreview.net/forum?id=GDdIbzbPVF>) | [PDF](<https://openreview.net/pdf?id=GDdIbzbPVF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154106>)

Multimodal large language models \(MLLMs\) and diffusion models have each reached remarkable maturity: MLLMs excel at reasoning over heterogeneous multimodal inputs with strong semantic grounding, while diffusion models synthesize images and videos with photorealistic fidelity\. We argue that these two families can be unified through a simple division of labor: MLLMs perform semantic planning, while diffusion models render pixels from high\-level semantic guidance and low\-level visual features\. Building on this idea, we propose \\textbf\{Bernini\}, a unified framework for video generation and editing\. An MLLM\-based \\textbf\{planner\} predicts the target semantic representation directly in the ViT embedding space, and a DiT\-based \\textbf\{renderer\} synthesizes pixels conditioned on this plan, augmented by text features and, for editing, source VAE features for detail preservation\. Because semantics serve as the interface, the planner and renderer can be trained separately and only lightly co\-trained, preserving the pretrained strengths of both components while keeping training efficient\. To better handle multiple visual inputs, we introduce Segment\-Aware 3D Rotary Positional Embedding \(SA\-3D RoPE\), and further incorporate chain\-of\-thought reasoning in the planner to better transfer understanding into generation\. Bernini achieves state\-of\-the\-art performance across a wide range of video generation and editing benchmarks, with the MLLM's pretrained understanding translating into strong generalization on challenging editing tasks\.

## Measuring Robustness and Efficiency in a Connectome\-Constrained Fly Visual System Model on a Collision\-Detection Task

**Authors:** Alexandre Garcia\-Duran; Alejandro Rodriguez\-Garcia; Manuel Molano\-Mazon; Alexandre HYAFIL; Srikanth Ramaswamy; Janne K Lappalainen

**ID:** 149010\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149010

[Paper](<https://openreview.net/forum?id=tUtERl6Jq6>) | [PDF](<https://openreview.net/pdf?id=tUtERl6Jq6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149010>)

Biological visual systems compute reliably under tight metabolic and wiring constraints despite noisy inputs and stochastic circuit components\. Artificial vision systems tend to invert both properties: They consume vastly more energy and can be sensitive to adversarial perturbations\. Whether artificial networks with structural properties of real brain wiring are more robust at lower computational cost is unclear\. We address this with FlyNet \(Lappalainen et al\. 2024\), a task\-optimized, continuous\-time neural network model of the fly visual system constrained by its synaptic connectome\. We benchmark it against CNN, RAFT \(Teed and Deng, 2020\), and a sparse continuous\-time recurrent neural network without connectome constraints \(CTRNN\) on a looming\-based collision\-detection task within a differentiable 3D rendering pipeline\. We find that FlyNet is more robust than CNN controls to flicker, unstructured noise, and motion jitter\. Compared with RAFT controls, FlyNet is more robust to flicker and motion jitter but less robust to all gradient\-based attacks\. Yet, FlyNet uses up to five orders of magnitude fewer FLOPs than RAFT, achieving higher robustness on common video corruptions at far lower cost\. FlyNet is less robust than CTRNN across all tested perturbations, suggesting that FlyNet's connectome constraints contribute to cost, not robustness\. To probe FlyNet's failure modes, we use counterfactual restoration: textures equally far from training as adversarial textures that recover correct classification also recover position and velocity representations, ruling out unfamiliar textures as the cause of failure\. Classical reverse\-phi illusions degrade the same downstream position and velocity readouts, suggesting that both perturbations may exploit similar computational vulnerabilities\. Together, these results show that FlyNet is robust for its computational cost on an ecologically important task, and indicate that different architectures specialized on the same task have specific robustness profiles across perturbation types\. Our differentiable pipeline enables computational tests of this hypothesis and generates targeted adversarial stimuli for in vivo experiments\.

## REVERSE: Reinforcing Evidence Verification and Search for Agentic Image Geolocation

**Authors:** Yong Li; Furong Jia; Dacheng Yin; KANG RONG; Fengyun Rao; Jing LYU; Fan Zhang

**ID:** 154894 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A8SzlxVSB9>) | [PDF](<https://openreview.net/pdf?id=A8SzlxVSB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154894>)

Image geo\-localization aims to determine where a photograph was taken, a task that often requires more than recognizing visible landmarks\. Human experts typically solve it through an iterative workflow: they inspect informative regions, form location hypotheses, seek external evidence, and revise their judgments as new clues appear\. Existing methods only partially capture this process: direct prediction methods bypass evidence acquisition altogether, while retrieval\-augmented methods introduce external evidence but usually provide limited supervision on the intermediate decisions of where to search, how to query, and how to filter noisy results\. We present REVERSE, a framework that reinforces the interplay between evidence search and verification to enable multi\-turn agentic reasoning\. REVERSE teaches three intermediate decisions: where to look, what to query, and what evidence to trust\. To support this, we construct tool\-grounded trajectories with annotated region selections, search observations, and geo\-informative evidence labels, and introduce process rewards for visual grounding, query utility, and evidence discrimination\. An offline search cache makes retrieval observations stable and reusable during reinforcement learning, enabling dense supervision over noisy search results\. With a 4B model, REVERSE outperforms strong retrieval\-augmented baselines and rivals substantially larger models on Im2GPS3k and YFCC4k\.

## RegimeVGGT: Layer\-Wise Spatially Preserving Redundancy Removal for Visual Geometry Grounded Transformer

**Authors:** Shuo Lyu; Jinhao You; Zhuohang Lyu; Tanxuan Li; Zibo Zhao; Jiaxiang Hu; Kai Tang; Yichen Guo

**ID:** 155954 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1a4VUxz0sm>) | [PDF](<https://openreview.net/pdf?id=1a4VUxz0sm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155954>)

Visual Geometry Grounded Transformer \(VGGT\) recovers dense 3D scene structure from multi\-view images in one forward pass, but quadratic cross\-frame attention limits its scalability\. Existing training\-free accelerators reduce computation uniformly along one axis, missing layer heterogeneity\. Our spectral, probing, and causal analyses reveal three regimes: shallow layers lack cross\-view structure, middle layers drive cross\-view alignment, and deep layers are redundant for dense geometry yet their cross\-frame attention remains essential for pose\. RegimeVGGT applies layer\-wise U\-shaped compression along two axes: Saliency\-Guided Banded Merging protects geometry\- and edge\-salient tokens, while Selectively Protected K/V Downsampling preserves cross\-frame spatial coverage and the pose\-critical path through a phase\-shifted spatial grid, a reference\-frame anchor, and uncompressed camera/register tokens\. Training\-free, RegimeVGGT achieves a $6\.7\\times$ speedup over VGGT\* at matched reconstruction quality\. Code: \\url\{https://anonymous\.4open\.science/status/RegimeVGGT\-9477\}

## Beyond Chamfer Distance: Granular Order\-aware Evaluation Metric For Online Mapping

**Authors:** Chouaib Bencheikh Lehocine; Adam Lilja; Junsheng Fu; Lars Hammarstrand

**ID:** 139462\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139462

[Paper](<https://openreview.net/forum?id=OFy3tWBIVi>) | [PDF](<https://openreview.net/pdf?id=OFy3tWBIVi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139462>)

Online map estimation is a crucial component of autonomous driving systems that reduces the reliance on costly high\-definition maps\. State\-of\-the\-art \(SOTA\) methods commonly predict map elements as ordered sequences of points that form polylines and polygons\. The evaluation of these methods relies predominantly on mean average precision \(mAP\) based on thresholded Chamfer distance \(CD\)\. This framework lacks sensitivity to point ordering and provides limited granularity in assessing geometric quality, making it difficult to distinguish which methods truly excel over others\. In this work, we address these limitations on two fronts\. For the single\-instance similarity measure, we introduce sequence optimal sub\-pattern assignment \(SOSPA\), an order\-aware metric that enables fine\-grained evaluation of individual geometries while satisfying all metric axioms\. For the multi\-instance evaluation framework, we propose polyline localisation and detection \(PLD\), a soft metric that jointly captures detection quality and geometric accuracy, replacing the hard thresholding of mAP with a principled soft assignment\. Through evaluations on nuScenes, we demonstrate that PLD effectively ranks SOTA online mapping methods \(MapTRv2, StreamMapNet, MapTracker\) while providing a decomposed error analysis\. This analysis identifies detection capability as the dominant bottleneck in current methods, revealing a performance trend that mAP fails to capture\. Code for evaluation using our metrics will be released\.

## Auditing Capsule Vision 2024: Within\-Split Train\-to\-Validation Re\-Exposure and a Kvasir\-Channel Sensitivity Diagnostic

**Authors:** Eunseob Choi; Kyeonghun Kim; Hyuk\-Jae Lee; Nam\-Joon Kim

**ID:** 139763\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139763

[Paper](<https://openreview.net/forum?id=69GCzBgr1S>) | [PDF](<https://openreview.net/pdf?id=69GCzBgr1S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139763>)

Public validation sets in machine\-learning challenges frequently become de facto test sets in downstream work, making train–validation source overlap a first\-order concern for claim validity\. We audit the released public split of the \*Capsule Vision 2024 Challenge\* \(CV2024\) using perceptual hashing \(pHash\+dHash, PDQ at 99\.4%\), pixel NCC, and DINOv2/ResNet feature checks\. The released CV2024 public split contains 1,381 / 11,581 KVASIR validation rows \(11\.9%; 540 pixel\-confirmed at NCC ≥ 0\.99, i\.e\. 4\.66%\) with pHash\-exact training matches — directly violating the organizers' "NOT have duplicates" preprocessing description\. All 1,381 trace to shared Kvasir\-Capsule video prefixes, consistent with frame\-level \(not video\-level\) random splitting\. The full CV2024\-KVASIR slice falls in the disclosed Kvasir\-Capsule near\-duplicate set \(60\.7% bit\-identical; non\-KVASIR controls ≤ 0\.31%\)\. Training on the Kvasir\-origin\-removed le6 split drops public\-validation balanced accuracy by Δ = −0\.213 \(95% CI \[−0\.220, −0\.206\], n=10 paired seeds\), quantifying the public score's dependence on the KVASIR channel; the magnitude is mechanically expected given the 71\.8% KVASIR validation composition rather than a leakage\-specific causal effect\. le6 is not a hidden\-test proxy \(team\-level Spearman against AIIMS: ρ=0\.355 vs\. 0\.566 for the original score\)\. We release le6, le6\_plus\_internal, hash/NCC annotations, audit code, and a Croissant 1\.1 descriptor as a within\-public\-pool sensitivity probe; no image bytes are redistributed\. Detector portability: ISIC 2019 cross\-source rate is 0\.008% \(2/25,331, both re\-attributed as within\-source metadata\-gap pairs ⇒ genuine cross\-source 0/25,331; Cassidy et al\. 2022's recall\-tuned multi\-hash pipeline flags 14,310\); HyperKvasir and Kvasir\-SEG cross\-benches against CV2024 return 0 pairs \(procedure\-disjoint negative controls\)\. At the matched NCC ≥ 0\.99 endpoint, the CV2024 rate of 4\.66% \(540/11,581\) is ≈ 148–583× above the ISIC cross\-source rate \(Wilson\-lower / Wilson\-upper to point/point\)\.

## Kernelized Activation Steering

**Authors:** Laziz Abdullaev; Minh\-Hieu Pham; Bach Do; Khoat Than; Tan Nguyen

**ID:** 154267\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154267

[Paper](<https://openreview.net/forum?id=F4iCxDrUbU>) | [PDF](<https://openreview.net/pdf?id=F4iCxDrUbU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154267>)

Activation steering provides a simple, training\-free mechanism for controlling attributes of generative models \(e\.g\., sentiment, style, helpfulness\)\. However, standard approaches such as Difference\-in\-Means \(DiM\) apply a single input\-independent steering vector across all activations, limiting expressivity and ignoring the local structure of the activation space\. We propose Kernelized Activation Steering \(KAS\), a unifying framework that lifts activation steering into a reproducing kernel Hilbert space \(RKHS\)\. KAS formulates steering as an optimization problem expressed purely via kernel evaluations, yielding an implicit, activation\-dependent steering score without constructing explicit feature maps\. Unlike DiM, KAS induces locally adaptive steering: each activation is modified according to its relative position with respect to source and target reference sets, producing a nonlinear steering field over the representation space\. Importantly, DiM is recovered as a special case under a linear kernel, offering a principled interpretation of steering, while richer kernels \(e\.g\., RBF\) enable geometry\-aware interventions\. Across standard activation steering tasks, including jailbreaking LLMs and image style control, KAS consistently outperforms existing methods\.

## MotorSense: A Video\-EMG Dataset of Motoric Representations for Action Understanding

**Authors:** Eadom T Dessalene; Michael Maynord; Amir Hossein Shahidzadeh; Botao He; Yasamin Tabatabaee; Ruoshi Liu; Ruohan Gao; Paul Liang; Yiannis Aloimonos

**ID:** 154831\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154831

[Paper](<https://openreview.net/forum?id=AcKmwyvIYm>) | [PDF](<https://openreview.net/pdf?id=AcKmwyvIYm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154831>)

Computer vision models learn hand action only from its visual consequences, without access to the underlying embodied motor signals\. We address this absence with MotorSense \- the first large\-scale paired egocentric video and surface electromyography \(EMG\) dataset\. MotorSense pairs bimanual EMG bands with Meta Aria glasses and yields synchronized video, bimanual EMG and IMU, and audio across $25$ hours of unscripted manipulation\. Beyond scale, EMG offers an alternative to manual annotation, and captures finger movement, hand configuration, and forces exerted between hand and environment \-\-\- this is in contrast to manual annotation which is costly, subjective, and unreliable under occlusion\. EMG provides a dense hand signal free of both occlusion and labeler bias\. To bridge the representational gap between low\-level EMG and high\-level semantic action representations, we learn a mid\-level representation over the EMG data that we call motor codes\. We utilize these motor codes in two settings: 1\) motor\-code pre\-training, in which image and video backbones are pre\-trained to predict motor codes from pixels, and subsequently evaluated over downstream tasks of 3D hand\-object reconstruction and action recognition; 2\) motor\-code conditioning, in which the codes are used as control inputs for a video diffusion model, yielding videos of fine\-grained hand manipulation\. On action recognition \(EPIC\-Kitchens, Ego\-Exo4D, and Meccano\), under a frozen\-evaluation protocol we observe a large $35\.8$\\% mean relative improvement in top\-1 accuracy over conventional pre\-trained backbones\. On ARCTIC 3D hand\-object reconstruction we observe a sizeable increase in object\-pose success rate from $72\.90$\\% to $77\.22$\\% compared to the pre\-training of the base ARCTIC model\. Code and data are made anonymously available at https://anonymous\.4open\.science/r/MotorSense\-7173/ \.

## FlowTrack: Controlling Edit\-Signal Execution in Inversion\-Free Flow Video Editing

**Authors:** Jielun Zhong; Di Wang; Jisheng Dang; Leigang Qu; Bimei Wang; Jingwen Zhao; Wencan Zhang; Hong Peng; Bin Hu

**ID:** 152250\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152250

[Paper](<https://openreview.net/forum?id=USNrqsbBWX>) | [PDF](<https://openreview.net/pdf?id=USNrqsbBWX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152250>)

Text\-guided video editing requires applying a semantic change while keeping source motion, layout, and unchanged content stable\. Recent inversion\-free flow editors derive effective edit signals from target\-source velocity differences, yet typically inject these signals directly at each solver step\. In neural video sampling, however, this direct execution rule overlooks an important distinction: the velocity difference is an online, state\-dependent observation rather than a fixed endpoint\-displacement command\. As the target branch evolves under previous injections, direct injection may accumulate temporal fluctuations and off\-target perturbations, producing motion drift, identity flicker, or unintended changes in weak\-response regions\. We propose FlowTrack, a causal execution controller for inversion\-free flow video editing\. FlowTrack leaves the pretrained generator and raw edit signal unchanged, but executes the signal through a carried displacement\-like direction and response\-aware attenuation\. We derive this update as the closed\-form solution of a local execution objective that balances current signal tracking, temporal carrying, and weak\-response suppression\. On the full FiVE\-Bench protocol, FlowTrack improves motion fidelity, unedited\-region fidelity, and structure consistency over strong training\-free diffusion\- and flow\-based editors while maintaining competitive target\-prompt alignment\. Code is available at https://anonymous\.4open\.science/r/FlowTrack\.

## From Matching to Reasoning: Query\-Aware Long Video Summarization

**Authors:** Mingu Kang; Sumin Kim; Hyunjin Lee; Sungmin Yang; Yoori Oh; Joonseok Lee

**ID:** 155180\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155180

[Paper](<https://openreview.net/forum?id=7iNfz7RRVW>) | [PDF](<https://openreview.net/pdf?id=7iNfz7RRVW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155180>)

Query\-aware video summarization \(QVS\) aims to select a concise set of moments relevant to a textual query in the context of the entire video\. Existing QVS methods are often driven by local query\-segment relevance scoring, which is effective for retrieving query\-matching moments but insufficient for composing coherent summaries over long videos\. Long\-form QVS is especially challenging because query\-relevant evidence tends to be sparsely distributed across extended timelines, and satisfying a query may require combining complementary segments while avoiding redundancy under a strict summary budget\. We propose \*\*QLVSumm\*\*, a framework that autoregressively generates a query\-conditioned video summary, capturing inter\-segment dependencies as well as the saliency of the segment and relevance to the query\. We also introduce a large\-scale benchmark for long\-form QVS \(\*\*LQVS\*\*\) with open\-vocabulary queries and budget\-constrained extractive summaries, together with a complementary metric for evaluating query\-aware summary disentanglement\. Experiments show that QLVSumm achieves state\-of\-the\-art performance and demonstrates stronger query\-aware summary disentanglement\.

## CanvasMAR: Improving Masked Autoregressive Video Prediction With Canvas

**Authors:** Zian Li; Muhan Zhang

**ID:** 148170\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148170

[Paper](<https://openreview.net/forum?id=znXlOaeZCI>) | [PDF](<https://openreview.net/pdf?id=znXlOaeZCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148170>)

Masked autoregressive models \(MAR\) have emerged as a powerful paradigm for image and video generation, combining the flexibility of masked modeling with the expressiveness of continuous tokenizers\. However, when sampling individual frames, video MAR models often produce highly distorted outputs due to the lack of a structured global prior, especially when using only a few sampling steps\. To address this, we propose CanvasMAR, a novel autoregressive video prediction model that predicts high\-fidelity frames with few sampling steps by introducing canvas—one\-step prediction of the future\-frame expectation that serves as a non\-uniform mask during masked generation\. The canvas supplies global structure early in sampling, enabling faster and more coherent frame synthesis\. To further stabilize autoregressive sampling, we propose an easy\-to\-hard curriculum via a motion\-aware sampling order that synthesizes stationary regions before attending to highly dynamic ones\. We also integrate compositional classifier\-free guidance that jointly strengthens the canvas and temporal conditioning to improve generation fidelity\. Experiments on the BAIR, UCF\-101, and Kinetics\-600 benchmarks demonstrate that CanvasMAR produces higher\-quality videos with fewer autoregressive steps\. On the challenging Kinetics\-600 dataset, CanvasMAR achieves remarkable performance among autoregressive models and rivals advanced diffusion models\.

## Reinforced Evidence\-Aware Long Video Understanding

**Authors:** Yuan Xie; Tianshui Chen; Deyu Zhou; Lionel Ni

**ID:** 151586\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151586

[Paper](<https://openreview.net/forum?id=ZUmUvF2Vx9>) | [PDF](<https://openreview.net/pdf?id=ZUmUvF2Vx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151586>)

Despite strong benchmark performance, multimodal large language models \(MLLMs\) remain prone to hallucinations, as they are optimized for linguistic plausibility rather than faithful answering based on observation\. This issue is particularly severe in long videos, where critical cues are temporally sparse and often missed by uniform frame sampling\.  Yet existing methods still either operate on fixed pre\-sampled inputs, implicitly assuming that all necessary evidence has already been captured, or augment reasoning with retrieval without requiring answers to be grounded in visual evidence\. We propose Reinforced Evidence\-Aware Learning , a framework that reformulates long\-video question answering as an iterative process of evidence gathering and verification, enabling faithful answering with explicit evidence support, thereby reducing hallucinations\. At each reasoning step, the model assesses whether the current observation is sufficient to answer the question, and either searches for missing visual evidence from the video or produces a final answer with explicitly cited evidence\. To internalize this reasoning policy, we design an evidence\-aware reward for reinforcement learning post\-training that jointly requires answer correctness and evidence faithfulness\. The latter is evaluated by a pretrained cross\-modal consistency verifier that matches the generated evidence descriptions against the visual content of the source frames, eliminating the need for manual annotations\. Built on Qwen2\.5\-VL\-7B, REAL achieves state\-of\-the\-art results on four long\-video benchmarks \(Video\-MME, MLVU, LongVideoBench, and EgoSchema\) and substantially suppresses hallucinations on the dedicated video\-hallucination benchmarks VideoHallucer and ELV\-Halluc, with only 96 input frames surpassing the 768\-frame base model in both accuracy and hallucination resistance\.

## GeoWorld: A Geometry\-First World Model for Reconstruction and Imagination

**Authors:** Baicheng Li; Jialin Liu; Dong Wu; Weijian Xie; Zhichao Ye; Donghui Shen; Nan Wang; Guofeng Zhang; Haomin Liu; Hongbin Zha

**ID:** 148633\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148633

[Paper](<https://openreview.net/forum?id=wI49OV3byB>) | [PDF](<https://openreview.net/pdf?id=wI49OV3byB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148633>)

Large visual world models have become increasingly capable at synthesizing plausible views and camera trajectories, largely because they inherit strong priors from image and video diffusion\. Yet in robotics, spatial computing, AR anchoring, and digital twins, a world is useful only if it can be measured and acted upon: appearance plausibility cannot substitute for geometrically coherent structure\. This motivates a geometry\-native alternative, where the generative state is the feature space of a geometry foundation model rather than RGB pixels or an appearance latent\. Existing geometry\-space world models validate this direction, but they still occupy a narrow operating range\. When target views lie within observed support, full multi\-view interaction limits trajectory length; when observations become sparse, geometry\-only training lacks the broad visual priors needed to infer structure beyond observed support\. We present GeoWorld, a geometry\-latent world model that expands this range without returning generation to RGB space\. GeoWorld builds a compact geometry latent, conditions it with camera ray geometry, and uses camera\-aware tiered attention with relative pose bias to make long\-view denoising practical\. For sparse\-observation extrapolation, a Bridge module translates hidden states from a frozen camera\-conditioned video diffusion model into geometry\-latent conditioning, borrowing video priors without making the video model the scene generator\. Experiments show that GeoWorld scales geometry\-space diffusion to long camera trajectories while improving geometric consistency in prior\-assisted extrapolation\.

## PickMoment: Continuous\-Time Single\-Image\-to\-Video via Learning Deblurring and Blur\-to\-Video

**Authors:** Junseong Shin; Hyeonsu Jo; Daehyun Kim; Tae Hyun Kim

**ID:** 153056\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153056

[Paper](<https://openreview.net/forum?id=OLVcmhgg5O>) | [PDF](<https://openreview.net/pdf?id=OLVcmhgg5O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153056>)

Motion blur arises from the temporal integration of a continuous sharp signal over a finite exposure window, yet existing learning\-based methods sidestep this physical model and predict only the sharp signal itself: most single\-image deblurring methods recover a single frame at the exposure center, while blur\-to\-video methods predict a fixed set of frames\.  We introduce PickMoment, a continuous\-time reformulation that directly learns the interval\-mean blur over arbitrary sub\-intervals of the exposure with a single deterministic model\.  Drawing an analogy to MeanFlow's average\-velocity formulation, we train the model with three supervisions derived from the blur integral: an empirical reconstruction loss from available subframes, an additivity loss that enforces self\-consistency across overlapping sub\-intervals, and a sharp\-frame loss anchored at the zero\-interval limit\.  A single trained model unifies single\-image deblurring, blur\-to\-video generation, and continuous\-time pick\-a\-moment recovery as different queries to the same network, with no separate training for each task\.  Our PickMoment achieves state\-of\-the\-art performance among generative\-based deblurring methods on GoPro and HIDE while competitive against restoration\-based methods on RealBlur, and the highest per\-frame fidelity on GoPro\-7 blur\-to\-video, all in a single forward pass without iterative sampling\.

## ReFlex: Faithful Panorama Reconstruction from a Single Image with Reflections

**Authors:** Yikai Pan; Zhiyuan Zhou; Yuxiang Yan; Xuetong Yang; Runhe Yang; Jian Pu

**ID:** 151635\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151635

[Paper](<https://openreview.net/forum?id=Z78l73Ay0q>) | [PDF](<https://openreview.net/pdf?id=Z78l73Ay0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151635>)

Reflections reveal scene content beyond the camera's direct field of view, but faithfully recovering this hidden information is challenging as reflective observations are heterogeneous, incomplete, and physically modulated\. Existing methods either rely on explicit reflection modeling with privileged geometric priors or defer to generative synthesis that may hallucinate plausible but unfaithful content\. To address these challenges, we propose \\textbf\{ReFlex\}, an observation\-constrained framework that casts faithful panorama reconstruction as a controlled inverse problem\. We first develop an \\emph\{Observation\-Consistent Estimator\} with hierarchical token prediction and signed routing to integrate heterogeneous reflection cues while stabilizing global structure\. Subsequently, we propose a \\emph\{Reliability\-Guided Refiner\}, which estimates spatial reliability from token predictions and guides a frozen diffusion model to refine uncertain regions without overwriting observation\-supported structures\. To validate the effectiveness of ReFlex, we further build ReFlex\-Bench, a paired benchmark with 110,760 reflective RGB inputs and aligned target panoramas across diverse scenes, reflective geometries, and observation regimes\. Experiments show that ReFlex delivers superior reconstruction fidelity without normals, field\-of\-view annotations, masks, or other privileged information, and obtains the best performance on eight of nine downstream full\-view perception protocols\.

## Skipping Domain Shifts: Domain Memory Retention Enhanced Hyperspectral Single\-Source Domain Generalization

**Authors:** Taiqin Chen; Hao Sha; Xiaochen Feng; Chunyu Chen; XiangYu Chen; Ke Chen; yongbing zhang

**ID:** 148267\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148267

[Paper](<https://openreview.net/forum?id=z7Qi9Npr3f>) | [PDF](<https://openreview.net/pdf?id=z7Qi9Npr3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148267>)

Hyperspectral single\-source domain generalization aims to train a robust model capable of overcoming domain shifts using only one available source domain for cross\-scene hyperspectral image \(HSI\) analysis\. Existing methods typically adopt data augmentation to broaden decision boundaries or utilize style transfer techniques for test\-time alignment\. However, these studies either fail to completely bridge the domain gap or inadvertently disrupt the discriminative spectral information, leading to suboptimal generalization and degraded classification performance on the target domain\. To overcome these limitations, we propose a novel method, termed the domain memory retention framework, which optimizes domain memory during training to explicitly encode the semantic structure of the source domain\. During inference, the target features are projected to the source distribution by leveraging this memory, thereby skipping domain shifts and improving generalization performance across unseen scenes\. Specifically, the memory is formulated as a codebook, consisting of multiple semantic codewords\. We further develop a semantic richness constraint and a perturbation robustness constraint to enhance representation diversity while empowering domain invariance for the memory\. Extensive experiments conducted on three remote sensing datasets demonstrate that the proposed method outperforms state\-of\-the\-art methods\.

## Learning Motion\-Appearance Coupling Priors for Solving Video Inverse Problems

**Authors:** Anselm Krainovic; Reinhard Heckel

**ID:** 149636 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=obAMFSJZhW>) | [PDF](<https://openreview.net/pdf?id=obAMFSJZhW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149636>)

_Abstract unavailable from the accessible public sources._

## The Surprising Effectiveness of Video Diffusion Models for Hand Motion Reconstruction

**Authors:** Yuxi Wang; Chengkai Jin; Yufei Liu; Wenqi Ouyang; Tianyi Wei; Zhiwei Zeng; Siyuan Huang; Zhiqi Shen; Xingang Pan

**ID:** 149266 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rbIH0DXMsW>) | [PDF](<https://openreview.net/pdf?id=rbIH0DXMsW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149266>)

_Abstract unavailable from the accessible public sources._

## ResFusion: Medical Image Fusion Driven by Implicit\-Forward Diffusion and Time\-aware Joint Optimization

**Authors:** Jiahua Xu; Dawei Zhou; Zhengkun Yu; Lei Hu; Lecong Xiong; Zaiyi Liu; Nannan Wang; Xinbo Gao

**ID:** 152030 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W44dmCYl89>) | [PDF](<https://openreview.net/pdf?id=W44dmCYl89>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152030>)

_Abstract unavailable from the accessible public sources._

## A Training\-Free Video Moment Retrieval Framework via Selection from Multiple Visual Prompts

**Authors:** Xun Mo; Shengtao Guo; Yongwei Nie; Fei Ma; Xuemiao Xu; Chengjiang Long

**ID:** 149512 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=paLWDpXw1a>) | [PDF](<https://openreview.net/pdf?id=paLWDpXw1a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149512>)

_Abstract unavailable from the accessible public sources._

## OptiWorld: Optimal Control for Video World Generation under Physical Constraints

**Authors:** Yu Yuan; Jianhao Yuan; Xijun Wang; Daiqing Li; Liu He; Lu Ling; Stanley Chan

**ID:** 154299\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154299

[Paper](<https://openreview.net/forum?id=ElToIAx2OM>) | [PDF](<https://openreview.net/pdf?id=ElToIAx2OM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154299>)

_Abstract unavailable from the accessible public sources._

## SyncWorld: Visual Calibration Enables World Models as Zero\-Shot Simulators

**Authors:** Yuncong Yang; Zhengtao Han; Furkan Ozyurt; Zeyuan Yang; Han Yang; Junyi Cao; Haoyu Zhen; Yilun Du; Chuang Gan

**ID:** 149981\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149981

[Paper](<https://openreview.net/forum?id=lj7OHtUYX1>) | [PDF](<https://openreview.net/pdf?id=lj7OHtUYX1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149981>)

World models are increasingly used as policy\-in\-the\-loop imagination environments, where reliable rollouts require fine\-grained controllability with respect to low\-level robot actions\. A key obstacle to scaling such models in robotics is that actions are not a universal language in pixel space: changes in visual environment, camera view, robot placement, or embodiment alter how the same numerical action manifests visually, leading to conflicting supervision under mixed training and brittle generalization at deployment\. We introduce SyncWorld, an action\-conditioned world model that serves as a zero\-shot simulator across unseen environments without any additional training\. SyncWorld leverages a visual calibration episode\-\-\-paired frames and actions that showcase all the controllable degrees of freedom\-\-\-to specify the setup\-specific Action\-\-Visual Mapping in context\. Training with visual calibration contexts teaches the model to interpret actions through visual evidence and to leverage interaction history when explicit calibration is unavailable\. Experiments show that SyncWorld can accurately simulate action outcomes in previously unseen settings, and that its capability of simulating rollouts enables test\-time policy improvement without training\.

## LiFi: LiDAR Generation from Multi\-View Images via Geometric and Semantic Collaborative Guidance

**Authors:** Sizhuo Zhou; Xiaosong Jia; Fanrui Zhang; Qifeng Li; Junjie Li; Zirui Wang; Yukang Feng; Yu Hong; Shaofeng Zhang; Wenlong Liao; Tao He; Juyong Zhang; Junchi Yan

**ID:** 154275\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154275

[Paper](<https://openreview.net/forum?id=F2uVwqvVoZ>) | [PDF](<https://openreview.net/pdf?id=F2uVwqvVoZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154275>)

Generating LiDAR point clouds from multi\-view camera images is a valuable task with applications in controllable data synthesis, cross\-modal simulation and various perception tasks\. However, most existing methods are not specifically designed for this task, and the quality of their generated LiDAR remains limited\. Moreover, these methods typically focus only on semantic cues in images or generate LiDAR from a monocular camera image\. In this work, we introduce LiFi, a dedicated framework for generating visually and geometrically aligned LiDAR scenes from multi\-view camera images\. LiFi guides the latent diffusion process through two complementary branches: geometry and semantics\. The geometry branch constructs scene features from images through a reverse sampling algorithm and an uncertainty\-aware geometric encoder combined with DepthAnything3, whereas the semantic branch provides high\-level semantic representations via a cross\-view interaction module\. We further introduce a dual\-branch balanced classifier\-free guidance \(CFG\) strategy, which enhances the model’s conditional generation capability while preserving the independent learning and collaborative controllability of the two branches\. Extensive experiments demonstrate that LiFi outperforms state\-of\-the\-art methods in generating high\-fidelity LiDAR scenes\. We will make this project publicly available\.

## Going Down Memory Lane: Scaling Tokens for Video Stream Understanding with Dynamic KV\-Cache Memory

**Authors:** Vatsal Agarwal; Saksham Suri; Matthew Gwilliam; Pulkit Kumar; Abhinav Shrivastava

**ID:** 148735\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148735

[Paper](<https://openreview.net/forum?id=vRUJgq7mDv>) | [PDF](<https://openreview.net/pdf?id=vRUJgq7mDv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148735>)

Online video understanding requires models to robustly encode, store, and retrieve information from a continuous stream to support accurate question answering\. Existing approaches rely on key\-\-value caching to accumulate frame\-level representations over time, but allocate only a limited token budget per frame, causing loss of fine\-grained visual detail\. We find that naively scaling this budget degrades retrieval quality and question\-answering performance, as denser token streams introduce redundancy that disrupts query\-\-frame similarity\. To address this, we first introduce an adaptive selection strategy that reduces token redundancy while preserving local spatiotemporal information\. Second, we propose a training\-free retrieval ensemble that leverages external models to better identify relevant frames\. Our method, \\textbf\{MemStream\}, achieves \+8\.0\\% on CG\-Bench, \+8\.5\\% on LVBench, and \+2\.4\\% on VideoMME \(Long\) over ReKV with Qwen2\.5\-VL\-7B\. Furthermore, we show that MemStream consistently improves performance across several Video\-LLMs for long\-video understanding\.

## Learning a Task\-Adaptive Low\-Dimensional Semantic Space for Improved Visual Classification

**Authors:** Nikalal Helessage; Wanqing Li; Chris Bunn; Philip O Ogunbona

**ID:** 151661 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Yzl6jqkOM4>) | [PDF](<https://openreview.net/pdf?id=Yzl6jqkOM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151661>)

Semantic visual classification commonly aligns visual embeddings with semantic spaces induced by pretrained text encoders\. However, such spaces are typically high\-dimensional, weakly aligned with visual feature geometry, and insufficiently discriminative for downstream classification tasks\. We propose TaSS, a framework for learning a task\-adaptive low\-dimensional semantic space that preserves semantic structure while explicitly optimizing class separability\. TaSS is constructed through a parameterized geometry transformation of pretrained text embeddings that enlarges inter\-class margins via distance reshaping and improves intra\-class compactness through prototype\-preserving semantic constraints\. The resulting semantic space maintains meaningful semantic relationships while producing a discriminative geometry tailored for classification\. Frozen visual encoder features are subsequently aligned to TaSS using a lightweight MLP, enabling improved discriminative learning without fine\-tuning pretrained backbones\. We further provide theoretical analysis showing that TaSS preserves semantic consistency while enforcing enhanced inter\-class separation and controlled intra\-class variance\. Extensive experiments on skeleton\-based human action recognition, video classification, and image classification benchmarks demonstrate consistent improvements over existing semantic alignment approaches, with gains exceeding 3 percentage points on average and up to 8\.5 points on challenging datasets\.

## TACO: Towards Task\-Consistent Open\-Vocabulary Adaptation in Video Recognition

**Authors:** Minghao Zhu; Xiao Lin; Mengxian Hu; Xun Zhou; Liuyi Wang; Xiaoyan Qi; Chengju Liu; Qijun Chen

**ID:** 154934 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9qHLzDW8KJ>) | [PDF](<https://openreview.net/pdf?id=9qHLzDW8KJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154934>)

_Abstract unavailable from the accessible public sources._

## Harnessing Image Diffusion Prior for Photo\-Realistic Video Restoration

**Authors:** Fanghua Yu; Hongyu An; Jinfan Hu; Xinqi Lin; Zhiyuan You; Jian Wang; Hongyang Li; Chao Dong; Jinjin Gu

**ID:** 151124 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=conEYoQsmd>) | [PDF](<https://openreview.net/pdf?id=conEYoQsmd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151124>)

_Abstract unavailable from the accessible public sources._

## LSVD: Loss\-Aware Low\-Rank Approximation for Efficient Low\-Precision Vision\-Language Models

**Authors:** Haiyu Wang; Yutong Wang; Leshu Li; Yihui Ren; Sai Qian Zhang

**ID:** 153335 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M4tqmEOVbT>) | [PDF](<https://openreview.net/pdf?id=M4tqmEOVbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153335>)

_Abstract unavailable from the accessible public sources._

## UTOPI: Efficient Egocentric Long\-Video Understanding in AR via User\-Guided Token Pre\-Compression

**Authors:** ziqi wang; Su Chen; Qiance Tang; Jieyu Lin; Ziyun Li; Barbara De Salvo; Sai Qian Zhang

**ID:** 153858 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ICcMtlCHJL>) | [PDF](<https://openreview.net/pdf?id=ICcMtlCHJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153858>)

_Abstract unavailable from the accessible public sources._

## RegimeVGGT: Layer\-Wise Spatially Preserving Redundancy Removal for Visual Geometry Grounded Transformer

**Authors:** Shuo Lyu; Jinhao You; Zhuohang Lyu; Tanxuan Li; Zibo Zhao; Jiaxiang Hu; Kai Tang; Yichen Guo

**ID:** 155954\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155954

[Paper](<https://openreview.net/forum?id=1a4VUxz0sm>) | [PDF](<https://openreview.net/pdf?id=1a4VUxz0sm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155954>)

Visual Geometry Grounded Transformer \(VGGT\) recovers dense 3D scene structure from multi\-view images in one forward pass, but quadratic cross\-frame attention limits its scalability\. Existing training\-free accelerators reduce computation uniformly along one axis, missing layer heterogeneity\. Our spectral, probing, and causal analyses reveal three regimes: shallow layers lack cross\-view structure, middle layers drive cross\-view alignment, and deep layers are redundant for dense geometry yet their cross\-frame attention remains essential for pose\. RegimeVGGT applies layer\-wise U\-shaped compression along two axes: Saliency\-Guided Banded Merging protects geometry\- and edge\-salient tokens, while Selectively Protected K/V Downsampling preserves cross\-frame spatial coverage and the pose\-critical path through a phase\-shifted spatial grid, a reference\-frame anchor, and uncompressed camera/register tokens\. Training\-free, RegimeVGGT achieves a $6\.7\\times$ speedup over VGGT\* at matched reconstruction quality\. Code: \\url\{https://anonymous\.4open\.science/status/RegimeVGGT\-9477\}

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

## MEMEVO: A Memory\-Evolved Video Agent for Long Video Understanding

**Authors:** Yuan Wang; Yake Wei; Tianrun Xu; Fengyun Rao; Jing LYU; Xuetao Feng; Yifan Sun

**ID:** 156021 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1666VmXNqJ>) | [PDF](<https://openreview.net/pdf?id=1666VmXNqJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156021>)

Agent\-based frameworks grounded in vision\-language models \(VLMs\) have emerged as a dominant paradigm for long video understanding\. Yet, prevailing agents lack the core capacity for \\textit\{dynamic memory evolution\}, failing to transform ephemeral perceptions into a continuously growing, adaptive knowledge system and thus inducing inefficient redundant exploration during reasoning\. To this end, we present MEMEVO, an online Memory\-Evolved Video Agent framework centered on \\textit\{dynamic memory evolution\} that leverages accumulating multi\-turn queries to actively drive progressive memory evolution, establishing a long\-lived memory system for knowledge accumulation\. Central to MEMEVO is a four\-level Hierarchical Self\-Evolved Memory, which constructs memory bottom\-up via progressive abstraction, distilling transient perceptions into reusable, query\-agnostic event nodes organized within a temporal\-semantic graph, while realizing active memory evolution through event insertion, duplicate merging, and redundant pruning\. To mitigate redundant retrieval in the evolved memory, we devise a State\-Conditioned Graph Memory Retrieval mechanism that guides efficient navigation of the memory space, integrating State\-Conditioned Graph Routing and Meta\-Cognitive Stopping criteria to ensure sufficient evidence acquisition without re\-exploration\. Extensive benchmarking confirms that MEMEVO achieves state\-of\-the\-art performance on reasoning\-intensive tasks \(\\textbf\{\\textcolor\[HTML\]\{00FF00\}\{\+6\.1\\%\}\} VideoMMMU, \\textbf\{\\textcolor\[HTML\]\{00FF00\}\{\+4\.8\\%\}\} LongVideoBench\), while facilitating \\textit\{cross\-query knowledge reuse\} and \\textit\{cross\-model generalization\}\.

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

## Do Pathology Foundation Models Encode Disease Progression? A Pseudotime Analysis of Visual Representations

**Authors:** Pritika Vig; Renchin Wu; William Lotter

**ID:** 151068 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dCbetXpnpa>) | [PDF](<https://openreview.net/pdf?id=dCbetXpnpa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151068>)

Vision foundation models trained on discretely sampled images achieve strong performance on classification benchmarks, yet whether their representations encode the continuous processes underlying their training data remains unclear\. This question is especially pertinent in computational pathology, where we posit that models whose latent representations implicitly capture continuous disease progression may better reflect underlying biology, support more robust generalization, and enable quantitative analyses of features associated with disease transitions\. Using diffusion pseudotime, a method developed to infer developmental trajectories from single\-cell transcriptomics, we probe whether foundation models organize disease states along coherent progression directions in representation space\. Across four cancer progressions and six models, we find that all pathology\-specific models recover trajectory orderings significantly exceeding null baselines, with vision\-only models achieving the highest fidelities \($\\tau &gt; 0\.78$ on CRC\-Serrated\)\. Model rankings by trajectory fidelity on reference diseases strongly predict few\-shot classification performance on held\-out diseases \($\\rho = 0\.92$\), and exploratory analysis shows cell\-type composition varies smoothly along inferred trajectories in patterns consistent with known stromal remodeling\. Together, these results demonstrate that vision foundation models can implicitly learn to represent continuous processes from independent static observations, and that trajectory fidelity provides a complementary measure of representation quality beyond downstream performance\. While demonstrated in pathology, this framework could be applied to other domains where continuous processes are observed through static snapshots\.

## Thinking with Visual Primitives

**Authors:** Ruijie Lu; Yiyang Ma; Xiaokang Chen; Lingxiao Luo; Zhiyu Wu; Zizheng Pan; Ting Chen; Gang Zeng

**ID:** 154630 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CA9dsXjWGT>) | [PDF](<https://openreview.net/pdf?id=CA9dsXjWGT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154630>)

_Abstract unavailable from the accessible public sources._

## Diagnosing and Correcting Bias in MLLM for Long Video Understanding

**Authors:** Xusheng Liang; Jianqiao Sun; Hao Zhang; Yulei Niu; Hengshuang Zhao; Jiawei Ma

**ID:** 154288 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EtgXlsMo0V>) | [PDF](<https://openreview.net/pdf?id=EtgXlsMo0V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154288>)

_Abstract unavailable from the accessible public sources._

## Early Failure Detection and Intervention in Video Diffusion Models

**Authors:** Byungki Kwon; Sohwi Lim; Nam Hyeon\-Woo; Moon Ye\-Bin; Tae\-Hyun Oh

**ID:** 151719 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbCJPGk7pI>) | [PDF](<https://openreview.net/pdf?id=YbCJPGk7pI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151719>)

_Abstract unavailable from the accessible public sources._

## Noise\-Regularized Training for Learned Image Compression

**Authors:** Renjie Zou; Zhiwei Huang; Dong Jiang

**ID:** 152186 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UuyALisAVj>) | [PDF](<https://openreview.net/pdf?id=UuyALisAVj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152186>)

_Abstract unavailable from the accessible public sources._

## PercepCap: Video Captioner with Structured Spatio\-Temporal Perception

**Authors:** Yifan Xu; Wang Zihao; Zhixiao Wang; Jiaming Zhang; Yichun Yang; Desen Meng; Yuanxing Zhang; Pengfei Wan; Limin Wang

**ID:** 150126 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kU5dBalt2j>) | [PDF](<https://openreview.net/pdf?id=kU5dBalt2j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150126>)

_Abstract unavailable from the accessible public sources._

## Oracle Supervision Transfers for Hyperparameter Prediction in Model\-Based Image Denoising

**Authors:** Jianmin Liao; Lixin Shen; Yuesheng Xu

**ID:** 148723 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vXGWG7Z20k>) | [PDF](<https://openreview.net/pdf?id=vXGWG7Z20k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148723>)

_Abstract unavailable from the accessible public sources._

## Hypernetworks for Dynamic Feature Selection

**Authors:** Javier Fumanal Idocin; Raquel Fernandez\-Peralta; Javier Andreu\-Perez

**ID:** 154296 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Emiobo4BDW>) | [PDF](<https://openreview.net/pdf?id=Emiobo4BDW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154296>)

Dynamic feature selection \(DFS\) is a machine learning framework in which features are acquired sequentially for individual samples under budget constraints\. The exponential growth in the number of possible feature acquisition paths forces a DFS model to balance fitting specific scenarios against maintaining general performance, even when the feature space is moderate in size\. In this paper, we study the structural limitations of existing DFS approaches to achieve an optimal solution\. Then, we propose \\textsc\{Hyper\-DFS\}, a hypernetwork\-based DFS approach that generates feature subset\-specific classifier parameters on demand\. We show that the use of hypernetworks compared to mask\-embedding methods results in a smaller structural complexity bound\. We also use a Set Transformer encoding to create a smooth conditioning space for the hypernetwork, so that functionally similar tasks are also geometrically close\. In our benchmarks, \\textsc\{Hyper\-DFS\} outperforms all state\-of\-the\-art approaches on synthetic and real\-life tabular data\. It is also competitive or superior across all image datasets tested, and shows substantially stronger zero\-shot generalisation to feature subsets never seen during training than existing DFS approaches\.

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

## InstructVVT: Instruction\-Driven Video Virtual Try\-On without Auxiliary Spatial Priors

**Authors:** Dingbao Shao; Song Wu; Xinyu Chen; Qian Wang; Jiahang Li; Kuai Jiang; Jiang Lin; Yuhang Liu; Chen Ziyu; Duo Li; Hu Jiaxin; Shengrong Gu; Ziheng Tang; Liu Rongrong; Yanlun Peng; Liang Li; Junlan Feng; Lujia Jin; Ting Zhang; Jian Yang; Zili Yi

**ID:** 149716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nxlHQt3QrN>) | [PDF](<https://openreview.net/pdf?id=nxlHQt3QrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149716>)

Video virtual try\-on is a highly constrained editing task requiring the precise replacement of a target person's clothing while strictly preserving the original video's spatial structure and temporal dynamics\. Existing methods heavily rely on auxiliary handcrafted spatial priors \(e\.g\., masks, poses\) for editing control\. However, these priors are prone to failure in unconstrained real\-world videos and often compress rich visual context into incomplete structural signals\. Furthermore, standard reconstruction objectives fail to fully capture try\-on\-specific human preferences\. To address these challenges, we propose InstructVVT, an instruction\-driven and reference\-guided video virtual try\-on framework based on a Diffusion Transformer \(DiT\) that operates without inference\-time spatial priors\. Our core insight is to recover fine\-grained control directly from the input triplet \(source video, reference garment, and instruction\) via a dual\-level reference conditioning scheme\. Specifically, an MLLM infers semantic edit tokens for target disambiguation and structural preservation, while a lightweight conditioning pathway explicitly injects fine\-grained visual garment details\. Finally, we design a try\-on\-specific reward and utilize the DiffusionNFT algorithm to align the model with human preferences\.  Extensive experiments on ViViD\-S and TripVVT\-Bench demonstrate that InstructVVT outperforms state\-of\-the\-art open\-source methods in garment fidelity, structural preservation, and temporal consistency, despite requiring fewer inference\-time controls\.

## FrameSelect: A Unified Library for Video Frame Selection and Evaluation

**Authors:** Arihant Jain; Chaosheng Dong

**ID:** 139258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=blSpUkSwiB>) | [PDF](<https://openreview.net/pdf?id=blSpUkSwiB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139258>)

Frame selection\-\-\-picking a small set of informative frames from a video to feed a vision\-language model \(VLM\)\-\-\-sits at the front of every video\-VLM system, yet the literature is fragmented: most works do not share a candidate pool, encoder, frame budget, or answering VLM, making published gains hard to compare across works\. We introduce FrameSelect, to the best of our knowledge the first Python library that treats the selector as a standalone, interchangeable component, cleanly separated from the encoder that computes representations and the VLM that answers\. Any registered selector composes with any registered evaluator through a single call, and adding a new selector, dataset, encoder, or VLM backend is an isolated extension; a replay mode further rebuilds any table under a different answering VLM without re\-running selection\. We release reference implementations of 20 selectors, 15 evaluators spanning answer\-level and selection\-level metrics, and the first unified benchmark comparing frame selectors under a shared protocol across seven evaluators spanning both evaluation modes\. This comparison surfaces findings that existing studies cannot: rankings invert across benchmarks\. Our library is available at https://anonymous\.4open\.science/r/FrameSelect\-D2A4\.

## Evaluating Depth and Breadth in Test\-Time Scaling for Compositional Visual Generation

**Authors:** Shantanu Jaiswal; Mihir Prabhudesai; Nikash Bhardwaj; Zheyang Qin; Amir Zadeh; Chuan Li; Katerina Fragkiadaki; Deepak Pathak

**ID:** 139290 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZA59XMPrcN>) | [PDF](<https://openreview.net/pdf?id=ZA59XMPrcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139290>)

Test\-time scaling is increasingly used to improve visual generation, yet it remains unclear how different scaling strategies should be evaluated when they trade off accuracy, latency, throughput, compute cost, and visual quality in different ways\. We study this question through a systematic comparison of prominent test\-time strategies including sampler\-depth scaling, breadth\-oriented parallel sampling, step\-by\-step construction, iterative refinement, and hybrid breadth\-\-depth for compositional text\-to\-image generation\. Our results show that the preferred strategy depends on prompt complexity and cost assumptions: parallel sampling remains competitive for simpler prompts and high\-throughput settings, while iterative refinement becomes increasingly useful as prompts require more object, spatial, numeric, and relational bindings\. Surprisingly, step\-by\-step generation does not consistently inherit the benefits of step\-by\-step reasoning in language models, since early visual decisions about field of view, layout, scale, and resolution can constrain later edits\. Across fixed budgets, hybrid policies often provide the strongest accuracy\-\-cost tradeoff by combining parallel exploration with sequential correction\. Finally, we show that refinement\-based scaling is bottlenecked by verifier and editor reliability, and that adaptive routing can recover much of the benefit of fixed hybrid policies at lower average cost\. Overall, our findings show that effective test\-time scaling depends on matching the policy to the prompt and deployment bottleneck: breadth supports exploration and throughput, depth supports semantic repair, and hybrid/adaptive policies offer the strongest tradeoff when compositional correctness is the priority\.

## SyncWorld: Visual Calibration Enables World Models as Zero\-Shot Simulators

**Authors:** Yuncong Yang; Zhengtao Han; Furkan Ozyurt; Zeyuan Yang; Han Yang; Junyi Cao; Haoyu Zhen; Yilun Du; Chuang Gan

**ID:** 149981\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149981

[Paper](<https://openreview.net/forum?id=lj7OHtUYX1>) | [PDF](<https://openreview.net/pdf?id=lj7OHtUYX1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149981>)

World models are increasingly used as policy\-in\-the\-loop imagination environments, where reliable rollouts require fine\-grained controllability with respect to low\-level robot actions\. A key obstacle to scaling such models in robotics is that actions are not a universal language in pixel space: changes in visual environment, camera view, robot placement, or embodiment alter how the same numerical action manifests visually, leading to conflicting supervision under mixed training and brittle generalization at deployment\. We introduce SyncWorld, an action\-conditioned world model that serves as a zero\-shot simulator across unseen environments without any additional training\. SyncWorld leverages a visual calibration episode\-\-\-paired frames and actions that showcase all the controllable degrees of freedom\-\-\-to specify the setup\-specific Action\-\-Visual Mapping in context\. Training with visual calibration contexts teaches the model to interpret actions through visual evidence and to leverage interaction history when explicit calibration is unavailable\. Experiments show that SyncWorld can accurately simulate action outcomes in previously unseen settings, and that its capability of simulating rollouts enables test\-time policy improvement without training\.

## LiFi: LiDAR Generation from Multi\-View Images via Geometric and Semantic Collaborative Guidance

**Authors:** Sizhuo Zhou; Xiaosong Jia; Fanrui Zhang; Qifeng Li; Junjie Li; Zirui Wang; Yukang Feng; Yu Hong; Shaofeng Zhang; Wenlong Liao; Tao He; Juyong Zhang; Junchi Yan

**ID:** 154275\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154275

[Paper](<https://openreview.net/forum?id=F2uVwqvVoZ>) | [PDF](<https://openreview.net/pdf?id=F2uVwqvVoZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154275>)

Generating LiDAR point clouds from multi\-view camera images is a valuable task with applications in controllable data synthesis, cross\-modal simulation and various perception tasks\. However, most existing methods are not specifically designed for this task, and the quality of their generated LiDAR remains limited\. Moreover, these methods typically focus only on semantic cues in images or generate LiDAR from a monocular camera image\. In this work, we introduce LiFi, a dedicated framework for generating visually and geometrically aligned LiDAR scenes from multi\-view camera images\. LiFi guides the latent diffusion process through two complementary branches: geometry and semantics\. The geometry branch constructs scene features from images through a reverse sampling algorithm and an uncertainty\-aware geometric encoder combined with DepthAnything3, whereas the semantic branch provides high\-level semantic representations via a cross\-view interaction module\. We further introduce a dual\-branch balanced classifier\-free guidance \(CFG\) strategy, which enhances the model’s conditional generation capability while preserving the independent learning and collaborative controllability of the two branches\. Extensive experiments demonstrate that LiFi outperforms state\-of\-the\-art methods in generating high\-fidelity LiDAR scenes\. We will make this project publicly available\.

## Going Down Memory Lane: Scaling Tokens for Video Stream Understanding with Dynamic KV\-Cache Memory

**Authors:** Vatsal Agarwal; Saksham Suri; Matthew Gwilliam; Pulkit Kumar; Abhinav Shrivastava

**ID:** 148735\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148735

[Paper](<https://openreview.net/forum?id=vRUJgq7mDv>) | [PDF](<https://openreview.net/pdf?id=vRUJgq7mDv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148735>)

Online video understanding requires models to robustly encode, store, and retrieve information from a continuous stream to support accurate question answering\. Existing approaches rely on key\-\-value caching to accumulate frame\-level representations over time, but allocate only a limited token budget per frame, causing loss of fine\-grained visual detail\. We find that naively scaling this budget degrades retrieval quality and question\-answering performance, as denser token streams introduce redundancy that disrupts query\-\-frame similarity\. To address this, we first introduce an adaptive selection strategy that reduces token redundancy while preserving local spatiotemporal information\. Second, we propose a training\-free retrieval ensemble that leverages external models to better identify relevant frames\. Our method, \\textbf\{MemStream\}, achieves \+8\.0\\% on CG\-Bench, \+8\.5\\% on LVBench, and \+2\.4\\% on VideoMME \(Long\) over ReKV with Qwen2\.5\-VL\-7B\. Furthermore, we show that MemStream consistently improves performance across several Video\-LLMs for long\-video understanding\.

## PaperLens: How Predictable Is Paper Acceptance?

**Authors:** Sachin Konan; Jonathan Liu; Zhuang Liu

**ID:** 154867\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154867

[Paper](<https://openreview.net/forum?id=AJ2gyvFOF9>) | [PDF](<https://openreview.net/pdf?id=AJ2gyvFOF9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154867>)

Peer review is sometimes seen as noisy and difficult to predict\. How much of the final accept/reject decision is recoverable from the paper itself? We investigate this question with PaperLens, text and vision models trained to predict binary acceptance from anonymized paper artifacts\. For a clean evaluation, we construct balanced, shortcut\-controlled OpenReview and source\-derived arXiv datasets that remove deanonymization artifacts and majority\-class shortcuts\. Supervised binary decision training is surprisingly strong\. PaperLens outperforms frontier prompting and review\-trained baselines on decision accuracy and ranking, while its acceptance probability remains well calibrated after validation\-set scaling and correlates better to ratings than baselines\. Vision consistently improves over markdown text, showing that layout, figures, and visual presentation carry reviewer\-relevant signal\. Scaling from 3B to 14B parameters yields only modest gains, with clean supervision and faithful paper representations mattering more than model size\. Together, our results show that decision prediction provides a powerful signal for paper assessment and can even improve the alignment of AI reviewing agents\.

## Bernini: Latent Semantic Planning for Video Diffusion

**Authors:** Chenchen Liu; Junyi Chen; Lei Li; Lu Chi; Mingzhen Sun; Zhuoying Li; Yi Fu; Ruoyu Guo; Yiheng Wu; Ge Bai; Zehuan Yuan

**ID:** 154106\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154106

[Paper](<https://openreview.net/forum?id=GDdIbzbPVF>) | [PDF](<https://openreview.net/pdf?id=GDdIbzbPVF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154106>)

Multimodal large language models \(MLLMs\) and diffusion models have each reached remarkable maturity: MLLMs excel at reasoning over heterogeneous multimodal inputs with strong semantic grounding, while diffusion models synthesize images and videos with photorealistic fidelity\. We argue that these two families can be unified through a simple division of labor: MLLMs perform semantic planning, while diffusion models render pixels from high\-level semantic guidance and low\-level visual features\. Building on this idea, we propose \\textbf\{Bernini\}, a unified framework for video generation and editing\. An MLLM\-based \\textbf\{planner\} predicts the target semantic representation directly in the ViT embedding space, and a DiT\-based \\textbf\{renderer\} synthesizes pixels conditioned on this plan, augmented by text features and, for editing, source VAE features for detail preservation\. Because semantics serve as the interface, the planner and renderer can be trained separately and only lightly co\-trained, preserving the pretrained strengths of both components while keeping training efficient\. To better handle multiple visual inputs, we introduce Segment\-Aware 3D Rotary Positional Embedding \(SA\-3D RoPE\), and further incorporate chain\-of\-thought reasoning in the planner to better transfer understanding into generation\. Bernini achieves state\-of\-the\-art performance across a wide range of video generation and editing benchmarks, with the MLLM's pretrained understanding translating into strong generalization on challenging editing tasks\.

## Measuring Robustness and Efficiency in a Connectome\-Constrained Fly Visual System Model on a Collision\-Detection Task

**Authors:** Alexandre Garcia\-Duran; Alejandro Rodriguez\-Garcia; Manuel Molano\-Mazon; Alexandre HYAFIL; Srikanth Ramaswamy; Janne K Lappalainen

**ID:** 149010\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149010

[Paper](<https://openreview.net/forum?id=tUtERl6Jq6>) | [PDF](<https://openreview.net/pdf?id=tUtERl6Jq6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149010>)

Biological visual systems compute reliably under tight metabolic and wiring constraints despite noisy inputs and stochastic circuit components\. Artificial vision systems tend to invert both properties: They consume vastly more energy and can be sensitive to adversarial perturbations\. Whether artificial networks with structural properties of real brain wiring are more robust at lower computational cost is unclear\. We address this with FlyNet \(Lappalainen et al\. 2024\), a task\-optimized, continuous\-time neural network model of the fly visual system constrained by its synaptic connectome\. We benchmark it against CNN, RAFT \(Teed and Deng, 2020\), and a sparse continuous\-time recurrent neural network without connectome constraints \(CTRNN\) on a looming\-based collision\-detection task within a differentiable 3D rendering pipeline\. We find that FlyNet is more robust than CNN controls to flicker, unstructured noise, and motion jitter\. Compared with RAFT controls, FlyNet is more robust to flicker and motion jitter but less robust to all gradient\-based attacks\. Yet, FlyNet uses up to five orders of magnitude fewer FLOPs than RAFT, achieving higher robustness on common video corruptions at far lower cost\. FlyNet is less robust than CTRNN across all tested perturbations, suggesting that FlyNet's connectome constraints contribute to cost, not robustness\. To probe FlyNet's failure modes, we use counterfactual restoration: textures equally far from training as adversarial textures that recover correct classification also recover position and velocity representations, ruling out unfamiliar textures as the cause of failure\. Classical reverse\-phi illusions degrade the same downstream position and velocity readouts, suggesting that both perturbations may exploit similar computational vulnerabilities\. Together, these results show that FlyNet is robust for its computational cost on an ecologically important task, and indicate that different architectures specialized on the same task have specific robustness profiles across perturbation types\. Our differentiable pipeline enables computational tests of this hypothesis and generates targeted adversarial stimuli for in vivo experiments\.

## REVERSE: Reinforcing Evidence Verification and Search for Agentic Image Geolocation

**Authors:** Yong Li; Furong Jia; Dacheng Yin; KANG RONG; Fengyun Rao; Jing LYU; Fan Zhang

**ID:** 154894\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154894

[Paper](<https://openreview.net/forum?id=A8SzlxVSB9>) | [PDF](<https://openreview.net/pdf?id=A8SzlxVSB9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154894>)

Image geo\-localization aims to determine where a photograph was taken, a task that often requires more than recognizing visible landmarks\. Human experts typically solve it through an iterative workflow: they inspect informative regions, form location hypotheses, seek external evidence, and revise their judgments as new clues appear\. Existing methods only partially capture this process: direct prediction methods bypass evidence acquisition altogether, while retrieval\-augmented methods introduce external evidence but usually provide limited supervision on the intermediate decisions of where to search, how to query, and how to filter noisy results\. We present REVERSE, a framework that reinforces the interplay between evidence search and verification to enable multi\-turn agentic reasoning\. REVERSE teaches three intermediate decisions: where to look, what to query, and what evidence to trust\. To support this, we construct tool\-grounded trajectories with annotated region selections, search observations, and geo\-informative evidence labels, and introduce process rewards for visual grounding, query utility, and evidence discrimination\. An offline search cache makes retrieval observations stable and reusable during reinforcement learning, enabling dense supervision over noisy search results\. With a 4B model, REVERSE outperforms strong retrieval\-augmented baselines and rivals substantially larger models on Im2GPS3k and YFCC4k\.

## CA\-Judge: Teach Large Models to Judge Anomalies via Comparison for Video Anomaly Detection

**Authors:** He Huang; Zixuan Hu; Dongxiao Li; Zhaoyi Li; LINGYU DUAN

**ID:** 153516\-\-4 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153516

[Paper](<https://openreview.net/forum?id=Km1kogguK0>) | [PDF](<https://openreview.net/pdf?id=Km1kogguK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153516>)

Video anomaly detection \(VAD\) is critical for identifying safety risks in surveillance and autonomous systems\. Recent large\-model\-based VAD methods generate textual rationales and directly output anomaly scores\. However, mapping rich semantic descriptions and analysis directly to absolute scalar scores can be poorly grounded and inconsistent, leading to scores that are not well aligned with anomaly severity\. With the observation that for humans, it is usually easier to compare things than to rate things directly, we explore whether it also holds for large models in VAD by proposing \\textbf\{CA\-Judge\} \(\\textbf\{C\}omparative \\textbf\{A\}nomaly \\textbf\{Judge\}\), a training\-free framework that replaces direct scoring with comparative order inference\. CA\-Judge treats model\-perceived anomaly severity as a latent coordinate, constructs this coordinate from self\-comparisons among generated normal/anomalous reference events, and models how anomaly likelihood varies along this coordinate using the generated normal/anomalous reference identities\. At test time, CA\-Judge avoids exhaustive comparison by maintaining a posterior belief over query severity and selecting a few query\-\-reference comparisons by their expected information about the anomaly status\. The resulting comparison trace is aggregated under a Bradley\-\-Terry likelihood and read out through the learned severity\-\-anomaly association to produce the anomaly probability\. Without fine\-tuning or training data, CA\-Judge substantially improves over direct\-scoring baselines and surpasses prior training\-free state\-of\-the\-art methods on UCF\-Crime and XD\-Violence\.

## SEEK\-VAU: Towards Evidence\-Faithful Video Anomaly Understanding via Agentic Search

**Authors:** MINGHE WANG; Weijun Zeng; Dapeng Luo; Xinyue Wang; Nong Sang

**ID:** 152176\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152176

[Paper](<https://openreview.net/forum?id=UzdlnV0B2v>) | [PDF](<https://openreview.net/pdf?id=UzdlnV0B2v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152176>)

Most video anomaly understanding \(VAU\) systems still infer anomaly judgments from evidence collected in a feed\-forward way under predefined rules, typically sampled frames, or events clustered from such frames\. This protocol fails when the collected evidence is incomplete under imperfect predefined rules, because once reasoning begins the model can no longer search for the missing evidence\. We address this limitation with SEEK\-VAU, which reframes VAU as an agentic search\-and\-verify interaction protocol under a bounded search budget: instead of passively reasoning over pre\-collected evidence, the policy actively gathers evidence across the three stages of an anomaly event chain \(precursor, trigger, and aftermath\) and verifies its sufficiency before finalization, turning event\-chain completeness into an explicit design rather than an outcome of predefined rules\. Although search\-and\-verify spans multiple interaction turns, the bounded search budget caps both the per\-turn input tokens and the cumulative visual context, keeping inference efficient\. To make this behavior learnable, we introduce evidence\-faithful counterfactual verification \(EFCV\), which rewards selected evidence that remains supportive, compact, and necessary under counterfactual verification\. We further introduce SEEK\-Bench, featuring video\-level episodes with temporal interval annotations, semantic QA and event\-chain stage labels\. Together, SEEK\-VAU and SEEK\-Bench establish a strong foundation for evidence\-faithful and actively verifiable VAU\. The code and data will be released\.

## Q\-ARVD: Quantizing Autoregressive Video Diffusion Models

**Authors:** Siao Tang; Xinyin Ma; Gongfan Fang; Xingyi Yang; Xinchao Wang

**ID:** 152660\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152660

[Paper](<https://openreview.net/forum?id=RMJiMyWid7>) | [PDF](<https://openreview.net/pdf?id=RMJiMyWid7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152660>)

Autoregressive video diffusion models \(ARVDs\) have emerged as a promising architecture for streaming video generation, paving the way for real\-time interactive video generation and world modeling\. Despite their potential, the substantial inference cost of ARVDs remains a major obstacle to practical deployment, making model quantization a natural direction for improving efficiency\. However, quantization for ARVDs remains largely unexplored\. Our empirical analysis shows that directly applying existing quantization schemes developed for standard diffusion transformers to ARVDs leads to suboptimal performance, revealing quantization behaviors that differ from those observed in bidirectional diffusion models\. In this paper, we identify two critical challenges in quantizing ARVDs: \(C1\) Highly unbalanced frame\-wise quantization sensitivity\. Error accumulation during autoregressive generation can induce severely skewed quantization sensitivity across frames, following an exponential\-like decay pattern\. \(C2\) Prominent and heterogeneous outlier patterns in weights\. Weight distributions exhibit pronounced outlier channels, whose patterns vary substantially across layer types and block depths\. To address these issues, we propose Q\-ARVD, a novel framework for accurate ARVD quantization\. \(S1\) To tackle the highly unbalanced frame\-wise sensitivity, Q\-ARVD incorporates a final\-quality aware frame\-weighting mechanism into the quantization objective\. \(S2\) To prevent heterogeneous outliers from degrading performance, Q\-ARVD introduces an outlier\-aware adaptive dual\-scale quantization, which automatically detects the presence and quantity of outlier channels for an arbitrary layer, and isolates them to protect normal channels\. Extensive experiments on state\-of\-the\-art open\-source ARVDs \(i\.e\., self\-forcing and causal\-forcing\) demonstrate the superiority of Q\-ARVD\. Practical deployment of INT8 model shows 1\.30x speedup and 1\.97x model size reduction\.

## SIGMA: Semantic\-Difference Instruction\-Grounding Mask Annotator for Text\-Driven Image Manipulation Localization

**Authors:** Peiyu Zhuang; Jianquan Yang; Haodong Li; Zhuoying Cai; Ruitao Xie; Jishen Zeng; Baoying Chen; Jiwu Huang; XIAOCHUN CAO

**ID:** 151764\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151764

[Paper](<https://openreview.net/forum?id=YE3wLDLd1p>) | [PDF](<https://openreview.net/pdf?id=YE3wLDLd1p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151764>)

Text\-driven image editing has advanced rapidly, but reliably localizing these manipulations requires image manipulation localization \(IML\) models trained on large pixel\-annotated datasets, and there is still no low\-cost way to obtain such training data at scale\. We observe that these data already exist in disguise: public editing datasets contain millions of structurally identical $\\textit\{\(original, edited\)\}$ pairs to IML training samples, lacking only pixel\-level masks\. Recovering these masks automatically is non\-trivial: pixel differencing is overwhelmed by diffusion\-induced perturbations across all pixels, and instruction\-only grounding localizes only what the prompt describes, missing unintended editor side\-effects\. We propose $\\textbf\{SIGMA\}$ \($\\textbf\{S\}$emantic\-difference $\\textbf\{I\}$nstruction\-$\\textbf\{G\}$rounding $\\textbf\{M\}$ask $\\textbf\{A\}$nnotator\), which performs semantic\-feature differencing in a vision foundation backbone and injects an instruction\-derived spatial prior into this visual stream via bidirectional cross\-modal refinement, amplifying the difference signal at intended\-edit regions when the editor faithfully realizes user intent\. SIGMA is trained in two complementary stages: Stage I supervises on inpainting masks; Stage II closes the diffusion\-domain shift via VAE\-roundtrip noise calibration, EMA self\-training, and an edit\-noise disentanglement loss\. SIGMA outperforms existing automatic mask generators on five benchmarks \($\\textbf\{\+12\.20\\%\}$ F1, $\\textbf\{\+11\.16\\%\}$ IoU\)\. When applied to public editing corpora, it produces a $\\sim$1\.1M IML training set that improves six diverse detectors by $\\textbf\{\+18\.34\\%\}$ F1 across five datasets, turning previously unused editing data into a model\-agnostic supervisory resource for IML\. For reproducibility, our anonymized code is available at https://anonymous\.4open\.science/r/SIGMA\-14FE\.

## SOAR: Regression\-based LiDAR Relocalization for UAVs

**Authors:** Hengyu Mu; Jianshi Wu; Yuxin Guo; XianLian Lin; Qingyong Hu; Sheng Ao; Chenglu Wen; Cheng Wang

**ID:** 151153\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151153

[Paper](<https://openreview.net/forum?id=cdxdVJjpkZ>) | [PDF](<https://openreview.net/pdf?id=cdxdVJjpkZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151153>)

Regression\-based LiDAR relocalization has recently emerged as a promising solution for high\-precision positioning in GNSS\-denied environments\. However, these methods are primarily tailored to autonomous driving, exhibiting significantly degraded accuracy in unmanned aerial vehicle \(UAV\) scenarios due to arbitrary pose variations and irregular flight paths\. In this paper, we propose SOAR, a regression\-based LiDAR relocalization framework for UAVs\. Specifically, we introduce a locality\-preserving sliding window attention module with locally invariant positional encoding to capture discriminative geometric structures robust to viewpoint changes\. A coordinate\-independent feature initialization module is further designed to eliminate sensitivity to global transformations\. Furthermore, most existing UAV datasets are limited to evaluate LiDAR relocalization in real\-world, due to the lack of synchronized LiDAR scans, accurate 6\-DoF poses, or multiple traversals\. Thus, we construct a large\-scale UAV LiDAR localization dataset with 4 scenes and 13 irregular paths exhibiting rotation and altitude variations, providing a more realistic benchmark for UAVs\. Extensive experiments demonstrate that our method achieves state\-of\-the\-art performance, improving the localization success rate by 40\\% and reducing mean error over 10m on UAVLoc\. Our code and dataset will be released soon, and the dataset demo is available via the anonymous link\.

## Representation Fréchet Loss for Visual Generation

**Authors:** Jiawei Yang; Zhengyang Geng; Xuan Ju; Yonglong Tian; Yue Wang

**ID:** 154990\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154990

[Paper](<https://openreview.net/forum?id=9OK87o8Wkf>) | [PDF](<https://openreview.net/pdf?id=9OK87o8Wkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154990>)

We show that Fréchet Distance \(FD\), long considered impractical as a training objective, can in fact be effectively optimized in the representation space\. Our idea is simple: decouple the population size for FD estimation \(e\.g\., 50k\) from the batch size for gradient computation \(e\.g\., 1024\)\. We term this approach FD\-Loss\. Optimizing FD\-Loss reveals several surprising findings\. First, post\-training a base generator with FD\-Loss in different representation spaces consistently improves visual quality\. Under the Inception feature space, a one\-step generator achieves 0\.72 FID on ImageNet $256\\times256$\. Second, the same FD\-Loss repurposes multi\-step generators into strong one\-step generators without teacher distillation, adversarial training or per\-sample targets\. Third, FID can misrank visual quality: modern representations can yield better samples despite worse Inception FID\. This motivates FDr$^\{k\}$, a multi\-representation metric\. We hope this work will encourage further exploration of distributional distances in diverse representation spaces as both training objectives and evaluation metrics for generative models\. Code and checkpoints will be open\-sourced\.

## XFeat Revisited: Reproducibility and Evaluation of a Lightweight Image Matcher

**Authors:** Lazar Đoković; Aimee Lin

**ID:** 157013\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 157013

[Paper](<https://openreview.net/forum?id=2WI889Ulin>) | [PDF](<https://openreview.net/pdf?id=2WI889Ulin>) | [Official poster](<https://neurips.cc/virtual/2026/session/137650>)

We present a reproducibility study of XFeat, a lightweight local feature extractor and matcher designed to identify corresponding points across images efficiently on resource\-constrained hardware\. We re\-implement the architecture based on the paper and supplementary material, re\-evaluate the authors' released checkpoint alongside our re\-implementation, and conduct additional architectural ablations to examine design choices that were not fully justified in the original work\. This distinction between re\-evaluation and reproduction is important, as the paper, supplement, and public code differ in several implementation details, including the backbone layout, fusion block, and training losses\. Empirically, our reproduced models closely match and, in some cases, outperform the re\-evaluated original checkpoint on MegaDepth\-1500 and ScanNet\-1500, supporting the main claim that XFeat provides a strong accuracy–efficiency trade\-off for standard image\-matching benchmarks\. Our ablations provide a more nuanced view of two architectural arguments from the original paper\. In particular, the parallel keypoint branch is important for semi\-dense matching, but its benefit is less pronounced than originally claimed, while the evidence for the specific placement of the single skip\-connection remains inconclusive\. Finally, we reproduce the original downstream evaluations and find close agreement for homography estimation, while Aachen visual localization remains below the reported results, even for the released checkpoint, suggesting sensitivity to underspecified evaluation details\. We then extend the analysis to zero\-shot out\-of\-distribution and cross\-modal matching across retinal, thermal\-visible, and multimodal remote\-sensing imagery, where XFeat remains effective in some settings but degrades sharply under severe modality shifts\.

## Repurposing Video Diffusion Transformers for Cross\-View Temporal Object Correspondence

**Authors:** Siyoon Jin; Dahyun Chung; Honggyu An; Sangbeom Lim; Wonjin Nam; Jaewoo Jung; WonJun Moon; Seungryong Kim

**ID:** 155763\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155763

[Paper](<https://openreview.net/forum?id=362kWB8SSp>) | [PDF](<https://openreview.net/pdf?id=362kWB8SSp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155763>)

Cross\-view object correspondence identifies the same object across views\.      However, existing methods treat this as a frame\-level matching problem, necessitating a query mask at every frame\.      Furthermore, without modeling temporal context, they suffer from severe ambiguity under appearance changes or occlusions\.     Therefore, we introduce cross\-view temporal object correspondence, which requires preserving object identity across both views and time from a query mask\.      To address this, we propose Track, a streamlined framework which repurposes a pretrained video DiT with semantic and spatiotemporal priors for RGB\-to\-mask latent transport, jointly modeling cross\-view matching and temporal tracking\.     However, naive video DiTs do not guarantee accurate cross\-view grounding and often attend to semantically similar yet incorrect objects across views\.      Thus, we introduce focal cross\-view attention alignment, hard negative conditioning, and local context crop strategies to ensure reliable grounding\.      Finally, beyond these architectural enhancements, we also tackle the lack of dense annotation by introducing a pseudo\-label curation pipeline that converts sparse Ego\-Exo4D annotations into dense supervision to enable effective video\-level training\.     Our highly competitive performances validate the effectiveness of Track as a streamlined framework, ensuring robust temporal consistency and identity preservation\.     Code and weights will be released\.

## CanvasMAR: Improving Masked Autoregressive Video Prediction With Canvas

**Authors:** Zian Li; Muhan Zhang

**ID:** 148170\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148170

[Paper](<https://openreview.net/forum?id=znXlOaeZCI>) | [PDF](<https://openreview.net/pdf?id=znXlOaeZCI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148170>)

Masked autoregressive models \(MAR\) have emerged as a powerful paradigm for image and video generation, combining the flexibility of masked modeling with the expressiveness of continuous tokenizers\. However, when sampling individual frames, video MAR models often produce highly distorted outputs due to the lack of a structured global prior, especially when using only a few sampling steps\. To address this, we propose CanvasMAR, a novel autoregressive video prediction model that predicts high\-fidelity frames with few sampling steps by introducing canvas—one\-step prediction of the future\-frame expectation that serves as a non\-uniform mask during masked generation\. The canvas supplies global structure early in sampling, enabling faster and more coherent frame synthesis\. To further stabilize autoregressive sampling, we propose an easy\-to\-hard curriculum via a motion\-aware sampling order that synthesizes stationary regions before attending to highly dynamic ones\. We also integrate compositional classifier\-free guidance that jointly strengthens the canvas and temporal conditioning to improve generation fidelity\. Experiments on the BAIR, UCF\-101, and Kinetics\-600 benchmarks demonstrate that CanvasMAR produces higher\-quality videos with fewer autoregressive steps\. On the challenging Kinetics\-600 dataset, CanvasMAR achieves remarkable performance among autoregressive models and rivals advanced diffusion models\.

## Reinforced Evidence\-Aware Long Video Understanding

**Authors:** Yuan Xie; Tianshui Chen; Deyu Zhou; Lionel Ni

**ID:** 151586\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151586

[Paper](<https://openreview.net/forum?id=ZUmUvF2Vx9>) | [PDF](<https://openreview.net/pdf?id=ZUmUvF2Vx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151586>)

Despite strong benchmark performance, multimodal large language models \(MLLMs\) remain prone to hallucinations, as they are optimized for linguistic plausibility rather than faithful answering based on observation\. This issue is particularly severe in long videos, where critical cues are temporally sparse and often missed by uniform frame sampling\.  Yet existing methods still either operate on fixed pre\-sampled inputs, implicitly assuming that all necessary evidence has already been captured, or augment reasoning with retrieval without requiring answers to be grounded in visual evidence\. We propose Reinforced Evidence\-Aware Learning , a framework that reformulates long\-video question answering as an iterative process of evidence gathering and verification, enabling faithful answering with explicit evidence support, thereby reducing hallucinations\. At each reasoning step, the model assesses whether the current observation is sufficient to answer the question, and either searches for missing visual evidence from the video or produces a final answer with explicitly cited evidence\. To internalize this reasoning policy, we design an evidence\-aware reward for reinforcement learning post\-training that jointly requires answer correctness and evidence faithfulness\. The latter is evaluated by a pretrained cross\-modal consistency verifier that matches the generated evidence descriptions against the visual content of the source frames, eliminating the need for manual annotations\. Built on Qwen2\.5\-VL\-7B, REAL achieves state\-of\-the\-art results on four long\-video benchmarks \(Video\-MME, MLVU, LongVideoBench, and EgoSchema\) and substantially suppresses hallucinations on the dedicated video\-hallucination benchmarks VideoHallucer and ELV\-Halluc, with only 96 input frames surpassing the 768\-frame base model in both accuracy and hallucination resistance\.

## GeoWorld: A Geometry\-First World Model for Reconstruction and Imagination

**Authors:** Baicheng Li; Jialin Liu; Dong Wu; Weijian Xie; Zhichao Ye; Donghui Shen; Nan Wang; Guofeng Zhang; Haomin Liu; Hongbin Zha

**ID:** 148633\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148633

[Paper](<https://openreview.net/forum?id=wI49OV3byB>) | [PDF](<https://openreview.net/pdf?id=wI49OV3byB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148633>)

Large visual world models have become increasingly capable at synthesizing plausible views and camera trajectories, largely because they inherit strong priors from image and video diffusion\. Yet in robotics, spatial computing, AR anchoring, and digital twins, a world is useful only if it can be measured and acted upon: appearance plausibility cannot substitute for geometrically coherent structure\. This motivates a geometry\-native alternative, where the generative state is the feature space of a geometry foundation model rather than RGB pixels or an appearance latent\. Existing geometry\-space world models validate this direction, but they still occupy a narrow operating range\. When target views lie within observed support, full multi\-view interaction limits trajectory length; when observations become sparse, geometry\-only training lacks the broad visual priors needed to infer structure beyond observed support\. We present GeoWorld, a geometry\-latent world model that expands this range without returning generation to RGB space\. GeoWorld builds a compact geometry latent, conditions it with camera ray geometry, and uses camera\-aware tiered attention with relative pose bias to make long\-view denoising practical\. For sparse\-observation extrapolation, a Bridge module translates hidden states from a frozen camera\-conditioned video diffusion model into geometry\-latent conditioning, borrowing video priors without making the video model the scene generator\. Experiments show that GeoWorld scales geometry\-space diffusion to long camera trajectories while improving geometric consistency in prior\-assisted extrapolation\.

## PickMoment: Continuous\-Time Single\-Image\-to\-Video via Learning Deblurring and Blur\-to\-Video

**Authors:** Junseong Shin; Hyeonsu Jo; Daehyun Kim; Tae Hyun Kim

**ID:** 153056\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153056

[Paper](<https://openreview.net/forum?id=OLVcmhgg5O>) | [PDF](<https://openreview.net/pdf?id=OLVcmhgg5O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153056>)

Motion blur arises from the temporal integration of a continuous sharp signal over a finite exposure window, yet existing learning\-based methods sidestep this physical model and predict only the sharp signal itself: most single\-image deblurring methods recover a single frame at the exposure center, while blur\-to\-video methods predict a fixed set of frames\.  We introduce PickMoment, a continuous\-time reformulation that directly learns the interval\-mean blur over arbitrary sub\-intervals of the exposure with a single deterministic model\.  Drawing an analogy to MeanFlow's average\-velocity formulation, we train the model with three supervisions derived from the blur integral: an empirical reconstruction loss from available subframes, an additivity loss that enforces self\-consistency across overlapping sub\-intervals, and a sharp\-frame loss anchored at the zero\-interval limit\.  A single trained model unifies single\-image deblurring, blur\-to\-video generation, and continuous\-time pick\-a\-moment recovery as different queries to the same network, with no separate training for each task\.  Our PickMoment achieves state\-of\-the\-art performance among generative\-based deblurring methods on GoPro and HIDE while competitive against restoration\-based methods on RealBlur, and the highest per\-frame fidelity on GoPro\-7 blur\-to\-video, all in a single forward pass without iterative sampling\.

## ReFlex: Faithful Panorama Reconstruction from a Single Image with Reflections

**Authors:** Yikai Pan; Zhiyuan Zhou; Yuxiang Yan; Xuetong Yang; Runhe Yang; Jian Pu

**ID:** 151635\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151635

[Paper](<https://openreview.net/forum?id=Z78l73Ay0q>) | [PDF](<https://openreview.net/pdf?id=Z78l73Ay0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151635>)

Reflections reveal scene content beyond the camera's direct field of view, but faithfully recovering this hidden information is challenging as reflective observations are heterogeneous, incomplete, and physically modulated\. Existing methods either rely on explicit reflection modeling with privileged geometric priors or defer to generative synthesis that may hallucinate plausible but unfaithful content\. To address these challenges, we propose \\textbf\{ReFlex\}, an observation\-constrained framework that casts faithful panorama reconstruction as a controlled inverse problem\. We first develop an \\emph\{Observation\-Consistent Estimator\} with hierarchical token prediction and signed routing to integrate heterogeneous reflection cues while stabilizing global structure\. Subsequently, we propose a \\emph\{Reliability\-Guided Refiner\}, which estimates spatial reliability from token predictions and guides a frozen diffusion model to refine uncertain regions without overwriting observation\-supported structures\. To validate the effectiveness of ReFlex, we further build ReFlex\-Bench, a paired benchmark with 110,760 reflective RGB inputs and aligned target panoramas across diverse scenes, reflective geometries, and observation regimes\. Experiments show that ReFlex delivers superior reconstruction fidelity without normals, field\-of\-view annotations, masks, or other privileged information, and obtains the best performance on eight of nine downstream full\-view perception protocols\.

## Skipping Domain Shifts: Domain Memory Retention Enhanced Hyperspectral Single\-Source Domain Generalization

**Authors:** Taiqin Chen; Hao Sha; Xiaochen Feng; Chunyu Chen; XiangYu Chen; Ke Chen; yongbing zhang

**ID:** 148267\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148267

[Paper](<https://openreview.net/forum?id=z7Qi9Npr3f>) | [PDF](<https://openreview.net/pdf?id=z7Qi9Npr3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148267>)

Hyperspectral single\-source domain generalization aims to train a robust model capable of overcoming domain shifts using only one available source domain for cross\-scene hyperspectral image \(HSI\) analysis\. Existing methods typically adopt data augmentation to broaden decision boundaries or utilize style transfer techniques for test\-time alignment\. However, these studies either fail to completely bridge the domain gap or inadvertently disrupt the discriminative spectral information, leading to suboptimal generalization and degraded classification performance on the target domain\. To overcome these limitations, we propose a novel method, termed the domain memory retention framework, which optimizes domain memory during training to explicitly encode the semantic structure of the source domain\. During inference, the target features are projected to the source distribution by leveraging this memory, thereby skipping domain shifts and improving generalization performance across unseen scenes\. Specifically, the memory is formulated as a codebook, consisting of multiple semantic codewords\. We further develop a semantic richness constraint and a perturbation robustness constraint to enhance representation diversity while empowering domain invariance for the memory\. Extensive experiments conducted on three remote sensing datasets demonstrate that the proposed method outperforms state\-of\-the\-art methods\.

## Beyond Copy\-Paste: How Well Do Subject\-Driven Video Models Understand Their Subjects?

**Authors:** Zun Wang; Kenan Deng; Daniel Blackburn; Linlin Lu; Junbang Liang; Yu Lou; Mohit Bansal; Shan Yang

**ID:** 152728\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152728

[Paper](<https://openreview.net/forum?id=QnZfz1xiAO>) | [PDF](<https://openreview.net/pdf?id=QnZfz1xiAO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152728>)

Subject\-driven video generation aims to produce videos that faithfully incorporate user\-provided reference subjects\. Current evaluation relies on free generation followed by reference\-similarity scoring, which rewards a fundamental shortcut: models can obtain high scores by reproducing visible cues from the references while avoiding transformations that would test whether the subject is truly preserved beyond the conditioning input\. We design anchored evaluation: controlled settings in which generation is anchored to held\-out targets of the same subject rather than left unconstrained\. Each probe withholds target content from the model's conditioning, so success requires using the references to infer content not directly visible, rather than simply copy\-pasting what was given\. We instantiate two probes\. \(1\) Viewpoint control specifies target geometry via depth\-based warping, leaving occluded regions that the model must complete using subject appearance from the references\. \(2\) Degradation\-\-recovery corrupts held\-out videos showing the subject in real\-world contexts that differ from the reference images, then recovers them conditioned on those references; recovery requires cross\-context generalization of identity and inference of state dynamics\. Both probes require only lightweight modifications to the inference loop of flow\-matching models, need no retraining, and generalize across architectures\. Evaluation across seven diverse, strong models reveals that rankings shift substantially: VACE\-14B ranks first conventionally but Phantom\-14B, ranked last, leads under anchored evaluation\. Moreover, conventional scores strongly correlate with the improvement from providing ground\-truth references \(Pearson r = 0\.91\), suggesting they largely measure copying ability\. Fine\-grained analysis further reveals distinct failure modes: copy\-paste models drift at unseen viewpoints, and no model adaptively balances copying and generalization\.

## When and How Much to Imagine: Adaptive Test\-Time Scaling with World Models for Visual Spatial Reasoning

**Authors:** Shoubin Yu; Yue Zhang; Zun Wang; Jaehong Yoon; Huaxiu Yao; Mingyu Ding; Mohit Bansal

**ID:** 155803\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155803

[Paper](<https://openreview.net/forum?id=2lkBbc7J7q>) | [PDF](<https://openreview.net/pdf?id=2lkBbc7J7q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155803>)

Despite rapid progress in Multimodal Large Language Models \(MLLMs\), visual spatial reasoning remains unreliable when correct answers depend on how a scene would appear under unseen or alternative viewpoints\. Recent work addresses this by augmenting reasoning with world models for visual imagination, but questions such as when imagination is actually necessary, how much of it is beneficial, and when it becomes harmful, remain poorly understood\. In practice, indiscriminate imagination can increase computation and even degrade performance by introducing misleading evidence\.  In this work, we present an in\-depth analysis of test\-time visual imagination as a controllable resource for spatial reasoning\.  We first study when static visual evidence is sufficient, when imagination improves reasoning, and how excessive or unnecessary imagination affects accuracy and efficiency\.  To support this analysis, we then introduce AVIC, an adaptive test\-time framework with world models that explicitly reasons about the sufficiency of current visual evidence before selectively invoking and scaling visual imagination\.  Finally, to further learn this gating and planning behavior without any annotation of when and how much to imagine, we introduce AVIC\-R, which trains the policy end\-to\-end via GRPO from QA\-correctness rewards and penalties by imagination cost\. Across spatial reasoning benchmarks \(SAT, MMSI\) and an embodied navigation benchmark \(R2R\), our results reveal clear scenarios where imagination is critical, marginal, or detrimental, and show that selective control can match or outperform fixed imagination strategies with substantially fewer world\-model calls and language tokens\. Our AVIC\-R surpasses strong proprietary baselines including GPT\-4o and GPT\-4\.1 while invoking the world model less often\. Overall, our findings highlight the importance of analyzing and controlling test\-time imagination for efficient and reliable spatial reasoning\.

## Learning Motion\-Appearance Coupling Priors for Solving Video Inverse Problems

**Authors:** Anselm Krainovic; Reinhard Heckel

**ID:** 149636\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149636

[Paper](<https://openreview.net/forum?id=obAMFSJZhW>) | [PDF](<https://openreview.net/pdf?id=obAMFSJZhW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149636>)

_Abstract unavailable from the accessible public sources._

## The Surprising Effectiveness of Video Diffusion Models for Hand Motion Reconstruction

**Authors:** Yuxi Wang; Chengkai Jin; Yufei Liu; Wenqi Ouyang; Tianyi Wei; Zhiwei Zeng; Siyuan Huang; Zhiqi Shen; Xingang Pan

**ID:** 149266\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149266

[Paper](<https://openreview.net/forum?id=rbIH0DXMsW>) | [PDF](<https://openreview.net/pdf?id=rbIH0DXMsW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149266>)

_Abstract unavailable from the accessible public sources._

## ResFusion: Medical Image Fusion Driven by Implicit\-Forward Diffusion and Time\-aware Joint Optimization

**Authors:** Jiahua Xu; Dawei Zhou; Zhengkun Yu; Lei Hu; Lecong Xiong; Zaiyi Liu; Nannan Wang; Xinbo Gao

**ID:** 152030\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152030

[Paper](<https://openreview.net/forum?id=W44dmCYl89>) | [PDF](<https://openreview.net/pdf?id=W44dmCYl89>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152030>)

_Abstract unavailable from the accessible public sources._

## A Training\-Free Video Moment Retrieval Framework via Selection from Multiple Visual Prompts

**Authors:** Xun Mo; Shengtao Guo; Yongwei Nie; Fei Ma; Xuemiao Xu; Chengjiang Long

**ID:** 149512\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149512

[Paper](<https://openreview.net/forum?id=paLWDpXw1a>) | [PDF](<https://openreview.net/pdf?id=paLWDpXw1a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149512>)

_Abstract unavailable from the accessible public sources._

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

## Visual Latents Know More Than They Say: Unsilencing Latent Reasoning in MLLMs

**Authors:** xin zhang; Qiqi Tao; JIAWEI DU; Moyun Liu; Joey Tianyi Zhou

**ID:** 152643\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152643

[Paper](<https://openreview.net/forum?id=RT4EGzFy8o>) | [PDF](<https://openreview.net/pdf?id=RT4EGzFy8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152643>)

_Abstract unavailable from the accessible public sources._

## LiBrA\-Net: Lie\-Algebraic Bilateral Affine Fields for Real\-Time 4K Video Dehazing

**Authors:** Yongcong Wang; Chengchao Shen; Guangwei Gao; Wei Wang; Pengwen Dai; Dianjie Lu; Guijuan Zhang; Zhuoran Zheng

**ID:** 154860\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154860

[Paper](<https://openreview.net/forum?id=AM2VYYJ4GA>) | [PDF](<https://openreview.net/pdf?id=AM2VYYJ4GA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154860>)

_Abstract unavailable from the accessible public sources._

## Manifold Prior Guided Deep Unfolding for Hyperspectral Image Reconstruction

**Authors:** Shuqi Liu; Yingkai Zhang; Lin Gu; Tao Zhang; Ying Fu

**ID:** 154416\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154416

[Paper](<https://openreview.net/forum?id=DjKpFjPFoO>) | [PDF](<https://openreview.net/pdf?id=DjKpFjPFoO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154416>)

_Abstract unavailable from the accessible public sources._

## FLINT: Coupling Proximal Initialization and Bounded Stochasticity for Flow\-Matching Inverse Problems

**Authors:** Junseo Bang; daewon choi; Dong Ju Mun; Se Young Chun

**ID:** 149594\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149594

[Paper](<https://openreview.net/forum?id=ovYQsp14kD>) | [PDF](<https://openreview.net/pdf?id=ovYQsp14kD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149594>)

_Abstract unavailable from the accessible public sources._

## Complex Schrödinger Bridges

**Authors:** Dong\-Sig Han; Tolga Birdal

**ID:** 153202\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153202

[Paper](<https://openreview.net/forum?id=N4hE0Zplt1>) | [PDF](<https://openreview.net/pdf?id=N4hE0Zplt1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153202>)

Diffusion bridges have emerged as versatile diffusion\-based frameworks for facilitating transformations between arbitrary data distributions\. However, these approaches are hindered by the immensity of the optimization space without consideration of underlying high\-order structures\. This paper explores a complex\-valued variant of diffusion bridges for solving physical problems using conformal field theory and mean field games\. To this end, we propose a new class of dynamical diffusion bridges, called complex Schr\\"odinger Bridges \(CSB\), whose derived algorithms are able to handle diffusion\-based tasks using Hamiltonian\-based geometric prior\. Additionally, we propose image\-to\-image CSB \(I$^2$CSB\), tractable diffusion bridge techniques with a spiral analytic posterior\. We verify our theoretical claims and practicality of our Hamiltonian based approach with a wide range of experiments\.

## VideoOdyssey: A Benchmark for Ultra\-Long\-Context and Omni\-Modal Video Understanding

**Authors:** He Haichen; Jiayi Zhou; Sifeng SHANG; Yihan Hu; Yuanhan Zhang; Kaiyang Zhou

**ID:** 139576\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139576

[Paper](<https://openreview.net/forum?id=HIUX5RHWKs>) | [PDF](<https://openreview.net/pdf?id=HIUX5RHWKs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139576>)

Real\-world long video understanding requires models to perform continuous tracking, information integration and memory retention over massive temporal spans within extreme video durations\.  Mastering this intense cognitive load constitutes the fundamental bottleneck in long video understanding\. While existing benchmarks have driven progress by scaling up video duration, their evaluation tasks often require comprehending only short and isolated video segments, falling short of capturing the challenge of ultra\-long\-context reasoning\. To measure this cognitive load, we emphasize continuous certificate length, defined as the video length a human must continuously watch to definitively answer a given question\. Driven by this metric, we introduce VideoOdyssey, a benchmark specifically designed for ultra\-long\-context and omni\-modal video understanding\. VideoOdyssey is characterized by three key features: 1\) Extreme video duration and diversity: spanning 11 domains and 54 subcategories with an average video duration of 109 minutes; 2\) Comprehensive evaluation scenarios: offering two subsets to address different research focuses, i\.e\., VideoOdyssey\-V for probing the limits of visual understanding in MLLMs, and VideoOdyssey\-AV for evaluating synchronized audio\-visual understanding for omni\-modal models; 3\) Ultra\-long and multi\-level continuous certificates: extending the average continuous certificate to 16 minutes for VideoOdyssey\-V and 12\.8 minutes for VideoOdyssey\-AV\. Crucially, we design 5 granular levels from seconds to hours, providing a comprehensive diagnostic tool to evaluate models across varying context lengths and cognitive loads\. Extensive evaluations show that bottlenecks of current MLLMs extend beyond simple retrieval to include struggles with continuous reasoning across varying context lengths, fine\-grained perception, and non\-verbal omni\-modal understanding\. We hope VideoOdyssey will spur the development of next\-generation MLLMs toward genuine real\-world video understanding\.

## The Unreasonable Effectiveness of Text Embedding Interpolation for Continuous Image Steering

**Authors:** Yiğit Ekin; Yossi Gandelsman

**ID:** 155378\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155378

[Paper](<https://openreview.net/forum?id=654S7hINSk>) | [PDF](<https://openreview.net/pdf?id=654S7hINSk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155378>)

Continuous image editing requires fine\-grained control over semantic attributes in text\-conditioned generative models\. Recent methods obtain such control through trainable adapters, test\-time optimization, or architecture\-specific design choices\. In this work, we revisit steering the text\-encoder space as a simpler alternative for open\-vocabulary slider construction\. We show that, as text\-conditioned generative models become increasingly capable, linear directions in their frozen text\-encoder spaces can provide a competitive interface for continuous control when carefully constructed\. To make this interface practical, we introduce an automated pipeline that constructs continuous sliders from just a prompt and a concept, eliminating manual data curation and coefficient tuning\. First, a language model generates balanced contrastive prompt pairs\. Then, difference\-of\-means over the frozen text encoder estimates a concept direction, and an LLM\-assisted process selects the prompt tokens to steer\. Finally, an elastic range search adaptively calibrates the slider coefficient interval\. As the process includes only changing the text encoder hidden states, the same pipeline can be applied across different text\-conditioned generative backbones without denoiser\-specific modifications\. Across diverse set of edit types, our method outperforms prior training\-free baselines and approaches the edit compliance of trained controllers while avoiding per\-concept and per\-backbone training\. Our results suggest that a carefully designed text\-space steering is a surprisingly strong practical baseline for open\-vocabulary continuous editing\. Especially in a rapidly evolving generative model ecosystem, where repeatedly adapting specialized controllers to new backbones can be a substantial burden

## Patching Up Circuit Learning on Images

**Authors:** Charles Bricout; Gennaro Gala; Viacheslav \(Slava\) Borovitskiy; Antonio Vergari

**ID:** 152498\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152498

[Paper](<https://openreview.net/forum?id=SgOj0VYeoD>) | [PDF](<https://openreview.net/pdf?id=SgOj0VYeoD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152498>)

Probabilistic circuits \(PCs\) have emerged as generative models guaranteeing tractable probabilistic inference\. However, tractability comes at the price of larger model sizes than in other neural generative models\. As such, to scale PCs to high\-dimensional data such as images, previous work has devised several parameter sharing techniques as well as fast evaluation protocols that consider learning PCs on independent image patches\.  In this work, we revisit this practice to highlight a surprising learnability issue: models that assume independence counterintuitively can yield better likelihoods than models that do not\. To break this apparent bottleneck and to scale PCs further, we introduce a recursive parameter sharing construction \(RePA\) that fosters efficiency without assuming independence\.  In a set of rigorous experiments, we show that RePA can greatly reduce time and memory consumption while yielding competitive likelihoods\.

## Scalable Fair Learning via Cramér\-von Mises Regularization

**Authors:** Albert Gimó Contreras; Mariia Vladimirova; Olga Petrova; Reda CHHAIBI; Patrick Loiseau

**ID:** 155653\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155653

[Paper](<https://openreview.net/forum?id=41DVZ3vBAY>) | [PDF](<https://openreview.net/pdf?id=41DVZ3vBAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155653>)

A standard way to enforce group fairness in machine learning models is to add a fairness regularizer to the training loss\. Existing dependence\-based regularizers, however, are often computationally expensive, with per\-batch costs that are typically quadratic or higher in the batch size $B$\.  We propose a novel group\-fairness regularizer based on the Cramér\-von\-Mises \(CvM\) sensitivity index, which penalizes statistical dependence between model predictions and a sensitive attribute during training\.  Our method combines a rank\-based CvM estimator with differentiable soft ranking, yielding a bounded training penalty with $\\Oc\(B \\log B\)$ per\-batch complexity\. This is the first sub\-quadratic in\-processing fairness method that targets genuine joint\-distribution dependence\. We further establish theoretical connections between the CvM regularizer and standard fairness metrics such as demographic parity and equality of opportunity\. Experiments on tabular and image datasets show competitive fairness\-utility trade\-offs while substantially lowering training overhead compared to existing dependence\-based regularizers\.

## Less Supervision, Better Generalization: Weakly Supervised Fake Region Localization in Diffusion\-Edited Images

**Authors:** Junhee Lee; JeonDongHyeon; Taeoh Kim; beomYoung Kim; MyeongAh Cho

**ID:** 153981\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153981

[Paper](<https://openreview.net/forum?id=H5AFWh3aMx>) | [PDF](<https://openreview.net/pdf?id=H5AFWh3aMx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153981>)

Localizing AI\-edited regions is essential for interpretable forensic analysis, but remains challenging due to subtle and spatially distributed artifacts that are misaligned with semantic or object boundaries\. Existing approaches rely on pixel\-level supervision from controlled editing pipelines, which is difficult to scale and can introduce misleading signals: artifacts frequently extend beyond annotated regions, while out\-of\-mask pixels are treated as authentic\.  This limits models' ability to capture transferable evidence and generalize across generators and datasets\. To address these issues, we propose \\textbf\{ReGFLoW\}, a \\textbf\{Re\}construction\-\\textbf\{G\}uided \\textbf\{F\}ake \\textbf\{Lo\}calization framework under \\textbf\{W\}eak supervision, which is the first weakly supervised approach for diffusion\-edited fake region localization\. ReGFLoW requires only real/fake labels at the image\-level and uses diffusion reconstruction errors as dense  spatial guidance to inject them into both feature and score spaces\. Furthermore, by artifact\-centric multiple instance learning, ReGFLoW utilizes localized diffusion evidence without relying on semantic\-affinity or boundary\-based pseudo\-mask priors\. Extensive experiments demonstrate that ReGFLoW achieves stronger out\-of\-domain generalization than fully supervised learning baselines\.

## Multi\-Part Object Representations via Graph Structures and Co\-Part Discovery

**Authors:** Alex Foo; Wynne Hsu; Mong\-Li Lee

**ID:** 150151\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150151

[Paper](<https://openreview.net/forum?id=kHuYgeVO8V>) | [PDF](<https://openreview.net/pdf?id=kHuYgeVO8V>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150151>)

Discovering object\-centric representations from images can significantly enhance the robustness, sample efficiency and generalizability of vision models\. Works on images with multi\-part objects typically follow an implicit object representation approach, which fail to recognize these learned objects in occluded or out\-of\-distribution contexts\. This is due to the assumption that object part\-whole relations are implicitly encoded into the representations through indirect training objectives\. We address this limitation by proposing a novel method that uses explicit graph representations for parts and introduce a new co\-part algorithm for multi\-part object discovery\. The part representations are refined with a part\-centric regularization objective\. We then introduce three benchmarks to evaluate the robustness of object\-centric methods in recognizing multi\-part objects within occluded and out\-of\-distribution settings\. Experimental results on simulated, realistic, and real\-world images show marked improvements in the quality of discovered objects compared to state\-of\-the\-art methods, as well as the accurate recognition of multi\-part objects in occluded and out\-of\-distribution contexts\. We also show that the discovered object\-centric representations can more accurately predict key multi\-part object properties in a downstream task, highlighting the potential of our method to advance the field of object\-centric representations\.

## WorldPrism: 3D Consistency for Video World Models via Bidirectional Cross\-Space Verification

**Authors:** Hengyu Liu; Jiahao Lu; Ruijie Zhu; Sixiao Zheng; Yuan Liu; Wenbo HU; Ying Shan

**ID:** 153356\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153356

[Paper](<https://openreview.net/forum?id=M04rf81e1H>) | [PDF](<https://openreview.net/pdf?id=M04rf81e1H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153356>)

Video world models aim to generate temporally coherent visual observations conditioned on actions, but often suffer from 3D geometric inconsistencies such as spatial drift, object deformation, and perspective violations, which limit their reliability in downstream tasks\. We propose WorldPrism, a post\-training framework that improves 3D consistency via reinforcement learning without modifying the base model architecture\. The central challenge lies in designing a reliable reward signal\. To address this, we introduce Bidirectional Geometry\-Flow Verification, a bidirectional cross\-space mechanism that evaluates consistency through two complementary paths: \(i\) lifting 2D optical flow into 3D to measure position\-space agreement, and \(ii\) projecting reconstructed 3D geometry to match the point correspondence\. By leveraging these two independent and complementary signals, this design mitigates the blind spots of unilateral 2D evaluation\. We further incorporate hierarchical temporal evaluation to capture both local and long\-range geometric consistency\. Experiments on diverse datasets demonstrate that WorldPrism achieves state\-of\-the\-art 3D consistency while preserving visual quality and generative diversity\.

## Train the Agent, Not the Expert: Learning to Harness Heterogeneous Experts for Multi\-Turn Visual Reasoning

**Authors:** Yaowu Fan; Tao Han; Dazhao Du; Jinhua Ma; Jia Wan

**ID:** 148210\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148210

[Paper](<https://openreview.net/forum?id=zXok9tzCGw>) | [PDF](<https://openreview.net/pdf?id=zXok9tzCGw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148210>)

Recent progress in computer vision has produced a wide range of powerful specialized models for detection, segmentation, counting, and other visual tasks\. However, these models are usually optimized for isolated task formulations, making it difficult to directly support general\-purpose visual intelligence, especially when a task requires complex language understanding and dense small\-object perception\. In this paper, we propose VisHarness, a trainable visual agent that decouples high\-level perception, reasoning, and decision\-making from low\-level task execution\. Instead of training a model to solve a specific visual task, VisHarness learns to harness a set of carefully designed heterogeneous visual experts\. This paradigm preserves the general intelligence of the agent while fully leveraging the precision advantages of specialized visual models in concrete visual tasks\. With only lightweight training, VisHarness learns a generalizable visual expert\-harnessing policy and can solve common fundamental vision tasks under various complex conditions through multi\-turn interactions with visual expert models\. To enable efficient on\-policy reinforcement learning training in a live environment, we introduce dynamic visual memory archiving, which mitigates the rapidly accumulating visual\-token overhead caused by multi\-turn interactions with visual expert models\. Experiments on four representative benchmarks covering reasoning segmentation, generalized referring segmentation, dense small\-object detection, and referring counting demonstrate that VisHarness substantially outperforms existing general\-purpose models and achieves competitive or superior performance compared with task\-specific models\.

## WovenAnchor Matcher: Specialized Intra\- and Inter\-Image Context Modeling for Feature Matching

**Authors:** Zhiyang Li; Ruijiang Jin; Thibaut Klenke; Yusuke Sekikawa; Nakamasa Inoue

**ID:** 155912\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155912

[Paper](<https://openreview.net/forum?id=1tYCWPWHHq>) | [PDF](<https://openreview.net/pdf?id=1tYCWPWHHq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155912>)

_Abstract unavailable from the accessible public sources._

## LogT: Logically Think with Images for Visual Search

**Authors:** Yanjun Fu; Quanzeng You; Jiadong Guo; Yujie Lu; Sai Charitha Akula; Haiping Wu; Miao Liu; Sanghamitra Dutta; Lu Yuan

**ID:** 155728\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155728

[Paper](<https://openreview.net/forum?id=3NXQoAs55l>) | [PDF](<https://openreview.net/pdf?id=3NXQoAs55l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155728>)

_Abstract unavailable from the accessible public sources._

## VESTA: Visual Exploration with Statistical Tool Agents

**Authors:** William Rudman; Abhishek Rajan Divekar; Kanishk Jain; Sebastian Joseph; Stella Offner; Matt Lease; Kyle Mahowald; Greg Durrett; Junyi Jessy Li

**ID:** 151435\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151435

[Paper](<https://openreview.net/forum?id=akBqLVEMrj>) | [PDF](<https://openreview.net/pdf?id=akBqLVEMrj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151435>)

_Abstract unavailable from the accessible public sources._

## A Quantitative Visual Taxonomy of Worldwide Writing Systems

**Authors:** Philippe Meyer; Claire Roman

**ID:** 152125\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152125

[Paper](<https://openreview.net/forum?id=VLPMAYjWxj>) | [PDF](<https://openreview.net/pdf?id=VLPMAYjWxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152125>)

_Abstract unavailable from the accessible public sources._

## At FullTilt: Real\-Time Open\-Set 3D Macromolecule Detection Directly from Tilted 2D Projections

**Authors:** Ming\-Yang Ho; Alberto Bartesaghi

**ID:** 154302\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154302

[Paper](<https://openreview.net/forum?id=Eirt5wZqH3>) | [PDF](<https://openreview.net/pdf?id=Eirt5wZqH3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154302>)

Open\-set 3D macromolecule detection in cryogenic electron tomography eliminates the need for target\-specific model retraining\. However, strict VRAM constraints prohibit processing an entire 3D tomogram, forcing current methods to rely on slow sliding\-window inference over extracted subvolumes\. To overcome this, we propose FullTilt, an end\-to\-end framework that redefines 3D detection by operating directly on aligned 2D tilt\-series\. Because a tilt\-series contains significantly fewer images than slices in a reconstructed tomogram, FullTilt eliminates redundant volumetric computation, accelerating inference by orders of magnitude\. To process the entire tilt\-series simultaneously, we introduce a tilt\-series encoder to efficiently fuse cross\-view information\. We further propose a multiclass visual prompt encoder for flexible prompting, a tilt\-aware query initializer to effectively anchor 3D queries, and an auxiliary geometric primitives module to enhance the model's understanding of multi\-view geometry while improving robustness to adverse imaging artifacts\. Extensive evaluations on three real\-world datasets demonstrate that FullTilt achieves state\-of\-the\-art zero\-shot performance while drastically reducing runtime and VRAM requirements, paving the way for rapid, large\-scale visual proteomics analysis\. All code and data will be publicly available upon publication\.

## Certifiably Optimal Robust Angular Synchronization

**Authors:** Daniel Barath; Keisuke Tateno; Marc Pollefeys; Federico Tombari

**ID:** 153331\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153331

[Paper](<https://openreview.net/forum?id=M7UwJ21cjC>) | [PDF](<https://openreview.net/pdf?id=M7UwJ21cjC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153331>)

Rotation averaging on the circle, equivalently robust angular synchronization, underlies a wide range of geometric estimation problems, for example, gravity\-aligned Structure\-from\-Motion, multi\-way point\-cloud registration, and in\-plane alignment in single\-particle cryo\-electron microscopy\. We present the first algorithm that certifiably solves the robust maximum\-consensus formulation of this problem to global optimality\. Our approach discretises the circle into uniform bins, formulates a pairwise Markov random field and solves it via branch\-and\-bound with two key novelties: an ICM\-guided label\-pruning rule that collapses the branching factor to a handful of candidates, and a node\-constrained relaxation bound orders of magnitude tighter than the standard per\-edge bound\. Together, they reduce the search from millions of nodes to a few hundred on typical instances\. On all tested problems, the algorithm terminates with a proof of global optimality, typically in a few seconds\. Across synthetic graphs and three real\-world domains \-\- image\-based SfM on IMC 2023/2024, multi\-way LiDAR point\-cloud registration on KITTI and NSS, and cryo\-EM angular synchronization on EMPIAR\-10166 \-\- the certified solution achieves sub\-degree accuracy at outlier rates where other baselines fail\. Our code will be made publicly available\.

## Harnessing Streaming Video in the Wild

**Authors:** Dingyu Yao; Shuhuan Gu; Qingyi Si; Junhao Zhou; Chenxu Yang; Chuanyu Qin; Naibin Gu; Zheng Lin; Weiping Wang; Nan Duan; Jiaqi Wang

**ID:** 152564\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152564

[Paper](<https://openreview.net/forum?id=SCGXHtv16L>) | [PDF](<https://openreview.net/pdf?id=SCGXHtv16L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152564>)

Vision\-Language Models \(VLMs\) are increasingly required to process unbounded video streams in applications such as video\-call assistants, live commentary, and embodied robots\. An ideal streaming system should support proactive interaction, long\-horizon memory, and real\-time processing, while resting on a VLM backbone capable of handling diverse in\-the\-wild streaming tasks\. However, existing VLMs excel at offline video understanding but fall short in streaming capabilities and lack dedicated infrastructure for streaming deployment\. We address this gap on three fronts\. \(i\) For backbone capability, we construct \\textbf\{Streaming\-Train\-248K\}, a streaming dataset paired with a novel training objective for adapting VLMs to streaming interaction and understanding\. \(ii\) For real\-world deployment, we introduce \\textbf\{Streaming Harness\}, a plug\-and\-play system that endows any VLM with three core abilities: proactive interaction \(per\-second response decisions\), long\-term memory \(12\-hour context retention\), and real\-time processing \(sub\-second latency\)\. \(iii\) To drive continued community progress on streaming capabilities, we design \\textbf\{Streaming\-Eval\}, a benchmark that reflects models' capabilities across diverse in\-the\-wild scenarios\. Extensive experiments demonstrate consistent gains from our approach across all core capabilities required for streaming video understanding\. We will open\-source our data, code, and benchmark to advance the community's shift from offline video understanding to deployable streaming intelligence\.

## FiLM\-CAM: Keyed Feature Modulation for Conditional\-Access Watermarking

**Authors:** Yash Kulthe; Vishal Asnani; Shruti Agarwal; Andrew Gilbert; John Collomosse

**ID:** 155950\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155950

[Paper](<https://openreview.net/forum?id=1b70GKuMjn>) | [PDF](<https://openreview.net/pdf?id=1b70GKuMjn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155950>)

We propose FiLM\-CAM; a conditional\-access image watermarking approach that enforces authorized encoding, decoding, and removal through keyed feature modulation\. A secret key conditions a Feature\-wise Linear Modulation \(FiLM\) mechanism that transforms the internal representation of the watermark signal before embedding, thereby coupling the payload to the key at the feature, rather than pixel level\. The same key must be presented to condition the decoder to correctly recover the payload embedded in an image\. To enforce conditional access, we train the system to maximize the performance gap between authorized and unauthorized use, ensuring reliable extraction under the correct key while inducing failure under incorrect keys\. In addition, we design our encoder to estimate the watermark residual invariant to the presence of pre\-existing watermarks\. This design enables conditional watermark removal via simple re\-encoding and subtraction of the residual using iterative refinement, contingent on knowledge of the secret key\. We evaluate FiLM\-CAM across multiple watermarking encoder–decoder backbones, demonstrating that keyed feature modulation serves as an effective, architecture\-agnostic conditional access module \(CAM\) for image watermarking\.

## VicEdit: Learning to Edit Videos from Visual In\-Context Examples

**Authors:** Yuji Wang; Teng Hu; Yuheng Chen; Ran Yi; Han Feng; Weijian Cao; Chengjie Wang; Lizhuang Ma; Jiangning Zhang

**ID:** 155979\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155979

[Paper](<https://openreview.net/forum?id=1P8vkGpb52>) | [PDF](<https://openreview.net/pdf?id=1P8vkGpb52>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155979>)

Despite progress in instruction\-based video editing, unimodal textual instructions inherently struggle to convey fine\-grained textures and complex dynamics\. To bridge this perceptual gap, we propose Visual In\-context Editing, a new paradigm elevating video editing from textual instructions to multi\-modal visual guidance encompassing single image, image pair, and video pair\. To facilitate this paradigm, we curate \*\*VicEdit\-400K\*\*, the first large\-scale dataset for visual in\-context video editing\. We develop an automated pipeline to generate 400K high\-quality samples across ten task types, ensuring superior visual fidelity and semantic consistency through multi\-dimensional filtering\. Leveraging this foundation, we introduce \*\*VicEdit\*\*, a unified framework to bridge visual and textual contexts\. To adaptively extract editing semantics from heterogeneous references, we design \*\*Modality\-Adaptive Semantic Distillation\*\*, which produces modality\-specific semantic tokens from visual references\. These tokens are then synergistically integrated with textual instructions through \*\*Dual\-Context Injection\*\*, enabling the generation process to benefit from both visual and textual signals\.  Extensive evaluations on VicEdit\-Bench demonstrate that VicEdit achieves state\-of\-the\-art performance across both basic instruction editing and visual in\-context editing tasks, establishing visual in\-context learning as a powerful and controllable paradigm for video editing\.

## On Computing Diverse Solutions in the Earth Movers Distance

**Authors:** Aritra Banik; Mayank Goswami; Abhishek Sahu

**ID:** 154421\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154421

[Paper](<https://openreview.net/forum?id=Di32FbHcJU>) | [PDF](<https://openreview.net/pdf?id=Di32FbHcJU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154421>)

Classically used for image retrieval tasks in computer vision, the Earth Movers Distance \(EMD\), also called the Wasserstein distance, has found numerous applications in natural language processing \(NLP\) and machine learning \(ML\)\. In NLP it is used as a measure of distance between sets of embeddings, and in ML it has been used to understand training dynamics, distributionally robust optimization, and many other tasks under active research\.  On the other hand, computing diverse solutions to optimization problems has also gained a lot of attention recently\. In this DiverseX paradigm, one wants to develop algorithms that return a set of $r$ solutions that are maximally diverse; a common measure of diversity is the average or the minimum distance between the $r\\choose\{2\}$ pairs of solutions\. This paradigm is useful in generating more choices for the user, in fairness, and in robustness and security applications\.  In this work, we address the complexity of finding a diverse set of solutions in the EMD metric\. Given an $n$ point metric space $\(X,d\)$ and integers $k \\geq 1$ and $r \\geq 2$, we consider the problem of computing $r$ many subsets of $X$, each of cardinality $k$, such that the minimum EMD between these sets is maximized\. Motivated by applications from NLP, we also consider the problem of computing the farthest $k$\-subset \(from a given $k$\-subset\) in the EMD metric\.   On the lower bound side, we first show that assuming the Maximum\-Span Hypothesis, it is W\[1\]\-hard \(with parameters $k$ and $r$\) to obtain $k/\(\\log k\)^\{O\(1\)\}$\-approximation for non\-metric cost functions, and W\[1\]\-hard to obtain a $2\-o\(1\)$ approximation for metric spaces\. We also show that the problem restricted to the Euclidean setting with $\\ell\_2$ norm is W\[1\]\-hard\.  Our first main algorithmic result is an $f\(k, d, \\varepsilon\)n^\{\(O\(1\)\}$ time $\(1\-\\varepsilon\)$ approximation algorithm for the $d$\-dimensional  Euclidean setting, which is tight in view of the above hardness results\. Using different techniques, we also present a similar result for the farthest point problem in arbitrary metric spaces\. Our second main algorithmic result is geared towards the search for polynomial time algorithms, where we present an $O\(d\)$ approximation for the Euclidean setting in $\\text\{poly\}\(n,k,d\)$ time when $r=2$\. Finally, we present $FPT\(k\)$ time, 2\-approximate algorithms for arbitrary metric spaces when $r=2$\. Since the class of problems we study requires to \*find\* diverse solutions in the EMD metric, our results use a combination of various geometric techniques that deviate from the techniques used to compute the EMD metric between a \*given pair\* of solutions, and may be of independent interest\.

## Prior\-Anchored Local Statistical Representation Rectification for Low\-Light Image Enhancement

**Authors:** chang liu; Wenjian Wang; Yuhua Qian; Keqi Wang

**ID:** 150834\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150834

[Paper](<https://openreview.net/forum?id=exQVJdz22G>) | [PDF](<https://openreview.net/pdf?id=exQVJdz22G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150834>)

Existing low\-light image enhancement methods are increasingly built on deep representation learning\.  However, most of them still encode features as deterministic points in the embedding space, making it difficult to capture the statistical uncertainty\. Under complex low\-light scenes, latent neighborhood relations tend to reflect degradation patterns rather than semantic content or local structures, which leads to statistical shifts and reduced discriminability of representations\.  Therefore, we propose Prior\-Anchored Local Statistical Representation Rectification \(PaLSR\), which models low\-light enhancement as a representation learning process driven by local statistical rectification\. PaLSR first learns a normal\-light statistical prior with K Gaussian anchors, which provides a shared coordinate system for local representation\. Instead of enhancing degraded features in the Euclidean embedding space, PaLSR represents each feature as mean\-variance offsets relative to these anchors, describing its content displacement and uncertainty\. With these offsets rectified, local representations are reorganized under complex low\-light degradations\.  Extensive experiments on multiple low\-light benchmarks and different network architectures show that PaLSR achieves consistent improvements in restoration quality\. These results validate the effectiveness of prior\-anchored local statistical representation rectification under complex degradation conditions\.

## DSAD: Dynamic Soft Anisotropic Diagrams for Reduced\-Order Video Representation

**Authors:** Zhiyang \(Frank\) Dou; Laki Iinbor; Wojciech Matusik

**ID:** 152936\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152936

[Paper](<https://openreview.net/forum?id=PHAxpimjPy>) | [PDF](<https://openreview.net/pdf?id=PHAxpimjPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152936>)

Efficient video representations should do more than predict pixels: for a long video to be trainable, decodable, and budgeted, appearance and motion must be assigned to explicit units\. Group\-of\-Pictures \(GoP\) primitive representations provide such units by fitting short blocks with canonical local elements, but their deformation is often still predicted by a neural head\. Conversely, implicit neural representations achieve compact global fits without exposing local units that can be moved, ranked, or pruned\. We observe that a short GoP contains many primitives but only a few independent motion patterns, suggesting that the same local ownership system used for appearance should also define the motion basis\. We introduce Dynamic Soft Anisotropic Diagrams \(DSAD\), an explicit representation built from three layers over a shared soft\-distance geometry\. First, a Soft Anisotropic Diagram \(SAD\), defined as a top\-$K$\-masked softmax over anisotropic\-Apollonius sites, provides a canonical coordinate family in which dense sites encode local RGB ownership\. Second, a coarser anchor set reuses the SAD geometry so that anchor weights form a partition\-of\-unity motion basis without an additional neural module\. Third, a reduced\-order model \(ROM\) factorizes deformation into this spatial motion basis and knot\-based temporal coefficients\. This construction unifies appearance and motion within a single diagram while decoupling spatial ownership from temporal dynamics\. On Bunny, UVG, and DAVIS, DSAD attains the highest PSNR among primitive representations and competitive performance among all compared methods, while using a leaner per\-GoP deformation module and fewer fine\-stage training iterations than state\-of\-the\-art baselines\. Ablations show that the gain is a matched\-budget trade\-off: a compact anchor\-ROM motion head reallocates parameters to anchored appearance\. RAFT spectra further suggest that the largest gains occur when GoP motion is close to low\-rank\. Code and models will be released\.

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

## The Path Not Taken: RLVR Learns Off the Principals

**Authors:** Hanqing Zhu; Zhenyu Zhang; Hanxian Huang; DiJia Su; Zechun Liu; Jiawei Zhao; Igor Fedorov; Hamed Pirsiavash; Jinwon Lee; David Z\. Pan; Zhangyang &amp;amp;quot;Atlas&amp;amp;quot; Wang; Yuandong Tian; Kai Sheng Tai

**ID:** 155162 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ob9PpTAMB>) | [PDF](<https://openreview.net/pdf?id=7ob9PpTAMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155162>)

RLVR reliably improves reasoning, yet it appears to update only a tiny fraction of weights\. We resolve this paradox by revealing a persistent, model\-conditioned optimization bias: independent runs concentrate updates in similar parameter regions, invariant to dataset or RL recipe, while finite\-precision storage \(e\.g\., bf16\) obscures widespread micro\-updates as a visual sparsity artifact\. To characterize this unique bias, we show that RLVR preferentially learns along off\-principal directions via a cascaded Three\-Gate mechanism: updates are first bounded by a empirical KL constraint \(Gate I\), then steered by the model’s anisotropic geometry\(Gate II\) toward spectrum\-preserving off\-principal subspaces, and finally filtered by finite precision \(Gate III\), effectively masking minor updates\. Empirically, we validate the off\-principal dynamics: RLVR exhibits minimal spectral drift, reduced principal\-subspace rotation, and strong off\-principal alignment that set RLVR strikingly apart from SFT\.  Together, our results provide the first parameter\-space account of RLVR and uncover consistent regularities in weight evolution, advancing a more white\-box understanding of RLVR\. Moreover, we show that RLVR follows an optimization regime distinct from SFT, showing directly that transferring SFT\-era PEFT can be flawed and motivating geometry\-aware, RLVR\-native methods\.

## Boosting Brain\-to\-Image Decoding with TRIBE v2 Data Augmentation

**Authors:** Yohann Benchetrit; Marlene Careil; Simon Dahan; Hubert Banville; Stéphane d&amp;amp;\#x27;Ascoli; Jean\-Remi King

**ID:** 154738 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BOKCoQkBKJ>) | [PDF](<https://openreview.net/pdf?id=BOKCoQkBKJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154738>)

Brain decoding is limited by the availability of labeled neural data, and remains challenging in low\-data regimes\. To address this issue, we investigate whether and when brain decoding can be boosted by augmenting small fMRI datasets with synthetic data generated by a pretrained model of fMRI responses to stimuli\. We use TRIBE v2, a large encoding model pretrained on more than 1000\\,hours of fMRI responses to video, audio and language\. For each dataset, we evaluate systematic grids that show how the performance of image decoders varies with the amount of synthetic data used for training\. Our results, based on two datasets \(the 7T fMRI Natural Scenes Dataset and 3T fMRI BOLD5000\), show up to 68\\% improvement in Top\-10 image\-retrieval accuracy compared to decoders trained only on real data\. Importantly, the proportion of augmented data required to reach a given image decoding performance needs to be adjusted depending on the data source\. Surprisingly, image decoders trained exclusively on synthetic fMRI perform above chance in some settings, suggesting that TRIBE v2 can support zero\-shot fMRI\-to\-image decoding\. Together, these results show how large\-scale models of the fMRI responses to sight, sound and language may provide a foundation to improve the data efficiency for image decoding\.

## The Invisible Hand of Physics: When Video Diffusion Models Know More Than They Show

**Authors:** Parsa Esmati; Somjit Nath; Katja Hofmann; Derek Nowrouzezahrai; Samira Ebrahimi Kahou; Majid Mirmehdi

**ID:** 149891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mTYG9xSbYv>) | [PDF](<https://openreview.net/pdf?id=mTYG9xSbYv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149891>)

Modern video diffusion models generate increasingly realistic and temporally coherent videos, motivating their use as candidate world simulators\. Yet it remains unclear whether these models internally encode physical structure, or merely reproduce motion patterns seen during training\. We study this question by probing video diffusion models along latent trajectories corresponding to real videos with known physical plausibility\. To obtain such trajectories, we approximately invert the deterministic sampling process by integrating the learned velocity field backward from a clean video latent to noise, giving access to the model’s intermediate states and attention maps\. Using these recovered trajectories, we show that physical plausibility is linearly decodable from diffusion transformer states across IntPhys and InfLevel, reaching around 81\\% average accuracy and outperforming dedicated representation\-learning baselines such as V\-JEPA and VideoMAE\. Surprisingly, this signal is absent from the VAE latent input and emerges inside the denoising transformer itself, despite the model not being trained with a self\-supervised predictive objective\. These findings suggest that physically meaningful representations can arise as a byproduct of generative denoising\.

## Balancing Image Compression and Generation with Bootstrapped Tokenization

**Authors:** Haozhe Chi; Jinghan Li; Hao Jiang; Wu Sheng; Yi Ma; Jing Wang; Yadong Mu

**ID:** 155939 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1fSMXPTPyJ>) | [PDF](<https://openreview.net/pdf?id=1fSMXPTPyJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155939>)

Despite progress in image tokenization, standard methods encode redundant information by mixing all granularities within each token, thus redundancy persists between tokens\. The mix of information of different granularity also complicates the training of generators\. This paper introduces SelfBootTok, a method that resolves this by cleanly decomposing information into global and local token groups\. Through self\-bootstrapped learning, the model predicts local details exclusively from global tokens, shifting the burden of visual details from the generator to the tokenizer\. Consequently, our generator is far more efficient, requiring only global tokens and reducing computation by approximately 40\\%, while delivering superior reconstruction and generation\. Moreover, this paradigm scales elegantly: by leveraging more data or parameters to self\-supervise local representation learning, SelfBootTok achieves a new state\-of\-the\-art gFID score of 1\.56 using only 64 tokens\.

## Learning a Task\-Adaptive Low\-Dimensional Semantic Space for Improved Visual Classification

**Authors:** Nikalal Helessage; Wanqing Li; Chris Bunn; Philip O Ogunbona

**ID:** 151661\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151661

[Paper](<https://openreview.net/forum?id=Yzl6jqkOM4>) | [PDF](<https://openreview.net/pdf?id=Yzl6jqkOM4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151661>)

Semantic visual classification commonly aligns visual embeddings with semantic spaces induced by pretrained text encoders\. However, such spaces are typically high\-dimensional, weakly aligned with visual feature geometry, and insufficiently discriminative for downstream classification tasks\. We propose TaSS, a framework for learning a task\-adaptive low\-dimensional semantic space that preserves semantic structure while explicitly optimizing class separability\. TaSS is constructed through a parameterized geometry transformation of pretrained text embeddings that enlarges inter\-class margins via distance reshaping and improves intra\-class compactness through prototype\-preserving semantic constraints\. The resulting semantic space maintains meaningful semantic relationships while producing a discriminative geometry tailored for classification\. Frozen visual encoder features are subsequently aligned to TaSS using a lightweight MLP, enabling improved discriminative learning without fine\-tuning pretrained backbones\. We further provide theoretical analysis showing that TaSS preserves semantic consistency while enforcing enhanced inter\-class separation and controlled intra\-class variance\. Extensive experiments on skeleton\-based human action recognition, video classification, and image classification benchmarks demonstrate consistent improvements over existing semantic alignment approaches, with gains exceeding 3 percentage points on average and up to 8\.5 points on challenging datasets\.

## TACO: Towards Task\-Consistent Open\-Vocabulary Adaptation in Video Recognition

**Authors:** Minghao Zhu; Xiao Lin; Mengxian Hu; Xun Zhou; Liuyi Wang; Xiaoyan Qi; Chengju Liu; Qijun Chen

**ID:** 154934\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154934

[Paper](<https://openreview.net/forum?id=9qHLzDW8KJ>) | [PDF](<https://openreview.net/pdf?id=9qHLzDW8KJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154934>)

_Abstract unavailable from the accessible public sources._

## Harnessing Image Diffusion Prior for Photo\-Realistic Video Restoration

**Authors:** Fanghua Yu; Hongyu An; Jinfan Hu; Xinqi Lin; Zhiyuan You; Jian Wang; Hongyang Li; Chao Dong; Jinjin Gu

**ID:** 151124\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151124

[Paper](<https://openreview.net/forum?id=conEYoQsmd>) | [PDF](<https://openreview.net/pdf?id=conEYoQsmd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151124>)

_Abstract unavailable from the accessible public sources._

## LSVD: Loss\-Aware Low\-Rank Approximation for Efficient Low\-Precision Vision\-Language Models

**Authors:** Haiyu Wang; Yutong Wang; Leshu Li; Yihui Ren; Sai Qian Zhang

**ID:** 153335\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153335

[Paper](<https://openreview.net/forum?id=M4tqmEOVbT>) | [PDF](<https://openreview.net/pdf?id=M4tqmEOVbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153335>)

_Abstract unavailable from the accessible public sources._

## UTOPI: Efficient Egocentric Long\-Video Understanding in AR via User\-Guided Token Pre\-Compression

**Authors:** ziqi wang; Su Chen; Qiance Tang; Jieyu Lin; Ziyun Li; Barbara De Salvo; Sai Qian Zhang

**ID:** 153858\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153858

[Paper](<https://openreview.net/forum?id=ICcMtlCHJL>) | [PDF](<https://openreview.net/pdf?id=ICcMtlCHJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153858>)

_Abstract unavailable from the accessible public sources._

## VINCIE\-NExT: Unlocking Video Editing from Images via In\-Context Modeling

**Authors:** Leigang Qu; Feng Cheng; Ziyan Yang; Bangbang Yang; Zhaoyang Huang; Wei Chow; Yicong Li; Wenjie Wang; Tat\-Seng Chua; Yan Zeng

**ID:** 152863 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PosCNbmdH8>) | [PDF](<https://openreview.net/pdf?id=PosCNbmdH8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152863>)

Building a capable video editor remains significantly harder than a video generator: editing requires \(source, instruction, edited\) triplets that are prohibitively expensive to annotate and difficult to synthesize at scale, whereas image editing has already reached maturity with millions of such pairs readily available\. In this work, we introduce Chain\-of\-Editing, a unified framework that transfers editing capability from images to videos through in\-context visual demonstrations, alleviating the need for large\-scale paired video editing data\. Chain\-of\-Editing decomposes video editing into a structured chain of composable sub\-tasks \(Video to Image to Image to Video\), routing editing intent through the image domain and enabling scalable joint training from heterogeneous image and video corpora under a unified diffusion objective\. An image editing pair, synthesized by the model or supplied by the user, is prepended as an in\-context visual demonstration that serves as a spatial appearance blueprint for every output frame\. To ground appearance edits across the interleaved context, we introduce a novel position encoding that links image demonstrations and video frames in a shared spatial coordinate system, enabling pixel\-faithful propagation of appearance changes to every output frame\. Chain\-of\-Editing further provides principled test\-time scaling: by executing the sub\-task chain as progressive diffusion stages, editing quality can be improved by investing additional compute without retraining\. Comprehensive experiments on OpenVE\-Bench demonstrate the state\-of\-the\-art performance across diverse editing categories, with ablations confirming the effectiveness of each component\.

## GenZ: Hybrid statistical–foundational models for knowledge discovery from real\-valued multidimensional targets

**Authors:** Marko Jojic; Nebojsa Jojic

**ID:** 151515 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4poCCC5UA>) | [PDF](<https://openreview.net/pdf?id=a4poCCC5UA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151515>)

We present GenZ, a hybrid model that turns a foundational model \(FM\) into a \{\\bf knowledge\-discovery engine\} explaining variation in real\-valued multidimensional targets\. The FM is treated as a noisy oracle that can answer yes/no questions about a semantic item $s$ \(text, image, or both\) and GenZ learns \{\\bf which questions to ask\} so that the answers $\\bz$ explain the statistical link to a possibly high\-dimensional target $\\by$\. Discovery is driven by \{\\bf group reasoning\}: at each step, the model partitions items by the posterior of the current latent features, and asks the FM to articulate the semantic commonality that explains the divide\. The resulting feature descriptors $\\theta\_f$ are the primary product\-\-\-human\-readable hypotheses about why $s$ predicts $\\by$\-\-\-while predictive accuracy is a secondary, but consistently strong, by\-product \(e\.g\.\~beating both the 0\-shot FM baseline and TabPFN on LLM embeddings of the same items in hedonic price regression\)\. Across four domains\-\-\-hedonic house pricing, Netflix cold\-start recommendations, Arizona species ecology, and human visual\-cortex fMRI\-\-\-GenZ recovers dataset\-specific structure that the FM does not surface from priors alone\. Holding the items $s$ fixed and varying only the target $\\by$ \(Arizona species under spatial/taxonomic/functional targets; the same natural images under FFA/EBA/PPA brain responses\) yields \{\\bf qualitatively different\} discovered feature sets, demonstrating that GenZ characterizes the $s\\\!\\to\\\!\\by$ link rather than the marginal distribution of $s$\.

## AgentVista: Evaluating Multimodal Agent in Ultra\-Challenging Realistic Visual Scenarios

**Authors:** Zhaochen Su; Jincheng Gao; Hangyu Guo; Zhenhua Liu; Lueyang Zhang; Xinyu Geng; Shijue Huang; Peng Xia; Guanyu Jiang; Cheng Wang; Yue Zhang; Yi R\. \(May\) Fung; Junxian He

**ID:** 153463\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153463

[Paper](<https://openreview.net/forum?id=L7xyzwUody>) | [PDF](<https://openreview.net/pdf?id=L7xyzwUody>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153463>)

Real\-world multimodal agents solve multi\-step workflows grounded in visual evidence\. For example, an agent can troubleshoot a device by linking a wiring photo to a schematic and validating the fix with online documentation, or plan a trip by interpreting a transit map and checking schedules under routing constraints\. However, existing multimodal benchmarks mainly evaluate single\-turn visual reasoning or specific tool skills, and they do not fully capture the realism, visual subtlety, and long\-horizon tool use that practical agents require\. We introduce AgentVista, a benchmark for generalist multimodal agents that spans 25 sub\-domains across 7 categories, pairing realistic and detail\-rich visual scenarios with natural hybrid tool use\. Tasks require long\-horizon tool interactions across modalities, including web search, image search, page navigation, and code\-based operations for both image processing and general programming\. Comprehensive evaluation of state\-of\-the\-art models exposes significant gaps in their ability to carry out long\-horizon multimodal tool use\. Even the best model in our evaluation, GPT\-5\.4 with tools, achieves only 31\.58% overall accuracy, and hard instances can extend to 25 tool\-calling turns\. We expect AgentVista to accelerate the development of more capable and reliable multimodal agents for realistic and ultra\-challenging problem solving\.

## Towards On\-Policy Data Evolution for Visual\-Native Multimodal Deep Search Agents

**Authors:** Shijue Huang; Hangyu Guo; Guanting Dong; Chenxin Li; Junting Lu; Xinyu Geng; Zhaochen Su; Zhenyu Li; Shuang Chen; Hongru WANG; Yi R\. \(May\) Fung

**ID:** 148687\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148687

[Paper](<https://openreview.net/forum?id=vnIJBAvcbS>) | [PDF](<https://openreview.net/pdf?id=vnIJBAvcbS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148687>)

Multimodal deep search requires an agent to solve open\-world problems by chaining search, tool use, and visual reasoning over evolving textual and visual context\. Two bottlenecks limit current systems\. First, existing tool\-use harnesses treat images returned by search, browsing, or transformation as transient outputs, so intermediate visual evidence cannot be re\-consumed by later tools\. Second, training data is usually built by fixed curation recipes that cannot track the target agent's evolving capability\. To address these challenges, we first introduce a visual\-native agent harness centered on an image bank reference protocol, which registers every tool\-returned image as an addressable  reference and makes intermediate visual evidence reusable by later tools\. On top of this harness, On\-policy Data Evolution \(ODE\) runs a closed\-loop data generator that refines itself across rounds from rollouts of the policy being trained\. This per\-round refinement makes each round's data target what the current policy still needs to learn\. The same framework supports both diverse supervised fine\-tuning data and policy\-aware reinforcement learning data curation, covering the full training lifecycle of the target agent\.  Across 8 multimodal deep search benchmarks, ODE improves the Qwen3\-VL\-8B agent from 24\.9% to 39\.0% on average, surpassing Gemini\-2\.5 Pro in standard agent\-workflow setting \(37\.9%\)\. At 30B, ODE raises the average score from 30\.6% to 41\.5%\. Further analyses validate the effectiveness of image\-bank reuse, especially on complex tasks requiring iterative visual refinement, while rollout\-feedback evolution yields more grounded SFT traces and better policy\-matched RL tasks than static synthesis\.

## InstructVVT: Instruction\-Driven Video Virtual Try\-On without Auxiliary Spatial Priors

**Authors:** Dingbao Shao; Song Wu; Xinyu Chen; Qian Wang; Jiahang Li; Kuai Jiang; Jiang Lin; Yuhang Liu; Chen Ziyu; Duo Li; Hu Jiaxin; Shengrong Gu; Ziheng Tang; Liu Rongrong; Yanlun Peng; Liang Li; Junlan Feng; Lujia Jin; Ting Zhang; Jian Yang; Zili Yi

**ID:** 149716\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149716

[Paper](<https://openreview.net/forum?id=nxlHQt3QrN>) | [PDF](<https://openreview.net/pdf?id=nxlHQt3QrN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149716>)

Video virtual try\-on is a highly constrained editing task requiring the precise replacement of a target person's clothing while strictly preserving the original video's spatial structure and temporal dynamics\. Existing methods heavily rely on auxiliary handcrafted spatial priors \(e\.g\., masks, poses\) for editing control\. However, these priors are prone to failure in unconstrained real\-world videos and often compress rich visual context into incomplete structural signals\. Furthermore, standard reconstruction objectives fail to fully capture try\-on\-specific human preferences\. To address these challenges, we propose InstructVVT, an instruction\-driven and reference\-guided video virtual try\-on framework based on a Diffusion Transformer \(DiT\) that operates without inference\-time spatial priors\. Our core insight is to recover fine\-grained control directly from the input triplet \(source video, reference garment, and instruction\) via a dual\-level reference conditioning scheme\. Specifically, an MLLM infers semantic edit tokens for target disambiguation and structural preservation, while a lightweight conditioning pathway explicitly injects fine\-grained visual garment details\. Finally, we design a try\-on\-specific reward and utilize the DiffusionNFT algorithm to align the model with human preferences\.  Extensive experiments on ViViD\-S and TripVVT\-Bench demonstrate that InstructVVT outperforms state\-of\-the\-art open\-source methods in garment fidelity, structural preservation, and temporal consistency, despite requiring fewer inference\-time controls\.

## FrameSelect: A Unified Library for Video Frame Selection and Evaluation

**Authors:** Arihant Jain; Chaosheng Dong

**ID:** 139258\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139258

[Paper](<https://openreview.net/forum?id=blSpUkSwiB>) | [PDF](<https://openreview.net/pdf?id=blSpUkSwiB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139258>)

Frame selection\-\-\-picking a small set of informative frames from a video to feed a vision\-language model \(VLM\)\-\-\-sits at the front of every video\-VLM system, yet the literature is fragmented: most works do not share a candidate pool, encoder, frame budget, or answering VLM, making published gains hard to compare across works\. We introduce FrameSelect, to the best of our knowledge the first Python library that treats the selector as a standalone, interchangeable component, cleanly separated from the encoder that computes representations and the VLM that answers\. Any registered selector composes with any registered evaluator through a single call, and adding a new selector, dataset, encoder, or VLM backend is an isolated extension; a replay mode further rebuilds any table under a different answering VLM without re\-running selection\. We release reference implementations of 20 selectors, 15 evaluators spanning answer\-level and selection\-level metrics, and the first unified benchmark comparing frame selectors under a shared protocol across seven evaluators spanning both evaluation modes\. This comparison surfaces findings that existing studies cannot: rankings invert across benchmarks\. Our library is available at https://anonymous\.4open\.science/r/FrameSelect\-D2A4\.

## Evaluating Depth and Breadth in Test\-Time Scaling for Compositional Visual Generation

**Authors:** Shantanu Jaiswal; Mihir Prabhudesai; Nikash Bhardwaj; Zheyang Qin; Amir Zadeh; Chuan Li; Katerina Fragkiadaki; Deepak Pathak

**ID:** 139290\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139290

[Paper](<https://openreview.net/forum?id=ZA59XMPrcN>) | [PDF](<https://openreview.net/pdf?id=ZA59XMPrcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139290>)

Test\-time scaling is increasingly used to improve visual generation, yet it remains unclear how different scaling strategies should be evaluated when they trade off accuracy, latency, throughput, compute cost, and visual quality in different ways\. We study this question through a systematic comparison of prominent test\-time strategies including sampler\-depth scaling, breadth\-oriented parallel sampling, step\-by\-step construction, iterative refinement, and hybrid breadth\-\-depth for compositional text\-to\-image generation\. Our results show that the preferred strategy depends on prompt complexity and cost assumptions: parallel sampling remains competitive for simpler prompts and high\-throughput settings, while iterative refinement becomes increasingly useful as prompts require more object, spatial, numeric, and relational bindings\. Surprisingly, step\-by\-step generation does not consistently inherit the benefits of step\-by\-step reasoning in language models, since early visual decisions about field of view, layout, scale, and resolution can constrain later edits\. Across fixed budgets, hybrid policies often provide the strongest accuracy\-\-cost tradeoff by combining parallel exploration with sequential correction\. Finally, we show that refinement\-based scaling is bottlenecked by verifier and editor reliability, and that adaptive routing can recover much of the benefit of fixed hybrid policies at lower average cost\. Overall, our findings show that effective test\-time scaling depends on matching the policy to the prompt and deployment bottleneck: breadth supports exploration and throughput, depth supports semantic repair, and hybrid/adaptive policies offer the strongest tradeoff when compositional correctness is the priority\.

## Does Inference\-Time Reasoning Really Improve Video Understanding?

**Authors:** Zhuohao Yu; Yu Zhou; Zhecan Wang; Rui Sun; Kai\-Wei Chang; Nanyun Peng

**ID:** 154086\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154086

[Paper](<https://openreview.net/forum?id=GJtLZ5sLOQ>) | [PDF](<https://openreview.net/pdf?id=GJtLZ5sLOQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154086>)

_Abstract unavailable from the accessible public sources._

## DiffCap\-RL: Differential QA Rewards for Dense Image and Video Captioning

**Authors:** Kaixun Jiang; Zhihang Liu; Jiyuan Fu; Yuzheng Wang; Pandeng Li; Junjie Zhou; Chen\-Wei Xie; Yun Zheng; Wenqiang Zhang

**ID:** 152243\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152243

[Paper](<https://openreview.net/forum?id=UWkuOadUR9>) | [PDF](<https://openreview.net/pdf?id=UWkuOadUR9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152243>)

_Abstract unavailable from the accessible public sources._

## Controllable and Content Based Recommendations

**Authors:** Firat Oncel; Jihoon Jeong; Emiliano Penaloza; Mirco Ravanelli; Laurent Charlin; Cem Subakan

**ID:** 152374\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152374

[Paper](<https://openreview.net/forum?id=TYSDot6Dmj>) | [PDF](<https://openreview.net/pdf?id=TYSDot6Dmj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152374>)

Traditional recommendation systems rely on latent \(dense\) representations, making them difficult to interpret and control\. We propose the Controllable and Content\-Based Recommendations \(CCBR\) framework, which builds its recommendations from textual user profile representations\. CCBR plugs into collaborative filtering models and introduces controllability via text bottlenecks\. We show that CCBR enables text\-based and multimodal interventions, allowing users to steer the model towards the directions they prefer\. Different from existing controllable recommendation systems, CCBR infers the text summaries directly from item contents \(images, audio or video\)\. Across image\-, audio\-, and video\-based datasets, we demonstrate that the proposed framework obtains competitive model performance with standard \(latent\-representation\) models while providing controllable model summaries via text\. The model also outperforms TEARS, a recent baseline for controllable recommendation systems\. Through systematic interventions, we demonstrate the efficacy of the user steering mechanism\.

## Lang\-SVG: Hierarchical Image Vectorization with Language Priors

**Authors:** Xi Liu; Chaoyi Zhou; Run Wang; Jiaang Li; Feng Luo; Junxiang Huang; Siyu Huang

**ID:** 155278\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155278

[Paper](<https://openreview.net/forum?id=6rigf2ETWn>) | [PDF](<https://openreview.net/pdf?id=6rigf2ETWn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155278>)

Image vectorization reconstructs raster images as compact scalable vector graphics \(SVG\) representations\. Most of existing vectorization methods optimize for pixel\-level rendering fidelity, where the reconstructed SVGs often lack alignment with human\-perceived object\-part hierarchies, making them difficult to manipulate\.  To address this, this work for the first time studies the problems of hierarchical image vectorization and SVG semantic labeling\.  We propose Lang\-SVG, a tree\-structured SVG representation that encodes SVG primitives with language tags and parent\-child hierarchy\. Lang\-SVG novelly incorporates granularity\-controllable segmentation priors and vision\-language priors into the optimization\-based vectorization pipeline\.  It introduces a Tree\-Guided Pruning and Merging module to reduce redundant multi\-granularity SVG primitives into coherent semantic structures, and an L1\-SAM Prompter to recover missing regions\. It also includes a new SVG semantic tagging method that integrates SVG tree context into multimodal large language models \(MLLMs\) to assign language tags to SVG primitives\. We also propose a new evaluation protocol for image vectorization, measuring structural quality and semantic part alignment beyond reconstruction fidelity\. Experiments demonstrate that Lang\-SVG achieves state\-of\-the\-art performance in both rendering and structural quality\.

## SkillCIR: Intent\-Guided Skill Composition for Training\-Free Composed Image Retrieval

**Authors:** Yuanmin Tang; Lin Li; Yang Du; Yuan Gao; Massimiliano Mancini; Jun Song; Gaopeng Gou; Gang Xiong; Meikang Qiu; Cheng Yu; Bo Zheng

**ID:** 149869 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mabFRBx8a2>) | [PDF](<https://openreview.net/pdf?id=mabFRBx8a2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149869>)

Composed Image Retrieval \(CIR\) retrieves a target image given a reference image and a textual edit\. Existing training\-free methods prompt a frozen multimodal large language model \(MLLM\) to infer the user's edit intent and rewrite the composed query into a single retrieval artifact, such as a target caption, an edited image, or a modality\-fused embedding\. These methods can reason about the edit, but they have limited means to execute that reasoning during retrieval\. A key remaining bottleneck for training\-free CIR appears to be not only intent understanding, but intent execution\. To address this challenge, we propose SkillCIR, a training\-free framework that tackles the intent execution gap by routing the inferred constraints to specialized retrieval skills\. Specifically, the same frozen MLLM that infers the intent also emits a structured plan of active constraints; each constraint activates a typed skill that scores gallery candidates along one evidence channel, and the per\-skill scores are composed in score space with explicit signs and re\-checked by a local verification step\. Across three benchmarks and three CLIP backbones, SkillCIR improves the primary recall/mAP metrics by 2\.8 to 7\.9 points at the latency of typical training\-free CIR pipelines and around 23x faster than the latest training\-free state of the art\. These gains hold with a fixed skill pool and no model\-parameter updates, suggesting that improving the means to execute the inferred edit is a useful complement to stronger reasoning about it\.

## HumanStereo: A Benchmark for Metric Facial Depth Estimation and Its Evaluation

**Authors:** Alexandru\-Ion Marinescu; DIANA\-LAURA BORZA; DARABANT Sergiu Adrian

**ID:** 138969\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138969

[Paper](<https://openreview.net/forum?id=tOPPmPEqR5>) | [PDF](<https://openreview.net/pdf?id=tOPPmPEqR5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138969>)

Stereo depth estimation of human faces is a prerequisite for various computer vision applications, yet existing stereo benchmarks target outdoor, driving, or large object reconstruction scenarios and lack the anatomical precision and evaluation framework these applications require\. We introduce HumanStereo, the first large\-scale synthetic stereo dataset dedicated to human faces, comprising 417k stereo pairs from 128 photorealistic avatars across 109 unique stereo configurations and four indoor environments, with dense ground\-truth annotations including depth maps, surface normals, segmentation masks, and facial landmarks\. We argue that standard evaluation metrics such as $\\delta\_1$ and RMSE are ill\-suited for facial depth estimation, and propose two complementary metrics: task\-grounded absolute inlier\-ratio \(IR\) and Landmark 3D Distance Error \(L3DE\) for metric anatomical accuracy\. We benchmark five representative stereo methods: geometrical matchers, RAFT\-Stereo, IGEV\+\+, MASt3R, and FoundationStereo\. A downstream evaluation on real optometric data for inter\-pupillary distance \(IPD\) measurement, a parameter required in all eyeglass prescription, shows that even the best\-performing model remains an order of magnitude above the sub\-millimeter accuracy required for clinical deployment\.

## Video Stitching from Multiple Moving Cameras

**Authors:** Shira Ifergane; Roy Amoyal; Shahar Benishay; Oren Freifeld

**ID:** 154835\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154835

[Paper](<https://openreview.net/forum?id=Aaxi9KSqTI>) | [PDF](<https://openreview.net/pdf?id=Aaxi9KSqTI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154835>)

_Abstract unavailable from the accessible public sources._

## Behavior Pack Optimization for Video MLLM Post\-Training

**Authors:** Zhaolu Kang; Shiyu Liu; Tailong Luo; Wei Zhang; Yingjie He; Guangyuan Dong; Siheng Wang; Liang He; Lei Wei; Jiaqi Su; Shuang Chen; Guansu Wang; Haoyu Ji; Qishi Zhan; Kaiyue Zhou

**ID:** 150981\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150981

[Paper](<https://openreview.net/forum?id=dnqyvgz1LI>) | [PDF](<https://openreview.net/pdf?id=dnqyvgz1LI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150981>)

_Abstract unavailable from the accessible public sources._

## TokenRepel: Generating Diverse Image Sets Without Sacrificing Quality

**Authors:** Qingtao Yu; Zhen Wang; Ning Lai; Boyang Hu; Hongdong Li; Dylan Campbell

**ID:** 148516\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148516

[Paper](<https://openreview.net/forum?id=xJDcbc6iWs>) | [PDF](<https://openreview.net/pdf?id=xJDcbc6iWs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148516>)

_Abstract unavailable from the accessible public sources._

## Iris: Empowering Video MLLMs with High\-Frequency Pose Priors via Spatiotemporal Binding

**Authors:** Jiahang Zhang; Yushuo Guan; Yuanxing Zhang; Pengfei Wan; Jiaying Liu

**ID:** 149127\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149127

[Paper](<https://openreview.net/forum?id=sfWwIjHvqo>) | [PDF](<https://openreview.net/pdf?id=sfWwIjHvqo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149127>)

_Abstract unavailable from the accessible public sources._

## Latent Process Generator Matching

**Authors:** Lukas Billera; Hedwig Nora Nordlinder; Ben Murrell

**ID:** 155816\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155816

[Paper](<https://openreview.net/forum?id=2ghWjnDjkj>) | [PDF](<https://openreview.net/pdf?id=2ghWjnDjkj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155816>)

Many recent flow\-matching and diffusion\-style generative models rely on auxiliary stochastic dynamics during training: a richer process is simulated to define conditional targets, but the auxiliary state is either intractable to sample at generation time or simply not part of the desired output\. Existing Generator Matching theory formalises conditioning on static latent random variables, and several recent papers prove special cases of projection results for particular augmented\-state constructions\. We introduce latent process generator matching, a general framework that treats the observed generative state as a deterministic image $X\_t=\\Phi\(Y\_t\)$ of a tractable Markov process $Y\_t$\. We show that in this setting one may learn the generator of a stochastic process on the image space which has the same one\-time marginal distributions as the projected process\. This generalizes and subsumes the discrete latent process results from the literature, and extends Generator Matching from static latent variables to a rich family of time\-dependent latent conditional processes\.

## Learning Visual Feature\-Based World Models via Residual Latent Action

**Authors:** Xinyu Zhang; Zhengtong Xu; Yutian Tao; Yeping Wang; Yu She; Abdeslam Boularias

**ID:** 148146\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148146

[Paper](<https://openreview.net/forum?id=zvJIeHOjvu>) | [PDF](<https://openreview.net/pdf?id=zvJIeHOjvu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148146>)

World models predict future transitions from observations and actions\. Existing works predominantly focus on image generation only\. Visual feature\-based world models, on the other hand, predict future visual features instead of raw video pixels, offering a promising alternative that is more efficient and less prone to hallucination\.  However, current feature\-based approaches rely on direct regression, which leads to blurry or collapsed predictions in complex interactions, while generative modeling in high\-dimensional feature spaces still remains challenging\. In this work, we discover that a new type of latent action representation, which we refer to as \*Residual Latent Action\* \(RLA\), can be easily learned from DINO residuals\. We also show that RLA is predictive, generalizable, and encodes temporal progression\. Building on RLA, we propose \*RLA World Model\* \(RLA\-WM\), which predicts RLA values via flow matching\. RLA\-WM outperforms both state\-of\-the\-art feature\-based and video\-diffusion world models on simulation and real\-world datasets, while being orders of magnitude faster than video diffusion\. Furthermore, we develop two robot learning techniques that use RLA\-WM  to improve policy learning\. The first one is a minimalist world action model with RLA that learns from actionless demonstration videos\. The second one is the first visual RL framework trained entirely inside a world model learned from offline videos only, using a video\-aligned reward and no online interactions or handcrafted rewards\.

## Good Token Hunting: A Hitchhiker's Guide to Token Selection for Visual Geometry Transformers

**Authors:** Shuhong Zheng; Michael Oechsle; Erik Sandström; Marie\-Julie Rakotosaona; Federico Tombari; Igor Gilitschenski

**ID:** 149416\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149416

[Paper](<https://openreview.net/forum?id=qCNsCfsxKh>) | [PDF](<https://openreview.net/pdf?id=qCNsCfsxKh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149416>)

Visual geometry transformers have become powerful architectures for multi\-view 3D reconstruction, enabling joint prediction of multiple 3D attributes in a feed\-forward manner\. However, their computational cost grows quadratically with the input sequence length due to the global attention layers inside these models\. This limits both their scalability and efficiency\. In this work, we address this challenge with a simple yet general strategy: restricting the number of key/value tokens that each query interacts with during global attention\. To achieve effective token selection, we introduce a two\-stage framework\. First, an inter\-frame selection step operates at the frame level to identify frames that should be preserved\. Second, an intra\-frame selection step further discards more redundant tokens within the selected frames\. Our analysis highlights the advantage of a diversity\-based strategy for inter\-frame selection, which ensures broad coverage of the scene\. For intra\-frame selection, we show that layer\-aware sparsification is necessary, with the selection process guided by the entropy of the global attention pattern\. Our approach offers a superior speed\-accuracy trade\-off compared to existing solutions\. Extensive experiments show that it accelerates visual geometry transformers by over 85% for scenes with 500 images while maintaining, or even improving, baseline performance, which hints that how our token selection strategy can play a crucial role in future applications of visual geometry transformers\.

## Bidirectional Sparse Attention for Faster Video Diffusion Training

**Authors:** Chenlu Zhan; Wen Li; Jun Zhang; chuyu shen; Lele Cheng

**ID:** 154292\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154292

[Paper](<https://openreview.net/forum?id=Es6mFi84XA>) | [PDF](<https://openreview.net/pdf?id=Es6mFi84XA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154292>)

Video diffusion Transformer \(DiT\) models excel in generative quality but hit major computational bottlenecks when producing high\-resolution, long\-duration videos\. Full attention requires computing dot products between all pairs of queries and keys, resulting in a quadratic computational complexity with respect to the sequence length \(\(O\(L^2\)\)\), leading to high training and inference costs\.To overcome this limitation, we propose a Bidirectional Sparse Attention \(BSA\) framework that sparsification from both the query and key–value directions to reduce the quadratic cost of full attention\.Specifically, the sparsification of queries is achieved by pruning tokens that are locally redundant or semantically similar within the 3D spatiotemporal domain of a video\. For the key–value pairs, only those that are highly correlated with the query at a global level are selected for attention computation\. Furthermore, we design a dynamic threshold adjustment mechanism to adaptively regulate the selected number of key–value pairs, thereby maintaining quality without degradation\. Extensive experiments demonstrate that BSA significantly accelerates DiT training across long sequences, reducing FLOPs by up to 20× and achieving 17\.79× faster attention training, while preserving or even surpassing the generative quality of full attention\.

## Shaping Useful Noise: Energy Distributions Predict Visual Pretraining Quality

**Authors:** Ching Lam Choi; Antonio Torralba; Phillip Isola; Stefanie Jegelka

**ID:** 153569\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153569

[Paper](<https://openreview.net/forum?id=KQRZdjU6Q1>) | [PDF](<https://openreview.net/pdf?id=KQRZdjU6Q1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153569>)

Synthetic data can scale visual pretraining, but current selection criteria only partially explain which datasets train strong representations\. We propose using the energy profile of a dataset\-\-\-the distribution of log\-probability levels it occupies under a normalised real\-image density model\-\-\-as an audit and curation principle for synthetic data\. To operationalise this view, we introduce Energy\-Level Distribution Distance \(Eld\), which compares real and synthetic energy distributions\. Real images span sparse high\-likelihood scenes and dense low\-likelihood textures, so useful synthetic data should cover this energy range rather than collapse to likely but low\-variation samples\. Across diverse synthetic datasets, Eld exposes mismatches missed by FID and predicts pretraining performance beyond FID, LPIPS variation, and feature\-space recall, including across CNN and ViT self\-supervised settings\. We then use Eld to resample and mix synthetic sources, matching the real\-image energy histogram while preserving diversity and improving downstream transfer\.

## Disentangling Where and When: Factored Spatio\-Temporal Explanations for Video Action Recognition

**Authors:** Bhavan Vasu; Giuseppe Raffa; Prasad Tadepalli

**ID:** 150252\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150252

[Paper](<https://openreview.net/forum?id=jaIWjThmrT>) | [PDF](<https://openreview.net/pdf?id=jaIWjThmrT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150252>)

Post\-hoc explanation methods for video action recognition typically conflate spatial appearance and temporal dynamics into a single saliency or importance map\.  We propose a perturbation\-based framework that disentangles these contributions into a spatial appearance mask \($M\_a$\) and a temporal motion mask \($M\_m$\)\. The two masks are jointly optimized against a frozen action recognition model through factored perturbation architecture, with nearest frame replacement to identify important temporal dynamics\. A separation penalty discourages the appearance mask from spending budget on frames that the motion mask has already discarded, and a one\-sided ReLU area constraint allows the realized masks to fall below the optimization budget when the input does not require its full extent\. To evaluate these explanations, we introduce a separation protocol that sweeps spatial pixels and temporal frames independently, backed by proofs characterizing the inherent geometric bias of standard Insertion metrics\. Across EPIC\-Kitchens\-55, EGTEA Gaze\+, and Something\-Something V2, our method attains the lowest deletion AUC against leading baselines while producing masks roughly five times sparser\.

## Test\-Time Conditioning with Representation\-Aligned Visual Features

**Authors:** Nicolas Sereyjol\-Garros; Ellington Kirby; Victor Letzelter; Victor Besnier; Nermin Samet

**ID:** 148903 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uJPI1xg4IN>) | [PDF](<https://openreview.net/pdf?id=uJPI1xg4IN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148903>)

While representation alignment with self\-supervised models has been shown to improve diffusion model training, its potential for enhancing inference\-time conditioning remains largely unexplored\.  We introduce Representation\-Aligned Guidance \(REPA\-G\), a framework that leverages these aligned representations, with rich semantic properties, to enable test\-time conditioning from features in generation\. By optimizing a similarity objective \(the \*potential\*\) at inference, we steer the denoising process toward a conditioned representation extracted from a pre\-trained feature extractor\. Our method provides versatile control at multiple levels of granularity, ranging from patch level matching via single patches to broad semantic guidance using global image feature tokens\. We further extend this to multi\-concept composition, allowing for the faithful combination of distinct concepts\.  REPA\-G operates entirely at inference time with no additional training required, offering a flexible and precise alternative to often ambiguous text prompts or coarse class labels\. Our approach achieves high\-quality, diverse generations on ImageNet and COCO\.

## AnyMo: Scaling Any\-Modality Conditional Motion Generation with Masked Modeling

**Authors:** Yiheng Li; Zhuo Li; RuiBing Hou; Yingjie Chen; Hong Chang; Hao Liu; Shiguang Shan

**ID:** 153279\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153279

[Paper](<https://openreview.net/forum?id=MRJBlKpvg3>) | [PDF](<https://openreview.net/pdf?id=MRJBlKpvg3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153279>)

Conditional human motion generation remains a fundamental challenge in computer vision and robotics\. Despite significant progress, current methods are often constrained by fixed modality configurations and task\-specific architectures, leaving cross\-modal interactions and the scaling laws of multimodal\-conditioned synthesis largely underexplored\. A key bottleneck is the scarcity of large\-scale modality\-aligned motion data, limiting generalization across diverse control signals\. In this work, we introduce \\textbf\{OmniHuMo\}, a large\-scale, high\-quality dataset comprising over 5,000 hours of motion and 3\.2 million sequences with precisely aligned multimodal annotations \(e\.g\., text, speech, music, and trajectory\)\. Leveraging OmniHuMo, we propose \\textbf\{AnyMo\}, a unified multimodal framework combining a Residual FSQ\-based motion tokenizer with a scalable masked modeling transformer, enabling  high\-quality motion synthesis under arbitrary modality combinations\.  Extensive experiments show that AnyMo achieves high\-fidelity synthesis while offering flexible control over both spatial and stylistic attributes\.

## Learning to Synergize Textual and Visual Prompts for Fine\-Grained Traffic Element Detection in HD Maps

**Authors:** Xiaoyang Bi; Haowen Guo; Caoshengzhe Xue; Siyuan Li; TAO XUE; Dong Liu; Mengshi Qi

**ID:** 139487\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139487

[Paper](<https://openreview.net/forum?id=N5RUffTq4w>) | [PDF](<https://openreview.net/pdf?id=N5RUffTq4w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139487>)

High\-definition \(HD\) map construction demands the exhaustive and precise parsing of diverse traffic elements\. However, practical traffic scene perception faces two fundamental hurdles: \(1\) generalizing to novel traffic elements that continuously emerge during periodic map updates, and \(2\) synergizing fine\-grained textual descriptions with visual exemplars to resolve severe visual ambiguities\. Consequently, even state\-of\-the\-art Vision\-Language Models \(VLMs\) exhibit severe vulnerabilities when confronting these challenges, hindering their direct deployment\. To bridge this gap, we formalize Multimodal Fine\-grained Traffic Element Detection \(MFTED\), a practical task dedicated to identifying traffic targets by synergizing nuanced textual and visual prompts\. We introduce MFT\-150K, a large\-scale benchmark featuring over 150K images and 337K instance annotations, explicitly designed to evaluate fine\-grained multimodal alignment and novel category generalization\. Furthermore, we provide a comprehensive benchmark of state\-of\-the\-art models and propose an initial baseline to explore multimodal fusion strategies\. Extensive experiments reveal a significant multimodal fusion gap in current VLMs when handling fine\-grained traffic semantics\. Even our proposed probabilistic latent\-space alignment yields only limited gains, underscoring the difficulty of this task and positioning MFT\-150K as a challenging benchmark for advancing intelligent transportation\. Our full\-scale dataset is publicly available at https://huggingface\.co/datasets/MFTED/MFTED, and code will be released upon publication\.

## SpatialVAM: Spatial\-Aware Multi\-View Video Diffusion as a Data\-Efficient Robot Policy

**Authors:** Peiyan Li; Yixiang Chen; Yuan Xu; Jiabing Yang; Xiangnan Wu; Jun Guo; Nan Sun; Long Qian; Xinghang Li; Xin Xiao; Minghui Zhang; Jing Liu; Nianfeng Liu; Tao Kong; Yan Huang; Liang Wang

**ID:** 151702\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151702

[Paper](<https://openreview.net/forum?id=Yg9wmxxbDb>) | [PDF](<https://openreview.net/pdf?id=Yg9wmxxbDb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151702>)

Robotic manipulation requires understanding both the 3D spatial structure of the environment and its temporal evolution, yet most existing policies neglect one or both aspects\. They often rely on 2D visual observations or backbones pretrained on static image\-\-text pairs, which leads to high data requirements and limited comprehension of environment dynamics\. To address this, we introduce SpatialVAM, \*\*the first 3D Video Action Model\*\* that simultaneously predict spatial\-aware multi\-view heatmap videos and RGB videos\. Our key insight is that this design naturally injects 3D information into video foundation models while aligning the representation format between video pretraining and action finetuning\. Extensive experiments demonstrate that SpatialVAM enables \*\*data\-efficient, robust, generalizable, and interpretable\*\* manipulation\. With only ten demonstration trajectories and no additional pretraining, SpatialVAM  handles challenging long\-horizon and contact\-rich tasks, generalizes to out\-of\-distribution settings, and predicts realistic future videos\. Evaluations on Meta\-World \(22\\%$\\uparrow$\), RoboCasa \(10\\%$\\uparrow$\) and real\-world robotic platforms \(16\\%$\\uparrow$\) show that SpatialVAM  consistently outperforms other video action models, vision language action models and 3D\-based policies, establishing a new state\-of\-the\-art in data\-efficient multi\-task manipulation\.

## Does Inference\-Time Reasoning Really Improve Video Understanding?

**Authors:** Zhuohao Yu; Yu Zhou; Zhecan Wang; Rui Sun; Kai\-Wei Chang; Nanyun Peng

**ID:** 154086\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154086

[Paper](<https://openreview.net/forum?id=GJtLZ5sLOQ>) | [PDF](<https://openreview.net/pdf?id=GJtLZ5sLOQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154086>)

_Abstract unavailable from the accessible public sources._

## DiffCap\-RL: Differential QA Rewards for Dense Image and Video Captioning

**Authors:** Kaixun Jiang; Zhihang Liu; Jiyuan Fu; Yuzheng Wang; Pandeng Li; Junjie Zhou; Chen\-Wei Xie; Yun Zheng; Wenqiang Zhang

**ID:** 152243\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152243

[Paper](<https://openreview.net/forum?id=UWkuOadUR9>) | [PDF](<https://openreview.net/pdf?id=UWkuOadUR9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152243>)

_Abstract unavailable from the accessible public sources._

## Controllable and Content Based Recommendations

**Authors:** Firat Oncel; Jihoon Jeong; Emiliano Penaloza; Mirco Ravanelli; Laurent Charlin; Cem Subakan

**ID:** 152374\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152374

[Paper](<https://openreview.net/forum?id=TYSDot6Dmj>) | [PDF](<https://openreview.net/pdf?id=TYSDot6Dmj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152374>)

Traditional recommendation systems rely on latent \(dense\) representations, making them difficult to interpret and control\. We propose the Controllable and Content\-Based Recommendations \(CCBR\) framework, which builds its recommendations from textual user profile representations\. CCBR plugs into collaborative filtering models and introduces controllability via text bottlenecks\. We show that CCBR enables text\-based and multimodal interventions, allowing users to steer the model towards the directions they prefer\. Different from existing controllable recommendation systems, CCBR infers the text summaries directly from item contents \(images, audio or video\)\. Across image\-, audio\-, and video\-based datasets, we demonstrate that the proposed framework obtains competitive model performance with standard \(latent\-representation\) models while providing controllable model summaries via text\. The model also outperforms TEARS, a recent baseline for controllable recommendation systems\. Through systematic interventions, we demonstrate the efficacy of the user steering mechanism\.

## Lang\-SVG: Hierarchical Image Vectorization with Language Priors

**Authors:** Xi Liu; Chaoyi Zhou; Run Wang; Jiaang Li; Feng Luo; Junxiang Huang; Siyu Huang

**ID:** 155278\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155278

[Paper](<https://openreview.net/forum?id=6rigf2ETWn>) | [PDF](<https://openreview.net/pdf?id=6rigf2ETWn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155278>)

Image vectorization reconstructs raster images as compact scalable vector graphics \(SVG\) representations\. Most of existing vectorization methods optimize for pixel\-level rendering fidelity, where the reconstructed SVGs often lack alignment with human\-perceived object\-part hierarchies, making them difficult to manipulate\.  To address this, this work for the first time studies the problems of hierarchical image vectorization and SVG semantic labeling\.  We propose Lang\-SVG, a tree\-structured SVG representation that encodes SVG primitives with language tags and parent\-child hierarchy\. Lang\-SVG novelly incorporates granularity\-controllable segmentation priors and vision\-language priors into the optimization\-based vectorization pipeline\.  It introduces a Tree\-Guided Pruning and Merging module to reduce redundant multi\-granularity SVG primitives into coherent semantic structures, and an L1\-SAM Prompter to recover missing regions\. It also includes a new SVG semantic tagging method that integrates SVG tree context into multimodal large language models \(MLLMs\) to assign language tags to SVG primitives\. We also propose a new evaluation protocol for image vectorization, measuring structural quality and semantic part alignment beyond reconstruction fidelity\. Experiments demonstrate that Lang\-SVG achieves state\-of\-the\-art performance in both rendering and structural quality\.

## SkillCIR: Intent\-Guided Skill Composition for Training\-Free Composed Image Retrieval

**Authors:** Yuanmin Tang; Lin Li; Yang Du; Yuan Gao; Massimiliano Mancini; Jun Song; Gaopeng Gou; Gang Xiong; Meikang Qiu; Cheng Yu; Bo Zheng

**ID:** 149869\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149869

[Paper](<https://openreview.net/forum?id=mabFRBx8a2>) | [PDF](<https://openreview.net/pdf?id=mabFRBx8a2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149869>)

Composed Image Retrieval \(CIR\) retrieves a target image given a reference image and a textual edit\. Existing training\-free methods prompt a frozen multimodal large language model \(MLLM\) to infer the user's edit intent and rewrite the composed query into a single retrieval artifact, such as a target caption, an edited image, or a modality\-fused embedding\. These methods can reason about the edit, but they have limited means to execute that reasoning during retrieval\. A key remaining bottleneck for training\-free CIR appears to be not only intent understanding, but intent execution\. To address this challenge, we propose SkillCIR, a training\-free framework that tackles the intent execution gap by routing the inferred constraints to specialized retrieval skills\. Specifically, the same frozen MLLM that infers the intent also emits a structured plan of active constraints; each constraint activates a typed skill that scores gallery candidates along one evidence channel, and the per\-skill scores are composed in score space with explicit signs and re\-checked by a local verification step\. Across three benchmarks and three CLIP backbones, SkillCIR improves the primary recall/mAP metrics by 2\.8 to 7\.9 points at the latency of typical training\-free CIR pipelines and around 23x faster than the latest training\-free state of the art\. These gains hold with a fixed skill pool and no model\-parameter updates, suggesting that improving the means to execute the inferred edit is a useful complement to stronger reasoning about it\.

## Improving Diffusion Posterior Samplers with Lagged Temporal Corrections for Image Restoration

**Authors:** Davide Evangelista; Elena Morotti; Francesco Pivi; Maurizio Gabbrielli

**ID:** 151348\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151348

[Paper](<https://openreview.net/forum?id=bCS5vqUUqK>) | [PDF](<https://openreview.net/pdf?id=bCS5vqUUqK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151348>)

_Abstract unavailable from the accessible public sources._

## Neural Refraction Fields for Image Verification

**Authors:** Sage Simhon; Jingwei Ma; Prafull Sharma; Lucy Chai; Yen\-Chen Lin; Phillip Isola

**ID:** 150170 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k9nUHL1sDu>) | [PDF](<https://openreview.net/pdf?id=k9nUHL1sDu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150170>)

_Abstract unavailable from the accessible public sources._

## Dynamic Causal Structure Discovery for Autoregressive Visual Generation

**Authors:** Songliang Guo; Qi Yan; Jianzhou Wang; Xinfu Liu; Cheng Zhen; Yirui Wu; Lixin Yuan; Wenxiao Zhang; Jun Liu

**ID:** 154443 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DWFojJ4tLc>) | [PDF](<https://openreview.net/pdf?id=DWFojJ4tLc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154443>)

_Abstract unavailable from the accessible public sources._

## C\-LoRA: Continual Low\-Rank Adaptation for Pre\-trained Visual Models

**Authors:** Xin Zhang; Liang Bai; Xian Yang

**ID:** 149746 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nf0YHUKcRr>) | [PDF](<https://openreview.net/pdf?id=nf0YHUKcRr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149746>)

Pre\-trained visual models have become fundamental in computer vision, but they face challenges in continual learning scenarios where data and tasks evolve over time\. Low\-Rank Adaptation \(LoRA\) offers efficient fine\-tuning capabilities but remains limited for such dynamic environments\. Standard LoRA cannot distinguish important subspaces, causing critical knowledge to be overwritten in sequential training\. Existing approaches address this by dynamically expanding the set of LoRA adapters—either maintaining a growing pool of task\-specific modules or merging new adapters into prior ones—at the cost of unbounded parameter growth or increasing inference complexity\. We propose Continual Low\-Rank Adaptation \(C\-LoRA\), a method that enables a single, shared LoRA adapter to handle sequential tasks without catastrophic forgetting—without requiring any module selection or fusion at inference\. The core of C\-LoRA is a learnable routing matrix $\\boldsymbol\{\\mathcal\{R\}\}$ that explicitly controls how each rank\-one subspace contributes to the weight update\. This matrix is decomposed into a stability component \($\\boldsymbol\{\\mathcal\{R\}\} \_ \{\\text\{base\}\}$\), which preserves knowledge from prior tasks, and a plasticity component \($\\boldsymbol\{\\mathcal\{R\}\} \_ \{\\delta\}$\), which drives adaptation to the current task—providing direct control over the stability\-plasticity trade\-off\. We analyze how $\\boldsymbol\{\\mathcal\{R\}\}$ governs gradient flow during sequential training, and demonstrate competitive performance across multiple benchmarks\.

## Visual Instruction Tuning Aligns Modalities through Abstraction

**Authors:** Luis Palacios; Lorenzo Basile; Diego Doimo; Alberto Cazzaniga

**ID:** 150518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hWOJLeN1yx>) | [PDF](<https://openreview.net/pdf?id=hWOJLeN1yx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150518>)

Visual instruction tuning effectively adapts a pre\-trained Large Language Model \(LLM\) to process image information alongside text, yet it remains unclear how visual features are embedded into the layer\-wise hierarchy of abstractions of the LLM backbone\. Across a diverse set of vision\-language architectures, we show that instruction tuning primarily serves as a bridge, embedding visual features directly into the intermediate semantic layers of the LLM, bypassing the early layers devoted to unimodal processing\. With probing analyses and causal interventions, we show that these intermediate layers are the semantic core of vision–language processing and play a critical role in the performance over a broad set of vision–language benchmarks\. In addition, by comparing the geometry of semantically equivalent visual and textual representations, we find that fine\-tuning extends and strengthens the existing abstraction phase, aligning visual features with pre\-existing textual ones\. Finally, we confirm the functional role of this localized alignment by restricting fine\-tuning to the intermediate layers alone: this strategy preserves the performance of full fine\-tuning on vision–centric benchmarks while reducing training time\. Our results suggest that multimodal integration is a localized phenomenon driven by the repurposing of the internal abstraction engine of the LLM\.

