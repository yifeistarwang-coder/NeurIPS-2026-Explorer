# Applications / Physics

应用 / 物理学

162 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## DeformMaster: An Interactive Physics\-Neural World Model for Deformable Objects from Videos

**Authors:** Can Li; Zhoujian Li; Ren Li; Jie Gu; lei lei; Jingmin Chen; Lei Sun

**ID:** 152675 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RFz2SWN1Gj>) | [PDF](<https://openreview.net/pdf?id=RFz2SWN1Gj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152675>)

World models for deformable objects should recover not only geometry and appearance, but also underlying physical dynamics, interaction grounding, and material behavior\. Learning such a model from real videos is challenging because deformable linear, planar, and volumetric objects evolve under high\-dimensional deformation, noisy interactions, and complex material response\. The model must therefore infer a physical state from visual observations, roll it forward under new interactions, and render the resulting dynamics with high visual fidelity\. We present DeformMaster, a video\-derived interactive physics\-\-neural world model that turns real interaction videos into an online interactive model of deformable objects within a unified dynamics\-and\-appearance framework\. DeformMaster preserves structured physical rollout while using a neural residual to compensate for unmodeled effects, grounds sparse hand motion as distributed compliant actuator for hand\-\-continuum interaction, represents material response with spatially varying constitutive experts, and drives high\-fidelity 4D appearance from the predicted physical evolution\. Experiments on real\-world deformable\-object sequences demonstrate DeformMaster's ability to roll out future dynamics and render dynamic appearance, outperforming state\-of\-the\-art baselines while supporting novel action rollout, material\-parameter variation, and dynamic novel\-view synthesis\.

## Optimal Ansatz\-free Hamiltonian Learning In Situ

**Authors:** Taiqi Zhou; Weiyuan Gong

**ID:** 151579 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZYCtg2pJYn>) | [PDF](<https://openreview.net/pdf?id=ZYCtg2pJYn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151579>)

Characterizing the features of a Hamiltonian that governs a quantum system serves as a fundamental subroutine of quantum device calibration, signal sensing, and error correction\.  Recent works proposed protocols have achieved the optimal Heisenberg\-limited scaling learning ansatz\-free Hamiltonians from their real\-time evolutions without fully specifying interaction structures\. However, these protocols relies on both deep circuits with interleaving probes and control, and extremely short time resolution, making them difficult to implement on near\- and intermediate\-term in situ quantum experiments\. In this work, we propose a computational efficient, \*control\-free\*, and \*ancilla\-free\* algorithm that uses only \*Pauli product state preparation and measurement\*, and learns an ansatz\-free Hamiltonian $H$ with $\|\|H\|\|\\leq\\Lambda$ in total evolution time of $\\Theta\(\\tfrac\{\\Lambda\}\{\\epsilon^2\}\\log\(\\tfrac\{\\Lambda\}\{\\epsilon\}\)\)$\. The evolution time cost of our algorithm is \*optimal\* for any control\-free protocols as we further prove a lower bound of $\\Omega\(\\tfrac\{\\Lambda\}\{\\epsilon^2\}\\log\(\\tfrac\{\\Lambda\}\{\\epsilon\}\)\)$\. Technically, our method introduces a randomized\-sampling framework that combines band\-limited kernel\-based time sampling with a displacement sieve for Hamiltonian structure learning\. The characteristic probe time resolution depends only on $\\Lambda$ instead of $\\varepsilon$, which makes our protocol especially appealing in the high\-precision regime for sensing and calibration applications\.

## End\-to\-End Differentiable Diffusion Conditioning for Physics\-Informed Optimization

**Authors:** Ricardo Luna Gutierrez; Vineet Gundecha; Rahman Ejaz; Varchas Gopalaswamy; Riccardo Betti; Sahand Ghorbanpour; Aarne Lees; Soumyendu Sarkar

**ID:** 153367 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LtzApP65N7>) | [PDF](<https://openreview.net/pdf?id=LtzApP65N7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153367>)

Optimizing high\-dimensional physical systems under expensive evaluations and complex constraints is a central challenge in science and engineering\. In offline model\-based optimization \(MBO\), methods must improve designs using only a fixed dataset and no test\-time access to the true objective\. However, existing methods typically suffer from conservatism, unconstrained surrogate exploitation, or function as static inference\-time samplers that cannot refine candidates against precise physical objectives\. In this paper, we propose Differentiable Diffusion Conditioning \(D2C\), and show that deterministic sampling makes the reverse denoising chain differentiable with respect to the conditioning signal\. D2C turns a frozen conditional diffusion model into an end\-to\-end gradient\-based optimizer by directly optimizing conditioning variables at test time via gradients from frozen surrogate objectives and physics\-informed penalties backpropagated through the reverse chain\. We implement this idea in a composed proposer\-evaluator framework and evaluate it on laser pulse optimization for inertial confinement fusion, sustainable data\-center workload scheduling, and four Design\-Bench tasks\. Our method achieves the strongest results on the two real\-world tasks and the best average rank across four Design\-Bench tasks\.

## Solver\-as\-Teacher: Solver\-Guided On\-Policy Post\-Training Framework for PDE Foundation Models

**Authors:** Hao Wei; Shangzhe Li; Nils Thuerey

**ID:** 151443 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=afU6OolFcZ>) | [PDF](<https://openreview.net/pdf?id=afU6OolFcZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151443>)

PDE foundation models \(PDE\-FMs\) promise general\-purpose surrogate simulation, yet deploying a pretrained model to a new physical regime inevitably introduces distribution mismatch, demanding task\-specific post\-training\. The dominant approach, supervised fine\-tuning \(SFT\), is fundamentally off\-policy: the model trains on pre\-generated states but is evaluated autoregressively on its own\. In chaotic regimes, this mismatch is catastrophic as per\-step errors compound exponentially along the Lyapunov spectrum, and exact pointwise trajectory matching beyond the predictability horizon becomes an ill\-posed training signal\. To resolve this, we introduce \*\*Solver\-as\-Teacher \(SaT\)\*\*, an on\-policy post\-training framework for PDE\-FMs\. During training, the student rolls out autoregressively; a numerical solver branches multi\-step correction targets from each student\-visited state; and the student is updated against these solver corrections, learning to correct its own rollout dynamics\. We instantiate SaT in a unified post\-training suite with SFT, physics\-informed temporal alignment, and learned\-teacher on\-policy distillation\. Across seven 2D/3D PDE benchmarks and six pretrained PDE\-FMs, SaT variants achieve the lowest 50\-step rollout RMSE in 23 of 24 in\-distribution model\-\-task pairs\. The best SaT variant reduces RMSE over SFT up to 90\.0\\%, and SaT gives the lowest RMSE on all seven OOD parameter\-shift benchmarks\.

## Inverse Modeling for Laser Pulse Shape Design in Inertial Confinement Fusion

**Authors:** Ricardo Luna Gutierrez; Vineet Gundecha; Rahman Ejaz; Varchas Gopalaswamy; Riccardo Betti; Sahand Ghorbanpour; Aarne Lees; Soumyendu Sarkar

**ID:** 153316 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MDNitDIl0Q>) | [PDF](<https://openreview.net/pdf?id=MDNitDIl0Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153316>)

The achievement of practical fusion energy remains one of the most pressing unsolved scientific challenges, with immense implications for carbon\-free power\. A critical factor in the success of Inertial Confinement Fusion \(ICF\) is the design of a Laser Pulse Shape \(LP\) that can optimally drive implosions under stringent physical constraints\. Traditional LP design relies on computationally expensive simulations and manual iterative refinement\. We introduce the ICF Laser Pulse Shape Design System \(LPDS\), a generative inverse modeling framework that maps desired outcomes and target pellet configurations directly to optimized LPs\. Crucially, we design a multi\-objective loss function to ensure the generated LPs adhere to fundamental physical constraints and experimental feasibility\. Furthermore, we present constraint\-conditioning, inpainting, and gradient\-based LP editing mechanisms for maximum fine\-grained control over specific pulse characteristics during generation\. Moreover, we validate our framework for LP design on a real\-world experimental data\. Our method establishes a data\-driven inverse design framework for LP in ICF, contributing to the advancement of practical and sustainable fusion energy\.

## DyPSI: Dynamic Physics Sensing via Joint Field and Sensor\-Trajectory Generation

**Authors:** Yizhou Zhang; Panqi Chen; Lei Cheng; Ting Zhang; Jianlong Li; Jianfeng Shi; Shikai Fang

**ID:** 156053 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0nkbZpHfRk>) | [PDF](<https://openreview.net/pdf?id=0nkbZpHfRk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156053>)

Physics sensing in evolving environments requires reconstructing dense spatiotemporal fields from sparse observations while adapting where future observations should be collected\. Existing reconstruction and sensor\-placement methods have made substantial progress, but they typically rely on static sensing assumptions: they either use a single layout across all frames or optimize placements independently at each frame, which limits their ability to produce temporally coherent sensing trajectories\. We introduce DyPSI, a dynamic physics sensing framework that formulates this problem as the joint generation of future fields and sensor trajectories conditioned on historical observations\. DyPSI lifts discrete sensor coordinates into continuous Sensor Position Fields, encodes fields and sensing configurations with a shared Functional Tucker representation, and trains a joint diffusion model to generate future fields and sensing trajectories simultaneously in the resulting latent space\. A Gaussian\-process temporal kernel correlates the perturbation injected during diffusion training, biasing the denoiser toward temporally smooth recoveries, and we further provide an analysis linking the EDM training objective to a sequence\-aggregated A\-optimality criterion and a kernel\-induced bound on discrete trajectory variation\. Experiments on turbulent flow, GLORYS12 sea\-surface temperature, and 3D car aerodynamics show that DyPSI consistently outperforms static and frame\-wise placement strategies, with substantial error reduction under tight sensor budgets\.

## Advectra: Asymmetric Latent Transport for Non\-Stationary Physics

**Authors:** Nodens Koren; Thomas Hofmann; Georgios Kissas

**ID:** 148631 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wJA5smlez3>) | [PDF](<https://openreview.net/pdf?id=wJA5smlez3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148631>)

Many latent neural operators represent input and output fields in a stationary latent chart\. In particular, common latent routing mechanisms use fixed or shared assignment weights for feature projection and reconstruction, limiting their ability to model transport\-dominated systems where coherent structures move relative to fixed coordinate frames\. We propose Advectra , a transport\-aware latent operator that introduces a regularized kinematic coordinate map to decouple source and target coordinate systems\. This yields an approximately co\-moving latent reference frame and enables asymmetric feature aggregation and reconstruction\. Combined with a geometry\-aware ordering mechanism for state\-space models, Advectra captures advective dynamics while maintaining stable global interactions\. Advectra achieves the best performance among evaluated geometry\-constrained and form\-free baselines on advection\-dominated benchmarks, including passive scalar transport in Navier\-\-Stokes flows and Rayleigh\-\-Taylor instability, while demonstrating strong generalization on real\-world engineering tasks\. These results highlight the benefit of explicit moving\-frame structure in neural operators for non\-stationary physics\.

## OmniDex: Scaling Dexterous Hand Grasping to Diverse Cluttered Scenes

**Authors:** Naiyu Fang; Zhongjin Luo; Yuxin Mo; Siyuan Huang; Jianbo Liu; Yufei Liu; Zheyuan Zhou; Chengkai Jin; Xiaogang Wang; Hongsheng Li

**ID:** 139032 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p5TKc6eO3t>) | [PDF](<https://openreview.net/pdf?id=p5TKc6eO3t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139032>)

Dexterous grasping is the foundational primitive in embodied AI, demanding massive data to train robust models\. As real\-world data collection is expensive, simulation has become the mainstream paradigm\. Yet, while cluttered scenes best reflect real\-world applications, learning to grasp within them is bottlenecked by a critical scarcity of large\-scale data\. To resolve this, we curate high\-quality 3D objects and supporting bases, proposing a scalable seed\-and\-filter strategy that bypasses sluggish scene\-level optimization\. This yields an unprecedented benchmark comprising over 2\.6 million scenes and 0\.4B scene\-specific grasp ground truths, featuring diverse realistic layouts paired with rich semantic and geometric observations\. Furthermore, we introduce the OmniDex model to overcome the grasp multimodality and last\-millimeter precision errors plaguing current generative models\. By coupling Soft Winner\-Takes\-All learning with human\-inspired physical constraints during training, and utilizing physics\-driven ranking, our approach achieves robust dexterous grasping without the latency of post\-optimization\. Experimental results show that OmniDex model achieves state\-of\-the\-art performance and strong generalization across diverse scenes, views, and unseen objects\.

## Walking the Hypercube: Unbiased Quantum Partition Functions Without the Matrix

**Authors:** Kumar Avinava Dubey; Arijit Sehanobish; Krzysztof M Choromanski

**ID:** 148626 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wLHljLWRDA>) | [PDF](<https://openreview.net/pdf?id=wLHljLWRDA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148626>)

Computing the partition function $\\mathcal\{Z\} = \\mathrm\{tr\}\(e^\{\-\\beta H\}\)$ of a quantum spin Hamiltonian $H$ on $n$ sites is a fundamental problem in statistical physics and quantum chemistry\. However exact evaluation requires $O\(8^n\)$ time and $O\(4^n\)$ memory making it intractable for all but the smallest systems\.  We propose an unbiased stochastic estimator of $\\mathcal\{Z\}$, and more generally of $\\mathrm\{tr\}\(f\(H\)\)$ for any function $f$ admitting a convergent power series over exponentially large, implicitly defined operators using only local random walks, avoiding both matrix materialization and matrix\-vector products\. Our approach combines Graph Random Features with the Hutchinson's stochastic trace estimator, and exploits the algebraic structure of quantum spin Hamiltonians to reduce the per\-step computational cost to $O\(n \+ d\)$, where $d$ is the mean degree of the spin coupling graph, independent of the Hilbert space dimension $N = 2^n$\.  We validate the estimator empirically against exact matrix exponentiation for small system sizes, and demonstrate its applicability to system sizes where exact methods are infeasible\.

## Importance\-Weighted Operator Learning Under Probability Measure Shifts

**Authors:** Lei Sun; Yusuke Tanaka; Xiaocheng Shang; Takaharu Yaguchi; Tomoharu Iwata

**ID:** 156079 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0afkWPjBeM>) | [PDF](<https://openreview.net/pdf?id=0afkWPjBeM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156079>)

Operator learning has attracted significant interest for its capability to approximate mappings between function spaces\. A common assumption in this field is that training and test samples are drawn from the same probability measure\. However, this assumption is often violated, leading to probability measure shifts\. Under such shifts, standard operator learning methods often lead to degraded performance because the expected training error does not match the expected test error\.  In this paper, we propose importance\-weighted operator learning \(IWOL\), a framework for learning operators under probability measure shifts in function spaces\. We prove that, when the test measure is absolutely continuous with respect to the training measure, the expected test error is equivalent to an importance\-weighted expected training error, with weights given by the Radon\-\-Nikodym derivative\. This result provides a theoretical basis for correcting measure shifts in operator learning, but importance weighting relies on this absolute\-continuity condition and may yield unbounded weights\. To overcome these limitations, we introduce relative importance weights defined with respect to a mixture of the training and test measures\. The resulting weights remain well\-defined even when absolute continuity fails, and they are uniformly bounded\. These weights induce a relative importance\-weighted training objective for neural operators under probability measure shifts\. To estimate these weights, we present binary classifiers that take functions as inputs, defined through functionals modeled by kernel integral operators\. This design enables discretization\-invariant weight estimation in function space\. Experiments on multiple PDE benchmarks and neural operator architectures demonstrate that the proposed method consistently improves performance under probability measure shifts\.

## Cool Graphs: Active Property Search Towards Quantum Nano\-Refrigerators

**Authors:** Sofia Blyufer; Amir Kleiner; Uri Peskin

**ID:** 152915 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PRkY0xcxEL>) | [PDF](<https://openreview.net/pdf?id=PRkY0xcxEL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152915>)

Nanodevices that absorb energy from their thermal environment can act as quantum refrigerators\. Finding suitable configurations, however, is a needle\-in\-a\-haystack problem: the many\-body state space scales exponentially with the size of the device, where each candidate configuration requires an expensive quantum\-chemical computation\. Under random sampling of material parameters, only 2\-9\\% of configurations exhibit the desired property\. We introduce a search framework that couples a Graph Variational Autoencoder \(GVAE\) with an uncertainty\-driven Active Learning \(AL\) loop to efficiently identify energy\-absorbing configurations in electronic junctions with a 2D "working material" to be optimized\. The GVAE maps physical parameters \- site energies, coupling matrices, temperature \- into a smooth latent space that distinguishes cooling from dissipative parameter regimes, achieving a classification ROC\-AUC of 0\.89 on held\-out topologies and 0\.80 on unseen extrapolation topologies\. An AL pipeline based on Monte Carlo dropout then targets the decision boundary, iteratively selecting the candidates where the model is least certain for simulation\. Over 32 AL cycles, the uncertainty\-driven strategy discovers positive\-flux \(energy absorbing\) systems at rates consistently exceeding the random baseline across all tested topologies, providing a data\-efficient pathway for navigating a combinatorically large design space\. The learned latent space organizes configurations along physically interpretable axes, that correlate with underlying microscopic model parameters\. Our framework, thus, paves a new way towards effective cooling of computational devices, to reduce the environmental footprint of high performance computing\.

## DiscoverPhysics: Benchmarking LLMs for out\-of\-the\-box scientific thinking

**Authors:** Lindsay Smith; Matt Sampson; Siddharth Mishra\-Sharma; Peter Melchior; Andrew Wilson; Pavel Izmailov; Carolina Cuesta Lazaro

**ID:** 139006 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r7QnwP79SC>) | [PDF](<https://openreview.net/pdf?id=r7QnwP79SC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139006>)

Frontier LLMs now perform strongly across a wide range of physics evaluations, but it is hard to disentangle genuine reasoning from recall of established science\. We introduce DiscoverPhysics , an interactive benchmark that asks a LLM agent to discover the laws of motion of a simulated world whose physics deliberately deviates from our own\. We construct eleven worlds governed by, among others, screened and fractional\-power gravity, multi\-species couplings, hidden dark\-matter\-like particles, non\-coordinate\-free physics, and time\-varying interactions\. Each world is generated on demand by an N\-body simulator, for which the agent proposes several rounds of experiments, observes raw trajectory data, and ultimately submits both a natural\-language explanation of the world's physics and a Python implementation of the inferred law\. Because solving a world requires the agent to design informative experiments and revise its hypotheses, the benchmark probes long\-horizon reasoning over an experimental history\. We evaluate submissions along two complementary axes: trajectory MSE on held\-out particles and an LLM\-judged explanation score following an expert\-written rubric assessing conceptual understanding of each world\. Across ten frontier models, we find that the strongest agents pass only about half of the worlds and consistently fail on those where latent structure must be uncovered\. Open\-source models lag substantially behind commercial models, both in their ability to design informative experiments and in extracting conclusions from the data\. We further find that good predictive accuracy does not guarantee high explanation quality and that conceptual understanding depends on hypothesis refinement through well\-chosen experiments\.

## Beyond MNIST: Limitations of Amplitude Encoding on Quantum Classification

**Authors:** Xin Wang; Yabo Wang; Rebing Wu

**ID:** 150197 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jzwe0bK0ce>) | [PDF](<https://openreview.net/pdf?id=jzwe0bK0ce>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150197>)

It remains unclear whether quantum machine learning \(QML\) truly holds an advantage when tackling practical and meaningful tasks\. In exploring this question, the importance of classical data encoding, often overlooked, becomes increasingly evident\. Amplitude encoding, which can embed $2^n$ classical data into $n$ qubits, is widely used due to its apparent efficiency\. However, its potential limitations for QML have yet to be fully explored\. In this paper, we establish a theoretical result for the limitations caused by quantum encoding and point out the existence of a concentration phenomenon in amplitude encoding\. Compared to prior work, our theoretical result operates under more general conditions and leads to a stronger conclusion\. This concentration phenomenon causes the classification predictions to remain close to random guessing, regardless of the training process\. Our findings shed new light on a long\-standing puzzle in the field of QML: why some QML models perform well on simple datasets like MNIST but fail to generalize to more complex practical tasks\. By highlighting the pivotal role of encoding design in QML, our work clearly indicates that future research needs to focus more on the design of classical data encoding to advance the effectiveness of QML\.

## PolarScale: A Physics\-Grounded Benchmark for Radiometrically Consistent RGB\-to\-Stokes Estimation

**Authors:** Beibei Lin; Tingting Chen; Xin Zhang; Wenhao Zhao; DONGJUN LI; Zifeng Yuan

**ID:** 139738 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7IsIlT8OJF>) | [PDF](<https://openreview.net/pdf?id=7IsIlT8OJF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139738>)

Polarization imaging provides rich physical cues beyond RGB imaging, yet acquiring such information typically requires specialized polarization\-sensitive hardware that increases system cost and deployment complexity\. Recent methods have proposed to infer polarization information directly from standard RGB images, providing a hardware\-free alternative\. While useful for describing relative polarimetric structure, these representations do not fully assess whether estimated images preserve the radiometric scale and intensity\-dependent physical information needed for full Stokes reconstruction\. To address this limitation, we introduce PolarScale, a physics\-grounded benchmark for radiometrically consistent RGB\-to\-Stokes estimation\. Instead of treating polarization inference from RGB images as conventional image\-to\-image translation, PolarScale evaluates how scale\-independent descriptors, scale\-dependent Stokes components, and radiometric scale jointly support physically meaningful Stokes reconstruction\. Building upon this formulation, we propose three prediction strategies, namely direct, joint, and decoupled prediction, to study how scale\-independent and scale\-dependent polarimetric cues should be modeled across representative restoration\-based and generative frameworks\. Our analysis reveals that restoration\-based frameworks outperform generative ones for radiometrically consistent polarization estimation \(e\.g\., 28\.61 vs\. 26\.14 dB PSNR\)\. Furthermore, we find that jointly modeling scale\-independent and scale\-dependent parameters yields more stable physical representations than direct scale\-dependent prediction \(e\.g\., 28\.61 vs\. 26\.81 dB PSNR\)\. Overall, PolarScale provides a physics\-grounded benchmark foundation for evaluating whether vision models can recover radiometrically consistent polarimetric signals from standard RGB images\.

## Diffusion\-warm sampling of the XY model enables fast thermalization at scale

**Authors:** Sehmimul Hoque; Roger Melko; Pooya Ronagh

**ID:** 155666 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3vCVCEk7Px>) | [PDF](<https://openreview.net/pdf?id=3vCVCEk7Px>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155666>)

We introduce a novel technique for scalable sampling of spin\-system states with continuous symmetries using diffusion models\. By applying our approach to the XY model, a fundamental continuous\-spin model in condensed matter physics, we show that our technique addresses the shortfalls of the Markov chain Monte Carlo \(MCMC\) in generalization to varying system sizes\. More specifically, we show that training a temperature\-conditioned diffusion model on smaller\-size XY model lattices enables the generation of accurate samples in larger lattice sizes\. By tracking physically important observables of the model, such as spin correlations, our experiments demonstrate that diffusion sampling followed by few MCMC steps reduces the thermalization time by an order of magnitude relative to the standard MCMC with random initialization\. Our study provides valuable insight as to how generative models can be used to study continuous\-state condensed matter systems at scale\.

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

## QDMouse4M: A Multi\-View 3D Mouse Spontaneous Behavior Dataset with Quantum\-Dot Markers

**Authors:** Jingyang Ke; Amartya Pradhan; Xueling Zhang; Weihan Li; Anqi Wu; Jeffrey Markowitz

**ID:** 139136 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iqKjTucgKn>) | [PDF](<https://openreview.net/pdf?id=iqKjTucgKn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139136>)

Quantitative analysis of animal behavior in neuroscience increasingly relies on accurate 3D pose, yet current large\-scale mouse datasets are restricted to top\-down views and suffer from occlusion and keypoint ambiguity\. We introduce QDMouse4M, a six\-view dataset of freely moving mice with physically grounded 2D and 3D keypoint annotations obtained from subdermal quantum\-dot fluorescence markers\. QDMouse4M contains over four million reflectance frames with matched fluorescence frames, 2D and 3D pose trajectories and behavior classifications\. We use the dataset to evaluate markerless 2D and 3D pose estimation with SLEAP and Lightning Pose 3D across training\-set sizes, backbones, and in\-session/out\-of\-session splits\. We further show that the released trajectories support downstream spontaneous\-behavior analysis with Keypoint\-MoSeq and stride\-level gait measurements\. QDMouse4M provides a benchmark\-scale, physically grounded resource for developing and evaluating pose estimation, behavior understanding, and biomechanics models under realistic dark\-environment laboratory conditions\.

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

## Flow Perturbation\+\+: Multi\-Step Unbiased Jacobian Estimation for High\-Dimensional Boltzmann Sampling

**Authors:** xinpeng peng; Ang Gao

**ID:** 152021 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W6FlrDtr71>) | [PDF](<https://openreview.net/pdf?id=W6FlrDtr71>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152021>)

The scalability of continuous normalizing flows \(CNFs\) for unbiased Boltzmann sampling remains limited in high\-dimensional systems due to the cost of Jacobian\-determinant evaluation, which requires $D$ backpropagation passes through the flow layers\. Existing stochastic Jacobian estimators such as the Hutchinson trace estimator reduce computation but introduce bias, while the recently proposed Flow Perturbation method is unbiased yet suffers from high variance\. We present \*\*Flow Perturbation\+\+\*\*, a variance\-reduced extension of Flow Perturbation that discretizes the probability\-flow ODE and performs unbiased stepwise Jacobian estimation at each integration step\. This multi\-step construction retains the unbiasedness of Flow Perturbation while achieves substantially lower estimator variance\. Integrated into a Sequential Monte Carlo framework, Flow Perturbation\+\+ achieves significantly improved equilibrium sampling on a 1000D Gaussian Mixture Model and the all\-atom Chignolin protein compared with Hutchinson\-based and single\-step Flow Perturbation baselines\.

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

## AET\-Bench: Pixel\-Accurate Atomic Tomography Is Not Atom\-Accurate

**Authors:** Zicheng Liu; Wenzhuo Ma; Jintao Chen; Di Huang

**ID:** 139587 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GmdQ25dIWq>) | [PDF](<https://openreview.net/pdf?id=GmdQ25dIWq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139587>)

Atomic electron tomography \(AET\) aims to recover the three\-dimensional arrangement, chemical identity, and temporal evolution of individual atoms\. Yet most reconstruction methods are still evaluated primarily by voxel\-level image similarity, such as PSNR, SSIM, or Fourier shell correlation\. In this work, we show that this evaluation practice can select scientifically incorrect reconstructions: a volume that looks accurate can contain atoms that are shifted, merged, missed, hallucinated, chemically mislabeled, or assigned inconsistent identities through time\. We introduce AET\-Bench, a dataset and benchmark for atom\-first evaluation of atomic electron tomography\. AET\-Bench contains 755 samples across a six\-tier realism ladder, spanning clean analytical simulations, binary alloys, 4D atomic dynamics, multislice scattering, real experimental tilt series, and Brownian Pt nanocrystal trajectories\. It defines four complementary tasks and evaluates 14 core method families with 21 logged method entries under a unified protocol\. AET\-Bench reveals a central failure mode hidden by voxel\-only evaluation\. On the AET\-Sim\-Mono tier, high\-SSIM neural and Gaussian reconstructions can recover substantially fewer atoms than classical or sparsity\-regularized methods: for example, 4D\-GS achieves strong voxel similarity but only 43\.9\\% atom recall, while FISTA\-TV reaches 95\.1\\% atom recall despite much lower SSIM\. This inversion persists across atom\-matching thresholds, showing that it is not an artifact of a single cutoff\. On more realistic multislice and real tiers, atom recovery further degrades, exposing a physics gap between visually plausible volumes and reference atomic models\. For 4D reconstruction, we find that smooth temporal density fields do not guarantee persistent atom identities\. AET\-Bench establishes atom\-level fidelity as a necessary evaluation axis for AET\. Our results suggest that future AET methods should not be judged only by how reconstructions look, but by whether they recover the atoms, species, and trajectories that scientists actually use\.

## PCFBench: How Far Can Large Vision\-Language Models Go in Physics\-aware Photonic Inverse Design?

**Authors:** Shengchao Chen; Ting Shu; Sufen Ren

**ID:** 139614 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FQXg2OPgnz>) | [PDF](<https://openreview.net/pdf?id=FQXg2OPgnz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139614>)

Photonic crystal fibres \(PCFs\) underpin critical applications in telecommunications, sensing, and high\-power laser delivery, yet their design remains a manual, expert\-intensive process that couples geometric intuition with deep waveguide physics\. Vision\-language models \(VLMs\) offer a promising path toward automating this pipeline, but can they truly reason about photonic physics from microscopy images, or do they merely recognise visual patterns? We introduce PCFBench, the first comprehensive benchmark for evaluating VLMs on the complete photonic inverse\-design workflow\. PCFBench spans 26 tasks organised into six categories of increasing cognitive demand \(Geometry Perception, Physics Understanding, Text Generation, Multi\-modal Reasoning, Inverse Design, and Code Generation\), built from over 220K FDTD simulation samples across 18 structurally diverse fibre families\. We evaluate both individual VLMs on isolated tasks and multi\-agent systems \(MAS\) on the full sequential pipeline from perception to design\. Our results reveal a striking perception\-design gap: current models can identify fibre geometry with moderate success, yet consistently fail to translate that visual understanding into physics\-aware design actions\. Moreover, cascading agents through the pipeline exposes significant error propagation, where upstream perception mistakes compound into downstream design failures\. These findings suggest that neither model scaling nor naive agent chaining suffices; closing the loop demands explicit physical grounding\. PCFBench provides the community with a rigorous, multi\-dimensional testbed to measure progress toward AI\-assisted photonic engineering\.

## DIAGNO: Diagonal Spherical Neural Operators for Heterogeneous Earth Dynamics Modeling

**Authors:** Herui Li; Bin Lu; Haonan Qi; Lei Zhou; Luoyi Fu; Xinbing Wang; Meng Jin

**ID:** 154008 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GtXyIhzAqI>) | [PDF](<https://openreview.net/pdf?id=GtXyIhzAqI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154008>)

Accurate forecasting of Earth's dynamic systems is vital in geophysics, where neural operators offer a powerful data\-driven paradigm\. Standard operators often treat the Earth as a flat Euclidean plane, introducing geometric artifacts\. In contrast, Spherical Neural Operators \(SNOs\) resolve this mismatch by operating within the spherical spectral space, naturally adapting to spherical geometries\. However, for computational efficiency, existing SNOs typically rely on the rotation equivariance assumption\. This assumption simplifies the transitions of physical states into isolated spectral modal evolutions, thereby over\-idealizing the Earth as a homogeneous system\. To solve this problem, we no longer rely on the rotation equivariance assumption that isolates spectral modal evolution, but directly derive an explicit modal interaction kernel and propose Diagonal Spherical Neural Operators named DIAGNO\. DIAGNO explicitly parameterizes cross\-modal interactions through spectral modal decomposition, thereby preserving the inherent heterogeneity of Earth dynamics\. Furthermore, leveraging the unique diagonal structure of the spherical spectrum, we design inter\- and intra\-diagonal interaction mechanisms to natively capture essential zonal and meridional dynamics, respecting intrinsic geophysical regularities\. Extensive experiments across simulated fluid dynamics and real\-world Earth system reanalysis \(including atmosphere and ocean\) datasets demonstrate DIAGNO’s superior capability, consistently achieving state\-of\-the\-art performance in multi\-step forecasting\. Beyond this, we validate DIAGNO’s practical analytical value in professional geophysical domains by assessing its fidelity in capturing climatological anomalies and maintaining physical consistency\.

## AbsoluteDegradation: A Physics\-Inspired Synthetic Film\-Degradation Pipeline and Archival Film Restoration Benchmark

**Authors:** Mikołaj Jastrzębski; Dawid Glinkowski; Dawid Zieliński; Daniel Borkowski; Wojciech M Kozłowski; Kamil Adamczewski

**ID:** 139176 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gKunvq63KY>) | [PDF](<https://openreview.net/pdf?id=gKunvq63KY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139176>)

Restoring archival film remains a fundamentally challenging problem due to the absence of paired training data and the lack of standardized evaluation benchmarks\. Pristine versions of deteriorated footage are physically unrecoverable, forcing supervised methods to rely on synthetic data that often fail to capture the complex, temporally coherent nature of real film degradation\. At the same time, existing real\-world datasets are limited in scale, quality, and accessibility, hindering reliable evaluation and fair comparison across methods\. We address both limitations with AbsoluteDegradation, a physics\-inspired, modular pipeline for synthesizing realistic film degradations, and a new large\-scale archival benchmark\. The proposed pipeline models the analog\-to\-digital process as a structured composition of artifact families, incorporating signal\-dependent grain, parametric scratches, and temporally coherent camera motion, enabling controlled generation of diverse degradation regimes\. In parallel, we introduce a curated dataset of 81,576 high\-resolution frames sourced from real archival footage, designed for consistent evaluation under authentic conditions\. Together, these contributions provide a unified framework for training and benchmarking restoration models\. Extensive experiments across multiple architectures show that models trained with AbsoluteDegradation generalize better to real\-world footage, while the proposed benchmark reveals systematic failure modes of current methods\. We hope this work establishes a foundation for reproducible and domain\-authentic evaluation in archival film restoration\.

## AtomWorld\-Mem: Memory\-Restored World States for Long\-Horizon Atomistic Evolution

**Authors:** Tian Luo; Ruge Zhang; Haozhi Han; Yifeng Chen; Yunquan Zhang; Ting Cao; Yunxin Liu; Kun Li

**ID:** 155270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6wc2BIP9Oe>) | [PDF](<https://openreview.net/pdf?id=6wc2BIP9Oe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155270>)

High\-fidelity atomistic evolution over long timescales requires more than observing the current crystal configuration\. Instantaneous atomistic snapshots are often incomplete: locally similar configurations can correspond to different hidden dynamical contexts, future event preferences, and waiting\-time scales\. We argue that this snapshot ambiguity makes long\-horizon atomistic evolution fundamentally a memory\-based world\-state restoration problem\. To address this, we introduce AtomWorld\-Mem, a memory\-restored atomistic world model that recovers the latent world state missing from instantaneous crystal snapshots\. AtomWorld\-Mem treats the evolving alloy as an AtomWorld: spatial encoders write multi\-scale atomistic keyframes from dense local topology and sparse long\-range defect context, while short\-term event memory and long\-term structural memory integrate these keyframes across time to restore a future\-predictive evolutionary state\. The restored state is used to prioritize legal vacancy\-mediated events under single\-event Kinetic Monte Carlo \(KMC\) constraints, while event legality, physical execution, and residence\-time updates remain governed by the underlying simulator\. Empirically, AtomWorld\-Mem improves long\-horizon atomistic progress under fixed microscopic event budgets while maintaining high\-fidelity evolution across energetic, structural, and vacancy\-transport observables\. It further transfers zero\-shot across diverse unseen alloy\-temperature AtomWorlds, suggesting that the learned memory\-restoration mechanism captures reusable principles of hidden\-state inference rather than a system\-specific local energy heuristic\. These results position memory\-restored world\-state modeling as a promising route toward efficient, physically grounded, and transferable atomistic evolution\.

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

**ID:** 153578 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KMhpQBznmA>) | [PDF](<https://openreview.net/pdf?id=KMhpQBznmA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153578>)

Phase transitions occur when a physical system undergoes a dramatic transformation as it crosses a transition\. We study whether regression methods trained only in one phase can predict the physical properties that characterize the unobserved phase\. Our test sets consist of the analytically tractable Heisenberg model and angle\-resolved photoemission spectroscopy measurements of a venerable high transition temperature superconductor\. We find that polynomial regression and kernel methods recover the unobserved phase structure, while standard neural networks fail\. To bound the error, we adopt the generalized eigenvalue problem \(GEVP\) into an upper bound on the worst\-case transfer coefficient, defined as the ratio of mean squared error \(MSE\) loss on the extrapolation region to the MSE loss on the training region\. Empirically, we find that our GEVP bound stays approximately constant with respect to the empirical transfer coefficient across training\-set sizes and distance between the training and extrapolation region for both datasets, providing a principled framework for studying extrapolation feasibility\.

## Symplectic Neural Operators for Learning Infinite Dimensional Hamiltonian Systems

**Authors:** Makara Yeang; Yusuke Tanaka; Takashi Matsubara; Takaharu Yaguchi

**ID:** 148541 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x7jCoj91Df>) | [PDF](<https://openreview.net/pdf?id=x7jCoj91Df>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148541>)

The modeling and simulation of infinite\-dimensional Hamiltonian systems are central problems in mathematical physics and engineering, but they pose significant computational and structural challenges for standard data\-driven architectures\. In this work, we introduce the Symplectic Neural Operator, a neural operator architecture designed to preserve the symplectic structure intrinsic to Hamiltonian PDEs\. We provide a theoretical characterization of their symplecticity and establish a rigorous long\-term stability result based on the combination of symplectic structure preservation and learning accuracy\. Numerical experiments on canonical Hamiltonian PDEs corroborate this theoretical result and show that SNOs exhibit improved energy behavior compared with non\-structure\-preserving neural operators\.

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

## InformedXRD: Reproducible Benchmarks and Physics\-Informed Evaluation for Powder Diffraction Symmetry Classification

**Authors:** Edward G Friedman; Elizabeth J Baggett; Abhishek Shetty; Derrick Chan\-Sew; Vanellsa Acha; Harshitha Dwaracherla; P\. A Kienzle; William Ratcliff

**ID:** 138981 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=snum235vrK>) | [PDF](<https://openreview.net/pdf?id=snum235vrK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138981>)

Machine learning for powder X\-ray diffraction \(PXRD\) symmetry classification is being trained at scale, yet the field lacks a common evaluation standard: papers report results on different subsets of the RRUFF mineral diffraction database, under different target taxonomies, with different preprocessing and different summary metrics, and published models are rarely released in a form that permits rescoring\. We present InformedXRD, an evaluation framework with four parts: \(i\) a machine\-readable mapping from 230 space groups to 99 extinction groups, the finest classes that powder diffraction can identify from systematic absences alone; \(ii\) two algorithmically curated real\-data benchmarks, RRUFF\-473 and RRUFF\-325, whose inclusion rules are specified as code and reproduce from a frozen upstream snapshot; \(iii\) a prior\-only frequency baseline and stratified reporting protocol that expose when apparent gains are driven by label imbalance or nuisance\-fit severity; and \(iv\) a hierarchy\-aware error metric on the condensed translationengleiche \(same\-lattice\) subgroup graph that measures the crystallographic severity of misclassifications\. Using four publicly released ViT checkpoints from Baggett et al\. \(2026\) and an in\-house 1D residual CNN as case studies, we show that evaluation design changes model ranking: standard paired tests point in different directions depending on whether one evaluates Top\-1 or Top\-5, and stratified analysis exposes a label\-entropy confound that aggregate accuracy hides\. All mapping tables, benchmark code, evaluation scripts, and case\-study checkpoints are released as shared infrastructure for future PXRD\-ML evaluation\.

## SympFNO: Structure\-Preserving Fourier Neural Operators for Physical Surrogate Modeling

**Authors:** MINH LUONG DOAN; Duc H Nguyen; Khanh N Quoc; Phan Quoc Hung Mai; Ngoc Mai Vu; Bui T Hieu; Nhung Duong; Phong Ho; Long H Dang; Tuan Do

**ID:** 152328 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TtVLwbWHCn>) | [PDF](<https://openreview.net/pdf?id=TtVLwbWHCn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152328>)

Neural operators can efficiently learn solution maps for partial differential equations, but standard architectures often violate fundamental physical structure during inference, leading to unstable long\-horizon rollouts\. We introduce the Symplectic Fourier Neural Operator \(SympFNO\), which is composed of three symplectic layers that embed structure preservation directly into Fourier\-space and physical\-space transformations, thereby preserving the geometric structure of Hamiltonian dynamics\. Our theory provides a rigorous foundation for the architecture by showing that the structure\-preserving design is mathematically consistent with Hamiltonian evolution and inherently more efficient than unconstrained operator parameterizations\. Across five well\-known Hamiltonian PDE problems, SympFNO achieves stable long\-term rollouts, substantially lower trajectory error, more accurate conservation of physical invariants, and up to two orders of magnitude fewer parameters than state\-of\-the\-art baselines, namely FNO and PINO\.

## PhysFormer: Learning to Simulate Mechanics in World Space

**Authors:** Yiming Chen; Yushi LAN; Andrea Vedaldi

**ID:** 155354 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6G9JMnjcL7>) | [PDF](<https://openreview.net/pdf?id=6G9JMnjcL7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155354>)

We present PhysFormer, a physics\-grounded diffusion transformer for generating 4D multi\-object mesh dynamics directly in world coordinates\. Rather than predicting future frames in pixel space or rolling out next\-step system states autoregressively, PhysFormer models physical evolution as full\-trajectory coordinate diffusion\. Given initial per\-vertex positions, velocities, and material conditions, it generates future mesh vertex trajectories in a single denoising process, producing physically plausible object\-object and object\-environment interactions without hard\-coded constraints, simulator priors, or learned shape latents\. PhysFormer adopts a DiT\-style backbone with factorized temporal, spatial, and object\-level attention to capture coherent structure across time, vertices, and objects\. Trained on over 100k collision\-rich simulated trajectories, it models rigid and deformable multi\-object dynamics, generalizes to unseen real\-world geometries and larger object counts, and substantially outperforms autoregressive baselines in trajectory accuracy, rigidity preservation, and momentum\-based physical consistency\. Our results position coordinate\-space diffusion as a promising step toward view\-invariant, geometry\-level world models for robotics, graphics, and physical design\.

## AOT\-POT: Adaptive Operator Transformation for Large\-Scale PDE Pre\-training

**Authors:** Qitan Lv; Hong Wang; Hao Zhongkai; Wen Wu; Xuenan Xu; Bowen Zhou; Feng Wu; Chao Zhang

**ID:** 153792 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IdluSNs3f6>) | [PDF](<https://openreview.net/pdf?id=IdluSNs3f6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153792>)

Pre\-training neural operators on diverse PDE datasets has emerged as a promising paradigm for building general\-purpose surrogate models in scientific machine learning\. However, the \*\*inherent complexity\*\* and \*\*structural diversity\*\* of PDE solution operators make multi\-PDE pre\-training fundamentally difficult\. Existing approaches address this mainly by enlarging model capacity, while the target solution operators themselves remain unchanged\. Inspired by classical numerical analysis\-\-\-where a problem\-tailored \*operator transformation\* reformulates a complex PDE into a numerically easier equivalent\-\-\-we propose to similarly reformulate the target solution operators, turning a heterogeneous set of complex, structurally divergent operators into a simpler and better\-aligned equivalents\. Since different PDEs admit different simplifications, the transformation must be \*adaptive and input\-dependent\*, so that a single neural operator can approximate the entire family jointly\. We instantiate this idea as AOT\-POT \(\*\*A\*\*daptive \*\*O\*\*perator\-\*\*T\*\*ransformation for \*\*P\*\*re\-training \*\*O\*\*perator \*\*T\*\*ransformer\), which realizes such a transformation by expanding the hidden representation into multiple parallel streams, aggregating and redistributing them with input\-dependent weights before and after each sub\-layer, and mixing streams through Sinkhorn\-projected doubly stochastic matrices for stable training\. Together, these mechanisms reformulate the diverse, complex solution operators into a simpler equivalents that a single architecture can approximate jointly\. Empirically, AOT\-POT achieves state\-of\-the\-art results on 12 PDE benchmarks with only 3% additional parameters, reducing the relative L2 error by up to 77\.6% \(40\.9% on average\)\. Fine\-tuning further reduces L2 error by up to 92% on in\-domain PDEs and 89% on out\-of\-domain PDEs, confirming that adaptive operator transformation is an orthogonal and effective axis for advancing PDE foundation models, beyond merely scaling model capacity\.

## Derived Fields Preserve Fine\-Scale Detail in Budgeted Neural Simulators

**Authors:** Wenshuo Wang; Fan Zhang

**ID:** 152570 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S8JSn3ujCO>) | [PDF](<https://openreview.net/pdf?id=S8JSn3ujCO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152570>)

Fine\-scale\-faithful neural simulation under fixed storage budgets remains challenging\. Many existing methods reduce high\-frequency error by improving architectures, training objectives, or rollout strategies\. However, under budgeted coarsen\-quantize\-decode pipelines, fine detail can already be lost when the carried state is constructed\. In the canonical periodic incompressible Navier\-\-Stokes setting, we show that primitive and derived fields undergo systematically different retained\-band distortions under the same operator\. Motivated by this observation, we formulate Derived\-Field Optimization \(DerivOpt\) , a general state\-design framework that chooses which physical fields are carried and how storage budget is allocated across them under a calibrated channel model\. Across the full time\-dependent forward subset of PDEBench, DerivOpt not only improves pooled mean rollout nRMSE, but also delivers a decisive advantage in fine\-scale fidelity over a broad set of strong baselines\. More importantly, the gains are already visible at input time, before rollout learning begins\. This indicates that the carried state is often the dominant bottleneck under tight storage budgets\. These results suggest a broader conclusion: in budgeted neural simulation, carried\-state design should be treated as a first\-class design axis alongside architecture, loss, and rollout strategy\.

## Generalizable Physics Simulation through Compositional Energy Minimization

**Authors:** Alexandru Oarga; Yilun Du

**ID:** 153653 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JjtvTbTp56>) | [PDF](<https://openreview.net/pdf?id=JjtvTbTp56>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153653>)

Learning the dynamics of interacting physical systems is a central challenge in machine learning for the physical sciences\. Prevailing architectures such as Graph Neural Networks \(GNNs\) and feedforward models often fail to explicitly capture the compositional nature of physical laws\. Instead of modeling the forces that govern a system, these networks learn to approximate aggregate state transitions\. As a result, they lack a causal understanding of the underlying physics interactions, leading to poor generalization in out\-of\-distribution systems with varying numbers of entities or novel configurations\. In this work, we introduce Compositional Potential Minimization \(CPM\), a framework that casts simulation as an energy minimization procedure over a composition of learned force potentials\. Each force component is represented as a separate, interpretable energy landscape, and interaction dynamics emerge from their addition\. Inference in CPM is framed as a global energy minimization problem over an arbitrary number of composed functions\. Because CPM learns to disentangle separate forces during training, it enables seamless generalization during test time to larger\-scale systems and unseen configurations through straightforward compositions of the learned energy components\. Our experiments show that CPM significantly outperforms previous state\-of\-the\-art GNN\-based solutions in 2D, 3D, and particle\-based simulations\.

## Neural Quantum Spectral Operator Learning for Solving Partial Differential Equations

**Authors:** Chanyoung Kim; Myeonghwan Seong; Kim Yujin; Daniel Kyungdeock Park; Youngjoon Hong

**ID:** 152295 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U8esdofq2w>) | [PDF](<https://openreview.net/pdf?id=U8esdofq2w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152295>)

Partial differential equations \(PDEs\) are central to modeling physical and engineering systems, but repeatedly solving parametric PDEs remains computationally expensive\. Operator learning enables fast surrogate inference, yet typically requires large input–output paired datasets generated by costly high\-fidelity PDE solvers\. Unsupervised operator learning frameworks alleviate data dependency but remain hindered by computational bottlenecks\. To address this, we propose Neural Variational Quantum Linear Solver \(NVQLS\), the first hybrid quantum–classical operator learning framework leveraging the Legendre\-Galerkin weak formulation\. We critically resolve the sign ambiguity in VQLS energy minimization, preventing erroneous solution representations\. Additionally, we introduce a neural embedding, a novel encoding scheme to map varying forcings and PDE coefficients into parameterized quantum circuit representations\. These structural innovations provide theoretical computational complexity advantages under efficient state preparation schemes, while achieving superior accuracy compared to a representative classical baseline\. Validations on 1D and 2D parametric PDEs under diverse boundary conditions demonstrate NVQLS's capability to simultaneously process varying inputs, offering a scalable unsupervised approach to quantum\-enhanced operator learning\.

## PDE\-PFN: Prior\-Data Fitted Neural PDE Solver

**Authors:** Jaehyeon Park; Mingu Kang; Dongseok Lee; Woojin Cho; Kookjin Lee; Anthony Gruber; Youngjoon Hong; Noseong Park

**ID:** 155714 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3SCmcBS34S>) | [PDF](<https://openreview.net/pdf?id=3SCmcBS34S>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155714>)

Motivated by the success of large language models \(LLMs\) with broad generalizability and robustness to noisy or unreliable pre\-training data, we seek to bring similar capabilities to PDE solvers\. In addition, inspired by the posterior predictive mean\-based inference mechanism of the in\-context learning in prior\-data fitted networks \(PFNs\), we propose PDE\-PFN, a prior\-data fitted neural solver that approximates the posterior predictive mean of PDE solutions via in\-context learning\. PDE\-PFN builds on a PFN architecture with self\- and cross\-attention mechanisms of Transformer and is pre\-trained on noisy approximate solutions generated by physics\-informed neural networks, serving as diverse but not necessarily exact priors\. Through experiments on a range of two\-dimensional PDEs, we demonstrate that PDE\-PFN achieves empirical generalization across heterogeneous equations, robustness under noisy priors, and zero\-gradient\-update in\-context inference capability\. Our approach not only outperforms task\-specific baselines but also provides a flexible and robust framework for advancing SciML\.

## Manifold\-weighted neural networks

**Authors:** Junyu Ren; Lek\-Heng Lim

**ID:** 154849 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AS3nvwjiyw>) | [PDF](<https://openreview.net/pdf?id=AS3nvwjiyw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154849>)

We establish universal approximation for neural networks whose weight matrices take values in matrix manifolds\. The nonlinear matrix manifolds considered in this work arise as orbits of classical Lie group actions embedded in the ambient space $\\mathbb\{R\}^\{d \\times k\}$\. Stiefel manifolds provide a prominent example with empirical precedent in prior neural\-network models\. We present an expanded catalog of such manifolds, drawing from well\-studied constructions in physics and differential geometry\. These manifolds are particularly appealing for intrinsic Riemannian optimization: the transitivity of the underlying group action yields explicit tangent\-space descriptions and retractions\. Moreover, the group\-action structure enables parameter\-efficient factorizations, reducing the number of trainable variables\. This leads to a fundamental expressivity question: when weight matrices take values in nonlinear matrix manifolds, which architectures retain universal approximation power? We prove that manifold\-weighted networks with residual connections and bounded scalar multipliers are $L^p\(K\)$\-universal\. To establish universality across our manifold catalog, we introduce two independent sets of sufficient conditions: Register\-Isolated Primitive Realizability \(RIPR\) and Cross\-Axis Fold\-and\-Cut \(CAFC\)\. These conditions correspond to two distinct approximation constructions\. By verifying RIPR or CAFC case by case for the matrix manifolds in our catalog, we establish universality for the corresponding residual manifold\-weighted networks with bounded scalar multipliers\.

## Mollifier Layers: Enabling Efficient High\-Order Derivatives in Inverse PDE Learning

**Authors:** Vinayak Vinayak; Ananyae bhartari; Vivek Shenoy

**ID:** 156782 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156782>)

