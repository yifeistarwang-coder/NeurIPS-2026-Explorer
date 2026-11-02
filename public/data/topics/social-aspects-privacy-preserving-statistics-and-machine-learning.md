# Social Aspects / Privacy\-preserving Statistics and Machine Learning

社会影响与可信人工智能 / 隐私保护统计与机器学习

92 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Correlating Cross\-Iteration Noise for DP\-SGD using Model Curvature

**Authors:** Xin Gu; Yingtai Xiao; Guanlin He; Jiamu Bai; Daniel Kifer; Kiwan Maeng

**ID:** 151628 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z96zEg7guN>) | [PDF](<https://openreview.net/pdf?id=Z96zEg7guN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151628>)

Differentially private stochastic gradient descent \(DP\-SGD\) is used to train deep learning models while mitigating many privacy risks\. One popular line of work, designed to chip away at the accuracy gap between DP\-SGD and normal SGD training, is known as DP\-MF\. To each update, it adds privacy noise that is correlated across training iterations, so that later noise partially cancels out earlier noise\. The noise correlation structure is determined by solving an optimization problem, but a key question is not well\-understood: what important properties does the noise correlation need in order to improve accuracy? In this paper, we identify two ways that noise affects the training trajectory \-\-\- noise alters the \*value\* of the gradient, and also alters the \*location\* at which subsequent gradients are computed\. Prior works addressed the first but overlooked the second effect, realizing only limited benefits\. Our analysis results in a new objective function for determining cross\-iteration noise correlation\. Our technique, NoiseCurve,  consistently improves accuracy over DP\-BandMF, the state\-of\-the\-art DP\-MF scheme, on various computer vision and NLP tasks\. NoiseCurve uses an upper bound $\\hat\{H\}$ on the Hessians of the loss that could be encountered during training\. We show how to estimate $\\hat\{H\}$ using public data and evaluate robustness to errors in $\\hat\{H\}$\. To avoid direct computation of $\\hat\{H\}$, or even its eigenspectrum, we show how to adapt the Lanczos method\.

## Prune to Protect: Faster Training and Enhanced Privacy by Dynamic Data Pruning

**Authors:** Chinmay Joshi; Advait Gadhikar; Celia Rubio\-Madrigal; Aneet Kumar Dutta; Mridula Singh; Rebekka Burkholz

**ID:** 151415 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aqIbhSL3JS>) | [PDF](<https://openreview.net/pdf?id=aqIbhSL3JS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151415>)

Deep networks memorize parts of their training data, exposing them to privacy attacks such as membership inference\. The most vulnerable samples are often hard\-to\-learn tail examples: they are fitted late, carry high information for generalization, and are difficult to protect without sacrificing performance\. We show that this privacy–utility tension can be mitigated by learning such samples earlier\. To this end, we propose Weighted Loss InfoBatch \(WLIB\), which dynamically prunes easy samples while re\-weighting hard ones according to sample\-wise pruning ratios\. By adjusting the influence of informative samples throughout training, WLIB jointly reduces memorization, improves robustness to membership inference attacks, and speeds up optimization\. Extensive experiments demonstrate that WLIB achieves a favorable combination of privacy, utility, and training efficiency\.

## On Inherent Privacy of Posterior Sampling: A Unified R\\'enyi\-Divergence Framework

**Authors:** Ruyu Zhou; Fang Liu

**ID:** 151785 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y14ZdLhgIu>) | [PDF](<https://openreview.net/pdf?id=Y14ZdLhgIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151785>)

Differential Privacy \(DP\) provides a rigorous framework for quantifying privacy guarantees\. While most methods achieve DP by injecting calibrated random noise, the intrinsic randomness of certain procedures such as sampling can yield DP guarantees \`\`for free''\. In this work, we develop a unified R\\'enyi divergence framework to characterize the inherent DP guarantees of sampling from a Bayesian posterior distribution\. We show that the privacy loss incurred by One\-Posterior\-Sampling \(OPS\) is governed by posterior exponential moments of the single\-record log\-likelihood ratio, and establish explicit DP guarantees under uniformly bounded, sub\-Gaussian, or sub\-exponential tail regimes\. We apply the framework to representative Bayesian models, including categorical likelihoods with arbitrary priors, Gaussian\-Gaussian conjugate pair, generalized linear models from the exponential family and linear regression with Gaussian likelihood, both with Gaussian priors on the regression coefficients\. Our results elucidate sample size, model structure, neighboring relations in DP \(bounded or unbounded\), and how prior if applicable, jointly determine the inherent DP guarantees of OPS\. Furthermore, our results recover the existing DP guarantees for OPS as special cases \-\- often with tighter privacy loss bounds \-\- and substantially broaden the class of Bayesian models for which the inherent DP guarantees of OPS can be rigorously characterized\.

## Efficient Label Distribution Inference Attack and Defense on Classifier Weights in Federated Learning

**Authors:** Daeyoung Choi; Gyuejeong Lee

**ID:** 149031 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tLkEoMmeYP>) | [PDF](<https://openreview.net/pdf?id=tLkEoMmeYP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149031>)

Label distribution leakage in federated learning \(FL\) poses a critical privacy threat, exposing population\-level patterns beyond individual data breaches\. Building on known correlations between class sample frequencies and classifier weight magnitudes, we demonstrate how adversaries can exploit these relationships to infer label distributions from shared model parameters in FL\. To characterize this threat, we propose WLIA \(Weight Norm\-based Label Distribution Inference Attack\), which infers client label distributions by analyzing variations in classifier weight norms across communication rounds\. WLIA operates on the classifier layer without requiring auxiliary data, synthetic samples, or meta\-classifiers, enabling broader applicability across heterogeneous model architectures\. To counter this threat, we introduce RNR \(Randomized Weight Norm Regularization\), a defense mechanism that disrupts frequency\-weight correlations by randomly regularizing weight norms during local training\. RNR adds only a penalty term to the cross\-entropy loss, making it efficient and easy to integrate\. Comprehensive experiments across six datasets demonstrate that WLIA achieves superior inference accuracy compared to existing attacks, while RNR effectively mitigates leakage with minimal impact on utility\.

## The Price of Locality in Label Privacy: Optimal Rates for Classification and Regression

**Authors:** Zongrui Zou; Mina Dalirrooyfard; Jingcheng Liu; Jalaj Upadhyay

**ID:** 155481 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5GD7WVUF5B>) | [PDF](<https://openreview.net/pdf?id=5GD7WVUF5B>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155481>)

We study classification and regression tasks under label differential privacy \(label\-DP\), a setting where only the labels are considered sensitive information\. We quantify the "price of locality" by revealing fundamental statistical gaps between local and central privacy models\. For classification, we establish a strict separation in accuracy\. Specifically, we prove that the minimax excess risk in the local model is lower bounded by $\\Omega\(\\frac\{1\}\{\\epsilon\}\\sqrt\{\\text\{VC\}\(\\mathcal\{H\}\)/n\}\)$ for classification on size\-$n$ dataset, a fundamental limitation that holds even under relaxed approximate $\(\\epsilon, \\delta\)$\-local DP\. Overcoming this barrier, we propose the first \*efficient\* central\-model algorithm that operates under the stricter pure $\\epsilon$\-DP, yet achieves a significantly improved upper bound of $\\tilde\{O\}\(\\sqrt\{\\text\{VC\}\(\\mathcal\{H\}\)/\(\\epsilon n\)\}\)$\. For linear regression, we show that local randomizers or naive central\-DP approach algorithms are statistically inefficient\. Instead, we turn to the Matrix Mechanism and use an encoder\-decoder framework built on ridge regression, which projects the data into a spherical latent space before injecting noise\. This structural design effectively isolates and exponentially suppresses the severe noise inflation typically caused by ill\-conditioned feature covariance matrices in full\-DP \(Cai et al\., The Annals of Statistics, 49\(5\)\), achieving an optimal privacy penalty of $\\tilde\{O\}\(\{d^2\}/\(\{n^2\\epsilon^2\}\)\)$  where $d$ is the feature dimension\.

## GUARD: Scalable Gradient\-based Unlearning with Adversarial Robustness Defense

**Authors:** Xuechao Lan; Wenmin Li; Sujuan Qin; Zhengping Jin; Fei Gao

**ID:** 152204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UnifcmHbFu>) | [PDF](<https://openreview.net/pdf?id=UnifcmHbFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152204>)

Machine Unlearning \(MU\) is an emerging task to remove specified training data from a trained model while preserving its utility, with Gradient\-based Unlearning \(GU\) standing out as a prevalent category due to high scalability\. However, standard MU which solely optimizes for clean accuracy, inadvertently damages adversarial robustness on the retain data\. Although a few studies extend MU to adversarially trained models, they rely on strong assumptions \(e\.g\., well\-conditioned Hessians, smoothness\) and costly Hessian\-based updates, limiting scalability and efficiency\. In this paper, we propose \*\*GUARD\*\*, a scalable and efficient framework that achieves unlearning while preserving retain\-data robustness\. Having identified the two causes of robustness degradation, we accordingly design \*Robustness\-Aware Gradient Projection\* and \*Importance\-Guided Parameter Selection\*\. Both modules rely on a compact adversarially vulnerable dataset that we construct with or without retain data, to enable scalability under varying data constraints\. Validated by theoretical analysis and experiments across 6 settings, GUARD outperforms 6 baselines, boosting robust accuracy by up to 6\.3$\\times$, closely matching the Retrain oracle in both unlearning and robustness\.

## The BatchNorm Illusion: Diagnosing Normalization Artifacts in Machine Unlearning Evaluation

**Authors:** Aaryaman Kalani; Murari Mandal; Dhruv Kumar; Mohan Kankanhalli; Yash Sinha

**ID:** 155403 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5uiFZ0FfMq>) | [PDF](<https://openreview.net/pdf?id=5uiFZ0FfMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155403>)

_Abstract unavailable from the accessible public sources._

## A Unified Framework for Adversary\-Aware Differential Privacy Bounds

**Authors:** Marika Swanberg; Meenatchi Sundaram Muthu Selva Annamalai; Jamie Hayes; Borja Balle; Adam Smith

**ID:** 153636 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jt45l0WVtc>) | [PDF](<https://openreview.net/pdf?id=Jt45l0WVtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153636>)

_Abstract unavailable from the accessible public sources._

## Shared\-Noise Mechanisms for Verifiable Differentially Private Counting

**Authors:** Sehyeon Park; Chenglin Fan

**ID:** 151772 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YACwxmEB2x>) | [PDF](<https://openreview.net/pdf?id=YACwxmEB2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151772>)

_Abstract unavailable from the accessible public sources._

## Benchmarking Membership Privacy Risks in Preference\-Based LLM Post\-Training

**Authors:** Lorenzo Rossi; Kaif Shaikh; Franziska Boenisch; Adam Dziedzic

**ID:** 139392 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TIAqMV9Kzf>) | [PDF](<https://openreview.net/pdf?id=TIAqMV9Kzf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139392>)

_Abstract unavailable from the accessible public sources._

## Publishing Below\-Threshold Triangle Counts under Local Weight Differential Privacy

**Authors:** Kevin Pfisterer; Quentin Hillebrand; Vorapong Suppakitpaisarn

**ID:** 149634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ocQWtpw7Ib>) | [PDF](<https://openreview.net/pdf?id=ocQWtpw7Ib>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149634>)

We propose an algorithm for counting below\-threshold triangles in weighted graphs under local weight differential privacy\. Although many prior studies have considered the setting in which the graph topology is public and only the edge weights are sensitive, to the best of our knowledge, this is the first work to study this privacy notion in the local model\. Building on a two\-round protocol for locally differentially private triangle counting, we exploit the public graph topology to design a novel algorithmic framework\. This leads to significant improvements in both accuracy and scalability\.   In particular, when the input graph is planar, our algorithm  eliminates the covariance arising from distributed triangle counting at nodes; for graphs with bounded degeneracy, it significantly reduces this covariance\. Since covariance is the dominant source of error in the counting task, our method achieves accuracy that closely aligns with the lower bound\.  We also present an efficient algorithm for the computation of the smooth sensitivity and provide experiments that quantify the trade\-off between the biased and unbiased variants of our estimator and demonstrate the effectiveness of the proposed improvements\.

## On Differentially Private Mechanisms for Linear Regression

**Authors:** Bardiya Aryanfard; Monika Henzinger; Farhood Rostamkhani

**ID:** 151830 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xd1wBiiFWf>) | [PDF](<https://openreview.net/pdf?id=Xd1wBiiFWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151830>)

We study the classic least\-squares linear regression problem under differential privacy \(DP\) in the continual observation setting\. In this setting, the mechanism receives a stream of $n$ data points $\(x\_i,y\_i\)$ \($x\_i\\in\\mathbb\{R\}^d$ and $y\_i\\in\\mathbb\{R\}$\) and must output an estimate of the optimal parameters at each time step $i$\. Although differentially private linear regression has been extensively studied in the batch setting, the problem remains underexplored for the continual setting, with prior work being restricted to constrained linear regression and update time polynomial in $n$\.  In this work, we introduce ContinualAdaSSP, the first mechanism for unconstrained linear regression under continual differential privacy\. Our mechanism's suboptimality gap is proportional to $\\sqrt\{d\}\\operatorname\{polylog\}\(n\)$\. It requires $O\(d^2\\log\{n\}\)$ space and $O\(d^2\\log\{n\}\+d^\{\\omega\}\)$ \($\\omega$ is the matrix multiplication exponent\.\) update time, where $d$ is the dimension of the input space\.  This matches the suboptimality gap of the continual mechanism for the constrained version\.  We also study fundamental limits of differentially private linear regression by showing the first  lower bounds for the box\-constrained least\-squares linear regression problem\. Our lower bounds are proportional to $\\min\(n,\\frac\{\\sqrt\{d\}\}\{\\log^\{1\.5\}d\}\)$ for $\(1,O\(\\frac\{1\}\{n\}\)\)$\-DP, and $\\min\(n,\\frac\{d\}\{\\varepsilon\}\)$ for $\\varepsilon$\-DP, and are derived using a reduction from a fingerprinting code problem from \[Peter et al, 2024\], providing new insights into the inherent hardness of this canonical task\.   Our experimental evaluation on real\-world datasets shows that the accuracy of our mechanism  clearly outperforms  any other known differentially private mechanism for this problem such as rerunning the batch algorithm at each time step\.

## PACZero: PAC\-Private Fine\-Tuning of Language Models via Sign Quantization

**Authors:** Murat Bilgehan Ertan; Xiaochen Zhu; Ha Nguyen; Marten van Dijk; Srinivas Devadas

**ID:** 149731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nn9uSJJgXG>) | [PDF](<https://openreview.net/pdf?id=nn9uSJJgXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149731>)

We introduce PACZero, a family of PAC\-private zeroth\-order mechanisms for fine\-tuning large language models that delivers usable utility at $I\(S^\*; Y\_\{1:T\}\)=0$\. This privacy regime bounds the membership\-inference attack \(MIA\) posterior success rate at the prior, an MIA\-resistance level the DP framework matches only at $\\varepsilon=0$ and infinite noise\. All DP\-ZO comparisons below are matched at the MIA posterior level\. The key insight is that PAC Privacy charges mutual information only when the release depends on which candidate subset is the secret\. Sign\-quantizing subset\-aggregated zeroth\-order gradients creates frequent unanimity, steps at which every candidate subset agrees on the update direction; at these steps the released sign costs zero conditional mutual information\. We propose two variants that span the privacy\-utility trade\-off: PACZero\-MI \(budgeted MI via exact calibration on the binary release\) and PACZero\-ZPL \($I=0$ via a uniform coin flip on disagreement steps\)\. We evaluate on SST\-2 and SQuAD with OPT\-1\.3B and OPT\-6\.7B in both LoRA and full\-parameter tracks\. On SST\-2 OPT\-1\.3B full fine\-tuning at $I=0$, PACZero\-ZPL reaches $\{88\.99\\pm0\.91\}$, within $2\.1$pp of the non\-private MeZO baseline \($91\.1$ FT\)\. No prior method produces usable utility in the high\-privacy regime $\\varepsilon&lt;1$, and PACZero\-ZPL obtains competitive SST\-2 accuracy and nontrivial SQuAD F1 across OPT\-1\.3B and OPT\-6\.7B at $I=0$\.

## Minimax Optimal Two\-Sample Testing under Local Differential Privacy

**Authors:** Jongmin Mun; Seungwoo Kwak; Ilmun Kim

**ID:** 156669 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156669>)

We explore the trade\-off between privacy and statistical utility in private two\-sample testing
under local differential privacy \(LDP\) for both multinomial and continuous data\. We begin
with the multinomial case, where we introduce private permutation tests using practical
privacy mechanisms such as Laplace, discrete Laplace, and Google’s RAPPOR\. We then
extend this approach to continuous data via binning and study its uniform separation under
LDP over Hölder and Besov smoothness classes\. The proposed tests for both discrete and
continuous cases rigorously control type I error for any finite sample size, strictly adhere
to LDP constraints, and achieve minimax optimality under LDP\. The attained minimax
rates reveal inherent privacy\-utility trade\-offs that are unavoidable in private testing\. To
address scenarios with unknown smoothness parameters in density testing, we propose a
Bonferroni\-type adaptive test that ensures robust performance without prior knowledge of
the smoothness parameters\. We validate our theoretical findings with extensive numerical
experiments and demonstrate the practical relevance and effectiveness of our proposed
methods\.

## Sequential Membership Inference Attacks

**Authors:** Thomas Michel; Debabrota Basu; Emilie Kaufmann

**ID:** 149251 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rm2zTbl2zd>) | [PDF](<https://openreview.net/pdf?id=rm2zTbl2zd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149251>)

Modern AI models are not static\. They go through multiple updates in their lifecycles\. We propose to design Sequential Membership Inference \(SeMI\) attacks leading to tighter privacy audits by exploiting the sequence of models and injecting a target canary at a controlled insertion time\. First, for empirical mean computation, we develop $\\mathrm\{SeMI\}^\{\\ast\}$, an optimal SeMI attack to identify the presence of a target inserted at a specific insertion step\. We derive the power of $\\mathrm\{SeMI\}^\{\\ast\}$ to show that accessing the model sequence yields more powerful MI attacks than scrutinising only the final model\. $\\mathrm\{SeMI\}^\{\\ast\}$ exhibits an isolation property\-\- its power depends on the statistics obtained right before and after insertion of the target\. Leveraging this insight, we develop practical white\-box \(accessing model gradients\) and black\-box \(accessing loss\) SeMI attacks against models trained with \(DP\-\)SGD\. Across datasets and models trained with \(DP\-\)SGD, our experiments show that SeMI attacks achieve higher powers than snapshot\-independent baselines, and yield tighter privacy audits thanks to \(a\) control over the insertion time and \(b\) observations across the model sequence\.

## SynBench: A Benchmark for Differentially Private Text Generation

**Authors:** Yidan Sun; Viktor Schlegel; Srinivasan Nandakumar; Iqra Zahid; Yuping Wu; Yulong Wu; Hao Li; Jie Zhang; Warren Del\-Pinto; Goran Nenadic; Siew Kei Lam; Anil A Bharath

**ID:** 139111 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRbRRTtsgf>) | [PDF](<https://openreview.net/pdf?id=kRbRRTtsgf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139111>)

_Abstract unavailable from the accessible public sources._

## Private Prediction via Shrinkage

**Authors:** Chao Yan

**ID:** 148813 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uvZy6ayJ3a>) | [PDF](<https://openreview.net/pdf?id=uvZy6ayJ3a>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148813>)

We study \\emph\{differentially private prediction\} introduced by Dwork and Feldman \(COLT 2018\): an algorithm receives one labeled sample set $S$ and then answers a stream of unlabeled queries while the output transcript remains $\(\\varepsilon,\\delta\)$\-differentially private with respect to $S$\. Standard composition yields a $\\sqrt\{T\}$ dependence for $T$ queries, i\.e\. $O\(VC\(\\mathcal\{C\}\)\\cdot\\sqrt\{T\}\)$ sample complexity\.   We show that this dependence can be reduced to \\emph\{polylogarithmic\} in $T$ in streaming settings\. For an oblivious online adversary and any concept class $\\mathcal\{C\}$, we give a private predictor that answers $T$ queries with $\|S\|= \\tilde\{O\}\(VC\(\\mathcal\{C\}\)^\{3\.5\}\\log^\{3\.5\}T\)$ labeled examples\. For an adaptive online adversary and halfspaces over $\\mathbb\{R\}^d$, we obtain $\|S\|=\\tilde\{O\}\\left\(d^\{5\.5\}\\log T\\right\)$\.

## An Õptimal Differentially Private PAC Learner for Concept Classes with VC Dimension 1

**Authors:** Chao Yan

**ID:** 149826 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=n1036lYSI7>) | [PDF](<https://openreview.net/pdf?id=n1036lYSI7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149826>)

We present the first nearly optimal differentially private PAC learner for any concept class with VC dimension 1 and Littlestone dimension $d$\. Our algorithm achieves the sample complexity of $\\tilde\{O\}\_\{\\varepsilon,\\delta,\\alpha,\\beta\}\(\\log^\*d\)$, nearly matching the lower bound of $\\Omega\(\\log^\*d\)$ proved by Alon et al\. \[STOC19\]\. Prior to our work, the best known upper bound is $\\tilde\{O\}\(VC\\cdot d^5\)$ for general VC classes, as shown by Ghazi et al\. \[STOC21\]\.  The main idea is to combine the tree structure of VC\-dimension\-$1$ classes with the private median primitive for interior\-point selection\. We first privately locate a good depth in the tree, then privately identify a good node on that layer\. For proper learning, we show how to descend from the improper output to a proper leaf while controlling the additional false positives\.

## Differentially Private Sparse Reward Estimation with Preference Feedback

**Authors:** Meng Ding; Mingxi Lei; Jie Zhang; Jinyan Liu; Di Wang

**ID:** 148832 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=up1oAQCUCJ>) | [PDF](<https://openreview.net/pdf?id=up1oAQCUCJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148832>)

Reinforcement Learning with Human Feedback \(RLHF\) has become a central paradigm for aligning Large Language Models with human values\. However, the reliance on sensitive preference data necessitates rigorous differential privacy \(DP\) guarantees to prevent user information leakage\. Existing private alignment methods typically assume dense reward parameterizations, resulting in estimation error bounds that scale polynomially with the ambient \{model size $d$\}\. Such dependence is prohibitive in modern \{overparameterized models\} where $d$ is vast\.  In this work, we study \\emph\{Private Sparse RLHF\} problem to address this limitation, assuming that human preferences \(reward model\) are governed by a subset of $s^\* \\ll d$ relevant features\.  We provide the first comprehensive theoretical framework for differentially private sparse reward estimation from pairwise preference feedback under the Bradley\-Terry\-Luce model, and introduce efficient algorithms for both Sample\-DP and Label\-DP settings\.  Theoretically, under the squared $\\ell\_2$ parameter estimation error, we establish upper bounds of $\\widetilde\{O\}\(s\*/n \+ \{s\*\}^2/n^2\\varepsilon^2\)$ for $\(\\varepsilon,\\delta\)$\-Sample\-DP and $\\widetilde\{O\}\(s\*/n \+ s\*/n\\varepsilon^2\)$ for $\\varepsilon$\-Label\-DP based on randomized response, where $n$ is the training data size\. For the lower bounds, we show that the Sample\-DP rate is nearly optimal, and that the guarantee for our Label\-DP method cannot be further improved within the randomized\-response framework\. We also provide a general lower bound for the problem with Label\-DP\. Empirically, our framework demonstrates superior efficacy over dense baselines across sentiment generation and safety alignment benchmarks, offering a significantly more favorable privacy\-utility trade\-off\.

## SnapAudit: Active Auditing of Differentially Private In\-Context Learning via Snapshot\-Based Simulation

**Authors:** Yuyang Xia; Ruixuan Liu; Li Xiong

**ID:** 150952 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e433uTcElT>) | [PDF](<https://openreview.net/pdf?id=e433uTcElT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150952>)

In\-context learning \(ICL\) allows LLMs to adapt to new tasks via a few demonstrations, but those demonstrations may contain sensitive data\. Differentially private \(DP\) ICL mechanisms mitigate this risk by injecting noise into the aggregation step, but verifying that an implementation actually meets its claimed privacy bound currently requires repeated end\-to\-end membership\-inference attacks \(MIAs\) against the pipeline as a black box, incurring prohibitive LLM cost and yielding unstable empirical privacy estimates\. We propose SnapAudit, an active auditing framework that decomposes a DP\-ICL pipeline into a deterministic clean\-inference stage and a stochastic DP\-noise stage, and audits the full pipeline by combining a small snapshot of the former with bootstrap simulation of the latter\. Because clean LLM outputs are near\-deterministic at temperature zero, a few thousand clean LLM calls suffice to approximate the snapshot distribution; SnapAudit then bootstraps $10^5$ noisy trials from this snapshot at negligible additional cost, with finite\-sample uncertainty controlled via an empirical Bernstein correction\. For embedding\-based mechanisms, we further introduce a multi\-sweep search procedure that constructs maximally separable audit signals\. SnapAudit achieves $80$\-\-$200\\times$ speedup over prior passive auditing while producing tighter and more stable empirical privacy estimates that closely match theoretical guarantees\. Beyond efficiency, SnapAudit uncovers two concrete flaws in existing DP\-ICL designs: \(i\) classical Gaussian noise calibrations underestimate leakage at large privacy budgets, allowing empirical leakage to exceed the theoretical bound; \(ii\) the sensitivity analysis of an embedding\-aggregation mechanism is incorrect when the number of partitions equals one, leading to undersized noise and an outright privacy violation\.

## GUARD: Scalable Gradient\-based Unlearning with Adversarial Robustness Defense

**Authors:** Xuechao Lan; Wenmin Li; Sujuan Qin; Zhengping Jin; Fei Gao

**ID:** 152204\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152204

[Paper](<https://openreview.net/forum?id=UnifcmHbFu>) | [PDF](<https://openreview.net/pdf?id=UnifcmHbFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152204>)

Machine Unlearning \(MU\) is an emerging task to remove specified training data from a trained model while preserving its utility, with Gradient\-based Unlearning \(GU\) standing out as a prevalent category due to high scalability\. However, standard MU which solely optimizes for clean accuracy, inadvertently damages adversarial robustness on the retain data\. Although a few studies extend MU to adversarially trained models, they rely on strong assumptions \(e\.g\., well\-conditioned Hessians, smoothness\) and costly Hessian\-based updates, limiting scalability and efficiency\. In this paper, we propose \*\*GUARD\*\*, a scalable and efficient framework that achieves unlearning while preserving retain\-data robustness\. Having identified the two causes of robustness degradation, we accordingly design \*Robustness\-Aware Gradient Projection\* and \*Importance\-Guided Parameter Selection\*\. Both modules rely on a compact adversarially vulnerable dataset that we construct with or without retain data, to enable scalability under varying data constraints\. Validated by theoretical analysis and experiments across 6 settings, GUARD outperforms 6 baselines, boosting robust accuracy by up to 6\.3$\\times$, closely matching the Retrain oracle in both unlearning and robustness\.

## Privacy by Postprocessing the Discrete Laplace Mechanism

**Authors:** Quentin Hillebrand; Jacob Imola; Rasmus Pagh; Sia Sejer

**ID:** 150901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eYwUlKuL6y>) | [PDF](<https://openreview.net/pdf?id=eYwUlKuL6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150901>)

We show that an "old dog," the classical discrete Laplace \(aka\. geometric\) mechanism, can "perform new tricks":  \* It can be post\-processed to yield a simple, unbiased estimator of any subexponential function $f$ of the original data, giving a simple, discrete, multivariate version of the recent unbiasing result for the Laplace mechanism by Calmon et al\. \(FORC '25\)\. \* It can be post\-processed to output the same distribution as the Laplace mechanism or the Staircase mechanism with identical privacy parameters\.  Thus, the discrete Laplace mechanism is a versatile mechanism that should be preferred over the Laplace and Staircase mechanisms whenever the data is discrete \(or can be made discrete while controlling $\\ell\_1$\-sensitivity\)\.      We show bounds on the variance of our estimator, compared to the mean square error of the biased estimator that simply evaluates the $f$ on the output of the mechanism\. Though our unbiased estimator has exponential running time for worst\-case functions, we show that it can often be computed in linear or polynomial time for concrete, structured functions\. We showcase the properties of our methods empirically with several use cases including profile and entropy estimation, as well as distributed/federated data analysis applications in which unbiasedness is key to accuracy\.

## Ask in the Crowd: Differentially Private LLM Inference via Dummy\-Augmented Shuffling

**Authors:** Zhihao Liu; Zixiong Guo; Shuo Shao; Yu He; Wenli Wang; Meihui Chen; Di Wang; Yuke Hu

**ID:** 149860 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mitOdW71vU>) | [PDF](<https://openreview.net/pdf?id=mitOdW71vU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149860>)

Large language models are increasingly deployed as LLM\-as\-a\-Service \(LLMaaS\), where user queries are sent to remote LLMs for inference, raising severe privacy concerns about the exposure of sensitive user inputs\. Differentially private inference mitigates these risks by injecting noise into input embeddings\. However, existing methods struggle to balance privacy and utility, as stronger privacy protection often leads to substantial accuracy degradation in LLM inference\.  In this work, we propose DP\-SPD, a differentially private LLM inference framework that protects user queries by hiding the real query among client\-generated dummy queries\. All queries are randomly shuffled before being sent to the server, preventing direct identification of the user's true intent\. To improve inference efficiency, we exploit the shared\-prefix structure among queries and reuse transformer key\-\-value \(KV\) caches during decoding\. We analyze the privacy guarantee of DP\-SPD and evaluate its utility on classification and generation tasks, as well as its privacy protection under EIA, MIA, and GPT\-based attacks\. Experimental results show that our method achieves strong inference\-time privacy protection while maintaining utility close to plain\-text inference under practical latency\.

## Causal Evaluation of Membership Inference Attacks

**Authors:** Mathieu Even; Clément Berenfeld; Linus Bleistein; Tudor Cebere; Julie Josse; Aurélien Bellet

**ID:** 154373 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=E37QGIQj5A>) | [PDF](<https://openreview.net/pdf?id=E37QGIQj5A>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154373>)

Membership Inference Attacks \(MIAs\) aim to distinguish training points \(members\) from unseen data \(non\-members\), and are widely used to quantify memorization and assess privacy risks\. Standard MIA evaluation requires repeated retraining, which is computationally costly for large models\. One\-run \(single training with randomized data inclusion\) and zero\-run \(post hoc evaluation\) methods are often used instead, but their statistical validity remains unclear\. We address this gap by framing MIA evaluation as a causal inference problem, defining \*memorization as the causal effect of including a data point in the training set\*\. This novel formulation reveals and formalizes key sources of bias in existing protocols: one\-run methods suffer from interference between jointly included points, while zero\-run evaluations are additionally confounded by distribution shift between member and non\-member evaluation data\. We derive causal analogues of standard MIA metrics and propose practical estimators for multi\-run, one\-run, and zero\-run regimes with non\-asymptotic consistency guarantees\. We validate our approach in several settings, including pretrained and fine\-tuned LLMs, showing that it enables reliable measurement of MIA performance without retraining and under distribution shift\. Overall, our framework provides a principled foundation for privacy evaluation in modern AI systems\.

## Federated Dataset Simulation: Inducing Label\-Free Heterogeneity Across Tasks

**Authors:** Vasilis Siomos; Lam Ngo; Jonathan Passerat\-Palmbach; Giacomo Tarroni

**ID:** 139042 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oIgrH55uFj>) | [PDF](<https://openreview.net/pdf?id=oIgrH55uFj>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139042>)

Federated Learning enables collaborative model training across decentralized clients without sharing raw data\. While the field has seen rapid growth, the datasets underpinning FL evaluation have not kept pace: real federated datasets remain scarce, and most studies rely on small\-scale centralized classification datasets partitioned via Dirichlet label skew, a one\-dimensional proxy for the multi\-dimensional heterogeneity present in real federations\. Moreover, label\-based partitioning is by construction inapplicable to non\-classification tasks such as segmentation and detection, for which no principled simulation method exists\. We cast the conversion of centralized datasets into federated benchmarks as the task of Federated Dataset Simulation \(FDS\), and decompose it into a representation function $\\Phi$ and an assignment mechanism $\\pi$\. We provide two label\-free instantiations\-\-\-geometric partitioning via pretrained model embeddings and semantic partitioning via vision\-language model\-derived criteria\-\-\-applicable to classification and dense prediction tasks alike\. We evaluate across four datasets spanning classification, segmentation, and detection, and show that both methods induce heterogeneity that matches or exceeds that of label\-skew partitioning, with measurable impact on downstream FL performance\. We release \\texttt\{fds\}, a modular open\-source package for end\-to\-end federated dataset simulation, heterogeneity measurement, and FL training, at \\url\{https://anonymous\.4open\.science/r/FDS\-neurips/\}\.

## Privately Clipping Heavy\-Tailed Data

**Authors:** Matthew Joseph; Alex Kulesza

**ID:** 154273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F3Hoi9uC0q>) | [PDF](<https://openreview.net/pdf?id=F3Hoi9uC0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154273>)

Summing vectors is a basic task in differentially private data analysis\. Standard algorithms clip vectors to some bound, sum them, and add noise scaled to the bound\. While the differential privacy literature has developed a deep library of such noise addition mechanisms, it offers few tools for privately choosing the clipping bound directly from the data\. We introduce a method that privately chooses a clipping bound by optimizing residual coherence, the directional alignment of vectors exceeding the bound, against the variance cost of additional noise\. We prove a close relationship between residual coherence and bias for a general class of heavy\-tailed data regimes and show empirically that, across several datasets, our method outperforms existing baselines\.

## Understanding Private Evolution as Learning\-Augmented Clustering

**Authors:** Audra McMillan; Kunal Talwar; Felix Zhou

**ID:** 150694 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gD2JAPGJBq>) | [PDF](<https://openreview.net/pdf?id=gD2JAPGJBq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150694>)

Private Evolution \(PE\) is a differentially private algorithm for synthetic data generation\. While it can be viewed as a Wasserstein learning algorithm, it performs much better in practice than worst‑case Wasserstein analyses would predict\. We recast PE as a generative model‑augmented Wasserstein learning\. We show theoretically that when we take into account the use of a generative model that is able to capture something about the true distribution, then PE provably obtains much better performance bounds\. For example, if the generator gives samples in the same low\-dimensional space as the distribution, then the sample complexity depends on the intrinsic, not the ambient, dimension\. We also show that standard variants of PE can fail to converge on simple well\-clustered instances, and propose a new geometry\-aware version of PE with provable convergence on such instances\. Experimentally, we show that our new algorithm has consistent empirical gains over standard baselines\.

## Prune to Protect: Faster Training and Enhanced Privacy by Dynamic Data Pruning

**Authors:** Chinmay Joshi; Advait Gadhikar; Celia Rubio\-Madrigal; Aneet Kumar Dutta; Mridula Singh; Rebekka Burkholz

**ID:** 151415\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151415

[Paper](<https://openreview.net/forum?id=aqIbhSL3JS>) | [PDF](<https://openreview.net/pdf?id=aqIbhSL3JS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151415>)

Deep networks memorize parts of their training data, exposing them to privacy attacks such as membership inference\. The most vulnerable samples are often hard\-to\-learn tail examples: they are fitted late, carry high information for generalization, and are difficult to protect without sacrificing performance\. We show that this privacy–utility tension can be mitigated by learning such samples earlier\. To this end, we propose Weighted Loss InfoBatch \(WLIB\), which dynamically prunes easy samples while re\-weighting hard ones according to sample\-wise pruning ratios\. By adjusting the influence of informative samples throughout training, WLIB jointly reduces memorization, improves robustness to membership inference attacks, and speeds up optimization\. Extensive experiments demonstrate that WLIB achieves a favorable combination of privacy, utility, and training efficiency\.

## Complexity of Differentially Private Selection via Federated APIs

**Authors:** Hilal Asi; Vitaly Feldman; Jelani Nelson; Huy Nguyen; Kunal Talwar; Samson Zhou

**ID:** 153126 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=NjjTjmwMry>) | [PDF](<https://openreview.net/pdf?id=NjjTjmwMry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153126>)

Differential privacy \(DP\) has become the standard for privacy\-preserving data analysis, yet its practical implementation in federated or distributed settings often faces a significant utility gap compared to the central model\. While existing frameworks, including local, shuffle, and secure aggregation models, offer vetted primitives, they frequently suffer from high error rates for some important functionalities such as selection\. Our first contribution is to show that this is inherent in the aggregation model: any private selection algorithm relying on the standard noisy aggregation primitive requires $\\Omega\(\\sqrt\{d\}/\\varepsilon\)$ samples\. To address this limitation, we propose adding a new primitive that implements a version of the \\textit\{Sparse Vector Technique\} \(SVT\) and argue that it has simple implementations under various trust models\. We demonstrate its power by developing an $\\varepsilon$\-differentially private algorithm for the selection problem\. For selection in dimension $d$, our algorithm achieves an additive error of $O\\left\(\\frac\{\\log d\}\{\\varepsilon\}\\right\)$ matching that of the central model\. Further, we show this can be done using a near\-optimal number of SVT queries\. Together with existing lower bounds for the shuffle model, this result establishes an exponential separation between the SVT model and shuffling or aggregation\-based models\. We demonstrate the model's broad applicability to diverse tasks such as $F\_p$ loss minimization, heavy\-hitter identification, and sparse mean estimation\.

## What to Remember, What to Reveal: Privacy\-Aware Memory for Conversational Agents

**Authors:** Wenjie Wang; Wenhe Si; Xinyue Xu; Yue Xu

**ID:** 149905 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mLdUy1WYEJ>) | [PDF](<https://openreview.net/pdf?id=mLdUy1WYEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149905>)

Long\-term memory enables personalized conversational agents to retain user information across sessions\. However, existing memory architectures primarily optimize for utility but neglect the risks of storing and reusing private attributes such as personally identifiable information \(PII\) unnecessarily\. Dealing with privacy risk in personalized memory is challenging as simply removing sensitive values would undermine the utility of the memory system\. Therefore, privacy protection for memory agents must govern the full life\-cycle of sensitive values rather than just sanitizing individual records\. To fill this research gap, we introduce $\\textbf\{S\}$anitized $\\textbf\{P\}$rivacy\-$\\textbf\{M\}$apped M$\\textbf\{em\}$ory \(SP\-Mem\), a privacy\-aware memory architecture that decouples memory utility from exact private\-value exposure\. SP\-Mem provides full life\-cycle privacy\-related design including determining how to identify and separate sensitive information from raw user inputs, how to store sanitized content and exact private values in isolated structures, and how to selectively retrieve values based on the task requirement and user consent\. We further introduce a privacy\-aware memory benchmark that jointly assesses response quality, privacy behavior, and inference cost\. Extensive experiments across multiple LLM\-based agents show that SP\-Mem achieves stronger personalization while reducing unnecessary privacy exposure\. Code and data are available at https://anonymous\.4open\.science/r/SP\-Mem\-0CAE/\.

## Row\-Private Symmetric Cone Programming: Scale\-Efficient Algorithm and Lower Bound

**Authors:** Deming Chu; Ruizhe Zhang

**ID:** 152815 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QC9kYaQ3KF>) | [PDF](<https://openreview.net/pdf?id=QC9kYaQ3KF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152815>)

We study the row\-private approximate feasibility problem for symmetric cone programs \(SCPs\),  a framework that encompasses linear, second\-order cone, and semidefinite programming\.  We focus on high\-sensitivity row privacy, where each record is a constraint and  changing one record can cause the feasible region to change discontinuously\.  Since satisfying every private row is generally impossible in this regime,  the goal is to remain exactly in the public cone while violating only a small number  of private rows under a prescribed additive error $\\eta&gt;0$\.  We give an efficient $\(\\varepsilon, \\delta\)$\-differentially private SCP solver  with violation count  $\\widetilde\{O\}\\left\(k^2/\\varepsilon\\right\)$, and only logarithmic dependence  on the scale\-to\-error ratio $UR/\\eta$, where $k$ is the ambient dimension,  $R$ is the norm of some feasible point, and $U$ is the size of the problem\.  This exponentially improves the polynomial dependence on $U$, $R$,  and $1/\\eta$ in prior work \(Song, Xue, and Zhang, NeurIPS 2025\)\.  Furthermore, we show that additive error does not remove the intrinsic dimension\-dependence  barrier\.  Previous row\-private LP lower bounds \(Kaplan, Mansour, Moran, Stemmer, and Tur, STOC 2025\) established an $\\Omega\(k/\\varepsilon\)$ violation count only for exact partial satisfaction; using the padding\-and\-permuting fingerprinting codes \(Peter, Tsfadia, and Ullman, COLT 2024\), we prove the same barrier for relaxed satisfaction\.

## Computationally Efficient Replicable Learning of Parities and Applications

**Authors:** Moshe Noivirt; Jessica Sorrell; Eliad Tsfadia

**ID:** 150028 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lJzvyZGkHM>) | [PDF](<https://openreview.net/pdf?id=lJzvyZGkHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150028>)

We study the computational relationship between replicability \(Impagliazzo et al\. \[STOC \`22\], Ghazi et al\. \[NeurIPS \`21\]\) and other stability notions\.  Specifically, we focus on replicable PAC learning and its connections to differential privacy \(Dwork et al\. \[TCC 2006\]\) and to the statistical query \(SQ\) model \(Kearns \[JACM \`98\]\)\. Statistically, it was known that differentially private learning and replicable learning are equivalent and strictly more powerful than SQ\-learning\. Yet, computationally, all previously known efficient \(i\.e\., polynomial\-time\) replicable learning algorithms were confined to SQ\-learnable tasks or restricted distributions, in contrast to differentially private learning\.   Our main contribution is the first computationally efficient replicable algorithm for realizable learning of parities over arbitrary distributions, a task that is known to be hard in the SQ\-model, but possible under differential privacy\. This result provides the first evidence that efficient replicable learning over general distributions strictly extends efficient SQ\-learning, and is closer in power to efficient differentially private learning, despite computational separations between replicability and privacy\. Additionally, we leverage our parity learner to prove that, assuming $RP \\neq NP$, converting replicability to pure differential privacy requires a strict loss in sample complexity\. Our main building block is a new, efficient and replicable algorithm that, given a set of vectors, outputs a subspace of their linear span that covers most of them\.

## Provable Robustness against Backdoor Attacks via the Primal\-Dual Perspective on Differential Privacy

**Authors:** Aman Saxena; Jan Schuchardt; Yan Scholten; Stephan Günnemann

**ID:** 153879 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I4p58bdzvx>) | [PDF](<https://openreview.net/pdf?id=I4p58bdzvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153879>)

Randomized smoothing provides a powerful framework for certifying robustness against adversarial perturbations by injecting randomized noise either into the training process \(against poisoning attacks\) or model inputs \(against evasion attacks\)\. Yet, extending these guarantees to hold against backdoor attacks, where adversaries jointly perturb both training and test data, remains challenging\. In particular, certifying general mechanisms requires tight, compositional guarantees over heterogeneous randomized components, which are not jointly supported by existing approaches\. We address this gap by proposing a general framework that numerically composes robustness guarantees for arbitrary mechanisms while remaining tightly connected to black\-box randomized smoothing guarantees\. To achieve this, we establish a connection between randomized smoothing and the dual perspective of differential privacy, enabling us to leverage advances in the analysis of differentially private mechanisms together with tight numerical composition\. This yields a modular framework in which robustness guarantees are derived by reasoning about the privacy of individual components and composing them end\-to\-end\. We instantiate our framework for DP\-SGD and Deep Partition Aggregation with inference\-time smoothing, deriving joint robustness guarantees against both training\-time and inference\-time attacks\. Empirically, we demonstrate the effectiveness of our framework on MNIST and CIFAR\-10\. Overall, we provide a principled and general framework for certifying robustness under complex joint threat models and mechanisms, laying the groundwork for future research on unified certification methods towards guarantees under more complex real\-world adversaries\.

## BiShield\-TEE: On the \(In\-\)Security of Unilateral Weight Obfuscation in On\-Device TEE\-Shielded LLM Partition

**Authors:** Wang Zhiyuan; Yuezhi Zhou; Ziqi Zhang; Zhu Zhang; Zhixing Tan; Yongheng Deng

**ID:** 152920 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PQQKAksTi4>) | [PDF](<https://openreview.net/pdf?id=PQQKAksTi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152920>)

On\-device deployment of large language models \(LLMs\) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft\. Trusted Execution Environments \(TEEs\) provide hardware\-enforced isolation for on\-device inference, yet most TEE\-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only output side\. We identify a vulnerability in this design, termed the Solution Determinacy Property \(SDP\): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection\.  Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over $2\.4\\times$ the full\-shielding black\-box baseline and recovering near\-complete model functionality\. To address this vulnerability, we propose BiShield\-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates\. Experiments across diverse models and datasets show that BiShield\-TEE confines attack accuracy to the full\-shielding black\-box baseline, while achieving higher inference efficiency than prior methods on real hardware\. Our code is available at https://anonymous\.4open\.science/r/BiShield\-TEE\-28DF\.

## Differentially Private Model Merging

**Authors:** Qichuan Yin; Manzil Zaheer; Tian Li

**ID:** 149241 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtA6xeWV0d>) | [PDF](<https://openreview.net/pdf?id=rtA6xeWV0d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149241>)

_Abstract unavailable from the accessible public sources._

## Jaguar: Fast Private CNN Inference with Power\-of\-Two Homomorphic Arithmetic

**Authors:** Yewon Jeong; Nayoung Jung; Hyeri Roh; Woo\-Seok Choi

**ID:** 148765 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vEZC3kzDrD>) | [PDF](<https://openreview.net/pdf?id=vEZC3kzDrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148765>)

_Abstract unavailable from the accessible public sources._

## Models Designed to Forget: Machine Unlearning via Key Deletion

**Authors:** Sonia Laguna; Jorge da Silva Gonçalves; Moritz Vandenhirtz; Alain Ryser; Irene Cannistraci; Julia Vogt

**ID:** 156131 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0AcunXOaV1>) | [PDF](<https://openreview.net/pdf?id=0AcunXOaV1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156131>)

_Abstract unavailable from the accessible public sources._

## Differentially Private Model Merging

**Authors:** Qichuan Yin; Manzil Zaheer; Tian Li

**ID:** 149241\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149241

[Paper](<https://openreview.net/forum?id=rtA6xeWV0d>) | [PDF](<https://openreview.net/pdf?id=rtA6xeWV0d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149241>)

_Abstract unavailable from the accessible public sources._

## We Should Distinguish Unlearning From Untraining

**Authors:** Eleni Triantafillou; Imtiaz Humayun; Mónica Ribero; Alexander Turner; Michael Mozer; Georgios Kaissis

**ID:** 140062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9dDSCabjP>) | [PDF](<https://openreview.net/pdf?id=U9dDSCabjP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140062>)

There has been a recent surge in interest about the question of how we can "delete" specific data points or behaviours from a trained model, a goal referred to as "machine unlearning"\. We argue that the umbrella term "unlearning" actually spans two distinct problem formulations, but the distinction between them has not yet been observed in literature\. This causes ambiguity around when an unlearning algorithm is expected to work, leads to the use of inappropriate metrics and baselines when comparing algorithms to one another, difficulty in interpreting results, and missed opportunities for pursuing critical research directions\. In this paper, we argue for the position that a fundamental distinction must be made between two notions that we refer to as Unlearning and Untraining\. On one hand, Untraining aims to reverse the effect of having trained on a given "forget set", i\.e\. to remove the influence that that specific set of examples had on the model during training\. On the other hand, Unlearning aims not just to remove the influence of those given examples, but also of the entire underlying subdistribution from which they were sampled \(and thus e\.g\. the concept or model behaviour that those examples represent\)\. We discuss technical definitions of these problems and map problem settings studied in the literature to each notion\. By disambiguating technical definitions, our work aims to accelerate progress in this important field\.

## Sample\-Grained Approximate Unlearning with Provable Per\-Sample Bounds

**Authors:** Yaxin Xiao; Yulin Jin; Li Tang; Haoyang LI; Huadi Zheng; Qingqing Ye; Haibo Hu

**ID:** 155275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6tfToV92DV>) | [PDF](<https://openreview.net/pdf?id=6tfToV92DV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155275>)

Machine unlearning aims to erase the influence of a designated forget set from a trained model while preserving strong utility on the retain set\. Approximate unlearning methods efficiently achieve this goal without full retraining, but their effectiveness is primarily assessed using dataset\-level aggregate metrics\. As a result, prior work does not explicitly evaluate whether individual samples are unlearned correctly, nor does it provide mechanisms to enforce such per\-sample unlearning behavior\.  In this work, we focus on per\-sample unlearning effectiveness\. We introduce SALA \(Sample\-grained Likelihoods ALignment\), a plug\-in optimization framework that enables approximate unlearning methods to operate at the level of individual samples by steering each example toward its correct target distribution\. To quantitatively assess this behavior, we further propose the sample\-grained distribution gap, a  metric that captures per\-sample discrepancies between approximate unlearning and exact retraining output distributions\. We provide theoretical guarantees showing that SALA contracts this gap and yields a bounded per\-sample discrepancy to retraining\. To make this framework practical, we develop a low\-cost estimation method for the member and non\-member target distributions\. Extensive experiments on classification and generation tasks demonstrate that SALA reduces the sample\-grained distribution gap by up to 86\.67% when paired with existing approximate unlearning baselines, while also improving run\-to\-run robustness\.

## Privacy by Postprocessing the Discrete Laplace Mechanism

**Authors:** Quentin Hillebrand; Jacob Imola; Rasmus Pagh; Sia Sejer

**ID:** 150901\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150901

[Paper](<https://openreview.net/forum?id=eYwUlKuL6y>) | [PDF](<https://openreview.net/pdf?id=eYwUlKuL6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150901>)

We show that an "old dog," the classical discrete Laplace \(aka\. geometric\) mechanism, can "perform new tricks":  \* It can be post\-processed to yield a simple, unbiased estimator of any subexponential function $f$ of the original data, giving a simple, discrete, multivariate version of the recent unbiasing result for the Laplace mechanism by Calmon et al\. \(FORC '25\)\. \* It can be post\-processed to output the same distribution as the Laplace mechanism or the Staircase mechanism with identical privacy parameters\.  Thus, the discrete Laplace mechanism is a versatile mechanism that should be preferred over the Laplace and Staircase mechanisms whenever the data is discrete \(or can be made discrete while controlling $\\ell\_1$\-sensitivity\)\.      We show bounds on the variance of our estimator, compared to the mean square error of the biased estimator that simply evaluates the $f$ on the output of the mechanism\. Though our unbiased estimator has exponential running time for worst\-case functions, we show that it can often be computed in linear or polynomial time for concrete, structured functions\. We showcase the properties of our methods empirically with several use cases including profile and entropy estimation, as well as distributed/federated data analysis applications in which unbiasedness is key to accuracy\.

## Position: Life\-Logging Video Streams Make the Privacy–Utility Trade\-off Inevitable

**Authors:** Tianyuan Zou; Liang Yue; Yang Liu; Ya\-Qin Zhang; Sijie Cheng

**ID:** 140020 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nKQfPHaJIf>) | [PDF](<https://openreview.net/pdf?id=nKQfPHaJIf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140020>)

With the growing prevalence of always\-on hardware such as smart glasses, body cameras, and home security systems, life\-logging visual sensing is becoming inevitable, forming the backbone of persistent, always\-on AI systems\. Meanwhile, recent advances in proactive agents and world models signal a fundamental shift from episodic, prompt\-driven tools to next\-generation AI systems that continuously perceive and react to the physical world\. Although life\-logging video streams can substantially improve utility of these promising systems, they also introduce significant privacy risks by revealing sensitive information, such as behavioral patterns, emotional states, and social interactions, beyond what isolated images expose\. If unresolved, these risks may undermine public trust and hinder the sustainable development of always\-on AI technologies\. Existing privacy protections are either attack\-specific or incur substantial utility loss, and fail to consider the entire data exploitation pipeline\. We therefore posit that the privacy\-utility trade\-off in life\-logging video streams is a foundational challenge for next\-generation AI systems that demands further investigation\. We call for novel pipeline\-aware privacy\-preserving designs that jointly optimize utility and privacy for long\-horizon life\-logging visual data\. In parallel, formal privacy leakage metrics and standardized benchmarks remain important open directions for future research\.

## Lumberjack: Better Differentially Private Random Forests through Heavy Hitter Detection in Trees

**Authors:** Christian J Lebeda; David Erb; Tudor Cebere; Aurélien Bellet

**ID:** 148332 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ydhXJ2q9Ma>) | [PDF](<https://openreview.net/pdf?id=ydhXJ2q9Ma>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148332>)

Random forests are widely used in fields involving sensitive tabular data, but existing approaches to enforcing differential privacy \(DP\) typically degrade performance to the point of impracticality\. In this paper, we introduce Lumberjack, a differentially private random forest algorithm that achieves substantially higher utility by constructing large random decision trees and then applying aggressive, privacy\-preserving pruning to retain only sufficiently populated nodes\. A key component of our approach is a novel $\(\\varepsilon,\\delta\)$\-DP heavy hitter detection algorithm for hierarchical data, whose error is $O\_\{\\varepsilon,\\delta\}\(\\sqrt\{\\log h\}\)$ for trees of height $h$ and may be of independent interest\. This favorable scaling enables the use of significantly deeper trees than in prior work, leading to improved expressiveness under privacy constraints\. Our empirical evaluation on benchmark datasets shows that Lumberjack consistently outperforms prior DP random forest methods, establishing a new state of the art\. In particular, our approach yields substantial improvements in the privacy\-utility trade\-off for practical privacy budgets\. Our findings suggest that more carefully designed DP random forests can close much of the utility gap, highlighting a promising and underexplored direction for future research\.

## Inference for Many Quantiles under Local Differential Privacy

**Authors:** Qirui Hu; Yi Liu

**ID:** 148280 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z2oKVYmfLa>) | [PDF](<https://openreview.net/pdf?id=z2oKVYmfLa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148280>)

_Abstract unavailable from the accessible public sources._

## Budget\-Conditioned Clipping Policies for Differentially Private Federated Learning

**Authors:** Hao Zhou; SiQi Cai; Hua Dai; Letian Sha; Yichen Li; MingCai Chen

**ID:** 150613 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=greiwlIhYZ>) | [PDF](<https://openreview.net/pdf?id=greiwlIhYZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150613>)

_Abstract unavailable from the accessible public sources._

## Private Online Prediction from Experts with Small Losses

**Authors:** Bo Li; Peng Ye

**ID:** 149686 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAwj0VxrNb>) | [PDF](<https://openreview.net/pdf?id=oAwj0VxrNb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149686>)

_Abstract unavailable from the accessible public sources._

## Local FDR Membership Inference Attacks: Multiple Testing and the Role of Ridge Regularization

**Authors:** Jinyoung Hong; Bonwoo Lee; Jeongyoun Ahn

**ID:** 148228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zR0MYMNUF1>) | [PDF](<https://openreview.net/pdf?id=zR0MYMNUF1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148228>)

Membership inference attacks \(MIAs\) are commonly formulated as single\-sample hypothesis tests with false positive rate control\. However, realistic adversaries often test many candidate samples and aggregate the declared members, making membership inference a multiple testing problem\. In this regime, per\-sample calibration can produce unreliable sets of inferred members\. We develop a false discovery rate \(FDR\)\-controlled framework for membership inference based on the classical local FDR formulation\. We instantiate the framework for high dimensional ridge regression\. Under a conditional sufficiency condition, we establish FDR guarantee of the proposed method, and derive an asymptotic characterization of its detection power in high\-dimensional regimes under an isotropic Gaussian design\. Our analysis shows that, under FDR control, stronger ridge regularization reduces membership inference risk\. Experiments on synthetic and a real\-world dataset validate the theoretical findings and demonstrate that the proposed methods provide more reliable membership discoveries than existing attacks\.

## On Differential Private $\\ell\_1$, $\\ell\_2$ and $\\ell\_p^p$ Distance Queries

**Authors:** Erzhi Liu; Jerry Yao\-Chieh Hu; Alex Reneau; Zhao Song; Han Liu

**ID:** 151936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WifaN44w16>) | [PDF](<https://openreview.net/pdf?id=WifaN44w16>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151936>)

We introduce a refined differentially private \(DP\) data structure for kernel density estimation \(KDE\) with $\\ell\_1$, $\\ell\_2$ and $\\ell\_p^p$ kernels\. This new DP data structure offers not only improved privacy\-utility tradeoff but also better query efficiency over prior results\. Specifically, we study the mathematical problem: given a similarity function $f$ \(or DP KDE\) and a private dataset $X \\subset \\mathbb\{R\}^d$, our goal is to preprocess $X$ so that for any query $y \\in \\mathbb\{R\}^d$, we approximate $\\sum\_\{x \\in X\} f\(x, y\)$ in a differentially private fashion\. The best previous algorithm for $f\(x, y\) = \|x \- y\|\_1$ is the node\-contaminated balanced binary tree by \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\]\. Their algorithm requires $O\(nd\)$ space and time for preprocessing with $n = \|X\|$\. For any query point, the query time is $\\alpha^\{\-1\} d \\log^2 n$, with an error guarantee of $\(1\+\\alpha\)$\-approximation and $\\varepsilon^\{\-1\} \\alpha^\{\-0\.5\} d^\{1\.5\} R \\log^\{1\.5\} n$\. In this paper, we use the same space and pre\-processing time, improve the best previous result \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\] in three aspects  \- We reduce query time by $\\alpha^\{\-1\} \\log n$ factor \- We improve the approximation ratio from $\\alpha$ to $1$ \- We reduce the error dependence by a factor of $\\alpha^\{\-0\.5\}$  From a technical perspective, our method of constructing the search tree differs from previous work \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\]\. In prior work, for each query, the answer is split into $\\alpha^\{\-1\} \\log n$ numbers, each derived from the summation of $\\log n$ values in interval tree countings\. In contrast, we construct the tree differently, splitting the answer into $\\log n$ numbers, where each is a smart combination of two distance values, two counting values, and $y$ itself\. We believe our tree structure may be of independent interest\.

## Complexity of Differentially Private Selection via Federated APIs

**Authors:** Hilal Asi; Vitaly Feldman; Jelani Nelson; Huy Nguyen; Kunal Talwar; Samson Zhou

**ID:** 153126\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153126

[Paper](<https://openreview.net/forum?id=NjjTjmwMry>) | [PDF](<https://openreview.net/pdf?id=NjjTjmwMry>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153126>)

Differential privacy \(DP\) has become the standard for privacy\-preserving data analysis, yet its practical implementation in federated or distributed settings often faces a significant utility gap compared to the central model\. While existing frameworks, including local, shuffle, and secure aggregation models, offer vetted primitives, they frequently suffer from high error rates for some important functionalities such as selection\. Our first contribution is to show that this is inherent in the aggregation model: any private selection algorithm relying on the standard noisy aggregation primitive requires $\\Omega\(\\sqrt\{d\}/\\varepsilon\)$ samples\. To address this limitation, we propose adding a new primitive that implements a version of the \\textit\{Sparse Vector Technique\} \(SVT\) and argue that it has simple implementations under various trust models\. We demonstrate its power by developing an $\\varepsilon$\-differentially private algorithm for the selection problem\. For selection in dimension $d$, our algorithm achieves an additive error of $O\\left\(\\frac\{\\log d\}\{\\varepsilon\}\\right\)$ matching that of the central model\. Further, we show this can be done using a near\-optimal number of SVT queries\. Together with existing lower bounds for the shuffle model, this result establishes an exponential separation between the SVT model and shuffling or aggregation\-based models\. We demonstrate the model's broad applicability to diverse tasks such as $F\_p$ loss minimization, heavy\-hitter identification, and sparse mean estimation\.

## What to Remember, What to Reveal: Privacy\-Aware Memory for Conversational Agents

**Authors:** Wenjie Wang; Wenhe Si; Xinyue Xu; Yue Xu

**ID:** 149905\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149905

[Paper](<https://openreview.net/forum?id=mLdUy1WYEJ>) | [PDF](<https://openreview.net/pdf?id=mLdUy1WYEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149905>)

Long\-term memory enables personalized conversational agents to retain user information across sessions\. However, existing memory architectures primarily optimize for utility but neglect the risks of storing and reusing private attributes such as personally identifiable information \(PII\) unnecessarily\. Dealing with privacy risk in personalized memory is challenging as simply removing sensitive values would undermine the utility of the memory system\. Therefore, privacy protection for memory agents must govern the full life\-cycle of sensitive values rather than just sanitizing individual records\. To fill this research gap, we introduce $\\textbf\{S\}$anitized $\\textbf\{P\}$rivacy\-$\\textbf\{M\}$apped M$\\textbf\{em\}$ory \(SP\-Mem\), a privacy\-aware memory architecture that decouples memory utility from exact private\-value exposure\. SP\-Mem provides full life\-cycle privacy\-related design including determining how to identify and separate sensitive information from raw user inputs, how to store sanitized content and exact private values in isolated structures, and how to selectively retrieve values based on the task requirement and user consent\. We further introduce a privacy\-aware memory benchmark that jointly assesses response quality, privacy behavior, and inference cost\. Extensive experiments across multiple LLM\-based agents show that SP\-Mem achieves stronger personalization while reducing unnecessary privacy exposure\. Code and data are available at https://anonymous\.4open\.science/r/SP\-Mem\-0CAE/\.

## Row\-Private Symmetric Cone Programming: Scale\-Efficient Algorithm and Lower Bound

**Authors:** Deming Chu; Ruizhe Zhang

**ID:** 152815\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152815

[Paper](<https://openreview.net/forum?id=QC9kYaQ3KF>) | [PDF](<https://openreview.net/pdf?id=QC9kYaQ3KF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152815>)

We study the row\-private approximate feasibility problem for symmetric cone programs \(SCPs\),  a framework that encompasses linear, second\-order cone, and semidefinite programming\.  We focus on high\-sensitivity row privacy, where each record is a constraint and  changing one record can cause the feasible region to change discontinuously\.  Since satisfying every private row is generally impossible in this regime,  the goal is to remain exactly in the public cone while violating only a small number  of private rows under a prescribed additive error $\\eta&gt;0$\.  We give an efficient $\(\\varepsilon, \\delta\)$\-differentially private SCP solver  with violation count  $\\widetilde\{O\}\\left\(k^2/\\varepsilon\\right\)$, and only logarithmic dependence  on the scale\-to\-error ratio $UR/\\eta$, where $k$ is the ambient dimension,  $R$ is the norm of some feasible point, and $U$ is the size of the problem\.  This exponentially improves the polynomial dependence on $U$, $R$,  and $1/\\eta$ in prior work \(Song, Xue, and Zhang, NeurIPS 2025\)\.  Furthermore, we show that additive error does not remove the intrinsic dimension\-dependence  barrier\.  Previous row\-private LP lower bounds \(Kaplan, Mansour, Moran, Stemmer, and Tur, STOC 2025\) established an $\\Omega\(k/\\varepsilon\)$ violation count only for exact partial satisfaction; using the padding\-and\-permuting fingerprinting codes \(Peter, Tsfadia, and Ullman, COLT 2024\), we prove the same barrier for relaxed satisfaction\.

## Computationally Efficient Replicable Learning of Parities and Applications

**Authors:** Moshe Noivirt; Jessica Sorrell; Eliad Tsfadia

**ID:** 150028\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150028

[Paper](<https://openreview.net/forum?id=lJzvyZGkHM>) | [PDF](<https://openreview.net/pdf?id=lJzvyZGkHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150028>)

We study the computational relationship between replicability \(Impagliazzo et al\. \[STOC \`22\], Ghazi et al\. \[NeurIPS \`21\]\) and other stability notions\.  Specifically, we focus on replicable PAC learning and its connections to differential privacy \(Dwork et al\. \[TCC 2006\]\) and to the statistical query \(SQ\) model \(Kearns \[JACM \`98\]\)\. Statistically, it was known that differentially private learning and replicable learning are equivalent and strictly more powerful than SQ\-learning\. Yet, computationally, all previously known efficient \(i\.e\., polynomial\-time\) replicable learning algorithms were confined to SQ\-learnable tasks or restricted distributions, in contrast to differentially private learning\.   Our main contribution is the first computationally efficient replicable algorithm for realizable learning of parities over arbitrary distributions, a task that is known to be hard in the SQ\-model, but possible under differential privacy\. This result provides the first evidence that efficient replicable learning over general distributions strictly extends efficient SQ\-learning, and is closer in power to efficient differentially private learning, despite computational separations between replicability and privacy\. Additionally, we leverage our parity learner to prove that, assuming $RP \\neq NP$, converting replicability to pure differential privacy requires a strict loss in sample complexity\. Our main building block is a new, efficient and replicable algorithm that, given a set of vectors, outputs a subspace of their linear span that covers most of them\.

## Provable Robustness against Backdoor Attacks via the Primal\-Dual Perspective on Differential Privacy

**Authors:** Aman Saxena; Jan Schuchardt; Yan Scholten; Stephan Günnemann

**ID:** 153879\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153879

[Paper](<https://openreview.net/forum?id=I4p58bdzvx>) | [PDF](<https://openreview.net/pdf?id=I4p58bdzvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153879>)

Randomized smoothing provides a powerful framework for certifying robustness against adversarial perturbations by injecting randomized noise either into the training process \(against poisoning attacks\) or model inputs \(against evasion attacks\)\. Yet, extending these guarantees to hold against backdoor attacks, where adversaries jointly perturb both training and test data, remains challenging\. In particular, certifying general mechanisms requires tight, compositional guarantees over heterogeneous randomized components, which are not jointly supported by existing approaches\. We address this gap by proposing a general framework that numerically composes robustness guarantees for arbitrary mechanisms while remaining tightly connected to black\-box randomized smoothing guarantees\. To achieve this, we establish a connection between randomized smoothing and the dual perspective of differential privacy, enabling us to leverage advances in the analysis of differentially private mechanisms together with tight numerical composition\. This yields a modular framework in which robustness guarantees are derived by reasoning about the privacy of individual components and composing them end\-to\-end\. We instantiate our framework for DP\-SGD and Deep Partition Aggregation with inference\-time smoothing, deriving joint robustness guarantees against both training\-time and inference\-time attacks\. Empirically, we demonstrate the effectiveness of our framework on MNIST and CIFAR\-10\. Overall, we provide a principled and general framework for certifying robustness under complex joint threat models and mechanisms, laying the groundwork for future research on unified certification methods towards guarantees under more complex real\-world adversaries\.

## DPrivBench: Benchmarking LLMs' Reasoning for Differential Privacy

**Authors:** Erchi Wang; Pengrun Huang; Eli Chien; Om Thakkar; Kamalika Chaudhuri; Yu\-Xiang Wang; Ruihan Wu

**ID:** 138927 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8Uuy8t5PA>) | [PDF](<https://openreview.net/pdf?id=w8Uuy8t5PA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138927>)

_Abstract unavailable from the accessible public sources._

## BiShield\-TEE: On the \(In\-\)Security of Unilateral Weight Obfuscation in On\-Device TEE\-Shielded LLM Partition

**Authors:** Wang Zhiyuan; Yuezhi Zhou; Ziqi Zhang; Zhu Zhang; Zhixing Tan; Yongheng Deng

**ID:** 152920\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152920

[Paper](<https://openreview.net/forum?id=PQQKAksTi4>) | [PDF](<https://openreview.net/pdf?id=PQQKAksTi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152920>)

On\-device deployment of large language models \(LLMs\) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft\. Trusted Execution Environments \(TEEs\) provide hardware\-enforced isolation for on\-device inference, yet most TEE\-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only output side\. We identify a vulnerability in this design, termed the Solution Determinacy Property \(SDP\): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection\.  Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over $2\.4\\times$ the full\-shielding black\-box baseline and recovering near\-complete model functionality\. To address this vulnerability, we propose BiShield\-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates\. Experiments across diverse models and datasets show that BiShield\-TEE confines attack accuracy to the full\-shielding black\-box baseline, while achieving higher inference efficiency than prior methods on real hardware\. Our code is available at https://anonymous\.4open\.science/r/BiShield\-TEE\-28DF\.

## Revisiting Gradient Ascent: Machine Unlearning from a Geometric Perspective for Source\-Free Scenarios

**Authors:** Yufeng Cao; Naen Xu; Xuyang Teng; Tianyu Du; Qiang Zhao

**ID:** 154220 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FJsiUCGz4M>) | [PDF](<https://openreview.net/pdf?id=FJsiUCGz4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154220>)

_Abstract unavailable from the accessible public sources._

## Sort, Partition, Randomize: Optimal Binary Hypothesis Testing under Local Differential Privacy

**Authors:** Elena Ghazi; Jawad Nasser; Flavio Calmon; Ibrahim Issa

**ID:** 152035 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W2N0BOvMCF>) | [PDF](<https://openreview.net/pdf?id=W2N0BOvMCF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152035>)

_Abstract unavailable from the accessible public sources._

## Evaluating an Evaluation: Membership Inference Attacks as Machine Unlearning Diagnostics

**Authors:** Umid Suleymanov; Laman Aliyeva; Nihat Abdullayev; Saida Zarbiyeva; Murat Kantarcioglu

**ID:** 139219 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eA1BsaVVh5>) | [PDF](<https://openreview.net/pdf?id=eA1BsaVVh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139219>)

Evaluation practices in machine learning are increasingly objects of scientific study in their own right: their assumptions, statistical properties, and failure modes determine which research conclusions can be trusted\. We audit one such practice \- the use of aggregate\-subset Membership Inference Attacks \(MIAs\) for evaluating machine unlearning \- across 8 dataset\-architecture pairs, 4 unlearning methods, and over 500 experimental runs, identifying five failure modes: \(1\) limited and regime\-dependent identifiability between baseline and retrained models, with KS\-test indistinguishability \($p &gt; 0\.05$\) in $\\approx$42\\% of experiment\-\-task pairs; \(2\) regime\-dependent signal\-to\-noise collapse; \(3\) monotonicity violations in 5 of 8 experiments under graded forgetting; \(4\) inter\-task rank inconsistency, and \(5\) regime confounding by model training quality\. To quantify these failures, we develop the Membership Inference Attack Unlearning Score \(MIAU\), a normalized diagnostic framework integrating three MIA comparisons as gap closure fractions between baseline and retrained references\. We formalize four validity properties any unlearning metric should satisfy\. Our findings indicate that aggregate\-subset MIAs are reliable unlearning diagnostics only in narrow high\-memorization regimes, and motivate complementary evaluation paradigms, alongside MIA\-based protocols\.

## Monitoring Violations of Differential Privacy over Time

**Authors:** Önder Askin; Tim Kutta; Holger Dette

**ID:** 148395 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=yAEAGaQET3>) | [PDF](<https://openreview.net/pdf?id=yAEAGaQET3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148395>)

Auditing differential privacy has emerged as an important area of research that supports the design of privacy\-preserving mechanisms\. Privacy audits help to obtain empirical estimates of the privacy parameter, to expose flawed implementations of algorithms and to compare practical with theoretical privacy guarantees\. In this work, we investigate an unexplored facet of privacy auditing: the sustained auditing of a mechanism that can go through changes during its development or deployment\. Monitoring the privacy of algorithms over time comes with specific challenges\. Running state\-of\-the\-art \(static\) auditors repeatedly requires excessive sampling efforts, while the reliability of such methods deteriorates over time without proper adjustments\. To overcome these obstacles, we present a new monitoring procedure that extracts information from the entire deployment history of the algorithm\. This allows us to reduce sampling efforts, while sustaining reliable outcomes of our auditor\. We derive formal guarantees with regard to the soundness of our methods and evaluate their performance for important mechanisms from the literature\. Our theoretical findings and experiments demonstrate the efficacy of our approach\.

## POLAR\-Bench: A Diagnostic Benchmark for Privacy\-Utility Trade\-offs in LLM Agents

**Authors:** Qiaoyuan ZHENG; yiqu yang; Qi Gao; Imanol Schlag

**ID:** 139312 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y4sDfO3t6Q>) | [PDF](<https://openreview.net/pdf?id=Y4sDfO3t6Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139312>)

LLM agents increasingly have access to private user data and act on the user's behalf when interacting with third\-party systems\. The user defines what may and must not be shared, and the agent must robustly follow that intent even when third\-party systems behave adversarially\. We introduce $\\textbf\{POLAR\-Bench\}$ \($\\textbf\{Pol\}$icy\-$\\textbf\{a\}$ware adve$\\textbf\{r\}$sarial Benchmark\), in which a trusted model with a privacy policy and a task converses with a third\-party model that adversarially probes for both task\-relevant and protected attributes\. Across 10 domains and 7$\{,\}$852 samples, we score privacy and utility by deterministic set\-membership and vary privacy policy  dimension and attack strategy along two orthogonal axes, producing a $5\\times5$ diagnostic surface per model\. Our results reveal a sharp split: current frontier models withhold over 99% of protected attributes, while smaller open\-weight models in the 1\-\-30B range, the class users most commonly run as their own trusted agent on\-device or via private inference, score notably worse, with the weakest leaking over half\. POLAR\-Bench thus localizes where each model's intent\-following breaks down, providing a foothold for privacy alignment where it matters most\.

## Rank\-Aware Differentially Private Release of Listwise Preferences for LLM Alignment

**Authors:** Junwei Chen; Manjiang Yu; Pengpeng Qiao; Yang Cao

**ID:** 154517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D0Bw9TmdSJ>) | [PDF](<https://openreview.net/pdf?id=D0Bw9TmdSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154517>)

Listwise preference feedback offers richer supervision for large language model \(LLMs\) alignment than pairwise comparisons, but a full ranking also reveals more sensitive user preferences\. Existing privacy\-preserving alignment methods focus mainly on pairwise feedback, while listwise alignment under local differential privacy \(LDP\) remains unexplored\. Extending LDP to this listwise domain raises a critical challenge: the high sensitivity of the full ranking space demands excessive noise, neutralizing the benefits of listwise supervision\. To address this challenge, we analyze the interaction between supervision granularity and privacy noise in downstream training, and introduce a rank\-aware exponential mechanism that privatizes listwise preference data into a low\-sensitivity granularity suitable for downstream alignment\. The mechanism leverages ranking information to sample a fixed\-size binary partition, concentrating the noise near borderline items instead of perturbing all items uniformly as randomized response \(RR\) does\. Empirical evaluations on downstream LLM alignment tasks show that our mechanism consistently outperforms existing LDP baselines at matched privacy budgets\.

## BiShield\-TEE: On the \(In\-\)Security of Unilateral Weight Obfuscation in On\-Device TEE\-Shielded LLM Partition

**Authors:** Wang Zhiyuan; Yuezhi Zhou; Ziqi Zhang; Zhu Zhang; Zhixing Tan; Yongheng Deng

**ID:** 152920\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152920

[Paper](<https://openreview.net/forum?id=PQQKAksTi4>) | [PDF](<https://openreview.net/pdf?id=PQQKAksTi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152920>)

On\-device deployment of large language models \(LLMs\) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft\. Trusted Execution Environments \(TEEs\) provide hardware\-enforced isolation for on\-device inference, yet most TEE\-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only output side\. We identify a vulnerability in this design, termed the Solution Determinacy Property \(SDP\): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection\.  Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over $2\.4\\times$ the full\-shielding black\-box baseline and recovering near\-complete model functionality\. To address this vulnerability, we propose BiShield\-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates\. Experiments across diverse models and datasets show that BiShield\-TEE confines attack accuracy to the full\-shielding black\-box baseline, while achieving higher inference efficiency than prior methods on real hardware\. Our code is available at https://anonymous\.4open\.science/r/BiShield\-TEE\-28DF\.

## Privacy by Postprocessing the Discrete Laplace Mechanism

**Authors:** Quentin Hillebrand; Jacob Imola; Rasmus Pagh; Sia Sejer

**ID:** 150901\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150901

[Paper](<https://openreview.net/forum?id=eYwUlKuL6y>) | [PDF](<https://openreview.net/pdf?id=eYwUlKuL6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150901>)

We show that an "old dog," the classical discrete Laplace \(aka\. geometric\) mechanism, can "perform new tricks":  \* It can be post\-processed to yield a simple, unbiased estimator of any subexponential function $f$ of the original data, giving a simple, discrete, multivariate version of the recent unbiasing result for the Laplace mechanism by Calmon et al\. \(FORC '25\)\. \* It can be post\-processed to output the same distribution as the Laplace mechanism or the Staircase mechanism with identical privacy parameters\.  Thus, the discrete Laplace mechanism is a versatile mechanism that should be preferred over the Laplace and Staircase mechanisms whenever the data is discrete \(or can be made discrete while controlling $\\ell\_1$\-sensitivity\)\.      We show bounds on the variance of our estimator, compared to the mean square error of the biased estimator that simply evaluates the $f$ on the output of the mechanism\. Though our unbiased estimator has exponential running time for worst\-case functions, we show that it can often be computed in linear or polynomial time for concrete, structured functions\. We showcase the properties of our methods empirically with several use cases including profile and entropy estimation, as well as distributed/federated data analysis applications in which unbiasedness is key to accuracy\.

## What to Remember, What to Reveal: Privacy\-Aware Memory for Conversational Agents

**Authors:** Wenjie Wang; Wenhe Si; Xinyue Xu; Yue Xu

**ID:** 149905\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149905

[Paper](<https://openreview.net/forum?id=mLdUy1WYEJ>) | [PDF](<https://openreview.net/pdf?id=mLdUy1WYEJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149905>)

Long\-term memory enables personalized conversational agents to retain user information across sessions\. However, existing memory architectures primarily optimize for utility but neglect the risks of storing and reusing private attributes such as personally identifiable information \(PII\) unnecessarily\. Dealing with privacy risk in personalized memory is challenging as simply removing sensitive values would undermine the utility of the memory system\. Therefore, privacy protection for memory agents must govern the full life\-cycle of sensitive values rather than just sanitizing individual records\. To fill this research gap, we introduce $\\textbf\{S\}$anitized $\\textbf\{P\}$rivacy\-$\\textbf\{M\}$apped M$\\textbf\{em\}$ory \(SP\-Mem\), a privacy\-aware memory architecture that decouples memory utility from exact private\-value exposure\. SP\-Mem provides full life\-cycle privacy\-related design including determining how to identify and separate sensitive information from raw user inputs, how to store sanitized content and exact private values in isolated structures, and how to selectively retrieve values based on the task requirement and user consent\. We further introduce a privacy\-aware memory benchmark that jointly assesses response quality, privacy behavior, and inference cost\. Extensive experiments across multiple LLM\-based agents show that SP\-Mem achieves stronger personalization while reducing unnecessary privacy exposure\. Code and data are available at https://anonymous\.4open\.science/r/SP\-Mem\-0CAE/\.

## Row\-Private Symmetric Cone Programming: Scale\-Efficient Algorithm and Lower Bound

**Authors:** Deming Chu; Ruizhe Zhang

**ID:** 152815\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152815

[Paper](<https://openreview.net/forum?id=QC9kYaQ3KF>) | [PDF](<https://openreview.net/pdf?id=QC9kYaQ3KF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152815>)

We study the row\-private approximate feasibility problem for symmetric cone programs \(SCPs\),  a framework that encompasses linear, second\-order cone, and semidefinite programming\.  We focus on high\-sensitivity row privacy, where each record is a constraint and  changing one record can cause the feasible region to change discontinuously\.  Since satisfying every private row is generally impossible in this regime,  the goal is to remain exactly in the public cone while violating only a small number  of private rows under a prescribed additive error $\\eta&gt;0$\.  We give an efficient $\(\\varepsilon, \\delta\)$\-differentially private SCP solver  with violation count  $\\widetilde\{O\}\\left\(k^2/\\varepsilon\\right\)$, and only logarithmic dependence  on the scale\-to\-error ratio $UR/\\eta$, where $k$ is the ambient dimension,  $R$ is the norm of some feasible point, and $U$ is the size of the problem\.  This exponentially improves the polynomial dependence on $U$, $R$,  and $1/\\eta$ in prior work \(Song, Xue, and Zhang, NeurIPS 2025\)\.  Furthermore, we show that additive error does not remove the intrinsic dimension\-dependence  barrier\.  Previous row\-private LP lower bounds \(Kaplan, Mansour, Moran, Stemmer, and Tur, STOC 2025\) established an $\\Omega\(k/\\varepsilon\)$ violation count only for exact partial satisfaction; using the padding\-and\-permuting fingerprinting codes \(Peter, Tsfadia, and Ullman, COLT 2024\), we prove the same barrier for relaxed satisfaction\.

## Computationally Efficient Replicable Learning of Parities and Applications

**Authors:** Moshe Noivirt; Jessica Sorrell; Eliad Tsfadia

**ID:** 150028\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150028

[Paper](<https://openreview.net/forum?id=lJzvyZGkHM>) | [PDF](<https://openreview.net/pdf?id=lJzvyZGkHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150028>)

We study the computational relationship between replicability \(Impagliazzo et al\. \[STOC \`22\], Ghazi et al\. \[NeurIPS \`21\]\) and other stability notions\.  Specifically, we focus on replicable PAC learning and its connections to differential privacy \(Dwork et al\. \[TCC 2006\]\) and to the statistical query \(SQ\) model \(Kearns \[JACM \`98\]\)\. Statistically, it was known that differentially private learning and replicable learning are equivalent and strictly more powerful than SQ\-learning\. Yet, computationally, all previously known efficient \(i\.e\., polynomial\-time\) replicable learning algorithms were confined to SQ\-learnable tasks or restricted distributions, in contrast to differentially private learning\.   Our main contribution is the first computationally efficient replicable algorithm for realizable learning of parities over arbitrary distributions, a task that is known to be hard in the SQ\-model, but possible under differential privacy\. This result provides the first evidence that efficient replicable learning over general distributions strictly extends efficient SQ\-learning, and is closer in power to efficient differentially private learning, despite computational separations between replicability and privacy\. Additionally, we leverage our parity learner to prove that, assuming $RP \\neq NP$, converting replicability to pure differential privacy requires a strict loss in sample complexity\. Our main building block is a new, efficient and replicable algorithm that, given a set of vectors, outputs a subspace of their linear span that covers most of them\.

## Provable Robustness against Backdoor Attacks via the Primal\-Dual Perspective on Differential Privacy

**Authors:** Aman Saxena; Jan Schuchardt; Yan Scholten; Stephan Günnemann

**ID:** 153879\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153879

[Paper](<https://openreview.net/forum?id=I4p58bdzvx>) | [PDF](<https://openreview.net/pdf?id=I4p58bdzvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153879>)

Randomized smoothing provides a powerful framework for certifying robustness against adversarial perturbations by injecting randomized noise either into the training process \(against poisoning attacks\) or model inputs \(against evasion attacks\)\. Yet, extending these guarantees to hold against backdoor attacks, where adversaries jointly perturb both training and test data, remains challenging\. In particular, certifying general mechanisms requires tight, compositional guarantees over heterogeneous randomized components, which are not jointly supported by existing approaches\. We address this gap by proposing a general framework that numerically composes robustness guarantees for arbitrary mechanisms while remaining tightly connected to black\-box randomized smoothing guarantees\. To achieve this, we establish a connection between randomized smoothing and the dual perspective of differential privacy, enabling us to leverage advances in the analysis of differentially private mechanisms together with tight numerical composition\. This yields a modular framework in which robustness guarantees are derived by reasoning about the privacy of individual components and composing them end\-to\-end\. We instantiate our framework for DP\-SGD and Deep Partition Aggregation with inference\-time smoothing, deriving joint robustness guarantees against both training\-time and inference\-time attacks\. Empirically, we demonstrate the effectiveness of our framework on MNIST and CIFAR\-10\. Overall, we provide a principled and general framework for certifying robustness under complex joint threat models and mechanisms, laying the groundwork for future research on unified certification methods towards guarantees under more complex real\-world adversaries\.

## DPrivBench: Benchmarking LLMs' Reasoning for Differential Privacy

**Authors:** Erchi Wang; Pengrun Huang; Eli Chien; Om Thakkar; Kamalika Chaudhuri; Yu\-Xiang Wang; Ruihan Wu

**ID:** 138927\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 138927

[Paper](<https://openreview.net/forum?id=w8Uuy8t5PA>) | [PDF](<https://openreview.net/pdf?id=w8Uuy8t5PA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138927>)

_Abstract unavailable from the accessible public sources._

## Correlating Cross\-Iteration Noise for DP\-SGD using Model Curvature

**Authors:** Xin Gu; Yingtai Xiao; Guanlin He; Jiamu Bai; Daniel Kifer; Kiwan Maeng

**ID:** 151628\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151628

[Paper](<https://openreview.net/forum?id=Z96zEg7guN>) | [PDF](<https://openreview.net/pdf?id=Z96zEg7guN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151628>)

Differentially private stochastic gradient descent \(DP\-SGD\) is used to train deep learning models while mitigating many privacy risks\. One popular line of work, designed to chip away at the accuracy gap between DP\-SGD and normal SGD training, is known as DP\-MF\. To each update, it adds privacy noise that is correlated across training iterations, so that later noise partially cancels out earlier noise\. The noise correlation structure is determined by solving an optimization problem, but a key question is not well\-understood: what important properties does the noise correlation need in order to improve accuracy? In this paper, we identify two ways that noise affects the training trajectory \-\-\- noise alters the \*value\* of the gradient, and also alters the \*location\* at which subsequent gradients are computed\. Prior works addressed the first but overlooked the second effect, realizing only limited benefits\. Our analysis results in a new objective function for determining cross\-iteration noise correlation\. Our technique, NoiseCurve,  consistently improves accuracy over DP\-BandMF, the state\-of\-the\-art DP\-MF scheme, on various computer vision and NLP tasks\. NoiseCurve uses an upper bound $\\hat\{H\}$ on the Hessians of the loss that could be encountered during training\. We show how to estimate $\\hat\{H\}$ using public data and evaluate robustness to errors in $\\hat\{H\}$\. To avoid direct computation of $\\hat\{H\}$, or even its eigenspectrum, we show how to adapt the Lanczos method\.

## Lumberjack: Better Differentially Private Random Forests through Heavy Hitter Detection in Trees

**Authors:** Christian J Lebeda; David Erb; Tudor Cebere; Aurélien Bellet

**ID:** 148332\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148332

[Paper](<https://openreview.net/forum?id=ydhXJ2q9Ma>) | [PDF](<https://openreview.net/pdf?id=ydhXJ2q9Ma>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148332>)

Random forests are widely used in fields involving sensitive tabular data, but existing approaches to enforcing differential privacy \(DP\) typically degrade performance to the point of impracticality\. In this paper, we introduce Lumberjack, a differentially private random forest algorithm that achieves substantially higher utility by constructing large random decision trees and then applying aggressive, privacy\-preserving pruning to retain only sufficiently populated nodes\. A key component of our approach is a novel $\(\\varepsilon,\\delta\)$\-DP heavy hitter detection algorithm for hierarchical data, whose error is $O\_\{\\varepsilon,\\delta\}\(\\sqrt\{\\log h\}\)$ for trees of height $h$ and may be of independent interest\. This favorable scaling enables the use of significantly deeper trees than in prior work, leading to improved expressiveness under privacy constraints\. Our empirical evaluation on benchmark datasets shows that Lumberjack consistently outperforms prior DP random forest methods, establishing a new state of the art\. In particular, our approach yields substantial improvements in the privacy\-utility trade\-off for practical privacy budgets\. Our findings suggest that more carefully designed DP random forests can close much of the utility gap, highlighting a promising and underexplored direction for future research\.

## Privately Clipping Heavy\-Tailed Data

**Authors:** Matthew Joseph; Alex Kulesza

**ID:** 154273\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154273

[Paper](<https://openreview.net/forum?id=F3Hoi9uC0q>) | [PDF](<https://openreview.net/pdf?id=F3Hoi9uC0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154273>)

Summing vectors is a basic task in differentially private data analysis\. Standard algorithms clip vectors to some bound, sum them, and add noise scaled to the bound\. While the differential privacy literature has developed a deep library of such noise addition mechanisms, it offers few tools for privately choosing the clipping bound directly from the data\. We introduce a method that privately chooses a clipping bound by optimizing residual coherence, the directional alignment of vectors exceeding the bound, against the variance cost of additional noise\. We prove a close relationship between residual coherence and bias for a general class of heavy\-tailed data regimes and show empirically that, across several datasets, our method outperforms existing baselines\.

## SMI: Statistical Membership Inference for Reliable Unlearned Model Auditing

**Authors:** Jialong Sun; Zeming Wei; Jiaxuan Zou; Jiacheng Gong; Chengyang Dong; Jie Fu; Heng Xu; Jialong Li; Bo Liu

**ID:** 153407 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LZfoK7J0Q5>) | [PDF](<https://openreview.net/pdf?id=LZfoK7J0Q5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153407>)

Machine unlearning \(MU\) is essential for enforcing the right to be forgotten in machine learning systems\. A key challenge of MU is how to reliably audit whether a model has truly forgotten specified training data\. Membership Inference Attacks \(MIAs\) are widely used for unlearned model auditing, where samples that evade membership detection are regarded as successfully forgotten\. We show this assumption is fundamentally flawed: failed membership inference does not imply true forgetting\. We prove that unlearned samples occupy a fundamentally different positions in the feature space feature space than non\-member samples, making this alignment bias unavoidable and unobservable, which leads to systematically optimistic evaluations of unlearning performance\. Meanwhile, training shadow models for MIA incurs substantial computational overhead\. To address both limitations, we propose Statistical Membership Inference \(SMI\), a training\-free auditing framework that reformulates auditing as estimating the non\-member mixture proportion in the unlearned feature distribution\. Beyond estimating the forgetting rate, SMI also provides bootstrap reference ranges for quantified auditing reliability\. Extensive experiments show that SMI consistently outperforms all MIA\-based baselines, with no shadow model training required\. Overall, SMI establishes a principled and efficient alternative to MIA\-based auditing methods, with both theoretical guarantees and strong empirical performance\.

## Optimal Rates for Adaptive Private $k$\-PCA

**Authors:** Johanna Düngler; Amartya Sanyal

**ID:** 152628 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rgs7JZ6dSS>) | [PDF](<https://openreview.net/pdf?id=Rgs7JZ6dSS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152628>)

Given $n$ i\.i\.d\. random matrices $A\_i \\in \\mathbb\{R\}^\{d \\times d\}$ with common expectation $\\Sigma$, the goal of Differentially Private Stochastic PCA is to identify a $k$\-dimensional subspace capturing the leading variance directions of $\\Sigma$, while preserving differential privacy \(DP\) for each individual sample $A\_i$\. Düngler &amp; Sanyal \[2025\] introduced $k$\-DP\-PCA, the first algorithm to simultaneously \(1\) achieve sample complexity $n=\\widetilde O\(d\)$ for sub\-Gaussian data, \(2\) adapt its privacy noise to the intrinsic randomness of the data, and \(3\) extend seamlessly to any target dimension $k\\le d$\. However, its sample complexity has a suboptimal dependence on $k$\. We propose the first algorithm that achieves optimal sample complexity in both $d$ and $k$, while retaining \(2\) and \(3\) of $k$\-DP\-PCA\. In addition, our method removes the exponential dependence on the eigengap that appears in the sample\-size lower bound required by prior utility guarantees, and improves the dependence on spectral parameters to match known lower bounds for the spiked covariance model\. Unlike deflation\-based approaches like $k$\-DP\-PCA, our algorithm updates the full $d\\times k$ subspace jointly rather than one eigenvector at a time\. This non\-deflation structure simplifies the algorithm, reduces the number of hyper\-parameters, and improves computational efficiency, particularly when using block linear algebra libraries\.

## Shuffle and Joint Differential Privacy for Generalized Linear Contextual Bandits

**Authors:** Sahasrajit Sarmasarkar

**ID:** 151992 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WJANtQdwZH>) | [PDF](<https://openreview.net/pdf?id=WJANtQdwZH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151992>)

We present the first algorithms for generalized linear contextual bandits under shuffle differential privacy and joint differential privacy\. While prior work on private contextual bandits has been restricted to linear reward models\-\-\-which admit closed\-form estimators\-\-\-generalized linear models \(GLMs\) pose fundamental new challenges: no closed\-form estimator exists, requiring private convex optimization; privacy must be tracked across multiple evolving design matrices; and optimization error must be explicitly incorporated into regret analysis\.  We address these challenges under two privacy models and context settings\. For stochastic contexts, we design a shuffle\-DP algorithm with regret $\\tilde\{O\}\\\!\\big\(d^\{3/2\}\\sqrt\{T \\log T\} \+ d^\{5/4\} \\sqrt\{T/\\varepsilon\} \(\\log T\)^\{3/4\}\\big\)$ in the dominant term, matching the non\-private rate $\\tilde\{O\}\(d \\sqrt\{T \\log T\}\)$ in the leading\-in\-$T$ term up to a multiplicative factor of $\\sqrt d$ and a privacy correction term of $\\tilde\{O\}\(d^\{5/4\}\\sqrt\{T \\log T/\\varepsilon\}\)$\. For adversarial contexts, we provide a joint\-DP algorithm with regret $\\tilde\{O\}\\\!\\big\(d\\sqrt\{T\}\\log T \+ d^\{3/4\}\\sqrt\{T/\\varepsilon\}\\,\(\\log T\)\\,\(d\+\\log T\)^\{1/4\}\\big\)$ matching the non\-private rate $\\tilde\{O\}\(d\\sqrt\{T\}\\log T\)$ in the leading term\. Unlike prior work on locally private GLM bandits, our methods require no spectral assumptions on the context distribution beyond $\\ell\_2$ boundedness\.

## Revisiting Gradient Ascent: Machine Unlearning from a Geometric Perspective for Source\-Free Scenarios

**Authors:** Yufeng Cao; Naen Xu; Xuyang Teng; Tianyu Du; Qiang Zhao

**ID:** 154220\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154220

[Paper](<https://openreview.net/forum?id=FJsiUCGz4M>) | [PDF](<https://openreview.net/pdf?id=FJsiUCGz4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154220>)

_Abstract unavailable from the accessible public sources._

## Sort, Partition, Randomize: Optimal Binary Hypothesis Testing under Local Differential Privacy

**Authors:** Elena Ghazi; Jawad Nasser; Flavio Calmon; Ibrahim Issa

**ID:** 152035\-\-2 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152035

[Paper](<https://openreview.net/forum?id=W2N0BOvMCF>) | [PDF](<https://openreview.net/pdf?id=W2N0BOvMCF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152035>)

_Abstract unavailable from the accessible public sources._

## ERIS: Enhancing Privacy and Scalability in Federated Learning via Federated Shard Aggregation

**Authors:** Dario Fenoglio; Pasquale Polverino; Jacopo Quizi; Martin Gjoreski; Akash Dhasade; Marc Langheinrich

**ID:** 151365 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b7CsCWQwlK>) | [PDF](<https://openreview.net/pdf?id=b7CsCWQwlK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151365>)

Scaling Federated Learning \(FL\) to billion\-parameter models forces a challenging trade\-off between privacy, scalability, and model utility\.      Existing solutions often tackle these challenges in isolation, sacrificing accuracy, relying on costly cryptographic tools, or introducing communication and optimization inefficiencies that affect convergence\. We introduce ERIS, an FL framework centered on \_Federated Shard Aggregation\_ \(FSA\), a novel mechanism that partitions each client update into non\-overlapping shards whose aggregation is distributed across multiple client\-side aggregators\. FSA removes the central aggregation bottleneck, limits the information visible to any single observer, and preserves the centralized FL update after reassembly\. ERIS can further readily integrate Distributed Shifted Compression \(DSC\) to reduce transmitted payloads and exposed coordinates\.      We prove that ERIS preserves convergence under standard assumptions and bounds mutual information leakage by the observable fraction of each update, decreasing with the number of client\-side aggregators, and with the compression level when DSC is enabled\. Experiments across image and text tasks, including large language models, show that ERIS achieves FedAvg\-level utility while substantially reducing communication bottlenecks and improving robustness to membership inference and reconstruction attacks, without relying on heavy cryptography or utility\-degrading perturbations\.

## SMI: Statistical Membership Inference for Reliable Unlearned Model Auditing

**Authors:** Jialong Sun; Zeming Wei; Jiaxuan Zou; Jiacheng Gong; Chengyang Dong; Jie Fu; Heng Xu; Jialong Li; Bo Liu

**ID:** 153407\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153407

[Paper](<https://openreview.net/forum?id=LZfoK7J0Q5>) | [PDF](<https://openreview.net/pdf?id=LZfoK7J0Q5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153407>)

Machine unlearning \(MU\) is essential for enforcing the right to be forgotten in machine learning systems\. A key challenge of MU is how to reliably audit whether a model has truly forgotten specified training data\. Membership Inference Attacks \(MIAs\) are widely used for unlearned model auditing, where samples that evade membership detection are regarded as successfully forgotten\. We show this assumption is fundamentally flawed: failed membership inference does not imply true forgetting\. We prove that unlearned samples occupy a fundamentally different positions in the feature space feature space than non\-member samples, making this alignment bias unavoidable and unobservable, which leads to systematically optimistic evaluations of unlearning performance\. Meanwhile, training shadow models for MIA incurs substantial computational overhead\. To address both limitations, we propose Statistical Membership Inference \(SMI\), a training\-free auditing framework that reformulates auditing as estimating the non\-member mixture proportion in the unlearned feature distribution\. Beyond estimating the forgetting rate, SMI also provides bootstrap reference ranges for quantified auditing reliability\. Extensive experiments show that SMI consistently outperforms all MIA\-based baselines, with no shadow model training required\. Overall, SMI establishes a principled and efficient alternative to MIA\-based auditing methods, with both theoretical guarantees and strong empirical performance\.

## Evaluating an Evaluation: Membership Inference Attacks as Machine Unlearning Diagnostics

**Authors:** Umid Suleymanov; Laman Aliyeva; Nihat Abdullayev; Saida Zarbiyeva; Murat Kantarcioglu

**ID:** 139219\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139219

[Paper](<https://openreview.net/forum?id=eA1BsaVVh5>) | [PDF](<https://openreview.net/pdf?id=eA1BsaVVh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139219>)

Evaluation practices in machine learning are increasingly objects of scientific study in their own right: their assumptions, statistical properties, and failure modes determine which research conclusions can be trusted\. We audit one such practice \- the use of aggregate\-subset Membership Inference Attacks \(MIAs\) for evaluating machine unlearning \- across 8 dataset\-architecture pairs, 4 unlearning methods, and over 500 experimental runs, identifying five failure modes: \(1\) limited and regime\-dependent identifiability between baseline and retrained models, with KS\-test indistinguishability \($p &gt; 0\.05$\) in $\\approx$42\\% of experiment\-\-task pairs; \(2\) regime\-dependent signal\-to\-noise collapse; \(3\) monotonicity violations in 5 of 8 experiments under graded forgetting; \(4\) inter\-task rank inconsistency, and \(5\) regime confounding by model training quality\. To quantify these failures, we develop the Membership Inference Attack Unlearning Score \(MIAU\), a normalized diagnostic framework integrating three MIA comparisons as gap closure fractions between baseline and retrained references\. We formalize four validity properties any unlearning metric should satisfy\. Our findings indicate that aggregate\-subset MIAs are reliable unlearning diagnostics only in narrow high\-memorization regimes, and motivate complementary evaluation paradigms, alongside MIA\-based protocols\.

## Monitoring Violations of Differential Privacy over Time

**Authors:** Önder Askin; Tim Kutta; Holger Dette

**ID:** 148395\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148395

[Paper](<https://openreview.net/forum?id=yAEAGaQET3>) | [PDF](<https://openreview.net/pdf?id=yAEAGaQET3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148395>)

Auditing differential privacy has emerged as an important area of research that supports the design of privacy\-preserving mechanisms\. Privacy audits help to obtain empirical estimates of the privacy parameter, to expose flawed implementations of algorithms and to compare practical with theoretical privacy guarantees\. In this work, we investigate an unexplored facet of privacy auditing: the sustained auditing of a mechanism that can go through changes during its development or deployment\. Monitoring the privacy of algorithms over time comes with specific challenges\. Running state\-of\-the\-art \(static\) auditors repeatedly requires excessive sampling efforts, while the reliability of such methods deteriorates over time without proper adjustments\. To overcome these obstacles, we present a new monitoring procedure that extracts information from the entire deployment history of the algorithm\. This allows us to reduce sampling efforts, while sustaining reliable outcomes of our auditor\. We derive formal guarantees with regard to the soundness of our methods and evaluate their performance for important mechanisms from the literature\. Our theoretical findings and experiments demonstrate the efficacy of our approach\.

## POLAR\-Bench: A Diagnostic Benchmark for Privacy\-Utility Trade\-offs in LLM Agents

**Authors:** Qiaoyuan ZHENG; yiqu yang; Qi Gao; Imanol Schlag

**ID:** 139312\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 139312

[Paper](<https://openreview.net/forum?id=Y4sDfO3t6Q>) | [PDF](<https://openreview.net/pdf?id=Y4sDfO3t6Q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139312>)

LLM agents increasingly have access to private user data and act on the user's behalf when interacting with third\-party systems\. The user defines what may and must not be shared, and the agent must robustly follow that intent even when third\-party systems behave adversarially\. We introduce $\\textbf\{POLAR\-Bench\}$ \($\\textbf\{Pol\}$icy\-$\\textbf\{a\}$ware adve$\\textbf\{r\}$sarial Benchmark\), in which a trusted model with a privacy policy and a task converses with a third\-party model that adversarially probes for both task\-relevant and protected attributes\. Across 10 domains and 7$\{,\}$852 samples, we score privacy and utility by deterministic set\-membership and vary privacy policy  dimension and attack strategy along two orthogonal axes, producing a $5\\times5$ diagnostic surface per model\. Our results reveal a sharp split: current frontier models withhold over 99% of protected attributes, while smaller open\-weight models in the 1\-\-30B range, the class users most commonly run as their own trusted agent on\-device or via private inference, score notably worse, with the weakest leaking over half\. POLAR\-Bench thus localizes where each model's intent\-following breaks down, providing a foothold for privacy alignment where it matters most\.

## Rank\-Aware Differentially Private Release of Listwise Preferences for LLM Alignment

**Authors:** Junwei Chen; Manjiang Yu; Pengpeng Qiao; Yang Cao

**ID:** 154517\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154517

[Paper](<https://openreview.net/forum?id=D0Bw9TmdSJ>) | [PDF](<https://openreview.net/pdf?id=D0Bw9TmdSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154517>)

Listwise preference feedback offers richer supervision for large language model \(LLMs\) alignment than pairwise comparisons, but a full ranking also reveals more sensitive user preferences\. Existing privacy\-preserving alignment methods focus mainly on pairwise feedback, while listwise alignment under local differential privacy \(LDP\) remains unexplored\. Extending LDP to this listwise domain raises a critical challenge: the high sensitivity of the full ranking space demands excessive noise, neutralizing the benefits of listwise supervision\. To address this challenge, we analyze the interaction between supervision granularity and privacy noise in downstream training, and introduce a rank\-aware exponential mechanism that privatizes listwise preference data into a low\-sensitivity granularity suitable for downstream alignment\. The mechanism leverages ranking information to sample a fixed\-size binary partition, concentrating the noise near borderline items instead of perturbing all items uniformly as randomized response \(RR\) does\. Empirical evaluations on downstream LLM alignment tasks show that our mechanism consistently outperforms existing LDP baselines at matched privacy budgets\.

## On Differentially Private Mechanisms for Linear Regression

**Authors:** Bardiya Aryanfard; Monika Henzinger; Farhood Rostamkhani

**ID:** 151830\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151830

[Paper](<https://openreview.net/forum?id=Xd1wBiiFWf>) | [PDF](<https://openreview.net/pdf?id=Xd1wBiiFWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151830>)

We study the classic least\-squares linear regression problem under differential privacy \(DP\) in the continual observation setting\. In this setting, the mechanism receives a stream of $n$ data points $\(x\_i,y\_i\)$ \($x\_i\\in\\mathbb\{R\}^d$ and $y\_i\\in\\mathbb\{R\}$\) and must output an estimate of the optimal parameters at each time step $i$\. Although differentially private linear regression has been extensively studied in the batch setting, the problem remains underexplored for the continual setting, with prior work being restricted to constrained linear regression and update time polynomial in $n$\.  In this work, we introduce ContinualAdaSSP, the first mechanism for unconstrained linear regression under continual differential privacy\. Our mechanism's suboptimality gap is proportional to $\\sqrt\{d\}\\operatorname\{polylog\}\(n\)$\. It requires $O\(d^2\\log\{n\}\)$ space and $O\(d^2\\log\{n\}\+d^\{\\omega\}\)$ \($\\omega$ is the matrix multiplication exponent\.\) update time, where $d$ is the dimension of the input space\.  This matches the suboptimality gap of the continual mechanism for the constrained version\.  We also study fundamental limits of differentially private linear regression by showing the first  lower bounds for the box\-constrained least\-squares linear regression problem\. Our lower bounds are proportional to $\\min\(n,\\frac\{\\sqrt\{d\}\}\{\\log^\{1\.5\}d\}\)$ for $\(1,O\(\\frac\{1\}\{n\}\)\)$\-DP, and $\\min\(n,\\frac\{d\}\{\\varepsilon\}\)$ for $\\varepsilon$\-DP, and are derived using a reduction from a fingerprinting code problem from \[Peter et al, 2024\], providing new insights into the inherent hardness of this canonical task\.   Our experimental evaluation on real\-world datasets shows that the accuracy of our mechanism  clearly outperforms  any other known differentially private mechanism for this problem such as rerunning the batch algorithm at each time step\.

## Assessing Per\-Sample Membership Inference Vulnerability without Retraining

**Authors:** Valentin Dorseuil; Jamal Atif; Olivier Cappé

**ID:** 155925 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1mfOSEBuju>) | [PDF](<https://openreview.net/pdf?id=1mfOSEBuju>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155925>)

Recent work in the privacy literature shows that sample\-targeted membership inference attacks \(MIA\) significantly outperform untargeted approaches by a wide margin\. Motivated by this observation, we address the following question: Can the privacy vulnerability of individual training points be assessed without training shadow models? We show that per\-sample exposure to MIA is governed not only by a point's loss, but also by a data\-dependent geometric measure\. In the linear setting, we derive a closed\-form decomposition of individual black\-box MIA vulnerability into a population leverage score and a residual loss term, making explicit how sample\-dependent geometry translates into privacy exposure\. Since the final layer of most modern architectures is linear, we extend this framework to deep networks and propose a surrogate score operating on last\-layer representations that requires only a single trained model and no shadow models\.  Empirical evaluations across diverse datasets and architectures show that our score outperforms loss and gradient\-norm baselines at identifying the highest\-risk points under state\-of\-the\-art attacks, providing a computationally efficient and theoretically grounded tool for per\-sample privacy risk assessment\.

## Machine Unlearning in Diffusion LLMs

**Authors:** Yili Wang; Yijie Xu; Lu Dai; Tairan Huang; Qianyi Cai; Huizai Yao; Tianfu Wang; Hui Xiong

**ID:** 154410 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dlj9mRJfOq>) | [PDF](<https://openreview.net/pdf?id=Dlj9mRJfOq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154410>)

Machine unlearning \(MU\) aims to remove sensitive or undesired knowledge from a trained model without retraining from scratch\. While MU has been widely studied for autoregressive large language models, its application to diffusion large language models \(DLLMs\) remains largely unexplored\. In this paper, we present the first systematic study of MU in DLLMs and show that existing unlearning objectives transfer poorly to this setting due to sparse supervision and inaccurate forgetting localization\. To address these challenges, we propose \\textsc\{DL\-Eraser\}, a DLLM\-native unlearning framework that suppresses target recoverability under high\-mask conditioning while constraining updates to a utility\-preserving subspace\. Extensive experiments show that \\textsc\{DL\-Eraser\} achieves stronger forgetting while better preserving model utility than existing baselines\. To the best of our knowledge, this is the first work that systematically investigates MU in DLLMs\.

## Minimax Optimal Two\-Sample Testing under Local Differential Privacy

**Authors:** Jongmin Mun; Seungwoo Kwak; Ilmun Kim

**ID:** 156669\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** missing

**Repeated source row:** 156669

[Official poster](<https://neurips.cc/virtual/2026/poster/156669>)

We explore the trade\-off between privacy and statistical utility in private two\-sample testing
under local differential privacy \(LDP\) for both multinomial and continuous data\. We begin
with the multinomial case, where we introduce private permutation tests using practical
privacy mechanisms such as Laplace, discrete Laplace, and Google’s RAPPOR\. We then
extend this approach to continuous data via binning and study its uniform separation under
LDP over Hölder and Besov smoothness classes\. The proposed tests for both discrete and
continuous cases rigorously control type I error for any finite sample size, strictly adhere
to LDP constraints, and achieve minimax optimality under LDP\. The attained minimax
rates reveal inherent privacy\-utility trade\-offs that are unavoidable in private testing\. To
address scenarios with unknown smoothness parameters in density testing, we propose a
Bonferroni\-type adaptive test that ensures robust performance without prior knowledge of
the smoothness parameters\. We validate our theoretical findings with extensive numerical
experiments and demonstrate the practical relevance and effectiveness of our proposed
methods\.

## Sequential Membership Inference Attacks

**Authors:** Thomas Michel; Debabrota Basu; Emilie Kaufmann

**ID:** 149251\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149251

[Paper](<https://openreview.net/forum?id=rm2zTbl2zd>) | [PDF](<https://openreview.net/pdf?id=rm2zTbl2zd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149251>)

Modern AI models are not static\. They go through multiple updates in their lifecycles\. We propose to design Sequential Membership Inference \(SeMI\) attacks leading to tighter privacy audits by exploiting the sequence of models and injecting a target canary at a controlled insertion time\. First, for empirical mean computation, we develop $\\mathrm\{SeMI\}^\{\\ast\}$, an optimal SeMI attack to identify the presence of a target inserted at a specific insertion step\. We derive the power of $\\mathrm\{SeMI\}^\{\\ast\}$ to show that accessing the model sequence yields more powerful MI attacks than scrutinising only the final model\. $\\mathrm\{SeMI\}^\{\\ast\}$ exhibits an isolation property\-\- its power depends on the statistics obtained right before and after insertion of the target\. Leveraging this insight, we develop practical white\-box \(accessing model gradients\) and black\-box \(accessing loss\) SeMI attacks against models trained with \(DP\-\)SGD\. Across datasets and models trained with \(DP\-\)SGD, our experiments show that SeMI attacks achieve higher powers than snapshot\-independent baselines, and yield tighter privacy audits thanks to \(a\) control over the insertion time and \(b\) observations across the model sequence\.

## Publishing Below\-Threshold Triangle Counts under Local Weight Differential Privacy

**Authors:** Kevin Pfisterer; Quentin Hillebrand; Vorapong Suppakitpaisarn

**ID:** 149634\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149634

[Paper](<https://openreview.net/forum?id=ocQWtpw7Ib>) | [PDF](<https://openreview.net/pdf?id=ocQWtpw7Ib>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149634>)

We propose an algorithm for counting below\-threshold triangles in weighted graphs under local weight differential privacy\. Although many prior studies have considered the setting in which the graph topology is public and only the edge weights are sensitive, to the best of our knowledge, this is the first work to study this privacy notion in the local model\. Building on a two\-round protocol for locally differentially private triangle counting, we exploit the public graph topology to design a novel algorithmic framework\. This leads to significant improvements in both accuracy and scalability\.   In particular, when the input graph is planar, our algorithm  eliminates the covariance arising from distributed triangle counting at nodes; for graphs with bounded degeneracy, it significantly reduces this covariance\. Since covariance is the dominant source of error in the counting task, our method achieves accuracy that closely aligns with the lower bound\.  We also present an efficient algorithm for the computation of the smooth sensitivity and provide experiments that quantify the trade\-off between the biased and unbiased variants of our estimator and demonstrate the effectiveness of the proposed improvements\.

## On Differentially Private Mechanisms for Linear Regression

**Authors:** Bardiya Aryanfard; Monika Henzinger; Farhood Rostamkhani

**ID:** 151830\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 151830

[Paper](<https://openreview.net/forum?id=Xd1wBiiFWf>) | [PDF](<https://openreview.net/pdf?id=Xd1wBiiFWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151830>)

We study the classic least\-squares linear regression problem under differential privacy \(DP\) in the continual observation setting\. In this setting, the mechanism receives a stream of $n$ data points $\(x\_i,y\_i\)$ \($x\_i\\in\\mathbb\{R\}^d$ and $y\_i\\in\\mathbb\{R\}$\) and must output an estimate of the optimal parameters at each time step $i$\. Although differentially private linear regression has been extensively studied in the batch setting, the problem remains underexplored for the continual setting, with prior work being restricted to constrained linear regression and update time polynomial in $n$\.  In this work, we introduce ContinualAdaSSP, the first mechanism for unconstrained linear regression under continual differential privacy\. Our mechanism's suboptimality gap is proportional to $\\sqrt\{d\}\\operatorname\{polylog\}\(n\)$\. It requires $O\(d^2\\log\{n\}\)$ space and $O\(d^2\\log\{n\}\+d^\{\\omega\}\)$ \($\\omega$ is the matrix multiplication exponent\.\) update time, where $d$ is the dimension of the input space\.  This matches the suboptimality gap of the continual mechanism for the constrained version\.  We also study fundamental limits of differentially private linear regression by showing the first  lower bounds for the box\-constrained least\-squares linear regression problem\. Our lower bounds are proportional to $\\min\(n,\\frac\{\\sqrt\{d\}\}\{\\log^\{1\.5\}d\}\)$ for $\(1,O\(\\frac\{1\}\{n\}\)\)$\-DP, and $\\min\(n,\\frac\{d\}\{\\varepsilon\}\)$ for $\\varepsilon$\-DP, and are derived using a reduction from a fingerprinting code problem from \[Peter et al, 2024\], providing new insights into the inherent hardness of this canonical task\.   Our experimental evaluation on real\-world datasets shows that the accuracy of our mechanism  clearly outperforms  any other known differentially private mechanism for this problem such as rerunning the batch algorithm at each time step\.

## Assessing Per\-Sample Membership Inference Vulnerability without Retraining

**Authors:** Valentin Dorseuil; Jamal Atif; Olivier Cappé

**ID:** 155925\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155925

[Paper](<https://openreview.net/forum?id=1mfOSEBuju>) | [PDF](<https://openreview.net/pdf?id=1mfOSEBuju>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155925>)

Recent work in the privacy literature shows that sample\-targeted membership inference attacks \(MIA\) significantly outperform untargeted approaches by a wide margin\. Motivated by this observation, we address the following question: Can the privacy vulnerability of individual training points be assessed without training shadow models? We show that per\-sample exposure to MIA is governed not only by a point's loss, but also by a data\-dependent geometric measure\. In the linear setting, we derive a closed\-form decomposition of individual black\-box MIA vulnerability into a population leverage score and a residual loss term, making explicit how sample\-dependent geometry translates into privacy exposure\. Since the final layer of most modern architectures is linear, we extend this framework to deep networks and propose a surrogate score operating on last\-layer representations that requires only a single trained model and no shadow models\.  Empirical evaluations across diverse datasets and architectures show that our score outperforms loss and gradient\-norm baselines at identifying the highest\-risk points under state\-of\-the\-art attacks, providing a computationally efficient and theoretically grounded tool for per\-sample privacy risk assessment\.

## Jaguar: Fast Private CNN Inference with Power\-of\-Two Homomorphic Arithmetic

**Authors:** Yewon Jeong; Nayoung Jung; Hyeri Roh; Woo\-Seok Choi

**ID:** 148765\-\-2 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148765

[Paper](<https://openreview.net/forum?id=vEZC3kzDrD>) | [PDF](<https://openreview.net/pdf?id=vEZC3kzDrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148765>)

_Abstract unavailable from the accessible public sources._

## Privacy Meets Hierarchy: Differentially Private Distributed Trilevel Learning

**Authors:** Yang Jiao; Kai Yang

**ID:** 156056 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0nBv2qUf8C>) | [PDF](<https://openreview.net/pdf?id=0nBv2qUf8C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156056>)

_Abstract unavailable from the accessible public sources._

