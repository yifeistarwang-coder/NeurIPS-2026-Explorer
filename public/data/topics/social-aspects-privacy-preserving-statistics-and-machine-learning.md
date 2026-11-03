# Social Aspects / Privacy\-preserving Statistics and Machine Learning

社会影响与可信人工智能 / 隐私保护统计与机器学习

87 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## BiShield\-TEE: On the \(In\-\)Security of Unilateral Weight Obfuscation in On\-Device TEE\-Shielded LLM Partition

**Authors:** Wang Zhiyuan; Yuezhi Zhou; Ziqi Zhang; Zhu Zhang; Zhixing Tan; Yongheng Deng

**ID:** 152920 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=PQQKAksTi4>) | [PDF](<https://openreview.net/pdf?id=PQQKAksTi4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152920>)

On\-device deployment of large language models \(LLMs\) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft\. Trusted Execution Environments \(TEEs\) provide hardware\-enforced isolation for on\-device inference, yet most TEE\-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only output side\. We identify a vulnerability in this design, termed the Solution Determinacy Property \(SDP\): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection\.  Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over $2\.4\\times$ the full\-shielding black\-box baseline and recovering near\-complete model functionality\. To address this vulnerability, we propose BiShield\-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates\. Experiments across diverse models and datasets show that BiShield\-TEE confines attack accuracy to the full\-shielding black\-box baseline, while achieving higher inference efficiency than prior methods on real hardware\. Our code is available at https://anonymous\.4open\.science/r/BiShield\-TEE\-28DF\.

## Online Differentially Private Consistent Clustering

**Authors:** Edith Cohen; Vadym Doroshenko; Badih Ghazi; Pritish Kamath; Alexander Knop; Ravi Kumar; Ethan Leeman; Pasin Manurangsi; Adam Sealfon; Marika Swanberg

**ID:** 151530 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZzXRQVvFXC>) | [PDF](<https://openreview.net/pdf?id=ZzXRQVvFXC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151530>)

We study differentially private \(DP\) $k$\-means and $k$\-median clustering in the online streaming setting\. In this model, points arrive sequentially, and at each time step, we need to output a set of $k$ centers that optimizes the clustering objective for all points seen so far\. We give a generic reduction that transforms the \(sensitive\) input stream into a private stream, which is a \*semi\-coreset\* of the input stream\. This implies that any \(non\-private\) online clustering algorithm, run as a post\-processing step, can achieve good utility for the original clustering objective\. Our algorithm matches or improves upon the approximation ratio, space usage, and running time of existing algorithms \(Dupr\{\\'\{e\}\} la Tour, 2024; Epasto et al\., 2026\)\. A key aspect of our reduction is that it inherits desirable properties of the underlying non\-private clustering algorithm, such as \*consistency\* \(Lattanzi and Vassilvitskii, 2017\)\-\-\-a property not satisfied by previous DP algorithms\.

## Settling Pure Differentially Private Covariance Estimation

**Authors:** Tommaso d’Orsi; Gleb Novikov; Walter McKelvie

**ID:** 154494 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DBOFjZ1msY>) | [PDF](<https://openreview.net/pdf?id=DBOFjZ1msY>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154494>)

We study the problem of $d$\-dimensional covariance matrix release under \\textit\{pure\} differential privacy with error measured in Schatten\-$p$ norms, where $p\\in \[1,\\infty\]\.$ We identify two meaningful sample\-size regimes with qualitatively different behavior, and give a single efficient algorithm together with matching information\-theoretic lower bounds throughout\.  In the \\emph\{large\-sample\} regime $n \\gtrsim d^\{2\}/\\varepsilon$, we show that the simple $K$\-norm mechanism analyzed by \\cite\{d2026purely\} is simultaneously optimal for all Schatten norms $p\\in\[1,\\infty\]$, yielding sharp rates from nuclear to spectral norm\. In the \\emph\{moderate\-sample\} regime $d/\\varepsilon \\lesssim n \\lesssim d^\{2\}/\\varepsilon$, the problem remains non\-trivially solvable, but the $K$\-norm mechanism becomes suboptimal\. We then design a single improved, efficient, $\\varepsilon$\-differentially private estimator based on the perturb\-and\-project framework; this estimator is optimal in all regimes and simultaneously for all Schatten norms\. Prior to this work, improvements over the $K$\-norm mechanism in this regime were only known for Frobenius loss \\cite\{nikolov2023private\}\.  A key feature of the moderate\-sample regime is an inherent dependency of the error on the nuclear norm of the input, first observed by \\cite\{dong2022differentially\} and further investigated by \\cite\{d2026purely\}\. Our mechanism captures this dependence uniformly over $p$, and our lower bounds show it to be unavoidable, establishing optimal rates in all regimes, including the correct dependence on $\\\|\\Sigma\\\|\_\*$\.  %The implications of our approach go beyond covariance release: we obtain optimal guarantees for privately releasing arbitrary matrices under nuclear\-norm adjacency, and  give partial extensions to higher\-order moment estimation under pure differential privacy\. These extensions highlight the perturb\-and\-project framework as a flexible tool for private high\-dimensional data release, even beyond second moments\.  Our results extend and are optimal for the more general problem of privately releasing arbitrary matrices under nuclear\-norm adjacency\. Finally, our lower\-bound techniques further generalize to higher\-order tensors, establishing similar limitations for higher\-order moment estimation under pure differential privacy\.

## Forgetting Has Neighbors: Localized Collateral Forgetting in Machine Unlearning

**Authors:** Polina Dolgova; Sebastian Stich

**ID:** 152962 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P4bVkIi9y9>) | [PDF](<https://openreview.net/pdf?id=P4bVkIi9y9>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152962>)

Machine unlearning aims to remove the influence of selected training examples without full retraining\. Standard evaluations often summarize unlearning quality with aggregate metrics, such as accuracy\- and forgetting\-based scores, which can hide localized failures\. We study this failure mode at the example level by comparing the predictions of an unlearned model to those of the model retrained after deletion\. We show that this pointwise discrepancy can be highly non\-uniform: for gradient\-ascent and random\-labeling methods, with and without retain\-set fine\-tuning, it grows with geometric proximity to the forget set\. We call this phenomenon localized collateral forgetting \. Our analysis identifies a mechanism behind the effect: surrogate targets used during unlearning can be inconsistent with the local prediction structure induced by retraining, and this inconsistency propagates through shared representations to nearby examples\. Motivated by this mechanism, we propose Local Teacher Distillation , a simple mitigation strategy that replaces random targets with soft labels from a small teacher trained only on retained neighbors of the forget set\. On CIFAR\-100 partial\-class deletion, this local teacher brings the unlearned model substantially closer to retraining, especially near the forget set, while maintaining competitive aggregate unlearning metrics\.

## GUARD: Scalable Gradient\-based Unlearning with Adversarial Robustness Defense

**Authors:** Xuechao Lan; Wenmin Li; Sujuan Qin; Zhengping Jin; Fei Gao

**ID:** 152204 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=UnifcmHbFu>) | [PDF](<https://openreview.net/pdf?id=UnifcmHbFu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152204>)

Machine Unlearning \(MU\) is an emerging task to remove specified training data from a trained model while preserving its utility, with Gradient\-based Unlearning \(GU\) standing out as a prevalent category due to high scalability\. However, standard MU which solely optimizes for clean accuracy, inadvertently damages adversarial robustness on the retain data\. Although a few studies extend MU to adversarially trained models, they rely on strong assumptions \(e\.g\., well\-conditioned Hessians, smoothness\) and costly Hessian\-based updates, limiting scalability and efficiency\. In this paper, we propose \*\*GUARD\*\*, a scalable and efficient framework that achieves unlearning while preserving retain\-data robustness\. Having identified the two causes of robustness degradation, we accordingly design \*Robustness\-Aware Gradient Projection\* and \*Importance\-Guided Parameter Selection\*\. Both modules rely on a compact adversarially vulnerable dataset that we construct with or without retain data, to enable scalability under varying data constraints\. Validated by theoretical analysis and experiments across 6 settings, GUARD outperforms 6 baselines, boosting robust accuracy by up to 6\.3$\\times$, closely matching the Retrain oracle in both unlearning and robustness\.

## A Unified Framework for Adversary\-Aware Differential Privacy Bounds

**Authors:** Marika Swanberg; Meenatchi Sundaram Muthu Selva Annamalai; Jamie Hayes; Borja Balle; Adam Smith

**ID:** 153636 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Jt45l0WVtc>) | [PDF](<https://openreview.net/pdf?id=Jt45l0WVtc>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153636>)

Differential Privacy \(DP\) bounds the privacy leakage of a mechanism against worst\-case membership inference, but the precise tradeoff between complex adversarial models and DP protections remains poorly understood\. In this paper, we present a unified framework that generalizes the patchwork of existing bounds across membership inference, attribute inference, and data reconstruction attacks\.  Crucially, our framework is the first to evaluate attacks that target multiple individuals simultaneously and measure success beyond exact matches under a single cohesive bound\. Our bounds capture this broad family of previously unexplored attack settings by relying solely on the privacy parameters and the adversary's baseline success rate \(i\.e\. its prior without access to the mechanism's output\)\. To illustrate this, we compare our high\-probability guarantees to empirical attacks in two novel settings: extracting multiple non\-uniform secrets \(passwords and PII\) from DP\-finetuned language models, and reconstructing tabular data from noisy marginals\. Ultimately, this framework provides a rigorous theoretical foundation to investigate the risk landscape of DP algorithms in new adversarial settings\.

## Shared\-Noise Mechanisms for Verifiable Differentially Private Counting

**Authors:** Sehyeon Park; Chenglin Fan

**ID:** 151772 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YACwxmEB2x>) | [PDF](<https://openreview.net/pdf?id=YACwxmEB2x>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151772>)

Verifiable differential privacy enables public auditing of privacy\-preserving aggregate computations, addressing the trust deficit in standard implementations\. However, existing verifiable counting approaches that distribute trust across multiple provers often require each prover to contribute independent noise\. This duplicates the noise added to the aggregate and substantially degrades utility, making accurate private counting difficult in distributed settings\.  We introduce a shared\-noise paradigm for verifiable differentially private counting\. Instead of duplicating noise across provers, our approach generates a single noise sample in additive\-shared form among mutually distrustful provers, while Pedersen commitments let a public verifier audit consistency without learning the noise\. This yields shared\-noise, verifier\-auditable instantiations of two standard noise families: the Shared\-Noise Verifiable Binomial Mechanism \(SN\-VBM\) and the Shared\-Noise Verifiable Laplace Mechanism \(SN\-VLM\)\.  We prove that both mechanisms satisfy differential privacy and public verifiability, including completeness, soundness against malicious provers, and zero knowledge against a malicious verifier colluding with corrupted provers\. Among the two instantiations, SN\-VLM is the more scalable option: it avoids the quadratic growth in shared randomness required by the binomial construction under strict privacy budgets\. Experiments on preprocessing load, randomness\-generation time, and noise error show that SN\-VLM substantially reduces cryptographic overhead while improving empirical accuracy in the evaluated privacy regimes\.

## Ask in the Crowd: Differentially Private LLM Inference via Dummy\-Augmented Shuffling

**Authors:** Zhihao Liu; Zixiong Guo; Shuo Shao; Yu He; Wenli Wang; Meihui Chen; Di Wang; Yuke Hu

**ID:** 149860 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=mitOdW71vU>) | [PDF](<https://openreview.net/pdf?id=mitOdW71vU>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149860>)

Large language models are increasingly deployed as LLM\-as\-a\-Service \(LLMaaS\), where user queries are sent to remote LLMs for inference, raising severe privacy concerns about the exposure of sensitive user inputs\. Differentially private inference mitigates these risks by injecting noise into input embeddings\. However, existing methods struggle to balance privacy and utility, as stronger privacy protection often leads to substantial accuracy degradation in LLM inference\.  In this work, we propose DP\-SPD, a differentially private LLM inference framework that protects user queries by hiding the real query among client\-generated dummy queries\. All queries are randomly shuffled before being sent to the server, preventing direct identification of the user's true intent\. To improve inference efficiency, we exploit the shared\-prefix structure among queries and reuse transformer key\-\-value \(KV\) caches during decoding\. We analyze the privacy guarantee of DP\-SPD and evaluate its utility on classification and generation tasks, as well as its privacy protection under EIA, MIA, and GPT\-based attacks\. Experimental results show that our method achieves strong inference\-time privacy protection while maintaining utility close to plain\-text inference under practical latency\.

## Privately Clipping Heavy\-Tailed Data

**Authors:** Matthew Joseph; Alex Kulesza

**ID:** 154273 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=F3Hoi9uC0q>) | [PDF](<https://openreview.net/pdf?id=F3Hoi9uC0q>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154273>)

Summing vectors is a basic task in differentially private data analysis\. Standard algorithms clip vectors to some bound, sum them, and add noise scaled to the bound\. While the differential privacy literature has developed a deep library of such noise addition mechanisms, it offers few tools for privately choosing the clipping bound directly from the data\. We introduce a method that privately chooses a clipping bound by optimizing residual coherence, the directional alignment of vectors exceeding the bound, against the variance cost of additional noise\. We prove a close relationship between residual coherence and bias for a general class of heavy\-tailed data regimes and show empirically that, across several datasets, our method outperforms existing baselines\.

## Rank\-Aware Differentially Private Release of Listwise Preferences for LLM Alignment

**Authors:** Junwei Chen; Manjiang Yu; Pengpeng Qiao; Yang Cao

**ID:** 154517 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=D0Bw9TmdSJ>) | [PDF](<https://openreview.net/pdf?id=D0Bw9TmdSJ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154517>)

Listwise preference feedback offers richer supervision for large language model \(LLMs\) alignment than pairwise comparisons, but a full ranking also reveals more sensitive user preferences\. Existing privacy\-preserving alignment methods focus mainly on pairwise feedback, while listwise alignment under local differential privacy \(LDP\) remains unexplored\. Extending LDP to this listwise domain raises a critical challenge: the high sensitivity of the full ranking space demands excessive noise, neutralizing the benefits of listwise supervision\. To address this challenge, we analyze the interaction between supervision granularity and privacy noise in downstream training, and introduce a rank\-aware exponential mechanism that privatizes listwise preference data into a low\-sensitivity granularity suitable for downstream alignment\. The mechanism leverages ranking information to sample a fixed\-size binary partition, concentrating the noise near borderline items instead of perturbing all items uniformly as randomized response \(RR\) does\. Empirical evaluations on downstream LLM alignment tasks show that our mechanism consistently outperforms existing LDP baselines at matched privacy budgets\.

## Models Designed to Forget: Machine Unlearning via Key Deletion

**Authors:** Sonia Laguna; Jorge da Silva Gonçalves; Moritz Vandenhirtz; Alain Ryser; Irene Cannistraci; Julia Vogt

**ID:** 156131 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0AcunXOaV1>) | [PDF](<https://openreview.net/pdf?id=0AcunXOaV1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156131>)

Machine unlearning for vision models is rapidly becoming a practical requirement, driven by privacy regulations, data errors, and the need to remove harmful or corrupted training images\. Despite this, most existing approximate unlearning methods tackle the problem from a post\-hoc perspective\. They attempt to erase the influence of targeted samples through parameter updates that typically require access to the full training data\. This creates a mismatch with real deployment scenarios where unlearning requests can be anticipated, revealing a fundamental limitation of post\-hoc approaches\. We motivate unlearning by design , a novel paradigm for approximate methods in which models are directly trained to support forgetting as an inherent architectural capability\. We instantiate this idea with Machine UNlearning via KEY deletion \(MUNKEY\), a memory\-augmented transformer that decouples instance\-specific memorization from model weights\. Here, unlearning corresponds to removing the instance\-identifying key, enabling zero\-shot forgetting without weight updates or access to the original samples or labels\. Across natural image benchmarks, fine\-grained visual recognition, and medical datasets, MUNKEY outperforms all post\-hoc baselines\. Our results establish that unlearning by design enables fast, deployment\-oriented unlearning while preserving predictive performance\.

## Differentially Private Model Merging

**Authors:** Qichuan Yin; Manzil Zaheer; Tian Li

**ID:** 149241 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rtA6xeWV0d>) | [PDF](<https://openreview.net/pdf?id=rtA6xeWV0d>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149241>)

In machine learning applications, privacy requirements during inference or deployment time could change constantly due to varying policies, regulations, or user experience\. In this work, we aim to generate a magnitude of models to satisfy any target differential privacy \(DP\) requirement without additional training steps, given a set of existing models trained on the same dataset with different privacy/utility tradeoffs\. We propose two post processing techniques, namely random selection and linear combination, to output final private models satisfying any target privacy parameter\. We provide privacy accounting of these approaches from the lens of R\\'enyi DP and privacy loss distributions for general problems\. In a case study on private mean estimation, we precisely characterize the privacy/utility results and theoretically establish the superiority of linear combination over random selection\. Empirically, we validate our approaches and analyses on several models and both synthetic and real\-world datasets\.

## Privacy Meets Hierarchy: Differentially Private Distributed Trilevel Learning

**Authors:** Yang Jiao; Kai Yang

**ID:** 156056 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0nBv2qUf8C>) | [PDF](<https://openreview.net/pdf?id=0nBv2qUf8C>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156056>)

Trilevel learning has emerged as a powerful paradigm across various domains in machine learning and networking\. In practical scenarios, data is frequently generated and distributed across multiple decentralized nodes\. While existing distributed trilevel learning methods circumvent the transmission of raw data, they remain susceptible to privacy leakage\. Furthermore, cutting plane methods, which are widely adopted in bilevel and trilevel learning, exhibit analogous intrinsic privacy risks\. To address these critical issues, we propose a Differentially Private Distributed Trilevel Optimization \(DPDTO\) framework\. In DPDTO, we first develop a value\-function\-embedded privacy\-preserving cutting plane method for trilevel optimization problems, comprising an inner\-layer value function reformulation and an outer\-layer cutting plane relaxation\. Building upon this, a distributed optimization algorithm is introduced to effectively address trilevel optimization while preserving privacy\. Theoretically, we provide a comprehensive analysis for the proposed framework, including asymptotic convergent relaxation, non\-asymptotic convergence rate, privacy guarantees, and communication complexity, uncovering a tripartite trade\-off among privacy, utility, and complexity in trilevel optimization\. Extensive experimental results on two distributed trilevel optimization problems further demonstrate the effectiveness and superiority of the proposed DPDTO\.

## Sample\-Grained Approximate Unlearning with Provable Per\-Sample Bounds

**Authors:** Yaxin Xiao; Yulin Jin; Li Tang; Haoyang LI; Huadi Zheng; Qingqing Ye; Haibo Hu

**ID:** 155275 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6tfToV92DV>) | [PDF](<https://openreview.net/pdf?id=6tfToV92DV>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155275>)

Machine unlearning aims to erase the influence of a designated forget set from a trained model while preserving strong utility on the retain set\. Approximate unlearning methods efficiently achieve this goal without full retraining, but their effectiveness is primarily assessed using dataset\-level aggregate metrics\. As a result, prior work does not explicitly evaluate whether individual samples are unlearned correctly, nor does it provide mechanisms to enforce such per\-sample unlearning behavior\.  In this work, we focus on per\-sample unlearning effectiveness\. We introduce SALA \(Sample\-grained Likelihoods ALignment\), a plug\-in optimization framework that enables approximate unlearning methods to operate at the level of individual samples by steering each example toward its correct target distribution\. To quantitatively assess this behavior, we further propose the sample\-grained distribution gap, a  metric that captures per\-sample discrepancies between approximate unlearning and exact retraining output distributions\. We provide theoretical guarantees showing that SALA contracts this gap and yields a bounded per\-sample discrepancy to retraining\. To make this framework practical, we develop a low\-cost estimation method for the member and non\-member target distributions\. Extensive experiments on classification and generation tasks demonstrate that SALA reduces the sample\-grained distribution gap by up to 86\.67% when paired with existing approximate unlearning baselines, while also improving run\-to\-run robustness\.

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

## Budget\-Conditioned Clipping Policies for Differentially Private Federated Learning

**Authors:** Hao Zhou; SiQi Cai; Hua Dai; Letian Sha; Yichen Li; MingCai Chen

**ID:** 150613 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=greiwlIhYZ>) | [PDF](<https://openreview.net/pdf?id=greiwlIhYZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150613>)

Gradient clipping is a central but brittle design choice in differentially private federated learning: overly small thresholds bias client updates, whereas overly large thresholds amplify the noise required by privacy\. This trade\-off is further complicated by client heterogeneity and personalized privacy budgets, where a single global threshold is often mismatched and online adaptation from private training statistics can complicate privacy accounting\. We study clipping\-threshold selection as a privacy\-budget\-conditioned policy learning problem\. We propose PAC\-DP, a proxy\-learned clipping framework for record\-level locally private federated learning\. Before private training, PAC\-DP calibrates a deterministic policy $\\pi\_\\theta\(\\varepsilon,t\)$ from public or synthetic proxy simulations, mapping a client's target privacy budget and the training round to a clipping threshold\. The policy is then frozen and used during private training, so deployed thresholds depend only on the declared budget, round index, and public/proxy\-learned parameters, not on private gradients, losses, or client\-specific update histories\. PAC\-DP combines this policy with per\-example clipping, Gaussian perturbation, and per\-client RDP accounting\. We show that, under public or separately privatized proxy calibration, the frozen policy introduces no additional record\-level privacy loss beyond the clipped Gaussian mechanisms\. We further analyze the clipping\-sensitive utility trade\-off through a decomposition involving clipping bias, stochastic variance, client heterogeneity, and DP noise, and characterize proxy\-to\-target transfer via a regret bound\. Experiments on MNIST, CIFAR\-10, CIFAR\-100, and Heart Disease show that PAC\-DP improves the privacy\-\-utility trade\-off and communication efficiency over implemented fixed\-threshold and adaptive DP\-FL baselines under matched privacy budgets\.

## Private Online Prediction from Experts with Small Losses

**Authors:** Bo Li; Peng Ye

**ID:** 149686 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=oAwj0VxrNb>) | [PDF](<https://openreview.net/pdf?id=oAwj0VxrNb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149686>)

We consider online prediction from experts, a fundamental problem in machine learning, under differential privacy constraints\. Existing private algorithms achieve near\-optimal regret $\\tilde\{O\}\(\\sqrt\{T\}\)$, where $T$ is the time horizon\. However, this bound becomes suboptimal when $L^\\star$, the cumulative loss of the best expert, is significantly less than $T$\. In this work, we present the first differentially private algorithm with regret $\\tilde\{O\}\(\\sqrt\{L^\\star\}\)$, offering a substantial improvement in the low\-loss regime\. Our regret bound matches the non\-private lower bound up to poly\-logarithmic factors, demonstrating that privacy incurs only a small cost in this setting\.

## Local FDR Membership Inference Attacks: Multiple Testing and the Role of Ridge Regularization

**Authors:** Jinyoung Hong; Bonwoo Lee; Jeongyoun Ahn

**ID:** 148228 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zR0MYMNUF1>) | [PDF](<https://openreview.net/pdf?id=zR0MYMNUF1>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148228>)

Membership inference attacks \(MIAs\) are commonly formulated as single\-sample hypothesis tests with false positive rate control\. However, realistic adversaries often test many candidate samples and aggregate the declared members, making membership inference a multiple testing problem\. In this regime, per\-sample calibration can produce unreliable sets of inferred members\. We develop a false discovery rate \(FDR\)\-controlled framework for membership inference based on the classical local FDR formulation\. We instantiate the framework for high dimensional ridge regression\. Under a conditional sufficiency condition, we establish FDR guarantee of the proposed method, and derive an asymptotic characterization of its detection power in high\-dimensional regimes under an isotropic Gaussian design\. Our analysis shows that, under FDR control, stronger ridge regularization reduces membership inference risk\. Experiments on synthetic and a real\-world dataset validate the theoretical findings and demonstrate that the proposed methods provide more reliable membership discoveries than existing attacks\.

## Asymmetric Invertible Threat: Learning Reversible Privacy Defense for Face Recognition

**Authors:** Jiabei Zhang; Ziyuan Yang; Andrew Beng Jin Teoh; Yi Zhang

**ID:** 152968 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=P0mFHNVW04>) | [PDF](<https://openreview.net/pdf?id=P0mFHNVW04>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152968>)

Face Recognition systems are widely deployed in real\-world applications, but they also raise privacy concerns due to unauthorized collection and misuse of facial data\. Existing adversarial privacy protection methods rely on input\-space perturbations to obfuscate identity information, yet their protection can degrade when adversaries learn restoration or purification mappings that partially invert the transformation\. We study this setting as an asymmetric adversarial attack, in which reverse manipulation becomes feasible because existing defense paradigms do not control reversibility\. To address this problem, we propose Asymmetric Reversible Face Protection \(ARFP\), a restoration\-aware extension of personalized face cloaking that integrates privacy protection, keyed recovery, and tamper indication in a single framework\. ARFP consists of three components: Key\-Conditioned Manifold Binding, which ties the protection transformation to a user\-provided key; Adversarial Restoration\-Aware Training, which introduces a surrogate restoration adversary during training to improve robustness against evaluated inverse purification attacks; and Authorized Reversible Restoration, which supports recovery with the correct key while providing nonce\-based tamper indication\. Extensive experiments under the threat models considered in this work show that ARFP improves resistance to the evaluated restoration attacks while preserving authorized recovery utility\. These results provide empirical evidence of key\-sensitive recovery behavior and tamper awareness in the tested settings\.

## Asymptotically Optimal Best Arm Identification with Fixed\-Budget under Differential Privacy

**Authors:** Keqin Chen; Jie Bian; Yulian Wu; Vincent Tan

**ID:** 150020 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lMIsAO6npD>) | [PDF](<https://openreview.net/pdf?id=lMIsAO6npD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150020>)

Best arm identification under differential privacy is a pure\-exploration problem in which both statistical efficiency and privacy protection must be achieved simultaneously\. We study fixed\-budget best arm identification for bandits under pure $\\epsilon$\-differential privacy, where the learner must recommend an arm after a prescribed sampling budget while protecting the full transcript\. We prove that the optimal exponential decay rate of the error probability is upper bounded by an instance\-dependent privacy\-aware transportation exponent that differs from the analogous quantity used to characterize the stopping time of in fixed\-confidence analysis by Jourdan and Azize \[2025\]\. Guided by this exponent, we propose AO\-Pri\-BAI, an adaptive algorithm that maintains private running estimates through Laplace\-tree mechanisms and learns a sampling design through a min\-max interaction between hard alternatives and arm allocations\. We prove that AO\-Pri\-BAI satisfies pure $\\epsilon$\-differential privacy\. We also establish that the exponent of the failure probability of AO\-Pri\-BAI matches the privacy\-aware benchmark\. Numerical studies show that even in the non\-asymptotic setting, AO\-Pri\-BAI outperforms benchmark algorithms on various instances, complementing the theoretical analyses\.

## On Differential Private $\\ell\_1$, $\\ell\_2$ and $\\ell\_p^p$ Distance Queries

**Authors:** Erzhi Liu; Jerry Yao\-Chieh Hu; Alex Reneau; Zhao Song; Han Liu

**ID:** 151936 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=WifaN44w16>) | [PDF](<https://openreview.net/pdf?id=WifaN44w16>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151936>)

We introduce a refined differentially private \(DP\) data structure for kernel density estimation \(KDE\) with $\\ell\_1$, $\\ell\_2$ and $\\ell\_p^p$ kernels\. This new DP data structure offers not only improved privacy\-utility tradeoff but also better query efficiency over prior results\. Specifically, we study the mathematical problem: given a similarity function $f$ \(or DP KDE\) and a private dataset $X \\subset \\mathbb\{R\}^d$, our goal is to preprocess $X$ so that for any query $y \\in \\mathbb\{R\}^d$, we approximate $\\sum\_\{x \\in X\} f\(x, y\)$ in a differentially private fashion\. The best previous algorithm for $f\(x, y\) = \|x \- y\|\_1$ is the node\-contaminated balanced binary tree by \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\]\. Their algorithm requires $O\(nd\)$ space and time for preprocessing with $n = \|X\|$\. For any query point, the query time is $\\alpha^\{\-1\} d \\log^2 n$, with an error guarantee of $\(1\+\\alpha\)$\-approximation and $\\varepsilon^\{\-1\} \\alpha^\{\-0\.5\} d^\{1\.5\} R \\log^\{1\.5\} n$\. In this paper, we use the same space and pre\-processing time, improve the best previous result \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\] in three aspects  \- We reduce query time by $\\alpha^\{\-1\} \\log n$ factor \- We improve the approximation ratio from $\\alpha$ to $1$ \- We reduce the error dependence by a factor of $\\alpha^\{\-0\.5\}$  From a technical perspective, our method of constructing the search tree differs from previous work \[Backurs, Lin, Mahabadi, Silwal, and Tarnawski, ICLR 2024\]\. In prior work, for each query, the answer is split into $\\alpha^\{\-1\} \\log n$ numbers, each derived from the summation of $\\log n$ values in interval tree countings\. In contrast, we construct the tree differently, splitting the answer into $\\log n$ numbers, where each is a smart combination of two distance values, two counting values, and $y$ itself\. We believe our tree structure may be of independent interest\.

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