Parameter estimation in inverse problems involving partial differential equations \(PDEs\) underpins modeling across scientific disciplines, especially when parameters vary in space or time\. Physics\-informed Machine Learning \(PhiML\) integrates PDE constraints into deep learning, but prevailing approaches depend on recursive automatic differentiation \(autodiff\), which produces inaccurate high\-order derivatives, inflates memory usage, and underperforms in noisy settings\. We propose Mollifier Layers, a lightweight, architecture\-agnostic module that replaces autodiff with convolutional operations using analytically defined mollifiers\. This reframing of derivative computation as smoothing integration enables efficient, noise\-robust estimation of high\-order derivatives directly from network outputs\. Mollifier Layers attach at the output layer and require no architectural modifications\. We compare them with three distinct architectures and benchmark performance across first\-, second\-, and fourth\-order PDEs—including Langevin dynamics, heat diffusion, and reaction\-diffusion systems—observing significant improvements in memory efficiency, training time and accuracy for parameter recovery across tasks\. To demonstrate practical relevance, we apply Mollifier Layers to infer spatially varying epigenetic reaction rates from super\-resolution chromatin imaging data—a real\-world inverse problem with biomedical significance\. Our results establish Mollifier Layers as an efficient and scalable tool for physics\-constrained learning\.

## PhysAgentGym: Free Physical\-Law Verifiers for Training Small Code\-Reasoning Agents

