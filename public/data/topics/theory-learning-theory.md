# Theory / Learning Theory

理论 / 学习理论

187 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Mean Testing under Truncation beyond Gaussian

**Authors:** Yuhao Wang; Roberto I Oliveira; Themis Gouleakis

**ID:** 152034 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W2sWU2ZYWN>) | [PDF](<https://openreview.net/pdf?id=W2sWU2ZYWN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152034>)

We characterize the fundamental limits of high\-dimensional mean testing under arbitrary truncation, where samples are drawn from the conditional distribution $P\(\\cdot \\mid S\)$ for an unknown truncation set $S$ that may hide up to an $\\varepsilon$\-fraction of the probability mass\.  For distributions with $p$\-th directional moments of magnitude at most $\\nu\_\{P,p\}$, truncation induces a bias of order $\\mathcal\{O\}\(\\nu\_\{P,p\}\\varepsilon^\{1\-1/p\}\)$\. This bias creates a sharp information\-theoretic detectability floor: when the signal $\\alpha$ falls below this threshold, the null and alternative hypotheses are indistinguishable even with infinite data\. Above this floor, we prove that a simple second\-order test achieving near\-optimal sample complexity $$ n = \\mathcal\{O\}\\left\(\\frac\{\\\|\\Sigma\_P\\\|\}\{\(\\alpha\-4\\nu\_\{P,p\}\\varepsilon^\{1\-1/p\}\)^2\}\\sqrt\{d\}\\right\)\. $$ We further identify a structural escape from this finite\-moment bias barrier\. Under a \*directional median regularity\* assumption, truncation bias improves to linear order $\\mathcal\{O\}\(\\varepsilon\)$\. This reveals an intermediate regime in which estimation requires $\\Theta\(d\)$ samples for uniform recovery, while testing recovers the classical $\\Theta\(\\sqrt d\)$ rate once truncation bias is eliminated\. Together, our results provide a unified framework for mean testing under truncation, connecting finite\-moment, sub\-Gaussian, and median\-regular structural regimes\.

## Provably Reliable Classifier Guidance via Cross\-Entropy Control

**Authors:** Sharan Sahu; Arisina Banerjee; Yuchen Wu

**ID:** 155431 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5i317VTcld>) | [PDF](<https://openreview.net/pdf?id=5i317VTcld>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155431>)

_Abstract unavailable from the accessible public sources._

## Strategic PAC Learnability via Geometric Definability

**Authors:** Yuval Filmus; Shay Moran; Elizaveta Nesterova; Nir Rosenfeld; Alexander Shlimovich

**ID:** 155901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=20CDB8ujTA>) | [PDF](<https://openreview.net/pdf?id=20CDB8ujTA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155901>)

Strategic classification studies learning settings in which individuals can modify their features, at a cost, in order to influence the classifier’s decision\. A central question is how the sample complexity of the induced \(strategic\) hypothesis class depends on the complexities of the underlying hypothesis class and the cost structure governing feasible manipulations\.  Prior work has shown that in several natural settings, such as linear classifiers with norm costs, the induced complexity can be controlled\. We begin by showing that such guarantees fail in general \-\-\- even in simple cases: there exist hypothesis classes of VC dimension $1$ on the real line such that, even under the simplest interval neighborhoods, the induced class has infinite VC dimension\. Thus, strategic behavior can turn an easy learning problem into a non\-learnable one\.  To overcome this, we introduce structure via a geometric definability assumption: both the hypothesis class and the cost\-induced neighborhood relation can be defined by first\-order formulas over $\\mathbb R\_\{\\exp\}$\. Intuitively, this means that hypotheses and costs can be described using arithmetic operations, exponentiation, logarithms, and comparisons\. This captures a broad range of natural classes and cost functions, including $\\ell\_p$ distances, Wasserstein distance, and information\-theoretic divergences\. Under this assumption, we prove that learnability is preserved, with sample complexity controlled by the complexity of the defining formulas\.

## Does Compression Imply Generalization? A Minimum Description Length Perspective

**Authors:** Lincen Yang; Jiayang Shi; Nan Pu; Daniel M\. Pelt; Matthijs van Leeuwen; Zhong Li; Shujian Yu

**ID:** 151042 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQ36O5uJBs>) | [PDF](<https://openreview.net/pdf?id=dQ36O5uJBs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151042>)

A central question in modern learning theory is what notion of compression, if any, explains why over\-parameterized neural networks generalize\. Existing answers measure complexity at different levels, ranging from weights to representations, and estimating the associated quantities either requires held\-out data in principle or relies on mutual\-information estimation in ultra\-high dimensions\. We approach the question through the minimum description length \(MDL\) principle and propose the prequential regret as a complementary signal that is computable from the training trajectory alone\. We establish that, in the \(nearly\) interpolating regime, the expected prequential regret upper\-bounds the description length of the trained parameter under the algorithm\-induced distribution, and that this description length translates into a high\-probability generalization bound in the PAC\-MDL setting\. Along the way, we show that the encoder\-complexity correction recently added to the algorithm\-level information bottleneck is upper\-bounded by an MDL parameter description length, bringing the two views of compression onto a shared footing\. Empirically, the prequential regret tracks the generalization error on CIFAR\-10 and CIFAR\-100, with Pearson correlations exceeding 0\.9\.

## Finite\-Sample Performance of Gradient Descent in Logistic Regression with Gaussian Design

**Authors:** Junren Chen; Arya Mazumdar

**ID:** 155399 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5waLUZpG7m>) | [PDF](<https://openreview.net/pdf?id=5waLUZpG7m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155399>)

We consider the parameter estimation problem in logistic regression with Gaussian design: the estimation of a fixed unknown parameter $\\theta^\* \\in \\mathbb\{R\}^d$ \($\\lVert\\theta^\*\\rVert\_2\\geq$  1\)  from $n$ i\.i\.d\. samples $\\\{\(x\_i,y\_i\)\\\}\_\{i=1\}^n$,   where  $x\_i\\sim N\(0,I\_d\)$ and  $y\_i\\mid x\_i \\sim \\mathrm\{Bernoulli\}$  \(1/ \(1\+exp\($\-x\_i^T$  $\\theta^\*\~$ \)\)\)\. Our main aim is to characterize the finite\-sample estimation performance and convergence behavior of gradient descent \(GD\) on the maximum likelihood objective \(i\.e\., the logistic loss\)\. Under small $O\(1\)$ stepsize   and $0$ initialization, it is shown that GD   linearly converges to a small neighborhood of the true parameter and achieves $\\ell\_2$ error of order  $O\(\\sqrt\{\\lVert \\theta \\rVert\_2^5 d/n\}\)\.$   This substantially goes beyond existing theoretical results that lack non\-asymptotic estimation error rate and exhibit much slower parameter convergence\. We also establish a faster local linear convergence to the same statistical error under a large   stepsize\. The main technical component is to show that the gradient of the logistic loss satisfies a certain approximate invertibility condition \(AIC\)\. To that end, we bound the concentration term via covering and peeling arguments, and show that the bias term is a contraction by a delicate eigenvalue analysis of the population Hessian matrices\. Finally, we build upon the recent work Matsumoto and Mazumdar \(2025\) and devise a novel efficient estimator that attains a sharper rate in high dimensions\. This indicates that the existing non\-asymptotic guarantees exhibit sub\-optimal dependence on $\\lVert\\theta\\rVert\_2$, and that in many regimes $\\Theta\(\\sqrt\{\\lVert\\theta\\rVert\_2d/n\}\)$ is the tight estimation error rate\. Numerical examples are provided to corroborate our theoretical results for GD\.

## When Symbol Names Should Not Matter: A Logistic Theory of Fresh\-Symbol Classification

**Authors:** Wenjie Guan; Jelena Bradic

**ID:** 151337 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bIdWoi4kWA>) | [PDF](<https://openreview.net/pdf?id=bIdWoi4kWA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151337>)

Template tasks have emerged as a clean testbed for asking whether transformers reason with abstract symbols rather than concrete token names\. We study the fixed\-label classification version of this problem, where train and test examples share latent templates but may use disjoint vocabularies\. Unlike next\-token prediction, the model need not emit unseen symbols; it must learn a decision rule invariant to symbol renaming\. We analyze regularized kernel logistic classification in the transformer\-kernel regime\. Our main result decomposes the learned predictor into an ideal template\-level classifier and a finite\-sample perturbation caused by accidental token overlaps in the training data\. We encode these overlaps by a colored collision graph and prove high\-probability margin\-transfer guarantees for fresh\-symbol classification\. This perspective extends template\-based analyses to logistic classification and refines scalar diversity conditions: vocabulary size controls the average rate of collisions, but collision geometry controls whether the ideal classification margin is preserved\. More broadly, the same perturbation framework applies to abstraction\-augmented inputs, yielding a general margin\-versus\-collision criterion for identifying when prompting strategies improve fresh\-symbol generalization\. Synthetic template experiments illustrate the predicted roles of regularization, sample size, and transformer\-kernel structure\.

## PAC Learning with Bandit Feedback: Sharp Sample Complexity in the Realizable Setting

**Authors:** Steve Hanneke; Qinglin Meng; Shay Moran; Amirreza Shaeiri

**ID:** 153435 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LKwGo7qHJW>) | [PDF](<https://openreview.net/pdf?id=LKwGo7qHJW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153435>)

We study the problem of multiclass PAC learning with bandit feedback in the realizable setting\. In this framework, there is an unknown data distribution over an instance space $\\mathcal\{X\}$ and a label space $\\mathcal\{Y\}$, as in classical multiclass PAC learning, but the learner does not observe the labels of the i\.i\.d\. training examples\. Instead, in each round, it receives an unlabeled instance, predicts its label, and receives bandit feedback indicating only whether the prediction is correct\. Despite this restriction, the goal remains the same as in classical PAC learning\. We provide a general characterization of the optimal sample complexity of this problem, sharp for every concept class up to logarithmic factors\. Our characterization is based on a new combinatorial dimension, termed the \*bandit $\\mathrm\{DS\}$ dimension\*, defined via generalized combinatorial structures we call \*pseudo\-boxes\*\. These extend the pseudo\-cubes underlying the $\\mathrm\{DS\}$ dimension by allowing a different number of neighbors in each coordinate\. In contrast to the $\\mathrm\{DS\}$ dimension, which governs the full\-information setting by counting the number of coordinates in the pseudo\-cube, the bandit $\\mathrm\{DS\}$ dimension aggregates the number of neighbors across coordinates, leading to a characterization in which the sample complexity scales with the total number of neighbors\. We also propose a general learning algorithm achieving the upper bound, based on an algorithmic principle called \*ListCascade\*, which connects bandit learning to list learning and may be of independent interest\.

## Best Arm Identification in Generalized Linear Bandits via Hybrid Feedback

**Authors:** Qirun Zeng; Xuchuang Wang; Jiayi Shen; Xutong Liu; Fang Kong; Jinhang Zuo

**ID:** 151037 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dSPIhAJKfj>) | [PDF](<https://openreview.net/pdf?id=dSPIhAJKfj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151037>)

We study fixed\-confidence best arm identification in generalized linear bandits under a hybrid feedback model: at each round, the learner may query either \(i\) absolute reward feedback from a single arm or \(ii\) relative \(dueling\) feedback from an arm pair, both governed by generalized linear models\. We introduce a likelihood\-ratio–based confidence sequence that unifies heterogeneous generalized linear observations and yields an explicit ellipsoidal confidence set under a self\-concordance assumption\. Building on this confidence set, we propose a hybrid Track\-and\-Stop algorithm that adaptively allocates queries by tracking a minimax\-optimal design over a joint action space of arms and pairs\. We establish $\\delta$\-correctness and provide high\-probability upper bounds on the stopping time\. We further extend the framework to a cost\-aware setting that accounts for heterogeneous acquisition costs across feedback modalities\. Empirical experiments demonstrate that the proposed algorithms significantly improve sample efficiency over baseline methods\.

## Spectrum\-Adaptive Generalization Bounds for Trained Deep Transformers

**Authors:** Mana Sakai; Masaaki Imaizumi

**ID:** 150988 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dmGgZmwSLW>) | [PDF](<https://openreview.net/pdf?id=dmGgZmwSLW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150988>)

Understanding why trained Transformers generalize well is a fundamental problem in modern machine learning theory, and complexity\-based generalization bounds provide a principled way to study this question\. While existing norm\-based bounds for Transformers remove the explicit polynomial dependence on the hidden dimension, they typically impose fixed norm constraints specified a priori and can exhibit unfavorable exponential dependence on depth\. In this paper, we derive spectrum\-adaptive post hoc generalization bounds for multi\-layer Transformers\. Under layerwise spectral norm control, the bounds are expressed in terms of layerwise Schatten quantities of the query\-key, value, and feedforward weight matrices\. Since the Schatten indices need not be fixed a priori and can instead be selected after training, separately for each matrix type and layer, the bounds adaptively trade off spectral complexity against the dimension\- and depth\-dependent factors according to the learned singular\-value profiles\. Empirical comparisons of BERT\-adapted proxies for the leading complexity factors suggest that the proxies induced by our bounds grow more slowly with depth and hidden dimension than the corresponding norm\-based proxies\. Overall, our results provide a complexity\-based perspective on how the spectral structure of trained Transformers is reflected in generalization analyses\.

## Minimax Optimal Estimation of Transport\-Growth Pairs in Unbalanced Optimal Transport

**Authors:** Donlapark Ponnoprat; Noboru Isobe; Masaaki Imaizumi

**ID:** 152805 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QG31f899dE>) | [PDF](<https://openreview.net/pdf?id=QG31f899dE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152805>)

Unbalanced optimal transport extends classical optimal transport to measures with different total masses, but statistical guarantees for Monge\-type estimation remain limited\. We study unbalanced transport with quadratic cost and Kullback\-Leibler marginal penalties and argue that the natural population target is not a map alone, but a transport\-growth pair\. Consequently, we develop two estimators for the transport\-growth pairs under several setups: an optimal transport plan\-based estimator for a general case, and a kernel\-based estimator for a case with smooth densities\. We also show that an error of the estimator achieves the minimax optimal rate by deriving a matching lower bound of the minimax risk\. Our main technical contribution is a value\-based stability reduction that converts perturbations of the UOT objective into transport and growth risks through a UOT gap condition\. These results provide a statistical foundation for Monge\-type estimation in unbalanced optimal transport\.

## Optimal In\-Context Learning of Autoregressive Processes under Heterogeneous Second\-Order Moments of the Prompts

**Authors:** Hanna Tseran; Masaaki Imaizumi

**ID:** 153067 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OEIZ6QQAsu>) | [PDF](<https://openreview.net/pdf?id=OEIZ6QQAsu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153067>)

In\-context learning enables large language models to adapt to tasks directly from input sequences, without parameter updates\. We investigate the mechanism underlying in\-context learning of autoregressive processes in transformers under heterogeneous second\-order moments of prompt distributions\. Our study considers a two\-layer architecture consisting of a linear attention head and a nonlinear MLP, with the outer layer trained via gradient descent\. We prove that there exists a parametrization under which the model converges to the unique function that approximates the optimal second\-order moment\-based AR\(1\) estimator\. We analyze bounds on approximation and convergence rates and confirm our findings experimentally\. These results extend the first\-moment\-centric understanding of estimators realized by in\-context learning to second\-order moment\-based estimators, offering further insight into ICL's robustness to new tasks\.

## Regret Minimization in Single\-Dimensional Contract\-Design with Binary Actions

**Authors:** Riccardo Poiani; Martino Bernasconi; Andrea Celli

**ID:** 153044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ORac1mqJeu>) | [PDF](<https://openreview.net/pdf?id=ORac1mqJeu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153044>)

We study principal\-agent problems in which a principal commits to an outcome\-dependent payment scheme \(i\.e\., a contract\) in order to induce an agent to take a costly action leading to a favorable outcome\. We consider the online extension of the classical \(one\-shot\) principal\-agent problem, in which the principal repeatedly interacts with agents by proposing contracts over multiple rounds\. The principal has no information about the agents and, crucially, does not observe their actions\. As a result, the principal must learn an optimal contract using only the realized outcomes observed at each round\. We focus on the setting with binary\-actions and single\-dimensional agent types, where the agent's private type represents their cost per unit\-of\-effort\. For adversarial\-type sequences, we provide tight $\\widetilde\\Theta\(T^\{2/3\}\)$ regret guarantees\. Remarkably, this rate is completely independent of the number of outcomes $m$\. The upper bound is based on two key components: 1\) a reduction to one\-dimensional threshold optimization problem and 2\) a non\-uniform discretization to handle the non\-Lipschitz nature of the problem\. Moreover, in the case of a single \(fixed\) hidden type, we show that it is possible to improve the rates and provide a tight $\\widetilde\\Theta\(\\sqrt\{T\}\)$ regret bound\. Our algorithm is based on an explore\-then\-commit strategy where we first approximately learn the hidden type via a stochastic binary search, and then we commit to a \`\`robustified'' near\-optimal contract\.

## Dynamic Optimistic Constrained OCO with Memory via Delay Equivalence

**Authors:** Mohammed ABDULLAH; George Iosifidis; Salah Eddine ELAYOUBI; Tijani Chahed

**ID:** 154422 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DhdcSBFGWf>) | [PDF](<https://openreview.net/pdf?id=DhdcSBFGWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154422>)

_Abstract unavailable from the accessible public sources._

## Chain of Dual Structures in Transformer Attention

**Authors:** Masato Uchida

**ID:** 149520 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pXT6GQVuw4>) | [PDF](<https://openreview.net/pdf?id=pXT6GQVuw4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149520>)

_Abstract unavailable from the accessible public sources._

## First\-Order Regret for Online Convex Optimization with Memory and Online Nonstochastic Control

**Authors:** Karan Singh

**ID:** 148317 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yi9BRZRbpN>) | [PDF](<https://openreview.net/pdf?id=yi9BRZRbpN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148317>)

_Abstract unavailable from the accessible public sources._

## Variance\-Adaptive Optimal Algorithm for Reinforcement Learning with MNL Function Approximation

**Authors:** Wonyoung Kim; Garud Iyengar; Assaf Zeevi; Min\-hwan Oh

**ID:** 152614 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RnsvFICNwY>) | [PDF](<https://openreview.net/pdf?id=RnsvFICNwY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152614>)

_Abstract unavailable from the accessible public sources._

## Learning Sparse Compositional Functions with Norm\-Constrained Neural Networks

**Authors:** shuo HUANG; Lorenzo Fiorito; Lorenzo Rosasco; Tomaso Poggio

**ID:** 155615 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4ENSvTY3pc>) | [PDF](<https://openreview.net/pdf?id=4ENSvTY3pc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155615>)

The ability of deep neural networks to learn hierarchical features is widely regarded as a key mechanism underlying their success in high\-dimensional learning\. Existing theory partially supports this view by establishing approximation rates based on parameter counts and sample complexity guarantees for compositional models without incurring the curse of dimensionality \(CoD\)\. To study overparameterized regimes, where the number of parameters exceeds the sample size, we develop a framework that measures complexity via the parameter norm\. Within this approach, we establish approximation rates and excess risk bounds for learning sparse compositional functions whose compositional structure is represented by directed acyclic graphs \(DAGs\), using Frobenius norm\-constrained deep neural networks\. Our results have broad applicability since every function that is efficiently Turing computable admits sparse compositional representations\. In particular, we cover a range of representative models, including multi\-index models, binary tree structures, and general compositional architectures\. The rates we derive show that deep networks can exploit the compositional structure of the target functions, effectively avoiding the CoD through hierarchical representations\.

## Top\-$k$ Identification with Correlated Biased LLM Judges via Anchor Leverage

**Authors:** Sixiong Xie; Zhuofan Shi; Haiyang Shen; Yun Ma; Xiang Jing

**ID:** 149592 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=owIAxN3QtB>) | [PDF](<https://openreview.net/pdf?id=owIAxN3QtB>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149592>)

Large\-scale model evaluation is increasingly delegated to LLM judges\. This makes evaluation cheaper, but it creates a new statistical problem: if several judges share a systematic bias, averaging more judge scores can make a ranking look more confident without making it more correct\. We study fixed\-confidence top\-$k$ identification when judge scores are cheap, correlated, and biased, while trusted anchor labels are costly\. Under a low\-dimensional factor\-bias model, we show that top\-$k$ identifiability is controlled not by the total number of anchors, but by whether anchors span the feature directions separating arms across the top\-$k$ boundary\. This yields an instance\-dependent cost characterization with two components: effective information from correlated judge scores and a profiled anchor\-leverage term quantifying the cost of removing shared bias\. We propose Profile Track\-and\-Stop, a sequential allocation algorithm that tracks the resulting cost\-optimal allocation with a conservative pilot anchoring phase and asymptotically matches the lower\-bound constant\. Experiments on a 10\-judge Arena\-Hard\-v2\.0 evaluation instance with 23,545 real API judge scores, together with synthetic and semi\-synthetic ablations, are consistent with the predicted failure mode: anchor\-free methods can plateau under cross\-family judge bias, whereas boundary\-aware anchoring improves top\-$k$ recovery at lower cost\.

## Beyond Augmented\-Action Surrogates for Multi\-Expert Learning\-to\-Defer

**Authors:** Yannis Montreuil; Axel Carlier; Lai Xing Ng; Wei Ooi

**ID:** 148942 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=u1sVK3I1mr>) | [PDF](<https://openreview.net/pdf?id=u1sVK3I1mr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148942>)

A learning\-to\-defer \(L2D\) system decides, for each input, whether to predict on its own or to hand it to one of several available experts\. The very well established recipe trains classifier and router jointly by treating the $K$ classes and $J$ experts as competing actions in one shared $\(K\{\+\}J\)$\-action geometry\. Subsequent work has proposed a series of incremental fixes within this geometry; we show that each still suffers, to varying severity, from an optimization\-level pathology \(target distortion, gradient amplification, winner\-take\-all starvation, set\-mass collapse, or class\-\-expert coupling\) even under statistical consistency\. We step outside the augmented\-action family entirely and propose a \_decoupled surrogate\_: a softmax classifier head and an independent sigmoid head per expert, mirroring the two natural objects of the problem\. We show that per\-sample updates are then coordinatewise and the class\-\-expert Hessian block is identically zero, and prove an excess\-risk bound with calibration constant $\\max\\\\\{2\\sqrt\{2\},\\sqrt\{2J/\\lambda\}\\\\\}$\-\-\-to our knowledge the first multi\-expert L2D guarantee whose constant does not grow with the expert pool when the per\-expert weight is held fixed\. On controlled synthetic studies and on CIFAR\-10, CIFAR\-10H, and Covertype, it is the only method in our comparison that remains stable as the expert pool grows, preserves rare specialists, and improves over a standalone classifier on every real\-data benchmark\.

## Online Directional Regression for Streaming Sufficient Dimension Reduction

**Authors:** Dohyun Kim; Hyungryul Park; Kyongwon Kim

**ID:** 148149 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zuuQ9Axt80>) | [PDF](<https://openreview.net/pdf?id=zuuQ9Axt80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148149>)

We develop an online directional regression for sufficient dimension reduction with streaming data\. Unlike first\-moment methods, directional regression exploits both inverse conditional means and inverse conditional variances, and can therefore recover central subspace directions generated by linear structures, symmetric dependencies, and interaction driven relationships\. Extending directional regression to the online setting is nontrivial because its kernel depends on slice\-wise inverse moments and on standardization by an unknown covariance matrix\. We address these challenges by utilizing a stable slice probability free kernel, a ridge\-stabilized recursive least\-squares estimator of the standardization operator, metric\-aware subspace tracking under a vanishing\-ridge covariance metric, and a weighted\-bootstrap ladle criterion for online structural dimension selection\. Under standard regularity conditions, the online kernel estimator is root\-$t$ consistent, the estimated generalized eigenspace consistently recovers the central subspace, and the proposed dimension selector consistently estimates the structural dimension\. Simulation studies and real\-data analyses demonstrate that the proposed method serves as a robust online alternative when the dominant data structure is unknown, adapting to both first\-moment and second\-moment\-driven dependencies while yielding substantial computational savings relative to repeated batch directional regression\.

## Sharp Non\-Asymptotic Analysis of the Penalized Challenger in $\\beta$\-EB\-TCI for Bernoulli Bandits

**Authors:** Nam Nguyen; Tuan Dam

**ID:** 150746 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=fhaJs5TH5J>) | [PDF](<https://openreview.net/pdf?id=fhaJs5TH5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150746>)

Top\-two algorithms are simple and effective for fixed\-confidence best\-arm identification, but their sharp non\-asymptotic behavior is still not well understood\. We study this problem for Bernoulli bandits through $\\beta$\-EB\-TCI, the empirical\-best top\-two rule of Jourdan et al\. \(2022\), whose challenger is chosen using a Bernoulli transportation cost with a logarithmic count penalty\. We prove that, after the empirical leader has become the true best arm and its sampling fraction stays close to $\\beta$, the stopping time is $T\_\{\\beta\}^\{\\star\}\(\\mu\)\\log\(1/\\delta\)$ up to lower\-order concentration terms\. We also show that, in this regime, every challenger is sampled linearly often\. Thus, for the original algorithm without forced exploration, the main remaining difficulty is to control when the empirical leader becomes permanently correct\. These results imply a non\-asymptotic high\-probability bound for all Bernoulli instances with a unique best arm\. If the algorithm satisfies a finite\-mean sufficient\-exploration condition, the bound further yields the sharp expected sample complexity\. In particular, this gives the sharp expectation result for the unguarded Bernoulli rule when all arm means are pairwise distinct, using the sufficient\-exploration result of Jourdan et al\. \(2022\)\. Finally, if we add a mild forced\-exploration rule that contributes only $O\(\\sqrt\{Kt\}\)$ pulls up to time $t$, we obtain a self\-contained expected sample\-complexity theorem for any number of arms under the unique\-best\-arm assumption\. We also identify a limitation of proof strategies that try to handle equal suboptimal means through a single index\-comparison argument\.

## Block Optimism for Nonstationary Bandits with Latent Linear Dynamics

**Authors:** Taehyun Hwang; Hyun\-jun Choi; Heesang Ann; Min\-hwan Oh

**ID:** 151108 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cvXXXYmyMC>) | [PDF](<https://openreview.net/pdf?id=cvXXXYmyMC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151108>)

_Abstract unavailable from the accessible public sources._

## Linear Ensemble Sampling with Fewer Ensembles

**Authors:** Taehyun Hwang; Min\-hwan Oh

**ID:** 151202 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=cC5lywZ79h>) | [PDF](<https://openreview.net/pdf?id=cC5lywZ79h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151202>)

_Abstract unavailable from the accessible public sources._

## Topic\-Aware Contextual Cascading Bandits

**Authors:** Hyun\-jun Choi; Taehyun Hwang; Min\-hwan Oh

**ID:** 153868 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I9fcrY6tSo>) | [PDF](<https://openreview.net/pdf?id=I9fcrY6tSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153868>)

_Abstract unavailable from the accessible public sources._

## On Minimizing Regret in Fixed\-Confidence $\\varepsilon$\-Best Arm Identification

**Authors:** Tianyuan Jin; Junwen Yang; Vincent Tan

**ID:** 155630 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=48e13H6fg5>) | [PDF](<https://openreview.net/pdf?id=48e13H6fg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155630>)

This paper studies the $\\varepsilon$\-best arm identification problem \($\\varepsilon$\-BAI\) for $K$\-armed bandits under the fixed\-confidence setting\. Departing from the usual objective of identifying the best arm with minimal sample complexity, we focus on minimizing the cumulative regret of identifying an $\\varepsilon$\-best arm\. We consider the usual asymptotic regime in which the error probability $\\delta$ of identifying an $\\varepsilon$\-best arm vanishes\. In this setting, we show a novel instance dependent lower bound\. In particular, we show that any family of $\(\\varepsilon,\\delta\)$\-PAC algorithms must incur an expected cumulative regret up to the stopping time that scales as $\\log\(1/\\delta\)$, with an instance\-dependent constant $C\(\\mu\)$\. This is proved using a novel regret\-aware change\-of\-measure technique that allocates information given a budget on the  regret\. To achieve this lower bound, we devise an algorithm, \\algname, that achieves the same scaling in $\\delta$, i\.e\., $\\log \(1/\\delta\)$, but with a different constant, which we call $C^\\\*\(\\mu\)$\. KL\-UCB\+Greedy  has two main benefits: \(i\) it is computationally efficient as $C^\\\*\(\\mu\)$ admits a closed\-form expression; \(ii\) in broad classes of reward distributions such as Gaussian distributions, $C^\\\*\( \\mu\) = C\( \\mu\)$, demonstrating asymptotic optimality of KL\-UCB\+Greedy within these classes\. As auxiliary results, we also derive lower bounds on the sample complexity of any family of $\(\\varepsilon,\\delta\)$\-algorithms as $\\delta$ vanishes and show that the sample complexity of KL\-UCB\+Greedy closely matches that of the lower bound on the sample complexity\.

## Optimal Dimension\-Free Sampling for Regularized Classification

**Authors:** Meyam Alishahi; Alexander Munteanu; Simon Omlor; Jeff M Phillips

**ID:** 154002 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gv4HMpqs8v>) | [PDF](<https://openreview.net/pdf?id=Gv4HMpqs8v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154002>)

We prove optimal sampling bounds achieving $\(1\\pm\\varepsilon\)$\-relative error for a broad class of Lipschitz continuous classification loss functions under various regularization terms\. This includes important functions such as logistic and sigmoid loss, hinge loss, and ReLU loss, as prominent and popular representative examples\. In particular, we prove $k^2/\\varepsilon^2$ upper and lower bounds for $\\\|\\cdot\\\|\_2/k$ regularization, and $k/\\varepsilon^2$ upper and lower bounds for $\\\|\\cdot\\\|\_1/k$ regularization\. For $\\\|\\cdot\\\|\_2^2/k$ regularization, the sampling complexity depends mainly on a bounded derivative property: if $\|g'\(x\)\|\\leq g\(x\)$, and $g\(0\)&gt;0$, and $g$ is monotonic or convex, then it admits linear in $k$ sampling complexity; otherwise the general bound is $k^2/\\varepsilon^2$\. However, if $g\(0\)=0$, our results indicate that no dimension\-free bounds are possible, and even sublinear bounds are ruled out\. All upper bounds are complemented by matching lower bounds up to polylogarithmic terms\. Moreover, our work relies conceptually and algorithmically on simple uniform or \(squared\) norm sampling and hereby improves over recent cubic $k^3/\\varepsilon^2$ sensitivity sampling bounds of  \(Alishahi and Phillips, ICML'24\)\. This is achieved by refined arguments involving higher moment bounds and empirical process analyses to avoid overcounting that appears in the de\-facto standard VC\-dimension and sensitivity framework\.

