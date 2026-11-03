# Deep Learning / Generative Models and Autoencoders

深度学习 / 生成模型与自编码器

448 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Path\-Guided Flow Matching for Dataset Distillation

**Authors:** xuhui li; Zhengquan luo; Zixu Wu; Xiwei Liu; Yongqiang Yu; Zixiang Hong; Zhiqiang Xu

**ID:** 149871 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mZhtTOUDIu>) | [PDF](<https://openreview.net/pdf?id=mZhtTOUDIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149871>)

Dataset distillation compresses large datasets into compact synthetic sets with comparable performance in training models\. Despite recent progress on diffusion\-based distillation, such methods typically rely on heuristic guidance or prototype assignment over long denoising chains, which increases sampling cost and makes prototype\-consistent control harder under strong guidance or low IPC\. We propose \\emph\{Path\-Guided Flow Matching \(PGFM\)\}, the first flow matching\-based framework for generative distillation, which enables deterministic synthesis by solving an ODE in a few steps\. In particular, we introduce a retrieval\-based prototype inversion stage that identifies prototype\-consistent initial noises for class prototypes on the frozen flow manifold, and further develop an anchor\-guided residual correction strategy for bounded stage\-wise control\. This design follows a controlled\-transport principle: retrieval reduces initialization mismatch, while anchor guidance provides a bounded residual correction along the flow trajectory\. Extensive experiments across high\-resolution benchmarks demonstrate that PGFM matches or surpasses prior diffusion\-based distillation approaches with fewer sampling steps while delivering competitive performance with improved efficiency\.

## Robust Concept Unlearning in Diffusion Models via Directional Stability Regularization

**Authors:** Bo\-Han Lai; Hsuan\-Tien \(Tien\) Lin; Chia\-Mu Yu; Han Zhao; Shang\-Tse Chen

**ID:** 148206 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zZK5DA5niu>) | [PDF](<https://openreview.net/pdf?id=zZK5DA5niu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148206>)

Post\-hoc concept unlearning is a practical approach to remove undesired content from text\-to\-image diffusion models\. However, existing methods leave unlearned models fragile: small perturbations to prompts, text embeddings, or sampling\-time latent states can recover supposedly erased content, even when standard endpoint metrics suggest successful erasure under nominal prompts\. We study this fragility through the stability of the denoising trajectory of diffusion models\. Our key observation is that prompt\-, embedding\-, and sampling\-based attacks share a similar mechanism of perturbing the sampling dynamics, and erased concepts can reappear when the unlearned model amplifies these concept\-relevant perturbations\. We formalize this view with a finite\-time stability analysis and derive a tractable directional sharpness measure along a concept\-relevant direction\. Motivated by this analysis, we propose Directional Stability Regularization \(DSR\), a plug\-in regularizer that discourages expansion in erased\-concept directions without directly penalizing unrelated directions\. DSR is compatible with classical score\-based unlearning objectives, requires no adversarial training or attack\-specific inner loop, adds no inference\-time overhead, and can be estimated efficiently with Jacobian\-vector products\. Across the evaluated erasure settings, DSR reduces recovery under prompt\-, embedding\-, and sampling\-based attacks while largely preserving prompt alignment and image quality metrics\.

## When does the noise schedule matter? A spectral classification of diffusion training objectives

**Authors:** Ali Raza

**ID:** 148205 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zZmxe87b66>) | [PDF](<https://openreview.net/pdf?id=zZmxe87b66>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148205>)

Diffusion models require a noise schedule, yet for a given objective it is not generally clear before training whether schedule choice should affect trained\-model quality\. This leaves a diagnostic question open: given a training objective and a dataset, does the objective admit a pre\-training spectral criterion for schedule choice? We show that the answer is determined by the structure of the per\-step loss\. Product\-form training objectives admit a Schedule Mismatch Index, a scalar measuring how unevenly a schedule distributes the training signal across timesteps, computable from data\-covariance eigenvalues alone, that strictly ranks schedules by proxy\-estimator variance; point\-evaluation training objectives do not admit the same construction \(Theorem 1\)\. This matches the empirical contrast between VLB training, where cosine beats linear by 1\.4% on CIFAR\-10, and $\\epsilon$\-prediction, where the top three schedules fall within 0\.5%\. The same framework yields a training\-aligned timestep sampler $q^\\star\_\{\\mathrm\{train\}\}$ that improves CIFAR\-10 by 2\.61% under VLB, with concordant gains on Fisher–Rao\-weighted evaluator and FID\. At 100k iterations across CIFAR\-10 and ImageNet\-32 with U\-Net and DiT\-S backbones, the improvement persists in all four dataset\-architecture settings \(1\.99%–2\.14%\), while the closed\-form proxy remains indistinguishable from uniform\. These results show that schedule and timestep\-sampling choices must be analyzed relative to the trained objective, not the data spectrum alone\.

## Empirical Bayes Flow Matching for Continuous Cryo\-EM Heterogeneity

**Authors:** Daniel Aibinder; Azmi Haider; Dan Rosenbaum

**ID:** 151539 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zuq1PmOuVS>) | [PDF](<https://openreview.net/pdf?id=Zuq1PmOuVS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151539>)

We address the problem of learning generative priors over high\-dimensional latent variables from indirect, noisy observations, with a focus on continuous heterogeneity in cryo\-electron microscopy \(cryo\-EM\)\. In this setting, 3D atomic structures $x \\in \\mathbb\{R\}^\{3N\_a\}$ are never directly observed and must be inferred from 2D projection images $y$ generated by a complex, non\-linear forward operator\. We propose Empirical Bayes Flow Matching \(EB\-FM\), a method that learns a flow matching prior $p\_\\theta\(x\)$ directly from observations by embedding it within a Monte Carlo stochastic approximation Expectation\-Maximization framework\. EB\-FM alternates between an E\-step that performs approximate posterior sampling from $p\_\\theta\(x \\mid y\)$ via guided flow\-based generation while maintaining persistent latent estimates through stochastic approximation, and an M\-step that updates the flow model using these stabilized latent variables as training targets\. This approach eliminates the need for pretraining on clean data and naturally accommodates non\-linear forward models\. We validate our method on controlled inverse problems using two\-moons and MNIST data, and demonstrate its effectiveness on simulated cryo\-EM data with known poses, showing that EB\-FM can recover continuous distributions of protein conformations directly in atomic\-coordinate space\.

## FLASH: Efficient Visuomotor Policy via Sparse Sampling

**Authors:** Jiaqi Bai; Jindou Jia; Yuxuan Hu; Gen Li; Xiangyu Chen; Tuo An; Kuangji Zuo; Jianfei Yang

**ID:** 153691 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JViY8zwERh>) | [PDF](<https://openreview.net/pdf?id=JViY8zwERh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153691>)

Generative models such as diffusion and flow matching have become dominant paradigms for visuomotor policy learning, yet their reliance on iterative denoising incurs high inference latency incompatible with real\-time robotic control\. We present a Fast Legendre\-polynomial Action policy via Sparse History\-anchored flow \(FLASH\), which replaces discrete action\-chunk generation with continuous Legendre polynomial trajectory representation\. Specifically, by fitting expert demonstrations under sparse temporal sampling, FLASH enables a single inference to cover a significantly extended action horizon\. To further accelerate generation, FLASH initiates the flow matching process from history polynomial coefficients rather than uninformative Gaussian noise, shortening the transport distance and enabling accurate single\-step inference\. Moreover, analytic polynomial differentiation directly provides desired velocity feed\-forward signals to the torque controller without numerical approximation\. Extensive experiments on five simulated and two real\-world manipulation tasks demonstrate that FLASH achieves state\-of\-the\-art success rates \($\\ge 92\\%$ across all tasks\), a per\-episode inference time of $31\.40\\,ms$ \(up to $175\\times$ faster than diffusion policies and $18\\times$ faster than prior flow matching policies\), up to $4\\times$ faster training convergence than ACT, and $5\\times$ to $7\\times$ reduction in controller tracking error compared to discrete\-action baselines\.

## Where to Look Is Not How to Fix: Pre\-Denoising Diagnostics and Modality\-Dependent Control in Diffusion Composition

**Authors:** Fangzheng Wu; Brian Summa

**ID:** 154361 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E9pAceKeYu>) | [PDF](<https://openreview.net/pdf?id=E9pAceKeYu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154361>)

Text\-to\-image diffusion models fail on semantically rare attribute\-\-object compositions, but it is unclear whether this brittleness arises during denoising or is already present in conditioning representations\. We study this question at three levels of granularity\. First, using a controlled stress protocol across SD1\.5, SDXL, and SD3, we show that a Compositional Stress Index derived from text\-side non\-factorization residuals separates anchor from stress prompts with perfect discrimination \(AUC$\{=\}1\.0$\) cross\-model, establishing a robust pre\-denoising risk axis\. Second, embedding\-level low\-rank repair reduces representation residuals without any positive semantic improvement, while a downstream cross\-attention intervention succeeds on the same subset\-\-\-a site\-sensitive boundary between diagnosis and control\. Third, we decompose this boundary at block\-group resolution under three intervention modalities\. Diagnostic accessibility peaks at the deep encoder \(D2\) across all conditions, but token\-level intervention of either sign produces no measurable improvement at any block\. Only broad cross\-attention ablation moves semantics at D2, while decoder blocks respond to selective boost and collapse under ablation\. Together, these results establish that compositional defects are diagnosable before denoising, but \\textbf\{where to look is not how to fix\}: the diagnostic site and the control site require different intervention modalities, and even at the correct site, the wrong modality is futile\.

## Continuously\-Augmented Hybrid Masked Diffusion Model for Data Imputation

**Authors:** Kijung Jeon; Molei Tao

**ID:** 148351 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yXHFO8GA82>) | [PDF](<https://openreview.net/pdf?id=yXHFO8GA82>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148351>)

Missing data is pervasive in real\-world datasets, arising from sensor failures, image occlusions, and incomplete reporting\. Imputation is a conditional generation problem that must preserve observed entries exactly while producing plausible values for missing ones\. Yet most diffusion\-based imputers adopt Gaussian noising whose global perturbations are structurally misaligned with this local hard constraint, so consistency is typically enforced through conditional training, clamping, projection, or repainting\-style corrections\. We address this mismatch with Continuously\-Augmented Hybrid Masked Diffusion \(CAHMD\), a masked diffusion framework whose conditional sampler leaves observed coordinates unchanged by construction\. To extend masked diffusion beyond purely discrete data, CAHMD attaches coordinate\-wise auxiliary continuous latents to masked entries, providing a denoising channel before values are revealed in continuous and hybrid data\. For incomplete training data, we introduce observed\-mask gating, an observed\-data masked reconstruction principle that uses available entries as pseudo\-missing targets and avoids repeated EM\-style imputation steps\. Across tabular, image, and image\-\-caption benchmarks, CAHMD gives a strong reconstruction\-\-perception\-\-efficiency trade\-off while reducing the training overhead of EM\-style self\-imputation and the inference overhead of repainting\-style inner loops\.

## DisRFM: Polar Riemannian Flow Matching for Structure\-Preserving Graph Domain Adaptation

**Authors:** Yingxu Wang; Xinwang Liu; Siyang Gao; Mengzhu Wang; Nan Yin

**ID:** 149863 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mhAWnLhyoC>) | [PDF](<https://openreview.net/pdf?id=mhAWnLhyoC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149863>)

Graph Domain Adaptation \(GDA\) aims to transfer graph classifiers across domains with both semantic and topological shifts\. Existing Euclidean adversarial methods face two challenges: Structural Degeneration, where domain confusion entangles and suppresses label\-relevant topology, and Optimization Instability, where minimax training induces oscillatory gradients under large structural shifts\. We propose DisRFM, a geometry\-aware GDA framework that addresses these challenges with Riemannian representation learning and flow\-based transport\. DisRFM embeds graph representations on a constant\-curvature manifold and expresses them in geodesic polar coordinates\. Polar endpoint regularization calibrates topologysensitive radial scales via univariate Wasserstein alignment and preserves scalenormalized class semantics through confidence\-filtered angular alignment, with radial magnitude modulating pseudo\-label reliability\. DisRFM introduces topologyconditioned polar flow matching, which couples class\-compatible source and target samples by a normalized polar transport cost and learns a metric\-corrected vector field along geodesic interpolants\. Theoretical analysis characterizes the structural risk of unconditional domain confusion and relates polar discrepancies and flow error to target risk\. Extensive experiments under diverse domain shifts demonstrate that DisRFM consistently outperforms state\-of\-the\-art methods\.

## MissPath\-FM: Flow Matching with Structured Priors for Partially Observed Time Series

**Authors:** Genpei Zhang

**ID:** 151234 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=buaI29jMAk>) | [PDF](<https://openreview.net/pdf?id=buaI29jMAk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151234>)

Flow matching has emerged as a powerful alternative to diffusion models for generative modeling, but standard conditional flow matching is fundamentally misaligned with partially observed time series: starting from an uninformed Gaussian source forces the model to transport even already\-observed entries from noise to the target, wasting capacity on trivially known regions\. We propose MissPath\-FM, a partial\-observation\-aware flow matching framework that redesigns the source prior and probability path for incomplete time series\. MissPath\-FM employs structured source priors \(interpolation priors and Gaussian process posterior priors\) to initialize the flow close to the observed signal, paired with a missingness\-aware smooth path that allocates transport asymmetrically between observed and missing regions\. We evaluate systematically across four datasets, four missingness mechanisms \(MCAR, block, MNAR, irregular\), two missing ratios, and three sequence lengths \($T \\in \\\{24, 48, 96\\\}$\), totaling 48 settings against eight baselines\. MissPath\-FM wins 29 of 32 settings at $T\{=\}48$ and 45 of 48 overall \(93\.8\\%\)\. Our ablations reveal a regime\-dependent design hierarchy in which no single component suffices: under random missingness the source prior yields a large initial gain, but under structured block missingness it can fail entirely and the learned flow becomes indispensable; the missingness\-aware path contributes a further $12\\%$\-\-$26\\%$ across all regimes\. Only the full pipeline achieves robust performance across all 48 settings\. Mechanistically, structured priors shorten observed\-region transport by up to $15\\times$, concentrating the velocity field on genuinely uncertain entries\.

## Advanced Routing as Regularization Allocation for Efficient Diffusion Transformer Training

**Authors:** Qin MA; XIAOQI SUN; bo li; Yuquan Zhou; Weizhong Zhang

**ID:** 152568 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8tvv8HOHm>) | [PDF](<https://openreview.net/pdf?id=S8tvv8HOHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152568>)

Diffusion Transformers \(DiTs\) have achieved strong performance in visual generation, but their dense token processing leads to slow training convergence and high computational cost\. Recent token routing methods such as TREAD accelerate training by allowing a random subset of tokens to bypass intermediate layers\. It can be expected that carefully tuning the routing ratios over time steps or layers  can achieve more significant accelerations\. However, the theoretical mechanisms underlying stochastic routing remain underexplored, making the tuning of routing ratios intractable\. In this paper, we first theoretically show that stochastic token routing can be interpreted as an implicit route\-sensitivity regularizer\. Under this view, the routing ratio determines the strength of the induced regularization: larger routing ratios introduce stronger route\-induced perturbations and therefore stronger regularization pressure\. This further motivates a noise\-conditioned routing strategy\. In diffusion training, samples at larger timesteps contain heavier noise and often provide less stable gradient signals, suggesting that they may require stronger regularization\. We therefore assign larger routing ratios to higher\-noise samples, allowing the routing\-induced regularization strength to adapt to the noise condition\. Based on this insight, we propose \\emph\{Noise\-Aware Routing\}, which partitions samples within each mini\-batch into low\-, middle\-, and high\-noise regions and assigns progressively larger routing ratios to them\. This simple noise\-conditioned allocation synergistically bridges computational savings with enhanced model priors\. Extensive experiments on class\-conditional ImageNet generation show that our method accelerates training convergence and improves generation quality\. Noise\-Aware Routing achieves up to \\textbf\{15\.6\}$\\times$ and \\textbf\{20\}$\\times$ convergence speedups over DiT baselines—and outperforms TREAD—on ImageNet\-256 and ImageNet\-512, respectively, measured by the training iterations required to match our 400K\-step FID\. In the guided setting, our method achieves an FID of \\\(2\.67\\\) with a substantially shorter training iterations without architectural changes\.

## HELICS: Biobank\-scale Conditional Synthetic Genome Generation via Latent Flow Matching

**Authors:** Ahmad Abdel\-Azim; Xihong Lin

**ID:** 150881 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ehVeBNAsYG>) | [PDF](<https://openreview.net/pdf?id=ehVeBNAsYG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150881>)

Individual\-level genotype data underpin genetic discovery, disease\-risk modeling, and therapeutic development, yet many critical settings remain data\-limited, including underrepresented ancestries, rare or imbalanced disease cohorts, and restricted\-access biobanks\. Conditional synthetic genome generation would support privacy\-aware benchmarking, simulation, and data augmentation, but requires learning an ultra\-high\-dimensional discrete distribution over hundreds of thousands to tens of millions of correlated single\-nucleotide polymorphisms \(SNPs\), or sites of DNA variation\. We introduce $\\mathbf\{HELICS\}$: $\\mathbf\{H\}$igh\-fidelity g$\\mathbf\{E\}$neration via $\\mathbf\{L\}$atent $\\mathbf\{I\}$nterpolant $\\mathbf\{C\}$onditional $\\mathbf\{S\}$ynthesis, a phasing\-free latent flow matching framework for genome\-wide SNP\-level generation from biobank\-scale genotype data\. HELICS tokenizes chromosomes with convolutional autoencoders, reducing $&gt;$$600\{\\rm K\}$ SNPs to $4\{,\}096$ continuous latent tokens, and trains a transformer parameterized conditional flow matching model over the concatenated multi\-chromosome latent representation\. Trained on roughly $428\\rm K$ genomes in the UK Biobank, HELICS generates genome\-wide synthetic cohorts without haplotype phasing and achieves stronger fidelity to held\-out real genotypes than existing haplotype\- and genotype\-based simulators, including the highest validation allele\-frequency agreement \($R^2=0\.992$\) and superior preservation of local and long\-range SNP correlation structure\. Conditioning on ancestry and genetic liability summaries enables targeted generation across genetic risk profiles; in perturbation analyses, by increasing the conditioned disease trait liability, HELICS induces SNP\-level dosage changes in generated genomes that are highly correlated with published association weights\. HELICS provides a scalable generative modeling framework for SNP\-level genome data and a path toward conditional synthetic cohorts for data\-limited genetic studies\.

## Latent Riemannian Flow Matching for Geometry\-Grounded 3D Foundation Models

**Authors:** Lisa Weijler; Irene Ballester Campos; Guofeng Mei; Tolga Birdal; Pedro Hermosilla

**ID:** 152188 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uta0YOIusF>) | [PDF](<https://openreview.net/pdf?id=Uta0YOIusF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152188>)

Geometric foundation models, such as the Visual Geometry Grounded Transformer \(VGGT\), provide strong 3D priors from unposed images\. However, such models operate purely in a feed\-forward, deterministic regime, \\ie\~they cannot generate plausible geometry beyond what the input views directly support\. Generative models for 3D scenes, on the other hand, must rely on strong geometric priors to produce coherent outputs from sparse inputs\. We bridge these two paradigms by performing flow matching directly in VGGT's latent space, leveraging its learned 3D priors without committing to any explicit downstream representation such as Gaussians, meshes, or video\-VAE latents\. This requires respecting the latent geometry: VGGT tokens occupy a product of high\-dimensional hyperspheres on which standard Euclidean flow matching fails\. We address this with a Riemannian Flow Matching framework defined on a product manifold of four hyperspheres, aligned with VGGT's multi\-scale encoder, which keeps generated tokens on the valid data manifold required by the frozen decoding heads\. On RealEstate10K and ScanNet\+\+, our method achieves strong performance against recent scene generation baselines in both per\-view 3D geometry and appearance, establishing latent\-space flow matching on geometric foundation models as a viable paradigm for 3D generation\.

## DiRecT: Safe Diffusion\-Based Planning via Receding\-Horizon Denoising

**Authors:** Paolo Giaretta; Zeyang Li; Navid Azizan

**ID:** 155798 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2nsFEzrTEf>) | [PDF](<https://openreview.net/pdf?id=2nsFEzrTEf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155798>)

Diffusion models have emerged as powerful tools for planning and control by learning multimodal distributions over actions and trajectories\. Yet reliable inference\-time safety enforcement remains a key barrier to their deployment in safety\-critical tasks\. Existing approaches typically project each denoising iterate onto the feasible set, even though constraints are defined only on the final clean trajectory\. Enforcing feasibility on noisy intermediate samples can therefore overconstrain the sampling dynamics, substantially degrading sample quality\. To address this limitation, we introduce DiRecT \(\*\*Di\*\*ffusion\-based planning via \*\*Rec\*\*eding\-horizon denoising with \*\*T\*\*erminal constraints\), a training\-free algorithm for constrained sampling from diffusion models via stochastic optimal control \(SOC\)\. DiRecT enforces constraints only on the final clean sample, avoiding unnecessary restrictions on the intermediate denoising dynamics\. Inspired by model predictive control, we derive a principled receding\-horizon surrogate for the otherwise intractable constrained SOC formulation, yielding an efficient algorithm that cleanly separates stochastic denoising from constraint satisfaction, progressively steering samples toward feasible final trajectories without distorting the learned diffusion dynamics\. Furthermore, DiRecT is highly flexible: it can leverage off\-the\-shelf or domain\-specific optimizers, incorporate priors over environment dynamics, and optimize additional soft rewards\. Extensive experiments on safe planning benchmarks demonstrate that DiRecT substantially improves deployment safety and task performance over existing diffusion\-based planning baselines\.

## Noise\-Level KL Rates for Multi\-Marginal Schrödinger Bridge Surrogates

**Authors:** Hui Chen; Shen Xu; Vikas Singh

**ID:** 150634 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gdWlrJdblF>) | [PDF](<https://openreview.net/pdf?id=gdWlrJdblF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150634>)

It is now common to use 2D diffusion priors for problems where the underlying object is 3D \(e\.g\., medical imaging\)\. We would pick a noise schedule from the EDM literature, anneal a tilted prior, and then use the formulation as a 3D generative model\. It works empirically\. But we know very little about what it converges to and how fast\. We study this question for a natural target: the multi\-marginal Schrödinger bridge, the relative\-entropy projection of a 3D prior onto the distribution whose rendered slices match the 2D marginals\. But computing it is intractable\. The annealed 2D\-tilted surrogate is what one actually uses in applications\. The main question is how close the latter object is to the former\. Our main idea is that the discrepancy between these two laws — a comparison of two high\-dimensional, fully coupled distributions — can be reduced to the size of a \*single\* scalar correction field\. This field has a nice two\-piece form: residual coupling across slices and tempering mismatch from the annealed discrete schedule\. Using a Gaussian\-smoothed filtration, Wasserstein screening, and conditional concentration, we obtain an explicit discrepancy bound in which the relevant terms separate into latent and posterior\-residual contributions\. When the smoothing scale is identified with the EDM noise level $\\sigma\(\\tau\)$, our bound yields $\\mathrm\{KL\}\(\\Pi\_\\tau\\\|P^\\star\)=O\\left\(N\\sigma\(\\tau\)^2\\right\)$ and $\\\|\\Pi\_\\tau\-P^\\star\\\|\_\{\\mathrm\{TV\}\}=O\\left\(\\sqrt\{N\}\\sigma\(\\tau\)\\right\),$ if the latent scale remains bounded and the surrogate log\-discrepancy is noise\-aligned\. So, the 2D\-tilted construction converges to the Schrödinger\-bridge lift at a rate governed by user\-checkable quantities like the surrogate Lipschitz constants and the posterior concentration constant\.

## Frank\-LoRA: Federated Rank\-Aware LoRA for Fine\-Tuning Large Models

**Authors:** Saber Malekmohammadi; Kevin Kuo; Virginia Smith; Golnoosh Farnadi

**ID:** 148894 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uPdmJxDBM2>) | [PDF](<https://openreview.net/pdf?id=uPdmJxDBM2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148894>)

Fine\-tuning large\-scale foundation models across resource\-constrained, distributed clients presents significant computational and communication challenges\. While merging Low\-Rank Adaptation \(LoRA\) with Federated Learning \(FL\) enables rank\-based flexibility, the interdependence of the adaptation matrices \($A$ and $B$\) often complicates optimization\. In this work, we theoretically demonstrate that LoRA fine\-tuning with a frozen A matrix acts as a stochastic approximation of full fine\-tuning, where batch gradients are subject to a random, rank\-dependent perturbation\. Motivated by this insight, we propose freezing and periodically resampling $A$ matrices at the client level\. This strategy decouples the $A$ and $B$ gradients, diminishes LoRA low\-rank constraints and reduces both computational and uplink communication overheads by 50%, allowing for the reallocation of resources toward higher adaptation ranks\. Furthermore, we show that in this frozen\-$A$ regime, the adaptation rank $r$ directly governs the signal\-to\-noise ratio \(SNR\) of the perturbed gradients\. Specifically, we find that the SNR increases linearly with $r$, implying that clients’ learning rates must be dynamically scaled with their adaptation ranks for higher utility\. Building on these foundations, we introduce Frank\-LoRA, a federated rank\-aware fine\-tuning strategy that utilizes frozen, resampled $A$ matrices and rank\-dependent learning rates for clients\. We also prove the convergence of the algorithm in FL settings with heterogeneous clients resources\. Our experiments across benchmark datasets demonstrate that Frank\-LoRA consistently outperforms state\-of\-the\-art baselines with half the overhead on clients\.

## Generative Modeling by Value\-Driven Transport

**Authors:** Pablo Moreno\-Muñoz; Adrian Müller; Gergely Neu

**ID:** 152354 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ThBmruiLEV>) | [PDF](<https://openreview.net/pdf?id=ThBmruiLEV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152354>)

We propose a new framework for generative modeling based on a discrete\-time stochastic control formulation of measure transport\. Adapting classic results from control theory, we formulate our problem as a linear program whose dual variables correspond to the \\emph\{optimal value function\} of the control problem, which directly encodes the optimal control policy\. Exploiting this LP formulation, we develop an efficient simulation\-free primal\-dual algorithm for computing approximately optimal value functions and the associated \\emph\{value\-driven transport\} \(VDT\) policies which approximate the true optimal policy\. We show that well\-trained VDT policies enjoy numerous favorable properties in comparison with other state\-of\-the\-art methods based on flows, diffusions, or Schr\\"odinger bridges: they lead to straight transport paths which can be simulated quickly and robustly, and can be enhanced in all the same ways as diffusion and flow\-based models \(e\.g\., conditional generation, classifier\-free guidance, unpaired image\-to\-image translation are all easy to incorporate\)\. We establish several foundational links with the aforementioned models and evaluate our methodology in an extensive range of experiments, all of which indicate strong performance\.

## RiboC2F: Pose\-First Coarse\-to\-Fine Flow Matching for Protein\-Conditioned RNA Co\-Design

**Authors:** Dengdeng Huang; Shikui Tu

**ID:** 148419 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xx50Tzo08G>) | [PDF](<https://openreview.net/pdf?id=xx50Tzo08G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148419>)

Computational design of ribonucleic acid \(RNA\) is essential for therapeutic discovery and synthetic biology\. Designing RNAs that bind specified protein targets is bottlenecked by a scarcity of paired\-complex 3D structural data\. Existing approaches focus on importing structural priors from external biomolecular datasets, leaving where to localize the complex signal itself unresolved\. We propose RiboC2F, a coarse\-to\-fine flow\-matching framework that concentrates this signal first and foremost on the global binding pose\. RiboC2F runs a two\-stage cascade over a shared trunk, where a coarse stage commits the binding pose and a fine stage generates the full RNA design\. The coarse pose enters as a conditioning signal rather than a fixed initialization, avoiding cross\-stage error accumulation\. On PRI30k, RiboC2F delivers the strongest docking among published baselines, with competitive intrinsic validity and multi\-sample diversity\. Probing further shows that the fine stage exploits the coarse pose's direction but is robust to pointwise coordinate corruption, confirming pose direction as the operative coarse\-signal axis\.

## VGB for Masked Diffusion Model: Efficient Test\-time Scaling for Reward Satisfaction and Sample Editing

**Authors:** Kijung Jeon; Thuy\-Duong Vuong; Molei Tao

**ID:** 155107 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8La5KkmM0T>) | [PDF](<https://openreview.net/pdf?id=8La5KkmM0T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155107>)

Inference\-time reward guidance is a simple way to improve generative models when completed outputs can be checked or scored by an external verifier\. Best\-of\-N sampling is a particularly strong baseline: it is parallelizable and often highly improves with more samples\. However, when the reference model assigns low probability to reward\-satisfying samples, selection among independent full rollouts becomes sample\-inefficient\. We introduce MDM\-VGB, a reward\-guided discrete diffusion sampler that augments masked generation with value\-guided re\-masking\. MDM\-VGB extends the autoregressive VGB backtracking chain from fixed left\-to\-right prefix trees to any\-order masked\-state graphs, allowing the sampler to reveal and revise tokens at any position\. The resulting Markov chain favors local reveal and re\-mask moves that lead to higher\-value partial masked states, enabling both root\-start reward tilting and leaf\-start editing of low\-reward samples\. We further introduce a flow\-cancelled momentum lift of MDM\-VGB that preserves the projected target law while reducing oscillatory reveal/re\-mask dynamics under finite budgets\. We prove that the sampler has the correct reward\-tilted leaf law, places non\-negligible stationary mass on complete outputs, and remains robust to partial\-state verifier error\. Across structured reward satisfaction and repair tasks, MDM\-VGB improves the quality\-\-cost frontier over reference sampling, best\-of\-N, and forward\-only value\-guided rollout\.

## All\-Addition Spiking Diffusion Models with Attention Enhancement

**Authors:** Yuhan Zhang; Yuanpei Chen; Zhou Jie; Weihang Peng; Xiaode Liu; Yinglei Wang; Yufei Guo

**ID:** 154963 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9bpunbjC2G>) | [PDF](<https://openreview.net/pdf?id=9bpunbjC2G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154963>)

Diffusion models have achieved state\-of\-the\-art \(SoTA\) performance in generative tasks through their iterative denoising mechanism, yet they remain computationally intensive and energy\-prohibitive\. Spiking Neural Networks \(SNNs\) represent a promising energy\-efficient alternative to traditional Artificial Neural Networks \(ANNs\)\. Their binary spike encoding enables the conversion of multiplication operations into addition operations, which is a key attribute for reducing energy consumption\. Integrating the strong generative capabilities of diffusion models with the energy efficiency of SNNs thus forms a highly promising research direction\. In adherence to the design goal of all\-additive computation, this paper proposes a novel spiking diffusion model with attention enhancement\. Specifically, we adopt non\-negative ternary spiking neurons \(NNTSN\) to construct the U\-Net backbone, which helps mitigate information loss during feature processing\. To align NNTSN with the requirement of using only additive operations, we further design two core components: a membrane potential attention mechanism and an all\-additive shortcut module\. Leveraging a reparameterization technique, the proposed diffusion model is developed to retain only additive operations during inference, ensuring strict compliance with energy\-saving design principles\. Extensive experiments on relevant benchmarks demonstrate that our method achieves SoTA performance in generative tasks\. It also substantially outperforms other SNN\-based generative models while using fewer time steps, which validates both its effectiveness and efficiency\.

## Efficient Retrosynthesis Prediction with Integral Flow Matching and Latent Inversion

**Authors:** Tao Yin; Xiaohong Zhang; Yinjie Zhu; Jiacheng Zhang; Haotian Zou; Li Huang; Jiajun Cai; Zhibin Zhang; Meng Yan

**ID:** 148961 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=trT9R6Kr0G>) | [PDF](<https://openreview.net/pdf?id=trT9R6Kr0G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148961>)

Fast and accurate retrosynthesis prediction is desired for downstream drug discovery and synthetic planning tasks\. Currently, training and sampling state\-of\-the\-art discrete diffusion or flow\-based models for retrosynthesis requires significant computational resources\. In this work, we propose FlashRetro, an Integral Flow Matching \(IFM\) framework with Latent Inversion for efficient retrosynthesis prediction\. FlashRetro learns finite\-interval latent transport rather than local instantaneous velocity, directly matching the transport quantity required for one\-step latent inversion and avoiding test\-time numerical integration\. For inference, FlashRetro uses a principled 1\-NFE Latent Inversion rule that maps a noise latent conditioned on the product latent to the reactant latent with a single learned integral\-transport update\. Experimental results on standard benchmarks \(USPTO\-50K\) show that FlashRetro achieves superior top@1 accuracy, outperforming prior discrete flow\-matching methods by 13\.5\\% and diffusion\-based baselines by 14\.2\\%, while its average inference time is only 5\.1 ms per reactant\-\-\-38$\\times$ faster than multi\-step diffusion\-based models and nearly 22$\\times$ faster than recent discrete flow models\. These results show that FlashRetro provides an effective path toward highly efficient 1\-NFE retrosynthesis prediction with flow\-based models\.

## Breaking the Group Size Barrier: Parameter\-Efficient Group Dance Generation with Chain\-of\-Dancers

**Authors:** Jing Xu; Cunjian Chen; Qiuhong Ke

**ID:** 151566 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZekVntV4Wp>) | [PDF](<https://openreview.net/pdf?id=ZekVntV4Wp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151566>)

Group dance generation aims to synthesize coordinated multi\-dancer choreography from music, with broad applications in animation and interactive content creation\. This task requires modeling dense inter\-person dependencies to ensure spatial coordination, while naturally preserving individual dancer identities\. Existing approaches model all dancers jointly with end\-to\-end transformers, which tie the architecture to a fixed group size and entangle per\-dancer identities across frames\. We propose ChainDance, a scalable framework that reformulates group dance generation as a Chain\-of\-Dancers: a sequential decomposition over per\-dancer conditional distributions, allowing a single model to scale across arbitrary group sizes without retraining and naturally preserving per\-dancer identity\. Built on a frozen single\-dancer diffusion backbone, ChainDance introduces two lightweight modules: a Role\-Aware Text Encoder \(RATE\) for per\-dancer semantic conditioning, and a Group\-Aware Motion Encoder \(GAME\) that aggregates previously generated dancers via a distance\-weighted graph convolutional network, and incorporates a training\-free noise optimization procedure at inference time to enforce global spatial coherence\. Experiments on AIOZ\-GDance demonstrate that ChainDance achieves state\-of\-the\-art performance in motion quality and identity preservation, with 3\-4 times fewer parameters and requiring 3\-6 times less training time compared to prior approaches\.

## IRCasDiff: Two\-Stage Cascaded Diffusion for Compound Infrared Face Reconstruction

**Authors:** Zhiyuan Xia; Haojie Li; Yiguo Qiao; Cunjian Chen

**ID:** 154632 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C9h9IoTJp1>) | [PDF](<https://openreview.net/pdf?id=C9h9IoTJp1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154632>)

Real\-world thermal infrared face reconstruction faces the dual challenges of compound sensor\-specific degradations and a large infrared\-to\-visible domain gap\. Existing methods either rely on oversimplified degradation assumptions or target only specific degradation types, leaving realistic sensor noise under cross\-modal translation largely unaddressed\. To tackle this compound problem, we decompose it into two sequential tasks, infrared degradation restoration to remove sensor\-specific artifacts, followed by infrared\-to\-visible translation to bridge the domain gap to the visible spectrum\. Both tasks require multi\-scale detail reconstruction from spatially heterogeneous tokens that exhibit semantic, frequency, and task\-specific variations\. This motivates our proposed IRCasDiff, a cascaded diffusion framework consisting of the above two sequential stages\. Both stages share a unified backbone with an asymmetric Sparse Mixture\-of\-Experts design, featuring content\-adaptive routing in encoder blocks, frequency\-decoupled reconstruction in decoder blocks, and text\-free prompt generation for infrared\-specific conditioning\. The translation stage is initialized from converged restoration stage weights, enabling the model to master infrared restoration before tackling cross\-modal mapping\. Experiments on MCXFace and SpeakingFaces demonstrate state\-of\-the\-art performance, with FID reductions up to 48\.4\\% over translation baselines and SSIM improvements up to 19\.3\\% over restoration baselines\.

## ParaLin: Accelerating Parallel Diffusion Integrator via Intrinsic Partially Linear Structure

**Authors:** Jianrong Lu; Zhiyu Zhu; Hui LIU; Junhui Hou

**ID:** 155812 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2iMSq9oirM>) | [PDF](<https://openreview.net/pdf?id=2iMSq9oirM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155812>)

This paper explores the challenge of accelerating the sequential inference process of Diffusion Probabilistic Models \(DPMs\)\. We tackle this critical issue from a dynamic system perspective, in which the inherent sequential nature is transformed into a parallel sampling process\. Specifically, we first reveal that the sequential integral solver of the diffusion model can be approximated by a full linear solver, enabling efficient computation for parallel integral solvers of DPMs\. We then introduce a unified framework that reformulates the original nonlinear sequential integral process of the DPMs as a system of partial linear equations\. Moreover, we further develop an immediate update strategy to solve the system\. In addition, we prove that \(1\) the system admits a unique root corresponding precisely to the trajectory of the sequential integral solver; \(2\) solving the system guarantees convergence to the trajectory of sequential integral solvers in equal or fewer iterations\. We then present \\textit\{\\paralin\}, a partial linear parallel integral solver to accelerate a broad class of sequential and parallel sampling methods such as DDPM and ParaSolver\. This partial linearity allows \\paralin to achieve parallel speedup on more practical single GPU settings\. Experiments \(\\textbf\{12B Flux\}, Stable Diffusion Model, VP, VE, EDM, flow matching\) validate that \\paralin achieves $\\textbf\{2\.7\}\\times$ to $ \\textbf\{3\.9\}\\times$ speedup in practical 25\-50 steps\. Notably, on more practical single GPU setting where SOTA parallel solvers typically exhibit constraints, \\paralin outperforms them with a 2\.5× time speedup\. Furthermore, to demonstrate the scalability, we show it can unlock up to a 50x speedup on classical large\-step settings \(e\.g\., 1000\-step DDPM\)\. The source code will be released publicly\.

## ParetoSlider: Diffusion Models Post\-Training for Continuous Reward Control

**Authors:** Shelly Golan; Michael Finkelson; Ariel Bereslavsky; Yotam Nitzan; Or Patashnik

**ID:** 154172 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FikEkhzT3F>) | [PDF](<https://openreview.net/pdf?id=FikEkhzT3F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154172>)

Reinforcement Learning \(RL\) post\-training has become the standard for aligning generative models with human preferences, yet most methods rely on a single scalar reward\. When multiple criteria matter, the prevailing practice of \`\`early scalarization'' collapses rewards into a fixed weighted sum\. This commits the model to a single trade\-off point at training time, providing no inference\-time control over inherently conflicting goals \-\- such as prompt adherence versus source fidelity in image editing\. We introduce ParetoSlider, a multi\-objective RL \(MORL\) framework for Diffusion Models post\-training that allows continuous reward control during inference\. By training the model with continuously varying preference weights as a conditioning signal the model learns how its denoising trajectory should change as the requested reward priority changes\. Consequently, we enable users to navigate optimal trade\-offs at inference time without retraining or maintaining multiple checkpoints\. We evaluate ParetoSlider across three state\-of\-the\-art flow\-matching backbones: SD3\.5, FluxKontext, and LTX\-2\. Our single preference\-conditioned model matches or exceeds the performance of baselines trained separately for fixed reward trade\-offs, while uniquely providing fine\-grained control over competing generative goals\.

## DiffRatio: Training One\-Step Diffusion Models Without Teacher Supervision

**Authors:** Wenlin Chen; Mingtian Zhang; Jiajun He; Zijing Ou; José Miguel Hernández\-Lobato; Bernhard Schölkopf; David Barber

**ID:** 155104 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8PGxK47BQD>) | [PDF](<https://openreview.net/pdf?id=8PGxK47BQD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155104>)

Score\-based distillation methods train one\-step diffusion models in two stages: they first train a teacher score model, then distill it into a one\-step student model\. However, this distillation process can introduce bias from two sources: errors in the teacher score model and student score estimate\. We propose DiffRatio, a new framework for training one\-step diffusion models without teacher supervision\. Instead of using a teacher score model to provide training targets, DiffRatio directly learns a log density ratio between the student and data distributions across diffusion time steps\. As a pre\-trained score model is only used to initialize the one\-step generator and does not supervise training\. This design simplifies the training pipeline, mitigates gradient estimation bias, and reduces the size of auxiliary networks\. In addition, the learned density ratio can be used as a verifier, enabling a principled inference\-time parallel scaling method that further improves sample quality without external rewards or extra sequential computation\. DiffRatio achieves strong one\-step generation results on CIFAR\-10 and ImageNet \($64\{\\times\}64$ and $512\{\\times\}512$\), outperforming most teacher\-supervised distillation methods\.

## AdaPreLoRA: Adafactor Preconditioned Low\-Rank Adaptation

**Authors:** Ziyun Liu; Fengmiao Bian; Jian\-Feng CAI

**ID:** 155053 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8o83y7bppR>) | [PDF](<https://openreview.net/pdf?id=8o83y7bppR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155053>)

Low\-Rank Adaptation \(LoRA\) reparameterizes a weight update as a product of two low\-rank factors, but the Jacobian $J\\\_\\mathcal\{G\}$ of the generator mapping the factors to the weight matrix is rank\-deficient, so the factor\-space preconditioner $J\\\_\\mathcal\{G\}^\\\* \\mathcal\{F\}\\\_t J\\\_\\mathcal\{G\}$ induced by any $\{W\}$\-space preconditioner $\\mathcal\{F\}\\\_t$ is singular, and consequently the standard chain rule cannot be uniquely inverted to map a preconditioned $\{W\}$\-space direction back to a factor\-space update\. We cast existing LoRA optimizers in a unified framework parameterized by two choices: \(i\) which invertible surrogate for $J\\\_\\mathcal\{G\}^\\\* \\mathcal\{F\}\\\_t J\\\_\\mathcal\{G\}$ to use, and \(ii\) which $\\mathcal\{F\}\\\_t$ on $\{W\}$ to use\. Existing methods occupy four families along these axes: factor\-space adaptive updates, block\-diagonal surrogates for $J\\\_\\mathcal\{G\}^\\\* J\\\_\\mathcal\{G\}$, Frobenius\-residual pseudoinverse methods, and Riemannian manifold constraint\. Within this design space, a gradient\-statistics\-aware $\\mathcal\{F\}\\\_t$ paired with a closed\-form factor\-space solve at $\\mathcal\{O\}\(\(m\+n\)r\)$ memory remains underexplored\. We propose AdaPreLoRA, which fills this gap by adopting the Adafactor diagonal Kronecker preconditioner $\\mathcal\{H\}\\\_t$ on $\{W\}$ and selecting from the resulting factor\-space solution family the element minimizing an $\\mathcal\{H\}\\\_t$\-weighted imbalance between the two factor contributions; by construction, the resulting factor update is the closest LoRA approximation to the preconditioned $\{W\}$\-space direction under the $\\mathcal\{H\}\\\_t$\-weighted norm\. Across GPT\-2 \(E2E\), Mistral\-7B and Qwen2\-7B \(GLUE, ARC, GSM8K\), and diffusion\-model personalization, AdaPreLoRA is competitive with or improves over a representative set of LoRA optimizers while keeping peak GPU memory at the LoRA optimizer level\.

## Representation Preconditioning for Efficient Diffusion Model Training

**Authors:** deyuan liu; PENG SUN; Xufeng Li; Tao Lin

**ID:** 151596 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZNtVdfSWVX>) | [PDF](<https://openreview.net/pdf?id=ZNtVdfSWVX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151596>)

Diffusion transformers learn useful internal representations during training, and learning them from scratch can add a burden to efficient training\. Alignment mitigates this burden by adding an auxiliary loss that regularizes diffusion hidden states with features from pretrained visual encoders\. In this work, we revisit the role of this alignment signal\. Rather than using pretrained representations only as a regularizer during full diffusion training, we use them as a preconditioning signal before diffusion training\. The key observation is that early layer alignment from clean latents to pretrained representations can be much cheaper than optimizing the full flow matching objective over the entire backbone, yet provides a better initialization for subsequent diffusion training\. We instantiate this idea as Embedded Representation Warmup \(ERW\)\. ERW first aligns early layers from clean latents to pretrained representations, and then trains the full model with the standard diffusion objective and decaying alignment\. This initialization allows subsequent diffusion training with alignment to converge more efficiently than starting alignment from scratch\. Counting warmup in the total budget, ERW improves convergence in SiT based diffusion training\. On ImageNet $256\\times256$, ERW reaches FID=1\.41 in 350 epochs with SiT\-XL/2; it also reaches FID=2\.04 on ImageNet $512\\times512$ and improves FID on MS\-COCO text\-to\-image generation\.

## Duality Models: An Embarrassingly Simple One\-step Generation Paradigm

**Authors:** PENG SUN; Xinyi Shang; Zhenglin Cheng; deyuan liu; Tao Lin; Zhiqiang Shen

**ID:** 148859 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=udpOHslgqs>) | [PDF](<https://openreview.net/pdf?id=udpOHslgqs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148859>)

Consistency\-based generative models like Shortcut and MeanFlow achieve impressive results via a target\-aware design for solving the Probability Flow ODE \(PF\-ODE\)\. Typically, such methods introduce a target time $r$ alongside the current time $t$ to modulate outputs between a local multi\-step derivative \($r = t$\) and a global few\-step integral \($r = 0$\)\. However, the conventional "one input, one output" paradigm enforces a partition of the training budget, often allocating a significant portion \(e\.g\., 75% in MeanFlow\) solely to the multi\-step objective for stability\. This separation forces a trade\-off: allocating sufficient samples to the multi\-step objective leaves the few\-step generation undertrained, which harms convergence and limits scalability\.To this end, we propose Duality Models \(DuMo\) via a "one input, dual output" paradigm\. Using a shared backbone with dual heads, DuMo simultaneously predicts velocity $\\mathbf\{v\}\_t$ and flow\-map $\\mathbf\{u\}\_t$ from a single input $\\mathbf\{x\}\_t$\. This applies geometric constraints from the multi\-step objective to every sample, bounding the few\-step estimation without separating training objectives, thereby significantly improving stability and efficiency\. On ImageNet $256 \\times 256$, a 679M Diffusion Transformer with SD\-VAE achieves a state\-of\-the\-art \(SOTA\) FID of 1\.79 in just 2 steps\.Code will be publicly available\.

## TRACE: Structure\-Aware Character Encoding for Robust and Generalizable Document Watermarking

**Authors:** Jiale Meng; Jie Zhang; Runyi Hu; Zhe\-Ming Lu; Tianwei Zhang; Yiming Li

**ID:** 153866 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IAFQ0N1pTY>) | [PDF](<https://openreview.net/pdf?id=IAFQ0N1pTY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153866>)

We propose TRACE, a structure\-aware framework leveraging diffusion models for localized character encoding to embed data\. Unlike existing methods that rely on edge features or pre\-defined codebooks, TRACE exploits character structures that provide inherent resistance to noise interference due to their stability and unified representation across diverse characters\. Our framework comprises three key components: \*\*\(1\)\*\* adaptive diffusion initialization that automatically identifies handle points, target points, and editing regions through specialized algorithms including movement probability estimator \(MPE\), target point estimation \(TPE\) and mask drawing model \(MDM\), \*\*\(2\)\*\* guided diffusion encoding for precise movement of selected point, and \*\*\(3\)\*\* masked region replacement with a specialized loss function to minimize feature alterations after the diffusion process\. Comprehensive experiments demonstrate TRACE's superior performance over state\-of\-the\-art methods, achieving more than 5 dB improvement in PSNR and 5% higher extraction accuracy following cross\-media transmission\. TRACE achieves broad generalizability across multiple languages and fonts, making it particularly suitable for practical document security applications\.

## FlashPlanner: Real\-Time Goal\-Conditioned Flow\-Matching Planning for Autonomous Driving with Online RL Fine\-Tuning

**Authors:** Qifeng Li; Yubing Gao; Xiaosong Jia; Zhiliu Liu; Sizhuo Zhou; Wenlong Liao; Tao He; Junchi Yan

**ID:** 151391 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aztITR34On>) | [PDF](<https://openreview.net/pdf?id=aztITR34On>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151391>)

Diffusion and flow matching have emerged as expressive generative planners for autonomous driving planning, owing to their ability to model high\-fidelity and multi\-modal trajectory distributions\. Nevertheless, existing generative planners are predominantly optimized through imitation learning, which induces a fundamental mismatch between supervised trajectory fitting and closed\-loop planning metrics, while their iterative sampling procedures often impose substantial computational overhead\. In this paper, we propose FlashPlanner, a goal\-conditioned flow\-matching planner with online RL finetuning for closed\-loop AD planning\.  FlashPlanner introduces a continuous future goal point as a compact navigation interface for the generative planning policy\. This goal is produced by a continuous goal predictor, which is first pretrained and subsequently optimized with RL using closed\-loop feedback from multiple candidate goals at each decision step\. To support efficient online reinforcement fine\-tuning and real\-time deployment, FlashPlanner adopts a data\-prediction flow\-matching objective and removes redundant architectural components in existing diffusion\-based planners\. Experiments on the closed\-loop nuPlan and interPlan benchmarks demonstrate that \\textit\{FlashPlanner\} achieves state\-of\-the\-art planning performance while delivering 6× faster inference \(166 FPS\) than the previous SOTA baseline \(28 FPS\)\. We will open\-source our project\.

## Control\-Augmented Autoregressive Diffusion for Data Assimilation

**Authors:** Prakhar Srivastava; Farrin Marouf Sofian; Francesco Immorlano; Kushagra Pandey; Stephan Mandt

**ID:** 152028 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W4x1rXfdP2>) | [PDF](<https://openreview.net/pdf?id=W4x1rXfdP2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152028>)

Despite advances in test\-time scaling and diffusion finetuning, guidance for Auto\-Regressive Diffusion Models \(ARDMs\)  remains underexplored\. We introduce an amortized framework that augments a pretrained ARDM with an offline\-trained controller\. By previewing future rollouts, the controller learns stepwise corrections that anticipate observations under a terminal\-cost objective, yielding a reusable policy for guided generation\. Motivated by a stochastic optimal control view of ARDM trajectories, our method injects small controls within each denoising sub\-step while staying close to the pretrained dynamics\. We study this approach for data assimilation \(DA\) in chaotic spatiotemporal partial differential equations \(PDEs\), where existing methods are often computationally expensive and susceptible to forecast drift under sparse observations\. At inference, DA becomes a feed\-forward rollout with on\-the\-fly corrections, achieving an order\-of\-magnitude speedup over strong diffusion\-based baselines\. Across two canonical PDEs and a compact ECMWF Reanalysis v5 \(ERA5\)  pilot spanning six observation regimes, our method consistently improves stability and accuracy over state\-of\-the\-art alternatives, with similar improvements observed in a larger\-scale GenCast study\.

## IIDiff: Learning Cross\-Domain Frequency Transitions with Diffusion Mixture\-of\-Experts

**Authors:** Xin Xue; Yirong Xue; Xingcheng Fu; Yisen Gao; Lanhao Li; Lijun Sun; Yunhao Fu; Haoyi Zhou

**ID:** 155681 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3lbpq6bC01>) | [PDF](<https://openreview.net/pdf?id=3lbpq6bC01>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155681>)

Cross\-domain time\-series generation is a challenging task for diffusion models due to the strong requirement for domain adaptability\. While frequency\-based Mixture\-of\-Experts \(MoE\) methods have shown promise in domain adaptation, their direct integration with diffusion models faces critical issues from intra\- and inter\-domain\. For intra\-domain aspect, the absence of frequency transition compliance leads to imbalance pattern learning across denoising steps and degrade model performance\. For the inter\-domain aspect, the domain\-specific transition variation bring difficulties for domain adaptation\. To address these challenges, we propose IIDiff, a frequency\-based diffusion MoE framework equipped with progressive frequency specializing and dynamic transition matching\. The progressive specializing allows experts dynamically adjust frequency receptive fields to capture underlying patterns aligning with the intra\-domain transition, enhancing the generation fidelity\.  The transition matching leverages the frequency noise distribution property to analysis the instantaneous transition process, enabling adaptive routing with domain\-specific transition\. Extensive experiments on 12 real\-world datasets across 4 domains demonstrate our model's superiority\. Compared with SOTA baselines, our model achieves an average 27\.59\\% improvement in KL divergence and 6\.00\\% improvement in MMD, confirming its robust domain adaptability and ability to generate high\-fidelity cross\-domain time\-series\.

## Reward Score Matching: Unifying Reward\-based Fine\-tuning for Flow and Diffusion Models

**Authors:** Jeongjae Lee; Jinho Chang; Jeongsol Kim; Jong Chul Ye

**ID:** 155927 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1kkqc5AcDy>) | [PDF](<https://openreview.net/pdf?id=1kkqc5AcDy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155927>)

Reward\-based fine\-tuning steers a pretrained diffusion or flow\-based generative model toward higher\-reward samples while remaining close to the pretrained model\. Although existing methods are derived from different perspectives, we show that many can be written under a common framework, which we call reward score matching \(RSM\)\. Under this view, alignment becomes score matching against a value\-guided target, and the main differences across methods reduce to the construction of the value\-guidance estimator and the effective optimization strength across timesteps\. This unification clarifies the bias\-\-variance\-\-compute tradeoffs of existing designs, and distinguishes core optimization components from auxiliary mechanisms that add complexity without clear benefit\. Guided by this perspective, we develop simpler, more efficient redesigns across representative differentiable and black\-box reward alignment tasks\. Overall, RSM turns a seemingly fragmented collection of reward\-based fine\-tuning methods into a smaller, more interpretable, and more actionable design space\.

## Aligning Few\-Step Generative Model via Amortizing Sample\-Based Variational Inference

**Authors:** Jaewoo Lee; Hyeongyu Kang; Dohyun Kim; Kyuil Sim; Woocheol Shin; Minsu Kim; Taeyoung Yun; Jeongjae Lee; Sanghyeok Choi; Tabitha Edith Lee; Jong Chul Ye; Jinkyoo Park

**ID:** 155747 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Hk7OwZj3Y>) | [PDF](<https://openreview.net/pdf?id=3Hk7OwZj3Y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155747>)

Aligning a few\-step generative model is challenging, since existing alignment frameworks typically rely on restrictive assumptions: a tractable likelihood, a specific ODE/SDE solver, or a particular model family\. We introduce FAV, Few\-step Generative Models Alignment via Sample\-based Variational Inference, a general alignment framework that requires only sample access to the generator and the reference distribution\. We cast alignment as sampling from a reward\-tilted distribution anchored to a reference distribution\. We leverage Stein Variational Gradient Descent as a sample\-based variational inference scheme and amortize its particle updates into the parameters of the generator via fixed\-point regression\. We evaluate FAV on two domains: robotics manipulation and image generator alignment\. On generative policy alignment for robotic manipulation, FAV outperforms prevailing policy extraction baselines across 56 offline and 30 offline\-to\-online RL tasks\. For image generator alignment, FAV fine\-tunes diverse few\-step backbones, including GAN, drifting model, consistency models, and flow maps, scaling from ImageNet\-256 to 1024x1024 text\-to\-image synthesis\.

## Beyond Pixel Space: Frequency\-Domain Uncertainty Estimation for Structure\-Aware Diffusion Guidance

**Authors:** TIANQI ZHAO; Xixi Liu; Liangrui Peng; Zhengrui Xiang

**ID:** 152220 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UfOJVYkmfd>) | [PDF](<https://openreview.net/pdf?id=UfOJVYkmfd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152220>)

Although diffusion models achieve promising image generation performance, uncertainty during the iterative denoising process can lead to visual artifacts\. Existing uncertainty estimation methods typically quantify it at the pixel level\. However, these methods assume independence among pixels, neglecting pixel correlations crucial for image structure\. In contrast, we propose a frequency\-domain uncertainty estimation method that captures structural correlations\. We empirically show that samples with artifacts exhibit higher frequency\-domain uncertainty, and derive a Louis\-identity\-based connection between the estimated uncertainty and the optimal reverse\-process covariance\. To this end, we develop a structure\-aware diffusion sampling guidance framework\. For the mean of the reverse process, the gradient of the uncertainty is used to penalize specific frequency components; for the reverse covariance, frequency\-domain uncertainty is used as a proxy to modulate injected noise\. Experiments on the ImageNet, LSUN\-Churches, and DrawBench datasets across U\-Net, U\-ViT, and SD3 architectures validate our method\.

## GARDO: Reinforcing Diffusion Models without Reward Hacking

**Authors:** Haoran He; Yuxiao YE; Jie Liu; Jiajun Liang; Zhiyong Wang; Ziyang Yuan; Xintao Wang; Hangyu Mao; Meng Wang; Pengfei Wan; Ling Pan

**ID:** 150985 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dmPzzDSb7m>) | [PDF](<https://openreview.net/pdf?id=dmPzzDSb7m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150985>)

Fine\-tuning diffusion models via online reinforcement learning \(RL\) has shown great potential for enhancing text\-to\-image alignment\. However, since precisely specifying a ground\-truth objective for visual tasks remains challenging, the models are often optimized using a proxy reward that only partially captures the true goal\. This mismatch often leads to reward hacking, where proxy scores increase while real image quality deteriorates and generation diversity collapses\. While common solutions add regularization against the reference policy to prevent reward hacking, they compromise sample efficiency and impede the exploration of novel, high\-reward regions, as the reference policy is usually sub\-optimal\. To address the competing demands of sample efficiency, effective exploration, and mitigation of reward hacking, we propose \\textbf\{G\}ated and \\textbf\{A\}daptive \\textbf\{R\}egularization with \\textbf\{D\}iversity\-aware \\textbf\{O\}ptimization \(\\textbf\{GARDO\}\), a versatile framework compatible with various RL algorithms\. Our key insight is that regularization need not be applied universally; instead, it is highly effective to selectively penalize a subset of samples that exhibit high uncertainty\. To address the exploration challenge, GARDO introduces an adaptive regularization mechanism wherein the reference model is periodically updated to match the capabilities of the online policy, ensuring a relevant regularization target\. To address the mode collapse issue in RL, GARDO amplifies the rewards for high\-quality samples that also exhibit high diversity, encouraging mode coverage without destabilizing the optimization process\. Extensive experiments across diverse proxy rewards and hold\-out unseen metrics consistently show that GARDO mitigates reward hacking and enhances generation diversity without sacrificing sample efficiency or exploration, highlighting its effectiveness and robustness\.

## Trajectory as the Teacher: Few\-Step Discrete Flow Matching via Energy\-Navigated Distillation

**Authors:** Amin Karimi Monsefi; Dominic Culver; Nikhil Bhendawade; Manuel R Ciosici; Yizhe Zhang; Irina Belousova

**ID:** 155603 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4L5cj6gGXs>) | [PDF](<https://openreview.net/pdf?id=4L5cj6gGXs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155603>)

Discrete flow matching generates text by iteratively transforming noise tokens into coherent language, but may require hundreds of forward passes\. Distillation uses the multi\-step trajectory to train a student to reproduce the process in a few steps\. When the student underperforms, the usual explanation is insufficient capacity\. We argue the opposite: the trajectory is the bottleneck, not the student\. Each training trajectory is built through a chain of blind stochastic jumps with no evaluation of sequence quality; a single bad decision at an early midpoint propagates through subsequent steps, yet the student must imitate the result\. Trajectory\-Shaped Discrete Flow Matching \(TS\-DFM\) replaces these blind jumps with guided navigation: a lightweight energy compass evaluates candidate continuations at each midpoint, selecting the most coherent\. All shaping is training\-only; inference cost is unchanged\. On 170M\-parameter language modeling, the shaped student at 8 steps achieves 32% lower perplexity than the 1 024\-step teacher while being 128×faster, with gains consistent across source distributions and three evaluators of increasing scale\. TS\-DFM achieves the best perplexity of any discrete\-generation baseline we compare against, including methods trained on 6×more data or using 5×larger models\.

## Continuous Personalized Diffusion Model via Spinor\-Component Forward Geometry

**Authors:** GeonWoo Jeong; SEUNG HUN OH; Sang Beom Chu; WONJUN KIM; Bokyoon Na

**ID:** 153749 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IzIr9M08Fo>) | [PDF](<https://openreview.net/pdf?id=IzIr9M08Fo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153749>)

Existing conditional diffusion models typically inject condition information into the reverse\-time denoising process, either as model inputs or through guidance\. Although effective for conditional fidelity, this design burdens the denoiser when compact continuous signals, such as user preference ratios or mixture degrees, must support both image reconstruction and condition\-wise separation, often degrading sample quality\. In this work, we reinterpret this limitation not as a problem of condition representation, but as a problem of condition placement\. We propose the Continuous Personalized Diffusion Model \(CPDM\), which shifts the locus of conditioning from reverse\-time signal injection to forward geometry formation by coupling bounded spinor\-component coordinates with normalized image\-space drift directions\. The resulting condition\-dependent forward drift forms condition\-specific terminal geometry, from which continuous changes along the spinor\-component coordinate are reflected as continuous visual transitions rather than endpoint interpolation\. Experiments show that, even with a single scalar condition, CPDM achieves competitive performance compared with standard and higher\-capacity reverse\-conditioning baselines and supports continuous generation under compact scalar control\. These results suggest forward geometry design as a practical alternative to conventional reverse\-time conditioning for compact continuous personalization\.

## On approximation and estimation of Schrödinger potentials without the curse of dimensionality

**Authors:** Artsiom Patarusau; Nikita Puchkin; Konstantin Yakovlev

**ID:** 148151 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zuVAp9q3Lp>) | [PDF](<https://openreview.net/pdf?id=zuVAp9q3Lp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148151>)

We examine generative modelling approaches based on the construction of Schrödinger bridges between Gaussian noise and a target distribution\. It is known that the solution of the dynamic Schrödinger problem is a diffusion process with a drift associated with Doob's h\-transform of a Schrödinger potential\. Although its accurate restoration from finite samples is crucial for reliable, high\-quality data generation, the existing literature lacks theoretical guarantees regarding this question\. In our work, we establish theoretical upper bounds on the complexity of Schrödinger potential approximation and estimation via neural networks\. These bounds are determined by the effective dimension of the target distribution\. To our knowledge, this is the first result demonstrating that generative modelling methods based on Schrödinger bridges and stochastic optimal control can escape the curse of dimensionality\.

## Flexible Flows for Biological Sequence Design

**Authors:** Yogesh Verma; Dani Korpela; Harri Lähdesmäki; Vikas Garg

**ID:** 149232 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rxmkkL4trc>) | [PDF](<https://openreview.net/pdf?id=rxmkkL4trc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149232>)

Designing functional biological sequences requires navigating vast discrete spaces under strict evolutionary and biophysical constraints\. Discrete Flow Matching \(DFM\) offers a generative framework over such spaces, but existing approaches rely on biologically uninformative couplings and offer limited flexibility for variable\-length sequence generation and fine\-grained control\. We propose a structured coupling that encodes domain\-specific preferences among sequence elements, biasing the source distribution toward plausible regions without modifying the flow objective or training procedure\. Building on this, we introduce a latent edit\-based rate parameterization that models variable\-length generation via edit operations conditioned on a shared global latent, akin to a latent variable model, while remaining tractable\. We further introduce a latent classifier\-free guidance mechanism that steers generation coherently in continuous latent space, along with Dirichlet\-prior temperature scaling for test\-time control over edit operations\. Our method achieves state\-of\-the\-art performance across diverse biological sequence tasks, including density estimation, unconditional and conditional DNA sequence generation, and peptide sequence generation\.

## Colored Noise Diffusion Sampling

**Authors:** Hadar Davidson; Noam Issachar; Sagie Benaim

**ID:** 148997 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ta2pzgldj0>) | [PDF](<https://openreview.net/pdf?id=ta2pzgldj0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148997>)

Diffusion models achieve state\-of\-the\-art image synthesis, with their generative trajectories fundamentally exhibit a spectral bias, resolving low\-frequency global structures early and high\-frequency fine details later\. Conventional stochastic differential equation \(SDE\) solvers fail to account for this dynamic, naively injecting uniform white noise throughout the entire process and misusing the finite energy budget\. In this work, we establish a mathematical framework that reconsiders SDE inference as a targeted, frequency\-decoupled energy transfer\. Leveraging this framework, we introduce Colored Noise Sampling \(CNS\), a novel, training\-free stochastic solver\. Rather than injecting uniform white noise, CNS utilizes a dynamic, timestep\- and frequency\-dependent schedule that more\-efficiently allocates injected energy toward structurally unresolved frequency bands\. By actively exploiting the model's inherent spectral bias, CNS systematically steers the generated distribution toward the true data manifold\. Extensive experiments demonstrate that CNS significantly outperforms standard ODE and SDE baselines as a strictly plug\-and\-play, inference\-time sampler substitution across diverse architectures \(SiT, JiT, FLUX\)\. Compared to standard sampling on ImageNet\-256, CNS achieves substantial unguided FID reductions, improving from 8\.26 to 6\.27 on SiT\-XL/2, 32\.39 to 26\.69 on JiT\-B/16, and 11\.88 to 8\.31 on JiT\-H/16, while yielding consistent relative FID improvements with Classifier\-Free Guidance\.

## FADE: Fractional Anomalous Dynamics Extrapolation for Training\-Free Diffusion Transformers Acceleration

**Authors:** Jinlong Yang; Jinke Wu; Lizilin; Yao Zhou

**ID:** 149903 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mM9yiKjZ8m>) | [PDF](<https://openreview.net/pdf?id=mM9yiKjZ8m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149903>)

Diffusion Transformers \(DiTs\) have established themselves as the preeminent paradigm for high\-fidelity generative modeling across various modalities, yet their practical deployment is hindered by the severe computational overhead of iterative sampling\. While recent feature\-caching methods mitigate this latency through feature reuse or forecasting based on integer\-order operators, they remain limited in adapting to the non\-stationary and highly curved dynamics of DiT latent trajectories\. In this work, we reveal that DiT feature evolution exhibits anomalous diffusion characteristics and a certain degree of spatiotemporal heterogeneity, rendering static, integer\-order forecasting operators inadequate and prone to error accumulation\. To address this, we propose Fractional Anomalous Dynamics Extrapolation \(FADE\), a unified framework for training\-free diffusion transformers acceleration\. FADE models DiT feature evolution via anomalous diffusion and employs a Mittag\-\-Leffler fractional operator to better adapt to high\-curvature and non\-linear latent trajectories of DiTs\. Leveraging the empirical observation that these complex dynamics maintain cross\-sample stability, we further construct a Look\-Up Table with multiple dimensions through offline profiling\. This enables zero\-overhead, spatiotemporally adaptive parameter retrieval during online inference\. Extensive evaluations across diverse architectures and modalities demonstrate that FADE achieves state\-of\-the\-art acceleration, preserving exceptional generation fidelity under aggressive skip intervals with negligible latency overhead\. Our code is anonymously available at https://anonymous\.4open\.science/status/FADE\-8CB5\.

## Support Before Frequency in Discrete Diffusion

**Authors:** Adrian Müller; Antoine Gonon; Zebang Shen; Ya\-Ping Hsieh; Niao He

**ID:** 149817 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n7xCEekbI1>) | [PDF](<https://openreview.net/pdf?id=n7xCEekbI1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149817>)

Discrete diffusion models are increasingly competitive for language modeling, yet it remains unclear how their denoising objectives organize learning\. Although these objectives target the full data distribution, we show that the exact reverse process induces a hierarchy between coarse support information and finer frequency information\. For uniform and absorbing \(a\.k\.a\. masking\) diffusion, we prove that, in the small\-noise regime of the final denoising steps, each single\-token reverse edit decomposes into a leading scale, determined by whether it moves toward the data support \(e\.g\., grammatically valid sentences\), and a finer coefficient, determining relative probabilities within the same scale\. Thus, recovering validity structure only requires learning the correct order of magnitude of reverse probabilities, whereas recovering data frequencies requires coefficient\-level estimation\. The separation is mechanism\-dependent: uniform diffusion exhibits a trichotomy into validity\-improving, validity\-preserving, and validity\-worsening edits, while absorbing diffusion places its leading\-order mass on validity\-improving moves\. Experiments on a masked language diffusion model and synthetic regular\-language tasks support these predictions: support\-localization emerges earlier than within\-support frequency ranking, and the contrast between uniform and absorbing diffusion matches the predicted rate separation\. Together, our results suggest that discrete diffusion models learn data support before data frequencies\.

## NIV: Neural Axis Variations for Variable Font Generation

**Authors:** Nadav Benedek; Ariel Shamir; Ohad Fried

**ID:** 154266 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F4kv6kdkQw>) | [PDF](<https://openreview.net/pdf?id=F4kv6kdkQw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154266>)

Variable fonts enable continuous variation of glyph geometry along semantic design axes such as weight, width, slant, and optical size\. However, constructing a variable font from a static font remains a labor\-intensive process requiring expert typographic design and manual specification of glyph variation data\. We introduce NIV \(Neural Axis Variations\), a method that automatically converts a static font into a fully functional variable font\. Given glyph outlines and a set of desired design axes, NIV predicts per\-point displacements\. The model operates directly on vector glyph geometry and employs a novel Property Embedding mechanism that captures interactions between multiple axes, enabling consistent multi\-axis variation within a unified framework\. We train NIV on a newly constructed dataset derived from variable Google Fonts, comprising over one million variation tuples\. The resulting model generalizes across unseen code points, unseen font styles, high\-complexity CJK glyphs, and even out\-of\-distribution handwriting inputs\. The generated outputs are standard variable font files supporting continuous interpolation via existing rendering engines\. To facilitate research, we release the dataset, the complete training and inference implementation, and trained models\. Beyond typography, our approach demonstrates how structured geometric objects with continuous parametric variation can be synthesized using neural deformations\.

## Selective Safety Steering via Value\-Filtered Decoding

**Authors:** Bat\-Sheva Einbinder; Hen Davidov; Yee Whye Teh; Yarin Gal; Yaniv Romano

**ID:** 148157 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zsrEQJOOeK>) | [PDF](<https://openreview.net/pdf?id=zsrEQJOOeK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148157>)

While large language models \(LLMs\) are trained to align with human values, their generations may still violate safety constraints\. A growing line of work addresses this problem by modifying the model’s sampling policy at decoding time using a safety reward\. However, existing decoding\-time steering methods often intervene unnecessarily, modifying generations that would have been safe under the base model\. Such unnecessary interventions are undesirable, as they can distort key properties of the base model such as helpfulness, fluency, style, and coherence\. We propose a new test\-time steering method designed to reduce such unnecessary interventions while improving the safety of unsafe responses\. Our approach filters tokens using a value\-based safety criterion and provides an explicit bound on the probability of false interventions\. A single threshold hyperparameter controls this bound, allowing practitioners to trade off higher rates of unnecessary intervention for better output safety\. Across multiple datasets and experiments, we show that our value\-filtered decoding method outperforms existing baselines, achieving better trade\-offs between safety, helpfulness, and similarity to the base model\.

## Disentangling Continuous\-Time Latent Dynamics: Identifiability of Latent SDEs via Diffusion Shifts

**Authors:** Yuanyuan Wang; Wenjie Wang; Haoxuan Li; Mingming Gong; Kun Zhang

**ID:** 155723 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3PMnq8eP55>) | [PDF](<https://openreview.net/pdf?id=3PMnq8eP55>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155723>)

Causal representation learning for time series has developed strong identifiability results in discrete\-time latent causal models, but identifiability in continuous\-time latent stochastic differential equation \(SDE\) models remains largely open\. We address this gap using environment\-induced shifts in diffusion covariance\. We study additive\-noise latent SDEs observed through an unknown nonlinear diffeomorphism, with shared drift but environment\-specific diffusion covariance\. We show that two diagonal diffusion regimes with pairwise distinct coordinate\-wise variance ratios identify the latent coordinates up to permutation and scaling, without any sparsity assumption on the drift\. We first prove this result for linear Ornstein\-\-Uhlenbeck systems and then extend it to general additive\-noise latent SDEs\. Under mild smoothness, the instantaneous drift\-Jacobian causal graph is identifiable up to the same permutation\. We propose a two\-stage estimator for latent disentanglement and optional graph recovery; experiments on synthetic systems confirm the predicted identifiability boundary, and an application to Hardanger Bridge monitoring data illustrates the approach on real sensor trajectories\.

## Branching Flows: Discrete, Continuous, and Manifold Flow Matching with Splits and Deletions

**Authors:** Lukas Billera; Hedwig Nora Nordlinder; Jack C Ryder; Anton Oresten; Aron Stålmarck; Theodor M Björk; Ben Murrell

**ID:** 155589 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4SxwSH1IQc>) | [PDF](<https://openreview.net/pdf?id=4SxwSH1IQc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155589>)

Diffusion and flow matching approaches to generative modeling have shown promise in domains where the number of elements in a state is fixed in advance \(e\.g\. images\), but require \*ad hoc\* solutions when, for example, the length of a response from a large language model, the number of atoms in a molecule, or the number of amino acids in a protein chain is not known \*a priori\*\. Here we propose Branching Flows, a generative modeling framework that, like diffusion and flow matching approaches, transports a simple distribution to the data distribution\. But in Branching Flows, the elements in the state evolve over a forest of binary trees, branching and dying stochastically with rates that are learned by the model\. This allows the model to control, during generation, the number of elements in the sequence\. We show that Branching Flows can compose with any flow matching base process on discrete sets, continuous Euclidean spaces, Riemannian manifolds, and "multimodal" product spaces that mix these components, and we demonstrate distribution matching on small molecules and antibody sequences, and that this scales to complicated domains such as protein structures\.

## When Less is More: The LLM Scaling Paradox in Context Compression

**Authors:** Ruishan Guo; Yibing Liu; Guoxin Ma; Yan Wang; Yueyang Zhang; Long Xia; Kecheng Chen; Zhiyuan Sun; Daiting Shi

**ID:** 153967 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H9lFJNJ2so>) | [PDF](<https://openreview.net/pdf?id=H9lFJNJ2so>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153967>)

Scaling up model parameters has long been a prevalent training paradigm driven by the assumption that larger models yield superior generation capabilities\. However, under lossy context compression in a compressor\-\-decoder setup, we find a \\textbf\{\\textit\{Size\-Fidelity Paradox\}\}: increasing compressor size can lessen the faithfulness of reconstructed contexts though reconstruction error decreases\. Across 27 compressor setups spanning model families, scales, and compression rates, we coin this paradox arising from two dominant factors: 1\) \\textit\{knowledge overwriting\}: larger models increasingly replace source facts with their own prior beliefs, \\textit\{e\.g\.\}, \`\`the white strawberry\`\` $\\to$ \`\`the red strawberry\`\`; and 2\) \\textit\{semantic drift\}: larger models tend to paraphrase or restructure content instead of reproducing it verbatim, \\textit\{e\.g\.\}, \`\`Alice hit Bob\`\` $\\to$ \`\`Bob hit Alice\`\`\. Interestingly, this paradox persists across varied settings, with mid\-sized compressors often outperforming larger ones in faithful recovery\. By analyzing the compressed memory via embedding geometry and reconstruction determinacy, we further reveal that compressors tend to organize memory across broader semantic subspaces, yielding more ambiguous representations prone to overwriting, drift, and weakened recovery\. These findings complement existing evaluations of context compression and expose a breakdown of scaling laws when the objective shifts from plausible generation to faithful preservation\.

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

## CSFlow: Aligning Flow Matching with Human Contrast Sensitivity

**Authors:** Malgorzata Galinska; Bart Pogodzinski; Jan Eric Lenssen

**ID:** 154473 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DKVqS2hVS1>) | [PDF](<https://openreview.net/pdf?id=DKVqS2hVS1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154473>)

We introduce Contrast Sensitive Flow \(CSFlow\), a weighting scheme that connects the human eye's Contrast Sensitivity Function \(CSF\) to the iterative denoising steps of flow matching\. Because real\-world images concentrate signal at low spatial frequencies, these components reach high signal\-to\-noise ratio earlier during continuous diffusion than high\-frequency components\. When generating images with diffusion or flow matching models, this induces a soft autoregressive structure in Fourier space, where coarse image content stabilizes before fine detail\. Meanwhile, the human visual system is unequally sensitive to spatial frequencies: very low and very high frequencies require significantly higher contrast to be perceived\.  We for the first time merge these observations through two contributions: \(1\) a metric that estimates which frequencies are generated at each reverse flow interval and \(2\) timestep weights obtained by aligning the frequencies generated at each noise level with human contrast sensitivity\. We validate our contributions experimentally showing that these weights can improve generative performance by lowering FID by 4\.7%, increasing Inception Score by 2\.2% and improving GenEval scores by 2\.5% using inference\-only timestep modification or short fine\-tuning\. Qualitatively, we find that our CSFlow weights lead to better visual realism and less cartoonish appearance of generated images\.

## Metropolis\-Adjusted Diffusion Models

**Authors:** Kevin H\. Lam; Tyler Farghly; Christopher Williams; Jun Yang; Yee Whye Teh; Arnaud Doucet

**ID:** 148667 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w2X7ALXCZx>) | [PDF](<https://openreview.net/pdf?id=w2X7ALXCZx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148667>)

Sampling from score\-based diffusion models incurs bias due to both time discretisation and the approximation of the score function\. A common strategy for reducing this bias is to apply corrector steps based on the unadjusted Langevin algorithm \(ULA\) at each noise level within a predictor\-corrector framework\. However, ULA is itself a \\emph\{biased\} sampler, as it discretises a continuous diffusion process\. In this work, we consider \\emph\{adjusted\} Langevin correctors that employ Metropolis\-\-Hastings \(MH\) or Barker's accept\-reject steps to correct for this bias\. Since the target density ratio typically required by MH\-based algorithms is unavailable, we propose methods that instead utilise the score function to compute the correct acceptance probability\. We introduce the first exact method for adjusting Langevin corrections in diffusion models, based on a two\-coin Bernoulli factory algorithm\. We also propose an efficient approximation based on Simpson's rule that achieves accuracy of order $5/2$ in the step size at near\-zero marginal cost\. We demonstrate that these procedures improve sample quality on both synthetic and image datasets, yielding consistent gains in Fr\\'echet Inception Distance on the latter\.

## Frequency‑Aware Flow Matching for Continuous and Consistent Robotic Action Generation

**Authors:** Jianing Guo; Fangzheng Chen; Zihao Mao; WONG L Kenny; Zhenhong Wu; Yu Li; Yishuai Cai; Yuanpei Chen; Yikun Ban; Kai Chen; DOU QI; Yaodong Yang; Xianglong Liu; Huijie Zhao; Simin Li

**ID:** 154121 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G7fOG13nTJ>) | [PDF](<https://openreview.net/pdf?id=G7fOG13nTJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154121>)

Flow matching has emerged as a standard paradigm for robotic manipulation owing to its strong expressive power for modelling complex, multimodal action distributions, alongside similar approaches like diffusion policy\. However, existing methods rely on discretized action chunks, making them brittle to demonstrations collected at heterogeneous control frequencies and prone to temporally inconsistent actions that degrade control stability\. In this paper, we propose Frequency\-Aware Flow Matching \(FAFM\), which outputs continuous, temporally consistent actions\. To handle heterogeneous frequency input, we transform discrete action sequences into the frequency domain with the discrete cosine transform \(DCT\), perform flow matching over the resulting coefficients, and reconstruct continuous actions via cosine basis expansion\. To generate temporally consistent actions, we regularize the first\-order temporal derivative to promote smooth actions\. This corresponds to a Sobolev\-type constraint that suppresses high\-frequency errors and discourages abrupt action changes\. Our FAFM is simple, introduces no additional network parameters and applies to standalone flow\-matching policies and vision\-language action models\. Across synthetic toy benchmark, obstacle avoidance, LapGym, and LIBERO, FAFM improves success rates, multimodal expressivity, motion smoothness, convergence speed, robustness to mechanical bias and mixed\-frequency input\. These gains are consistent when deployed on a real\-world Franka robot\. Code available at \\url\{https://anonymous\.4open\.science/r/FAFM\}\.

## No Model Required: Text Entropy Rate Filtering Prevents Iterative Fine\-Tuning Collapse

**Authors:** Lewis Mitchell

**ID:** 155913 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1rTomFsjg0>) | [PDF](<https://openreview.net/pdf?id=1rTomFsjg0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155913>)

Iterative fine\-tuning on synthetic data causes \\emph\{model collapse\}: output diversity narrows as rare patterns are progressively lost\. Existing mitigations either require model log\-probabilities, an external oracle, or continued access to real human data\. Here we develop a new approach grounded in mathematical information theory: the non\-parametric Kontoyiannis entropy rate estimator $H\_K$, computed entirely from raw text via match\-length statistics, with no model of any kind\. We show that this is in fact a superior training\-data filter on text\-diversity metrics in a fully\-synthetic, single\-lineage fine\-tuning setting\. In a six\-generation QLoRA collapse experiment on Llama\-3\.1\-8B, logprob\-based filtering \(the established gold standard\) provides no significant text\-diversity benefit on any metric \($p &gt; 0\.23$\), whereas $H\_K$\-filtering yields \+42% unique trigrams, \+30% vocabulary, and \-19% repetition \(all $p &lt; 0\.001$\)\. We validate $H\_K$ as a cross\-domain entropy proxy \($\\beta = 0\.924$, $R^2 = 0\.746$\) and collapse detector \($\\rho = \+0\.454$, $p &lt; 0\.0001$\) across 4 domains, 3 temperatures, 2 generator\-\-scorer model pairs, and 1,680 generated documents\. Our results demonstrate that information theoretic approaches to collapse mitigation are efficient, and suggest new approaches for maintaining multi\-agent diversity\.

## From Static Geometry to Dynamical Singularity: Detecting Memorization in Diffusion Models via Score Evolution

**Authors:** Jeonseong Kim; Chenglin Fan

**ID:** 155740 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3KVTmKRBPc>) | [PDF](<https://openreview.net/pdf?id=3KVTmKRBPc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155740>)

Detecting training data memorization in diffusion models is important for copyright protection and privacy auditing\. We view memorization as an abnormally local concentration process: during reverse\-time generation, a memorized instance acts as a point\-like attractor whose probability basin is sharper and more position\-sensitive than that of a generalized concept\. Starting from the Fokker–Planck equation, we derive an exact evolution law for the score field $\\partial\_t \\mathbf\{s\}\_t$ and show that its leading geometric contribution in score\-dominated local regimes is $\\mathbf\{H\}\_t \\mathbf\{s\}\_t$, linking temporal concentration dynamics to spatial curvature\. We then show that standard sampling along a shared guided trajectory already exposes this curvature information through a complementary transport\-curvature response, without requiring explicit Hessian computation\. Motivated by this analysis, we propose the \*\*Dynamical Singularity Metric \(DSM\)\*\*, an on\-trajectory detector that measures the pathwise score\-evolution discrepancy between conditional and unconditional branches\. DSM requires no additional backpropagation or network evaluations beyond sampling itself\. Experiments on Stable Diffusion show that DSM matches or exceeds curvature\-based baselines while being substantially cheaper and effective at the earliest reverse step\.

## Differential Vector Erasure: Unified Training\-Free Concept Erasure for Flow Matching Models

**Authors:** Zhiqi Zhang; Xinhao Zhong; Yi Sun; Shuoyang Sun; Jiahui Wang; Bin Chen; Shu\-Tao Xia; Xuan Wang

**ID:** 155037 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8tyFYkKJGC>) | [PDF](<https://openreview.net/pdf?id=8tyFYkKJGC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155037>)

Text\-to\-image diffusion models have demonstrated remarkable capabilities in generating high\-quality images, yet their tendency to reproduce undesirable concepts poses growing concerns for safe and controllable deployment, particularly regarding NSFW content, specific objects and styles\. While existing concept erasure approaches primarily focus on DDPM\-based diffusion models and rely on costly fine\-tuning, the recent emergence of flow matching models introduces a fundamentally different generative paradigm for which prior methods are not directly applicable\. In this paper, we propose \*\*Differential Vector Erasure \(DVE\)\*\*, a training\-free concept erasure method specifically designed for flow matching models\. Our key insight is that semantic concepts are implicitly encoded in the directional structure of the velocity field governing the generative flow\. Leveraging this observation, we construct a differential vector field that characterizes the directional discrepancy between a target concept and an anchor concept\. During inference, DVE selectively removes concept\-specific components by projecting the velocity field onto the differential direction, enabling precise concept suppression without affecting unrelated semantics\. Extensive experiments on FLUX demonstrate that DVE consistently outperforms existing baselines on a wide range of concept erasure tasks, including NSFW suppression, artistic style removal, and object erasure, while preserving image quality and diversity\.

## Geometric Velocity Regularity for Flow Matching on Manifold\-Concentrated Data

**Authors:** Shuntuo Xu; Zhou Yu; Kenji Fukumizu

**ID:** 151705 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YfksrufN5t>) | [PDF](<https://openreview.net/pdf?id=YfksrufN5t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151705>)

Flow matching learns a velocity field whose ordinary differential equation transports a simple reference distribution to a data distribution\. Existing theory typically controls this velocity through ambient, isotropic Lipschitz regularity, which becomes extremely pessimistic when data concentrate near a low\-dimensional manifold\. In this regime, standard error bounds can blow up drastically near the terminal time and fail to explain why flow matching should remain stable\. We study flow matching for distributions obtained by smoothing a density on a compact manifold with small Gaussian noise\. Our first result is a tube\-local Lipschitz regularity theorem showing that, on the relevant neighborhood of the manifold, the population flow\-matching velocity has a Jacobian bound that grows only at the inverse effective noise scale\. This improves substantially over the stronger singular behavior suggested by existing ambient analyses\. Our second result gives a directional description of the velocity Jacobian: tangential directions exhibit mild growth, normal directions are strongly contractive, and tangential\-normal coupling is lower order\. This reveals that the apparent singularity is highly structured rather than uniformly harmful\. These results provide geometric foundations for sharper stability guarantees and suggest a path toward intrinsic\-dimension generalization bounds for flow matching on manifold\-concentrated data\.

## What Time Is It? How Data Geometry Makes Time Conditioning Optional for Flow Matching

**Authors:** Alec Helbling; Sebastian Gutierrez Hernandez; Benjamin Hoover; Duen Horng Chau; Parikshit Ram

**ID:** 154392 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DvM39mOD5T>) | [PDF](<https://openreview.net/pdf?id=DvM39mOD5T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154392>)

Recent work has shown that flow matching models can be trained without explicit time conditioning, challenging the standard view that the interpolation time is needed to disambiguate velocity targets\. But why should a time\-blind model work at all? Decomposing the time\-blind flow matching loss, we identify two sources of irreducible error: a \*coupling variance\*, which arises from ambiguous velocity targets induced by how noise and data points are paired, and the \*time\-blindness gap\*, which is the additional error caused by ignoring time\. This gap shows that time\-blind training is strictly harder than conventional training, reinforcing the puzzle that time\-blind models work so well in practice\. We resolve this tension by showing that the geometry of high\-dimensional data makes time identifiable directly from noisy observations\. When data concentrates near a $k$\-dimensional subspace, time can be recovered from the statistical structure of noisy interpolants in directions orthogonal to the data; under a spiked\-covariance model, this yields a closed\-form estimator that recovers $t$ from a single observation $z$ at rate $O\(1/\\sqrt\{d\-k\}\)$ for ambient dimension $d$\. As a consequence, we prove that the time\-blindness gap is asymptotically negligible relative to the coupling variance\. We empirically demonstrate our identifiability result on real\-world data and show that changing the coupling has a much larger effect on loss and sample quality than removing time conditioning across CIFAR\-10, CelebA\-HQ, and FFHQ\. These results explain why time\-blind flow matching works and show that the main practical lever is the choice of coupling, not explicit time conditioning\.

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

## Low\-Dimensional Adaptation of Rectified Flow: A Diffusion and Stochastic Localization Perspective

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

## Masked Generative Pretraining Improves Cross\-Dataset Transfer in Pixel\-Space Diffusion

**Authors:** Shu Wei; Jiachen Lei; Jiahong Wu; Xiangxiang Chu

**ID:** 152135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VGs5oln6Kl>) | [PDF](<https://openreview.net/pdf?id=VGs5oln6Kl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152135>)

Pixel\-space diffusion models have recently seen a revival in image generation, yet their training remains less efficient than that of their latent\-space counterparts\. Existing methods reduce this cost by equipping diffusion models with external representations from clean images\. In contrast, representation consistency training, a new generative pretraining paradigm, stands out as it eliminates the need of any off\-the\-shelf semantic encoders\. It proposes pre\-training the diffusion model to simultaneously capture meaningful visual semantics from clean images while aligning them with data points across various noise levels\. Nevertheless, its training depends on contrastive learning with hand\-crafted augmentations\. This introduces strong semantic prior into the pretraining, limiting model performance when transferred to downstream target distributions that substantially deviate from the pretraining manifold\. To address this, we propose Masked Pixel\-space Generative Pretraining \(MPG\), an augmentation\-free framework based on masked image modeling\. MPG trains the encoder to recover masked image area and aligns those predictions with samples of different noise levels\.  To measure the performance of pretrained model, we further introduce NC\-CKNNA, a metric that quantifies the semantic structure consistency across different noise levels\. Under the same architectures and fine\-tuning settings, MPG consistently produces better generation performance across seven downstream datasets, while retaining competitive generation quality on ImageNet\-256\. These results suggest masked generative pretraining as a practical alternative for training pixel diffusion models\.

## PRISM: Prior Rectification and Uncertainty\-Aware Structure Modeling for Diffusion\-Based Text Image Super\-Resolution

**Authors:** Zihang Xu; Xiaoyang Liu; 郑 陈; Yulun Zhang; Xiaokang Yang

**ID:** 151894 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=X9LUYLbbp6>) | [PDF](<https://openreview.net/pdf?id=X9LUYLbbp6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151894>)

Text image super\-resolution \(Text\-SR\) requires more than visually plausible detail synthesis: slight errors in stroke topology may alter character identity and break readability\. Existing methods improve text fidelity with stronger recognitive or generative priors, yet they still face two unresolved challenges under severe degradation: the text condition extracted from low\-quality inputs can itself be unreliable, and a plausible global prior does not fully determine fine\-grained stroke boundaries\. We present PRISM, a single\-step diffusion\-based Text\-SR framework that addresses these two challenges through Flow\-Matching Prior Rectification \(FMPR\) and a Structure\-guided Uncertainty\-aware Residual Encoder \(SURE\)\. FMPR constructs a privileged training\-time prior from paired low\-quality/high\-quality latents and learns a flow matching that transports degraded embeddings toward this restoration\-oriented prior space, yielding more accurate and reliable global text guidance\. SURE further predicts uncertainty\-aware structural residuals to selectively absorb reliable local boundary evidence while suppressing ambiguous stroke cues\. Together, these components enable explicit global prior rectification and local structure refinement within a single diffusion restoration pass\. Experiments on both synthetic and real\-world benchmarks show that PRISM achieves state\-of\-the\-art performance with millisecond\-level inference\.

## Quantifying and Optimizing Path Uncertainty in Masked Diffusion Models

**Authors:** Ziyu Chen; Xinbei Jiang; PENG SUN; Tao Lin

**ID:** 150361 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=idhb10oUCK>) | [PDF](<https://openreview.net/pdf?id=idhb10oUCK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150361>)

Masked Diffusion Models \(MDMs\) offer flexible, non\-autoregressive generation, but this freedom introduces a challenge: final output quality is highly sensitive to the decoding order\. We are the first to formalize this issue, attributing the variability in output quality to the cumulative predictive uncertainty along a generative path\. To quantify this uncertainty, we introduce Denoising Entropy, a computable metric that serves as an internal signal for evaluating generative process\. Leveraging this metric, we propose two algorithms designed to optimize the decoding path: a post\-hoc selection method and a real\-time guidance strategy\. Experiments demonstrate that our entropy\-guided methods significantly improve generation quality, substantially boosting accuracy on challenging reasoning, planning, and code benchmarks\. Our work establishes Denoising Entropy as a principled tool for understanding and controlling generation, effectively turning the uncertainty in MDMs from a liability into a key advantage for discovering high\-quality solutions\.

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

## Cyclic Denoising Reveals Ultrastable Memories in Diffusion Models

**Authors:** Rishabh Sharma; Stefano Martiniani

**ID:** 153681 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JaiESGVAVn>) | [PDF](<https://openreview.net/pdf?id=JaiESGVAVn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153681>)

We introduce cyclic denoising—repeated forward and reverse diffusion at controlled noise amplitudes—as an extraction attack for image diffusion models\. Inspired by random organization in disordered solids, where cyclic mechanical perturbations anneal the system into increasingly stable configurations, cyclic denoising exposes regions of the learned distribution that remain largely inaccessible to standard sampling\. We find that this dynamics drives samples toward attractors with a broad stability spectrum, with the deepest attractors exhibiting ultrastability: they can be regenerated from near\-total corruption and sustained through thousands of noising\-denoising cycles\. Many of these deep attractors correspond to memorized training images, including stock photographs, brand watermarks, and web\-crawl artifacts\. Our extraction attack requires sampler\-level control, including mid\-process noise injection, but no gradients and no weight inspection\. Crucially, it requires no prior knowledge of training data, captions, or prompts\. In contrast, prior generate\-and\-filter attacks commonly rely on prompted generation using known or suspected training captions, followed by large\-scale sampling and post\-hoc similarity or membership\-inference filtering\. While cyclic denoising can also be applied with prompts, our main protocol is fully unconditioned\. We demonstrate the phenomenon in Stable Diffusion v1\.4, a large latent diffusion model, and in a smaller pixel\-space DDPM, showing consistent behavior across latent\- and pixel\-space diffusion models\. Across noise amplitudes, we observe a dynamical transition from trivial fixed points to structured memorized images, hierarchical partial absorption in which coarse scene layout freezes while fine details remain diffusive, basin hopping between memorized states with long residence times, prompt\-stabilized memorized templates, and cross\-initial\-condition universality of the recovered attractor set\. Together, these results establish cyclic denoising as both a physics\-inspired probe of generative landscapes and a practical tool for memorization auditing, with implications for privacy, copyright compliance, and model fingerprinting\.

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

## Efficient Reasoning via Constrained Optimization in Latent Space

**Authors:** Zhinan Hou; Xingchen Li; Keyou You

**ID:** 149724 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nrBHRUPmWu>) | [PDF](<https://openreview.net/pdf?id=nrBHRUPmWu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149724>)

Large Reasoning Models \(LRMs\) have shown remarkable reasoning capabilities, yet they still suffer from overthinking, generating redundant reasoning steps which incur substantial token consumption\. Existing methods, such as suppressing reflective keywords or forcing shorter reasoning lengths, attempt to mitigate this issue but inevitably truncate necessary steps and induce underthinking, thereby compromising performance\. To address this dilemma, we investigate the latent representations and observe that efficient reasoning steps naturally cluster into a concentrated region in latent space, while those deviating from this region tend to produce verbose sequences\. To leverage this, we keep reasoning focused within this region via a quadratic program which projects deviating hidden states back into the region\. Then we propose a novel training\-free framework to achieve efficient reasoning that reduces token generation costs without sacrificing performance\. Extensive experiments conducted on four models ranging from 1\.5B to 14B, and across six benchmarks in math reasoning, coding, and scientific QA, validate the effectiveness of our method, up to a 13\.4\\% improvement in accuracy while reducing generated tokens by 11\.8\\% to 52\.8\\%\. Code and models will be publicly available\.

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

## Diffusion\-Enhanced GFlowNet for Solving Vehicle Routing Problems

**Authors:** Ni Zhang; Zhiqin Zhang; Ling Pan; Hoong Chuin Lau; Zhiguang Cao

**ID:** 155420 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5pGVh6PbGd>) | [PDF](<https://openreview.net/pdf?id=5pGVh6PbGd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155420>)

Traditional neural solvers for solving vehicle routing problems \(VRPs\) often suffer from limited solution diversity, motivating the development of Generative Flow Network \(GFlowNet\)–based models\. However, the effectiveness of these models is frequently constrained by insufficient flow expansion in high\-reward regions, limiting their ability to distribute probability across promising solution routes, the deeper exploration could yield superior results\. Diffusion models, in contrast, provide stronger structural guidance for exploration\. These two paradigms are naturally complementary: GFlowNet can supply edge\-level signals for diffusion to embed, while diffusion can guide broader exploration\. Leveraging this synergy, we propose Diffusion\-Enhanced GFlowNet \(DEG\), a novel framework that integrates GFlowNet with diffusion model to encourage richer flow expansion toward high\-reward regions and derive higher\-quality solutions\. Specifically, DEG exploits GFlowNet’s inherent diversity to generate edge\-specific backward signals, applies the stochastic noise schedule of diffusion to perturb these signals, and then denoises them within the GFlowNet paradigm\. To further improve scalability, we introduce a specialized decoder capable of dynamically adapting to diverse problem scales\. Extensive experimental evaluations on synthetic and real\-world datasets, including instances with up to 10,000 nodes, demonstrate that DEG consistently achieves favorable performance compared to baseline methods\.

## RheoSampling: Resolving the One\-Hot Dilemma in Stochastic Dynamic\-Tree Speculative Decoding

**Authors:** Qiao Hu; Yepeng Weng; Bo Zhang; Takehisa Yairi

**ID:** 152884 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PgNNLmDUZe>) | [PDF](<https://openreview.net/pdf?id=PgNNLmDUZe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152884>)

Speculative decoding accelerates LLM inference by drafting multiple tokens in parallel, with tree\-based methods further improving efficiency through structured hierarchies\. Dynamic\-tree methods such as EAGLE\-3 achieve excellent performance under greedy decoding via deterministic top\-$K$ expansion and global pruning\. However, in stochastic decoding \($T&gt;0$\), this mechanism collapses the draft distribution into one\-hot probabilities, causing a severe drop in acceptance rate\. This exposes an apparent dilemma: dynamic\-tree methods sacrifice stochastic sampling to preserve context\-aware topology, while static\-tree methods preserve stochastic sampling with context\-agnostic structures\. The issue arises because the same probability distribution is used for two conflicting tasks: constructing the tree and verifying the tokens\. This coupling makes direct injection of randomness extremely challenging, as we are faced with a complex stochastic process\. We resolve this by decoupling these two roles: RheoSampling assigns a token sampled from the draft distribution a \\textit\{proxy probability\} \(for tree expansion and pruning\) alongside its \\textit\{true sampling probability\} \(for verification\)\. Specifically, we inject a sampled token among the deterministic top\-$K$ slots and treat it with different probabilities in the construction and verification process, making RheoSampling the first dynamic\-tree method with both context\-aware top\-$K$ construction and stochastic sampling while maintaining losslessness\. We establish the lossless guarantee through a novel equivalence\-class analysis that compresses the stochastic tree space into tractable classes\. An OT\-based verification strategy and a sparse draft mechanism ensure that theoretical gains translate into practical efficiency\. Experiments across diverse LLMs and benchmarks demonstrate consistent improvements in acceptance rate and speedup over state\-of\-the\-art dynamic tree methods\. This framework may provide a template for analyzing other complex stochastic tree structures\.

## HyperGen: Learning Structure\-Aware Spectral Flows for Hypergraph Generation

**Authors:** Yu Xie; Junqi Liu; Hangyuan Du; Zhiqiang Wang; Ming Li

**ID:** 150850 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=etKi0VBHKP>) | [PDF](<https://openreview.net/pdf?id=etKi0VBHKP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150850>)

Hypergraphs provide a natural representation for high\-order relations, but real\-world hypergraph data is often difficult to share or collect due to privacy, access, and annotation constraints\. Hypergraph generation is therefore useful for constructing surrogate high\-order relational data\. Existing generators, however, typically build hyperedges through structural heuristics, propagation rules, or projected graph spaces, and thus do not directly model the incidence relation between nodes and hyperedges\. Spectral representations offer a principled way to encode global and local relational patterns, but hypergraph spectra are intrinsically non\-invertible: a spectral representation does not determine a unique discrete incidence structure\. We propose HyperGen, a structure\-aware generative framework that models hypergraph generation as continuous dynamics in a phase\-enhanced spectral latent space\. HyperGen constructs a Hermitian node\-\-hyperedge spectral operator with learnable incidence phases, learns a conditional vector field that transports noise toward target spectral embeddings, and decodes the generated latents into node\-\-hyperedge incidence matrices through a learned spectrum\-to\-structure mapping with denoising\. Experiments on benchmark hypergraphs show that HyperGen more accurately recovers node\-\-hyperedge incidences and better preserves spectral and geometric characteristics than existing baselines\.

## SynMQG: Disentanglement and Mutual\-Information Optimization for Synergistic Multi\-modal Question Generation

**Authors:** Junjie Zhang; ShengYong Ding; Shuangyin Li

**ID:** 154232 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FF06ZCbibp>) | [PDF](<https://openreview.net/pdf?id=FF06ZCbibp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154232>)

Synergistic multi\-modal question generation aims to generate questions grounded in synergistic semantics distributed across multiple modalities, rather than being specified by isolated information from any single modality alone\. In this setting, modality\-specific cues and cross\-modal shared semantics must be jointly well\-organized so that the generated question reflects synergistic multi\-modal contribution and captures genuinely synergistic information\. However, this task faces two core challenges: how to disentangle multi\-modal information for synergistic information modeling , and how to preserve synergistic contribution during question generation \. To address these challenges, we propose SynMQG , a synergistic dependency\-aware framework derived from a mutual\-information\-based theoretical analysis, which integrates disentangled representation learning with synergy\-aware optimization for synergistic multi\-modal question generation\. Specifically, SynMQG disentangles the multi\-modal context into visual\-specific, textual\-specific, and shared semantics, thereby explicitly organizing heterogeneous information for synergistic information modeling\. Based on these disentangled representations, it further introduces a reasoning chain as an intermediate scaffold to structure cross\-modal information before generation\. Moreover, SynMQG proposes GRPO with a mutual\-information\-based synergy reward, which explicitly measures whether the generated question preserves effective contribution of synergistic information, encouraging the model to generate questions that depend on synergistic multi\-modal semantics rather than superficial single\-modal cues\. Experiments on ScienceQA and MultimodalQA show that SynMQG consistently outperforms representative MQG baselines across standard text\-generation metrics, MLLM\-based evaluation, and human evaluation, while generating questions with stronger synergistic multi\-modal grounding and higher multi\-modal dependency\. The source code is available at https://anonymous\.4open\.science/r/MQG\-8E57\.

## Fix the Structural Bottleneck: Context Compression via Explicit Information Transmission

**Authors:** Jiangnan Ye; Hanqi Yan; Zhenyi Shen; Heng Chang; Ye Mao; Yulan He

**ID:** 152205 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UmwQ35aBP0>) | [PDF](<https://openreview.net/pdf?id=UmwQ35aBP0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152205>)

Long\-context LLM agents often struggle with growing token, memory, and latency costs, making efficient context compression essential for practical deployment\. Existing LLM\-as\-a\-compressor methods remain noticeably inferior to using the full context\. We find that this gap partly stems from their inability to preserve contextual information effectively\. In this work, we revisit context compression from a structural perspective and identify two key bottlenecks in standard LLM\-based compressors: limited coordination among compression tokens during information aggregation, and layerwise dilution that weakens useful signals from intermediate hidden states\. To address these limitations, we propose ComprExIT \(Context Compr ession via Ex plicit I nformation T ransmission\), a new context compression framework based on explicit information transmission\. ComprExIT adaptively selects features across frozen LLM layers, then allocates information from anchors to compression slots through a globally coordinated transport plan\. Experiments on 12 datasets show that ComprExIT consistently outperforms strong soft\-compression baselines, improving average F1 by up to 18\.5%, while adding only \~1% trainable parameters and achieving more than 2× faster compression than the fastest baselines\. The code will be released upon acceptance\.

## Point\-to\-Manifold Geometry: Flexibly Overcoming the Curse of Dimensionality in Neural Computational Units

**Authors:** Rohan Ghosh; Mehul Motani

**ID:** 152082 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VbhnntlbxG>) | [PDF](<https://openreview.net/pdf?id=VbhnntlbxG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152082>)

The ability of neural networks to generalize is fundamentally shaped by their computational units\. While the perceptron provides a first\-order, linear inductive bias and the radial basis function \(RBF\) unit offers an isotropic curved bias, we identify a critical opportunity for a structured extension: the Generative Matching Unit \(GMU\)\. Each individual GMU captures complex dependencies by treating the forward pass as an inference problem; its internal generative model optimizes instance\-specific latent parameters to compute a reconstruction error, effectively measuring a point\-to\-manifold distance as opposed to the point\-to\-point distance in RBFs\. We focus on linear GMUs, which yield closed\-form analytical expressions for fast computation and extend naturally to convolutional architectures\. Our theoretical analysis demonstrates that linear GMUs are highly flexible universal approximators capable of recovering structured class posteriors\. We prove that while a single GMU can exactly emulate an RBF kernel and two can emulate the decision boundary of a perceptron, emulating a single $k$\-order GMU’s decision boundary requires a hidden layer of standard units that scales polynomially or exponentially with input dimensionality\. Furthermore, we prove that the GMU’s point\-to\-manifold distance remains discriminative in high dimensions where standard Euclidean distances fail, offering unique robustness to the curse of dimensionality\. Finally, we show that GMUs offer superior flexibility and efficiency in learning smooth manifold decision boundaries compared to MLPs and RBFs\. Motivated by the theoretical results, we place GMUs in the first network layer like RBFs, where their role is to enhance linear separability for subsequent layers\. This avoids the typical gradient collapse problem with stacking RBF\-like units while ensuring the generalization benefits remain\. We find that across extensive experiments involving 27 tabular datasets, five vision datasets evaluated across 34 test\-time corruption settings, and 30 synthetic scenarios, GMU networks demonstrate statistically significant improvements in generalization and robustness\.

## EP\-Flow: Disordered Crystal Structure Prediction without Site\-level Annotation

**Authors:** liu qiuliang; Liming Wu; Qi Li; Zhonglong Peng; Chang Chen; Wenbing Huang; Xiaolong Chen; Shifeng Jin

**ID:** 148198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zc9Yuz8txr>) | [PDF](<https://openreview.net/pdf?id=zc9Yuz8txr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148198>)

Generative models have made rapid progress in ordered crystal structure prediction, yet many functional materials are intrinsically disordered, with substitutional mixing, vacancies, or interstitial species controlling their properties\. Existing crystal generators either assume deterministic site occupations or require site\-level disorder annotations, which are often unavailable when the chemical formula is the primary input\. We formulate disordered crystal structure prediction through an Occupancy Distribution Matrix \(ODM\), a continuous site\-by\-species representation that unifies ordered crystals, solid solutions, vacancy disorder, and interstitial occupancy\. A valid ODM must satisfy coupled site\-wise occupancy, mass\-conservation, and non\-negativity constraints, placing each sample on a formula\-dependent transportation polytope\. We propose Entropic Polytope Flow \(EP\-Flow\), a marginal\-constrained flow matching framework that canonicalizes heterogeneous polytopes into a shared double\-centered space, learns a marginal\-preserving flow, and recovers feasible occupancies through a Sinkhorn inverse map\. By jointly generating occupancies, fractional coordinates, and lattice parameters, EP\-Flow achieves state\-of\-the\-art performance on formula\-conditioned disordered CSP benchmarks derived from COD and MPDS, substantially outperforming adapted ordered\-crystal generators\. Analyses further show that EP\-Flow recovers sparse and chemically meaningful local disorder patterns rather than merely matching global composition statistics\.

## Flow Matching from Viewpoint of Proximal Operators

**Authors:** Kenji Fukumizu; Wei Huang; Han Bao; Shuntuo Xu; Nisha Chandramoorthy

**ID:** 149878 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mYUbUCFFPk>) | [PDF](<https://openreview.net/pdf?id=mYUbUCFFPk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149878>)

We reformulate Optimal Transport Conditional Flow Matching \(OT\-CFM\), showing that it admits an exact proximal form via an extended Brenier potential, without assuming that the target distribution has a density\. In particular, the mapping to recover the target point is expressed by a proximal operator, which yields an explicit proximal expression of the vector field\. We also discuss the convergence of minibatch OT\-CFM to the population OT formulation as the sample and batch sizes increase\. Using second epi\-derivatives of convex potentials, we prove that, for manifold\-supported targets, the manifold structure is stable by perturbation to the dynamics: after time rescaling, the dynamics contracts exponentially in directions normal to the manifold while remaining neutral along tangential directions\.

## CADMA: Capacity\-Aware Recall Decomposition for Generative Model Assessment

**Authors:** Debin Meng; Zheng Gao; Ziquan Liu; Yanran Li; Ioannis Patras; Georgios Tzimiropoulos

**ID:** 139801 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3iWHOoWmt3>) | [PDF](<https://openreview.net/pdf?id=3iWHOoWmt3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139801>)

Evaluating generative models requires measuring not only sample fidelity but also how well a generated set covers the real data distribution\. Recent work has therefore introduced recall\-oriented metrics for distribution\-level evaluation\. However, existing recall metrics often reduce distributional coverage to geometry\-based coverage\. This simplifying assumption weakens their diagnostic value and interpretability in two ways: these metrics provide only a single recall score that cannot distinguish essential diversity failures such as mode dropping and mode collapse, and geometry\-based coverage can provide unreliable estimates by assigning high recall to poorly covered generative distributions\. We therefore introduce CADMA, a capacity\-aware framework for recall\-oriented evaluation and diagnosis\. CADMA evaluates distributional coverage by formulating local real\-\-fake allocation as a one\-to\-one matching problem, separating geometry\-based coverage from effective coverage\. This yields multi\-dimensional recall diagnostics that quantify mode dropping and mode collapse while reducing the overly optimistic estimates produced by geometry\-based recall metrics\. Through extensive investigations on toy experiments and generative models, we show that CADMA provides more reliable recall estimates and more fine\-grained, interpretable diagnostic signals of diversity failures than existing metrics\.

## Efficient Hybrid Distillation: Synergizing Score and Adversarial Objectives for One\-Step Diffusion

**Authors:** Fei Peng; Junqiang Wu; Haoxian Tan; Jun Zhou; Jie Hu; Xiaoming Wei; Jie Guo; Xiu Li

**ID:** 153904 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Hq9vqR70JT>) | [PDF](<https://openreview.net/pdf?id=Hq9vqR70JT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153904>)

Numerous distillation methods have been developed to accelerate diffusion models\. Recent research indicates that hybrid strategies—blending different paradigms—yield superior results compared to single\-method approaches\. However, current works predominantly rely on a simple combination of objectives, leaving the question of how to effectively synergize them largely underexplored\. In this paper, we specifically investigate the synergy between Score Distillation and Adversarial Distillation\. We reveal that their operating zones are distinct and complementary: Score Distillation is effective in high\-noise regimes for capturing the global distribution yet lacks fine\-grained supervision in low\-noise regions\. Conversely, Adversarial Distillation is effective in low\-noise regions but is prone to instability and suffers from discriminator failure when applied to high\-noise intervals\. Leveraging this insight, we propose Efficient Adversarial Score Distillation \(EASD\), a framework that synergizes these objectives via a regime\-adaptive sampling strategy, directing each objective to focus on its effective interval\. We further apply this paradigm to DiT\-based Flow Matching models\. Empirically, our method achieves a promising one\-step FID of 1\.39 on ImageNet 256$\\times$256 using the SiT\-XL/2\+REPA model\. This work provides a concrete guideline for maximizing the potential of hybrid distillation\.

## Why DiT Models Underperform as Representation Learners without Long Skip Connections

**Authors:** Benyuan Meng; Yiliang Zhang; Jin\-Wen Wu; Qianqian Xu; Qingming Huang; Longtao Huang

**ID:** 152368 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TaIg0lLzG9>) | [PDF](<https://openreview.net/pdf?id=TaIg0lLzG9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152368>)

Diffusion feature — intermediate activations extracted from diffusion model backbones — has emerged as a promising approach for unifying generation and vision understanding \(discrimination\)\. Despite the advancements of diffusion backbones into Diffusion Transformers \(DiT\), the knowledge of diffusion feature largely remains in U\-Net architectures\. Hence, in this work, we aim to extend the study of diffusion feature onto DiT backbones\. We find that simply applying the previous methodology of diffusion feature to DiT models yields unsatisfying results\. We further show that long skip connections \(LSCs\) are a key missing factor behind this discrepancy and propose a mechanistic explanation for how they affect representation quality\. Specifically, LSCs can provide shortcuts to help noises bypass the section of the backbone where the better features reside\. This hypothesis is validated using both mutual information measuring for correlation evidence and a controlled study for causal evidence\. Of the two, the controlled study demonstrates that LSCs work by transporting noise information rather than just any information, indicating that LSCs enable DiT backbones to adopt a more optimized behavior pattern\. Thus, our findings suggest that representation quality in diffusion models is strongly influenced by how information is routed within the backbone\.

## Asymptotically Exact Negative Guidance of Diffusion Models via Positive\-Unlabeled Learning

**Authors:** Hirohane Takagi; Masashi Sugiyama

**ID:** 148530 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xCdsktvB3f>) | [PDF](<https://openreview.net/pdf?id=xCdsktvB3f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148530>)

Negative guidance of diffusion models generates samples that avoid an undesired condition, specified either by reference samples or by a conditional score alongside an unconditional model\. Existing methods inject repulsive terms derived from local information at each sample, so the resulting sampler does not target an explicit density, and its bias cannot be systematically reduced by increasing computation\. We instead present a negative\-guidance method that samples from an explicit target density, which uniformly handles both reference\-sample and score\-based specifications and suppresses probability mass near the undesired condition with an avoidance strength that parametrizes the target density itself\. Realizing this target requires estimating, at each diffusion timestep, how likely each sample is to belong to the undesired condition\. We cast this estimation as a Positive\-\-Unlabeled learning problem that admits lightweight online training along the diffusion trajectory, using condition samples as positives and diffusion particles as unlabeled data\. Because the guided particles drift from the unconditional marginal, we further correct the residual mismatch via Sequential Monte Carlo, yielding a sampler that is asymptotically exact in the particle limit and that turns any existing negative\-guidance method into its proposal kernel\. Empirically, our method approaches the ground\-truth target on Gaussian mixtures and Pareto\-dominates existing methods on trade\-offs between avoidance and generation quality, distributional bias, and diversity, including in an image\-generation setting with a pretrained score network\.

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

**ID:** 150915 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eQmwjbxAVA>) | [PDF](<https://openreview.net/pdf?id=eQmwjbxAVA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150915>)

Energy efficiency in LLM inference is often treated as a property of the model, the hardware, or the serving software\. We show that, for decode\-dominated serving, a simpler systems variable dominates: the serving context window\. Because KV\-cache memory is finite, increasing the context window reduces the number of concurrent sequences a GPU can hold\. Under continuous batching, this concurrency limit directly sets decode throughput, while GPU power remains nearly flat over most of the operating range\. The result is a simple $1/\\mathcal\{W\}$ law: tokens per watt scale inversely with the serving context window $\\mathcal\{W\}$\. We derive this law from KV\-cache capacity and a logistic GPU power model, and empirically verify it for Llama\-3\.1\-70B inference over the 2K\-\-128K context range\. On identical H100 hardware and software, tok/W varies by nearly $40\\times$ across this range\. We then show that the same mechanism determines GPU fleet\-level energy efficiency\. Context\-length routing keeps short requests on high\-concurrency short\-window pools, while newer hardware shifts the power and memory curve upward\. These two operator\-controllable levers are approximately multiplicative: on the short\-context\-dominant Azure trace, two\-pool context\-length routing improves tok/W by $2\.5\\times$ over a homogeneous NVIDIA H100 fleet, a calibrated NVIDIA B200 deployment improves tok/W by $2\.0\\times$ at fixed topology, and combining them reaches $5\.76\\times$\. Finally, we analyze active\-parameter weight streaming in MoE models as a third, architecture\-level lever, giving an upper\-bound gain of up to $5\.1\\times$\. Together, these results suggest a deployment order for energy\-efficient LLM serving: route by context length first, upgrade hardware second, and exploit sparse architectures where dispatch costs are controlled\. We release code, data, and simulator in anonymous \[repository\]\(https://anonymous\.4open\.science/r/gpu\-fleet\-sim\-1BEB\) to facilitate reproduction and further research\.

## MOSAIC: Scaling Long\-Horizon Language Agents via Multi\-Scale Adaptive Inference Control

**Authors:** Bowei He; Meng Ding; Weixu Zhang; Xunzhuo Liu; Huamin Chen; Steve Liu

**ID:** 152297 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U7oqLxPLgG>) | [PDF](<https://openreview.net/pdf?id=U7oqLxPLgG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152297>)

Large language model \(LLM\) agents have shown strong potential in tackling complex, multi\-step tasks, yet scaling them to long\-horizon settings remains fundamentally constrained by two problems: context window saturation and uniform allocation of inference\-time compute across steps of vastly different cognitive demands\. We introduce  \*\*MOSAIC\*\* \(\*\*M\*\*ulti\-Scale \*\*O\*\*rchestrated \*\*S\*\*cale\-\*\*A\*\*daptive \*\*I\*\*nference \*\*C\*\*ontrol\), a hierarchical agent framework that decomposes long\-horizon decision making into three temporal scales: strategic, tactical, and operational, each governed by distinct context scopes and reasoning budgets\. Central to  MOSAIC is a \*Scale Scheduler\*, a lightweight policy trained via reinforcement learning that dynamically determines \(i\) which abstraction level should be invoked at each time step, and \(ii\) how many reasoning tokens to allocate, based on the estimated decision complexity\. We further propose \*inter\-scale context distillation\*, a bidirectional information compression mechanism that maintains coherent state representations across scales without redundant token consumption\. Theoretically, we show that under a fixed total inference budget,  MOSAIC's adaptive allocation policy achieves a strictly lower regret bound than any fixed\-rate policy in a hierarchical semi\-MDP formulation\. Empirically,  MOSAIC achieves state\-of\-the\-art or competitive results on four diverse long\-horizon benchmarks: SWE\-Bench Verified, BrowseComp, WebArena, and GAIA \(Level 2\\&amp;3\), while reducing total inference tokens by 38\-\-57\\% relative to flat ReAct baselines\. Ablation studies confirm that each component of multi\-scale decomposition, adaptive scheduling, and context distillation contributes meaningfully to both performance and efficiency\.

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

## StableHand: Quality\-Aware Flow Matching for World\-Space Dual\-Hand Motion Estimation from Egocentric Video

**Authors:** Huajian Zeng; Chaohua Yao; Yuantai Zhang; Jiaqi Yang; Rolandos Alexandros Potamias; Xingxing Zuo

**ID:** 155198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Yxqeh6UZi>) | [PDF](<https://openreview.net/pdf?id=7Yxqeh6UZi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155198>)

Recovering world\-space 4D motion of two interacting hands from egocentric video is a fundamental capability for supervising robot policy learning, where wrist trajectories track the end\-effector and finger articulations specify the grasp pose\. Two major challenges arise in this setting: hands frequently leave the camera view for extended periods due to head motion, and persistent hand–object interactions cause severe occlusions of one or both hands\. Existing methods uniformly condition on noisy hand motion observations without accounting for their per\-frame reliability, leading to substantial performance degradation\. Our key insight is that accurate world\-space hand motion esimation is tightly coupled with the quality of per\-frame hand observations\. To this end, we decompose the quality of hand motion observations extracted from an off\-the\-shelf hand pose estimator into four channels: wrist global translation and finger articulations for both hand\. We propose StableHand, a quality\-aware flow\-matching framework conditioned on these four\-channel quality signals, which are predicted by a learned quality network\. We naturally incorporate the quality signals into the flow\-matching process through a per\-channel forward schedule, a quality\-adjusted velocity target, AdaLN modulation of the DiT denoiser, and a quality\-aware ODE initialization\. This unified generative process preserves high\-quality observations while reconstructing unreliable ones using a learned bimanual motion prior\. Experiments on HOT3D and ARCTIC, two egocentric benchmarks featuring long missing\-hand spans and persistent hand–object occlusions, show that StableHand achieves state\-of\-the\-art performance across all reported metrics, reducing W\-MPJPE by 20\-25% compared to the strongest baseline, with the largest gains on heavily occluded ARCTIC sequences\. Code and pretrained models will be released upon acceptance\.

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

## Rethinking Memorization–Generalization Trade\-Off in Generative Models

**Authors:** Jiseok Chae; Kyuwon Kim; Donghwan Kim

**ID:** 151281 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bYEt73s3Gs>) | [PDF](<https://openreview.net/pdf?id=bYEt73s3Gs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151281>)

Standard generative models face a memorization\-\-generalization trade\-off, that is avoiding memorization is considered necessary for generalization\. In supervised learning, however, recent studies show that highly overparametrized models can memorize \(interpolate\) training data while still generalizing well, a phenomenon known as benign overfitting\.  Motivated by this, we investigate whether generative models can similarly bypass the trade\-off and generalize while interpolating\.  Generative models should minimize the distance between the true data distribution and the distribution induced by mapping the full latent distribution through the generator\. But since the true distribution is inaccessible, existing models instead minimize empirical risk with respect to the training distribution\. Under this standard formulation, exact empirical\-risk minimization forces the generator to produce only training samples\. To address this issue, we consider an alternative empirical risk based on presampled latent variables\. Our experiments demonstrate that the resulting presampled\-latent version of the flow matching model exhibits benign overfitting on standard image benchmarks, such as MNIST and CIFAR\-10\.      As a theoretical proof of concept, we recast generative modeling as a regression problem and extend existing benign overfitting theory to our setting\.      Together, these results establish, for the first time, that benign overfitting can occur in generative models\.

## Towards Unified Memory Adaptation for LLM Agents: Textual, Latent, and Parametric Pathways

**Authors:** Rui Li; Haoran Tan; Xiaohe Bo; Yiqun Chen; Meizhi Zhong; Xiaochi Wei; Yan Gao; YIWU; Yao Hu; Xu Chen

**ID:** 155155 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7s3OkqG5nf>) | [PDF](<https://openreview.net/pdf?id=7s3OkqG5nf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155155>)

Equipping large language models \(LLMs\) with external memory banks is a critical stepping stone towards autonomous agents\. Current approaches have concentrated substantial efforts on the design of memory construction and retrieval mechanisms\. However, they typically relegate memory utilization to the simplistic concatenation of explicit texts for LLM inputs, thereby remaining constrained by the fundamental bottlenecks of context overload and semantic dilution\. In response to this dilemma, we present UniMem, a unified memory adaptation framework that empowers LLM agents to holistically harness memory information, extending beyond textual signals into latent and parametric dimensions\. Operating along these pathways, UniMem not only elevates contextual density through latent compression, but also facilitates semantic grounding via parametric modulation\. Extensive experiments show that UniMem \(I\) achieves superior performance across diverse benchmarks, including long\-term dialogue, memory personalization, and open\-domain question answering; and \(II\) can seamlessly complement prevailing memory construction and retrieval mechanisms for synergistic enhancements\.

## Horizontal Diffusion Models: Score\-based Generative Modeling on Frame\-Connection Geometry

**Authors:** Sungwoo Park

**ID:** 154154 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Fr0DlZvA04>) | [PDF](<https://openreview.net/pdf?id=Fr0DlZvA04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154154>)

Geometric modeling has become an essential paradigm in AI for Science, where data often inhabit intrinsically curved or structured spaces\. However, existing manifold generative models often rely on closed\-form or tractable access to global geometric primitives, such as geodesic distances, parallel transport, or spectral decompositions, which are rarely available beyond canonical geometries\. To overcome this limitation, we propose Horizontal Diffusion Models \(HDMs\), a score\-based generative framework defined on the orthonormal frame bundle of a Riemannian manifold\. Instead of requiring global geometric operations, HDM lifts Euclidean diffusion processes through the Levi\-Civita horizontal distribution, using only local metric and connection information while preserving intrinsic manifold geometry\. This construction allows standard Euclidean score networks to be lifted into geometry\-consistent and gauge\-equivariant horizontal vector fields, bypassing the need for manifold\-specific neural architectures\. We further derive a horizontal KL objective that reduces to a Euclidean score\-matching loss and analyze the curvature\-dependent cost of the lift through a generalization bound\. Experiments on parametric surfaces and scientific datasets demonstrate high\-fidelity generation across diverse manifolds with nontrivial geometry and topology\.

## ReflectDrive\-2: Reinforcement\-Learning\-Aligned Self\-Editing for Discrete Diffusion Driving

**Authors:** Huimin Wang; Yue Wang; Bihao Cui; Pengxiang Li; Ben Lu; Mingqian Wang; Tong Wang; Chuan Tang; Teng Zhang; Kun Zhan

**ID:** 152356 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TgXR6fi9CK>) | [PDF](<https://openreview.net/pdf?id=TgXR6fi9CK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152356>)

We introduce ReflectDrive\-2, a masked discrete diffusion planner with a separate action expert for autonomous driving that represents plans as discrete trajectory tokens and generates them through parallel masked decoding\. This discrete token space enables in\-place trajectory revision: AutoEdit rewrites selected tokens using the same model, without requiring an auxiliary refinement network\. To train this capability, we use a two\-stage procedure\. First, we construct structure\-aware perturbations of expert trajectories along longitudinal progress and lateral heading directions and supervise the model to recover the original expert trajectory\. We then fine\-tune the full decision\-\-draft\-\-reflect rollout with reinforcement learning \(RL\), assigning terminal driving reward to the final post\-edit trajectory and propagating policy\-gradient credit through full\-rollout transitions\. Full\-rollout RL proves crucial for coupling drafting and editing: under supervised training alone, inference\-time AutoEdit improves PDMS by at most $0\.3$, whereas RL increases its gain to $1\.9$\. We also co\-design an efficient reflective decoding stack for the decision\-\-draft\-\-reflect pipeline, combining shared\-prefix KV reuse, Alternating Step Decode, and fused on\-device unmasking\. On NAVSIM, ReflectDrive\-2 achieves $91\.0$ PDMS with camera\-only input and $94\.8$ PDMS in a best\-of\-6 oracle setting, while running at $31\.8$ ms average latency on NVIDIA Thor\.

## Beyond ViT Tokens: Masked\-Diffusion Pretrained Convolutional Pathology Foundation Model for Cell\-Level Dense Prediction

**Authors:** Weiming Chen; Xitong Ling; Zhenyang Cai; Xidong Wang; Jiawen Li; Tian Guan; Benyou Wang; Yonghong He

**ID:** 148943 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u0riwBjIls>) | [PDF](<https://openreview.net/pdf?id=u0riwBjIls>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148943>)

Cell\-level dense prediction is central to computational pathology, but remains challenging due to fine\-grained histological structures, strong domain shifts, and costly dense annotations\. Existing ViT\-based pathology foundation models rely on patch tokenization, which can disrupt spatial continuity and weaken local morphological details needed for cell\-level prediction\. To address this, we propose Masked\-Diffusion Convolutional Foundation Models, termed ConvNeXt Masked\-Diffusion \(CMD\), a self\-supervised convolutional generative pretraining framework for dense pathology representation learning\. CMD uses a fully convolutional ConvNeXt\-UNet backbone, performs masked\-diffusion pretraining in pixel space, and incorporates frozen pathology foundation model features through adaptive normalization\. Experimental results demonstrate that CMD consistently outperforms existing ViT\-based pathology foundation models and even surpasses state\-of\-the\-art end\-to\-end segmentation methods while fine\-tuning only a small number of task\-specific parameters across multiple pathology dense prediction tasks\. The advantage is particularly pronounced under limited annotation settings, where CMD exhibits stronger robustness and generalization ability\. Our findings suggest that purely convolutional architectures can also serve as competitive pathology foundation models for cell\-level dense prediction, achieving leading performance within the current ViT\-dominated paradigm and providing a scalable, high\-performance solution that better preserves histological structural priors for fine\-grained pathology understanding\. Project page: https://anonymous\.4open\.science/r/ConvNeXt\-Masked\-Diffusion\-5BC6\.

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

## RePiD: Efficient Recursive Pixel\-Space Diffusion via Hierarchical Patch Denoising

**Authors:** Duoyou Chen; Yaxue Guo; Can Zhang; Cheng Chen

**ID:** 155797 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2ouTDcz9tp>) | [PDF](<https://openreview.net/pdf?id=2ouTDcz9tp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155797>)

Recent pixel\-space generative models avoid the reconstruction bottleneck of latent diffusion, but direct denoising over high\-dimensional pixel tokens remains computationally demanding\. This paper studies a recursive alternative for efficient pixel\-space diffusion\. We propose RePiD, a hierarchical patch\-level diffusion framework that recursively partitions an image and performs the core denoising computation on lower\-dimensional pixel groups instead of repeatedly operating on full\-resolution images\. To preserve spatial coherence across patch\-wise processing, RePiD introduces a neighborhood embedding module that conditions each patch on its surrounding regions\. Experiments on class\-to\-image generation and unpaired image\-to\-image translation show that RePiD provides a favorable quality\-\-efficiency trade\-off for direct pixel\-space generation\. These results suggest that recursive patch\-level denoising is a practical design direction for efficient pixel\-space generative modeling\. Our code is publicly available at \\textcolor\[HTML\]\{387FB9\}\{https://anonymous\.4open\.science/r/Recursive\-Pixel\-based\-Diffusion\-Model\-1735\}\.

## IdealCache: Rethinking Cache Scheduling in Diffusion Transformers via Ideal Trajectories

**Authors:** shang xue; Li Zhu; Ping Chen

**ID:** 155683 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3jq55sxmcq>) | [PDF](<https://openreview.net/pdf?id=3jq55sxmcq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155683>)

Feature caching accelerates Diffusion Transformers by reusing intermediate computations across denoising timesteps, yet existing methods share a fundamental blind spot: they treat the standard reference denoising trajectory as the optimisation target, approximating its per\-step states and thus inheriting its output as an implicit quality ceiling\. We argue that this target is arbitrary \-\-\- what truly matters is the ideal result, not the intermediate path taken to reach it\. We propose IdealCache, a training\-free framework that abandons step\-wise imitation of the reference trajectory\. Instead, it anchors caching on a per\-input ensemble of  ideal trajectories constructed from candidate target results, aggregates their geometry into a single graph, and discovers optimal non\-uniform schedules via a constrained shortest path on this graph\. By decoupling from the reference process, IdealCache breaks the performance bottleneck of trajectory\-approximation; our schedules can attain near\-lossless fidelity in generation and even surpass on task\-specific metrics \(e\.g\., maintaining higher semantic consistency in image editing\)\. Without retraining, IdealCache achieves $6\.35\\times$ speedup on Qwen\-Image, $5\.84\\times$ on Qwen\-Image\-Edit, and $4\.32\\times$ on HunyuanVideo, with competitive or superior quality across tasks\.

## GenRM\-Flow: Generators are Process\-aware Reward Models in Flow Matching

**Authors:** Siming Fu; Zheming Fu; Ruizhe He; Zeyue Xue; Fengkai Liu; Yufei Jiao; Jie Huang; Xiaoxiao Ma; Xuan Yang; Lihui Luo

**ID:** 151044 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dPSEe9I3nw>) | [PDF](<https://openreview.net/pdf?id=dPSEe9I3nw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151044>)

Aligning video generation models with human preference depends critically on the quality of the reward model that scores generated videos\. Current video reward models, however, source their reward signal from a model's representational rather than generative capacity: they either repurpose vision\-language models as pixel\-space scorers, or train auxiliary scoring heads on top of frozen generator features\. The generator's actual ability to predict velocities, denoise latents, and produce videos plays no role in scoring its own generations\. We argue that this overlooks a structural property of offline preference learning\. Preference optimization objective approximating an offline preference dataset mathematically targets a strictly defined KL\-constrained optimal policy\. By isolating the reward term from this analytical solution and mapping the exact generation log\-likelihood to its flow\-matching surrogate, the empirical reward emerges deterministically as the relative difference in continuous\-time velocity\-prediction errors\. We formalize this equivalence into GenRM\-Flow, a framework where a preference\-tuned video generator inherently operates as a process\-aware reward model directly in the noisy latent space\. We demonstrate that this evaluation mechanism is structurally universal: distinct fine\-tuning objectives, whether contrastive like DPO and IPO or non\-contrastive like RWR, are merely alternative optimization pathways that share a unified empirical reward readout\. Furthermore, the extracted process reward seamlessly substitutes external VLM scorers in Flow\-GRPO\. Operating purely on native latent outputs without auxiliary RL machinery, this unified generative reward drives measurable improvements in downstream video generation\.

## Boule or Baguette? A Study on Task Topology, Length Generalization, and the Benefit of Reasoning Trace

**Authors:** William Tong; Ege Çakar; Cengiz Pehlevan

**ID:** 151781 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y4Z2nhxap9>) | [PDF](<https://openreview.net/pdf?id=Y4Z2nhxap9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151781>)

Recent years have witnessed meteoric progress in \*reasoning models\*: neural networks that generate intermediate \*reasoning traces\* \(RTs\) before producing a final output\. Despite the rapid advancement, our understanding of how RTs support reasoning, and where this paradigm fails, remain incomplete\. To promote greater clarity, we introduce PITA: a novel large\-scale dataset of over 23 million statements in propositional logic and their corresponding proofs\. As a benchmark for robust reasoning, we focus on length generalization: if a model is trained to determine truth or falsity on statements with proofs up to fixed length, how well does it generalize to statements requiring longer proofs? We propose notions of \(1\) \*task depth\* and \(2\) \*task breadth\*, which measure respectively \(1\) the number of proof steps required to solve a proposition and \(2\) the number of unique propositions within a task family\. We vary these quantities across subsets of PITA, and find that RT models generalize well on relatively \*broad\* and \*shallow\* subsets, while deteriorating on relatively \*narrow\* and \*deep\* subsets compared to non\-RT baselines\. As a controlled point of comparison, we study a separate, tractable transitive inference task that exhibits qualitatively similar behavior\. Our accompanying theory explains the scalings observed in this simpler setting, suggesting one mechanism by which breadth can favor RT models while depth can expose long\-context weaknesses\. Our findings suggest salient benefits and limitations of proof\-like reasoning traces in controlled length\-generalization settings\.

## Logit\-Conditioned Diffusion Decoding for Frozen Discrete\-Token VLMs

**Authors:** Ji Woo Hong; Hee Suk Yoon; Gwanhyeong Koo; Eunseop Yoon; SooHwan Eom; Qi Dai; Chong Luo; Chang Yoo

**ID:** 153860 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ICK4e2LwDl>) | [PDF](<https://openreview.net/pdf?id=ICK4e2LwDl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153860>)

Pre\-trained discrete\-token vision\-language models \(VLMs\) generate images by sampling sequences of codebook indices, but their visual fidelity is bounded by the VQ\-VAE decoding stage\. Prior work addresses this bottleneck by replacing the discrete tokenizer with continuous or hybrid visual token representations, or by integrating diffusion into the generation pipeline; both routes require foundation\-scale retraining or realignment of VLM, which is undesirable when the VLM's broader capabilities should be preserved or when retraining is infeasible\.  We show that such retraining is unnecessary: before each token is sampled, discrete\-token VLMs already compute a full logit distribution over the codebook, but standard decoding discards it after selecting a single index\. Under Otsu's threshold, the pre\-sampling logits of capable VLMs assign statistically meaningful probability to at least two codebook entries per token, and recovering this distribution can substantially close the fidelity gap\. We propose DCDD, a post\-hoc framework that conditions a diffusion decoder on this discarded distribution while leaving the VLM frozen\. At inference, DCDD converts the VLM's pre\-sampling logits into distribution\-weighted code vectors; during training, it uses VQ\-VAE encoder\-derived proxy logits calibrated to match the distributional statistics of the VLM's inference\-time logits\. Our diffusion decoder then maps these representations to high\-fidelity images as an optional alternative to the native VQ\-VAE decoder\. Trained on ImageNet\-1K for 50K steps, DCDD reduces reconstruction FID by 74\\% and Janus\-Pro 7B's generation FID on MJHQ\-30K by 34\\%, while semantic\-alignment across GenEval, DPG\-Bench, and WISE remain consistent\. Comparison against a diffusion model from the same backbone family applied as an image\-to\-image refiner confirms that the gain comes not from the diffusion model alone, but from conditioning on the VLM's pre\-sampling logit distribution\.

## Optimal Subgroup Discovery at Every Support Threshold

**Authors:** Lincen Yang; Qi Huang; Niki van Stein; Thomas Bäck; Matthijs van Leeuwen; Zhong Li

**ID:** 149258 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rheTYmImAU>) | [PDF](<https://openreview.net/pdf?id=rheTYmImAU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149258>)

Subgroup discovery aims to identify regions of the feature space where a target variable deviates from its marginal distribution\. A fundamental tension in this problem is the trade\-off between a subgroup's deviance and its support: small subgroups can be highly deviant but statistically meaningless, while large ones cannot deviate much by construction\. Existing methods resolve this tension by collapsing it into a single scalar quality measure, implicitly committing to one particular trade\-off and making it difficult to recover the most deviating subgroup under a user\-specified support constraint\. We instead provide, to our knowledge, the first theoretical and structural characterization of KL\-optimal subgroups under arbitrary support constraints\. Under a partition\-based generative model where the feature space decomposes into regions of homogeneous conditional law, which we call atoms, we prove that every point on the deviance\-support Pareto front is a union of whole atoms together with at most one fractional atom\. This reduces an uncountable search to a finite combinatorial problem\. Guided by this theory, we propose a simple two\-step recipe: learn a homogeneous partition, then select atoms greedily\. Across 19 benchmark datasets, this recipe finds the most deviating subgroups across a range of support thresholds, and reliably improves subgroups returned by existing methods when applied as a post\-processing step\. These results empirically validate the sufficiency and necessity of our theoretical contributions\.

## When Does Flow Matching Help Deterministic Multimodal Prediction: A Spatial Transcriptomics Study

**Authors:** Haoran Xu; Wei Yuan; Xiao Han

**ID:** 150617 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=goLFZzz8Fi>) | [PDF](<https://openreview.net/pdf?id=goLFZzz8Fi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150617>)

Flow matching is increasingly used beyond open\-ended generation, including prediction tasks whose outputs are effectively deterministic, yet it remains unclear why flow matching helps when diversity is not the objective\. We study this question in histology\-conditioned spatial transcriptomics \(ST\) prediction, a challenging sparse high\-dimensional multimodal task where direct regression with pathology foundation features is already competitive\. We disentangle several possible explanations and find that the gain does not come from simply adding a flow objective, injecting noisy target\-side states, or increasing architectural complexity\. We instead identify intermediate flow states as paired, time\-indexed target\-side signals: they contain condition\-aligned information about the target, but are mixed with source noise and residual variation\. Their benefit emerges only when this information is selectively routed into histology representations\. Guided by this mechanism, we instantiate conditional flow matching with a simple gated self\-attention to learn interactions between histology tokens and noisy ST states\. Across high\-resolution ST datasets, the model improves spatial correlation over regression and flow\-based baselines, with stable convergence and favorable scaling under larger and sparser gene panels\. These results establish a design principle for deterministic multimodal prediction: flow matching helps when intermediate target states are treated as structured cross\-modal supervision and selectively integrated into conditional representations\. Code is available at https://anonymous\.4open\.science/r/Understanding\-When\-Flow\-Matching\-Helps\-Deterministic\-Multimodal\-Prediction\-B426/\.

## Rethinking Causal Action Tokenization with Conditional Annealing in Flow Matching

**Authors:** Chenyu Zhang; Yuhang Cao; Yingxi Lu; Daru Du; Jing Shao; Jiajun Liu; Ruoqu Chen; liu cao; Yicheng Liu; Hang Zhao; Mengdi Xu

**ID:** 154643 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C5h9gDqAsN>) | [PDF](<https://openreview.net/pdf?id=C5h9gDqAsN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154643>)

Autoregressive Vision\-Language\-Action \(VLA\) models offer a scalable path to robot learning, yet existing action tokenizers treat tokenization as a compression problem, producing representations that are semantically misaligned with the autoregressive backbone\. We propose CATok, a causal action tokenizer that reframes tokenization as a causally structured generative process\. CATok introduces a conditional annealing mechanism that extracts action tokens by progressively annealing a flow\-matching process: each token is conditioned on all preceding tokens and encodes the residual reconstruction signal at a specific noise level, establishing a coarse\-to\-fine causal token space whose generative semantics are structurally aligned with autoregressive modeling\. A token\-conditioned flow\-matching decoder built on Multimodal Diffusion Transformer \(MMDiT\) reconstructs continuous action chunks from these discrete tokens with the precision of hybrid diffusion\-head architectures\. This discrete bottleneck enforces knowledge insulation by design, cleanly separating high\-level semantic reasoning from low\-level motor execution without requiring explicit attention masking\. Extensive evaluations across three simulation benchmarks demonstrate that CATok consistently surpasses existing tokenization methods in both reconstruction fidelity\-compression tradeoff and inference efficiency, while improving VLA task success rate, establishing a high\-performance, scalable foundation for purely autoregressive VLA systems\. Our project page is available at https://causalactiontokenizer\.github\.io\.

## DSSA: Dynamic Sparse Semantic Anchoring for Purifying Protective Perturbations against Diffusion Models

**Authors:** Weiwei Tan; Rui Wang; Lihua Jing; Yanjun Zhang; Runbo Li; Zhishen Wang; Leo Yu Zhang

**ID:** 153253 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=McpuicfpXa>) | [PDF](<https://openreview.net/pdf?id=McpuicfpXa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153253>)

The rapid proliferation of personalization techniques in Stable Diffusion has driven the widespread deployment of adversarial perturbations as a protective measure against unauthorized data mimicry\. Existing diffusion\-based purification methods primarily rely on the noising and denoising paradigm and have proven somewhat effective in neutralizing these protections\. However, they suffer from a severe trade\-off between purification efficacy and perceptual fidelity, especially under large perturbation budgets\. To mitigate this problem, in this paper, we propose Dynamic Sparse Semantic Anchoring \(DSSA\), a novel purification framework\. By starting the reverse denoising process from pure Gaussian noise, DSSA removes the initial adversarial perturbations and circumvents the dilemma of selecting an optimal noising level\. To prevent the loss of original semantics caused by pure noise generation, we propose a dynamic sparse anchoring strategy that directly integrates sparse pixels from the adversarial sample to guide the reconstruction\. Additionally, we design a perception\-guided early\-stopping mechanism to prevent the perturbation resurgence caused by this direct pixel integration\. Extensive experiments across diverse datasets and protection schemes demonstrate that our method consistently outperforms existing baselines, achieving state\-of\-the\-art performance in efficacy and fidelity, successfully neutralizing even advanced adaptive protections\.

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

## LAFP: Preserving Latent Action Structure in Latent Policy Learning via Flow Matching

**Authors:** Jiexi Lyu; Xi zhou Bu; Qingqiu Huang; Chufeng Tang; Xiaoshuai Hao; Hongbo Wang; Wei Li

**ID:** 149676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oGzuQHMtXk>) | [PDF](<https://openreview.net/pdf?id=oGzuQHMtXk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149676>)

Learning high\-quality latent actions from large\-scale unlabeled videos, coupled with limited real\-world interaction data for training an action decoder, has emerged as a promising paradigm for scalable latent policy learning\. However, existing approaches typically rely on behavior cloning, which tends to collapse inherently multimodal action distributions into unimodal ones, thereby degrading the pretrained latent action structure\. While flow matching provides a potential alternative, directly applying it leads to a misalignment between latent actions and physical actions during action decoder training, due to the stochastic nature of the learned policy\. To address these, we propose Latent Action Flow Policy \(LAFP\), which leverages flow matching for latent policy learning and introduces an inference\-time interpolation mechanism to mitigate stochasticity\-induced misalignment\. Experimental results demonstrate that LAFP consistently outperforms prior methods on downstream imitation learning tasks, achieving up to 10–15\\% improvement in success rate while incurring less than 1× additional inference overhead\.

## Direct Product Flow Matching: Decoupling Radial and Angular Dynamics for Few\-Shot Adaptation

**Authors:** Hongxu Chen; Yanghao Wang; Bowei Zhu; Hongxiang Li; Ziqi Jiang; Zhen Wang; Lin Li; Rui Liu; Long Chen

**ID:** 149331 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qtVzcDdIqD>) | [PDF](<https://openreview.net/pdf?id=qtVzcDdIqD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149331>)

Recent flow matching \(FM\) methods improve the few\-shot adaptation of vision\-language models, by modeling cross\-modal alignment as a continuous multi\-step flow\. In this paper, we argue that existing FM methods are inherently constrained by incompatible geometric priors on pre\-trained cross\-modal features, resulting in suboptimal adaptation performance\. We first analyze these methods from a polar decomposition perspective \(\\ie, radial and angular sub\-manifolds\)\. Under this new geometric view, we identify three overlooked limitations in them: \\textit\{1\) Angular dynamics distortion\}: The radial\-angular coupling induces non\-uniform speed on the angular sub\-manifold, leading to regression training difficulty and extra truncation errors\. \\textit\{2\) Radial dynamics neglect\}: Feature normalization discards modality confidence, failing to distinguish out\-of\-distribution and in\-distribution data, and abandoning crucial radial dynamics\. \\textit\{3\) Context\-agnostic unconditional flow\}: Dataset\-specific information loss during pre\-trained cross\-modal feature extraction remains unrecovered\. To resolve these issues, we propose \\textbf\{warped product flow matching \(WP\-FM\)\}, a unified Riemannian framework that reformulates alignment on a warped product manifold\. Within this framework, we derive \\textbf\{direct product flow matching \(DP\-FM\)\} by introducing a constant\-warping metric, which yields a decoupled cylindrical manifold \(\\ie, direct product manifold\)\. DP\-FM enables independent radial evolution and constant\-speed angular geodesic transport, effectively eliminating angular dynamics distortion while preserving radial consistency\. Meanwhile, we incorporate classifier\-free guidance by conditioning the flow on the pre\-trained VLMs' hidden states to inject missing dataset\-specific information\. Extensive results across 11 benchmarks have demonstrated that DP\-FM achieves a new state\-of\-the\-art for multi\-step few\-shot adaptation\.

## Aligning Flow Map Policies with Optimal $Q$\-Guidance

**Authors:** Christos Ziakas; Alessandra Russo; Joey Bose

**ID:** 149374 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qXke3MFbyG>) | [PDF](<https://openreview.net/pdf?id=qXke3MFbyG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149374>)

Generative policies based on expressive model classes, such as diffusion and flow matching, are well\-suited to complex control problems with highly multimodal action distributions\. Their expressivity, however, comes at a significant inference cost: generating each action typically requires simulating many steps of the generative process, compounding latency across sequential decision\-making rollouts\. We introduce flow map policies, a novel class of generative policies designed for fast action generation by learning to take arbitrary\-size jumps\-\-\-including one\-step jumps\-\-\-across the generative dynamics of existing flow\-based policies\. We instantiate flow map policies for offline\-to\-online reinforcement learning and formulate online adaptation as a trust\-region optimization problem that improves the critic's $Q$\-value while remaining close to the offline policy\. We theoretically derive Flow Map $Q$\-Guidance Training \(FMQ\), a principled closed\-form learning target that is optimal for adapting offline flow map policies under a critic\-guided trust\-region constraint\. We further introduce $Q$\-Guided Beam Search \(QGBS\), a stochastic flow\-map sampler that combines renoising with beam search to enable iterative inference\-time refinement\. Across $12$ challenging robotic manipulation and locomotion tasks from OGBench and RoboMimic, FMQ achieves state\-of\-the\-art performance in offline\-to\-online RL, outperforming the previous one\-step policy MVP by a relative improvement of $21\.3$% on the average success rate\.

## The Design Space of Tri\-Modal Masked Diffusion Models

**Authors:** Louis Bethune; Victor Guilherme Turrisi da Costa; Bruno Mlodozeniec; Pau Rodriguez; Lokesh Boominathan; Nikhil Bhendawade; Amitis Shidani; Joris Pelemans; Theo X\. Olausson; R Devon Hjelm; Paul Dixon; Joao Monteiro; Pierre Ablin; Vishnu Banna; Arno Blaas; Nick Henderson; Kari Noriy; Dan Busbridge; Marco Cuturi; Joshua Susskind; Irina Belousova; Luca Zappella; Russell Webb; Jason Ramapuram

**ID:** 153185 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NBUCuy2uaq>) | [PDF](<https://openreview.net/pdf?id=NBUCuy2uaq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153185>)

Discrete diffusion models have emerged as strong alternatives to autoregressive language models, with recent multimodal work either finetuning unimodal diffusion bases or distilling autoregressive backbones for bi\-modal generation\. Diverging from these approaches, we introduce the first tri\-modal \\gls\{mdm\} \\emph\{pretrained from scratch\} on text, image\-text, and audio\-text data, where all generation tasks are learned simultaneously within a single model\. We systematically study the design space governing stability and efficiency at scale: we conduct the first empirical characterization of the critical batch size $B\_\{\\text\{crit\}\}$ under the SDE reparameterization of AdamW, and introduce a drift\-\-horizon interpolation parameter $\\gamma$ that balances gradient noise reduction and optimization horizon when scaling the token budget\. We derive multimodal scaling laws and ablate modality mixing ratios, noise schedules, and anti\-masking\. Lastly, we pretrain a 3B model on 6\.4T tokens, achieving competitive results in text generation, text\-to\-image, and text\-to\-speech\.

## Cylindrical Geodesic Flow Matching for Quasiperiodic Physiological Signal Transformation

**Authors:** Onur Selim Kilic; Afra Nawar; Cem O Yaldiz; Michael J Cho; Ahmet R Emirdagi; Demet Tangolar; Amirali Aghazadeh; Amit J Shah; Omer T Inan

**ID:** 155983 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1NmpaqEwkP>) | [PDF](<https://openreview.net/pdf?id=1NmpaqEwkP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155983>)

Paired translation between quasiperiodic physiological waveforms \(i\.e\., recovering a target oscillatory signal from the source\) is central to the interpretation of cardiovascular signals derived from wearables placed at different body locations\. This source\-to\-target mapping in these problems carries inherent geometric structure: the phase wraps around the cycle and must be treated as a circular variable, the amplitude remains strictly positive, and the beat\-to\-beat alignment can drift unpredictably across cycles and subjects\. While deep neural networks have been used for phase estimation and complex\-valued signal modeling, prior work does not explicitly learn phase transport between paired signals\. Consequently, neither endpoint\-supervised regression nor the standard affine path used in flow matching accounts for this phase\-\-amplitude structure\. We introduce \\emph\{cylindrical geodesic flow matching\} for paired cardiovascular waveform translation\. We show that the standard affine path used in flow matching distorts intermediate amplitude and instantaneous frequency when interpolating between quasiperiodic signals; replacing it with a closed\-form geodesic on the phase\-\-amplitude cylinder eliminates these artifacts and converts each training pair into dense, geometry\-consistent velocity supervision\. On zero\-shot photoplethysmography and limited\-support seismocardiography adaptation benchmarks, our method consistently outperforms interpolation baselines and matches or exceeds direct supervised prediction, reducing Hilbert Transform, $L\_2$, and Dynamic Time Warping distance by up to $\{\\sim\}15\\%$ over the strongest competing baseline\. These results suggest that bridge geometry is a critical inductive bias for flow matching on oscillatory signal translation\.

## Fast Organic Crystal Structure Prediction with Unit Cell Flow Matching

**Authors:** Alston Lo; Luka Mucko; Austin Cheng; Andy Cai; Alastair J Price; Wojciech Matusik; Alan Aspuru\-Guzik

**ID:** 153596 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KD4i8hE0Rc>) | [PDF](<https://openreview.net/pdf?id=KD4i8hE0Rc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153596>)

Organic crystal structure prediction \(CSP\) is a requirement for computational modelling of organic solids\. Traditional CSP is accurate but relies on exhaustive search, costing several CPU\-years per molecule\. Generative models such as OXtal dramatically reduce this cost by sampling stable organic crystal structures directly\. However, OXtal forgoes explicit lattice parametrization in favour of modelling large crops of the bulk material with expensive triangle layers, which can incur a computational cost of minutes per molecule\. In this paper, we reduce this to seconds with Clari, a large\-scale flow matching model that generates redundancy\-free unit cells and replaces triangle layers with pure pair\-bias attention\. Clari requires only atom types and bonds as input and does not need an RDKit\-sanitizable input molecule, which expands its applicability to challenging chemistries such as fullerenes, metal complexes, and atom clusters\. We further ablate key design choices such as auxiliary losses, timestep distributions, noise priors, and self\-conditioning\. Because Clari also models explicit hydrogens, it supports inference\-time scaling via direct energy ranking, without any decoration or relaxation step\. On OXtal's aggregated test set, we generate 1000 crystals and select the best 30 ranked by energy, surpassing OXtal's solve rate while obtaining a speedup of $5$\-$8\\times$\. We also introduce a new test split of diverse and complex molecules for future benchmarking\. Our contributions enable CSP within seconds, making large\-scale virtual screening of organic solids practical\.

## Diffusion Tree Search for Inference Time Adaptation of Material Foundation Models

**Authors:** Daniel Levy; Vineet Jain; Tara Akhound\-Sadegh; Oumar Kaba; Siamak Ravanbakhsh

**ID:** 151930 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WlhX6hq6Jo>) | [PDF](<https://openreview.net/pdf?id=WlhX6hq6Jo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151930>)

Diffusion\-based foundation models for crystal generation have become competent priors over the manifold of plausible materials, but turning that prior into generation of promising candidates requires targeting stability while balancing several conflicting properties at once\. Fine\-tuning is expensive and produces a new model for every new objective, while differentiable guidance is not applicable to many real\-world rewards\. We instead adapt these models at \\emph\{inference time\} using Diffusion Tree Search \(DTS\), a Monte Carlo tree search procedure over the denoising trajectory\. We make two technical contributions on top of DTS that are particularly relevant for AI\-for\-science applications\. First, we show how to use existing property\-conditional foundation models \(e\.g\., classifier\-free guidance variants of MatterGen\) as guided proposals inside DTS, with importance\-corrected backups and selection that keep the unconditional base model as the target distribution\. Second, we extend DTS to multi\-objective sampling by maintaining per\-objective soft value estimates and selecting expansions through a sampled scalarization, so a single search produces samples spanning a Pareto front while sharing computation across preferences\. We instantiate both adaptations on de novo crystal generation: single\-objective stability search with different underlying models, conditional generation of crystals belonging to rare space groups, and a multi\-objective tasks using a pretrained conditional model\. Across these, DTS\-based inference\-time adaptation improves stability rates and Pareto\-front quality without modifying the base models\.

## Nonparametric Estimation of a Factorizable Density using Diffusion Models

**Authors:** Hyeok Kyu Kwon; Dongha Kim; Ilsang Ohn; Minwoo Chae

**ID:** 156671 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156671>)

In recent years, diffusion models, and more generally score\-based deep generative models, have achieved remarkable success in various applications, including image and audio generation\. In this paper, we view diffusion models as an implicit approach to nonparametric density estimation and study them within a statistical framework to analyze their surprising performance\. A key challenge in high\-dimensional statistical inference is leveraging low\-dimensional structures inherent in the data to mitigate the curse of dimensionality\. We assume that the underlying density exhibits a low\-dimensional structure by factorizing into low\-dimensional components, a property common in examples such as Bayesian networks and Markov random fields\. Under suitable assumptions, we demonstrate that an implicit density estimator constructed from diffusion models adapts to the factorization structure and achieves the minimax optimal rate with respect to the total variation distance\. In constructing the estimator, we design a sparse weight\-sharing neural network architecture, where sparsity and weight\-sharing are key features of practical architectures such as convolutional neural networks and recurrent neural networks\.

## Align $\\&amp;$ Invert: Solving Inverse Problems with Diffusion and Flow\-based Models via Representation Alignment

**Authors:** Loukas Sfountouris; Giannis Daras; Paris Giampouras

**ID:** 148851 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uh5JsNmPig>) | [PDF](<https://openreview.net/pdf?id=uh5JsNmPig>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148851>)

Enforcing alignment between the internal representations of diffusion or flow\-based generative models and those of pretrained self\-supervised encoders has recently been shown to provide a powerful inductive bias, improving both convergence and sample quality\. In this work, we extend this idea to inverse problems, where pretrained generative models are employed as priors\. We propose applying  representation alignment \(Repa\) between diffusion or flow\-based models and a DINOv2 visual encoder, to guide the reconstruction process at inference time\. Although ground\-truth signals are unavailable in inverse problems, we empirically show that aligning model representations of approximate target features can substantially enhance reconstruction quality and perceptual realism\. We provide theoretical results showing \(a\) that  Repa regularization can be viewed as a variational approach for minimizing a divergence measure in the DINOv2 space, and \(b\) how under certain regularity assumptions Repa updates steer the latent diffusion states toward those of the clean image\.  We integrate Repa  into multiple state\-of\-the\-art inverse problem solvers, and provide extensive experiments on super\-resolution, box inpainting, Gaussian deblurring, and motion deblurring confirming that our method consistently improves reconstruction quality, while also reducing the number of discretization steps required to reach the same performance level as the underlying solver\.

## Blocked Gibbs meets Diffusion Transformers: Unsupervised Learning for Constraint Optimization

**Authors:** Yudong Will Xu; Wenhao Li; Xiaoyu Wang; Scott Sanner; Elias Khalil

**ID:** 148271 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z5oDNb2lwJ>) | [PDF](<https://openreview.net/pdf?id=z5oDNb2lwJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148271>)

Diffusion models have shown promise in learning to solve constraint optimization problems\. However, they are mostly restricted to problems with binary variables and rely on graph neural networks, hindering their application to a broader range of problems such as those with general discrete variables or constraint structures that necessitate global rather than local reasoning\. We investigate the use of Diffusion Transformers to address the aforementioned limitations\. A naive implementation performs poorly due to a fundamental mismatch between the standard diffusion process and constraint solving: while the former applies \*small, incremental denoising\* across \*all\* variables, the latter requires \*substantially altering specific subsets of variables\* to attain feasibility or optimality\. Our method, \*\*Blo\*\*cked \*\*G\*\*ibbs \*\*Di\*\*ffusion \*\*T\*\*ransformer \(BloGDiT\), is the first to address this limitation by replacing standard joint Gaussian denoising with Blocked Gaussian denoising\.  BloGDiT uses iterative block resampling and anneals the block size over time to facilitate large, targeted edits within a block of variables\.  Across Sudoku, Graph Coloring, Maximum Independent Set, and MaxCut, BloGDiT matches or outperforms existing methods, demonstrating that blocked Gibbs\-style diffusion provides a highly effective inductive bias for Transformer\-based constraint satisfaction and optimization\.

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

## Feature Information Dynamics in Diffusion

**Authors:** Jia\-Shu Pan; Tao Zhang; Yufei Huang; Yanjun Sheng; Tailin Wu

**ID:** 152004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WDfD9WTJeJ>) | [PDF](<https://openreview.net/pdf?id=WDfD9WTJeJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152004>)

Diffusion models generate data through a continuum of denoising problems, and are widely observed to reveal coarse structure before fine detail\. Yet, this intuition is mostly empirical and qualitative\. We introduce \\emph\{feature information dynamics\}, an information\-theoretic framework for localizing when a feature is generated during diffusion\. Using the I\-MMSE identity, we connect the rate of feature mutual information change to a gap between optimal unconditional and feature\-conditional denoising losses, yielding practical estimators for feature information density\. We further develop a chained decomposition that separates shared from incremental information in a feature hierarchy\. We use this framework first to quantitatively confirm spectral autoregression in pixel diffusion, and then to extend the analysis beyond frequency: under a class$\\to$mask$\\to$Canny conditioning chain, the per\-feature information densities differ across pixel, SDVAE, VAVAE, and RAE, exposing fundamental differences between these representations\.

## A Mean\-Field Framework for Inference\-Time Distributional Control of Diffusion Models

**Authors:** Samuel Howard; Nikolas Nüsken

**ID:** 150099 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=khIk1adodl>) | [PDF](<https://openreview.net/pdf?id=khIk1adodl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150099>)

Diffusion models are increasingly used as controllable samplers, whose generations can be steered at inference time according to a chosen reward function\. While such rewards are typically defined on individual samples, for many applications it is desirable to steer according to distribution\-level rewards, for example to calibrate with population\-level information or to encourage diversity\. In both cases, simply incorporating the reward gradient into the dynamics, while often effective, comes with few theoretical guarantees on the sampled distribution\. For pointwise rewards, recent work has therefore sought to develop a principled framework for targeting a prescribed tilted distribution using particle reweighting\. However, an analogous theoretically\-grounded approach for distributional rewards is currently lacking\. In this work, we formulate inference\-time distributional control as targeting a tilted measure under a mean\-field framework, and derive a weighted interacting particle scheme to target it in a principled manner\. Our framework recovers pointwise\-reward steering as a special case, while providing a theoretical foundation for existing batch\-level steering methods\. Empirically, we verify that the procedure correctly targets the prescribed distribution in tractable low\-dimensional settings, and investigate its behaviour in higher\-dimensional protein conformation tasks\.

## Chance\-constrained Flow Matching for High\-Fidelity Constraint\-aware Generation

**Authors:** JINHAO LIANG; Yixuan Sun; Anirban Samaddar; Sandeep Madireddy; Ferdinando Fioretto

**ID:** 150205 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jwaNz2c281>) | [PDF](<https://openreview.net/pdf?id=jwaNz2c281>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150205>)

Generative models excel at synthesizing high\-fidelity samples from complex data distributions, but they often violate hard constraints arising from physical laws or task specifications\. A common remedy is to project intermediate samples onto the feasible set at each sampling step\. However, repeated projection can disrupt the learned sampling dynamics because this feasible set is defined for ''clean'' samples rather than noisy intermediate states\. Thus, recent studies first estimate ''clean'' samples and then project them to the feasible set, but this increases algorithmic complexity and accumulates errors across steps\.  To address these issues, this paper proposes Chance\-constrained Flow Matching \(CCFM\), a training\-free method that formulates constraint enforcement during sampling as stochastic optimization while retaining the hard\-constraint feasibility guarantee of projection\-based methods\. By avoiding direct projection of noisy intermediate states onto the clean\-sample feasible set, CCFM mitigates the distributional distortion\. Unlike approaches that first estimate and project ''clean'' samples, CCFM avoids complex multi\-stage procedures\. Experiments show that CCFM outperforms current state\-of\-the\-art constrained generative models in modeling complex physical systems governed by partial differential equations, molecular docking problems, and physics\-informed motion generation, delivering superior feasibility and fidelity\.

## BASTION: Budget\-Aware Speculative Decoding with Tree\-structured Block Diffusion Drafting

**Authors:** Soowon Oh; Nam Cao; Yujin Kim; Hojung Jung; Huzama Ahmad; Sangmin Bae; Se\-Young Yun

**ID:** 151263 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bggNOfjAjb>) | [PDF](<https://openreview.net/pdf?id=bggNOfjAjb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151263>)

Block\-diffusion drafters have recently shown strong potential for speculative decoding by predicting multiple future\-token distributions in a single forward pass\. To exploit these parallel predictions, tree\-based verification can check multiple plausible continuations instead of committing to a single greedy draft path, often increasing the number of accepted tokens per decoding cycle\. However, existing tree\-based approaches typically rely on fixed tree topologies or static verification budgets, even though the best budget depends on the local draft distribution, context length, target model, and hardware runtime\. We propose a system\-aware adaptive tree framework for block\-diffusion speculative decoding\. At each decoding cycle, our method builds a tree toward high\-probability draft paths and selects the verification budget that maximizes an online speedup estimate\. This estimate combines a drafter\-based acceptance surrogate with an analytical verifier\-latency model calibrated from observed runtimes\. The framework requires no additional training of the drafter or target model and preserves the target model's decoding rule\. Across target models, benchmarks, decoding temperatures, and GPU platforms, our method achieves up to a $6\.93\\times$ wall\-clock speedup over standard autoregressive decoding\. This corresponds to approximately 40% higher speedup than Dflash, the strongest existing block\-diffusion drafter, and is obtained without per\-setting budget tuning\.

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

## Kernel\-Gradient Drifting Models

**Authors:** Maria Esteban\-Casadevall; Jorge Carrasco\-Pollo; Max Welling; Jan\-Willem van de Meent; Erik Bekkers; Floor Eijkelboom

**ID:** 151352 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bBH7f4QAQn>) | [PDF](<https://openreview.net/pdf?id=bBH7f4QAQn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151352>)

We propose kernel\-gradient drifting, a one\-step generative modeling framework that replaces the fixed Euclidean displacement direction in drifting models with directions induced by the kernel itself\. Standard drifting is attractive because it enables fast, high\-quality generation without distilling a large pretrained diffusion model, but its theory is currently understood mainly for Gaussian kernels, where the drift coincides with smoothed score matching and is identifiable\. Our gradient\-based reformulation exposes this score\-based structure for general kernels: the resulting drift is the score difference between kernel\-smoothed data and model distributions, yielding identifiability for characteristic kernels and a smoothed\-KL descent interpretation of the drifting dynamics\. Since kernel gradients are intrinsic tangent vectors, the same construction extends naturally to Riemannian manifolds and to discrete data via the Fisher\-Rao geometry of the probability simplex\. Across spherical geospatial data, promoter DNA and molecule generation, kernel\-gradient drifting enables state\-of\-the\-art one\-step generation beyond the Euclidean setting without distillation\.

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

## Reusable Conditional Resampling via Flow Matching for Constraint\-Based Causal Discovery

**Authors:** SHUNYU ZHAO; Yanfeng Yang; Shuai Li; Kenji Fukumizu

**ID:** 153712 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JLCT3nT7eW>) | [PDF](<https://openreview.net/pdf?id=JLCT3nT7eW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153712>)

Constraint\-based causal discovery requires a large number of conditional independence \(CI\) tests\. In nonlinear and high\-dimensional settings, generative CI methods offer strong expressive power, but often suffer from high per test cost and limited reusability across the many query dependent conditional resampling tasks arising in graph search\. We propose a generative nonlinear CI testing and graph search framework for PC\-style causal discovery\. First, we develop the Flow Matching based Conditional Independence Test \(FMCIT\), which combines joint flow matching modeling with conditional imputation to reformulate generative CI testing from query specific conditional modeling into a conditional resampling process that can be reused across queries\. This allows the same generative model to repeatedly generate the randomized copies required by CI testing throughout the entire graph search procedure\. We then introduce GPC‑FMCIT, which embeds FMCIT into a guided PC pipeline with screening, guidance, refinement, and orientation\. By using low\-cost screening to shrink the search space, constructing edge\-specific candidate conditioning sets from local graph structure, and invoking FMCIT only in a budget\-controlled refinement stage, GPC\-FMCIT reduces both the deployment cost of individual nonlinear CI queries and the overall query complexity\. Experiments on synthetic datasets and real\-data analyses show that the proposed method achieves a strong accuracy\-\-efficiency trade\-off under nonlinear and high\-dimensional structures\. Overall, our results suggest that, through the joint design of reusable conditional resampling and controlled graph search, generative nonlinear CI testing can become a practical system level module for high‑dimensional PC‑style causal discovery\.

## Systematic Hazard Sampling: Minimal\-Variance Inference for Discrete Diffusion and Flow Models

**Authors:** Seunghwan Jang; Wonje Jeung; SooJean Han

**ID:** 151432 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=al6oaoCR5A>) | [PDF](<https://openreview.net/pdf?id=al6oaoCR5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151432>)

Uniform\-noise discrete diffusion and flow models generate sequences non\-autoregressively through iterative, context\-dependent token replacements\. However, these models are typically formulated as time\-inhomogeneous CTMC/DTMC processes, sampled using independent Bernoulli change decisions per discretization step\. This induces Poisson\-binomial variance in per\-position jump counts that grows with the number of required edits, leading to the common under\-editing \(residual noise\) and over\-editing \(cascading substitutions\) failure modes that degrade sample quality, especially under tight discretization budgets\. We identify this sampler\-induced variance as an orthogonal source of degradation, distinct from model\-side errors and addressable purely at inference time\. We propose Systematic Hazard Sampling \(SHS\), a training\-free, drop\-in, and hyperparameter\-free inference principle for any sampler that admits a stay\-vs\.\-replace decomposition\. SHS models per\-token edits as events driven by cumulative hazard \(CTMC\) or jump mass \(DTMC\) and triggers an edit whenever this quantity exceeds unit\-spaced thresholds with a single random phase per position\. For any fixed cumulative mass, this preserves the expected jump count while achieving the minimum conditional variance possible among unbiased integer estimators \(at most \\\(1/4\\\)\), without altering per\-jump destination sampling\. Experiments on four uniform\-noise discrete diffusion and flow language models spanning $\\sim$110M to $\\sim$3B parameters show that SHS consistently improves sample quality across NFE budgets, with the gains growing with NFE as predicted by the variance gap\.

## AegisFlow: Training\-free Non\-myopic Path\-safe Guided Flow Matching

**Authors:** Kunpeng Liu; Boshi Zhang; Keyou You

**ID:** 149715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nyQ14lMMIK>) | [PDF](<https://openreview.net/pdf?id=nyQ14lMMIK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149715>)

Pretrained generative models, such as diffusion and flow matching models, have demonstrated exceptional capabilities in synthesizing high\-quality data\. However, steering their generative trajectories to satisfy strict constraints—such as identity preservation in image editing or obstacle avoidance in robotics—remains fundamentally challenging\. While recent training\-free guidance methods enforce path\-safety, they rely heavily on min\-norm controllers that only account for immediate constraint satisfaction\. These myopic approaches often yield suboptimal trajectories that hover dangerously close to the boundary, severely restricting the model's ability to optimize toward its target\. In this paper, we propose AegisFlow, a training\-free, non\-myopic path\-safe guidance framework that recasts guided generation as a safety\-critical optimal control problem with global scope\. By integrating a time\-varying barrier function directly into the global cost functional, AegisFlow naturally enforces constraints along the entire generative path\. To compute the global optimal control, we derive a tractable, mathematically grounded approximation of the Hamilton\-Jacobi\-Bellman \(HJB\) equation\. Comprehensive experiments demonstrate that AegisFlow outperforms state\-of\-the\-art methods across text\-guided image manipulation and robotic planning, establishing a significantly better trade\-off between target alignment and constraint satisfaction\.

## Intrinsic Selection and Particle Resampling for Inference\-Time Scaling Beyond Domain Verifiability

**Authors:** Giorgio Giannone; Mustafa Eyceoz; Shabana Baig; Shivchander Sudalairaj; Anna C Doris; Faez Ahmed; Akash Srivastava; Kai Xu

**ID:** 149807 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nCaIsLevLx>) | [PDF](<https://openreview.net/pdf?id=nCaIsLevLx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149807>)

Inference\-Time Scaling \(ITS\) has largely succeeded in verifiable domains like math and coding, where cheap verification enables scalable output selection\. However, extending ITS to tasks prone to systematic failure \- driven by faulty initial assumptions or unmet multidimensional constraints \- typically relies on costly external solvers or brittle, model\-based verifiers\. Our key insight is that the intrinsic statistics of parallel sample sets, specifically length\-adjusted tail entropy, provide a robust discriminative signal for solution quality without access to ground truth\. Crucially, these statistics serve as a difficulty gate for adaptive compute allocation, dynamically routing problems across scaling regimes\. First, Intrinsic Selection \(iS\) ranks candidates post\-hoc, matching consensus\-based algorithms across three domains and improving engineering design selection by 20 % over pass@1 baselines\. Second, Intrinsic Particle Filtering \(iPF\) generalizes this to step\-level resampling, guiding generation toward high\-confidence reasoning trajectories to improve pass@1 by 6\.1 points on average on hard math problems\. Finally, Particle Distillation \(dPF\) injects privileged guidance via early logit blending and KL\-guided resampling, steering generation past systematic reasoning errors to satisfy expert rubrics, yielding up to 26\.5 % gains on complex clinical responses\. Our pipeline applies seamlessly across broad\-purpose, domain\-specialized, and multimodal architectures, successfully extending ITS to open\-ended domains without requiring trained reward models or exact verification\.

## StyleRoute: Diffusion Style Transfer via Regional Routing and Conflict\-aware Projection

**Authors:** Xunhao Lin; Yu Sun; Xinpeng Ding; Fei Gao; Maoying Qiao; Lihuo He; Nannan Wang

**ID:** 155545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kfUQ7cPeY>) | [PDF](<https://openreview.net/pdf?id=4kfUQ7cPeY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155545>)

Diffusion\-based style transfer faces two fundamental questions: which regions should prioritize structure preservation and which are more amenable to texture transfer, namely the “where” question, and how to achieve such region\-aware stylization without corrupting content, namely the “how” question\. Existing methods typically rely on a single mechanism to control local structure, local texture, and global style together, making them fragile in region\-rich scenes: uniform stylization strength may distort salient objects, while conservative control leaves texture\-dominant regions under\-stylized\.  We propose StyleRoute, a region\-aware diffusion stylization framework that explicitly separates where style should be transferred from how the transfer should be optimized\. For the where question, StyleRoute infers a region\-level routing variable from structure confidence, texture confidence, and route disagreement, deciding per region whether to protect structure or to inject texture\. For the how question, StyleRoute coordinates the regional routing with diffusion optimization to guide global style evolution, suppress style\-content conflicts, and stabilize coarse layout\.  Together, StyleRoute transforms the implicit style\-content trade\-off into an explicit, interpretable, and region\-aware transfer process\. Experiments on diverse content\-style pairs show consistent improvements over prior diffusion\-based and region\-matching stylization methods\. Code will be released\.

## Reweighted Flow Matching via Unbalanced Optimal Transport for Label\-free Long\-tailed Generation

**Authors:** Hyunsoo Song; Minjung Gim; Jaewoong Choi

**ID:** 151660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z0OhxD9sBT>) | [PDF](<https://openreview.net/pdf?id=Z0OhxD9sBT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151660>)

Flow matching has recently emerged as a powerful framework for continuous\-time generative modeling\. However, when applied to long\-tailed distributions, standard flow matching frameworks are susceptible to \*majority bias\*, over\-representing dominant modes at the expense of tail\-class fidelity and distributional accuracy\. In this work, we propose \*\*\*Unbalanced Optimal Transport Reweighted Flow Matching \(UOT\-RFM\)\*\*\*, a novel framework for generative modeling under class\-imbalanced \(long\-tailed\) distributions that operates without any class label information\. Our method constructs the conditional vector field using mini\-batch Unbalanced Optimal Transport \(UOT\) and mitigates majority bias through a principled inverse reweighting strategy\. The reweighting relies on a \*label\-free majority score\*, defined as the density ratio between the target distribution and the UOT marginal\. This score quantifies the degree of majority based on the geometric structure of the data, without requiring class labels\. By incorporating this score into the training objective, UOT\-RFM theoretically recovers the target distribution with first\-order correction \($k=1$\) and empirically improves tail\-class generation through higher\-order corrections \($k &gt; 1$\)\. Our model outperforms existing flow matching baselines on long\-tailed benchmarks, while maintaining competitive performance on balanced datasets\.

## Seeing the Unseen: Unified Visible–Invisible Motion for Physically Consistent Video Generation

**Authors:** Mingyang Bao; Fangda Ye; Xihao Chen; Bobo Li; Xiangtai Li; Shengqiong Wu

**ID:** 149881 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mXUs8DCmoQ>) | [PDF](<https://openreview.net/pdf?id=mXUs8DCmoQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149881>)

Recent advances in video generation have achieved impressive visual quality, yet they often fail to produce physically consistent dynamics due to the lack of explicit modeling of underlying physical processes\. Existing approaches either rely on simulators with strong assumptions or use coarse semantic guidance, and further struggle to effectively inject physical priors into generation models\. In this work, we propose Seeing the Unseen, a unified framework for physics\-grounded video generation\. Our approach decomposes the problem into two stages: learning physical dynamics and injecting them into video synthesis\. First, we introduce a lightweight Particle\-based Graph Dynamics Simulator \(PGDS\) that learns generalizable physical interactions from data and predicts plausible 3D motion trajectories\. Second, we propose a Visible–Invisible Motion Field \(VIMF\) that captures both motion observable in the input frame and motion that emerges over time due to object dynamics\. This representation enables more complete and structured motion guidance compared to conventional physical signals\. By integrating these trajectories into a diffusion\-based generator, our method produces videos that are both visually coherent and physically consistent\. Extensive experiments demonstrate improved motion accuracy, interaction consistency, and reduced physical artifacts compared to strong baselines\.

## Implicit Drifting Policy: One\-Step Action Generation via Conditional Expert Geometry

**Authors:** Zemin Yang; Yaoyu He; Yiming Zhong; Yuhao Zhang; Xinge ZHU; Yao Mu; Qingqiu Huang; Yuexin Ma

**ID:** 153972 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H7VRIbdX6F>) | [PDF](<https://openreview.net/pdf?id=H7VRIbdX6F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153972>)

Generative action policies based on diffusion or flow matching excel in behavior cloning, yet their iterative sampling is prohibitive for high\-frequency robot control\. While recent one\-step formulations alleviate this latency, they inevitably discard the intermediate trajectory evolution that provides crucial action correction\. Directly recovering this mechanism by explicitly estimating a training\-time drifting field is mathematically ill\-posed due to extreme conditional demonstration sparsity\. We introduce \*\*Implicit Drifting Policy \(IDP\)\*\* , a one\-step imitation learning framework that brings the training\-time correction of Drifting into policy learning without explicit vector field estimation\. IDP extracts a \*\*conditional expert geometry\*\* from the local variation of observation\-similar expert actions, and compares it against a global \*\*reference geometry\*\* to isolate condition\-specific constraints\. This local geometric structure adaptively weights a scalar potential objective\. Combined with an expert\-proximal terminal evaluation, IDP directly enforces manifold constraints on the one\-step generator during training\. Extensive evaluations across 2D, 3D, and real\-world manipulation tasks show IDP effectively maintains adherence to valid action manifolds, improving upon explicit drifting methods and achieving competitive performance with strong one\-step baselines\.

## Mitigating Compounding Errors in Online Reinforcement Learning via Optimal Transport Regularized Flow Matching

**Authors:** Boxiang Tao; Lei Guo; Bin Wang; Zexin Wang; HongboDou

**ID:** 151330 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bKuPATwnfb>) | [PDF](<https://openreview.net/pdf?id=bKuPATwnfb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151330>)

Model\-based reinforcement learning \(MBRL\) promises high sample efficiency but is often crippled by compounding model errors: small prediction inaccuracies accumulate rapidly over multi\-step rollouts, leading to biased policy optimization\. We propose FTA, a trajectory\-level generative framework using conditional flow matching \(CFM\) instead of step\-wise dynamics\. To avoid curved, energy\-inefficient paths, we introduce an optimal transport regularizer grounded in the Benamou–Brenier formula\. This regularizer minimizes kinetic energy while enforcing exact state displacement, yielding straight, low\-energy trajectories with provable linear error propagation\. Since a static generator fails in online RL due to \(i\) shifting data distributions and \(ii\) mismatch between training \(historical\) and desired \(high\-return\) conditionals, we add periodic retraining from the replay buffer and a value\-guided ODE sampler that biases generation toward high returns via the current Q\-function\. Theoretically, the regularizer drives the flow toward the Wasserstein\-2 optimal transport map, and value\-guided sampling reduces asymptotic Q\-estimate bias\. On MuJoCo benchmarks, FTA consistently outperforms strong MBRL and model\-free baselines in sample efficiency and final performance, and generalizes across tasks\. By mitigating compounding errors at the trajectory level and adapting to online shifts, FTA offers a robust, data\-efficient alternative to traditional dynamics models\.

## Learning to Deaggregate: Large\-scale Trajectory Generation with Spatial Priors

**Authors:** David Bergström; Mattias Tiger; Fredrik Heintz

**ID:** 152772 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QTykg1wwRN>) | [PDF](<https://openreview.net/pdf?id=QTykg1wwRN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152772>)

Trajectories arise in many settings, including urban mobility, transportation, and maritime traffic\. Existing generative models either offer no control over output distributions or rely on conditioning information specific to each individual trajectory, such as its origin and destination, distance, or departure time\. This sample\-specific conditioning limits controllability and ties the model to the environment where those statistics were observed\. We propose to separate \_where\_ movement occurs from \_how\_ it unfolds: regional movement is summarized by a spatial prior $\\Pi$, a marginal distribution of occupancy aggregated over many trajectories, and the generative model is trained so that samples drawn conditionally on $\\Pi$ aggregate to match it\. We call this property \_marginal consistency\_, which turns the spatial prior into a controllable input, enabling zero\-shot generation in unseen regions, cities, and even unseen domains by supplying only the target region's prior\. The Temporal Deaggregation Diffusion Model \(TDDM\) realizes this idea\. We evaluate it across four datasets spanning three continents and three modalities: multi\-modal human mobility \(Geolife\), urban taxi \(Porto, Cabspotting\), and maritime traffic \(Brest\)\. TDDM achieves improved fidelity and coverage over leading baselines and stable performance when transferred across regions, cities, and domains\.

## Quantile\-Coupled Flow Matching for Distributional Reinforcement Learning

**Authors:** Michael Groom; Victor\-Alexandru Darvariu; Lars Kunze; James Wilson; Nick Hawes

**ID:** 149618 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=okya6hL4Uh>) | [PDF](<https://openreview.net/pdf?id=okya6hL4Uh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149618>)

Unlike standard expected\-return Reinforcement Learning \(RL\), Distributional RL \(DRL\) models the full return distribution, making it better\-suited for uncertainty\-aware and risk\-sensitive decision\-making\.   Conditional Flow Matching \(CFM\) critics have recently attracted attention for modelling continuous, multi\-modal return distributions\.   Despite this interest, there remains a substantial \\textbf\{metric mismatch\}: DRL theory relies on the distributional Bellman operator being contractive in the $p$\-Wasserstein distance, yet existing CFM critics are trained with arbitrary source\-\-target couplings, so their flow\-matching losses are not Wasserstein\-aligned surrogates for matching Bellman target return distributions\.   In this work, we address this mismatch by proposing \\textbf\{FlowIQN\}, a CFM critic that sorts source and Bellman target samples within each mini\-batch to approximate the monotone optimal transport coupling, replacing arbitrary pairings with quantile\-aligned flow paths\.   We prove that the loss of our \\textbf\{quantile\-coupled\} CFM critic yields a Wasserstein\-aligned approximate projection compatible with the foundations of DRL\.   To our knowledge, FlowIQN is the first flow\-matching distributional critic with an explicit Wasserstein\-aligned projection guarantee\.   We further extend FlowIQN with shortcut models for efficient inference\.   Empirical results show that FlowIQN improves Wasserstein return\-distribution accuracy over other CFM critics\. It also yields competitive performance on offline RL benchmarks across multiple policy extraction methods, providing a theoretically grounded CFM critic that is readily compatible with DRL pipelines\.

## MFlowAudio: Efficient Text\-to\-Audio Synthesis via Mamba\-based Stateful Flow Matching

**Authors:** Hao Dai; Panyu Chen; Jagmohan Chauhan

**ID:** 152369 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZhAYHK2IA>) | [PDF](<https://openreview.net/pdf?id=TZhAYHK2IA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152369>)

Recent advancements in audio generation have been largely driven by Transformer\-based diffusion models\. However, these models suffer from  quadratic complexity of self\-attention, severely bottlenecking the long\-form audio synthesis\. To overcome this limitation, we propose MFlowAudio, a novel latent audio generation framework that synergizes the continuous\-time dynamics of Flow Matching with a custom\-designed TFMamba backbone\. TFMamba uses an innovative dual\-scan mechanism: a TimeMamba module to capture long\-range causal dependencies with linear complexity, and a FrequencyMamba module to model spectral correlations such as harmonic structures\. Exploiting this structural foundation, we formulate the Stateful Flow Matching \(SFM\) paradigm\. This framework inherently enables chunk\-wise training and streaming generation, maintaining an $\\mathcal\{O\}\(1\)$ caching complexity without incurring extra computational overhead\.  To enable fine\-grained controllable synthesis, we devise a novel guidance mechanism that neutralizes vector field collisions precipitated by on\-the\-fly semantic transitions of prompts\. Comprehensive empirical evaluations confirm that MFlowAudio yields generative fidelity on par with state\-of\-the\-art baselines while establishing significant computational efficiency, achieving an $81\.8$% acceleration in generation and facilitating perceptually seamless streaming synthesis with a constant, ultra\-low latency of $1\.8$ seconds\.   Demo:https://huggingface\.co/spaces/mflowaudio/MFlowAudio

## Compatible Likelihoods for Flow Matching on Manifolds

**Authors:** Lucas Ng; Georgios Batzolis; Mark Girolami

**ID:** 150283 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jJsQucS0Fg>) | [PDF](<https://openreview.net/pdf?id=jJsQucS0Fg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150283>)

On the simplest non\-Euclidean manifold, the 1D flat torus, we exhibit a distribution where a recently proposed extension of Riemannian flow matching is globally optimized by a velocity field that pushes samples away from the data distribution\. We trace this failure mode to a property we call compatibility; a likelihood\-based flow matching objective is compatible if its population minimizer recovers the marginal velocity field induced by the data and coupling\. We give a general condition for compatibility, apply it to existing methods, and bound the worst\-case error in terms of a residual component vanishing under compatibility\. Next, we note that existing compatible objectives put density on velocities that are infeasible on compact manifolds\. We propose an objective built from an exponential family over endpoints, with the conditional velocity as sufficient statistic, which is both compatible and supported only on feasible velocities\. This manifests as a re\-weighting of the flow matching loss which, on constant\-curvature manifolds, treats errors in flow speed and direction differently\. Empirically, our method recovers the correct velocity field on the test case, outperforms prior methods on high\-dimensional product tori, and obtains substantial NLL improvements over prior work on two of four standard spherical geospatial benchmarks at moderate runtime overhead\.

## Temporal Alignment Guidance: On\-manifold Sampling in Diffusion Models

**Authors:** Youngrok Park; Hojung Jung; Sangmin Bae; Se\-Young Yun

**ID:** 148487 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xSoJ54I1mz>) | [PDF](<https://openreview.net/pdf?id=xSoJ54I1mz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148487>)

Diffusion models have achieved remarkable success as generative models\. However, even a well\-trained model can accumulate errors throughout the generation process\. These errors become particularly problematic when arbitrary guidance is applied to steer samples toward desired properties, which often breaks sample fidelity\. In this paper, we propose a general solution to address the off\-manifold phenomenon observed in diffusion models\. Our approach leverages a time predictor to estimate deviations from the desired data manifold at each timestep, identifying that a larger time gap is associated with reduced generation quality\. We then design a novel guidance mechanism, \`Temporal Alignment Guidance' \(TAG\), attracting the samples back to the desired manifold at every timestep during generation\. Through extensive experiments, we demonstrate that TAG consistently produces samples closely aligned with the desired manifold at each timestep, leading to significant improvements in generation quality across various downstream tasks\.

## Test\-Time Sequential Steering of Diffusion Models via Preconditioned Crank\-Nicolson

**Authors:** Joel Keller; Taos Transue; Qin Li; Shih\-Hsin Wang; Bao Wang

**ID:** 153197 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N7zXHlKXnl>) | [PDF](<https://openreview.net/pdf?id=N7zXHlKXnl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153197>)

Sampling from reward\-tilted distributions enables diffusion models to satisfy task\-specific constraints without retraining\. However, existing methods either rely on gradients or struggle to explore multimodal high\-reward regions\. We introduce a new test\-time steering method for diffusion models that modifies the reverse denoising process to incorporate reward information directly\. At each step, we propose a Metropolis–Hastings–corrected denoising mechanism based on a preconditioned Crank–Nicolson \(pCN\) proposal, enabling principled acceptance of noise updates that bias sampling toward high\-reward regions\. To further improve exploration in multimodal reward landscapes, we extend this procedure with parallel tempering across multiple temperature levels, allowing controlled mixing between exploration and refinement regimes\. Our method operates with or without reward gradients and applies to black\-box objectives\. Empirically, we demonstrate its effectiveness on synthetic tasks, image generation, dynamical systems, and Bayesian inverse problems\. Compared to prior methods, it achieves superior reward alignment and multimodal exploration while maintaining stability across tasks\.

## D\-DOIT: Training\-free Adaptation of Discrete Diffusion via Doob's h\-Transform

**Authors:** Jieke Wu; Qijie Zhu; Weimin Wu; Zeqi Ye; Minshuo Chen; Han Liu

**ID:** 151429 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=amRYWewE5M>) | [PDF](<https://openreview.net/pdf?id=amRYWewE5M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151429>)

We propose D\-DOIT \(Discrete Doob\-Oriented Inference\-time Transformation\), a training\-free and efficient adaptation method for discrete diffusion models with generic rewards\. D\-DOIT formulates adaptation as sampling from a reward\-tilted target distribution and realizes this transport through Doob's h\-transform of the discrete diffusion reverse kernel, using only reward values rather than reward gradients\. Unlike continuous diffusion, masked discrete diffusion samples categorical token\-reveal transitions rather than continuous state updates\. D\-DOIT derives the corresponding discrete Doob's h\-transform, which guides sampling by reweighting reverse transition probabilities instead of adding a drift correction\. To make this transformation practical, D\-DOIT avoids expensive future rollouts\. At each guided step, D\-DOIT samples candidate next states, uses the model prediction head to complete each candidate into a clean sequence, evaluates each completion with the reward oracle, and resamples the next state with probabilities proportional to the rewards\. An optional late\-stage best\-of\-$K$ refinement further improves sample quality by branching trajectories only near the end of denoising, avoiding the $K$\-fold cost over the full trajectory\. Empirically, on regulatory DNA sequence design benchmarks, D\-DOIT consistently outperforms training\-free guidance baselines and achieves performance competitive with training\-based methods, improving both enhancer activity and cell\-type\-specificity while preserving sequence naturalness\.

## Measuring and Decomposing Mode Separation via the Canonical Diffusion

**Authors:** Shaul Tolkowsky; Ori Meidler; Or Zuk

**ID:** 153978 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H63M35DFX7>) | [PDF](<https://openreview.net/pdf?id=H63M35DFX7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153978>)

Mode separation, namely how sharply a distribution fragments into barrier\-separated clusters, is a fundamental geometric property of densities, difficult to quantify in high dimensions\. It is structurally distinct from dispersion, yet existing tools fall short: differential entropy rises with spread regardless of fragmentation, PCA orders directions by variance regardless of barriers, and mutual information requires a mixture decomposition one usually does not have\. We measure mode separation through a single stochastic process intrinsic to the density: a unique reversible diffusion with $f$ as its stationary distribution and constant scalar diffusion coefficient\. We extract two readouts from its autocovariance matrix: SSA \(Sum of Squared Autocorrelations\), a scalar barrier\-sensitive measure; and DA \(Dominant Autocorrelation directions\), linear projections ordered by metastability rather than variance\. Under an isotropic\-Gaussian null, we derive a closed\-form spectrum for the empirical autocovariance that generalizes Marchenko\-\-Pastur, with an analytic upper edge that selects the lag at which DA is read off\. Both readouts use only samples and a score function, scaling to high dimensions through pretrained score\-based generative models via Tweedie's identity\. We apply our framework to three settings: \(i\) synthetic Gaussian mixtures, where SSA tracks mutual information; \(ii\) SDXL text\-to\-image generations, where SSA and DA capture structure that entropy and PCA miss; and \(iii\) molecular dynamics of alanine dipeptide, where DA recovers the known slow backbone dihedrals from static samples alone\.

## Follow the Mean: Reference\-Guided Flow Matching

**Authors:** Pedro Curvo; Maksim Zhdanov; Floor Eijkelboom; Jan\-Willem van de Meent

**ID:** 150971 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dtoO1TcUb8>) | [PDF](<https://openreview.net/pdf?id=dtoO1TcUb8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150971>)

Existing approaches to controllable generation typically rely on fine\-tuning, auxiliary networks, or test\-time search\. We show that flow matching admits a different control interface: adaptation through examples\. For deterministic interpolants, the velocity field is solely governed by a conditional endpoint mean; shifting this mean shifts the flow itself\. This yields a simple principle for controllable generation: steer a pretrained model by changing the reference set it follows\. We instantiate this idea in two forms\. Reference\-Mean Guidance is training\-free: it computes a closed\-form endpoint\-mean correction from a reference bank and applies it to a frozen FLUX\.2\-klein \(4B\) model, enabling control of color, identity, style, and structure while keeping the prompt, seed, and weights fixed\. Semi\-Parametric Guidance amortizes the same idea through an explicit mean anchor and learned residual refiner, matching unconditional DiT\-B/4 quality on AFHQv2 while allowing the reference set to be swapped at inference time\. These results point to a broader direction: generative models that adapt through data, not parameter updates\.

## xVGAE: A Hierarchical Variational Graph Autoencoder for Exchangeable Graphs

**Authors:** Daniele Micheletti; Federica Zoe Ricci; Erik Sudderth

**ID:** 148325 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yfPdA2AWpR>) | [PDF](<https://openreview.net/pdf?id=yfPdA2AWpR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148325>)

Graphs play a crucial role in many applications, ranging from drug discovery to social network modeling and astronomy\.  Generative models for graphs have substantially advanced in recent years, but we identify relatively simple scenarios where state\-of\-the\-art models struggle to scale and exhibit prohibitively\-slow generation times\.  We propose a generative architecture that matches or exceeds the state\-of\-the\-art, but can scale to regimes where their training fails, and is orders of magnitude faster at generation\. Our approach is inspired by the Aldous\-Hoover theorem, a classic representation theorem that characterizes any probability distribution of graphs that is invariant to permutations of node indices \(i\.e\., exchangeable\)\.  This theorem establishes that three ingredients are needed: a graph\-level variable, a set of node\-specific variables, and a so\-called  graphon function that maps graph\- and node\-level variables to the probability of an edge between any node pair\. Given a training set of graphs, our exchangeable Variational Graph AutoEncoder \(xVGAE\) learns an approximation to their underlying graphons, as well as graph\- and node\-level latent variables\. We show that our xVGAE encodes interpretable representations of graph\- and node\-level properties, and can \(quickly, in one shot\) generate new graphs that closely match key training set statistics\.

## Full\-Sequence Masked Diffusion for Generative Recommendation

**Authors:** Lei Chen; Wei Zibo

**ID:** 155975 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1PgMS3zgSx>) | [PDF](<https://openreview.net/pdf?id=1PgMS3zgSx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155975>)

Autoregressive large language models have dominated generative recommendation by sequentially predicting the next item\. However, this unidirectional paradigm suffers from error propagation, and limited ability to jointly optimize an entire recommendation list\. In this paper, we introduce Full\-Sequence Masked Diffusion for generative recommendation \(FSMD\), which extends masked diffusion models to enable global joint modeling over the entire user history and Top\-$K$ recommendation list\. We formulate recommendation as a unified sequence diffusion process, where the forward process randomly masks tokens across the full sequence and the reverse process simultaneously denoises all masked positions using bidirectional context\. This formulation enables parallel generation of the entire recommendation list and naturally captures inter\-item dependencies within a coherent global structure\. To better align generation with ranking objectives, we further introduce a unified training objective that combines masked diffusion likelihood with a listwise ranking loss\. Extensive experiments on multiple public benchmarks demonstrate that FSMD consistently outperforms state\-of\-the\-art autoregressive and item\-level diffusion\-based generative recommendation methods across accuracy and list quality metrics\.

## Every Measurement, Every Direction, All at Once: Multimodal Flow Matching for Molecules and Spectra

**Authors:** Thorben Prein; Elton Pan; Rafael Gomez\-Bombarelli; Santiago Miret

**ID:** 153741 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J5uaTx2ttc>) | [PDF](<https://openreview.net/pdf?id=J5uaTx2ttc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153741>)

Generative modeling for science is data\-scarce: each sample is expensive but arrives with several coupled measurements of the same system\. Standard conditional models often use single\-direction generation, discarding supervision from the rest\. We argue that this asymmetry should not be a constraint during training: Under random target/conditioning masking, every measurement can act as a training target, hence one expensive sample yields multiple supervised denoising tasks\. We present MOSAIC, a multimodal flow matching transformer over molecular 3D structure and UV, IR, and Raman spectra\. On QM9S, MOSAIC achieves state\-of\-the\-art performance with 88\.8% Acc@1 for spectra\-to\-structure task, outperforming the strongest baseline by over 20% with 20$\\times$ fewer integration steps\. MOSAIC enables any\-to\-any generation from any combination of input to any combination of output modalities common in chemical sciences\. We provide ablations to demonstrate the effectiveness of MOSAIC and show consistent performance scaling with increasing model and data size\.

## Empowering Masked Diffusion Models to Self\-Correct with Leave\-One\-Out Transformers

**Authors:** Sofian Zalouk; Vincent Counathe; Paul Jünger; Daniel Cao; Daniel Zlotnick; Kilian Weinberger; Christopher De Sa

**ID:** 150367 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ic1GS1Kl0Z>) | [PDF](<https://openreview.net/pdf?id=ic1GS1Kl0Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150367>)

Diffusion models promise iterative refinement, yet masked diffusion language models \(MDMs\) suffer from two shortcomings: \(1\) inability to revise tokens, and \(2\) sparse training signal\. The root cause is structural: MDMs control information flow only through input masking, so unmasked positions cannot be supervised, and self\-correction is never learned\. We propose the Leave\-One\-Out Transformer \(LOOT\), which addresses both issues\. With LOOT, MDMs predict the distribution over potential replacements conditioned on the rest of the sequence at each position, in a single forward pass\. Supervision can then be applied at masked and unmasked positions alike, yielding a lower\-variance training objective with a dense loss signal at every token\. Our method empowers MDMs to learn self\-correction during training and supports continuous refinement at inference time via Gibbs sampling\. LOOT achieves a new best validation perplexity on LM1B in a parameter\-matched setting\. Finetuned from a MDM checkpoint on OpenWebText, LOOT establishes a generative quality\-vs\-diversity frontier that surpasses prior remasking methods across NFE budgets\.

## Non\-Expanding Gated Continued Fraction Architecture for Feedforward Layers in Language Models

**Authors:** Amit Dhurandhar; Vijil Chenthamarakshan; Karthikeyan Natesan Ramamurthy; Dennis Wei; Rahul Nair

**ID:** 151115 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=csNiporPZm>) | [PDF](<https://openreview.net/pdf?id=csNiporPZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151115>)

Recent work has shown that continued fraction inspired neural architectures \(CoFrGeNets\) can be highly parameter efficient yet performant for language modeling\. In this work, we revisit continued fraction\-based channel mixing with the goal of improving its performance and simplifying integration into standard pre\-training protocols for language models\. We achieve this by two simple yet critical contributions: i\) we propose a novel non\-expanding gated continued fraction inspired architectural component to replace feedforward layers in established language model architectures that may use vanilla multilayer perceptrons or gated linear units or \(vanilla/gated\) experts in mixture\-of\-experts \(MoE\) type architectures\. ii\) We propose a way to re\-implement divisions \-\- the non\-linearity in these architectures \-\- in terms of logarithms and exponentials\. By experimenting on different language modeling architectures such as GPT\-2, Llama\-3, Mamba\-2 and \(nano\) Llama\-MoE we find that our proposed architecture performs similarly or significantly better than the continued fraction architecture proposed in prior work along with having higher throughput\. In addition, our re\-implementation of divisions makes training of deeper CoFrGeNets stable without the need for incremental training which was proposed in prior work as a means to stabilize training, but added notable complexity to existing large language model training implementations\.

## MotionGrounder: Grounded Multi\-Object Motion Transfer via Diffusion Transformer

**Authors:** Samuel Teodoro; Yun Chen; Agus Gunawan; Soo Ye Kim; Jihyong Oh; Munchurl Kim

**ID:** 153439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LIXr6DYzVA>) | [PDF](<https://openreview.net/pdf?id=LIXr6DYzVA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153439>)

Motion transfer enables controllable video generation by transferring temporal dynamics from a reference video to synthesize a new video conditioned on a target caption\. However, existing Diffusion Transformer \(DiT\)–based methods are limited to single\-object videos, restricting fine\-grained control in real\-world scenes with multiple objects\. In this work, we introduce MotionGrounder, a DiT\-based framework that $\\textit\{firstly\}$ handles motion transfer with $\\textit\{multi\-object controllability\}$\. Our Flow\-based Motion Signal \(FMS\) in MotionGrounder provides a stable motion prior for target video generation, while our Object\-Caption Alignment Loss \(OCAL\) grounds object captions to their corresponding spatial regions\. We further propose a $\\textit\{new\}$ Object Grounding Score \(OGS\), which jointly evaluates \(i\) spatial alignment between source video objects and their generated counterparts and \(ii\) semantic consistency between each generated object and its target caption\. Our experiments show that MotionGrounder consistently outperforms recent baselines across quantitative, qualitative, and human evaluations\.

## Rethinking Knowledge Distillation for Diffusion Language Models

**Authors:** Yuxuan Sun; Yuanjian Xu; Jianing Hao; Yu Li; Sowmen Das; Zhong Li; Sangwoong Yoon; Miguel Rodrigues

**ID:** 152596 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RwFzh7uPPD>) | [PDF](<https://openreview.net/pdf?id=RwFzh7uPPD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152596>)

Discrete diffusion language models \(DLMs\) offer a promising non\-autoregressive alternative to large language models by enabling parallel generation, yet their performance still lags behind autoregressive counterparts\. Knowledge distillation has recently proven highly effective for improving autoregressive models, but its applicability to DLMs remains poorly understood\. We present the first systematic study of KD for DLMs and uncover two non\-intuitive failures of classical forward\-KL \(FKL\) distillation: \(i\) student perplexity does not improve monotonically with more teacher\-generated data, and \(ii\) on the same teacher\-generated corpus, FKL distillation underperforms simply training the student with the original DLM denoising objective\. These failures hold for both a 110M MDLM teacher and a 7B Dream teacher\. To address them, we propose a unified, data\-free distillation framework for masked DLMs\. The framework first runs an off\-policy phase that absorbs general knowledge from a static set of teacher samples and then transitions to an on\-policy phase whose objective combines: a trajectory loss along the student's own reverse process, confidence reweighting that down\-weights tokens where the teacher is unsure, and a trust\-region anchor that stabilizes the moving target\. For the smaller MDLM regime where FKL alone is insufficient, we additionally adopt the $\\alpha$\-$\\beta$ divergence\. On MDLM, the resulting student attains a GPT\-2 perplexity of $24\.75$, surpassing the teacher's $27\.04$; on Dream\-7B distillation to a 93M student model, the framework reduces Qwen\-2\.5 perplexity from the FKL\-distilled baseline of $25\.23$ to $19\.83$ while preserving zero\-shot accuracy\.

## Diffusion Transformers with Residual Adaptive Layer Normalization

**Authors:** Ge Wu; Minxing Luo; Yikai Ge; Lei Wang; DanDan Zheng; Rui Liu; libin wang; Yujie Bao; Taihang Hu; Jingdong Chen; Xiang Li

**ID:** 151083 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d682nArxGB>) | [PDF](<https://openreview.net/pdf?id=d682nArxGB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151083>)

Residual connections with PreNorm are the default design in modern transformers due to their strong optimization stability, but recent research has shown that they weaken the functional differentiation of deeper blocks and increase representational redundancy in later layers\. This issue also appears in diffusion models using similar architectures, where the deep block is expected to support progressive denoising refinement rather than repeated computation over similar states\. Motivated by this, we revisit cross\-layer shortcuts in diffusion transformers and argue that their role should go beyond merely transferring shallow information, instead guiding deeper blocks to improve depth utilization\. To this end, we propose \\textit\{\\textbf\{Res\}idual Adaptive Layer \\textbf\{Norm\}alization\} \(\\textbf\{ResNorm\}\), which routes residual cross\-layer shortcuts into the existing adaLN modulation\. ResNorm preserves the optimization advantages of PreNorm residual connections, while reusing the native adaLN interface to transmit early\-layer representations as modulation signals\. This design naturally combines cross\-layer history with the model's native condition, such as timestep and class embeddings\. ResNorm allows the earlier structural representation to adaptively scale, shift, and gate deeper blocks\. This not only produces more differentiated deep representations and reduces cross\-layer similarity in later blocks, but also accelerates training convergence and improves performance\. On ImageNet 256$\\times$256, SiT\-XL/2 \+ ResNorm achieves up to $\\textbf\{2\}\\times$ and $\\textbf\{36\}\\times$ faster training than SiT\-XL/2 \+ REG and SiT\-XL/2 \+ REPA\. Moreover, SiT\-L/2 \+ ResNorm trained for only 400K iterations already outperforms SiT\-XL/2 \+ REG\.

## Dual\-Rate Diffusion: Accelerating diffusion models with an interleaved heavy\-light network

**Authors:** Grigory Bartosh; David Ruhe; Emiel Hoogeboom; Jonathan Heek; Thomas Mensink; Tim Salimans

**ID:** 149934 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m5HuTuCJy2>) | [PDF](<https://openreview.net/pdf?id=m5HuTuCJy2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149934>)

Diffusion models achieve state\-of\-the\-art generative performance but suffer from high computational costs during inference due to the repeated evaluation of a heavy neural network\. In this work, we propose Dual\-Rate Diffusion, a method to accelerate sampling by interleaving the execution of a heavy high\-capacity context encoder and a light efficient denoising model\. The context encoder is evaluated sparsely to extract high\-dimensional features, which are effectively reused by the light denoising model at every step to refine the sample efficiently\. This approach significantly accelerates inference without compromising sample quality\. On ImageNet benchmarks, Dual\-Rate Diffusion matches the performance of standard baselines while reducing computational cost by a factor of $2$\-\-$4$\. Furthermore, we demonstrate that our method is compatible with distillation techniques, such as Moment Matching Distillation, enabling further efficiency gains in few\-step generation\.

## DiffCool: Label\-Free Synthesis of Chip\-Tailored Heat Sinks via Thermal\-Aware Diffusion

**Authors:** Siyuan Liang; Zixiao Wang; Chenghan Wang; Shanyi Li; Yushen Zhang; Leilei Jin; Zhen Zhuang; Ulf Schlichtmann; Bei Yu; Tsung\-Yi Ho

**ID:** 152390 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TSSdr3DP9M>) | [PDF](<https://openreview.net/pdf?id=TSSdr3DP9M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152390>)

Recent advances in semiconductor technology have dramatically improved IC chip performance, but soaring transistor densities and clock speeds generate unprecedented heat fluxes in modern integrated circuits, making spatially adaptive thermal management critical\. However, conventional heat sinks rely on fixed geometries that lack customization for chip\-specific thermal profiles, while the absence of optimal design datasets and strict manufacturing constraints hinder the application of generative AI\. To address these challenges, we present DiffCool, a physics\-guided framework that reformulates heat sink synthesis as a constrained discrete denoising process\. By embedding manufacturing\-aware state transitions into the diffusion dynamics and optimizing via a differentiable thermal\-aware loss coupled with a surrogate simulator, our model generates structurally sound, high\-performance topologies directly from bare\-chip heat maps without labeled data\. Experiments on an open\-source processor demonstrate that DiffCool synthesizes production\-ready designs in under one second, reducing peak temperature by 28\.3% and temperature gradient by 56\.9% compared to conventional baselines\. This work establishes a scalable, label\-free paradigm that unifies generative modeling with physical constraints for automated thermal design\.

## Align as You Couple: Learning Spatial Resolved Inference from H&amp;E Images with Mollified Flow Matching

**Authors:** Rongchao Zhang; Guangyuan Dong; Siheng Wang; Zhengtao Yao; Junhao Dong; Haoyang Li

**ID:** 149664 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oLyNGLsplV>) | [PDF](<https://openreview.net/pdf?id=oLyNGLsplV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149664>)

Spatial resolved inference \(SRI\) is a critical technique in biomedical research, which aims to measure RNA sequence abundances by associating them with whole\-tissue images at a fine\-grained molecular scale\. However, the extremely low throughput and distributional discrepancies involved pose significant challenges to cellular morphologies captured in hematoxylin and eosin \(H&amp;E\) connection benchmarking, and existing SRI frameworks suffer from coverage gaps\. In this paper, we propose MollFlow, a novel generative Mollified Flow matching model for spatial resolution inference, which is designed to learn the probabilistic dependency between the distributions of whole\-slide images and expression profiles\. We innovatively reframe the anchors of flow matching as a sequential informative prior derived from whole\-slide images rather than isotropic Gaussian noise\. During inference, MollFlow progressively refines the prior trajectory, ultimately converging to biologically plausible inferences\. For the challenging coupling, which requires enabling intermediate states to explore pathologically aligned subspaces, we carry out a boundary mollified strategy to stabilize the velocity field, rather than being constrained by rigid trajectories\. Endowed by this, our unique modulation generation perspective allows the model to retain coupling alignment for manifold incommensurability and prevent coverage gaps\. Empirically, we find that MollFlow is capable of accurately inferring gene expression while exhibiting excellent performance in a variety of application scenarios\.

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

## End\-to\-End Training for Unified Tokenization and Latent Denoising

**Authors:** Shivam Duggal; Xingjian Bai; Zongze Wu; Richard Zhang; Eli Shechtman; Antonio Torralba; Phillip Isola; Bill Freeman

**ID:** 155881 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=28rLEQtSjg>) | [PDF](<https://openreview.net/pdf?id=28rLEQtSjg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155881>)

Latent diffusion models \(LDMs\) enable high\-fidelity synthesis by operating in learned latent spaces\. However, training state\-of\-the\-art LDMs requires complex staging: a tokenizer must be trained first, before the diffusion model can be trained in the frozen latent space\. We propose UNITE – an autoencoder architecture for unified tokenization and latent diffusion\. UNITE consists of a Generative Encoder that serves as both image tokenizer and latent generator via weight sharing\. Our key insight is that tokenization and generation can be viewed as the same latent inference problem under different conditioning regimes: tokenization infers latents from fully observed images, whereas generation infers them from noise together with text or class conditioning\. Motivated by this, we introduce a single\-stage training procedure that jointly optimizes both tasks via two forward passes through the same Generative Encoder\. The shared parameters enable gradients to jointly shape the latent space, encouraging a "common latent language"\. Across image and molecule modalities, UNITE achieves near state\-of\-the\-art performance without adversarial losses or any pretrained encoders \(e\.g\., DINO\), reaching FID 2\.12 and 1\.75 for Base and Large models on ImageNet 256 x 256\. Our experiments suggest that unification provides mutual benefits for tokenization and generation\. We further analyze the Generative Encoder through the lenses of representation alignment and compression\. These results show that single\-stage joint training of tokenization and generation from scratch is feasible\. Project Page: https://unite\-tokenization\-generation\.netlify\.app/

## ReGDiff: Guided Diffusion in Regulated Latent Space for Exploring Metamaterial Voxel Geometry

**Authors:** Wangzhi Zhan; Jianpeng Chen; Dongqi Fu; Dawei Zhou

**ID:** 151868 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XHx4RRDPKz>) | [PDF](<https://openreview.net/pdf?id=XHx4RRDPKz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151868>)

Metamaterials are artificially engineered structures whose mechanical and physical behaviors are strongly shaped by geometry rather than composition\. Voxel representation provides a unified format for metamaterial geometry generation, as it can express diverse classes such as truss, shell, and porous structures within a single cubic discretization\. However, voxel\-based generation faces a plausibility–novelty trade\-off: staying close to known geometries helps preserve geometric regularities, while moving away from them is necessary for novelty but may produce degenerate geometries\. To address this challenge, we propose ReGDiff, a generative framework that couples voxel representation with latent space regulation and guided diffusion\. ReGDiff introduces a repel\-and\-sink \(RAS\) mechanism to smooth the latent distribution of plausible geometries, and short\-range repulsion \(SRR\) guidance to discourage generation overly close to known samples while maintaining geometric plausibility\. We further contribute a voxel\-based benchmark covering truss\- and shell\-type metamaterial geometries, together with an evaluation module for geometric plausibility, novelty, and diversity\. Experiments show that ReGDiff outperforms voxel\-based generative baselines, achieving \+8\.9% in geometric plausibility, \+46\.4% in novelty, and \+128\.6% in diversity on average across two datasets\. These results suggest that ReGDiff is a strong geometry candidate generator for downstream evaluation\. Our code is provided at https://anonymous\.4open\.science/r/ReGDiff\-6DC6\.

## Disentangled Sparse Representations for Concept\-Separated Diffusion Unlearning

**Authors:** Hyeonjin Kim; Hangyeol Jung; Heechan Yun; Sungjun Yun; Dong\-Jun Han

**ID:** 155474 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Ls4MY5nvC>) | [PDF](<https://openreview.net/pdf?id=5Ls4MY5nvC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155474>)

Unlearning specific concepts in text\-to\-image diffusion models has become increasingly important for preventing undesirable content generation\. Among prior approaches, sparse autoencoder \(SAE\)\-based methods have attracted attention due to their ability to suppress target concepts through lightweight manipulation of latent features, without modifying model parameters\. However, SAEs trained with sparse reconstruction objectives do not explicitly enforce concept\-wise separation, resulting in shared latent features across concepts\. To address this, we propose SAEParate, which organizes latent representations into concept\-specific clusters via a concept\-aware contrastive objective, enabling more precise concept suppression while reducing unintended interference during unlearning\. In addition, we enhance the encoder with a GeLU\-based nonlinear transformation to increase its expressive capacity under this separation objective, enabling a more discriminative and disentangled latent space\. Experiments on UnlearnCanvas demonstrate state\-of\-the\-art performance, with particularly strong gains in joint style\-object unlearning, a challenging setting where existing methods suffer from severe interference between target and non\-target concepts\.

## SSD: Shell\-Guided Spherical Diffusion for Molecular Geometry Generation

**Authors:** Yun\-Yen Chuang; Chen\-Sheng Gu; Hung\-Min Hsu; Kevin Lin; Ray\-I Chang

**ID:** 154313 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EauF7XR2Tz>) | [PDF](<https://openreview.net/pdf?id=EauF7XR2Tz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154313>)

Diffusion models for 3D molecular geometry almost universally adopt an isotropic Gaussian prior, whose Frobenius\-norm scale $\\sigma\_T\\sqrt\{3n\}$ is governed by the noise level and atom count rather than by chemistry, producing a scale mismatch whose effects grow with $n$ and yield high spatial entropy and unstable early trajectories\. We introduce \\textbf\{Shell\-guided Spherical Diffusion \(SSD\)\}, a model\-agnostic framework that replaces the Gaussian prior with a chemically scaled spherical\-shell initialization and augments both the forward and reverse processes with coordinated radial attraction, short\-range repulsion, and an SE\(3\)\-equivariant correction field\. This joint design of initialization and dynamics is essential: neither a shell alone nor radial fields alone reproduces the stability or accuracy of SSD\. We evaluate SSD across five representative coordinate\-space backbones\-\-\-GeoDiff, SubGDiff, EDM, SemlaFlow\-style flow matching, and MCF\-\-\-each under its canonical evaluation protocol\. SSD consistently improves both quality and diversity under identical training and sampling budgets, upgrading weaker backbones such as GeoDiff and EDM to match or surpass stronger diffusion\-, VAE\-, and flow\-based baselines\. SSD therefore serves as a plug\-in geometric enhancement that strengthens coordinate\-space molecular generation models without modifying their architectures, loss functions, or training pipelines\.

## TMPO: Trajectory Matching Policy Optimization for Diverse and Efficient Diffusion Alignment

**Authors:** Jiaming Li; Chenyu Zhu; Zhiyuan Ma; Nanxi Yi; Youjun Bao; Li Sun; Quanying Lv; Xiang Fang; Daizong Liu; Jianjun Li; Kun He; Bowen Zhou

**ID:** 152405 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TL8RqtISvt>) | [PDF](<https://openreview.net/pdf?id=TL8RqtISvt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152405>)

Reinforcement learning \(RL\) has shown extraordinary potential in aligning diffusion models to downstream tasks, yet most of them still suffer from significant reward hacking, which degrades generative diversity and quality by inducing visual mode collapse and amplifying unreliable rewards\. We identify the root cause as the mode\-seeking nature of these methods, which maximize expected reward without effectively constraining probability distribution over acceptable trajectories, causing concentration on a few high\-reward paths\. In contrast, we propose Trajectory Matching Policy Optimization \(TMPO\), which replaces scalar reward maximization with trajectory\-level reward distribution matching\. Specifically, TMPO introduces a Softmax Trajectory Balance \(Softmax\-TB\) objective to match the policy probabilities of $K$ trajectories to a reward\-induced Boltzmann distribution\. We prove that this objective inherits the mode\-covering property of forward KL divergence, preserving coverage over all acceptable trajectories while optimizing reward\. To further reduce multi\-trajectory training time on large\-scale flow\-matching models, TMPO incorporates Dynamic Stochastic Tree Sampling, where trajectories share denoising prefixes and branch at dynamically scheduled steps, reducing redundant computation while improving training effectiveness\. Extensive results across diverse alignment tasks such as human preference, compositional generation and text rendering show that TMPO improves generative diversity over state\-of\-the\-art methods by 9\.1%, and achieves competitive performance in all downstream and efficiency metrics, attaining the optimal trade\-off between reward and diversity\. Code is available at https://anonymous\.4open\.science/r/TMPO\-2E2B\.

## SPRM: From Cooperative Games to Marginal\-Contribution Process Reward Modeling

**Authors:** Yu Bao; Pak Lon Ip; Qiyu Ruan; Xitong Gao; Cheng\-Zhong Xu

**ID:** 149697 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o6rESNXJwW>) | [PDF](<https://openreview.net/pdf?id=o6rESNXJwW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149697>)

Process reward models provide step\-level feedback for reasoning, but reliable process supervision remains difficult to obtain: human annotations are costly, Monte Carlo rollouts require large sampling budgets, and LLM judges can introduce prompt\-sensitive biases\. We introduce SPRM, an outcome\-only framework that constructs process rewards directly from terminal correctness signals\. SPRM views a reasoning trajectory as a temporally ordered cooperative game, where reasoning steps act as participants and the final outcome reward is the shared payoff\. Following this allocation view, SPRM learns a differentiable trajectory value function from outcome rewards and distributes the payoff to individual steps through Aumann\-Shapley\-style Step Value Integration\. We further analyze its Shapley properties under the temporal and causal structure of reasoning trajectories\. To make the resulting supervision robust, SPRM incorporates causal consistency and estimates a cross\-trajectory inherent score that captures each step's context\-independent value from semantically similar steps\. These signals train a dual\-head process reward model that jointly represents trajectory\-specific marginal credit and cross\-trajectory inherent step value\. Across ProcessBench, PRMBench, and Best\-of\-N reranking on AceMath\-RewardBench, SPRM improves first\-error localization, marginal\-contribution\-sensitive evaluation, and test\-time reasoning selection over existing open PRMs trained from human, rollout, curated, or outcome\-broadcast supervision\. These results suggest that marginal\-contribution\-based credit redistribution offers an effective and scalable route to process supervision from outcome\-only data\.

## The Geometry of Noise: Why Diffusion Models Don't Need Noise Conditioning

**Authors:** Mojtaba Sahraee\-Ardakan; Mauricio Delbracio; Peyman Milanfar

**ID:** 151751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YLJPbabQTH>) | [PDF](<https://openreview.net/pdf?id=YLJPbabQTH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151751>)

Generative models typically rely on explicitly tracking the noise level to guide the sampling process\. However, recent autonomous models successfully generate data using a single, time\-invariant vector field that operates without explicit noise conditioning\. This raises a fundamental paradox: what landscape are these networks actually optimizing when the noise level is treated as a random variable, and how can a bounded model remain stable near the data manifold where gradients typically diverge? We resolve this paradox by showing that autonomous generation is not merely \`\`blind’’ denoising, but a specific form of Riemannian gradient flow on the Marginal Energy landscape, defined by integrating out the unknown noise levels\. Through a novel relative energy decomposition, we demonstrate that while the raw Marginal Energy contains a severe geometric singularity normal to the data manifold, the learned field implicitly incorporates a local conformal metric\. This metric perfectly preconditions the singularity, turning an infinitely deep potential well into a stable attractor\. Finally, we establish strict structural stability conditions for autonomous sampling\. We prove that standard noise\-prediction parameterizations structurally fail due to an inherent high gain amplification of the estimation errors\. In contrast, velocity\-based models are inherently stable\.

## EGCA: A Spectral Perspective on Forward Process Design in Diffusion Models

**Authors:** Chi Zhang; Guichao Chang; Sirui Liu; Xin Zhang; Guoqiang Zhong

**ID:** 151834 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xb3MCNndt3>) | [PDF](<https://openreview.net/pdf?id=Xb3MCNndt3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151834>)

The design of the forward diffusion process is a foundational yet under\-theorized aspect of diffusion modeling\. Although it determines how data are corrupted and how quickly the forward dynamics approach a reference distribution, forward\-process design remains largely governed by canonical defaults rather than a unified analytical framework\. We propose Eigenvalue\-Guided Control and Analysis \(EGCA\) for diffusion models, a spectral framework that uses the principal eigenvalue of the infinitesimal generator to analyze and guide forward\-process design\. Under suitable ergodicity conditions, this eigenvalue governs the exponential convergence rate to stationarity, providing a compact and interpretable summary of forward dynamics\. We establish sufficient uniqueness and ergodicity conditions, derive eigenvalue\-based convergence bounds, and adapt a practical numerical estimator for the principal eigenvalue\. Empirically, we show that the eigenvalue strongly tracks forward convergence speed and serves as an organizing coordinate for the efficiency\-\-quality trade\-off across tractable forward\-generator families\. Experiments across multiple image datasets and diverse diffusion settings, including training formulations, architectures, and samplers, demonstrate that eigenvalue\-guided design maintains or improves generation quality while reducing training cost\. Beyond a single generator choice, our framework offers a spectral perspective for understanding and comparing forward\-process choices in diffusion models\.

## UniFlow\-Audio: Unified Flow Matching for Audio Generation from Omni\-Modalities

**Authors:** Xuenan Xu; Jiahao Mei; Ye Tao; Zihao Zheng; Zeyu Xie; Yaoyun Zhang; Haohe Liu; Yuning Wu; Ming Yan; Mengyue Wu; Wen Wu; Chao Zhang

**ID:** 151328 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bLR3wcXBSv>) | [PDF](<https://openreview.net/pdf?id=bLR3wcXBSv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151328>)

Audio generation, including speech, music and sound effects, has advanced rapidly in recent years\. These tasks can be divided into two categories: time\-aligned \(TA\) tasks, where each input unit corresponds to a specific segment of the output audio \(e\.g\., phonemes aligned with frames in speech synthesis\); and non\-time\-aligned \(NTA\) tasks, where such alignment is not available\. Since modeling paradigms for the two types are typically different, research on different audio generation tasks has traditionally followed separate trajectories\. In this work, we propose UniFlow\-Audio, a non\-autoregressive audio generation framework that unifies the two types based on flow matching\. UniFlow\-Audio introduces a dual\-fusion mechanism that aligns audio latents with TA features while integrating NTA conditions via cross\-attention in each block, and employs task\-balanced sampling to maintain consistent performance across diverse tasks\. Supporting omni\-modal inputs including text, audio, and video, UniFlow\-Audio achieves strong results on 7 audio generation tasks with fewer than 8K hours of public training data and under 1B trainable parameters\. A compact 200M\-parameter variant remains competitive, indicating UniFlow\-Audio as a promising foundation model for general non\-autoregressive audio generation\. Codes and models are available at https://anonymous3387a8c\.github\.io/uniflow\_audio\.

## DN\-Flow: Driver–Navigator Structured Flow Matching for Mixed\-Type Tabular Data Generation

**Authors:** Guangzhao Chai; Jing Liu; Youxi Wu; Yan Li

**ID:** 151485 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aGUKRlcttX>) | [PDF](<https://openreview.net/pdf?id=aGUKRlcttX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151485>)

Generating high\-fidelity mixed\-type tabular data remains challenging because such data contain both numerical and categorical features; different columns often exhibit substantial heterogeneity in marginal distributions, sparsity patterns, and dependency structures\. Although recent diffusion\-based and flow\-based methods have improved generation quality, most methods still rely on a unified generation framework that models all dimensions in a homogeneous manner, without explicitly accounting for the fact that different columns may differ in their suitability for strong local refinement\. To address this issue, we propose a driver\-navigator structured flow\-matching framework \(DN\-Flow\) for mixed\-type tabular data generation\. Inspired by the collaboration between the driver and navigator in rally car racing, DN\-Flow explicitly decomposes the velocity field into a Driver branch \(for globally stable transport\) and a Navigator branch \(for endpoint\-aware local refinement\)\. On top of this structured decomposition, we introduce a learnable column\-wise soft selector and a dynamic correction control mechanism to jointly model column\-level suitability for local refinement and the actual strength of correction injection in an end\-to\-end manner\. Experiments on eight real\-world datasets show that DN\-Flow consistently outperforms strong baselines in data fidelity and downstream utility, achieves the best Shape performance on all eight datasets, and remains highly competitive on Trend and machine learning efficiency\. These results suggest that structured and selective velocity correction offers an effective new paradigm for mixed\-type tabular data generation\. The code will be released upon acceptance\.

## Decoupling Direction and Magnitude: Language\-Steered Flow Matching for Super\-Resolution in the Dark

**Authors:** Jiaxin Gao; Ziyu Yue; Yaohua Liu; Danchen Cui; Zhihui Zhao; Zhixun Su

**ID:** 149168 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sMFrrQ0Yyf>) | [PDF](<https://openreview.net/pdf?id=sMFrrQ0Yyf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149168>)

Image super\-resolution in the dark is fundamentally challenged by extreme spatial heterogeneity: severely underexposed and noisy regions demand aggressive generative enhancement to reconstruct missing details, while relatively well\-exposed areas require conservative updates to prevent hallucinated textures\. Standard diffusion and flow\-matching models, however, rely on globally uniform integration trajectories, making them sub\-optimal for such spatially varying degradations\. In this paper, we propose DeLang\-SR \(Degradation\-Language steered Super\-Resolution\), a one\-step flow\-matching framework that explicitly decouples the restoration direction and magnitude\. Rather than treating low\-light corruption as arbitrary latent features, DeLang\-SR translates measurable physical statistics into structured degradation language, harnessing the semantic prior of pretrained text\-to\-image models\. The degradation\-language intent, complemented by image\-specific visual tokens, steers the velocity field \(direction\) toward restoration\-relevant manifolds\. Simultaneously, a continuous spatial update\-strength field acts as a locally varying Euler step\-size field \(magnitude\), applying stronger integration steps in heavily degraded shadows while enforcing conservative updates in reliable regions\. Experiments on paired and real dark images, together with ablations and diagnostic analyses, show that DeLang\-SR provides an effective and interpretable one\-step route to super\-resolution in the dark\.

## Diffusion Guidance Is a Controllable Policy Improvement Operator

**Authors:** Kevin Frans; Seohong Park; Pieter Abbeel; Sergey Levine

**ID:** 151465 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aQYvs5JZpu>) | [PDF](<https://openreview.net/pdf?id=aQYvs5JZpu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151465>)

At the core of reinforcement learning is the idea of learning beyond the performance in the data\. However, scaling such systems has proven notoriously tricky\. In contrast, techniques from generative modeling have proven remarkably scalable and are simple to train\. In this work, we combine these strengths, by deriving a direct relation between policy improvement and guidance of diffusion models\. The resulting framework, CFGRL, is trained with the simplicity of supervised learning, yet can further improve on the policies in the data\. On offline RL tasks, we observe a reliable trend \-\- increased guidance weighting leads to increased performance\. Of particular importance, CFGRL can operate without explicitly learning a value function, allowing us to generalize simple supervised methods \(e\.g\., goal\-conditioned behavioral cloning\) to further prioritize optimality, gaining performance for "free" across the board\.

## Learnable Diffusion\-based Positional Encodings for Link Prediction

**Authors:** Jiaji Ma; Murad Huseynli; Danai Koutra

**ID:** 152946 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PBFzkDs0PP>) | [PDF](<https://openreview.net/pdf?id=PBFzkDs0PP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152946>)

Link prediction relies on pairwise structural proximity, but standard node representations are not explicitly designed so that their interactions reflect such signals\. Existing structure\-aware approaches address this gap through specialized architectures or handcrafted proximity features, often at the expense of generality or additional computational cost\. In this work, we take a data\-centric approach and propose $\\text\{LinkDPE\}$, a learnable $\\underline\{\\text\{d\}\}$iffusion\-based $\\underline\{\\text\{p\}\}$ositional $\\underline\{\\text\{e\}\}$ncoding framework that injects structural proximity into the node features\. Our key idea is that diffusion kernels, which capture multi\-scale connectivity patterns, admit a factorization into node\-wise embeddings whose inner products recover pairwise proximity scores\. Based only on the observed training graph, $\\text\{LinkDPE\}$ constructs diffusion\-based encodings across scales, adaptively selects complementary diffusion scales, and learns task\-specific spectral weightings, enabling a wide range of link predictors to exploit structural information without architectural modification\. Theoretically, we show that \(i\) diffusion proximity admits a node\-wise kernel factorization, \(ii\) many classical link prediction heuristics are recovered as special cases of low\-order walk and diffusion operators, and \(iii\) multi\-scale spectral responses allow the model to capture a richer set of structural similarity patterns within a shared truncated spectral basis\. Across 8 benchmark datasets and 5 representative base models, $\\text\{LinkDPE\}$ consistently improves link prediction performance over original features and positional\-encoding baselines, yielding average gains of 6\.97\\% over the unaugmented base models\.

## STREAM: Stochastic Riemannian Flow Matching with Anisotropic Decoder for Digital Histopathology Image Generation

**Authors:** Won June Cho; Daeky Jeong; Hyeongyeol Lim; Hongjun Yoon

**ID:** 149538 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pP7kJXjPeY>) | [PDF](<https://openreview.net/pdf?id=pP7kJXjPeY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149538>)

Synthetic histopathology image generation addresses critical challenges in computational pathology, including patient privacy and the growing need for large\-scale training data for foundation models\. Latent diffusion models have dominated the image generation domain, with recent works emphasizing that the choice of latent space is critical to the quality of generated images\. Existing state\-of\-the\-art generative models in histopathology use pretrained Vision Foundation Models \(VFMs\) as conditioning signals, and we observe that this leads to \`\`conditioning collapse'', where the conditioning signal dominates the latent space and lowers the quality and diversity of generated samples\. Therefore, we instead use pretrained histopathology VFMs as the latent space itself, leveraging their patch\-token features that encode rich semantic information\. We empirically show that these features are $\\ell\_2$\-normalized and lie on the unit hypersphere $\\mathcal\{S\}^\{d\-1\}$ with strong angular dominance and intrinsic curvature, making them naturally suited for a Riemannian formulation\. We therefore present STREAM, the first framework to apply Riemannian flow matching in the pathology domain\. STREAM consists of two stages: 1\) a bridge\-type stochastic perturbation that establishes per\-token rectifiability on $\\mathcal\{S\}^\{d\-1\}$ for training a Diffusion Transformer \(DiT\) in latent space, and 2\) a novel anisotropic decoder that allocates robustness to data\-sparse directions while preserving fidelity along data\-dense ones\. Together, STREAM achieves state\-of\-the\-art reconstruction and generation performance on breast and colorectal cancer datasets\.

## AtomMOF: All\-Atom Flow Matching for MOF\-Adsorbate Structure Prediction

**Authors:** Nayoung Kim; Honghui Kim; Sihyun Yu; Minkyu Kim; Seongsu Kim; Sungsoo Ahn

**ID:** 149909 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mJ3KktOdtZ>) | [PDF](<https://openreview.net/pdf?id=mJ3KktOdtZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149909>)

Metal\-organic frameworks \(MOFs\) are promising materials for applications such as direct air capture, where performance depends on how adsorbates bind within the framework\. Accurately predicting MOF\-adsorbate configurations is therefore important for screening candidate materials\. However, traditional approaches are computationally expensive and require a known host structure, while existing generative models rely on rigid\-body assumptions and do not explicitly model adsorbates\. We introduce AtomMOF, a scalable all\-atom flow\-matching model that jointly predicts MOF\-adsorbate structures from discrete building blocks and adsorbates\. Built on a Diffusion Transformer with a building block\-based pairwise attention bias, AtomMOF operates in an unconstrained all\-atom space and exhibits clear scaling behavior\. To improve the structural validity of flexible all\-atom models, we also propose Feynman\-Kac \(FK\) steering with machine\-learned interatomic potentials \(MLIPs\)\. On the BW dataset, AtomMOF achieves a 58\.17\\% relative increase in match rate and a 31\.84\\% relative reduction in RMSD compared with prior work\. MLIP\-guided steering further improves validity by 28\.7\\% and reduces formation energy error by 86\.5\\%\. On ODAC25, AtomMOF generates adsorption configurations faster than GCMC and, when combined with MLIP relaxation, identifies lower\-energy configurations than those in the reference dataset\.

## From Generation to Restoration: Residual Diffusion for Neural Channel Decoding

**Authors:** Qinshan Zhang; Shipeng Guo; Xuantai Wu; Bin Chen; Zhuochen Fan; Yong Jiang; Shu\-Tao Xia; Qing Li

**ID:** 152020 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W6pSRJD1gO>) | [PDF](<https://openreview.net/pdf?id=W6pSRJD1gO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152020>)

Neural decoders have shown strong potential for error correction in short\- and moderate\-length regimes, yet a fundamental tension remains between decoding accuracy and inference latency\. Recent attempts to leverage diffusion probabilistic models for channel decoding typically adopt a fully generative paradigm, initializing the reverse process from an observation\-agnostic prior, which overlooks a key structural property of channel decoding: the received signal already contains substantial information about the target codeword\. In this work, we propose Channel Residual Diffusion Model \(ChRes\-DM\), a principled diffusion\-based decoding framework that reinterprets channel decoding as a directed restoration process anchored at the noisy observation\. Instead of sampling from a generic prior, ChRes\-DM constructs a geometric residual bridge between the received signal and the clean codeword, explicitly modeling the conditional transport induced by the channel and leading to a deterministic Probability Flow Ordinary Differential Equation \(PF\-ODE\) that governs the decoding dynamics\. By eliminating redundant stochastic sampling inherent in conventional diffusion models, ChRes\-DM enables efficient iterative decoding with flexible step\-skipping, offering fine\-grained control over the accuracy–latency trade\-off\. Extensive experiments across representative channel coding benchmarks demonstrate that ChRes\-DM achieves competitive or superior decoding performance compared to existing neural decoders while significantly reducing inference iterations, highlighting diffusion\-based residual transport as a promising and scalable paradigm for neural channel decoding\.

## DELTA: Robustly Training Label\-Conditional Diffusion Models with Weak Annotations

**Authors:** Dong\-Dong Wu; Jiacheng Cui; Wei Wang; Zhiqiang Shen; Masashi Sugiyama

**ID:** 155940 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1fJGfUpQRC>) | [PDF](<https://openreview.net/pdf?id=1fJGfUpQRC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155940>)

While label\-conditional diffusion models exhibit remarkable generative capabilities recently, their success heavily relies on massive, cleanly labeled datasets\. In practice, categorical supervision is rarely perfect: it is often corrupted by noise, clouded by ambiguity, or partially missing\. Training directly on such weak annotations severely degrades generation quality, and existing robust methods offer only fragmented solutions that depend on scarce auxiliary priors\. To overcome these limitations, we propose DELTA, a unified framework that robustly trains diffusion models across all three weak annotation types without any external priors\. By treating the unknown true label as a latent variable, DELTA optimizes a principled variational objective that jointly recovers the clean data distribution and infers the true label posteriors\. To make this joint training computationally tractable, we further introduce a median\-centered timestep sampling strategy that efficiently concentrates evaluation where the diffusion process is most informative\. Extensive experiments demonstrate that DELTA produces high\-fidelity, class\-consistent samples across diverse weak supervision scenarios, outperforming specialized baselines while demanding strictly less prior knowledge\.

## SchedDiff: Diffusion\-Based Priority Refinement for Job Shop Scheduling

**Authors:** Dong\-Yoon Oh; Sang\-Hyun Cho; Inguk Choi; Hyun\-Jung Kim

**ID:** 149295 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rKShsqNZjW>) | [PDF](<https://openreview.net/pdf?id=rKShsqNZjW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149295>)

Neural combinatorial optimization methods for the Job Shop Scheduling Problem \(JSSP\) face a fundamental trade\-off between solution quality and inference efficiency: constructive methods build high\-quality schedules through sequential decisions whose computational cost scales with problem size, whereas one\-shot methods offer highly efficient single\-pass inference at the expense of solution quality\. We propose SchedDiff, the first diffusion\-based framework for JSSP, which bridges this gap by iteratively refining operation priorities through a fixed number of denoising steps\. Unlike existing diffusion models for combinatorial optimization that operate in a binary space, SchedDiff operates directly in a discrete ordinal space, introducing a forward process and learning objective specifically tailored to ranking structures\. To decode the refined priorities into feasible schedules, we introduce active list scheduling, which provably produces more compact schedules than standard list scheduling\. Extensive experiments on TA, DMU, and LA benchmarks demonstrate that SchedDiff achieves state\-of\-the\-art performance among learning\-based methods, with efficiency advantages that become more pronounced on large\-scale instances\. SchedDiff further exhibits strong generalization, scaling to instances significantly larger than those seen during training, generalizing across unseen problem distributions, and transferring zero\-shot to flexible JSSP\.

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

## NAGO: Noise\-Aware Generative Operator via Flow Matching

**Authors:** Guanyu Chen; Shengze Xu; Pengwei Liu; Xingyu Ren; Pengkai Wang; Tieyong Zeng; Antonios Armaou; Dong Ni

**ID:** 149607 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=opzL6gPOhn>) | [PDF](<https://openreview.net/pdf?id=opzL6gPOhn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149607>)

We introduce NAGO, a noise\-aware generative operator for efficient sampling from invariant measures of stochastic partial differential equations \(SPDEs\) in function space\. Our central idea is to treat the noise measure as a design variable rather than a fixed default\. While existing generative approaches mainly shape the sampling process through interpolation schedules or guidance heuristics, NAGO directly controls the marginal velocity field in functional flow matching by choosing a noise measure with suitable regularity\. We establish conditions under which the resulting noise\-induced flows are well defined in infinite\-dimensional settings, and show how noise regularity affects the spectral geometry and stiffness of the marginal velocity field\. This analysis leads to a principled design rule: match the regularity of the noise measure to that of the target invariant measure\. The resulting method enables stable training and fast sampling without relying on downstream correction mechanisms\. Experiments on three representative SPDEs with multiscale invariant measures show that NAGO consistently improves the accuracy\-\-efficiency trade\-off over standard flow matching baselines, while achieving up to two orders of magnitude speedup compared with classical numerical solvers\.

## Inference\-Time Self\-Aligned Drifting for Few\-Step Flow Matching

**Authors:** Shigui Li; JIAN XU; Wei Chen; Junmei Yang; Fei Wang; Daiguo Zhou; Delu Zeng

**ID:** 155309 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ZIc3ymky8>) | [PDF](<https://openreview.net/pdf?id=6ZIc3ymky8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155309>)

Flow Matching \(FM\) provides an efficient formulation for continuous\-time generative modeling via straight optimal transport \(OT\) trajectories\. However, during accelerated sampling, these models face a fundamental variance\-fidelity dilemma\. Under few\-step deterministic Ordinary Differential Equation \(ODE\) integration, the rigid OT trajectories suffer from mean concentration, leading to severe variance collapse and the loss of high\-frequency details\. Conversely, traditional Stochastic Differential Equations \(SDEs\) inject blind, exogenous Brownian noise to recover variance, but this isotropic exploration incurs inherent numerical attrition over long integration paths, bottlenecking peak fidelity\. To resolve this, we introduce Self\-Aligned Drifting \(SADrift\) to mitigate these challenges without external priors\. SADrift is an inference\-time framework that augments flow matching inference with self\-interacting dynamics, without additional  training\.  By maintaining a momentum history of the sampling trajectory, SADrift extracts the \\emph\{kinematic residual\} to generate a deterministic extrapolative field\. This mechanism forces the trajectory to efficiently explore the local tangent space, effectively   decoupling   exploratory variance into targeted deterministic dispersion and a minimal stochastic buffer\. To safely anchor these dispersed trajectories and prevent out\-of\-distribution divergence, the residual drift is analytically integrated into a micro\-time Ornstein\-Uhlenbeck \(OU\) process, providing a mathematically sound, mean\-reverting geometric safeguard\. Requiring exactly zero additional Neural Function Evaluations \(NFE\), SADrift empowers a frozen base model to achieve a highly competitive FID of 2\.00 at just 20 NFE on ImageNet\-256\. By successfully bypassing the numerical attrition of the 250\-step SDE baseline \(FID 2\.06\), SADrift establishes a new Pareto frontier for variance injection\. Beyond image synthesis, we further validate SADrift on fast video generation paradigms \(e\.g\., TurboDiffusion with Wan2\.1\-1\.3B\), demonstrating its universal capability to unlock latent generative quality across different modalities and acceleration regimes\.

## Stochastic Heat Diffusion Models

**Authors:** Marc Law; Xiaoyu Wang; Lucas Berry; Anthony L Caterini; Gabriel Loaiza\-Ganem

**ID:** 149733 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nlt2l4kt7S>) | [PDF](<https://openreview.net/pdf?id=nlt2l4kt7S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149733>)

This work introduces a family of generative diffusion models based on the stochastic heat equation\. The deterministic heat equation has natural connections with kernels over discrete structures and has been successfully applied in machine learning to discriminative tasks for various types of data such as graphs\. We extend it to a stochastic version by formulating our diffusion as a Gaussian process whose transition kernel can be written in closed form for both the forward\- and reverse\-time processes\. Our diffusion process propagates noise smoothly among neighbours under the guidance of a Laplacian matrix that describes the global structure of the input\. Following a flow matching\-based approach, we train a denoising neural network that takes noisy representations as input and gradually removes noise to generate clean samples\. We experimentally show that, by exploiting the Laplacian during training, our decoder is able to recover the global structure of the input\.

## Improving the Diffusability of Motion Tokenizer

**Authors:** Guanhe Huang; Songqiao Han; Tangzheng Lian; Oya Celiktutan

**ID:** 150734 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fnQkgTUCzX>) | [PDF](<https://openreview.net/pdf?id=fnQkgTUCzX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150734>)

Latent diffusion models paired with a variational auto\-encoder \(VAE\) tokenizer have shown promising performance for efficient text\-driven human motion generation\. However, motion latent diffusion suffers from a generation\-reconstruction trade\-off: simply increasing tokenizer capacity enhances reconstruction but fails to proportionally improve text\-conditioned generation quality\. We assume this trade\-off stems from a spectral mismatch inside the VAE tokenizer: the encoder yields a latent space biased toward high frequencies, and the decoder introduces temporal artifacts\. In this paper, we propose the Diffusable Motion Tokenizer \(DiMoT\) to improve the diffusability of the tokenizer, rather than scaling up the diffusion backbone\. To improve text\-conditioned optimization, Critic Spectral Adaptation \(CSA\) leverages a pretrained diffusion model as the critic to suppress high\-frequency latent energy\. To preserve motion dynamics, the Alpha\-Flow Motion Decoder \(AMD\) performs generative decoding via average\-velocity prediction, enabling efficient one\-step decoding\. Extensive experiments demonstrate that DiMoT achieves state\-of\-the\-art performance across various challenging text\-to\-motion benchmarks, yielding superior motion fidelity and text\-motion alignment\. The code will be available upon publication\.

## Drifting Fields are not Conservative

**Authors:** Leonard T\. Franz; Sebastian Hoffmann; Tim Weiland; Bernhard Schölkopf; Georg Martius

**ID:** 155051 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8pC5fd3IzY>) | [PDF](<https://openreview.net/pdf?id=8pC5fd3IzY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155051>)

Drifting models have recently gained attention for generating high\-quality samples in a single forward pass\. During training, they learn a push\-forward map by following a vector\-valued field, the \*drift field\*\. We ask whether this procedure is equivalent to optimizing a scalar loss and find that, in general, it is not: drift fields are \*not conservative\* and cannot be written as the gradient of any scalar potential\. We identify the position\-dependent normalization as the source of non\-conservatism, with the Gaussian kernel as the unique radial exception\. Guided by this, we introduce the \*sharp kernel\* $k^\\\\\#$ and a sharp\-normalized drift field that is conservative for general radial kernels\. The resulting vector field is the gradient of a scalar potential that can be optimized directly using stochastic gradient descent\. Moreover, the field has the form of a score difference of kernel density estimates, and gives exact equilibrium identifiability\. Thus, sharp normalization closes the gap to related literature, such as Wasserstein gradient\-flows and denoising score matching, also for non\-Gaussian kernels\. Empirically, sharp normalization preserves the performance of the original drifting objective, suggesting that the non\-conservative flexibility is not required for high\-quality generation\.

## Beyond Semantics: The Unreasonable Effectiveness of Reasonless Intermediate Tokens

**Authors:** Karthik Valmeekam; Vardhan Palod; Kaya Stechly; Atharva Gundawar; Subbarao Kambhampati

**ID:** 156774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156774>)

Recent impressive results from large reasoning models have been interpreted as a triumph of Chain of Thought \(CoT\), and especially of the process of training on CoTs sampled from base LLMs in order to help find new reasoning patterns\. While these traces certainly seem to help the model performance, it is not clear how they actually influence model performance, with some works ascribing semantics to them and others cautioning against relying on them as transparent and faithful proxies of the model's internal computational process\. To systematically investigate the role of end\-user semantics of derivational traces, we set up a controlled study where we train transformer models from scratch on formally verifiable reasoning traces and the solutions they lead to, constraining both intermediate steps and final outputs to align with those of a formal solver\. We notice that, despite significant improvements over the solution\-only baseline, models trained on entirely correct traces can still produce invalid reasoning traces even when arriving at correct solutions\. More interestingly, our experiments also show that models trained on corrupted traces, whose intermediate reasoning steps bear no relation to the problem they accompany, achieve performance largely comparable to those trained on correct traces\. In fact, our corrupted models generalize better on out\-of\-distribution tasks\. We also study the effect of GRPO\-based RL post\-training on trace validity, noting that while solution accuracy increase, this is not accompanied by any improvements in trace validity\. Finally, we examine whether reasoning\-trace length reflects inference\-time scaling and find that trace length is largely agnostic to the underlying computational complexity of the problem being solved\. These results challenge the assumption that intermediate tokens or "Chains of Thought" reflect or induce predictable reasoning behaviors and caution against anthropomorphizing such outputs or over\-interpreting them \(despite their mostly seemingly forms\) as evidence of human\-like or algorithmic behaviors in language models\.

## Permutation\-Invariant Spectral Learning via Dyson Diffusion

**Authors:** Tassilo Schwarz; Cai Dieball; Constantin Kogler; Renaud Lambiotte; Arnaud Doucet; Aljaz Godec; George Deligiannidis

**ID:** 150187 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k4MGmGsA9o>) | [PDF](<https://openreview.net/pdf?id=k4MGmGsA9o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150187>)

Diffusion models are central to generative modeling and have been adapted to graphs by diffusing adjacency matrix representations\. The challenge of having up to $n\!$ such representations for graphs with $n$ nodes is only partially mitigated by using permutation\-equivariant learning architectures\. Despite their computational efficiency, existing graph diffusion models struggle to distinguish certain graph families and their spectra, unless graph data are augmented with ad hoc features\. This shortcoming stems from enforcing the inductive bias within the learning architecture\. In this work, we leverage random matrix theory to analytically extract the spectral properties of the diffusion process, allowing us to push most of the inductive bias from the architecture into the dynamics\. Building on this, we introduce the Dyson Diffusion Model, which employs Dyson's Brownian motion to capture the spectral dynamics of an Ornstein\-Uhlenbeck process on the adjacency matrix\. Furthermore, conditioned on the spectral dynamics, we formulate a Lie group diffusion, appropriately modeling the remaining degrees of freedom\. Strikingly, the resulting learning problem becomes permutation invariant at the Lie algebra level\. We demonstrate that the Dyson Diffusion Model learns graph spectra accurately and outperforms existing graph diffusion models\.

## RB\-LDC: Redundancy\-Balanced Latent Coding for Robust Diffusion

**Authors:** Hyunseok Jeong; Jaeho Jeon; Young\-Sik Kim

**ID:** 152929 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PJDxN5JBij>) | [PDF](<https://openreview.net/pdf?id=PJDxN5JBij>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152929>)

Latent diffusion models \(LDMs\) achieve high\-fidelity generation by moving diffusion from pixels to a compact latent space, but standard tokenizers are optimized for compression, not robustness under diffusion\-time corruption\. We formulate latent tokenization as diffusion\-aware joint source\-\-channel coding and diagnose standard LDM pipelines as missing an explicit channel\-coding step\. A diffusion\-aware rate\-\-robustness functional admits an explicit spectral characterization in $G^\\top G$, yielding the Redundancy\-Balance Principle: optimal redundancy is not uniform, but aligns with semantic sensitivity and equalizes marginal integrated\-risk reduction across active directions\. The resulting optima take weighted tight\-frame and water\-filling forms; isotropic bottlenecks are minimax\-suboptimal under heterogeneous sensitivity, and a group\-conditioned extension identifies rare groups as capacity\-limiting under a fixed latent budget\. We instantiate the theory as RB\-LDC \(Redundancy\-Balanced Latent\-Diffusion Coding\), a lightweight tokenizer modification that inserts a learned coding layer before diffusion\. Six controlled experiments validate the theorem sequence up to $k\{=\}1024$, with a $53\.5\\times$ alignment gap, $659\\times$ minimax gap, and real\-image VAE learnability via Adam recovery of the KKT spectrum with relative error below 0\.5 percent\. On SD\-VAE and VA\-VAE at ImageNet\-256, RB\-LDC outperforms isotropic uniform redundancy in all 20 perturbed metric cells over a 15\-SNR grid; VA\-VAE block\-local obtains $\-15\.40$ average pFID and $\-105\.79$ peak pFID at $\\log\_\{10\}\\rho\{=\}\+1$, while preserving clean rFID parity \(gap $\-0\.0001$\)\. RB\-LDC turns latent tokenizer design into a reliability problem for diffusion models\.

## dRAE: Representation Autoencoder with Hyper\-Spherical Codes

**Authors:** Tianren Ma; Lin Long; Chuyan Chen; Mu Zhang; Junbo Zhao; Tong Zhang; Qixiang Ye

**ID:** 148680 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vrjQMuRQQi>) | [PDF](<https://openreview.net/pdf?id=vrjQMuRQQi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148680>)

Multi\-modal models require visual tokenizers that jointly capture high semantic density and fine\-grained structural fidelity\. Representation Autoencoders \(RAEs\) offer a promising direction by decoding images directly from a pre\-trained semantic space using high\-dimensional continuous tokens, bypassing the information bottleneck of VAEs and benefiting both visual understanding and generation\.   In this work, we aim to discretize these continuous vision representations to bridge the gap with language models — a non\-trivial challenge, as existing quantization methods suffer from codebook collapse, failing to scale while preserving semantic coherence\. We identify the root cause as \*\*metric mismatch\*\*: standard Euclidean codebook objectives are fundamentally misaligned with the anisotropic geometry of representation space, leading to codebook embeddings with high\-variance magnitude scales and uneven angular distributions that hinder scalability\.   To address this, we propose \*\*Hyper\-Spherical Quantization \(HSQ\)\*\* , which decouples semantic content from feature magnitude via angular routing, preventing code assignment from being dominated by scale rather than meaning\. The resulting \*\*discrete Representation Autoencoder \(dRAE\)\*\*  achieves high\-fidelity reconstruction while preserving semantic integrity and supporting scalable discrete latent spaces\. Extensive experiments demonstrate consistent performance gains as the vocabulary size scales to $131,072$, along with strong unified performance across both visual understanding and generation benchmarks\.

## Learn from Your Mistakes: Self\-Correcting Masked Diffusion Models

**Authors:** Yair Schiff; Omer Belhasin; Roy Uziel; Guanghan Wang; Marianne Arriola; Gilad Turok; Ran Zilberstein; Miki Elad; Volodymyr Kuleshov

**ID:** 154509 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D3SBs8maVe>) | [PDF](<https://openreview.net/pdf?id=D3SBs8maVe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154509>)

Masked diffusion models \(MDMs\) have emerged as a promising alternative to autoregressive models, enabling parallel token generation while achieving competitive performance\. Despite these advantages, MDMs face a fundamental limitation: once tokens are unmasked, they remain fixed, leading to error accumulation and ultimately degrading sample quality\. We address this by proposing a framework that trains a model to perform both unmasking and correction\. By reusing outputs from the MDM denoising network as inputs for corrector training, we train a model to recover from potential mistakes\. During generation we apply additional corrective refinement steps between unmasking ones in order to change decoded tokens and improve outputs\. We name our training and sampling method Pro gressive Se lf\- Co rrection \( ProSeCo \) for its unique ability to iteratively refine an entire sequence, including already generated tokens\. We conduct extensive experimental validation across multiple conditional and unconditional tasks, demonstrating that \\method\~yields better quality\-efficiency trade\-offs \(up to \~4x faster sampling\) and enables inference\-time compute scaling to further increase sample quality beyond standard MDMs \(up to \~1\.2x improvement on benchmarks\)\.

## Rethinking Forward Processes for Score\-Based Nonlinear Data Assimilation in High Dimensions

**Authors:** EUNBEE YOUN; Donghan Kim; Dae W Kim

**ID:** 149083 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t0B0sxJzdY>) | [PDF](<https://openreview.net/pdf?id=t0B0sxJzdY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149083>)

Data assimilation is the process of estimating the state of a dynamical system over time by combining model predictions with measurements\. This task becomes challenging when the system is nonlinear and high\-dimensional\.  To address this, score\-based Bayesian filters have recently emerged\.  However, these methods still show unsatisfactory performance in certain cases, particularly under spatially sparse measurements\.  Such degradation stems from heuristic approximations of the likelihood score, whose errors can accumulate over time\. This limitation arises because the methods simply adopt a classical forward process for generative modeling that transforms a data distribution toward a Gaussian distribution, which is independent of the measurement equation\. Here, we propose a forward process tailored for filtering that transforms the system state toward the measurement space, enabling a theoretically sound formulation of the likelihood score\. Based on this, we develop the Measurement\-Aware Score\-Based Filter \(MASF\)\. We evaluate MASF on the Kolmogorov flow, a high\-dimensional fluid benchmark with up to $\\mathcal\{O\}\(10^5\)$ dimensions, under diverse measurement operators, including nonlinear cases with dimensional mismatch between the state and the measurements\. MASF shows improved performance over existing score\-based filters and ensemble\-type Kalman filters\. With amortized pretraining, MASF also achieves up to a $28\.2\\times$ wall\-clock speedup compared with the baselines\.

## DC\-SAE: Deep Compression Semantic Autoencoder for Faster Diffusion Convergence

**Authors:** Xu Huang; Ye Huang; Zijun Liao; Yuwei Niu; Xiaojie Li; Menghan Zhou; De Wen Soh; Xiaotong Li; Daquan Zhou

**ID:** 152595 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rx1xVinvFW>) | [PDF](<https://openreview.net/pdf?id=Rx1xVinvFW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152595>)

High\-compression tokenizers are essential for scaling latent image generative models\. However, aggressive compression creates a fundamental tradeoff between reconstruction fidelity and generation efficiency: high compression image encoder always increase the learning diffucity of diffusion training, resulting slow model convergence\. Recent representation autoencoders speed\-up the diffusion training by improving the latent feature's expressive capability by replacing VAE encoders with pretrained semantic encoders, yet they are typically limited to moderate compression and lose pixel\-level details necessary for faithful reconstruction\.  To achieve both high compression and fast diffusion training, we propose DC\-SAE, a Decoupled Compact Semantic Autoencoder designed for high\-compression image generation with accelerated diffusion model convergence\. DC\-SAE consists of two key components: \(1\) a macro\-level architecture design that leverages semantic encoders to enable higher compression ratios, and \(2\) a pixel\-level encoder that preserves low\-level details, ensuring high\-fidelity image reconstruction\. We empirically demonstrate that DC\-SAE performs strongly on image generation tasks, achieving both compact latent representations and efficient training dynamics\. % Specifically, on ImageNet dataset with $512 \\times 512$ resolution, DC\-SAE achieves  $32\\times$ spatial compression, with \\textbf\{29\.79\} PSNR and \\textbf\{3\.05\} gFID, substantially outperforming the previous state\-of\-the\-art high\-compression tokenizer baselines DC\-AE by 13\.5\\% and 59\.7\\% on PSNR and gFID respectively, maintaining comparable throughput and faster diffusion model training convergence\.

## Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints

**Authors:** Ting Gao; Stavros Orfanoudakis; Nan Lin; Winnie Daamen; Serge Hoogendoorn; Elvin Isufi

**ID:** 148142 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zxpb2T9sJT>) | [PDF](<https://openreview.net/pdf?id=zxpb2T9sJT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148142>)

Balancing policy expressiveness with the exploration\-exploitation trade\-off is a core challenge in online Reinforcement Learning \(RL\)\. While Stochastic Differential Equation \(SDE\)\-based diffusion policies can represent complex, multimodal action distributions, they suffer from two critical limitations: their stochastic reverse processes render entropy intractable \(necessitating heuristic exploration\), and computing policy gradients through long denoising chains is expensive and unstable\. In this work, we show that ODE\-based flow matching inherently resolves these issues by enabling both simulation\-free policy optimization and tractable entropy computation\. Building on this, we introduce Flow Matching Policy Optimization with Mirror Descent and Entropy Constraints \(FMER\)\. Our framework exploits this insight in three ways\. First, we theoretically establish that minimizing an advantage\-weighted conditional flow matching loss acts as a simulation\-free surrogate for policy mirror descent\. This steers the velocity field toward high\-value regions while entirely avoiding backpropagation through the ODE solver\. Second, we derive an analytic entropy objective that corrects for the density distortion caused by the $\\tanh$ transformation \(mapping an unbounded latent space to bounded actions\), thereby facilitating principled maximum\-entropy optimization\. Finally, we dynamically tune the mirror descent temperature based on the effective sample size to enforce a robust trust region during training\. Empirical evaluations demonstrate that FMER achieves superior performance on the challenging sparse\-reward FrankaKitchen environment, while maintaining competitive results across standard dense\-reward MuJoCo benchmarks\. Code is available at \\url\{https://anonymous\.4open\.science/r/submission\-25E2/\}\.

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

## Why Deterministic PRM Guidance Underperforms in Discrete Diffusion Reasoning

**Authors:** Yan Zhan; Shaobo Liu; Zhijun Gao

**ID:** 148438 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xogwvIhOYH>) | [PDF](<https://openreview.net/pdf?id=xogwvIhOYH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148438>)

We present a diagnostic study of reward guided reasoning in discrete diffusion language models \(dLLMs\)\. On in\-distribution GSM8K with Dream\-v0\-Instruct\-7B, deterministic segmental top\-$1$ guidance using outcome\-supervised intermediate\-state reward models underperforms a simpler matched\-compute baseline: independent best\-of\-$N$ sampling plus a GSM8K\-trained final\-answer outcome reward model \(ORM\) reranker\. The setup appears well suited for PRM guidance because dLLM intermediate states partially expose solution evidence; however, these states are unordered masked subsets rather than autoregressive prefixes, and prior reward\-guided decoding results rarely report matched forward\-pass compute against simple verifier reranking\. We study \\emph\{outcome\-supervised\} PRMs trained with binary final\-correctness labels on dLLM intermediate states\. Under a protocol that charges denoising, PRM scoring, and ORM scoring in the same forward\-pass unit, deterministic PRM\-guided search trails ORM Rerank by $9\.95$ and $12\.69$ percentage points \(pp\) in seed\-mean aggregate at matched candidate budgets $K\{=\}8$ and $K\{=\}32$; paired bootstrap CIs on seed $42$ exclude zero\. Two mechanisms account for much of the headline gap: bidirectional PRM ROC\-AUC \(area under the receiver operating characteristic curve\) decays from $0\.77$ to $0\.54$ with mask ratio, and deterministic top\-$1$ pruning drops the guided pool's perfect\-selector ceiling by $\\sim$$14$\\,pp\. A third diagnostic shows that mean pooling also weakens causal PRM variants\. Matched\-compute ORM Rerank thus emerges as the strong baseline when an in\-distribution final\-answer verifier is available; closing the gap requires PRM guidance that preserves candidate diversity and queries the scorer at denoising stages where it remains discriminative, neither of which the deterministic top\-$1$ recipe satisfies\.

## A Generative Model of Contextual Integrity: Appropriate vs\. Inappropriate Information Sharing

**Authors:** Omer Ebead; Juan Formanek; Joel Leibo

**ID:** 148966 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tnB9Xtbfa6>) | [PDF](<https://openreview.net/pdf?id=tnB9Xtbfa6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148966>)

Contextual integrity \(CI\) holds that appropriate information flow depends on context\-specific norms\. The same disclosure may be appropriate in one context and inappropriate in another\. As actors handle private user data in multi\-actor pipelines, we ask whether they track these norms faithfully under social and contextual pressure\. We build a generative model of CI in multi\-actor systems: scenarios drawn from CI's taxonomies, a generation pipeline, multi\-actor simulation, and a two\-sided appropriateness metric\. The metric scores both withholding when norms forbid sharing and sharing when they permit it\. Across three intervention axes \(decision logic, cognitive profile, and model choice\), no actor\-level lever closes both sides of the appropriateness gap; protection and utility trade off in every variant we tested\. Closing the gap may require mechanisms beyond the actor level, such as CI\-grounded policy and institution design\.

## LYNX: Learning Dynamic Exits for Confidence\-Controlled Reasoning

**Authors:** Ömer Faruk Akgül; Yusuf H Kalayci; Rajgopal Kannan; Willie Neiswanger; Viktor Prasanna

**ID:** 149284 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rSKYIHN4OX>) | [PDF](<https://openreview.net/pdf?id=rSKYIHN4OX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149284>)

Large reasoning models achieve strong performance by generating long chains of thought, yet extended reasoning is often counterproductive: models frequently continue past the point of sufficiency, wasting compute and sometimes degrading correctness by revising a correct solution into an incorrect one\. We show that reasoning models encode a domain\-general \\emph\{readiness\} signal in their hidden states, concentrated at natural high\-uncertainty points such as "wait" and "hmm", that predicts whether stopping at a given moment would yield the correct answer\. Building on this finding, we propose LYNX, an online early\-exit framework that reads out this signal during generation and wraps it in split conformal calibration, giving practitioners a single confidence dial with calibrated control over erroneous exits rather than per\-task heuristic thresholds\. The readout requires no external verifier, auxiliary model, or additional human annotation: stop/continue labels are obtained by forcing the base model to answer at candidate stopping points and comparing to the task answer\. A single LYNX head trained and calibrated once on a generic mathematical corpus transfers unchanged across benchmarks, decoding temperatures, and non\-mathematical domains including commonsense reasoning and code generation, suggesting that readiness reflects model\-internal representations rather than task\-specific heuristics\. Across three model families spanning 1\.5B\-\-32B parameters, LYNX matches or improves baseline accuracy while reducing generated tokens by 30\-\-70\\%, with competitive or superior accuracy\-\-efficiency Pareto frontiers relative to prior early\-exit methods\.

## Structured Coupling for Flow Matching

**Authors:** Francisco Sumba Toral; Carles Balsells Rodas; Yingzhen Li

**ID:** 153603 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KA6cQELF6H>) | [PDF](<https://openreview.net/pdf?id=KA6cQELF6H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153603>)

Standard flow matching scales well but typically relies on an unstructured source distribution, limiting its ability to learn interpretable latent structure\. Latent\-variable models, by contrast, capture structure but often sacrifice generative quality\. We bridge this gap by proposing Structured Coupling for Flow Matching \(SCFM\), a cooperative framework that augments flow matching with structured latent representation learning\. By introducing structured latent variables and exogenous noise into the source, SCFM jointly learns a structured prior \(via latent variable modeling\) and a continuous transport map \(via flow matching\)\. It uses a shared time\-dependent recognition network for both latent variable model variational inference and intermediate\-time flow velocity estimation\. This yields a structurally informed yet unconditional, simulation\-free flow model, where the latent variable model can also assist flow sampling\. Empirically, SCFM facilitates unsupervised latent representation learning for clustering, disentanglement and downstream tasks, while remaining competitive with flow matching in sample quality, showing that meaningful structure can be learned without sacrificing generative fidelity\.

## Hypergraph Generation with Latent Diffusion

**Authors:** Valerio Di Pasquale; Alessia Antelmi; Mirko Polato; Carmine Spagnuolo

**ID:** 154651 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C27xHBHKGe>) | [PDF](<https://openreview.net/pdf?id=C27xHBHKGe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154651>)

Hypergraphs capture high\-order interactions that ordinary graphs cannot represent, yet generating realistic ones remains challenging because existing methods often rely on fixed structural assumptions or struggle to model coupled dependencies between nodes and hyperedges\. In this work, we propose \\textsc\{Janus\}, a latent diffusion framework that decomposes an observed hypergraph into sub\-hypergraphs, learns coupled node and hyperedge latent representations with a dual\-view $\\beta$\-VAE, and generates new structures through paired latent diffusion with cross\-view conditioning\. The method supports both unconstrained and node\-set\-constrained generation\. We also introduce an evaluation protocol covering micro, meso, and macro scales interactions, structural reconstruction, and high\-order similarity measures\. Across five real\-world datasets and nine baselines, \\textsc\{Janus\} achieves the most stable performance across structural scales, with strong gains in meso\-scale and high\-order fidelity; in the constrained setting, it consistently obtains the best reconstruction results\.

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

## Neural Continuous\-Time Markov Chain: Discrete Diffusion via Decoupled Jump Timing and Direction

**Authors:** Jingyuan Li; Xiaoyi Jiang; Fukang Wen; WEI LIU; Renqian Luo; Yi Zhu; Zuoqiang Shi; Pipi Hu

**ID:** 156096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0PmwAantl5>) | [PDF](<https://openreview.net/pdf?id=0PmwAantl5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156096>)

Discrete diffusion models based on continuous\-time Markov chains \(CTMCs\) have shown strong performance on language and discrete data generation, yet existing approaches typically parameterize the reverse rate matrix monolithically\-\-\-through proxies such as concrete scores \(SEDD\) or clean\-data predictions \(MDLM, GIDD\)\-\-\-rather than aligning the parameterization with the intrinsic CTMC decomposition into jump timing and jump direction\. We propose \\textbf\{Neural CTMC\}, which exploits the underlying Poisson structure of CTMC dynamics by separately parameterizing the reverse process through an \\emph\{exit rate\} \(when to jump\) and a \\emph\{jump distribution\} \(where to jump\) via two dedicated network heads\. We show that the evidence lower bound \(ELBO\) reduces to a path\-space KL divergence between the true and learned reverse processes that factorizes into a Poisson KL for timing and a categorical KL for direction, and admits a tractable, gradient\-equivalent and consistent loss\. Experimentally, scored by Gemma2\-9B, our pure\-uniform Neural CTMC achieves $16\.36$ generative perplexity on TinyStories \(vs\.\\ GIDD $37\.60$ and MDLM $42\.66$\)\. On OpenWebText, it attains the best perplexity at the same training\-token budget across 16\-\-128 sampling steps among the methods we compare \(e\.g\., at 128 steps: Neural CTMC $183\.6$ vs\.\\ MDLM $210\.5$ and GIDD $249\.8$\)\.

## ELF: Embedded Language Flows

**Authors:** Keya Hu; Linlu Qiu; Yiyang Lu; Hanhong Zhao; Tianhong Li; Yoon Kim; Jacob Andreas; Kaiming He

**ID:** 148278 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z3I6Aj563f>) | [PDF](<https://openreview.net/pdf?id=z3I6Aj563f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148278>)

Diffusion and flow\-based models have become the de facto approaches for generating continuous data, e\.g\., in domains such as images and videos\. Their success has attracted growing interest in applying them to language modeling\. Unlike their image\-domain counterparts, today’s leading diffusion language models \(DLMs\) primarily operate over discrete tokens\. In this paper, we show that continuous DLMs can be made effective with minimal adaptation to the discrete domain\. We propose Embedded Language Flows \(ELF\), a class of diffusion models in continuous embedding space based on continuous\-time Flow Matching\. Unlike existing DLMs, ELF predominantly stays within the continuous embedding space until the final time step, where it maps to discrete tokens using a shared\-weight network\. This formulation makes it straightforward to adapt established techniques from image\-domain diffusion models, e\.g\., classifier\-free guidance \(CFG\)\. Experiments show that ELF substantially outperforms leading discrete and continuous DLMs, achieving better generation quality with fewer sampling steps\. These results suggest that ELF offers a promising path toward effective continuous DLMs\.

## MAGE: All\-\[MASK\] Block Already Knows Where to Look in Block Diffusion LLM

**Authors:** Omin Kwon; Yeonjae Kim; Doyeon Kim; Minseo Kim; Yeonhong Park; Jae W\. Lee

**ID:** 149356 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qf4h7O2aYi>) | [PDF](<https://openreview.net/pdf?id=qf4h7O2aYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149356>)

Block diffusion LLMs are an emerging paradigm for parallel language generation, but their KV caching makes memory access the dominant bottleneck in long\-context inference\. Sparse attention, which attends only to a small KV subset per query, can reduce this latency with minimal accuracy loss\. In block diffusion, however, the $B$ tokens of each block must share a single KV subset, and we show this per\-block constraint degrades existing sparse KV estimators by up to 25% in recall\. We address this challenge by exploiting a property that emerges from the block\-diffusion training objective: it aligns the block\-average query across denoising steps, so the All\-\[MASK\] block at the first step already reveals the per\-block KV subset for the entire trajectory\. We exploit this in MAGE \(\[MASK\]\-Guided Sparse Attention\), a training\-free method that runs one exact attention pass at the first step and reuses its top\-$k$ index sets for all remaining steps within the block\. Across three block\-diffusion families on LongBench, MAGE matches Exact Attention at $k\{=\}512$ with near\-lossless accuracy, achieves up to $6\.82\\times$ end\-to\-end speedup at $128$K context, and runs up to $3\.35\\times$ and $2\.28\\times$ faster than Quest and SparseD, designed for AR LLMs and fully bidirectional diffusion LLMs, respectively\.

## Flowette: Flow Matching with Graphette Priors for Graph Generation

**Authors:** Asiri Wijesinghe; Sevvandi Kandanaarachchi; Daniel M Steinberg; Cheng Soon Ong

**ID:** 151088 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d3pAaxyrAY>) | [PDF](<https://openreview.net/pdf?id=d3pAaxyrAY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151088>)

We study generative modeling of graphs with recurring subgraph motifs\. We propose Flowette, a continuous flow matching framework that employs a graph neural network\-based transformer to learn a velocity field over graph representations with node and edge attributes\. Our model promotes topology\-aware alignment through optimal transport\-based coupling and encourages global structural coherence through regularisation\. To incorporate domain\-driven structural priors, we introduce graphettes, a new probabilistic family of graph structure models that generalize graphons via controlled structural edits for motifs such as rings, stars, and trees\. We theoretically analyze the coupling, invariance, and structural properties of the framework, evaluate it on synthetic and molecular benchmarks, and isolate the contributions of the structural prior, the optimal\-transport coupling, and the regularisation terms through controlled ablations\. Flowette achieves competitive performance overall, attaining state\-of\-the\-art results on several metrics across multiple benchmarks, highlighting the effectiveness of combining structural priors with flow\-based training for modeling complex graph distributions\.

## Manifold\-Aligned Adversarial Perturbation for Anti\-Customization under Diffusion\-based Purification

**Authors:** Ruotian Liu; Zhen Chen; Zhiguo Yang; Xiangyu Yin; Peipei Xu; Wenjie Ruan

**ID:** 155861 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2MUQVPJZ7T>) | [PDF](<https://openreview.net/pdf?id=2MUQVPJZ7T>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155861>)

Anti\-customization techniques aim to protect visual content from unauthorized diffusion model personalization by adding imperceptible perturbations to training images\. However, such protection can be significantly weakened by diffusion\-based purification, which may remove adversarial perturbations before customization\. We study representative anti\-customization methods under diffusion purification and observe that existing methods exhibit similar off\-manifold perturbation structures that are largely suppressed by purification\. We then provide a principled geometric analysis that characterizes purification as a local contraction toward the data manifold, primarily suppressing perturbation components along normal directions\. Motivated by this insight, we propose Manifold\-Aligned Customization protection \*\*MAC\*\*, a practical purification\-aware framework that optimizes downstream anti\-customization objectives through a differentiable purifier and uses a structured perturbation parameterization to bias updates toward purification\-retentive, manifold\-aligned directions\. Across experiments on CelebA\-HQ, VGGFace2\-HQ, and WikiArt under diffusion\-based purification, MAC substantially improves protection effectiveness across most prompts and domains\. Finally, frequency analysis and ImageNet and MS\-COCO retention studies show that spectral signatures cannot predict purification outcomes, providing additional evidence for the proposed manifold\-alignment perspective beyond a single data domain\.

## Noisy2Latent: Nonparametric Deconvolution and Denoising via Maximum Mean Discrepancy

**Authors:** Ritwik Vashistha; Abhra Sarkar; Arya Farahi

**ID:** 148353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yWIThDZBX3>) | [PDF](<https://openreview.net/pdf?id=yWIThDZBX3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148353>)

Latent signals are often obscured by measurement noise, yet encode the underlying laws and dynamics of complex systems; learning both the signals and their distributions remains a central challenge in scientific inference\. The noise is often non\-negligible, and the likelihoods for expressive generative models are often intractable\. We utilize a convolutional maximum mean discrepancy \(convMMD\) loss and propose a likelihood\-free framework for nonparametric density deconvolution and empirical Bayes denoising under additive measurement error\. Our method learns a latent generative model by matching the observed data distribution to the noise\-convolved model distribution\. This yields a differentiable, simulation\-based objective for multivariate homoscedastic or heteroscedastic noise, compatible with expressive sieve classes such as Gaussian mixtures and normalizing flows\. The learned density then serves as an empirical prior for posterior denoising of individual latent values\. Theoretically, we extend convMMD from parametric to nonparametric estimation, proving finite\-sample bounds for empirical sieve minimizers and $L\_2$ convergence rates under Sobolev smoothness\. These rates recover the classical inverse\-problem dependence: polynomial for ordinary\-smooth and logarithmic for super\-smooth noises\. Our method provides a practical, theoretically grounded approach to deconvolution and denoising under generative latent distribution models\.

## FEAD: Fine\-Grained Epipolar Attention Diffusion for Large\-Disparity Light Field Spatial Super\-Resolution

**Authors:** Wenbin Wang; Youfang Lin; Chen Gao; Shuo Zhang

**ID:** 152855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PszcGoxSmL>) | [PDF](<https://openreview.net/pdf?id=PszcGoxSmL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152855>)

Light\-field \(LF\) spatial super\-resolution hinges on exploiting cross\-view correspondences to recover high\-frequency details while preserving geometric structure\.  However, existing methods often rely on implicit feature interaction or coarse disparity maps, which suffers noticeable performance degradation in regions with large disparities\. In this paper, we propose Fine\-Grained Epipolar Attention Diffusion \(FEAD\), which adopts epipolar attention as an explicit mechanism to characterize cross\-view geometric correspondence along epipolar lines\. To enable more accurate feature alignment and long\-range spatial–angular interaction, we introduce a diffusion\-based epipolar attention refinement strategy that progressively improves the initial attention\. With the refined attention as guidance, cross\-view features are explicitly warped and fused to enforce geometric consistency and aggregate complementary details across views for fine\-grained reconstruction\. Extensive experiments demonstrate that FEAD achieves state\-of\-the\-art performance, with particularly strong gains in large\-disparity scenarios\.

## Temporal Pair Consistency for Flow Matching

**Authors:** Chika Maduabuchi; Jindong Wang

**ID:** 151166 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cXos7ygjdV>) | [PDF](<https://openreview.net/pdf?id=cXos7ygjdV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151166>)

Flow\-matching\-style generative models learn time\-dependent vector fields, but standard objectives supervise each timestep independently, leaving shared\-path temporal structure unused\. We introduce \*Temporal Pair Consistency\* \(TPC\), a simple training\-time objective that couples velocity predictions at paired timesteps along the same probability path\. TPC leaves the architecture, probability path, sampler, and inference\-time computation unchanged\. Under matched backbones, training budgets, solvers, and numbers of function evaluations, TPC improves sample quality across flow matching, OT\-CFM, rectified flow, DiT\-style backbones, and MeanFlow\. On CIFAR\-10, TPC improves FM from 6\.35 to 3\.19 FID and OT\-CFM from 3\.58 to 2\.90 FID at the same NFE\. Mechanism diagnostics show lower measured gradient variance, higher paired\-gradient correlation, and reduced temporal roughness, while random and local pairing controls are substantially weaker\. Higher\-resolution ImageNet experiments further show consistent gains for DiT\-XL/2 at 256 and 512 resolution and for MeanFlow at 256 resolution, all at matched inference cost\.

## AdaptFlow: State\-Anchored Goal Conditioning with Flow Matching for Offline Goal\-Conditioned RL

**Authors:** Jaeseok Joo; Insoon Yang

**ID:** 155009 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9H4BX9fISD>) | [PDF](<https://openreview.net/pdf?id=9H4BX9fISD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155009>)

Offline goal\-conditioned reinforcement learning \(GCRL\) aims to learn a single policy that adapts its behavior to arbitrary goals from a fixed dataset, making injection of the goal information into the policy a central design question\. While recent works increasingly leverage expressive conditional generative modeling architectures, which have demonstrated remarkable success in computer vision, architectural choices for goal conditioning in offline GCRL remain under\-explored\. We identify that goals in GCRL differ from typical conditioning signals in two ways: they are often noisy or redundant, and they are consumed within a time\-sequential episode where the relevant context of a fixed goal shifts as the agent's state evolves\. Motivated by these observations, we propose State\-Anchored Goal Conditioning \(SAGC\), a modulation\-based goal conditioning scheme that derives its scale and shift parameters by jointly processing state and goal representations in a learned latent space\. We further introduce AdaptFlow, an end\-to\-end trainable offline GCRL architecture that integrates conditional flow matching with SAGC\. AdaptFlow outperforms matches all baselines on 23 out of 27 OGBench tasks\.

## ReGuidance: Diffusion Steering with Strong Latent Initializations Solves Hard Inverse Problems

**Authors:** Aayush Karan; Kulin Shah; Sitan Chen

**ID:** 155015 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9Cq7vYEYym>) | [PDF](<https://openreview.net/pdf?id=9Cq7vYEYym>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155015>)

In recent years there has been a flurry of activity around using pretrained diffusion models as informed data priors for solving inverse problems, and more generally around steering these models towards certain reward models\. Training\-free methods like gradient guidance have offered simple, flexible approaches for these tasks, but when the reward is not informative enough, e\.g\., in inverse problems with highly compressive measurements, these techniques can veer off the data manifold, failing to produce realistic data samples\. To address this challenge, we devise a simple algorithm, \*ReGuidance\*, that leverages prior methods' solutions as strong initializations and substantially enhancing their realism\. Given a candidate solution $x$ produced by a given method, we propose inverting the solution by running the unconditional probability flow ODE in reverse starting from $x$, and then using the resulting latent as an initialization for a deterministic steering process\.  Empirically, we evaluate our algorithm on difficult image restoration tasks including large box inpainting, heavily downscaled superresolution, and high noise deblurring with both linear and nonlinear blurring operations\. We find that, using a wide range of baseline methods as initializations, applying our method results in much stronger samples with better realism and measurement consistency\. We complement these results with rigorous proofs in commonly studied theoretical settings showing our technique boosts the reward and brings $x$ closer to the data manifold\.

## Beyond ICA: Identifiability by Symmetry Breaking

**Authors:** Pengzhou Wu

**ID:** 150471 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hnDeaJFZ1P>) | [PDF](<https://openreview.net/pdf?id=hnDeaJFZ1P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150471>)

We prove the identifiability of deep generative models \(DGMs\) with Piecewise\-Affine \(PWA\) decoders and Gaussian Mixture Model \(GMM\) priors, in a purely unsupervised setting\. We introduce three algebraic contrast principles for symmetry breaking: \*domain contrast\*, which trivializes the mixture symmetry group; \*mechanism contrast\*, which ensures every decoder branch is witnessed by a unique boundary; and \*interaction contrast\*, which forbids parameter conspiracies between latent components and decoder branches\. Together they exploit the interplay between the discrete combinatorics of the PWA map and the continuous symmetry structure of the latent GMM\. Continuity is replaced by algebraic symmetry conditions; injectivity is decoupled from structural identification and required only for pointwise inversion\. Our results form a hierarchy: from \*law identifiability\* \(LID; latent distribution up to a global affine map\) through \*map identifiability\* \(MID; decoder up to the same map\) to \*posterior\* and \*pointwise identifiability\*\. The ICA\-form ambiguity emerges under diagonal covariance conditions; classical ICA is a further specialization under independence\. Assumptions are only on the data\-generating process, not on learning methods, except for the interaction contrast\.

## Coupled Guidance for Flow Matching

**Authors:** Mateo Clémente; Leo Brunswic; Yang; Amir Rasouli

**ID:** 153836 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IMU91e91Zo>) | [PDF](<https://openreview.net/pdf?id=IMU91e91Zo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153836>)

Guidance methods are essential tools for steering the generation process in diffusion models, improving the generalizability of stochastic robotic controllers and enabling high\-quality controlled image synthesis\. Despite strong parallels between flow\-matching and diffusion, integrating guidance into flow\-matching models remains quite challenging\. Recent work has proposed general guidance frameworks for flow\-matching, however, they are direct adaptations of diffusion guidance methods and can prove unstable\. In this work, we conduct a theoretical analysis of guidance in flow\-matching and show that a naive translation of diffusion\-based guidance to flow\-matching breaks the coupling distribution used during training, resulting in weaker control over sampling accuracy\. Building on this insight, we propose \*\*Coupled Guidance\*\*, a flow\-matching\-specific guidance mechanism derived from a geometric perspective that leverages the coupling structure inherent to flow\-matching training\. To validate the effectiveness of our approach, we conduct extensive experimentation on a custom robotic \*collision avoidance\* task using Maniskill3, four robotic \*dexterous manipulation\* tasks from the Adroit benchmark, and three image generation tasks, namely \*inpainting\*, \*super\-resolution\*, and \*deblurring\*, using the ImageNet\-128 and CelebA\-HQ\-256 datasets\. Our findings show that our framework improves sample quality and guidance stability across all tasks, without imposing any additional overhead\.

## Order\-Marginalized Scoring for Masked Diffusion Models

**Authors:** Arthur Deng; Sebastian Thrun

**ID:** 154353 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EE2N89jedk>) | [PDF](<https://openreview.net/pdf?id=EE2N89jedk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154353>)

Masked Diffusion Models \(MDMs\) are trained under an objective that is symmetric over decoding orders, but at sampling time a single order must be committed to\. A common task in such models is to evaluate the log\-probability of a candidate sequence, either as a downstream score or to rank a finite pool of candidates\. We observe that this evaluation depends substantially on the decoding order chosen, even though the training objective averages over orders\. For both a model trained on closed\-form Probabilistic Context\-Free Grammar \(PCFG\) data and a pre\-trained MDM on OpenWebText, the per\-order log\-probability rankings of fixed candidate pools disagree on most inputs\. We characterize this phenomenon and propose Order\-Marginalized Scoring \(OMS\), a simple Monte\-Carlo \(MC\) estimator of the order\-marginalized log\-likelihood $\\tilde \\mu\(x\)=E\_\\sigma\[\\log p\_\\sigma\(x\)\]$\. We use it in two complementary algorithms: a reranker over a fixed candidate pool, and a stochastic best\-of\-$N$ decoder that combines adaptive position selection with $\\tilde\\mu$\-reranking\. On Sudoku, the decoder substantially raises exact\-match accuracy over the strongest single\-order baseline from $65\.3$% to $94\.7$%\. On a zero\-shot protein\-stability benchmark, the reranker improves Spearman correlation between log\-probability scores and experimental folding stabilities over a per\-order baseline by $0\.07$\. These results suggest that OMS is a useful alternative to per\-order scoring for order\-agnostic problems\.

## Towards Closing the Autoregressive Gap in Language Modeling via Entropy\-Gated Continuous Bitstream Diffusion

**Authors:** Georgios Batzolis; Mark Girolami; Luca Ambrogioni

**ID:** 151917 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WvVrxnsb7c>) | [PDF](<https://openreview.net/pdf?id=WvVrxnsb7c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151917>)

Diffusion language models \(DLMs\) promise parallel, order\-agnostic generation, but on standard benchmarks they have historically lagged behind autoregressive models in sample quality and diversity\. Recent continuous flow\-matching approaches over one\-hot and embedding spaces have narrowed this gap, suggesting continuous state spaces are highly effective for language\. In this work, we further close the autoregressive gap by modeling text as a continuous diffusion process over fixed\-width bitstreams\. Our approach represents semantic tokens as analog bit sequences and utilizes a matched\-filter residual parameterization to isolate contextual learning from analytic independent\-bit posteriors\. Crucially, our empirical comparisons reveal that while deterministic continuous DLMs are competitive, they can be overly contractive, undershooting real\-data entropy\. We demonstrate that the remaining quality\-diversity gap is bridged by a stochastic sampler that applies Langevin\-type corrections gated by the entropy\-rate profile, automatically concentrating stochasticity in high\-information regions while remaining nearly deterministic elsewhere\. On the One Billion Word Benchmark \(LM1B\), our 130M\-parameter bitstream model reaches a generative perplexity \(GenPPL\) of 59\.76 at matched real\-data entropy \(4\.31\) using 256 neural function evaluations \(NFEs\), decisively outperforming prior DLM baselines and reaching the autoregressive reference\. On OpenWebText \(OWT\), our stochastic sampler establishes a new continuous\-DLM Pareto frontier, achieving GenPPL = 27\.06 at an entropy of 5\.26 using 4x fewer steps than previous 1024\-NFE baselines\. As an additional architectural benefit, bitstream diffusion removes the O\(V\) vocabulary scaling bottleneck shared by standard DLMs\. By predicting O\(log V\) bitwise logits via semantic bit\-patching, our model yields a reduced memory footprint and higher throughput, demonstrating a scalable paradigm for language generation as vocabulary sizes grow\.

## Variance Reduction for Expectations with Diffusion Teachers

**Authors:** Jesse Bettencourt; Xindi Wu; Matan Atzmon; James Lucas; Jonathan Lorraine

**ID:** 153246 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Mf2Qoh2jGX>) | [PDF](<https://openreview.net/pdf?id=Mf2Qoh2jGX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153246>)

Pretrained diffusion models increasingly serve as frozen teachers feeding downstream pipelines such as text\-to\-3D, single\-step distillation, and data attribution\. The teacher gradients these pipelines consume are Monte Carlo expectations over noise levels and Gaussian noise; their estimator variance dominates compute cost because each draw requires expensive upstream work, such as rendering, simulation, or encoding\. We introduce CARV, a compute\-aware variance\-accounting framework that motivates a hierarchical Monte Carlo estimator: amortize the expensive upstream computation over cheap diffusion\-noise resamples, sharpened by timestep importance sampling and a stratified inverse\-CDF construction\. Across diffusion\-guided workloads, we obtain 2–3× effective compute multipliers, most from amortized reuse and approximately 25% additional gain from importance sampling plus stratification, without changing the objective\. We also map regimes where these gains translate into improved downstream metrics versus regimes where they do not, such as DMD\.

## From Jumps to Signatures: a Generative Method for Temporal Point Processes

**Authors:** Niels Cariou\-Kotlarek; Vasileios Lampos

**ID:** 152949 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PAf9lZ4UZW>) | [PDF](<https://openreview.net/pdf?id=PAf9lZ4UZW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152949>)

Rough path signatures provide a universal feature map for continuous paths and, via the expected signature, a principled characterisation of path distributions\.  These results do not directly extend to \\clag paths of Temporal Point Processes \(TPPs\), limiting the use of signature methods for event sequences\.  Furthermore, neural TPP models, including recent generative approaches, optimise per\-event objectives with no global sequence\-level loss, while evaluation of variable\-length event sequences lacks distributional discrepancy measures\. This paper proposes a common pathwise framework for addressing these limitations\. We introduce the interarrival embedding, a stable \(homeomorphic\) lift from jump paths to continuous paths of bounded variation, enabling signature methods to discrete event sequences\.  Our theoretical contributions give rise to \\sigTPP, the first signature\-based generative model for TPPs, trained using a path\-level loss on complete trajectories\. We further analyse the space of counting paths and derive three distributional discrepancies, providing mathematically justified tools for evaluating generative TPP models\. Across synthetic and real\-world datasets, \\sigTPP\~achieves the best average rank based on 8 complementary metrics, outperforms or is within one standard error of the strongest baseline in $64\\%$ of the dataset\-metric pairs, and according to a relative score, improves against every baseline by at least $19\\%$ on average\.

## GlycoGen: Crystallizing Flows for De Novo Glycan Structure Prediction

**Authors:** Romain Lacombe

**ID:** 150492 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hhpivLTcN3>) | [PDF](<https://openreview.net/pdf?id=hhpivLTcN3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150492>)

Glycosylation is among the most diverse and important post\-translational modifications in biology, governing immunogenicity, self\-recognition, and the clinical viability of biologic drugs\. Glycans cannot be sequenced from a template, and de novo structure prediction from tandem mass spectrometry \(MS/MS\) remains a longstanding bottleneck\. The current state of the art, GlycoBART, is a $207$M autoregressive transformer whose $O\(\\mathrm\{beam\} \\cdot \\mathrm\{output\\\_length\}\)$ decoder passes preclude real\-time annotation\. We introduce $\\textbf\{GlycoGen\}$, a $50$M Discrete Flow Matching \(DFM\) model that predicts glycan structure from MS/MS spectra by direct, non\-autoregressive generation in a few parallel forward passes\. We pair it at inference time with $\\textbf\{Crystallizing Flows\}$, a deterministic sampler that propagates the per\-token distribution on the probability simplex and freezes each token to a one\-hot \(\*crystallizes\* it\) the moment its argmax leaves the mask, exiting early once all tokens are unmasked\. The sampler feeds the denoiser mixture embeddings, and runs out\-of\-the\-box with no retraining\. GlycoGen \+ Crystallizing Flows reach $\\mathbf\{0\.9266\}$ top\-1 structural accuracy on the CandyCrunch test set, three orders of magnitude faster than GlycoBART, Pareto\-dominating the prior state of the art on \*both\* accuracy \*and\* speed\. We extend our experiments to a matched\-architecture MDLM denoiser \(Sahoo et al\. 2024\) and observe a comparable lift: the sampler generalizes from continuous\-time flow matching to discrete\-time masked diffusion\. To our knowledge, this is a new state of the art for de novo open\-vocabulary glycan structure prediction, and the first system fast enough for accurate real\-time inline annotation on modern LC\-MS/MS instruments\.

## Bigger Isn't Always Memorizing: Early Stopping Overparameterized Diffusion Models

**Authors:** Alessandro Favero; Antonio Sclocchi; Matthieu Wyart

**ID:** 156775 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/pdf?id=P6r9OxZ1vm>) | [PDF](<https://openreview.net/pdf?id=P6r9OxZ1vm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156775>)

Diffusion probabilistic models have become a cornerstone of modern generative AI, yet the mechanisms underlying their generalization remain poorly understood\. In fact, if these models were perfectly minimizing their training loss, they would just generate data belonging to their training set, i\.e\., memorize, as empirically found in the overparameterized regime\. We revisit this view by showing that, in highly overparameterized diffusion models, generalization in natural data domains is progressively achieved during training before the onset of memorization\. Our results, ranging from image to language diffusion models, systematically support the empirical law that memorization time is proportional to the dataset size, consistent with a kernel\-regression bound on the time required to fit the empirical score at low noise\. Generalization vs\. memorization is then best understood as a competition between time scales\. We show that this phenomenology is recovered in diffusion models learning a simple probabilistic context\-free grammar with random rules, where generalization corresponds to the hierarchical acquisition of deeper grammar rules as training time grows, and the generalization cost of early stopping can be characterized\. We summarize these results in a phase diagram\. Overall, our results support that a principled early\-stopping criterion – scaling with dataset size – can effectively optimize generalization while avoiding memorization, with direct implications for hyperparameter transfer and privacy\-sensitive applications\.

## Do Heavy Tails Help Diffusion? On the Subtle Trade\-off Between Initialization and Training

**Authors:** Hamza Cherkaoui; Hélène Halconruy; Antonio Ocello

**ID:** 153349 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M1lkWZqUpb>) | [PDF](<https://openreview.net/pdf?id=M1lkWZqUpb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153349>)

Recent works have proposed incorporating heavy\-tailed \(HT\) noise into diffusion\- and flow\-based generative models, with the goals of better recovering the tails of target distributions and improving generative diversity\. This motivation is intuitive: if the data are heavy\-tailed, HT noise may appear better matched than light\-tailed \(LT\) Gaussian noise\. However, replacing Gaussian noise by HT noise also changes the underlying estimation problem\. In this paper, we revisit this paradigm through a combined theoretical and empirical study, establishing sampling\-error bounds for two representative diffusion models driven by HT and LT noise\. We show that HT noise makes the statistical estimation problem harder, leading to less favorable sampling\-error bounds\. We support these findings with experiments on synthetic and real\-world datasets, empirically recovering the predicted error trade\-off\. Our results call into question a growing design trend in generative modeling and challenge the use of HT noise to improve rare\-region exploration\.

## Optimal Convergence Analysis of DDPM for General Distributions

**Authors:** Yuchen Jiao; Yuchen Zhou; Gen Li

**ID:** 155799 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2nT2NsEr3J>) | [PDF](<https://openreview.net/pdf?id=2nT2NsEr3J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155799>)

Score\-based diffusion models have achieved remarkable empirical success in generating high\-quality samples from target data distributions\. Among them, the Denoising Diffusion Probabilistic Model \(DDPM\) is one of the most widely used samplers, generating samples via estimated score functions\. Despite its empirical success, a tight theoretical understanding of DDPM \-\-\- especially its convergence properties \-\-\- remains limited\. In this paper, we provide a refined convergence analysis for the DDPM sampler and establish near\-optimal convergence rates under general distributional assumptions\. Specifically, we consider a relaxed smoothness condition parameterized by $L$, which is small for many practical distributions \(e\.g\., Gaussian mixture models\)\. We prove that, to approximate a target distribution on $\\mathbb\{R\}^d$ to accuracy $\\varepsilon$ in total variation distance and $\\varepsilon^2$ in KL\-divergence, the DDPM sampler with accurate score estimates requires at most $$T = \\widetilde\{O\}\\left\(\\frac\{\\sqrt\{d\}\\min\\\{\\sqrt\{d\},L\\\}\}\{\\varepsilon\}\\right\)$$ iterations, where $\\widetilde\{O\}$ hides polylogarithmic factors in $d$ and $1/\\varepsilon$\. This result substantially improves upon the best\-known $\\widetilde\{O\}\(d/\\varepsilon\)$ iteration complexity when $L &lt; \\sqrt\{d\}$\. By establishing a matching lower bound, we show that our convergence analysis is tight for a wide array of target distributions\. Moreover, it reveals that DDPM and Denoising Diffusion Implicit Models \(DDIM\) share the same dependence on $d$, raising an interesting question of why DDIM often appears empirically faster\.

## Rotations on Latent Hyperspheres: a Geometry\-Aware Guiding Framework for Diffusion Models

**Authors:** Luca Sacchetto; Klaus Diepold

**ID:** 149879 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mY8ppH3y0N>) | [PDF](<https://openreview.net/pdf?id=mY8ppH3y0N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149879>)

Diffusion models have emerged as a powerful tool across diverse domains\. However, their purely data\-driven nature can produce samples that violate domain\-governing constraints\. We introduce a plug\-and\-play Reinforcement Learning framework that  optimizes initial noise samples in the latent space of frozen, pre\-trained diffusion models\. Leveraging the near\-spherical geometry of high\-dimensional Gaussian distributions, we introduce a novel rotation\-matrix\-based scheme for efficient latent space exploration\. This steers the model toward more feature\-preserving outputs, guided by task\-specific rewards\. We evaluate our method on three diffusion models: one trained on solutions of the Darcy Flow PDE, one on a synthetic dataset with complex structural features, and a text\-conditioned one\. Across all three settings, our framework yields significant improvements in sample quality, achieving a $\{\\sim\}25\\\\%$ relative reduction in PDE residual, up to a $\{\\sim\}44\\\\%$ relative improvement on the synthetic dataset's feature\-alignment metric, and up to a $\{\\sim\}80\\\\%$ relative improvement on human preference, compared to the vanilla diffusion models\. Finally, we show that rotation\-matrix\-based exploration significantly outperforms unconstrained exploration, validating our geometry\-aware approach and establishing a more effective method for latent space control\.

## Understanding diffusion models requires rethinking \(again\) generalization

**Authors:** Pierre Marion; Yu\-Han Wu

**ID:** 140125 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0GkPaYMOa7>) | [PDF](<https://openreview.net/pdf?id=0GkPaYMOa7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140125>)

This position paper argues that understanding generalization in diffusion models requires fundamentally new theoretical frameworks that go beyond both classical statistical learning theory and the benign overfitting paradigm developed for supervised learning\. In diffusion models, unlike in supervised learning, memorization of training data and generalization to novel samples are incompatible: a model that has fully memorized its training set generates copies rather than novel data\. Several theoretical explanations for why practical diffusion models nevertheless generalize have been proposed, based on capacity limitations, implicit regularization from optimization, or architectural inductive biases, but their interactions remain unclear\. We argue that the field should pivot from explaining why the diffusion models do not memorize to investigating what the models actually learn during pre\-memorization phase\. To highligh our stance, we conduct empirical study of diffusion models trained on CIFAR\-10, and we distill the findings into concrete open questions that we believe are key to improve understanding of generalization in diffusion models\.

## Beyond MMSE: Enhancing PnP Restoration with ProxiMAP

**Authors:** Kenta Vert; Giacomo Meanti; Scott Pesme; Michael Arbel; Julien Mairal

**ID:** 151995 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WIEiYfccQR>) | [PDF](<https://openreview.net/pdf?id=WIEiYfccQR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151995>)

Plug\-and\-Play \(PnP\) methods have become standard tools for solving imaging inverse problems by replacing the intractable maximum a posteriori \(MAP\) denoiser with the MMSE one\. While this mismatch has been widely treated as unavoidable, recent works have sought to close this gap by targeting the MAP with diffusion\-model scores\. We show this is problematic in practice: learned scores do not match the true ones, so MAP\-targeting iterations converge to cartoon\-like images rather than realistic ones, and better results are obtained by stopping short of convergence\. We turn this observation into a design principle and introduce $\\texttt\{ProxiMAP\}$, an iterative MAP approximation whose noise schedule keeps the iterate's residual noise matched to the denoiser's training noise\. This keeps the denoiser in\-distribution where its score is reliable, and yields implicit early stopping that avoids the failure mode above\. $\\texttt\{ProxiMAP\}$ is a modular drop\-in replacement for MMSE denoisers in standard PnP algorithms and consistently sharpens reconstructions across deblurring, inpainting, super\-resolution, and phase retrieval\. Building on the same principle, we propose a hybrid variant that applies $\\texttt\{ProxiMAP\}$ only in the late iterations of PnP, where the denoiser is most reliable—matching or exceeding the full\-replacement variant at a fraction of the cost\.

## Antibody Generation via Redistributed Latent Diffusion

**Authors:** Andrey Shevtsov; Viacheslav Meshchaninov; Pavel Strashnov; Dmitry Vetrov

**ID:** 152987 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OqSFZHOtxF>) | [PDF](<https://openreview.net/pdf?id=OqSFZHOtxF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152987>)

Generating antibody sequences is challenging because they combine conserved framework regions with hypervariable loops\. Latent diffusion is attractive for this task since it enables flexible conditioning and bidirectional generation\. But standard approaches fail\. Global noise schedules treat all positions equally, so models learn the predictable frameworks well while the diverse loops remain poorly captured\. We address this by learning a latent space that redistributes information evenly, allowing standard diffusion to succeed where it previously failed\. On organism\-conditioned generation across six species, our approach achieves 10× lower Fréchet Distance than latent diffusion without redistribution\. It supports chain\-type control, loop infilling, and paired\-chain generation\. Validation across five protein encoders confirms the method is encoder\-agnostic\. These results establish latent diffusion as a practical tool for antibody sequence design\.

## WORD: Diffusion\-Based Posterior Inference for Online Goal Recognition

**Authors:** Almog Anschel; Sarah Keren

**ID:** 148579 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wkpsUDF7X4>) | [PDF](<https://openreview.net/pdf?id=wkpsUDF7X4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148579>)

Goal recognition is the task of inferring an agent's intended goal from its observed behavior\. Existing work has largely focused on high\-level symbolic recognition, abstracting away the continuous motion through which agents reach their goal\. Methods that do reason over real\-world trajectories, rely on an explicit dynamics model that is hard to acquire and rarely transfers across settings\. Neither approach explicitly learns how agents move toward each candidate goal, limiting accuracy on ambiguous trajectory prefixes where such knowledge is most needed\. We present WoRD \(Waypoint Recognition with Diffusion\), which uses a learned trajectory prior to infer the agent's goal from partial observations\. At each step, WoRD runs one warm\-started denoising chain per candidate goal, steers each chain toward the observed trajectory through a closed\-form log\-likelihood gradient, and reweights the resulting samples by Bayes' rule into a calibrated posterior over goals\. We evaluate WoRD on simulated robot settings, pedestrian trajectories, and vehicle trajectories using four metrics targeting distinct failure modes\. WoRD is the only method that improves all four metrics jointly, including the safety\-critical confident\-and\-wrong rate\. WoRD runs under a single inference procedure and preserves calibrated multimodal\. beliefs in complex, ambiguous environments where filter\- and classifier\-based observers collapse to a single mode or grow overconfident\.

## Generating Symmetric Materials using Latent Flow Matching

**Authors:** Anmar Karmush; Cedric M Brandenburg; Soheil Ershadrad; Johanna Rosen; Michael Felsberg; Filip Ekström Kelvinius

**ID:** 151926 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Wq7CPxqQ2B>) | [PDF](<https://openreview.net/pdf?id=Wq7CPxqQ2B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151926>)

Tackling the task of materials generation, we aim to enhance the previously proposed All\-atom Diffusion Transformer \(ADiT\) by introducing SymADiT, a symmetry\-aware variant\. To do so, we use a representation of materials based on Wyckoff positions\. We follow ADiT and perform generative modelling in latent space, adapted to our symmetry\-aware representation\. By forcing the output of the generative model to adhere to the symmetry restrictions imposed by the generated crystal's space group and each atom's Wyckoff\-position, the generated materials exhibit more realistic symmetry properties\. We benchmark our method against both symmetry\-aware and symmetry\-agnostic models for materials generation and show competitive performance, generating stable, symmetric materials with a simple Transformer architecture\.

## Diff\-CA: Separating Common and Salient Factors with Diffusion Models

**Authors:** Michaël Soumm; Alexandre Fournier Montgieux; Yunlong HE; Pietro Gori; Alasdair Newson

**ID:** 152753 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QbYbgrobWj>) | [PDF](<https://openreview.net/pdf?id=QbYbgrobWj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152753>)

Contrastive Analysis aims to separate factors which are common between two data distributions from those which are salient to only one of them\. Existing contrastive methods are based on generative models \(e\.g\., VAEs or GANs\) that often suffer from limited reconstruction and image quality, which hampers effective latent factor separation and limits their applicability to high\-fidelity image generation and editing\. We propose a novel conditioning framework for diffusion models that enables contrastive decomposition without compromising generation quality\. We first train a prompt\-free, image\-conditioned diffusion model, and then learn to decompose the conditioning into a common and a salient factor, using weak supervision\. We prove that the additive contrastive factorization, commonly assumed in prior work, is identifiable under mild conditions\. This factorization enables targeted editing operations by swapping or interpolating only the salient factor while preserving the common factor\.

## Few Channels Draw The Whole Picture: Revealing Massive Activations in Diffusion Transformers

**Authors:** Evelyn Turri; Davide Bucciarelli; Sara Sarto; Lorenzo Baraldi; Marcella Cornia

**ID:** 156119 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0GAdp0EnE3>) | [PDF](<https://openreview.net/pdf?id=0GAdp0EnE3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156119>)

Diffusion Transformers \(DiTs\) and related flow\-based architectures are now among the strongest text\-to\-image generators, yet the internal mechanisms through which prompts shape image semantics remain poorly understood\. In this work, we study massive activations: a small subset of hidden\-state channels whose responses are consistently much larger than the rest\. We show that, despite their sparsity, these few channels effectively draw the whole picture, in three complementary senses\. First, they are functionally critical: a controlled disruption probe that zeroes the massive channels causes a sharp collapse in generation quality, while disrupting an equally\-sized set of low\-statistic channels has marginal effect\. Second, they are spatially organized: restricting image\-stream tokens to massive channels and clustering them yields coherent partitions that closely align with the main subject and salient regions, exposing a structured spatial code hidden inside an apparently outlier\-like subspace\. Third, they are transferable: transporting massive activations from one prompt\-conditioned trajectory into another, shifts the final image toward the source prompt while preserving substantial content from the target, producing localized semantic interpolation rather than unstructured pixel blending\. We exploit this property in two use cases: text\-conditioned and image\-conditioned semantic transport, where massive activations transport enables prompt interpolation and subject\-driven generation without any additional training\. Together, these results recast massive activations not as activation anomalies, but as a sparse prompt\-conditioned carrier subspace that organizes and controls semantic information in modern DiT models\. All the code will be publicly available\.

## Twisted Schrödinger Bridge Matching

**Authors:** Maxence Noble; Marie Scheid; Yazid Janati; Eric Moulines; Alain Durmus

**ID:** 153341 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M3sfAYXJNX>) | [PDF](<https://openreview.net/pdf?id=M3sfAYXJNX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153341>)

Over the past few years, diffusion\-based Schrödinger bridge models have been proposed to approximate optimal transport dynamics between two prescribed boundary distributions, with successful applications to generative modeling\. More precisely, these methods aim to estimate a path measure whose initial and terminal marginals match the two boundary distributions, while minimizing the Kullback–Leibler divergence with respect to a reference Markov process\. In this work, we consider the generalized Schrödinger bridge problem, in which the reference process is a twisted Brownian motion, that is, a Feynman–Kac transform of a Brownian motion induced by a time\-dependent differentiable potential\.  Building on the Iterative Markovian Fitting \(IMF\) paradigm, and in particular on its special case Diffusion Schrödinger Bridge Matching \(DSBM\), which corresponds to the zero potential, we introduce Twisted Schrödinger Bridge Matching \(TSBM\), a diffusion\-based method designed to handle both continuous\- and discrete\-time potentials\. Unlike previous approaches, TSBM provides a rigorous extension of the IMF scheme to the generalized Schrödinger bridge problem\. This derivation leads to a new bridge\-matching loss that depends explicitly on the gradient of the potential and recovers the DSBM objective when the potential vanishes,  yielding improved performance\. We further introduce trajectory\-based variance\-reduction techniques that substantially stabilize optimization and may be useful beyond the present setting\. Finally, we empirically demonstrate the benefits of TSBM on several experimental settings\.

## Backbone\-Equated Diffusion OOD via Sparse Internal Snapshots

**Authors:** Yadang Alexis Rouzoumka; Jean Pinsolle; Eugénie TERREAUX; Christèle Morisseau; Jean\-Philippe Ovarlez; Chengfang Ren

**ID:** 154161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FoLkIskdnj>) | [PDF](<https://openreview.net/pdf?id=FoLkIskdnj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154161>)

Fair comparison between diffusion\-based OOD detectors is challenging, as conclusions can vary with backbone choice, corruption parameterization, and test\-time budget\. We address this issue through a \*Mutualized Backbone\-Equated\* \(MBE\) protocol that aligns canonical corruption levels and logical test\-time cost across diffusion backbones\. Within this setting, we introduce \*Canonical Feature Snapshots\* \(CFS\), a family of detectors that probes a frozen diffusion backbone using only a tiny number of native internal activations at canonical low\-noise levels\. On a controlled CIFAR\-scale benchmark, the strongest one\-forward CFS variant is $CFS\(1\\times2\)$, while an even smaller decoder\-only variant remains highly competitive\. This shows that much of the relative\-OOD signal exposed by frozen diffusion backbones is concentrated in a small number of sparse internal states, rather than requiring full denoising trajectories or high\-capacity downstream heads\. We further provide a local diagnostic theory explaining these observations through conditional encoder\-decoder complementarity, diagonal\-score separation, and low\-noise corruption stability\.

## Retrieval from Within: An Intrinsic Capability of Attention\-Based Models

**Authors:** Elad Hoffer; Yochai Blau; Edan kinderman; Ron Banner; Daniel Soudry; Boris Ginsburg

**ID:** 154257 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F87kwK5CpT>) | [PDF](<https://openreview.net/pdf?id=F87kwK5CpT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154257>)

Retrieval\-augmented generation \(RAG\) typically treats retrieval and generation as separate systems\. We ask whether an attention\-based encoder\-decoder can instead retrieve directly from its own internal representations\. We introduce INTRA \(INTrinsic Retrieval via Attention\),  a framework where decoder attention queries score pre\-encoded evidence chunks that are then directly reused as context for generation\. By construction, INTRA unifies retrieval and generation, eliminating the retriever\-generator mismatch typical of RAG pipelines\.  This design also amortizes context encoding by reusing precomputed encoder states across queries\.  Across question\-answering benchmarks, INTRA outperforms strong engineered retrieval pipelines on both evidence recall and end\-to\-end answer quality\.  Our results demonstrate that attention\-based models already possess a retrieval mechanism that can be elicited, rather than added as an external module\.

## Tabular Foundation Model for Generative Modelling

**Authors:** Xiangjian Jiang; Mingxuan Liu; Nikola Simidjievski; Tassilo Klein; Mateja Jamnik

**ID:** 149211 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=s7BHCiG4IM>) | [PDF](<https://openreview.net/pdf?id=s7BHCiG4IM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149211>)

Generative modelling is a demanding test of foundation models, because it requires robust, holistic representation learning for a given data modality, rather than optimisation for a supervised prediction target alone\. While recent work on tabular foundation models has achieved remarkable progress in predictive modelling, generative tabular foundation models remain underexplored\. Existing tabular foundation generators, in particular, have not yet consistently matched strong dataset\-specific generators in synthetic data quality\. A key reason is their misalignment with the distinctive causal structural prior of heterogeneous tabular data\. In this paper, we address this gap by introducing a novel tabular foundation model, TabFORGE , built on pretrained Tab ular FO undational R epresentations for GE neration\. TabFORGE is designed to utilise the implicitly learned causal information underlying diverse tabular datasets in a unified latent space induced by a pretrained causality\-aware feature encoder\. It further decouples latent modelling from decoding through a two\-stage design: we first pretrain a score\-based diffusion transformer, and then pretrain a denoising\-aligned decoder using the denoised latent embeddings\. This design elegantly mitigates the distribution shifts in latent embeddings that typically arise between training and inference\. We evaluate TabFORGE comprehensively against 22 benchmark methods on 45 real\-world datasets\. Our results show that TabFORGE effectively learns and leverages generalisable tabular representations, enabling efficient generation of high\-quality synthetic tabular data, particularly with strong structural fidelity\.

## CRISP: Fixing Flying Pixels in Latent LiDAR Generation via Diffusion Decoding

**Authors:** Andrea Ceron; Michael Schmidt; Alvaro Marcos\-Ramiro; Sebastian Schmidt; Benjamin Busam

**ID:** 153441 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LIADRHg7uI>) | [PDF](<https://openreview.net/pdf?id=LIADRHg7uI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153441>)

Latent LiDAR pipelines suffer from flying pixels: convolutional VAEs blur sharp LiDAR contours, yielding edge depths that back\-project to points floating between surfaces\. We identify this as a major, directly correctable decoder bottleneck and introduce CRISP: a pixel\-space diffusion decoder with a backbone\-agnostic latent adapter, DiT\-based denoiser, and support mask predictor\. CRISP replaces convolutional decoders commonly inherited from image and video VAEs while keeping the encoder and latent generator fixed\. Across KITTI\-360, SemanticKITTI, and nuScenes, replacing only the decoder reduces FSVD/FPVD by 50\.5% on average across frozen backbones; for generic video VAEs, the reductions reach 71%/74%\. On the LiDAR\-native LiDM backbone, FRID drops by 71%, with the largest gains at depth discontinuities\. Inside a pretrained LiDM world model, the same zero\-shot replacement improves FSVD by 15\.5%, narrowing the sim\-to\-real gap\. Code and checkpoints will be released upon acceptance\.

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

## The risk of KV cache compression

**Authors:** Lukas Haverbeck; Carmen Amo Alonso; Andres Posada Moreno; Sebastian Trimpe; Marco Pavone

**ID:** 153754 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IxNf37GZip>) | [PDF](<https://openreview.net/pdf?id=IxNf37GZip>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153754>)

Transformer inference on long sequences is expensive because softmax attention repeatedly reads from a large KV cache\. The prevalent approach to this bottleneck is \_KV cache compression\_, which replaces the full cache with a compact summary\. Despite its practical importance, the design of such summaries is largely driven by empirical experimentation\. On the theoretical side, existing results show that KV cache compression can be impossible in the worst case, but offer little systematic guidance for designing algorithms in regimes where accurate compression is possible\. We bridge this gap by characterizing the \_minimax risk of KV cache compression\_ in terms of the intrinsic compressibility of a cache, revealing when and how accurate compression is possible\. These results yield novel design principles for KV cache compression under causal masking, mapping efficiently to both prefill and autoregressive decoding while achieving minimax\-optimal risk\. We instantiate these principles in a practical algorithm and report promising performance on LongBench in targeted experiments\. Overall, our results provide a principled avenue for practically applicable KV compression with theoretical guarantees\.

## Understanding the Interplay between Memorization and Learning in Large Language Models

**Authors:** Bishwamittra Ghosh; Soumi Das; Qinyuan Wu; Mohammad Aflah Khan; Deepak Garg; Krishna Gummadi; Evimaria Terzi

**ID:** 139043 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oG5alWKa3Z>) | [PDF](<https://openreview.net/pdf?id=oG5alWKa3Z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139043>)

We investigate foundational questions about the interplay between memorization and learning in large language models \(LLMs\)\. When an LLM generates a string, can we disentangle the roles of rote memorization and contextual learning? Rote memorization results in an LLM regurgitating specific details of a training string, while contextual learning leads to the generation of new strings that follow generalizable patterns of the underlying language\. Related questions of interest include: can an LLM avoid memorization when optimally learning a language?, and if not, can we design training schemes to reduce memorization and improve learning?  To address these questions, we propose contextual memorization, a new measure that precisely disentangles memorization from learning\. Using this measure, we establish that different training strings are memorized at different epochs in training, and that memorization of some training strings is unavoidable when optimally learning a language\. Finally, we propose memorization\-aware training, a scheme that dynamically down\-samples training strings based on their memorization, and in doing so, equalizes learning across strings, reduces memorization, and improves learning\. Our conclusions are supported by extensive experiments on multiple LLMs using formal languages as a controlled testbed, enabling precise language specification, exact string sampling, and elimination of data contamination; and further validated on natural languages\.

## Enhanced convergence guarantees of score\-based generative models in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity

**Authors:** Zhang Xiaoyan; Chenxu Pang; Xiaojie Wang

**ID:** 148518 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xIp1jU9Y4y>) | [PDF](<https://openreview.net/pdf?id=xIp1jU9Y4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148518>)

Although score\-based generative models \(SGMs\) have achieved remarkable success in real\-world sample generation tasks, it is still far from sufficient to understand them from a mathematical perspective\. In this paper, we aim to provide enhanced convergence guarantees for two existing SGMs in $\\mathcal\{W\}\_2$\-distance beyond log\-concavity\. More precisely, we develop a novel framework of error analysis for Euler\-Maruyama \(EM\) and Poisson midpoint \(PM\) time discretization schemes for SGMs\. Under a non\-log\-concavity condition, we show that $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon\)$ iterations suffice to approximate the target distributions in $\\epsilon$\-accuracy for the classical EM\-based SGM, considerably improving upon the existing iteration complexity $\\tilde\{\\mathcal\{O\}\}\(d/\\epsilon^2\)$\. Notably, the novel framework of error analysis enables us to establish an $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{d\}/\\epsilon^\{2/3\}\)$ iteration complexity for the PM\-based SGM in $\\epsilon$\-accuracy, significantly outperforming current state\-of\-the\-art Wasserstein convergence guarantees for SDE\-based diffusion samplers\.

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

## Emergence of Distortions in High\-Dimensional Guided Diffusion Models

**Authors:** Enrico Ventura; Beatrice Achilli; Luca Ambrogioni; Carlo Lucibello

**ID:** 152320 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TxAk7QpMRk>) | [PDF](<https://openreview.net/pdf?id=TxAk7QpMRk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152320>)

Classifier\-free guidance \(CFG\) is the de facto standard for conditional sampling in diffusion models, yet it often reduces sample diversity\. Using tools from statistical physics, we analyze the emergence of generative distortions induced by CFG, namely the mismatch between the CFG sampling distribution and the true conditional distribution\. We study this phenomenon in analytically tractable settings with exact score functions, characterizing its dependence on data dimensionality and the number of classes\. For high\-dimensional Gaussian mixtures, we use dynamic mean\-field theory to show that distortions arise when the number of classes scales exponentially with the data dimension, whereas they vanish in the sub\-exponential regime due to a dynamical phase transition\. We further prove that, in the infinite\-class limit, distortions remain unavoidable regardless of dimensionality because of the increasing density of classes\. Finally, we show that standard CFG schedules cannot prevent variance shrinkage, and we propose a theoretically grounded guidance schedule incorporating a negative\-guidance window that improves both class separability and sample diversity in real\-world latent diffusion models\.

## Robust Flow Matching under Target Corruption and Label Noise

**Authors:** Mert Can Kurucu; Erik Englesson; Hossein Azizpour

**ID:** 153777 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IjeT9T6KVY>) | [PDF](<https://openreview.net/pdf?id=IjeT9T6KVY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153777>)

Flow Matching \(FM\) is a strong framework for generative modeling due to its stable training and efficient sampling\. However, FM assumes clean target data and labels, an assumption often violated in practice\. We formulate FM training as a time\-dependent regression problem over conditional vector fields and analyze how the two corruption types affect the objective: i\) target corruption adds a time\-dependent residual term that grows with time, ii\) label noise causes updates to the wrong class\-conditional vector field\. Based on this analysis, we propose to improve FM robustness by mapping corruption\-specific residual scores to sample weights\. For target corruption, we propose the \\emph\{Temporal Residual Score\} \(TRS\), which emphasizes residual magnitudes at intermediate\-to\-late FM times, where clean and corrupted samples are more separable\. For label noise, we propose the \\emph\{Comparative Conditional Score\} \(CCS\), which compares the residual of the observed class\-conditional vector field against alternative class\-conditional vector fields for the same trajectory and velocity target\. Experiments across controlled corruption settings and real\-world noisy labels show that the proposed methods improve robustness over standard FM and robust\-training baselines, supporting corruption\-specific residual structure as a practical basis for robust FM\.

## Flow Matching with In\-Context Priors for Out\-of\-Distribution Brain Dynamics

**Authors:** Sam Gijsen; Michał Łukomski; Marc\-Andre Schulz; Kerstin Ritter

**ID:** 153623 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K10eas8GS0>) | [PDF](<https://openreview.net/pdf?id=K10eas8GS0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153623>)

Conditional flow matching produces realistic out\-of\-distribution samples across modalities from images to proteins, yet the conditioning signals that enable extrapolation remain poorly understood for biological time series\. While considerable work has focused on areas of biology such as proteins and molecules, generative models of neural time series have been largely restricted to categorical conditioning, which precludes compositional and zero\-shot generalization\. In this work, we propose a per\-timestep conditioned diffusion transformer for generating realistic fMRI brain dynamics during unseen cognitive tasks, by injecting both compositional language and optional spatial priors in\-context\. Such zero\-shot generation would support in\-silico task design and counterfactual evaluation of novel cognitive experiments before costly scanner acquisition\. Leveraging this model, we evaluate across hundreds of held\-out task conditions and characterize predictive performance in relation to the training manifold\. From language alone, the model recovers region\-specific recruitment across tasks and held\-out spatial activation patterns\. Spatial priors, when available, complement the text pathway by anchoring generation in regions of task space where language alone degrades, while retaining the compositional structure needed for counterfactual task specification\. To our knowledge this is the first generative model of whole\-cortex fMRI dynamics for unseen cognitive tasks, enabling counterfactual neuroscience and data\-driven experimental design\.

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

## Debiased Counterfactual Generation via Flow Matching from Observations

**Authors:** Hugh Dance; Johnny Xi; Peter Orbanz; Benjamin Bloem\-Reddy

**ID:** 149078 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=t2qgnOp8Wx>) | [PDF](<https://openreview.net/pdf?id=t2qgnOp8Wx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149078>)

Estimating counterfactual distributions under interventions is central to treatment risk assessment and counterfactual generation tasks\. Existing approaches model the counterfactual distribution as a standalone generative target, without exploiting its relationship to the observational data\. In this work, we show that under standard assumptions, observational and counterfactual outcome distributions are tightly linked: they have identical support and tail behavior, remain statistically close under weak confounding, and share any features of high\-dimensional outcomes which are invariant to confounders\. These properties motivate learning counterfactual distributions not from scratch, but via a \*deconfounding flow\* from the observational distribution\. We formulate this problem via flow\-matching and derive a semiparametrically efficient estimator based on a novel efficient influence function correction\. We subsequently extend our estimator to target minimal\-energy flows in high\-dimensions, which we show can be especially simple targets between observational and counterfactual distributions\. In experiments, deconfounding flows outperform existing debiased counterfactual distribution estimators, while also mitigating known failure modes of flow\-based methods\.

## A Critical $\\beta$\-Scale for Posterior Collapse in Dirichlet $\\beta$\-VAEs

**Authors:** Delphine Doutsas; Bruno Figliuzzi

**ID:** 150320 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=izJBnbQo5y>) | [PDF](<https://openreview.net/pdf?id=izJBnbQo5y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150320>)

Posterior collapse is a common failure mode in variational autoencoders, but existing theory has mostly focused on Gaussian latent variables\. Dirichlet VAEs are comparatively less understood, despite their use in settings where latent variables represent proportions, abundances, memberships, or convex mixture weights\. We derive a closed\-form local stability threshold $\\beta\_c$ for collapse in symmetric Dirichlet $\\beta$\-VAEs with linear Gaussian decoders\. This threshold shows that collapse in those models depends not only on the data spectrum, but also on the simplex dimension and prior concentration through a trigamma curvature factor induced by the Dirichlet KL\. Although $\\beta\_c$ is derived from a local analysis, we find that it accurately tracks the empirical onset of collapse beyond the local regime\. We show its practical relevance in two real\-world linear\-mixture settings: hyperspectral unmixing and convex archetypal analysis\. Across experiments, $\\beta/\\beta\_c$ consistently organizes collapse\-related behavior, providing an interpretable coordinate and a practical way to narrow the search over the $\\beta$ hyperparameter before training\. Taken together, these empirical findings suggest that $\\beta\_c$ can serve, beyond its local derivation, as a practical reference point for anticipating collapse and guiding $\\beta$ selection in Dirichlet $\\beta$\-VAEs\.

## Unrestrained Simplex Denoising for Discrete Data\. A Generative Method Applied to Graphs\.

**Authors:** Yoann Boget; Alexandros Kalousis

**ID:** 154200 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FSawnw2xXM>) | [PDF](<https://openreview.net/pdf?id=FSawnw2xXM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154200>)

Denoising models such as Diffusion or Flow Matching have recently advanced generative modeling for discrete structures, yet most approaches operate directly in the discrete state space, leading to abrupt state changes\. We introduce simplex denoising, a simple yet effective generative framework that operates on the probability simplex\. The key idea is a non\-Markovian noising scheme in which, for a given clean data point, noisy representations at different times are conditionally independent\. While preserving the theoretical guarantees of denoising\-based generative models, our method removes unnecessary constraints, thereby improving performance and simplifying the formulation\. Empirically, \\emph\{unrestrained simplex denoising\} surpasses strong discrete diffusion and flow\-matching baselines across synthetic and real\-world graph benchmarks\.

## JaSpec\-LID: Local Intrinsic Dimension Estimation via Jacobian Spectra of ODE\-based Generative Models

**Authors:** Hiro Ishii; GENKI OSADA

**ID:** 149602 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=otXI54Uzfq>) | [PDF](<https://openreview.net/pdf?id=otXI54Uzfq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149602>)

Local intrinsic dimension \(LID\) quantifies the degrees of freedom of the data manifold around a point and is widely used to detect memorization, diagnose distribution shift, and characterize learned representations\. Existing generative\-model\-based LID estimators are model\-specific: they rely on a score, a log\-density Hessian, or an exact log\-likelihood, and therefore do not apply to ODE\-based generators \(flow matching, rectified flows, stochastic interpolants, and CNFs\) that expose only a velocity field\. We propose JaSpec, a model\-agnostic LID estimator that counts the singular values of the velocity\-field Jacobian $J\_t = \\partial f\_\\theta / \\partial x$ that fall below a threshold $\\tau$\. JaSpec applies uniformly to score\-based diffusion \(via the probability\-flow ODE\) and to flow\-based generators, and recovers Hessian\-based estimators on probability\-flow diffusion as a verification special case\. We prove a direct dynamical identifiability theorem under a Jacobian\-normal\-dominance condition stated entirely in terms of $J\_t$ and verified by an empirical spectral\-gap diagnostic\. On VP\-SDE diffusion and OT\-CFM flow\-matching benchmarks with known LID, JaSpec attains MAE $= 0$ on most settings up to $D\{=\}3072$, where no prior model\-based estimator reaches zero error, and improves over the strongest model\-based baseline by an order of magnitude on the hardest $3072$\-dimensional nonlinear mixture\. We provide both an exact $\\mathcal\{O\}\(D^3\)$ path and a linear\-cost stochastic Lanczos quadrature path\. JaSpec is, to our knowledge, the first LID estimator applicable to flow matching, rectified flows, and generic differentiable ODE generators\.

## Plug\-and\-Play ADMM for Inverse Problems with Flow Matching Denoiser

**Authors:** Dibyanshu Kumar; Magda Gregorova

**ID:** 153344 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=M3Ecn7ndl6>) | [PDF](<https://openreview.net/pdf?id=M3Ecn7ndl6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153344>)

Plug\-and\-Play \(PnP\) methods with generative priors have achieved strong performance in inverse problems, with recent flow matching models enabling fast and scalable reconstruction\. However, a key challenge in PnP methods is maintaining consistency between data fidelity updates and the learned generative prior, as data\-consistency steps can move iterates away from the flow trajectory\. We propose an ADMM\-based PnP framework for flow matching priors that enforces stronger consistency between the measurement model and the prior through auxiliary variables and dual updates\. In addition, we introduce a trajectory correction mechanism that restores consistency with the flow via a combination of deterministic and stochastic projections\. Our method provides a more principled integration of flow priors within PnP frameworks, achieving high\-quality reconstructions with reduced computational cost\.

## Improving Diffusion Posterior Samplers with Lagged Temporal Corrections for Image Restoration

**Authors:** Davide Evangelista; Elena Morotti; Francesco Pivi; Maurizio Gabbrielli

**ID:** 151348 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bCS5vqUUqK>) | [PDF](<https://openreview.net/pdf?id=bCS5vqUUqK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151348>)

Diffusion\-based posterior sampling \(PS\) is a leading framework for imaging inverse problems, combining learned priors with measurement constraints\. Yet, its standard formulations rely on instantaneous data\-consistent estimates, which induce temporal variability in the reverse dynamics\. We reinterpret PS from a dynamical perspective, showing that the standard PS update corresponds to a first\-order discretization of the diffusion dynamics plus a residual correction capturing the mismatch between the denoised prediction and the data\-consistent estimate\. A second\-order discretization, however, naturally introduces a temporal correction based on the variation of consecutive estimates\. Building on this, we propose LAMP, combining the second\-order update with the residual correction characterizing a PS technique\. LAMP thus inherits a lagged temporal correction, and it can be implemented as a modular plug\-in over the PS backbone\. We show that LAMP preserves the structure of a posterior sampler, and we perform a one\-step risk analysis to characterize when LAMP improves the reverse transition via a bias\-variance trade\-off\.   Experiments across multiple imaging tasks demonstrate consistent improvements over strong baselines such as DiffPIR and DDRM, without increasing the number of denoising evaluations\.

## Mixed\-Curvature Geometric Latent Diffusion Model for Graph Generation

**Authors:** Minxue Qi; Xian Yang; Liang Bai

**ID:** 149462 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pvgnsDCNSi>) | [PDF](<https://openreview.net/pdf?id=pvgnsDCNSi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149462>)

Existing latent graph diffusion models often learn graph representations and generative priors within a homogeneous latent geometry\.  This assumption is restrictive for graph generation with structural heterogeneity, where hierarchical, cyclic, locally regular, and densely connected patterns may coexist within the target distribution\. Under such conditions, forcing all structural patterns into one latent geometry can introduce representation distortion, which may then propagate to generation\. We propose CurvDiff, a latent graph generation framework based on mixed\-curvature latent diffusion\. The main idea is to model structurally different graph patterns in geometry\-compatible latent factors rather than representing them in a single\-curvature space\. Specifically, CurvDiff learns graph embeddings in a product latent geometry consisting of hyperbolic, spherical, and Euclidean components, and maps the resulting representation to a shared tangent\-space interface on which latent diffusion is defined\. This provides a consistent latent pathway from representation learning to generation\. To further preserve topology\-relevant structure, CurvDiff uses Ricci\-derived structural signals as topology\-aware priors\. These signals regularize latent representation learning and condition the diffusion prior, helping maintain structural consistency across representation learning and generation\. Experiments on synthetic and real\-world graph benchmarks show that CurvDiff achieves competitive or superior graph distribution matching compared with strong baselines, with improved fidelity on degree, clustering, and spectral statistics\. These results support mixed\-curvature latent diffusion as an effective approach to graph generation with structural heterogeneity\.

## Balancing Frequencies and Pixels in Flow Matching

**Authors:** Lucas Degeorge; Paul Couairon; Arijit Ghosh; Alexei Efros; David Picard; Vicky Kalogeiton

**ID:** 151310 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bR1U2URUlk>) | [PDF](<https://openreview.net/pdf?id=bR1U2URUlk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151310>)

Natural images follow a $1/f^2$ spectral distribution: most signal energy lies in the low spatial frequencies, while the perceptually important structures such as textures and edges occupy sparse high\-frequency bands\. Pixel\-space reconstruction objectives, however, treat all spatial errors uniformly, causing low frequencies to dominate the optimization signal and delaying the learning of fine\-scale details\.  In this work, we identify this objective\-level spectral imbalance as a key inefficiency in training pixel\-space flow models\.  To address it, we propose a Focal Log\-Frequency Loss \(\\floss\{\}\), a spectrally balanced objective that equalizes the learning signal across frequencies, emphasizing high\-frequency components that are otherwise underrepresented in pixel\-space objectives\.  Building on this, we introduce a simple training strategy that combines frequency and pixel supervision: we first emphasize frequency\-domain learning early to capture all frequencies, and then transition to standard pixel\-space $v$\-loss for spatial refinement\. This balancing mitigates the low\-frequency bias of pixel losses and aligns the training signal with the evolving needs of the model\.  Our approach is conceptually simple, requires no architectural changes, and acts as a drop\-in replacement for flow matching losses\. Across multiple model scales, it accelerates convergence by up to 40% while consistently improving FID and perceptual fidelity\. We will release code and models\.

## Escaping the Curse of Dimensionality in One‑Step Flow\-Based Generative Models

**Authors:** Konstantin Yakovlev

**ID:** 151654 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z20kWigIHe>) | [PDF](<https://openreview.net/pdf?id=Z20kWigIHe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151654>)

Flow and diffusion\-based generative models achieve state\-of\-the\-art quality, but require multiple forward passes at inference time, making them computationally costly\.     Consistency models overcome this by learning a flow map directly, enabling few‑step generation and dramatically reducing the computation needed at test time\.     However, formal statistical guarantees for such one‑step generators are scarce\.     Existing results either suffer from the curse of dimensionality or rely on impractical loss functions\.     We investigate whether one‑step flow\-based models can escape the curse of dimensionality under the assumption that the data distribution is generated by a low\-dimensional surface perturbed with Gaussian noise\.     In this setup, we derive approximation and generalization error bounds for the flow map estimate that circumvent the curse of dimensionality\.     Our findings provide the first principled explanation for practical success of one\-step flow\-based generative models\.

## DiLaDiff: Distilled Latent\-augmented Diffusion for Language Modeling

**Authors:** Jean\-Marie Lemercier; Tomas Geffner; Morteza Mardani; Karsten Kreis; Arash Vahdat; Ante Jukić

**ID:** 150062 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=l1EueDpKBW>) | [PDF](<https://openreview.net/pdf?id=l1EueDpKBW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150062>)

Diffusion language models intrinsically fail to capture correlations between decoded tokens, which leads to a harsh trade\-off between sampling quality and throughput\. To solve this issue, we propose DiLaDiff, a variant of masked diffusion language models with three components: \(1\) a continuous latent space with semantic capabilities, learned by an auto\-encoder fine\-tuned from an existing masked diffusion language model; \(2\) a latent diffusion model learning the prior over the encoder distribution; \(3\) a consistency model distilling the learned prior into a few\-step latent generative model\. We show that, even without distillation, our latent\-guided diffusion model outperforms the masked diffusion baseline while significantly accelerating inference\. Consistency distillation further lowers the computational overhead of continuous diffusion, such that the latent is generated in negligible time compared to discrete decoding\.

## Towards more general control of diffusion models using Jeffrey Guidance

**Authors:** Raphaël Razafindralambo; Rémy Sun; Frederic Precioso; Jes Frellsen; Pierre\-Alexandre Mattei

**ID:** 149382 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qUtuEEQhIU>) | [PDF](<https://openreview.net/pdf?id=qUtuEEQhIU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149382>)

A key strength of diffusion models lies in their flexibility, since their outputs can be controlled at sampling time through guidance\.  However, beyond simple cases such as conditional sampling, the target distribution is often left implicit, defined only through a sampling rule or a heuristic energy function\. To address this, we propose Jeffrey guidance, a principled framework that extends diffusion\-model control to applications beyond what standard guidance can express\. It leverages Jeffrey’s rule of conditioning to update marginal distributions towards a prescribed target, preserving the conditional structure and minimally perturbing the joint distribution\. We first demonstrate Jeffrey guidance by targeting a prescribed embedding distribution\. With Inception embeddings as the target, this leads to substantial reductions in FID on both CIFAR\-10 and FFHQ\. We further apply Jeffrey guidance to fairness on CelebA\-HQ, updating an unconditional diffusion model to enforce independence between attributes\.

## LayoutBridge: Anisotropic Brownian Bridges for Public Indoor Floorplan Generation

**Authors:** Tongyang Dai; Ruipeng Gao; Feng Liu; Wenqiu Bai; Lingkun Li; Qiang Ni

**ID:** 152710 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QyJ8TS7cW8>) | [PDF](<https://openreview.net/pdf?id=QyJ8TS7cW8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152710>)

Compared with residential layouts, public indoor floorplans present more substantial challenges with open corridors, complex room relations, and non\-Manhattan geometries, which do not conform to conventional residential\-layout assumptions\. Consequently, existing methods are prone to boundary discontinuities, leading to fragmented corridors and irregular wall structures\. To address the above issues, we propose \\textit\{LayoutBridge\}, a structure\-conditioned generative framework for floorplan production\. By moving beyond the Manhattan\-geometry assumptions commonly adopted in residential scenarios, LayoutBridge reformulates the task as a latent\-space Brownian\-bridge diffusion process from structural constraints to target layouts\. We have constructed our PISF dataset with 3,517 representative floorplans in public indoor spaces, and LayoutBridge reduces FID by 132\.35 and improves BIoU by 15\.52\\% over the latest image\-to\-image baselines\. Regarding the residential benchmarks MSD and RPLAN, it also reduces FID by at least 2\.53 compared with state\-of\-the\-art\. These results demonstrate its potential for scalable automated architectural design\. Code implementing the proposed method is publicly available at \\href\{http://github\.com/lalalalaxxx/LayoutBridge\}\{http://github\.com/lalalalaxxx/LayoutBridge\}\.

## Contextual Flow Matching: Adaptive Step Selection in Flow Models for Efficient Visual Generation

**Authors:** Divya Jyoti Bajpai; Arun Verma; Manjesh Kumar Hanawal

**ID:** 148315 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yjB0PiXm3S>) | [PDF](<https://openreview.net/pdf?id=yjB0PiXm3S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148315>)

Flow Matching enables high\-quality visual generation via continuous\-time dynamics, but inference remains costly due to multiple sequential function evaluations\. Existing acceleration methods reduce the number of function evaluations but often introduce additional training overhead, degrade quality, or fail to account for input\-dependent variability\. We propose an inference\-time method, CoFlow, that adaptively selects the step counts for each generation based on the prompt features\. Our context\-aware CoFlow is trained online with an unsupervised reward that balances efficiency and fidelity\. Our method is plug\-and\-play, requiring no retraining of the generative model\. It generalizes to image and video generation, achieving over $2\.5\\times$ speedup while preserving perceptual and semantic quality\. We also provide theoretical insights into the link between adaptive step allocation and discretization error\. The anonymized source code is available at \\url\{https://anonymous\.4open\.science/r/Contextual\_Flow\_Matching\-9970\}\.

## Mamba Flow Matching Neural Processes: Linear\-Time Inference for Irregularly Observed Spatial Fields

**Authors:** Cosmo Santoni; Giovanni Charles; Timothy James Hitge; Oliver Watson; Elizaveta Semenova

**ID:** 150767 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fVeT6lAKvN>) | [PDF](<https://openreview.net/pdf?id=fVeT6lAKvN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150767>)

Spatial interpolation from sparse irregular observations is a recurring task across the environmental and health sciences\. Neural processes amortise this inference into a single forward pass at test time\. Joint\-predictive variants capture correlations across query locations but typically rely on self\-attention over context and query points, incurring $O\(K^2\)$ compute in the combined point count $K$ and capping practical use at a few thousand points\. State\-space models offer a linear\-time alternative, but existing state\-space NPs compress the context into a single hidden state before reading queries, reducing the information available to the decoder\. We propose MambaFlowNP, a joint\-predictive NP with linear compute trained with a conditional flow\-matching objective\. A multi\-directional Mamba\-2 scan reads context and query tokens in a single shared sequence, so each query's velocity is read from its own scan position rather than from a compressed context summary\. MambaFlowNP is competitive with the strongest attention\-based joint\-predictive baselines on synthetic Gaussian\-process benchmarks, and across regional and continental\-scale NOAA temperature interpolation tasks it attains the lowest RMSE on every tier and the lowest CRPS at the California and continental US tiers, while running $170$\-\-$760\{\\times\}$ faster than the strongest joint\-predictive baseline\. A single forward pass scales to $10^6$ points on one GPU in under a second\. This scalability unlocks amortised joint\-predictive inference for continental\-scale, irregularly sampled sensor networks, spanning climate monitoring to disease vector surveillance\.

## Discrete Diffusion Models Exploit Asymmetry to Solve Lookahead Planning Tasks

**Authors:** Itamar Trainin; Shauli Ravfogel; Omri Abend; Amir Feder

**ID:** 151112 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ctX2gxgiSE>) | [PDF](<https://openreview.net/pdf?id=ctX2gxgiSE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151112>)

Discrete diffusion models are often said to outperform autoregressive models on planning tasks, but the specific mechanisms enabling this are not yet well understood\. To explain why, we abstract the complexity of studying \`\`planning'' into graph traversal problems, which offer a minimal setup for evaluating language models' planning and lookahead capabilities\. We find that non\-autoregressive language models are able to leverage an inherent directional asymmetry in lookahead planning tasks to outperform the training efficiency of their autoregressive counterparts\. Through a mechanistic study of the training and inference dynamics of autoregressive and non\-autoregressive models, we discover that while forward traversal through junctions in the graph requires complex sequential planning, the reverse path remains deterministic\. Consequently, non\-autoregressive models naturally develop a fundamentally different solution strategy\. Effectively, they learn a reverse\-decoding pattern which reduces an $\\ell^\{th\}$\-order lookahead problem to a sequence of simple $1^\{st\}$\-order transitions\. Latent\-space analysis further confirms these divergent strategies by demonstrating the distinct internal representations formed during generation\. Ultimately, these findings highlight the advantages of non\-autoregressive modeling while clarifying the inherent planning limitations induced by autoregressive architectures\.

## Neural Galerkin Normalizing Flows for Bayesian Inference of Diffusions with Inaccessible Boundaries

**Authors:** Riccardo Saporiti; Fabio Nobile

**ID:** 155213 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7Qy5PJB1Db>) | [PDF](<https://openreview.net/pdf?id=7Qy5PJB1Db>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155213>)

One of the primary challenges in Bayesian inference on the parameters of a diffusion model from discrete observations is the unavailability of an analytical expression for the transition density function between consecutive observation times, which is needed to derive the likelihood function\. Extending previous studies that solve Fokker\-Planck \(FP\) type partial differential equations with Normalizing Flows, we propose a new Normalizing Flow architecture to learn the transition density function of the diffusion process between two observation times\. We do so by solving in a Neural Galerkin framework the associated FP equation with a Dirac mass as initial condition, over a specified training distribution of the initial datum and the coefficients of the diffusion\. We specifically focus on processes whose diffusion matrix vanishes in certain inaccessible boundary regions, such as Stochastic Volatility models that satisfy a Feller condition\. The product of the obtained transition densities evaluated along the observed trajectory approximates the likelihood function, thereby enabling cheap posterior sampling via Markov chain Monte Carlo \(MCMC\)\. After the offline training phase, inference becomes significantly more efficient, as it avoids the need to solve the FP equation in real time for each parameter proposed by the MCMC sampler or to rely on other likelihood\-free methods for Bayesian inference that involve repeated simulation of diffusion bridges\.

## Hypergraph Generation via Structured Stochastic Diffusion

**Authors:** Christopher Nemeth

**ID:** 148881 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uTrWNzumkt>) | [PDF](<https://openreview.net/pdf?id=uTrWNzumkt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148881>)

Hypergraphs model higher\-order interactions, but realistic hypergraph generation remains difficult because incidence, hyperedge\-size heterogeneity, and overlap structure are not faithfully captured by pairwise reductions\. We propose HEDGE, a generative model defined directly on relaxed incidence matrices via a structured stochastic diffusion\. The forward process combines a hypergraph\-specific two\-sided heat operator with an Ornstein\-\-Uhlenbeck component, preserving structure\-aware noising near the data while yielding an explicit Gaussian terminal law\. Conditional on an observed hypergraph, this forward process is linear\-Gaussian, so conditional means, covariances, scores, and reverse\-drift targets are available in closed form\. We therefore learn a permutation\-equivariant state\-only reverse\-drift field in incidence space by regressing onto exact conditional targets, and generate samples by simulating a learned reverse\-time SDE from the Gaussian base law\. We establish exactness in the ideal state\-only setting together with finite\-horizon stability guarantees, and empirically show improved hypergraph generation quality relative to strong baselines\.

## FMMI: Flow Matching Mutual Information Estimation

**Authors:** Ivan Butakov; Alexander Semenenko; Valeriia Kirova; Ivan Oseledets; Alexey Frolov

**ID:** 148155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ztJ2dmj0k5>) | [PDF](<https://openreview.net/pdf?id=ztJ2dmj0k5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148155>)

We introduce a novel Mutual Information \(MI\) estimator that fundamentally reframes the discriminative approach\. Instead of training a classifier to discriminate between joint and marginal distributions, we learn a normalizing flow that transforms one into the other\. This technique produces a computationally efficient and precise MI estimate that scales well to high dimensions and across a wide range of ground\-truth MI values\.

## Generalized Wasserstein Flow Matching: Transport Plans, Everywhere, All at Once

**Authors:** Moritz Piening; Richard Duong; Gabriele Steidl

**ID:** 152114 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VRSgjWCWsh>) | [PDF](<https://openreview.net/pdf?id=VRSgjWCWsh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152114>)

Flow matching has recently emerged as a flexible and efficient framework for generative modelling by learning deterministic transport dynamics between probability measures\. In this work, we extend flow matching to the space of probability measures over probability measures, introducing a Wasserstein\-on\-Wasserstein \(WoW\) formulation\. Leveraging the nested Wasserstein geometry, we show that measures over transport plans naturally induce velocity fields that realize metameasure flows\. This yields a principled generalization of Wasserstein flow matching via coupled outer and inner transport plans\. To address the substantial computational cost of WoW transport, we propose scalable approximations based on sliced and linear Wasserstein distances, enabling efficient training while promoting numerically stable, near\-straight trajectories\. Our framework unifies and extends existing approaches to point cloud and set generation, providing a practical and theoretically grounded method for generative modelling in WoW spaces\.

## Uniform Diffusion Models revisited: Leave\-One\-Out Denoiser and Absorbing State Reformulation

**Authors:** Samson Gourevitch; Yazid Janati; Dario Shariatian; Umut Simsekli; Eric Moulines; Eric Xing; Alain Durmus

**ID:** 153715 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

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

## Disentangling generalization and memorization in large language models using chess

**Authors:** Leonard S\. Pleiss; Maximilian Schiffer; Robert K von Weizsäcker

**ID:** 153573 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KOZDunh4vu>) | [PDF](<https://openreview.net/pdf?id=KOZDunh4vu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153573>)

Large Language Models \(LLMs\) exhibit remarkable capabilities, yet it remains unclear to what extent these reflect sophisticated recall or genuine reasoning ability\. We introduce chess as a controlled testbed aimed at disentangling these faculties\. Leveraging the game’s structure and scalable engine evaluations, we construct a taxonomy of positions varying in density of relevant priors \- ranging from common states solvable by memorization to completely novel ones requiring generalization\. Crucially, our approach achieves this distinction without requiring explicit knowledge of the models' training data\. Applying this taxonomy, we combine a longitudinal analysis of the GPT lineage with a rigorous evaluation of contemporary models, including Claude Opus and Gemini\. Our analysis reveals a clear gradient: performance consistently degrades as the density of relevant priors decreases\. Notably, for tasks with few relevant priors, base model performance regresses to the random\-play baseline\. While newer models improve, progress slows significantly for tasks with sparse priors\. Furthermore, while reasoning\-augmented inference improves performance, its relative marginal benefit per token decreases in the absence of relevant priors\. These results suggest limitations in systematic generalization, highlighting the need for mechanisms beyond scale to achieve robust performance when deprived of relevant priors\.

## MedFlowSeg: Flow Matching for Medical Image Segmentation with Frequency\-Aware Attention

**Authors:** Zhi Chen; Runze Hu; Le Zhang

**ID:** 151266 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bf3XH3GbLU>) | [PDF](<https://openreview.net/pdf?id=bf3XH3GbLU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151266>)

Flow matching has recently emerged as a principled framework for learning continuous\-time transport maps, enabling efficient ODE\-based sampling without relying on stochastic diffusion processes\. While generative modeling has shown promise for medical image segmentation, particularly in capturing uncertainty and complex anatomical variability, existing approaches are predominantly based on diffusion models, which require iterative sampling and incur substantial computational overhead\. In this work, we propose MedFlowSeg, a conditional flow matching framework that formulates medical image segmentation as learning a time\-dependent vector field that transports a simple prior distribution to the target segmentation distribution\. Compared to diffusion\-based methods, our formulation enables more efficient inference through solving an ordinary differential equation, while preserving the flexibility of generative modeling\. To effectively incorporate conditional information, we introduce a dual\-conditioning mechanism\. Specifically, we propose a Dual\-Branch Spatial Attention \(DB\-SA\) module to inject multi\-frequency structural priors, and a Frequency\-Aware Attention \(FA\-Attention\) module to model interactions between spatial and spectral representations via discrepancy\-aware fusion and time\-dependent modulation\. These components improve the alignment between noisy intermediate states and clean semantic features, leading to better structural consistency and boundary delineation\. We conduct extensive experiments across multiple medical imaging modalities, where MedFlowSeg consistently outperforms prior state\-of\-the\-art \(SOTA\) baselines, including diffusion\-based and flow\-based methods\. Code is available at https://anonymous\.4open\.science/r/MedFlowSeg\-C67C/\.

## The balance between feature learning and collapse in generative dynamical systems

**Authors:** Julian Brandon; Bruno Loureiro; N Alex Cayco Gajic; Arthur Pellegrino

**ID:** 153188 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NB4cYMKKno>) | [PDF](<https://openreview.net/pdf?id=NB4cYMKKno>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153188>)

Over the past decade, a growing body of work has established that implicit biases in learning dynamics fundamentally shape the solutions found by neural networks, governing their learned features and generalisation performance\. However, despite these strides in deep learning theory, far less is known about representation learning in generative models based on dynamical systems, from normalising flows to diffusion\. Importantly, continuous\-time generative models can be prone to mode collapse, yet the learning dynamics underpinning such biases remain elusive\. To address this, we use tools from dynamical systems and operator theory to show that bounds on the rank of the gradient of the model weights can explain how collapse occurs in generative models\. We show that, in both variational inference and flow matching tasks, optimisation induces low\-rank biases that encourage parsimonious representation learning but may also cause the learned distribution to collapse\. Together these findings point to a trade\-off between promoting feature learning while avoiding both memorisation and collapse in dynamical systems\-based generative models\.

## Learning Domain Trajectories with Flow Matching for Gradual Domain Adaptation

**Authors:** Yubo Huang; Zixi Wang; Yushe Cao; Jingzehua Xu; Xin Lai; Xiongyu Hu; Shuai Zhang

**ID:** 154474 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DKQN6U1wgY>) | [PDF](<https://openreview.net/pdf?id=DKQN6U1wgY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154474>)

Large distribution shifts remain a primary obstacle for domain generalization and unsupervised adaptation\. Although gradual domain adaptation alleviates this difficulty by introducing ordered intermediate domains, most existing approaches still operate in a discrete, step\-wise manner, which can accumulate errors and often relies on unstable Min\-\-Max optimization\. We propose \\textbf\{FlowGDA\}, a flow\-matching framework that models gradual adaptation as \\emph\{continuous\} transport on a statistical manifold in a representation space\. FlowGDA learns time\-dependent velocity fields that induce smooth domain trajectories, using a simulation\-free regression objective rather than adversarial training\. To prevent semantic drift, we couple left\-to\-right transport between consecutive domains with a source\-anchored transport and a semantic consistency loss, and we further stabilize learning via a two\-stage sequential optimization scheme\. Extensive experiments demonstrate that our method outperforms state\-of\-the\-art techniques, validating flow matching as an effective alternative for domain adaptation\.

## In\-Context Learning for Remote Sensing Vision: A Semantic\-Aware Rotation\-Robust Diffusion Framework

**Authors:** jing geng; Chuanlong Zhang; Jiayi Su; Wencheng Han

**ID:** 153213 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N0NAWBW9UA>) | [PDF](<https://openreview.net/pdf?id=N0NAWBW9UA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153213>)

Remote sensing imagery supports diverse visual tasks, such as object detection and semantic segmentation, but these tasks vary across scenes, imaging modalities, and target objects\. Since many remote sensing scenarios lack sufficient annotations, conventional supervised learning is often difficult to apply, motivating in\-context learning as a flexible alternative\.We present an in\-context learning framework for remote sensing visual tasks, where a new task is specified by a single annotated example and applied to unseen images without retraining at inference time\. Built upon diffusion models, our framework establishes target\-reference associations through cross\-attention and transfers the structural relationship between the reference image and its annotation to produce task\-specific predictions\. Unlike natural images, remote sensing objects are often small and provide weak semantic cues in early diffusion steps, making semantic alignment between target and reference images difficult\. We address this limitation with a semantic\-aware cross\-attention that combines semantic and fine\-grained details for more accurate cross\-image matching\. Remote sensing objects also appear at arbitrary orientations, causing large appearance variations and unstable in\-context transfer\. To improve robustness, we introduce a rotation\-robust learning strategy that reduces sensitivity to orientation changes\. Experiments show that our method achieves strong one\-shot performance, establishing a flexible paradigm for adapting remote sensing models to diverse visual tasks\.

## Virtual\-Flow: Virtual Microphone\-based Speech Enhancement via Unsupervised Flow Matching

**Authors:** Dongheon Lee; Ashutosh Pandey; Sanjeel Parekh; Zhaoheng Ni; Daniel D Wong; Jacob Donley; Buye Xu; Juan Azcarreta

**ID:** 151716 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YbYTlv6QId>) | [PDF](<https://openreview.net/pdf?id=YbYTlv6QId>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151716>)

Neural network\-based virtual microphone estimation \(neural\-VME\) synthesizes microphone signals at unobserved spatial locations from a limited set of real microphone \(RM\) physical recordings\. This enables high\-resolution arrays that improve spatial processing for downstream tasks such as speech enhancement\. However, existing methods rely on supervised training with ground\-truth signals captured at virtual locations, requiring datasets that scale with the number of virtual microphones \(VM\) and leaving open the question of how to design optimal large\-array configurations\. We propose  \\textit\{Virtual\-Flow\}, a flow\-matching framework that implicitly generates VM signals conditioned on real recordings, without requiring ground\-truth targets\. We introduce an unsupervised training strategy based on pseudo\-VM targets constructed from time\-delayed superpositions of real recordings, and show that it improves magnitude estimation in high\-frequency bands, yielding richer spatial cues for beamforming\. Experiments demonstrate that the proposed Virtual\-Flow, combined with reflow distillation, outperforms existing state\-of\-the\-art neural\-VME models on downstream neural beamforming and speech enhancement tasks while requiring lower computational load\.

## Cheap Per\-Component Testing for PLS, Stable Under Rotation

**Authors:** Paweł Lenartowicz; Hubert Plisiecki

**ID:** 148469 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xb6CB7d9LO>) | [PDF](<https://openreview.net/pdf?id=xb6CB7d9LO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148469>)

Partial Least Squares \(PLS\) regression extracts a few outcome\-aligned directions in a high\-dimensional $\\mathbf\{X\}$ and is widely used across applied science, but inference on the resulting fit is either expensive \(CV\-permutation\-$Q^\{2\}$\), biased and discouraged \(jackknife $t$\), or absent sklearn ships no test; the corresponding statsmodels feature request has been open since 2019\)\. We close this gap by reducing inference to held\-out OLS refits of the supervised subspace, a primitive shared by PLS, supervised PCA, linear probes, and sparse\-autoencoder concept directions\. We supply two tests on it: a Nadeau\-Bengio corrected asymptotic $t$\-test \(NB\-asymptotic\) as the default, and a permutation\-referenced variant \(NB\-permutation\) for near\-singular designs where the Fisher\-$z$ asymptotic drifts\. A rotation\-invariance result shows the held\-out predictions, and hence the test statistic, are unchanged under any orthogonal rebasing of the supervised span, so the same test applies to varimax\-rotated word\-readable axes\. We validate on PLS \(synthetic geometries, Tecator NIR chemometrics, cross\-lingual GloVe valence prediction in EN/PL/ES at $K=3$, $r^\{2\}\\approx0\.63/0\.69/0\.55$, all $p&lt;\.001$\); transfer to the other OLS\-refit pipelines is argued but not tested here\. NB needs $\\sim20\\%$ fewer samples than CV\-permutation\-$Q^\{2\}$ for matched power and is $50\-100 \\times$ cheaper at common, already compromised, defaults\. We release a Rust library with Python, R, and Julia bindings, plus a Python text pipeline\.

## Tessellations of Semi\-Discrete Flow Matching

**Authors:** Emile Pierret; Johannes Hertrich; Samuel Hurault; Julie Delon

**ID:** 153677 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JbKDDvGT8o>) | [PDF](<https://openreview.net/pdf?id=JbKDDvGT8o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153677>)

We study Flow Matching in a semi\-discrete setting where a Gaussian source is transported toward a discrete target supported on finitely many points\. This semi\-discrete regime is the theoretical setting behind the use of Flow Matching for generative modeling, where the target distribution is represented by a finite dataset\. In this semi\-discrete regime, the exact Flow Matching velocity field is available in closed form, which makes it possible to analyze the geometry induced by the terminal flow map independently of optimization and approximation effects\. We investigate the terminal assignment regions, namely the preimages of the target atoms under the terminal flow\. We show that these regions are open, simply connected and, under an additional assumption, homeomorphic to the unit ball\. At the same time, a planar four\-point example shows that these cells can differ sharply from Laguerre cells arising in semi\-discrete optimal transport: they may be non\-convex, have curved boundaries, and exhibit different boundedness and adjacency patterns\. These results clarify the geometry intrinsically induced by the exact semi\-discrete Flow Matching objective before neural approximation enters the picture\.

## Zero\-Shot Burst Restoration via Diffusion MAP Inference with Poisson\-Gaussian Noise Likelihood

**Authors:** Ziyao Yi; Luca Savant Aira; Diego Valsesia; Tiziano Bianchi; Enrico Magli

**ID:** 155255 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=74q1hHnQcO>) | [PDF](<https://openreview.net/pdf?id=74q1hHnQcO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155255>)

Burst image restoration aims to reconstruct a high\-quality image from a sequence of low\-quality frames\. While state\-of\-the\-art supervised methods achieve excellent performance, they rely on extensive paired datasets that may be difficult to acquire in practice and often fail to generalize across different camera sensors or real\-world noise levels\. Zero\-shot diffusion\-based methods offer a compelling, training\-free alternative\. However, they typically struggle on burst imaging due to their assumption of known forward operators\. In this paper, we introduce ZSBR: Zero\-Shot Burst Restoration, a zero\-shot diffusion framework for burst restoration that performs MAP\-style inference by combining a pretrained diffusion prior with a physically grounded burst formation model\. ZSBR accounts for signal\-dependent RAW noise by leveraging a continuous Poisson\-Gaussian model\. Moreover, unlike common diffusion\-based methods that assume a fixed operator, ZSBR refines image alignment parameters online by optimizing per\-frame affine matrices within the forward model during sampling\. To stabilize the resulting optimization, we integrate an adaptive descent scheme into the sampling loop\. Moreover, the method is flexible and allows to achieve a desired distortion\-perception tradeoff\. Experimental results show that our method provides a flexible and robust solution to burst restoration without requiring any paired training example\.

## Primal\-Dual Guided Decoding for Constrained Discrete Diffusion

**Authors:** Federico Tomasi; Dmitrii Moor; Alice Wang; Mounia Lalmas

**ID:** 152632 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RdcJpbmm7F>) | [PDF](<https://openreview.net/pdf?id=RdcJpbmm7F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152632>)

Discrete diffusion models generate structured sequences by progressively unmasking tokens, but enforcing global property constraints during generation remains an open challenge\. We propose primal\-dual guided decoding, an inference\-time method that formulates constrained generation as a KL\-regularised optimisation problem and solves it online via adaptive Lagrangian multipliers\. At each denoising step, the method adds a constraint\-dependent bias to token logits, with multipliers updated by mirror descent based on constraint violation\. The approach requires no retraining, introduces no additional model evaluations, supports multiple simultaneous constraints, and provides formal bounds on constraint violation\. Because the bias is additive on logits, it preserves the model's learned distribution while steering outputs toward desired properties, yielding a favourable trade\-off between constraint satisfaction and distributional fidelity\. We demonstrate the method on topical text generation, molecular design, and music playlist generation, showing that a single algorithm instantiated via domain\-specific scoring functions achieves high constraint satisfaction while maintaining diversity and validity, without additional training or inference cost\.

## Midpoint Generative Models

**Authors:** Daniil Shlenskii; Nikita Gushchin; Lev Novitskiy; Dmitry V\. Dylov; Aleksandr Korotin

**ID:** 154433 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dbpj9Jvyqt>) | [PDF](<https://openreview.net/pdf?id=Dbpj9Jvyqt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154433>)

We introduce \*Midpoint Generative Models\* \(MGM\), a principled framework for training one\-step generative models\. MGM is based on a simple symmetry of Flow Matching with linear interpolation: when the two endpoint distributions coincide, the corresponding drift field vanishes at the midpoint time, $t=1/2$\. We show that the norm of this field defines a valid discrepancy between distributions, which we call the \*Midpoint Divergence\*\. We extend this discrepancy beyond the midpoint by introducing randomly flipped interpolations and further generalize it by replacing deterministic linear Flow Matching interpolations with symmetric stochastic interpolants, yielding a generalized Midpoint Divergence\. Finally, we derive a variational formulation of our generalized divergence, yielding a tractable objective for training a one\-step generator\. The resulting MGM algorithm offers an effective and theoretically grounded approach to generative modeling, achieving competitive performance against existing one\-step generative modeling methods\.

## Secure Seed\-Based Multi\-bit Watermarking for Diffusion Models from First Principles

**Authors:** Enoal Gesny; Eva Giboulot

**ID:** 153457 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L9bouam6wJ>) | [PDF](<https://openreview.net/pdf?id=L9bouam6wJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153457>)

The rapid emergence of generative image models has led to the development of specialized watermarking techniques, particularly in\-generation methods such as seed\-based embedding\. However, current evaluations in this area remain largely empirical, making them heavily reliant on the specific model architectures used for generation and inversion\. This prevents any clear conclusion on the performance of any method, especially regarding security, for which a rigorous definition is lacking\. Against this approach, we argue that the effectiveness of a watermarking scheme should be established purely through a thorough theoretical analysis\. This is enabled by decoupling the model\-dependent part from the actual decision mechanism of the watermarking system\. Using this decoupling, we introduce a formal evaluation framework based on security, robustness, and fidelity\. This allows precise comparisons between watermarking systems through a characteristic surface representing the trade\-off between these three quantities, independent of any generative model\. Based on this framework, we propose SSB, a novel watermarking method that generalizes previous seed\-based methods by allowing to reach any security\-robustness\-fidelity regime on its characteristic surface\. This work opens the door to the design of modern watermarking systems with theoretical guarantees that do not necessitate any costly empirical evaluations\.

## Inference\-Time Refinement Closes the Synthetic\-Real Gap in Tabular Diffusion

**Authors:** Eugenio Lomurno; Filippo Balzarini; Francesco Benelle; Francesca Pia Panaccione; Matteo Matteucci

**ID:** 151371 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b4cH8bQHbT>) | [PDF](<https://openreview.net/pdf?id=b4cH8bQHbT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151371>)

Diffusion\-based generators set the current state of the art for synthetic tabular data, deployed downstream wherever direct access to real records is restricted\. These methods approach but rarely exceed real\-data utility on downstream tasks, and closing this synthetic\-\-real performance gap has so far been pursued exclusively at training time, via architectural advances, scaling, and retraining of monolithic generators\. The inference\-time alternative, i\.e\., refining the outputs of a pre\-trained backbone with parameters left untouched, has remained largely unexplored for tabular synthesis\. We introduce $\\textbf\{TARDIS\}$ \(Tabular generation through Refinement, Distillation, and Inference\-time Sampling\), an inference\-time refinement framework that operates on a frozen pre\-trained backbone, configured per dataset by a Tree\-structured Parzen Estimator search over score\-level guidance during reverse diffusion, with each trial's objective set by an inner grid search over post\-hoc sample selectors and an optional soft\-label distillation step\. The search space encodes a single mathematical pattern we name $\\textit\{Bidirectional Chamfer Refinement\}$ \(BCR\): the symmetric Chamfer functional between synthetic and real samples is minimized both continuously, via a score\-level gradient during reverse diffusion, and discretely, via batch\-ranking post\-generation\. On the majority of datasets the search selects BCR\-aligned configurations over alternatives encoded in the search space, evidence both for BCR as the dominant refinement pattern and for TARDIS's per\-dataset search as a procedure that recovers this pattern\. Across 15 binary, multiclass, and regression benchmarks TARDIS achieves a median $\+8\.6\\%$ downstream\-task improvement over models trained on real data \(95\\% CI $\[\+3\.3, \+16\.4\]$, Wilcoxon $p=0\.016$, 11/15 strict wins\) and improves over the underlying TabDiff backbone on all 15 datasets \(mean $\+12\.9\\%$, $p&lt;10^\{\-4\}$\), matching the backbone on manifold fidelity, diversity, and sample\-level privacy\. The synthetic\-\-real gap is therefore not primarily a training\-time problem: on the studied corpus, inference\-time refinement of a pre\-trained tabular diffusion backbone reaches and exceeds real\-data utility in 1 to 80 minutes on a single consumer\-grade GPU\.

## The Power of Second Order Methods for Sequence Preconditioning

**Authors:** Annie Marsden; Elad Hazan

**ID:** 151370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b4vIW5Fa4z>) | [PDF](<https://openreview.net/pdf?id=b4vIW5Fa4z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151370>)

Sequence prediction methods for dynamical systems with long memory, i\.e\. marginally stable systems, typically achieve regret that grows polynomially with the hidden dimension of the underlying generative model\. Universal Sequence Preconditioning \(USP\) \\cite\{marsdenuniversal\} is a method that compresses any sequence which comes from a linear dynamical system into a \`\`preconditioned'' sequence which requires exponentially shorter memory for accurate prediction\. However, the preconditioned sequence yields exponentially larger diameters and gradients, hindering USP from unlocking optimal regret bounds\. Inspired by the minimum description length principle, we show that the Vovk\-Azoury\-Warmuth \(VAW\) algorithm is naturally matched to the USP regime\. Indeed, it takes advantage of the memory compression while remaining robust to the exponential explosion of the diameter\. We prove that combining USP with VAW achieves astoundingly strong results: for any marginally\-stable linear dynamical system, this algorithm achieves polylogarithmic regret $O\\left\( \\log^3 T \\right\)$ even in the presence of asymmetric hidden transition matrices\. Finally, we extend the applicability of USP beyond bounded\-spectrum systems by providing new complex\-analytic bounds on Chebyshev polynomials, allowing for systems with constant complex arguments\.

## Multi\-Bridge Denoising Diffusion Probabilistic Models

**Authors:** Mélodie Monod; Habib Ganjgahi

**ID:** 149159 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sPUcecZGfS>) | [PDF](<https://openreview.net/pdf?id=sPUcecZGfS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149159>)

Image\-to\-image translation aims to generate a target image conditioned on an observed source\. While diffusion bridge models perform well in one\-to\-one settings, they are not adapted to problems where multiple sources provide complementary information about a single target\. We introduce \*Multi\-Bridge Denoising Diffusion Probabilistic Models\* \(MB\-DDPMs\), a framework for many\-to\-one translation that builds stochastic bridges between the target and each source, coupled through a unified reverse process that aggregates information across sources\.  We evaluate MB\-DDPM on brain MRI for Multiple Sclerosis to predict FLAIR contrast from T1, T2 and PD contrasts\. We demonstrate strong clinical relevance through near\-perfect agreement with ground\-truth lesion\-based measurements, highlighting its potential for reliable downstream medical analysis\. We further evaluate MB\-DDPM on image restoration using CIFAR\-10 and ImageNet\. Across all settings, MB\-DDPM achieves state\-of\-the\-art performance, consistently outperforming existing baselines in both reconstruction quality and perceptual metrics\.

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

## Space Group Conditional Flow Matching

**Authors:** Omri Puny; Yaron Lipman; Benjamin K Miller

**ID:** 152663 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RKIPnVN3E0>) | [PDF](<https://openreview.net/pdf?id=RKIPnVN3E0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152663>)

Inorganic crystals are periodic, highly symmetric arrangements of atoms in three\-dimensional space\. Their structures are constrained by the symmetry operations of a crystallographic \\emph\{space group\} and restricted to lie in specific affine subspaces known as \\emph\{Wyckoff positions\}\. The frequency an atom appears in the crystal and its rough positioning are determined by its Wyckoff positions\. Most generative models that predict atomic coordinates overlook these symmetry constraints, leading to unrealistically high populations of proposed crystals exhibiting limited symmetry\. We introduce Space Group Conditional Flow Matching \(SGFM\), a novel generative framework that samples significantly closer to the target population of highly symmetric, stable crystals\. We achieve this by conditioning the entire generation process on a given space group and set of Wyckoff positions; specifically, we define a conditionally symmetric noise  distribution and a group\-conditioned, equivariant, parametric vector field that restricts the motion of atoms to their initial Wyckoff position\. Our form of group\-conditioned equivariance is achieved using an efficient reformulation of \\emph\{group averaging\} tailored for symmetric crystals\. It reduces the computational overhead of symmetrization to a negligible level\. SGFM achieves state\-of\-the\-art performance in \\textit\{De Novo Generation\} on the MP\-$20$ benchmark\.

## VolCo: Volumetric Contact for High\-Fidelity Human Grasp Generation

**Authors:** Zhuo Chen; Yihua Cheng; Ales Leonardis; Hyung Jin Chang

**ID:** 152277 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UHbULsTmRA>) | [PDF](<https://openreview.net/pdf?id=UHbULsTmRA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152277>)

Accurate contact modeling is fundamental to understanding hand–object interaction, yet existing contact representations are typically restricted to object surfaces and rely on hand‑crafted rules to recover contact details, leading to severe penetrations and implausible results\. To better exploit the rich detail in motion‑capture data, we introduce Volumetric Contact \(VolCo\), a representation that expands surface points to a set of 3D volumetric grids\. VolCo encodes 3D contact that allows precise hand part recovery, and is organized in an inherent hierarchy: local contact details within each volume and global hand geometry across all volumes\. Our framework, VolCoDiff, employs two modules to capture local and global features following this hierarchy\. For local contact details, we use a 3D variational autoencoder to model the possible hand configurations conditioned on the local object signed distance field \(SDF\)\. For global hand geometry, we design a prior‑guided diffusion model that learns the distribution of compressed latent features aggregated from the volumetric grids\. We evaluate our method on two benchmark datasets and demonstrate state‑of‑the‑art performance in penetration and stability, indicating the capability to generate tight grasps with much less severe penetrations\.

## Generalization Dynamics of Linear Diffusion Models

**Authors:** Claudia Lioba Merger; Sebastian Goldt

**ID:** 148559 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wzMJ3pDLv1>) | [PDF](<https://openreview.net/pdf?id=wzMJ3pDLv1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148559>)

Diffusion models are powerful generative models that produce high\-quality samples from complex data\. While their infinite\-data behavior is well understood, their generalization with finite data remains less clear\. Classical learning theory predicts that generalization occurs at a sample complexity that is exponential in the dimension, far exceeding practical needs\. We address this gap by analyzing diffusion models through the lens of data covariance spectra, which often follow power\-law decays, reflecting the structure of real data\. To understand whether such a power\-law structure can benefit learning in diffusion models, we develop a theoretical framework based on linear neural networks, congruent with a Gaussian hypothesis on the data\. We quantify how the covariance spectra of data and regularization impact generalization\. We find two regimes: When $N &lt;d$, not all directions of variation are present in the training data, which results in a large gap between training and test loss\. In this regime, we demonstrate how a power\-law data structure, as well as regularization and early stopping help to prevent overfitting\. For $N \\gg d$, we find that the sampling distributions of linear diffusion models approach their optimum \(measured by the Kullback\-Leibler divergence\) linearly with $d/N$, independent of the specifics of the data distribution\. Our work clarifies how sample complexity governs generalization in a simple model of diffusion\-based generative models\.

## Predict\-Project\-Renoise: Sampling Diffusion Models under Hard Constraints

**Authors:** Omer Rochman Sharabi; Gilles Louppe

**ID:** 156090 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0RZexLnRZZ>) | [PDF](<https://openreview.net/pdf?id=0RZexLnRZZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156090>)

Diffusion models cannot enforce hard constraints, yet applications in the physical sciences demand exact satisfaction of conservation laws, boundary conditions, and observational consistency\. In this work, we identify a corrector kernel whose unique stationary distribution is the constrained marginal at each noise level, and approximate it by iteratively projecting through the denoiser and renoising via the forward kernel\. The resulting Predict\-Project\-Renoise \(PPR\) algorithm enables sampling from pretrained diffusion models under hard constraints\. Its three components are each necessary: projecting through the denoiser keeps samples close to the data manifold, while renoising and iterating drive samples toward the constrained marginal\. On 2D distributions, the Kuramoto\-Sivashinsky equation, and global weather forecasting with a $10^8$\-dimensional atmospheric model, PPR simultaneously achieves low constraint violations and high distributional fidelity, a combination that existing methods fail to deliver\.

## Multilevel and Sequential Monte Carlo for Training\-Free Diffusion Guidance

**Authors:** Aidan Gleich; Scott C Schmidler

**ID:** 152830 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q6OAfOK7A6>) | [PDF](<https://openreview.net/pdf?id=Q6OAfOK7A6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152830>)

We address the problem of accurate, training\-free guidance for conditional generation in trained diffusion models\. Existing methods typically rely on point\-estimates to approximate the posterior score, often resulting in biased approximations that fail to capture multimodality inherent to the reverse process of diffusion models\. We propose a sequential Monte Carlo \(SMC\) framework that integrates over the full denoising distribution to construct an unbiased Monte Carlo estimator of $p\_\\theta\(y\|x\_t\)$, avoiding the bias of existing training\-free guidance methods\. To ensure computational tractability, we incorporate variance\-reduction schemes based on MultiLevel Monte Carlo \(MLMC\)\. We evaluate on three image generation tasks\. On CIFAR\-10 and ImageNet classifier guidance, our approach improves accuracy by 18 and 38 points respectively over the strongest training\-free baseline\. On CelebA\-HQ joint\-attribute guidance, three existing methods \(DPS, LGD, TFG\) used within our framework all outperform the closest SMC\-based comparator \(TDS\) by 25\-37 points, and improve over the strongest baseline by 2\-14 points\.

## Generative Control as Optimization: Time Unconditional Flow Matching for Adaptive and Robust Robotic Control

**Authors:** Zunzhe Zhang; Runhan Huang; Yicheng Liu; Shaoting Zhu; Linzhan Mou; Hang Zhao

**ID:** 149041 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tIN1NuFf6l>) | [PDF](<https://openreview.net/pdf?id=tIN1NuFf6l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149041>)

Diffusion and flow\-based generators are increasingly used in robot policies to produce action chunks from visual observations, proprioception, and language instructions\. However, closed\-loop robot control requires solving action\-generation problems of varying difficulty, whereas standard diffusion and flow\-matching inference typically follows a fixed integration schedule\. We introduce Generative Control as Optimization \(GeCO\) , a time\-unconditional framework that turns action synthesis from fixed\-time integration into iterative optimization\. GeCO learns a stationary velocity field over action sequences, and refines actions until the field norm becomes small\. This enables adaptive computation at each planning call: simple states can terminate early, while difficult states can use additional refinement\. The same field norm also provides a lightweight signal for non\-convergent action generation under distribution shift\. GeCO can be instantiated in both diffusion\-transformer policies and flow\-matching Vision\-Language\-Action \(VLA\) systems without changing the surrounding policy interface\. Across simulation benchmarks and real\-world tasks, GeCO matches or improves task performance while enabling convergence\-based inference as a plug\-and\-play replacement for standard time\-conditioned action generators\.

## Sticky Jump Diffusions: A Unifying Framework for Discrete, Continuous, and Hybrid Diffusion

**Authors:** Pascal Jutras; Patrick Pynadath; Jeremy Lu; Yuan Gao; Ruqi Zhang

**ID:** 152342 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TmV4qk3gOS>) | [PDF](<https://openreview.net/pdf?id=TmV4qk3gOS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152342>)

We introduce Sticky Jump Diffusions \(SJDs\), continuous\-time Markov processes on $\\mathbb R^d$ with a discrete anchor set identified with token embeddings\. In forward time, anchors release their mass at a hazard rate and the released mass diffuses in the continuous ambient space; time reversal couples a score\-driven SDE with a sticky jump kernel whose rate and destination are fixed by flux balance with the forward law\. We estimate the score and the per\-anchor reverse hazards from a single denoising classifier via Denoising Hazard Matching, the hazard analogue of denoising score matching, with simulation\-free cross\-entropy training\. SJD generalizes the classical sticky\-boundary diffusions of Feller and Itô to vocabulary\-sized anchor sets, and recovers masked diffusion, continuous diffusion, and hybrid diffusion as limits\. Beyond these limits, the framework exposes two design axes that previous work hold fixed: the un\-sticking kernel, which encodes both per\-anchor geometry and cross\-position structure of the corruption, and the per\-anchor forward hazard, which encodes the commitment schedule\. We evaluate SJD on CIFAR\-10, ImageNet $64\{\\times\}64$, Text8, and Sudoku, where it is competitive with discrete, continuous, and hybrid baselines\.

## Magnetic Resonance Unpaired Image Translation with Pseudometric Schrödinger Bridges

**Authors:** Shuwen Wei; Samuel Remedios; Zhangxing Bian; Shimeng Wang; Jinwei Zhang; Junyu Chen; Yihao Liu; Lianrui Zuo; Muhammad Faizyab Ali Chaudhary; Blake Dewey; Aaron Carass; Jerry L Prince

**ID:** 152653 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ROSqb47snS>) | [PDF](<https://openreview.net/pdf?id=ROSqb47snS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152653>)

Unpaired image translation is a critical preprocessing strategy for synthesizing missing sequences and harmonizing contrast variability in magnetic resonance \(MR\) imaging\. However, in medical image processing, distribution\-level translation is insufficient; it is vitally important that the anatomy is not distorted, corrupted, or lost after translation\. Previous methods, like diffusion Schrödinger bridge matching \(DSBM\) achieve image translation, but do not preserve anatomy\. We introduce the pseudometric Schrödinger bridge \(PMSB\), which trains two independent volume\-preserving, isometry\-regularized diffeomorphisms to map data from each domain to a latent anatomic pseudometric space\. Then, DSBM is used within that space, explicitly minimizing the transport gap while preserving anatomy\. Extensive experiments on the multi\-contrast OASIS\-3 dataset demonstrate that PMSB establishes a new state\-of\-the\-art in structural consistency for cross\-contrast synthesis\. PMSB outperforms other leading methods and drastically reduces anatomical hallucinations, notably yielding a mean PSNR of 26\.70 dB, a mean SSIM of 0\.86, and a mean LNCC of 0\.24\.

## Why Pass@k Optimization Can Degrade Pass@1: Prompt Interference in LLM Post\-Training

**Authors:** Anas Barakat; Souradip Chakraborty; Khushbu Pahwa; Amrit Singh Bedi

**ID:** 152425 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TCynOWswES>) | [PDF](<https://openreview.net/pdf?id=TCynOWswES>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152425>)

Pass@$k$ is a widely used performance metric for verifiable large language model tasks, including mathematical reasoning, code generation, and short\-answer reasoning\. It defines success if any of $k$ independently sampled solutions passes a verifier\. This multi\-sample inference metric has motivated inference\-aware fine\-tuning methods that directly optimize pass@$k$\. However, prior work reports a recurring trade\-off: pass@$k$ improves while pass@1 degrades under such methods\. This trade\-off is practically important because pass@1 often remains a hard operational constraint due to latency and cost budgets, imperfect verifier coverage, and the need for a reliable single\-shot fallback\. We study the origin of this trade\-off and provide a theoretical characterization of when pass@$k$ policy optimization can reduce pass@1 through gradient conflict induced by prompt interference\. We show that pass@$k$ policy gradients can conflict with pass@1 gradients because pass@$k$ optimization implicitly reweights prompts toward low\-success prompts; when these prompts are what we term \\emph\{negatively interfering\}, their upweighting can rotate the pass@k update direction away from the pass@1 direction\. We illustrate our theoretical findings with large language model experiments on verifiable mathematical reasoning and coding tasks\.

## FluxLite: Inference\-Time Proposal Control for Discrete Diffusion Models

**Authors:** Yinuo Ren; Haoxuan Chen; Grant Rotskoff; Jiequn Han; Lexing Ying

**ID:** 152301 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U53acQOZ93>) | [PDF](<https://openreview.net/pdf?id=U53acQOZ93>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152301>)

Many inference\-time tasks for pretrained discrete diffusion models and diffusion language models reduce to drawing samples from a tilted version of the pretrained distribution\. Feynman\-\-Kac sequential Monte Carlo \(SMC\) makes this correction exact in principle, but its prescribed weights routinely degenerate when the proposal dynamics are misaligned with the tilt, capping the practical gains from additional particles\. We introduce \*FluxLite\*, a lightweight, training\-free proposal\-control framework for discrete diffusion\. On the sparse directed graph of pretrained reverse rates, any sparse jump\-rate perturbation can be exactly compensated by a $q\_t$\-weighted graph\-divergence term in the Feynman\-\-Kac potential; the target path is therefore preserved while the residual reweighting variance becomes a local convex objective\. We instantiate this principle as two practical samplers: a one\-hop local reallocation rule \(HEU\) and a small nonnegative quadratic program over pretrained\-rate bases \(D\-VCG\)\. We further prove population stability under the standard score\-entropy training loss, identifying a tilted\-path coverage factor that governs robustness to score error, together with finite\-particle convergence for a fixed controlled Feynman\-\-Kac recursion\. Empirically, FluxLite improves over standard Feynman\-\-Kac SMC baselines by up to two orders of magnitude in terminal KL on an analytically tractable finite\-state CTMC benchmark, and reduces connected\-correlation MSE on 2D Ising sampling by $5$\-\-$7\\times$ in geometric mean and up to $55\\times$ at peak\.

## Inference\-Time Search Using Side Information for Diffusion\-Based Image Reconstruction

**Authors:** Mahdi Farahbakhsh; Vishnu Teja Kunde; Dileep Kalathil; Krishna Narayanan; JF Chamberland

**ID:** 148360 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ySeae740Om>) | [PDF](<https://openreview.net/pdf?id=ySeae740Om>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148360>)

Diffusion models have been used as priors for solving inverse problems\. However, existing approaches typically overlook side information that could significantly improve reconstruction quality, especially in severely ill\-posed settings\. In this work, we propose a novel framework that incorporates side information into existing diffusion\-based inverse problem solvers via inference\-time search, in a plug\-and\-play, training\-free manner\. Through extensive experiments across a range of inverse problems, including inpainting, super\-resolution, and several deblurring tasks, and across multiple diffusion\-based inverse problem solvers \(DPS, DAPS, and MPGD\), we show that augmenting each solver with our framework consistently improves the  quality of the reconstructions over the corresponding original method\. To demonstrate the generality of our approach, we consider diverse forms of side information, including reference images, textual descriptions, and anatomical MRI scans\. \{Code is available \\href\{https://anonymous\.4open\.science/r/sideinfo\-search\-reconstruction\-4A32/README\.md\}\{here\}\.\}

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

## How well behaved is finite dimensional Diffusion Maps embedding?

**Authors:** Wenyu Bo; Marina Meila

**ID:** 151178 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cQI5rogy6E>) | [PDF](<https://openreview.net/pdf?id=cQI5rogy6E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151178>)

Diffusion Maps \(DM\) is a well studied and popular non\-linear dimension reduction algorithm\. Surprisingly, while the convergence properties of DM are well understood, the \{\\em geometric\} properties of the embedding, such as reach and smoothness have not yet been studied\. Under a set of standard assumptions on a family of submanifolds $\\subset \\mathbb\{R\}^D$, we derive a series of geometric properties that are preserved by DM, including almost uniform density, finite polynomial approximation and reach\. Leveraging these properties, we establish rigorous bounds on the embedding errors introduced by the DM algorithm, of the order $\(\\frac\{\\log n\}\{n\}\)^\{\\frac\{1\}\{8d\+16\}\}$\. These results offer a solid theoretical foundation for understanding the performance and reliability of DM in practical applications\.

## Diffusion Model's Generalization Can Be Characterized by Inductive Biases toward a Data\-Dependent Ridge Manifold

**Authors:** Ye He; Yitong Qiu; Molei Tao

**ID:** 150031 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lIze4Hj7sl>) | [PDF](<https://openreview.net/pdf?id=lIze4Hj7sl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150031>)

We study a data\-dependent notion of diffusion\-model generalization: when a model does not memorize the training set, where do its generated samples go relative to the geometry induced by the data? To answer this, we introduce a time\-dependent family of log\-density ridge manifolds constructed from the smoothed empirical distribution, and use it to characterize reverse\-time inference\. Our main result shows that generated samples evolve by a reach\-align\-slide mechanism: they first enter a neighborhood of the ridge, then their distance to the ridge is controlled by the normal component of training error, and finally their motion along the ridge is controlled by the tangential component\. We further connect this geometric picture to training dynamics through directional decompositions of the learned error, and make this link explicit for random feature models, where architectural bias and optimization error can be separated quantitatively\. Experiments on synthetic multimodal data and MNIST latent diffusion support the predicted geometric behavior in both low and high dimensions\.

## Factored Generative Models through Mechanism Diversity

**Authors:** Minghao Fu; Selena Ge; Hongjia Liu; Zijian Li; Fan Feng; Kun Zhang; Biwei Huang

**ID:** 156135 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=09pkPpF5MG>) | [PDF](<https://openreview.net/pdf?id=09pkPpF5MG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156135>)

A generative model is factored when each latent dimension independently controls one factor of variation: changing a single latent predictably changes one semantic attribute while leaving the rest unchanged, enabling controllable generation, compositional generalization, and reproducible representations\. Existing approaches either constrain the latent distribution, e\.g\., requiring it to shift with an auxiliary variable, or regularize the model, e\.g\., sparsity, quantization, or Hessian penalties, neither of which matches how modern conditional generative models actually work: a conditioning signal u reshapes the generator g\(·, u\) while the latent prior stays fixed\. We prove an identifiability theorem showing that generating mechanism diversity, the natural variation that arises when u sufficiently reshapes g, is sufficient for the model to be provably factored, with no parametric assumption on the latent distribution\. To actively enforce this condition, we propose Mechanistic Contrastive Learning \(MCL\), a model\-agnostic contrastive objective over generator Jacobians\. Empirically, MCL achieves state\-of\-the\-art latent concept disentanglement on three benchmarks equipped with a latent diffusion model, and improves prediction quality and zero\-shot cross\-task transfer in latent action world models with a 1\.4B video generative model as the backbone\.

## Query Lower Bounds for Diffusion Sampling

**Authors:** Zhiyang Xun; Eric Price

**ID:** 151581 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZXOqN26lhR>) | [PDF](<https://openreview.net/pdf?id=ZXOqN26lhR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151581>)

Diffusion models generate samples by iteratively querying learned score estimates\. A rapidly growing literature focuses on accelerating sampling by minimizing the number of score evaluations, yet the information\-theoretic limits of such acceleration remain unclear\. In this work, we establish the first score query lower bounds for diffusion sampling\. We prove that for $d$\-dimensional distributions, given access to score estimates with polynomial accuracy $\\varepsilon=d^\{\-O\(1\)\}$ \(in any $L^p$ sense\), any sampling algorithm requires $\\widetilde\{\\Omega\}\(\\sqrt\{d\}\)$ adaptive score queries\. In particular, our proof shows that any sampler must search over $\\widetilde\{\\Omega\}\(\\sqrt\{d\}\)$ distinct noise levels, providing a formal explanation for why multiscale noise schedules are necessary in practice\.

## ABC: Any\-Subset Autoregression via Non\-Markovian Diffusion Bridges in Continuous Time and Space

**Authors:** Gabe Guo; Thanawat Sornwanee; Lutong Hao; Elon Litman; Stefano Ermon; Jose Blanchet

**ID:** 150308 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j5oO6647Tp>) | [PDF](<https://openreview.net/pdf?id=j5oO6647Tp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150308>)

Generative modeling continuous\-time, continuous\-space stochastic processes \(e\.g\., videos, weather forecasts\) conditioned on partial observations \(e\.g\., first and last frames\) is a fundamental challenge\. Existing approaches, \(e\.g\., diffusion models\), suffer from key limitations: \(1\) noise\-to\-data evolution fails to capture structural similarity between states close in physical time and has unstable integration in low\-step regimes; \(2\) random noise injected is insensitive to the physical process's time elapsed, resulting in incorrect dynamics; \(3\) they overlook conditioning on arbitrary subsets of states \(e\.g\., irregularly sampled timesteps, future observations\)\. We propose ABC: Any\-Subset Autoregressive Models via Non\-Markovian Diffusion Bridges in Continuous Time and Space\. Crucially, we model the process with one continual SDE whose time variable and intermediate states track the real time and process states\. This has provable advantages: \(1\) the starting point for generating future states is the already\-close previous state, rather than uninformative noise; \(2\) random noise injection scales with physical time elapsed, encouraging physically plausible dynamics with similar time\-adjacent states\. We derive SDE dynamics via changes\-of\-measure on path space, yielding another advantage: \(3\) path\-dependent conditioning on arbitrary subsets of the state history and/or future\. To learn these dynamics, we derive a path\- and time\-dependent extension of denoising score matching\. Our experiments show ABC's superiority to competing methods on multiple domains, including video generation and weather forecasting\.

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

## Compositional Reasoning in Language Models under Reinforcement Learning Post\-Training

**Authors:** Yu He; Yingxi Li; Yifei Wang; Ellen Vitercik

**ID:** 155613 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ElMzrtekX>) | [PDF](<https://openreview.net/pdf?id=4ElMzrtekX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155613>)

Compositional reasoning is critical for real\-world problem solving: since training data is necessarily limited, models must generalize by composing learned skills in new ways\. While post\-training methods such as reinforcement learning \(RL\) have substantially improved the reasoning abilities of language models \(LMs\), their effects on compositional reasoning remain less well understood\. We propose a dependency\-graph framework to formalize compositional reasoning, yielding three levels of compositionality with increasing complexity\. Empirically, we instantiate this framework with data\-structure tasks, which provide deterministic reward computation and clear compositional structure\. We find a consistent decomposed\-to\-composed asymmetry: decomposed\-skill training does not reliably transfer to composed tasks, whereas composed\-task training transfers more readily back to decomposed tasks\. We provide theoretical explanation for this asymmetry, and further evaluate compositional generalization under length extrapolation, structural distribution shift, and transfer to tasks requiring unseen skills\. Finally, we present a pilot study on real\-world tool\-calling benchmarks, showing preliminary evidence that the decomposed\-to\-composed asymmetry can extend to practical settings\.

## GazeFlow: From Human Gaze Behavior to Generative Egocentric Gaze Prediction

**Authors:** Sheng Zhao; Weikai Lin; Yuhao Zhu

**ID:** 151440 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=agLR3seGuO>) | [PDF](<https://openreview.net/pdf?id=agLR3seGuO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151440>)

Egocentric gaze prediction enables many downstream applications but remains challenging, as human gaze is inherently stochastic\. This stochasticity is constrained by structured temporal dynamics alternating between fixations and saccades, top\-down influences from tasks, and bottom\-up visual saliency\. Based on this observation, we introduce GazeFlow, a framework that directly models gaze as a joint distribution of temporal gaze positions conditioned upon both top\-down and bottom\-up information\. In particular, GazeFlow uses conditional flow matching \(CFM\): a learned velocity field iteratively transports a Gaussian noise sample into a plausible gaze trajectory drawn from this joint distribution\. The velocity field is conditioned on bottom\-up visual features extracted by a video encoder and on top\-down task information obtained by globally querying these features\. On standard datasets, GazeFlow achieves state\-of\-the\-art performance on per\-frame metrics, and the generated trajectories align better with human gaze temporal dynamics\.

## LoRASpace: A Pool\-Wide Shared Substrate for Static and Dynamic Multi\-LoRA Composition

**Authors:** Thamirawaran Sathiyalogeswaran; Navindu De Silva; Chamikara Siriwardane; W K Alwis; Jason Mars; Udaya S Thanthrige; Ranga Rodrigo

**ID:** 150890 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=edpJ8ipgAp>) | [PDF](<https://openreview.net/pdf?id=edpJ8ipgAp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150890>)

Low\-rank adaptation \(LoRA\) attaches small low\-rank matrices to a frozen backbone, and public repositories like Hugging Face host many such LoRAs per backbone, each for a different concept, character, style, or task\. Users routinely want to combine several LoRAs in a single generation, but two existing strategies involve a trade\-off with each other\. First, combining the LoRA weights into a single update before inference \(e\.g\., static merge\) needs only one forward pass, but quality drops, because LoRAs trained for different concepts interfere when their weights are summed into a single update, distorting each LoRA's contribution\. Second, running each LoRA in a separate forward pass and summing the outputs \(e\.g\., composite\) preserves output quality, but each LoRA adds a full backbone pass, so inference time scales linearly with the active LoRA count\. To recover composite\-level quality at merge cost, we study a property of LoRA pools overlooked by prior multi\-LoRA work\. When LoRAs in a pool are trained on related concepts, their low\-rank factors overlap substantially\. Using singular value decomposition, we find the minimal subspace that preserves 99% of the factor energy\. On three diffusion pools, only 46% to 57% of the sum of individual LoRA ranks is enough to represent the pool, and the subspace grows sub\-linearly with pool size\. A 48\-LoRA sub\-pool of LoRA\-Hub on FLAN\-T5 NLP tasks shows comparable overlap \(about 62%\), while the diversity\-curated LoRA\-Retriever benchmark sits near the no\-overlap baseline at 96%, indicating that across these five pools pool composition rather than modality predicts where overlap is large\. We use this overlap to construct LoRASpace, a training\-free pool\-wide method where the subspace matrices are computed once per pool and reused across two inference modes: a static mode at merge inference cost, and a dynamic mode for input\-dependent routing at substantially lower cost than composite\. On the diffusion pools, static LoRASpace matches composite quality at merge cost, and dynamic LoRASpace achieves more than 6× speedup over composite at six active LoRAs on a 17\-LoRA pool\. In our ablation, we show that the quality gain comes from truncating to this low\-rank shared subspace, which acts as a form of regularisation\. On the near\-orthogonal LoRA\-Retriever benchmark, the framework predicts limited compression benefit, with gains coming from external retrieval coupling\.

## The Score Kalman Filter

**Authors:** Kaito Iwasaki; Anthony Bloch; Taeyoung Lee; Maani Ghaffari

**ID:** 149695 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o7YK39RTTY>) | [PDF](<https://openreview.net/pdf?id=o7YK39RTTY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149695>)

A central obstacle in nonlinear Bayesian filtering is representing the belief distribution\. Moment\-based filters address this by propagating polynomial moments and reconstructing a density from them\. Recent work completes the predict\-update loop via the maximum\-entropy \(MaxEnt\) principle, but each step requires the partition function and its gradient, both $n$\-dimensional integrals whose cost scales exponentially, restricting the demonstrated MaxEnt moment filtering to $n \\le 4$\. We avoid the partition function entirely by combining score matching with Stein's identity\. In our setting, score matching reduces the density fit to a single linear solve whose coefficients are assembled directly from the propagated moments\. The same parameters then drive Stein's identity to close the moment hierarchy during prediction and to recover posterior moments after each Bayesian update, keeping the full predict\-update loop free of partition function evaluation\. The resulting $\\textbf\{Score Kalman Filter\}$ \(SKF\) reduces to the classical information\-form Kalman filter as a special case and performs every step through linear algebra\. On nonlinear coupled\-oscillator networks, the SKF runs through $n=20$ and reports lower RMSE than the EKF, UKF, EnKF, and particle\-filter baselines on the tested synthetic benchmarks\.

## Robust Graph Diffusion Model

**Authors:** Yancheng Wang; Ping Li; Dongfang Sun; Yingzhen Yang

**ID:** 148741 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vOiJjNCLXY>) | [PDF](<https://openreview.net/pdf?id=vOiJjNCLXY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148741>)

Diffusion models represent a powerful class of generative models known for their solid theoretical foundations and remarkable performance across diverse tasks and domains\. While diffusion models have been extensively utilized for generating entire graphs or small\-scale graphs, no diffusion\-based approaches have been developed to synthesize graph structures within an existing graph, including synthetic nodes and their associated edges\. In this study, we introduce the Robust Graph Diffusion Model \(RGDM\), designed to generate labeled synthetic graph structures consisting of nodes and edges that integrate seamlessly into a given graph\. The RGDM consists of a Robust Graph Autoencoder \(RGAE\) and a Latent Diffusion Model \(LDM\)\. Leveraging an edge selection mechanism and an innovative low\-rank regularization on the latent feature, the RGDM produces clean and high\-quality synthetic graph structures, even when trained on graphs subject to adversarial attacks\. Comprehensive experimental evaluations reveal that Graph Neural Networks \(GNNs\) trained on the augmented graph, which is formed by merging the original attacked graph with the synthetic graph structures, exhibit significantly improved robustness against various graph adversarial attacks in the context of semi\-supervised node classification\. The code of the RGDM is available at \\url\{https://anonymous\.4open\.science/r/RGDM\}\.

## Variational Trajectory Optimization of Anisotropic Diffusion Schedules

**Authors:** Pengxi Liu; Zeyu Michael Li; Xiang Cheng

**ID:** 153361 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LwTBXZvDas>) | [PDF](<https://openreview.net/pdf?id=LwTBXZvDas>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153361>)

We introduce a variational framework for diffusion models with anisotropic noise schedules with a matrix\-valued path $M\_t\(\\theta\)$ that allocates noise across subspaces\. Central to our framework is a trajectory\-level objective that jointly trains the score network and learns $M\_t\(\\theta\)$, which encompasses general parameterization classes of matrix\-valued noise schedules\. We further derive an estimator for $\\partial\_\\theta \\nabla \\log p\_t$ that enables efficient optimization of the $M\_t\(\\theta\)$ schedule\. For inference, we develop an efficiently\-implementable reverse\-ODE solver that is an anisotropic generalization of the second\-order Heun discretization algorithm\. Across CIFAR\-10, AFHQv2, FFHQ, and ImageNet\-64, our method consistently improves upon the baseline EDM model in all NFE regimes\.

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

## PocketVE: Stable and Controllable Structure\-Based Drug Design with Variance\-Exploding Diffusion

**Authors:** Peining Zhang; Jinbo Bi

**ID:** 152451 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=T2NCIrow1b>) | [PDF](<https://openreview.net/pdf?id=T2NCIrow1b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152451>)

Protein\-conditioned 3D molecule generation is a central challenge in structure\-based drug design, requiring a delicate balance between target compatibility, molecular properties, and physical geometry\.   While diffusion\-based approaches have shown promise, strengthening the conditioning signal can still reduce physical plausibility, and existing models remain sensitive to how pocket information is presented during training and sampling\.   We propose \*\*PocketVE\*\*, a protein\-pocket\-conditioned variance\-exploding \(VE\) diffusion framework that couples stable coordinate denoising with inference\-time conditional control\.   Specifically, PocketVE combines an EDM\-style training and sampling setup for stable 3D denoising, classifier\-free guidance for multi\-property steering without external property classifiers, and adaptive protein perturbation as a training\-time pocket regularizer\.   Evaluated on CrossDocked2020 under the GenBench3D protocol, PocketVE improves 3D\-Validity from 58\.6 to 80\.6 and reduces strain energy from 457\.4 to 127\.9 relative to the TAGMol baseline, while improving median Vina Score, QED, and SA under moderate guidance\.   A guidance\-scale study further shows that moderate guidance gives the best balance between target\-related objectives and geometric quality, whereas overly strong guidance pushes the sampler toward geometric degradation\.   Overall, the results show that target\-aware molecular generation benefits from treating geometric stability and conditional steerability as coupled design goals\.

## Coreset\-Induced Conditional Velocity Flow Matching

**Authors:** Xiao Wang; Zihua She; Jianxi Su

**ID:** 154272 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F3OUp4tpG4>) | [PDF](<https://openreview.net/pdf?id=F3OUp4tpG4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154272>)

We propose Coreset\-Induced Conditional Velocity Flow Matching \(CCVFM\), a generative model that augments hierarchical rectified flow with a data\-informed source distribution\. Hierarchical flow matching models the full conditional velocity law in velocity space, but its inner flow is asked to transport isotropic Gaussian noise to a multimodal target velocity distribution from scratch\. Our key observation is that this inner source can be replaced by a closed\-form surrogate built from a coreset of the target\. CCVFM first compresses the target into weighted atoms using an entropic Sinkhorn coreset and lifts them to a Gaussian mixture\. The induced conditional velocity law is then a closed\-form Gaussian mixture that can be sampled without a learned neural sampler\.  A lightweight correction flow, trained from this exact surrogate source, then refines the remaining surrogate\-to\-target residual rather than learning an entire noise\-to\-data map\. We prove that the surrogate transport cost equals the target\-\-surrogate Wasserstein gap under an explicit compression assumption, whereas the noise\-source analogue has a dimension\-scale lower bound\. We further characterize the conditional second moment of the direct surrogate\-source training target and show that its source\-dependent excess is small when the surrogate conditional law is close to the true conditional velocity law in mean and covariance\.  Empirically, on MNIST, CIFAR\-10, ImageNet\-32, and CelebA\-HQ, the proposed method reaches competitive few\-step generation under matched architectures\. Codes are available at \\url\{https://anonymous\.4open\.science/r/ccvfm\-code\-11D3/\}\.

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

## Enabling Denoising Score Matching Type Training for Manifold Diffusion Model via Momentum and Splitting

**Authors:** Lingkai Kong; Yuchen Zhu; Molei Tao

**ID:** 152504 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SebY0YimhJ>) | [PDF](<https://openreview.net/pdf?id=SebY0YimhJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152504>)

Denoising score matching \(DSM\) is the cornerstone of scalable diffusion model training\. However, DSM becomes inapplicable on curved manifolds: the curved geometry makes the forward diffusion process nonlinear and the transition kernel is no longer tractable\. Existing approaches therefore revert to implicit score matching \(ISM\) with expensive Brownian simulation, approximate the intractable heat kernel, or bypass the transition kernel altogether via flow matching with the logarithm map, each incurring significant computational cost or approximation error on general manifolds\. We propose \\emph\{splitting diffusion\}, a new framework that restores DSM\-like training on general Riemannian manifolds by replacing the intractable Brownian forward process with a splitting scheme that alternates two steps: \(1\) an Ornstein\-Uhlenbeck velocity update in the tangent space, whose transition kernel has a closed\-form solution; \(2\) a deterministic geodesic transport step\. This splitting yields a fully tractable transition kernel locally, enabling DSM\-style training while requiring only the exponential map as a geometric oracle\. The effectiveness of splitting diffusion is demonstrated on complicated manifolds and high\-dimensional data\.

## Robust Inference\-Time Steering of Protein Diffusion Models via Embedding Optimization

**Authors:** Minhuan Li; Jiequn Han; Pilar Cossio; Luhuan Wu

**ID:** 154445 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DUpxIDDWMK>) | [PDF](<https://openreview.net/pdf?id=DUpxIDDWMK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154445>)

A core challenge in structural biophysics is generating biomolecular conformations that are both physically plausible and consistent with experimental measurements\. While sequence\-to\-structure diffusion models provide powerful priors, posterior sampling methods steer generation by perturbing atomic coordinates with gradients from experimental likelihoods\. However, when the target lies in a low\-density region of the prior, these methods require aggressive upweighting of the likelihood that can destabilize sampling and be sensitive to hyperparameters\. We propose EmbedOpt, an inference\-time steering framework that introduces an orthogonal optimization axis: rather than performing posterior sampling under a fixed prior, EmbedOpt directly optimizes the prior by updating the model's conditional embedding\. This embedding space encodes rich coevolutionary signals, so optimizing it shifts the structural prior to align with experimental constraints\. Empirically, EmbedOpt matches coordinate\-based posterior sampling baselines on sparse distance constraints and outperforms them on cryo\-electron microscopy map fitting, including real, noisy experimental ones\. Furthermore, EmbedOpt's smooth optimization behavior yields robustness to hyperparameters spanning two orders of magnitude and enables comparable performance with fewer diffusion steps\.

## Order\-Optimal Sample Complexity for Distribution Learning via Flow Matching

**Authors:** Hari K Sahoo; Mudit G Gaur; Vaneet Aggarwal

**ID:** 153506 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KpJ4AAWMxN>) | [PDF](<https://openreview.net/pdf?id=KpJ4AAWMxN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153506>)

Flow\-based generative models have emerged as an efficient alternative to diffusion models\. We study the sample complexity of learning a target distribution in Wasserstein distance via flow matching, which learns a velocity field transporting a base distribution to the target\. Under standard assumptions on the network architecture and data distribution, we show that any squared\-loss flow\-matching variant including rectified flow with bounded derivatives achieves $\\widetilde\{O\}\(\\varepsilon^\{\-2\}\)$ sample complexity with the Wasserstein guarantee taking the form $W\_2 \\le K\(\\varepsilon \+ C\\sqrt\{\\varepsilon\_\{app\}\}\)$, where $\\varepsilon\_\{app\}$ is the approximation error of the network class\. This improves upon existing $\\widetilde\{O\}\(\\varepsilon^\{\-4\}\)$ guarantees and does not require the Polyak \\L\{\}ojasiewicz condition assumed in prior work\. Instead, we exploit a structural property of the squared\-loss objective \- it induces an approximate Bernstein condition that directly ties the variance of the excess loss to the excess risk up to additive approximation\-error\. This condition enables a localized Rademacher complexity analysis yielding fast $O\(1/n\)$ rates\. The flow\-matching schedule enters only through the Lipschitz constant of the pointwise loss, which we characterize explicitly for standard schedules\.

## HERO: Improving the Reliability and Sensitivity of Generative Model Evaluation Using Historical Data

**Authors:** Zhenyu Zhao; Xinrui Ruan; Waverly Wei; Yueshan Zhang; Zeyu Zheng; Sui Huang; Jingshen Wang

**ID:** 139720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8YiaoJ83Yi>) | [PDF](<https://openreview.net/pdf?id=8YiaoJ83Yi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139720>)

Reliable generative AI models critically rely on expert human annotations to evaluate output quality, yet these "gold'' labels are expensive to collect and limited in quantity\. Organizations thus often turn to collecting vast but noisy "silver'' labels from crowdsourced workers or vendor annotators as proxies for gold labels\. Because gold remains the evaluation target, naively aggregating noisy silver labels may introduce bias, and estimators built on sparsely observed gold labels may have high variance to resolve the model performance gaps that guide practical decisions\. Model evaluation has become an ongoing operational practice rather than a one\-time exercise, with evaluation rounds repeating across model versions, releases, and content domains\. A natural question is whether the previous historical evaluation data can be used to improve each new round of evaluation\.  We introduce HERO \(History Enhanced RObust model evaluation\), a novel framework that uses historical data to reduce both bias and variance in model performance evaluation\. HERO calibrates silver labelers' performance learned from historical gold annotations, and stabilizes the resulting estimator by anchoring it to covariate information measured with high precision in the historical data\.  HERO can be broadly applied across multiple common evaluation tasks, and remains valid when only a subset of historical labelers appears in the current round\. We establish conditions under which the bias and variance reductions hold, showcase HERO's performance in simulation studies, and demonstrate its effectiveness on real\-world model evaluation benchmarking datasets\.

## Bottleneck Benchmark: Sequence Compression Under Controlled Difficulty and Fixed Latent Size

**Authors:** Emilio Munoz; Felix Mohr

**ID:** 139737 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7MkLtoyPdq>) | [PDF](<https://openreview.net/pdf?id=7MkLtoyPdq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139737>)

One key application of autoencoders is to learn how to compress token sequences\. Since the difficulty of compression depends on factors such as sequence length, vocabulary size, structural regularity, and input noise, it would be valuable to understand how these factors affect the performance of different architectures\. Surprisingly, however, there is no benchmark for comparing autoencoder architectures that allows control over these aspects of difficulty\. We introduce the Bottleneck Benchmark \(BB\), an open experiment framework in which encoder and decoder communicate only through a fixed\-size latent and that allows to configure the previously mentioned difficulty aspects for any customizable data generator\. As a case study, we evaluate BiLSTM, Transformer, and Bidirectional SSM encoders on copy, sort, and set tasks, finding that performance differences arise from inductive biases under noise and length rather than raw capacity\.

## StyleStream 2\.0: Fast and Controllable Streaming Voice Style Conversion

**Authors:** Louis Liu; Nicholas Lee; Gopala Anumanchipalli

**ID:** 153833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=INH2UOxLz1>) | [PDF](<https://openreview.net/pdf?id=INH2UOxLz1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153833>)

Voice style conversion \(VSC\) aims to transform a source utterance to match the timbre, accent, and emotion of a target voice while preserving linguistic content\.   StyleStream 1\.0 introduced the first streamable zero\-shot VSC system with state\-of\-the\-art conversion quality, but remained limited in two ways: approximately 1s end\-to\-end latency on consumer hardware, and the lack of a text\-based interface for designing or editing target voices\.   We present StyleStream 2\.0, a fast and controllable streaming VSC framework that addresses these limitations\.   To reduce latency, we train a few\-step pixel MeanFlow model and further fine\-tune it with autoregressive feedback inspired by Self Forcing, improving robustness under streaming inference\.   This reduces end\-to\-end latency to 520\~ms on a consumer GPU, a 2x speedup over StyleStream 1\.0, while maintaining conversion quality\.   To enable controllable style manipulation, we remove the mel\-spectrogram context and instead route target style information through a compact style embedding\.   In this embedding space, we train a unified text\-conditioned flow matching model that supports both text\-based voice design, which maps natural language prompts to voice styles, and instruction\-based voice editing, which modifies a specific attribute of a source utterance while preserving the rest\.   Experiments show that StyleStream 2\.0 achieves the strongest target style fidelity on VSC, voice design, and voice editing, while remaining competitive on intelligibility and non\-edited attribute preservation\.

## Decompose the Distillation: Interpretable Single\-Pass Guidance for Diffusion Models

**Authors:** Wuyang Zhang; Xiaolin Xu

**ID:** 152875 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PiKPINkvGh>) | [PDF](<https://openreview.net/pdf?id=PiKPINkvGh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152875>)

Classifier\-Free Guidance \(CFG\) is a widely used inference\-time guidance rule for conditional image generation with diffusion models, which exposes a guidance scale that adjusts conditioning strength after training\. This flexibility requires conditional and unconditional model evaluations at every sampling step, so an $N$\-step trajectory takes $2N$ forward passes\. Single\-pass alternatives reduce such cost, yet most collapse CFG's two\-component structure, forfeiting the separable base flow and guidance direction that support post\-hoc scale control and per\-step diagnostics\. This work introduces CtrlFlow, a single\-pass guidance method that preserves CFG's separable base\-flow and guidance\-direction interface\. To preserve both components at one\-pass cost, CtrlFlow attaches two lightweight LoRA adapters to a frozen backbone, each adding $2\.5\\%$ parameters, and predicts the base flow and guidance direction from shared features\. Because the guidance scale multiplies the guidance direction only after the forward pass, a single trained checkpoint remains adjustable at inference without retraining\. Preserving two outputs introduces a training mismatch: inference amplifies guidance\-direction errors by the chosen scale, while naive component\-wise losses weight both outputs equally\. To align training with this composed inference\-time error, CtrlFlow uses a unified multi\-scale distillation loss\. Residual guidance errors can still persist at extreme scales, where even small guidance\-direction errors are amplified by the guidance scale\. To reduce this inference\-time error, CtrlFlow applies scale\-adaptive modulation to damp velocity\-field errors and time\-grid warping to concentrate solver evaluations where the trajectory changes most rapidly\. On ImageNet $256\\times256$ with the DiT\-XL/2 backbone, CtrlFlow matches CFG within a pre\-specified tolerance in 24 of 25 $\(N, s\)$ configurations and achieves a measured $1\.93\\times$ wall\-clock speedup at $N\{=\}25$\.

## Concept\-Localized Generative Representations

**Authors:** Amanda Merkley

**ID:** 150809 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fDLPVya86p>) | [PDF](<https://openreview.net/pdf?id=fDLPVya86p>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150809>)

Motivated by interpretable generative models for applications such as scientific inquiry, we aim to learn representations that localize human\-interpretable concepts and separate them from residual variation in the data\. Reconstruction and prediction objectives alone are insufficient for this purpose, as concept\-relevant variation can be distributed across multiple latent factors while still achieving high performance\. We address this limitation with a generative model that learns a balanced decomposition of data into concept\-aligned and residual latent representations inferred purely from observations\. The objective encourages localization through an upper bound on the concept information bottleneck while reducing dependence between the concept and residual latent\. Across synthetic and real datasets, the learned representations localize concepts while preserving generative fidelity\. A neural\-data case study shows that localized representations align more strongly with structured variation in observed neural responses\. This supports localization, rather than prediction accuracy alone, as a more faithful criterion for interpreting concept\-relevant structure in generative models\.

## Stochastic Interpolants via Conditional Dependent Coupling

**Authors:** Chenrui Ma; Xi Xiao; Tianyang Wang; Xiao Wang; Yanning Shen

**ID:** 149946 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m0BAYdzjal>) | [PDF](<https://openreview.net/pdf?id=m0BAYdzjal>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149946>)

Existing image generation models face critical challenges regarding the trade\-off between computation and fidelity\. Specifically, models relying on a pretrained Variational Autoencoder \(VAE\) suffer from information loss, limited detail, and the inability to support end\-to\-end training\. In contrast, models operating directly in the pixel space incur prohibitive computational cost\. Although cascade models can mitigate computational cost, stage\-wise separation prevents effective end\-to\-end optimization, hampers knowledge sharing, and often results in inaccurate distribution learning within each stage\. To address these challenges, we introduce a unified multi\-stage generative framework formulated under the \\emph\{stochastic interpolant\} formalism with our \\textbf\{Conditional Dependent Coupling\} strategy as a Flow\-Matching variant\. It decomposes the generative process into interpolant trajectories at multiple stages, ensuring accurate distribution learning while enabling end\-to\-end optimization\. Importantly, the entire process is modeled as a single unified Diffusion Transformer, eliminating the need for disjoint modules and also enabling knowledge sharing\. Under explicitly stated assumptions, we provably reduce both transport cost and asymptotic inference time, we empirically validate the underlying NFE\-\-transport\-cost and per\-evaluation\-cost relations\. Extensive experiments demonstrate that our method achieves competitive fidelity and substantially lower wall\-clock cost in the low\-NFE regime across multiple resolutions\.

## \\texttt\{FEROM\}: Frontier Endogenous Reveal\-Order Marginal Policy Optimization for Masked Diffusion LMs

**Authors:** Zian Su; Ziyang Huang; Kaiyuan Zhang; Xiangyu Zhang

**ID:** 155453 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Tnt9zpIFJ>) | [PDF](<https://openreview.net/pdf?id=5Tnt9zpIFJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155453>)

Masked diffusion language models generate text by iteratively unmasking positions, with practical samplers often selecting reveal positions from the model's own logits\. The reveal order is therefore an endogenous latent variable of the rollout process with an enormous discrete latent space\. Policy optimization objectives relying on pre\-defined schedules or sampled trajectories introduce either bias or high variance\. In this paper, we propose \\texttt\{FEROM\}, \\emph\{Frontier Endogenous Reveal\-Order Marginal Policy Optimization\}, which targets the rollout\-induced marginal response policy of masked diffusion LMs\. \\texttt\{FEROM\} derives a Rao\-\-Blackwellized policy\-gradient identity over latent reveal orders and expresses the resulting estimator as posterior edge occupancy on a reveal\-state DAG\. To make marginalization practical, we introduce Frontier Reveal Marginalization, a budgeted estimator that combines scorelaw local reveal estimation with frontier expansion of high\-mass partial states\. Integrated into a GRPO\-style objective, \\texttt\{FEROM\} replaces single\-path log\-scores with a locally marginalized edge\-based surrogate\. Experiments on math and coding tasks show comparable or improved results over existing methods under matched compute budgets\. Offline proxy study further shows potential in gains with increased budgets\.

## Debiased DPO for Diffusion Models

**Authors:** Duc Khiem Pham; Quang Nguyen; Tung D Nguyen; Jingsen Zhu; Michele Santacatterina; Dimitris Metaxas; Ramin Zabih

**ID:** 149883 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVm3paaO7B>) | [PDF](<https://openreview.net/pdf?id=mVm3paaO7B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149883>)

Direct Preference Optimization \(DPO\) enables offline alignment of diffusion models from preference pairs without explicit reward modeling, but scaling DPO requires large amounts of expensive human preference data\. In this paper, we consider a semi\-supervised approach where only a small subset of preference pairs is annotated by humans, while the remaining \(much larger\) pool is unlabeled and annotated by inexpensive synthetic feedback e\.g\., vision\-language models scoring image pairs or self\-training from the current model\. However, such synthetic supervision is not a replacement for human judgments: it can be systematically misaligned, so naively mixing human and synthetic preferences will yield misaligned inference\. We introduce DeDPO, a debiased objective that integrates a doubly robust estimator from causal inference into DPO to correct synthetic\-label misalignment while preserving the simplicity of DPO\. Experiments show improved label efficiency and robustness to synthetic labeler quality, allowing DeDPO to outperform standard DPO under the same human\-label budget and to approach fully human\-supervised performance, despite using four times fewer human\-labeled data\.

## You Can’t Have It Both Ways: Concept Entanglement Limits Diffusion Model Unlearning

**Authors:** Yian Wang; Ali Ebrahimpour\-Boroojeny; Hari Sundaram; Varun Chandrasekaran

**ID:** 155144 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=81WMbko8Qr>) | [PDF](<https://openreview.net/pdf?id=81WMbko8Qr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155144>)

Concept unlearning in text\-to\-image diffusion models aims to suppress a target concept, e\.g\., \\texttt\{horse\}, while preserving the model's ability to generate semantically related but distinct content, like \\texttt\{donkey\}\. Yet existing methods either leak under indirect prompts or visibly degrade remaining concepts\.  \{\\em We show that these failure modes arise naturally from overlapping concept representations\.\} Our main contribution is demonstrating that the observed trade\-offs stem from the geometry of concept representations, rather than from weaknesses in any particular algorithm\. We support this claim through both theoretical analysis and empirical observations\. By formalizing concepts as activation\-space regions, we show that overlap between a target and other concepts lower\-bounds the unavoidable degradation on those other concepts when the target is erased\.  Our analysis suggests that strong erasure and preservation become fundamentally coupled when concepts occupy overlapping activation regions, with the trade\-off scaling linearly in the degree of overlap\. We verify this trade\-off on seven unlearning methods spanning fine\-tuning, adversarially\-robust fine\-tuning, and inference\-time interventions\. Averaged across target concepts, STEREO almost completely suppresses the target concept under indirect prompts but cuts the model's ability to generate semantically related concepts by more than 75\\%\. On the other hand, sparse inference\-time methods \(SAeUron, SEOT\) better preserve utility but leave substantial target leakage\. The trade\-off is steep for concepts whose internal representations heavily overlap with their evaluated semantic neighborhoods, \(e\.g\., \\texttt\{horse\} with \\texttt\{cat\}, \\texttt\{dog\}, and \\texttt\{bear\}\) and milder for \\texttt\{castle\}, which is comparatively less entangled within our concept pool and probe layer in activation space\. Across targets, damage to related concepts scales monotonically with our activation\-overlap measure\. These results suggest that perfect unlearning is the wrong target for entangled concepts\. The field should evaluate on the Pareto frontier our theorem establishes; current benchmarks, which decouple unlearning accuracy from utility preservation, hide this trade\-off and need to be revised\.

## Primal\-Dual Flow Matching for Sample\-Wise Constrained Generation

**Authors:** Zhengyan Huan; Peter Y\. Lu; Shuchin Aeron

**ID:** 155433 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5hNRSOnqjv>) | [PDF](<https://openreview.net/pdf?id=5hNRSOnqjv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155433>)

We consider the problem of learning to generate data while satisfying a prescribed sample\-wise constraint with a user\-specified probability of constraint satisfaction\. Starting with a population\-level constrained negative log\-likelihood minimization and using a flow\-matching \(FM\) parameterization, under regularity assumptions and sufficient expressivity of the velocity field family, we derive guarantees on the probability of constraint satisfaction for the corresponding primal\-dual optimization algorithm\. We provide a practical implementation of this approach, called Primal\-Dual Flow Matching \(PDFM\), which has direct control over constraint satisfaction rate and requires only binary membership\-oracle feedback for constraint satisfaction, avoiding the need for differentiable distances, projections, or special structure of the constraint set, such as convexity\. We show that compared to existing methods, PDFM achieves higher constraint satisfaction rates while maintaining competitive distribution fidelity\.

## UDT: Reconciling U\-Nets and Diffusion Transformers with Data\-Adaptive Token Reduction

**Authors:** Junno Yun; Yasar Utku Alcalar; Mehmet Akcakaya

**ID:** 155440 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5aiycPi3Qu>) | [PDF](<https://openreview.net/pdf?id=5aiycPi3Qu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155440>)

Diffusion Transformers \(DiTs\) have emerged as a core architecture in generative modeling due to their scalability and adaptability to multimodal tasks\. DiTs comprise isotropic transformer blocks, and learn representations progressively across depth, where the denoising objective drives later layers to focus on fine\-detail reconstruction\. This results in degraded representation quality and an imbalanced encoder\-\-decoder behavior\. Prior approaches such as representation alignment \(REPA\) mitigate this by encouraging stronger early representations via training regularization\. Alternatively, U\-Net\-style DiT architectures introduce explicit multi\-scale encoder–decoder structures for improved convergence\. But they build on standard U\-Net wisdom via learnable operators for spatial downsampling, which are not well\-suited to transformer architectures, introducing inefficiencies and compatibility issues with components such as cross\-attention and representation regularization\. In this work, we propose \*\*UDT\*\*, a U\-Net diffusion transformer that combines the representation power of DiTs with the encoding–decoding benefits of U\-Nets, through data\-adaptive token merging for downsampling and upsampling, while preserving the DiT token dimension\. Our baseline UDT architecture outperforms existing U\-Net DiTs and achieves performance comparable to REPA across all model sizes\. Furthermore, using architectural optimization and REPA, UDT outperforms SiT's 7\.9 FID at 1400 epochs \(w/o CFG\) within 40 epochs \($\\approx 40\\times$ faster convergence\) for XL model size\.  Finally, it achieves strong image generation results on ImageNet with 1\.44 FID at $256 \\times 256$ \(with CFG\) after only 200 epochs, providing a new backbone for DiTs with strong empirical benefits\.

## MAGNET: Manifold\-Aware Graph Diffusion Network for Connectome Generation

**Authors:** Protyay Dey; Ayush Roy; Hyuna Cho; Won Hwa Kim; Vishnu Lokhande

**ID:** 152384 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TUugQGbOfW>) | [PDF](<https://openreview.net/pdf?id=TUugQGbOfW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152384>)

Functional brain connectome represents neural connectivity as a matrix of pairwise interactions between brain regions\. Generation of functional connectomes is not only a question of validity; rather, having satisfied the constraints on the correlation matrix, the next step is to recover the class\-conditional geometry buried under coarse labels\. We propose MAGNET, a Manifold\-Aware Graph Diffusion Network which uses a normalized\-Cholesky representation of the manifold of correlation matrices that guarantees validity\. MAGNET lifts noisy latent states into ROI\-level region tokens and performs denoising with a relational inductive bias over brain atlas regions\. To deal with structural problems induced by coarse labels, MAGNET employs class\-anchored conditioning, amortized structural bridge, and relevance\-preserving corruption\. Across ABIDE, ADNI, and OASIS\-3, MAGNET consistently achieves favorable results compared to previous manifold\-aware approaches, demonstrating improvements of $7\-21$\\% in class\-conditional fidelity \($\\alpha,\\beta$\-F1\) across three cohorts and better sampling efficiency\. Moreover, while training only with strict binary labels, MAGNET is capable of maintaining clinical heterogeneity through fine substructure of the connectomes in a zero\-shot setting, improving subclass covariance alignment \($\\lambda$\-MSE\) by over 30\\%\. These results suggest that geometric validity is a necessary but insufficient condition for clinical utility in connectome synthesis\. Moreover, efforts in making the diffusion denoising class\-conditional manifold aware finds utility beyond the highly curved brain connectome generation as this is a critical problem in various general settings\.

## Discrete Stochastic Localization for Non\-autoregressive Generation

**Authors:** Yunshu Wu; Jiayi Cheng; Longxuan YU; Partha Thakuria; Rob Brekelmans; Vagelis Papalexakis; Greg Ver Steeg

**ID:** 153666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jf5a5Sqnz8>) | [PDF](<https://openreview.net/pdf?id=Jf5a5Sqnz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153666>)

Continuous diffusion is a natural framework for non\-autoregressive generation but has consistently underperformed masked discrete diffusion \(MDM\) on discrete sequence generation\. We argue this is not a limitation of continuity itself, but of how previous models parameterize the denoiser as a family of timestep\-indexed regimes\. We introduce \\emph\{Discrete Stochastic Localization\} \(DSL\), a continuous\-state framework with unit\-sphere token embeddings whose Bayes\-optimal denoiser is invariant to the nominal signal\-to\-noise ratio \(SNR\)\. One trained network then supports an entire family of per\-token SNR paths, with masked diffusion as one special case\. Fine\-tuning a pretrained MDLM checkpoint with DSL substantially improves distributional faithfulness \(MAUVE\) on OpenWebText across all step budgets from $T\{=\}128$ to $T\{=\}1024$, and the same checkpoint supports random\-order autoregressive sampling and a hybrid continuous\-then\-discrete sampler at as few as $T\{=\}48$ total steps\-\-\-without distillation or retraining\. On Text8, DSL gives the first continuous\-state NLL estimate approaching the MDM range\.  Code is anonymously available at \\url\{https://anonymous\.4open\.science/r/DSL\_anonymous\-94B5/\}\.

## Ergodic Trajectory Design by Learned Pushforward Maps: Provable Coverage via Conditional Flow Matching

**Authors:** Ehsan Aghazadeh; Masoud Malekzadeh; Ahmad Ghasemi; Hossein Pishro\-Nik

**ID:** 148507 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xKCytZZNNd>) | [PDF](<https://openreview.net/pdf?id=xKCytZZNNd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148507>)

Designing continuous trajectories whose time\-averaged occupancy provably matches a prescribed spatial density \(the \*ergodic coverage\* problem\) is central to UAV\-assisted data collection and sensing, robotic exploration, and mobile monitoring\. For flying agents in particular, this challenge is acute: trajectories must balance coverage fidelity against tight energy budgets, no\-fly zones, and acceleration limits\. Existing methods either re\-optimize each trajectory online \(with cost growing in the horizon and re\-running for every target, agent, and realization\) or rely on bespoke analytical constructions that must be re\-derived for each new constraint\. We propose a \*pushforward\* framework that decouples ergodicity from density matching: an analytic latent trajectory provides exact uniform ergodicity on a simple annular domain, and a single map, learned offline by optimal\-transport conditional flow matching, transports this latent occupancy onto the prescribed target density\. The composed trajectory is then asymptotically ergodic with respect to the learned pushforward distribution, with deviation from the target controlled by the flow\-matching training loss\. Once trained for a given target density and constraint set, the map serves an unbounded number of trajectories and a multi\-agent fleet without per\-agent retraining, and many differentiable operational constraints \(no\-fly zones, acceleration ceilings, or fairness penalties\) enter as additive soft penalties in the training loss without re\-deriving the design\. We prove three results \(an acceleration\-energy bound, an $O\(1/\\sqrt\{K\}\)$ ergodic convergence rate in the number of trajectory cycles $K$, and an approximation\-error bound\) that combine into an end\-to\-end coverage bound estimable from CFM training diagnostics \(certified given an architectural Lipschitz bound on $v\_\\theta$\)\. Experiments on synthetic targets empirically support each theoretical envelope; on a real UAV\-coverage dataset, the proposed method gives the strongest observed coverage\-\-energy and coverage\-\-constraint tradeoffs among the evaluated time\-warping, optimization, and concurrent flow\-matching baselines\.

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

## Flow Mismatching: Unsupervised Anomaly Detection via Velocity Discrepancies in Flow Matching Models

**Authors:** Shengzhe Chen; Mehrdad Moradi; Kamran Paynabar; Hao Yan

**ID:** 148833 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uo8TtP3G5g>) | [PDF](<https://openreview.net/pdf?id=uo8TtP3G5g>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148833>)

We propose Flow Mismatching, an unsupervised anomaly detection method that deliberately avoids reconstruction\-based paradigms\. Instead, we treat flow matching as geometric dynamics and leverage a key insight: anomalies occur at places where the learned normal flow disagrees with the geometric path toward a test image\.    Given a flow matching model trained only on normal images, we probe its learned velocity field along affine paths from Gaussian noise to a target image\. Along each path, we compare the model\-predicted velocity, which follows normal generative dynamics, with the geometric velocity toward the target, which includes any anomalous content\. Anomalies induce strong local disagreement between these velocities\. Aggregating the mismatch over different time steps and multiple paths yields pixel\-wise heatmaps and image\-level scores without test\-time optimization, feature memories, or additional calibration\.    Our analysis shows that the population mismatch decomposes into an irreducible denoising term and a Fisher\-divergence term between the test\-path and normal\-path score functions, which identifies the score\-gap component that drives anomaly separation and explains the effectiveness of robust path aggregation\. Extensive experiments on MVTec\-AD and VisA demonstrate superior performance compared with SOTA reconstruction\-based and recent flow matching\-based approaches\.

## Watermarking as a Learned Intrinsic Property of Diffusion Models

**Authors:** Xiang Li; Dong\-Dong Wu; Masashi Sugiyama; Lannan Luo; Qiang Zeng

**ID:** 148799 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v26DCJujUa>) | [PDF](<https://openreview.net/pdf?id=v26DCJujUa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148799>)

Recent advances in latent diffusion models have enabled high\-quality image generation, but also raise critical concerns for intellectual property protection in model distribution scenarios, where downstream users have unrestricted access to models, allowing arbitrary modifications\. Existing watermarking methods either rely on inference\-time control of inputs \(e\.g\., specific prompts or noise initialization\) or embed watermark signals in auxiliary components, making them easily removable in such settings\. In this paper, we propose INMARK, which treats watermarking as an intrinsic property learned by the model\. Instead of relying on input control or auxiliary watermarking components, INMARK enables the core denoising network to internalize and reproduce watermark patterns\. Extensive experiments demonstrate that INMARK achieves strong generation fidelity, high watermark detectability, and robustness against attacks, while remaining fully compatible with standard diffusion training pipelines\. Our results highlight a new perspective on diffusion model watermarking: the denoising network can learn a reliable and persistent watermarking capability, which is crucial in practical model distribution scenarios\.

## L\-Flow: Longitudinal Flow Matching for Progression\-Aware Speech Biomarker Modeling

**Authors:** Enshi Zhang; Christian Poellabauer

**ID:** 151169 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cWCFhDk4uC>) | [PDF](<https://openreview.net/pdf?id=cWCFhDk4uC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151169>)

Speech is an increasingly promising biomarker for neurodegenerative disorders due to its non\-invasive nature, low cost, and suitability for frequent, longitudinal monitoring\. However, existing clinical speech datasets are typically small, sparse, and irregularly sampled, limiting the ability to model continuous disease progression and develop robust biomarkers\. We propose L\-Flow, a progression\-aware conditional speech generation framework for longitudinal speech trajectory completion\. Given a patient’s speech recordings, timestamps, and clinical progression labels, L\-Flow learns a query\-specific progression representation to synthesize speech at intermediate time points within the observed recording span\. Experiments on two real\-world longitudinal speech datasets demonstrate that L\-Flow generates synthetic speech with stronger progression consistency than eight baseline augmentation methods\. In addition, incorporating L\-Flow–augmented data improves downstream regression performance to predict clinical severity, highlighting its utility for speech\-based biomarker development\.

## GeoSPRINT: Geometric Redundancy\-Aware Step Pruning for Inference in Diffusion Trajectories

**Authors:** Arpita Joshi

**ID:** 149350 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qj6phkQ9Bx>) | [PDF](<https://openreview.net/pdf?id=qj6phkQ9Bx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149350>)

Diffusion models achieve high sample quality but remain expensive at inference time because sampling requires many sequential neural function evaluations \(NFEs\)\. Existing acceleration methods either use fixed step\-skipping schedules, adapt step sizes based on local numerical error, or require additional training\. We introduce GeoSPRINT \(Geometric Step Pruning for Inference in Trajectories\), a training\-free framework for constructing non\-uniform sampling schedules from the geometry of denoising trajectories\. GeoSPRINT detects geometrically redundant steps using a hyperplanarity test in latent space, implemented efficiently via QR factorization, and converts the resulting redundancy profile into a sampling schedule that allocates more steps to high\-curvature regions of the trajectory\. In addition, we introduce the trajectory projection score $\\alpha\_\{\\mathrm\{traj\}\}$, a residual\-variance metric that quantifies trajectory straightness and serves as a model\-free diagnostic for rectified flow quality\. Across CIFAR\-10 \($32\{\\times\}32$\), LSUN Church \($256\{\\times\}256$\), and Stable Diffusion v1\.5 \($512\{\\times\}512$ latent\), GeoSPRINT consistently improves over uniform DDIM \(Denoising Diffusion Implicit Models\) schedules at matched NFE budgets\. On CIFAR\-10, GeoSPRINT improves FID \(Fréchet Inception Distance\) by 0\.7\-1\.1 over DDIM across 49\-89 NFEs and surpasses DPM\-Solver\+\+ at NFE$\{\\geq\}30$ despite using a first\-order DDIM solver\. On LSUN Church, it reduces FID from 1\.48 to 1\.26 at 52 steps, and on Stable Diffusion v1\.5 it achieves up to 1\.93 FID improvement over DDIM\. These results show that trajectory geometry provides a useful global signal for allocating inference steps and that schedule quality can substantially improve diffusion sampling efficiency without retraining\.

## A Theory on Flow Matching with Neural Networks

**Authors:** Yihan He; Qishuo Yin; Yuan Cao; Jianqing Fan; Han Liu

**ID:** 152773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QTCtJIao9O>) | [PDF](<https://openreview.net/pdf?id=QTCtJIao9O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152773>)

In this work, we develop theoretical foundation for flow matching with neural\-network–parameterized conditional velocity fields\. We establish convergence guarantees for gradient descent in the over\-parameterized 2\-layered ReLU neural network regime\. We derive generalization bounds for the conditional velocity\-field matching objective\.  Building on these results, we provide Wasserstein\-distance guarantees for the samples generated by the induced flow\. Our analysis is based on generalization bound for multi\-task representation learning with unbounded losses, which may be of independent interest beyond flow\-based generative modeling\. These theoretical results are validated through extensive experiments on both synthetic and real\-world image benchmarks\.

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

## Structural Rationale Distillation via Reasoning Space Compression

**Authors:** Jialin Yang; Jiankun Wang; Jiajun Wu; Henry Leung; Jiayu Zhou; Steve Drew

**ID:** 152271 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UK2XjwZOOP>) | [PDF](<https://openreview.net/pdf?id=UK2XjwZOOP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152271>)

When distilling reasoning from large language models \(LLMs\) into smaller ones, teacher rationales for similar problems often vary wildly in structure and strategy\. Like a chef who makes the same dish differently each time, this inconsistency burdens the student with noisy supervision that is hard to internalize\. We propose Distillation through Reasoning Path Compression \(D\-RPC\), which constrains the teacher to follow a compact, dynamically maintained bank of reusable high\-level reasoning paths\. For each training question, D\-RPC retrieves the most relevant path and conditions the teacher to follow it, producing rationales that are consistent across similar problems yet diverse enough to cover different problem types\. A PAC\-Bayes analysis formalizes the resulting trade\-off between bank size and coverage: smaller banks reduce supervision entropy but risk coverage gaps, and the generalization bound identifies an optimal intermediate size confirmed by our ablations\. Across five math and commonsense reasoning benchmarks with two student models, D\-RPC consistently outperforms chain\-of\-thought distillation, freeform rationale generation, direct distillation, and structured\-supervision baselines, while using fewer tokens than template\-heavy alternatives\.

## DiffATS: Diffusion in Aligned Tensor Space

**Authors:** Jinhua Lyu; Tianmin Yu; Brian Kim; Lizhuo Zhou; Chanwook Park; Naichen Shi

**ID:** 150268 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jQzUVefSI5>) | [PDF](<https://openreview.net/pdf?id=jQzUVefSI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150268>)

Direct diffusion modeling of high\-resolution spatiotemporal fields is computationally challenging\.  Parameter\-efficient primitives address this by representing high\-dimensional data with a compact set of parameters\. In this paper, we construct data\-dependent tensor primitives  without pretrained compression autoencoders\.  Our construction starts from Tucker decomposition,  which captures low\-rank multilinear structure through a core tensor and mode\-wise factors\. However, Tucker factors are non\-unique: the same tensor can be represented by different rotated factors,  which complicates generative modeling\.  We address this issue with orthogonal Procrustes \(OP\) alignment\. Specifically, we select medoid anchor matrices  from the data and align the factor matrices to resolve the gauge ambiguity\.  This yields matrix Grassmannian primitives and tensor Grassmannian primitives  that are compact, data\-adaptive, and directly decodable by explicit multilinear reconstruction\. Theoretically, we prove that the proposed primitive maps are homeomorphisms between low\-rank tensors and their corresponding primitive spaces, certifying that the representations are non\-degenerate and topologically faithful\.  Building on these primitives, we propose \*Diffusion in Aligned Tensor Space\* \(DiffATS\), a generative framework that trains diffusion models directly on aligned tensor primitives\.  Across images, videos, and PDE solutions, DiffATS achieves strong unconditional and conditional generation performance while compressing original data by $3\.9\\times$ to $210\\times$,  without relying on any pretrained deep compression autoencoders\.

## Concurrence of Symmetry Breaking and Nonlocality Phase Transitions in Diffusion Models

**Authors:** Yifan F Zhang; Fangjun Hu; Guangkuo Liu; Mert Okyay; Xun Gao

**ID:** 153436 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LJu0XmevDe>) | [PDF](<https://openreview.net/pdf?id=LJu0XmevDe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153436>)

Diffusion models undergo a phase transition in a critical time window during generation dynamics, with two complementary diagnoses of criticality\. The symmetry breaking picture views the critical window as when trajectories bifurcate into different semantic minima of the energy landscape, whereas the nonlocality picture views the critical window as when local denoising fails\. We study whether two notions of such phase transitions are concurrent in modern diffusion transformers\. By evaluating the dynamics and outcomes of the generation trajectory, we observe a near\-simultaneous occurrence of the non\-locality and symmetry breaking critical times\. Our work is the first to unify the two notions of phase transitions in practice: it provides a concrete diagnostic for when and why diffusion models rely on conditioning and global denoising, enabling principled evaluation of model efficiency and guiding the design of architectures and sampling schemes that avoid unnecessary computation\.

## PixelDiT2: Representation\-Grounded Pixel Diffusion Transformers

**Authors:** Yongsheng Yu; Wei Xiong; Yichen Sheng; Shiqiu Liu; Jiebo Luo

**ID:** 155465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5P4vAdvfAy>) | [PDF](<https://openreview.net/pdf?id=5P4vAdvfAy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155465>)

Recent advances in pixel\-space diffusion models have narrowed the image quality gap with latent\-space diffusion, but still converge more slowly and lag behind in final image quality\. We argue that a key reason is the lack of an explicit representation prior: unlike latent diffusion, which denoises in a compact and structured latent space, pixel diffusion must learn denoising\-friendly representations and pixel generation simultaneously from raw RGB space\. To address this problem, we propose PixelDiT2, an end\-to\-end pixel\-space diffusion model designed to decouple representation learning from pixel generation without introducing an autoencoder or latent reconstruction bottleneck\. We propose \*representation grounding\* that uses a frozen pretrained vision foundation model to provide explicit per\-patch representation guidance throughout denoising, allowing the pixel diffusion transformer to focus more on pixel generation\. On ImageNet\-$256\{\\times\}256$, PixelDiT2 reaches FID $\\textbf\{1\.50\}$ in $320$ epochs, surpassing JiT\-G's FID $1\.82$ at $600$ epochs with roughly half the parameters and half the training budget\.

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

## STARFlow2: Bridging Language Models and Normalizing Flows for Unified Multimodal Generation

**Authors:** Ying Shen; Tianrong Chen; Yuan Gao; Yizhe Zhang; Yuyang Wang; Miguel Angel Bautista; Shuangfei Zhai; Joshua Susskind; Jiatao Gu

**ID:** 153469 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=L7AuyR68b3>) | [PDF](<https://openreview.net/pdf?id=L7AuyR68b3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153469>)

Deep generative models have advanced rapidly across text and vision, motivating unified multimodal systems that can understand, reason over, and generate interleaved text–image sequences\. Most existing approaches combine autoregressive language modeling with diffusion\-based image generators, inheriting a structural mismatch between causal text generation and iterative visual denoising\. We observe that autoregressive normalizing flows are autoregressive Transformers—sharing the same causal mask, KV\-cache mechanism, and left\-to\-right structure as LLMs— making them the most natural paradigm for true unified multimodal generation\. We present STARFlow2, built on the Pretzel architecture that vertically interleaves a pretrained VLM stream with a TarFlow stream via residual skip connections, both operating under the same causal mask\. Combined with a deep\-shallow flow design and a unified FAE latent space, STARFlow2 enables cache\-friendly interleaved generation where both text and visual outputs directly enter the KV\-cache without re\-encoding\. Experiments demonstrate strong performance across image generation and multimodal understanding benchmarks, validating autoregressive flows as a viable foundation for unified multimodal modeling\.

## Continuous Diffusion Scales Competitively with Discrete Diffusion for Language

**Authors:** Zhihan Yang; Wei Guo; Shuibai Zhang; Subham Sahoo; Yongxin Chen; Arash Vahdat; Morteza Mardani; John Thickstun

**ID:** 152067 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ViiyKzhLpA>) | [PDF](<https://openreview.net/pdf?id=ViiyKzhLpA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152067>)

While diffusion has drawn considerable recent attention from the language modeling community, continuous diffusion has appeared less scalable than discrete approaches\. To challenge this belief we revisit Plaid, a likelihood\-based continuous diffusion language model \(DLM\), and construct RePlaid by aligning the architecture of Plaid with modern discrete DLMs\. In this unified setting, we establish the first scaling law for continuous DLMs that rivals discrete DLMs: RePlaid exhibits a compute gap of only $22\\times$ compared to autoregressive models, matches Duo while using fewer parameters, and outperforms MDLM in the over\-trained regime\. We benchmark RePlaid against recent continuous DLMs: on OpenWebText, RePlaid achieves a new state\-of\-the\-art PPL bound of $22\.6$ among continuous DLMs and superior generation quality\. These results suggest that continuous diffusion, when trained via likelihood, is a highly competitive and scalable alternative to discrete DLMs\. Moreover, we offer theoretical insights to understand the advantage of likelihood\-based training\. We show that optimizing the noise schedule to minimize the ELBO's variance naturally yields linear cross\-entropy \(information loss\) over time\. This evenly distributes denoising difficulty without any case\-specific time reparameterization\. In addition, we find that optimizing embeddings via likelihood creates structured geometries and drives the most significant likelihood gain\.

## Learning When to Denoise: Optimizing Asynchronous Schedules for Latent Diffusion

**Authors:** Bingshuo Qian; Xiang Cheng

**ID:** 149435 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q637ymfOaO>) | [PDF](<https://openreview.net/pdf?id=q637ymfOaO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149435>)

Recent latent diffusion methods jointly model multiple representations of an image, denoising them with asynchronous noise schedules in which one representation temporally leads another\. However, existing asynchronous schedules are often hand\-designed, relying on grid search over simple function classes\. We propose to learn the asynchronous schedule directly\. We parameterize the schedule as a convex monotone bijection $f : \[0,1\] \\to \[0,1\]$, where convexity together with $f\(0\)=0$ and $f\(1\)=1$ guarantees the desired leading\-representation property by construction while still admitting a wide family of schedule shapes\. A short probe stage jointly optimizes the schedule and diffusion model under a mild speed regularizer; the resulting smooth schedule is averaged over the stable probe window, frozen, and reused for full training, introducing no additional overhead during the main training stage\. On ImageNet 256$\\times$256, our learned schedule reaches unguided FID 2\.37 at 1M iterations and FID 1\.05 with AutoGuidance at 200 epochs, outperforming the best hand\-tuned baseline trained for four times longer\. Code is available at \\url\{https://anonymous\.4open\.science/r/LAS\_public\-01E4/\}\.

## BSTabDiff: Block\-Subunit Diffusion Priors for High\-Dimensional Tabular Data Generation

**Authors:** Al Zadid Sultan Bin Habib; Md Younus Ahamed; Prashnna K Gyawali; Gianfranco Doretto; Donald A Adjeroh

**ID:** 151140 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ciPCMXX1aj>) | [PDF](<https://openreview.net/pdf?id=ciPCMXX1aj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151140>)

High\-Dimensional Low\-Sample Size \(HDLSS\) tabular domains \(e\.g\., omics\) are characterized by $n \\ll m$, where $n$ = number of samples, and $m$ = number of features\. Such domains often exhibit strong local correlation groups, sparse cross\-group dependencies, heavy\-tailed non\-Gaussian marginals, heteroscedastic noise, and structured missingness, making direct density learning in $\\mathbb\{R\}^m$ ill\-conditioned since $n \\ll m$\. We propose BSTabDiff, a block\-subunit generative framework that partitions the $m$ observed features into $M$ latent blocks \($M \\ll m$\) and generates each block via a shared low\-dimensional subunit variable, concentrating global dependence learning in the compact block\-latent space $\\mathbb\{R\}^M$ while decoding to the full feature space with copula\-driven dependence, flexible per\-feature marginals, and explicit missingness mechanisms\. BSTabDiff can induce a data\-driven feature ordering and block construction before latent partitioning, allowing the model to better align with local dependency structure when such organization is beneficial\. BSTabDiff supports modern deep priors on block latents, including diffusion and normalizing flows, enabling stable synthesis and controllable benchmark generation in the HDLSS regime\. Empirically, BSTabDiff produces more realistic and more stable high\-dimensional synthetic data when compared with unstructured tabular generators on HDLSS data\.

## You Only Need Minimal RLVR Training: Extrapolating LLMs via Rank\-1 Trajectories

**Authors:** Zhepei Wei; Xinyu Zhu; Wei\-Lin Chen; Chengsong Huang; Jiaxin Huang; Yu Meng

**ID:** 154227 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FGnWADI4yz>) | [PDF](<https://openreview.net/pdf?id=FGnWADI4yz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154227>)

Reinforcement learning with verifiable rewards \(RLVR\) has become a dominant paradigm for improving reasoning in large language models \(LLMs\), yet the underlying geometry of the resulting parameter trajectories remains underexplored\. In this work, we demonstrate that RLVR weight trajectories are extremely low\-rank and highly predictable\. Specifically, we find that the majority of downstream performance gains are captured by a rank\-1 approximation of the parameter deltas, where the magnitude of this projection evolves near\-linearly with training steps\. Motivated by this, we propose a simple and compute\-efficient method RELEX \(REinforcement Learning EXtrapolation, which estimates the rank\-1 subspace from a short observation window and extrapolates future checkpoints via linear regression, with no learned model required\. Across three models \(i\.e\., Qwen2\.5\-Math\-1\.5B, Qwen3\-4B\-Base, and Qwen3\-8B\-Base\), RELEX produces checkpoints that match or exceed RLVR performance on both in\-domain and out\-of\-domain benchmarks, requiring as few as 15% steps of full RLVR training\. Remarkably, RELEX is able to extrapolate far beyond the observation window at no training cost, predicting checkpoints up to $10\\sim50\\times$ the training steps with continued improvement \(e\.g\., observe only the first 50 steps and extrapolate to 2000 steps\)\. Our ablation analysis confirms the minimalist sufficiency of RELEX: neither increasing the subspace rank nor employing non\-linear modeling yields further gains in extrapolation\. Finally, we show that RELEX’s success stems from a "denoising" effect: by projecting updates onto the rank\-1 subspace, the model discards stochastic optimization noise that would otherwise degrade performance during extrapolation\.

## BiMoGen: Bidirectional Motion\-Text Generation via Unified Masked Discrete Diffusion

**Authors:** Wanjiang Weng; Yongliang Wu; Xiaofeng Tan; Xingyu Zhu; Wenbo Zhu; Hongsong Wang

**ID:** 152019 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W7ZNNibQAH>) | [PDF](<https://openreview.net/pdf?id=W7ZNNibQAH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152019>)

Text\-to\-motion generation and motion\-to\-text captioning are two fundamental tasks in human motion modeling, both grounded in the same underlying motion\-text correspondence\. Existing unified approaches mostly rely on autoregressive modeling, which imposes a fixed generation order and is therefore poorly suited to the bidirectional dependencies between language and motion, allowing early prediction errors to persist as fixed context and degrade both temporal coherence and cross\-modal consistency\. Masked discrete diffusion, which models sequences through iterative bidirectional prediction, offers a natural remedy\. We therefore propose BiMoGen \(Bidirectional Motion\-text Generation\), a unified masked discrete diffusion framework for bidirectional motion\-text modeling\. To stabilize training, we design Decoupled Uni\- and Cross\-Modal Training, in which masked pretraining first establishes cross\-modal correspondence on paired motion\-text sequences, after which supervised fine\-tuning specializes the model for bidirectional generation\. Masked diffusion nonetheless introduces its own source of error, as the model is trained on clean ground\-truth context yet encounters self\-generated and potentially erroneous context at inference, with errors committed under heavily masked states propagating through subsequent steps\. We further introduce Generation\-Aware Self\-Correction that exposes the model to its own predictions during training and applies correction passes at early sampling steps to revise unreliably committed tokens\. Extensive experiments on HumanML3D and KIT\-ML demonstrate competitive performance on both tasks, validating the effectiveness of the proposed two\-stage training and self\-correction designs\.

## Flow Map Denoisers: Traversing the Distortion\-Perception Plane for Inverse Problems

**Authors:** Nicolas Zilberstein; Morteza Mardani; Santiago Segarra

**ID:** 154398 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ds12ClkyRZ>) | [PDF](<https://openreview.net/pdf?id=Ds12ClkyRZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154398>)

Image restoration faces a fundamental tradeoff: methods that minimize error produce blurry reconstructions, while those that maximize perceptual quality yield sharp but less faithful images\. Existing approaches either commit to a single operating point on this distortion–perception \(DP\) frontier or require retraining, auxiliary models, or changes in discretization to access different points\. We show that flow map models, a recent extension of flow matching for few\-step sampling that learns an average field, implicitly define a one\-parameter family of denoisers that continuously spans the DP frontier\. The parameter, the lookahead $t$, acts as a knob: varying it traces a smooth path from the MMSE estimator to a perceptually aligned one\. For Gaussian targets, we prove that this path recovers the optimal DP frontier exactly; for natural images, we demonstrate empirically that it closely follows the same behavior\. Embedded within a Plug\-and\-Play solver, a single trained flow map matches or exceeds specialized baselines at both ends of the DP spectrum and uniquely traces a continuous curve in between without retraining, paired data, or auxiliary networks\. Extensive experiments on CelebA \($128\\times 128$\) and AFHQ \($256\\times 256$\) across several linear and nonlinear inverse tasks validate our findings\.

## Taming the Curses of Multiagency in Robust Markov Games with Large State Space through Linear Function Approximation

**Authors:** Jingchu Gai; Laixi Shi

**ID:** 154545 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ClsqGkeoIS>) | [PDF](<https://openreview.net/pdf?id=ClsqGkeoIS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154545>)

Multi\-agent reinforcement learning \(MARL\) holds great potential but faces robustness challenges due to environmental uncertainty\. To address this, distributionally robust Markov games \(RMGs\) optimize worst\-case performance when the environment deviates from the nominal model within a uncertainty set\. Beyond robustness, an equally urgent goal for MARL is data efficiency—sampling from vast state and action spaces that grow exponentially with the number of agents potentially leads to the curse of multiagency\. However, current provably data\-efficient algorithms for RMGs are limited to tabular settings with finite state and action spaces, which are only computationally manageable for small\-scale problems, leaving RMGs with large\-scale \(or infinite\) state spaces largely unexplored\. The only existing work beyond tabular settings focuses on linear function approximation \(LFA\) for a restrictive class of RMGs using vanish minimal value assumption and still suffers from sample complexity with the curse of multiagency\. In this work, we focuses on general RMGs with LFA\. For uncertainty sets defined by total variation distance, we develop provably data\-efficient algorithms that break the curse of multiagency in both the generative model setting and a newly proposed online interactive setting\. To our knowledge, our results are the first to break the curse of multiagency of sample complexity for RMGs with large \(possibly infinite\) state spaces, regardless of the uncertainty set construction\.

## Gaeta\-Lie Neural SDEs: Symmetry\-Regularized Learning of Stochastic Dynamics

**Authors:** Shida Liu; Sumit Sinha; L Mahadevan

**ID:** 155867 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2IFjEJUD96>) | [PDF](<https://openreview.net/pdf?id=2IFjEJUD96>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155867>)

Learning neural stochastic differential equations \(SDEs\) from trajectory data is a central task in scientific machine learning, but standard neural SDEs trade flexibility for coefficient fidelity: flexible parameterizations recover coefficients poorly, while structured architectures impose strong coefficient priors\. We introduce \*Gaeta\-Lie Neural SDEs\*, a three\-stage pipeline that improves coefficient recovery through discovered symmetries without priors on the drift or diffusion\. Building on the Itô SDE symmetry framework of Gaeta and Quintero \(1999\), we first train a flexible neural SDE surrogate, then discover approximate projectable Lie symmetries of the learned surrogate in a finite basis of canonical symmetry generators, and finally regularize the surrogate by penalizing the residual of the Itô symmetry determining equations\. The discovery stage is \*lightweight\*, scalable, and theory\-guided: the SDE symmetry Lie algebra has known dimensional bounds that constrain the symmetry search space\. The resulting regularization is \*architecture\-agnostic\* and improves existing neural SDE methods when combined with them\. Across non\-trivial SDEs spanning low and high dimensions and a real\-data setting, Gaeta\-Lie regularization consistently improves fidelity over multiple baselines, with gains that persist in the data\-scarce regime as guaranteed by the symmetry residual's freedom from data sparsity\. To our knowledge, this is the first method to use SDE Lie symmetry to improve a learned stochastic surrogate\.

## Exploring MLLM\-Diffusion Information Transfer with MetaCanvas

**Authors:** Han Lin; Xichen Pan; Ziqi Huang; Ji Hou; Jialiang Wang; Weifeng Chen; Zecheng He; Felix Juefei\-Xu; Junzhe Sun; Zhipeng Fan; Ali Thabet; Mohit Bansal; Chu Wang

**ID:** 151074 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=d8GC1xLs92>) | [PDF](<https://openreview.net/pdf?id=d8GC1xLs92>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151074>)

Multimodal learning has advanced visual understanding through powerful multimodal LLMs \(MLLMs\)\. In visual generation, however, these models are often used only as global text or context encoders for diffusion generators, limiting their ability to provide structured spatial and temporal guidance\. This creates an interface gap: MLLMs can parse complex layouts, attributes, and knowledge\-intensive scenes, yet current generation pipelines often struggle to transfer such understanding into images and videos with precise, controllable structure\. We propose MetaCanvas, a lightweight framework that organizes MLLM representations into spatially indexed canvas tokens and interfaces them with diffusion generators through patch\-wise residual fusion\. This provides structured spatial and spatiotemporal conditioning rather than relying only on a single global embedding or 1D query sequence\. We implement MetaCanvas on three diffusion backbones and evaluate it across six generation and editing tasks requiring precise layouts, robust attribute binding, and fine\-grained multimodal control\. Under matched settings, MetaCanvas consistently improves over global\-conditioning baselines, narrows the gap to specialized closed\-source visual generation and editing systems, and unlocks new editing and in\-context capabilities for video diffusion backbones\. These results suggest that spatially aligned MLLM\-derived canvas tokens provide a promising latent interface for transferring multimodal understanding into diffusion\-based generation\.

## Concorde: Geometry\-Aware Link Prediction via Decoupled Energy Minimization

**Authors:** Ege Demirci; Ambuj K Singh

**ID:** 150148 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kKn1kj1a7N>) | [PDF](<https://openreview.net/pdf?id=kKn1kj1a7N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150148>)

Link prediction remains difficult in sparse graphs, where diffusion heuristics lack connectivity and geometric methods suffer spectral instability when coupling learned representations with diffusion operators\. We introduce \*\*Concorde\*\*, an energy\-based framework that resolves this by decomposing link likelihood into three structurally decoupled branches: \*\*\(i\)\*\* a parameter\-free spectral anchor that establishes permutation\-invariant topological stability; \*\*\(ii\)\*\* a mixed\-curvature residual on a learnable $\\mathbb\{H\}\\\_\{c\\\_h\}^\{d\\\_h\} \\times \\mathbb\{S\}\\\_\{c\\\_s\}^\{d\\\_s\}$ product manifold, regularized by a feature\-aware Ollivier\-\-Ricci curvature proxy; and \*\*\(iii\)\*\* a continuous vector field on $\\mathcal\{T\}\\mathbb\{H\}\\\_c^d$ for non\-local structural alignment across topological gaps\. The branches are fused via learned gating and trained with an $N$\-pair ranking loss aligned with retrieval\-style evaluation\. Across five benchmarks spanning sparse, dense, featureless, and attributed regimes, \*\*Concorde\*\* establishes state\-of\-the\-art early retrieval precision, nearly doubling $P@10\\\\%$ over leading baselines in sparse settings\.

## Search\-Augmented Masked Diffusion Models for Constrained Generation

**Authors:** Huu Binh Ta; Michael Cardei; Alvaro Velasquez; Ferdinando Fioretto

**ID:** 153907 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HpIle7vItG>) | [PDF](<https://openreview.net/pdf?id=HpIle7vItG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153907>)

Discrete diffusion models generate sequences by iteratively denoising samples corrupted by categorical noise, offering an appealing alternative to autoregressive decoding for structured and symbolic generation\. However, standard training targets a likelihood\-based objective that primarily matches the data distribution and provides no native mechanism for enforcing hard constraints or optimizing non\-differentiable properties at inference time\. This work addresses this limitation and introduces Search\-Augmented Masked Diffusion \(SearchDiff\), a training\-free neurosymbolic inference framework that integrates informed search directly into the reverse denoising process\. At each denoising step, the model predictions define a proposal set that is optimized under a user\-specified property satisfaction, yielding a modified reverse transition that steers sampling toward probable and feasible solutions\. Experiments in biological design and symbolic reasoning illustrate that SearchDiff substantially improves constraint satisfaction and property adherence, while consistently outperforming discrete diffusion and autoregressive baselines\.

## Smooth Flow Matching for Synthesizing Functional Data

**Authors:** Jianbin Tan; Anru Zhang

**ID:** 156636 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156636>)

Functional data, i\.e\., random functions observed over a continuous domain, are increasingly available in areas such as biomedical research, health informatics, and epidemiology\. However, effective statistical analysis for functional data is often hindered by challenges such as privacy constraints, sparse and irregular sampling, infinite\-dimensionality, and non\-Gaussian structures\. To address these challenges, we introduce a novel framework named Smooth Flow Matching \(SFM\), tailored for generative modeling of functional data that enables statistical analysis without exposing sensitive real data\. Under a copula framework, SFM constructs a semiparametric smooth flow to generate infinite\-dimensional functional data, free of Gaussianity and low\-rank assumptions\. It is computationally efficient, handles irregular observations, and guarantees the smoothness of the generated functions, offering a practical and flexible solution in scenarios where existing deep generative methods are not applicable\. Through extensive simulation studies, we demonstrate the advantages of SFM in terms of both synthetic data quality and computational efficiency\. We then apply SFM to generate clinical trajectory data from the MIMIC\-IV patient electronic health records \(EHR\) longitudinal database\. Our analysis showcases the ability of SFM to produce high\-quality surrogate data for downstream tasks, highlighting its potential to boost the utility of EHR data for clinical applications\.

## Improving Function Space Flow Matching with Kernel Optimal Transport

**Authors:** Fred Xu; Thomas Markovich; Barbora Barancikova; Yizhou Sun

**ID:** 152774 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QT7iczCUkm>) | [PDF](<https://openreview.net/pdf?id=QT7iczCUkm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152774>)

Generative models for function\-valued data, such as time series and solutions to partial differential equations, must learn distributions over infinite\-dimensional spaces rather than over finite\-dimensional vectors\. Functional Flow Matching \(FFM\) is a recent extension of Flow Matching to this setting, learning a velocity field whose flow transports a Gaussian prior to the data distribution\. However, FFM inherits a structural limitation from standard Flow Matching: in each training batch, prior and data samples are paired independently, so the conditional bridge between them must simultaneously traverse the shared global structure of the dataset and instance\-specific residuals\. This limitation is more consequential in function space than in finite dimensions: directly formulating optimal transport on function spaces is technically delicate, and a flat Euclidean surrogate ignores the function\-space geometry that distinguishes function\-valued data\. We propose kernel Functional Flow Matching \(kFFM\), which replaces the independent pairing by entropic optimal transport in a kernel\-induced Hilbert space via the Hilbert Sinkhorn Divergence, leaving the FFM neural\-operator architecture unchanged\. Theoretically, we prove the HSD objective is well\-posed on Banach ambient spaces with bounded kernels, derive compact\-metric approximation bounds against quadratic\-cost OT with an explicit kernel\-cost mismatch term, and quantify the gap between the function\-space objective and the truncated representation computed on a grid, at a rate governed by data regularity\. Empirically, kFFM consistently improves MMD\-RBF distributional matching over FFM, diffusion, adversarial, and finite\-dimensional OT baselines on time\-series and PDE benchmarks, with function\-space\-aware kernels emerging as the strongest choices on every PDE and path\-valued benchmarks\.

## Denoising Time Matters: Diverse Generation in Diffusion Language Models

**Authors:** jingxuan wu; Zhenglin Wan; Yuzhe YANG; Yiqiao Huang; Chubin Zhang; Xingrui Yu; Ivor Tsang; Yang You

**ID:** 154837 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AZvYD2Qmwj>) | [PDF](<https://openreview.net/pdf?id=AZvYD2Qmwj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154837>)

Diffusion language models \(Diffusion\-LMs\) generate text through iterative denoising, exposing a temporal structure that is largely absent from autoregressive decoding\. In this paper, we show that this temporal structure provides a useful control axis for generation diversity: early denoising steps mainly determine high\-level semantic trajectories, while later steps refine lexical realization\. Motivated by this observation, we propose Time\-Annealed Perturbation Sampling \(TAPS\), a training\-free inference strategy that samples nearby conditioning trajectories through time\-aware, manifold\-constrained perturbations\. TAPS encourages semantic branching during early denoising and anneals the perturbation away before refinement, improving exploration while preserving prompt alignment, generation quality, and reasoning ability\. Experiments on multiple Diffusion\-LM backbones, including non\-autoregressive and semi\-autoregressive models, show that TAPS consistently improves semantic and lexical diversity across open\-ended and instruction\-following generation tasks, while preserving reasoning ability on verifiable reasoning benchmarks with negligible overhead\.

## Unsupervised Concept Discovery with Dirichlet Concept Diffusion Models

**Authors:** Yuchong Geng; Ao Tang

**ID:** 151439 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ahE8Fplb25>) | [PDF](<https://openreview.net/pdf?id=ahE8Fplb25>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151439>)

We show that a generative model can discover concepts from data in an unsupervised setting while learning to generate\. The Dirichlet Concept Diffusion Model \(DCDM\) embeds concept discovery into diffusion\-based generation\. DCDM learns concept centers and infers a Dirichlet distribution over them for each input\. The resulting weighted center shapes the forward diffusion mean and reverse denoising process, so components are learned through the same evidence lower bound used to model the data\. The method uses no class labels, attribute annotations, captions, pretrained text\-to\-image priors, or semantic concept supervision\. Analysis shows how the formulation preserves concept\-level information along diffusion paths and reduces denoising ambiguity, creating pressure for concept centers to capture stable modes\. Experiments across diverse image domains show that the learned components form coherent prototypes, support interventions, and reflect recurring visual structure\.

## VTV\-FM: Flow Matching through Variational Terminal\-Velocity Closure

**Authors:** Haoyang Jiang; Yuheng Li; Di Yang; Yanhai Xiong; Haipeng Chen; Yi He

**ID:** 152736 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QkeTySGSs0>) | [PDF](<https://openreview.net/pdf?id=QkeTySGSs0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152736>)

Flow Matching \(FM\) learns generative transport by fitting continuous\-time motion from a simple source distribution to the data distribution\. Most existing methods use first\-order bridges: once a source and a target sample are paired, the path is a straight motion with constant velocity\. FM with optimal transport \(OT\) improves the pairing, but the bridge itself remains linear, limiting its ability to model curved motion, acceleration, and changing directions\. A natural remedy is to use second\-order phase\-space dynamics; however, constructing such bridges requires a target\-side terminal velocity, which static datasets typically do not provide\. We propose Variational Terminal\-Velocity Flow Matching \(VTV\-FM\), a second\-order FM framework that derives the missing velocity by minimizing acceleration energy, yielding a closed\-form closure for static data\. The same minimum\-acceleration variational construction also defines the OT pairing cost and the acceleration targets used for training\. Experiments on low\-dimensional datasets, PDE\-governed physical fields, and CIFAR\-10 show that VTV\-FM improves transport geometry and generation quality over first\-order and existing high\-order FM baselines\.

## Drift Flow Matching

**Authors:** Chenrui Ma; Xi Xiao; Lin Zhao; Tianyang Wang; Ferdinando Fioretto; Yanning Shen

**ID:** 155776 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2yXRWyxBfG>) | [PDF](<https://openreview.net/pdf?id=2yXRWyxBfG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155776>)

Iterative generative models such as Flow Matching and Diffusion models have demonstrated strong test\-time scaling behavior, where additional inference computation can improve generation quality\. In contrast, Drift Models offer efficient one\-step generation, but their direct generation paradigm limits such flexibility\. In this work, we propose Drift Flow Matching \(DFM\), a framework that connects drifting generative modeling with flow\-based iterative generation\. DFM preserves the efficiency of direct transport maps while enabling generation to be refined through multiple inference steps when desired\. This bridges the gap between one\-step Drift Models and multi\-step Flow Matching methods, and provides a novel generative paradigm that can adapt sampling computation to different quality\-\-efficiency requirements\.  Extensive experiments across different tasks and datasets demonstrate the effectiveness and generality of the proposed framework\.

## Token Time Continuous Diffusion for Language Modeling

**Authors:** Parikshit Bansal; Sujay Sanghavi

**ID:** 153937 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HSVpmk76UW>) | [PDF](<https://openreview.net/pdf?id=HSVpmk76UW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153937>)

In this paper we introduce token time continuous diffusion \(TTCD\), a new diffusion language model which \{\\em \(a\)\} operates in continuous space, deterministically mapping Gaussian noise to a final token canvas with no further sampling, and crucially \{\\em \(b\)\} incorporates a new notion of per\-token times, with some tokens proceeding from noise to token at a faster rate than others\. Continuous space modeling helps TTCD avoid the parallel sampling of multiple tokens, which is a key source of inaccuracy at high speedups for models that iterate purely in discrete space\. The notion of per\-token times helps TTCD to better model conditional generation, allows for more sure tokens to proceed at a faster rate, and allows for differentiated inter\-token influences during refinement\. TTCD outperforms discrete models at high speedups\. We train a 160M parameter TTCD model on OpenWebText, and then self\-distill it; we find that at high speedups we are comparable in unconditional generation quality, and outperform in conditional generation, several existing models of similar size trained, on the same data, and self\-distilled\. We achieve similar gains in Sudoku solving as well\.

## Total Variation Rates for Riemannian Flow Matching

**Authors:** Yunrui Guan; Krishnakumar Balasubramanian; Shiqian Ma

**ID:** 152420 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TFfnvGlQ2C>) | [PDF](<https://openreview.net/pdf?id=TFfnvGlQ2C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152420>)

Riemannian flow matching \(RFM\) extends flow\-based generative modeling to data supported on manifolds by learning a time\-dependent tangent vector field whose flow\-ODE transports a simple base distribution to the data law\. We develop a nonasymptotic Total Variation \(TV\) convergence analysis for RFM samplers that use a learned vector field together with Euler discretization on manifolds\. Our key technical ingredient is a differential inequality governing the evolution of TV between two manifold ODE flows, which expresses the time\-derivative of TV through the divergence of the vector\-field mismatch and the score of the reference flow; controlling these terms requires establishing new bounds that explicitly account for parallel transport and curvature\. Under smoothness assumptions on the population and learned flow\-matching field, together with mean\-square approximation guarantees for the learned field, we obtain explicit bounds of the form $\\mathrm\{TV\}\\le C\_\{\\mathrm\{Lip\}\}\\,h \+ C\_\{\\varepsilon\}\\,\\varepsilon$, cleanly separating numerical discretization and learning errors\. Here, $h$ is the step\-size and $\\varepsilon$ is the target accuracy\. Instantiations yield \\emph\{explicit\} polynomial iteration complexities on the hypersphere $S^d$, and on the Hadamard manifolds \(for e\.g\., SPD manifolds\) under mild moment conditions\.

## TabDLM: Free\-Form Tabular Data Generation via Joint Numerical–Language Diffusion

**Authors:** Donghong Cai; Jiarui Feng; Yanbo Wang; Da Zheng; Yixin Chen; Muhan Zhang

**ID:** 155779 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2wkDrJJ6B1>) | [PDF](<https://openreview.net/pdf?id=2wkDrJJ6B1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155779>)

Synthetic tabular data generation has attracted growing attention due to its importance for data augmentation, foundation models, and privacy\. However, real\-world tabular datasets increasingly contain free\-form text fields \(e\.g\., reviews or clinical notes\) alongside structured numerical and categorical attributes\. Generating such heterogeneous tables with joint modeling of different modalities remains challenging\. Existing approaches broadly fall into two categories: diffusion\-based methods and LLM\-based methods\. Diffusion models can capture complex dependencies over numerical and categorical features in continuous or discrete spaces, but extending them to open\-ended text is nontrivial and often leads to degraded text quality\. In contrast, LLM\-based generators naturally produce fluent text, yet their discrete tokenization can distort precise or wide\-range numerical values, hindering accurate modeling of both numbers and language\. In this work, we propose TabDLM, a unified framework for free\-form tabular data generation via a joint numerical\-\-language diffusion model built on masked diffusion language models \(MDLMs\)\. TabDLM models textual and categorical features through masked diffusion, while modeling numerical features with a continuous diffusion process through learned specialized numeric tokens embedding; bidirectional attention then captures cross\-modality interactions within a single model\. Extensive experiments on diverse benchmarks demonstrate the effectiveness of TabDLM compared to strong diffusion\- and LLM\-based baselines\.

## BuresTomFlow: Bures\-Geometric Flow Matching for Posterior Quantum Tomography

**Authors:** Lu Wei; Yufeng Wang; Chenfeng Cao; Haibin Ling

**ID:** 148329 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yeWQkz9wHH>) | [PDF](<https://openreview.net/pdf?id=yeWQkz9wHH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148329>)

Finite\-shot quantum tomography often leaves a posterior over many density matrices compatible with the same measurement record, but fast reconstruction methods collapse this uncertainty to a single state\. We frame this setting as amortized posterior sampling and introduce BuresTomFlow, a measurement\-conditioned Flow Matching sampler for full\-rank density matrices\. The method transports base density matrices along Bures\-Wasserstein paths on the positive matrix cone, projects the path back to the trace\-one state space, and trains the velocity field with a Bures\-aligned tangent loss\. Thus the sampler is trained in the same fidelity\-based geometry used to judge posterior quality\. We evaluate BuresTomFlow in dense four\-qubit simulations with count, shadow, and mixed measurement records\. Against Cholesky, log\-density, and generic Riemannian Flow Matching controls at comparable learned\-sampler runtime, BuresTomFlow improves Bures distance, credible\-ball coverage, and held\-out observable prediction\. In the main comparison across multiple seeds, mean Bures distance decreases from $0\.618$ for the Cholesky baseline to $0\.367$ for BuresTomFlow, and mean coverage error decreases from $0\.203$ to $0\.100$\. These results show that the value of Bures geometry is not merely enforcing physical states, but producing calibrated posterior uncertainty when finite\-record tomography cannot be reduced to one reconstruction\.

## Unlearning Diffusion Policies via Relative Fisher Forgetting

**Authors:** Manuel Kelly; Yingxue Zhang; Fangzhou Lin; Yanhua Li; Xin Zhang

**ID:** 153227 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MpxEJi7gJL>) | [PDF](<https://openreview.net/pdf?id=MpxEJi7gJL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153227>)

As diffusion\-based offline reinforcement learning \(RL\) move closer to real deployment, it becomes critical to remove the influence of specific training data for privacy, safety, and regulatory compliance\.   Since retained data may overlap with or generalize from the forget data, strict retraining equivalence can be ill\-posed in offline RL\.  Existing unlearning methods are ineffective for diffusion policies, as training influence is dispersed across the denoising process and reinforced by critic values\. We introduce Relative Fisher Forgetting \(RFF\), the first principled framework for selective unlearning in diffusion\-based offline RL\.  RFF combines two asymmetric components:  critic\-side value suppression removes residual value incentives associated with the forget set, eliminating $Q$\-guidance pathways that would otherwise sustain forgotten behaviors; actor\-side relative\-Fisher updates attenuate forget\-set\-dominant parameter influence in the denoising policy, reducing behavioral regrowth\. To stabilize training, RFF alternates actor\-critic updates and employs gradient clipping and retain\-set regularization\.  Experiments on MuJoCo benchmarks show that RFF achieves the lowest identifiable forget\-set reliance among baselines while preserving retained performance, and remains over $12\\times$ more efficient than retraining\.  When undesired behaviors are primarily supported by the forget set, RFF additionally suppresses them without collateral degradation\.

## Policy\-DRIFT: Dynamic Reward\-Informed Flow Trajectory Steering

**Authors:** Atharva Mahajan; Abhijeet Yashwant Vishwasrao; Yuning Wang; Ricardo Vinuesa

**ID:** 154425 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dg4j2E3Vtz>) | [PDF](<https://openreview.net/pdf?id=Dg4j2E3Vtz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154425>)

Skin\-friction drag induced by wall\-bounded turbulent flows accounts for a substantial fraction of energy consumption across commercial aerospace, wind energy, and marine transport\. Its active reduction is one of the highest\-value targets in engineering fluid dynamics\. Deep reinforcement learning \(DRL\) has emerged as the leading approach for real\-time flow control, yet its performance ceiling is set not by algorithmic capability but by reward structure, the naive scalar objective does not optimally reflect the underlying physics\. Policy\-DRIFT bypasses this ceiling by relocating reward information from policy gradients to generative model inference: a conditional flow matching model \(CFM\) constructs a physically\-grounded manifold of realisable flow states spanning multiple control regimes, Terminal Reward Guidance \(TRG\) steers samples toward reward\-maximising targets at inference, and a lightweight DRL policy, structurally decoupled from reward quality, tracks these full\-field targets via root\-mean\-squared error \(RMSE\) minimisation\. The test case is turbulent channel flow simulated using direct numerical simulation \(DNS\) at friction Reynolds number of $\\mathrm\{Re\}\_\\\\tau = 180$, which is the canonical benchmark for wall\-bounded turbulence\. Policy\-DRIFT achieves $49\\\\%$ drag reduction approaching the theoretical upper bound, which is $\\\\approx 16\\\\%$ higher than the DRL benchmark, while consuming 37$\\\\times$ less actuation energy\. Our approach combines generative methods with active flow control, marking a paradigm shift towards controlling complex physical systems efficiently\.

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

## Conservation Laws for Diffusion Models

**Authors:** Ziv Aharoni; Henry Pfister

**ID:** 152592 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RxdFtImvkv>) | [PDF](<https://openreview.net/pdf?id=RxdFtImvkv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152592>)

While autoregressive models optimize the exact likelihood implied by the chain rule, diffusion models are typically trained with denoising objectives\.   We develop conservation laws based on generalized extrinsic information transfer \(GEXIT\) functions for a broad class of memoryless noise processes, showing that the data\-\-model cross\-entropy \(CE\) can be characterized \\emph\{exactly\} as an integral of \\emph\{local\} information\-theoretic derivatives along the noise path\.   This yields a unified characterization of the likelihood for discrete diffusion and continuous diffusion, with the Gaussian case reducing to the well\-known I\-MMSE relationship connecting mutual information and estimation theory\.   An immediate implication is a \\emph\{locality\} property: one can compute the information\-theoretic derivatives using only the marginal posteriors along the noise path\.   As a result, training reduces to learning the marginal posteriors by minimizing the negative log\-likelihood\.   While the conservation law implies that the entropy does not depend on the noise path, finite\-capacity denoisers approximate the posteriors with varying accuracy across noise types, leading to differences in performance\.   We validate these predictions on synthetic Markov sources and standard benchmarks, including \\texttt\{text8\} and CIFAR\-10\.

## Structured Masked Diffusion for Joint Multiuser Decoding

**Authors:** Taekyun Lee; Jiyoung Yun; Jeffrey Andrews; Hyeji Kim

**ID:** 153855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IE05uNcyaB>) | [PDF](<https://openreview.net/pdf?id=IE05uNcyaB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153855>)

In joint multiuser decoding, a receiver recovers a set of messages from a single noisy aggregate of many simultaneous transmissions\. Classical decoders rely on rule\-based mechanisms such as successive interference cancellation, joint belief propagation, or list recovery, all of which become brittle or expensive as ambiguity increases\.  We propose CIDER, a learned multiuser decoder with masked\-diffusion refinement steps\. CIDER uses demixing to prevent duplicate\-row collapse and uses parity\-aware propagation to provide soft guidance from the code constraints\. In higher\-load regimes, we further improve reliability via a lightweight quality\-guided remasking step that selectively re\-decodes low\-confidence sequences\. On commonly used error correcting codes, CIDER matches or improves on FFT\-accelerated joint belief propagation\-style decoding in symbol error rate while running more than $6\\times$ to over $100\\times$ faster, with the speedup widening as the blocklength grows\. Code is available at https://anonymous\.4open\.science/r/CIDER\_2026/\.

## When Latents Forget Pixels: Restoring Fidelity in Diffusion Transformer Super\-Resolution

**Authors:** Yu Shi; Yuyao Zhang; Yu\-Wing Tai

**ID:** 155544 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4kjrc7s8Le>) | [PDF](<https://openreview.net/pdf?id=4kjrc7s8Le>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155544>)

Image super\-resolution \(SR\) with large generative models has recently achieved remarkable perceptual quality, yet maintaining fidelity to the LR observation remains challenging\. In particular, we observe that diffusion transformers \(DiTs\) built on latent representations suffer from a critical limitation: the compression bottleneck of the VAE weakens fine\-grained spatial information, leading to hallucinated details that are weakly grounded in the input image\. In this work, we revisit generative SR from a representation perspective and propose a pixel\-grounded super\-resolution \(PGSR\) framework that preserves LR\-observed pixel evidence before VAE compression and reuses it throughout restoration\. Instead of relying solely on the compressed latent condition, PGSR extracts pre\-VAE pixel evidence from the upsampled LR image and reuses it at two stages\. First, Condition\-Side Trajectory Guidance fuses LR\-derived pixel evidence with the latent LR condition to guide the latent restoration trajectory\. Second, Decoder\-Side Pixel Grounding injects multi\-scale pixel features into the frozen VAE decoder to ground the final rendering with LR\-observed cues\. To efficiently adapt large pretrained DiT models, we keep the latent autoencoder and main flow\-matching backbone frozen, and train only lightweight restoration modules\. We further study an efficient local\-window attention variant for improved high\-resolution efficiency and scalability\. Extensive experiments demonstrate that PGSR improves the realism\-\-fidelity trade\-off and produces more faithful, visually convincing results than existing latent generative SR approaches\.

## TabWorld: A World\-Modeling Foundation Model for Tabular Generation

**Authors:** Xiaofeng Lin; Chunhe Wang; Tung Sum Thomas Kwok; Guang Cheng

**ID:** 150304 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j8Vn2ZHt0f>) | [PDF](<https://openreview.net/pdf?id=j8Vn2ZHt0f>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150304>)

Tabular foundation models \(TFMs\) are promising for learning reusable priors for heterogeneous tables in low\-data regimes\. Yet most TFMs are trained to predict labels or reproduce passively observed rows\. In small downstream tables, these observational objectives can rely on noisy empirical correlations rather than infer a table\-level structure that supports coherent generation and adaptation\. We propose \*\*TabWorld\*\*, a world\-model\-inspired generative TFM that learns a table\-adaptive simulator: from support rows and a query context, it generates full rows and, when a structural causal model \(SCM\) action is supplied, predicts structured action responses\. TabWorld combines observational diffusion training on real tables with query\-conditioned world\-model supervision, using real tables for support\-conditioned completion and synthetic SCMs for oracle pre/post\-action labels unavailable in ordinary observational data\. Across unseen\-table generation, completion, low\-data adaptation, and SCM intervention diagnostics, TabWorld improves post\-adaptation fidelity, utility, and SCM intervention\-diagnostic behavior over observational\-only baselines\.

## SARA: Step\-Adaptive Rank Adjustment for Diffusion Inference Acceleration

**Authors:** DongHoon Lim; Jinwoo Jung; Won\-Gook Choi; Joon\-Hyuk Chang

**ID:** 151173 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cRkKhecFAQ>) | [PDF](<https://openreview.net/pdf?id=cRkKhecFAQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151173>)

Diffusion models achieve strong performance across image and audio synthesis, but their inference remains computationally expensive, requiring tens to hundreds of sequential evaluations of a large denoising network\. We observe that the effective rank of the denoiser output varies sharply across timesteps and architectures, motivating step\- and block\-wise adaptation of computation\. We propose Step\-Adaptive Rank Adjustment \(SARA\), a training\-free framework that treats the SVD rank of pretrained linear layers as an inference\-time control variable, adapted per step and block by SARA\-DP and per step by SARA\-Online\. SARA introduces the Low\-Rank Approximation Error \(LRAE\) — the discrepancy a rank\-r truncation induces against the full\-rank network — and instantiates it in two algorithms: SARA\-DP measures LRAE on a few warmup prompts and solves the globally optimal rank assignment under a MACs budget by dynamic programming; SARA\-Online computes a closed\-form, spectrum\-based LRAE from the model output at inference time, requiring no calibration and no trajectory lookahead\. SARA applies uniformly to UNet \(SDXL\), MMDiT \(SD3\), DiT \(Stable Audio Open\), and hybrid MMDiT/DiT \(TangoFlux\) backbones, spanning ϵ, v, and rectified\-flow parameterizations\. SARA combines with existing solver\- and cache\-axis acceleration to yield compounded wall\-clock speedups in our experiments\. Together, these results introduce rank as a new axis of diffusion inference acceleration\.

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

## MiCo: Microstructure\-Consistent Flow Matching for Diffusion MRI Angular Super\-Resolution

**Authors:** Zhixuan Zhou; Tingting Dan; Guorong Wu

**ID:** 148957 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tty64RLmO2>) | [PDF](<https://openreview.net/pdf?id=tty64RLmO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148957>)

Diffusion\-weighted MRI \(dMRI\) requires densely sampling $q$\-space across many directions and shells, leading to long scan times that limit clinical use\. Angular super\-resolution \(ASR\) recovers a dense signal from a sparse acquisition, enabling substantially shorter scans\. We propose a physics\-guided flow matching framework for ASR built on a basic fact about dMRI: under the cumulant expansion, the diffusion signal naturally splits into a known linear function of the $q$\-vectors plus a residual carrying higher\-order angular detail\. We exploit this twice\. First, we initialize the flow from a closed\-form dense DTI estimate, recasting ASR as residual flow matching from a physically meaningful starting point rather than uninformative noise\. Second, we impose a microstructure\-consistency loss, rooted in the physical principle that any two diffusion\-weighted signals from the same voxel must be explained by a single underlying set of microstructural parameters\. Together, these designs anchor predictions wherever the acquisition is informative while leaving the learned prior to model crossing\-fiber and higher\-order angular detail\. On the Human Connectome Project \(HCP\-YA\) and UK Biobank, our method matches or surpasses analytical baselines and recent deep learning methods on signal reconstruction, kurtosis scalar maps, and fiber\-orientation reconstruction under aggressive subsampling\.

## Fine\-Tuning Improves Information Conveyance in Language Models

**Authors:** Yuwei Cheng; Weiyi Tian; Haifeng Xu

**ID:** 152334 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TqEugPEDx7>) | [PDF](<https://openreview.net/pdf?id=TqEugPEDx7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152334>)

Fine\-tuning is often believed to reduce uncertainty and diversity in large language models, but existing analyses overlook output length, a key confounder, and therefore fail to capture how uncertainty is distributed across an entire generation rollout\. To address this, we propose Canopy Entropy \($\\mathrm\{CE\}^\\star$\), a measure that views language generation from a tree perspective, where "canopy" represents the space of all possible rollouts, making $\\mathrm\{CE\}^\\star$ naturally quantify the effective size of the generation space\. $\\mathrm\{CE\}^\\star$ jointly captures the output length $N$ and the generated sequence $Y\_\{1:N\}$, and we show that it equals to total Shannon entropy $H\(N, Y\_\{1:N\}\\mid X\)$, where $X$ denotes the prompt\. This formulation yields interpretable metrics, including a length\-\-uncertainty correlation term $\\rho\(N, r\_N\)$, where $r\_N$ is the entropy rate, quantifying information conveyance efficiency by indicating whether longer outputs are more or less informative per token\. Empirically, across tasks and model families, we find that fine\-tuned models consistently exhibit stronger positive correlation $\\rho\(N, r\_N\)$, even when total entropy decreases\. Furthermore, after controlling for model family, task, prompt, and output\-length effects, we find that fine\-tuning nearly triples the strength of the relationship between entropy rate and semantic diversity, suggesting that aligned models convert uncertainty into semantically meaningful variation much more efficiently\. Overall, these results suggest that fine\-tuning does not simply reduce uncertainty, but fundamentally reorganizes it into more informative and semantically meaningful generations\.

## Panoptic Scene Program Diffusion Transformer

**Authors:** Chika Maduabuchi

**ID:** 150762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fagdsZ9hps>) | [PDF](<https://openreview.net/pdf?id=fagdsZ9hps>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150762>)

Modern text\-to\-image models produce high\-fidelity images but still struggle with compositional prompts that require instance identity, attribute ownership, counting, spatial ordering, and role\-sensitive relations\. We introduce \*Panoptic Scene Program Diffusion Transformer\* \(PSP\-DiT\), a diffusion\-transformer architecture that treats a panoptic scene program as a first\-class latent variable rather than an external control signal or post\-hoc parse\. PSP\-DiT jointly denoises image latents and scene\-program latents through coupled transformer streams, while panoptic grounding and cycle\-consistency objectives tie object instances, attributes, relations, and counts to visual support in the generated image\. Under matched training and inference settings, PSP\-DiT improves over a strong flat\-text baseline across GenEval 2, SANEval\-Simple, PSG\-Score, and DetailMaster, with the largest gains on counting, attribute binding, role\-sensitive relations, and long structured prompts\. The method preserves image quality, adds modest inference overhead, and remains robust to imperfect scene programs\.

## Reading Positional Coupling in Transformers with Diffusion Scores

**Authors:** Savik Kinger; Johannes Bertram; Luciano Dyballa; Andy Keller; Steven W Zucker

**ID:** 155989 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1M7mberl5b>) | [PDF](<https://openreview.net/pdf?id=1M7mberl5b>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155989>)

Understanding how transformers encode position and context is central to interpreting their behavior, because it determines how information flows across tokens and shapes the model's predictions\. Common tools, such as linear probes and attribution methods, operate on single\-position activations and are not designed to capture cross\-position dependencies\. We introduce Score\-Block Token Geometry \(SBTG\), a score\-based diagnostic that recovers cross\-position dependency structure from activations and reveals distinct signatures of positional encoding mechanisms that these methods do not expose\. SBTG trains a denoising score model on windows of activations and constructs lag\-indexed operators that quantify coupling between positions within a layer\. Applied to transformers with different positional encodings, it recovers distinct coupling signatures consistent with their architectures: ALiBi exhibits near rank\-one coupling in early layers, RoPE distributes coupling across directions in patterns consistent with its rotation frequencies, and absolute embeddings show the strongest position\-specific variation\. We show that these signatures are stable across seeds and model sizes, and the activation\-space directions identified by SBTG are causally relevant: ablating them causes larger performance drops on tasks that require reasoning over relative positions than on tasks that depend on absolute position signals\. These results show that joint activation structure provides a lens on how positional encoding mechanisms are realized, revealing differences in how models use cross\-position dependencies that are not apparent from the architecture alone\.

