# Applications / Physics

应用 / 物理学

141 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Flow Annealing Posterior Sampling for Function\-Space Regression and Inverse Problems

**Authors:** Yaozhong Shi; Zachary Ross; Yisong Yue

**ID:** 148653 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8ebg6EwVu>) | [PDF](<https://openreview.net/pdf?id=w8ebg6EwVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148653>)

Principled regression for stochastic processes is a long\-standing challenge with deep connections to scientific inverse problems\. We introduce Flow Annealing Posterior Sampling \(FAPS\), to our knowledge the first function\-space posterior sampling framework that unifies stochastic\-process regression and PDE inverse problems\. Built on pretrained function\-space flow\-matching priors, FAPS enables likelihood\-guided posterior inference from sparse and noisy observations, supports variable query discretizations, and avoids explicit prior\-density evaluation\. Its Langevin correction uses a low\-rank covariance preconditioner to exploit dominant function\-space correlations across discretizations\. Across Gaussian and non\-Gaussian stochastic\-process regression benchmarks and diverse PDE inverse problems, FAPS produces coherent posterior samples with accurate uncertainty quantification, significantly outperforming existing functional regression baselines while remaining computationally efficient\.

## GAIA: Geometry\-Adaptive Operator Learning for Forward and Inverse Problems

**Authors:** Meenakshi Krishnan; Pranav Pulijala; Ke Chen; Haizhao Yang; Ramani Duraiswami

**ID:** 149536 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pPxfTs1tZU>) | [PDF](<https://openreview.net/pdf?id=pPxfTs1tZU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149536>)

Operator learning for partial differential equations \(PDEs\) on arbitrary geometries builds fast neural surrogates for large\-scale simulation\. Although recent geometry\-adaptive neural operators have made substantial progress, they are mainly designed for forward problems in which inputs and outputs share the same spatial domain\. This limits their applicability for boundary value problems \(BVPs\) and inverse problems, where inputs and outputs may live on different domains\. We introduce the Geometry\-Adaptive Integral Autoencoder \(GAIA\), an operator learning model that encodes the domain boundary and the interior field distribution into geometry tokens, and conditions integral transform layers on these tokens via cross\-attention, allowing the kernel to adapt locally to geometric features\. This yields a single architecture for forward \(including BVPs\) and inverse problems on arbitrary domains in one pass, without retraining, iterative optimization, or graph construction\. We evaluate GAIA on seven 2D and 3D benchmarks, four of which are new or substantially extended benchmarks for inverse problems and BVP: electrical impedance tomography, optical tomography, 3D Darcy flow on varying geometries, and a modified setting of Poisson BVP on mechanical components benchmark \(MCB\)\. GAIA sets new state\-of\-the\-art results on every inverse and BVP task, reducing median relative $L^2$ error by 64\\% on airfoil flow reconstruction and 27\\% on EIT relative to the next best amortized method, and outperforming all baselines on every shape category of MCB\. On other forward problems, GAIA is competitive with specialized solvers while maintaining stable accuracy across point resolutions on which transformer\-based baselines degrade\.

## SAFE\-SVD: Sensitivity\-Aware Fidelity\-Enforcing SVD for Physics Foundation Models

**Authors:** Chengjie Hong; Feixiang He; Yiheng Zeng; Lulu Kang; He Wang

**ID:** 152701 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R2w60GCpGv>) | [PDF](<https://openreview.net/pdf?id=R2w60GCpGv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152701>)

We propose a new method for compressing physics foundation models \(PFMs\) which is a new trend in AI for Science\. While model compression is essential for reducing memory use and accelerating inference in large foundation models, it remains under\-explored for PFMs, where preserving physical fidelity is crucial\. The challenge lies in the functional nature of physics data, where partial derivatives encode spatiotemporal dynamics and exhibit high sensitivity to compression\. Conventional compression methods ignore this structure, often causing severe performance degradation or failure\. To address this, we introduce a sensitivity\-aware fidelity\-enforcing compression framework that explicitly models loss\-aware layer sensitivity in the output function space during compression\. This provides a new route to compressing scientific foundation models while preserving accuracy and physical fidelity\. Experiments show substantial gains over existing methods across multiple models and datasets, achieving significantly higher compression ratios while maintaining accuracy, in some cases by orders of magnitude\. More broadly, the work potentially leads to a new subfield of efficient, deployable, and sustainable scientific foundation models in AI for Science\.

## InfCoiL: Coordinated Planner\-Controller Learning for Closed\-Loop Physics\-Based Human\-Object Interaction

**Authors:** Yude Zou; Yifei Yao; Yiwei Hao; Hanqing Wang; Xing Gao

**ID:** 152598 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RvZ2OxrgcE>) | [PDF](<https://openreview.net/pdf?id=RvZ2OxrgcE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152598>)

Text\- and goal\-conditioned human\-object interaction \(HOI\) provides an intuitive interface for specifying high\-level intents in controllable character animation and embodied AI\. Mapping such intents to physically plausible, contact\-rich behaviors naturally requires hierarchical planning and control, yet existing planner\-controller systems remain largely open\-loop and lack adaptation to physical execution feedback\. To address this, we present InfCoiL, a closed\-loop framework for physics\-based HOI from coordinated planner\-controller learning\. InfCoiL integrates a morphology\-aware flow\-matching planner with a unified multi\-morphology controller in an autoregressive plan\-and\-execute loop, enabling diverse, controllable, and executable interactions across diverse objects and morphologies of humanoid embodiments\. To further mitigate planner\-controller distribution shift, we alternatively fine\-tune both components under closed\-loop reinforcement learning\. Particularly, we introduce Semantic Flow\-GRPO, which optimizes the flow\-matching HOI planner with semantic covariance over heterogeneous HOI features and group\-relative rewards from physical rollouts, while training the controller for reliable execution under contact\-rich dynamics\.  Extensive experiments demonstrate that InfCoiL achieves state\-of\-the\-art performance in both motion quality and task success\. The code will be released upon acceptance\.

## Unsupervised Physics Informed Decomposition of Incomplete Time\-Resolved Spectroscopy

**Authors:** Tom Muir; Qifeng Liu; Mohammadrahim Kazemzadeh; William Mills; Ales Leonardis; Huabing Yin; Alexander Krull

**ID:** 154646 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C4YjfEPhRx>) | [PDF](<https://openreview.net/pdf?id=C4YjfEPhRx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154646>)

Raman spectroscopy is often hindered by strong autofluorescence backgrounds, which are typically handled by waiting for fluorescence to bleach before recording the Raman spectrum\.  Here, we instead show that short, incomplete recordings of the bleaching process already contain enough information to recover the underlying Raman signal\. We present the first unsupervised model that operates on short, incomplete, variable\-length sequences of time\-resolved spectra, decomposing them into Raman spectra and autofluorescence components while simultaneously removing measurement noise\. Our VAE\-based method simultaneously learns \(i\) a bank of fluorophore spectra comprising the baseline, \(ii\) a model of the measurement noise, and \(iii\) the distribution of Raman spectra and decay behavior\. We evaluate our method on spectral reconstruction and downstream peak detection, where it outperforms state\-of\-the\-art approaches on multiple simulated benchmarks as well as on a newly collected real\-world dataset of spectral time series\.  We further show that fluorescence decay dynamics themselves contain discriminative information that may be exploited in future work\.

## QDMouse4M: A Multi\-View 3D Mouse Spontaneous Behavior Dataset with Quantum\-Dot Markers

**Authors:** Jingyang Ke; Amartya Pradhan; Xueling Zhang; Weihan Li; Anqi Wu; Jeffrey Markowitz

**ID:** 139136 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iqKjTucgKn>) | [PDF](<https://openreview.net/pdf?id=iqKjTucgKn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139136>)

Quantitative analysis of animal behavior in neuroscience increasingly relies on accurate 3D pose, yet current large\-scale mouse datasets are restricted to top\-down views and suffer from occlusion and keypoint ambiguity\. We introduce QDMouse4M, a six\-view dataset of freely moving mice with physically grounded 2D and 3D keypoint annotations obtained from subdermal quantum\-dot fluorescence markers\. QDMouse4M contains over four million reflectance frames with matched fluorescence frames, 2D and 3D pose trajectories and behavior classifications\. We use the dataset to evaluate markerless 2D and 3D pose estimation with SLEAP and Lightning Pose 3D across training\-set sizes, backbones, and in\-session/out\-of\-session splits\. We further show that the released trajectories support downstream spontaneous\-behavior analysis with Keypoint\-MoSeq and stride\-level gait measurements\. QDMouse4M provides a benchmark\-scale, physically grounded resource for developing and evaluating pose estimation, behavior understanding, and biomechanics models under realistic dark\-environment laboratory conditions\.

## Symplectic Reck: In\-Situ Learning of Gaussian Quantum Operations

**Authors:** Janet Zhong; Renwen Yu; Charles Roques\-Carmes; Paul\-Alexis MOR; Aviv Karnieli; David A B Miller; Shanhui Fan

**ID:** 155752 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3D1FOQzmRY>) | [PDF](<https://openreview.net/pdf?id=3D1FOQzmRY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155752>)

Programmable photonic circuits are a natural platform for physical learning, where the learned computation is performed by the hardware itself rather than by a digital model\. We propose a physical learning algorithm and architecture for continuous\-variable quantum systems where a photonic circuit is configured in situ to invert an unknown lossless Gaussian quantum operation\. Our contributions are threefold\. \(i\) Theory: we prove that generic $S \\in \\mathrm\{Sp\}\(2 N, \\mathbb\{R\}\)$ admits a triangular decomposition into two\-mode and single\-mode symplectic gates\. \(ii\) Architecture: we introduce the symplectic Reck mesh, a triangular array of two\-mode symplectic gates that physically realizes this factorization, generalizing the unitary Reck mesh widely used in optical neural networks\. \(iii\) Physical learning: when placed after an unknown Gaussian unitary, the mesh is trained in situ by nulling local response blocks one at a time using simple optical probes and measurements\. We identify a measure that predicts when training becomes hard and numerically demonstrate finite\-shot training and robustness to gate errors\. Our work extends self\-configuring optical networks from unitary to symplectic transformations, bringing physical learning to continuous\-variable quantum photonic hardware\.

## One More Time: Revisiting Neural Quantum States from a Reinforcement Learning Perspective

**Authors:** Juan Duque; Sergio García Heredia; Vinicius Hernandes; Eliska Greplova; Thomas Spriggs; Aaron Courville; Anna Dawid

**ID:** 154314 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EaMqs3Vxzg>) | [PDF](<https://openreview.net/pdf?id=EaMqs3Vxzg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154314>)

Neural quantum states \(NQS\) provides a flexible and scalable framework for approximating quantum many\-body wavefunctions\. Among NQS parameterizations, autoregressive models are especially attractive because they enable exact, independent sampling from the Born distribution, avoiding the autocorrelation and mixing issues of Markov\-chain methods\. Yet their optimization remains comparatively underexplored: Adam is a scalable method but ignores function space geometry, while stochastic reconfiguration is principled but costly and numerically fragile in large models\. To address this gap, we show that variational energy minimization can be viewed as an advantage policy\-gradient problem over the Born distribution, motivating trust\-region optimization for NQS training\. We introduce Proximal Wavefunction Optimization \(PWO\), a trust\-region algorithm that clips probability\-ratio changes in the amplitude channel and wrapped phase increments in the phase channel\. PWO avoids explicit matrix inversion, reuses samples across inner updates, and preserves the scalability of first\-order optimization\. Across Ising, Heisenberg, and frustrated $J\_1$\-\-$J\_2$ spin chains, PWO improves stability and wall\-clock convergence over Adam, minSR, and SPRING\. Finally, we fine\-tune a $1\.5$B\-parameter RWKV\-7 model as a neural quantum state, demonstrating NQS optimization at a scale over three orders of magnitude beyond prior work\.

## Sparsely\-Supervised Data Assimilation via Physics\-Informed Schrödinger Bridge

**Authors:** Dohyun Bu; Chanho Kim; Seokun Choi; Jong\-Seok Lee

**ID:** 155316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WETopIg2t>) | [PDF](<https://openreview.net/pdf?id=6WETopIg2t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155316>)

Data assimilation \(DA\) for systems governed by partial differential equations \(PDE\) aims to reconstruct full spatiotemporal fields from sparse high\-fidelity \(HF\) observations while respecting physical constraints\. While full\-grid low\-fidelity \(LF\) simulations provide informative priors in multi\-fidelity settings, recovering an HF field consistent with both sparse observations and the governing PDE typically requires per\-instance test\-time optimization, which becomes a major bottleneck in time\-critical applications\. To alleviate this, amortized reconstruction using generative models has recently been proposed; however, such approaches rely on full\-field HF supervision during training, which is often impractical in real\-world settings\. From a more realistic perspective, we propose the \*Physics\-Informed Conditional Schrödinger Bridge\* \(\*\*PICSB\*\*\), which transports an informative LF prior toward an auxiliary\-energy\-defined, observation\-conditioned HF endpoint law without any additional inference\-time guidance\. To enable learning without HF endpoints, \*\*PICSB\*\* employs an iterative surrogate\-endpoint refresh scheme, and directly incorporates PDE residuals into the training objective while enforcing observations via hard conditioning throughout sampling\. Experiments on fluid PDE benchmarks demonstrate that \*\*PICSB\*\* enables extremely fast spatiotemporal field reconstruction while achieving strong accuracy under sparse HF supervision\.

## Precision\-Pyramid: Towards real\-time neural decoding for fault\-tolerant quantum computing

**Authors:** Zhenhao Zhong; Ge Yan; SHANCHUAN LI; pengyue ma; Yuxuan Du

**ID:** 155454 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5TiPghU8Xg>) | [PDF](<https://openreview.net/pdf?id=5TiPghU8Xg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155454>)

Real\-time quantum error correction \(QEC\) is a critical bottleneck for fault\-tolerant quantum computing due to strict hardware latency constraints\. While neural decoders achieve state\-of\-the\-art logical accuracy, their reliance on high\-precision, compute\-intensive inference precludes real\-time deployment\. Conversely, uniformly quantizing these models to extreme low\-bit regimes for FPGAs triggers a catastrophic collapse in decoding accuracy\. To overcome this precision\-accuracy bottleneck, we propose Precision Pyramid \($\\mathsf\{PP\}$\), a hardware\-algorithm co\-designed neural decoder applicable to both surface and BB codes\. $\\mathsf\{PP\}$ features a monotonically escalating activation precision hierarchy built upon a globally weight\-binarized \(W1\) foundation\. By scaling intermediate activations down to INT2 for the massive perception stages and reserving higher precision strictly for the lightweight final logical decision, this hierarchy effectively shifts over $99\\%$ of the computational workload to abundant FPGA look\-up tables\. Comprehensive evaluations on both simulated and hardware\-calibrated noise data demonstrate that $\\mathsf\{PP\}$ consistently suppresses logical errors below highly optimized classical baselines \(e\.g\., MWPM and Relay\-BP\) while seamlessly satisfying stringent sub\-microsecond latency budgets\.

## Inpainting physics: self\-supervised learning for context\-driven fluid simulation

**Authors:** Jonas Weidner; Yeray Martin\-Ruisanchez; Daniel Rueckert; Benedikt Wiestler; Julian Suk

**ID:** 155045 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8rpCiIZ22W>) | [PDF](<https://openreview.net/pdf?id=8rpCiIZ22W>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155045>)

Neural surrogate models for computational fluid dynamics \(CFD\) are typically trained as forward operators that map explicit problem specifications, such as geometry and boundary conditions, to solution fields\. This ties the model to the conditioning variables seen during training and limits reuse under boundary\-condition shifts or local geometry changes\. We propose to reformulate steady CFD inference as an inpainting problem: instead of training on explicit boundary conditions, we learn a self\-supervised prior over velocity fields and impose boundary constraints only during inference by fixing known regions such as inlet, outlet or unchanged regions from previous simulations\. To scale this idea to large 3D meshes, we introduce a local neighbourhood tokeniser that represents high\-resolution velocity fields as compact spatial latent tokens and train latent flow\-matching and masked\-autoencoder models on these tokens\. On intracranial aneurysm hemodynamics, our method reconstructs full velocity fields from sparse boundary context, outperforms supervised neural surrogates under boundary\-condition and dataset shift and enables local geometry editing by reusing unchanged simulation context\. These results suggest that viewing CFD inference as context\-conditioned inpainting can turn neural surrogates from task\-specific predictors into reusable flow priors\.

## Quantum Safe Stochastic Linear Bandits

**Authors:** Ruizhe Zhang; Junyi Wu; Guang Lin

**ID:** 148669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w0Ou0Qeg5H>) | [PDF](<https://openreview.net/pdf?id=w0Ou0Qeg5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148669>)

We initiate the study of safe stochastic linear bandits under quantum feedback models\.  The learner must maximize an unknown linear reward while satisfying unknown linear constraints at every interaction\.  Under coherent unitary access to the joint reward\-and\-constraint distribution, we develop QRS\-COLTS, a staged quantum analog of constrained linear Thompson sampling\.  With high probability, QRS\-COLTS plays only feasible actions and achieves regret polylogarithmic in the quantum query budget; an isotropic multivariate estimator reduces the vector\-feedback cost from linear to square\-root dependence on the number of constraints, up to logarithmic factors\.  We also formulate a stronger query\-weighted coherent\-exploration model with a safe\-action bomb flag\.  In this model, the learner may query action superpositions, the bomb provides exact but dangerous safe\-set access, and regret is charged by the action weights in the query state\.  We present a quantum algorithm, BCO\-QLinTS, that uses bomb\-certified quantum convex optimization to select safe actions directly, thereby avoiding the need to estimate the constraint matrix\.  Its query\-weighted regret is polylogarithmic in the horizon, with a bomb\-safe optimization overhead that depends only polynomially on the number of constraints\.

## Adaptive multiscale operator correction via learned spectral subspace and physics\-informed optimization\.

**Authors:** Subham Patel; Himanshu Pandey; RATIKANTA BEHERA

**ID:** 149265 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rbb6tqGnFf>) | [PDF](<https://openreview.net/pdf?id=rbb6tqGnFf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149265>)

Neural operators have shown strong performance in learning solution mappings for differential equations and offer fast inference across parameter spaces\. However, they often suffer from spectral bias, leading to poor resolution of high\-frequency and localized features, especially in out\-of\-distribution settings\. In this work, we propose adaptive multiscale operator correction \(AMOC\), a hybrid framework that combines neural operator learning with physics\-constrained optimization in a low\-dimensional, instance\-specific adaptive spectral subspace\. First, a neural operator learns a coarse solution, which is then projected onto a sparse multiscale basis using either wavelet family or Fourier modes, where dominant components are selected based on energy\. Finally, a physics\-informed optimization is performed on adaptive spectral subspace, significantly lowering computational cost while improving accuracy\. The proposed approach enables efficient correction of neural operator predictions by leveraging the sparsity and localization of multiscale representations, while bypassing automatic differentiation in the residual loss through closed\-form derivatives of the chosen basis\. The proposed AMOC is evaluated on the heat, Poisson, Darcy, and Helmholtz equations, achieving up to four orders\-of\-magnitude error reduction over FNO, with particularly strong gains observed in challenging out\-of\-distribution regimes\.

## $PAS^2$: Physics\-Anchored Spectral Reasoning for Air Quality Forecasting

**Authors:** Haofeng Ying; Wenbin Lu; Wenxin Shen; Junnan Xu; Jianwei Zheng

**ID:** 148682 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vqRvL96UZ4>) | [PDF](<https://openreview.net/pdf?id=vqRvL96UZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148682>)

Given the profound impacts on human health and ecosystems, air pollution necessitates robust quality prediction to inform policy\-making\. Traditional physics\-based forecasting relies on idealized closed\-system assumptions, whereas data\-driven approaches often lack interpretability\. Recent hybrid methods, however, neglect data homogeneity, resulting in redundancy, parameter inefficiency, and gradient conflicts\. Moreover, high\-concentration regions inherently exhibit drastic fluctuations, making it difficult to explicitly distinguish them from the overall pollution field, especially when using spatial information alone\. To address these limitations, a Physics\-Anchored Spatial\-Spectral \($PAS^2$\) paradigm is proposed\. Specifically, a collaboration scheme is firstly elaborated, within which a physical estimator captures deterministic trends, anchoring the neural branch’s input space and directing it to learn complementary fluctuations\. Building on this, we equip the neural branch with a Spatial–Spectral \($S^2$\) Reasoner that integrates graph operators to model local spatial diffusion and spectral operators to explicitly capture the drastic fluctuations in high\-concentration regions\. Experiments on real\-world datasets show that $PAS^2$ consistently improves over strong data\-driven and physics\-guided baselines, especially under volatile sudden\-change scenarios\. Codes are attached and will be released at GitHub\.

## Axiomatic World Modeling for Physics Reasoning

**Authors:** Xinye Yang; Zhenyang Liu; Yuxuan Wang; Yuanyuan Lei

**ID:** 150823 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f21HhDeBNh>) | [PDF](<https://openreview.net/pdf?id=f21HhDeBNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150823>)

Recent research\-level physics\-reasoning benchmarks for LLMs reveal a failure mode that lies not in knowledge or execution, but in modeling the world being reasoned about\. When faced with unseen problem setups, models often silently alter given quantities, fabricate laws, or inject unstated assumptions to force the problem into familiar patterns, and subsequent reasoning then proceeds within this corrupted world\. We define this premise\-level divergence as modeling drift: the gap between a model's internal axiomatic world model \(AWM\) and the true physical world specified in the problem\. Although RLVR and PRM have yielded substantial gains in mathematics and code, their reward shapes do not directly supervise world modeling in axiomatic domains such as physics\. We propose Reinforcement Learning with Axiomatic World Modeling \(RLAWM\), which optimizes the policy by penalizing divergence between its inferred axiomatic world model and the true physics world\. RLAWM probes physics reasoning at two hierarchical levels \(modeling and solving\), each scored by a physically grounded reward\. The modeling reward targets abstract knowledge formulation, evaluating whether the model captures the true axiomatic world before attempting calculation\. The solving reward targets instantiated knowledge reasoning, checking whether the model's concrete derivation remains consistent with the axiomatic world\. This two\-level structure separates what world the model believes it is reasoning in from how it reasons within that world\. The framework operates exclusively during training, with no extra cost during inference\. RLAWM improves performance by up to $\+10\.8$ points on PhysReason and $\+5\.2$ on PHYSICS over the baseline\. RLAWM also exhibits strong zero\-shot generalization, yielding a $2\.45\{\\times\}$ gain over the strongest baseline on unseen physics problems\.

## PolarScale: A Physics\-Grounded Benchmark for Radiometrically Consistent RGB\-to\-Stokes Estimation

**Authors:** Beibei Lin; Tingting Chen; Xin Zhang; Wenhao Zhao; DONGJUN LI; Zifeng Yuan

**ID:** 139738 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7IsIlT8OJF>) | [PDF](<https://openreview.net/pdf?id=7IsIlT8OJF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139738>)

_Abstract unavailable from the accessible public sources._

## FlowBatt: Flow Matching for Probabilistic Battery Degradation Prediction

**Authors:** Hamidreza Eivazi; Eslam Sharaawy; Stefan Wittek; André Hebenbrock; Raphael Ginster; Steffen Blömeke

**ID:** 151881 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XCVKzG7HD6>) | [PDF](<https://openreview.net/pdf?id=XCVKzG7HD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151881>)

_Abstract unavailable from the accessible public sources._

## Quantum Safe Stochastic Linear Bandits

**Authors:** Ruizhe Zhang; Junyi Wu; Guang Lin

**ID:** 148669\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148669

[Paper](<https://openreview.net/forum?id=w0Ou0Qeg5H>) | [PDF](<https://openreview.net/pdf?id=w0Ou0Qeg5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148669>)

We initiate the study of safe stochastic linear bandits under quantum feedback models\.  The learner must maximize an unknown linear reward while satisfying unknown linear constraints at every interaction\.  Under coherent unitary access to the joint reward\-and\-constraint distribution, we develop QRS\-COLTS, a staged quantum analog of constrained linear Thompson sampling\.  With high probability, QRS\-COLTS plays only feasible actions and achieves regret polylogarithmic in the quantum query budget; an isotropic multivariate estimator reduces the vector\-feedback cost from linear to square\-root dependence on the number of constraints, up to logarithmic factors\.  We also formulate a stronger query\-weighted coherent\-exploration model with a safe\-action bomb flag\.  In this model, the learner may query action superpositions, the bomb provides exact but dangerous safe\-set access, and regret is charged by the action weights in the query state\.  We present a quantum algorithm, BCO\-QLinTS, that uses bomb\-certified quantum convex optimization to select safe actions directly, thereby avoiding the need to estimate the constraint matrix\.  Its query\-weighted regret is polylogarithmic in the horizon, with a bomb\-safe optimization overhead that depends only polynomially on the number of constraints\.

## Adaptive multiscale operator correction via learned spectral subspace and physics\-informed optimization\.

**Authors:** Subham Patel; Himanshu Pandey; RATIKANTA BEHERA

**ID:** 149265\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149265

[Paper](<https://openreview.net/forum?id=rbb6tqGnFf>) | [PDF](<https://openreview.net/pdf?id=rbb6tqGnFf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149265>)

Neural operators have shown strong performance in learning solution mappings for differential equations and offer fast inference across parameter spaces\. However, they often suffer from spectral bias, leading to poor resolution of high\-frequency and localized features, especially in out\-of\-distribution settings\. In this work, we propose adaptive multiscale operator correction \(AMOC\), a hybrid framework that combines neural operator learning with physics\-constrained optimization in a low\-dimensional, instance\-specific adaptive spectral subspace\. First, a neural operator learns a coarse solution, which is then projected onto a sparse multiscale basis using either wavelet family or Fourier modes, where dominant components are selected based on energy\. Finally, a physics\-informed optimization is performed on adaptive spectral subspace, significantly lowering computational cost while improving accuracy\. The proposed approach enables efficient correction of neural operator predictions by leveraging the sparsity and localization of multiscale representations, while bypassing automatic differentiation in the residual loss through closed\-form derivatives of the chosen basis\. The proposed AMOC is evaluated on the heat, Poisson, Darcy, and Helmholtz equations, achieving up to four orders\-of\-magnitude error reduction over FNO, with particularly strong gains observed in challenging out\-of\-distribution regimes\.

## $PAS^2$: Physics\-Anchored Spectral Reasoning for Air Quality Forecasting

**Authors:** Haofeng Ying; Wenbin Lu; Wenxin Shen; Junnan Xu; Jianwei Zheng

**ID:** 148682\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148682

[Paper](<https://openreview.net/forum?id=vqRvL96UZ4>) | [PDF](<https://openreview.net/pdf?id=vqRvL96UZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148682>)

Given the profound impacts on human health and ecosystems, air pollution necessitates robust quality prediction to inform policy\-making\. Traditional physics\-based forecasting relies on idealized closed\-system assumptions, whereas data\-driven approaches often lack interpretability\. Recent hybrid methods, however, neglect data homogeneity, resulting in redundancy, parameter inefficiency, and gradient conflicts\. Moreover, high\-concentration regions inherently exhibit drastic fluctuations, making it difficult to explicitly distinguish them from the overall pollution field, especially when using spatial information alone\. To address these limitations, a Physics\-Anchored Spatial\-Spectral \($PAS^2$\) paradigm is proposed\. Specifically, a collaboration scheme is firstly elaborated, within which a physical estimator captures deterministic trends, anchoring the neural branch’s input space and directing it to learn complementary fluctuations\. Building on this, we equip the neural branch with a Spatial–Spectral \($S^2$\) Reasoner that integrates graph operators to model local spatial diffusion and spectral operators to explicitly capture the drastic fluctuations in high\-concentration regions\. Experiments on real\-world datasets show that $PAS^2$ consistently improves over strong data\-driven and physics\-guided baselines, especially under volatile sudden\-change scenarios\. Codes are attached and will be released at GitHub\.

## OpInf\-LLM: Parametric PDE Solving with LLMs via Operator Inference

**Authors:** Zhuoyuan &amp;amp;quot;Jacob&amp;amp;quot; Wang; Hanjiang Hu; Xiyu Deng; Saviz Mowlavi; Yorie Nakahira

**ID:** 156747 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rCTRgstMr1>) | [PDF](<https://openreview.net/pdf?id=rCTRgstMr1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156747>)

Solving diverse partial differential equations \(PDEs\) is fundamental in science and engineering\. Large language models \(LLMs\) have demonstrated strong capabilities in code generation, symbolic reasoning, and tool use, but reliably solving PDEs across heterogeneous settings remains challenging\. Prior work on LLM\-based code generation and transformer\-based foundation models for PDE learning has shown promising advances\. However, a persistent trade\-off between execution success rate and numerical accuracy arises, particularly when generalization to unseen parameters and boundary conditions is required\. In this work, we propose OpInf\-LLM, an LLM parametric PDE solving framework via operator inference\. The proposed framework leverages small amounts of solution data to enable accurate prediction of diverse PDE instances, including unseen parameters and configurations, and provides seamless integration with LLMs for natural language task specification and physics\-based reasoning of proper feature parameterization\. Its low computational demands and unified solution pipeline further enable a high execution success rate across heterogeneous settings, opening new possibilities for generalizable reduced\-order modeling in LLM\-based PDE solving\.

## AeroChem: Closed\-loop Physics\-Informed State Space Modeling for Long\-term Chemically\-Reactive Air Quality Forecasting

**Authors:** Le Trung Kien; Tung Kieu; Dinh D Nguyen; Cuong Do; Bin Yang; Phi Long Nguyen

**ID:** 153606 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K8qavlGl1B>) | [PDF](<https://openreview.net/pdf?id=K8qavlGl1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153606>)

Accurate long\-term air quality forecasting is challenging due to long\-range transport, meteorological variability, and nonlinear chemical reactions underlying secondary pollutant formation\. Purely data\-driven models often suffer from long\-horizon drift and lack physical consistency, while existing physics\-informed approaches commonly follow open\-loop designs that fuse neural and physical components only at the output level\. We propose AeroChem, a closed\-loop physics\-informed state space framework for chemically reactive air quality forecasting\. AeroChem adopts a two\-branch co\-correction design: a UDE\-based process branch provides a structured but imperfect physical prior, while a Mamba\-based virtual measurement branch captures long\-range temporal context and produces probabilistic virtual observations\. Neural Kalman Fusion couples the two branches by correcting the latent physical state at each forecasting step and feeding the posterior state back into the simulator, reducing long\-horizon drift\. We further introduce HanoiAir, a real\-world dataset integrating pollutant concentrations, meteorology, and emission inventories\. Experiments on HanoiAir and a public benchmark show that AeroChem improves long\-horizon stability and sudden\-change forecasting\.

## Euler\-Mamba: Learning Resolution\-Invariant State Evolution on Polar Manifolds for Asymmetric Pansharpening

**Authors:** Mengting Ma; Anqi Zhu; Yizhen Jiang; Chengfu Ding; Wei Zhang

**ID:** 150332 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=itSOxQyCrl>) | [PDF](<https://openreview.net/pdf?id=itSOxQyCrl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150332>)

The goal of asymmetric pansharpening is to synthesize a high\-resolution multispectral \(HR\-MS\) image by integrating panchromatic \(PAN\) and low\-resolution multispectral \(LR\-MS\) images\. While State Space Models \(SSMs\), particularly Mamba, offer a promising paradigm for global dependency modeling, their standard selective scan mechanisms operate in discrete Cartesian grids, which are ill\-suited for distinguishing between structural and spectral features in complex\-valued frequency representations\. To resolve this, we propose Euler\-Mamba, a physics\-inspired framework that reformulates the selective scan as a continuous state evolution on polar manifolds\. We develop an Eulerian Selective Scan \(ESS\) mechanism that treats the fusion task as a trajectory of frequency growth\. By performing radial scans within the polar domain, ESS governs complex\-valued state transitions through the decoupled architecture: the Explicit Phase Rotation \(EPR\) block facilitates explicit phase rotations for geometric alignment, while the Implicit Magnitude Mapping \(IMM\) block performs magnitude scaling for spectral calibration\. This polar\-decoupled evolution allows the model to capture the continuous transition from global spectral backgrounds to fine structural details with linear complexity\. Consequently, by modeling the fusion as a continuous functional evolution flow, Euler\-Mamba achieves resolution\-invariant performance and zero\-shot generalization across varying spatial scales, bypassing the computational complexity inherent in traditional discrete\-integration frameworks\. Extensive experiments demonstrate that Euler\-Mamba establishes a new Pareto frontier for asymmetric pansharpening, achieving a superior balance between physical interpretability, computational efficiency, and reconstruction quality\.

## Walking the Hypercube: Unbiased Quantum Partition Functions Without the Matrix

**Authors:** Kumar Avinava Dubey; Arijit Sehanobish; Krzysztof M Choromanski

**ID:** 148626 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wLHljLWRDA>) | [PDF](<https://openreview.net/pdf?id=wLHljLWRDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148626>)

_Abstract unavailable from the accessible public sources._

## Importance\-Weighted Operator Learning Under Probability Measure Shifts

**Authors:** Lei Sun; Yusuke Tanaka; Xiaocheng Shang; Takaharu Yaguchi; Tomoharu Iwata

**ID:** 156079 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0afkWPjBeM>) | [PDF](<https://openreview.net/pdf?id=0afkWPjBeM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156079>)

Operator learning has attracted significant interest for its capability to approximate mappings between function spaces\. A common assumption in this field is that training and test samples are drawn from the same probability measure\. However, this assumption is often violated, leading to probability measure shifts\. Under such shifts, standard operator learning methods often lead to degraded performance because the expected training error does not match the expected test error\.  In this paper, we propose importance\-weighted operator learning \(IWOL\), a framework for learning operators under probability measure shifts in function spaces\. We prove that, when the test measure is absolutely continuous with respect to the training measure, the expected test error is equivalent to an importance\-weighted expected training error, with weights given by the Radon\-\-Nikodym derivative\. This result provides a theoretical basis for correcting measure shifts in operator learning, but importance weighting relies on this absolute\-continuity condition and may yield unbounded weights\. To overcome these limitations, we introduce relative importance weights defined with respect to a mixture of the training and test measures\. The resulting weights remain well\-defined even when absolute continuity fails, and they are uniformly bounded\. These weights induce a relative importance\-weighted training objective for neural operators under probability measure shifts\. To estimate these weights, we present binary classifiers that take functions as inputs, defined through functionals modeled by kernel integral operators\. This design enables discretization\-invariant weight estimation in function space\. Experiments on multiple PDE benchmarks and neural operator architectures demonstrate that the proposed method consistently improves performance under probability measure shifts\.

## Physics\-Conditioned Video Diffusion with Kinematic Priors for Fusion Capsule Polishing

**Authors:** Shashank Galla; Abhishek Hanchate; Monika Biener; Suhas Bhandarkar; Satish Bukkapatnam

**ID:** 149301 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rDsuTZxMP3>) | [PDF](<https://openreview.net/pdf?id=rDsuTZxMP3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149301>)

Video diffusion models can generate realistic process videos, but using them as controllable surrogates for industrial systems remains difficult when key control variables are only partially observable and no simulator or differentiable physics model is available\. We study this regime in inertial confinement fusion \(ICF\) target capsule polishing, where surface defects can degrade fusion yield\. The dynamics are governed by the polishing speed $\\omega\_p$ and capsule\-pad slip $S\_C$\. While capsule motion can be monitored from video, $S\_C$ is only indirectly observable\. Using only an analytical kinematic model, we adapt a frozen Stable Video Diffusion \(SVD\-xt\) backbone via LoRA and condition the generation on Fourier\-encoded physics parameters $\(\\omega\_p, S\_C\)$\. Two training objectives operate on latent frame\-difference dynamics: \(i\) a batch level correlation loss aligning them with the analytical sliding speed, and \(ii\) a stratified ratio\-matching loss that, conditioned on $\\omega\_p$, isolates slip structure from the dominant $\\omega\_p$\-driven variance\. We evaluate physics consistency by tracking capsule motion in generated videos, inverting the kinematic model, and measuring rank agreement under a physical validity gate\.  For speed, rank accuracy exceeds $0\.97$ on real data; for slip, it reaches $0\.735$ with Spearman $\\ge 0\.50$ on synthetic data\.  Overall, the results suggest a practical recipe for controllable industrial video surrogates when only low\-dimensional analytical kinematics are available\.

## End\-to\-End Differentiable Diffusion Conditioning for Physics\-Informed Optimization

**Authors:** Ricardo Luna Gutierrez; Vineet Gundecha; Rahman Ejaz; Varchas Gopalaswamy; Riccardo Betti; Sahand Ghorbanpour; Aarne Lees; Soumyendu Sarkar

**ID:** 153367 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LtzApP65N7>) | [PDF](<https://openreview.net/pdf?id=LtzApP65N7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153367>)

_Abstract unavailable from the accessible public sources._

## Transferable, Time\-Parallel Graph Dynamics via Space\-Time Factorization

**Authors:** Wencong Yang; Chaopeng Shen; Abdolmehdi Behroozi

**ID:** 149253 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rjusfdj0um>) | [PDF](<https://openreview.net/pdf?id=rjusfdj0um>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149253>)

_Abstract unavailable from the accessible public sources._

## Solver\-as\-Teacher: Solver\-Guided On\-Policy Post\-Training Framework for PDE Foundation Models

**Authors:** Hao Wei; Shangzhe Li; Nils Thuerey

**ID:** 151443 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=afU6OolFcZ>) | [PDF](<https://openreview.net/pdf?id=afU6OolFcZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151443>)

_Abstract unavailable from the accessible public sources._

## Inverse Modeling for Laser Pulse Shape Design in Inertial Confinement Fusion

**Authors:** Ricardo Luna Gutierrez; Vineet Gundecha; Rahman Ejaz; Varchas Gopalaswamy; Riccardo Betti; Sahand Ghorbanpour; Aarne Lees; Soumyendu Sarkar

**ID:** 153316 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MDNitDIl0Q>) | [PDF](<https://openreview.net/pdf?id=MDNitDIl0Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153316>)

_Abstract unavailable from the accessible public sources._

## Axiomatic World Modeling for Physics Reasoning

**Authors:** Xinye Yang; Zhenyang Liu; Yuxuan Wang; Yuanyuan Lei

**ID:** 150823\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150823

[Paper](<https://openreview.net/forum?id=f21HhDeBNh>) | [PDF](<https://openreview.net/pdf?id=f21HhDeBNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150823>)

Recent research\-level physics\-reasoning benchmarks for LLMs reveal a failure mode that lies not in knowledge or execution, but in modeling the world being reasoned about\. When faced with unseen problem setups, models often silently alter given quantities, fabricate laws, or inject unstated assumptions to force the problem into familiar patterns, and subsequent reasoning then proceeds within this corrupted world\. We define this premise\-level divergence as modeling drift: the gap between a model's internal axiomatic world model \(AWM\) and the true physical world specified in the problem\. Although RLVR and PRM have yielded substantial gains in mathematics and code, their reward shapes do not directly supervise world modeling in axiomatic domains such as physics\. We propose Reinforcement Learning with Axiomatic World Modeling \(RLAWM\), which optimizes the policy by penalizing divergence between its inferred axiomatic world model and the true physics world\. RLAWM probes physics reasoning at two hierarchical levels \(modeling and solving\), each scored by a physically grounded reward\. The modeling reward targets abstract knowledge formulation, evaluating whether the model captures the true axiomatic world before attempting calculation\. The solving reward targets instantiated knowledge reasoning, checking whether the model's concrete derivation remains consistent with the axiomatic world\. This two\-level structure separates what world the model believes it is reasoning in from how it reasons within that world\. The framework operates exclusively during training, with no extra cost during inference\. RLAWM improves performance by up to $\+10\.8$ points on PhysReason and $\+5\.2$ on PHYSICS over the baseline\. RLAWM also exhibits strong zero\-shot generalization, yielding a $2\.45\{\\times\}$ gain over the strongest baseline on unseen physics problems\.

## PolarScale: A Physics\-Grounded Benchmark for Radiometrically Consistent RGB\-to\-Stokes Estimation

**Authors:** Beibei Lin; Tingting Chen; Xin Zhang; Wenhao Zhao; DONGJUN LI; Zifeng Yuan

**ID:** 139738\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139738

[Paper](<https://openreview.net/forum?id=7IsIlT8OJF>) | [PDF](<https://openreview.net/pdf?id=7IsIlT8OJF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139738>)

_Abstract unavailable from the accessible public sources._

## Bounds on Extrapolation across Phase Transitions with Generalized Regression

**Authors:** Jeffrey Wei; Manolis Zampetakis; John Sous

**ID:** 153578 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KMhpQBznmA>) | [PDF](<https://openreview.net/pdf?id=KMhpQBznmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153578>)

Phase transitions occur when a physical system undergoes a dramatic transformation as it crosses a transition\. We study whether regression methods trained only in one phase can predict the physical properties that characterize the unobserved phase\. Our test sets consist of the analytically tractable Heisenberg model and angle\-resolved photoemission spectroscopy measurements of a venerable high transition temperature superconductor\. We find that polynomial regression and kernel methods recover the unobserved phase structure, while standard neural networks fail\. To bound the error, we adopt the generalized eigenvalue problem \(GEVP\) into an upper bound on the worst\-case transfer coefficient, defined as the ratio of mean squared error \(MSE\) loss on the extrapolation region to the MSE loss on the training region\. Empirically, we find that our GEVP bound stays approximately constant with respect to the empirical transfer coefficient across training\-set sizes and distance between the training and extrapolation region for both datasets, providing a principled framework for studying extrapolation feasibility\.

## Symplectic Neural Operators for Learning Infinite Dimensional Hamiltonian Systems

**Authors:** Makara Yeang; Yusuke Tanaka; Takashi Matsubara; Takaharu Yaguchi

**ID:** 148541 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x7jCoj91Df>) | [PDF](<https://openreview.net/pdf?id=x7jCoj91Df>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148541>)

The modeling and simulation of infinite\-dimensional Hamiltonian systems are central problems in mathematical physics and engineering, but they pose significant computational and structural challenges for standard data\-driven architectures\. In this work, we introduce the Symplectic Neural Operator, a neural operator architecture designed to preserve the symplectic structure intrinsic to Hamiltonian PDEs\. We provide a theoretical characterization of their symplecticity and establish a rigorous long\-term stability result based on the combination of symplectic structure preservation and learning accuracy\. Numerical experiments on canonical Hamiltonian PDEs corroborate this theoretical result and show that SNOs exhibit improved energy behavior compared with non\-structure\-preserving neural operators\.

## Prototype Topology Consistency for Visible\-Infrared Lifelong Person Re\-Identification

**Authors:** Tan Shang; Zhijie Lu; Wuxuan Shi; He Li; Mang Ye

**ID:** 155560 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4fE0YqAObx>) | [PDF](<https://openreview.net/pdf?id=4fE0YqAObx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155560>)

Visible\-Infrared Lifelong Person Re\-Identification \(VI\-LReID\) requires a model to sequentially acquire cross\-modal person retrieval capabilities across sequentially arriving tasks while retaining performance on previously learned ones\.Existing methods face two fundamental problems\.First, new\-task gradient updates disrupt each instance's assignment ranking over historical class prototypes, which is the direct mechanism behind past\-task retrieval performance degradation\. At the same time, the feature manifold inevitably undergoes global drift as a necessary byproduct of new\-task adaptation\. Effective anti\-forgetting should target the detrimental ranking disruption while permitting this necessary drift\.Second, visible RGB and thermal infrared \(TIR\) imaging capture fundamentally different physical cues: texture\-and\-color reflectance versus heat radiation contours\. This causes the two modalities to form inherently inconsistent inter\-class similarity structures that conventional cross\-modal supervision cannot resolve, manifesting as highly asymmetric forgetting across modalities under shared\-backbone continual training\.We propose S\-PTC \(Stage\-wise Prototype Topology Consistency\), which preserves each instance's relative distribution over the frozen historical prototype set, protecting assignment rankings while leaving the overall feature manifold free to evolve for new\-task adaptation\.We further propose CM\-PTC \(Cross\-Modal Prototype Topology Consistency\), which aligns the inter\-class topology matrices of RGB and IR prototypes, mitigating the structural inconsistency rooted in their imaging physics\.Both modules require no stored exemplars\.Extensive experiments on the VI\-LReID benchmark verify the effectiveness and superiority of our approach against state\-of\-the\-art methods\.

## Independent Latents, Robust Neural Operators

**Authors:** Jay Yoo; Kazuma Kobayashi; Jaewan Park; Sai puppala; Souvik Chakraborty; Syed Bahauddin Alam

**ID:** 148392 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yBABg3BBFr>) | [PDF](<https://openreview.net/pdf?id=yBABg3BBFr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148392>)

Neural operators have emerged as powerful surrogates for scientific computing, enabling rapid reconstruction of complex physical fields from sparse sensor observations\. Despite their strong predictive capability, their reliability often degrades under noisy or corrupted measurements, limiting practical deployment in real\-world sensing environments\. We show that enforcing statistical independence in latent representations provides a simple yet effective mechanism for improving neural operator robustness\. To this end, we introduce Neural Operator Independence Regularization \(NOIR\), an end\-to\-end training framework that promotes statistically independent latent features during operator learning\. Unlike structured basis approaches such as POD\-DeepONet and PCA\-Net, which impose orthogonality primarily as an offline compression constraint, NOIR directly shapes latent representations during training to enhance resilience against input perturbations\. Across three canonical PDE benchmarks and five additive sensor corruption settings, NOIR consistently improves reconstruction accuracy while preserving clean\-data performance\. Beyond predictive gains, the induced latent representations exhibit distinctive statistical signatures that reveal architecture\-specific robustness characteristics under corruption\. These findings identify latent statistical independence as a principled inductive bias for robust neural operator design and provide new insight into the internal structure of operator learning systems\. All models, datasets, checkpoints, and training code are publicly available at \\url\{https://github\.com/t55176853\-cmyk/NOIR/\}

## Symplectic Normal Coordinates Flow for Generative Modeling of Hamiltonian Systems

**Authors:** Christopher M Pierce

**ID:** 155724 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3PCheCpOJt>) | [PDF](<https://openreview.net/pdf?id=3PCheCpOJt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155724>)

In conditioned generative models of physical systems, the densities at different values of the conditioning parameters are often related through symplectic transformations\. For stable linear Hamiltonian systems, there exists a symplectic transformation to \`\`normal coordinates'' such that the dynamics is reduced to rotations in each phase\-space plane\. This picture extends to the nonlinear case where, away from resonances, the Birkhoff normal form again consists of rotations in phase space, now with amplitude dependence\. In this work, we introduce an invertible symplectic flow layer consisting of amplitude\-dependent rotations in learned normal coordinates\. We derive the condition under which the nonlinear rotation layer is symplectic and detail an architecture that guarantees it\. Experiments are carried out on two conditional generative modeling problems from accelerator physics\. We show empirically that normalizing flows with the new layers achieve competitive or superior negative log\-likelihoods compared to baseline flows, with gains particularly pronounced in weakly nonlinear systems\.

## PR\-Smoother: Simulator\-Preserving Non\-Gaussian Smoothing for Data Assimilation

**Authors:** Yuta Tarumi

**ID:** 148567 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wuKaCgAn8h>) | [PDF](<https://openreview.net/pdf?id=wuKaCgAn8h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148567>)

Many physical data assimilation \(DA\) workflows require smoothing methods that represent non\-Gaussian posteriors over physical state variables, scale to high\-dimensional simulators, train from observation windows alone, and remain compatible with calibration of the prescribed simulator\. We introduce PR\-Smoother, a simulator\-preserving amortized smoother designed for this prescribed\-simulator DA regime\. Its key design principle is to keep the prescribed simulator explicit in both the evidence lower bound and the variational family: rather than learning replacement dynamics or a learned trajectory prior, PR\-Smoother learns only future\-conditioned corrections around the prescribed rollout\. This yields an explicit non\-Gaussian smoothing distribution over physical trajectories and supports joint state, parameter, and sensor\-bias learning from observations alone\. The variational family contains the exact smoother in deterministic and linear\-Gaussian limits\. Empirically, PR\-Smoother captures multimodal posteriors in 4\-dimensional Lorenz–96, remains accurate under ambiguous nonlinear observations and process noise in 40\-dimensional Lorenz–96, and scales to joint state\-parameter\-bias inference in 16,384\-dimensional Kolmogorov flow\.

## Dandelions: A Spherical Flower for Neural Simulation of Planetary Dynamics

**Authors:** Till Muser; Giovanni Abati; Ivan Dokmanić

**ID:** 155531 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sWdU0DnBl>) | [PDF](<https://openreview.net/pdf?id=4sWdU0DnBl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155531>)

Many dynamical processes unfold on the sphere but the default scientific machine learning architectures are Euclidean\. Applying these architectures on a regular lat\-\-lon grid causes problems: Cartesian convolutions become distorted at high latitude; 2D FFTs in Fourier neural operators incorrectly assume double periodicity; Cartesian positional encodings in ViTs distort spherical geodesic distances\. Recent work moves towards natively spherical  primitives, including spherical convolutions \(e\.g\., DeepSphere or DISCO\), Spherical Fourier Neural Operators \(SFNOs\), and geodesic attention\. Here we propose Dandelion, a spherical version of Flower\-\-\-a recent warp\-based neural PDE solver\. Layers of Dandelion predict a tangent\-plane displacement and transport features along great circles\. We obtain a U\-Net\-like structure by implementing hierarchical pooling entirely in the spherical\-harmonic domain\. There are thus no convolutions: spatial mixing is  achieved only through spherical coordinate changes\-\-\-or warps\. To compare Dandelion with existing spherical architectures, we release an evolving benchmark suite of challenging, natively\-spherical PDE datasets including a modified Galewsky jet, anomalous chained turbulence, Cahn\-\-Hilliard decomposition, spherical Riemann shocks, Held\-\-Suarez dry atmospheric transport and global ocean dynamics\. This new benchmark fills the gap in existing spherical datasets which are either too small and stylized, or much too large \(ERA5\) for model iteration\.  Dandelion is best or second\-best on every dataset, and the gap to non\-warp baselines widens with resolution: at $256\\times 512$, Dandelion and Flower2D occupy the top two slots in both single\-step prediction and rollout\.

## First\-Order Trajectory Matching: Fast Ensemble Predictions of Chaotic, Turbulent, Stochastic Systems

**Authors:** Shreya Jha; Timo Schorlepp; Nicholas Geissler; Jules Berman; Benjamin Peherstorfer

**ID:** 150161 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kCo39KbSIa>) | [PDF](<https://openreview.net/pdf?id=kCo39KbSIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150161>)

We introduce First\-Order Trajectory Matching \(FTM\), a surrogate\-modeling method that learns the first\-order local transport of probability mass from trajectories of stochastic systems\. By matching the symmetric first\-order motion of trajectories, FTM learns the probability current velocity, whose flow preserves time marginals to match ensemble averages, while also capturing current\-like trajectory quantities such as fluxes, circulations, and barrier\-crossing currents\.  FTM learns the current velocity directly from trajectories, avoiding drift, diffusion, and score estimation\. Our stability analysis separates discretization error from sampling variance and shows that the one\-step simulation\-free FTM loss is stable when temporal resolution and sample size are properly balanced\.  Across stochastic dynamical systems and PDE examples, we empirically demonstrate that FTM provides trajectory\-aware ensemble predictions at low, deterministic\-rollout cost\.

## Sparsity for Free: A Budget\-Induced Equilibrium in Joint Topology–Parameter Search

**Authors:** Marcel Mordarski; Daniel Budina; Benjamin Gras; Abdulrahman Shehata; Roberto Bondesan

**ID:** 148319 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yhAndGxKFn>) | [PDF](<https://openreview.net/pdf?id=yhAndGxKFn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148319>)

Joint optimisation over a discrete topology $T$ and continuous parameters $\\theta$ under a strict evaluation budget $B$ arises in neural architecture search, pruning, and variational quantum algorithms\. We identify a budget\-induced effect, \\emph\{dimensionality pressure\}: enlarging $T$ expands the search space of $\\theta$, slows inner\-loop optimisation at fixed $B$, and yields noisier fitness estimates that systematically bias outer\-loop selection toward smaller structures, even without explicit sparsity regularisation\. We formalise this as a Proposition composing standard CMA\-ES dimensionality results with rank\-based noisy\-comparison selection, predicting a stationary distribution over $\|T\|$ concentrated below the dense baseline\. To test the mechanism we introduce \\textsc\{EvoluCMAES\}, a minimal two\-loop framework whose only domain\-specific component is the topology\-mutation operator\. Across two unrelated settings, the same fixed apparatus produces low\-density solutions: in pruning of UCI tabular models, the equilibrium density settles at $\\rho \\approx 0\.13$, roughly an order of magnitude below dense; in BB84 eavesdropping, discovered Eve circuits use 4\-\-6 gates from an arbitrary\-depth search space and approach the analytical Pauli\-channel cloning bound under bit\-flip noise\. When a specific target sparsity is required for deployment, adapting only the mutation operator suffices: at $95\\%$ sparsity on the UCI suite, mean accuracy reaches $0\.972$, exceeding the strongest one\-shot baseline at $0\.946$\. As a downstream consequence of the bound, the \\textsc\{EvoluCMAES\} library is small enough to serve as a tractable action set for an off\-the\-shelf RL agent: a single Rainbow\-DQN with feasibility masking and matched hyperparameters recovers $\\approx 99\\%$ of the dynamic\-programming optimum on adaptive eavesdropping for both BB84 and E91/DIQKD\.

## PhysGuard: Fisher\-Guided Gradient Projection for Sim\-to\-Real Neural PDE Surrogates

**Authors:** Changjian Zhou; Junfeng Fang; Negin Yousefpour; peng wu; Bin Yan; Guillermo A Narsilio

**ID:** 148249 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zHUiR3DWyZ>) | [PDF](<https://openreview.net/pdf?id=zHUiR3DWyZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148249>)

Neural operator models trained on simulation data often lose accuracy when applied to experimental measurements due to the sim\-to\-real gap\. Standard fine\-tuning with limited real data can reduce this gap, but it may also damage the core physics\-relevant representations learned during pretraining\. Although knowledge\-preserving adaptation has been widely investigated in vision or language tasks, it remains unclear whether these methods are suitable for neural operators whose architectures and protected knowledge are fundamentally different\. Neural operators need to preserve core\-scale physical structures rather than semantic or visual features\. We propose PhysGuard, a physics\-preserving framework for accurate sim\-to\-real adaptation of neural operators\. Specifically, PhysGuard uses the empirical Fisher Information Matrix computed on simulation data to identify physics\-critical parameter directions, then restricts fine\-tuning updates to directions that do not interfere with them\. A layer\-wise Gram\-matrix formulation makes this efficient for models with millions of parameters, while an adaptive threshold automatically determines the protected subspace size\. A spectral probe experiment shows that the dominant Fisher directions are strongly associated with low\-frequency output structures\. Experiments on benchmark across four neural operator architectures and different physical systems show that PhysGuard performs strongly on most evaluation metrics compared to baselines\. The benefits are most evident under severe domain shift, where it reduces low\-frequency error by up to 32\\% compared to standard fine\-tuning while maintaining adaptability\. Our code is available at https://anonymous\.4open\.science/r/PhysGuard\-B840/\.

## Co\-PiLOT: Constrained Physics\-Informed Latent Optimization for Target\-Driven Inverse Design

**Authors:** Mahish Kumar Guru; Mayank Nagar; Ayush vyas; Jan Bohlen; Roland Aydin; Noomane B Khalifa

**ID:** 150787 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fPIgwuSCOy>) | [PDF](<https://openreview.net/pdf?id=fPIgwuSCOy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150787>)

Inverse design of physical systems \(molecules, devices, microstructures\) often reduces to optimizing a high\-dimensional structure against an expensive black\-box simulator\. Direct search is difficult because the space is non\-Euclidean, feasibility is hard to encode, and each evaluation is expensive\. We present Co\-PiLOT, a latent optimization approach that maps candidates through a generative encoder\-\-decoder, uses the decoder as a learned validity prior, and searches the latent space with physics\-informed black\-box optimization\. The framework is applied on the inverse design of magnesium alloy microstructure/texture\. We develop a vision transformer based\-\-encoder; paired with latent diffusion, diffusion transformer and rectified\-flow transformer\-\-based decoders on $\\sim80\{,\}000$ EBSD\-derived microstructure dataset to learn a minimal bottleneck, $z$\. The ViT\-FMDiT model \($z$=$768$\) reconstructs high\-fidelity microstructure images \(FID $23\.19$, MS\-SSIM $0\.178$\), which our self\-segmenting orientation codec converts into input grids for crystal plasticity solver\. Finally, we introduce Meridian, an active latent optimizer driven by deep\-kernel Gaussian\-process uncertainty, feasibility prediction, active trust regions, and target\-aware acquisition\. Within the evaluation budget, the ViT\-FMDiT and Meridian combination yields the best target\-driven objective score, outperforming DANTE, TuRBO, and BAxUS by $\\sim6$\\% in relative error on the same decoder\.

## Neural Scaling Laws in Particle Jets

**Authors:** Matthias Vigl; Nikita Pond; Nicole Hartman; Jackson Barr; Daniel H Guest; Alexander Froch; Michele D&amp;amp;\#x27;Andrea; Dmitrii Kobylianskii; Daniel Murnane; Robert Les; Sébastien Rettie; Diptaparna Biswas; Michael Kagan; Lukas Heinrich

**ID:** 149293 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rMzU4uxIrE>) | [PDF](<https://openreview.net/pdf?id=rMzU4uxIrE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149293>)

Large language models \(LLMs\) have demonstrated that scaling, driven by compute, can yield dramatic improvements in performance, with current state\-of\-the\-art systems reaching up to one trillion parameters\. In contrast, state\-of\-the\-art jet flavor classifiers in particle physics remain in the tens of millions of parameters\. Scaling laws offer a framework for predicting how much particle physics models benefit from systematic increases in capacity and training data\. In this work we study the behavior of increasingly larger jet classifiers, deriving scaling laws under optimal use of compute budget and limited datasets\.    We also  identify the regimes where “double descent” emerges\.    The emerging scaling behavior points to a clear need for significantly larger datasets and models to saturate available compute and approach the limit of achievable performance\.    We therefore train a classifier on a new dataset 20 times larger than the current state\-of\-the\-art \(7\.7 billion jets\) and find that the observed performance follows the scaling laws prediction\.    This motivates continued integrated efforts in data generation, model scaling, and inference infrastructure for large\-scale models in the physical sciences\.

## Geometry\-Aware Post\-Hoc Uncertainty Quantification in Operator Learning

**Authors:** Oriol Vendrell\-Gallart; Nima Negarandeh; Ramin Bostanabad

**ID:** 153317 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MCqeT1uJm2>) | [PDF](<https://openreview.net/pdf?id=MCqeT1uJm2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153317>)

Neural operators provide fast surrogates for PDEs but their deterministic predictions limit their use in tasks requiring uncertainty quantification \(UQ\), especially under geometric variability\. Existing approaches primarily model uncertainty in network parameters, largely overlooking the geometry\-aware representations learned by the operator itself\. We propose REEF\-GP \(Residual on Embedded Features Gaussian Process\), a post\-hoc UQ framework that fits a GP to the residuals of a frozen neural operator whose internal embeddings define the kernel feature space\. Rather than learning a separate feature map, REEF\-GP adapts the operator’s intrinsic coordinate\-feature representations to construct geometry\-aware uncertainties\. To ensure stability and scalability on unstructured domains, REEF\-GP incorporates spectral\-normalized projections, heteroscedastic geometry\-aware noise, and efficient subset\-based training that avoids restrictive low\-rank approximations\. Across five PDE benchmarks with varying geometries, REEF\-GP preserves predictive accuracy while achieving calibrated uncertainty estimates competitive with deep ensembles but at a fraction of their cost\. Our approach remains robust under geometric distribution shift, with uncertainty concentrating in physically meaningful regions \(e\.g\., shock fronts\)\. Our results demonstrate that accurate and scalable post\-hoc UQ for neural operators can be achieved directly in their learned feature space, offering a practical alternative to parameter\-centric approaches\.

## Unsupervised Physics Informed Decomposition of Incomplete Time\-Resolved Spectroscopy

**Authors:** Tom Muir; Qifeng Liu; Mohammadrahim Kazemzadeh; William Mills; Ales Leonardis; Huabing Yin; Alexander Krull

**ID:** 154646\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154646

[Paper](<https://openreview.net/forum?id=C4YjfEPhRx>) | [PDF](<https://openreview.net/pdf?id=C4YjfEPhRx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154646>)

Raman spectroscopy is often hindered by strong autofluorescence backgrounds, which are typically handled by waiting for fluorescence to bleach before recording the Raman spectrum\.  Here, we instead show that short, incomplete recordings of the bleaching process already contain enough information to recover the underlying Raman signal\. We present the first unsupervised model that operates on short, incomplete, variable\-length sequences of time\-resolved spectra, decomposing them into Raman spectra and autofluorescence components while simultaneously removing measurement noise\. Our VAE\-based method simultaneously learns \(i\) a bank of fluorophore spectra comprising the baseline, \(ii\) a model of the measurement noise, and \(iii\) the distribution of Raman spectra and decay behavior\. We evaluate our method on spectral reconstruction and downstream peak detection, where it outperforms state\-of\-the\-art approaches on multiple simulated benchmarks as well as on a newly collected real\-world dataset of spectral time series\.  We further show that fluorescence decay dynamics themselves contain discriminative information that may be exploited in future work\.

## QDMouse4M: A Multi\-View 3D Mouse Spontaneous Behavior Dataset with Quantum\-Dot Markers

**Authors:** Jingyang Ke; Amartya Pradhan; Xueling Zhang; Weihan Li; Anqi Wu; Jeffrey Markowitz

**ID:** 139136\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139136

[Paper](<https://openreview.net/forum?id=iqKjTucgKn>) | [PDF](<https://openreview.net/pdf?id=iqKjTucgKn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139136>)

Quantitative analysis of animal behavior in neuroscience increasingly relies on accurate 3D pose, yet current large\-scale mouse datasets are restricted to top\-down views and suffer from occlusion and keypoint ambiguity\. We introduce QDMouse4M, a six\-view dataset of freely moving mice with physically grounded 2D and 3D keypoint annotations obtained from subdermal quantum\-dot fluorescence markers\. QDMouse4M contains over four million reflectance frames with matched fluorescence frames, 2D and 3D pose trajectories and behavior classifications\. We use the dataset to evaluate markerless 2D and 3D pose estimation with SLEAP and Lightning Pose 3D across training\-set sizes, backbones, and in\-session/out\-of\-session splits\. We further show that the released trajectories support downstream spontaneous\-behavior analysis with Keypoint\-MoSeq and stride\-level gait measurements\. QDMouse4M provides a benchmark\-scale, physically grounded resource for developing and evaluating pose estimation, behavior understanding, and biomechanics models under realistic dark\-environment laboratory conditions\.

## Scaling Arbitrary Architectures and Optimizers with Automatic Parameterization

**Authors:** Shikai Qiu; Charlie Chen; Andres Potapczynski; Martin Marek; Andrew Wilson

**ID:** 153199 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=N6J19VlnAM>) | [PDF](<https://openreview.net/pdf?id=N6J19VlnAM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153199>)

Training neural networks at scale requires careful per\-layer scaling of initialization, learning rate, and other optimizer hyperparameters, with the right rules depending jointly on the architecture, the optimizer, and which axis \(width $D$, depth $L$, batch size $B$, etc\.\) is being scaled\. Current practice is to derive each rule by hand, as in $\\mu$P for width, CompleteP for depth, SDE\-based and EMA\-timescale arguments for batch size, and tailored prescriptions for matrix\-preconditioned optimizers; as architectures, optimizers, and scaling axes continue to evolve, this hand derivation is increasingly a bottleneck to combining these advances at scale\. We show that these derivations can be systematized by solving a linear system over hyperparameter exponents to satisfy the scaling constraints imposed by each primitive instruction of the training program, analogous to dimensional analysis in physics that enforces matched units on both sides of an equation\. We develop \\emph\{automatic parameterization\} \(AutoP\), a system that reads these rules off a traced training program and solves the resulting system to assign a scaling exponent to every hyperparameter, and provide a concrete JAX implementation\. From a few primitive rules, AutoP recovers $\\mu$P for width on Transformers, Monarch\-structured Transformers, mixture\-of\-experts, and ResNets under Adam, SignSGD, Muon, and AdaMuon; CompleteP for depth; and the known batch\-size prescriptions for the learning rate and AdamW weight decay\. It also identifies new rules for the recurrence count in looped transformers, the context length in linear\-attention and MLP\-Mixer models, and the batch\-size scaling for Muon's learning rate, all of which we demonstrate as empirically beneficial\. Analogous to automatic differentiation, our results suggest that robust hyperparameter scaling rules can be automated, freeing practitioners to scale up new architectures and optimizers without rederiving the underlying theory or risking subtle errors that quietly cost compute at scale\.

## Acting without Knowing: Planning, Prediction, and Transfer Dissociate in Interactive Visual Physics

**Authors:** Alison Gopnik; Eunice Yiu; Kevin Murphy; Kelsey Allen; Shiry Ginosar

**ID:** 139556 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IoODzTVUwp>) | [PDF](<https://openreview.net/pdf?id=IoODzTVUwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139556>)

Evaluations of large multimodal models \(LMMs\) often conflate behavioral task success with true physical understanding\. However, classical accounts of \`\`world models'' dictate that physical understanding requires the unified operation of three core capacities: planning, prediction, and positive transfer\. Because current benchmarks typically test these three abilities in isolation, they often obscure whether models actually possess a cohesive internal world representation\. In this paper, we propose a joint evaluation protocol to test whether LMMs acquire a more complete and consistent understanding of the physical world\. Using a suite of virtual physics\-based puzzles, models are tasked with placing a tool in a scene to alter its dynamics, iteratively revising their placements based solely on visual feedback\. By testing the same models on the exact same tasks, we uncover a stark dissociation between acting and knowing\. While LMMs can sometimes solve diverse physical goals under an interactive action\-feedback protocol, their success is not accompanied by robust feedback\-guided replanning, accurate prediction, or human\-like predictive transfer to new actions\. Models show weak and inconsistent prediction of the consequences of their own proposed actions, and their predictive transfer to new actions is partial, inconsistent, and less selectively goal\-directed than in humans\. Ultimately, we demonstrate that the capacities a world model should wholly unify remain only loosely connected\. We therefore argue that benchmarks for LMMs should not measure task success alone, but should jointly evaluate planning, prediction, and transfer\.

## Manifold\-weighted neural networks

**Authors:** Junyu Ren; Lek\-Heng Lim

**ID:** 154849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AS3nvwjiyw>) | [PDF](<https://openreview.net/pdf?id=AS3nvwjiyw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154849>)

We establish universal approximation for neural networks whose weight matrices take values in matrix manifolds\. The nonlinear matrix manifolds considered in this work arise as orbits of classical Lie group actions embedded in the ambient space $\\mathbb\{R\}^\{d \\times k\}$\. Stiefel manifolds provide a prominent example with empirical precedent in prior neural\-network models\. We present an expanded catalog of such manifolds, drawing from well\-studied constructions in physics and differential geometry\. These manifolds are particularly appealing for intrinsic Riemannian optimization: the transitivity of the underlying group action yields explicit tangent\-space descriptions and retractions\. Moreover, the group\-action structure enables parameter\-efficient factorizations, reducing the number of trainable variables\. This leads to a fundamental expressivity question: when weight matrices take values in nonlinear matrix manifolds, which architectures retain universal approximation power? We prove that manifold\-weighted networks with residual connections and bounded scalar multipliers are $L^p\(K\)$\-universal\. To establish universality across our manifold catalog, we introduce two independent sets of sufficient conditions: Register\-Isolated Primitive Realizability \(RIPR\) and Cross\-Axis Fold\-and\-Cut \(CAFC\)\. These conditions correspond to two distinct approximation constructions\. By verifying RIPR or CAFC case by case for the matrix manifolds in our catalog, we establish universality for the corresponding residual manifold\-weighted networks with bounded scalar multipliers\.

## Flow Perturbation\+\+: Multi\-Step Unbiased Jacobian Estimation for High\-Dimensional Boltzmann Sampling

**Authors:** xinpeng peng; Ang Gao

**ID:** 152021 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W6FlrDtr71>) | [PDF](<https://openreview.net/pdf?id=W6FlrDtr71>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152021>)

The scalability of continuous normalizing flows \(CNFs\) for unbiased Boltzmann sampling remains limited in high\-dimensional systems due to the cost of Jacobian\-determinant evaluation, which requires $D$ backpropagation passes through the flow layers\. Existing stochastic Jacobian estimators such as the Hutchinson trace estimator reduce computation but introduce bias, while the recently proposed Flow Perturbation method is unbiased yet suffers from high variance\. We present \*\*Flow Perturbation\+\+\*\*, a variance\-reduced extension of Flow Perturbation that discretizes the probability\-flow ODE and performs unbiased stepwise Jacobian estimation at each integration step\. This multi\-step construction retains the unbiasedness of Flow Perturbation while achieves substantially lower estimator variance\. Integrated into a Sequential Monte Carlo framework, Flow Perturbation\+\+ achieves significantly improved equilibrium sampling on a 1000D Gaussian Mixture Model and the all\-atom Chignolin protein compared with Hutchinson\-based and single\-step Flow Perturbation baselines\.

## QMaxCal: Path\-Space Regularization for Open Quantum Control via Girsanov's Theorem

**Authors:** Merijn Moody; Zier Mensch; Miranda Cheng; Peter G Bolhuis; Max Welling

**ID:** 150785 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fQbP42DHcH>) | [PDF](<https://openreview.net/pdf?id=fQbP42DHcH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150785>)

_Abstract unavailable from the accessible public sources._

## PhysTC: A Physics\-Enhanced Dataset and Architecture for High\-Precision Tropical Cyclone Forecasting

**Authors:** Zhaoran Feng; Xuanhong Chen; Zengbing Chen; Shengjun Wu; Bin He; Kairui Feng

**ID:** 139449 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PEN58GkDgd>) | [PDF](<https://openreview.net/pdf?id=PEN58GkDgd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139449>)

A critical observability gap arises in multiscale chaotic systems when coarse observations smooth out high\-frequency extremes\. For tropical cyclones, this makes standard reanalysis products insufficient for high\-precision intensity prediction, as spectral truncation can mask peak winds by over $30\\%$\. In this work, we introduce Physics\-enhanced Tropical Cyclone forecasting \(PhysTC\), a physics\-enhanced benchmark framework for forecasting tropical cyclone track and intensity from globally consistent coarse observations\. We curate a harmonized multi\-basin dataset spanning 1950\-\-2023, incorporating scale\-robust physical predictors to mitigate resolution\-induced bias\. Building on this dataset, we propose the Physics\-enhanced Tropical Cyclone Network \(PhysTCN\), a model that integrates synoptic spatial structure, storm\-following temporal history, and physical consistency constraints to infer intensity\-relevant dynamics beyond direct grid\-space readout\. PhysTCN significantly outperforms state\-of\-the\-art baselines, with particularly strong gains in recovering extreme wind speeds that are underestimated in reanalysis data\. This work provides a scalable framework for physically guided forecasting in data\-sparse, cross\-scale dynamical systems\.

## PINNeval: A Comprehensive Evaluation Standard for Physics\-Informed Neural Networks

**Authors:** Kevin von Bargen; Hamid Ebrahimy; Tim Römer

**ID:** 139466 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=O6VplBRoF0>) | [PDF](<https://openreview.net/pdf?id=O6VplBRoF0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139466>)

The Physics\-Informed Neural Network \(PINN\) literature has produced a rapidly expanding catalogue of methods\. We divide a PINN training pipeline systematically into four components and observe that many existing benchmarks study these components in isolation\. These components are domain\-importance adaptation, loss balancing, the neural network architecture, and the optimization scheme\. Moreover, the studies set the surrounding and not considered components of the pipeline to a minimal default that is no longer representative of current best practice approaches\. Conclusions drawn under such conditions lead to suboptimal results\. In this work, we propose a new evaluation protocol that \(1\) treats the four components as an integrated system; \(2\) requires as a key aspect a competitive implementation of the components not currently under investigation; \(3\) specifies the metrics and reporting format, and \(4\) is accompanied by structured documentation that ensures the traceability of evaluations across studies\. Based on this comprehensive protocol, we release with PINNeval an innovative JAX package containing 18 different methods from the current literature as well as nine efficiently implemented benchmark problems\. Using PINNeval, we illustrate our evaluation protocol in relation to established benchmark studies and report on results that challenge established assumptions\.

## SPDEBench: An Extensive Benchmark for Learning Stochastic PDEs

**Authors:** Yuantu Zhu; Zheyan Li; Dai Shi; Luke Thompson; Oliver Nash; Jose M Rangel; Siran Li; Bingguang Chen; Rongchan Zhu; Qi Meng; Hao Ni

**ID:** 139762 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6ARrY9kPwQ>) | [PDF](<https://openreview.net/pdf?id=6ARrY9kPwQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139762>)

Stochastic Partial Differential Equations \(SPDEs\) driven by random noise play a central role in modeling physical processes with rough spatio\-temporal dynamics, such as turbulence flows, superconductors, and quantum dynamics\. Although machine learning \(ML\)\-based surrogate models have shown promise for efficiently approximating such dynamics, progress remains limited by the lack of a unified benchmark with controlled data generation and comprehensive evaluation\. This gap is particularly significant for singular SPDEs, for which benchmark datasets are largely unavailable and reliable simulation requires numerically delicate schemes based on renormalization\. Moreover, subtle differences in data\-generation procedures, such as noise approximation, basis choice, and the inclusion of renormalization, can significantly affect the resulting datasets and, consequently, model evaluation\. We introduce SPDEBench, the first unified benchmark for ML\-based SPDE learning\. SPDEBench provides ready\-to\-use datasets for physically and mathematically significant SPDEs on 1\-3D domains with periodic or Dirichlet boundary condition\. Both regular and singular SPDEs are taken into consideration\. SPDEBench also incorporates representative ML baselines in operator learning, together with 7 evaluation metrics, including Sobolev and distributional metrics beyond the standard $L^2$\-error\. Supported by SPDEBench, we conduct systematic evaluations of model accuracy, robustness, and out\-of\-distribution generalization under controlled data variations\. Our numerical results show that SPDE\-aware architectures generally achieve stronger performance than generic operator\-learning baselines\. These findings establish SPDEBench as a reproducible and extensible resource, paving pathway for principled benchmarking and architecture design for stochastic spatio\-temporal dynamics\.

## Mollifier Layers: Enabling Efficient High\-Order Derivatives in Inverse PDE Learning

**Authors:** Vinayak Vinayak; Ananyae bhartari; Vivek Shenoy

**ID:** 156782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6mFVZSzyev>) | [PDF](<https://openreview.net/pdf?id=6mFVZSzyev>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156782>)

Parameter estimation in inverse problems involving partial differential equations \(PDEs\) underpins modeling across scientific disciplines, especially when parameters vary in space or time\. Physics\-informed Machine Learning \(PhiML\) integrates PDE constraints into deep learning, but prevailing approaches depend on recursive automatic differentiation \(autodiff\), which produces inaccurate high\-order derivatives, inflates memory usage, and underperforms in noisy settings\. We propose Mollifier Layers, a lightweight, architecture\-agnostic module that replaces autodiff with convolutional operations using analytically defined mollifiers\. This reframing of derivative computation as smoothing integration enables efficient, noise\-robust estimation of high\-order derivatives directly from network outputs\. Mollifier Layers attach at the output layer and require no architectural modifications\. We compare them with three distinct architectures and benchmark performance across first\-, second\-, and fourth\-order PDEs—including Langevin dynamics, heat diffusion, and reaction\-diffusion systems—observing significant improvements in memory efficiency, training time and accuracy for parameter recovery across tasks\. To demonstrate practical relevance, we apply Mollifier Layers to infer spatially varying epigenetic reaction rates from super\-resolution chromatin imaging data—a real\-world inverse problem with biomedical significance\. Our results establish Mollifier Layers as an efficient and scalable tool for physics\-constrained learning\.

## Efficient and Robust Physical 3DGS\-MPM Simulation via Interior Filling and Text\-Physics Optimization

**Authors:** Yikun Ma; Yiqing Li; Jingwen Ye; Zhongkai Wu; Weidong Zhang; Lin Gao; Zhi Jin

**ID:** 149910 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mHqLsJydRH>) | [PDF](<https://openreview.net/pdf?id=mHqLsJydRH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149910>)

Extending 3D Gaussian Splatting \(3DGS\) to 4D physical simulation remains challenging\. Based on the Material Point Method \(MPM\), existing methods either rely on manual parameter tuning or distill dynamics from video diffusion models, limiting the generalization and optimization efficiency\. Recent attempts using LLMs/VLMs suffer from a text/image\-to\-3D perceptual gap, yielding unstable physics behavior\. In addition, they often ignore the surface structure of 3DGS, leading to implausible motion\. We propose FastPhysGS, a fast and robust framework for physics\-based dynamic 3DGS simulation: \(1\) Instance\-aware Particle Filling \(IPF\) with Monte Carlo Importance Sampling \(MCIS\) to efficiently populate interior particles while preserving geometric fidelity; \(2\) Bidirectional Graph Decoupling Optimization \(BGDO\), an adaptive strategy that rapidly optimizes material parameters predicted from a VLM\. Experiments show FastPhysGS achieves high\-fidelity physical simulation in 1 minute using only 7 GB runtime memory, outperforming prior works with broad potential applications\.

## PhysDNet: Physics\-Driven Gradient Amplification for Real\-Time Image Dehazing

**Authors:** Rayen Dhahri; Lei Sun; Victor J Morinigo; Alice Pagnoux; Luca Benini; Danda Pani Paudel; Luc V Gool

**ID:** 152574 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S57Q0ZigdC>) | [PDF](<https://openreview.net/pdf?id=S57Q0ZigdC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152574>)

_Abstract unavailable from the accessible public sources._

## PCFBench: How Far Can Large Vision\-Language Models Go in Physics\-aware Photonic Inverse Design?

**Authors:** Shengchao Chen; Ting Shu; Sufen Ren

**ID:** 139614 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FQXg2OPgnz>) | [PDF](<https://openreview.net/pdf?id=FQXg2OPgnz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139614>)

_Abstract unavailable from the accessible public sources._

## Simplifying Transformer\-Based U\-Net Neural Physics Simulators

**Authors:** Pietro Sittoni; Francesco Tudisco

**ID:** 154869 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AISWDtZ6VB>) | [PDF](<https://openreview.net/pdf?id=AISWDtZ6VB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154869>)

_Abstract unavailable from the accessible public sources._

## Mosaic: A Benchmark Suite for Differentiable Physics Solvers

**Authors:** Andrin Rehmann; Heiko Zimmermann; Dion Häfner

**ID:** 139696 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A4oHl7cYA9>) | [PDF](<https://openreview.net/pdf?id=A4oHl7cYA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139696>)

_Abstract unavailable from the accessible public sources._

## PhysDNet: Physics\-Driven Gradient Amplification for Real\-Time Image Dehazing

**Authors:** Rayen Dhahri; Lei Sun; Victor J Morinigo; Alice Pagnoux; Luca Benini; Danda Pani Paudel; Luc V Gool

**ID:** 152574\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152574

[Paper](<https://openreview.net/forum?id=S57Q0ZigdC>) | [PDF](<https://openreview.net/pdf?id=S57Q0ZigdC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152574>)

_Abstract unavailable from the accessible public sources._

## PCFBench: How Far Can Large Vision\-Language Models Go in Physics\-aware Photonic Inverse Design?

**Authors:** Shengchao Chen; Ting Shu; Sufen Ren

**ID:** 139614\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139614

[Paper](<https://openreview.net/forum?id=FQXg2OPgnz>) | [PDF](<https://openreview.net/pdf?id=FQXg2OPgnz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139614>)

_Abstract unavailable from the accessible public sources._

## Simplifying Transformer\-Based U\-Net Neural Physics Simulators

**Authors:** Pietro Sittoni; Francesco Tudisco

**ID:** 154869\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154869

[Paper](<https://openreview.net/forum?id=AISWDtZ6VB>) | [PDF](<https://openreview.net/pdf?id=AISWDtZ6VB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154869>)

_Abstract unavailable from the accessible public sources._

## Mosaic: A Benchmark Suite for Differentiable Physics Solvers

**Authors:** Andrin Rehmann; Heiko Zimmermann; Dion Häfner

**ID:** 139696\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139696

[Paper](<https://openreview.net/forum?id=A4oHl7cYA9>) | [PDF](<https://openreview.net/pdf?id=A4oHl7cYA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139696>)

_Abstract unavailable from the accessible public sources._

## AtomWorld\-Mem: Memory\-Restored World States for Long\-Horizon Atomistic Evolution

**Authors:** Tian Luo; Ruge Zhang; Haozhi Han; Yifeng Chen; Yunquan Zhang; Ting Cao; Yunxin Liu; Kun Li

**ID:** 155270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6wc2BIP9Oe>) | [PDF](<https://openreview.net/pdf?id=6wc2BIP9Oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155270>)

High\-fidelity atomistic evolution over long timescales requires more than observing the current crystal configuration\. Instantaneous atomistic snapshots are often incomplete: locally similar configurations can correspond to different hidden dynamical contexts, future event preferences, and waiting\-time scales\. We argue that this snapshot ambiguity makes long\-horizon atomistic evolution fundamentally a memory\-based world\-state restoration problem\. To address this, we introduce AtomWorld\-Mem, a memory\-restored atomistic world model that recovers the latent world state missing from instantaneous crystal snapshots\. AtomWorld\-Mem treats the evolving alloy as an AtomWorld: spatial encoders write multi\-scale atomistic keyframes from dense local topology and sparse long\-range defect context, while short\-term event memory and long\-term structural memory integrate these keyframes across time to restore a future\-predictive evolutionary state\. The restored state is used to prioritize legal vacancy\-mediated events under single\-event Kinetic Monte Carlo \(KMC\) constraints, while event legality, physical execution, and residence\-time updates remain governed by the underlying simulator\. Empirically, AtomWorld\-Mem improves long\-horizon atomistic progress under fixed microscopic event budgets while maintaining high\-fidelity evolution across energetic, structural, and vacancy\-transport observables\. It further transfers zero\-shot across diverse unseen alloy\-temperature AtomWorlds, suggesting that the learned memory\-restoration mechanism captures reusable principles of hidden\-state inference rather than a system\-specific local energy heuristic\. These results position memory\-restored world\-state modeling as a promising route toward efficient, physically grounded, and transferable atomistic evolution\.

## Free energy Estimation on Any State Space

**Authors:** Jiajun He; Zijing Ou; Francisco Vargas; Yingzhen Li; José Miguel Hernández\-Lobato; Carles Domingo i Enrich; Yuanqi Du

**ID:** 150686 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gGNQM7Y8E3>) | [PDF](<https://openreview.net/pdf?id=gGNQM7Y8E3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150686>)

Free energy estimation is a fundamental yet challenging problem, from physics to statistics\. Classical approaches rely on thermodynamic transformations, ranging from direct estimation, quasistatic integration, to finite\-time averaging\. Recent work learns neural transports to significantly accelerate the efficiency in the finite\-time regime\.  In this paper, we generalize this framework to arbitrary state spaces\.  Building on this view, we develop a generalized neural transport learning approach for efficient estimation\. Experiments validate the effectiveness and efficiency of the proposed method beyond continuous settings, extending to discrete and multimodal spaces as well as autoregressive settings\.

## CrystalREPA: Transferring Physical Priors from Universal MLIPs to Crystal Generative Models

**Authors:** Chengqian Zhang; Yucheng Jin; Duo Zhang; Tiejun Li; Han Wang

**ID:** 154603 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CNnIIFw6WS>) | [PDF](<https://openreview.net/pdf?id=CNnIIFw6WS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154603>)

Crystal generative models mainly learn what stable crystals look like, with little explicit supervision for what makes them stable\. We reveal a substantial representation gap between state\-of\-the\-art crystal generative models and pretrained universal machine learning interatomic potentials \(MLIPs\) via energy probing, and show this gap can be closed by a simple training\-time alignment\. We propose Crystal REPresentation Alignment \(CrystalREPA\), a plug\-and\-play framework that aligns the atom\-wise hidden states of generative encoders with frozen MLIP representations through an element\-aware contrastive objective, transferring stability\-aware atomistic priors with marginal training overhead and no additional inference cost\. Across three generative frameworks, ten MLIP teachers, and two benchmark datasets, CrystalREPA consistently improves the thermodynamic stability, structural validity, and structural fidelity of generated crystals\. Equally important, we find that an MLIP's transfer effectiveness is poorly predicted by its accuracy on standard leaderboards \(e\.g\., Matbench Discovery\) but strongly predicted by the distinguishability of its atom\-wise representation space, yielding a practical, accuracy\-independent criterion for selecting MLIP teachers for generative transfer\.

## Neptuna: A Comprehensive Machine Learning Framework for Benchmarking Complex Multiphase Flows

**Authors:** Harish Ramachandran; Björn Kimpel; Thomas Paula; Josef Winter; Steffen Schmidt; Nikolaus Adams

**ID:** 138941 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ux3SHSUjaT>) | [PDF](<https://openreview.net/pdf?id=ux3SHSUjaT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138941>)

Compressible multiphase flows involving shocks and material interfaces arise in applications such as bubble collapse and droplet breakup, where strong nonlinear interactions produce complex interface deformation, mixing, and multiscale dynamics\. Developing reliable machine learning surrogates for these flows remains challenging due to the simultaneous presence of compressibility, sharp discontinuities, and multiphase effects\. In this work, we introduce the first large\-scale benchmark specifically designed for shock\-driven compressible multiphase flows, comprising 2\.4 TB of high\-fidelity 2D and 3D datasets featuring shock\-induced bubble collapse and droplet breakup\. We evaluate diverse surrogate model families on our benchmarking framework: Neptuna, including convolutional, spectral, transformer\-based, and pre\-trained PDE foundation models\. Beyond standard MSE training, we investigate composite losses combining MSE with Sobolev, interface\-aware, and structure\-aware terms, together with adaptive loss balancing using SoftAdapt and GradNorm\. Evaluation includes pointwise, spectral, feature\-focused, structural, and physics\-informed metrics\. Results show that no single model performs best across all datasets and metrics, while composite losses significantly improve interface preservation and spectral fidelity\. Among adaptive weighting strategies, SoftAdapt provides the most consistent improvements with almost no overhead compared to MSE\-only training\.

## CoupledFlow: One\-Step Neural Operators for Coupled Multi\-Physics PDEs

**Authors:** Trong Khiem Tran; Long M Bui; Phi Le Nguyen; Mrinal K Sen; Sanjay Srinivasan; Nghia Hoang; Jana Doppa

**ID:** 155294 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6eIWOGXqT1>) | [PDF](<https://openreview.net/pdf?id=6eIWOGXqT1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155294>)

We investigate the problem of learning neural operators for coupled multi\-physics PDEs, where multiple physical processes co\-evolve and influence one another via bidirectional coupling\. For example, in subsurface CO$\_2$ storage, fluid flow, heat transfer, and geo\-mechanical deformation evolve in a tightly coupled manner\. Prior work, including neural operators and generative PDE solvers, mostly focuses on single\-physics settings or relies on iterative inference, limiting their effectiveness in coupled PDEs\. This paper introduces coupled\-flow, a one\-step generative neural operator that revisits coupled operator learning as solving a distributional transport problem\. It parameterizes process\-specific average velocity fields conditioned on the full coupled state, enabling cross\-process interactions to emerge naturally from the transport dynamics\. We further establish a Wasserstein\-2 generalization bound that ties the prediction error of coupled\-flow to its training losses through the regularity of the induced flow\. Experiments on a wide variety of multi\-physics benchmarks demonstrate that coupled\-flow achieves significant performance improvements over coupled neural\-operator and generative PDE baselines\.

## Compute\-optimal data scaling for neural surrogates via multi\-fidelity training

**Authors:** Paul Setinek; Felix Koehler; Fabian Paischer; Nils Thuerey; Johannes Brandstetter

**ID:** 151246 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=boIBg7GaQo>) | [PDF](<https://openreview.net/pdf?id=boIBg7GaQo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151246>)

Neural surrogates for Partial Differential Equations \(PDEs\) are usually trained on synthetic data from numerical simulators\. As models grow and scaling laws demand larger datasets, the cost of data generation often outweighs the training cost and becomes the bottleneck in the scaling quest\. Unlike data in other domains, however, each PDE sample has a tunable per\-sample cost that depends on its numerical fidelity, with the resulting cost\-accuracy trade\-off governed by known convergence rates\. We exploit this property by formalizing neural surrogate training as a function of both data quantity and fidelity under a fixed data generation compute budget, treating fidelity as a fine\-grained discrete spectrum rather than a binary distinction\. Building on this, we show that multi\-fidelity training enables Pareto\-optimal error scaling against data generation compute\. By using simulations at lower fidelities as an additional training signal, our approach consistently outperforms training on the highest fidelity at matched data generation budgets\. We validate this across six PDE problems spanning structured grids and unstructured meshes, two distinct error sources \(discretization and iterative\-solver error\), and four surrogate architectures\.

## Bounds on Extrapolation across Phase Transitions with Generalized Regression

**Authors:** Jeffrey Wei; Manolis Zampetakis; John Sous

**ID:** 153578\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153578

[Paper](<https://openreview.net/forum?id=KMhpQBznmA>) | [PDF](<https://openreview.net/pdf?id=KMhpQBznmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153578>)

Phase transitions occur when a physical system undergoes a dramatic transformation as it crosses a transition\. We study whether regression methods trained only in one phase can predict the physical properties that characterize the unobserved phase\. Our test sets consist of the analytically tractable Heisenberg model and angle\-resolved photoemission spectroscopy measurements of a venerable high transition temperature superconductor\. We find that polynomial regression and kernel methods recover the unobserved phase structure, while standard neural networks fail\. To bound the error, we adopt the generalized eigenvalue problem \(GEVP\) into an upper bound on the worst\-case transfer coefficient, defined as the ratio of mean squared error \(MSE\) loss on the extrapolation region to the MSE loss on the training region\. Empirically, we find that our GEVP bound stays approximately constant with respect to the empirical transfer coefficient across training\-set sizes and distance between the training and extrapolation region for both datasets, providing a principled framework for studying extrapolation feasibility\.

## Symplectic Neural Operators for Learning Infinite Dimensional Hamiltonian Systems

**Authors:** Makara Yeang; Yusuke Tanaka; Takashi Matsubara; Takaharu Yaguchi

**ID:** 148541\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148541

[Paper](<https://openreview.net/forum?id=x7jCoj91Df>) | [PDF](<https://openreview.net/pdf?id=x7jCoj91Df>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148541>)

The modeling and simulation of infinite\-dimensional Hamiltonian systems are central problems in mathematical physics and engineering, but they pose significant computational and structural challenges for standard data\-driven architectures\. In this work, we introduce the Symplectic Neural Operator, a neural operator architecture designed to preserve the symplectic structure intrinsic to Hamiltonian PDEs\. We provide a theoretical characterization of their symplecticity and establish a rigorous long\-term stability result based on the combination of symplectic structure preservation and learning accuracy\. Numerical experiments on canonical Hamiltonian PDEs corroborate this theoretical result and show that SNOs exhibit improved energy behavior compared with non\-structure\-preserving neural operators\.

## Probabilistic Data\-Driven Modelling of Astrophysical Transients: The Neural Process Family for Ultrafast and Class\-Agnostic Light Curve Reconstruction

**Authors:** Siddharth Chaini; federica bianco; Ashish Mahabal

**ID:** 151221 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c1qPSD4fDz>) | [PDF](<https://openreview.net/pdf?id=c1qPSD4fDz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151221>)

Astrophysical observations from Earth are subject to weather, environmental, and scientific constraints that lead to characteristically sparse and unevenly sampled multi\-wavelength time series \(light curves\), severely limiting the performance on downstream tasks\. Interpolating light curves help in mitigating this problem, where Gaussian Processes \(GPs\) are the current standard\. However, GPs struggle with cross\-wavelength correlations, require \*a priori\* kernel specification, and cannot handle ensembles of diverse transient and variable classes\.  Furthermore, GPs and other existing models \(\*e\.g\.\*, Bayesian neural networks\), scale poorly and must be fit to each light curve individually, transferring no information between light curves\. We introduce Attentive Neural Processes \(ANPs\) for light curve reconstruction, combining the probabilistic framework of GPs with the scalability of deep learning, and we demonstrate their use as a fast, data\-driven, universal light curve interpolator\. Unlike prior processes tailored to single object classes, our approach is morphologically agnostic\. By meta\-learning on a diverse population of simulated transients, ANPs shift the computation cost to the training phase, enabling amortized inference \- particularly important at the eve of the Vera C\. Rubin Observatory Legacy Survey of Space and Time \(LSST\), which will produce massive datasets for transient astrophysics\. We evaluate our models on realistic LSST cadences for its 6\-filters across 14 transient classes\. The ANP outperforms all our benchmark models, including a suite of GP and neural\-network based models, on all regression quality, feature recovery, and rigorous probabilistic calibration metrics\. Our ANP performs probabilistic interpolation on all filters in $\\sim 10^\{\-6\} $ seconds \-\- over four orders of magnitude faster than the next\-best neural benchmark and over five orders of magnitude faster than GPs \-\- making them suitable for on\-line use on the LSST alert stream estimated to carry $\\sim10^\{7\}$ events/night\. The ANP avoids neural networks' overconfidence and GPs' underconfidence, delivering sharp, highly calibrated uncertainties\. This work establishes the neural process family as a scalable, probabilistic foundation for real\-time transient science in the LSST era\.

## IADR: Interface\-Augmented Neural Operator for Phase\-Field Mean\-Curvature Flow

**Authors:** Qinyi Zhang; Duanyu Feng; Yangshuai Wang; Hao Wang

**ID:** 149902 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mMGBM26aqy>) | [PDF](<https://openreview.net/pdf?id=mMGBM26aqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149902>)

The Allen\-\-Cahn equation is one of the standard phase\-field models for mean\-curvature flow \(MCF\), parameterised by the diffuse\-interface width $\\varepsilon$\. Practical simulations span a working range of $\\varepsilon$, so a single model covering this range is needed\. PDE\-specific neural operators are accurate but must be retrained at every $\\varepsilon$; general neural operators cover $\\varepsilon$ in one model but lose the phase\-field structure of the target\. We introduce Interface\-Augmented Diffusion\-Reaction \(IADR\), a neural operator that addresses both shortcomings: a target network with a diffusion\-and\-reaction structure preserves the phase\-field structure of the Allen\-\-Cahn equation, while a hypernetwork that maps $\\varepsilon$ to the weights of this target network amortises the dependence on $\\varepsilon$ across the working range\. A single IADR matches the per\-$\\varepsilon$ specialists on in\-distribution data, retains their cross\-shape generalisation under both $\\varepsilon$\- and geometry\-out\-of\-distribution shifts, and runs at the per\-$\\varepsilon$ specialist's per\-step inference cost\. We further establish a $K$\-step rollout error bound that aligns with the long\-horizon behaviour observed in experiments\.

## Quantum Composite Hypothesis Testing with Small Error

**Authors:** Chenghua Liu; Qisheng Wang

**ID:** 155745 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3JkMeZJNAg>) | [PDF](<https://openreview.net/pdf?id=3JkMeZJNAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155745>)

We present a method of quantum composite hypothesis testing with small error, which enables us to establish quantum lower bounds in nonparametric statistics and high\-dimensional functional estimation\. This is achieved by introducing trigonometric polynomials into the quantum polynomial method, thereby generalizing the quantum phase\-estimation lower bound of Mande and de Wolf \(ESA 2023\)\. As applications, we settle the quantum complexities of several problems in property testing and functional estimation with small error:  \- For $\\ell\_2$\-closeness testing, we show that the approach of Luo et al\. \(\*IEEE Trans\. Inf\. Theory\* 2024\) is optimal\.  \- For Tsallis entropy estimation, where $q=2$ corresponds to the Gini impurity, we show that the approaches of Buhrman et al\. \(\*Phys\. Rev\. Lett\.\* 2001\) and Ekert et al\. \(\*Phys\. Rev\. Lett\.\* 2002\) are optimal for integer $q \\geq 2$, and that the approach of Chen et al\. \(ICALP 2026\) is near\-optimal for real $q \\geq 1\.5$\.  \- For pure\-state Uhlmann fidelity and trace distance estimation, we show that the approach of Wang \(\*IEEE Trans\. Inf\. Theory\* 2024\) is optimal\.

## Random Neural Network Expressivity for Non\-Linear Partial Differential Equations

**Authors:** Muhammed Ali Mehmood; Lukas Gonon

**ID:** 149710 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=o0qCvNr17F>) | [PDF](<https://openreview.net/pdf?id=o0qCvNr17F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149710>)

Neural networks with randomly generated hidden weights \(RaNNs\) have been extensively studied, both as a standalone learning method and as an initialization for fully trainable deep learning methods\. In this work, we study RaNN expressivity for learning solutions to non\-linear partial differential equations \(PDEs\)\. Despite their widespread use in practical applications, a rigorous theoretical understanding of the approximation properties of RaNNs in this context remains limited\. Here, we derive error bounds for RaNN approximations to time\-dependent Sobolev functions and obtain a dimension\-free approximation rate $\\frac\{1\}\{2\}$ for sufficiently regular functions\. We apply our results to two important classes of non\-linear PDEs: Porous Medium Equations and Compressible Navier\-Stokes Equations, showing that RaNNs are capable of efficiently approximating solutions to these complex, non\-linear PDEs\. Our theoretical analysis is supported by numerical experiments, validating the obtained convergence rates\.

## Quantum Best Arm Identification with Limited Round of Adaptivity: Lower Bounds and Algorithms

**Authors:** Haoran Li; Chen Wang; Xuchuang Wang

**ID:** 148383 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yHmvALnDHe>) | [PDF](<https://openreview.net/pdf?id=yHmvALnDHe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148383>)

Best arm identification, also known as pure exploration, is a fundamental problem in the multi\-armed bandit \(MAB\) model\.     Recent quantum algorithms achieve $O\(n/\\Delta\_\{\[2\]\}\)$ query complexity for identifying the best arm with high constant probability, but all of them require $\\Omega\(\\log\(1/\\Delta\_\{\[2\]\}\)\)$ or $\\Omega\(\\log n\)$ adaptive rounds\.     Motivated by the practical cost of adaptivity on near\-term quantum hardware, where each round incurs substantial overhead from state re\-preparation and classical\-\-quantum communication, we study quantum best arm identification with no or very limited adaptivity\.     On the lower bound side, we prove that any non\-adaptive quantum algorithm must make $\\Omega\(n\\log n\)$ queries when $\\Delta\_\{\[2\]\}=O\(1\)$, establishing a separation between adaptive and non\-adaptive algorithms\.     To complement this lower bound, we present an algorithm that identifies the best arm with high constant probability using $O\(n/\\Delta\_\{\[2\]\}\)$ queries and only $\\log^\*\(n\)\+1$ adaptive rounds\.     En route to the lower bound, we show that the instances and techniques used to prove adaptivity lower bounds for classical bandits, such as those of Agarwal et al\. \[COLT'17\], do not extend to the quantum setting\.     As such, we employ the polynomial method to prove our adaptivity lower bounds\. To the best of our knowledge, this represents the first application of the polynomial method in this context, which may be of independent interest\.

## Quantum Speedup of Multi\-armed Bandits at Scale by Tackling Memory Decoherence

**Authors:** Rohit Muralitharan; Mark Squillante; Chen Wang; Xuchuang Wang; Chai Wah Wu

**ID:** 154155 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FpwVLxul2m>) | [PDF](<https://openreview.net/pdf?id=FpwVLxul2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154155>)

_Abstract unavailable from the accessible public sources._

## InformedXRD: Reproducible Benchmarks and Physics\-Informed Evaluation for Powder Diffraction Symmetry Classification

**Authors:** Edward G Friedman; Elizabeth J Baggett; Abhishek Shetty; Derrick Chan\-Sew; Vanellsa Acha; Harshitha Dwaracherla; P\. A Kienzle; William Ratcliff

**ID:** 138981 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=snum235vrK>) | [PDF](<https://openreview.net/pdf?id=snum235vrK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138981>)

_Abstract unavailable from the accessible public sources._

## Neural Harmonic Measure Operator

**Authors:** Jinjin He; Sinan Wang; Yuchen Sun; Bo Zhu

**ID:** 151113 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=csUQ0IwX0R>) | [PDF](<https://openreview.net/pdf?id=csUQ0IwX0R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151113>)

_Abstract unavailable from the accessible public sources._

## AOT\-POT: Adaptive Operator Transformation for Large\-Scale PDE Pre\-training

**Authors:** Qitan Lv; Hong Wang; Hao Zhongkai; Wen Wu; Xuenan Xu; Bowen Zhou; Feng Wu; Chao Zhang

**ID:** 153792 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdluSNs3f6>) | [PDF](<https://openreview.net/pdf?id=IdluSNs3f6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153792>)

_Abstract unavailable from the accessible public sources._

## Derived Fields Preserve Fine\-Scale Detail in Budgeted Neural Simulators

**Authors:** Wenshuo Wang; Fan Zhang

**ID:** 152570 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8JSn3ujCO>) | [PDF](<https://openreview.net/pdf?id=S8JSn3ujCO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152570>)

_Abstract unavailable from the accessible public sources._

## Energy\-Guided Transport for Projection\-Free Physics\-Informed Flow Matching

**Authors:** Giuliano Galadini; Aurelio Uncini; Danilo Comminiello

**ID:** 154978 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9UPtcUT0hz>) | [PDF](<https://openreview.net/pdf?id=9UPtcUT0hz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154978>)

Deep generative models, particularly Flow Matching frameworks, have emerged as powerful tools for synthesizing complex physical systems\. However, standard architectures remain purely statistically driven and agnostic to the underlying governing equations, often violating fundamental physical constraints during inference\. Existing zero\-shot approaches designed to enforce these constraints typically rely on rigid algebraic projections\. While effective for sparse boundary conditions, applying such discrete geometric corrections to dense, full\-domain PDEs disrupts the probability path, pulling samples off the learned manifold and introducing intractable computational overhead\. To address these challenges, we introduce Energy\-Guided Transport, a novel training\-free framework that formulates non\-linear physical constraints as a smooth potential energy landscape\. Rather than interrupting the ODE integration, our method applies a continuous dissipative force directly to the intermediate generative states, seamlessly steering them toward the physical manifold\. By evaluating this force implicitly via reverse\-mode automatic differentiation, our framework preserves the flow's natural dynamics while maintaining an efficient $\\mathcal\{O\}\(N\)$ algorithmic complexity\. We extensively evaluate our framework across various 1D and 2D physical systems, including the chaotic Navier\-Stokes equations\. Our method achieves stable generation without structural divergence, significantly improves the stability\-accuracy trade\-off compared to state\-of\-the\-art methods, and substantially accelerates inference with respect to exact projection strategies\. Code available at: \\url\{https://anonymous\.4open\.science/r/Projection\-free\-energy\-guided\-flow\-matching\-A302\}\.

## Generalizable Physics Simulation through Compositional Energy Minimization

**Authors:** Alexandru Oarga; Yilun Du

**ID:** 153653 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JjtvTbTp56>) | [PDF](<https://openreview.net/pdf?id=JjtvTbTp56>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153653>)

Learning the dynamics of interacting physical systems is a central challenge in machine learning for the physical sciences\. Prevailing architectures such as Graph Neural Networks \(GNNs\) and feedforward models often fail to explicitly capture the compositional nature of physical laws\. Instead of modeling the forces that govern a system, these networks learn to approximate aggregate state transitions\. As a result, they lack a causal understanding of the underlying physics interactions, leading to poor generalization in out\-of\-distribution systems with varying numbers of entities or novel configurations\. In this work, we introduce Compositional Potential Minimization \(CPM\), a framework that casts simulation as an energy minimization procedure over a composition of learned force potentials\. Each force component is represented as a separate, interpretable energy landscape, and interaction dynamics emerge from their addition\. Inference in CPM is framed as a global energy minimization problem over an arbitrary number of composed functions\. Because CPM learns to disentangle separate forces during training, it enables seamless generalization during test time to larger\-scale systems and unseen configurations through straightforward compositions of the learned energy components\. Our experiments show that CPM significantly outperforms previous state\-of\-the\-art GNN\-based solutions in 2D, 3D, and particle\-based simulations\.

## Neuromodulated Constrained Autoencoders for Context\-Dependent Manifold Learning

**Authors:** Jérôme Adriaens; Gustave Bainier; Guillaume Drion; Pierre Sacré

**ID:** 150082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=krhi01CVlP>) | [PDF](<https://openreview.net/pdf?id=krhi01CVlP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150082>)

Many physical systems exhibit a low\-dimensional structure that varies with external parameters: link lengths in a robot, forcing constants in a fluid, or Reynolds numbers in a flow shift the underlying manifold while preserving its intrinsic dimension\. Constrained AutoEncoders \(cAEs\) learn such manifolds through an \*idempotent\* encoder\-decoder projection, a property that unconstrained autoencoders cannot match and that is essential whenever the model is applied iteratively\. However, the standard strategies for making a cAE context\-dependent, namely concatenating the context to the input or affinely modulating hidden activations, break the encoder\-decoder idempotency, sacrificing the projection guarantee precisely in the setting where it would be most valuable\. To restore this guarantee under context variation, we developed the Neuromodulated Constrained Autoencoder \(NcAE\), which modulates the activation slope and bias of a cAE through a context\-driven hyper\-network\. This paper presents the NcAE, its theoretical foundation, and its empirical validation\. We prove that for every context, including contexts unseen at training time, the reconstruction map remains an idempotent projection, the topology of the learned manifold is invariant, and context perturbations induce smooth changes in the manifold\. We evaluated our approach on a 16\-DoF pendulum with context dependent coupling and the Lorenz96 system across a bifurcation\. The NcAE matched or exceeded the best of six baselines on reconstruction, idempotency, and latent\-geometry metrics, while being the only architecture that preserves geometric consistency by construction\. The NcAE thereby provides a stable, geometry\-preserving coordinate system across families of physical regimes\.

## Efficient and Robust Physical 3DGS\-MPM Simulation via Interior Filling and Text\-Physics Optimization

**Authors:** Yikun Ma; Yiqing Li; Jingwen Ye; Zhongkai Wu; Weidong Zhang; Lin Gao; Zhi Jin

**ID:** 149910\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149910

[Paper](<https://openreview.net/forum?id=mHqLsJydRH>) | [PDF](<https://openreview.net/pdf?id=mHqLsJydRH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149910>)

Extending 3D Gaussian Splatting \(3DGS\) to 4D physical simulation remains challenging\. Based on the Material Point Method \(MPM\), existing methods either rely on manual parameter tuning or distill dynamics from video diffusion models, limiting the generalization and optimization efficiency\. Recent attempts using LLMs/VLMs suffer from a text/image\-to\-3D perceptual gap, yielding unstable physics behavior\. In addition, they often ignore the surface structure of 3DGS, leading to implausible motion\. We propose FastPhysGS, a fast and robust framework for physics\-based dynamic 3DGS simulation: \(1\) Instance\-aware Particle Filling \(IPF\) with Monte Carlo Importance Sampling \(MCIS\) to efficiently populate interior particles while preserving geometric fidelity; \(2\) Bidirectional Graph Decoupling Optimization \(BGDO\), an adaptive strategy that rapidly optimizes material parameters predicted from a VLM\. Experiments show FastPhysGS achieves high\-fidelity physical simulation in 1 minute using only 7 GB runtime memory, outperforming prior works with broad potential applications\.

## PhysAgentGym: Free Physical\-Law Verifiers for Training Small Code\-Reasoning Agents

**Authors:** Lama Moukheiber

**ID:** 153149 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NV5qjfDXZB>) | [PDF](<https://openreview.net/pdf?id=NV5qjfDXZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153149>)

Code\-reasoning agents trained from rollouts typically rely on costly verifiers — expert annotation, hand\-written unit tests, or learned reward models — each of which scales poorly across domains\. We argue that in domains with closed\-form physical laws, the laws themselves form a free, dense, automatic class of reward signals\. We instantiate this for physics via PhysAgentGym, an agentic code\- execution gym in which a language model receives a physics scenario, writes Python that simulates it, and emits a trajectory scored by a rule\-based verifier that compiles natural\-language standards into executable trajectory predicates\. Verifier signals are label\-free: physical laws supply the ground truth without any per\-task annotation\. Across four physics subcategories totaling 1,320 closed\-form\- simulator task instances, two frontier models, Claude Sonnet 4\.5 and OpenAI GPT\-5, achieve nearly\-identical aggregate scores \(0\.944 and 0\.945 at N=30 each\), with per\-cell agreement within 0\.5 pp, providing independent evidence the verifier is well\-calibrated rather than arbitrary\. We filter 491 successful frontier trajectories on two in\-distribution subcategories into an SFT corpus and train Qwen\-2\.5\-Coder \{1\.5B, 3B, 7B\} with QLoRA\. The trained 7B adapter reaches mean = 0\.942 on the four\-subcategory test set, matching both frontier models within 0\.3 pp on aggregate at approximately 50×lower inference cost\. It scores identically to both Sonnet and GPT\-5 on all three in\-distribution subcategories and ties them within 0\.8 pp on out\-of\-distribution Damping, despite never seeing damping data in training\. We further show that combined sparse\-and\-dense reward filtering beats sparse\-only filtering by 1\.4–8\.7 pp, that smaller models exhibit fundamental seed brittleness which disappears at 3B and above, and that scale enables the OOD generalization that 1\.5B and 3B do not provide\. The method is portable to any domain admitting closed\-form physical laws

## Scaling Arbitrary Architectures and Optimizers with Automatic Parameterization

**Authors:** Shikai Qiu; Charlie Chen; Andres Potapczynski; Martin Marek; Andrew Wilson

**ID:** 153199\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153199

[Paper](<https://openreview.net/forum?id=N6J19VlnAM>) | [PDF](<https://openreview.net/pdf?id=N6J19VlnAM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153199>)

Training neural networks at scale requires careful per\-layer scaling of initialization, learning rate, and other optimizer hyperparameters, with the right rules depending jointly on the architecture, the optimizer, and which axis \(width $D$, depth $L$, batch size $B$, etc\.\) is being scaled\. Current practice is to derive each rule by hand, as in $\\mu$P for width, CompleteP for depth, SDE\-based and EMA\-timescale arguments for batch size, and tailored prescriptions for matrix\-preconditioned optimizers; as architectures, optimizers, and scaling axes continue to evolve, this hand derivation is increasingly a bottleneck to combining these advances at scale\. We show that these derivations can be systematized by solving a linear system over hyperparameter exponents to satisfy the scaling constraints imposed by each primitive instruction of the training program, analogous to dimensional analysis in physics that enforces matched units on both sides of an equation\. We develop \\emph\{automatic parameterization\} \(AutoP\), a system that reads these rules off a traced training program and solves the resulting system to assign a scaling exponent to every hyperparameter, and provide a concrete JAX implementation\. From a few primitive rules, AutoP recovers $\\mu$P for width on Transformers, Monarch\-structured Transformers, mixture\-of\-experts, and ResNets under Adam, SignSGD, Muon, and AdaMuon; CompleteP for depth; and the known batch\-size prescriptions for the learning rate and AdamW weight decay\. It also identifies new rules for the recurrence count in looped transformers, the context length in linear\-attention and MLP\-Mixer models, and the batch\-size scaling for Muon's learning rate, all of which we demonstrate as empirically beneficial\. Analogous to automatic differentiation, our results suggest that robust hyperparameter scaling rules can be automated, freeing practitioners to scale up new architectures and optimizers without rederiving the underlying theory or risking subtle errors that quietly cost compute at scale\.

## Acting without Knowing: Planning, Prediction, and Transfer Dissociate in Interactive Visual Physics

**Authors:** Alison Gopnik; Eunice Yiu; Kevin Murphy; Kelsey Allen; Shiry Ginosar

**ID:** 139556\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139556

[Paper](<https://openreview.net/forum?id=IoODzTVUwp>) | [PDF](<https://openreview.net/pdf?id=IoODzTVUwp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139556>)

Evaluations of large multimodal models \(LMMs\) often conflate behavioral task success with true physical understanding\. However, classical accounts of \`\`world models'' dictate that physical understanding requires the unified operation of three core capacities: planning, prediction, and positive transfer\. Because current benchmarks typically test these three abilities in isolation, they often obscure whether models actually possess a cohesive internal world representation\. In this paper, we propose a joint evaluation protocol to test whether LMMs acquire a more complete and consistent understanding of the physical world\. Using a suite of virtual physics\-based puzzles, models are tasked with placing a tool in a scene to alter its dynamics, iteratively revising their placements based solely on visual feedback\. By testing the same models on the exact same tasks, we uncover a stark dissociation between acting and knowing\. While LMMs can sometimes solve diverse physical goals under an interactive action\-feedback protocol, their success is not accompanied by robust feedback\-guided replanning, accurate prediction, or human\-like predictive transfer to new actions\. Models show weak and inconsistent prediction of the consequences of their own proposed actions, and their predictive transfer to new actions is partial, inconsistent, and less selectively goal\-directed than in humans\. Ultimately, we demonstrate that the capacities a world model should wholly unify remain only loosely connected\. We therefore argue that benchmarks for LMMs should not measure task success alone, but should jointly evaluate planning, prediction, and transfer\.

## Manifold\-weighted neural networks

**Authors:** Junyu Ren; Lek\-Heng Lim

**ID:** 154849\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154849

[Paper](<https://openreview.net/forum?id=AS3nvwjiyw>) | [PDF](<https://openreview.net/pdf?id=AS3nvwjiyw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154849>)

We establish universal approximation for neural networks whose weight matrices take values in matrix manifolds\. The nonlinear matrix manifolds considered in this work arise as orbits of classical Lie group actions embedded in the ambient space $\\mathbb\{R\}^\{d \\times k\}$\. Stiefel manifolds provide a prominent example with empirical precedent in prior neural\-network models\. We present an expanded catalog of such manifolds, drawing from well\-studied constructions in physics and differential geometry\. These manifolds are particularly appealing for intrinsic Riemannian optimization: the transitivity of the underlying group action yields explicit tangent\-space descriptions and retractions\. Moreover, the group\-action structure enables parameter\-efficient factorizations, reducing the number of trainable variables\. This leads to a fundamental expressivity question: when weight matrices take values in nonlinear matrix manifolds, which architectures retain universal approximation power? We prove that manifold\-weighted networks with residual connections and bounded scalar multipliers are $L^p\(K\)$\-universal\. To establish universality across our manifold catalog, we introduce two independent sets of sufficient conditions: Register\-Isolated Primitive Realizability \(RIPR\) and Cross\-Axis Fold\-and\-Cut \(CAFC\)\. These conditions correspond to two distinct approximation constructions\. By verifying RIPR or CAFC case by case for the matrix manifolds in our catalog, we establish universality for the corresponding residual manifold\-weighted networks with bounded scalar multipliers\.

## Mollifier Layers: Enabling Efficient High\-Order Derivatives in Inverse PDE Learning

**Authors:** Vinayak Vinayak; Ananyae bhartari; Vivek Shenoy

**ID:** 156782\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156782

[Paper](<https://openreview.net/forum?id=6mFVZSzyev>) | [PDF](<https://openreview.net/pdf?id=6mFVZSzyev>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156782>)

Parameter estimation in inverse problems involving partial differential equations \(PDEs\) underpins modeling across scientific disciplines, especially when parameters vary in space or time\. Physics\-informed Machine Learning \(PhiML\) integrates PDE constraints into deep learning, but prevailing approaches depend on recursive automatic differentiation \(autodiff\), which produces inaccurate high\-order derivatives, inflates memory usage, and underperforms in noisy settings\. We propose Mollifier Layers, a lightweight, architecture\-agnostic module that replaces autodiff with convolutional operations using analytically defined mollifiers\. This reframing of derivative computation as smoothing integration enables efficient, noise\-robust estimation of high\-order derivatives directly from network outputs\. Mollifier Layers attach at the output layer and require no architectural modifications\. We compare them with three distinct architectures and benchmark performance across first\-, second\-, and fourth\-order PDEs—including Langevin dynamics, heat diffusion, and reaction\-diffusion systems—observing significant improvements in memory efficiency, training time and accuracy for parameter recovery across tasks\. To demonstrate practical relevance, we apply Mollifier Layers to infer spatially varying epigenetic reaction rates from super\-resolution chromatin imaging data—a real\-world inverse problem with biomedical significance\. Our results establish Mollifier Layers as an efficient and scalable tool for physics\-constrained learning\.

## Reinforcement Learning with Verifiable Physics: Post\-training LLMs for PDE Solver Generation

**Authors:** Pengfei Cai; Utkarsh Utkarsh; Alan Edelman; Christopher Rackauckas; Rafael Gomez\-Bombarelli

**ID:** 151548 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZopflnQLAZ>) | [PDF](<https://openreview.net/pdf?id=ZopflnQLAZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151548>)

_Abstract unavailable from the accessible public sources._

## Physics\-Informed Functional Tucker Method with RKHS Factors for Sparse Spatiotemporal Reconstruction

**Authors:** Zhengyang Liu; Jianguo Huang; Junxi Hu; Yucheng Mi; Haojie Cai; Wenxuan Shen; zhikun zhang; Renfeng Peng; Guangtao Zhang; Zhiqiang Liu

**ID:** 152965 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P1pyUg7i5c>) | [PDF](<https://openreview.net/pdf?id=P1pyUg7i5c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152965>)

_Abstract unavailable from the accessible public sources._

## Structural Blindness in Latent Data Assimilation: Representation Geometry Misleads Sensor Design

**Authors:** Yongquan Qu; Pierre Gentine

**ID:** 152860 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pr0dB2FD5u>) | [PDF](<https://openreview.net/pdf?id=Pr0dB2FD5u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152860>)

A learned latent space supports reliable scientific decisions only if decisions made in that space remain valid in the original physical variables\. We study latent Kalman\-type data assimilation, where an encoder\-\-decoder pair is trained without knowledge of the sensor used to collect observations\. Can representation\-level diagnostics predict which sensors give accurate physical\-state filtering? In general, no\. We show that any such diagnostic \(a smooth functional of the averaged decoder Fisher matrix, including optimal\-design criteria, posterior Cram\\'er\-\-Rao surrogates, and effective\-observability scores\) sees the sensor only through a \\emph\{Fisher\-\-Gram coarsening\} of the physical sensor Gramian, leaving a large blind spot\. The failure is unconditional, an algebraic consequence of averaging the decoder Jacobian over the latent invariant measure\. The positive side is conditional: when the proportionality between physical and latent filtering error is stable across sensors, latent filtering error ranks sensors accurately, with an explicit Pearson bound\. Decoder smoothness provides one route to this stability, and a linear\-Gaussian Riccati surrogate \(built entirely from the trained latent model and decoder\) empirically tracks the same ranking when full\-state truth is unavailable\. Experiments on five chaotic systems support both sides\. Representation geometry is useful but structurally limited, and reliable sensor ranking in latent data assimilation requires filter\-aware validation rather than decoder\-diagnostic scoring\.

## The Dynamic\-Probabilistic Consistency Gap in Chaotic Surrogate Modeling

**Authors:** Andre Herz; Matthijs Pals; Daniel Durstewitz; Georgia Koppe

**ID:** 152081 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VcROOA5wBN>) | [PDF](<https://openreview.net/pdf?id=VcROOA5wBN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152081>)

Dynamical systems reconstruction \(DSR\) aims to learn surrogate models that capture the dynamics underlying time\-series data\. Reliably deploying these surrogates requires uncertainty estimates consistent with the learned dynamics\. We expose a \*dynamic\-probabilistic consistency\* \(DPC\) gap: the pursuit of finite\-horizon probabilistic objectives can degrade dynamics or decouple predictive uncertainty from the local tangent dynamics it ought to reflect\. We isolate three mechanisms behind this gap: core collapse, noise masking, and blind uncertainty\. Specifically, we show that open\-loop Gaussian rollout objectives can penalize Jacobian\-generated covariance growth in chaotic systems, encouraging optimization shortcuts that weaken physical expansion or decouple uncertainty from it\. To mitigate this gap, we propose KAFFEE \(Kalman\-Aware Framework For Ergodic Emulation\), a differentiable extended Kalman filter\-based training framework that evaluates likelihood on local predictive residuals \(innovations\) while transporting covariance through learned local Jacobians\. On stochastic hyperchaotic Lorenz\-96, KAFFEE reduces the identified failure modes, improves reconstruction of dynamical invariants relative to open\-loop objectives, and maintains competitive predictive scores\. We further show that the DPC gap appears when probabilistically adapting a DSR foundation model across 13 chaotic systems, where KAFFEE enables in\-context Bayesian filtering while largely preserving zero\-shot dynamics\.

## REACT: Physically and Chemically Consistent Reconstruction of Marine Active Tracers

**Authors:** Wenbin Dai; Hao Zheng; Shiyu Liang; Chaofan Sun; Xueying Zhang; HanBo Huang; Xuan Gong; Yiran Zhang; Enhui Liao

**ID:** 150010 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lSLhafWIzZ>) | [PDF](<https://openreview.net/pdf?id=lSLhafWIzZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150010>)

Reconstructing global sea surface pH from sparse observations is critical for monitoring ocean acidification and understanding marine carbon cycling\. Traditional assimilation and inverse models are physically grounded but costly for large\-scale reconstruction\. Recent black\-box and physics\-guided AI models improve efficiency, but are mainly designed for passive tracers, where the reconstructed variable is also the transported inventory\. In contrast, pH is an active carbonate tracer: it is the prediction target, while dissolved inorganic carbon \(DIC\) is the conserved carbon inventory\. This mismatch can produce low pH error while violating carbonate closure and source\-free carbon conservation\. To address this, we introduce \\textbf\{REACT\}, a carbon\-first reconstruction framework that decouples transport, active correction, and chemical decoding\. REACT transports a latent carbonate state with a conservative advection\-\-diffusion solver, captures non\-conservative carbon\-cycle variations with a source module, decodes the corrected state into pH, and constrains the output through carbonate equilibrium\. This design keeps pH as the target while enforcing consistency on the underlying carbon state\. On simulation data, REACT reduces pH NRMSE by \\\(14\.7\\%\\\) and chemical consistency error by \\\(24\.0\\%\\\) over the best baseline\. Cross\-temporal\-scale evaluations show robustness against error accumulation from coarse to fine temporal scales, and ablation studies validate the effectiveness of each component\.

## GLOBE: Accurate Surrogates for Boundary\-Driven PDEs via Domain\-Inspired Architectures and Equivariance

**Authors:** Peter Sharpe

**ID:** 151666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YvUcvzejJe>) | [PDF](<https://openreview.net/pdf?id=YvUcvzejJe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151666>)

We introduce GLOBE, a neural surrogate for boundary\-driven, homogeneous, weakly nonlinear PDEs that draws inductive bias from boundary\-element methods and equivariant ML, representing solutions as superpositions of learnable Green's\-function\-like kernels evaluated from boundary faces to targets\. The architecture is translation\-, rotation\-, and parity\-equivariant; discretization\-invariant; and units\-invariant via rigorous nondimensionalization\. On AirFRANS \(steady incompressible RANS over NACA airfoils\), GLOBE reduces mean\-squared error by roughly $200\\times$ relative to dataset baselines and $50\\times$ relative to the next\-best ML surrogate on interpolation tasks, with $7\\times$–$70\\times$ improvements over the next\-best surrogate in low\-data regimes\. The compact $\{\\sim\} 117 \\rm k$\-parameter model evaluates fields at arbitrary points, handles non\-watertight meshes, and generalizes under Reynolds number and angle\-of\-attack distribution shifts\. We further introduce a hierarchical Barnes\-Hut\-style acceleration that exploits the kernel's guaranteed decay of long\-range influences to reduce evaluation cost from quadratic to near\-linear in the number of boundary elements, with a tunable accuracy parameter that recovers exact dense evaluation in its strict limit\. We demonstrate scalability to 3D industrial geometries via a proof\-of\-concept on DrivAerML car aerodynamics\. Together these results show that physics\-inspired inductive biases yield large gains in accuracy and practicality for ML\-based surrogates of boundary\-driven PDEs while remaining tractable at industrial 3D scales\.

## Patch Hierarchical Attention Transformers for Efficient Particle Jet Tagging

**Authors:** Zihan Zhao; Aaron Wang; Alan Xia; Chang Sun; Javier Duarte; Abhijith Gandrakota; Jennifer Ngadiuba; Richard Cavanaugh

**ID:** 149444 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q2cOojxQAv>) | [PDF](<https://openreview.net/pdf?id=q2cOojxQAv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149444>)

Real\-time jet tagging is critical for identifying short\-lived particle decays in the high\-throughput detectors of the Large Hadron Collider, where real\-time trigger systems which are responsible for deciding which collision events to store impose strict latency and accuracy constraints\. Transformer architectures achieve the highest jet tagging accuracy when compute is unconstrained, but their quadratic self\-attention cost places them orders of magnitude beyond the trigger budget\. Existing efficient variants reduce this cost by compressing the attention matrix or restricting it to ordered local windows, at the price of the explicit particle\-particle interactions that drive substructure identification\. To address this limitation, we introduce the Patch Hierarchical Attention Transformer \(PHAT\-JeT\), which combines two mechanisms: a physics\-inspired geometric message\-passing module that encodes local detector\-plane structure, and a hierarchical patch\-based attention scheme that computes exact attention within small particle groups while preserving global context through lightweight patch\-token communication\. Within this compute budget, PHAT\-JeT achieves state\-of\-the\-art accuracy and background rejection among resource\-constrained jet tagging models on four benchmarks \(hls4ml, JetClass, Top Tagging, and Quark\-Gluon\)\. Our code is available at https://anonymous\.4open\.science/r/PHAT\-JeT\-540B/README\.md

## TORNADO: Adaptive Latent Stochastic Transport for Calibrated Probabilistic PDE Forecasting

**Authors:** Jorge Mifsut Benet; Armand Kassaï Koupaï; Ramon Daniel Regueiro\-espino; Nicolas Baskiotis; Patrick Gallinari

**ID:** 150449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hxP9I13XQ2>) | [PDF](<https://openreview.net/pdf?id=hxP9I13XQ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150449>)

Probabilistic neural surrogates for PDEs enable ensemble forecasting, but often exhibit miscalibration when used for uncertainty quantification, especially in compute\-constrained, few\-step inference regimes\. Existing generative approaches typically rely on fixed global stochasticity, which cannot adapt predictive uncertainty to the local dynamical state\.  We propose TORNADO, a latent probabilistic forecasting framework that formulates next\-step prediction as stochastic transport between VAE encoder posteriors\.  Unlike existing approaches with globally prescribed stochasticity, TORNADO learns a SDE with state\-dependent diffusion, enabling the predictive uncertainty to adapt to the local latent dynamics\. The model is trained using analytic conditional endpoint targets derived from a Gaussian interpolant, enabling simulation\-free learning\. An additional energy distance regularization term improves distributional alignment\. Empirically, TORNADO improves uncertainty calibration over representative generative baselines, including stochastic interpolants, diffusion models, and flow matching, while maintaining comparable predictive accuracy\. Our results show that adapting stochasticity to the latent state, rather than prescribing it globally, is an effective mechanism for improving calibration in practical neural PDE forecasting settings\.

## Dynamic Quadtree Tokenization for Autoregressive PDE Forecasting

**Authors:** Yilin Zhuang; Noah Zambrano; Karthik Duraisamy

**ID:** 152814 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QEBPUFXUHr>) | [PDF](<https://openreview.net/pdf?id=QEBPUFXUHr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152814>)

_Abstract unavailable from the accessible public sources._

## KerONet: A Single Softmax Readout Suffices for Physics\-Informed Operator Learning

**Authors:** Seth Dale; Carolyn Koh; Dinesh Mehta

**ID:** 150115 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kaHFJVwIAG>) | [PDF](<https://openreview.net/pdf?id=kaHFJVwIAG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150115>)

_Abstract unavailable from the accessible public sources._

## S$^\{2\}$\-PINN: Stochastic Separable Physics\-Informed Neural Networks

**Authors:** Zhendong Li; Akwum Onwunta

**ID:** 149954 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lwTb5ix4w9>) | [PDF](<https://openreview.net/pdf?id=lwTb5ix4w9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149954>)

_Abstract unavailable from the accessible public sources._

## QEC Model Zoo: Democratizing AI\-enhanced Quantum Error Correction

**Authors:** Yuandou Wang; Maxim de Groot; Aadi Patwardhan; Floris Geerts; Rihan Hai

**ID:** 139803 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3hB3hPXBgx>) | [PDF](<https://openreview.net/pdf?id=3hB3hPXBgx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139803>)

_Abstract unavailable from the accessible public sources._

## A meshfree exterior calculus for generalizable and data\-efficient learning of physics from point clouds

**Authors:** Benjamin Shaffer; Brooks Kinch; M\. Ani Hsieh; Nathaniel Trask

**ID:** 154490 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DDvFxExo8j>) | [PDF](<https://openreview.net/pdf?id=DDvFxExo8j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154490>)

_Abstract unavailable from the accessible public sources._

## INEUS: Iterative Neural Solver for High\-Dimensional PIDEs

**Authors:** Jean\-Loup Dupret; Davide Gallon; Patrick Cheridito

**ID:** 154584 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CUrpPtcWL3>) | [PDF](<https://openreview.net/pdf?id=CUrpPtcWL3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154584>)

In this paper, we introduce INEUS, a meshfree iterative neural solver for partial integro\-differential equations \(PIDEs\)\. The method replaces the explicit evaluation of nonlocal jump integrals with single\-jump sampling and reformulates PIDE solving as a sequence of recursive regression problems\. Like Physics\-Informed Neural Networks \(PINNs\), INEUS learns global solutions over the entire space\-time domain, yet it offers a more efficient treatment of nonlocal terms and avoids the computationally expensive differentiation of full PIDE residuals\. These features make INEUS particularly well suited for high\-dimensional PDEs and PIDEs\. Supported by a contraction\-based convergence proof for linear PIDEs, our numerical experiments show that INEUS delivers accurate and scalable solutions for various high\-dimensional linear and nonlinear examples\.

## AnyMo: Geometry\-Aware Setup\-Agnostic Modeling of Human Motion in the Wild

**Authors:** Baiyu Chen; Zechen Li; Wilson Wongso; Lihuan Li; Xiachong LIN; Hao Xue; Benjamin Tag; Flora Salim

**ID:** 154127 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G4z36ToJi1>) | [PDF](<https://openreview.net/pdf?id=G4z36ToJi1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154127>)

As wearable and mobile devices become increasingly embedded in daily life, they offer a practical way to continuously sense human motion in the wild\. But inertial signals are highly dependent on the sensing setup, including body location, mounting position, sensor orientation, device hardware, and sampling protocol\. This setup dependence makes it difficult to learn motion representations that transfer across devices and datasets, and limits the broader use of wearable IMUs beyond closed\-set recognition\. We introduce AnyMo, a geometry\-aware framework for setup\-agnostic human motion modeling\. AnyMo uses physics\-grounded IMU simulation over dense body\-surface placements to generate diverse and plausible synthetic signals, pre\-trains a graph encoder from paired synthetic placement views and masked partial observations, tokenizes multi\-position IMU into full\-body motion tokens, and aligns these tokens with an LLM for motion\-language understanding\. We evaluate AnyMo on three complementary tasks: zero\-shot activity recognition across 14 unseen downstream datasets, cross\-modal retrieval, and wearable IMU motion captioning, where it improves average Accuracy/F1/R@2 by 11\.7\\%/11\.6\\%/22\.6\\% on HAR, increases zero\-shot IMU\-to\-text and text\-to\-IMU retrieval MRR by 15\.9\\% and 28\.6\\%, respectively, and improves zero\-shot captioning BERT\-F1 by 18\.8\\%\. These results support AnyMo as a generalist model for wearable motion understanding in the wild\. Code is at \\url\{https://anonymous\.4open\.science/r/anymo\}\.

## Q\-CoMove: Differentiable Quantum Circuit Priors for Coordinated Motion in Multi\-Component Embodied Systems

**Authors:** Ke Shi; Fanqi Kong; Yuchen Wang; Zhipeng Liu; Tingting Li; Ziming Zhao

**ID:** 153566 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KQmzoa2vU6>) | [PDF](<https://openreview.net/pdf?id=KQmzoa2vU6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153566>)

Multi\-component embodied robots must coordinate the base, arm, camera, gripper, and local environment under shared spatial and temporal constraints\. We present Q\-CoMove, a coordinated motion framework that models this platform as a coupled dynamical system\. Q\-CoMove uses a differentiable circuit\-style prior implemented with the TorchQuantum simulator on classical hardware: component states are encoded into a five\-qubit register, cross\-component dependence is parameterized by a 79\-gate simulated circuit, and 25 measured statistics are projected into a coordination latent that conditions a physics\-residual dynamics model and a joint action generator\. We position this module as a compact structured coordination bottleneck rather than a claim of quantum advantage or physical necessity\. Across parameter\-matched Transformer and GNN baselines, residual\-dynamics and joint MPC baselines, ablations, and robustness stress tests in simulation, Q\-CoMove improves coordination metrics with bounded inference cost\. All empirical results are limited to simulated environments, and the current study does not isolate the circuit prior against a structure\-matched classical bottleneck\.

## Efficient and Robust Physical 3DGS\-MPM Simulation via Interior Filling and Text\-Physics Optimization

**Authors:** Yikun Ma; Yiqing Li; Jingwen Ye; Zhongkai Wu; Weidong Zhang; Lin Gao; Zhi Jin

**ID:** 149910\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149910

[Paper](<https://openreview.net/forum?id=mHqLsJydRH>) | [PDF](<https://openreview.net/pdf?id=mHqLsJydRH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149910>)

Extending 3D Gaussian Splatting \(3DGS\) to 4D physical simulation remains challenging\. Based on the Material Point Method \(MPM\), existing methods either rely on manual parameter tuning or distill dynamics from video diffusion models, limiting the generalization and optimization efficiency\. Recent attempts using LLMs/VLMs suffer from a text/image\-to\-3D perceptual gap, yielding unstable physics behavior\. In addition, they often ignore the surface structure of 3DGS, leading to implausible motion\. We propose FastPhysGS, a fast and robust framework for physics\-based dynamic 3DGS simulation: \(1\) Instance\-aware Particle Filling \(IPF\) with Monte Carlo Importance Sampling \(MCIS\) to efficiently populate interior particles while preserving geometric fidelity; \(2\) Bidirectional Graph Decoupling Optimization \(BGDO\), an adaptive strategy that rapidly optimizes material parameters predicted from a VLM\. Experiments show FastPhysGS achieves high\-fidelity physical simulation in 1 minute using only 7 GB runtime memory, outperforming prior works with broad potential applications\.

## PhysAgentGym: Free Physical\-Law Verifiers for Training Small Code\-Reasoning Agents

**Authors:** Lama Moukheiber

**ID:** 153149\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153149

[Paper](<https://openreview.net/forum?id=NV5qjfDXZB>) | [PDF](<https://openreview.net/pdf?id=NV5qjfDXZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153149>)

Code\-reasoning agents trained from rollouts typically rely on costly verifiers — expert annotation, hand\-written unit tests, or learned reward models — each of which scales poorly across domains\. We argue that in domains with closed\-form physical laws, the laws themselves form a free, dense, automatic class of reward signals\. We instantiate this for physics via PhysAgentGym, an agentic code\- execution gym in which a language model receives a physics scenario, writes Python that simulates it, and emits a trajectory scored by a rule\-based verifier that compiles natural\-language standards into executable trajectory predicates\. Verifier signals are label\-free: physical laws supply the ground truth without any per\-task annotation\. Across four physics subcategories totaling 1,320 closed\-form\- simulator task instances, two frontier models, Claude Sonnet 4\.5 and OpenAI GPT\-5, achieve nearly\-identical aggregate scores \(0\.944 and 0\.945 at N=30 each\), with per\-cell agreement within 0\.5 pp, providing independent evidence the verifier is well\-calibrated rather than arbitrary\. We filter 491 successful frontier trajectories on two in\-distribution subcategories into an SFT corpus and train Qwen\-2\.5\-Coder \{1\.5B, 3B, 7B\} with QLoRA\. The trained 7B adapter reaches mean = 0\.942 on the four\-subcategory test set, matching both frontier models within 0\.3 pp on aggregate at approximately 50×lower inference cost\. It scores identically to both Sonnet and GPT\-5 on all three in\-distribution subcategories and ties them within 0\.8 pp on out\-of\-distribution Damping, despite never seeing damping data in training\. We further show that combined sparse\-and\-dense reward filtering beats sparse\-only filtering by 1\.4–8\.7 pp, that smaller models exhibit fundamental seed brittleness which disappears at 3B and above, and that scale enables the OOD generalization that 1\.5B and 3B do not provide\. The method is portable to any domain admitting closed\-form physical laws

## Bounds on Extrapolation across Phase Transitions with Generalized Regression

**Authors:** Jeffrey Wei; Manolis Zampetakis; John Sous

**ID:** 153578\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153578

[Paper](<https://openreview.net/forum?id=KMhpQBznmA>) | [PDF](<https://openreview.net/pdf?id=KMhpQBznmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153578>)

Phase transitions occur when a physical system undergoes a dramatic transformation as it crosses a transition\. We study whether regression methods trained only in one phase can predict the physical properties that characterize the unobserved phase\. Our test sets consist of the analytically tractable Heisenberg model and angle\-resolved photoemission spectroscopy measurements of a venerable high transition temperature superconductor\. We find that polynomial regression and kernel methods recover the unobserved phase structure, while standard neural networks fail\. To bound the error, we adopt the generalized eigenvalue problem \(GEVP\) into an upper bound on the worst\-case transfer coefficient, defined as the ratio of mean squared error \(MSE\) loss on the extrapolation region to the MSE loss on the training region\. Empirically, we find that our GEVP bound stays approximately constant with respect to the empirical transfer coefficient across training\-set sizes and distance between the training and extrapolation region for both datasets, providing a principled framework for studying extrapolation feasibility\.

## Manifold\-weighted neural networks

**Authors:** Junyu Ren; Lek\-Heng Lim

**ID:** 154849\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154849

[Paper](<https://openreview.net/forum?id=AS3nvwjiyw>) | [PDF](<https://openreview.net/pdf?id=AS3nvwjiyw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154849>)

We establish universal approximation for neural networks whose weight matrices take values in matrix manifolds\. The nonlinear matrix manifolds considered in this work arise as orbits of classical Lie group actions embedded in the ambient space $\\mathbb\{R\}^\{d \\times k\}$\. Stiefel manifolds provide a prominent example with empirical precedent in prior neural\-network models\. We present an expanded catalog of such manifolds, drawing from well\-studied constructions in physics and differential geometry\. These manifolds are particularly appealing for intrinsic Riemannian optimization: the transitivity of the underlying group action yields explicit tangent\-space descriptions and retractions\. Moreover, the group\-action structure enables parameter\-efficient factorizations, reducing the number of trainable variables\. This leads to a fundamental expressivity question: when weight matrices take values in nonlinear matrix manifolds, which architectures retain universal approximation power? We prove that manifold\-weighted networks with residual connections and bounded scalar multipliers are $L^p\(K\)$\-universal\. To establish universality across our manifold catalog, we introduce two independent sets of sufficient conditions: Register\-Isolated Primitive Realizability \(RIPR\) and Cross\-Axis Fold\-and\-Cut \(CAFC\)\. These conditions correspond to two distinct approximation constructions\. By verifying RIPR or CAFC case by case for the matrix manifolds in our catalog, we establish universality for the corresponding residual manifold\-weighted networks with bounded scalar multipliers\.

## Theory Guided and Interpretable Neural Operator Design for Partial Differential Equation Learning

**Authors:** Zeyuan Song; Zheyu Jiang

**ID:** 151006 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ddVTfTf0U6>) | [PDF](<https://openreview.net/pdf?id=ddVTfTf0U6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151006>)

Accurate numerical solutions of partial differential equations \(PDEs\) are crucial in numerous science and engineering applications\. In this work, we introduce a novel neural PDE solver named AFDONet, which incorporates neural operator learning and adaptive Fourier decomposition \(AFD\) theory for the first time into a specifically designed variational autoencoder \(VAE\) structure, to solve a general class of nonlinear PDEs on smooth manifolds\. AFDONet is the first neural PDE solver whose architectural and component design is fully guided by an established mathematical framework \(in this case, AFD theory\), turning neural operator design from an art to a science\. Thus, AFDONet also exhibits exceptional mathematical explainability and groundness, and enjoys several desired properties\. Furthermore, AFDONet achieves outstanding solution accuracy and competitive computational efficiency in several benchmark problems\. In particular, thanks to its deep connections with AFD theory, AFDONet shows superior performance in solving PDEs on i\) arbitrary \(Riemannian\) manifolds, and ii\) datasets with sharp gradients\. Overall, this work presents a new paradigm for designing explainable neural operator frameworks\.

## PDE\-SSM: A Spectral State Space Approach to Spatial Mixing in Diffusion Transformers

**Authors:** Eshed Gal; Moshe Eliasof; Eldad Haber

**ID:** 149720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nunyVp7239>) | [PDF](<https://openreview.net/pdf?id=nunyVp7239>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149720>)

The success of vision transformers—especially for generative modeling—is limited by the quadratic cost and weak spatial inductive bias of self\-attention\. We propose PDE\-SSM, a spatial state\-space block that replaces attention with a learnable convection–diffusion–reaction partial differential equation\. This operator encodes a strong spatial prior by modeling information flow via physically grounded dynamics rather than all\-to\-all token interactions\. Solving the PDE in the Fourier domain yields global coupling with near\-linear complexity, delivering a principled and scalable alternative to attention\. We integrate PDE\-SSM into a flow\-matching generative model to obtain the PDE\-based Diffusion Transformer PDE\-SSM\-DiT\. Empirically, PDE\-SSM\-DiT matches or exceeds the performance of state\-of\-the\-art Diffusion Transformers while substantially reducing compute\. Our results show that, analogous to 1D settings where SSMs supplant attention, multi\-dimensional PDE operators provide an efficient, inductive\-bias\-rich foundation for next\-generation vision models\.

## Flow Annealing Posterior Sampling for Function\-Space Regression and Inverse Problems

**Authors:** Yaozhong Shi; Zachary Ross; Yisong Yue

**ID:** 148653\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148653

[Paper](<https://openreview.net/forum?id=w8ebg6EwVu>) | [PDF](<https://openreview.net/pdf?id=w8ebg6EwVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148653>)

Principled regression for stochastic processes is a long\-standing challenge with deep connections to scientific inverse problems\. We introduce Flow Annealing Posterior Sampling \(FAPS\), to our knowledge the first function\-space posterior sampling framework that unifies stochastic\-process regression and PDE inverse problems\. Built on pretrained function\-space flow\-matching priors, FAPS enables likelihood\-guided posterior inference from sparse and noisy observations, supports variable query discretizations, and avoids explicit prior\-density evaluation\. Its Langevin correction uses a low\-rank covariance preconditioner to exploit dominant function\-space correlations across discretizations\. Across Gaussian and non\-Gaussian stochastic\-process regression benchmarks and diverse PDE inverse problems, FAPS produces coherent posterior samples with accurate uncertainty quantification, significantly outperforming existing functional regression baselines while remaining computationally efficient\.

## GAIA: Geometry\-Adaptive Operator Learning for Forward and Inverse Problems

**Authors:** Meenakshi Krishnan; Pranav Pulijala; Ke Chen; Haizhao Yang; Ramani Duraiswami

**ID:** 149536\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149536

[Paper](<https://openreview.net/forum?id=pPxfTs1tZU>) | [PDF](<https://openreview.net/pdf?id=pPxfTs1tZU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149536>)

Operator learning for partial differential equations \(PDEs\) on arbitrary geometries builds fast neural surrogates for large\-scale simulation\. Although recent geometry\-adaptive neural operators have made substantial progress, they are mainly designed for forward problems in which inputs and outputs share the same spatial domain\. This limits their applicability for boundary value problems \(BVPs\) and inverse problems, where inputs and outputs may live on different domains\. We introduce the Geometry\-Adaptive Integral Autoencoder \(GAIA\), an operator learning model that encodes the domain boundary and the interior field distribution into geometry tokens, and conditions integral transform layers on these tokens via cross\-attention, allowing the kernel to adapt locally to geometric features\. This yields a single architecture for forward \(including BVPs\) and inverse problems on arbitrary domains in one pass, without retraining, iterative optimization, or graph construction\. We evaluate GAIA on seven 2D and 3D benchmarks, four of which are new or substantially extended benchmarks for inverse problems and BVP: electrical impedance tomography, optical tomography, 3D Darcy flow on varying geometries, and a modified setting of Poisson BVP on mechanical components benchmark \(MCB\)\. GAIA sets new state\-of\-the\-art results on every inverse and BVP task, reducing median relative $L^2$ error by 64\\% on airfoil flow reconstruction and 27\\% on EIT relative to the next best amortized method, and outperforming all baselines on every shape category of MCB\. On other forward problems, GAIA is competitive with specialized solvers while maintaining stable accuracy across point resolutions on which transformer\-based baselines degrade\.

## Probabilistic Data\-Driven Modelling of Astrophysical Transients: The Neural Process Family for Ultrafast and Class\-Agnostic Light Curve Reconstruction

**Authors:** Siddharth Chaini; federica bianco; Ashish Mahabal

**ID:** 151221\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151221

[Paper](<https://openreview.net/forum?id=c1qPSD4fDz>) | [PDF](<https://openreview.net/pdf?id=c1qPSD4fDz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151221>)

Astrophysical observations from Earth are subject to weather, environmental, and scientific constraints that lead to characteristically sparse and unevenly sampled multi\-wavelength time series \(light curves\), severely limiting the performance on downstream tasks\. Interpolating light curves help in mitigating this problem, where Gaussian Processes \(GPs\) are the current standard\. However, GPs struggle with cross\-wavelength correlations, require \*a priori\* kernel specification, and cannot handle ensembles of diverse transient and variable classes\.  Furthermore, GPs and other existing models \(\*e\.g\.\*, Bayesian neural networks\), scale poorly and must be fit to each light curve individually, transferring no information between light curves\. We introduce Attentive Neural Processes \(ANPs\) for light curve reconstruction, combining the probabilistic framework of GPs with the scalability of deep learning, and we demonstrate their use as a fast, data\-driven, universal light curve interpolator\. Unlike prior processes tailored to single object classes, our approach is morphologically agnostic\. By meta\-learning on a diverse population of simulated transients, ANPs shift the computation cost to the training phase, enabling amortized inference \- particularly important at the eve of the Vera C\. Rubin Observatory Legacy Survey of Space and Time \(LSST\), which will produce massive datasets for transient astrophysics\. We evaluate our models on realistic LSST cadences for its 6\-filters across 14 transient classes\. The ANP outperforms all our benchmark models, including a suite of GP and neural\-network based models, on all regression quality, feature recovery, and rigorous probabilistic calibration metrics\. Our ANP performs probabilistic interpolation on all filters in $\\sim 10^\{\-6\} $ seconds \-\- over four orders of magnitude faster than the next\-best neural benchmark and over five orders of magnitude faster than GPs \-\- making them suitable for on\-line use on the LSST alert stream estimated to carry $\\sim10^\{7\}$ events/night\. The ANP avoids neural networks' overconfidence and GPs' underconfidence, delivering sharp, highly calibrated uncertainties\. This work establishes the neural process family as a scalable, probabilistic foundation for real\-time transient science in the LSST era\.

## IADR: Interface\-Augmented Neural Operator for Phase\-Field Mean\-Curvature Flow

**Authors:** Qinyi Zhang; Duanyu Feng; Yangshuai Wang; Hao Wang

**ID:** 149902\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149902

[Paper](<https://openreview.net/forum?id=mMGBM26aqy>) | [PDF](<https://openreview.net/pdf?id=mMGBM26aqy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149902>)

The Allen\-\-Cahn equation is one of the standard phase\-field models for mean\-curvature flow \(MCF\), parameterised by the diffuse\-interface width $\\varepsilon$\. Practical simulations span a working range of $\\varepsilon$, so a single model covering this range is needed\. PDE\-specific neural operators are accurate but must be retrained at every $\\varepsilon$; general neural operators cover $\\varepsilon$ in one model but lose the phase\-field structure of the target\. We introduce Interface\-Augmented Diffusion\-Reaction \(IADR\), a neural operator that addresses both shortcomings: a target network with a diffusion\-and\-reaction structure preserves the phase\-field structure of the Allen\-\-Cahn equation, while a hypernetwork that maps $\\varepsilon$ to the weights of this target network amortises the dependence on $\\varepsilon$ across the working range\. A single IADR matches the per\-$\\varepsilon$ specialists on in\-distribution data, retains their cross\-shape generalisation under both $\\varepsilon$\- and geometry\-out\-of\-distribution shifts, and runs at the per\-$\\varepsilon$ specialist's per\-step inference cost\. We further establish a $K$\-step rollout error bound that aligns with the long\-horizon behaviour observed in experiments\.

## Quantum Composite Hypothesis Testing with Small Error

**Authors:** Chenghua Liu; Qisheng Wang

**ID:** 155745\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155745

[Paper](<https://openreview.net/forum?id=3JkMeZJNAg>) | [PDF](<https://openreview.net/pdf?id=3JkMeZJNAg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155745>)

We present a method of quantum composite hypothesis testing with small error, which enables us to establish quantum lower bounds in nonparametric statistics and high\-dimensional functional estimation\. This is achieved by introducing trigonometric polynomials into the quantum polynomial method, thereby generalizing the quantum phase\-estimation lower bound of Mande and de Wolf \(ESA 2023\)\. As applications, we settle the quantum complexities of several problems in property testing and functional estimation with small error:  \- For $\\ell\_2$\-closeness testing, we show that the approach of Luo et al\. \(\*IEEE Trans\. Inf\. Theory\* 2024\) is optimal\.  \- For Tsallis entropy estimation, where $q=2$ corresponds to the Gini impurity, we show that the approaches of Buhrman et al\. \(\*Phys\. Rev\. Lett\.\* 2001\) and Ekert et al\. \(\*Phys\. Rev\. Lett\.\* 2002\) are optimal for integer $q \\geq 2$, and that the approach of Chen et al\. \(ICALP 2026\) is near\-optimal for real $q \\geq 1\.5$\.  \- For pure\-state Uhlmann fidelity and trace distance estimation, we show that the approach of Wang \(\*IEEE Trans\. Inf\. Theory\* 2024\) is optimal\.

## PR\-Smoother: Simulator\-Preserving Non\-Gaussian Smoothing for Data Assimilation

**Authors:** Yuta Tarumi

**ID:** 148567\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148567

[Paper](<https://openreview.net/forum?id=wuKaCgAn8h>) | [PDF](<https://openreview.net/pdf?id=wuKaCgAn8h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148567>)

Many physical data assimilation \(DA\) workflows require smoothing methods that represent non\-Gaussian posteriors over physical state variables, scale to high\-dimensional simulators, train from observation windows alone, and remain compatible with calibration of the prescribed simulator\. We introduce PR\-Smoother, a simulator\-preserving amortized smoother designed for this prescribed\-simulator DA regime\. Its key design principle is to keep the prescribed simulator explicit in both the evidence lower bound and the variational family: rather than learning replacement dynamics or a learned trajectory prior, PR\-Smoother learns only future\-conditioned corrections around the prescribed rollout\. This yields an explicit non\-Gaussian smoothing distribution over physical trajectories and supports joint state, parameter, and sensor\-bias learning from observations alone\. The variational family contains the exact smoother in deterministic and linear\-Gaussian limits\. Empirically, PR\-Smoother captures multimodal posteriors in 4\-dimensional Lorenz–96, remains accurate under ambiguous nonlinear observations and process noise in 40\-dimensional Lorenz–96, and scales to joint state\-parameter\-bias inference in 16,384\-dimensional Kolmogorov flow\.

## Dandelions: A Spherical Flower for Neural Simulation of Planetary Dynamics

**Authors:** Till Muser; Giovanni Abati; Ivan Dokmanić

**ID:** 155531\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155531

[Paper](<https://openreview.net/forum?id=4sWdU0DnBl>) | [PDF](<https://openreview.net/pdf?id=4sWdU0DnBl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155531>)

Many dynamical processes unfold on the sphere but the default scientific machine learning architectures are Euclidean\. Applying these architectures on a regular lat\-\-lon grid causes problems: Cartesian convolutions become distorted at high latitude; 2D FFTs in Fourier neural operators incorrectly assume double periodicity; Cartesian positional encodings in ViTs distort spherical geodesic distances\. Recent work moves towards natively spherical  primitives, including spherical convolutions \(e\.g\., DeepSphere or DISCO\), Spherical Fourier Neural Operators \(SFNOs\), and geodesic attention\. Here we propose Dandelion, a spherical version of Flower\-\-\-a recent warp\-based neural PDE solver\. Layers of Dandelion predict a tangent\-plane displacement and transport features along great circles\. We obtain a U\-Net\-like structure by implementing hierarchical pooling entirely in the spherical\-harmonic domain\. There are thus no convolutions: spatial mixing is  achieved only through spherical coordinate changes\-\-\-or warps\. To compare Dandelion with existing spherical architectures, we release an evolving benchmark suite of challenging, natively\-spherical PDE datasets including a modified Galewsky jet, anomalous chained turbulence, Cahn\-\-Hilliard decomposition, spherical Riemann shocks, Held\-\-Suarez dry atmospheric transport and global ocean dynamics\. This new benchmark fills the gap in existing spherical datasets which are either too small and stylized, or much too large \(ERA5\) for model iteration\.  Dandelion is best or second\-best on every dataset, and the gap to non\-warp baselines widens with resolution: at $256\\times 512$, Dandelion and Flower2D occupy the top two slots in both single\-step prediction and rollout\.

## First\-Order Trajectory Matching: Fast Ensemble Predictions of Chaotic, Turbulent, Stochastic Systems

**Authors:** Shreya Jha; Timo Schorlepp; Nicholas Geissler; Jules Berman; Benjamin Peherstorfer

**ID:** 150161\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150161

[Paper](<https://openreview.net/forum?id=kCo39KbSIa>) | [PDF](<https://openreview.net/pdf?id=kCo39KbSIa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150161>)

We introduce First\-Order Trajectory Matching \(FTM\), a surrogate\-modeling method that learns the first\-order local transport of probability mass from trajectories of stochastic systems\. By matching the symmetric first\-order motion of trajectories, FTM learns the probability current velocity, whose flow preserves time marginals to match ensemble averages, while also capturing current\-like trajectory quantities such as fluxes, circulations, and barrier\-crossing currents\.  FTM learns the current velocity directly from trajectories, avoiding drift, diffusion, and score estimation\. Our stability analysis separates discretization error from sampling variance and shows that the one\-step simulation\-free FTM loss is stable when temporal resolution and sample size are properly balanced\.  Across stochastic dynamical systems and PDE examples, we empirically demonstrate that FTM provides trajectory\-aware ensemble predictions at low, deterministic\-rollout cost\.

## Sparsity for Free: A Budget\-Induced Equilibrium in Joint Topology–Parameter Search

**Authors:** Marcel Mordarski; Daniel Budina; Benjamin Gras; Abdulrahman Shehata; Roberto Bondesan

**ID:** 148319\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148319

[Paper](<https://openreview.net/forum?id=yhAndGxKFn>) | [PDF](<https://openreview.net/pdf?id=yhAndGxKFn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148319>)

Joint optimisation over a discrete topology $T$ and continuous parameters $\\theta$ under a strict evaluation budget $B$ arises in neural architecture search, pruning, and variational quantum algorithms\. We identify a budget\-induced effect, \\emph\{dimensionality pressure\}: enlarging $T$ expands the search space of $\\theta$, slows inner\-loop optimisation at fixed $B$, and yields noisier fitness estimates that systematically bias outer\-loop selection toward smaller structures, even without explicit sparsity regularisation\. We formalise this as a Proposition composing standard CMA\-ES dimensionality results with rank\-based noisy\-comparison selection, predicting a stationary distribution over $\|T\|$ concentrated below the dense baseline\. To test the mechanism we introduce \\textsc\{EvoluCMAES\}, a minimal two\-loop framework whose only domain\-specific component is the topology\-mutation operator\. Across two unrelated settings, the same fixed apparatus produces low\-density solutions: in pruning of UCI tabular models, the equilibrium density settles at $\\rho \\approx 0\.13$, roughly an order of magnitude below dense; in BB84 eavesdropping, discovered Eve circuits use 4\-\-6 gates from an arbitrary\-depth search space and approach the analytical Pauli\-channel cloning bound under bit\-flip noise\. When a specific target sparsity is required for deployment, adapting only the mutation operator suffices: at $95\\%$ sparsity on the UCI suite, mean accuracy reaches $0\.972$, exceeding the strongest one\-shot baseline at $0\.946$\. As a downstream consequence of the bound, the \\textsc\{EvoluCMAES\} library is small enough to serve as a tractable action set for an off\-the\-shelf RL agent: a single Rainbow\-DQN with feasibility masking and matched hyperparameters recovers $\\approx 99\\%$ of the dynamic\-programming optimum on adaptive eavesdropping for both BB84 and E91/DIQKD\.

## PhysGuard: Fisher\-Guided Gradient Projection for Sim\-to\-Real Neural PDE Surrogates

**Authors:** Changjian Zhou; Junfeng Fang; Negin Yousefpour; peng wu; Bin Yan; Guillermo A Narsilio

**ID:** 148249\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148249

[Paper](<https://openreview.net/forum?id=zHUiR3DWyZ>) | [PDF](<https://openreview.net/pdf?id=zHUiR3DWyZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148249>)

Neural operator models trained on simulation data often lose accuracy when applied to experimental measurements due to the sim\-to\-real gap\. Standard fine\-tuning with limited real data can reduce this gap, but it may also damage the core physics\-relevant representations learned during pretraining\. Although knowledge\-preserving adaptation has been widely investigated in vision or language tasks, it remains unclear whether these methods are suitable for neural operators whose architectures and protected knowledge are fundamentally different\. Neural operators need to preserve core\-scale physical structures rather than semantic or visual features\. We propose PhysGuard, a physics\-preserving framework for accurate sim\-to\-real adaptation of neural operators\. Specifically, PhysGuard uses the empirical Fisher Information Matrix computed on simulation data to identify physics\-critical parameter directions, then restricts fine\-tuning updates to directions that do not interfere with them\. A layer\-wise Gram\-matrix formulation makes this efficient for models with millions of parameters, while an adaptive threshold automatically determines the protected subspace size\. A spectral probe experiment shows that the dominant Fisher directions are strongly associated with low\-frequency output structures\. Experiments on benchmark across four neural operator architectures and different physical systems show that PhysGuard performs strongly on most evaluation metrics compared to baselines\. The benefits are most evident under severe domain shift, where it reduces low\-frequency error by up to 32\\% compared to standard fine\-tuning while maintaining adaptability\. Our code is available at https://anonymous\.4open\.science/r/PhysGuard\-B840/\.

## The Alternation Depth Principle for Neural Operator Design

**Authors:** Haoze Song; Zhilu Lai; Wei Wang

**ID:** 150135 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRVhNbueWa>) | [PDF](<https://openreview.net/pdf?id=kRVhNbueWa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150135>)

Despite the success of Neural Operators \(NOs\), architectural hyperparameters such as depth are still typically selected by empirical grid search, with limited connection to the governing PDE\. We introduce the \\textit\{alternation depth\}, $\\alpha\_F$, a structural quantity of the PDE right\-hand side that counts the minimum number of non\-pointwise/pointwise coupling stages needed to build its leading nonlinear spatial structure\. We use $L\_\{\\min\} = \\alpha\_F \+ 1$ as a principled \\emph\{depth\-efficiency lower\-bound guideline\} for IVP solution maps: a starting depth, not a predictor of the empirical optimum $L^\*$\. We provide partial formal support: \(\*sufficiency\*\) an $L$\-block architecture can approximate any operator in a formally defined $L$\-alternation class under compactness and regularity assumptions; \(\*separation\*\) for a constructed hard family at finite resolution and polynomial activations, using fewer blocks forces width to grow as a power of the discretization size\. Empirically, a 736\-run study over nine in\-scope IVP datasets plus one Darcy stress test, using FNO\-family variants and one kernel\-integral baseline \(KIN\), is consistent with depth improvements appearing at or above $L\_\{\\min\}$ in the tested settings\. The observed optimum can be larger because of spectral approximation, pointwise approximation difficulty, data regime, and optimization\. We summarize the resulting practitioner guidance in four capacity\-allocation rules\.

## Approximation of Maximally Monotone Operators : A Graph Convergence Perspective

**Authors:** Takashi Furuya; Yury Korolev; Takaharu Yaguchi

**ID:** 155734 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3LWdbECcwo>) | [PDF](<https://openreview.net/pdf?id=3LWdbECcwo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155734>)

Operator learning has been highly successful for continuous mappings between infinite\-dimensional spaces, such as PDE solution operators\. However, many operators of interest—including differential operators—are discontinuous or set\-valued, and lie outside classical approximation frameworks\. We propose a paradigm shift by formulating approximation via graph convergence \(Painlevé–Kuratowski convergence\), which is well\-suited for closed operators\. We show that uniform and $L^p$ approximation are fundamentally inadequate in this setting\.  Focusing on maximally monotone operators, we prove that any such operator can be approximated in the sense of local graph convergence by continuous encoder–decoder architectures, and further construct structure\-preserving approximations that retain maximal monotonicity via resolvent\-based parameterizations\.

## Reinforcement Learning with Verifiable Physics: Post\-training LLMs for PDE Solver Generation

**Authors:** Pengfei Cai; Utkarsh Utkarsh; Alan Edelman; Christopher Rackauckas; Rafael Gomez\-Bombarelli

**ID:** 151548\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151548

[Paper](<https://openreview.net/forum?id=ZopflnQLAZ>) | [PDF](<https://openreview.net/pdf?id=ZopflnQLAZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151548>)

_Abstract unavailable from the accessible public sources._

## Physics\-Informed Functional Tucker Method with RKHS Factors for Sparse Spatiotemporal Reconstruction

**Authors:** Zhengyang Liu; Jianguo Huang; Junxi Hu; Yucheng Mi; Haojie Cai; Wenxuan Shen; zhikun zhang; Renfeng Peng; Guangtao Zhang; Zhiqiang Liu

**ID:** 152965\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152965

[Paper](<https://openreview.net/forum?id=P1pyUg7i5c>) | [PDF](<https://openreview.net/pdf?id=P1pyUg7i5c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152965>)

_Abstract unavailable from the accessible public sources._

## AnyMo: Geometry\-Aware Setup\-Agnostic Modeling of Human Motion in the Wild

**Authors:** Baiyu Chen; Zechen Li; Wilson Wongso; Lihuan Li; Xiachong LIN; Hao Xue; Benjamin Tag; Flora Salim

**ID:** 154127\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154127

[Paper](<https://openreview.net/forum?id=G4z36ToJi1>) | [PDF](<https://openreview.net/pdf?id=G4z36ToJi1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154127>)

As wearable and mobile devices become increasingly embedded in daily life, they offer a practical way to continuously sense human motion in the wild\. But inertial signals are highly dependent on the sensing setup, including body location, mounting position, sensor orientation, device hardware, and sampling protocol\. This setup dependence makes it difficult to learn motion representations that transfer across devices and datasets, and limits the broader use of wearable IMUs beyond closed\-set recognition\. We introduce AnyMo, a geometry\-aware framework for setup\-agnostic human motion modeling\. AnyMo uses physics\-grounded IMU simulation over dense body\-surface placements to generate diverse and plausible synthetic signals, pre\-trains a graph encoder from paired synthetic placement views and masked partial observations, tokenizes multi\-position IMU into full\-body motion tokens, and aligns these tokens with an LLM for motion\-language understanding\. We evaluate AnyMo on three complementary tasks: zero\-shot activity recognition across 14 unseen downstream datasets, cross\-modal retrieval, and wearable IMU motion captioning, where it improves average Accuracy/F1/R@2 by 11\.7\\%/11\.6\\%/22\.6\\% on HAR, increases zero\-shot IMU\-to\-text and text\-to\-IMU retrieval MRR by 15\.9\\% and 28\.6\\%, respectively, and improves zero\-shot captioning BERT\-F1 by 18\.8\\%\. These results support AnyMo as a generalist model for wearable motion understanding in the wild\. Code is at \\url\{https://anonymous\.4open\.science/r/anymo\}\.

## Q\-CoMove: Differentiable Quantum Circuit Priors for Coordinated Motion in Multi\-Component Embodied Systems

**Authors:** Ke Shi; Fanqi Kong; Yuchen Wang; Zhipeng Liu; Tingting Li; Ziming Zhao

**ID:** 153566\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153566

[Paper](<https://openreview.net/forum?id=KQmzoa2vU6>) | [PDF](<https://openreview.net/pdf?id=KQmzoa2vU6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153566>)

Multi\-component embodied robots must coordinate the base, arm, camera, gripper, and local environment under shared spatial and temporal constraints\. We present Q\-CoMove, a coordinated motion framework that models this platform as a coupled dynamical system\. Q\-CoMove uses a differentiable circuit\-style prior implemented with the TorchQuantum simulator on classical hardware: component states are encoded into a five\-qubit register, cross\-component dependence is parameterized by a 79\-gate simulated circuit, and 25 measured statistics are projected into a coordination latent that conditions a physics\-residual dynamics model and a joint action generator\. We position this module as a compact structured coordination bottleneck rather than a claim of quantum advantage or physical necessity\. Across parameter\-matched Transformer and GNN baselines, residual\-dynamics and joint MPC baselines, ablations, and robustness stress tests in simulation, Q\-CoMove improves coordination metrics with bounded inference cost\. All empirical results are limited to simulated environments, and the current study does not isolate the circuit prior against a structure\-matched classical bottleneck\.

## Flow Perturbation\+\+: Multi\-Step Unbiased Jacobian Estimation for High\-Dimensional Boltzmann Sampling

**Authors:** xinpeng peng; Ang Gao

**ID:** 152021\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152021

[Paper](<https://openreview.net/forum?id=W6FlrDtr71>) | [PDF](<https://openreview.net/pdf?id=W6FlrDtr71>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152021>)

The scalability of continuous normalizing flows \(CNFs\) for unbiased Boltzmann sampling remains limited in high\-dimensional systems due to the cost of Jacobian\-determinant evaluation, which requires $D$ backpropagation passes through the flow layers\. Existing stochastic Jacobian estimators such as the Hutchinson trace estimator reduce computation but introduce bias, while the recently proposed Flow Perturbation method is unbiased yet suffers from high variance\. We present \*\*Flow Perturbation\+\+\*\*, a variance\-reduced extension of Flow Perturbation that discretizes the probability\-flow ODE and performs unbiased stepwise Jacobian estimation at each integration step\. This multi\-step construction retains the unbiasedness of Flow Perturbation while achieves substantially lower estimator variance\. Integrated into a Sequential Monte Carlo framework, Flow Perturbation\+\+ achieves significantly improved equilibrium sampling on a 1000D Gaussian Mixture Model and the all\-atom Chignolin protein compared with Hutchinson\-based and single\-step Flow Perturbation baselines\.

## Euler\-Mamba: Learning Resolution\-Invariant State Evolution on Polar Manifolds for Asymmetric Pansharpening

**Authors:** Mengting Ma; Anqi Zhu; Yizhen Jiang; Chengfu Ding; Wei Zhang

**ID:** 150332\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150332

[Paper](<https://openreview.net/forum?id=itSOxQyCrl>) | [PDF](<https://openreview.net/pdf?id=itSOxQyCrl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150332>)

The goal of asymmetric pansharpening is to synthesize a high\-resolution multispectral \(HR\-MS\) image by integrating panchromatic \(PAN\) and low\-resolution multispectral \(LR\-MS\) images\. While State Space Models \(SSMs\), particularly Mamba, offer a promising paradigm for global dependency modeling, their standard selective scan mechanisms operate in discrete Cartesian grids, which are ill\-suited for distinguishing between structural and spectral features in complex\-valued frequency representations\. To resolve this, we propose Euler\-Mamba, a physics\-inspired framework that reformulates the selective scan as a continuous state evolution on polar manifolds\. We develop an Eulerian Selective Scan \(ESS\) mechanism that treats the fusion task as a trajectory of frequency growth\. By performing radial scans within the polar domain, ESS governs complex\-valued state transitions through the decoupled architecture: the Explicit Phase Rotation \(EPR\) block facilitates explicit phase rotations for geometric alignment, while the Implicit Magnitude Mapping \(IMM\) block performs magnitude scaling for spectral calibration\. This polar\-decoupled evolution allows the model to capture the continuous transition from global spectral backgrounds to fine structural details with linear complexity\. Consequently, by modeling the fusion as a continuous functional evolution flow, Euler\-Mamba achieves resolution\-invariant performance and zero\-shot generalization across varying spatial scales, bypassing the computational complexity inherent in traditional discrete\-integration frameworks\. Extensive experiments demonstrate that Euler\-Mamba establishes a new Pareto frontier for asymmetric pansharpening, achieving a superior balance between physical interpretability, computational efficiency, and reconstruction quality\.

## Physics\-Conditioned Video Diffusion with Kinematic Priors for Fusion Capsule Polishing

**Authors:** Shashank Galla; Abhishek Hanchate; Monika Biener; Suhas Bhandarkar; Satish Bukkapatnam

**ID:** 149301\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149301

[Paper](<https://openreview.net/forum?id=rDsuTZxMP3>) | [PDF](<https://openreview.net/pdf?id=rDsuTZxMP3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149301>)

Video diffusion models can generate realistic process videos, but using them as controllable surrogates for industrial systems remains difficult when key control variables are only partially observable and no simulator or differentiable physics model is available\. We study this regime in inertial confinement fusion \(ICF\) target capsule polishing, where surface defects can degrade fusion yield\. The dynamics are governed by the polishing speed $\\omega\_p$ and capsule\-pad slip $S\_C$\. While capsule motion can be monitored from video, $S\_C$ is only indirectly observable\. Using only an analytical kinematic model, we adapt a frozen Stable Video Diffusion \(SVD\-xt\) backbone via LoRA and condition the generation on Fourier\-encoded physics parameters $\(\\omega\_p, S\_C\)$\. Two training objectives operate on latent frame\-difference dynamics: \(i\) a batch level correlation loss aligning them with the analytical sliding speed, and \(ii\) a stratified ratio\-matching loss that, conditioned on $\\omega\_p$, isolates slip structure from the dominant $\\omega\_p$\-driven variance\. We evaluate physics consistency by tracking capsule motion in generated videos, inverting the kinematic model, and measuring rank agreement under a physical validity gate\.  For speed, rank accuracy exceeds $0\.97$ on real data; for slip, it reaches $0\.735$ with Spearman $\\ge 0\.50$ on synthetic data\.  Overall, the results suggest a practical recipe for controllable industrial video surrogates when only low\-dimensional analytical kinematics are available\.

## $PAS^2$: Physics\-Anchored Spectral Reasoning for Air Quality Forecasting

**Authors:** Haofeng Ying; Wenbin Lu; Wenxin Shen; Junnan Xu; Jianwei Zheng

**ID:** 148682\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148682

[Paper](<https://openreview.net/forum?id=vqRvL96UZ4>) | [PDF](<https://openreview.net/pdf?id=vqRvL96UZ4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148682>)

Given the profound impacts on human health and ecosystems, air pollution necessitates robust quality prediction to inform policy\-making\. Traditional physics\-based forecasting relies on idealized closed\-system assumptions, whereas data\-driven approaches often lack interpretability\. Recent hybrid methods, however, neglect data homogeneity, resulting in redundancy, parameter inefficiency, and gradient conflicts\. Moreover, high\-concentration regions inherently exhibit drastic fluctuations, making it difficult to explicitly distinguish them from the overall pollution field, especially when using spatial information alone\. To address these limitations, a Physics\-Anchored Spatial\-Spectral \($PAS^2$\) paradigm is proposed\. Specifically, a collaboration scheme is firstly elaborated, within which a physical estimator captures deterministic trends, anchoring the neural branch’s input space and directing it to learn complementary fluctuations\. Building on this, we equip the neural branch with a Spatial–Spectral \($S^2$\) Reasoner that integrates graph operators to model local spatial diffusion and spectral operators to explicitly capture the drastic fluctuations in high\-concentration regions\. Experiments on real\-world datasets show that $PAS^2$ consistently improves over strong data\-driven and physics\-guided baselines, especially under volatile sudden\-change scenarios\. Codes are attached and will be released at GitHub\.

## OpInf\-LLM: Parametric PDE Solving with LLMs via Operator Inference

**Authors:** Zhuoyuan &amp;amp;quot;Jacob&amp;amp;quot; Wang; Hanjiang Hu; Xiyu Deng; Saviz Mowlavi; Yorie Nakahira

**ID:** 156747\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156747

[Paper](<https://openreview.net/forum?id=rCTRgstMr1>) | [PDF](<https://openreview.net/pdf?id=rCTRgstMr1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156747>)

Solving diverse partial differential equations \(PDEs\) is fundamental in science and engineering\. Large language models \(LLMs\) have demonstrated strong capabilities in code generation, symbolic reasoning, and tool use, but reliably solving PDEs across heterogeneous settings remains challenging\. Prior work on LLM\-based code generation and transformer\-based foundation models for PDE learning has shown promising advances\. However, a persistent trade\-off between execution success rate and numerical accuracy arises, particularly when generalization to unseen parameters and boundary conditions is required\. In this work, we propose OpInf\-LLM, an LLM parametric PDE solving framework via operator inference\. The proposed framework leverages small amounts of solution data to enable accurate prediction of diverse PDE instances, including unseen parameters and configurations, and provides seamless integration with LLMs for natural language task specification and physics\-based reasoning of proper feature parameterization\. Its low computational demands and unified solution pipeline further enable a high execution success rate across heterogeneous settings, opening new possibilities for generalizable reduced\-order modeling in LLM\-based PDE solving\.

## AeroChem: Closed\-loop Physics\-Informed State Space Modeling for Long\-term Chemically\-Reactive Air Quality Forecasting

**Authors:** Le Trung Kien; Tung Kieu; Dinh D Nguyen; Cuong Do; Bin Yang; Phi Long Nguyen

**ID:** 153606\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153606

[Paper](<https://openreview.net/forum?id=K8qavlGl1B>) | [PDF](<https://openreview.net/pdf?id=K8qavlGl1B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153606>)

Accurate long\-term air quality forecasting is challenging due to long\-range transport, meteorological variability, and nonlinear chemical reactions underlying secondary pollutant formation\. Purely data\-driven models often suffer from long\-horizon drift and lack physical consistency, while existing physics\-informed approaches commonly follow open\-loop designs that fuse neural and physical components only at the output level\. We propose AeroChem, a closed\-loop physics\-informed state space framework for chemically reactive air quality forecasting\. AeroChem adopts a two\-branch co\-correction design: a UDE\-based process branch provides a structured but imperfect physical prior, while a Mamba\-based virtual measurement branch captures long\-range temporal context and produces probabilistic virtual observations\. Neural Kalman Fusion couples the two branches by correcting the latent physical state at each forecasting step and feeding the posterior state back into the simulator, reducing long\-horizon drift\. We further introduce HanoiAir, a real\-world dataset integrating pollutant concentrations, meteorology, and emission inventories\. Experiments on HanoiAir and a public benchmark show that AeroChem improves long\-horizon stability and sudden\-change forecasting\.

## Euler\-Mamba: Learning Resolution\-Invariant State Evolution on Polar Manifolds for Asymmetric Pansharpening

**Authors:** Mengting Ma; Anqi Zhu; Yizhen Jiang; Chengfu Ding; Wei Zhang

**ID:** 150332\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150332

[Paper](<https://openreview.net/forum?id=itSOxQyCrl>) | [PDF](<https://openreview.net/pdf?id=itSOxQyCrl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150332>)

The goal of asymmetric pansharpening is to synthesize a high\-resolution multispectral \(HR\-MS\) image by integrating panchromatic \(PAN\) and low\-resolution multispectral \(LR\-MS\) images\. While State Space Models \(SSMs\), particularly Mamba, offer a promising paradigm for global dependency modeling, their standard selective scan mechanisms operate in discrete Cartesian grids, which are ill\-suited for distinguishing between structural and spectral features in complex\-valued frequency representations\. To resolve this, we propose Euler\-Mamba, a physics\-inspired framework that reformulates the selective scan as a continuous state evolution on polar manifolds\. We develop an Eulerian Selective Scan \(ESS\) mechanism that treats the fusion task as a trajectory of frequency growth\. By performing radial scans within the polar domain, ESS governs complex\-valued state transitions through the decoupled architecture: the Explicit Phase Rotation \(EPR\) block facilitates explicit phase rotations for geometric alignment, while the Implicit Magnitude Mapping \(IMM\) block performs magnitude scaling for spectral calibration\. This polar\-decoupled evolution allows the model to capture the continuous transition from global spectral backgrounds to fine structural details with linear complexity\. Consequently, by modeling the fusion as a continuous functional evolution flow, Euler\-Mamba achieves resolution\-invariant performance and zero\-shot generalization across varying spatial scales, bypassing the computational complexity inherent in traditional discrete\-integration frameworks\. Extensive experiments demonstrate that Euler\-Mamba establishes a new Pareto frontier for asymmetric pansharpening, achieving a superior balance between physical interpretability, computational efficiency, and reconstruction quality\.

## Mosaic: A Benchmark Suite for Differentiable Physics Solvers

**Authors:** Andrin Rehmann; Heiko Zimmermann; Dion Häfner

**ID:** 139696\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139696

[Paper](<https://openreview.net/forum?id=A4oHl7cYA9>) | [PDF](<https://openreview.net/pdf?id=A4oHl7cYA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139696>)

_Abstract unavailable from the accessible public sources._

## FunctionEvolve: Structure\-Guided Symbolic Regression with LLMs

**Authors:** Zeyu Xia; Jun Zhu; Dong Yan

**ID:** 148539 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x9ZPbfgvX4>) | [PDF](<https://openreview.net/pdf?id=x9ZPbfgvX4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148539>)

_Abstract unavailable from the accessible public sources._

## Learning Where to Simulate: Generative Active Sampling for Online PDE Surrogate Training

**Authors:** Pierre Cesar; Sofya Dymchenko; Abhishek Purandare; Bruno Raffin

**ID:** 151676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ys4YrFCtvl>) | [PDF](<https://openreview.net/pdf?id=Ys4YrFCtvl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151676>)

Data\-driven PDE surrogates are trained with data produced by numerical PDE solvers\. However, when the surrogate's goal is to generalize across a wide range of PDE configurations \(e\.g\., initial conditions and physical coefficients\), generating a representative training set is non\-trivial\. Uniform sampling of configuration parameters often under\-represents trajectories exhibiting challenging dynamics, leading to high prediction errors and large error variance in the trained surrogate\. Online training, where data generation and surrogate training are coupled, offers a natural advantage by allowing solver parameters to be steered on\-the\-fly\. To efficiently exploit this capability, we introduce Online Generative Active Sampling \(OGAS\), an active learning method that reactively learns the relationship between configuration parameters and surrogate performance to control the sampling distribution\. OGAS trains a fast diffusion model in parallel to the surrogate to act as a conditional sampler, mapping a surrogate\-derived difficulty signal \(e\.g\., loss or uncertainty\) to configuration parameters\. By actively drawing target signals from a prior biased toward high difficulty, OGAS continuously steers data generation toward challenging regimes without delaying the training workflow\. We evaluate OGAS across 2D PDEs with distinct challenging dynamics \(Kuramoto\-Sivashinsky, Navier\-Stokes, Gray\-Scott\) and up to 308 parameters, using multiple surrogate architectures\.  Across all settings, OGAS consistently improves tail statistics, yielding substantial reductions in errors above the 99th percentile and overall error dispersion compared to uniform sampling\. While prioritizing challenging trajectories introduces a trade\-off with average error, OGAS effectively ensures worst\-case reliability of trained surrogates with negligible wall\-time overhead\.

## Physics\-Constrained Generative World Model for Off\-Road Terrain via Post\-hoc Projection

**Authors:** Yuan Zhou; Hao Yu; Ruiran Cao; Haoran Yang; Xuanyu Zhu; Yusong Yan; Cong Wang; Minne Li

**ID:** 150035 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lG1tx6cbVl>) | [PDF](<https://openreview.net/pdf?id=lG1tx6cbVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150035>)

Generative models for physically grounded terrain face a persistent tradeoff: training\-time physics losses distort the learned distribution, while unconstrained generators routinely produce physically impossible surfaces\.  We \\emph\{decouple\} generation quality from constraint satisfaction entirely, enforcing slope stability, bearing capacity, and surface continuity via a closed\-form \\emph\{post\-hoc projection\} applied to the generator's output\. The projection raises the physics pass rate from $53\\%$ to $\\mathbf\{100\\%\}$ on a diffusion generator with no change in FID \($13\.72$\), whereas a matched PhysLoss baseline degrades FID to $56\.6$ \-\-\-a $4\{\\times\}$ loss of generation quality\-\-\-while reaching only $25\.5\\%$ pass rate\.  The projection is \\emph\{model\-agnostic\}: on four diverse generators \(Procedural, Diffusion, VAE, GAN\) it consistently yields $89\.5\\%$\-\-$100\\%$ compliance with $&lt;4\.3\\%$ overhead\. Out\-of\-distribution evaluation on real TartanDrive terrain confirms transfer: all four generators reach $100\\%$ pass rate, while projection simultaneously improves BEV\-FID against the real reference by up to $20\\%$\.  We instantiate the layer inside DreamEnv, an end\-to\-end BEV world model\.

