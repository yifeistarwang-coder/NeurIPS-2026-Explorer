# Probabilistic Methods / Bayesian Models and Methods

概率方法 / 贝叶斯模型与方法

83 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Bayesian Backprop as Belief Propagation: Single\-Pass Predictive Uncertainty

**Authors:** Wen Dong

**ID:** 154383 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dz8Fnt62Zc>) | [PDF](<https://openreview.net/pdf?id=Dz8Fnt62Zc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154383>)

Modern ML systems increasingly use uncertainty to decide when to abstain, route to a fallback, retrieve more context, or spend additional computation\. Yet many strong Bayesian deep\-learning recipes make uncertainty expensive on the serving path: ensembles, posterior samples, and MC dropout require repeated forward passes, while fast deterministic confidence heads are not generally posterior\-predictive computations over parameter beliefs\. We introduce \\emph\{Bayesify\}, a message\-passing view that turns a deterministic neural computation graph into a single\-pass posterior\-predictive moment graph\. Trainable tensors become Gaussian beliefs, activations carry selected moments, and prediction is one deterministic forward propagation of those moments\. Theoretically, we show that exact belief propagation is natural\-gradient message passing in exponential\-family mean space, and that projected EP is implemented by reverse\-mode adjoints followed by local Fisher moment updates\. This yields a practical wrapper for dense, convolutional, residual, and adapter modules\. Experiments evaluate calibrated uncertainty, selective prediction, and OOD behavior at one\-pass inference cost, comparing against deterministic calibration, ensembles, dropout, Laplace, SWAG, and variational baselines\.

## Discrete Langevin\-Inspired Posterior Sampling

**Authors:** Sattwik Basu; Chaitanya Amballa; Jorge V Sampedro; Romit Roy Choudhury

**ID:** 154362 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E9UMLvG2aa>) | [PDF](<https://openreview.net/pdf?id=E9UMLvG2aa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154362>)

We study posterior sampling for inverse problems in discrete state spaces using discrete diffusion models as generative priors\. While continuous diffusion models have become widely used for inverse problems, their discrete counterparts remain comparatively underexplored\. Existing discrete posterior samplers often rely on continuous relaxations of discrete variables, Gibbs\-style updates, or mechanisms specialized to particular corruption processes, which can limit scalability or generality\. We propose $\\Delta$LPS, a Discrete Langevin\-Inspired Posterior Sampler that uses gradient information to identify promising discrete moves without leaving the discrete state space\. The resulting approach enables efficient parallel updates across all token dimensions and is agnostic to the training paradigm of the discrete diffusion prior, including masked and uniform\-state diffusion\. We evaluate our method on image restoration tasks across MNIST, CIFAR, and FFHQ, as well as spatial mapping, covering linear, nonlinear, and blind inverse problems\. Across these settings, we improve over recent discrete diffusion posterior samplers and are competitive with strong continuous diffusion\-based inverse solvers\. Our results suggest that fully discrete, gradient\-informed posterior samplers offer a scalable and general path toward solving inverse problems over discrete representations\.

## Posterior Contraction Rates for sparse Kolmogorov\-Arnold Networks in Anisotropic Besov Spaces

**Authors:** Jeunghun Oh; Lizhen Lin; Jaeyong Lee; Kyeongwon Lee

**ID:** 153968 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H9kz2lxMa1>) | [PDF](<https://openreview.net/pdf?id=H9kz2lxMa1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153968>)

We study posterior contraction rates for sparse Bayesian Kolmogorov\-Arnold networks \(KANs\) over anisotropic Besov spaces, providing a statistical foundation of KANs from a Bayesian point of view\. We show that sparse Bayesian KANs equipped with spike\-and\-slab\-type sparsity priors attain the near\-minimax posterior contraction\. In particular, the contraction rate depends on the intrinsic anisotropic smoothness of the underlying function\. Moreover, by placing a hyperprior on a single model\-size parameter, the resulting posterior adapts to unknown anisotropic smoothness and still achieves the corresponding near\-minimax rate\. A distinctive feature of our results, compared with those for standard sparse MLP\-based models, is that the KAN depth can be kept fixed: owing to the flexibility of learnable spline edge functions, the required approximation complexity is controlled through the network width, spline\-grid range and size, and parameter sparsity\. Our analysis develops theoretical tools tailored to sparse spline\-edge architectures, including approximation and complexity bounds for Bayesian KANs\. We then extend to compositional Besov spaces and show that the contraction rates depend on layerwise smoothness and the effective dimension of the underlying compositional structure, thereby effectively avoiding the curse of dimensionality\. Together, the developed tools and findings advance the theoretical understanding of Bayesian neural networks and provide rigorous statistical foundations for KANs\.

## Scale\-Invariant Empirical\-Bayes Laplace Approximation for ReLU Networks

**Authors:** Shivam Pal; Piyush Rai

**ID:** 149755 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nbQX2MRjCm>) | [PDF](<https://openreview.net/pdf?id=nbQX2MRjCm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149755>)

A post\-hoc Bayesian procedure should not change its evidence or uncertainty estimates under a function\-preserving reparameterization\. Standard empirical\-Bayes \(EB\) Laplace approximation violates this principle for ReLU networks\. Positive homogeneity induces continuous scale orbits of equivalent parameter vectors, yet the standard isotropic objective depends on the chosen representative through the prior norm and curvature log\-determinant term\. Equivalent ReLU parameterizations can thus yield different marginal likelihoods, selected prior precisions, posterior covariances, and linearized predictive uncertainties\. We fix this by introducing $\\gamma$\-canonicalization, selecting a canonical representative of each ReLU scale orbit and fitting Laplace there\. This is equivalent to transporting the isotropic Gaussian prior from the canonical representative back to the original coordinates, producing a precision field that transforms compatibly with the curvature\. For every $\\gamma\\in\[0,1\]$, the generalized evidence and linearized predictive distribution are invariant under ReLU rescaling\. The parameter $\\gamma$ indexes a family of orbit\-consistent priors and is selected jointly with the prior precision by marginal likelihood, making EB Laplace a well\-defined procedure on ReLU scale\-equivalence classes\. Empirically, we show that standard EB\-Laplace varies substantially across functionally identical ReLU rescalings, while $\\gamma$\-canonicalized Laplace collapses this variation to zero\.

## What Should Remain After Forgetting? Rethinking LLM Unlearning as Predictive Posterior Correction

**Authors:** Jingyue Cong; Andy Song; Alexis Horde\-Vo; Kai Wei; Li Shen; Yameng Peng; Feng Liu; Estrid He

**ID:** 154621 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CBwCf8daZF>) | [PDF](<https://openreview.net/pdf?id=CBwCf8daZF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154621>)

LLM unlearning is often implemented by assigning surrogate targets, such as refusal, uniformity, or likelihood suppression, to forget\-related prompts\. We argue that this surrogate assignment view is misaligned with the counterfactual goal of unlearning: recovering the retain\-only predictive posterior\. This mismatch is especially problematic in mixed\-evidence regimes, where a response may be associated with forgotten evidence while still being partially supported by retained evidence\. We propose EASE: Evidence Attribution and Subtraction Estimator, a logit\-space posterior\-correction method that estimates the forget\-induced component of the deployed model's predictive support and subtracts it at inference time\. EASE uses lightweight deletion and compensation assistants to remove forget\-neighbour evidence while restoring nearby retain\-supported evidence\. We formalize the suppression\-scope dilemma and provide guarantees showing when posterior correction recovers the retain\-only posterior\. Experiments on TOFU and MUSE show that EASE improves forgetting\-\-retention trade\-offs over strong baselines, achieving the best aggregate score in 5/6 main TOFU settings, reducing mixed\-query semantic leakage by 22\.2%, and matching or exceeding full\-retain baselines with 9 times fewer retain examples\. Our code is available at: https://anonymous\.4open\.science/r/EASE\-9675\.

## Bayesian Decision Making around Experts

**Authors:** Daniel Jarne Ornia; Joel Dyer; Nicholas Bishop; Anisoara Calinescu; Michael Wooldridge

**ID:** 149882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVsJcNjcSu>) | [PDF](<https://openreview.net/pdf?id=mVsJcNjcSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149882>)

Complex learning agents are increasingly deployed alongside existing experts, such as human operators or previously trained agents\. However, it remains unclear how learners should optimally incorporate certain forms of expert data, or how to quantify the potential benefit from doing so\. We study this problem in the context of Bayesian multi\-armed bandits, considering \*offline settings\*, where a learner receives a dataset of outcomes from an expert before interaction, and \*online settings\*, where posterior updates from different data sources may have different computational costs, so the learner must decide whether a given update should use its own experience or an outcome generated by an expert\. We formalize how expert data influences the learner's posterior and quantify how pretraining or online learning on expert outcomes tighten information\-theoretic regret bounds\. We propose an information\-directed rule for allocating a limited update budget across data sources, and we study strategies for how the learner can infer when to trust the expert, safeguarding for compromised experts\. By disentangling and quantifying the value of expert data, our framework builds towards a practical, information\-theoretic understanding of how agents should learn from others\.

## Conservative neural posterior estimation via distributionally robust training

**Authors:** William Laplante; Yuga Hikida; Charita Dellaporta; Francois\-Xavier Briol; Ayush Bharti

**ID:** 155960 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1XyUmZsyBA>) | [PDF](<https://openreview.net/pdf?id=1XyUmZsyBA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155960>)

Simulation\-based inference with neural posterior estimation \(NPE\) often yields overconfident and unreliable posteriors under limited simulation budgets\. To address this, we propose DRO\-NPE, a distributionally robust approach that replaces the standard NPE objective with a worst\-case loss over a Wasserstein ambiguity set\. We introduce KL\-based metrics for miscoverage and miscalibration, and use these to show that the DRO\-NPE objective controls overfitting and reduces posterior overconfidence\. Our method is tractable, parallelisable, and readily integrates with standard normalising flows\. Across benchmark SBI tasks, DRO\-NPE consistently improves coverage and calibration, while narrowing the gap between empirical and population NPE loss, leading to more reliable inference in low\-simulation regimes\.

## Efficient Variational Inference for Log\-Gaussian Cox Processes via Voronoi Tessellation

**Authors:** Yanshuo Liu; Jiaheng Qu; Sha Cao; Chi Zhang; Nan Zhang

**ID:** 155459 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5S6I8g6tlv>) | [PDF](<https://openreview.net/pdf?id=5S6I8g6tlv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155459>)

Log\-Gaussian Cox Processes \(LGCP\) are essential for modeling spatial point patterns but suffer from high computational costs and intractable likelihoods\. We propose VoGCAM, an efficient Variational Voronoi Gaussian Coordinate Ascent Maximization framework for fitting LGCPs\. Our approach first approximates the intractable integral in the LGCP likelihood using a flexible Voronoi tessellation, which incorporates observed points as integration nodes\. By applying variational Gaussian approximation, we derive an Evidence Lower Bound \(ELBO\) that admits an explicit and closed\-form expression\. To optimize this objective, we develop a novel coordinate ascent algorithm that updates parameter blocks via Newton and fixed\-point methods\. We further enhance scalability by adopting a Nearest Neighbor Gaussian Process \(NNGP\) prior and utilizing the Woodbury formula to reduce matrix inversion costs\. Theoretically, we prove the existence and uniqueness of the optimal solution and establish the convergence of our algorithm\. Numerical experiments on synthetic and real\-world data demonstrate that VoGCAM offers superior computational efficiency and inferential accuracy over state\-of\-the\-art methods like INLA and VIFRK\.

## BayesJudge: Uncertainty\-Aware Bayesian Meta\-Evaluation of Human and LLM Judgments

**Authors:** Jiahao Zhang; Pengbin Feng; Chunlei Meng; Hang He; Tianyong Hao

**ID:** 138918 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wxiKp62nSu>) | [PDF](<https://openreview.net/pdf?id=wxiKp62nSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138918>)

AI evaluation pipelines often produce conflicting judgments rather than clean labels\. In pairwise LLM evaluation, this conflict is especially visible: disagreement can arise from ambiguous items, underspecified rubrics, heterogeneous or unstable human raters, or an LLM judge whose verdict changes when the response order is swapped\. We propose BayesJudge, an online Bayesian meta\-evaluation layer for conflicting human\-LLM judgment streams\. For each comparison, BayesJudge estimates a panel\-relative posterior verdict distribution over the two responses, with a tie or ambiguity state when such labels are available\. At the same time, it estimates rater\-specific human confusion matrices and LLM presentation\-order bias\. The method uses tie\-open labels to keep ambiguity observable and paired order\-swapped judge calls to separate response quality from presentation effects\. We formulate the exact online posterior recursion and use a scalable Rao\-\-Blackwellized assumed\-density SMC approximation for streaming inference\. Controlled synthetic experiments demonstrate recovery of prespecified evaluator parameters and illustrate two protocol\-level identifiability mechanisms: tie\-open labels expose ambiguity mass, and order\-swapped paired judgments separate item preference from position bias\. On real\-world SummEval dataset, BayesJudge successfully detects systematic presentation\-order effects in LLM judge outputs, infers distinct expert and crowdworker behavior signatures without rater metadata, and produces posterior uncertainty estimates that correlate with human disagreement\. Our code is available at https://anonymous\.4open\.science/r/BayesJudge\-0879\.

## Exact Posterior Score Estimation for Solving Linear Inverse Problems

**Authors:** Abbas Mammadov; Ozgur Kara; Kaan Oktay; Iskander Azangulov; Adil K Akan; Hyungjin Chung; James Rehg; Yee Whye Teh

**ID:** 155154 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7u8YcL4Z4P>) | [PDF](<https://openreview.net/pdf?id=7u8YcL4Z4P>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155154>)

Diffusion and flow\-based models learn powerful data priors by training a denoiser to reverse Gaussian corruption\. To use this prior to solve a linear inverse problem, one needs to sample from the posterior, but the score that the prior provides is the unconditional score, not the posterior score\. Existing methods either steer a fixed pretrained denoiser with approximate measurement\-matching corrections, or train a conditional restoration model that abandons the denoising structure of the prior\. We derive the exact posterior score in closed form for linear Gaussian inverse problems under general Gaussian interpolants, and show that posterior sampling reduces to a denoising problem at an operator\-dependent shifted pivot under an anisotropic noise covariance\. We turn this identity into \*\*Exact Posterior Score \(EPS\)\*\*, a denoising training objective that preserves the input/output structure of standard pretraining and can therefore be trained from scratch or fine\-tuned from a pretrained denoiser\. At inference, EPS uses the same sampler as the underlying backbone, with no likelihood gradients or projections\. We evaluate EPS on five linear inverse problems across FFHQ and ImageNet, where it outperforms training\-free and training\-based baselines on fidelity, perceptual, and distributional metrics, while using roughly an order of magnitude fewer denoiser evaluations than gradient\-based posterior samplers\.

## Support Mismatch as a Benchmark Failure Mode for In\-Context Prediction

**Authors:** Jie Liu; Lanlan Liang; Qinan Bao; ZiXi Yan; Linghao Meng; Wenbo Gong

**ID:** 153575 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KO8zjpmrDJ>) | [PDF](<https://openreview.net/pdf?id=KO8zjpmrDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153575>)

We analyze support mismatch in language\-model in\-context prediction as a frozen\-prior Bayes benchmark with finite discrete support\. The goal is diagnostic rather than literal: we do not identify production LMs with exact Bayesian updating, but characterize a failure mode whose signatures can be checked in learned in\-context predictors\. Our main theorem gives the finite\-sample predictor\-risk bound $R\_k^\\pi \\le C e^\{\-k\\rho\_\{\\min\}\} \+ 2\\varepsilon\_\{\\mathrm\{approx\}\}^2$, so risk decomposes into an exponentially decaying transient and a nonvanishing support\-mismatch floor under exponential\-moment control of log\-likelihood ratios\. In scalar and aligned Gaussian location families, exact two\-component analyses match the upper exponent up to a tight factor 2 and show a regime change at $\\mu\_2=3\\mu\_1$\. Controlled learned\-model experiments track the benchmark near crossover\. Decoder\-only LM diagnostics then test the benchmark signatures: restricted support creates a persistent high\-error regime; restoring the missing support sharply lowers error; and modern size\-matched distractor controls on Qwen and Llama show that adding a wrong same\-cardinality candidate does not reproduce this gain\. Multiple\-choice, instruction\-tuned, cross\-family, calibration, null\-control, and near\-tie checks preserve the same diagnostic picture\.

## Robust Multi\-view Clustering against Imperfect Information

**Authors:** Zhichao Huang; Haochen Zhou; Hao Wang; Xi Peng; Mouxing Yang

**ID:** 156004 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1FPjSicyVu>) | [PDF](<https://openreview.net/pdf?id=1FPjSicyVu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156004>)

Real\-world multi\-view data always suffer from imperfect information problem, where the view\-specific observations are absent \(\\ie, Incomplete Views, IV\) and cross\-view correspondences are mismatched \(\\ie, Noisy Correspondences, NC\) for certain instances\. As a remedy, numerous IV\- and NC\-oriented multi\-view clustering \(MvC\) methods have been proposed, which however require either reliable correspondences or sufficiently complete instances, thus stopping short of addressing the imperfect information problem\. In contrast, we observe that both IV and NC challenges originate from the same issue of imperfect cross\-view counterpart information, where the counterpart of an anchor instance in another view might be either unavailable or unreliable\. Based on the observation, we propose a novel robust MvC framework, termed Posterior\-guided Latent Counterpart Inference \(PLCI\), which could handle both IV and NC in a unified manner\. Specifically, PLCI formulates the desired cross\-view counterpart of each anchor instance as a latent variable, and integrates both instance\-level reliability and prototype\-level semantic transport to infer the posterior distribution of the latent counterpart\. Extensive experiments on six widely\-used multi\-view datasets against 10 state\-of\-the\-art MvC methods demonstrate the effectiveness of PLCI for tackling the imperfect information problem\. The code will be released upon acceptance\.

## Parallel\-in\-Time Variational Inference for Latent Stochastic Differential Equations

**Authors:** Chenyang Wu; Pengfei Liu; Zongzhang Zhang

**ID:** 151152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceFLsj8po8>) | [PDF](<https://openreview.net/pdf?id=ceFLsj8po8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151152>)

Latent stochastic differential equations \(SDEs\) model continuous\-time, irregularly\-sampled time series\. Training these models typically relies on variational inference \(VI\) methods that suffer from sequential sampling bottlenecks and compounding integration errors\. In this paper, we propose Parallel\-in\-Time Variational Inference \(PiTVI\), a framework that parameterizes the variational posterior as a non\-Markovian process mapping the driving noise history directly to the local state increments\. By leveraging modern sequence modeling architectures such as Transformer and Mamba, the training and inference of the variational posterior become fully parallelizable, reducing the span complexity from $\\mathcal\{O\}\(L\)$ to $\\mathcal\{O\}\(\\log L\)$\. Beyond computational scalability, we demonstrate that this formulation shifts global error propagation from multiplicative compounding to additive scaling\. Furthermore, the non\-Markovian formulation natively accommodates fractional driving noise, which models physical memory effects and provides a statistical relaxation mechanism when fitting smooth dynamics\. We validate these properties across empirical time complexity scaling tests, long\-horizon predictions on non\-linear systems, and high\-dimensional sequence modeling\.

## SurvivalPFN: Amortizing Survival Prediction via In\-Context Bayesian Inference

**Authors:** Shi\-ang Qi; Vahid Balazadeh Meresht; Michael Cooper; Russell Greiner; Rahul Krishnan

**ID:** 151336 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bJ348fNOVg>) | [PDF](<https://openreview.net/pdf?id=bJ348fNOVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151336>)

Survival analysis provides a powerful statistical framework for modeling time\-to\-event outcomes in the presence of censoring\. However, selecting an appropriate estimator from the many specialized survival approaches often requires substantial methodological and domain expertise\. We introduce SurvivalPFN, a prior\-data fitted network that amortizes Bayesian inference for censored observations through in\-context learning\. SurvivalPFN is pretrained on a diverse family of synthetic, identifiable, and right\-censored data\-generating processes, enabling it to amortize survival analysis in a single forward pass during inference\. As a result, the model adapts to the effective complexity of each dataset without task\-specific training or hyperparameter tuning, avoids restrictive parametric assumptions, and produces calibrated survival distributions\. In a large\-scale benchmark spanning 61 survival datasets, 21 methods, and 5 evaluation metrics, SurvivalPFN achieves strong predictive performance and often improves upon established survival models\. These results suggest that SurvivalPFN offers a principled and practical foundation model for survival analysis, with potential applications in high\-impact domains such as healthcare, finance, and engineering\.

## Outlier\-robust Diffusion Posterior Sampling for Bayesian Inverse Problems

**Authors:** Yiming Yang; Xiaoyuan Cheng; Yi He; Kaiyu Li; Wenxuan Yuan; Zhuo Sun

**ID:** 151516 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4Z54rVG8B>) | [PDF](<https://openreview.net/pdf?id=a4Z54rVG8B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151516>)

Diffusion models have emerged as powerful learned priors for Bayesian inverse problems \(BIPs\)\. Diffusion\-based solvers rely on a presumed likelihood for the observations in BIPs to guide the generation process\. Likelihood misspecification is common in practical BIPs and is known to degrade recovery performance, particularly under outlier contamination\. We investigate this problem by first characterizing the induced posterior deviation and proving the stability of diffusion\-based solvers for linear BIPs\. Our stability analysis further reveals potential robustness deficiencies of existing diffusion\-based solvers under outlier\-contaminated measurements\. To address this issue, we propose a simple yet effective solution: robust diffusion posterior sampling, which is provably outlier\-robust for linear BIPs and compatible with existing gradient\-based posterior samplers\. Empirical results from scientific inverse problems and natural image tasks demonstrate the effectiveness and robustness of our method, with consistent performance gains in challenging scenarios involving outlier contamination for both linear and nonlinear tasks\.

## Neural Bayesian Filtering

**Authors:** Christopher Solinas; Radovan Haluška; David Sychrovský; Finbarr Timbers; Nolan Bard; Michael Buro; Martin Schmid; Nathan Sturtevant; Michael Bowling

**ID:** 154508 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D4Tzo5hpy3>) | [PDF](<https://openreview.net/pdf?id=D4Tzo5hpy3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154508>)

Sequential estimation under partial observability requires tracking belief distributions that may be high\-dimensional, multimodal, and non\-Gaussian\. Classical Bayesian filters generalize zero\-shot to any system whose dynamics can be evaluated, but their representations scale poorly: parametric filters struggle to capture multimodality, and particle filters require exponentially many particles in the state dimension\. Generative Distribution Embeddings \(GDEs\) learn compact representations of complex distributions but provide no mechanism for sequential updates\. We present Neural Bayesian Filtering \(NBF\), a method that combines classical Bayesian filtering with learned distribution embeddings\. NBF represents beliefs as embeddings and updates them by sampling particles from a learned conditional generator, propagating them through the system dynamics, and finally re\-embedding the resulting particles\. For in\-family distributions that the embeddings are trained to represent, NBF inherits the zero\-shot adaptability of classical filters, but with the benefit that regenerating particles from the embedding at each step also mitigates particle impoverishment\. We validate NBF on a pursuit\-\-evasion domain, demonstrating accurate tracking of complex multimodal posteriors, graceful scaling with state dimension, and zero\-shot generalization to dynamics held out from training\.

## Two Phase Rapid Simulation Based Inference with Differentiable Simulators

**Authors:** Uros Zivanovic; Rahul Srinivasan; Roberto Trotta; Andre Scaffidi

**ID:** 153417 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LUVtYIYhWE>) | [PDF](<https://openreview.net/pdf?id=LUVtYIYhWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153417>)

We introduce Rapid Simulation Based Inference \(RSBI\), a diffusion\-based variational approach to likelihood\-free Bayesian inference that achieves high posterior sample efficiency under large and multi\-dimensional prior\-to\-posterior volumes\. RSBI builds on recent advances in Schrödinger Bridge \(SB\) diffusion sampling to handle multi\-modal posteriors, with the likelihood supplied either by a neural ratio estimator or kernal surrogate via a differentiable simulator\. Furthermore, a key observation is that an appropriate surrogate likelihood gives a proposal distribution covering most of the generally multi\-modal posterior mass, replacing the sequential rounds of standard methods with a one\-shot proposal step\. Subsequent NRE refinement recovers exact inference under the simulator and original model prior\. As a variational method, RSBI does not suffer from prior leakage and implicit target drift commonly observed in standard sequential posterior estimation methods\. To improve mode coverage we optionally utilize the well\-tempered meta\-dynamics framework, which also provides a mechanism through which to encourage exploration of the prior volume\. We observe strong performance not only on standard SBI benchmarks, but also as prior volume is scaled up to 2500 times the original, achieving a performance degradation of only $\\sim$5% on the two moons benchmark under a highly constrained simulation budget\. Additionally, we evaluate RSBI's potential for gravitational wave ring\-down posterior estimation, highlighting a real\-world use\-case where our method excels\.

## Online Learning via Learned Latent Bayesian Tracking

**Authors:** Guy Gerson; Tomer Raviv; Nir Shlezinger; Tirza Routtenberg; Osvaldo Simeone

**ID:** 155730 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3NNBL5KQ3u>) | [PDF](<https://openreview.net/pdf?id=3NNBL5KQ3u>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155730>)

Online learning in non\-stationary environments requires models to adapt rapidly from streaming data under strict computational constraints\. A principled approach casts online learning as Bayesian state tracking, where model parameters are updated sequentially via Bayesian filtering\. However, applying Bayesian filters directly to modern deep models is computationally prohibitive due to the high dimensionality of parameter space, forcing existing methods to rely on restrictive approximations or manually designed low\-dimensional subspaces\. In this work, we identify the absence of a suitable low\-dimensional dynamical representation as the core bottleneck in Bayesian filtering\-based online learning\.  Accordingly, we propose Adaptive Update through Representation Adaptation \(AURA\), a meta\-learning framework that learns offline a low\-dimensional latent state\-space model governing the evolution of optimal model parameters under distribution shift\. Online adaptation is then performed via extended Kalman filtering in this learned latent space followed by reconstruction of the full model parameters through a learned lifting map, enabling efficient single\-step online adaptation while preserving model expressiveness\. Evaluated on online adaptation of neural wireless receivers under time\-varying channels and on non\-stationary image classification, AURA shows substantial improvements in adaptation speed, accuracy, and computational efficiency over existing online learning and Bayesian filtering baselines, demonstrating that an adaptation\-aware latent geometry is beneficial for effective Bayesian online learning in high\-dimensional models\.

## Symmetry Guarantees Statistic Recovery in Variational Inference

**Authors:** Daniel Marks; Dario Paccagnan; Mark van der Wilk

**ID:** 151617 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZDvmwsQZ73>) | [PDF](<https://openreview.net/pdf?id=ZDvmwsQZ73>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151617>)

Variational inference \(VI\) is a central tool in modern machine learning, used to approximate an intractable target density by optimising over a tractable family of distributions\. As the variational family cannot typically represent the target exactly, guarantees on the quality of the resulting approximation are crucial for understanding which of its properties VI can faithfully capture\. Recent work has identified instances in which symmetries of the target and the variational family enable the recovery of certain statistics, even under model misspecification\. However, these guarantees are inherently problem\-specific and offer little insight into the fundamental mechanism by which symmetry forces statistic recovery\. In this paper, we overcome this limitation by developing a general theory of symmetry\- induced statistic recovery in variational inference\. First, we characterise when variational minimisers inherit the symmetries of the target and establish conditions under which these pin down identifiable statistics\. Second, we unify existing results by showing that previously known statistic recovery guarantees in location–scale families arise as special cases of our theory\. Third, we apply our framework to distributions on the sphere to obtain novel guarantees for directional statistics in von Mises–Fisher families\. Together, these results provide a modular blueprint for deriving new recovery guarantees for VI in a broad range of symmetry settings\.

## Recovery Guarantees for Posterior Sampling of One\-Bit Compressed Sensing

**Authors:** Jing Ma; Yujia Wu; Zhaoqiang Liu

**ID:** 154213 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FLXvxqXPH4>) | [PDF](<https://openreview.net/pdf?id=FLXvxqXPH4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154213>)

We study the sample complexity of noisy one\-bit compressed sensing for signals drawn from a prior distribution\. By characterizing the effective distributional complexity of the prior via its approximate covering number, we prove that posterior sampling achieves accurate recovery with high probability when the number of measurements scales with the logarithm of the approximate covering number, up to a one\-bit separation gap factor\. This upper bound is robust to learned prior mismatch\. Specifically, we show that posterior sampling with an approximate prior remains reliable, provided that the learned prior distribution is sufficiently close to the true signal distribution in Wasserstein distance\. In addition, we establish a sample complexity lower bound for any reliable method of noisy one\-bit compressed sensing, showing that our upper bound is nearly matched in its main prior dependent term\. To approximate the ideal posterior sampling process for real world scenarios, we instantiate posterior sampling through a plug\-and\-play algorithm with diffusion priors\. Experiments on the FFHQ and ImageNet datasets demonstrate the effectiveness of our proposed approach\.

## AlphaPROBE: Alpha Mining via principled retriveval and on\-graph biased evolution

**Authors:** Taian Guo; Haiyang Shen; Junyu Luo; Binqi Chen; Hongjun Ding; Jinsheng Huang; Luchen Liu; Yun Ma; Ming Zhang

**ID:** 150234 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jnNAuSXHv2>) | [PDF](<https://openreview.net/pdf?id=jnNAuSXHv2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150234>)

Extracting signals through alpha factor mining is a fundamental challenge in quantitative finance\. Existing automated methods primarily follow two paradigms: Decoupled Factor Generation, which treats factor discovery as isolated events, and Iterative Factor Evolution, which focuses on local parent\-child refinements\. However, both paradigms lack a global structural view, often treating factor pools as unstructured collections or isolated single\-lineage paths, which leads to redundant search and inefficient allocation of optimization effort\. To address these limitations, we introduce AlphaPROBE, \( Alpha Mining via P rincipled R etrieval and O n\-graph B iased E volution\), a framework that reframes alpha mining as the strategic navigation of a Directed Acyclic Graph \(DAG\)\. By modeling factors as nodes and evolutionary links as edges, AlphaPROBE treats the factor pool as a dynamic, interconnected ecosystem\. The framework consists of two core components: a Bayesian Factor Retriever that identifies high\-potential seeds by balancing exploitation and exploration through a posterior probability model, and a DAG\-aware Factor Generator that leverages the full ancestral trace of factors to produce context\-aware, non\-redundant optimizations\. Extensive experiments on major Chinese and US stock market datasets against 8 competitive baselines demonstrate that AlphaPROBE significantly gains enhanced performance in predictive accuracy, return stability and training efficiency\. Our results confirm that leveraging global evolutionary topology is essential for efficient and robust automated alpha discovery\. We have open\-sourced our implementation at https://anonymous\.4open\.science/r/AlphaPROBE\-A103\.

## Heteroscedastic Variational Last Layers

**Authors:** James Harrison; John Willes; Mikkel Jordahn; Paul Brunzema; Jasper Snoek

**ID:** 156040 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0rm1Hx9Cti>) | [PDF](<https://openreview.net/pdf?id=0rm1Hx9Cti>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156040>)

We present a simple, inexpensive, and effective method for heteroscedastic uncertainty quantification in neural networks\. We build on Variational Bayesian Last Layers \(VBLL\), wherein deterministic training objectives are developed for variational inference of the network last layer\. In particular, we \(1\) Introduce t\-VBLL layers, which perform variational inference for the aleatoric noise covariance, and \(2\) Introduce Het\-VBLL, a Bayesian last layer scheme to model heteroscedastic noise\. These methods are based on novel, analytically tractable evidence lower bounds\. We further discuss parameterization and initialization within these models\. We show that these novel design elements enable effective uncertainty modeling at minimal additional cost, and substantially improve performance over similar methods such as VBLLs\.

## Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions

**Authors:** Jingyang You; Hanna Kurniawati

**ID:** 149308 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r9MG6uLaeW>) | [PDF](<https://openreview.net/pdf?id=r9MG6uLaeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149308>)

Bayesian Reinforcement Learning \(BRL\), a subclass of Meta\-Reinforcement Learning \(Meta\-RL\), provides a principled framework for generalisation by explicitly incorporating Bayesian task parameters into transition and reward models\. However, classical BRL methods assume known forms of transition and reward models\. While recent deep BRL methods incorporate model learning to address this, applying neural networks directly to joint data and task parameters necessitates variational inference\. This often yields indistinct task representations, compromising the resulting BRL policies\. To overcome these limitations, we introduce Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions \(GLiBRL\)\. Our approach features fully tractable Bayesian inference over task parameters and model noise, alongside exact marginal likelihood evaluation for learning transition and reward models\. The permutation\-invariant nature of exact Bayesian inference in GLiBRL enables seamless integration with both on\-policy and off\-policy RL algorithms\. We further show that GLiBRL admits a closed\-form relationship between the $\\mathcal\{L\}\_2$ distance of its task representations and empirical kernel\-based correspondence between task samples, which is to our knowledge the first such structural result for online deep BRL\. GLiBRL is compared against representative and recent Meta\-RL methods, and improves state\-of\-the\-art performance on both MuJoCo and MetaWorld benchmarks by up to 1\.8$\\times$\.

## The VLM as Sensor: Bayesian Active Search for Long Video Understanding

**Authors:** Chong Tang; Sannara EK; Dirk Koch; Robert Mullins; Alex Weddell; Jagmohan Chauhan

**ID:** 153414 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LVgNulVpKE>) | [PDF](<https://openreview.net/pdf?id=LVgNulVpKE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153414>)

What if the best way to search a video with a vision\-language model \(VLM\) is to stop asking the model to search? Recent approaches give the VLM control over temporal navigation, tying search quality to the model's reasoning ability\. We propose the opposite: BeliefSearch treats the VLM as a noisy sensor and delegates navigation to an external Bayesian controller\. A single belief over video segments anchors the system: the question sets the prior, each VLM observation updates it, and the same belief decides whether to search, which segment to examine next, and when to stop\. Because the belief is explicit, we can trace why each choice was made\. The same signal also drives training: each turn earns credit for the uncertainty it reduces, and the final reward is gated by how much the search lowered entropy\. This blocks a reward\-hacking shortcut where the model otherwise learns to skip search and guess from the preview frames\. On long\-video benchmarks, our method outperforms all prior search\-based methods by up to 8\.8 points while using $5$ to $13\\times$ fewer frames than recent RL search baselines\.

## Distributionally Robust Domain Randomization with Learned Risk\-Sensitive Dynamics Samplers

**Authors:** Sukchul Jeong; Insoon Yang

**ID:** 150440 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i1x7979VN8>) | [PDF](<https://openreview.net/pdf?id=i1x7979VN8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150440>)

Domain randomization \(DR\) improves sim\-to\-real transfer by training policies over randomized simulator dynamics, but standard DR optimizes average performance under a fixed sampler and can miss rare failure\-prone domains\. We propose Risk\-Sensitive Domain Randomization \(RSDR\), a distributionally robust formulation of episodic DR that evaluates each policy against the worst\-case distribution over dynamics parameters within a KL neighborhood of a reference sampler\. The resulting soft adversary has an exponential\-tilting form, yielding a single temperature\-controlled sampler family: negative temperatures emphasize low\-return domains for robustness, zero recovers uniform DR, and positive temperatures give an optimistic sampler closely related to curriculum\-style DR\. Because this target changes with the policy and returns are observed only through rollouts, RSDR learns an amortized dynamics sampler by reverse\-KL variational inference while reusing on\-policy PPO trajectories\. Across six domain\-randomized MuJoCo Playground tasks, robust RSDR improves CVaR and minimum\-return metrics over uniform and adaptive DR baselines, and outperforms best\-tuned EPOpt\.

## Efficient Prediction of Pass@k Scaling in Large Language Models

**Authors:** Joshua Kazdan; Colin Sullivan; Rylan Schaeffer; Youssef Allouah; Kyssen Yu; Noam Levi; Sanmi Koyejo

**ID:** 150130 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kSIarHMFfh>) | [PDF](<https://openreview.net/pdf?id=kSIarHMFfh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150130>)

Assessing the capabilities and risks of frontier AI systems is a critical area of research; recent work has shown that repeated sampling can dramatically increase both\. For instance, repeated sampling allows models to solve difficult math and coding problems, but it may also increase their risk of being jailbroken\. Such results raise a crucial question: how can one accurately predict a model's behavior when scaled to a massive number of attempts, given a vastly smaller sampling budget? This question is directly relevant to model providers, who serve hundreds of millions of users daily, and to governmental regulators, who seek to prevent harms\. To answer this question, we make three contributions\. First, we find that standard methods for fitting these laws suffer from statistical shortcomings that hinder predictions, especially in data\-limited scenarios\. Second, we remedy these shortcomings by introducing a robust estimation framework, which uses a beta\-binomial distribution to generate more accurate predictions from limited data\. Third, we propose a dynamic sampling strategy that allocates a greater budget to harder problems\. Combined, these innovations enable more reliable prediction of rare risks and capabilities at a fraction of the computational cost\.

## Asymptotically Log\-Optimal Bayes\-Assisted Confidence Sequences for Bounded Means

**Authors:** Valentin Kilian; Stefano Cortinovis; Francois Caron

**ID:** 153874 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I6z9IukSBB>) | [PDF](<https://openreview.net/pdf?id=I6z9IukSBB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153874>)

Confidence sequences based on test martingales provide time\-uniform uncertainty quantification for the mean of bounded IID observations without parametric distributional assumptions\. Their practical efficiency, however, depends strongly on the choice of martingale updates, and many existing constructions do not exploit prior information about plausible data\-generating distributions or mean values\. We propose a Bayes\-assisted framework that uses a Bayesian working predictive model to adaptively construct confidence sequences\. For each candidate mean and time point, the predictive distribution selects, among valid one\-step martingale factors, the update maximising predictive expected log\-growth; validity is therefore preserved even when the prior or working model is misspecified\. We prove that if the predictive distribution is Wasserstein\-consistent, the resulting procedure is asymptotically log\-optimal, matching the per\-sample log\-growth of an oracle procedure with access to the true distribution\. We instantiate the framework using robust predictives based on Dirichlet\-process mixtures and Bayesian exponentially tilted empirical likelihood\. Experiments on synthetic data, sequential best\-arm identification for LLM evaluation, and prediction\-powered inference show that informative priors can substantially reduce confidence\-sequence width and sampling effort while retaining anytime\-valid coverage\.

## Phase Transitions in Attention: A Bayesian Theory of Copy Head Emergence

**Authors:** Itay Lavie; Kirsten Fischer; Andrey Lekov; Frederic Van Maele; Zohar Ringel; Moritz Helias

**ID:** 148770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vB716nAsNr>) | [PDF](<https://openreview.net/pdf?id=vB716nAsNr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148770>)

Attention is the key mechanism underlying in\-context learning in transformers, and attention patterns have been observed empirically to emerge abruptly during training\. We present a Bayesian theory of feature learning in attention; we then focus on how the copy subcircuit in the first layer of an induction head is learned by analyzing a single\-layer softmax attention network trained on a copy task\. We derive a closed\-form posterior over the attention matrix and reduce it to a low\-dimensional order parameter space\. This reduction reveals a phase transition in the amount of training data, which we verify using both Bayesian sampling and standard training with Adam\. We contrast our results with linear attention and find that softmax attention exhibits a \*first\-order phase transition\* while in linear attention an initial \*second\-order phase transition\* is followed by a smooth, continuous evolution toward the structured attention pattern \(\*crossover\*\)\. Our work provides a first\-principles theoretical account of the abrupt emergence of the copy subcircuit, reminiscent of the one observed in training large language models\.

## Heteroscedastic TrueSkill: Modeling Match Noise and Player Consistency

**Authors:** Philipp Kolbe; Johann Ukrow; Anna Kazachkova; Rainer Schlosser; Ralf Herbrich

**ID:** 150666 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gNc29aLken>) | [PDF](<https://openreview.net/pdf?id=gNc29aLken>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150666>)

TrueSkill is a widely used Bayesian rating system for inferring latent player skill from game outcomes\. However, its standard formulation assumes a fixed global performance\-noise parameter, making it sensitive to atypical outcomes and unable to distinguish skill from player\-specific consistency\. We propose two heteroscedastic extensions: a match\-specific precision model that yields a robust heavy\-tailed comparison likelihood, and a player\-specific precision model that captures differences in performance consistency among players\. Both extensions use Gamma\-distributed precision variables and retain a modular factor\-graph representation\. Because the introduced Gaussian\-Gamma factors do not admit the same closed\-form expectation\-propagation updates as vanilla TrueSkill, we derive an efficient hybrid message\-passing scheme that combines expectation\-propagation updates for outcome truncation factors with variational updates for latent precision factors\. Experiments on synthetic and real match data show that the proposed models improve robustness to anomalous outcomes and provide interpretable estimates of player consistency\.

## Bayesian Causal Stress Testing: Posterior Fragility of Treatment\-Effect Conclusions

**Authors:** Makoto Nakakita; Teruo Nakatsuma

**ID:** 155177 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7jQK8u7uLb>) | [PDF](<https://openreview.net/pdf?id=7jQK8u7uLb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155177>)

Bayesian causal inference quantifies uncertainty in treatment effects under a specified causal model\. This uncertainty is often interpreted as evidence that the resulting causal conclusion is robust\. We argue these are distinct targets: a posterior over a treatment effect may be tightly concentrated above zero while the corresponding causal claim is fragile to small violations of ignorability, overlap, or target\-population assumptions\. We introduce Bayesian causal stress testing \(BCS\), a framework that assigns a posterior fragility score $F\_\\alpha$ with a threshold $\\alpha\\in\(0,1\)$ to a causal conclusion by measuring the smallest calibrated stress under which the posterior probability of the claim falls below $\\alpha$\. We give a stress\-map formulation, decision and composition results for claim\-level stress, a calibration theorem showing that $F\_\{0\.5\}$ asymptotically recovers the partial\-correlation form of the Cinelli\-Hazlett robustness value in the linear\-Gaussian flat\-prior limit, and a proposition formalizing why posterior precision and posterior fragility can decouple\. We evaluate BCS on IHDP, TWINS, and ACIC\-cov\+Hill, a semi\-synthetic benchmark built from the ACIC 2016 covariate matrix, under BART, BCF\-style, Bayesian linear, and Bayesian\-bootstrap AIPW posteriors\. On the linear Bayesian posterior, $F\_\{0\.5\}^2$ matches the Cinelli\-Hazlett $RV\_\{0\.5\}^\{\\mathrm\{CH\}\}$ to RMS $0\.001$ on both IHDP and ACIC\-cov\+Hill across all $20$ configurations; the BART and BCF\-style posteriors show larger deviations in small\-effect configurations\. Across estimators, posterior $95$% interval widths vary by up to $50$% but $F\_\{0\.5\}$ remains within $0\.05$, illustrating that posterior precision is not a robustness certificate\. A controlled\-DGP calibration experiment with a hidden confounder of known partial correlation $\\gamma\_\{\\mathrm\{true\}\}$ confirms that $F\_\{0\.5\}$ tracks the required flip\-stress to mean absolute error $0\.03$\.

## CLEAR: Complementary Tripartite Play with Bayesian Calibration for Semi\-Supervised Edge Classification

**Authors:** Zhipeng Sun; Fanchun Meng; Jiazhen Huang; Yongpeng Zhang; Tao Ren; Yifan Wang; Wei Ju; Xiao Luo

**ID:** 153511 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KnVgeVUR19>) | [PDF](<https://openreview.net/pdf?id=KnVgeVUR19>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153511>)

This paper studies the problem of semi\-supervised edge classification, which aims to identify edge relations using both labeled and unlabeled data\. This problem is highly challenging due to the inherent asymmetry of edge relations and strong prediction biases from imbalanced homophilous and heterophilous edges\. Towards this end, this paper proposes a novel approach named Complementary Tripartite Play with Bayesian CaLibration \(CLEAR\) for semi\-supervised edge classification\. The core of our CLEAR is to incorporate asymmetric semantic branches and a meta\-teacher into a tripartite\-play framework, enabling reliable guidance and optimization under label scarcity\. In particular, our CLEAR introduces a topological branch and a contextual branch which extracts graph semantics, generating pseudo\-labels in complementary views\. To improve the reliability of pseudo\-labels, we filter low\-quality pseudo\-labels using epistemic uncertainty, and then calibrate posterior distributions using the priors induced by neighborhood information\. More importantly, we utilize a meta\-consoler to guide the optimization of two branches by outputting the objective coefficients, ensuring a reliable pseudo\-labeling process in a tripartite play framework\. Extensive experiments on benchmark datasets validate the superiority of the proposed CLEAR in comparison to various baselines\. Our code is available at https://anonymous\.4open\.science/r/CLEAR\-D1D7/\.

## MaPP: A Unified Marginalized Posterior\-Predictive Framework for Data\-Efficient RLVR

**Authors:** YangYang Ren; Haodong Zhu; Sheng Xu; Yanjing Li; Nikolai Y Zolotykh; Wentao Zhang; Baochang Zhang

**ID:** 153702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JPWppGw2ut>) | [PDF](<https://openreview.net/pdf?id=JPWppGw2ut>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153702>)

Reinforcement learning with verifiable rewards \(RLVR\) enhances the reasoning capabilities of large language models \(LLMs\), but at the expense of significant computational overhead due to compute\-intensive rollout processes and frequent policy updates\. Online prompt selection, a widely adopted strategy for improving training efficiency, maintains per\-prompt Bayesian posteriors to predict prompt difficulty and prioritize informative prompts before committing rollout budget\. However, these methods assess prompt informativeness without accounting for how reliably learning signal is extracted from sampled responses\. In GRPO\-based RL algorithms, the realized advantage of a response depends not only on its own outcome, but also on the randomly sampled outcomes of its peers through group normalization\. Our experimental and theoretical analysis show that the resulting uncertainty in group composition induces composition noise, a non\-vanishing variance component that creates an irreducible lower bound on gradient estimation error\. Consequently, the standard group\-relative advantage fails to faithfully characterize response\-level utility, degrading gradient estimation and thereby impairing downstream prompt selection\. To address this issue, we propose a unified Marginalized Posterior\-Predictive framework, MaPP, for data\-efficient RLVR, which first denoises response\-level advantage estimation and then improves prompt selection using a shared Beta posterior\. Specifically, for each response, MaPP replaces the standard group\-relative advantage with a composition\-invariant intrinsic advantage via closed\-form Beta\-Binomial marginalization\. This yields a closed\-form posterior\-predictive advantage estimator whose error provably diminishes as the posterior concentrates\. Then, building on the same posterior, MaPP derives an uncertainty\-aware prompt selection score that more faithfully characterizes prompt informativeness, improving data efficiency without additional rollout cost\. Experiments across mathematics, planning, and visual geometry on five model backbones show that MaPP consistently outperforms GRPO and strong selection baselines, achieving up to \+2\.45 average accuracy improvement over the strongest baseline under the same rollout budget, a new state\-of\-the\-art\.

## Guidance For Prior Change via Density Ratio Estimation

**Authors:** Yichen Zang; Song Liu; Jiun\-Yi Lin

**ID:** 152964 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P39BOfHJq6>) | [PDF](<https://openreview.net/pdf?id=P39BOfHJq6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152964>)

Simulation\-Based Inference \(SBI\) serves as a vital framework for parameter inference in scientific fields where simulators involve intractable likelihoods, yet while amortized generative models offer rapid posterior estimation, they are often restricted by the specific priors used during training, thereby limiting their flexibility as prior knowledge evolves\. To address this prior dependency, PriorGuide was introduced as an inference\-time guidance method, but due to its intractable formulation, it relies on Gaussian approximations of the reverse transition kernel and Gaussian mixture model fitting for the prior ratio, both of which introduce systematic bias\. Motivated by these limitations, we propose an unbiased test\-time guidance framework that leverages Density Ratio Estimation \(DRE\) to learn a score guidance term, effectively decoupling the inference process from the prior training\. Moreover, our framework remains agnostic to the specific density ratio estimators, making it a general and flexible framework for handling prior changes\. Experimental results across multiple tasks demonstrate that our method outperforms PriorGuide, achieving superior performance on metrics such as C2ST and MMD in most tasks while maintaining strong robustness even under limited overlap between the training and target priors\. Furthermore, we apply our method to Bayesian updating for parameter inference from planetary light\-curve data, where it also demonstrates strong effectiveness and robustness\.

## Predictively\-Oriented Kalman Filtering

**Authors:** Zheyang Shen; Gerardo Duran\-Martin; Chris Oates

**ID:** 156147 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=01g5LQ3zyu>) | [PDF](<https://openreview.net/pdf?id=01g5LQ3zyu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156147>)

This paper presents a post\-Bayesian approach to online filtering in nonlinear state\-space models, capable of avoiding over\-confident inferences in settings where either the dynamical model, the measurement model, or \_both\_, could be misspecified\. This is addressed using \_predictively oriented\_ \(PrO\) posteriors, an emerging paradigm in which learning \(i\.e\., posterior concentration\) occurs if and only if the overall model is well\-specified, without strict adherence to the Bayes' theorem\. As the characterisation of PrO posteriors is challenging, our main technical contribution is a fast approximate linear\-Gaussian update procedure, analogous to an \(iterated\) extended Kalman filter \(EKF\)\.  The methodology, which we call PrO\-EKF, has no tunable hyper\-parameters and has a computational cost comparable to that of existing filtering methods\.  Performance is empirically assessed on a range of linear and non\-linear applications, in which the state\-space model is systematically misspecified\.

## Consistent Bayesian Spatial Domain Partitioning Using Predictive Spanning Tree Methods

**Authors:** Kun Huang; Huiyan Sang

**ID:** 156639 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156639>)

