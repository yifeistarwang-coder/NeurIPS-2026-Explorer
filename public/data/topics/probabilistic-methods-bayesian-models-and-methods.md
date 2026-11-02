# Probabilistic Methods / Bayesian Models and Methods

概率方法 / 贝叶斯模型与方法

79 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Heteroscedastic TrueSkill: Modeling Match Noise and Player Consistency

**Authors:** Philipp Kolbe; Johann Ukrow; Anna Kazachkova; Rainer Schlosser; Ralf Herbrich

**ID:** 150666 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gNc29aLken>) | [PDF](<https://openreview.net/pdf?id=gNc29aLken>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150666>)

_Abstract unavailable from the accessible public sources._

## Ensemble Distributionally Robust Bayesian Optimisation

**Authors:** Tigran Ramazyan; Denis Derkach

**ID:** 149322 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qzmJlrajPM>) | [PDF](<https://openreview.net/pdf?id=qzmJlrajPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149322>)

_Abstract unavailable from the accessible public sources._

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

## Conservative neural posterior estimation via distributionally robust training

**Authors:** William Laplante; Yuga Hikida; Charita Dellaporta; Francois\-Xavier Briol; Ayush Bharti

**ID:** 155960 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1XyUmZsyBA>) | [PDF](<https://openreview.net/pdf?id=1XyUmZsyBA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155960>)

_Abstract unavailable from the accessible public sources._

## Bayes\-pFCL:Bayesian Personalized Federated Continual Learning

**Authors:** qingyang yu; Yang Hua; Hao Wang; Yue Ning; Qizhen Zhang; Hao Wang

**ID:** 149379 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qV1obunXod>) | [PDF](<https://openreview.net/pdf?id=qV1obunXod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149379>)

Personalized federated continual learning \(pFCL\) alleviates catastrophic forgetting across tasks and data heterogeneity across clients\. We view both challenges as interference between knowledge and propose Bayesian frameworks that define knowledge as posterior belief and quantify two types of interference: intra\-model interference, measuring task\-induced posterior drift, and inter\-model interference, measuring aggregation\-induced posterior drift\. We show that such interference bounds catastrophic forgetting and data heterogeneity\-induced loss, respectively\. We then develop an interference\-regularized local objective to guide personalization under catastrophic forgetting and data heterogeneity\. The framework unifies standard FCL and pFL categories\. Experiments on synthetic and real\-world benchmarks demonstrate improved model performance over state\-of\-the\-art pFCL methods\.

## Predictively\-Oriented Kalman Filtering

**Authors:** Zheyang Shen; Gerardo Duran\-Martin; Chris Oates

**ID:** 156147 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=01g5LQ3zyu>) | [PDF](<https://openreview.net/pdf?id=01g5LQ3zyu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156147>)

This paper presents a post\-Bayesian approach to online filtering in nonlinear state\-space models, capable of avoiding over\-confident inferences in settings where either the dynamical model, the measurement model, or \_both\_, could be misspecified\. This is addressed using \_predictively oriented\_ \(PrO\) posteriors, an emerging paradigm in which learning \(i\.e\., posterior concentration\) occurs if and only if the overall model is well\-specified, without strict adherence to the Bayes' theorem\. As the characterisation of PrO posteriors is challenging, our main technical contribution is a fast approximate linear\-Gaussian update procedure, analogous to an \(iterated\) extended Kalman filter \(EKF\)\.  The methodology, which we call PrO\-EKF, has no tunable hyper\-parameters and has a computational cost comparable to that of existing filtering methods\.  Performance is empirically assessed on a range of linear and non\-linear applications, in which the state\-space model is systematically misspecified\.

## Consistent Bayesian Spatial Domain Partitioning Using Predictive Spanning Tree Methods

**Authors:** Kun Huang; Huiyan Sang

**ID:** 156639 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156639>)

_Abstract unavailable from the accessible public sources._

## Preconditioned Implicit Midpoint Langevin Sampling for Non\-Smooth Bayesian Imaging

**Authors:** Sichen Wang; Zhipeng Lu