**Authors:** Lama Moukheiber

**ID:** 153149 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NV5qjfDXZB>) | [PDF](<https://openreview.net/pdf?id=NV5qjfDXZB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153149>)

Code\-reasoning agents trained from rollouts typically rely on costly verifiers — expert annotation, hand\-written unit tests, or learned reward models — each of which scales poorly across domains\. We argue that in domains with closed\-form physical laws, the laws themselves form a free, dense, automatic class of reward signals\. We instantiate this for physics via PhysAgentGym, an agentic code\- execution gym in which a language model receives a physics scenario, writes Python that simulates it, and emits a trajectory scored by a rule\-based verifier that compiles natural\-language standards into executable trajectory predicates\. Verifier signals are label\-free: physical laws supply the ground truth without any per\-task annotation\. Across four physics subcategories totaling 1,320 closed\-form\- simulator task instances, two frontier models, Claude Sonnet 4\.5 and OpenAI GPT\-5, achieve nearly\-identical aggregate scores \(0\.944 and 0\.945 at N=30 each\), with per\-cell agreement within 0\.5 pp, providing independent evidence the verifier is well\-calibrated rather than arbitrary\. We filter 491 successful frontier trajectories on two in\-distribution subcategories into an SFT corpus and train Qwen\-2\.5\-Coder \{1\.5B, 3B, 7B\} with QLoRA\. The trained 7B adapter reaches mean = 0\.942 on the four\-subcategory test set, matching both frontier models within 0\.3 pp on aggregate at approximately 50×lower inference cost\. It scores identically to both Sonnet and GPT\-5 on all three in\-distribution subcategories and ties them within 0\.8 pp on out\-of\-distribution Damping, despite never seeing damping data in training\. We further show that combined sparse\-and\-dense reward filtering beats sparse\-only filtering by 1\.4–8\.7 pp, that smaller models exhibit fundamental seed brittleness which disappears at 3B and above, and that scale enables the OOD generalization that 1\.5B and 3B do not provide\. The method is portable to any domain admitting closed\-form physical laws

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

## Patch Hierarchical Attention Transformers for Efficient Particle Jet Tagging

**Authors:** Zihan Zhao; Aaron Wang; Alan Xia; Chang Sun; Javier Duarte; Abhijith Gandrakota; Jennifer Ngadiuba; Richard Cavanaugh

**ID:** 149444 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q2cOojxQAv>) | [PDF](<https://openreview.net/pdf?id=q2cOojxQAv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149444>)

Real\-time jet tagging is critical for identifying short\-lived particle decays in the high\-throughput detectors of the Large Hadron Collider, where real\-time trigger systems which are responsible for deciding which collision events to store impose strict latency and accuracy constraints\. Transformer architectures achieve the highest jet tagging accuracy when compute is unconstrained, but their quadratic self\-attention cost places them orders of magnitude beyond the trigger budget\. Existing efficient variants reduce this cost by compressing the attention matrix or restricting it to ordered local windows, at the price of the explicit particle\-particle interactions that drive substructure identification\. To address this limitation, we introduce the Patch Hierarchical Attention Transformer \(PHAT\-JeT\), which combines two mechanisms: a physics\-inspired geometric message\-passing module that encodes local detector\-plane structure, and a hierarchical patch\-based attention scheme that computes exact attention within small particle groups while preserving global context through lightweight patch\-token communication\. Within this compute budget, PHAT\-JeT achieves state\-of\-the\-art accuracy and background rejection among resource\-constrained jet tagging models on four benchmarks \(hls4ml, JetClass, Top Tagging, and Quark\-Gluon\)\. Our code is available at https://anonymous\.4open\.science/r/PHAT\-JeT\-540B/README\.md

## SBNO : Schrödinger Bridge Neural Operator for the Forward and Inverse Problems under Missing Information

**Authors:** Jaehyeon Park; Inhyeok Jeong; Noseong Park

**ID:** 150696 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gBXPewhL1D>) | [PDF](<https://openreview.net/pdf?id=gBXPewhL1D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150696>)

Partial differential equation \(PDE\) surrogate modeling often relies on either dense observations or access to governing equations/physics constraints\. In practice, observations can be sparse and partial, and the underlying physics may be partially specified or unavailable\. We introduce SBNO, an equation\-free paired‑data diffusion bridge matching framework that learns conditional operators for both forward and inverse PDE problems under partial observations\. SBNO learns a pair of time\-dependent forward/backward drifts via diffusion Schrödinger bridge matching, using a unified endpoint coupling that preserves empirical input\-solution pairing, enabling both directions to be handled within a single framework\. At inference time, SBNO performs deterministic reconstruction by integrating the probability\-flow ODE of the learned bridge, eliminating the need for inference\-time hyperparameter tuning\. On five PDE benchmarks with 5\\% observations, SBNO achieves superior or comparable accuracy to baselines while demonstrating lower test\-instance error dispersion\. Furthermore, SBNO is at least $9\.7\\times$ faster and reduces GPU memory by at least $4\.3\\times$ compared to diffusion\-based baselines\.

## A meshfree exterior calculus for generalizable and data\-efficient learning of physics from point clouds

**Authors:** Benjamin Shaffer; Brooks Kinch; M\. Ani Hsieh; Nathaniel Trask

**ID:** 154490 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DDvFxExo8j>) | [PDF](<https://openreview.net/pdf?id=DDvFxExo8j>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154490>)

We introduce a meshfree exterior calculus \(MEEC\) for learning structure\-preserving descriptions of physics on point clouds, and use it to build MEEC\-Net, a data\-efficient surrogate that transfers across resolutions, geometries, and physical parameters\. MEEC equips an $\\epsilon$\-ball graph with virtual node and edge measures via a single sparse Schur complement solve; the resulting complex satisfies discrete conservation exactly, is end\-to\-end differentiable in the point positions, and exposes a direct geometry\-to\-physics link without the mesh\-generation step required by conventional structure\-preserving discretizations\. MEEC\-Net learns unknown physics as a shared edge\-wise flux law in an SO\($d$\)\-invariant local frame, so the same kernel produces compatible fluxes on any point cloud whose features lie in the training range\. We prove a solution\-error bound that splits into discretization and kernel\-approximation terms which is independent of problem geometry, explaining the observed transfer from very few examples\. We show that single\-solution training transfers to unseen geometries, boundary conditions, and physical parameters\. On five canonical PDE benchmarks MEEC\-Net achieves 1–2 orders of magnitude lower out\-of\-distribution error than baseline neural\-operator approaches\. On the SimJEB structural\-bracket benchmark it achieves competitive error while using substantially fewer training geometries\.

## Posterior\-First Neural PDE Simulation: Inferring Hidden Problem State from a Single Field

**Authors:** Wenshuo Wang; Fan Zhang

**ID:** 155188 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7byePZP7Lo>) | [PDF](<https://openreview.net/pdf?id=7byePZP7Lo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155188>)

Neural PDE simulators often receive only a single observed field at deployment\. In this setting, a field\-to\-future predictor can collapse distinct latent problem states into the same deterministic interface, losing the ambiguity needed for reliable rollout and downstream decisions\. We propose posterior\-first neural PDE simulation : first infer a posterior over the minimal task\-sufficient problem state, then condition prediction on that posterior\. The resulting theory connects the object, the learning target, and the failure mode: Bayes downstream values factor through this posterior, refinement labels make it learnable by proper scoring rules, and deterministic collapse incurs an ambiguity barrier whenever the true posterior is non\-Dirac\. Synthetic exact\-ambiguity experiments show that point\-versus\-posterior gaps track the predicted barrier\. On metadata\-hidden PDEBench tasks, posterior recovery reduces pooled rollout nRMSE from 0\.175 to 0\.132, closing 59\.4% of the direct\-to\-oracle gap\. These results suggest that single\-observation neural PDE simulation should be posterior\-first rather than monolithic field\-to\-future prediction\.

## Distillation of Foundation Models for Time\-dependent PDEs

**Authors:** Daniel Musekamp; Boshra Ariguib; Andrei Manolache; Mathias Niepert

**ID:** 155669 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3sM5zMNFJn>) | [PDF](<https://openreview.net/pdf?id=3sM5zMNFJn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155669>)

Foundation models for time\-dependent partial differential equations \(PDEs\) are trained on large and diverse collections of physical systems and can generalize effectively to new downstream tasks\. After fine\-tuning on only a few trajectories from a target domain, they often achieve strong accuracy in low\-data regimes\. However, these models are typically large and computationally intensive, limiting their usefulness as fast surrogates for numerical solvers\. We propose Teacher Rollout Extension \(TREX\), a knowledge distillation framework that transfers the predictive capability of a pretrained foundation model into a compact and efficient student\. Starting from a fine\-tuned teacher, TREX augments limited downstream data by generating long synthetic trajectories through teacher rollouts with periodic noise injection\. This procedure samples from the teacher\-induced rollout distribution without requiring explicit knowledge of the initial\-condition distribution, while exposing the student to long\-horizon states and local recovery behavior around states encountered during autoregressive prediction\. The student can further incorporate task\-specific inductive biases, such as equivariance, that the teacher does not necessarily enforce\. We evaluate TREX on multiple PDE benchmarks\. The resulting students match or even surpass the teacher’s accuracy while reducing the number of parameters by several orders of magnitude and achieving more than an order\-of\-magnitude speedup in inference\.

## Geometry Meets Physics: Data\-Efficient Pre\-Training for Unstructured Neural PDE Solvers

**Authors:** Luis Medrano\-Navarro; Giacomo Baldan; Qiang Liu; Benjamin Holzschuh; Jan Hagnberger; Mathias Niepert; Nils Thuerey

**ID:** 150238 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jidnQA2TIz>) | [PDF](<https://openreview.net/pdf?id=jidnQA2TIz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150238>)

Neural surrogate models for Partial Differential Equations \(PDEs\) on unstructured 3D geometries are often limited by poor generalization and the high cost of generating large\-scale training datasets\. Consequently, pre\-training has emerged as a critical alternative to enhance the robustness and scalability of these models\. In this work, we introduce a pre\-training framework tailored to both steady\-state and transient regimes\. For steady\-state problems, we propose a geometry\-driven strategy that leverages intrinsic shape descriptors to learn representations of complex 3D domains\. For transient problems, we introduce a physics\-driven approach based on online generation of synthetic PDE data, enabling scalable pre\-training without reliance on expensive datasets\. This framework learns transferable features for challenging downstream tasks\. Across multiple experiments, our approach achieves up to 3$\\times$ faster convergence, 2$\\times$ greater data efficiency, and up to 25\\% higher accuracy during fine\-tuning, particularly under realistic low\-data regimes\. This methodology provides a practical pathway toward data\-efficient neural emulators for large\-scale simulations\.

## FluxFlow: Conservative Flow\-Matching for Astronomical Image Super\-Resolution

**Authors:** Shuhong Liu; Xining Ge; quanfeng xu; Ziteng Cui; Liuzhuozheng Li; Gengjia Chang; Jun Liu; Ziying Gu; Dong Li; Xuangeng Chu; Lin Gu; Tatsuya Harada

**ID:** 151841 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XXHb14gdk6>) | [PDF](<https://openreview.net/pdf?id=XXHb14gdk6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151841>)

Ground\-to\-space astronomical super\-resolution requires recovering space\-quality images from ground\-based observations that are simultaneously limited by pixel sampling resolution and atmospheric seeing, which imposes a stochastic, spatially varying PSF that cannot be resolved through upsampling alone\. Existing methods rely on synthetic training pairs that fail to capture real atmospheric statistics and are prone to either over\-smoothed reconstructions or hallucination sources with no physical counterpart in the observed sky\. We propose FluxFlow, a conservative pixel\-space flow\-matching framework that incorporates observation uncertainty and source\-region importance weights during training, and a training\-free Wiener\-regularised test\-time correction to suppress hallucination sources while preserving recovered detail\. We further construct the DESI\-\-HST Dataset, the large\-scale real\-world benchmark comprising 19,500 real co\-registered ground\-to\-space image pairs with real atmospheric PSF variation\. Experiments demonstrate that FluxFlow consistently outperforms existing baseline methods in both photometric and scientific accuracy\.

## Neural Operator\-based Curriculum Learning for Physics\-Informed Neural Networks

**Authors:** Lingshi MENG; Haosen Shi; Sinno Pan

**ID:** 151141 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ciNWXOXC8v>) | [PDF](<https://openreview.net/pdf?id=ciNWXOXC8v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151141>)

In this paper, we tackle the critical failure modes of Physics\-Informed Neural Networks \(PINNs\), such as spectral bias, which lead to poor convergence on complex PDEs\. We identify two key shortcomings in existing curriculum learning methods for PINNs: unreliable knowledge transfer between stages and a reliance on manual, ad\-hoc curriculum design\. To overcome these limitations, we present Neural Operator\-based Curriculum Learning \(NOCL\), a unified framework that leverages Neural Tangent Kernel \(NTK\) theory to automate curriculum generation and employs neural operators to enable robust, dynamic knowledge transfer across curriculum stages\. By dynamically training neural operators and filtering data for PINN initialization, our approach ensures scalable and effective learning across progressively difficult tasks\. Experiments verify that NOCL leads to marked gains in convergence and generalization relative to prior methods, resulting in substantially better performance on test suite\.

## Generalization Error Bounds for Picard\-Type Operator Learning in Nonlinear Parabolic PDEs

**Authors:** Koichi Taniguchi; Sho Sonoda

**ID:** 152148 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VB04LSNGnh>) | [PDF](<https://openreview.net/pdf?id=VB04LSNGnh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152148>)

Operator learning for partial differential equations \(PDEs\) aims to learn solution operators on infinite\-dimensional function spaces from finite\-resolution data\. In this setting, it is important for the learned model to be discretization\-invariant, or resolution\-robust, and to reflect PDE\-specific structure\. It is therefore natural to ask how such structure should be encoded in the model architecture, hypothesis class, or learning procedure\. In this paper, we study operator learning for solution operators of nonlinear parabolic PDEs based on Duhamel\-\-Picard iteration\. We formulate Picard iteration as an abstract state\-transition model and present a theoretical framework for Picard\-type operator learning\. We derive implementation\-agnostic generalization error bounds that separate the implementation error from the estimation error associated with the abstract state\-transition model induced by Picard iteration\. A key consequence is that increasing the Picard depth reduces the Picard truncation error without causing an unbounded growth of the entropy\-based estimation error\. We also extend the analysis to long\-time prediction by rolling out the same learned local model over successive time blocks\. Finally, we illustrate the theory for nonlinear heat equations on the torus using a Picard\-type Fourier neural operator as a concrete implementation\.

## Winning Lottery Tickets in Neural Networks via a Quantum\-Inspired Classical Algorithm

**Authors:** Natsuto Isogai; Hayata Yamasaki; Sho Sonoda; Mio Murao

**ID:** 149134 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sb383QXZhs>) | [PDF](<https://openreview.net/pdf?id=sb383QXZhs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149134>)

Quantum machine learning \(QML\) aims to accelerate machine learning tasks by exploiting quantum computation\. Previous work studied a QML algorithm for selecting sparse subnetworks from large shallow neural networks\. Instead of directly solving an optimization problem over a large\-scale network, this algorithm constructs a sparse subnetwork by sampling hidden nodes from an optimized probability distribution defined using the ridgelet transform\. The quantum algorithm performs this sampling in time $O\(D\)$ in the data dimension $D$, whereas a naive classical implementation relies on handling exponentially many candidate nodes and hence takes $\\exp\[O\(D\)\]$ time\. In this work, we construct and analyze a quantum\-inspired fully classical algorithm for the same sampling task\. We show that our algorithm runs in time $O\(\\operatorname\{poly\}\(D\)\)$, thereby removing the exponential dependence on $D$ from the previous classical approach\. Numerical simulations show that the proposed sampler achieves empirical risk comparable to exact sampling from the optimized distribution and substantially lower than sampling from the non\-optimized uniform distribution, while also exhibiting exponentially improved runtime scaling compared with the conventional classical implementation\. These successful dequantization results show that sparse subnetwork selection via optimized sampling can be achieved classically with polynomial data\-dimension scaling on conventional computers without quantum hardware, providing an alternative to the existing quantum algorithm\.

## ADA: Resolving Attribution Ambiguity in End\-to\-End Power System Dispatch via Two\-Time\-Scale Stochastic Approximation

**Authors:** mengqi Han; Bo Yang; Qi Liu; Mengshuo Jia; Chen Gong; Liu Yuxiang; Sicheng Liu; Mingxuan Cai

**ID:** 155823 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2bynWlZtFd>) | [PDF](<https://openreview.net/pdf?id=2bynWlZtFd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155823>)

Large Language Models \(LLMs\) present a novel paradigm for power system dispatch \(PSD\), enabling operators to derive optimal dispatch strategies from multi\-objective requirements and grid dynamics\. However, isolated paradigms focusing on modeling or solving often yield decision bias or physical infeasibility\. Meanwhile, end\-to\-end paradigms couple modeling\-solving with reflection\-feedback loops, obscuring whether failures stem from inaccurate modeling, invalid solutions, or insufficient feedback, thereby causing ineffective iterations\. To address these challenges, we propose Agile Dispatch Agent \(ADA\), an agent based on two\-time\-scale evolution that decouples the optimization process into two asynchronous loops\. On the fast time scale, the Planner actively acquires information to clarify complex requirements, while the Solver selects algorithms to adapt to the problem mathematical characteristics\. On the slow time scale, the Summarizer module updates the modeling feasible region based on evaluations from the Judger\. Under a finite\-horizon Planner and standard two\-time\-scale stochastic approximation assumptions, our analysis provides local tracking guarantees for the fast decision process and the slow knowledge evolution\. Experiments on L2RPN benchmarks with ambiguous requirements and renewable dynamics show that ADA outperforms state\-of\-the\-art baselines\.

## QEC Model Zoo: Democratizing AI\-enhanced Quantum Error Correction

**Authors:** Yuandou Wang; Maxim de Groot; Aadi Patwardhan; Floris Geerts; Rihan Hai

**ID:** 139803 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3hB3hPXBgx>) | [PDF](<https://openreview.net/pdf?id=3hB3hPXBgx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139803>)

Quantum error correction \(QEC\) is essential for scalable quantum computing\. AI\-enhanced QEC is gaining increasing attention, with learned full decoders and pre\-decoders being explored across code families\. However, progress is difficult to assess: existing studies use different datasets, input representations, decoder roles, preprocessing pipelines, and evaluation protocols, making it unclear whether a reported gain comes from the model, the data interface, or the benchmark setup\. We present the QEC model zoo, a data\-centric benchmark and model\-zoo framework for AI\-enhanced QEC\. The QEC model zoo curates real and simulated datasets for repetition\- and surface\-code decoding, supports both full decoders and pre\-decoders, and records the metadata needed for reproducible comparison\. The framework provides common task definitions, model\-ready processing pipelines, and evaluation interfaces for heterogeneous QEC data\. It further enables systematic comparison across neural, tree\-based, and modern tabular models\. Our goal is not to advocate a single decoder architecture, but to make AI\-enhanced QEC easier to compare, reproduce, and extend\.

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

## AnyBokeh: Physics\-Guided Any\-to\-Any Bokeh Editing with Optical Fingerprint Transfer

**Authors:** Xinyu Hou; Xiaoming Li; Zongsheng Yue; Chen Change Loy

**ID:** 153372 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LrBZHLRicR>) | [PDF](<https://openreview.net/pdf?id=LrBZHLRicR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153372>)

Depth\-of\-field control is a fundamental tool in photography, yet post\-capture bokeh editing from a single image remains challenging\. A practical editor should handle images captured under arbitrary focus and aperture settings\. Existing methods typically assume an all\-in\-focus input, or first recover an all\-in\-focus image before rendering new bokeh\. Such pipelines can discard useful blur cues from the source image and propagate reconstruction artifacts into the final edit\. We introduce AnyBokeh , a physics\-guided framework for any\-to\-any bokeh editing \. Instead of treating source blur merely as a degradation to be removed, AnyBokeh estimates the source blur state with a signed circle\-of\-confusion map and a disparity map\. By modeling the linear relation between signed circle of confusion and disparity difference, AnyBokeh estimates a source\-specific optical fingerprint and transfers the source optical characteristics to the desired focus and aperture setting\. A generative editor conditioned on both source and target circle\-of\-confusion maps then performs relative blur synthesis, enabling spatially adaptive deblurring, preservation, and defocus rendering\. To support physically supervised learning, we further construct a high\-fidelity synthetic dataset with accurate depth, focus distance, and full EXIF metadata\. Experiments on real\-world benchmarks show that AnyBokeh achieves faithful and controllable editing across any\-to\-any bokeh editing, all\-in\-focus\-to\-bokeh rendering, and defocus deblurring, while avoiding all\-in\-focus reconstruction and test\-time bokeh\-level calibration commonly required by existing approaches\. The code and dataset will be made publicly available\.

## Reinforcement Learning with Verifiable Physics: Post\-training LLMs for PDE Solver Generation

**Authors:** Pengfei Cai; Utkarsh Utkarsh; Alan Edelman; Christopher Rackauckas; Rafael Gomez\-Bombarelli

**ID:** 151548 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZopflnQLAZ>) | [PDF](<https://openreview.net/pdf?id=ZopflnQLAZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151548>)

Partial differential equations \(PDEs\) are foundational to modeling in science and engineering, but constructing reliable numerical solvers remains labor\-intensive, demanding expert knowledge of discretization schemes, stability conditions, and boundary treatments\. Recent work has begun to frame PDE solving as a code\-generation task for large language models \(LLMs\), yet existing approaches operate primarily at inference time: relying on prompting, debugging, self\-refinement, and test\-time scaling rather than adapting the model itself\. In parallel, reinforcement learning with verifiable rewards has emerged as a powerful post\-training paradigm for code and math reasoning, but its verifiers are typically binary: a compiler runs, or a test passes\. Such signals discard the graded structure of scientific correctness, where two solvers may both execute and yet differ in solution accuracy by orders of magnitude\. In this work, we introduce RLVP: Reinforcement Learning with Verifiable Physics, an RL post\-training framework for multi\-PDE solver code generation\.RLVP addresses this verifiability gap with a hybrid verifier: hard program\-validity checks ensure executability, while continuous physics rewards score function\-space accuracy and PDE\-residual consistency\. A single policy is post\-trained across diverse PDE families spanning hyperbolic, parabolic, elliptic, and incompressible\-flow systems\. RLVP improves over both pre\-trained and supervised\-only baselines on PDE benchmarks, and shows zero\-shot improvement transfer to held\-out PDEs\. We show that a smaller LLM post\-trained with RLVP can outperform prompting a frontier model on in\-distribution PDE solver generation\. The trained policy shows evidence of compositionality in numerical motifs: it recombines stencils, time\-stepping schemes, and boundary\-handling primitives learned from the PDEs used in training into generated solvers for unseen PDE problems\.

## PINNBench: A Benchmark and Evaluation Study of Training Policy Selection in Hybrid PINN\-Operator Solvers

**Authors:** Suan Lee; Namhyeon Kim; Dongmin Jin

**ID:** 138968 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tV0S5T2Cz8>) | [PDF](<https://openreview.net/pdf?id=tV0S5T2Cz8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138968>)

We introduce PINNBench, a benchmark and evaluation study for training\-policy selection in hybrid PINN\-operator PDE solvers, contributed to the NeurIPS 2026 Evaluations and Datasets \(ED\) Track\. PINNBench comprises 1,539 recorded runs and probes across 13 PDE configurations drawn from 8 equation families, 3–5 training policies per PDE, and 10 seeds per condition, with seven standardized metrics, Wilcoxon signed\-rank tests, paired bootstrap 95% confidence intervals, Cohen's d, and Benjamini–Hochberg FDR correction\. Baseline evaluation of 5 routing methods establishes three findings that bear directly on how PDE solvers should be evaluated\. \(i\) No single policy dominates: hybrid full wins 7/13, hybrid no gate 4/13, pinn only 2/13\. \(ii\) Accuracy and regret dissociate: under relative L2, a physics\-loss heuristic and a learned Random Forest router reach identical 62% top\-1 accuracy, but the heuristic suffers mean regret 0\.0850 versus 0\.0011 — a 77x gap\. Evaluation by accuracy alone is misleading for PDE policy routing\. \(iii\) Causal\-loss effectiveness is stage\-mediated: 7/9 PDEs improve with pretraining \(\+5\.9% mean\) while 5/9 degrade without it \(\-4\.2%\)\. A new leave\-one\-PDE\-family\-out evaluation shows that the strongest family\-level generalizer uses no PDE\-identity features, addressing the concern that PDE\-aware routing memorizes PDE identity\. All 1,539 result JSONs, PDE implementations, policy configurations, statistical pipeline, and routing infrastructure are released as open\-source artifacts\.

## Physics\-Informed Functional Tucker Method with RKHS Factors for Sparse Spatiotemporal Reconstruction

**Authors:** Zhengyang Liu; Jianguo Huang; Junxi Hu; Yucheng Mi; Haojie Cai; Wenxuan Shen; zhikun zhang; Renfeng Peng; Guangtao Zhang; Zhiqiang Liu

**ID:** 152965 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P1pyUg7i5c>) | [PDF](<https://openreview.net/pdf?id=P1pyUg7i5c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152965>)

Reconstructing physical dynamics from sparse and irregular spatiotemporal observations is a fundamental challenge in scientific research\. However, sparsity leaves large regions of the field unconstrained, making the inverse problem ill\-posed: a model may fit the observed sensors while producing nonphysical off\-sensor structures or unreliable predictions between support times\. To address this challenge, we propose PhysFTM\-\-\-a physics\-informed functional Tucker method that parameterizes Tucker mode factors in reproducing kernel Hilbert space \(RKHS\) and enforces governing physical laws through finite\-difference residuals at collocation points\. These physical constraints are essential for credible reconstruction, since most query locations are never directly supervised by data\. Specifically, PhysFTM first reconstructs continuous spatial fields at observed times via an alternating minimization scheme, with separate treatments for the Tucker core tensor and the RKHS\-based factors\. To further enable continuous temporal resolution, PhysFTM constructs a continuous trajectory in Tucker\-core space, which is decoded by the learned spatial RKHS\-FTM representation to recover the full spatiotemporal field at arbitrary query times\. Experiments on Allen\-\-Cahn and Navier\-\-Stokes with varying observation ratios demonstrate that PhysFTM achieves superior reconstruction accuracy, improved physical consistency, and stronger continuous\-time modeling capability\.

## PDE\-SSM: A Spectral State Space Approach to Spatial Mixing in Diffusion Transformers

**Authors:** Eshed Gal; Moshe Eliasof; Eldad Haber

**ID:** 149720 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nunyVp7239>) | [PDF](<https://openreview.net/pdf?id=nunyVp7239>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149720>)

The success of vision transformers—especially for generative modeling—is limited by the quadratic cost and weak spatial inductive bias of self\-attention\. We propose PDE\-SSM, a spatial state\-space block that replaces attention with a learnable convection–diffusion–reaction partial differential equation\. This operator encodes a strong spatial prior by modeling information flow via physically grounded dynamics rather than all\-to\-all token interactions\. Solving the PDE in the Fourier domain yields global coupling with near\-linear complexity, delivering a principled and scalable alternative to attention\. We integrate PDE\-SSM into a flow\-matching generative model to obtain the PDE\-based Diffusion Transformer PDE\-SSM\-DiT\. Empirically, PDE\-SSM\-DiT matches or exceeds the performance of state\-of\-the\-art Diffusion Transformers while substantially reducing compute\. Our results show that, analogous to 1D settings where SSMs supplant attention, multi\-dimensional PDE operators provide an efficient, inductive\-bias\-rich foundation for next\-generation vision models\.

## Stable Long\-Horizon PDE Forecasting via Latent Structured Spectral Propagators

**Authors:** Xiaoxiao Lu; Ye Yuan; Jiahao Shi

**ID:** 154652 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C20RzfkyzY>) | [PDF](<https://openreview.net/pdf?id=C20RzfkyzY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154652>)

Long\-horizon forecasting of time\-dependent partial differential equations \(PDEs\) is critical for characterizing the sustained evolution of physical systems\. While neural operators have emerged as efficient surrogates, they typically learn implicit finite\-time transitions from discrete observations\. When deployed autoregressively, such propagators often suffer from rapid error accumulation and dynamic drift\. To address this, we propose a neural forecasting framework that reformulates PDE rollout as learning a Structured Spectral Propagator \(SSP\) in a propagation\-oriented latent space\. Following an analysis\-propagation\-synthesis design, our framework: \(i\) maps physical states into a shared, time\-consistent spatial representation; \(ii\) projects this space into a compact propagation state to isolate recurrent dynamics from fine\-grained spatial details, thereby decoupling reconstruction fidelity from rollout regularity; and \(iii\) evolves retained spectral modes using a frequency\-conditioned linear backbone complemented by a nonlinear spectral closure to account for truncated interactions\. This explicit structuring endows the propagator with a strong inductive bias for coherent modal evolution\. Extensive experiments demonstrate that SSP significantly outperforms state\-of\-the\-art baselines, reducing relative $L\_2$ errors by up to 48\.9\\% and exhibiting improved stability in temporal extrapolation beyond the supervised horizon\.

## PhysDNet: Physics\-Driven Gradient Amplification for Real\-Time Image Dehazing

**Authors:** Rayen Dhahri; Lei Sun; Victor J Morinigo; Alice Pagnoux; Luca Benini; Danda Pani Paudel; Luc V Gool

**ID:** 152574 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=S57Q0ZigdC>) | [PDF](<https://openreview.net/pdf?id=S57Q0ZigdC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152574>)

Modern dehazing networks are often computationally expensive and overfit to synthetic haze, limiting real\-time deployment\. This underscores an urgent demand for efficient, high\-fidelity restoration methods that can operate on resource\-constrained edge devices in practical, dynamic environments\. We introduce PhysDNet, a lightweight multimodal architecture that fuses NIR imagery with sparse LiDAR depth and is trained with a physics\-constrained dual\-head objective\. Differentiating through a fixed Koschmieder inversion induces density\-adaptive gradient amplification, acting as an implicit resource allocation mechanism that concentrates learning on heavily degraded regions without increasing inference cost\. PhysDNet delivers superior restoration with minimal capacity and enhanced training efficiency, facilitating real\-time deployment on edge devices without increasing inference overhead\. On the Seeing Through Fog benchmark, PhysDNet outperforms competitors by 1\.67 dB at 5\.2x lower compute and recovering 54\.9% of fog\-induced detection loss\. Ablations and cross\-domain evaluations show that physics\-guided training improves generalization including under non\-homogeneous haze that violates the Koschmieder assumption\. PhysDNet further demonstrates compatibility with fixed\-function NPUs, running at 29/45/99 FPS at &lt;4W across L/M/S variants\. Code and pre\-trained models will be made publicly available\.

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

## Neural Preconditioned Born Series: A Metric\-Matched Framework for Learning\-based Preconditioners

**Authors:** Juntao Wang; Jiwei Jia; Xinliang Liu

**ID:** 154120 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=G7pWWaC6g5>) | [PDF](<https://openreview.net/pdf?id=G7pWWaC6g5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154120>)

High\-frequency Helmholtz problems in heterogeneous media remain challenging for both classical iterative methods and end\-to\-end neural PDE solvers\. We propose Neural Preconditioned Born Series \(NPBS\), a learned iterative preconditioning framework that operates in preconditioned residual coordinates induced by the Convergent Born Series \(CBS\)\. Existing learned Born\-series methods primarily use Born\-style unrolling for forward wavefield prediction, while learned Helmholtz preconditioners are usually formulated in physical residual coordinates\. NPBS fills this gap by recasting Born\-series iteration as shifted\-Laplacian left preconditioning, and replacing the CBS preconditioner with a learned residual\-to\-correction map in the Born\-preconditioned coordinates\. The left preconditioner further induces a residual metric, which yields a metric\-matched training objective that aligns optimization with the preconditioned geometry used at inference\. On heterogeneous Helmholtz benchmarks, metric\-matched NPBS reduces iteration counts by up to $1\.9\\times$ over direct residual learning, with gains increasing from $1\.2\\times$ to $1\.9\\times$ as the wavenumber rises\. Compared to classical CBS, learned NPBS reduces stationary iteration counts by over $20\\times$; when used as a preconditioner for FGMRES, it further achieves the lowest wall\-clock time among all evaluated methods\. The same metric\-matched formulation also improves convergence on convection\-\-diffusion\-\-reaction systems and Newton linear systems for nonlinear PDEs, indicating that residual\-metric matching is a general design principle for neural preconditioners\.

## The Spectral Amplitude Principle for Dynamics of Quantum Neural Networks

**Authors:** Yihang Xu; Dan\-Bo Zhang; Junchi Yan

**ID:** 154528 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CwChCteU9h>) | [PDF](<https://openreview.net/pdf?id=CwChCteU9h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154528>)

The mechanism governing the training dynamics of Quantum Neural Networks \(QNNs\) remains under\-explored\. In classical Deep Neural Networks \(DNNs\), training is known dominated by "Spectral Bias,'' i\.e\. prioritizing learning low\-frequency while struggling with high\-frequency\. QNNs exhibit similar spectral limitations when the target function possesses flat spectral amplitudes\. However, in this work, considering target problems with different spectral amplitudes, we theoretically and empirically identify a distinct mechanism in QNNs, which we term \*Spectral Amplitude Priority\*\. By analyzing the frequency\-domain gradients and residual dynamics via the Quantum Neural Tangent Kernel \(QNTK\), we prove that QNN training is governed primarily by the magnitude of spectral components rather than their frequency indices\. Consequently, QNNs can efficiently capture high\-frequency functions—provided they have significant amplitude—thereby overcoming the inherent limitations of their classical counterparts\. We validate this principle on both synthetic high\-frequency functions and quantum\-advantage tasks\. These results show that QNNs notably outperform DNNs in high\-frequency tasks, offering an explanation for QNNs' superior expressivity\.

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

## Geometry\-Aware Post\-Hoc Uncertainty Quantification in Operator Learning

**Authors:** Oriol Vendrell\-Gallart; Nima Negarandeh; Ramin Bostanabad

**ID:** 153317 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MCqeT1uJm2>) | [PDF](<https://openreview.net/pdf?id=MCqeT1uJm2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153317>)

Neural operators provide fast surrogates for PDEs but their deterministic predictions limit their use in tasks requiring uncertainty quantification \(UQ\), especially under geometric variability\. Existing approaches primarily model uncertainty in network parameters, largely overlooking the geometry\-aware representations learned by the operator itself\. We propose REEF\-GP \(Residual on Embedded Features Gaussian Process\), a post\-hoc UQ framework that fits a GP to the residuals of a frozen neural operator whose internal embeddings define the kernel feature space\. Rather than learning a separate feature map, REEF\-GP adapts the operator’s intrinsic coordinate\-feature representations to construct geometry\-aware uncertainties\. To ensure stability and scalability on unstructured domains, REEF\-GP incorporates spectral\-normalized projections, heteroscedastic geometry\-aware noise, and efficient subset\-based training that avoids restrictive low\-rank approximations\. Across five PDE benchmarks with varying geometries, REEF\-GP preserves predictive accuracy while achieving calibrated uncertainty estimates competitive with deep ensembles but at a fraction of their cost\. Our approach remains robust under geometric distribution shift, with uncertainty concentrating in physically meaningful regions \(e\.g\., shock fronts\)\. Our results demonstrate that accurate and scalable post\-hoc UQ for neural operators can be achieved directly in their learned feature space, offering a practical alternative to parameter\-centric approaches\.

## Sparsely\-Supervised Data Assimilation via Physics\-Informed Schrödinger Bridge

**Authors:** Dohyun Bu; Chanho Kim; Seokun Choi; Jong\-Seok Lee

**ID:** 155316 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6WETopIg2t>) | [PDF](<https://openreview.net/pdf?id=6WETopIg2t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155316>)

Data assimilation \(DA\) for systems governed by partial differential equations \(PDE\) aims to reconstruct full spatiotemporal fields from sparse high\-fidelity \(HF\) observations while respecting physical constraints\. While full\-grid low\-fidelity \(LF\) simulations provide informative priors in multi\-fidelity settings, recovering an HF field consistent with both sparse observations and the governing PDE typically requires per\-instance test\-time optimization, which becomes a major bottleneck in time\-critical applications\. To alleviate this, amortized reconstruction using generative models has recently been proposed; however, such approaches rely on full\-field HF supervision during training, which is often impractical in real\-world settings\. From a more realistic perspective, we propose the \*Physics\-Informed Conditional Schrödinger Bridge\* \(\*\*PICSB\*\*\), which transports an informative LF prior toward an auxiliary\-energy\-defined, observation\-conditioned HF endpoint law without any additional inference\-time guidance\. To enable learning without HF endpoints, \*\*PICSB\*\* employs an iterative surrogate\-endpoint refresh scheme, and directly incorporates PDE residuals into the training objective while enforcing observations via hard conditioning throughout sampling\. Experiments on fluid PDE benchmarks demonstrate that \*\*PICSB\*\* enables extremely fast spatiotemporal field reconstruction while achieving strong accuracy under sparse HF supervision\.

## MANGO:Multi\-Angle Neural Gated Operators for Chirp\-Perturbed PDEs

**Authors:** Yunlong Zhu; Zunwei Fu; Zheng Wang; EUN\-HU KIM

**ID:** 154828 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AdtcktHOaD>) | [PDF](<https://openreview.net/pdf?id=AdtcktHOaD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154828>)

We introduce \*\*MANGO\*\* \(Multi\-Angle Neural Gated Operator\), a spectral neural operator for chirp\-perturbed PDEs whose solutions exhibit a local spectral content that rotates continuously with position\. MANGO maintains multiple fractional Fourier transform \(FRFT\) branches whose angles are learnable parameters, optimized jointly with the spectral weights and a position\-dependent softmax gate that combines branches at every spatial location\. The architecture is matched to the structure of the problem class: the FRFT at angle $\\alpha\_0$ diagonalizes the chirp\-perturbed PDE whose intrinsic angle is $\\alpha\_0$, and MANGO's learnable angles let the architecture discover $\\alpha\_0$ from data when it is unknown or varies across the domain—neither of which classical FRFT methods accommodate\. We further introduce a Mihlin–Hörmander regularizer on the spectral weights of each non\-Fourier branch, encouraging each branch to act as a bounded operator on $L^p$ for $1 &lt; p &lt; \\infty$\. We construct four chirp\-perturbed PDE benchmarks with closed\-form ground truth, positioned as identifiability tests\. On these benchmarks, MANGO recovers the intrinsic spectral structure of each PDE from supervised solution data alone and achieves state\-of\-the\-art performance against six neural\-operator baselines\.

## Structural Blindness in Latent Data Assimilation: Representation Geometry Misleads Sensor Design

**Authors:** Yongquan Qu; Pierre Gentine

**ID:** 152860 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Pr0dB2FD5u>) | [PDF](<https://openreview.net/pdf?id=Pr0dB2FD5u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152860>)

A learned latent space supports reliable scientific decisions only if decisions made in that space remain valid in the original physical variables\. We study latent Kalman\-type data assimilation, where an encoder\-\-decoder pair is trained without knowledge of the sensor used to collect observations\. Can representation\-level diagnostics predict which sensors give accurate physical\-state filtering? In general, no\. We show that any such diagnostic \(a smooth functional of the averaged decoder Fisher matrix, including optimal\-design criteria, posterior Cram\\'er\-\-Rao surrogates, and effective\-observability scores\) sees the sensor only through a \\emph\{Fisher\-\-Gram coarsening\} of the physical sensor Gramian, leaving a large blind spot\. The failure is unconditional, an algebraic consequence of averaging the decoder Jacobian over the latent invariant measure\. The positive side is conditional: when the proportionality between physical and latent filtering error is stable across sensors, latent filtering error ranks sensors accurately, with an explicit Pearson bound\. Decoder smoothness provides one route to this stability, and a linear\-Gaussian Riccati surrogate \(built entirely from the trained latent model and decoder\) empirically tracks the same ranking when full\-state truth is unavailable\. Experiments on five chaotic systems support both sides\. Representation geometry is useful but structurally limited, and reliable sensor ranking in latent data assimilation requires filter\-aware validation rather than decoder\-diagnostic scoring\.

## PIU\-CR: Physics\-Informed Deep Unfolding Network with SAR\-Optical Image Fusion for Cloud Removal

**Authors:** Gengque Fan; Han Xu; Junxi Li; Hao Zhang; Guangcan Liu; Jiayi Ma

**ID:** 148379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yLF8wQre6o>) | [PDF](<https://openreview.net/pdf?id=yLF8wQre6o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148379>)

Multi\-modal cloud removal exploits complementary optical and synthetic aperture radar \(SAR\) images to restore cloud\-degraded remote sensing images\. Most existing methods rely on black\-box, data\-driven architectures with limited interpretability of cross\-modal interactions\. Although some attempts introduce physical priors into networks, their oversimplified formulations fail to faithfully characterize the underlying physical imaging process and the networks remain loosely coupled with optimization variables\. To address these issues, we propose a physics\-informed deep unfolding network for cloud removal via optical\-SAR image fusion, termed as PIU\-CR\. We first formulate cloud removal as a physics\-informed optimization problem\. Specifically, we fundamentally ground the optimization in the physical imaging mechanism of cloud degradation by embedding the atmospheric scattering model into data fidelity term\. Then, the regularization terms establish an explicit cross\-modal interaction mechanism, overcoming the single\-modal information scarcity and the obscure, uninterpretable interactions in black\-box models\. They are dedicated to SAR\-guided structure and spectral regularization, jointly introducing cross\-modal structural feature alignment and coordinated spectral consistency constraints\. The resulting optimization problem is then unfolded into a multi\-stage neural network with dedicated structure and spectral branches\. Each stage corresponds to explict optimization iteration step, enabling interpretable and effective reconstruction process\. Experiments demonstrate that the proposed method outperforms state\-of\-the\-art methods\.

## LDD\-RFM: Learnable Domain Decomposition for Random Feature Models via Variable Projection

**Authors:** Zhaohui Fu; Duanyu Feng; Yangshuai Wang

**ID:** 152971 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OzYGQoPGki>) | [PDF](<https://openreview.net/pdf?id=OzYGQoPGki>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152971>)

Random Feature Models \(RFMs\) are attractive PDE surrogates because their linear\-in\-features form reduces training to regularized least squares\. Standard RFMs, however, use one stationary spectrum over the whole domain, creating a bandwidth dilemma on heterogeneous PDE solutions: fine scales resolve sharp local gradients but oscillate in smooth regions, while coarse scales miss interface\-dominated derivatives\. We propose \\textbf\{LDD\-RFM\}, a learnable domain\-decomposition framework whose local experts remain linear RFMs and whose nonlinear variables specify compact\-support partition\-of\-unity \(PoU\) gates and local spectral scales\. For fixed gates and spectra, expert coefficients are eliminated by ridge regression through variable projection, yielding a differentiable reduced objective with explicit linear\-solve and partition\-smoothness controls\. We prove an $H^1$ error decomposition in which PoU sharpness enters through a product\-rule term\. Controlled regression and PDE experiments show that LDD\-RFM reduces $H^1$ errors by $10\\times$ over global and fixed\-partition RFM baselines under matched feature budgets; exact\-solver, timing, and robustness studies check that these gains are not artifacts of the linear solver or evaluation protocol\.

## Learned Lagrangian Models of PDEs via Euler–Lagrange Residual Minimization

**Authors:** Lyra Zhornyak; Eric Forgoston; M\. Ani Hsieh

**ID:** 151132 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=clkBSNjrrR>) | [PDF](<https://openreview.net/pdf?id=clkBSNjrrR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151132>)

We present the first method to directly use a learned continuous Lagrangian to forecast the dynamics of systems governed by partial differential equations, exploiting the inherent conservative structure to achieve stable long\-range predictions\. We develop an optimization\-based integrator that minimizes the squared Euler\-\-Lagrange residual via a mesh\-free near\-symplectic construction on local space\-time patches\. Different from integrators for analytical models, integrators for learned models should decouple model error \(phase error\) from integration error \(conservation error\)\. By relying on optimization rather than time\-stepping, we bypass the global coupling inherent to fixed discretizations, which slows time\- and space\-stepping and complicates learning\. Our method scales linearly with domain size via Jacobi iteration, and places no structural requirements on the learned network, allowing it to be coupled with existing physics\-guided machine learning \(ML\) methods\. We validate our approach on a learned representation of a double pendulum, a one\-dimensional wave equation, and a two\-dimensional wave equation\. Our method achieves error comparable to classical symplectic methods while generalizing to spatially varying dynamics and arbitrary boundary conditions without retraining\.

## Mesh\-Free Convolution: Learned Spectral Attenuation and Transport

**Authors:** Niloufar Zakariaei; Manav Manav; Eldad Haber

**ID:** 152800 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHAqPAgG8a>) | [PDF](<https://openreview.net/pdf?id=QHAqPAgG8a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152800>)

Learning solution operators for partial differential equations \(PDEs\) requires models that can represent spatial structure across grids and scales\. This becomes especially important in time\-dependent problems, where the learned operator is often used autoregressively: each predicted state is fed back as input to predict future states\. In this setting, small spatial errors can be repeatedly propagated through the learned dynamics, leading to instability and drift, vitiating long\-term solution fidelity\.  We propose Mesh\-Free Convolutions \(MFCs\), filters defined in continuous space and discretized only at evaluation time\. This allows the same learned filters to be applied across resolutions\. Rather than imposing a grid\-dependent stencil or a fixed spectral cutoff, MFCs learn smooth scale\-dependent filtering and include directional terms for transport\-like behavior\.  Across fluid\-dynamics and weather\-forecasting benchmarks, MFC\-based models produce stable long\-horizon rollouts, transfer reliably across resolutions, and better preserve long\-time statistics\. These results suggest that continuous, mesh\-free filtering is a useful inductive bias for PDE operator learning, especially in autoregressive prediction\.

## Exactness Matters for Physical Rule Enforcement

**Authors:** Bum Jun Kim

**ID:** 152917 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PR7Uan6tks>) | [PDF](<https://openreview.net/pdf?id=PR7Uan6tks>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152917>)

Autoregressive scientific forecasters often enforce physical or structural constraints by repairing each predicted state before feeding it back into the model\. However, it remains unclear when stronger physical rule enforcement becomes reliable and when it becomes a source of distribution shift\. We study this question through operator exactness, meaning whether the repair map is the identity on the target manifold and is aligned with the target geometry\. We compare raw forecasting, post hoc repair, and in\-loop repair across periodic incompressible Navier\-\-Stokes, non\-periodic CFDBench flows, and a hierarchical\-forecasting support task\. In the exact periodic regime, Fourier projection substantially improves rollout accuracy\. On the NS\-128 benchmark, a strong Raw\-FNO has a final\-step rollout MSE at horizon 100 of $\(9\.390 \\pm 6\.290\)\\times 10^\{\-5\}$, and post hoc and in\-loop projection reduce it to $\(1\.130 \\pm 0\.165\)\\times 10^\{\-6\}$ and $\(5\.370 \\pm 0\.113\)\\times 10^\{\-7\}$\. However, once an exact projection is unavailable and only approximate boundary\-preserving cleanup is available, the ordering changes\. Across cavity, tube, dam, and cylinder flow, stronger Poisson\-based cleanup can reduce divergence while worsening rollout error; target\-distortion MSE predicts this harm far better than a linear\-system residual\. Controlled mismatch, screened cleanup, adaptive gating, and external\-backbone checks show that the best approximate\-regime operating point can be raw or near\-identity\. Hierarchical forecasting gives the same broader pattern\. Exact forecast reconciliation is a stable baseline, whereas blended top\-down repair, a validation\-tuned interpolation toward historical\-proportion top\-down reconciliation, is dataset\-dependent\. Thus, constraint enforcement should be benchmarked by operator\-\-data alignment before enforcement strength\. Use in\-loop projection when the operator is exact, and validate approximate cleanup strength using rollout metrics otherwise\.

## Per\-Loss Adapters for Gradient Conflict in Physics\-Informed Neural Networks

**Authors:** Bum Jun Kim; Gnankan Landry Regis N&amp;amp;\#x27;guessan

**ID:** 150682 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gI9SOvgxbz>) | [PDF](<https://openreview.net/pdf?id=gI9SOvgxbz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150682>)

Physics\-informed neural networks \(PINNs\) train a single neural approximation by minimizing multiple physics\- and data\-derived losses, but the gradients of these losses often interfere and can stall optimization\. Existing remedies typically treat this pathology either through scalar loss balancing or full\-parameter\-space gradient surgery, leaving it unclear which intervention is most appropriate\. We show that PINN gradient conflict is not a uniform failure mode with one universal remedy\. Instead, we identify distinct PINN gradient\-conflict regimes, each associated with a different intervention class\. Persistent directional conflict may require separate loss\-indexed parameter subspaces, magnitude imbalance often favors scalar reweighting, and low or transient conflict may require no extra mitigation\. To select between scalar reweighting and a lightweight architectural intervention, we propose a diagnostic\-first framework\. It profiles a 1000\-step unmodified PINN run and, when intervention is warranted, uses one low\-rank adapter per loss to create explicit loss\-indexed parameter subspaces attached to a shared PINN trunk, providing each loss with a direct gradient pathway\. Across more than 60 PDE configurations, including forward, inverse, multi\-physics, parameter\-varying, and high\-dimensional problems up to 50D, persistent directional conflict dominates standard forward $K=3$ benchmarks and a natural $K=4$ thermoelastic system, where adapters combined with reweighting yield significant improvements\. In contrast, $K=3$ inverse problems and natural $K=5$ and $K=6$ multi\-physics systems are largely magnitude\-dominated and often favor reweighting alone, while full\-parameter\-space gradient surgery can fail on heterogeneous parameter spaces\. A regime\-transition theorem and a blockwise neural tangent kernel analysis explain why gains from these separate adapter parameter subspaces arise selectively in persistent\-conflict regimes\.

## Physics\-Constrained Generative World Model for Off\-Road Terrain via Post\-hoc Projection

**Authors:** Yuan Zhou; Hao Yu; Ruiran Cao; Haoran Yang; Xuanyu Zhu; Yusong Yan; Cong Wang; Minne Li

**ID:** 150035 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lG1tx6cbVl>) | [PDF](<https://openreview.net/pdf?id=lG1tx6cbVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150035>)

Generative models for physically grounded terrain face a persistent tradeoff: training\-time physics losses distort the learned distribution, while unconstrained generators routinely produce physically impossible surfaces\.  We \\emph\{decouple\} generation quality from constraint satisfaction entirely, enforcing slope stability, bearing capacity, and surface continuity via a closed\-form \\emph\{post\-hoc projection\} applied to the generator's output\. The projection raises the physics pass rate from $53\\%$ to $\\mathbf\{100\\%\}$ on a diffusion generator with no change in FID \($13\.72$\), whereas a matched PhysLoss baseline degrades FID to $56\.6$ \-\-\-a $4\{\\times\}$ loss of generation quality\-\-\-while reaching only $25\.5\\%$ pass rate\.  The projection is \\emph\{model\-agnostic\}: on four diverse generators \(Procedural, Diffusion, VAE, GAN\) it consistently yields $89\.5\\%$\-\-$100\\%$ compliance with $&lt;4\.3\\%$ overhead\. Out\-of\-distribution evaluation on real TartanDrive terrain confirms transfer: all four generators reach $100\\%$ pass rate, while projection simultaneously improves BEV\-FID against the real reference by up to $20\\%$\.  We instantiate the layer inside DreamEnv, an end\-to\-end BEV world model\.

## High\-dimensional Limit of SGD for Diagonal Linear Networks

**Authors:** Begoña García Malaxechebarría; Courtney Paquette; Maryam Fazel; Dmitriy Drusvyatskiy

**ID:** 155594 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4RALRfN6bS>) | [PDF](<https://openreview.net/pdf?id=4RALRfN6bS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155594>)

Understanding the behavior of stochastic gradient methods is a central problem in modern machine learning\. Recent work has highlighted diagonal linear networks as a simplified yet expressive setting for analyzing the optimization and generalization properties of neural models\. In this work, we show that in the high\-dimensional regime, stochastic gradient descent on diagonal linear networks is well\-approximated by continuous dynamics governed by a stochastic differential equation \(SDE\), which explicitly decouples the drift from the gradient noise\. We further derive a deterministic partial differential equation whose solution propagates the relevant state of the iterates and characterizes the time evolution of a broad class of observable statistics, including the risk, curvature, and other metrics for optimality\. To the best of our knowledge, this is the first deterministic high\-dimensional description of SGD for a genuinely nonlinearly parametrized model\. Finally, we show that, under a suitable parametrization, the stochastic dynamics are globally well posed and converge exponentially fast to zero risk with high probability, yielding a fully explicit non\-asymptotic description of their long\-time behavior\. Numerical simulations corroborate our theoretical findings\.

## TurtLES: A Large\-Scale Benchmark for Turbulent 3D Neural PDE Surrogates

**Authors:** Jarno Platenburg; Armand Kassaï Koupaï; Paola Cinnella; Patrick Gallinari

**ID:** 138934 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vX3Xjjnk0q>) | [PDF](<https://openreview.net/pdf?id=vX3Xjjnk0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138934>)

Machine\-learning surrogates are increasingly used to accelerate computational fluid dynamics \(CFD\), yet progress is limited by the lack of benchmarks capturing realistic, time\-dependent turbulent flows\. We introduce TURTLES, a 13 TB dataset of high\-fidelity implicit large\-eddy simulations of three\-dimensional turbulent cylinder wakes in the shear\-layer transition regime\. The dataset contains 400 trajectories of 400 time steps each, with 3–9 million points per frame sampled on irregular point clouds, spanning variations in geometry, Reynolds number, and angle of attack\. Unlike existing datasets, TURTLES captures fully three\-dimensional turbulence with an active energy cascade driven by vortex stretching, combining \(i\) dense irregular meshes, \(ii\) long\-horizon temporal dynamics, and \(iii\) physically realistic turbulent behavior\. We benchmark state\-of\-the\-art neural operators on long autoregressive rollouts and identify key failure modes, including temporal instability, loss of small\-scale energy, and challenges in learning on large irregular domains\. TURTLES provides a new standard benchmark for evaluating surrogate models in high\-resolution, industrial\-scale CFD regimes\.

## Macrocanonical Generator Networks: data\-efficient neural surrogates for amortized physics simulation

**Authors:** Niall Jeffrey; Benjamin Wandelt

**ID:** 154192 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FVg3lsts7M>) | [PDF](<https://openreview.net/pdf?id=FVg3lsts7M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154192>)

Many scientific simulations are computationally expensive, limiting their use in simulation\-based inference, uncertainty quantification, and decision making\. We introduce \*macrocanonical generator networks\*, a framework for learning fast, data\-efficient neural surrogates for \*amortized\* simulation of stationary physical processes by matching multiscale statistics of a target process\. Inspired by microcanonical maximum\-entropy synthesis, which matches feature statistics per sample by inner\-loop optimization, our approach instead trains a neural generator to satisfy the same constraints in expectation, preserving physically realistic sample\-to\-sample fluctuations\. We prove that gradient\-descent training induces preconditioned gradient\-descent dynamics in sample space that inherit the symmetry\-preservation properties of the microcanonical gradient descent of Bruna and Mallat, amortizing its per\-sample inner\-loop optimization into a single training run after which every sample is generated in one forward pass\. We further show that residual generator parameterizations initialized near the identity, trained with a small learning rate, preserve entropy locally during early optimization and mitigate mode collapse\. Experiments on cosmology and fluid simulations show that macrocanonical generators recover realistic samples from extremely small training sets, in some cases a single training example, while generating new realizations more than $10^6$ times faster per sample than the reference simulator and more than $10^3$ times faster than microcanonical gradient descent\. The trained generators can be reused for downstream pretraining, including simulation\-based inference, providing a data\-efficient route to multi\-fidelity scientific machine learning workflows\.

## Replay\-buffer engineering for noise\-robust quantum circuit optimization

**Authors:** Akash Kundu; Sebastian Feld

**ID:** 148828 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uqQwtucEDc>) | [PDF](<https://openreview.net/pdf?id=uqQwtucEDc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148828>)

Deep reinforcement learning \(RL\) for quantum circuit optimization faces three fundamental bottlenecks: replay buffers that ignore the reliability of temporal\-difference \(TD\) targets, curriculum\-based architecture search that triggers a full quantum\-classical evaluation at every environment step, and the routine discard of noiseless trajectories when retraining under hardware noise\. We address all three by treating the replay buffer as a primary algorithmic lever\. We introduce ReaPER$\+$, an annealed replay rule transitioning from TD error\-driven prioritization to reliability\-aware sampling as value estimates mature, achieving up to 4$\\times$ improved sample efficiency over the strongest off\-policy baselines \(fixed PER, ReaPER, and uniform replay\) and matching prior on\-policy solution quality at up to 32$\\times$ fewer interactions\. At 12\-qubit scale, ReaPER achieves the lowest energy error in the fewest steps which is consistent with ReaPER$\+$'s annealing direction, while PER and Vanilla replay find more compact circuits at the cost of higher energy error\. Validation on LunarLander\-v3 confirms the annealing principle is domain\-agnostic obtaining \+9% AUC over PER and fixed ReaPER\. We further introduce OptCRLQAS, which amortizes expensive quantum\-classical evaluations over multiple architectural edits, cutting wall\-clock time per episode by up to 67\.5% on a 12\-qubit task without degrading solution quality\. Finally, a lightweight replay\-buffer transfer scheme warm\-starts noisy\-setting learning from noiseless trajectories, without network\-weight transfer or $\\epsilon$\-greedy pretraining, reducing steps to chemical accuracy by up to 85\-90% and final energy error by up to 90% over from\-scratch baselines, with transfer advantages that grow with system size\. Together, these results establish that experience storage, sampling, and transfer are decisive levers for scalable, noise\-robust quantum circuit optimization\. The anonymized repository is available at : https://anonymous\.4open\.science/r/annealed\-replay\-buffer\-transfer\-for\-quantum\-optimization\-6861/\.

## Efficient Generative Transformer Operators for Million\-Point PDEs

**Authors:** Armand Kassaï Koupaï; Lise Le Boudec; Patrick Gallinari

**ID:** 153950 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HLXxp5Wo4y>) | [PDF](<https://openreview.net/pdf?id=HLXxp5Wo4y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153950>)

We introduce ECHO, a transformer\-based neural operator for large\-scale PDE modeling that learns to \\emph\{generate full trajectories in compressed spatio\-temporal latent spaces\}\. Scaling neural operators to high\-resolution systems remains challenging: dense grids are computationally prohibitive, and autoregressive solvers accumulate errors over long horizons\. ECHO addresses both issues by jointly compressing space and time and replacing step\-by\-step prediction with trajectory\-level generation\. ECHO combines a hierarchical encoder–decoder achieving up to 100× compression, a staged training strategy for high\-resolution fidelity, and a latent generative process that models distributions over complete trajectories, improving long\-term consistency\. This formulation enables a single model to handle forward prediction, inverse problems, and interpolation\. Across large\-scale 2D and 3D benchmarks, ECHO achieves state\-of\-the\-art performance and scales to million\-point simulations with complex dynamics\.

## FlowBatt: Flow Matching for Probabilistic Battery Degradation Prediction

**Authors:** Hamidreza Eivazi; Eslam Sharaawy; Stefan Wittek; André Hebenbrock; Raphael Ginster; Steffen Blömeke

**ID:** 151881 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XCVKzG7HD6>) | [PDF](<https://openreview.net/pdf?id=XCVKzG7HD6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151881>)

Battery degradation remains a central challenge in the development and broad application of sustainable energy technologies\. Accurate degradation prediction is challenging, as battery aging emerges from complex and heterogeneous interactions among cycling behavior, operating conditions, and cell chemistry\. Existing machine\-learning approaches typically focus on deterministic end\-of\-life predictions or modeling degradation curves within fixed chemistry settings, leaving probabilistic state\-of\-health \(SOH\) trajectory modeling across heterogeneous chemistries underexplored\. We introduce FlowBatt, a use\-inspired conditional generative framework that adapts flow matching with a diffusion transformer \(DiT\) backbone to battery degradation trajectory modeling\. FlowBatt models full SOH trajectories as probabilistic degradation processes conditioned on early\-cycle capacity data\. To strengthen this conditioning pathway, we use explainable AI analysis to diagnose and improve the encoder that maps early\-cycle capacity matrices into conditioning vectors\. We evaluate FlowBatt on five public benchmark settings spanning diverse chemistries and aging conditions, comparing it with supervised and diffusion\-based trajectory models as well as established baselines for remaining\-useful\-life \(RUL\) prediction under shared data splits\. FlowBatt achieves the best SOH prediction performance on four of five datasets, with errors below 2\.5%, and delivers competitive RUL prediction performance\. By generating multiple plausible trajectories, FlowBatt provides empirical uncertainty estimates, while also revealing calibration challenges under some dataset shifts\. These results indicate that flow\-matching\-based trajectory modeling is a promising framework for probabilistic battery health prediction\.

## Dandelions: A Spherical Flower for Neural Simulation of Planetary Dynamics

**Authors:** Till Muser; Giovanni Abati; Ivan Dokmanić

**ID:** 155531 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sWdU0DnBl>) | [PDF](<https://openreview.net/pdf?id=4sWdU0DnBl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155531>)

Many dynamical processes unfold on the sphere but the default scientific machine learning architectures are Euclidean\. Applying these architectures on a regular lat\-\-lon grid causes problems: Cartesian convolutions become distorted at high latitude; 2D FFTs in Fourier neural operators incorrectly assume double periodicity; Cartesian positional encodings in ViTs distort spherical geodesic distances\. Recent work moves towards natively spherical  primitives, including spherical convolutions \(e\.g\., DeepSphere or DISCO\), Spherical Fourier Neural Operators \(SFNOs\), and geodesic attention\. Here we propose Dandelion, a spherical version of Flower\-\-\-a recent warp\-based neural PDE solver\. Layers of Dandelion predict a tangent\-plane displacement and transport features along great circles\. We obtain a U\-Net\-like structure by implementing hierarchical pooling entirely in the spherical\-harmonic domain\. There are thus no convolutions: spatial mixing is  achieved only through spherical coordinate changes\-\-\-or warps\. To compare Dandelion with existing spherical architectures, we release an evolving benchmark suite of challenging, natively\-spherical PDE datasets including a modified Galewsky jet, anomalous chained turbulence, Cahn\-\-Hilliard decomposition, spherical Riemann shocks, Held\-\-Suarez dry atmospheric transport and global ocean dynamics\. This new benchmark fills the gap in existing spherical datasets which are either too small and stylized, or much too large \(ERA5\) for model iteration\.  Dandelion is best or second\-best on every dataset, and the gap to non\-warp baselines widens with resolution: at $256\\times 512$, Dandelion and Flower2D occupy the top two slots in both single\-step prediction and rollout\.

## QMaxCal: Path\-Space Regularization for Open Quantum Control via Girsanov's Theorem

**Authors:** Merijn Moody; Zier Mensch; Miranda Cheng; Peter G Bolhuis; Max Welling

**ID:** 150785 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fQbP42DHcH>) | [PDF](<https://openreview.net/pdf?id=fQbP42DHcH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150785>)

Reliable quantum control in the presence of decoherence requires policies that combat the effect of environmental noise on the controlled dynamics\. Open quantum systems under continuous monitoring generate classical measurement records whose drift depends on the noise experienced by the system; the records of two evolutions sharing the same decoherence channels differ only in this drift, so Girsanov's theorem yields a closed\-form, differentiable estimator of the KL divergence between their trajectory distributions\. We instantiate this estimator with two physically motivated reference measures, yielding two regularizers that both drive the system toward states where the effects of decoherence are minimal: the Wiener KL \(KL W\), which is empirically more effective under certain conditions on the noise model, and the drift\-variance regularizer \(R DV\), which works for all noise models\. Both are qualitatively distinct from existing penalties on control fluence or smoothness: they penalize the observable consequences of control on the decoherence channels rather than the control amplitude itself\. The regularizers outperform unregularized gradient\-based and reinforcement\-learning baselines across a range of open quantum systems — including single\- and multi\-qubit benchmarks and a multi\-qubit chain calibrated to a published snapshot of the IBM Kingston processor — along several axes of evaluation: final\-state fidelity, robustness to mismatch in the assumed noise model \(gains grow from \+17 pp at training noise to \+27 pp under 2\.5× noise mismatch\), and occupation of forbidden states\. The regularizers reduce infidelity by up to 50%, with \~16% gains on the calibrated IBM Kingston chain\. Our code can be found at https://anonymous\.4open\.science/r/QMaxCal\-6E71/\.

## GAUGECAST\+\+: A Physics\-Informed Latent Forecasting System for Localized Flood Prediction

**Authors:** Adrian Kucia; Edward Rollason; Wai Lok Woo

**ID:** 155744 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3JmNPDqHqq>) | [PDF](<https://openreview.net/pdf?id=3JmNPDqHqq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155744>)

Sparse\-gauge flood forecasting is challenging because river\-level dynamics combine transport, storage, rainfall forcing, and sharp event\-scale phase shifts\. We introduce GaugeCast\+\+, a physics\-informed latent forecasting framework that learns a coordinate system in which flood dynamics become easier to evolve\. Its key component is a gauge\-conditioned pullback operator, which reparameterizes the forecast field and suppresses residual transport, yielding a more stable latent evolution than direct prediction in observation space\. To address delayed or shifted flood peaks, GaugeCast\+\+ adds semigroup\-consistent phase\-transport learning, enforcing agreement between long\-horizon forecasts and composed short\-horizon rollouts in both amplitude and event phase\. Finally, a decoupled inverse rainfall ambiguity module estimates uncertainty caused by imperfect future rainfall forcing\. Experiments across six UK river\-gauge catchments show consistent gains in event\-level MSE, NSE, peak timing, and peak magnitude against strong neural forecasting baselines\.

## Simplifying Transformer\-Based U\-Net Neural Physics Simulators

**Authors:** Pietro Sittoni; Francesco Tudisco

**ID:** 154869 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AISWDtZ6VB>) | [PDF](<https://openreview.net/pdf?id=AISWDtZ6VB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154869>)

U\-Net\-\-style architectures are widely adopted for modeling physical systems, as their multiscale structure enables efficient processing of high\-resolution data while reflecting the hierarchical structure of many physical phenomena\. The most successful U\-Net\-based neural physics simulators often combine convolutions, Fourier layers, or specialized transformer mechanisms such as windowed or axial attention; however, these structured components can limit adaptability across different spatial and spatiotemporal dimensions\. In this work, we revisit transformer\-based U\-Nets with the goal of simplifying attention\-based neural physics simulators without sacrificing multiscale efficiency or predictive accuracy\. We introduce \\texttt\{UFlex\}, a simple attention\-based U\-Net whose blocks are obtained through only minimal modifications to standard self\-attention, allowing the same architecture to be applied across one\-, two\-, three\-dimensional, and spatiotemporal regular\-grid problems without major design changes\. Evaluated on seven challenging benchmarks \(four 2D and three 3D\), \\texttt\{UFlex\} scales to resolutions of up to $512 \\times 512$ in 2D and $256 \\times 128 \\times 256$ in 3D, while reducing training memory and accelerating training compared to state\-of\-the\-art transformer baselines, all while achieving state\-of\-the\-art predictive accuracy\.

## Mosaic: A Benchmark Suite for Differentiable Physics Solvers

**Authors:** Andrin Rehmann; Heiko Zimmermann; Dion Häfner

**ID:** 139696 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A4oHl7cYA9>) | [PDF](<https://openreview.net/pdf?id=A4oHl7cYA9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139696>)

Differentiable physics solvers underpin solver\-in\-the\-loop ML training, gradient\-based optimal control, and inverse problems, yet the practical cost of obtaining correct, usable gradients from a given solver on a given problem is largely undocumented\. Integration effort, computational cost, gradient accuracy, and numerical conditioning vary widely across solvers and are discoverable only by trial and error\. We introduce Mosaic, an extensible benchmarking framework for differentiable PDE solvers that standardizes access to solver gradients\. Each solver is packaged as a containerized component \(Tesseract\) exposing a uniform gradient API regardless of language or automatic differentiation \(AD\) strategy, enabling researchers to evaluate, compare, and build on non\-trivial physical solvers\. Our evaluation of 14 solvers across fluid dynamics, structural mechanics, and heat transfer demonstrates that the benchmark surfaces practically relevant differences: order\-of\-magnitude variation in computational cost and Jacobian conditioning, alongside structural incompatibilities that eliminate solvers from realistic tasks entirely\. Despite this variation, all solvers that produce gradients converge to similar optima, indicating that the practical barriers are memory limits, numerical stability, and setup compatibility rather than gradient accuracy alone\. Mosaic is open\-source and available at https://anonymous\.4open\.science/r/mosaic\-bench\.

## FunctionEvolve: Structure\-Guided Symbolic Regression with LLMs

**Authors:** Zeyu Xia; Jun Zhu; Dong Yan

**ID:** 148539 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=x9ZPbfgvX4>) | [PDF](<https://openreview.net/pdf?id=x9ZPbfgvX4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148539>)

Symbolic regression aims to uncover explicit scientific laws from data\. Recent methods use LLMs to guide mutation from background text, which is more directed than random genetic programming\. However, exact symbolic recovery requires both semantic guidance and explicit structure, so that domain\-informed search are carried out through valid symbolic representation\. Current LLM\-driven systems remain structure\-blind: they select among opaque candidates, lack explicit mechanisms for local mutation, and rely on brittle coefficient fitting that can undervalue correct skeletons\. We propose FunctionEvolve, an evolutionary framework using expression trees to organize the whole search: structural summaries promote diverse parent selection, local tree edits preserve useful subexpressions, and structure\-aware fitting decomposes, constrains, and simplifies coefficients for more reliable scoring\. It uses only elementary function families, without additional domain\-specific rules limiting generalization\. On the 129\-task synthetic subset of LLM\-SRBench, FunctionEvolve with Claude Opus 4\.6 recovers 113 exact forms, reaching 87\.6\\% $\\mathrm\{SA@50\}$, 4\.7x above same\-backbone baselines, and 58\.9\\% $\\mathrm\{SA@1\}$, 3\.8x above the strongest previously published top\-1 result\. Ablations show that structure\-visible search is central to reliable recovery, with LLM\-guided refinements and structure\-aware coefficient optimization serving as essential proposal and scoring mechanisms\. We also audit the benchmark and show that collinearity in its materials\-science subset creates identifiability issues\.

## DNS\-Calibrated Local Stochastic Transition Closure for PDE\-Free Long\-Horizon Turbulence Diffusion

**Authors:** Zhuoer Lin; Wenwu He; Congcong Liu; Zhuo\-Xu Cui

**ID:** 151224 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bzk5V7Yzwg>) | [PDF](<https://openreview.net/pdf?id=bzk5V7Yzwg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151224>)

PDE\-free latent diffusion models can synthesize plausible turbulence fields, but visually realistic snapshots do not guarantee statistically reliable long\-horizon rollouts\. In CNF\-based turbulence diffusion, we observe that long rollouts can drift in latent transition laws, temporal memory, and transport\-sensitive diagnostics even when the decoder remains spatially expressive\. We address this failure mode with a DNS\-calibrated stochastic transition closure for long\-horizon turbulence diffusion\. The closure is fit offline in a coarse latent observable space and defines stochastic transition tubes calibrated from DNS\-referenced latent trajectories\. During diffusion training, the frozen closure regularizes the denoiser's predicted\-clean latent transitions by penalizing deviations from these calibrated tubes, while leaving the CNF decoder and reverse diffusion sampler unchanged\. The method is fully PDE\-free, uses no PDE residual or sampling\-time correction, and is designed to improve transition\-side temporal reliability rather than to serve as a universal physical simulator\. Across DNS\-referenced long\-horizon protocols, the proposed method yields targeted gains in temporal transport and memory diagnostics, especially in high\-drift regimes, while decoded\-field spectra and derivative\-sensitive quantities are reported as physical\-fidelity guardrails rather than uniformly optimized targets\. These results support stochastic transition closure as a lightweight mechanism for improving the temporal reliability of PDE\-free turbulence diffusion\.

## Probabilistic Data\-Driven Modelling of Astrophysical Transients: The Neural Process Family for Ultrafast and Class\-Agnostic Light Curve Reconstruction

**Authors:** Siddharth Chaini; federica bianco; Ashish Mahabal

**ID:** 151221 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c1qPSD4fDz>) | [PDF](<https://openreview.net/pdf?id=c1qPSD4fDz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151221>)

Astrophysical observations from Earth are subject to weather, environmental, and scientific constraints that lead to characteristically sparse and unevenly sampled multi\-wavelength time series \(light curves\), severely limiting the performance on downstream tasks\. Interpolating light curves help in mitigating this problem, where Gaussian Processes \(GPs\) are the current standard\. However, GPs struggle with cross\-wavelength correlations, require \*a priori\* kernel specification, and cannot handle ensembles of diverse transient and variable classes\.  Furthermore, GPs and other existing models \(\*e\.g\.\*, Bayesian neural networks\), scale poorly and must be fit to each light curve individually, transferring no information between light curves\. We introduce Attentive Neural Processes \(ANPs\) for light curve reconstruction, combining the probabilistic framework of GPs with the scalability of deep learning, and we demonstrate their use as a fast, data\-driven, universal light curve interpolator\. Unlike prior processes tailored to single object classes, our approach is morphologically agnostic\. By meta\-learning on a diverse population of simulated transients, ANPs shift the computation cost to the training phase, enabling amortized inference \- particularly important at the eve of the Vera C\. Rubin Observatory Legacy Survey of Space and Time \(LSST\), which will produce massive datasets for transient astrophysics\. We evaluate our models on realistic LSST cadences for its 6\-filters across 14 transient classes\. The ANP outperforms all our benchmark models, including a suite of GP and neural\-network based models, on all regression quality, feature recovery, and rigorous probabilistic calibration metrics\. Our ANP performs probabilistic interpolation on all filters in $\\sim 10^\{\-6\} $ seconds \-\- over four orders of magnitude faster than the next\-best neural benchmark and over five orders of magnitude faster than GPs \-\- making them suitable for on\-line use on the LSST alert stream estimated to carry $\\sim10^\{7\}$ events/night\. The ANP avoids neural networks' overconfidence and GPs' underconfidence, delivering sharp, highly calibrated uncertainties\. This work establishes the neural process family as a scalable, probabilistic foundation for real\-time transient science in the LSST era\.

## Energy\-Guided Transport for Projection\-Free Physics\-Informed Flow Matching

**Authors:** Giuliano Galadini; Aurelio Uncini; Danilo Comminiello

**ID:** 154978 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9UPtcUT0hz>) | [PDF](<https://openreview.net/pdf?id=9UPtcUT0hz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154978>)

Deep generative models, particularly Flow Matching frameworks, have emerged as powerful tools for synthesizing complex physical systems\. However, standard architectures remain purely statistically driven and agnostic to the underlying governing equations, often violating fundamental physical constraints during inference\. Existing zero\-shot approaches designed to enforce these constraints typically rely on rigid algebraic projections\. While effective for sparse boundary conditions, applying such discrete geometric corrections to dense, full\-domain PDEs disrupts the probability path, pulling samples off the learned manifold and introducing intractable computational overhead\. To address these challenges, we introduce Energy\-Guided Transport, a novel training\-free framework that formulates non\-linear physical constraints as a smooth potential energy landscape\. Rather than interrupting the ODE integration, our method applies a continuous dissipative force directly to the intermediate generative states, seamlessly steering them toward the physical manifold\. By evaluating this force implicitly via reverse\-mode automatic differentiation, our framework preserves the flow's natural dynamics while maintaining an efficient $\\mathcal\{O\}\(N\)$ algorithmic complexity\. We extensively evaluate our framework across various 1D and 2D physical systems, including the chaotic Navier\-Stokes equations\. Our method achieves stable generation without structural divergence, significantly improves the stability\-accuracy trade\-off compared to state\-of\-the\-art methods, and substantially accelerates inference with respect to exact projection strategies\. Code available at: \\url\{https://anonymous\.4open\.science/r/Projection\-free\-energy\-guided\-flow\-matching\-A302\}\.

## Neuromodulated Constrained Autoencoders for Context\-Dependent Manifold Learning

**Authors:** Jérôme Adriaens; Gustave Bainier; Guillaume Drion; Pierre Sacré

**ID:** 150082 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=krhi01CVlP>) | [PDF](<https://openreview.net/pdf?id=krhi01CVlP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150082>)

Many physical systems exhibit a low\-dimensional structure that varies with external parameters: link lengths in a robot, forcing constants in a fluid, or Reynolds numbers in a flow shift the underlying manifold while preserving its intrinsic dimension\. Constrained AutoEncoders \(cAEs\) learn such manifolds through an \*idempotent\* encoder\-decoder projection, a property that unconstrained autoencoders cannot match and that is essential whenever the model is applied iteratively\. However, the standard strategies for making a cAE context\-dependent, namely concatenating the context to the input or affinely modulating hidden activations, break the encoder\-decoder idempotency, sacrificing the projection guarantee precisely in the setting where it would be most valuable\. To restore this guarantee under context variation, we developed the Neuromodulated Constrained Autoencoder \(NcAE\), which modulates the activation slope and bias of a cAE through a context\-driven hyper\-network\. This paper presents the NcAE, its theoretical foundation, and its empirical validation\. We prove that for every context, including contexts unseen at training time, the reconstruction map remains an idempotent projection, the topology of the learned manifold is invariant, and context perturbations induce smooth changes in the manifold\. We evaluated our approach on a 16\-DoF pendulum with context dependent coupling and the Lorenz96 system across a bifurcation\. The NcAE matched or exceeded the best of six baselines on reconstruction, idempotency, and latent\-geometry metrics, while being the only architecture that preserves geometric consistency by construction\. The NcAE thereby provides a stable, geometry\-preserving coordinate system across families of physical regimes\.

## Derivative\-Informed Training of Neural Operators On\-the\-Fly via Sketched Tangent Consistency

**Authors:** Shancong \(Sean\) Mou; Xinhan Yang; Lu Lu

**ID:** 152655 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RO1LZT9pc2>) | [PDF](<https://openreview.net/pdf?id=RO1LZT9pc2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152655>)

Derivative\-informed training improves neural operators by directly supervising their input\-\-output sensitivities, but existing methods rely on offline tangent solves and stored derivative labels\. We propose sketched tangent consistency loss \(sTCL\), an on\-the\-fly drop\-in derivative regularizer for neural\-operator training that improves learned Jacobians without changing the architecture or generating offline sensitivity data\. At each training step, sTCL samples a small number of perturbation directions in the input function space, computes the corresponding surrogate Jacobian\-\-vector products using forward\-mode automatic differentiation, and penalizes the residual of the forward sensitivity equation\. This equation is obtained by differentiating the governing PDE with respect to the input perturbation direction, so derivative supervision is obtained directly from the physics rather than from stored tangent labels\. We further show that sketching makes online derivative\-informed training computationally feasible, while conditioning is the key to making it effective\. Random directional sketching keeps the derivative penalty at the same order of cost as the standard data\-fitting loss, making sTCL compatible with stochastic neural\-network training as a lightweight loss term\. However, raw forward\-sensitivity residual penalties can fail for stiff, ill\-conditioned, or indefinite tangent operators\. To address this, we introduce lightweight operator\-aware preconditioners selected by a simple tangent\-operator decision rule\. Across four PDE benchmarks\-\-\-Helmholtz, nonlinear diffusion\-\-reaction, Burgers, and two\-dimensional Navier\-\-Stokes\-\-\-operator\-conditioned sTCL achieves accuracy comparable to offline DIFNO while eliminating the offline derivative\-data generation stage\. These results show that on\-the\-fly derivative\-informed training need not merely amortize offline tangent\-solve cost into training; with appropriate sketching and conditioning, sTCL provides an attractive drop\-in path to derivative\-informed neural operators\.

## Efficient and Robust Physical 3DGS\-MPM Simulation via Interior Filling and Text\-Physics Optimization

**Authors:** Yikun Ma; Yiqing Li; Jingwen Ye; Zhongkai Wu; Weidong Zhang; Lin Gao; Zhi Jin

**ID:** 149910 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mHqLsJydRH>) | [PDF](<https://openreview.net/pdf?id=mHqLsJydRH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149910>)

Extending 3D Gaussian Splatting \(3DGS\) to 4D physical simulation remains challenging\. Based on the Material Point Method \(MPM\), existing methods either rely on manual parameter tuning or distill dynamics from video diffusion models, limiting the generalization and optimization efficiency\. Recent attempts using LLMs/VLMs suffer from a text/image\-to\-3D perceptual gap, yielding unstable physics behavior\. In addition, they often ignore the surface structure of 3DGS, leading to implausible motion\. We propose FastPhysGS, a fast and robust framework for physics\-based dynamic 3DGS simulation: \(1\) Instance\-aware Particle Filling \(IPF\) with Monte Carlo Importance Sampling \(MCIS\) to efficiently populate interior particles while preserving geometric fidelity; \(2\) Bidirectional Graph Decoupling Optimization \(BGDO\), an adaptive strategy that rapidly optimizes material parameters predicted from a VLM\. Experiments show FastPhysGS achieves high\-fidelity physical simulation in 1 minute using only 7 GB runtime memory, outperforming prior works with broad potential applications\.

## TORNADO: Adaptive Latent Stochastic Transport for Calibrated Probabilistic PDE Forecasting

**Authors:** Jorge Mifsut Benet; Armand Kassaï Koupaï; Ramon Daniel Regueiro\-espino; Nicolas Baskiotis; Patrick Gallinari

**ID:** 150449 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hxP9I13XQ2>) | [PDF](<https://openreview.net/pdf?id=hxP9I13XQ2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150449>)

Probabilistic neural surrogates for PDEs enable ensemble forecasting, but often exhibit miscalibration when used for uncertainty quantification, especially in compute\-constrained, few\-step inference regimes\. Existing generative approaches typically rely on fixed global stochasticity, which cannot adapt predictive uncertainty to the local dynamical state\.  We propose TORNADO, a latent probabilistic forecasting framework that formulates next\-step prediction as stochastic transport between VAE encoder posteriors\.  Unlike existing approaches with globally prescribed stochasticity, TORNADO learns a SDE with state\-dependent diffusion, enabling the predictive uncertainty to adapt to the local latent dynamics\. The model is trained using analytic conditional endpoint targets derived from a Gaussian interpolant, enabling simulation\-free learning\. An additional energy distance regularization term improves distributional alignment\. Empirically, TORNADO improves uncertainty calibration over representative generative baselines, including stochastic interpolants, diffusion models, and flow matching, while maintaining comparable predictive accuracy\. Our results show that adapting stochasticity to the latent state, rather than prescribing it globally, is an effective mechanism for improving calibration in practical neural PDE forecasting settings\.

## Adaptive Coordinate Transforms for Neural Operators

**Authors:** Chaoyu Liu; Zhonghao Li; Gaohang Chen; Zakhar Shumaylov; Zhongying Deng; Zhang Qian; Zhonghua Qiao; Carola\-Bibiane Schönlieb

**ID:** 156121 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0FTnHtuj1L>) | [PDF](<https://openreview.net/pdf?id=0FTnHtuj1L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156121>)

Neural operators have achieved promising performance on partial differential equations \(PDEs\), but most existing models are built on fixed Eulerian coordinates\. This mismatch between evolving physical structures and static coordinates creates spatial misalignment, leading to unnecessarily non\-local operator mappings and reinforcing a smoothness preference near sharp transitions\. Inspired by adaptive coordinate transformations in classical PDE analysis, we propose the Adaptive Coordinate Transform \(ACT\) block, a plug\-and\-play module for data\-driven geometric adaptation in neural operators\. ACT blocks resolve this structural limitation by learning adaptive coordinate systems within the operator learning pipeline\. Specifically, given an input feature, the ACT block learns a coordinate transformation and represents the same feature under the transformed coordinates via differentiable sampling\. This operation preserves the underlying signal while changing its spatial representation, equivalent to expressing the same physical quantity in different coordinate systems\. By adapting the coordinate system to the data, ACT allows the network to better track evolving structures, reduce operator complexity, and dynamically focus on critical features to improve learning\. We evaluate the proposed approach across diverse PDE benchmarks and multiple neural operator architectures\. Experimental results demonstrate consistent and significant improvements in predictive accuracy, indicating that learning coordinate systems provides a powerful mechanism for enhancing operator learning\.

## A Reproducible Evaluation Protocol for Quantum Non\-Linearity in Variational Quantum Models

**Authors:** Pavel Sulimov; Claude Lehmann

**ID:** 139813 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=37XAXg90Dc>) | [PDF](<https://openreview.net/pdf?id=37XAXg90Dc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139813>)

Variational quantum models are linear maps of the input state: any useful non\-linearity must be engineered through the data encoding, entanglement pattern, ancilla tracing, classical readouts, or explicit classical layers\. Although many such mechanisms have been proposed, there is no standard protocol that scores them on a common footing\. Most published comparisons reduce non\-linearity to either the accuracy on a single downstream benchmark or a single abstract expressibility number, and the two are rarely measured under matched training budgets, circuit widths, and noise assumptions\. We introduce a reproducible evaluation protocol that decomposes non\-linearity quality into four complementary scalar scores covering frequency reach, gradient\-variance scaling, trainability efficiency on a chaotic dynamical task, and stability under depolarizing noise\. In addition, we define a composite index with published weights, enabling methods to be ranked under a single criterion while preserving full access to the underlying components\. We instantiate the protocol with six variational ansatzes spanning the standard taxonomy of quantum non\-linearity sources \(data reuploading, ancilla tracing, their combination, strongly entangling layers, a quantum convolutional network, and a quantum reservoir\), together with a classical multilayer perceptron and a hybrid quantum\-classical network as non\-quantum reference points\. The evaluation surfaces a central mismatch that single\-number reporting hides: in our reference run, the composite leader \(data reuploading\) is near the bottom on held\-out Lorenz one\-step $R^2$, while the Lorenz leader \(ancilla reuploading\) is only third on the composite\. The main outcome is a practical benchmark that makes these trade\-offs visible and testable: with fixed tasks, budgets, and seeds, new methods can be added by registering a circuit builder and rerunning the same protocol, and multi\-seed aggregates can be updated without changing metric definitions\.

## Optimal algorithmic complexity of inference in quantum kernel methods

**Authors:** Elies Gil\-Fuster; Seongwook Shin; Sofiene Jerbi; Jens Eisert; Maximilian J Kramer

**ID:** 151049 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dMzQUanLcb>) | [PDF](<https://openreview.net/pdf?id=dMzQUanLcb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151049>)

Quantum kernel methods are among the leading candidates for achieving quantum advantage in supervised learning\. A key bottleneck is the cost of inference: evaluating a weighted sum of $N$ kernel values to additive precision $\\varepsilon$, where $\\alpha$ is the vector of trained coefficients\. The standard approach estimates each term independently via sampling, yielding a query complexity of $\\mathcal\{O\}\(N\\lVert\\alpha\\rVert\_2^2/\\varepsilon^2\)$\. In this work, we combine two independent improvements: estimating the kernel values via quantum amplitude estimation and collecting the sum under a single observable\. We show that the improved approach achieves a query complexity of $\\mathcal\{O\}\(\\lVert\\alpha\\rVert\_1/\\varepsilon\)$, removing the dependence on $N$ from the query count and yielding a quadratic improvement in both $\\lVert\\alpha\\rVert\_1$ and $\\varepsilon$\. We prove a matching lower bound of $\\Omega\(\\lVert\\alpha\\rVert\_1/\\varepsilon\)$, establishing query\-optimality\. Beyond query complexity, we also analyze how these improvements translate into gate costs and show that the query\-optimal strategy is not always optimal in practice from the perspective of gate complexity\. We identify a different strategy based on importance sampling, which yields a lower total gate count\. We thus provide both a query\-optimal algorithm and a practically\-optimal choice of strategy depending on hardware capabilities, along with a complete landscape of intermediate methods to guide practitioners\. All algorithms require only amplitude estimation as a subroutine and are thus natural candidates for early\-fault\-tolerant implementations\.

## Physics\-Informed Optimal Control by Control\-Only Supervision with Error Guarantees on Value and Policy

**Authors:** Zihua Wang; Xiaopei Jiao; Yunfeng Cai

**ID:** 154719 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BWHQemN2Xs>) | [PDF](<https://openreview.net/pdf?id=BWHQemN2Xs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154719>)

We propose a physics\-informed method for solving high\-dimensional optimal control problems that requires only control labels, not value function labels\. A neural network parameterizes the value function, and the control policy is derived from its gradient\. The network is trained by minimizing a weighted sum of the standard Hamilton–Jacobi–Bellman \(HJB\) residual and the mismatch between the network’s control output and control labels, which are precomputed by a state\-dependent Riccati equation \(SDRE\) solver\. Theoretically, with the help of the viscous HJB equation, we establish error bounds for the value function and its gradient, providing a rigorous performance guarantee for the resulting policy\.  Numerical experiments show that the learned model accurately approximates the optimal value function, closely matches the cost\-to\-go of the SDRE reference, and yields a neural controller that is significantly faster while exhibiting excellent stability\.

## Support\-Safe Variational Hybrid Filtering for Contact\-Mode and Sparse\-Law Recovery

**Authors:** Marios Papamichalis; Regina Ruane

**ID:** 155217 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7PXCrabsBB>) | [PDF](<https://openreview.net/pdf?id=7PXCrabsBB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155217>)

Contact\-rich robot dynamics are hybrid: a single observation can match several latent states and contact regimes \(free, impact, stick\-\-slip\)\. A standard amortized filter that places no probability on a feasible contact transition will permanently lose the branch the robot actually follows\. We introduce VHYDRO, a variational hybrid dynamics learner that prevents this branch loss\. At each step, VHYDRO mixes the learned proposal with a feasible transition law before sampling and importance weighting\. This keeps every feasible contact alternative covered\. VHYDRO jointly infers a continuous latent state and a discrete contact mode, and fits a sparse port\-Hamiltonian law to each recovered regime\. On top of this, three guarantees connect: support coverage stabilizes filtering, the stabilized filter concentrates the discrete contact posterior on coherent regimes, and mode\-pure segments admit sparse port\-Hamiltonian recovery\. The recovery error separates cleanly into filtering, derivative, mode\-impurity, and physics\-residual parts\. Three empirical findings track the same mechanism\. Under heavy occlusion the support\-safe filter stays usable while a non\-defensive proposal collapses\. On ManiSkill demonstrations and on four canonical Sawyer/BridgeData task families the discrete state forms temporally coherent contact\-regime segments that post\-hoc segmenters and mode\-free baselines miss\. On hybrid systems with known equations the mode\-conditioned sparse fit recovers the active physical terms; purely predictive baselines do not\.

## Learning Where to Simulate: Generative Active Sampling for Online PDE Surrogate Training

**Authors:** Pierre Cesar; Sofya Dymchenko; Abhishek Purandare; Bruno Raffin

**ID:** 151676 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ys4YrFCtvl>) | [PDF](<https://openreview.net/pdf?id=Ys4YrFCtvl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151676>)

Data\-driven PDE surrogates are trained with data produced by numerical PDE solvers\. However, when the surrogate's goal is to generalize across a wide range of PDE configurations \(e\.g\., initial conditions and physical coefficients\), generating a representative training set is non\-trivial\. Uniform sampling of configuration parameters often under\-represents trajectories exhibiting challenging dynamics, leading to high prediction errors and large error variance in the trained surrogate\. Online training, where data generation and surrogate training are coupled, offers a natural advantage by allowing solver parameters to be steered on\-the\-fly\. To efficiently exploit this capability, we introduce Online Generative Active Sampling \(OGAS\), an active learning method that reactively learns the relationship between configuration parameters and surrogate performance to control the sampling distribution\. OGAS trains a fast diffusion model in parallel to the surrogate to act as a conditional sampler, mapping a surrogate\-derived difficulty signal \(e\.g\., loss or uncertainty\) to configuration parameters\. By actively drawing target signals from a prior biased toward high difficulty, OGAS continuously steers data generation toward challenging regimes without delaying the training workflow\. We evaluate OGAS across 2D PDEs with distinct challenging dynamics \(Kuramoto\-Sivashinsky, Navier\-Stokes, Gray\-Scott\) and up to 308 parameters, using multiple surrogate architectures\.  Across all settings, OGAS consistently improves tail statistics, yielding substantial reductions in errors above the 99th percentile and overall error dispersion compared to uniform sampling\. While prioritizing challenging trajectories introduces a trade\-off with average error, OGAS effectively ensures worst\-case reliability of trained surrogates with negligible wall\-time overhead\.

## Sublinear Time Quantum Sensitivity Sampling

**Authors:** Zhao Song; David Woodruff; Lichen Zhang

**ID:** 153280 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MR3GKoOm6C>) | [PDF](<https://openreview.net/pdf?id=MR3GKoOm6C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153280>)

We present a unified framework for quantum sensitivity sampling, extending the advantages of quantum computing to a broad class of classical approximation problems\. Our unified framework provides a streamlined approach for constructing coresets and offers significant runtime improvements in applications such as clustering, regression, and low\-rank approximation\. Our contributions include: \* \*\*$k$\-median and $k$\-means clustering:\*\* For $n$ points in $d$\-dimensional Euclidean space, we give an algorithm that constructs an $\\epsilon$\-coreset in time $\\widetilde O\(n^\{0\.5\}dk^\{2\.5\}\~\\mathrm\{poly\}\(\\epsilon^\{\-1\}\)\)$ for $k$\-median and $k$\-means clustering\. Our approach achieves a better dependence on $d$ and constructs smaller coresets when $d\\gg k$ that only consist of points in the dataset, compared to recent results of \[Xue, Chen, Li and Jiang, ICML'23\]\. \* \*\*$\\ell\_p$ regression:\*\* For $\\ell\_p$ regression problems $\\min\_\{x\\in \\mathbb\{R\}^d\}\\\\\|Ax\-b\\\\\|\_p$ where $A\\in \\mathbb\{R\}^\{n\\times d\}$ and $b\\in \\mathbb\{R\}^n$, we construct an $\\epsilon$\-coreset of size $\\widetilde O\_p\(d^\{\\max\\\\\{1, p/2\\\\\}\}\\epsilon^\{\-2\}\)$ in time $\\widetilde O\_p\(n^\{0\.5\}d^\{\\max\\\\\{0\.5, p/4\\\\\}\+1\}\(\\epsilon^\{\-3\}\+d^\{0\.5\}\)\)$, improving upon the prior best quantum sampling approach of \[Apers and Gribling, QIP'24\] for $p\\in \(2, 22\]$\. \* \*\*Low\-rank approximation with Frobenius norm error:\*\* We introduce the first quantum sublinear\-time algorithm for low\-rank approximation that approximates the best rank\-$k$ solution to a matrix $A\\in \\mathbb\{R\}^\{d\\times n\}$ and does not rely on data\-dependent parameters, and runs in $\\widetilde O\(n^\{0\.5\}dk^\{0\.5\}\\epsilon^\{\-1\}\)$ time\. Additionally, we present quantum sublinear algorithms for kernel low\-rank approximation and tensor low\-rank approximation, broadening the range of achievable sublinear time algorithms in randomized numerical linear algebra\.

## GeoTransolver: Learning Physics on Irregular Domains using Multi\-scale Geometry Aware Physics Attention Transformer

**Authors:** Corey Adams; Rishikesh Ranade; Sheel Nidhan; Ram Cherukuri; Sanjay Choudhry; Mohammad Amin Nabian; Deepak Akhare

**ID:** 152562 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SDYGxHUdHE>) | [PDF](<https://openreview.net/pdf?id=SDYGxHUdHE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152562>)

We present GeoTransolver, a multiscale geometry\-aware physics attention transformer for Computer Aided Engineering \(CAE\)\. GeoTransolver extends the Transolver backbone with GALE \(Geometry\-Aware Latent Embeddings\) attention, which pairs physics\-aware self\-attention on learned state slices with cross\-attention to a shared geometry and global context computed via multi\-scale ball queries \(inspired by Domino\) and reused in every block\. Implemented and released in NVIDIA PhysicsNeMo, GeoTransolver persistently projects geometry and global parameters, into physical state spaces to anchor computations to domain structure and operating regimes\. We benchmark on DrivAerML, SHIFT\-SUV, and SHIFT\-Wing against Domino, Transolver \(PhysicsNeMo implementation\), and literature\-reported AB\-UPT, evaluating drag/lift $R^2$ and relative $L\_1$ errors on field variables\. As an additional nonlinear structural mechanics application, we also report Transolver and GeoTransolver results on bumper\-beam and full\-vehicle Body\-in\-White \(BIW\) crash\-dynamics benchmarks, evaluating relative $L\_2$ trajectory error and probe\-level kinematic MSE\. GeoTransolver delivers improved accuracy, robustness to geometry and regime shifts, and favorable data efficiency; we include DrivAerML ablations and qualitative contour and design\-trend results, advancing operator learning for high\-fidelity surrogates on complex, irregular, non\-linear domains\.

## Physics Unrolled Neural Operator for Wireless Field Modeling

**Authors:** Rafid Umayer Murshed; Saif U Rahman; Mingyue Tang; Elahe Soltanaghai

**ID:** 156055 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0nEQU1V42h>) | [PDF](<https://openreview.net/pdf?id=0nEQU1V42h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156055>)

Radio maps are essential for wireless decision\-making tasks such as access\-point placement, coverage planning, and localization, but their fine spatial details are governed by complex propagation effects and are costly to simulate accurately\. Machine learning offers a path to high\-fidelity radio\-map prediction without running expensive high\-fidelity simulations for every scene\. However, generating high\-quality training labels at scale is also difficult: the affordable labels come from finite\-ray simulations, which are richer than low\-fidelity inputs but carry residual Monte Carlo noise\. We address this challenge with Physics\-Unrolled Hybrid Neural Operator \(PU\-HNO\), a three\-stage cascade that predicts high\-fidelity indoor radio maps from low\-fidelity ray\-tracing outputs and scene priors by progressively capturing reflection, diffraction, and scattering effects, rather than treating radio maps as generic images\. We prove that, under conditionally unbiased label noise, the model can learn stable propagation structure and outperform its own training labels\. Experiments across diverse floorplans show that PU\-HNO outperforms image\-to\-image baselines, wireless learning models, and monolithic neural operators across both image\-quality and wireless deployment metrics\.

## SAFTAC: Simulation\-Augmented Fine\-Tuning of Open\-Source LLMs for Analog Circuit Design

**Authors:** Junsheng Huang; Yifan Sun; Zhuoer Zhang; Ning Wei; Yening Liu; Michael Molter; Pavan Kumar Hanumolu; Elyse Rosenbaum; Bin Hu; Huan Zhang

**ID:** 155090 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8VwAj1accS>) | [PDF](<https://openreview.net/pdf?id=8VwAj1accS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155090>)

Circuit design for analog integrated circuits \(ICs\) is challenging because circuit topology, device sizing, and circuit performance are tightly coupled\. Existing large language model \(LLM\)\-based methods either rely on inference\-time correction around frozen models or train on limited circuit types without directly using simulation outcomes as training signals\. A key bottleneck is that existing datasets do not provide sufficient task information for training LLMs on end\-to\-end specification\-conditioned design\. To fill this gap, we first construct a large\-scale simulation\-grounded dataset with 8,626 design tasks across 10 different types of analog circuits, where each task includes a textual description, labeled I/O ports, loading condition, target specifications, a testbench, and a reference netlist\. Using this dataset, we present SAFTAC, a simulation\-augmented fine\-tuning framework that trains LLMs to generate and revise analog circuit design\. SAFTAC combines three\-stage supervised fine\-tuning, which progressively builds the capabilities required for analog circuit design and feedback\-guided correction, with simulation feedback\-augmented reinforcement fine\-tuning, which further optimizes models using simulation\-grounded rewards\. We evaluate SAFTAC under single\-pass generation and two\-pass generation with simulation feedback, showing improvements over the strongest closed\-source LLM by 15\.9\\% and 7\.8\\%, respectively\.

## Transferable, Time\-Parallel Graph Dynamics via Space\-Time Factorization

**Authors:** Wencong Yang; Chaopeng Shen; Abdolmehdi Behroozi

**ID:** 149253 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rjusfdj0um>) | [PDF](<https://openreview.net/pdf?id=rjusfdj0um>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149253>)

Time\-parallel neural operators \(FNO and successors\) have transformed PDE surrogates on regular grids\. Mesh\-based operators \(MeshGraphNets, Transolver\) extend operator learning to irregular geometries but remain autoregressive in time and trained one geometry at a time, while classical parallel\-in\-time methods converge poorly on nonlinear advection\-dominated PDEs\. We propose space\-time factorization: partition the model into local temporal operators \(learned, graph\-independent\) and a spatial mixer that propagates information across nodes without graph\-dependent learned parameters\. This structural condition restores time\-parallelism on irregular graphs and yields cross\-graph zero\-shot transfer once three information leaks—graph\-dependent weights, graph\-specific features, and graph\-correlated training distributions—are controlled\. The same protocol applies to two distinct spatial\-mixer families tested here—fixed\-spectral and learned\-attention—suggesting the principle is not tied to a single mixer choice\. We validate the principle in three domains\. On simulating floodwave propagation in river networks, a 27K\-parameter model trained on the Yangtze transfers zero\-shot to the Mississippi at $R^2=0\.998$, training $28\\times$ faster than a recurrent message\-passing baseline and scaling to $5\\times$ larger graphs\. On cross\-geometry Navier–Stokes, both Chebyshev \(SepFNO\) and Physics\-Attention \(SepTransolver\) variants reach within \~10% \(relative $L\_2$\) of a locally\-trained oracle using only 15 training geometries—to our knowledge the first demonstration of knowledge accumulation in this regime across fundamentally different topologies\. On cross\-city traffic forecasting, zero\-shot transfer reaches within 12\.9% of an oracle trained on the target city\. A consistent pattern emerges across these settings: cross\-geometry error decreases with both the number of training geometries and their relatedness to the test, with the rate of accumulation depending on the spatial mixer\. The result opens the path for pooled\-data, foundation\-style models for graph dynamics on irregular topologies\.

## TENG\-BC: Time\-Evolving Natural Gradient for High\-Accuracy Neural PDE Solvers with General Boundary Conditions

**Authors:** Hongjie Jiang; Di Luo

**ID:** 151664 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ywno1q1hWo>) | [PDF](<https://openreview.net/pdf?id=Ywno1q1hWo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151664>)

Accurately solving time\-dependent partial differential equations \(PDEs\) with neural networks remains challenging due to long\-time error accumulation and the difficulty of enforcing general boundary conditions\. We introduce TENG\-BC, a high\-precision neural PDE solver based on the Time\-Evolving Natural Gradient, designed to perform under generic boundary constraints\. At each time step, TENG\-BC performs a boundary\-aware optimization that jointly enforces interior dynamics and boundary conditions, accommodating Dirichlet, Neumann, Robin, and mixed types within a unified framework\. This formulation admits a natural\-gradient interpretation, enabling stable time evolution without delicate penalty tuning\. Across benchmarks over diffusion, transport, and nonlinear PDEs with various boundary conditions, TENG\-BC achieves solver\-level accuracy under comparable sampling budgets, outperforming conventional solvers and physics\-informed neural network \(PINN\) baselines\.

## Spectrally Parameterized Neural Inverse Reconstruction

**Authors:** Harshvardhan Takawale; Aritrik Ghosh; Nirupam Roy

**ID:** 150852 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=etBlEXilAm>) | [PDF](<https://openreview.net/pdf?id=etBlEXilAm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150852>)

In neural inverse reconstruction, the forward model is typically treated as a fixed simulator that maps a neural scene representation to measurements\. This work studies how the parameterization of the forward operator itself shapes the optimization landscape of coherent inverse problems\. We introduce Moray, a reconstruction framework built on spectrally parameterized forward operators that bypass conventional time\-domain synthesis and instead evaluate measurements directly through closed\-form spectral kernels\. This parameterization induces a substantially shorter and better\-conditioned differentiable graph compared to the time\-domain approaches\. We further introduce Phase\-Coherent Manifold Parameterization, a scene representation that jointly learns scene reflectivity and a deformable surface manifold, allowing the reconstruction to adapt to geometric deviations from the assumed imaging plane and thereby reducing common artifacts in coherent reconstruction\. We instantiate these ideas for 77 GHz radar imaging using real measurements from a synthetic\-aperture mmWave system\. Across multiple challenging scenes, Moray consistently improves reconstruction fidelity, suppresses background artifacts, and degrades more gracefully under data limitations\.More broadly, the results suggest that, in neural inverse problems, exposing appropriate analytical structure of the sensing physics to the optimizer can be as important as the choice of neural representation itself\.

## Latent Generative Solvers for Generalizable Long\-Term Physics Simulation

**Authors:** Zituo Chen; Sili Deng

**ID:** 152793 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QJUqXlzW1d>) | [PDF](<https://openreview.net/pdf?id=QJUqXlzW1d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152793>)

Reliable physics simulation requires both broad generalization across heterogeneous PDE families and stability under long autoregressive rollouts\. Current neural solvers rarely provide both\. Deterministic operators accumulate rollout error, while probabilistic solvers typically remain tied to a single PDE family or a short prediction horizon\. We address this gap with the \\textbf\{Latent Generative Solver\} \(LGS\), which couples a Physics VAE \(PhyVAE\) with a Pyramidal Flow\-Forcing Transformer \(PFlowFT\)\. PhyVAE compresses states from twelve PDE families into a shared \\emph\{physical manifold\}, separating dynamics\-relevant structure from the ambient state space\. PFlowFT then predicts the next latent state through input\-noised flow matching, yielding a sufficient\-condition contraction mechanism that explains improved autoregressive rollout stability\. Pretrained on a 2\.5\\,M\-trajectory, 16\-system corpus at $128^2$ resolution, LGS obtains the lowest relative $L\_2$ error \(L2RE\) on 15 of 16 systems at both 5\- and 10\-step rollout\. At 20 steps, LGS reduces the L2RE from $56\.1\\%$ to $\\mathbf\{30\.2\\%\}$ against matched deterministic and adapted generative baselines, while requiring $\\mathbf\{13\}$\-\-$\\mathbf\{77\\times\}$ less recurrent dynamics\-step compute\. On a held\-out $256^2$ Kolmogorov flow, LGS reduces the 1\-step L2RE from $0\.398$ to $0\.129$ within five finetuning epochs; U\-AFNO achieves only $0\.653$ to $0\.343$ under the same protocol\.

## Axiomatic World Modeling for Physics Reasoning

**Authors:** Xinye Yang; Zhenyang Liu; Yuxuan Wang; Yuanyuan Lei

**ID:** 150823 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f21HhDeBNh>) | [PDF](<https://openreview.net/pdf?id=f21HhDeBNh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150823>)

Recent research\-level physics\-reasoning benchmarks for LLMs reveal a failure mode that lies not in knowledge or execution, but in modeling the world being reasoned about\. When faced with unseen problem setups, models often silently alter given quantities, fabricate laws, or inject unstated assumptions to force the problem into familiar patterns, and subsequent reasoning then proceeds within this corrupted world\. We define this premise\-level divergence as modeling drift: the gap between a model's internal axiomatic world model \(AWM\) and the true physical world specified in the problem\. Although RLVR and PRM have yielded substantial gains in mathematics and code, their reward shapes do not directly supervise world modeling in axiomatic domains such as physics\. We propose Reinforcement Learning with Axiomatic World Modeling \(RLAWM\), which optimizes the policy by penalizing divergence between its inferred axiomatic world model and the true physics world\. RLAWM probes physics reasoning at two hierarchical levels \(modeling and solving\), each scored by a physically grounded reward\. The modeling reward targets abstract knowledge formulation, evaluating whether the model captures the true axiomatic world before attempting calculation\. The solving reward targets instantiated knowledge reasoning, checking whether the model's concrete derivation remains consistent with the axiomatic world\. This two\-level structure separates what world the model believes it is reasoning in from how it reasons within that world\. The framework operates exclusively during training, with no extra cost during inference\. RLAWM improves performance by up to $\+10\.8$ points on PhysReason and $\+5\.2$ on PHYSICS over the baseline\. RLAWM also exhibits strong zero\-shot generalization, yielding a $2\.45\{\\times\}$ gain over the strongest baseline on unseen physics problems\.

## Unsupervised Physics Informed Decomposition of Incomplete Time\-Resolved Spectroscopy

**Authors:** Tom Muir; Qifeng Liu; Mohammadrahim Kazemzadeh; William Mills; Ales Leonardis; Huabing Yin; Alexander Krull

**ID:** 154646 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C4YjfEPhRx>) | [PDF](<https://openreview.net/pdf?id=C4YjfEPhRx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154646>)

Raman spectroscopy is often hindered by strong autofluorescence backgrounds, which are typically handled by waiting for fluorescence to bleach before recording the Raman spectrum\.  Here, we instead show that short, incomplete recordings of the bleaching process already contain enough information to recover the underlying Raman signal\. We present the first unsupervised model that operates on short, incomplete, variable\-length sequences of time\-resolved spectra, decomposing them into Raman spectra and autofluorescence components while simultaneously removing measurement noise\. Our VAE\-based method simultaneously learns \(i\) a bank of fluorophore spectra comprising the baseline, \(ii\) a model of the measurement noise, and \(iii\) the distribution of Raman spectra and decay behavior\. We evaluate our method on spectral reconstruction and downstream peak detection, where it outperforms state\-of\-the\-art approaches on multiple simulated benchmarks as well as on a newly collected real\-world dataset of spectral time series\.  We further show that fluorescence decay dynamics themselves contain discriminative information that may be exploited in future work\.

## Free energy Estimation on Any State Space

**Authors:** Jiajun He; Zijing Ou; Francisco Vargas; Yingzhen Li; José Miguel Hernández\-Lobato; Carles Domingo i Enrich; Yuanqi Du

**ID:** 150686 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gGNQM7Y8E3>) | [PDF](<https://openreview.net/pdf?id=gGNQM7Y8E3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150686>)

Free energy estimation is a fundamental yet challenging problem, from physics to statistics\. Classical approaches rely on thermodynamic transformations, ranging from direct estimation, quasistatic integration, to finite\-time averaging\. Recent work learns neural transports to significantly accelerate the efficiency in the finite\-time regime\.  In this paper, we generalize this framework to arbitrary state spaces\.  Building on this view, we develop a generalized neural transport learning approach for efficient estimation\. Experiments validate the effectiveness and efficiency of the proposed method beyond continuous settings, extending to discrete and multimodal spaces as well as autoregressive settings\.

## Quantum Speedup of Multi\-armed Bandits at Scale by Tackling Memory Decoherence

**Authors:** Rohit Muralitharan; Mark Squillante; Chen Wang; Xuchuang Wang; Chai Wah Wu

**ID:** 154155 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FpwVLxul2m>) | [PDF](<https://openreview.net/pdf?id=FpwVLxul2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154155>)

Recent advances in online learning have achieved an $O\(n/\\Delta\_\{\[2\]\}\)$ query complexity in quantum $n$\-arm multi\-armed bandits \(MABs\) for best\-arm identification, which represents a quadratic speedup over their classical counterparts\.     Here and throughout, $\\Delta\_\{\[2\]\}$ is the gap between the mean of the best and second\-best arms\.     However, the implementations of these algorithms remain on a small scale due to various aspects of quantum hardware restrictions\.     One of the most significant restrictions is \\emph\{memory decoherence\}, in which the qubits quickly lose information after a short period of time\.      Memory decoherence can occur at \\emph\{intra\-circuit\} and \\emph\{inter\-circuit\} levels\. Intra\-circuit decoherence happens often in near\-term quantum computers, where the noise becomes overwhelming when the circuit is deep\.     On the other hand, inter\-circuit decoherence captures future quantum machines, where a quantum memory is promising, but objects stored in the memory for too long can still become decoherent\. In this paper, we present a comprehensive treatment of both memory decoherence problems\. For inter\-circuit decoherence, we derive a framework based on streaming bandits, and we obtain an algorithm that finds the best arm with high constant probability using $O\(n/\\Delta\_\{\[2\]\}\)$ queries and an $O\(\\log\{n\}\)$ decoherence window\. This is the first quantum algorithm for MABs that achieves an $o\(n\)$ decoherence window, which represents an exponential improvement\.      For intra\-circuit decoherence, we observe that only $O\(1\)$\-depth circuits can be used to avoid significant decoherence\.      Therefore, we devise various hardware optimizations and a destructive SWAP test subroutine to speed up the empirical performance\.     On the IBM Q System One machine with 127 qubits, our implementation scales the quantum MABs to over $1000$ arms, and our algorithms consistently achieve significant efficiency improvements over classical bandit algorithms in both physical experiments and computer simulations\.

## Neural Harmonic Measure Operator

**Authors:** Jinjin He; Sinan Wang; Yuchen Sun; Bo Zhu

**ID:** 151113 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=csUQ0IwX0R>) | [PDF](<https://openreview.net/pdf?id=csUQ0IwX0R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151113>)

We introduce \*\*Neural Harmonic Measure Operator \(NHMO\)\*\*, a neural solver for elliptic PDE problems on variable\-shape domains\. The harmonic measure of a domain is the boundary probability distribution that, integrated against any boundary data, returns the Dirichlet Laplace solution\. It depends only on the geometry, not on the boundary data\. NHMO parameterizes this measure as a transformer\-based boundary kernel supervised by Walk\-on\-Spheres exit samples, so one trained kernel handles different boundary value on a shape with no retraining\. We extend it to Poisson via a classical decomposition, with an auxiliary network amortizing the source\-induced correction and avoiding the singular volume quadrature that breaks direct evaluation\. At inference, new boundary values and new sources both yield PDE solutions by re\-integration against the fitted kernel and lift, with no retraining\. NHMO improves over four prior baselines on the MCB\-B 3D variable\-shape Poisson benchmark across all five categories, and is competitive with major neural\-operator baselines on a controlled 2D testbed\.

## Neural Field Thermal Tomography: A Differentiable Physics Framework for Non\-Destructive Evaluation

**Authors:** Tao Zhong; Yixun Hu; Dongzhe Zheng; Aditya Sood; Christine Allen\-Blanchette

**ID:** 149376 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qWyXszanTu>) | [PDF](<https://openreview.net/pdf?id=qWyXszanTu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149376>)

Inverse problems for stiff parabolic partial differential equations \(PDEs\), such as the inverse heat conduction problem \(IHCP\), are severely ill\-posed: the forward map rapidly damps high\-frequency interior structure before it reaches the boundary\. Soft\-constrained physics\-informed neural networks \(PINNs\), which embed the PDE as a residual penalty, suffer from gradient pathology in this regime and tend to fit boundary measurements while leaving the interior field essentially untouched\. We propose Neural Field Thermal Tomography \(NeFTY\), a hard\-constrained neural field framework for label\-free three\-dimensional inverse heat conduction\. NeFTY represents the unknown diffusivity as a continuous coordinate\-based neural network, and at every optimization step passes the candidate field through a differentiable implicit\-Euler heat solver with harmonic\-mean interface flux, so that the governing PDE holds exactly on the discretization rather than as a soft penalty\. Adjoint gradients propagate the surface reconstruction error back to the network weights at solver\-level memory cost, making test\-time inversion tractable on a single GPU\. Across synthetic 3D benchmarks, NeFTY substantially outperforms soft\-constrained PINN variants and a voxel\-grid baseline on label\-free volumetric recovery, and it transfers to real thermography data, surpassing classical signal\-processing baselines in both defect segmentation and depth estimation\.

## Breakeven complexity: A new perspective on neural partial differential equation solvers

**Authors:** Yijing Zhang; Nicholas Roberts; Tanya Marwah; Misha Khodak

**ID:** 148644 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wBeG0ytI2l>) | [PDF](<https://openreview.net/pdf?id=wBeG0ytI2l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148644>)

Neural surrogate solvers of partial differential equations \(PDEs\) promise dramatic speedups over numerical methods, especially in scenarios requires many solves\. However, current accuracy\-based evaluations do not fully consider two central issues: \(i\) neural solvers incur substantial up\-front costs for data generation, training, and tuning; and \(ii\) classical solvers can also generate low\-fidelity solutions at a sufficiently low simulation cost\. To explicitly account for these realities and fully incorporate end\-to\-end costs, we propose an evaluation framework centered on breakeven complexity , a metric that counts the forward solves before a learned solver is cost\-effective relative to an error\-equivalent traditional solver\. To evaluate this measure, we apply scaling laws to determine how much training budget to allocate to data generation and discuss how to achieve smooth error\-matching in diverse settings\. We evaluate the breakeven complexity of many modern neural PDE solvers on three PDEs on 2D periodic domains from APEBench and a novel benchmark of flows past multiple obstacles generated by the GPU\-native PyFR code\. Among other findings, our results suggest that neural PDE solvers will be more effective on problems as problems get harder in terms of cost, dimension, rollout, physics regime \(e\.g\. higher Re\), etc\.

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

## GLOBE: Accurate Surrogates for Boundary\-Driven PDEs via Domain\-Inspired Architectures and Equivariance

**Authors:** Peter Sharpe

**ID:** 151666 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YvUcvzejJe>) | [PDF](<https://openreview.net/pdf?id=YvUcvzejJe>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151666>)

We introduce GLOBE, a neural surrogate for boundary\-driven, homogeneous, weakly nonlinear PDEs that draws inductive bias from boundary\-element methods and equivariant ML, representing solutions as superpositions of learnable Green's\-function\-like kernels evaluated from boundary faces to targets\. The architecture is translation\-, rotation\-, and parity\-equivariant; discretization\-invariant; and units\-invariant via rigorous nondimensionalization\. On AirFRANS \(steady incompressible RANS over NACA airfoils\), GLOBE reduces mean\-squared error by roughly $200\\times$ relative to dataset baselines and $50\\times$ relative to the next\-best ML surrogate on interpolation tasks, with $7\\times$–$70\\times$ improvements over the next\-best surrogate in low\-data regimes\. The compact $\{\\sim\} 117 \\rm k$\-parameter model evaluates fields at arbitrary points, handles non\-watertight meshes, and generalizes under Reynolds number and angle\-of\-attack distribution shifts\. We further introduce a hierarchical Barnes\-Hut\-style acceleration that exploits the kernel's guaranteed decay of long\-range influences to reduce evaluation cost from quadratic to near\-linear in the number of boundary elements, with a tunable accuracy parameter that recovers exact dense evaluation in its strict limit\. We demonstrate scalability to 3D industrial geometries via a proof\-of\-concept on DrivAerML car aerodynamics\. Together these results show that physics\-inspired inductive biases yield large gains in accuracy and practicality for ML\-based surrogates of boundary\-driven PDEs while remaining tractable at industrial 3D scales\.

## Dynamic Quadtree Tokenization for Autoregressive PDE Forecasting

**Authors:** Yilin Zhuang; Noah Zambrano; Karthik Duraisamy

**ID:** 152814 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QEBPUFXUHr>) | [PDF](<https://openreview.net/pdf?id=QEBPUFXUHr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152814>)

The quadratic attention cost of Vision Transformers \(ViTs\) forces a sharp compromise between discretization and rollout horizon, and binds tightest in the fine\-scale PDE regime where shocks, reaction fronts, and material interfaces occupy a small, time\-varying fraction of the domain\. Further, conventional neural surrogates do not adapt to localized features dynamically\. We propose WAMRViT, a ViT that tokenizes its input as a balanced quadtree under a wavelet\-inspired refinement criterion, encodes position and refinement level jointly via a 3D rotary positional embedding with a soft level axis, and regrids in cell space at inference to remain stable over long rollouts\. A multi\-scale variant additionally keeps each leaf at its native source resolution and defers the per\-level resolution differential to the model\. Unlike prior adaptive\-tokenization work, the tokenizer imposes no a priori token count; we evaluate under fully adaptive topology over long autoregressive rollouts; and WAMRViT is the first machine\-learning surrogate to natively tokenize multi\-level Adaptive Mesh Refinement \(AMR\) data\. We demonstrate that on uniform\-grid datasets, WAMRViT exceeds a finest\-patch uniform backbone on the region of interest while using a fraction of the tokens, with a structural interpolation cost on the global metric that the multi\-scale variant closes at the initial rollout steps\. On a complex AMR combustion problem whose extremely fine scale features uniform\-grid baselines cannot represent natively and must project onto a coarser grid, WAMRViT operates directly on the adaptive cells and substantially reduces finest\-level error at matched parameters\. Code: https://anonymous\.4open\.science/r/wamrvit\-review\-74E1

## KerONet: A Single Softmax Readout Suffices for Physics\-Informed Operator Learning

**Authors:** Seth Dale; Carolyn Koh; Dinesh Mehta

**ID:** 150115 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kaHFJVwIAG>) | [PDF](<https://openreview.net/pdf?id=kaHFJVwIAG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150115>)

Operator learning has experienced a shift toward attention\-based architectures\. This trend has more recently extended to physics\-informed operator learning, where stacked cross\-attention blocks add considerable computational cost relative to the foundational PI\-DeepONet\. We ask whether this complexity is necessary\. Starting from the DeepONet branch\-trunk decomposition, we replace the bilinear readout with a single softmax\-weighted readout in which the trunk emits a query vector and the branch emits a set of key\-value pairs—a structure we show admits universal approximation via reduction to a simplex\-bilinear form\. The resulting architecture, KerONet, uses no iterated attention, layer normalization, or explicit learnable projection matrices\. Under a unified hyperparameter optimization protocol with a strict $200\{,\}000$\-parameter budget, we evaluate KerONet alongside iterated\-attention architectures \(PIT, PINTO\) and PI\-DeepONet on four canonical 1D PDEs whose solutions range from globally smooth to sharply localized\. KerONet outperforms PIT and PINTO on every PDE, across all five seeds, in accuracy \(approximately $2$–$4\\times$ lower rel\-$L^2$ error\), reproducibility \($2$–$31\\times$ lower standard deviation\), and speed \($1\.8$–$4\.4\\times$ faster training time\)\. Against PI\-DeepONet, KerONet shows substantial gains where input\-dependent localized features dominate \($2\.5$–$8\\times$ lower error on Burgers and Allen\-Cahn\) while exhibiting comparable accuracy on smoother operators \(advection and diffusion\-reaction\)–a balance the iterated\-attention architectures do not achieve\. Our findings demonstrate that iterated cross\-attention is not necessary to realize the benefits of query\-dependent feature mixing in physics\-informed operator learning\.

## S$^\{2\}$\-PINN: Stochastic Separable Physics\-Informed Neural Networks

**Authors:** Zhendong Li; Akwum Onwunta

**ID:** 149954 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lwTb5ix4w9>) | [PDF](<https://openreview.net/pdf?id=lwTb5ix4w9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149954>)

Uncertainty quantification \(UQ\) for random partial differential equations \(PDEs\) is ubiquitous in computational science and engineering\. However, classical spectral solvers for this class of problems face the curse of dimensionality, and existing neural solvers often ignore the stochastic structure that makes moments and calibration tractable\. We introduce a stochastic separable physics\-informed neural network, dubbed S$^\{2\}$\-PINN, that represents the solution $u\(t,\\mathbf\{x\},\\mathbf\{Z\}\)$ of a random PDE  with a learnable Gaussian spatial dictionary, Fourier temporal features, and a generalized polynomial chaos \(gPC\) stochastic bases, coupled by a low\-rank Canonical Polyadic \(CP\) tensor decomposition core\. The method is trained with a hybrid strong\-form and gPC\-projected residual loss\. Our theoretical analysis establishes that the separable class is dense in $L^2$ under mild conditions, and the projected residual corresponds exactly to a stochastic Galerkin constraint\. Furthermore, we show that mini\-batch projection coefficients are logarithmically dependent on the number of gPC modes, and that orthogonality penalty controls the conditioning of the learned spatial dictionary\. Using four manufactured random PDE benchmarks, we show that S$^\{2\}$\-PINN outperforms six baselines in terms of mean and variance accuracy, as well as calibration, while using significantly fewer parameters\. Further evaluations on non\-manufactured Poisson and Darcy problems, a diffusion scaling study of higher random dimensions, and two stochastic inverse problems reveal the generalization capabilities of the proposed structure\. Together, these results support stochastic separability as an effective design principle for physics\-informed neural UQ\. The code for the experiments can be found in \\href\{https://anonymous\.4open\.science/status/neurips2026\-0424\}\{https://anonymous\.4open\.science/status/neurips2026\-0424\}\.

## Ultra Fast PDE Solving via Physics Guided Few\-step Diffusion

**Authors:** Xiangrui Cindy Kong; Yueqi Wang; Haoyang Zheng; Weijian Luo; Guang Lin

**ID:** 151853 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=XQGamZ3x8F>) | [PDF](<https://openreview.net/pdf?id=XQGamZ3x8F>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151853>)

Diffusion\-based models have demonstrated impressive accuracy and generalization in solving partial differential equations \(PDEs\)\. However, they still face significant limitations, such as high sampling costs and insufficient physical consistency, stemming from their many\-step iterative sampling mechanism and lack of explicit physics constraints\. To address these issues, we propose \\emph\{Phys\-Instruct\}, a novel physics\-guided distillation framework which \(1\) not only compresses a pre\-trained diffusion PDE solver into a few\-step generator via matching generator and prior diffusion distributions to enable rapid sampling, \(2\) but also enhances the physics consistency by explicitly injecting PDE knowledge through a PDE distillation guidance\. Phys\-Instruct is built upon a solid theoretical foundation, leading to a practical physics\-constrained training objective that admits tractable gradients\. Across five PDE benchmarks, Phys\-Instruct achieves orders\-of\-magnitude faster inference while reducing PDE Error by more than 8$\\times$ compared to state\-of\-the\-art diffusion baselines\. Moreover, the resulting unconditional student model functions as a compact prior, enabling efficient and physically consistent inference for various downstream conditional tasks\.  Our results indicate that Phys\-Instruct is a novel, effective, and efficient framework for ultra\-fast PDE solving powered by deep generative models\.

## Foundation Models for Particle Accelerators

**Authors:** Mahindra Rautela; Alexander Scheinker

**ID:** 150902 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eYVHMuJhwo>) | [PDF](<https://openreview.net/pdf?id=eYVHMuJhwo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150902>)

Large\-scale scientific facilities, such as particle accelerators, are complex systems composed of thousands of interacting components that must operate collectively to support diagnostics and control, and ensure safe, reliable operation\. These facilities rely on extensive sensor networks that generate large volumes of heterogeneous, incomplete, and noisy telemetry, often sampled at different rates across subsystems\. In this paper, we adopt the foundation\-model paradigm to learn general\-purpose sensor representations from historical accelerator data through self\-supervised pretraining\. We introduce SensOFormer, a denoising masked transformer with a Perceiver\-style encoder–decoder architecture designed to handle variable sensor sets, accommodate heterogeneous sampling rates, and learn robust representations from noisy measurements\. The model is pretrained on multiple particle\-accelerator datasets and transferred to downstream tasks, including missing\-data imputation, anomaly detection, cavity identification, and fault identification\. Through extensive evaluations and comparisons, we demonstrate that a single self\-supervised model can learn reusable representations for diverse operational tasks in large\-scale scientific facilities\.

## Theory Guided and Interpretable Neural Operator Design for Partial Differential Equation Learning

**Authors:** Zeyuan Song; Zheyu Jiang

**ID:** 151006 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ddVTfTf0U6>) | [PDF](<https://openreview.net/pdf?id=ddVTfTf0U6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151006>)

Accurate numerical solutions of partial differential equations \(PDEs\) are crucial in numerous science and engineering applications\. In this work, we introduce a novel neural PDE solver named AFDONet, which incorporates neural operator learning and adaptive Fourier decomposition \(AFD\) theory for the first time into a specifically designed variational autoencoder \(VAE\) structure, to solve a general class of nonlinear PDEs on smooth manifolds\. AFDONet is the first neural PDE solver whose architectural and component design is fully guided by an established mathematical framework \(in this case, AFD theory\), turning neural operator design from an art to a science\. Thus, AFDONet also exhibits exceptional mathematical explainability and groundness, and enjoys several desired properties\. Furthermore, AFDONet achieves outstanding solution accuracy and competitive computational efficiency in several benchmark problems\. In particular, thanks to its deep connections with AFD theory, AFDONet shows superior performance in solving PDEs on i\) arbitrary \(Riemannian\) manifolds, and ii\) datasets with sharp gradients\. Overall, this work presents a new paradigm for designing explainable neural operator frameworks\.

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

## Quantum Safe Stochastic Linear Bandits

**Authors:** Ruizhe Zhang; Junyi Wu; Guang Lin

**ID:** 148669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w0Ou0Qeg5H>) | [PDF](<https://openreview.net/pdf?id=w0Ou0Qeg5H>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148669>)

We initiate the study of safe stochastic linear bandits under quantum feedback models\.  The learner must maximize an unknown linear reward while satisfying unknown linear constraints at every interaction\.  Under coherent unitary access to the joint reward\-and\-constraint distribution, we develop QRS\-COLTS, a staged quantum analog of constrained linear Thompson sampling\.  With high probability, QRS\-COLTS plays only feasible actions and achieves regret polylogarithmic in the quantum query budget; an isotropic multivariate estimator reduces the vector\-feedback cost from linear to square\-root dependence on the number of constraints, up to logarithmic factors\.  We also formulate a stronger query\-weighted coherent\-exploration model with a safe\-action bomb flag\.  In this model, the learner may query action superpositions, the bomb provides exact but dangerous safe\-set access, and regret is charged by the action weights in the query state\.  We present a quantum algorithm, BCO\-QLinTS, that uses bomb\-certified quantum convex optimization to select safe actions directly, thereby avoiding the need to estimate the constraint matrix\.  Its query\-weighted regret is polylogarithmic in the horizon, with a bomb\-safe optimization overhead that depends only polynomially on the number of constraints\.

## OpInf\-LLM: Parametric PDE Solving with LLMs via Operator Inference

**Authors:** Zhuoyuan &amp;amp;quot;Jacob&amp;amp;quot; Wang; Hanjiang Hu; Xiyu Deng; Saviz Mowlavi; Yorie Nakahira

**ID:** 156747 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156747>)