Bayesian model\-based spatial clustering methods are widely used for their flexibility in estimating latent clusters with an unknown number of clusters while accounting for spatial proximity\. Many existing methods are designed for clustering finite spatial units, limiting their ability to make predictions, or may impose restrictive geometric constraints on the shapes of subregions\. Furthermore, the posterior clustering consistency theory of spatial clustering models remains largely unexplored in the literature\. In this study, we propose a Spatial Domain Random Partition Model \(Spat\-RPM\) and demonstrate its application for spatially clustered regression, which extends spanning tree\-based Bayesian spatial clustering by partitioning the spatial domain into disjoint blocks and using spanning tree cuts to induce contiguous domain partitions\. Under an infill\-domain asymptotic framework, we introduce a new distance metric to study the posterior concentration of domain partitions\. We show that Spat\-RPM achieves a consistent estimation of domain partitions, including the number of clusters \(which may go to infinity\), and derive posterior concentration rates for partition, parameter, and prediction\. We also establish conditions on the hyperparameters to achieve consistency, offering important practical guidance for hyperparameter selection\.  Finally, we examine the asymptotic properties of our model through simulation studies and apply it to Atlantic Ocean data\.

## Closed\-Loop Alignment: Socially Coupled In\-Context Learning and Relational Posterior Collapse