## Provable Robustness against Backdoor Attacks via the Primal\-Dual Perspective on Differential Privacy

**Authors:** Aman Saxena; Jan Schuchardt; Yan Scholten; Stephan Günnemann

**ID:** 153879 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=I4p58bdzvx>) | [PDF](<https://openreview.net/pdf?id=I4p58bdzvx>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153879>)

Randomized smoothing provides a powerful framework for certifying robustness against adversarial perturbations by injecting randomized noise either into the training process \(against poisoning attacks\) or model inputs \(against evasion attacks\)\. Yet, extending these guarantees to hold against backdoor attacks, where adversaries jointly perturb both training and test data, remains challenging\. In particular, certifying general mechanisms requires tight, compositional guarantees over heterogeneous randomized components, which are not jointly supported by existing approaches\. We address this gap by proposing a general framework that numerically composes robustness guarantees for arbitrary mechanisms while remaining tightly connected to black\-box randomized smoothing guarantees\. To achieve this, we establish a connection between randomized smoothing and the dual perspective of differential privacy, enabling us to leverage advances in the analysis of differentially private mechanisms together with tight numerical composition\. This yields a modular framework in which robustness guarantees are derived by reasoning about the privacy of individual components and composing them end\-to\-end\. We instantiate our framework for DP\-SGD and Deep Partition Aggregation with inference\-time smoothing, deriving joint robustness guarantees against both training\-time and inference\-time attacks\. Empirically, we demonstrate the effectiveness of our framework on MNIST and CIFAR\-10\. Overall, we provide a principled and general framework for certifying robustness under complex joint threat models and mechanisms, laying the groundwork for future research on unified certification methods towards guarantees under more complex real\-world adversaries\.

## High Performance Differentially Private Fine\-Tuning using Dataset Distillation

**Authors:** Noel Loo; Hanshen Xiao; Alexander Amini; Mathias Lechner; Ramin Hasani; Daniela Rus

**ID:** 153009 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=OeKp0prARQ>) | [PDF](<https://openreview.net/pdf?id=OeKp0prARQ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153009>)

Differentially Private Stochastic Gradient Descent \(DP\-SGD\) is the dominant approach to private deep learning, but it pays compute and privacy budget \\emph\{per trained model\}: each new architecture, ensemble member, or downstream fine\-tuning round incurs additional privacy cost\. We propose \\textsc\{SPS\} \(Summarize\-\-Privatize\-\-Synthesize\) and its enhanced variant \\textsc\{SPS\+\}, dataset\-distillation algorithms that release a private synthetic dataset by privatizing intermediate activation statistics from a public pretrained model\. Once released, the dataset is post\-processed freely: any downstream architecture, ensemble, federated aggregation, or continual update incurs \\emph\{zero\} additional privacy cost\. In particular, a single \\textsc\{SPS\+\} dataset distilled from a Wide ResNet\-22\-8 transfers zero\-shot to architectures with different inductive biases \(Vision Transformers, Swin Transformers, and ConvNeXt\), all without re\-incurring privacy\. Empirically, \\textsc\{SPS\+\} is competitive with state\-of\-the\-art DP\-SGD across $\\epsilon \\in \\\{1,2,4,8\\\}$ on CIFAR\-10 and CIFAR\-100, with a notable advantage on CIFAR\-100 under strict privacy, achieving a $5\.8\\%$ gain at $\\epsilon\{=\}1$ over compute\-matched DP\-SGD\. \\textsc\{SPS\+\} additionally outperforms prior generation\-based DP methods by a large margin and supports private federated and continual learning out of the box\.

## GOLIATH: Gradient Inversion of Tabular Diffusion Models

**Authors:** Giulio Segalini; Aditya Shankar; Jérémie Decouchant; Lydia Chen

**ID:** 154056 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GXxPzaSox4>) | [PDF](<https://openreview.net/pdf?id=GXxPzaSox4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154056>)

Gradient inversion reconstructs training data from shared gradients\. However, existing methods target classification tasks and image diffusion, and do not address mixed tabular diffusion, where numerical columns follow Gaussian noising while categorical columns are corrupted by discrete masks\. This mixed continuous\-discrete training objective changes both the inversion target and the gradient structure: an attacker must recover not only rows, timesteps, and noise, but also the latent mask pattern whose density is tied to the diffusion timestep\. We propose Goliath, the first gradient inversion attack designed for tabular diffusion models\. Goliath employs a cyclic inversion loop that jointly recovers rows and diffusion latents across Gaussian and mixed diffusion regimes\. We introduce a tabular\-aware objective function that balances numerical and categorical gradient contributions while improving categorical recovery through enforced consistency between noise levels and mask structures\. To accommodate large batches, we aggregate multiple reconstructions across epochs using a row\-alignment heuristic\. Evaluated across nine tabular datasets, Goliath achieves up to $88\.9\\\\%$ per\-cell reconstruction accuracy and consistently outperforms gradient\-inversion baselines across Gaussian and mixed tabular diffusion\. Code is available at https://anonymous\.4open\.science/r/fl\-tab\-diffusion\-inversion\-F4E7/README\.md\.

## Privacy Risk Scales with Effective Dimension in Federated Learning

**Authors:** MD MAMUNUR RASHID; Md Palash Uddin; Yong Xiang; Keshav Sood; Longxiang Gao

**ID:** 155428 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5j1BWwjOvX>) | [PDF](<https://openreview.net/pdf?id=5j1BWwjOvX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155428>)

Privacy mechanisms in federated learning \(FL\) are often calibrated without explicit regard to model scale, implicitly assuming that privacy risk remains stable as federated models grow\. We challenge this assumption by introducing federated leakage, a signal\-level mutual\-information measure of client\-specific information surviving in privatized update trajectories, and by identifying effective model dimension, rather than raw parameter count, as the operative scaling variable\. Under a Gaussian signal\-channel model with spectral growth of client\-informative directions, we establish a regime\-conditional scaling law: leakage grows as $\\Theta\(d/\\log d\)$ with effective dimension $d$\. This result yields a leakage\-ratio notion of privacy debt, where fixed\-noise deployment can expose increasing client\-informative signal even when the accountant\-reported DP configuration is unchanged\. We therefore propose a scale\-aware Gaussian calibration rule that preserves the target leakage regime up to constant factors, and show across vision and language settings that it substantially reduces cross\-scale privacy drift relative to fixed\-noise baselines\.

## A Private Empirical Defense Against Privacy Audits

**Authors:** Saloni Modi; Srivi Balaji; Yusong Zhu; Gautam Kamath; Kevin Tian

**ID:** 150370 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=iZVoJOJLSL>) | [PDF](<https://openreview.net/pdf?id=iZVoJOJLSL>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150370>)

Differential privacy \(DP\) has traditionally been used to provide theoretical upper bounds on an algorithm's stability to changing its training data\. In modern machine learning applications, achieving strong tradeoffs between utility and theoretical privacy is challenging, and thus one may optimistically hope that existing theoretical analyses are loose\. Recent work on \\emph\{privacy auditing\} has adopted a dual viewpoint, instead lower bounding the true privacy of an algorithm by constructing empirical distinguishing events\. The auditing literature has thus far yielded a pessimistic outlook on the looseness of theoretical privacy bounds for DP\-SGD, the de facto private training method in modern ML, as nearly\-matching empirical lower bounds have been achieved under various threat models \\cite\{NasrHSBTJCT23, AnnamalaiC24, CebereBP25\}\.   In this work, we propose the empirical privacy lower bound of an algorithm as a concrete metric to optimize for, complementary to the theoretical upper bound\. We give a lightweight defense framework that generically augments optimization methods in the ML pipeline to have significantly\-improved empirical privacy on standard benchmarks\. Moreover, we show that our framework comes at \\emph\{no theoretical privacy cost\} when augmenting DP\-SGD, unlike previous defenses against membership inference attacks\. We evaluate our defense against a broad range of audit constructions, models, and datasets to demonstrate its flexibility\.   Our code implementation can be found at \\href\{https://github\.com/neurips26privacyaudit/empirical\-privacy\-defense\}\{this anonymous repository\}\.

## How Far Are VLMs from Privacy Awareness in the Physical World? An Empirical Study

**Authors:** Junran Wang; Xinjie Shen; Zehao Jin; Pan Li

**ID:** 151382 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b1g2c9p7zS>) | [PDF](<https://openreview.net/pdf?id=b1g2c9p7zS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151382>)

As Vision\-Language Models \(VLMs\) are increasingly deployed as autonomous cognitive cores for embodied assistants, evaluating their privacy awareness in physical environments becomes critical\. Unlike digital chatbots, these agents operate in intimate spaces, such as homes and hospitals, where they possess the physical agency to observe and manipulate privacy\-sensitive information and artifacts\. However, current benchmarks remain limited to unimodal, text\-based representations that cannot capture the demands of real\-world settings\. To bridge this gap, we present ImmersedPrivacy, an interactive audio\-visual evaluation framework that simulates realistic physical environments using a Unity\-based simulator\. ImmersedPrivacy evaluates physically grounded privacy awareness across three progressive tiers that test a model's ability to identify sensitive items in cluttered scenes, adapt to shifting social contexts, and resolve conflicts between explicit commands and inferred privacy constraints\. Our evaluation of 12 state\-of\-the\-art models reveals consistent deficits\. In cluttered scenes, all models exhibit monotonic performance decay as scene complexity grows due to perceptual deficit\. When social context shifts, no model exceed 65% selection accuracy\. Under conflicting commands, the best model gemini\-3\.1\-pro perfectly balances task completion and privacy preservation in only 51% of cases\. These findings reveal that current VLMs in the physical world suffer from perceptual fragility and fail to let their knowledge of privacy cues govern their situated behavior\. Our code and data is available at https://anonymous\.4open\.science/r/immersed\-privacy\-review\-3A3C\.

## SynBench: A Benchmark for Differentially Private Text Generation

**Authors:** Yidan Sun; Viktor Schlegel; Srinivasan Nandakumar; Iqra Zahid; Yuping Wu; Yulong Wu; Hao Li; Jie Zhang; Warren Del\-Pinto; Goran Nenadic; Siew Kei Lam; Anil A Bharath

**ID:** 139111 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=kRbRRTtsgf>) | [PDF](<https://openreview.net/pdf?id=kRbRRTtsgf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139111>)

Synthetic text generation with Differential Privacy \(DP\) guarantees emerges as a principled approach that can enable the sharing of sensitive datasets across institutional and regulatory boundaries, while bounding the risks of re\-identification and membership inference\. LLM\-based methods deliver promising results; however, comparisons are exacerbated by differing evaluation setups and "private" datasets, potential pre\-training contamination is not considered and guarantees are not verified with DP audits\.  To advance this field, we introduce a unified evaluation framework with standardised utility and fidelity metrics and privacy audits, encompassing nine curated datasets that capture domain\-specific complexities such as technical jargon, long\-context dependencies, and specialised document structures\. In a large\-scale empirical study, we benchmark LLM\-based state\-of\-the\-art DP text generators of varying sizes \(between 1\-\-8B\)\. Our results indicate that DP synthetic text generation remains an unsolved challenge, with quality deteriorating more as the private datasets deviate further from the generators' pre\-training corpora\. Our novel synthetic text membership inference attack \(MIA\) explains this observation: Synthetic data quality is overestimated when LLMs have been pre\-trained\-\-\-without DP\-\-\-on portions of the "private" data to be generated\. Finally, our work provides the first quantitative evidence that this "public pre\-training and private generation" paradigm invalidates the guaranteed privacy bounds of real\-world private datasets\.

## Revisiting Gradient Ascent: Machine Unlearning from a Geometric Perspective for Source\-Free Scenarios

**Authors:** Yufeng Cao; Naen Xu; Xuyang Teng; Tianyu Du; Qiang Zhao

**ID:** 154220 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FJsiUCGz4M>) | [PDF](<https://openreview.net/pdf?id=FJsiUCGz4M>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154220>)

Machine unlearning is becoming increasingly indispensable for meeting ever\-stringent data compliance requirements, such as the \`\`right to be forgotten''\. While Gradient Ascent \(GA\) based approximate methods have drawn attention for their conceptual simplicity, their practical deployment is severely constrained by three fundamental issues: first, the lack of feasibility analysis leads to divergent update directions; second, gradient conflict inevitably degrades the performance maintenance on retained data; and third, heavy reliance on the retain set restricts their applicability in real\-world settings\. To address these challenges, we conduct an in\-depth investigation from a geometric perspective into the underlying root causes of instability in conventional GA methods\. Our analysis reveals that the feasibility of unlearning intrinsically depends on specific geometric constraint relationships within the parameter space\. Building upon this theoretical insight, we formally establish the methods governing unlearning feasibility\. The first is the direction feasibility, which constrains the feasible update trajectory and keeps the model within reasonable parameter regions during unlearning\. The second is the step\-size feasibility, which further restricts the update magnitude along the feasible direction to prevent model collapse caused by large steps\.Notably, we find that the direction feasibility does not rely on any information from the retain set\. In light of this, we further explore viable approaches for effectively estimating the step\-size feasibility under strict source\-free scenarios\.

## ERIS: Enhancing Privacy and Scalability in Federated Learning via Federated Shard Aggregation

**Authors:** Dario Fenoglio; Pasquale Polverino; Jacopo Quizi; Martin Gjoreski; Akash Dhasade; Marc Langheinrich

**ID:** 151365 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=b7CsCWQwlK>) | [PDF](<https://openreview.net/pdf?id=b7CsCWQwlK>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151365>)

Scaling Federated Learning \(FL\) to billion\-parameter models forces a challenging trade\-off between privacy, scalability, and model utility\.      Existing solutions often tackle these challenges in isolation, sacrificing accuracy, relying on costly cryptographic tools, or introducing communication and optimization inefficiencies that affect convergence\. We introduce ERIS, an FL framework centered on \_Federated Shard Aggregation\_ \(FSA\), a novel mechanism that partitions each client update into non\-overlapping shards whose aggregation is distributed across multiple client\-side aggregators\. FSA removes the central aggregation bottleneck, limits the information visible to any single observer, and preserves the centralized FL update after reassembly\. ERIS can further readily integrate Distributed Shifted Compression \(DSC\) to reduce transmitted payloads and exposed coordinates\.      We prove that ERIS preserves convergence under standard assumptions and bounds mutual information leakage by the observable fraction of each update, decreasing with the number of client\-side aggregators, and with the compression level when DSC is enabled\. Experiments across image and text tasks, including large language models, show that ERIS achieves FedAvg\-level utility while substantially reducing communication bottlenecks and improving robustness to membership inference and reconstruction attacks, without relying on heavy cryptography or utility\-degrading perturbations\.

## SMI: Statistical Membership Inference for Reliable Unlearned Model Auditing

**Authors:** Jialong Sun; Zeming Wei; Jiaxuan Zou; Jiacheng Gong; Chengyang Dong; Jie Fu; Heng Xu; Jialong Li; Bo Liu

**ID:** 153407 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LZfoK7J0Q5>) | [PDF](<https://openreview.net/pdf?id=LZfoK7J0Q5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153407>)

Machine unlearning \(MU\) is essential for enforcing the right to be forgotten in machine learning systems\. A key challenge of MU is how to reliably audit whether a model has truly forgotten specified training data\. Membership Inference Attacks \(MIAs\) are widely used for unlearned model auditing, where samples that evade membership detection are regarded as successfully forgotten\. We show this assumption is fundamentally flawed: failed membership inference does not imply true forgetting\. We prove that unlearned samples occupy a fundamentally different positions in the feature space feature space than non\-member samples, making this alignment bias unavoidable and unobservable, which leads to systematically optimistic evaluations of unlearning performance\. Meanwhile, training shadow models for MIA incurs substantial computational overhead\. To address both limitations, we propose Statistical Membership Inference \(SMI\), a training\-free auditing framework that reformulates auditing as estimating the non\-member mixture proportion in the unlearned feature distribution\. Beyond estimating the forgetting rate, SMI also provides bootstrap reference ranges for quantified auditing reliability\. Extensive experiments show that SMI consistently outperforms all MIA\-based baselines, with no shadow model training required\. Overall, SMI establishes a principled and efficient alternative to MIA\-based auditing methods, with both theoretical guarantees and strong empirical performance\.

## Auditing Privacy Leakage in Tabular Foundation Model Embeddings

**Authors:** Xun Wang; Adam Dziedzic; Michael Backes; Franziska Boenisch

**ID:** 149397 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=qLsP2gDvC0>) | [PDF](<https://openreview.net/pdf?id=qLsP2gDvC0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149397>)

Tabular Foundation Models \(TabFMs\) produce context\-aware embeddings that are increasingly stored, shared, and reused for retrieval, clustering, and cross\-institutional data exchange\. These embeddings are often treated as privacy\-preserving substitutes for raw tabular records, yet their attribute\-level information content remains poorly understood\. We present a systematic privacy audit of TabFM embeddings: given an embedding and varying amounts of side information, how accurately can sensitive attributes be recovered? We introduce Cascade Probing , a sequential probing method that measures recoverability while accounting for inter\-attribute dependencies, significantly outperforming joint probing and optimization\-based inversion baselines\. Across four TabFMs \(TabPFN, TabDPT, Mitra, TabICL\) and eight datasets, we find that even without any side information, 65\-95\\% of sensitive attributes can be recovered from embeddings alone\. More critically, recoverability exhibits a Privacy Cliff : revealing a single known attribute sharply increases the recoverability of all remaining attributes\. This phenomenon generalizes across model architectures and diverse domains, and is not eliminated by standard embedding transformations including noise injection, PCA, and knowledge distillation\. These findings suggest that we need more formal privacy techniques for protecting sensitive information inside TabFM embeddings\.

## We Should Distinguish Unlearning From Untraining

**Authors:** Eleni Triantafillou; Imtiaz Humayun; Mónica Ribero; Alexander Turner; Michael Mozer; Georgios Kaissis

**ID:** 140062 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=U9dDSCabjP>) | [PDF](<https://openreview.net/pdf?id=U9dDSCabjP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/140062>)

There has been a recent surge in interest about the question of how we can "delete" specific data points or behaviours from a trained model, a goal referred to as "machine unlearning"\. We argue that the umbrella term "unlearning" actually spans two distinct problem formulations, but the distinction between them has not yet been observed in literature\. This causes ambiguity around when an unlearning algorithm is expected to work, leads to the use of inappropriate metrics and baselines when comparing algorithms to one another, difficulty in interpreting results, and missed opportunities for pursuing critical research directions\. In this paper, we argue for the position that a fundamental distinction must be made between two notions that we refer to as Unlearning and Untraining\. On one hand, Untraining aims to reverse the effect of having trained on a given "forget set", i\.e\. to remove the influence that that specific set of examples had on the model during training\. On the other hand, Unlearning aims not just to remove the influence of those given examples, but also of the entire underlying subdistribution from which they were sampled \(and thus e\.g\. the concept or model behaviour that those examples represent\)\. We discuss technical definitions of these problems and map problem settings studied in the literature to each notion\. By disambiguating technical definitions, our work aims to accelerate progress in this important field\.

## Optimal Rates for Differentially Private Hypothesis Testing with E\-values

**Authors:** Ben Jacobsen; Tomás González Lara; Gavin R Brown; Kassem Fawaz; Aaditya Ramdas

**ID:** 152811 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QEVhuw3jUX>) | [PDF](<https://openreview.net/pdf?id=QEVhuw3jUX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152811>)

E\-values have attracted considerable interest in recent years as flexible tools for enabling anytime\-valid and adaptive data analysis\.   Hypothesis testing is at the core of many of these applications, which can often involve private or sensitive data\.   In this work, we answer a simple but important question: given two distributions $\\mathbb\{P\}$ and $\\mathbb\{Q\}$,    what is the maximum achievable e\-power when testing $X\\sim \\mathbb\{P\}^n$ against $X\\sim\\mathbb\{Q\}^n$ with e\-values that satisfy $\\varepsilon$\-differential privacy?    We characterize the optimal rate for this problem and provide an algorithm which matches it asymptotically\.   In the sequential setting, when observations arrive one\-by\-one and the analyst chooses when to halt, we give matching upper and lower bounds on the stopping times of any differentially private e\-process\.   Numerical experiments confirm the practicality of our algorithms, which require less data than the recently proposed DP\-SPRT across a range of sequential testing problems and privacy levels\.

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

## Publishing Below\-Threshold Triangle Counts under Local Weight Differential Privacy

**Authors:** Kevin Pfisterer; Quentin Hillebrand; Vorapong Suppakitpaisarn

**ID:** 149634 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ocQWtpw7Ib>) | [PDF](<https://openreview.net/pdf?id=ocQWtpw7Ib>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149634>)

We propose an algorithm for counting below\-threshold triangles in weighted graphs under local weight differential privacy\. Although many prior studies have considered the setting in which the graph topology is public and only the edge weights are sensitive, to the best of our knowledge, this is the first work to study this privacy notion in the local model\. Building on a two\-round protocol for locally differentially private triangle counting, we exploit the public graph topology to design a novel algorithmic framework\. This leads to significant improvements in both accuracy and scalability\.   In particular, when the input graph is planar, our algorithm  eliminates the covariance arising from distributed triangle counting at nodes; for graphs with bounded degeneracy, it significantly reduces this covariance\. Since covariance is the dominant source of error in the counting task, our method achieves accuracy that closely aligns with the lower bound\.  We also present an efficient algorithm for the computation of the smooth sensitivity and provide experiments that quantify the trade\-off between the biased and unbiased variants of our estimator and demonstrate the effectiveness of the proposed improvements\.

## Machine Unlearning in Diffusion LLMs

**Authors:** Yili Wang; Yijie Xu; Lu Dai; Tairan Huang; Qianyi Cai; Huizai Yao; Tianfu Wang; Hui Xiong

**ID:** 154410 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Dlj9mRJfOq>) | [PDF](<https://openreview.net/pdf?id=Dlj9mRJfOq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154410>)

Machine unlearning \(MU\) aims to remove sensitive or undesired knowledge from a trained model without retraining from scratch\. While MU has been widely studied for autoregressive large language models, its application to diffusion large language models \(DLLMs\) remains largely unexplored\. In this paper, we present the first systematic study of MU in DLLMs and show that existing unlearning objectives transfer poorly to this setting due to sparse supervision and inaccurate forgetting localization\. To address these challenges, we propose \\textsc\{DL\-Eraser\}, a DLLM\-native unlearning framework that suppresses target recoverability under high\-mask conditioning while constraining updates to a utility\-preserving subspace\. Extensive experiments show that \\textsc\{DL\-Eraser\} achieves stronger forgetting while better preserving model utility than existing baselines\. To the best of our knowledge, this is the first work that systematically investigates MU in DLLMs\.

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

## GUIGuard\-Bench: Toward a General Evaluation for Privacy\-Preserving GUI Agents

**Authors:** Yanxi Wang; Zhiling Zhang; Wenbo Zhou; Weiming Zhang; Jie Zhang; Qiannan Zhu; Yu Shi; Shuxin Zheng; Jiyan He

**ID:** 139607 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FnL0OI4r5R>) | [PDF](<https://openreview.net/pdf?id=FnL0OI4r5R>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139607>)

As GUI agents increasingly rely on screenshots to perceive and operate digital environments, they may inadvertently expose sensitive information such as identities, accounts, locations, and behavioral traces\. While existing benchmarks primarily focus on task completion, grounding, or defenses against third\-party attacks, current visual privacy datasets remain largely restricted to static natural images, limiting their ability to capture the contextual dependence and task relevance of privacy risks in GUI task trajectories\. To bridge this gap, we introduce GUIGuard\-Bench, a first\-step benchmark for studying privacy\-preserving GUI agents in trajectory\-based GUI workflows\. GUIGuard\-Bench contains 241 real GUI\-agent trajectories with 4,080 screenshots across Android and PC environments\. Each screenshot is annotated at the region level with privacy bounding boxes, semantic privacy categories, risk levels, and whether the private information is necessary for completing the task\. Built on these annotations, GUIGuard\-Bench supports three complementary evaluations: privacy recognition, offline planning fidelity under protected screenshots, and the utility impact of different protection strategies\. Our results show that current models can often detect whether a screenshot contains private information, but they struggle with fine\-grained localization, category recognition, risk assessment, and task\-necessity judgment\. We also find that closed\-source models, exemplified by Claude Sonnet 4\.6, can maintain largely consistent planner semantics in Android environments after privacy protection is applied\. GUIGuard\-Bench serves as a seed benchmark for studying privacy awareness, data minimization, and privacy\-utility trade\-offs in GUI agents, and is intended to support broader future evaluation efforts\.

## Sequential Membership Inference Attacks

**Authors:** Thomas Michel; Debabrota Basu; Emilie Kaufmann

**ID:** 149251 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rm2zTbl2zd>) | [PDF](<https://openreview.net/pdf?id=rm2zTbl2zd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149251>)

Modern AI models are not static\. They go through multiple updates in their lifecycles\. We propose to design Sequential Membership Inference \(SeMI\) attacks leading to tighter privacy audits by exploiting the sequence of models and injecting a target canary at a controlled insertion time\. First, for empirical mean computation, we develop $\\mathrm\{SeMI\}^\{\\ast\}$, an optimal SeMI attack to identify the presence of a target inserted at a specific insertion step\. We derive the power of $\\mathrm\{SeMI\}^\{\\ast\}$ to show that accessing the model sequence yields more powerful MI attacks than scrutinising only the final model\. $\\mathrm\{SeMI\}^\{\\ast\}$ exhibits an isolation property\-\- its power depends on the statistics obtained right before and after insertion of the target\. Leveraging this insight, we develop practical white\-box \(accessing model gradients\) and black\-box \(accessing loss\) SeMI attacks against models trained with \(DP\-\)SGD\. Across datasets and models trained with \(DP\-\)SGD, our experiments show that SeMI attacks achieve higher powers than snapshot\-independent baselines, and yield tighter privacy audits thanks to \(a\) control over the insertion time and \(b\) observations across the model sequence\.

## Sampling\-Free Privacy Accounting for Matrix Mechanisms under Random Allocation

**Authors:** Jan Schuchardt; Nikita Kalinin

**ID:** 150083 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=krYjrhQMCu>) | [PDF](<https://openreview.net/pdf?id=krYjrhQMCu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150083>)

We study privacy amplification for differentially private model training with matrix factorization under random allocation \(also known as the balls\-in\-bins model\)\. Recent work by Choquette\-Choo et al\. \(2025\) proposes a sampling\-based Monte Carlo approach to compute amplification parameters in this setting\. However, their guarantees either only hold with some high probability or require random abstention by the mechanism\. Furthermore, the required number of samples for ensuring $\(\\epsilon,\\delta\)$\-DP is inversely proportional to $\\delta$\. In contrast, we develop sampling\-free bounds based on Rényi divergence and conditional composition\. The former is facilitated by a dynamic programming formulation to efficiently compute the bounds\. The latter complements it by offering stronger privacy guarantees for small $\\epsilon$, where Rényi divergence bounds inherently lead to an over\-approximation\. Our framework applies to arbitrary banded and non\-banded matrices\. Through numerical comparisons, we demonstrate the efficacy of our approach across a broad range of matrix mechanisms used in research and practice\.

## On the Price of Privacy for Language Identification and Generation

**Authors:** Xiaoyu Li; Andi Han; Jiaojiao Jiang; Junbin Gao

**ID:** 148955 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tuVOBgviZm>) | [PDF](<https://openreview.net/pdf?id=tuVOBgviZm>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148955>)

As large language models \(LLMs\) are increasingly trained on sensitive user data, understanding the fundamental cost of privacy in language learning becomes essential\. We initiate the study of differentially private \(DP\) language identification and generation in the agnostic statistical setting, establishing algorithms and matching lower bounds that precisely quantify the cost of privacy\. For both tasks, approximate  $\(\\varepsilon, \\delta\)$\-DP with constant $\\varepsilon &gt; 0$ recovers the non\-private error rates: $\\exp\(\-r\(n\)\)$ for identification \(for any $r\(n\) = o\(n\)$\) and $\\exp\(\-\\Omega\(n\)\)$ for generation\. Under pure $\\varepsilon$\-DP, the exponents degrade by a multiplicative factor of $\\min\\\\\{1, \\varepsilon\\\\\}$, which we show is tight up to constants\. Notably, for generation under pure DP with mild assumptions, the upper bound $\\exp\(\-\\min\\\\\{1,\\varepsilon\\\\\} \\cdot \\Omega\(n\)\)$ matches the lower bound up to some constants, establishing an optimal rate\. Our results show that the cost of privacy in language learning is surprisingly mild: absent entirely under approximate DP, and exactly a $\\min\\\\\{1,\\varepsilon\\\\\}$ factor in the exponent under pure DP\.

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

## PACZero: PAC\-Private Fine\-Tuning of Language Models via Sign Quantization

**Authors:** Murat Bilgehan Ertan; Xiaochen Zhu; Ha Nguyen; Marten van Dijk; Srinivas Devadas

**ID:** 149731 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=nn9uSJJgXG>) | [PDF](<https://openreview.net/pdf?id=nn9uSJJgXG>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149731>)

We introduce PACZero, a family of PAC\-private zeroth\-order mechanisms for fine\-tuning large language models that delivers usable utility at $I\(S^\*; Y\_\{1:T\}\)=0$\. This privacy regime bounds the membership\-inference attack \(MIA\) posterior success rate at the prior, an MIA\-resistance level the DP framework matches only at $\\varepsilon=0$ and infinite noise\. All DP\-ZO comparisons below are matched at the MIA posterior level\. The key insight is that PAC Privacy charges mutual information only when the release depends on which candidate subset is the secret\. Sign\-quantizing subset\-aggregated zeroth\-order gradients creates frequent unanimity, steps at which every candidate subset agrees on the update direction; at these steps the released sign costs zero conditional mutual information\. We propose two variants that span the privacy\-utility trade\-off: PACZero\-MI \(budgeted MI via exact calibration on the binary release\) and PACZero\-ZPL \($I=0$ via a uniform coin flip on disagreement steps\)\. We evaluate on SST\-2 and SQuAD with OPT\-1\.3B and OPT\-6\.7B in both LoRA and full\-parameter tracks\. On SST\-2 OPT\-1\.3B full fine\-tuning at $I=0$, PACZero\-ZPL reaches $\{88\.99\\pm0\.91\}$, within $2\.1$pp of the non\-private MeZO baseline \($91\.1$ FT\)\. No prior method produces usable utility in the high\-privacy regime $\\varepsilon&lt;1$, and PACZero\-ZPL obtains competitive SST\-2 accuracy and nontrivial SQuAD F1 across OPT\-1\.3B and OPT\-6\.7B at $I=0$\.

## The BatchNorm Illusion: Diagnosing Normalization Artifacts in Machine Unlearning Evaluation

**Authors:** Aaryaman Kalani; Murari Mandal; Dhruv Kumar; Mohan Kankanhalli; Yash Sinha

**ID:** 155403 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5uiFZ0FfMq>) | [PDF](<https://openreview.net/pdf?id=5uiFZ0FfMq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155403>)

Approximate machine unlearning aims to remove the influence of specific training data from a trained model without retraining from scratch\. We identify a previously undocumented confound in how unlearning is evaluated on BatchNorm\-based architectures: a single forward pass over retain data, an operation that modifies no weight, can deterministically rewrite the model's normalization state and reverse the apparent surface\-metric forgetting\. We formalize this operation as a weight\-preserving fixed\-point operator and prove that any pre\-versus\-post gap it induces is provably attributable to BN running statistics rather than to any modification the unlearning method made to the weights\. This attribution claim cleanly separates measurement failure \(BN artifact\) from encoder failure \(residual weight\-encoded information, recently documented in concurrent work\), and the same operator framework yields a unique decomposition of linear\-probe elevation into BN\-measurement\-bias and encoder\-geometry components\. Empirically, the artifact reverses headline forget accuracy by up to $78$pp across nine published methods on standard benchmarks; an attacker with as few as $10$ unlabeled images recovers most of the masked accuracy; and a strict GroupNorm control reduces the artifact to zero across all methods\.

## DP\-EGGROLL: Centered Fitness\-Vector Privatization for Backprop\-Free Differentially Private Optimization

**Authors:** David T Zagardo

**ID:** 149051 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=tEkMApJftN>) | [PDF](<https://openreview.net/pdf?id=tEkMApJftN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149051>)

Evolution strategies optimize through fitness evaluations, but standard ES exposes data\-dependent fitness values\. We introduce DP\-EGGROLL, a central\-DP mechanism for EGGROLL\-style population optimization with decomposable supervised losses\. Each private step forms per\-example candidate\-loss vectors, mean\-centers each row across candidates, clips the centered row, averages with a fixed nominal denominator, and adds calibrated Gaussian noise; reward shaping and the ES update are post\-processing\. Clipping gives the $C/m$ add/remove sensitivity bound, while centering removes common\-mode loss before clipping\. We evaluate 10 public tabular benchmarks across five privacy budgets, using 10 final seeds and equal 32\-configuration HPO budgets for fast DP\-AdamW, scalar DP\-ZO, centered DP\-EGGROLL, and independently tuned uncentered DP\-EGGROLL\. Each selected final run is accounted as an individual $\(\\varepsilon,10^\{\-5\}\)$\-DP run; multi\-configuration HPO is a benchmark protocol, not a single\-run deployment guarantee\. On tabular classification, centered DP\-EGGROLL is practically non\-inferior to fast DP\-AdamW on 22/25 AUROC endpoints and is faster per step in all 25 classification settings\. Centering improves over tuned uncentered DP\-EGGROLL on all 25 classification AUROC endpoints\. Neural experiments include end\-to\-end small MLPs and a low\-rank adapter stress test; both reinforce that centered population\-vector privatization carries more signal than scalar DP\-ZO\. Regression is more heterogeneous, with centered DP\-EGGROLL practically non\-inferior on 14/25 RMSE endpoints\.

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

## Prune to Protect: Faster Training and Enhanced Privacy by Dynamic Data Pruning

**Authors:** Chinmay Joshi; Advait Gadhikar; Celia Rubio\-Madrigal; Aneet Kumar Dutta; Mridula Singh; Rebekka Burkholz

**ID:** 151415 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=aqIbhSL3JS>) | [PDF](<https://openreview.net/pdf?id=aqIbhSL3JS>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151415>)

Deep networks memorize parts of their training data, exposing them to privacy attacks such as membership inference\. The most vulnerable samples are often hard\-to\-learn tail examples: they are fitted late, carry high information for generalization, and are difficult to protect without sacrificing performance\. We show that this privacy–utility tension can be mitigated by learning such samples earlier\. To this end, we propose Weighted Loss InfoBatch \(WLIB\), which dynamically prunes easy samples while re\-weighting hard ones according to sample\-wise pruning ratios\. By adjusting the influence of informative samples throughout training, WLIB jointly reduces memorization, improves robustness to membership inference attacks, and speeds up optimization\. Extensive experiments demonstrate that WLIB achieves a favorable combination of privacy, utility, and training efficiency\.

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

## Privately Estimating Monotone Statistics in Polynomial Time

**Authors:** Gavin R Brown; Ephraim Linder; Mahbod Majid; Vikrant Singhal

**ID:** 153618 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=K3GOUY36bZ>) | [PDF](<https://openreview.net/pdf?id=K3GOUY36bZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153618>)

We study efficient differentially private algorithms for estimating monotone statistics, i\.e\., statistics that are monotone under the addition of new observations\. The starting point for our investigation is subsample\-and\-aggregate: a classical paradigm that partitions the dataset into blocks, estimates the statistic on each block, and then privately aggregates the estimates\. While practical and generically applicable, this approach is quite data\-hungry\. We improve upon this framework for the class of monotone statistics\-\-\-compared to subsample\-and\-aggregate, our algorithms save a factor of $t$ in sample complexity and pay a factor of $e^t$ in running time, where $t&gt;0$ is a tunable parameter\. We complement our results with a query\-complexity lower bound, showing that our algorithms are essentially optimal for this task\. As an application, we obtain improved results for private eigenvalue estimation, private loss estimation, and privately estimating a single parameter of a high\-dimensional model, e\.g\., in linear regression\.

## Jaguar: Fast Private CNN Inference with Power\-of\-Two Homomorphic Arithmetic

**Authors:** Yewon Jeong; Nayoung Jung; Hyeri Roh; Woo\-Seok Choi

**ID:** 148765 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vEZC3kzDrD>) | [PDF](<https://openreview.net/pdf?id=vEZC3kzDrD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148765>)

Hybrid HE/2PC private CNN inference remains bottlenecked by prime\-modulus homomorphic arithmetic in convolution and by a precision flow that runs ReLU at doubled bitwidth before invoking a separate truncation protocol\. We present Jaguar, a system built on a single design choice\-\-\-a power\-of\-two ciphertext ring\-\-\-that addresses both\. The choice enables SPA\-Conv, a coefficient\-domain convolution kernel that replaces NTT\-centric polynomial multiplication with scalar\-\-polynomial accumulation, and an exact ciphertext\-side truncation by local right shifts that lets ReLU run directly at the target fixed\-point precision and eliminates the post\-ReLU truncation protocol\. Where NTT remains genuinely useful\-\-\-at the client, for the single polynomial multiplication during decryption\-\-\-we recover it through an auxiliary NTT prime, preserving the power\-of\-two protocol substrate while keeping decryption $O\(N\\log N\)$\. On ImageNet\-scale ResNet\-18, ResNet\-50, and MobileNetV2 with AVX disabled, Jaguar achieves 2\.07\-\-3\.72$\\times$ lower end\-to\-end latency than Cheetah and 2\.16\-\-3\.36$\\times$ lower than Rhombus, with 1\.16\-\-1\.76$\\times$ lower communication than Cheetah\.

## Privacy by Postprocessing the Discrete Laplace Mechanism

**Authors:** Quentin Hillebrand; Jacob Imola; Rasmus Pagh; Sia Sejer

**ID:** 150901 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eYwUlKuL6y>) | [PDF](<https://openreview.net/pdf?id=eYwUlKuL6y>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150901>)

We show that an "old dog," the classical discrete Laplace \(aka\. geometric\) mechanism, can "perform new tricks":  \* It can be post\-processed to yield a simple, unbiased estimator of any subexponential function $f$ of the original data, giving a simple, discrete, multivariate version of the recent unbiasing result for the Laplace mechanism by Calmon et al\. \(FORC '25\)\. \* It can be post\-processed to output the same distribution as the Laplace mechanism or the Staircase mechanism with identical privacy parameters\.  Thus, the discrete Laplace mechanism is a versatile mechanism that should be preferred over the Laplace and Staircase mechanisms whenever the data is discrete \(or can be made discrete while controlling $\\ell\_1$\-sensitivity\)\.      We show bounds on the variance of our estimator, compared to the mean square error of the biased estimator that simply evaluates the $f$ on the output of the mechanism\. Though our unbiased estimator has exponential running time for worst\-case functions, we show that it can often be computed in linear or polynomial time for concrete, structured functions\. We showcase the properties of our methods empirically with several use cases including profile and entropy estimation, as well as distributed/federated data analysis applications in which unbiasedness is key to accuracy\.

## Computationally Efficient Replicable Learning of Parities and Applications

**Authors:** Moshe Noivirt; Jessica Sorrell; Eliad Tsfadia

**ID:** 150028 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lJzvyZGkHM>) | [PDF](<https://openreview.net/pdf?id=lJzvyZGkHM>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150028>)

We study the computational relationship between replicability \(Impagliazzo et al\. \[STOC \`22\], Ghazi et al\. \[NeurIPS \`21\]\) and other stability notions\.  Specifically, we focus on replicable PAC learning and its connections to differential privacy \(Dwork et al\. \[TCC 2006\]\) and to the statistical query \(SQ\) model \(Kearns \[JACM \`98\]\)\. Statistically, it was known that differentially private learning and replicable learning are equivalent and strictly more powerful than SQ\-learning\. Yet, computationally, all previously known efficient \(i\.e\., polynomial\-time\) replicable learning algorithms were confined to SQ\-learnable tasks or restricted distributions, in contrast to differentially private learning\.   Our main contribution is the first computationally efficient replicable algorithm for realizable learning of parities over arbitrary distributions, a task that is known to be hard in the SQ\-model, but possible under differential privacy\. This result provides the first evidence that efficient replicable learning over general distributions strictly extends efficient SQ\-learning, and is closer in power to efficient differentially private learning, despite computational separations between replicability and privacy\. Additionally, we leverage our parity learner to prove that, assuming $RP \\neq NP$, converting replicability to pure differential privacy requires a strict loss in sample complexity\. Our main building block is a new, efficient and replicable algorithm that, given a set of vectors, outputs a subspace of their linear span that covers most of them\.

## 𝑓\-Differential Privacy Filters: Validity and Approximate Solutions

**Authors:** Long Tran; Antti Koskela; Ossi Räisä; Antti Honkela

**ID:** 156133 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=0AH3Ph6OYP>) | [PDF](<https://openreview.net/pdf?id=0AH3Ph6OYP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/156133>)

Accounting for privacy loss under fully adaptive composition\-\-\-where mechanism choice and privacy parameters may depend on the history of prior outputs\-\-\-is a central challenge in differential privacy \(DP\)\. Here, privacy filters are stopping rules ensuring a prescribed global budget is not exceeded\. A leading candidate for optimal filter design is 𝑓\-DP, which characterizes the full extent of adversarial hypothesis testing and recovers \(ε,δ\)\-DP through piece\-wise linear trade\-off functions, while enabling tight \(ε,δ\)\-DP accounting in standard compositions via tensor products\. Yet whether such filters can be correctly defined under 𝑓\-DP remains unclear\. We show that the natural 𝑓\-DP filter\-\-\-tracking path\-wise accumulating tensor products and stopping when the prescribed curve is crossed\-\-\-is fundamentally invalid, precluding the direct use of standard efficient numerical Fast\-Fourier\-Transform accounting in the fully adaptive setting\. We characterize this failure, establishing necessary and sufficient conditions for the natural 𝑓\-DP filter's validity\. Furthermore, we prove a fully adaptive central limit theorem for 𝑓\-DP, establishing Gaussian convergence of cumulative privacy losses under full adaptivity\. As a demonstration, we construct a closed\-form approximate GDP filter for subsampled Gaussian mechanisms that provably outperforms RDP\-based accounting in asymptotic regimes \($q\\ll 1$ and $q\\approx 1$\) without tracking the full trade\-off function, demonstrating that the slack in RDP is not intrinsic to adaptive composition\-\-\-though CLT\-based approximations are known to be optimistic at realistic subsampling rates, a limitation that remains an open challenge\.

## Privacy Amplification Persists under Unlimited Synthetic Data Release

**Authors:** Clément Pierquin; Aurélien Bellet; Marc Tommasi; Matthieu Boussard

**ID:** 151674 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Ysuab2V5oE>) | [PDF](<https://openreview.net/pdf?id=Ysuab2V5oE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151674>)

We study \*privacy amplification by synthetic data release\*, a phenomenon in which differential privacy guarantees improve when releasing only synthetic data rather than the private generative model itself\. Recent work by Pierquin et al\. \(2025\) established the first formal amplification guarantees for linear generators, but they apply only in asymptotic regimes where the model dimension far exceeds the number of released synthetic records, limiting practical relevance\. In this work, we show that this restriction is not fundamental and establish that, surprisingly, for linear generators, \*privacy amplification can persist even when releasing an unbounded number of synthetic records\*\. To prove this result, we develop new analytical tools for characterizing the privacy loss induced by synthetic data release\. In particular, we leverage a sufficient\-statistics reduction to characterize privacy leakage, and introduce a novel criterion that upper bounds Rényi divergences in terms of Fisher information\. Our analysis provides structural insights that may guide the development of tighter privacy guarantees for more complex release mechanisms\. Finally, experiments with variational autoencoders trained using DP\-SGD further support the relevance of our theory beyond the linear setting\.

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

## On Differentially Private Mechanisms for Linear Regression

**Authors:** Bardiya Aryanfard; Monika Henzinger; Farhood Rostamkhani

**ID:** 151830 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Xd1wBiiFWf>) | [PDF](<https://openreview.net/pdf?id=Xd1wBiiFWf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151830>)

We study the classic least\-squares linear regression problem under differential privacy \(DP\) in the continual observation setting\. In this setting, the mechanism receives a stream of $n$ data points $\(x\_i,y\_i\)$ \($x\_i\\in\\mathbb\{R\}^d$ and $y\_i\\in\\mathbb\{R\}$\) and must output an estimate of the optimal parameters at each time step $i$\. Although differentially private linear regression has been extensively studied in the batch setting, the problem remains underexplored for the continual setting, with prior work being restricted to constrained linear regression and update time polynomial in $n$\.  In this work, we introduce ContinualAdaSSP, the first mechanism for unconstrained linear regression under continual differential privacy\. Our mechanism's suboptimality gap is proportional to $\\sqrt\{d\}\\operatorname\{polylog\}\(n\)$\. It requires $O\(d^2\\log\{n\}\)$ space and $O\(d^2\\log\{n\}\+d^\{\\omega\}\)$ \($\\omega$ is the matrix multiplication exponent\.\) update time, where $d$ is the dimension of the input space\.  This matches the suboptimality gap of the continual mechanism for the constrained version\.  We also study fundamental limits of differentially private linear regression by showing the first  lower bounds for the box\-constrained least\-squares linear regression problem\. Our lower bounds are proportional to $\\min\(n,\\frac\{\\sqrt\{d\}\}\{\\log^\{1\.5\}d\}\)$ for $\(1,O\(\\frac\{1\}\{n\}\)\)$\-DP, and $\\min\(n,\\frac\{d\}\{\\varepsilon\}\)$ for $\\varepsilon$\-DP, and are derived using a reduction from a fingerprinting code problem from \[Peter et al, 2024\], providing new insights into the inherent hardness of this canonical task\.   Our experimental evaluation on real\-world datasets shows that the accuracy of our mechanism  clearly outperforms  any other known differentially private mechanism for this problem such as rerunning the batch algorithm at each time step\.

## Assessing Per\-Sample Membership Inference Vulnerability without Retraining

**Authors:** Valentin Dorseuil; Jamal Atif; Olivier Cappé

**ID:** 155925 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=1mfOSEBuju>) | [PDF](<https://openreview.net/pdf?id=1mfOSEBuju>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155925>)

Recent work in the privacy literature shows that sample\-targeted membership inference attacks \(MIA\) significantly outperform untargeted approaches by a wide margin\. Motivated by this observation, we address the following question: Can the privacy vulnerability of individual training points be assessed without training shadow models? We show that per\-sample exposure to MIA is governed not only by a point's loss, but also by a data\-dependent geometric measure\. In the linear setting, we derive a closed\-form decomposition of individual black\-box MIA vulnerability into a population leverage score and a residual loss term, making explicit how sample\-dependent geometry translates into privacy exposure\. Since the final layer of most modern architectures is linear, we extend this framework to deep networks and propose a surrogate score operating on last\-layer representations that requires only a single trained model and no shadow models\.  Empirical evaluations across diverse datasets and architectures show that our score outperforms loss and gradient\-norm baselines at identifying the highest\-risk points under state\-of\-the\-art attacks, providing a computationally efficient and theoretically grounded tool for per\-sample privacy risk assessment\.

## Adaptive Target\-Charging with Privacy Filters and Individual Accounting

**Authors:** Peihan Liu; Alison Caulfield; Mark Chen; Rachel Cummings; Roxana Geambasu; Mathias Lécuyer; Pierre Tholoniat

**ID:** 155450 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5Vy5nPvzlg>) | [PDF](<https://openreview.net/pdf?id=5Vy5nPvzlg>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155450>)

The target\-charging technique \(TCT\), a generalization of the sparse vector technique, monitors whether query answers deviate beyond acceptable bounds while incurring privacy costs only upon significant deviations\. We develop a more mature theory of TCT through three contributions\. First, we generalize TCT and replace prior simulation\-based analyses with a direct stochastic domination argument, yielding a tighter bound and a modular proof structure that affords flexibility in the choice of privacy representation for the base mechanism as well as the composition accountant\. Second, we provide an anytime\-valid TCT guarantee that integrates with approximate Rényi DP filters\. Third, we enable individual\-level privacy filters\. Together, these provide the first end\-to\-end TCT construction compatible with privacy filters and individual\-level accounting, with practical relevance demonstrated through benchmarks inspired by the impending world\-scale deployment of the W3C Attribution standard, which is fundamentally rooted in individual filters\.

## Towards Hyperparameter Transfer for Differentially Private Optimization

**Authors:** Tianze Wang; Zhiqi Bu; Linjun Zhang

**ID:** 149609 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=opbIOcQ6tb>) | [PDF](<https://openreview.net/pdf?id=opbIOcQ6tb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149609>)

Scaling laws and hyperparameter tuning remain central challenges in training large\-scale models, particularly under differential privacy \(DP\), where optimization is further complicated by noise injection and per\-sample gradient clipping\. While Maximal Update Parametrization \($\\mu$P\) allows for zero\-shot hyperparameter transfer in standard training, we show that it fails under DP constraints due to the distinct spectral properties of high\-dimensional noise versus low\-rank gradients\. In this work, we introduce DP\-$\\mu$P, a theoretically grounded framework that extends $\\mu$P to the privacy\-preserving setting\. By analyzing the interaction between gradient clipping, noise injection, and feature learning, we derive a Signal\-to\-Noise Ratio \(SNR\) condition that governs layer\-wise learning rate scaling\. Combining this with our proposed spectral scaling formulation, we provide specific scaling rules for DP\-SGD, DP\-Adam, and DP\-Muon\. Empirically, we demonstrate that DP\-$\\mu$P enables effective zero\-shot transfer of learning rates across model widths on diverse architectures \(MLP, ViT, GPT\-2\), matching or exceeding the performance of individually tuned baselines while significantly reducing computational costs\.

## Learning the Signature of Memorization in Autoregressive Language Models

**Authors:** David Ilić; Kostadin Cvejoski; David Stanojević; Evgeny Grigorenko

**ID:** 148889 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uRaG7wkAol>) | [PDF](<https://openreview.net/pdf?id=uRaG7wkAol>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148889>)

All prior membership inference attacks for fine\-tuned language models use hand\-crafted heuristics \(e\.g\., loss thresholding, Min\-K\\%, reference calibration\), each bounded by the designer's intuition\. We introduce the first transferable learned attack, enabled by the observation that fine\-tuning any model on any corpus yields unlimited labeled data, since membership is known by construction\. This removes the shadow model bottleneck and brings membership inference into the deep learning era: learning what matters rather than designing it, with generalization through training diversity and scale\. We discover that fine\-tuning language models produces an invariant signature of memorization detectable across architectural families and data domains\. We train a membership inference classifier exclusively on transformer\-based models\. It transfers zero\-shot to Mamba \(state\-space\), RWKV\-4 \(linear attention\), and RecurrentGemma \(gated recurrence\), achieving 0\.963, 0\.972, and 0\.936 AUC respectively\. Each evaluation combines an architecture and dataset never seen during training, yet all three exceed performance on held\-out transformers \(0\.908 AUC\)\. These four families share no computational mechanisms, their only commonality is gradient descent on cross\-entropy loss\. Even simple likelihood\-based methods exhibit strong transfer, confirming the signature exists independently of the detection method\. Our method, Learned Transfer MIA \(LT\-MIA\), captures this signal most effectively by reframing membership inference as sequence classification over per\-token distributional statistics\. On transformers, LT\-MIA achieves 2\.8$\\times$ higher true positive rate at 0\.1\\% false positive rate than the strongest baseline\. The method also transfers to code \(0\.865 AUC\) despite training only on natural language texts\. Our results imply that leakage from memorization is intrinsic to cross\-entropy training; architectural innovation within this paradigm did not escape our attack\.  Code and the trained classifier are provided\.

## Loss is Not Behavior: A Unified Output\-Space Analysis of Gradient\-Based Machine Unlearning

**Authors:** Xingjian Zhao; Mohammad Mohammadi Amiri; Malik Magdon\-Ismail

**ID:** 149454 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pxm9KPF62z>) | [PDF](<https://openreview.net/pdf?id=pxm9KPF62z>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149454>)

Gradient\-based machine unlearning methods typically \`\`unlearn'' by optimizing forget and retain losses, but similar losses do not necessarily imply similar output\-space behavior\. Prior work has shown that high forget loss alone does not certify that unlearning has produced retraining\-like output behavior\. We therefore ask: when a gradient\-based unlearner differs from the model that would have been learned on only the retain data, what structure does the resulting output\-space gap have? We derive closed\-form expressions for this gap in linear regression, with an extension to nonlinear models via a generalized Gauss\-Newton and local linearity approximations\. Our analysis puts various gradient\-based methods under a unified framework parametrized by geometry, reweighting, and projection\. Two leverage matrices emerge that capture the forget\-retain entanglement under the retrained model geometry: forget self\-leverage and retain cross\-leverage\. We show both theoretically and empirically that these two leverage matrices drive the impact of the forget residual on the forget and retain outputs, and existing methods account for this geometry only partially\. Our framework yields precomputable leverage diagnostics for auditing forget sets to identify what type of gradient\-based unlearning is likely to be successful\.

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

## Understanding Private Evolution as Learning\-Augmented Clustering

**Authors:** Audra McMillan; Kunal Talwar; Felix Zhou

**ID:** 150694 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=gD2JAPGJBq>) | [PDF](<https://openreview.net/pdf?id=gD2JAPGJBq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150694>)

Private Evolution \(PE\) is a differentially private algorithm for synthetic data generation\. While it can be viewed as a Wasserstein learning algorithm, it performs much better in practice than worst‑case Wasserstein analyses would predict\. We recast PE as a generative model‑augmented Wasserstein learning\. We show theoretically that when we take into account the use of a generative model that is able to capture something about the true distribution, then PE provably obtains much better performance bounds\. For example, if the generator gives samples in the same low\-dimensional space as the distribution, then the sample complexity depends on the intrinsic, not the ambient, dimension\. We also show that standard variants of PE can fail to converge on simple well\-clustered instances, and propose a new geometry\-aware version of PE with provable convergence on such instances\. Experimentally, we show that our new algorithm has consistent empirical gains over standard baselines\.

## Evaluating an Evaluation: Membership Inference Attacks as Machine Unlearning Diagnostics

**Authors:** Umid Suleymanov; Laman Aliyeva; Nihat Abdullayev; Saida Zarbiyeva; Murat Kantarcioglu

**ID:** 139219 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=eA1BsaVVh5>) | [PDF](<https://openreview.net/pdf?id=eA1BsaVVh5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/139219>)

Evaluation practices in machine learning are increasingly objects of scientific study in their own right: their assumptions, statistical properties, and failure modes determine which research conclusions can be trusted\. We audit one such practice \- the use of aggregate\-subset Membership Inference Attacks \(MIAs\) for evaluating machine unlearning \- across 8 dataset\-architecture pairs, 4 unlearning methods, and over 500 experimental runs, identifying five failure modes: \(1\) limited and regime\-dependent identifiability between baseline and retrained models, with KS\-test indistinguishability \($p &gt; 0\.05$\) in $\\approx$42\\% of experiment\-\-task pairs; \(2\) regime\-dependent signal\-to\-noise collapse; \(3\) monotonicity violations in 5 of 8 experiments under graded forgetting; \(4\) inter\-task rank inconsistency, and \(5\) regime confounding by model training quality\. To quantify these failures, we develop the Membership Inference Attack Unlearning Score \(MIAU\), a normalized diagnostic framework integrating three MIA comparisons as gap closure fractions between baseline and retrained references\. We formalize four validity properties any unlearning metric should satisfy\. Our findings indicate that aggregate\-subset MIAs are reliable unlearning diagnostics only in narrow high\-memorization regimes, and motivate complementary evaluation paradigms, alongside MIA\-based protocols\.

## Inference for Many Quantiles under Local Differential Privacy

**Authors:** Qirui Hu; Yi Liu

**ID:** 148280 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=z2oKVYmfLa>) | [PDF](<https://openreview.net/pdf?id=z2oKVYmfLa>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148280>)

In this paper, we study the problem of simultaneous inference for multiple quantiles under local differential privacy \(LDP\)\. We develop a general online framework that reduces the multiple\-quantile problem to a categorical one\-hot estimation problem\. A projected Robbins\-Monro recursion guarantees noncrossing at every iteration, while Polyak\-Ruppert averaging together with multivariate self\-normalization yields a joint asymptotically pivotal ellipsoidal confidence region without requiring estimation of nuisance densities or asymptotic covariance matrices\. We also present several important examples in detail, including direct $k\+1$\-ary randomized response \(kRR\), optimized unary encoding \(OUE\), optimized local hashing \(OLH\), and Hadamard response \(HR\)\. We evaluate our methodology through numerical experiments based on these examples, and the results provide positive support for the proposed framework\.

## Online Learning with Certified Unlearning over Graphs

**Authors:** Ruijie Du; Yanning Shen

**ID:** 151773 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y9ZVSXcXaD>) | [PDF](<https://openreview.net/pdf?id=Y9ZVSXcXaD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151773>)

Machine learning models on graph\-structured data are increasingly deployed in dynamic environments, where data arrive continuously and models must be updated online, while specific data points and their influence are requested to be removed to meet privacy or regulatory requirements\. Most existing work on machine unlearning focuses on offline or post\-training settings and does not readily extend to online graph learning: updates with arriving data and deletion requests are interleaved, and removing nodes or edges can propagate changes through the graph structure\. We study online learning with certified unlearning over graph\-structured data, where a model is updated sequentially while accommodating deletion requests at any time\. The subsequent outputs need to be indistinguishable from those of a model trained without the removed data\. We propose OLUG, a principled framework that performs localized second\-order retroactive correction during online graph learning using only recent batch information\. We show that OLUG preserves no\-regret online learning while supporting certified removal, incurring only an additive regret cost under infrequent deletions\. Our analysis further reveals how graph propagation amplifies deletion sensitivity differently across node, edge, and feature removal scenarios\. Experiments on multiple benchmark graph datasets demonstrate utility comparable to training from scratch, with substantially reduced computational overhead by avoiding retraining\.

## Private Adaptive Covariance Estimation via Gaussian Graphical Models

**Authors:** Cecilia Ferrando; Miguel Fuentes; Brett Mullins; Cameron Musco; Daniel Sheldon

**ID:** 149189 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=sDGKYXS32k>) | [PDF](<https://openreview.net/pdf?id=sDGKYXS32k>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149189>)

We propose PACE\-GGM, a data\-adaptive differentially private method for covariance estimation that concentrates its privacy budget on the most informative entries of the empirical covariance matrix, rather than perturbing all entries\. This applies in the natural setting where the modeler supplies separate bounds for each variable, so that individual entries can be measured with less noise than the full matrix\. In each round, our method selects a poorly approximated entry, measures it using the Gaussian mechanism, and then reconstructs a full covariance matrix using a maximum\-entropy reconstruction objective, leading to a Gaussian graphical model structure\. Experiments on diverse real\-world datasets demonstrate consistent improvements in estimation error with respect to the Gaussian mechanism and other baselines, particularly in high\-dimensional and low\-to\-moderate privacy regimes\.

## Row\-Private Symmetric Cone Programming: Scale\-Efficient Algorithm and Lower Bound

**Authors:** Deming Chu; Ruizhe Zhang

**ID:** 152815 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=QC9kYaQ3KF>) | [PDF](<https://openreview.net/pdf?id=QC9kYaQ3KF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152815>)

We study the row\-private approximate feasibility problem for symmetric cone programs \(SCPs\),  a framework that encompasses linear, second\-order cone, and semidefinite programming\.  We focus on high\-sensitivity row privacy, where each record is a constraint and  changing one record can cause the feasible region to change discontinuously\.  Since satisfying every private row is generally impossible in this regime,  the goal is to remain exactly in the public cone while violating only a small number  of private rows under a prescribed additive error $\\eta&gt;0$\.  We give an efficient $\(\\varepsilon, \\delta\)$\-differentially private SCP solver  with violation count  $\\widetilde\{O\}\\left\(k^2/\\varepsilon\\right\)$, and only logarithmic dependence  on the scale\-to\-error ratio $UR/\\eta$, where $k$ is the ambient dimension,  $R$ is the norm of some feasible point, and $U$ is the size of the problem\.  This exponentially improves the polynomial dependence on $U$, $R$,  and $1/\\eta$ in prior work \(Song, Xue, and Zhang, NeurIPS 2025\)\.  Furthermore, we show that additive error does not remove the intrinsic dimension\-dependence  barrier\.  Previous row\-private LP lower bounds \(Kaplan, Mansour, Moran, Stemmer, and Tur, STOC 2025\) established an $\\Omega\(k/\\varepsilon\)$ violation count only for exact partial satisfaction; using the padding\-and\-permuting fingerprinting codes \(Peter, Tsfadia, and Ullman, COLT 2024\), we prove the same barrier for relaxed satisfaction\.

## DPrivBench: Benchmarking LLMs' Reasoning for Differential Privacy

**Authors:** Erchi Wang; Pengrun Huang; Eli Chien; Om Thakkar; Kamalika Chaudhuri; Yu\-Xiang Wang; Ruihan Wu

**ID:** 138927 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=w8Uuy8t5PA>) | [PDF](<https://openreview.net/pdf?id=w8Uuy8t5PA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/138927>)

Differential privacy \(DP\) has a wide range of applications for protecting data privacy, but designing and verifying DP algorithms requires expert\-level reasoning, creating a high barrier for non\-expert practitioners\. Prior works either rely on specialized verification languages that demand substantial domain expertise or remain semi\-automated and require human\-in\-the\-loop guidance\. In this work, we investigate whether large language models \(LLMs\) can automate DP reasoning\. We introduce DPrivBench, a benchmark in which each instance asks whether a function or algorithm satisfies a stated DP guarantee under specified assumptions\.  The benchmark is carefully designed to cover a broad range of DP topics, span diverse difficulty levels, and resist shortcut reasoning through trivial pattern matching\. Experiments show that while the strongest models handle textbook mechanisms well, all models struggle with advanced algorithms, revealing substantial gaps in current DP reasoning capabilities\.  Through further analytic study and failure\-mode analysis, we identify several promising directions for improving automated DP reasoning\.  Our benchmark provides a solid foundation for developing and evaluating such methods, and complements existing benchmarks for mathematical reasoning\.

## Optimal Algorithms for Fixed\-Graph Multi\-Attribution Privacy

**Authors:** Raman Arora; Kaibo Zhang

**ID:** 150041 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lDbcs5uokk>) | [PDF](<https://openreview.net/pdf?id=lDbcs5uokk>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150041>)

Traditional differential privacy assumes each training example affects only one user's privacy, but many real\-world datasets contain examples attributed to multiple users\. We study \\emph\{fixed\-graph differential privacy\}, a framework for learning from such multi\-attribution data where the attribution structure is public but example contents are private\. We establish fundamental limits and optimal algorithms for this setting\. First, we develop approximation algorithms for the NP\-hard contribution bounding problem: a sampling\-based LP\-rounding algorithm achieving $O\(\|V\|^\{1/\(k\+1\)\}\)$\-approximation and a greedy algorithm achieving $O\(r\)$\-approximation, where $r$ is the maximum number of users per example\. We prove matching hardness results showing the greedy bound is tight up to $O\(\\log r\)$ factors\. Second, we introduce a \\emph\{network density parameter\} $c$ that measures how concentrated the attribution network is, and establish information\-theoretic error lower bounds scaling as $\\tilde\\Omega\(c^2d/\\varepsilon^2\)$ for learning $d$\-dimensional models from $n$ examples\. We provide matching upper bounds using contribution bounding combined with DP\-SGD, demonstrating our algorithms are optimal\. We further characterize when contribution bounding introduces selection bias and provide conditions under which bias vanishes\. Finally, we extend our analysis to the i\.i\.d\. setting where examples are sampled from a distribution, obtaining improved bounds scaling as $\\tilde\{O\}\(\\sqrt\{c/n\}\)$ for hypothesis testing and providing matching algorithm for clustered networks\.

## Leveraging Soft Prompts for Privacy Attacks in Federated Prompt Tuning

**Authors:** Quan M Nguyen; Min\-Seon Kim; Hoang M Ngo; Nghia Hoang; HYUK\-YOON KWON; My T\. Thai

**ID:** 154096 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GHEVNpALF0>) | [PDF](<https://openreview.net/pdf?id=GHEVNpALF0>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154096>)

Membership inference attacks \(MIAs\) pose a serious privacy threat in federated learning \(FL\)\. While MIAs have been extensively studied in standard FL, the recent shift toward federated fine\-tuning introduces new and largely unexplored attack surfaces\. In this work, we show that federated prompt\-tuning, which adapts pre\-trained foundation models using lightweight input prefixes, exposes a novel and effective vector for membership inference\. We propose PromptMIA, a membership inference attack tailored to federated prompt\-tuning, in which a malicious server introduces adversarially crafted prompts and exploits their updates during collaborative training to determine whether a target data point belongs to a client’s private dataset\. We formalize this threat via a security game and demonstrate that PromptMIA achieves consistently high attack advantage across diverse benchmark datasets, substantially outperforming current SOTA federated MIAs\. We also provide a theoretical lower bound on the attack advantage that explains the observed empirical behavior\. Finally, we show that existing MIA defenses are often ineffective against PromptMIA, highlighting the need for defense mechanisms specifically tailored to prompt\-tuning in federated settings\.

## Towards Differentially Private Reinforcement Learning with General Function Approximation

**Authors:** Yi He; Xingyu Zhou

**ID:** 154888 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=A9sMGmOADb>) | [PDF](<https://openreview.net/pdf?id=A9sMGmOADb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154888>)

We present the first theoretical guarantees for differentially private online reinforcement learning \(RL\) with general function approximation, extending beyond prior work restricted to tabular and linear settings\. Our approach combines a batched policy update scheme with the exponential mechanism, together with a novel regret analysis\. We show that, even under general function approximation, the regret in the model\-free setting under differential privacy matches the state of the art for the linear case, scaling as $\\widetilde\{O\}\(K^\{3/5\}\)$, where $K$ denotes the number of episodes\. As an important by\-product, we also establish the first regret bound for online RL with batch update that depends on the standard complexity measure of  \*\*coverability\*\*, complementing existing results based on a newly introduced Eluder\-Condition class\. In addition, we uncover fundamental gaps in recent results for private RL with linear function approximation, thereby clarifying its landscape\.

## Correlating Cross\-Iteration Noise for DP\-SGD using Model Curvature

**Authors:** Xin Gu; Yingtai Xiao; Guanlin He; Jiamu Bai; Daniel Kifer; Kiwan Maeng

**ID:** 151628 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Z96zEg7guN>) | [PDF](<https://openreview.net/pdf?id=Z96zEg7guN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151628>)

Differentially private stochastic gradient descent \(DP\-SGD\) is used to train deep learning models while mitigating many privacy risks\. One popular line of work, designed to chip away at the accuracy gap between DP\-SGD and normal SGD training, is known as DP\-MF\. To each update, it adds privacy noise that is correlated across training iterations, so that later noise partially cancels out earlier noise\. The noise correlation structure is determined by solving an optimization problem, but a key question is not well\-understood: what important properties does the noise correlation need in order to improve accuracy? In this paper, we identify two ways that noise affects the training trajectory \-\-\- noise alters the \*value\* of the gradient, and also alters the \*location\* at which subsequent gradients are computed\. Prior works addressed the first but overlooked the second effect, realizing only limited benefits\. Our analysis results in a new objective function for determining cross\-iteration noise correlation\. Our technique, NoiseCurve,  consistently improves accuracy over DP\-BandMF, the state\-of\-the\-art DP\-MF scheme, on various computer vision and NLP tasks\. NoiseCurve uses an upper bound $\\hat\{H\}$ on the Hessians of the loss that could be encountered during training\. We show how to estimate $\\hat\{H\}$ using public data and evaluate robustness to errors in $\\hat\{H\}$\. To avoid direct computation of $\\hat\{H\}$, or even its eigenspectrum, we show how to adapt the Lanczos method\.

## Sort, Partition, Randomize: Optimal Binary Hypothesis Testing under Local Differential Privacy

**Authors:** Elena Ghazi; Jawad Nasser; Flavio Calmon; Ibrahim Issa

**ID:** 152035 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W2N0BOvMCF>) | [PDF](<https://openreview.net/pdf?id=W2N0BOvMCF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152035>)

We study optimal design of $\\varepsilon$\-locally differentially private mechanisms for binary hypothesis testing\. Each observation is drawn from one of two known distributions $P\_0,P\_1$ on a finite alphabet of size $k$, privatized by a mechanism $Q$, and then used to infer which distribution generated the data\. We measure testing utility using an $f$\-divergence—including total variation, KL, and hockey\-stick divergences—between the two induced output distributions\. Previous work established structural properties of optimal mechanisms, but only yielded exponential\-time algorithms\. We prove a sharp structure: for every $\\varepsilon$ and every $f$\-divergence objective, after sorting the alphabet by likelihood ratio, there exists an optimal mechanism that partitions the sorted alphabet into contiguous blocks and applies randomized response to the block label\. We call this class Sort–Partition–Randomize \(SPR\)\. This characterization yields an exact dynamic program that computes an optimal mechanism in $O\(k^3\)$ time, and more generally in $O\(\\ell k^2\)$ time with an $\\ell$\-output budget\. Our results make it possible to efficiently compute and characterize the exact optimum across the full privacy range, beyond asymptotic privacy regimes\.

## On Inherent Privacy of Posterior Sampling: A Unified R\\'enyi\-Divergence Framework

**Authors:** Ruyu Zhou; Fang Liu

**ID:** 151785 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Y14ZdLhgIu>) | [PDF](<https://openreview.net/pdf?id=Y14ZdLhgIu>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151785>)

Differential Privacy \(DP\) provides a rigorous framework for quantifying privacy guarantees\. While most methods achieve DP by injecting calibrated random noise, the intrinsic randomness of certain procedures such as sampling can yield DP guarantees \`\`for free''\. In this work, we develop a unified R\\'enyi divergence framework to characterize the inherent DP guarantees of sampling from a Bayesian posterior distribution\. We show that the privacy loss incurred by One\-Posterior\-Sampling \(OPS\) is governed by posterior exponential moments of the single\-record log\-likelihood ratio, and establish explicit DP guarantees under uniformly bounded, sub\-Gaussian, or sub\-exponential tail regimes\. We apply the framework to representative Bayesian models, including categorical likelihoods with arbitrary priors, Gaussian\-Gaussian conjugate pair, generalized linear models from the exponential family and linear regression with Gaussian likelihood, both with Gaussian priors on the regression coefficients\. Our results elucidate sample size, model structure, neighboring relations in DP \(bounded or unbounded\), and how prior if applicable, jointly determine the inherent DP guarantees of OPS\. Furthermore, our results recover the existing DP guarantees for OPS as special cases \-\- often with tighter privacy loss bounds \-\- and substantially broaden the class of Bayesian models for which the inherent DP guarantees of OPS can be rigorously characterized\.

## Adaptive Power Iteration Method for Differentially Private PCA

**Authors:** Ta Duy Nguyen; Alina Ene; Huy Nguyen

**ID:** 151670 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=YuZcmpevYA>) | [PDF](<https://openreview.net/pdf?id=YuZcmpevYA>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151670>)

We study $\\left\(\\epsilon,\\delta\\right\)$\-differentially private algorithms for the problem of approximately computing the top singular vector of a matrix $A\\in\\mathbb\{R\}^\{n\\times d\}$ where each row of $A$ is a datapoint in $\\mathbb\{R\}^\{d\}$\. Following Dwork\-Talwar\-Thakurta\-Zhang \(STOC 2014\), we consider the privacy model where neighboring inputs differ by one single row\. We give a novel algorithm that achieves beyond\-worst\-case guarantees for input matrices with low coherence, which is a structural property of matrices in many applications, including but not limited to i\.i\.d\. data\. Our algorithm contributes to the extensive literature on private power iteration methods, where we introduce a new filtering technique which adapts to this coherence parameter\. Our work departs from and complements the work by Hardt\-Roth \(STOC 2013\) which achieves beyond\-worst\-case guarantees for the more restrictive privacy model where neighboring inputs differ in one single entry by at most 1\.

## One\-Shot Private Confidence Regions via Resampling

**Authors:** Po\-Ling Loh; Debepsita Mukherjee; Shourya Pandey; Purnamrita Sarkar

**ID:** 151541 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZueKmUuWjT>) | [PDF](<https://openreview.net/pdf?id=ZueKmUuWjT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151541>)

We propose a simple framework for constructing differentially private confidence regions \_in one shot\_, i\.e\., by adding noise only to the final resampling quantile instead of privatizing the estimator computed on each resample\. The cost of privacy of our procedure is $O\(\\log B\)$ under with\-replacement \($m$\-out\-of\-$n$\) sampling and independent of $B$ under without replacement sampling \(subsampling\), avoiding the $\\sqrt\{B\}$ factor that arises in previous works\. We provide \_nonasymptotic\_ Gaussian Differential Privacy \(GDP\) and utility guarantees for both subsampling and $m$\-out\-of\-$n$ resampling, covering mean\-like estimators with small global sensitivity as well as estimators admitting efficiently computable \_smooth sensitivity\_ bounds, including quantiles and degenerate U\-statistics\. This allows us to also obtain private confidence regions for degenerate U\-statistics where the private error is much smaller than the non\-private error\. In all, we provide a toolbox for widely applicable DP uncertainty quantification procedures under popular resampling strategies while avoiding the computational and privacy costs of privatizing many intermediate resample statistics\.

