# Probabilistic Methods / Probabilistic Methods

概率方法 / 综合概率方法

42 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Scalable Variational Bayesian Fine\-Tuning of LLMs via Orthogonalized Low\-Rank Adapters

**Authors:** Haotian Xiang; Bingcong Li; Qin Lu

**ID:** 149427 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=q8fHjSdu4t>) | [PDF](<https://openreview.net/pdf?id=q8fHjSdu4t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149427>)

_Abstract unavailable from the accessible public sources._

## Test\-Time Personalization: A Diagnostic Framework and Probabilistic Fix for Scaling Failures

**Authors:** Linhai Zhang; Yulan He

**ID:** 153672 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=JdKKdb98Rv>) | [PDF](<https://openreview.net/pdf?id=JdKKdb98Rv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153672>)

_Abstract unavailable from the accessible public sources._

## Measuring Coherence in Predictive Models

**Authors:** Jamie Reason; Vik Shirvaikar; Mark van der Wilk; Chris C Holmes

**ID:** 150718 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fwwccado3G>) | [PDF](<https://openreview.net/pdf?id=fwwccado3G>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150718>)

Many decision making procedures that make use of probabilistic predictors assume that training on new data acts as Bayesian conditioning\. When this assumption breaks, the downstream procedure can perform poorly\. E\.g\. we show that in active learning, incoherent updates cause the procedure to prefer to acquire suboptimal points\. To quantify how far a model's predictive updates depart from conditioning, we introduce the \_incoherence ratio\_\. We empirically find that amortised predictors such as TabPFN can be more coherent than standard parametric approximations to Bayesian inference\. In synthetic active learning experiments, more coherent models acquire better data, an effect not attributable to better predictive performance\. In many tasks, decisions depend on a predictor only through its induced action\. We therefore introduce action coherence, a decision\-theoretic relaxation that measures only the incoherence affecting that action\. These diagnostics make coherence testable and quantifiable, enabling incoherence to be diagnosed and addressed\.

## A Faster Algorithm for the Half\-Trek Criterion in Structural Causal Models

**Authors:** Yasmine Briefs; Markus Bläser

**ID:** 152110 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=VSTKL0A1Fz>) | [PDF](<https://openreview.net/pdf?id=VSTKL0A1Fz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152110>)

Linear structural causal models \(SCMs\) are used to analyze relationships among random variables\. In these models, directed edges encode direct causal effects, while bidirected edges capture latent confounding\. The problem of generically identifying the hidden parameters from observed correlations remains open in causal inference\. The half\-trek criterion by Foygel, Draisma, and Drton \[2012\] and its generalization to the edge\-wise criterion are important criteria for generic identification in linear SCMs, since the half\-trek criterion can be efficiently decided by an algorithm with running time $\\mathcal\{O\}\(n^5\)$\. We here develop a new criterion that is equivalent to the edgewise criterion\. Utilizing this criterion, we design a faster randomized algorithm for deciding the half\-trek criterion with running time $\\mathcal\{O\}\(n^4\)$\. For sparse graphs, our algorithm even works in $\\mathcal\{O\}\(n^3\)$\. We show that the algorithm is useful in practice by providing an implementation that outperforms the implementation of HTC in the state\-of\-the art R package SEMID\.

## Auditing Conformal Prediction for Language Models Under Inference\-Time Model Shift

**Authors:** Achref Doula; Max Mühlhäuser

**ID:** 138875 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zYzgw5b6rP>) | [PDF](<https://openreview.net/pdf?id=zYzgw5b6rP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138875>)

Conformal prediction \(CP\) for language models is typically evaluated under a \\emph\{matched\} protocol, in which calibration and deployment use the same post\-training inference configuration, such as quantization mode and inference temperature\. In deployment, these choices often differ from those used at calibration to meet memory or throughput constraints or serving policies\. We argue that this exposes a limitation in current CP evaluation protocols for language models\. We formalize the underlying phenomenon as \\emph\{inference\-time model shift\}: a change in the conformal score distribution induced by inference configuration rather than by the input\-\-label distribution, and theoretically characterize how it breaks split\-conformal exchangeability even when the task distribution and trained model are unchanged\. We then evaluate its consequences across $8$ language models, $4$ finite\-label benchmarks, and $12$ inference configurations\. We find that matched evaluation can substantially overstate deployment\-time coverage, and that the effect is heterogeneous across models and datasets\. We argue that inference configuration should be reported as a first\-class experimental axis in CP evaluations for language\-model systems\.

## A Spectral Framework for Closed\-Form Relative Density Estimation

**Authors:** Francis Bach

**ID:** 152831 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Q5UGhwLahz>) | [PDF](<https://openreview.net/pdf?id=Q5UGhwLahz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152831>)

We propose a closed\-form spectral framework for relative log\-density estimation in linearly parameterized probabilistic models, including unnormalized and conditional models\. This is achieved by representing the Kullback\-Leibler \(KL\) divergence as an integral of weighted chi\-squared divergences, converting KL estimation into a family of least\-squares problems\. We derive an explicit spectral formula based only on first\- and second\-order feature moments, yielding closed\-form estimators of both divergences and log\-density potentials for fixed features\. The framework extends to a broad class of $f$\-divergences and can be combined with kernelization or feature learning with neural networks\. We prove convergence guarantees for the resulting estimators and empirically compare them on synthetic data with optimization\-based variational formulations, including logistic and softmax regression for normalized conditional models\.

## A Spectral Framework for Closed\-Form Relative Density Estimation

**Authors:** Francis Bach

**ID:** 152831\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152831

[Paper](<https://openreview.net/forum?id=Q5UGhwLahz>) | [PDF](<https://openreview.net/pdf?id=Q5UGhwLahz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152831>)

We propose a closed\-form spectral framework for relative log\-density estimation in linearly parameterized probabilistic models, including unnormalized and conditional models\. This is achieved by representing the Kullback\-Leibler \(KL\) divergence as an integral of weighted chi\-squared divergences, converting KL estimation into a family of least\-squares problems\. We derive an explicit spectral formula based only on first\- and second\-order feature moments, yielding closed\-form estimators of both divergences and log\-density potentials for fixed features\. The framework extends to a broad class of $f$\-divergences and can be combined with kernelization or feature learning with neural networks\. We prove convergence guarantees for the resulting estimators and empirically compare them on synthetic data with optimization\-based variational formulations, including logistic and softmax regression for normalized conditional models\.

## PULSE: Probabilistic Uncertainty\-Aware Longitudinal Simulation for EHR Trajectories

**Authors:** Robert L Manschke; Angus Roberts; Julia Ive

**ID:** 149130 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=seIHyi0c7e>) | [PDF](<https://openreview.net/pdf?id=seIHyi0c7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149130>)

_Abstract unavailable from the accessible public sources._

## Perturb and Correct: Post\-Hoc Ensembles using Affine Redundancy

**Authors:** Eleanor Quint

**ID:** 148703 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vfloLQFqoN>) | [PDF](<https://openreview.net/pdf?id=vfloLQFqoN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148703>)

Models that are indistinguishable on in\-distribution data can behave very differently under distribution shift\. We introduce Perturb\-and\-Correct \(P&amp;C\), a post\-hoc method for constructing epistemically diverse predictors from a single pretrained network\. P&amp;C applies random hidden layer perturbations with a least\-squares correction in the subsequent affine layer, producing predictors that agree on calibration data while remaining free to disagree away from it\. We analyze this mechanism through the post\-correction residual and its first\-order sensitivity: the residual is controlled near the calibration distribution by a leverage term, while corrected sensitivity grows as inputs deviate from the calibration geometry\. Empirically, P&amp;C achieves a strong ID/OOD tradeoff across MuJoCo dynamics prediction and CIFAR\-10 OOD detection, matching or outperforming standard post\-hoc baselines while requiring only a single pretrained model\. Our findings highlight the potential in further exploiting overparameterization as a strength of deep learning models\.

## Inference and estimation with unidentifiable latent treatment effects

**Authors:** Christopher Tosh; Boyuan Zhang; Wesley Tansey

**ID:** 154647 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C3vudFgQi2>) | [PDF](<https://openreview.net/pdf?id=C3vudFgQi2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154647>)

_Abstract unavailable from the accessible public sources._

## Model\-Free Assessment of Simulator Fidelity via Quantile Curves

**Authors:** Yu\-Shiou Lin; Kaizheng Wang; Garud Iyengar

**ID:** 154001 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GwnlXWrqUF>) | [PDF](<https://openreview.net/pdf?id=GwnlXWrqUF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154001>)

As generative AI models are increasingly used to simulate real\-world systems, quantifying their “sim\-to\-real” gap is critical\. We study this gap across a population of input settings, called scenarios, e\.g\. survey questions or operating conditions\. The population\-level quantities defining the real\-world and simulated system are only observed through finite, often heterogeneous, samples\. Consequently, the population\-level discrepancy cannot be directly computed, and standard predictive inference methods that target observable outputs are ill\-suited\. We propose a model\-agnostic framework that constructs confidence sets for the latent parameters, forms a conservative proxy for the sim\-to\-real discrepancy, and estimates its quantile function across scenarios\. The resulting calibrated risk profile allows for inference on a new scenario, tail\-risk summaries such as Conditional Value\-at\-Risk \(CVaR\), and principled comparisons across simulators\. Our method applies to a range of output spaces, including categorical survey responses and continuous outcomes\. We demonstrate its utility by evaluating the alignment of four major LLMs with human populations on the WorldValueBench dataset\.

## Heterogeneous Judge\-Aware Ranking with Sensitivity, Disagreement, and Confidence

**Authors:** Shibo Yu; Yingzhou Wang; Yan Chen; Guodong Li; Jin\-Hong Du

**ID:** 152031 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W3mkBXvDwV>) | [PDF](<https://openreview.net/pdf?id=W3mkBXvDwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152031>)

Pairwise comparisons from multiple judges are central to large language model evaluation and preference modeling, yet standard ranking pipelines often pool judgments into a single score vector, treating systematic judge disagreement as noise\. We propose Heterogeneous Judge\-Aware \(HJA\) ranking, a structured multi\-judge ranking framework that separates consensus ranking, judge\-specific sensitivity to consensus, and residual preference disagreement\. HJA thereby treats ranking, judge sensitivity, and structured disagreement as separate inferential targets\. We establish conditions under which this decomposition is identifiable and develop an anchored alternating algorithm that preserves the identifying geometry\. For confidence quantification, we study a fixed\-panel repeated\-comparison regime in which the judge panel may remain fixed or modest while information grows through repeated judgments\. This yields uncertainty statements for consensus and judge\-specific ranking contrasts, sensitivity parameters, pairwise probabilities, and summaries of residual disagreement\.Experiments on synthetic and real multi\-judge comparison data show that HJA improves recovery, robustness, uncertainty calibration, and near\-tie performance relative to pooled and sensitivity\-only baselines\. The fitted model also provides diagnostics for judge disagreement and model\-affinity patterns, giving a statistically grounded framework for ranking under heterogeneous comparative judgments\.

## WebNavigator: Global Web Navigation via Interaction Graph Retrieval

**Authors:** Xuanwang Zhang; Yuteng Han; Jinnan Qi; Xinyu Liu; Mulong Xie; Zhen Wu; Xinyu Dai

**ID:** 154891 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A958ZPHMku>) | [PDF](<https://openreview.net/pdf?id=A958ZPHMku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154891>)

Despite significant advances in autonomous web navigation, current methods remain far from human\-level performance in complex web environments\. We argue that this limitation stems from Topological Blindness, where agents are forced to explore via trial\-and\-error without access to the global topological structure of the environment\. To overcome this limitation, we introduce WebNavigator, which reframes web navigation from probabilistic exploration into deterministic retrieval and pathfinding\. WebNavigator constructs Interaction Graphs via zero\-token cost heuristic exploration offline and implements a Retrieve\-Reason\-Teleport workflow for global navigation online\. WebNavigator achieves state\-of\-the\-art performance on WebArena and Online\-Mind2Web\. On WebArena multi\-site tasks, WebNavigator achieves a 72\.9% success rate, more than doubling the performance of enterprise\-level agents\. This work reveals that Topological Blindness, rather than model reasoning capabilities alone, is an underestimated bottleneck in autonomous web navigation\.

## From Collapse to Improvement:  Statistical Perspectives on the Evolutionary Dynamics of Iterative Training on Contaminated Sources

**Authors:** Soham Bakshi; Sunrit Chakraborty

**ID:** 148326 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yfGxUZj1zT>) | [PDF](<https://openreview.net/pdf?id=yfGxUZj1zT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148326>)

The problem of model collapse has presented new challenges in iterative training of generative models, where such training with synthetic data leads to an overall degradation of performance\. This paper looks at the problem from a statistical viewpoint, illustrating that one can actually hope for improvement when models are trained on data contaminated with synthetic samples, as long as there is some amount of fresh information from the true target distribution\. In particular, we consider iterative training on samples sourced from a mixture of the true target and synthetic distributions\. We analyze the entire iterative evolution in a next\-token prediction language model, capturing how the interplay between the mixture weights and the sample size controls the overall long\-term performance\. With non\-trivial mixture weight of the true distribution, even if it decays over time, simply training the model in a contamination\-agnostic manner with appropriate sample sizes can avoid collapse and even recover the true target distribution under certain conditions\. Simulation studies support our findings and also show that such behavior is more general for other classes of models\.

## The Limits of AI\-Driven Allocation: Optimal Screening under Aleatoric Uncertainty

**Authors:** Santiago Cortes\-Gomez; Mateo Dulce Rubio; Carlos M Patiño; Bryan Wilder

**ID:** 153541 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KanvRVjn7U>) | [PDF](<https://openreview.net/pdf?id=KanvRVjn7U>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153541>)

The rise of machine learning has shifted targeted resource allocation in policy and humanitarian settings toward algorithmic targeting based on predicted risk scores\. This approach is typically cheaper and faster than traditional screening procedures that directly observe the latent vulnerability status through physical verification\. Yet, even access to the true conditional vulnerability probability cannot eliminate misallocation: aleatoric uncertainty over individual vulnerability status is irreducible, and probabilistic targeting inevitably misallocates some resources\. In this work we study how screening and algorithmic targeting should be optimally combined in a two\-stage allocation framework where a screening stage observes true outcomes for a subset of units before a final allocation stage assigns the resource under a fixed coverage budget\. We show that the optimal strategy screens units at the margin of algorithmic allocation, while directly targeting the highest\-risk units\. Furthermore, we empirically characterize when screening and algorithmic targeting act as complements or substitutes: efficiency gains from screening grow as the aleatoric uncertainty in the population increases\. We illustrate our framework with applications in income\-based social protection programs and humanitarian demining in Colombia, where the tension between screening costs and allocation efficiency is operationally consequential\.

## Scalable Variational Bayesian Fine\-Tuning of LLMs via Orthogonalized Low\-Rank Adapters

**Authors:** Haotian Xiang; Bingcong Li; Qin Lu

**ID:** 149427\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149427

[Paper](<https://openreview.net/forum?id=q8fHjSdu4t>) | [PDF](<https://openreview.net/pdf?id=q8fHjSdu4t>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149427>)

_Abstract unavailable from the accessible public sources._

## Test\-Time Personalization: A Diagnostic Framework and Probabilistic Fix for Scaling Failures

**Authors:** Linhai Zhang; Yulan He

**ID:** 153672\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153672

[Paper](<https://openreview.net/forum?id=JdKKdb98Rv>) | [PDF](<https://openreview.net/pdf?id=JdKKdb98Rv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153672>)

_Abstract unavailable from the accessible public sources._

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

## Active Probabilistic Reasoning in Humans and LLMs

**Authors:** Gonçalo Guiomar; Elia Torre; Pehuen Moure; Victoria Shavina; Mario Giulianelli; Shih\-Chii Liu; Valerio Mante

**ID:** 149573 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=p8XR2JNWfi>) | [PDF](<https://openreview.net/pdf?id=p8XR2JNWfi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149573>)

_Abstract unavailable from the accessible public sources._

## Hybrid Probabilistic Zonotopes for Identifiable and Refinable Predictive Uncertainty

**Authors:** Zhen Zhang; Amr Alanwar

**ID:** 154293 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Eof9Xx15Ry>) | [PDF](<https://openreview.net/pdf?id=Eof9Xx15Ry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154293>)

Probabilistic prediction heads in neural networks typically output either a Gaussian mixture or a single conformal region\. Neither separates the distinct sources of uncertainty often present in real prediction tasks: a discrete choice among modes, bounded systematic drift within the chosen mode, and irreducible stochastic noise\. We introduce the Hybrid Probabilistic Zonotope \(HProbZ\), an output head that represents these three sources as binary, bounded, and stochastic generators of a zonotope, and admits a closed\-form likelihood by convolution\. Sharing the bounded generator across prediction steps couples future predictions algebraically, so observing one step refines the predictive distribution at every remaining step in a single forward pass\. We establish that the three generators are identifiable from the likelihood up to permutation, and that an HProbZ density is representationally distinct from any finite Gaussian mixture\. The same shared structure provides analytic per\-mode risk and distribution\-free multi\-modal conformal sets at inference time\. Empirical analysis on representative prediction benchmarks supports the effectiveness of the design relative to same\-encoder mixture baselines, while offering structural properties that mixture or convex\-conformal predictors do not jointly provide\.

## Partition Tree: Conditional Density Estimation over General Outcome Spaces

**Authors:** Felipe Angelim; Alessandro Leite

**ID:** 153278 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=MRmk6eSAqk>) | [PDF](<https://openreview.net/pdf?id=MRmk6eSAqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153278>)

We propose Partition Tree, a tree\-based framework for conditional density estimation over general outcome spaces that supports both continuous and categorical variables within a unified formulation\. Our approach models conditional distributions as piecewise\-constant densities on data\-adaptive partitions and learns trees by directly minimizing conditional negative log\-likelihood\. This yields a scalable, nonparametric alternative to existing probabilistic trees that does not make parametric assumptions about the target distribution\. We further introduce Partition Forest, an ensemble extension obtained by averaging conditional densities\. Empirically, we demonstrate improved probabilistic prediction over CART\-style trees and competitive performance compared to state\-of\-the\-art probabilistic tree methods and Random Forests\.

## Heterogeneous Judge\-Aware Ranking with Sensitivity, Disagreement, and Confidence

**Authors:** Shibo Yu; Yingzhou Wang; Yan Chen; Guodong Li; Jin\-Hong Du

**ID:** 152031\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152031

[Paper](<https://openreview.net/forum?id=W3mkBXvDwV>) | [PDF](<https://openreview.net/pdf?id=W3mkBXvDwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152031>)

Pairwise comparisons from multiple judges are central to large language model evaluation and preference modeling, yet standard ranking pipelines often pool judgments into a single score vector, treating systematic judge disagreement as noise\. We propose Heterogeneous Judge\-Aware \(HJA\) ranking, a structured multi\-judge ranking framework that separates consensus ranking, judge\-specific sensitivity to consensus, and residual preference disagreement\. HJA thereby treats ranking, judge sensitivity, and structured disagreement as separate inferential targets\. We establish conditions under which this decomposition is identifiable and develop an anchored alternating algorithm that preserves the identifying geometry\. For confidence quantification, we study a fixed\-panel repeated\-comparison regime in which the judge panel may remain fixed or modest while information grows through repeated judgments\. This yields uncertainty statements for consensus and judge\-specific ranking contrasts, sensitivity parameters, pairwise probabilities, and summaries of residual disagreement\.Experiments on synthetic and real multi\-judge comparison data show that HJA improves recovery, robustness, uncertainty calibration, and near\-tie performance relative to pooled and sensitivity\-only baselines\. The fitted model also provides diagnostics for judge disagreement and model\-affinity patterns, giving a statistically grounded framework for ranking under heterogeneous comparative judgments\.

## WebNavigator: Global Web Navigation via Interaction Graph Retrieval

**Authors:** Xuanwang Zhang; Yuteng Han; Jinnan Qi; Xinyu Liu; Mulong Xie; Zhen Wu; Xinyu Dai

**ID:** 154891\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154891

[Paper](<https://openreview.net/forum?id=A958ZPHMku>) | [PDF](<https://openreview.net/pdf?id=A958ZPHMku>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154891>)

Despite significant advances in autonomous web navigation, current methods remain far from human\-level performance in complex web environments\. We argue that this limitation stems from Topological Blindness, where agents are forced to explore via trial\-and\-error without access to the global topological structure of the environment\. To overcome this limitation, we introduce WebNavigator, which reframes web navigation from probabilistic exploration into deterministic retrieval and pathfinding\. WebNavigator constructs Interaction Graphs via zero\-token cost heuristic exploration offline and implements a Retrieve\-Reason\-Teleport workflow for global navigation online\. WebNavigator achieves state\-of\-the\-art performance on WebArena and Online\-Mind2Web\. On WebArena multi\-site tasks, WebNavigator achieves a 72\.9% success rate, more than doubling the performance of enterprise\-level agents\. This work reveals that Topological Blindness, rather than model reasoning capabilities alone, is an underestimated bottleneck in autonomous web navigation\.

## Exact Gaussian Moment Matching for Residual Networks: a Second\-Order Method

**Authors:** Simon Kuang; Xinfan Lin

**ID:** 155943 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1dsxDeHdpR>) | [PDF](<https://openreview.net/pdf?id=1dsxDeHdpR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155943>)

We study the problem of propagating the mean and covariance of a general multivariate Gaussian distribution through a deep \(residual\) neural network using layer\-by\-layer moment matching\.     We close a longstanding gap      by deriving exact moment matching for the probit, GeLU, ReLU \(as a limit of GeLU\), Heaviside \(as a limit of probit\), and sine activation functions;     for both feedforward and generalized residual layers\.     On random networks, we find orders\-of\-magnitude improvements in the KL divergence error metric, up to a millionfold, over popular alternatives\.     On a variational Bayesian neural network, we show that our method attains hundredfold improvements in KL divergence from Monte Carlo ground truth over a state\-of\-the\-art deterministic inference method\.     We also give an smooth\-distance error bound showing that, under regularity assumptions, moment matching removes the leading low\-variance errors and propagates higher\-order local accuracy through the layers of a network\.

## Mechanism\-Aware Ensemble Conditioning for Data\-Limited Emulation of Extreme Events

**Authors:** Isabella Thiel; Juan M\. Bello\-Rivas; Yannis Kevrekidis; Themis Sapsis

**ID:** 151389\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151389

[Paper](<https://openreview.net/forum?id=b0AOZbejEk>) | [PDF](<https://openreview.net/pdf?id=b0AOZbejEk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151389>)

Extreme events in chaotic systems are difficult to learn from short trajectories because they are controlled by transient finite\-time instability rather than by frequently observed bulk dynamics\.  We propose a mechanism\-aware conditioning plug\-in framework that turns a nudged coarse ensemble into a non\-intrusive sensor of local instability geometry\.  In the small\-noise regime, the ensemble covariance aggregates the same finite\-time deformation kernels that govern local instability, providing a Jacobian\-free proxy for the local amplification structure around a synchronized coarse trajectory\.  A small FiLM module injects statistics of this ensemble geometry into an otherwise unchanged backbone while leaving the coarse simulator unchanged\.  We demonstrate this interface in two distinct pipelines: a Transformer\-style residual\-attention corrector for a controlled low\-dimensional chaotic system and a probabilistic recurrent STORN corrector for topographic two\-layer quasi\-geostrophic \(QG\) flow\. In the low\-dimensional benchmark, ensemble covariance directions co\-activate with OTD modes and FiLM conditioning improves 99th\-percentile exceedance\-frequency errors over an identical no\-context Transformer baseline\.  In QG, a fixed ensemble\-conditioned FiLM\-STORN model trained on only 50 time units substantially improves long\-horizon rare\-event statistics in the data\-limited regime, including density\-tail errors, exceedance frequencies, and spatial exceedance\-area distributions relative to an unconditioned STORN trained on the same data; on averaged high\-threshold exceedance diagnostics, it also outperforms the baseline STORN trained with 20 times more high\-resolution data\. These results show that local instability geometry is not merely interpretable post hoc, but an actionable conditioning signal for data\-efficient rare\-event emulation\.

## Co\-optimization for Adaptive Conformal Prediction

**Authors:** Xiaoyi Su; Zhixin Zhou; Rui Luo

**ID:** 150402\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150402

[Paper](<https://openreview.net/forum?id=iIkqszzLay>) | [PDF](<https://openreview.net/pdf?id=iIkqszzLay>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150402>)

In regression, conformal prediction often suffers from inefficiency under heteroscedasticity and skewness due to fixed, non\-adaptive interval centering\. We propose CoCP, a new method that parameterizes prediction intervals by a center $m\(x\)$ and a radius $h\(x\)$, and alternates between learning $h\(x\)$ via smooth quantile regression on folded residuals and refining $m\(x\)$ using a smooth interval loss\. This corrects mis\-centering and drives the interval toward high\-density regions\. Beyond finite\-sample marginal validity via split\-conformal calibration, we prove that CoCP asymptotically achieves conditional coverage and optimal interval length if the base estimators are consistent\. Experiments demonstrate that CoCP yields tighter intervals and achieves state\-of\-the\-art conditional coverage reliability\.

## Affine Tracing: A New Paradigm for Probabilistic Linear Solvers

**Authors:** Disha Hegde; Marvin Pförtner; Jon Cockayne

**ID:** 150970 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=duOAO1yJKQ>) | [PDF](<https://openreview.net/pdf?id=duOAO1yJKQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150970>)

_Abstract unavailable from the accessible public sources._

## Partition Tree: Conditional Density Estimation over General Outcome Spaces

**Authors:** Felipe Angelim; Alessandro Leite

**ID:** 153278\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153278

[Paper](<https://openreview.net/forum?id=MRmk6eSAqk>) | [PDF](<https://openreview.net/pdf?id=MRmk6eSAqk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153278>)

We propose Partition Tree, a tree\-based framework for conditional density estimation over general outcome spaces that supports both continuous and categorical variables within a unified formulation\. Our approach models conditional distributions as piecewise\-constant densities on data\-adaptive partitions and learns trees by directly minimizing conditional negative log\-likelihood\. This yields a scalable, nonparametric alternative to existing probabilistic trees that does not make parametric assumptions about the target distribution\. We further introduce Partition Forest, an ensemble extension obtained by averaging conditional densities\. Empirically, we demonstrate improved probabilistic prediction over CART\-style trees and competitive performance compared to state\-of\-the\-art probabilistic tree methods and Random Forests\.

## Exact Gaussian Moment Matching for Residual Networks: a Second\-Order Method

**Authors:** Simon Kuang; Xinfan Lin

**ID:** 155943\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155943

[Paper](<https://openreview.net/forum?id=1dsxDeHdpR>) | [PDF](<https://openreview.net/pdf?id=1dsxDeHdpR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155943>)

We study the problem of propagating the mean and covariance of a general multivariate Gaussian distribution through a deep \(residual\) neural network using layer\-by\-layer moment matching\.     We close a longstanding gap      by deriving exact moment matching for the probit, GeLU, ReLU \(as a limit of GeLU\), Heaviside \(as a limit of probit\), and sine activation functions;     for both feedforward and generalized residual layers\.     On random networks, we find orders\-of\-magnitude improvements in the KL divergence error metric, up to a millionfold, over popular alternatives\.     On a variational Bayesian neural network, we show that our method attains hundredfold improvements in KL divergence from Monte Carlo ground truth over a state\-of\-the\-art deterministic inference method\.     We also give an smooth\-distance error bound showing that, under regularity assumptions, moment matching removes the leading low\-variance errors and propagates higher\-order local accuracy through the layers of a network\.

## Heterogeneous Judge\-Aware Ranking with Sensitivity, Disagreement, and Confidence

**Authors:** Shibo Yu; Yingzhou Wang; Yan Chen; Guodong Li; Jin\-Hong Du

**ID:** 152031\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152031

[Paper](<https://openreview.net/forum?id=W3mkBXvDwV>) | [PDF](<https://openreview.net/pdf?id=W3mkBXvDwV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152031>)

Pairwise comparisons from multiple judges are central to large language model evaluation and preference modeling, yet standard ranking pipelines often pool judgments into a single score vector, treating systematic judge disagreement as noise\. We propose Heterogeneous Judge\-Aware \(HJA\) ranking, a structured multi\-judge ranking framework that separates consensus ranking, judge\-specific sensitivity to consensus, and residual preference disagreement\. HJA thereby treats ranking, judge sensitivity, and structured disagreement as separate inferential targets\. We establish conditions under which this decomposition is identifiable and develop an anchored alternating algorithm that preserves the identifying geometry\. For confidence quantification, we study a fixed\-panel repeated\-comparison regime in which the judge panel may remain fixed or modest while information grows through repeated judgments\. This yields uncertainty statements for consensus and judge\-specific ranking contrasts, sensitivity parameters, pairwise probabilities, and summaries of residual disagreement\.Experiments on synthetic and real multi\-judge comparison data show that HJA improves recovery, robustness, uncertainty calibration, and near\-tie performance relative to pooled and sensitivity\-only baselines\. The fitted model also provides diagnostics for judge disagreement and model\-affinity patterns, giving a statistically grounded framework for ranking under heterogeneous comparative judgments\.

## Affine Tracing: A New Paradigm for Probabilistic Linear Solvers

**Authors:** Disha Hegde; Marvin Pförtner; Jon Cockayne

**ID:** 150970\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150970

[Paper](<https://openreview.net/forum?id=duOAO1yJKQ>) | [PDF](<https://openreview.net/pdf?id=duOAO1yJKQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150970>)

_Abstract unavailable from the accessible public sources._

## From Collapse to Improvement:  Statistical Perspectives on the Evolutionary Dynamics of Iterative Training on Contaminated Sources

**Authors:** Soham Bakshi; Sunrit Chakraborty

**ID:** 148326\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148326

[Paper](<https://openreview.net/forum?id=yfGxUZj1zT>) | [PDF](<https://openreview.net/pdf?id=yfGxUZj1zT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148326>)

The problem of model collapse has presented new challenges in iterative training of generative models, where such training with synthetic data leads to an overall degradation of performance\. This paper looks at the problem from a statistical viewpoint, illustrating that one can actually hope for improvement when models are trained on data contaminated with synthetic samples, as long as there is some amount of fresh information from the true target distribution\. In particular, we consider iterative training on samples sourced from a mixture of the true target and synthetic distributions\. We analyze the entire iterative evolution in a next\-token prediction language model, capturing how the interplay between the mixture weights and the sample size controls the overall long\-term performance\. With non\-trivial mixture weight of the true distribution, even if it decays over time, simply training the model in a contamination\-agnostic manner with appropriate sample sizes can avoid collapse and even recover the true target distribution under certain conditions\. Simulation studies support our findings and also show that such behavior is more general for other classes of models\.

## Efficient Adaptive Data Acquisition via Pretrained Belief Representations

**Authors:** Daolang Huang; Zhuoyue Huang; Conor Hassan; Luigi Acerbi; Samuel Kaski; Thomas Rainforth

**ID:** 156141 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=04exJhvdI5>) | [PDF](<https://openreview.net/pdf?id=04exJhvdI5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156141>)

Learning effective policies for adaptive data acquisition remains challenging: posterior\-based methods rely on surrogate models and posterior approximations that can be misspecified or biased, while direct policy\-learning methods map from historical observations and fail to exploit available model representations, making learning harder\. We introduce policy learning with belief representations \(POLAR\), based on the insight that optimal data acquisition depends on the observation history only through a sufficient belief state\. Specifically, POLAR decouples representation learning from policy learning by leveraging pretrained predictive foundation models as belief\-state encoders, training a policy head on top of their representations\. This yields a simple, unified amortised policy learning framework for Bayesian experimental design, Bayesian optimisation, and active learning, differing only in the task\-specific utility used to train the policy\. Empirically, we find that POLAR outperforms state\-of\-the\-art amortised methods across diverse tasks while requiring far fewer training samples, demonstrating a significant step in the scalability and efficiency of amortised data acquisition\.

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

## PULSE: Probabilistic Uncertainty\-Aware Longitudinal Simulation for EHR Trajectories

**Authors:** Robert L Manschke; Angus Roberts; Julia Ive

**ID:** 149130\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149130

[Paper](<https://openreview.net/forum?id=seIHyi0c7e>) | [PDF](<https://openreview.net/pdf?id=seIHyi0c7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149130>)

_Abstract unavailable from the accessible public sources._

## Inference and estimation with unidentifiable latent treatment effects

**Authors:** Christopher Tosh; Boyuan Zhang; Wesley Tansey

**ID:** 154647\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154647

[Paper](<https://openreview.net/forum?id=C3vudFgQi2>) | [PDF](<https://openreview.net/pdf?id=C3vudFgQi2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154647>)

_Abstract unavailable from the accessible public sources._

## A Spectral Framework for Closed\-Form Relative Density Estimation

**Authors:** Francis Bach

**ID:** 152831\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152831

[Paper](<https://openreview.net/forum?id=Q5UGhwLahz>) | [PDF](<https://openreview.net/pdf?id=Q5UGhwLahz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152831>)

We propose a closed\-form spectral framework for relative log\-density estimation in linearly parameterized probabilistic models, including unnormalized and conditional models\. This is achieved by representing the Kullback\-Leibler \(KL\) divergence as an integral of weighted chi\-squared divergences, converting KL estimation into a family of least\-squares problems\. We derive an explicit spectral formula based only on first\- and second\-order feature moments, yielding closed\-form estimators of both divergences and log\-density potentials for fixed features\. The framework extends to a broad class of $f$\-divergences and can be combined with kernelization or feature learning with neural networks\. We prove convergence guarantees for the resulting estimators and empirically compare them on synthetic data with optimization\-based variational formulations, including logistic and softmax regression for normalized conditional models\.

## PULSE: Probabilistic Uncertainty\-Aware Longitudinal Simulation for EHR Trajectories

**Authors:** Robert L Manschke; Angus Roberts; Julia Ive

**ID:** 149130\-\-3 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149130

[Paper](<https://openreview.net/forum?id=seIHyi0c7e>) | [PDF](<https://openreview.net/pdf?id=seIHyi0c7e>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149130>)

_Abstract unavailable from the accessible public sources._

## Fast and Stable Gradient Approximation for Bilinear Forms of Hermitian Matrix Functions

**Authors:** Navjot Singh; Kipton Barros; Sherry Li

**ID:** 156051 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0o7Q9IWQK0>) | [PDF](<https://openreview.net/pdf?id=0o7Q9IWQK0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156051>)

Objectives involving bilinear forms \\\(u^\\top f\(A\(\\theta\)\)v\\\) for Hermitian \\\(A\\\) arise widely in scientific computing and probabilistic machine learning\. For large matrices, Lanczos efficiently approximates these quantities, but differentiating them with respect to \\\(\\theta\\\) is challenging\. Existing approaches either backpropagate through the Lanczos recurrence, requiring reorthogonalization for stability, or apply Arnoldi to an augmented block matrix of twice the original size\. Both introduce extra computation and orthogonalization costs that can limit performance on modern hardware\. We propose a forward\-only gradient approximation that reuses the Lanczos pass and adds  very minimal overhead in most cases\. We prove that its error is proportional to the Lanczos residual norm, the same quantity controlling the forward approximation\.  Whereas a traditional adjoint\-based calculation would be unstable without reorthogonalization, the new method appears unconditionally stable in our tests\. It is also faster than existing state\-of\-the\-art approaches\.