**Authors:** Hidenori Tanaka

**ID:** 154248 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FBGhYmbxHz>) | [PDF](<https://openreview.net/pdf?id=FBGhYmbxHz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154248>)

Bayesian accounts of in\-context learning treat context as exogenous evidence, but in multi\-turn dialogue this assumption can fail: the assistant changes the user state that generates the next utterance, so the model updates on evidence partly produced by its own policy\. We formalize this as Socially Coupled In\-Context Learning \(SC\-ICL\)\. The relevant stability quantity is a \\emph\{round\-trip gain\} \(the product of belief\-to\-action, action\-to\-evidence, and evidence\-to\-belief derivatives\), and in a two\-state local reduction the standard spectral condition on the closed\-loop matrix factors as a product of a user\-side gain and an assistant\-side gain\. Risk is therefore dyadic: neither a susceptible user nor a responsive assistant becomes unstable without the other side of the loop\. We connect this stability boundary to a sigmoidal transition in relational\-posterior space, which explains why myopic approval\-seeking can become unstable in supportive dialogue\. AI\-\-AI experiments instantiate one\-step gain assays, free\-running conversations, open\-loop replay, and prompt\-based controllers, and four convergent results support the closed\-loop account: high\-gain dyads cross an operational collapse criterion while damping and barrier\-style controllers sharply reduce it; a trajectory\-conditioned spectral estimator separates collapsing from stable runs at the theoretical stability boundary, crossing unity near operational onset; the dyadic pattern recurs across all four pairings of GPT\-4o and GPT\-5\.4\-mini as user and assistant simulators; and a persona\-only ablation that uses no numeric coupling labels in the prompts reproduces the same dyadic collapse matrix\. The results are not clinical evidence; they argue that alignment should evaluate bounded closed\-loop inference, not only next\-response quality\.

## Closing the Approximation Gap in Simulation\-free Latent SDEs

**Authors:** Henry Smith; Brian L Trippe; Scott Linderman

**ID:** 150349 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=inTYe61WZF>) | [PDF](<https://openreview.net/pdf?id=inTYe61WZF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150349>)

Recovering dynamical systems from noisy observations is a recurring challenge across scientific domains, including neuroscience and physics\. Latent stochastic differential equations \(SDEs\) address this by modeling the system as an unobserved state that evolves according to a learnable SDE and generates the observations\. Variational inference \(VI\) provides a tractable objective for fitting latent SDEs\. Traditional VI algorithms evaluate this objective by numerical simulation over a time discretization, trading fidelity for computational cost\. A recent class of algorithms, simulation\-free VI, sidesteps this tradeoff by parameterizing the posterior through its instantaneous marginals rather than its drift\. In this work, we show that the efficiency of simulation\-free VI algorithms comes at a price: their parameterizations restrict the approximate posterior to a subset of the SDEs available to simulation\-based methods, degrading both posterior inference and parameter learning\. We propose Helmholtz\-SDE, a simulation\-free VI algorithm that closes this gap by optimizing over path laws compatible with a prescribed collection of marginals\. Helmholtz\-SDE recovers dynamics more faithfully than prior simulation\-free methods, with the largest gains under high posterior uncertainty\. It further matches the performance of simulation\-based VI at a fraction of the runtime\.

## Learning Gaussian Conditional Distributions using Neural Ratio Estimation is Hard

**Authors:** Pierre Glaser; Arthur Gretton

**ID:** 149465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=puXNHGNUWY>) | [PDF](<https://openreview.net/pdf?id=puXNHGNUWY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149465>)

Neural Ratio Estimation \(NRE\) is a popular method for performing simulation\-based posterior estimation given a known prior and samples from a joint distribution\. For such a task, it can be crucial for the posterior estimation task to be \\emph\{statistically efficient\}, i\.e\. to require as few simulations as possible to obtain an accurate posterior estimate\. However, currently, little is known about its statistical efficiency\. In this work, we bridge this gap by performing an asymptotic statistical analysis of NRE\. We show that even when the target distribution is a simple product of Gaussians, the accuracy of NRE can degrade exponentially badly with the dimension of the data distribution\. Our results show that NRE can be significantly less efficient than other conditional density methods like Maximum Likelihood Estimation, which are known to enjoy favorable statistical properties\.

## Amortized Bayesian Experimental Design with In\-Context Knowledge Conditioning

**Authors:** Zhanghu Zhao; Daolang Huang; Xinyi Wen; Samuel Kaski

**ID:** 152127 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VKgRWLKDIJ>) | [PDF](<https://openreview.net/pdf?id=VKgRWLKDIJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152127>)

Amortized Bayesian experimental design \(BED\) enables real\-time design strategies by shifting acquisition cost offline, but existing methods remain tied to the prior and task distribution they were trained on and cannot exploit additional information available at deployment\. We introduce in\-context amortized BED with unified knowledge encoding \(IMBUE\), an amortized BED framework that accepts two forms of such information without retraining, namely user\-specified prior knowledge and observations from previous instances of the experiment\. Both are encoded as additional input tokens and processed in\-context with the accumulated observations by a shared Transformer, and a learned reliability filter scores each auxiliary token against the accumulated observations and excludes inconsistent ones\. Across four standard BED benchmarks, IMBUE accelerates early\-stage information acquisition when the auxiliary knowledge is reliable, and remains close to the no\-auxiliary baseline when it is not\.

## Even More Guarantees for Variational Inference in the Presence of Symmetries

**Authors:** Lena Zellinger; Antonio Vergari

**ID:** 152346 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TjhnPIXaBU>) | [PDF](<https://openreview.net/pdf?id=TjhnPIXaBU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152346>)

When approximating an intractable density via variational inference \*VI\* the variational family is typically chosen as a simple parametric family that very likely does not contain the target\. This raises the question: \*Under which conditions can we recover characteristics of the target despite misspecification?\* In this work, we extend previous theoretical results on robust VI with location\-scale families under target symmetries in two substantial ways: \(1\) We open them up to a wider range of divergences by providing sufficient conditions for exact recovery of the target mean and correlation matrix when using the forward Kullback\-Leibler divergence and $\\alpha$\-divergences\. \(2\) By doing so, we find that we can drop the restrictive assumption of a log\-concave target made in previous work, allowing us to give guarantees for a wider range of targets, including multi\-modal ones\. In our experiments, we show how our guarantees can serve as guidelines for the choice of the variational family and $\\alpha$\-value and we illustrate on a diverse set of examples how and why optimization can fail in the absence of our sufficient conditions\.

## Annealing in variational inference mitigates mode collapse: a theoretical study on Gaussian mixtures

**Authors:** Luigi Fogliani; Bruno Loureiro; Marylou Gabrié

**ID:** 151971 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WS1Hwfq4Ay>) | [PDF](<https://openreview.net/pdf?id=WS1Hwfq4Ay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151971>)

Abstract: Mode collapse \-\-\- the failure to capture one or more modes when targetting a multimodal distribution \-\-\- is a central challenge in modern variational inference\. In this work, we provide a mathematical analysis of annealing\-based strategies for mitigating mode collapse in a tractable setting: learning a Gaussian mixture, where mode collapse is known to arise\. Leveraging a low\-dimensional summary statistics description, we precisely characterize the interplay between the initial temperature and the annealing rate, and derive a sharp formula for the probability of mode collapse\. Our analysis shows that an appropriately chosen annealing scheme can robustly prevent mode collapse\. Finally, we present numerical evidence that these theoretical trade\-offs qualitatively extend to neural network–based models, RealNVP normalizing flows, providing guidance for designing annealing strategies mitigating mode collapse in practical variational inference pipelines\.

## Ensemble Distributionally Robust Bayesian Optimisation

**Authors:** Tigran Ramazyan; Denis Derkach

**ID:** 149322 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qzmJlrajPM>) | [PDF](<https://openreview.net/pdf?id=qzmJlrajPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149322>)

We study zeroth\-order optimisation under context distributional uncertainty, a setting commonly tackled using Bayesian optimisation \(BO\)\. A prevailing strategy to make BO more robust to the complex and noisy nature of data is to employ an ensemble as the surrogate model, thereby mitigating the weaknesses of any single model\. In this study, we propose a novel algorithm for Ensemble Distributionally Robust Bayesian Optimisation that remains computationally tractable while managing continuous context\. We obtain theoretical sublinear regret bounds, improving current state\-of\-the\-art results\. We show that our method’s empirical behaviour aligns with its theoretical guarantees\.

## Very Fast Bayesian Additive Regression Trees on GPU

**Authors:** Giacomo Petrillo

**ID:** 154252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F9wjjr9v8c>) | [PDF](<https://openreview.net/pdf?id=F9wjjr9v8c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154252>)

Bayesian Additive Regression Trees \(BART\) is a nonparametric Bayesian regression technique based on an ensemble of decision trees\. It is part of the toolbox of many statisticians\. The overall statistical quality of the regression is typically higher than other generic alternatives, and it requires less manual tuning, making it a good default choice\. However, it is a niche method compared to natural competitors such as XGBoost, due to the longer running time, making sample sizes above 10000–100000 a nuisance\. We present a GPU\-enabled implementation of BART, faster by up to 100x in a given GPU vs\. CPU comparison, making BART fast enough to be a viable alternative to non\-Bayesian algorithms on large datasets, and showing that BART parallelizes better than its non\-Bayesian counterparts\. This implementation is available in the Python package bartz\.

## Task\-Driven Bayesian Experimental Design Yields Singly Intractable Objectives for Joint Policy Training

**Authors:** Tom Rossa; Angus Phillips; Thomas Rainforth

**ID:** 154411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dl4K7mz1TS>) | [PDF](<https://openreview.net/pdf?id=Dl4K7mz1TS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154411>)

Bayesian experimental design \(BED\) has traditionally been based on maximising expected uncertainty reductions from prior to posterior\. A major shortfall of this approach is that it leads to doubly intractable objectives that are difficult to optimise, while customising them to particular downstream tasks of interest can also be difficult\. Following first principles decision theory, we demonstrate that BED can alternatively be formulated in terms of an expected future loss \(EFL\) on downstream actions, providing a simple and naturally task\-driven framework\. Critically, we then show that all such EFLs can be rearranged into \*singly intractable objectives\* that can be jointly optimised with respect to both the design policy and a downstream \*action policy\* using stochastic gradient descent methods\. This formulation further sidesteps the need for any explicit posterior or marginal likelihood estimation and is naturally implicit, requiring only the ability to sample from the joint model over model parameters and data, and evaluate the downstream loss function\. It thus allows design policies to be learned more effectively, efficiently, and simply than existing methods, while providing easy customisation to different downstream tasks and losses\.

## Beyond Single\-Step Likelihood: Gibbs Variational Last Layers for Long\-Horizon Dynamics Learning

**Authors:** Paul Brunzema; Henrik Hose; Sebastian Trimpe

**ID:** 152213 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Uj5JEkvShR>) | [PDF](<https://openreview.net/pdf?id=Uj5JEkvShR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152213>)

Accurate long\-horizon probabilistic predictions of dynamical systems are a prerequisite for model\-based decision\-making\. Variational Bayesian last layers \(VBLLs\) are an attractive model class for this setting, offering tractable uncertainty at near\-deterministic cost, yet they are trained exclusively with single\-step likelihood objectives that may be insufficient for reliable multi\-step rollouts\. We revisit VBLLs through the lens of Gibbs variational inference, which decouples posterior inference from the choice of training loss\. Building on this perspective, we introduce a family of multi\-step training losses that progressively incorporate long\-horizon structure, robustness via continuous ranked probability scores \(CRPS\), and training on full autoregressive rollouts\. Our approach retains the simplicity of VBLLs while directly optimizing for multi\-step predictive quality\. Across illustrative synthetic environments, a diverse suite of chaotic dynamical systems, and real\-world data, we show that multi\-step, CRPS\-based objectives substantially improve long\-horizon accuracy and distributional fit, consistently outperforming single\-step likelihood training\.

## Approximate Bayesian inference with exchangeable distributions for neurosymbolic AI

**Authors:** Lennert De Smet

**ID:** 150027 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lK0AUkECXy>) | [PDF](<https://openreview.net/pdf?id=lK0AUkECXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150027>)

Approximate Bayesian inference has driven significant advances in probabilistic machine learning at the basis of modern generative modelling\. However, many successful Bayesian methods, such as variational inference or sequential Monte Carlo, often struggle in discrete domains with complex structure\. In particular, their application to the challenges of neurosymbolic AI, i\.e\. learning and reasoning under uncertainty, is largely unexplored\. Our contributions are twofold\. First, we show that the majority of neurosymbolic problems are problems of posterior inference motivating the use of approximate Bayesian inference for neurosymbolic AI\. Second, we adapt variational inference to the neurosymbolic setting by exploiting available symbolic structure\. Moreover, we outline what properties a reasonable variational approximation to a neurosymbolic problem should have and how to enforce these properties by connecting to statistical estimation and statistical representation theorems\. The result is a principled approach to learning and reasoning at scale that maintains statistical guarantees at test time\. This work illustrates the opportunities at the intersection of approximate Bayesian inference, and learning and reasoning under uncertainty\.

## 2\-Step Agent: How a Bayesian Decision Maker Learns from AI\-Decision Support

**Authors:** Otto Nyberg; Fausto Carcassi; Davide Tugnoli; Giovanni Cinà

**ID:** 150442 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i0SU4iqgah>) | [PDF](<https://openreview.net/pdf?id=i0SU4iqgah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150442>)

Predictions from ML models support human decision making in several fields, including high\-stakes ones such as healthcare and the judiciary\. Yet, we still lack a clear understanding of how decision makers learn from ML\-based decision support \(ML\-DS\)\. In this paper, we introduce a general computational framework, the 2\-Step Agent, to capture this process\. As a prediction from an ML model contains information about the training data, a prediction can also be used for inference\. Our framework models \(i\) how a prediction for a new observation affects the beliefs of a rational Bayesian agent, and \(ii\) how this change in beliefs affects the estimation of causal effect, the downstream decision, and the subsequent outcome\.   In addition to the framework itself, we make three contributions\. First, for the linear Gaussian setting, we derive a tractable solution for the challenging Bayesian inference problem we introduced, i\.e\. one in which the agent infers from an ML prediction\. Second, we experimentally identify conditions under which ML\-DS is beneficial\. Third, we show that a single misaligned prior belief can be sufficient for ML\-DS to lead to worse downstream outcomes compared to no decision support \*even when the ML model is well\-specified and the agent is perfectly rational\*\.  Hence, even under ideal conditions, ML\-DS can do more harm than good\.

## The Bayesian Origin of the Probability Weighting Function in Human Representation of Probabilities

**Authors:** Xin Tong; Thi Thu Uyen Hoang; Xue\-Xin Wei; Michael Hahn

**ID:** 150181 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k6mQAMfc2e>) | [PDF](<https://openreview.net/pdf?id=k6mQAMfc2e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150181>)

Humans systematically misrepresent probability in a stereotyped inverse\-S pattern\. It has been documented for decades, but its origin remains unexplained\. We propose a Bayesian encoding–decoding account in which probabilities are represented by noisy internal signals and decoded by Bayes\-risk minimization\. For bounded probability stimuli, we show that distortion decomposes into boundary regression, likelihood repulsion, and prior attraction, yielding a key prediction: the classic inverse\-S\-shaped weighting pattern implies a U\-shaped allocation of encoding precision with greater sensitivity near 0 and 1\. Across judgment of relative frequency, lottery pricing, and risky choice, this U\-shape is recovered from data without imposing any functional form on the encoding, and our framework outperforms deterministic weighting functions, bounded log\-odds models, uniform\-encoding Bayesian accounts, and matched efficient\-coding models on held\-out data\. In a new dot probability estimation experiment with bimodal stimulus statistics, the recovered prior tracks the new distribution while the recovered encoding remains U\-shaped\. Together, these results identify the inverse\-S\-shaped probability weighting function as the joint product of a stable U\-shaped encoding and a flexible prior, integrated by optimal Bayesian decoding\.

## Towards instance\-dependent regret optimality in Episodic MDPs with Posterior Sampling

**Authors:** Victor Boone; Cyrille Kone; Waris Radji; Odalric\-Ambrym Maillard; Dorian Baudry

**ID:** 153285 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MPOsD4X94t>) | [PDF](<https://openreview.net/pdf?id=MPOsD4X94t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153285>)

We study regret minimization in finite\-horizon episodic Markov Decision Processes \(MDPs\)\. While minimax\-optimal algorithms are known, tractable approaches to instance\-dependent optimality are still lacking\. Motivated by this gap, we introduce $\\pi\_0$\-PSRL, a variant of PSRL that uses posterior samples to decide when exploration is needed, while following a fixed reference policy $\\pi\_0$ during exploration episodes\. This decouples the test for exploration, triggered when the sampled and empirical MDPs have different optimal policies, from the choice of the policy used to gather information\. The resulting design addresses a limitation of standard PSRL, where the sampled optimal policy may not be the optimal choice for exploration\. We prove instance\-dependent regret bounds for $\\pi\_0$\-PSRL, identifying the logarithmic exploration cost induced by $\\pi\_0$ and taking a step toward matching asymptotic lower bounds for episodic RL\. Our proof techniques showcase a novel proof structure to derive problem\-dependent regret bounds in episodic MDPs, and concentration results for Dirichlet random variables, that may be of independent interest\.

## Bayesian Low\-Rank Posteriors for Scalable Membership Inference

**Authors:** Khanh Nguyen; Antonio Cinà; Andrey Barsky; Alejandra Reinares; Fabio Roli; Dimosthenis Karatzas

**ID:** 155148 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7y5OCsNjHI>) | [PDF](<https://openreview.net/pdf?id=7y5OCsNjHI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155148>)

Membership inference attacks \(MIAs\) aim to determine whether a sample was used during the training of a target model\. The most effective MIAs rely on reference \(or shadow\) models to estimate target\-conditional score distributions, but training such ensembles is computationally prohibitive for modern large\-scale Vision\-\-Language Models \(VLMs\)\. In this work, we propose a scalable alternative that replaces explicit reference\-model training with a Bayesian approximation over low\-rank adaptation parameters\. Leveraging parameter\-efficient fine\-tuning, we model uncertainty only within the LoRA subspace and construct a posterior from a single training run, from which we sample a diverse set of virtual reference models\. We instantiate this approach using stochastic weight averaging Gaussian \(SWAG\), enabling efficient approximation of target\-conditional score distributions at a fraction of the cost of conventional shadow\-model ensembles\. We evaluate the resulting attack on three downstream\-adapted VLMs across two privacy\-sensitive visual question answering tasks, namely Document VQA and medical VQA\. To isolate the effect of pretraining knowledge, we additionally introduce a controlled synthetic dataset\. Our approach outperforms standard reference\-based attacks while requiring only a single trained reference model, demonstrating that accurate and scalable membership inference is feasible even for large VLMs\.

## The Bayesian Learning Rule Beyond KL Geometry

**Authors:** SOPHIA SKLAVIADIS; Wu Lin; Mario Figueiredo; André Martins; Thomas Möllenhoff; Mohammad Emtiyaz Khan

**ID:** 150013 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lQY2mQuDx9>) | [PDF](<https://openreview.net/pdf?id=lQY2mQuDx9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150013>)

The Bayesian learning rule \(BLR\) exploits the relation between Bayesian updating and the Kullback\-Leibler divergence \(KLD\) to derive efficient additive updates for exponential\-family variational posteriors\. The KL geometry is powerful but restrictive: combined with posterior families with parameter\-dependent support it can lead to undefined objectives\.  We ask which non\-KL geometries preserve the additive BLR computation\. Previous works that use  $f$\-divergences suggest that this is only possible with KLD\. Here, we show that this is not true\. We show that additive information\-geometric optimization algorithms can be derived for the class of mixed\-space Bregman or Fenchel\-Young discrepancies\. These discrepancies induce generalized maximum entropy families, dual coordinates, and generalized BLR canonical gradient updates, recovering the classical BLR\.  The generalized BLR leads to new algorithms that \\textit\{cannot\} be derived from the KL\-based BLR\. For the Tsallis negentropy with quadratic statistics, the generalized BLR yields bounded\-support and heavy\-tailed $q$\-Gaussian posteriors and an easy Newton\-like implementation\. Experiments up to CIFAR\-100 illustrate controllable support and tail behavior and competitive performance\.

## Likelihood\-free inference of phylogenetic tree posterior distributions

**Authors:** Luc Blassel; Noémie Sauvage; Pierre Barrat\-Charlaix; Bastien Boussau; Nicolas Lartillot; Laurent Jacob

**ID:** 153620 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K2eL2jNv9K>) | [PDF](<https://openreview.net/pdf?id=K2eL2jNv9K>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153620>)

Phylogenetic inference, the task of reconstructing how related sequences evolved from common ancestors, is a central objective in evolutionary genomics\. The current state\-of\-the\-art methods exploit probabilistic models of sequence evolution along phylogenetic trees, by searching for the tree maximizing the likelihood of observed sequences, or by estimating the posterior of the tree given the sequences in a Bayesian framework\. Both approaches typically require to compute likelihoods, which is only feasible under simplifying assumptions such as independence of the evolution at the different positions of the sequence, and even then remains a costly operation\. Here we present the first likelihood\-free inference method for posterior distributions over phylogenies\. It exploits a novel expressive encoding for pairs of sequences, and a parameterized probability distribution factorized over a succession of subtree merges\.  The resulting network provides well\-calibrated estimates of the posterior distribution leading to more accurate tree topologies than existing methods, even under models amenable to likelihood computation\. We further show that its edge against likelihood\-based methods dramatically increases under models of sequence evolution with intractable likelihoods\.

## Maxitive Donsker\-Varadhan Formulation for Possibilistic Variational Inference

**Authors:** Jasraj Singh; Shelvia Wongso; Jeremie Houssineau; Badr\-Eddine Cherief\-Abdellatif

**ID:** 154822 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AhK1Iks6GD>) | [PDF](<https://openreview.net/pdf?id=AhK1Iks6GD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154822>)

Variational inference \(VI\) is a cornerstone of modern Bayesian learning, enabling approximate inference in complex models\. However, its formulation depends on expectations and divergences defined through high\-dimensional integrals, often rendering analytical treatment impossible and necessitating heavy reliance on approximations\. Possibility theory, an imprecise probability framework, allows us to directly model epistemic uncertainty instead of relying on a subjective interpretation of probabilities\. While this framework provides robustness and interpretability under sparse or imprecise information, adapting VI to the possibilistic setting requires rethinking core concepts such as divergences, which presuppose additivity\. In this work, we develop a principled formulation for performing possibilistic VI by establishing a maxitive analogue of the classical Donsker\-Varadhan formulation\. The resulting framework enables us to derive a learning rule for possibilistic VI with exponential\-family candidates and practical update rules for neural\-network training, giving rise to a family of optimizers termed \*CBOpt\*\. Finally, we demonstrate that \*CBOpt\* achieves competitive performance on both in\-domain and out\-of\-domain image classification tasks\.

## Robust Amortized Simulation\-Based Inference via Learned Error Models

**Authors:** Matthew O&amp;amp;\#x27;Callaghan; Kaisey Mandel; Gerard Gilmore

**ID:** 151610 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZGDfWRoYTN>) | [PDF](<https://openreview.net/pdf?id=ZGDfWRoYTN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151610>)

Recent advances in neural density estimation have enabled amortized Bayesian inference for complex stochastic simulators\. However, these methods rely on simulators accurately reflecting the true data\-generating process and can degrade significantly under model misspecification\. We consider the setting where multiple unlabeled observations are available and introduce robust variational neural posterior estimation \(RVNP\), an amortized Bayesian inference method that uses an importance\-weighted autoencoder to jointly learn a misspecification\-robust posterior and an explicit error model that captures the misspecification gap\. Our results show that RVNP can recover robust posterior inference in a data\-driven and interpretable manner, outperforming previous methods across multiple metrics and misspecified benchmarks\.

## Theoretical guidelines for annealed Langevin dynamics in compositional simulation\-based inference

**Authors:** Camille Touron; Gabriel Cardoso; Julyan Arbel; Pedro Rodrigues

**ID:** 148461 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=xdr2AIOz88>) | [PDF](<https://openreview.net/pdf?id=xdr2AIOz88>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148461>)

Compositional score\-based approaches to simulation\-based inference \(SBI\) approximate the posterior over a shared parameter given $n$ independent observations by aggregating individually learned posterior scores: currently, there are two main propositions of such methods \(Geffner et al\., 2023; Linhart et al\., 2026\)\. As the resulting composite score does not correspond to the score of any distribution along the forward diffusion path of the true multi\-observation posterior, sampling from it via a reverse SDE leads to an irreducible bias\. Annealed Langevin dynamics provides a principled alternative: it treats the composite score as the genuine score of a sequence of tractable bridging densities and samples from them in succession\. When properly tuned, it could lead to a controllable bias\. However, its hyperparameters, namely step sizes, the number of steps per level, and the number of annealing levels, have so far been chosen empirically\. We derive Wasserstein bounds for annealed Langevin with approximate scores and translate them into explicit decision rules for these hyperparameters that guarantee a prescribed sampling accuracy, while highlighting different theoretical aspects of each composite score formulation\. In the Gaussian setting, we obtain closed\-form expressions for all relevant quantities and prove that the bridging densities of Linhart et al\. \(2026\) consistently admit larger step sizes and require fewer total Langevin steps than those of Geffner et al\. \(2023\)\. Furthermore, we show empirically that the tuning obtained in the Gaussian setting generalizes to more complex problems, thus providing a well\-understood and theoretically grounded starting point for practitioners using compositional score\-based approaches\.

## Privacy Guarantees in Posterior Sampling under Contamination

**Authors:** Shenggang Hu; Hongsheng Dai; Louis Aslett; Murray Pollock; Gareth Roberts

**ID:** 156638 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156638>)

