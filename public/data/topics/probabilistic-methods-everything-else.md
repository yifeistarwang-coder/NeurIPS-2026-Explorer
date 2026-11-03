# Probabilistic Methods / Everything Else

概率方法 / 其他概率方法

10 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## MOCHA: Discovering Multi\-Order Dynamic Causal Structure in Temporal Point Processes

**Authors:** Yunyang Cao; Juekai Lin; Wenhao Li; Bo Jin

**ID:** 148729 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vUoDNsnEOj>) | [PDF](<https://openreview.net/pdf?id=vUoDNsnEOj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148729>)

Modeling event sequences requires understanding when future events will occur and how event types causally influence one another over time\. Existing temporal point process \(TPP\) models typically assume static or first\-order dependence structures, which limits their ability to capture the dynamic and multi\-order causal mechanisms commonly observed in real\-world systems\. We propose MOCHA, a Multi\-Order Causal Hierarchical Architecture for multivariate TPP that jointly models time\-varying causal structure and multi\-hop influence propagation in continuous time\. MOCHA learns latent dynamic weighted directed acyclic graphs \(DAG\) over event types, where acyclicity and sparsity constraints promote structurally valid causal graphs\. Based on the learned graph, the model decomposes event dynamics into multi\-order causal paths, and incorporate both direct influence and indirect propagation into the intensity function\. The entire framework is end\-to\-end differentiable and optimized jointly for event prediction and causal structure discovery\. Experiments on seven real\-world datasets from different domains show that MOCHA consistently achieves superior negative log\-likelihood, while also recovering dynamic causal patterns that align with domain knowledge\. These results demonstrate that MOCHA provides an effective framework for dynamic causal structure learning in TPP\.

## Deep Ensembles for Epistemic Uncertainty: A Frequentist Perspective

**Authors:** Anchit Jain; Stephen Bates

**ID:** 155011 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9FW7gD5kYf>) | [PDF](<https://openreview.net/pdf?id=9FW7gD5kYf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155011>)

Decomposing prediction uncertainty into aleatoric \(irreducible\) and epistemic \(reducible\) components is critical for the reliable deployment of machine learning systems\. While the mutual information between the response variable and model parameters is a principled measure for epistemic uncertainty, it requires access to the parameter posterior, which is computationally challenging to approximate\. Consequently, practitioners often rely on probabilistic predictions from deep ensembles to quantify uncertainty, which have demonstrated strong empirical performance\. However, a theoretical understanding of their success from a frequentist perspective remains limited\. We address this gap by first considering a bootstrap\-based estimator for epistemic uncertainty, which we prove is asymptotically correct\. Next, we connect deep ensembles to the bootstrap estimator by decomposing it into data variability and training stochasticity; specifically, we show that deep ensembles capture the training stochasticity component\. Through empirical studies, we show that this stochasticity component constitutes the majority of epistemic uncertainty, thereby explaining the effectiveness of deep ensembles\.

## Self\-Organized Conformal Prediction: Reducing Regional Coverage Gaps with Unsupervised Group Discovery

**Authors:** Louis Berthier; Ahmed Shokry; Maxime Moreaud; Guillaume Ramelet; Aymeric Dieuleveut

**ID:** 151252 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bl6vZeiL9I>) | [PDF](<https://openreview.net/pdf?id=bl6vZeiL9I>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151252>)

Conformal prediction guarantees marginal coverage, but pooled calibration averages over heterogeneous regions and can mask regional undercoverage in safety\-critical subgroups\. We introduce Self\-Organized Conformal Prediction \(SOCP\), a calibration scheme that discovers input\-space groups with a Self\-Organizing Map \(SOM\) and, at test time, draws a local calibration buffer from the query's best\-matching unit \(BMU\) cell or a fixed grid neighborhood\. The same retrieval rule applies to regression and classification tasks across tabular features and image embeddings, leaving the predictor and nonconformity score untouched\. SOCP gives exact validity for BMU\-cell retrieval and fixed retrieved\-set validity for neighborhood buffers; central\-cell validity for neighborhood retrieval holds up to a Kolmogorov\-Smirnov \(KS\) bias term\. A split\-routed extension recovers fixed retrieved\-set validity conditional on the routing split\. On eight regression and classification benchmarks, SO\-SCP reduces the weighted regional coverage gap on $7/8$ datasets \(mean paired change $\-7\.1\\%$\) for a mean prediction\-set size increase of $6\.2\\%$, with negligible overhead on the largest six datasets; SO\-CQR yields smaller gains, since quantile regression already absorbs much of the heterogeneity\. By learning groups directly from the input geometry, SOCP provides group\-local calibration with exact fixed\-group guarantees and approximate central\-cell guarantees, without supervised partitions or predictor retraining\.

## Deep Heteroskedastic Regression: Post\-Hoc Variance Estimation from Latent Representations

**Authors:** Mikkel Jordahn; Jonas Vestergaard Jensen; James Harrison; Michael Andersen; Mikkel Schmidt

**ID:** 151494 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aFEmSFmQld>) | [PDF](<https://openreview.net/pdf?id=aFEmSFmQld>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151494>)

Uncertainty quantification \(UQ\) in deep learning regression is of wide interest, as it supports critical applications including sequential decision making and risk\-sensitive tasks\. In heteroskedastic regression, where the uncertainty of the target depends on the input, a common approach is to train a neural network that parametrises the mean and the variance of the predictive distribution\. Yet to this day, training deep heteroskedastic regression models poses severe practical challenges in the trade\-off between uncertainty quantification and mean prediction, such as variance overfitting, optimization difficulties and representation collapse\. In this work, we identify the core issues and propose a simple and efficient procedure that addresses these jointly by post\-hoc fitting a variance model across the intermediate layers of a pretrained network on a hold\-out dataset\. We demonstrate that this method is competitive with end\-to\-end trained mean\-variance networks in heteroskedastic UQ on several data modalities\. The method retains mean prediction accuracy, is cheap at both train and prediction time, and requires no additional data compared to existing methods\. Finally, we show this method works on large scale foundation models for chemistry, paving the way for cheap heteroskedastic UQ in large scale neural networks without having to retrain such models end\-to\-end\.

## PAC Reasoning: Controlling the Performance Loss for Efficient Reasoning

**Authors:** Hao Zeng; Jianguo Huang; Bingyi Jing; Hongxin Wei; Bo An

**ID:** 155512 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=52BT1Jih6O>) | [PDF](<https://openreview.net/pdf?id=52BT1Jih6O>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155512>)

Large reasoning models \(LRMs\) have achieved remarkable progress in complex problem\-solving tasks\. Despite this success, LRMs typically suffer from high computational costs during deployment, highlighting a need for efficient inference\. A practical direction is to switch the LRM between thinking and non\-thinking modes dynamically\. However, such approaches often introduce additional reasoning errors and lack statistical guarantees for the performance loss, which are critical for high\-stakes applications\. In this work, we propose $\\textit\{Probably Approximately Correct\}$ \(PAC\) $\\textit\{Reasoning\}$ that controls the performance loss under the user\-specified tolerance\. Specifically, we construct an upper confidence bound on the performance loss and determine a threshold for switching to the non\-thinking model\. Theoretically, using the threshold to switch between the thinking and non\-thinking modes ensures bounded performance loss in a distribution\-free manner\. Our experiments on reasoning benchmarks show that the proposed method can save computational budgets and control the user\-specified performance loss\.

## Prediction\-Powered Active Testing

**Authors:** Kianoosh Ashouritaklimi; Valentin Kilian; Daolang Huang; Thomas Rainforth; Francois Caron

**ID:** 155200 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7YBe8ZysCG>) | [PDF](<https://openreview.net/pdf?id=7YBe8ZysCG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155200>)

Evaluating modern machine learning models often requires labels on large test pools, yet obtaining these labels can be expensive\. Active testing reduces this cost by adaptively selecting which test points to label, but existing unbiased estimators do not fully exploit cheap black\-\-box predictions that are often available for the entire pool\. We introduce \\textbf\{Prediction\-\-Powered Active Testing \(PPAT\)\}, a label\-\-efficient risk estimation framework that combines the unbiased LURE estimator with a prediction\-\-powered control variate\. Rather than using proxy predictions as biased pseudo\-\-labels, PPAT uses them to residualise the loss, preserving unbiasedness while reducing variance\. This control\-\-variate perspective also changes the optimal acquisition problem: we derive residualised oracle proposals and practical surrogate\-\-based acquisition rules tailored to the PPAT estimator\. We further establish asymptotic normality for LURE and PPAT, enabling asymptotically valid confidence intervals\. Across tabular regression and image classification tasks, PPAT consistently improves over existing active testing baselines, remains unbiased, and reaches the desired coverage level with substantially fewer labels\.

## Super\-Level\-Set Regression: Conditional Quantiles via Volume Minimization

**Authors:** Sacha Braun; Michael Jordan; Francis Bach

**ID:** 154847 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ASsB7ycA7e>) | [PDF](<https://openreview.net/pdf?id=ASsB7ycA7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154847>)

Constructing minimum\-volume prediction regions that satisfy conditional coverage is a fundamental challenge in multivariate regression\. Standard approaches rely on explicitly estimating the full conditional density and subsequently thresholding it\. This two\-step plug\-in process is notoriously difficult, sensitive to estimation errors, and computationally expensive\. One would like to instead optimize the region directly\. Formulating a direct solution is challenging, however, because it requires minimizing a volume objective that is coupled with the conditional quantiles of the model's own estimation error\. In this work, we address this challenge\. We introduce \\emph\{super\-level\-set regression\} \(SLS\), a novel mathematical framework that successfully resolves this implicit coupling, allowing us to directly parameterize and optimize the geometric boundaries of the target conditional level sets\. By bypassing full distribution estimation and leveraging flexible volume\-preserving frontier functions, our approach natively captures complex, multimodal, and disjoint conditional structures end\-to\-end\. Ultimately, SLS offers a new perspective on multivariate conditional quantile regression, replacing the restrictive assumptions of density\-first methods with a direct geometric optimization strategy\.

## Where to Approximate in Neurosymbolic Inference?

**Authors:** Samy Badreddine; Emile van Krieken; Luciano Serafini; Antonio Vergari

**ID:** 153022 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZpQpBHvJk>) | [PDF](<https://openreview.net/pdf?id=OZpQpBHvJk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153022>)

Probabilistic neurosymbolic methods rely on weighted model counting \(WMC\) to combine neural predictors with symbolic constraints\. Exact computation of the WMC, a \\\#P\-hard problem, typically scales poorly, so many methods resort to approximations\. By unifying existing approaches under a three\-step bottom\-up \*approximate compilation\* pipeline, we study \*where\* approximation budget is best allocated\. Inspired by tensor networks, we instantiate two steps with tensor train decompositions: we derive new pipelines that exactly multiply approximated factors and recompress their products via SVD\- or interpolation\-based schemes\. On Sudokus of increasing size, these pipelines produce WMC estimates that are many orders\-of\-magnitude more accurate than prior methods\. Yet, when it comes to neurosymbolic learning, even crude approximations reach competitive accuracy, suggesting that approximation quality matters far more for inference fidelity than for downstream learning\. Our pipelines open significant design space for effective approximate compilation of challenging probabilistic reasoning tasks\.

## Adaptive Inference for Functionals of M\-Estimands

**Authors:** James Leiner; Aurelien Bibaut; Nathan Kallus; Aaditya Ramdas; Koulik Khamaru

**ID:** 151811 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xpq9yAhis0>) | [PDF](<https://openreview.net/pdf?id=Xpq9yAhis0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151811>)

Reinforcement learning and contextual bandit algorithms have become increasingly common in sequential decision\-making applications\. When these methods are deployed in high\-stakes domains, there is growing interest not only in learning effective policies, but also in conducting statistical inference for quantities learned under adaptive data collection\. However, classical procedures applied naively in these settings can fail: even when estimators are unbiased, their variance becomes path\-dependent and as a result may not be asymptotically normal\. A growing literature has emerged to ameliorate this problem, but solutions tend to be problem specific and often rely on correct specification of a working model\. In this work, we develop a unified framework for constructing asymptotically valid confidence intervals to cover smooth functionals of nonparametric M\-estimands under adaptive sampling\. Under Neyman orthogonality, we provide two novel methods for performing inference: \(1\) a self\-normalized statistic based on the realized quadratic variation of the influence function and \(2\) a statistic using a plug\-in estimate of the conditional variance based on reweighted influence function increments\. Our results allow for flexible nonparametric estimation of nuisance parameters and remain valid under model misspecification\. Our theory is  supported by a simulation study for a dynamic pricing application which demonstrates that this method can produce asymptotically valid confidence intervals where standard methods fail\.

## Sliced Inner Product Gromov–Wasserstein Distances

**Authors:** Xiaoyun Gong; Gabriel Rioux; Ziv Goldfeld

**ID:** 150301 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j9kxvPRZEw>) | [PDF](<https://openreview.net/pdf?id=j9kxvPRZEw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150301>)

The Gromov\-\-Wasserstein \(GW\) problem provides a framework for aligning heterogeneous datasets by matching their intrinsic geometry, but its statistical and computational scaling remains an issue for  high\-dimensional problems\. Slicing techniques offer an appealing route to scalability, but, unlike  Wasserstein distances, GW problems do not generally admit closed\-form solutions in one\-dimension\. We resolve this problem for the GW problem with inner product cost \(IGW\), propose a sliced IGW distance that enjoys a natural rotational invariance property, and comprehensively study its structural and computational properties\.  Numerical experiments validating our theory are presented, followed by  applications to heterogeneous clustering of text data and language model representation comparison\.