**ID:** 155272 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6vWdtoSoVB>) | [PDF](<https://openreview.net/pdf?id=6vWdtoSoVB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155272>)

_Abstract unavailable from the accessible public sources._

## Bayesian Decision Making around Experts

**Authors:** Daniel Jarne Ornia; Joel Dyer; Nicholas Bishop; Anisoara Calinescu; Michael Wooldridge

**ID:** 149882 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mVsJcNjcSu>) | [PDF](<https://openreview.net/pdf?id=mVsJcNjcSu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149882>)

Complex learning agents are increasingly deployed alongside existing experts, such as human operators or previously trained agents\. However, it remains unclear how learners should optimally incorporate certain forms of expert data, or how to quantify the potential benefit from doing so\. We study this problem in the context of Bayesian multi\-armed bandits, considering \*offline settings\*, where a learner receives a dataset of outcomes from an expert before interaction, and \*online settings\*, where posterior updates from different data sources may have different computational costs, so the learner must decide whether a given update should use its own experience or an outcome generated by an expert\. We formalize how expert data influences the learner's posterior and quantify how pretraining or online learning on expert outcomes tighten information\-theoretic regret bounds\. We propose an information\-directed rule for allocating a limited update budget across data sources, and we study strategies for how the learner can infer when to trust the expert, safeguarding for compromised experts\. By disentangling and quantifying the value of expert data, our framework builds towards a practical, information\-theoretic understanding of how agents should learn from others\.

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

## Annealing in variational inference mitigates mode collapse: a theoretical study on Gaussian mixtures

**Authors:** Luigi Fogliani; Bruno Loureiro; Marylou Gabrié

**ID:** 151971 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WS1Hwfq4Ay>) | [PDF](<https://openreview.net/pdf?id=WS1Hwfq4Ay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151971>)

Abstract: Mode collapse \-\-\- the failure to capture one or more modes when targetting a multimodal distribution \-\-\- is a central challenge in modern variational inference\. In this work, we provide a mathematical analysis of annealing\-based strategies for mitigating mode collapse in a tractable setting: learning a Gaussian mixture, where mode collapse is known to arise\. Leveraging a low\-dimensional summary statistics description, we precisely characterize the interplay between the initial temperature and the annealing rate, and derive a sharp formula for the probability of mode collapse\. Our analysis shows that an appropriately chosen annealing scheme can robustly prevent mode collapse\. Finally, we present numerical evidence that these theoretical trade\-offs qualitatively extend to neural network–based models, RealNVP normalizing flows, providing guidance for designing annealing strategies mitigating mode collapse in practical variational inference pipelines\.

## Support Mismatch as a Benchmark Failure Mode for In\-Context Prediction

**Authors:** Jie Liu; Lanlan Liang; Qinan Bao; ZiXi Yan; Linghao Meng; Wenbo Gong

**ID:** 153575 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KO8zjpmrDJ>) | [PDF](<https://openreview.net/pdf?id=KO8zjpmrDJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153575>)

We analyze support mismatch in language\-model in\-context prediction as a frozen\-prior Bayes benchmark with finite discrete support\. The goal is diagnostic rather than literal: we do not identify production LMs with exact Bayesian updating, but characterize a failure mode whose signatures can be checked in learned in\-context predictors\. Our main theorem gives the finite\-sample predictor\-risk bound $R\_k^\\pi \\le C e^\{\-k\\rho\_\{\\min\}\} \+ 2\\varepsilon\_\{\\mathrm\{approx\}\}^2$, so risk decomposes into an exponentially decaying transient and a nonvanishing support\-mismatch floor under exponential\-moment control of log\-likelihood ratios\. In scalar and aligned Gaussian location families, exact two\-component analyses match the upper exponent up to a tight factor 2 and show a regime change at $\\mu\_2=3\\mu\_1$\. Controlled learned\-model experiments track the benchmark near crossover\. Decoder\-only LM diagnostics then test the benchmark signatures: restricted support creates a persistent high\-error regime; restoring the missing support sharply lowers error; and modern size\-matched distractor controls on Qwen and Llama show that adding a wrong same\-cardinality candidate does not reproduce this gain\. Multiple\-choice, instruction\-tuned, cross\-family, calibration, null\-control, and near\-tie checks preserve the same diagnostic picture\.

## Ensemble Distributionally Robust Bayesian Optimisation

**Authors:** Tigran Ramazyan; Denis Derkach

**ID:** 149322\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149322

[Paper](<https://openreview.net/forum?id=qzmJlrajPM>) | [PDF](<https://openreview.net/pdf?id=qzmJlrajPM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149322>)

_Abstract unavailable from the accessible public sources._

## Joint Confounder Selection for Causal Mediation Analysis in High Dimensions

**Authors:** Chanmin Kim; Hyunwoo Kim

**ID:** 153898\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153898

[Paper](<https://openreview.net/forum?id=HsloWr8Orf>) | [PDF](<https://openreview.net/pdf?id=HsloWr8Orf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153898>)

The estimation of causal effects in observational research fundamentally relies on proper adjustment for confounding variables\. While data\-driven confounder selection is well\-established for conventional exposure\-outcome analyses, such methodologies remain underdeveloped in causal mediation analysis\. This paper proposes a Bayesian nonparametric framework for confounder selection in mediation analysis using Bayesian Additive Regression Trees \(BART\)\. We introduce a shared sparsity\-inducing prior across the exposure, mediator, and outcome models to identify the minimal sufficient adjustment set that satisfies the mediation disjunctive cause criterion\. Importantly, we provide rigorous theoretical guarantees for the proposed method: we establish the posterior consistency of confounder selection even in high\-dimensional regimes \($P \\gg N$\) and demonstrate that this selection consistency translates into the consistent estimation of natural direct and indirect effects\. The proposed method demonstrates consistently strong performance across a range of simulation scenarios, offering a principled and practical approach for high\-dimensional mediation analysis\.

## Maxitive Donsker\-Varadhan Formulation for Possibilistic Variational Inference

**Authors:** Jasraj Singh; Shelvia Wongso; Jeremie Houssineau; Badr\-Eddine Cherief\-Abdellatif

**ID:** 154822 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=AhK1Iks6GD>) | [PDF](<https://openreview.net/pdf?id=AhK1Iks6GD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154822>)

Variational inference \(VI\) is a cornerstone of modern Bayesian learning, enabling approximate inference in complex models\. However, its formulation depends on expectations and divergences defined through high\-dimensional integrals, often rendering analytical treatment impossible and necessitating heavy reliance on approximations\. Possibility theory, an imprecise probability framework, allows us to directly model epistemic uncertainty instead of relying on a subjective interpretation of probabilities\. While this framework provides robustness and interpretability under sparse or imprecise information, adapting VI to the possibilistic setting requires rethinking core concepts such as divergences, which presuppose additivity\. In this work, we develop a principled formulation for performing possibilistic VI by establishing a maxitive analogue of the classical Donsker\-Varadhan formulation\. The resulting framework enables us to derive a learning rule for possibilistic VI with exponential\-family candidates and practical update rules for neural\-network training, giving rise to a family of optimizers termed \*CBOpt\*\. Finally, we demonstrate that \*CBOpt\* achieves competitive performance on both in\-domain and out\-of\-domain image classification tasks\.

## DBPS: Doob\-Bridge Posterior Sampler with Balanced Endpoint\-Population Control for Unpaired Neurodegenerative Pathology Transport

**Authors:** Xinyu Guo; Jiajia Xie; Xin He; Christophe Ye; Batuhan Nursal; Hongyu Xue; Cassie Mitchell

**ID:** 154080 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GLIYSpGCJP>) | [PDF](<https://openreview.net/pdf?id=GLIYSpGCJP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154080>)

Modeling neurodegenerative pathology from observational cohorts is challenging because subjects are typically observed as unpaired endpoint snapshots rather than aligned longitudinal trajectories\. Existing approaches to pathology transport are either endpoint\-conditioned or population\-level, yet neither extreme alone yields the best terminal\-distribution fit\. We introduce the Doob\-Bridge Posterior Sampler \(DBPS\), a controlled\-SDE posterior sampler with balanced endpoint\-population control that blends individual endpoint guidance with population\-level guidance\. This ρ\-weighted controller, obtained as the Cole–Hopf log\-gradient of a geometric interpolation between endpoint and population desirability functions, is the exact optimal feedback policy of a linearly\-solvable stochastic optimal control problem with closed\-form terminal and running costs\. Endpoint\-conditioned bridge sampling and population Doob sampling are the ρ = 0 and ρ = 1 boundary cases; ρ ∈ \(0, 1\) realizes the genuine balanced regime\. We evaluate DBPS on tau PET pathology transport in Alzheimer’s disease across ADNI and NACC cohorts \(84 brain regions\)\. Compared to representative baselines from all major unpaired\-transport families, DBPS achieves state\-of\-the\-art performance across multi\-cohort settings \(union training: SWD 0\.760 vs\. 0\.821; held\-out ADNI: 0\.822 vs\. 0\.859\), and remains competitive in single\-cohort training \(ADNI: 0\.868 vs\. 0\.876\)\. Beyond distribution matching, the learned controls recover canonical Braak\-stage pathology organization without anatomical supervision, suggesting that balanced SOC objectives capture biologically meaningful structure in latent neurodegenerative progression\.

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

## Approximate Bayesian inference with exchangeable distributions for neurosymbolic AI

**Authors:** Lennert De Smet

**ID:** 150027 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lK0AUkECXy>) | [PDF](<https://openreview.net/pdf?id=lK0AUkECXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150027>)

_Abstract unavailable from the accessible public sources._

## 2\-Step Agent: How a Bayesian Decision Maker Learns from AI\-Decision Support

**Authors:** Otto Nyberg; Fausto Carcassi; Davide Tugnoli; Giovanni Cinà

**ID:** 150442 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i0SU4iqgah>) | [PDF](<https://openreview.net/pdf?id=i0SU4iqgah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150442>)

_Abstract unavailable from the accessible public sources._

## SurvivalPFN: Amortizing Survival Prediction via In\-Context Bayesian Inference

**Authors:** Shi\-ang Qi; Vahid Balazadeh Meresht; Michael Cooper; Russell Greiner; Rahul Krishnan

**ID:** 151336 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bJ348fNOVg>) | [PDF](<https://openreview.net/pdf?id=bJ348fNOVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151336>)

_Abstract unavailable from the accessible public sources._

## Approximate Bayesian inference with exchangeable distributions for neurosymbolic AI

**Authors:** Lennert De Smet

**ID:** 150027\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150027

[Paper](<https://openreview.net/forum?id=lK0AUkECXy>) | [PDF](<https://openreview.net/pdf?id=lK0AUkECXy>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150027>)

_Abstract unavailable from the accessible public sources._

## Outlier\-robust Diffusion Posterior Sampling for Bayesian Inverse Problems

**Authors:** Yiming Yang; Xiaoyuan Cheng; Yi He; Kaiyu Li; Wenxuan Yuan; Zhuo Sun

**ID:** 151516 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=a4Z54rVG8B>) | [PDF](<https://openreview.net/pdf?id=a4Z54rVG8B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151516>)

_Abstract unavailable from the accessible public sources._

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

## Neural Bayesian Filtering

**Authors:** Christopher Solinas; Radovan Haluška; David Sychrovský; Finbarr Timbers; Nolan Bard; Michael Buro; Martin Schmid; Nathan Sturtevant; Michael Bowling

**ID:** 154508\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154508

[Paper](<https://openreview.net/forum?id=D4Tzo5hpy3>) | [PDF](<https://openreview.net/pdf?id=D4Tzo5hpy3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154508>)

Sequential estimation under partial observability requires tracking belief distributions that may be high\-dimensional, multimodal, and non\-Gaussian\. Classical Bayesian filters generalize zero\-shot to any system whose dynamics can be evaluated, but their representations scale poorly: parametric filters struggle to capture multimodality, and particle filters require exponentially many particles in the state dimension\. Generative Distribution Embeddings \(GDEs\) learn compact representations of complex distributions but provide no mechanism for sequential updates\. We present Neural Bayesian Filtering \(NBF\), a method that combines classical Bayesian filtering with learned distribution embeddings\. NBF represents beliefs as embeddings and updates them by sampling particles from a learned conditional generator, propagating them through the system dynamics, and finally re\-embedding the resulting particles\. For in\-family distributions that the embeddings are trained to represent, NBF inherits the zero\-shot adaptability of classical filters, but with the benefit that regenerating particles from the embedding at each step also mitigates particle impoverishment\. We validate NBF on a pursuit\-\-evasion domain, demonstrating accurate tracking of complex multimodal posteriors, graceful scaling with state dimension, and zero\-shot generalization to dynamics held out from training\.

## Two Phase Rapid Simulation Based Inference with Differentiable Simulators

**Authors:** Uros Zivanovic; Rahul Srinivasan; Roberto Trotta; Andre Scaffidi

**ID:** 153417\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153417

[Paper](<https://openreview.net/forum?id=LUVtYIYhWE>) | [PDF](<https://openreview.net/pdf?id=LUVtYIYhWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153417>)

We introduce Rapid Simulation Based Inference \(RSBI\), a diffusion\-based variational approach to likelihood\-free Bayesian inference that achieves high posterior sample efficiency under large and multi\-dimensional prior\-to\-posterior volumes\. RSBI builds on recent advances in Schrödinger Bridge \(SB\) diffusion sampling to handle multi\-modal posteriors, with the likelihood supplied either by a neural ratio estimator or kernal surrogate via a differentiable simulator\. Furthermore, a key observation is that an appropriate surrogate likelihood gives a proposal distribution covering most of the generally multi\-modal posterior mass, replacing the sequential rounds of standard methods with a one\-shot proposal step\. Subsequent NRE refinement recovers exact inference under the simulator and original model prior\. As a variational method, RSBI does not suffer from prior leakage and implicit target drift commonly observed in standard sequential posterior estimation methods\. To improve mode coverage we optionally utilize the well\-tempered meta\-dynamics framework, which also provides a mechanism through which to encourage exploration of the prior volume\. We observe strong performance not only on standard SBI benchmarks, but also as prior volume is scaled up to 2500 times the original, achieving a performance degradation of only $\\sim$5% on the two moons benchmark under a highly constrained simulation budget\. Additionally, we evaluate RSBI's potential for gravitational wave ring\-down posterior estimation, highlighting a real\-world use\-case where our method excels\.

## Symmetry Guarantees Statistic Recovery in Variational Inference

**Authors:** Daniel Marks; Dario Paccagnan; Mark van der Wilk

**ID:** 151617 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZDvmwsQZ73>) | [PDF](<https://openreview.net/pdf?id=ZDvmwsQZ73>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151617>)

_Abstract unavailable from the accessible public sources._

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

## Theoretical guidelines for annealed Langevin dynamics in compositional simulation\-based inference

**Authors:** Camille Touron; Gabriel Cardoso; Julyan Arbel; Pedro Rodrigues

**ID:** 148461\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148461

[Paper](<https://openreview.net/forum?id=xdr2AIOz88>) | [PDF](<https://openreview.net/pdf?id=xdr2AIOz88>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148461>)

Compositional score\-based approaches to simulation\-based inference \(SBI\) approximate the posterior over a shared parameter given $n$ independent observations by aggregating individually learned posterior scores: currently, there are two main propositions of such methods \(Geffner et al\., 2023; Linhart et al\., 2026\)\. As the resulting composite score does not correspond to the score of any distribution along the forward diffusion path of the true multi\-observation posterior, sampling from it via a reverse SDE leads to an irreducible bias\. Annealed Langevin dynamics provides a principled alternative: it treats the composite score as the genuine score of a sequence of tractable bridging densities and samples from them in succession\. When properly tuned, it could lead to a controllable bias\. However, its hyperparameters, namely step sizes, the number of steps per level, and the number of annealing levels, have so far been chosen empirically\. We derive Wasserstein bounds for annealed Langevin with approximate scores and translate them into explicit decision rules for these hyperparameters that guarantee a prescribed sampling accuracy, while highlighting different theoretical aspects of each composite score formulation\. In the Gaussian setting, we obtain closed\-form expressions for all relevant quantities and prove that the bridging densities of Linhart et al\. \(2026\) consistently admit larger step sizes and require fewer total Langevin steps than those of Geffner et al\. \(2023\)\. Furthermore, we show empirically that the tuning obtained in the Gaussian setting generalizes to more complex problems, thus providing a well\-understood and theoretically grounded starting point for practitioners using compositional score\-based approaches\.

## Privacy Guarantees in Posterior Sampling under Contamination

**Authors:** Shenggang Hu; Hongsheng Dai; Louis Aslett; Murray Pollock; Gareth Roberts

**ID:** 156638\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156638

[Official poster](<https://neurips.cc/virtual/2026/poster/156638>)

In recent years, differential privacy has been adopted by tech\-companies and governmental agencies as the standard for measuring privacy in algorithms\. 
In this article, we study differential privacy in Bayesian posterior sampling settings\. 
We begin by considering differential privacy in the most common privatisation setting in which Laplace or Gaussian noise is injected into the output\. 
In an effort to achieve better differential privacy, we consider adopting \{\\em Huber's contamination model\} for use within privacy settings, and replace at random data points with samples from a heavy\-tailed distribution \(\{\\em instead\} of injecting noise into the output\)\. 
We derive bounds for the differential privacy level $\(\\epsilon,\\delta\)$ of our approach, without requiring bounded observation and parameter spaces, a restriction commonly imposed in the literature\.
We further consider for our approach the effect of sample size on the privacy level and the rate at which $\(\\epsilon,\\delta\)$ converges to zero\.
Asymptotically, our contamination approach is fully private with no information loss\.
We also provide examples of inference models for which our approach applies, with theoretical convergence rate analysis and simulation studies\.

## Maximin Robust Bayesian Experimental Design

**Authors:** Hany Abdulsamad; Sahel Iqbal; Christian Andersson Naesseth; Takuo Matsubara; Adrien Corenflos

**ID:** 151052 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dLiJdxU8o7>) | [PDF](<https://openreview.net/pdf?id=dLiJdxU8o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151052>)

We address the brittleness of Bayesian experimental design under model misspecification by formulating the problem as a max\-\-min game between the experimenter and an adversarial nature subject to information\-theoretic constraints\. We demonstrate that this approach yields a robust objective governed by Sibson's $\\alpha$\-mutual information \(MI\), which identifies the $\\alpha$\-tilted posterior as the robust belief update and establishes the R\\'enyi divergence as the appropriate measure of conditional information gain\. To mitigate the bias and variance of nested Monte Carlo estimators needed to estimate Sibson's $\\alpha$\-MI, we adopt a PAC\-Bayes framework to search over stochastic design policies, yielding rigorous high\-probability lower bounds on the robust expected information gain that explicitly control finite\-sample error\.

## What Can Labels Alone Audit and Edit in Frozen Representations?

**Authors:** Yirong Xiang; Yibo Zhou

**ID:** 155411 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rXQteakrg>) | [PDF](<https://openreview.net/pdf?id=5rXQteakrg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155411>)

Frozen representations are often adapted using task labels alone, without environment, nuisance, or concept annotations\. In this label\-only regime, the first question is identifiability: what semantic target is actually determined by the joint law of representation and label? We show that labels identify only the posterior quotient, equivalently the coarsest deterministic representation that preserves all label information, and do not identify a finer semantic/background decomposition\. This yields a quotient\-first principle for label\-only auditing and editing: first estimate a low\-dimensional label\-sufficient surrogate, then analyze residual class\-dependent structure only after removing it\. Under a structured linear second\-order specialization, this leads to dual\-moment decomposition \(DMD\)\. Empirically, stage one is a strong semantic audit and label\-preserving compression baseline across frozen CelebA, Waterbirds, and PACS features, while stage\-two residual editing improves leakage\-\-label tradeoffs only in some regimes\. Overall, the results support a conservative recipe for label\-only frozen\-feature editing: preserve the quotient first, and trust residual edits when residual support and split stability are strong\.

## Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions

**Authors:** Jingyang You; Hanna Kurniawati

**ID:** 149308 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r9MG6uLaeW>) | [PDF](<https://openreview.net/pdf?id=r9MG6uLaeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149308>)

Bayesian Reinforcement Learning \(BRL\), a subclass of Meta\-Reinforcement Learning \(Meta\-RL\), provides a principled framework for generalisation by explicitly incorporating Bayesian task parameters into transition and reward models\. However, classical BRL methods assume known forms of transition and reward models\. While recent deep BRL methods incorporate model learning to address this, applying neural networks directly to joint data and task parameters necessitates variational inference\. This often yields indistinct task representations, compromising the resulting BRL policies\. To overcome these limitations, we introduce Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions \(GLiBRL\)\. Our approach features fully tractable Bayesian inference over task parameters and model noise, alongside exact marginal likelihood evaluation for learning transition and reward models\. The permutation\-invariant nature of exact Bayesian inference in GLiBRL enables seamless integration with both on\-policy and off\-policy RL algorithms\. We further show that GLiBRL admits a closed\-form relationship between the $\\mathcal\{L\}\_2$ distance of its task representations and empirical kernel\-based correspondence between task samples, which is to our knowledge the first such structural result for online deep BRL\. GLiBRL is compared against representative and recent Meta\-RL methods, and improves state\-of\-the\-art performance on both MuJoCo and MetaWorld benchmarks by up to 1\.8$\\times$\.

## Maxitive Donsker\-Varadhan Formulation for Possibilistic Variational Inference

**Authors:** Jasraj Singh; Shelvia Wongso; Jeremie Houssineau; Badr\-Eddine Cherief\-Abdellatif

**ID:** 154822\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154822

[Paper](<https://openreview.net/forum?id=AhK1Iks6GD>) | [PDF](<https://openreview.net/pdf?id=AhK1Iks6GD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154822>)

Variational inference \(VI\) is a cornerstone of modern Bayesian learning, enabling approximate inference in complex models\. However, its formulation depends on expectations and divergences defined through high\-dimensional integrals, often rendering analytical treatment impossible and necessitating heavy reliance on approximations\. Possibility theory, an imprecise probability framework, allows us to directly model epistemic uncertainty instead of relying on a subjective interpretation of probabilities\. While this framework provides robustness and interpretability under sparse or imprecise information, adapting VI to the possibilistic setting requires rethinking core concepts such as divergences, which presuppose additivity\. In this work, we develop a principled formulation for performing possibilistic VI by establishing a maxitive analogue of the classical Donsker\-Varadhan formulation\. The resulting framework enables us to derive a learning rule for possibilistic VI with exponential\-family candidates and practical update rules for neural\-network training, giving rise to a family of optimizers termed \*CBOpt\*\. Finally, we demonstrate that \*CBOpt\* achieves competitive performance on both in\-domain and out\-of\-domain image classification tasks\.

## DBPS: Doob\-Bridge Posterior Sampler with Balanced Endpoint\-Population Control for Unpaired Neurodegenerative Pathology Transport

**Authors:** Xinyu Guo; Jiajia Xie; Xin He; Christophe Ye; Batuhan Nursal; Hongyu Xue; Cassie Mitchell

**ID:** 154080\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154080

[Paper](<https://openreview.net/forum?id=GLIYSpGCJP>) | [PDF](<https://openreview.net/pdf?id=GLIYSpGCJP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154080>)

Modeling neurodegenerative pathology from observational cohorts is challenging because subjects are typically observed as unpaired endpoint snapshots rather than aligned longitudinal trajectories\. Existing approaches to pathology transport are either endpoint\-conditioned or population\-level, yet neither extreme alone yields the best terminal\-distribution fit\. We introduce the Doob\-Bridge Posterior Sampler \(DBPS\), a controlled\-SDE posterior sampler with balanced endpoint\-population control that blends individual endpoint guidance with population\-level guidance\. This ρ\-weighted controller, obtained as the Cole–Hopf log\-gradient of a geometric interpolation between endpoint and population desirability functions, is the exact optimal feedback policy of a linearly\-solvable stochastic optimal control problem with closed\-form terminal and running costs\. Endpoint\-conditioned bridge sampling and population Doob sampling are the ρ = 0 and ρ = 1 boundary cases; ρ ∈ \(0, 1\) realizes the genuine balanced regime\. We evaluate DBPS on tau PET pathology transport in Alzheimer’s disease across ADNI and NACC cohorts \(84 brain regions\)\. Compared to representative baselines from all major unpaired\-transport families, DBPS achieves state\-of\-the\-art performance across multi\-cohort settings \(union training: SWD 0\.760 vs\. 0\.821; held\-out ADNI: 0\.822 vs\. 0\.859\), and remains competitive in single\-cohort training \(ADNI: 0\.868 vs\. 0\.876\)\. Beyond distribution matching, the learned controls recover canonical Braak\-stage pathology organization without anatomical supervision, suggesting that balanced SOC objectives capture biologically meaningful structure in latent neurodegenerative progression\.

## Theoretical guidelines for annealed Langevin dynamics in compositional simulation\-based inference

**Authors:** Camille Touron; Gabriel Cardoso; Julyan Arbel; Pedro Rodrigues

**ID:** 148461\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148461

[Paper](<https://openreview.net/forum?id=xdr2AIOz88>) | [PDF](<https://openreview.net/pdf?id=xdr2AIOz88>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148461>)

Compositional score\-based approaches to simulation\-based inference \(SBI\) approximate the posterior over a shared parameter given $n$ independent observations by aggregating individually learned posterior scores: currently, there are two main propositions of such methods \(Geffner et al\., 2023; Linhart et al\., 2026\)\. As the resulting composite score does not correspond to the score of any distribution along the forward diffusion path of the true multi\-observation posterior, sampling from it via a reverse SDE leads to an irreducible bias\. Annealed Langevin dynamics provides a principled alternative: it treats the composite score as the genuine score of a sequence of tractable bridging densities and samples from them in succession\. When properly tuned, it could lead to a controllable bias\. However, its hyperparameters, namely step sizes, the number of steps per level, and the number of annealing levels, have so far been chosen empirically\. We derive Wasserstein bounds for annealed Langevin with approximate scores and translate them into explicit decision rules for these hyperparameters that guarantee a prescribed sampling accuracy, while highlighting different theoretical aspects of each composite score formulation\. In the Gaussian setting, we obtain closed\-form expressions for all relevant quantities and prove that the bridging densities of Linhart et al\. \(2026\) consistently admit larger step sizes and require fewer total Langevin steps than those of Geffner et al\. \(2023\)\. Furthermore, we show empirically that the tuning obtained in the Gaussian setting generalizes to more complex problems, thus providing a well\-understood and theoretically grounded starting point for practitioners using compositional score\-based approaches\.

## Bayesian Causal Stress Testing: Posterior Fragility of Treatment\-Effect Conclusions

**Authors:** Makoto Nakakita; Teruo Nakatsuma

**ID:** 155177 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7jQK8u7uLb>) | [PDF](<https://openreview.net/pdf?id=7jQK8u7uLb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155177>)

_Abstract unavailable from the accessible public sources._

## Cross\-Fitting for Neural Posterior Estimation

**Authors:** Jeffrey Regier

**ID:** 153646 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JmM3HShlbu>) | [PDF](<https://openreview.net/pdf?id=JmM3HShlbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153646>)

_Abstract unavailable from the accessible public sources._

## Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions

**Authors:** Jingyang You; Hanna Kurniawati

**ID:** 149308\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149308

[Paper](<https://openreview.net/forum?id=r9MG6uLaeW>) | [PDF](<https://openreview.net/pdf?id=r9MG6uLaeW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149308>)

Bayesian Reinforcement Learning \(BRL\), a subclass of Meta\-Reinforcement Learning \(Meta\-RL\), provides a principled framework for generalisation by explicitly incorporating Bayesian task parameters into transition and reward models\. However, classical BRL methods assume known forms of transition and reward models\. While recent deep BRL methods incorporate model learning to address this, applying neural networks directly to joint data and task parameters necessitates variational inference\. This often yields indistinct task representations, compromising the resulting BRL policies\. To overcome these limitations, we introduce Generalised Linear Models in Deep Bayesian RL with Learnable Basis Functions \(GLiBRL\)\. Our approach features fully tractable Bayesian inference over task parameters and model noise, alongside exact marginal likelihood evaluation for learning transition and reward models\. The permutation\-invariant nature of exact Bayesian inference in GLiBRL enables seamless integration with both on\-policy and off\-policy RL algorithms\. We further show that GLiBRL admits a closed\-form relationship between the $\\mathcal\{L\}\_2$ distance of its task representations and empirical kernel\-based correspondence between task samples, which is to our knowledge the first such structural result for online deep BRL\. GLiBRL is compared against representative and recent Meta\-RL methods, and improves state\-of\-the\-art performance on both MuJoCo and MetaWorld benchmarks by up to 1\.8$\\times$\.

## Very Fast Bayesian Additive Regression Trees on GPU

**Authors:** Giacomo Petrillo

**ID:** 154252 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F9wjjr9v8c>) | [PDF](<https://openreview.net/pdf?id=F9wjjr9v8c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154252>)

Bayesian Additive Regression Trees \(BART\) is a nonparametric Bayesian regression technique based on an ensemble of decision trees\. It is part of the toolbox of many statisticians\. The overall statistical quality of the regression is typically higher than other generic alternatives, and it requires less manual tuning, making it a good default choice\. However, it is a niche method compared to natural competitors such as XGBoost, due to the longer running time, making sample sizes above 10000–100000 a nuisance\. We present a GPU\-enabled implementation of BART, faster by up to 100x in a given GPU vs\. CPU comparison, making BART fast enough to be a viable alternative to non\-Bayesian algorithms on large datasets, and showing that BART parallelizes better than its non\-Bayesian counterparts\. This implementation is available in the Python package bartz\.

## Parallel\-in\-Time Variational Inference for Latent Stochastic Differential Equations

**Authors:** Chenyang Wu; Pengfei Liu; Zongzhang Zhang

**ID:** 151152 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ceFLsj8po8>) | [PDF](<https://openreview.net/pdf?id=ceFLsj8po8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151152>)

Latent stochastic differential equations \(SDEs\) model continuous\-time, irregularly\-sampled time series\. Training these models typically relies on variational inference \(VI\) methods that suffer from sequential sampling bottlenecks and compounding integration errors\. In this paper, we propose Parallel\-in\-Time Variational Inference \(PiTVI\), a framework that parameterizes the variational posterior as a non\-Markovian process mapping the driving noise history directly to the local state increments\. By leveraging modern sequence modeling architectures such as Transformer and Mamba, the training and inference of the variational posterior become fully parallelizable, reducing the span complexity from $\\mathcal\{O\}\(L\)$ to $\\mathcal\{O\}\(\\log L\)$\. Beyond computational scalability, we demonstrate that this formulation shifts global error propagation from multiplicative compounding to additive scaling\. Furthermore, the non\-Markovian formulation natively accommodates fractional driving noise, which models physical memory effects and provides a statistical relaxation mechanism when fitting smooth dynamics\. We validate these properties across empirical time complexity scaling tests, long\-horizon predictions on non\-linear systems, and high\-dimensional sequence modeling\.

## Theoretical guidelines for annealed Langevin dynamics in compositional simulation\-based inference

**Authors:** Camille Touron; Gabriel Cardoso; Julyan Arbel; Pedro Rodrigues

**ID:** 148461\-\-4 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148461

[Paper](<https://openreview.net/forum?id=xdr2AIOz88>) | [PDF](<https://openreview.net/pdf?id=xdr2AIOz88>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148461>)

Compositional score\-based approaches to simulation\-based inference \(SBI\) approximate the posterior over a shared parameter given $n$ independent observations by aggregating individually learned posterior scores: currently, there are two main propositions of such methods \(Geffner et al\., 2023; Linhart et al\., 2026\)\. As the resulting composite score does not correspond to the score of any distribution along the forward diffusion path of the true multi\-observation posterior, sampling from it via a reverse SDE leads to an irreducible bias\. Annealed Langevin dynamics provides a principled alternative: it treats the composite score as the genuine score of a sequence of tractable bridging densities and samples from them in succession\. When properly tuned, it could lead to a controllable bias\. However, its hyperparameters, namely step sizes, the number of steps per level, and the number of annealing levels, have so far been chosen empirically\. We derive Wasserstein bounds for annealed Langevin with approximate scores and translate them into explicit decision rules for these hyperparameters that guarantee a prescribed sampling accuracy, while highlighting different theoretical aspects of each composite score formulation\. In the Gaussian setting, we obtain closed\-form expressions for all relevant quantities and prove that the bridging densities of Linhart et al\. \(2026\) consistently admit larger step sizes and require fewer total Langevin steps than those of Geffner et al\. \(2023\)\. Furthermore, we show empirically that the tuning obtained in the Gaussian setting generalizes to more complex problems, thus providing a well\-understood and theoretically grounded starting point for practitioners using compositional score\-based approaches\.

## Privacy Guarantees in Posterior Sampling under Contamination

**Authors:** Shenggang Hu; Hongsheng Dai; Louis Aslett; Murray Pollock; Gareth Roberts

**ID:** 156638\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156638

[Official poster](<https://neurips.cc/virtual/2026/poster/156638>)

In recent years, differential privacy has been adopted by tech\-companies and governmental agencies as the standard for measuring privacy in algorithms\. 
In this article, we study differential privacy in Bayesian posterior sampling settings\. 
We begin by considering differential privacy in the most common privatisation setting in which Laplace or Gaussian noise is injected into the output\. 
In an effort to achieve better differential privacy, we consider adopting \{\\em Huber's contamination model\} for use within privacy settings, and replace at random data points with samples from a heavy\-tailed distribution \(\{\\em instead\} of injecting noise into the output\)\. 
We derive bounds for the differential privacy level $\(\\epsilon,\\delta\)$ of our approach, without requiring bounded observation and parameter spaces, a restriction commonly imposed in the literature\.
We further consider for our approach the effect of sample size on the privacy level and the rate at which $\(\\epsilon,\\delta\)$ converges to zero\.
Asymptotically, our contamination approach is fully private with no information loss\.
We also provide examples of inference models for which our approach applies, with theoretical convergence rate analysis and simulation studies\.

## Maximin Robust Bayesian Experimental Design

**Authors:** Hany Abdulsamad; Sahel Iqbal; Christian Andersson Naesseth; Takuo Matsubara; Adrien Corenflos

**ID:** 151052\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151052

[Paper](<https://openreview.net/forum?id=dLiJdxU8o7>) | [PDF](<https://openreview.net/pdf?id=dLiJdxU8o7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151052>)

We address the brittleness of Bayesian experimental design under model misspecification by formulating the problem as a max\-\-min game between the experimenter and an adversarial nature subject to information\-theoretic constraints\. We demonstrate that this approach yields a robust objective governed by Sibson's $\\alpha$\-mutual information \(MI\), which identifies the $\\alpha$\-tilted posterior as the robust belief update and establishes the R\\'enyi divergence as the appropriate measure of conditional information gain\. To mitigate the bias and variance of nested Monte Carlo estimators needed to estimate Sibson's $\\alpha$\-MI, we adopt a PAC\-Bayes framework to search over stochastic design policies, yielding rigorous high\-probability lower bounds on the robust expected information gain that explicitly control finite\-sample error\.

## Towards instance\-dependent regret optimality in Episodic MDPs with Posterior Sampling

**Authors:** Victor Boone; Cyrille Kone; Waris Radji; Odalric\-Ambrym Maillard; Dorian Baudry

**ID:** 153285\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153285

[Paper](<https://openreview.net/forum?id=MPOsD4X94t>) | [PDF](<https://openreview.net/pdf?id=MPOsD4X94t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153285>)

We study regret minimization in finite\-horizon episodic Markov Decision Processes \(MDPs\)\. While minimax\-optimal algorithms are known, tractable approaches to instance\-dependent optimality are still lacking\. Motivated by this gap, we introduce $\\pi\_0$\-PSRL, a variant of PSRL that uses posterior samples to decide when exploration is needed, while following a fixed reference policy $\\pi\_0$ during exploration episodes\. This decouples the test for exploration, triggered when the sampled and empirical MDPs have different optimal policies, from the choice of the policy used to gather information\. The resulting design addresses a limitation of standard PSRL, where the sampled optimal policy may not be the optimal choice for exploration\. We prove instance\-dependent regret bounds for $\\pi\_0$\-PSRL, identifying the logarithmic exploration cost induced by $\\pi\_0$ and taking a step toward matching asymptotic lower bounds for episodic RL\. Our proof techniques showcase a novel proof structure to derive problem\-dependent regret bounds in episodic MDPs, and concentration results for Dirichlet random variables, that may be of independent interest\.

## Bayesian Low\-Rank Posteriors for Scalable Membership Inference

**Authors:** Khanh Nguyen; Antonio Cinà; Andrey Barsky; Alejandra Reinares; Fabio Roli; Dimosthenis Karatzas

**ID:** 155148\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155148

[Paper](<https://openreview.net/forum?id=7y5OCsNjHI>) | [PDF](<https://openreview.net/pdf?id=7y5OCsNjHI>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155148>)

Membership inference attacks \(MIAs\) aim to determine whether a sample was used during the training of a target model\. The most effective MIAs rely on reference \(or shadow\) models to estimate target\-conditional score distributions, but training such ensembles is computationally prohibitive for modern large\-scale Vision\-\-Language Models \(VLMs\)\. In this work, we propose a scalable alternative that replaces explicit reference\-model training with a Bayesian approximation over low\-rank adaptation parameters\. Leveraging parameter\-efficient fine\-tuning, we model uncertainty only within the LoRA subspace and construct a posterior from a single training run, from which we sample a diverse set of virtual reference models\. We instantiate this approach using stochastic weight averaging Gaussian \(SWAG\), enabling efficient approximation of target\-conditional score distributions at a fraction of the cost of conventional shadow\-model ensembles\. We evaluate the resulting attack on three downstream\-adapted VLMs across two privacy\-sensitive visual question answering tasks, namely Document VQA and medical VQA\. To isolate the effect of pretraining knowledge, we additionally introduce a controlled synthetic dataset\. Our approach outperforms standard reference\-based attacks while requiring only a single trained reference model, demonstrating that accurate and scalable membership inference is feasible even for large VLMs\.

## Neural Bayesian Filtering

**Authors:** Christopher Solinas; Radovan Haluška; David Sychrovský; Finbarr Timbers; Nolan Bard; Michael Buro; Martin Schmid; Nathan Sturtevant; Michael Bowling

**ID:** 154508\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154508

[Paper](<https://openreview.net/forum?id=D4Tzo5hpy3>) | [PDF](<https://openreview.net/pdf?id=D4Tzo5hpy3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154508>)

Sequential estimation under partial observability requires tracking belief distributions that may be high\-dimensional, multimodal, and non\-Gaussian\. Classical Bayesian filters generalize zero\-shot to any system whose dynamics can be evaluated, but their representations scale poorly: parametric filters struggle to capture multimodality, and particle filters require exponentially many particles in the state dimension\. Generative Distribution Embeddings \(GDEs\) learn compact representations of complex distributions but provide no mechanism for sequential updates\. We present Neural Bayesian Filtering \(NBF\), a method that combines classical Bayesian filtering with learned distribution embeddings\. NBF represents beliefs as embeddings and updates them by sampling particles from a learned conditional generator, propagating them through the system dynamics, and finally re\-embedding the resulting particles\. For in\-family distributions that the embeddings are trained to represent, NBF inherits the zero\-shot adaptability of classical filters, but with the benefit that regenerating particles from the embedding at each step also mitigates particle impoverishment\. We validate NBF on a pursuit\-\-evasion domain, demonstrating accurate tracking of complex multimodal posteriors, graceful scaling with state dimension, and zero\-shot generalization to dynamics held out from training\.

## Two Phase Rapid Simulation Based Inference with Differentiable Simulators

**Authors:** Uros Zivanovic; Rahul Srinivasan; Roberto Trotta; Andre Scaffidi

**ID:** 153417\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153417

[Paper](<https://openreview.net/forum?id=LUVtYIYhWE>) | [PDF](<https://openreview.net/pdf?id=LUVtYIYhWE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153417>)

We introduce Rapid Simulation Based Inference \(RSBI\), a diffusion\-based variational approach to likelihood\-free Bayesian inference that achieves high posterior sample efficiency under large and multi\-dimensional prior\-to\-posterior volumes\. RSBI builds on recent advances in Schrödinger Bridge \(SB\) diffusion sampling to handle multi\-modal posteriors, with the likelihood supplied either by a neural ratio estimator or kernal surrogate via a differentiable simulator\. Furthermore, a key observation is that an appropriate surrogate likelihood gives a proposal distribution covering most of the generally multi\-modal posterior mass, replacing the sequential rounds of standard methods with a one\-shot proposal step\. Subsequent NRE refinement recovers exact inference under the simulator and original model prior\. As a variational method, RSBI does not suffer from prior leakage and implicit target drift commonly observed in standard sequential posterior estimation methods\. To improve mode coverage we optionally utilize the well\-tempered meta\-dynamics framework, which also provides a mechanism through which to encourage exploration of the prior volume\. We observe strong performance not only on standard SBI benchmarks, but also as prior volume is scaled up to 2500 times the original, achieving a performance degradation of only $\\sim$5% on the two moons benchmark under a highly constrained simulation budget\. Additionally, we evaluate RSBI's potential for gravitational wave ring\-down posterior estimation, highlighting a real\-world use\-case where our method excels\.

## DBPS: Doob\-Bridge Posterior Sampler with Balanced Endpoint\-Population Control for Unpaired Neurodegenerative Pathology Transport

**Authors:** Xinyu Guo; Jiajia Xie; Xin He; Christophe Ye; Batuhan Nursal; Hongyu Xue; Cassie Mitchell

**ID:** 154080\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154080

[Paper](<https://openreview.net/forum?id=GLIYSpGCJP>) | [PDF](<https://openreview.net/pdf?id=GLIYSpGCJP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154080>)

Modeling neurodegenerative pathology from observational cohorts is challenging because subjects are typically observed as unpaired endpoint snapshots rather than aligned longitudinal trajectories\. Existing approaches to pathology transport are either endpoint\-conditioned or population\-level, yet neither extreme alone yields the best terminal\-distribution fit\. We introduce the Doob\-Bridge Posterior Sampler \(DBPS\), a controlled\-SDE posterior sampler with balanced endpoint\-population control that blends individual endpoint guidance with population\-level guidance\. This ρ\-weighted controller, obtained as the Cole–Hopf log\-gradient of a geometric interpolation between endpoint and population desirability functions, is the exact optimal feedback policy of a linearly\-solvable stochastic optimal control problem with closed\-form terminal and running costs\. Endpoint\-conditioned bridge sampling and population Doob sampling are the ρ = 0 and ρ = 1 boundary cases; ρ ∈ \(0, 1\) realizes the genuine balanced regime\. We evaluate DBPS on tau PET pathology transport in Alzheimer’s disease across ADNI and NACC cohorts \(84 brain regions\)\. Compared to representative baselines from all major unpaired\-transport families, DBPS achieves state\-of\-the\-art performance across multi\-cohort settings \(union training: SWD 0\.760 vs\. 0\.821; held\-out ADNI: 0\.822 vs\. 0\.859\), and remains competitive in single\-cohort training \(ADNI: 0\.868 vs\. 0\.876\)\. Beyond distribution matching, the learned controls recover canonical Braak\-stage pathology organization without anatomical supervision, suggesting that balanced SOC objectives capture biologically meaningful structure in latent neurodegenerative progression\.

## Phase Transitions in Attention: A Bayesian Theory of Copy Head Emergence

**Authors:** Itay Lavie; Kirsten Fischer; Andrey Lekov; Frederic Van Maele; Zohar Ringel; Moritz Helias

**ID:** 148770 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vB716nAsNr>) | [PDF](<https://openreview.net/pdf?id=vB716nAsNr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148770>)

Attention is the key mechanism underlying in\-context learning in transformers, and attention patterns have been observed empirically to emerge abruptly during training\. We present a Bayesian theory of feature learning in attention; we then focus on how the copy subcircuit in the first layer of an induction head is learned by analyzing a single\-layer softmax attention network trained on a copy task\. We derive a closed\-form posterior over the attention matrix and reduce it to a low\-dimensional order parameter space\. This reduction reveals a phase transition in the amount of training data, which we verify using both Bayesian sampling and standard training with Adam\. We contrast our results with linear attention and find that softmax attention exhibits a \*first\-order phase transition\* while in linear attention an initial \*second\-order phase transition\* is followed by a smooth, continuous evolution toward the structured attention pattern \(\*crossover\*\)\. Our work provides a first\-principles theoretical account of the abrupt emergence of the copy subcircuit, reminiscent of the one observed in training large language models\.

## CLEAR: Complementary Tripartite Play with Bayesian Calibration for Semi\-Supervised Edge Classification

**Authors:** Zhipeng Sun; Fanchun Meng; Jiazhen Huang; Yongpeng Zhang; Tao Ren; Yifan Wang; Wei Ju; Xiao Luo

**ID:** 153511 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KnVgeVUR19>) | [PDF](<https://openreview.net/pdf?id=KnVgeVUR19>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153511>)

This paper studies the problem of semi\-supervised edge classification, which aims to identify edge relations using both labeled and unlabeled data\. This problem is highly challenging due to the inherent asymmetry of edge relations and strong prediction biases from imbalanced homophilous and heterophilous edges\. Towards this end, this paper proposes a novel approach named Complementary Tripartite Play with Bayesian CaLibration \(CLEAR\) for semi\-supervised edge classification\. The core of our CLEAR is to incorporate asymmetric semantic branches and a meta\-teacher into a tripartite\-play framework, enabling reliable guidance and optimization under label scarcity\. In particular, our CLEAR introduces a topological branch and a contextual branch which extracts graph semantics, generating pseudo\-labels in complementary views\. To improve the reliability of pseudo\-labels, we filter low\-quality pseudo\-labels using epistemic uncertainty, and then calibrate posterior distributions using the priors induced by neighborhood information\. More importantly, we utilize a meta\-consoler to guide the optimization of two branches by outputting the objective coefficients, ensuring a reliable pseudo\-labeling process in a tripartite play framework\. Extensive experiments on benchmark datasets validate the superiority of the proposed CLEAR in comparison to various baselines\. Our code is available at https://anonymous\.4open\.science/r/CLEAR\-D1D7/\.

## Heteroscedastic TrueSkill: Modeling Match Noise and Player Consistency

**Authors:** Philipp Kolbe; Johann Ukrow; Anna Kazachkova; Rainer Schlosser; Ralf Herbrich

**ID:** 150666\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150666

[Paper](<https://openreview.net/forum?id=gNc29aLken>) | [PDF](<https://openreview.net/pdf?id=gNc29aLken>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150666>)

_Abstract unavailable from the accessible public sources._

## Annealing in variational inference mitigates mode collapse: a theoretical study on Gaussian mixtures

**Authors:** Luigi Fogliani; Bruno Loureiro; Marylou Gabrié

**ID:** 151971\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151971

[Paper](<https://openreview.net/forum?id=WS1Hwfq4Ay>) | [PDF](<https://openreview.net/pdf?id=WS1Hwfq4Ay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151971>)

Abstract: Mode collapse \-\-\- the failure to capture one or more modes when targetting a multimodal distribution \-\-\- is a central challenge in modern variational inference\. In this work, we provide a mathematical analysis of annealing\-based strategies for mitigating mode collapse in a tractable setting: learning a Gaussian mixture, where mode collapse is known to arise\. Leveraging a low\-dimensional summary statistics description, we precisely characterize the interplay between the initial temperature and the annealing rate, and derive a sharp formula for the probability of mode collapse\. Our analysis shows that an appropriately chosen annealing scheme can robustly prevent mode collapse\. Finally, we present numerical evidence that these theoretical trade\-offs qualitatively extend to neural network–based models, RealNVP normalizing flows, providing guidance for designing annealing strategies mitigating mode collapse in practical variational inference pipelines\.

## To discretize continually: Mean shift interacting particle systems for Bayesian inference

**Authors:** Ayoub Belhadji; Daniel Sharp; Youssef Marzouk

**ID:** 152233 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UZav7CjTGq>) | [PDF](<https://openreview.net/pdf?id=UZav7CjTGq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152233>)

Integration against a probability distribution given its unnormalized density is a central task in Bayesian inference and other fields\. We introduce new methods for approximating such expectations with a small set of weighted samples\-\-\-i\.e\., a quadrature rule\-\-\-constructed via an interacting particle system that minimizes maximum mean discrepancy \(MMD\) to the target distribution\. These methods extend the classical mean shift algorithm, as well as recent algorithms for optimal quantization of empirical distributions, to the case of continuous distributions\. Crucially, our approach creates dynamics for MMD minimization that are invariant to the unknown normalizing constant; they also admit both gradient\-free and gradient\-informed implementations\. The resulting mean shift interacting particle systems converge quickly, capture anisotropy and multi\-modality, avoid mode collapse, and scale to high dimensions\. We demonstrate their performance on a wide range of benchmark sampling problems, including multi\-modal mixtures, Bayesian hierarchical models, PDE\-constrained inverse problems, and beyond\.

## Residual Expertise Is Not Decision Value

**Authors:** Nidhish Shah; Shaurjya Mandal; Asfandyar Azhar

**ID:** 152370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TZTKPXkDDu>) | [PDF](<https://openreview.net/pdf?id=TZTKPXkDDu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152370>)

Audits of human\-AI complementarity target the wrong estimand\. They ask whether the human knows more than the model; deployment asks whether that knowledge would change the action\. Residual predictive expertise is not residual decision value\. Deployment rewards actions, and a posterior movement that does not cross a reward\-induced action boundary changes nothing; a signal can be informative under log\-loss and leave the deployed action unchanged\. We formalize the missing quantity as \*\*boundary regret\*\*: the regret of holding the model's action after observing the human\. In any finite\-action Bayesian decision problem, the value of consulting the human equals expected boundary regret, formally verified in Lean 4\. The identity turns when humans help into a geometric question: which decision facets does the human signal move belief across? Complementarity is therefore reward\-relative\. A given human signal can be valuable under one reward matrix and worthless under another, the human's knowledge unchanged; the boundary moved, not the expertise\. The gap is widest precisely where asymmetric costs dominate: high\-stakes clinical and operational decisions\. Audits built on residual predictive expertise overstate the value of human review and route scarce review toward cases where the human is informative but the action will not move\. Boundary regret is the quantity to measure\.

## MaPP: A Unified Marginalized Posterior\-Predictive Framework for Data\-Efficient RLVR

**Authors:** YangYang Ren; Haodong Zhu; Sheng Xu; Yanjing Li; Nikolai Y Zolotykh; Wentao Zhang; Baochang Zhang

**ID:** 153702 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JPWppGw2ut>) | [PDF](<https://openreview.net/pdf?id=JPWppGw2ut>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153702>)

Reinforcement learning with verifiable rewards \(RLVR\) enhances the reasoning capabilities of large language models \(LLMs\), but at the expense of significant computational overhead due to compute\-intensive rollout processes and frequent policy updates\. Online prompt selection, a widely adopted strategy for improving training efficiency, maintains per\-prompt Bayesian posteriors to predict prompt difficulty and prioritize informative prompts before committing rollout budget\. However, these methods assess prompt informativeness without accounting for how reliably learning signal is extracted from sampled responses\. In GRPO\-based RL algorithms, the realized advantage of a response depends not only on its own outcome, but also on the randomly sampled outcomes of its peers through group normalization\. Our experimental and theoretical analysis show that the resulting uncertainty in group composition induces composition noise, a non\-vanishing variance component that creates an irreducible lower bound on gradient estimation error\. Consequently, the standard group\-relative advantage fails to faithfully characterize response\-level utility, degrading gradient estimation and thereby impairing downstream prompt selection\. To address this issue, we propose a unified Marginalized Posterior\-Predictive framework, MaPP, for data\-efficient RLVR, which first denoises response\-level advantage estimation and then improves prompt selection using a shared Beta posterior\. Specifically, for each response, MaPP replaces the standard group\-relative advantage with a composition\-invariant intrinsic advantage via closed\-form Beta\-Binomial marginalization\. This yields a closed\-form posterior\-predictive advantage estimator whose error provably diminishes as the posterior concentrates\. Then, building on the same posterior, MaPP derives an uncertainty\-aware prompt selection score that more faithfully characterizes prompt informativeness, improving data efficiency without additional rollout cost\. Experiments across mathematics, planning, and visual geometry on five model backbones show that MaPP consistently outperforms GRPO and strong selection baselines, achieving up to \+2\.45 average accuracy improvement over the strongest baseline under the same rollout budget, a new state\-of\-the\-art\.

## Bayesian Causal Stress Testing: Posterior Fragility of Treatment\-Effect Conclusions

**Authors:** Makoto Nakakita; Teruo Nakatsuma

**ID:** 155177\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155177

[Paper](<https://openreview.net/forum?id=7jQK8u7uLb>) | [PDF](<https://openreview.net/pdf?id=7jQK8u7uLb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155177>)

_Abstract unavailable from the accessible public sources._

## Cross\-Fitting for Neural Posterior Estimation

**Authors:** Jeffrey Regier

**ID:** 153646\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153646

[Paper](<https://openreview.net/forum?id=JmM3HShlbu>) | [PDF](<https://openreview.net/pdf?id=JmM3HShlbu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153646>)

_Abstract unavailable from the accessible public sources._

## Very Fast Bayesian Additive Regression Trees on GPU

**Authors:** Giacomo Petrillo

**ID:** 154252\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154252

[Paper](<https://openreview.net/forum?id=F9wjjr9v8c>) | [PDF](<https://openreview.net/pdf?id=F9wjjr9v8c>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154252>)

Bayesian Additive Regression Trees \(BART\) is a nonparametric Bayesian regression technique based on an ensemble of decision trees\. It is part of the toolbox of many statisticians\. The overall statistical quality of the regression is typically higher than other generic alternatives, and it requires less manual tuning, making it a good default choice\. However, it is a niche method compared to natural competitors such as XGBoost, due to the longer running time, making sample sizes above 10000–100000 a nuisance\. We present a GPU\-enabled implementation of BART, faster by up to 100x in a given GPU vs\. CPU comparison, making BART fast enough to be a viable alternative to non\-Bayesian algorithms on large datasets, and showing that BART parallelizes better than its non\-Bayesian counterparts\. This implementation is available in the Python package bartz\.

## Parallel\-in\-Time Variational Inference for Latent Stochastic Differential Equations

**Authors:** Chenyang Wu; Pengfei Liu; Zongzhang Zhang

**ID:** 151152\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151152

[Paper](<https://openreview.net/forum?id=ceFLsj8po8>) | [PDF](<https://openreview.net/pdf?id=ceFLsj8po8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151152>)

Latent stochastic differential equations \(SDEs\) model continuous\-time, irregularly\-sampled time series\. Training these models typically relies on variational inference \(VI\) methods that suffer from sequential sampling bottlenecks and compounding integration errors\. In this paper, we propose Parallel\-in\-Time Variational Inference \(PiTVI\), a framework that parameterizes the variational posterior as a non\-Markovian process mapping the driving noise history directly to the local state increments\. By leveraging modern sequence modeling architectures such as Transformer and Mamba, the training and inference of the variational posterior become fully parallelizable, reducing the span complexity from $\\mathcal\{O\}\(L\)$ to $\\mathcal\{O\}\(\\log L\)$\. Beyond computational scalability, we demonstrate that this formulation shifts global error propagation from multiplicative compounding to additive scaling\. Furthermore, the non\-Markovian formulation natively accommodates fractional driving noise, which models physical memory effects and provides a statistical relaxation mechanism when fitting smooth dynamics\. We validate these properties across empirical time complexity scaling tests, long\-horizon predictions on non\-linear systems, and high\-dimensional sequence modeling\.

## Bayes\-pFCL:Bayesian Personalized Federated Continual Learning

**Authors:** qingyang yu; Yang Hua; Hao Wang; Yue Ning; Qizhen Zhang; Hao Wang

**ID:** 149379\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149379

[Paper](<https://openreview.net/forum?id=qV1obunXod>) | [PDF](<https://openreview.net/pdf?id=qV1obunXod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149379>)

Personalized federated continual learning \(pFCL\) alleviates catastrophic forgetting across tasks and data heterogeneity across clients\. We view both challenges as interference between knowledge and propose Bayesian frameworks that define knowledge as posterior belief and quantify two types of interference: intra\-model interference, measuring task\-induced posterior drift, and inter\-model interference, measuring aggregation\-induced posterior drift\. We show that such interference bounds catastrophic forgetting and data heterogeneity\-induced loss, respectively\. We then develop an interference\-regularized local objective to guide personalization under catastrophic forgetting and data heterogeneity\. The framework unifies standard FCL and pFL categories\. Experiments on synthetic and real\-world benchmarks demonstrate improved model performance over state\-of\-the\-art pFCL methods\.

## Predictively\-Oriented Kalman Filtering

**Authors:** Zheyang Shen; Gerardo Duran\-Martin; Chris Oates

**ID:** 156147\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156147

[Paper](<https://openreview.net/forum?id=01g5LQ3zyu>) | [PDF](<https://openreview.net/pdf?id=01g5LQ3zyu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156147>)

This paper presents a post\-Bayesian approach to online filtering in nonlinear state\-space models, capable of avoiding over\-confident inferences in settings where either the dynamical model, the measurement model, or \_both\_, could be misspecified\. This is addressed using \_predictively oriented\_ \(PrO\) posteriors, an emerging paradigm in which learning \(i\.e\., posterior concentration\) occurs if and only if the overall model is well\-specified, without strict adherence to the Bayes' theorem\. As the characterisation of PrO posteriors is challenging, our main technical contribution is a fast approximate linear\-Gaussian update procedure, analogous to an \(iterated\) extended Kalman filter \(EKF\)\.  The methodology, which we call PrO\-EKF, has no tunable hyper\-parameters and has a computational cost comparable to that of existing filtering methods\.  Performance is empirically assessed on a range of linear and non\-linear applications, in which the state\-space model is systematically misspecified\.

## Consistent Bayesian Spatial Domain Partitioning Using Predictive Spanning Tree Methods

**Authors:** Kun Huang; Huiyan Sang

**ID:** 156639\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** missing

**Repeated source row:** 156639

[Official poster](<https://neurips.cc/virtual/2026/poster/156639>)

_Abstract unavailable from the accessible public sources._

## Bayes\-pFCL:Bayesian Personalized Federated Continual Learning

**Authors:** qingyang yu; Yang Hua; Hao Wang; Yue Ning; Qizhen Zhang; Hao Wang

**ID:** 149379\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149379

[Paper](<https://openreview.net/forum?id=qV1obunXod>) | [PDF](<https://openreview.net/pdf?id=qV1obunXod>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149379>)

Personalized federated continual learning \(pFCL\) alleviates catastrophic forgetting across tasks and data heterogeneity across clients\. We view both challenges as interference between knowledge and propose Bayesian frameworks that define knowledge as posterior belief and quantify two types of interference: intra\-model interference, measuring task\-induced posterior drift, and inter\-model interference, measuring aggregation\-induced posterior drift\. We show that such interference bounds catastrophic forgetting and data heterogeneity\-induced loss, respectively\. We then develop an interference\-regularized local objective to guide personalization under catastrophic forgetting and data heterogeneity\. The framework unifies standard FCL and pFL categories\. Experiments on synthetic and real\-world benchmarks demonstrate improved model performance over state\-of\-the\-art pFCL methods\.

## Predictively\-Oriented Kalman Filtering

**Authors:** Zheyang Shen; Gerardo Duran\-Martin; Chris Oates

**ID:** 156147\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 156147

[Paper](<https://openreview.net/forum?id=01g5LQ3zyu>) | [PDF](<https://openreview.net/pdf?id=01g5LQ3zyu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156147>)

This paper presents a post\-Bayesian approach to online filtering in nonlinear state\-space models, capable of avoiding over\-confident inferences in settings where either the dynamical model, the measurement model, or \_both\_, could be misspecified\. This is addressed using \_predictively oriented\_ \(PrO\) posteriors, an emerging paradigm in which learning \(i\.e\., posterior concentration\) occurs if and only if the overall model is well\-specified, without strict adherence to the Bayes' theorem\. As the characterisation of PrO posteriors is challenging, our main technical contribution is a fast approximate linear\-Gaussian update procedure, analogous to an \(iterated\) extended Kalman filter \(EKF\)\.  The methodology, which we call PrO\-EKF, has no tunable hyper\-parameters and has a computational cost comparable to that of existing filtering methods\.  Performance is empirically assessed on a range of linear and non\-linear applications, in which the state\-space model is systematically misspecified\.

## 2\-Step Agent: How a Bayesian Decision Maker Learns from AI\-Decision Support

**Authors:** Otto Nyberg; Fausto Carcassi; Davide Tugnoli; Giovanni Cinà

**ID:** 150442\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150442

[Paper](<https://openreview.net/forum?id=i0SU4iqgah>) | [PDF](<https://openreview.net/pdf?id=i0SU4iqgah>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150442>)

_Abstract unavailable from the accessible public sources._

## SurvivalPFN: Amortizing Survival Prediction via In\-Context Bayesian Inference

**Authors:** Shi\-ang Qi; Vahid Balazadeh Meresht; Michael Cooper; Russell Greiner; Rahul Krishnan

**ID:** 151336\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151336

[Paper](<https://openreview.net/forum?id=bJ348fNOVg>) | [PDF](<https://openreview.net/pdf?id=bJ348fNOVg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151336>)

_Abstract unavailable from the accessible public sources._

## The Bayesian Origin of the Probability Weighting Function in Human Representation of Probabilities

**Authors:** Xin Tong; Thi Thu Uyen Hoang; Xue\-Xin Wei; Michael Hahn

**ID:** 150181 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=k6mQAMfc2e>) | [PDF](<https://openreview.net/pdf?id=k6mQAMfc2e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150181>)

_Abstract unavailable from the accessible public sources._

## Learning Gaussian Conditional Distributions using Neural Ratio Estimation is Hard

**Authors:** Pierre Glaser; Arthur Gretton

**ID:** 149465 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=puXNHGNUWY>) | [PDF](<https://openreview.net/pdf?id=puXNHGNUWY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149465>)

Neural Ratio Estimation \(NRE\) is a popular method for performing simulation\-based posterior estimation given a known prior and samples from a joint distribution\. For such a task, it can be crucial for the posterior estimation task to be \\emph\{statistically efficient\}, i\.e\. to require as few simulations as possible to obtain an accurate posterior estimate\. However, currently, little is known about its statistical efficiency\. In this work, we bridge this gap by performing an asymptotic statistical analysis of NRE\. We show that even when the target distribution is a simple product of Gaussians, the accuracy of NRE can degrade exponentially badly with the dimension of the data distribution\. Our results show that NRE can be significantly less efficient than other conditional density methods like Maximum Likelihood Estimation, which are known to enjoy favorable statistical properties\.