In recent years, differential privacy has been adopted by tech\-companies and governmental agencies as the standard for measuring privacy in algorithms\. 
In this article, we study differential privacy in Bayesian posterior sampling settings\. 
We begin by considering differential privacy in the most common privatisation setting in which Laplace or Gaussian noise is injected into the output\. 
In an effort to achieve better differential privacy, we consider adopting \{\\em Huber's contamination model\} for use within privacy settings, and replace at random data points with samples from a heavy\-tailed distribution \(\{\\em instead\} of injecting noise into the output\)\. 
We derive bounds for the differential privacy level $\(\\epsilon,\\delta\)$ of our approach, without requiring bounded observation and parameter spaces, a restriction commonly imposed in the literature\.
We further consider for our approach the effect of sample size on the privacy level and the rate at which $\(\\epsilon,\\delta\)$ converges to zero\.
Asymptotically, our contamination approach is fully private with no information loss\.
We also provide examples of inference models for which our approach applies, with theoretical convergence rate analysis and simulation studies\.

## What Can Labels Alone Audit and Edit in Frozen Representations?

**Authors:** Yirong Xiang; Yibo Zhou

**ID:** 155411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rXQteakrg>) | [PDF](<https://openreview.net/pdf?id=5rXQteakrg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155411>)

Frozen representations are often adapted using task labels alone, without environment, nuisance, or concept annotations\. In this label\-only regime, the first question is identifiability: what semantic target is actually determined by the joint law of representation and label? We show that labels identify only the posterior quotient, equivalently the coarsest deterministic representation that preserves all label information, and do not identify a finer semantic/background decomposition\. This yields a quotient\-first principle for label\-only auditing and editing: first estimate a low\-dimensional label\-sufficient surrogate, then analyze residual class\-dependent structure only after removing it\. Under a structured linear second\-order specialization, this leads to dual\-moment decomposition \(DMD\)\. Empirically, stage one is a strong semantic audit and label\-preserving compression baseline across frozen CelebA, Waterbirds, and PACS features, while stage\-two residual editing improves leakage\-\-label tradeoffs only in some regimes\. Overall, the results support a conservative recipe for label\-only frozen\-feature editing: preserve the quotient first, and trust residual edits when residual support and split stability are strong\.

## Maximin Robust Bayesian Experimental Design

**Authors:** Hany Abdulsamad; Sahel Iqbal; Christian Andersson Naesseth; Takuo Matsubara; Adrien Corenflos

**ID:** 151052 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dLiJdxU8o7>) | [PDF](<https://openreview.net/pdf?id=dLiJdxU8o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151052>)

We address the brittleness of Bayesian experimental design under model misspecification by formulating the problem as a max\-\-min game between the experimenter and an adversarial nature subject to information\-theoretic constraints\. We demonstrate that this approach yields a robust objective governed by Sibson's $\\alpha$\-mutual information \(MI\), which identifies the $\\alpha$\-tilted posterior as the robust belief update and establishes the R\\'enyi divergence as the appropriate measure of conditional information gain\. To mitigate the bias and variance of nested Monte Carlo estimators needed to estimate Sibson's $\\alpha$\-MI, we adopt a PAC\-Bayes framework to search over stochastic design policies, yielding rigorous high\-probability lower bounds on the robust expected information gain that explicitly control finite\-sample error\.

## Learning Density Operator Latent Variable Models via Quantum Information Projection

**Authors:** Adit Vishnu; Abhay Shastry; Dhruva Kashyap; Chiranjib Bhattacharyya

**ID:** 155010 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9GrrknkD1l>) | [PDF](<https://openreview.net/pdf?id=9GrrknkD1l>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155010>)

Latent variable models based on density operators, the mathematical foundation of quantum mechanics, remain far less capable than their probabilistic counterparts\. This is primarily due to the lack of an Expectation\-Maximization \(EM\) framework for learning density operator models, since the absence of conditional probability for density operators prevents a direct extension of the classical derivation\. This paper addresses this challenge by proposing Density Operator Expectation Maximization \(DO\-EM\), using tenets from quantum information theory\. We first derive an operator\-theoretic analog of the evidence lower bound from the data processing inequality and study its maximization as a projection onto the data manifold\. We solve this information projection problem while also improving existing information recovery results\. The DO\-EM algorithm guarantees monotone likelihood ascent for a rich class of models and is simpler than direct likelihood gradient ascent\. The Expectation step recovers the Petz Recovery Map when the model class can be aligned with the target operator\. We specialize these models to Classical\-Quantum LVMs which scale to standard image datasets via a per\-datapoint decomposition of the variational bound and outperform their classical counterparts under matched computational resources\.

## On the Construction and Implications of Low\-Loss Valleys in LoRA\-based Bayesian Inference

**Authors:** Daniel Dold; Emanuel Sommer; Julius Kobialka; Oliver Dürr; David Rügamer

**ID:** 151532 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZzGCahbGHm>) | [PDF](<https://openreview.net/pdf?id=ZzGCahbGHm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151532>)

While parameter\-efficient fine\-tuning methods like low\-rank adaptation \(LoRA\) are standard for large language models, principled estimation of epistemic uncertainty remains challenging\. Recent results in the LoRA regime suggest that discrete multi\-mode approaches such as deep ensembles offer little benefit over single\-mode methods\. This contradicts broader observations in deep learning, where ensembling independent optima typically improves generalization, and linking these modes through continuous low\-loss valleys further enhances Bayesian model averaging \(BMA\)\. Whether such structure exists in the LoRA space and whether it yields functional diversity missed by local or discrete methods has not been studied\. We introduce LoRA\-Curve , a segmented Bézier curve parameterization in the LoRA space, with two variants: a free configuration that jointly optimizes all control points, and an anchored configuration that connects independently fine\-tuned LoRA optima\. We prove pathwise continuity and Lipschitz regularity of the loss along the curve and empirically show, across reasoning and classification benchmarks with Qwen2\.5 7B, that linear interpolation encounters loss barriers, while our anchored multi\-segment curves connect independent optima through continuous low\-loss valleys\. Combined with flat\-minima perturbations and a Jensen\-Shannon divergence regularizer, LoRA\-Curve yields measurably higher mutual information of the predictive distribution without sacrificing performance, and links continuous parameter\-space traversal to functional diversity\.

## Residual Expertise Is Not Decision Value

**Authors:** Nidhish Shah; Shaurjya Mandal; Asfandyar Azhar

**ID:** 152370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZTKPXkDDu>) | [PDF](<https://openreview.net/pdf?id=TZTKPXkDDu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152370>)

Audits of human\-AI complementarity target the wrong estimand\. They ask whether the human knows more than the model; deployment asks whether that knowledge would change the action\. Residual predictive expertise is not residual decision value\. Deployment rewards actions, and a posterior movement that does not cross a reward\-induced action boundary changes nothing; a signal can be informative under log\-loss and leave the deployed action unchanged\. We formalize the missing quantity as \*\*boundary regret\*\*: the regret of holding the model's action after observing the human\. In any finite\-action Bayesian decision problem, the value of consulting the human equals expected boundary regret, formally verified in Lean 4\. The identity turns when humans help into a geometric question: which decision facets does the human signal move belief across? Complementarity is therefore reward\-relative\. A given human signal can be valuable under one reward matrix and worthless under another, the human's knowledge unchanged; the boundary moved, not the expertise\. The gap is widest precisely where asymmetric costs dominate: high\-stakes clinical and operational decisions\. Audits built on residual predictive expertise overstate the value of human review and route scarce review toward cases where the human is informative but the action will not move\. Boundary regret is the quantity to measure\.

## Flow\-Transformed Implicit Processes for Function\-Space Variational Inference

**Authors:** Luis A\. Ortega; Andres Masegosa; Thomas Nielsen

**ID:** 152012 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WAVaNTVafF>) | [PDF](<https://openreview.net/pdf?id=WAVaNTVafF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152012>)

Implicit\-process priors define distributions over functions through flexible generative mechanisms, making them attractive for Bayesian function\-space modelling\. However, performing posterior inference with such priors is challenging because their induced function\-space distributions are typically not available in closed form\. One practical strategy is to approximate the prior using a finite collection of sampled functions, and then represent posterior functions as learned combinations of these samples\. Existing approaches commonly place a Gaussian variational distribution over the combination weights\. While tractable, this choice limits the shapes of posterior uncertainty that can be represented, especially when the true posterior is asymmetric, heavy\-tailed, or multimodal\. We propose Flow\-Transformed Implicit Processes \(FTIP\), a variational inference method that makes this finite\-dimensional function\-space approximation more expressive\. Instead of using a Gaussian distribution over the combination weights, FTIP uses a normalizing flow to define a richer variational distribution\. This induces a flexible posterior distribution over functions while preserving tractable optimization\. We train the model using a Black\-Box $\\alpha$ objective, allowing us to compare mass\-covering and mode\-seeking variational behaviour\. Experiments show that FTIP captures asymmetric and multimodal posterior structure in function space that Gaussian coefficient approximations tend to smooth or collapse\.

## Bayesian Additive Distribution Regression

**Authors:** Antonio R Linero; Jared Murray; Soumyabrata Bose

**ID:** 152064 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Vjv0vxvgq9>) | [PDF](<https://openreview.net/pdf?id=Vjv0vxvgq9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152064>)

Distribution regression, where the goal is to predict a scalar response from a distribution\-valued predictor, arises naturally in settings where observations are grouped and outcomes depend on group\-level characteristics rather than on individual measurements\. We introduce DistBART, a Bayesian nonparametric approach to distribution regression that models the regression function as a linear functional with the Riesz representer assigned a Bayesian additive regression trees \(BART\) prior\. We argue that shallow decision tree ensembles encode reasonable inductive biases for tabular data, making them appropriate in settings where the functional depends primarily on low\-dimensional marginals of the distributions\. We show this both empirically on synthetic and real data and theoretically through an adaptive posterior concentration result\. We also establish connections to kernel methods, and use this connection to motivate variants of DistBART that can learn nonlinear functionals\. To enable scalability to large datasets, we develop a random\-feature approximation that samples trees from the BART prior and reduces inference to sparse Bayesian linear regression, achieving computational efficiency while retaining uncertainty quantification\.

## Bayesian Preference Learning for Test\-Time Steerable Reward Models

**Authors:** Jiwoo Hong; Shao Tang; Zhipeng Wang

**ID:** 150486 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hjMgNSnHgL>) | [PDF](<https://openreview.net/pdf?id=hjMgNSnHgL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150486>)

Reward models are central to aligning language models with human preferences via reinforcement learning \(RL\)\. As RL is increasingly applied to settings such as verifiable rewards and multi\-objective alignment, RMs are expected to encode more complex and multifaceted preference distributions\. However, classifier RMs remain static once trained, limiting their adaptability at test time\. We propose Variational In\-Context Reward Modeling \(ICRM\), a novel Bayesian reward modeling objective that enables test\-time steerability via in\-context preference demonstrations\. ICRM casts reward modeling as amortized variational inference over a latent preference probability under the Bradley\-Terry model using a conjugate Beta prior\. We show that ICRM adapts to unseen preference distributions at test time for both single and multi\-objective settings\. With more demonstrations, ICRM improves RM\-Bench accuracy from 60\.5 to 70\.8, achieves lower calibration error than a generative judge on moral dilemma preferences, and expands the attainable Pareto frontier under conflicting preferences\. We further study the practical applicability of ICRM for RL training, showing that it can effectively encode verifiable rewards by outperforming a conventional RM in math reasoning\. Finally, we provide theoretical guarantees that the variational objective admits a global interior optimum with finite confidence, and we analyze how KL regularization mitigates reward over\-optimization\.

## ELPAC: Endpoint\-Anchored Latent Progression with Stage\-Varying Multimodal Coordination

**Authors:** Shengxian DING; Yifei Zhang; Xinyuan Tian; Yuanshuang Guo; Zhao

**ID:** 154929 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9u0n8IU711>) | [PDF](<https://openreview.net/pdf?id=9u0n8IU711>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154929>)

Aging cohorts increasingly combine imaging, plasma, and cognitive measurements, but most subjects provide only a partially observed cross\-sectional snapshot, leaving latent stage, progression subtype, and stage\-varying multimodal coordination to be inferred jointly\. Existing methods estimate the cohort\-level aging process, model covariance under observed covariates, or fuse modalities for prediction\. However, they rarely target the joint problem of endpoint\-anchored staging and progression\-resolved residual coordination across modalities, even though subject staging, subtype assignment, and multimodal interplay are mutually dependent\. We introduce ELPAC, a Bayesian framework with two interlocking constructions\. The first integrates subtype trajectories backward from clinically reliable endpoint groups along biologically structured velocity components encoding modality\-specific monotone direction and optional sequential ordering priors\. The second factorizes residual multimodal variation around the inferred stage axis into sparse coordination axes whose loadings and activations expose which multimodal patterns are operative in each subtype and when they emerge, with stage\-resolved variation supplying the auxiliary structure for conditional identifiability\. We use a scalable amortized variational inference scheme that enables joint posterior inference at cohort scale with single\-pass deployment on new subjects\. On synthetic data and a harmonized ADNI\+NACC/SCAN Alzheimer's cohort, ELPAC demonstrates accurate latent\-structure recovery, well\-calibrated prediction intervals, and biologically interpretable multimodal coordination programs that differ by subtype\.

## Not all uncertainty is alike: volatility, stochasticity, and exploration

**Authors:** Payam Piray

**ID:** 152109 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VSnGy8znmQ>) | [PDF](<https://openreview.net/pdf?id=VSnGy8znmQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152109>)

Adaptive decision\-making in biological and artificial intelligence requires balancing the exploitation of known outcomes with the exploration of uncertain alternatives\. Although prior work suggests that uncertainty generally promotes exploration, it has typically treated distinct sources of environmental uncertainty as equivalent\. We consider environments with latent reward states that drift over time \(volatility\) and are observed through noisy outcomes \(stochasticity\)\. Both increase posterior uncertainty, yet we show they drive optimal exploration in opposite directions: volatility enhances it, stochasticity suppresses it\. We establish this asymmetry formally by extending the Gittins index framework to Gaussian state\-space bandits with latent dynamics\. We further derive Cause\-Aware Uncertainty\-Sensitive Exploration \(CAUSE\), a closed\-form exploration bonus obtained via control\-as\-inference that inherits the same monotonicities\. CAUSE outperforms standard exploration strategies in environments with heterogeneous noise structure, and also improves on a Gittins\-per\-arm policy whose rested\-bandit optimality does not transfer to restless settings\. Learning and exploration are governed by the same noise\-inference asymmetry, and the framework predicts that pathological noise inference produces reversed rather than merely impaired exploration, with implications for computational accounts of psychiatric conditions\.

## Joint Confounder Selection for Causal Mediation Analysis in High Dimensions

**Authors:** Chanmin Kim; Hyunwoo Kim

**ID:** 153898 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=HsloWr8Orf>) | [PDF](<https://openreview.net/pdf?id=HsloWr8Orf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153898>)

The estimation of causal effects in observational research fundamentally relies on proper adjustment for confounding variables\. While data\-driven confounder selection is well\-established for conventional exposure\-outcome analyses, such methodologies remain underdeveloped in causal mediation analysis\. This paper proposes a Bayesian nonparametric framework for confounder selection in mediation analysis using Bayesian Additive Regression Trees \(BART\)\. We introduce a shared sparsity\-inducing prior across the exposure, mediator, and outcome models to identify the minimal sufficient adjustment set that satisfies the mediation disjunctive cause criterion\. Importantly, we provide rigorous theoretical guarantees for the proposed method: we establish the posterior consistency of confounder selection even in high\-dimensional regimes \($P \\gg N$\) and demonstrate that this selection consistency translates into the consistent estimation of natural direct and indirect effects\. The proposed method demonstrates consistently strong performance across a range of simulation scenarios, offering a principled and practical approach for high\-dimensional mediation analysis\.

## Denoising Implicit Variational Inference

**Authors:** Zitong Wang; Zekun Wu; Longlin Yu; Cheng Zhang

**ID:** 154041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GfgvZIgKUs>) | [PDF](<https://openreview.net/pdf?id=GfgvZIgKUs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154041>)

Semi\-implicit variational inference \(SIVI\) expands the representational capacity of variational families, but optimizing the Evidence Lower Bound \(ELBO\) remains challenging because the marginal score of the semi\-implicit distribution is generally intractable\. Unbiased Implicit Variational Inference \(UIVI\) and related methods address this difficulty through reparameterized ELBO gradients, but existing approaches estimate the required score indirectly through reverse\-conditional sampling or approximation, which can be computationally costly and unstable\. We propose Denoising Implicit Variational Inference \(DIVI\), which learns the marginal score directly via denoising score matching\. The learned score is used as a plug\-in estimator in the pathwise ELBO gradient, replacing inner reverse\-conditional sampling with a score\-network evaluation\. We analyze DIVI as inexact stochastic gradient ascent and show, under stated assumptions, that the averaged stationarity measure is controlled by the usual optimization term and the average score\-matching error\. Empirically, we evaluate DIVI on both synthetic distributions and a variety of real\-data Bayesian inference tasks\. The results show that DIVI improves over the current UIVI baselines while reducing the cost of ELBO\-gradient estimation\.

## PosteriorBench: From Point Estimates to Posterior Matching in Evaluating Generative Inverse Solvers

**Authors:** Jiachen Yao; Zi\-Siang Hsu; Xi Deng; Aditi Gupta; Xin Ju; Animashree Anandkumar

**ID:** 139158 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hgrLMsJXIE>) | [PDF](<https://openreview.net/pdf?id=hgrLMsJXIE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139158>)

Generative models are increasingly used to solve scientific inverse problems, but existing evaluations still focus primarily on whether a method can produce a single plausible reconstruction\. This is insufficient for ill\-posed problems, where multiple solutions may be consistent with the same sparse or noisy observations\. In these settings, a method can achieve strong pointwise accuracy while still failing to capture the true posterior through mode collapse, over\-confident uncertainty, or averaging incompatible solutions\. We introduce PosteriorBench, a benchmark for evaluating the distributional accuracy of generative inverse solvers\. PosteriorBench evaluates four physics\-based inverse problems: Darcy flow inversion, Poisson source recovery, carbon capture and storage, and light transport material inference\. For each task, we construct high\-fidelity reference posteriors using slow but established procedures such as rejection sampling and Markov chain Monte Carlo, enabling direct assessment of whether solvers recover the full set of solutions rather than the single best sample\. The benchmark spans sparse sensing, low\-resolution observations, nonlinear forward models, varying noise levels, and multimodal priors, with a unified pipeline for distribution matching, uncertainty quantification, and hyperparameter calibration\. Our experiments reveal substantial distribution\-matching gaps across current solvers, while showing that neural operators improve resolution robustness and that guidance weights and generation noise are key to posterior\-variance calibration\.

## Mecha\-nudges for Machines

**Authors:** Giulio Frey; Kawin Ethayarajh

**ID:** 156000 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1GN874s1AI>) | [PDF](<https://openreview.net/pdf?id=1GN874s1AI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156000>)

AI agents are becoming active decision\-makers on the Internet\. As they make decisions in the same environments as humans, the environments themselves can change to influence them\. We call this $\\textit\{mecha\-nudging\}$: changes to how choices are presented that systematically influence AI agents without materially degrading the decision environment for humans\. To measure this phenomenon, we combine two frameworks\-\-\-$\\textit\{Bayesian persuasion\}$ from economics and $\\mathcal\{V\}$\-$\\textit\{usable information\}$ from computer science\-\-\-to get a common unit \(bits\) for quantifying how environments change across a wide range of interventions, contexts, and models\. We apply this framework to over six million Etsy listings and find that, after ChatGPT’s release, listings contain significantly more machine\-usable information for predicting agent curation decisions, increasing by 0\.143 bits out of a maximum possible increase of 0\.355\. This shift is robust across prompts, token choices, labeling models, and fine\-tuning architectures; absent in a regulated\-text placebo; and far larger than the effect of generic LLM rewriting\. In contrast, a human study finds little to no change in human\-usable information\. Our results provide the first large\-scale evidence that systematic mecha\-nudging is already occurring in the wild\.

## CLUE: Correlated Latent Uncertainty for Single\-Pass Deep Uncertainty Estimation

**Authors:** Yucheng Wang; Wenyuan Zhao; Weifeng Zhang; Chao Tian; Xiaoning Qian

**ID:** 151334 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bJi84wx0rb>) | [PDF](<https://openreview.net/pdf?id=bJi84wx0rb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151334>)

We present Correlated Latent Uncertainty Estimation \(CLUE\), a single\-pass deep uncertainty quantification framework that combines efficient amortized neural prediction with Bayesian\-style information propagation across inputs\. CLUE introduces a kernel\-based prior, allowing cross\-input dependence over latent variables while preserving test\-time inference efficiency\. CLUE requires neither posterior sampling nor ensembles, and avoids matrix inversion during inference, yet recovers posterior contraction behavior analogous to conventional Bayesian models\. In the white\-noise limit of the kernel, CLUE reduces to standard evidential deep learning \(EDL\)\. This limiting case reveals standard EDL as amortized variational inference with an independent latent structure, providing a probabilistic explanation for several pathologies of EDL identified in prior work\. Empirically, CLUE exhibits consistent Bayesian\-like uncertainty contraction and improved uncertainty quality across synthetic and real\-world benchmarks, while maintaining competitive predictive accuracy and fast single\-pass inference\.

## Posterior Alternative Calibration in Ambiguous Inverse Problems

**Authors:** Jing Qiao; Yiyang Guo; Hao Ye

**ID:** 154341 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EKatBiU7g8>) | [PDF](<https://openreview.net/pdf?id=EKatBiU7g8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154341>)

Ambiguous inverse problems often admit multiple clean signals that are consistent with the same observation\. In such settings, a sampler should not only produce plausible or measurement\-consistent reconstructions, but also allocate probability mass correctly across the alternatives that remain unresolved\. We formalize this requirement as \\emph\{posterior alternative calibration\} and introduce mode coverage error \(MCE\), a finite\-alternative diagnostic that measures calibration after pushing the posterior and sampler distributions onto a benchmark\-specified alternative label space\. This perspective reveals a basic failure mode of point\-centered inverse solvers: measurement consistency can be preserved by averaging across alternatives, even when the resulting point lies outside the nonconvex set of valid posterior explanations\. We prove that local point\-denoising updates can therefore suffer barycentric collapse under weak branch identification, while calibrated local branch probabilities are sufficient to control MCE\. Across controlled Gaussian, imbalanced, nullspace, and template\-inpainting diagnostics, MCE exposes posterior mass\-allocation failures that are missed by residual error, recall, diversity, and confidence\. A semantic\-label inpainting benchmark with DDIM, DPS, DDNM, RePaint, and clustering\-based samplers further shows that practical samplers can recover all specified alternatives while assigning different branch probabilities\. These results position MCE as a targeted evaluation axis for finite\-alternative ambiguity benchmarks, complementary to reconstruction fidelity and sample quality\.

## Routing as a Singular Reparameterization: A Closed\-Form Pushforward Prior and Exact Bayesian Complexity in a Minimal Proxy

**Authors:** Ali Mehrabian; Mahdi Mazloum

**ID:** 151665 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YvtR4LF35m>) | [PDF](<https://openreview.net/pdf?id=YvtR4LF35m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151665>)

A two\-branch routed regressor realizes exactly the function class of ordinary quadratic regression\. Because routing does not enlarge the observable function class here, the routed model differs from quadratic regression only through the prior induced by routed coordinates\. We compute this induced prior in closed form and show that fiber integration along the routing map creates a logarithmically singular density on the linear submodel\. The induced posterior over quadratic coefficients then coincides exactly with the quadratic\-regression posterior under the pushed\-forward prior, isolating the role of prior geometry in this proxy model\. For compactly supported priors on linear truth \($q\_2=0$\), the support\-relative global real log canonical threshold \(RLCT\) is $\(3/2,2\)$ when the support reaches the collapsed stratum and $\(3/2,1\)$ when it avoids it; under the full\-support Gaussian\-coordinate prior, the global RLCT is $\(3/2,2\)$\. Against smooth coefficient\-space baselines with the same known noise variance on linear truth, this singular\-versus\-smooth prior comparison yields a rigorous $\\log\\log n$ Bayes\-factor advantage\. The same multiplicity\-$2$ product singularity transfers locally to sigmoid gates on linear truth and extends locally to $d$\-dimensional inputs\.

## DBPS: Doob\-Bridge Posterior Sampler with Balanced Endpoint\-Population Control for Unpaired Neurodegenerative Pathology Transport

**Authors:** Xinyu Guo; Jiajia Xie; Xin He; Christophe Ye; Batuhan Nursal; Hongyu Xue; Cassie Mitchell

**ID:** 154080 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLIYSpGCJP>) | [PDF](<https://openreview.net/pdf?id=GLIYSpGCJP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154080>)

Modeling neurodegenerative pathology from observational cohorts is challenging because subjects are typically observed as unpaired endpoint snapshots rather than aligned longitudinal trajectories\. Existing approaches to pathology transport are either endpoint\-conditioned or population\-level, yet neither extreme alone yields the best terminal\-distribution fit\. We introduce the Doob\-Bridge Posterior Sampler \(DBPS\), a controlled\-SDE posterior sampler with balanced endpoint\-population control that blends individual endpoint guidance with population\-level guidance\. This ρ\-weighted controller, obtained as the Cole–Hopf log\-gradient of a geometric interpolation between endpoint and population desirability functions, is the exact optimal feedback policy of a linearly\-solvable stochastic optimal control problem with closed\-form terminal and running costs\. Endpoint\-conditioned bridge sampling and population Doob sampling are the ρ = 0 and ρ = 1 boundary cases; ρ ∈ \(0, 1\) realizes the genuine balanced regime\. We evaluate DBPS on tau PET pathology transport in Alzheimer’s disease across ADNI and NACC cohorts \(84 brain regions\)\. Compared to representative baselines from all major unpaired\-transport families, DBPS achieves state\-of\-the\-art performance across multi\-cohort settings \(union training: SWD 0\.760 vs\. 0\.821; held\-out ADNI: 0\.822 vs\. 0\.859\), and remains competitive in single\-cohort training \(ADNI: 0\.868 vs\. 0\.876\)\. Beyond distribution matching, the learned controls recover canonical Braak\-stage pathology organization without anatomical supervision, suggesting that balanced SOC objectives capture biologically meaningful structure in latent neurodegenerative progression\.

## Learning to Persuade a Biased Receiver

**Authors:** Yuqi Pan; Sadie Zhao; Milind Tambe; Yiling Chen

**ID:** 149687 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAvynqaMfM>) | [PDF](<https://openreview.net/pdf?id=oAvynqaMfM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149687>)

We study a repeated information design setting in which the receiver, who is also the decision\-maker, updates beliefs in a systematically biased way\. More specifically, a distorted posterior in our model can be written as a convex combination of the prior and the Bayesian posterior, governed by a fixed but unknown parameter\. Over repeated interactions, the sender chooses persuasive signaling schemes, observes only the receiver’s realized actions, and seeks to minimize regret relative to a full\-information oracle that knows the receiver’s biased updating rule\. We propose a safe exploration algorithm for learning the receiver’s bias while maintaining high persuasion value\. The algorithm exploits the asymmetric cost of probing: conservative probes incur only local loss, whereas overly aggressive probes may lose the persuasive opportunity entirely\.  For general finite state and action spaces and arbitrary bounded utilities, our method achieves $O\(\\log\\log T\)$ regret\. A matching $\\Omega\(\\log\\log T\)$ lower bound shows that this rate is optimal\. We further discuss the influence on receiver welfare, as well as extensions to jointly unknown prior and bias, and contextual settings with time\-varying priors and utilities\.

## B\-CALM: Bias\-Limited Bayesian Borrowing for RCT\-Anchored Treatment Effects under Covariate Mismatch

**Authors:** Amir Asiaee; Samhita Pal

**ID:** 155646 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=43vGcbI7xt>) | [PDF](<https://openreview.net/pdf?id=43vGcbI7xt>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155646>)

Randomized controlled trials \(RCTs\) identify trial\-anchored treatment effects but are often too small for reliable heterogeneity estimation; observational studies \(OS\) are larger but confounded and only partially overlap the trial in measured covariates\. We propose Bayesian Calibrated ALignment under covariate Mismatch \(B\-CALM\), a Bayesian borrowing framework for RCT\-anchored conditional average treatment effect \(CATE\) estimation\. B\-CALM maps source\-specific covariates into a shared latent state, jointly models trial and observational outcome surfaces, and introduces baseline\-bias and comparative\-bias functions that absorb how the OS departs from the trial estimand\. The comparative\-bias prior becomes an explicit sensitivity knob: we prove a function\-valued bias\-limited information bound showing that observational contrast information about the trial treatment\-effect surface is capped by the prior precision of this bias function, with a scalar corollary in which the effective sample size \(ESS\) saturates as OS sample size grows\. A PAC\-Bayes\-style risk decomposition separates RCT empirical risk, latent alignment, and residual calibration of the debiased OS surface\. Across synthetic, semi\-synthetic, and pediatric\-obesity external\-control studies, B\-CALM delivers calibrated credible intervals and low negative transfer while pooled and forest baselines can become overconfident under comparative bias\.

## DnNP: Denoising Input Uncertainty in Neural Processes

**Authors:** Fatemeh Tohidian; Chengzhi Shi; Soomi Lee; Matthew Elia; Amy V Mueller; Stratis Ioannidis; Jennifer Dy

**ID:** 149321 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r0rxOyMffL>) | [PDF](<https://openreview.net/pdf?id=r0rxOyMffL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149321>)

Neural Processes \(NPs\) are flexible meta\-learning models capable of uncertainty quantification across diverse applications\. However, the standard NP framework assumes access to noise\-free inputs\. This is unrealistic in many practical settings, where sensor noise or measurement errors are unavoidable\. This discrepancy between model assumptions and real\-world data can significantly degrade prediction quality and uncertainty estimates\. We introduce Denoising Neural Processes \(DnNPs\), a principled extension of the NP framework that explicitly models input uncertainty\.  We train DnNPs via variational inference\. DnNPs jointly learn to denoise corrupted inputs and perform meta\-learning, making them robust to noisy training data\. We demonstrate DnNPs' effectiveness on both synthetic and real\-world datasets, showing consistent improvements in prediction and uncertainty quantification compared to standard NPs\. On PM$\_\{2\.5\}$ spatial  interpolation from real\-world air quality sensors, DnNPs reduces RMSE  by up to 43% and NLL by up to 80% relative to standard NPs\. We also provide theoretical grounding: we show that the Bayes optimal predictor under noisy inputs belongs to the DnNPs model class, and that plug\-in models with fixed observation variance incur an irreducible KL divergence gap that DnNPs provably avoids\.

## Markovian Experimental Design under Concept Drift

**Authors:** Ayberk Yarkın Yıldız; Lili Su; Carlee Joe\-Wong; Edmund Yeh; Stratis Ioannidis

**ID:** 155575 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4acu0z3RVl>) | [PDF](<https://openreview.net/pdf?id=4acu0z3RVl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155575>)

We study how to optimally select training samples in the presence of concept drift\. We propose a \*Markovian experimental design\* framework, in which a learner sequentially collects samples and re\-estimates a model through Bayesian linear regression\. We show that, when model drift is governed by an unknown mean fixed\-point coupled with Gaussian deviations, model posterior estimates are determined by a Kalman filter and the system is asymptotically stable\. We also show that the steady\-state model posterior can be computed as the solution of the so\-called Discrete Algebraic Riccati Equation \(DARE\), and that D\-optimal steady\-state and myopic sample selection policies can be computed by solving tractable convex optimization problems\. We do so by characterizing the curvature of the DARE solution, even though the latter generally has no closed form\. Finally, we show that our approach generalizes to the non\-linear model setting by replacing the Kalman filter with an extended Kalman filter\.

## Cross\-Fitting for Neural Posterior Estimation

**Authors:** Jeffrey Regier

**ID:** 153646 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JmM3HShlbu>) | [PDF](<https://openreview.net/pdf?id=JmM3HShlbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153646>)

Neural Posterior Estimation \(NPE\) trains an amortized conditional density estimator to approximate posterior distributions in simulation\-based inference\. Each training pair is a single draw from the joint distribution of latent and observation, so posterior variance at an observation must be inferred from variation across pairs rather than within them\. However, with a sufficiently flexible variational distribution, the NPE training objective is unbounded, and standard optimizers yield arbitrarily small variance\. Regularizers like early stopping, dropout, and weight decay constrain network capacity without targeting the correct posterior variance\. We propose Cross\-Fitting NPE \(CF\-NPE\), which separates mean estimation from higher\-moment estimation via sample splitting\. Concretely, CF\-NPE estimates a conditional\-mean ensemble by $K$\-fold cross\-fitting, then fits a conditional density to the resulting out\-of\-fold residuals\. The conditional variance of an out\-of\-fold residual is bounded below by the true posterior variance, giving CF\-NPE a well\-defined population\-level target that standard NPE lacks\. Across eight synthetic benchmarks and a cosmological application, CF\-NPE achieves higher held\-out log\-likelihood than standard NPE, with gains that grow with the latent dimension\.

## To discretize continually: Mean shift interacting particle systems for Bayesian inference

**Authors:** Ayoub Belhadji; Daniel Sharp; Youssef Marzouk

**ID:** 152233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZav7CjTGq>) | [PDF](<https://openreview.net/pdf?id=UZav7CjTGq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152233>)

Integration against a probability distribution given its unnormalized density is a central task in Bayesian inference and other fields\. We introduce new methods for approximating such expectations with a small set of weighted samples\-\-\-i\.e\., a quadrature rule\-\-\-constructed via an interacting particle system that minimizes maximum mean discrepancy \(MMD\) to the target distribution\. These methods extend the classical mean shift algorithm, as well as recent algorithms for optimal quantization of empirical distributions, to the case of continuous distributions\. Crucially, our approach creates dynamics for MMD minimization that are invariant to the unknown normalizing constant; they also admit both gradient\-free and gradient\-informed implementations\. The resulting mean shift interacting particle systems converge quickly, capture anisotropy and multi\-modality, avoid mode collapse, and scale to high dimensions\. We demonstrate their performance on a wide range of benchmark sampling problems, including multi\-modal mixtures, Bayesian hierarchical models, PDE\-constrained inverse problems, and beyond\.

## Online Bayesian Calibration under Gradual and Abrupt System Changes

**Authors:** Yang Xu; Chiwoo Park

**ID:** 151573 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Zabh2YskEn>) | [PDF](<https://openreview.net/pdf?id=Zabh2YskEn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151573>)

Bayesian model calibration is central to digital twins and computer experiments, as it aligns model outputs with field observations by estimating calibration parameters and correcting systematic model bias\. Classical Bayesian calibration introduces latent parameters and a discrepancy function to capture bias, but suffers from parameter–discrepancy confounding and is typically formulated as an offline procedure under a stationary data\-generating assumption\. These limitations are restrictive in modern digital twin applications, where systems evolve over time and may exhibit both gradual drift and abrupt regime shifts\. While data assimilation methods enable sequential updates, they generally do not explicitly model systematic bias and are not robust to abrupt changes\. We propose Bayesian Recursive Projected Calibration \(BRPC\), an online Bayesian calibration framework for streaming data under simulator mismatch and nonstationarity\. BRPC extends projected calibration to the online setting by separating a discrepancy\-free particle update for calibration parameters from a conditional Gaussian process update for discrepancy, preserving identifiability while enabling bias\-aware adaptation under gradual system evolution\. To handle abrupt changes, we integrate BRPC with restart mechanisms that detect regime shifts and reset the calibration process, yielding a unified approach to mixed nonstationarity\. We establish theoretical guarantees for both components, including tracking performance under gradual evolution and false\-alarm and detection behavior for restart mechanisms\. Empirical results on synthetic and plant\-simulation benchmarks demonstrate that BRPC improves calibration accuracy under gradual changes, while the restart\-augmented framework further enhances robustness and predictive performance under abrupt regime shifts compared to sliding\-window Bayesian calibration and data assimilation baselines\.

## Bayes\-pFCL:Bayesian Personalized Federated Continual Learning

**Authors:** qingyang yu; Yang Hua; Hao Wang; Yue Ning; Qizhen Zhang; Hao Wang

**ID:** 149379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qV1obunXod>) | [PDF](<https://openreview.net/pdf?id=qV1obunXod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149379>)

Personalized federated continual learning \(pFCL\) alleviates catastrophic forgetting across tasks and data heterogeneity across clients\. We view both challenges as interference between knowledge and propose Bayesian frameworks that define knowledge as posterior belief and quantify two types of interference: intra\-model interference, measuring task\-induced posterior drift, and inter\-model interference, measuring aggregation\-induced posterior drift\. We show that such interference bounds catastrophic forgetting and data heterogeneity\-induced loss, respectively\. We then develop an interference\-regularized local objective to guide personalization under catastrophic forgetting and data heterogeneity\. The framework unifies standard FCL and pFL categories\. Experiments on synthetic and real\-world benchmarks demonstrate improved model performance over state\-of\-the\-art pFCL methods\.

## Differentiable Systematic Resampling for Variational Sequential Monte Carlo

**Authors:** Fredrik Cumlin; Saikat Chatterjee

**ID:** 156105 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0Mo3B5JStu>) | [PDF](<https://openreview.net/pdf?id=0Mo3B5JStu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156105>)

Particle filters are a standard tool for nonlinear state estimation, but their resampling step is discrete, preventing gradient\-based learning in variational sequential Monte Carlo\. We introduce Differentiable Systematic Resampling \(DSR\), a temperature\-controlled relaxation of systematic resampling, that preserves the low\-variance structure of systematic resampling while enabling full gradient flow\. DSR converges to exact systematic resampling as the temperature vanishes, and we prove exponential convergence rates for the induced bias\. Compared to optimal\-transport\-based differentiable resampling, DSR avoids iterative solvers and has substantially lower computational overhead\. Experiments on stochastic dynamical systems and real\-world handwriting data show that DSR achieves comparable or superior filtering and dynamics learning performance\.

