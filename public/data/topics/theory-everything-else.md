# Theory / Everything Else

理论 / 其他理论

54 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## Representation Rigidity in Face Embeddings: Orthogonal Identifiability and Backfill\-Free Compatibility

**Authors:** Yongle Zhao; Zhichao Chen; Yin Xie; Jun Wang; Ziyong Feng

**ID:** 151431 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=alci29b9Vd>) | [PDF](<https://openreview.net/pdf?id=alci29b9Vd>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151431>)

Upgrading a deployed face\-recognition model usually makes new query embeddings incompatible with the legacy gallery, forcing costly backfilling of stored embeddings\. We show that this incompatibility is often much simpler than it appears: independently trained angular\-margin face models exhibit representation rigidity, where their embedding spaces are well approximated by a single global orthogonal transformation\. We formalize this phenomenon as Procrustes rigidity, derive a finite\-calibration recoverability bound, and estimate the orthogonal adapter from a small paired calibration set via closed\-form Procrustes alignment\. The resulting deployment protocol is backfill\-free: transport upgraded queries into the legacy coordinate system, then reuse the existing gallery without re\-embedding stored identities\. Across 45 models spanning three architectures, two losses, three data scales, and five seeds, we find strong rigidity within architecture families, non\-monotonic scaling with data size, and robust cross\-model retrieval\. On the 1\.6M\-image IFRT benchmark, Procrustes\-aligned queries recover at least $99\.8\\%$ of mono\-model Rank\-1 accuracy for same\-family upgrades, while lightweight residual correction substantially narrows the cross\-architecture gap\.

## Smooth Partial Lotteries for Stable Randomized Selection

**Authors:** Alexander Goldberg; Giulia Fanti; Nihar Shah

**ID:** 148194 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=zciTC98AYH>) | [PDF](<https://openreview.net/pdf?id=zciTC98AYH>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148194>)

Competitive selection processes, from scientific funding to admissions and hiring, use evaluations to score candidates, and then choose a subset based on those scores\. Recently, many organizations have adopted partial lotteries, which randomize selection based on evaluation scores\. However, existing lottery designs are inherently unstable, as a small change to a single candidate's score can cause large shifts in their selection probabilities\. This instability undermines a key goal of lotteries: reducing the influence of fine\-grained score distinctions near the decision boundary\. We propose smoothness as a design principle for partial lotteries, formalizing it as a Lipschitz condition on the mapping from review scores over candidates to selection probabilities\. We propose using a Linear Lottery, a simple mechanism in which selection probabilities scale linearly with aggregated review scores between an upper threshold, above which we always accept and a lower threshold, below which we always reject\. We prove that the Linear Lottery's worst\-case regret matches a lower bound for any smooth selection rule up to a factor of $\(1 \- k/n\)$, where $k/n$ is the acceptance rate\. We compare smooth selection to other stability notions like Individual Fairness and Differential Privacy, showing that the Linear Lottery achieves a better smoothness\-\-regret tradeoff than alternatives\. Experiments on real peer review data from ICLR 2025, NeurIPS 2024, and the Swiss NSF confirm our theoretical analysis is tight and demonstrate that existing lottery designs are highly unstable in practice even under changes to a single review score\.

## Inner Product Aware Quantization: Provably Fast, Accurate, and Adaptive Algorithms

**Authors:** Nathan White; Krish Singal

**ID:** 155393 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=60WCaegfit>) | [PDF](<https://openreview.net/pdf?id=60WCaegfit>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155393>)

Quantization is a fundamental tool used to compress datasets, neural network weights, and memory usage in a range of computational tasks\. Many downstream applications of vector quantization perform inner products with arbitrary inputs\. This motivates the study of inner product aware quantization schemes that approximately preserve inner products with unseen vectors \-\- in contrast to simply minimizing the mean\-squared error\.       In this work, we formulate objectives that capture natural desiderata and develop adaptive and unbiased quantization methods that approximately preserve inner products with worst\-case and average case inputs\. An analysis of these objectives shows a tight connection with the well\-studied notion of Adaptive Stochastic Quantization \(ASQ\)\.      We develop provably fast exact and approximate algorithms for our objectives\. Our theoretical results inspire efficient practical algorithms that perform well across a variety of workload distributions\. They also lead to practical algorithms for standard ASQ which are 2\-10$\\times$ faster than prior state\-of\-the\-art methods while maintaining quality\. These theoretical and empirical results contribute towards making adaptive quantization techniques more efficient and tractable in practical settings\.

## On the Tightness and Computational Tractability of Higher\-Dimensional Confidence Sequences

**Authors:** Fabian Denoodt; Sibylle Hess; Joaquin Vanschoren; Christian Andersson Naesseth

**ID:** 154185 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FZkTNX1Pl4>) | [PDF](<https://openreview.net/pdf?id=FZkTNX1Pl4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154185>)

Modern sequential monitoring problems often involve multiple metrics, where we monitor several data streams simultaneously and may act once the evidence is strong enough\. Confidence sequences \(CSs\) are a natural tool for such continuous monitoring\. However, for bounded vector means, existing multivariate CSs are either tight but computationally intractable, or fast to compute but conservative\. To address this, we study three lifts of one\-dimensional betting\-based CSs to higher dimensions: a weighted Bonferroni region, an equivalent max\-wealth form, and a portfolio region\. The portfolio is typically much tighter, especially in higher dimensions, but its boundary and properties such as volume are not available in closed form\. To make this tighter construction usable, we propose tractable outer approximations of the portfolio region that preserve statistical validity: a bounding box, an $\\ell\_p$\-ellipsoid, and their intersection\. We prove set relations among all constructions and show empirically that these approximations \(i\) achieve regions close to the intractable portfolio, \(ii\) substantially outperform existing tractable multivariate CSs, and \(iii\) enable practical use cases such as multi\-metric A/B testing and model comparison\.

## Per\-Starting\-Point Plausibility and Diversity Bounds for Score\-Based Diffusion Models

**Authors:** Minh Quang Nguyen; Hady Lauw

**ID:** 154674 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Bspdourakl>) | [PDF](<https://openreview.net/pdf?id=Bspdourakl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154674>)

Score\-based diffusion is well\-studied at the mixture level—averaged over the prior—but many practical pipelines \(posterior sampling, SDEdit, OOD detection\) fix the starting point and care about the per\-start output\. To our knowledge, this per\-starting\-point regime has no prior non\-asymptotic analysis\. We give two coupled bounds: a plausibility upper bound on how close the per\-start output is to the data distribution, and a matching diversity lower bound on how distinguishable outputs from two different starts remain\. The same score\-contraction rate governs both—where plausibility is tight, diversity is vacuous, and vice versa—predicting a sharp horizon beyond which starting\-point identity is erased\. We illustrate the phenomenon qualitatively on 2D toy datasets, MNIST, and CIFAR\-10\.

## A Theoretical Analysis of Why Masked Diffusion Models Mitigate the Reversal Curse

**Authors:** Moongyu Jeon; Sangwoo Shin; Bumjun Kim; Kyelim Lee; Albert No

**ID:** 149727 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=noEiGT8prX>) | [PDF](<https://openreview.net/pdf?id=noEiGT8prX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149727>)

Autoregressive language models \(ARMs\) suffer from the reversal curse: after learning "$A$ is $B$," they often fail on the reverse query "$B$ is $A$\." Masked diffusion language models \(MDMs\) exhibit this failure in a much weaker form, but the underlying reason has remained unclear\. A common explanation attributes this mitigation to their any\-order masked training objective\. However, observing "$\[\\textnormal\{\\textbf\{M\}\}\]$ is $B$" during training teaches recovery of $A$ from $B$ in one positional configuration, and does not by itself explain why the learned evidence should transfer to the reverse prompt "$B$ is $\[\\textnormal\{\\textbf\{M\}\}\]$\." We provide a theoretical analysis showing that this transfer arises from a parameter\-level coupling between forward and reverse positional conditionals: shared Transformer parameters store token\-pair evidence, while relative positional encodings route attention through queries and keys without changing the value\-side evidence being retrieved\. In a one\-layer MDM, we prove that forward masked training strengthens evidence that is reusable in reverse queries, induces correlated forward\-\-reverse attention routes, and yields a positively aligned shared\-storage gradient component that decreases the reverse loss to first order\. Controlled one\-layer experiments and large\-scale LLaDA/Dream experiments verify these signatures and show that they translate into improved reverse prediction\.

## Relevance Is Not Necessity: Selecting the Necessary API Set for Tool\-Using LLMs

**Authors:** Chen Wang

**ID:** 149528 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pTmL4oUWre>) | [PDF](<https://openreview.net/pdf?id=pTmL4oUWre>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149528>)

A multi\-tool plan is correct only when its call set matches the gold API set exactly\. Standard tool\-use pipelines optimize first\-hop relevance, but downstream verifiers require the necessary API set, creating a relevance\-\-necessity gap\. This study formalizes the gap: under correlated API indicators, symmetric decomposable selectors based only on per\-API marginals can be dominated by a Bayes\-optimal set selector, while whole\-set exact\-match supervision is a proper scoring rule for the optimal selector restricted to a candidate menu\. We propose an offline refinement framework for frozen upstream traces\. Under a leakage\-free ToolBench G2/G3 protocol, TC\-MASS improves verifier\-consistent API\-set recovery without additional LLM generation after the upstream trace exists\. Ablations and cross\-distribution probes support the central claim: necessity\-aware set\-level supervision, not relevance ranking alone, is the right objective for fixed\-pool API\-set recovery\.

## A Retained\-Signal Interface for LLM Watermark Robustness under Paraphrase

**Authors:** Chen Wang; Yinxuan Huang; Yexin Cui cui; Maoqing Zhong; LaiLong Luo

**ID:** 155532 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sTuTf9CyC>) | [PDF](<https://openreview.net/pdf?id=4sTuTf9CyC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155532>)

Watermark robustness under paraphrase is usually reported as AUC against a named rewriter, making results hard to compare across watermark schemes, paraphrasers, and detectors\. We propose a retained\-signal reporting interface: if a watermark injects KL signal $\\Delta=\\KL\(P\_1\\Vert P\_0\)$ and a paraphrase channel retains KL fraction $\\rho$, then any detector's post\-paraphrase advantage is controlled by $\\Delta\\rho$\. We give explicit Pinsker and Bretagnolle\-\-Huber threshold laws, prove the $\\Theta\(\\sqrt\{\\Delta\\rho\}\)$ rate is sharp for any $\(\\Delta,\\rho\)$\-only converse, and show the bound is implementation\-blind once watermark families are matched by $\\Delta$\. For real LLM paraphrases, we instantiate the interface as a score\-projected audit that estimates $\\widehat\{\\Delta\}\\widehat\{\\rho\}$ for a deployed detector and reports it with semantic preservation and the detector projection\. In a KGW/Unigram $\\times$ Qwen/Llama benchmark, this score\-effective signal predicts post\-paraphrase AUC across lengths, strengths, and paraphraser families\. The resulting protocol separates injected signal, retained signal, semantic quality, and detector choice, replacing one\-off AUC tables with a reproducible robustness report\.

## Taming the Tails: Why Distributionally Robust Optimization Needs New Theory for Imbalanced Regression

**Authors:** Nathaniel Kang

**ID:** 152555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SFa3GaxCb3>) | [PDF](<https://openreview.net/pdf?id=SFa3GaxCb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152555>)

Predictive models on structured tabular data often face imbalanced targets: training emphasizes common values while rare outcomes stay underrepresented\. Distributionally robust optimization hedges against shift, but standard ambiguity sets use a single radius over the entire distribution, so adversarial mass concentrates on dense regions and rare target ranges remain weakly protected; worst\-case statements then track bulk behavior rather than tails\. We introduce target\-conditional distributionally robust optimization \(TC\-DRO\), which defines ambiguity per target region with radii that grow where data are scarce\. We establish coverage, per\-region excess risk that tightens with local sample size when standard DRO yields vacuous tail guarantees, and a dual as weighted empirical risk with theory\-derived density\-adaptive weights\. Experiments on seven tabular benchmarks show that Wasserstein DRO collapses to empirical risk minimization under uniform weights, while global $\\chi^2$\-DRO can remain close to ERM in practice; TC\-DRO improves tail MSE and SERA relative to both standard training and recent imbalanced\-regression methods\.

## HypMoE\-ReID: Hyperspherical Mixture\-of\-Experts for Large Scale Person Re\-Identification

**Authors:** Kunlun Xu; Haotong Cheng; Yufei Guo; Jiahuan Zhou

**ID:** 150487 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hjKg7mWKXq>) | [PDF](<https://openreview.net/pdf?id=hjKg7mWKXq>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150487>)

With the rapid growth of surveillance data, Person Re\-Identification \(ReID\) is evolving toward large scale scenarios, where datasets exhibit substantial increases in both size and diversity\. Under this trend, the widely adopted dense backbone architectures, such as Transformers, suffer from an inherent limitation: Shared parameters couple all input tokens, forcing the model to learn generic representations that are suboptimal for heterogeneous data sources\. Although Mixture\-of\-Experts \(MoE\) architectures offer a promising solution for handling diverse data, they encounter a fundamental challenge in ReID\. Specifically, person images exhibit high inter\-instance similarity at the coarse level, while discriminative cues lie in subtle fine\-grained details that are easily overlooked\. As a result, existing MoE methods often suffer from severe routing collapse, leading to insufficient expert specialization and limited diverse knowledge acquisition capacity\. To address these problems, we propose a novel framework, termed Hyperspherical Mixture\-of\-Experts for Large Scale Person Re\-Identification \(HypMoE\-ReID\)\.  Specifically, motivated by theoretical analysis in hyperspherical space, HypMoE\-ReID incorporates two key components: \(1\) a Token Purification mechanism that suppresses noisy tokens detrimental to expert specialization, and \(2\) a Routing Diversity Learning strategy that explicitly separates experts on a unit hypersphere to enforce specialization and prevent collapse\. Furthermore, to facilitate the investigation in large scale ReID, we construct a large\-scale ReID benchmark comprising 809,701 images by unifying 13 public datasets with significant distribution gaps\. Furthermore, extensive experiments demonstrate that HypMoE\-ReID outperforms state\-of\-the\-art MoE\-based methods by at least 11\.3\\%/10\.3\\% in Average mAP/R@1, and surpasses strong dense backbone models by 2\.2\\%/2\.0\\% in Average mAP/R@1\. Our code will be released\.

## Avoiding Obfuscation with Prover\-Estimator Debate

**Authors:** Jonah Brown\-Cohen; Geoffrey Irving; Georgios Piliouras; Lijie Chen; Jiawei Li; Zhiyang Xun

**ID:** 148404 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=y6MafkaOLE>) | [PDF](<https://openreview.net/pdf?id=y6MafkaOLE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148404>)

Training powerful AI systems to exhibit desired behaviors hinges on the ability to provide accurate human supervision on increasingly complex tasks\. A promising approach to this problem is to amplify human judgement by leveraging the power of two competing AIs in a debate about the correct solution to a given problem\. Prior theoretical work has provided a complexity\-theoretic formalization of AI debate, and posed the problem of designing protocols for AI debate that guarantee the correctness of human judgements for as complex a class of problems as possible\. Recursive debates, in which debaters decompose a complex problem into simpler subproblems, hold promise for growing the class of problems that can be accurately judged in a debate\. However, existing protocols for recursive debate run into the \*obfuscated arguments problem\*: a dishonest debater can use a computationally efficient strategy that forces an honest opponent to solve a computationally intractable problem to win\. We mitigate this problem with a new recursive debate protocol that, under certain stability assumptions, ensures that an honest debater can win with a strategy requiring computational efficiency comparable to their opponent\.

## How Long Does Infinite Width Last? Signal Propagation in Long\-Range Linear Recurrences

**Authors:** Mariia Seleznova

**ID:** 155327 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=6SiRDlbWwF>) | [PDF](<https://openreview.net/pdf?id=6SiRDlbWwF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155327>)

We study signal propagation in linear recurrent models at finite width\. While existing signal propagation theory relies predominantly on the infinite\-width limit, it remains unclear for how long that approximation remains accurate when recurrent depth $t$ grows jointly with width $n$\. This question is especially relevant for modern recurrent sequence models, whose natural operating regime involves long input sequences, i\.e\., large $t$\. We derive exact finite\-width formulas for the hidden state signal energies in linear recurrences under complex Gaussian initialization\. Using these formulas, we identify the joint depth\-width scaling regimes that govern signal propagation: \(i\) a \*subcritical regime\* $t=o\(\\sqrt n\)$, in which the infinite\-width approximation remains valid; \(ii\) a \*critical regime\* $t\\sim c\\sqrt n$, in which non\-negligible deviations from infinite\-width predictions appear and a nontrivial joint scaling limit emerges; and \(iii\) a \*supercritical regime\* $t\\gg \\sqrt n$, in which finite\-width effects dominate\. Thus, our results pinpoint the precise recurrent depth scale at which infinite\-width theory breaks down in long\-range linear recurrences\. In turn, this shows when standard initialization schemes, such as Glorot, become unstable\. More broadly, our results demonstrate that finite\-width effects accumulate more rapidly with depth in recurrent models than in feedforward ones, leading to qualitatively different signal propagation behavior\.

## Resilient Semi\-Supervised Inference with Heterogeneous Unlabeled Data

**Authors:** Mengyuan Wang; Chengde Qian; Haojie Ren; Changliang Zou

**ID:** 155194 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ZyMQkmbDz>) | [PDF](<https://openreview.net/pdf?id=7ZyMQkmbDz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155194>)

Model\-assisted semi\-supervised learning offers a powerful paradigm for enhancing the efficiency of statistical estimation and inference by leveraging black\-box predictions on unlabeled data\. However, the validity of these methods typically relies on the strict assumption that labeled and unlabeled populations share identical distributional characteristics\. Consequently, state\-of\-the\-art approaches, such as prediction\-powered inference, become fragile when this assumption is violated\. To address the fragility, we propose a robust framework for semi\-supervised learning that remains reliable under distributional heterogeneity\. By embedding a robust statistical calibrator into the prediction\-rectification mechanism, the approach effectively reduces the bias arising from shifted or corrupted unlabeled samples\. To maximize data utility, we introduce an adaptive cross\-validation procedure to select the optimal calibrator, ensuring a reliable trade\-off between statistical efficiency and robustness\. Theoretical analysis confirms the consistency of the proposed estimator under mild conditions, while empirical results demonstrate its significant superiority over conventional baselines in heterogeneous environments\.

## Nearly\-Optimal Algorithm for Adversarial Kernelized Bandits

**Authors:** Shogo Iwazaki

**ID:** 155486 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5EgNQMwp80>) | [PDF](<https://openreview.net/pdf?id=5EgNQMwp80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155486>)

This paper studies kernelized bandits \(also known as Gaussian process bandits\) in an adversarial environment, where the reward functions in a known reproducing kernel Hilbert space \(RKHS\) may be adversarially chosen at each round\. We show that the exponential\-weight algorithm achieves $\\tilde\{O\}\(\\sqrt\{T \\gamma\_T\}\)$ adversarial regret, where $T$ and $\\gamma\_T$ denote the number of total rounds and the maximum information gain, respectively\. For $\\nu$\-Mat\\'ern kernels, we also show algorithm\-independent lower bounds that guarantee the optimality of our algorithm up to polylogarithmic factors\. Furthermore, we present a computationally efficient variant of our algorithm using Nystr\\"om approximation while maintaining nearly optimal regret guarantees\.

## Estimating Implicit Regularization in Deep Learning

**Authors:** Joseph H Rudoler; Kevin Tan; Giles Hooker; Konrad Kording

**ID:** 155112 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8J2wYjpdE2>) | [PDF](<https://openreview.net/pdf?id=8J2wYjpdE2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155112>)

Deep learning systems are known to exhibit \*implicit regularization\* \(alt\. \*implicit bias\*\), favoring simple solutions instead of merely  minimizing the loss function\. In some cases, we can analytically derive the implicit regularization \-\- connecting it to an equivalent penalty that augments the learning objective\. However, modern deep learning systems are complex, carrying modifications to the training procedure and architecture \(e\.g\. early stopping, minibatching, dropout\) whose effects are not always directly interpretable\. Although estimating the resulting implicit regularization could aid theorists in algorithm design and practitioners in interpreting their hyperparameter choices, this problem has received little direct attention\. It is also tractable: regularization makes weight updates deviate from loss gradients, promising a signal for identifying implicit bias\. Here we provide gradient matching methods that can be used to empirically estimate the implicit regularization\. Our method works on networks with known regularization, recovering popular explicit penalties like $\\ell\_1$ and $\\ell\_2$\. It also replicates known implicit effects, like the quadratic weight penalty induced by early stopping in gradient descent, demonstrating that it can be used to test theories of implicit regularization\. Crucially, because our method is empirical, it can handle implicit regularization in arbitrary networks\. We demonstrate this use by characterizing the effects of dropout in deep networks, showing implicit $\\ell\_2$ effects in this popular method\. Our work shows that practitioners can use gradient matching to understand regularization in networks with implicit biases that are too complicated to derive analytically\.

## Spectral Identifiability for World Models: Polynomial Projectors, Resolvent Stability, and a Krylov Bottleneck

**Authors:** Phan Quoc Hung Mai; Duc H Nguyen; MINH LUONG DOAN; Ngoc Mai Vu; Khanh N Quoc; Nhung Duong; Naeem Ul Islam; Tuan Do

**ID:** 149561 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pByZKc2Y2m>) | [PDF](<https://openreview.net/pdf?id=pByZKc2Y2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149561>)

World models are central to model\-based reinforcement learning and planning, but their latent dimensions, architectural spectra, and downstream behavior remain poorly understood\. In this work, we develop a spectral theory of linear world models in three settings\. First, for shared multi\-horizon prediction in linear dynamical systems, we identify the finite\-horizon block\-Krylov operator $\\mathcal K\_H$ as the exact latent bottleneck and give a perturbation condition for recovering its empirical rank elbow\. Second, for stable diagonal state\-space models, we prove a Rademacher complexity bound governed by the spectral memory energy $\\sum\_j L\_j\(T\)^2$, rather than the parameter count alone\. Third, for jointly trained diagonal latent dynamics, we show that disjoint factor spectra imply factor\-aligned latent coordinates, with a Riesz\-projector stability extension for approximate recovery and a local gradient\-flow companion\. The supporting results connect these spectral quantities to compositional OOD prediction, rollout envelopes, and prediction\-to\-control mismatch\. Further, generated\-system experiments verify the predicted spectral behavior and illustrate why pixel prediction and control returns can rank world models differently\.

## Propagation of Chaos in Contextual Flow Maps

**Authors:** Chen; Zhengjiang Lin; Kaizhao Liu; Philippe Rigollet

**ID:** 151039 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQwi4yaHoE>) | [PDF](<https://openreview.net/pdf?id=dQwi4yaHoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151039>)

We develop a quantitative statistical theory of transformers in the large\-context regime by adopting the abstraction of contextual flow maps: dynamical systems that evolve a distinguished token in the presence of a contextual measure across a stack of attention blocks\. Within this framework, the finite\-context model approximates an idealized infinite\-context system in which the contextual measure is replaced by its underlying population, so that the context length $n$ becomes a statistical resource\. Exploiting the McKean\-\-Vlasov structure of the dynamics and the classical machinery of propagation of chaos, we establish a forward bound controlling the deviation between the finite\- and infinite\-context flow maps uniformly along depth, and a backward bound controlling the deviation between the corresponding training trajectories uniformly across iterations of online gradient descent\. Both bounds achieve the optimal Wasserstein rate $n^\{\-1/d\}$\. The analysis rests on a new Eulerian adjoint formulation of the loss gradient and stability estimates for the resulting forward\-\-adjoint system, both of which may be of independent interest\. We further verify that the standard transformer architecture satisfies these estimates with Lipschitz constants independent of  embedding and parameter dimensions, suggesting a structural reason why transformers train stably across model scales\.

## MCGI: Manifold\-Consistent Graph Indexing for Billion\-Scale Disk\-Resident Vector Search

**Authors:** Dongfang Zhao

**ID:** 152036 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=W1gmNJGmgv>) | [PDF](<https://openreview.net/pdf?id=W1gmNJGmgv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152036>)

Graph\-based Approximate Nearest Neighbor \(ANN\) search often suffers from performance degradation in high\-dimensional spaces due to the Euclidean\-Geodesic mismatch, where greedy routing diverges from the underlying data manifold\. To address this challenge, this paper presents Manifold\-Consistent Graph Indexing \(MCGI\), a geometry\-aware and disk\-resident indexing method that leverages Local Intrinsic Dimensionality \(LID\) to dynamically adapt search strategies to the intrinsic geometry of data\. Unlike conventional algorithms that treat dimensions uniformly, MCGI modulates its beam search budget based on in\-situ geometric analysis, which reduces sensitivity to data\-specific hyperparameters by replacing a single scalar with a geometry\-informed range that remains stable across datasets of varying dimensionality\. Theoretical analysis demonstrates that MCGI provides robust approximation by preserving manifold\-consistent topological connectivity\. Extensive evaluations against five industry\-standard baselines across five datasets up to billion scales confirm the advantages of the proposed approach\.

## Manifold Random Features

**Authors:** Ananya Parashar; Derek Long; Dwaipayan Saha; Krzysztof M Choromanski

**ID:** 152522 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SV6wCTN02D>) | [PDF](<https://openreview.net/pdf?id=SV6wCTN02D>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152522>)

We present a new paradigm for creating random features to approximate bi\-variate functions \(in particular, kernels\) defined on general manifolds\. This new mechanism of $\\textit\{Manifold Random Features\}$ \(MRFs\) leverages discretization of the manifold and the recently introduced technique of $\\textit\{Graph Random Features\}$ \(GRFs\) to learn continuous fields on manifolds\. Those fields are used to find continuous approximation mechanisms that otherwise, in general scenarios, cannot be derived analytically\. MRFs provide positive and bounded features, a key property for accurate, low\-variance approximation\. We show deep asymptotic connection between GRFs, defined on discrete graph objects, and continuous random features used for regular kernels\. As a by\-product of our method, we re\-discover recently introduced mechanism of Gaussian kernel approximation applied in particular to improve linear\-attention Transformers, considering simple random walks on graphs and by\-passing original complex mathematical computations\. We complement our algorithm with a rigorous theoretical analysis and verify in thorough experimental studies\.

## The Interplay of Data Structure and Imbalance in the Learning Dynamics of Diffusion Models

**Authors:** Flavio Nicoletti; Chenxiao Ma; Enrico Ventura; Luca Saglietti; Stefano Sarao Mannelli

**ID:** 155660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3xmpzYAkAo>) | [PDF](<https://openreview.net/pdf?id=3xmpzYAkAo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155660>)

Real\-world datasets are inherently heterogeneous, yet how per\-class structural differences and sampling imbalance shape the training dynamics of diffusion models—and potentially exacerbate disparities—remains poorly understood\. While models typically transition from an initial phase of generalization to memorizing the training set, existing theory assumes homogeneous data, leaving open how class imbalance and heterogeneity reshape these dynamics\. In this work, we develop a high\-dimensional analytical framework to study class\-dependent learning in score\-based diffusion models\. Analyzing a random\-features model trained on Gaussian mixtures, we derive the feature\-covariance spectrum to characterize per\-class generalization and memorization times\. We reveal the explicit hierarchy governing these dynamics: class variance is the primary determinant of learning order—consistently favoring higher\-variance classes—while centroid geometry plays a secondary role\. Sampling imbalance acts as a modulator that can reverse this ordering and, under strong imbalance, forces minority classes to acquire distinct, delayed speciation times during backward diffusion\. Together, these results suggest that diffusion models can memorize some classes while others remain insufficiently learned\. We validate our theoretical predictions empirically using U\-Net models trained on Fashion MNIST\.

## Quasi\-Linear ICA for Motor Unit Decomposition during Dynamic Contractions

**Authors:** Alexander K Clarke; Dimitrios Chalatsis; Agnese Grison; Irene Mendez Guerra; Noura Ezaz\-Nikpay; Pranav Mamidanna; Shihan Ma; Silvia Muceli; Dario Farina

**ID:** 150445 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=hzu7eYXCns>) | [PDF](<https://openreview.net/pdf?id=hzu7eYXCns>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150445>)

Decomposing surface electromyography \(EMG\) into the spike trains of individual motor neurons is a long\-standing inverse problem and a key step toward motor\-neuron\-driven neural interfaces such as prosthetics and exoskeletons\. The standard approach, independent component analysis \(ICA\) of the multichannel signal, assumes that the mixing from neurons to electrodes is stationary in time\. This assumption fails during movement, when volume\-conductor deformation makes the mixing time\-varying, and current decomposition algorithms are correspondingly restricted to isometric contractions\. We introduce a quasi\-linear ICA formulation in which a static linear separator is preceded by a learned, low\-rank, time\-varying invertible transformation\. The separator is trained with an independence loss on the uncompensated projection, and the transformation with a stationarity loss on the recovered source\. Gradients are not shared between the two, so the source\-extraction step reduces to classical linear ICA and inherits its identifiability guarantee, while non\-stationary distortion is absorbed by the transformation\. The closed\-form inverse of the transformation enables per\-spike subtraction with a time\-varying template during sequential peel\-off\. On a public benchmark of dynamic high\-density EMG with ground\-truth spike trains, the method outperforms five adaptive ICA baselines at every recall threshold, recovering more units at a higher accuracy\.

## Beyond Contraction: Geometry\-Faithful Supervised Dimensionality Reduction for Data Visualization

**Authors:** xu zhu; Yilin Ye; Shixia Liu

**ID:** 155065 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=8j7lAZ6tpD>) | [PDF](<https://openreview.net/pdf?id=8j7lAZ6tpD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155065>)

Supervised dimensionality reduction \(DR\) is widely used in visualization to reveal task\-specific structure in high\-dimensional data\. However, in regression settings with continuous supervision, existing methods often improve signal readability at the cost of severe neighborhood distortion, limiting the reliability of the resulting visualization\. To understand this trade\-off, we provide a theoretical analysis that characterizes the relationship between geometric faithfulness and signal readability through two finite\-sample proxies for the readout's bi\-Lipschitz properties: contraction \(co\-Lipschitz\) and smoothness \(Lipschitz\)\. We show that contraction can impose a sharp geometric distortion floor in many existing methods, whereas smoothness alone is sufficient to support effective visualization\. In particular, directly regularizing smoothness yields first\-order regularity gains with only second\-order geometry loss, under geometry\-first initialization near a local geometry optimum\. Guided by this insight, we propose \\sys \(\\acroinit\{I\}nterpretable \\acroinit\{S\}upervised \\acroinit\{DR\}\), a nonparametric method that preserves geometric structure while enforcing readout smoothness\. Experiments on HPDv3 and Tabula Muris show that \\sys improves the geometry\-\-signal Pareto frontier, reducing local signal variation while retaining faithful neighborhoods compared with representative supervised DR baselines\. Our code is available at \\url\{https://anonymous\.4open\.science/r/ISDR\-preview\}\.

## Approximate Memory Suffices for Universal Approximation with State Space Models

**Authors:** Yoshihiro Maruyama

**ID:** 148575 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=wqs1OgZFKP>) | [PDF](<https://openreview.net/pdf?id=wqs1OgZFKP>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148575>)

Sequence models in machine learning compress long input histories into finite\-dimensional states, from recurrent networks and reservoir computing to recent state space models for long\-context data\. This raises a basic expressivity question: how simple can the recurrent memory be before it can no longer approximate stable causal sequence\-to\-sequence maps? We answer this question for fading\-memory operators, where the distant past has uniformly diminishing influence\. We show that every continuous causal time\-equivariant fading\-memory operator on a compact input set can be uniformly approximated by a state space model whose recurrence is a fixed diagonal linear contraction\. The dynamics are time\-invariant, input\-independent, and contain no nonlinear hidden\-state update or delay\-line structure\. The construction uses a bank of short exponential traces; although such traces do not exactly store a recent input window, a singular Vandermonde extraction approximately reconstructs the window while the remaining tail becomes negligible as delta decreases\. We also prove that exact delay recovery is impossible for any fixed finite trace bank, showing that the accuracy\-dependent extraction is essential\. Technically, the result separates recurrent expressivity from exact memory storage, while exposing a conditioning cost in the readout\. More broadly, it clarifies why highly stable, structurally simple SSM cores can still be universal approximators for stable sequence behavior\.

## AdaPCLA: Curriculum Prior Internalization For Long\-Tailed Longitudinal EHR Generation

**Authors:** shuai cui; Chen Wenxuan; Wenjie Du; Jian Lou; Dan Li; Wenjie Feng

**ID:** 150249 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jdm8WK08ec>) | [PDF](<https://openreview.net/pdf?id=jdm8WK08ec>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150249>)

Generative modeling of longitudinal Electronic Health Records is increasingly important for privacy\-preserving research, yet standard autoregressive models tend to underrepresent the co\-occurrence structure of tail events \(i\.e\., diseases, symptoms\), reducing the fidelity and faithfulness of generated data for rare subpopulations\. To this end, we propose ADAPCLA framework, which enables generative models to adaptively fit and generate EHR data through a data distribution\-aware training strategy; this is achieved by internalizing data knowledge parameters by simulated annealing training\. It also supports training\-free adaptation to a diverse clinical population for generation through zero\-shot distribution control\. Moreover, our theoretical analysis characterizes rare\-code logit updates through the label\-wise empirical NTK and derives a prior\-internalization bound for how annealing speed and NTK conditioning affect retained prior signals\. Experiments on real\-world data show that ADAPCLA achieves consistent gains in tail plausibility, downstream utility, and zero\-shot control; in particular, it improves TailPairSeen over HALO by 114\.2\\% on MIMIC\-III and 65\.1\\% on MIMIC\-IV, outperforms GPT\-style generation by 3\.5\\% F1 for zero\-shot cross\-population adaptation\.

## Why Latent Actions Fail, and How to Prevent It

**Authors:** Jung Min Lee; Taehyun Cho; Li Zhao; Jungwoo Lee

**ID:** 153410 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LWmFD8ITV8>) | [PDF](<https://openreview.net/pdf?id=LWmFD8ITV8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153410>)

Latent action models \(LAMs\) aim to learn action\-like representations from unlabeled videos by compressing frame\-to\-frame changes\. The frames of in\-the\-wild videos, however, contain not only the agent's own state but exogenous state such as background clutter\. Since the exogenous state introduces changes unrelated to actions, it hinders reliable latent action learning\. This paper investigates this problem analytically by extending a linear LAM framework to explicitly model exogenous state\. Our analysis reveals two insights: \(1\) minimizing the standard reconstruction objective produces latent actions that encode exogenous information of future observation; and \(2\) learning in a representation space that focuses on endogenous components is a key to mitigating the interference of noise\. We further show that previously proposed auxiliary objectives, such as action\-supervision, provably encourage latent actions to be consistent across exogenous states\. These findings are validated through experiments on both linear and nonlinear LAMs, providing a unified theoretical analysis of how exogenous state hinders latent action learning and why common remedies work\.

## NoTA: Normalized Tensor Adaptation for Parameter\-Efficient Continual Learning

**Authors:** Yunsong Deng; Yuning Qiu; Qibin Zhao; Guoxu Zhou

**ID:** 152586 | **Topic source:** inferred | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=Rzivs8kzM2>) | [PDF](<https://openreview.net/pdf?id=Rzivs8kzM2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152586>)

Rehearsal\-free class\-incremental learning \(CIL\) requires a model to learn new classes sequentially without storing previous data, making catastrophic forgetting a central challenge\. Adapter\-based methods have become a prevalent solution by storing and accumulating task\-specific update matrices, yet the effect of the cumulative update magnitude on CIL performance remains underexplored\. In this work, we propose Normalized Tensor Adaptation \(NoTA\), which addresses these two aspects jointly\. MPO adapters provide a compact structured space for storing task\-specific updates, while global normalization controls the accumulated update that determines the final model\. Our empirical analysis reveals a key observation: global normalization consistently improves both matrix\-based and MPO\-based adapters by stabilizing the cumulative update magnitude across task sequences\. We further provide a theoretical analysis showing that global normalization yields a forgetting bound independent of the task sequence length, in contrast to task\-wise normalization whose bound can grow with later tasks\. Building on the tensor network structure of MPO, we introduce a variant with hierarchical coefficients \(H\-NoTA\), which uses task\-level coefficients and inter\-core modulation matrices to refine the contributions of historical adapters\. Extensive experiments demonstrate that our methods consistently improve rehearsal\-free CIL performance while maintaining strong parameter efficiency\.

## Active Learning From Positive and Unlabeled Examples

**Authors:** Farnam Mansouri; Sandra Zilles; Shai Ben\-David

**ID:** 154434 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DaOrmOgOYi>) | [PDF](<https://openreview.net/pdf?id=DaOrmOgOYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154434>)

Learning from positive and unlabeled data \(PU learning\) is a weakly supervised variant of binary classification in which the learner receives labels only for \(some\) positively labeled instances, while all other examples remain unlabeled\. Motivated by applications such as advertising and anomaly detection, we study \*active\* PU learning, where the learner adaptively queries instances from an unlabeled pool, but a label is revealed only when the queried instance is positive and an independent coin flip succeeds; otherwise the learner receives no information\. This paper provides the first theoretical analysis of the label complexity of active PU learning\.

## Rethinking Softmax Attention: Polynomial Activations for Transformers

**Authors:** Hemanth Saratchandran; Jianqiao Zheng; Yiping Ji; Wenbo Zhang; Simon Lucey

**ID:** 154100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GFLgVpdI1N>) | [PDF](<https://openreview.net/pdf?id=GFLgVpdI1N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154100>)

Softmax attention is typically viewed as effective because it produces a normalized probability distribution over input tokens\. In this paper, we challenge this view by showing that a key mechanism behind softmax attention is its implicit control of the Frobenius norm of the attention matrix, which stabilizes training\. Motivated by this observation, we study alternative attention activations, focusing on polynomial maps that provide a similar regularization effect without satisfying the usual softmax constraints\. Our theoretical analysis shows that certain polynomial activations can replace softmax despite violating positivity, row\-wise normalization, and sparsity\. Extensive experiments across transformer applications show that these alternatives achieve strong performance, suggesting that the success of softmax attention is not inherently tied to its probabilistic interpretation\.

## Near\-Linear Time Generalized Sinkhorn Algorithms for Bounded Genus Graphs

**Authors:** Krzysztof M Choromanski; Derek Long; Ananya Parashar; Dwaipayan Saha

**ID:** 155409 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rp5KcuMO2>) | [PDF](<https://openreview.net/pdf?id=5rp5KcuMO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155409>)

We present GenusSink,  a new class of  approximate generalized Sinkhorn algorithms with shortest\-path\-distance costs for bounded genus \(e\.g\. planar\) graphs, providing near\-linear time: \(1\) pre\-processing, \(2\) iteration step, \(3\) final transport plan matrix querying and near\-linear memory\. Graphs handled by GenusSink include in particular planar graphs and bounded\-genus meshes approximating 3D objects\. GenusSink addresses total quadratic time complexity of its brute\-force counterpart by leveraging separator\-based decomposition of graphs, computational geometry techniques, and new results on fast matrix\-vector multiplications with generalized distance matrices, using in particular Fourier analysis and low displacement rank theory\. It is inspired by recent breakthroughs in graph theory on approximating bounded genus metrics with small treewidth metrics minor\. The graph\-centric approach enables us to target optimal transport problem with the corresponding distributions defined on the manifolds approximated by weighted graphs and with cost functions given by geodesic distances\. We conduct rigorous theoretical analysis of GenusSink, provide practical implementations, leveraging newly introduced in this paper separation graph field integrators \(S\-GFIs\) data structures and present empirical verification\. GenusSink provides orders of magnitude more accurate computations than other efficient Sinkhorn algorithms, while still guaranteeing significant computational improvements, as compared to the baseline\. As a by\-product of the developed methods, we show that GenusSink is $\\textbf\{numerically equivalent\}$ to the brute\-force geodesic Sinkhorn algorithm on n\-vertex graphs with treewidth $O\(\\log \\log \(n\)\)$ \(e\.g\. on trees\)\.

## Predicting Human\-Gain Curves under Local Proxy Optimization from Repeated Ratings

**Authors:** Moonwon Choi; Kisung Nam; Seunggeun Lee

**ID:** 150880 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ehnuc3RcGX>) | [PDF](<https://openreview.net/pdf?id=ehnuc3RcGX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150880>)

Optimizing a proxy objective can improve human\-perceived quality, but the resulting gain can vary with optimization strength\. Average proxy\-\-human correlation alone does not reveal how human\-perceived quality changes as optimization strength increases\. We propose a pre\-optimization diagnostic that uses repeated human ratings to predict the human\-gain curve induced by a fixed proxy\. The method models proxy optimization as a KL\-regularized exponential tilt\. At KL radius $d$, the local gain is approximated by $A\\sqrt\{d\}\+Bd$, where $A$ measures first\-order proxy\-\-human alignment and $B$ captures the leading second\-order correction along the proxy\-optimization path\. We estimate $A$ and $B$ from repeated human ratings on calibration items and test the resulting gain\-curve prediction on held\-out evaluation items\. Across SummEval, analysis\-eligible WMT MQM clusters, an OpenMEVA\-MAGS ROC/WP repeated\-rating slice, and a GPT\-4o judge proxy experiment, the proposed approach consistently reduces held\-out gain\-prediction error relative to $A$\-only, zero\-gain, and reliability\-only baselines\. Transfer experiments across datasets and evaluation slices show that source coefficients are useful priors, but target calibration further improves prediction\. The method provides a principled local diagnostic for estimating the human\-gain curve of a fixed proxy as optimization strength varies\.

## The Locality Cost of Semantic Patch Self\-Distillation

**Authors:** Xi Weng; Zhaoyu Liu; lianyu hu; Jin Song Dong

**ID:** 150207 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=jvnyjDi5md>) | [PDF](<https://openreview.net/pdf?id=jvnyjDi5md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150207>)

Masked patch self\-distillation has become a default ingredient of modern joint\-embedding pretraining, and is widely regarded as a uniform enhancement of dense visual representations\. In this work, we revisit this assumption and argue that its effect is more nuanced\. Through controlled experiments across multiple joint\-embedding objectives and model scales, we observe a consistent tension: while the auxiliary patch objective strengthens semantic abstraction, it systematically erodes fine\-grained spatial correspondence\. To examine this phenomenon beyond the reach of human\-annotated benchmarks, we introduce annotation\-free diagnostics that probe how much local visual evidence remains accessible in the learned representation\. We further provide a population\-level theoretical analysis showing that this trade\-off is not incidental but follows directly from the conditional nature of masked semantic prediction, under which target variation unpredictable from visible context is provably averaged out\. Taken together, our findings recast masked patch self\-distillation as an explicit trade\-off between semantic abstraction and local detail, rather than a uniform improvement to dense features\.

## Characterizing Trainability of Instantaneous Quantum Polynomial Circuit Born Machine

**Authors:** Kevin Shen; Susanne Pielawa; Vedran Dunjko; Hao Wang

**ID:** 154648 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=C2rWYFc9J6>) | [PDF](<https://openreview.net/pdf?id=C2rWYFc9J6>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154648>)

Instantaneous Quantum Polynomial Quantum Circuit Born Machines \(IQP\-QCBMs\) have been proposed as quantum generative models that combine a classically tractable training objective—based on the maximum mean discrepancy \(MMD\)—with a potential quantum advantage motivated by sampling\-complexity arguments\. While recent works have explored this model across various application domains, fundamental questions remain: does the model suffer from exponentially vanishing loss gradients, known as the barren plateau problem—a pervasive obstacle in quantum machine learning—and how do regimes of trainability relate to regimes of possible quantum advantage? Here, we address both questions analytically\. To study trainability, we derive closed\-form expressions for the variances of the partial derivatives of the MMD loss function and establish general upper and lower bounds\. We explicitly characterize how trainability depends on the generator set and the spectrum of the chosen kernel, identifying regimes in which low\-weight kernels avoid exponential gradient suppression under structured topologies\. Regarding potential quantum advantage, we reformulate the anti\-concentration property in terms of the same generator\-set quantities that govern trainability, enabling a unified analysis\. We show that sparse IQP architectures can produce classically intractable output distributions while simultaneously remaining trainable, at least at lower\-weight frequencies\. Our analytical results corroborate the numerical observations of prior work and provides principled guidelines for designing scalable IQP\-QCBM architectures\.

## Assistive Dueling Bandits: No\-Regret Algorithms for Assisting No\-Regret Users

**Authors:** Mark Bedaywi; Cassidy Laidlaw; Austin Tripp; Nika Haghtalab

**ID:** 148914 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uEhuh3zcvR>) | [PDF](<https://openreview.net/pdf?id=uEhuh3zcvR>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148914>)

We study a stochastic bandit problem in which learning is split between two agents\. In each round, a human observes rewards but can choose only between a pair of arms selected by an assistant, while the assistant observes the human's behavior but not realized rewards\. We call this model the \*\*assistive dueling bandit\*\*\. The human is modeled as a learning agent whose regret on any subset of arms is bounded by a function $g\(T\)$ unknown to the assistant\. This is a natural model for recommender systems or AI assistants that must present a slate of options to a user who may be still learning about their own preferences\.  We provide a general reduction from assistive dueling bandits to the problem of \*\*max\-finding with imprecise feedback\.\*\* With it, we design assistant algorithms that cooperate with any $g\(T\)$\-regret human to achieve a joint regret of $\\tilde\{\\mathcal\{O\}\}\(K \\cdot g\(T/K\)\)$, even without knowledge of $g\(T\)$\. Crucially, when $g\(T\) \\in \\mathcal\{O\}\(\\sqrt\{T\}\)$, our method recovers the nearly optimal minimax rate of $\\tilde\{\\mathcal\{O\}\}\(\\sqrt\{KT\}\)$, implying that splitting up the responsibilities of learning in this way can be done without suffering any excess regret asymptotically\. We complement our theoretical analysis with experimental evidence that this algorithm outperforms an assistant implemented via standard dueling bandit algorithms\.

## Diffusion Models Observe Only Gradients: A Geometric Perspective on Score Matching Errors

**Authors:** Nail B Khelifa; Richard Turner; Ramji Venkataramanan

**ID:** 151563 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZfRxNzTSSZ>) | [PDF](<https://openreview.net/pdf?id=ZfRxNzTSSZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151563>)

Score\-based diffusion models are typically trained by minimizing the $L^2$ score matching error, and standard theoretical analyses rely on this quantity to bound the sampling discrepancy between the learned and target distributions\. We show the $L^2$ score error is not the right intrinsic measure of marginal distributional quality: a learned diffusion model can incur arbitrarily large $L^2$ score error while perfectly matching the target distribution\. By decomposing score errors into a gradient and a solenoidal component \(a Helmholtz\-Hodge decomposition\), we identify the geometric reason behind this: only the gradient component enters the marginal Fokker\-Planck dynamics, while the solenoidal  component is structurally invisible\. We make this precise in three results\. First, building on the corrected geometry, we prove an impossibility result: no monotone function of the $L^2$ score error can uniformly lower bound any divergence between the learned and target distributions\. Second, we derive an upper bound on the Kullback\-Leibler divergence that depends only on the observable gradient component of the error, tightening the standard Girsanov bound and identifying its looseness as the cost of operating on path\-space rather than marginal\-space dynamics\. Third, we give a tractable estimator of the gradient component via a dual Sobolev identity, which is shown to empirically correlate substantially better with sample quality than the full $L^2$ error\.

## Recursively Trained Diffusion Models: Limiting Collapse Distribution and Spectral Characterization

**Authors:** Nail B Khelifa; Richard Turner; Ramji Venkataramanan

**ID:** 152379 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=TX42ZoaFHi>) | [PDF](<https://openreview.net/pdf?id=TX42ZoaFHi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152379>)

Recursive training of generative models on their own outputs can lead to model collapse, a compounding drift away from the true data distribution\. Existing theoretical works bound finite\-round error accumulation in the context of diffusion models, but two questions remain open:\~what distribution does the recursion converge to, and how fast? We answer both, isolating a mechanism distinct from imperfect learning: even with perfect score estimation and exact sampling, the early stopping of the reverse diffusion \(required for numerical stability\) drives a progressive drift away from the data distribution\. We prove that this recursion converges geometrically to a unique limiting distribution, which admits a closed\-form characterization as an infinite mixture of increasingly Gaussian\-smoothed versions of the data distribution\. A Hermite spectral decomposition of this limit reveals that recursive training acts as a low\-pass filter: higher\-order modes, which encode fine non\-Gaussian structure, are attenuated much more strongly than coarse modes\. This spectral picture motivates annealed truncation schedules that progressively shrink truncation times across retraining rounds; we prove that any schedule converging to $0$ asymptotically eliminates recursive compounding\. Finally, we show our idealized characterization is robust: in the presence of discretization and score estimation errors, the learned distribution remains in a Wasserstein\-2 ball around the ideal limit, with mode\-dependent contraction rates that contract high\-order errors faster than low\-order ones\. We validate the theory on synthetic Gaussian mixtures and CIFAR\-10\.

## Rare Events, Real Signals: Functional Ensembles as Units of Computation in Deep Spiking Networks

**Authors:** Aditi Aravind; Konstantinos Ladakis; Mario Alexios Savaglio; Stelios Smirnakis; Maria Papadopouli

**ID:** 153510 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KnYG3WQcqz>) | [PDF](<https://openreview.net/pdf?id=KnYG3WQcqz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153510>)

We investigate how internal representations emerge across hierarchical processing systems by introducing a neuroscience\-inspired framework for analyzing deep spiking neural networks \(SNN\) through the lens of functional connectivity\. Drawing on concepts from systems neuroscience and information theory, we form the first\-order functionally connected \(1FC\) group of a neuron based on its statistically significant pairwise correlations with neurons from the previous layer of a trained SNN architecture\. We then track its response properties during inference under various conditions\. Our analysis shows that several principles of functional connectivity previously observed in biological cortex are preserved in spiking ResNet architectures\. These  1FC ensembles display interesting properties: their aggregate cofiring reliably predicts downstream neuronal responses through a robust, ReLU\-like input–output relationship, whose gain scales systematically with ensemble size\. Reliable encoding of the presented class emerges only during high 1FC cofiring events, which themselves occur infrequently, indicating that informative representations are concentrated in rare but highly coordinated activity patterns\. Under uniform random noise or adversarial perturbations, these response profiles are disrupted, particularly in early and intermediate layers\. This enables a targeted high\-resolution interrogation at specific nodes and pathways when large 1FC cofirings occur\. We showed that the functional connectivity structure is shaped by learning and this structure breaks under weight permutation\. This establishes 1FC ensembles as a functionally meaningful substrate for input encoding and information transfer, enabling targeted fine\-grained diagnostics on the information flow\.

## Decentralized Ranking Aggregation via Gossip: Convergence and Robustness

**Authors:** Kerrian Le Caillec; Anna van Elst; Igor Colin; Stephan Clémençon

**ID:** 151288 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=bX0ELaA3QT>) | [PDF](<https://openreview.net/pdf?id=bX0ELaA3QT>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151288>)

The concept of ranking aggregation plays a central role in preference analysis, and numerous algorithms for calculating median rankings, often originating in social choice theory, have been documented in the literature, offering theoretical guarantees in a centralized setting, \\textit\{i\.e\.\}, when all the ranking data to be aggregated can be brought together in a single computing unit\. For many technologies \(\\textit\{e\.g\.\} peer\-to\-peer networks, IoT, multi\-agent systems\), extending the ability to calculate consensus rankings with guarantees of convergence and resilience to potential contamination in a decentralized setting, when preference data is initially distributed across a communicating network, remains a major methodological challenge\. Indeed, in recent years, the literature on decentralized computation has mainly focused on computing or optimizing statistics such as arithmetic means using gossip algorithms\. The purpose of this article is precisely to study how to achieve reliable and resilient consensus on collective rankings in a decentralized setting, thereby raising new questions, robustness to corrupted nodes, and scalability through reduced communication costs in particular\. The approach proposed and analyzed here relies on robustness guarantees derived from random gossip communication, allowing autonomous agents to compute global ranking consensus using only local interactions, without coordination or central authority\.

## Voronoi\-Markov chain and spatial entropy for point pattern analysis

**Authors:** James C Mathews; Francisco Couzo; Aleksandr Petrov; Avijit Chatterjee; Saad Nadeem

**ID:** 150044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lD4F4lCTcN>) | [PDF](<https://openreview.net/pdf?id=lD4F4lCTcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150044>)

In this paper, we revisit the concept of entropy in the spatial context with the aim of deriving computable and interpretable metrics for point pattern analysis in domains such as histopathology\. We discuss stochastic point process assumptions like Poisson homogeneity and Simple Sequential Inhibition \(SSI\) and review established results for Voronoi and Delaunay tilings of point sets for their potential to provide null distributions for rigorous empirical hypothesis testing\. We present \(1\) a novel \`\`dense basin entropy'' defined in terms of the Ord distribution supported on Voronoi basins, which is shown to be sensitive to clustering, and \(2\) a related Markov chain designed as a simplification or approximation of Brownian motion in the underlying planar domain\. We prove a lower bound on the dense basin entropy in the SSI regime \(originally discovered in empirical experiments\) and show that the entropy rate and spectral gap of the Markov chain lead to sharp discrimination metrics\. Finally, we demonstrate the generalization to multiple\-set analysis via aggregation of one set over the Markov invariant measure for another\. Simulations and experiments in histopathology show that our proposed metrics offer insights complementary to other instantiations of entropy in spatial analysis\.

## Hard Attention Transformers and BSS\-Machines

**Authors:** Lena Ehrmuth

**ID:** 148913 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uF9Zr3T0p8>) | [PDF](<https://openreview.net/pdf?id=uF9Zr3T0p8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148913>)

We define a new variant of transformers called recursive transformers, which generate sequences of vectors without discretisation in each step\. We show that over ordered ring extensions of the integers recursive transformers with circuit activation functions and hard attention are computationally equivalent to the well\-established algebraic model of BSS\-machines\. If the transformers use feedforward networks instead, they are equivalent to linear BSS\-machines with degree\-2 branching\.

## Pattern\-Based Matrix Analysis Under Permutations

**Authors:** Andrei Ermakov

**ID:** 148683 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vqLCMxTvrv>) | [PDF](<https://openreview.net/pdf?id=vqLCMxTvrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148683>)

Low\-rank approximation captures one important notion of matrix simplicity: a matrix is simple if it is well described by a low\-dimensional linear model\. This paper studies a complementary notion\. We consider matrices that become structurally simple only after permuting rows and columns, so that their mass concentrates in a prescribed geometric pattern such as a band, block\-diagonal, arrowhead, or related form\.  We introduce a pattern distance that measures how close a matrix is to a given structural mask after optimal reordering, giving a common framework for latent ordering, community detection, and bandwidth minimization\. The problem is NP\-hard in general; we derive an alternating algorithm based on Linear Assignment subproblems, and establish identifiability of the target structure up to pattern automorphisms\. We further introduce a pattern\-plus\-low\-rank decomposition that combines permutation\-structured fitting with a low\-rank residual; it dominates pure low\-rank approximation by feasibility and admits a strict rank separation on planted block\-diagonal targets, with broad empirical gains across pattern families\.  We evaluate the framework on synthetic recovery tasks, real correlation and graph adjacency matrices, and transformer attention heads \(GPT\-2, Qwen2\.5\-0\.5B and Qwen2\.5\-7B\), showing that a single universal algorithm recovers qualitatively different forms of matrix structure\.

## Performative Prediction with Selective Labels

**Authors:** Giovani Valdrighi; Isabel Valera; Marcos M\. Raimundo

**ID:** 155604 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4KuDZUSGv3>) | [PDF](<https://openreview.net/pdf?id=4KuDZUSGv3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155604>)

Many social applications of machine learning exhibit performative effects: population behavior changes in response to deployed models\. Performative prediction studies this interaction through a distribution map that relates each model to the population distribution it induces\. One of the main results in this framework showed that repeated risk minimization \(RRM\), which updates models by retraining on the most recent data, can converge to a stable model that minimizes risk on its own induced distribution\. However, existing analyses typically assume access to the complete distributions of features and labels after model deployment, ignoring the possibility of \_selective labels\_: observing labels only for the accepted subset of the population\. In this work, we formalize performative prediction with selective labels and show that retraining only on observed data can misguide the retraining procedure and undermine the guarantees of convergence to a stable solution\. We then propose a worst\-case objective based on knowledge of a confidence interval on the probability of a positive label\. Applying RRM to this objective permits us to remain within a bounded distance to the true stable point\. Under a sensitivity assumption on the conditional label distribution, we further show how previously accepted data can tighten these confidence intervals over time\. Experiments in a lending application with fairness regularization show that our robust optimization approach closely matches the performance of RRM with complete label access\.

## NeuroSynTheos: Learning to accelerate counterexample\-guided reactive synthesis modulo theories

**Authors:** Andoni Rodríguez; Cesar Sanchez

**ID:** 150943 | **Topic source:** official | **Abstract source:** official-poster-page | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e9NgLNzzGp>) | [PDF](<https://openreview.net/pdf?id=e9NgLNzzGp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150943>)

Reactive synthesis from temporal logic modulo theories \(LTLt\) automatically con\- structs correct\-by\-construction controllers for systems with arithmetic constraints— elevators, thermostats, robotic patrols—but the state\-of\-the\-art CEGRES algorithm times out on 77% of existing benchmarks due to a fundamental bottleneck: it discovers the universally valid theory tautologies needed to refine its Boolean abstraction one at a time, through expensive counterexample analysis\. We present NEUROSYNTHEOS, a neural augmentation of the CEGRES loop that predicts batches of tautologies at each refinement step\. We formalize template invariance for parametric specification families, showing that the prediction problem reduces to constant re\-instantiation when specifications share algebraic structure\. We train a GNN over formula abstract syntax trees and an autoregressive transformer on tautology traces from 104 solved benchmarks\. NEUROSYNTHEOS establishes a new state of the art for LTLt synthesis: on 83 standard benchmarks, it solves 60 ±1\.2 specifications \(vs\. 19 for the previous best\), resolving 41 that no prior method could handle within a 5\-minute budget, while reducing the median itera\- tion count by 5\.2×with under 3 seconds of neural overhead\. All predictions are SMT\-verified before injection, preserving full soundness guarantees\.

## Atoms and Pivot Based Correlation Clustering

**Authors:** David R Lolck; Mikkel Thorup; Shuyi Yan

**ID:** 153440 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LICZTK9DS7>) | [PDF](<https://openreview.net/pdf?id=LICZTK9DS7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153440>)

Correlation clustering seeks a partitioning of the vertices of a graph that minimizes the number of disagreements: edges between different clusters and non\-edges within the same cluster\.  The classic \*pivot\-based correlation clustering\* algorithm of Ailon, Charikar, and Chawla \[JACM'08\] achieves a factor\-$3$ approximation\. However, known worst\-case examples attaining this bound rely on highly structured instances with exceptionally strong clusters, such as complete graphs minus a matching\.  In this work, we show that such worst\-case behavior is inherently tied to these highly clique\-like substructures\. Building on the notion of \*atoms\* introduced by Cohen\-Addad, Lattanzi, Mitrovic, Norouzi\-Fard, Parotsidis, and Tarnawski \[FOCS'23\] — subsets of vertices that cannot be separated in any optimal clustering — we prove that the approximation ratio of $3$ can only be realized when the pivot algorithm makes errors on such atoms\.  Motivated by this insight, we propose a modified pivot algorithm that removes atoms prior to each pivot step\. We prove that this yields an improved approximation ratio of $2\.9995$ in expectation\. Additionally, we evaluate our algorithm on synthetic datasets with varying amount of noise, demonstrating consistent empirical improvements over both the classic pivot algorithm and existing methods for identifying atoms\.

## The sublevel Flood bifiltration: towards scalable 2\-parameter persistent homology

**Authors:** Mattéo Clémot; Julie Digne; Julien Tierny

**ID:** 154747 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=BJ7STXgkS4>) | [PDF](<https://openreview.net/pdf?id=BJ7STXgkS4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154747>)

Multi\-parameter persistent homology is a rapidly developing branch of topological data analysis that improves the robustness of single\-parameter persistent homology to outliers, while still capturing the metric characteristics of the data\. However, a notable limitation is its lack of scalability\. In this paper, we introduce a novel approach for efficiently computing 2\-parameter persistent homology on large point sets\. Our work extends the Flood filtration, originally developed for single\-parameter persistence\. Our construction, called the sublevel Flood bifiltration, offers a scalable approximation of the sublevel Flood bifiltration\. We show that it benefits from theoretical stability properties and describe how to compute it efficiently\. We demonstrate the performance of our approach in classification tasks on low\-dimensional synthetic datasets, where density awareness is critical, as well as on real\-world time series datasets\.

## Coresets for Clustering Using Noisy Comparisons and Few Distance Queries

**Authors:** Amir Carmel; Robert Krauthgamer

**ID:** 149987 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lhTqQ3cQIZ>) | [PDF](<https://openreview.net/pdf?id=lhTqQ3cQIZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149987>)

Coresets are a fundamental tool for scaling clustering algorithms,  but standard constructions assume full access to the pairwise distances\.  In many modern settings, access to distances is costly and thus limited,  and algorithms must instead rely on inexpensive comparison queries\.  We study coreset construction in the Rank\-Measure \(RM\) model,  where the algorithm can make noisy comparison queries to a quadruplet oracle  alongside a small number of distance queries\.  In this model, we present the first algorithm to construct an $\\epsilon$\-coreset for $\(k,z\)$\-clustering in Euclidean space\.  It matches the coreset\-size bounds known in the classical model, while using only polylogarithmically many distance queries in the input size\.  Our approach is based on a uniform\-sampling framework \[Chen, SICOMP 2009\], which decomposes the input into geometric rings and samples uniformly within each ring\.  We implement this approach using primarily noisy comparison queries,  and then compress the result using a standard full\-access coreset construction\.  In contrast, prior work in oracle\-based clustering achieved only constant\-factor guarantees\. We complement our theoretical findings with experiments that demonstrate strong empirical performance against full\-access baselines while using significantly fewer distance computations\.

## An exact information theory of generalization phase transitions in Bayesian diffusion models

**Authors:** Henry Hunt; Mason Kamb; Surya Ganguli

**ID:** 152478 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SmybBxKaYv>) | [PDF](<https://openreview.net/pdf?id=SmybBxKaYv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152478>)

How diffusion models circumvent the curse of dimensionality to learn complex distributions over high dimensional spaces from a finite training set, instead of memorizing it, remains a fundamental mystery\. To address this, we introduce analytically tractable Bayesian information restricted diffusion \(BIRD\) models, in which each pixel observes restricted information about noisy data\. A BIRD model time\-reverses diffusion by inferring which past training sample produced its current restricted observation using the Bayesian posterior\. This model class generalizes existing analytical diffusion models that use spatially local information restriction\. We show that spatially local BIRD models closely approximate trained diffusion models early in training, across different architectures such as UNets and DiTs\. Under minimal assumptions on the data distribution, we identify an information\-theoretic phase boundary between memorization and generalization in the joint space of amount of training data, time in the reverse generative process, and amount of information restriction: a BIRD model memorizes when the mutual information between its restricted noisy observations and the training data exceeds the log number of training points, and it generalizes otherwise\. Experiments across a range of datasets confirm our theoretically predicted location for the transition\. We find that generation proceeds near the edge of memorization: both spatially local BIRD models and early\-training diffusion models track the memorization\-generalization phase boundary by increasingly restricting information over time\. Overall, our results reveal a fundamental role for information restriction in generative AI to circumvent the curse of dimensionality\.

## Training with \(Swap\) Regret Loss in a Single\-Layer Self\-Attention Model: A Case Study on the Probability Simplex

**Authors:** Chanwoo Park; Asuman Ozdaglar

**ID:** 149270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZtbSbQ3kW>) | [PDF](<https://openreview.net/pdf?id=rZtbSbQ3kW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149270>)

We revisit the regret loss framework introduced in \[Park, 2024\], which uses decision\-theoretic regret as a direct loss function for training models to make better decisions, through the lens of probability\-simplex policies\. Our first result shows that a single\-layer self\-attention model trained with regret loss admits a stationary point whose forward\-pass exactly matches \\emph\{smoothed fictitious play\} with the appropriate stepsize that ensures no\-regret behavior—i\.e\., for any given policy input, the model outputs the same update that smoothed fictitious play would produce\. In parallel, we also newly introduce a swap\-regret loss function, which extends the regret\-loss framework beyond external regret and enables models to directly optimize for swap\-deviation robustness\. We further show that this swap\-regret loss admits a stationary point whose forward pass implements the corresponding swap\-regret update induced by classical Blum–Mansour no\-swap\-regret algorithm, with each head implementing an external\-regret update via smoothed fictitious play\. Together, these results show that regret\-trained attention can realize differentiable mechanisms whose deployment induces equilibrium behavior in games: external\-regret dynamics lead to coarse correlated equilibrium, while swap\-regret dynamics lead to correlated equilibrium\. Thus, regret\-based objectives steer minimal attention architectures toward online\-learning dynamics with game\-theoretic guarantees, without supervised traces of those algorithms\.

## Improved Leverage Score Sampling for Constrained Active Linear Regression

**Authors:** Aarshvi Gajjar; Syamantak Kumar; Aditya Makkar; Christopher Musco; Joey Zhou

**ID:** 155618 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4DVNqdoLKl>) | [PDF](<https://openreview.net/pdf?id=4DVNqdoLKl>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155618>)

In this paper we study active learning for constrained linear regression\. Given a design matrix $A \\in \\mathbb\{R\}^\{n \\times d\}$, a constraint set $\\mathcal C \\subseteq \\mathbb\{R\}^d$, and query access to a response vector $b \\in \\mathbb\{R\}^n$, we seek to output an approximate solution to the problem $\\min\_\{x\\in \\mathcal\{C\}\} \\lVert Ax \- b\\rVert\_2^2$ using as few queries to $b$ as possible\. This problem arises in many scientific and engineering applications, and \_randomized leverage score sampling\_ provides a powerful method to solve it\. However, existing leverage score methods either ignore the constraint or encode it only through ridge regularization, thereby suffering poor query complexity for anisotropic constraint sets\. We propose \_ellipsoid\-regularized leverage scores\_, where we first approximate the constraint set by an outer ellipsoid and then use its shape matrix to bias sampling toward directions that matter under the constraint geometry\. We prove that the resulting  query complexity is governed by a natural \`\`anisotropic effective dimension\`\` of the problem, $d\_\{\\text\{eff\}\}\(\\mathcal\{C\}\) \\leq d$\. In particular, we show that $\\tilde O\(d\_\{\\text\{eff\}\}\(\\mathcal\{C\}\)/\\varepsilon^2\)$ label queries suffice to return a feasible point whose objective value is at most $\(1\+\\varepsilon\)$ times the optimum\. This bound is typically much smaller than what would be obtained using standard leverage scores\. Furthermore, for convex constraints, we show how to improve the dependence on $\\varepsilon$ from $1/\\varepsilon^2$ to $1/\\varepsilon$\. We complement these upper bounds with two lower bounds: first, a lower bound showing that the $1/\\varepsilon^2$ dependence is unavoidable without convexity assumptions on $\\mathcal C$, and second, a lower bound showing that the effective\-dimension dependence is unavoidable for ellipsoidal constraints\. We also provide experiments supporting our theoretical results\.

## Beyond the Full Slate: Evaluating MNL Algorithms on All Slates

**Authors:** Flavio Chierichetti; Mirko Giacchini; Ravi Kumar; Silvio Lattanzi; Alessandro Panconesi; Erasmo Tani; Andrew Tomkins

**ID:** 149458 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pwV1APiNY8>) | [PDF](<https://openreview.net/pdf?id=pwV1APiNY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149458>)

Multinomial logit models \(MNLs\) are ubiquitous in machine learning, particularly in recommendation systems\. While these models are typically evaluated using global metrics over a full catalog of items \(such as $\\ell\_2$\-error\), practical applications often involve making predictions on small, curated subsets or \`\`slates'' of items\. A model that minimizes global error may nevertheless yield very poor predictions on specific sub\-universes\. Yet, evaluating performance across all possible subsets remains computationally challenging\. In this paper, we present a set of new efficient algorithms to evaluate the small\-slate performance of MNL models\. Using these tools, we conduct an empirical study comparing standard non\-adaptive and adaptive learning algorithms\. We demonstrate that while methods that compute the Maximum Likelihood Estimate \(MLE\) suffer from poor worst\-case performance on small slates, specialized adaptive algorithms that dynamically sample difficult subsets can mitigate this issue\. Conversely, we find that non\-adaptive algorithms often achieve competitive average\-case performance; we provide a theoretical model explaining this phenomenon\. We conclude with recommendations for practitioners regarding when to utilize adaptive sampling based on the specific robustness requirements of their application\.

## Pointwise Lipschitz Continuous Graph Algorithms

**Authors:** Quanquan C Liu; Grigoris Velegkas; Yuichi Yoshida; Felix Zhou

**ID:** 155511 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=52Yg457yMf>) | [PDF](<https://openreview.net/pdf?id=52Yg457yMf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155511>)

In many real\-world applications, it is undesirable to drastically change the problem solution after a small perturbation in the input as unstable outputs can lead to costly transaction fees, privacy and security concerns, reduced user trust, and lack of replicability\. Despite the widespread application of graph algorithms, many classical algorithms are not robust to small input disturbances\. Towards addressing this issue, we study the pointwise Lipschitz continuity of graph algorithms, a notion of stability introduced by Kumabe and Yoshida \(2023, FOCS’23\) and further studied in related settings \(Kumabe and Yoshida, 2024, ICALP’24\), \(Kumabe and Yoshida, 2025, SODA’25\), \(Gima et al\., 2025, ESA’25\)\.  Our main result is a linear programming \(LP\) based minimum S\-T cut algorithm with a provably optimal Lipschitz constant, as witnessed by an accompanying lower bound\. As a direct corollary, we give the first dynamic minimum S\-T cut algorithm with non\-trivial recourse bound\. At the core of our techniques is a novel framework for analyzing the Lipschitz constant of regularized LP relaxations\. Our framework crucially unlocks the use of weighted regularizers, which could not be analyzed through previous methods and leads to polynomial improvements in the Lipschitz constant compared to what is achievable through previous techniques\. To demonstrate the flexibility of our methods, we also design an LP\-based b\-matching algorithm that improves on the state\-of\- the\-art Lipschitz constant in certain input regimes when b ≡ 1\. Moreover, our algorithm cleanly extends to the general case when b ≥ 1, whereas prior works are specialized to the case of b ≡ 1\.

## Concept Modulation Models: A Unified Framework for Identifiability and Extrapolation

**Authors:** Soheun Yi; Yizhou Lu; Chandler Squires; Pradeep Ravikumar

**ID:** 153542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KanpVVPIzD>) | [PDF](<https://openreview.net/pdf?id=KanpVVPIzD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153542>)

Reliable generalization in conditional latent\-variable models requires understanding both identifiability and extrapolation: whether observed variation across attributes determines latent structure, and whether that structure determines distributions at unseen attributes\. However, existing identifiability and extrapolation guarantees are largely model\-specific, with separate analyses in nonlinear ICA, causal representation learning, perturbation modeling, and related conditional latent\-variable models\. We introduce \*concept modulation models \(CMMs\)\*, an attribute\-indexed class of conditional generative models with structure $A\\to \\Lambda \\to C\\to X$, where attributes select modulators, modulators induce latent concept laws, and concepts generate observed features\. CMMs lift transition\-based identifiability to conditional settings by showing that feature agreement on observed attributes induces a latent concept transition constrained by the CMM class\. We express these constraints through \*attribute potentials\*, log\-density ratios between attribute\-conditioned concept laws, separating the generic lifting step from model\-specific rigidity arguments\. The same potentials control extrapolation: agreement at unseen attributes holds exactly when the transported attribute\-potential identities extend to those attributes\. This yields algebraic extrapolation criteria, identifies the common potential\-based proof objects behind several existing identifiability and extrapolation results, and, when combined with the model\-specific rigidity arguments in those works, recovers their stated conclusions\.

## Efficient Neural Field Learning via Adaptive Coverage and Focused Sampling

**Authors:** Guang Zhao; Xihaier Luo; Huan\-Hsin Tseng; Seungjun Lee; Shinjae Yoo; Yihui Ren; Wei Xu

**ID:** 151578 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=ZYSGaMwCnb>) | [PDF](<https://openreview.net/pdf?id=ZYSGaMwCnb>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151578>)

Implicit neural representations \(INRs\) provide a flexible framework for modeling high\-dimensional continuous fields, but their training is often inefficient due to uniform subsampling that ignores spatial heterogeneity\. Existing adaptive sampling methods partially address this issue by prioritizing high\-error samples, but typically operate at the point level, often leading to redundant sampling in localized regions and insufficient coverage of the domain\. We propose \\textbf\{ACES \(Adaptive Coverage\-aware Efficient Sampling\)\}, a structured sampling framework that improves training efficiency by decoupling coverage and importance\. ACES constructs adaptive spatial partitions to ensure domain coverage and reduce redundancy, and applies region\-level importance weighting to prioritize informative regions during training\. We provide a theoretical analysis showing that adaptive partitioning reduces gradient variance by increasing within\-region homogeneity, and that controlled bias in region\-level weighting may improve optimization efficiency relative to standard unbiased estimators\. Experiments on scientific field learning tasks demonstrate that ACES achieves faster convergence and lower error than uniform and pointwise adaptive sampling baselines, with the largest gains in fields with highly localized complexity\.

## The Z\-Gromov\-Wasserstein Distance

**Authors:** Martin Bauer; Facundo Mémoli; Tom Needham; Mao Nishino

**ID:** 156658 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156658>)

The Gromov\-Wasserstein \(GW\) distance is a powerful tool for comparing metric measure spaces which has found broad applications in data science and machine learning\. Driven by the need to analyze data sets whose objects have increasingly complex structure \(such as node and edge\-attributed graphs\), several variants of GW distance have been introduced in the recent literature\. With a view toward establishing a general framework for the theory of GW\-like distances, this paper considers a vast generalization of the notion of a metric measure space: for an arbitrary metric space Z, we define a Z\-network to be a measure space endowed with a kernel valued in Z\. We introduce a method for comparing Z\-networks by defining a generalization of GW distance, which we refer to as Z\-Gromov\-Wasserstein \(Z\-GW\) distance\. This construction subsumes many previously known metrics and offers a unified approach to understanding their shared properties\. This paper demonstrates that the Z\-GW distance defines a metric on the space of Z\-networks which retains desirable properties of Z, such as separability, completeness, and geodesicity\. Many of these properties were unknown for existing variants of GW distance that fall under our framework\. Our focus is on foundational theory, but our results also include computable lower bounds and approximations of the distance which will be useful for practical applications\.

## Tree Search With Predictions

**Authors:** Michael Dinitz; Bob Dong

**ID:** 152168 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V2S3XOjOz5>) | [PDF](<https://openreview.net/pdf?id=V2S3XOjOz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152168>)

Algorithms with predictions, or learning\-augmented algorithms, has proved to be an extremely useful paradigm for combining machine learning with traditional algorithms\.  One of the textbook settings for this is searching a sorted array\.  Without a prediction classical binary search takes $O\(\\log n\)$ queries, while with a prediction we can use "doubling binary search" to find the target key using $O\(\\log \\eta\)$ queries, where $\\eta$ is the error of the prediction measured as the absolute value of the difference between the true location and the predicted location\.  Since an array is just a path graph, in this paper we ask whether similar bounds can be achieved for search on even slightly more general graphs: trees\.  We show first that the high\-level answer is "no": there is no search algorithm that uses $O\(\\log \\eta\)$ queries, where now $\\eta$ is the graph distance between the predicted location and the true location\.  However, as our main result, we show that such bounds can be achieved on trees which are "path\-like" in that they have low pathwidth\.  In particular, we prove that there is a search algorithm which uses at most $O\(k \\log \\eta\)$ queries, where $k$ is the pathwidth of the tree\.  We also prove a lower bound showing that our algorithm has existentially optimal query complexity\.  Finally, we show experimentally, on real\-life inputs, that our algorithm has query complexity which is notably better than the simple non\-prediction based algorithm\.