## The Minimax Rate of Online Isotonic Regression on Product Orders

**Authors:** Sichen Wang

**ID:** 153025 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OZYmFCFi3w>) | [PDF](<https://openreview.net/pdf?id=OZYmFCFi3w>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153025>)

_Abstract unavailable from the accessible public sources._

## Fast Wasserstein rates for estimating probability distributions of probabilistic graphical models

**Authors:** Daniel Bartl; Stephan Eckstein

**ID:** 156637 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156637>)

_Abstract unavailable from the accessible public sources._

## On the Optimal Sample Complexity of Offline Multi\-Armed Bandits with KL Regularization

**Authors:** Kaixuan Ji; Qiwei Di; Heyang Zhao; Qingyue Zhao; Quanquan Gu

**ID:** 155456 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5SbBySWwEj>) | [PDF](<https://openreview.net/pdf?id=5SbBySWwEj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155456>)

_Abstract unavailable from the accessible public sources._

## Accelerated last\-iterate convergence of Extragradient via power\-law stepsizes

**Authors:** Yue Wu; Weiqiang Zheng; Yang Cai; Haipeng Luo

**ID:** 155893 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=22Ks9TPzvQ>) | [PDF](<https://openreview.net/pdf?id=22Ks9TPzvQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155893>)

We revisit the convergence guarantees of the Extragradient \(EG\) method for unconstrained bilinear min\-max optimization\. It is known that EG with a fixed stepsize achieves a $\\Theta\(T^\{\-1/2\}\)$ last\-iterate convergence rate, which is slower than the optimal $\\mathcal\{O\}\(T^\{\-1\}\)$ rate attainable by incorporating additional  mechanisms such as anchoring\. Motivated by recent advances showing that dynamic stepsizes alone can significantly accelerate gradient descent, we ask whether dynamic stepsizes can similarly accelerate the last\-iterate convergence of EG\.  We present the first positive result in this direction\. Specifically, we provide a deterministic dynamic stepsize schedule that accelerates the convergence rate of EG to $\\mathcal\{O\}\(T^\{\-2/3\+\\varepsilon\}\)$ for any $\\varepsilon &gt; 0$\. We also show that this rate is tight when the extrapolation and update steps of EG use the same stepsize\. We then show that allowing different stepsizes for the extrapolation and update steps further improves the convergence rate to the near\-optimal $\\mathcal\{O\}\(T^\{\-1\+\\varepsilon\}\)$\. Our analysis reduces stepsize scheduling to an optimization problem, whose solution leads to a stepsize schedule that follows \(a discretization of\) a power\-law distribution\. Our proposed stepsize schedules and analysis extend to other methods, such as optimistic gradient descent, and suggest broader applicability to general min\-max optimization problems\.

## Understanding Model Reprogramming: A Reachability and Relabeling Perspective

**Authors:** Zesheng Ye; Pin\-Yu Chen; Feng Liu

**ID:** 155318 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6W21Zo9L7E>) | [PDF](<https://openreview.net/pdf?id=6W21Zo9L7E>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155318>)

Model reprogramming adapts a \*frozen\* source model to a target task by wrapping it in a \*learnable\* input transformation from target input to the source\-model input space, and an output mapping from source\-model outputs to target predictions\. Despite extensive empirical progress, the \*finite\-sample learnability\* of the induced wrapper hypothesis class $\\mathcal\{F\}\\\_\{\\rm MR\}$ remains underexplored\. We address this for source models that expose hard source labels and analyze through the wrapper structure: on any target samples, the input transformation selects \*reachable\* source labels that the output mapping relabels\. Through this lens, we answer two questions: ① how many target samples are needed to approach the best predictor in $\\mathcal\{F\}\\\_\{\\rm MR\}$, and ② what gap remains between the optimum over $\\mathcal\{F\}\\\_\{\\rm MR\}$ and the target Bayes risk\. For ①, the wrapper structure factorizes the sample\-wise complexity of $\\mathcal\{F\}\\\_\{\\rm MR\}$ into a \*reachability\* term counting reachable source\-label patterns, and a \*conditional relabeling\* term counting their relabelings\. This yields an agnostic\-PAC bound on the \*estimation error\*, with sample complexity scaling additively in the two terms; this bound becomes closed\-form on additive input transformations and is matched by a lower bound on an explicit binary classification construction\. For ②, the same structure decomposes the \*approximation error\* exactly into the source\-label information loss and output\-mapping restriction with a source\-conditional upper bound on this gap\. We extend the approximation analysis to logit\-exposing source models, where the upper bound is empirically estimable\. The wrapper\-side analysis localizes both errors to specific components, giving a structural view of reprogramming practice\.

## Extended Wasserstein\-GAN Approach to Causal Distribution Learning: Density\-Free Estimation and Minimax Optimality

**Authors:** Shu Tamano; Masaaki Imaizumi

**ID:** 149316 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=r59bGWg9jN>) | [PDF](<https://openreview.net/pdf?id=r59bGWg9jN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149316>)

Distributional causal inference requires estimating not only average treatment effects but also interventional outcome distributions, including quantiles, tail risks, and policy\-dependent uncertainty\. As a method for distributional causal inference, generative adversarial network \(GAN\)\-based counterfactual methods are flexible tools for this task\. However, these methods have several limitations\. First, the objectives of certain techniques do not coincide with the statistical risk of the identifiable causal target, and therefore provide limited theoretical guarantees regarding estimable counterfactual distributions or optimality\. Second, they tend to rely on unstable density\-based methods, such as density ratio estimation\. In this paper, we propose GANICE \(GAN for Interventional Conditional Estimation\) with several advantages: it \(i\) clarifies the conditional interventional distribution for each treatment\-\-covariate state as the causal estimation target; \(ii\) estimates the conditional distribution such that its averaged Wasserstein risk is minimized; \(iii\) establishes minimax optimality\. GANICE achieves these advantages through the introduction of the extended Wasserstein distance, the incorporation of a cellwise critic in its dual, and an optimality proof based on Besov space theory\. Our experiments demonstrate that GANICE consistently outperforms existing methods\.

## Beyond Kemeny Medians: Consensus Ranking Distributions\. Definition, Properties and Statistical Learning

**Authors:** Stephan Clémençon; Ekhine Irurozki

**ID:** 149736 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nkMuHDEM6v>) | [PDF](<https://openreview.net/pdf?id=nkMuHDEM6v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149736>)

In this article we develop a new method for summarizing a ranking distribution, \\textit\{i\.e\.\} a probability distribution on the symmetric group $\\mathfrak\{S\}\_n$, beyond the classical theory of consensus and Kemeny medians\. Based on the notion of \\textit\{local ranking median\}, we introduce the concept of \\textit\{consensus ranking distribution\} \($\\crd$\), a sparse mixture model of Dirac masses on $\\mathfrak\{S\}\_n$, in order to approximate a ranking distribution with small distortion from a mass transportation perspective\.  We prove that by choosing the popular Kendall $\\tau$ distance as the cost function, the optimal distortion can be bounded in terms of pairwise probabilities, paving the way for the development of efficient learning methods that do not suffer from the lack of vector space structure on $\\mathfrak\{S\}\_n$\.  In particular, we propose a top\-down tree\-structured statistical algorithm that allows for the progressive refinement of a CRD based on ranking data, from the Dirac mass at a Kemeny median at the root of the tree to the empirical ranking data distribution itself at the end of the tree's exhaustive growth\. In addition to the theoretical arguments developed, the relevance of the algorithm is empirically supported by various numerical experiments\.

## CITE: Anytime Valid Statistical Inference in LLM Self\-Consistency

**Authors:** Hirofumi Ota; Naoto Iwase; Yuki Ichihara; Junpei Komiyama; Masaaki Imaizumi

**ID:** 150250 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jdhnUghROp>) | [PDF](<https://openreview.net/pdf?id=jdhnUghROp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150250>)

Large language models often improve reasoning by sampling multiple outputs and aggregating their final answers, but precise and efficient control of error levels remains a challenging task\. In particular, deciding when to stop sampling remains difficult when the stopping rule is data\-dependent and the set of possible answers is not known in advance\. We study anytime\-valid certification of a prespecified target answer as the unique mode of the model’s response distribution, a guarantee distinct from answer correctness\. We propose the Certification by Intersection\-union Testing with E\-processes \(CITE\) algorithm, which provably controls false certification at any prescribed level under arbitrary data\-driven stopping, without requiring prior knowledge of the answer category set\. We also prove an category\-set\-size\-free stopping\-time rate, establish matching minimax lower bounds up to constants in the main regime, and extend the construction to confidence\-weighted voting\. Simulations and LLM self\-consistency experiments show empirical error control and improved certification in diffuse\-tail settings\.

## Statistical Convergence of Spherical First Hitting Diffusion Models

**Authors:** Simon Bienewald; Lukas Trottner

**ID:** 152862 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PpF3OHBPqx>) | [PDF](<https://openreview.net/pdf?id=PpF3OHBPqx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152862>)

Denoising diffusion models have evolved into a state\-of\-the\-art method for tasks in various fields, such as denoising and generation of images, text generation, or generation of synthetic data for training of other machine learning models\. First hitting diffusion models \(FHDM\) are a particular class of denoising diffusion models with \\textit\{random\} adaptive generation time tailored to generate data on a known manifold\. Building on the conditioning framework of Doob's $h$\-transform these models leverage the given information on the target data manifold to demonstrate strong performance across tasks while offering distinct features such as time\-homogeneous dynamics of the generating process and a reduced average simulation time\. Even though the theoretical investigation of standard forward\-backward diffusion models has attracted much attention in the recent past, the statistical convergence properties of FHDMs are not yet understood\. In this work, we show that, up to logarithmic factors, FHDMs achieve the minimax optimal convergence rate in total variation for spherically supported Sobolev smooth data distributions\. In particular, this is the first statistical optimality result for denoising diffusion modelling with random generation time\.

## Spectrum\-Adaptive Generalization Bounds for Trained Deep Transformers

**Authors:** Mana Sakai; Masaaki Imaizumi

**ID:** 150988\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150988

[Paper](<https://openreview.net/forum?id=dmGgZmwSLW>) | [PDF](<https://openreview.net/pdf?id=dmGgZmwSLW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150988>)

Understanding why trained Transformers generalize well is a fundamental problem in modern machine learning theory, and complexity\-based generalization bounds provide a principled way to study this question\. While existing norm\-based bounds for Transformers remove the explicit polynomial dependence on the hidden dimension, they typically impose fixed norm constraints specified a priori and can exhibit unfavorable exponential dependence on depth\. In this paper, we derive spectrum\-adaptive post hoc generalization bounds for multi\-layer Transformers\. Under layerwise spectral norm control, the bounds are expressed in terms of layerwise Schatten quantities of the query\-key, value, and feedforward weight matrices\. Since the Schatten indices need not be fixed a priori and can instead be selected after training, separately for each matrix type and layer, the bounds adaptively trade off spectral complexity against the dimension\- and depth\-dependent factors according to the learned singular\-value profiles\. Empirical comparisons of BERT\-adapted proxies for the leading complexity factors suggest that the proxies induced by our bounds grow more slowly with depth and hidden dimension than the corresponding norm\-based proxies\. Overall, our results provide a complexity\-based perspective on how the spectral structure of trained Transformers is reflected in generalization analyses\.

## Minimax Optimal Estimation of Transport\-Growth Pairs in Unbalanced Optimal Transport

**Authors:** Donlapark Ponnoprat; Noboru Isobe; Masaaki Imaizumi

**ID:** 152805\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152805

[Paper](<https://openreview.net/forum?id=QG31f899dE>) | [PDF](<https://openreview.net/pdf?id=QG31f899dE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152805>)

Unbalanced optimal transport extends classical optimal transport to measures with different total masses, but statistical guarantees for Monge\-type estimation remain limited\. We study unbalanced transport with quadratic cost and Kullback\-Leibler marginal penalties and argue that the natural population target is not a map alone, but a transport\-growth pair\. Consequently, we develop two estimators for the transport\-growth pairs under several setups: an optimal transport plan\-based estimator for a general case, and a kernel\-based estimator for a case with smooth densities\. We also show that an error of the estimator achieves the minimax optimal rate by deriving a matching lower bound of the minimax risk\. Our main technical contribution is a value\-based stability reduction that converts perturbations of the UOT objective into transport and growth risks through a UOT gap condition\. These results provide a statistical foundation for Monge\-type estimation in unbalanced optimal transport\.

## Optimal In\-Context Learning of Autoregressive Processes under Heterogeneous Second\-Order Moments of the Prompts

**Authors:** Hanna Tseran; Masaaki Imaizumi

**ID:** 153067\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153067

[Paper](<https://openreview.net/forum?id=OEIZ6QQAsu>) | [PDF](<https://openreview.net/pdf?id=OEIZ6QQAsu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153067>)

In\-context learning enables large language models to adapt to tasks directly from input sequences, without parameter updates\. We investigate the mechanism underlying in\-context learning of autoregressive processes in transformers under heterogeneous second\-order moments of prompt distributions\. Our study considers a two\-layer architecture consisting of a linear attention head and a nonlinear MLP, with the outer layer trained via gradient descent\. We prove that there exists a parametrization under which the model converges to the unique function that approximates the optimal second\-order moment\-based AR\(1\) estimator\. We analyze bounds on approximation and convergence rates and confirm our findings experimentally\. These results extend the first\-moment\-centric understanding of estimators realized by in\-context learning to second\-order moment\-based estimators, offering further insight into ICL's robustness to new tasks\.

## Regret Minimization in Single\-Dimensional Contract\-Design with Binary Actions

**Authors:** Riccardo Poiani; Martino Bernasconi; Andrea Celli

**ID:** 153044\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153044

[Paper](<https://openreview.net/forum?id=ORac1mqJeu>) | [PDF](<https://openreview.net/pdf?id=ORac1mqJeu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153044>)

We study principal\-agent problems in which a principal commits to an outcome\-dependent payment scheme \(i\.e\., a contract\) in order to induce an agent to take a costly action leading to a favorable outcome\. We consider the online extension of the classical \(one\-shot\) principal\-agent problem, in which the principal repeatedly interacts with agents by proposing contracts over multiple rounds\. The principal has no information about the agents and, crucially, does not observe their actions\. As a result, the principal must learn an optimal contract using only the realized outcomes observed at each round\. We focus on the setting with binary\-actions and single\-dimensional agent types, where the agent's private type represents their cost per unit\-of\-effort\. For adversarial\-type sequences, we provide tight $\\widetilde\\Theta\(T^\{2/3\}\)$ regret guarantees\. Remarkably, this rate is completely independent of the number of outcomes $m$\. The upper bound is based on two key components: 1\) a reduction to one\-dimensional threshold optimization problem and 2\) a non\-uniform discretization to handle the non\-Lipschitz nature of the problem\. Moreover, in the case of a single \(fixed\) hidden type, we show that it is possible to improve the rates and provide a tight $\\widetilde\\Theta\(\\sqrt\{T\}\)$ regret bound\. Our algorithm is based on an explore\-then\-commit strategy where we first approximately learn the hidden type via a stochastic binary search, and then we commit to a \`\`robustified'' near\-optimal contract\.

## Inferential Theory of Learning as a Framework for Test\-Time Computation in Foundation Models

**Authors:** Mohit Prabhushankar; Ghassan AlRegib

**ID:** 139992 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zuBABOLynT>) | [PDF](<https://openreview.net/pdf?id=zuBABOLynT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139992>)

Foundation models are billion\-parameter neural networks that are trained under statistical learning principles to reason inductively regarding multifarious tasks at inference\. However, foundation models are increasingly deployed in settings where the statistical principles that they were trained on may not hold\. During deployment, users intervene in these systems' functionality through prompts, instructions, demonstrations, analogies, retrieval, tool calls, memory, verification, search, and multi\-step reasoning\. These operations change the effective knowledge state available at inference time, all of which are not well described by induction alone\. This paper argues that Michalski’s Inferential Theory of Learning \(ITL\) provides a useful conceptual basis for describing deployed foundation models as multistrategy, goal\-directed inference systems\. In ITL, learning is modeled as the transformation of knowledge through transmutations such as generalization, specialization, abstraction, concretion, association, discrimination, explanation, derivation, reformulation, insertion, deletion, replication, and sorting\. We reinterpret these classical transmutations in the context of modern test\-time computation techniques, showing that the functionality of reasoning models, intelligent prompting, retrieval\-augmented generation, tool use, memory, and agentic search can be understood as transmutation programs over knowledge states\. We then identify limitations of classical ITL for contemporary machine learning and propose a probabilistic extension in which transmutations are stochastic operators selected under uncertainty and cost\. Finally, we connect this view to a system\-level information bottleneck principle, quantifying the new knowledge that is acquired during the inference process\. The resulting framework positions ITL as a bridge between statistical learning, symbolic reasoning, abductive explanations, prompting, and agentic foundation models\.

## Generating in the Limit with Infinitely Many Hallucinations

**Authors:** Irene Strauss; Alexandra Butoi; Ryan Cotterell

**ID:** 151636 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z78RzgzukZ>) | [PDF](<https://openreview.net/pdf?id=Z78RzgzukZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151636>)

The classic paradigm of language identification in the limit models learning as a game between an adversary, who reveals strings from an unknown target language, and a learner tasked with identifying that language\. The recently introduced framework of language generation in the limit shifted the objective to better reflect modern language modeling, requiring the learner to produce valid, unseen strings from the target language\. Related work highlighted a fundamental tension: a broad coverage of the target often comes at the cost of validity\. We introduce a new notion of precision and recast this problem as the classic recall\-\-precision trade\-off\. We analyze generation in the limit under varying constraints on enumeration, novelty, and validity, aimed at reflecting settings closer to those encountered by large language models\. A key contribution is our analysis of learners that are not eventually valid: we allow infinitely many mistakes, provided their frequency tends to zero so that precision remains $1$\. We show this relaxation can strictly increase recall when the adversary permanently withholds a large portion of the target language\. We also study a continuous relaxation of the novelty constraint, requiring only that a fixed fraction of outputs are novel\. Taken together, our results move toward a more realistic model of language generation where occasional errors and repetitions are unavoidable, but their rates are controlled\.

## Majority\-of\-Three is an Optimal PAC Learner

**Authors:** Grigoris Velegkas

**ID:** 150819 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=f4VPeQiNfz>) | [PDF](<https://openreview.net/pdf?id=f4VPeQiNfz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150819>)

Finding the optimal sample complexity of realizable PAC learning was a major open problem in learning theory, which was settled by the breakthrough result of Hanneke \(2016\), building on prior work by Simon \(2015\)\. Hanneke's algorithm is quite involved and requires training $\\text\{poly\}\(n\)$ Empirical Risk Minimizers \(ERMs\) on carefully crafted subsets of the data\. Since using a single ERM call is provably suboptimal, recent work by Aden\-Ali \(2024\) proposed the majority\-of\-three ERMs as a candidate for the \*simplest\* optimal PAC learner, and established its optimality in the \*in\-expectation\* regime\. Their main open question was whether this algorithm is optimal in the classical \*high\-probability\* regime\. In this work, building on their ideas, we answer this question affirmatively\.

## Generalization Analysis of Biased Stochastic Gradient Methods for Minimax Problems

**Authors:** Shuang Zeng; Yunwen Lei; Yiming Ying

**ID:** 154714 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BXzpp9Ihuq>) | [PDF](<https://openreview.net/pdf?id=BXzpp9Ihuq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154714>)

Minimax optimization refers to a class of optimization problems with some variables to minimize and other variables to maximize\. Biased stochastic gradient methods have shown practical success in solving minimax problems to either improve robustness, enhance communication efficiency, or decrease computational costs\. These successes motivate a lot of theoretical works to study the convergence of biased stochastic gradient methods, while their generalization analysis remains untouched\. In this paper, we present the first framework to study the stability and generalization of biased stochastic gradient methods for minimax problems\. We establish a connection between stability and generalization for minimax problems by relaxing the existing bounded gradient assumption to a bounded second moment condition\. We then introduce a generalized Lipschitz\-type condition on bias and gradient estimators, and derive a general stability bound to clarify the connection among bias, gradient estimators and stability\. We apply our general analysis to Zeroth\-order and Clipped stochastic gradient descent ascent \(SGDA\), and derive stability bounds that match those of SGDA under appropriate smoothing/clipping parameters\. We combine stability and convergence analyses together, and derive optimal excess risk bounds of order $1/\\sqrt\{n\}$, where $n$ is the sample size\.

## Learning Distributions from Multiple Data Providers

**Authors:** Jon Kleinberg; Amin Saberi; Xizhi Tan; Grigoris Velegkas

**ID:** 154089 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GJbuWXhmG5>) | [PDF](<https://openreview.net/pdf?id=GJbuWXhmG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154089>)

Motivated by learning from heterogeneous and overlapping data providers, we study a stylized model of distribution learning from restricted conditional samples\. The goal is to learn an unknown distribution $p$ on a finite domain $\[n\]$\. The learner is given a fixed family of queryable sets $\\mathcal S \\subseteq 2^\{\[n\]\}$, and each query to $S \\in \\mathcal S$ returns an independent sample from the conditional distribution $p\(\\cdot \\mid S\)$\.  Learnability is governed by the \\emph\{co\-occurrence graph\} associated with $\\mathcal S$: two domain elements are connected if they appear together in some queryable set\. Pointwise consistency is achievable  when this graph is connected on the target support\. PAC learning requires more: it is possible  when the co\-occurrence graph is complete\.  The sample complexity of PAC learning ranges from nearly linear to quadratic\. Every query family with complete co\-occurrence graph admits sample complexity $\\widetilde O\(n^2/\\epsilon^2\)$, and this bound is tight in the worst case\. On the other hand, if every subset is queryable, the optimal worst\-case complexity improves to $\\Theta\(n/\\epsilon^2\)$\. More generally, we identify \\emph\{hierarchical comparability\} as a sufficient structural condition on $\\mathcal S$ under which the optimal complexity is nearly linear, $\\widetilde \\Theta\(n/\\epsilon^2\)$, with pairwise query families as a canonical example\. Finally, the full range of polynomial rates between linear and quadratic is attainable: for every $\\alpha \\in \(1,2\)$, there exists a query family with optimal PAC rate $\\widetilde \\Theta\(n^\\alpha/\\epsilon^2\)$\.

## Tight Gap\-Dependent Regret Bounds and Problem\-Independent Bounds for Cost\-aware Cascading Bandits

**Authors:** Yuji TAMAKOSHI; Shinji Ito

**ID:** 149412 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qE6UhWAHvg>) | [PDF](<https://openreview.net/pdf?id=qE6UhWAHvg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149412>)

We study cost\-aware cascading bandits, where a learner selects an ordered subset of options, tests them sequentially until the first success, and pays the costs of all tested options\. In this problem, regret comes from both testing inefficient options and placing options in a suboptimal order, but existing analyses do not separate these effects for inefficient options and therefore yield an inverse\-square dependence on the gap $c\_i\-\\theta\_i$\. We develop a regret decomposition based on intermediate policies that reorder the remaining suffix and remove inefficient options one position at a time\.  This allows us to quantify the incremental regret incurred when each option is tested\. As a consequence, we show that the regret of CC\-UCB admits a problem\-dependent bound of $O\(\\sum\_\{i:\\theta\_i/c\_i&lt;1\}\\log T/\(c\_i\-\\theta\_i\)\)$ up to additive terms and a problem\-independent bound of order $\\tilde O\(L\\sqrt\{T\}\)$\. We further prove that the minimax regret is bounded from below by $\\Omega\(\\sqrt\{LT\}\)$ by reducing standard multi\-armed bandits to a special case of the model\. Finally, we propose CC\-UCBv2, which removes the need to specify a positive lower bound on costs and handles zero\-cost options by separating empirically zero\-cost options from the others\.  Numerical experiments show the effect of misspecified cost lower bounds and demonstrate that the proposed modification can reduce regret in representative instances involving zero or misspecified costs\.

## Post\-Processing Guarantees for Classification under Linear\-Fractional Performance Metrics

**Authors:** Andrea Della Vecchia

**ID:** 155732 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3Leoi1uMNP>) | [PDF](<https://openreview.net/pdf?id=3Leoi1uMNP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155732>)

This paper studies binary classification under generalized performance metrics, going beyond standard misclassification error\. We focus on linear\-fractional measures—including the $F$\-score and Jaccard index—which are widely used in class\-imbalanced settings\. We first provide a unified characterization of the optimal classifier, showing that it admits a thresholding structure on the regression function\. This reduces the original infinite\-dimensional, non\-decomposable optimization problem to the estimation of a single scalar parameter\. Building on this result, we analyze plug\-in classifiers that combine a regression estimator with a data\-driven estimate of the optimal threshold\. We show that this threshold is characterized as the solution of a fixed\-point equation depending only on the marginal distribution, enabling its estimation using unlabeled data and avoiding standard validation\-based procedures\. Our main contribution is a finite\-sample analysis of this approach\. We derive excess risk bounds that decompose the error into contributions from regression estimation, threshold estimation, and sampling effects, providing a modular understanding of learning under non\-decomposable metrics\. Under standard margin assumptions, we further establish fast convergence rates\. Our results yield a unified theoretical framework for plug\-in classification under linear\-fractional metrics, extending prior analyses beyond specific measures such as the $F$\-score\. Empirical results on synthetic and real datasets support our theoretical findings\.

## Borda\-Based Fair Multi\-User Dueling Bandit in Tabular and Generalized Linear Settings

**Authors:** Maheed H Ahmed; Mahsa Ghasemi

**ID:** 155261 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=71S8aArMXO>) | [PDF](<https://openreview.net/pdf?id=71S8aArMXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155261>)

The increasing prevalence of preference\-based learning, particularly for machine learning models interacting with human users, gives rise to scenarios where the model's decision should cater to the preferences of a number of users\. Due to the inherent misalignments in such preferences, it is natural to seek a fair decision\-making paradigm\. Motivated by that, we pose the problem of fair multi\-user dueling bandit, where each user's preferences over pairs of actions are encoded by a preference matrix unknown to the agent\. We design a Nash social welfare objective based on the Borda scores of the individual user preferences\. The notion of the Borda score measures the average likelihood of an action being preferred over the other actions, and importantly, it does not require the existence of a completely dominant action\. Considering online learning in this general setting, we construct hard instances and establish a minimax lower bound on the achievable regret\. We also design an explore\-then\-commit algorithm and derive an upper bound on its worst\-case regret\. Furthermore, we formulate a fair multi\-user generalized linear dueling bandit to enable modeling large action spaces, which typically necessitate a structured representation\. In this setting, too, we establish a lower bound on regret and an upper bound on regret for a proposed explore\-then\-commit algorithm\.

## Iterative Chow Filtering for Learning with Distribution Shift

**Authors:** Gautam Chandrasekaran; Georgios Gkrinias; Adam Klivans; Konstantinos Stavropoulos; Arsen Vasilyan

**ID:** 152685 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RBxhiGn1aP>) | [PDF](<https://openreview.net/pdf?id=RBxhiGn1aP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152685>)

Recent work due to Goel et al\.\~gave the first efficient algorithms for learning with distribution shift in the challenging PQ framework, where a learner receives labeled training examples and unlabeled test examples and must make correct predictions on the test set but is allowed to abstain from predicting on out\-of\-distribution points\.  Their results rely on $\{\\cal L\}\_2$ sandwiching  approximations, a strong requirement that leads to poor bounds for several basic function classes such as DNF formulas\.  Here we show that the weaker notion of $\{\\cal L\}\_1$ sandwiching suffices for efficient PQ learning\. As a consequence, we obtain the first quasipolynomial\-time PQ learning algorithm for DNFs under the uniform distribution and essentially match the guarantees known for ordinary PAC learning\. More broadly, our bounds provide exponential improvements for several classes including constant depth circuits and constant degree polynomial threshold functions\. Our main technical ingredient is \*Iterative Chow Filtering\*, a new procedure that uses low\-degree Chow parameters to identify and remove test points incompatible with the training distribution\.

## Less Structure is More: Minimal Representations for Supervised Learning

**Authors:** Menghui Zhou; Vitaveska Lanfranchi; Po Yang

**ID:** 148300 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yt1Bywu2lu>) | [PDF](<https://openreview.net/pdf?id=yt1Bywu2lu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148300>)

Many real\-world applications require highly interpretable machine learning systems, particularly in high\-stakes domains such as healthcare\. A promising recent direction is the paradigm of Maximal Coding Rate Reduction \(MCR$^2$\), which seeks to characterize and preserve the low\-dimensional structure underlying each class\. However, we find that exhaustively preserving structural information is often unnecessary and can even be detrimental in supervised learning, especially under noisy and uncertain real\-world conditions, as it may overly constrain the fitting flexibility of the model\. In contrast, we propose a simple yet effective framework, termed SimCoding, which captures only minimal structural information for each class\. Despite relying on substantially less structural information, SimCoding significantly improves the generalization ability and robustness of deep models\. Extensive experiments across diverse benchmark datasets demonstrate the effectiveness of SimCoding\. We further validate SimCoding on a challenging real\-world application, Parkinson’s disease severity assessment from free\-living human activity signals, where it consistently achieves strong robustness and outperforms competing methods\. Moreover, SimCoding can be naturally extended to incremental learning scenarios, where it substantially alleviates catastrophic forgetting and consistently surpasses strong baselines\.

## Theory of Optimal Learning Rate Schedules and Scaling Laws for a Random Feature Model

**Authors:** Blake Bordelon; Francesco Mori

**ID:** 154381 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DzVZ8bvupU>) | [PDF](<https://openreview.net/pdf?id=DzVZ8bvupU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154381>)

Setting the learning rate for a deep learning model is a critical part of successful training, yet choosing this hyperparameter is often done empirically with trial and error\. In this work, we explore a solvable model of optimal learning rate schedules for a powerlaw random feature model trained with stochastic gradient descent \(SGD\)\. We consider the optimal schedule $\\eta\_T^\\star\(t\)$ where $t$ is the current iterate and $T$ is the total training horizon\. This schedule is computed both as a numerical optimization problem and also analytically \(when possible\) using optimal control theory\. Our analysis reveals two regimes which we term the easy phase and hard phase\. In the easy phase the optimal schedule is a polynomial decay $\\eta\_T^\\star\(t\) \\simeq T^\{\-\\xi\} \(1\-t/T\)^\{\\delta\}$ where $\\xi$ and $\\delta$ depend on the properties of the features and task\. In the hard phase, the optimal schedule resembles warmup\-stable\-decay with constant \(in $T$\) initial learning rate and annealing performed over a vanishing \(in $T$\) fraction of training steps\. We investigate joint optimization of learning rate and batch size, identifying a degenerate optimality condition and showing that batch ramps can improve the scaling in wall\-clock time in the easy phase\. Beyond SGD, we derive optimal schedules for the momentum parameter $\\beta\(t\)$ and show that momentum achieves a better loss\-scaling exponent in the hard phase\. We compare our optimal schedule to various benchmarks in our task including \(1\) optimal constant learning rates $\\eta\_T\(t\) \\sim T^\{\-\\xi\}$ \(2\) optimal power laws $\\eta\_T\(t\) \\sim  T^\{\-\\xi\} t^\{\-\\chi\}$, finding that our schedule achieves better rates than either of these\. Our theory suggests that learning rate transfer across training horizon depends on the structure of the model and task\. For ResNet image classification on CIFAR\-5M, the learning curves exhibit hard\-phase behavior where optimal base learning rates are constant under sufficient annealing\. GPT\-2 style transformers trained in language modeling exhibit easy\-phase behavior where optimal learning rates shift even under annealing\.

## Label\-Free Consistency Correction for Weak\-to\-Strong Generalization

**Authors:** Qi He; Heng Huang

**ID:** 154917 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9zQZSoCnpU>) | [PDF](<https://openreview.net/pdf?id=9zQZSoCnpU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154917>)

Most explanations of weak\-to\-strong \(W2S\) generalization focus on why a strong student may fail to exactly imitate weak\-label errors\. We study a complementary mechanism: before student training, weak\-teacher predictions may be inconsistent along semantic constraints specified independently of the weak model\. When such constraints are valid for the target, these inconsistencies give label\-free lower bounds on the risk reduction achievable by correcting weak labels, rather than merely indicating unstructured prediction error\. We formalize this mechanism using Markov and Laplacian operators\. Under exact target validity, Markov trajectory inconsistency equals the squared\-risk gain from smoothing; under approximate validity, it remains a conservative lower bound after an explicit validity penalty\. We then solve the associated minimax correction problem, obtaining a resolvent correction that continuously attenuates constraint\-violating directions and reduces to the identity when validity uncertainty is too large\. These results yield validity\-adjusted correction \(VAC\), a split\-sample pipeline that selects corrections from weak\-teacher queries and predeclared validity budgets before training the strong student\. Controlled graph\-signal experiments and a CIFAR\-10 cats\-versus\-dogs W2S experiment are consistent with the proposed mechanism: validity\-adjusted inconsistency predicts useful correction and transfers to student gain, whereas high raw inconsistency under invalid controls does not provide such evidence\.

## From Average Sensitivity to Small\-Loss Regret Bounds under Random\-Order Model

**Authors:** Shinsaku Sakaue; Yuichi Yoshida

**ID:** 154659 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ByO41cYGxg>) | [PDF](<https://openreview.net/pdf?id=ByO41cYGxg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154659>)

We study online learning in the random\-order model, where the multiset of loss functions is chosen adversarially but revealed in a uniformly random order\. By extending the \*batch\-to\-online\* transformation of Dong and Yoshida \(2023\), we show that if an offline algorithm enjoys a $\(1\+\\varepsilon\)$\-approximation guarantee, an \*average sensitivity\* bound controlled by a function $\\varphi\(\\varepsilon\)$, and stability with respect to $\\varepsilon$, then we can obtain a \*small\-loss\* regret bound typically of order $\\tilde O\(\\varphi^\{\\star\}\(\\mathrm\{OPT\}\_T\)\)$, where $\\varphi^\{\\star\}$ is the concave conjugate of $\\varphi$, $\\mathrm\{OPT\}\_T$ is the offline optimum over $T$ rounds, and $\\tilde O$ hides polylogarithmic factors in $T$\. Our result refines their original $\(1\+\\varepsilon\)$\-approximate regret guarantee and applies to a broad class of problems, including online $k$\-means clustering and online low\-rank approximation\. We further apply our approach to online submodular function minimization using $\(1\\pm\\varepsilon\)$\-cut sparsifiers of submodular hypergraphs, obtaining a small\-loss regret bound of $\\tilde O\(n^3 \+ n^\{3/4\}\\mathrm\{OPT\}\_T^\{3/4\}\)$, where $n$ is the ground\-set size; we also demonstrate its applicability to online $\\ell\_1$ regression\. Our work sheds light on the power of sparsification and related algorithmic techniques in achieving small\-loss regret bounds in the random\-order model, without requiring structural assumptions on loss functions, such as linearity or smoothness\.

## Approaching I/O\-optimality for Approximate Attention

**Authors:** Pál András Papp; Aleksandros Sobczyk; Anastasios Zouzias

**ID:** 154340 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=EKuz0q2V2L>) | [PDF](<https://openreview.net/pdf?id=EKuz0q2V2L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154340>)

We revisit the I/O complexity of attention in large language models\. Given query\-key\-value matrices $Q,K,V\\in\\mathbb\{R\}^\{n\\times d\}$, and a machine with fast memory size $M$, the goal is to compute the "attention matrix" $A=\\mathrm\{softmax\}\(QK^\{\\top\}/\\sqrt\{d\}\)V$ with the minimal number of data transfers between fast and slow memory\. Existing methods in the literature, most notably FlashAttention and its variants, incur an I/O cost that depends quadratically on $n$, while a trivial lower bound only requires $\\Omega\(nd\)$ I/O's to read the inputs and write the output\. In this work, we present a technique for computing attention where the I/O cost only depends almost\-linearly on $n$ in most parameter regimes\. This is achieved by developing I/O\-efficient algorithms inspired by the recent approximate attention framework of Alman and Song \[NeurIPS'23\]\. We also prove corresponding lower bounds in each parameter regime to show that our algorithms are indeed close to I/O\-optimal\.

## Simple Projection\-Free Algorithm for Contextual Recommendation with Logarithmic Regret and Robustness

**Authors:** Shinsaku Sakaue

**ID:** 148909 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uGztbZRzrg>) | [PDF](<https://openreview.net/pdf?id=uGztbZRzrg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148909>)

Contextual recommendation is a variant of contextual linear bandits in which the learner observes an \(optimal\) action rather than a reward scalar\. Recently, Sakaue et al\. \(2025\) developed an efficient Online Newton Step \(ONS\) approach with an $O\(d\\log T\)$ regret bound, where $d$ is the dimension of the action space and $T$ is the time horizon\. In this paper, we present a simple algorithm that is more efficient than the ONS\-based method while achieving the same regret guarantee\. Our core idea is to exploit the improperness inherent in contextual recommendation, leading to an update rule akin to the second\-order perceptron from online classification\. This removes the Mahalanobis projection step required by ONS, which is often a major computational bottleneck\.  More importantly, the same algorithm remains robust to possibly suboptimal action feedback, whereas the prior ONS\-based method required running multiple ONS learners with different learning rates for this extension\.  We describe how our method works in general Hilbert spaces \(e\.g\., via kernelization\), where eliminating Mahalanobis projections becomes even more beneficial\.

## Mirror Descent Beyond Euclidean Stability:  An Exponential Separation in Initialization Sensitivity

**Authors:** Shira Vansover\-Hager; Matan Schliserman; Ofir Schlisselberg; Tomer Koren

**ID:** 149621 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ojWztQNH2d>) | [PDF](<https://openreview.net/pdf?id=ojWztQNH2d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149621>)

Mirror Descent \(MD\) extends Gradient Descent \(GD\) beyond Euclidean geometry and has recently reappeared as a lens for KL\-regularized policy optimization in reinforcement learning and LLM post\-training\. This raises a basic robustness question,  crucial to reproducibility and reliability: how sensitively do MD dynamics depend on their inputs? We focus on initialization, often itself a pretrained or previously aligned model\. Quadratic\-regularized MD, including GD and Mahalanobis geometries, is well\-known to be stable for convex smooth objectives\. We show a sharp contrast: once the regularizer is non\-quadratic, MD can be exponentially more sensitive to initialization than GD, even with a well\-conditioned regularizer in Euclidean norm\. We give a three\-dimensional construction with a convex, smooth objective and a strongly convex, smooth, well\-conditioned regularizer where an initial $\\varepsilon$ perturbation is quickly amplified  to $     \\min\\\\\{         \\text\{polylog\}^\{\-1\}\(1/\\varepsilon\),         \\varepsilon e^\{\\Omega\(\\eta T\)\}     \\\\\} $ after $T$ iterations of MD with step size $\\eta$\. For canonical KL\-regularized MD on the simplex, we show that even linear objectives can amplify an initial $\\varepsilon$ perturbation exponentially fast in high\-dimensional or near\-boundary regimes\. Finally, we propose Anchored MD, which adds a Bregman term to a fixed point, and show it achieves $O\(1/\\sqrt\{T\}\)$ stability, while preserving optimization guarantees up to logarithmic factors\.

## Learning through Internalization

**Authors:** Nirmit Joshi; Marko Medvedev; Nikolaos Tsilivis; Julia Kempe; Nati Srebro

**ID:** 150503 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hbXu6OcZxx>) | [PDF](<https://openreview.net/pdf?id=hbXu6OcZxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150503>)

We study internalization, the process by which neural\-network\-based systems absorb an explicit computational procedure into their own weights, and how it facilitates learning\. We investigate how transformers internalize the simulation of semiautomata by internalizing chain\-of\-thought \(CoT\) tokens, which classes of semiautomata are harder to internalize, and expose the flip side of internalization, that is, a progressive degradation of out\-of\-distribution performance\. We then provide the first provable analysis of successful internalization: for the task of learning parities, we show that a simplified one\-layer transformer provably first learns the target with explicit CoT supervision and then internalizes the autoregressive generation as CoT tokens are progressively removed, directly computing the parity\. Learning such a representation directly from data without CoT supervision is computationally hard\. Finally, we discuss how learning through internalization can be viewed as an instance of the \\textit\{Positive Distribution Shift\} phenomenon recently introduced by\~\\citet\{Med\+26\}\.

## Factual recall in linear associative memories: sharp asymptotics and mechanistic insights

**Authors:** Alessio Giorlandino; Sebastian Goldt; Antoine Maillard

**ID:** 152324 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Tv6Zf9bZKi>) | [PDF](<https://openreview.net/pdf?id=Tv6Zf9bZKi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152324>)

Large language models demonstrate remarkable ability in factual recall, yet the fundamental limits of storing and retrieving input\-\-output associations with neural networks remain unclear\. We study these limits in a minimal setting: a linear associative memory that maps $p$ input embeddings in $\\mathbb\{R\}^d$ to their corresponding\~$d$\-dimensional targets via a single layer, requiring each mapped input to be well separated from all other targets\. Unlike in supervised classification, this strict separation induces $p$ constraints per association and produces strong correlations between constraints that make a direct characterisation of the storage capacity difficult\. Here, we first introduce a decoupled model in which each input has its own independent set of competing outputs, and provide numerical and analytical evidence that this decoupled model is equivalent to the original model in terms of storage capacity, spectra of the learnt weights, and storage mechanism\. Using tools from statistical physics, we show that the decoupled model can store up to $p\_c \\log p\_c / d^2 = 1 / 2$ associations, and generalise the computation of $p\_c$ to linear two\-layer architectures\. Our analysis also gives mechanistic insight into how the optimal solution improves on a naïve Hebbian learning rule: rather than boosting input\-output alignments with broad fluctuations, the optimal solution raises the correct scores just above the extreme\-value threshold set by the competing outputs\. These findings give a sharp statistical\-physics characterisation of factual storage in linear networks and provide a baseline for understanding the memory capacity of more realistic neural architectures\.

## Online Resource Allocation With General Constraints

**Authors:** Eleonora Fidelia Chiefari; Francesco Emanuele Stradi; Matteo Castiglioni; Alberto Marchesi

**ID:** 154670 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BtOcFcAUxb>) | [PDF](<https://openreview.net/pdf?id=BtOcFcAUxb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154670>)

Online resource allocation \(ORA\) is a fundamental framework for sequential decision\-making problems under budget constraints, with applications ranging from online advertising to revenue management\. In this work, we study a broader setting that includes both budget constraints and general constraints, extending the classical budget\-only model\. This extension is essential for modelling critical economic requirements, such as Return\-on\-Investment \(ROI\) constraints\. We develop an algorithm that achieves best\-of\-both\-world guarantees within this generalized framework\. In particular, against a dynamic benchmark, our algorithm achieves $\\widetilde\{\\mathcal O\}\(\\sqrt\{T\}\)$ regret in the stochastic regime and $\\alpha$\-regret of order $\\widetilde\{\\mathcal O\}\(\\sqrt\{T\}\)$ in the adversarial regime, where $\\alpha$ depends on the feasibility margin of the corresponding offline problem\. At the same time, our algorithm guarantees strict satisfaction of the budget constraints and $\\widetilde\{\\mathcal O\}\(\\sqrt\{T\}\)$ cumulative violation for the general ones\. From a technical perspective, introducing general constraints alongside budgets precludes the use of standard budget\-focus methods\. While budget methods rely on a zero\-consumption "safe'' action to ensure feasibility, general constraints are much less "aligned'' towards feasibility\. We overcome these difficulties with a new analysis that exploits weak adaptivity to get boundedness of the Lagrangian multipliers and best\-of\-both\-world guarantees\.

## Multi\-Armed Bandits With Best\-Action Queries

**Authors:** Francesco Bacchiocchi; Matteo Castiglioni; Alberto Marchesi; Francesco Emanuele Stradi

**ID:** 154576 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CXJ2ArLdAa>) | [PDF](<https://openreview.net/pdf?id=CXJ2ArLdAa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154576>)

We study multi\-armed bandits \(MABs\) augmented with best\-action queries, in which the learner may additionally query an oracle that reveals the best arm in the current round\. This setting was recently characterized by Russo et al\. \[2024\] in the full\-feedback model, where the learner observes the rewards of all arms after each round\. They show that, in both stochastic and adversarial environments, $k$ best\-action queries reduce the optimal $\\widetilde\{\\mathcal\{O\}\}\(\\sqrt\{T\}\)$ regret to $\\widetilde\{\\mathcal\{O\}\}\(\\min\\\{T/k,\\sqrt\{T\}\\\}\)$\. Whether this improvement extends to the more realistic bandit\-feedback model\-\-\-where the learner observes only the reward of the played arm\-\-\-was left as an open problem\. We fully resolve this question\. When rewards are stochastic but correlated among arms, we show that the full\-feedback result does not carry over: any algorithm must incur regret at least $\\Omega\(\\sqrt\{T\-k\}\)$\. This lower bound directly extends to adversarial environments\. On the positive side, we show that $\\widetilde\{\\mathcal\{O\}\}\(\\min\\\{T/k,\\sqrt\{T\-k\}\\\}\)$ regret is still achievable when rewards are stochastic and i\.i\.d\., and establish a matching lower bound, up to logarithmic factors\. Together, these results provide a complete characterization of the benefits of best\-action queries in the bandit\-feedback model\.

## Replicable Constrained Bandits

**Authors:** Matteo Bollini; Gianmarco Genalti; Francesco Emanuele Stradi; Matteo Castiglioni; Alberto Marchesi

**ID:** 151345 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bDUTx2VJDq>) | [PDF](<https://openreview.net/pdf?id=bDUTx2VJDq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151345>)

Algorithmic \*replicability\* has recently been introduced to address the need for reproducible experiments in machine learning\. A \*replicable online learning\* algorithm is one that takes the same sequence of decisions across different executions in the same environment, with high probability\. We initiate the study of algorithmic replicability in \*constrained\* MAB problems, where a learner interacts with an unknown stochastic environment for $T$ rounds, seeking to maximize reward while satisfying multiple constraints\. Our main result is that replicability can be achieved in constrained MABs\.  Specifically, we design replicable algorithms whose regret and constraint violation match those of non\-replicable ones in terms of $T$\. As a key step, we develop the first replicable UCB\-like algorithm for \*unconstrained\* MABs, showing that algorithms that employ the optimism in\-the\-face\-of\-uncertainty principle can be replicable, a result that we believe is of independent interest\.

## Characterizing Learning in Deep Neural Networks using a Tractable Algorithmic Complexity Estimator

**Authors:** Pedram Bakhtiarifard; Sophia Natasha Wilson; Mahmoud H\. A\. Afifi; Jonathan Wenshøj; Raghavendra Selvan

**ID:** 148219 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zT1uGkhHsM>) | [PDF](<https://openreview.net/pdf?id=zT1uGkhHsM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148219>)

Algorithmic complexity measures the intrinsic structure \(or randomness\) of strings\. Kolmogorov\-Chaitin\-Solomonoff \(KCS\) complexity is the length of the shortest program that can output a string and halt over all possible programs; due to this reason it is uncomputable\. Estimating the algorithmic probability of strings using simulations of finite Turing machines is one way of obtaining tight estimations of KCS complexity of strings\. For two dimensional objects, this is currently doable only for binary strings using the block decomposition method \(BDM\)\. In this work, we present the quantized block decomposition \(QuBD\) method to extend the estimation of algorithmic complexity to any $k$\-ary objects such as the weights of deep neural networks\. We show theoretically that the proposed QuBD method yields better KCS complexity estimations than BDM that relies on binarization\. We further study how algorithmic complexity interacts with learning in deep neural networks by tracking the evolution of weights during training\. Using a variety of experiments we show that algorithmic complexity decreases as models learn, it correlates with generalization performance and can be used as a diagnostic measure to perform model compression\.

## Strategic PAC Learnability via Geometric Definability

**Authors:** Yuval Filmus; Shay Moran; Elizaveta Nesterova; Nir Rosenfeld; Alexander Shlimovich

**ID:** 155901\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155901

[Paper](<https://openreview.net/forum?id=20CDB8ujTA>) | [PDF](<https://openreview.net/pdf?id=20CDB8ujTA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155901>)

Strategic classification studies learning settings in which individuals can modify their features, at a cost, in order to influence the classifier’s decision\. A central question is how the sample complexity of the induced \(strategic\) hypothesis class depends on the complexities of the underlying hypothesis class and the cost structure governing feasible manipulations\.  Prior work has shown that in several natural settings, such as linear classifiers with norm costs, the induced complexity can be controlled\. We begin by showing that such guarantees fail in general \-\-\- even in simple cases: there exist hypothesis classes of VC dimension $1$ on the real line such that, even under the simplest interval neighborhoods, the induced class has infinite VC dimension\. Thus, strategic behavior can turn an easy learning problem into a non\-learnable one\.  To overcome this, we introduce structure via a geometric definability assumption: both the hypothesis class and the cost\-induced neighborhood relation can be defined by first\-order formulas over $\\mathbb R\_\{\\exp\}$\. Intuitively, this means that hypotheses and costs can be described using arithmetic operations, exponentiation, logarithms, and comparisons\. This captures a broad range of natural classes and cost functions, including $\\ell\_p$ distances, Wasserstein distance, and information\-theoretic divergences\. Under this assumption, we prove that learnability is preserved, with sample complexity controlled by the complexity of the defining formulas\.

## Does Compression Imply Generalization? A Minimum Description Length Perspective

**Authors:** Lincen Yang; Jiayang Shi; Nan Pu; Daniel M\. Pelt; Matthijs van Leeuwen; Zhong Li; Shujian Yu

**ID:** 151042\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151042

[Paper](<https://openreview.net/forum?id=dQ36O5uJBs>) | [PDF](<https://openreview.net/pdf?id=dQ36O5uJBs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151042>)

A central question in modern learning theory is what notion of compression, if any, explains why over\-parameterized neural networks generalize\. Existing answers measure complexity at different levels, ranging from weights to representations, and estimating the associated quantities either requires held\-out data in principle or relies on mutual\-information estimation in ultra\-high dimensions\. We approach the question through the minimum description length \(MDL\) principle and propose the prequential regret as a complementary signal that is computable from the training trajectory alone\. We establish that, in the \(nearly\) interpolating regime, the expected prequential regret upper\-bounds the description length of the trained parameter under the algorithm\-induced distribution, and that this description length translates into a high\-probability generalization bound in the PAC\-MDL setting\. Along the way, we show that the encoder\-complexity correction recently added to the algorithm\-level information bottleneck is upper\-bounded by an MDL parameter description length, bringing the two views of compression onto a shared footing\. Empirically, the prequential regret tracks the generalization error on CIFAR\-10 and CIFAR\-100, with Pearson correlations exceeding 0\.9\.

## Finite\-Sample Performance of Gradient Descent in Logistic Regression with Gaussian Design

**Authors:** Junren Chen; Arya Mazumdar

**ID:** 155399\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155399

[Paper](<https://openreview.net/forum?id=5waLUZpG7m>) | [PDF](<https://openreview.net/pdf?id=5waLUZpG7m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155399>)

We consider the parameter estimation problem in logistic regression with Gaussian design: the estimation of a fixed unknown parameter $\\theta^\* \\in \\mathbb\{R\}^d$ \($\\lVert\\theta^\*\\rVert\_2\\geq$  1\)  from $n$ i\.i\.d\. samples $\\\{\(x\_i,y\_i\)\\\}\_\{i=1\}^n$,   where  $x\_i\\sim N\(0,I\_d\)$ and  $y\_i\\mid x\_i \\sim \\mathrm\{Bernoulli\}$  \(1/ \(1\+exp\($\-x\_i^T$  $\\theta^\*\~$ \)\)\)\. Our main aim is to characterize the finite\-sample estimation performance and convergence behavior of gradient descent \(GD\) on the maximum likelihood objective \(i\.e\., the logistic loss\)\. Under small $O\(1\)$ stepsize   and $0$ initialization, it is shown that GD   linearly converges to a small neighborhood of the true parameter and achieves $\\ell\_2$ error of order  $O\(\\sqrt\{\\lVert \\theta \\rVert\_2^5 d/n\}\)\.$   This substantially goes beyond existing theoretical results that lack non\-asymptotic estimation error rate and exhibit much slower parameter convergence\. We also establish a faster local linear convergence to the same statistical error under a large   stepsize\. The main technical component is to show that the gradient of the logistic loss satisfies a certain approximate invertibility condition \(AIC\)\. To that end, we bound the concentration term via covering and peeling arguments, and show that the bias term is a contraction by a delicate eigenvalue analysis of the population Hessian matrices\. Finally, we build upon the recent work Matsumoto and Mazumdar \(2025\) and devise a novel efficient estimator that attains a sharper rate in high dimensions\. This indicates that the existing non\-asymptotic guarantees exhibit sub\-optimal dependence on $\\lVert\\theta\\rVert\_2$, and that in many regimes $\\Theta\(\\sqrt\{\\lVert\\theta\\rVert\_2d/n\}\)$ is the tight estimation error rate\. Numerical examples are provided to corroborate our theoretical results for GD\.

## Online Budget Allocation with Censored Semi\-Bandit Feedback

**Authors:** François Bachoc; Nicolò Cesa\-Bianchi; Tom Cesari; Roberto Colomboni

**ID:** 151323 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bMskKiSDl8>) | [PDF](<https://openreview.net/pdf?id=bMskKiSDl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151323>)

We study a stochastic budget\-allocation problem over $K$ tasks\. At each round $t$, the learner chooses an allocation $X\_t \\in \\Delta\_K$\. Task $k$ succeeds with probability $F\_k\(X\_\{t,k\}\)$, where $F\_1,\\dots,F\_K$ are nondecreasing \*budget\-to\-success\* curves, and upon success yields a random reward with unknown mean $\\mu\_k$\. The learner observes which tasks succeed, and observes a task's reward \*only\* upon success \(\*censored\* semi\-bandit feedback\)\. This model captures, for instance, splitting payments across crowdsourcing workers or distributing bids across simultaneous auctions, and subsumes stochastic multi\-armed bandits and semi\-bandits\. We design an optimism\-based algorithm that operates under censored semi\-bandit feedback\. Our main result is an instance\-dependent bound showing that in \*diminishing\-returns\* regimes, the regret of this algorithm scales polylogarithmically with the horizon $T$ without any \*ad hoc\* tuning\. For general nondecreasing curves, we prove that the same algorithm \(with the same tuning\) achieves a worst\-case regret upper bound of $\\tilde O\(K\\sqrt\{T\}\)$\. Finally, we establish a matching worst\-case regret lower bound of $\\Omega\(K\\sqrt\{T\}\)$ that holds even for \*full\-feedback\* algorithms, highlighting the intrinsic hardness of our problem outside diminishing returns\.

## Tight $L\_\\infty$ Sample Complexity for Low\-Degree and Sparse Boolean Polynomials

**Authors:** Jasper van Doornmalen; Mathieu Molina; Victor Verdugo; José Verschae

**ID:** 150147 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kLdvyyeVCk>) | [PDF](<https://openreview.net/pdf?id=kLdvyyeVCk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150147>)

Motivated by the optimization of bounded binary black\-box functions, we study the problem of learning polynomial surrogates over the Boolean hypercube\. To ensure that optimizing the surrogate yields good solutions for the underlying objective, we require uniform $L\_\\infty$\-error guarantees rather than the usual $L\_2$\-type guarantees\. We characterize the minimax sample complexity of uniform estimation under subgaussian noise for two classes of bounded polynomials\. First, for polynomials of degree at most $d$ on $n$ variables, the sample complexity scales as $n^\{d\+1\}$\. Second, for $s$\-sparse Fourier\-Walsh polynomials with $s \\leq n$, it scales as $ns^2$\. These rates differ structurally from the noiseless setting, where uniform exact recovery scales as $n^d$ and $ns$, respectively\. Our lower bounds hold even for arbitrary adaptive learners, showing that the additional factors are intrinsic to the noisy cases\. Standard Fourier\-analysis tools for the $L\_2$\-norm do not naturally extend to the $L\_\\infty$\-setting in a way that yields uniform guarantees\. Our proofs overcome this difficulty by relying on suitably chosen auxiliary norms that serve as proxies for controlling the $L\_\\infty$\-error\. Together, our results provide a tight characterization of the sample complexity of learning optimization\-safe polynomial surrogates\.

## Learning Theory of Transformers: Local\-to\-Global Approximation via Softmax Partition of Unity

**Authors:** Zhongjie Shi; Wenjing Liao

**ID:** 152703 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=R1SSvVTsSW>) | [PDF](<https://openreview.net/pdf?id=R1SSvVTsSW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152703>)

This paper investigates the learning theory of Transformer networks for regression tasks on the compact Euclidean domain $\[0,1\]^d$ and $d$\-dimensional compact Riemannian manifolds\. We propose a novel constructive approximation framework for Transformers that builds local approximations of the target function and aggregates them into a global approximation via softmax partition of unity\. This approach leverages the attention mechanism to achieve spatial localization  through affine transformations of the input\. The softmax activation plays a crucial role in aggregating local approximations to a global output\. From an approximation perspective, we prove that a  dense Transformer equipped with only  two encoder blocks and standard single\-hidden\-layer point\-wise feed\-forward networks can achieve a uniform $\\varepsilon$\-approximation error for $\\alpha$\-H\\"older continuous functions with $\\alpha \\in \(0,1\]$ using $\\mathcal\{O\}\(\\varepsilon^\{\-d/\\alpha\}\)$ total parameters\. Building upon this approximation guarantee, we establish a near minimax\-optimal generalization error bound of order $\\mathcal\{O\}\\big\(n^\{\-\\frac\{2\\alpha\}\{2\\alpha\+d\}\} \\log n\\big\)$ for the empirical risk minimizer, where $n$ is the training data size\.  The Transformer architecture studied in this paper is dense, shallow and wide, and employs softmax activation and sinusoidal positional encodings, closely reflecting practical implementations\.

## Learning Chance\-Constrained MDPs with Bellman Distributional Certificates

**Authors:** Chenbei Lu; Hongyu Yi

**ID:** 154689 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BiofG4E1uv>) | [PDF](<https://openreview.net/pdf?id=BiofG4E1uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154689>)

Safe reinforcement learning \(RL\) commonly enforces expected\-cost constraints, but such expectation safety may fail to control the probability of rare high\-cost trajectories\. Chance\-constrained MDPs \(CCMDPs\) impose a stronger probability\-level requirement, but are widely viewed as harder because the chance constraint is nonconvex and depends on the full trajectory rather than a Bellman\-linear expectation\. In this paper, we reveal that this computational difficulty does not imply a higher statistical price\. In tabular discounted CCMDPs, we give a Bellman\-certified model\-based algorithm whose sample complexity matches the \\emph\{minimax optimal\} primary dependence of classical CMDP learning, and prove a matching lower bound\.  Technically, our key idea is the \\emph\{Bellman distributional certificate\}, which constructs a Bellman recursion for constraint violation probabilities before policy selection\. The certificate can be reused across candidate policies, shifting concentration analysis from the number of possible policies to a finite Bellman certificate table\. Building on this certificate, we establish high\-probability safety and near\-optimality guarantees for deterministic policy learning in discounted CCMDPs\. To our knowledge, we also provide the first model\-free sample complexity guarantee for stochastic policy learning in CCMDPs via variance\-reduced policy gradient\. Numerical experiments on synthetic CCMDPs and IEEE 14\-bus energy\-storage control benchmark illustrate the safety and behavior of the proposed algorithms\.

## Adaptive Calibration in Non\-Stationary Environments

**Authors:** Junyan Liu; Haipeng Luo; Lillian Ratliff

**ID:** 151966 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WTLTiMlgq3>) | [PDF](<https://openreview.net/pdf?id=WTLTiMlgq3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151966>)

Making calibrated online predictions is a central challenge in modern AI systems\. Much of the existing literature focuses on fully adversarial environments where outcomes may be arbitrary, leading to conservative algorithms that can perform suboptimally in more benign settings, such as when outcomes are nearly stationary\. This gap raises a natural question: can we design online prediction algorithms whose calibration error automatically adapts to the degree of non\-stationarity in the environment, smoothly interpolating between i\.i\.d\. and adversarial regimes? We answer this question in the affirmative and develop a suite of algorithms that achieve adaptive calibration guarantees under multiple calibration measures\. Specifically, with $T$ being the number of rounds and $C\\in\[0,T\]$ being an unknown non\-stationary measure defined as the minimal $\\ell\_1$ deviation of the mean outcomes, our algorithms attain $\\widetilde\{O\}\(\\sqrt\{T\}\+\(TC\)^\{\\frac\{1\}\{3\}\}\)$ for $\\ell\_1$ calibration error and $\\widetilde\{O\}\(\(1\+C\)^\{\\frac\{1\}\{3\}\}\)$ for both $\\ell\_2$ and pseudo KL calibration error\. These bounds match the optimal rates in the stationary case \($C=0$\) and recover known guarantees in the fully adversarial regime \($C=T$\)\. Our approach builds on and extends prior work \[Hu et al\., 2025, Luo et al\., 2025\], introducing an epoch\-based scheduling together with a novel non\-uniform partition of the prediction space that allocates finer resolution near the underlying ground truth\.

## Policy Optimization in Tabular MDPs: Data\-dependent Regret under Unknown Transitions

**Authors:** Mingyi Li; Taira Tsuchiya; Kenji Yamanishi

**ID:** 150629 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=geyjtAQ0PC>) | [PDF](<https://openreview.net/pdf?id=geyjtAQ0PC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150629>)

We study policy optimization for online episodic tabular Markov decision processes with unknown transition kernels, aiming for best\-of\-both\-worlds guarantees and multiple data\-dependent regret bounds\.  Recent work \(Dann et al\., 2023; Li et al\., 2026\) has shown that policy optimization can adapt to both adversarial and stochastic losses with data\-dependent bounds, including first\-order, second\-order, and path\-length bounds, but only under known transitions\. We resolve the open problem raised by Dann et al\. \(2023\) by developing optimistic follow\-the\-regularized\-leader algorithms that extend such guarantees to unknown transitions\. The key ingredient is a new design of optimistic $Q$\-function estimators together with a data\-dependent transition bonus that controls estimator bias through the loss\-prediction error\. Our analysis further identifies an unavoidable transition\-dependent complexity term that captures the intrinsic cost of estimating the transition kernel\.  As a result, we obtain first\-order, second\-order, and path\-length bounds with this transition\-dependent complexity term while simultaneously achieving gap\-dependent $\\mathrm\{polylog\}\(T\)$ regret in the stochastic regime\.

## No Free Best\-of\-Both\-Worlds Learning  in Repeated Bilateral Trade

**Authors:** Yutian Cheng; Canzhe Zhao; Jingye Zhao; Shuai Li

**ID:** 155659 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3yiO50D45L>) | [PDF](<https://openreview.net/pdf?id=3yiO50D45L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155659>)

We study best\-of\-both\-worlds learning in repeated bilateral trade with two\-bit feedback\. When seller and buyer valuations are independent, minimax regret scales as $\\Theta\(T^\{2/3\}\)$; under general bounded\-density distributions it degrades to $ \\Theta\(T^\{3/4\}\)$\. This regime\-dependent gap naturally raises a  question: can a single algorithm adapt optimally to both?  We first  resolve this negatively: any algorithm achieving $O\(T^\\alpha\)$ regret on independent\-values instances necessarily suffers $\\Omega\(T^\{1\-\\alpha/3\}\)$ regret on some dependent\-values instance\. We then characterize the optimal tradeoff and construct a meta\-algorithm achieving $\\bigl\(\\widetilde O\(T^\{\\alpha\}\),\\widetilde O\(T^\{1\-\\alpha/3\}\)\\bigr\)$ for every $\\alpha\\in\[2/3,3/4\]$\. Finally, we show that this tradeoff can be bypassed with mild side information: knowing the optimal same\-price gain suffices to recover the classical best\-of\-both\-worlds guarantee $\\bigl\(\\widetilde O\(T^\{2/3\}\),\\widetilde O\(T^\{3/4\}\)\\bigr\)$\.

## Stability\-Constrained Regime\-Aware Forecasting for Heterogeneous Panel Time Series

**Authors:** Dmitry Zaytsev; Valentina V Kuskova; Michael Coppedge

**ID:** 153846 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=IJ0jP4TvfO>) | [PDF](<https://openreview.net/pdf?id=IJ0jP4TvfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153846>)

Social science panel time series exhibit multicollinearity, latent unit heterogeneity, and regime\-conditional sign\-changing relationships\. On V\-Dem democratic development data, four of four selected covariates exhibit coefficient sign reversal across regimes, driving pooled additive predictors to cancel real signal \- a diagnostic we establish before introducing any nonlinear model\. We present a regime\-aware additive forecasting architecture that recovers this signal under a verifiable contraction certificate\. Our theoretical contribution is a rate\-based contraction theorem decomposing the global Lipschitz constant of a soft\-gated mixture predictor into per\-regime, regime\-disagreement, and dwell\-time components, each empirically auditable on a trained model\. On V\-Dem democratic development data \($151$ countries, $1970\-2025$\), the architecture recovers regime\-conditional signal that pooled additive models cancel \(paired Diebold\-Mariano $p=0\.016$\), with the recovery localized to the tails of the democracy index where a diagnostic shows largest covariate sign disagreement\. The contraction certificate $L\_\{\\text\{eq,max\}\}&lt;1$ holds in $5/5$ seeds across all $9$ audited configurations without explicit projection\. A synthetic stress test with stronger regime contrasts shows the certificate is non\-vacuous: spectral normalization on per\-edge layers can fail to deliver contraction because the gating\-driven term $L\_\{\\phi,\\text\{eq\}\} \\cdot M$ dominates, and a regime\-disagreement penalty is required to recover the bound\.

## Bilinear Matching Bandits

**Authors:** Wooseong Cho; Min\-hwan Oh

**ID:** 149557 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pDNMIRZc3y>) | [PDF](<https://openreview.net/pdf?id=pDNMIRZc3y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149557>)

We study \\emph\{bilinear matching bandits\}, an online sequential decision problem in which at each round a learner assigns $M$ users to $N$ items via an injective matching $\\pi:\[M\]\\hookrightarrow\[N\]$ and observes semi\-bandit feedback with bilinear mean reward $\\mathbf\{x\}\_i^\\top \\mathbf\{\\Theta\}^\\star \\mathbf\{y\}\_\{\\pi\(i\)\}$, where the parameter $\\mathbf\{\\Theta\}^\\star \\in \\mathbb\{R\}^\{d\_1 \\times d\_2\}$ is unknown\. We propose \\textsc\{HybridRRD\}, a hybrid algorithm that combines high\-width elimination with a row\-wise regularized design sampler over the fractional matching polytope\. Without assuming $\\mathbf\{\\Theta\}^\\star$ is low\-rank, \\textsc\{HybridRRD\} achieves a high\-probability regret bound of $\\widetilde\{O\} \(d\_2 \\sqrt\{d\_1MT\} \+ Md\_1 d\_2\)$, suppressing problem\-scale constants\. This improves the leading dimension dependence from $d\_1d\_2$ to $d\_2\\sqrt\{d\_1\}$ over the standard Kronecker\-linearized contextual combinatorial semi\-bandit baseline\. We further prove a minimax lower bound of $\\Omega\(d\_2 \\sqrt\{d\_1 M T\}\)$ in a large\-item regime, matching the leading regret term up to logarithmic factors\. Numerical experiments show that \\textsc\{HybridRRD\} performs favorably against Kronecker\-linearized baselines\.

## Online Set Learning from Precision and Recall Feedback

**Authors:** Lee Cohen; Yishay Mansour; Shay Moran; Han Shao

**ID:** 155110 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8KsPIzpp5i>) | [PDF](<https://openreview.net/pdf?id=8KsPIzpp5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155110>)

We consider the problem of learning an unknown subset $N^\{target\}$ of a domain in an online setting\. % In each round $t$, the learner predicts a set of items $\{N\}\_t$ and receives one of two types of feedback, each with equal probability: \{\\it precision feedback\}, in which a randomly chosen item from the predicted set $N\_t$ is revealed and the learner is told whether it belongs to $N^\{target\}$ \(incurring a reward if it does\), or \{\\it recall feedback\}, in which a randomly chosen item from the target set $N^\{target\}$ is revealed and the learner is told whether it belongs to $N\_t$ \(incurring a reward if it does\)\. The goal is to maximize the cumulative reward over time\. This simple online set learning problem abstracts a variety of learning scenarios with precision and recall\-\-type feedback\.  We show that a hypothesis class \(a family of subsets of the domain\) is learnable in this setting if and only if it has finite Vapnik\-Chervonenkis \(VC\) dimension, mirroring the classical PAC characterization\. However, the resulting algorithmic structure is markedly more intricate: in contrast to standard Probably Approximately Correct \(PAC\) learning\-\-\-where the algorithmic landscape is governed by the simple principle of Empirical Risk Minimization \(ERM\)\-\-\-our partial feedback model can invalidate ERM and even all proper learning rules\. We develop algorithms to address the dependencies induced by the feedback, obtaining regret guarantees in both the realizable and agnostic settings\. Our results provide a qualitative characterization of learnability in this model, addressing its most basic question, while pointing to a range of natural and intriguing open questions, including the determination of optimal regret rates\.

## Training\-free Spatially Grounded Geometric Shape Encoding

**Authors:** Yuhang He

**ID:** 150307 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=j770IgUZZG>) | [PDF](<https://openreview.net/pdf?id=j770IgUZZG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150307>)

In this work, we introduce a novel training\-free encoding framework, dubbed \*\*XShapeEnc\*\*, that encodes an arbitrary spatially grounded 2D geometric shape into a compact representation exhibiting five favorable properties, including invertibility, adaptivity, generality and controllability\. Specifically, a 2D spatially grounded geometric shape is decomposed into its normalized geometry within the unit disk and its pose vector, where the pose is further transformed into a harmonic pose field that also lies within the unit disk\. A set of orthogonal Zernike basis is constructed to encode shape geometry and pose either independently or jointly, with controllable relative emphasis on shape geometry or shape pose\. We demonstrate the theoretical validity, efficiency, discriminability, and wide applicability of \*\*XShapeEnc\*\* via extensive analysis and experiments across a wide range of shape\-aware tasks and our self\-curated XShapeCorpus dataset\. We envision \*\*XShapeEnc\*\* as a foundational tool for research beyond one\-dimensional sequential data and data\-driven, learning\-based encoding paradigms, paving the way for a unified spatial encoding framework for frontier 2D spatial intelligence\.

## Robust Statistical Estimators with Bounded Empirical Sensitivity

**Authors:** Valentio Iverson; Gautam Kamath; Argyris Mouzakis; Adam Smith

**ID:** 153880 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I4gx0BVDkz>) | [PDF](<https://openreview.net/pdf?id=I4gx0BVDkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153880>)

We introduce a new measure of robustness for statistical estimators, which we call empirical sensitivity\. An estimator $\\hat \\mu$ has bounded empirical sensitivity if, with high probability over a dataset $X = \(X\_1, \\dots, X\_n\) \\sim \\mathcal\{D\}^\{\\otimes n\}$, for any dataset $Y$ obtained by modifying at most $\\eta n$ points in $X$, we have that $\\hat \\mu\(Y\)$ is close to $\\hat \\mu\(X\)$\.   We study bounds on this quantity for the prototypical problem of Gaussian mean estimation\.  We prove new lower bounds, showing that for any estimator $\\hat \\mu$ which achieves an optimal $\\ell\_2$\-error bound of $O\(\\sqrt\{d/n\}\)$, the empirical sensitivity is at least $\\Omega\(\\eta \+ \\sqrt\{\\eta d/n\}\)$\.  The two terms arise due to obstructions on the mean and variance \(via an Efron\-Stein argument\) of such an estimator\. We show that this bound is tight up to logarithmic factors, by employing recent results for robust empirical mean estimation\.

## When Does Fine\-Tuning Extract Stored Knowledge? A Relation\-Covering Theory for One\-Layer Transformers

**Authors:** Ruichen Xu; Kexin Chen

**ID:** 151493 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aFLMTsDeTk>) | [PDF](<https://openreview.net/pdf?id=aFLMTsDeTk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151493>)

_Abstract unavailable from the accessible public sources._

## Decentralized Coupled Representation Learning

**Authors:** Zilin Li; Weiwei Xu; Xuchun Tong; Xuanbo Lu; Xuanqi Zhao; Ge Zhang

**ID:** 151009 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dcWLsSqiXL>) | [PDF](<https://openreview.net/pdf?id=dcWLsSqiXL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151009>)

The learning dynamics of decentralized coupled representation learning can be formulated as a non\-autonomous stochastic dynamical system, yet the macroscopic behavior of the resulting system on continuous manifolds remains poorly understood\. We establish three theoretical results for such coupled slow\-fast dynamics\. First, under a standard random geometric graph scaling regime, we prove that the infinitesimal generator of the discrete Markov process converges to the generator of an overdamped Langevin diffusion for every $f \\in C^3\(\\mathcal\{M\}\)$\. Second, under timescale separation, the stochastic parameter dynamics converge to a deterministic averaged flow that admits a row\-orthogonality Lyapunov function, controlling row\-space degeneracy and ruling out parameter divergence\. Third, under a spectral gap condition, the row space of the averaged parameter trajectory converges to the principal eigenspace of the induced covariance matrix\. Together, these results give a stochastic\-approximation limit theory for the coupled regime in which Markovian sampling and local subspace learning co\-evolve, showing that memoryless local interactions can induce a stable and structured macroscopic limit\.

## Safe Linear Bandits with Unknown Safety Gaps

**Authors:** MAOLI LIU; Zhuohua Li; Zeyu Zhang; Xiangxiang Dai; John C\. S\. Lui

**ID:** 156007 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1C06QNKbWx>) | [PDF](<https://openreview.net/pdf?id=1C06QNKbWx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156007>)

We study stochastic linear bandits with a linear safety constraint that depends on an unknown parameter, requiring every chosen action to be safe at every round with high probability, even though the safe decision set is initially unknown\. Prior work achieves $\\widetilde\{O\}\(\\sqrt\{T\}\)$ regret when the safety gap, i\.e\., the constraint slack at the optimal action, is strictly positive and known to the learner\.  However, only $\\widetilde\{O\}\(T^\{2/3\}\)$ regret is established in two distinct cases: when the gap is zero, and when the gap is positive but unknown\. This raises two natural questions: is the $\\widetilde\{O\}\(T^\{2/3\}\)$ bound tight in the zero\-gap case, and is knowledge of the gap necessary for $\\widetilde\{O\}\(\\sqrt\{T\}\)$ regret when the gap is positive? We answer both\. First, we establish an $\\Omega\(T^\{2/3\}\)$ lower bound for zero\-gap instances, showing that the existing upper bound is tight in its dependence on the horizon\.  Second, we propose Epoch\-SLUCB, an algorithm that attains $\\widetilde\{O\}\(\\sqrt\{T\}\)$ regret whenever the safety gap is positive, without requiring its value to be known\.  We also provide numerical simulations to demonstrate the performance of our algorithm\.

## MIND: Monge Inception Distance for Generative Models Evaluation

**Authors:** Quentin Berthet; Clement CREPY; Romuald Elie; Klaus Greff; Michael E Sander; Yu\-Han Wu

**ID:** 150991 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dkjQz0fwDs>) | [PDF](<https://openreview.net/pdf?id=dkjQz0fwDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150991>)

We propose the Monge Inception Distance \(MIND\), a metric for evaluating generative models that addresses key limitations of the widely adopted Fréchet Inception Distance \(FID\)\. The MIND metric leverages the sliced Wasserstein distance to compare distributions by averaging one\-dimensional optimal transport distances, efficiently computed via sorting\. This approach circumvents the estimation of high\-dimensional means and covariance matrices, which underlie FID's poor sample complexity and vulnerability to adversarial attacks\. We empirically demonstrate three primary advantages: \(i\) it is more sample\-efficient by one order of magnitude, \(ii\) it is faster to compute by two orders of magnitude, \(iii\) it is more robust to adversarial attacks such as moment\-matching\. We show that MIND with 5k samples can replace the evaluation performance of FID with 50k samples, providing high correlation with this standard benchmark and superior discriminative performance\. We further demonstrate that even smaller sample sizes \(e\.g\., 1k or 2k\) remain highly informative for rapid model iteration\.

## Inferential Theory of Learning as a Framework for Test\-Time Computation in Foundation Models

**Authors:** Mohit Prabhushankar; Ghassan AlRegib

**ID:** 139992\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139992

[Paper](<https://openreview.net/forum?id=zuBABOLynT>) | [PDF](<https://openreview.net/pdf?id=zuBABOLynT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139992>)

Foundation models are billion\-parameter neural networks that are trained under statistical learning principles to reason inductively regarding multifarious tasks at inference\. However, foundation models are increasingly deployed in settings where the statistical principles that they were trained on may not hold\. During deployment, users intervene in these systems' functionality through prompts, instructions, demonstrations, analogies, retrieval, tool calls, memory, verification, search, and multi\-step reasoning\. These operations change the effective knowledge state available at inference time, all of which are not well described by induction alone\. This paper argues that Michalski’s Inferential Theory of Learning \(ITL\) provides a useful conceptual basis for describing deployed foundation models as multistrategy, goal\-directed inference systems\. In ITL, learning is modeled as the transformation of knowledge through transmutations such as generalization, specialization, abstraction, concretion, association, discrimination, explanation, derivation, reformulation, insertion, deletion, replication, and sorting\. We reinterpret these classical transmutations in the context of modern test\-time computation techniques, showing that the functionality of reasoning models, intelligent prompting, retrieval\-augmented generation, tool use, memory, and agentic search can be understood as transmutation programs over knowledge states\. We then identify limitations of classical ITL for contemporary machine learning and propose a probabilistic extension in which transmutations are stochastic operators selected under uncertainty and cost\. Finally, we connect this view to a system\-level information bottleneck principle, quantifying the new knowledge that is acquired during the inference process\. The resulting framework positions ITL as a bridge between statistical learning, symbolic reasoning, abductive explanations, prompting, and agentic foundation models\.

## Generating in the Limit with Infinitely Many Hallucinations

**Authors:** Irene Strauss; Alexandra Butoi; Ryan Cotterell

**ID:** 151636\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151636

[Paper](<https://openreview.net/forum?id=Z78RzgzukZ>) | [PDF](<https://openreview.net/pdf?id=Z78RzgzukZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151636>)

The classic paradigm of language identification in the limit models learning as a game between an adversary, who reveals strings from an unknown target language, and a learner tasked with identifying that language\. The recently introduced framework of language generation in the limit shifted the objective to better reflect modern language modeling, requiring the learner to produce valid, unseen strings from the target language\. Related work highlighted a fundamental tension: a broad coverage of the target often comes at the cost of validity\. We introduce a new notion of precision and recast this problem as the classic recall\-\-precision trade\-off\. We analyze generation in the limit under varying constraints on enumeration, novelty, and validity, aimed at reflecting settings closer to those encountered by large language models\. A key contribution is our analysis of learners that are not eventually valid: we allow infinitely many mistakes, provided their frequency tends to zero so that precision remains $1$\. We show this relaxation can strictly increase recall when the adversary permanently withholds a large portion of the target language\. We also study a continuous relaxation of the novelty constraint, requiring only that a fixed fraction of outputs are novel\. Taken together, our results move toward a more realistic model of language generation where occasional errors and repetitions are unavoidable, but their rates are controlled\.

## Majority\-of\-Three is an Optimal PAC Learner

**Authors:** Grigoris Velegkas

**ID:** 150819\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150819

[Paper](<https://openreview.net/forum?id=f4VPeQiNfz>) | [PDF](<https://openreview.net/pdf?id=f4VPeQiNfz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150819>)

Finding the optimal sample complexity of realizable PAC learning was a major open problem in learning theory, which was settled by the breakthrough result of Hanneke \(2016\), building on prior work by Simon \(2015\)\. Hanneke's algorithm is quite involved and requires training $\\text\{poly\}\(n\)$ Empirical Risk Minimizers \(ERMs\) on carefully crafted subsets of the data\. Since using a single ERM call is provably suboptimal, recent work by Aden\-Ali \(2024\) proposed the majority\-of\-three ERMs as a candidate for the \*simplest\* optimal PAC learner, and established its optimality in the \*in\-expectation\* regime\. Their main open question was whether this algorithm is optimal in the classical \*high\-probability\* regime\. In this work, building on their ideas, we answer this question affirmatively\.

## Generalization Analysis of Biased Stochastic Gradient Methods for Minimax Problems

**Authors:** Shuang Zeng; Yunwen Lei; Yiming Ying

**ID:** 154714\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154714

[Paper](<https://openreview.net/forum?id=BXzpp9Ihuq>) | [PDF](<https://openreview.net/pdf?id=BXzpp9Ihuq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154714>)

Minimax optimization refers to a class of optimization problems with some variables to minimize and other variables to maximize\. Biased stochastic gradient methods have shown practical success in solving minimax problems to either improve robustness, enhance communication efficiency, or decrease computational costs\. These successes motivate a lot of theoretical works to study the convergence of biased stochastic gradient methods, while their generalization analysis remains untouched\. In this paper, we present the first framework to study the stability and generalization of biased stochastic gradient methods for minimax problems\. We establish a connection between stability and generalization for minimax problems by relaxing the existing bounded gradient assumption to a bounded second moment condition\. We then introduce a generalized Lipschitz\-type condition on bias and gradient estimators, and derive a general stability bound to clarify the connection among bias, gradient estimators and stability\. We apply our general analysis to Zeroth\-order and Clipped stochastic gradient descent ascent \(SGDA\), and derive stability bounds that match those of SGDA under appropriate smoothing/clipping parameters\. We combine stability and convergence analyses together, and derive optimal excess risk bounds of order $1/\\sqrt\{n\}$, where $n$ is the sample size\.

## Learning Distributions from Multiple Data Providers

**Authors:** Jon Kleinberg; Amin Saberi; Xizhi Tan; Grigoris Velegkas

**ID:** 154089\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154089

[Paper](<https://openreview.net/forum?id=GJbuWXhmG5>) | [PDF](<https://openreview.net/pdf?id=GJbuWXhmG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154089>)

Motivated by learning from heterogeneous and overlapping data providers, we study a stylized model of distribution learning from restricted conditional samples\. The goal is to learn an unknown distribution $p$ on a finite domain $\[n\]$\. The learner is given a fixed family of queryable sets $\\mathcal S \\subseteq 2^\{\[n\]\}$, and each query to $S \\in \\mathcal S$ returns an independent sample from the conditional distribution $p\(\\cdot \\mid S\)$\.  Learnability is governed by the \\emph\{co\-occurrence graph\} associated with $\\mathcal S$: two domain elements are connected if they appear together in some queryable set\. Pointwise consistency is achievable  when this graph is connected on the target support\. PAC learning requires more: it is possible  when the co\-occurrence graph is complete\.  The sample complexity of PAC learning ranges from nearly linear to quadratic\. Every query family with complete co\-occurrence graph admits sample complexity $\\widetilde O\(n^2/\\epsilon^2\)$, and this bound is tight in the worst case\. On the other hand, if every subset is queryable, the optimal worst\-case complexity improves to $\\Theta\(n/\\epsilon^2\)$\. More generally, we identify \\emph\{hierarchical comparability\} as a sufficient structural condition on $\\mathcal S$ under which the optimal complexity is nearly linear, $\\widetilde \\Theta\(n/\\epsilon^2\)$, with pairwise query families as a canonical example\. Finally, the full range of polynomial rates between linear and quadratic is attainable: for every $\\alpha \\in \(1,2\)$, there exists a query family with optimal PAC rate $\\widetilde \\Theta\(n^\\alpha/\\epsilon^2\)$\.

## Tight Gap\-Dependent Regret Bounds and Problem\-Independent Bounds for Cost\-aware Cascading Bandits

**Authors:** Yuji TAMAKOSHI; Shinji Ito

**ID:** 149412\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149412

[Paper](<https://openreview.net/forum?id=qE6UhWAHvg>) | [PDF](<https://openreview.net/pdf?id=qE6UhWAHvg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149412>)

We study cost\-aware cascading bandits, where a learner selects an ordered subset of options, tests them sequentially until the first success, and pays the costs of all tested options\. In this problem, regret comes from both testing inefficient options and placing options in a suboptimal order, but existing analyses do not separate these effects for inefficient options and therefore yield an inverse\-square dependence on the gap $c\_i\-\\theta\_i$\. We develop a regret decomposition based on intermediate policies that reorder the remaining suffix and remove inefficient options one position at a time\.  This allows us to quantify the incremental regret incurred when each option is tested\. As a consequence, we show that the regret of CC\-UCB admits a problem\-dependent bound of $O\(\\sum\_\{i:\\theta\_i/c\_i&lt;1\}\\log T/\(c\_i\-\\theta\_i\)\)$ up to additive terms and a problem\-independent bound of order $\\tilde O\(L\\sqrt\{T\}\)$\. We further prove that the minimax regret is bounded from below by $\\Omega\(\\sqrt\{LT\}\)$ by reducing standard multi\-armed bandits to a special case of the model\. Finally, we propose CC\-UCBv2, which removes the need to specify a positive lower bound on costs and handles zero\-cost options by separating empirically zero\-cost options from the others\.  Numerical experiments show the effect of misspecified cost lower bounds and demonstrate that the proposed modification can reduce regret in representative instances involving zero or misspecified costs\.

## Post\-Processing Guarantees for Classification under Linear\-Fractional Performance Metrics

**Authors:** Andrea Della Vecchia

**ID:** 155732\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155732

[Paper](<https://openreview.net/forum?id=3Leoi1uMNP>) | [PDF](<https://openreview.net/pdf?id=3Leoi1uMNP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155732>)

This paper studies binary classification under generalized performance metrics, going beyond standard misclassification error\. We focus on linear\-fractional measures—including the $F$\-score and Jaccard index—which are widely used in class\-imbalanced settings\. We first provide a unified characterization of the optimal classifier, showing that it admits a thresholding structure on the regression function\. This reduces the original infinite\-dimensional, non\-decomposable optimization problem to the estimation of a single scalar parameter\. Building on this result, we analyze plug\-in classifiers that combine a regression estimator with a data\-driven estimate of the optimal threshold\. We show that this threshold is characterized as the solution of a fixed\-point equation depending only on the marginal distribution, enabling its estimation using unlabeled data and avoiding standard validation\-based procedures\. Our main contribution is a finite\-sample analysis of this approach\. We derive excess risk bounds that decompose the error into contributions from regression estimation, threshold estimation, and sampling effects, providing a modular understanding of learning under non\-decomposable metrics\. Under standard margin assumptions, we further establish fast convergence rates\. Our results yield a unified theoretical framework for plug\-in classification under linear\-fractional metrics, extending prior analyses beyond specific measures such as the $F$\-score\. Empirical results on synthetic and real datasets support our theoretical findings\.

## Borda\-Based Fair Multi\-User Dueling Bandit in Tabular and Generalized Linear Settings

**Authors:** Maheed H Ahmed; Mahsa Ghasemi

**ID:** 155261\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155261

[Paper](<https://openreview.net/forum?id=71S8aArMXO>) | [PDF](<https://openreview.net/pdf?id=71S8aArMXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155261>)

The increasing prevalence of preference\-based learning, particularly for machine learning models interacting with human users, gives rise to scenarios where the model's decision should cater to the preferences of a number of users\. Due to the inherent misalignments in such preferences, it is natural to seek a fair decision\-making paradigm\. Motivated by that, we pose the problem of fair multi\-user dueling bandit, where each user's preferences over pairs of actions are encoded by a preference matrix unknown to the agent\. We design a Nash social welfare objective based on the Borda scores of the individual user preferences\. The notion of the Borda score measures the average likelihood of an action being preferred over the other actions, and importantly, it does not require the existence of a completely dominant action\. Considering online learning in this general setting, we construct hard instances and establish a minimax lower bound on the achievable regret\. We also design an explore\-then\-commit algorithm and derive an upper bound on its worst\-case regret\. Furthermore, we formulate a fair multi\-user generalized linear dueling bandit to enable modeling large action spaces, which typically necessitate a structured representation\. In this setting, too, we establish a lower bound on regret and an upper bound on regret for a proposed explore\-then\-commit algorithm\.

## Iterative Chow Filtering for Learning with Distribution Shift

**Authors:** Gautam Chandrasekaran; Georgios Gkrinias; Adam Klivans; Konstantinos Stavropoulos; Arsen Vasilyan

**ID:** 152685\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152685

[Paper](<https://openreview.net/forum?id=RBxhiGn1aP>) | [PDF](<https://openreview.net/pdf?id=RBxhiGn1aP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152685>)

Recent work due to Goel et al\.\~gave the first efficient algorithms for learning with distribution shift in the challenging PQ framework, where a learner receives labeled training examples and unlabeled test examples and must make correct predictions on the test set but is allowed to abstain from predicting on out\-of\-distribution points\.  Their results rely on $\{\\cal L\}\_2$ sandwiching  approximations, a strong requirement that leads to poor bounds for several basic function classes such as DNF formulas\.  Here we show that the weaker notion of $\{\\cal L\}\_1$ sandwiching suffices for efficient PQ learning\. As a consequence, we obtain the first quasipolynomial\-time PQ learning algorithm for DNFs under the uniform distribution and essentially match the guarantees known for ordinary PAC learning\. More broadly, our bounds provide exponential improvements for several classes including constant depth circuits and constant degree polynomial threshold functions\. Our main technical ingredient is \*Iterative Chow Filtering\*, a new procedure that uses low\-degree Chow parameters to identify and remove test points incompatible with the training distribution\.

## Less Structure is More: Minimal Representations for Supervised Learning

**Authors:** Menghui Zhou; Vitaveska Lanfranchi; Po Yang

**ID:** 148300\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148300

[Paper](<https://openreview.net/forum?id=yt1Bywu2lu>) | [PDF](<https://openreview.net/pdf?id=yt1Bywu2lu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148300>)

Many real\-world applications require highly interpretable machine learning systems, particularly in high\-stakes domains such as healthcare\. A promising recent direction is the paradigm of Maximal Coding Rate Reduction \(MCR$^2$\), which seeks to characterize and preserve the low\-dimensional structure underlying each class\. However, we find that exhaustively preserving structural information is often unnecessary and can even be detrimental in supervised learning, especially under noisy and uncertain real\-world conditions, as it may overly constrain the fitting flexibility of the model\. In contrast, we propose a simple yet effective framework, termed SimCoding, which captures only minimal structural information for each class\. Despite relying on substantially less structural information, SimCoding significantly improves the generalization ability and robustness of deep models\. Extensive experiments across diverse benchmark datasets demonstrate the effectiveness of SimCoding\. We further validate SimCoding on a challenging real\-world application, Parkinson’s disease severity assessment from free\-living human activity signals, where it consistently achieves strong robustness and outperforms competing methods\. Moreover, SimCoding can be naturally extended to incremental learning scenarios, where it substantially alleviates catastrophic forgetting and consistently surpasses strong baselines\.

## Efficient Learning of Truncated Boolean Product Distributions: Influence to the Rescue

**Authors:** Rohan Chauhan; Ioannis Panageas

**ID:** 150434 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i4acsiLApw>) | [PDF](<https://openreview.net/pdf?id=i4acsiLApw>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150434>)

Learning the natural parameters $z \\in \\mathbb\{R\}^n$ of discrete distributions $\\mu\_z$ from independent samples constrained to a subset $S \\subseteq \\\\\{0,1\\\\\}^n$ is a foundational challenge in high\-dimensional statistics\. Existing methods for efficiently estimating truncated Boolean product distributions, notably the work of \[Fotakis et al' COLT'20, Algorithmica '22\], require either strong local connectivity assumptions on $S$ \-\- a property denoted \*fatness\* \-\- or stringent anti\-concentration assumptions and necessitate the total mass of the truncation set to be a constant with respect to $n$\. Moreover, the results in \[Fotakis et al' COLT'20, Algorithmica '22\] suffer from sample complexities that scale as $\\Omega\(2^n\)$ if the mass of $S$ is exponentially small in $n$\.   In this work, we circumvent these limitations by analyzing the geometry of $S$ under the measure $\\mu\_z$\. We refine the existing parameter estimation guarantees under the fatness assumption, improving the prior sample complexity to $\\mathcal\{O\}\( \\log n / \\epsilon^2\)$ for $\\ell\_\\infty$\-recovery, matching the untruncated minimax rate\. We further generalize fatness using the notion of influence utilized in the analysis of Boolean functions and provide sufficient conditions for efficient inference\. Notably, unlike previous work, our method does not require sampling at arbitrary parameterizations of the model and instead relies on gradient descent\. Lastly, we establish a theoretical lower bound demonstrating the sample complexity exhibits an intrinsic exponential dependence on the width of the model and the minimum distance between elements in the set\.

## Generalization at the Edge of Stability

**Authors:** Mario Tuci; Caner Korkmaz; Umut Simsekli; Tolga Birdal

**ID:** 154976 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=9UYTAT1rtr>) | [PDF](<https://openreview.net/pdf?id=9UYTAT1rtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154976>)

Training modern neural networks often relies on large learning rates, operating at the \*edge of stability\*, where the optimization dynamics exhibit oscillatory and \*chaotic behaviour\*\. Empirically, this regime often yields improved generalization performance, yet the underlying mechanism remains poorly understood\. In this work, we represent stochastic optimizers as \*random dynamical systems\*, which often converge to a \*fractal attractor set\* \(rather than a point\) with a smaller intrinsic dimension\. Building on this connection and inspired by Lyapunov dimension theory, we introduce a novel notion of dimension, coined the \`sharpness dimension', and prove a generalization bound based on this dimension\. Our results show that generalization in the chaotic regime depends on the \*complete\* Hessian spectrum and the structure of its \*partial determinants\*, highlighting a complexity that cannot be captured by the trace or spectral norm considered in prior work\. Experiments across various MLPs and transformers validate our theory while also providing new insights into the recently observed phenomenon of grokking\.

## Looking Through the Mirror: Minimax\-Optimal Regularized Regrets in Online Learning and Bandits

**Authors:** Junghyun Lee; Yujun Kim; Chulhee Yun; Se\-Young Yun

**ID:** 150598 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gxjUmgllX0>) | [PDF](<https://openreview.net/pdf?id=gxjUmgllX0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150598>)

_Abstract unavailable from the accessible public sources._

## Generalization Bounds for Neural Networks with Sparse Connectivity

**Authors:** Nong Minh Hieu; Antoine Ledent

**ID:** 149238 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtm9VdoJ3N>) | [PDF](<https://openreview.net/pdf?id=rtm9VdoJ3N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149238>)

_Abstract unavailable from the accessible public sources._

## Testable and Actionable Calibration for Full Swap Regret

**Authors:** Konstantina Bairaktari; Lunjia Hu; Huy Nguyen; Jonathan Ullman

**ID:** 148311 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yls0nG3VKg>) | [PDF](<https://openreview.net/pdf?id=yls0nG3VKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148311>)

AI generated predictions increasingly inform decision making in critical tasks, and therefore must be trustworthy\.  One widely used measure of trustworthiness is calibration, which requires that the predictions match the true frequencies and can be treated like real probabilities of a given outcome\.  However, defining calibration is subtle, and designing good measures of calibration error has been an active topic of recent research\.  The first goal is to find calibration measures that are \*actionable\*, meaning they can inform decision makers about their utility loss when predictions are treated as true probabilities, which is known as swap regret\.  The second goal is to find calibration measures that are \*testable\*, meaning that calibration error can be measured from a small sample of predictions and outcomes\.  Although these are very basic requirements, there is no existing calibration measure that fully satisfies both properties, and all existing measures relax actionability by bounding a weaker notion of swap regret, or relax testability by having suboptimal estimation error\. We introduce a new calibration measure, Soft\-Binned Calibration Decision Loss \(SCDL\), which we prove is fully actionable without weakening either requirement, and testable with nearly optimal error rate\. In addition, SCDL satisfies other desired properties such as continuity and consistency\.  We also provide a set of experiments confirming that the theoretical advantages of SCDL compared to other measures lead to better performance in practice\.

## PAC\-Bayesian Bounds for Learning Partially Observed Stochastic Linear Time\-Invariant State\-Space Systems with Inputs and Sub\-Gaussian Noise

**Authors:** Mihaly Petreczky; Mohamad Al Ahdab; John Leth

**ID:** 154157 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FpjDuXISKf>) | [PDF](<https://openreview.net/pdf?id=FpjDuXISKf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154157>)

In this paper we derive a Probably Approximately Correct \(PAC\)\-Bayesian error bound for partially observed linear time\-invariant \(LTI\) stochastic dynamical systems in state\-space form with inputs\.  Such bounds are widespread in machine learning, and they are useful for characterizing the predictive power of models learned from finitely many data points\. The bound derived in this paper relates the expectation of prediction errors with the prediction error generated by the model on the data used for learning\. In addition, we show that it can also be used to derive bounds for the parameter estimation error\. In turn, this allows us to provide finite\-sample error bounds  for the prediction error and parameter estimation error for a wide class of system identification algorithms\. Furthermore, as LTI systems are a sub\-class of recurrent neural networks \(RNNs\), these error bounds could be a first step towards PAC\-Bayesian bounds for RNNs\.

## A Near\-optimal SQ Lower Bound for Smoothed Agnostic Learning of Boolean Halfspaces

**Authors:** Tim Sinen

**ID:** 150497 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hf4WNJ6sRf>) | [PDF](<https://openreview.net/pdf?id=hf4WNJ6sRf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150497>)

We study the complexity of smoothed agnostic learning of halfspaces on $\\\{\\pm 1\\\}^n$ under uniform marginals in the model of \\citet\{KM25\} where each input coordinate is independently flipped with probability $\\sigma \\in \(0, \{1\}/\{2\}\)$\. We show that $L^1$ polynomial regression achieves runtime and sample complexity $\\tilde\{O\}\(n^\{O\(\\log\(1/\\varepsilon\)/\\sigma\)\}\)$, and prove a nearly matching Statistical Query complexity lower bound of $n^\{\\Omega\(\\log\(1\+\\sigma/\\varepsilon^2\)/\\sigma\)\}$\. This complements the recent work of \\citet\{DK26\}, which established analogous bounds in the continuous setting under Gaussian marginals\.

## One\-Layer Transformers Provably Learn In\-Context K\-Nearest Neighbor Prediction with Chain\-of\-Thought

**Authors:** Lyumin Wu; Yuan Cao

**ID:** 153564 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KRMF9RmzSJ>) | [PDF](<https://openreview.net/pdf?id=KRMF9RmzSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153564>)

Chain\-of\-Thought \(CoT\) enables transformers to solve complex reasoning tasks by generating intermediate reasoning steps\. Despite strong empirical success, the mechanisms by which such reasoning abilities emerge during training remain poorly understood, particularly from a theoretical perspective\. In this work, we study this question in a stylized yet fully analyzable setting: in\-context $\\mathrm\{K\}$\-nearest\-neighbor \($\\mathrm\{K\}$\-NN\) prediction with a one\-layer transformer\. Earlier work has demonstrated that one\-layer transformers can be trained to perform $1$\-NN without CoT \\citep\{Li2024One\} by having the softmax attention attend to the nearest neighbor in context\. However, this result on $1$\-NN cannot be extended to $\\mathrm\{K\}$\-NN for $K&gt;1$, as softmax attention is much less naturally suited to attending to the 2nd through $K$\-th nearest neighbors\. We first give a rigorous negative result showing that this limitation already appears on a well\-separated class of binary classification tasks for odd $K&gt;1$\. We then give an explicit construction of a one\-layer transformer, and show that it can solve $\\mathrm\{K\}$\-NN via CoT reasoning\. We further prove that, under a stylized training setup, gradient descent can recover this construction, thereby showing that transformers can acquire the capability to solve $\\mathrm\{K\}$\-NN through training\. In addition, we show that the resulting trained model applies to a broader test class than that assumed in the training analysis\. Our results shed light on how CoT expands the ability of transformers to learn and solve tasks that are otherwise hard to solve\.

## Implicit Bias in State Space Models and Linear Autoregressive Training

**Authors:** Gal Katzhendler; Gal Vardi; Gilad Yehudai

**ID:** 150321 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iz9ERtKfxJ>) | [PDF](<https://openreview.net/pdf?id=iz9ERtKfxJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150321>)

_Abstract unavailable from the accessible public sources._

## Invariance and Body\-Order Compose Additively: Minimax Rates on $\\mathrm\{SO\}\(3\)^n$

**Authors:** Zheshuo Li; Zhengxiong Li

**ID:** 154396 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DtDqsME3PW>) | [PDF](<https://openreview.net/pdf?id=DtDqsME3PW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154396>)

_Abstract unavailable from the accessible public sources._

## Corruptions of Supervised Learning Problems: Typology and Mitigations

**Authors:** Laura Iacovissi; Nan Lu; Robert Williamson

**ID:** 156659 | **Topic source:** official | **Abstract source:** missing | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156659>)

_Abstract unavailable from the accessible public sources._

## Diagonalizing the Softmax: Hadamard Initialization for Tractable Cross\-Entropy Dynamics

**Authors:** Connall Garrod; Jonathan Keating; Christos Thrampoulidis

**ID:** 152327 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TtyvY0C2eo>) | [PDF](<https://openreview.net/pdf?id=TtyvY0C2eo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152327>)

Cross\-entropy \(CE\) loss is central to deep learning, but existing theory often relies on simplifications—such as squared loss or convex models—that miss key aspects of CE optimization\. In this work, we study multi\-class CE dynamics using a two\-layer linear network with orthogonal inputs, the simplest non\-convex setting where the CE implicit bias remains unresolved\. This coincides with the unconstrained features model used to study neural collapse \(NC\)\. Our analysis is based on a key observation: Hadamard initialization diagonalizes the softmax operator\. This allows us to extend the spectral initialization framework that Saxe et al\. \(2013, 2019\) developed for squared loss\. We prove convergence to NC under spectral CE training and give the first finite\-time analysis in this setting via an explicit Lyapunov function that decreases monotonically to NC despite spurious critical points\. We further identify CE\-specific phenomena absent under squared loss—coupling, non\-monotonic convergence, qualitative dependence on the number of classes, and exponential slowdowns\. We also characterize the role of network width and show empirically that spectral dynamics qualitatively model small random initialization\.

## Remember the Decision, Not the Description: A Rate\-Distortion Framework for Agent Memory

**Authors:** mingxi Zou; Zhihan Guo; Langzhang Liang; Zhuo Wang; Qifan Wang; Qingsong Wen; Irwin King; Lizhen Qu; Zenglin Xu

**ID:** 150643 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gYBIdco0A1>) | [PDF](<https://openreview.net/pdf?id=gYBIdco0A1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150643>)

Long\-horizon language agents must operate under limited runtime memory, yet existing memory mechanisms often organize experience around descriptive criteria—relevance, salience, or summary quality\.  For an agent, however, memory is valuable not because it faithfully describes the past, but because it preserves the distinctions between histories that must remain separated under a fixed budget to support good decisions\. We cast this as a decision\-centric rate\-distortion problem, measuring memory quality by the loss in achievable decision quality induced by compression\.  This yields an exact forgetting boundary for what can be safely forgotten, and a memory\-distortion frontier characterizing the optimal tradeoff between memory budget and decision quality\.  Motivated by this decision\-centric view of memory, we propose \*\*DeMem\*\*, an online memory learner that refines its partition only when data certify that a shared state would induce decision conflict, and prove near\-minimax regret guarantees\.  On both controlled synthetic diagnostics and long\-horizon conversational benchmarks, DeMem yields consistent gains under the same runtime budget, supporting the principle that memory should preserve the distinctions that matter for decisions, not descriptions\.

## Escaping Parameter Space: Tight Generalization Bounds via Representation Quality

**Authors:** Niclas A Göring; Shuofeng Zhang; Branton DeMoss; Ard Louis

**ID:** 154899 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A66lKoZWY8>) | [PDF](<https://openreview.net/pdf?id=A66lKoZWY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154899>)

We derive a tight generalization bound for deterministic neural networks based on their last hidden layer representations\. By evaluating representation quality with a parameter\-free $k$\-nearest\-neighbor \($k$\-NN\) classifier, our certificate avoids traditional parameter\-space complexity measures, KL divergences to a posterior, weight norms, and compression\. The bound is tight: trained from scratch, it reaches an 8\.0 percentage point gap to test error on CIFAR\-10 \(ResNet\-18\) and yields the first non\-vacuous certificates we are aware of on CIFAR\-100; with frozen DINOv2 representations, it certifies at 1\.4\\% on CIFAR\-10 and 23\.1\\% on 1,000\-class ImageNet\. It decomposes additively into three empirical, independently measurable quantities: local class geometry \($k$\-NN decoder error\), decoder\-network agreement, and training stability\. This allows the bound to act as a diagnostic tool: we demonstrate that actively destroying local class geometry eliminates generalization while leaving dataset memorization intact, identifying class geometry as a causally relevant mechanism for generalization\. Finally, we show that learned representations are significantly less sensitive to weight noise than linear readouts, suggesting  why parameter\-space certificates often struggle to remain tight\.

## Online Bernstein\-von Mises theorem

**Authors:** Jeyong Lee; Junhyeok Choi; Minwoo Chae

**ID:** 156664 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156664>)

Online learning is an inferential paradigm in which parameters are updated incrementally
from sequentially available data, in contrast to batch learning, where the entire dataset is
processed at once\. In this paper, we assume that mini\-batches from the full dataset become
available sequentially\. The Bayesian framework, which updates beliefs about unknown parameters after observing each mini\-batch, is naturally suited for online learning\. At each step, we update the posterior distribution using the current prior and new observations,
with the updated posterior serving as the prior for the next step\. However, this recursive
Bayesian updating is rarely computationally tractable unless the model and prior are conjugate\. When the model is regular, the updated posterior can be approximated by a normal distribution, as justified by the Bernstein–von Mises theorem\. We adopt a variational approximation at each step and investigate the frequentist properties of the final posterior
obtained through this sequential procedure\. Under mild assumptions, we show that the
accumulated approximation error becomes negligible once the mini\-batch size exceeds a
threshold depending on the parameter dimension\. As a result, the sequentially updated
posterior is asymptotically indistinguishable from the full posterior\.

## Training\-free Spatially Grounded Geometric Shape Encoding

**Authors:** Yuhang He

**ID:** 150307\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150307

[Paper](<https://openreview.net/forum?id=j770IgUZZG>) | [PDF](<https://openreview.net/pdf?id=j770IgUZZG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150307>)

In this work, we introduce a novel training\-free encoding framework, dubbed \*\*XShapeEnc\*\*, that encodes an arbitrary spatially grounded 2D geometric shape into a compact representation exhibiting five favorable properties, including invertibility, adaptivity, generality and controllability\. Specifically, a 2D spatially grounded geometric shape is decomposed into its normalized geometry within the unit disk and its pose vector, where the pose is further transformed into a harmonic pose field that also lies within the unit disk\. A set of orthogonal Zernike basis is constructed to encode shape geometry and pose either independently or jointly, with controllable relative emphasis on shape geometry or shape pose\. We demonstrate the theoretical validity, efficiency, discriminability, and wide applicability of \*\*XShapeEnc\*\* via extensive analysis and experiments across a wide range of shape\-aware tasks and our self\-curated XShapeCorpus dataset\. We envision \*\*XShapeEnc\*\* as a foundational tool for research beyond one\-dimensional sequential data and data\-driven, learning\-based encoding paradigms, paving the way for a unified spatial encoding framework for frontier 2D spatial intelligence\.

## Robust Statistical Estimators with Bounded Empirical Sensitivity

**Authors:** Valentio Iverson; Gautam Kamath; Argyris Mouzakis; Adam Smith

**ID:** 153880\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153880

[Paper](<https://openreview.net/forum?id=I4gx0BVDkz>) | [PDF](<https://openreview.net/pdf?id=I4gx0BVDkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153880>)

We introduce a new measure of robustness for statistical estimators, which we call empirical sensitivity\. An estimator $\\hat \\mu$ has bounded empirical sensitivity if, with high probability over a dataset $X = \(X\_1, \\dots, X\_n\) \\sim \\mathcal\{D\}^\{\\otimes n\}$, for any dataset $Y$ obtained by modifying at most $\\eta n$ points in $X$, we have that $\\hat \\mu\(Y\)$ is close to $\\hat \\mu\(X\)$\.   We study bounds on this quantity for the prototypical problem of Gaussian mean estimation\.  We prove new lower bounds, showing that for any estimator $\\hat \\mu$ which achieves an optimal $\\ell\_2$\-error bound of $O\(\\sqrt\{d/n\}\)$, the empirical sensitivity is at least $\\Omega\(\\eta \+ \\sqrt\{\\eta d/n\}\)$\.  The two terms arise due to obstructions on the mean and variance \(via an Efron\-Stein argument\) of such an estimator\. We show that this bound is tight up to logarithmic factors, by employing recent results for robust empirical mean estimation\.

## The Price of Choosing Examples: Context Overfitting in Adaptive In\-Context Learning

**Authors:** Xiaoyu Li; Jiangxuan Long

**ID:** 153995 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Gzmzr2tIux>) | [PDF](<https://openreview.net/pdf?id=Gzmzr2tIux>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153995>)

In\-context learning is usually analyzed as if the examples in the prompt were sampled before the learner is chosen\. In deployed systems they are not: examples are retrieved, filtered, re\-ranked, edited, and repeatedly tested after seeing the query and the data store\. We formalize this gap by treating prompt construction as adaptive data analysis through a conditional stochastic\-kernel calculus\. Our main quantity is the \\emph\{context capacity\}, the mutual information or approximate max\-information between the data store and the final prompt transcript\. For any frozen in\-context learner and any adaptive context pipeline with capacity $\\kappa$, we prove a finite\-sample context generalization bound of order $\\sqrt\{\\kappa/k\}$, where $k$ is the number of examples that enter the prompt\. We strengthen it to a sub\-gamma transport inequality with Bernstein curvature, prove a matching lower bound, and derive two PAC\-Bayesian retrieval rules: a first\-order Gibbs rule and a self\-normalized second\-order rule\. Finally, we instantiate the theory for Bayesian linear in\-context regression, including an order\-statistics analysis of query\-aligned top\-$k$ Gaussian retrieval\. The results separate context quality from context certification: longer or more relevant contexts improve risk only when the procedure used to choose them is stable enough for selected\-context evidence to transfer\.

## Anytime\-Valid PAC\-Bayes Certificates for Adaptive Test\-Time Scaling

**Authors:** Xiaoyu Li; Jiangxuan Long

**ID:** 153451 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LBokJOYjeC>) | [PDF](<https://openreview.net/pdf?id=LBokJOYjeC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153451>)

Test\-time scaling systems often choose how much to sample, which prompt to use, and which verifier or aggregation rule to trust after repeatedly inspecting a calibration set\.  Standard validation error bars are not valid after this adaptive selection\.  We model a test\-time scaling recipe as a randomized predictor with a random cost and prove a time\-uniform PAC\-Bayes certificate that holds simultaneously over all calibration times, all posterior mixtures over recipes, and all data\-dependent stopping rules\.  Thus the same event covers the recipe search that precedes deployment, not merely the fixed recipe finally reported\.  For a finite grid of budgets and verifiers, the penalty is the familiar $\\log M/n$, while non\-uniform priors and localized posterior mixtures give sharper certificates for structured searches\.  We specialize the result to self\-consistency and show a complementary margin law: plurality voting improves exponentially in the sample budget only on examples where the correct answer is the generator's unique mode; otherwise more compute can provably amplify errors\.  The same margin analysis yields an oracle water\-filling law for compute allocation\.  A synthetic audit quantifies the optimism caused by adaptive budget selection, and a 192\-example GSM8K audit using gpt\-4\.1\-mini generations illustrates risk\-cost reporting for a real inference pipeline\.  The results give a lightweight, distribution\-free way to report risk and compute claims for adaptive inference systems\.

## On Concentration Inequalities for Sampling without Replacement

**Authors:** Shaojie Li; Bowei Zhu; Yong Liu

**ID:** 155488 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5ETAqPLdr6>) | [PDF](<https://openreview.net/pdf?id=5ETAqPLdr6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155488>)

This paper studies concentration inequalities for sampling without replacement\. We introduce a general inequality that provides simple guidelines for proving concentration inequalities, offers a degree of unification of existing results, and is strong enough to yield sharper bounds\. As applications, we revisit several standard statistics and either recover classical inequalities through streamlined proofs or strengthen them to tighter bounds, with rates optimal up to constants\.

## Online Budget Allocation with Censored Semi\-Bandit Feedback

**Authors:** François Bachoc; Nicolò Cesa\-Bianchi; Tom Cesari; Roberto Colomboni

**ID:** 151323\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151323

[Paper](<https://openreview.net/forum?id=bMskKiSDl8>) | [PDF](<https://openreview.net/pdf?id=bMskKiSDl8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151323>)

We study a stochastic budget\-allocation problem over $K$ tasks\. At each round $t$, the learner chooses an allocation $X\_t \\in \\Delta\_K$\. Task $k$ succeeds with probability $F\_k\(X\_\{t,k\}\)$, where $F\_1,\\dots,F\_K$ are nondecreasing \*budget\-to\-success\* curves, and upon success yields a random reward with unknown mean $\\mu\_k$\. The learner observes which tasks succeed, and observes a task's reward \*only\* upon success \(\*censored\* semi\-bandit feedback\)\. This model captures, for instance, splitting payments across crowdsourcing workers or distributing bids across simultaneous auctions, and subsumes stochastic multi\-armed bandits and semi\-bandits\. We design an optimism\-based algorithm that operates under censored semi\-bandit feedback\. Our main result is an instance\-dependent bound showing that in \*diminishing\-returns\* regimes, the regret of this algorithm scales polylogarithmically with the horizon $T$ without any \*ad hoc\* tuning\. For general nondecreasing curves, we prove that the same algorithm \(with the same tuning\) achieves a worst\-case regret upper bound of $\\tilde O\(K\\sqrt\{T\}\)$\. Finally, we establish a matching worst\-case regret lower bound of $\\Omega\(K\\sqrt\{T\}\)$ that holds even for \*full\-feedback\* algorithms, highlighting the intrinsic hardness of our problem outside diminishing returns\.

## Tight $L\_\\infty$ Sample Complexity for Low\-Degree and Sparse Boolean Polynomials

**Authors:** Jasper van Doornmalen; Mathieu Molina; Victor Verdugo; José Verschae

**ID:** 150147\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150147

[Paper](<https://openreview.net/forum?id=kLdvyyeVCk>) | [PDF](<https://openreview.net/pdf?id=kLdvyyeVCk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150147>)

Motivated by the optimization of bounded binary black\-box functions, we study the problem of learning polynomial surrogates over the Boolean hypercube\. To ensure that optimizing the surrogate yields good solutions for the underlying objective, we require uniform $L\_\\infty$\-error guarantees rather than the usual $L\_2$\-type guarantees\. We characterize the minimax sample complexity of uniform estimation under subgaussian noise for two classes of bounded polynomials\. First, for polynomials of degree at most $d$ on $n$ variables, the sample complexity scales as $n^\{d\+1\}$\. Second, for $s$\-sparse Fourier\-Walsh polynomials with $s \\leq n$, it scales as $ns^2$\. These rates differ structurally from the noiseless setting, where uniform exact recovery scales as $n^d$ and $ns$, respectively\. Our lower bounds hold even for arbitrary adaptive learners, showing that the additional factors are intrinsic to the noisy cases\. Standard Fourier\-analysis tools for the $L\_2$\-norm do not naturally extend to the $L\_\\infty$\-setting in a way that yields uniform guarantees\. Our proofs overcome this difficulty by relying on suitably chosen auxiliary norms that serve as proxies for controlling the $L\_\\infty$\-error\. Together, our results provide a tight characterization of the sample complexity of learning optimization\-safe polynomial surrogates\.

## Learning Theory of Transformers: Local\-to\-Global Approximation via Softmax Partition of Unity

**Authors:** Zhongjie Shi; Wenjing Liao

**ID:** 152703\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152703

[Paper](<https://openreview.net/forum?id=R1SSvVTsSW>) | [PDF](<https://openreview.net/pdf?id=R1SSvVTsSW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152703>)

This paper investigates the learning theory of Transformer networks for regression tasks on the compact Euclidean domain $\[0,1\]^d$ and $d$\-dimensional compact Riemannian manifolds\. We propose a novel constructive approximation framework for Transformers that builds local approximations of the target function and aggregates them into a global approximation via softmax partition of unity\. This approach leverages the attention mechanism to achieve spatial localization  through affine transformations of the input\. The softmax activation plays a crucial role in aggregating local approximations to a global output\. From an approximation perspective, we prove that a  dense Transformer equipped with only  two encoder blocks and standard single\-hidden\-layer point\-wise feed\-forward networks can achieve a uniform $\\varepsilon$\-approximation error for $\\alpha$\-H\\"older continuous functions with $\\alpha \\in \(0,1\]$ using $\\mathcal\{O\}\(\\varepsilon^\{\-d/\\alpha\}\)$ total parameters\. Building upon this approximation guarantee, we establish a near minimax\-optimal generalization error bound of order $\\mathcal\{O\}\\big\(n^\{\-\\frac\{2\\alpha\}\{2\\alpha\+d\}\} \\log n\\big\)$ for the empirical risk minimizer, where $n$ is the training data size\.  The Transformer architecture studied in this paper is dense, shallow and wide, and employs softmax activation and sinusoidal positional encodings, closely reflecting practical implementations\.

## Learning Chance\-Constrained MDPs with Bellman Distributional Certificates

**Authors:** Chenbei Lu; Hongyu Yi

**ID:** 154689\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154689

[Paper](<https://openreview.net/forum?id=BiofG4E1uv>) | [PDF](<https://openreview.net/pdf?id=BiofG4E1uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154689>)

Safe reinforcement learning \(RL\) commonly enforces expected\-cost constraints, but such expectation safety may fail to control the probability of rare high\-cost trajectories\. Chance\-constrained MDPs \(CCMDPs\) impose a stronger probability\-level requirement, but are widely viewed as harder because the chance constraint is nonconvex and depends on the full trajectory rather than a Bellman\-linear expectation\. In this paper, we reveal that this computational difficulty does not imply a higher statistical price\. In tabular discounted CCMDPs, we give a Bellman\-certified model\-based algorithm whose sample complexity matches the \\emph\{minimax optimal\} primary dependence of classical CMDP learning, and prove a matching lower bound\.  Technically, our key idea is the \\emph\{Bellman distributional certificate\}, which constructs a Bellman recursion for constraint violation probabilities before policy selection\. The certificate can be reused across candidate policies, shifting concentration analysis from the number of possible policies to a finite Bellman certificate table\. Building on this certificate, we establish high\-probability safety and near\-optimality guarantees for deterministic policy learning in discounted CCMDPs\. To our knowledge, we also provide the first model\-free sample complexity guarantee for stochastic policy learning in CCMDPs via variance\-reduced policy gradient\. Numerical experiments on synthetic CCMDPs and IEEE 14\-bus energy\-storage control benchmark illustrate the safety and behavior of the proposed algorithms\.

## Adaptive Calibration in Non\-Stationary Environments

**Authors:** Junyan Liu; Haipeng Luo; Lillian Ratliff

**ID:** 151966\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151966

[Paper](<https://openreview.net/forum?id=WTLTiMlgq3>) | [PDF](<https://openreview.net/pdf?id=WTLTiMlgq3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151966>)

Making calibrated online predictions is a central challenge in modern AI systems\. Much of the existing literature focuses on fully adversarial environments where outcomes may be arbitrary, leading to conservative algorithms that can perform suboptimally in more benign settings, such as when outcomes are nearly stationary\. This gap raises a natural question: can we design online prediction algorithms whose calibration error automatically adapts to the degree of non\-stationarity in the environment, smoothly interpolating between i\.i\.d\. and adversarial regimes? We answer this question in the affirmative and develop a suite of algorithms that achieve adaptive calibration guarantees under multiple calibration measures\. Specifically, with $T$ being the number of rounds and $C\\in\[0,T\]$ being an unknown non\-stationary measure defined as the minimal $\\ell\_1$ deviation of the mean outcomes, our algorithms attain $\\widetilde\{O\}\(\\sqrt\{T\}\+\(TC\)^\{\\frac\{1\}\{3\}\}\)$ for $\\ell\_1$ calibration error and $\\widetilde\{O\}\(\(1\+C\)^\{\\frac\{1\}\{3\}\}\)$ for both $\\ell\_2$ and pseudo KL calibration error\. These bounds match the optimal rates in the stationary case \($C=0$\) and recover known guarantees in the fully adversarial regime \($C=T$\)\. Our approach builds on and extends prior work \[Hu et al\., 2025, Luo et al\., 2025\], introducing an epoch\-based scheduling together with a novel non\-uniform partition of the prediction space that allocates finer resolution near the underlying ground truth\.

## No Free Best\-of\-Both\-Worlds Learning  in Repeated Bilateral Trade

**Authors:** Yutian Cheng; Canzhe Zhao; Jingye Zhao; Shuai Li

**ID:** 155659\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155659

[Paper](<https://openreview.net/forum?id=3yiO50D45L>) | [PDF](<https://openreview.net/pdf?id=3yiO50D45L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155659>)

We study best\-of\-both\-worlds learning in repeated bilateral trade with two\-bit feedback\. When seller and buyer valuations are independent, minimax regret scales as $\\Theta\(T^\{2/3\}\)$; under general bounded\-density distributions it degrades to $ \\Theta\(T^\{3/4\}\)$\. This regime\-dependent gap naturally raises a  question: can a single algorithm adapt optimally to both?  We first  resolve this negatively: any algorithm achieving $O\(T^\\alpha\)$ regret on independent\-values instances necessarily suffers $\\Omega\(T^\{1\-\\alpha/3\}\)$ regret on some dependent\-values instance\. We then characterize the optimal tradeoff and construct a meta\-algorithm achieving $\\bigl\(\\widetilde O\(T^\{\\alpha\}\),\\widetilde O\(T^\{1\-\\alpha/3\}\)\\bigr\)$ for every $\\alpha\\in\[2/3,3/4\]$\. Finally, we show that this tradeoff can be bypassed with mild side information: knowing the optimal same\-price gain suffices to recover the classical best\-of\-both\-worlds guarantee $\\bigl\(\\widetilde O\(T^\{2/3\}\),\\widetilde O\(T^\{3/4\}\)\\bigr\)$\.

## Stability\-Constrained Regime\-Aware Forecasting for Heterogeneous Panel Time Series

**Authors:** Dmitry Zaytsev; Valentina V Kuskova; Michael Coppedge

**ID:** 153846\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153846

[Paper](<https://openreview.net/forum?id=IJ0jP4TvfO>) | [PDF](<https://openreview.net/pdf?id=IJ0jP4TvfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153846>)

Social science panel time series exhibit multicollinearity, latent unit heterogeneity, and regime\-conditional sign\-changing relationships\. On V\-Dem democratic development data, four of four selected covariates exhibit coefficient sign reversal across regimes, driving pooled additive predictors to cancel real signal \- a diagnostic we establish before introducing any nonlinear model\. We present a regime\-aware additive forecasting architecture that recovers this signal under a verifiable contraction certificate\. Our theoretical contribution is a rate\-based contraction theorem decomposing the global Lipschitz constant of a soft\-gated mixture predictor into per\-regime, regime\-disagreement, and dwell\-time components, each empirically auditable on a trained model\. On V\-Dem democratic development data \($151$ countries, $1970\-2025$\), the architecture recovers regime\-conditional signal that pooled additive models cancel \(paired Diebold\-Mariano $p=0\.016$\), with the recovery localized to the tails of the democracy index where a diagnostic shows largest covariate sign disagreement\. The contraction certificate $L\_\{\\text\{eq,max\}\}&lt;1$ holds in $5/5$ seeds across all $9$ audited configurations without explicit projection\. A synthetic stress test with stronger regime contrasts shows the certificate is non\-vacuous: spectral normalization on per\-edge layers can fail to deliver contraction because the gating\-driven term $L\_\{\\phi,\\text\{eq\}\} \\cdot M$ dominates, and a regime\-disagreement penalty is required to recover the bound\.

## Bilinear Matching Bandits

**Authors:** Wooseong Cho; Min\-hwan Oh

**ID:** 149557\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149557

[Paper](<https://openreview.net/forum?id=pDNMIRZc3y>) | [PDF](<https://openreview.net/pdf?id=pDNMIRZc3y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149557>)

We study \\emph\{bilinear matching bandits\}, an online sequential decision problem in which at each round a learner assigns $M$ users to $N$ items via an injective matching $\\pi:\[M\]\\hookrightarrow\[N\]$ and observes semi\-bandit feedback with bilinear mean reward $\\mathbf\{x\}\_i^\\top \\mathbf\{\\Theta\}^\\star \\mathbf\{y\}\_\{\\pi\(i\)\}$, where the parameter $\\mathbf\{\\Theta\}^\\star \\in \\mathbb\{R\}^\{d\_1 \\times d\_2\}$ is unknown\. We propose \\textsc\{HybridRRD\}, a hybrid algorithm that combines high\-width elimination with a row\-wise regularized design sampler over the fractional matching polytope\. Without assuming $\\mathbf\{\\Theta\}^\\star$ is low\-rank, \\textsc\{HybridRRD\} achieves a high\-probability regret bound of $\\widetilde\{O\} \(d\_2 \\sqrt\{d\_1MT\} \+ Md\_1 d\_2\)$, suppressing problem\-scale constants\. This improves the leading dimension dependence from $d\_1d\_2$ to $d\_2\\sqrt\{d\_1\}$ over the standard Kronecker\-linearized contextual combinatorial semi\-bandit baseline\. We further prove a minimax lower bound of $\\Omega\(d\_2 \\sqrt\{d\_1 M T\}\)$ in a large\-item regime, matching the leading regret term up to logarithmic factors\. Numerical experiments show that \\textsc\{HybridRRD\} performs favorably against Kronecker\-linearized baselines\.

## Online Set Learning from Precision and Recall Feedback

**Authors:** Lee Cohen; Yishay Mansour; Shay Moran; Han Shao

**ID:** 155110\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155110

[Paper](<https://openreview.net/forum?id=8KsPIzpp5i>) | [PDF](<https://openreview.net/pdf?id=8KsPIzpp5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155110>)

We consider the problem of learning an unknown subset $N^\{target\}$ of a domain in an online setting\. % In each round $t$, the learner predicts a set of items $\{N\}\_t$ and receives one of two types of feedback, each with equal probability: \{\\it precision feedback\}, in which a randomly chosen item from the predicted set $N\_t$ is revealed and the learner is told whether it belongs to $N^\{target\}$ \(incurring a reward if it does\), or \{\\it recall feedback\}, in which a randomly chosen item from the target set $N^\{target\}$ is revealed and the learner is told whether it belongs to $N\_t$ \(incurring a reward if it does\)\. The goal is to maximize the cumulative reward over time\. This simple online set learning problem abstracts a variety of learning scenarios with precision and recall\-\-type feedback\.  We show that a hypothesis class \(a family of subsets of the domain\) is learnable in this setting if and only if it has finite Vapnik\-Chervonenkis \(VC\) dimension, mirroring the classical PAC characterization\. However, the resulting algorithmic structure is markedly more intricate: in contrast to standard Probably Approximately Correct \(PAC\) learning\-\-\-where the algorithmic landscape is governed by the simple principle of Empirical Risk Minimization \(ERM\)\-\-\-our partial feedback model can invalidate ERM and even all proper learning rules\. We develop algorithms to address the dependencies induced by the feedback, obtaining regret guarantees in both the realizable and agnostic settings\. Our results provide a qualitative characterization of learnability in this model, addressing its most basic question, while pointing to a range of natural and intriguing open questions, including the determination of optimal regret rates\.

## Surprises in Proper Positive\-Only Learning

**Authors:** Shai Ben\-David; Farnam Mansouri; Anay Mehrotra; Manolis Zampetakis

**ID:** 148778 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=v81L38ZyrQ>) | [PDF](<https://openreview.net/pdf?id=v81L38ZyrQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148778>)

Binary classification from positive\-only samples is a variant of PAC learning in which the learner receives i\.i\.d\. samples from the positive region of an unknown target concept, but is evaluated under the original distribution \(which places mass on both positive and negative regions\)\. This model dates back to \(Natarajan, 1987, STOC\), and the characterization of improper learning is well\-known – it even appears in textbooks \(Kearns and Vazirani, 1994, Exercise 3\.7\)\. The characterization of \*proper\* positive\-only learning, however, has long remained open\. In this work, we revisit and settle this question: a concept class is properly learnable from positive\-only samples if and only if it has finite VC dimension and satisfies a new combinatorial condition, which we call uniform exterior separability\. Together with several separation results, this characterization reveals a surprisingly rich landscape that differs sharply from standard PAC learning: proper and improper learning are separated, randomized and deterministic proper learning are separated, there are classes for which \*no\* ERM is a learner, and finite VC dimension does not suffice even for non\-uniform learning\. Along the way, we introduce new combinatorial dimensions that we believe can be of broader interest in learning theory\.

## Learning with Multiple Correct Answers \- Regret Bounds under Different Feedback Models

**Authors:** Alireza F\. Pour; Farnam Mansouri; Shai Ben\-David

**ID:** 153993 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=H11SbZ7GkO>) | [PDF](<https://openreview.net/pdf?id=H11SbZ7GkO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153993>)

We study the problem of learning with multiple correct answers, where each instance admits a set of valid labels\. We primarily focus on the online setup, where in each round the learner must output a valid label for the queried example\. This setting is motivated by language generation, in which a prompt may admit many acceptable completions, but not every completion is acceptable\. We study this problem under three feedback models\. For each model, we characterize the optimal mistake bound in the realizable setting using an appropriate combinatorial dimension\. We then show that the rate of regret can be constant, linear, or sublinear across the three models in the agnostic setting\. Our results also imply sample complexity bounds for the batch setup that depend on the respective combinatorial dimensions\.

## Last\-Iterate Convergence of Single\-Loop Stochastic Methods for Constrained Convex\-Concave Minimax Problems

**Authors:** Taoli Zheng; Jiajin Li; Anthony Man\-Cho So

**ID:** 154326 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ET21F1UIPF>) | [PDF](<https://openreview.net/pdf?id=ET21F1UIPF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154326>)

_Abstract unavailable from the accessible public sources._

## Minimax Optimal Early\-Stopped Gradient Descent for Gaussian Mixture Classification

**Authors:** Alex Buna; Xiaoqi Liu; Patrick Rebeschini

**ID:** 149681 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oEZBdsQiXZ>) | [PDF](<https://openreview.net/pdf?id=oEZBdsQiXZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149681>)

_Abstract unavailable from the accessible public sources._

## High\-arity Sample Compression

**Authors:** Leonardo Coregliano; William Opich

**ID:** 153650 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jl8WaswXxS>) | [PDF](<https://openreview.net/pdf?id=Jl8WaswXxS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153650>)

_Abstract unavailable from the accessible public sources._

## Minimax Optimal Kernel Two\-sample Testing in Sub\-quadratic Time

**Authors:** Ikjun Choi; Shourya Pandey; Purnamrita Sarkar

**ID:** 149505 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pe7A1xPNan>) | [PDF](<https://openreview.net/pdf?id=pe7A1xPNan>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149505>)

Kernel two\-sample tests based on Maximum Mean Discrepancy \(MMD\) are widely used, but the standard quadratic time MMD statistic requires evaluating $\\Theta\(N^2\)$ kernel pairs where $N$ is the pooled sample size\. Several subquadratic approximated MMD tests have been proposed to alleviate this issue, but existing methods either compromise the test power or make additional distributional assumptions to achieve power comparable to the quadratic\-time MMD test\.   Motivated by this gap, we propose a sub\-quadratic time computational method to approximate the MMD test, achieving minimax rate\-optimal power with minimal distributional assumptions\. Building on ideas in fast kernel density estimation and exponentially convergent trapezoidal rule in numerical analysis, our approximation reduces all\-pairs kernel summation to fast Fenwick\-tree prefix\-sum queries\.  For fixed dimension, this yields subquadratic\-time algorithms for several common characteristic kernels, including Laplace, Mat\\'ern, Gaussian, and inverse multiquadric kernels\. The approximation error is controlled tightly enough that the resulting subquadratic time test retains the power guarantees of the minimax\-optimal unapproximated quadratic\-time MMD test\. The same implementation remains subquadratic for dimension $d=o\(\\log N/\\log\\log N\)$, and can be paired with dimensionality\-reduction algorithms when the signal is low\-dimensional\.

## Even Sharper Bounds for Transductive Learning and Its Applications

**Authors:** Yingzhen Yang

**ID:** 154551 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=CiwuIEyV2o>) | [PDF](<https://openreview.net/pdf?id=CiwuIEyV2o>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154551>)

We introduce  Sharper Transductive Local Complexity \(STLC\) as a new tool for analyzing the generalization performance of transductive learning methods, improving upon the current transductive bounds\. Our work extends the classical local complexity\-based analysis to the transductive setting, incorporating substantial and novel components beyond standard inductive and  transductive analysis\. Although Local Rademacher Complexity \(LRC\) has been used to obtain sharp inductive generalization bounds and local complexity\-based transductive bounds, it has remained an open problem whether a localized Rademacher complexity framework can achieve exactly the same sharp bounds matching their inductive counterparts\. STLC provides a confirmative answer to this question\. STLC  is constructed by first deriving a new and sharp concentration inequality for the supremum of empirical processes capturing the gap between test and training losses, or the test\-train process, under uniform sampling without replacement\. The proof establishes a Bernstein\-type concentration inequality via a novel entropy\-based approach built on the modified log\-Sobolev inequality for the swap  walk\. A subsequent peeling strategy with a surrogate variance operator then yields excess risk bounds in the transductive setting that exactly match the classical LRC\-based inductive bounds without the additional logarithmic gap in existing works\. We further advance the current state\-of\-the\-art in transductive learning through two applications: \(1\) for realizable transductive learning over binary\-valued function classes with finite VC dimension $\\dVC$ and $u \\ge m \\ge \\dVC$, where $u$ and $m$ are the number of test features and training features, STLC gives a nearly optimal bound $\\Theta\(\\dVC \\log\(me/\\dVC\)/m\)$ nearly matching the minimax rate $\\Theta\(\\dVC/m\)$ up to $\\log m$ and exactly matching the inductive bound, resolving a decade\-old open question; and \(2\) STLC presents a sharper excess risk bound for transductive kernel learning compared to the prior local complexity–based results\.

## Understanding the Convergence of Direct Training of SNNs with Surrogate Gradients

**Authors:** Zelin Wei; Tianxing Man; Wanli Shi; Bin Gu

**ID:** 152782 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QNkfQ8wsii>) | [PDF](<https://openreview.net/pdf?id=QNkfQ8wsii>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152782>)

Spiking Neural Networks \(SNNs\) offer high energy efficiency, but direct optimization is challenging because spike generation is governed by a non\-differentiable hard threshold\. Practical direct\-training methods, including surrogate gradients \(SG\) and local zeroth\-order \(LocalZO\) estimators, maintain hard spikes in the forward pass while using surrogate or perturbation\-induced derivatives in the backward pass\. This forward\-\-backward mismatch raises a central theoretical question: how do local gradient discrepancies propagate through the spatiotemporal computation graph, and can the resulting biased updates still provide guaranties for the original discrete\-spike objective? We develop a unified convergence analysis framework for SG and LocalZO direct SNN training\. A smoothed spike objective is introduced only as an analytical bridge, allowing us to separate the core error into two components: the gradient\-level mismatch between the direct\-training mean direction and the smoothed\-objective gradient, and the objective\-level consistency gap between the smoothed and original discrete objectives\. Both components are controlled by a threshold\-tail functional that measures how often hard\-trajectory membrane potentials lie near the firing threshold\. Under suitable regularity assumptions, we obtain a non\-asymptotic guarantee for the original discrete\-spike objective\. Experiments across representative SNN architectures and benchmarks verify convergence consistency, the existence of errors, and demonstrate that the threshold\-tail statistic is an effective diagnostic for direct SNN training\.

## On Generalization in Bilevel Optimization with Overparameterized Models

**Authors:** Fares El Khoury; Edouard Pauwels; Samuel Vaiter; Michael Arbel

**ID:** 149738 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=njL0SXdxcz>) | [PDF](<https://openreview.net/pdf?id=njL0SXdxcz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149738>)

_Abstract unavailable from the accessible public sources._

## On the Rademacher Complexity of Graph Neural Networks: Unifying Expressivity and Geometry

**Authors:** Martin Carrasco; Caio Deberaldini Netto; Ehimare Okoyomon; Aneeqa Mehrab; Vahan Martirosyan; Caterina Graziani

**ID:** 154768 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=B5sX9YQyxl>) | [PDF](<https://openreview.net/pdf?id=B5sX9YQyxl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154768>)

_Abstract unavailable from the accessible public sources._

## Rare\-Tail Statistics For Learning Biased Gaussian Halfspaces with Label Noise

**Authors:** Prateeti Mukherjee; Arya Mazumdar; Harsh Vardhan

**ID:** 150751 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=femz7HX0tn>) | [PDF](<https://openreview.net/pdf?id=femz7HX0tn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150751>)

We revisit the classical problem of learning general Gaussian halfspaces in the presence of label noise, with particular focus on the large\-bias regime where information\-computation gaps are conjectured in several standard label\-noise models\. Concretely, we present and analyse the rare\-tail mean estimator, an extremely simple one\-shot statistic that averages only the observed minority class\. In the large bias regime, classical Averaging \(Servedio, 1999\), and related global first\-moment statistics, are provably suboptimal, while the rare\-tail mean estimator recovers the target halfspace direction at the information\-theoretic sample rate \(modulo log factors\) under a broad class of label noise models, including probit noise and margin\-monotone noise with very slow decay away from the boundary\. Notably, our guarantees allow labels arbitrarily close to the decision boundary to be nearly random, yet still obtain strong directional recovery from a small number of samples\. As an application, we show that in a two\-stage curriculum learning setup, where an average\-case margin\-dependent noise mechanism precedes the uniform\-noise target \(the worst\-case noise profile in the same family\) with the same Bayes optimal separator, our estimator supplies the missing directional accuracy needed by existing refinement routines, yielding an end\-to\-end sample\-optimal learner in the large\-bias regime\. The estimator also cleanly interpolates between the noiseless and noisy regimes\. In low\-noise settings, it retains the same sample complexity rates as classical separability\-based methods for realizable halfspace learning, while continuing to admit meaningful guarantees even after linear separability has been destroyed by noise\.

## High\-Probability Minimax Adaptive Estimation in Besov Spaces via Online\-to\-Batch

**Authors:** Paul Liautaud; Pierre Gaillard; Olivier Wintenberger

**ID:** 149324 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qzG736XgI9>) | [PDF](<https://openreview.net/pdf?id=qzG736XgI9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149324>)

We study nonparametric regression over Besov spaces from noisy observations under sub\-exponential noise\. Our goal is to obtain minimax\-optimal high\-probability bounds for the integrated squared error while adapting to the unknown noise level and the regularity parameters of the underlying Besov class\. We introduce a wavelet\-based online learning algorithm that sequentially processes noisy gradients and adapts to the gradient noise through an adaptive clipping rule, thus avoiding the need to tune parameters such as the noise variance or gradient bounds\. As a by\-product of our analysis, we derive high\-probability adaptive regret bounds that scale with the $\\ell\_1$\-norm of the competitor\. Finally, in the batch statistical setting, our method is the first to achieve high\-probability minimax\-optimal estimation rates over Besov spaces while adapting to all problem parameters, including the noise level\. Our approach relies on a refined online\-to\-batch conversion and exploits the structure of the squared loss in combination with self\-normalized concentration inequalities\.

## Stability\-Constrained Regime\-Aware Forecasting for Heterogeneous Panel Time Series

**Authors:** Dmitry Zaytsev; Valentina V Kuskova; Michael Coppedge

**ID:** 153846\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153846

[Paper](<https://openreview.net/forum?id=IJ0jP4TvfO>) | [PDF](<https://openreview.net/pdf?id=IJ0jP4TvfO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153846>)

Social science panel time series exhibit multicollinearity, latent unit heterogeneity, and regime\-conditional sign\-changing relationships\. On V\-Dem democratic development data, four of four selected covariates exhibit coefficient sign reversal across regimes, driving pooled additive predictors to cancel real signal \- a diagnostic we establish before introducing any nonlinear model\. We present a regime\-aware additive forecasting architecture that recovers this signal under a verifiable contraction certificate\. Our theoretical contribution is a rate\-based contraction theorem decomposing the global Lipschitz constant of a soft\-gated mixture predictor into per\-regime, regime\-disagreement, and dwell\-time components, each empirically auditable on a trained model\. On V\-Dem democratic development data \($151$ countries, $1970\-2025$\), the architecture recovers regime\-conditional signal that pooled additive models cancel \(paired Diebold\-Mariano $p=0\.016$\), with the recovery localized to the tails of the democracy index where a diagnostic shows largest covariate sign disagreement\. The contraction certificate $L\_\{\\text\{eq,max\}\}&lt;1$ holds in $5/5$ seeds across all $9$ audited configurations without explicit projection\. A synthetic stress test with stronger regime contrasts shows the certificate is non\-vacuous: spectral normalization on per\-edge layers can fail to deliver contraction because the gating\-driven term $L\_\{\\phi,\\text\{eq\}\} \\cdot M$ dominates, and a regime\-disagreement penalty is required to recover the bound\.

## Bilinear Matching Bandits

**Authors:** Wooseong Cho; Min\-hwan Oh

**ID:** 149557\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149557

[Paper](<https://openreview.net/forum?id=pDNMIRZc3y>) | [PDF](<https://openreview.net/pdf?id=pDNMIRZc3y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149557>)

We study \\emph\{bilinear matching bandits\}, an online sequential decision problem in which at each round a learner assigns $M$ users to $N$ items via an injective matching $\\pi:\[M\]\\hookrightarrow\[N\]$ and observes semi\-bandit feedback with bilinear mean reward $\\mathbf\{x\}\_i^\\top \\mathbf\{\\Theta\}^\\star \\mathbf\{y\}\_\{\\pi\(i\)\}$, where the parameter $\\mathbf\{\\Theta\}^\\star \\in \\mathbb\{R\}^\{d\_1 \\times d\_2\}$ is unknown\. We propose \\textsc\{HybridRRD\}, a hybrid algorithm that combines high\-width elimination with a row\-wise regularized design sampler over the fractional matching polytope\. Without assuming $\\mathbf\{\\Theta\}^\\star$ is low\-rank, \\textsc\{HybridRRD\} achieves a high\-probability regret bound of $\\widetilde\{O\} \(d\_2 \\sqrt\{d\_1MT\} \+ Md\_1 d\_2\)$, suppressing problem\-scale constants\. This improves the leading dimension dependence from $d\_1d\_2$ to $d\_2\\sqrt\{d\_1\}$ over the standard Kronecker\-linearized contextual combinatorial semi\-bandit baseline\. We further prove a minimax lower bound of $\\Omega\(d\_2 \\sqrt\{d\_1 M T\}\)$ in a large\-item regime, matching the leading regret term up to logarithmic factors\. Numerical experiments show that \\textsc\{HybridRRD\} performs favorably against Kronecker\-linearized baselines\.

## Online Set Learning from Precision and Recall Feedback

**Authors:** Lee Cohen; Yishay Mansour; Shay Moran; Han Shao

**ID:** 155110\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155110

[Paper](<https://openreview.net/forum?id=8KsPIzpp5i>) | [PDF](<https://openreview.net/pdf?id=8KsPIzpp5i>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155110>)

We consider the problem of learning an unknown subset $N^\{target\}$ of a domain in an online setting\. % In each round $t$, the learner predicts a set of items $\{N\}\_t$ and receives one of two types of feedback, each with equal probability: \{\\it precision feedback\}, in which a randomly chosen item from the predicted set $N\_t$ is revealed and the learner is told whether it belongs to $N^\{target\}$ \(incurring a reward if it does\), or \{\\it recall feedback\}, in which a randomly chosen item from the target set $N^\{target\}$ is revealed and the learner is told whether it belongs to $N\_t$ \(incurring a reward if it does\)\. The goal is to maximize the cumulative reward over time\. This simple online set learning problem abstracts a variety of learning scenarios with precision and recall\-\-type feedback\.  We show that a hypothesis class \(a family of subsets of the domain\) is learnable in this setting if and only if it has finite Vapnik\-Chervonenkis \(VC\) dimension, mirroring the classical PAC characterization\. However, the resulting algorithmic structure is markedly more intricate: in contrast to standard Probably Approximately Correct \(PAC\) learning\-\-\-where the algorithmic landscape is governed by the simple principle of Empirical Risk Minimization \(ERM\)\-\-\-our partial feedback model can invalidate ERM and even all proper learning rules\. We develop algorithms to address the dependencies induced by the feedback, obtaining regret guarantees in both the realizable and agnostic settings\. Our results provide a qualitative characterization of learnability in this model, addressing its most basic question, while pointing to a range of natural and intriguing open questions, including the determination of optimal regret rates\.

## Training\-free Spatially Grounded Geometric Shape Encoding

**Authors:** Yuhang He

**ID:** 150307\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150307

[Paper](<https://openreview.net/forum?id=j770IgUZZG>) | [PDF](<https://openreview.net/pdf?id=j770IgUZZG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150307>)

In this work, we introduce a novel training\-free encoding framework, dubbed \*\*XShapeEnc\*\*, that encodes an arbitrary spatially grounded 2D geometric shape into a compact representation exhibiting five favorable properties, including invertibility, adaptivity, generality and controllability\. Specifically, a 2D spatially grounded geometric shape is decomposed into its normalized geometry within the unit disk and its pose vector, where the pose is further transformed into a harmonic pose field that also lies within the unit disk\. A set of orthogonal Zernike basis is constructed to encode shape geometry and pose either independently or jointly, with controllable relative emphasis on shape geometry or shape pose\. We demonstrate the theoretical validity, efficiency, discriminability, and wide applicability of \*\*XShapeEnc\*\* via extensive analysis and experiments across a wide range of shape\-aware tasks and our self\-curated XShapeCorpus dataset\. We envision \*\*XShapeEnc\*\* as a foundational tool for research beyond one\-dimensional sequential data and data\-driven, learning\-based encoding paradigms, paving the way for a unified spatial encoding framework for frontier 2D spatial intelligence\.

## Robust Statistical Estimators with Bounded Empirical Sensitivity

**Authors:** Valentio Iverson; Gautam Kamath; Argyris Mouzakis; Adam Smith

**ID:** 153880\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153880

[Paper](<https://openreview.net/forum?id=I4gx0BVDkz>) | [PDF](<https://openreview.net/pdf?id=I4gx0BVDkz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153880>)

We introduce a new measure of robustness for statistical estimators, which we call empirical sensitivity\. An estimator $\\hat \\mu$ has bounded empirical sensitivity if, with high probability over a dataset $X = \(X\_1, \\dots, X\_n\) \\sim \\mathcal\{D\}^\{\\otimes n\}$, for any dataset $Y$ obtained by modifying at most $\\eta n$ points in $X$, we have that $\\hat \\mu\(Y\)$ is close to $\\hat \\mu\(X\)$\.   We study bounds on this quantity for the prototypical problem of Gaussian mean estimation\.  We prove new lower bounds, showing that for any estimator $\\hat \\mu$ which achieves an optimal $\\ell\_2$\-error bound of $O\(\\sqrt\{d/n\}\)$, the empirical sensitivity is at least $\\Omega\(\\eta \+ \\sqrt\{\\eta d/n\}\)$\.  The two terms arise due to obstructions on the mean and variance \(via an Efron\-Stein argument\) of such an estimator\. We show that this bound is tight up to logarithmic factors, by employing recent results for robust empirical mean estimation\.

## The Price of Choosing Examples: Context Overfitting in Adaptive In\-Context Learning

**Authors:** Xiaoyu Li; Jiangxuan Long

**ID:** 153995\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153995

[Paper](<https://openreview.net/forum?id=Gzmzr2tIux>) | [PDF](<https://openreview.net/pdf?id=Gzmzr2tIux>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153995>)

In\-context learning is usually analyzed as if the examples in the prompt were sampled before the learner is chosen\. In deployed systems they are not: examples are retrieved, filtered, re\-ranked, edited, and repeatedly tested after seeing the query and the data store\. We formalize this gap by treating prompt construction as adaptive data analysis through a conditional stochastic\-kernel calculus\. Our main quantity is the \\emph\{context capacity\}, the mutual information or approximate max\-information between the data store and the final prompt transcript\. For any frozen in\-context learner and any adaptive context pipeline with capacity $\\kappa$, we prove a finite\-sample context generalization bound of order $\\sqrt\{\\kappa/k\}$, where $k$ is the number of examples that enter the prompt\. We strengthen it to a sub\-gamma transport inequality with Bernstein curvature, prove a matching lower bound, and derive two PAC\-Bayesian retrieval rules: a first\-order Gibbs rule and a self\-normalized second\-order rule\. Finally, we instantiate the theory for Bayesian linear in\-context regression, including an order\-statistics analysis of query\-aligned top\-$k$ Gaussian retrieval\. The results separate context quality from context certification: longer or more relevant contexts improve risk only when the procedure used to choose them is stable enough for selected\-context evidence to transfer\.

## Anytime\-Valid PAC\-Bayes Certificates for Adaptive Test\-Time Scaling

**Authors:** Xiaoyu Li; Jiangxuan Long

**ID:** 153451\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153451

[Paper](<https://openreview.net/forum?id=LBokJOYjeC>) | [PDF](<https://openreview.net/pdf?id=LBokJOYjeC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153451>)

Test\-time scaling systems often choose how much to sample, which prompt to use, and which verifier or aggregation rule to trust after repeatedly inspecting a calibration set\.  Standard validation error bars are not valid after this adaptive selection\.  We model a test\-time scaling recipe as a randomized predictor with a random cost and prove a time\-uniform PAC\-Bayes certificate that holds simultaneously over all calibration times, all posterior mixtures over recipes, and all data\-dependent stopping rules\.  Thus the same event covers the recipe search that precedes deployment, not merely the fixed recipe finally reported\.  For a finite grid of budgets and verifiers, the penalty is the familiar $\\log M/n$, while non\-uniform priors and localized posterior mixtures give sharper certificates for structured searches\.  We specialize the result to self\-consistency and show a complementary margin law: plurality voting improves exponentially in the sample budget only on examples where the correct answer is the generator's unique mode; otherwise more compute can provably amplify errors\.  The same margin analysis yields an oracle water\-filling law for compute allocation\.  A synthetic audit quantifies the optimism caused by adaptive budget selection, and a 192\-example GSM8K audit using gpt\-4\.1\-mini generations illustrates risk\-cost reporting for a real inference pipeline\.  The results give a lightweight, distribution\-free way to report risk and compute claims for adaptive inference systems\.

## On Concentration Inequalities for Sampling without Replacement

**Authors:** Shaojie Li; Bowei Zhu; Yong Liu

**ID:** 155488\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155488

[Paper](<https://openreview.net/forum?id=5ETAqPLdr6>) | [PDF](<https://openreview.net/pdf?id=5ETAqPLdr6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155488>)

This paper studies concentration inequalities for sampling without replacement\. We introduce a general inequality that provides simple guidelines for proving concentration inequalities, offers a degree of unification of existing results, and is strong enough to yield sharper bounds\. As applications, we revisit several standard statistics and either recover classical inequalities through streamlined proofs or strengthen them to tighter bounds, with rates optimal up to constants\.

## MIND: Monge Inception Distance for Generative Models Evaluation

**Authors:** Quentin Berthet; Clement CREPY; Romuald Elie; Klaus Greff; Michael E Sander; Yu\-Han Wu

**ID:** 150991\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150991

[Paper](<https://openreview.net/forum?id=dkjQz0fwDs>) | [PDF](<https://openreview.net/pdf?id=dkjQz0fwDs>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150991>)

We propose the Monge Inception Distance \(MIND\), a metric for evaluating generative models that addresses key limitations of the widely adopted Fréchet Inception Distance \(FID\)\. The MIND metric leverages the sliced Wasserstein distance to compare distributions by averaging one\-dimensional optimal transport distances, efficiently computed via sorting\. This approach circumvents the estimation of high\-dimensional means and covariance matrices, which underlie FID's poor sample complexity and vulnerability to adversarial attacks\. We empirically demonstrate three primary advantages: \(i\) it is more sample\-efficient by one order of magnitude, \(ii\) it is faster to compute by two orders of magnitude, \(iii\) it is more robust to adversarial attacks such as moment\-matching\. We show that MIND with 5k samples can replace the evaluation performance of FID with 50k samples, providing high correlation with this standard benchmark and superior discriminative performance\. We further demonstrate that even smaller sample sizes \(e\.g\., 1k or 2k\) remain highly informative for rapid model iteration\.

## Inferential Theory of Learning as a Framework for Test\-Time Computation in Foundation Models

**Authors:** Mohit Prabhushankar; Ghassan AlRegib

**ID:** 139992\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139992

[Paper](<https://openreview.net/forum?id=zuBABOLynT>) | [PDF](<https://openreview.net/pdf?id=zuBABOLynT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139992>)

Foundation models are billion\-parameter neural networks that are trained under statistical learning principles to reason inductively regarding multifarious tasks at inference\. However, foundation models are increasingly deployed in settings where the statistical principles that they were trained on may not hold\. During deployment, users intervene in these systems' functionality through prompts, instructions, demonstrations, analogies, retrieval, tool calls, memory, verification, search, and multi\-step reasoning\. These operations change the effective knowledge state available at inference time, all of which are not well described by induction alone\. This paper argues that Michalski’s Inferential Theory of Learning \(ITL\) provides a useful conceptual basis for describing deployed foundation models as multistrategy, goal\-directed inference systems\. In ITL, learning is modeled as the transformation of knowledge through transmutations such as generalization, specialization, abstraction, concretion, association, discrimination, explanation, derivation, reformulation, insertion, deletion, replication, and sorting\. We reinterpret these classical transmutations in the context of modern test\-time computation techniques, showing that the functionality of reasoning models, intelligent prompting, retrieval\-augmented generation, tool use, memory, and agentic search can be understood as transmutation programs over knowledge states\. We then identify limitations of classical ITL for contemporary machine learning and propose a probabilistic extension in which transmutations are stochastic operators selected under uncertainty and cost\. Finally, we connect this view to a system\-level information bottleneck principle, quantifying the new knowledge that is acquired during the inference process\. The resulting framework positions ITL as a bridge between statistical learning, symbolic reasoning, abductive explanations, prompting, and agentic foundation models\.

## Generating in the Limit with Infinitely Many Hallucinations

**Authors:** Irene Strauss; Alexandra Butoi; Ryan Cotterell

**ID:** 151636\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151636

[Paper](<https://openreview.net/forum?id=Z78RzgzukZ>) | [PDF](<https://openreview.net/pdf?id=Z78RzgzukZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151636>)

The classic paradigm of language identification in the limit models learning as a game between an adversary, who reveals strings from an unknown target language, and a learner tasked with identifying that language\. The recently introduced framework of language generation in the limit shifted the objective to better reflect modern language modeling, requiring the learner to produce valid, unseen strings from the target language\. Related work highlighted a fundamental tension: a broad coverage of the target often comes at the cost of validity\. We introduce a new notion of precision and recast this problem as the classic recall\-\-precision trade\-off\. We analyze generation in the limit under varying constraints on enumeration, novelty, and validity, aimed at reflecting settings closer to those encountered by large language models\. A key contribution is our analysis of learners that are not eventually valid: we allow infinitely many mistakes, provided their frequency tends to zero so that precision remains $1$\. We show this relaxation can strictly increase recall when the adversary permanently withholds a large portion of the target language\. We also study a continuous relaxation of the novelty constraint, requiring only that a fixed fraction of outputs are novel\. Taken together, our results move toward a more realistic model of language generation where occasional errors and repetitions are unavoidable, but their rates are controlled\.

## Majority\-of\-Three is an Optimal PAC Learner

**Authors:** Grigoris Velegkas

**ID:** 150819\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150819

[Paper](<https://openreview.net/forum?id=f4VPeQiNfz>) | [PDF](<https://openreview.net/pdf?id=f4VPeQiNfz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150819>)

Finding the optimal sample complexity of realizable PAC learning was a major open problem in learning theory, which was settled by the breakthrough result of Hanneke \(2016\), building on prior work by Simon \(2015\)\. Hanneke's algorithm is quite involved and requires training $\\text\{poly\}\(n\)$ Empirical Risk Minimizers \(ERMs\) on carefully crafted subsets of the data\. Since using a single ERM call is provably suboptimal, recent work by Aden\-Ali \(2024\) proposed the majority\-of\-three ERMs as a candidate for the \*simplest\* optimal PAC learner, and established its optimality in the \*in\-expectation\* regime\. Their main open question was whether this algorithm is optimal in the classical \*high\-probability\* regime\. In this work, building on their ideas, we answer this question affirmatively\.

## Generalization Analysis of Biased Stochastic Gradient Methods for Minimax Problems

**Authors:** Shuang Zeng; Yunwen Lei; Yiming Ying

**ID:** 154714\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154714

[Paper](<https://openreview.net/forum?id=BXzpp9Ihuq>) | [PDF](<https://openreview.net/pdf?id=BXzpp9Ihuq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154714>)

Minimax optimization refers to a class of optimization problems with some variables to minimize and other variables to maximize\. Biased stochastic gradient methods have shown practical success in solving minimax problems to either improve robustness, enhance communication efficiency, or decrease computational costs\. These successes motivate a lot of theoretical works to study the convergence of biased stochastic gradient methods, while their generalization analysis remains untouched\. In this paper, we present the first framework to study the stability and generalization of biased stochastic gradient methods for minimax problems\. We establish a connection between stability and generalization for minimax problems by relaxing the existing bounded gradient assumption to a bounded second moment condition\. We then introduce a generalized Lipschitz\-type condition on bias and gradient estimators, and derive a general stability bound to clarify the connection among bias, gradient estimators and stability\. We apply our general analysis to Zeroth\-order and Clipped stochastic gradient descent ascent \(SGDA\), and derive stability bounds that match those of SGDA under appropriate smoothing/clipping parameters\. We combine stability and convergence analyses together, and derive optimal excess risk bounds of order $1/\\sqrt\{n\}$, where $n$ is the sample size\.

## Learning Distributions from Multiple Data Providers

**Authors:** Jon Kleinberg; Amin Saberi; Xizhi Tan; Grigoris Velegkas

**ID:** 154089\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154089

[Paper](<https://openreview.net/forum?id=GJbuWXhmG5>) | [PDF](<https://openreview.net/pdf?id=GJbuWXhmG5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154089>)

Motivated by learning from heterogeneous and overlapping data providers, we study a stylized model of distribution learning from restricted conditional samples\. The goal is to learn an unknown distribution $p$ on a finite domain $\[n\]$\. The learner is given a fixed family of queryable sets $\\mathcal S \\subseteq 2^\{\[n\]\}$, and each query to $S \\in \\mathcal S$ returns an independent sample from the conditional distribution $p\(\\cdot \\mid S\)$\.  Learnability is governed by the \\emph\{co\-occurrence graph\} associated with $\\mathcal S$: two domain elements are connected if they appear together in some queryable set\. Pointwise consistency is achievable  when this graph is connected on the target support\. PAC learning requires more: it is possible  when the co\-occurrence graph is complete\.  The sample complexity of PAC learning ranges from nearly linear to quadratic\. Every query family with complete co\-occurrence graph admits sample complexity $\\widetilde O\(n^2/\\epsilon^2\)$, and this bound is tight in the worst case\. On the other hand, if every subset is queryable, the optimal worst\-case complexity improves to $\\Theta\(n/\\epsilon^2\)$\. More generally, we identify \\emph\{hierarchical comparability\} as a sufficient structural condition on $\\mathcal S$ under which the optimal complexity is nearly linear, $\\widetilde \\Theta\(n/\\epsilon^2\)$, with pairwise query families as a canonical example\. Finally, the full range of polynomial rates between linear and quadratic is attainable: for every $\\alpha \\in \(1,2\)$, there exists a query family with optimal PAC rate $\\widetilde \\Theta\(n^\\alpha/\\epsilon^2\)$\.

## Tight Gap\-Dependent Regret Bounds and Problem\-Independent Bounds for Cost\-aware Cascading Bandits

**Authors:** Yuji TAMAKOSHI; Shinji Ito

**ID:** 149412\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149412

[Paper](<https://openreview.net/forum?id=qE6UhWAHvg>) | [PDF](<https://openreview.net/pdf?id=qE6UhWAHvg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149412>)

We study cost\-aware cascading bandits, where a learner selects an ordered subset of options, tests them sequentially until the first success, and pays the costs of all tested options\. In this problem, regret comes from both testing inefficient options and placing options in a suboptimal order, but existing analyses do not separate these effects for inefficient options and therefore yield an inverse\-square dependence on the gap $c\_i\-\\theta\_i$\. We develop a regret decomposition based on intermediate policies that reorder the remaining suffix and remove inefficient options one position at a time\.  This allows us to quantify the incremental regret incurred when each option is tested\. As a consequence, we show that the regret of CC\-UCB admits a problem\-dependent bound of $O\(\\sum\_\{i:\\theta\_i/c\_i&lt;1\}\\log T/\(c\_i\-\\theta\_i\)\)$ up to additive terms and a problem\-independent bound of order $\\tilde O\(L\\sqrt\{T\}\)$\. We further prove that the minimax regret is bounded from below by $\\Omega\(\\sqrt\{LT\}\)$ by reducing standard multi\-armed bandits to a special case of the model\. Finally, we propose CC\-UCBv2, which removes the need to specify a positive lower bound on costs and handles zero\-cost options by separating empirically zero\-cost options from the others\.  Numerical experiments show the effect of misspecified cost lower bounds and demonstrate that the proposed modification can reduce regret in representative instances involving zero or misspecified costs\.

## Post\-Processing Guarantees for Classification under Linear\-Fractional Performance Metrics

**Authors:** Andrea Della Vecchia

**ID:** 155732\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155732

[Paper](<https://openreview.net/forum?id=3Leoi1uMNP>) | [PDF](<https://openreview.net/pdf?id=3Leoi1uMNP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155732>)

This paper studies binary classification under generalized performance metrics, going beyond standard misclassification error\. We focus on linear\-fractional measures—including the $F$\-score and Jaccard index—which are widely used in class\-imbalanced settings\. We first provide a unified characterization of the optimal classifier, showing that it admits a thresholding structure on the regression function\. This reduces the original infinite\-dimensional, non\-decomposable optimization problem to the estimation of a single scalar parameter\. Building on this result, we analyze plug\-in classifiers that combine a regression estimator with a data\-driven estimate of the optimal threshold\. We show that this threshold is characterized as the solution of a fixed\-point equation depending only on the marginal distribution, enabling its estimation using unlabeled data and avoiding standard validation\-based procedures\. Our main contribution is a finite\-sample analysis of this approach\. We derive excess risk bounds that decompose the error into contributions from regression estimation, threshold estimation, and sampling effects, providing a modular understanding of learning under non\-decomposable metrics\. Under standard margin assumptions, we further establish fast convergence rates\. Our results yield a unified theoretical framework for plug\-in classification under linear\-fractional metrics, extending prior analyses beyond specific measures such as the $F$\-score\. Empirical results on synthetic and real datasets support our theoretical findings\.

## Borda\-Based Fair Multi\-User Dueling Bandit in Tabular and Generalized Linear Settings

**Authors:** Maheed H Ahmed; Mahsa Ghasemi

**ID:** 155261\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155261

[Paper](<https://openreview.net/forum?id=71S8aArMXO>) | [PDF](<https://openreview.net/pdf?id=71S8aArMXO>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155261>)

The increasing prevalence of preference\-based learning, particularly for machine learning models interacting with human users, gives rise to scenarios where the model's decision should cater to the preferences of a number of users\. Due to the inherent misalignments in such preferences, it is natural to seek a fair decision\-making paradigm\. Motivated by that, we pose the problem of fair multi\-user dueling bandit, where each user's preferences over pairs of actions are encoded by a preference matrix unknown to the agent\. We design a Nash social welfare objective based on the Borda scores of the individual user preferences\. The notion of the Borda score measures the average likelihood of an action being preferred over the other actions, and importantly, it does not require the existence of a completely dominant action\. Considering online learning in this general setting, we construct hard instances and establish a minimax lower bound on the achievable regret\. We also design an explore\-then\-commit algorithm and derive an upper bound on its worst\-case regret\. Furthermore, we formulate a fair multi\-user generalized linear dueling bandit to enable modeling large action spaces, which typically necessitate a structured representation\. In this setting, too, we establish a lower bound on regret and an upper bound on regret for a proposed explore\-then\-commit algorithm\.

## Iterative Chow Filtering for Learning with Distribution Shift

**Authors:** Gautam Chandrasekaran; Georgios Gkrinias; Adam Klivans; Konstantinos Stavropoulos; Arsen Vasilyan

**ID:** 152685\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152685

[Paper](<https://openreview.net/forum?id=RBxhiGn1aP>) | [PDF](<https://openreview.net/pdf?id=RBxhiGn1aP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152685>)

Recent work due to Goel et al\.\~gave the first efficient algorithms for learning with distribution shift in the challenging PQ framework, where a learner receives labeled training examples and unlabeled test examples and must make correct predictions on the test set but is allowed to abstain from predicting on out\-of\-distribution points\.  Their results rely on $\{\\cal L\}\_2$ sandwiching  approximations, a strong requirement that leads to poor bounds for several basic function classes such as DNF formulas\.  Here we show that the weaker notion of $\{\\cal L\}\_1$ sandwiching suffices for efficient PQ learning\. As a consequence, we obtain the first quasipolynomial\-time PQ learning algorithm for DNFs under the uniform distribution and essentially match the guarantees known for ordinary PAC learning\. More broadly, our bounds provide exponential improvements for several classes including constant depth circuits and constant degree polynomial threshold functions\. Our main technical ingredient is \*Iterative Chow Filtering\*, a new procedure that uses low\-degree Chow parameters to identify and remove test points incompatible with the training distribution\.

## Learning Theory of Transformers: Local\-to\-Global Approximation via Softmax Partition of Unity

**Authors:** Zhongjie Shi; Wenjing Liao

**ID:** 152703\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152703

[Paper](<https://openreview.net/forum?id=R1SSvVTsSW>) | [PDF](<https://openreview.net/pdf?id=R1SSvVTsSW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152703>)

This paper investigates the learning theory of Transformer networks for regression tasks on the compact Euclidean domain $\[0,1\]^d$ and $d$\-dimensional compact Riemannian manifolds\. We propose a novel constructive approximation framework for Transformers that builds local approximations of the target function and aggregates them into a global approximation via softmax partition of unity\. This approach leverages the attention mechanism to achieve spatial localization  through affine transformations of the input\. The softmax activation plays a crucial role in aggregating local approximations to a global output\. From an approximation perspective, we prove that a  dense Transformer equipped with only  two encoder blocks and standard single\-hidden\-layer point\-wise feed\-forward networks can achieve a uniform $\\varepsilon$\-approximation error for $\\alpha$\-H\\"older continuous functions with $\\alpha \\in \(0,1\]$ using $\\mathcal\{O\}\(\\varepsilon^\{\-d/\\alpha\}\)$ total parameters\. Building upon this approximation guarantee, we establish a near minimax\-optimal generalization error bound of order $\\mathcal\{O\}\\big\(n^\{\-\\frac\{2\\alpha\}\{2\\alpha\+d\}\} \\log n\\big\)$ for the empirical risk minimizer, where $n$ is the training data size\.  The Transformer architecture studied in this paper is dense, shallow and wide, and employs softmax activation and sinusoidal positional encodings, closely reflecting practical implementations\.

## Learning Chance\-Constrained MDPs with Bellman Distributional Certificates

**Authors:** Chenbei Lu; Hongyu Yi

**ID:** 154689\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154689

[Paper](<https://openreview.net/forum?id=BiofG4E1uv>) | [PDF](<https://openreview.net/pdf?id=BiofG4E1uv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154689>)

Safe reinforcement learning \(RL\) commonly enforces expected\-cost constraints, but such expectation safety may fail to control the probability of rare high\-cost trajectories\. Chance\-constrained MDPs \(CCMDPs\) impose a stronger probability\-level requirement, but are widely viewed as harder because the chance constraint is nonconvex and depends on the full trajectory rather than a Bellman\-linear expectation\. In this paper, we reveal that this computational difficulty does not imply a higher statistical price\. In tabular discounted CCMDPs, we give a Bellman\-certified model\-based algorithm whose sample complexity matches the \\emph\{minimax optimal\} primary dependence of classical CMDP learning, and prove a matching lower bound\.  Technically, our key idea is the \\emph\{Bellman distributional certificate\}, which constructs a Bellman recursion for constraint violation probabilities before policy selection\. The certificate can be reused across candidate policies, shifting concentration analysis from the number of possible policies to a finite Bellman certificate table\. Building on this certificate, we establish high\-probability safety and near\-optimality guarantees for deterministic policy learning in discounted CCMDPs\. To our knowledge, we also provide the first model\-free sample complexity guarantee for stochastic policy learning in CCMDPs via variance\-reduced policy gradient\. Numerical experiments on synthetic CCMDPs and IEEE 14\-bus energy\-storage control benchmark illustrate the safety and behavior of the proposed algorithms\.

## Adaptive Calibration in Non\-Stationary Environments

**Authors:** Junyan Liu; Haipeng Luo; Lillian Ratliff

**ID:** 151966\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151966

[Paper](<https://openreview.net/forum?id=WTLTiMlgq3>) | [PDF](<https://openreview.net/pdf?id=WTLTiMlgq3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151966>)

Making calibrated online predictions is a central challenge in modern AI systems\. Much of the existing literature focuses on fully adversarial environments where outcomes may be arbitrary, leading to conservative algorithms that can perform suboptimally in more benign settings, such as when outcomes are nearly stationary\. This gap raises a natural question: can we design online prediction algorithms whose calibration error automatically adapts to the degree of non\-stationarity in the environment, smoothly interpolating between i\.i\.d\. and adversarial regimes? We answer this question in the affirmative and develop a suite of algorithms that achieve adaptive calibration guarantees under multiple calibration measures\. Specifically, with $T$ being the number of rounds and $C\\in\[0,T\]$ being an unknown non\-stationary measure defined as the minimal $\\ell\_1$ deviation of the mean outcomes, our algorithms attain $\\widetilde\{O\}\(\\sqrt\{T\}\+\(TC\)^\{\\frac\{1\}\{3\}\}\)$ for $\\ell\_1$ calibration error and $\\widetilde\{O\}\(\(1\+C\)^\{\\frac\{1\}\{3\}\}\)$ for both $\\ell\_2$ and pseudo KL calibration error\. These bounds match the optimal rates in the stationary case \($C=0$\) and recover known guarantees in the fully adversarial regime \($C=T$\)\. Our approach builds on and extends prior work \[Hu et al\., 2025, Luo et al\., 2025\], introducing an epoch\-based scheduling together with a novel non\-uniform partition of the prediction space that allocates finer resolution near the underlying ground truth\.

## Mean Testing under Truncation beyond Gaussian

**Authors:** Yuhao Wang; Roberto I Oliveira; Themis Gouleakis

**ID:** 152034\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152034

[Paper](<https://openreview.net/forum?id=W2sWU2ZYWN>) | [PDF](<https://openreview.net/pdf?id=W2sWU2ZYWN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152034>)

We characterize the fundamental limits of high\-dimensional mean testing under arbitrary truncation, where samples are drawn from the conditional distribution $P\(\\cdot \\mid S\)$ for an unknown truncation set $S$ that may hide up to an $\\varepsilon$\-fraction of the probability mass\.  For distributions with $p$\-th directional moments of magnitude at most $\\nu\_\{P,p\}$, truncation induces a bias of order $\\mathcal\{O\}\(\\nu\_\{P,p\}\\varepsilon^\{1\-1/p\}\)$\. This bias creates a sharp information\-theoretic detectability floor: when the signal $\\alpha$ falls below this threshold, the null and alternative hypotheses are indistinguishable even with infinite data\. Above this floor, we prove that a simple second\-order test achieving near\-optimal sample complexity $$ n = \\mathcal\{O\}\\left\(\\frac\{\\\|\\Sigma\_P\\\|\}\{\(\\alpha\-4\\nu\_\{P,p\}\\varepsilon^\{1\-1/p\}\)^2\}\\sqrt\{d\}\\right\)\. $$ We further identify a structural escape from this finite\-moment bias barrier\. Under a \*directional median regularity\* assumption, truncation bias improves to linear order $\\mathcal\{O\}\(\\varepsilon\)$\. This reveals an intermediate regime in which estimation requires $\\Theta\(d\)$ samples for uniform recovery, while testing recovers the classical $\\Theta\(\\sqrt d\)$ rate once truncation bias is eliminated\. Together, our results provide a unified framework for mean testing under truncation, connecting finite\-moment, sub\-Gaussian, and median\-regular structural regimes\.

## Provably Reliable Classifier Guidance via Cross\-Entropy Control

**Authors:** Sharan Sahu; Arisina Banerjee; Yuchen Wu

**ID:** 155431\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155431

[Paper](<https://openreview.net/forum?id=5i317VTcld>) | [PDF](<https://openreview.net/pdf?id=5i317VTcld>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155431>)

_Abstract unavailable from the accessible public sources._

## Generalization at the Edge of Stability

**Authors:** Mario Tuci; Caner Korkmaz; Umut Simsekli; Tolga Birdal

**ID:** 154976\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154976

[Paper](<https://openreview.net/forum?id=9UYTAT1rtr>) | [PDF](<https://openreview.net/pdf?id=9UYTAT1rtr>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154976>)

Training modern neural networks often relies on large learning rates, operating at the \*edge of stability\*, where the optimization dynamics exhibit oscillatory and \*chaotic behaviour\*\. Empirically, this regime often yields improved generalization performance, yet the underlying mechanism remains poorly understood\. In this work, we represent stochastic optimizers as \*random dynamical systems\*, which often converge to a \*fractal attractor set\* \(rather than a point\) with a smaller intrinsic dimension\. Building on this connection and inspired by Lyapunov dimension theory, we introduce a novel notion of dimension, coined the \`sharpness dimension', and prove a generalization bound based on this dimension\. Our results show that generalization in the chaotic regime depends on the \*complete\* Hessian spectrum and the structure of its \*partial determinants\*, highlighting a complexity that cannot be captured by the trace or spectral norm considered in prior work\. Experiments across various MLPs and transformers validate our theory while also providing new insights into the recently observed phenomenon of grokking\.

## Looking Through the Mirror: Minimax\-Optimal Regularized Regrets in Online Learning and Bandits

**Authors:** Junghyun Lee; Yujun Kim; Chulhee Yun; Se\-Young Yun

**ID:** 150598\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150598

[Paper](<https://openreview.net/forum?id=gxjUmgllX0>) | [PDF](<https://openreview.net/pdf?id=gxjUmgllX0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150598>)

_Abstract unavailable from the accessible public sources._

## Generalization Bounds for Neural Networks with Sparse Connectivity

**Authors:** Nong Minh Hieu; Antoine Ledent

**ID:** 149238\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149238

[Paper](<https://openreview.net/forum?id=rtm9VdoJ3N>) | [PDF](<https://openreview.net/pdf?id=rtm9VdoJ3N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149238>)

_Abstract unavailable from the accessible public sources._

## Testable and Actionable Calibration for Full Swap Regret

**Authors:** Konstantina Bairaktari; Lunjia Hu; Huy Nguyen; Jonathan Ullman

**ID:** 148311\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148311

[Paper](<https://openreview.net/forum?id=yls0nG3VKg>) | [PDF](<https://openreview.net/pdf?id=yls0nG3VKg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148311>)

AI generated predictions increasingly inform decision making in critical tasks, and therefore must be trustworthy\.  One widely used measure of trustworthiness is calibration, which requires that the predictions match the true frequencies and can be treated like real probabilities of a given outcome\.  However, defining calibration is subtle, and designing good measures of calibration error has been an active topic of recent research\.  The first goal is to find calibration measures that are \*actionable\*, meaning they can inform decision makers about their utility loss when predictions are treated as true probabilities, which is known as swap regret\.  The second goal is to find calibration measures that are \*testable\*, meaning that calibration error can be measured from a small sample of predictions and outcomes\.  Although these are very basic requirements, there is no existing calibration measure that fully satisfies both properties, and all existing measures relax actionability by bounding a weaker notion of swap regret, or relax testability by having suboptimal estimation error\. We introduce a new calibration measure, Soft\-Binned Calibration Decision Loss \(SCDL\), which we prove is fully actionable without weakening either requirement, and testable with nearly optimal error rate\. In addition, SCDL satisfies other desired properties such as continuity and consistency\.  We also provide a set of experiments confirming that the theoretical advantages of SCDL compared to other measures lead to better performance in practice\.

## PAC\-Bayesian Bounds for Learning Partially Observed Stochastic Linear Time\-Invariant State\-Space Systems with Inputs and Sub\-Gaussian Noise

**Authors:** Mihaly Petreczky; Mohamad Al Ahdab; John Leth

**ID:** 154157\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154157

[Paper](<https://openreview.net/forum?id=FpjDuXISKf>) | [PDF](<https://openreview.net/pdf?id=FpjDuXISKf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154157>)

In this paper we derive a Probably Approximately Correct \(PAC\)\-Bayesian error bound for partially observed linear time\-invariant \(LTI\) stochastic dynamical systems in state\-space form with inputs\.  Such bounds are widespread in machine learning, and they are useful for characterizing the predictive power of models learned from finitely many data points\. The bound derived in this paper relates the expectation of prediction errors with the prediction error generated by the model on the data used for learning\. In addition, we show that it can also be used to derive bounds for the parameter estimation error\. In turn, this allows us to provide finite\-sample error bounds  for the prediction error and parameter estimation error for a wide class of system identification algorithms\. Furthermore, as LTI systems are a sub\-class of recurrent neural networks \(RNNs\), these error bounds could be a first step towards PAC\-Bayesian bounds for RNNs\.

## From Average Sensitivity to Small\-Loss Regret Bounds under Random\-Order Model

**Authors:** Shinsaku Sakaue; Yuichi Yoshida

**ID:** 154659\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154659

[Paper](<https://openreview.net/forum?id=ByO41cYGxg>) | [PDF](<https://openreview.net/pdf?id=ByO41cYGxg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154659>)

We study online learning in the random\-order model, where the multiset of loss functions is chosen adversarially but revealed in a uniformly random order\. By extending the \*batch\-to\-online\* transformation of Dong and Yoshida \(2023\), we show that if an offline algorithm enjoys a $\(1\+\\varepsilon\)$\-approximation guarantee, an \*average sensitivity\* bound controlled by a function $\\varphi\(\\varepsilon\)$, and stability with respect to $\\varepsilon$, then we can obtain a \*small\-loss\* regret bound typically of order $\\tilde O\(\\varphi^\{\\star\}\(\\mathrm\{OPT\}\_T\)\)$, where $\\varphi^\{\\star\}$ is the concave conjugate of $\\varphi$, $\\mathrm\{OPT\}\_T$ is the offline optimum over $T$ rounds, and $\\tilde O$ hides polylogarithmic factors in $T$\. Our result refines their original $\(1\+\\varepsilon\)$\-approximate regret guarantee and applies to a broad class of problems, including online $k$\-means clustering and online low\-rank approximation\. We further apply our approach to online submodular function minimization using $\(1\\pm\\varepsilon\)$\-cut sparsifiers of submodular hypergraphs, obtaining a small\-loss regret bound of $\\tilde O\(n^3 \+ n^\{3/4\}\\mathrm\{OPT\}\_T^\{3/4\}\)$, where $n$ is the ground\-set size; we also demonstrate its applicability to online $\\ell\_1$ regression\. Our work sheds light on the power of sparsification and related algorithmic techniques in achieving small\-loss regret bounds in the random\-order model, without requiring structural assumptions on loss functions, such as linearity or smoothness\.

## Approaching I/O\-optimality for Approximate Attention

**Authors:** Pál András Papp; Aleksandros Sobczyk; Anastasios Zouzias

**ID:** 154340\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154340

[Paper](<https://openreview.net/forum?id=EKuz0q2V2L>) | [PDF](<https://openreview.net/pdf?id=EKuz0q2V2L>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154340>)

We revisit the I/O complexity of attention in large language models\. Given query\-key\-value matrices $Q,K,V\\in\\mathbb\{R\}^\{n\\times d\}$, and a machine with fast memory size $M$, the goal is to compute the "attention matrix" $A=\\mathrm\{softmax\}\(QK^\{\\top\}/\\sqrt\{d\}\)V$ with the minimal number of data transfers between fast and slow memory\. Existing methods in the literature, most notably FlashAttention and its variants, incur an I/O cost that depends quadratically on $n$, while a trivial lower bound only requires $\\Omega\(nd\)$ I/O's to read the inputs and write the output\. In this work, we present a technique for computing attention where the I/O cost only depends almost\-linearly on $n$ in most parameter regimes\. This is achieved by developing I/O\-efficient algorithms inspired by the recent approximate attention framework of Alman and Song \[NeurIPS'23\]\. We also prove corresponding lower bounds in each parameter regime to show that our algorithms are indeed close to I/O\-optimal\.

## Simple Projection\-Free Algorithm for Contextual Recommendation with Logarithmic Regret and Robustness

**Authors:** Shinsaku Sakaue

**ID:** 148909\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148909

[Paper](<https://openreview.net/forum?id=uGztbZRzrg>) | [PDF](<https://openreview.net/pdf?id=uGztbZRzrg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148909>)

Contextual recommendation is a variant of contextual linear bandits in which the learner observes an \(optimal\) action rather than a reward scalar\. Recently, Sakaue et al\. \(2025\) developed an efficient Online Newton Step \(ONS\) approach with an $O\(d\\log T\)$ regret bound, where $d$ is the dimension of the action space and $T$ is the time horizon\. In this paper, we present a simple algorithm that is more efficient than the ONS\-based method while achieving the same regret guarantee\. Our core idea is to exploit the improperness inherent in contextual recommendation, leading to an update rule akin to the second\-order perceptron from online classification\. This removes the Mahalanobis projection step required by ONS, which is often a major computational bottleneck\.  More importantly, the same algorithm remains robust to possibly suboptimal action feedback, whereas the prior ONS\-based method required running multiple ONS learners with different learning rates for this extension\.  We describe how our method works in general Hilbert spaces \(e\.g\., via kernelization\), where eliminating Mahalanobis projections becomes even more beneficial\.

## Mirror Descent Beyond Euclidean Stability:  An Exponential Separation in Initialization Sensitivity

**Authors:** Shira Vansover\-Hager; Matan Schliserman; Ofir Schlisselberg; Tomer Koren

**ID:** 149621\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149621

[Paper](<https://openreview.net/forum?id=ojWztQNH2d>) | [PDF](<https://openreview.net/pdf?id=ojWztQNH2d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149621>)

Mirror Descent \(MD\) extends Gradient Descent \(GD\) beyond Euclidean geometry and has recently reappeared as a lens for KL\-regularized policy optimization in reinforcement learning and LLM post\-training\. This raises a basic robustness question,  crucial to reproducibility and reliability: how sensitively do MD dynamics depend on their inputs? We focus on initialization, often itself a pretrained or previously aligned model\. Quadratic\-regularized MD, including GD and Mahalanobis geometries, is well\-known to be stable for convex smooth objectives\. We show a sharp contrast: once the regularizer is non\-quadratic, MD can be exponentially more sensitive to initialization than GD, even with a well\-conditioned regularizer in Euclidean norm\. We give a three\-dimensional construction with a convex, smooth objective and a strongly convex, smooth, well\-conditioned regularizer where an initial $\\varepsilon$ perturbation is quickly amplified  to $     \\min\\\\\{         \\text\{polylog\}^\{\-1\}\(1/\\varepsilon\),         \\varepsilon e^\{\\Omega\(\\eta T\)\}     \\\\\} $ after $T$ iterations of MD with step size $\\eta$\. For canonical KL\-regularized MD on the simplex, we show that even linear objectives can amplify an initial $\\varepsilon$ perturbation exponentially fast in high\-dimensional or near\-boundary regimes\. Finally, we propose Anchored MD, which adds a Bregman term to a fixed point, and show it achieves $O\(1/\\sqrt\{T\}\)$ stability, while preserving optimization guarantees up to logarithmic factors\.

## Learning through Internalization

**Authors:** Nirmit Joshi; Marko Medvedev; Nikolaos Tsilivis; Julia Kempe; Nati Srebro

**ID:** 150503\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150503

[Paper](<https://openreview.net/forum?id=hbXu6OcZxx>) | [PDF](<https://openreview.net/pdf?id=hbXu6OcZxx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150503>)

We study internalization, the process by which neural\-network\-based systems absorb an explicit computational procedure into their own weights, and how it facilitates learning\. We investigate how transformers internalize the simulation of semiautomata by internalizing chain\-of\-thought \(CoT\) tokens, which classes of semiautomata are harder to internalize, and expose the flip side of internalization, that is, a progressive degradation of out\-of\-distribution performance\. We then provide the first provable analysis of successful internalization: for the task of learning parities, we show that a simplified one\-layer transformer provably first learns the target with explicit CoT supervision and then internalizes the autoregressive generation as CoT tokens are progressively removed, directly computing the parity\. Learning such a representation directly from data without CoT supervision is computationally hard\. Finally, we discuss how learning through internalization can be viewed as an instance of the \\textit\{Positive Distribution Shift\} phenomenon recently introduced by\~\\citet\{Med\+26\}\.

## Best Arm Identification for Bandits with Shifting Means

**Authors:** Lukas Zierahn; Wouter Koolen; Shubhada Agrawal; Christina Katsimerou; Dirk van der Hoeven

**ID:** 153746 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=J1l2Lgg3tV>) | [PDF](<https://openreview.net/pdf?id=J1l2Lgg3tV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153746>)

We study the best arm identification problem in a novel non\-stationary environment that we coin Shifting Means\. While classically the mean rewards of the $K$ arms are stable in time, in Shifting Means only the gaps $\\boldsymbol\{\\Delta\}$ between mean rewards are stable, while their common shift may be determined adversarially in each round\. The objective of the learner is to identify the best arm with high probability while minimizing sample complexity \(the fixed confidence setting\)\. Handling shifts requires new tools: we show that algorithms employing a Generalized Likelihood Ratio Test \(GLRT\) stopping rule, including the popular Track\-and\-Stop, fail under time\-varying shifts\. Instead, we propose Importance Weights for Shifting Means \($\\mathsf\{ISM\}$\)\. Assuming means bounded by $U$ and $\\sigma^2$\-sub\-Gaussian rewards, we show $\\mathsf\{ISM\}$ to be $\\delta$\-correct and to enjoy a sample complexity bound of $K \(\\sigma^2 \+ U^2\) \\Delta\_\{\\min\}^\{\-2\} \\ln \\frac\{1\}\{\\delta\}$\. We also present a matching \(up to constant factors\) worst\-case lower bound and evaluate our results empirically\.

## Improved Sample Complexity for Markov Games via Variance\-Aware Bandit Learning

**Authors:** Hanbin Zhou; Canzhe Zhao; Shuai Li

**ID:** 154198 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FTO22jVZkS>) | [PDF](<https://openreview.net/pdf?id=FTO22jVZkS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154198>)

We study the problem of learning in multi\-player general\-sum Markov games\. In the simulator setting,  where the learner can sample the next state conditioned on an arbitrary state action pair,  the previous best\-known upper bound of the sample complexity for learning an $\\varepsilon$\-approximate coarse correlated equilibrium \(CCE\) is  $\\widetilde\{O\}\(H^4S\\sum\_\{i=1\}^m A\_i/\\varepsilon^2\)$  \(Li et al\., 2022\),  where $H$ is the horizon, $S$ is the number of states, and $A\_i$ denotes the number of actions for the $i$\-th player\.  This work improves the upper bound to  $\\widetilde\{O\}\(H^4S\\max\_\{i\\in\[m\]\} A\_i/\\varepsilon^2\)$,  matching the lower bound of  $\\Omega\(H^4S\\max\_\{i\\in\[m\]\} A\_i/\\varepsilon^2\)$  \(Li et al\., 2022\)\. In the online setting, in which the learner can only sample a trajectory, the previous best\-known sample complexity upper bound  for learning CCE in multi\-player general\-sum Markov games is  $\\widetilde\{O\}\(H^6S\\max\_\{i\\in\[m\]\} A\_i/\\varepsilon^2\)$ \(Song et al\., 2021; Jin et al\., 2024; Mao et al\., 2022\)\. In this work, we improve this to  $\\widetilde\{O\}\(H^5S\\max\_\{i\\in\[m\]\} A\_i/\\varepsilon^2\)$\.  To our knowledge, this is the tightest upper bound that breaks the curse of multi\-agency\. The core of our algorithmic design and analysis is the new gap decomposition and, in particular, a bandit algorithm with a high\-probability empirical variance regret bound, which might be of independent interest\.

## Tight Generalization Bounds for Noiseless Inverse Optimization

**Authors:** Sayedpouria Fatemi; Hoomaan Maskan; Suvrit Sra; Peyman Mohajerin Esfahani

**ID:** 150967 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dvwiMuqTNa>) | [PDF](<https://openreview.net/pdf?id=dvwiMuqTNa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150967>)

Inverse optimization \(IO\) seeks to infer the parameters of a decision\-maker's objective from observed context\-action data\. We study \*noiseless IO\*, where demonstrations are generated by a ground\-truth objective\. We provide a high\-probability $\\mathcal\{O\}\(\\frac\{d\}\{T\}\)$ generalization bound for the induced action set, where $d$ is the number of unknown parameters and $T$ is the size of the training dataset\. We strengthen these guarantees under additional conditions that ensure uniqueness of the chosen action, bringing our IO guarantees in line with best\-arm identification results in the bandit literature\.  We further show that the $\\mathcal\{O\}\(\\frac\{d\}\{T\}\)$ rate is tight over all consistent estimators considered here, and extend the result to both instantaneous and cumulative regret\. Notably, the resulting regret lower bound matches the corresponding upper bounds in the adversarial setting, indicating that the stochastic IO setting is effectively adversarial for the class of estimators studied here\. Finally, we propose a parameter\-free algorithm with lower per\-iteration complexity than generic solvers\. Experiments validate the predicted rates and illustrate the tightness of our bounds\.

## Last\-Iterate Convergence of Single\-Loop Stochastic Methods for Constrained Convex\-Concave Minimax Problems

**Authors:** Taoli Zheng; Jiajin Li; Anthony Man\-Cho So

**ID:** 154326\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154326

[Paper](<https://openreview.net/forum?id=ET21F1UIPF>) | [PDF](<https://openreview.net/pdf?id=ET21F1UIPF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154326>)

_Abstract unavailable from the accessible public sources._

## Minimax Optimal Early\-Stopped Gradient Descent for Gaussian Mixture Classification

**Authors:** Alex Buna; Xiaoqi Liu; Patrick Rebeschini

**ID:** 149681\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149681

[Paper](<https://openreview.net/forum?id=oEZBdsQiXZ>) | [PDF](<https://openreview.net/pdf?id=oEZBdsQiXZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149681>)

_Abstract unavailable from the accessible public sources._

## High\-arity Sample Compression

**Authors:** Leonardo Coregliano; William Opich

**ID:** 153650\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153650

[Paper](<https://openreview.net/forum?id=Jl8WaswXxS>) | [PDF](<https://openreview.net/pdf?id=Jl8WaswXxS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153650>)

_Abstract unavailable from the accessible public sources._

## Target\-Budget Best\-Function Identification for Scaling\-Law\-Guided Model Selection

**Authors:** Iurii Dorn

**ID:** 152616 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=RmWbG71zxj>) | [PDF](<https://openreview.net/pdf?id=RmWbG71zxj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152616>)

Scaling laws are increasingly used to pick which expensive training run to scale up\. The practical question — which candidate is best at a fixed future compute budget $C^\\star$ — fits neither classical best\-arm identification nor minimum\-oriented functional bandits\. We formulate it as the \*target\-budget best\-function identification\* \(TB\-BFI\) problem, with two natural flavors: TB\-BFI\-FC asks for a $\\delta$\-correct certificate of the winner at $C^\\star$, and TB\-BFI\-FB asks for low target\-budget simple regret under a hard exploration budget\. For the shared\-exponent power\-law class we prove uniform target\-budget validity, a finite\-time stopping bound for the cost\-aware TB\-LUCB rule, and a per\-arm\-exponent perturbation extension\. We then close two structural gaps\. \*\*\(a\)\*\* We extend the theory \*beyond\* shared\-exponent to the joint $\(N,D\)$ Chinchilla law with shared but \*unknown\* exponents, via a two\-stage protocol with explicit pilot sample complexity and a quadratic\-in\-$\\epsilon$ centred\-design perturbation theorem\. \*\*\(b\)\*\* We give the first positive TB\-BFI\-FB result: a cost\-aware Sequential\-Halving algorithm whose cost\-weighted simple\-regret upper bound matches a new information\-theoretic lower bound up to the standard $K \\log K$ adaptive\-vs\-oracle gap\. Empirically, theorem\-aligned synthetic experiments certify the $C^\\star$\-winner in $95$–$100\\%$ of trials; on a char\-level transformer learning\-rate\-crossover our extrapolator picks the right arm in $3/3$ seeds where Successive Halving picks $0/3$; and on a flip\-rank Chinchilla instance the joint\-law procedure reaches $70$–$87\\%$ accuracy where the univariate $c = N \\cdot D$ baseline scores $0\\%$\.

## Rare\-Tail Statistics For Learning Biased Gaussian Halfspaces with Label Noise

**Authors:** Prateeti Mukherjee; Arya Mazumdar; Harsh Vardhan

**ID:** 150751\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150751

[Paper](<https://openreview.net/forum?id=femz7HX0tn>) | [PDF](<https://openreview.net/pdf?id=femz7HX0tn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150751>)

We revisit the classical problem of learning general Gaussian halfspaces in the presence of label noise, with particular focus on the large\-bias regime where information\-computation gaps are conjectured in several standard label\-noise models\. Concretely, we present and analyse the rare\-tail mean estimator, an extremely simple one\-shot statistic that averages only the observed minority class\. In the large bias regime, classical Averaging \(Servedio, 1999\), and related global first\-moment statistics, are provably suboptimal, while the rare\-tail mean estimator recovers the target halfspace direction at the information\-theoretic sample rate \(modulo log factors\) under a broad class of label noise models, including probit noise and margin\-monotone noise with very slow decay away from the boundary\. Notably, our guarantees allow labels arbitrarily close to the decision boundary to be nearly random, yet still obtain strong directional recovery from a small number of samples\. As an application, we show that in a two\-stage curriculum learning setup, where an average\-case margin\-dependent noise mechanism precedes the uniform\-noise target \(the worst\-case noise profile in the same family\) with the same Bayes optimal separator, our estimator supplies the missing directional accuracy needed by existing refinement routines, yielding an end\-to\-end sample\-optimal learner in the large\-bias regime\. The estimator also cleanly interpolates between the noiseless and noisy regimes\. In low\-noise settings, it retains the same sample complexity rates as classical separability\-based methods for realizable halfspace learning, while continuing to admit meaningful guarantees even after linear separability has been destroyed by noise\.

## High\-Probability Minimax Adaptive Estimation in Besov Spaces via Online\-to\-Batch

**Authors:** Paul Liautaud; Pierre Gaillard; Olivier Wintenberger

**ID:** 149324\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149324

[Paper](<https://openreview.net/forum?id=qzG736XgI9>) | [PDF](<https://openreview.net/pdf?id=qzG736XgI9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149324>)

We study nonparametric regression over Besov spaces from noisy observations under sub\-exponential noise\. Our goal is to obtain minimax\-optimal high\-probability bounds for the integrated squared error while adapting to the unknown noise level and the regularity parameters of the underlying Besov class\. We introduce a wavelet\-based online learning algorithm that sequentially processes noisy gradients and adapts to the gradient noise through an adaptive clipping rule, thus avoiding the need to tune parameters such as the noise variance or gradient bounds\. As a by\-product of our analysis, we derive high\-probability adaptive regret bounds that scale with the $\\ell\_1$\-norm of the competitor\. Finally, in the batch statistical setting, our method is the first to achieve high\-probability minimax\-optimal estimation rates over Besov spaces while adapting to all problem parameters, including the noise level\. Our approach relies on a refined online\-to\-batch conversion and exploits the structure of the squared loss in combination with self\-normalized concentration inequalities\.

## Robust Noisy Inductive Matrix Completion with Local Linear Convergence

**Authors:** Xingcai Zhou; Xin Dong; Linglong Kong

**ID:** 152973 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OyDzN5TXT4>) | [PDF](<https://openreview.net/pdf?id=OyDzN5TXT4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152973>)

We study noisy inductive matrix completion \(IMC\) in the presence of heavy\-tailed and possibly asymmetric noise, where the goal is to recover a rank\-$r$ matrix of ambient dimension $d$ given $n$ features as side prior information\. So far, there has been a lack of theoretical understanding of the statistical estimation error in noisy IMC, let alone theory under heavy\-tailed noise\. We first develop an efficient two\-stage nonconvex algorithm, called RGDIMC, via robust gradient descent with spectral initialization and feature\-aware matrix factorization, based on an adaptive Huber loss to accommodate heavy\-tailed noise\. We prove that RGDIMC converges locally at a linear rate with sample complexity depending only linearly on $n$ \(up to $\\log n$\) and logarithmically on $d$, and achieves the minimax\-optimal statistical error rate $O\_p\(\\sigma\\sqrt\{dr/p\}\)$ under merely a bounded second\-moment condition on the noise, where $r$ is the rank of the unknown core matrix\. The theoretical results are strongly supported by extensive experiments\.

## Online Directional Regression for Streaming Sufficient Dimension Reduction

**Authors:** Dohyun Kim; Hyungryul Park; Kyongwon Kim

**ID:** 148149\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148149

[Paper](<https://openreview.net/forum?id=zuuQ9Axt80>) | [PDF](<https://openreview.net/pdf?id=zuuQ9Axt80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148149>)

We develop an online directional regression for sufficient dimension reduction with streaming data\. Unlike first\-moment methods, directional regression exploits both inverse conditional means and inverse conditional variances, and can therefore recover central subspace directions generated by linear structures, symmetric dependencies, and interaction driven relationships\. Extending directional regression to the online setting is nontrivial because its kernel depends on slice\-wise inverse moments and on standardization by an unknown covariance matrix\. We address these challenges by utilizing a stable slice probability free kernel, a ridge\-stabilized recursive least\-squares estimator of the standardization operator, metric\-aware subspace tracking under a vanishing\-ridge covariance metric, and a weighted\-bootstrap ladle criterion for online structural dimension selection\. Under standard regularity conditions, the online kernel estimator is root\-$t$ consistent, the estimated generalized eigenspace consistently recovers the central subspace, and the proposed dimension selector consistently estimates the structural dimension\. Simulation studies and real\-data analyses demonstrate that the proposed method serves as a robust online alternative when the dominant data structure is unknown, adapting to both first\-moment and second\-moment\-driven dependencies while yielding substantial computational savings relative to repeated batch directional regression\.

## Sharp Non\-Asymptotic Analysis of the Penalized Challenger in $\\beta$\-EB\-TCI for Bernoulli Bandits

**Authors:** Nam Nguyen; Tuan Dam

**ID:** 150746\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150746

[Paper](<https://openreview.net/forum?id=fhaJs5TH5J>) | [PDF](<https://openreview.net/pdf?id=fhaJs5TH5J>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150746>)

Top\-two algorithms are simple and effective for fixed\-confidence best\-arm identification, but their sharp non\-asymptotic behavior is still not well understood\. We study this problem for Bernoulli bandits through $\\beta$\-EB\-TCI, the empirical\-best top\-two rule of Jourdan et al\. \(2022\), whose challenger is chosen using a Bernoulli transportation cost with a logarithmic count penalty\. We prove that, after the empirical leader has become the true best arm and its sampling fraction stays close to $\\beta$, the stopping time is $T\_\{\\beta\}^\{\\star\}\(\\mu\)\\log\(1/\\delta\)$ up to lower\-order concentration terms\. We also show that, in this regime, every challenger is sampled linearly often\. Thus, for the original algorithm without forced exploration, the main remaining difficulty is to control when the empirical leader becomes permanently correct\. These results imply a non\-asymptotic high\-probability bound for all Bernoulli instances with a unique best arm\. If the algorithm satisfies a finite\-mean sufficient\-exploration condition, the bound further yields the sharp expected sample complexity\. In particular, this gives the sharp expectation result for the unguarded Bernoulli rule when all arm means are pairwise distinct, using the sufficient\-exploration result of Jourdan et al\. \(2022\)\. Finally, if we add a mild forced\-exploration rule that contributes only $O\(\\sqrt\{Kt\}\)$ pulls up to time $t$, we obtain a self\-contained expected sample\-complexity theorem for any number of arms under the unique\-best\-arm assumption\. We also identify a limitation of proof strategies that try to handle equal suboptimal means through a single index\-comparison argument\.

## Block Optimism for Nonstationary Bandits with Latent Linear Dynamics

**Authors:** Taehyun Hwang; Hyun\-jun Choi; Heesang Ann; Min\-hwan Oh

**ID:** 151108\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151108

[Paper](<https://openreview.net/forum?id=cvXXXYmyMC>) | [PDF](<https://openreview.net/pdf?id=cvXXXYmyMC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151108>)

_Abstract unavailable from the accessible public sources._

## Linear Ensemble Sampling with Fewer Ensembles

**Authors:** Taehyun Hwang; Min\-hwan Oh

**ID:** 151202\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151202

[Paper](<https://openreview.net/forum?id=cC5lywZ79h>) | [PDF](<https://openreview.net/pdf?id=cC5lywZ79h>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151202>)

_Abstract unavailable from the accessible public sources._

## Topic\-Aware Contextual Cascading Bandits

**Authors:** Hyun\-jun Choi; Taehyun Hwang; Min\-hwan Oh

**ID:** 153868\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153868

[Paper](<https://openreview.net/forum?id=I9fcrY6tSo>) | [PDF](<https://openreview.net/pdf?id=I9fcrY6tSo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153868>)

_Abstract unavailable from the accessible public sources._

## On Minimizing Regret in Fixed\-Confidence $\\varepsilon$\-Best Arm Identification

**Authors:** Tianyuan Jin; Junwen Yang; Vincent Tan

**ID:** 155630\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155630

[Paper](<https://openreview.net/forum?id=48e13H6fg5>) | [PDF](<https://openreview.net/pdf?id=48e13H6fg5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155630>)

This paper studies the $\\varepsilon$\-best arm identification problem \($\\varepsilon$\-BAI\) for $K$\-armed bandits under the fixed\-confidence setting\. Departing from the usual objective of identifying the best arm with minimal sample complexity, we focus on minimizing the cumulative regret of identifying an $\\varepsilon$\-best arm\. We consider the usual asymptotic regime in which the error probability $\\delta$ of identifying an $\\varepsilon$\-best arm vanishes\. In this setting, we show a novel instance dependent lower bound\. In particular, we show that any family of $\(\\varepsilon,\\delta\)$\-PAC algorithms must incur an expected cumulative regret up to the stopping time that scales as $\\log\(1/\\delta\)$, with an instance\-dependent constant $C\(\\mu\)$\. This is proved using a novel regret\-aware change\-of\-measure technique that allocates information given a budget on the  regret\. To achieve this lower bound, we devise an algorithm, \\algname, that achieves the same scaling in $\\delta$, i\.e\., $\\log \(1/\\delta\)$, but with a different constant, which we call $C^\\\*\(\\mu\)$\. KL\-UCB\+Greedy  has two main benefits: \(i\) it is computationally efficient as $C^\\\*\(\\mu\)$ admits a closed\-form expression; \(ii\) in broad classes of reward distributions such as Gaussian distributions, $C^\\\*\( \\mu\) = C\( \\mu\)$, demonstrating asymptotic optimality of KL\-UCB\+Greedy within these classes\. As auxiliary results, we also derive lower bounds on the sample complexity of any family of $\(\\varepsilon,\\delta\)$\-algorithms as $\\delta$ vanishes and show that the sample complexity of KL\-UCB\+Greedy closely matches that of the lower bound on the sample complexity\.

## Optimal Dimension\-Free Sampling for Regularized Classification

**Authors:** Meyam Alishahi; Alexander Munteanu; Simon Omlor; Jeff M Phillips

**ID:** 154002\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154002

[Paper](<https://openreview.net/forum?id=Gv4HMpqs8v>) | [PDF](<https://openreview.net/pdf?id=Gv4HMpqs8v>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154002>)

We prove optimal sampling bounds achieving $\(1\\pm\\varepsilon\)$\-relative error for a broad class of Lipschitz continuous classification loss functions under various regularization terms\. This includes important functions such as logistic and sigmoid loss, hinge loss, and ReLU loss, as prominent and popular representative examples\. In particular, we prove $k^2/\\varepsilon^2$ upper and lower bounds for $\\\|\\cdot\\\|\_2/k$ regularization, and $k/\\varepsilon^2$ upper and lower bounds for $\\\|\\cdot\\\|\_1/k$ regularization\. For $\\\|\\cdot\\\|\_2^2/k$ regularization, the sampling complexity depends mainly on a bounded derivative property: if $\|g'\(x\)\|\\leq g\(x\)$, and $g\(0\)&gt;0$, and $g$ is monotonic or convex, then it admits linear in $k$ sampling complexity; otherwise the general bound is $k^2/\\varepsilon^2$\. However, if $g\(0\)=0$, our results indicate that no dimension\-free bounds are possible, and even sublinear bounds are ruled out\. All upper bounds are complemented by matching lower bounds up to polylogarithmic terms\. Moreover, our work relies conceptually and algorithmically on simple uniform or \(squared\) norm sampling and hereby improves over recent cubic $k^3/\\varepsilon^2$ sensitivity sampling bounds of  \(Alishahi and Phillips, ICML'24\)\. This is achieved by refined arguments involving higher moment bounds and empirical process analyses to avoid overcounting that appears in the de\-facto standard VC\-dimension and sensitivity framework\.

## InfoFlow: A Framework for Multi\-Layer Transformer Analysis

**Authors:** Penghao Yu; Haotian Jiang; Zeyu Bao; Qianxiao Li

**ID:** 148677 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vtzQl6Q3H4>) | [PDF](<https://openreview.net/pdf?id=vtzQl6Q3H4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148677>)

While the approximation properties of single\-layer Transformer architectures have been studied in recent works, a rigorous theoretical understanding of the multi\-layer setting remains limited\. In this work, we establish that multi\-layer Transformers possess fundamentally different approximation capabilities from single\-layer ones: for certain retrieval tasks, any single\-layer Transformer requires least $\\Omega \(\\varepsilon^\{\-k\}\)$ parameters to achieve precision $\\varepsilon$, where $k$ grows linearly with sequence length $T$, whereas a two\-layer Transformer with a single head per layer achieves the same approximation precision with at most $O \(\\varepsilon^\{\-1\}\)$ parameters\. To understand this separation, we identify two structural mechanisms underlying multi\-layer approximation\. Specifically, softmax attention can only efficiently retrieve the token attaining the maximum attention score, incurring exponential\-in\-length parameter cost for $k$\-th largest retrieval with $k \\geq 2$\. Moreover, the parameter cost of decoding coupled information scales with the size of the retrieved token set\. Motivated by these findings, we propose \*\*InfoFlow\*\*, a framework for multi\-layer Transformers\. The framework tracks an information set of accessible input positions at each token and layer, assigning an explicit approximation rate to each mode of information propagation\. This abstraction recovers known approximation bounds, remains consistent with experimental observations on trained networks, and yields concrete predictions in settings where direct theoretical analysis is currently intractable\. Our results provide a principled framework for reasoning about the approximation efficiency of multi\-layer Transformers\.

## When Does Fine\-Tuning Extract Stored Knowledge? A Relation\-Covering Theory for One\-Layer Transformers

**Authors:** Ruichen Xu; Kexin Chen

**ID:** 151493\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151493

[Paper](<https://openreview.net/forum?id=aFLMTsDeTk>) | [PDF](<https://openreview.net/pdf?id=aFLMTsDeTk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151493>)

_Abstract unavailable from the accessible public sources._

## Minimax Private Estimation of Smooth Optimal\-Transport Maps

**Authors:** Clément Lalanne; David Rodríguez\-Vítores; Franck Iutzeler; Jean\-Michel Loubes

**ID:** 150423 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=i8ObdKafCn>) | [PDF](<https://openreview.net/pdf?id=i8ObdKafCn>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150423>)

_Abstract unavailable from the accessible public sources._

## Cost\-Aware Best\-LLM Identification using Dueling Feedback

**Authors:** Sarvesh Gharat; Nikhil Karamchandani; Jayakrishnan Nair

**ID:** 151916 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WwFT9uaTpj>) | [PDF](<https://openreview.net/pdf?id=WwFT9uaTpj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151916>)

_Abstract unavailable from the accessible public sources._

## PPO in the Fisher\-Rao geometry

**Authors:** Razvan\-Andrei Lascu; David Siska; Lukasz Szpruch

**ID:** 150259 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jV7duiklPg>) | [PDF](<https://openreview.net/pdf?id=jV7duiklPg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150259>)

Proximal Policy Optimization \(PPO\) is widely used in reinforcement learning due to its strong empirical performance, yet it lacks formal guarantees for policy improvement and convergence\. PPO's clipped surrogate objective is motivated by a lower bound on linearization of the value function in flat geometry setting\. We derive a tighter surrogate objective and introduce Fisher\-Rao PPO \(FR\-PPO\) by leveraging the Fisher\-Rao \(FR\) geometry\. Our scheme provides strong theoretical guarantees, including monotonic policy improvement\. In the direct parametrization setting, we show that FR\-PPO achieves sub\-linear convergence, and for parametrized policies we further obtain sub\-linear convergence up to the compatible function approximation error\. Finally, although our primary focus is theoretical, we also demonstrate empirically that FR\-PPO performs well across a range of standard reinforcement learning tasks\.

## Requential Coding: Measuring Model Compressibility by Coding Data Instead of Parameters

**Authors:** Shikai Qiu; Marc Finzi; Yujia Zheng; Kun Zhang; Andrew Wilson

**ID:** 150681 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gIGw6hwmJz>) | [PDF](<https://openreview.net/pdf?id=gIGw6hwmJz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150681>)

Beyond reducing the memory footprint and costs for deployment, the extent to which a probabilistic model can be compressed is central to understanding generalization, model selection, and dataset selection\. Yet with parameter\-based compression methods \(quantization, pruning, low\-rank training\) the code length scales with model size and is insensitive to how much information the model actually learned\. Prequential coding sidesteps the parameter ceiling by encoding the dataset through the learning process, but its code length includes the entropy of the data\. We introduce requential coding, a model coding scheme that is unconstrained by model size and does not pay for the data entropy: synthetic training samples are drawn from a teacher distribution and communicated relative to the student's current predictions via relative entropy coding, so the code length equals the cumulative teacher\-student KL along the training trajectory\. The resulting compressibility measure behaves qualitatively differently from parameter\-based codes\. The code length to reach a fixed target loss decreases with model and ensemble size, evidence that a more flexible model can be far simpler than its parameter count implies\. Plugged into a PAC\-Bayes bound, requential coding produces non\-vacuous generalization guarantees that improve with scale and beat even the lossless idealization of the 4\-bit GPTQ baseline that previously gave state\-of\-the\-art bounds on compute\-optimal LLMs\. The same code length predicts overfitting in data\-constrained training and tracks intuitive ordering of dataset complexity across CIFAR\-5M, OpenWebText, and FineWeb\.

