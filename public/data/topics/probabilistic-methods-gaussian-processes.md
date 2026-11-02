# Probabilistic Methods / Gaussian Processes

概率方法 / 高斯过程

15 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Practical Non\-Stationary Graph Gaussian Processes

**Authors:** Senanayak Sesh Kumar Karri; Viacheslav \(Slava\) Borovitskiy

**ID:** 150089 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kmyCsFfuCm>) | [PDF](<https://openreview.net/pdf?id=kmyCsFfuCm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150089>)

_Abstract unavailable from the accessible public sources._

## Conditioning Gaussian Processes on Almost Anything

**Authors:** Henry Moss; Lachlan Astfalck; Tom Cowperthwaite; Colin Doumont; Samuel Willis; Christopher Nemeth; Philipp Hennig; Andrew Zammit\-Mangion

**ID:** 155789 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=2tEtU2vxsj>) | [PDF](<https://openreview.net/pdf?id=2tEtU2vxsj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155789>)

_Abstract unavailable from the accessible public sources._

## Amplitude Decoupling in Gaussian Process Training: Exact Decomposition, Pole Cancellation, and Evaluation\-Efficient Optimization

**Authors:** Piyush Sao; Keita Teranishi; Sudip K Seal; Pedro Valero\-Lara; Narasinga R Miniskar

**ID:** 148358 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yTtdoIL1Yk>) | [PDF](<https://openreview.net/pdf?id=yTtdoIL1Yk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148358>)

Gaussian process hyperparameter optimization via marginal likelihood is notoriously brittle\. We identify a precise, removable cause of a common source of line\-search inefficiency in unprofiled exact GP training: mismatch between the current scalar log\-amplitude and its profiled optimum\. The GP negative log\-likelihood decomposes exactly as $F\(a, x\) = f\(x\) \+ \\frac\{n\}\{2\}\(e^\{\-r\} \+ r \- 1\)$, where $r = a \- a^\*\(x\)$ is the mismatch between the current log\-amplitude $a = \\log \\sigma\_f^2$ and its analytical optimum $a^\*\(x\)$ for the shape parameters $x = \(\\log \\ell, \\log \\tau\)$\. The residual $\\Psi\_n\(r\) = \\frac\{n\}\{2\}\(e^\{\-r\} \+ r \- 1\)$ is a convex, nonnegative penalty that \(i\) introduces pole singularities at analytic continuations of the kernel matrix past its singular boundary, and \(ii\) classifies 80% of rejected Armijo trials overall, and up to 100% in high\-SNR regimes, as amplitude\-caused in our L\-BFGS experiments\. Profiling out $\\sigma\_f^2$ eliminates this term exactly, reducing poles to logarithmic branch points and converting stiff line profiles into nearly flat ones\. We introduce an Armijo failure diagnostic that exactly decomposes each rejected unprofiled trial into profiled\-shape and amplitude\-mismatch contributions, determining whether a particular rejection was caused by scalar amplitude mismatch or by the profiled shape objective\. Experiments on synthetic regression tasks show that, in the tested L\-BFGS/Armijo settings, amplitude profiling reduces the number of objective evaluations needed to reach a target marginal likelihood by 2\-5x, with no change to the per\-evaluation cost or the global optimum\.

## Neural Backward Filtering Forward Guiding

**Authors:** Gefan Yang; Frank van der Meulen; Stefan Sommer

**ID:** 153704 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JOgNQGNTs4>) | [PDF](<https://openreview.net/pdf?id=JOgNQGNTs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153704>)

Inference in nonlinear continuous stochastic processes on trees is challenging, particularly when observations are sparse and the topology is complex\. Exact smoothing via Doob's $h$\-transform is intractable for general nonlinear dynamics\. We propose Neural Backward Filtering Forward Guiding \(NBFFG\), a unified framework for both discrete transitions and continuous diffusions\. Our method constructs a variational posterior by leveraging a proxy linear\-Gaussian process\. This proxy process yields a closed\-form backward filter that serves as a guide, steering the generative path toward high\-likelihood regions\. We then learn a neural residual to capture the non\-linear discrepancies\. This formulation allows for an unbiased pathwise subsampling scheme, reducing the training complexity from tree\-size dependent to path\-length dependent\. Empirical results show that NBFFG outperforms baselines on synthetic benchmarks, and we demonstrate the method on a high\-dimensional inference task in phylogenetic analysis with reconstruction of ancestral butterfly wing shapes\.

## Mesh Invaiant Infinite Dimensional Adaptive  MCMC for Latent Gaussian Processes

**Authors:** Jonas Wallin; Sreekar Vadlamani

**ID:** 153392 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LiEjINF4dN>) | [PDF](<https://openreview.net/pdf?id=LiEjINF4dN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153392>)

We introduce mesh\-invariant adaptive Markov chain Monte Carlo methods for Gaussian\-process posteriors arising in infinite\-dimensional Bayesian inference\. In function\-space MCMC, posterior distributions are defined by a change of measure with respect to a Gaussian prior, making absolute continuity essential for valid proposal construction\. Standard adaptive schemes that modify means or scales in the full discretized space can destroy this property, leading to proposal measures that become singular in the infinite\-dimensional limit\. To avoid this, we adapt only an active finite\-dimensional subspace of the Gaussian\-process representation while preserving the prior dynamics on inactive coordinates\. This yields two adaptive proposals, pCNLV and pCNMV, which extend preconditioned Crank\-\-Nicolson and Crank\-\-Nicolson Langevin methods by learning posterior scale, and in pCNMV also posterior mean structure, on the data\-informed subspace without introducing discretization\-dependent Gaussian density ratios\. The resulting samplers retain the mesh robustness of function\-space methods while improving efficiency through local adaptation\. Experiments on a Darcy\-flow inverse problem and Bayesian logistic regression demonstrate consistent efficiency gains, including an approximately fourfold improvement in effective sampling efficiency for Darcy flow\.

## Amortized Structured Stochastic Variational Inference for Gaussian Process Latent Variable Models

**Authors:** Maksym Tretiakov; Sarah Filippi; Vincent Fortuin; Ruth Misener; Ruby Sedgwick; James Odgers

**ID:** 152433 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TAYlbKu0tU>) | [PDF](<https://openreview.net/pdf?id=TAYlbKu0tU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152433>)

Many machine learning methods aim to approximate the lower\-dimensional manifold on which the data lives\. A desirable feature of such methods is that they should capture the epistemic uncertainty of this learned manifold\. One model that achieves this is the Gaussian Process Latent Variable Model, in which a Gaussian Process \(GP\) mapping from the latent space provides an estimate of the uncertainty of the manifold\. However, the effectiveness of this uncertainty estimation is limited by the mean\-field variational approximation between the GP inducing points and the latent variables\. In this work, we use Amortized Structured Stochastic Variational Inference to allow the variational posterior for the latent space to be conditionally dependent on the value of the inducing points\. We demonstrate that this more flexible variational posterior improves several metrics related to the reconstruction of points on the data manifold\.

## Outlier\-Robust Multi\-Output Gaussian Processes

**Authors:** Joshua Rooijakkers; Leiv Rønneberg; Francois\-Xavier Briol; Jeremias Knoblauch; Matias Altamirano

**ID:** 155530 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4tfLhUSLnF>) | [PDF](<https://openreview.net/pdf?id=4tfLhUSLnF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155530>)

_Abstract unavailable from the accessible public sources._

## Neural Backward Filtering Forward Guiding

**Authors:** Gefan Yang; Frank van der Meulen; Stefan Sommer

**ID:** 153704\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153704

[Paper](<https://openreview.net/forum?id=JOgNQGNTs4>) | [PDF](<https://openreview.net/pdf?id=JOgNQGNTs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153704>)

Inference in nonlinear continuous stochastic processes on trees is challenging, particularly when observations are sparse and the topology is complex\. Exact smoothing via Doob's $h$\-transform is intractable for general nonlinear dynamics\. We propose Neural Backward Filtering Forward Guiding \(NBFFG\), a unified framework for both discrete transitions and continuous diffusions\. Our method constructs a variational posterior by leveraging a proxy linear\-Gaussian process\. This proxy process yields a closed\-form backward filter that serves as a guide, steering the generative path toward high\-likelihood regions\. We then learn a neural residual to capture the non\-linear discrepancies\. This formulation allows for an unbiased pathwise subsampling scheme, reducing the training complexity from tree\-size dependent to path\-length dependent\. Empirical results show that NBFFG outperforms baselines on synthetic benchmarks, and we demonstrate the method on a high\-dimensional inference task in phylogenetic analysis with reconstruction of ancestral butterfly wing shapes\.

## Active Learning for Gaussian Process Regression Under Self\-Induced Boltzmann Weights

**Authors:** Jixiang Qing; Henry Moss; Matthias Sachs

**ID:** 152717 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Qt4h1OOhOo>) | [PDF](<https://openreview.net/pdf?id=Qt4h1OOhOo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152717>)

We consider the active learning problem where the goal is to learn an unknown function with low error under a Boltzmann distribution induced by the function itself\. This self\-induced weighting arises naturally in problems such as molecular energy modeling and free energy estimation, yet poses unique challenges as the target distribution is unknown and its partition function is intractable\. We propose an acquisition function, AB\-SID\-iVAR, based on Gaussian Process surrogates that approximates the intractable Bayesian target distribution in closed form while avoiding partition function estimation, applicable to both discrete and continuous input domains\. We also analyze a Thompson sampling alternative \(TS\-SID\-iVAR\) as a higher variance Monte Carlo variant\. Despite the unknown target, under mild conditions, we establish that the terminal prediction error vanishes with high probability, and provide a tighter average\-case guarantee\. We demonstrate superior performance over existing active learning approaches on synthetic benchmarks and real\-world modeling tasks\.

## A general kernel framework for non\-CND distance measures using $\|\\mathcal\{D\}\|$\-dimensional sparse landmark embeddings

**Authors:** Marcus Noack; Maher B Alghalayini; Mark D Risser

**ID:** 153150 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NUy4Iw41lK>) | [PDF](<https://openreview.net/pdf?id=NUy4Iw41lK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153150>)

Kernel methods, and Gaussian Processes \(GPs\) in particular, require a conditionally negative\-definite \(CND\) distance measure to guarantee positive semi\-definiteness \(PSD\) of the kernel matrix — a condition that fails for many natural input spaces, including smooth manifolds and spaces of probability distributions\. We propose the Sparse Landmark Embedding \(SLE\) kernel, which eliminates this requirement entirely\. Each input is embedded into a sparse feature vector via compactly supported bump functions centered at all training points $\|\\mathcal\{D\}\|$; applying any standard PSD kernel in this embedding space yields a kernel that is provably PSD for arbitrary distance measures\. The compact support automatically controls embedding sparsity, keeping kernel matrices well\-conditioned and computationally tractable despite the high ambient dimension\. We provide theoretical guarantees on PSD, sparsity, stability, and universal approximation, and demonstrate, using geodesic and Wasserstein distances, that the SLE kernel matches or substantially exceeds domain\-specific baselines in both predictive accuracy and uncertainty quantification\.

## Amortized Structured Stochastic Variational Inference for Gaussian Process Latent Variable Models

**Authors:** Maksym Tretiakov; Sarah Filippi; Vincent Fortuin; Ruth Misener; Ruby Sedgwick; James Odgers

**ID:** 152433\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152433

[Paper](<https://openreview.net/forum?id=TAYlbKu0tU>) | [PDF](<https://openreview.net/pdf?id=TAYlbKu0tU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152433>)

Many machine learning methods aim to approximate the lower\-dimensional manifold on which the data lives\. A desirable feature of such methods is that they should capture the epistemic uncertainty of this learned manifold\. One model that achieves this is the Gaussian Process Latent Variable Model, in which a Gaussian Process \(GP\) mapping from the latent space provides an estimate of the uncertainty of the manifold\. However, the effectiveness of this uncertainty estimation is limited by the mean\-field variational approximation between the GP inducing points and the latent variables\. In this work, we use Amortized Structured Stochastic Variational Inference to allow the variational posterior for the latent space to be conditionally dependent on the value of the inducing points\. We demonstrate that this more flexible variational posterior improves several metrics related to the reconstruction of points on the data manifold\.

## Amortized Structured Stochastic Variational Inference for Gaussian Process Latent Variable Models

**Authors:** Maksym Tretiakov; Sarah Filippi; Vincent Fortuin; Ruth Misener; Ruby Sedgwick; James Odgers

**ID:** 152433\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152433

[Paper](<https://openreview.net/forum?id=TAYlbKu0tU>) | [PDF](<https://openreview.net/pdf?id=TAYlbKu0tU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152433>)

Many machine learning methods aim to approximate the lower\-dimensional manifold on which the data lives\. A desirable feature of such methods is that they should capture the epistemic uncertainty of this learned manifold\. One model that achieves this is the Gaussian Process Latent Variable Model, in which a Gaussian Process \(GP\) mapping from the latent space provides an estimate of the uncertainty of the manifold\. However, the effectiveness of this uncertainty estimation is limited by the mean\-field variational approximation between the GP inducing points and the latent variables\. In this work, we use Amortized Structured Stochastic Variational Inference to allow the variational posterior for the latent space to be conditionally dependent on the value of the inducing points\. We demonstrate that this more flexible variational posterior improves several metrics related to the reconstruction of points on the data manifold\.

## Neural Backward Filtering Forward Guiding

**Authors:** Gefan Yang; Frank van der Meulen; Stefan Sommer

**ID:** 153704\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153704

[Paper](<https://openreview.net/forum?id=JOgNQGNTs4>) | [PDF](<https://openreview.net/pdf?id=JOgNQGNTs4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153704>)

Inference in nonlinear continuous stochastic processes on trees is challenging, particularly when observations are sparse and the topology is complex\. Exact smoothing via Doob's $h$\-transform is intractable for general nonlinear dynamics\. We propose Neural Backward Filtering Forward Guiding \(NBFFG\), a unified framework for both discrete transitions and continuous diffusions\. Our method constructs a variational posterior by leveraging a proxy linear\-Gaussian process\. This proxy process yields a closed\-form backward filter that serves as a guide, steering the generative path toward high\-likelihood regions\. We then learn a neural residual to capture the non\-linear discrepancies\. This formulation allows for an unbiased pathwise subsampling scheme, reducing the training complexity from tree\-size dependent to path\-length dependent\. Empirical results show that NBFFG outperforms baselines on synthetic benchmarks, and we demonstrate the method on a high\-dimensional inference task in phylogenetic analysis with reconstruction of ancestral butterfly wing shapes\.

## Deep Gaussian Processes on Directed Acyclic Graphs

**Authors:** Federico L Perlino; Oliver Hamelijnck; Adam Johansen; Theodoros Damoulas

**ID:** 155757 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=39DTnj1MzT>) | [PDF](<https://openreview.net/pdf?id=39DTnj1MzT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155757>)

Many real world processes can be represented as compositions of functions along a Directed Acyclic Graph \(DAG\)\. In causal modelling these correspond to the underlying mechanisms, in engineering to the multiple fidelities present, and in gene\-regulatory networks to the transcription factors\. These functions are partially observed across the DAG, with noisy and heterogeneously sampled measurements, posing significant challenges for reconstruction, uncertainty propagation, and inference\. To tackle these we place priors over  functions and naturally arrive at Deep Gaussian Processes over DAGs\. We theoretically study their prior\-collapse behaviour, and the effect of graph topology and intermediate observations on the preservation of information\. We obtain almost\-sure lower bounds on the asymptotic frequency of depths at which distinction between inputs is preserved, identify broad kernel classes for which these hold, and prove an observation by \\citep\{dunlop2018\} on the role of input connections\. We offer a structured variational approximation that retains graph dependencies, satisfies compositional uncertainty, and captures the explaining\-away behaviour of colliders\. Finally, we empirically validate our theoretical results and our methodology, and model a latent\-collider DAG, a protein signalling network, and a multi\-fidelity heavy\-ion collision task, attaining state\-of\-the\-art performance while recovering the low\-fidelity contributions and yielding explainability over the simulator hierarchy\.

## Inter\-domain Inference for Gaussian Process Variational Autoencoders

**Authors:** Xinxing Shi; Xiaoyu Jiang; Mauricio A Álvarez

**ID:** 151321 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bNAgSziur6>) | [PDF](<https://openreview.net/pdf?id=bNAgSziur6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151321>)

_Abstract unavailable from the accessible public sources._

