# Theory / Everything Else

理论 / 其他理论

53 source poster records. Repeated source event IDs are retained and explicitly marked.

Topic labels marked inferred are keyword-based, not official conference labels. PDF links marked derived are unverified. Missing abstracts are left empty in the JSON and CSV exports.

## The Z\-Gromov\-Wasserstein Distance

**Authors:** Martin Bauer; Facundo Mémoli; Tom Needham; Mao Nishino

**ID:** 156658 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** missing

[Official poster](<https://neurips.cc/virtual/2026/poster/156658>)

The Gromov\-Wasserstein \(GW\) distance is a powerful tool for comparing metric measure spaces which has found broad applications in data science and machine learning\. Driven by the need to analyze data sets whose objects have increasingly complex structure \(such as node and edge\-attributed graphs\), several variants of GW distance have been introduced in the recent literature\. With a view toward establishing a general framework for the theory of GW\-like distances, this paper considers a vast generalization of the notion of a metric measure space: for an arbitrary metric space Z, we define a Z\-network to be a measure space endowed with a kernel valued in Z\. We introduce a method for comparing Z\-networks by defining a generalization of GW distance, which we refer to as Z\-Gromov\-Wasserstein \(Z\-GW\) distance\. This construction subsumes many previously known metrics and offers a unified approach to understanding their shared properties\. This paper demonstrates that the Z\-GW distance defines a metric on the space of Z\-networks which retains desirable properties of Z, such as separability, completeness, and geodesicity\. Many of these properties were unknown for existing variants of GW distance that fall under our framework\. Our focus is on foundational theory, but our results also include computable lower bounds and approximations of the distance which will be useful for practical applications\.

## Training with \(Swap\) Regret Loss in a Single\-Layer Self\-Attention Model: A Case Study on the Probability Simplex

**Authors:** Chanwoo Park; Asuman Ozdaglar

**ID:** 149270 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=rZtbSbQ3kW>) | [PDF](<https://openreview.net/pdf?id=rZtbSbQ3kW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149270>)

We revisit the regret loss framework introduced in \[Park, 2024\], which uses decision\-theoretic regret as a direct loss function for training models to make better decisions, through the lens of probability\-simplex policies\. Our first result shows that a single\-layer self\-attention model trained with regret loss admits a stationary point whose forward\-pass exactly matches \\emph\{smoothed fictitious play\} with the appropriate stepsize that ensures no\-regret behavior—i\.e\., for any given policy input, the model outputs the same update that smoothed fictitious play would produce\. In parallel, we also newly introduce a swap\-regret loss function, which extends the regret\-loss framework beyond external regret and enables models to directly optimize for swap\-deviation robustness\. We further show that this swap\-regret loss admits a stationary point whose forward pass implements the corresponding swap\-regret update induced by classical Blum–Mansour no\-swap\-regret algorithm, with each head implementing an external\-regret update via smoothed fictitious play\. Together, these results show that regret\-trained attention can realize differentiable mechanisms whose deployment induces equilibrium behavior in games: external\-regret dynamics lead to coarse correlated equilibrium, while swap\-regret dynamics lead to correlated equilibrium\. Thus, regret\-based objectives steer minimal attention architectures toward online\-learning dynamics with game\-theoretic guarantees, without supervised traces of those algorithms\.

## Pattern\-Based Matrix Analysis Under Permutations

**Authors:** Andrei Ermakov

**ID:** 148683 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=vqLCMxTvrv>) | [PDF](<https://openreview.net/pdf?id=vqLCMxTvrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148683>)

Low\-rank approximation captures one important notion of matrix simplicity: a matrix is simple if it is well described by a low\-dimensional linear model\. This paper studies a complementary notion\. We consider matrices that become structurally simple only after permuting rows and columns, so that their mass concentrates in a prescribed geometric pattern such as a band, block\-diagonal, arrowhead, or related form\.  We introduce a pattern distance that measures how close a matrix is to a given structural mask after optimal reordering, giving a common framework for latent ordering, community detection, and bandwidth minimization\. The problem is NP\-hard in general; we derive an alternating algorithm based on Linear Assignment subproblems, and establish identifiability of the target structure up to pattern automorphisms\. We further introduce a pattern\-plus\-low\-rank decomposition that combines permutation\-structured fitting with a low\-rank residual; it dominates pure low\-rank approximation by feasibility and admits a strict rank separation on planted block\-diagonal targets, with broad empirical gains across pattern families\.  We evaluate the framework on synthetic recovery tasks, real correlation and graph adjacency matrices, and transformer attention heads \(GPT\-2, Qwen2\.5\-0\.5B and Qwen2\.5\-7B\), showing that a single universal algorithm recovers qualitatively different forms of matrix structure\.

## Near\-Linear Time Generalized Sinkhorn Algorithms for Bounded Genus Graphs

**Authors:** Krzysztof M Choromanski; Derek Long; Ananya Parashar; Dwaipayan Saha

**ID:** 155409 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=5rp5KcuMO2>) | [PDF](<https://openreview.net/pdf?id=5rp5KcuMO2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155409>)

We present GenusSink,  a new class of  approximate generalized Sinkhorn algorithms with shortest\-path\-distance costs for bounded genus \(e\.g\. planar\) graphs, providing near\-linear time: \(1\) pre\-processing, \(2\) iteration step, \(3\) final transport plan matrix querying and near\-linear memory\. Graphs handled by GenusSink include in particular planar graphs and bounded\-genus meshes approximating 3D objects\. GenusSink addresses total quadratic time complexity of its brute\-force counterpart by leveraging separator\-based decomposition of graphs, computational geometry techniques, and new results on fast matrix\-vector multiplications with generalized distance matrices, using in particular Fourier analysis and low displacement rank theory\. It is inspired by recent breakthroughs in graph theory on approximating bounded genus metrics with small treewidth metrics minor\. The graph\-centric approach enables us to target optimal transport problem with the corresponding distributions defined on the manifolds approximated by weighted graphs and with cost functions given by geodesic distances\. We conduct rigorous theoretical analysis of GenusSink, provide practical implementations, leveraging newly introduced in this paper separation graph field integrators \(S\-GFIs\) data structures and present empirical verification\. GenusSink provides orders of magnitude more accurate computations than other efficient Sinkhorn algorithms, while still guaranteeing significant computational improvements, as compared to the baseline\. As a by\-product of the developed methods, we show that GenusSink is $\\textbf\{numerically equivalent\}$ to the brute\-force geodesic Sinkhorn algorithm on n\-vertex graphs with treewidth $O\(\\log \\log \(n\)\)$ \(e\.g\. on trees\)\.

## A Theoretical Analysis of Why Masked Diffusion Models Mitigate the Reversal Curse

**Authors:** Moongyu Jeon; Sangwoo Shin; Bumjun Kim; Kyelim Lee; Albert No

**ID:** 149727 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=noEiGT8prX>) | [PDF](<https://openreview.net/pdf?id=noEiGT8prX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149727>)

_Abstract unavailable from the accessible public sources._

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

## On the Tightness and Computational Tractability of Higher\-Dimensional Confidence Sequences

**Authors:** Fabian Denoodt; Sibylle Hess; Joaquin Vanschoren; Christian Andersson Naesseth

**ID:** 154185 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=FZkTNX1Pl4>) | [PDF](<https://openreview.net/pdf?id=FZkTNX1Pl4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154185>)

_Abstract unavailable from the accessible public sources._

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

## Inner Product Aware Quantization: Provably Fast, Accurate, and Adaptive Algorithms

**Authors:** Nathan White; Krish Singal

**ID:** 155393 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=60WCaegfit>) | [PDF](<https://openreview.net/pdf?id=60WCaegfit>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155393>)

_Abstract unavailable from the accessible public sources._

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

## A Retained\-Signal Interface for LLM Watermark Robustness under Paraphrase

**Authors:** Chen Wang; Yinxuan Huang; Yexin Cui cui; Maoqing Zhong; LaiLong Luo

**ID:** 155532 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4sTuTf9CyC>) | [PDF](<https://openreview.net/pdf?id=4sTuTf9CyC>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155532>)

Watermark robustness under paraphrase is usually reported as AUC against a named rewriter, making results hard to compare across watermark schemes, paraphrasers, and detectors\. We propose a retained\-signal reporting interface: if a watermark injects KL signal $\\Delta=\\KL\(P\_1\\Vert P\_0\)$ and a paraphrase channel retains KL fraction $\\rho$, then any detector's post\-paraphrase advantage is controlled by $\\Delta\\rho$\. We give explicit Pinsker and Bretagnolle\-\-Huber threshold laws, prove the $\\Theta\(\\sqrt\{\\Delta\\rho\}\)$ rate is sharp for any $\(\\Delta,\\rho\)$\-only converse, and show the bound is implementation\-blind once watermark families are matched by $\\Delta$\. For real LLM paraphrases, we instantiate the interface as a score\-projected audit that estimates $\\widehat\{\\Delta\}\\widehat\{\\rho\}$ for a deployed detector and reports it with semantic preservation and the detector projection\. In a KGW/Unigram $\\times$ Qwen/Llama benchmark, this score\-effective signal predicts post\-paraphrase AUC across lengths, strengths, and paraphraser families\. The resulting protocol separates injected signal, retained signal, semantic quality, and detector choice, replacing one\-off AUC tables with a reproducible robustness report\.

## Voronoi\-Markov chain and spatial entropy for point pattern analysis

**Authors:** James C Mathews; Francisco Couzo; Aleksandr Petrov; Avijit Chatterjee; Saad Nadeem

**ID:** 150044 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=lD4F4lCTcN>) | [PDF](<https://openreview.net/pdf?id=lD4F4lCTcN>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150044>)

In this paper, we revisit the concept of entropy in the spatial context with the aim of deriving computable and interpretable metrics for point pattern analysis in domains such as histopathology\. We discuss stochastic point process assumptions like Poisson homogeneity and Simple Sequential Inhibition \(SSI\) and review established results for Voronoi and Delaunay tilings of point sets for their potential to provide null distributions for rigorous empirical hypothesis testing\. We present \(1\) a novel \`\`dense basin entropy'' defined in terms of the Ord distribution supported on Voronoi basins, which is shown to be sensitive to clustering, and \(2\) a related Markov chain designed as a simplification or approximation of Brownian motion in the underlying planar domain\. We prove a lower bound on the dense basin entropy in the SSI regime \(originally discovered in empirical experiments\) and show that the entropy rate and spectral gap of the Markov chain lead to sharp discrimination metrics\. Finally, we demonstrate the generalization to multiple\-set analysis via aggregation of one set over the Markov invariant measure for another\. Simulations and experiments in histopathology show that our proposed metrics offer insights complementary to other instantiations of entropy in spatial analysis\.

## Taming the Tails: Why Distributionally Robust Optimization Needs New Theory for Imbalanced Regression

**Authors:** Nathaniel Kang

**ID:** 152555 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=SFa3GaxCb3>) | [PDF](<https://openreview.net/pdf?id=SFa3GaxCb3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152555>)

Predictive models on structured tabular data often face imbalanced targets: training emphasizes common values while rare outcomes stay underrepresented\. Distributionally robust optimization hedges against shift, but standard ambiguity sets use a single radius over the entire distribution, so adversarial mass concentrates on dense regions and rare target ranges remain weakly protected; worst\-case statements then track bulk behavior rather than tails\. We introduce target\-conditional distributionally robust optimization \(TC\-DRO\), which defines ambiguity per target region with radii that grow where data are scarce\. We establish coverage, per\-region excess risk that tightens with local sample size when standard DRO yields vacuous tail guarantees, and a dual as weighted empirical risk with theory\-derived density\-adaptive weights\. Experiments on seven tabular benchmarks show that Wasserstein DRO collapses to empirical risk minimization under uniform weights, while global $\\chi^2$\-DRO can remain close to ERM in practice; TC\-DRO improves tail MSE and SERA relative to both standard training and recent imbalanced\-regression methods\.

## Hard Attention Transformers and BSS\-Machines

**Authors:** Lena Ehrmuth

**ID:** 148913 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=uF9Zr3T0p8>) | [PDF](<https://openreview.net/pdf?id=uF9Zr3T0p8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148913>)

We define a new variant of transformers called recursive transformers, which generate sequences of vectors without discretisation in each step\. We show that over ordered ring extensions of the integers recursive transformers with circuit activation functions and hard attention are computationally equivalent to the well\-established algebraic model of BSS\-machines\. If the transformers use feedforward networks instead, they are equivalent to linear BSS\-machines with degree\-2 branching\.

## Training with \(Swap\) Regret Loss in a Single\-Layer Self\-Attention Model: A Case Study on the Probability Simplex

**Authors:** Chanwoo Park; Asuman Ozdaglar

**ID:** 149270\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149270

[Paper](<https://openreview.net/forum?id=rZtbSbQ3kW>) | [PDF](<https://openreview.net/pdf?id=rZtbSbQ3kW>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149270>)

We revisit the regret loss framework introduced in \[Park, 2024\], which uses decision\-theoretic regret as a direct loss function for training models to make better decisions, through the lens of probability\-simplex policies\. Our first result shows that a single\-layer self\-attention model trained with regret loss admits a stationary point whose forward\-pass exactly matches \\emph\{smoothed fictitious play\} with the appropriate stepsize that ensures no\-regret behavior—i\.e\., for any given policy input, the model outputs the same update that smoothed fictitious play would produce\. In parallel, we also newly introduce a swap\-regret loss function, which extends the regret\-loss framework beyond external regret and enables models to directly optimize for swap\-deviation robustness\. We further show that this swap\-regret loss admits a stationary point whose forward pass implements the corresponding swap\-regret update induced by classical Blum–Mansour no\-swap\-regret algorithm, with each head implementing an external\-regret update via smoothed fictitious play\. Together, these results show that regret\-trained attention can realize differentiable mechanisms whose deployment induces equilibrium behavior in games: external\-regret dynamics lead to coarse correlated equilibrium, while swap\-regret dynamics lead to correlated equilibrium\. Thus, regret\-based objectives steer minimal attention architectures toward online\-learning dynamics with game\-theoretic guarantees, without supervised traces of those algorithms\.

## Pattern\-Based Matrix Analysis Under Permutations

**Authors:** Andrei Ermakov

**ID:** 148683\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148683

[Paper](<https://openreview.net/forum?id=vqLCMxTvrv>) | [PDF](<https://openreview.net/pdf?id=vqLCMxTvrv>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148683>)

Low\-rank approximation captures one important notion of matrix simplicity: a matrix is simple if it is well described by a low\-dimensional linear model\. This paper studies a complementary notion\. We consider matrices that become structurally simple only after permuting rows and columns, so that their mass concentrates in a prescribed geometric pattern such as a band, block\-diagonal, arrowhead, or related form\.  We introduce a pattern distance that measures how close a matrix is to a given structural mask after optimal reordering, giving a common framework for latent ordering, community detection, and bandwidth minimization\. The problem is NP\-hard in general; we derive an alternating algorithm based on Linear Assignment subproblems, and establish identifiability of the target structure up to pattern automorphisms\. We further introduce a pattern\-plus\-low\-rank decomposition that combines permutation\-structured fitting with a low\-rank residual; it dominates pure low\-rank approximation by feasibility and admits a strict rank separation on planted block\-diagonal targets, with broad empirical gains across pattern families\.  We evaluate the framework on synthetic recovery tasks, real correlation and graph adjacency matrices, and transformer attention heads \(GPT\-2, Qwen2\.5\-0\.5B and Qwen2\.5\-7B\), showing that a single universal algorithm recovers qualitatively different forms of matrix structure\.

## Tree Search With Predictions

**Authors:** Michael Dinitz; Bob Dong

**ID:** 152168 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=V2S3XOjOz5>) | [PDF](<https://openreview.net/pdf?id=V2S3XOjOz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152168>)

Algorithms with predictions, or learning\-augmented algorithms, has proved to be an extremely useful paradigm for combining machine learning with traditional algorithms\.  One of the textbook settings for this is searching a sorted array\.  Without a prediction classical binary search takes $O\(\\log n\)$ queries, while with a prediction we can use "doubling binary search" to find the target key using $O\(\\log \\eta\)$ queries, where $\\eta$ is the error of the prediction measured as the absolute value of the difference between the true location and the predicted location\.  Since an array is just a path graph, in this paper we ask whether similar bounds can be achieved for search on even slightly more general graphs: trees\.  We show first that the high\-level answer is "no": there is no search algorithm that uses $O\(\\log \\eta\)$ queries, where now $\\eta$ is the graph distance between the predicted location and the true location\.  However, as our main result, we show that such bounds can be achieved on trees which are "path\-like" in that they have low pathwidth\.  In particular, we prove that there is a search algorithm which uses at most $O\(k \\log \\eta\)$ queries, where $k$ is the pathwidth of the tree\.  We also prove a lower bound showing that our algorithm has existentially optimal query complexity\.  Finally, we show experimentally, on real\-life inputs, that our algorithm has query complexity which is notably better than the simple non\-prediction based algorithm\.

## Resilient Semi\-Supervised Inference with Heterogeneous Unlabeled Data

**Authors:** Mengyuan Wang; Chengde Qian; Haojie Ren; Changliang Zou

**ID:** 155194 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=7ZyMQkmbDz>) | [PDF](<https://openreview.net/pdf?id=7ZyMQkmbDz>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155194>)

Model\-assisted semi\-supervised learning offers a powerful paradigm for enhancing the efficiency of statistical estimation and inference by leveraging black\-box predictions on unlabeled data\. However, the validity of these methods typically relies on the strict assumption that labeled and unlabeled populations share identical distributional characteristics\. Consequently, state\-of\-the\-art approaches, such as prediction\-powered inference, become fragile when this assumption is violated\. To address the fragility, we propose a robust framework for semi\-supervised learning that remains reliable under distributional heterogeneity\. By embedding a robust statistical calibrator into the prediction\-rectification mechanism, the approach effectively reduces the bias arising from shifted or corrupted unlabeled samples\. To maximize data utility, we introduce an adaptive cross\-validation procedure to select the optimal calibrator, ensuring a reliable trade\-off between statistical efficiency and robustness\. Theoretical analysis confirms the consistency of the proposed estimator under mild conditions, while empirical results demonstrate its significant superiority over conventional baselines in heterogeneous environments\.

## Beyond the Full Slate: Evaluating MNL Algorithms on All Slates

**Authors:** Flavio Chierichetti; Mirko Giacchini; Ravi Kumar; Silvio Lattanzi; Alessandro Panconesi; Erasmo Tani; Andrew Tomkins

**ID:** 149458\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149458

[Paper](<https://openreview.net/forum?id=pwV1APiNY8>) | [PDF](<https://openreview.net/pdf?id=pwV1APiNY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149458>)

Multinomial logit models \(MNLs\) are ubiquitous in machine learning, particularly in recommendation systems\. While these models are typically evaluated using global metrics over a full catalog of items \(such as $\\ell\_2$\-error\), practical applications often involve making predictions on small, curated subsets or \`\`slates'' of items\. A model that minimizes global error may nevertheless yield very poor predictions on specific sub\-universes\. Yet, evaluating performance across all possible subsets remains computationally challenging\. In this paper, we present a set of new efficient algorithms to evaluate the small\-slate performance of MNL models\. Using these tools, we conduct an empirical study comparing standard non\-adaptive and adaptive learning algorithms\. We demonstrate that while methods that compute the Maximum Likelihood Estimate \(MLE\) suffer from poor worst\-case performance on small slates, specialized adaptive algorithms that dynamically sample difficult subsets can mitigate this issue\. Conversely, we find that non\-adaptive algorithms often achieve competitive average\-case performance; we provide a theoretical model explaining this phenomenon\. We conclude with recommendations for practitioners regarding when to utilize adaptive sampling based on the specific robustness requirements of their application\.

## Pointwise Lipschitz Continuous Graph Algorithms

**Authors:** Quanquan C Liu; Grigoris Velegkas; Yuichi Yoshida; Felix Zhou

**ID:** 155511\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155511

[Paper](<https://openreview.net/forum?id=52Yg457yMf>) | [PDF](<https://openreview.net/pdf?id=52Yg457yMf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155511>)

In many real\-world applications, it is undesirable to drastically change the problem solution after a small perturbation in the input as unstable outputs can lead to costly transaction fees, privacy and security concerns, reduced user trust, and lack of replicability\. Despite the widespread application of graph algorithms, many classical algorithms are not robust to small input disturbances\. Towards addressing this issue, we study the pointwise Lipschitz continuity of graph algorithms, a notion of stability introduced by Kumabe and Yoshida \(2023, FOCS’23\) and further studied in related settings \(Kumabe and Yoshida, 2024, ICALP’24\), \(Kumabe and Yoshida, 2025, SODA’25\), \(Gima et al\., 2025, ESA’25\)\.  Our main result is a linear programming \(LP\) based minimum S\-T cut algorithm with a provably optimal Lipschitz constant, as witnessed by an accompanying lower bound\. As a direct corollary, we give the first dynamic minimum S\-T cut algorithm with non\-trivial recourse bound\. At the core of our techniques is a novel framework for analyzing the Lipschitz constant of regularized LP relaxations\. Our framework crucially unlocks the use of weighted regularizers, which could not be analyzed through previous methods and leads to polynomial improvements in the Lipschitz constant compared to what is achievable through previous techniques\. To demonstrate the flexibility of our methods, we also design an LP\-based b\-matching algorithm that improves on the state\-of\- the\-art Lipschitz constant in certain input regimes when b ≡ 1\. Moreover, our algorithm cleanly extends to the general case when b ≥ 1, whereas prior works are specialized to the case of b ≡ 1\.

## Nearly\-Optimal Algorithm for Adversarial Kernelized Bandits

**Authors:** Shogo Iwazaki

**ID:** 155486\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155486

[Paper](<https://openreview.net/forum?id=5EgNQMwp80>) | [PDF](<https://openreview.net/pdf?id=5EgNQMwp80>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155486>)

This paper studies kernelized bandits \(also known as Gaussian process bandits\) in an adversarial environment, where the reward functions in a known reproducing kernel Hilbert space \(RKHS\) may be adversarially chosen at each round\. We show that the exponential\-weight algorithm achieves $\\tilde\{O\}\(\\sqrt\{T \\gamma\_T\}\)$ adversarial regret, where $T$ and $\\gamma\_T$ denote the number of total rounds and the maximum information gain, respectively\. For $\\nu$\-Mat\\'ern kernels, we also show algorithm\-independent lower bounds that guarantee the optimality of our algorithm up to polylogarithmic factors\. Furthermore, we present a computationally efficient variant of our algorithm using Nystr\\"om approximation while maintaining nearly optimal regret guarantees\.

## Estimating Implicit Regularization in Deep Learning

**Authors:** Joseph H Rudoler; Kevin Tan; Giles Hooker; Konrad Kording

**ID:** 155112\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155112

[Paper](<https://openreview.net/forum?id=8J2wYjpdE2>) | [PDF](<https://openreview.net/pdf?id=8J2wYjpdE2>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155112>)

Deep learning systems are known to exhibit \*implicit regularization\* \(alt\. \*implicit bias\*\), favoring simple solutions instead of merely  minimizing the loss function\. In some cases, we can analytically derive the implicit regularization \-\- connecting it to an equivalent penalty that augments the learning objective\. However, modern deep learning systems are complex, carrying modifications to the training procedure and architecture \(e\.g\. early stopping, minibatching, dropout\) whose effects are not always directly interpretable\. Although estimating the resulting implicit regularization could aid theorists in algorithm design and practitioners in interpreting their hyperparameter choices, this problem has received little direct attention\. It is also tractable: regularization makes weight updates deviate from loss gradients, promising a signal for identifying implicit bias\. Here we provide gradient matching methods that can be used to empirically estimate the implicit regularization\. Our method works on networks with known regularization, recovering popular explicit penalties like $\\ell\_1$ and $\\ell\_2$\. It also replicates known implicit effects, like the quadratic weight penalty induced by early stopping in gradient descent, demonstrating that it can be used to test theories of implicit regularization\. Crucially, because our method is empirical, it can handle implicit regularization in arbitrary networks\. We demonstrate this use by characterizing the effects of dropout in deep networks, showing implicit $\\ell\_2$ effects in this popular method\. Our work shows that practitioners can use gradient matching to understand regularization in networks with implicit biases that are too complicated to derive analytically\.

## Concept Modulation Models: A Unified Framework for Identifiability and Extrapolation

**Authors:** Soheun Yi; Yizhou Lu; Chandler Squires; Pradeep Ravikumar

**ID:** 153542 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=KanpVVPIzD>) | [PDF](<https://openreview.net/pdf?id=KanpVVPIzD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153542>)

Reliable generalization in conditional latent\-variable models requires understanding both identifiability and extrapolation: whether observed variation across attributes determines latent structure, and whether that structure determines distributions at unseen attributes\. However, existing identifiability and extrapolation guarantees are largely model\-specific, with separate analyses in nonlinear ICA, causal representation learning, perturbation modeling, and related conditional latent\-variable models\. We introduce \*concept modulation models \(CMMs\)\*, an attribute\-indexed class of conditional generative models with structure $A\\to \\Lambda \\to C\\to X$, where attributes select modulators, modulators induce latent concept laws, and concepts generate observed features\. CMMs lift transition\-based identifiability to conditional settings by showing that feature agreement on observed attributes induces a latent concept transition constrained by the CMM class\. We express these constraints through \*attribute potentials\*, log\-density ratios between attribute\-conditioned concept laws, separating the generic lifting step from model\-specific rigidity arguments\. The same potentials control extrapolation: agreement at unseen attributes holds exactly when the transported attribute\-potential identities extend to those attributes\. This yields algebraic extrapolation criteria, identifies the common potential\-based proof objects behind several existing identifiability and extrapolation results, and, when combined with the model\-specific rigidity arguments in those works, recovers their stated conclusions\.

## Spectral Identifiability for World Models: Polynomial Projectors, Resolvent Stability, and a Krylov Bottleneck

**Authors:** Phan Quoc Hung Mai; Duc H Nguyen; MINH LUONG DOAN; Ngoc Mai Vu; Khanh N Quoc; Nhung Duong; Naeem Ul Islam; Tuan Do

**ID:** 149561 | **Topic source:** inferred | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=pByZKc2Y2m>) | [PDF](<https://openreview.net/pdf?id=pByZKc2Y2m>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149561>)

_Abstract unavailable from the accessible public sources._

## Performative Prediction with Selective Labels

**Authors:** Giovani Valdrighi; Isabel Valera; Marcos M\. Raimundo

**ID:** 155604 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=4KuDZUSGv3>) | [PDF](<https://openreview.net/pdf?id=4KuDZUSGv3>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155604>)

_Abstract unavailable from the accessible public sources._

## Propagation of Chaos in Contextual Flow Maps

**Authors:** Chen; Zhengjiang Lin; Kaizhao Liu; Philippe Rigollet

**ID:** 151039 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=dQwi4yaHoE>) | [PDF](<https://openreview.net/pdf?id=dQwi4yaHoE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/151039>)

_Abstract unavailable from the accessible public sources._

## NeuroSynTheos: Learning to accelerate counterexample\-guided reactive synthesis modulo theories

**Authors:** Andoni Rodríguez; Cesar Sanchez

**ID:** 150943 | **Topic source:** official | **Abstract source:** missing | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=e9NgLNzzGp>) | [PDF](<https://openreview.net/pdf?id=e9NgLNzzGp>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150943>)

_Abstract unavailable from the accessible public sources._

## Tree Search With Predictions

**Authors:** Michael Dinitz; Bob Dong

**ID:** 152168\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152168

[Paper](<https://openreview.net/forum?id=V2S3XOjOz5>) | [PDF](<https://openreview.net/pdf?id=V2S3XOjOz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152168>)

Algorithms with predictions, or learning\-augmented algorithms, has proved to be an extremely useful paradigm for combining machine learning with traditional algorithms\.  One of the textbook settings for this is searching a sorted array\.  Without a prediction classical binary search takes $O\(\\log n\)$ queries, while with a prediction we can use "doubling binary search" to find the target key using $O\(\\log \\eta\)$ queries, where $\\eta$ is the error of the prediction measured as the absolute value of the difference between the true location and the predicted location\.  Since an array is just a path graph, in this paper we ask whether similar bounds can be achieved for search on even slightly more general graphs: trees\.  We show first that the high\-level answer is "no": there is no search algorithm that uses $O\(\\log \\eta\)$ queries, where now $\\eta$ is the graph distance between the predicted location and the true location\.  However, as our main result, we show that such bounds can be achieved on trees which are "path\-like" in that they have low pathwidth\.  In particular, we prove that there is a search algorithm which uses at most $O\(k \\log \\eta\)$ queries, where $k$ is the pathwidth of the tree\.  We also prove a lower bound showing that our algorithm has existentially optimal query complexity\.  Finally, we show experimentally, on real\-life inputs, that our algorithm has query complexity which is notably better than the simple non\-prediction based algorithm\.

## The Interplay of Data Structure and Imbalance in the Learning Dynamics of Diffusion Models

**Authors:** Flavio Nicoletti; Chenxiao Ma; Enrico Ventura; Luca Saglietti; Stefano Sarao Mannelli

**ID:** 155660 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=3xmpzYAkAo>) | [PDF](<https://openreview.net/pdf?id=3xmpzYAkAo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155660>)

Real\-world datasets are inherently heterogeneous, yet how per\-class structural differences and sampling imbalance shape the training dynamics of diffusion models—and potentially exacerbate disparities—remains poorly understood\. While models typically transition from an initial phase of generalization to memorizing the training set, existing theory assumes homogeneous data, leaving open how class imbalance and heterogeneity reshape these dynamics\. In this work, we develop a high\-dimensional analytical framework to study class\-dependent learning in score\-based diffusion models\. Analyzing a random\-features model trained on Gaussian mixtures, we derive the feature\-covariance spectrum to characterize per\-class generalization and memorization times\. We reveal the explicit hierarchy governing these dynamics: class variance is the primary determinant of learning order—consistently favoring higher\-variance classes—while centroid geometry plays a secondary role\. Sampling imbalance acts as a modulator that can reverse this ordering and, under strong imbalance, forces minority classes to acquire distinct, delayed speciation times during backward diffusion\. Together, these results suggest that diffusion models can memorize some classes while others remain insufficiently learned\. We validate our theoretical predictions empirically using U\-Net models trained on Fashion MNIST\.

## Atoms and Pivot Based Correlation Clustering

**Authors:** David R Lolck; Mikkel Thorup; Shuyi Yan

**ID:** 153440 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=LICZTK9DS7>) | [PDF](<https://openreview.net/pdf?id=LICZTK9DS7>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153440>)

Correlation clustering seeks a partitioning of the vertices of a graph that minimizes the number of disagreements: edges between different clusters and non\-edges within the same cluster\.  The classic \*pivot\-based correlation clustering\* algorithm of Ailon, Charikar, and Chawla \[JACM'08\] achieves a factor\-$3$ approximation\. However, known worst\-case examples attaining this bound rely on highly structured instances with exceptionally strong clusters, such as complete graphs minus a matching\.  In this work, we show that such worst\-case behavior is inherently tied to these highly clique\-like substructures\. Building on the notion of \*atoms\* introduced by Cohen\-Addad, Lattanzi, Mitrovic, Norouzi\-Fard, Parotsidis, and Tarnawski \[FOCS'23\] — subsets of vertices that cannot be separated in any optimal clustering — we prove that the approximation ratio of $3$ can only be realized when the pivot algorithm makes errors on such atoms\.  Motivated by this insight, we propose a modified pivot algorithm that removes atoms prior to each pivot step\. We prove that this yields an improved approximation ratio of $2\.9995$ in expectation\. Additionally, we evaluate our algorithm on synthetic datasets with varying amount of noise, demonstrating consistent empirical improvements over both the classic pivot algorithm and existing methods for identifying atoms\.

## Active Learning From Positive and Unlabeled Examples

**Authors:** Farnam Mansouri; Sandra Zilles; Shai Ben\-David

**ID:** 154434 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=DaOrmOgOYi>) | [PDF](<https://openreview.net/pdf?id=DaOrmOgOYi>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154434>)

Learning from positive and unlabeled data \(PU learning\) is a weakly supervised variant of binary classification in which the learner receives labels only for \(some\) positively labeled instances, while all other examples remain unlabeled\. Motivated by applications such as advertising and anomaly detection, we study \*active\* PU learning, where the learner adaptively queries instances from an unlabeled pool, but a label is revealed only when the queried instance is positive and an independent coin flip succeeds; otherwise the learner receives no information\. This paper provides the first theoretical analysis of the label complexity of active PU learning\.

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

## Tree Search With Predictions

**Authors:** Michael Dinitz; Bob Dong

**ID:** 152168\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 152168

[Paper](<https://openreview.net/forum?id=V2S3XOjOz5>) | [PDF](<https://openreview.net/pdf?id=V2S3XOjOz5>) | [Official poster](<https://neurips.cc/virtual/2026/poster/152168>)

Algorithms with predictions, or learning\-augmented algorithms, has proved to be an extremely useful paradigm for combining machine learning with traditional algorithms\.  One of the textbook settings for this is searching a sorted array\.  Without a prediction classical binary search takes $O\(\\log n\)$ queries, while with a prediction we can use "doubling binary search" to find the target key using $O\(\\log \\eta\)$ queries, where $\\eta$ is the error of the prediction measured as the absolute value of the difference between the true location and the predicted location\.  Since an array is just a path graph, in this paper we ask whether similar bounds can be achieved for search on even slightly more general graphs: trees\.  We show first that the high\-level answer is "no": there is no search algorithm that uses $O\(\\log \\eta\)$ queries, where now $\\eta$ is the graph distance between the predicted location and the true location\.  However, as our main result, we show that such bounds can be achieved on trees which are "path\-like" in that they have low pathwidth\.  In particular, we prove that there is a search algorithm which uses at most $O\(k \\log \\eta\)$ queries, where $k$ is the pathwidth of the tree\.  We also prove a lower bound showing that our algorithm has existentially optimal query complexity\.  Finally, we show experimentally, on real\-life inputs, that our algorithm has query complexity which is notably better than the simple non\-prediction based algorithm\.

## The Interplay of Data Structure and Imbalance in the Learning Dynamics of Diffusion Models

**Authors:** Flavio Nicoletti; Chenxiao Ma; Enrico Ventura; Luca Saglietti; Stefano Sarao Mannelli

**ID:** 155660\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155660

[Paper](<https://openreview.net/forum?id=3xmpzYAkAo>) | [PDF](<https://openreview.net/pdf?id=3xmpzYAkAo>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155660>)

Real\-world datasets are inherently heterogeneous, yet how per\-class structural differences and sampling imbalance shape the training dynamics of diffusion models—and potentially exacerbate disparities—remains poorly understood\. While models typically transition from an initial phase of generalization to memorizing the training set, existing theory assumes homogeneous data, leaving open how class imbalance and heterogeneity reshape these dynamics\. In this work, we develop a high\-dimensional analytical framework to study class\-dependent learning in score\-based diffusion models\. Analyzing a random\-features model trained on Gaussian mixtures, we derive the feature\-covariance spectrum to characterize per\-class generalization and memorization times\. We reveal the explicit hierarchy governing these dynamics: class variance is the primary determinant of learning order—consistently favoring higher\-variance classes—while centroid geometry plays a secondary role\. Sampling imbalance acts as a modulator that can reverse this ordering and, under strong imbalance, forces minority classes to acquire distinct, delayed speciation times during backward diffusion\. Together, these results suggest that diffusion models can memorize some classes while others remain insufficiently learned\. We validate our theoretical predictions empirically using U\-Net models trained on Fashion MNIST\.

## Beyond the Full Slate: Evaluating MNL Algorithms on All Slates

**Authors:** Flavio Chierichetti; Mirko Giacchini; Ravi Kumar; Silvio Lattanzi; Alessandro Panconesi; Erasmo Tani; Andrew Tomkins

**ID:** 149458\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149458

[Paper](<https://openreview.net/forum?id=pwV1APiNY8>) | [PDF](<https://openreview.net/pdf?id=pwV1APiNY8>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149458>)

Multinomial logit models \(MNLs\) are ubiquitous in machine learning, particularly in recommendation systems\. While these models are typically evaluated using global metrics over a full catalog of items \(such as $\\ell\_2$\-error\), practical applications often involve making predictions on small, curated subsets or \`\`slates'' of items\. A model that minimizes global error may nevertheless yield very poor predictions on specific sub\-universes\. Yet, evaluating performance across all possible subsets remains computationally challenging\. In this paper, we present a set of new efficient algorithms to evaluate the small\-slate performance of MNL models\. Using these tools, we conduct an empirical study comparing standard non\-adaptive and adaptive learning algorithms\. We demonstrate that while methods that compute the Maximum Likelihood Estimate \(MLE\) suffer from poor worst\-case performance on small slates, specialized adaptive algorithms that dynamically sample difficult subsets can mitigate this issue\. Conversely, we find that non\-adaptive algorithms often achieve competitive average\-case performance; we provide a theoretical model explaining this phenomenon\. We conclude with recommendations for practitioners regarding when to utilize adaptive sampling based on the specific robustness requirements of their application\.

## Pointwise Lipschitz Continuous Graph Algorithms

**Authors:** Quanquan C Liu; Grigoris Velegkas; Yuichi Yoshida; Felix Zhou

**ID:** 155511\-\-3 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155511

[Paper](<https://openreview.net/forum?id=52Yg457yMf>) | [PDF](<https://openreview.net/pdf?id=52Yg457yMf>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155511>)

In many real\-world applications, it is undesirable to drastically change the problem solution after a small perturbation in the input as unstable outputs can lead to costly transaction fees, privacy and security concerns, reduced user trust, and lack of replicability\. Despite the widespread application of graph algorithms, many classical algorithms are not robust to small input disturbances\. Towards addressing this issue, we study the pointwise Lipschitz continuity of graph algorithms, a notion of stability introduced by Kumabe and Yoshida \(2023, FOCS’23\) and further studied in related settings \(Kumabe and Yoshida, 2024, ICALP’24\), \(Kumabe and Yoshida, 2025, SODA’25\), \(Gima et al\., 2025, ESA’25\)\.  Our main result is a linear programming \(LP\) based minimum S\-T cut algorithm with a provably optimal Lipschitz constant, as witnessed by an accompanying lower bound\. As a direct corollary, we give the first dynamic minimum S\-T cut algorithm with non\-trivial recourse bound\. At the core of our techniques is a novel framework for analyzing the Lipschitz constant of regularized LP relaxations\. Our framework crucially unlocks the use of weighted regularizers, which could not be analyzed through previous methods and leads to polynomial improvements in the Lipschitz constant compared to what is achievable through previous techniques\. To demonstrate the flexibility of our methods, we also design an LP\-based b\-matching algorithm that improves on the state\-of\- the\-art Lipschitz constant in certain input regimes when b ≡ 1\. Moreover, our algorithm cleanly extends to the general case when b ≥ 1, whereas prior works are specialized to the case of b ≡ 1\.

## Concept Modulation Models: A Unified Framework for Identifiability and Extrapolation

**Authors:** Soheun Yi; Yizhou Lu; Chandler Squires; Pradeep Ravikumar

**ID:** 153542\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 153542

[Paper](<https://openreview.net/forum?id=KanpVVPIzD>) | [PDF](<https://openreview.net/pdf?id=KanpVVPIzD>) | [Official poster](<https://neurips.cc/virtual/2026/poster/153542>)

Reliable generalization in conditional latent\-variable models requires understanding both identifiability and extrapolation: whether observed variation across attributes determines latent structure, and whether that structure determines distributions at unseen attributes\. However, existing identifiability and extrapolation guarantees are largely model\-specific, with separate analyses in nonlinear ICA, causal representation learning, perturbation modeling, and related conditional latent\-variable models\. We introduce \*concept modulation models \(CMMs\)\*, an attribute\-indexed class of conditional generative models with structure $A\\to \\Lambda \\to C\\to X$, where attributes select modulators, modulators induce latent concept laws, and concepts generate observed features\. CMMs lift transition\-based identifiability to conditional settings by showing that feature agreement on observed attributes induces a latent concept transition constrained by the CMM class\. We express these constraints through \*attribute potentials\*, log\-density ratios between attribute\-conditioned concept laws, separating the generic lifting step from model\-specific rigidity arguments\. The same potentials control extrapolation: agreement at unseen attributes holds exactly when the transported attribute\-potential identities extend to those attributes\. This yields algebraic extrapolation criteria, identifies the common potential\-based proof objects behind several existing identifiability and extrapolation results, and, when combined with the model\-specific rigidity arguments in those works, recovers their stated conclusions\.

## Rethinking Softmax Attention: Polynomial Activations for Transformers

**Authors:** Hemanth Saratchandran; Jianqiao Zheng; Yiping Ji; Wenbo Zhang; Simon Lucey

**ID:** 154100 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

[Paper](<https://openreview.net/forum?id=GFLgVpdI1N>) | [PDF](<https://openreview.net/pdf?id=GFLgVpdI1N>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154100>)

Softmax attention is typically viewed as effective because it produces a normalized probability distribution over input tokens\. In this paper, we challenge this view by showing that a key mechanism behind softmax attention is its implicit control of the Frobenius norm of the attention matrix, which stabilizes training\. Motivated by this observation, we study alternative attention activations, focusing on polynomial maps that provide a similar regularization effect without satisfying the usual softmax constraints\. Our theoretical analysis shows that certain polynomial activations can replace softmax despite violating positivity, row\-wise normalization, and sparsity\. Extensive experiments across transformer applications show that these alternatives achieve strong performance, suggesting that the success of softmax attention is not inherently tied to its probabilistic interpretation\.

## Avoiding Obfuscation with Prover\-Estimator Debate

**Authors:** Jonah Brown\-Cohen; Geoffrey Irving; Georgios Piliouras; Lijie Chen; Jiawei Li; Zhiyang Xun

**ID:** 148404\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 148404

[Paper](<https://openreview.net/forum?id=y6MafkaOLE>) | [PDF](<https://openreview.net/pdf?id=y6MafkaOLE>) | [Official poster](<https://neurips.cc/virtual/2026/poster/148404>)

Training powerful AI systems to exhibit desired behaviors hinges on the ability to provide accurate human supervision on increasingly complex tasks\. A promising approach to this problem is to amplify human judgement by leveraging the power of two competing AIs in a debate about the correct solution to a given problem\. Prior theoretical work has provided a complexity\-theoretic formalization of AI debate, and posed the problem of designing protocols for AI debate that guarantee the correctness of human judgements for as complex a class of problems as possible\. Recursive debates, in which debaters decompose a complex problem into simpler subproblems, hold promise for growing the class of problems that can be accurately judged in a debate\. However, existing protocols for recursive debate run into the \*obfuscated arguments problem\*: a dishonest debater can use a computationally efficient strategy that forces an honest opponent to solve a computationally intractable problem to win\. We mitigate this problem with a new recursive debate protocol that, under certain stability assumptions, ensures that an honest debater can win with a strategy requiring computational efficiency comparable to their opponent\.

## How Long Does Infinite Width Last? Signal Propagation in Long\-Range Linear Recurrences

**Authors:** Mariia Seleznova

**ID:** 155327\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 155327

[Paper](<https://openreview.net/forum?id=6SiRDlbWwF>) | [PDF](<https://openreview.net/pdf?id=6SiRDlbWwF>) | [Official poster](<https://neurips.cc/virtual/2026/poster/155327>)

We study signal propagation in linear recurrent models at finite width\. While existing signal propagation theory relies predominantly on the infinite\-width limit, it remains unclear for how long that approximation remains accurate when recurrent depth $t$ grows jointly with width $n$\. This question is especially relevant for modern recurrent sequence models, whose natural operating regime involves long input sequences, i\.e\., large $t$\. We derive exact finite\-width formulas for the hidden state signal energies in linear recurrences under complex Gaussian initialization\. Using these formulas, we identify the joint depth\-width scaling regimes that govern signal propagation: \(i\) a \*subcritical regime\* $t=o\(\\sqrt n\)$, in which the infinite\-width approximation remains valid; \(ii\) a \*critical regime\* $t\\sim c\\sqrt n$, in which non\-negligible deviations from infinite\-width predictions appear and a nontrivial joint scaling limit emerges; and \(iii\) a \*supercritical regime\* $t\\gg \\sqrt n$, in which finite\-width effects dominate\. Thus, our results pinpoint the precise recurrent depth scale at which infinite\-width theory breaks down in long\-range linear recurrences\. In turn, this shows when standard initialization schemes, such as Glorot, become unstable\. More broadly, our results demonstrate that finite\-width effects accumulate more rapidly with depth in recurrent models than in feedforward ones, leading to qualitatively different signal propagation behavior\.

## The Locality Cost of Semantic Patch Self\-Distillation

**Authors:** Xi Weng; Zhaoyu Liu; lianyu hu; Jin Song Dong

**ID:** 150207\-\-2 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150207

[Paper](<https://openreview.net/forum?id=jvnyjDi5md>) | [PDF](<https://openreview.net/pdf?id=jvnyjDi5md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150207>)

Masked patch self\-distillation has become a default ingredient of modern joint\-embedding pretraining, and is widely regarded as a uniform enhancement of dense visual representations\. In this work, we revisit this assumption and argue that its effect is more nuanced\. Through controlled experiments across multiple joint\-embedding objectives and model scales, we observe a consistent tension: while the auxiliary patch objective strengthens semantic abstraction, it systematically erodes fine\-grained spatial correspondence\. To examine this phenomenon beyond the reach of human\-annotated benchmarks, we introduce annotation\-free diagnostics that probe how much local visual evidence remains accessible in the learned representation\. We further provide a population\-level theoretical analysis showing that this trade\-off is not incidental but follows directly from the conditional nature of masked semantic prediction, under which target variation unpredictable from visible context is provably averaged out\. Taken together, our findings recast masked patch self\-distillation as an explicit trade\-off between semantic abstraction and local detail, rather than a uniform improvement to dense features\.

## The sublevel Flood bifiltration: towards scalable 2\-parameter persistent homology

**Authors:** Mattéo Clémot; Julie Digne; Julien Tierny

**ID:** 154747\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 154747

[Paper](<https://openreview.net/forum?id=BJ7STXgkS4>) | [PDF](<https://openreview.net/pdf?id=BJ7STXgkS4>) | [Official poster](<https://neurips.cc/virtual/2026/poster/154747>)

Multi\-parameter persistent homology is a rapidly developing branch of topological data analysis that improves the robustness of single\-parameter persistent homology to outliers, while still capturing the metric characteristics of the data\. However, a notable limitation is its lack of scalability\. In this paper, we introduce a novel approach for efficiently computing 2\-parameter persistent homology on large point sets\. Our work extends the Flood filtration, originally developed for single\-parameter persistence\. Our construction, called the sublevel Flood bifiltration, offers a scalable approximation of the sublevel Flood bifiltration\. We show that it benefits from theoretical stability properties and describe how to compute it efficiently\. We demonstrate the performance of our approach in classification tasks on low\-dimensional synthetic datasets, where density awareness is critical, as well as on real\-world time series datasets\.

## Coresets for Clustering Using Noisy Comparisons and Few Distance Queries

**Authors:** Amir Carmel; Robert Krauthgamer

**ID:** 149987\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 149987

[Paper](<https://openreview.net/forum?id=lhTqQ3cQIZ>) | [PDF](<https://openreview.net/pdf?id=lhTqQ3cQIZ>) | [Official poster](<https://neurips.cc/virtual/2026/poster/149987>)

Coresets are a fundamental tool for scaling clustering algorithms,  but standard constructions assume full access to the pairwise distances\.  In many modern settings, access to distances is costly and thus limited,  and algorithms must instead rely on inexpensive comparison queries\.  We study coreset construction in the Rank\-Measure \(RM\) model,  where the algorithm can make noisy comparison queries to a quadruplet oracle  alongside a small number of distance queries\.  In this model, we present the first algorithm to construct an $\\epsilon$\-coreset for $\(k,z\)$\-clustering in Euclidean space\.  It matches the coreset\-size bounds known in the classical model, while using only polylogarithmically many distance queries in the input size\.  Our approach is based on a uniform\-sampling framework \[Chen, SICOMP 2009\], which decomposes the input into geometric rings and samples uniformly within each ring\.  We implement this approach using primarily noisy comparison queries,  and then compress the result using a standard full\-access coreset construction\.  In contrast, prior work in oracle\-based clustering achieved only constant\-factor guarantees\. We complement our theoretical findings with experiments that demonstrate strong empirical performance against full\-access baselines while using significantly fewer distance computations\.

## Predicting Human\-Gain Curves under Local Proxy Optimization from Repeated Ratings

**Authors:** Moonwon Choi; Kisung Nam; Seunggeun Lee

**ID:** 150880\-\-2 | **Topic source:** official | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150880

[Paper](<https://openreview.net/forum?id=ehnuc3RcGX>) | [PDF](<https://openreview.net/pdf?id=ehnuc3RcGX>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150880>)

Optimizing a proxy objective can improve human\-perceived quality, but the resulting gain can vary with optimization strength\. Average proxy\-\-human correlation alone does not reveal how human\-perceived quality changes as optimization strength increases\. We propose a pre\-optimization diagnostic that uses repeated human ratings to predict the human\-gain curve induced by a fixed proxy\. The method models proxy optimization as a KL\-regularized exponential tilt\. At KL radius $d$, the local gain is approximated by $A\\sqrt\{d\}\+Bd$, where $A$ measures first\-order proxy\-\-human alignment and $B$ captures the leading second\-order correction along the proxy\-optimization path\. We estimate $A$ and $B$ from repeated human ratings on calibration items and test the resulting gain\-curve prediction on held\-out evaluation items\. Across SummEval, analysis\-eligible WMT MQM clusters, an OpenMEVA\-MAGS ROC/WP repeated\-rating slice, and a GPT\-4o judge proxy experiment, the proposed approach consistently reduces held\-out gain\-prediction error relative to $A$\-only, zero\-gain, and reliability\-only baselines\. Transfer experiments across datasets and evaluation slices show that source coefficients are useful priors, but target calibration further improves prediction\. The method provides a principled local diagnostic for estimating the human\-gain curve of a fixed proxy as optimization strength varies\.

## The Locality Cost of Semantic Patch Self\-Distillation

**Authors:** Xi Weng; Zhaoyu Liu; lianyu hu; Jin Song Dong

**ID:** 150207\-\-3 | **Topic source:** inferred | **Abstract source:** official-abstracts | **PDF source:** derived-openreview (unverified)

**Repeated source row:** 150207

[Paper](<https://openreview.net/forum?id=jvnyjDi5md>) | [PDF](<https://openreview.net/pdf?id=jvnyjDi5md>) | [Official poster](<https://neurips.cc/virtual/2026/poster/150207>)

Masked patch self\-distillation has become a default ingredient of modern joint\-embedding pretraining, and is widely regarded as a uniform enhancement of dense visual representations\. In this work, we revisit this assumption and argue that its effect is more nuanced\. Through controlled experiments across multiple joint\-embedding objectives and model scales, we observe a consistent tension: while the auxiliary patch objective strengthens semantic abstraction, it systematically erodes fine\-grained spatial correspondence\. To examine this phenomenon beyond the reach of human\-annotated benchmarks, we introduce annotation\-free diagnostics that probe how much local visual evidence remains accessible in the learned representation\. We further provide a population\-level theoretical analysis showing that this trade\-off is not incidental but follows directly from the conditional nature of masked semantic prediction, under which target variation unpredictable from visible context is provably averaged out\. Taken together, our findings recast masked patch self\-distillation as an explicit trade\-off between semantic abstraction and local detail, rather than a uniform improvement to dense features\.

