# Probabilistic Methods / Probabilistic Methods

概率方法 / 综合概率方法

37 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Perturb and Correct: Post\-Hoc Ensembles using Affine Redundancy

**Authors:** Eleanor Quint

**ID:** 148703 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vfloLQFqoN>) | [PDF](<https://openreview.net/pdf?id=vfloLQFqoN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148703>)

Models that are indistinguishable on in\-distribution data can behave very differently under distribution shift\. We introduce Perturb\-and\-Correct \(P&amp;C\), a post\-hoc method for constructing epistemically diverse predictors from a single pretrained network\. P&amp;C applies random hidden layer perturbations with a least\-squares correction in the subsequent affine layer, producing predictors that agree on calibration data while remaining free to disagree away from it\. We analyze this mechanism through the post\-correction residual and its first\-order sensitivity: the residual is controlled near the calibration distribution by a leverage term, while corrected sensitivity grows as inputs deviate from the calibration geometry\. Empirically, P&amp;C achieves a strong ID/OOD tradeoff across MuJoCo dynamics prediction and CIFAR\-10 OOD detection, matching or outperforming standard post\-hoc baselines while requiring only a single pretrained model\. Our findings highlight the potential in further exploiting overparameterization as a strength of deep learning models\.

## Impossibility of Distribution\-Free Predictive Inference for Individual Treatment Effects

**Authors:** Chongguang Tao; Zheng Zhou; Yuhong Yang

**ID:** 149451 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pyIv9zfcdd>) | [PDF](<https://openreview.net/pdf?id=pyIv9zfcdd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149451>)

Uncertainty quantification for individual treatment effects \(ITEs\) is a daunting challenge in causal inference\. Motivated by recent advances in conformal prediction, several works aim to construct distribution\-free prediction sets for ITEs with desired coverage under standard assumptions such as strong ignorability and overlap\. In this paper, we show that such goals are fundamentally unattainable in the presence of continuous covariates\. Specifically, we establish finite\-sample and asymptotic impossibility results demonstrating that any distribution\-free prediction set achieving desired coverage for ITEs must be trivial, in the sense that it has infinite expected length\. Our analysis relies on a connection between ITE inference and the hardness of conditional independence testing, and highlights the intrinsic limitations imposed by the missing data nature of causal inference\. These results provide a new perspective on existing methods, clarifying that their apparent success necessarily relies on additional structural assumptions beyond standard causal assumptions\.

## The Limits of AI\-Driven Allocation: Optimal Screening under Aleatoric Uncertainty

**Authors:** Santiago Cortes\-Gomez; Mateo Dulce Rubio; Carlos M Patiño; Bryan Wilder

**ID:** 153541 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KanvRVjn7U>) | [PDF](<https://openreview.net/pdf?id=KanvRVjn7U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153541>)

The rise of machine learning has shifted targeted resource allocation in policy and humanitarian settings toward algorithmic targeting based on predicted risk scores\. This approach is typically cheaper and faster than traditional screening procedures that directly observe the latent vulnerability status through physical verification\. Yet, even access to the true conditional vulnerability probability cannot eliminate misallocation: aleatoric uncertainty over individual vulnerability status is irreducible, and probabilistic targeting inevitably misallocates some resources\. In this work we study how screening and algorithmic targeting should be optimally combined in a two\-stage allocation framework where a screening stage observes true outcomes for a subset of units before a final allocation stage assigns the resource under a fixed coverage budget\. We show that the optimal strategy screens units at the margin of algorithmic allocation, while directly targeting the highest\-risk units\. Furthermore, we empirically characterize when screening and algorithmic targeting act as complements or substitutes: efficiency gains from screening grow as the aleatoric uncertainty in the population increases\. We illustrate our framework with applications in income\-based social protection programs and humanitarian demining in Colombia, where the tension between screening costs and allocation efficiency is operationally consequential\.

## Heterogeneous Judge\-Aware Ranking with Sensitivity, Disagreement, and Confidence

**Authors:** Shibo Yu; Yingzhou Wang; Yan Chen; Guodong Li; Jin\-Hong Du

**ID:** 152031 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W3mkBXvDwV>) | [PDF](<https://openreview.net/pdf?id=W3mkBXvDwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152031>)

Pairwise comparisons from multiple judges are central to large language model evaluation and preference modeling, yet standard ranking pipelines often pool judgments into a single score vector, treating systematic judge disagreement as noise\. We propose Heterogeneous Judge\-Aware \(HJA\) ranking, a structured multi\-judge ranking framework that separates consensus ranking, judge\-specific sensitivity to consensus, and residual preference disagreement\. HJA thereby treats ranking, judge sensitivity, and structured disagreement as separate inferential targets\. We establish conditions under which this decomposition is identifiable and develop an anchored alternating algorithm that preserves the identifying geometry\. For confidence quantification, we study a fixed\-panel repeated\-comparison regime in which the judge panel may remain fixed or modest while information grows through repeated judgments\. This yields uncertainty statements for consensus and judge\-specific ranking contrasts, sensitivity parameters, pairwise probabilities, and summaries of residual disagreement\.Experiments on synthetic and real multi\-judge comparison data show that HJA improves recovery, robustness, uncertainty calibration, and near\-tie performance relative to pooled and sensitivity\-only baselines\. The fitted model also provides diagnostics for judge disagreement and model\-affinity patterns, giving a statistically grounded framework for ranking under heterogeneous comparative judgments\.

## Mechanism\-Aware Ensemble Conditioning for Data\-Limited Emulation of Extreme Events

**Authors:** Isabella Thiel; Juan M\. Bello\-Rivas; Yannis Kevrekidis; Themis Sapsis

**ID:** 151389 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b0AOZbejEk>) | [PDF](<https://openreview.net/pdf?id=b0AOZbejEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151389>)

Extreme events in chaotic systems are difficult to learn from short trajectories because they are controlled by transient finite\-time instability rather than by frequently observed bulk dynamics\.  We propose a mechanism\-aware conditioning plug\-in framework that turns a nudged coarse ensemble into a non\-intrusive sensor of local instability geometry\.  In the small\-noise regime, the ensemble covariance aggregates the same finite\-time deformation kernels that govern local instability, providing a Jacobian\-free proxy for the local amplification structure around a synchronized coarse trajectory\.  A small FiLM module injects statistics of this ensemble geometry into an otherwise unchanged backbone while leaving the coarse simulator unchanged\.  We demonstrate this interface in two distinct pipelines: a Transformer\-style residual\-attention corrector for a controlled low\-dimensional chaotic system and a probabilistic recurrent STORN corrector for topographic two\-layer quasi\-geostrophic \(QG\) flow\. In the low\-dimensional benchmark, ensemble covariance directions co\-activate with OTD modes and FiLM conditioning improves 99th\-percentile exceedance\-frequency errors over an identical no\-context Transformer baseline\.  In QG, a fixed ensemble\-conditioned FiLM\-STORN model trained on only 50 time units substantially improves long\-horizon rare\-event statistics in the data\-limited regime, including density\-tail errors, exceedance frequencies, and spatial exceedance\-area distributions relative to an unconditioned STORN trained on the same data; on averaged high\-threshold exceedance diagnostics, it also outperforms the baseline STORN trained with 20 times more high\-resolution data\. These results show that local instability geometry is not merely interpretable post hoc, but an actionable conditioning signal for data\-efficient rare\-event emulation\.

## Co\-optimization for Adaptive Conformal Prediction

**Authors:** Xiaoyi Su; Zhixin Zhou; Rui Luo

**ID:** 150402 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iIkqszzLay>) | [PDF](<https://openreview.net/pdf?id=iIkqszzLay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150402>)

In regression, conformal prediction often suffers from inefficiency under heteroscedasticity and skewness due to fixed, non\-adaptive interval centering\. We propose CoCP, a new method that parameterizes prediction intervals by a center $m\(x\)$ and a radius $h\(x\)$, and alternates between learning $h\(x\)$ via smooth quantile regression on folded residuals and refining $m\(x\)$ using a smooth interval loss\. This corrects mis\-centering and drives the interval toward high\-density regions\. Beyond finite\-sample marginal validity via split\-conformal calibration, we prove that CoCP asymptotically achieves conditional coverage and optimal interval length if the base estimators are consistent\. Experiments demonstrate that CoCP yields tighter intervals and achieves state\-of\-the\-art conditional coverage reliability\.

## Exact Gaussian Moment Matching for Residual Networks: a Second\-Order Method

**Authors:** Simon Kuang; Xinfan Lin

**ID:** 155943 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1dsxDeHdpR>) | [PDF](<https://openreview.net/pdf?id=1dsxDeHdpR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155943>)

We study the problem of propagating the mean and covariance of a general multivariate Gaussian distribution through a deep \(residual\) neural network using layer\-by\-layer moment matching\.     We close a longstanding gap      by deriving exact moment matching for the probit, GeLU, ReLU \(as a limit of GeLU\), Heaviside \(as a limit of probit\), and sine activation functions;     for both feedforward and generalized residual layers\.     On random networks, we find orders\-of\-magnitude improvements in the KL divergence error metric, up to a millionfold, over popular alternatives\.     On a variational Bayesian neural network, we show that our method attains hundredfold improvements in KL divergence from Monte Carlo ground truth over a state\-of\-the\-art deterministic inference method\.     We also give an smooth\-distance error bound showing that, under regularity assumptions, moment matching removes the leading low\-variance errors and propagates higher\-order local accuracy through the layers of a network\.

## Score\-based Variational Inference via Quantum Maximally Mixed States

**Authors:** Yuchen CONG; Zerui Tao; Chao Li; Zhe Sun; Qibin Zhao

**ID:** 152799 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QHQvB8TJSh>) | [PDF](<https://openreview.net/pdf?id=QHQvB8TJSh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152799>)

Score\-based variational inference \(VI\) provides an alternative to Kullback\-\-Leibler \(KL\)\-based VI by minimizing the Fisher divergence between the variational distribution and the target\. Existing eigenvalue\-based score\-VI methods face two high\-dimensional obstacles: exponential parameter growth and instability under degenerate or nearly degenerate low\-energy eigenspaces\. We propose QuanVI, a scalable quantum\-inspired algorithm that combines a mixed\-state density\-operator formulation with an MPO\-motivated quantum tensor network \(QTN\) parameterization\. The former represents degenerate low\-energy eigenspaces by their maximally mixed state, avoiding arbitrary eigenvector selection; the latter realizes a compact density operator without explicitly constructing exponentially large matrices\. Experiments and ablations show that QuanVI preserves low\-dimensional accuracy while scaling to high\-dimensional synthetic and Bayesian posterior\-approximation benchmarks, including challenging non\-Gaussian targets\.

## SNACK: A Sequential Notation Framework for Probabilistic Graph Generation

**Authors:** Hohyun Kim; Hyesung Kim; Min\-hwan Oh; Seunggeun Lee

**ID:** 153507 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Komy9HgwRY>) | [PDF](<https://openreview.net/pdf?id=Komy9HgwRY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153507>)

We introduce SNACK, a string representation for probabilistic graph generation that enables sequence models to generate and model graph\-structured data\. SNACK linearizes graphs by encoding the nonzero entries of the lower\-triangular adjacency matrix, establishing a bijective correspondence between valid sequences and ordered adjacency matrices\. This design supports invalid logit masking for enforcing structural constraints, including chemical valence and ordering constraints, and enables principled string\-based GFlowNet training by explicitly accounting for node\-ordering symmetries\. Across standard graph\-generation tasks and molecular distribution\-learning benchmarks, SNACK achieves competitive or state\-of\-the\-art sample quality, while substantially improving the throughput of GFlowNet training relative to graph\-based generation\. Probing analyses further show that models trained on SNACK encode meaningful local and global graph structure despite receiving only sequential supervision\. These results position SNACK as a practical framework for probabilistic graph generation with deep sequence models\.

## AMGenC: Generating Charge Balanced Amorphous Materials

**Authors:** Yan Lin; Jilin Hu; N M Anoop Krishnan; Morten Smedskjaer

**ID:** 154520 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CzhhqLpjCl>) | [PDF](<https://openreview.net/pdf?id=CzhhqLpjCl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154520>)

Amorphous \(disordered\) materials require simulation cells with at least hundreds to thousands of atoms to accurately capture their diverse local atomic environments, compared to crystalline materials that can be described by unit cells containing a few to hundreds of atoms\. To advance the design of amorphous materials with desired properties and facilitate the exploration of their vast design space, generative inverse design has emerged as a promising approach\. It aims to directly output materials with properties closely aligned with the desired ones using probabilistic generative models conditioned on desired properties, which can be more resource efficient than the traditional trial\-and\-error approach\. However, due to the inherent stochasticity of probabilistic generative models, when element assignments are unconstrained, a large portion of generated materials may be charge unbalanced, and no existing methods can effectively mitigate this limitation\. In this work, we propose AMGenC, a new generative inverse design method for amorphous materials that can guarantee the generation of charge balanced samples, with minimal additional computational overhead and without sacrificing inverse design accuracy\. AMGenC achieves this through an element noise that gives the generation process a starting point centered around charge balance, and the combination of a per\-step soft projection and a final discrete projection for steering the elements toward exact charge balance throughout the generation\. We perform extensive experiments on two amorphous materials datasets\. Experimental results provide evidence that AMGenC achieves its design goal\.

## Probabilistic Signature Inversion: Learning Conditional Distributions from Truncated Signatures

**Authors:** Junoh Kang; Kiseop Lee; Bohyung Han

**ID:** 149940 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=m3mr581T1G>) | [PDF](<https://openreview.net/pdf?id=m3mr581T1G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149940>)

The signature transform is a principled feature map for continuous\-time paths, valued for its uniqueness and universality\. Recovering a path from its truncated signature is, however, structurally ill\-posed because the truncated signature map is not injective\. We therefore reformulate truncated signature inversion as a probabilistic problem\-\-\-learning the conditional distribution of a path given its truncated signature\-\-\-and adopt a signature\-conditioned flow matching model as a practical estimator\. This probabilistic reformulation elucidates the fundamental difficulty of inversion: Bayes reconstruction error quantifies the irreducible uncertainty remaining after conditioning on a statistic\. We derive the Bayes\-optimal error under linear statistics, obtaining a closed form for log\-GBM and numerically tractable formulas for log\-fBM and OU\-\-\-yielding a concrete theoretical baseline for model validation\. This baseline upper\-bounds the Bayes error under truncated\-signature conditioning, since truncated signatures provide richer information than linear statistics\. Experiments show that empirical reconstruction errors under linear\-statistics conditioning closely match the theory\-derived baseline, while errors decrease when the statistic is replaced with the truncated signature\. Moreover, generated paths faithfully recover the conditioning signature while preserving key distributional and temporal structure, indicating that the estimator is well calibrated to the target conditional distribution\. Together, these results establish a well\-posed probabilistic framework for truncated\-signature inversion, with applicability demonstrated on real financial data beyond the parametric process families covered by theory\.

## Local Manifold Identification with Latent Linear Models and OT Flows

**Authors:** Sherman Khoo; Song Liu; Mark Beaumont

**ID:** 152505 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SeaR5REYbd>) | [PDF](<https://openreview.net/pdf?id=SeaR5REYbd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152505>)

Identifying manifold structure reveals hidden signals from datasets, removing noise\. In this paper, we study the problem of identifying local manifold structure from data\.  Given a query point $y\_0$ from a dataset,  our goal is to recover the  geometry of the data manifold in a neighborhood of $y\_0$  using a  \\emph\{pretrained\} optimal transport flow from  the reference to the data distribution\. First, we prove that the Brenier optimal transport map preserves  manifold structure: the preimage of an $m$\-dimensional data manifold  is itself an $m$\-dimensional manifold in the reference space\.  Second, motivated by this result, we propose a latent variable model that maps a linear model through the transport flow\.  We prove that the linear approximation error is significantly reduced by the optimal transport map, leading to a tight fit of the non\-linear data manifold\.  Third, noting the intractability of the resulting likelihood, we deploy  denoising Fisher score estimation \-\-\- a recent development from  simulation\-based inference that learns the Fisher score over  parameter\-\-observation pairs \-\-\- to perform likelihood\-based inference effectively\.  Experiments on both synthetic and real\-world datasets demonstrate the effectiveness of the proposed method\.

## Measuring Coherence in Predictive Models

**Authors:** Jamie Reason; Vik Shirvaikar; Mark van der Wilk; Chris C Holmes

**ID:** 150718 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fwwccado3G>) | [PDF](<https://openreview.net/pdf?id=fwwccado3G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150718>)

Many decision making procedures that make use of probabilistic predictors assume that training on new data acts as Bayesian conditioning\. When this assumption breaks, the downstream procedure can perform poorly\. E\.g\. we show that in active learning, incoherent updates cause the procedure to prefer to acquire suboptimal points\. To quantify how far a model's predictive updates depart from conditioning, we introduce the \_incoherence ratio\_\. We empirically find that amortised predictors such as TabPFN can be more coherent than standard parametric approximations to Bayesian inference\. In synthetic active learning experiments, more coherent models acquire better data, an effect not attributable to better predictive performance\. In many tasks, decisions depend on a predictor only through its induced action\. We therefore introduce action coherence, a decision\-theoretic relaxation that measures only the incoherence affecting that action\. These diagnostics make coherence testable and quantifiable, enabling incoherence to be diagnosed and addressed\.

## Auditing Conformal Prediction for Language Models Under Inference\-Time Model Shift

**Authors:** Achref Doula; Max Mühlhäuser

**ID:** 138875 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYzgw5b6rP>) | [PDF](<https://openreview.net/pdf?id=zYzgw5b6rP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138875>)

Conformal prediction \(CP\) for language models is typically evaluated under a \\emph\{matched\} protocol, in which calibration and deployment use the same post\-training inference configuration, such as quantization mode and inference temperature\. In deployment, these choices often differ from those used at calibration to meet memory or throughput constraints or serving policies\. We argue that this exposes a limitation in current CP evaluation protocols for language models\. We formalize the underlying phenomenon as \\emph\{inference\-time model shift\}: a change in the conformal score distribution induced by inference configuration rather than by the input\-\-label distribution, and theoretically characterize how it breaks split\-conformal exchangeability even when the task distribution and trained model are unchanged\. We then evaluate its consequences across $8$ language models, $4$ finite\-label benchmarks, and $12$ inference configurations\. We find that matched evaluation can substantially overstate deployment\-time coverage, and that the effect is heterogeneous across models and datasets\. We argue that inference configuration should be reported as a first\-class experimental axis in CP evaluations for language\-model systems\.

## PULSE: Probabilistic Uncertainty\-Aware Longitudinal Simulation for EHR Trajectories

**Authors:** Robert L Manschke; Angus Roberts; Julia Ive

**ID:** 149130 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=seIHyi0c7e>) | [PDF](<https://openreview.net/pdf?id=seIHyi0c7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149130>)

Realistic intensive\-care EHR trajectories are difficult to simulate because physiology, treatments, observation times, and patient\-existence state co\-evolve under sparse clinical measurement\. We introduce PULSE, a probabilistic simulator family for ICU trajectories\. PULSE separates treatment rollout from patient\-state rollout, predicts binary patient state before continuous physiology, and updates continuous variables through gated residual dynamics around the last observed or simulated state\. Probabilistic variants add event\-time inputs, heteroscedastic Gaussian heads, monotone B\-spline\-flow residual transforms, latent severity pooling, and covariance\-coupled residual groups\. On a MIMIC\-IV v3\.1 sepsis cohort scored over a 37\-variable predictive\-check panel, reference PULSE reduces k=6 vector\-normalized RMSE from 7\.124 for a matched per\-covariate transformer Monte Carlo baseline to 5\.969, and improves over carry\-forward from 6\.633 to 5\.969; paired patient\-level bootstrap intervals support both differences\. RMSE is a useful sanity check for aggregate scale, but not a sufficient criterion for trajectory realism: carry\-forward is already difficult to beat despite generating straight\-line futures\. Gaussian NLL is the strongest calibrated PULSE variant by CRPS, while B\-spline flows address the non\-Gaussian shape of factual residuals\. Within B\-spline flows, event\-time encodings with Δt prediction improve k=6 rollout from 8\.301 to 6\.635 and yield sharper, more state\-dependent residual densities\. In k=6 density\-mixture analysis, B\-spline intervals have larger across\-state 90% width variation than Gaussian intervals \(coefficient of variation 0\.79 versus 0\.48\) and higher 90/95% inclusion despite slightly weaker aggregate PIT uniformity, consistent with better local skew and sharpness in some states\. Similar gains over carry\-forward persist on eICU sepsis validation panels, while absorbing\-state timing remains a major unresolved error source\. CVSim known\-effect experiments show that synthetic treatment response can be learned under mechanistic ground truth, although transfer to MIMIC\-seeded counterfactual tests remains weak\.

## How Likely Are Voting Rules Equitable?

**Authors:** Lirong Xia

**ID:** 155347 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6IKjOPSRCq>) | [PDF](<https://openreview.net/pdf?id=6IKjOPSRCq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155347>)

In social choice,   anonymity  \(treating all agents equally\) and  neutrality  \(treating all alternatives equally\) are widely regarded as "minimal demands" and "uncontroversial" axioms of equity and fairness\. However, due to the ANR impossibility theorem, no voting rule can simultaneously satisfy anonymity, neutrality, and resoluteness \(always choosing a unique winner\)\. While the worst\-case ANR impossibility is well understood, its likelihood in probabilistic models remains underexplored\.   We address this question through comprehensive likelihood analysis under semi\-random models, providing accurate bounds to quantify the advantage of the optimial tie\-breaking mechanisms over other commonly\-used tie\-breaking mechanisms\.  Our characterizations reveal an $n^\{\\Theta\(m\!\)\}$   improvement in many cases, where $n$ is the number of agents and $m$ is the number of alternatives\. We also prove a quantitative ANR impossibility theorem characterizing the tradeoff between equity \(anonymity and neutrality\) and a new efficiency criterion called $\\delta$\-anonymity\.  Our work advances the understanding of trade\-offs between equity and efficiency in voting\.

## Why Heavy\-Tailed Weights Predict Model Quality

**Authors:** Joseph Wilson; Chris van der Heide; Liam Hodgkinson; Zhichao Wang; Fred Roosta; Michael Mahoney

**ID:** 149300 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rEXrPkLsO4>) | [PDF](<https://openreview.net/pdf?id=rEXrPkLsO4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149300>)

A solid understanding of the predictive success of deep neural networks \(DNNs\) remains elusive\. For example, while many data\-dependent metrics exist that seek to predict model quality of DNNs, these metrics may be expensive to compute for large datasets and/or may be impossible to compute when training datasets are not released\. A practical and effective predictor of model quality involves analyzing DNN weight matrices, as it is known that a heavy\-tailed spectral distribution often correlates with strong model quality\. As such metrics lack a rigorous statistical derivation, in this work we aim to understand why they perform well, by employing a probabilistic framework to derive the marginal likelihood for the trained weights of a DNN\. Across large\-scale convolutional DNNs and LLMs, we find that this marginal likelihood predicts model quality\. To understand the role heavy\-tailed spectra play in predictive performance, we derive the limiting log\-marginal likelihood for spectra that follow the heavy\-tailed High\-Temperature Marchenko\-Pastur \(HTMP\) distribution\. We show that this limiting quantity is convex in a \*heaviness\* parameter, and we derive an optimal \*heaviness\* that empirically predicts over\-fitting for large\-scale DNNs during training\.

## Announced Breaks Separate Conformal Reliability from Frequency Calibration

**Authors:** Karl Li

**ID:** 151358 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b9d9BqKBKg>) | [PDF](<https://openreview.net/pdf?id=b9d9BqKBKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151358>)

Online forecasters sometimes know a regime boundary before any post\-boundary labels arrive\. Standard adaptive conformal methods still react through later coverage errors, so they can pay a detection\-delay cost even when the boundary is public\. We study conformal prediction with an announced partition of the stream and separate two post\-break audits\. The reset empirical quantile in segmented split\-CP attains the minimax per\-time probability\-gap rate $\\Theta\(M^\{\-1/2\}\)$ after $M$ post\-reset scores, with a matching Le Cam lower bound\. A pure bounded constant\-step announced\-break ACI recursion attains an $O\(M^\{\-1\}\)$ time\-averaged empirical\-frequency gap by telescoping, but this is a realized\-frequency statement, not a guarantee for the next interval\. The practical AB\-ACI implementation used in experiments adds burn\-in and projection, so its rate claim includes explicit correction terms and is not unconditional\. Synthetic experiments recover both slopes and show short\-window gains when the break is large\. Two real\-data applications are null under leakage\-free protocols\. ERCOT RTC\+B gives 0\.863 post\-reform coverage for AB\-ACI versus 0\.880 for ACI, and FOMC yield breaks give 0\.892 versus 0\.900\. The message is diagnostic: use the reset empirical quantile for per\-prediction reliability, use AB\-ACI only for long\-run frequency audits, and expect gains only when the realized score shift is large enough to make detection delay costly\.

## Fast and Stable Gradient Approximation for Bilinear Forms of Hermitian Matrix Functions

**Authors:** Navjot Singh; Kipton Barros; Sherry Li

**ID:** 156051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0o7Q9IWQK0>) | [PDF](<https://openreview.net/pdf?id=0o7Q9IWQK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156051>)

Objectives involving bilinear forms \\\(u^\\top f\(A\(\\theta\)\)v\\\) for Hermitian \\\(A\\\) arise widely in scientific computing and probabilistic machine learning\. For large matrices, Lanczos efficiently approximates these quantities, but differentiating them with respect to \\\(\\theta\\\) is challenging\. Existing approaches either backpropagate through the Lanczos recurrence, requiring reorthogonalization for stability, or apply Arnoldi to an augmented block matrix of twice the original size\. Both introduce extra computation and orthogonalization costs that can limit performance on modern hardware\. We propose a forward\-only gradient approximation that reuses the Lanczos pass and adds  very minimal overhead in most cases\. We prove that its error is proportional to the Lanczos residual norm, the same quantity controlling the forward approximation\.  Whereas a traditional adjoint\-based calculation would be unstable without reorthogonalization, the new method appears unconditionally stable in our tests\. It is also faster than existing state\-of\-the\-art approaches\.

## Network Learning with Semi\-relaxed Gromov\-Wasserstein

**Authors:** Charles Dufour; Ulysse Naepels; Leonardo V Santoro

**ID:** 155105 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8M8bvNtshh>) | [PDF](<https://openreview.net/pdf?id=8M8bvNtshh>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155105>)

Estimating the generative mechanism of large\-scale networks is a fundamental challenge in statistical machine learning\. It requires the identification of the latent connectivity structure, which is in general an NP\-hard combinatorial problem due to the absence of canonical node labels\. We address this challenge by allowing for probabilistic couplings, thereby relaxing the assignment problem\. Our estimation framework can be formulated as a semi\-relaxed Gromov–Wasserstein objective and provides a low\-dimensional representation of the generative structure\. We solve this via a block\-coordinate conditional gradient algorithm\. Despite the relaxation, the resulting solution is typically deterministic: in fact, we show that the optimality gap between the relaxed solution and the deterministic assignment vanishes at rate $O\(1/n\)$, where $n$ is the number of nodes\. This allows for tractable recovery of the underlying model and enables rigorous statistical analysis: we establish consistency and minimax\-optimal convergence rates for both stochastic block models and smooth graphons\. Our implementation scales efficiently with $n$, as demonstrated on both synthetic and real\-world datasets\.

## Test\-Time Personalization: A Diagnostic Framework and Probabilistic Fix for Scaling Failures

**Authors:** Linhai Zhang; Yulan He

**ID:** 153672 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JdKKdb98Rv>) | [PDF](<https://openreview.net/pdf?id=JdKKdb98Rv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153672>)

Existing approaches to LLM personalization focus on constructing better personalized models or inputs, while treating inference as a single\-shot process\. In this work, we study \\textbf\{Test\-Time Personalization \(TTP\)\} along an unexplored axis: scaling inference\-time computation by sampling $N$ candidates from a personalized policy model and selecting the best with a personalized reward model\. However, standard reward models fail to realize this potential\. To diagnose why, we derive a unified scaling law that decomposes any reward model's Best\-of\-$N$ curve into four measurable quantities and reveals two failure modes, \\emph\{user\-level collapse\} \(near\-constant prediction for some users\) and \\emph\{query\-level reward hacking\} \(negative correlation with true quality for some queries\)\. Guided by this law, we propose a probabilistic personalized reward model whose learned variance  effectively mitigates both failure modes\. Experiments confirm both elements of our framework: TTP delivers consistent scaling across multiple policy models and personalized text generation tasks, and our scaling law closely matches observed scaling curves across reward\-model variants\.

## Hybrid Probabilistic Zonotopes for Identifiable and Refinable Predictive Uncertainty

**Authors:** Zhen Zhang; Amr Alanwar

**ID:** 154293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eof9Xx15Ry>) | [PDF](<https://openreview.net/pdf?id=Eof9Xx15Ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154293>)

Probabilistic prediction heads in neural networks typically output either a Gaussian mixture or a single conformal region\. Neither separates the distinct sources of uncertainty often present in real prediction tasks: a discrete choice among modes, bounded systematic drift within the chosen mode, and irreducible stochastic noise\. We introduce the Hybrid Probabilistic Zonotope \(HProbZ\), an output head that represents these three sources as binary, bounded, and stochastic generators of a zonotope, and admits a closed\-form likelihood by convolution\. Sharing the bounded generator across prediction steps couples future predictions algebraically, so observing one step refines the predictive distribution at every remaining step in a single forward pass\. We establish that the three generators are identifiable from the likelihood up to permutation, and that an HProbZ density is representationally distinct from any finite Gaussian mixture\. The same shared structure provides analytic per\-mode risk and distribution\-free multi\-modal conformal sets at inference time\. Empirical analysis on representative prediction benchmarks supports the effectiveness of the design relative to same\-encoder mixture baselines, while offering structural properties that mixture or convex\-conformal predictors do not jointly provide\.

## Affine Tracing: A New Paradigm for Probabilistic Linear Solvers

**Authors:** Disha Hegde; Marvin Pförtner; Jon Cockayne

**ID:** 150970 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=duOAO1yJKQ>) | [PDF](<https://openreview.net/pdf?id=duOAO1yJKQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150970>)

Probabilistic linear solvers \(PLSs\) return probability distributions that quantify uncertainty due to limited computation in the solution of linear systems\. The literature has traditionally distinguished between Bayesian PLSs, which condition a prior on information obtained from projections of the linear system, and probabilistic iterative methods \(PIMs\), which lift classical iterative solvers to probability space\. In this work we show this dichotomy to be false: Bayesian PLSs are a special case of non\-stationary affine PIMs\. In addition, we prove that any realistic affine PIM is calibrated\. These results motivate a focus on \(non\-stationary\) affine PIMs, but their practical adoption has been limited by the significant manual effort required to implement them\. To address this, we introduce \*affine tracing\*, an algorithmic framework that automatically constructs a PIM from a standard implementation of an affine iterative method by passing symbolic tracers through the computation to build an affine computational graph\. We show how this graph can be transformed to compute posterior covariances, and how equality saturation can be used to perform algebraic simplifications required for computation under specific prior choices\. We demonstrate the framework by automatically generating a probabilistic multigrid solver and evaluate its performance in the context of Gaussian process approximation\.

## Partition Tree: Conditional Density Estimation over General Outcome Spaces

**Authors:** Felipe Angelim; Alessandro Leite

**ID:** 153278 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MRmk6eSAqk>) | [PDF](<https://openreview.net/pdf?id=MRmk6eSAqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153278>)

We propose Partition Tree, a tree\-based framework for conditional density estimation over general outcome spaces that supports both continuous and categorical variables within a unified formulation\. Our approach models conditional distributions as piecewise\-constant densities on data\-adaptive partitions and learns trees by directly minimizing conditional negative log\-likelihood\. This yields a scalable, nonparametric alternative to existing probabilistic trees that does not make parametric assumptions about the target distribution\. We further introduce Partition Forest, an ensemble extension obtained by averaging conditional densities\. Empirically, we demonstrate improved probabilistic prediction over CART\-style trees and competitive performance compared to state\-of\-the\-art probabilistic tree methods and Random Forests\.

## Efficient Adaptive Data Acquisition via Pretrained Belief Representations

**Authors:** Daolang Huang; Zhuoyue Huang; Conor Hassan; Luigi Acerbi; Samuel Kaski; Thomas Rainforth

**ID:** 156141 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=04exJhvdI5>) | [PDF](<https://openreview.net/pdf?id=04exJhvdI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156141>)

Learning effective policies for adaptive data acquisition remains challenging: posterior\-based methods rely on surrogate models and posterior approximations that can be misspecified or biased, while direct policy\-learning methods map from historical observations and fail to exploit available model representations, making learning harder\. We introduce policy learning with belief representations \(POLAR\), based on the insight that optimal data acquisition depends on the observation history only through a sufficient belief state\. Specifically, POLAR decouples representation learning from policy learning by leveraging pretrained predictive foundation models as belief\-state encoders, training a policy head on top of their representations\. This yields a simple, unified amortised policy learning framework for Bayesian experimental design, Bayesian optimisation, and active learning, differing only in the task\-specific utility used to train the policy\. Empirically, we find that POLAR outperforms state\-of\-the\-art amortised methods across diverse tasks while requiring far fewer training samples, demonstrating a significant step in the scalability and efficiency of amortised data acquisition\.

## Learning Global Probabilistic Explanations

**Authors:** Frederic Koriche; Louenas Bounia

**ID:** 151220 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=c2Ny586AOf>) | [PDF](<https://openreview.net/pdf?id=c2Ny586AOf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151220>)

Interpreting the predictions of complex black\-box classifiers remains a central challenge in explainable artificial intelligence\.  While local explanations clarify individual predictions, there is a significant need for global probabilistic explanations that capture a model's overall behavior across the input distribution\. We define such an explanation as a small subset $K$ of features, whose relevance is measured by the probability that the classifier assigns identical labels to two independently sampled inputs that agree on $K$\.  Based on this notion, we investigate the task of identifying maximally relevant global explanations under a cardinality constraint, focusing on product distributions with full support on discrete feature spaces\. We introduce a spectral explainer that leverages membership queries to the black\-box classifier and employs Fourier\-analytic, junta\-learning methods to produce probably approximately correct \(PAC\) explanations\. Our algorithm is fixed\-parameter tractable with respect to the explanation size limit, maximum feature cardinality, and desired accuracy\. Experimental evaluations on synthetic and real\-world datasets show that the spectral explainer provides highly relevant global explanations and outperforms heuristic greedy methods as the explanation size increases\.

## A Faster Algorithm for the Half\-Trek Criterion in Structural Causal Models

**Authors:** Yasmine Briefs; Markus Bläser

**ID:** 152110 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VSTKL0A1Fz>) | [PDF](<https://openreview.net/pdf?id=VSTKL0A1Fz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152110>)

Linear structural causal models \(SCMs\) are used to analyze relationships among random variables\. In these models, directed edges encode direct causal effects, while bidirected edges capture latent confounding\. The problem of generically identifying the hidden parameters from observed correlations remains open in causal inference\. The half\-trek criterion by Foygel, Draisma, and Drton \[2012\] and its generalization to the edge\-wise criterion are important criteria for generic identification in linear SCMs, since the half\-trek criterion can be efficiently decided by an algorithm with running time $\\mathcal\{O\}\(n^5\)$\. We here develop a new criterion that is equivalent to the edgewise criterion\. Utilizing this criterion, we design a faster randomized algorithm for deciding the half\-trek criterion with running time $\\mathcal\{O\}\(n^4\)$\. For sparse graphs, our algorithm even works in $\\mathcal\{O\}\(n^3\)$\. We show that the algorithm is useful in practice by providing an implementation that outperforms the implementation of HTC in the state\-of\-the art R package SEMID\.

## A Spectral Framework for Closed\-Form Relative Density Estimation

**Authors:** Francis Bach

**ID:** 152831 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q5UGhwLahz>) | [PDF](<https://openreview.net/pdf?id=Q5UGhwLahz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152831>)

We propose a closed\-form spectral framework for relative log\-density estimation in linearly parameterized probabilistic models, including unnormalized and conditional models\. This is achieved by representing the Kullback\-Leibler \(KL\) divergence as an integral of weighted chi\-squared divergences, converting KL estimation into a family of least\-squares problems\. We derive an explicit spectral formula based only on first\- and second\-order feature moments, yielding closed\-form estimators of both divergences and log\-density potentials for fixed features\. The framework extends to a broad class of $f$\-divergences and can be combined with kernelization or feature learning with neural networks\. We prove convergence guarantees for the resulting estimators and empirically compare them on synthetic data with optimization\-based variational formulations, including logistic and softmax regression for normalized conditional models\.

## Model\-Free Assessment of Simulator Fidelity via Quantile Curves

**Authors:** Yu\-Shiou Lin; Kaizheng Wang; Garud Iyengar

**ID:** 154001 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GwnlXWrqUF>) | [PDF](<https://openreview.net/pdf?id=GwnlXWrqUF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154001>)

As generative AI models are increasingly used to simulate real\-world systems, quantifying their “sim\-to\-real” gap is critical\. We study this gap across a population of input settings, called scenarios, e\.g\. survey questions or operating conditions\. The population\-level quantities defining the real\-world and simulated system are only observed through finite, often heterogeneous, samples\. Consequently, the population\-level discrepancy cannot be directly computed, and standard predictive inference methods that target observable outputs are ill\-suited\. We propose a model\-agnostic framework that constructs confidence sets for the latent parameters, forms a conservative proxy for the sim\-to\-real discrepancy, and estimates its quantile function across scenarios\. The resulting calibrated risk profile allows for inference on a new scenario, tail\-risk summaries such as Conditional Value\-at\-Risk \(CVaR\), and principled comparisons across simulators\. Our method applies to a range of output spaces, including categorical survey responses and continuous outcomes\. We demonstrate its utility by evaluating the alignment of four major LLMs with human populations on the WorldValueBench dataset\.

## Stable GFlowNets with Probabilistic Guarantees

**Authors:** Zengxiang Lei; Ananth Shreekumar; Jonathan Rosenthal; Ruoyu Song; Alvaro A Cardenas; Daniel Fremont; Dongyan Xu; Satish Ukkusuri; Z\. Berkay Celik

**ID:** 150233 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jnP3JrG3BL>) | [PDF](<https://openreview.net/pdf?id=jnP3JrG3BL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150233>)

Generative Flow Networks \(GFlowNets\) learn to sample states proportional to an unnormalized reward\. Despite their theoretical promise, practical training is often unstable, exhibiting severe loss spikes and mode collapse\. To address this, we first assess the sensitivity of GFlowNet objectives, demonstrating that a small Total Variation \(TV\) distance between the learned and target distributions does not preclude an unbounded training loss\. Motivated by this mismatch, we establish converse guarantees by deriving loss\-to\-TV bounds that certify global fidelity from bounded trajectory balance losses\. Lastly, we propose \\emph\{Stable GFlowNets\}, which leverages our theory to stabilize training via adaptive reference flow and improves the trade\-off among mode coverage, robustness, and certifiability\.

## AI\-Assisted Classification under Correlation Neglect and Trust

**Authors:** Saurabh Amin; Amine Bennouna; Daniel Huttenlocher; Dingwen Kong; Liang Lyu; Asuman Ozdaglar

**ID:** 152625 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rhmuhzzjjr>) | [PDF](<https://openreview.net/pdf?id=Rhmuhzzjjr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152625>)

When does an AI assistant improve human decision\-making, and when does it hurt? We consider the setting in which a human worker makes a binary decision by observing her own signal and receiving a binary or probabilistic recommendation from an AI\. We develop a behavioral model which considers both her belief regarding the overlap of her signal with the AI as well as the trust she has in the AI when considering its recommendation\. The model yields a phase diagram in AI capability and signal overlap, partitioning the parameter space into complementarity, impairment, and automation regions\. A worker who neglects signal overlap \(correlation neglect\) can experience performance loss when incorporating AI into her decision and is eventually dominated by AI alone as AI capability grows, with the complementarity range narrowing as overlap rises\. Trust calibration shifts region boundaries: undertrust shrinks the impairment region but expands automation, while overtrust expands impairment but extends complementarity to be preferred at higher AI capability levels\. Applying the framework to ChatBench \(643 workers, GPT\-4o and Llama\-3\.1\-8b\), AI assistance raises accuracy by 21 percentage points, but workers undertrust the AI by roughly a factor of four\. The model yields design insights linking AI deployment choices, worker behavioral parameters, and outcome quality\.

## One\-Shot Generative Flows: Existence and Obstructions

**Authors:** Panagiotis Tsimpos; Daniel Sharp; Youssef Marzouk

**ID:** 155557 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4fhoYxsUYq>) | [PDF](<https://openreview.net/pdf?id=4fhoYxsUYq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155557>)

We study dynamic measure transport for generative modeling, focusing on transport maps that connect a source measure $P\_0$ to a target measure $P\_1$ by integrating a velocity field of the form $v\_t\(x\) = \\mathbb\{E\}\[\\dot X\_t \\mid X\_t = x\]$, where $X\_\{\\bullet\} = \(X\_\{t\}\) \_\{t\}$ is a stochastic process satisfying $\(X \_\{0\}, X \_\{1\}\) \\sim \{P \_\{0\}\} \\otimes \{P \_\{1\}\} $ and $\\dot X \_\{t\}$ is its time derivative\. We investigate when $X \_\{\\bullet\}$ induces a \_straight\-line flow\_: a flow whose pointwise acceleration vanishes and is therefore exactly integrable by any first\-order method\. First, we develop multiple characterizations of straight\-line flows in terms of PDEs involving the conditional statistics of the process\. Then, we prove that straight\-line flows under endpoint independence exhibit a sharp dichotomy\. On the one hand, we construct explicit, computable straight\-line processes for arbitrary Gaussian endpoints\. On the other hand, we show that straight\-line processes do not exist for targets with sufficiently well\-separated modes\. We demonstrate this obstruction through a sequence of increasingly general impossibility theorems that uncover a fundamental relationship between the sample\-path behavior of a process with independent endpoints and the space\-time geometry of this process' flow map\. Taken together, these results provide a structural theory of when straight\-line generative flows can, and cannot, exist\.

## From Collapse to Improvement: Statistical Perspectives on the Evolutionary Dynamics of Iterative Training on Contaminated Sources

**Authors:** Soham Bakshi; Sunrit Chakraborty

**ID:** 148326 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yfGxUZj1zT>) | [PDF](<https://openreview.net/pdf?id=yfGxUZj1zT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148326>)

The problem of model collapse has presented new challenges in iterative training of generative models, where such training with synthetic data leads to an overall degradation of performance\. This paper looks at the problem from a statistical viewpoint, illustrating that one can actually hope for improvement when models are trained on data contaminated with synthetic samples, as long as there is some amount of fresh information from the true target distribution\. In particular, we consider iterative training on samples sourced from a mixture of the true target and synthetic distributions\. We analyze the entire iterative evolution in a next\-token prediction language model, capturing how the interplay between the mixture weights and the sample size controls the overall long\-term performance\. With non\-trivial mixture weight of the true distribution, even if it decays over time, simply training the model in a contamination\-agnostic manner with appropriate sample sizes can avoid collapse and even recover the true target distribution under certain conditions\. Simulation studies support our findings and also show that such behavior is more general for other classes of models\.

## Scalable Variational Bayesian Fine\-Tuning of LLMs via Orthogonalized Low\-Rank Adapters

**Authors:** Haotian Xiang; Bingcong Li; Qin Lu

**ID:** 149427 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q8fHjSdu4t>) | [PDF](<https://openreview.net/pdf?id=q8fHjSdu4t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149427>)

When deploying large language models \(LLMs\) to safety\-critical applications, uncertainty quantification \(UQ\) is of utmost importance to self\-assess the reliability of the LLM\-based decisions\. However, such decisions typically suffer from overconfidence, particularly after parameter\-efficient fine\-tuning \(PEFT\) for downstream domain\-specific tasks with limited data\. Existing methods to alleviate this issue either rely on a Laplace approximation based post\-hoc framework, which may yield suboptimal calibration depending on the training trajectory, or variational Bayesian training that requires multiple complete forward passes through the entire LLM backbone at inference time for Monte Carlo estimation, posing scalability challenges for deployment\. To address these limitations, we build on the Bayesian last layer \(BLL\) model, where the LLM\-based \*deterministic\* feature extractor is followed by random last\-layer parameters for uncertainty reasoning\. Since existing low\-rank adapters \(LoRA\) for PEFT have limited expressiveness due to rank collapse, we address this with Polar\-decomposed Low\-rank Adapter Representation \(PoLAR\), an orthogonalized parameterization paired with Riemannian optimization to enable more stable and expressive adaptation\. Building on this PoLAR\-BLL model, we leverage the variational \(V\) inference framework to put forth a scalable Bayesian fine\-tuning approach which jointly seeks the PoLAR parameters and approximate posterior of the last\-layer parameters via alternating optimization\. The resulting PoLAR\-VBLL is a flexible framework that nicely integrates architecture\-enhanced optimization with scalable Bayesian inference to endow LLMs with well\-calibrated UQ\. Our empirical results verify the effectiveness of PoLAR\-VBLL in terms of generalization and uncertainty estimation on both in\-distribution and out\-of\-distribution data for various common\-sense reasoning tasks\.

## WebNavigator: Global Web Navigation via Interaction Graph Retrieval

**Authors:** Xuanwang Zhang; Yuteng Han; Jinnan Qi; Xinyu Liu; Mulong Xie; Zhen Wu; Xinyu Dai

**ID:** 154891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A958ZPHMku>) | [PDF](<https://openreview.net/pdf?id=A958ZPHMku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154891>)

Despite significant advances in autonomous web navigation, current methods remain far from human\-level performance in complex web environments\. We argue that this limitation stems from Topological Blindness, where agents are forced to explore via trial\-and\-error without access to the global topological structure of the environment\. To overcome this limitation, we introduce WebNavigator, which reframes web navigation from probabilistic exploration into deterministic retrieval and pathfinding\. WebNavigator constructs Interaction Graphs via zero\-token cost heuristic exploration offline and implements a Retrieve\-Reason\-Teleport workflow for global navigation online\. WebNavigator achieves state\-of\-the\-art performance on WebArena and Online\-Mind2Web\. On WebArena multi\-site tasks, WebNavigator achieves a 72\.9% success rate, more than doubling the performance of enterprise\-level agents\. This work reveals that Topological Blindness, rather than model reasoning capabilities alone, is an underestimated bottleneck in autonomous web navigation\.

## K\-PWM: Control\-Oriented Structured World Models under Partial Observation

**Authors:** Santosh M Rajkumar; Sriram Narayanan; Samuel E Otto; Debdipta Goswami

**ID:** 152141 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VCXCoGk8ql>) | [PDF](<https://openreview.net/pdf?id=VCXCoGk8ql>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152141>)

World models enable prediction, planning, and decision\-making by learning internal simulators of environment dynamics\. Although substantial progress has been made in world models from pixel\-based observations, many physical systems are instead observed through vector\-based measurements that are noisy and only partially informative of the underlying state\. We introduce K\-PWM, a Koopman\-structured probabilistic world model for prediction and control under partial observation\. K\-PWM combines a parameterized Koopman\-structured state\-space model with a nonlinear observation decoder, and performs probabilistic latent\-state inference directly through the learned model parameters rather than through a separately trained inference network\. We train K\-PWM using a generalized expectation conditional maximization \(GECM\) procedure with principled initialization\. Across Gymnasium MuJoCo tasks, K\-PWM improves sample efficiency, yields reliable long\-horizon predictions, and supports downstream control through model predictive path integral \(MPPI\) control\. These results suggest that structured probabilistic latent dynamics provide a useful route toward data\-efficient world modeling and control in partially observable vector\-valued settings\.

## Inference and estimation with unidentifiable latent treatment effects

**Authors:** Christopher Tosh; Boyuan Zhang; Wesley Tansey

**ID:** 154647 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C3vudFgQi2>) | [PDF](<https://openreview.net/pdf?id=C3vudFgQi2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154647>)

Scientists often need to analyze the samples in a study that responded to treatment in order to refine their hypotheses and find potential causal drivers of response\.  Natural variation in outcomes makes teasing apart responders from non\-responders a statistical inference problem\.  We introduce the causal two\-groups \(C2G\) model, a causal extension of the classical two\-groups model for inferring treatment effects\. The classical two\-groups model posits that treated samples may or may not experience an effect, according to some prior probability\. The C2G model extends this to consider the case where treatment, latent effect status, and effect size are all confounded\. We propose two empirical Bayes procedures for the causal two\-groups model, one under semi\-parametric conditions and another under fully nonparametric conditions\.  The semi\-parametric model assumes additive treatment effects and is identifiable from observed data\.  The nonparametric model is unidentifiable, but we show it can still be used to test for response in each treated sample\.  We show empirically and theoretically that both methods for selecting responders control the false discovery rate at the target level with near\-optimal power\.  We also propose two novel estimands of interest and provide a strategy for deriving estimand intervals in the unidentifiable nonparametric model\.  We apply the C2G model to a cancer immunotherapy dataset, where the nonparametric model recovers clinically\-validated predictive biomarkers of both positive and negative outcomes\.

