# Probabilistic Methods / Gaussian Processes

概率方法 / 高斯过程

19 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Graph and Simplicial Complex Prediction Gaussian Process via Hodgelet Representations

**Authors:** Mathieu Alain; So Takao; Bastian Rieck; Xiaowen Dong; Emmanuel Noutahi

**ID:** 150871 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ekcAe9KkIt>) | [PDF](<https://openreview.net/pdf?id=ekcAe9KkIt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150871>)

Predicting labels for graph\-structured data is crucial in many scientific applications\. Recently, Gaussian processes \(GPs\) with graph\-level inputs have been proposed as flexible, non\-parametric models for classification tasks\. In this work, we extend this framework to regression tasks and simplicial complexes \(SCs\), enabling edge\-level attributes and attributes supported on higher\-order simplices\. Drawing on the rich literature on Hodge theory in machine learning, we enhance the resulting SC representations via the Hodge decomposition, capturing homological information such as holes\. We introduce Hodgelet representations as rich, learnable topological descriptors of simplicial complexes and show that our framework improves predictions across various applications\. This paves the way for broader use of GPs in graph\-level and SC\-level prediction tasks\.

## Conditioning Gaussian Processes on Almost Anything

**Authors:** Henry Moss; Lachlan Astfalck; Tom Cowperthwaite; Colin Doumont; Samuel Willis; Christopher Nemeth; Philipp Hennig; Andrew Zammit\-Mangion

**ID:** 155789 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2tEtU2vxsj>) | [PDF](<https://openreview.net/pdf?id=2tEtU2vxsj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155789>)

Gaussian processes \(GPs\) offer a principled probabilistic model over functions, but exact inference is restricted to the linear\-Gaussian regime\. We establish an explicit equivalence between GPs and a class of linear diffusion models, recasting predictive sampling as an ODE with closed\-form Gaussian dynamics and a likelihood\-dependent guidance term that admits a simple Monte Carlo approximation\. In the linear\-Gaussian setting, we recover standard GP conditioning exactly; beyond conjugacy, the same machinery handles any conditioning statement admitting point\-wise likelihood evaluation — including non\-linear physics, and, for the first time, natural language via large language models\. Whitening isolates the irreducible non\-Gaussian dynamics, minimising Wasserstein\-2 transport cost and eliminating numerical stiffness\. The result is a general\-purpose GP inference scheme requiring no bespoke derivations\. Together, these results provide a general mechanism for incorporating the full richness of real\-world knowledge as conditioning information, opening a new frontier for the probabilistic modelling of real\-world problems\.

## Practical Non\-Stationary Graph Gaussian Processes

**Authors:** Senanayak Sesh Kumar Karri; Viacheslav \(Slava\) Borovitskiy

**ID:** 150089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kmyCsFfuCm>) | [PDF](<https://openreview.net/pdf?id=kmyCsFfuCm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150089>)

Matern Gaussian processes offer a principled framework for learning and uncertainty quantification on graphs\. However, they struggle with heterogeneous networks\. A central challenge is that variance at a node can represent genuine signal that should strongly propagate \(diffuse\) to neighbors, mere noise that should be isolated, or a mixture of both\. While this problem has been studied in continuous spatial domains, directly translating those approaches to graphs leaves a free parameter per node, causing extreme over\-parameterization\. To resolve this, we introduce non\-stationary Variance\-Coupled Gaussian Processes \(VCGPs\)\. These models use an auxiliary signal \(often easily derived from historical data\) to determine relative diffusivity between nodes, tied to the regression data via a single learned hyperparameter, $\\gamma$\. The sign of $\\gamma$ captures whether the auxiliary signal is directly or inversely proportional to node diffusivity, while its magnitude calibrates this relationship\.We formally prove that $\\gamma = 1$ is the unique point where VCGPs are stationary up to rescaling, ensuring that varying $\\gamma$ results in genuinely non\-stationary correlations\. Across five real\-world datasets, our VCGPs match or outperform both stationary and heavily parameterized non\-stationary baselines\.

## Outlier\-Robust Multi\-Output Gaussian Processes

**Authors:** Joshua Rooijakkers; Leiv Rønneberg; Francois\-Xavier Briol; Jeremias Knoblauch; Matias Altamirano

**ID:** 155530 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4tfLhUSLnF>) | [PDF](<https://openreview.net/pdf?id=4tfLhUSLnF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155530>)

Multi\-output Gaussian process \(MOGP\) regression allows modelling dependencies among multiple correlated response variables\. Similarly to standard Gaussian processes \(GPs\), MOGPs are sensitive to model misspecification and outliers, which can distort predictions within individual outputs\. In the multi\-output case, this situation can be further exacerbated as anomalous observations in one response can adversely influence predictions for other correlated outputs\. To handle this situation, we propose R\-MOGP—an MOGP that is provably robust to outliers in any individual response\. Our approach preserves conjugacy, achieving robustness without sacrificing computational efficiency\. Empirically, we show that R\-MOGP achieves performance comparable to existing state\-of\-the\-art robust MOGPs at a fraction of their computational costs\.

## Inter\-domain Inference for Gaussian Process Variational Autoencoders

**Authors:** Xinxing Shi; Xiaoyu Jiang; Mauricio A Álvarez

**ID:** 151321 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bNAgSziur6>) | [PDF](<https://openreview.net/pdf?id=bNAgSziur6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151321>)

Gaussian Process Variational Autoencoders \(GPVAEs\) effectively model sample dependencies via latent GP priors, but their inference remains computationally prohibitive at scale\. Existing methods typically rely on inducing points, which are restricted to evaluations in the input domain and provide limited control over inductive bias\. We introduce a scalable inference framework for GPVAEs that uses inducing variables defined as general linear functionals of the latent GPs, rather than point evaluations\. Our formulation recovers the standard inducing\-point GPVAE inference as a special case and yields a simplified reconstruction\-minus\-KL training objective that makes this connection explicit\. More broadly, it provides a principled interface for incorporating operator\-dependent representations and computational structures via the choice of inducing features\. In particular, we instantiate this framework using Fourier features to capture global spectral correlations and B\-spline features to induce efficient banded covariances\. Across multiple tasks in representation learning, imputation, and conditional generation, our method offers a competitive accuracy\-efficiency trade\-off to existing approaches\.

## Neural Backward Filtering Forward Guiding

**Authors:** Gefan Yang; Frank van der Meulen; Stefan Sommer

**ID:** 153704 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JOgNQGNTs4>) | [PDF](<https://openreview.net/pdf?id=JOgNQGNTs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153704>)

Inference in nonlinear continuous stochastic processes on trees is challenging, particularly when observations are sparse and the topology is complex\. Exact smoothing via Doob's $h$\-transform is intractable for general nonlinear dynamics\. We propose Neural Backward Filtering Forward Guiding \(NBFFG\), a unified framework for both discrete transitions and continuous diffusions\. Our method constructs a variational posterior by leveraging a proxy linear\-Gaussian process\. This proxy process yields a closed\-form backward filter that serves as a guide, steering the generative path toward high\-likelihood regions\. We then learn a neural residual to capture the non\-linear discrepancies\. This formulation allows for an unbiased pathwise subsampling scheme, reducing the training complexity from tree\-size dependent to path\-length dependent\. Empirical results show that NBFFG outperforms baselines on synthetic benchmarks, and we demonstrate the method on a high\-dimensional inference task in phylogenetic analysis with reconstruction of ancestral butterfly wing shapes\.

## How Deep Are Deep GPs, Really? A Sharp Threshold and a Non\-Gaussian Limit for Compositional GPs

**Authors:** Mark Kozdoba; Shie Mannor

**ID:** 154260 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F6fd33khoH>) | [PDF](<https://openreview.net/pdf?id=F6fd33khoH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154260>)

Compositional priors describe the generic properties of layered functions in deep Bayesian models, where deep neural networks with random weights are a canonical example\.     In the wide\-network limit, the prior is a Gaussian process with a depth\-dependent kernel, and its behaviour as depth grows has been extensively studied through this kernel\.     Here, we study another case, where each layer itself is a vector valued Gaussian process, and our aim is similarly to understand the limiting behaviour of the prior as depth grows\.  Previous GP work has established that for the RBF kernel and a certain range of bandwidths $r$, the prior degenerates in the limit, converging to the set of constant functions \-\-\- which is not useful as a probabilistic model\. In this paper we establish several new results\.     First, we identify a sharp bandwidth threshold $r\_c\(d\) = \\Theta\(\\sqrt\{d\}\)$ above which the limit is degenerate, strengthening the earlier bounds\. Second, and more importantly, we show that for $r$ below the threshold $r\_c\(d\)$ the prior converges to a limit distribution $\\pi\_\{\\bar\{Z\}\}$\.  We also prove that these distributions are non\-degenerate and non\-Gaussian, with non\-vanishing dependence between coordinates\. In contrast to the previously known degenerate regime, deep Gaussian process priors can therefore admit non\-trivial limits\.  Empirically, we verify the threshold across a range of dimensions $d$, and demonstrate a complex multimodal behaviour of the limit distributions $\\pi\_\{\\bar\{Z\}\}$ \-\-\- a regime that becomes increasingly narrow with $d$ and would be hard to identify without knowing the threshold\.

## Local Gaussian Processes on Compact Lie Groups

**Authors:** Bochuan Liu; Mingyang Zhao; Xiaohong Jia

**ID:** 149732 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nmziO0ZFUz>) | [PDF](<https://openreview.net/pdf?id=nmziO0ZFUz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149732>)

Gaussian processes are a cornerstone of modern probabilistic machine learning, providing principled uncertainty quantification and flexible nonparametric modeling\. While the Gaussian kernel is widely used in Euclidean spaces, many real\-world problems involve data residing on non\-Euclidean domains, particularly compact Lie groups that naturally encode \\emph\{symmetries\}\. In this work, we construct a local Gaussian kernel on arbitrary compact Lie groups by decomposing the group into a \\emph\{maximal torus\} and its orthogonal complement\.  For the prominent Lie groups $\\mathbf\{SO\}\(3\)$ and $\\mathbf\{SU\}\(2\)$, we derive closed\-form kernel expressions using the Rodrigues formula\. Extensive experiments verify the positive definiteness of the proposed kernel and demonstrate its effectiveness in Gaussian process regression, achieving accurate predictions across the entire manifold\.

## Continuous\-depth Deep Gaussian Processes

**Authors:** Ying Li; Sanyou Wu; Zi Yang; Qiaochu Xu; YUHAO LIU; Zhidi Lin; Michael Minyi Zhang; Petar Djuric; alexandre thiery

**ID:** 150043 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lD5IXHqE11>) | [PDF](<https://openreview.net/pdf?id=lD5IXHqE11>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150043>)

Deep Gaussian processes \(DGPs\) are appealing Bayesian regression models, but their standard discrete\-depth parameterization often becomes harder to optimize as depth grows\. We argue that depth is better treated as a latent continuous evolution than as a long discrete stack\. We therefore propose a continuous\-depth formulation in which the latent representation follows a stochastic differential equation with a depth\-indexed drift family equipped with a GP\-based prior\. This reframes the core design choice as the prior placed on that family, rather than adopting a purely neural continuous\-depth parameterization as in neural ODE or neural SDE models\. We study two instantiations of this idea: CDGP, a direct GP prior over the state\-depth drift, and FlowDGP, a flow\-evolved prior that captures richer depth dependence at lower training cost\. To motivate the redesign, we show that the single\-sample DGP objective can become increasingly ill\-conditioned under repeated layer composition, while residual DGP is a useful first repair that still remains a finite discrete construction\. We also give pathwise sensitivity analysis for the continuous\-depth formulation\. Experiments on synthetic, benchmark, and large\-scale regression tasks show that residual DGP improves over plain DGP, while CDGP and FlowDGP provide a stronger overall story across the regimes we study\.

## Deep Gaussian Processes on Directed Acyclic Graphs

**Authors:** Federico L Perlino; Oliver Hamelijnck; Adam Johansen; Theodoros Damoulas

**ID:** 155757 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=39DTnj1MzT>) | [PDF](<https://openreview.net/pdf?id=39DTnj1MzT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155757>)

Many real world processes can be represented as compositions of functions along a Directed Acyclic Graph \(DAG\)\. In causal modelling these correspond to the underlying mechanisms, in engineering to the multiple fidelities present, and in gene\-regulatory networks to the transcription factors\. These functions are partially observed across the DAG, with noisy and heterogeneously sampled measurements, posing significant challenges for reconstruction, uncertainty propagation, and inference\. To tackle these we place priors over  functions and naturally arrive at Deep Gaussian Processes over DAGs\. We theoretically study their prior\-collapse behaviour, and the effect of graph topology and intermediate observations on the preservation of information\. We obtain almost\-sure lower bounds on the asymptotic frequency of depths at which distinction between inputs is preserved, identify broad kernel classes for which these hold, and prove an observation by \\citep\{dunlop2018\} on the role of input connections\. We offer a structured variational approximation that retains graph dependencies, satisfies compositional uncertainty, and captures the explaining\-away behaviour of colliders\. Finally, we empirically validate our theoretical results and our methodology, and model a latent\-collider DAG, a protein signalling network, and a multi\-fidelity heavy\-ion collision task, attaining state\-of\-the\-art performance while recovering the low\-fidelity contributions and yielding explainability over the simulator hierarchy\.

## Identifying Latent Neural Dynamics with Recognition\-Parameterized Gaussian Process Dynamical Systems

**Authors:** Arielle Rosinski; Qianqian Feng; Lior Fox; Maneesh Sahani

**ID:** 151974 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WQv6IOqNHC>) | [PDF](<https://openreview.net/pdf?id=WQv6IOqNHC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151974>)

Neural circuits are densely interconnected systems, and many neural computations are thought to be mediated by the dynamical evolution of activity within these recurrent networks, a hypothesis often referred to as ‘computation through dynamics’\. Under this view, understanding computation within real neural populations depends on building models of the dynamical rules governing the temporal evolution of recorded high\-dimensional neural activity\. Most commonly, such models depend on explicit generative parameterizations of \(i\) the \(nonlinear\) intrinsic dynamical flow field and stochasticity, \(ii\) the \(nonlinear\) mapping from dynamical state to neuronal activity, and \(iii\) the variability of individual neural responses given that dynamical state\. Misspecification of any of these components can bias estimates of dynamics and latent trajectories\. In this paper, we circumvent generation\-related issues by introducing the Recognition\-Parameterized Gaussian Process dynamics \(RP\-GPdyn\) model\. RP\-GPdyn models the dynamical flow field using a nonparametric Gaussian Process\-defined transition function and models the relationship of dynamics to neural activity implicitly using the Recognition\-Parameterized Model \(RPM\) framework\. We show that this generation\-free approach uncovers meaningful, behaviorally relevant latent variables and dynamics from both synthetic and experimental datasets\.

## Mesh Invaiant Infinite Dimensional Adaptive MCMC for Latent Gaussian Processes

**Authors:** Jonas Wallin; Sreekar Vadlamani

**ID:** 153392 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LiEjINF4dN>) | [PDF](<https://openreview.net/pdf?id=LiEjINF4dN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153392>)

We introduce mesh\-invariant adaptive Markov chain Monte Carlo methods for Gaussian\-process posteriors arising in infinite\-dimensional Bayesian inference\. In function\-space MCMC, posterior distributions are defined by a change of measure with respect to a Gaussian prior, making absolute continuity essential for valid proposal construction\. Standard adaptive schemes that modify means or scales in the full discretized space can destroy this property, leading to proposal measures that become singular in the infinite\-dimensional limit\. To avoid this, we adapt only an active finite\-dimensional subspace of the Gaussian\-process representation while preserving the prior dynamics on inactive coordinates\. This yields two adaptive proposals, pCNLV and pCNMV, which extend preconditioned Crank\-\-Nicolson and Crank\-\-Nicolson Langevin methods by learning posterior scale, and in pCNMV also posterior mean structure, on the data\-informed subspace without introducing discretization\-dependent Gaussian density ratios\. The resulting samplers retain the mesh robustness of function\-space methods while improving efficiency through local adaptation\. Experiments on a Darcy\-flow inverse problem and Bayesian logistic regression demonstrate consistent efficiency gains, including an approximately fourfold improvement in effective sampling efficiency for Darcy flow\.

## Active Learning for Gaussian Process Regression Under Self\-Induced Boltzmann Weights

**Authors:** Jixiang Qing; Henry Moss; Matthias Sachs

**ID:** 152717 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qt4h1OOhOo>) | [PDF](<https://openreview.net/pdf?id=Qt4h1OOhOo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152717>)

We consider the active learning problem where the goal is to learn an unknown function with low error under a Boltzmann distribution induced by the function itself\. This self\-induced weighting arises naturally in problems such as molecular energy modeling and free energy estimation, yet poses unique challenges as the target distribution is unknown and its partition function is intractable\. We propose an acquisition function, AB\-SID\-iVAR, based on Gaussian Process surrogates that approximates the intractable Bayesian target distribution in closed form while avoiding partition function estimation, applicable to both discrete and continuous input domains\. We also analyze a Thompson sampling alternative \(TS\-SID\-iVAR\) as a higher variance Monte Carlo variant\. Despite the unknown target, under mild conditions, we establish that the terminal prediction error vanishes with high probability, and provide a tighter average\-case guarantee\. We demonstrate superior performance over existing active learning approaches on synthetic benchmarks and real\-world modeling tasks\.

## Amortized Structured Stochastic Variational Inference for Gaussian Process Latent Variable Models

**Authors:** Maksym Tretiakov; Sarah Filippi; Vincent Fortuin; Ruth Misener; Ruby Sedgwick; James Odgers

**ID:** 152433 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAYlbKu0tU>) | [PDF](<https://openreview.net/pdf?id=TAYlbKu0tU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152433>)

Many machine learning methods aim to approximate the lower\-dimensional manifold on which the data lives\. A desirable feature of such methods is that they should capture the epistemic uncertainty of this learned manifold\. One model that achieves this is the Gaussian Process Latent Variable Model, in which a Gaussian Process \(GP\) mapping from the latent space provides an estimate of the uncertainty of the manifold\. However, the effectiveness of this uncertainty estimation is limited by the mean\-field variational approximation between the GP inducing points and the latent variables\. In this work, we use Amortized Structured Stochastic Variational Inference to allow the variational posterior for the latent space to be conditionally dependent on the value of the inducing points\. We demonstrate that this more flexible variational posterior improves several metrics related to the reconstruction of points on the data manifold\.

## Theoretical guarantees for Banded Approximations of Gaussian Processes

**Authors:** Omar Kassi; Bernhard Stankewitz; Botond Szabo

**ID:** 152837 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q2NOdZAhNO>) | [PDF](<https://openreview.net/pdf?id=Q2NOdZAhNO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152837>)

Gaussian process regression models are widely used in modern statistics and machine learning due to their flexibility, interpretability, built\-in uncertainty quantification, and strong theoretical foundations\. However, training Gaussian processes \(GPs\) has a computational cost of $O\(n^3\)$, while the memory and prediction costs are also $O\(n^2\)$\. For the large datasets commonly encountered in practice, this becomes infeasible and necessitates the use of approximate posterior methods\. In this work, we propose a class of approximations based on sparse covariance matrices, where the kernel matrix is sparsified according to the spatial proximity of the design points\. We analyze the accuracy of the resulting approximate posterior distribution and show that the proposed approach preserves optimal statistical inference properties, provided that the dependencies among a sufficient number of neighboring points for each feature are retained\. We derive explicit sufficient and necessary conditions on the number of neighbors required in a general setting and apply these results to standard kernels, including the squared exponential and Mat\\'ern kernels\. Our theoretical findings are supported by numerical experiments\.

## Stable and Scalable Probabilistic Numerical Solvers for Stiff and High\-Dimensional ODEs

**Authors:** Nathanael Bosch

**ID:** 150122 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kWEGM5zPCL>) | [PDF](<https://openreview.net/pdf?id=kWEGM5zPCL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150122>)

Filtering\-based probabilistic numerical solvers for ordinary differential equations \(ODEs\) have been established as a flexible and efficient simulation framework with built\-in numerical uncertainty quantification\. However, problems that are both stiff and high\-dimensional remain a challenge, as current methods are either stable and have cubic cost in the ODE dimension, or scale linearly at the expense of stability\. In this paper, we close this gap and develop probabilistic ODE solvers that are both stable and scalable\. We propose two complementary strategies\. First, we develop a matrix\-free update step that uses Jacobian\-vector products, iterative linear solvers, and stochastic covariance estimation to enable linear scaling, all while retaining stability\. Second, we propose iterative re\-linearization to further improve stability without sacrificing scalability, turning probabilistic ODE solvers into fully implicit methods\. We evaluate the proposed approaches on a range of stiff and high\-dimensional problems and demonstrate improved stability and scalability over established probabilistic solvers\.

## Amplitude Decoupling in Gaussian Process Training: Exact Decomposition, Pole Cancellation, and Evaluation\-Efficient Optimization

**Authors:** Piyush Sao; Keita Teranishi; Sudip K Seal; Pedro Valero\-Lara; Narasinga R Miniskar

**ID:** 148358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yTtdoIL1Yk>) | [PDF](<https://openreview.net/pdf?id=yTtdoIL1Yk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148358>)

Gaussian process hyperparameter optimization via marginal likelihood is notoriously brittle\. We identify a precise, removable cause of a common source of line\-search inefficiency in unprofiled exact GP training: mismatch between the current scalar log\-amplitude and its profiled optimum\. The GP negative log\-likelihood decomposes exactly as $F\(a, x\) = f\(x\) \+ \\frac\{n\}\{2\}\(e^\{\-r\} \+ r \- 1\)$, where $r = a \- a^\*\(x\)$ is the mismatch between the current log\-amplitude $a = \\log \\sigma\_f^2$ and its analytical optimum $a^\*\(x\)$ for the shape parameters $x = \(\\log \\ell, \\log \\tau\)$\. The residual $\\Psi\_n\(r\) = \\frac\{n\}\{2\}\(e^\{\-r\} \+ r \- 1\)$ is a convex, nonnegative penalty that \(i\) introduces pole singularities at analytic continuations of the kernel matrix past its singular boundary, and \(ii\) classifies 80% of rejected Armijo trials overall, and up to 100% in high\-SNR regimes, as amplitude\-caused in our L\-BFGS experiments\. Profiling out $\\sigma\_f^2$ eliminates this term exactly, reducing poles to logarithmic branch points and converting stiff line profiles into nearly flat ones\. We introduce an Armijo failure diagnostic that exactly decomposes each rejected unprofiled trial into profiled\-shape and amplitude\-mismatch contributions, determining whether a particular rejection was caused by scalar amplitude mismatch or by the profiled shape objective\. Experiments on synthetic regression tasks show that, in the tested L\-BFGS/Armijo settings, amplitude profiling reduces the number of objective evaluations needed to reach a target marginal likelihood by 2\-5x, with no change to the per\-evaluation cost or the global optimum\.

## A general kernel framework for non\-CND distance measures using $\|\\mathcal\{D\}\|$\-dimensional sparse landmark embeddings

**Authors:** Marcus Noack; Maher B Alghalayini; Mark D Risser

**ID:** 153150 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NUy4Iw41lK>) | [PDF](<https://openreview.net/pdf?id=NUy4Iw41lK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153150>)

Kernel methods, and Gaussian Processes \(GPs\) in particular, require a conditionally negative\-definite \(CND\) distance measure to guarantee positive semi\-definiteness \(PSD\) of the kernel matrix — a condition that fails for many natural input spaces, including smooth manifolds and spaces of probability distributions\. We propose the Sparse Landmark Embedding \(SLE\) kernel, which eliminates this requirement entirely\. Each input is embedded into a sparse feature vector via compactly supported bump functions centered at all training points $\|\\mathcal\{D\}\|$; applying any standard PSD kernel in this embedding space yields a kernel that is provably PSD for arbitrary distance measures\. The compact support automatically controls embedding sparsity, keeping kernel matrices well\-conditioned and computationally tractable despite the high ambient dimension\. We provide theoretical guarantees on PSD, sparsity, stability, and universal approximation, and demonstrate, using geodesic and Wasserstein distances, that the SLE kernel matches or substantially exceeds domain\-specific baselines in both predictive accuracy and uncertainty quantification\.

## Scalable Derivative Gaussian Processes via Exact Gradient Reduction

**Authors:** Hyunseok Seung; Matthias Katzfuss

**ID:** 156058 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0mN2CCr29C>) | [PDF](<https://openreview.net/pdf?id=0mN2CCr29C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156058>)

Gradient observations can substantially improve Gaussian process \(GP\) surrogates, particularly in high\-dimensional settings where function evaluations are expensive\. However, exact inference with $n$ function values and $n$ full gradients in $d$ dimensions scales cubically in the joint state size, imposing an intractable $\\mathcal\{O\}\(n^3 d^3\)$ computational bottleneck\. We introduce TERA, a highly scalable derivative GP method based on target\-specific exact gradient reduction\. We prove that for stationary kernels, the gradient components orthogonal to the directions connecting the target and conditioning points are conditionally independent of the target function value; consequently, the exact conditional density is fully characterized by at most $m^2$ directional derivatives once a conditioning set of size $m$ is specified\. By using these reduced, dimension\-free conditionals as local factors in a Vecchia approximation, TERA effectively decouples $n$ and $d$ from the dense matrix inversion\. This reduces the per\-target evaluation cost to $\\mathcal\{O\}\(dm^2 \+ m^6\)$ time and $\\mathcal\{O\}\(dm^2 \+ m^4\)$ memory, leaving the underlying derivative GP model mathematically unchanged\. Empirical evaluations demonstrate that TERA achieves state\-of\-the\-art predictive accuracy while operating orders of magnitude faster than standard derivative GPs\. Crucially, both computation time and peak GPU memory remain essentially flat with respect to $d$, enabling highly scalable inference in high\-dimensional spaces\.

