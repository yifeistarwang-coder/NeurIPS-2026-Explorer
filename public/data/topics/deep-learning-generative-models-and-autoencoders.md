# Deep Learning / Generative Models and Autoencoders

深度学习 / 生成模型与自编码器

438 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Neural Continuous\-Time Markov Chain: Discrete Diffusion via Decoupled Jump Timing and Direction

**Authors:** Jingyuan Li; Xiaoyi Jiang; Fukang Wen; WEI LIU; Renqian Luo; Yi Zhu; Zuoqiang Shi; Pipi Hu

**ID:** 156096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PmwAantl5>) | [PDF](<https://openreview.net/pdf?id=0PmwAantl5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156096>)

Discrete diffusion models based on continuous\-time Markov chains \(CTMCs\) have shown strong performance on language and discrete data generation, yet existing approaches typically parameterize the reverse rate matrix monolithically\-\-\-through proxies such as concrete scores \(SEDD\) or clean\-data predictions \(MDLM, GIDD\)\-\-\-rather than aligning the parameterization with the intrinsic CTMC decomposition into jump timing and jump direction\. We propose \\textbf\{Neural CTMC\}, which exploits the underlying Poisson structure of CTMC dynamics by separately parameterizing the reverse process through an \\emph\{exit rate\} \(when to jump\) and a \\emph\{jump distribution\} \(where to jump\) via two dedicated network heads\. We show that the evidence lower bound \(ELBO\) reduces to a path\-space KL divergence between the true and learned reverse processes that factorizes into a Poisson KL for timing and a categorical KL for direction, and admits a tractable, gradient\-equivalent and consistent loss\. Experimentally, scored by Gemma2\-9B, our pure\-uniform Neural CTMC achieves $16\.36$ generative perplexity on TinyStories \(vs\.\\ GIDD $37\.60$ and MDLM $42\.66$\)\. On OpenWebText, it attains the best perplexity at the same training\-token budget across 16\-\-128 sampling steps among the methods we compare \(e\.g\., at 128 steps: Neural CTMC $183\.6$ vs\.\\ MDLM $210\.5$ and GIDD $249\.8$\)\.

## VTV\-FM: Flow Matching through Variational Terminal\-Velocity Closure

**Authors:** Haoyang Jiang; Yuheng Li; Di Yang; Yanhai Xiong; Haipeng Chen; Yi He

**ID:** 152736 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QkeTySGSs0>) | [PDF](<https://openreview.net/pdf?id=QkeTySGSs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152736>)

Flow Matching \(FM\) learns generative transport by fitting continuous\-time motion from a simple source distribution to the data distribution\. Most existing methods use first\-order bridges: once a source and a target sample are paired, the path is a straight motion with constant velocity\. FM with optimal transport \(OT\) improves the pairing, but the bridge itself remains linear, limiting its ability to model curved motion, acceleration, and changing directions\. A natural remedy is to use second\-order phase\-space dynamics; however, constructing such bridges requires a target\-side terminal velocity, which static datasets typically do not provide\. We propose Variational Terminal\-Velocity Flow Matching \(VTV\-FM\), a second\-order FM framework that derives the missing velocity by minimizing acceleration energy, yielding a closed\-form closure for static data\. The same minimum\-acceleration variational construction also defines the OT pairing cost and the acceleration targets used for training\. Experiments on low\-dimensional datasets, PDE\-governed physical fields, and CIFAR\-10 show that VTV\-FM improves transport geometry and generation quality over first\-order and existing high\-order FM baselines\.

## End\-to\-End Training for Unified Tokenization and Latent Denoising

**Authors:** Shivam Duggal; Xingjian Bai; Zongze Wu; Richard Zhang; Eli Shechtman; Antonio Torralba; Phillip Isola; Bill Freeman

**ID:** 155881 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=28rLEQtSjg>) | [PDF](<https://openreview.net/pdf?id=28rLEQtSjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155881>)

Latent diffusion models \(LDMs\) enable high\-fidelity synthesis by operating in learned latent spaces\. However, training state\-of\-the\-art LDMs requires complex staging: a tokenizer must be trained first, before the diffusion model can be trained in the frozen latent space\. We propose UNITE – an autoencoder architecture for unified tokenization and latent diffusion\. UNITE consists of a Generative Encoder that serves as both image tokenizer and latent generator via weight sharing\. Our key insight is that tokenization and generation can be viewed as the same latent inference problem under different conditioning regimes: tokenization infers latents from fully observed images, whereas generation infers them from noise together with text or class conditioning\. Motivated by this, we introduce a single\-stage training procedure that jointly optimizes both tasks via two forward passes through the same Generative Encoder\. The shared parameters enable gradients to jointly shape the latent space, encouraging a "common latent language"\. Across image and molecule modalities, UNITE achieves near state\-of\-the\-art performance without adversarial losses or any pretrained encoders \(e\.g\., DINO\), reaching FID 2\.12 and 1\.75 for Base and Large models on ImageNet 256 x 256\. Our experiments suggest that unification provides mutual benefits for tokenization and generation\. We further analyze the Generative Encoder through the lenses of representation alignment and compression\. These results show that single\-stage joint training of tokenization and generation from scratch is feasible\. Project Page: https://unite\-tokenization\-generation\.netlify\.app/

## ReGDiff: Guided Diffusion in Regulated Latent Space for Exploring Metamaterial Voxel Geometry

**Authors:** Wangzhi Zhan; Jianpeng Chen; Dongqi Fu; Dawei Zhou

**ID:** 151868 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHx4RRDPKz>) | [PDF](<https://openreview.net/pdf?id=XHx4RRDPKz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151868>)

_Abstract unavailable from the accessible public sources._

## Disentangled Sparse Representations for Concept\-Separated Diffusion Unlearning

**Authors:** Hyeonjin Kim; Hangyeol Jung; Heechan Yun; Sungjun Yun; Dong\-Jun Han

**ID:** 155474 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Ls4MY5nvC>) | [PDF](<https://openreview.net/pdf?id=5Ls4MY5nvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155474>)

_Abstract unavailable from the accessible public sources._

## SSD: Shell\-Guided Spherical Diffusion for Molecular Geometry Generation

**Authors:** Yun\-Yen Chuang; Chen\-Sheng Gu; Hung\-Min Hsu; Kevin Lin; Ray\-I Chang

**ID:** 154313 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EauF7XR2Tz>) | [PDF](<https://openreview.net/pdf?id=EauF7XR2Tz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154313>)

_Abstract unavailable from the accessible public sources._

## TMPO: Trajectory Matching Policy Optimization for Diverse and Efficient Diffusion Alignment

**Authors:** Jiaming Li; Chenyu Zhu; Zhiyuan Ma; Nanxi Yi; Youjun Bao; Li Sun; Quanying Lv; Xiang Fang; Daizong Liu; Jianjun Li; Kun He; Bowen Zhou

**ID:** 152405 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TL8RqtISvt>) | [PDF](<https://openreview.net/pdf?id=TL8RqtISvt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152405>)

_Abstract unavailable from the accessible public sources._

## Decoupling Direction and Magnitude: Language\-Steered Flow Matching for Super\-Resolution in the Dark

**Authors:** Jiaxin Gao; Ziyu Yue; Yaohua Liu; Danchen Cui; Zhihui Zhao; Zhixun Su

**ID:** 149168 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sMFrrQ0Yyf>) | [PDF](<https://openreview.net/pdf?id=sMFrrQ0Yyf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149168>)

_Abstract unavailable from the accessible public sources._

## SPRM: From Cooperative Games to Marginal\-Contribution Process Reward Modeling

**Authors:** Yu Bao; Pak Lon Ip; Qiyu Ruan; Xitong Gao; Cheng\-Zhong Xu

**ID:** 149697 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o6rESNXJwW>) | [PDF](<https://openreview.net/pdf?id=o6rESNXJwW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149697>)

_Abstract unavailable from the accessible public sources._

## Zero\-Shot Burst Restoration via Diffusion MAP Inference with Poisson\-Gaussian Noise Likelihood

**Authors:** Ziyao Yi; Luca Savant Aira; Diego Valsesia; Tiziano Bianchi; Enrico Magli

**ID:** 155255 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=74q1hHnQcO>) | [PDF](<https://openreview.net/pdf?id=74q1hHnQcO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155255>)

_Abstract unavailable from the accessible public sources._

## The Geometry of Noise: Why Diffusion Models Don't Need Noise Conditioning

**Authors:** Mojtaba Sahraee\-Ardakan; Mauricio Delbracio; Peyman Milanfar

**ID:** 151751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YLJPbabQTH>) | [PDF](<https://openreview.net/pdf?id=YLJPbabQTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151751>)

Generative models typically rely on explicitly tracking the noise level to guide the sampling process\. However, recent autonomous models successfully generate data using a single, time\-invariant vector field that operates without explicit noise conditioning\. This raises a fundamental paradox: what landscape are these networks actually optimizing when the noise level is treated as a random variable, and how can a bounded model remain stable near the data manifold where gradients typically diverge? We resolve this paradox by showing that autonomous generation is not merely \`\`blind’’ denoising, but a specific form of Riemannian gradient flow on the Marginal Energy landscape, defined by integrating out the unknown noise levels\. Through a novel relative energy decomposition, we demonstrate that while the raw Marginal Energy contains a severe geometric singularity normal to the data manifold, the learned field implicitly incorporates a local conformal metric\. This metric perfectly preconditions the singularity, turning an infinitely deep potential well into a stable attractor\. Finally, we establish strict structural stability conditions for autonomous sampling\. We prove that standard noise\-prediction parameterizations structurally fail due to an inherent high gain amplification of the estimation errors\. In contrast, velocity\-based models are inherently stable\.

## Primal\-Dual Guided Decoding for Constrained Discrete Diffusion

**Authors:** Federico Tomasi; Dmitrii Moor; Alice Wang; Mounia Lalmas

**ID:** 152632 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RdcJpbmm7F>) | [PDF](<https://openreview.net/pdf?id=RdcJpbmm7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152632>)

Discrete diffusion models generate structured sequences by progressively unmasking tokens, but enforcing global property constraints during generation remains an open challenge\. We propose primal\-dual guided decoding, an inference\-time method that formulates constrained generation as a KL\-regularised optimisation problem and solves it online via adaptive Lagrangian multipliers\. At each denoising step, the method adds a constraint\-dependent bias to token logits, with multipliers updated by mirror descent based on constraint violation\. The approach requires no retraining, introduces no additional model evaluations, supports multiple simultaneous constraints, and provides formal bounds on constraint violation\. Because the bias is additive on logits, it preserves the model's learned distribution while steering outputs toward desired properties, yielding a favourable trade\-off between constraint satisfaction and distributional fidelity\. We demonstrate the method on topical text generation, molecular design, and music playlist generation, showing that a single algorithm instantiated via domain\-specific scoring functions achieves high constraint satisfaction while maintaining diversity and validity, without additional training or inference cost\.

## DN\-Flow: Driver–Navigator Structured Flow Matching for Mixed\-Type Tabular Data Generation

**Authors:** Guangzhao Chai; Jing Liu; Youxi Wu; Yan Li

**ID:** 151485 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aGUKRlcttX>) | [PDF](<https://openreview.net/pdf?id=aGUKRlcttX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151485>)

Generating high\-fidelity mixed\-type tabular data remains challenging because such data contain both numerical and categorical features; different columns often exhibit substantial heterogeneity in marginal distributions, sparsity patterns, and dependency structures\. Although recent diffusion\-based and flow\-based methods have improved generation quality, most methods still rely on a unified generation framework that models all dimensions in a homogeneous manner, without explicitly accounting for the fact that different columns may differ in their suitability for strong local refinement\. To address this issue, we propose a driver\-navigator structured flow\-matching framework \(DN\-Flow\) for mixed\-type tabular data generation\. Inspired by the collaboration between the driver and navigator in rally car racing, DN\-Flow explicitly decomposes the velocity field into a Driver branch \(for globally stable transport\) and a Navigator branch \(for endpoint\-aware local refinement\)\. On top of this structured decomposition, we introduce a learnable column\-wise soft selector and a dynamic correction control mechanism to jointly model column\-level suitability for local refinement and the actual strength of correction injection in an end\-to\-end manner\. Experiments on eight real\-world datasets show that DN\-Flow consistently outperforms strong baselines in data fidelity and downstream utility, achieves the best Shape performance on all eight datasets, and remains highly competitive on Trend and machine learning efficiency\. These results suggest that structured and selective velocity correction offers an effective new paradigm for mixed\-type tabular data generation\. The code will be released upon acceptance\.

## Drift Flow Matching

**Authors:** Chenrui Ma; Xi Xiao; Lin Zhao; Tianyang Wang; Ferdinando Fioretto; Yanning Shen

**ID:** 155776 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2yXRWyxBfG>) | [PDF](<https://openreview.net/pdf?id=2yXRWyxBfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155776>)

Iterative generative models such as Flow Matching and Diffusion models have demonstrated strong test\-time scaling behavior, where additional inference computation can improve generation quality\. In contrast, Drift Models offer efficient one\-step generation, but their direct generation paradigm limits such flexibility\. In this work, we propose Drift Flow Matching \(DFM\), a framework that connects drifting generative modeling with flow\-based iterative generation\. DFM preserves the efficiency of direct transport maps while enabling generation to be refined through multiple inference steps when desired\. This bridges the gap between one\-step Drift Models and multi\-step Flow Matching methods, and provides a novel generative paradigm that can adapt sampling computation to different quality\-\-efficiency requirements\.  Extensive experiments across different tasks and datasets demonstrate the effectiveness and generality of the proposed framework\.

## Quantifying and Optimizing Path Uncertainty in Masked Diffusion Models

**Authors:** Ziyu Chen; Xinbei Jiang; PENG SUN; Tao Lin

**ID:** 150361 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=idhb10oUCK>) | [PDF](<https://openreview.net/pdf?id=idhb10oUCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150361>)

Masked Diffusion Models \(MDMs\) offer flexible, non\-autoregressive generation, but this freedom introduces a challenge: final output quality is highly sensitive to the decoding order\. We are the first to formalize this issue, attributing the variability in output quality to the cumulative predictive uncertainty along a generative path\. To quantify this uncertainty, we introduce Denoising Entropy, a computable metric that serves as an internal signal for evaluating generative process\. Leveraging this metric, we propose two algorithms designed to optimize the decoding path: a post\-hoc selection method and a real\-time guidance strategy\. Experiments demonstrate that our entropy\-guided methods significantly improve generation quality, substantially boosting accuracy on challenging reasoning, planning, and code benchmarks\. Our work establishes Denoising Entropy as a principled tool for understanding and controlling generation, effectively turning the uncertainty in MDMs from a liability into a key advantage for discovering high\-quality solutions\.

## Enabling Denoising Score Matching Type Training for Manifold Diffusion Model via Momentum and Splitting

**Authors:** Lingkai Kong; Yuchen Zhu; Molei Tao

**ID:** 152504 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SebY0YimhJ>) | [PDF](<https://openreview.net/pdf?id=SebY0YimhJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152504>)

Denoising score matching \(DSM\) is the cornerstone of scalable diffusion model training\. However, DSM becomes inapplicable on curved manifolds: the curved geometry makes the forward diffusion process nonlinear and the transition kernel is no longer tractable\. Existing approaches therefore revert to implicit score matching \(ISM\) with expensive Brownian simulation, approximate the intractable heat kernel, or bypass the transition kernel altogether via flow matching with the logarithm map, each incurring significant computational cost or approximation error on general manifolds\. We propose \\emph\{splitting diffusion\}, a new framework that restores DSM\-like training on general Riemannian manifolds by replacing the intractable Brownian forward process with a splitting scheme that alternates two steps: \(1\) an Ornstein\-Uhlenbeck velocity update in the tangent space, whose transition kernel has a closed\-form solution; \(2\) a deterministic geodesic transport step\. This splitting yields a fully tractable transition kernel locally, enabling DSM\-style training while requiring only the exponential map as a geometric oracle\. The effectiveness of splitting diffusion is demonstrated on complicated manifolds and high\-dimensional data\.

## Prior as Geometry, Not Generator: Weak\-Diffusion Test\-Time Reconstruction for Dynamic MRI

**Authors:** Mengzhe Du; Congcong Liu; Baoqing Li; Jinglong Tao; Wenwu He; Zhuo\-Xu Cui

**ID:** 152230 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UbC0NrVCfU>) | [PDF](<https://openreview.net/pdf?id=UbC0NrVCfU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152230>)

Dynamic MRI reconstruction from highly undersampled k\-space is a severely ill\-posed inverse problem that requires strong measurement consistency, fine spatial recovery, and coherent temporal dynamics\. Diffusion priors provide useful population\-level regularization, but task\-matched spatiotemporal diffusion models are costly to train, while generic pretrained priors may be mismatched to protocols, vendors, or anatomies, leading to hallucination or over\-smoothing\. Untrained test\-time priors such as Time\-Dependent Deep Image Prior \(TD\-DIP\) adapt to each scan and naturally couple with data consistency, but can drift toward aliasing artifacts and overfit noise\. We propose Geometry\-Gated TD\-DIP for this weak\-diffusion regime, where diffusion is used as a local geometric reference rather than a generative driver\. Each TD\-DIP update is decomposed into a diffusion\-consistent tangent component and a measurement\-supported orthogonal innovation component\. A self\-calibrated gate adaptively regulates the innovation to counter prior mismatch while suppressing noise amplification\. We further provide a mismatch\-aware analysis showing descent of a local posterior surrogate under explicit conditions\. Experiments on cine MRI show consistent gains over diffusion\-only, TD\-DIP\-only, and additive hybrid baselines, especially at high acceleration and under out\-of\-distribution diffusion priors\.

## Reflected Schrödinger Bridge Matching

**Authors:** Marcus Häggbom; Viktor Nilsson; Pierre Nyquist; Joakim Andén

**ID:** 153052 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OO3amJIfRg>) | [PDF](<https://openreview.net/pdf?id=OO3amJIfRg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153052>)

Recent advances in generative modeling have enabled the efficient computation of Schrödinger bridges \(SB\) in high\-dimensional settings by leveraging partially simulation\-free training methods inspired by flow matching\. However, these have not covered SBs with reflecting dynamics, a useful model choice with built\-in guarantees that generated samples stay in the data domain\. Existing alternatives for reflected SBs instead rely on more complex training based on forward\-\-backward SDE theory, requiring expensive higher\-order derivatives and sampling entire paths during training\. In this article, we introduce a partially simulation\-free framework that allows reflected SBs to be trained similarly to flow matching, using a new sampling method and regression target\. We demonstrate our results by coupling pairs of well\-known high\-dimensional image datasets\. Using reflected dynamics incurs negligible additional wall\-clock time during both training and inference while maintaining or slightly improving generative performance\.

## Robust Inference\-Time Steering of Protein Diffusion Models via Embedding Optimization

**Authors:** Minhuan Li; Jiequn Han; Pilar Cossio; Luhuan Wu

**ID:** 154445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DUpxIDDWMK>) | [PDF](<https://openreview.net/pdf?id=DUpxIDDWMK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154445>)

A core challenge in structural biophysics is generating biomolecular conformations that are both physically plausible and consistent with experimental measurements\. While sequence\-to\-structure diffusion models provide powerful priors, posterior sampling methods steer generation by perturbing atomic coordinates with gradients from experimental likelihoods\. However, when the target lies in a low\-density region of the prior, these methods require aggressive upweighting of the likelihood that can destabilize sampling and be sensitive to hyperparameters\. We propose EmbedOpt, an inference\-time steering framework that introduces an orthogonal optimization axis: rather than performing posterior sampling under a fixed prior, EmbedOpt directly optimizes the prior by updating the model's conditional embedding\. This embedding space encodes rich coevolutionary signals, so optimizing it shifts the structural prior to align with experimental constraints\. Empirically, EmbedOpt matches coordinate\-based posterior sampling baselines on sparse distance constraints and outperforms them on cryo\-electron microscopy map fitting, including real, noisy experimental ones\. Furthermore, EmbedOpt's smooth optimization behavior yields robustness to hyperparameters spanning two orders of magnitude and enables comparable performance with fewer diffusion steps\.

## PatchBench: Measuring Collateral Damage in Activation Patching

**Authors:** Alexi Canesse; Mathis Le Bail; Maël JENNY; Clément Elliker; Mahammed El Sharkawy; Sonia Vanier

**ID:** 139148 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iGhJMl38AQ>) | [PDF](<https://openreview.net/pdf?id=iGhJMl38AQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139148>)

An LLM safety patch can pass a benchmark while still being a poor repair\. This risk is especially acute for jailbreak repairs, where the goal is to correct a specific unsafe behaviour without changing unrelated behaviours\. A patch may block the exact prompts used for evaluation yet fail on close harmful variants, or suppress harmful behaviour by over\-refusing benign prompts that share its wording or structure\. Existing evaluation protocols primarily test whether models can be broken, while aggregate metrics, such as attack success, refusal rates, and global capability scores, cannot distinguish selective repairs from broader local suppression\. To address this gap, we introduce \*\*PatchBench\*\*, a benchmark of empirically observed model\-specific jailbreak failures that induce actionable harmful answers, designed as concrete repair targets for patching research\. Starting from 27,870 prompts aggregated from 37 public jailbreak benchmark datasets, we manually curate 15,314 English prompts and query 8 open\-source instruction\-tuned models\. We then combine WildGuard filtering, pairwise Elo ranking, and manual verification to retain only unsafe completions that answer the harmful requests\. The result is a curated bank of 400 high\-confidence jailbreak failures, organised by model\. We further introduce \*\*PatchBench\-Local\*\*, a local evaluation protocol that tests whether a patch is behaviourally precise\. For each harmful source prompt, PatchBench\-Local generates three families of local neighbours: harmful variants that preserve the malicious intent, benign prompts with matched structure, and benign prompts that reuse the key harmful terms\. It evaluates both harmful\-neighbour correction and benign\-neighbour preservation, thus distinguishing selective repair from broader local suppression\. We use PatchBench\-Local and MMLU to evaluate four state\-of\-the\-art activation steering methods\. Our results show that global capability can remain nearly unchanged while local benign\-neighbour regressions are severe, confirming that aggregate metrics alone can miss important collateral damage\. By exposing whether patches act as precise behavioural repairs or as broad local suppressors, PatchBench\-Local provides a more precise basis for developing and comparing jailbreak repair methods\.

## Trivialized Generative Models on Lie Groups

**Authors:** Neil He; Meenal Jhajharia; Qianxi Wu; Chaoran Cheng; Arindam Banerjee; Ge Liu

**ID:** 152126 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VLKcHOqgkz>) | [PDF](<https://openreview.net/pdf?id=VLKcHOqgkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152126>)

Many problems in diverse fields involve data that naturally live on Lie groups\. However, existing Riemannian and Lie group generative models still face several limitations\. Riemannian flow and consistency models often require position\-dependent vector fields, and expensive geometric terms such as Euler\-Arnold simulation on general Lie groups or covariant derivatives\. Existing Lie group flow models are usually tied to collinear exponential paths, while momentum\-based Lie group diffusion relies on compactness assumptions and does not naturally extend to non\-compact groups\. To address these limitations, we propose Trivialized Generative Models \(TGM\), a family of generative models that learns endpoint\-constrained paths in the fixed Lie algebra and lifts them to the Lie group\. This yields Trivialized Flow Matching \(TFM\), Trivialized Consistency Models \(TCM\), and momentum\-based extensions with endpoint correction, enabling flexible path design, simpler few\-step objectives, and generation on non\-compact Lie groups\. We evaluate TGM on compact SO\(3\) benchmarks, non\-compact $\\mathrm\{Sp\}\(4,\\mathbb\{R\}\)$ datasets motivated by continuous quantum systems and paraxial optics, and real\-world protein backbone generation\. Across these settings, TGM improves sample quality and efficiency over existing Riemannian and Lie group baselines\.

## Kinetic\-Optimal Scheduling with Moment Correction for Metric\-Induced Discrete Flow Matching in Zero\-Shot Text\-to\-Speech

**Authors:** Dong Yang; YIYI CAI; Haoyu Zhang; Yuki Saito; Hiroshi Saruwatari

**ID:** 154147 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FuHFdR4Cih>) | [PDF](<https://openreview.net/pdf?id=FuHFdR4Cih>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154147>)

Metric\-induced discrete flow matching \(MI\-DFM\) exploits token\-latent geometry for discrete generation, but its practical use is limited by two issues: heuristic schedulers requiring hyperparameter search, and finite\-step path\-tracking error from its first\-order continuous\-time Markov chain \(CTMC\) solver\. We address both issues\. First, we derive a kinetic\-optimal scheduler for prescribed scalar\-parameterized probability paths, and instantiate it for MI\-DFM as a training\-free numerical schedule that traverses the path at constant Fisher–Rao speed\. Second, we introduce a finite\-step moment correction that adjusts the jump probability while preserving the CTMC jump destination distribution\. We validate the resulting method, GibbsTTS, on codec\-based zero\-shot text\-to\-speech \(TTS\)\. Under controlled comparisons with a unified architecture and large\-scale dataset, GibbsTTS achieves the best objective naturalness and is preferred in subjective evaluations over masked discrete generative baselines\. Additionally, in comparison with the evaluated state\-of\-the\-art TTS systems, GibbsTTS shows strong speaker similarity, achieving the highest similarity on three of four test sets and ranking second on the fourth\. Demo and code are available in the supplementary materials\.

## DiPhon: Diffusion on Graphons for Scalable Graph Generation

**Authors:** Sergio Rozada; Yiming QIN; Manuel Madeira; Pascal Frossard; Alejandro Ribeiro

**ID:** 148916 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uDmhLyLIAy>) | [PDF](<https://openreview.net/pdf?id=uDmhLyLIAy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148916>)

Diffusion models are a leading paradigm for graph generation, with notable impact in domains such as molecular design\. Yet, scaling these models to large graphs remains an open problem\. We approach this question in the dense\-graph setting through the lens of graphons, the size\-agnostic limit object of dense graph sequences, to study how structural graph statistics behave across node\-size scales\. This perspective leads to DiPhon, a diffusion process for size\-scalable graph generation\. Specifically, we formulate a continuous diffusion process on the graphon space via a Jacobi stochastic differential equation \(SDE\), and propose DiPhon, a discretized scheme that imitates it on graphs\. We further derive the corresponding reverse\-time process, which requires access to the marginal score\. For the Jacobi process, this score interestingly admits a tractable form, which we estimate from data via graph denoising and plug into the reverse process to generate graph samples\. We prove that DiPhon matches the first moment of the marginal distributions induced by the continuous graphon process exactly, and approximates the second moment up to a closed\-form discrepancy\. In this way, DiPhon inherits the size\-agnostic statistical properties of the graphon dynamics can be used to solve the scaling bottleneck\. Empirically, we demonstrate the scalability of DiPhon by training on small graphs and generating substantially larger ones at inference time, without retraining on large graphs\.

## Spectral\-Sphere\-Constrained Hyper\-Connections

**Authors:** Zhaoyi Liu; Haichuan Zhang; Ang Li

**ID:** 150757 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fdD9ZLPpxL>) | [PDF](<https://openreview.net/pdf?id=fdD9ZLPpxL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150757>)

Hyper\-Connections \(HC\) extend residual connections into multiple streams, employing residual matrices for cross\-stream mixing to enrich model expressivity\. However, unconstrained mixing disrupts the identity mapping property intrinsic to the residual connection, causing unstable training\. To address this, Manifold\-Constrained Hyper\-Connections \(mHC\) and its variants restrict these matrices to be doubly stochastic via Sinkhorn\-Knopp \(SK\) algorithm or permutation\-based parameterizations\. We reveal three limitations of this doubly stochastic constraint: \(1\) identity degeneration, where learned matrices collapse around the identity initialization and diminish cross\-stream interactions, \(2\) an expressivity bottleneck via spectral collapse, where the doubly stochastic constraint induces feature homogenization, and \(3\) parameterization inefficiencies, manifesting as unstable SK iterations or the factorial\-scaling overhead of permutation\-based parameterizations\. To overcome these flaws, we propose Spectral\-Sphere\-Constrained Hyper\-Connections \(sHC\)\. By confining residual matrices to a spectral norm sphere, sHC prevents spectral collapse and enables selective feature diversification\. This shift eliminates unstable SK iterations and factorial parameterization, enabling expressive, non\-degenerate residual matrices while preserving training stability\.

## Robust Diffusion Models via Divergence\-Induced Weighted Denoising

**Authors:** Lei Li; Yuexiao Dong

**ID:** 152633 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RdBtgbn9Tb>) | [PDF](<https://openreview.net/pdf?id=RdBtgbn9Tb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152633>)

We show that replacing the standard MSE denoising loss in diffusion models with a nonlinear transformation induced by an f\-divergence yields a simple robust training surrogate that empirically improves performance under data contamination, with small additional computational overhead\. The theoretical foundation rests on a local divergence construction: under the Gaussian reverse\-kernel structure of DDPM, each per\-step likelihood ratio follows a lognormal distribution parameterized by a scalar mismatch, so the conditional f\-divergence at each step reduces to a one\-dimensional function of the denoising error\. Summing these local divergences yields a training objective that unifies diffusion training as divergence\-induced weighted denoising, where the derivative of the induced divergence acts as a residual\-space influence weight that controls the contribution of each sample\. Bounded\-influence divergences \(Hellinger, negative exponential\) suppress large\-error samples, with Hellinger yielding an explicit exponential weight, connecting the framework to robust M\-estimation\. Empirically, on CIFAR\-10 under 30% contamination, NED reduces FID from 93\.0 \(KL\) to 77\.5, while also outperforming standard robust losses such as Huber and clipped MSE\.

## Discrete Flow Matching: Convergence Guarantees Under Minimal Assumptions

**Authors:** Le\-Tuyet\-Nhi PHAM; Giovanni Conforti; Zhenjie Ren; Alain Durmus

**ID:** 154408 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DnD9EjVFG3>) | [PDF](<https://openreview.net/pdf?id=DnD9EjVFG3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154408>)

Flow Matching has recently emerged as a popular class of generative models for simulating a target distribution $\\mu\_1$ from samples drawn from a source distribution $\\mu\_0$\. This framework relies on a fixed coupling between $\\mu\_0$ and $\\mu\_1$, and on a deterministic or stochastic bridge to define an interpolating process between the two distributions\. The time marginals of this process can then be approximately sampled by estimating the transition rates, or more generally the generator, of its Markovian projection\. This framework has recently been extended to the case of discrete source and target distributions, under the name \*Discrete Flow Matching\* \(DFM\)\. However, theoretical guarantees for such models remain scarce\. In this paper, we study two DFM models on $\\mathbb\{Z\}\_m^d = \\\\\{0,\\ldots,m\-1\\\\\}^d$, sampled through time discretization, and derive non\-asymptotic associated bounds for both of them\. In contrast to previous work, we establish non\-asymptotic bounds in Kullback\-\-Leibler divergence for the early\-stopped version of the target distribution\. We also derive explicit convergence guarantees in total variation distance with respect to the true target distribution\. Importantly, these bounds rely only on an approximation error assumption, relaxing standard score assumptions used in earlier works, while also yielding improved dependence on the vocabulary size $m$ and the dimension $d$\.

## Wavelet Flow Matching for Multi\-Scale Physics Emulation

**Authors:** Gabriele Accarino; Juan Nathaniel; Carla Roesch; Pierre Gentine; Sara Shamekh; Duncan Watson\-Parris; Viviana Acquaviva

**ID:** 150773 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fU3MXzvqwZ>) | [PDF](<https://openreview.net/pdf?id=fU3MXzvqwZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150773>)

Accurate emulation of multi\-scale physical systems governed by PDEs demands models that remain stable over long autoregressive rollouts while preserving fine\-scale structures\. Deterministic emulators produce overly\-smoothed predictions, while generative approaches better capture details but are costly\. Latent\-space generative models have emerged as a compromise but with the additional cost of separately pre\-trained autoencoders\. We propose \*\*Wavelet Flow Matching\*\* \(WFM\), a novel generative emulator that overcomes current trade\-offs between cost and skill by performing optimal\-transport directly in the multi\-scale wavelet space\. Rather than learning a latent compression, WFM leverages the hierarchical structure of a U\-Net to jointly predict transport velocities of a prescribed wavelet representation\. On three challenging systems of chaotic fluid dynamics, WFM achieves superior long\-horizon stability, accuracy and spectral coherence compared to state\-of\-the\-art models\. Our results clearly position the wavelet space as an effective training\-free representation for generative emulation of complex physical dynamics\.

## Analyzing and Guiding Zero\-Shot Posterior Sampling in Diffusion Models

**Authors:** Roi Benita; Miki Elad; Joseph Keshet

**ID:** 148817 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uujn530GnO>) | [PDF](<https://openreview.net/pdf?id=uujn530GnO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148817>)

Recovering a signal from its degraded measurements is a long standing challenge in science and engineering\. Recently, zero\-shot diffusion based methods have been proposed for such inverse problems, offering a posterior sampling based solution that leverages prior knowledge\. Such algorithms incorporate the observations through inference, often leaning on manual tuning and heuristics\. In this work we propose a rigorous analysis of these approximate posterior samplers, relying on a Gaussianity assumption of the prior\. Under this regime, we show that both the ideal posterior sampler and diffusion\-based reconstruction algorithms can be expressed in closed\-form, enabling their thorough analysis and comparisons in the spectral domain\. Building on these representations, we introduce a principled framework for parameter design, replacing heuristic selection strategies used to date\. The proposed approach is method\-agnostic and yields tailored parameter choices that jointly account for the characteristics of the prior, the degraded signal, and the diffusion dynamics\. We show that our spectral recommendations differ structurally from standard heuristics and vary with the diffusion step size, resulting in a consistent balance between perceptual quality and signal fidelity\.

## PISA: Piecewise Sparse Attention Is Wiser for Efficient Diffusion Transformers

**Authors:** Haopeng Li; Shitong Shao; Wenliang Zhong; zikai zhou; Lichen Bai; Hui Xiong; Zeke Xie

**ID:** 150938 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eBE11Hq3CA>) | [PDF](<https://openreview.net/pdf?id=eBE11Hq3CA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150938>)

Diffusion Transformers are fundamental for video and image generation, but their efficiency is bottlenecked by the quadratic complexity of attention\. While block sparse attention accelerates computation by attending only critical key\-value blocks, it suffers from degradation at high sparsity by discarding context\. In this work, we discover that attention scores of non\-critical blocks exhibit distributional stability, allowing them to be approximated accurately and efficiently rather than discarded, which is essentially important for sparse attention design\. Motivated by this key insight, we propose PISA, a training\-free Piecewise Sparse Attention that covers the full attention span while substantially reducing computational cost\. Unlike the conventional keep\-or\-drop paradigm that directly drop the non\-critical block information, PISA introduces a novel exact\-or\-approximate strategy: it maintains exact computation for critical blocks while efficiently approximating the remainder through block\-wise Taylor expansion\. This design allows PISA to serve as a faithful proxy to full attention, effectively bridging the gap between speed and quality\. Experimental results demonstrate that PISA achieves 1\.91times and 2\.57 times speedups on Wan2\.1 and Hunyuan\-Video, respectively, while consistently maintaining the highest quality among sparse attention methods\. Notably, even for image generation on FLUX, PISA achieves a 1\.2 to 1\.6 times acceleration at different resolutions without compromising visual quality\.

## Learning to Sample From Diffusion Models via Inverse Reinforcement Learning

**Authors:** Constant Bourdrez; Alexandre Verine; Olivier Cappé

**ID:** 154984 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9RGG0tZyPh>) | [PDF](<https://openreview.net/pdf?id=9RGG0tZyPh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154984>)

Diffusion models generate samples through an iterative denoising process guided by a pretrained neural network\. Once the denoiser is fixed, the sampling algorithm itself \(noise schedules, guidance scales, stochasticity profiles\) still requires careful tuning, a process typically carried out through costly empirical grid search\. In this work, we introduce an inverse reinforcement learning framework for learning sampling strategies without retraining the denoiser\. We formulate the diffusion sampling procedure as a discrete\-time finite\-horizon Markov Decision Process, where actions correspond to optional modifications of the sampling dynamics\. To optimize action scheduling, we avoid defining an explicit reward function and instead directly match the target behavior expected from the sampler using policy gradient techniques\.   We provide experimental evidence that this approach matches fine\-tuned samplers and comes at a modest cost compared to grid search: on ImageNet\-64, a single training run replaces exhaustive search at up to $9\\times$ lower cost, with only 16\\% overhead at inference\.

## Compositional Reasoning in Language Models under Reinforcement Learning Post\-Training

**Authors:** Yu He; Yingxi Li; Yifei Wang; Ellen Vitercik

**ID:** 155613 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ElMzrtekX>) | [PDF](<https://openreview.net/pdf?id=4ElMzrtekX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155613>)

Compositional reasoning is critical for real\-world problem solving: since training data is necessarily limited, models must generalize by composing learned skills in new ways\. While post\-training methods such as reinforcement learning \(RL\) have substantially improved the reasoning abilities of language models \(LMs\), their effects on compositional reasoning remain less well understood\. We propose a dependency\-graph framework to formalize compositional reasoning, yielding three levels of compositionality with increasing complexity\. Empirically, we instantiate this framework with data\-structure tasks, which provide deterministic reward computation and clear compositional structure\. We find a consistent decomposed\-to\-composed asymmetry: decomposed\-skill training does not reliably transfer to composed tasks, whereas composed\-task training transfers more readily back to decomposed tasks\. We provide theoretical explanation for this asymmetry, and further evaluate compositional generalization under length extrapolation, structural distribution shift, and transfer to tasks requiring unseen skills\. Finally, we present a pilot study on real\-world tool\-calling benchmarks, showing preliminary evidence that the decomposed\-to\-composed asymmetry can extend to practical settings\.

## CSFlow: Aligning Flow Matching with Human Contrast Sensitivity

**Authors:** Malgorzata Galinska; Bart Pogodzinski; Jan Eric Lenssen

**ID:** 154473 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DKVqS2hVS1>) | [PDF](<https://openreview.net/pdf?id=DKVqS2hVS1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154473>)

_Abstract unavailable from the accessible public sources._

## Metropolis\-Adjusted Diffusion Models

**Authors:** Kevin H\. Lam; Tyler Farghly; Christopher Williams; Jun Yang; Yee Whye Teh; Arnaud Doucet

**ID:** 148667 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w2X7ALXCZx>) | [PDF](<https://openreview.net/pdf?id=w2X7ALXCZx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148667>)

_Abstract unavailable from the accessible public sources._

## Frequency‑Aware Flow Matching for Continuous and Consistent Robotic Action Generation

**Authors:** Jianing Guo; Fangzheng Chen; Zihao Mao; WONG L Kenny; Zhenhong Wu; Yu Li; Yishuai Cai; Yuanpei Chen; Yikun Ban; Kai Chen; DOU QI; Yaodong Yang; Xianglong Liu; Huijie Zhao; Simin Li

**ID:** 154121 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G7fOG13nTJ>) | [PDF](<https://openreview.net/pdf?id=G7fOG13nTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154121>)

_Abstract unavailable from the accessible public sources._

## CRISP: Fixing Flying Pixels in Latent LiDAR Generation via Diffusion Decoding

**Authors:** Andrea Ceron; Michael Schmidt; Alvaro Marcos\-Ramiro; Sebastian Schmidt; Benjamin Busam

**ID:** 153441 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LIADRHg7uI>) | [PDF](<https://openreview.net/pdf?id=LIADRHg7uI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153441>)

_Abstract unavailable from the accessible public sources._

## No Model Required: Text Entropy Rate Filtering Prevents Iterative Fine\-Tuning Collapse

**Authors:** Lewis Mitchell

**ID:** 155913 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1rTomFsjg0>) | [PDF](<https://openreview.net/pdf?id=1rTomFsjg0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155913>)

_Abstract unavailable from the accessible public sources._

## From Static Geometry to Dynamical Singularity: Detecting Memorization in Diffusion Models via Score Evolution

**Authors:** Jeonseong Kim; Chenglin Fan

**ID:** 155740 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KVTmKRBPc>) | [PDF](<https://openreview.net/pdf?id=3KVTmKRBPc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155740>)

_Abstract unavailable from the accessible public sources._

## Analyzing and Guiding Zero\-Shot Posterior Sampling in Diffusion Models

**Authors:** Roi Benita; Miki Elad; Joseph Keshet

**ID:** 148817\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148817

[Paper](<https://openreview.net/forum?id=uujn530GnO>) | [PDF](<https://openreview.net/pdf?id=uujn530GnO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148817>)

Recovering a signal from its degraded measurements is a long standing challenge in science and engineering\. Recently, zero\-shot diffusion based methods have been proposed for such inverse problems, offering a posterior sampling based solution that leverages prior knowledge\. Such algorithms incorporate the observations through inference, often leaning on manual tuning and heuristics\. In this work we propose a rigorous analysis of these approximate posterior samplers, relying on a Gaussianity assumption of the prior\. Under this regime, we show that both the ideal posterior sampler and diffusion\-based reconstruction algorithms can be expressed in closed\-form, enabling their thorough analysis and comparisons in the spectral domain\. Building on these representations, we introduce a principled framework for parameter design, replacing heuristic selection strategies used to date\. The proposed approach is method\-agnostic and yields tailored parameter choices that jointly account for the characteristics of the prior, the degraded signal, and the diffusion dynamics\. We show that our spectral recommendations differ structurally from standard heuristics and vary with the diffusion step size, resulting in a consistent balance between perceptual quality and signal fidelity\.

## PISA: Piecewise Sparse Attention Is Wiser for Efficient Diffusion Transformers

**Authors:** Haopeng Li; Shitong Shao; Wenliang Zhong; zikai zhou; Lichen Bai; Hui Xiong; Zeke Xie

**ID:** 150938\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150938

[Paper](<https://openreview.net/forum?id=eBE11Hq3CA>) | [PDF](<https://openreview.net/pdf?id=eBE11Hq3CA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150938>)

Diffusion Transformers are fundamental for video and image generation, but their efficiency is bottlenecked by the quadratic complexity of attention\. While block sparse attention accelerates computation by attending only critical key\-value blocks, it suffers from degradation at high sparsity by discarding context\. In this work, we discover that attention scores of non\-critical blocks exhibit distributional stability, allowing them to be approximated accurately and efficiently rather than discarded, which is essentially important for sparse attention design\. Motivated by this key insight, we propose PISA, a training\-free Piecewise Sparse Attention that covers the full attention span while substantially reducing computational cost\. Unlike the conventional keep\-or\-drop paradigm that directly drop the non\-critical block information, PISA introduces a novel exact\-or\-approximate strategy: it maintains exact computation for critical blocks while efficiently approximating the remainder through block\-wise Taylor expansion\. This design allows PISA to serve as a faithful proxy to full attention, effectively bridging the gap between speed and quality\. Experimental results demonstrate that PISA achieves 1\.91times and 2\.57 times speedups on Wan2\.1 and Hunyuan\-Video, respectively, while consistently maintaining the highest quality among sparse attention methods\. Notably, even for image generation on FLUX, PISA achieves a 1\.2 to 1\.6 times acceleration at different resolutions without compromising visual quality\.

## Learning to Sample From Diffusion Models via Inverse Reinforcement Learning

**Authors:** Constant Bourdrez; Alexandre Verine; Olivier Cappé

**ID:** 154984\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154984

[Paper](<https://openreview.net/forum?id=9RGG0tZyPh>) | [PDF](<https://openreview.net/pdf?id=9RGG0tZyPh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154984>)

Diffusion models generate samples through an iterative denoising process guided by a pretrained neural network\. Once the denoiser is fixed, the sampling algorithm itself \(noise schedules, guidance scales, stochasticity profiles\) still requires careful tuning, a process typically carried out through costly empirical grid search\. In this work, we introduce an inverse reinforcement learning framework for learning sampling strategies without retraining the denoiser\. We formulate the diffusion sampling procedure as a discrete\-time finite\-horizon Markov Decision Process, where actions correspond to optional modifications of the sampling dynamics\. To optimize action scheduling, we avoid defining an explicit reward function and instead directly match the target behavior expected from the sampler using policy gradient techniques\.   We provide experimental evidence that this approach matches fine\-tuned samplers and comes at a modest cost compared to grid search: on ImageNet\-64, a single training run replaces exhaustive search at up to $9\\times$ lower cost, with only 16\\% overhead at inference\.

## Why Deterministic PRM Guidance Underperforms in Discrete Diffusion Reasoning

**Authors:** Yan Zhan; Shaobo Liu; Zhijun Gao

**ID:** 148438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xogwvIhOYH>) | [PDF](<https://openreview.net/pdf?id=xogwvIhOYH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148438>)

We present a diagnostic study of reward guided reasoning in discrete diffusion language models \(dLLMs\)\. On in\-distribution GSM8K with Dream\-v0\-Instruct\-7B, deterministic segmental top\-$1$ guidance using outcome\-supervised intermediate\-state reward models underperforms a simpler matched\-compute baseline: independent best\-of\-$N$ sampling plus a GSM8K\-trained final\-answer outcome reward model \(ORM\) reranker\. The setup appears well suited for PRM guidance because dLLM intermediate states partially expose solution evidence; however, these states are unordered masked subsets rather than autoregressive prefixes, and prior reward\-guided decoding results rarely report matched forward\-pass compute against simple verifier reranking\. We study \\emph\{outcome\-supervised\} PRMs trained with binary final\-correctness labels on dLLM intermediate states\. Under a protocol that charges denoising, PRM scoring, and ORM scoring in the same forward\-pass unit, deterministic PRM\-guided search trails ORM Rerank by $9\.95$ and $12\.69$ percentage points \(pp\) in seed\-mean aggregate at matched candidate budgets $K\{=\}8$ and $K\{=\}32$; paired bootstrap CIs on seed $42$ exclude zero\. Two mechanisms account for much of the headline gap: bidirectional PRM ROC\-AUC \(area under the receiver operating characteristic curve\) decays from $0\.77$ to $0\.54$ with mask ratio, and deterministic top\-$1$ pruning drops the guided pool's perfect\-selector ceiling by $\\sim$$14$\\,pp\. A third diagnostic shows that mean pooling also weakens causal PRM variants\. Matched\-compute ORM Rerank thus emerges as the strong baseline when an in\-distribution final\-answer verifier is available; closing the gap requires PRM guidance that preserves candidate diversity and queries the scorer at denoising stages where it remains discriminative, neither of which the deterministic top\-$1$ recipe satisfies\.

## A Generative Model of Contextual Integrity: Appropriate vs\. Inappropriate Information Sharing

**Authors:** Omer Ebead; Juan Formanek; Joel Leibo

**ID:** 148966 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tnB9Xtbfa6>) | [PDF](<https://openreview.net/pdf?id=tnB9Xtbfa6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148966>)

_Abstract unavailable from the accessible public sources._

## LYNX: Learning Dynamic Exits for Confidence\-Controlled Reasoning

**Authors:** Ömer Faruk Akgül; Yusuf H Kalayci; Rajgopal Kannan; Willie Neiswanger; Viktor Prasanna

**ID:** 149284 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rSKYIHN4OX>) | [PDF](<https://openreview.net/pdf?id=rSKYIHN4OX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149284>)

_Abstract unavailable from the accessible public sources._

## Structured Coupling for Flow Matching

**Authors:** Francisco Sumba Toral; Carles Balsells Rodas; Yingzhen Li

**ID:** 153603 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KA6cQELF6H>) | [PDF](<https://openreview.net/pdf?id=KA6cQELF6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153603>)

Standard flow matching scales well but typically relies on an unstructured source distribution, limiting its ability to learn interpretable latent structure\. Latent\-variable models, by contrast, capture structure but often sacrifice generative quality\. We bridge this gap by proposing Structured Coupling for Flow Matching \(SCFM\), a cooperative framework that augments flow matching with structured latent representation learning\. By introducing structured latent variables and exogenous noise into the source, SCFM jointly learns a structured prior \(via latent variable modeling\) and a continuous transport map \(via flow matching\)\. It uses a shared time\-dependent recognition network for both latent variable model variational inference and intermediate\-time flow velocity estimation\. This yields a structurally informed yet unconditional, simulation\-free flow model, where the latent variable model can also assist flow sampling\. Empirically, SCFM facilitates unsupervised latent representation learning for clustering, disentanglement and downstream tasks, while remaining competitive with flow matching in sample quality, showing that meaningful structure can be learned without sacrificing generative fidelity\.

## MiCo: Microstructure\-Consistent Flow Matching for Diffusion MRI Angular Super\-Resolution

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 148957 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tty64RLmO2>) | [PDF](<https://openreview.net/pdf?id=tty64RLmO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148957>)

Diffusion\-weighted MRI \(dMRI\) requires densely sampling $q$\-space across many directions and shells, leading to long scan times that limit clinical use\. Angular super\-resolution \(ASR\) recovers a dense signal from a sparse acquisition, enabling substantially shorter scans\. We propose a physics\-guided flow matching framework for ASR built on a basic fact about dMRI: under the cumulant expansion, the diffusion signal naturally splits into a known linear function of the $q$\-vectors plus a residual carrying higher\-order angular detail\. We exploit this twice\. First, we initialize the flow from a closed\-form dense DTI estimate, recasting ASR as residual flow matching from a physically meaningful starting point rather than uninformative noise\. Second, we impose a microstructure\-consistency loss, rooted in the physical principle that any two diffusion\-weighted signals from the same voxel must be explained by a single underlying set of microstructural parameters\. Together, these designs anchor predictions wherever the acquisition is informative while leaving the learned prior to model crossing\-fiber and higher\-order angular detail\. On the Human Connectome Project \(HCP\-YA\) and UK Biobank, our method matches or surpasses analytical baselines and recent deep learning methods on signal reconstruction, kurtosis scalar maps, and fiber\-orientation reconstruction under aggressive subsampling\.

## Path\-Guided Flow Matching for Dataset Distillation

**Authors:** xuhui li; Zhengquan luo; Zixu Wu; Xiwei Liu; Yongqiang Yu; Zixiang Hong; Zhiqiang Xu

**ID:** 149871 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mZhtTOUDIu>) | [PDF](<https://openreview.net/pdf?id=mZhtTOUDIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149871>)

Dataset distillation compresses large datasets into compact synthetic sets with comparable performance in training models\. Despite recent progress on diffusion\-based distillation, such methods typically rely on heuristic guidance or prototype assignment over long denoising chains, which increases sampling cost and makes prototype\-consistent control harder under strong guidance or low IPC\. We propose \\emph\{Path\-Guided Flow Matching \(PGFM\)\}, the first flow matching\-based framework for generative distillation, which enables deterministic synthesis by solving an ODE in a few steps\. In particular, we introduce a retrieval\-based prototype inversion stage that identifies prototype\-consistent initial noises for class prototypes on the frozen flow manifold, and further develop an anchor\-guided residual correction strategy for bounded stage\-wise control\. This design follows a controlled\-transport principle: retrieval reduces initialization mismatch, while anchor guidance provides a bounded residual correction along the flow trajectory\. Extensive experiments across high\-resolution benchmarks demonstrate that PGFM matches or surpasses prior diffusion\-based distillation approaches with fewer sampling steps while delivering competitive performance with improved efficiency\.

## Denoising Time Matters: Diverse Generation in Diffusion Language Models

**Authors:** jingxuan wu; Zhenglin Wan; Yuzhe YANG; Yiqiao Huang; Chubin Zhang; Xingrui Yu; Ivor Tsang; Yang You

**ID:** 154837 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AZvYD2Qmwj>) | [PDF](<https://openreview.net/pdf?id=AZvYD2Qmwj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154837>)

Diffusion language models \(Diffusion\-LMs\) generate text through iterative denoising, exposing a temporal structure that is largely absent from autoregressive decoding\. In this paper, we show that this temporal structure provides a useful control axis for generation diversity: early denoising steps mainly determine high\-level semantic trajectories, while later steps refine lexical realization\. Motivated by this observation, we propose Time\-Annealed Perturbation Sampling \(TAPS\), a training\-free inference strategy that samples nearby conditioning trajectories through time\-aware, manifold\-constrained perturbations\. TAPS encourages semantic branching during early denoising and anneals the perturbation away before refinement, improving exploration while preserving prompt alignment, generation quality, and reasoning ability\. Experiments on multiple Diffusion\-LM backbones, including non\-autoregressive and semi\-autoregressive models, show that TAPS consistently improves semantic and lexical diversity across open\-ended and instruction\-following generation tasks, while preserving reasoning ability on verifiable reasoning benchmarks with negligible overhead\.

## Twisted Schrödinger Bridge Matching

**Authors:** Maxence Noble; Marie Scheid; Yazid Janati; Eric Moulines; Alain Durmus

**ID:** 153341 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M3sfAYXJNX>) | [PDF](<https://openreview.net/pdf?id=M3sfAYXJNX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153341>)

_Abstract unavailable from the accessible public sources._

## DAWN: Dependency\-Aware Fast Inference for Diffusion LLMs

**Authors:** Lizhuo Luo; Zhuoran Shi; Jiajun Luo; Zhi Wang; Shen Ren; Wenya Wang; Tianwei Zhang

**ID:** 153138 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NbRKV16cev>) | [PDF](<https://openreview.net/pdf?id=NbRKV16cev>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153138>)

_Abstract unavailable from the accessible public sources._

## MAGE: All\-\[MASK\] Block Already Knows Where to Look in Block Diffusion LLM

**Authors:** Omin Kwon; Yeonjae Kim; Doyeon Kim; Minseo Kim; Yeonhong Park; Jae W\. Lee

**ID:** 149356 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qf4h7O2aYi>) | [PDF](<https://openreview.net/pdf?id=qf4h7O2aYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149356>)

_Abstract unavailable from the accessible public sources._

## Control\-Augmented Autoregressive Diffusion for Data Assimilation

**Authors:** Prakhar Srivastava; Farrin Marouf Sofian; Francesco Immorlano; Kushagra Pandey; Stephan Mandt

**ID:** 152028 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W4x1rXfdP2>) | [PDF](<https://openreview.net/pdf?id=W4x1rXfdP2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152028>)

Despite advances in test\-time scaling and diffusion finetuning, guidance for Auto\-Regressive Diffusion Models \(ARDMs\)  remains underexplored\. We introduce an amortized framework that augments a pretrained ARDM with an offline\-trained controller\. By previewing future rollouts, the controller learns stepwise corrections that anticipate observations under a terminal\-cost objective, yielding a reusable policy for guided generation\. Motivated by a stochastic optimal control view of ARDM trajectories, our method injects small controls within each denoising sub\-step while staying close to the pretrained dynamics\. We study this approach for data assimilation \(DA\) in chaotic spatiotemporal partial differential equations \(PDEs\), where existing methods are often computationally expensive and susceptible to forecast drift under sparse observations\. At inference, DA becomes a feed\-forward rollout with on\-the\-fly corrections, achieving an order\-of\-magnitude speedup over strong diffusion\-based baselines\. Across two canonical PDEs and a compact ECMWF Reanalysis v5 \(ERA5\)  pilot spanning six observation regimes, our method consistently improves stability and accuracy over state\-of\-the\-art alternatives, with similar improvements observed in a larger\-scale GenCast study\.

## Hallucination in World Models is Predictable and Preventable

**Authors:** Nicklas Hansen; Xiaolong Wang

**ID:** 155605 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4KT2peVuUl>) | [PDF](<https://openreview.net/pdf?id=4KT2peVuUl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155605>)

Modern generative world models render increasingly realistic action\-controllable futures, yet they frequently hallucinate: rollouts remain visually fluent while drifting from the ground\-truth dynamics\. We hypothesize that hallucination concentrates in low\-coverage regions of the state\-action space, where lightweight data\-centric signals can both detect it and guide mitigation\. To test this, we introduce MMBench2, a 427\-hour, 210\-task dataset for visual world modeling with ground\-truth actions, rewards, and live simulators, and train a 350M\-parameter world model on it\. We identify three distinct hallucination modes: perceptual, action\-marginalized, and scene\-diverging \- each anchored to a different stage of the pipeline, and develop three signals that accurately predict where the model will fail\. To close coverage gaps at training time, we develop a coverage\-aware sampling technique; to close them online, our hallucination predictors serve as curiosity rewards for targeted data collection, yielding a data\-efficient finetuning recipe that adapts the pretrained world model to entirely unseen environments with as few as 50 real environment trajectories\. Overall, our findings reveal that hallucination in world models is inherently a data coverage issue, and that the same signals used to detect it can also be used for mitigation\.

## Revisiting Diffusion Model Predictions Through Dimensionality

**Authors:** Qing Jin; Chaoyang Wang

**ID:** 153192 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NAHtkZBZqR>) | [PDF](<https://openreview.net/pdf?id=NAHtkZBZqR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153192>)

Recent advances in diffusion and flow matching models have highlighted a shift in the preferred prediction target\-\-\-moving from noise \($\\varepsilon$\) and velocity \($v$\) to direct data \($x$\) prediction\-\-\-particularly in high\-dimensional settings\. However, a formal explanation of why the optimal target depends on the specific properties of the data remains elusive\. In this work, we provide a theoretical framework based on a generalized prediction formulation $u=kx\-\(1\-k\)n$, where $x$ represents clean data and $n$ denotes noise\. This formulation accommodates arbitrary targets, of which $\\varepsilon$\-, $v$\-, and $x$\-prediction are special cases\. We derive the analytical relationship between data's geometry and the optimal prediction target, offering a rigorous justification for why $x$\-prediction becomes superior when the ambient dimension significantly exceeds the data's intrinsic dimension\. Furthermore, while our theory identifies dimensionality as the governing factor for the optimal prediction target, the intrinsic dimension of manifold\-bound data is typically intractable to estimate in practice\. To bridge this gap, we propose $k$\-Diff, a framework that learns the optimal parameter $k$ directly from data, bypassing the need for explicit dimension estimation\. Extensive experiments in both latent\-space and pixel\-space image generation demonstrate that $k$\-Diff consistently outperforms fixed\-target baselines across varying architectures and data scales, providing a principled and automated approach to enhancing generative performance\.

## Amortized Optimal Transport from Sliced Potentials

**Authors:** Minh\-Phuc Truong; Khai Nguyen

**ID:** 156137 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=09aWoE8edl>) | [PDF](<https://openreview.net/pdf?id=09aWoE8edl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156137>)

We propose a novel amortized optimization method for predicting optimal transport \(OT\) plans across multiple pairs of measures by leveraging Kantorovich potentials derived from sliced OT\. We introduce two amortization strategies: regression\-based amortization \(RA\-OT\) and objective\-based amortization \(OA\-OT\)\. In RA\-OT, we formulate a functional regression model that treats Kantorovich potentials from the original OT problem as responses and those obtained from sliced OT as predictors, and estimate these models via least\-squares methods\. In OA\-OT, we estimate the parameters of the functional model by optimizing the Kantorovich dual objective\. In both approaches, the predicted OT plan is subsequently recovered from the estimated potentials\. As amortized OT methods, both RA\-OT and OA\-OT enable efficient solutions to repeated OT problems across different measure pairs by reusing information learned from prior instances to rapidly approximate new solutions\. Moreover, by exploiting the structure provided by sliced OT, the proposed models are more parsimonious, independent of specific structures of the measures, such as the number of atoms in the discrete case, while achieving high accuracy\. We demonstrate the effectiveness of our approaches on tasks including MNIST digit transport, color transfer, supply\-demand transportation on spherical data, and mini\-batch OT conditional flow matching\.

## Phase Kernel Lifts Capacity of Dense Associative Memory

**Authors:** Yifei Zhao; Ying Tang

**ID:** 150371 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iZSMEnlggu>) | [PDF](<https://openreview.net/pdf?id=iZSMEnlggu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150371>)

Dense associative memory underlies modern attention mechanisms; however, conventional Modern Hopfield Network \(MHN\) with linear kernels yields overlapping attractor basins and spurious states under high memory load, limiting their theoretically exponential storage capacity in practice\. We construct a class of nonlinear phase kernels that reshape the energy dynamics into deep, well\-separated basins, and prove that any kernel in this class preserves exponential storage capacity while guaranteeing convergence to fixed points\. As a representative instantiation, we introduce the Sigmoidal Phase Hopfield Network \(S\-Hop\), which guarantees monotone energy descent and mitigates the practical loss of memory capacity\. Experiments on MNIST and CIFAR\-10 show that S\-Hop achieves up to a $50\\times$ increase in critical capacity over baseline models\. We also provide a systematic capacity measurement of Hopfield networks on TinyImageNet, where S\-Hop exhibits improved retrieval robustness and noise resilience\. The phase\-kernel design provides a principled route toward more robust dense associative memory\.

## On the Memorization of Consistency Distillation for Diffusion Models

**Authors:** Bingqing Jiang; Difan Zou

**ID:** 152743 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QhEYPYxSzC>) | [PDF](<https://openreview.net/pdf?id=QhEYPYxSzC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152743>)

Diffusion models are central to modern generative modeling, and understanding how they balance memorization and generalization is critical for reliable deployment\. Recent work has shown that memorization in diffusion models is shaped by training dynamics, with generalization and memorization emerging at different stages of training\. However, deployed diffusion models are often further distilled, introducing an additional training phase whose impact on memorization remains unclear\. In this work, we analyze how distillation reshapes memorization behavior in diffusion models, taking consistency distillation as a representative framework\. Empirically, we show that when applied to a teacher model that has memorized data, consistency distillation significantly reduces transferred memorization in the student while preserving, and sometimes improving, sample quality\. To explain this behavior, we provide a theoretical analysis using a random feature neural network model \[Bonnaire et al\., 2025\], showing that consistency distillation suppresses unstable feature directions associated with memorization while preserving stable, generalizable modes\. Our findings suggest that distillation can serve not only as an acceleration tool, but also as a mechanism for improving the memorization\-generalization trade\-off\.

## GraDE: A Graph Diffusion Estimator for Frequent Subgraph Discovery in Neural Architectures

**Authors:** Yikang Yang; Zhengxin Yang; Minghao Luo; Luzhou Peng; Hongxiao Li; Wanling Gao; Lei Wang; Jianfeng Zhan

**ID:** 148527 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xDozosGMuJ>) | [PDF](<https://openreview.net/pdf?id=xDozosGMuJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148527>)

Finding frequently occurring subgraph patterns or network motifs in neural architectures is crucial for optimizing efficiency, accelerating design, and uncovering structural insights\. However, as the subgraph size increases, enumeration\-based methods are perfectly accurate but computationally prohibitive, while sampling\-based methods are computationally tractable but suffer from a severe decline in discovery capability\. To address these challenges, this paper proposes GraDE, a diffusion\-guided search framework that ensures both computational feasibility and discovery capability\. The key innovation is the $\\underline\{\\textnormal\{Gra\}\}\\textnormal\{ph\}$  $\\underline\{\\textnormal\{D\}\}\\textnormal\{iffusion\}$ $\\underline\{\\textnormal\{E\}\}\\textnormal\{stimator\}$ \(GraDE\), which is the first to introduce graph diffusion models to identify frequent subgraphs by scoring their typicality within the learned distribution\. Comprehensive experiments demonstrate that the estimator achieves superior ranking accuracy, with up to 114\\% improvement compared to sampling\-based baselines\. Benefiting from this, the proposed framework successfully discovers large\-scale frequent patterns, achieving up to 30$\\times$ higher median frequency than sampling\-based methods\.

## Epigenomics\-Guided Flow Matching for 3D Genome Super\-Resolution

**Authors:** Yubiao Zhao; Shicheng Song; Yusen Ye; Huan Liu; Juan Liu; Lihua Zhang

**ID:** 155163 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7oTMtNxW5H>) | [PDF](<https://openreview.net/pdf?id=7oTMtNxW5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155163>)

Mapping fine\-scale 3D chromatin landscapes is critical for understanding gene regulation, yet the resolution of Hi\-C data remains fundamentally constrained by both physical bottlenecks and sequencing costs\. Although deep learning has shown promise in super\-resolving Hi\-C data, existing methods suffer from absolute coordinate loss during localized patching and a lack of structural and epigenomic priors in unconditioned generation\. We propose a novel epigenomics\-guided flow matching framework EpiFlow for 3D genome super\-resolution\. EpiFlow introduces two key innovations: \(1\) an EpiCond module that deterministically maps 1D epigenomic features to 2D spatial constraints via orthogonal expansion with built\-in positional grounding, avoiding quadratic attention complexity; and \(2\) a Toeplitz\-regularized classifier\-free guidance mechanism that enforces distance\-decay priors using a learnable symmetric prototype matrix\. Extensive evaluation shows that our method achieves state\-of\-the\-art cross\-cell\-type loop detection, improving recall by $2\.8\\times$ over raw Hi\-C on unseen H1\-hESC \(Loop $F\_1$ of $0\.325$ vs\. $0\.199$\) and outperforming all baselines on same\-cell HFFc6 \($F\_1=0\.520$\)\. Aggregate Peak Analysis \(APA\) confirms biological validity, and strong generalization to a held\-out cell line demonstrates that the model learns transferable principles of 3D genome folding rather than cell\-specific biases\.

## Flowette: Flow Matching with Graphette Priors for Graph Generation

**Authors:** Asiri Wijesinghe; Sevvandi Kandanaarachchi; Daniel M Steinberg; Cheng Soon Ong

**ID:** 151088 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d3pAaxyrAY>) | [PDF](<https://openreview.net/pdf?id=d3pAaxyrAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151088>)

We study generative modeling of graphs with recurring subgraph motifs\. We propose Flowette, a continuous flow matching framework that employs a graph neural network\-based transformer to learn a velocity field over graph representations with node and edge attributes\. Our model promotes topology\-aware alignment through optimal transport\-based coupling and encourages global structural coherence through regularisation\. To incorporate domain\-driven structural priors, we introduce graphettes, a new probabilistic family of graph structure models that generalize graphons via controlled structural edits for motifs such as rings, stars, and trees\. We theoretically analyze the coupling, invariance, and structural properties of the framework, evaluate it on synthetic and molecular benchmarks, and isolate the contributions of the structural prior, the optimal\-transport coupling, and the regularisation terms through controlled ablations\. Flowette achieves competitive performance overall, attaining state\-of\-the\-art results on several metrics across multiple benchmarks, highlighting the effectiveness of combining structural priors with flow\-based training for modeling complex graph distributions\.

## NAGO: Noise\-Aware Generative Operator via Flow Matching

**Authors:** Guanyu Chen; Shengze Xu; Pengwei Liu; Xingyu Ren; Pengkai Wang; Tieyong Zeng; Antonios Armaou; Dong Ni

**ID:** 149607 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=opzL6gPOhn>) | [PDF](<https://openreview.net/pdf?id=opzL6gPOhn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149607>)

We introduce NAGO, a noise\-aware generative operator for efficient sampling from invariant measures of stochastic partial differential equations \(SPDEs\) in function space\. Our central idea is to treat the noise measure as a design variable rather than a fixed default\. While existing generative approaches mainly shape the sampling process through interpolation schedules or guidance heuristics, NAGO directly controls the marginal velocity field in functional flow matching by choosing a noise measure with suitable regularity\. We establish conditions under which the resulting noise\-induced flows are well defined in infinite\-dimensional settings, and show how noise regularity affects the spectral geometry and stiffness of the marginal velocity field\. This analysis leads to a principled design rule: match the regularity of the noise measure to that of the target invariant measure\. The resulting method enables stable training and fast sampling without relying on downstream correction mechanisms\. Experiments on three representative SPDEs with multiscale invariant measures show that NAGO consistently improves the accuracy\-\-efficiency trade\-off over standard flow matching baselines, while achieving up to two orders of magnitude speedup compared with classical numerical solvers\.

## Manifold\-Aligned Adversarial Perturbation for Anti\-Customization under Diffusion\-based Purification

**Authors:** Ruotian Liu; Zhen Chen; Zhiguo Yang; Xiangyu Yin; Peipei Xu; Wenjie Ruan

**ID:** 155861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2MUQVPJZ7T>) | [PDF](<https://openreview.net/pdf?id=2MUQVPJZ7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155861>)

Anti\-customization techniques aim to protect visual content from unauthorized diffusion model personalization by adding imperceptible perturbations to training images\. However, such protection can be significantly weakened by diffusion\-based purification, which may remove adversarial perturbations before customization\. We study representative anti\-customization methods under diffusion purification and observe that existing methods exhibit similar off\-manifold perturbation structures that are largely suppressed by purification\. We then provide a principled geometric analysis that characterizes purification as a local contraction toward the data manifold, primarily suppressing perturbation components along normal directions\. Motivated by this insight, we propose Manifold\-Aligned Customization protection \*\*MAC\*\*, a practical purification\-aware framework that optimizes downstream anti\-customization objectives through a differentiable purifier and uses a structured perturbation parameterization to bias updates toward purification\-retentive, manifold\-aligned directions\. Across experiments on CelebA\-HQ, VGGFace2\-HQ, and WikiArt under diffusion\-based purification, MAC substantially improves protection effectiveness across most prompts and domains\. Finally, frequency analysis and ImageNet and MS\-COCO retention studies show that spectral signatures cannot predict purification outcomes, providing additional evidence for the proposed manifold\-alignment perspective beyond a single data domain\.

## FluxLite: Inference\-Time Proposal Control for Discrete Diffusion Models

**Authors:** Yinuo Ren; Haoxuan Chen; Grant Rotskoff; Jiequn Han; Lexing Ying

**ID:** 152301 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U53acQOZ93>) | [PDF](<https://openreview.net/pdf?id=U53acQOZ93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152301>)

_Abstract unavailable from the accessible public sources._

## Rotations on Latent Hyperspheres: a Geometry\-Aware Guiding Framework for Diffusion Models

**Authors:** Luca Sacchetto; Klaus Diepold

**ID:** 149879 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mY8ppH3y0N>) | [PDF](<https://openreview.net/pdf?id=mY8ppH3y0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149879>)

_Abstract unavailable from the accessible public sources._

## HEART: Hyperspherical Embedding Alignment via Kent\-Representation Traversal in Diffusion Models

**Authors:** Arani Roy; Shristi Das Biswas; Kaushik Roy

**ID:** 156063 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0jVJaUEE17>) | [PDF](<https://openreview.net/pdf?id=0jVJaUEE17>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156063>)

_Abstract unavailable from the accessible public sources._

## Inference\-Time Search Using Side Information for Diffusion\-Based Image Reconstruction

**Authors:** Mahdi Farahbakhsh; Vishnu Teja Kunde; Dileep Kalathil; Krishna Narayanan; JF Chamberland

**ID:** 148360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ySeae740Om>) | [PDF](<https://openreview.net/pdf?id=ySeae740Om>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148360>)

Diffusion models have been used as priors for solving inverse problems\. However, existing approaches typically overlook side information that could significantly improve reconstruction quality, especially in severely ill\-posed settings\. In this work, we propose a novel framework that incorporates side information into existing diffusion\-based inverse problem solvers via inference\-time search, in a plug\-and\-play, training\-free manner\. Through extensive experiments across a range of inverse problems, including inpainting, super\-resolution, and several deblurring tasks, and across multiple diffusion\-based inverse problem solvers \(DPS, DAPS, and MPGD\), we show that augmenting each solver with our framework consistently improves the  quality of the reconstructions over the corresponding original method\. To demonstrate the generality of our approach, we consider diverse forms of side information, including reference images, textual descriptions, and anatomical MRI scans\. \{Code is available \\href\{https://anonymous\.4open\.science/r/sideinfo\-search\-reconstruction\-4A32/README\.md\}\{here\}\.\}

## Generative Modeling by Value\-Driven Transport

**Authors:** Pablo Moreno\-Muñoz; Adrian Müller; Gergely Neu

**ID:** 152354 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ThBmruiLEV>) | [PDF](<https://openreview.net/pdf?id=ThBmruiLEV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152354>)

We propose a new framework for generative modeling based on a discrete\-time stochastic control formulation of measure transport\. Adapting classic results from control theory, we formulate our problem as a linear program whose dual variables correspond to the \\emph\{optimal value function\} of the control problem, which directly encodes the optimal control policy\. Exploiting this LP formulation, we develop an efficient simulation\-free primal\-dual algorithm for computing approximately optimal value functions and the associated \\emph\{value\-driven transport\} \(VDT\) policies which approximate the true optimal policy\. We show that well\-trained VDT policies enjoy numerous favorable properties in comparison with other state\-of\-the\-art methods based on flows, diffusions, or Schr\\"odinger bridges: they lead to straight transport paths which can be simulated quickly and robustly, and can be enhanced in all the same ways as diffusion and flow\-based models \(e\.g\., conditional generation, classifier\-free guidance, unpaired image\-to\-image translation are all easy to incorporate\)\. We establish several foundational links with the aforementioned models and evaluate our methodology in an extensive range of experiments, all of which indicate strong performance\.

## Composing Diffusion Priors with Explicit Physical Context via Generative Gibbs Sampling

**Authors:** Weizhou Wang; Jonathan Weare; Aaron R Dinner

**ID:** 152144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VBX4P5bFbr>) | [PDF](<https://openreview.net/pdf?id=VBX4P5bFbr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152144>)

Pretrained diffusion models provide powerful learned priors, but in scientific sampling the target distribution often depends on physical context that is not fully represented by one generative model\. We introduce Generative Gibbs for Physics\-Aware Sampling \(GG\-PA\), a training\-free framework that formulates the composition of learned partial priors and explicit physical context as inference over a joint target distribution in an augmented state space\. We derive a Gibbs sampler for this joint target, show that it is asymptotically exact as the diffusion time approaches zero, and prove that in settings with quadratic interactions it remains exact at finite diffusion times\. We further introduce replica exchange over diffusion time to accelerate mixing\. Experiments on a double\-well system, a $\\phi^4$ lattice model, and atomistic peptide systems show that GG\-PA recovers context\-induced distribution shifts and emergent collective behavior in interacting systems using partial priors without retraining\. These results demonstrate GG\-PA as a practical approach for combining pretrained generative priors with explicit physical context\.

## CASL: Concept\-Aligned Sparse Latents for Interpreting Diffusion Models

**Authors:** Zhenghao He; Guangzhi Xiong; Boyang Wang; Sanchit Sinha; Aidong Zhang

**ID:** 149923 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mBToQ8bnJA>) | [PDF](<https://openreview.net/pdf?id=mBToQ8bnJA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149923>)

Internal activations of diffusion models encode rich semantic information, but interpreting such representations remains challenging\. While Sparse Autoencoders \(SAEs\) have shown promise in disentangling latent representations, existing SAE\-based methods for diffusion model understanding rely on unsupervised approaches that fail to align sparse features with human\-understandable concepts\. This limits their ability to provide reliable semantic control over generated images\.  We introduce CASL \(Concept\-Aligned Sparse Latents\), a supervised framework that aligns sparse latent dimensions of U\-Net\-based diffusion models with semantic concepts\. We focus on unconditional diffusion models, where the h\-space encodes stable and unconfounded  semantic structure, providing a controlled setting for mechanistic interpretability analysis\. CASL first trains an SAE on frozen U\-Net activations to obtain disentangled latent representations, and then learns a lightweight linear mapping that associates each concept with a small set of relevant latent dimensions\. To validate the semantic meaning of these aligned directions, we propose CASL\-Steer, a controlled latent intervention that shifts activations along the learned concept axis\. Unlike editing methods, CASL\-Steer is used solely as a causal probe to reveal how concept\-aligned latents influence generated content\. We further introduce the Editing Precision Ratio \(EPR\), a metric that jointly measures concept specificity and the preservation of unrelated attributes\.  Experiments on CelebA\-HQ, FFHQ, LSUN\-Church, and AFHQ\-Dog demonstrate that concept\-aligned sparse directions yield more precise and disentangled causal effects than existing activation\-space editing methods\. Classification probing further confirms that a compact subset of aligned latent units carries strong concept\-specific signals\. These results validate supervised alignment as an effective approach to interpreting diffusion model representations\.

## Enabling approximate joint sampling in diffusion LMs

**Authors:** Parikshit Bansal; Sujay Sanghavi

**ID:** 149410 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qFl5qT3qAP>) | [PDF](<https://openreview.net/pdf?id=qFl5qT3qAP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149410>)

In autoregressive language models, each token is sampled by conditioning on all the past tokens; the overall string has thus been sampled from the correct underlying joint distribution represented by the model\. In contrast, masked diffusion language models generate text by unmasking tokens out of order and potentially in parallel\. Generating an overall string sampled from the correct underlying joint distribution would \(again\) require exactly one token unmasking in every full\-model forward pass\. The more tokens unmasked in parallel, the further away the string is from the true joint; this can be seen in the resulting drop in accuracy \(but, increase in speed\)\. In this paper we devise a way to \{\\em approximately\} sample multiple tokens from the joint distribution in a single full\-model forward pass; we do so by developing a new lightweight single\-layer \`\`sampler" on top of an existing large diffusion LM\. One forward pass of the full model can now be followed by multiple forward passes of only this sampler layer, to yield multiple unmasked tokens\. Our sampler is trained to mimic exact joint sampling from the \(frozen\) full model\. We show the effectiveness of our approximate joint sampling for both pretrained\-only \(Dream\-7B\-Base, Llada\-7B\-Base\) and instruction\-tuned \(Dream\-7B\-Instruct, Dream\-7B\-Coder\) models on downstream tasks \(GSM8k, MATH, MBPP, HEval\) and on unconditional language modeling\. When eight tokens are unmasked for each full\-model denoising step, our sampling algorithm achieves a MAUVE score of 0\.84 \(vs marginal baseline of 0\.19\) with respect to the true joint distribution\.

## Rethinking Diffusion Decoding via Structural Commitment

**Authors:** Lipeng Wan; Anbang Wang; Zixuan Yang; Kun Xu; Xiuxiu Bai; Xuguang Lan

**ID:** 151740 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YSIZqo8hoL>) | [PDF](<https://openreview.net/pdf?id=YSIZqo8hoL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151740>)

Standard decoding in diffusion language models \(DLMs\) is controlled through parallel, token\-wise unmasking decisions\. However, diffusion decoding is inherently a structured, sequence\-level process, in which token states evolve under dynamic cross\-token dependencies and are therefore poorly captured by purely token\-wise unmasking control\. Motivated by this mismatch, we view diffusion decoding from a structural perspective, in which iterative denoising progressively gives rise to token subsets that are internally reliable and weakly dependent on the remaining masked positions\. We therefore introduce structural commitment, a sequence\-level unmasking principle that treats approximately closed token subsets as the basic unmasking units in diffusion decoding\. We instantiate this principle with Structural Commitment via Closure Expansion \(SCCE\), a structure\-aware inference\-time algorithm that discovers approximate closures and commits high\-certainty subsets by unmasking them, with certainty measured by balancing token reliability against external dependency leakage\. Empirically, SCCE improves the accuracy–efficiency frontier over local confidence\-based unmasking baselines while adding negligible measured per\-step overhead in our implementation\.

## Full\-Atom Cyclic Peptide Design via Test\-Time Scaled Autoregressive Flow Matching

**Authors:** Yunpeng Wang; Zhonghui Gu; Runze Ma; Jie Yang; Zhanpeng Shi; Xiaoliang Shi; Zhijian Wei; Jun Li; Shuangjia Zheng

**ID:** 152521 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SVOoK5w27h>) | [PDF](<https://openreview.net/pdf?id=SVOoK5w27h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152521>)

Cyclic peptides are an increasingly important therapeutic modality, offering antibody\-like binding specificity within compact and chemically tunable scaffolds\. Recent deep generative models have advanced target\-specific peptide design, where SE\(3\)\-equivariant diffusion and flow\-matching frameworks provide natural inductive biases for peptide\-protein complex generation\. However, existing SE\(3\)\-based peptide generators mainly focus on linear peptides and do not explicitly control cyclic topology\. As shown by recent cyclic peptide benchmarks such as CPSea, current generative baselines still have limited cyclization success and remain weak at controllably generating disulfide\- and isopeptide\-cyclized peptide distributions\. In this work, we propose \*\*CPFlow\*\*, a test\-time scaled autoregressive flow\-matching framework for receptor\-conditioned cyclic peptide sequence\-structure co\-design\. CPFlow autoregressively unmasks residues and predicts full\-atom sequence\-structure variables with continuous flow matching\. By decomposing generation into stepwise flow updates, CPFlow allows each step to balance target binding with structural closure\. At inference time, sequence\-geometry guided unmasking and multi\-particle test\-time scaling explore high\-confidence autoregressive trajectories beyond the trained model without additional training\. Cyclization\-aware relative position encodings further enable stable control over head\-tail, disulfide, and isopeptide cyclization\. Experiments on the CPSea benchmark show that CPFlow outperforms strong generative baselines across \*designability\* \(scRMSD \*\*↓ 0\.30 Å\*\*\), \*self\-consistency\* \(scRMSD \*\*↓ 0\.15 Å\*\*\), and \*binding energy\* \(mean ΔG \*\*↓ 3\.0\*\*\), with \*\*93\.4%\*\* \*binding success\* and \*\*0\.623\*\* \*diversity\*\. The code for CPFlow is available at https://anonymous\.4open\.science/r/CPFlow\-F226\.

## Unveiling the Value of Motion for Cinematic Camera Trajectories

**Authors:** Ziqi Zhou; Yujian Yuan; Laura Sevilla\-Lara

**ID:** 154123 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G6OlxDRMK9>) | [PDF](<https://openreview.net/pdf?id=G6OlxDRMK9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154123>)

Cinematic camera motion is a fundamental storytelling tool, defined not only by where the camera is positioned in the scene, but also by how it moves in terms of direction and speed\. Recent work on camera trajectory generation and alignment to text relies on pose\-centric representations\. While in principle a network could derive direction of movement and speed, we find that in practice this might not happen\. In fact, in this paper we discover that decomposing the camera trajectory representation from the traditional per\-frame poses to direction and speed has surprising benefits across multiple tasks, including trajectory\-to\-text alignment as well as text\-to\-trajectory generation\. To accurately evaluate the former, we introduce a simple and reliable protocol that overcomes the limitations of prior evaluation baselines\. For the latter, building on this representational insight, we propose a novel generative model for camera trajectories, CineGen, that achieves superior performance across a variety of metrics\. We also propose a novel dataset, CineScript, containing movie clips that are enriched with scene descriptions as well as higher\-level metadata\. This novel data allows us to test models' ability to capture high\-level cinematographic information\. We show that, despite its simplicity, representing camera trajectories through direction and speed not only helps numerically to achieve better alignment and generation, but also inherently encodes complex directorial intent\.

## Consistency\-Preserving Concept Erasure via Unsafe–Safe Pairing and Directional Fisher\-weighted Adaptation

**Authors:** Yongwoo Kim; Sungmin Cha; Hyunsoo Kim; Jaewon Lee; Donghyun Kim

**ID:** 151483 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aHNQKnXHXJ>) | [PDF](<https://openreview.net/pdf?id=aHNQKnXHXJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151483>)

With the increasing versatility of text\-to\-image diffusion models, the ability to selectively erase undesirable concepts \(e\.g\., harmful content\) has become indispensable\. However, existing concept erasure approaches primarily focus on removing unsafe concepts without providing guidance toward corresponding safe alternatives, which often leads to failure in preserving the structural and semantic consistency between the original and erased generations\. In this paper, we propose a novel framework, PAIRed Erasing \(PAIR\), which reframes concept erasure from simple removal to consistency\-preserving semantic realignment using unsafe–safe pairs\. We first generate safe counterparts from unsafe inputs while preserving structural and semantic fidelity, forming paired unsafe–safe multimodal data\. Leveraging these pairs, we introduce two key components: \(1\) Paired Semantic Realignment, a guided objective that uses unsafe–safe pairs to explicitly map target concepts to semantically aligned safe anchors; and \(2\) Fisher\-weighted Initialization for DoRA, which initializes parameter\-efficient low\-rank adaptation matrices using unsafe–safe pairs, encouraging the generation of safe alternatives while selectively suppressing unsafe concepts\. Together, these components enable fine\-grained erasure that removes only the targeted concepts while maintaining overall semantic consistency\. Extensive experiments demonstrate that our approach significantly outperforms state\-of\-the\-art baselines, achieving effective concept erasure while preserving structural integrity, semantic coherence, and generation quality\.

## CAB: Accelerating Flow and Diffusion Sampling via Rectification and Corrected Adams\-Bashforth

**Authors:** Anuska Roy; Pravin Ramachandran Nair

**ID:** 150465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hpZ7epyUY4>) | [PDF](<https://openreview.net/pdf?id=hpZ7epyUY4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150465>)

Flow and diffusion models achieve high\-fidelity, high\-resolution image synthesis, but often require many function evaluations \(NFEs\) at sampling time\. Existing acceleration methods either require additional training through distillation or rely on training\-free high\-order solvers, and both can degrade sample quality at low NFE budgets\. We propose CAB \(Corrected Adams\-Bashforth\), a training\-free sampler that accelerates both flow and diffusion models\. CAB first transforms the sampling dynamics to a common rectified coordinate system, and then applies a multistep Adams\-\-Bashforth predictor augmented with a simple correction term based on past velocity evaluations and therefore incurs no additional NFEs\. The resulting method is simple, has the same algorithmic form across model classes, and has at least third\-order local truncation error and second\-order global error\. Experiments on pretrained flow and diffusion models, including class\-conditional and large\-scale text\-to\-image benchmarks, show that CAB improves quality\-\-NFE trade\-offs in the low\-step regime of \\\(6\\\)\-\-\\\(20\\\) NFEs\. It also remains competitive with strong training\-free samplers at higher step counts across most tested models\.

## Intent\-Aware Caching for Efficient LLM Serving

**Authors:** Kazi Hasan Ibn Arif; JinYi Yoon; Dimitrios S Nikolopoulos; Hans Vandierendonck; Deepu John; Bo Ji

**ID:** 150630 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gebB3q0INK>) | [PDF](<https://openreview.net/pdf?id=gebB3q0INK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150630>)

Modern LLM serving systems use prefix caching to accelerate multi\-turn conversational workloads\. They cache the key\-value states of previous conversation prefixes and reuse them when subsequent requests share the same prefix, to avoid redundant prefill computation and reduce  serving latency\. However, achieving a high cache hit rate remains challenging because cache reuse depends on whether a conversation continues and how soon the next turn arrives\. Our analysis of real workloads shows that user intent is a strong signal for this behavior, as different intents exhibit different continuation probabilities and inter\-turn delays\. Based on this insight, we propose Intent\-Aware Caching \(IAC\), an online eviction policy that classifies requests by intent, learns lightweight reuse statistics from recent serving logs, and uses them to guide an oracle\-inspired eviction decision\. Extensive evaluation on real workloads \(e\.g\., ShareChat\) shows that IAC reaches a 34\.6\\% cache hit rate, substantially outperforming the ML\-based LPC \(18\.8\\%\) and LRU \(12\.2\\%\), while reducing average serving latency by up to 54\.6\\%\.

## Compositional Reasoning in Language Models under Reinforcement Learning Post\-Training

**Authors:** Yu He; Yingxi Li; Yifei Wang; Ellen Vitercik

**ID:** 155613\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155613

[Paper](<https://openreview.net/forum?id=4ElMzrtekX>) | [PDF](<https://openreview.net/pdf?id=4ElMzrtekX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155613>)

Compositional reasoning is critical for real\-world problem solving: since training data is necessarily limited, models must generalize by composing learned skills in new ways\. While post\-training methods such as reinforcement learning \(RL\) have substantially improved the reasoning abilities of language models \(LMs\), their effects on compositional reasoning remain less well understood\. We propose a dependency\-graph framework to formalize compositional reasoning, yielding three levels of compositionality with increasing complexity\. Empirically, we instantiate this framework with data\-structure tasks, which provide deterministic reward computation and clear compositional structure\. We find a consistent decomposed\-to\-composed asymmetry: decomposed\-skill training does not reliably transfer to composed tasks, whereas composed\-task training transfers more readily back to decomposed tasks\. We provide theoretical explanation for this asymmetry, and further evaluate compositional generalization under length extrapolation, structural distribution shift, and transfer to tasks requiring unseen skills\. Finally, we present a pilot study on real\-world tool\-calling benchmarks, showing preliminary evidence that the decomposed\-to\-composed asymmetry can extend to practical settings\.

## CSFlow: Aligning Flow Matching with Human Contrast Sensitivity

**Authors:** Malgorzata Galinska; Bart Pogodzinski; Jan Eric Lenssen

**ID:** 154473\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154473

[Paper](<https://openreview.net/forum?id=DKVqS2hVS1>) | [PDF](<https://openreview.net/pdf?id=DKVqS2hVS1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154473>)

_Abstract unavailable from the accessible public sources._

## Metropolis\-Adjusted Diffusion Models

**Authors:** Kevin H\. Lam; Tyler Farghly; Christopher Williams; Jun Yang; Yee Whye Teh; Arnaud Doucet

**ID:** 148667\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148667

[Paper](<https://openreview.net/forum?id=w2X7ALXCZx>) | [PDF](<https://openreview.net/pdf?id=w2X7ALXCZx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148667>)

_Abstract unavailable from the accessible public sources._

## StableHand: Quality\-Aware Flow Matching for World\-Space Dual\-Hand Motion Estimation from Egocentric Video

**Authors:** Huajian Zeng; Chaohua Yao; Yuantai Zhang; Jiaqi Yang; Rolandos Alexandros Potamias; Xingxing Zuo

**ID:** 155198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Yxqeh6UZi>) | [PDF](<https://openreview.net/pdf?id=7Yxqeh6UZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155198>)

Recovering world\-space 4D motion of two interacting hands from egocentric video is a fundamental capability for supervising robot policy learning, where wrist trajectories track the end\-effector and finger articulations specify the grasp pose\. Two major challenges arise in this setting: hands frequently leave the camera view for extended periods due to head motion, and persistent hand–object interactions cause severe occlusions of one or both hands\. Existing methods uniformly condition on noisy hand motion observations without accounting for their per\-frame reliability, leading to substantial performance degradation\. Our key insight is that accurate world\-space hand motion esimation is tightly coupled with the quality of per\-frame hand observations\. To this end, we decompose the quality of hand motion observations extracted from an off\-the\-shelf hand pose estimator into four channels: wrist global translation and finger articulations for both hand\. We propose StableHand, a quality\-aware flow\-matching framework conditioned on these four\-channel quality signals, which are predicted by a learned quality network\. We naturally incorporate the quality signals into the flow\-matching process through a per\-channel forward schedule, a quality\-adjusted velocity target, AdaLN modulation of the DiT denoiser, and a quality\-aware ODE initialization\. This unified generative process preserves high\-quality observations while reconstructing unreliable ones using a learned bimanual motion prior\. Experiments on HOT3D and ARCTIC, two egocentric benchmarks featuring long missing\-hand spans and persistent hand–object occlusions, show that StableHand achieves state\-of\-the\-art performance across all reported metrics, reducing W\-MPJPE by 20\-25% compared to the strongest baseline, with the largest gains on heavily occluded ARCTIC sequences\. Code and pretrained models will be released upon acceptance\.

## Stochastic Interpolants via Conditional Dependent Coupling

**Authors:** Chenrui Ma; Xi Xiao; Tianyang Wang; Xiao Wang; Yanning Shen

**ID:** 149946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m0BAYdzjal>) | [PDF](<https://openreview.net/pdf?id=m0BAYdzjal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149946>)

Existing image generation models face critical challenges regarding the trade\-off between computation and fidelity\. Specifically, models relying on a pretrained Variational Autoencoder \(VAE\) suffer from information loss, limited detail, and the inability to support end\-to\-end training\. In contrast, models operating directly in the pixel space incur prohibitive computational cost\. Although cascade models can mitigate computational cost, stage\-wise separation prevents effective end\-to\-end optimization, hampers knowledge sharing, and often results in inaccurate distribution learning within each stage\. To address these challenges, we introduce a unified multi\-stage generative framework formulated under the \\emph\{stochastic interpolant\} formalism with our \\textbf\{Conditional Dependent Coupling\} strategy as a Flow\-Matching variant\. It decomposes the generative process into interpolant trajectories at multiple stages, ensuring accurate distribution learning while enabling end\-to\-end optimization\. Importantly, the entire process is modeled as a single unified Diffusion Transformer, eliminating the need for disjoint modules and also enabling knowledge sharing\. Under explicitly stated assumptions, we provably reduce both transport cost and asymptotic inference time, we empirically validate the underlying NFE\-\-transport\-cost and per\-evaluation\-cost relations\. Extensive experiments demonstrate that our method achieves competitive fidelity and substantially lower wall\-clock cost in the low\-NFE regime across multiple resolutions\.

## DiLaDiff: Distilled Latent\-augmented Diffusion for Language Modeling

**Authors:** Jean\-Marie Lemercier; Tomas Geffner; Morteza Mardani; Karsten Kreis; Arash Vahdat; Ante Jukić

**ID:** 150062 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l1EueDpKBW>) | [PDF](<https://openreview.net/pdf?id=l1EueDpKBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150062>)

Diffusion language models intrinsically fail to capture correlations between decoded tokens, which leads to a harsh trade\-off between sampling quality and throughput\. To solve this issue, we propose DiLaDiff, a variant of masked diffusion language models with three components: \(1\) a continuous latent space with semantic capabilities, learned by an auto\-encoder fine\-tuned from an existing masked diffusion language model; \(2\) a latent diffusion model learning the prior over the encoder distribution; \(3\) a consistency model distilling the learned prior into a few\-step latent generative model\. We show that, even without distillation, our latent\-guided diffusion model outperforms the masked diffusion baseline while significantly accelerating inference\. Consistency distillation further lowers the computational overhead of continuous diffusion, such that the latent is generated in negligible time compared to discrete decoding\.

## Bonobo: Efficient Library\-Scale Generation for De Novo Antibody Design

**Authors:** Sebastian Ober; Nick Bhattacharya; Phillip M Maffettone; Calvin McCarter; Hunter Elliott

**ID:** 149825 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n11puTWueo>) | [PDF](<https://openreview.net/pdf?id=n11puTWueo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149825>)

Recently several methods have shown promise for purely in silico “de novo” design of antibodies which bind to drug targets\. The methods which have shown success in vitro propose candidates via either a generative diffusion model or hallucination\-based sequence optimization, and then filter these candidates with a structure predictor model\. Hallucination methods rely on compute\-intensive backpropagation through a structure predictor model for each candidate, and the generative methods require expensive structure re\-prediction and filtering of many \(often mostly non\-passing\) candidates, limiting their application to test\-time generation of large libraries\. Given the highly variable per\-drug\-target hit rates of current methods, screening large libraries is a well established route to improved antibody candidate discovery\. Thus, we propose an alternative approach, Bonobo, which instead formulates this problem as black\-box optimization of a per\-drug\-target generative model, amortizing candidate generation into training\. This is accomplished by using a structure predictor as a reward signal to directly train a GFlowNet generative model\. We show that this approach can match or exceed the in silico metrics of state\-of\-the\-art approaches, while allowing for dramatically more efficient generation of diverse and arbitrarily large numbers of antibody binder candidates\.

## Discovering Phase Space Structure in Learned Hamiltonian Systems

**Authors:** Jiayin Liu; Yulong Yang; Vineet Bansal; Christine Allen\-Blanchette

**ID:** 148569 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wstD80hIpm>) | [PDF](<https://openreview.net/pdf?id=wstD80hIpm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148569>)

Mechanics\-inspired neural dynamical models improve interpretability and physical consistency, but they usually assume a known configuration space, fixed physical parameters, and deterministic prediction from a prescribed initial condition\. We introduce Structured Phase Space GAN \(SPS\-GAN\), a conditional generative model that learns structured dynamics from both Cartesian trajectories and video\. SPS\-GAN combines a port\-Hamiltonian backbone with adversarial conditional generation, allowing conservative, dissipative, and forced systems to be represented in a single architecture\. To infer latent mechanical structure from raw observations, we use a cyclic\-coordinate loss that recovers both the system degrees of freedom and canonical coordinates without access to the true phase space\. Experiments on simulated and real\-world systems show that SPS\-GAN improves trajectory accuracy over supervised dynamics baselines and video consistency over generative baselines, while consistently recovering the correct latent mechanical coordinates across observation modalities and dynamical regimes\.

## Architecture\-Embedded Physics Priors for Mitigating Spectral Bias in Physics\-Informed Neural Networks

**Authors:** Zhuo Zhang; Li Zhang; Ying Miao; Hongzong LI; Zhixuan Liang; Yong Yang; Gemine Vivone

**ID:** 150185 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k4m1F3R3m4>) | [PDF](<https://openreview.net/pdf?id=k4m1F3R3m4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150185>)

Physics\-Informed Neural Networks \(PINNs\) struggle to capture high\-frequency components of PDE solutions, a failure mode known as spectral bias\. Most existing fixes adjust the loss, the sampling, or the input encoding, but the network itself remains agnostic to the equation it is supposed to solve\. We take a different route and embed physics priors into the architecture\. The network's internal spectrum is shaped to match the spectrum of the target PDE through three components that are trained end\-to\-end: a bounded coordinate warping that contracts regions where the solution varies sharply, a spectral attention layer driven by the PDE residual that emphasizes physically active Fourier modes, and an inter\-harmonic gate that lets low\-frequency channels modulate high\-frequency ones\. We test the design on four forward PDEs \(Helmholtz, Wave, Klein\-\-Gordon, Burgers\), the Burgers inverse problem, and seismic reconstruction, including Gulf of Mexico field data\. Across these tasks, the architecture clearly outperforms seven PINN baselines on accuracy and produces noticeably fewer artifacts\. Code will be made publicly available upon acceptance\.

## DriveFuture: Future\-Aware Latent World Models for Autonomous Driving

**Authors:** Yufeng hong; Xiaotian Zhou; Yingyan Li; Xiangpo Zhou; Lin Liu; Yadan Luo; Zheng Liu; Lei Yang; Ziying Song

**ID:** 149040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tITD5xFjY8>) | [PDF](<https://openreview.net/pdf?id=tITD5xFjY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149040>)

Existing latent world models for autonomous driving have opened a promising path toward future\-aware driving intelligence\. However, they typically treat future latent states as prediction targets or auxiliary signals, rather than directly conditioning trajectory planning\. This can entangle current and future features in latent space\. In this work, we propose DriveFuture, a future\-aware latent world modeling framework for autonomous driving that explicitly learns planning\-oriented foresight by conditioning the current latent state modeling process on future world states\. Specifically, during training, the model first predicts future latent world states from the current latent state and ego action, and then refines the prediction against the ground\-truth future latent state via cross\-attention\. The resulting future\-aware latent serves as an explicit condition for a diffusion\-based trajectory planner\. During inference, DriveFuture conditions on the predicted future latent state instead of the ground\-truth future state\. DriveFuture achieves SOTA performance on the public NAVSIM benchmarks, reaching 55\.5 EPDMS on NAVSIM\-v2 navhard, 89\.9 EPDMS on NAVSIM\-v2 navtest, and 90\.7 PDMS on NAVSIM\-v1 navtest, respectively\. These results suggest that the key to latent world modeling lies not merely in simulating future states, but more importantly in conditioning current decision\-making on future states\. Notably, as of April 2026, DriveFuture ranks 1st on the NAVSIM\-v2 navhard leaderboard and achieves SOTA performance on NAVSIM\-v1 navtest\.

## Towards more general control of diffusion models using Jeffrey Guidance

**Authors:** Raphaël Razafindralambo; Rémy Sun; Frederic Precioso; Jes Frellsen; Pierre\-Alexandre Mattei

**ID:** 149382 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qUtuEEQhIU>) | [PDF](<https://openreview.net/pdf?id=qUtuEEQhIU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149382>)

A key strength of diffusion models lies in their flexibility, since their outputs can be controlled at sampling time through guidance\.  However, beyond simple cases such as conditional sampling, the target distribution is often left implicit, defined only through a sampling rule or a heuristic energy function\. To address this, we propose Jeffrey guidance, a principled framework that extends diffusion\-model control to applications beyond what standard guidance can express\. It leverages Jeffrey’s rule of conditioning to update marginal distributions towards a prescribed target, preserving the conditional structure and minimally perturbing the joint distribution\. We first demonstrate Jeffrey guidance by targeting a prescribed embedding distribution\. With Inception embeddings as the target, this leads to substantial reductions in FID on both CIFAR\-10 and FFHQ\. We further apply Jeffrey guidance to fairness on CelebA\-HQ, updating an unconditional diffusion model to enforce independence between attributes\.

## \\texttt\{FEROM\}: Frontier Endogenous Reveal\-Order Marginal Policy Optimization for Masked Diffusion LMs

**Authors:** Zian Su; Ziyang Huang; Kaiyuan Zhang; Xiangyu Zhang

**ID:** 155453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Tnt9zpIFJ>) | [PDF](<https://openreview.net/pdf?id=5Tnt9zpIFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155453>)

Masked diffusion language models generate text by iteratively unmasking positions, with practical samplers often selecting reveal positions from the model's own logits\. The reveal order is therefore an endogenous latent variable of the rollout process with an enormous discrete latent space\. Policy optimization objectives relying on pre\-defined schedules or sampled trajectories introduce either bias or high variance\. In this paper, we propose \\texttt\{FEROM\}, \\emph\{Frontier Endogenous Reveal\-Order Marginal Policy Optimization\}, which targets the rollout\-induced marginal response policy of masked diffusion LMs\. \\texttt\{FEROM\} derives a Rao\-\-Blackwellized policy\-gradient identity over latent reveal orders and expresses the resulting estimator as posterior edge occupancy on a reveal\-state DAG\. To make marginalization practical, we introduce Frontier Reveal Marginalization, a budgeted estimator that combines scorelaw local reveal estimation with frontier expansion of high\-mass partial states\. Integrated into a GRPO\-style objective, \\texttt\{FEROM\} replaces single\-path log\-scores with a locally marginalized edge\-based surrogate\. Experiments on math and coding tasks show comparable or improved results over existing methods under matched compute budgets\. Offline proxy study further shows potential in gains with increased budgets\.

## What kills $v$\-prediction? A Patch\-wise PCA Perspective on Pixel\-Space Flow Matching

**Authors:** Tianze Luo; Haofeng Huang; Yuan Yao

**ID:** 154141 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FwWaPhPb2O>) | [PDF](<https://openreview.net/pdf?id=FwWaPhPb2O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154141>)

Latent Diffusion Models dominate generative modeling but face two\-stage training complexity and the inherent reconstruction limits of pre\-trained autoencoders\. Pixel\-space Flow Matching offers a simplified end\-to\-end alternative yet often encounters training instabilities when using the standard $v$\-prediction objective\. Recent research attributes this difficulty to the off\-manifold nature of noised targets, prompting a widespread shift toward $x$\-prediction\. In this paper, we carefully investigate this prevailing assumption through patch\-wise Principal Component Analysis \(PCA\), and we reveal that the failure of $v$\-prediction is primarily a bandwidth issue\. Specifically, the velocity field in minor components is mostly determined by the raw noisy input, which differs from the dynamics in the principal component space\. Deep backbones must propagate this minor information to the final layer to predict the velocity field, which consumes significant model capacity that should be dedicated to principal components\. This is particularly critical in pixel space where noise dimensionality is comparable to the hidden dimension\. To resolve this, we simply incorporate a term containing the raw noisy input into the final layer\. This architectural bypass enables the backbone to focus on high\-level semantics while the final layer efficiently reconstructs the minor velocity field\. Our method successfully revives $v$\-prediction and achieves competitive performance on ImageNet $256\\times256$ dataset compared to $x$\-prediction baselines\.

## Reliability\-Coupled Manifold\-Aware Diffusion for Missing\-Modality Inference

**Authors:** Yiming Ren; Yuhao Fang; Qing Zhou; Ming Li; Ye Zhang; Zijian Wang; Yao Lu; Chun Li

**ID:** 156117 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0GkSxMZdx4>) | [PDF](<https://openreview.net/pdf?id=0GkSxMZdx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156117>)

In real\-world multimodal time\-series inference, a common practice is completion–inference decoupling: missing modalities are heuristically imputed and then passed to deterministic fusion and decision making\. We show that this chained design yields unreliable predictions under missingness, noise, and temporally varying modality reliability, because imputation errors propagate without uncertainty feedback\. Through theoretical and empirical analysis, we identify latent\-consistent completion and evidential reliability modeling as two key ingredients for robust multimodal inference\. Building on these insights, we propose MD2E\-MI, a manifold\-aware diffusion\-based imputation and evidence\-driven multimodal inference framework that couples diffusion\-based completion with uncertainty\-aware inference in a single pathway\. Experiments demonstrate stable performance across diverse missingness and noise regimes, while providing interpretable, temporally varying reliability estimates\.

## Permutation\-Invariant Spectral Learning via Dyson Diffusion

**Authors:** Tassilo Schwarz; Cai Dieball; Constantin Kogler; Renaud Lambiotte; Arnaud Doucet; Aljaz Godec; George Deligiannidis

**ID:** 150187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k4MGmGsA9o>) | [PDF](<https://openreview.net/pdf?id=k4MGmGsA9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150187>)

Diffusion models are central to generative modeling and have been adapted to graphs by diffusing adjacency matrix representations\. The challenge of having up to $n\!$ such representations for graphs with $n$ nodes is only partially mitigated by using permutation\-equivariant learning architectures\. Despite their computational efficiency, existing graph diffusion models struggle to distinguish certain graph families and their spectra, unless graph data are augmented with ad hoc features\. This shortcoming stems from enforcing the inductive bias within the learning architecture\. In this work, we leverage random matrix theory to analytically extract the spectral properties of the diffusion process, allowing us to push most of the inductive bias from the architecture into the dynamics\. Building on this, we introduce the Dyson Diffusion Model, which employs Dyson's Brownian motion to capture the spectral dynamics of an Ornstein\-Uhlenbeck process on the adjacency matrix\. Furthermore, conditioned on the spectral dynamics, we formulate a Lie group diffusion, appropriately modeling the remaining degrees of freedom\. Strikingly, the resulting learning problem becomes permutation invariant at the Lie algebra level\. We demonstrate that the Dyson Diffusion Model learns graph spectra accurately and outperforms existing graph diffusion models\.

## Revisiting The Power of Closed\-Form: Robust Deep Image Prototype Discovery via Scale Mixtures

**Authors:** Zhikang Xu; Jiarui Xing; Jian Wang

**ID:** 151640 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z5yR7ynhmJ>) | [PDF](<https://openreview.net/pdf?id=Z5yR7ynhmJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151640>)

We present a robust deep clustering framework for unsupervised visual discovery that bridges the gap between statistical robustness and mathematical tractability\. Current generative approaches typically rely on either noise\-prone Gaussian priors or computationally intensive diffusion models; however, neither paradigm simultaneously offers explicit latent structures and exact analytic optimization\. While diffusion models generate strong priors, their reliance on iterative sampling and intractable likelihoods limits their scalability and interpretability in clustering tasks\. Our approach addresses these limitations by constructing a latent space governed by a Student's $t$ distribution via a Bayesian scale\-mixture formulation\. This yields the first fully closed\-form augmented evidence lower bound \(ELBO\) for this model class, effectively eliminating the biased variational approximations and high computational costs inherent in prior heavy\-tailed or diffusion\-based frameworks\. By treating precision as a latent variable, our objective automatically modulates the influence of each data point; it downweights outliers to learn a data\-dependent measure of trust\. This mechanism leads to superior robustness and more stable manifold learning compared to state\-of\-the\-art approaches\. We demonstrate the resilience of our framework on standard vision benchmarks and complex neuroimaging tasks\. In real\-world brain magnetic resonance imaging \(MRI\)\-driven neurodegenerative disease analysis, our model successfully recovers clean and anatomically coherent clusters where clinical noise typically collapses rare subtypes\. These results underscore the ability of our framework to preserve clinically crucial morphological subtypes, allowing precise discovery within clinical interventions\.

## Efficient Off\-Policy RL for Video Generation via Forward\-Consistent Reward Matching

**Authors:** Hongzheng Yang; Mengyang LIU; Haoxuan Wu; Kun Li; Yuzhi Zhao; Wei Liu

**ID:** 151908 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WyhaKI6IC1>) | [PDF](<https://openreview.net/pdf?id=WyhaKI6IC1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151908>)

Reinforcement learning \(RL\) post\-training aligns diffusion\-based generators with human preferences, yet existing RL methods suffer from poor compatibility with off\-policy learning and few\-step distilled models\. These limitations are especially severe in the video generation area, as practical video generation pipelines often rely on few\-step distilled generators\. Furthermore, due to complex spatial\-temporal dynamics and higher dimensions, near\-on\-policy video rollouts are both expensive to collect and often imperfect\. Relying on such rollouts alone can amplify artifacts and is prone to reward hacking\. To address these issues, we propose Forward\-Consistent Reward Matching \(FCRM\), an efficient off\-policy RL framework for video generation\. FCRM converts the forward denoising loss into a positive loss\-induced score and formulates the reward alignment as a one\-step GFlowNet matching problem\. The resulting residual is pointwise in a clean sample space that naturally supports off\-policy learning and few\-step generators\. To avoid biased gradients, we introduce a double\-sampling estimator for the squared residual objective\. Theoretically, minimizing the proposed matching residual bounds the KL divergence between the learned distribution and the optimal reward\-tilted distribution\. Experiments on standard video generation benchmarks validate FCRM across online, replay, offline, and few\-step settings and outperform SOTA methods\.

## Arbitrarily Conditioned Hierarchical Flows for Spatiotemporal Events

**Authors:** Keyan Chen; Qiwei Yuan; Zhitong Xu; Bin Shen; Shandian Zhe

**ID:** 154895 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A8CPCX5IjP>) | [PDF](<https://openreview.net/pdf?id=A8CPCX5IjP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154895>)

Events in spatiotemporal systems are ubiquitous, yet modeling their complex distributions remains challenging\. Existing point process models often rely on strong structural assumptions and are typically limited to autoregressive, event\-by\-event prediction\. As a result, they struggle to support broader inference tasks such as inverse inference, trajectory reconstruction, and recovery of missing event locations\. We introduce Arbitrarily Conditioned Hierarchical Flows \(ARCH\), a hierarchical flow matching framework for spatiotemporal event modeling\. ARCH is expressive enough to capture complex event distributions while enabling tractable and accurate computation of conditional intensities, which quantify instantaneous event risk\.   Built on a history\-encoder\-generative\-decoder architecture, ARCH introduces a hybrid masking strategy for flexible conditioning on arbitrary observed events\. This enables a unified treatment of forecasting, inverse inference, and partial trajectory recovery within a single framework\. Experiments on synthetic and real\-world datasets show that ARCH consistently outperforms existing baselines across both prediction and conditional inference tasks\.

## Variational Trajectory Optimization of Anisotropic Diffusion Schedules

**Authors:** Pengxi Liu; Zeyu Michael Li; Xiang Cheng

**ID:** 153361 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LwTBXZvDas>) | [PDF](<https://openreview.net/pdf?id=LwTBXZvDas>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153361>)

We introduce a variational framework for diffusion models with anisotropic noise schedules with a matrix\-valued path $M\_t\(\\theta\)$ that allocates noise across subspaces\. Central to our framework is a trajectory\-level objective that jointly trains the score network and learns $M\_t\(\\theta\)$, which encompasses general parameterization classes of matrix\-valued noise schedules\. We further derive an estimator for $\\partial\_\\theta \\nabla \\log p\_t$ that enables efficient optimization of the $M\_t\(\\theta\)$ schedule\. For inference, we develop an efficiently\-implementable reverse\-ODE solver that is an anisotropic generalization of the second\-order Heun discretization algorithm\. Across CIFAR\-10, AFHQv2, FFHQ, and ImageNet\-64, our method consistently improves upon the baseline EDM model in all NFE regimes\.

## ST\-DiffEye: Diffusion\-based Continuous Gaze Generation via Joint Scanpath\-Trajectory Modeling

**Authors:** Brian Nlong Zhao; Ozgur Kara; Junho Kim; James Rehg

**ID:** 155473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5MZl4W68FP>) | [PDF](<https://openreview.net/pdf?id=5MZl4W68FP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155473>)

We study the problem of human gaze modeling, which aims to generate the gaze patterns a viewer produces while observing a visual stimulus\. Gaze is primarily captured through two modalities: continuous eye\-tracking trajectories, which describe fine\-grained motion dynamics, and discrete scanpaths, which describe high\-level fixation structure\. Because gaze varies substantially across viewers and trials, we treat this variability as a defining property rather than noise and model gaze as a stochastic generative process\. Existing generative gaze models supervise on only one of these two representations in isolation\. We hypothesize that trajectories and scanpaths describe gaze at complementary scales and are jointly informative during training, and test this hypothesis through ST\-DiffEye, a joint trajectory\-scanpath diffusion framework that couples both modalities by concatenating them as an additional raw input channel, requiring no architectural overhead beyond an input and output channel expansion\. We further introduce a principled evaluation framework based on the Continuous Ranked Probability Score \(CRPS\), which generalizes any existing sequence similarity metric into a proper scoring rule that jointly assesses the accuracy and diversity of generated gaze\. Experiments on task\-driven visual search, covering both target\-present and target\-absent scenarios, and on free\-viewing benchmarks demonstrate state\-of\-the\-art performance\. These results, along with detailed ablations, confirm the benefit of joint modeling and the value of distribution\-aware evaluation in capturing the intrinsic variability of human gaze\.

## Same Concept, Different Directions: Cross\-Modal Feature Heterogeneity in Sparse Autoencoders

**Authors:** Chungpa Lee; Jihoon Kwon; Kyle Min; Jy\-yong Sohn

**ID:** 153223 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ms7zhhKERy>) | [PDF](<https://openreview.net/pdf?id=Ms7zhhKERy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153223>)

Vision\-language models map images and text into a joint embedding space\. However, these embeddings often entangle multiple semantic features, which limits their interpretability and controllability\. While sparse autoencoders have emerged as a useful tool for decomposing these embeddings into monosemantic features, their application to joint embedding spaces has largely relied on an implicit, untested assumption that semantically corresponding features share the same directions across modalities\. In this paper, we challenge this assumption by identifying discrepancies in feature directions for the same concept across image and text modalities, a phenomenon we term \*cross\-modal feature heterogeneity\*\. We demonstrate that this heterogeneity is a key driver of the \*modality split\*, where a shared concept activates different latents depending on the modality\. This finding further reveals why aligning latent activations alone is insufficient to resolve the underlying feature mismatch\. To address this misalignment, we propose an approach that trains sparse autoencoders to preserve the unique feature geometry of each modality and aligns corresponding features post hoc\. Our method improves reconstruction fidelity and enhances performance in cross\-modal retrieval and concept steering\.

## PEEK: One\-Step Look\-Ahead Exposure Bias Correction for Diffusion Sampling

**Authors:** Yunwei Bai; Ying Kiat Tan; Tsuhan Chen

**ID:** 150622 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=glLK6ZrE3S>) | [PDF](<https://openreview.net/pdf?id=glLK6ZrE3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150622>)

Diffusion image generators owe much of their practical success  to accurate denoising networks and strong numerical samplers\.  Yet the two components are not fully matched\. During sampling, the denoiser is asked to make predictions based  on imperfect noisy states formed by model predictions that  differ from the training noisy states formed by real data\. This train\-test gap, known otherwise as exposure  bias in literature, caps image generation quality \(i\.e\., blurry, lacking in details or unnaturally\-shaped\)\.  To mitigate the problem, we propose PEEK, a training\-free deterministic sampler plugin\.  At each eligible denoising step, PEEK first performs a provisional one\-step  update, evaluates the denoiser once at the look\-ahead state, and either keeps  the current clean prediction or replaces it with this one\-step\-later prediction to form the actual noisy state\.  By taking the additional step, we generally obtain a  higher\-signal, more\-image\-like prediction for the noisy state, mitigating the exposure bias\.  To optimize the replacement positions, PEEK searches for a binary  replacement schedule with a greedy metric\-driven search made efficient by the PEEK  prefix and baseline noise\-schedule\-rebasing caches; for a 9\-step search, the caches  reduce the one\-candidate worst\-case vanilla denoiser\-evaluation count by 69\.3\\%\.  Across pixel\-space and latent\-space diffusion models with unconditional, label\-guided,  and text\-guided settings on CIFAR\-10, CelebA\-HQ, LSUN Bedroom, ImageNet, and MS\-COCO datasets, PEEK  improves over NFE\-matched DPM\-Solver\+\+ and DEIS baselines, with five\-run mean  FID reductions up to 39\.3\\% under the same deployment cost\. Code will be released\.

## Best\-of\-$N$ Guidance for Test\-time Diffusion Alignment

**Authors:** Richard Lee Kim; Yeongmin Kim; Gyuwon Sim; Taekyu Kim; Minsang Park; Il\-chul Moon

**ID:** 154666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BvprWJNII9>) | [PDF](<https://openreview.net/pdf?id=BvprWJNII9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154666>)

Diffusion models achieve strong generative performance but often struggle to align generated samples with human preferences measured by a reward model\. A simple yet effective algorithm for test\-time alignment is Best\-of\-$N$ \(BoN\) sampling, which draws $N$ i\.i\.d\. samples from a pre\-trained diffusion model and outputs the single highest\-reward sample\. Despite its empirical success, this procedure is inherently post hoc: reward information is used only for selection after generation, not for improving the reverse diffusion process itself\. Consequently, BoN sampling does not improve the average alignment of generated samples and is primarily suited to single\-output settings\. We propose Best\-of\-$N$ Guidance \(BoNG\), a novel method that integrates the principle of BoN sampling directly into the reverse diffusion process\. BoNG performs online BoN selection over denoising particles and adjusts the reverse diffusion process to steer the particle population toward higher\-reward regions during generation\. Specifically, by introducing an asymmetric guidance interaction among denoising particles, BoNG uses the current BoN particle as a guidance signal to the rest of the particle population\. This particle\-level interaction reshapes the sampling process toward higher\-reward regions, enabling BoNG to improve not only the final best sample beyond Vanilla BoN sampling, but also the average quality of generated samples\. Over 36 empirical comparisons, BoNG achieves the best performance in 29 cases, ranking first in 80\.56\\% of the comparisons against SMC and Vanilla BoN sampling\. BoNG also supports multi\-output capability, showing 1\.3$\\times$ ImageReward score than the latest sample\-based guidance method with 1\.6$\\times$ speedup\.

## Taking Low\-Rank LLM Compression a Step Further: A Global Perspective with Fused Inference

**Authors:** Xinhao Huang; Yuqiang He; Zeyi Wen

**ID:** 153795 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdTyUsG3dN>) | [PDF](<https://openreview.net/pdf?id=IdTyUsG3dN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153795>)

Low\-rank decomposition has emerged as a promising paradigm for compressing Large Language Models \(LLMs\)\. However, current methods universally rely on greedy, layer\-wise reconstruction objective\. This approach induces cascading error propagation, where localized truncation errors amplify across deep architectures\. To mitigate this limitation, we formulate the low\-rank decomposition problem from a global perspective using the Alternating Direction Method of Multipliers \(ADMM\)\. By decoupling the non\-convex rank constraints from the holistic language modeling objective, our method preserves model quality\. Systemically, the standard sequential execution of factorized matrices often fails to yield practical wall\-clock speedups due to kernel launch overheads and activation memory traffic\. We bridge the gap by developing a fused GPU operator\. Extensive experiments across diverse architectures demonstrate that our algorithm\-agnostic method significantly benefits existing methods\. For example, at a 30% compression ratio on Qwen\-3\-8B, our method achieves a perplexity of 10\.05—nearly indistinguishable from the uncompressed model's 9\.85—while further improving zero\-shot reasoning accuracy\. Furthermore, by integrating our custom fused operator into the widely adopted inference ecosystems, we translate theoretical FLOPs reduction into practical inference speedup\.

## GridDiffuser: Constraint\-Guided Graph Diffusion for AC Optimal Power Flow

**Authors:** Yutong Zheng; Jichen Zhang; Danilo Mandic

**ID:** 152781 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QONjqmSVsQ>) | [PDF](<https://openreview.net/pdf?id=QONjqmSVsQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152781>)

Modern power systems are undergoing a significant transition from deterministic, steady\-state dispatch to operation under high\-dimensional uncertainty and rapid fluctuations driven by renewables, electrification, and topology perturbations\. This shift requires Optimal Power Flow \(OPF\) to be solved frequently under diverse operating conditions\. Classical AC\-OPF solvers provide high physical fidelity but are slow for high\-frequency scheduling, while linear approximations such as DC\-OPF sacrifice accuracy for computational speed\.  To address these challenges, we propose GridDiffuser, a graph diffusion solver for AC\-OPF\. Unlike deterministic learning methods that predict a single solution and struggle to represent the non\-convex landscape, GridDiffuser models a multi\-modal distribution over operating points and generates multiple candidate solutions\. Our method further applies an efficient Levenberg\-\-Marquardt correction to the clean\-space estimate, iteratively steering samples toward the constraint\-feasible set\. Experiments on thousand\-bus grids with instance\-level N\-1 contingencies show that GridDiffuser substantially reduces pre\- and post\-power flow \(PF\) violations compared with deterministic baselines while generating solutions much faster than AC\-IPOPT\.

## Mind the Gap: The Divergent Rebound Dynamics of Diffusion and Autoregressive Model

**Authors:** Qiwen Jin; Zhengyu Zhou; Weiwei Liu; Xiuwen Gong

**ID:** 152724 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QqAiRxEUEp>) | [PDF](<https://openreview.net/pdf?id=QqAiRxEUEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152724>)

Post\-training alignment can be fragile: in autoregressive models \(ARMs\), subsequent fine\-tuning on counter\-aligned or distribution\-shifted data can erode previously aligned behavior\. While this rebound phenomenon has been studied mainly in ARMs, how such fine\-tuning triggers a similar rebound in diffusion language models \(DLMs\) remains poorly understood\. We conduct extensive fine\-tuning experiments across diverse datasets, perturbation sizes, model scales, alignment algorithms, and inference hyperparameters, and find that DLMs consistently exhibit a slower rebound pattern than ARMs do\. Furthermore, while ARMs fine\-tuned on more positive data suffer a steeper degradation under reverse updates, DLMs exhibit ordering stability: models fine\-tuned on larger positive alignment sets retain higher performance as negative data increases\. We propose a compression perspective to account for this behavior\. Unlike ARMs, whose compression naturally follows a fixed left\-to\-right order, DLMs generate text through iterative masked denoising\. We formalize this distinction through a template\-wise compression theory for DLMs\. The resulting elasticity theory explains why counter\-aligned updates lead to much slower alignment erosion in DLMs\. Our experiment findings indicate that rebound is shaped not only by post\-training data and objectives, but also by the underlying generation mechanism\.

## WASD: Wasserstein\-based Knowledge Distillation for Large Language Models

**Authors:** Byeonghu Na; Donghyeok Shin; Yeongmin Kim; Mina Kang; Il\-chul Moon

**ID:** 154228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FGlwR3s9v3>) | [PDF](<https://openreview.net/pdf?id=FGlwR3s9v3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154228>)

Autoregressive large language models \(LLMs\) have rapidly advanced in capability, but their increasing scale comes with substantial computational and memory costs at inference time\. Knowledge distillation \(KD\) offers a practical solution by transferring knowledge from a large teacher model to a smaller student model via alignment of discrete probability distributions\. However, existing KD methods for LLMs primarily rely on divergences that evaluate discrepancies through probability values at each vocabulary index, without explicitly leveraging token\-level semantic information\. We propose Wasserstein\-based knowledge distillation \(WASD\) for LLMs, which incorporates token\-level semantic information via the Wasserstein\-based distance with a cost matrix derived from token embeddings\. To ensure computational tractability, we adopt the Sinkhorn divergence and derive an equivalent formulation that can be efficiently optimized without introducing additional networks\. Experiments across multiple LLM families and scales show that WASD consistently improves distillation performance on diverse tasks, including instruction following, mathematical reasoning, and code generation\. Our results highlight the importance of semantic information encoded in the token space for effective distribution alignment in LLM distillation\.

## Learning What Not to Impute: An Uncertainty\-Aware Diffusion Framework for Meaningful Missingness

**Authors:** Lixing Zhang; Yidong Ouyang; Weifu Li; Guang Cheng; Shixiang Zhu; Liyan Xie

**ID:** 154580 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CWRww54NWF>) | [PDF](<https://openreview.net/pdf?id=CWRww54NWF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154580>)

Missing value imputation is a fundamental task in machine learning, with most existing methods assuming that all missing entries correspond to unobserved regular values\. In many real\-world datasets, however, missingness may arise from two distinct sources: some entries are meaningfully missing \(intrinsically absent and semantically valid\), while others are missing due to the observation process and should be imputed\. We formalize this distinction as a selective imputation problem, where the goal is to jointly infer which missing entries should be preserved and which should be recovered\. To address this challenge, we propose Diff\-Joint, a diffusion\-based framework that jointly models tabular data together with a latent missingness mask\. The method alternates between conditional sampling and uncertainty\-aware aggregation to iteratively refine both imputed values and missingness labels\. Empirical results on synthetic and real\-world datasets demonstrate that Diff\-Joint effectively identifies meaningfully missing entries while achieving competitive imputation accuracy and improved downstream task performance\.

## On the Error Correcting Effects of Stochasticity in Discrete Diffusion

**Authors:** William Yuan; Sungwon Jeong; Amirali Aghazadeh

**ID:** 154726 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BTRvd3ITHB>) | [PDF](<https://openreview.net/pdf?id=BTRvd3ITHB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154726>)

Discrete diffusion models achieve strong performance in text and image generation, but their inference remains slow and must inherently balance sampling efficiency and sample quality\. In this work, we present a systematic study of how the \\emph\{degree of stochasticity\} in Markov transitions governs the tradeoff\. We show that highly deterministic transitions converge rapidly but suffer from error accumulation, while more stochastic transitions converge more slowly yet can achieve lower final error\. Using an information\-theoretic analysis, we identify the underlying mechanism as an error correcting effect induced by \\emph\{redundant transitions\} that symmetrically exchange mass between states, and show that these transitions can provably contract sampling errors\. Motivated by this analysis, we propose \\emph\{Discrete Churn and Restart Sampling\} \(DCRS\), a novel inference algorithm that injects controlled stochasticity by alternating between forward and reverse diffusion processes\. Experiments on large\-scale image and language benchmarks show that DCRS improves the speed\-quality tradeoff in the low number of function evaluations regime\. On image datasets, DCRS achieves up to a $10\\times$ reduction in sampling steps compared to standard samplers while maintaining competitive sample quality, whereas on language benchmarks, we observe more nuanced behavior depending on the corruption process and sampling procedure\.

## Integrated Imputation\-Classification for Supervised Learning with Missing Data

**Authors:** Yue Liu; Ben Liang; Ali Tizghadam; Ilijc Albanese

**ID:** 149201 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sAQTY54J7W>) | [PDF](<https://openreview.net/pdf?id=sAQTY54J7W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149201>)

We study supervised classification problems with missing feature values\. Existing approaches often decouple imputation from classification, producing imputations that may be plausible but uninformative for prediction\. Instead, we propose the Integrated Imputation and Classification Network \(IICN\), which jointly trains an imputer and an $\{\(n\{\+\}1\)\}$\-classdiscriminator adversarially with a single class supervised classification objective, where the discriminator learns to distinguish among the $n$ true classes and an additional \`\`imputed" class\. We prove that at the global optimum, the imputer and discriminator together implement marginalization over missing coordinates and yield a Bayes\-optimal classifier\. We evaluate IICN on FashionMNIST, CIFAR\-10, and tabular datasets with naturally occurring missingness\. IICN outperforms classical impute\-then\-classify pipelines and recent generative baselines, showing strong robustness and accuracy in challenging settings\.

## EgoForce: Robust Online Egocentric Motion Reconstruction via Diffusion Forcing

**Authors:** Inwoo Hwang; Donggeun Lim; Hojun Jang; Young Min Kim

**ID:** 150778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fS4wDYJZpa>) | [PDF](<https://openreview.net/pdf?id=fS4wDYJZpa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150778>)

With recent advances in embodied agents and AR devices, egocentric observations are readily available as input for real\-world interactive online applications\. However, egocentric viewpoints can only sporadically observe hands, in addition to the estimated head trajectory\.  We propose EgoForce, an online framework for reconstructing long\-term full\-body motion from noisy egocentric input\. While existing generative frameworks can robustly handle noisy and sparse measurements, they assume a fixed\-length observation window is available and are thus not suitable for real\-time applications\. Faster inference often relies on autoregressive prediction, sacrificing robustness\. In contrast, we adopt a diffusion\-based method with a temporally asymmetric noise schedule inspired by Diffusion Forcing\.  Specifically, our approach models temporally evolving uncertainty and incrementally denoises states as new streaming observations arrive\. Combined with a noise\-robust imputation strategy, EgoForce progressively generates stable and coherent full\-body motion under strict causal constraints\. Experiments demonstrate that our online framework outperforms existing online and offline methods, enabling long\-horizon, full\-body motion reconstruction in challenging egocentric scenarios\.

## Ego\-HMB: Human Motion Bridging from Egocentric Images via Motion Bridge Diffusion Model

**Authors:** Gaoge Han; yongkang cheng; shaoli huang; Jing Zhang; Mingming Gong; Fakhri Karray; Tongliang Liu

**ID:** 155320 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6VSvsiTqB8>) | [PDF](<https://openreview.net/pdf?id=6VSvsiTqB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155320>)

In this paper, we move beyond the conventional setting of motion in\-betweening that relies on structured pose inputs, and instead propose a new paradigm that is conditioned on egocentric \(first\-person\) visual observations, thereby reducing the requirements on both users and upstream systems; we term this task Egocentric Human Motion Bridging\. This is motivated by realistic consumer scenarios in VR/AR and robotics, where users typically have access only to raw egocentric imagery \(e\.g\., from wearable devices\) without reliable human pose annotations or motion capture signals\. Unlike conventional motion interpolation in human pose\-conditioned settings or motion generation conditioned on a complete temporal language or image context, the egocentric perspective introduces large viewpoint variations, partial body visibility, and severe temporal ill\-posedness due to cross\-modal endpoint constraints\. To this end, we propose Ego\-HMB, a unified diffusion\-based model that internalizes both endpoint human pose estimation capability and temporally consistent 3D motion infilling ability within a single model through two training stages\. Specifically, we first introduce Egocentric\-to\-Canonical Pretraining \(pretraining stage\), where we design a hierarchical curriculum with progressively increasing temporal spans\. Then, we present a novel Motion Bridge Diffusion Training with endpoint and physics awareness as a fine\-tuning stage, where our bridge diffusion diffuse from neighboring poses to enhance temporal continuity while preserving the global constraints between the two endpoints of a 3D motion sequence\. Extensive experiments and comparisons with one\-stage baselines \(a generative model conditioned directly on two egocentric images\) and two\-stage baselines \(estimation models followed by interpolation models\) demonstrate that our approach consistently outperforms these baselines\.

## The risk of KV cache compression

**Authors:** Lukas Haverbeck; Carmen Amo Alonso; Andres Posada Moreno; Sebastian Trimpe; Marco Pavone

**ID:** 153754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IxNf37GZip>) | [PDF](<https://openreview.net/pdf?id=IxNf37GZip>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153754>)

Transformer inference on long sequences is expensive because softmax attention repeatedly reads from a large KV cache\. The prevalent approach to this bottleneck is \_KV cache compression\_, which replaces the full cache with a compact summary\. Despite its practical importance, the design of such summaries is largely driven by empirical experimentation\. On the theoretical side, existing results show that KV cache compression can be impossible in the worst case, but offer little systematic guidance for designing algorithms in regimes where accurate compression is possible\. We bridge this gap by characterizing the \_minimax risk of KV cache compression\_ in terms of the intrinsic compressibility of a cache, revealing when and how accurate compression is possible\. These results yield novel design principles for KV cache compression under causal masking, mapping efficiently to both prefill and autoregressive decoding while achieving minimax\-optimal risk\. We instantiate these principles in a practical algorithm and report promising performance on LongBench in targeted experiments\. Overall, our results provide a principled avenue for practically applicable KV compression with theoretical guarantees\.

## PocketVE: Stable and Controllable Structure\-Based Drug Design with Variance\-Exploding Diffusion

**Authors:** Peining Zhang; Jinbo Bi

**ID:** 152451 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2NCIrow1b>) | [PDF](<https://openreview.net/pdf?id=T2NCIrow1b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152451>)

Protein\-conditioned 3D molecule generation is a central challenge in structure\-based drug design, requiring a delicate balance between target compatibility, molecular properties, and physical geometry\.   While diffusion\-based approaches have shown promise, strengthening the conditioning signal can still reduce physical plausibility, and existing models remain sensitive to how pocket information is presented during training and sampling\.   We propose \*\*PocketVE\*\*, a protein\-pocket\-conditioned variance\-exploding \(VE\) diffusion framework that couples stable coordinate denoising with inference\-time conditional control\.   Specifically, PocketVE combines an EDM\-style training and sampling setup for stable 3D denoising, classifier\-free guidance for multi\-property steering without external property classifiers, and adaptive protein perturbation as a training\-time pocket regularizer\.   Evaluated on CrossDocked2020 under the GenBench3D protocol, PocketVE improves 3D\-Validity from 58\.6 to 80\.6 and reduces strain energy from 457\.4 to 127\.9 relative to the TAGMol baseline, while improving median Vina Score, QED, and SA under moderate guidance\.   A guidance\-scale study further shows that moderate guidance gives the best balance between target\-related objectives and geometric quality, whereas overly strong guidance pushes the sampler toward geometric degradation\.   Overall, the results show that target\-aware molecular generation benefits from treating geometric stability and conditional steerability as coupled design goals\.

## Low\-Dimensional Adaptation of Rectified Flow: A  Diffusion and Stochastic Localization Perspective

**Authors:** Saptarshi Roy; Alessandro Rinaldo; Purnamrita Sarkar

**ID:** 155223 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7LFHmkQrNg>) | [PDF](<https://openreview.net/pdf?id=7LFHmkQrNg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155223>)

In recent years, Rectified flow \(RF\) has gained considerable popularity largely due to its generation efficiency and state\-of\-the\-art performance\. In this paper, we investigate how well RF automatically adapts to the intrinsic low dimensionality of the support of the target distribution to accelerate sampling\. We show that, using a carefully designed choice of the time\-discretization scheme and with sufficiently accurate drift estimates, the RF sampler enjoys an iteration complexity of order $O\(k/\\varepsilon\)$ \(up to log factors\), where $\\varepsilon$ is the precision in total variation distance and $k$ is the intrinsic dimension of  the target distribution\. In addition, we show that the denoising diffusion probabilistic model \(DDPM\) procedure is equivalent to a stochastic version of RF by establishing a novel connection between these processes and stochastic localization\. Building on this connection, we further design a stochastic RF sampler that also adapts to the low\-dimensionality of the target distribution under mild requirements on the accuracy of the drift estimates, and also with a specific time schedule\. We illustrate the efficacy of newly designed time\-discretization schedules with simulations on the synthetic data and text\-to\-image \(T2I\) data experiments\.

## Tunable Latent Generative Priors for Compressed Sensing and Inverse Problems

**Authors:** Sean Gunn; Jorio Cocola; Paul Hand; Oliver De Candido; Vaggos Chatziafratis

**ID:** 149979 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lkznuQI3gj>) | [PDF](<https://openreview.net/pdf?id=lkznuQI3gj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149979>)

Latent generative models have emerged as powerful priors for solving inverse problems\. These models typically represent a class of natural signals at a single, fixed complexity, governed by the latent dimensionality\. This can be limiting: depending on the problem, a latent dimensionality that is too small may result in high representation error, while one that is too large may overfit to noise\. We develop tunable latent priors for diffusion models, normalizing flows, and variational autoencoders, leveraging nested dropout\. Across tasks including compressed sensing, inpainting, denoising, and phase retrieval, we show empirically that tunable priors consistently achieve lower reconstruction errors than fixed\-complexity baselines\. In the linear denoising setting, we derive the optimal complexity in closed form, showing how it depends on the noise level and the signal spectrum\. This work demonstrates the potential of tunable latent generative priors and motivates both the development of supporting theory and their application across a wide range of inverse problems\.

## SplineFlow: Flow Matching for Dynamical Systems with B\-Spline Interpolants

**Authors:** Santanu Rathod; Pietro Lió; Xiao Zhang

**ID:** 152305 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U3shszcCi7>) | [PDF](<https://openreview.net/pdf?id=U3shszcCi7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152305>)

Flow matching is an emerging, scalable generative framework for characterizing continuous normalizing flows with wide\-range applications\. However, state\-of\-the\-art methods are not well\-suited for modeling dynamical systems, as they construct conditional paths that are restricted to linear interpolants, a suboptimal supervision signal, which may not capture the system's underlying state evolution\. Moreover, constructing unified paths to satisfy multi\-marginal constraints across observations is challenging, since naïve higher\-order polynomials tend to be unstable and oscillatory\. To address these limitations, we introduce SplineFlow, a theoretically grounded flow matching algorithm that jointly models conditional paths across observations via B\-spline interpolation\. Specifically, SplineFlow exploits the smoothness and stability of B\-spline bases to learn the complex underlying dynamics in a structured manner while ensuring the multi\-marginal requirements are met\. Comprehensive experiments across deterministic and stochastic dynamical systems under various configurations, as well as cellular trajectory inference tasks, demonstrate that SplineFlow outperforms existing baselines, especially when the underlying dynamics are of higher degree or in irregular sampling regimes\.

## Coreset\-Induced Conditional Velocity Flow Matching

**Authors:** Xiao Wang; Zihua She; Jianxi Su

**ID:** 154272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F3OUp4tpG4>) | [PDF](<https://openreview.net/pdf?id=F3OUp4tpG4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154272>)

We propose Coreset\-Induced Conditional Velocity Flow Matching \(CCVFM\), a generative model that augments hierarchical rectified flow with a data\-informed source distribution\. Hierarchical flow matching models the full conditional velocity law in velocity space, but its inner flow is asked to transport isotropic Gaussian noise to a multimodal target velocity distribution from scratch\. Our key observation is that this inner source can be replaced by a closed\-form surrogate built from a coreset of the target\. CCVFM first compresses the target into weighted atoms using an entropic Sinkhorn coreset and lifts them to a Gaussian mixture\. The induced conditional velocity law is then a closed\-form Gaussian mixture that can be sampled without a learned neural sampler\.  A lightweight correction flow, trained from this exact surrogate source, then refines the remaining surrogate\-to\-target residual rather than learning an entire noise\-to\-data map\. We prove that the surrogate transport cost equals the target\-\-surrogate Wasserstein gap under an explicit compression assumption, whereas the noise\-source analogue has a dimension\-scale lower bound\. We further characterize the conditional second moment of the direct surrogate\-source training target and show that its source\-dependent excess is small when the surrogate conditional law is close to the true conditional velocity law in mean and covariance\.  Empirically, on MNIST, CIFAR\-10, ImageNet\-32, and CelebA\-HQ, the proposed method reaches competitive few\-step generation under matched architectures\. Codes are available at \\url\{https://anonymous\.4open\.science/r/ccvfm\-code\-11D3/\}\.

## Understanding the Interplay between Memorization and Learning in Large Language Models

**Authors:** Bishwamittra Ghosh; Soumi Das; Qinyuan Wu; Mohammad Aflah Khan; Deepak Garg; Krishna Gummadi; Evimaria Terzi

**ID:** 139043 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oG5alWKa3Z>) | [PDF](<https://openreview.net/pdf?id=oG5alWKa3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139043>)

We investigate foundational questions about the interplay between memorization and learning in large language models \(LLMs\)\. When an LLM generates a string, can we disentangle the roles of rote memorization and contextual learning? Rote memorization results in an LLM regurgitating specific details of a training string, while contextual learning leads to the generation of new strings that follow generalizable patterns of the underlying language\. Related questions of interest include: can an LLM avoid memorization when optimally learning a language?, and if not, can we design training schemes to reduce memorization and improve learning?  To address these questions, we propose contextual memorization, a new measure that precisely disentangles memorization from learning\. Using this measure, we establish that different training strings are memorized at different epochs in training, and that memorization of some training strings is unavoidable when optimally learning a language\. Finally, we propose memorization\-aware training, a scheme that dynamically down\-samples training strings based on their memorization, and in doing so, equalizes learning across strings, reduces memorization, and improves learning\. Our conclusions are supported by extensive experiments on multiple LLMs using formal languages as a controlled testbed, enabling precise language specification, exact string sampling, and elimination of data contamination; and further validated on natural languages\.

## LoRAtorio: An intrinsic approach to LoRA Skill Composition

**Authors:** Niki Foteinopoulou; Ignas Budvytis; Stephan Liwicki

**ID:** 153224 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MrZTwGqEdZ>) | [PDF](<https://openreview.net/pdf?id=MrZTwGqEdZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153224>)

Low\-Rank Adaptation \(LoRA\) has become a widely adopted technique in text\-to\-image diffusion models, enabling the personalisation of visual concepts such as characters, styles, and objects\. However, existing approaches struggle to effectively compose multiple LoRA adapters, particularly in open\-ended settings where the number and nature of required skills are not known in advance\. In this work, we present LoRAtorio, a novel train\-free framework for multi\-LoRA composition that gates each adapter using only signals already inside the denoiser, specifically, patch\-level cosine \(dis\)similarity between each LoRA's predicted noise and the base model's\. We refer to this as \`\`intrinsic'' guidance because no external parameters are introduced\. Our method is motivated by two key observations: \(1\) LoRA adapters trained on narrow domains produce unconditioned denoised outputs that diverge from the base model, and \(2\) when conditioned out of distribution, LoRA outputs show behaviour closer to the base model than when conditioned in distribution\. These patch\-level similarities are used to construct a spatially\-aware weight matrix, which guides a weighted aggregation of LoRA outputs\. To address domain drift, we further propose a modification to classifier\-free guidance that incorporates the base model's unconditional score into the composition\. We extend this formulation to a dynamic module selection setting, enabling inference\-time selection of relevant LoRA adapters from a large pool\. On the ComposLoRA benchmark, LoRAtorio achieves state\-of\-the\-art performance, with a CLIPScore that does not deteriorate as the number of composed adapters grows, surpassing the strongest prior method by up to 1\.3% in CLIPScore, and reaching a 76\.92% GPT\-4V win rate against the closest baseline\. We further show that the framework is backbone\-agnostic: the intrinsic\-similarity principle transfers to rectified\-flow architectures \(FLUX\.1\-dev\) without retraining\. Code will be made available\.

## Better Source, Better Flow: Learning Condition\-Dependent Source Distribution for Flow Matching

**Authors:** Junwan Kim; Jiho Park; Seonghu Jeon; Seungryong Kim

**ID:** 148679 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vtr94l6tFI>) | [PDF](<https://openreview.net/pdf?id=vtr94l6tFI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148679>)

Flow matching has recently emerged as a promising alternative to diffusion\-based generative models, particularly for text\-to\-image generation\. Although flow matching places no restriction on the source distribution, most existing systems still inherit a standard Gaussian from diffusion models, and the source is rarely treated as an optimization target at this scale\. Recent works have begun to revisit this choice through condition\-dependent or learned sources, yet evidence that such designs are effective in modern text\-to\-image systems—with high\-dimensional latents and tightly integrated conditioning—remains limited\. In this work, we study condition\-dependent source distributions for flow matching along three axes: \_why\_ source learning helps, through the lens of the intrinsic variance term in the flow\-matching objective; \_how\_ to make it work in modern text\-to\-image systems, where variance\-only regularization and directional source—target alignment are critical for stable end\-to\-end training; and \_when\_ it is most beneficial, by connecting source design to recent representational advances in generative modeling and identifying target representation regimes in which learning the source yields the largest gains\. Extensive experiments across multiple text\-to\-image benchmarks, backbones, and scales demonstrate that principled source design yields consistent and robust improvements—including up to $\\mathbf\{3\.01\\times\}$ faster convergence in FID and $\\mathbf\{2\.48\\times\}$ in CLIP score—and outperforms representative prior conditioned\-source and condition\-aware coupling methods\.

## Heavy\-Tailed Flow Matching via Random Clocks

**Authors:** Zhouhao Yang; Yezhen Wang; Kenji Kawaguchi; Vladimir Braverman; Haoyang Cao

**ID:** 154575 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CXUjf5ukqP>) | [PDF](<https://openreview.net/pdf?id=CXUjf5ukqP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154575>)

Heavy\-tailed data arise in many domains where rare events carry disproportionate importance, such as imbalanced image datasets, financial returns, and weather extremes\. Standard diffusion and flow\-matching models typically begin from Gaussian noise or Gaussian source distributions, which yield tractable training targets but provide a poor inductive match for heavy\-tailed data\. We propose Heavy\-Tailed Flow Matching via Random Clocks \(HTFM\), a framework that portrays heavy\-tailed sources as mixtures of clock\-conditioned Gaussian sources\. Conditioning on a given clock path, the source distribution and flow are  Gaussian; marginalizing over the clock gives a Gaussian scale mixture covering Gaussian, $\\alpha$\-stable, and Student\-t families\. To make the clock\-conditioned vector field practical, we encode the path\-valued clock using truncated logsignature features, allowing the velocity field to adapt to the realized conditional space with negligible overhead\. Empirically, on 2D imbalanced $\\alpha$\-stable mixtures, CIFAR10\-LT, and HRRR weather fields, HTFM improves mode coverage, sample quality, and tail\-statistic recovery over Gaussian flow matching and competitive heavy\-tailed baselines, while retaining the low\-NFE sampling advantage of flow matching\. Moreover, the random\-clock formulation further provides a practical tail\-control interface: by varying only the clock law or tail parameter, the same architecture can calibrate the \`\`heaviness'' of generated tails across different distribution families\.

## Reasoning with Sampling: Cutting at Decision Points

**Authors:** Felix Zhou; Anay Mehrotra; Quanquan C Liu

**ID:** 153230 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mp3rA04Yjp>) | [PDF](<https://openreview.net/pdf?id=Mp3rA04Yjp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153230>)

Frontier reasoning models are produced by post\-training base language models with reinforcement learning\. Recent work has challenged this by showing that sampling from a sharpened version of the base model's distribution, a so\-called \*power distribution,\* elicits comparable reasoning without additional training, curated datasets, or verifiers\. However, making this method practical requires \*efficiently sampling\* from the power distribution\. A sampler needs to "mix" to the power distribution which necessitates moving between modes of the target distribution; intuitively, e\.g\., trying different reasoning strategies\. The samplers proposed in prior works repeatedly select a "cut" position in the current reasoning trace uniformly at random and resamples the suffix from that position onwards\. However, reasoning traces typically contain a few consequential decisions \(e\.g\., the choice of proof strategy or algorithm\), and we observe that a uniformly chosen cut tends to rewrites local details rather than revisiting decision points\. We introduce an algorithm \(Entropy\-Cut Metropolis\-\-Hastings\) which uses the base model's next\-token entropy as a proxy to identify key decision points and re\-sample from these positions\. We empirically verify that entropy jumps are a useful proxy for decision points, and in a stylized model of reasoning prove that our method's mixing time scales with the number of decisions in a trace rather than with the number of tokens, which can be much larger\. Across MATH500, HumanEval, GPQA, and AIME on several models, our method consistently improves over baselines and RL\-trained models\.

## Reinforce Adjoint Matching: Scaling RL Post\-Training of Diffusion and Flow Models

**Authors:** Andreas Bergmeister; Stefanie Jegelka; Nikolas Nüsken; Carles Domingo i Enrich; Jakiw Pidstrigach

**ID:** 154808 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AoBtAENiPy>) | [PDF](<https://openreview.net/pdf?id=AoBtAENiPy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154808>)

Diffusion and flow\-matching models scale because pretraining simply regresses against a closed\-form target built by analytically noising clean data samples\. In many settings, only a reward function is available, scoring how desirable a generation is, so training must proceed online from a pretrained model\. Existing methods either rely on costly SDE rollouts, sometimes with reward gradients, or adopt heuristic reward\-dependent variants of the pretraining objective\. Under a stochastic optimal control formulation of KL\-regularized reward maximization, the optimal generative process tilts only the clean\-endpoint distribution and leaves the conditional noising law unchanged\. Combining this path\-space characterization with the adjoint\-matching optimality condition and a REINFORCE estimator to avoid reward gradients, we derive Reinforce Adjoint Matching \(RAM\)\. At each step, we draw a clean endpoint from the current model with any off\-the\-shelf sampler, evaluate its reward, noise it to several training states, and regress against a closed\-form, reward\-weighted target\. Like the pretraining objective, RAM is simple and scales\. On Stable Diffusion 3\.5M, RAM achieves the highest reward on composability, text rendering, and human preference\. It is much more training efficient, reaching Flow\-GRPO's peak GenEval accuracy in\~$50\\times$ fewer training steps\.

## Constrained Look\-ahead Guidance for Interference\-Aware Flow Editing

**Authors:** Doudou ZHANG; Qi CHEN

**ID:** 151736 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YT8RaVa0pT>) | [PDF](<https://openreview.net/pdf?id=YT8RaVa0pT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151736>)

Diffusion and flow models enable powerful generative modeling, but controlled editing remains challenging due to the need to balance source fidelity and edit compliance along the generative trajectory\. We propose a principled, inversion\-free framework for flow\-based image editing from a trajectory centric perspective\. Rather than relying on inversion or heuristic guidance, we introduce a one\-step look\-ahead mechanism that evaluates the effect of candidate updates on both edit and fidelity rewards estimated via denoising, and adjusts the current update based on this evaluation\. At each step, our method applies reward\-driven corrections guided by the look\-ahead evaluation under an explicit fidelity constraint, resulting in stable and coherent trajectory evolution\. This look\-ahead design mitigates gradient interference between edit and fidelity objectives by anticipating their interaction in future states, leading to improved trade\-offs\. Experiments demonstrate that the proposed approach achieves stronger semantic edits while better preserving source content compared to existing strong baselines\.

## Inference\-Time Self\-Aligned Drifting for Few\-Step Flow Matching

**Authors:** Shigui Li; JIAN XU; Wei Chen; Junmei Yang; Fei Wang; Daiguo Zhou; Delu Zeng

**ID:** 155309 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZIc3ymky8>) | [PDF](<https://openreview.net/pdf?id=6ZIc3ymky8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155309>)

Flow Matching \(FM\) provides an efficient formulation for continuous\-time generative modeling via straight optimal transport \(OT\) trajectories\. However, during accelerated sampling, these models face a fundamental variance\-fidelity dilemma\. Under few\-step deterministic Ordinary Differential Equation \(ODE\) integration, the rigid OT trajectories suffer from mean concentration, leading to severe variance collapse and the loss of high\-frequency details\. Conversely, traditional Stochastic Differential Equations \(SDEs\) inject blind, exogenous Brownian noise to recover variance, but this isotropic exploration incurs inherent numerical attrition over long integration paths, bottlenecking peak fidelity\. To resolve this, we introduce Self\-Aligned Drifting \(SADrift\) to mitigate these challenges without external priors\. SADrift is an inference\-time framework that augments flow matching inference with self\-interacting dynamics, without additional  training\.  By maintaining a momentum history of the sampling trajectory, SADrift extracts the \\emph\{kinematic residual\} to generate a deterministic extrapolative field\. This mechanism forces the trajectory to efficiently explore the local tangent space, effectively   decoupling   exploratory variance into targeted deterministic dispersion and a minimal stochastic buffer\. To safely anchor these dispersed trajectories and prevent out\-of\-distribution divergence, the residual drift is analytically integrated into a micro\-time Ornstein\-Uhlenbeck \(OU\) process, providing a mathematically sound, mean\-reverting geometric safeguard\. Requiring exactly zero additional Neural Function Evaluations \(NFE\), SADrift empowers a frozen base model to achieve a highly competitive FID of 2\.00 at just 20 NFE on ImageNet\-256\. By successfully bypassing the numerical attrition of the 250\-step SDE baseline \(FID 2\.06\), SADrift establishes a new Pareto frontier for variance injection\. Beyond image synthesis, we further validate SADrift on fast video generation paradigms \(e\.g\., TurboDiffusion with Wan2\.1\-1\.3B\), demonstrating its universal capability to unlock latent generative quality across different modalities and acceleration regimes\.

## Enhanced convergence guarantees of score\-based generative models in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity

**Authors:** Zhang Xiaoyan; Chenxu Pang; Xiaojie Wang

**ID:** 148518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xIp1jU9Y4y>) | [PDF](<https://openreview.net/pdf?id=xIp1jU9Y4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148518>)

Although score\-based generative models \(SGMs\) have achieved remarkable success in real\-world sample generation tasks, it is still far from sufficient to understand them from a mathematical perspective\. In this paper, we aim to provide enhanced convergence guarantees for two existing SGMs in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity\. More precisely, we develop a novel framework of error analysis for Euler\-Maruyama \(EM\) and Poisson midpoint \(PM\) time discretization schemes for SGMs\. Under a non\-log\-concavity condition, we show that $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon\)$ iterations suffice to approximate the target distributions in $\\epsilon$\-accuracy for the classical EM\-based SGM, considerably improving upon the existing iteration complexity $\\tilde\{\\mathcal\{O\}\}\(d/\\epsilon^2\)$\. Notably, the novel framework of error analysis enables us to establish an $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon^\{2/3\}\)$ iteration complexity for the PM\-based SGM in $\\epsilon$\-accuracy, significantly outperforming current state\-of\-the\-art Wasserstein convergence guarantees for SDE\-based diffusion samplers\.

## Masked Generative Pretraining Improves Cross\-Dataset Transfer in Pixel\-Space Diffusion

**Authors:** Shu Wei; Jiachen Lei; Jiahong Wu; Xiangxiang Chu

**ID:** 152135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VGs5oln6Kl>) | [PDF](<https://openreview.net/pdf?id=VGs5oln6Kl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152135>)

Pixel\-space diffusion models have recently seen a revival in image generation, yet their training remains less efficient than that of their latent\-space counterparts\. Existing methods reduce this cost by equipping diffusion models with external representations from clean images\. In contrast, representation consistency training, a new generative pretraining paradigm, stands out as it eliminates the need of any off\-the\-shelf semantic encoders\. It proposes pre\-training the diffusion model to simultaneously capture meaningful visual semantics from clean images while aligning them with data points across various noise levels\. Nevertheless, its training depends on contrastive learning with hand\-crafted augmentations\. This introduces strong semantic prior into the pretraining, limiting model performance when transferred to downstream target distributions that substantially deviate from the pretraining manifold\. To address this, we propose Masked Pixel\-space Generative Pretraining \(MPG\), an augmentation\-free framework based on masked image modeling\. MPG trains the encoder to recover masked image area and aligns those predictions with samples of different noise levels\.  To measure the performance of pretrained model, we further introduce NC\-CKNNA, a metric that quantifies the semantic structure consistency across different noise levels\. Under the same architectures and fine\-tuning settings, MPG consistently produces better generation performance across seven downstream datasets, while retaining competitive generation quality on ImageNet\-256\. These results suggest masked generative pretraining as a practical alternative for training pixel diffusion models\.

## Constrained Look\-ahead Guidance for Interference\-Aware Flow Editing

**Authors:** Doudou ZHANG; Qi CHEN

**ID:** 151736\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151736

[Paper](<https://openreview.net/forum?id=YT8RaVa0pT>) | [PDF](<https://openreview.net/pdf?id=YT8RaVa0pT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151736>)

Diffusion and flow models enable powerful generative modeling, but controlled editing remains challenging due to the need to balance source fidelity and edit compliance along the generative trajectory\. We propose a principled, inversion\-free framework for flow\-based image editing from a trajectory centric perspective\. Rather than relying on inversion or heuristic guidance, we introduce a one\-step look\-ahead mechanism that evaluates the effect of candidate updates on both edit and fidelity rewards estimated via denoising, and adjusts the current update based on this evaluation\. At each step, our method applies reward\-driven corrections guided by the look\-ahead evaluation under an explicit fidelity constraint, resulting in stable and coherent trajectory evolution\. This look\-ahead design mitigates gradient interference between edit and fidelity objectives by anticipating their interaction in future states, leading to improved trade\-offs\. Experiments demonstrate that the proposed approach achieves stronger semantic edits while better preserving source content compared to existing strong baselines\.

## Inference\-Time Self\-Aligned Drifting for Few\-Step Flow Matching

**Authors:** Shigui Li; JIAN XU; Wei Chen; Junmei Yang; Fei Wang; Daiguo Zhou; Delu Zeng

**ID:** 155309\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155309

[Paper](<https://openreview.net/forum?id=6ZIc3ymky8>) | [PDF](<https://openreview.net/pdf?id=6ZIc3ymky8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155309>)

Flow Matching \(FM\) provides an efficient formulation for continuous\-time generative modeling via straight optimal transport \(OT\) trajectories\. However, during accelerated sampling, these models face a fundamental variance\-fidelity dilemma\. Under few\-step deterministic Ordinary Differential Equation \(ODE\) integration, the rigid OT trajectories suffer from mean concentration, leading to severe variance collapse and the loss of high\-frequency details\. Conversely, traditional Stochastic Differential Equations \(SDEs\) inject blind, exogenous Brownian noise to recover variance, but this isotropic exploration incurs inherent numerical attrition over long integration paths, bottlenecking peak fidelity\. To resolve this, we introduce Self\-Aligned Drifting \(SADrift\) to mitigate these challenges without external priors\. SADrift is an inference\-time framework that augments flow matching inference with self\-interacting dynamics, without additional  training\.  By maintaining a momentum history of the sampling trajectory, SADrift extracts the \\emph\{kinematic residual\} to generate a deterministic extrapolative field\. This mechanism forces the trajectory to efficiently explore the local tangent space, effectively   decoupling   exploratory variance into targeted deterministic dispersion and a minimal stochastic buffer\. To safely anchor these dispersed trajectories and prevent out\-of\-distribution divergence, the residual drift is analytically integrated into a micro\-time Ornstein\-Uhlenbeck \(OU\) process, providing a mathematically sound, mean\-reverting geometric safeguard\. Requiring exactly zero additional Neural Function Evaluations \(NFE\), SADrift empowers a frozen base model to achieve a highly competitive FID of 2\.00 at just 20 NFE on ImageNet\-256\. By successfully bypassing the numerical attrition of the 250\-step SDE baseline \(FID 2\.06\), SADrift establishes a new Pareto frontier for variance injection\. Beyond image synthesis, we further validate SADrift on fast video generation paradigms \(e\.g\., TurboDiffusion with Wan2\.1\-1\.3B\), demonstrating its universal capability to unlock latent generative quality across different modalities and acceleration regimes\.

## Enhanced convergence guarantees of score\-based generative models in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity

**Authors:** Zhang Xiaoyan; Chenxu Pang; Xiaojie Wang

**ID:** 148518\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148518

[Paper](<https://openreview.net/forum?id=xIp1jU9Y4y>) | [PDF](<https://openreview.net/pdf?id=xIp1jU9Y4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148518>)

Although score\-based generative models \(SGMs\) have achieved remarkable success in real\-world sample generation tasks, it is still far from sufficient to understand them from a mathematical perspective\. In this paper, we aim to provide enhanced convergence guarantees for two existing SGMs in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity\. More precisely, we develop a novel framework of error analysis for Euler\-Maruyama \(EM\) and Poisson midpoint \(PM\) time discretization schemes for SGMs\. Under a non\-log\-concavity condition, we show that $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon\)$ iterations suffice to approximate the target distributions in $\\epsilon$\-accuracy for the classical EM\-based SGM, considerably improving upon the existing iteration complexity $\\tilde\{\\mathcal\{O\}\}\(d/\\epsilon^2\)$\. Notably, the novel framework of error analysis enables us to establish an $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon^\{2/3\}\)$ iteration complexity for the PM\-based SGM in $\\epsilon$\-accuracy, significantly outperforming current state\-of\-the\-art Wasserstein convergence guarantees for SDE\-based diffusion samplers\.

## Masked Generative Pretraining Improves Cross\-Dataset Transfer in Pixel\-Space Diffusion

**Authors:** Shu Wei; Jiachen Lei; Jiahong Wu; Xiangxiang Chu

**ID:** 152135\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152135

[Paper](<https://openreview.net/forum?id=VGs5oln6Kl>) | [PDF](<https://openreview.net/pdf?id=VGs5oln6Kl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152135>)

Pixel\-space diffusion models have recently seen a revival in image generation, yet their training remains less efficient than that of their latent\-space counterparts\. Existing methods reduce this cost by equipping diffusion models with external representations from clean images\. In contrast, representation consistency training, a new generative pretraining paradigm, stands out as it eliminates the need of any off\-the\-shelf semantic encoders\. It proposes pre\-training the diffusion model to simultaneously capture meaningful visual semantics from clean images while aligning them with data points across various noise levels\. Nevertheless, its training depends on contrastive learning with hand\-crafted augmentations\. This introduces strong semantic prior into the pretraining, limiting model performance when transferred to downstream target distributions that substantially deviate from the pretraining manifold\. To address this, we propose Masked Pixel\-space Generative Pretraining \(MPG\), an augmentation\-free framework based on masked image modeling\. MPG trains the encoder to recover masked image area and aligns those predictions with samples of different noise levels\.  To measure the performance of pretrained model, we further introduce NC\-CKNNA, a metric that quantifies the semantic structure consistency across different noise levels\. Under the same architectures and fine\-tuning settings, MPG consistently produces better generation performance across seven downstream datasets, while retaining competitive generation quality on ImageNet\-256\. These results suggest masked generative pretraining as a practical alternative for training pixel diffusion models\.

## Quantifying and Optimizing Path Uncertainty in Masked Diffusion Models

**Authors:** Ziyu Chen; Xinbei Jiang; PENG SUN; Tao Lin

**ID:** 150361\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150361

[Paper](<https://openreview.net/forum?id=idhb10oUCK>) | [PDF](<https://openreview.net/pdf?id=idhb10oUCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150361>)

Masked Diffusion Models \(MDMs\) offer flexible, non\-autoregressive generation, but this freedom introduces a challenge: final output quality is highly sensitive to the decoding order\. We are the first to formalize this issue, attributing the variability in output quality to the cumulative predictive uncertainty along a generative path\. To quantify this uncertainty, we introduce Denoising Entropy, a computable metric that serves as an internal signal for evaluating generative process\. Leveraging this metric, we propose two algorithms designed to optimize the decoding path: a post\-hoc selection method and a real\-time guidance strategy\. Experiments demonstrate that our entropy\-guided methods significantly improve generation quality, substantially boosting accuracy on challenging reasoning, planning, and code benchmarks\. Our work establishes Denoising Entropy as a principled tool for understanding and controlling generation, effectively turning the uncertainty in MDMs from a liability into a key advantage for discovering high\-quality solutions\.

## Enabling Denoising Score Matching Type Training for Manifold Diffusion Model via Momentum and Splitting

**Authors:** Lingkai Kong; Yuchen Zhu; Molei Tao

**ID:** 152504\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152504

[Paper](<https://openreview.net/forum?id=SebY0YimhJ>) | [PDF](<https://openreview.net/pdf?id=SebY0YimhJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152504>)

Denoising score matching \(DSM\) is the cornerstone of scalable diffusion model training\. However, DSM becomes inapplicable on curved manifolds: the curved geometry makes the forward diffusion process nonlinear and the transition kernel is no longer tractable\. Existing approaches therefore revert to implicit score matching \(ISM\) with expensive Brownian simulation, approximate the intractable heat kernel, or bypass the transition kernel altogether via flow matching with the logarithm map, each incurring significant computational cost or approximation error on general manifolds\. We propose \\emph\{splitting diffusion\}, a new framework that restores DSM\-like training on general Riemannian manifolds by replacing the intractable Brownian forward process with a splitting scheme that alternates two steps: \(1\) an Ornstein\-Uhlenbeck velocity update in the tangent space, whose transition kernel has a closed\-form solution; \(2\) a deterministic geodesic transport step\. This splitting yields a fully tractable transition kernel locally, enabling DSM\-style training while requiring only the exponential map as a geometric oracle\. The effectiveness of splitting diffusion is demonstrated on complicated manifolds and high\-dimensional data\.

## Prior as Geometry, Not Generator: Weak\-Diffusion Test\-Time Reconstruction for Dynamic MRI

**Authors:** Mengzhe Du; Congcong Liu; Baoqing Li; Jinglong Tao; Wenwu He; Zhuo\-Xu Cui

**ID:** 152230\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152230

[Paper](<https://openreview.net/forum?id=UbC0NrVCfU>) | [PDF](<https://openreview.net/pdf?id=UbC0NrVCfU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152230>)

Dynamic MRI reconstruction from highly undersampled k\-space is a severely ill\-posed inverse problem that requires strong measurement consistency, fine spatial recovery, and coherent temporal dynamics\. Diffusion priors provide useful population\-level regularization, but task\-matched spatiotemporal diffusion models are costly to train, while generic pretrained priors may be mismatched to protocols, vendors, or anatomies, leading to hallucination or over\-smoothing\. Untrained test\-time priors such as Time\-Dependent Deep Image Prior \(TD\-DIP\) adapt to each scan and naturally couple with data consistency, but can drift toward aliasing artifacts and overfit noise\. We propose Geometry\-Gated TD\-DIP for this weak\-diffusion regime, where diffusion is used as a local geometric reference rather than a generative driver\. Each TD\-DIP update is decomposed into a diffusion\-consistent tangent component and a measurement\-supported orthogonal innovation component\. A self\-calibrated gate adaptively regulates the innovation to counter prior mismatch while suppressing noise amplification\. We further provide a mismatch\-aware analysis showing descent of a local posterior surrogate under explicit conditions\. Experiments on cine MRI show consistent gains over diffusion\-only, TD\-DIP\-only, and additive hybrid baselines, especially at high acceleration and under out\-of\-distribution diffusion priors\.

## Reflected Schrödinger Bridge Matching

**Authors:** Marcus Häggbom; Viktor Nilsson; Pierre Nyquist; Joakim Andén

**ID:** 153052\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153052

[Paper](<https://openreview.net/forum?id=OO3amJIfRg>) | [PDF](<https://openreview.net/pdf?id=OO3amJIfRg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153052>)

Recent advances in generative modeling have enabled the efficient computation of Schrödinger bridges \(SB\) in high\-dimensional settings by leveraging partially simulation\-free training methods inspired by flow matching\. However, these have not covered SBs with reflecting dynamics, a useful model choice with built\-in guarantees that generated samples stay in the data domain\. Existing alternatives for reflected SBs instead rely on more complex training based on forward\-\-backward SDE theory, requiring expensive higher\-order derivatives and sampling entire paths during training\. In this article, we introduce a partially simulation\-free framework that allows reflected SBs to be trained similarly to flow matching, using a new sampling method and regression target\. We demonstrate our results by coupling pairs of well\-known high\-dimensional image datasets\. Using reflected dynamics incurs negligible additional wall\-clock time during both training and inference while maintaining or slightly improving generative performance\.

## Robust Inference\-Time Steering of Protein Diffusion Models via Embedding Optimization

**Authors:** Minhuan Li; Jiequn Han; Pilar Cossio; Luhuan Wu

**ID:** 154445\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154445

[Paper](<https://openreview.net/forum?id=DUpxIDDWMK>) | [PDF](<https://openreview.net/pdf?id=DUpxIDDWMK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154445>)

A core challenge in structural biophysics is generating biomolecular conformations that are both physically plausible and consistent with experimental measurements\. While sequence\-to\-structure diffusion models provide powerful priors, posterior sampling methods steer generation by perturbing atomic coordinates with gradients from experimental likelihoods\. However, when the target lies in a low\-density region of the prior, these methods require aggressive upweighting of the likelihood that can destabilize sampling and be sensitive to hyperparameters\. We propose EmbedOpt, an inference\-time steering framework that introduces an orthogonal optimization axis: rather than performing posterior sampling under a fixed prior, EmbedOpt directly optimizes the prior by updating the model's conditional embedding\. This embedding space encodes rich coevolutionary signals, so optimizing it shifts the structural prior to align with experimental constraints\. Empirically, EmbedOpt matches coordinate\-based posterior sampling baselines on sparse distance constraints and outperforms them on cryo\-electron microscopy map fitting, including real, noisy experimental ones\. Furthermore, EmbedOpt's smooth optimization behavior yields robustness to hyperparameters spanning two orders of magnitude and enables comparable performance with fewer diffusion steps\.

## A Theory on Flow Matching with Neural Networks

**Authors:** Yihan He; Qishuo Yin; Yuan Cao; Jianqing Fan; Han Liu

**ID:** 152773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QTCtJIao9O>) | [PDF](<https://openreview.net/pdf?id=QTCtJIao9O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152773>)

In this work, we develop theoretical foundation for flow matching with neural\-network–parameterized conditional velocity fields\. We establish convergence guarantees for gradient descent in the over\-parameterized 2\-layered ReLU neural network regime\. We derive generalization bounds for the conditional velocity\-field matching objective\.  Building on these results, we provide Wasserstein\-distance guarantees for the samples generated by the induced flow\. Our analysis is based on generalization bound for multi\-task representation learning with unbounded losses, which may be of independent interest beyond flow\-based generative modeling\. These theoretical results are validated through extensive experiments on both synthetic and real\-world image benchmarks\.

## Blocked Gibbs meets Diffusion Transformers: Unsupervised Learning for Constraint Optimization

**Authors:** Yudong Will Xu; Wenhao Li; Xiaoyu Wang; Scott Sanner; Elias Khalil

**ID:** 148271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z5oDNb2lwJ>) | [PDF](<https://openreview.net/pdf?id=z5oDNb2lwJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148271>)

Diffusion models have shown promise in learning to solve constraint optimization problems\. However, they are mostly restricted to problems with binary variables and rely on graph neural networks, hindering their application to a broader range of problems such as those with general discrete variables or constraint structures that necessitate global rather than local reasoning\. We investigate the use of Diffusion Transformers to address the aforementioned limitations\. A naive implementation performs poorly due to a fundamental mismatch between the standard diffusion process and constraint solving: while the former applies \*small, incremental denoising\* across \*all\* variables, the latter requires \*substantially altering specific subsets of variables\* to attain feasibility or optimality\. Our method, \*\*Blo\*\*cked \*\*G\*\*ibbs \*\*Di\*\*ffusion \*\*T\*\*ransformer \(BloGDiT\), is the first to address this limitation by replacing standard joint Gaussian denoising with Blocked Gaussian denoising\.  BloGDiT uses iterative block resampling and anneals the block size over time to facilitate large, targeted edits within a block of variables\.  Across Sudoku, Graph Coloring, Maximum Independent Set, and MaxCut, BloGDiT matches or outperforms existing methods, demonstrating that blocked Gibbs\-style diffusion provides a highly effective inductive bias for Transformer\-based constraint satisfaction and optimization\.

## Likelihood\-Free Generative Policy Optimization

**Authors:** Maojiang Su; Qijie Zhu; Shuyang Yu; Yu Xiao; Minshuo Chen; Zhaoran Wang; Han Liu

**ID:** 151534 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZxbHSaoFK1>) | [PDF](<https://openreview.net/pdf?id=ZxbHSaoFK1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151534>)

Diffusion and flow policies have become promising tools for robotic and sequential decision\-making systems\. Many stable and effective policy optimization methods require evaluating the likelihood or likelihood ratio of an action under the current policy\.  However, these quantities are generally intractable for diffusion and flow models, which prevents widely used policy update algorithms from being applied to generative policies\.  We propose Likelihood\-Free Generative Policy Optimization \(LFGPO\), a framework that avoids exact likelihood evaluation by separating policy improvement from generative model training\.  In the first stage, LFGPO uses a lightweight neural network to represent the likelihood ratio that carries the policy improvement signal\.  In the second stage, it distills the ratio into diffusion or flow policies through a weighted score\- or velocity\-matching objective\. Our framework incorporates a large family of Reinforcement Learning \(RL\) algorithms, including PPO and GRPO, to be applied to diffusion and flow policy optimization\.  We show that the solution to the weighted score matching objective solves a stochastic optimal control problem\.  Across MuJoCo continuous\-control benchmarks, LFGPO delivers strong and stable improvements over competitive diffusion\- and flow\-policy baselines, showing a practical route to RL fine\-tuning for generative policies\.

## Flow Matching Reinforcement Learning via SDE Inference

**Authors:** Maojiang Su; Tsung\-En Lin; Jerry Yao\-Chieh Hu; Guo Ye; Haoran Lu; Shang Wu; Zhaoran Wang; Han Liu

**ID:** 153016 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ObfkKSqYkf>) | [PDF](<https://openreview.net/pdf?id=ObfkKSqYkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153016>)

We develop a unified framework for flow\-based reinforcement learning \(RL\) grounded in diffusion–flow duality and establish its theoretical foundations\. The frameworks enables RL for deterministic flow matching inference by introducing diffusion stochastic inference dynamics that supports exploration while admitting deterministic deployment\. We show that our frameworks subsumes several existing flow\-based RL methods as special cases and inspire effective now methods\. Then we provide theoretical foundations for the frameworks by establishing the correctness and performance transfer guarantee\. Specifically, we prove that the policies optimized under stochastic dynamics close to deterministic dynamics at deployment when the pretrained model is well\-trained\. Moreover, we show that the policy improvement achieved under training\-time SDE inference transfers to deployment\-time ODE inference\. Finally, we conduct experiments to validate our theoretical results\.

## Contextual Flow Matching for High\-quality Visual Content Generation

**Authors:** Bozhi Luan; Hong Chen; Jianmin Bao; Liang Hou; Yuan Gao; Xin Tao; Pengfei Wan; Wengang Zhou; Houqiang Li

**ID:** 156013 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1AXA4TdiEG>) | [PDF](<https://openreview.net/pdf?id=1AXA4TdiEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156013>)

Standard Flow Matching \(FM\) models typically employ a pointwise loss function, effectively assuming that the velocity vector at each spatial position is pointwise decomposed supervision given the conditioning\. We argue that this Pointwise Independence Assumption is suboptimal for image generation, where strong local correlations exist across space\. Neglecting these dependencies leads to artifacts such as structural inconsistency\. In this paper, we introduce Contextual Flow Matching \(CFM\), a generalized framework that enforces consistency not just on individual pixels, but on the contextual relationships within the velocity field\. We formulate the training objective using a set of generalized Context Operators\-\-\-akin to convolution kernels\-\-\-that abstract relationship constraints\. Specifically, we instantiate a Differential Operator to capture high\-frequency motion dynamics and an Aggregate Operator to stabilize low\-frequency structural evolution\. Extensive experiments on ImageNet demonstrate that CFM significantly accelerates convergence and enhances generation fidelity by explicitly modeling spatial dependencies\.

## Trustworthy and Efficient Map\-free LiDAR Localization via Scan\-Pose Alignment and Flow Matching

**Authors:** Haoze Chang; Dunqiang Liu; Minghang Zhu; Wen Li; Sheng Ao; Siqi Shen; Chenglu Wen; Cheng Wang

**ID:** 151724 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ya8vDuIkP4>) | [PDF](<https://openreview.net/pdf?id=Ya8vDuIkP4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151724>)

Reliable map\-free LiDAR relocalization requires not only accurate and efficient pose estimation but also trustworthy confidence estimation for detecting localization failures\. However, estimating reliability to ensure trustworthy LiDAR relocalization remains largely unexplored\. Also, existing LiDAR pose regression methods suffer from accuracy and efficiency trade\-off\. To address this limitation, we propose \\textbf\{SPAR\}, a model\-agnostic confidence estimator that reformulates localization reliability as scan\-pose alignment\. Given a query scan and a predicted pose, SPAR measures their compatibility in a learned embedding space and explicitly optimizes confidence scores to correlate scan with pose\. In addition, we introduce \\textbf\{VeLoc\}, an efficient and accurate pose regressor based on flow\-matching for efficient pose refinement\. Experiments on the Oxford and NCLT datasets demonstrate that the proposed framework achieves a favorable balance between efficiency and accuracy for LiDAR relocalization while enabling reliable localization failure detection across different localization backbones\.

## Skill\-Adaptive Noise Scheduling for Diffusion Policies

**Authors:** Woo Kyung Kim; Gwangpyo Yoo; Eunyoung Park; Honguk Woo

**ID:** 150596 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gy1X23GoMB>) | [PDF](<https://openreview.net/pdf?id=gy1X23GoMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150596>)

Recent advances in diffusion policies have demonstrated strong effectiveness when integrated into hierarchical skill\-based learning frameworks, leveraging offline data to capture multimodal and temporally abstracted behaviors\. However, prior approaches have rarely considered the diffusion process as a learnable component, adopting fixed noise schedules applied uniformly across skills, regardless of their distinct behavioral contexts\. Such a design fundamentally limits the achievable performance, particularly for contact\-rich and dexterous manipulation tasks where different skills exhibit distinct couplings between action dimensions\. In this paper, we present a skill\-adaptive noise diffusion framework \(SaND\) which introduces a learnable, skill\-conditioned noise schedule that modulates the diffusion process per action dimension, adapting the noising dynamics to each skill\. To prevent the learned noise schedule from collapsing into trivial solutions, we employ an auxiliary inverse objective that reconstructs the skill embedding from the Legendre coefficients of the derivative of the noise schedule, encouraging the schedules to remain skill\-discriminative\. This formulation naturally enables adaptive control over the denoising steps for each skill, where noise schedules are clustered in the Legendre coefficient space, and the appropriate number of denoising steps is determined at the point where reconstruction error abruptly increases\. At inference, we identify each skill embedding's cluster from its noise schedule and apply the corresponding number of denoising steps, dedicating more compute to skills requiring fine\-grained control and less to simpler ones\. Through experiments, we demonstrate that SaND outperforms existing diffusion\-based skill learning and planning baselines on contact\-rich and dexterous manipulation tasks, achieving higher success rates while requiring fewer denoising steps\.

## Christoffel\-DPS: Optimal sensor placement in diffusion posterior sampling for arbitrary distributions

**Authors:** James Rowbottom; Zi Yuan \(Nick\) Huang; Carola\-Bibiane Schönlieb; Ben Adcock

**ID:** 148240 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zMIv8bU50c>) | [PDF](<https://openreview.net/pdf?id=zMIv8bU50c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148240>)

State estimation is a critical task in scientific, engineering and control applications\. Since the reliability of reconstructions can depend on the number and position of sensors, Optimal sensor placement \(OSP\) is essential in scenarios where measurements are sparse and expensive\. However, classical OSP approaches rely on Gaussian assumptions and are consequently unable to account for complex distributions encountered in many real\-world systems\. Generative\-model\-based reconstruction using sensor guided diffusion posterior sampling \(DPS\) has emerged as a promising technique for reconstructing states from highly complex distributions\. Existing approaches to sensor selection either choose an unrealistically large number of sensors or employ strategies that emulate classical OSP methods\. This results in a mismatch, wherein new models are paired with classical OSP tools, and motivates the need for fundamentally new ideas towards OSP that match the recent advances made in powerful recovery models\. In this work, we introduce a distribution\-free sensor placement framework based on the Christoffel function\. Our main theoretical contributions introduce a mathematical formulation of optimal sampling and recovery guarantees for posterior sampling with arbitrary sensors and signal distributions\. We use these to derive a new OSP strategy with non\-asymptotic bounds on the number of sensors needed for recovery\. Building on this, we develop \\textbf\{Christoffel\-DPS\}, with both offline and online variants, that implements nonparametric realizations of Christoffel sampling for generative models\. As we show, Christoffel\-DPS outperforms Gaussian OSP baselines and existing generative\-model\-based placement methods, validating that distribution\-free sensing is both theoretically principled and practically superior\. The framework is model agnostic, and we demonstrate its application to a range of unconditional DPS and flow matching models on structurally non\-Gaussian benchmarks, showing the efficacy of Christoffel\-DPS in low sensor budget regimes\.

## Class\-Mixed Diffusion Augmentation for Shortcut\-Breaking in Continual Learning

**Authors:** Abhinab Acharya; Dayou Yu; Qi Yu; Xumin Liu

**ID:** 154098 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GGcrbkuKF6>) | [PDF](<https://openreview.net/pdf?id=GGcrbkuKF6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154098>)

Zero\-shot pre\-trained diffusion models can provide a training\-free source of synthetic image generation for Exemplar\-Free Class Incremental Learning \(EFCIL\)\. However, same\-class generation is limited by the distribution mismatch with real data\. Parameter\-allocation\-based EFCIL can minimize the forgetting in model parameters, yet the performance degrades because task\-id prediction fails when task\-specific feature extractors overcompress and converge to shortcut\-dominant representations\. We propose \\emph\{Class\-Mixed Diffusion Augmentation\} \(CMDA\) that uses diffusion models not only as past\-task data generators but also as controlled generators that challenge the shortcut reliance\. We sample candidate tokens from the vocabulary and select \\emph\{shortcut\-breaking\} tokens via classifier\-guided filtering, then treat the selected tokens as auxiliary classes during training\. We provide theoretical analysis linking shortcut sharing to an intrinsic lower bound on task\-id error and show that minimum\-CE selection recovers shortcut\-breaking tokens\. Experiments on Split\-CIFAR100 and Split\-ImageNet show consistent gains over EFCIL baselines, with modest overhead over vanilla diffusion augmentation and far lower cost than diffusion fine\-tuning or gradient\-guided sampling\.

## Temperature Guidance For Robust Reward Conditioning In Diffusion Planning

**Authors:** Johannes V Busch; Roberto Calandra

**ID:** 152932 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PHxRfWn3K5>) | [PDF](<https://openreview.net/pdf?id=PHxRfWn3K5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152932>)

Diffusion planners enable long\-horizon planning through a generative process over full trajectories, mitigating compounding errors of autoregressive methods while handling multimodal futures\. Reward conditioning via classifier\-free guidance \(CFG\) yields high\-performing plans but is brittle with respect to per\-task hyperparameter choices, limiting its scalability\. Our analysis reveals that guidance performance hinges on careful adaptation to the data manifold and reward distribution, contributing to CFG's hyperparameter fragility\. We propose temperature\-guided diffusion planning \(TGDP\), which adapts CFG to self\-calibrate to these characteristics through temperature\-conditional sample reweighting during training and adaptive guidance at inference\. TGDP mitigates the hyperparameter fragility of CFG and matches state\-of\-the\-art performance across standard benchmarks without per\-task tuning, thus enabling more robust and practical diffusion\-based planning\.

## Frozen Memory Is Not Enough: Rethinking External Memory as Extraction

**Authors:** Mingyuan Li; Guangsheng Yu; Xu Wang; Shaoxiong Ji

**ID:** 150946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e7xyZQCjBR>) | [PDF](<https://openreview.net/pdf?id=e7xyZQCjBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150946>)

Methods for improving knowledge use in large language models typically fall into two regimes\. Non\-parametric retrieval offers flexible access to external knowledge, but adds retrieval latency, context overhead, and only shallow integration with the backbone\. Parametric adaptation is efficient at inference time, but entangles knowledge with model weights and can be hard to update, audit, or transfer\. Engram\-style hashed memory occupies a middle regime: it stores learned information in an external, addressable table, yet consumes that table through a small learned reader\. This raises a basic question: when such a memory is moved across backbones, what matters more, the frozen memory itself or the target\-side reader? We study this question through cross\-model frozen\-memory extraction, where a memory trained on a source model is frozen and attached to a different target model while only a lightweight reader is trained\. Across architectures, tokenizers, and model scales, frozen memory improves every source\-\-target pair in a $3 \\times 3$ transfer matrix, with up to 15\.7\\% relative perplexity reduction\. Ablations show that learned memory content and correct addressing both matter, but stronger readers account for much of the transfer gain; on OpenQA, a dual\-layer 4\-branch reader nearly closes the gap between same\-model and cross\-model transfer and reaches 38\.78 average\. These results position Engram as a hybrid external memory and suggest that, in this regime, progress depends as much on reader design as on storage itself\. Code and reproducible setups are available at https://anonymous\.4open\.science/r/Engram\_Extractor/README\.md\. \.

## ODDR: One\-Step Deshadow Diffusion via Reward Guidance

**Authors:** Junseong Shin; Kijun Kim; Minseong Kim; Dongjin Kim; Tae Hyun Kim

**ID:** 153865 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IAfKoeRc25>) | [PDF](<https://openreview.net/pdf?id=IAfKoeRc25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153865>)

Recent advances in deep learning for shadow removal have significantly enhanced image quality and realism\. However, most approaches rely on real\-world paired datasets, which are costly to collect and often limited in scene diversity, leading to limited generalization\. To address these limitations, we propose One\-step Deshadow Diffusion via Reward guidance \(ODDR\), a new framework that achieves efficient and high\-fidelity shadow removal without relying on real\-world paired supervision\. Our method begins with One\-step Deshadow Diffusion \(ODD\), a baseline model trained on synthetic shadow data for efficient one\-step shadow\-free reconstruction\. We further adapt ODD into ODDR using ShadowReward\. In contrast to traditional, annotation\-heavy approaches, ShadowReward is the first reward model for shadow removal trained entirely without human annotation\. It learns to mimic human perceptual judgments by ranking synthetically generated images with controlled degradations, such as texture distortion and boundary artifacts\. This reward\-guided fine\-tuning enables ODDR to close the synthetic\-to\-real domain gap\. Extensive experiments show that ODD achieves strong performance without relying on real\-world paired supervision, and ODDR further improves the results and achieves performance competitive with methods trained on real\-world paired data, while maintaining higher computational efficiency as a single step model\.

## FLUX: Geometry\-Aware Longitudinal Flow Matching with Mixture of Experts

**Authors:** Josue Ortega Caro; Yongxu Zhang; Hannah M Batchelor; Sizhuang He; Jessica Cardin; Shreya Saxena

**ID:** 154945 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9kNHWMRtUj>) | [PDF](<https://openreview.net/pdf?id=9kNHWMRtUj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154945>)

Many biological systems evolve through continuous local dynamics while switching between latent regimes defined by learning, stimulus context, internal state, or developmental stage\. These processes are often observed only as unpaired longitudinal snapshots: the same cells, neurons, or animals are not tracked as matched trajectories, even though population states are sampled across successive stages\. This creates two coupled challenges\. First, trajectories must respect curved low\-dimensional manifolds embedded in high\-dimensional biological measurements\. Second, the model must identify when the transport mechanism itself changes\. We introduce FLUX \(FLow matching for Unpaired longitudinal data with miXture\-of\-experts\), a geometry\-aware longitudinal flow\-matching framework for joint transport modeling and unsupervised regime discovery\. FLUX learns a data\-dependent metric from pooled labeled and unlabeled observations, uses that metric to construct geometry\-aware conditional paths between adjacent marginals, and decomposes the resulting velocity field into sparse expert vector fields selected by a Straight\-Through Gumbel\-Softmax router\. Across manifold controls, a regime\-switching Lorenz system, widefield cortical calcium imaging during associative learning, and embryoid body single\-cell differentiation, FLUX reconstructs longitudinal transport while recovering interpretable regime structure\. In neural data, the router separates early/intermediate training from late training, coinciding with the behavioral divergence of CS\+ and CS\- lick indices\. In embryoid body differentiation, FLUX separates expression\-evolution regimes associated with pluripotent and more differentiated cell populations\. Ablations show that mixture\-of\-experts routing alone is insufficient: FLUX without geometric learning can fit local transport but fails or weakens regime discovery when regimes are encoded in local dynamics\. These results suggest that geometry\-aware velocity decomposition provides a general strategy for discovering latent biological state transitions from unpaired longitudinal snapshots\.

## Generalized Robust Adaptive\-Bandwidth Multi\-View Manifold Learning in High Dimensions with Noise

**Authors:** Xiucai Ding; Chao Shen; Hau\-Tieng Wu

**ID:** 156634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156634>)

Multiview datasets are common in scientific and engineering applications, yet existing fusion methods offer limited theoretical guarantees, particularly in the presence of heterogeneous and high\-dimensional noise\. We propose Generalized Robust Adaptive\-Bandwidth Multiview Diffusion Maps \(GRAB\-MDM\), a new kernel\-based diffusion geometry framework for integrating multiple noisy data sources\. The key innovation of GRAB\-MDM is a view\-dependent bandwidth selection strategy that adapts to the geometry and noise level of each view, enabling a stable and principled construction of multiview diffusion operators\. Under a common\-manifold model, we establish asymptotic convergence results and show that the adaptive bandwidths lead to provably robust recovery of the shared intrinsic structure, even when noise levels and sensor dimensions differ across views\. Numerical experiments demonstrate that GRAB\-MDM significantly improves robustness and embedding quality compared with fixed\-bandwidth and equal\-bandwidth baselines, and usually outperform existing algorithms\. The proposed framework offers a practical and theoretically grounded solution for multiview sensor fusion in high\-dimensional noisy environments\.

## Feature Information Dynamics in Diffusion

**Authors:** Jia\-Shu Pan; Tao Zhang; Yufei Huang; Yanjun Sheng; Tailin Wu

**ID:** 152004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WDfD9WTJeJ>) | [PDF](<https://openreview.net/pdf?id=WDfD9WTJeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152004>)

Diffusion models generate data through a continuum of denoising problems, and are widely observed to reveal coarse structure before fine detail\. Yet, this intuition is mostly empirical and qualitative\. We introduce \\emph\{feature information dynamics\}, an information\-theoretic framework for localizing when a feature is generated during diffusion\. Using the I\-MMSE identity, we connect the rate of feature mutual information change to a gap between optimal unconditional and feature\-conditional denoising losses, yielding practical estimators for feature information density\. We further develop a chained decomposition that separates shared from incremental information in a feature hierarchy\. We use this framework first to quantitatively confirm spectral autoregression in pixel diffusion, and then to extend the analysis beyond frequency: under a class$\\to$mask$\\to$Canny conditioning chain, the per\-feature information densities differ across pixel, SDVAE, VAVAE, and RAE, exposing fundamental differences between these representations\.

## Generalized Wasserstein Flow Matching: Transport Plans, Everywhere, All at Once

**Authors:** Moritz Piening; Richard Duong; Gabriele Steidl

**ID:** 152114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VRSgjWCWsh>) | [PDF](<https://openreview.net/pdf?id=VRSgjWCWsh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152114>)

Flow matching has recently emerged as a flexible and efficient framework for generative modelling by learning deterministic transport dynamics between probability measures\. In this work, we extend flow matching to the space of probability measures over probability measures, introducing a Wasserstein\-on\-Wasserstein \(WoW\) formulation\. Leveraging the nested Wasserstein geometry, we show that measures over transport plans naturally induce velocity fields that realize metameasure flows\. This yields a principled generalization of Wasserstein flow matching via coupled outer and inner transport plans\. To address the substantial computational cost of WoW transport, we propose scalable approximations based on sliced and linear Wasserstein distances, enabling efficient training while promoting numerically stable, near\-straight trajectories\. Our framework unifies and extends existing approaches to point cloud and set generation, providing a practical and theoretically grounded method for generative modelling in WoW spaces\.

## Flow Matching for Count Data

**Authors:** Ganchao Wei; John Pearson

**ID:** 155470 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5N0iGXXzEJ>) | [PDF](<https://openreview.net/pdf?id=5N0iGXXzEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155470>)

High\-dimensional count data arise in applications such as single\-cell RNA sequencing and neural spike trains, where mapping between distributions across successive batches or time points form critical components of data analysis\. The recent success of diffusion\- and flow\-based deep generative models for images, video, and text motivates extending these ideas to count\-valued settings, but many existing methods either treat each count as a categorical state or transform counts into a continuous space, neither of which is natural or efficient when the count range is large\. We propose count\-FM, a flow\-matching framework for count data based on a continuous\-time birth\-death process with local unit jumps\. Count\-FM learns marginal transitions efficiently in count space through simulation\-free training of conditional transition rates, allowing transport between arbitrary count\-distributed source and target populations\. In simulation, count\-FM achieves better sample quality than representative baselines while using substantially fewer parameters\. We further apply count\-FM to scRNA\-seq and neural spike\-train data for unconditional generation, transport, and conditional generation\. Across these tasks, count\-FM yields improved sample quality, greater modeling efficiency, and interpretable transport paths\.

## Contrastive Distribution Matching for Amortized Sequential Monte Carlo in Discrete Diffusion

**Authors:** Jaihoon Kim; Taehoon Yoon; Prin Phunyaphibarn; Seungjun Kim; Morteza Mardani; Minhyuk Sung

**ID:** 150808 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fGFv81kGOt>) | [PDF](<https://openreview.net/pdf?id=fGFv81kGOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150808>)

Discrete diffusion models have emerged as powerful frameworks for generating structured categorical data\. However, efficiently sampling from reward\-tilted distributions remains a fundamental challenge\. While Twisted Sequential Monte Carlo \(SMC\) offers asymptotic exactness for this task, estimating the optimal twist function in discrete state spaces necessitates costly Monte Carlo approximations, resulting a severe computational bottleneck at inference\. To overcome this limitation, we introduce Contrastive Distribution Matching \(CDM\), a novel framework that amortizes the cost of SMC inference by learning a parameterized twist function via positive and negative samples\. For efficient training, we reformulate the gradient estimator to leverage the closed\-form forward kernels of discrete diffusion models\. In practice, evaluating our learned twist function incurs less than 5% additional computational overhead compared to base model inference\. Through extensive empirical evaluations, we demonstrate that CDM consistently outperforms existing baselines under matched wall\-clock time\. We validate the effectiveness and versatility of our approach across a diverse range of applications, including toxic text generation, regulatory DNA sequence design, protein designability, and diffusion large language model alignment\.

## Not All Slots Are Equal: Non\-Co\-Progressive Markov Bridge for Bundle Construction

**Authors:** Rongchao Zhang; Haodong Jing; Siheng Wang; Zhengtao Yao; Yajun Liu

**ID:** 154810 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AmxJuunsX7>) | [PDF](<https://openreview.net/pdf?id=AmxJuunsX7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154810>)

Bundle construction \(BC\) is a critical technique in recommender systems research, which aims to select a coherent subset of items from large\-scale item catalogs to either construct a complete bundle from scratch or complete a partial bundle with missing items\. However, the extremely high\-dimensional combinatorial spaces and heterogeneous semantic granularities involved pose significant challenges to BC benchmarking, and existing generative frameworks suffer from failing to precisely align the generated unknown slots with highly compatible known items\. In this paper, we exploit conditional probability transitions in discrete state spaces and introduce a novel Non\-co\-progressive Markov bridge, NonMBB, a generalization of Markov bridge for constructing bundles of products\. Specifically, given bundle's unique properties, NonMBB first improve Markov bridge for slot modeling through: i\) categorizing item slots into high\-compatibility slots and weakly\-associated slots with respect to the known items, assigning them distinct timestep schedules to avoid the pitfall where high\-compatibility slots must reference noisy, uninformative context at identical noise levels; ii\) applying introduce schedule reweighting to constrain the maximum timestep disparity across slots, thereby preventing noise residuals caused by excessive asynchrony\. Extensive experiments on Spotify and POG demonstrate that NonMBB establishes a substantially improved  optimal bipartite matching over existing diffusion methods, yielding higher embedding\-space alignment independently of exact\-match recall\.

## Order\-Optimal Sample Complexity for Distribution Learning via Flow Matching

**Authors:** Hari K Sahoo; Mudit G Gaur; Vaneet Aggarwal

**ID:** 153506 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KpJ4AAWMxN>) | [PDF](<https://openreview.net/pdf?id=KpJ4AAWMxN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153506>)

_Abstract unavailable from the accessible public sources._

## Efficient Reasoning via Constrained Optimization in Latent Space

**Authors:** Zhinan Hou; Xingchen Li; Keyou You

**ID:** 149724 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nrBHRUPmWu>) | [PDF](<https://openreview.net/pdf?id=nrBHRUPmWu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149724>)

Large Reasoning Models \(LRMs\) have shown remarkable reasoning capabilities, yet they still suffer from overthinking, generating redundant reasoning steps which incur substantial token consumption\. Existing methods, such as suppressing reflective keywords or forcing shorter reasoning lengths, attempt to mitigate this issue but inevitably truncate necessary steps and induce underthinking, thereby compromising performance\. To address this dilemma, we investigate the latent representations and observe that efficient reasoning steps naturally cluster into a concentrated region in latent space, while those deviating from this region tend to produce verbose sequences\. To leverage this, we keep reasoning focused within this region via a quadratic program which projects deviating hidden states back into the region\. Then we propose a novel training\-free framework to achieve efficient reasoning that reduces token generation costs without sacrificing performance\. Extensive experiments conducted on four models ranging from 1\.5B to 14B, and across six benchmarks in math reasoning, coding, and scientific QA, validate the effectiveness of our method, up to a 13\.4\\% improvement in accuracy while reducing generated tokens by 11\.8\\% to 52\.8\\%\. Code and models will be publicly available\.

## Velocity Ambiguity Profiles: Time\-Resolved Bayes\-Risk Diagnostics for Flow Matching

**Authors:** Yunpeng Mei; Xiaowen Zhu; Chenyu Wang; Chenbo Xin; Hongjie Cao; Jiamin Wang; Jie Chen; Gang Wang

**ID:** 150521 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hU5qsz0CsX>) | [PDF](<https://openreview.net/pdf?id=hU5qsz0CsX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150521>)

Flow matching trains a continuum of velocity regression problems but usually reports a loss averaged over interpolation time, obscuring which regions are limited by intrinsic ambiguity and which remain data\-limited\. We introduce the Velocity Ambiguity Profile \(VAP\), $\\mathcal\{A\}\_v\(t\)$, the time\-local Bayes\-risk floor of velocity prediction, and decompose time\-resolved loss as $L\_N\(t\)=\\mathcal\{A\}\_v\(t\)\+R\(t;N\)$, where only the excess term $R\(t;N\)$ is reducible by more data or a different estimator\. We prove two statistical benchmarks\. In an intrinsic local\-regression benchmark, $\\mathcal\{A\}\_v\(t\)$ enters the time\-dependent noise factor of the standard nonparametric rate\. In separated isotropic Gaussian mixtures, the Bayes velocity becomes locally affine, and a label\-oracle residual\-regression benchmark has parametric excess\-risk scale $K\\mathcal\{A\}\_v\(t\)/N$, matched within the same separated residual Gaussian\-location subproblem\. Controlled Gaussian\-mixture experiments validate this diagnostic through a dense transition sweep, calibrated oracle\-to\-blind and empirical\-proxy audits, and a local controlled time\-sampler stress test in which a frozen reducible\-error proxy reduces reducible loss while cross\-cell sensitivity delimits aggressive sampling\. VAP turns an averaged flow\-matching objective into a time\-resolved diagnostic for locating ambiguity\-limited and data\-limited regions\.

## Diffusion fine\-tuning with Rewarded Moment Matching Distillation

**Authors:** Alexis Jacq; Guillaume Couairon; Quentin Berthet; Valentin De Bortoli; Arnaud Doucet; Romuald Elie

**ID:** 150176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k7jVv4PA8D>) | [PDF](<https://openreview.net/pdf?id=k7jVv4PA8D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150176>)

Distillation and Reinforcement Learning \(RL\) fine\-tuning are the primary pillars of diffusion post\-training\. While traditionally studied in isolation, the interaction between these phases remains poorly understood, and in particular how fine\-tuning impacts the generative quality of distilled models\. We introduce Rewarded Moment Matching Distillation \(RMMD\), a novel framework that simultaneously distills diffusion models and maximizes a reward function\. RMMD preserves the high\-fidelity "naturalness" characteristic of advanced distillation \(e\.g\., 8\-step Moment Matching\) by adapting the sampling loop for on\-policy training and repurposing the distillation loss as a proxy for integral KL regularization\. By evaluating the FID\-Reward Pareto fronts on ImageNet, we demonstrate that RMMD achieves superior trade\-offs compared to single\-step baselines \(DI\+\+\) and multi\-step competitors \(DRaFT, HyperNoise\)\. Finally, we apply RMMD to GenCast, a state\-of\-the\-art weather forecasting model, to distill it while optimizing the Continuous Ranked Probability Score \(CRPS\) metric\. The resulting distilled model achieves a 7\.5x speedup while outperforming the teacher model on 93% of target weather variables, and being better calibrated\. This proves that RMMD scales to complex, high\-dimensional scientific domains\.

## Renoise Consistency: Unlocking Efficient Self\-Correction for Diffusion Large Language Models

**Authors:** JIHOON LEE; Yeongbin Seo; Jaehyung Kim

**ID:** 151651 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z2nVkaW60X>) | [PDF](<https://openreview.net/pdf?id=Z2nVkaW60X>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151651>)

Diffusion Large Language Models \(DLMs\) are being actively explored as promising alternatives to autoregressive models due to their fast and flexible generation capabilities\.  To optimize inference in DLMs, recent studies have proposed a variety of decoding algorithms\.  However, the tendency of these methods to mimic autoregressive generation limits the speed and flexibility of DLMs, while also preventing the methods from fully realizing their potential\. Moreover, this rigid approach leads to error propagation, while existing sampling\-based correction methods incur prohibitive computational costs\. To overcome this, we propose Renoise Consistency, a novel post\-hoc approach that enables effective self\-correction by maximizing train\-\-inference consistency and can be applied to any decoding algorithm with a flexible computational budget\. Furthermore, we introduce Adaptive Block Drafting, which leverages consistent internal representations of DLMs to significantly reduce the overall computational cost\. When combined, our proposed method achieves up to a 9\.00\\% performance improvement over the semi\-autoregressive baseline, along with a 25\.85\\% reduction in forward steps\.

## Training\-Free Generative Sampling via Moment\-Matched Score Smoothing

**Authors:** ZHENYU YAO; Daniel Paulin

**ID:** 149104 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sro3uicxll>) | [PDF](<https://openreview.net/pdf?id=sro3uicxll>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149104>)

Diffusion models generate samples by denoising along the score of a perturbed target distribution\. In practice, one trains a neural diffusion model, which is computationally expensive\. Recent work suggests that score matching implicitly smooths the empirical score, and that this smoothing bias promotes generalization by capturing low\-dimensional data geometry\. We propose moment\-matched score\-smoothed overdamped Langevin dynamics \(MM\-SOLD\), a training\-free interacting particle sampler that enforces the target moments throughout the sampling trajectory\. We prove that, in the large\-particle limit, the empirical particle density converges to a deterministic limit whose one\-particle stationary marginal is a Gibbs\-\-Boltzmann density obtained by exponentially tilting a naive score\-smoothed diffusion target\. The mean and covariance of this distribution agree with the empirical moments of the training data\. Experiments on 2D distributions and latent\-space image generation show that MM\-SOLD enables fast, robust, training\-free sampling on CPUs, with sample fidelity and diversity competitive with neural diffusion baselines\.

## RA\-ClipScore: Making Generative Model Evaluation More Interpretable

**Authors:** Yifan Lu; Taras Kucherenko; Hedvig Kjellstrom; Judith Bütepage

**ID:** 139451 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P82JofgITl>) | [PDF](<https://openreview.net/pdf?id=P82JofgITl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139451>)

Generative models can produce images nearly indistinguishable from real data, yet rigorous and interpretable evaluation remains challenging\. Conventional metrics such as FID provide only scalar scores with limited diagnostic insight\. Widely adopted CLIP\-based metrics enable semantic evaluation beyond simple training class labels, but inherit limitations from CLIP’s training paradigm that restrict attribute\-wise analysis\. We propose RA\-CLIPScore, a novel metric that mitigates these issues and extends CLIP\-based evaluation to spatial distribution alignment, measuring whether generated objects adhere to the positional priors found in the training data\. RA\-CLIPScore introduces dual prompts to decouple competing attributes and leverages local patch tokens to capture fine\-grained regional semantics\. We evaluate image generative models on their ability to match both attribute and spatial distributions of the training data\. Extensive experiments show that RA\-CLIPScore provides more robust and interpretable evaluations than prior methods, particularly under distribution misalignment or partially irrelevant textual attributes\. We further demonstrate how it reveals previously undocumented regional tendencies in generative models\.

## Debiased Counterfactual Generation via Flow Matching from Observations

**Authors:** Hugh Dance; Johnny Xi; Peter Orbanz; Benjamin Bloem\-Reddy

**ID:** 149078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t2qgnOp8Wx>) | [PDF](<https://openreview.net/pdf?id=t2qgnOp8Wx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149078>)

Estimating counterfactual distributions under interventions is central to treatment risk assessment and counterfactual generation tasks\. Existing approaches model the counterfactual distribution as a standalone generative target, without exploiting its relationship to the observational data\. In this work, we show that under standard assumptions, observational and counterfactual outcome distributions are tightly linked: they have identical support and tail behavior, remain statistically close under weak confounding, and share any features of high\-dimensional outcomes which are invariant to confounders\. These properties motivate learning counterfactual distributions not from scratch, but via a \*deconfounding flow\* from the observational distribution\. We formulate this problem via flow\-matching and derive a semiparametrically efficient estimator based on a novel efficient influence function correction\. We subsequently extend our estimator to target minimal\-energy flows in high\-dimensions, which we show can be especially simple targets between observational and counterfactual distributions\. In experiments, deconfounding flows outperform existing debiased counterfactual distribution estimators, while also mitigating known failure modes of flow\-based methods\.

## Map\-Guided Caching: A Global Perspective for Efficient Diffusion Transformer

**Authors:** Jiaqi Ji; Ran Yang; Bo Wei; Hui Li; Hee Min Choi

**ID:** 153062 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OIRkHEYjkM>) | [PDF](<https://openreview.net/pdf?id=OIRkHEYjkM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153062>)

_Abstract unavailable from the accessible public sources._

## BASTION: Budget\-Aware Speculative Decoding with Tree\-structured Block Diffusion Drafting

**Authors:** Soowon Oh; Nam Cao; Yujin Kim; Hojung Jung; Huzama Ahmad; Sangmin Bae; Se\-Young Yun

**ID:** 151263 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bggNOfjAjb>) | [PDF](<https://openreview.net/pdf?id=bggNOfjAjb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151263>)

Block\-diffusion drafters have recently shown strong potential for speculative decoding by predicting multiple future\-token distributions in a single forward pass\. To exploit these parallel predictions, tree\-based verification can check multiple plausible continuations instead of committing to a single greedy draft path, often increasing the number of accepted tokens per decoding cycle\. However, existing tree\-based approaches typically rely on fixed tree topologies or static verification budgets, even though the best budget depends on the local draft distribution, context length, target model, and hardware runtime\. We propose a system\-aware adaptive tree framework for block\-diffusion speculative decoding\. At each decoding cycle, our method builds a tree toward high\-probability draft paths and selects the verification budget that maximizes an online speedup estimate\. This estimate combines a drafter\-based acceptance surrogate with an analytical verifier\-latency model calibrated from observed runtimes\. The framework requires no additional training of the drafter or target model and preserves the target model's decoding rule\. Across target models, benchmarks, decoding temperatures, and GPU platforms, our method achieves up to a $6\.93\\times$ wall\-clock speedup over standard autoregressive decoding\. This corresponds to approximately 40% higher speedup than Dflash, the strongest existing block\-diffusion drafter, and is obtained without per\-setting budget tuning\.

## Concurrence of Symmetry Breaking and Nonlocality Phase Transitions in Diffusion Models

**Authors:** Yifan F Zhang; Fangjun Hu; Guangkuo Liu; Mert Okyay; Xun Gao

**ID:** 153436 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LJu0XmevDe>) | [PDF](<https://openreview.net/pdf?id=LJu0XmevDe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153436>)

Diffusion models undergo a phase transition in a critical time window during generation dynamics, with two complementary diagnoses of criticality\. The symmetry breaking picture views the critical window as when trajectories bifurcate into different semantic minima of the energy landscape, whereas the nonlocality picture views the critical window as when local denoising fails\. We study whether two notions of such phase transitions are concurrent in modern diffusion transformers\. By evaluating the dynamics and outcomes of the generation trajectory, we observe a near\-simultaneous occurrence of the non\-locality and symmetry breaking critical times\. Our work is the first to unify the two notions of phase transitions in practice: it provides a concrete diagnostic for when and why diffusion models rely on conditioning and global denoising, enabling principled evaluation of model efficiency and guiding the design of architectures and sampling schemes that avoid unnecessary computation\.

## TrajLift: Encoding Verbal Memory Dynamics via Heat Diffusion on Semantic Hierarchies

**Authors:** Jiawen Kang; Jinchao Li; Mingyu Cui; Junan Li; Xixin Wu; Helen Meng

**ID:** 154461 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DPkTPrRA03>) | [PDF](<https://openreview.net/pdf?id=DPkTPrRA03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154461>)

Verbal memory retrieval carries rich diagnostic information for Alzheimer's disease \(AD\) through the order, hesitation, and categorical organization of recalled words, yet computational modeling of this retrieval process remains largely unexplored\.  A key challenge is that timing and hierarchical structure are diagnostically entangled: the diagnostic meaning of retrieval timing depends on its hierarchical context\. We propose TrajLift, a spectral framework that models verbal recall as timed trajectories on a hierarchical graph\. Our central mechanism is graph heat diffusion on the semantic hierarchy, which provides a unified operator for capturing both multi\-scale hierarchical structure and continuous retrieval timing\. Formal analysis shows that the resulting representation is provably separable into structural and temporal components with spectral selectivity across hierarchical levels\. Experiments on synthetic benchmarks and a real\-world clinical corpus demonstrate consistent improvements over baselines lacking joint structure\-time modeling\.

## Energy\-Tweedie: Score meets Score, Energy meets Energy

**Authors:** Andrej Leban

**ID:** 150007 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lTLzpUqJPJ>) | [PDF](<https://openreview.net/pdf?id=lTLzpUqJPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150007>)

Denoising and score estimation are classically linked through Tweedie’s formula, which relates the posterior mean under Gaussian corruption to the Stein score of the noisy marginal\. In this work, we extend this perspective beyond Gaussian noise to a broad class of elliptical, energy\-based noise distributions, with particular emphasis on generalized Gaussian corruptions\. We derive the Energy–Tweedie identity: when the denoising posterior is viewed through the lens of proper scoring rules, the path derivative of a matched, possibly non\-Euclidean energy score recovers the Stein score of the noisy marginal\. Thus, the familiar correspondence between Gaussian noise, posterior means, squared loss, and Tweedie’s formula is lifted to a distributional correspondence between generalized Gaussian noise, full posterior laws, Mahalanobis energy scores, and the Energy–Tweedie identity\. Among its consequences, this identity gives a posterior\-sample\-based route to score estimation, yields a principled criterion for noise\-parameter calibration, and supplies a score\-based perspective on recent diffusion\-style generative methods trained with scoring rules\.

## Sparsely Supervised Diffusion

**Authors:** Wenshuai Zhao; Zhiyuan Li; Yi Zhao; Mohammad Vali; Martin Trapp; Joni Pajarinen; Juho Kannala; Arno Solin

**ID:** 155610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4HalTYbzQG>) | [PDF](<https://openreview.net/pdf?id=4HalTYbzQG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155610>)

Diffusion models have shown remarkable success across a wide range of generative tasks\. However, they often suffer from spatially inconsistent generation, arguably due to excessive correlations learned by the model\. This can produce samples that are locally plausible but globally inconsistent\. We propose a principled method to mitigate this issue\. Our method, sparsely supervised diffusion \(SSD\), is a simple yet effective masking framework that can be implemented with only a few lines of code\. We analytically show that SSD fundamentally alters diffusion model training by modifying the spectrum of the data covariance and that it suppresses correlations in the data covariance matrix\. Experiments show that our method more accurately approximates the underlying population score function, reduces memorization on small datasets, and promotes the use of essential contextual information during generation\. Moreover, even when up to 98\\% of pixels are masked, it achieves competitive FID scores across a range of datasets and, importantly, avoids the training instability commonly observed on small datasets\.

## ELF: Embedded Language Flows

**Authors:** Keya Hu; Linlu Qiu; Yiyang Lu; Hanhong Zhao; Tianhong Li; Yoon Kim; Jacob Andreas; Kaiming He

**ID:** 148278 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z3I6Aj563f>) | [PDF](<https://openreview.net/pdf?id=z3I6Aj563f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148278>)

Diffusion and flow\-based models have become the de facto approaches for generating continuous data, e\.g\., in domains such as images and videos\. Their success has attracted growing interest in applying them to language modeling\. Unlike their image\-domain counterparts, today’s leading diffusion language models \(DLMs\) primarily operate over discrete tokens\. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain\. We propose Embedded Language Flows \(ELF\), a class of diffusion models in continuous embedding space based on continuous\-time Flow Matching\. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared\-weight network\. This formulation makes it straightforward to adapt established techniques from image\-domain diffusion models, e\.g\., classifier\-free guidance \(CFG\)\. Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps\. These results suggest that ELF offers a promising path toward effective continuous DLMs\.

## Uniform Diffusion Models revisited: Leave\-One\-Out Denoiser and Absorbing State Reformulation

**Authors:** Samson Gourevitch; Yazid Janati; Dario Shariatian; Umut Simsekli; Eric Moulines; Eric Xing; Alain Durmus

**ID:** 153715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JJGRXH8cyk>) | [PDF](<https://openreview.net/pdf?id=JJGRXH8cyk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153715>)

Discrete diffusion models are typically trained by predicting the clean data given a noisy observation, which is then used with a certain choice of reverse transition parameterization\. Two choices coexist in the literature, which we refer to as marginalization and plug\-in\. Although they coincide in the case of masked diffusion models \(MDMs\), we revisit this question for uniform diffusion models \(UDMs\), where the distinction matters\. We show that the plug\-in parameterization is not optimized by the denoising posterior but by a \\emph\{leave\-one\-out\} posterior that removes the influence of the local observation\. We give a thorough characterization of the resulting training target, together with exact conversion formulas between the denoiser, the \\emph\{leave\-one\-out\} posterior, and the score\. As a by\-product, the leave\-one\-out characterization yields a Gibbs\-based predictor–corrector scheme at no additional training cost\.  We further propose an absorbing\-state construction of uniform diffusion, whose denoiser decomposes into simpler absorbing denoising posteriors, and which recovers the full UDM joint law following a simple resampling step\. Empirically, we show that these design choices interact strongly with optimization and generative quality; on language modeling, the \\emph\{leave\-one\-out\} denoiser improves over other parameterizations\.

## Plug\-and\-Play ADMM for Inverse Problems with Flow Matching Denoiser

**Authors:** Dibyanshu Kumar; Magda Gregorova

**ID:** 153344 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M3Ecn7ndl6>) | [PDF](<https://openreview.net/pdf?id=M3Ecn7ndl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153344>)

_Abstract unavailable from the accessible public sources._

## Fix the Structural Bottleneck: Context Compression via Explicit Information Transmission

**Authors:** Jiangnan Ye; Hanqi Yan; Zhenyi Shen; Heng Chang; Ye Mao; Yulan He

**ID:** 152205 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UmwQ35aBP0>) | [PDF](<https://openreview.net/pdf?id=UmwQ35aBP0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152205>)

_Abstract unavailable from the accessible public sources._

## HERO: Improving the Reliability and Sensitivity of Generative Model Evaluation Using Historical Data

**Authors:** Zhenyu Zhao; Xinrui Ruan; Waverly Wei; Yueshan Zhang; Zeyu Zheng; Sui Huang; Jingshen Wang

**ID:** 139720 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8YiaoJ83Yi>) | [PDF](<https://openreview.net/pdf?id=8YiaoJ83Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139720>)

_Abstract unavailable from the accessible public sources._

## SynMQG: Disentanglement and Mutual\-Information Optimization for Synergistic Multi\-modal Question Generation

**Authors:** Junjie Zhang; ShengYong Ding; Shuangyin Li

**ID:** 154232 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FF06ZCbibp>) | [PDF](<https://openreview.net/pdf?id=FF06ZCbibp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154232>)

_Abstract unavailable from the accessible public sources._

## JaSpec\-LID: Local Intrinsic Dimension Estimation via Jacobian Spectra of ODE\-based Generative Models

**Authors:** Hiro Ishii; GENKI OSADA

**ID:** 149602 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=otXI54Uzfq>) | [PDF](<https://openreview.net/pdf?id=otXI54Uzfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149602>)

_Abstract unavailable from the accessible public sources._

## Plug\-and\-Play ADMM for Inverse Problems with Flow Matching Denoiser

**Authors:** Dibyanshu Kumar; Magda Gregorova

**ID:** 153344\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153344

[Paper](<https://openreview.net/forum?id=M3Ecn7ndl6>) | [PDF](<https://openreview.net/pdf?id=M3Ecn7ndl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153344>)

_Abstract unavailable from the accessible public sources._

## Fix the Structural Bottleneck: Context Compression via Explicit Information Transmission

**Authors:** Jiangnan Ye; Hanqi Yan; Zhenyi Shen; Heng Chang; Ye Mao; Yulan He

**ID:** 152205\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152205

[Paper](<https://openreview.net/forum?id=UmwQ35aBP0>) | [PDF](<https://openreview.net/pdf?id=UmwQ35aBP0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152205>)

_Abstract unavailable from the accessible public sources._

## Concept\-Localized Generative Representations

**Authors:** Amanda Merkley

**ID:** 150809 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fDLPVya86p>) | [PDF](<https://openreview.net/pdf?id=fDLPVya86p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150809>)

Motivated by interpretable generative models for applications such as scientific inquiry, we aim to learn representations that localize human\-interpretable concepts and separate them from residual variation in the data\. Reconstruction and prediction objectives alone are insufficient for this purpose, as concept\-relevant variation can be distributed across multiple latent factors while still achieving high performance\. We address this limitation with a generative model that learns a balanced decomposition of data into concept\-aligned and residual latent representations inferred purely from observations\. The objective encourages localization through an upper bound on the concept information bottleneck while reducing dependence between the concept and residual latent\. Across synthetic and real datasets, the learned representations localize concepts while preserving generative fidelity\. A neural\-data case study shows that localized representations align more strongly with structured variation in observed neural responses\. This supports localization, rather than prediction accuracy alone, as a more faithful criterion for interpreting concept\-relevant structure in generative models\.

## Fine\-Tuning Improves Information Conveyance in Language Models

**Authors:** Yuwei Cheng; Weiyi Tian; Haifeng Xu

**ID:** 152334 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TqEugPEDx7>) | [PDF](<https://openreview.net/pdf?id=TqEugPEDx7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152334>)

Fine\-tuning is often believed to reduce uncertainty and diversity in large language models, but existing analyses overlook output length, a key confounder, and therefore fail to capture how uncertainty is distributed across an entire generation rollout\. To address this, we propose Canopy Entropy \($\\mathrm\{CE\}^\\star$\), a measure that views language generation from a tree perspective, where "canopy" represents the space of all possible rollouts, making $\\mathrm\{CE\}^\\star$ naturally quantify the effective size of the generation space\. $\\mathrm\{CE\}^\\star$ jointly captures the output length $N$ and the generated sequence $Y\_\{1:N\}$, and we show that it equals to total Shannon entropy $H\(N, Y\_\{1:N\}\\mid X\)$, where $X$ denotes the prompt\. This formulation yields interpretable metrics, including a length\-\-uncertainty correlation term $\\rho\(N, r\_N\)$, where $r\_N$ is the entropy rate, quantifying information conveyance efficiency by indicating whether longer outputs are more or less informative per token\. Empirically, across tasks and model families, we find that fine\-tuned models consistently exhibit stronger positive correlation $\\rho\(N, r\_N\)$, even when total entropy decreases\. Furthermore, after controlling for model family, task, prompt, and output\-length effects, we find that fine\-tuning nearly triples the strength of the relationship between entropy rate and semantic diversity, suggesting that aligned models convert uncertainty into semantically meaningful variation much more efficiently\. Overall, these results suggest that fine\-tuning does not simply reduce uncertainty, but fundamentally reorganizes it into more informative and semantically meaningful generations\.

## ProxySearch: Decoupled Inference\-Time Scaling for Diffusion Models via Asymmetric Noise\-Rank Transfer

**Authors:** Seungwook Kim; Jongmin Lee

**ID:** 151922 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WsejbW6R22>) | [PDF](<https://openreview.net/pdf?id=WsejbW6R22>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151922>)

Noise search at inference time improves text\-to\-image diffusion quality but requires many multi\-step teacher rollouts per query\. Distilled few\-step models are now routinely released for efficient inference, but their potential as proxies inside noise search is uncharacterised\. We measure proxy\-\-teacher rank agreement across three distillation regimes and three backbones spanning DiT, MMDiT, and UNet, and find a sharp asymmetry: eight closed\-form image statistics preserve rank from the distilled proxy to the teacher \(Spearman $\\rho$ up to $0\.80$\), while learned semantic scorers decorrelate \($\\rho \\le 0\.12$\)\. Null controls localise the transfer to distillation training rather than few\-step denoising or initial noise characteristics\. We therefore reformulate noise search as a \\emph\{joint constraint\} and propose ProxySearch: the proxy filters candidates by statistical match in $1$ step, the teacher argmaxes a user\-chosen semantic reward over the survivors without a tunable weight trading semantic reward against the statistical target\. \\textsc\{ProxySearch\} matches or beats teacher\-only argmax on compositional accuracy and human preference, while tightening the statistical target by $\\sim 23\\%$ in paired statistical $\\ell\_1$ relative to teacher\-only argmax at matched compute on FLUX\-$1024$\.

## The Quiet Prompt: Erasing Ineffable Styles from Diffusion Models via Concept Leakage\-aware Negative Guidance

**Authors:** Kiyun Park; Min Hee Cha; Hyeok Nam; Jae Hyeon Park; Seonho Lee; Jua Han; Hyunse Lee; Sung In Cho

**ID:** 151233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bv3AN8TM5z>) | [PDF](<https://openreview.net/pdf?id=bv3AN8TM5z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151233>)

Recent text\-to\-image diffusion models \(T2I DMs\) depend on vast, uncurated datasets that often include copyrighted artworks and personal images, risking the generation of unwanted content\. While concept erasure methods have emerged to suppress such outputs, they predominantly rely on text prompts, limiting their effectiveness for visually nuanced or ineffable styles that are difficult to articulate verbally\. To bridge this gap, we propose Quiet Prompt \(QuP\), a reference\-based concept erasure method that identifies complex concepts using fewer than ten reference images\. QuP operates in two stages: \(1\) Concept Embedding Generation \(CEG\), which captures the intricate visual morphology of an unwanted concept into a single latent embedding; and \(2\) Concept leakage\-aware Negative Guidance \(CNG\), which utilizes this embedding as a negative semantic condition to steer the diffusion process\. In addition, to overcome the limitations of conventional fixed\-scale negative guidance \(negative prompting\)—which often suffers from structural distortion and unintended content loss—we introduce concept leakage\-aware negative guidance scale $n\_g\(t\)$\. This mechanism adaptively modulates the guidance strength at each denoising step based on a semantic measurement of concept leakage between the intermediate generated image and the target concept in a joint embedding space\. Extensive evaluations on idiosyncratic art styles and object erasure tasks demonstrate that QuP achieves superior concept suppression and content preservation, outperforming state\-of\-the\-art text\-based baselines in both image fidelity and erasure precision\. The source code will be publicly provided to ensure reproducibility of our work\.

## The $1/\\mathcal\{W\}$ Law: Context Length is the Dominant Energy Lever in LLM Inference Fleets

**Authors:** Huamin Chen; Xunzhuo Liu; Yuhan Liu; Junchen Jiang; Steve Liu; Chenxu Niu; Bowei He

**ID:** 150915 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eQmwjbxAVA>) | [PDF](<https://openreview.net/pdf?id=eQmwjbxAVA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150915>)

_Abstract unavailable from the accessible public sources._

## MOSAIC: Scaling Long\-Horizon Language Agents via Multi\-Scale Adaptive Inference Control

**Authors:** Bowei He; Meng Ding; Weixu Zhang; Xunzhuo Liu; Huamin Chen; Steve Liu

**ID:** 152297 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U7oqLxPLgG>) | [PDF](<https://openreview.net/pdf?id=U7oqLxPLgG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152297>)

_Abstract unavailable from the accessible public sources._

## Escaping the Curse of Dimensionality in One‑Step Flow\-Based Generative Models

**Authors:** Konstantin Yakovlev

**ID:** 151654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z20kWigIHe>) | [PDF](<https://openreview.net/pdf?id=Z20kWigIHe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151654>)

Flow and diffusion\-based generative models achieve state\-of\-the\-art quality, but require multiple forward passes at inference time, making them computationally costly\.     Consistency models overcome this by learning a flow map directly, enabling few‑step generation and dramatically reducing the computation needed at test time\.     However, formal statistical guarantees for such one‑step generators are scarce\.     Existing results either suffer from the curse of dimensionality or rely on impractical loss functions\.     We investigate whether one‑step flow\-based models can escape the curse of dimensionality under the assumption that the data distribution is generated by a low\-dimensional surface perturbed with Gaussian noise\.     In this setup, we derive approximation and generalization error bounds for the flow map estimate that circumvent the curse of dimensionality\.     Our findings provide the first principled explanation for practical success of one\-step flow\-based generative models\.

## State Augmented Flows

**Authors:** Dwij Mehta; Arvind Renganathan; Vipin Kumar

**ID:** 149218 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s0ZcT4SvLA>) | [PDF](<https://openreview.net/pdf?id=s0ZcT4SvLA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149218>)

Flow matching learns continuous\-time transports from a simple source distribution to a target data distribution by training a velocity field on intermediate states along interpolating trajectories\. However, because the model observes only the projected data\-space state $\(x\_t,t\)$, different transport trajectories can induce conflicting velocity directions at nearby intermediate states, leading to curved transport paths that limit the fidelity of low\-NFE sampling\. To address this limitation, we propose \\emph\{State Augmented Flows\} \(SAF\), a lightweight framework that lifts flow matching into a transient augmented state space\. SAF transports an augmented state $\(x\_t,z\_t\)$, where auxiliary coordinates provide additional contextual information during transport while vanishing at the terminal time\. This enlarges the state observed by the velocity model without changing the final sample space, and is compatible with existing coupling strategies and flow\-matching architectures\. Across MNIST, CIFAR\-10, and ImageNet\-32, SAF consistently improves over the rectified\-flow baseline, with the largest gains in the low\-NFE regime\. These results suggest that augmenting the transported state provides a new and complementary mechanism for improving flow\-based generative modeling\.

## Multi\-step Consistency Models: A Complete Error Theory and Optimal Step Selection

**Authors:** Yanshu Wang; Rui Liu; Tong Yang

**ID:** 153683 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JZcfQE5K9P>) | [PDF](<https://openreview.net/pdf?id=JZcfQE5K9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153683>)

Consistency models achieve fast image synthesis by chaining a small number of neural evaluations along a diffusion trajectory, yet the distribution error of $N$\-step sampling for $N \\geq 3$ has lacked a rigorous characterisation\. We establish a tight Wasserstein\-$p$ error bound for arbitrary $N$: the total error equals a Lipschitz\-weighted sum of per\-step local consistency errors, $\\sum\_\{k=1\}^\{N\} L\_x^\{N\-k\} \\delta\_k$, making the propagation mechanism explicit\. From this bound we derive a closed\-form optimal step count $N^\{\\star\}$ whose structure bifurcates on whether the spatial Lipschitz constant $L\_x$ exceeds one: for $L\_x &gt; 1$, exponential error growth yields $N^\{\\star\} \\approx \(\\ln L\_x\)^\{\-1\} \\log\(\\beta\\gamma\(L\_x\-1\)/\(c \\ln L\_x\)\)$; for $L\_x &lt; 1$, geometric\-series saturation gives $N^\{\\star\} \\approx \(\\beta\\gamma\(1\-L\_x\)/\(c \\, \|\\ln L\_x\|\)\)^\{1/\(\\gamma\+1\)\}$\. The two\-regime structure accounts for ECT's best FID of $2\.73$ at $N=2$: with $L\_x \\approx 0\.85 &lt; 1$ \(Case 2\), the formula gives $N^\{\\star\} \\approx 1\.7$\. Experiments on CIFAR\-10 reproduce the predicted U\-shaped FID curve with $N^\{\\star\} = 8$ on a capacity\-constrained model in which error accumulation is easier to see\.

## Multi\-step Consistency Models: A Complete Error Theory and Optimal Step Selection

**Authors:** Yanshu Wang; Rui Liu; Tong Yang

**ID:** 153683\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153683

[Paper](<https://openreview.net/forum?id=JZcfQE5K9P>) | [PDF](<https://openreview.net/pdf?id=JZcfQE5K9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153683>)

Consistency models achieve fast image synthesis by chaining a small number of neural evaluations along a diffusion trajectory, yet the distribution error of $N$\-step sampling for $N \\geq 3$ has lacked a rigorous characterisation\. We establish a tight Wasserstein\-$p$ error bound for arbitrary $N$: the total error equals a Lipschitz\-weighted sum of per\-step local consistency errors, $\\sum\_\{k=1\}^\{N\} L\_x^\{N\-k\} \\delta\_k$, making the propagation mechanism explicit\. From this bound we derive a closed\-form optimal step count $N^\{\\star\}$ whose structure bifurcates on whether the spatial Lipschitz constant $L\_x$ exceeds one: for $L\_x &gt; 1$, exponential error growth yields $N^\{\\star\} \\approx \(\\ln L\_x\)^\{\-1\} \\log\(\\beta\\gamma\(L\_x\-1\)/\(c \\ln L\_x\)\)$; for $L\_x &lt; 1$, geometric\-series saturation gives $N^\{\\star\} \\approx \(\\beta\\gamma\(1\-L\_x\)/\(c \\, \|\\ln L\_x\|\)\)^\{1/\(\\gamma\+1\)\}$\. The two\-regime structure accounts for ECT's best FID of $2\.73$ at $N=2$: with $L\_x \\approx 0\.85 &lt; 1$ \(Case 2\), the formula gives $N^\{\\star\} \\approx 1\.7$\. Experiments on CIFAR\-10 reproduce the predicted U\-shaped FID curve with $N^\{\\star\} = 8$ on a capacity\-constrained model in which error accumulation is easier to see\.

## StableHand: Quality\-Aware Flow Matching for World\-Space Dual\-Hand Motion Estimation from Egocentric Video

**Authors:** Huajian Zeng; Chaohua Yao; Yuantai Zhang; Jiaqi Yang; Rolandos Alexandros Potamias; Xingxing Zuo

**ID:** 155198\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155198

[Paper](<https://openreview.net/forum?id=7Yxqeh6UZi>) | [PDF](<https://openreview.net/pdf?id=7Yxqeh6UZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155198>)

Recovering world\-space 4D motion of two interacting hands from egocentric video is a fundamental capability for supervising robot policy learning, where wrist trajectories track the end\-effector and finger articulations specify the grasp pose\. Two major challenges arise in this setting: hands frequently leave the camera view for extended periods due to head motion, and persistent hand–object interactions cause severe occlusions of one or both hands\. Existing methods uniformly condition on noisy hand motion observations without accounting for their per\-frame reliability, leading to substantial performance degradation\. Our key insight is that accurate world\-space hand motion esimation is tightly coupled with the quality of per\-frame hand observations\. To this end, we decompose the quality of hand motion observations extracted from an off\-the\-shelf hand pose estimator into four channels: wrist global translation and finger articulations for both hand\. We propose StableHand, a quality\-aware flow\-matching framework conditioned on these four\-channel quality signals, which are predicted by a learned quality network\. We naturally incorporate the quality signals into the flow\-matching process through a per\-channel forward schedule, a quality\-adjusted velocity target, AdaLN modulation of the DiT denoiser, and a quality\-aware ODE initialization\. This unified generative process preserves high\-quality observations while reconstructing unreliable ones using a learned bimanual motion prior\. Experiments on HOT3D and ARCTIC, two egocentric benchmarks featuring long missing\-hand spans and persistent hand–object occlusions, show that StableHand achieves state\-of\-the\-art performance across all reported metrics, reducing W\-MPJPE by 20\-25% compared to the strongest baseline, with the largest gains on heavily occluded ARCTIC sequences\. Code and pretrained models will be released upon acceptance\.

## Stochastic Interpolants via Conditional Dependent Coupling

**Authors:** Chenrui Ma; Xi Xiao; Tianyang Wang; Xiao Wang; Yanning Shen

**ID:** 149946\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149946

[Paper](<https://openreview.net/forum?id=m0BAYdzjal>) | [PDF](<https://openreview.net/pdf?id=m0BAYdzjal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149946>)

Existing image generation models face critical challenges regarding the trade\-off between computation and fidelity\. Specifically, models relying on a pretrained Variational Autoencoder \(VAE\) suffer from information loss, limited detail, and the inability to support end\-to\-end training\. In contrast, models operating directly in the pixel space incur prohibitive computational cost\. Although cascade models can mitigate computational cost, stage\-wise separation prevents effective end\-to\-end optimization, hampers knowledge sharing, and often results in inaccurate distribution learning within each stage\. To address these challenges, we introduce a unified multi\-stage generative framework formulated under the \\emph\{stochastic interpolant\} formalism with our \\textbf\{Conditional Dependent Coupling\} strategy as a Flow\-Matching variant\. It decomposes the generative process into interpolant trajectories at multiple stages, ensuring accurate distribution learning while enabling end\-to\-end optimization\. Importantly, the entire process is modeled as a single unified Diffusion Transformer, eliminating the need for disjoint modules and also enabling knowledge sharing\. Under explicitly stated assumptions, we provably reduce both transport cost and asymptotic inference time, we empirically validate the underlying NFE\-\-transport\-cost and per\-evaluation\-cost relations\. Extensive experiments demonstrate that our method achieves competitive fidelity and substantially lower wall\-clock cost in the low\-NFE regime across multiple resolutions\.

## DiLaDiff: Distilled Latent\-augmented Diffusion for Language Modeling

**Authors:** Jean\-Marie Lemercier; Tomas Geffner; Morteza Mardani; Karsten Kreis; Arash Vahdat; Ante Jukić

**ID:** 150062\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150062

[Paper](<https://openreview.net/forum?id=l1EueDpKBW>) | [PDF](<https://openreview.net/pdf?id=l1EueDpKBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150062>)

Diffusion language models intrinsically fail to capture correlations between decoded tokens, which leads to a harsh trade\-off between sampling quality and throughput\. To solve this issue, we propose DiLaDiff, a variant of masked diffusion language models with three components: \(1\) a continuous latent space with semantic capabilities, learned by an auto\-encoder fine\-tuned from an existing masked diffusion language model; \(2\) a latent diffusion model learning the prior over the encoder distribution; \(3\) a consistency model distilling the learned prior into a few\-step latent generative model\. We show that, even without distillation, our latent\-guided diffusion model outperforms the masked diffusion baseline while significantly accelerating inference\. Consistency distillation further lowers the computational overhead of continuous diffusion, such that the latent is generated in negligible time compared to discrete decoding\.

## Bonobo: Efficient Library\-Scale Generation for De Novo Antibody Design

**Authors:** Sebastian Ober; Nick Bhattacharya; Phillip M Maffettone; Calvin McCarter; Hunter Elliott

**ID:** 149825\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149825

[Paper](<https://openreview.net/forum?id=n11puTWueo>) | [PDF](<https://openreview.net/pdf?id=n11puTWueo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149825>)

Recently several methods have shown promise for purely in silico “de novo” design of antibodies which bind to drug targets\. The methods which have shown success in vitro propose candidates via either a generative diffusion model or hallucination\-based sequence optimization, and then filter these candidates with a structure predictor model\. Hallucination methods rely on compute\-intensive backpropagation through a structure predictor model for each candidate, and the generative methods require expensive structure re\-prediction and filtering of many \(often mostly non\-passing\) candidates, limiting their application to test\-time generation of large libraries\. Given the highly variable per\-drug\-target hit rates of current methods, screening large libraries is a well established route to improved antibody candidate discovery\. Thus, we propose an alternative approach, Bonobo, which instead formulates this problem as black\-box optimization of a per\-drug\-target generative model, amortizing candidate generation into training\. This is accomplished by using a structure predictor as a reward signal to directly train a GFlowNet generative model\. We show that this approach can match or exceed the in silico metrics of state\-of\-the\-art approaches, while allowing for dramatically more efficient generation of diverse and arbitrarily large numbers of antibody binder candidates\.

## Discovering Phase Space Structure in Learned Hamiltonian Systems

**Authors:** Jiayin Liu; Yulong Yang; Vineet Bansal; Christine Allen\-Blanchette

**ID:** 148569\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148569

[Paper](<https://openreview.net/forum?id=wstD80hIpm>) | [PDF](<https://openreview.net/pdf?id=wstD80hIpm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148569>)

Mechanics\-inspired neural dynamical models improve interpretability and physical consistency, but they usually assume a known configuration space, fixed physical parameters, and deterministic prediction from a prescribed initial condition\. We introduce Structured Phase Space GAN \(SPS\-GAN\), a conditional generative model that learns structured dynamics from both Cartesian trajectories and video\. SPS\-GAN combines a port\-Hamiltonian backbone with adversarial conditional generation, allowing conservative, dissipative, and forced systems to be represented in a single architecture\. To infer latent mechanical structure from raw observations, we use a cyclic\-coordinate loss that recovers both the system degrees of freedom and canonical coordinates without access to the true phase space\. Experiments on simulated and real\-world systems show that SPS\-GAN improves trajectory accuracy over supervised dynamics baselines and video consistency over generative baselines, while consistently recovering the correct latent mechanical coordinates across observation modalities and dynamical regimes\.

## Architecture\-Embedded Physics Priors for Mitigating Spectral Bias in Physics\-Informed Neural Networks

**Authors:** Zhuo Zhang; Li Zhang; Ying Miao; Hongzong LI; Zhixuan Liang; Yong Yang; Gemine Vivone

**ID:** 150185\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150185

[Paper](<https://openreview.net/forum?id=k4m1F3R3m4>) | [PDF](<https://openreview.net/pdf?id=k4m1F3R3m4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150185>)

Physics\-Informed Neural Networks \(PINNs\) struggle to capture high\-frequency components of PDE solutions, a failure mode known as spectral bias\. Most existing fixes adjust the loss, the sampling, or the input encoding, but the network itself remains agnostic to the equation it is supposed to solve\. We take a different route and embed physics priors into the architecture\. The network's internal spectrum is shaped to match the spectrum of the target PDE through three components that are trained end\-to\-end: a bounded coordinate warping that contracts regions where the solution varies sharply, a spectral attention layer driven by the PDE residual that emphasizes physically active Fourier modes, and an inter\-harmonic gate that lets low\-frequency channels modulate high\-frequency ones\. We test the design on four forward PDEs \(Helmholtz, Wave, Klein\-\-Gordon, Burgers\), the Burgers inverse problem, and seismic reconstruction, including Gulf of Mexico field data\. Across these tasks, the architecture clearly outperforms seven PINN baselines on accuracy and produces noticeably fewer artifacts\. Code will be made publicly available upon acceptance\.

## DriveFuture: Future\-Aware Latent World Models for Autonomous Driving

**Authors:** Yufeng hong; Xiaotian Zhou; Yingyan Li; Xiangpo Zhou; Lin Liu; Yadan Luo; Zheng Liu; Lei Yang; Ziying Song

**ID:** 149040\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149040

[Paper](<https://openreview.net/forum?id=tITD5xFjY8>) | [PDF](<https://openreview.net/pdf?id=tITD5xFjY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149040>)

Existing latent world models for autonomous driving have opened a promising path toward future\-aware driving intelligence\. However, they typically treat future latent states as prediction targets or auxiliary signals, rather than directly conditioning trajectory planning\. This can entangle current and future features in latent space\. In this work, we propose DriveFuture, a future\-aware latent world modeling framework for autonomous driving that explicitly learns planning\-oriented foresight by conditioning the current latent state modeling process on future world states\. Specifically, during training, the model first predicts future latent world states from the current latent state and ego action, and then refines the prediction against the ground\-truth future latent state via cross\-attention\. The resulting future\-aware latent serves as an explicit condition for a diffusion\-based trajectory planner\. During inference, DriveFuture conditions on the predicted future latent state instead of the ground\-truth future state\. DriveFuture achieves SOTA performance on the public NAVSIM benchmarks, reaching 55\.5 EPDMS on NAVSIM\-v2 navhard, 89\.9 EPDMS on NAVSIM\-v2 navtest, and 90\.7 PDMS on NAVSIM\-v1 navtest, respectively\. These results suggest that the key to latent world modeling lies not merely in simulating future states, but more importantly in conditioning current decision\-making on future states\. Notably, as of April 2026, DriveFuture ranks 1st on the NAVSIM\-v2 navhard leaderboard and achieves SOTA performance on NAVSIM\-v1 navtest\.

## Towards more general control of diffusion models using Jeffrey Guidance

**Authors:** Raphaël Razafindralambo; Rémy Sun; Frederic Precioso; Jes Frellsen; Pierre\-Alexandre Mattei

**ID:** 149382\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149382

[Paper](<https://openreview.net/forum?id=qUtuEEQhIU>) | [PDF](<https://openreview.net/pdf?id=qUtuEEQhIU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149382>)

A key strength of diffusion models lies in their flexibility, since their outputs can be controlled at sampling time through guidance\.  However, beyond simple cases such as conditional sampling, the target distribution is often left implicit, defined only through a sampling rule or a heuristic energy function\. To address this, we propose Jeffrey guidance, a principled framework that extends diffusion\-model control to applications beyond what standard guidance can express\. It leverages Jeffrey’s rule of conditioning to update marginal distributions towards a prescribed target, preserving the conditional structure and minimally perturbing the joint distribution\. We first demonstrate Jeffrey guidance by targeting a prescribed embedding distribution\. With Inception embeddings as the target, this leads to substantial reductions in FID on both CIFAR\-10 and FFHQ\. We further apply Jeffrey guidance to fairness on CelebA\-HQ, updating an unconditional diffusion model to enforce independence between attributes\.

## \\texttt\{FEROM\}: Frontier Endogenous Reveal\-Order Marginal Policy Optimization for Masked Diffusion LMs

**Authors:** Zian Su; Ziyang Huang; Kaiyuan Zhang; Xiangyu Zhang

**ID:** 155453\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155453

[Paper](<https://openreview.net/forum?id=5Tnt9zpIFJ>) | [PDF](<https://openreview.net/pdf?id=5Tnt9zpIFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155453>)

Masked diffusion language models generate text by iteratively unmasking positions, with practical samplers often selecting reveal positions from the model's own logits\. The reveal order is therefore an endogenous latent variable of the rollout process with an enormous discrete latent space\. Policy optimization objectives relying on pre\-defined schedules or sampled trajectories introduce either bias or high variance\. In this paper, we propose \\texttt\{FEROM\}, \\emph\{Frontier Endogenous Reveal\-Order Marginal Policy Optimization\}, which targets the rollout\-induced marginal response policy of masked diffusion LMs\. \\texttt\{FEROM\} derives a Rao\-\-Blackwellized policy\-gradient identity over latent reveal orders and expresses the resulting estimator as posterior edge occupancy on a reveal\-state DAG\. To make marginalization practical, we introduce Frontier Reveal Marginalization, a budgeted estimator that combines scorelaw local reveal estimation with frontier expansion of high\-mass partial states\. Integrated into a GRPO\-style objective, \\texttt\{FEROM\} replaces single\-path log\-scores with a locally marginalized edge\-based surrogate\. Experiments on math and coding tasks show comparable or improved results over existing methods under matched compute budgets\. Offline proxy study further shows potential in gains with increased budgets\.

## What kills $v$\-prediction? A Patch\-wise PCA Perspective on Pixel\-Space Flow Matching

**Authors:** Tianze Luo; Haofeng Huang; Yuan Yao

**ID:** 154141\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154141

[Paper](<https://openreview.net/forum?id=FwWaPhPb2O>) | [PDF](<https://openreview.net/pdf?id=FwWaPhPb2O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154141>)

Latent Diffusion Models dominate generative modeling but face two\-stage training complexity and the inherent reconstruction limits of pre\-trained autoencoders\. Pixel\-space Flow Matching offers a simplified end\-to\-end alternative yet often encounters training instabilities when using the standard $v$\-prediction objective\. Recent research attributes this difficulty to the off\-manifold nature of noised targets, prompting a widespread shift toward $x$\-prediction\. In this paper, we carefully investigate this prevailing assumption through patch\-wise Principal Component Analysis \(PCA\), and we reveal that the failure of $v$\-prediction is primarily a bandwidth issue\. Specifically, the velocity field in minor components is mostly determined by the raw noisy input, which differs from the dynamics in the principal component space\. Deep backbones must propagate this minor information to the final layer to predict the velocity field, which consumes significant model capacity that should be dedicated to principal components\. This is particularly critical in pixel space where noise dimensionality is comparable to the hidden dimension\. To resolve this, we simply incorporate a term containing the raw noisy input into the final layer\. This architectural bypass enables the backbone to focus on high\-level semantics while the final layer efficiently reconstructs the minor velocity field\. Our method successfully revives $v$\-prediction and achieves competitive performance on ImageNet $256\\times256$ dataset compared to $x$\-prediction baselines\.

## Reliability\-Coupled Manifold\-Aware Diffusion for Missing\-Modality Inference

**Authors:** Yiming Ren; Yuhao Fang; Qing Zhou; Ming Li; Ye Zhang; Zijian Wang; Yao Lu; Chun Li

**ID:** 156117\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156117

[Paper](<https://openreview.net/forum?id=0GkSxMZdx4>) | [PDF](<https://openreview.net/pdf?id=0GkSxMZdx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156117>)

In real\-world multimodal time\-series inference, a common practice is completion–inference decoupling: missing modalities are heuristically imputed and then passed to deterministic fusion and decision making\. We show that this chained design yields unreliable predictions under missingness, noise, and temporally varying modality reliability, because imputation errors propagate without uncertainty feedback\. Through theoretical and empirical analysis, we identify latent\-consistent completion and evidential reliability modeling as two key ingredients for robust multimodal inference\. Building on these insights, we propose MD2E\-MI, a manifold\-aware diffusion\-based imputation and evidence\-driven multimodal inference framework that couples diffusion\-based completion with uncertainty\-aware inference in a single pathway\. Experiments demonstrate stable performance across diverse missingness and noise regimes, while providing interpretable, temporally varying reliability estimates\.

## Permutation\-Invariant Spectral Learning via Dyson Diffusion

**Authors:** Tassilo Schwarz; Cai Dieball; Constantin Kogler; Renaud Lambiotte; Arnaud Doucet; Aljaz Godec; George Deligiannidis

**ID:** 150187\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150187

[Paper](<https://openreview.net/forum?id=k4MGmGsA9o>) | [PDF](<https://openreview.net/pdf?id=k4MGmGsA9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150187>)

Diffusion models are central to generative modeling and have been adapted to graphs by diffusing adjacency matrix representations\. The challenge of having up to $n\!$ such representations for graphs with $n$ nodes is only partially mitigated by using permutation\-equivariant learning architectures\. Despite their computational efficiency, existing graph diffusion models struggle to distinguish certain graph families and their spectra, unless graph data are augmented with ad hoc features\. This shortcoming stems from enforcing the inductive bias within the learning architecture\. In this work, we leverage random matrix theory to analytically extract the spectral properties of the diffusion process, allowing us to push most of the inductive bias from the architecture into the dynamics\. Building on this, we introduce the Dyson Diffusion Model, which employs Dyson's Brownian motion to capture the spectral dynamics of an Ornstein\-Uhlenbeck process on the adjacency matrix\. Furthermore, conditioned on the spectral dynamics, we formulate a Lie group diffusion, appropriately modeling the remaining degrees of freedom\. Strikingly, the resulting learning problem becomes permutation invariant at the Lie algebra level\. We demonstrate that the Dyson Diffusion Model learns graph spectra accurately and outperforms existing graph diffusion models\.

## Latent Riemannian Flow Matching for Geometry\-Grounded 3D Foundation Models

**Authors:** Lisa Weijler; Irene Ballester Campos; Guofeng Mei; Tolga Birdal; Pedro Hermosilla

**ID:** 152188 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uta0YOIusF>) | [PDF](<https://openreview.net/pdf?id=Uta0YOIusF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152188>)

Geometric foundation models, such as the Visual Geometry Grounded Transformer \(VGGT\), provide strong 3D priors from unposed images\. However, such models operate purely in a feed\-forward, deterministic regime, \\ie\~they cannot generate plausible geometry beyond what the input views directly support\. Generative models for 3D scenes, on the other hand, must rely on strong geometric priors to produce coherent outputs from sparse inputs\. We bridge these two paradigms by performing flow matching directly in VGGT's latent space, leveraging its learned 3D priors without committing to any explicit downstream representation such as Gaussians, meshes, or video\-VAE latents\. This requires respecting the latent geometry: VGGT tokens occupy a product of high\-dimensional hyperspheres on which standard Euclidean flow matching fails\. We address this with a Riemannian Flow Matching framework defined on a product manifold of four hyperspheres, aligned with VGGT's multi\-scale encoder, which keeps generated tokens on the valid data manifold required by the frozen decoding heads\. On RealEstate10K and ScanNet\+\+, our method achieves strong performance against recent scene generation baselines in both per\-view 3D geometry and appearance, establishing latent\-space flow matching on geometric foundation models as a viable paradigm for 3D generation\.

## Rethinking Memorization–Generalization Trade\-Off in Generative Models

**Authors:** Jiseok Chae; Kyuwon Kim; Donghwan Kim

**ID:** 151281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bYEt73s3Gs>) | [PDF](<https://openreview.net/pdf?id=bYEt73s3Gs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151281>)

Standard generative models face a memorization\-\-generalization trade\-off, that is avoiding memorization is considered necessary for generalization\. In supervised learning, however, recent studies show that highly overparametrized models can memorize \(interpolate\) training data while still generalizing well, a phenomenon known as benign overfitting\.  Motivated by this, we investigate whether generative models can similarly bypass the trade\-off and generalize while interpolating\.  Generative models should minimize the distance between the true data distribution and the distribution induced by mapping the full latent distribution through the generator\. But since the true distribution is inaccessible, existing models instead minimize empirical risk with respect to the training distribution\. Under this standard formulation, exact empirical\-risk minimization forces the generator to produce only training samples\. To address this issue, we consider an alternative empirical risk based on presampled latent variables\. Our experiments demonstrate that the resulting presampled\-latent version of the flow matching model exhibits benign overfitting on standard image benchmarks, such as MNIST and CIFAR\-10\.      As a theoretical proof of concept, we recast generative modeling as a regression problem and extend existing benign overfitting theory to our setting\.      Together, these results establish, for the first time, that benign overfitting can occur in generative models\.

## Debiased DPO for Diffusion Models

**Authors:** Duc Khiem Pham; Quang Nguyen; Tung D Nguyen; Jingsen Zhu; Michele Santacatterina; Dimitris Metaxas; Ramin Zabih

**ID:** 149883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVm3paaO7B>) | [PDF](<https://openreview.net/pdf?id=mVm3paaO7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149883>)

Direct Preference Optimization \(DPO\) enables offline alignment of diffusion models from preference pairs without explicit reward modeling, but scaling DPO requires large amounts of expensive human preference data\. In this paper, we consider a semi\-supervised approach where only a small subset of preference pairs is annotated by humans, while the remaining \(much larger\) pool is unlabeled and annotated by inexpensive synthetic feedback e\.g\., vision\-language models scoring image pairs or self\-training from the current model\. However, such synthetic supervision is not a replacement for human judgments: it can be systematically misaligned, so naively mixing human and synthetic preferences will yield misaligned inference\. We introduce DeDPO, a debiased objective that integrates a doubly robust estimator from causal inference into DPO to correct synthetic\-label misalignment while preserving the simplicity of DPO\. Experiments show improved label efficiency and robustness to synthetic labeler quality, allowing DeDPO to outperform standard DPO under the same human\-label budget and to approach fully human\-supervised performance, despite using four times fewer human\-labeled data\.

## Towards Unified Memory Adaptation for LLM Agents: Textual, Latent, and Parametric Pathways

**Authors:** Rui Li; Haoran Tan; Xiaohe Bo; Yiqun Chen; Meizhi Zhong; Xiaochi Wei; Yan Gao; YIWU; Yao Hu; Xu Chen

**ID:** 155155 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7s3OkqG5nf>) | [PDF](<https://openreview.net/pdf?id=7s3OkqG5nf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155155>)

Equipping large language models \(LLMs\) with external memory banks is a critical stepping stone towards autonomous agents\. Current approaches have concentrated substantial efforts on the design of memory construction and retrieval mechanisms\. However, they typically relegate memory utilization to the simplistic concatenation of explicit texts for LLM inputs, thereby remaining constrained by the fundamental bottlenecks of context overload and semantic dilution\. In response to this dilemma, we present UniMem, a unified memory adaptation framework that empowers LLM agents to holistically harness memory information, extending beyond textual signals into latent and parametric dimensions\. Operating along these pathways, UniMem not only elevates contextual density through latent compression, but also facilitates semantic grounding via parametric modulation\. Extensive experiments show that UniMem \(I\) achieves superior performance across diverse benchmarks, including long\-term dialogue, memory personalization, and open\-domain question answering; and \(II\) can seamlessly complement prevailing memory construction and retrieval mechanisms for synergistic enhancements\.

## LayoutBridge: Anisotropic Brownian Bridges for Public Indoor Floorplan Generation

**Authors:** Tongyang Dai; Ruipeng Gao; Feng Liu; Wenqiu Bai; Lingkun Li; Qiang Ni

**ID:** 152710 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QyJ8TS7cW8>) | [PDF](<https://openreview.net/pdf?id=QyJ8TS7cW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152710>)

Compared with residential layouts, public indoor floorplans present more substantial challenges with open corridors, complex room relations, and non\-Manhattan geometries, which do not conform to conventional residential\-layout assumptions\. Consequently, existing methods are prone to boundary discontinuities, leading to fragmented corridors and irregular wall structures\. To address the above issues, we propose \\textit\{LayoutBridge\}, a structure\-conditioned generative framework for floorplan production\. By moving beyond the Manhattan\-geometry assumptions commonly adopted in residential scenarios, LayoutBridge reformulates the task as a latent\-space Brownian\-bridge diffusion process from structural constraints to target layouts\. We have constructed our PISF dataset with 3,517 representative floorplans in public indoor spaces, and LayoutBridge reduces FID by 132\.35 and improves BIoU by 15\.52\\% over the latest image\-to\-image baselines\. Regarding the residential benchmarks MSD and RPLAN, it also reduces FID by at least 2\.53 compared with state\-of\-the\-art\. These results demonstrate its potential for scalable automated architectural design\. Code implementing the proposed method is publicly available at \\href\{http://github\.com/lalalalaxxx/LayoutBridge\}\{http://github\.com/lalalalaxxx/LayoutBridge\}\.

## You Can’t Have It Both Ways: Concept Entanglement Limits Diffusion Model Unlearning

**Authors:** Yian Wang; Ali Ebrahimpour\-Boroojeny; Hari Sundaram; Varun Chandrasekaran

**ID:** 155144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=81WMbko8Qr>) | [PDF](<https://openreview.net/pdf?id=81WMbko8Qr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155144>)

Concept unlearning in text\-to\-image diffusion models aims to suppress a target concept, e\.g\., \\texttt\{horse\}, while preserving the model's ability to generate semantically related but distinct content, like \\texttt\{donkey\}\. Yet existing methods either leak under indirect prompts or visibly degrade remaining concepts\.  \{\\em We show that these failure modes arise naturally from overlapping concept representations\.\} Our main contribution is demonstrating that the observed trade\-offs stem from the geometry of concept representations, rather than from weaknesses in any particular algorithm\. We support this claim through both theoretical analysis and empirical observations\. By formalizing concepts as activation\-space regions, we show that overlap between a target and other concepts lower\-bounds the unavoidable degradation on those other concepts when the target is erased\.  Our analysis suggests that strong erasure and preservation become fundamentally coupled when concepts occupy overlapping activation regions, with the trade\-off scaling linearly in the degree of overlap\. We verify this trade\-off on seven unlearning methods spanning fine\-tuning, adversarially\-robust fine\-tuning, and inference\-time interventions\. Averaged across target concepts, STEREO almost completely suppresses the target concept under indirect prompts but cuts the model's ability to generate semantically related concepts by more than 75\\%\. On the other hand, sparse inference\-time methods \(SAeUron, SEOT\) better preserve utility but leave substantial target leakage\. The trade\-off is steep for concepts whose internal representations heavily overlap with their evaluated semantic neighborhoods, \(e\.g\., \\texttt\{horse\} with \\texttt\{cat\}, \\texttt\{dog\}, and \\texttt\{bear\}\) and milder for \\texttt\{castle\}, which is comparatively less entangled within our concept pool and probe layer in activation space\. Across targets, damage to related concepts scales monotonically with our activation\-overlap measure\. These results suggest that perfect unlearning is the wrong target for entangled concepts\. The field should evaluate on the Pareto frontier our theorem establishes; current benchmarks, which decouple unlearning accuracy from utility preservation, hide this trade\-off and need to be revised\.

## Horizontal Diffusion Models: Score\-based Generative Modeling on Frame\-Connection Geometry

**Authors:** Sungwoo Park

**ID:** 154154 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fr0DlZvA04>) | [PDF](<https://openreview.net/pdf?id=Fr0DlZvA04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154154>)

Geometric modeling has become an essential paradigm in AI for Science, where data often inhabit intrinsically curved or structured spaces\. However, existing manifold generative models often rely on closed\-form or tractable access to global geometric primitives, such as geodesic distances, parallel transport, or spectral decompositions, which are rarely available beyond canonical geometries\. To overcome this limitation, we propose Horizontal Diffusion Models \(HDMs\), a score\-based generative framework defined on the orthonormal frame bundle of a Riemannian manifold\. Instead of requiring global geometric operations, HDM lifts Euclidean diffusion processes through the Levi\-Civita horizontal distribution, using only local metric and connection information while preserving intrinsic manifold geometry\. This construction allows standard Euclidean score networks to be lifted into geometry\-consistent and gauge\-equivariant horizontal vector fields, bypassing the need for manifold\-specific neural architectures\. We further derive a horizontal KL objective that reduces to a Euclidean score\-matching loss and analyze the curvature\-dependent cost of the lift through a generalization bound\. Experiments on parametric surfaces and scientific datasets demonstrate high\-fidelity generation across diverse manifolds with nontrivial geometry and topology\.

## ReflectDrive\-2: Reinforcement\-Learning\-Aligned Self\-Editing for Discrete Diffusion Driving

**Authors:** Huimin Wang; Yue Wang; Bihao Cui; Pengxiang Li; Ben Lu; Mingqian Wang; Tong Wang; Chuan Tang; Teng Zhang; Kun Zhan

**ID:** 152356 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgXR6fi9CK>) | [PDF](<https://openreview.net/pdf?id=TgXR6fi9CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152356>)

_Abstract unavailable from the accessible public sources._

## Beyond ViT Tokens: Masked\-Diffusion Pretrained Convolutional Pathology Foundation Model for Cell\-Level Dense Prediction

**Authors:** Weiming Chen; Xitong Ling; Zhenyang Cai; Xidong Wang; Jiawen Li; Tian Guan; Benyou Wang; Yonghong He

**ID:** 148943 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0riwBjIls>) | [PDF](<https://openreview.net/pdf?id=u0riwBjIls>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148943>)

_Abstract unavailable from the accessible public sources._

## Contextual Flow Matching: Adaptive Step Selection in Flow Models for Efficient Visual Generation

**Authors:** Divya Jyoti Bajpai; Arun Verma; Manjesh Kumar Hanawal

**ID:** 148315 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yjB0PiXm3S>) | [PDF](<https://openreview.net/pdf?id=yjB0PiXm3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148315>)

Flow Matching enables high\-quality visual generation via continuous\-time dynamics, but inference remains costly due to multiple sequential function evaluations\. Existing acceleration methods reduce the number of function evaluations but often introduce additional training overhead, degrade quality, or fail to account for input\-dependent variability\. We propose an inference\-time method, CoFlow, that adaptively selects the step counts for each generation based on the prompt features\. Our context\-aware CoFlow is trained online with an unsupervised reward that balances efficiency and fidelity\. Our method is plug\-and\-play, requiring no retraining of the generative model\. It generalizes to image and video generation, achieving over $2\.5\\times$ speedup while preserving perceptual and semantic quality\. We also provide theoretical insights into the link between adaptive step allocation and discretization error\. The anonymized source code is available at \\url\{https://anonymous\.4open\.science/r/Contextual\_Flow\_Matching\-9970\}\.

## Principled Design of Diffusion\-based Optimizers for Inverse Problems

**Authors:** Julio Oscanoa; Irmak Sivgin; Cagan Alkan; Daniel Ennis; John Pauly; Mert Pilanci; Shreyas Vasanawala

**ID:** 154746 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BJ9BmUd5tV>) | [PDF](<https://openreview.net/pdf?id=BJ9BmUd5tV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154746>)

Score\-based diffusion models achieve state\-of\-the\-art performance for inverse problems, but their practical deployment is hindered by long inference times and cumbersome hyperparameter tuning\. While pretrained diffusion models can be reused across tasks without retraining, inference\-time hyperparameters such as the noise schedule and posterior sampling weights typically require ad\-hoc adjustment for each problem setup\. We propose principled reparameterizations that induce invariances, allowing the same hyperparameters to be reused across multiple problems without re\-tuning\. In addition, building on the RED\-diff framework, which reformulates posterior sampling as an optimization problem, we further develop the OptDiff pipeline\. OptDiff provides a simplified tuning framework that facilitates the integration of convex optimization tools to accelerate inference\.   Experiments on image reconstruction, deblurring, and super\-resolution show substantial speedups and improved image quality\.

## Discrete Diffusion Playground: A 2D Benchmark for Discrete Generative Models

**Authors:** Justin Shao; Sihyun Park; David Koes; Maria Chikina

**ID:** 139528 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KUMYilHjV5>) | [PDF](<https://openreview.net/pdf?id=KUMYilHjV5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139528>)

Discrete diffusion is a promising framework for categorical generative modeling, but current evaluation protocols often fail to reveal whether models have actually learned the target distribution\. We introduce the Discrete Diffusion Playground, a diagnostic benchmark that converts known 2D continuous distributions into binary token sequences through an exact discretized bijection\. This creates a rare setting in which models are trained on discrete sequences, but generated samples can be decoded back into 2D and compared directly against a known ground\-truth distribution\. The benchmark spans smooth Gaussian mixtures and tilted checkerboards with sharp boundaries, disconnected support, and coordinate\-dependent structure, allowing it to expose failures that are invisible in standard proxy metrics\. It supports exact grid divergences, Wasserstein distances, density visualizations, and nonparametric two\-sample tests, providing both quantitative evaluation and interpretable failure diagnosis\. Using this testbed, we show that masked diffusion models can learn meaningful adaptive reveal orders but remain less stable than autoregressive baselines on smooth targets and largely fail on tilted checkerboards, where autoregressive models preserve the target geometry\. Control experiments with reversed and interleaved token orderings show that autoregressive performance is not explained by favorable bit order alone\.The Playground provides a simple but stringent benchmark for stress\-testing discrete generative models and for developing evaluation metrics that detect real distributional mismatch rather than proxy performance\. Our code is available at https://anonymous\.4open\.science/r/DiscreteDiffusionPlayground\-0CCA/

## Primal\-Dual Flow Matching for Sample\-Wise Constrained Generation

**Authors:** Zhengyan Huan; Peter Y\. Lu; Shuchin Aeron

**ID:** 155433 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5hNRSOnqjv>) | [PDF](<https://openreview.net/pdf?id=5hNRSOnqjv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155433>)

We consider the problem of learning to generate data while satisfying a prescribed sample\-wise constraint with a user\-specified probability of constraint satisfaction\. Starting with a population\-level constrained negative log\-likelihood minimization and using a flow\-matching \(FM\) parameterization, under regularity assumptions and sufficient expressivity of the velocity field family, we derive guarantees on the probability of constraint satisfaction for the corresponding primal\-dual optimization algorithm\. We provide a practical implementation of this approach, called Primal\-Dual Flow Matching \(PDFM\), which has direct control over constraint satisfaction rate and requires only binary membership\-oracle feedback for constraint satisfaction, avoiding the need for differentiable distances, projections, or special structure of the constraint set, such as convexity\. We show that compared to existing methods, PDFM achieves higher constraint satisfaction rates while maintaining competitive distribution fidelity\.

## Structured Masked Diffusion for Joint Multiuser Decoding

**Authors:** Taekyun Lee; Jiyoung Yun; Jeffrey Andrews; Hyeji Kim

**ID:** 153855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IE05uNcyaB>) | [PDF](<https://openreview.net/pdf?id=IE05uNcyaB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153855>)

In joint multiuser decoding, a receiver recovers a set of messages from a single noisy aggregate of many simultaneous transmissions\. Classical decoders rely on rule\-based mechanisms such as successive interference cancellation, joint belief propagation, or list recovery, all of which become brittle or expensive as ambiguity increases\.  We propose CIDER, a learned multiuser decoder with masked\-diffusion refinement steps\. CIDER uses demixing to prevent duplicate\-row collapse and uses parity\-aware propagation to provide soft guidance from the code constraints\. In higher\-load regimes, we further improve reliability via a lightweight quality\-guided remasking step that selectively re\-decodes low\-confidence sequences\. On commonly used error correcting codes, CIDER matches or improves on FFT\-accelerated joint belief propagation\-style decoding in symbol error rate while running more than $6\\times$ to over $100\\times$ faster, with the speedup widening as the blocklength grows\. Code is available at https://anonymous\.4open\.science/r/CIDER\_2026/\.

## RePiD: Efficient Recursive Pixel\-Space Diffusion via Hierarchical Patch Denoising

**Authors:** Duoyou Chen; Yaxue Guo; Can Zhang; Cheng Chen

**ID:** 155797 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2ouTDcz9tp>) | [PDF](<https://openreview.net/pdf?id=2ouTDcz9tp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155797>)

_Abstract unavailable from the accessible public sources._

## IdealCache: Rethinking Cache Scheduling in Diffusion Transformers via Ideal Trajectories

**Authors:** shang xue; Li Zhu; Ping Chen

**ID:** 155683 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3jq55sxmcq>) | [PDF](<https://openreview.net/pdf?id=3jq55sxmcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155683>)

_Abstract unavailable from the accessible public sources._

## GenRM\-Flow: Generators are Process\-aware Reward Models in Flow Matching

**Authors:** Siming Fu; Zheming Fu; Ruizhe He; Zeyue Xue; Fengkai Liu; Yufei Jiao; Jie Huang; Xiaoxiao Ma; Xuan Yang; Lihui Luo

**ID:** 151044 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dPSEe9I3nw>) | [PDF](<https://openreview.net/pdf?id=dPSEe9I3nw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151044>)

_Abstract unavailable from the accessible public sources._

## UDT: Reconciling U\-Nets and Diffusion Transformers with Data\-Adaptive Token Reduction

**Authors:** Junno Yun; Yasar Utku Alcalar; Mehmet Akcakaya

**ID:** 155440 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5aiycPi3Qu>) | [PDF](<https://openreview.net/pdf?id=5aiycPi3Qu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155440>)

_Abstract unavailable from the accessible public sources._

## Boule or Baguette? A Study on Task Topology, Length Generalization, and the Benefit of Reasoning Trace

**Authors:** William Tong; Ege Çakar; Cengiz Pehlevan

**ID:** 151781 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y4Z2nhxap9>) | [PDF](<https://openreview.net/pdf?id=Y4Z2nhxap9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151781>)

_Abstract unavailable from the accessible public sources._

## Logit\-Conditioned Diffusion Decoding for Frozen Discrete\-Token VLMs

**Authors:** Ji Woo Hong; Hee Suk Yoon; Gwanhyeong Koo; Eunseop Yoon; SooHwan Eom; Qi Dai; Chong Luo; Chang Yoo

**ID:** 153860 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ICK4e2LwDl>) | [PDF](<https://openreview.net/pdf?id=ICK4e2LwDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153860>)

_Abstract unavailable from the accessible public sources._

## MAGNET: Manifold\-Aware Graph Diffusion Network for Connectome Generation

**Authors:** Protyay Dey; Ayush Roy; Hyuna Cho; Won Hwa Kim; Vishnu Lokhande

**ID:** 152384 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TUugQGbOfW>) | [PDF](<https://openreview.net/pdf?id=TUugQGbOfW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152384>)

_Abstract unavailable from the accessible public sources._

## UniFlow\-Audio: Unified Flow Matching for Audio Generation from Omni\-Modalities

**Authors:** Xuenan Xu; Jiahao Mei; Ye Tao; Zihao Zheng; Zeyu Xie; Yaoyun Zhang; Haohe Liu; Yuning Wu; Ming Yan; Mengyue Wu; Wen Wu; Chao Zhang

**ID:** 151328 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLR3wcXBSv>) | [PDF](<https://openreview.net/pdf?id=bLR3wcXBSv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151328>)

_Abstract unavailable from the accessible public sources._

## When Does Flow Matching Help Deterministic Multimodal Prediction: A Spatial Transcriptomics Study

**Authors:** Haoran Xu; Wei Yuan; Xiao Han

**ID:** 150617 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=goLFZzz8Fi>) | [PDF](<https://openreview.net/pdf?id=goLFZzz8Fi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150617>)

_Abstract unavailable from the accessible public sources._

## Flash\-dLLM: IO\-Aware KV Caching and Parallel Decoding for Fast, Memory\-Efficient Diffusion LLMs

**Authors:** Quan Nguyen\-Tri; Mukul Ranjan; Zhiqiang Shen

**ID:** 152191 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UsksaoFwxx>) | [PDF](<https://openreview.net/pdf?id=UsksaoFwxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152191>)

_Abstract unavailable from the accessible public sources._

## Fast\-dLLM\+\+: Fr\\'\{e\}chet Profile Decoding for Faster Diffusion LLM Inference

**Authors:** Siva Rajesh Kasa; Yasong Dai; Sumit Negi; Hongdong Li

**ID:** 154725 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BTfatNCwhE>) | [PDF](<https://openreview.net/pdf?id=BTfatNCwhE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154725>)

_Abstract unavailable from the accessible public sources._

## Mamba Flow Matching Neural Processes: Linear\-Time Inference for Irregularly Observed Spatial Fields

**Authors:** Cosmo Santoni; Giovanni Charles; Timothy James Hitge; Oliver Watson; Elizaveta Semenova

**ID:** 150767 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fVeT6lAKvN>) | [PDF](<https://openreview.net/pdf?id=fVeT6lAKvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150767>)

_Abstract unavailable from the accessible public sources._

## Ergodic Trajectory Design by Learned Pushforward Maps: Provable Coverage via Conditional Flow Matching

**Authors:** Ehsan Aghazadeh; Masoud Malekzadeh; Ahmad Ghasemi; Hossein Pishro\-Nik

**ID:** 148507 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xKCytZZNNd>) | [PDF](<https://openreview.net/pdf?id=xKCytZZNNd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148507>)

_Abstract unavailable from the accessible public sources._

## Discrete Diffusion Models Exploit Asymmetry to Solve Lookahead Planning Tasks

**Authors:** Itamar Trainin; Shauli Ravfogel; Omri Abend; Amir Feder

**ID:** 151112 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ctX2gxgiSE>) | [PDF](<https://openreview.net/pdf?id=ctX2gxgiSE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151112>)

_Abstract unavailable from the accessible public sources._

## Rethinking Causal Action Tokenization with Conditional Annealing in Flow Matching

**Authors:** Chenyu Zhang; Yuhang Cao; Yingxi Lu; Daru Du; Jing Shao; Jiajun Liu; Ruoqu Chen; liu cao; Yicheng Liu; Hang Zhao; Mengdi Xu

**ID:** 154643 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5h9gDqAsN>) | [PDF](<https://openreview.net/pdf?id=C5h9gDqAsN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154643>)

_Abstract unavailable from the accessible public sources._

## DSSA: Dynamic Sparse Semantic Anchoring for Purifying Protective Perturbations against Diffusion Models

**Authors:** Weiwei Tan; Rui Wang; Lihua Jing; Yanjun Zhang; Runbo Li; Zhishen Wang; Leo Yu Zhang

**ID:** 153253 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=McpuicfpXa>) | [PDF](<https://openreview.net/pdf?id=McpuicfpXa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153253>)

_Abstract unavailable from the accessible public sources._

## Neural Galerkin Normalizing Flows for Bayesian Inference of Diffusions with Inaccessible Boundaries

**Authors:** Riccardo Saporiti; Fabio Nobile

**ID:** 155213 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Qy5PJB1Db>) | [PDF](<https://openreview.net/pdf?id=7Qy5PJB1Db>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155213>)

_Abstract unavailable from the accessible public sources._

## Hypergraph Generation via Structured Stochastic Diffusion

**Authors:** Christopher Nemeth

**ID:** 148881 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uTrWNzumkt>) | [PDF](<https://openreview.net/pdf?id=uTrWNzumkt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148881>)

Hypergraphs model higher\-order interactions, but realistic hypergraph generation remains difficult because incidence, hyperedge\-size heterogeneity, and overlap structure are not faithfully captured by pairwise reductions\. We propose HEDGE, a generative model defined directly on relaxed incidence matrices via a structured stochastic diffusion\. The forward process combines a hypergraph\-specific two\-sided heat operator with an Ornstein\-\-Uhlenbeck component, preserving structure\-aware noising near the data while yielding an explicit Gaussian terminal law\. Conditional on an observed hypergraph, this forward process is linear\-Gaussian, so conditional means, covariances, scores, and reverse\-drift targets are available in closed form\. We therefore learn a permutation\-equivariant state\-only reverse\-drift field in incidence space by regressing onto exact conditional targets, and generate samples by simulating a learned reverse\-time SDE from the Gaussian base law\. We establish exactness in the ideal state\-only setting together with finite\-horizon stability guarantees, and empirically show improved hypergraph generation quality relative to strong baselines\.

## The Reward Was in Your Data All Along: Correcting Flow Matching with Discriminator\-Guided RL\.

**Authors:** Nicolas Beltran Velez; Felix Friedrich; Xiaofeng Zhang; Reyhane Askari Hemmat; Xiaochuang Han; Adriana Romero\-Soriano; Michal Drozdzal

**ID:** 151614 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZEUZR2yKyB>) | [PDF](<https://openreview.net/pdf?id=ZEUZR2yKyB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151614>)

Score\- and flow\-matching models often rely on preference\-based reinforcement learning for two purposes: aligning with subjective preferences and, surprisingly, recovering properties\-\-\-such as visual realism and coherent object structure\-\-\-that matching\-based training is intended to learn from the data itself\. We argue that this reflects a structural mismatch\. Matching losses measure $\\ell\_2$ regression error on the velocity or score field under training\-time marginals, a proxy poorly aligned with the visual and semantic properties that determine sample quality at inference\. Given a reward aligned with these properties, RL sidesteps the mismatch by evaluating the model on its own samples and following the reward landscape directly\. The challenge is to obtain such a reward without relying on human references, which are expensive and conflate data realism with annotator inclinations\. We propose Discriminator\-Guided RL \(DRL\)\. DRL trains a discriminator to separate data from base\-model samples in a pretrained representation space and uses its logit as the reward in KL\-regularized RL\. The pretrained space restricts the discriminator to perceptually meaningful directions, and the logit estimates the log\-likelihood ratio between data and model, which is the optimal reward for targeting the data distribution\. Across SiT, JiT, REPA, and RAE, DRL reduces guidance\-free FID \(e\.g\., $9\.38 \\to 2\.62$ on SiT\) and semantic\-space FD \(e\.g\., $88\.2 \\to 19\.3$ on DINOv3 for SiT\), with consistent gains across all backbones, and improves human\-preference rewards without training on them\. It also yields a better Pareto frontier between preference reward and image fidelity under subsequent preference\-based post\-training, increasing alignment while reducing low\-level artifacts such as oversaturation and excessive brightness\.

## Path\-independent Flow Matching for Multi\-parameter Generative Dynamics

**Authors:** Francisco Téllez; Amirhossein Zamani; Philippe Martin; Shuang Ni; Guy Wolf; Eugene Belilovsky; Sina Sanjari; Yanlei Zhang

**ID:** 154920 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9yq2JAPSPm>) | [PDF](<https://openreview.net/pdf?id=9yq2JAPSPm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154920>)

Flow Matching is a powerful framework for learning transport maps between probability distributions\. Yet its standard single\-parameter formulation is not designed to capture multi\-parameter variations where the resulting transport should be path\-independent\. Path independence is crucial because it ensures that transformations depend only on the initial and target distributions, not on the specific path\. In this work, we introduce \\textit\{Path\-independent Flow Matching \(PiFM\)\}, a method for learning vector fields whose induced flows yield path\-independent transport between distributions\. We show that PiFM generalizes Flow Matching to higher\-dimensional parameter domains while enforcing structural conditions that ensure consistency of composed transformations\. In addition, we show that, under suitable assumptions, PiFM approximates the Wasserstein barycenter, linking the framework to a notion of distributional interpolation\. To enable practical training, we propose a tractable, simulation\-free objective that regresses onto multi\-parameter conditional probability paths\. We showcase empirically that PiFM outperforms other approaches on both synthetic and real world data in interpolating path\-independent trajectories and generating desired out of distribution samples\. Our code is available at \\url\{https://anonymous\.4open\.science/r/Pi\_flow\_matching\-C83F/\}\.

## LangFlow: Continuous Diffusion Rivals Discrete in Language Modeling

**Authors:** Yuxin Chen; Chumeng Liang; Hangke Sui; Ruihan Guo; Chaoran Cheng; Jiaxuan You; Ge Liu

**ID:** 150769 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fUzRdnKBK4>) | [PDF](<https://openreview.net/pdf?id=fUzRdnKBK4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150769>)

Continuous diffusion has served as a foundation for high\-fidelity, controllable, and few\-step generation across continuous data modalities such as images, videos, and molecular structures\. However, in language modeling, prior continuous diffusion language models \(DLMs\) lag behind discrete counterparts\. Existing categorical and simplex\-based approaches operate over extremely large and sparse language spaces, while prior embedding\-space approaches avoid this sparsity but lack a well\-selected design space\. In this work, we close this gap with \*\*LangFlow\*\* by connecting embedding\-space DLMs to Flow Matching, alongside three key innovations: \(1\) we derive a novel ODE\-based NLL bound for principled evaluation of continuous flow\-based language models; \(2\) we propose an information\-uniform principle for setting the noise schedule, which motivates a learnable noise scheduler based on a Gumbel distribution; and \(3\) we revise prior training protocols by incorporating self\-conditioning, which improves both likelihood and sample quality for embedding\-space DLMs and behaves differently from its use in discrete diffusion\. Putting everything together, LangFlow is competitive with top discrete DLMs on both perplexity \(PPL\) and generative perplexity \(Gen\. PPL\), reaching a PPL of \*\*30\.0\*\* on LM1B and \*\*24\.6\*\* on OpenWebText\. It also exceeds autoregressive baselines in zero\-shot transfer on 4 out of 7 benchmarks\. As the first continuous DLM shown to rival discrete diffusion in both generative quality and perplexity, LangFlow provides clear evidence that continuous diffusion is a promising paradigm for language modeling\. Code will be released upon acceptance\.

## FMMI: Flow Matching Mutual Information Estimation

**Authors:** Ivan Butakov; Alexander Semenenko; Valeriia Kirova; Ivan Oseledets; Alexey Frolov

**ID:** 148155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ztJ2dmj0k5>) | [PDF](<https://openreview.net/pdf?id=ztJ2dmj0k5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148155>)

We introduce a novel Mutual Information \(MI\) estimator that fundamentally reframes the discriminative approach\. Instead of training a classifier to discriminate between joint and marginal distributions, we learn a normalizing flow that transforms one into the other\. This technique produces a computationally efficient and precise MI estimate that scales well to high dimensions and across a wide range of ground\-truth MI values\.

## Reversing the Roles of Signal and Noise: Modeling Noise in Astronomical Images without Paired Data

**Authors:** Drew Tufto; Daniel Muthukrishna

**ID:** 150362 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=idM55TPMck>) | [PDF](<https://openreview.net/pdf?id=idM55TPMck>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150362>)

Many scientific instruments produce structured noise that contaminates the signal of interest and cannot be observed in isolation, ruling out standard supervised denoising\. We propose BEAM \(Background Estimation via Additive Modeling\), a generative framework for modeling complex noise in these settings\. As ground truth noise observations are unavailable, BEAM learns a generative model of the clean signal and uses it to score candidate noise estimates by how plausible the underlying signal looks\. Score matching on signal data turns this into a tractable likelihood that we sample from with Langevin dynamics, which refines a coarse classical estimate of the noise into a more accurate one\. We further show that when metadata governing the noise is known in advance, a separate conditional flow model predicts the noise from that metadata alone, enabling pre\-observation forecasting of the noise\. We instantiate BEAM on stray light in NASA's Transiting Exoplanet Survey Satellite \(TESS\), where contamination from the Earth and Moon obscures stellar signals\. BEAM produces cleaner stray light estimates than the filtering tool used in current TESS pipelines and forecasts stray\-light contamination across the observing window for the interstellar comet 3I/ATLAS using only spacecraft\-\-Earth\-\-Moon geometry, supporting prospective scheduling of time\-critical observations and a path to recovering faint signals that current pipelines discard\.

## Metric Depth Estimation from Arbitrarily Degraded Low\-Resolution Depth Prompts

**Authors:** Kun Wang; Yun Zhu; Pan Zhou; Na Zhao

**ID:** 153483 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L2KwaZaLjB>) | [PDF](<https://openreview.net/pdf?id=L2KwaZaLjB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153483>)

We propose AdaDS, a generalizable framework for prompted metric depth estimation, which estimates high\-resolution metric depth from images and arbitrarily degraded low\-resolution depth prompts\. This setting is commonly studied as depth super\-resolution, where existing methods typically regress depth values directly and often exhibit artifacts under severe or unknown depth degradation\. In contrast, AdaDS exploits the contraction property of Gaussian smoothing: as noise accumulates in the forward diffusion process, the distributional discrepancy between degraded depth prompts and their high\-quality counterparts progressively diminishes, eventually approaching an isotropic Gaussian prior\. Leveraging this property, AdaDS estimates refinement uncertainty to adaptively select a starting timestep in the reverse diffusion trajectory, and subsequently injects tailored noise to place the intermediate sample in a high\-probability region of the target posterior distribution\. This strategy enables the generative prior of a pre\-trained diffusion model to dominate the estimation process even when upstream prompt refinements are imperfect\. Extensive experiments on real\-world and synthetic benchmarks demonstrate AdaDS's superior zero\-shot generalization and robustness to diverse degradation patterns compared with state\-of\-the\-art methods\.

## Beckmann Transport Models: From Autonomous Flows to One\-Step Maps

**Authors:** Lee Kit; Florentin Coeurdoux; Peter Potaptchik; Yilun Du; Michael Albergo; Eric Vanden\-Eijnden

**ID:** 154577 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CXIBpRIEL7>) | [PDF](<https://openreview.net/pdf?id=CXIBpRIEL7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154577>)

We propose an instantiation of flow matching that relies on a time\-independent velocity field \(an \\emph\{autonomous flow\}\) to exactly map between two distributions, so long as the target is singular, i\.e\.\\ supported on a lower\-dimensional data manifold\. We also show that the one\-step generative map associated with this flow is the unique solution of a simple conservation equation, which can be used to learn the map directly from samples\. These autonomous flows and maps give a dynamical meaning to the flux constraint of Beckmann's transportation problem\. Their construction provides a unifying framework that recovers, for instance, the closed\-form Poisson\-flow generative model and equilibrium matching with a quadratic flow\-matching regression loss\. We illustrate how this theory corrects inconsistencies in existing methods and improves their performance on large\-scale image generation\.

## Learning Unbiased Permutations via Flow Matching

**Authors:** Yimeng Min; Carla Gomes

**ID:** 155726 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3OprvEHAw6>) | [PDF](<https://openreview.net/pdf?id=3OprvEHAw6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155726>)

Learning permutations is fundamental to sorting, ranking, and matching, but existing differentiable methods based on entropy\-regularized Sinkhorn produce a single softened solution and collapse under ambiguity\. We present PermFlow, a conditional flow matching framework that operates directly on the affine subspace of matrices with unit row and column sums\. A closed\-form tangent\-space projector preserves these constraints exactly along every trajectory, by construction rather than through iterative correction, and a nearest\-target coupling routes distinct noisy initializations toward distinct valid permutations\. The result is a model that captures multimodal permutation distributions rather than collapsing them to a single mode\. On a visual sorting task with blended\-digit ambiguity and a symmetric linear assignment problem, PermFlow achieves high accuracy on unambiguous inputs and recovers both valid permutations under ambiguity, where Sinkhorn\-based baselines structurally fail\.

## Unified Generative\-Predictive Modeling for 4D Scene Understanding

**Authors:** Amani Kiruga; Zhiyi Li; Ruojin Cai; Hansen Lillemark; Xiaoshan Wu; Ayush Tewari; Yilun Du

**ID:** 155625 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4Br2rbkC6J>) | [PDF](<https://openreview.net/pdf?id=4Br2rbkC6J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155625>)

Understanding 4D scenes is a core challenge in visual intelligence, requiring models to jointly capture scene geometry, appearance, and dynamics from partial observations\.  Existing approaches, however, are subdivided into feedforward models that are used for direct geometric prediction and generative models for visual synthesis\. We propose a unified generative\-predictive framework for 4D scene understanding that jointly models RGB video and geometric representations such as depth and camera pose with a single joint generative model\.  Our generative formulation enables us to learn from diverse, heterogeneous datasets with different subsets of geometric and visual annotations, and enables us to condition on arbitrary subsets of inputs, allowing a single model to perform cross\-modal generation, geometric prediction, and future scene inference from partial observations\.  In addition, our generative approach enables test\-time search over multiple candidate scene completions, improving geometric prediction from sparse observations\. Overall, we illustrate the efficacy of our generative\-predictive framework on a suite of generation and prediction tasks\.

## Sparsely Supervised Diffusion

**Authors:** Wenshuai Zhao; Zhiyuan Li; Yi Zhao; Mohammad Vali; Martin Trapp; Joni Pajarinen; Juho Kannala; Arno Solin

**ID:** 155610\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155610

[Paper](<https://openreview.net/forum?id=4HalTYbzQG>) | [PDF](<https://openreview.net/pdf?id=4HalTYbzQG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155610>)

Diffusion models have shown remarkable success across a wide range of generative tasks\. However, they often suffer from spatially inconsistent generation, arguably due to excessive correlations learned by the model\. This can produce samples that are locally plausible but globally inconsistent\. We propose a principled method to mitigate this issue\. Our method, sparsely supervised diffusion \(SSD\), is a simple yet effective masking framework that can be implemented with only a few lines of code\. We analytically show that SSD fundamentally alters diffusion model training by modifying the spectrum of the data covariance and that it suppresses correlations in the data covariance matrix\. Experiments show that our method more accurately approximates the underlying population score function, reduces memorization on small datasets, and promotes the use of essential contextual information during generation\. Moreover, even when up to 98\\% of pixels are masked, it achieves competitive FID scores across a range of datasets and, importantly, avoids the training instability commonly observed on small datasets\.

## ELF: Embedded Language Flows

**Authors:** Keya Hu; Linlu Qiu; Yiyang Lu; Hanhong Zhao; Tianhong Li; Yoon Kim; Jacob Andreas; Kaiming He

**ID:** 148278\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148278

[Paper](<https://openreview.net/forum?id=z3I6Aj563f>) | [PDF](<https://openreview.net/pdf?id=z3I6Aj563f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148278>)

Diffusion and flow\-based models have become the de facto approaches for generating continuous data, e\.g\., in domains such as images and videos\. Their success has attracted growing interest in applying them to language modeling\. Unlike their image\-domain counterparts, today’s leading diffusion language models \(DLMs\) primarily operate over discrete tokens\. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain\. We propose Embedded Language Flows \(ELF\), a class of diffusion models in continuous embedding space based on continuous\-time Flow Matching\. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared\-weight network\. This formulation makes it straightforward to adapt established techniques from image\-domain diffusion models, e\.g\., classifier\-free guidance \(CFG\)\. Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps\. These results suggest that ELF offers a promising path toward effective continuous DLMs\.

## Uniform Diffusion Models revisited: Leave\-One\-Out Denoiser and Absorbing State Reformulation

**Authors:** Samson Gourevitch; Yazid Janati; Dario Shariatian; Umut Simsekli; Eric Moulines; Eric Xing; Alain Durmus

**ID:** 153715\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153715

[Paper](<https://openreview.net/forum?id=JJGRXH8cyk>) | [PDF](<https://openreview.net/pdf?id=JJGRXH8cyk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153715>)

Discrete diffusion models are typically trained by predicting the clean data given a noisy observation, which is then used with a certain choice of reverse transition parameterization\. Two choices coexist in the literature, which we refer to as marginalization and plug\-in\. Although they coincide in the case of masked diffusion models \(MDMs\), we revisit this question for uniform diffusion models \(UDMs\), where the distinction matters\. We show that the plug\-in parameterization is not optimized by the denoising posterior but by a \\emph\{leave\-one\-out\} posterior that removes the influence of the local observation\. We give a thorough characterization of the resulting training target, together with exact conversion formulas between the denoiser, the \\emph\{leave\-one\-out\} posterior, and the score\. As a by\-product, the leave\-one\-out characterization yields a Gibbs\-based predictor–corrector scheme at no additional training cost\.  We further propose an absorbing\-state construction of uniform diffusion, whose denoiser decomposes into simpler absorbing denoising posteriors, and which recovers the full UDM joint law following a simple resampling step\. Empirically, we show that these design choices interact strongly with optimization and generative quality; on language modeling, the \\emph\{leave\-one\-out\} denoiser improves over other parameterizations\.

## Show Me What You Don’t Know: Efficient Sampling from Invariant Sets for Model Validation

**Authors:** Armand Rousselot; Joran Wendebourg; Ullrich Köthe

**ID:** 149469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pslue396DW>) | [PDF](<https://openreview.net/pdf?id=pslue396DW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149469>)

The performance of machine learning models depends on discovering features in the data that are relevant to solving the given task while ignoring irrelevant variation\. To check and visualize whether this is the case, we propose ‘invariance auditing’, a diagnostic tool to analyze feature extractors\. Invariance auditing generates diverse inputs which all yield the same features as a given query input, and are therefore treated as identical by the model\. Using external knowledge about the task at hand, this enables assessing if the learned invariances do or do not conform to the task's required semantics\. Unlike existing work where a dedicated generative model is trained for each feature extractor, our algorithm is training\-free and exploits a pretrained diffusion or flow\-matching model to sample invariant inputs\. Our fiber loss \-\- which penalizes feature mismatch \-\- guides the denoising process so the output shares the same representation as the query input\. This replaces days of training with a single guided generation procedure at the same quality\. Experiments on popular datasets and model types demonstrate that our auditing method reveals invariances spanning very desirable and concerning behavior\. For instance, it detects cases where Qwen\-2B places patients with situs inversus \(heart on the right side\) in the same fiber as typical anatomy\.

## Efficient One\-to\-many Domain Translation via Diffusive Entropic Optimal Transport

**Authors:** David Vaneev; Ivan Shchekotov; Denis Rakitin; Dmitry Vetrov

**ID:** 150018 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lMokHneWkz>) | [PDF](<https://openreview.net/pdf?id=lMokHneWkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150018>)

Domain translation requires a delicate balance between realism, input\-output alignment, and output diversity\. Entropic optimal transport \(EOT\) provides a principled formulation of this trade\-off, but its practical use remains challenging\. Directly maximizing entropy of a stochastic transport plan requires evaluating log densities of generator\-induced distributions, which scales poorly with dimension\. In contrast, diffusion models make density information accessible in high dimensions through noising the corresponding distributions and approximating their score functions\. In this work, we introduce the diffusive entropy regularizer that measures diversity after progressively noising the conditional output distribution, making the entropy term compatible with score estimation\. The resulting \*\*Diffusive EOT\*\* retains the main theoretical guarantees of EOT: a unique solution, controllable diversity, and convergence to unregularized OT solution in the zero\-regularization limit\. We then introduce \*\*DM\-EOT\*\*, a practical algorithm for approximately solving the Diffusive EOT that combines diffusion\-based distribution matching with transport cost and diffusive entropy penalties\. DM\-EOT supports both fast one\-step generation and higher\-fidelity diffusion\-based multi\-step sampling\. Both variants achieve comparable or superior performance on unpaired domain translation benchmarks among one\-to\-many baselines with comparable inference cost and diversity\.

## Advanced Routing as Regularization Allocation for Efficient Diffusion Transformer Training

**Authors:** Qin MA; XIAOQI SUN; bo li; Yuquan Zhou; Weizhong Zhang

**ID:** 152568 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8tvv8HOHm>) | [PDF](<https://openreview.net/pdf?id=S8tvv8HOHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152568>)

Diffusion Transformers \(DiTs\) have achieved strong performance in visual generation, but their dense token processing leads to slow training convergence and high computational cost\. Recent token routing methods such as TREAD accelerate training by allowing a random subset of tokens to bypass intermediate layers\. It can be expected that carefully tuning the routing ratios over time steps or layers  can achieve more significant accelerations\. However, the theoretical mechanisms underlying stochastic routing remain underexplored, making the tuning of routing ratios intractable\. In this paper, we first theoretically show that stochastic token routing can be interpreted as an implicit route\-sensitivity regularizer\. Under this view, the routing ratio determines the strength of the induced regularization: larger routing ratios introduce stronger route\-induced perturbations and therefore stronger regularization pressure\. This further motivates a noise\-conditioned routing strategy\. In diffusion training, samples at larger timesteps contain heavier noise and often provide less stable gradient signals, suggesting that they may require stronger regularization\. We therefore assign larger routing ratios to higher\-noise samples, allowing the routing\-induced regularization strength to adapt to the noise condition\. Based on this insight, we propose \\emph\{Noise\-Aware Routing\}, which partitions samples within each mini\-batch into low\-, middle\-, and high\-noise regions and assigns progressively larger routing ratios to them\. This simple noise\-conditioned allocation synergistically bridges computational savings with enhanced model priors\. Extensive experiments on class\-conditional ImageNet generation show that our method accelerates training convergence and improves generation quality\. Noise\-Aware Routing achieves up to \\textbf\{15\.6\}$\\times$ and \\textbf\{20\}$\\times$ convergence speedups over DiT baselines—and outperforms TREAD—on ImageNet\-256 and ImageNet\-512, respectively, measured by the training iterations required to match our 400K\-step FID\. In the guided setting, our method achieves an FID of \\\(2\.67\\\) with a substantially shorter training iterations without architectural changes\.

## BuresTomFlow: Bures\-Geometric Flow Matching for Posterior Quantum Tomography

**Authors:** Lu Wei; Yufeng Wang; Chenfeng Cao; Haibin Ling

**ID:** 148329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yeWQkz9wHH>) | [PDF](<https://openreview.net/pdf?id=yeWQkz9wHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148329>)

Finite\-shot quantum tomography often leaves a posterior over many density matrices compatible with the same measurement record, but fast reconstruction methods collapse this uncertainty to a single state\. We frame this setting as amortized posterior sampling and introduce BuresTomFlow, a measurement\-conditioned Flow Matching sampler for full\-rank density matrices\. The method transports base density matrices along Bures\-Wasserstein paths on the positive matrix cone, projects the path back to the trace\-one state space, and trains the velocity field with a Bures\-aligned tangent loss\. Thus the sampler is trained in the same fidelity\-based geometry used to judge posterior quality\. We evaluate BuresTomFlow in dense four\-qubit simulations with count, shadow, and mixed measurement records\. Against Cholesky, log\-density, and generic Riemannian Flow Matching controls at comparable learned\-sampler runtime, BuresTomFlow improves Bures distance, credible\-ball coverage, and held\-out observable prediction\. In the main comparison across multiple seeds, mean Bures distance decreases from $0\.618$ for the Cholesky baseline to $0\.367$ for BuresTomFlow, and mean coverage error decreases from $0\.203$ to $0\.100$\. These results show that the value of Bures geometry is not merely enforcing physical states, but producing calibrated posterior uncertainty when finite\-record tomography cannot be reduced to one reconstruction\.

## Align $\\&amp;$ Invert: Solving Inverse Problems with Diffusion and Flow\-based Models via Representation Alignment

**Authors:** Loukas Sfountouris; Giannis Daras; Paris Giampouras

**ID:** 148851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uh5JsNmPig>) | [PDF](<https://openreview.net/pdf?id=uh5JsNmPig>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148851>)

Enforcing alignment between the internal representations of diffusion or flow\-based generative models and those of pretrained self\-supervised encoders has recently been shown to provide a powerful inductive bias, improving both convergence and sample quality\. In this work, we extend this idea to inverse problems, where pretrained generative models are employed as priors\. We propose applying  representation alignment \(Repa\) between diffusion or flow\-based models and a DINOv2 visual encoder, to guide the reconstruction process at inference time\. Although ground\-truth signals are unavailable in inverse problems, we empirically show that aligning model representations of approximate target features can substantially enhance reconstruction quality and perceptual realism\. We provide theoretical results showing \(a\) that  Repa regularization can be viewed as a variational approach for minimizing a divergence measure in the DINOv2 space, and \(b\) how under certain regularity assumptions Repa updates steer the latent diffusion states toward those of the clean image\.  We integrate Repa  into multiple state\-of\-the\-art inverse problem solvers, and provide extensive experiments on super\-resolution, box inpainting, Gaussian deblurring, and motion deblurring confirming that our method consistently improves reconstruction quality, while also reducing the number of discretization steps required to reach the same performance level as the underlying solver\.

## A Theory on Flow Matching with Neural Networks

**Authors:** Yihan He; Qishuo Yin; Yuan Cao; Jianqing Fan; Han Liu

**ID:** 152773\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152773

[Paper](<https://openreview.net/forum?id=QTCtJIao9O>) | [PDF](<https://openreview.net/pdf?id=QTCtJIao9O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152773>)

In this work, we develop theoretical foundation for flow matching with neural\-network–parameterized conditional velocity fields\. We establish convergence guarantees for gradient descent in the over\-parameterized 2\-layered ReLU neural network regime\. We derive generalization bounds for the conditional velocity\-field matching objective\.  Building on these results, we provide Wasserstein\-distance guarantees for the samples generated by the induced flow\. Our analysis is based on generalization bound for multi\-task representation learning with unbounded losses, which may be of independent interest beyond flow\-based generative modeling\. These theoretical results are validated through extensive experiments on both synthetic and real\-world image benchmarks\.

## Blocked Gibbs meets Diffusion Transformers: Unsupervised Learning for Constraint Optimization

**Authors:** Yudong Will Xu; Wenhao Li; Xiaoyu Wang; Scott Sanner; Elias Khalil

**ID:** 148271\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148271

[Paper](<https://openreview.net/forum?id=z5oDNb2lwJ>) | [PDF](<https://openreview.net/pdf?id=z5oDNb2lwJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148271>)

Diffusion models have shown promise in learning to solve constraint optimization problems\. However, they are mostly restricted to problems with binary variables and rely on graph neural networks, hindering their application to a broader range of problems such as those with general discrete variables or constraint structures that necessitate global rather than local reasoning\. We investigate the use of Diffusion Transformers to address the aforementioned limitations\. A naive implementation performs poorly due to a fundamental mismatch between the standard diffusion process and constraint solving: while the former applies \*small, incremental denoising\* across \*all\* variables, the latter requires \*substantially altering specific subsets of variables\* to attain feasibility or optimality\. Our method, \*\*Blo\*\*cked \*\*G\*\*ibbs \*\*Di\*\*ffusion \*\*T\*\*ransformer \(BloGDiT\), is the first to address this limitation by replacing standard joint Gaussian denoising with Blocked Gaussian denoising\.  BloGDiT uses iterative block resampling and anneals the block size over time to facilitate large, targeted edits within a block of variables\.  Across Sudoku, Graph Coloring, Maximum Independent Set, and MaxCut, BloGDiT matches or outperforms existing methods, demonstrating that blocked Gibbs\-style diffusion provides a highly effective inductive bias for Transformer\-based constraint satisfaction and optimization\.

## Likelihood\-Free Generative Policy Optimization

**Authors:** Maojiang Su; Qijie Zhu; Shuyang Yu; Yu Xiao; Minshuo Chen; Zhaoran Wang; Han Liu

**ID:** 151534\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151534

[Paper](<https://openreview.net/forum?id=ZxbHSaoFK1>) | [PDF](<https://openreview.net/pdf?id=ZxbHSaoFK1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151534>)

Diffusion and flow policies have become promising tools for robotic and sequential decision\-making systems\. Many stable and effective policy optimization methods require evaluating the likelihood or likelihood ratio of an action under the current policy\.  However, these quantities are generally intractable for diffusion and flow models, which prevents widely used policy update algorithms from being applied to generative policies\.  We propose Likelihood\-Free Generative Policy Optimization \(LFGPO\), a framework that avoids exact likelihood evaluation by separating policy improvement from generative model training\.  In the first stage, LFGPO uses a lightweight neural network to represent the likelihood ratio that carries the policy improvement signal\.  In the second stage, it distills the ratio into diffusion or flow policies through a weighted score\- or velocity\-matching objective\. Our framework incorporates a large family of Reinforcement Learning \(RL\) algorithms, including PPO and GRPO, to be applied to diffusion and flow policy optimization\.  We show that the solution to the weighted score matching objective solves a stochastic optimal control problem\.  Across MuJoCo continuous\-control benchmarks, LFGPO delivers strong and stable improvements over competitive diffusion\- and flow\-policy baselines, showing a practical route to RL fine\-tuning for generative policies\.

## Flow Matching Reinforcement Learning via SDE Inference

**Authors:** Maojiang Su; Tsung\-En Lin; Jerry Yao\-Chieh Hu; Guo Ye; Haoran Lu; Shang Wu; Zhaoran Wang; Han Liu

**ID:** 153016\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153016

[Paper](<https://openreview.net/forum?id=ObfkKSqYkf>) | [PDF](<https://openreview.net/pdf?id=ObfkKSqYkf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153016>)

We develop a unified framework for flow\-based reinforcement learning \(RL\) grounded in diffusion–flow duality and establish its theoretical foundations\. The frameworks enables RL for deterministic flow matching inference by introducing diffusion stochastic inference dynamics that supports exploration while admitting deterministic deployment\. We show that our frameworks subsumes several existing flow\-based RL methods as special cases and inspire effective now methods\. Then we provide theoretical foundations for the frameworks by establishing the correctness and performance transfer guarantee\. Specifically, we prove that the policies optimized under stochastic dynamics close to deterministic dynamics at deployment when the pretrained model is well\-trained\. Moreover, we show that the policy improvement achieved under training\-time SDE inference transfers to deployment\-time ODE inference\. Finally, we conduct experiments to validate our theoretical results\.

## Contextual Flow Matching for High\-quality Visual Content Generation

**Authors:** Bozhi Luan; Hong Chen; Jianmin Bao; Liang Hou; Yuan Gao; Xin Tao; Pengfei Wan; Wengang Zhou; Houqiang Li

**ID:** 156013\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156013

[Paper](<https://openreview.net/forum?id=1AXA4TdiEG>) | [PDF](<https://openreview.net/pdf?id=1AXA4TdiEG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156013>)

Standard Flow Matching \(FM\) models typically employ a pointwise loss function, effectively assuming that the velocity vector at each spatial position is pointwise decomposed supervision given the conditioning\. We argue that this Pointwise Independence Assumption is suboptimal for image generation, where strong local correlations exist across space\. Neglecting these dependencies leads to artifacts such as structural inconsistency\. In this paper, we introduce Contextual Flow Matching \(CFM\), a generalized framework that enforces consistency not just on individual pixels, but on the contextual relationships within the velocity field\. We formulate the training objective using a set of generalized Context Operators\-\-\-akin to convolution kernels\-\-\-that abstract relationship constraints\. Specifically, we instantiate a Differential Operator to capture high\-frequency motion dynamics and an Aggregate Operator to stabilize low\-frequency structural evolution\. Extensive experiments on ImageNet demonstrate that CFM significantly accelerates convergence and enhances generation fidelity by explicitly modeling spatial dependencies\.

## Trustworthy and Efficient Map\-free LiDAR Localization via Scan\-Pose Alignment and Flow Matching

**Authors:** Haoze Chang; Dunqiang Liu; Minghang Zhu; Wen Li; Sheng Ao; Siqi Shen; Chenglu Wen; Cheng Wang

**ID:** 151724\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151724

[Paper](<https://openreview.net/forum?id=Ya8vDuIkP4>) | [PDF](<https://openreview.net/pdf?id=Ya8vDuIkP4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151724>)

Reliable map\-free LiDAR relocalization requires not only accurate and efficient pose estimation but also trustworthy confidence estimation for detecting localization failures\. However, estimating reliability to ensure trustworthy LiDAR relocalization remains largely unexplored\. Also, existing LiDAR pose regression methods suffer from accuracy and efficiency trade\-off\. To address this limitation, we propose \\textbf\{SPAR\}, a model\-agnostic confidence estimator that reformulates localization reliability as scan\-pose alignment\. Given a query scan and a predicted pose, SPAR measures their compatibility in a learned embedding space and explicitly optimizes confidence scores to correlate scan with pose\. In addition, we introduce \\textbf\{VeLoc\}, an efficient and accurate pose regressor based on flow\-matching for efficient pose refinement\. Experiments on the Oxford and NCLT datasets demonstrate that the proposed framework achieves a favorable balance between efficiency and accuracy for LiDAR relocalization while enabling reliable localization failure detection across different localization backbones\.

## Skill\-Adaptive Noise Scheduling for Diffusion Policies

**Authors:** Woo Kyung Kim; Gwangpyo Yoo; Eunyoung Park; Honguk Woo

**ID:** 150596\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150596

[Paper](<https://openreview.net/forum?id=gy1X23GoMB>) | [PDF](<https://openreview.net/pdf?id=gy1X23GoMB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150596>)

Recent advances in diffusion policies have demonstrated strong effectiveness when integrated into hierarchical skill\-based learning frameworks, leveraging offline data to capture multimodal and temporally abstracted behaviors\. However, prior approaches have rarely considered the diffusion process as a learnable component, adopting fixed noise schedules applied uniformly across skills, regardless of their distinct behavioral contexts\. Such a design fundamentally limits the achievable performance, particularly for contact\-rich and dexterous manipulation tasks where different skills exhibit distinct couplings between action dimensions\. In this paper, we present a skill\-adaptive noise diffusion framework \(SaND\) which introduces a learnable, skill\-conditioned noise schedule that modulates the diffusion process per action dimension, adapting the noising dynamics to each skill\. To prevent the learned noise schedule from collapsing into trivial solutions, we employ an auxiliary inverse objective that reconstructs the skill embedding from the Legendre coefficients of the derivative of the noise schedule, encouraging the schedules to remain skill\-discriminative\. This formulation naturally enables adaptive control over the denoising steps for each skill, where noise schedules are clustered in the Legendre coefficient space, and the appropriate number of denoising steps is determined at the point where reconstruction error abruptly increases\. At inference, we identify each skill embedding's cluster from its noise schedule and apply the corresponding number of denoising steps, dedicating more compute to skills requiring fine\-grained control and less to simpler ones\. Through experiments, we demonstrate that SaND outperforms existing diffusion\-based skill learning and planning baselines on contact\-rich and dexterous manipulation tasks, achieving higher success rates while requiring fewer denoising steps\.

## Christoffel\-DPS: Optimal sensor placement in diffusion posterior sampling for arbitrary distributions

**Authors:** James Rowbottom; Zi Yuan \(Nick\) Huang; Carola\-Bibiane Schönlieb; Ben Adcock

**ID:** 148240\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148240

[Paper](<https://openreview.net/forum?id=zMIv8bU50c>) | [PDF](<https://openreview.net/pdf?id=zMIv8bU50c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148240>)

State estimation is a critical task in scientific, engineering and control applications\. Since the reliability of reconstructions can depend on the number and position of sensors, Optimal sensor placement \(OSP\) is essential in scenarios where measurements are sparse and expensive\. However, classical OSP approaches rely on Gaussian assumptions and are consequently unable to account for complex distributions encountered in many real\-world systems\. Generative\-model\-based reconstruction using sensor guided diffusion posterior sampling \(DPS\) has emerged as a promising technique for reconstructing states from highly complex distributions\. Existing approaches to sensor selection either choose an unrealistically large number of sensors or employ strategies that emulate classical OSP methods\. This results in a mismatch, wherein new models are paired with classical OSP tools, and motivates the need for fundamentally new ideas towards OSP that match the recent advances made in powerful recovery models\. In this work, we introduce a distribution\-free sensor placement framework based on the Christoffel function\. Our main theoretical contributions introduce a mathematical formulation of optimal sampling and recovery guarantees for posterior sampling with arbitrary sensors and signal distributions\. We use these to derive a new OSP strategy with non\-asymptotic bounds on the number of sensors needed for recovery\. Building on this, we develop \\textbf\{Christoffel\-DPS\}, with both offline and online variants, that implements nonparametric realizations of Christoffel sampling for generative models\. As we show, Christoffel\-DPS outperforms Gaussian OSP baselines and existing generative\-model\-based placement methods, validating that distribution\-free sensing is both theoretically principled and practically superior\. The framework is model agnostic, and we demonstrate its application to a range of unconditional DPS and flow matching models on structurally non\-Gaussian benchmarks, showing the efficacy of Christoffel\-DPS in low sensor budget regimes\.

## Class\-Mixed Diffusion Augmentation for Shortcut\-Breaking in Continual Learning

**Authors:** Abhinab Acharya; Dayou Yu; Qi Yu; Xumin Liu

**ID:** 154098\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154098

[Paper](<https://openreview.net/forum?id=GGcrbkuKF6>) | [PDF](<https://openreview.net/pdf?id=GGcrbkuKF6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154098>)

Zero\-shot pre\-trained diffusion models can provide a training\-free source of synthetic image generation for Exemplar\-Free Class Incremental Learning \(EFCIL\)\. However, same\-class generation is limited by the distribution mismatch with real data\. Parameter\-allocation\-based EFCIL can minimize the forgetting in model parameters, yet the performance degrades because task\-id prediction fails when task\-specific feature extractors overcompress and converge to shortcut\-dominant representations\. We propose \\emph\{Class\-Mixed Diffusion Augmentation\} \(CMDA\) that uses diffusion models not only as past\-task data generators but also as controlled generators that challenge the shortcut reliance\. We sample candidate tokens from the vocabulary and select \\emph\{shortcut\-breaking\} tokens via classifier\-guided filtering, then treat the selected tokens as auxiliary classes during training\. We provide theoretical analysis linking shortcut sharing to an intrinsic lower bound on task\-id error and show that minimum\-CE selection recovers shortcut\-breaking tokens\. Experiments on Split\-CIFAR100 and Split\-ImageNet show consistent gains over EFCIL baselines, with modest overhead over vanilla diffusion augmentation and far lower cost than diffusion fine\-tuning or gradient\-guided sampling\.

## Temperature Guidance For Robust Reward Conditioning In Diffusion Planning

**Authors:** Johannes V Busch; Roberto Calandra

**ID:** 152932\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152932

[Paper](<https://openreview.net/forum?id=PHxRfWn3K5>) | [PDF](<https://openreview.net/pdf?id=PHxRfWn3K5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152932>)

Diffusion planners enable long\-horizon planning through a generative process over full trajectories, mitigating compounding errors of autoregressive methods while handling multimodal futures\. Reward conditioning via classifier\-free guidance \(CFG\) yields high\-performing plans but is brittle with respect to per\-task hyperparameter choices, limiting its scalability\. Our analysis reveals that guidance performance hinges on careful adaptation to the data manifold and reward distribution, contributing to CFG's hyperparameter fragility\. We propose temperature\-guided diffusion planning \(TGDP\), which adapts CFG to self\-calibrate to these characteristics through temperature\-conditional sample reweighting during training and adaptive guidance at inference\. TGDP mitigates the hyperparameter fragility of CFG and matches state\-of\-the\-art performance across standard benchmarks without per\-task tuning, thus enabling more robust and practical diffusion\-based planning\.

## Frozen Memory Is Not Enough: Rethinking External Memory as Extraction

**Authors:** Mingyuan Li; Guangsheng Yu; Xu Wang; Shaoxiong Ji

**ID:** 150946\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150946

[Paper](<https://openreview.net/forum?id=e7xyZQCjBR>) | [PDF](<https://openreview.net/pdf?id=e7xyZQCjBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150946>)

Methods for improving knowledge use in large language models typically fall into two regimes\. Non\-parametric retrieval offers flexible access to external knowledge, but adds retrieval latency, context overhead, and only shallow integration with the backbone\. Parametric adaptation is efficient at inference time, but entangles knowledge with model weights and can be hard to update, audit, or transfer\. Engram\-style hashed memory occupies a middle regime: it stores learned information in an external, addressable table, yet consumes that table through a small learned reader\. This raises a basic question: when such a memory is moved across backbones, what matters more, the frozen memory itself or the target\-side reader? We study this question through cross\-model frozen\-memory extraction, where a memory trained on a source model is frozen and attached to a different target model while only a lightweight reader is trained\. Across architectures, tokenizers, and model scales, frozen memory improves every source\-\-target pair in a $3 \\times 3$ transfer matrix, with up to 15\.7\\% relative perplexity reduction\. Ablations show that learned memory content and correct addressing both matter, but stronger readers account for much of the transfer gain; on OpenQA, a dual\-layer 4\-branch reader nearly closes the gap between same\-model and cross\-model transfer and reaches 38\.78 average\. These results position Engram as a hybrid external memory and suggest that, in this regime, progress depends as much on reader design as on storage itself\. Code and reproducible setups are available at https://anonymous\.4open\.science/r/Engram\_Extractor/README\.md\. \.

## ODDR: One\-Step Deshadow Diffusion via Reward Guidance

**Authors:** Junseong Shin; Kijun Kim; Minseong Kim; Dongjin Kim; Tae Hyun Kim

**ID:** 153865\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153865

[Paper](<https://openreview.net/forum?id=IAfKoeRc25>) | [PDF](<https://openreview.net/pdf?id=IAfKoeRc25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153865>)

Recent advances in deep learning for shadow removal have significantly enhanced image quality and realism\. However, most approaches rely on real\-world paired datasets, which are costly to collect and often limited in scene diversity, leading to limited generalization\. To address these limitations, we propose One\-step Deshadow Diffusion via Reward guidance \(ODDR\), a new framework that achieves efficient and high\-fidelity shadow removal without relying on real\-world paired supervision\. Our method begins with One\-step Deshadow Diffusion \(ODD\), a baseline model trained on synthetic shadow data for efficient one\-step shadow\-free reconstruction\. We further adapt ODD into ODDR using ShadowReward\. In contrast to traditional, annotation\-heavy approaches, ShadowReward is the first reward model for shadow removal trained entirely without human annotation\. It learns to mimic human perceptual judgments by ranking synthetically generated images with controlled degradations, such as texture distortion and boundary artifacts\. This reward\-guided fine\-tuning enables ODDR to close the synthetic\-to\-real domain gap\. Extensive experiments show that ODD achieves strong performance without relying on real\-world paired supervision, and ODDR further improves the results and achieves performance competitive with methods trained on real\-world paired data, while maintaining higher computational efficiency as a single step model\.

## FLUX: Geometry\-Aware Longitudinal Flow Matching with Mixture of Experts

**Authors:** Josue Ortega Caro; Yongxu Zhang; Hannah M Batchelor; Sizhuang He; Jessica Cardin; Shreya Saxena

**ID:** 154945\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154945

[Paper](<https://openreview.net/forum?id=9kNHWMRtUj>) | [PDF](<https://openreview.net/pdf?id=9kNHWMRtUj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154945>)

Many biological systems evolve through continuous local dynamics while switching between latent regimes defined by learning, stimulus context, internal state, or developmental stage\. These processes are often observed only as unpaired longitudinal snapshots: the same cells, neurons, or animals are not tracked as matched trajectories, even though population states are sampled across successive stages\. This creates two coupled challenges\. First, trajectories must respect curved low\-dimensional manifolds embedded in high\-dimensional biological measurements\. Second, the model must identify when the transport mechanism itself changes\. We introduce FLUX \(FLow matching for Unpaired longitudinal data with miXture\-of\-experts\), a geometry\-aware longitudinal flow\-matching framework for joint transport modeling and unsupervised regime discovery\. FLUX learns a data\-dependent metric from pooled labeled and unlabeled observations, uses that metric to construct geometry\-aware conditional paths between adjacent marginals, and decomposes the resulting velocity field into sparse expert vector fields selected by a Straight\-Through Gumbel\-Softmax router\. Across manifold controls, a regime\-switching Lorenz system, widefield cortical calcium imaging during associative learning, and embryoid body single\-cell differentiation, FLUX reconstructs longitudinal transport while recovering interpretable regime structure\. In neural data, the router separates early/intermediate training from late training, coinciding with the behavioral divergence of CS\+ and CS\- lick indices\. In embryoid body differentiation, FLUX separates expression\-evolution regimes associated with pluripotent and more differentiated cell populations\. Ablations show that mixture\-of\-experts routing alone is insufficient: FLUX without geometric learning can fit local transport but fails or weakens regime discovery when regimes are encoded in local dynamics\. These results suggest that geometry\-aware velocity decomposition provides a general strategy for discovering latent biological state transitions from unpaired longitudinal snapshots\.

## Generalized Robust Adaptive\-Bandwidth Multi\-View Manifold Learning in High Dimensions with Noise

**Authors:** Xiucai Ding; Chao Shen; Hau\-Tieng Wu

**ID:** 156634\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156634

[Official poster](<https://neurips.cc/virtual/2026/poster/156634>)

Multiview datasets are common in scientific and engineering applications, yet existing fusion methods offer limited theoretical guarantees, particularly in the presence of heterogeneous and high\-dimensional noise\. We propose Generalized Robust Adaptive\-Bandwidth Multiview Diffusion Maps \(GRAB\-MDM\), a new kernel\-based diffusion geometry framework for integrating multiple noisy data sources\. The key innovation of GRAB\-MDM is a view\-dependent bandwidth selection strategy that adapts to the geometry and noise level of each view, enabling a stable and principled construction of multiview diffusion operators\. Under a common\-manifold model, we establish asymptotic convergence results and show that the adaptive bandwidths lead to provably robust recovery of the shared intrinsic structure, even when noise levels and sensor dimensions differ across views\. Numerical experiments demonstrate that GRAB\-MDM significantly improves robustness and embedding quality compared with fixed\-bandwidth and equal\-bandwidth baselines, and usually outperform existing algorithms\. The proposed framework offers a practical and theoretically grounded solution for multiview sensor fusion in high\-dimensional noisy environments\.

## Feature Information Dynamics in Diffusion

**Authors:** Jia\-Shu Pan; Tao Zhang; Yufei Huang; Yanjun Sheng; Tailin Wu

**ID:** 152004\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152004

[Paper](<https://openreview.net/forum?id=WDfD9WTJeJ>) | [PDF](<https://openreview.net/pdf?id=WDfD9WTJeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152004>)

Diffusion models generate data through a continuum of denoising problems, and are widely observed to reveal coarse structure before fine detail\. Yet, this intuition is mostly empirical and qualitative\. We introduce \\emph\{feature information dynamics\}, an information\-theoretic framework for localizing when a feature is generated during diffusion\. Using the I\-MMSE identity, we connect the rate of feature mutual information change to a gap between optimal unconditional and feature\-conditional denoising losses, yielding practical estimators for feature information density\. We further develop a chained decomposition that separates shared from incremental information in a feature hierarchy\. We use this framework first to quantitatively confirm spectral autoregression in pixel diffusion, and then to extend the analysis beyond frequency: under a class$\\to$mask$\\to$Canny conditioning chain, the per\-feature information densities differ across pixel, SDVAE, VAVAE, and RAE, exposing fundamental differences between these representations\.

## Structural Rationale Distillation via Reasoning Space Compression

**Authors:** Jialin Yang; Jiankun Wang; Jiajun Wu; Henry Leung; Jiayu Zhou; Steve Drew

**ID:** 152271 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UK2XjwZOOP>) | [PDF](<https://openreview.net/pdf?id=UK2XjwZOOP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152271>)

_Abstract unavailable from the accessible public sources._

## DiffATS: Diffusion in Aligned Tensor Space

**Authors:** Jinhua Lyu; Tianmin Yu; Brian Kim; Lizhuo Zhou; Chanwook Park; Naichen Shi

**ID:** 150268 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jQzUVefSI5>) | [PDF](<https://openreview.net/pdf?id=jQzUVefSI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150268>)

_Abstract unavailable from the accessible public sources._

## A Mean\-Field Framework for Inference\-Time Distributional Control of Diffusion Models

**Authors:** Samuel Howard; Nikolas Nüsken

**ID:** 150099 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=khIk1adodl>) | [PDF](<https://openreview.net/pdf?id=khIk1adodl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150099>)

_Abstract unavailable from the accessible public sources._

## Chance\-constrained Flow Matching for High\-Fidelity Constraint\-aware Generation

**Authors:** JINHAO LIANG; Yixuan Sun; Anirban Samaddar; Sandeep Madireddy; Ferdinando Fioretto

**ID:** 150205 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jwaNz2c281>) | [PDF](<https://openreview.net/pdf?id=jwaNz2c281>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150205>)

_Abstract unavailable from the accessible public sources._

## Map\-Guided Caching: A Global Perspective for Efficient Diffusion Transformer

**Authors:** Jiaqi Ji; Ran Yang; Bo Wei; Hui Li; Hee Min Choi

**ID:** 153062\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153062

[Paper](<https://openreview.net/forum?id=OIRkHEYjkM>) | [PDF](<https://openreview.net/pdf?id=OIRkHEYjkM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153062>)

_Abstract unavailable from the accessible public sources._

## BASTION: Budget\-Aware Speculative Decoding with Tree\-structured Block Diffusion Drafting

**Authors:** Soowon Oh; Nam Cao; Yujin Kim; Hojung Jung; Huzama Ahmad; Sangmin Bae; Se\-Young Yun

**ID:** 151263\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151263

[Paper](<https://openreview.net/forum?id=bggNOfjAjb>) | [PDF](<https://openreview.net/pdf?id=bggNOfjAjb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151263>)

Block\-diffusion drafters have recently shown strong potential for speculative decoding by predicting multiple future\-token distributions in a single forward pass\. To exploit these parallel predictions, tree\-based verification can check multiple plausible continuations instead of committing to a single greedy draft path, often increasing the number of accepted tokens per decoding cycle\. However, existing tree\-based approaches typically rely on fixed tree topologies or static verification budgets, even though the best budget depends on the local draft distribution, context length, target model, and hardware runtime\. We propose a system\-aware adaptive tree framework for block\-diffusion speculative decoding\. At each decoding cycle, our method builds a tree toward high\-probability draft paths and selects the verification budget that maximizes an online speedup estimate\. This estimate combines a drafter\-based acceptance surrogate with an analytical verifier\-latency model calibrated from observed runtimes\. The framework requires no additional training of the drafter or target model and preserves the target model's decoding rule\. Across target models, benchmarks, decoding temperatures, and GPU platforms, our method achieves up to a $6\.93\\times$ wall\-clock speedup over standard autoregressive decoding\. This corresponds to approximately 40% higher speedup than Dflash, the strongest existing block\-diffusion drafter, and is obtained without per\-setting budget tuning\.

## Concurrence of Symmetry Breaking and Nonlocality Phase Transitions in Diffusion Models

**Authors:** Yifan F Zhang; Fangjun Hu; Guangkuo Liu; Mert Okyay; Xun Gao

**ID:** 153436\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153436

[Paper](<https://openreview.net/forum?id=LJu0XmevDe>) | [PDF](<https://openreview.net/pdf?id=LJu0XmevDe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153436>)

Diffusion models undergo a phase transition in a critical time window during generation dynamics, with two complementary diagnoses of criticality\. The symmetry breaking picture views the critical window as when trajectories bifurcate into different semantic minima of the energy landscape, whereas the nonlocality picture views the critical window as when local denoising fails\. We study whether two notions of such phase transitions are concurrent in modern diffusion transformers\. By evaluating the dynamics and outcomes of the generation trajectory, we observe a near\-simultaneous occurrence of the non\-locality and symmetry breaking critical times\. Our work is the first to unify the two notions of phase transitions in practice: it provides a concrete diagnostic for when and why diffusion models rely on conditioning and global denoising, enabling principled evaluation of model efficiency and guiding the design of architectures and sampling schemes that avoid unnecessary computation\.

## TrajLift: Encoding Verbal Memory Dynamics via Heat Diffusion on Semantic Hierarchies

**Authors:** Jiawen Kang; Jinchao Li; Mingyu Cui; Junan Li; Xixin Wu; Helen Meng

**ID:** 154461\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154461

[Paper](<https://openreview.net/forum?id=DPkTPrRA03>) | [PDF](<https://openreview.net/pdf?id=DPkTPrRA03>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154461>)

Verbal memory retrieval carries rich diagnostic information for Alzheimer's disease \(AD\) through the order, hesitation, and categorical organization of recalled words, yet computational modeling of this retrieval process remains largely unexplored\.  A key challenge is that timing and hierarchical structure are diagnostically entangled: the diagnostic meaning of retrieval timing depends on its hierarchical context\. We propose TrajLift, a spectral framework that models verbal recall as timed trajectories on a hierarchical graph\. Our central mechanism is graph heat diffusion on the semantic hierarchy, which provides a unified operator for capturing both multi\-scale hierarchical structure and continuous retrieval timing\. Formal analysis shows that the resulting representation is provably separable into structural and temporal components with spectral selectivity across hierarchical levels\. Experiments on synthetic benchmarks and a real\-world clinical corpus demonstrate consistent improvements over baselines lacking joint structure\-time modeling\.

## Energy\-Tweedie: Score meets Score, Energy meets Energy

**Authors:** Andrej Leban

**ID:** 150007\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150007

[Paper](<https://openreview.net/forum?id=lTLzpUqJPJ>) | [PDF](<https://openreview.net/pdf?id=lTLzpUqJPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150007>)

Denoising and score estimation are classically linked through Tweedie’s formula, which relates the posterior mean under Gaussian corruption to the Stein score of the noisy marginal\. In this work, we extend this perspective beyond Gaussian noise to a broad class of elliptical, energy\-based noise distributions, with particular emphasis on generalized Gaussian corruptions\. We derive the Energy–Tweedie identity: when the denoising posterior is viewed through the lens of proper scoring rules, the path derivative of a matched, possibly non\-Euclidean energy score recovers the Stein score of the noisy marginal\. Thus, the familiar correspondence between Gaussian noise, posterior means, squared loss, and Tweedie’s formula is lifted to a distributional correspondence between generalized Gaussian noise, full posterior laws, Mahalanobis energy scores, and the Energy–Tweedie identity\. Among its consequences, this identity gives a posterior\-sample\-based route to score estimation, yields a principled criterion for noise\-parameter calibration, and supplies a score\-based perspective on recent diffusion\-style generative methods trained with scoring rules\.

## FlowMoP: Stochastic Multi\-Person Motion Prediction

**Authors:** Aadya Agrawal; Ho Kei Cheng; Alex Schwing

**ID:** 150215 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jsxeyIiDBe>) | [PDF](<https://openreview.net/pdf?id=jsxeyIiDBe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150215>)

Predicting the future motion of multiple people is inherently stochastic: the same observed history admits many plausible continuations depending on intent, coordination, and social context\. Yet the dominant paradigm in multi\-person 3D motion prediction remains deterministic, with existing methods producing a fixed number of outputs per agent\. In contrast, we present a conditional flow matching framework that jointly generates diverse future motions for multiple agents, modeling global trajectories and root\-relative poses\. A B\-spline reparameterization compresses the generative state space while enforcing temporal smoothness, and a dual\-stream transformer conditions each agent's predictions on observed neighbor motion for interaction\-aware forecasting\. Our method achieves state\-of\-the\-art performance on CMU\-Mocap \(UMPM\) and 3DPW, outperforming deterministic baselines on joint position error, pose error, and final displacement error despite producing a full predictive distribution\. We additionally establish the first motion prediction baseline on WorldPose, a large\-scale professional soccer dataset, where social conditioning demonstrably concentrates predictive uncertainty along interaction\-constrained directions\.

## PRECISE: SDE\-Consistent Stochastic Sampling for RL Post\-Training of Flow\-Matching Models

**Authors:** Bo Peng; Tao Huang; Weijie Kong; Junzhe Li; Yue Wu; Qi Tian; Jiangfeng Xiong; Jian\-Wei Zhang; Liefeng Bo; Zhao Zhong

**ID:** 154105 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GDousLQnYE>) | [PDF](<https://openreview.net/pdf?id=GDousLQnYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154105>)

Reinforcement learning \(RL\) has become an effective way to improve prompt alignment and perceptual quality in diffusion and flow\-matching generators\. A critical step for applying online RL to flow matching is turning the deterministic sampling trajectory into a stochastic policy, typically by replacing the reverse\-time Ordinary Differential Equation \(ODE\) with a Stochastic Differential Equation \(SDE\)\. The stochastic sampler, controlling the exploration behavior and denoising dynamics, is thus part of the policy, and its design can significantly affect the reward optimization performance\. We break down the sampler design into two interdependent components: choosing the right amount of stochastic exploration, and discretizing the resulting SDE faithfully at the small step counts used in RL\. To address the first component, we analyze the inherent tension between exploration and stability in denoising and derive an SDE schedule that balances the two\. Turning to the discretization challenge, we use a toy example to show that existing samplers can deviate from the flow\-matching process, either by introducing excessive discretization noise or by relying on heuristic rules that do not guarantee convergence to the data distribution\. To address these issues, we propose \\textsc\{Precise\}, a new stochastic sampler that balances effective exploration with stability\. Crucially, \\textsc\{Precise\} keeps the denoising trajectory SDE\-consistent through a novel approximation that freezes the clean\-latent posterior mean, resolving the excess noise issue in standard samplers\. Extensive experiments demonstrate that this formulation leads to significantly faster and more stable reward optimization via reinforcement learning, achieving state\-of\-the\-art alignment scores \(e\.g\., PickScore, HPSv2\.1\) while requiring 13\.1\-\-53\.2\\% less wall\-clock training time to match the best in\-domain performance of prior samplers\.

## Stochastic Heat Diffusion Models

**Authors:** Marc Law; Xiaoyu Wang; Lucas Berry; Anthony L Caterini; Gabriel Loaiza\-Ganem

**ID:** 149733 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nlt2l4kt7S>) | [PDF](<https://openreview.net/pdf?id=nlt2l4kt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149733>)

_Abstract unavailable from the accessible public sources._

## Unlearning Diffusion Policies via Relative Fisher Forgetting

**Authors:** Manuel Kelly; Yingxue Zhang; Fangzhou Lin; Yanhua Li; Xin Zhang

**ID:** 153227 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MpxEJi7gJL>) | [PDF](<https://openreview.net/pdf?id=MpxEJi7gJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153227>)

_Abstract unavailable from the accessible public sources._

## Step\-dLLM: Adaptive Step\-aware Sparse Attention for Efficient Diffusion LLM Inference

**Authors:** Zhichen Zeng; Xichong zhang; Junpan Wu; Yifei Zuo; Chi\-Chih Chang; Jiayi Wang; Maohua Nie; Ji Liu; Ang Li; Banghua Zhu

**ID:** 155406 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5sFFGPtDy2>) | [PDF](<https://openreview.net/pdf?id=5sFFGPtDy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155406>)

_Abstract unavailable from the accessible public sources._

## DC\-SAE: Deep Compression Semantic Autoencoder for Faster Diffusion Convergence

**Authors:** Xu Huang; Ye Huang; Zijun Liao; Yuwei Niu; Xiaojie Li; Menghan Zhou; De Wen Soh; Xiaotong Li; Daquan Zhou

**ID:** 152595 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rx1xVinvFW>) | [PDF](<https://openreview.net/pdf?id=Rx1xVinvFW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152595>)

_Abstract unavailable from the accessible public sources._

## Secure Seed\-Based Multi\-bit Watermarking for Diffusion Models from First Principles

**Authors:** Enoal Gesny; Eva Giboulot

**ID:** 153457 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L9bouam6wJ>) | [PDF](<https://openreview.net/pdf?id=L9bouam6wJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153457>)

_Abstract unavailable from the accessible public sources._

## BuresTomFlow: Bures\-Geometric Flow Matching for Posterior Quantum Tomography

**Authors:** Lu Wei; Yufeng Wang; Chenfeng Cao; Haibin Ling

**ID:** 148329\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148329

[Paper](<https://openreview.net/forum?id=yeWQkz9wHH>) | [PDF](<https://openreview.net/pdf?id=yeWQkz9wHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148329>)

Finite\-shot quantum tomography often leaves a posterior over many density matrices compatible with the same measurement record, but fast reconstruction methods collapse this uncertainty to a single state\. We frame this setting as amortized posterior sampling and introduce BuresTomFlow, a measurement\-conditioned Flow Matching sampler for full\-rank density matrices\. The method transports base density matrices along Bures\-Wasserstein paths on the positive matrix cone, projects the path back to the trace\-one state space, and trains the velocity field with a Bures\-aligned tangent loss\. Thus the sampler is trained in the same fidelity\-based geometry used to judge posterior quality\. We evaluate BuresTomFlow in dense four\-qubit simulations with count, shadow, and mixed measurement records\. Against Cholesky, log\-density, and generic Riemannian Flow Matching controls at comparable learned\-sampler runtime, BuresTomFlow improves Bures distance, credible\-ball coverage, and held\-out observable prediction\. In the main comparison across multiple seeds, mean Bures distance decreases from $0\.618$ for the Cholesky baseline to $0\.367$ for BuresTomFlow, and mean coverage error decreases from $0\.203$ to $0\.100$\. These results show that the value of Bures geometry is not merely enforcing physical states, but producing calibrated posterior uncertainty when finite\-record tomography cannot be reduced to one reconstruction\.

## Kernel\-Gradient Drifting Models

**Authors:** Maria Esteban\-Casadevall; Jorge Carrasco\-Pollo; Max Welling; Jan\-Willem van de Meent; Erik Bekkers; Floor Eijkelboom

**ID:** 151352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bBH7f4QAQn>) | [PDF](<https://openreview.net/pdf?id=bBH7f4QAQn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151352>)

We propose kernel\-gradient drifting, a one\-step generative modeling framework that replaces the fixed Euclidean displacement direction in drifting models with directions induced by the kernel itself\. Standard drifting is attractive because it enables fast, high\-quality generation without distilling a large pretrained diffusion model, but its theory is currently understood mainly for Gaussian kernels, where the drift coincides with smoothed score matching and is identifiable\. Our gradient\-based reformulation exposes this score\-based structure for general kernels: the resulting drift is the score difference between kernel\-smoothed data and model distributions, yielding identifiability for characteristic kernels and a smoothed\-KL descent interpretation of the drifting dynamics\. Since kernel gradients are intrinsic tangent vectors, the same construction extends naturally to Riemannian manifolds and to discrete data via the Fisher\-Rao geometry of the probability simplex\. Across spherical geospatial data, promoter DNA and molecule generation, kernel\-gradient drifting enables state\-of\-the\-art one\-step generation beyond the Euclidean setting without distillation\.

## PixelDiT2: Representation\-Grounded Pixel Diffusion Transformers

**Authors:** Yongsheng Yu; Wei Xiong; Yichen Sheng; Shiqiu Liu; Jiebo Luo

**ID:** 155465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5P4vAdvfAy>) | [PDF](<https://openreview.net/pdf?id=5P4vAdvfAy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155465>)

Recent advances in pixel\-space diffusion models have narrowed the image quality gap with latent\-space diffusion, but still converge more slowly and lag behind in final image quality\. We argue that a key reason is the lack of an explicit representation prior: unlike latent diffusion, which denoises in a compact and structured latent space, pixel diffusion must learn denoising\-friendly representations and pixel generation simultaneously from raw RGB space\. To address this problem, we propose PixelDiT2, an end\-to\-end pixel\-space diffusion model designed to decouple representation learning from pixel generation without introducing an autoencoder or latent reconstruction bottleneck\. We propose \*representation grounding\* that uses a frozen pretrained vision foundation model to provide explicit per\-patch representation guidance throughout denoising, allowing the pixel diffusion transformer to focus more on pixel generation\. On ImageNet\-$256\{\\times\}256$, PixelDiT2 reaches FID $\\textbf\{1\.50\}$ in $320$ epochs, surpassing JiT\-G's FID $1\.82$ at $600$ epochs with roughly half the parameters and half the training budget\.

## Parallel Broyden methods for efficiently evaluating nonlinear state space models

**Authors:** Ian Christopher Tanoh; Scott Linderman

**ID:** 150574 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=h9gPX15hwW>) | [PDF](<https://openreview.net/pdf?id=h9gPX15hwW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150574>)

Nonlinear state space models are typically evaluated sequentially, limiting their ability to exploit modern parallel hardware\. However, recent work has shown that state space models can be evaluated in parallel by reformulating evaluation as a root\-finding problem, which can be solved with a parallel form of Newton's method\. However, exact Newton methods require expensive multiplication of dense Jacobian matrices, and quasi\-Newton methods based on diagonal approximations, while more scalable, are often slow to converge because they neglect interactions across state dimensions\. We introduce a novel quasi\-Newton approach based on Broyden’s method, which captures coupling terms with diagonal\-plus\-low\-rank approximations to blocks of the Jacobian\. We construct the approximations from trajectory secants, avoiding automatic differentiation while retaining the favorable scaling of diagonal approximations and remaining compatible with parallel scan through rank compression\. We extend previous theoretical results to show that convergence degrades monotonically with approximation error and prove finite\-step recovery of the exact trajectory\. Empirically, we show that our method is advantageous when interactions are approximately low rank or when Jacobian evaluation is prohibitively expensive\. It converges in fewer iterations than other quasi\-Newton methods, yielding substantially faster run times for simulating low\-rank RNNs, parallel MCMC algorithms, and denoising diffusion models\.

## LITHE: Lattice\-Indexed Twin Hadamard Encoding for Diffusion Personalization

**Authors:** Jian Jiang; Oya Celiktutan; Yaohui WANG; Yutong Ban

**ID:** 151492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aFYphrxbNI>) | [PDF](<https://openreview.net/pdf?id=aFYphrxbNI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151492>)

Diffusion personalization deployments serve growing catalogues of LoRA adapters, but resident\-LoRA serving is capped near the GPU memory budget \(about 150 rank\-16 adapters on an A100 80 GB GPU running FLUX\.1\-dev\)\. We introduce LITHE, a LoRA\-compatible deployment representation that stores each adapter as an integer\-index stream over a deterministic Hadamard codebook, and that pushes this resident\-adapter ceiling to a verified 10,000 adapters on the same single GPU at sub\-80 GB peak\. The same on\-disk indices drive two serving modes: an \*index\-resident\* mode that routes a heterogeneous batch of adapters in one forward, and a \*decoded compiled\* mode within 1% of an optimized LoRA\+compile baseline at 28\-step inference at 1024² resolution on FLUX\.1\-dev \(and 1\.07–1\.43× faster at lower resolutions\)\. On disk, each rank\-16 FLUX\.1\-dev adapter occupies 1\.81 MB on average across the benchmark pool, a 50×/200× reduction over the matched r=16 / r=64 LoRA disk payload after the same coder\.

## Improving the Diffusability of Motion Tokenizer

**Authors:** Guanhe Huang; Songqiao Han; Tangzheng Lian; Oya Celiktutan

**ID:** 150734 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fnQkgTUCzX>) | [PDF](<https://openreview.net/pdf?id=fnQkgTUCzX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150734>)

Latent diffusion models paired with a variational auto\-encoder \(VAE\) tokenizer have shown promising performance for efficient text\-driven human motion generation\. However, motion latent diffusion suffers from a generation\-reconstruction trade\-off: simply increasing tokenizer capacity enhances reconstruction but fails to proportionally improve text\-conditioned generation quality\. We assume this trade\-off stems from a spectral mismatch inside the VAE tokenizer: the encoder yields a latent space biased toward high frequencies, and the decoder introduces temporal artifacts\. In this paper, we propose the Diffusable Motion Tokenizer \(DiMoT\) to improve the diffusability of the tokenizer, rather than scaling up the diffusion backbone\. To improve text\-conditioned optimization, Critic Spectral Adaptation \(CSA\) leverages a pretrained diffusion model as the critic to suppress high\-frequency latent energy\. To preserve motion dynamics, the Alpha\-Flow Motion Decoder \(AMD\) performs generative decoding via average\-velocity prediction, enabling efficient one\-step decoding\. Extensive experiments demonstrate that DiMoT achieves state\-of\-the\-art performance across various challenging text\-to\-motion benchmarks, yielding superior motion fidelity and text\-motion alignment\. The code will be available upon publication\.

## When Edge Independence Fails: Joint Graph Diffusion with Latent Sociability Priors

**Authors:** Adarsh Jamadandi; Nicolas Keriven; Aline Roumy

**ID:** 149583 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p1zm5z8W2c>) | [PDF](<https://openreview.net/pdf?id=p1zm5z8W2c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149583>)

Discrete graph diffusion models corrupt graph structure through independent edge updates with a Markovian noise model\. Combined with the exchangeability requirement on the output distribution, the terminal prior is necessarily an Erd\\H\{o\}s\-\-R\\'enyi \(E\-R\) random graph\. This has a fundamental consequence for unconditional graph generation without node features: in the large graph limit, any GNN denoiser applied to an E\-R graph approximately outputs an E\-R graph, making effective denoising difficult\. In practice, generated graphs fail to recover meaningful node heterogeneity and higher\-order structure\. Previous models introduced specialized node features to compensate, framing this as an expressivity problem, while the role of the prior remained unexamined\. We instead address the root cause by introducing the \\emph\{Latent Sociability Prior\} \(LSP\) and a \\emph\{joint\} diffusion process that co\-evolves latent node sociability variables and graph structure, removing edge independence while preserving exchangeability\. Unlike existing latent graph diffusion methods, the sociability mechanism requires no complex encoder: its sole role is to guide edge updates and preserve node heterogeneity throughout the trajectory\. We validate our approach on multiple graph generation datasets and show that the proposed framework more accurately captures graph distributions than baseline methods without node features\.

## FreeOcc: Decoupling Ego\-Motion for Efficient 4D Occupancy Forecasting via Continuous Flow Matching

**Authors:** Zeping Zhang; Zhuoya Zhao; Samy Metari; Robert Laganiere

**ID:** 149840 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mu2BHamTXA>) | [PDF](<https://openreview.net/pdf?id=mu2BHamTXA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149840>)

Current 4D occupancy world models use heavy cross\-attention or deep recurrence to disentangle ego\-motion from scene dynamics\. This requires significant computational capacity\. However, this effort is largely redundant since ego\-motion is inherently known from odometry\. We present FreeOcc, a lightweight continuous\-time world model that introduces explicit $SE\(2\)$ geometric decoupling into a conditional flow\-matching framework\. By mathematically factoring out self\-motion, we create a purely dynamic feature space\. This space supports attention\-free temporal fusion and allows physics\-constrained ODEs to operate strictly on residual agent kinematics\. To maximize deployment efficiency, FreeOcc introduces an uncertainty\-aware blending mechanism\. This routes well\-observed voxels to a single\-pass decoder, reserving the ODE solver exclusively for ambiguous, high\-uncertainty regions\. Requiring only 28\.3M parameters—roughly 40\\% of comparable models—our optimal ensemble mode \(FreeOcc\-E\) runs at 27 FPS\. On nuScenes, FreeOcc achieves state\-of\-the\-art forecasting performance with a 0\.47 m Near Field Chamfer Distance \(NFCD\) and 32\.1\\% mIoU\. Furthermore, the model transfers zero\-shot to SemanticKITTI\. It also proves highly robust, retaining 92\.8\\% of its ideal mIoU under significant sensor packet loss and timestamp jitter\.

## Magnitude\-preserving Layers Enable Efficient GANs

**Authors:** Nick Huang; Jackson Woodleigh; Aaron Gokaslan; Xinjie Yi; James Tompkin

**ID:** 150733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fnr7DvbHE3>) | [PDF](<https://openreview.net/pdf?id=fnr7DvbHE3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150733>)

GANs are appealing because they generate sharp images in a single forward pass\. Recent works have stabilized GAN training, but FID may still plateau on diverse datasets like ImageNet\-256 because the discriminator's activation magnitudes increase through training\. We trace this pathology to the discriminator's incentive to sharpen its decision boundary by rescaling activations rather than by finding better features\. Then, building on R3GAN, we treat magnitude preservation as a first\-class architectural target across the network: $\\ell\_2$ weight normalization with centering, magnitude\-preserving LReLU and residuals, forced post\-update normalization, and feed\-forward classifier heads\. Across a roadmap of configurations, we perform diagnostic ablations to clarify what does and does not work and why\. The resulting models reach FIDs of 2\.20 @ 17 M parameters, 1\.63 @ 60 M, and 1\.52 @ 130 M on class\-conditional ImageNet\-256\. At 1 NFE, this is substantially more efficient than competing diffusion and autoregressive methods, and than prior GAN baselines too \(e\.g\., 10$\\times$ more efficient than StyleGAN\-XL for similar FID\)\. In sum, our work presents a new SOTA in FID/parameter efficiency derived from simple adversarial training with well\-behaved magnitude preserving layers\.

## Normalizing Trajectory Models

**Authors:** Jiatao Gu; Tianrong Chen; Ying Shen; David Berthelot; Shuangfei Zhai; Joshua Susskind

**ID:** 148856 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ueBUOgdmxI>) | [PDF](<https://openreview.net/pdf?id=ueBUOgdmxI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148856>)

Diffusion\-based models decompose sampling into many small Gaussian denoising steps—an assumption that breaks down when generation is compressed to a few coarse transitions\. Existing few\-step methods address this through distillation, consistency training, or adversarial objectives, but sacrifice the likelihood framework in the process\. We introduce Normalizing Trajectory Models \(NTM\), which models each reverse step as an expressive conditional normalizing flow with exact likelihood training\. Architecturally, NTM combines shallow invertible blocks within each step with a deep parallel predictor across the trajectory, forming an end\-to\-end network trainable from scratch or initializable from pretrained flow\-matching models\. Its exact trajectory likelihood further enables self\-distillation: a lightweight denoiser trained on the model's own score produces high\-quality samples in four steps\. On text\-to\-image benchmarks, NTM matches or outperforms strong few\-step baselines in just four sampling steps while uniquely retaining exact likelihood over the generative trajectory\.

## Reusable Conditional Resampling via Flow Matching for Constraint\-Based Causal Discovery

**Authors:** SHUNYU ZHAO; Yanfeng Yang; Shuai Li; Kenji Fukumizu

**ID:** 153712 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JLCT3nT7eW>) | [PDF](<https://openreview.net/pdf?id=JLCT3nT7eW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153712>)

Constraint\-based causal discovery requires a large number of conditional independence \(CI\) tests\. In nonlinear and high\-dimensional settings, generative CI methods offer strong expressive power, but often suffer from high per test cost and limited reusability across the many query dependent conditional resampling tasks arising in graph search\. We propose a generative nonlinear CI testing and graph search framework for PC\-style causal discovery\. First, we develop the Flow Matching based Conditional Independence Test \(FMCIT\), which combines joint flow matching modeling with conditional imputation to reformulate generative CI testing from query specific conditional modeling into a conditional resampling process that can be reused across queries\. This allows the same generative model to repeatedly generate the randomized copies required by CI testing throughout the entire graph search procedure\. We then introduce GPC‑FMCIT, which embeds FMCIT into a guided PC pipeline with screening, guidance, refinement, and orientation\. By using low\-cost screening to shrink the search space, constructing edge\-specific candidate conditioning sets from local graph structure, and invoking FMCIT only in a budget\-controlled refinement stage, GPC\-FMCIT reduces both the deployment cost of individual nonlinear CI queries and the overall query complexity\. Experiments on synthetic datasets and real\-data analyses show that the proposed method achieves a strong accuracy\-\-efficiency trade\-off under nonlinear and high\-dimensional structures\. Overall, our results suggest that, through the joint design of reusable conditional resampling and controlled graph search, generative nonlinear CI testing can become a practical system level module for high‑dimensional PC‑style causal discovery\.

## STARFlow2: Bridging Language Models and Normalizing Flows for Unified Multimodal Generation

**Authors:** Ying Shen; Tianrong Chen; Yuan Gao; Yizhe Zhang; Yuyang Wang; Miguel Angel Bautista; Shuangfei Zhai; Joshua Susskind; Jiatao Gu

**ID:** 153469 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7AuyR68b3>) | [PDF](<https://openreview.net/pdf?id=L7AuyR68b3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153469>)

Deep generative models have advanced rapidly across text and vision, motivating unified multimodal systems that can understand, reason over, and generate interleaved text–image sequences\. Most existing approaches combine autoregressive language modeling with diffusion\-based image generators, inheriting a structural mismatch between causal text generation and iterative visual denoising\. We observe that autoregressive normalizing flows are autoregressive Transformers—sharing the same causal mask, KV\-cache mechanism, and left\-to\-right structure as LLMs— making them the most natural paradigm for true unified multimodal generation\. We present STARFlow2, built on the Pretzel architecture that vertically interleaves a pretrained VLM stream with a TarFlow stream via residual skip connections, both operating under the same causal mask\. Combined with a deep\-shallow flow design and a unified FAE latent space, STARFlow2 enables cache\-friendly interleaved generation where both text and visual outputs directly enter the KV\-cache without re\-encoding\. Experiments demonstrate strong performance across image generation and multimodal understanding benchmarks, validating autoregressive flows as a viable foundation for unified multimodal modeling\.

## Systematic Hazard Sampling: Minimal\-Variance Inference for Discrete Diffusion and Flow Models

**Authors:** Seunghwan Jang; Wonje Jeung; SooJean Han

**ID:** 151432 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=al6oaoCR5A>) | [PDF](<https://openreview.net/pdf?id=al6oaoCR5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151432>)

Uniform\-noise discrete diffusion and flow models generate sequences non\-autoregressively through iterative, context\-dependent token replacements\. However, these models are typically formulated as time\-inhomogeneous CTMC/DTMC processes, sampled using independent Bernoulli change decisions per discretization step\. This induces Poisson\-binomial variance in per\-position jump counts that grows with the number of required edits, leading to the common under\-editing \(residual noise\) and over\-editing \(cascading substitutions\) failure modes that degrade sample quality, especially under tight discretization budgets\. We identify this sampler\-induced variance as an orthogonal source of degradation, distinct from model\-side errors and addressable purely at inference time\. We propose Systematic Hazard Sampling \(SHS\), a training\-free, drop\-in, and hyperparameter\-free inference principle for any sampler that admits a stay\-vs\.\-replace decomposition\. SHS models per\-token edits as events driven by cumulative hazard \(CTMC\) or jump mass \(DTMC\) and triggers an edit whenever this quantity exceeds unit\-spaced thresholds with a single random phase per position\. For any fixed cumulative mass, this preserves the expected jump count while achieving the minimum conditional variance possible among unbiased integer estimators \(at most \\\(1/4\\\)\), without altering per\-jump destination sampling\. Experiments on four uniform\-noise discrete diffusion and flow language models spanning $\\sim$110M to $\\sim$3B parameters show that SHS consistently improves sample quality across NFE budgets, with the gains growing with NFE as predicted by the variance gap\.

## AegisFlow: Training\-free Non\-myopic Path\-safe Guided Flow Matching

**Authors:** Kunpeng Liu; Boshi Zhang; Keyou You

**ID:** 149715 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nyQ14lMMIK>) | [PDF](<https://openreview.net/pdf?id=nyQ14lMMIK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149715>)

_Abstract unavailable from the accessible public sources._

## Continuous Diffusion Scales Competitively with Discrete Diffusion for Language

**Authors:** Zhihan Yang; Wei Guo; Shuibai Zhang; Subham Sahoo; Yongxin Chen; Arash Vahdat; Morteza Mardani; John Thickstun

**ID:** 152067 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ViiyKzhLpA>) | [PDF](<https://openreview.net/pdf?id=ViiyKzhLpA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152067>)

_Abstract unavailable from the accessible public sources._

## Intrinsic Selection and Particle Resampling for Inference\-Time Scaling Beyond Domain Verifiability

**Authors:** Giorgio Giannone; Mustafa Eyceoz; Shabana Baig; Shivchander Sudalairaj; Anna C Doris; Faez Ahmed; Akash Srivastava; Kai Xu

**ID:** 149807 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nCaIsLevLx>) | [PDF](<https://openreview.net/pdf?id=nCaIsLevLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149807>)

_Abstract unavailable from the accessible public sources._

## StyleRoute: Diffusion Style Transfer via Regional Routing and Conflict\-aware Projection

**Authors:** Xunhao Lin; Yu Sun; Xinpeng Ding; Fei Gao; Maoying Qiao; Lihuo He; Nannan Wang

**ID:** 155545 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kfUQ7cPeY>) | [PDF](<https://openreview.net/pdf?id=4kfUQ7cPeY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155545>)

_Abstract unavailable from the accessible public sources._

## Learning When to Denoise: Optimizing Asynchronous Schedules for Latent Diffusion

**Authors:** Bingshuo Qian; Xiang Cheng

**ID:** 149435 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q637ymfOaO>) | [PDF](<https://openreview.net/pdf?id=q637ymfOaO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149435>)

_Abstract unavailable from the accessible public sources._

## Seeing the Unseen: Unified Visible–Invisible Motion for Physically Consistent Video Generation

**Authors:** Mingyang Bao; Fangda Ye; Xihao Chen; Bobo Li; Xiangtai Li; Shengqiong Wu

**ID:** 149881 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mXUs8DCmoQ>) | [PDF](<https://openreview.net/pdf?id=mXUs8DCmoQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149881>)

_Abstract unavailable from the accessible public sources._

## Disentangling generalization and memorization in large language models using chess

**Authors:** Leonard S\. Pleiss; Maximilian Schiffer; Robert K von Weizsäcker

**ID:** 153573 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOZDunh4vu>) | [PDF](<https://openreview.net/pdf?id=KOZDunh4vu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153573>)

_Abstract unavailable from the accessible public sources._

## You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank\-1 Trajectories

**Authors:** Zhepei Wei; Xinyu Zhu; Wei\-Lin Chen; Chengsong Huang; Jiaxin Huang; Yu Meng

**ID:** 154227 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FGnWADI4yz>) | [PDF](<https://openreview.net/pdf?id=FGnWADI4yz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154227>)

_Abstract unavailable from the accessible public sources._

## Cyclic Denoising Reveals Ultrastable Memories in Diffusion Models

**Authors:** Rishabh Sharma; Stefano Martiniani

**ID:** 153681 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JaiESGVAVn>) | [PDF](<https://openreview.net/pdf?id=JaiESGVAVn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153681>)

We introduce cyclic denoising—repeated forward and reverse diffusion at controlled noise amplitudes—as an extraction attack for image diffusion models\. Inspired by random organization in disordered solids, where cyclic mechanical perturbations anneal the system into increasingly stable configurations, cyclic denoising exposes regions of the learned distribution that remain largely inaccessible to standard sampling\. We find that this dynamics drives samples toward attractors with a broad stability spectrum, with the deepest attractors exhibiting ultrastability: they can be regenerated from near\-total corruption and sustained through thousands of noising\-denoising cycles\. Many of these deep attractors correspond to memorized training images, including stock photographs, brand watermarks, and web\-crawl artifacts\. Our extraction attack requires sampler\-level control, including mid\-process noise injection, but no gradients and no weight inspection\. Crucially, it requires no prior knowledge of training data, captions, or prompts\. In contrast, prior generate\-and\-filter attacks commonly rely on prompted generation using known or suspected training captions, followed by large\-scale sampling and post\-hoc similarity or membership\-inference filtering\. While cyclic denoising can also be applied with prompts, our main protocol is fully unconditioned\. We demonstrate the phenomenon in Stable Diffusion v1\.4, a large latent diffusion model, and in a smaller pixel\-space DDPM, showing consistent behavior across latent\- and pixel\-space diffusion models\. Across noise amplitudes, we observe a dynamical transition from trivial fixed points to structured memorized images, hierarchical partial absorption in which coarse scene layout freezes while fine details remain diffusive, basin hopping between memorized states with long residence times, prompt\-stabilized memorized templates, and cross\-initial\-condition universality of the recovered attractor set\. Together, these results establish cyclic denoising as both a physics\-inspired probe of generative landscapes and a practical tool for memorization auditing, with implications for privacy, copyright compliance, and model fingerprinting\.

## Robust Flow Matching under Target Corruption and Label Noise

**Authors:** Mert Can Kurucu; Erik Englesson; Hossein Azizpour

**ID:** 153777 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IjeT9T6KVY>) | [PDF](<https://openreview.net/pdf?id=IjeT9T6KVY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153777>)

Flow Matching \(FM\) is a strong framework for generative modeling due to its stable training and efficient sampling\. However, FM assumes clean target data and labels, an assumption often violated in practice\. We formulate FM training as a time\-dependent regression problem over conditional vector fields and analyze how the two corruption types affect the objective: i\) target corruption adds a time\-dependent residual term that grows with time, ii\) label noise causes updates to the wrong class\-conditional vector field\. Based on this analysis, we propose to improve FM robustness by mapping corruption\-specific residual scores to sample weights\. For target corruption, we propose the \\emph\{Temporal Residual Score\} \(TRS\), which emphasizes residual magnitudes at intermediate\-to\-late FM times, where clean and corrupted samples are more separable\. For label noise, we propose the \\emph\{Comparative Conditional Score\} \(CCS\), which compares the residual of the observed class\-conditional vector field against alternative class\-conditional vector fields for the same trajectory and velocity target\. Experiments across controlled corruption settings and real\-world noisy labels show that the proposed methods improve robustness over standard FM and robust\-training baselines, supporting corruption\-specific residual structure as a practical basis for robust FM\.

## Example\-Based Spatial Guidance for Training\-Free Concept Erasure in Diffusion Models

**Authors:** Younghwan Kil; Joonhyeong Park; Giung Nam; Jinwoo Shin; Juho Lee

**ID:** 150163 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kCWbL63oQy>) | [PDF](<https://openreview.net/pdf?id=kCWbL63oQy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150163>)

Text\-to\-image \(T2I\) diffusion models often synthesize policy\-violating content, necessitating robust safeguards and rigorous evaluation frameworks\. However, current approaches remain largely monolithic in both execution and evaluation, limited to coarse\-grained categorization within broad unsafe concepts\. Such approaches fail to account for the specific constituent factors of a violation, resulting in weak learning signals and allowing model collapse to bypass safety checks\. To overcome these limitations, we propose Example\-Based Spatial Guidance \(EBSG\), a training\-free method that utilizes user\-editable exemplar packs to provide granular spatial guidance for precise concept steering\. Unlike existing methods that coarsely steer the entire image away from a broad concept, EBSG decomposes these categories into specific sub\-concepts via exemplar text\-image pairs, providing explicit, localized steering signals for more robust safety control\. Furthermore, we introduce a vision language model \(VLM\)\-based evaluation protocol that provides a fine\-grained assessment, avoiding the pitfall of conventional binary evaluators that permit model collapse to bypass safety checks\. Empirically, EBSG achieves state\-of\-the\-art erasure performance across diverse safety datasets and concept categories, spanning four nudity benchmarks, seven I2P harmful\-concept slices, and four MJA metaphor categories, while supporting multi\-concept removal and transferring to a modern backbone, SD3\.

## Learning Energy\-Based Models from Stochastic Interpolants using Spatiotemporal Differences

**Authors:** Hanlin Yu; RuiKang OuYang; Partha Kaushik; Arto Klami; Michael Gutmann; Omar Chehab

**ID:** 152730 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QnHvCvmOn6>) | [PDF](<https://openreview.net/pdf?id=QnHvCvmOn6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152730>)

Learning an energy\-based model from data samples is a central problem in machine learning\. Many recent and popular methods, such as denoising score matching for training energy\-based diffusion models, use stochastic interpolants to corrupt data samples at different noise levels indexed by a time variable\. This defines a joint density over both the data space and time, and most methods learn its energy through either spatial or temporal differences\. We identify distinct failure modes for both of these approaches\. To solve them, we propose Spatiotemporal Noise\-Contrastive Estimation \(stNCE\), a framework for learning the energy through joint spatiotemporal differences\. stNCE unifies many existing methods and leads to new training objectives\. Experiments on images and molecules demonstrate performance competitive with state\-of\-the\-art density estimation methods\.

## Drift\-Resistant Navigation World Model with Anchored Epipolar Guidance

**Authors:** Po\-Chien Luan; Zimin Xia; WUYANG LI; Yang Gao; Alexandre Alahi

**ID:** 149468 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=psmFTmu8nE>) | [PDF](<https://openreview.net/pdf?id=psmFTmu8nE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149468>)

We propose Drift\-Resistant Navigation World Model, a generative model that mitigates both perceptual drift and geometric drift in conventional rollout\-based navigation world models\. Existing methods recursively feed generated content into subsequent steps, causing noise accumulation and degraded predictions, i\.e\., perceptual drift\. Meanwhile, their predictions often deviate from the agent’s motion, resulting in geometry drift\. We address both types of drift by redesigning world\-model prediction as an anchor\-guided rollout\. Instead of rolling out every frame sequentially, we first predict sparse future anchors that serve as stable long\-range targets, and then generate intermediate frames within each chunk conditioned on both past context and future anchors\. Importantly, these sparse anchors also provide geometric constraints, supported by bidirectional epipolar geometry, to localize where corresponding content should appear in the intermediate frames\. Experiments on four benchmarks demonstrate consistent improvements over strong baselines in long\-horizon visual quality, geometric consistency, and multi\-view coherence\. These gains further translate into improved downstream planning performance under the same planners, highlighting the importance of drift\-resistant, geometry\-aware prediction for reliable navigation world models\.

## BrainWorld: A Structural\-Prior\-Conditioned Generative Model for Whole\-Brain 4D fMRI Dynamics

**Authors:** Junfeng XIA; Wenhao Ye; Junxiang Zhang; Xuanye Pan; Mo WANG; Quanying Liu

**ID:** 155412 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rS8m8pxgo>) | [PDF](<https://openreview.net/pdf?id=5rS8m8pxgo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155412>)

Whole\-brain 4D fMRI generation is valuable for modeling functional brain dynamics, yet existing fMRI foundation models mainly target representation learning and downstream prediction rather than conditional predictive generation\. We introduce BrainWorld, a structural\-prior\-conditioned generative model for whole\-brain 4D fMRI dynamics\. BrainWorld uses sMRI as subject\-level anatomical context to guide future fMRI generation, integrating structural information into the denoising process rather than treating it as a parallel modality\. Evaluated on 22 datasets spanning diverse cohorts and brain states, BrainWorld generates stable 4D fMRI trajectories up to 400 frames, improves downstream performance through generated\-example augmentation, and learns transferable multimodal representations that outperform baselines\. Together, these results establish BrainWorld as a condition\-aware generative framework for long\-horizon brain dynamics modeling and multimodal representation learning\.

## scShapeBench: Discovering geometry from high dimensional scRNAseq data

**Authors:** Andrew J Steindl; Joao Felipe Rocha; Brian T Di Bassinga; Zachary Warren; Matthew Scicluna; César Miguel Valdez Córdova; Shabarni Gupta; Leire Torices; Daniel Neumann; Timothy J Mann; Ihuan Gunawan; Dhananjay Bhaskar; John G Lock; Christine L Chaffer; Guy Wolf; Smita Krishnaswamy

**ID:** 139214 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eE5wOtNka2>) | [PDF](<https://openreview.net/pdf?id=eE5wOtNka2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139214>)

High\-dimensional point cloud data arise across many scientific domains, notably single\-cell biology\. The "shapes" or topologies of these datasets are informative of types of information that can be extracted from the datasets\. For example clustered data admits the extraction of cell types or cell states in a static analysis of the datasets\. Continuous trajectory structures admit continuous transition or trajectory analysis, while other shapes such as archetypal shapes admit continuum extraction with a range of cells spanning behaviors\. While analysis pipelines exist, they often presuppose shape in data\. For example, the standard Seurat pipeline combines UMAP visualization with Louvain clustering\. This assumes clustered data\. Tools like Monocle and Spade assume a tree\-like shape, and flow\-models like MIOFlow and Conditional Flow Matching are suitable for trajectories\. Deciding which pipeline to apply to which part of the data is often the realm of bioinformaticians who visualize and qualitatively analyze the data before selecting one\. However, with the advent of agentic AI scientists, it becomes important to automate data shape detection, particularly into categories that are relevant for downstream analysis pipelines\. Towards this end we introduce \\textsc\{scShapeBench\} a benchmark dataset comprising both synthetic and single\-cell expert\-annotated datasets that are meant for the task of shape detection\. Synthetic datasets are sampled from a ground truth “skeleton graph” with variance\. Real single\-cell datasets are curated from a variety of sources and are annotated by experts, classifying four categories; clusters, single trajectory, multi\-branches and archetypes\. In addition, we provide a baseline method, scReebTower, to bridge the gap between data visualization and pipeline selection\. scReebTower relies on the diffusion geometry to extract Reeb graphs\. We provide new topology\-aware metrics with which we evaluate scReebTower and existing methods PAGA and Mapper on synthetic data\. On single\-cell data we curate expert annotations of shapes, and showcase evaluations of methods\. Our comparisons indicate scReebTower outperforming other baselines\. Overall, our contributions span benchmarks, evaluation metrics, and a novel baseline method for automated shape detection in high\-dimensional single\-cell data\.

## Flow Matching with In\-Context Priors for Out\-of\-Distribution Brain Dynamics

**Authors:** Sam Gijsen; Michał Łukomski; Marc\-Andre Schulz; Kerstin Ritter

**ID:** 153623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K10eas8GS0>) | [PDF](<https://openreview.net/pdf?id=K10eas8GS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153623>)

Conditional flow matching produces realistic out\-of\-distribution samples across modalities from images to proteins, yet the conditioning signals that enable extrapolation remain poorly understood for biological time series\. While considerable work has focused on areas of biology such as proteins and molecules, generative models of neural time series have been largely restricted to categorical conditioning, which precludes compositional and zero\-shot generalization\. In this work, we propose a per\-timestep conditioned diffusion transformer for generating realistic fMRI brain dynamics during unseen cognitive tasks, by injecting both compositional language and optional spatial priors in\-context\. Such zero\-shot generation would support in\-silico task design and counterfactual evaluation of novel cognitive experiments before costly scanner acquisition\. Leveraging this model, we evaluate across hundreds of held\-out task conditions and characterize predictive performance in relation to the training manifold\. From language alone, the model recovers region\-specific recruitment across tasks and held\-out spatial activation patterns\. Spatial priors, when available, complement the text pathway by anchoring generation in regions of task space where language alone degrades, while retaining the compositional structure needed for counterfactual task specification\. To our knowledge this is the first generative model of whole\-cortex fMRI dynamics for unseen cognitive tasks, enabling counterfactual neuroscience and data\-driven experimental design\.

## UniVer: A Unified Perspective for Multi\-step and Multi\-draft Speculative Decoding

**Authors:** Yepeng Weng; Qiao Hu; Takehisa Yairi

**ID:** 155949 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1bA7Ig2sVb>) | [PDF](<https://openreview.net/pdf?id=1bA7Ig2sVb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155949>)

Speculative decoding accelerates Large Language Models via draft\-then\-verify, where verification can be framed as an Optimal Transport \(OT\) problem\. Existing approaches typically handle multi\-draft and multi\-step aspects in isolation, applying either flat OT to single\-step drafts or per\-token rejection sampling to tree\-structured candidates\. This separation leaves the joint regime \(where multi\-step dependencies meet multi\-draft branching\) poorly optimized, as local verification rules fail to exploit the coupling between horizontal and vertical dimensions of candidate trees\. In this paper, we propose a unified perspective that casts tree\-based verification as a conditional OT problem\. Our key insight is that vertical dependencies can be abstracted through prefix acceptance probabilities, which act as dynamic scaling factors to actively guide horizontal draft selection\. Based on this principle, we introduce UniVer, a verification algorithm that jointly optimizes across tree levels by composing local optimal transport plans under prefix constraints\. We prove that UniVer remains lossless and achieves the optimal acceptance rate under the proposed conditional framework\. Extensive experiments across different tasks and models demonstrate that UniVer improves acceptance length by 4\.2\\% to 8\.5\\% over standard recursive rejection sampling without replacement, while maintaining exact distributional alignment with the target model\.

## ParaPC\-FM: Accelerating Parallel Sampling via Principled Initialization

**Authors:** Bangwei Li; Chuan Gou; Jianrong Lu; Guoyao Yu; Jianhai Chen

**ID:** 150049 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l8sEnyVlRf>) | [PDF](<https://openreview.net/pdf?id=l8sEnyVlRf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150049>)

Flow matching and diffusion models achieve high\-quality generation by solving continuous\-time generative dynamics, but their sampling remains inherently sequential and costly\. Parallel sampling reduces wall\-clock latency, yet often requires many function evaluations \(NFEs\) due to inaccurate future\-state initialization and repeated correction\. We propose ParaPC\-FM, a fixed\-point predictor\-\-corrector framework that unifies high\-order solver correction and future\-state initialization, enabling both components to be incorporated into different parallel samplers\. In particular, our UniP\-based truncated initialization reuses past velocity predictions to estimate future states more accurately, reducing correction iterations and NFEs with almost no additional overhead\. On a ParaDiGMS\-style framework, ParaPC\-FM achieves up to $1\.25\\times$ and $1\.49\\times$ speedups on FLUX\.1\-dev at $50$ and $100$ steps, and up to $1\.22\\times$ and $1\.16\\times$ speedups on Stable Diffusion 3 and Stable Diffusion 3\.5 at $50$ steps\. When integrated into ParaTAA, the proposed initialization further achieves up to $1\.17\\times$ speedup at $50$ steps\. Importantly, these acceleration gains are obtained while keeping image quality nearly unchanged\.

## BSTabDiff: Block\-Subunit Diffusion Priors for High\-Dimensional Tabular Data Generation

**Authors:** Al Zadid Sultan Bin Habib; Md Younus Ahamed; Prashnna K Gyawali; Gianfranco Doretto; Donald A Adjeroh

**ID:** 151140 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ciPCMXX1aj>) | [PDF](<https://openreview.net/pdf?id=ciPCMXX1aj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151140>)

High\-Dimensional Low\-Sample Size \(HDLSS\) tabular domains \(e\.g\., omics\) are characterized by $n \\ll m$, where $n$ = number of samples, and $m$ = number of features\. Such domains often exhibit strong local correlation groups, sparse cross\-group dependencies, heavy\-tailed non\-Gaussian marginals, heteroscedastic noise, and structured missingness, making direct density learning in $\\mathbb\{R\}^m$ ill\-conditioned since $n \\ll m$\. We propose BSTabDiff, a block\-subunit generative framework that partitions the $m$ observed features into $M$ latent blocks \($M \\ll m$\) and generates each block via a shared low\-dimensional subunit variable, concentrating global dependence learning in the compact block\-latent space $\\mathbb\{R\}^M$ while decoding to the full feature space with copula\-driven dependence, flexible per\-feature marginals, and explicit missingness mechanisms\. BSTabDiff can induce a data\-driven feature ordering and block construction before latent partitioning, allowing the model to better align with local dependency structure when such organization is beneficial\. BSTabDiff supports modern deep priors on block latents, including diffusion and normalizing flows, enabling stable synthesis and controllable benchmark generation in the HDLSS regime\. Empirically, BSTabDiff produces more realistic and more stable high\-dimensional synthetic data when compared with unstructured tabular generators on HDLSS data\.

## Flow Matching for Count Data

**Authors:** Ganchao Wei; John Pearson

**ID:** 155470\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155470

[Paper](<https://openreview.net/forum?id=5N0iGXXzEJ>) | [PDF](<https://openreview.net/pdf?id=5N0iGXXzEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155470>)

High\-dimensional count data arise in applications such as single\-cell RNA sequencing and neural spike trains, where mapping between distributions across successive batches or time points form critical components of data analysis\. The recent success of diffusion\- and flow\-based deep generative models for images, video, and text motivates extending these ideas to count\-valued settings, but many existing methods either treat each count as a categorical state or transform counts into a continuous space, neither of which is natural or efficient when the count range is large\. We propose count\-FM, a flow\-matching framework for count data based on a continuous\-time birth\-death process with local unit jumps\. Count\-FM learns marginal transitions efficiently in count space through simulation\-free training of conditional transition rates, allowing transport between arbitrary count\-distributed source and target populations\. In simulation, count\-FM achieves better sample quality than representative baselines while using substantially fewer parameters\. We further apply count\-FM to scRNA\-seq and neural spike\-train data for unconditional generation, transport, and conditional generation\. Across these tasks, count\-FM yields improved sample quality, greater modeling efficiency, and interpretable transport paths\.

## Energy\-Tweedie: Score meets Score, Energy meets Energy

**Authors:** Andrej Leban

**ID:** 150007\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150007

[Paper](<https://openreview.net/forum?id=lTLzpUqJPJ>) | [PDF](<https://openreview.net/pdf?id=lTLzpUqJPJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150007>)

Denoising and score estimation are classically linked through Tweedie’s formula, which relates the posterior mean under Gaussian corruption to the Stein score of the noisy marginal\. In this work, we extend this perspective beyond Gaussian noise to a broad class of elliptical, energy\-based noise distributions, with particular emphasis on generalized Gaussian corruptions\. We derive the Energy–Tweedie identity: when the denoising posterior is viewed through the lens of proper scoring rules, the path derivative of a matched, possibly non\-Euclidean energy score recovers the Stein score of the noisy marginal\. Thus, the familiar correspondence between Gaussian noise, posterior means, squared loss, and Tweedie’s formula is lifted to a distributional correspondence between generalized Gaussian noise, full posterior laws, Mahalanobis energy scores, and the Energy–Tweedie identity\. Among its consequences, this identity gives a posterior\-sample\-based route to score estimation, yields a principled criterion for noise\-parameter calibration, and supplies a score\-based perspective on recent diffusion\-style generative methods trained with scoring rules\.

## Sparsely Supervised Diffusion

**Authors:** Wenshuai Zhao; Zhiyuan Li; Yi Zhao; Mohammad Vali; Martin Trapp; Joni Pajarinen; Juho Kannala; Arno Solin

**ID:** 155610\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155610

[Paper](<https://openreview.net/forum?id=4HalTYbzQG>) | [PDF](<https://openreview.net/pdf?id=4HalTYbzQG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155610>)

Diffusion models have shown remarkable success across a wide range of generative tasks\. However, they often suffer from spatially inconsistent generation, arguably due to excessive correlations learned by the model\. This can produce samples that are locally plausible but globally inconsistent\. We propose a principled method to mitigate this issue\. Our method, sparsely supervised diffusion \(SSD\), is a simple yet effective masking framework that can be implemented with only a few lines of code\. We analytically show that SSD fundamentally alters diffusion model training by modifying the spectrum of the data covariance and that it suppresses correlations in the data covariance matrix\. Experiments show that our method more accurately approximates the underlying population score function, reduces memorization on small datasets, and promotes the use of essential contextual information during generation\. Moreover, even when up to 98\\% of pixels are masked, it achieves competitive FID scores across a range of datasets and, importantly, avoids the training instability commonly observed on small datasets\.

## ELF: Embedded Language Flows

**Authors:** Keya Hu; Linlu Qiu; Yiyang Lu; Hanhong Zhao; Tianhong Li; Yoon Kim; Jacob Andreas; Kaiming He

**ID:** 148278\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148278

[Paper](<https://openreview.net/forum?id=z3I6Aj563f>) | [PDF](<https://openreview.net/pdf?id=z3I6Aj563f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148278>)

Diffusion and flow\-based models have become the de facto approaches for generating continuous data, e\.g\., in domains such as images and videos\. Their success has attracted growing interest in applying them to language modeling\. Unlike their image\-domain counterparts, today’s leading diffusion language models \(DLMs\) primarily operate over discrete tokens\. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain\. We propose Embedded Language Flows \(ELF\), a class of diffusion models in continuous embedding space based on continuous\-time Flow Matching\. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared\-weight network\. This formulation makes it straightforward to adapt established techniques from image\-domain diffusion models, e\.g\., classifier\-free guidance \(CFG\)\. Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps\. These results suggest that ELF offers a promising path toward effective continuous DLMs\.

## Uniform Diffusion Models revisited: Leave\-One\-Out Denoiser and Absorbing State Reformulation

**Authors:** Samson Gourevitch; Yazid Janati; Dario Shariatian; Umut Simsekli; Eric Moulines; Eric Xing; Alain Durmus

**ID:** 153715\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153715

[Paper](<https://openreview.net/forum?id=JJGRXH8cyk>) | [PDF](<https://openreview.net/pdf?id=JJGRXH8cyk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153715>)

Discrete diffusion models are typically trained by predicting the clean data given a noisy observation, which is then used with a certain choice of reverse transition parameterization\. Two choices coexist in the literature, which we refer to as marginalization and plug\-in\. Although they coincide in the case of masked diffusion models \(MDMs\), we revisit this question for uniform diffusion models \(UDMs\), where the distinction matters\. We show that the plug\-in parameterization is not optimized by the denoising posterior but by a \\emph\{leave\-one\-out\} posterior that removes the influence of the local observation\. We give a thorough characterization of the resulting training target, together with exact conversion formulas between the denoiser, the \\emph\{leave\-one\-out\} posterior, and the score\. As a by\-product, the leave\-one\-out characterization yields a Gibbs\-based predictor–corrector scheme at no additional training cost\.  We further propose an absorbing\-state construction of uniform diffusion, whose denoiser decomposes into simpler absorbing denoising posteriors, and which recovers the full UDM joint law following a simple resampling step\. Empirically, we show that these design choices interact strongly with optimization and generative quality; on language modeling, the \\emph\{leave\-one\-out\} denoiser improves over other parameterizations\.

## Show Me What You Don’t Know: Efficient Sampling from Invariant Sets for Model Validation

**Authors:** Armand Rousselot; Joran Wendebourg; Ullrich Köthe

**ID:** 149469\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149469

[Paper](<https://openreview.net/forum?id=pslue396DW>) | [PDF](<https://openreview.net/pdf?id=pslue396DW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149469>)

The performance of machine learning models depends on discovering features in the data that are relevant to solving the given task while ignoring irrelevant variation\. To check and visualize whether this is the case, we propose ‘invariance auditing’, a diagnostic tool to analyze feature extractors\. Invariance auditing generates diverse inputs which all yield the same features as a given query input, and are therefore treated as identical by the model\. Using external knowledge about the task at hand, this enables assessing if the learned invariances do or do not conform to the task's required semantics\. Unlike existing work where a dedicated generative model is trained for each feature extractor, our algorithm is training\-free and exploits a pretrained diffusion or flow\-matching model to sample invariant inputs\. Our fiber loss \-\- which penalizes feature mismatch \-\- guides the denoising process so the output shares the same representation as the query input\. This replaces days of training with a single guided generation procedure at the same quality\. Experiments on popular datasets and model types demonstrate that our auditing method reveals invariances spanning very desirable and concerning behavior\. For instance, it detects cases where Qwen\-2B places patients with situs inversus \(heart on the right side\) in the same fiber as typical anatomy\.

## Efficient One\-to\-many Domain Translation via Diffusive Entropic Optimal Transport

**Authors:** David Vaneev; Ivan Shchekotov; Denis Rakitin; Dmitry Vetrov

**ID:** 150018\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150018

[Paper](<https://openreview.net/forum?id=lMokHneWkz>) | [PDF](<https://openreview.net/pdf?id=lMokHneWkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150018>)

Domain translation requires a delicate balance between realism, input\-output alignment, and output diversity\. Entropic optimal transport \(EOT\) provides a principled formulation of this trade\-off, but its practical use remains challenging\. Directly maximizing entropy of a stochastic transport plan requires evaluating log densities of generator\-induced distributions, which scales poorly with dimension\. In contrast, diffusion models make density information accessible in high dimensions through noising the corresponding distributions and approximating their score functions\. In this work, we introduce the diffusive entropy regularizer that measures diversity after progressively noising the conditional output distribution, making the entropy term compatible with score estimation\. The resulting \*\*Diffusive EOT\*\* retains the main theoretical guarantees of EOT: a unique solution, controllable diversity, and convergence to unregularized OT solution in the zero\-regularization limit\. We then introduce \*\*DM\-EOT\*\*, a practical algorithm for approximately solving the Diffusive EOT that combines diffusion\-based distribution matching with transport cost and diffusive entropy penalties\. DM\-EOT supports both fast one\-step generation and higher\-fidelity diffusion\-based multi\-step sampling\. Both variants achieve comparable or superior performance on unpaired domain translation benchmarks among one\-to\-many baselines with comparable inference cost and diversity\.

## Advanced Routing as Regularization Allocation for Efficient Diffusion Transformer Training

**Authors:** Qin MA; XIAOQI SUN; bo li; Yuquan Zhou; Weizhong Zhang

**ID:** 152568\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152568

[Paper](<https://openreview.net/forum?id=S8tvv8HOHm>) | [PDF](<https://openreview.net/pdf?id=S8tvv8HOHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152568>)

Diffusion Transformers \(DiTs\) have achieved strong performance in visual generation, but their dense token processing leads to slow training convergence and high computational cost\. Recent token routing methods such as TREAD accelerate training by allowing a random subset of tokens to bypass intermediate layers\. It can be expected that carefully tuning the routing ratios over time steps or layers  can achieve more significant accelerations\. However, the theoretical mechanisms underlying stochastic routing remain underexplored, making the tuning of routing ratios intractable\. In this paper, we first theoretically show that stochastic token routing can be interpreted as an implicit route\-sensitivity regularizer\. Under this view, the routing ratio determines the strength of the induced regularization: larger routing ratios introduce stronger route\-induced perturbations and therefore stronger regularization pressure\. This further motivates a noise\-conditioned routing strategy\. In diffusion training, samples at larger timesteps contain heavier noise and often provide less stable gradient signals, suggesting that they may require stronger regularization\. We therefore assign larger routing ratios to higher\-noise samples, allowing the routing\-induced regularization strength to adapt to the noise condition\. Based on this insight, we propose \\emph\{Noise\-Aware Routing\}, which partitions samples within each mini\-batch into low\-, middle\-, and high\-noise regions and assigns progressively larger routing ratios to them\. This simple noise\-conditioned allocation synergistically bridges computational savings with enhanced model priors\. Extensive experiments on class\-conditional ImageNet generation show that our method accelerates training convergence and improves generation quality\. Noise\-Aware Routing achieves up to \\textbf\{15\.6\}$\\times$ and \\textbf\{20\}$\\times$ convergence speedups over DiT baselines—and outperforms TREAD—on ImageNet\-256 and ImageNet\-512, respectively, measured by the training iterations required to match our 400K\-step FID\. In the guided setting, our method achieves an FID of \\\(2\.67\\\) with a substantially shorter training iterations without architectural changes\.

## Multi\-step Consistency Models: A Complete Error Theory and Optimal Step Selection

**Authors:** Yanshu Wang; Rui Liu; Tong Yang

**ID:** 153683\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153683

[Paper](<https://openreview.net/forum?id=JZcfQE5K9P>) | [PDF](<https://openreview.net/pdf?id=JZcfQE5K9P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153683>)

Consistency models achieve fast image synthesis by chaining a small number of neural evaluations along a diffusion trajectory, yet the distribution error of $N$\-step sampling for $N \\geq 3$ has lacked a rigorous characterisation\. We establish a tight Wasserstein\-$p$ error bound for arbitrary $N$: the total error equals a Lipschitz\-weighted sum of per\-step local consistency errors, $\\sum\_\{k=1\}^\{N\} L\_x^\{N\-k\} \\delta\_k$, making the propagation mechanism explicit\. From this bound we derive a closed\-form optimal step count $N^\{\\star\}$ whose structure bifurcates on whether the spatial Lipschitz constant $L\_x$ exceeds one: for $L\_x &gt; 1$, exponential error growth yields $N^\{\\star\} \\approx \(\\ln L\_x\)^\{\-1\} \\log\(\\beta\\gamma\(L\_x\-1\)/\(c \\ln L\_x\)\)$; for $L\_x &lt; 1$, geometric\-series saturation gives $N^\{\\star\} \\approx \(\\beta\\gamma\(1\-L\_x\)/\(c \\, \|\\ln L\_x\|\)\)^\{1/\(\\gamma\+1\)\}$\. The two\-regime structure accounts for ECT's best FID of $2\.73$ at $N=2$: with $L\_x \\approx 0\.85 &lt; 1$ \(Case 2\), the formula gives $N^\{\\star\} \\approx 1\.7$\. Experiments on CIFAR\-10 reproduce the predicted U\-shaped FID curve with $N^\{\\star\} = 8$ on a capacity\-constrained model in which error accumulation is easier to see\.

## StableHand: Quality\-Aware Flow Matching for World\-Space Dual\-Hand Motion Estimation from Egocentric Video

**Authors:** Huajian Zeng; Chaohua Yao; Yuantai Zhang; Jiaqi Yang; Rolandos Alexandros Potamias; Xingxing Zuo

**ID:** 155198\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155198

[Paper](<https://openreview.net/forum?id=7Yxqeh6UZi>) | [PDF](<https://openreview.net/pdf?id=7Yxqeh6UZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155198>)

Recovering world\-space 4D motion of two interacting hands from egocentric video is a fundamental capability for supervising robot policy learning, where wrist trajectories track the end\-effector and finger articulations specify the grasp pose\. Two major challenges arise in this setting: hands frequently leave the camera view for extended periods due to head motion, and persistent hand–object interactions cause severe occlusions of one or both hands\. Existing methods uniformly condition on noisy hand motion observations without accounting for their per\-frame reliability, leading to substantial performance degradation\. Our key insight is that accurate world\-space hand motion esimation is tightly coupled with the quality of per\-frame hand observations\. To this end, we decompose the quality of hand motion observations extracted from an off\-the\-shelf hand pose estimator into four channels: wrist global translation and finger articulations for both hand\. We propose StableHand, a quality\-aware flow\-matching framework conditioned on these four\-channel quality signals, which are predicted by a learned quality network\. We naturally incorporate the quality signals into the flow\-matching process through a per\-channel forward schedule, a quality\-adjusted velocity target, AdaLN modulation of the DiT denoiser, and a quality\-aware ODE initialization\. This unified generative process preserves high\-quality observations while reconstructing unreliable ones using a learned bimanual motion prior\. Experiments on HOT3D and ARCTIC, two egocentric benchmarks featuring long missing\-hand spans and persistent hand–object occlusions, show that StableHand achieves state\-of\-the\-art performance across all reported metrics, reducing W\-MPJPE by 20\-25% compared to the strongest baseline, with the largest gains on heavily occluded ARCTIC sequences\. Code and pretrained models will be released upon acceptance\.

## Stochastic Interpolants via Conditional Dependent Coupling

**Authors:** Chenrui Ma; Xi Xiao; Tianyang Wang; Xiao Wang; Yanning Shen

**ID:** 149946\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149946

[Paper](<https://openreview.net/forum?id=m0BAYdzjal>) | [PDF](<https://openreview.net/pdf?id=m0BAYdzjal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149946>)

Existing image generation models face critical challenges regarding the trade\-off between computation and fidelity\. Specifically, models relying on a pretrained Variational Autoencoder \(VAE\) suffer from information loss, limited detail, and the inability to support end\-to\-end training\. In contrast, models operating directly in the pixel space incur prohibitive computational cost\. Although cascade models can mitigate computational cost, stage\-wise separation prevents effective end\-to\-end optimization, hampers knowledge sharing, and often results in inaccurate distribution learning within each stage\. To address these challenges, we introduce a unified multi\-stage generative framework formulated under the \\emph\{stochastic interpolant\} formalism with our \\textbf\{Conditional Dependent Coupling\} strategy as a Flow\-Matching variant\. It decomposes the generative process into interpolant trajectories at multiple stages, ensuring accurate distribution learning while enabling end\-to\-end optimization\. Importantly, the entire process is modeled as a single unified Diffusion Transformer, eliminating the need for disjoint modules and also enabling knowledge sharing\. Under explicitly stated assumptions, we provably reduce both transport cost and asymptotic inference time, we empirically validate the underlying NFE\-\-transport\-cost and per\-evaluation\-cost relations\. Extensive experiments demonstrate that our method achieves competitive fidelity and substantially lower wall\-clock cost in the low\-NFE regime across multiple resolutions\.

## DiLaDiff: Distilled Latent\-augmented Diffusion for Language Modeling

**Authors:** Jean\-Marie Lemercier; Tomas Geffner; Morteza Mardani; Karsten Kreis; Arash Vahdat; Ante Jukić

**ID:** 150062\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150062

[Paper](<https://openreview.net/forum?id=l1EueDpKBW>) | [PDF](<https://openreview.net/pdf?id=l1EueDpKBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150062>)

Diffusion language models intrinsically fail to capture correlations between decoded tokens, which leads to a harsh trade\-off between sampling quality and throughput\. To solve this issue, we propose DiLaDiff, a variant of masked diffusion language models with three components: \(1\) a continuous latent space with semantic capabilities, learned by an auto\-encoder fine\-tuned from an existing masked diffusion language model; \(2\) a latent diffusion model learning the prior over the encoder distribution; \(3\) a consistency model distilling the learned prior into a few\-step latent generative model\. We show that, even without distillation, our latent\-guided diffusion model outperforms the masked diffusion baseline while significantly accelerating inference\. Consistency distillation further lowers the computational overhead of continuous diffusion, such that the latent is generated in negligible time compared to discrete decoding\.

## Bonobo: Efficient Library\-Scale Generation for De Novo Antibody Design

**Authors:** Sebastian Ober; Nick Bhattacharya; Phillip M Maffettone; Calvin McCarter; Hunter Elliott

**ID:** 149825\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149825

[Paper](<https://openreview.net/forum?id=n11puTWueo>) | [PDF](<https://openreview.net/pdf?id=n11puTWueo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149825>)

Recently several methods have shown promise for purely in silico “de novo” design of antibodies which bind to drug targets\. The methods which have shown success in vitro propose candidates via either a generative diffusion model or hallucination\-based sequence optimization, and then filter these candidates with a structure predictor model\. Hallucination methods rely on compute\-intensive backpropagation through a structure predictor model for each candidate, and the generative methods require expensive structure re\-prediction and filtering of many \(often mostly non\-passing\) candidates, limiting their application to test\-time generation of large libraries\. Given the highly variable per\-drug\-target hit rates of current methods, screening large libraries is a well established route to improved antibody candidate discovery\. Thus, we propose an alternative approach, Bonobo, which instead formulates this problem as black\-box optimization of a per\-drug\-target generative model, amortizing candidate generation into training\. This is accomplished by using a structure predictor as a reward signal to directly train a GFlowNet generative model\. We show that this approach can match or exceed the in silico metrics of state\-of\-the\-art approaches, while allowing for dramatically more efficient generation of diverse and arbitrarily large numbers of antibody binder candidates\.

## Discovering Phase Space Structure in Learned Hamiltonian Systems

**Authors:** Jiayin Liu; Yulong Yang; Vineet Bansal; Christine Allen\-Blanchette

**ID:** 148569\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148569

[Paper](<https://openreview.net/forum?id=wstD80hIpm>) | [PDF](<https://openreview.net/pdf?id=wstD80hIpm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148569>)

Mechanics\-inspired neural dynamical models improve interpretability and physical consistency, but they usually assume a known configuration space, fixed physical parameters, and deterministic prediction from a prescribed initial condition\. We introduce Structured Phase Space GAN \(SPS\-GAN\), a conditional generative model that learns structured dynamics from both Cartesian trajectories and video\. SPS\-GAN combines a port\-Hamiltonian backbone with adversarial conditional generation, allowing conservative, dissipative, and forced systems to be represented in a single architecture\. To infer latent mechanical structure from raw observations, we use a cyclic\-coordinate loss that recovers both the system degrees of freedom and canonical coordinates without access to the true phase space\. Experiments on simulated and real\-world systems show that SPS\-GAN improves trajectory accuracy over supervised dynamics baselines and video consistency over generative baselines, while consistently recovering the correct latent mechanical coordinates across observation modalities and dynamical regimes\.

## Architecture\-Embedded Physics Priors for Mitigating Spectral Bias in Physics\-Informed Neural Networks

**Authors:** Zhuo Zhang; Li Zhang; Ying Miao; Hongzong LI; Zhixuan Liang; Yong Yang; Gemine Vivone

**ID:** 150185\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150185

[Paper](<https://openreview.net/forum?id=k4m1F3R3m4>) | [PDF](<https://openreview.net/pdf?id=k4m1F3R3m4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150185>)

Physics\-Informed Neural Networks \(PINNs\) struggle to capture high\-frequency components of PDE solutions, a failure mode known as spectral bias\. Most existing fixes adjust the loss, the sampling, or the input encoding, but the network itself remains agnostic to the equation it is supposed to solve\. We take a different route and embed physics priors into the architecture\. The network's internal spectrum is shaped to match the spectrum of the target PDE through three components that are trained end\-to\-end: a bounded coordinate warping that contracts regions where the solution varies sharply, a spectral attention layer driven by the PDE residual that emphasizes physically active Fourier modes, and an inter\-harmonic gate that lets low\-frequency channels modulate high\-frequency ones\. We test the design on four forward PDEs \(Helmholtz, Wave, Klein\-\-Gordon, Burgers\), the Burgers inverse problem, and seismic reconstruction, including Gulf of Mexico field data\. Across these tasks, the architecture clearly outperforms seven PINN baselines on accuracy and produces noticeably fewer artifacts\. Code will be made publicly available upon acceptance\.

## DriveFuture: Future\-Aware Latent World Models for Autonomous Driving

**Authors:** Yufeng hong; Xiaotian Zhou; Yingyan Li; Xiangpo Zhou; Lin Liu; Yadan Luo; Zheng Liu; Lei Yang; Ziying Song

**ID:** 149040\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149040

[Paper](<https://openreview.net/forum?id=tITD5xFjY8>) | [PDF](<https://openreview.net/pdf?id=tITD5xFjY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149040>)

Existing latent world models for autonomous driving have opened a promising path toward future\-aware driving intelligence\. However, they typically treat future latent states as prediction targets or auxiliary signals, rather than directly conditioning trajectory planning\. This can entangle current and future features in latent space\. In this work, we propose DriveFuture, a future\-aware latent world modeling framework for autonomous driving that explicitly learns planning\-oriented foresight by conditioning the current latent state modeling process on future world states\. Specifically, during training, the model first predicts future latent world states from the current latent state and ego action, and then refines the prediction against the ground\-truth future latent state via cross\-attention\. The resulting future\-aware latent serves as an explicit condition for a diffusion\-based trajectory planner\. During inference, DriveFuture conditions on the predicted future latent state instead of the ground\-truth future state\. DriveFuture achieves SOTA performance on the public NAVSIM benchmarks, reaching 55\.5 EPDMS on NAVSIM\-v2 navhard, 89\.9 EPDMS on NAVSIM\-v2 navtest, and 90\.7 PDMS on NAVSIM\-v1 navtest, respectively\. These results suggest that the key to latent world modeling lies not merely in simulating future states, but more importantly in conditioning current decision\-making on future states\. Notably, as of April 2026, DriveFuture ranks 1st on the NAVSIM\-v2 navhard leaderboard and achieves SOTA performance on NAVSIM\-v1 navtest\.

## Towards more general control of diffusion models using Jeffrey Guidance

**Authors:** Raphaël Razafindralambo; Rémy Sun; Frederic Precioso; Jes Frellsen; Pierre\-Alexandre Mattei

**ID:** 149382\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149382

[Paper](<https://openreview.net/forum?id=qUtuEEQhIU>) | [PDF](<https://openreview.net/pdf?id=qUtuEEQhIU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149382>)

A key strength of diffusion models lies in their flexibility, since their outputs can be controlled at sampling time through guidance\.  However, beyond simple cases such as conditional sampling, the target distribution is often left implicit, defined only through a sampling rule or a heuristic energy function\. To address this, we propose Jeffrey guidance, a principled framework that extends diffusion\-model control to applications beyond what standard guidance can express\. It leverages Jeffrey’s rule of conditioning to update marginal distributions towards a prescribed target, preserving the conditional structure and minimally perturbing the joint distribution\. We first demonstrate Jeffrey guidance by targeting a prescribed embedding distribution\. With Inception embeddings as the target, this leads to substantial reductions in FID on both CIFAR\-10 and FFHQ\. We further apply Jeffrey guidance to fairness on CelebA\-HQ, updating an unconditional diffusion model to enforce independence between attributes\.

## \\texttt\{FEROM\}: Frontier Endogenous Reveal\-Order Marginal Policy Optimization for Masked Diffusion LMs

**Authors:** Zian Su; Ziyang Huang; Kaiyuan Zhang; Xiangyu Zhang

**ID:** 155453\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155453

[Paper](<https://openreview.net/forum?id=5Tnt9zpIFJ>) | [PDF](<https://openreview.net/pdf?id=5Tnt9zpIFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155453>)

Masked diffusion language models generate text by iteratively unmasking positions, with practical samplers often selecting reveal positions from the model's own logits\. The reveal order is therefore an endogenous latent variable of the rollout process with an enormous discrete latent space\. Policy optimization objectives relying on pre\-defined schedules or sampled trajectories introduce either bias or high variance\. In this paper, we propose \\texttt\{FEROM\}, \\emph\{Frontier Endogenous Reveal\-Order Marginal Policy Optimization\}, which targets the rollout\-induced marginal response policy of masked diffusion LMs\. \\texttt\{FEROM\} derives a Rao\-\-Blackwellized policy\-gradient identity over latent reveal orders and expresses the resulting estimator as posterior edge occupancy on a reveal\-state DAG\. To make marginalization practical, we introduce Frontier Reveal Marginalization, a budgeted estimator that combines scorelaw local reveal estimation with frontier expansion of high\-mass partial states\. Integrated into a GRPO\-style objective, \\texttt\{FEROM\} replaces single\-path log\-scores with a locally marginalized edge\-based surrogate\. Experiments on math and coding tasks show comparable or improved results over existing methods under matched compute budgets\. Offline proxy study further shows potential in gains with increased budgets\.

## What kills $v$\-prediction? A Patch\-wise PCA Perspective on Pixel\-Space Flow Matching

**Authors:** Tianze Luo; Haofeng Huang; Yuan Yao

**ID:** 154141\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154141

[Paper](<https://openreview.net/forum?id=FwWaPhPb2O>) | [PDF](<https://openreview.net/pdf?id=FwWaPhPb2O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154141>)

Latent Diffusion Models dominate generative modeling but face two\-stage training complexity and the inherent reconstruction limits of pre\-trained autoencoders\. Pixel\-space Flow Matching offers a simplified end\-to\-end alternative yet often encounters training instabilities when using the standard $v$\-prediction objective\. Recent research attributes this difficulty to the off\-manifold nature of noised targets, prompting a widespread shift toward $x$\-prediction\. In this paper, we carefully investigate this prevailing assumption through patch\-wise Principal Component Analysis \(PCA\), and we reveal that the failure of $v$\-prediction is primarily a bandwidth issue\. Specifically, the velocity field in minor components is mostly determined by the raw noisy input, which differs from the dynamics in the principal component space\. Deep backbones must propagate this minor information to the final layer to predict the velocity field, which consumes significant model capacity that should be dedicated to principal components\. This is particularly critical in pixel space where noise dimensionality is comparable to the hidden dimension\. To resolve this, we simply incorporate a term containing the raw noisy input into the final layer\. This architectural bypass enables the backbone to focus on high\-level semantics while the final layer efficiently reconstructs the minor velocity field\. Our method successfully revives $v$\-prediction and achieves competitive performance on ImageNet $256\\times256$ dataset compared to $x$\-prediction baselines\.

## Reliability\-Coupled Manifold\-Aware Diffusion for Missing\-Modality Inference

**Authors:** Yiming Ren; Yuhao Fang; Qing Zhou; Ming Li; Ye Zhang; Zijian Wang; Yao Lu; Chun Li

**ID:** 156117\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156117

[Paper](<https://openreview.net/forum?id=0GkSxMZdx4>) | [PDF](<https://openreview.net/pdf?id=0GkSxMZdx4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156117>)

In real\-world multimodal time\-series inference, a common practice is completion–inference decoupling: missing modalities are heuristically imputed and then passed to deterministic fusion and decision making\. We show that this chained design yields unreliable predictions under missingness, noise, and temporally varying modality reliability, because imputation errors propagate without uncertainty feedback\. Through theoretical and empirical analysis, we identify latent\-consistent completion and evidential reliability modeling as two key ingredients for robust multimodal inference\. Building on these insights, we propose MD2E\-MI, a manifold\-aware diffusion\-based imputation and evidence\-driven multimodal inference framework that couples diffusion\-based completion with uncertainty\-aware inference in a single pathway\. Experiments demonstrate stable performance across diverse missingness and noise regimes, while providing interpretable, temporally varying reliability estimates\.

## Permutation\-Invariant Spectral Learning via Dyson Diffusion

**Authors:** Tassilo Schwarz; Cai Dieball; Constantin Kogler; Renaud Lambiotte; Arnaud Doucet; Aljaz Godec; George Deligiannidis

**ID:** 150187\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150187

[Paper](<https://openreview.net/forum?id=k4MGmGsA9o>) | [PDF](<https://openreview.net/pdf?id=k4MGmGsA9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150187>)

Diffusion models are central to generative modeling and have been adapted to graphs by diffusing adjacency matrix representations\. The challenge of having up to $n\!$ such representations for graphs with $n$ nodes is only partially mitigated by using permutation\-equivariant learning architectures\. Despite their computational efficiency, existing graph diffusion models struggle to distinguish certain graph families and their spectra, unless graph data are augmented with ad hoc features\. This shortcoming stems from enforcing the inductive bias within the learning architecture\. In this work, we leverage random matrix theory to analytically extract the spectral properties of the diffusion process, allowing us to push most of the inductive bias from the architecture into the dynamics\. Building on this, we introduce the Dyson Diffusion Model, which employs Dyson's Brownian motion to capture the spectral dynamics of an Ornstein\-Uhlenbeck process on the adjacency matrix\. Furthermore, conditioned on the spectral dynamics, we formulate a Lie group diffusion, appropriately modeling the remaining degrees of freedom\. Strikingly, the resulting learning problem becomes permutation invariant at the Lie algebra level\. We demonstrate that the Dyson Diffusion Model learns graph spectra accurately and outperforms existing graph diffusion models\.

## Frozen Memory Is Not Enough: Rethinking External Memory as Extraction

**Authors:** Mingyuan Li; Guangsheng Yu; Xu Wang; Shaoxiong Ji

**ID:** 150946\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150946

[Paper](<https://openreview.net/forum?id=e7xyZQCjBR>) | [PDF](<https://openreview.net/pdf?id=e7xyZQCjBR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150946>)

Methods for improving knowledge use in large language models typically fall into two regimes\. Non\-parametric retrieval offers flexible access to external knowledge, but adds retrieval latency, context overhead, and only shallow integration with the backbone\. Parametric adaptation is efficient at inference time, but entangles knowledge with model weights and can be hard to update, audit, or transfer\. Engram\-style hashed memory occupies a middle regime: it stores learned information in an external, addressable table, yet consumes that table through a small learned reader\. This raises a basic question: when such a memory is moved across backbones, what matters more, the frozen memory itself or the target\-side reader? We study this question through cross\-model frozen\-memory extraction, where a memory trained on a source model is frozen and attached to a different target model while only a lightweight reader is trained\. Across architectures, tokenizers, and model scales, frozen memory improves every source\-\-target pair in a $3 \\times 3$ transfer matrix, with up to 15\.7\\% relative perplexity reduction\. Ablations show that learned memory content and correct addressing both matter, but stronger readers account for much of the transfer gain; on OpenQA, a dual\-layer 4\-branch reader nearly closes the gap between same\-model and cross\-model transfer and reaches 38\.78 average\. These results position Engram as a hybrid external memory and suggest that, in this regime, progress depends as much on reader design as on storage itself\. Code and reproducible setups are available at https://anonymous\.4open\.science/r/Engram\_Extractor/README\.md\. \.

## ODDR: One\-Step Deshadow Diffusion via Reward Guidance

**Authors:** Junseong Shin; Kijun Kim; Minseong Kim; Dongjin Kim; Tae Hyun Kim

**ID:** 153865\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153865

[Paper](<https://openreview.net/forum?id=IAfKoeRc25>) | [PDF](<https://openreview.net/pdf?id=IAfKoeRc25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153865>)

Recent advances in deep learning for shadow removal have significantly enhanced image quality and realism\. However, most approaches rely on real\-world paired datasets, which are costly to collect and often limited in scene diversity, leading to limited generalization\. To address these limitations, we propose One\-step Deshadow Diffusion via Reward guidance \(ODDR\), a new framework that achieves efficient and high\-fidelity shadow removal without relying on real\-world paired supervision\. Our method begins with One\-step Deshadow Diffusion \(ODD\), a baseline model trained on synthetic shadow data for efficient one\-step shadow\-free reconstruction\. We further adapt ODD into ODDR using ShadowReward\. In contrast to traditional, annotation\-heavy approaches, ShadowReward is the first reward model for shadow removal trained entirely without human annotation\. It learns to mimic human perceptual judgments by ranking synthetically generated images with controlled degradations, such as texture distortion and boundary artifacts\. This reward\-guided fine\-tuning enables ODDR to close the synthetic\-to\-real domain gap\. Extensive experiments show that ODD achieves strong performance without relying on real\-world paired supervision, and ODDR further improves the results and achieves performance competitive with methods trained on real\-world paired data, while maintaining higher computational efficiency as a single step model\.

## FLUX: Geometry\-Aware Longitudinal Flow Matching with Mixture of Experts

**Authors:** Josue Ortega Caro; Yongxu Zhang; Hannah M Batchelor; Sizhuang He; Jessica Cardin; Shreya Saxena

**ID:** 154945\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154945

[Paper](<https://openreview.net/forum?id=9kNHWMRtUj>) | [PDF](<https://openreview.net/pdf?id=9kNHWMRtUj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154945>)

Many biological systems evolve through continuous local dynamics while switching between latent regimes defined by learning, stimulus context, internal state, or developmental stage\. These processes are often observed only as unpaired longitudinal snapshots: the same cells, neurons, or animals are not tracked as matched trajectories, even though population states are sampled across successive stages\. This creates two coupled challenges\. First, trajectories must respect curved low\-dimensional manifolds embedded in high\-dimensional biological measurements\. Second, the model must identify when the transport mechanism itself changes\. We introduce FLUX \(FLow matching for Unpaired longitudinal data with miXture\-of\-experts\), a geometry\-aware longitudinal flow\-matching framework for joint transport modeling and unsupervised regime discovery\. FLUX learns a data\-dependent metric from pooled labeled and unlabeled observations, uses that metric to construct geometry\-aware conditional paths between adjacent marginals, and decomposes the resulting velocity field into sparse expert vector fields selected by a Straight\-Through Gumbel\-Softmax router\. Across manifold controls, a regime\-switching Lorenz system, widefield cortical calcium imaging during associative learning, and embryoid body single\-cell differentiation, FLUX reconstructs longitudinal transport while recovering interpretable regime structure\. In neural data, the router separates early/intermediate training from late training, coinciding with the behavioral divergence of CS\+ and CS\- lick indices\. In embryoid body differentiation, FLUX separates expression\-evolution regimes associated with pluripotent and more differentiated cell populations\. Ablations show that mixture\-of\-experts routing alone is insufficient: FLUX without geometric learning can fit local transport but fails or weakens regime discovery when regimes are encoded in local dynamics\. These results suggest that geometry\-aware velocity decomposition provides a general strategy for discovering latent biological state transitions from unpaired longitudinal snapshots\.

## Generalized Robust Adaptive\-Bandwidth Multi\-View Manifold Learning in High Dimensions with Noise

**Authors:** Xiucai Ding; Chao Shen; Hau\-Tieng Wu

**ID:** 156634\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156634

[Official poster](<https://neurips.cc/virtual/2026/poster/156634>)

Multiview datasets are common in scientific and engineering applications, yet existing fusion methods offer limited theoretical guarantees, particularly in the presence of heterogeneous and high\-dimensional noise\. We propose Generalized Robust Adaptive\-Bandwidth Multiview Diffusion Maps \(GRAB\-MDM\), a new kernel\-based diffusion geometry framework for integrating multiple noisy data sources\. The key innovation of GRAB\-MDM is a view\-dependent bandwidth selection strategy that adapts to the geometry and noise level of each view, enabling a stable and principled construction of multiview diffusion operators\. Under a common\-manifold model, we establish asymptotic convergence results and show that the adaptive bandwidths lead to provably robust recovery of the shared intrinsic structure, even when noise levels and sensor dimensions differ across views\. Numerical experiments demonstrate that GRAB\-MDM significantly improves robustness and embedding quality compared with fixed\-bandwidth and equal\-bandwidth baselines, and usually outperform existing algorithms\. The proposed framework offers a practical and theoretically grounded solution for multiview sensor fusion in high\-dimensional noisy environments\.

## Feature Information Dynamics in Diffusion

**Authors:** Jia\-Shu Pan; Tao Zhang; Yufei Huang; Yanjun Sheng; Tailin Wu

**ID:** 152004\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152004

[Paper](<https://openreview.net/forum?id=WDfD9WTJeJ>) | [PDF](<https://openreview.net/pdf?id=WDfD9WTJeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152004>)

Diffusion models generate data through a continuum of denoising problems, and are widely observed to reveal coarse structure before fine detail\. Yet, this intuition is mostly empirical and qualitative\. We introduce \\emph\{feature information dynamics\}, an information\-theoretic framework for localizing when a feature is generated during diffusion\. Using the I\-MMSE identity, we connect the rate of feature mutual information change to a gap between optimal unconditional and feature\-conditional denoising losses, yielding practical estimators for feature information density\. We further develop a chained decomposition that separates shared from incremental information in a feature hierarchy\. We use this framework first to quantitatively confirm spectral autoregression in pixel diffusion, and then to extend the analysis beyond frequency: under a class$\\to$mask$\\to$Canny conditioning chain, the per\-feature information densities differ across pixel, SDVAE, VAVAE, and RAE, exposing fundamental differences between these representations\.

## Generalized Wasserstein Flow Matching: Transport Plans, Everywhere, All at Once

**Authors:** Moritz Piening; Richard Duong; Gabriele Steidl

**ID:** 152114\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152114

[Paper](<https://openreview.net/forum?id=VRSgjWCWsh>) | [PDF](<https://openreview.net/pdf?id=VRSgjWCWsh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152114>)

Flow matching has recently emerged as a flexible and efficient framework for generative modelling by learning deterministic transport dynamics between probability measures\. In this work, we extend flow matching to the space of probability measures over probability measures, introducing a Wasserstein\-on\-Wasserstein \(WoW\) formulation\. Leveraging the nested Wasserstein geometry, we show that measures over transport plans naturally induce velocity fields that realize metameasure flows\. This yields a principled generalization of Wasserstein flow matching via coupled outer and inner transport plans\. To address the substantial computational cost of WoW transport, we propose scalable approximations based on sliced and linear Wasserstein distances, enabling efficient training while promoting numerically stable, near\-straight trajectories\. Our framework unifies and extends existing approaches to point cloud and set generation, providing a practical and theoretically grounded method for generative modelling in WoW spaces\.

## Structural Rationale Distillation via Reasoning Space Compression

**Authors:** Jialin Yang; Jiankun Wang; Jiajun Wu; Henry Leung; Jiayu Zhou; Steve Drew

**ID:** 152271\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152271

[Paper](<https://openreview.net/forum?id=UK2XjwZOOP>) | [PDF](<https://openreview.net/pdf?id=UK2XjwZOOP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152271>)

_Abstract unavailable from the accessible public sources._

## DiffATS: Diffusion in Aligned Tensor Space

**Authors:** Jinhua Lyu; Tianmin Yu; Brian Kim; Lizhuo Zhou; Chanwook Park; Naichen Shi

**ID:** 150268\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150268

[Paper](<https://openreview.net/forum?id=jQzUVefSI5>) | [PDF](<https://openreview.net/pdf?id=jQzUVefSI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150268>)

_Abstract unavailable from the accessible public sources._

## A Mean\-Field Framework for Inference\-Time Distributional Control of Diffusion Models

**Authors:** Samuel Howard; Nikolas Nüsken

**ID:** 150099\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150099

[Paper](<https://openreview.net/forum?id=khIk1adodl>) | [PDF](<https://openreview.net/pdf?id=khIk1adodl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150099>)

_Abstract unavailable from the accessible public sources._

## Chance\-constrained Flow Matching for High\-Fidelity Constraint\-aware Generation

**Authors:** JINHAO LIANG; Yixuan Sun; Anirban Samaddar; Sandeep Madireddy; Ferdinando Fioretto

**ID:** 150205\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150205

[Paper](<https://openreview.net/forum?id=jwaNz2c281>) | [PDF](<https://openreview.net/pdf?id=jwaNz2c281>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150205>)

_Abstract unavailable from the accessible public sources._

## Improving Function Space Flow Matching with Kernel Optimal Transport

**Authors:** Fred Xu; Thomas Markovich; Barbora Barancikova; Yizhou Sun

**ID:** 152774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QT7iczCUkm>) | [PDF](<https://openreview.net/pdf?id=QT7iczCUkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152774>)

Generative models for function\-valued data, such as time series and solutions to partial differential equations, must learn distributions over infinite\-dimensional spaces rather than over finite\-dimensional vectors\. Functional Flow Matching \(FFM\) is a recent extension of Flow Matching to this setting, learning a velocity field whose flow transports a Gaussian prior to the data distribution\. However, FFM inherits a structural limitation from standard Flow Matching: in each training batch, prior and data samples are paired independently, so the conditional bridge between them must simultaneously traverse the shared global structure of the dataset and instance\-specific residuals\. This limitation is more consequential in function space than in finite dimensions: directly formulating optimal transport on function spaces is technically delicate, and a flat Euclidean surrogate ignores the function\-space geometry that distinguishes function\-valued data\. We propose kernel Functional Flow Matching \(kFFM\), which replaces the independent pairing by entropic optimal transport in a kernel\-induced Hilbert space via the Hilbert Sinkhorn Divergence, leaving the FFM neural\-operator architecture unchanged\. Theoretically, we prove the HSD objective is well\-posed on Banach ambient spaces with bounded kernels, derive compact\-metric approximation bounds against quadratic\-cost OT with an explicit kernel\-cost mismatch term, and quantify the gap between the function\-space objective and the truncated representation computed on a grid, at a rate governed by data regularity\. Empirically, kFFM consistently improves MMD\-RBF distributional matching over FFM, diffusion, adversarial, and finite\-dimensional OT baselines on time\-series and PDE benchmarks, with function\-space\-aware kernels emerging as the strongest choices on every PDE and path\-valued benchmarks\.

## D\-OPSD: On\-Policy Self\-Distillation for Continuously Tuning Step\-Distilled Diffusion Models

**Authors:** Dengyang Jiang; Xin Jin; Dongyang Liu; Zanyi Wang; Mingzhe Zheng; Ruoyi Du; Xiangpeng Yang; Qilong Wu; Zhen Li; Peng Gao; Harry Yang; Steven Hoi

**ID:** 153949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HM5bMcRfJ3>) | [PDF](<https://openreview.net/pdf?id=HM5bMcRfJ3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153949>)

The landscape of high\-performance image generation models is currently shifting from the inefficient multi\-step ones to the efficient few\-step counterparts \(e\.g, Z\-Image\-Turbo and FLUX\.2\-klein\)\. However, these models present significant challenges for direct continuous supervised fine\-tuning\. For example, applying the commonly used fine\-tuning technique would compromise their inherent few\-step inference capability\. To address this, we propose D\-OPSD, a novel training paradigm for step\-distilled diffusion models that enables on\-policy learning during supervised fine\-tuning\. We first find that the modern diffusion models, where the LLM/VLM serves as the encoder, can inherit its encoder's in\-context capabilities\. This enables us to formulate the training as an on\-policy self\-distillation process\. Specifically, during training, we make the model act as both the teacher and the student with different contexts, where the student is conditioned only on the text feature, while the teacher is conditioned on the multimodal feature of both the text prompt and the target image\. Training minimizes the two predicted distributions over the student's own roll\-outs\. By optimizing on the model's own trajectory and under its own supervision,  D\-OPSD enables the model to learn new concepts, styles, etc\., without sacrificing the original few\-step capacity\.

## Preconditioned Flow Matching

**Authors:** Shadab Ahamed; Eshed Gal; Md Shahriar Rahim Siddiqui; Simon Ghyselincks; Moshe Eliasof; Eldad Haber

**ID:** 153969 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H9J2nlJCjx>) | [PDF](<https://openreview.net/pdf?id=H9J2nlJCjx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153969>)

Flow matching \(FM\) learns vector fields by regressing stochastic velocity targets along intermediate distributions $p\_t$\. We identify a geometric optimization bottleneck in this regression problem: when the covariance $\\Sigma\_t$ of $p\_t$ is ill\-conditioned, gradient\-based training rapidly fits high\-variance directions while making slow progress along low\-variance ones\. In an exactly solvable Gaussian setting, we prove that the excess risk is weighted by $\\Sigma\_t$, and that both gradient descent and stochastic gradient descent inherit condition\-number\-dependent convergence\. We then extend the analysis to Gaussian mixtures, showing that multimodality does not average away this effect; instead, the slowest and worst\-conditioned component can control optimization\. Motivated by this analysis, we propose \\emph\{preconditioned flow matching\}, a precondition\-then\-match framework that transforms the target distribution into a more isotropic representation, trains the main flow in the transformed space, and maps generated samples back through the inverse transformation\. We show theoretically that preconditioning reshapes the intermediate FM path and improves its conditioning\. Across controlled Gaussian and Gaussian\-mixture experiments, latent MNIST and other high resolution image datasets up to $512\{\\times\}512$ resolution, preconditioning improves path\-conditioning diagnostics, low\-eigenvalue recovery, FID, MMD, precision, and recall\. Compute\-matched baselines and preconditioner\-quality ablations further show that the gains are not explained merely by additional preconditioner parameters, but by improved geometry of the downstream flow matching problem\.

## Unsupervised Concept Discovery with Dirichlet Concept Diffusion Models

**Authors:** Yuchong Geng; Ao Tang

**ID:** 151439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ahE8Fplb25>) | [PDF](<https://openreview.net/pdf?id=ahE8Fplb25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151439>)

We show that a generative model can discover concepts from data in an unsupervised setting while learning to generate\. The Dirichlet Concept Diffusion Model \(DCDM\) embeds concept discovery into diffusion\-based generation\. DCDM learns concept centers and infers a Dirichlet distribution over them for each input\. The resulting weighted center shapes the forward diffusion mean and reverse denoising process, so components are learned through the same evidence lower bound used to model the data\. The method uses no class labels, attribute annotations, captions, pretrained text\-to\-image priors, or semantic concept supervision\. Analysis shows how the formulation preserves concept\-level information along diffusion paths and reduces denoising ambiguity, creating pressure for concept centers to capture stable modes\. Experiments across diverse image domains show that the learned components form coherent prototypes, support interventions, and reflect recurring visual structure\.

## Neural Continuous\-Time Markov Chain: Discrete Diffusion via Decoupled Jump Timing and Direction

**Authors:** Jingyuan Li; Xiaoyi Jiang; Fukang Wen; WEI LIU; Renqian Luo; Yi Zhu; Zuoqiang Shi; Pipi Hu

**ID:** 156096\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156096

[Paper](<https://openreview.net/forum?id=0PmwAantl5>) | [PDF](<https://openreview.net/pdf?id=0PmwAantl5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156096>)

Discrete diffusion models based on continuous\-time Markov chains \(CTMCs\) have shown strong performance on language and discrete data generation, yet existing approaches typically parameterize the reverse rate matrix monolithically\-\-\-through proxies such as concrete scores \(SEDD\) or clean\-data predictions \(MDLM, GIDD\)\-\-\-rather than aligning the parameterization with the intrinsic CTMC decomposition into jump timing and jump direction\. We propose \\textbf\{Neural CTMC\}, which exploits the underlying Poisson structure of CTMC dynamics by separately parameterizing the reverse process through an \\emph\{exit rate\} \(when to jump\) and a \\emph\{jump distribution\} \(where to jump\) via two dedicated network heads\. We show that the evidence lower bound \(ELBO\) reduces to a path\-space KL divergence between the true and learned reverse processes that factorizes into a Poisson KL for timing and a categorical KL for direction, and admits a tractable, gradient\-equivalent and consistent loss\. Experimentally, scored by Gemma2\-9B, our pure\-uniform Neural CTMC achieves $16\.36$ generative perplexity on TinyStories \(vs\.\\ GIDD $37\.60$ and MDLM $42\.66$\)\. On OpenWebText, it attains the best perplexity at the same training\-token budget across 16\-\-128 sampling steps among the methods we compare \(e\.g\., at 128 steps: Neural CTMC $183\.6$ vs\.\\ MDLM $210\.5$ and GIDD $249\.8$\)\.

## VTV\-FM: Flow Matching through Variational Terminal\-Velocity Closure

**Authors:** Haoyang Jiang; Yuheng Li; Di Yang; Yanhai Xiong; Haipeng Chen; Yi He

**ID:** 152736\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152736

[Paper](<https://openreview.net/forum?id=QkeTySGSs0>) | [PDF](<https://openreview.net/pdf?id=QkeTySGSs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152736>)

Flow Matching \(FM\) learns generative transport by fitting continuous\-time motion from a simple source distribution to the data distribution\. Most existing methods use first\-order bridges: once a source and a target sample are paired, the path is a straight motion with constant velocity\. FM with optimal transport \(OT\) improves the pairing, but the bridge itself remains linear, limiting its ability to model curved motion, acceleration, and changing directions\. A natural remedy is to use second\-order phase\-space dynamics; however, constructing such bridges requires a target\-side terminal velocity, which static datasets typically do not provide\. We propose Variational Terminal\-Velocity Flow Matching \(VTV\-FM\), a second\-order FM framework that derives the missing velocity by minimizing acceleration energy, yielding a closed\-form closure for static data\. The same minimum\-acceleration variational construction also defines the OT pairing cost and the acceleration targets used for training\. Experiments on low\-dimensional datasets, PDE\-governed physical fields, and CIFAR\-10 show that VTV\-FM improves transport geometry and generation quality over first\-order and existing high\-order FM baselines\.

## End\-to\-End Training for Unified Tokenization and Latent Denoising

**Authors:** Shivam Duggal; Xingjian Bai; Zongze Wu; Richard Zhang; Eli Shechtman; Antonio Torralba; Phillip Isola; Bill Freeman

**ID:** 155881\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155881

[Paper](<https://openreview.net/forum?id=28rLEQtSjg>) | [PDF](<https://openreview.net/pdf?id=28rLEQtSjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155881>)

Latent diffusion models \(LDMs\) enable high\-fidelity synthesis by operating in learned latent spaces\. However, training state\-of\-the\-art LDMs requires complex staging: a tokenizer must be trained first, before the diffusion model can be trained in the frozen latent space\. We propose UNITE – an autoencoder architecture for unified tokenization and latent diffusion\. UNITE consists of a Generative Encoder that serves as both image tokenizer and latent generator via weight sharing\. Our key insight is that tokenization and generation can be viewed as the same latent inference problem under different conditioning regimes: tokenization infers latents from fully observed images, whereas generation infers them from noise together with text or class conditioning\. Motivated by this, we introduce a single\-stage training procedure that jointly optimizes both tasks via two forward passes through the same Generative Encoder\. The shared parameters enable gradients to jointly shape the latent space, encouraging a "common latent language"\. Across image and molecule modalities, UNITE achieves near state\-of\-the\-art performance without adversarial losses or any pretrained encoders \(e\.g\., DINO\), reaching FID 2\.12 and 1\.75 for Base and Large models on ImageNet 256 x 256\. Our experiments suggest that unification provides mutual benefits for tokenization and generation\. We further analyze the Generative Encoder through the lenses of representation alignment and compression\. These results show that single\-stage joint training of tokenization and generation from scratch is feasible\. Project Page: https://unite\-tokenization\-generation\.netlify\.app/

## ReGDiff: Guided Diffusion in Regulated Latent Space for Exploring Metamaterial Voxel Geometry

**Authors:** Wangzhi Zhan; Jianpeng Chen; Dongqi Fu; Dawei Zhou

**ID:** 151868\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151868

[Paper](<https://openreview.net/forum?id=XHx4RRDPKz>) | [PDF](<https://openreview.net/pdf?id=XHx4RRDPKz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151868>)

_Abstract unavailable from the accessible public sources._

## Disentangled Sparse Representations for Concept\-Separated Diffusion Unlearning

**Authors:** Hyeonjin Kim; Hangyeol Jung; Heechan Yun; Sungjun Yun; Dong\-Jun Han

**ID:** 155474\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155474

[Paper](<https://openreview.net/forum?id=5Ls4MY5nvC>) | [PDF](<https://openreview.net/pdf?id=5Ls4MY5nvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155474>)

_Abstract unavailable from the accessible public sources._

## SSD: Shell\-Guided Spherical Diffusion for Molecular Geometry Generation

**Authors:** Yun\-Yen Chuang; Chen\-Sheng Gu; Hung\-Min Hsu; Kevin Lin; Ray\-I Chang

**ID:** 154313\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154313

[Paper](<https://openreview.net/forum?id=EauF7XR2Tz>) | [PDF](<https://openreview.net/pdf?id=EauF7XR2Tz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154313>)

_Abstract unavailable from the accessible public sources._

## TMPO: Trajectory Matching Policy Optimization for Diverse and Efficient Diffusion Alignment

**Authors:** Jiaming Li; Chenyu Zhu; Zhiyuan Ma; Nanxi Yi; Youjun Bao; Li Sun; Quanying Lv; Xiang Fang; Daizong Liu; Jianjun Li; Kun He; Bowen Zhou

**ID:** 152405\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152405

[Paper](<https://openreview.net/forum?id=TL8RqtISvt>) | [PDF](<https://openreview.net/pdf?id=TL8RqtISvt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152405>)

_Abstract unavailable from the accessible public sources._

## Decoupling Direction and Magnitude: Language\-Steered Flow Matching for Super\-Resolution in the Dark

**Authors:** Jiaxin Gao; Ziyu Yue; Yaohua Liu; Danchen Cui; Zhihui Zhao; Zhixun Su

**ID:** 149168\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149168

[Paper](<https://openreview.net/forum?id=sMFrrQ0Yyf>) | [PDF](<https://openreview.net/pdf?id=sMFrrQ0Yyf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149168>)

_Abstract unavailable from the accessible public sources._

## SPRM: From Cooperative Games to Marginal\-Contribution Process Reward Modeling

**Authors:** Yu Bao; Pak Lon Ip; Qiyu Ruan; Xitong Gao; Cheng\-Zhong Xu

**ID:** 149697\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149697

[Paper](<https://openreview.net/forum?id=o6rESNXJwW>) | [PDF](<https://openreview.net/pdf?id=o6rESNXJwW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149697>)

_Abstract unavailable from the accessible public sources._

## Zero\-Shot Burst Restoration via Diffusion MAP Inference with Poisson\-Gaussian Noise Likelihood

**Authors:** Ziyao Yi; Luca Savant Aira; Diego Valsesia; Tiziano Bianchi; Enrico Magli

**ID:** 155255\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155255

[Paper](<https://openreview.net/forum?id=74q1hHnQcO>) | [PDF](<https://openreview.net/pdf?id=74q1hHnQcO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155255>)

_Abstract unavailable from the accessible public sources._

## The Geometry of Noise: Why Diffusion Models Don't Need Noise Conditioning

**Authors:** Mojtaba Sahraee\-Ardakan; Mauricio Delbracio; Peyman Milanfar

**ID:** 151751\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151751

[Paper](<https://openreview.net/forum?id=YLJPbabQTH>) | [PDF](<https://openreview.net/pdf?id=YLJPbabQTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151751>)

Generative models typically rely on explicitly tracking the noise level to guide the sampling process\. However, recent autonomous models successfully generate data using a single, time\-invariant vector field that operates without explicit noise conditioning\. This raises a fundamental paradox: what landscape are these networks actually optimizing when the noise level is treated as a random variable, and how can a bounded model remain stable near the data manifold where gradients typically diverge? We resolve this paradox by showing that autonomous generation is not merely \`\`blind’’ denoising, but a specific form of Riemannian gradient flow on the Marginal Energy landscape, defined by integrating out the unknown noise levels\. Through a novel relative energy decomposition, we demonstrate that while the raw Marginal Energy contains a severe geometric singularity normal to the data manifold, the learned field implicitly incorporates a local conformal metric\. This metric perfectly preconditions the singularity, turning an infinitely deep potential well into a stable attractor\. Finally, we establish strict structural stability conditions for autonomous sampling\. We prove that standard noise\-prediction parameterizations structurally fail due to an inherent high gain amplification of the estimation errors\. In contrast, velocity\-based models are inherently stable\.

## Latent Riemannian Flow Matching for Geometry\-Grounded 3D Foundation Models

**Authors:** Lisa Weijler; Irene Ballester Campos; Guofeng Mei; Tolga Birdal; Pedro Hermosilla

**ID:** 152188\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152188

[Paper](<https://openreview.net/forum?id=Uta0YOIusF>) | [PDF](<https://openreview.net/pdf?id=Uta0YOIusF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152188>)

Geometric foundation models, such as the Visual Geometry Grounded Transformer \(VGGT\), provide strong 3D priors from unposed images\. However, such models operate purely in a feed\-forward, deterministic regime, \\ie\~they cannot generate plausible geometry beyond what the input views directly support\. Generative models for 3D scenes, on the other hand, must rely on strong geometric priors to produce coherent outputs from sparse inputs\. We bridge these two paradigms by performing flow matching directly in VGGT's latent space, leveraging its learned 3D priors without committing to any explicit downstream representation such as Gaussians, meshes, or video\-VAE latents\. This requires respecting the latent geometry: VGGT tokens occupy a product of high\-dimensional hyperspheres on which standard Euclidean flow matching fails\. We address this with a Riemannian Flow Matching framework defined on a product manifold of four hyperspheres, aligned with VGGT's multi\-scale encoder, which keeps generated tokens on the valid data manifold required by the frozen decoding heads\. On RealEstate10K and ScanNet\+\+, our method achieves strong performance against recent scene generation baselines in both per\-view 3D geometry and appearance, establishing latent\-space flow matching on geometric foundation models as a viable paradigm for 3D generation\.

## Rethinking Memorization–Generalization Trade\-Off in Generative Models

**Authors:** Jiseok Chae; Kyuwon Kim; Donghwan Kim

**ID:** 151281\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151281

[Paper](<https://openreview.net/forum?id=bYEt73s3Gs>) | [PDF](<https://openreview.net/pdf?id=bYEt73s3Gs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151281>)

Standard generative models face a memorization\-\-generalization trade\-off, that is avoiding memorization is considered necessary for generalization\. In supervised learning, however, recent studies show that highly overparametrized models can memorize \(interpolate\) training data while still generalizing well, a phenomenon known as benign overfitting\.  Motivated by this, we investigate whether generative models can similarly bypass the trade\-off and generalize while interpolating\.  Generative models should minimize the distance between the true data distribution and the distribution induced by mapping the full latent distribution through the generator\. But since the true distribution is inaccessible, existing models instead minimize empirical risk with respect to the training distribution\. Under this standard formulation, exact empirical\-risk minimization forces the generator to produce only training samples\. To address this issue, we consider an alternative empirical risk based on presampled latent variables\. Our experiments demonstrate that the resulting presampled\-latent version of the flow matching model exhibits benign overfitting on standard image benchmarks, such as MNIST and CIFAR\-10\.      As a theoretical proof of concept, we recast generative modeling as a regression problem and extend existing benign overfitting theory to our setting\.      Together, these results establish, for the first time, that benign overfitting can occur in generative models\.

## Debiased DPO for Diffusion Models

**Authors:** Duc Khiem Pham; Quang Nguyen; Tung D Nguyen; Jingsen Zhu; Michele Santacatterina; Dimitris Metaxas; Ramin Zabih

**ID:** 149883\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149883

[Paper](<https://openreview.net/forum?id=mVm3paaO7B>) | [PDF](<https://openreview.net/pdf?id=mVm3paaO7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149883>)

Direct Preference Optimization \(DPO\) enables offline alignment of diffusion models from preference pairs without explicit reward modeling, but scaling DPO requires large amounts of expensive human preference data\. In this paper, we consider a semi\-supervised approach where only a small subset of preference pairs is annotated by humans, while the remaining \(much larger\) pool is unlabeled and annotated by inexpensive synthetic feedback e\.g\., vision\-language models scoring image pairs or self\-training from the current model\. However, such synthetic supervision is not a replacement for human judgments: it can be systematically misaligned, so naively mixing human and synthetic preferences will yield misaligned inference\. We introduce DeDPO, a debiased objective that integrates a doubly robust estimator from causal inference into DPO to correct synthetic\-label misalignment while preserving the simplicity of DPO\. Experiments show improved label efficiency and robustness to synthetic labeler quality, allowing DeDPO to outperform standard DPO under the same human\-label budget and to approach fully human\-supervised performance, despite using four times fewer human\-labeled data\.

## Towards Unified Memory Adaptation for LLM Agents: Textual, Latent, and Parametric Pathways

**Authors:** Rui Li; Haoran Tan; Xiaohe Bo; Yiqun Chen; Meizhi Zhong; Xiaochi Wei; Yan Gao; YIWU; Yao Hu; Xu Chen

**ID:** 155155\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155155

[Paper](<https://openreview.net/forum?id=7s3OkqG5nf>) | [PDF](<https://openreview.net/pdf?id=7s3OkqG5nf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155155>)

Equipping large language models \(LLMs\) with external memory banks is a critical stepping stone towards autonomous agents\. Current approaches have concentrated substantial efforts on the design of memory construction and retrieval mechanisms\. However, they typically relegate memory utilization to the simplistic concatenation of explicit texts for LLM inputs, thereby remaining constrained by the fundamental bottlenecks of context overload and semantic dilution\. In response to this dilemma, we present UniMem, a unified memory adaptation framework that empowers LLM agents to holistically harness memory information, extending beyond textual signals into latent and parametric dimensions\. Operating along these pathways, UniMem not only elevates contextual density through latent compression, but also facilitates semantic grounding via parametric modulation\. Extensive experiments show that UniMem \(I\) achieves superior performance across diverse benchmarks, including long\-term dialogue, memory personalization, and open\-domain question answering; and \(II\) can seamlessly complement prevailing memory construction and retrieval mechanisms for synergistic enhancements\.

## LayoutBridge: Anisotropic Brownian Bridges for Public Indoor Floorplan Generation

**Authors:** Tongyang Dai; Ruipeng Gao; Feng Liu; Wenqiu Bai; Lingkun Li; Qiang Ni

**ID:** 152710\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152710

[Paper](<https://openreview.net/forum?id=QyJ8TS7cW8>) | [PDF](<https://openreview.net/pdf?id=QyJ8TS7cW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152710>)

Compared with residential layouts, public indoor floorplans present more substantial challenges with open corridors, complex room relations, and non\-Manhattan geometries, which do not conform to conventional residential\-layout assumptions\. Consequently, existing methods are prone to boundary discontinuities, leading to fragmented corridors and irregular wall structures\. To address the above issues, we propose \\textit\{LayoutBridge\}, a structure\-conditioned generative framework for floorplan production\. By moving beyond the Manhattan\-geometry assumptions commonly adopted in residential scenarios, LayoutBridge reformulates the task as a latent\-space Brownian\-bridge diffusion process from structural constraints to target layouts\. We have constructed our PISF dataset with 3,517 representative floorplans in public indoor spaces, and LayoutBridge reduces FID by 132\.35 and improves BIoU by 15\.52\\% over the latest image\-to\-image baselines\. Regarding the residential benchmarks MSD and RPLAN, it also reduces FID by at least 2\.53 compared with state\-of\-the\-art\. These results demonstrate its potential for scalable automated architectural design\. Code implementing the proposed method is publicly available at \\href\{http://github\.com/lalalalaxxx/LayoutBridge\}\{http://github\.com/lalalalaxxx/LayoutBridge\}\.

## You Can’t Have It Both Ways: Concept Entanglement Limits Diffusion Model Unlearning

**Authors:** Yian Wang; Ali Ebrahimpour\-Boroojeny; Hari Sundaram; Varun Chandrasekaran

**ID:** 155144\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155144

[Paper](<https://openreview.net/forum?id=81WMbko8Qr>) | [PDF](<https://openreview.net/pdf?id=81WMbko8Qr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155144>)

Concept unlearning in text\-to\-image diffusion models aims to suppress a target concept, e\.g\., \\texttt\{horse\}, while preserving the model's ability to generate semantically related but distinct content, like \\texttt\{donkey\}\. Yet existing methods either leak under indirect prompts or visibly degrade remaining concepts\.  \{\\em We show that these failure modes arise naturally from overlapping concept representations\.\} Our main contribution is demonstrating that the observed trade\-offs stem from the geometry of concept representations, rather than from weaknesses in any particular algorithm\. We support this claim through both theoretical analysis and empirical observations\. By formalizing concepts as activation\-space regions, we show that overlap between a target and other concepts lower\-bounds the unavoidable degradation on those other concepts when the target is erased\.  Our analysis suggests that strong erasure and preservation become fundamentally coupled when concepts occupy overlapping activation regions, with the trade\-off scaling linearly in the degree of overlap\. We verify this trade\-off on seven unlearning methods spanning fine\-tuning, adversarially\-robust fine\-tuning, and inference\-time interventions\. Averaged across target concepts, STEREO almost completely suppresses the target concept under indirect prompts but cuts the model's ability to generate semantically related concepts by more than 75\\%\. On the other hand, sparse inference\-time methods \(SAeUron, SEOT\) better preserve utility but leave substantial target leakage\. The trade\-off is steep for concepts whose internal representations heavily overlap with their evaluated semantic neighborhoods, \(e\.g\., \\texttt\{horse\} with \\texttt\{cat\}, \\texttt\{dog\}, and \\texttt\{bear\}\) and milder for \\texttt\{castle\}, which is comparatively less entangled within our concept pool and probe layer in activation space\. Across targets, damage to related concepts scales monotonically with our activation\-overlap measure\. These results suggest that perfect unlearning is the wrong target for entangled concepts\. The field should evaluate on the Pareto frontier our theorem establishes; current benchmarks, which decouple unlearning accuracy from utility preservation, hide this trade\-off and need to be revised\.

## Horizontal Diffusion Models: Score\-based Generative Modeling on Frame\-Connection Geometry

**Authors:** Sungwoo Park

**ID:** 154154\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154154

[Paper](<https://openreview.net/forum?id=Fr0DlZvA04>) | [PDF](<https://openreview.net/pdf?id=Fr0DlZvA04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154154>)

Geometric modeling has become an essential paradigm in AI for Science, where data often inhabit intrinsically curved or structured spaces\. However, existing manifold generative models often rely on closed\-form or tractable access to global geometric primitives, such as geodesic distances, parallel transport, or spectral decompositions, which are rarely available beyond canonical geometries\. To overcome this limitation, we propose Horizontal Diffusion Models \(HDMs\), a score\-based generative framework defined on the orthonormal frame bundle of a Riemannian manifold\. Instead of requiring global geometric operations, HDM lifts Euclidean diffusion processes through the Levi\-Civita horizontal distribution, using only local metric and connection information while preserving intrinsic manifold geometry\. This construction allows standard Euclidean score networks to be lifted into geometry\-consistent and gauge\-equivariant horizontal vector fields, bypassing the need for manifold\-specific neural architectures\. We further derive a horizontal KL objective that reduces to a Euclidean score\-matching loss and analyze the curvature\-dependent cost of the lift through a generalization bound\. Experiments on parametric surfaces and scientific datasets demonstrate high\-fidelity generation across diverse manifolds with nontrivial geometry and topology\.

## ReflectDrive\-2: Reinforcement\-Learning\-Aligned Self\-Editing for Discrete Diffusion Driving

**Authors:** Huimin Wang; Yue Wang; Bihao Cui; Pengxiang Li; Ben Lu; Mingqian Wang; Tong Wang; Chuan Tang; Teng Zhang; Kun Zhan

**ID:** 152356\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152356

[Paper](<https://openreview.net/forum?id=TgXR6fi9CK>) | [PDF](<https://openreview.net/pdf?id=TgXR6fi9CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152356>)

_Abstract unavailable from the accessible public sources._

## Beyond ViT Tokens: Masked\-Diffusion Pretrained Convolutional Pathology Foundation Model for Cell\-Level Dense Prediction

**Authors:** Weiming Chen; Xitong Ling; Zhenyang Cai; Xidong Wang; Jiawen Li; Tian Guan; Benyou Wang; Yonghong He

**ID:** 148943\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148943

[Paper](<https://openreview.net/forum?id=u0riwBjIls>) | [PDF](<https://openreview.net/pdf?id=u0riwBjIls>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148943>)

_Abstract unavailable from the accessible public sources._

## Contextual Flow Matching: Adaptive Step Selection in Flow Models for Efficient Visual Generation

**Authors:** Divya Jyoti Bajpai; Arun Verma; Manjesh Kumar Hanawal

**ID:** 148315\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148315

[Paper](<https://openreview.net/forum?id=yjB0PiXm3S>) | [PDF](<https://openreview.net/pdf?id=yjB0PiXm3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148315>)

Flow Matching enables high\-quality visual generation via continuous\-time dynamics, but inference remains costly due to multiple sequential function evaluations\. Existing acceleration methods reduce the number of function evaluations but often introduce additional training overhead, degrade quality, or fail to account for input\-dependent variability\. We propose an inference\-time method, CoFlow, that adaptively selects the step counts for each generation based on the prompt features\. Our context\-aware CoFlow is trained online with an unsupervised reward that balances efficiency and fidelity\. Our method is plug\-and\-play, requiring no retraining of the generative model\. It generalizes to image and video generation, achieving over $2\.5\\times$ speedup while preserving perceptual and semantic quality\. We also provide theoretical insights into the link between adaptive step allocation and discretization error\. The anonymized source code is available at \\url\{https://anonymous\.4open\.science/r/Contextual\_Flow\_Matching\-9970\}\.

## GridDiffuser: Constraint\-Guided Graph Diffusion for AC Optimal Power Flow

**Authors:** Yutong Zheng; Jichen Zhang; Danilo Mandic

**ID:** 152781\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152781

[Paper](<https://openreview.net/forum?id=QONjqmSVsQ>) | [PDF](<https://openreview.net/pdf?id=QONjqmSVsQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152781>)

Modern power systems are undergoing a significant transition from deterministic, steady\-state dispatch to operation under high\-dimensional uncertainty and rapid fluctuations driven by renewables, electrification, and topology perturbations\. This shift requires Optimal Power Flow \(OPF\) to be solved frequently under diverse operating conditions\. Classical AC\-OPF solvers provide high physical fidelity but are slow for high\-frequency scheduling, while linear approximations such as DC\-OPF sacrifice accuracy for computational speed\.  To address these challenges, we propose GridDiffuser, a graph diffusion solver for AC\-OPF\. Unlike deterministic learning methods that predict a single solution and struggle to represent the non\-convex landscape, GridDiffuser models a multi\-modal distribution over operating points and generates multiple candidate solutions\. Our method further applies an efficient Levenberg\-\-Marquardt correction to the clean\-space estimate, iteratively steering samples toward the constraint\-feasible set\. Experiments on thousand\-bus grids with instance\-level N\-1 contingencies show that GridDiffuser substantially reduces pre\- and post\-power flow \(PF\) violations compared with deterministic baselines while generating solutions much faster than AC\-IPOPT\.

## Mind the Gap: The Divergent Rebound Dynamics of Diffusion and Autoregressive Model

**Authors:** Qiwen Jin; Zhengyu Zhou; Weiwei Liu; Xiuwen Gong

**ID:** 152724\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152724

[Paper](<https://openreview.net/forum?id=QqAiRxEUEp>) | [PDF](<https://openreview.net/pdf?id=QqAiRxEUEp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152724>)

Post\-training alignment can be fragile: in autoregressive models \(ARMs\), subsequent fine\-tuning on counter\-aligned or distribution\-shifted data can erode previously aligned behavior\. While this rebound phenomenon has been studied mainly in ARMs, how such fine\-tuning triggers a similar rebound in diffusion language models \(DLMs\) remains poorly understood\. We conduct extensive fine\-tuning experiments across diverse datasets, perturbation sizes, model scales, alignment algorithms, and inference hyperparameters, and find that DLMs consistently exhibit a slower rebound pattern than ARMs do\. Furthermore, while ARMs fine\-tuned on more positive data suffer a steeper degradation under reverse updates, DLMs exhibit ordering stability: models fine\-tuned on larger positive alignment sets retain higher performance as negative data increases\. We propose a compression perspective to account for this behavior\. Unlike ARMs, whose compression naturally follows a fixed left\-to\-right order, DLMs generate text through iterative masked denoising\. We formalize this distinction through a template\-wise compression theory for DLMs\. The resulting elasticity theory explains why counter\-aligned updates lead to much slower alignment erosion in DLMs\. Our experiment findings indicate that rebound is shaped not only by post\-training data and objectives, but also by the underlying generation mechanism\.

## WASD: Wasserstein\-based Knowledge Distillation for Large Language Models

**Authors:** Byeonghu Na; Donghyeok Shin; Yeongmin Kim; Mina Kang; Il\-chul Moon

**ID:** 154228\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154228

[Paper](<https://openreview.net/forum?id=FGlwR3s9v3>) | [PDF](<https://openreview.net/pdf?id=FGlwR3s9v3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154228>)

Autoregressive large language models \(LLMs\) have rapidly advanced in capability, but their increasing scale comes with substantial computational and memory costs at inference time\. Knowledge distillation \(KD\) offers a practical solution by transferring knowledge from a large teacher model to a smaller student model via alignment of discrete probability distributions\. However, existing KD methods for LLMs primarily rely on divergences that evaluate discrepancies through probability values at each vocabulary index, without explicitly leveraging token\-level semantic information\. We propose Wasserstein\-based knowledge distillation \(WASD\) for LLMs, which incorporates token\-level semantic information via the Wasserstein\-based distance with a cost matrix derived from token embeddings\. To ensure computational tractability, we adopt the Sinkhorn divergence and derive an equivalent formulation that can be efficiently optimized without introducing additional networks\. Experiments across multiple LLM families and scales show that WASD consistently improves distillation performance on diverse tasks, including instruction following, mathematical reasoning, and code generation\. Our results highlight the importance of semantic information encoded in the token space for effective distribution alignment in LLM distillation\.

## Learning What Not to Impute: An Uncertainty\-Aware Diffusion Framework for Meaningful Missingness

**Authors:** Lixing Zhang; Yidong Ouyang; Weifu Li; Guang Cheng; Shixiang Zhu; Liyan Xie

**ID:** 154580\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154580

[Paper](<https://openreview.net/forum?id=CWRww54NWF>) | [PDF](<https://openreview.net/pdf?id=CWRww54NWF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154580>)

Missing value imputation is a fundamental task in machine learning, with most existing methods assuming that all missing entries correspond to unobserved regular values\. In many real\-world datasets, however, missingness may arise from two distinct sources: some entries are meaningfully missing \(intrinsically absent and semantically valid\), while others are missing due to the observation process and should be imputed\. We formalize this distinction as a selective imputation problem, where the goal is to jointly infer which missing entries should be preserved and which should be recovered\. To address this challenge, we propose Diff\-Joint, a diffusion\-based framework that jointly models tabular data together with a latent missingness mask\. The method alternates between conditional sampling and uncertainty\-aware aggregation to iteratively refine both imputed values and missingness labels\. Empirical results on synthetic and real\-world datasets demonstrate that Diff\-Joint effectively identifies meaningfully missing entries while achieving competitive imputation accuracy and improved downstream task performance\.

## On the Error Correcting Effects of Stochasticity in Discrete Diffusion

**Authors:** William Yuan; Sungwon Jeong; Amirali Aghazadeh

**ID:** 154726\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154726

[Paper](<https://openreview.net/forum?id=BTRvd3ITHB>) | [PDF](<https://openreview.net/pdf?id=BTRvd3ITHB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154726>)

Discrete diffusion models achieve strong performance in text and image generation, but their inference remains slow and must inherently balance sampling efficiency and sample quality\. In this work, we present a systematic study of how the \\emph\{degree of stochasticity\} in Markov transitions governs the tradeoff\. We show that highly deterministic transitions converge rapidly but suffer from error accumulation, while more stochastic transitions converge more slowly yet can achieve lower final error\. Using an information\-theoretic analysis, we identify the underlying mechanism as an error correcting effect induced by \\emph\{redundant transitions\} that symmetrically exchange mass between states, and show that these transitions can provably contract sampling errors\. Motivated by this analysis, we propose \\emph\{Discrete Churn and Restart Sampling\} \(DCRS\), a novel inference algorithm that injects controlled stochasticity by alternating between forward and reverse diffusion processes\. Experiments on large\-scale image and language benchmarks show that DCRS improves the speed\-quality tradeoff in the low number of function evaluations regime\. On image datasets, DCRS achieves up to a $10\\times$ reduction in sampling steps compared to standard samplers while maintaining competitive sample quality, whereas on language benchmarks, we observe more nuanced behavior depending on the corruption process and sampling procedure\.

## Integrated Imputation\-Classification for Supervised Learning with Missing Data

**Authors:** Yue Liu; Ben Liang; Ali Tizghadam; Ilijc Albanese

**ID:** 149201\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149201

[Paper](<https://openreview.net/forum?id=sAQTY54J7W>) | [PDF](<https://openreview.net/pdf?id=sAQTY54J7W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149201>)

We study supervised classification problems with missing feature values\. Existing approaches often decouple imputation from classification, producing imputations that may be plausible but uninformative for prediction\. Instead, we propose the Integrated Imputation and Classification Network \(IICN\), which jointly trains an imputer and an $\{\(n\{\+\}1\)\}$\-classdiscriminator adversarially with a single class supervised classification objective, where the discriminator learns to distinguish among the $n$ true classes and an additional \`\`imputed" class\. We prove that at the global optimum, the imputer and discriminator together implement marginalization over missing coordinates and yield a Bayes\-optimal classifier\. We evaluate IICN on FashionMNIST, CIFAR\-10, and tabular datasets with naturally occurring missingness\. IICN outperforms classical impute\-then\-classify pipelines and recent generative baselines, showing strong robustness and accuracy in challenging settings\.

## EgoForce: Robust Online Egocentric Motion Reconstruction via Diffusion Forcing

**Authors:** Inwoo Hwang; Donggeun Lim; Hojun Jang; Young Min Kim

**ID:** 150778\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150778

[Paper](<https://openreview.net/forum?id=fS4wDYJZpa>) | [PDF](<https://openreview.net/pdf?id=fS4wDYJZpa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150778>)

With recent advances in embodied agents and AR devices, egocentric observations are readily available as input for real\-world interactive online applications\. However, egocentric viewpoints can only sporadically observe hands, in addition to the estimated head trajectory\.  We propose EgoForce, an online framework for reconstructing long\-term full\-body motion from noisy egocentric input\. While existing generative frameworks can robustly handle noisy and sparse measurements, they assume a fixed\-length observation window is available and are thus not suitable for real\-time applications\. Faster inference often relies on autoregressive prediction, sacrificing robustness\. In contrast, we adopt a diffusion\-based method with a temporally asymmetric noise schedule inspired by Diffusion Forcing\.  Specifically, our approach models temporally evolving uncertainty and incrementally denoises states as new streaming observations arrive\. Combined with a noise\-robust imputation strategy, EgoForce progressively generates stable and coherent full\-body motion under strict causal constraints\. Experiments demonstrate that our online framework outperforms existing online and offline methods, enabling long\-horizon, full\-body motion reconstruction in challenging egocentric scenarios\.

## Ego\-HMB: Human Motion Bridging from Egocentric Images via Motion Bridge Diffusion Model

**Authors:** Gaoge Han; yongkang cheng; shaoli huang; Jing Zhang; Mingming Gong; Fakhri Karray; Tongliang Liu

**ID:** 155320\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155320

[Paper](<https://openreview.net/forum?id=6VSvsiTqB8>) | [PDF](<https://openreview.net/pdf?id=6VSvsiTqB8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155320>)

In this paper, we move beyond the conventional setting of motion in\-betweening that relies on structured pose inputs, and instead propose a new paradigm that is conditioned on egocentric \(first\-person\) visual observations, thereby reducing the requirements on both users and upstream systems; we term this task Egocentric Human Motion Bridging\. This is motivated by realistic consumer scenarios in VR/AR and robotics, where users typically have access only to raw egocentric imagery \(e\.g\., from wearable devices\) without reliable human pose annotations or motion capture signals\. Unlike conventional motion interpolation in human pose\-conditioned settings or motion generation conditioned on a complete temporal language or image context, the egocentric perspective introduces large viewpoint variations, partial body visibility, and severe temporal ill\-posedness due to cross\-modal endpoint constraints\. To this end, we propose Ego\-HMB, a unified diffusion\-based model that internalizes both endpoint human pose estimation capability and temporally consistent 3D motion infilling ability within a single model through two training stages\. Specifically, we first introduce Egocentric\-to\-Canonical Pretraining \(pretraining stage\), where we design a hierarchical curriculum with progressively increasing temporal spans\. Then, we present a novel Motion Bridge Diffusion Training with endpoint and physics awareness as a fine\-tuning stage, where our bridge diffusion diffuse from neighboring poses to enhance temporal continuity while preserving the global constraints between the two endpoints of a 3D motion sequence\. Extensive experiments and comparisons with one\-stage baselines \(a generative model conditioned directly on two egocentric images\) and two\-stage baselines \(estimation models followed by interpolation models\) demonstrate that our approach consistently outperforms these baselines\.

## The risk of KV cache compression

**Authors:** Lukas Haverbeck; Carmen Amo Alonso; Andres Posada Moreno; Sebastian Trimpe; Marco Pavone

**ID:** 153754\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153754

[Paper](<https://openreview.net/forum?id=IxNf37GZip>) | [PDF](<https://openreview.net/pdf?id=IxNf37GZip>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153754>)

Transformer inference on long sequences is expensive because softmax attention repeatedly reads from a large KV cache\. The prevalent approach to this bottleneck is \_KV cache compression\_, which replaces the full cache with a compact summary\. Despite its practical importance, the design of such summaries is largely driven by empirical experimentation\. On the theoretical side, existing results show that KV cache compression can be impossible in the worst case, but offer little systematic guidance for designing algorithms in regimes where accurate compression is possible\. We bridge this gap by characterizing the \_minimax risk of KV cache compression\_ in terms of the intrinsic compressibility of a cache, revealing when and how accurate compression is possible\. These results yield novel design principles for KV cache compression under causal masking, mapping efficiently to both prefill and autoregressive decoding while achieving minimax\-optimal risk\. We instantiate these principles in a practical algorithm and report promising performance on LongBench in targeted experiments\. Overall, our results provide a principled avenue for practically applicable KV compression with theoretical guarantees\.

## PocketVE: Stable and Controllable Structure\-Based Drug Design with Variance\-Exploding Diffusion

**Authors:** Peining Zhang; Jinbo Bi

**ID:** 152451\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152451

[Paper](<https://openreview.net/forum?id=T2NCIrow1b>) | [PDF](<https://openreview.net/pdf?id=T2NCIrow1b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152451>)

Protein\-conditioned 3D molecule generation is a central challenge in structure\-based drug design, requiring a delicate balance between target compatibility, molecular properties, and physical geometry\.   While diffusion\-based approaches have shown promise, strengthening the conditioning signal can still reduce physical plausibility, and existing models remain sensitive to how pocket information is presented during training and sampling\.   We propose \*\*PocketVE\*\*, a protein\-pocket\-conditioned variance\-exploding \(VE\) diffusion framework that couples stable coordinate denoising with inference\-time conditional control\.   Specifically, PocketVE combines an EDM\-style training and sampling setup for stable 3D denoising, classifier\-free guidance for multi\-property steering without external property classifiers, and adaptive protein perturbation as a training\-time pocket regularizer\.   Evaluated on CrossDocked2020 under the GenBench3D protocol, PocketVE improves 3D\-Validity from 58\.6 to 80\.6 and reduces strain energy from 457\.4 to 127\.9 relative to the TAGMol baseline, while improving median Vina Score, QED, and SA under moderate guidance\.   A guidance\-scale study further shows that moderate guidance gives the best balance between target\-related objectives and geometric quality, whereas overly strong guidance pushes the sampler toward geometric degradation\.   Overall, the results show that target\-aware molecular generation benefits from treating geometric stability and conditional steerability as coupled design goals\.

## Low\-Dimensional Adaptation of Rectified Flow: A  Diffusion and Stochastic Localization Perspective

**Authors:** Saptarshi Roy; Alessandro Rinaldo; Purnamrita Sarkar

**ID:** 155223\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155223

[Paper](<https://openreview.net/forum?id=7LFHmkQrNg>) | [PDF](<https://openreview.net/pdf?id=7LFHmkQrNg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155223>)

In recent years, Rectified flow \(RF\) has gained considerable popularity largely due to its generation efficiency and state\-of\-the\-art performance\. In this paper, we investigate how well RF automatically adapts to the intrinsic low dimensionality of the support of the target distribution to accelerate sampling\. We show that, using a carefully designed choice of the time\-discretization scheme and with sufficiently accurate drift estimates, the RF sampler enjoys an iteration complexity of order $O\(k/\\varepsilon\)$ \(up to log factors\), where $\\varepsilon$ is the precision in total variation distance and $k$ is the intrinsic dimension of  the target distribution\. In addition, we show that the denoising diffusion probabilistic model \(DDPM\) procedure is equivalent to a stochastic version of RF by establishing a novel connection between these processes and stochastic localization\. Building on this connection, we further design a stochastic RF sampler that also adapts to the low\-dimensionality of the target distribution under mild requirements on the accuracy of the drift estimates, and also with a specific time schedule\. We illustrate the efficacy of newly designed time\-discretization schedules with simulations on the synthetic data and text\-to\-image \(T2I\) data experiments\.

## Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints

**Authors:** Ting Gao; Stavros Orfanoudakis; Nan Lin; Winnie Daamen; Serge Hoogendoorn; Elvin Isufi

**ID:** 148142 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zxpb2T9sJT>) | [PDF](<https://openreview.net/pdf?id=zxpb2T9sJT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148142>)

Balancing policy expressiveness with the exploration\-exploitation trade\-off is a core challenge in online Reinforcement Learning \(RL\)\. While Stochastic Differential Equation \(SDE\)\-based diffusion policies can represent complex, multimodal action distributions, they suffer from two critical limitations: their stochastic reverse processes render entropy intractable \(necessitating heuristic exploration\), and computing policy gradients through long denoising chains is expensive and unstable\. In this work, we show that ODE\-based flow matching inherently resolves these issues by enabling both simulation\-free policy optimization and tractable entropy computation\. Building on this, we introduce Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints \(FMER\)\. Our framework exploits this insight in three ways\. First, we theoretically establish that minimizing an advantage\-weighted conditional flow matching loss acts as a simulation\-free surrogate for policy mirror descent\. This steers the velocity field toward high\-value regions while entirely avoiding backpropagation through the ODE solver\. Second, we derive an analytic entropy objective that corrects for the density distortion caused by the $\\tanh$ transformation \(mapping an unbounded latent space to bounded actions\), thereby facilitating principled maximum\-entropy optimization\. Finally, we dynamically tune the mirror descent temperature based on the effective sample size to enforce a robust trust region during training\. Empirical evaluations demonstrate that FMER achieves superior performance on the challenging sparse\-reward FrankaKitchen environment, while maintaining competitive results across standard dense\-reward MuJoCo benchmarks\. Code is available at \\url\{https://anonymous\.4open\.science/r/submission\-25E2/\}\.

## Policy\-DRIFT: Dynamic Reward\-Informed Flow Trajectory Steering

**Authors:** Atharva Mahajan; Abhijeet Yashwant Vishwasrao; Yuning Wang; Ricardo Vinuesa

**ID:** 154425 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dg4j2E3Vtz>) | [PDF](<https://openreview.net/pdf?id=Dg4j2E3Vtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154425>)

Skin\-friction drag induced by wall\-bounded turbulent flows accounts for a substantial fraction of energy consumption across commercial aerospace, wind energy, and marine transport\. Its active reduction is one of the highest\-value targets in engineering fluid dynamics\. Deep reinforcement learning \(DRL\) has emerged as the leading approach for real\-time flow control, yet its performance ceiling is set not by algorithmic capability but by reward structure, the naive scalar objective does not optimally reflect the underlying physics\. Policy\-DRIFT bypasses this ceiling by relocating reward information from policy gradients to generative model inference: a conditional flow matching model \(CFM\) constructs a physically\-grounded manifold of realisable flow states spanning multiple control regimes, Terminal Reward Guidance \(TRG\) steers samples toward reward\-maximising targets at inference, and a lightweight DRL policy, structurally decoupled from reward quality, tracks these full\-field targets via root\-mean\-squared error \(RMSE\) minimisation\. The test case is turbulent channel flow simulated using direct numerical simulation \(DNS\) at friction Reynolds number of $\\mathrm\{Re\}\_\\\\tau = 180$, which is the canonical benchmark for wall\-bounded turbulence\. Policy\-DRIFT achieves $49\\\\%$ drag reduction approaching the theoretical upper bound, which is $\\\\approx 16\\\\%$ higher than the DRL benchmark, while consuming 37$\\\\times$ less actuation energy\. Our approach combines generative methods with active flow control, marking a paradigm shift towards controlling complex physical systems efficiently\.

## RB\-LDC: Redundancy\-Balanced Latent Coding for Robust Diffusion

**Authors:** Hyunseok Jeong; Jaeho Jeon; Young\-Sik Kim

**ID:** 152929 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PJDxN5JBij>) | [PDF](<https://openreview.net/pdf?id=PJDxN5JBij>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152929>)

Latent diffusion models \(LDMs\) achieve high\-fidelity generation by moving diffusion from pixels to a compact latent space, but standard tokenizers are optimized for compression, not robustness under diffusion\-time corruption\. We formulate latent tokenization as diffusion\-aware joint source\-\-channel coding and diagnose standard LDM pipelines as missing an explicit channel\-coding step\. A diffusion\-aware rate\-\-robustness functional admits an explicit spectral characterization in $G^\\top G$, yielding the Redundancy\-Balance Principle: optimal redundancy is not uniform, but aligns with semantic sensitivity and equalizes marginal integrated\-risk reduction across active directions\. The resulting optima take weighted tight\-frame and water\-filling forms; isotropic bottlenecks are minimax\-suboptimal under heterogeneous sensitivity, and a group\-conditioned extension identifies rare groups as capacity\-limiting under a fixed latent budget\. We instantiate the theory as RB\-LDC \(Redundancy\-Balanced Latent\-Diffusion Coding\), a lightweight tokenizer modification that inserts a learned coding layer before diffusion\. Six controlled experiments validate the theorem sequence up to $k\{=\}1024$, with a $53\.5\\times$ alignment gap, $659\\times$ minimax gap, and real\-image VAE learnability via Adam recovery of the KKT spectrum with relative error below 0\.5 percent\. On SD\-VAE and VA\-VAE at ImageNet\-256, RB\-LDC outperforms isotropic uniform redundancy in all 20 perturbed metric cells over a 15\-SNR grid; VA\-VAE block\-local obtains $\-15\.40$ average pFID and $\-105\.79$ peak pFID at $\\log\_\{10\}\\rho\{=\}\+1$, while preserving clean rFID parity \(gap $\-0\.0001$\)\. RB\-LDC turns latent tokenizer design into a reliability problem for diffusion models\.

## The Power of Second Order Methods for Sequence Preconditioning

**Authors:** Annie Marsden; Elad Hazan

**ID:** 151370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b4vIW5Fa4z>) | [PDF](<https://openreview.net/pdf?id=b4vIW5Fa4z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151370>)

Sequence prediction methods for dynamical systems with long memory, i\.e\. marginally stable systems, typically achieve regret that grows polynomially with the hidden dimension of the underlying generative model\. Universal Sequence Preconditioning \(USP\) \\cite\{marsdenuniversal\} is a method that compresses any sequence which comes from a linear dynamical system into a \`\`preconditioned'' sequence which requires exponentially shorter memory for accurate prediction\. However, the preconditioned sequence yields exponentially larger diameters and gradients, hindering USP from unlocking optimal regret bounds\. Inspired by the minimum description length principle, we show that the Vovk\-Azoury\-Warmuth \(VAW\) algorithm is naturally matched to the USP regime\. Indeed, it takes advantage of the memory compression while remaining robust to the exponential explosion of the diameter\. We prove that combining USP with VAW achieves astoundingly strong results: for any marginally\-stable linear dynamical system, this algorithm achieves polylogarithmic regret $O\\left\( \\log^3 T \\right\)$ even in the presence of asymmetric hidden transition matrices\. Finally, we extend the applicability of USP beyond bounded\-spectrum systems by providing new complex\-analytic bounds on Chebyshev polynomials, allowing for systems with constant complex arguments\.

## dRAE: Representation Autoencoder with Hyper\-Spherical Codes

**Authors:** Tianren Ma; Lin Long; Chuyan Chen; Mu Zhang; Junbo Zhao; Tong Zhang; Qixiang Ye

**ID:** 148680 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vrjQMuRQQi>) | [PDF](<https://openreview.net/pdf?id=vrjQMuRQQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148680>)

Multi\-modal models require visual tokenizers that jointly capture high semantic density and fine\-grained structural fidelity\. Representation Autoencoders \(RAEs\) offer a promising direction by decoding images directly from a pre\-trained semantic space using high\-dimensional continuous tokens, bypassing the information bottleneck of VAEs and benefiting both visual understanding and generation\.   In this work, we aim to discretize these continuous vision representations to bridge the gap with language models — a non\-trivial challenge, as existing quantization methods suffer from codebook collapse, failing to scale while preserving semantic coherence\. We identify the root cause as \*\*metric mismatch\*\*: standard Euclidean codebook objectives are fundamentally misaligned with the anisotropic geometry of representation space, leading to codebook embeddings with high\-variance magnitude scales and uneven angular distributions that hinder scalability\.   To address this, we propose \*\*Hyper\-Spherical Quantization \(HSQ\)\*\* , which decouples semantic content from feature magnitude via angular routing, preventing code assignment from being dominated by scale rather than meaning\. The resulting \*\*discrete Representation Autoencoder \(dRAE\)\*\*  achieves high\-fidelity reconstruction while preserving semantic integrity and supporting scalable discrete latent spaces\. Extensive experiments demonstrate consistent performance gains as the vocabulary size scales to $131,072$, along with strong unified performance across both visual understanding and generation benchmarks\.

## Beyond Local Neighborhoods: Fractional Diffusion with Levy Flights on Simplicial Complexes for Link Prediction

**Authors:** Jaidev Goel; Yuzhou Chen; Konstantin Avrachenkov; Yulia Gel

**ID:** 148623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wNPpINjRDa>) | [PDF](<https://openreview.net/pdf?id=wNPpINjRDa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148623>)

Owing to enhanced capabilities to capture a broad range of higher\-order interactions, simplicial neural networks \(SNNs\) have emerged as a new powerful methodology for graph learning\.  However, prevailing SNNs are often limited in efficient exploration  of heterogeneous graphs, thereby restricting the SNN utility on downstream tasks\. To address this challenge, we introduce the concept of L\\'\{e\}vy flights over simplices, offering a new efficient alternative  to learning higher\-order graph \(sub\)structures under heterogeneous scenarios\. Specifically, we develop a new Fractional Hodge Laplacian Simplicial Neural Network \(FHL\-SNN\), a novel approach leveraging fractional powers of the Hodge\-Laplacian and allowing for a more efficient exploration of the underlying higher\-order graph organization in conjunction with the link prediction\.  We establish a theoretical connection between a fractional diffusion process and graph exploration over simplices\. In particular, we prove that the L\\'\{e\}vy flight over simplices yields a lower mixing time than that of its non\-fractional counterpart\. Our extensive experiments on both directed and undirected link prediction tasks illuminate the power of non\-local search of graph space via fractional dynamics, yielding relative gains of up to 9\\%\. Finally, we show that the idea of L\\'\{e\}vy flights over simplices is versatile and that the integration of fractional dynamics to existing SNNs has the potential to further boost the model performance\.

## Information\-Geometric Forward Policy Training in GFlowNets

**Authors:** Yordan Raykov; Rodrigo Veiga

**ID:** 149101 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=suXwdFeEA9>) | [PDF](<https://openreview.net/pdf?id=suXwdFeEA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149101>)

Generative Flow Networks \(GFlowNets\) have emerged as a flexible framework for amortized inference over discrete and mixed discrete\-continuous objects, requiring only an unnormalized target density specified through a reward\. In this work, we formulate forward\-policy training in GFlowNets through the information geometry of the induced trajectory sampler\. Treating the forward policy as an induced trajectory sampler, we show that its intrinsic first\-order geometry is given by the Fisher\-Rao metric of the trajectory family, and that the associated natural gradient provides the canonical local update whenever the corresponding Fisher information is computable or accurately approximable\. We derive an exact decomposition of the trajectory Fisher into per\-step conditional second moments, which clarifies when temporal score interactions vanish and when dense couplings remain under shared parameterization\. This leads to three computational regimes: settings with tractable exact Fisher information, settings where Monte Carlo estimators of the expected Fisher are sufficient, and structure\-exploitable settings in which target locality or factorization yields accurate approximations of the Fisher expectation\. In the latter case, graphical\-model tools such as exact marginalization, separator methods, and belief propagation provide principled surrogates for natural\-gradient updates\. The resulting framework turns target structure into optimization geometry and yields a tractable route to structure\-aware forward\-policy training in GFlowNets\. We illustrate the framework empirically through examples comparing convergence and exploration behavior under Riemannian and Euclidean optimization\.

## AbFlowNet: Optimizing Antibody\-Antigen Binding Energy via Diffusion\-GFlowNet Fusion

**Authors:** Abrar Rahman Abir; Haz Sameen Shahgir; Rownok Z Ratul; Toki Tahmid; Greg Ver Steeg; Yue Dong

**ID:** 152550 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SKLSCBKClu>) | [PDF](<https://openreview.net/pdf?id=SKLSCBKClu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152550>)

Complementarity Determining Regions \(CDRs\) are critical segments of an antibody that facilitate binding to specific antigens\. Current computational methods for CDR design rely on reconstruction losses and do not jointly optimize binding energy, a crucial metric of antibody efficacy\. Rather, binding energy optimization is performed via computationally expensive Online Reinforcement Learning \(RL\) pipelines that rely heavily on unreliable binding\-energy estimators\. In this paper, we propose AbFlowNet, a novel generative framework that integrates GFlowNet with Diffusion models\. By framing each diffusion step as a state in the GFlowNet framework, AbFlowNet jointly optimizes standard diffusion losses and binding energy by directly incorporating energy signals into the training process, thereby unifying diffusion and reward optimization in a single procedure\. Experimental results show that AbFlowNet outperforms the base diffusion model by 3\.06% in amino acid recovery, 20\.40% in geometric reconstruction \(RMSD\), and 3\.60% in binding energy improvement ratio\. ABFlowNet also decreases Top\-1 total energy and binding energy errors by 24\.8% and 38\.1%, which is competitive with AbDPO's expensive online RL optimization without pseudo\-labeling the test dataset or requiring computationally expensive synthetic CDR sampling\.

## PRECISE: SDE\-Consistent Stochastic Sampling for RL Post\-Training of Flow\-Matching Models

**Authors:** Bo Peng; Tao Huang; Weijie Kong; Junzhe Li; Yue Wu; Qi Tian; Jiangfeng Xiong; Jian\-Wei Zhang; Liefeng Bo; Zhao Zhong

**ID:** 154105\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154105

[Paper](<https://openreview.net/forum?id=GDousLQnYE>) | [PDF](<https://openreview.net/pdf?id=GDousLQnYE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154105>)

Reinforcement learning \(RL\) has become an effective way to improve prompt alignment and perceptual quality in diffusion and flow\-matching generators\. A critical step for applying online RL to flow matching is turning the deterministic sampling trajectory into a stochastic policy, typically by replacing the reverse\-time Ordinary Differential Equation \(ODE\) with a Stochastic Differential Equation \(SDE\)\. The stochastic sampler, controlling the exploration behavior and denoising dynamics, is thus part of the policy, and its design can significantly affect the reward optimization performance\. We break down the sampler design into two interdependent components: choosing the right amount of stochastic exploration, and discretizing the resulting SDE faithfully at the small step counts used in RL\. To address the first component, we analyze the inherent tension between exploration and stability in denoising and derive an SDE schedule that balances the two\. Turning to the discretization challenge, we use a toy example to show that existing samplers can deviate from the flow\-matching process, either by introducing excessive discretization noise or by relying on heuristic rules that do not guarantee convergence to the data distribution\. To address these issues, we propose \\textsc\{Precise\}, a new stochastic sampler that balances effective exploration with stability\. Crucially, \\textsc\{Precise\} keeps the denoising trajectory SDE\-consistent through a novel approximation that freezes the clean\-latent posterior mean, resolving the excess noise issue in standard samplers\. Extensive experiments demonstrate that this formulation leads to significantly faster and more stable reward optimization via reinforcement learning, achieving state\-of\-the\-art alignment scores \(e\.g\., PickScore, HPSv2\.1\) while requiring 13\.1\-\-53\.2\\% less wall\-clock training time to match the best in\-domain performance of prior samplers\.

## Stochastic Heat Diffusion Models

**Authors:** Marc Law; Xiaoyu Wang; Lucas Berry; Anthony L Caterini; Gabriel Loaiza\-Ganem

**ID:** 149733\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149733

[Paper](<https://openreview.net/forum?id=nlt2l4kt7S>) | [PDF](<https://openreview.net/pdf?id=nlt2l4kt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149733>)

_Abstract unavailable from the accessible public sources._

## Unlearning Diffusion Policies via Relative Fisher Forgetting

**Authors:** Manuel Kelly; Yingxue Zhang; Fangzhou Lin; Yanhua Li; Xin Zhang

**ID:** 153227\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153227

[Paper](<https://openreview.net/forum?id=MpxEJi7gJL>) | [PDF](<https://openreview.net/pdf?id=MpxEJi7gJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153227>)

_Abstract unavailable from the accessible public sources._

## Step\-dLLM: Adaptive Step\-aware Sparse Attention for Efficient Diffusion LLM Inference

**Authors:** Zhichen Zeng; Xichong zhang; Junpan Wu; Yifei Zuo; Chi\-Chih Chang; Jiayi Wang; Maohua Nie; Ji Liu; Ang Li; Banghua Zhu

**ID:** 155406\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155406

[Paper](<https://openreview.net/forum?id=5sFFGPtDy2>) | [PDF](<https://openreview.net/pdf?id=5sFFGPtDy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155406>)

_Abstract unavailable from the accessible public sources._

## DC\-SAE: Deep Compression Semantic Autoencoder for Faster Diffusion Convergence

**Authors:** Xu Huang; Ye Huang; Zijun Liao; Yuwei Niu; Xiaojie Li; Menghan Zhou; De Wen Soh; Xiaotong Li; Daquan Zhou

**ID:** 152595\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152595

[Paper](<https://openreview.net/forum?id=Rx1xVinvFW>) | [PDF](<https://openreview.net/pdf?id=Rx1xVinvFW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152595>)

_Abstract unavailable from the accessible public sources._

## Secure Seed\-Based Multi\-bit Watermarking for Diffusion Models from First Principles

**Authors:** Enoal Gesny; Eva Giboulot

**ID:** 153457\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153457

[Paper](<https://openreview.net/forum?id=L9bouam6wJ>) | [PDF](<https://openreview.net/pdf?id=L9bouam6wJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153457>)

_Abstract unavailable from the accessible public sources._

## Beyond Semantics: The Unreasonable Effectiveness of Reasonless Intermediate Tokens

**Authors:** Karthik Valmeekam; Vardhan Palod; Kaya Stechly; Atharva Gundawar; Subbarao Kambhampati

**ID:** 156774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156774>)

Recent impressive results from large reasoning models have been interpreted as a triumph of Chain of Thought \(CoT\), and especially of the process of training on CoTs sampled from base LLMs in order to help find new reasoning patterns\. While these traces certainly seem to help the model performance, it is not clear how they actually influence model performance, with some works ascribing semantics to them and others cautioning against relying on them as transparent and faithful proxies of the model's internal computational process\. To systematically investigate the role of end\-user semantics of derivational traces, we set up a controlled study where we train transformer models from scratch on formally verifiable reasoning traces and the solutions they lead to, constraining both intermediate steps and final outputs to align with those of a formal solver\. We notice that, despite significant improvements over the solution\-only baseline, models trained on entirely correct traces can still produce invalid reasoning traces even when arriving at correct solutions\. More interestingly, our experiments also show that models trained on corrupted traces, whose intermediate reasoning steps bear no relation to the problem they accompany, achieve performance largely comparable to those trained on correct traces\. In fact, our corrupted models generalize better on out\-of\-distribution tasks\. We also study the effect of GRPO\-based RL post\-training on trace validity, noting that while solution accuracy increase, this is not accompanied by any improvements in trace validity\. Finally, we examine whether reasoning\-trace length reflects inference\-time scaling and find that trace length is largely agnostic to the underlying computational complexity of the problem being solved\. These results challenge the assumption that intermediate tokens or "Chains of Thought" reflect or induce predictable reasoning behaviors and caution against anthropomorphizing such outputs or over\-interpreting them \(despite their mostly seemingly forms\) as evidence of human\-like or algorithmic behaviors in language models\.

## Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints

**Authors:** Ting Gao; Stavros Orfanoudakis; Nan Lin; Winnie Daamen; Serge Hoogendoorn; Elvin Isufi

**ID:** 148142\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148142

[Paper](<https://openreview.net/forum?id=zxpb2T9sJT>) | [PDF](<https://openreview.net/pdf?id=zxpb2T9sJT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148142>)

Balancing policy expressiveness with the exploration\-exploitation trade\-off is a core challenge in online Reinforcement Learning \(RL\)\. While Stochastic Differential Equation \(SDE\)\-based diffusion policies can represent complex, multimodal action distributions, they suffer from two critical limitations: their stochastic reverse processes render entropy intractable \(necessitating heuristic exploration\), and computing policy gradients through long denoising chains is expensive and unstable\. In this work, we show that ODE\-based flow matching inherently resolves these issues by enabling both simulation\-free policy optimization and tractable entropy computation\. Building on this, we introduce Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints \(FMER\)\. Our framework exploits this insight in three ways\. First, we theoretically establish that minimizing an advantage\-weighted conditional flow matching loss acts as a simulation\-free surrogate for policy mirror descent\. This steers the velocity field toward high\-value regions while entirely avoiding backpropagation through the ODE solver\. Second, we derive an analytic entropy objective that corrects for the density distortion caused by the $\\tanh$ transformation \(mapping an unbounded latent space to bounded actions\), thereby facilitating principled maximum\-entropy optimization\. Finally, we dynamically tune the mirror descent temperature based on the effective sample size to enforce a robust trust region during training\. Empirical evaluations demonstrate that FMER achieves superior performance on the challenging sparse\-reward FrankaKitchen environment, while maintaining competitive results across standard dense\-reward MuJoCo benchmarks\. Code is available at \\url\{https://anonymous\.4open\.science/r/submission\-25E2/\}\.

## scShapeBench: Discovering geometry from high dimensional scRNAseq data

**Authors:** Andrew J Steindl; Joao Felipe Rocha; Brian T Di Bassinga; Zachary Warren; Matthew Scicluna; César Miguel Valdez Córdova; Shabarni Gupta; Leire Torices; Daniel Neumann; Timothy J Mann; Ihuan Gunawan; Dhananjay Bhaskar; John G Lock; Christine L Chaffer; Guy Wolf; Smita Krishnaswamy

**ID:** 139214\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139214

[Paper](<https://openreview.net/forum?id=eE5wOtNka2>) | [PDF](<https://openreview.net/pdf?id=eE5wOtNka2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139214>)

High\-dimensional point cloud data arise across many scientific domains, notably single\-cell biology\. The "shapes" or topologies of these datasets are informative of types of information that can be extracted from the datasets\. For example clustered data admits the extraction of cell types or cell states in a static analysis of the datasets\. Continuous trajectory structures admit continuous transition or trajectory analysis, while other shapes such as archetypal shapes admit continuum extraction with a range of cells spanning behaviors\. While analysis pipelines exist, they often presuppose shape in data\. For example, the standard Seurat pipeline combines UMAP visualization with Louvain clustering\. This assumes clustered data\. Tools like Monocle and Spade assume a tree\-like shape, and flow\-models like MIOFlow and Conditional Flow Matching are suitable for trajectories\. Deciding which pipeline to apply to which part of the data is often the realm of bioinformaticians who visualize and qualitatively analyze the data before selecting one\. However, with the advent of agentic AI scientists, it becomes important to automate data shape detection, particularly into categories that are relevant for downstream analysis pipelines\. Towards this end we introduce \\textsc\{scShapeBench\} a benchmark dataset comprising both synthetic and single\-cell expert\-annotated datasets that are meant for the task of shape detection\. Synthetic datasets are sampled from a ground truth “skeleton graph” with variance\. Real single\-cell datasets are curated from a variety of sources and are annotated by experts, classifying four categories; clusters, single trajectory, multi\-branches and archetypes\. In addition, we provide a baseline method, scReebTower, to bridge the gap between data visualization and pipeline selection\. scReebTower relies on the diffusion geometry to extract Reeb graphs\. We provide new topology\-aware metrics with which we evaluate scReebTower and existing methods PAGA and Mapper on synthetic data\. On single\-cell data we curate expert annotations of shapes, and showcase evaluations of methods\. Our comparisons indicate scReebTower outperforming other baselines\. Overall, our contributions span benchmarks, evaluation metrics, and a novel baseline method for automated shape detection in high\-dimensional single\-cell data\.

## Flow Matching with In\-Context Priors for Out\-of\-Distribution Brain Dynamics

**Authors:** Sam Gijsen; Michał Łukomski; Marc\-Andre Schulz; Kerstin Ritter

**ID:** 153623\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153623

[Paper](<https://openreview.net/forum?id=K10eas8GS0>) | [PDF](<https://openreview.net/pdf?id=K10eas8GS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153623>)

Conditional flow matching produces realistic out\-of\-distribution samples across modalities from images to proteins, yet the conditioning signals that enable extrapolation remain poorly understood for biological time series\. While considerable work has focused on areas of biology such as proteins and molecules, generative models of neural time series have been largely restricted to categorical conditioning, which precludes compositional and zero\-shot generalization\. In this work, we propose a per\-timestep conditioned diffusion transformer for generating realistic fMRI brain dynamics during unseen cognitive tasks, by injecting both compositional language and optional spatial priors in\-context\. Such zero\-shot generation would support in\-silico task design and counterfactual evaluation of novel cognitive experiments before costly scanner acquisition\. Leveraging this model, we evaluate across hundreds of held\-out task conditions and characterize predictive performance in relation to the training manifold\. From language alone, the model recovers region\-specific recruitment across tasks and held\-out spatial activation patterns\. Spatial priors, when available, complement the text pathway by anchoring generation in regions of task space where language alone degrades, while retaining the compositional structure needed for counterfactual task specification\. To our knowledge this is the first generative model of whole\-cortex fMRI dynamics for unseen cognitive tasks, enabling counterfactual neuroscience and data\-driven experimental design\.

## UniVer: A Unified Perspective for Multi\-step and Multi\-draft Speculative Decoding

**Authors:** Yepeng Weng; Qiao Hu; Takehisa Yairi

**ID:** 155949\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155949

[Paper](<https://openreview.net/forum?id=1bA7Ig2sVb>) | [PDF](<https://openreview.net/pdf?id=1bA7Ig2sVb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155949>)

Speculative decoding accelerates Large Language Models via draft\-then\-verify, where verification can be framed as an Optimal Transport \(OT\) problem\. Existing approaches typically handle multi\-draft and multi\-step aspects in isolation, applying either flat OT to single\-step drafts or per\-token rejection sampling to tree\-structured candidates\. This separation leaves the joint regime \(where multi\-step dependencies meet multi\-draft branching\) poorly optimized, as local verification rules fail to exploit the coupling between horizontal and vertical dimensions of candidate trees\. In this paper, we propose a unified perspective that casts tree\-based verification as a conditional OT problem\. Our key insight is that vertical dependencies can be abstracted through prefix acceptance probabilities, which act as dynamic scaling factors to actively guide horizontal draft selection\. Based on this principle, we introduce UniVer, a verification algorithm that jointly optimizes across tree levels by composing local optimal transport plans under prefix constraints\. We prove that UniVer remains lossless and achieves the optimal acceptance rate under the proposed conditional framework\. Extensive experiments across different tasks and models demonstrate that UniVer improves acceptance length by 4\.2\\% to 8\.5\\% over standard recursive rejection sampling without replacement, while maintaining exact distributional alignment with the target model\.

## ParaPC\-FM: Accelerating Parallel Sampling via Principled Initialization

**Authors:** Bangwei Li; Chuan Gou; Jianrong Lu; Guoyao Yu; Jianhai Chen

**ID:** 150049\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150049

[Paper](<https://openreview.net/forum?id=l8sEnyVlRf>) | [PDF](<https://openreview.net/pdf?id=l8sEnyVlRf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150049>)

Flow matching and diffusion models achieve high\-quality generation by solving continuous\-time generative dynamics, but their sampling remains inherently sequential and costly\. Parallel sampling reduces wall\-clock latency, yet often requires many function evaluations \(NFEs\) due to inaccurate future\-state initialization and repeated correction\. We propose ParaPC\-FM, a fixed\-point predictor\-\-corrector framework that unifies high\-order solver correction and future\-state initialization, enabling both components to be incorporated into different parallel samplers\. In particular, our UniP\-based truncated initialization reuses past velocity predictions to estimate future states more accurately, reducing correction iterations and NFEs with almost no additional overhead\. On a ParaDiGMS\-style framework, ParaPC\-FM achieves up to $1\.25\\times$ and $1\.49\\times$ speedups on FLUX\.1\-dev at $50$ and $100$ steps, and up to $1\.22\\times$ and $1\.16\\times$ speedups on Stable Diffusion 3 and Stable Diffusion 3\.5 at $50$ steps\. When integrated into ParaTAA, the proposed initialization further achieves up to $1\.17\\times$ speedup at $50$ steps\. Importantly, these acceleration gains are obtained while keeping image quality nearly unchanged\.

## BSTabDiff: Block\-Subunit Diffusion Priors for High\-Dimensional Tabular Data Generation

**Authors:** Al Zadid Sultan Bin Habib; Md Younus Ahamed; Prashnna K Gyawali; Gianfranco Doretto; Donald A Adjeroh

**ID:** 151140\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151140

[Paper](<https://openreview.net/forum?id=ciPCMXX1aj>) | [PDF](<https://openreview.net/pdf?id=ciPCMXX1aj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151140>)

High\-Dimensional Low\-Sample Size \(HDLSS\) tabular domains \(e\.g\., omics\) are characterized by $n \\ll m$, where $n$ = number of samples, and $m$ = number of features\. Such domains often exhibit strong local correlation groups, sparse cross\-group dependencies, heavy\-tailed non\-Gaussian marginals, heteroscedastic noise, and structured missingness, making direct density learning in $\\mathbb\{R\}^m$ ill\-conditioned since $n \\ll m$\. We propose BSTabDiff, a block\-subunit generative framework that partitions the $m$ observed features into $M$ latent blocks \($M \\ll m$\) and generates each block via a shared low\-dimensional subunit variable, concentrating global dependence learning in the compact block\-latent space $\\mathbb\{R\}^M$ while decoding to the full feature space with copula\-driven dependence, flexible per\-feature marginals, and explicit missingness mechanisms\. BSTabDiff can induce a data\-driven feature ordering and block construction before latent partitioning, allowing the model to better align with local dependency structure when such organization is beneficial\. BSTabDiff supports modern deep priors on block latents, including diffusion and normalizing flows, enabling stable synthesis and controllable benchmark generation in the HDLSS regime\. Empirically, BSTabDiff produces more realistic and more stable high\-dimensional synthetic data when compared with unstructured tabular generators on HDLSS data\.

## Flow Matching for Count Data

**Authors:** Ganchao Wei; John Pearson

**ID:** 155470\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155470

[Paper](<https://openreview.net/forum?id=5N0iGXXzEJ>) | [PDF](<https://openreview.net/pdf?id=5N0iGXXzEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155470>)

High\-dimensional count data arise in applications such as single\-cell RNA sequencing and neural spike trains, where mapping between distributions across successive batches or time points form critical components of data analysis\. The recent success of diffusion\- and flow\-based deep generative models for images, video, and text motivates extending these ideas to count\-valued settings, but many existing methods either treat each count as a categorical state or transform counts into a continuous space, neither of which is natural or efficient when the count range is large\. We propose count\-FM, a flow\-matching framework for count data based on a continuous\-time birth\-death process with local unit jumps\. Count\-FM learns marginal transitions efficiently in count space through simulation\-free training of conditional transition rates, allowing transport between arbitrary count\-distributed source and target populations\. In simulation, count\-FM achieves better sample quality than representative baselines while using substantially fewer parameters\. We further apply count\-FM to scRNA\-seq and neural spike\-train data for unconditional generation, transport, and conditional generation\. Across these tasks, count\-FM yields improved sample quality, greater modeling efficiency, and interpretable transport paths\.

## Contrastive Distribution Matching for Amortized Sequential Monte Carlo in Discrete Diffusion

**Authors:** Jaihoon Kim; Taehoon Yoon; Prin Phunyaphibarn; Seungjun Kim; Morteza Mardani; Minhyuk Sung

**ID:** 150808\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150808

[Paper](<https://openreview.net/forum?id=fGFv81kGOt>) | [PDF](<https://openreview.net/pdf?id=fGFv81kGOt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150808>)

Discrete diffusion models have emerged as powerful frameworks for generating structured categorical data\. However, efficiently sampling from reward\-tilted distributions remains a fundamental challenge\. While Twisted Sequential Monte Carlo \(SMC\) offers asymptotic exactness for this task, estimating the optimal twist function in discrete state spaces necessitates costly Monte Carlo approximations, resulting a severe computational bottleneck at inference\. To overcome this limitation, we introduce Contrastive Distribution Matching \(CDM\), a novel framework that amortizes the cost of SMC inference by learning a parameterized twist function via positive and negative samples\. For efficient training, we reformulate the gradient estimator to leverage the closed\-form forward kernels of discrete diffusion models\. In practice, evaluating our learned twist function incurs less than 5% additional computational overhead compared to base model inference\. Through extensive empirical evaluations, we demonstrate that CDM consistently outperforms existing baselines under matched wall\-clock time\. We validate the effectiveness and versatility of our approach across a diverse range of applications, including toxic text generation, regulatory DNA sequence design, protein designability, and diffusion large language model alignment\.

## Not All Slots Are Equal: Non\-Co\-Progressive Markov Bridge for Bundle Construction

**Authors:** Rongchao Zhang; Haodong Jing; Siheng Wang; Zhengtao Yao; Yajun Liu

**ID:** 154810\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154810

[Paper](<https://openreview.net/forum?id=AmxJuunsX7>) | [PDF](<https://openreview.net/pdf?id=AmxJuunsX7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154810>)

Bundle construction \(BC\) is a critical technique in recommender systems research, which aims to select a coherent subset of items from large\-scale item catalogs to either construct a complete bundle from scratch or complete a partial bundle with missing items\. However, the extremely high\-dimensional combinatorial spaces and heterogeneous semantic granularities involved pose significant challenges to BC benchmarking, and existing generative frameworks suffer from failing to precisely align the generated unknown slots with highly compatible known items\. In this paper, we exploit conditional probability transitions in discrete state spaces and introduce a novel Non\-co\-progressive Markov bridge, NonMBB, a generalization of Markov bridge for constructing bundles of products\. Specifically, given bundle's unique properties, NonMBB first improve Markov bridge for slot modeling through: i\) categorizing item slots into high\-compatibility slots and weakly\-associated slots with respect to the known items, assigning them distinct timestep schedules to avoid the pitfall where high\-compatibility slots must reference noisy, uninformative context at identical noise levels; ii\) applying introduce schedule reweighting to constrain the maximum timestep disparity across slots, thereby preventing noise residuals caused by excessive asynchrony\. Extensive experiments on Spotify and POG demonstrate that NonMBB establishes a substantially improved  optimal bipartite matching over existing diffusion methods, yielding higher embedding\-space alignment independently of exact\-match recall\.

## A Generative Model of Contextual Integrity: Appropriate vs\. Inappropriate Information Sharing

**Authors:** Omer Ebead; Juan Formanek; Joel Leibo

**ID:** 148966\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148966

[Paper](<https://openreview.net/forum?id=tnB9Xtbfa6>) | [PDF](<https://openreview.net/pdf?id=tnB9Xtbfa6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148966>)

_Abstract unavailable from the accessible public sources._

## LYNX: Learning Dynamic Exits for Confidence\-Controlled Reasoning

**Authors:** Ömer Faruk Akgül; Yusuf H Kalayci; Rajgopal Kannan; Willie Neiswanger; Viktor Prasanna

**ID:** 149284\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149284

[Paper](<https://openreview.net/forum?id=rSKYIHN4OX>) | [PDF](<https://openreview.net/pdf?id=rSKYIHN4OX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149284>)

_Abstract unavailable from the accessible public sources._

## Structured Coupling for Flow Matching

**Authors:** Francisco Sumba Toral; Carles Balsells Rodas; Yingzhen Li

**ID:** 153603\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153603

[Paper](<https://openreview.net/forum?id=KA6cQELF6H>) | [PDF](<https://openreview.net/pdf?id=KA6cQELF6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153603>)

Standard flow matching scales well but typically relies on an unstructured source distribution, limiting its ability to learn interpretable latent structure\. Latent\-variable models, by contrast, capture structure but often sacrifice generative quality\. We bridge this gap by proposing Structured Coupling for Flow Matching \(SCFM\), a cooperative framework that augments flow matching with structured latent representation learning\. By introducing structured latent variables and exogenous noise into the source, SCFM jointly learns a structured prior \(via latent variable modeling\) and a continuous transport map \(via flow matching\)\. It uses a shared time\-dependent recognition network for both latent variable model variational inference and intermediate\-time flow velocity estimation\. This yields a structurally informed yet unconditional, simulation\-free flow model, where the latent variable model can also assist flow sampling\. Empirically, SCFM facilitates unsupervised latent representation learning for clustering, disentanglement and downstream tasks, while remaining competitive with flow matching in sample quality, showing that meaningful structure can be learned without sacrificing generative fidelity\.

## MiCo: Microstructure\-Consistent Flow Matching for Diffusion MRI Angular Super\-Resolution

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 148957\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148957

[Paper](<https://openreview.net/forum?id=tty64RLmO2>) | [PDF](<https://openreview.net/pdf?id=tty64RLmO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148957>)

Diffusion\-weighted MRI \(dMRI\) requires densely sampling $q$\-space across many directions and shells, leading to long scan times that limit clinical use\. Angular super\-resolution \(ASR\) recovers a dense signal from a sparse acquisition, enabling substantially shorter scans\. We propose a physics\-guided flow matching framework for ASR built on a basic fact about dMRI: under the cumulant expansion, the diffusion signal naturally splits into a known linear function of the $q$\-vectors plus a residual carrying higher\-order angular detail\. We exploit this twice\. First, we initialize the flow from a closed\-form dense DTI estimate, recasting ASR as residual flow matching from a physically meaningful starting point rather than uninformative noise\. Second, we impose a microstructure\-consistency loss, rooted in the physical principle that any two diffusion\-weighted signals from the same voxel must be explained by a single underlying set of microstructural parameters\. Together, these designs anchor predictions wherever the acquisition is informative while leaving the learned prior to model crossing\-fiber and higher\-order angular detail\. On the Human Connectome Project \(HCP\-YA\) and UK Biobank, our method matches or surpasses analytical baselines and recent deep learning methods on signal reconstruction, kurtosis scalar maps, and fiber\-orientation reconstruction under aggressive subsampling\.

## Path\-Guided Flow Matching for Dataset Distillation

**Authors:** xuhui li; Zhengquan luo; Zixu Wu; Xiwei Liu; Yongqiang Yu; Zixiang Hong; Zhiqiang Xu

**ID:** 149871\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149871

[Paper](<https://openreview.net/forum?id=mZhtTOUDIu>) | [PDF](<https://openreview.net/pdf?id=mZhtTOUDIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149871>)

Dataset distillation compresses large datasets into compact synthetic sets with comparable performance in training models\. Despite recent progress on diffusion\-based distillation, such methods typically rely on heuristic guidance or prototype assignment over long denoising chains, which increases sampling cost and makes prototype\-consistent control harder under strong guidance or low IPC\. We propose \\emph\{Path\-Guided Flow Matching \(PGFM\)\}, the first flow matching\-based framework for generative distillation, which enables deterministic synthesis by solving an ODE in a few steps\. In particular, we introduce a retrieval\-based prototype inversion stage that identifies prototype\-consistent initial noises for class prototypes on the frozen flow manifold, and further develop an anchor\-guided residual correction strategy for bounded stage\-wise control\. This design follows a controlled\-transport principle: retrieval reduces initialization mismatch, while anchor guidance provides a bounded residual correction along the flow trajectory\. Extensive experiments across high\-resolution benchmarks demonstrate that PGFM matches or surpasses prior diffusion\-based distillation approaches with fewer sampling steps while delivering competitive performance with improved efficiency\.

## Denoising Time Matters: Diverse Generation in Diffusion Language Models

**Authors:** jingxuan wu; Zhenglin Wan; Yuzhe YANG; Yiqiao Huang; Chubin Zhang; Xingrui Yu; Ivor Tsang; Yang You

**ID:** 154837\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154837

[Paper](<https://openreview.net/forum?id=AZvYD2Qmwj>) | [PDF](<https://openreview.net/pdf?id=AZvYD2Qmwj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154837>)

Diffusion language models \(Diffusion\-LMs\) generate text through iterative denoising, exposing a temporal structure that is largely absent from autoregressive decoding\. In this paper, we show that this temporal structure provides a useful control axis for generation diversity: early denoising steps mainly determine high\-level semantic trajectories, while later steps refine lexical realization\. Motivated by this observation, we propose Time\-Annealed Perturbation Sampling \(TAPS\), a training\-free inference strategy that samples nearby conditioning trajectories through time\-aware, manifold\-constrained perturbations\. TAPS encourages semantic branching during early denoising and anneals the perturbation away before refinement, improving exploration while preserving prompt alignment, generation quality, and reasoning ability\. Experiments on multiple Diffusion\-LM backbones, including non\-autoregressive and semi\-autoregressive models, show that TAPS consistently improves semantic and lexical diversity across open\-ended and instruction\-following generation tasks, while preserving reasoning ability on verifiable reasoning benchmarks with negligible overhead\.

## Hypergraph Generation with Latent Diffusion

**Authors:** Valerio Di Pasquale; Alessia Antelmi; Mirko Polato; Carmine Spagnuolo

**ID:** 154651 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C27xHBHKGe>) | [PDF](<https://openreview.net/pdf?id=C27xHBHKGe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154651>)

Hypergraphs capture high\-order interactions that ordinary graphs cannot represent, yet generating realistic ones remains challenging because existing methods often rely on fixed structural assumptions or struggle to model coupled dependencies between nodes and hyperedges\. In this work, we propose \\textsc\{Janus\}, a latent diffusion framework that decomposes an observed hypergraph into sub\-hypergraphs, learns coupled node and hyperedge latent representations with a dual\-view $\\beta$\-VAE, and generates new structures through paired latent diffusion with cross\-view conditioning\. The method supports both unconstrained and node\-set\-constrained generation\. We also introduce an evaluation protocol covering micro, meso, and macro scales interactions, structural reconstruction, and high\-order similarity measures\. Across five real\-world datasets and nine baselines, \\textsc\{Janus\} achieves the most stable performance across structural scales, with strong gains in meso\-scale and high\-order fidelity; in the constrained setting, it consistently obtains the best reconstruction results\.

## Space Group Conditional Flow Matching

**Authors:** Omri Puny; Yaron Lipman; Benjamin K Miller

**ID:** 152663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RKIPnVN3E0>) | [PDF](<https://openreview.net/pdf?id=RKIPnVN3E0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152663>)

Inorganic crystals are periodic, highly symmetric arrangements of atoms in three\-dimensional space\. Their structures are constrained by the symmetry operations of a crystallographic \\emph\{space group\} and restricted to lie in specific affine subspaces known as \\emph\{Wyckoff positions\}\. The frequency an atom appears in the crystal and its rough positioning are determined by its Wyckoff positions\. Most generative models that predict atomic coordinates overlook these symmetry constraints, leading to unrealistically high populations of proposed crystals exhibiting limited symmetry\. We introduce Space Group Conditional Flow Matching \(SGFM\), a novel generative framework that samples significantly closer to the target population of highly symmetric, stable crystals\. We achieve this by conditioning the entire generation process on a given space group and set of Wyckoff positions; specifically, we define a conditionally symmetric noise  distribution and a group\-conditioned, equivariant, parametric vector field that restricts the motion of atoms to their initial Wyckoff position\. Our form of group\-conditioned equivariance is achieved using an efficient reformulation of \\emph\{group averaging\} tailored for symmetric crystals\. It reduces the computational overhead of symmetrization to a negligible level\. SGFM achieves state\-of\-the\-art performance in \\textit\{De Novo Generation\} on the MP\-$20$ benchmark\.

## PhaseDance: Capturing Rhythm and Expressivity in Dance Modeling

**Authors:** Meongeun Kim; Taehui Lee; Soomin Park; Sung\-Hee Lee

**ID:** 153947 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HN7bfQQd3M>) | [PDF](<https://openreview.net/pdf?id=HN7bfQQd3M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153947>)

Generating dance that reflects many aspects of music remains a fundamental challenge in dance motion synthesis\. Existing music\-conditioned approaches formulate the task as beat\-level matching, which captures local synchrony but misses the compositional structure of rhythm, where movement is organized into global beat units\. We argue that musical dance arises from the alignment of \\emph\{periodicity\} between motion and music, not from instantaneous beat coincidence\. To address this, we propose \\textbf\{PhaseDance\}, a phase\-conditioned framework that represents dance as a quasi\-musical signal on periodic phase manifolds, enabling unified dance generation across multiple tasks\. Alongside this, we ground text descriptions in fifteen music\-correlated metrics derived from Laban Movement Analysis to capture the qualitative richness of dance, articulating structured dimensions of motion — effort, shape, and dynamics — that coarse genre labels cannot convey\. Experiments show that PhaseDance produces choreography with stronger rhythmic coherence and richer expressive understanding than existing models\.

## ReFPO: Reflow Regularization for Flow Matching Policy Gradients

**Authors:** Ge Wang; Yibo Peng; Fan Feng; Shenhao Yan; Chengsi Yao; Jiahao Yang; Honghao Cai; Yiming Zhao; Xi Li; Jinke Ren; Shuguang Cui; Yatong Han; Zhen Li

**ID:** 152804 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QGCmtNLIKF>) | [PDF](<https://openreview.net/pdf?id=QGCmtNLIKF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152804>)

We present Reflow\-regularized Flow Matching Policy Gradients \(ReFPO\), a simple online RL method that adds explicit Reflow regularization to FPO for efficient flow\-based control\.  We uncover a key structural property: the gradient updates in Flow Matching Policy Gradients \(FPO\) can be interpreted as an implicit advantage\-weighted Reflow process, providing a new geometric perspective on flow\-based policy gradients\. Building on this insight, ReFPO introduces an explicit geometric regularizer that can be implemented with a single line of code change without incurring additional computational overhead or auxiliary distillation stages\. By synergizing advantage\-guided updates with path rectification, our method reduces CFM proxy\-ratio spikes, stabilizes PPO\-style training, and enables high\-fidelity one\-step inference that often matches or exceeds multi\-step performance\. We experimentally demonstrate that ReFPO improves average performance and discretization robustness across GridWorld, MuJoCo Playground, and high\-dimensional Humanoid Control tasks, providing a scalable and stable approach for generative policies in complex physical simulations\.

## Analyzing Learning\-Dynamics Across Loss and Prediction Choices for Diffusion Models

**Authors:** Dongwoo Kim

**ID:** 155205 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7VbCqahJMH>) | [PDF](<https://openreview.net/pdf?id=7VbCqahJMH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155205>)

Denoising generative models predict clean data \($x$\), noise \($\\epsilon$\), or velocity \($v$\), and are trained with a squared loss that can be computed in any of these three spaces\. Prior work treats these choices as interchangeable up to loss reweighting, but practitioners observe sharp qualitative differences that remain unexplained\. We systematically decouple the \\emph\{prediction space\}, what the network outputs, from the \\emph\{loss space\}, where supervision is applied, creating a $3\{\\times\}3$ design matrix\. We show that loss\-space changes only reweight how much each noise level contributes to training, while prediction\-space changes alter what the network is asked to learn: two fundamentally different mechanisms\. This decoupling exposes two regimes\. Without a representational bottleneck, the loss choice primarily controls denoising quality \(MSE\) while the prediction choice primarily controls sample quality \(FID\)\. The reason is that ODE sampling must convert the network's output back into a clean image, and this conversion amplifies errors differently across prediction types, turning sub\-one\-percent gaps in training error into 22\-fold gaps in FID that are invisible to standard training diagnostics\. Under a representational bottleneck, the prediction choice instead dominates both metrics: recovering noise or velocity requires reconstructing high\-dimensional information that the bottleneck has destroyed, while recovering the clean image remains feasible because real images lie on a low\-dimensional manifold\. We validate these findings on a U\-Net and the full 130M\-parameter JiT architecture across CIFAR\-10 and Imagenette, and give architecture\-dependent recommendations for both regimes\.

## Amortized Optimal Transport from Sliced Potentials

**Authors:** Minh\-Phuc Truong; Khai Nguyen

**ID:** 156137\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156137

[Paper](<https://openreview.net/forum?id=09aWoE8edl>) | [PDF](<https://openreview.net/pdf?id=09aWoE8edl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156137>)

We propose a novel amortized optimization method for predicting optimal transport \(OT\) plans across multiple pairs of measures by leveraging Kantorovich potentials derived from sliced OT\. We introduce two amortization strategies: regression\-based amortization \(RA\-OT\) and objective\-based amortization \(OA\-OT\)\. In RA\-OT, we formulate a functional regression model that treats Kantorovich potentials from the original OT problem as responses and those obtained from sliced OT as predictors, and estimate these models via least\-squares methods\. In OA\-OT, we estimate the parameters of the functional model by optimizing the Kantorovich dual objective\. In both approaches, the predicted OT plan is subsequently recovered from the estimated potentials\. As amortized OT methods, both RA\-OT and OA\-OT enable efficient solutions to repeated OT problems across different measure pairs by reusing information learned from prior instances to rapidly approximate new solutions\. Moreover, by exploiting the structure provided by sliced OT, the proposed models are more parsimonious, independent of specific structures of the measures, such as the number of atoms in the discrete case, while achieving high accuracy\. We demonstrate the effectiveness of our approaches on tasks including MNIST digit transport, color transfer, supply\-demand transportation on spherical data, and mini\-batch OT conditional flow matching\.

## Phase Kernel Lifts Capacity of Dense Associative Memory

**Authors:** Yifei Zhao; Ying Tang

**ID:** 150371\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150371

[Paper](<https://openreview.net/forum?id=iZSMEnlggu>) | [PDF](<https://openreview.net/pdf?id=iZSMEnlggu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150371>)

Dense associative memory underlies modern attention mechanisms; however, conventional Modern Hopfield Network \(MHN\) with linear kernels yields overlapping attractor basins and spurious states under high memory load, limiting their theoretically exponential storage capacity in practice\. We construct a class of nonlinear phase kernels that reshape the energy dynamics into deep, well\-separated basins, and prove that any kernel in this class preserves exponential storage capacity while guaranteeing convergence to fixed points\. As a representative instantiation, we introduce the Sigmoidal Phase Hopfield Network \(S\-Hop\), which guarantees monotone energy descent and mitigates the practical loss of memory capacity\. Experiments on MNIST and CIFAR\-10 show that S\-Hop achieves up to a $50\\times$ increase in critical capacity over baseline models\. We also provide a systematic capacity measurement of Hopfield networks on TinyImageNet, where S\-Hop exhibits improved retrieval robustness and noise resilience\. The phase\-kernel design provides a principled route toward more robust dense associative memory\.

## On the Memorization of Consistency Distillation for Diffusion Models

**Authors:** Bingqing Jiang; Difan Zou

**ID:** 152743\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152743

[Paper](<https://openreview.net/forum?id=QhEYPYxSzC>) | [PDF](<https://openreview.net/pdf?id=QhEYPYxSzC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152743>)

Diffusion models are central to modern generative modeling, and understanding how they balance memorization and generalization is critical for reliable deployment\. Recent work has shown that memorization in diffusion models is shaped by training dynamics, with generalization and memorization emerging at different stages of training\. However, deployed diffusion models are often further distilled, introducing an additional training phase whose impact on memorization remains unclear\. In this work, we analyze how distillation reshapes memorization behavior in diffusion models, taking consistency distillation as a representative framework\. Empirically, we show that when applied to a teacher model that has memorized data, consistency distillation significantly reduces transferred memorization in the student while preserving, and sometimes improving, sample quality\. To explain this behavior, we provide a theoretical analysis using a random feature neural network model \[Bonnaire et al\., 2025\], showing that consistency distillation suppresses unstable feature directions associated with memorization while preserving stable, generalizable modes\. Our findings suggest that distillation can serve not only as an acceleration tool, but also as a mechanism for improving the memorization\-generalization trade\-off\.

## GraDE: A Graph Diffusion Estimator for Frequent Subgraph Discovery in Neural Architectures

**Authors:** Yikang Yang; Zhengxin Yang; Minghao Luo; Luzhou Peng; Hongxiao Li; Wanling Gao; Lei Wang; Jianfeng Zhan

**ID:** 148527\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148527

[Paper](<https://openreview.net/forum?id=xDozosGMuJ>) | [PDF](<https://openreview.net/pdf?id=xDozosGMuJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148527>)

Finding frequently occurring subgraph patterns or network motifs in neural architectures is crucial for optimizing efficiency, accelerating design, and uncovering structural insights\. However, as the subgraph size increases, enumeration\-based methods are perfectly accurate but computationally prohibitive, while sampling\-based methods are computationally tractable but suffer from a severe decline in discovery capability\. To address these challenges, this paper proposes GraDE, a diffusion\-guided search framework that ensures both computational feasibility and discovery capability\. The key innovation is the $\\underline\{\\textnormal\{Gra\}\}\\textnormal\{ph\}$  $\\underline\{\\textnormal\{D\}\}\\textnormal\{iffusion\}$ $\\underline\{\\textnormal\{E\}\}\\textnormal\{stimator\}$ \(GraDE\), which is the first to introduce graph diffusion models to identify frequent subgraphs by scoring their typicality within the learned distribution\. Comprehensive experiments demonstrate that the estimator achieves superior ranking accuracy, with up to 114\\% improvement compared to sampling\-based baselines\. Benefiting from this, the proposed framework successfully discovers large\-scale frequent patterns, achieving up to 30$\\times$ higher median frequency than sampling\-based methods\.

## Epigenomics\-Guided Flow Matching for 3D Genome Super\-Resolution

**Authors:** Yubiao Zhao; Shicheng Song; Yusen Ye; Huan Liu; Juan Liu; Lihua Zhang

**ID:** 155163\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155163

[Paper](<https://openreview.net/forum?id=7oTMtNxW5H>) | [PDF](<https://openreview.net/pdf?id=7oTMtNxW5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155163>)

Mapping fine\-scale 3D chromatin landscapes is critical for understanding gene regulation, yet the resolution of Hi\-C data remains fundamentally constrained by both physical bottlenecks and sequencing costs\. Although deep learning has shown promise in super\-resolving Hi\-C data, existing methods suffer from absolute coordinate loss during localized patching and a lack of structural and epigenomic priors in unconditioned generation\. We propose a novel epigenomics\-guided flow matching framework EpiFlow for 3D genome super\-resolution\. EpiFlow introduces two key innovations: \(1\) an EpiCond module that deterministically maps 1D epigenomic features to 2D spatial constraints via orthogonal expansion with built\-in positional grounding, avoiding quadratic attention complexity; and \(2\) a Toeplitz\-regularized classifier\-free guidance mechanism that enforces distance\-decay priors using a learnable symmetric prototype matrix\. Extensive evaluation shows that our method achieves state\-of\-the\-art cross\-cell\-type loop detection, improving recall by $2\.8\\times$ over raw Hi\-C on unseen H1\-hESC \(Loop $F\_1$ of $0\.325$ vs\. $0\.199$\) and outperforming all baselines on same\-cell HFFc6 \($F\_1=0\.520$\)\. Aggregate Peak Analysis \(APA\) confirms biological validity, and strong generalization to a held\-out cell line demonstrates that the model learns transferable principles of 3D genome folding rather than cell\-specific biases\.

## Flowette: Flow Matching with Graphette Priors for Graph Generation

**Authors:** Asiri Wijesinghe; Sevvandi Kandanaarachchi; Daniel M Steinberg; Cheng Soon Ong

**ID:** 151088\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151088

[Paper](<https://openreview.net/forum?id=d3pAaxyrAY>) | [PDF](<https://openreview.net/pdf?id=d3pAaxyrAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151088>)

We study generative modeling of graphs with recurring subgraph motifs\. We propose Flowette, a continuous flow matching framework that employs a graph neural network\-based transformer to learn a velocity field over graph representations with node and edge attributes\. Our model promotes topology\-aware alignment through optimal transport\-based coupling and encourages global structural coherence through regularisation\. To incorporate domain\-driven structural priors, we introduce graphettes, a new probabilistic family of graph structure models that generalize graphons via controlled structural edits for motifs such as rings, stars, and trees\. We theoretically analyze the coupling, invariance, and structural properties of the framework, evaluate it on synthetic and molecular benchmarks, and isolate the contributions of the structural prior, the optimal\-transport coupling, and the regularisation terms through controlled ablations\. Flowette achieves competitive performance overall, attaining state\-of\-the\-art results on several metrics across multiple benchmarks, highlighting the effectiveness of combining structural priors with flow\-based training for modeling complex graph distributions\.

## NAGO: Noise\-Aware Generative Operator via Flow Matching

**Authors:** Guanyu Chen; Shengze Xu; Pengwei Liu; Xingyu Ren; Pengkai Wang; Tieyong Zeng; Antonios Armaou; Dong Ni

**ID:** 149607\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149607

[Paper](<https://openreview.net/forum?id=opzL6gPOhn>) | [PDF](<https://openreview.net/pdf?id=opzL6gPOhn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149607>)

We introduce NAGO, a noise\-aware generative operator for efficient sampling from invariant measures of stochastic partial differential equations \(SPDEs\) in function space\. Our central idea is to treat the noise measure as a design variable rather than a fixed default\. While existing generative approaches mainly shape the sampling process through interpolation schedules or guidance heuristics, NAGO directly controls the marginal velocity field in functional flow matching by choosing a noise measure with suitable regularity\. We establish conditions under which the resulting noise\-induced flows are well defined in infinite\-dimensional settings, and show how noise regularity affects the spectral geometry and stiffness of the marginal velocity field\. This analysis leads to a principled design rule: match the regularity of the noise measure to that of the target invariant measure\. The resulting method enables stable training and fast sampling without relying on downstream correction mechanisms\. Experiments on three representative SPDEs with multiscale invariant measures show that NAGO consistently improves the accuracy\-\-efficiency trade\-off over standard flow matching baselines, while achieving up to two orders of magnitude speedup compared with classical numerical solvers\.

## Manifold\-Aligned Adversarial Perturbation for Anti\-Customization under Diffusion\-based Purification

**Authors:** Ruotian Liu; Zhen Chen; Zhiguo Yang; Xiangyu Yin; Peipei Xu; Wenjie Ruan

**ID:** 155861\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155861

[Paper](<https://openreview.net/forum?id=2MUQVPJZ7T>) | [PDF](<https://openreview.net/pdf?id=2MUQVPJZ7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155861>)

Anti\-customization techniques aim to protect visual content from unauthorized diffusion model personalization by adding imperceptible perturbations to training images\. However, such protection can be significantly weakened by diffusion\-based purification, which may remove adversarial perturbations before customization\. We study representative anti\-customization methods under diffusion purification and observe that existing methods exhibit similar off\-manifold perturbation structures that are largely suppressed by purification\. We then provide a principled geometric analysis that characterizes purification as a local contraction toward the data manifold, primarily suppressing perturbation components along normal directions\. Motivated by this insight, we propose Manifold\-Aligned Customization protection \*\*MAC\*\*, a practical purification\-aware framework that optimizes downstream anti\-customization objectives through a differentiable purifier and uses a structured perturbation parameterization to bias updates toward purification\-retentive, manifold\-aligned directions\. Across experiments on CelebA\-HQ, VGGFace2\-HQ, and WikiArt under diffusion\-based purification, MAC substantially improves protection effectiveness across most prompts and domains\. Finally, frequency analysis and ImageNet and MS\-COCO retention studies show that spectral signatures cannot predict purification outcomes, providing additional evidence for the proposed manifold\-alignment perspective beyond a single data domain\.

## Noisy2Latent: Nonparametric Deconvolution and Denoising via Maximum Mean Discrepancy

**Authors:** Ritwik Vashistha; Abhra Sarkar; Arya Farahi

**ID:** 148353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yWIThDZBX3>) | [PDF](<https://openreview.net/pdf?id=yWIThDZBX3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148353>)

Latent signals are often obscured by measurement noise, yet encode the underlying laws and dynamics of complex systems; learning both the signals and their distributions remains a central challenge in scientific inference\. The noise is often non\-negligible, and the likelihoods for expressive generative models are often intractable\. We utilize a convolutional maximum mean discrepancy \(convMMD\) loss and propose a likelihood\-free framework for nonparametric density deconvolution and empirical Bayes denoising under additive measurement error\. Our method learns a latent generative model by matching the observed data distribution to the noise\-convolved model distribution\. This yields a differentiable, simulation\-based objective for multivariate homoscedastic or heteroscedastic noise, compatible with expressive sieve classes such as Gaussian mixtures and normalizing flows\. The learned density then serves as an empirical prior for posterior denoising of individual latent values\. Theoretically, we extend convMMD from parametric to nonparametric estimation, proving finite\-sample bounds for empirical sieve minimizers and $L\_2$ convergence rates under Sobolev smoothness\. These rates recover the classical inverse\-problem dependence: polynomial for ordinary\-smooth and logarithmic for super\-smooth noises\. Our method provides a practical, theoretically grounded approach to deconvolution and denoising under generative latent distribution models\.

## Learning to Sample From Diffusion Models via Inverse Reinforcement Learning

**Authors:** Constant Bourdrez; Alexandre Verine; Olivier Cappé

**ID:** 154984\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154984

[Paper](<https://openreview.net/forum?id=9RGG0tZyPh>) | [PDF](<https://openreview.net/pdf?id=9RGG0tZyPh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154984>)

Diffusion models generate samples through an iterative denoising process guided by a pretrained neural network\. Once the denoiser is fixed, the sampling algorithm itself \(noise schedules, guidance scales, stochasticity profiles\) still requires careful tuning, a process typically carried out through costly empirical grid search\. In this work, we introduce an inverse reinforcement learning framework for learning sampling strategies without retraining the denoiser\. We formulate the diffusion sampling procedure as a discrete\-time finite\-horizon Markov Decision Process, where actions correspond to optional modifications of the sampling dynamics\. To optimize action scheduling, we avoid defining an explicit reward function and instead directly match the target behavior expected from the sampler using policy gradient techniques\.   We provide experimental evidence that this approach matches fine\-tuned samplers and comes at a modest cost compared to grid search: on ImageNet\-64, a single training run replaces exhaustive search at up to $9\\times$ lower cost, with only 16\\% overhead at inference\.

## Why Deterministic PRM Guidance Underperforms in Discrete Diffusion Reasoning

**Authors:** Yan Zhan; Shaobo Liu; Zhijun Gao

**ID:** 148438\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148438

[Paper](<https://openreview.net/forum?id=xogwvIhOYH>) | [PDF](<https://openreview.net/pdf?id=xogwvIhOYH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148438>)

We present a diagnostic study of reward guided reasoning in discrete diffusion language models \(dLLMs\)\. On in\-distribution GSM8K with Dream\-v0\-Instruct\-7B, deterministic segmental top\-$1$ guidance using outcome\-supervised intermediate\-state reward models underperforms a simpler matched\-compute baseline: independent best\-of\-$N$ sampling plus a GSM8K\-trained final\-answer outcome reward model \(ORM\) reranker\. The setup appears well suited for PRM guidance because dLLM intermediate states partially expose solution evidence; however, these states are unordered masked subsets rather than autoregressive prefixes, and prior reward\-guided decoding results rarely report matched forward\-pass compute against simple verifier reranking\. We study \\emph\{outcome\-supervised\} PRMs trained with binary final\-correctness labels on dLLM intermediate states\. Under a protocol that charges denoising, PRM scoring, and ORM scoring in the same forward\-pass unit, deterministic PRM\-guided search trails ORM Rerank by $9\.95$ and $12\.69$ percentage points \(pp\) in seed\-mean aggregate at matched candidate budgets $K\{=\}8$ and $K\{=\}32$; paired bootstrap CIs on seed $42$ exclude zero\. Two mechanisms account for much of the headline gap: bidirectional PRM ROC\-AUC \(area under the receiver operating characteristic curve\) decays from $0\.77$ to $0\.54$ with mask ratio, and deterministic top\-$1$ pruning drops the guided pool's perfect\-selector ceiling by $\\sim$$14$\\,pp\. A third diagnostic shows that mean pooling also weakens causal PRM variants\. Matched\-compute ORM Rerank thus emerges as the strong baseline when an in\-distribution final\-answer verifier is available; closing the gap requires PRM guidance that preserves candidate diversity and queries the scorer at denoising stages where it remains discriminative, neither of which the deterministic top\-$1$ recipe satisfies\.

## A Generative Model of Contextual Integrity: Appropriate vs\. Inappropriate Information Sharing

**Authors:** Omer Ebead; Juan Formanek; Joel Leibo

**ID:** 148966\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148966

[Paper](<https://openreview.net/forum?id=tnB9Xtbfa6>) | [PDF](<https://openreview.net/pdf?id=tnB9Xtbfa6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148966>)

_Abstract unavailable from the accessible public sources._

## LYNX: Learning Dynamic Exits for Confidence\-Controlled Reasoning

**Authors:** Ömer Faruk Akgül; Yusuf H Kalayci; Rajgopal Kannan; Willie Neiswanger; Viktor Prasanna

**ID:** 149284\-\-3 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149284

[Paper](<https://openreview.net/forum?id=rSKYIHN4OX>) | [PDF](<https://openreview.net/pdf?id=rSKYIHN4OX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149284>)

_Abstract unavailable from the accessible public sources._

## Structured Coupling for Flow Matching

**Authors:** Francisco Sumba Toral; Carles Balsells Rodas; Yingzhen Li

**ID:** 153603\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153603

[Paper](<https://openreview.net/forum?id=KA6cQELF6H>) | [PDF](<https://openreview.net/pdf?id=KA6cQELF6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153603>)

Standard flow matching scales well but typically relies on an unstructured source distribution, limiting its ability to learn interpretable latent structure\. Latent\-variable models, by contrast, capture structure but often sacrifice generative quality\. We bridge this gap by proposing Structured Coupling for Flow Matching \(SCFM\), a cooperative framework that augments flow matching with structured latent representation learning\. By introducing structured latent variables and exogenous noise into the source, SCFM jointly learns a structured prior \(via latent variable modeling\) and a continuous transport map \(via flow matching\)\. It uses a shared time\-dependent recognition network for both latent variable model variational inference and intermediate\-time flow velocity estimation\. This yields a structurally informed yet unconditional, simulation\-free flow model, where the latent variable model can also assist flow sampling\. Empirically, SCFM facilitates unsupervised latent representation learning for clustering, disentanglement and downstream tasks, while remaining competitive with flow matching in sample quality, showing that meaningful structure can be learned without sacrificing generative fidelity\.

## MiCo: Microstructure\-Consistent Flow Matching for Diffusion MRI Angular Super\-Resolution

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 148957\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148957

[Paper](<https://openreview.net/forum?id=tty64RLmO2>) | [PDF](<https://openreview.net/pdf?id=tty64RLmO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148957>)

Diffusion\-weighted MRI \(dMRI\) requires densely sampling $q$\-space across many directions and shells, leading to long scan times that limit clinical use\. Angular super\-resolution \(ASR\) recovers a dense signal from a sparse acquisition, enabling substantially shorter scans\. We propose a physics\-guided flow matching framework for ASR built on a basic fact about dMRI: under the cumulant expansion, the diffusion signal naturally splits into a known linear function of the $q$\-vectors plus a residual carrying higher\-order angular detail\. We exploit this twice\. First, we initialize the flow from a closed\-form dense DTI estimate, recasting ASR as residual flow matching from a physically meaningful starting point rather than uninformative noise\. Second, we impose a microstructure\-consistency loss, rooted in the physical principle that any two diffusion\-weighted signals from the same voxel must be explained by a single underlying set of microstructural parameters\. Together, these designs anchor predictions wherever the acquisition is informative while leaving the learned prior to model crossing\-fiber and higher\-order angular detail\. On the Human Connectome Project \(HCP\-YA\) and UK Biobank, our method matches or surpasses analytical baselines and recent deep learning methods on signal reconstruction, kurtosis scalar maps, and fiber\-orientation reconstruction under aggressive subsampling\.

## Path\-Guided Flow Matching for Dataset Distillation

**Authors:** xuhui li; Zhengquan luo; Zixu Wu; Xiwei Liu; Yongqiang Yu; Zixiang Hong; Zhiqiang Xu

**ID:** 149871\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149871

[Paper](<https://openreview.net/forum?id=mZhtTOUDIu>) | [PDF](<https://openreview.net/pdf?id=mZhtTOUDIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149871>)

Dataset distillation compresses large datasets into compact synthetic sets with comparable performance in training models\. Despite recent progress on diffusion\-based distillation, such methods typically rely on heuristic guidance or prototype assignment over long denoising chains, which increases sampling cost and makes prototype\-consistent control harder under strong guidance or low IPC\. We propose \\emph\{Path\-Guided Flow Matching \(PGFM\)\}, the first flow matching\-based framework for generative distillation, which enables deterministic synthesis by solving an ODE in a few steps\. In particular, we introduce a retrieval\-based prototype inversion stage that identifies prototype\-consistent initial noises for class prototypes on the frozen flow manifold, and further develop an anchor\-guided residual correction strategy for bounded stage\-wise control\. This design follows a controlled\-transport principle: retrieval reduces initialization mismatch, while anchor guidance provides a bounded residual correction along the flow trajectory\. Extensive experiments across high\-resolution benchmarks demonstrate that PGFM matches or surpasses prior diffusion\-based distillation approaches with fewer sampling steps while delivering competitive performance with improved efficiency\.

## Denoising Time Matters: Diverse Generation in Diffusion Language Models

**Authors:** jingxuan wu; Zhenglin Wan; Yuzhe YANG; Yiqiao Huang; Chubin Zhang; Xingrui Yu; Ivor Tsang; Yang You

**ID:** 154837\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154837

[Paper](<https://openreview.net/forum?id=AZvYD2Qmwj>) | [PDF](<https://openreview.net/pdf?id=AZvYD2Qmwj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154837>)

Diffusion language models \(Diffusion\-LMs\) generate text through iterative denoising, exposing a temporal structure that is largely absent from autoregressive decoding\. In this paper, we show that this temporal structure provides a useful control axis for generation diversity: early denoising steps mainly determine high\-level semantic trajectories, while later steps refine lexical realization\. Motivated by this observation, we propose Time\-Annealed Perturbation Sampling \(TAPS\), a training\-free inference strategy that samples nearby conditioning trajectories through time\-aware, manifold\-constrained perturbations\. TAPS encourages semantic branching during early denoising and anneals the perturbation away before refinement, improving exploration while preserving prompt alignment, generation quality, and reasoning ability\. Experiments on multiple Diffusion\-LM backbones, including non\-autoregressive and semi\-autoregressive models, show that TAPS consistently improves semantic and lexical diversity across open\-ended and instruction\-following generation tasks, while preserving reasoning ability on verifiable reasoning benchmarks with negligible overhead\.

## Hypergraph Generation with Latent Diffusion

**Authors:** Valerio Di Pasquale; Alessia Antelmi; Mirko Polato; Carmine Spagnuolo

**ID:** 154651\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154651

[Paper](<https://openreview.net/forum?id=C27xHBHKGe>) | [PDF](<https://openreview.net/pdf?id=C27xHBHKGe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154651>)

Hypergraphs capture high\-order interactions that ordinary graphs cannot represent, yet generating realistic ones remains challenging because existing methods often rely on fixed structural assumptions or struggle to model coupled dependencies between nodes and hyperedges\. In this work, we propose \\textsc\{Janus\}, a latent diffusion framework that decomposes an observed hypergraph into sub\-hypergraphs, learns coupled node and hyperedge latent representations with a dual\-view $\\beta$\-VAE, and generates new structures through paired latent diffusion with cross\-view conditioning\. The method supports both unconstrained and node\-set\-constrained generation\. We also introduce an evaluation protocol covering micro, meso, and macro scales interactions, structural reconstruction, and high\-order similarity measures\. Across five real\-world datasets and nine baselines, \\textsc\{Janus\} achieves the most stable performance across structural scales, with strong gains in meso\-scale and high\-order fidelity; in the constrained setting, it consistently obtains the best reconstruction results\.

## Space Group Conditional Flow Matching

**Authors:** Omri Puny; Yaron Lipman; Benjamin K Miller

**ID:** 152663\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152663

[Paper](<https://openreview.net/forum?id=RKIPnVN3E0>) | [PDF](<https://openreview.net/pdf?id=RKIPnVN3E0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152663>)

Inorganic crystals are periodic, highly symmetric arrangements of atoms in three\-dimensional space\. Their structures are constrained by the symmetry operations of a crystallographic \\emph\{space group\} and restricted to lie in specific affine subspaces known as \\emph\{Wyckoff positions\}\. The frequency an atom appears in the crystal and its rough positioning are determined by its Wyckoff positions\. Most generative models that predict atomic coordinates overlook these symmetry constraints, leading to unrealistically high populations of proposed crystals exhibiting limited symmetry\. We introduce Space Group Conditional Flow Matching \(SGFM\), a novel generative framework that samples significantly closer to the target population of highly symmetric, stable crystals\. We achieve this by conditioning the entire generation process on a given space group and set of Wyckoff positions; specifically, we define a conditionally symmetric noise  distribution and a group\-conditioned, equivariant, parametric vector field that restricts the motion of atoms to their initial Wyckoff position\. Our form of group\-conditioned equivariance is achieved using an efficient reformulation of \\emph\{group averaging\} tailored for symmetric crystals\. It reduces the computational overhead of symmetrization to a negligible level\. SGFM achieves state\-of\-the\-art performance in \\textit\{De Novo Generation\} on the MP\-$20$ benchmark\.

## PhaseDance: Capturing Rhythm and Expressivity in Dance Modeling

**Authors:** Meongeun Kim; Taehui Lee; Soomin Park; Sung\-Hee Lee

**ID:** 153947\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153947

[Paper](<https://openreview.net/forum?id=HN7bfQQd3M>) | [PDF](<https://openreview.net/pdf?id=HN7bfQQd3M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153947>)

Generating dance that reflects many aspects of music remains a fundamental challenge in dance motion synthesis\. Existing music\-conditioned approaches formulate the task as beat\-level matching, which captures local synchrony but misses the compositional structure of rhythm, where movement is organized into global beat units\. We argue that musical dance arises from the alignment of \\emph\{periodicity\} between motion and music, not from instantaneous beat coincidence\. To address this, we propose \\textbf\{PhaseDance\}, a phase\-conditioned framework that represents dance as a quasi\-musical signal on periodic phase manifolds, enabling unified dance generation across multiple tasks\. Alongside this, we ground text descriptions in fifteen music\-correlated metrics derived from Laban Movement Analysis to capture the qualitative richness of dance, articulating structured dimensions of motion — effort, shape, and dynamics — that coarse genre labels cannot convey\. Experiments show that PhaseDance produces choreography with stronger rhythmic coherence and richer expressive understanding than existing models\.

## HERO: Improving the Reliability and Sensitivity of Generative Model Evaluation Using Historical Data

**Authors:** Zhenyu Zhao; Xinrui Ruan; Waverly Wei; Yueshan Zhang; Zeyu Zheng; Sui Huang; Jingshen Wang

**ID:** 139720\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139720

[Paper](<https://openreview.net/forum?id=8YiaoJ83Yi>) | [PDF](<https://openreview.net/pdf?id=8YiaoJ83Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139720>)

_Abstract unavailable from the accessible public sources._

## Bottleneck Benchmark: Sequence Compression Under Controlled Difficulty and Fixed Latent Size

**Authors:** Emilio Munoz; Felix Mohr

**ID:** 139737 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7MkLtoyPdq>) | [PDF](<https://openreview.net/pdf?id=7MkLtoyPdq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139737>)

_Abstract unavailable from the accessible public sources._

## Flow Matching from Viewpoint of Proximal Operators

**Authors:** Kenji Fukumizu; Wei Huang; Han Bao; Shuntuo Xu; Nisha Chandramoorthy

**ID:** 149878 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mYUbUCFFPk>) | [PDF](<https://openreview.net/pdf?id=mYUbUCFFPk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149878>)

_Abstract unavailable from the accessible public sources._

## Mixed\-Curvature Geometric Latent Diffusion Model for Graph Generation

**Authors:** Minxue Qi; Xian Yang; Liang Bai

**ID:** 149462 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pvgnsDCNSi>) | [PDF](<https://openreview.net/pdf?id=pvgnsDCNSi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149462>)

_Abstract unavailable from the accessible public sources._

## Balancing Frequencies and Pixels in Flow Matching

**Authors:** Lucas Degeorge; Paul Couairon; Arijit Ghosh; Alexei Efros; David Picard; Vicky Kalogeiton

**ID:** 151310 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bR1U2URUlk>) | [PDF](<https://openreview.net/pdf?id=bR1U2URUlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151310>)

_Abstract unavailable from the accessible public sources._

## CADMA: Capacity\-Aware Recall Decomposition for Generative Model Assessment

**Authors:** Debin Meng; Zheng Gao; Ziquan Liu; Yanran Li; Ioannis Patras; Georgios Tzimiropoulos

**ID:** 139801 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3iWHOoWmt3>) | [PDF](<https://openreview.net/pdf?id=3iWHOoWmt3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139801>)

_Abstract unavailable from the accessible public sources._

## Efficient Hybrid Distillation: Synergizing Score and Adversarial Objectives for One\-Step Diffusion

**Authors:** Fei Peng; Junqiang Wu; Haoxian Tan; Jun Zhou; Jie Hu; Xiaoming Wei; Jie Guo; Xiu Li

**ID:** 153904 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hq9vqR70JT>) | [PDF](<https://openreview.net/pdf?id=Hq9vqR70JT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153904>)

_Abstract unavailable from the accessible public sources._

## StyleStream 2\.0: Fast and Controllable Streaming Voice Style Conversion

**Authors:** Louis Liu; Nicholas Lee; Gopala Anumanchipalli

**ID:** 153833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=INH2UOxLz1>) | [PDF](<https://openreview.net/pdf?id=INH2UOxLz1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153833>)

Voice style conversion \(VSC\) aims to transform a source utterance to match the timbre, accent, and emotion of a target voice while preserving linguistic content\.   StyleStream 1\.0 introduced the first streamable zero\-shot VSC system with state\-of\-the\-art conversion quality, but remained limited in two ways: approximately 1s end\-to\-end latency on consumer hardware, and the lack of a text\-based interface for designing or editing target voices\.   We present StyleStream 2\.0, a fast and controllable streaming VSC framework that addresses these limitations\.   To reduce latency, we train a few\-step pixel MeanFlow model and further fine\-tune it with autoregressive feedback inspired by Self Forcing, improving robustness under streaming inference\.   This reduces end\-to\-end latency to 520\~ms on a consumer GPU, a 2x speedup over StyleStream 1\.0, while maintaining conversion quality\.   To enable controllable style manipulation, we remove the mel\-spectrogram context and instead route target style information through a compact style embedding\.   In this embedding space, we train a unified text\-conditioned flow matching model that supports both text\-based voice design, which maps natural language prompts to voice styles, and instruction\-based voice editing, which modifies a specific attribute of a source utterance while preserving the rest\.   Experiments show that StyleStream 2\.0 achieves the strongest target style fidelity on VSC, voice design, and voice editing, while remaining competitive on intelligibility and non\-edited attribute preservation\.