Solving diverse partial differential equations \(PDEs\) is fundamental in science and engineering\. Large language models \(LLMs\) have demonstrated strong capabilities in code generation, symbolic reasoning, and tool use, but reliably solving PDEs across heterogeneous settings remains challenging\. Prior work on LLM\-based code generation and transformer\-based foundation models for PDE learning has shown promising advances\. However, a persistent trade\-off between execution success rate and numerical accuracy arises, particularly when generalization to unseen parameters and boundary conditions is required\. In this work, we propose OpInf\-LLM, an LLM parametric PDE solving framework via operator inference\. The proposed framework leverages small amounts of solution data to enable accurate prediction of diverse PDE instances, including unseen parameters and configurations, and provides seamless integration with LLMs for natural language task specification and physics\-based reasoning of proper feature parameterization\. Its low computational demands and unified solution pipeline further enable a high execution success rate across heterogeneous settings, opening new possibilities for generalizable reduced\-order modeling in LLM\-based PDE solving\.

## Neural\-Corrected Operator Learning for Homogenization and Inverse Design

**Authors:** Guangyu Nie; Yang Jiao; Yi Ren

**ID:** 154855 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ANlPXuz3kn>) | [PDF](<https://openreview.net/pdf?id=ANlPXuz3kn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154855>)

In the context of computational materials science, analytical homogenization theories, such as Strong Contrast Expansion \(SCE\), develop PDE\-induced power expansions that map microstructural statistics of material samples to their macroscopic effective properties\. However, low\-order truncations of such expansions for computational feasibility often trade off prediction accuracy, especially when high\-order correlations, finite\-resolution effects, or strong contrast regimes become important\. While learned residual surrogates, e\.g\., neural operators, can alleviate this tradeoff, they do not ensure reliable inference of structure\-property sensitivities, hampering downstream material design tasks\. To this end, we propose Neural\-Corrected Operator \(NCO\) that learns a correction directly to the analytical PDE kernel to compensate for the low\-order truncation, and show that NCO intrinsically bounds sensitivity inferences\.  We evaluate NCO on structure\-property prediction and inverse\-design tasks for heterogeneous bi\-phase composite materials governed by linear second\-order PDEs\. NCO improves the accuracy of low\-order SCE models for structure\-property prediction and produces sensitivities that facilitate more effective microstructure design optimization than output\-level residual baselines\.

## Physics\-Conditioned Video Diffusion with Kinematic Priors for Fusion Capsule Polishing

**Authors:** Shashank Galla; Abhishek Hanchate; Monika Biener; Suhas Bhandarkar; Satish Bukkapatnam

**ID:** 149301 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rDsuTZxMP3>) | [PDF](<https://openreview.net/pdf?id=rDsuTZxMP3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149301>)

Video diffusion models can generate realistic process videos, but using them as controllable surrogates for industrial systems remains difficult when key control variables are only partially observable and no simulator or differentiable physics model is available\. We study this regime in inertial confinement fusion \(ICF\) target capsule polishing, where surface defects can degrade fusion yield\. The dynamics are governed by the polishing speed $\\omega\_p$ and capsule\-pad slip $S\_C$\. While capsule motion can be monitored from video, $S\_C$ is only indirectly observable\. Using only an analytical kinematic model, we adapt a frozen Stable Video Diffusion \(SVD\-xt\) backbone via LoRA and condition the generation on Fourier\-encoded physics parameters $\(\\omega\_p, S\_C\)$\. Two training objectives operate on latent frame\-difference dynamics: \(i\) a batch level correlation loss aligning them with the analytical sliding speed, and \(ii\) a stratified ratio\-matching loss that, conditioned on $\\omega\_p$, isolates slip structure from the dominant $\\omega\_p$\-driven variance\. We evaluate physics consistency by tracking capsule motion in generated videos, inverting the kinematic model, and measuring rank agreement under a physical validity gate\.  For speed, rank accuracy exceeds $0\.97$ on real data; for slip, it reaches $0\.735$ with Spearman $\\ge 0\.50$ on synthetic data\.  Overall, the results suggest a practical recipe for controllable industrial video surrogates when only low\-dimensional analytical kinematics are available\.

## Discovering Symbolic Differential Equations with Symmetry Invariants

**Authors:** Jianke Yang; Manu Bhat; Bryan Hu; Yadi Cao; Nima Dehmamy; Robin Walters; Rose Yu

**ID:** 156742 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156742>)

Discovering symbolic differential equations from data uncovers fundamental dynamical laws underlying complex systems\. However, existing methods often struggle with the vast search space of equations and may produce equations that violate known physical laws\. In this work, we address these problems by introducing the concept of symmetry invariants in equation discovery\. We leverage the fact that differential equations admitting a symmetry group can be expressed in terms of differential invariants of symmetry transformations\. Thus, we propose to use these invariants as atomic entities in equation discovery, ensuring the discovered equations satisfy the specified symmetry\. Our approach integrates seamlessly with existing equation discovery methods such as sparse regression and genetic programming, improving their accuracy and efficiency\. We validate the proposed method through applications to various physical systems, such as Darcy flow and reaction\-diffusion, demonstrating its ability to recover parsimonious and interpretable equations that respect the laws of physics\.

## Lie Generator Networks for Nonlinear Partial Differential Equations

**Authors:** Shafayeth Jamil; Rehan Kapadia

**ID:** 155016 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9C9CBCbkzx>) | [PDF](<https://openreview.net/pdf?id=9C9CBCbkzx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155016>)

Most physical systems are governed by nonlinear partial differential equations, yet the analytical tools that make linear systems transparent, such as eigenspectra, dispersion relations and modal decomposition, remain unavailable in nonlinear settings\. We introduce Lie Generator Network\-Koopman \(LGN\-KM\), a neural operator that lifts nonlinear dynamics into a linear latent space and learns the continuous\-time Koopman generator through the decomposition $L\_k = S \- D\_k$, where $S$ is skew\-symmetric \(conservative coupling\) and $D\_k$ is positive\-definite diagonal \(mode\-selective dissipation\)\. The decomposition guarantees stability by construction and exposes the eigenstructure directly, making linear\-systems analysis available on a nonlinear PDE\. On 2D Navier\-Stokes turbulence, the generator recovers a complete multi\-branch dispersion relation and the viscous dissipation scaling $\\mathrm\{Re\}\(\\lambda\) \\propto \-\|k\|^2$ from trajectory data alone, with no physics supervision\. The same architecture recovers the analogous diffusive scaling on FitzHugh\-Nagumo reaction\-diffusion without modification\. Independently trained models at different regimes show matched gauge\-invariant spectral structure\. The architecture additionally enables long\-horizon stability, $O\(1\)$ continuous\-time evaluation, and physics\-\-informed cross\-regime model transfer\.

## Neural Modal Decomposition: Architectural Priors from Observables

**Authors:** Juho Park; Kaushik Sengupta

**ID:** 149285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rRvz8kblVv>) | [PDF](<https://openreview.net/pdf?id=rRvz8kblVv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149285>)

Many engineering building blocks behave as multi\-port linear time\-invariant systems\. RF cavities, photonic devices, and superconducting quantum chips, despite their different underlying physics, all share a common mathematical structure for their port\-level response\. Each entry of the response matrix is a sum of contributions from a small number of intrinsic resonant modes, the pole\-residue form\. A model capable of predicting such responses for arbitrary geometries and arbitrary port configurations, while simultaneously extracting the underlying eigenmode structure, would therefore establish a foundational design principle spanning all these domains\. We propose a neural framework that learns this modal decomposition end\-to\-end, supervised only by system\-level observables and without supervising the modal parameters themselves\. The architecture decomposes into a port\-independent pole predictor and two port\-dependent coupling predictors whose outputs are combined entry\-wise, separating intrinsic from port\-dependent features\. This factorization yields a single trained model that generalizes to port counts unseen during training, dissolving the $\\mathcal\{O\}\(N^2\)$ scaling barrier of direct regression\. Despite no modal supervision, the freely\-parameterized poles converge to physically meaningful eigenmodes, verified by cross\-validation against the AAA rational approximation algorithm\. We instantiate the framework in radio\-frequency electromagnetic surrogate modeling\. A model trained only on 2\-port data accurately predicts $N$\-port responses unseen during training\.

